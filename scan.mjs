// Crypto RSI Radar · máy quét chạy 24/7 trên GitHub Actions
// - Đọc thuật toán trực tiếp từ ../index.html (cùng một code với trang web)
// - Quét top 100 crypto (CoinGecko) + cổ phiếu ở khung 4H / 1D / 1W
// - Ghi kèo đạt chuẩn vào data/state.json, chấm lệnh theo nến 1H, báo Telegram
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
// Chạy được cả khi mọi file nằm cùng một chỗ (index.html, scan.mjs, state.json) lẫn khi chia thư mục scanner/ và data/
const ROOT = fs.existsSync(path.join(HERE, "index.html")) ? HERE : path.resolve(HERE, "..");
const STATE_PATH = process.env.STATE_PATH || (fs.existsSync(path.join(ROOT, "data", "state.json")) ? path.join(ROOT, "data", "state.json") : path.join(ROOT, "state.json"));
const TG_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
const TG_CHAT = process.env.TELEGRAM_CHAT_ID || "";
const CG_KEY = process.env.COINGECKO_KEY || "";
const SITE = (process.env.SITE_URL || "").replace(/\/$/, "");
const PICK_TFS = ["4h", "1d", "1w"];
const SIDE = (process.env.TRADE_SIDE || "long").trim().toLowerCase() === "short" ? "short" : "long";   // long: chỉ tìm kèo mua · short: chỉ tìm kèo bán
const UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

/* ---------- 1. Nạp thuật toán từ index.html ---------- */
function loadCore() {
  const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
  const js = html.split("<script>")[1].split("</script>")[0];
  const grab = (re, name) => { const m = js.match(re); if (!m) throw new Error(`Không tìm thấy "${name}" trong index.html`); return m[0]; };
  const a = js.indexOf("/* ---------- indicators ---------- */"), b = js.indexOf("/* ---------- render ---------- */");
  if (a < 0 || b < 0) throw new Error("index.html thiếu phần thuật toán (indicators/render)");
  const src = [
    grab(/const TFMS=[^\n]*/, "TFMS"), grab(/const SETS=[^\n]*/, "SETS"), grab(/const SKIP=[^\n]*/, "SKIP"),
    grab(/const STOCKS=[^\n]*/, "STOCKS"), grab(/function skipCoin\([\s\S]*?\n\}/, "skipCoin"),
    grab(/const bucket=[^\n]*/, "bucket"),
    js.slice(a, b),
    grab(/const trendOf=[^\n]*/, "trendOf"), grab(/function pickReasons\([\s\S]*?\n\}/, "pickReasons"),
    grab(/function simulate\([\s\S]*?\n\}/, "simulate"),
  ].join("\n");
  const S = { tf: "4h", win: 3, os: 30, ob: 70 };
  return new Function("S", src + "\nreturn {TFMS,SETS,STOCKS,skipCoin,bucket,compute,trendOf,pickReasons,simulate,MAX_SL,clamp,swapTxt,PICK_MIN:typeof PICK_MIN!=='undefined'?PICK_MIN:70,RR_TF:typeof RR_TF!=='undefined'?RR_TF:{},REGIME_EMA:typeof REGIME_EMA!=='undefined'?REGIME_EMA:200,REGIME_SLOPE:typeof REGIME_SLOPE!=='undefined'?REGIME_SLOPE:0,REGIME_SRC:typeof REGIME_SRC!=='undefined'?REGIME_SRC:'ema',dow,closedOnly,btcDowUp:typeof btcDowUp!=='undefined'?btcDowUp:null,btcDowDown:typeof btcDowDown!=='undefined'?btcDowDown:null,RS_DAYS:typeof RS_DAYS!=='undefined'?RS_DAYS:null,rsOK:typeof rsOK!=='undefined'?rsOK:null,volOK:typeof volOK!=='undefined'?volOK:null,MIN_RR:typeof MIN_RR!=='undefined'?MIN_RR:2,TF_ADD:typeof TF_ADD!=='undefined'?TF_ADD:{},HTF_MIN:typeof HTF_MIN!=='undefined'?HTF_MIN:null,REGIME:typeof REGIME!=='undefined'?REGIME:false,LOW_TF_ASSETS:typeof LOW_TF_ASSETS!=='undefined'?LOW_TF_ASSETS:[],LOW_TFS:typeof LOW_TFS!=='undefined'?LOW_TFS:['1h'],LTF_CONFIRM:typeof LTF_CONFIRM!=='undefined'?LTF_CONFIRM:{},upClear:typeof upClear!=='undefined'?upClear:()=>true,ltfOK:typeof ltfOK!=='undefined'?ltfOK:()=>true,pumpAdj:typeof pumpAdj!=='undefined'?pumpAdj:null,ema};")(S);
}
const K = loadCore();

