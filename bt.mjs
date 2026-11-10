// Backtest thuật toán Crypto RSI Radar trên dữ liệu quá khứ
// - Dùng ĐÚNG code thuật toán trong index.html (như bot 24/7), chạy lại từng nến trong quá khứ (walk-forward, không nhìn trước)
// - Kèo đạt chuẩn như bot: điểm ≥ 70 (đã cộng/trừ xu hướng khung lớn), R:R TP1 ≥ 2, SL ≤ 35%; mỗi mã chỉ 1 lệnh tại một thời điểm
// - Chấm lệnh bằng hàm simulate() của thuật toán: nhiều TP, dời SL, thoát khi phá cấu trúc
// - So sánh 2 phiên bản: --html index.html --html2 variant.html (cùng dữ liệu)
// Cách chạy: node bt.mjs [--days 730] [--max 150] [--side long|short] [--html index.html] [--html2 file] [--label ten] [--out backtests]
import fs from "node:fs";
import path from "node:path";

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
  const K = new Function("S", src + "\nreturn {compute,trendOf,simulate,clamp,TFMS,PICK_MIN:typeof PICK_MIN!=='undefined'?PICK_MIN:70};")({ tf: "4h", win: 3, os: 30, ob: 70 });
  K.extra = extra ? JSON.parse(extra) : [];
  return K;
}

