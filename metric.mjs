// Metric (metric.xyz): danh sách token cổ phiếu đang có pool trên Ethereum · BNB Chain · Robinhood Chain (API công khai, không cần key)
// Dùng chung cho bot (arb.mjs) và Cloudflare worker (/api/metric).
const STABLE = new Set(["USDC", "USDT", "USDG", "USD1", "DAI", "FDUSD", "USDE", "PYUSD", "RLUSD", "USDS", "WETH", "ETH", "WBNB", "BNB", "WBTC", "BTCB", "CBBTC"]);
// bTSLA → TSLA · TSLAx → TSLA · TSLAon → TSLA · wTSLA → TSLA
export function stockBase(sym) {
  let s = String(sym || "").trim();
  s = s.replace(/^(w|b|r|x|s)(?=[A-Z]{1,6}(x|on|X|ON)?$)/, "");
  s = s.replace(/(x|on|\.R|\.r)$/, "");
  return s.toUpperCase();
}
const CHAIN_ID = { ethereum: 1, eth: 1, mainnet: 1, bsc: 56, bnb: 56, "bnb chain": 56, robinhood: 4663, "robinhood chain": 4663 };
const Q64 = 2n ** 64n, MAXQ = 2n ** 128n - 1n;
const q64 = v => { try { const b = BigInt(v); if (b <= 0n || b >= MAXQ) return null; return Number(b * 100000000n / Q64) / 1e8; } catch (e) { return null; } };
// giá mua / bán trực tiếp từ pool Metric (bid/ask, Q64.64: token1 trên mỗi token0)
async function metricQuotes(items, fetchFn) {
  const byChain = new Map();
  for (const it of items) { if (!it.chainId) continue; if (!byChain.has(it.chainId)) byChain.set(it.chainId, []); byChain.get(it.chainId).push(it); }
  await Promise.all([...byChain].map(async ([cid, arr]) => {
    for (let i = 0; i < arr.length; i += 100) {
      const part = arr.slice(i, i + 100);
      try {
        const r = await fetchFn(`https://api.metric.xyz/public/v1/evm/${cid}/bid_ask/batch`, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ pools: part.map(x => x.pool), depth: false }) });
        if (!r.ok) continue;
        const j = await r.json(), m = new Map((j.results || []).map(x => [String(x.poolAddress).toLowerCase(), x.quote]));
        for (const it of part) {
          const q = m.get(String(it.pool).toLowerCase()); if (!q || q.priceProviderStatus !== "healthy") continue;
          const bid = q64(q.bidAdj), ask = q64(q.askAdj);                     // token1 / token0
          if (it.pos === "token0") { it.ask = ask; it.bid = bid; }             // cổ phiếu là token0: mua theo ask
          else { it.ask = bid ? 1 / bid : null; it.bid = ask ? 1 / ask : null; }   // cổ phiếu là token1: đảo giá
          it.qAt = (q.serverTs || 0) * 1000;
        }
      } catch (e) { }
    }
  }));
}
export async function metricStocks(fetchFn = fetch) {
  const out = [];
  let offset = 0;
  for (let page = 0; page < 10; page++) {
    const u = `https://api.metric.xyz/public/v1/evm/metadata?count=500&offset=${offset}&include24h=true&minTvlFiat=100`;
    const r = await fetchFn(u, { headers: { "Accept": "application/json" } });
    if (!r.ok) throw new Error(`Metric HTTP ${r.status}`);
    const j = await r.json();
    for (const p of j.data || []) {
      const t0 = p.token0 || {}, t1 = p.token1 || {};
      const s0 = String(t0.symbol || "").toUpperCase(), s1 = String(t1.symbol || "").toUpperCase();
      let stock, k;
      if (STABLE.has(s1) && !STABLE.has(s0)) { stock = t0; k = "token0"; } else if (STABLE.has(s0) && !STABLE.has(s1)) { stock = t1; k = "token1"; } else continue;
      const tier = (p.classificationSummary && p.classificationSummary.tierQualification) || "unclassified";
      if (tier === "black") continue;
      if (p.priceProviderStatus && p.priceProviderStatus !== "healthy") continue;
      const price = parseFloat(stock.fiatPrice || 0); if (!(price > 0)) continue;
      const liq = parseFloat((p.analytics24h && p.analytics24h[k] && p.analytics24h[k].liquidityFiat) || p.tvlFiat || 0);
      out.push({ base: stockBase(stock.symbol), sym: stock.symbol, chain: p.chain, chainId: p.chainId || CHAIN_ID[String(p.chain || "").toLowerCase()] || null,
        pair: p.pair, pool: p.poolAddress, pos: k, ref: price, liq: Math.round(liq), tvl: Math.round(p.tvlFiat || 0), tier });
    }
    if (j.nextOffset == null) break; offset = j.nextOffset;
  }
  await metricQuotes(out, fetchFn);
  // chỉ giữ pool có báo giá trực tiếp (ask) khoẻ; price = giá MUA thật trên Metric
  return out.filter(x => x.ask > 0).map(x => ({ ...x, price: x.ask }));
}
// chọn pool tốt nhất cho 1 mã: giá lệch oracle ≤ 10%, thanh khoản lớn nhất
export function matchMetric(list, sym, oracle, minLiq = 0) {
  const c = list.filter(x => x.base === String(sym).toUpperCase() && x.liq >= minLiq && (!(oracle > 0) || Math.abs(x.price / oracle - 1) < .1));
  return c.sort((a, b) => b.liq - a.liq)[0] || null;
}
