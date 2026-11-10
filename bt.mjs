// Backtest thuật toán Crypto RSI Radar trên dữ liệu quá khứ
// - Dùng ĐÚNG code thuật toán trong index.html (như bot 24/7), chạy lại từng nến trong quá khứ (walk-forward, không nhìn trước)
// - Kèo đạt chuẩn như bot: điểm ≥ 70 (đã cộng/trừ xu hướng khung lớn), R:R TP1 ≥ 2, SL ≤ 35%; mỗi mã chỉ 1 lệnh tại một thời điểm
// - Chấm lệnh bằng hàm simulate() của thuật toán: nhiều TP, dời SL, thoát khi phá cấu trúc
// - So sánh 2 phiên bản: --html index.html --html2 variant.html (cùng dữ liệu)
// Cách chạy: node bt.mjs [--days 730] [--max 150] [--side long|short] [--html index.html] [--html2 file] [--label ten] [--out backtests]
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { Worker, isMainThread, parentPort, workerData } from "node:worker_threads";

const arg = (k, d) => { const i = process.argv.indexOf("--" + k); return i > 0 ? process.argv[i + 1] : d; };
const DAYS = +arg("days", 730), MAX = +arg("max", 200), SIDE = arg("side", "long") === "short" ? "short" : "long";
const HTML = arg("html", "index.html"), HTML2 = arg("html2", ""), NAMES = arg("names", ""), LABEL = arg("label", ""), OUT = arg("out", "backtests");
const TFS = ["4h", "1d", "1w"], HTF = { "4h": "1d", "1d": "1w", "1w": null }, EXEC = { "4h": "4h", "1d": "4h", "1w": "1d" };
const STEP = { "4h": 3, "1d": 1, "1w": 1 };                 // 4H: xét mỗi 12 giờ cho nhẹ; 1D/1W: mọi nến
const WIN = 400;                                             // số nến đưa vào thuật toán mỗi lần (giống bot)
const MS = { "4h": 144e5, "1d": 864e5, "1w": 6048e5 };
const sleep = ms => new Promise(r => setTimeout(r, ms));

function loadCore(file, text) {
  const js = (text ?? fs.readFileSync(file, "utf8")).split("<script>")[1].split("</script>")[0];
  const grab = re => { const m = js.match(re); if (!m) throw new Error("thiếu " + re); return m[0]; };
  const a = js.indexOf("/* ---------- indicators ---------- */"), b = js.indexOf("/* ---------- render ---------- */");
  const src = [grab(/const TFMS=[^\n]*/), grab(/const SETS=[^\n]*/), grab(/const SKIP=[^\n]*/), grab(/const STOCKS=[^\n]*/), js.slice(a, b),
    grab(/const trendOf=[^\n]*/), grab(/function simulate\([\s\S]*?\n\}/)].join("\n");
  const extra = (js.match(/const EXTRA_CRYPTO=(\[[^\]]*\])/) || [])[1];
  const K = new Function("S", src + "\nreturn {compute,trendOf,simulate,clamp,TFMS,PICK_MIN:typeof PICK_MIN!=='undefined'?PICK_MIN:70,MIN_RR:typeof MIN_RR!=='undefined'?MIN_RR:2,TF_ADD:typeof TF_ADD!=='undefined'?TF_ADD:{}};")({ tf: "4h", win: 3, os: 30, ob: 70 });
  K.extra = extra ? JSON.parse(extra) : [];
  return K;
}

