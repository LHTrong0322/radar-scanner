// Nghiên cứu dự án "breakout / pump mạnh": tìm điểm chung TRƯỚC khi giá chạy mạnh, để biến thành tín hiệu sớm.
//   node pump_study.mjs study   → dữ liệu ngày từ 2023 (mọi coin bot đang quét), đo đặc điểm tại mỗi ngày (chỉ dùng nến đã đóng),
//                                 so sánh "trước khi pump" với "ngày bình thường" → báo cáo pump/report.md + pump/model.json
//   node pump_study.mjs watch   → hằng ngày: dự án đang breakout mạnh + dự án khớp mẫu "trước pump" → pump/watch.md (+ Telegram nếu có)
// Định nghĩa "pump đánh được": từ giá đóng cửa ngày đó, trong 14 ngày tới giá chạm +30% TRƯỚC khi chạm −10%.
import fs from "node:fs";
import { candles, stockCandles, MS } from "./data.mjs";

const MODE = process.argv[2] || "study", D = 864e5, FROM = Date.UTC(2022, 5, 1), START = Date.UTC(2023, 0, 1), TEST = Date.UTC(2026, 0, 1);
const UP = .30, DOWN = .10, HOLD = 14;
const STOCK_LABELS = new Set(["INTC", "CRCL", "COIN", "HOOD", "MSTR", "BMNR", "BLSH", "SPY500", "SECZ", "SPCX", "NVDA", "AAPL", "MSFT", "GOOGL", "AMZN", "META", "TSLA", "AVGO", "AMD", "NFLX", "PLTR", "ORCL", "JPM", "QQQ", "GOLD", "SILVER", "OIL", "COPPER"]);

/* ---------- chỉ báo ---------- */
const ema = (a, n) => { const k = 2 / (n + 1), o = []; let e = null; a.forEach((x, i) => { e = e == null ? x : x * k + e * (1 - k); o.push(i >= n - 1 ? e : null); }); return o; };
function rsi(c, n = 14) { const o = Array(c.length).fill(null); let g = 0, l = 0; for (let i = 1; i < c.length; i++) { const d = c[i] - c[i - 1];
  if (i <= n) { if (d > 0) g += d; else l -= d; if (i === n) { g /= n; l /= n; o[i] = l === 0 ? 100 : 100 - 100 / (1 + g / l); } }
  else { g = (g * (n - 1) + Math.max(d, 0)) / n; l = (l * (n - 1) + Math.max(-d, 0)) / n; o[i] = l === 0 ? 100 : 100 - 100 / (1 + g / l); } } return o; }
const pctRank = (arr, v) => { const a = arr.filter(x => x != null && isFinite(x)); if (a.length < 20) return null; return a.filter(x => x < v).length / a.length; };

