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
      out.push({ base: stockBase(stock.symbol), sym: stock.symbol, chain: p.chain, pair: p.pair, pool: p.poolAddress, price, liq: Math.round(liq), tvl: Math.round(p.tvlFiat || 0), tier });
    }
    if (j.nextOffset == null) break; offset = j.nextOffset;
  }
  return out;
}
// chọn pool tốt nhất cho 1 mã: giá lệch oracle ≤ 10%, thanh khoản lớn nhất
export function matchMetric(list, sym, oracle, minLiq = 0) {
  const c = list.filter(x => x.base === String(sym).toUpperCase() && x.liq >= minLiq && (!(oracle > 0) || Math.abs(x.price / oracle - 1) < .1));
  return c.sort((a, b) => b.liq - a.liq)[0] || null;
}