/* ---------- dữ liệu nến (có phân trang để lấy đủ 1–2 năm) ---------- */
async function getJ(url, opt = {}) {
  for (let k = 0; k < 3; k++) {
    const ac = new AbortController(), tm = setTimeout(() => ac.abort(), 20000);   // hẹn giờ thường (giữ tiến trình sống), không dùng AbortSignal.timeout
    try { const r = await fetch(url, { ...opt, signal: ac.signal }).finally(() => clearTimeout(tm)); if (r.status === 429) { await sleep(2000 * (k + 1)); continue; } if (!r.ok) throw new Error("HTTP " + r.status); return await r.json(); }
    catch (e) { if (k === 2) throw e; await sleep(800); }
  }
}
async function binance(b, tf, from) {
  let out = [], st = from;
  for (let p = 0; p < 20; p++) {
    const j = await getJ(`https://data-api.binance.vision/api/v3/klines?symbol=${b}USDT&interval=${tf}&limit=1000&startTime=${st}`);
    if (!Array.isArray(j) || !j.length) break;
    out = out.concat(j.map(a => ({ t: a[0], o: +a[1], h: +a[2], l: +a[3], c: +a[4], v: +a[5] })));
    if (j.length < 1000) break; st = j.at(-1)[0] + 1;
  }
  if (!out.length) throw new Error("binance trống");
  return out;
}
async function hyper(b, tf, from) {
  const one = async (coin, div) => {
    const a = await getJ("https://api.hyperliquid.xyz/info", { method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "candleSnapshot", req: { coin, interval: tf, startTime: from, endTime: Date.now() } }) });
    if (!Array.isArray(a) || !a.length) throw new Error("HL trống");
    return a.map(k => ({ t: +k.t, o: +k.o / div, h: +k.h / div, l: +k.l / div, c: +k.c / div, v: +k.v * div }));
  };
  try { return await one(b, 1); } catch (e) { return await one("k" + b, 1000); }
}
async function bybit(b, tf, from) {
  const iv = { "4h": "240", "1d": "D", "1w": "W" }[tf]; let out = [], end = Date.now();
  for (let p = 0; p < 20; p++) {
    const j = await getJ(`https://api.bybit.com/v5/market/kline?category=spot&symbol=${b}USDT&interval=${iv}&limit=1000&start=${from}&end=${end}`);
    const L = j && j.retCode === 0 ? j.result.list : []; if (!L.length) break;
    out = L.map(a => ({ t: +a[0], o: +a[1], h: +a[2], l: +a[3], c: +a[4], v: +a[5] })).reverse().concat(out);
    end = +L.at(-1)[0] - 1; if (L.length < 1000 || end <= from) break;
  }
  if (!out.length) throw new Error("bybit trống");
  return out;
}
async function okx(b, tf, from) {
  const bar = { "4h": "4H", "1d": "1Dutc", "1w": "1Wutc" }[tf]; let out = [], after = "";
  for (let p = 0; p < 40; p++) {
    const j = await getJ(`https://www.okx.com/api/v5/market/history-candles?instId=${b}-USDT&bar=${bar}&limit=100${after ? "&after=" + after : ""}`);
    const L = j && j.code === "0" ? j.data : []; if (!L.length) break;
    out = L.map(a => ({ t: +a[0], o: +a[1], h: +a[2], l: +a[3], c: +a[4], v: +a[5] })).reverse().concat(out);
    after = L.at(-1)[0]; if (+after <= from || L.length < 100) break;
  }
  if (!out.length) throw new Error("okx trống");
  return out.filter(k => k.t >= from);
}
async function gate(b, tf, from) {
  const iv = { "4h": "4h", "1d": "1d", "1w": "7d" }[tf];
  const j = await getJ(`https://api.gateio.ws/api/v4/spot/candlesticks?currency_pair=${b}_USDT&interval=${iv}&limit=1000`);
  if (!Array.isArray(j) || !j.length) throw new Error("gate trống");
  return j.map(a => ({ t: +a[0] * 1000, o: +a[5], h: +a[3], l: +a[4], c: +a[2], v: +a[6] })).filter(k => k.t >= from);
}
async function candles(b, tf, from) {
  // lấy nguồn có lịch sử dài nhất trong các sàn (Binance → Bybit → OKX → Hyperliquid → Gate)
  let best = null;
  for (const f of [binance, bybit, okx, hyper, gate]) {
    try { const c = await f(b, tf, from); if (c.length && (!best || c.length > best.length * 1.2)) best = c; if (best && best[0].t <= from + MS[tf] * 30) break; } catch (e) { }
  }
  if (!best) throw new Error("không sàn nào có " + b);
  return best;
}

