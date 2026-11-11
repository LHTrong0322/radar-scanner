// Lấy nến từ nhiều sàn (tách từ bt.mjs để các bot nghiên cứu dùng chung)
export const MS = { "15m": 9e5, "1h": 36e5, "4h": 144e5, "1d": 864e5, "1w": 6048e5 };
const sleep = ms => new Promise(r => setTimeout(r, ms));
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
export async function stockCandles(sym, tf) {
  if (tf === "1h" || tf === "4h") { if (!stockMemo.has(sym + "h")) stockMemo.set(sym + "h", yahoo(sym, "60m", "730d")); const h = await stockMemo.get(sym + "h"); return tf === "1h" ? h : agg(h, MS["4h"]); }
  if (!stockMemo.has(sym + "d")) stockMemo.set(sym + "d", yahoo(sym, "1d", "10y")); const d = await stockMemo.get(sym + "d"); return tf === "1w" ? agg(d, MS["1w"], true) : d;
}
export async function candles(b, tf, from) {
  // lấy nguồn có lịch sử dài nhất trong các sàn (Binance → Bybit → OKX → Hyperliquid → Gate)
  let best = null;
  for (const f of [binance, bybit, okx, hyper, kucoin, mexc, bitget, gate]) {
    try { const c = await f(b, tf, from); if (c.length && (!best || c.length > best.length * 1.2)) best = c; if (best && best[0].t <= from + MS[tf] * 30) break; } catch (e) { }
  }
  if (!best) throw new Error("không sàn nào có " + b);
  return best;
}