/* ---------- 2. Gọi dữ liệu (nhiều nguồn dự phòng) ---------- */
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function getJ(url, opt = {}, ms = 15000) {
  const ac = new AbortController(), t = setTimeout(() => ac.abort(), ms);
  try {
    const r = await fetch(url, { ...opt, signal: ac.signal, headers: { "User-Agent": UA, "Accept": "application/json", ...(opt.headers || {}) } });
    if (!r.ok) throw new Error(`${new URL(url).host} HTTP ${r.status}`);
    return await r.json();
  } finally { clearTimeout(t); }
}
async function pool(items, n, fn) { let i = 0; await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) await fn(items[i++]); })); }
const num = x => +x;
// Hyperliquid: nến perp (sàn chính + sàn HIP-3 "xyz:"), coin dạng kPEPE = giá × 1000
const HL_MS = { "15m": 9e5, "1h": 36e5, "4h": 144e5, "1d": 864e5, "1w": 6048e5 };
async function hlCandles(coin, tf, n = 500, st, div = 1) {
  if (!HL_MS[tf]) throw new Error("khung không hỗ trợ");
  const end = Date.now(), start = st || end - HL_MS[tf] * Math.min(n, 4900) * 1.05;
  const r = await fetch("https://api.hyperliquid.xyz/info", { method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type: "candleSnapshot", req: { coin, interval: tf, startTime: Math.floor(start), endTime: end } }) });
  if (!r.ok) throw new Error("Hyperliquid HTTP " + r.status);
  const a = await r.json(); if (!Array.isArray(a) || !a.length) throw new Error("Hyperliquid không có " + coin);
  return a.map(k => ({ t: +k.t, o: +k.o / div, h: +k.h / div, l: +k.l / div, c: +k.c / div, v: +k.v * div }));
}
const CANDLES = [
  ["binance", async (b, tf, n, st) => {
    let last;
    for (const host of ["https://data-api.binance.vision", "https://api.binance.com"]) {
      try {
        const j = await getJ(`${host}/api/v3/klines?symbol=${b}USDT&interval=${tf}&limit=${Math.min(n, 1000)}${st ? `&startTime=${st}` : ""}`);
        return j.map(a => ({ t: a[0], o: num(a[1]), h: num(a[2]), l: num(a[3]), c: num(a[4]), v: num(a[5]) }));
      } catch (e) { last = e; }
    }
    throw last;
  }],
  ["hyperliquid", async (b, tf, n, st) => {
    try { return await hlCandles(b, tf, n, st); } catch (e) { return await hlCandles("k" + b, tf, n, st, 1000); }
  }],
  ["mexc", async (b, tf, n) => {
    const iv = { "15m": "15m", "1h": "60m", "4h": "4h", "1d": "1d", "1w": "1W" }[tf];
    const j = await getJ(`https://api.mexc.com/api/v3/klines?symbol=${b}USDT&interval=${iv}&limit=${Math.min(n, 1000)}`);
    return j.map(a => ({ t: num(a[0]), o: num(a[1]), h: num(a[2]), l: num(a[3]), c: num(a[4]), v: num(a[5]) }));
  }],
  ["gate", async (b, tf, n) => {
    const iv = { "15m": "15m", "1h": "1h", "4h": "4h", "1d": "1d", "1w": "7d" }[tf];
    const j = await getJ(`https://api.gateio.ws/api/v4/spot/candlesticks?currency_pair=${b}_USDT&interval=${iv}&limit=${Math.min(n, 1000)}`);
    return j.map(a => ({ t: num(a[0]) * 1000, o: num(a[5]), h: num(a[3]), l: num(a[4]), c: num(a[2]), v: num(a[6]) }));
  }],
  ["kucoin", async (b, tf) => {
    const ty = { "15m": "15min", "1h": "1hour", "4h": "4hour", "1d": "1day", "1w": "1week" }[tf];
    const j = await getJ(`https://api.kucoin.com/api/v1/market/candles?type=${ty}&symbol=${b}-USDT`);
    if (j.code !== "200000") throw new Error(j.msg);
    return j.data.map(a => ({ t: num(a[0]) * 1000, o: num(a[1]), c: num(a[2]), h: num(a[3]), l: num(a[4]), v: num(a[5]) })).reverse();
  }],
  ["okx", async (b, tf) => {
    const bar = { "15m": "15m", "1h": "1H", "4h": "4H", "1d": "1Dutc", "1w": "1Wutc" }[tf];
    const j = await getJ(`https://www.okx.com/api/v5/market/candles?instId=${b}-USDT&bar=${bar}&limit=300`);
    if (j.code !== "0") throw new Error(j.msg);
    return j.data.map(a => ({ t: num(a[0]), o: num(a[1]), h: num(a[2]), l: num(a[3]), c: num(a[4]), v: num(a[5]) })).reverse();
  }],
  ["bybit", async (b, tf, n) => {
    const iv = { "1h": "60", "4h": "240", "1d": "D", "1w": "W" }[tf];
    const j = await getJ(`https://api.bybit.com/v5/market/kline?category=spot&symbol=${b}USDT&interval=${iv}&limit=${Math.min(n, 1000)}`);
    if (j.retCode !== 0) throw new Error(j.retMsg);
    return j.result.list.map(a => ({ t: num(a[0]), o: num(a[1]), h: num(a[2]), l: num(a[3]), c: num(a[4]), v: num(a[5]) })).reverse();
  }],
  ["bitget", async (b, tf, n) => {
    const g = { "1h": "1h", "4h": "4h", "1d": "1day", "1w": "1week" }[tf];
    const j = await getJ(`https://api.bitget.com/api/v2/spot/market/candles?symbol=${b}USDT&granularity=${g}&limit=${Math.min(n, 1000)}`);
    if (j.code !== "00000") throw new Error(j.msg);
    return j.data.map(a => ({ t: num(a[0]), o: num(a[1]), h: num(a[2]), l: num(a[3]), c: num(a[4]), v: num(a[5]) })).sort((p, q) => p.t - q.t);
  }],
  ["kraken", async (b, tf) => {
    const iv = { "1h": 60, "4h": 240, "1d": 1440, "1w": 10080 }[tf];
    const names = b === "BTC" ? ["XBT"] : /X$/.test(b) && b.length > 4 ? [b.slice(0, -1) + "x", b] : [b];   // xStocks trên Kraken: COINxUSD
    let last;
    for (const nm of names) {
      try {
        const j = await getJ(`https://api.kraken.com/0/public/OHLC?pair=${nm}USD&interval=${iv}`);
        if (j.error && j.error.length) throw new Error(j.error.join(", "));
        const key = Object.keys(j.result || {}).find(k => k !== "last"); if (!key) throw new Error("không có cặp");
        return j.result[key].map(a => ({ t: a[0] * 1000, o: num(a[1]), h: num(a[2]), l: num(a[3]), c: num(a[4]), v: num(a[6]) }));
      } catch (e) { last = e; }
    }
    throw last;
  }],
  ["coinbase", async (b, tf) => {
    const g = { "1h": 3600, "1d": 86400 }[tf]; if (!g) throw new Error("khung không hỗ trợ");
    const j = await getJ(`https://api.exchange.coinbase.com/products/${b}-USD/candles?granularity=${g}`);
    return j.map(a => ({ t: a[0] * 1000, l: num(a[1]), h: num(a[2]), o: num(a[3]), c: num(a[4]), v: num(a[5]) })).reverse();
  }],
];
const srcMemo = new Map();   // nhớ sàn đã dùng được cho từng coin để lần sau gọi thẳng
async function cryptoCandles(base, tf, n = 500, startTime) {
  const pref = srcMemo.get(base), list = pref ? [CANDLES.find(c => c[0] === pref), ...CANDLES.filter(c => c[0] !== pref)] : CANDLES;
  for (const [name, f] of list) {
    try {
      const c = (await f(base, tf, n, startTime)).filter(k => [k.o, k.h, k.l, k.c].every(Number.isFinite));
      if (c.length >= (startTime ? 1 : 30)) { srcMemo.set(base, name); return { src: name, c: c.slice(-n) }; }
    } catch (e) { /* thử nguồn kế tiếp */ }
  }
  throw new Error(`không sàn nào có nến ${base} ${tf}`);
}
let yahooGate = Promise.resolve();
const yahooSlot = () => { const p = yahooGate.then(() => sleep(900)); yahooGate = p; return p; };   // giãn cách gọi Yahoo
async function yahoo(sym, interval, range) {
  let last;
  for (const host of ["query1", "query2", "query1"]) {
    await yahooSlot();
    try {
      const j = await getJ(`https://${host}.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(sym)}?interval=${interval}&range=${range}&includePrePost=false`);
      const r = j.chart.result[0], q = r.indicators.quote[0], out = [];
      (r.timestamp || []).forEach((t, k) => { if ([q.open[k], q.high[k], q.low[k], q.close[k]].every(x => x != null)) out.push({ t: t * 1000, o: q.open[k], h: q.high[k], l: q.low[k], c: q.close[k], v: q.volume[k] || 0 }); });
      return { c: out, meta: r.meta };
    } catch (e) { last = e; }
  }
  throw last;
}
async function stooq(sym, per) {           // dự phòng cổ phiếu: nến ngày / tuần từ Stooq
  const ac = new AbortController(), t = setTimeout(() => ac.abort(), 15000);
  try {
    const r = await fetch(`https://stooq.com/q/d/l/?s=${sym.toLowerCase()}.us&i=${per}`, { signal: ac.signal, headers: { "User-Agent": UA } });
    if (!r.ok) throw new Error(`stooq HTTP ${r.status}`);
    const rows = (await r.text()).trim().split(/\r?\n/).slice(1).map(l => l.split(",")).filter(a => a.length >= 5 && a[4] !== "" && !isNaN(+a[4]))
      .map(a => ({ t: Date.parse(a[0] + "T20:00:00Z"), o: +a[1], h: +a[2], l: +a[3], c: +a[4], v: +(a[5] || 0) }));
    if (rows.length < 2) throw new Error("stooq không có dữ liệu");
    return rows;
  } finally { clearTimeout(t); }
}
async function nasdaqDaily(sym) {          // dự phòng: nến ngày từ Nasdaq.com
  const to = new Date(), from = new Date(Date.now() - 6 * 365 * 864e5), d = x => x.toISOString().slice(0, 10);
  let last;
  for (const cls of sym === "SPY" ? ["etf", "stocks"] : ["stocks", "etf"]) {
    try {
      const j = await getJ(`https://api.nasdaq.com/api/quote/${sym}/historical?assetclass=${cls}&fromdate=${d(from)}&todate=${d(to)}&limit=9999`,
        { headers: { "Accept": "application/json, text/plain, */*", "Origin": "https://www.nasdaq.com", "Referer": "https://www.nasdaq.com/" } });
      const rows = (((j || {}).data || {}).tradesTable || {}).rows || [];
      const n = v => +String(v || "").replace(/[$,]/g, "");
      const out = rows.map(r => { const [m, dd, y] = String(r.date).split("/"); return { t: Date.parse(`${y}-${m}-${dd}T20:00:00Z`), o: n(r.open), h: n(r.high), l: n(r.low), c: n(r.close), v: n(r.volume) }; })
        .filter(k => [k.t, k.o, k.h, k.l, k.c].every(Number.isFinite) && k.c > 0).sort((a, b) => a.t - b.t);
      if (out.length >= 30) return out;
      last = new Error("Nasdaq thiếu nến");
    } catch (e) { last = e; }
  }
  throw last;
}
async function xStock(sym, tf) {            // dự phòng: cổ phiếu token hoá giao dịch 24/7 trên sàn crypto (COINX, HOODX…)
  let last;
  // xStocks (Bybit, Gate, MEXC, Kraken, Bitget…) · Ondo Global Markets (…ON) · Bitget/MEXC (…B)
  for (const suf of ["X", "ON", "B"]) { try { return (await cryptoCandles(sym + suf, tf)).c; } catch (e) { last = e; } }
  throw new Error(`không sàn crypto nào có token hoá ${sym}X / ${sym}ON / ${sym}B`);
}
const dailyMemo = new Map();
async function stockDaily(sym) {
  if (dailyMemo.has(sym)) return dailyMemo.get(sym);
  const p = (async () => {
    const errs = [];
    try { const c = (await yahoo(sym, "1d", "5y")).c; if (c.length >= 30) return c; errs.push("Yahoo thiếu nến"); } catch (e) { errs.push("Yahoo " + e.message); }
    try { return await nasdaqDaily(sym); } catch (e) { errs.push("Nasdaq " + e.message); }
    try { return await stooq(sym, "d"); } catch (e) { errs.push("Stooq " + e.message); }
    throw new Error(errs.join("; "));
  })();
  dailyMemo.set(sym, p); p.catch(() => {});
  return p;
}
const aggregate = (c, ms) => { const out = []; for (const k of c) { const b = K.bucket(k.t, ms), L = out[out.length - 1]; if (L && L.t === b) { L.h = Math.max(L.h, k.h); L.l = Math.min(L.l, k.l); L.c = k.c; L.v += k.v; } else out.push({ ...k, t: b }); } return out; };
async function stockCandles(sym, tf) {
  const errs = [];
  if (tf === "4h" || tf === "1h") {
    try { const c = (await yahoo(sym, "60m", tf === "4h" ? "730d" : "60d")).c; if (c.length >= 30) return aggregate(c, K.TFMS[tf]).slice(-500); errs.push("Yahoo thiếu nến"); }
    catch (e) { errs.push("Yahoo " + e.message); }
  } else {
    try { const d = await stockDaily(sym); return (tf === "1w" ? aggregate(d, K.TFMS["1w"]) : aggregate(d, K.TFMS["1d"])).slice(-500); }
    catch (e) { errs.push(e.message); }
  }
  try { return await xStock(sym, tf); } catch (e) { errs.push(e.message); }
  // dự phòng cuối: perp cổ phiếu trên Hyperliquid (trade.xyz) giao dịch 24/7
  try { const c = await hlCandles("xyz:" + sym, tf, 500); if (c.length >= 30) return c.slice(-500); } catch (e) { errs.push("Hyperliquid " + e.message); }
  throw new Error(errs.join("; "));
}