/* ---------- chạy thuật toán qua từng nến ---------- */
function partial(htfBars, lowBars, upto, htf) {
  // nến khung lớn tại thời điểm `upto`: các nến đã đóng + nến đang chạy dựng lại từ nến khung nhỏ (không nhìn trước)
  const ms = MS[htf], key = t => htf === "1w" ? Math.floor((t - 4 * 864e5) / ms) : Math.floor(t / ms), k0 = key(upto);
  const closed = htfBars.filter(x => key(x.t) < k0);
  const part = lowBars.filter(x => key(x.t) === k0 && x.t <= upto);
  if (part.length) closed.push({ t: part[0].t, o: part[0].o, h: Math.max(...part.map(x => x.h)), l: Math.min(...part.map(x => x.l)), c: part.at(-1).c, v: part.reduce((a, x) => a + x.v, 0) });
  return closed;
}
function signals(K, D, startT) {
  const out = [];
  for (const tf of TFS) {
    const bars = D[tf]; if (!bars || bars.length < 80) continue;
    for (let i = 60; i < bars.length - 1; i += STEP[tf]) {
      if (bars[i].t < startT) continue;
      const w = bars.slice(Math.max(0, i - WIN + 1), i + 1), t = { src: "ex", c: w, tf, side: SIDE };
      K.compute(t); const B = t.buy; if (!B || !B.plan || B.plan.reject) continue;
      let sc = B.score; if (sc < K.PICK_MIN - 8) continue;
      const htf = HTF[tf];
      if (htf && D[htf]) {
        const hc = partial(D[htf], bars, bars[i].t, htf).slice(-WIN);
        if (hc.length >= 60) { const h = { src: "ex", c: hc, tf: htf, side: SIDE }; K.compute(h); const hT = K.trendOf(h); if (hT != null) { if (hT > .3) sc += 3; else if (hT < -.3) sc -= 5; } }
      }
      sc = K.clamp(sc, 0, 100);
      if (sc >= K.PICK_MIN + (K.TF_ADD[tf] || 0) && B.plan.rr1 >= K.MIN_RR) out.push({ t: bars[i].t + MS[tf], tf, sc, P: B.plan, parts: Object.fromEntries(B.parts.map(([n, v]) => [n, v == null ? null : +v.toFixed(3)])), rank: sc + Math.min(B.plan.rr1, 5) * 5 });
    }
  }
  return out.sort((a, b) => a.t - b.t || b.rank - a.rank);
}
function trades(K, D, base, startT) {
  const S = signals(K, D, startT), res = []; let busy = 0;
  for (const s of S) {
    if (s.t < busy) continue;
    const P = s.P, j = { side: SIDE, tf: s.tf, at: s.t, mode: P.mode, entry: P.entry, stop: P.stop, tp1: P.tp1, tp2: P.tp2, tps: P.tps, tpf: P.tpf };
    const ex = D[EXEC[s.tf]].filter(k => k.t >= s.t - MS[EXEC[s.tf]]), cur = ex.length ? ex.at(-1).c : null;
    const r = K.simulate(j, ex, cur);
    const end = r.exitAt || (r.status === "expired" ? s.t + 12 * MS[s.tf] : Infinity);
    busy = end === Infinity ? Infinity : end + 1;
    res.push({ base, tf: s.tf, at: s.t, sc: Math.round(s.sc), mode: P.mode === "Chờ hồi" ? "limit" : "market", nTp: (P.tps || []).length, rr1: +P.rr1.toFixed(2),
      st: r.status, r: +r.r.toFixed(3), exitAt: r.exitAt || null, hit: r.hit || 0, parts: s.parts, eWhy: P.ref || "", sWhy: P.why || "", tWhy: P.tp1Why || "" });
  }
  return res;
}

