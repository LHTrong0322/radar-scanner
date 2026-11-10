// Crypto RSI Radar · Cloudflare Pages (advanced mode)
// Cổng dữ liệu nhiều nguồn dự phòng. Mọi đường dẫn khác trả file tĩnh.
//   /api/candles?s=BTC&tf=4h&limit=500  → nến crypto: Bybit → OKX → MEXC → KuCoin → Gate → Coinbase
//   /api/rank                           → top vốn hoá: CoinGecko → CoinMarketCap* → CryptoRank* → CoinPaprika
//   /api/stock?s=COIN&i=60m&r=730d      → cổ phiếu (định dạng Yahoo): Yahoo → Twelve Data* → Stooq (ngày/tuần)
//   /api/fng                            → Bitcoin Fear & Greed: alternative.me → CoinMarketCap*
//   /api/btcnet                         → hashrate + phần thưởng/ngày: mempool.space → blockchain.info
//   /api/inflation                      → lạm phát năm BTC, ETH, SOL, ZEC, NEAR từ dữ liệu on-chain
//   /api/state                          → nhật ký đám mây do GitHub Actions ghi (biến môi trường STATE_URL)
//   /api/sources                        → các khoá API đang được cấu hình
// (*) cần biến môi trường: CMC_API_KEY, CRYPTORANK_API_KEY, TWELVEDATA_KEY; tuỳ chọn COINGECKO_KEY.

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";
const HDR = { "content-type": "application/json; charset=utf-8", "access-control-allow-origin": "*" };
const J = (obj, status = 200, ttl = 0) => new Response(JSON.stringify(obj), {
  status, headers: { ...HDR, "cache-control": ttl ? `public, max-age=${ttl}` : "no-store" }
});

async function getJ(url, opt = {}, ms = 9000) {
  const ac = new AbortController(), t = setTimeout(() => ac.abort(), ms);
  try {
    const r = await fetch(url, { ...opt, signal: ac.signal, headers: { "User-Agent": UA, "Accept": "application/json", ...(opt.headers || {}) } });
    if (!r.ok) throw new Error(`${new URL(url).host} HTTP ${r.status}`);
    return await r.json();
  } finally { clearTimeout(t); }
}
async function getText(url, ms = 9000) {
  const ac = new AbortController(), t = setTimeout(() => ac.abort(), ms);
  try {
    const r = await fetch(url, { signal: ac.signal, headers: { "User-Agent": UA } });
    if (!r.ok) throw new Error(`${new URL(url).host} HTTP ${r.status}`);
    return await r.text();
  } finally { clearTimeout(t); }
}
async function withCache(request, ctx, ttl, make) {
  const cache = caches.default, key = new Request(new URL(request.url).toString(), { method: "GET" });
  const hit = await cache.match(key);
  if (hit) return hit;
  const res = await make();
  if (res.status === 200) {
    res.headers.set("cache-control", `public, max-age=${ttl}`);
    ctx.waitUntil(cache.put(key, res.clone()));
  }
  return res;
}
async function firstOk(list, fn) {
  const errors = [];
  for (const [name, f] of list) {
    try { const v = await fn(f); if (v) return { src: name, v, errors }; }
    catch (e) { errors.push(`${name}: ${e.message || e}`); }
  }
  return { src: null, v: null, errors };
}