async function topCoins() {
  try {
    const j = await getJ(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1`, CG_KEY ? { headers: { "x-cg-demo-api-key": CG_KEY } } : {});
    return { src: "CoinGecko", list: j };
  } catch (e) {
    const j = await getJ("https://api.coinpaprika.com/v1/tickers?quotes=USD", {}, 30000);
    return { src: "CoinPaprika", list: j.filter(m => m.rank > 0).sort((a, b) => a.rank - b.rank).slice(0, 150).map(m => ({ symbol: m.symbol, name: m.name, current_price: m.quotes.USD.price, price_change_percentage_24h: m.quotes.USD.percent_change_24h })) };
  }
}

// vốn hoá thị trường theo mã (USD) — để loại dự án quá nhỏ (Trọng 12/11/2026: dưới 30 triệu USD thì bỏ)
const MIN_MCAP = +(process.env.MIN_MCAP_USD || 30e6);
async function mcapMap() {
  const M = new Map(), put = (s, v) => { s = String(s || "").toUpperCase().replace(/[^A-Z0-9]/g, ""); if (s && isFinite(v) && v > (M.get(s) || 0)) M.set(s, v); };
  try {
    for (let p = 1; p <= 4; p++) {
      const j = await getJ(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=${p}`, CG_KEY ? { headers: { "x-cg-demo-api-key": CG_KEY } } : {});
      for (const m of j) put(m.symbol, m.market_cap); if (j.length < 250) break; await sleep(2500);
    }
  } catch (e) { }   // CoinGecko bản miễn phí hay bị giới hạn sau 1–2 trang → luôn gộp thêm CoinPaprika (đủ ~2500 dự án) để không loại nhầm coin hạng 300–1000
  try { const j = await getJ("https://api.coinpaprika.com/v1/tickers?quotes=USD", {}, 30000); for (const m of j) put(m.symbol, m.quotes && m.quotes.USD && m.quotes.USD.market_cap); } catch (e) { }
  if (M.size < 300) throw new Error("thiếu dữ liệu vốn hoá");
  return M;
}