/* ---------- thống kê ---------- */
const DONE = ["tp2", "trail", "tp1_be", "struct", "sl"];
function stats(T) {
  const C = T.filter(x => DONE.includes(x.st)), R = C.map(x => x.r), n = C.length;
  const sum = R.reduce((a, b) => a + b, 0), win = R.filter(r => r > 0.05).length, pos = R.filter(r => r > 0).reduce((a, b) => a + b, 0), neg = -R.filter(r => r < 0).reduce((a, b) => a + b, 0);
  let eq = 0, pk = 0, dd = 0; for (const x of [...C].sort((a, b) => a.exitAt - b.exitAt)) { eq += x.r; pk = Math.max(pk, eq); dd = Math.max(dd, pk - eq); }
  const lim = T.filter(x => x.mode === "limit"), filled = lim.filter(x => x.st !== "expired");
  return { signals: T.length, closed: n, open: T.filter(x => x.st === "open").length, winRate: n ? +(win / n * 100).toFixed(1) : null, totalR: +sum.toFixed(2),
    expectancy: n ? +(sum / n).toFixed(3) : null, profitFactor: neg ? +(pos / neg).toFixed(2) : null, maxDD_R: +dd.toFixed(2),
    limitFillRate: lim.length ? +(filled.length / lim.length * 100).toFixed(1) : null,
    exits: Object.fromEntries(["tp2", "trail", "tp1_be", "struct", "sl", "expired", "open", "pending"].map(k => [k, T.filter(x => x.st === k).length])) };
}
const group = (T, f) => { const m = {}; for (const x of T) (m[f(x)] = m[f(x)] || []).push(x); return Object.fromEntries(Object.entries(m).sort().map(([k, v]) => [k, stats(v)])); };
function report(T) {
  return { all: stats(T), byTF: group(T, x => x.tf), byScore: group(T, x => x.sc >= 90 ? "90+" : x.sc >= 80 ? "80-89" : "70-79"), byMode: group(T, x => x.mode),
    byTPs: group(T, x => x.nTp + " TP"), byAsset: Object.fromEntries(Object.entries(group(T, x => x.base)).sort((a, b) => b[1].totalR - a[1].totalR)) };
}
function md(title, R, R2) {
  const row = (k, s, s2) => `| ${k} | ${s.closed} | ${s.winRate ?? "–"}% | ${s.totalR} | ${s.expectancy ?? "–"} | ${s.profitFactor ?? "–"} | ${s.maxDD_R} |` + (s2 ? ` ${s2.closed} | ${s2.winRate ?? "–"}% | ${s2.totalR} | ${s2.expectancy ?? "–"} | ${s2.maxDD_R} |` : "");
  const head = `| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |` + (R2 ? ` Lệnh (B) | Win (B) | Tổng R (B) | R/lệnh (B) | Max DD (B) |` : "");
  const sep = head.replace(/[^|]/g, "-");
  const sec = (name, a, b) => [`\n### ${name}\n`, head, sep, ...Object.keys(a).map(k => row(k, a[k], b && b[k] ? b[k] : (b ? { closed: 0, totalR: 0, maxDD_R: 0 } : null)))].join("\n");
  const ex = s => Object.entries(s.exits).map(([k, v]) => `${k} ${v}`).join(" · ");
  return [`# ${title}\n`, `Kỳ backtest: ${DAYS} ngày · chế độ ${SIDE.toUpperCase()} · ${new Date().toISOString().slice(0, 10)}`,
    R2 ? `\nA = thuật toán hiện tại (main) · B = phiên bản thử nghiệm\n` : "",
    sec("Tổng", { "Tất cả": R.all }, R2 ? { "Tất cả": R2.all } : null),
    `\nKiểu thoát (A): ${ex(R.all)}` + (R2 ? `\nKiểu thoát (B): ${ex(R2.all)}` : ""),
    `\nTỷ lệ lệnh chờ được khớp (A): ${R.all.limitFillRate ?? "–"}%` + (R2 ? ` · (B): ${R2.all.limitFillRate ?? "–"}%` : ""),
    sec("Theo khung", R.byTF, R2 && R2.byTF), sec("Theo điểm", R.byScore, R2 && R2.byScore), sec("Vào ngay / Chờ hồi", R.byMode, R2 && R2.byMode),
    sec("Theo số TP", R.byTPs, R2 && R2.byTPs),
    `\n### 10 mã tốt nhất / tệ nhất (A)\n`, ...Object.entries(R.byAsset).filter(([, s]) => s.closed).slice(0, 10).map(([k, s]) => `- ${k}: ${s.totalR}R (${s.closed} lệnh)`),
    "…", ...Object.entries(R.byAsset).filter(([, s]) => s.closed).slice(-10).map(([k, s]) => `- ${k}: ${s.totalR}R (${s.closed} lệnh)`),
    `\nLưu ý: backtest dùng nến đã đóng, khi một nến chạm cả SL lẫn TP thì tính SL trước (thận trọng); chưa tính phí giao dịch, funding và trượt giá.`].join("\n");
}