// đặc điểm tại ngày i (dùng nến 0..i, đều đã đóng)
function features(c, i, btc, pre) {
  pre = pre || prep(c, btc);
  if (i < 210) return null;
  const cl = c.map(x => x.c), px = cl[i], w = (k, n) => c.slice(Math.max(0, k - n + 1), k + 1);
  const bbw = k => { const s = cl.slice(k - 19, k + 1), m = s.reduce((a, b) => a + b, 0) / 20, sd = Math.sqrt(s.reduce((a, b) => a + (b - m) ** 2, 0) / 20); return 4 * sd / m; };
  const atrp = k => { let s = 0; for (let j = k - 13; j <= k; j++) s += Math.max(c[j].h - c[j].l, Math.abs(c[j].h - c[j - 1].c), Math.abs(c[j].l - c[j - 1].c)); return s / 14 / cl[k]; };
  const bw = [], ap = []; for (let k = i - 180; k < i; k += 3) { bw.push(bbw(k)); ap.push(atrp(k)); }
  const vol = x => x.reduce((a, b) => a + (b.v || 0) * b.c, 0) / x.length;   // giá trị giao dịch (USD) trung bình
  const v5 = vol(w(i, 5)), v30 = vol(c.slice(i - 35, i - 5)), e20 = pre.e20[i], e50 = pre.e50[i], e200 = pre.e200[i];
  const hi60 = Math.max(...c.slice(i - 60, i).map(x => x.h)), hi365 = Math.max(...c.slice(Math.max(0, i - 365), i + 1).map(x => x.h));
  const r20 = w(i, 20), rng20 = (Math.max(...r20.map(x => x.h)) - Math.min(...r20.map(x => x.l))) / px;
  const lows = [0, 1, 2].map(q => Math.min(...c.slice(i - 10 * (q + 1) + 1, i - 10 * q + 1).map(x => x.l)));   // đáy 10 ngày gần nhất, 10 ngày trước, 10 ngày trước nữa
  const bi = btc ? lastLE(btc, c[i].t) : -1, bc = bi >= 30 ? btc.map(x => x.c) : null;
  const rs30 = bc ? (px / cl[i - 30] - 1) - (bc[bi] / bc[bi - 30] - 1) : null;
  const be200 = bc ? pre.be200[bi] : null;
  return {
    squeeze: pctRank(bw, bbw(i)),             // độ rộng dải Bollinger so với 6 tháng qua (thấp = giá đang nén chặt)
    atrp: pctRank(ap, atrp(i)),               // biên độ dao động so với 6 tháng qua
    volx: v30 > 0 ? v5 / v30 : null,          // tiền vào 5 ngày gần nhất so với 30 ngày trước đó
    rsi: pre.rsi[i],
    e200: px / e200 - 1,                      // giá so với EMA200
    stack: e20 > e50 && e50 > e200 ? 1 : 0,   // EMA20 > EMA50 > EMA200 (xu hướng tăng xếp lớp)
    rs30,                                      // mạnh hơn BTC trong 30 ngày (chênh lệch lợi nhuận)
    dd365: px / hi365 - 1,                    // cách đỉnh 1 năm bao xa
    near60: px / hi60 - 1,                    // cách đỉnh 60 ngày bao xa (≥ 0 = đang phá đỉnh)
    rng20,                                     // biên độ 20 ngày (thấp = đi ngang tích luỹ)
    hlows: lows[0] > lows[1] && lows[1] > lows[2] ? 1 : 0,   // đáy sau cao hơn đáy trước (3 nhịp)
    btcUp: bc ? (bc[bi] > be200 ? 1 : 0) : null,
    breakout: px > hi60 && v30 > 0 && vol([c[i]]) > 2 * v30 ? 1 : 0,   // hôm nay đóng cửa vượt đỉnh 60 ngày + tiền vào gấp đôi
  };
}
function prep(c, btc) { const cl = c.map(x => x.c); return { e20: ema(cl, 20), e50: ema(cl, 50), e200: ema(cl, 200), rsi: rsi(cl), be200: btc ? (btc._e200 = btc._e200 || ema(btc.map(x => x.c), 200)) : null }; }
function lastLE(a, t) { let lo = 0, hi = a.length - 1, k = -1; while (lo <= hi) { const m = (lo + hi) >> 1; if (a[m].t <= t) { k = m; lo = m + 1; } else hi = m - 1; } return k; }
// nhãn: trong HOLD ngày tới, chạm +UP trước khi chạm −DOWN (tính bằng giá cao/thấp trong ngày, ngày chạm cả hai coi như thua)
function label(c, i) {
  const p = c[i].c; if (i + HOLD >= c.length) return null;
  for (let j = i + 1; j <= i + HOLD; j++) { const dn = c[j].l <= p * (1 - DOWN), up = c[j].h >= p * (1 + UP); if (dn) return 0; if (up) return 1; }
  return 0;
}

/* ---------- danh sách coin ---------- */
// mọi mã bot đang quét: coin + BTC + cổ phiếu + hàng hoá (Trọng 12/11/2026)
function universe() {
  let st = {}; try { st = JSON.parse(fs.readFileSync("state.json", "utf8")); } catch (e) { }
  const set = Array.isArray(st.scanSet) && st.scanSet.length ? st.scanSet : Object.keys(st.universe || {});
  let stocks = []; try { stocks = JSON.parse((fs.readFileSync("index.html", "utf8").match(/const STOCKS=(\[[\s\S]*?\]\]);/) || [])[1] || "[]"); } catch (e) { }
  const sym = Object.fromEntries(stocks.map(x => [x[1], x[0]]));
  const out = set.filter(b => /^[A-Z0-9]{2,12}$/.test(b)).map(b => ({ b, stock: !!sym[b], sym: sym[b] }));
  if (!out.some(x => x.b === "BTC")) out.push({ b: "BTC", stock: false });
  return out;
}
async function loadAll(list) {
  const out = {}; let k = 0;
  await Promise.all(Array.from({ length: 6 }, async () => { while (k < list.length) { const a = list[k++]; try { const c = a.stock ? (await stockCandles(a.sym, "1d")).filter(x => x.t >= FROM) : await candles(a.b, "1d", FROM); if (c.length > 230) out[a.b] = c.filter(x => x.t + D <= Date.now()); } catch (e) { } } }));
  return out;
}

