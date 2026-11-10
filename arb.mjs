// Delta-neutral: short perp cổ phiếu trên trade.xyz (HIP-3 "xyz" trên Hyperliquid) khi đang premium,
// mua token cổ phiếu tương ứng trên Metric (giá neo theo oracle Chainlink ≈ giá thật).
// Chỉ đọc dữ liệu công khai, KHÔNG đặt lệnh. Ghi vào state.arb và báo Telegram khi có cơ hội mới.
const HL = "https://api.hyperliquid.xyz/info";
const DEX = process.env.ARB_DEX || "xyz";
const MIN_PREM = parseFloat(process.env.ARB_MIN_PREMIUM || "0.5");     // % premium tối thiểu để báo
const MIN_VOL = parseFloat(process.env.ARB_MIN_VOLUME || "50000");      // volume 24h tối thiểu (USD)
const FEE_RT = parseFloat(process.env.ARB_FEES_PCT || "0.3");           // ước tính tổng phí vào + ra cả 2 chân (%)
const MIN_LIQ = parseFloat(process.env.ARB_MIN_METRIC_LIQ || "2000");   // thanh khoản token cổ phiếu tối thiểu trong pool Metric (USD)
import { metricStocks, matchMetric, metricDebug } from "./metric.mjs";
import { binanceStocks, backpackStocks, nameMatch } from "./venues.mjs";