/* ---------- hiệu quả từng phần ---------- */
// So sánh R trung bình của lệnh có / không có một yếu tố (hoặc điểm phần đó cao / thấp). Điểm hiệu quả 0–10: 5 = trung tính,
// mỗi +0.05R chênh lệch = +1 điểm. Chỉ là tương quan trong các lệnh đã qua ngưỡng vào kèo; ít mẫu (< 30) thì đánh dấu "ít dữ liệu".
const FACTORS = [["Đỉnh/đáy Dow", /Dow/], ["Đỉnh/đáy swing lớn", /swing lớn/], ["Đỉnh swing cũ / kháng cự cũ bị phá", /swing cũ|kháng cự cũ|hỗ trợ cũ/], ["BOS", /BOS/],
  ["POC anchored", /POC anchored/], ["POC 250 nến", /POC volume profile/], ["HVN", /HVN/], ["Fib sóng 2 (sóng 1)", /Fib [0-9.]+ sóng 1/], ["Fib sóng 4 (sóng 3)", /Fib [0-9.]+ sóng 3/],
  ["Đỉnh sóng 1 (sàn sóng 4)", /đỉnh sóng 1|đáy sóng 1/], ["Mức sai Elliott", /mức sai Elliott/], ["Mục tiêu Fibonacci Elliott", /mục tiêu Fibonacci/], ["EMA 200", /EMA 200/], ["EMA 50", /EMA 50/], ["EMA 21", /EMA 21/],
  ["Mây Ichimoku", /mây Ichimoku/], ["Break mây Ichimoku", /break (lên|xuống) mây/], ["RSI 70/30", /RSI chạm/], ["RSI 45–55", /RSI 45–55/], ["MACD (mức giá)", /MACD (còn|cắt)/],
  ["ADX/DI mạnh", /ADX \d+ > 25|ADX \d+ đang tăng/], ["+DI vừa cắt", /DI vừa cắt/], ["ADX cạn lực (đảo chiều)", /cạn lực|mất lực/], ["RSI động lượng", /RSI \d+ \+|, RSI \d+/], ["MACD histogram tăng", /histogram/]];