/* ---------- nến crypto ---------- */
const num = x => +x;
const CANDLES = [
  ["bybit", async (b, tf, n) => {
    const iv = { "15m": "15", "1h": "60", "4h": "240", "1d": "D", "1w": "W" }[tf];
    const j = await getJ(`https://api.bybit.com/v5/market/kline?category=spot&symbol=${b}USDT&interval=${iv}&limit=${Math.min(n, 1000)}`);
    if (j.retCode !== 0) throw new Error(j.retMsg);
    return j.result.list.map(a => ({ t: num(a[0]), o: num(a[1]), h: num(a[2]), l: num(a[3]), c: num(a[4]), v: num(a[5]) })).reverse();
  }],
  ["okx", async (b, tf) => {
    const bar = { "15m": "15m", "1h": "1H", "4h": "4H", "1d": "1Dutc", "1w": "1Wutc" }[tf];
    const j = await getJ(`https://www.okx.com/api/v5/market/candles?instId=${b}-USDT&bar=${bar}&limit=300`);
    if (j.code !== "0") throw new Error(j.msg);
    return j.data.map(a => ({ t: num(a[0]), o: num(a[1]), h: num(a[2]), l: num(a[3]), c: num(a[4]), v: num(a[5]) })).reverse();
  }],
  ["mexc", async (b, tf, n) => {
    const iv = { "15m": "15m", "1h": "60m", "4h": "4h", "1d": "1d", "1w": "1W" }[tf];
    const j = await getJ(`https://api.mexc.com/api/v3/klines?symbol=${b}USDT&interval=${iv}&limit=${Math.min(n, 1000)}`);
    return j.map(a => ({ t: num(a[0]), o: num(a[1]), h: num(a[2]), l: num(a[3]), c: num(a[4]), v: num(a[5]) }));
  }],
  ["kucoin", async (b, tf) => {
    const ty = { "15m": "15min", "1h": "1hour", "4h": "4hour", "1d": "1day", "1w": "1week" }[tf];
    const j = await getJ(`https://api.kucoin.com/api/v1/market/candles?type=${ty}&symbol=${b}-USDT`);
    if (j.code !== "200000") throw new Error(j.msg);
    return j.data.map(a => ({ t: num(a[0]) * 1000, o: num(a[1]), c: num(a[2]), h: num(a[3]), l: num(a[4]), v: num(a[5]) })).reverse();
  }],
  ["gate", async (b, tf, n) => {
    const iv = { "15m": "15m", "1h": "1h", "4h": "4h", "1d": "1d", "1w": "7d" }[tf];
    const j = await getJ(`https://api.gateio.ws/api/v4/spot/candlesticks?currency_pair=${b}_USDT&interval=${iv}&limit=${Math.min(n, 1000)}`);
    return j.map(a => ({ t: num(a[0]) * 1000, o: num(a[5]), h: num(a[3]), l: num(a[4]), c: num(a[2]), v: num(a[6]) }));
  }],
  ["coinbase", async (b, tf) => {
    const g = { "15m": 900, "1h": 3600, "1d": 86400 }[tf];
    if (!g) throw new Error("không hỗ trợ khung này");
    const j = await getJ(`https://api.exchange.coinbase.com/products/${b}-USD/candles?granularity=${g}`);
    return j.map(a => ({ t: a[0] * 1000, l: num(a[1]), h: num(a[2]), o: num(a[3]), c: num(a[4]), v: num(a[5]) })).reverse();
  }],
];
async function candles(url) {
  const b = (url.searchParams.get("s") || "").toUpperCase(), tf = url.searchParams.get("tf") || "4h";
  const n = Math.max(50, Math.min(1000, +url.searchParams.get("limit") || 500));
  if (!/^[A-Z0-9]{1,15}$/.test(b) || !["15m", "1h", "4h", "1d", "1w"].includes(tf)) return J({ error: "Tham số không hợp lệ" }, 400);
  const r = await firstOk(CANDLES, async f => {
    const c = (await f(b, tf, n)).filter(k => [k.o, k.h, k.l, k.c].every(Number.isFinite));
    return c.length >= 30 ? c.slice(-n) : null;
  });
  return r.v ? J({ src: r.src, s: b, tf, c: r.v }) : J({ error: "Không nguồn nào có dữ liệu", tried: r.errors }, 502);
}

