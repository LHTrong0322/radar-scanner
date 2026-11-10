// Metric (metric.xyz): token cổ phiếu có pool trên Ethereum · BNB Chain · Robinhood Chain (API công khai, không cần key)
// Dùng cho bot (arb.mjs). Cloudflare worker có bản sao cùng logic (/api/metric).
const CHAINS = [[1, "ethereum"], [56, "bsc"], [4663, "robinhood"]];
const MAJOR = new Set(["WETH", "ETH", "WBNB", "BNB", "WBTC", "BTCB", "CBBTC", "BTC"]);
// coi là "đồng đô" nếu tên có USD/DAI và giá ~1$
const isStable = t => { const s = String(t.symbol || "").toUpperCase(); const p = parseFloat(t.fiatPrice); return /USD|DAI|USDG|PYUSD|RLUSD/.test(s) && (!(p > 0) || Math.abs(p - 1) < .03); };
const alnum = s => String(s || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
const Q64 = 2n ** 64n, MAXQ = 2n ** 128n - 1n;
const q64 = v => { try { const b = BigInt(v); if (b <= 0n || b >= MAXQ) return null; return Number(b * 100000000n / Q64) / 1e8; } catch (e) { return null; } };

async function quotes(cid, items, fetchFn) {
  for (let i = 0; i < items.length; i += 100) {
    const part = items.slice(i, i + 100);
    try {
      const r = await fetchFn(`https://api.metric.xyz/public/v1/evm/${cid}/bid_ask/batch`, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ pools: part.map(x => x.pool), depth: false }) });
      if (!r.ok) continue;
      const j = await r.json(), m = new Map((j.results || []).map(x => [String(x.poolAddress).toLowerCase(), x.quote]));
      for (const it of part) {
        const q = m.get(String(it.pool).toLowerCase()); if (!q || (q.priceProviderStatus && q.priceProviderStatus !== "healthy")) continue;
        const bid = q64(q.bidAdj), ask = q64(q.askAdj);                         // token1 trên mỗi token0
        if (it.pos === 0) { it.ask = ask; it.bid = bid; } else { it.ask = bid ? 1 / bid : null; it.bid = ask ? 1 / ask : null; }
      }
    } catch (e) { }
  }
}

export async function metricStocks(fetchFn = fetch) {
  const out = []; let okChains = 0;
  await Promise.all(CHAINS.map(async ([cid, cname]) => {
    const mine = [];
    try {
      let offset = 0;
      for (let page = 0; page < 10; page++) {
        const r = await fetchFn(`https://api.metric.xyz/public/v1/evm/${cid}/metadata?count=500&offset=${offset}&include24h=true&minTvlFiat=0`, { headers: { Accept: "application/json" } });
        if (!r.ok) throw new Error("HTTP " + r.status);
        const j = await r.json();
        for (const p of j.data || []) {
          const t0 = p.token0 || {}, t1 = p.token1 || {};
          let st, pos;
          if (isStable(t1) && !isStable(t0) && !MAJOR.has(alnum(t0.symbol))) { st = t0; pos = 0; }
          else if (isStable(t0) && !isStable(t1) && !MAJOR.has(alnum(t1.symbol))) { st = t1; pos = 1; }
          else continue;
          const tier = (p.classificationSummary && p.classificationSummary.tierQualification) || "unclassified";
          if (tier === "black") continue;
          const k = pos ? "token1" : "token0";
          const liq = parseFloat((p.analytics24h && p.analytics24h[k] && p.analytics24h[k].liquidityFiat) || p.tvlFiat || 0);
          mine.push({ sym: st.symbol, key: alnum(st.symbol), name: st.name || "", chain: p.chain || cname, chainId: cid, pool: p.poolAddress, pos,
            ref: parseFloat(st.fiatPrice || 0), liq: Math.round(liq), tier, health: p.priceProviderStatus || "" });
        }
        if (j.nextOffset == null) break; offset = j.nextOffset;
      }
      okChains++;
      await quotes(cid, mine, fetchFn);
      out.push(...mine);
    } catch (e) { console.log(`Metric ${cname}: ${e.message}`); }
  }));
  if (!okChains) throw new Error("không đọc được Metric");
  // price = giá MUA trực tiếp (ask) nếu có; nếu pool chưa trả báo giá thì dùng giá tham chiếu và đánh dấu live=false
  return out.map(x => ({ ...x, live: x.ask > 0, price: x.ask > 0 ? x.ask : x.ref })).filter(x => x.price > 0);
}

// khớp mã trade.xyz với token trên Metric: tên token chứa mã (bTSLA, TSLAx, TSLAon, wTSLA, TSLA.B…) + giá lệch ≤ 10% so với giá gốc
export function matchMetric(list, sym, oracle, minLiq = 0) {
  const S = alnum(sym); if (!S) return null;
  const c = list.filter(x => {
    if (x.liq < minLiq) return false;
    const k = x.key, i = k.indexOf(S);
    if (i < 0 || k.length - S.length > 4) return false;                 // phần thêm vào tối đa 4 ký tự
    if (!(oracle > 0)) return k === S;
    return Math.abs(x.price / oracle - 1) < .1;                          // chống khớp nhầm
  });
  return c.sort((a, b) => (b.live - a.live) || (b.key === S) - (a.key === S) || b.liq - a.liq)[0] || null;
}