function effect(T) {
  const C = T.filter(x => DONE.includes(x.st)); if (!C.length) return null;
  const avg = a => a.length ? a.reduce((s, x) => s + x.r, 0) / a.length : null, base = avg(C);
  const sc = d => d == null ? null : Math.max(0, Math.min(10, +(5 + d / .05).toFixed(1)));
  const parts = [...new Set(C.flatMap(x => Object.keys(x.parts || {})))].map(n => {
    const v = C.filter(x => x.parts && x.parts[n] != null).sort((a, b) => a.parts[n] - b.parts[n]), k = Math.floor(v.length / 3);
    if (k < 5) return { n, d: null, nn: v.length };
    const lo = avg(v.slice(0, k)), hi = avg(v.slice(-k)); return { n, d: hi - lo, hi, lo, nn: v.length };
  });
  const fac = [];
  for (const [name, re] of FACTORS) for (const [loc, key] of [["Entry", "eWhy"], ["SL", "sWhy"], ["TP1", "tWhy"]]) {
    const w = C.filter(x => re.test(x[key])), wo = C.filter(x => !re.test(x[key]));
    if (w.length < 8 || wo.length < 8) continue;
    fac.push({ name, loc, n: w.length, rw: avg(w), rwo: avg(wo), d: avg(w) - avg(wo) });
  }
  return { base, parts, fac, sc };
}
function effectMd(E) {
  if (!E) return "";
  const f = x => (x >= 0 ? "+" : "") + x.toFixed(3);
  const P = E.parts.map(p => `| ${p.n} | ${p.nn} | ${p.d == null ? "–" : f(p.hi)} | ${p.d == null ? "–" : f(p.lo)} | ${p.d == null ? "–" : f(p.d)} | **${p.d == null ? "–" : E.sc(p.d)}**${p.nn < 30 ? " (ít dữ liệu)" : ""} |`);
  const F = [...E.fac].sort((a, b) => b.d - a.d).map(x => `| ${x.name} | ${x.loc} | ${x.n} | ${f(x.rw)} | ${f(x.rwo)} | ${f(x.d)} | **${E.sc(x.d)}**${x.n < 30 ? " (ít dữ liệu)" : ""} |`);
  return [`\n## Hiệu quả từng phần (thuật toán hiện tại)\n`, `R trung bình mỗi lệnh: ${f(E.base)}. Điểm hiệu quả 0–10: 5 = trung tính, trên 5 = giúp tăng lợi nhuận, dưới 5 = kéo lợi nhuận xuống (mỗi 0.05R chênh lệch = 1 điểm).\n`,
    `### Các phần của điểm /100 (so 1/3 lệnh có điểm phần đó cao nhất với 1/3 thấp nhất)\n`, "| Phần | Số lệnh | R/lệnh nhóm cao | R/lệnh nhóm thấp | Chênh lệch | Điểm hiệu quả |", "|---|---|---|---|---|---|", ...P,
    `\n### Các yếu tố vùng giá (lệnh CÓ yếu tố ở vị trí đó so với KHÔNG có)\n`, "| Yếu tố | Vị trí | Số lệnh có | R/lệnh khi có | R/lệnh khi không | Chênh lệch | Điểm hiệu quả |", "|---|---|---|---|---|---|---|", ...F,
    `\nLưu ý: đây là tương quan trong các lệnh đã đạt chuẩn vào kèo, không phải quan hệ nhân quả; yếu tố hay đi cùng nhau có thể "mượn" hiệu quả của nhau. Dùng để chọn thí nghiệm, sau đó kiểm chứng bằng so sánh phiên bản.`].join("\n");
}