/* ---------- xếp hạng vốn hoá ---------- */
const RANK = env => [
  ["CoinGecko", async () => {
    const k = env.COINGECKO_KEY ? `&x_cg_demo_api_key=${env.COINGECKO_KEY}` : "";
    const j = await getJ(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1${k}`);
    return j.map(m => ({ id: m.id, symbol: m.symbol, name: m.name, price: m.current_price, mcap: m.market_cap, vol24: m.total_volume, chg24: m.price_change_percentage_24h }));
  }],
  ["CoinMarketCap", async () => {
    if (!env.CMC_API_KEY) throw new Error("chưa có CMC_API_KEY");
    const j = await getJ("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=200&convert=USD", { headers: { "X-CMC_PRO_API_KEY": env.CMC_API_KEY } });
    return j.data.map(m => ({ id: null, symbol: m.symbol, name: m.name, price: m.quote.USD.price, mcap: m.quote.USD.market_cap, vol24: m.quote.USD.volume_24h, chg24: m.quote.USD.percent_change_24h }));
  }],
  ["CryptoRank", async () => {
    if (!env.CRYPTORANK_API_KEY) throw new Error("chưa có CRYPTORANK_API_KEY");
    const j = await getJ("https://api.cryptorank.io/v2/currencies?limit=200", { headers: { "X-Api-Key": env.CRYPTORANK_API_KEY } });
    return (j.data || []).map(m => {
      const u = (m.values && m.values.USD) || m;
      const chg = u.percentChange24h ?? (u.percentChange && (u.percentChange.h24 ?? u.percentChange["24h"])) ?? 0;
      return { id: null, symbol: m.symbol, name: m.name, price: +(u.price ?? 0), mcap: +(u.marketCap ?? 0), vol24: +(u.volume24h ?? 0), chg24: +chg };
    }).filter(m => m.mcap > 0).sort((a, b) => b.mcap - a.mcap);
  }],
  ["CoinPaprika", async () => {
    const j = await getJ("https://api.coinpaprika.com/v1/tickers?quotes=USD", {}, 15000);
    return j.filter(m => m.rank > 0 && m.quotes && m.quotes.USD).sort((a, b) => a.rank - b.rank).slice(0, 200)
      .map(m => ({ id: null, symbol: m.symbol, name: m.name, price: m.quotes.USD.price, mcap: m.quotes.USD.market_cap, vol24: m.quotes.USD.volume_24h, chg24: m.quotes.USD.percent_change_24h }));
  }],
];
async function rank(env) {
  const r = await firstOk(RANK(env), async f => { const d = await f(); return d && d.length >= 50 ? d : null; });
  return r.v ? J({ source: r.src, data: r.v }) : J({ error: "Không nguồn xếp hạng nào phản hồi", tried: r.errors }, 502);
}

/* ---------- cổ phiếu ---------- */
const yahooShape = (rows, meta) => ({
  chart: { result: [{
    meta, timestamp: rows.map(r => r.t),
    indicators: { quote: [{ open: rows.map(r => r.o), high: rows.map(r => r.h), low: rows.map(r => r.l), close: rows.map(r => r.c), volume: rows.map(r => r.v) }] }
  }] }
});
const quoteMeta = rows => {
  const L = rows[rows.length - 1], P = rows[rows.length - 2];
  return { regularMarketPrice: L.c, chartPreviousClose: P ? P.c : L.o, regularMarketTime: L.t, regularMarketVolume: L.v };
};
const STOCK = env => [
  ["Yahoo", async (s, i, r) => {
    let last;
    for (const host of ["query1", "query2"]) {
      try {
        const j = await getJ(`https://${host}.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(s)}?interval=${i}&range=${r}&includePrePost=false`);
        if (j && j.chart && j.chart.result && j.chart.result[0] && (j.chart.result[0].timestamp || r === "1d")) return j;
      } catch (e) { last = e; }
    }
    throw last || new Error("không có dữ liệu");
  }],
  ["TwelveData", async (s, i, r) => {
    if (!env.TWELVEDATA_KEY) throw new Error("chưa có TWELVEDATA_KEY");
    const iv = { "15m": "15min", "60m": "1h", "1h": "1h", "1d": "1day", "1wk": "1week" }[i];
    if (!iv) throw new Error("khung không hỗ trợ");
    const single = r === "1d";
    const j = await getJ(`https://api.twelvedata.com/time_series?symbol=${encodeURIComponent(s)}&interval=${single ? "1day" : iv}&outputsize=${single ? 2 : 5000}&timezone=UTC&apikey=${env.TWELVEDATA_KEY}`);
    if (j.status === "error" || !j.values) throw new Error(j.message || "lỗi");
    const rows = j.values.map(v => ({ t: Math.floor(Date.parse(v.datetime.replace(" ", "T") + "Z") / 1000), o: +v.open, h: +v.high, l: +v.low, c: +v.close, v: +(v.volume || 0) })).reverse();
    return yahooShape(single ? rows.slice(-1) : rows, quoteMeta(rows));
  }],
  ["Stooq", async (s, i, r) => {
    const per = { "1d": "d", "1wk": "w" }[i];
    if (!per) throw new Error("chỉ có nến ngày/tuần");
    const sym = s.toLowerCase().replace(/[^a-z0-9.-]/g, "") + ".us";
    const csv = await getText(`https://stooq.com/q/d/l/?s=${sym}&i=${per}`);
    const rows = csv.trim().split(/\r?\n/).slice(1).map(l => l.split(",")).filter(a => a.length >= 5 && a[4] !== "")
      .map(a => ({ t: Math.floor(Date.parse(a[0] + "T20:00:00Z") / 1000), o: +a[1], h: +a[2], l: +a[3], c: +a[4], v: +(a[5] || 0) }));
    if (rows.length < 2) throw new Error("không có dữ liệu");
    return yahooShape(r === "1d" ? rows.slice(-1) : rows.slice(-600), quoteMeta(rows));
  }],
];
async function stock(url, env) {
  const s = (url.searchParams.get("s") || "").toUpperCase(), i = url.searchParams.get("i") || "1d", r = url.searchParams.get("r") || "1y";
  if (!/^[A-Z0-9.^=-]{1,12}$/.test(s) || !/^(15m|60m|1h|1d|1wk)$/.test(i) || !/^(\d{1,3}d|1mo|3mo|6mo|1y|2y|5y|10y|max)$/.test(r))
    return J({ error: "Tham số không hợp lệ" }, 400);
  const res = await firstOk(STOCK(env), f => f(s, i, r));
  if (!res.v) return J({ error: "Không nguồn cổ phiếu nào phản hồi", tried: res.errors }, 502);
  res.v.source = res.src;
  return J(res.v);
}