/* ---------- nghiên cứu ---------- */
const BUCKETS = {
  squeeze: [[0, .1, "rất nén (10% hẹp nhất)"], [.1, .3, "nén"], [.3, .7, "bình thường"], [.7, 1.01, "đang giãn mạnh"]],
  atrp: [[0, .2, "dao động rất thấp"], [.2, .5, "thấp"], [.5, .8, "trung bình"], [.8, 1.01, "rất cao"]],
  volx: [[0, .7, "tiền vào giảm"], [.7, 1.3, "bình thường"], [1.3, 2, "tăng 1.3–2 lần"], [2, 4, "tăng 2–4 lần"], [4, 1e9, "tăng trên 4 lần"]],
  rsi: [[0, 40, "< 40"], [40, 50, "40–50"], [50, 60, "50–60"], [60, 70, "60–70"], [70, 101, "≥ 70"]],
  e200: [[-9, -.2, "dưới EMA200 >20%"], [-.2, 0, "dưới EMA200 0–20%"], [0, .2, "trên EMA200 0–20%"], [.2, .5, "trên 20–50%"], [.5, 99, "trên >50%"]],
  stack: [[0, .5, "EMA chưa xếp tăng"], [.5, 2, "EMA20>50>200"]],
  rs30: [[-9, -.15, "yếu hơn BTC >15%"], [-.15, 0, "yếu hơn BTC 0–15%"], [0, .15, "mạnh hơn BTC 0–15%"], [.15, .4, "mạnh hơn 15–40%"], [.4, 99, "mạnh hơn >40%"]],
  dd365: [[-1, -.7, "cách đỉnh năm >70%"], [-.7, -.4, "cách đỉnh 40–70%"], [-.4, -.15, "cách đỉnh 15–40%"], [-.15, .01, "sát/đang ở đỉnh năm"]],
  near60: [[-1, -.3, "cách đỉnh 60 ngày >30%"], [-.3, -.1, "cách 10–30%"], [-.1, 0, "sát đỉnh (0–10%)"], [0, 99, "đang phá đỉnh 60 ngày"]],
  rng20: [[0, .15, "đi ngang chặt (<15%)"], [.15, .3, "15–30%"], [.3, .6, "30–60%"], [.6, 99, ">60%"]],
  hlows: [[0, .5, "chưa có đáy cao dần"], [.5, 2, "đáy cao dần 3 nhịp"]],
  btcUp: [[0, .5, "BTC dưới EMA200"], [.5, 2, "BTC trên EMA200"]],
  breakout: [[0, .5, "không breakout"], [.5, 2, "BREAKOUT hôm nay (vượt đỉnh 60 ngày + tiền vào gấp đôi)"]],
};
const bucketOf = (f, v) => { if (v == null || !isFinite(v)) return null; const b = BUCKETS[f].find(([lo, hi]) => v >= lo && v < hi); return b ? b[2] : null; };
const NAMES = { squeeze: "Độ nén giá (dải Bollinger)", atrp: "Biên độ dao động", volx: "Tiền vào 5 ngày so với 30 ngày", rsi: "RSI ngày", e200: "Giá so với EMA200", stack: "EMA xếp lớp", rs30: "Mạnh hơn BTC (30 ngày)", dd365: "Cách đỉnh 1 năm", near60: "Cách đỉnh 60 ngày", rng20: "Biên độ 20 ngày", hlows: "Đáy cao dần", btcUp: "Thị trường BTC", breakout: "Breakout" };