/* ---------- chạy ---------- */
// Luồng phụ (worker): nhận dữ liệu 1 mã + chỉ số phiên bản → trả về danh sách lệnh. Chạy song song trên mọi nhân CPU.
if (!isMainThread) {
  const KS = workerData.texts.map(t => loadCore(null, t));
  parentPort.on("message", ({ id, vi, D, base, startT }) => {
    try { parentPort.postMessage({ id, T: trades(KS[vi], D, base, startT) }); }
    catch (e) { parentPort.postMessage({ id, T: [], err: e.message }); }
  });
} else {
const t0 = Date.now(), mainText = fs.readFileSync(HTML, "utf8"), K1 = loadCore(null, mainText);
const VFILES = HTML2 ? HTML2.split(",").filter(Boolean) : [], VNAMES = NAMES ? NAMES.split(",") : [];
const V = VFILES.map((f, i) => ({ name: VNAMES[i] || path.basename(f, ".html"), text: fs.readFileSync(f, "utf8"), T: [] }));
// thí nghiệm dạng "vá" (experiments/*.json: [{find, replace}, ...]) áp lên index.html hiện tại → không cần nhánh riêng
const EXP = arg("exp", ""), expSkip = [];
if (EXP) {
  const files = fs.existsSync(EXP) && fs.statSync(EXP).isDirectory() ? fs.readdirSync(EXP).filter(f => f.endsWith(".json")).sort().map(f => path.join(EXP, f)) : EXP.split(",");
  for (const f of files) {
    try {
      const X = JSON.parse(fs.readFileSync(f, "utf8")); let t = mainText;
      for (const p of X.patch || []) { if (!t.includes(p.find)) throw new Error("không tìm thấy đoạn cần vá: " + p.find.slice(0, 60)); t = t.split(p.find).join(p.replace); }
      loadCore(null, t);                                                      // kiểm tra bản vá chạy được
      V.push({ name: X.name || path.basename(f, ".json"), desc: X.desc || "", text: t, T: [] });
    } catch (e) { expSkip.push(`${path.basename(f)}: ${e.message}`); }
  }
}
const K2 = V.length === 1 && !EXP;
let uni = [];
try { const st = JSON.parse(fs.readFileSync("state.json", "utf8")); uni = Object.keys(st.universe || {}); if (!uni.length) uni = [...new Set((st.journal || []).filter(j => j.src !== "st").map(j => j.base))]; } catch (e) { }
uni = [...new Set([...uni, ...K1.extra])].filter(b => /^[A-Z0-9]{2,12}$/.test(b)).slice(0, MAX);
const startT = Date.now() - DAYS * 864e5, from = { "4h": startT - WIN * MS["4h"], "1d": startT - WIN * MS["1d"], "1w": Date.UTC(2017, 0, 1) };
const NW = Math.max(1, Math.min(8, os.cpus().length));
console.log(`Backtest ${uni.length} mã · ${DAYS} ngày · ${SIDE} · ${NW} luồng${V.length ? ` · so sánh ${V.length} phiên bản: ${V.map(v => v.name).join(", ")}` : ""}`);
const texts = [mainText, ...V.map(v => v.text)];
const workers = Array.from({ length: NW }, () => new Worker(new URL(import.meta.url), { workerData: { texts }, argv: process.argv.slice(2) }));
const wait = new Map(); let seq = 0, rr = 0;
for (const w of workers) w.on("message", m => { const f = wait.get(m.id); wait.delete(m.id); if (m.err) console.log("  lỗi luồng:", m.err); f(m.T); });
const task = (vi, D, base) => new Promise(res => { const id = ++seq; wait.set(id, res); workers[rr++ % NW].postMessage({ id, vi, D, base, startT }); });
const keep = setInterval(() => { }, 10000);                  // giữ tiến trình sống khi chờ mạng
const A = [], B = [], miss = [];
let done = 0;
async function runOne(b) {
  const D = {};
  for (const tf of TFS) { try { D[tf] = await candles(b, tf, from[tf]); } catch (e) { } }
  if (!D["4h"] || !D["1d"]) { miss.push(b); return; }
  const R = await Promise.all(texts.map((_, vi) => task(vi, D, b)));
  A.push(...R[0]); V.forEach((v, i) => v.T.push(...R[i + 1]));
  if (++done % 10 === 0) console.log(`  ${done}/${uni.length} mã · ${((Date.now() - t0) / 1000).toFixed(0)}s`);
}
let qi = 0; await Promise.all(Array.from({ length: 3 }, async () => { while (qi < uni.length) await runOne(uni[qi++]); }));
clearInterval(keep); for (const w of workers) w.terminate();
if (K2) B.push(...V[0].T);
const RA = report(A), RB = K2 ? report(B) : null;
// bảng so sánh nhiều phiên bản
const MID = Date.now() - DAYS * 864e5 / 2;                 // chia đôi kỳ backtest: nửa đầu / nửa sau (kiểm tra độ ổn định, tránh "học thuộc" dữ liệu)
const half = (T, first) => stats(T.filter(x => first ? x.at < MID : x.at >= MID));
const effScore = R => R.all.expectancy == null || RA.all.expectancy == null ? "–" : Math.max(0, Math.min(10, +(5 + (R.all.expectancy - RA.all.expectancy) / .05).toFixed(1)));
const stable = T => { const a = half(T, true).expectancy, b = half(T, false).expectancy, a0 = half(A, true).expectancy, b0 = half(A, false).expectancy;
  if (a == null || b == null || a0 == null || b0 == null) return "–"; const da = a - a0, db = b - b0; return da > 0 && db > 0 ? "✅ tốt hơn cả 2 năm" : da < 0 && db < 0 ? "❌ tệ hơn cả 2 năm" : "⚠️ chỉ tốt 1 năm"; };
const cmpRow = (name, R, T, main) => { const s = R.all, tf = k => R.byTF[k] ? R.byTF[k].totalR : 0, h1 = half(T, true), h2 = half(T, false);
  return `| ${name} | ${main ? "5 (mốc)" : "**" + effScore(R) + "**"} | ${main ? "–" : stable(T)} | ${s.closed} | ${s.winRate ?? "–"}% | ${s.totalR} | ${s.expectancy ?? "–"} | ${s.profitFactor ?? "–"} | ${s.maxDD_R} | ${h1.totalR} (${h1.expectancy ?? "–"}/lệnh) | ${h2.totalR} (${h2.expectancy ?? "–"}/lệnh) | ${tf("4h")} | ${tf("1d")} | ${tf("1w")} | ${s.limitFillRate ?? "–"}% |`; };
const cmp = V.length ? ["\n## So sánh các phiên bản\n", "| Phiên bản | Điểm hiệu quả (0–10) | Ổn định | Lệnh đóng | Win rate | Tổng R | R/lệnh | PF | Max DD | R năm 1 | R năm 2 | R 4H | R 1D | R 1W | Lệnh chờ khớp |", "|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|",
  cmpRow("**main (hiện tại)**", RA, A, true), ...V.map(v => cmpRow(v.name, report(v.T), v.T))].join("\n") + "\n" +
  V.filter(v => v.desc).map(v => `- **${v.name}**: ${v.desc}`).join("\n") + (expSkip.length ? `\n\nThí nghiệm bị bỏ qua: ${expSkip.join("; ")}` : "") + "\n" : "";
const name = `${new Date().toISOString().slice(0, 10)}-${SIDE}${LABEL ? "-" + LABEL.replace(/[^a-z0-9-]/gi, "") : ""}`;
fs.mkdirSync(OUT, { recursive: true });
const text = cmp + effectMd(effect(A)) + "\n" + md(`Backtest ${SIDE.toUpperCase()}${LABEL ? " · " + LABEL : ""}`, RA, RB) + (miss.length ? `\n\nKhông lấy được dữ liệu: ${miss.join(", ")}` : "");
fs.writeFileSync(path.join(OUT, name + ".md"), text);
const slim = T => T.map(({ parts, eWhy, sWhy, tWhy, ...x }) => x);
fs.writeFileSync(path.join(OUT, name + ".json"), JSON.stringify({ at: Date.now(), days: DAYS, side: SIDE, label: LABEL, assets: uni.length, miss,
  A: RA, variants: V.map(v => ({ name: v.name, desc: v.desc || "", R: report(v.T), half1: half(v.T, true), half2: half(v.T, false) })), half1: half(A, true), half2: half(A, false), tradesA: A }));
console.log(text);
console.log(`\nXong sau ${((Date.now() - t0) / 1000).toFixed(0)}s → ${OUT}/${name}.md`);
}