/* ---------- Fear & Greed ---------- */
async function fng(env) {
  const list = [
    ["alternative.me", async () => (await getJ("https://api.alternative.me/fng/?limit=31")).data],
    ["CoinMarketCap", async () => {
      if (!env.CMC_API_KEY) throw new Error("chưa có CMC_API_KEY");
      const j = await getJ("https://pro-api.coinmarketcap.com/v3/fear-and-greed/historical?limit=31", { headers: { "X-CMC_PRO_API_KEY": env.CMC_API_KEY } });
      return (j.data || []).map(x => ({ value: String(x.value), value_classification: x.value_classification, timestamp: String(x.timestamp) }));
    }],
  ];
  const r = await firstOk(list, async f => { const d = await f(); return d && d.length ? d : null; });
  return r.v ? J({ source: r.src, data: r.v }) : J({ error: "Không lấy được Fear & Greed", tried: r.errors }, 502);
}

/* ---------- mạng Bitcoin (chi phí đào) ---------- */
async function btcnet() {
  const list = [
    ["mempool.space", async () => {
      const [a, b] = await Promise.all([getJ("https://mempool.space/api/v1/mining/hashrate/3d"), getJ("https://mempool.space/api/v1/mining/reward-stats/144")]);
      return { hashrate: +a.currentHashrate, rewardPerDay: +b.totalReward / 1e8 };
    }],
    ["blockchain.info", async () => {
      const gh = +(await getText("https://blockchain.info/q/hashrate"));
      if (!gh) throw new Error("không có hashrate");
      return { hashrate: gh * 1e9, rewardPerDay: null };
    }],
  ];
  const r = await firstOk(list, async f => { const d = await f(); return d && d.hashrate > 0 ? d : null; });
  return r.v ? J({ source: r.src, ...r.v }) : J({ error: "Không lấy được dữ liệu mạng Bitcoin", tried: r.errors }, 502);
}