async function study() {
  const list = universe(), btc = await candles("BTC", "1d", FROM).then(c => c.filter(x => x.t + D <= Date.now()));
  const data = await loadAll(list); console.log(`Có dữ liệu ${Object.keys(data).length}/${list.length} coin`);
  const rows = [];
  for (const [b, c] of Object.entries(data)) { const pre = prep(c, btc); for (let i = 210; i < c.length; i++) {
    if (c[i].t < START) continue; const y = label(c, i); if (y == null) continue;
    const f = features(c, i, btc, pre); if (!f) continue; rows.push({ b, t: c[i].t, y, f, fwd: c[i + HOLD] ? c[i + HOLD].c / c[i].c - 1 : null });
  } }
  const tr = rows.filter(r => r.t < TEST), te = rows.filter(r => r.t >= TEST), base = a => a.length ? a.filter(r => r.y).length / a.length : 0;
  const B0 = base(tr), B1 = base(te);
  const L = [`# Nghiên cứu dự án pump / breakout mạnh`, "", `Tạo lúc ${new Date().toISOString().slice(0, 16)} UTC · ${Object.keys(data).length} coin (mọi mã bot đang quét: coin, BTC, cổ phiếu, hàng hoá) · dữ liệu ngày từ 01/2023, chỉ dùng nến đã đóng.`, "",
    `**"Pump đánh được"** = từ giá đóng cửa hôm đó, trong ${HOLD} ngày tới giá chạm **+${UP * 100}%** TRƯỚC khi chạm **−${DOWN * 100}%** (tức là mua lúc đó, đặt SL −10%, chốt +30% thì thắng).`,
    `**Tỷ lệ nền** (ngày bất kỳ): 2023–2025 là **${(B0 * 100).toFixed(1)}%** (${tr.length} mẫu) · năm 2026 là **${(B1 * 100).toFixed(1)}%** (${te.length} mẫu).`,
    `Tỷ lệ nền theo nhóm (2023–2025): coin ${(base(tr.filter(r => !STOCK_LABELS.has(r.b))) * 100).toFixed(1)}% · cổ phiếu/hàng hoá ${(base(tr.filter(r => STOCK_LABELS.has(r.b))) * 100).toFixed(1)}% (cổ phiếu ít khi tăng 30% trong 14 ngày nên tỷ lệ thấp là bình thường).`,
    `**Hệ số báo trước** = tỷ lệ pump khi có đặc điểm ÷ tỷ lệ nền. Ví dụ 2.0 = khả năng pump gấp đôi ngày bình thường. Chỉ tin những gì cao ở CẢ 2023–2025 LẪN 2026.`, ""];
  const model = { at: Date.now(), up: UP, down: DOWN, hold: HOLD, base: { train: B0, test: B1 }, single: [], combos: [] };
  for (const f of Object.keys(BUCKETS)) {
    L.push(`## ${NAMES[f]}`, "", "| Mức | Mẫu 2023–25 | Tỷ lệ pump | Hệ số | Mẫu 2026 | Tỷ lệ pump | Hệ số |", "|---|---|---|---|---|---|---|");
    for (const [, , name] of BUCKETS[f]) {
      const a = tr.filter(r => bucketOf(f, r.f[f]) === name), z = te.filter(r => bucketOf(f, r.f[f]) === name), p0 = base(a), p1 = base(z);
      L.push(`| ${name} | ${a.length} | ${(p0 * 100).toFixed(1)}% | **${B0 ? (p0 / B0).toFixed(2) : "–"}** | ${z.length} | ${(p1 * 100).toFixed(1)}% | **${B1 ? (p1 / B1).toFixed(2) : "–"}** |`);
      model.single.push({ f, name, n0: a.length, lift0: B0 ? p0 / B0 : 0, n1: z.length, lift1: B1 ? p1 / B1 : 0 });
    }
    L.push("");
  }
  // tổ hợp 2–3 đặc điểm: tìm mẫu có hệ số cao và ỔN ĐỊNH ở cả 2 giai đoạn
  const F = Object.keys(BUCKETS), key = (r, fs) => fs.map(f => bucketOf(f, r.f[f])).join(" + ");
  const combos = [];
  for (let a = 0; a < F.length; a++) for (let b = a + 1; b < F.length; b++) for (let c3 = b; c3 < F.length; c3++) {
    const fs = c3 === b ? [F[a], F[b]] : [F[a], F[b], F[c3]], g0 = new Map(), g1 = new Map();
    for (const r of tr) { const k = key(r, fs); if (k.includes("null")) continue; const o = g0.get(k) || [0, 0]; o[0]++; o[1] += r.y; g0.set(k, o); }
    for (const r of te) { const k = key(r, fs); if (k.includes("null")) continue; const o = g1.get(k) || [0, 0]; o[0]++; o[1] += r.y; g1.set(k, o); }
    for (const [k, [n, s]] of g0) { if (n < 150) continue; const [n1, s1] = g1.get(k) || [0, 0]; combos.push({ fs, k, n0: n, p0: s / n, lift0: s / n / B0, n1, p1: n1 ? s1 / n1 : 0, lift1: n1 && B1 ? s1 / n1 / B1 : 0 }); }
  }
  const good = combos.filter(x => x.n1 >= 20).sort((x, y) => Math.min(y.lift0, y.lift1) - Math.min(x.lift0, x.lift1)).slice(0, 25);
  L.push("## Tổ hợp đặc điểm báo trước tốt nhất (ổn định cả 2 giai đoạn)", "", "Xếp theo hệ số THẤP HƠN trong 2 giai đoạn (tránh mẫu chỉ đẹp ở một giai đoạn). Mẫu 2023–25 ≥ 150, mẫu 2026 ≥ 20.", "",
    "| # | Tổ hợp | Mẫu 2023–25 | Tỷ lệ pump | Hệ số | Mẫu 2026 | Tỷ lệ pump | Hệ số |", "|---|---|---|---|---|---|---|---|",
    ...good.map((x, i) => `| ${i + 1} | ${x.k} | ${x.n0} | ${(x.p0 * 100).toFixed(1)}% | **${x.lift0.toFixed(2)}** | ${x.n1} | ${(x.p1 * 100).toFixed(1)}% | **${x.lift1.toFixed(2)}** |`), "");
  model.combos = good.map(x => ({ fs: x.fs, k: x.k, lift0: x.lift0, lift1: x.lift1, p0: x.p0, p1: x.p1, n0: x.n0, n1: x.n1 }));
  // các lần pump nổi bật gần đây (để đối chiếu bằng mắt)
  const recent = rows.filter(r => r.y && r.t >= Date.now() - 120 * D).sort((a, b) => b.t - a.t).slice(0, 30);
  L.push("## Các lần pump gần đây (120 ngày) và đặc điểm ngay trước đó", "", "| Ngày | Coin | Độ nén | Tiền vào ×| RSI | Mạnh hơn BTC | Cách đỉnh 60 ngày | Breakout |", "|---|---|---|---|---|---|---|---|",
    ...recent.map(r => `| ${new Date(r.t).toISOString().slice(0, 10)} | ${r.b} | ${r.f.squeeze != null ? (r.f.squeeze * 100).toFixed(0) + "%" : "–"} | ${r.f.volx ? r.f.volx.toFixed(1) : "–"} | ${r.f.rsi ? r.f.rsi.toFixed(0) : "–"} | ${r.f.rs30 != null ? (r.f.rs30 * 100).toFixed(0) + "%" : "–"} | ${(r.f.near60 * 100).toFixed(0)}% | ${r.f.breakout ? "✅" : ""} |`), "",
    "## Lưu ý trung thực", "- Danh sách coin là các coin đang còn sống và đang có trên Hyperliquid → kết quả quá khứ hơi đẹp hơn thực tế (coin chết không có trong mẫu).",
    "- Nhiều ngày của cùng một đợt pump được tính nhiều lần (các ngày liền nhau) → số mẫu trông lớn hơn số lần pump thật.", "- Đây là tương quan, chưa phải chiến lược: bước sau phải backtest như trade thật (phí, SL, quản lý rủi ro) mới biết có lời không.");
  fs.mkdirSync("pump", { recursive: true }); fs.writeFileSync("pump/report.md", L.join("\n")); fs.writeFileSync("pump/model.json", JSON.stringify(model, null, 1));
  console.log(`Xong: ${rows.length} mẫu, tỷ lệ nền ${(B0 * 100).toFixed(1)}% / ${(B1 * 100).toFixed(1)}%`);
}