/* ---------- 3. Telegram ---------- */
const fp = p => { if (!isFinite(p)) return "–"; const a = Math.abs(p), d = a >= 1000 ? 2 : a >= 1 ? 3 : a >= 0.01 ? 5 : a >= 0.0001 ? 7 : 9; return p.toLocaleString("en-US", { minimumFractionDigits: Math.min(d, 2), maximumFractionDigits: d }); };
const pct = (v, b) => { const x = (v / b - 1) * 100; return (x >= 0 ? "+" : "") + x.toFixed(1) + "%"; };
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const outbox = [];
async function flushTelegram() {
  if (!TG_TOKEN || !TG_CHAT) { if (outbox.length) console.log(`(Chưa cài Telegram) ${outbox.length} thông báo:\n` + outbox.join("\n---\n")); return; }
  for (const text of outbox) {
    try {
      const r = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ chat_id: TG_CHAT, text, parse_mode: "HTML", disable_web_page_preview: true }) });
      if (!r.ok) console.log("Telegram lỗi:", r.status, await r.text());
    } catch (e) { console.log("Telegram lỗi:", e.message); }
    await sleep(400);
  }
}
const link = () => SITE ? `\n<a href="${SITE}">Mở Crypto RSI Radar</a>` : "";
function msgNewPick(x) {
  const P = x.P;
  return [SIDE === "short" ? `🔴 <b>KÈO SHORT MỚI · ${esc(x.base)} · ${x.tf.toUpperCase()}</b>` : `🟢 <b>KÈO MỚI · ${esc(x.base)} · ${x.tf.toUpperCase()}</b>`,
    `Điểm ${Math.round(x.score)} · R:R ${P.rr1.toFixed(1)} / ${P.rr2.toFixed(1)}`,
    `Entry: <b>${fp(P.entry)}</b> (${esc(P.mode)})`,
    `SL: ${fp(P.stop)} (${pct(P.stop, P.entry)})`,
    `TP1: ${fp(P.tp1)} (${pct(P.tp1, P.entry)}) · ${esc(P.tp1Why)}`,
    `TP2: ${fp(P.tp2)} (${pct(P.tp2, P.entry)}) · ${esc(P.tp2Why)}`,
    ...(P.tps || []).slice(2).map((t, k) => `TP${k + 3}: ${fp(t)} (${pct(t, P.entry)}) · ${esc(P.tpWhys[k + 2])}`),
    P.tps && P.tps.length > 2 ? `Chốt: ${P.tpf.map((f, k) => `TP${k + 1} ${Math.round(f * 100)}%`).join(" · ")} · chạm TP dời SL ${SIDE === "short" ? "xuống" : "lên"} TP trước` : "",
    x.why.g.length ? `Lý do: ${esc(x.why.g.join(" · "))}` : "",
    x.why.w.length ? `⚠️ Lưu ý: ${esc(x.why.w.join(", "))}` : ""].filter(Boolean).join("\n") + link();
}
function msgUpdate(j, prev) {
  const roi = `${j.roi >= 0 ? "+" : ""}${j.roi.toFixed(2)}% (${j.r >= 0 ? "+" : ""}${j.r.toFixed(2)}R)`, h = `${esc(j.base)} · ${j.tf.toUpperCase()}`;
  if (prev.status === "pending" && j.status !== "pending" && j.status !== "expired") return `🔔 <b>${h}</b> khớp lệnh chờ ở ${fp(j.entry)}`;
  const T = Array.isArray(j.tps) && j.tps.length >= 2 ? j.tps : [j.tp1, j.tp2], F = j.tpf || [.5, .5];
  if (j.status === "open" && (j.hit || 0) > (prev.hit || 0)) {
    const k = j.hit;
    return k === 1 ? `✅ <b>${h}</b> chạm TP1 ${fp(T[0])} · đã chốt ${Math.round(F[0] * 100)}%, SL dời về Entry`
                   : `✅ <b>${h}</b> chạm TP${k}/${T.length} ${fp(T[k - 1])} · chốt thêm ${Math.round(F[k - 1] * 100)}%, SL dời ${j.side === "short" ? "xuống" : "lên"} TP${k - 1} ${fp(T[k - 2])}`;
  }
  if (j.status === "tp2") return `🏁 <b>${h}</b> chốt TP cuối${T.length > 2 ? ` (TP${T.length})` : ""} ${fp(T[T.length - 1])} · ROI ${roi}`;
  if (j.status === "trail") return `☑️ <b>${h}</b> chạm TP${j.hit} rồi giá quay đầu, phần còn lại chốt ở TP${j.hit - 1} · ROI ${roi}`;
  if (j.status === "tp1_be") return `☑️ <b>${h}</b> chốt TP1 rồi về hoà phần còn lại · ROI ${roi}`;
  if (j.status === "struct" && j.tag === "time") return `⏱ <b>${h}</b> lệnh ì: đã ${String(j.tf).toUpperCase() === "1D" ? "10 ngày" : "10 nến " + String(j.tf).toUpperCase()} mà chưa chạm TP1 → thoát lệnh ở ${fp(j.exit)} · ROI ${roi}`;
  if (j.status === "struct") return `⚠️ <b>${h}</b> ${j.side === "short" ? "phá cấu trúc giảm" : "phá cấu trúc tăng"} (nến ${String(j.tf).toUpperCase()} đóng cửa ${j.side === "short" ? "trên đỉnh" : "dưới đáy"} gần nhất) → thoát lệnh ở ${fp(j.exit)} · ROI ${roi}`;
  if (j.status === "sl") return `🛑 <b>${h}</b> dính SL ${fp(j.stop)} · ROI ${roi}`;
  if (j.status === "expired") return `⌛ <b>${h}</b> lệnh chờ bị hủy (không khớp)`;
  return null;
}

