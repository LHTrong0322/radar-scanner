// Delta-neutral: short perp cổ phiếu trên trade.xyz (HIP-3 "xyz" trên Hyperliquid) khi đang premium,
// mua token cổ phiếu tương ứng trên Metric (giá neo theo oracle Chainlink ≈ giá thật).
// Chỉ đọc dữ liệu công khai, KHÔNG đặt lệnh. Ghi vào state.arb và báo Telegram khi có cơ hội mới.
const HL = "https://api.hyperliquid.xyz/info";
const DEX = process.env.ARB_DEX || "xyz";
const MIN_PREM = parseFloat(process.env.ARB_MIN_PREMIUM || "0.5");     // % premium tối thiểu để báo
const MIN_VOL = parseFloat(process.env.ARB_MIN_VOLUME || "50000");      // volume 24h tối thiểu (USD)
const FEE_RT = parseFloat(process.env.ARB_FEES_PCT || "0.3");           // ước tính tổng phí vào + ra cả 2 chân (%)
const MIN_LIQ = parseFloat(process.env.ARB_MIN_METRIC_LIQ || "2000");   // thanh khoản token cổ phiếu tối thiểu trong pool Metric (USD)
import { metricStocks, matchMetric } from "./metric.mjs";

async function info(body) {
  const r = await fetch(HL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json();
}

export async function arbScan() {
  const [[meta, ctxs], mlist] = await Promise.all([info({ type: "metaAndAssetCtxs", dex: DEX }), metricStocks().catch(e => { console.log("Metric lỗi: " + e.message); return null; })]);
  const rows = [];
  (meta.universe || []).forEach((u, i) => {
    const c = ctxs[i] || {}; if (u.isDelisted) return;
    const mark = parseFloat(c.markPx || 0), oracle = parseFloat(c.oraclePx || 0);
    if (!(mark > 0 && oracle > 0)) return;
    const sym = String(u.name).split(":").pop();
    const mt = mlist ? matchMetric(mlist, sym, oracle, MIN_LIQ) : null;
    if (mlist && !mt) return;                                                                   // Metric không có mã này (hoặc pool quá mỏng) → bỏ
    const ref = mt ? mt.price : oracle;                                                         // chênh lệch tính theo giá mua thật trên Metric
    const prem = (mark / ref - 1) * 100, fund = parseFloat(c.funding || 0) * 8760 * 100;     // funding theo giờ → %/năm
    const vol = parseFloat(c.dayNtlVlm || 0), oi = parseFloat(c.openInterest || 0) * mark;
    rows.push({ coin: u.name, sym, mark, oracle, prem: +prem.toFixed(3), premOracle: +((mark / oracle - 1) * 100).toFixed(3), fund: +fund.toFixed(1),
      metric: mt ? { chain: mt.chain, sym: mt.sym, price: mt.price, liq: mt.liq, tier: mt.tier } : null,
      vol: Math.round(vol), oi: Math.round(oi), maxLev: u.maxLeverage,
      // lợi nhuận ước tính nếu premium về 0 + funding 7 ngày, trừ phí (chỉ có nghĩa khi short = premium dương)
      edge7: +(prem - FEE_RT + fund / 365 * 7).toFixed(2) });
  });
  rows.sort((a, b) => b.prem - a.prem);
  return { at: Date.now(), dex: DEX, minPrem: MIN_PREM, fees: FEE_RT, metricOk: !!mlist, metricCount: mlist ? mlist.length : 0, rows };
}

export async function arbRun({ state, outbox, errors, esc, link }) {
  let A;
  try { A = await arbScan(); } catch (e) { errors.push(`Delta-neutral: không đọc được trade.xyz (${e.message})`); return state.arb || null; }
  const seen = state.arbAlert || {}, now = Date.now(), hits = [];
  for (const r of A.rows) {
    if (!A.metricOk || !r.metric || r.prem < MIN_PREM || r.fund < 0 || r.vol < MIN_VOL) continue;   // chỉ báo khi chắc chắn có trên Metric          // chỉ báo khi short có lợi: premium dương, funding không âm
    const s = seen[r.coin];
    if (s && now - s.at < 6 * 36e5 && r.prem < s.prem + .5) continue;           // đã báo trong 6 giờ, trừ khi premium tăng thêm ≥ 0.5%
    seen[r.coin] = { at: now, prem: r.prem }; hits.push(r);
  }
  for (const k of Object.keys(seen)) if (now - seen[k].at > 3 * 864e5) delete seen[k];
  state.arbAlert = seen;
  if (hits.length) outbox.push(`💱 <b>Delta-neutral trade.xyz × Metric</b>\n` + hits.slice(0, 8).map(r =>
    `• <b>${esc(r.sym)}</b>: short perp ${r.mark} · mua <b>${esc(r.metric.sym)}</b> trên Metric (${esc(r.metric.chain)}) giá ask ${+r.metric.price.toPrecision(6)} → chênh <b>+${r.prem}%</b> · funding ${r.fund >= 0 ? "+" : ""}${r.fund}%/năm (short nhận) · ước tính 7 ngày ${r.edge7 >= 0 ? "+" : ""}${r.edge7}%`
  ).join("\n") + `\n→ Short perp trên trade.xyz, mua token tương ứng trên Metric. Kiểm tra lại giá trên app Metric trước khi vào.` + link());
  return A;
}