/* ---------- quét hằng ngày ---------- */
async function watch() {
  let model = null; try { model = JSON.parse(fs.readFileSync("pump/model.json", "utf8")); } catch (e) { }
  const list = universe(), btc = await candles("BTC", "1d", Date.now() - 400 * D).then(c => c.filter(x => x.t + D <= Date.now()));
  const data = {}; let k = 0;
  await Promise.all(Array.from({ length: 6 }, async () => { while (k < list.length) { const a = list[k++]; try { const c = (a.stock ? (await stockCandles(a.sym, "1d")).filter(x => x.t >= Date.now() - 420 * D) : await candles(a.b, "1d", Date.now() - 420 * D)).filter(x => x.t + D <= Date.now()); if (c.length > 230) data[a.b] = c; } catch (e) { } } }));
  const out = [];
  for (const [b, c] of Object.entries(data)) {
    const i = c.length - 1, f = features(c, i, btc); if (!f) continue;
    const hits = (model ? model.combos.slice(0, 10) : []).filter(m => m.fs.map(x => bucketOf(x, f[x])).join(" + ") === m.k);
    if (f.breakout || hits.length) out.push({ b, f, hits, d1: c[i].c / c[i - 1].c - 1 });
  }
  out.sort((a, b) => b.hits.length - a.hits.length || b.f.breakout - a.f.breakout || (b.f.volx || 0) - (a.f.volx || 0));
  const day = new Date(Date.now() - D).toISOString().slice(0, 10);
  const L = [`# Danh sách theo dõi breakout / dấu hiệu sắp pump — nến ngày ${day}`, "", `${Object.keys(data).length} coin được quét. Đây là danh sách THEO DÕI để nghiên cứu, CHƯA phải kèo vào lệnh (chưa qua backtest như trade thật).`, "",
    "| Coin | Breakout hôm qua | Khớp mẫu trước-pump | Tăng trong ngày | Tiền vào × | RSI | Mạnh hơn BTC 30 ngày | Độ nén |", "|---|---|---|---|---|---|---|---|",
    ...out.slice(0, 40).map(x => `| ${x.b} | ${x.f.breakout ? "✅" : ""} | ${x.hits.length ? x.hits.length + " mẫu" : ""} | ${(x.d1 * 100).toFixed(1)}% | ${x.f.volx ? x.f.volx.toFixed(1) : "–"} | ${x.f.rsi ? x.f.rsi.toFixed(0) : "–"} | ${x.f.rs30 != null ? (x.f.rs30 * 100).toFixed(0) + "%" : "–"} | ${x.f.squeeze != null ? (x.f.squeeze * 100).toFixed(0) + "%" : "–"} |`)];
  fs.mkdirSync("pump", { recursive: true }); fs.writeFileSync("pump/watch.md", L.join("\n"));
  const TG = process.env.TELEGRAM_BOT_TOKEN, CHAT = process.env.TELEGRAM_CHAT_ID;
  if (TG && CHAT && out.length) {
    const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
    const txt = `🚀 <b>Theo dõi breakout</b> (nến ngày ${day}) — để nghiên cứu, CHƯA phải kèo:\n` + out.slice(0, 15).map(x => `• <b>${esc(x.b)}</b> ${(x.d1 * 100).toFixed(1)}%${x.f.breakout ? " · breakout" : ""}${x.hits.length ? ` · khớp ${x.hits.length} mẫu trước-pump` : ""} · tiền vào ×${x.f.volx ? x.f.volx.toFixed(1) : "–"}`).join("\n");
    try { await fetch(`https://api.telegram.org/bot${TG}/sendMessage`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ chat_id: CHAT, text: txt, parse_mode: "HTML", disable_web_page_preview: true }) }); } catch (e) { }
  }
  console.log(`Theo dõi: ${out.length} coin`);
}

