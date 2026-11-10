// Nguồn mua chân spot cho chiến lược delta-neutral: Binance (bStocks: TSLAB/USDT…) và Backpack (cổ phiếu token hoá trên Solana)
// Trả về danh sách { venue, sym, key, ask, bid, liq, live } để ghép với mã perp trên trade.xyz
const alnum = s => String(s || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
const QUOTES = ["USDT", "USDC", "FDUSD", "USD1"];
// khớp tên: chứa mã, thêm tối đa 4 ký tự (TSLAB, TSLAX, bTSLA…) + giá lệch ≤ 10% so với giá gốc
export function nameMatch(key, S) { const i = key.indexOf(S); return i >= 0 && key.length - S.length <= 4; }

export async function binanceStocks(fetchFn = fetch) {
  const hosts = ["https://data-api.binance.vision", "https://api.binance.com"];
  let arr = null;
  for (const h of hosts) { try { const r = await fetchFn(h + "/api/v3/ticker/bookTicker"); if (r.ok) { arr = await r.json(); break; } } catch (e) { } }
  if (!Array.isArray(arr)) throw new Error("Binance không phản hồi");
  const out = [];
  for (const t of arr) {
    const q = QUOTES.find(x => t.symbol.endsWith(x)); if (!q) continue;
    const base = t.symbol.slice(0, -q.length);
    if (!/^[A-Z0-9]{2,8}B$/.test(base)) continue;                         // bStocks: tên kết thúc bằng B (TSLAB, NVDAB, MUB…)
    const ask = parseFloat(t.askPrice), bid = parseFloat(t.bidPrice);
    if (!(ask > 0 && bid > 0)) continue;
    out.push({ venue: "Binance", sym: `${base}/${q}`, key: base, ask, bid, liq: Math.round(ask * parseFloat(t.askQty || 0)), live: true });
  }
  return out;
}

// Backpack: lấy danh sách thị trường spot + giá gần nhất, ghép tên/giá với các mã cần, rồi lấy sổ lệnh để có giá mua (ask) thật
export async function backpackStocks(wanted, fetchFn = fetch) {   // wanted: [{ sym, oracle }]
  const B = "https://api.backpack.exchange/api/v1";
  const [mk, tk] = await Promise.all([fetchFn(B + "/markets").then(r => r.ok ? r.json() : null), fetchFn(B + "/tickers").then(r => r.ok ? r.json() : null)]);
  if (!Array.isArray(mk)) throw new Error("Backpack không phản hồi");
  const last = new Map((Array.isArray(tk) ? tk : []).map(t => [t.symbol, parseFloat(t.lastPrice)]));
  const cands = [];
  for (const w of wanted) {
    const S = alnum(w.sym);
    for (const m of mk) {
      if (m.marketType && String(m.marketType).toUpperCase() !== "SPOT") continue;
      if (!QUOTES.includes(String(m.quoteSymbol || "").toUpperCase())) continue;
      const key = alnum(m.baseSymbol); if (!nameMatch(key, S)) continue;
      const lp = last.get(m.symbol); if (!(lp > 0) || Math.abs(lp / w.oracle - 1) > .1) continue;
      cands.push({ w, m, key });
    }
  }
  const out = [];
  await Promise.all(cands.slice(0, 60).map(async ({ w, m, key }) => {
    try {
      const d = await fetchFn(`${B}/depth?symbol=${encodeURIComponent(m.symbol)}`).then(r => r.json());
      const asks = (d.asks || []).map(x => [parseFloat(x[0]), parseFloat(x[1])]).filter(x => x[0] > 0).sort((a, b) => a[0] - b[0]);
      const bids = (d.bids || []).map(x => [parseFloat(x[0]), parseFloat(x[1])]).filter(x => x[0] > 0).sort((a, b) => b[0] - a[0]);
      if (!asks.length) return;
      const liq = asks.filter(a => a[0] <= asks[0][0] * 1.01).reduce((s, a) => s + a[0] * a[1], 0);   // thanh khoản trong 1% đầu sổ
      out.push({ venue: "Backpack", sym: m.symbol.replace("_", "/"), key, ask: asks[0][0], bid: bids.length ? bids[0][0] : null, liq: Math.round(liq), live: true });
    } catch (e) { }
  }));
  return out;
}
