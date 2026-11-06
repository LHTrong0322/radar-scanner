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
  return new Function("S", src + "\nreturn {TFMS,SETS,STOCKS,skipCoin,bucket,compute,trendOf,pickReasons,simulate,MAX_SL,clamp};")(S);
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
  ["mexc", async (b, tf, n) => {
    const iv = { "1h": "60m", "4h": "4h", "1d": "1d", "1w": "1W" }[tf];
    const j = await getJ(`https://api.mexc.com/api/v3/klines?symbol=${b}USDT&interval=${iv}&limit=${Math.min(n, 1000)}`);
    return j.map(a => ({ t: num(a[0]), o: num(a[1]), h: num(a[2]), l: num(a[3]), c: num(a[4]), v: num(a[5]) }));
  }],
  ["gate", async (b, tf, n) => {
    const iv = { "1h": "1h", "4h": "4h", "1d": "1d", "1w": "7d" }[tf];
    const j = await getJ(`https://api.gateio.ws/api/v4/spot/candlesticks?currency_pair=${b}_USDT&interval=${iv}&limit=${Math.min(n, 1000)}`);
    return j.map(a => ({ t: num(a[0]) * 1000, o: num(a[5]), h: num(a[3]), l: num(a[4]), c: num(a[2]), v: num(a[6]) }));
  }],
  ["kucoin", async (b, tf) => {
    const ty = { "1h": "1hour", "4h": "4hour", "1d": "1day", "1w": "1week" }[tf];
    const j = await getJ(`https://api.kucoin.com/api/v1/market/candles?type=${ty}&symbol=${b}-USDT`);
    if (j.code !== "200000") throw new Error(j.msg);
    return j.data.map(a => ({ t: num(a[0]) * 1000, o: num(a[1]), c: num(a[2]), h: num(a[3]), l: num(a[4]), v: num(a[5]) })).reverse();
  }],
  ["okx", async (b, tf) => {
    const bar = { "1h": "1H", "4h": "4H", "1d": "1Dutc", "1w": "1Wutc" }[tf];
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
async function yahoo(sym, interval, range) {
  let last;
  for (const host of ["query1", "query2"]) {
    try {
      const j = await getJ(`https://${host}.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(sym)}?interval=${interval}&range=${range}&includePrePost=false`);
      const r = j.chart.result[0], q = r.indicators.quote[0], out = [];
      (r.timestamp || []).forEach((t, k) => { if ([q.open[k], q.high[k], q.low[k], q.close[k]].every(x => x != null)) out.push({ t: t * 1000, o: q.open[k], h: q.high[k], l: q.low[k], c: q.close[k], v: q.volume[k] || 0 }); });
      return { c: out, meta: r.meta };
    } catch (e) { last = e; }
  }
  throw last;
}
async function stockCandles(sym, tf) {
  const [iv, rg] = { "1h": ["60m", "60d"], "4h": ["60m", "730d"], "1d": ["1d", "5y"], "1w": ["1wk", "10y"] }[tf];
  const { c } = await yahoo(sym, iv, rg), ms = K.TFMS[tf], out = [];
  for (const k of c) {
    const b = K.bucket(k.t, ms), L = out[out.length - 1];
    if (L && L.t === b) { L.h = Math.max(L.h, k.h); L.l = Math.min(L.l, k.l); L.c = k.c; L.v += k.v; } else out.push({ ...k, t: b });
  }
  return out.slice(-500);
}
async function topCoins() {
  try {
    const j = await getJ(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1`, CG_KEY ? { headers: { "x-cg-demo-api-key": CG_KEY } } : {});
    return { src: "CoinGecko", list: j };
  } catch (e) {
    const j = await getJ("https://api.coinpaprika.com/v1/tickers?quotes=USD", {}, 30000);
    return { src: "CoinPaprika", list: j.filter(m => m.rank > 0).sort((a, b) => a.rank - b.rank).slice(0, 150).map(m => ({ symbol: m.symbol, name: m.name, current_price: m.quotes.USD.price })) };
  }
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
  return [`🟢 <b>KÈO MỚI · ${esc(x.base)} · ${x.tf.toUpperCase()}</b>`,
    `Điểm ${Math.round(x.score)} · R:R ${P.rr1.toFixed(1)} / ${P.rr2.toFixed(1)}`,
    `Entry: <b>${fp(P.entry)}</b> (${esc(P.mode)})`,
    `SL: ${fp(P.stop)} (${pct(P.stop, P.entry)})`,
    `TP1: ${fp(P.tp1)} (${pct(P.tp1, P.entry)}) · ${esc(P.tp1Why)}`,
    `TP2: ${fp(P.tp2)} (${pct(P.tp2, P.entry)}) · ${esc(P.tp2Why)}`,
    x.why.g.length ? `Lý do: ${esc(x.why.g.join(" · "))}` : "",
    x.why.w.length ? `⚠️ Lưu ý: ${esc(x.why.w.join(", "))}` : ""].filter(Boolean).join("\n") + link();
}
function msgUpdate(j, prev) {
  const roi = `${j.roi >= 0 ? "+" : ""}${j.roi.toFixed(2)}% (${j.r >= 0 ? "+" : ""}${j.r.toFixed(2)}R)`, h = `${esc(j.base)} · ${j.tf.toUpperCase()}`;
  if (prev.status === "pending" && j.status !== "pending" && j.status !== "expired") return `🔔 <b>${h}</b> khớp lệnh chờ ở ${fp(j.entry)}`;
  if (!prev.half && j.half && j.status === "open") return `✅ <b>${h}</b> chạm TP1 ${fp(j.tp1)} · đã chốt 50%, SL dời về Entry`;
  if (j.status === "tp2") return `🏁 <b>${h}</b> chốt TP2 ${fp(j.tp2)} · ROI ${roi}`;
  if (j.status === "tp1_be") return `☑️ <b>${h}</b> chốt TP1 rồi về hoà phần còn lại · ROI ${roi}`;
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

  // 4.1 danh sách tài sản
  const { src: rankSrc, list } = await topCoins();
  const assets = list.filter(m => !K.skipCoin(m)).slice(0, 100)
    .map((m, i) => ({ kind: "crypto", base: (m.symbol || "").toUpperCase().replace(/[^A-Z0-9]/g, ""), rank: i + 1 }))
    .filter(a => a.base);
  for (const [sym, label, name, ex] of K.STOCKS) assets.push({ kind: "stock", base: label, sym, ex });

  // 4.2 nến 3 khung + chấm điểm
  const ok = [], near = [];
  await pool(assets, 6, async a => {
    const R = {};
    for (const tf of PICK_TFS) {
      try {
        const c = a.kind === "stock" ? await stockCandles(a.sym, tf) : (await cryptoCandles(a.base, tf)).c;
        if (c.length < 60) continue;
        const t = { src: a.kind === "stock" ? "st" : "ex", c, tf }; K.compute(t);
        if (t.ind) R[tf] = t;
      } catch (e) { /* bỏ qua khung thiếu dữ liệu */ }
    }
    if (!Object.keys(R).length) { errors.push(`${a.base}: không có dữ liệu`); return; }
    a.price = (R["4h"] || R["1d"] || R["1w"]).c.at(-1).c;
    PICK_TFS.forEach((tf, k) => {
      const t = R[tf]; if (!t || !t.buy || !t.buy.plan || t.buy.plan.reject) return;
      const htf = PICK_TFS[k + 1] || null, hT = htf ? K.trendOf(R[htf]) : null;
      let sc = t.buy.score; if (hT != null) { if (hT > .3) sc += 3; else if (hT < -.3) sc -= 5; }
      sc = K.clamp(sc, 0, 100);
      const P = t.buy.plan, it = { a, base: a.base, tf, P, score: sc, hT, htf, why: K.pickReasons(t.ind), rank: sc + Math.min(P.rr1, 5) * 5 };
      if (sc >= 65 && P.rr1 >= 2) ok.push(it); else if (sc >= 55 && P.rr1 >= 1.5) near.push(it);
    });
  });
  const best = arr => { const m = new Map(); for (const x of arr) { const o = m.get(x.base); if (!o || x.rank > o.rank) m.set(x.base, x); } return [...m.values()].sort((p, q) => q.rank - p.rank); };
  const picks = best(ok), pickSet = new Set(picks.map(x => x.base)), nears = best(near).filter(x => !pickSet.has(x.base)).slice(0, 12);

  // 4.3 ghi kèo mới vào nhật ký
  const isDone = st => ["tp2", "tp1_be", "sl", "expired", "manual", "cancel"].includes(st);
  const newOnes = [];
  for (const x of picks) {
    const sym = x.a.kind === "stock" ? x.a.sym : x.base + "USDT";
    if (state.journal.some(j => j.sym === sym && !isDone(j.status))) continue;
    const P = x.P;
    state.journal.push({
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), at: Date.now(), sym, base: x.base,
      src: x.a.kind === "stock" ? "st" : "bn", ex: x.a.ex, tf: x.tf, mode: P.mode, entry: P.entry, stop: P.stop, tp1: P.tp1, tp2: P.tp2,
      tp1Why: P.tp1Why, tp2Why: P.tp2Why, tpVer: 2, rr1: P.rr1, score: Math.round(x.score),
      status: P.mode === "Chờ hồi" ? "pending" : "open", fillAt: P.mode === "Chờ hồi" ? null : Date.now(), roi: 0, r: 0, by: "github"
    });
    newOnes.push(x);
  }
  if (newOnes.length > 6) outbox.push(`🟢 <b>${newOnes.length} kèo mới</b>: ` + newOnes.map(x => `${esc(x.base)} ${x.tf.toUpperCase()} (${Math.round(x.score)}đ, ${x.P.rr1.toFixed(1)}R)`).join(", ") + link());
  else newOnes.forEach(x => outbox.push(msgNewPick(x)));

  // 4.4 chấm các lệnh đang mở / chờ khớp theo nến 1H
  const active = state.journal.filter(j => !isDone(j.status));
  await pool(active, 4, async j => {
    try {
      let c;
      if (j.src === "st") c = (await yahoo(j.sym, "60m", Date.now() - j.at > 55 * 864e5 ? "730d" : "60d")).c;
      else c = (await cryptoCandles(j.base, "1h", 1000, j.at - 36e5)).c;
      const cur = c.length ? c.at(-1).c : null, prev = { status: j.status, half: !!j.half };
      Object.assign(j, K.simulate(j, c, cur), { checked: Date.now() });
      const m = msgUpdate(j, prev); if (m && (j.status !== prev.status || j.half !== prev.half)) outbox.push(m);
    } catch (e) { errors.push(`${j.base}: không chấm được lệnh (${e.message})`); }
  });

  // 4.5 lưu trạng thái
  const keep = state.journal.slice(-500);
  const pub = x => ({ base: x.base, sym: x.a.kind === "stock" ? x.a.sym : x.base + "USDT", src: x.a.kind === "stock" ? "st" : "bn", ex: x.a.ex, tf: x.tf, score: Math.round(x.score),
    rank: x.rank, entry: x.P.entry, mode: x.P.mode, stop: x.P.stop, tp1: x.P.tp1, tp2: x.P.tp2, rr1: x.P.rr1, rr2: x.P.rr2, tp1Why: x.P.tp1Why, tp2Why: x.P.tp2Why, why: x.why, htf: x.htf, hT: x.hT });
  const out = { version: 1, updatedAt: Date.now(), tookSec: Math.round((Date.now() - t0) / 1000), rankSrc, scanned: assets.length,
    picks: picks.map(pub), near: nears.map(pub), journal: keep, errors: errors.slice(0, 40) };
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
