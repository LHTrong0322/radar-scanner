// Backtest chiến lược RSI BTC khung D (mua kim tự tháp + bán dần) khi dùng LONG PERP có ĐÒN BẨY (x1/x2/x3) thay cho spot.
// Tính: phí taker 0.045%/chiều, funding trả mỗi ngày theo giả định (%/năm trên giá trị vị thế), giá thanh lý theo đáy nến D,
// ký quỹ bảo trì Hyperliquid BTC = 1/(2×40) = 1.25%.
// 2 cách ký quỹ: "isolated từng phần" (mỗi lần mua là 1 khoản ký quỹ riêng, cháy chỉ mất khoản đó)
//               "chung 1 ví" (toàn bộ vốn chiến lược làm ký quỹ chung — giống cross, cháy là mất hết vốn chiến lược).
import fs from "node:fs";

const START = Date.UTC(2020, 0, 1);
const FEE = 0.045 / 100, MM = 1 / 80, RSI_IN = 30, RSI_OUT = 70, N = 14;
const LEGS = [{ w: .1, d: 0 }, { w: .2, d: .08 }, { w: .3, d: .16 }, { w: .4, d: .25 }];
const SELLS = [{ w: .1, up: 0 }, { w: .2, up: .08 }, { w: .3, up: .16 }, { w: .4, up: .25 }];
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function getJ(url) {
  for (let k = 0; k < 4; k++) {
    const ac = new AbortController(), tm = setTimeout(() => ac.abort(), 20000);
    try { const r = await fetch(url, { signal: ac.signal }); clearTimeout(tm); if (r.status === 429) { await sleep(3000); continue; } if (!r.ok) throw new Error("HTTP " + r.status); return await r.json(); }
    catch (e) { clearTimeout(tm); if (k === 3) throw e; await sleep(1500); }
  }
}
async function binanceDaily() {
  let out = [], st = Date.UTC(2019, 8, 1);   // lấy dư 4 tháng để RSI ổn định, chỉ tính chu kỳ từ 2020
  for (let p = 0; p < 20; p++) {
    const j = await getJ(`https://data-api.binance.vision/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=1000&startTime=${st}`);
    if (!Array.isArray(j) || !j.length) break;
    out = out.concat(j.map(a => ({ t: a[0], o: +a[1], h: +a[2], l: +a[3], c: +a[4] })));
    if (j.length < 1000) break; st = j.at(-1)[0] + 1;
  }
  return out;
}
async function bitstampDaily() {
  let out = [], st = Math.floor(Date.UTC(2011, 8, 1) / 1000);
  for (let p = 0; p < 10; p++) {
    const j = await getJ(`https://www.bitstamp.net/api/v2/ohlc/btcusd/?step=86400&limit=1000&start=${st}`);
    const L = j && j.data && j.data.ohlc || []; if (!L.length) break;
    out = out.concat(L.map(a => ({ t: +a.timestamp * 1000, o: +a.open, h: +a.high, l: +a.low, c: +a.close })));
    if (L.length < 1000) break; st = +L.at(-1).timestamp + 86400;
  }
  const m = new Map(out.map(x => [x.t, x])); return [...m.values()].sort((a, b) => a.t - b.t);
}
function rsi(c) {
  const r = new Array(c.length).fill(null); if (c.length <= N) return r;
  let g = 0, l = 0;
  for (let i = 1; i <= N; i++) { const d = c[i] - c[i - 1]; if (d > 0) g += d; else l -= d; }
  g /= N; l /= N; r[N] = l === 0 ? 100 : 100 - 100 / (1 + g / l);
  for (let i = N + 1; i < c.length; i++) { const d = c[i] - c[i - 1]; g = (g * (N - 1) + Math.max(d, 0)) / N; l = (l * (N - 1) + Math.max(-d, 0)) / N; r[i] = l === 0 ? 100 : 100 - 100 / (1 + g / l); }
  return r;
}