/* ---------- nến tăng mạnh > 10% (H4 / D1): mô hình nến + mẫu hình giá ngay trước đó ---------- */
const BIG = .10;
// mô hình nến / mẫu hình giá tại nến k (nến ĐÃ ĐÓNG ngay trước cây nến tăng mạnh)
function patterns(c, k) {
  if (k < 60) return null;
  const x = c[k], p = c[k - 1], body = Math.abs(x.c - x.o), rng = x.h - x.l || 1e-12, lo = Math.min(x.o, x.c) - x.l, up = x.h - Math.max(x.o, x.c);
  const atr = (() => { let s = 0; for (let j = k - 13; j <= k; j++) s += Math.max(c[j].h - c[j].l, Math.abs(c[j].h - c[j - 1].c), Math.abs(c[j].l - c[j - 1].c)); return s / 14; })();
  const hh = (a, b) => Math.max(...c.slice(a, b).map(z => z.h)), ll = (a, b) => Math.min(...c.slice(a, b).map(z => z.l));
  const vol = (a, b) => c.slice(a, b).reduce((s, z) => s + (z.v || 0), 0) / Math.max(1, b - a);
  const rngs = c.slice(k - 6, k + 1).map(z => z.h - z.l);
  return {
    hammer: lo >= 2 * body && up <= body ? 1 : 0,                                                    // búa: râu dưới dài ≥ 2 lần thân
    engulf: x.c > x.o && p.c < p.o && x.c >= p.o && x.o <= p.c ? 1 : 0,                              // nhấn chìm tăng
    inside: x.h < p.h && x.l > p.l ? 1 : 0,                                                          // nến nằm trong nến trước (nén)
    doji: body <= .1 * rng ? 1 : 0,                                                                  // doji: thân rất nhỏ (lưỡng lự)
    soldiers: c[k].c > c[k].o && c[k - 1].c > c[k - 1].o && c[k - 2].c > c[k - 2].o && c[k].c > c[k - 1].c && c[k - 1].c > c[k - 2].c ? 1 : 0,   // 3 nến xanh liên tiếp
    longLower: lo >= .5 * rng ? 1 : 0,                                                               // râu dưới chiếm ≥ 50% cây nến (bị đạp nhưng mua lại)
    nr7: rngs.at(-1) === Math.min(...rngs) ? 1 : 0,                                                  // biên độ hẹp nhất 7 nến (nén trước bùng nổ)
    tight10: hh(k - 9, k + 1) - ll(k - 9, k + 1) < 2.5 * atr ? 1 : 0,                                // 10 nến đi ngang rất chặt (cờ / nền giá)
    triangle: hh(k - 9, k + 1) < hh(k - 19, k - 9) && ll(k - 9, k + 1) > ll(k - 19, k - 9) ? 1 : 0, // đỉnh thấp dần + đáy cao dần (tam giác hội tụ)
    dbottom: Math.abs(ll(k - 14, k + 1) / ll(k - 60, k - 20) - 1) < .03 && x.c > ll(k - 14, k + 1) * 1.03 ? 1 : 0,   // đáy đôi (đáy gần bằng đáy 20–60 nến trước)
    hi20: x.c > hh(k - 20, k) ? 1 : 0,                                                               // vừa đóng cửa vượt đỉnh 20 nến
    dryup: vol(k - 4, k + 1) < .7 * vol(k - 34, k - 4) ? 1 : 0,                                     // volume cạn (5 nến gần nhất < 70% trung bình 30 nến trước)
    volspike: (x.v || 0) > 2 * vol(k - 30, k) ? 1 : 0,                                               // volume nến này gấp đôi trung bình
    redprev: x.c < x.o ? 1 : 0,                                                                      // nến trước là nến đỏ
  };
}
const PNAMES = { hammer: "Nến búa (râu dưới dài)", engulf: "Nhấn chìm tăng", inside: "Inside bar (nến nằm gọn trong nến trước)", doji: "Doji (thân rất nhỏ)", soldiers: "3 nến xanh tăng dần", longLower: "Râu dưới ≥ 50% cây nến",
  nr7: "Biên độ hẹp nhất 7 nến (NR7)", tight10: "10 nến đi ngang rất chặt (nền giá / cờ)", triangle: "Tam giác hội tụ (đỉnh thấp dần, đáy cao dần)", dbottom: "Đáy đôi", hi20: "Vừa vượt đỉnh 20 nến",
  dryup: "Volume cạn trước đó", volspike: "Volume nến trước gấp đôi", redprev: "Nến trước là nến đỏ" };
