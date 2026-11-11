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
// --days 2020 = từ 01/01/2020 tới nay · --days max = từ 2018 · --days 730 = 730 ngày gần nhất
const DAYS_ARG = arg("days", "730"), DAYS = DAYS_ARG === "max" ? Math.floor((Date.now() - Date.UTC(2018, 0, 1)) / 864e5) : /^\d{4}$/.test(DAYS_ARG) ? Math.floor((Date.now() - Date.UTC(+DAYS_ARG, 0, 1)) / 864e5) : +DAYS_ARG, MAX = +arg("max", 200), SIDE = arg("side", "long") === "short" ? "short" : "long";
const HTML = arg("html", "index.html"), HTML2 = arg("html2", ""), NAMES = arg("names", ""), LABEL = arg("label", ""), OUT = arg("out", "backtests");
const TFS = ["4h", "1d", "1w"], LOWTFS = ["15m", "1h"], HTF = { "15m": "1h", "1h": "4h", "4h": "1d", "1d": "1w", "1w": null };
const EXEC = { "15m": "15m", "1h": "1h", "4h": "1h", "1d": "1h", "1w": "1d" };   // chấm SL/TP bằng nến nhỏ hơn cho chính xác
const FEE_TAKER = +arg("taker", .045), FEE_MAKER = +arg("maker", .015), FUND_APR = +arg("funding", 10), NOFEE = arg("fee", "1") === "0";   // phí Hyperliquid (%) và funding ước tính %/năm
const PERTF = arg("pertf", "0") === "1";                     // 1: mỗi khung có vị thế riêng (đo từng khung độc lập); 0: 1 lệnh/mã như bot
const LOW_DAYS = Math.min(DAYS, arg("lowdays", "730") === "max" ? DAYS : +arg("lowdays", "730")), LOWTF_ON = arg("lowtf", "1") !== "0";   // --lowtf 0: chỉ xét 4H/1D/1W     // BTC 15m/1h: chỉ xét 2 năm gần nhất cho nhẹ
const STEP = { "15m": 1, "1h": 1, "4h": +arg("step4h", 1), "1d": 1, "1w": 1 };    // xét mọi nến (step 1) để kết quả không phụ thuộc thời điểm lấy mẫu
const WIN = 500;                                             // số nến đưa vào thuật toán mỗi lần (GIỐNG HỆT bot thật: 500 nến)
const MS = { "15m": 9e5, "1h": 36e5, "4h": 144e5, "1d": 864e5, "1w": 6048e5 };
const sleep = ms => new Promise(r => setTimeout(r, ms));
let K1s = [], EXP_BARS = 12;   // nhãn các mã cổ phiếu (để tách thống kê crypto / cổ phiếu)

