// Backtest chiến lược CHỈ DÙNG RSI cho BTC (khung D)
// Vào: nến D đóng cửa với RSI(14) < 30 (quá bán) → bắt đầu 1 chu kỳ, chia vốn DCA theo nhiều cách
// Ra : nến D đóng cửa với RSI(14) ≥ 70 → bán toàn bộ ở giá đóng cửa
// Không SL (đúng luật Trọng đưa ra) → đo rủi ro bằng mức âm sâu nhất trong chu kỳ (MAE) và sụt vốn của cả danh mục.
// Không nhìn trước: tín hiệu dùng giá ĐÓNG CỬA của nến D; lệnh DCA theo mức giá chỉ khớp ở các nến SAU nến tín hiệu.
import fs from "node:fs";

const FEE = 0.1 / 100;        // phí spot mỗi chiều (0.1%, thận trọng)
const RSI_IN = 30, RSI_OUT = 70, N = 14;
const warn = [];
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function getJ(url) {
  for (let k = 0; k < 4; k++) {
    const ac = new AbortController(), tm = setTimeout(() => ac.abort(), 20000);
    try { const r = await fetch(url, { signal: ac.signal }); clearTimeout(tm); if (r.status === 429) { await sleep(3000); continue; } if (!r.ok) throw new Error("HTTP " + r.status); return await r.json(); }
    catch (e) { clearTimeout(tm); if (k === 3) throw e; await sleep(1500); }
  }
}
async function binanceDaily() {
  let out = [], st = Date.UTC(2017, 0, 1);
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
function atr(D, i, n = 14) { if (i < n) return null; let s = 0; for (let k = i - n + 1; k <= i; k++) s += Math.max(D[k].h - D[k].l, Math.abs(D[k].h - D[k - 1].c), Math.abs(D[k].l - D[k - 1].c)); return s / n; }

// Các cách chia vốn DCA (tổng 100% vốn dành cho 1 chu kỳ)
const PLANS = [
  { id: "1lan", name: "Mua 1 lần (100% khi RSI < 30)", legs: () => [{ w: 1, at: "now" }] },
  { id: "deu-gia", name: "4 phần đều: 25% khi RSI < 30, thêm 25% ở −7%, −14%, −21%", legs: P => [{ w: .25, at: "now" }, ...[.07, .14, .21].map(d => ({ w: .25, px: P * (1 - d) }))] },
  { id: "kim-tu-thap", name: "Kim tự tháp 10/20/30/40% ở 0%, −8%, −16%, −25%", legs: P => [{ w: .1, at: "now" }, { w: .2, px: P * .92 }, { w: .3, px: P * .84 }, { w: .4, px: P * .75 }] },
  { id: "theo-rsi", name: "Theo RSI: 25% mỗi lần RSI đóng cửa < 30 / 25 / 20 / 15", legs: () => [{ w: .25, at: "now" }, { w: .25, rsi: 25 }, { w: .25, rsi: 20 }, { w: .25, rsi: 15 }] },
  { id: "theo-atr", name: "Theo ATR: 25% khi RSI < 30, thêm 25% mỗi 1.5 ATR(D) giảm thêm", legs: (P, A) => [{ w: .25, at: "now" }, ...[1, 2, 3].map(k => ({ w: .25, px: P - k * 1.5 * A }))] },
];

function backtest(D, plan, exitMode = "all") {
  const rsiOut = RSI_OUT;
  const R = rsi(D.map(x => x.c)), cycles = [];
  let cyc = null;
  for (let i = N + 1; i < D.length; i++) {
    const d = D[i];
    if (cyc) {
      // khớp các phần DCA còn chờ (chỉ từ nến SAU nến tín hiệu)
      for (const L of cyc.sell ? [] : cyc.legs) {
        if (L.filled) continue;
        if (L.px != null && d.l <= L.px) { L.filled = true; L.fillPx = Math.min(L.px, d.o); L.at = d.t; }        // mở cửa đã thấp hơn mức chờ → khớp ở giá mở cửa
        else if (L.rsi != null && R[i] != null && R[i] < L.rsi) { L.filled = true; L.fillPx = d.c; L.at = d.t; }
      }
      const F = cyc.legs.filter(x => x.filled), w = F.reduce((a, x) => a + x.w, 0), cost = F.reduce((a, x) => a + x.w * x.fillPx, 0) / w;
      cyc.minLow = Math.min(cyc.minLow, d.l);
      if (!cyc.sell) cyc.maeAvg = Math.min(cyc.maeAvg, d.l / cost - 1);
      const done = (exitPx) => { const ret = cyc.sell ? cyc.sell.proceeds * (1 - FEE) / (cost * (1 + FEE)) - 1 : (exitPx * (1 - FEE)) / (cost * (1 + FEE)) - 1;
        cycles.push({ ...cyc, end: d.t, exit: exitPx, cost, deployed: w, ret, days: Math.round((d.t - cyc.start) / 864e5), legsFilled: F.length, sells: cyc.sell ? cyc.sell.n : 1, cut45: cyc.cut45 || false }); cyc = null; };
      if (exitMode === "all") { if (R[i] != null && R[i] >= rsiOut) done(d.c); continue; }
      // BÁN DẦN KIM TỰ THÁP: 10% khi RSI ≥ 70, lệnh chờ bán 20/30/40% ở +8/+16/+25%; mỗi lần RSI rớt dưới 70 rồi đóng cửa lại ≥ 70 → bán thêm phần kế tiếp;
      // RSI đóng cửa < 45 khi chưa bán hết → bán toàn bộ phần còn lại. Tiền bán được tính theo tỷ lệ vốn đã giải ngân (proceeds tính theo 1 đơn vị BTC trung bình).
      const S2 = cyc.sell;
      if (S2) {
        for (const L of S2.legs) if (!L.sold && L.px != null && d.h >= L.px) { L.sold = true; S2.proceeds += L.w * Math.max(L.px, d.o); S2.n++; }
        if (S2.legs.every(L => L.sold)) { done(d.c); continue; }
        if (R[i] != null && R[i] >= rsiOut && R[i - 1] != null && R[i - 1] < rsiOut) { const L = S2.legs.find(x => !x.sold); L.sold = true; S2.proceeds += L.w * d.c; S2.n++; }
        if (S2.legs.every(L => L.sold)) { done(d.c); continue; }
        if (R[i] != null && R[i] < 45) { for (const L of S2.legs) if (!L.sold) { L.sold = true; S2.proceeds += L.w * d.c; } cyc.cut45 = true; done(d.c); continue; }
        continue;
      }
      if (R[i] != null && R[i] >= rsiOut) {
        for (const L of cyc.legs) if (!L.filled) L.cancel = true;                       // bắt đầu bán → ngừng mua thêm
        cyc.legs = cyc.legs.filter(L => L.filled);
        cyc.sell = { proceeds: d.c * .1, n: 1, legs: [{ w: .1, sold: true }, { w: .2, px: d.c * 1.08 }, { w: .3, px: d.c * 1.16 }, { w: .4, px: d.c * 1.25 }] };
      }
      continue;
    }
    if (R[i] != null && R[i] < RSI_IN && R[i - 1] != null) {
      const A = atr(D, i), legs = plan.legs(d.c, A).map(L => ({ ...L }));
      for (const L of legs) if (L.at === "now") { L.filled = true; L.fillPx = d.c; L.at = d.t; }
      cyc = { start: d.t, rsi0: R[i], p0: d.c, legs, minLow: d.c, maeAvg: 0 };
    }
  }
  let open = null;
  if (cyc) { const F = cyc.legs.filter(x => x.filled), w = F.reduce((a, x) => a + x.w, 0), cost = F.reduce((a, x) => a + x.w * x.fillPx, 0) / w, last = D.at(-1);
    open = { ...cyc, cost, deployed: w, ret: cyc.sell ? (cyc.sell.proceeds + cyc.sell.legs.filter(L => !L.sold).reduce((a, L) => a + L.w, 0) * last.c) / cost - 1 : last.c / cost - 1, days: Math.round((last.t - cyc.start) / 864e5), legsFilled: F.length }; }
  // đường vốn: vốn dành cho chu kỳ = 100% danh mục; phần chưa giải ngân để tiền mặt (0%)
  let eq = 1, peak = 1, dd = 0;
  const curve = [];
  const byStart = new Map(cycles.map(c => [c.start, c]));
  for (const c of cycles) { const prev = eq; eq *= 1 + c.ret * c.deployed; const worst = prev * (1 + c.maeAvg * c.deployed); peak = Math.max(peak, prev); dd = Math.max(dd, 1 - worst / peak); peak = Math.max(peak, eq); curve.push(eq); }
  return { cycles, open, eq, dd, byStart };
}

const fmtD = t => new Date(t).toISOString().slice(0, 10), pct = x => (x >= 0 ? "+" : "") + (x * 100).toFixed(1) + "%";
async function main() {
  const sets = [];
  try { const b = await binanceDaily(); if (b.length > 1000) sets.push(["Binance BTC/USDT (từ 2017)", b]); else warn.push("Binance trả về quá ít nến"); } catch (e) { warn.push("Không lấy được dữ liệu Binance: " + e.message); }
  try { const s = await bitstampDaily(); if (s.length > 1000) sets.push(["Bitstamp BTC/USD (từ 2011)", s]); else warn.push("Bitstamp trả về quá ít nến"); } catch (e) { warn.push("Không lấy được dữ liệu Bitstamp: " + e.message); }
  const L = ["# Backtest BTC chỉ dùng RSI khung D", "", `Vào khi RSI(14) đóng cửa nến D < ${RSI_IN}, chia vốn DCA; bán toàn bộ khi RSI(14) đóng cửa ≥ ${RSI_OUT}. Không SL. Phí ${FEE * 100}% mỗi chiều. Ngày tạo: ${fmtD(Date.now())}.`, ""];
  for (const [name, D] of sets) {
    // kiểm tra dữ liệu
    let gaps = 0, bad = 0; for (let i = 1; i < D.length; i++) { if (D[i].t - D[i - 1].t !== 864e5) gaps++; if (!(D[i].l <= Math.min(D[i].o, D[i].c) && D[i].h >= Math.max(D[i].o, D[i].c))) bad++; }
    if (gaps) warn.push(`${name}: ${gaps} chỗ thiếu/lệch ngày trong dữ liệu`);
    if (bad) warn.push(`${name}: ${bad} nến có giá cao/thấp không hợp lệ`);
    const bh = D.at(-1).c / D[N + 1].c - 1, years = (D.at(-1).t - D[N + 1].t) / (365 * 864e5);
    L.push(`## Dữ liệu: ${name}`, `${fmtD(D[0].t)} → ${fmtD(D.at(-1).t)} · ${D.length} nến D · mua giữ (buy & hold) cả kỳ: ${pct(bh)} (${((Math.pow(1 + bh, 1 / years) - 1) * 100).toFixed(1)}%/năm)`, "");
    L.push("| Cách chia vốn | Chu kỳ | Thắng | Lời TB/chu kỳ | Âm sâu nhất TB (MAE) | Âm sâu nhất tệ nhất | Lời/Âm (R:R) | Giữ TB (ngày) | Vốn giải ngân TB | Tăng trưởng danh mục | %/năm | Sụt vốn lớn nhất |", "|---|---|---|---|---|---|---|---|---|---|---|---|");
    const res = [...PLANS.map(p => ({ p, r: backtest(D, p, "all"), ex: "Bán hết khi RSI ≥ 70" })), ...PLANS.map(p => ({ p, r: backtest(D, p, "pyr"), ex: "Bán dần kim tự tháp + retest 70 + cắt khi RSI < 45" }))];
    let lastEx = "";
    for (const { p, r, ex } of res) {
      if (ex !== lastEx) { L.push(`| **${ex}** | | | | | | | | | | | |`); lastEx = ex; }
      const C = r.cycles, n = C.length; if (!n) { L.push(`| ${p.name} | 0 | – | – | – | – | – | – | – | – | – | – |`); continue; }
      const win = C.filter(c => c.ret > 0).length, avgR = C.reduce((a, c) => a + c.ret, 0) / n, avgM = C.reduce((a, c) => a + c.maeAvg, 0) / n, worstM = Math.min(...C.map(c => c.maeAvg));
      const days = C.reduce((a, c) => a + c.days, 0) / n, dep = C.reduce((a, c) => a + c.deployed, 0) / n, cagr = Math.pow(r.eq, 1 / years) - 1;
      L.push(`| ${p.name} | ${n}${r.open ? " (+1 đang mở)" : ""} | ${win}/${n} | ${pct(avgR)} | ${pct(avgM)} | ${pct(worstM)} | ${avgM < 0 ? (avgR / -avgM).toFixed(2) : "∞"} | ${days.toFixed(0)} | ${(dep * 100).toFixed(0)}% | ${pct(r.eq - 1)} | ${(cagr * 100).toFixed(1)}% | ${(r.dd * 100).toFixed(1)}% |`);
      if (n < 10) warn.push(`${name} · ${p.id}: chỉ ${n} chu kỳ → quá ít mẫu, kết quả không đủ tin cậy thống kê`);
    }
    // chi tiết từng chu kỳ (cách chia vốn 'deu-gia' làm ví dụ + so với mua 1 lần)
    const one = res[0].r, eqp = res[PLANS.length + 2].r;   // so sánh: mua 1 lần + bán hết  vs  kim tự tháp mua + bán dần
    L.push("", `### Chi tiết từng chu kỳ (${name}) — A: mua 1 lần, bán hết ở RSI 70 · B: kim tự tháp mua + bán dần`, "", "| # | Bắt đầu (RSI < 30) | RSI lúc vào | Giá vào lần đầu | A kết thúc | Giữ (ngày) | A: lời | A: âm sâu nhất | B: phần mua khớp | B: giá vốn | B: lời | B: âm sâu nhất |", "|---|---|---|---|---|---|---|---|---|---|---|---|");
    one.cycles.forEach((c, k) => { const e = eqp.byStart.get(c.start);
      L.push(`| ${k + 1} | ${fmtD(c.start)} | ${c.rsi0.toFixed(1)} | ${+c.p0.toPrecision(6)} | ${fmtD(c.end)} | ${c.days} | ${pct(c.ret)} | ${pct(c.maeAvg)} | ${e ? e.legsFilled + "/4" : "–"} | ${e ? +e.cost.toPrecision(6) : "–"} | ${e ? pct(e.ret) + (e.cut45 ? " (cắt RSI<45)" : ` (${e.sells} lần bán)`) + ` → ${fmtD(e.end)}` : "– (chu kỳ lệch ngày)"} | ${e ? pct(e.maeAvg) : "–"} |`); });
    if (one.open) L.push(`| đang mở | ${fmtD(one.open.start)} | ${one.open.rsi0.toFixed(1)} | ${+one.open.p0.toPrecision(6)} | (chưa có RSI ≥ 70) | ${one.open.days} | ${pct(one.open.ret)} (tạm tính) | ${pct(one.open.maeAvg)} | | | | |`);
    L.push("");
  }
  L.push("## Kiểm tra sai sót", "", ...(warn.length ? warn.map(w => "- ⚠️ " + w) : ["- Không phát hiện lỗi dữ liệu."]), "",
    "## Lưu ý cách tính",
    "- Tín hiệu dùng giá đóng cửa nến D (UTC). Phần DCA theo mức giá khớp khi giá chạm mức ở các nến sau; nếu mở cửa đã thấp hơn mức chờ thì khớp ở giá mở cửa.",
    "- 'Lời' tính trên số vốn đã giải ngân; 'Tăng trưởng danh mục' coi 100% danh mục dành cho mỗi chu kỳ, phần chưa giải ngân để tiền mặt (lãi 0%).",
    "- 'Âm sâu nhất (MAE)': giá thấp nhất trong chu kỳ so với giá vốn trung bình — chiến lược không có SL nên đây là rủi ro thật phải chịu.",
    "- R:R = lời trung bình ÷ mức âm sâu nhất trung bình.",
    "- Bán dần: 10% khi RSI ≥ 70, lệnh chờ bán 20/30/40% ở +8/+16/+25% so với giá lần bán đầu; mỗi lần RSI rớt dưới 70 rồi đóng cửa lại ≥ 70 bán thêm phần kế tiếp; RSI đóng cửa < 45 thì bán hết phần còn lại. Khi bắt đầu bán thì huỷ các lệnh mua DCA chưa khớp.");
  fs.mkdirSync("backtests", { recursive: true });
  const f = `backtests/${fmtD(Date.now())}-rsi-btc.md`; fs.writeFileSync(f, L.join("\n")); console.log(L.join("\n")); console.log("→", f);
}
main();