/* ---------- Lạm phát token hằng năm ---------- */
const postJ = (url, body) => getJ(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
async function rpc(urls, method, params, id = 1) {
  let last;
  for (const u of urls) {
    try { const j = await postJ(u, { jsonrpc: "2.0", id, method, params }); if (j.result !== undefined) return j.result; last = new Error((j.error && (j.error.message || j.error.name)) || "lỗi RPC"); }
    catch (e) { last = e; }
  }
  throw last;
}
const ETH_RPC = ["https://ethereum-rpc.publicnode.com", "https://eth.llamarpc.com", "https://cloudflare-eth.com", "https://rpc.ankr.com/eth"];
const SOL_RPC = ["https://api.mainnet-beta.solana.com", "https://solana-rpc.publicnode.com"];
const NEAR_RPC = ["https://rpc.mainnet.near.org", "https://free.rpc.fastnear.com", "https://near.lava.build"];
const YEAR = 365 * 86400;

async function inflation(env) {
  const out = [], errors = {}, sup = {};
  try {
    const k = env.COINGECKO_KEY ? `&x_cg_demo_api_key=${env.COINGECKO_KEY}` : "";
    for (const m of await getJ(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,zcash,near${k}`))
      sup[m.symbol.toUpperCase()] = +m.circulating_supply;
  } catch (e) { errors.supply = String(e.message || e); }
  const run = async (sym, fn) => { try { const r = await fn(); if (r) out.push({ sym, ...r }); } catch (e) { errors[sym] = String(e.message || e); } };

  await Promise.all([
    run("BTC", async () => {
      let perDay = 144 * 3.125, src = "lịch halving";
      try { const b = await getJ("https://mempool.space/api/v1/mining/reward-stats/144"); perDay = (+b.totalReward - +b.totalFee) / 1e8; src = "mempool.space"; } catch (e) {}
      let s = sup.BTC; if (!s) s = +(await getText("https://blockchain.info/q/totalbc")) / 1e8;
      if (!s) throw new Error("không có nguồn cung");
      return { rate: perDay * 365 / s * 100, issued: perDay * 365, burned: 0, supply: s, src, method: "Phần thưởng block mới (không tính phí) × 365 ÷ nguồn cung" };
    }),
    run("ETH", async () => {
      const [fh, blk] = await Promise.all([rpc(ETH_RPC, "eth_feeHistory", ["0x400", "latest", []]), rpc(ETH_RPC, "eth_getBlockByNumber", ["latest", false])]);
      const gasLimit = parseInt(blk.gasLimit, 16), n = fh.gasUsedRatio.length;
      let wei = 0; for (let i = 0; i < n; i++) wei += parseInt(fh.baseFeePerGas[i], 16) * fh.gasUsedRatio[i] * gasLimit;
      const burnYear = wei / n * 7200 * 365 / 1e18;
      let staked = 34e6, sSrc = "ước tính";
      try { const e = await getJ("https://beaconcha.in/api/v1/epoch/latest"); const d = e.data || {}; const g = +(d.eligibleether || d.totalvalidatorbalance); if (g > 1e15) { staked = g / 1e9; sSrc = "beaconcha.in"; } } catch (e) {}
      const issued = 166.3 * Math.sqrt(staked), s = sup.ETH || 120.7e6;
      return { rate: (issued - burnYear) / s * 100, issued, burned: burnYear, supply: s, staked, src: `RPC Ethereum + ${sSrc}`, method: `Phát hành staking (${(staked / 1e6).toFixed(1)}M ETH stake) − phí đốt EIP-1559 (trung bình 1.024 block gần nhất)` };
    }),
    run("SOL", async () => {
      const r = await rpc(SOL_RPC, "getInflationRate", []);
      const s = sup.SOL;
      return { rate: r.total * 100, issued: s ? r.total * s : null, burned: null, supply: s || null, src: "RPC Solana", method: `Lịch lạm phát giao thức ở epoch ${r.epoch} (validator ${(r.validator * 100).toFixed(2)}%)` };
    }),
    run("ZEC", async () => {
      try {
        const j = await getJ("https://api.blockchair.com/zcash/stats"); const d = j.data || {};
        const circ = +d.circulation / 1e8, inf = +d.inflation_24h / 1e8;
        if (circ > 0 && inf > 0) return { rate: inf * 365 / circ * 100, issued: inf * 365, burned: 0, supply: circ, src: "Blockchair", method: "ZEC phát hành 24h gần nhất × 365 ÷ nguồn cung" };
      } catch (e) {}
      const s = sup.ZEC; if (!s) throw new Error("không có nguồn cung");
      const year = 1.5625 * 1152 * 365;
      return { rate: year / s * 100, issued: year, burned: 0, supply: s, src: "giao thức + CoinGecko", method: "1.5625 ZEC/block × 1.152 block/ngày × 365 ÷ nguồn cung" };
    }),
    run("NEAR", async () => {
      try {
        const b1 = await rpc(NEAR_RPC, "block", { finality: "final" }), h = b1.header.height;
        let b0 = null;
        for (const back of [70000, 50000, 30000, 15000]) {
          for (let k = 0; k < 4 && !b0; k++) { try { b0 = await rpc(NEAR_RPC, "block", { block_id: h - back - k }); } catch (e) {} }
          if (b0) break;
        }
        if (!b0) throw new Error("không lấy được block cũ");
        const s1 = BigInt(b1.header.total_supply), s0 = BigInt(b0.header.total_supply);
        const dt = Number(BigInt(b1.header.timestamp_nanosec) - BigInt(b0.header.timestamp_nanosec)) / 1e9;
        const g = Number(s1 - s0) / Number(s0), rate = (Math.pow(1 + g, YEAR / dt) - 1) * 100, supply = Number(s1 / 10n ** 24n);
        return { rate, issued: supply * rate / 100, burned: null, supply, src: "RPC NEAR", method: `Biến động total supply on-chain trong ${(dt / 3600).toFixed(0)} giờ, quy ra năm (đã trừ phí bị đốt)` };
      } catch (e) {
        const c = await rpc(NEAR_RPC, "EXPERIMENTAL_protocol_config", { finality: "final" });
        const m = c.max_inflation_rate, rate = Array.isArray(m) ? m[0] / m[1] * 100 : +m * 100;
        return { rate, issued: null, burned: null, supply: sup.NEAR || null, src: "RPC NEAR", method: "Mức lạm phát tối đa theo cấu hình giao thức" };
      }
    }),
  ]);
  const order = ["BTC", "ETH", "SOL", "ZEC", "NEAR"];
  out.sort((a, b) => order.indexOf(a.sym) - order.indexOf(b.sym));
  return out.length ? J({ at: Date.now(), tokens: out, errors }) : J({ error: "Không lấy được dữ liệu lạm phát", errors }, 502);
}

/* ---------- nhật ký đám mây ---------- */
async function cloudState(env) {
  const u = env.STATE_URL || "";
  if (!/^https:\/\/(raw\.githubusercontent\.com|[a-z0-9-]+\.github\.io)\//i.test(u)) return J({ error: "Chưa cài STATE_URL" }, 404);
  const r = await fetch(u + (u.includes("?") ? "&" : "?") + "t=" + Math.floor(Date.now() / 60000), { headers: { "User-Agent": UA } });
  if (!r.ok) return J({ error: `GitHub HTTP ${r.status}` }, 502);
  return new Response(await r.text(), { headers: { ...HDR, "cache-control": "no-store" } });
}

// Metric (metric.xyz): token cổ phiếu có pool trên Ethereum · BNB Chain · Robinhood Chain, kèm giá mua/bán trực tiếp từ pool (cùng logic với metric.mjs của bot)
const M_CHAINS = [[1, "ethereum"], [56, "bsc"], [4663, "robinhood"]];
const M_MAJOR = new Set(["WETH", "ETH", "WBNB", "BNB", "WBTC", "BTCB", "CBBTC", "BTC"]);
const mStable = t => { const s = String(t.symbol || "").toUpperCase(); const p = parseFloat(t.fiatPrice); return /USD|DAI|USDG|PYUSD|RLUSD/.test(s) && (!(p > 0) || Math.abs(p - 1) < .03); };
const mAl = s => String(s || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
const Q64 = 2n ** 64n, MAXQ = 2n ** 128n - 1n;
const q64 = v => { try { const b = BigInt(v); if (b <= 0n || b >= MAXQ) return null; return Number(b * 100000000n / Q64) / 1e8; } catch (e) { return null; } };
async function metricList() {
  const out = []; let ok = 0;
  await Promise.all(M_CHAINS.map(async ([cid, cname]) => {
    const mine = [];
    try {
      let offset = 0;
      for (let page = 0; page < 10; page++) {
        const r = await fetch(`https://api.metric.xyz/public/v1/evm/${cid}/metadata?count=500&offset=${offset}&include24h=true&minTvlFiat=0`, { headers: { Accept: "application/json" } });
        if (!r.ok) throw new Error("HTTP " + r.status);
        const j = await r.json();
        for (const p of j.data || []) {
          const t0 = p.token0 || {}, t1 = p.token1 || {}; let st, pos;
          if (mStable(t1) && !mStable(t0) && !M_MAJOR.has(mAl(t0.symbol))) { st = t0; pos = 0; }
          else if (mStable(t0) && !mStable(t1) && !M_MAJOR.has(mAl(t1.symbol))) { st = t1; pos = 1; } else continue;
          const tier = (p.classificationSummary && p.classificationSummary.tierQualification) || "unclassified"; if (tier === "black") continue;
          const k = pos ? "token1" : "token0", liq = parseFloat((p.analytics24h && p.analytics24h[k] && p.analytics24h[k].liquidityFiat) || p.tvlFiat || 0);
          mine.push({ sym: st.symbol, key: mAl(st.symbol), chain: p.chain || cname, chainId: cid, pool: p.poolAddress, pos, ref: parseFloat(st.fiatPrice || 0), liq: Math.round(liq), tier });
        }
        if (j.nextOffset == null) break; offset = j.nextOffset;
      }
      ok++;
      for (let i = 0; i < mine.length; i += 100) {
        const part = mine.slice(i, i + 100);
        try {
          const r = await fetch(`https://api.metric.xyz/public/v1/evm/${cid}/bid_ask/batch`, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ pools: part.map(x => x.pool), depth: false }) });
          if (!r.ok) continue;
          const j = await r.json(), m = new Map((j.results || []).map(x => [String(x.poolAddress).toLowerCase(), x.quote]));
          for (const it of part) {
            const q = m.get(String(it.pool).toLowerCase()); if (!q || (q.priceProviderStatus && q.priceProviderStatus !== "healthy")) continue;
            const bid = q64(q.bidAdj), ask = q64(q.askAdj);
            if (it.pos === 0) { it.ask = ask; it.bid = bid; } else { it.ask = bid ? 1 / bid : null; it.bid = ask ? 1 / ask : null; }
          }
        } catch (e) { }
      }
      out.push(...mine);
    } catch (e) { }
  }));
  if (!ok) throw new Error("Metric không phản hồi");
  return J({ at: Date.now(), stocks: out.map(({ pool, pos, ...x }) => ({ ...x, live: x.ask > 0, price: x.ask > 0 ? x.ask : x.ref })).filter(x => x.price > 0) });
}
// Backpack: cổ phiếu token hoá (spot) · q = "TSLA:401,NVDA:180" (mã:giá gốc) → giá mua/bán từ sổ lệnh
async function backpackList(url) {
  const want = String(url.searchParams.get("q") || "").split(",").map(x => x.split(":")).filter(x => x[0] && +x[1] > 0).slice(0, 300).map(([sym, o]) => ({ S: mAl(sym), sym, oracle: +o }));
  const B = "https://api.backpack.exchange/api/v1", QU = ["USDT", "USDC", "USD1"];
  const [mk, tk] = await Promise.all([fetch(B + "/markets").then(r => r.ok ? r.json() : null), fetch(B + "/tickers").then(r => r.ok ? r.json() : null)]);
  if (!Array.isArray(mk)) throw new Error("Backpack không phản hồi");
  const last = new Map((Array.isArray(tk) ? tk : []).map(t => [t.symbol, parseFloat(t.lastPrice)]));
  const cands = [];
  for (const w of want) for (const m of mk) {
    if (m.marketType && String(m.marketType).toUpperCase() !== "SPOT") continue;
    if (!QU.includes(String(m.quoteSymbol || "").toUpperCase())) continue;
    const key = mAl(m.baseSymbol); if (!(key.includes(w.S) && key.length - w.S.length <= 4)) continue;
    const lp = last.get(m.symbol); if (!(lp > 0) || Math.abs(lp / w.oracle - 1) > .1) continue;
    cands.push({ w, m, key });
  }
  const out = [];
  await Promise.all(cands.slice(0, 60).map(async ({ w, m, key }) => {
    try {
      const d = await fetch(`${B}/depth?symbol=${encodeURIComponent(m.symbol)}`).then(r => r.json());
      const asks = (d.asks || []).map(x => [+x[0], +x[1]]).filter(x => x[0] > 0).sort((a, b) => a[0] - b[0]);
      const bids = (d.bids || []).map(x => [+x[0], +x[1]]).filter(x => x[0] > 0).sort((a, b) => b[0] - a[0]);
      if (!asks.length) return;
      const liq = asks.filter(a => a[0] <= asks[0][0] * 1.01).reduce((s, a) => s + a[0] * a[1], 0);
      out.push({ venue: "Backpack", for: w.sym, sym: m.symbol.replace("_", "/"), key, ask: asks[0][0], bid: bids.length ? bids[0][0] : null, liq: Math.round(liq), live: true });
    } catch (e) { }
  }));
  return J({ at: Date.now(), quotes: out });
}
// trade.xyz (sàn HIP-3 "xyz" trên Hyperliquid): giá perp, giá gốc (oracle), funding · dùng cho bảng delta-neutral
async function xyzMarkets(url) {
  const dex = (url.searchParams.get("dex") || "xyz").replace(/[^a-z0-9_-]/gi, "").slice(0, 20);
  const r = await fetch("https://api.hyperliquid.xyz/info", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "metaAndAssetCtxs", dex }) });
  if (!r.ok) throw new Error("Hyperliquid HTTP " + r.status);
  return J(await r.json());
}
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    try {
      switch (url.pathname) {
        case "/api/candles": return await withCache(request, ctx, 60, () => candles(url));
        case "/api/rank": return await withCache(request, ctx, 180, () => rank(env));
        case "/api/stock": return await withCache(request, ctx, url.searchParams.get("r") === "1d" ? 30 : 120, () => stock(url, env));
        case "/api/fng": return await withCache(request, ctx, 900, () => fng(env));
        case "/api/btcnet": return await withCache(request, ctx, 900, () => btcnet());
        case "/api/inflation": return await withCache(request, ctx, 1800, () => inflation(env));
        case "/api/state": return await withCache(request, ctx, 60, () => cloudState(env));
        case "/api/xyz": return await withCache(request, ctx, 30, () => xyzMarkets(url));
        case "/api/metric": return await withCache(request, ctx, 120, () => metricList());
        case "/api/backpack": return await withCache(request, ctx, 30, () => backpackList(url));
        case "/api/sources": return J({
          candles: CANDLES.map(c => c[0]),
          rank: { CoinGecko: true, CoinMarketCap: !!env.CMC_API_KEY, CryptoRank: !!env.CRYPTORANK_API_KEY, CoinPaprika: true },
          stock: { Yahoo: true, TwelveData: !!env.TWELVEDATA_KEY, Stooq: true }
        });
      }
    } catch (e) {
      return J({ error: String(e && e.message || e) }, 500);
    }
    return env.ASSETS.fetch(request);
  }
};