/* ---------- dữ liệu nến (có phân trang để lấy đủ 1–2 năm) ---------- */
async function getJ(url, opt = {}) {
  for (let k = 0; k < 3; k++) {
    try { const r = await fetch(url, { ...opt, signal: AbortSignal.timeout(20000) }); if (r.status === 429) { await sleep(2000 * (k + 1)); continue; } if (!r.ok) throw new Error("HTTP " + r.status); return await r.json(); }
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
async function candles(b, tf, from) {
  try { return await binance(b, tf, from); } catch (e) { return await hyper(b, tf, from); }
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
      if (sc >= K.PICK_MIN && B.plan.rr1 >= 2) out.push({ t: bars[i].t + MS[tf], tf, sc, P: B.plan, rank: sc + Math.min(B.plan.rr1, 5) * 5 });
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
      st: r.status, r: +r.r.toFixed(3), exitAt: r.exitAt || null, hit: r.hit || 0 });
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

/* ---------- chạy ---------- */
const t0 = Date.now(), K1 = loadCore(HTML);
const VFILES = HTML2 ? HTML2.split(",").filter(Boolean) : [], VNAMES = NAMES ? NAMES.split(",") : [];
const V = VFILES.map((f, i) => ({ name: VNAMES[i] || path.basename(f, ".html"), K: loadCore(f), T: [] }));
// thí nghiệm dạng "vá" (experiments/*.json: [{find, replace}, ...]) áp lên index.html hiện tại → không cần nhánh riêng
const EXP = arg("exp", ""), expSkip = [];
if (EXP) {
  const base = fs.readFileSync(HTML, "utf8"), files = fs.existsSync(EXP) && fs.statSync(EXP).isDirectory() ? fs.readdirSync(EXP).filter(f => f.endsWith(".json")).sort().map(f => path.join(EXP, f)) : EXP.split(",");
  for (const f of files) {
    try {
      const X = JSON.parse(fs.readFileSync(f, "utf8")); let t = base;
      for (const p of X.patch || []) { if (!t.includes(p.find)) throw new Error("không tìm thấy đoạn cần vá: " + p.find.slice(0, 60)); t = t.split(p.find).join(p.replace); }
      V.push({ name: X.name || path.basename(f, ".json"), desc: X.desc || "", K: loadCore(null, t), T: [] });
    } catch (e) { expSkip.push(`${path.basename(f)}: ${e.message}`); }
  }
}
const K2 = V.length === 1 && !EXP ? V[0].K : null;
let uni = [];
try { const st = JSON.parse(fs.readFileSync("state.json", "utf8")); uni = Object.keys(st.universe || {}); if (!uni.length) uni = [...new Set((st.journal || []).filter(j => j.src !== "st").map(j => j.base))]; } catch (e) { }
uni = [...new Set([...uni, ...K1.extra])].filter(b => /^[A-Z0-9]{2,12}$/.test(b)).slice(0, MAX);
const startT = Date.now() - DAYS * 864e5, from = { "4h": startT - WIN * MS["4h"], "1d": startT - WIN * MS["1d"], "1w": Date.UTC(2017, 0, 1) };
console.log(`Backtest ${uni.length} mã · ${DAYS} ngày · ${SIDE}${V.length ? ` · so sánh ${V.length} phiên bản: ${V.map(v => v.name).join(", ")}` : ""}`);
const A = [], B = [], miss = [];
let done = 0;
async function runOne(b) {
  const D = {};
  for (const tf of TFS) { try { D[tf] = await candles(b, tf, from[tf]); } catch (e) { } }
  if (!D["4h"] || !D["1d"]) { miss.push(b); return; }
  A.push(...trades(K1, D, b, startT));
  for (const v of V) v.T.push(...trades(v.K, D, b, startT));
  if (K2) B.push(...V[0].T.slice(B.length));
  if (++done % 10 === 0) console.log(`  ${done}/${uni.length} mã · ${((Date.now() - t0) / 1000).toFixed(0)}s`);
}
let qi = 0; await Promise.all(Array.from({ length: 4 }, async () => { while (qi < uni.length) await runOne(uni[qi++]); }));
const RA = report(A), RB = K2 ? report(B) : null;
// bảng so sánh nhiều phiên bản
const cmpRow = (name, R) => { const s = R.all, tf = k => R.byTF[k] ? R.byTF[k].totalR : 0;
  return `| ${name} | ${s.closed} | ${s.winRate ?? "–"}% | ${s.totalR} | ${s.expectancy ?? "–"} | ${s.profitFactor ?? "–"} | ${s.maxDD_R} | ${tf("4h")} | ${tf("1d")} | ${tf("1w")} | ${s.limitFillRate ?? "–"}% |`; };
const cmp = V.length ? ["\n## So sánh các phiên bản\n", "| Phiên bản | Lệnh đóng | Win rate | Tổng R | R/lệnh | PF | Max DD | R 4H | R 1D | R 1W | Lệnh chờ khớp |", "|---|---|---|---|---|---|---|---|---|---|---|",
  cmpRow("**main (hiện tại)**", RA), ...V.map(v => cmpRow(v.name, report(v.T)))].join("\n") + "\n" +
  V.filter(v => v.desc).map(v => `- **${v.name}**: ${v.desc}`).join("\n") + (expSkip.length ? `\n\nThí nghiệm bị bỏ qua: ${expSkip.join("; ")}` : "") + "\n" : "";
const name = `${new Date().toISOString().slice(0, 10)}-${SIDE}${LABEL ? "-" + LABEL.replace(/[^a-z0-9-]/gi, "") : ""}`;
fs.mkdirSync(OUT, { recursive: true });
const text = cmp + md(`Backtest ${SIDE.toUpperCase()}${LABEL ? " · " + LABEL : ""}`, RA, RB) + (miss.length ? `\n\nKhông lấy được dữ liệu: ${miss.join(", ")}` : "");
fs.writeFileSync(path.join(OUT, name + ".md"), text);
fs.writeFileSync(path.join(OUT, name + ".json"), JSON.stringify({ at: Date.now(), days: DAYS, side: SIDE, label: LABEL, assets: uni.length, miss, A: RA, B: RB, variants: V.map(v => ({ name: v.name, R: report(v.T) })), tradesA: A, tradesB: K2 ? B : undefined }));
console.log(text);
console.log(`\nXong sau ${((Date.now() - t0) / 1000).toFixed(0)}s → ${OUT}/${name}.md`);