const STOCK_SET = () => { try { return new Map(JSON.parse((fs.readFileSync("index.html", "utf8").match(/const STOCKS=(\[[\s\S]*?\]\]);/) || [])[1] || "[]").map(x => [x[1], x[0]])); } catch (e) { return new Map(); } };
async function loadTF(list, tf, from) {
  const out = {}; let k = 0;
  await Promise.all(Array.from({ length: 6 }, async () => { while (k < list.length) { const a = list[k++]; try {
    const c = (a.stock ? (await stockCandles(a.sym, tf)).filter(x => x.t >= from) : await candles(a.b, tf, from)).filter(x => x.t + MS[tf] <= Date.now());
    if (c.length > 230) out[a.b] = c; } catch (e) { } } }));
  return out;
}
async function candleStudy() {
  const list = universe(), L = [`# Nến tăng mạnh > ${BIG * 100}% (H4 / D1): điểm chung ngay TRƯỚC cây nến`, "", `Tạo lúc ${new Date().toISOString().slice(0, 16)} UTC. Nến tăng mạnh = giá đóng cửa cao hơn giá đóng cửa nến trước ≥ ${BIG * 100}%. Đặc điểm đo ở nến ĐÃ ĐÓNG ngay trước đó. Hệ số = khả năng có nến tăng mạnh ngay sau ÷ khả năng bình thường (2.0 = gấp đôi). Chỉ tin cái cao ở CẢ 2023–2025 LẪN 2026.`, ""];
  const model = { at: Date.now(), tf: {} };
  for (const tf of ["1d", "4h"]) {
    const btc = (await candles("BTC", tf, FROM)).filter(x => x.t + MS[tf] <= Date.now()), data = await loadTF(list, tf, FROM), rows = [];
    for (const [b, c] of Object.entries(data)) { const pre = prep(c, btc); for (let k = 210; k < c.length - 1; k++) { if (c[k].t < START) continue;
      const pt = patterns(c, k), f = features(c, k, btc, pre); if (!pt || !f) continue;
      const y = c[k + 1].c / c[k].c - 1 >= BIG ? 1 : 0, fwd = y && c[k + 7] ? c[k + 7].c / c[k + 1].c - 1 : null;
      rows.push({ b, t: c[k].t, y, pt, f, fwd }); } }
    const tr = rows.filter(r => r.t < TEST), te = rows.filter(r => r.t >= TEST), base = a => a.length ? a.filter(r => r.y).length / a.length : 0, B0 = base(tr), B1 = base(te);
    const ev = rows.filter(r => r.y);
    L.push(`## Khung ${tf.toUpperCase()} — ${Object.keys(data).length} mã · ${ev.length} cây nến tăng ≥ ${BIG * 100}%`, "", `Khả năng bình thường: 2023–2025 **${(B0 * 100).toFixed(2)}%** mỗi nến · 2026 **${(B1 * 100).toFixed(2)}%**.`, "",
      "### Mô hình nến / mẫu hình giá ngay trước", "", "| Mẫu | Lần xuất hiện 2023–25 | Hệ số | Lần xuất hiện 2026 | Hệ số |", "|---|---|---|---|---|");
    const pr = [];
    for (const p of Object.keys(PNAMES)) { const a = tr.filter(r => r.pt[p]), z = te.filter(r => r.pt[p]); pr.push({ p, n0: a.length, l0: B0 ? base(a) / B0 : 0, n1: z.length, l1: B1 ? base(z) / B1 : 0 }); }
    pr.sort((x, y) => Math.min(y.l0, y.l1) - Math.min(x.l0, x.l1));
    for (const x of pr) L.push(`| ${PNAMES[x.p]} | ${x.n0} | **${x.l0.toFixed(2)}** | ${x.n1} | **${x.l1.toFixed(2)}** |`);
    // đặc điểm chung (như nghiên cứu pump) cho riêng các cây nến tăng mạnh
    L.push("", "### Đặc điểm thị trường ngay trước (so với bình thường)", "", "| Đặc điểm | Mức | Hệ số 2023–25 | Hệ số 2026 |", "|---|---|---|---|");
    const fr = [];
    for (const f of Object.keys(BUCKETS)) for (const [, , name] of BUCKETS[f]) { const a = tr.filter(r => bucketOf(f, r.f[f]) === name), z = te.filter(r => bucketOf(f, r.f[f]) === name); if (a.length < 200 || z.length < 30) continue;
      fr.push({ f, name, l0: B0 ? base(a) / B0 : 0, l1: B1 ? base(z) / B1 : 0 }); }
    fr.sort((x, y) => Math.min(y.l0, y.l1) - Math.min(x.l0, x.l1));
    for (const x of fr.slice(0, 15)) L.push(`| ${NAMES[x.f]} | ${x.name} | **${x.l0.toFixed(2)}** | **${x.l1.toFixed(2)}** |`);
    // sau cây nến tăng mạnh: mua đuổi có lời không?
    const fw = ev.filter(r => r.fwd != null), win = fw.filter(r => r.fwd > 0).length;
    L.push("", `### Sau cây nến tăng mạnh: mua đuổi ở giá đóng cửa, giữ 7 nến`, "", `${fw.length} lần · tăng tiếp ${fw.length ? (win / fw.length * 100).toFixed(0) : 0}% số lần · lợi nhuận trung bình ${fw.length ? (fw.reduce((s, r) => s + r.fwd, 0) / fw.length * 100).toFixed(1) : 0}% (chưa trừ phí, chưa có SL).`, "",
      "### Các cây nến tăng mạnh gần nhất", "", "| Thời điểm | Mã | Mẫu ngay trước |", "|---|---|---|",
      ...ev.sort((a, b) => b.t - a.t).slice(0, 25).map(r => `| ${new Date(r.t + MS[tf]).toISOString().slice(0, 13).replace("T", " ")}h | ${r.b} | ${Object.keys(PNAMES).filter(p => r.pt[p]).map(p => PNAMES[p]).join(", ") || "–"} |`), "");
    model.tf[tf] = { base: [B0, B1], top: pr.filter(x => x.n1 >= 20 && Math.min(x.l0, x.l1) > 1.3).map(x => x.p) };
  }
  L.push("## Lưu ý trung thực", "- Đây là tương quan để định hướng, chưa phải kèo. Mẫu nào có hệ số cao ở cả 2 giai đoạn mới được đem đi backtest như trade thật.", "- Danh sách mã là mã đang còn sống / đang có trên Hyperliquid → quá khứ hơi đẹp hơn thực tế.");
  fs.mkdirSync("pump", { recursive: true }); fs.writeFileSync("pump/candles.md", L.join("\n")); fs.writeFileSync("pump/candles-model.json", JSON.stringify(model, null, 1));
  console.log("Xong nghiên cứu nến tăng mạnh");
}
async function candleWatch() {
  const list = universe(), out = [], since = Date.now() - 26 * 36e5;
  for (const tf of ["4h", "1d"]) {
    const data = await loadTF(list, tf, Date.now() - (tf === "4h" ? 120 : 420) * D);
    for (const [b, c] of Object.entries(data)) for (let k = Math.max(61, c.length - 7); k < c.length; k++) {
      const ch = c[k].c / c[k - 1].c - 1; if (ch < BIG || c[k].t + MS[tf] < since) continue;
      const pt = patterns(c, k - 1); out.push({ b, tf, t: c[k].t + MS[tf], ch, vx: (c[k].v || 0) / (c.slice(k - 30, k).reduce((s, z) => s + (z.v || 0), 0) / 30 || 1), pats: pt ? Object.keys(PNAMES).filter(p => pt[p]) : [] });
    }
  }
  out.sort((a, b) => b.ch - a.ch);
  const L = [`# Nến tăng mạnh > ${BIG * 100}% trong 24 giờ qua (H4 / D1) — ${new Date().toISOString().slice(0, 16)} UTC`, "", "Danh sách để nghiên cứu điểm chung, CHƯA phải kèo vào lệnh.", "", "| Mã | Khung | Tăng | Volume × | Mẫu ngay trước |", "|---|---|---|---|---|",
    ...out.map(x => `| ${x.b} | ${x.tf.toUpperCase()} | +${(x.ch * 100).toFixed(1)}% | ${x.vx.toFixed(1)} | ${x.pats.map(p => PNAMES[p]).join(", ") || "–"} |`)];
  fs.mkdirSync("pump", { recursive: true }); fs.writeFileSync("pump/candles-watch.md", L.join("\n"));
  // lưu lịch sử để tích luỹ dữ liệu theo thời gian
  let hist = []; try { hist = JSON.parse(fs.readFileSync("pump/candles-history.json", "utf8")); } catch (e) { }
  for (const x of out) if (!hist.some(h => h.b === x.b && h.tf === x.tf && h.t === x.t)) hist.push({ b: x.b, tf: x.tf, t: x.t, ch: +x.ch.toFixed(4), vx: +x.vx.toFixed(2), pats: x.pats });
  fs.writeFileSync("pump/candles-history.json", JSON.stringify(hist.slice(-5000)));
  const TG = process.env.TELEGRAM_BOT_TOKEN, CHAT = process.env.TELEGRAM_CHAT_ID;
  if (TG && CHAT && out.length) {
    const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
    const txt = `📈 <b>Nến tăng mạnh > ${BIG * 100}% trong 24h</b> (H4/D1) — để nghiên cứu, CHƯA phải kèo:\n` + out.slice(0, 20).map(x => `• <b>${esc(x.b)}</b> ${x.tf.toUpperCase()} +${(x.ch * 100).toFixed(1)}% · volume ×${x.vx.toFixed(1)}${x.pats.length ? " · trước đó: " + esc(x.pats.slice(0, 3).map(p => PNAMES[p]).join(", ")) : ""}`).join("\n");
    try { await fetch(`https://api.telegram.org/bot${TG}/sendMessage`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ chat_id: CHAT, text: txt, parse_mode: "HTML", disable_web_page_preview: true }) }); } catch (e) { }
  }
  console.log(`Nến tăng mạnh 24h: ${out.length}`);
}

if (MODE === "study") await study(); else if (MODE === "watch") await watch(); else if (MODE === "candle-study") await candleStudy(); else if (MODE === "candle-watch") await candleWatch();