function loadCore(file, text) {
  const js = (text ?? fs.readFileSync(file, "utf8")).split("<script>")[1].split("</script>")[0];
  EXP_BARS = +((js.match(/const expiry=j\.at\+(\d+)\*TFMS/) || [])[1] || 12);   // số nến lệnh chờ hết hạn (đọc từ thuật toán)
  const grab = re => { const m = js.match(re); if (!m) throw new Error("thiếu " + re); return m[0]; };
  const a = js.indexOf("/* ---------- indicators ---------- */"), b = js.indexOf("/* ---------- render ---------- */");
  const src = [grab(/const TFMS=[^\n]*/), grab(/const SETS=[^\n]*/), grab(/const SKIP=[^\n]*/), grab(/const STOCKS=[^\n]*/), js.slice(a, b),
    grab(/const trendOf=[^\n]*/), grab(/function simulate\([\s\S]*?\n\}/)].join("\n");
  const extra = (js.match(/const EXTRA_CRYPTO=(\[[^\]]*\])/) || [])[1];
  const K = new Function("S", src + "\nreturn {compute,trendOf,simulate,clamp,TFMS,PICK_MIN:typeof PICK_MIN!=='undefined'?PICK_MIN:70,RR_TF:typeof RR_TF!=='undefined'?RR_TF:{},REGIME_EMA:typeof REGIME_EMA!=='undefined'?REGIME_EMA:200,REGIME_SLOPE:typeof REGIME_SLOPE!=='undefined'?REGIME_SLOPE:0,REGIME_SRC:typeof REGIME_SRC!=='undefined'?REGIME_SRC:'ema',REGIME_DOW_LOOSE:typeof REGIME_DOW_LOOSE!=='undefined'?REGIME_DOW_LOOSE:false,dow,rsOK:typeof rsOK!=='undefined'?rsOK:null,volOK:typeof volOK!=='undefined'?volOK:null,MIN_RR:typeof MIN_RR!=='undefined'?MIN_RR:2,TF_ADD:typeof TF_ADD!=='undefined'?TF_ADD:{},HTF_MIN:typeof HTF_MIN!=='undefined'?HTF_MIN:null,REGIME:typeof REGIME!=='undefined'?REGIME:false,LOW_TF_ASSETS:typeof LOW_TF_ASSETS!=='undefined'?LOW_TF_ASSETS:[],LOW_TFS:typeof LOW_TFS!=='undefined'?LOW_TFS:['15m','1h'],LTF_CONFIRM:typeof LTF_CONFIRM!=='undefined'?LTF_CONFIRM:{},upClear:typeof upClear!=='undefined'?upClear:()=>true,ltfOK:typeof ltfOK!=='undefined'?ltfOK:null,ema};")({ tf: "4h", win: 3, os: 30, ob: 70 });
  K.extra = extra ? JSON.parse(extra) : [];
  try { K.stocks = JSON.parse((js.match(/const STOCKS=(\[[\s\S]*?\]\]);/) || [])[1] || "[]"); } catch (e) { K.stocks = []; }
  K.lowAssets = K.LOW_TF_ASSETS || [];
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
  for (let p = 0; p < 400; p++) {
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
  const iv = { "15m": "15", "1h": "60", "4h": "240", "1d": "D", "1w": "W" }[tf]; let out = [], end = Date.now();
  for (let p = 0; p < 150; p++) {
    const j = await getJ(`https://api.bybit.com/v5/market/kline?category=spot&symbol=${b}USDT&interval=${iv}&limit=1000&start=${from}&end=${end}`);
    const L = j && j.retCode === 0 ? j.result.list : []; if (!L.length) break;
    out = L.map(a => ({ t: +a[0], o: +a[1], h: +a[2], l: +a[3], c: +a[4], v: +a[5] })).reverse().concat(out);
    end = +L.at(-1)[0] - 1; if (L.length < 1000 || end <= from) break;
  }
  if (!out.length) throw new Error("bybit trống");
  return out;
}
async function okx(b, tf, from) {
  const bar = { "15m": "15m", "1h": "1H", "4h": "4H", "1d": "1Dutc", "1w": "1Wutc" }[tf]; let out = [], after = "";
  for (let p = 0; p < 40; p++) {
    const j = await getJ(`https://www.okx.com/api/v5/market/history-candles?instId=${b}-USDT&bar=${bar}&limit=100${after ? "&after=" + after : ""}`);
    const L = j && j.code === "0" ? j.data : []; if (!L.length) break;
    out = L.map(a => ({ t: +a[0], o: +a[1], h: +a[2], l: +a[3], c: +a[4], v: +a[5] })).reverse().concat(out);
    after = L.at(-1)[0]; if (+after <= from || L.length < 100) break;
  }
  if (!out.length) throw new Error("okx trống");
  return out.filter(k => k.t >= from);
}
async function kucoin(b, tf, from) {
  const ty = { "15m": "15min", "1h": "1hour", "4h": "4hour", "1d": "1day", "1w": "1week" }[tf]; let out = [], end = Math.floor(Date.now() / 1000);
  for (let p = 0; p < 40; p++) {
    const j = await getJ(`https://api.kucoin.com/api/v1/market/candles?type=${ty}&symbol=${b}-USDT&startAt=${Math.floor(from / 1000)}&endAt=${end}`);
    const L = j && j.code === "200000" ? j.data : []; if (!L.length) break;
    out = L.map(a => ({ t: +a[0] * 1000, o: +a[1], c: +a[2], h: +a[3], l: +a[4], v: +a[5] })).reverse().concat(out);
    end = +L.at(-1)[0] - 1; if (L.length < 1500 || end * 1000 <= from) break;
  }
  if (!out.length) throw new Error("kucoin trống"); return out;
}
async function mexc(b, tf, from) {
  const iv = { "15m": "15m", "1h": "60m", "4h": "4h", "1d": "1d", "1w": "1W" }[tf]; let out = [], st = from;
  for (let p = 0; p < 40; p++) {
    const j = await getJ(`https://api.mexc.com/api/v3/klines?symbol=${b}USDT&interval=${iv}&limit=1000&startTime=${st}`);
    if (!Array.isArray(j) || !j.length) break;
    out = out.concat(j.map(a => ({ t: +a[0], o: +a[1], h: +a[2], l: +a[3], c: +a[4], v: +a[5] })));
    if (j.length < 1000) break; st = +j.at(-1)[0] + 1;
  }
  if (!out.length) throw new Error("mexc trống"); return out;
}
async function bitget(b, tf, from) {
  const g = { "15m": "15min", "1h": "1h", "4h": "4h", "1d": "1day", "1w": "1week" }[tf]; let out = [], end = Date.now();
  for (let p = 0; p < 60; p++) {
    const j = await getJ(`https://api.bitget.com/api/v2/spot/market/history-candles?symbol=${b}USDT&granularity=${g}&endTime=${end}&limit=200`);
    const L = j && j.code === "00000" ? j.data : []; if (!L.length) break;
    out = L.map(a => ({ t: +a[0], o: +a[1], h: +a[2], l: +a[3], c: +a[4], v: +a[5] })).concat(out);
    end = +L[0][0] - 1; if (L.length < 200 || end <= from) break;
  }
  if (!out.length) throw new Error("bitget trống"); return out.filter(k => k.t >= from).sort((a, b) => a.t - b.t);
}
async function gate(b, tf, from) {
  const iv = { "15m": "15m", "1h": "1h", "4h": "4h", "1d": "1d", "1w": "7d" }[tf];
  const j = await getJ(`https://api.gateio.ws/api/v4/spot/candlesticks?currency_pair=${b}_USDT&interval=${iv}&limit=1000`);
  if (!Array.isArray(j) || !j.length) throw new Error("gate trống");
  return j.map(a => ({ t: +a[0] * 1000, o: +a[5], h: +a[3], l: +a[4], c: +a[2], v: +a[6] })).filter(k => k.t >= from);
}
const agg = (c, ms, wk) => { const m = new Map(); for (const x of c) { const k = wk ? Math.floor((x.t - 4 * 864e5) / ms) : Math.floor(x.t / ms), g = m.get(k);
  if (!g) m.set(k, { t: x.t, o: x.o, h: x.h, l: x.l, c: x.c, v: x.v }); else { g.h = Math.max(g.h, x.h); g.l = Math.min(g.l, x.l); g.c = x.c; g.v += x.v; } } return [...m.values()]; };