// lev: đòn bẩy; fund: funding %/năm (số thập phân); mode: "iso" | "cross"
function run(D, lev, fund, mode) {
  const R = rsi(D.map(x => x.c)), cycles = [];
  let eq = 1, peak = 1, maxDD = 0, cyc = null;
  for (let i = N + 1; i < D.length; i++) {
    const d = D[i];
    if (!cyc) {
      if (d.t >= START && R[i] != null && R[i] < RSI_IN) {
        const E = eq, legs = LEGS.map(L => ({ w: L.w, px: d.c * (1 - L.d) }));
        cyc = { start: d.t, p0: d.c, E, cash: E, legs, pos: [], sell: null, minEq: E, liq: 0, fees: 0, funding: 0 };
        const L0 = legs[0]; L0.done = true; open(cyc, L0, d.c, lev);
      }
      continue;
    }
    const C = cyc;
    // 1) khớp lệnh mua DCA (chỉ khi chưa bắt đầu bán)
    if (!C.sell) for (const L of C.legs) if (!L.done && d.l <= L.px) { L.done = true; open(C, L, Math.min(L.px, d.o), lev); }
    // 2) kiểm tra thanh lý ở đáy nến
    if (mode === "iso") {
      for (const p of C.pos) if (p.u > 0) { const liqPx = p.e * (1 - 1 / lev) / (1 - MM); if (lev > 1 && d.l <= liqPx) { C.liq++; p.u = 0; /* mất toàn bộ ký quỹ của phần này */ } }
    } else {
      const u = C.pos.reduce((a, p) => a + p.u, 0), pnlLow = C.pos.reduce((a, p) => a + p.u * (d.l - p.e), 0);
      if (u > 0 && C.cash + pnlLow <= MM * u * d.l) { C.liq++; for (const p of C.pos) p.u = 0; C.cash = 0; }
    }
    // 3) funding (trả mỗi ngày trên giá trị vị thế)
    const uNow = C.pos.reduce((a, p) => a + p.u, 0), f = uNow * d.c * fund / 365; C.cash -= f; C.funding += f;
    const eqLow = C.cash + C.pos.reduce((a, p) => a + p.u * (d.l - p.e), 0); C.minEq = Math.min(C.minEq, eqLow);
    peak = Math.max(peak, C.E); maxDD = Math.max(maxDD, 1 - Math.max(eqLow, 0) / peak);
    if (uNow <= 0 && !C.legs.some(L => !L.done)) { finish(C, d, i); continue; }
    // 4) bán
    if (C.sell) {
      for (const s of C.sell.legs) if (!s.done && s.px != null && d.h >= s.px) { s.done = true; close(C, s.w, Math.max(s.px, d.o)); }
      if (C.sell.legs.every(s => s.done)) { finish(C, d, i); continue; }
      if (R[i] >= RSI_OUT && R[i - 1] < RSI_OUT) { const s = C.sell.legs.find(x => !x.done); s.done = true; close(C, s.w, d.c); }
      if (C.sell.legs.every(s => s.done)) { finish(C, d, i); continue; }
      if (R[i] < 45) { for (const s of C.sell.legs) if (!s.done) { s.done = true; close(C, s.w, d.c); } C.cut45 = true; finish(C, d, i); continue; }
      continue;
    }
    if (R[i] >= RSI_OUT) {
      C.legs.forEach(L => L.done = true);
      C.sell = { u0: C.pos.reduce((a, p) => a + p.u, 0), legs: SELLS.map((s, k) => ({ w: s.w, px: k ? d.c * (1 + s.up) : null })) };
      C.sell.legs[0].done = true; close(C, .1, d.c);
    }
  }
  function open(C, L, px, lev) { const notional = L.w * C.E * lev, fee = notional * FEE; C.pos.push({ u: notional / px, e: px }); C.cash -= fee; C.fees += fee; }
  function close(C, w, px) {          // bán w × số BTC lúc bắt đầu bán, chia đều theo tỷ lệ các phần còn sống
    const uAll = C.pos.reduce((a, p) => a + p.u, 0); if (uAll <= 0) return;
    let q = Math.min(uAll, w * C.sell.u0); const k = q / uAll;
    for (const p of C.pos) { const s = p.u * k; C.cash += s * (px - p.e) - s * px * FEE; C.fees += s * px * FEE; p.u -= s; }
  }
  function finish(C, d, i) {
    for (const p of C.pos) if (p.u > 0) { C.cash += p.u * (d.c - p.e) - p.u * d.c * FEE; p.u = 0; }
    const ret = C.cash / C.E - 1; eq = Math.max(0, C.cash);
    cycles.push({ start: C.start, end: d.t, days: Math.round((d.t - C.start) / 864e5), p0: C.p0, ret, minEq: C.minEq / C.E - 1, liq: C.liq, cut45: !!C.cut45, funding: C.funding / C.E, legs: C.legs.filter(L => L.px != null).length });
    peak = Math.max(peak, eq); cyc = null;
  }
  let openC = null;
  if (cyc) { const last = D.at(-1), v = cyc.cash + cyc.pos.reduce((a, p) => a + p.u * (last.c - p.e), 0); openC = { start: cyc.start, ret: v / cyc.E - 1, minEq: cyc.minEq / cyc.E - 1, liq: cyc.liq }; }
  return { cycles, eq: openC ? eq : eq, dd: maxDD, open: openC };
}