/* ---------- 4. Quét và chấm ---------- */
async function main() {
  const t0 = Date.now();
  const state = fs.existsSync(STATE_PATH) ? JSON.parse(fs.readFileSync(STATE_PATH, "utf8")) : {};
  state.journal = state.journal || [];
  const errors = [];
  // Nhận kèo cũ từ trang web (file import.json người dùng tải lên repo), gộp vào nhật ký rồi xoá file
  for (const f of [path.join(ROOT, "import.json"), path.join(ROOT, "data", "import.json")]) {
    if (!fs.existsSync(f)) continue;
    try {
      const raw = JSON.parse(fs.readFileSync(f, "utf8")), list = Array.isArray(raw) ? raw : (raw.journal || []);
      const have = new Set(state.journal.map(j => j.id)); let n = 0;
      for (const j of list) if (j && j.id && j.sym && j.entry > 0 && !have.has(j.id)) { delete j.local; state.journal.push({ ...j, by: j.by || "web" }); n++; }
      state.journal.sort((a, b) => a.at - b.at);
      outbox.push(`📥 Đã nhận ${n} kèo cũ từ trang web, bot sẽ theo dõi tiếp.`);
      console.log(`Nhận ${n} kèo từ ${path.basename(f)}`);
    } catch (e) { errors.push(`import.json lỗi: ${e.message}`); }
    fs.unlinkSync(f);
  }

  // 4.1 danh sách tài sản
  const { src: rankSrc, list } = await topCoins();
  const assets = list.filter(m => !K.skipCoin(m)).slice(0, 100)
    .map((m, i) => ({ kind: "crypto", base: (m.symbol || "").toUpperCase().replace(/[^A-Z0-9]/g, ""), rank: i + 1 }))
    .filter(a => a.base);
  // coin từng lọt top 100 được lưu lại và quét tiếp kể cả khi rớt khỏi top 100 sau đó
  const uni = state.universe = state.universe || {};
  for (const a of assets) if (!uni[a.base]) uni[a.base] = Date.now();
  for (const j of state.journal || []) if (j.src !== "st" && j.base && !uni[j.base]) uni[j.base] = j.at || Date.now();   // coin bot từng pick (lúc đó nằm trong top 100)
  for (const b of Object.keys(uni)) if (!assets.some(a => a.base === b)) assets.push({ kind: "crypto", base: b, rank: 0 });
  // coin ngoài top 100 vẫn muốn quét (khai báo EXTRA_CRYPTO trong index.html)
  const extra = ((fs.readFileSync(path.join(ROOT, "index.html"), "utf8").match(/const EXTRA_CRYPTO=(\[[^\]]*\])/) || [])[1]);
  try { for (const b of JSON.parse(extra || "[]")) if (!assets.some(a => a.base === b)) assets.push({ kind: "crypto", base: b, rank: 0 }); } catch (e) { }
  // mọi dự án đang niêm yết perp trên Hyperliquid (Trọng yêu cầu 12/11/2026) — bot đặt lệnh trên HL nên quét đủ những gì trade được
  try {
    const r = await fetch("https://api.hyperliquid.xyz/info", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "meta" }), signal: AbortSignal.timeout(15000) });
    const meta = await r.json(); let nHL = 0;
    for (const u of meta.universe || []) {
      if (u.isDelisted) continue; const b = /^k[A-Z]/.test(u.name) ? u.name.slice(1) : u.name;   // kPEPE = 1000 PEPE → quét theo PEPE
      if (!/^[A-Z0-9]{2,12}$/.test(b)) continue;
      if (!assets.some(x => x.base === b) && !K.STOCKS.some(x => x[1] === b)) { assets.push({ kind: "crypto", base: b, rank: 0, hl: true }); nHL++; }   // tránh trùng với cổ phiếu/hàng hoá cùng tên
    }
    state.hlListed = (meta.universe || []).filter(u => !u.isDelisted).length; console.log(`Hyperliquid: ${state.hlListed} dự án đang niêm yết, thêm ${nHL} mã ngoài danh sách cũ`);
  } catch (e) { errors.push(`Không lấy được danh sách Hyperliquid: ${e.message}`); }
  for (const [sym, label, name, ex] of K.STOCKS) assets.push({ kind: "stock", base: label, sym, ex });
  // CHỈ giữ những gì đang có trên Hyperliquid (sàn chính + HIP-3): coin, cổ phiếu, hàng hoá (Trọng 12/11/2026)
  try {
    const { hlTradable } = await import(pathToFileURL(path.join(HERE, "hyper.mjs")).href), T = await hlTradable(), drop = [];
    for (let i = assets.length - 1; i >= 0; i--) { const a = assets[i]; if (!T.has(a.base, a.sym)) { drop.push(a.base); assets.splice(i, 1); } }
    console.log(`Hyperliquid có ${T.size} thị trường → bỏ ${drop.length} mã không trade được trên Hyperliquid: ${drop.slice(0, 40).join(", ")}${drop.length > 40 ? "…" : ""}`);
  } catch (e) { errors.push(`Không đọc được danh sách thị trường Hyperliquid (giữ nguyên danh sách): ${e.message}`); }
  // loại dự án có vốn hoá dưới MIN_MCAP (mặc định 30 triệu USD) hoặc không tìm thấy vốn hoá (thường là dự án rất nhỏ)
  try {
    const MC = await mcapMap(); const drop = [];
    for (let i = assets.length - 1; i >= 0; i--) { const a = assets[i], mc = MC.get(a.base); if (a.kind === "crypto" && !(mc >= MIN_MCAP)) { drop.push(a.base); assets.splice(i, 1); } else a.mcap = mc; }
    state.mcapDropped = drop.length; console.log(`Bỏ ${drop.length} dự án vốn hoá < ${MIN_MCAP / 1e6} triệu USD (hoặc không rõ vốn hoá): ${drop.slice(0, 40).join(", ")}${drop.length > 40 ? "…" : ""}`);
  } catch (e) { errors.push(`Không lấy được vốn hoá thị trường (giữ nguyên danh sách): ${e.message}`); }

  // 4.2 nến 3 khung + chấm điểm
  const ok = [], near = [], evals = new Map();
  let BTC1D = null; if (K.RS_DAYS != null) { try { BTC1D = (await cryptoCandles("BTC", "1d", 400)).c; } catch (e) { } }   // cho bộ lọc sức mạnh tương đối
  await pool(assets, 10, async a => {   // nhiều mã hơn (thêm toàn bộ Hyperliquid) → tăng số luồng để giữ thời gian quét
    const R = {}, why = [], TFA = a.kind !== "stock" && K.LOW_TF_ASSETS.includes(a.base) ? [...K.LOW_TFS, ...PICK_TFS] : PICK_TFS;   // BTC: thêm khung nhỏ (1H)
    const FETCH = [...new Set([...TFA, ...TFA.map(x => K.LTF_CONFIRM[x]).filter(Boolean)])];   // thêm khung nhỏ để xác nhận (A2)
    for (const tf of FETCH) {
      try {
        const c = a.kind === "stock" ? await stockCandles(a.sym, tf) : (await cryptoCandles(a.base, tf)).c;
        if (c.length < 60) continue;
        const cc = K.closedOnly(c, tf);   // tín hiệu chỉ xác nhận trên nến ĐÃ ĐÓNG (Trọng duyệt 12/11/2026) — vào lệnh thì linh hoạt theo giá hiện tại trên sàn
        if (cc.length < 60) continue;
        const t = { src: a.kind === "stock" ? "st" : "ex", c: cc, tf, side: SIDE }; K.compute(t);
        if (t.ind) { t.livePx = c.at(-1).c; R[tf] = t; }
      } catch (e) { why.push(`${tf}: ${e.message}`); }
    }
    if (!Object.keys(R).length) { errors.push(`${a.base}: không có dữ liệu (${why.join(" | ") || "thiếu nến"})`); return; }
    { const r0 = R["4h"] || R["1d"] || R["1w"] || Object.values(R)[0]; a.price = r0.livePx ?? r0.c.at(-1).c; }   // giá hiện tại (nến đang chạy)
    TFA.forEach((tf, k) => {
      const t = R[tf]; if (!t || !t.buy || !t.buy.plan || t.buy.plan.reject) return;
      const htf = TFA[k + 1] || null, hT = htf ? K.trendOf(R[htf]) : null;
      if (K.HTF_MIN != null && htf && (hT == null || hT < K.HTF_MIN)) return;
      if (K.LTF_CONFIRM[tf] && !K.ltfOK(tf, R[K.LTF_CONFIRM[tf]])) return;   // khung nhỏ phải xác nhận cấu trúc tăng (W: D tăng rõ)
      if (a.kind !== "stock" && K.rsOK && !K.rsOK(R["1d"] && R["1d"].c, BTC1D, Date.now())) return;   // coin yếu hơn BTC (nếu bật RS_DAYS)
      if (K.volOK && !K.volOK(t.c)) return;                                                          // biến động bất thường (nếu bật VOL_X)
      let sc = t.buy.score; if (hT != null) { if (hT > .3) sc += 3; else if (hT < -.3) sc -= 5; }
      if (K.pumpAdj) { const pa = K.pumpAdj(R["1d"] && R["1d"].c, BTC1D, Date.now(), a.kind === "stock"); if (pa === false) return; sc += pa || 0; }   // tiền vào ×2 → +5 điểm (Trọng duyệt 12/11/2026)
      sc = K.clamp(sc, 0, 100);
      const rs = K.pickReasons(t.ind), why = SIDE === "short" ? { g: rs.g.map(K.swapTxt), w: rs.w.map(K.swapTxt) } : rs;
      const P = t.buy.plan, it = { a, base: a.base, tf, P, score: sc, hT, htf, why, rank: sc + Math.min(P.rr1, 5) * 5 };
      evals.set(a.base + "|" + tf, it);
      if (sc >= K.PICK_MIN + (K.TF_ADD[tf] || 0) && P.rr1 >= (K.RR_TF && K.RR_TF[tf] != null ? K.RR_TF[tf] : K.MIN_RR)) ok.push(it); else if (sc >= K.PICK_MIN - 10 && P.rr1 >= 1.5) near.push(it);
    });
  });
  const best = arr => { const m = new Map(); for (const x of arr) { const o = m.get(x.base); if (!o || x.rank > o.rank) m.set(x.base, x); } return [...m.values()].sort((p, q) => q.rank - p.rank); };
  // bộ lọc thị trường (REGIME trong index.html): chỉ LONG khi BTC 1D trên EMA200 (SHORT: dưới)
  let regimeOK = true, marketWhy = [];
  if (K.REGIME) {
    try { const bc = K.closedOnly((await cryptoCandles("BTC", "1d", 400)).c, "1d"), e = K.ema(bc.map(x => x.c), K.REGIME_EMA || 200), up = bc.at(-1).c > e.at(-1), sl = K.REGIME_SLOPE || 0, rising = !sl || e.at(-1) > e.at(-1 - sl), falling = !sl || e.at(-1) < e.at(-1 - sl); const src = K.REGIME_SRC || "ema"; regimeOK = !src.includes("ema") || (SIDE === "short" ? !up && falling : up && rising);
      if (src.includes("dow")) { const dtf = src.includes("4h") ? "4h" : "1d", dc = (await cryptoCandles("BTC", dtf, 300)).c, d = K.dow(K.closedOnly(dc, dtf));
        const dOK = SIDE === "short" ? K.btcDowDown(d) : K.btcDowUp(d); if (!dOK) console.log(`Bộ lọc thị trường: BTC ${dtf.toUpperCase()} chưa có cấu trúc ${SIDE === "short" ? "giảm" : "tăng"}`); if (!dOK) marketWhy.push(`BTC ${dtf.toUpperCase()} chưa có cấu trúc ${SIDE === "short" ? "giảm" : "tăng"}`); regimeOK = regimeOK && dOK; }
      if (src.includes("ema") && !(SIDE === "short" ? !up : up)) marketWhy.unshift(`BTC ${up ? "trên" : "dưới"} EMA${K.REGIME_EMA || 200} ngày`);
      if (!regimeOK) console.log(`Bộ lọc thị trường: BTC ${up ? "trên" : "dưới"} EMA200 1D → không mở kèo ${SIDE}`); } catch (e) { }
    if (!regimeOK) for (let i = ok.length - 1; i >= 0; i--) if (ok[i].a.kind !== "stock") ok.splice(i, 1);   // chỉ áp cho crypto, cổ phiếu không phụ thuộc BTC
  }
  const picks = best(ok), pickSet = new Set(picks.map(x => x.base)), nears = best(near).filter(x => !pickSet.has(x.base)).slice(0, 12);

  // 4.25 chấm lại (một lần) các lệnh chờ khớp theo bảng điểm mới: không còn đạt chuẩn vào kèo thì huỷ
  const RECHECK = 5, cancelled = [], replanned = [], replanIds = [];
  for (const j of state.journal) {
    // kèo "vào ngay" mới ghi (< 48h) nhưng CHƯA có lệnh thật trên sàn cũng được chấm lại theo chuẩn mới
    const paperOpen = j.status === "open" && (!j.hl || ["skip", "na"].includes(j.hl.st)) && Date.now() - j.at < 48 * 36e5 && !j.half;
    if ((j.status !== "pending" && !paperOpen) || ((j.recheck || 0) >= RECHECK && (j.side || "long") === SIDE)) continue;
    if (!assets.some(a => a.base === j.base)) continue;                // mã không quét được lượt này → để lượt sau
    if ((j.side || "long") !== SIDE) { Object.assign(j, { status: "cancel", exitAt: Date.now(), roi: 0, r: 0, cancelWhy: `đã chuyển sang mode ${SIDE.toUpperCase()}` }); cancelled.push(`• <b>${esc(j.base)}</b> ${String(j.tf).toUpperCase()}: lệnh chờ ${(j.side || "long").toUpperCase()}, bot đã chuyển sang mode ${SIDE.toUpperCase()}`); continue; }
    j.recheck = RECHECK;
    const x = evals.get(j.base + "|" + j.tf);
    const why = !x ? "điểm kỹ thuật không còn đủ để vào kèo (hoặc kèo bị loại do SL quá xa)"
      : x.score < K.PICK_MIN ? `điểm chỉ còn ${x.score.toFixed(1)}/100 (cần ≥ ${K.PICK_MIN})`
      : x.P.rr1 < 2 ? `R:R tới TP1 chỉ còn ${x.P.rr1.toFixed(1)} (cần ≥ 2)` : null;
    if (why) { Object.assign(j, { status: "cancel", exitAt: Date.now(), roi: 0, r: 0, cancelWhy: why }); cancelled.push(`• <b>${esc(j.base)}</b> ${String(j.tf).toUpperCase()} (Entry ${fp(j.entry)}): ${why}`); }
    else if (j.status === "pending") {                                  // còn đạt → dời Entry / SL / TP theo thuật toán mới
      const P = x.P, old = `${fp(j.entry)} / SL ${fp(j.stop)} / TP1 ${fp(j.tp1)}`;
      Object.assign(j, { rev: (j.rev || 0) + 1, at: Date.now(), mode: P.mode, entry: P.entry, stop: P.stop, tp1: P.tp1, tp2: P.tp2, tps: P.tps, tpf: P.tpf, tpWhys: P.tpWhys,
        tp1Why: P.tp1Why, tp2Why: P.tp2Why, rr1: P.rr1, score: Math.round(x.score), status: P.mode === "Chờ hồi" ? "pending" : "open", fillAt: P.mode === "Chờ hồi" ? null : Date.now() });
      if (j.hl && j.hl.st === "placed") j.hl.replan = true;             // lệnh chờ trên sàn: huỷ rồi đặt lại theo mức mới
      else if (j.hl && ["skip", "na", "fail"].includes(j.hl.st)) delete j.hl;
      replanIds.push(j.id);
      replanned.push(`• <b>${esc(j.base)}</b> ${String(j.tf).toUpperCase()} (${Math.round(x.score)}đ): ${old} → ${P.mode === "Chờ hồi" ? "chờ" : "vào ngay"} ${fp(P.entry)} / SL ${fp(P.stop)} / ${P.tps.map((t, k) => `TP${k + 1} ${fp(t)}`).join(" / ")}`);
    }
  }
  if (replanned.length) outbox.push(`🔁 <b>Cập nhật ${replanned.length} lệnh chờ theo thuật toán mới</b>\n` + replanned.join("\n") + link());
  if (cancelled.length) outbox.push(`🧹 <b>Huỷ ${cancelled.length} lệnh chờ không còn đạt điểm</b> (chấm lại theo bảng điểm mới)\n` + cancelled.join("\n") + link());

  // 4.3 ghi kèo mới vào nhật ký
  const isDone = st => ["tp2", "tp1_be", "trail", "struct", "sl", "expired", "manual", "cancel"].includes(st);
  const newOnes = [], newIds = new Set(replanIds);
  for (const x of picks) {
    const sym = x.a.kind === "stock" ? x.a.sym : x.base + "USDT";
    if (state.journal.some(j => j.sym === sym && !isDone(j.status))) continue;
    const P = x.P;
    state.journal.push({
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), at: Date.now(), sym, base: x.base,
      src: x.a.kind === "stock" ? "st" : "bn", ex: x.a.ex, tf: x.tf, side: SIDE, mode: P.mode, entry: P.entry, stop: P.stop, tp1: P.tp1, tp2: P.tp2, tps: P.tps, tpf: P.tpf, tpWhys: P.tpWhys,
      tp1Why: P.tp1Why, tp2Why: P.tp2Why, tpVer: 2, rr1: P.rr1, score: Math.round(x.score),
      status: P.mode === "Chờ hồi" ? "pending" : "open", fillAt: P.mode === "Chờ hồi" ? null : Date.now(), roi: 0, r: 0, by: "github", recheck: RECHECK
    });
    newIds.add(state.journal.at(-1).id);
    newOnes.push(x);
  }
  if (newOnes.length > 6) outbox.push(`${SIDE === "short" ? "🔴" : "🟢"} <b>${newOnes.length} kèo ${SIDE === "short" ? "SHORT " : ""}mới</b>: ` + newOnes.map(x => `${esc(x.base)} ${x.tf.toUpperCase()} (${Math.round(x.score)}đ, ${x.P.rr1.toFixed(1)}R)`).join(", ") + link());
  else newOnes.forEach(x => outbox.push(msgNewPick(x)));

  // 4.4 chấm các lệnh đang mở / chờ khớp theo nến 1H
  const active = state.journal.filter(j => !isDone(j.status));
  await pool(active, 4, async j => {
    try {
      let c;
      if (j.src === "st") {
        try { c = (await yahoo(j.sym, "60m", Date.now() - j.at > 55 * 864e5 ? "730d" : "60d")).c; }
        catch (e) { try { c = await xStock(j.sym, "1h"); } catch (e2) { c = await stockDaily(j.sym); } }
      }
      else {                                                             // lấy đủ nến 1H từ lúc ghi kèo tới hiện tại (kèo khung D/W có thể kéo dài nhiều tháng)
        const iv = j.tf === "15m" ? "15m" : "1h", ms = iv === "15m" ? 9e5 : 36e5;   // kèo khung 15m chấm bằng nến 15m
        c = (await cryptoCandles(j.base, iv, 1000, j.at - ms)).c;
        for (let pg = 0; pg < 8 && c.length && c.at(-1).t < Date.now() - 2 * ms; pg++) {
          const more = (await cryptoCandles(j.base, iv, 1000, c.at(-1).t + ms).catch(() => ({ c: [] }))).c.filter(k => k.t > c.at(-1).t);
          if (!more.length) break; c = c.concat(more);
        }
      }
      const cur = c.length ? c.at(-1).c : null, prev = { status: j.status, half: !!j.half, hit: j.hit || (j.half ? 1 : 0) };
      Object.assign(j, K.simulate(j, c, cur), { checked: Date.now() });
      const m = msgUpdate(j, prev); if (m && (j.status !== prev.status || j.half !== prev.half || (j.hit || 0) !== prev.hit)) outbox.push(m);
    } catch (e) { errors.push(`${j.base}: không chấm được lệnh (${e.message})`); }
  });

  // 4.45 tự đặt lệnh trên sàn (chỉ chạy khi đã cài khoá trong GitHub Secrets) · ưu tiên Hyperliquid
  if (process.env.HL_ADDRESS && process.env.HL_AGENT_KEY) {
    try { const { hyperRun } = await import(pathToFileURL(path.join(HERE, "hyper.mjs")).href); await hyperRun({ state, newIds, outbox, errors, esc, link, allowed: new Set(assets.map(a => a.base)) }); }
    catch (e) { errors.push(`Hyperliquid: ${e.message}`); }
    // Chiến lược RSI khung D cho BTC (DCA kim tự tháp, ký quỹ 50% tài sản, long perp x2 isolated) — chạy độc lập với bot chính
    try { const { rsiDcaRun } = await import(pathToFileURL(path.join(HERE, "hyper.mjs")).href); const bd = (await cryptoCandles("BTC", "1d", 500)).c; await rsiDcaRun({ state, daily: bd, outbox, errors, esc }); }
    catch (e) { errors.push(`RSI BTC: ${e.message}`); }
  } else if (process.env.ARCUS_ADDRESS && process.env.ARCUS_PRIVATE_KEY) {
    try { const { arcusRun } = await import(pathToFileURL(path.join(HERE, "arcus.mjs")).href); await arcusRun({ state, newIds, outbox, errors, esc, link }); }
    catch (e) { errors.push(`Arcus: ${e.message}`); }
  }

  // 4.46 quét cơ hội delta-neutral trade.xyz × Metric (chỉ đọc dữ liệu, không đặt lệnh)
  let arb = state.arb || null;
  try { const { arbRun } = await import(pathToFileURL(path.join(HERE, "arb.mjs")).href); arb = await arbRun({ state, outbox, errors, esc, link }) || arb; }
  catch (e) { errors.push(`Delta-neutral: ${e.message}`); }

  // 4.5 lưu trạng thái
  const keep = state.journal.slice(-500);
  const pub = x => ({ side: SIDE, base: x.base, sym: x.a.kind === "stock" ? x.a.sym : x.base + "USDT", src: x.a.kind === "stock" ? "st" : "bn", ex: x.a.ex, tf: x.tf, score: Math.round(x.score),
    rank: x.rank, entry: x.P.entry, mode: x.P.mode, stop: x.P.stop, tp1: x.P.tp1, tp2: x.P.tp2, rr1: x.P.rr1, rr2: x.P.rr2, tp1Why: x.P.tp1Why, tp2Why: x.P.tp2Why, why: x.why, htf: x.htf, hT: x.hT });
  const out = { version: 1, updatedAt: Date.now(), tookSec: Math.round((Date.now() - t0) / 1000), rankSrc, scanned: assets.length,
    picks: picks.map(pub), near: nears.map(pub), journal: keep, errors: errors.slice(0, 40), arcusMeta: state.arcusMeta, hlMeta: state.hlMeta, arb, arbAlert: state.arbAlert, universe: state.universe, side: SIDE, breakerMsg: state.breakerMsg, rsiDca: state.rsiDca,
    scanSet: assets.map(a => a.base), market: { cryptoOK: regimeOK, why: marketWhy } };   // để trang web lọc kèo y như bot (chỉ mã bot quét; altcoin chỉ khi thị trường đạt)
  fs.mkdirSync(path.dirname(STATE_PATH), { recursive: true });
  fs.writeFileSync(STATE_PATH, JSON.stringify(out));
  if (process.env.PING === "true") outbox.push(`✅ <b>Crypto RSI Radar</b> đã kết nối Telegram.\nVừa quét ${assets.length} mã (${rankSrc}) · ${picks.length} kèo đạt chuẩn · ${active.length} lệnh đang theo dõi.\nTừ giờ bot sẽ báo khi có kèo mới, chạm TP hoặc dính SL.` + link());
  await flushTelegram();
  console.log(`Xong sau ${out.tookSec}s · quét ${assets.length} mã (${rankSrc}) · ${picks.length} kèo đạt chuẩn · ${newOnes.length} kèo mới · ${active.length} lệnh đang theo dõi · ${outbox.length} thông báo · ${errors.length} lỗi nhỏ`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(e => { console.error("Lỗi:", e); process.exit(1); });
}
export { main, K, msgNewPick };