async function yahoo(sym, interval, range) {
  const j = await getJ(`https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(sym)}?interval=${interval}&range=${range}&includePrePost=false`);
  const r = j.chart.result[0], q = r.indicators.quote[0], out = [];
  (r.timestamp || []).forEach((t, k) => { if ([q.open[k], q.high[k], q.low[k], q.close[k]].every(x => x != null)) out.push({ t: t * 1000, o: q.open[k], h: q.high[k], l: q.low[k], c: q.close[k], v: q.volume[k] || 0 }); });
  if (out.length < 30) throw new Error("Yahoo thiếu nến"); return out;
}
const stockMemo = new Map();
async function stockCandles(sym, tf) {
  if (tf === "1h" || tf === "4h") { if (!stockMemo.has(sym + "h")) stockMemo.set(sym + "h", yahoo(sym, "60m", "730d")); const h = await stockMemo.get(sym + "h"); return tf === "1h" ? h : agg(h, MS["4h"]); }
  if (!stockMemo.has(sym + "d")) stockMemo.set(sym + "d", yahoo(sym, "1d", "10y")); const d = await stockMemo.get(sym + "d"); return tf === "1w" ? agg(d, MS["1w"], true) : d;
}
async function candles(b, tf, from) {
  // lấy nguồn có lịch sử dài nhất trong các sàn (Binance → Bybit → OKX → Hyperliquid → Gate)
  let best = null;
  for (const f of [binance, bybit, okx, hyper, kucoin, mexc, bitget, gate]) {
    try { const c = await f(b, tf, from); if (c.length && (!best || c.length > best.length * 1.2)) best = c; if (best && best[0].t <= from + MS[tf] * 30) break; } catch (e) { }
  }
  if (!best) throw new Error("không sàn nào có " + b);
  return best;
}