const fmtD = t => new Date(t).toISOString().slice(0, 10), pct = x => (x >= 0 ? "+" : "") + (x * 100).toFixed(1) + "%";
async function main() {
  const sets = [], warn = [];
  try { sets.push(["Binance BTC/USDT (từ 01/2020)", await binanceDaily()]); } catch (e) { warn.push("Binance: " + e.message); }
  const L = ["# RSI BTC khung D — long perp có đòn bẩy", "", `Luật giữ nguyên (mua kim tự tháp 10/20/30/40% ở 0/−8/−16/−25%, bán dần + retest 70 + cắt RSI<45). Phí taker ${FEE * 100}%/chiều, ký quỹ bảo trì ${MM * 100}%, funding trả mỗi ngày. Ngày tạo ${fmtD(Date.now())}.`, ""];
  for (const [name, D] of sets) {
    if (D.length < 1000) { warn.push(name + ": quá ít nến"); continue; }
    const years = (D.at(-1).t - START) / (365 * 864e5);
    L.push(`## ${name}`, "", "| Đòn bẩy | Ký quỹ | Funding/năm | Chu kỳ | Thắng | Lời TB/chu kỳ | Chu kỳ tệ nhất | Vốn âm sâu nhất trong chu kỳ | Số lần bị thanh lý | Tăng trưởng | %/năm | Sụt vốn lớn nhất |", "|---|---|---|---|---|---|---|---|---|---|---|---|");
    const V = [];
    for (const lev of [1, 2, 3]) for (const mode of lev === 1 ? ["iso"] : ["iso", "cross"]) for (const fund of [.11, .25]) V.push({ lev, mode, fund });
    for (const v of V) {
      const r = run(D, v.lev, v.fund, v.mode), C = r.cycles, n = C.length;
      const win = C.filter(c => c.ret > 0).length, avg = C.reduce((a, c) => a + c.ret, 0) / n, worst = Math.min(...C.map(c => c.ret)), worstEq = Math.min(...C.map(c => c.minEq)), liq = C.reduce((a, c) => a + c.liq, 0);
      L.push(`| x${v.lev} | ${v.lev === 1 ? "–" : v.mode === "iso" ? "isolated từng phần" : "chung 1 ví"} | ${v.fund * 100}% | ${n} | ${win}/${n} | ${pct(avg)} | ${pct(worst)} | ${pct(worstEq)} | ${liq} | ${pct(r.eq - 1)} | ${((Math.pow(Math.max(r.eq, 1e-9), 1 / years) - 1) * 100).toFixed(1)}% | ${(r.dd * 100).toFixed(1)}% |`);
    }
    for (const mode of ["iso", "cross"]) {
      const a = run(D, 1, .11, "iso"), b = run(D, 2, .11, mode);
      L.push("", `### Từng chu kỳ: x1 so với x2 (${mode === "iso" ? "isolated từng phần" : "chung 1 ví"}, funding 11%/năm)`, "", "| Bắt đầu | Kết thúc | Giữ (ngày) | x1: lời | x1: vốn âm sâu nhất | x2: lời | x2: vốn âm sâu nhất | x2: funding đã trả | x2 thanh lý |", "|---|---|---|---|---|---|---|---|---|");
      const m = new Map(b.cycles.map(c => [c.start, c]));
      a.cycles.forEach(c => { const e = m.get(c.start); L.push(`| ${fmtD(c.start)} | ${fmtD(c.end)} | ${c.days} | ${pct(c.ret)} | ${pct(c.minEq)} | ${e ? pct(e.ret) : "–"} | ${e ? pct(e.minEq) : "–"} | ${e ? pct(-e.funding) : "–"} | ${e ? (e.liq ? "⚠️ " + e.liq + " phần" : "không") : "– (lệch chu kỳ)"} |`); });
      if (b.open) L.push(`| ${fmtD(b.open.start)} | đang mở | | | | ${pct(b.open.ret)} (tạm) | ${pct(b.open.minEq)} | | ${b.open.liq ? "⚠️" : "không"} |`);
    }
    L.push("");
  }
  L.push("## Kiểm tra", "", ...(warn.length ? warn.map(w => "- ⚠️ " + w) : ["- Không phát hiện lỗi dữ liệu."]), "",
    "## Lưu ý", "- 'Vốn âm sâu nhất': giá trị vốn chiến lược (gồm lãi/lỗ chưa chốt) thấp nhất trong chu kỳ, đo tại giá thấp nhất của nến D.",
    "- Funding thật thay đổi theo thị trường; 11%/năm ≈ mức nền Hyperliquid (0.01%/giờ×… quy đổi), 25%/năm là kịch bản thị trường hưng phấn.",
    "- Thanh lý kiểm tra bằng đáy nến D, chưa tính râu nến phút trượt sâu hơn trên sàn perp → kết quả thật có thể tệ hơn một chút.");
  fs.mkdirSync("backtests", { recursive: true });
  const f = `backtests/${fmtD(Date.now())}-rsi-btc-x2.md`; fs.writeFileSync(f, L.join("\n")); console.log(L.join("\n")); console.log("→", f);
}
main();