async function info(body) {
  const r = await fetch(HL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json();
}

const VENUES = (process.env.ARB_VENUES || "metric,binance,backpack").toLowerCase().split(",").map(x => x.trim());

// tên khác nhau giữa perp và spot (vàng: GOLD ↔ XAUt / PAXG …)
const ALIAS = { GOLD: ["GOLD", "XAUT", "XAUT0", "PAXG", "XAU"], XAU: ["XAUT", "XAUT0", "PAXG", "GOLD"], SILVER: ["SILVER", "XAG", "KAG"] };
export async function arbScan() {
  // perp trên Hyperliquid: sàn chính (crypto) + mọi sàn HIP-3 (trade.xyz cổ phiếu, vàng…)
  let dexes = [""];
  try { const d = await info({ type: "perpDexs" }); if (Array.isArray(d)) dexes = ["", ...d.slice(1).filter(x => x && x.name).map(x => x.name)]; } catch (e) { dexes = ["", DEX]; }
  const metas = await Promise.all(dexes.map(dx => info(dx ? { type: "metaAndAssetCtxs", dex: dx } : { type: "metaAndAssetCtxs" }).then(r => [dx, r]).catch(() => null)));
  if (!metas.some(Boolean)) throw new Error("Hyperliquid không phản hồi");
  const base = [];
  for (const m of metas) {
    if (!m) continue; const [dx, [meta, ctxs]] = m;
    (meta.universe || []).forEach((u, i) => {
      const c = ctxs[i] || {}; if (u.isDelisted) return;
      let sym = String(u.name).split(":").pop(), mult = 1;
      if (!dx && /^k[A-Z]/.test(sym)) { sym = sym.slice(1); mult = 1000; }        // kPEPE = 1000 PEPE
      const mark = parseFloat(c.markPx || 0) / mult, oracle = parseFloat(c.oraclePx || 0) / mult;
      if (mark > 0 && oracle > 0) base.push({ u, c, mark, oracle, sym, dex: dx || "hl", mult });
    });
  }
  const safe = (name, p) => p.catch(e => { console.log(`${name} lỗi: ${e.message}`); return null; });
  const [mlist, bnList, bpList] = await Promise.all([
    VENUES.includes("metric") ? safe("Metric", metricStocks()) : null,
    VENUES.includes("binance") ? safe("Binance", binanceStocks()) : null,
    VENUES.includes("backpack") ? safe("Backpack", backpackStocks(base.filter(x => x.dex !== "hl").map(x => ({ sym: x.sym, oracle: x.oracle })))) : null,
  ]);
  const near = (list, S, oracle) => (list || []).filter(x => nameMatch(x.key, S) && Math.abs(x.ask / oracle - 1) < .1).sort((a, b) => a.ask - b.ask)[0] || null;
  const rows = [];
  for (const { u, c, mark, oracle, sym, dex, mult } of base) {
    const S = sym.toUpperCase().replace(/[^A-Z0-9]/g, ""), V = [];
    const names = ALIAS[S] || [S];
    const mt = mlist ? names.map(n => matchMetric(mlist, n, oracle, MIN_LIQ)).filter(Boolean).sort((a, b) => (b.live - a.live) || a.price - b.price)[0] || null : null;
    if (mt) V.push({ venue: "Metric", sym: mt.sym, chain: mt.chain, ask: mt.price, bid: mt.bid || null, liq: mt.liq, live: mt.live });
    const bn = names.map(n => near(bnList, n, oracle)).filter(Boolean).sort((a, b) => a.ask - b.ask)[0]; if (bn) V.push(bn);
    const bp = names.map(n => near(bpList, n, oracle)).filter(Boolean).sort((a, b) => a.ask - b.ask)[0]; if (bp) V.push(bp);
    if (!V.length) continue;                                                                    // không nơi nào bán spot mã này → bỏ
    V.sort((a, b) => (b.live - a.live) || a.ask - b.ask);
    const best = V[0];                                                                           // nơi mua rẻ nhất (ưu tiên giá trực tiếp)
    const prem = (mark / best.ask - 1) * 100, fund = parseFloat(c.funding || 0) * 8760 * 100;
    const vol = parseFloat(c.dayNtlVlm || 0), oi = parseFloat(c.openInterest || 0) * mark;
    rows.push({ coin: u.name, sym, dex, mult, mark, oracle, prem: +prem.toFixed(3), premOracle: +((mark / oracle - 1) * 100).toFixed(3), fund: +fund.toFixed(1),
      best, venues: V, metric: mt ? { chain: mt.chain, sym: mt.sym, price: mt.price, bid: mt.bid || null, live: mt.live, liq: mt.liq, tier: mt.tier } : null,
      vol: Math.round(vol), oi: Math.round(oi), maxLev: u.maxLeverage,
      edge7: +(prem - FEE_RT + fund / 365 * 7).toFixed(2) });
  }
  rows.sort((a, b) => b.prem - a.prem);
  return { at: Date.now(), dex: DEX, minPrem: MIN_PREM, fees: FEE_RT, venues: VENUES,
    metricOk: !!mlist, binanceOk: !!bnList, backpackOk: !!bpList, anyOk: !!(mlist || bnList || bpList),
    metricCount: mlist ? mlist.length : 0, metricDebug, binanceCount: bnList ? bnList.length : 0, backpackCount: bpList ? bpList.length : 0,
    metricSyms: mlist ? [...new Set(mlist.map(x => `${x.sym}@${x.chain}${x.live ? "" : "*"}`))].slice(0, 200) : [],
    binanceSyms: bnList ? bnList.map(x => x.sym).slice(0, 200) : [], backpackSyms: bpList ? bpList.map(x => x.sym) : [], rows };
}

export async function arbRun({ state, outbox, errors, esc, link }) {
  let A;
  try { A = await arbScan(); } catch (e) { errors.push(`Delta-neutral: không đọc được trade.xyz (${e.message})`); return state.arb || null; }
  const seen = state.arbAlert || {}, now = Date.now(), hits = [];
  for (const r of A.rows) {
    if (!A.anyOk || !r.best || !r.best.live || r.prem < MIN_PREM || r.fund < 0 || r.vol < MIN_VOL) continue;   // chỉ báo khi chắc chắn có trên Metric          // chỉ báo khi short có lợi: premium dương, funding không âm
    const s = seen[r.coin];
    if (s && now - s.at < 6 * 36e5 && r.prem < s.prem + .5) continue;           // đã báo trong 6 giờ, trừ khi premium tăng thêm ≥ 0.5%
    seen[r.coin] = { at: now, prem: r.prem }; hits.push(r);
  }
  for (const k of Object.keys(seen)) if (now - seen[k].at > 3 * 864e5) delete seen[k];
  state.arbAlert = seen;
  if (hits.length) outbox.push(`💱 <b>Delta-neutral perp × spot</b>\n` + hits.slice(0, 8).map(r =>
    `• <b>${esc(r.sym)}</b>: short perp ${esc(r.coin)}${r.dex === "hl" ? "" : ` (${esc(r.dex)})`} ${+r.mark.toPrecision(6)} · mua <b>${esc(r.best.sym)}</b> trên ${esc(r.best.venue)}${r.best.chain ? ` (${esc(r.best.chain)})` : ""} giá ask ${+r.best.ask.toPrecision(6)} → chênh <b>+${r.prem}%</b> · funding ${r.fund >= 0 ? "+" : ""}${r.fund}%/năm (short nhận) · ước tính 7 ngày ${r.edge7 >= 0 ? "+" : ""}${r.edge7}%`
  ).join("\n") + `\n→ Short perp trên Hyperliquid / trade.xyz, mua spot ở nơi ghi kèm (Metric / Binance / Backpack). Kiểm tra lại giá trên sàn trước khi vào.` + link());
  return A;
}