/* ---------- chạy thuật toán qua từng nến ---------- */
const lastLE = (A, f) => { let lo = 0, hi = A.length - 1, k = -1; while (lo <= hi) { const m = (lo + hi) >> 1; if (f(A[m])) { k = m; lo = m + 1; } else hi = m - 1; } return k; };
function partial(htfBars, lowBars, upto, htf) {
  // nến khung lớn tại thời điểm `upto`: các nến đã đóng + nến đang chạy dựng lại từ nến khung nhỏ (không nhìn trước)
  const ms = MS[htf], key = t => htf === "1w" ? Math.floor((t - 4 * 864e5) / ms) : Math.floor(t / ms), k0 = key(upto);
  const hi = lastLE(htfBars, x => key(x.t) < k0), closed = htfBars.slice(Math.max(0, hi - WIN - 5), hi + 1);
  const li = lastLE(lowBars, x => x.t <= upto), part = [];
  for (let q = li; q >= 0 && key(lowBars[q].t) === k0; q--) part.unshift(lowBars[q]);
  if (part.length) closed.push({ t: part[0].t, o: part[0].o, h: Math.max(...part.map(x => x.h)), l: Math.min(...part.map(x => x.l)), c: part.at(-1).c, v: part.reduce((a, x) => a + x.v, 0) });
  return closed;
}
function signals(K, D, startT, base, stock, F) {
  const bump = (tf, k) => { if (!F) return; const f = F[tf] = F[tf] || {}; f[k] = (f[k] || 0) + 1; };
  const out = [], low = LOWTF_ON && (K.LOW_TF_ASSETS || []).includes(base), tfs = low ? [...(K.LOW_TFS || LOWTFS), ...TFS] : TFS, lowStart = Date.now() - LOW_DAYS * 864e5;
  for (const tf of tfs) {
    const bars = D[tf]; if (!bars || bars.length < 80) continue;
    const st0 = LOWTFS.includes(tf) ? Math.max(startT, lowStart) : startT;
    for (let i = Math.max(60, lastLE(bars, x => x.t < st0) + 1); i < bars.length - 1; i += STEP[tf]) {
      const w = bars.slice(Math.max(0, i - WIN + 1), i + 1), t = { src: "ex", c: w, tf, side: SIDE };
      K.compute(t); const B = t.buy; bump(tf, "1 nến xét");
      if (!B || !B.plan) { bump(tf, "2 không có plan (thiếu dữ liệu/ATR)"); continue; }
      if (B.plan.reject) { bump(tf, "3 SL quá xa (> MAX_SL)"); continue; }
      let sc = B.score;
      if (sc < K.PICK_MIN - 8) { bump(tf, "4 điểm thấp"); for (const n of B.notes || []) { const m = String(n).match(/^trần \d+: [^(]*/); if (m) bump(tf, "4· " + m[0].trim()); } continue; }
      const htf = HTF[tf];
      if (htf && D[htf]) {
        const hc = partial(D[htf], bars, bars[i].t, htf).slice(-WIN);
        let hT = null;
        if (hc.length >= 60) { const h = { src: "ex", c: hc, tf: htf, side: SIDE }; K.compute(h); hT = K.trendOf(h); if (hT != null) { if (hT > .3) sc += 3; else if (hT < -.3) sc -= 5; } }
        if (K.HTF_MIN != null && (hT == null || hT < K.HTF_MIN)) { bump(tf, "5 khung lớn không tăng"); continue; }
      }
      if (K.REGIME && !stock) {                                  // lọc thị trường theo BTC — chỉ áp cho crypto
        const src = K.REGIME_SRC || "ema", tt = bars[i].t + MS[tf];
        if (src.includes("ema") && !regimeOK(tt, K.REGIME_EMA, K.REGIME_SLOPE)) { bump(tf, "6 BTC dưới EMA200"); continue; }
        if (src.includes("dow") && !dowRegOK(tt, src.includes("4h") ? "4h" : "1d", K.REGIME_DOW_LOOSE)) { bump(tf, "6 BTC chưa có cấu trúc tăng"); continue; }
      }
      if (!stock && K.rsOK && !K.rsOK(D["1d"], BTCD, bars[i].t + MS[tf])) { bump(tf, "6b coin yếu hơn BTC"); continue; }
      if (K.volOK && !K.volOK(w)) { bump(tf, "6c biến động bất thường"); continue; }
      const ltf = K.LTF_CONFIRM[tf];
      if (ltf && D[ltf]) {                                   // kèo W: cấu trúc khung D tại thời điểm đó cũng phải tăng rõ
        const end = bars[i].t + MS[tf], L = D[ltf]; let lo = 0, hi = L.length - 1, e = -1;
        while (lo <= hi) { const m = (lo + hi) >> 1; if (L[m].t + MS[ltf] <= end) { e = m; lo = m + 1; } else hi = m - 1; }
        const lc = L.slice(Math.max(0, e - WIN + 1), e + 1), lt = { src: "ex", c: lc, tf: ltf, side: SIDE }; if (lc.length >= 60) K.compute(lt);
        if (!(K.ltfOK ? K.ltfOK(tf, lt) : K.upClear(lt))) { bump(tf, "7 khung nhỏ chưa xác nhận"); continue; }
      }
      sc = K.clamp(sc, 0, 100);
      if (sc < K.PICK_MIN + (K.TF_ADD[tf] || 0)) { bump(tf, "8 điểm cuối < ngưỡng"); continue; }
      if (B.plan.rr1 < (K.RR_TF && K.RR_TF[tf] != null ? K.RR_TF[tf] : K.MIN_RR)) { bump(tf, "9 R:R TP1 < tối thiểu"); continue; }
      bump(tf, "10 ĐẠT CHUẨN"); out.push({ t: bars[i].t + MS[tf], tf, sc, P: B.plan, parts: Object.fromEntries(B.parts.map(([n, v]) => [n, v == null ? null : +v.toFixed(3)])), rank: sc + Math.min(B.plan.rr1, 5) * 5 });
    }
  }
  return out.sort((a, b) => a.t - b.t || b.rank - a.rank);
}
function trades(K, D, base, startT, stock, F) {
  const S = signals(K, D, startT, base, stock, F), res = [], busyM = {};
  for (const s of S) {
    const bk = PERTF ? s.tf : "_", busy = busyM[bk] || 0;
    if (s.t < busy) { if (F) { const f = F[s.tf] = F[s.tf] || {}; f["11 bỏ vì mã đang có lệnh"] = (f["11 bỏ vì mã đang có lệnh"] || 0) + 1; } continue; }
    const P = s.P, j = { side: SIDE, tf: s.tf, at: s.t, mode: P.mode, entry: P.entry, stop: P.stop, tp1: P.tp1, tp2: P.tp2, tps: P.tps, tpf: P.tpf };
    const et = [EXEC[s.tf], "4h", s.tf].find(x => D[x] && D[x].length && D[x][0].t <= s.t) || s.tf, E = D[et];   // nến nhỏ nhất có dữ liệu phủ thời điểm vào lệnh
    const ex = E.slice(Math.max(0, lastLE(E, k => k.t < s.t - MS[et]) + 1)), cur = ex.length ? ex.at(-1).c : null;
    const r = K.simulate(j, ex, cur);
    const end = r.exitAt || (r.status === "expired" ? s.t + EXP_BARS * MS[s.tf] : Infinity);
    busyM[bk] = end === Infinity ? Infinity : end + 1;
    // phí + funding (theo R): phí vào (limit = maker, market = taker) + phí ra (taker), funding cho thời gian giữ lệnh
    let fee = 0;
    if (!NOFEE && r.status !== "expired" && r.status !== "pending") {
      const slPct = Math.abs(P.entry - P.stop) / P.entry, inF = P.mode === "Chờ hồi" ? FEE_MAKER : FEE_TAKER;
      const hold = Math.max(0, ((r.exitAt || (ex.length ? ex.at(-1).t : s.t)) - (r.fillAt || s.t)) / (365 * 864e5));
      fee = slPct > 0 ? ((inF + FEE_TAKER) / 100 + FUND_APR / 100 * hold) / slPct : 0;
    }
    r.r -= fee;
    res.push({ base, bull: btcBull(s.t), tf: s.tf, at: s.t, sc: Math.round(s.sc), mode: P.mode === "Chờ hồi" ? "limit" : "market", nTp: (P.tps || []).length, rr1: +P.rr1.toFixed(2),
      st: r.status, r: +r.r.toFixed(3), fee: +fee.toFixed(3), exitAt: r.exitAt || null, hit: r.hit || 0, parts: s.parts, eWhy: P.ref || "", sWhy: P.why || "", tWhy: P.tp1Why || "" });
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
    byTPs: group(T, x => x.nTp + " TP"), byYear: group(T, x => String(new Date(x.at).getUTCFullYear())), byQuarterTF: quarterTF(T), byKind: group(T, x => K1s.includes(x.base) ? "cổ phiếu" : "crypto"), byAsset: Object.fromEntries(Object.entries(group(T, x => x.base)).sort((a, b) => b[1].totalR - a[1].totalR)) };
}
const qKey = t => { const d = new Date(t); return `${d.getUTCFullYear()}-Q${Math.floor(d.getUTCMonth() / 3) + 1}`; };
function quarterTF(T) {
  const C = T.filter(x => DONE.includes(x.st)), Q = {};
  for (const x of C) { const k = qKey(x.exitAt || x.at); (Q[k] = Q[k] || []).push(x); }
  return Object.fromEntries(Object.keys(Q).sort().map(k => { const a = Q[k], s = stats(a), tf = {};
    for (const x of a) tf[x.tf] = +((tf[x.tf] || 0) + x.r).toFixed(2); return [k, { ...s, tf }]; }));
}
function quarterMd(Q) {
  const ks = Object.keys(Q); if (!ks.length) return "";
  const tfs = [...new Set(ks.flatMap(k => Object.keys(Q[k].tf)))].sort((a, b) => MS[a] - MS[b]);
  let eq = 0;
  const rows = ks.map(k => { const s = Q[k]; eq += s.totalR; return `| ${k} | ${s.closed} | ${s.winRate ?? "–"}% | ${s.totalR >= 0 ? "+" : ""}${s.totalR} | ${s.expectancy ?? "–"} | ${s.maxDD_R} | ${tfs.map(t => s.tf[t] ?? "–").join(" | ")} | ${eq.toFixed(1)} |`; });
  return [`\n### Theo quý (tính theo quý lệnh đóng)\n`, `| Quý | Lệnh đóng | Win rate | Tổng R | R/lệnh | Max DD trong quý | ${tfs.map(t => "R " + t.toUpperCase()).join(" | ")} | R luỹ kế |`,
    `|---|---|---|---|---|---|${tfs.map(() => "---").join("|")}|---|`, ...rows].join("\n");
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
    quarterMd(R.byQuarterTF || {}), sec("Theo năm", R.byYear, R2 && R2.byYear), sec("Crypto / cổ phiếu", R.byKind, R2 && R2.byKind), sec("Theo số TP", R.byTPs, R2 && R2.byTPs),
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

/* ---------- bộ lọc thị trường: BTC 1D so với EMA200 ---------- */
let REGS = {}, BTCD = null, DOWS = {};
function dowRegOK(t, tf, loose) {        // cấu trúc Dow của BTC (nến đã đóng trước thời điểm t): long cần tăng, short cần giảm
  const A = DOWS[tf] || []; let lo = 0, hi = A.length - 1, k = -1;
  while (lo <= hi) { const m = (lo + hi) >> 1; if (A[m][0] <= t) { k = m; lo = m + 1; } else hi = m - 1; }
  if (k < 0) return true; const [, st, brokeDown, brokeUp] = A[k];
  return SIDE === "short" ? st === -1 || (loose && brokeUp) : st === 1 || (loose && brokeDown);
}
function btcBull(t) {                   // thị trường lúc vào lệnh: BTC 1D trên EMA200 = bull, dưới = bear (để chấm long trong bull, short trong bear)
  const REG = REGS["200:0"] || []; let lo = 0, hi = REG.length - 1, k = -1;
  while (lo <= hi) { const m = (lo + hi) >> 1; if (REG[m][0] <= t) { k = m; lo = m + 1; } else hi = m - 1; }
  return k < 0 ? null : REG[k][1] === 1;
}
function regimeOK(t, p = 200, sl = 0) {
  const REG = REGS[p + ":" + (sl || 0)] || REGS["200:0"] || [];
  if (!REG.length) return true; let lo = 0, hi = REG.length - 1, k = -1;
  while (lo <= hi) { const m = (lo + hi) >> 1; if (REG[m][0] <= t) { k = m; lo = m + 1; } else hi = m - 1; }
  if (k < 0) return true; return SIDE === "short" ? REG[k][1] === -1 : REG[k][1] === 1;
}

/* ---------- chạy ---------- */
// Luồng phụ (worker): nhận dữ liệu 1 mã + chỉ số phiên bản → trả về danh sách lệnh. Chạy song song trên mọi nhân CPU.
if (!isMainThread) {
  const KS = workerData.texts.map(t => loadCore(null, t)); REGS = workerData.regs || {}; BTCD = workerData.btcd || null; DOWS = workerData.dows || {};
  parentPort.on("message", ({ id, vi, D, base, startT, stock }) => {
    try { const F = vi === 0 ? {} : null; parentPort.postMessage({ id, T: trades(KS[vi], D, base, startT, stock, F), F }); }
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
      if (arg("merge", "")) { V.push({ name: X.name || path.basename(f, ".json"), desc: X.desc || "", text: "", T: [] }); continue; }   // gộp: chỉ cần tên, giữ đúng thứ tự như lúc chạy
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
const STOCKS = arg("stocks", "1") === "1" ? K1.stocks.filter(x => !arg("only", "") || arg("only", "").toUpperCase().split(",").includes(x[1])) : [];   // cổ phiếu (Yahoo): 4H/1H tối đa 2 năm, 1D/1W tối đa 10 năm
const ONLY = arg("only", "") ? arg("only", "").toUpperCase().split(",") : null;
if (ONLY) uni = uni.filter(b => ONLY.includes(b)).concat(ONLY.filter(b => !uni.includes(b) && !K1.stocks.some(x => x[1] === b)));
const SKIP = String(arg("skip", "")).split(",").map(x => x.trim().toUpperCase()).filter(Boolean); if (SKIP.length) uni = uni.filter(b => !SKIP.includes(b));   // --skip BTC: bỏ mã bot không trade (BTC dành cho chiến lược RSI)
const ALL = [...uni.map(b => ({ b })), ...STOCKS.map(([sym, label]) => ({ b: label, sym, stock: true }))];
K1s = STOCKS.map(x => x[1]);
const SHARD = arg("shard", ""), MERGE = arg("merge", "");   // chia việc cho nhiều máy: --shard k/n chạy 1 phần · --merge thư_mục gộp kết quả
if (SHARD) { const [k, n] = SHARD.split("/").map(Number); for (let i = ALL.length - 1; i >= 0; i--) if (i % n !== k) ALL.splice(i, 1); }
const startT = Date.now() - DAYS * 864e5, lowFrom = Date.now() - LOW_DAYS * 864e5;
const from = { "15m": lowFrom - WIN * MS["15m"], "1h": startT - WIN * MS["4h"], "4h": startT - WIN * MS["4h"], "1d": startT - WIN * MS["1d"], "1w": Date.UTC(2017, 0, 1) };
const NW = Math.max(1, Math.min(8, os.cpus().length));
console.log(`Backtest ${uni.length} coin + ${STOCKS.length} cổ phiếu · ${DAYS} ngày · ${SIDE} · ${NW} luồng${V.length ? ` · so sánh ${V.length} phiên bản: ${V.map(v => v.name).join(", ")}` : ""}`);
const texts = [mainText, ...V.map(v => v.text)];
const A = [], B = [], miss = [], FUN = {};
function addFunnel(F) { for (const tf in F) { const d = FUN[tf] = FUN[tf] || {}; for (const k in F[tf]) d[k] = (d[k] || 0) + F[tf][k]; } }
if (MERGE) {
  for (const f of fs.readdirSync(MERGE).filter(f => /^shard-.*\.json$/.test(f))) {
    const sh = JSON.parse(fs.readFileSync(path.join(MERGE, f), "utf8")); A.push(...sh.A); miss.push(...sh.miss); if (sh.FUN) addFunnel(sh.FUN);
    sh.V.forEach((t, i) => { if (V[i]) V[i].T.push(...t); });
  }
  console.log(`Gộp ${A.length} lệnh (main) từ các phần`);
} else {
try { const bd = await candles("BTC", "1d", Date.UTC(2017, 0, 1)); BTCD = bd;
  for (const p of [50, 100, 150, 200]) { const e = K1.ema(bd.map(x => x.c), p);
    for (const sl of [0, 10, 20, 40]) REGS[p + ":" + sl] = bd.map((x, i) => { const up = e[i] != null && x.c > e[i]; if (!sl) return [x.t + MS["1d"], up ? 1 : -1];
      const prev = e[i - sl]; if (e[i] == null || prev == null) return [x.t + MS["1d"], up ? 1 : -1];
      return [x.t + MS["1d"], up && e[i] > prev ? 1 : !up && e[i] < prev ? -1 : 0]; }); } }   // 1 = tăng, −1 = giảm, 0 = đi ngang (giá và độ dốc EMA ngược nhau)
catch (e) { console.log("Không lấy được BTC cho bộ lọc thị trường"); }
// cấu trúc Dow của BTC khung 4H / 1D tại từng nến đã đóng (cho bộ lọc REGIME_SRC = "dow4h" / "dow1d")
for (const tf of ["4h", "1d"]) {
  try { const bb = tf === "1d" && BTCD ? BTCD : await candles("BTC", tf, Date.UTC(2018, 0, 1)), out = [];
    for (let i = 60; i < bb.length; i++) { const d = K1.dow(bb.slice(Math.max(0, i - 300), i + 1)); const w = d && d.why || "";
      out.push([bb[i].t + MS[tf], d ? d.state : 0, /^Gãy cấu trúc giảm/.test(w), /^Gãy cấu trúc tăng/.test(w)]); }
    DOWS[tf] = out; } catch (e) { console.log("Không tính được cấu trúc Dow BTC " + tf + ": " + e.message); }
}
const workers = Array.from({ length: NW }, () => new Worker(new URL(import.meta.url), { workerData: { texts, regs: REGS, btcd: BTCD, dows: DOWS }, argv: process.argv.slice(2) }));
const wait = new Map(); let seq = 0, rr = 0;
for (const w of workers) w.on("message", m => { const f = wait.get(m.id); wait.delete(m.id); if (m.err) console.log("  lỗi luồng:", m.err); if (m.F) addFunnel(m.F); f(m.T); });
const task = (vi, D, base, stock) => new Promise(res => { const id = ++seq; wait.set(id, res); workers[rr++ % NW].postMessage({ id, vi, D, base, startT, stock }); });
const keep = setInterval(() => { }, 10000);                  // giữ tiến trình sống khi chờ mạng
let done = 0;
async function runOne({ b, sym, stock }) {
  const D = {}, low = LOWTF_ON && (K1.lowAssets || []).includes(b) && !stock;
  for (const tf of [...TFS, "1h", ...(low ? ["15m"] : [])]) { try { D[tf] = stock ? await stockCandles(sym, tf) : await candles(b, tf, from[tf]); } catch (e) { } }   // 1h: xác nhận + chấm SL/TP
  if (!D["4h"] || !D["1d"]) { miss.push(b); return; }
  const R = await Promise.all(texts.map((_, vi) => task(vi, D, b, !!stock)));
  A.push(...R[0]); V.forEach((v, i) => v.T.push(...R[i + 1]));
  if (++done % 10 === 0) console.log(`  ${done}/${ALL.length} mã · ${((Date.now() - t0) / 1000).toFixed(0)}s`);
}
let qi = 0; await Promise.all(Array.from({ length: 3 }, async () => { while (qi < ALL.length) await runOne(ALL[qi++]); }));
clearInterval(keep); for (const w of workers) w.terminate();
if (SHARD) {
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, `shard-${SHARD.replace("/", "of")}.json`), JSON.stringify({ A, V: V.map(v => v.T), miss, FUN }));
  console.log(`Phần ${SHARD} xong: ${A.length} lệnh · ${((Date.now() - t0) / 1000).toFixed(0)}s`); process.exit(0);
}
}
if (K2) B.push(...V[0].T);
const RA = report(A), RB = K2 ? report(B) : null;
// bảng so sánh nhiều phiên bản
const MID = Date.now() - DAYS * 864e5 / 2;                 // chia đôi kỳ backtest: nửa đầu / nửa sau (kiểm tra độ ổn định, tránh "học thuộc" dữ liệu)
const half = (T, first) => stats(T.filter(x => first ? x.at < MID : x.at >= MID));
// ---- kiểm tra kín: giữ riêng N tháng gần nhất (mặc định 12). Bot tối ưu chỉ được chọn thông số dựa trên phần "huấn luyện" (trước mốc),
// phần "kiểm tra kín" chỉ dùng để chấm cuối cùng → biết cấu hình mới có hiệu quả thật trên dữ liệu chưa từng thấy hay không.
// Trọng chốt 11/11/2026 21:56: dữ liệu từ 01/2023; huấn luyện (tối ưu) = 01/2023 → 12/2025, chia 2 nửa (01/2023–06/2024, 07/2024–12/2025) để kiểm tra ổn định; kiểm tra kín = năm 2026.
const TEST_FROM = Date.parse(arg("test-from", "2023-01-01") + "T00:00:00Z"), TEST_TO = Date.parse(arg("test-to", "2026-01-01") + "T00:00:00Z"), HOLD_M = Math.round((TEST_TO - TEST_FROM) / (30.44 * 864e5));
const inTest = x => x.at >= TEST_FROM && x.at < TEST_TO;
function mcDD(T, runs = 2000) {          // sụt vốn Monte Carlo: xáo trộn thứ tự lệnh nhiều lần, lấy mức sụt vốn mà 95% trường hợp không vượt quá
  const R = T.filter(x => DONE.includes(x.st)).map(x => x.r); if (R.length < 5) return null;
  let sd = 1234567; const rnd = () => { sd = (sd * 1103515245 + 12345) % 2147483648; return sd / 2147483648; };
  const out = [];
  for (let k = 0; k < runs; k++) { const a = R.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    let eq = 0, pk = 0, dd = 0; for (const r of a) { eq += r; if (eq > pk) pk = eq; if (pk - eq > dd) dd = pk - eq; } out.push(dd); }
  out.sort((x, y) => x - y); return +out[Math.floor(runs * .95)].toFixed(2);
}
function seg(T) {
  const tr = T.filter(inTest), te = T.filter(x => !inTest(x));   // Trọng 11/11 21:56: TỐI ƯU trên 01/2023 → 12/2025, KIỂM TRA KÍN trên năm 2026
  return { testFrom: TEST_FROM, testTo: TEST_TO, holdMonths: HOLD_M, train: { ...stats(tr), dd95: mcDD(tr) }, test: { ...stats(te), dd95: mcDD(te) },
    h1: stats(tr.filter(x => x.at < (TEST_FROM + TEST_TO) / 2)), h2: stats(tr.filter(x => x.at >= (TEST_FROM + TEST_TO) / 2)), tf: group(tr, x => x.tf), tfTest: group(te, x => x.tf) };
}
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
const funnelMd = () => { const tfs = Object.keys(FUN).sort((a, b) => MS[a] - MS[b]); if (!tfs.length) return "";
  const keys = [...new Set(tfs.flatMap(t => Object.keys(FUN[t])))].sort((a, b) => parseFloat(a) - parseFloat(b) || a.localeCompare(b));
  return ["\n## Phễu lọc kèo (thuật toán hiện tại) — mỗi nến được xét bị loại ở bước nào\n", `| Bước | ${tfs.map(t => t.toUpperCase()).join(" | ")} |`, `|---|${tfs.map(() => "---").join("|")}|`,
    ...keys.map(k => `| ${k.replace(/^\d+·? ?/, m => m.includes("·") ? "  ↳ " : m)} | ${tfs.map(t => FUN[t][k] ?? 0).join(" | ")} |`)].join("\n") + "\n"; };
const text = `Phí: ${NOFEE ? "KHÔNG tính" : `maker ${FEE_MAKER}% · taker ${FEE_TAKER}% · funding ${FUND_APR}%/năm (đã trừ vào R)`} · ${PERTF ? "mỗi khung vị thế riêng" : "1 lệnh/mã như bot"}\n` + funnelMd() + cmp + effectMd(effect(A)) + "\n" + md(`Backtest ${SIDE.toUpperCase()}${LABEL ? " · " + LABEL : ""}`, RA, RB) + (miss.length ? `\n\nKhông lấy được dữ liệu: ${miss.join(", ")}` : "");
fs.writeFileSync(path.join(OUT, name + ".md"), text);
const slim = T => T.map(({ parts, eWhy, sWhy, tWhy, ...x }) => x);
fs.writeFileSync(path.join(OUT, name + ".json"), JSON.stringify({ at: Date.now(), days: DAYS, side: SIDE, label: LABEL, assets: uni.length, miss,
  A: RA, variants: V.map(v => ({ name: v.name, desc: v.desc || "", R: report(v.T), half1: half(v.T, true), half2: half(v.T, false), seg: seg(v.T) })), half1: half(A, true), half2: half(A, false), tradesA: A }));
console.log(text);
console.log(`\nXong sau ${((Date.now() - t0) / 1000).toFixed(0)}s → ${OUT}/${name}.md`);
}
