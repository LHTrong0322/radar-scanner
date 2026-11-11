// Bot tối ưu tự động thuật toán — chạy LIÊN TỤC trên GitHub Actions (mỗi vòng ~15 phút, tự gọi vòng kế tiếp).
// Backtest từ 01/2023 tới nay, mọi nến 4H/1D/1W, có phí + funding. Chỉ chọn thông số trên 01/2023 → 12/2025;
// năm 2026 giữ kín để chấm hiệu quả thật. KHÔNG sửa bot thật: cấu hình tốt nhất chỉ là đề xuất để Trọng duyệt.
import fs from "node:fs";
import path from "node:path";

const HTML = "index.html", DIR = "experiments-opt", ST = "opt/state.json", REP = "opt/report.md";
const arg = (k, d) => { const i = process.argv.indexOf("--" + k); return i > 0 ? process.argv[i + 1] : d; };
const fmt = v => v === null ? "null" : String(v);

// ---------- danh sách thông số được dò ----------
// find: đoạn code gốc (phải có đúng 1 lần trong index.html) · tpl: đoạn thay thế, {v} = giá trị · c: các giá trị thử (theo thứ tự)
// Giá trị bot thật đã đổi (Trọng duyệt) so với số viết trong danh sách dưới: đoạn code cần tìm được dựng lại từ tpl với giá trị mới
const LIVE_NOW = { htf: .4, p_W: 8, p_En: 30, p_RR: 20, z_poc: 3, z_ema50: .75, z_fib2b: 3, z_fib4: 1.25, add_1D: 5, slzone: 3, dowk: 4, adxw: 3, z_pocfix: .75, z_hvna: .25, z_hvnf: .25 };   // áp 12/11/2026 00:55 (cấu hình đã qua kiểm tra 2026, Trọng duyệt)   // áp 11/11/2026 21:10
const W = (id, label, finds, cur, c, group) => {
  if (id in LIVE_NOW) { cur = LIVE_NOW[id]; finds = finds.map(([f, t]) => typeof f === "string" ? [t.split("{v}").join(String(cur)), t] : [f, t]); }
  return { id, label, finds, cur, c, group };
};
const KNOBS = [
  // ngưỡng & quản lý lệnh
  W("pick", "Ngưỡng điểm vào kèo", [["const PICK_MIN=70;", "const PICK_MIN={v};"]], 70, [55, 60, 65, 70, 75, 80, 85], "Ngưỡng"),
  W("rr", "R:R tối thiểu tới TP1", [[/const MIN_RR=[^;]*;/, "const MIN_RR={v};"]], 2.5, [1.2, 1.5, 2, 2.5, 3, 4], "Ngưỡng"),
  W("mkt", "Ngưỡng điểm 'vào ngay' (tín hiệu mạnh)", [[/const STRONG_MKT=\d+;/, "const STRONG_MKT={v};"]], 6, [2, 3, 4, 5, 6, 7, 9], "Entry"),
  W("maxsl", "SL tối đa (% Entry)", [["const MAX_SL=.35;", "const MAX_SL={v};"]], .35, [.08, .12, .2, .35, .5], "SL"),
  W("slbuf", "Đệm SL dưới vùng hỗ trợ (ATR)", [[/const SL_BUF=[\d.]+;/, "const SL_BUF={v};"]], 1, [.3, .5, .7, .8, 1, 1.2, 1.5, 2], "SL"),
  // tham số riêng từng khung (null = dùng giá trị chung)
  ...["4H", "1D", "1W"].flatMap(T => [
    W("rr_" + T, `R:R tối thiểu riêng khung ${T}`, [[`RR_${T}=null`, `RR_${T}={v}`]], null, [null, 2, 2.5, 3, 3.5], "Theo khung"),
    W("slb_" + T, `Đệm SL riêng khung ${T} (ATR)`, [[`SLB_${T}=null`, `SLB_${T}={v}`]], null, [null, .3, .5, .7, .8, 1.2, 1.5], "Theo khung"),
    W("add_" + T, `Cộng thêm ngưỡng điểm khung ${T}`, [[`ADD_${T}=0`, `ADD_${T}={v}`]], 0, [-10, -5, 0, 5, 10], "Theo khung")]),
  W("slzone", "Điểm tối thiểu của vùng đặt SL", [["if(zs&&zs.w>=2)", "if(zs&&zs.w>={v})"]], 2, [1, 2, 3, 4, 5], "SL"),
  W("tp1f", "% chốt ở TP1", [[/const tpFrac=n=>n<=1\?\[1\]:\[[^;]*;/, "const tpFrac=n=>n<=1?[1]:[{v},...Array(n-1).fill((1-{v})/(n-1))];"]], .3, [.2, .25, .3, .33, .4, .5, .67, 1], "TP"),
  W("tpmin", "Khoảng cách tối thiểu TP1 (ATR)", [["z.lo>from+.3*atr&&(z.lo>from+.75*atr||z.w>=3)", "z.lo>from+.3*atr&&(z.lo>from+{v}*atr||z.w>=3)"]], .75, [.5, .75, 1, 1.5, 2], "TP"),
  W("exp", "Lệnh chờ hết hạn sau (nến)", [[/const expiry=j\.at\+\d+\*TFMS\[j\.tf\];/, "const expiry=j.at+{v}*TFMS[j.tf];"]], 8, [4, 6, 8, 10, 12, 18], "Entry"),
  W("limz", "Điểm tối thiểu vùng đặt lệnh chờ", [["const below=best(SZ.filter(z=>z.hi<px-.6*atr&&z.hi>=px-3*atr&&z.w>=3));", "const below=best(SZ.filter(z=>z.hi<px-.6*atr&&z.hi>=px-3*atr&&z.w>={v}));"]], 3, [1, 2, 3, 4, 5], "Entry"),
  W("dowk", "Số nến mỗi bên để xác định đỉnh/đáy Dow", [["function dow(c,k=5){", "function dow(c,k={v}){"]], 5, [2, 3, 4, 5, 7, 10], "Bộ lọc"),
  W("weak", "Trần điểm khi chart yếu (Trend < x)", [["if(T!=null&&T<-.3){score=Math.min(score,45);", "if(T!=null&&T<{v}){score=Math.min(score,45);"]], -.3, [-.6, -.3, 0, .2], "Ngưỡng"),
  // bộ lọc (bật/tắt)
  W("htf", "Khung lớn phải tăng (trend ≥)", [[/const HTF_MIN=[^;]*;/, "const HTF_MIN={v};"]], .3, [null, 0, .2, .3, .4, .5], "Bộ lọc"),
  W("regime", "Lọc BTC trên EMA200 (crypto)", [[/const REGIME=[^;]*;/, "const REGIME={v};"]], true, [false, true], "Bộ lọc"),
  W("a2", "Xác nhận khung nhỏ (A2)", [[/const LTF_CONFIRM=\{[^}]*\};/, "const LTF_CONFIRM={v};"]], "ON", ["OFF", "W", "ON"], "Bộ lọc",),
  W("dow", "Cổng Dow", [[/const dw=i\.dow, dowOK=[^;]*;/, "{v}"]], "LỎNG", ["TẮT", "LỎNG", "CHẶT"], "Bộ lọc"),
  W("maxtps", "Số TP tối đa", [["const MAX_TPS=2;", "const MAX_TPS={v};"]], 2, [1, 2, 3], "TP"),
  W("adxw", "Điểm ADX > 25 và +DI trội (Momentum)", [["`ADX ${A} > 25, +DI trội${ad.rising?\", ADX đang tăng\":\"\"}`,2]", "`ADX ${A} > 25, +DI trội${ad.rising?\", ADX đang tăng\":\"\"}`,{v}]"]], 2, [0, 1, 2, 3, 4], "Điểm phụ"),
  W("adxlow", "Điểm ADX < 13 cạn lực giảm (Momentum)", [["xu hướng giảm cạn lực, ủng hộ đảo chiều`,1.5]", "xu hướng giảm cạn lực, ủng hộ đảo chiều`,{v}]"]], 1.5, [0, .75, 1.5, 2.5], "Điểm phụ"),
  W("hdiv", "Cộng điểm phân kỳ dương ẩn", [["score+=3;notes.push(\"+3 phân kỳ dương ẩn", "score+={v};notes.push(\"+3 phân kỳ dương ẩn"]], 3, [0, 1.5, 3, 5, 8], "Điểm phụ"),
  // thuật toán mới (nghiên cứu 11/11/2026) — mặc định tắt
  W("regema", "Lọc BTC: giá trên EMA bao nhiêu ngày", [[/const REGIME_EMA=\d+;/, "const REGIME_EMA={v};"]], 200, [50, 100, 150, 200], "Thuật toán mới"),
  W("rsd", "Coin phải mạnh hơn BTC trong N ngày", [["const RS_DAYS=null;", "const RS_DAYS={v};"]], null, [null, 14, 30, 60, 90], "Thuật toán mới"),
  W("volx", "Bỏ kèo khi biến động > N lần bình thường", [["const VOL_X=null;", "const VOL_X={v};"]], null, [null, 1.5, 2, 2.5, 3], "Thuật toán mới"),
  W("tstop", "Thoát lệnh ì sau N nến chưa tới TP1", [["const TIME_STOP=null;", "const TIME_STOP={v};"]], null, [null, 3, 5, 7, 8, 10, 12, 15, 20], "Thuật toán mới"),
  W("trail", "Sau TP1: SL bám giá cao nhất − N×R", [["const TRAIL_R=null;", "const TRAIL_R={v};"]], null, [null, .5, 1, 1.5, 2, 3], "Thuật toán mới"),
  // trọng số /100
  ...[["Trend", "T", 30], ["Momentum", "M", 15], ["Elliott", "W", 15], ["Entry", "En", 20], ["R:R", "RR", 20], ["Divergence", "D", 10], ["SL", "SLq", 5]].map(([n, vn, w]) =>
    W("p_" + vn, `Trọng số phần ${n} (/100)`, [[`["${n}",${vn},${w}]`, `["${n}",${vn},{v}]`]], w, [0, Math.round(w / 2), w, Math.round(w * 1.5), w * 2], "Điểm /100")),
  // điểm vùng giá
  ...[
    ["z_dow", "Đỉnh/đáy pivot Dow", [['add(c[i].h,"đỉnh phản ứng trước đó (Dow)",2.5)', 'add(c[i].h,"đỉnh phản ứng trước đó (Dow)",{v})'], ['if(pl) add(c[i].l,"đáy phản ứng (Dow)",forSL?4:2.5);', 'if(pl) add(c[i].l,"đáy phản ứng (Dow)",forSL?4:{v});']], 2.5],
    ["z_swing", "Đỉnh/đáy swing lớn", [['add(p.v,"đỉnh swing lớn",2)', 'add(p.v,"đỉnh swing lớn",{v})'], ['add(p.v,p.tp==="L"?"đáy swing lớn":"đỉnh swing cũ (nay là hỗ trợ)",2);', 'add(p.v,p.tp==="L"?"đáy swing lớn":"đỉnh swing cũ (nay là hỗ trợ)",{v});']], 2],
    ["z_bos", "BOS", [['add(lastH.v,"BOS (đỉnh swing vừa bị phá)",2)', 'add(lastH.v,"BOS (đỉnh swing vừa bị phá)",{v})']], 2],
    ["z_poc", "POC anchored", [['out.push([an.poc,"POC anchored VP",2])', 'out.push([an.poc,"POC anchored VP",{v}])']], 2],
    ["z_ema200", "EMA 200", [['add(e200,"EMA 200",2)', 'add(e200,"EMA 200",{v})'], ['add(ev[200],"EMA 200",2)', 'add(ev[200],"EMA 200",{v})']], 2],
    ["z_ema50", "EMA 50", [['add(ev[50],"EMA 50",1.5)', 'add(ev[50],"EMA 50",{v})']], 1.5],
    ["z_ema21", "EMA 21", [['add(ev[21],"EMA 21",1)', 'add(ev[21],"EMA 21",{v})']], 1],
    ["z_break", "Break mây Ichimoku", [['add(ichi.top,"đã break lên mây Ichimoku",2)', 'add(ichi.top,"đã break lên mây Ichimoku",{v})']], 2],
    ["z_kccu", "Kháng cự cũ bị phá", [['add(c[i].h,"kháng cự cũ đã bị phá",1.5)', 'add(c[i].h,"kháng cự cũ đã bị phá",{v})']], 1.5],
    ["z_fib2", "Fib 0.618 sóng 2", [['"Fib 0.618 sóng 1 (vùng sóng 2)",2.5]', '"Fib 0.618 sóng 1 (vùng sóng 2)",{v}]']], 2.5],
    ["z_w1", "Đỉnh sóng 1 (sàn sóng 4)", [['out.push([v[1],"đỉnh sóng 1 (sàn của sóng 4)",2.5])', 'out.push([v[1],"đỉnh sóng 1 (sàn của sóng 4)",{v}])']], 2.5],
    ["z_rsi", "Mức RSI 30/70", [['add(K.r70,"RSI chạm 70 (quá mua)",1)', 'add(K.r70,"RSI chạm 70 (quá mua)",{v})'], ['add(K.r30,"RSI chạm 30 (quá bán)",1)', 'add(K.r30,"RSI chạm 30 (quá bán)",{v})']], 1],
    ["z_macd", "Mức MACD", [['add(K.mf.px,"MACD còn trên Signal",1)', 'add(K.mf.px,"MACD còn trên Signal",{v})']], 1],
    ["z_pocfix", "POC volume profile cố định", [["out.push([fx.poc,\"POC volume profile 250 nến\",.5])", "out.push([fx.poc,\"POC volume profile 250 nến\",{v}])"]], 0.5],
    ["z_hvna", "HVN anchored", [["out.push([v,\"HVN anchored VP\",.5])", "out.push([v,\"HVN anchored VP\",{v}])"]], 0.5],
    ["z_hvnf", "HVN cố định", [["out.push([v,\"HVN volume profile 250 nến\",.5])", "out.push([v,\"HVN volume profile 250 nến\",{v}])"]], 0.5],
    ["z_rsi45", "Vùng RSI 45–55", [["add(K.r45,\"RSI 45–55 (hỗ trợ)\",1)", "add(K.r45,\"RSI 45–55 (hỗ trợ)\",{v})"], ["add(K.r45,\"RSI 45–55 (kháng cự)\",1)", "add(K.r45,\"RSI 45–55 (kháng cự)\",{v})"], ["add(K.r55,\"RSI 45–55 (hỗ trợ)\",1)", "add(K.r55,\"RSI 45–55 (hỗ trợ)\",{v})"], ["add(K.r55,\"RSI 45–55 (kháng cự)\",1)", "add(K.r55,\"RSI 45–55 (kháng cự)\",{v})"]], 1],
    ["z_ichi", "Biên mây Ichimoku", [["if(ichi&&ichi.bot!=null){ add(ichi.bot,\"đáy mây Ichimoku\",1.2); add(ichi.top,\"đỉnh mây Ichimoku\",1.2) }", "if(ichi&&ichi.bot!=null){ add(ichi.bot,\"đáy mây Ichimoku\",{v}); add(ichi.top,\"đỉnh mây Ichimoku\",{v}) }"], ["if(ichi&&ichi.bot!=null){ add(ichi.bot,\"đáy mây Ichimoku\",1.2); add(ichi.top,\"đỉnh mây Ichimoku\",1.2);", "if(ichi&&ichi.bot!=null){ add(ichi.bot,\"đáy mây Ichimoku\",{v}); add(ichi.top,\"đỉnh mây Ichimoku\",{v});"]], 1.2],
    ["z_ewinv", "Mức sai Elliott (cho SL)", [["add(ew.inv,\"mức sai Elliott\",2)", "add(ew.inv,\"mức sai Elliott\",{v})"]], 2],
    ["z_htc", "Hỗ trợ cũ bị phá (thành kháng cự)", [["add(c[i].l,\"hỗ trợ cũ đã bị phá\",1)", "add(c[i].l,\"hỗ trợ cũ đã bị phá\",{v})"]], 1],
    ["z_macdx", "MACD cắt lên Signal", [["add(K.mf.px,\"MACD cắt lên Signal\",.5)", "add(K.mf.px,\"MACD cắt lên Signal\",{v})"]], 0.5],
    ["z_fib2b", "Fib 0.5 / 0.382 sóng 2", [["\"Fib 0.5 sóng 1 (vùng sóng 2)\",2]", "\"Fib 0.5 sóng 1 (vùng sóng 2)\",{v}]"]], 2],
    ["z_fib4", "Fib sóng 4", [["\"Fib 0.382 sóng 3 (sóng 2 sâu → sóng 4 nông)\",2.5]", "\"Fib 0.382 sóng 3 (sóng 2 sâu → sóng 4 nông)\",{v}]"], ["\"Fib 0.618 sóng 3 (sóng 2 nông → sóng 4 sâu)\",2.5]", "\"Fib 0.618 sóng 3 (sóng 2 nông → sóng 4 sâu)\",{v}]"]], 2.5],
  ].map(([id, label, finds, w]) => W(id, `Điểm vùng: ${label}`, finds, w, [0, +(w / 2).toFixed(2), w, +(w * 1.5).toFixed(2), w * 2], "Điểm vùng giá")),
];
// Các quyết định Trọng chốt, bot tối ưu không được đổi lại (hiện không có)
const FIXED_BY_TRONG = new Set([]);   // 11/11 22:00: Trọng hoàn tác 5 thay đổi lúc 21:45 (kiểm chứng cho thấy tệ hơn) → bot tối ưu được dò lại tất cả
for (let i = KNOBS.length - 1; i >= 0; i--) if (FIXED_BY_TRONG.has(KNOBS[i].id)) KNOBS.splice(i, 1);
const SPECIAL = {
  a2: { OFF: "{}", W: '{"1w":"1d"}', ON: '{"1w":"1d","1d":"4h","4h":"1h","1h":"15m"}' },
  dow: { TẮT: "const dw=i.dow, dowOK=true;", LỎNG: 'const dw=i.dow, dowOK=dw&&(dw.state===1||/^Gãy cấu trúc giảm/.test(dw.why||""));', CHẶT: "const dw=i.dow, dowOK=!!dw&&dw.state===1;" },
};
const val = (k, v) => SPECIAL[k.id] ? SPECIAL[k.id][v] : fmt(v);
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// ---------- trạng thái (phiên bản 2: chạy liên tục, nhiều chế độ dò, có kiểm tra kín) ----------
// Mục tiêu (Trọng 11/11/2026): tăng tổng R + win rate, rủi ro thấp nhất.
//   fit = tổng R ÷ sụt vốn Monte Carlo 95% — đều tính trên phần HUẤN LUYỆN 01/2023 → 12/2025 (Trọng chốt 21:56).
//   năm 2026 là phần KIỂM TRA KÍN: không dùng để chọn, chỉ để chấm xem cấu hình có hiệu quả thật trên dữ liệu chưa từng thấy.
// Chế độ dò (tự chuyển khi chế độ hiện tại hết thứ có ích để thử; nhận được thay đổi nào thì quay lại "từng thông số"):
//   coord  : đổi từng thông số một sang giá trị kề bên
//   fine   : thử giá trị nằm giữa (tinh chỉnh) quanh giá trị đang tốt nhất
//   pair   : ghép 2 thay đổi "suýt đạt" của các vòng trước (tìm cộng hưởng giữa các thông số)
//   random : đổi ngẫu nhiên 2–4 thông số cùng lúc (thoát khỏi điểm tối ưu cục bộ)
// Không bao giờ thử lại cấu hình đã thử. KHÔNG sửa bot thật.
const MODES = ["coord", "fine", "pair", "random"];
const MODE_VI = { coord: "từng thông số", fine: "tinh chỉnh giá trị giữa", pair: "ghép cặp thay đổi suýt đạt", random: "ngẫu nhiên nhiều thông số" };
const keyOf = cfg => { const s = JSON.stringify(Object.keys(cfg).sort().map(k => [k, cfg[k]])); let h1 = 2166136261, h2 = 5381;   // mã băm ngắn của cấu hình (để nhớ đã thử)
  for (let i = 0; i < s.length; i++) { const c = s.charCodeAt(i); h1 = Math.imul(h1 ^ c, 16777619); h2 = (Math.imul(h2, 33) + c) | 0; } return (h1 >>> 0).toString(36) + (h2 >>> 0).toString(36); };
const isNum = v => typeof v === "number" && isFinite(v);

function load() {
  let S = fs.existsSync(ST) ? JSON.parse(fs.readFileSync(ST, "utf8")) : null;
  if (!S || S.v !== 2) {
    if (S) { fs.mkdirSync("opt", { recursive: true }); fs.writeFileSync("opt/history-v1.json", JSON.stringify(S, null, 1)); }   // lưu lại lịch sử phiên bản cũ
    S = { v: 2, round: S ? S.round : 0, best: Object.fromEntries(KNOBS.map(k => [k.id, k.cur])), live: {}, mode: "coord", ptr: 0, modeIdle: 0,
      seen: {}, near: [], extra: {}, rounds: [], accepted: [], baseline: null, liveRef: null, tested: 0 };
  }
  return S;
}
const save = S => { fs.mkdirSync("opt", { recursive: true }); fs.writeFileSync(ST, JSON.stringify(S)); };

// áp cấu hình lên index.html → danh sách patch {find, replace} (dạng chuỗi chính xác để bt.mjs dùng)
function patches(html, cfg) {
  const out = [];
  for (const k of KNOBS) {
    if (!(k.id in cfg) || eq(cfg[k.id], k.cur)) continue;
    for (const [f, tpl] of k.finds) {
      const m = typeof f === "string" ? (html.split(f).length === 2 ? f : null) : (html.match(f) || [null])[0];
      if (!m) throw new Error(`không tìm thấy đoạn code của "${k.label}"`);
      out.push({ find: m, replace: tpl.split("{v}").join(val(k, cfg[k.id])) });
    }
  }
  return out;
}
const vals = (S, k) => { const a = [...k.c, ...((S.extra || {})[k.id] || [])];
  const nums = a.filter(isNum).sort((x, y) => x - y), oth = a.filter(v => !isNum(v)); const u = [];
  for (const v of [...oth, ...nums]) if (!u.some(x => eq(x, v))) u.push(v); return u; };
const neighbors = (S, k, cur) => { const a = vals(S, k), i = a.findIndex(v => eq(v, cur)); return i < 0 ? a.filter(v => !eq(v, cur)).slice(0, 2) : [a[i - 1], a[i + 1]].filter(v => v !== undefined); };

// ---------- plan ----------
function syncLive(S, html) {
  const liveOf = { rr: () => { const m = html.match(/const MIN_RR=([^;]*);/); return m ? +m[1] : undefined; },
    slbuf: () => { const m = html.match(/const SL_BUF=([^;]*);/); return m ? +m[1] : undefined; },
    htf: () => { const m = html.match(/const HTF_MIN=([^;]*);/); return m ? (m[1] === "null" ? null : +m[1]) : undefined; },
    regime: () => { const m = html.match(/const REGIME=([^;]*);/); return m ? m[1] === "true" : undefined; },
    a2: () => { const m = html.match(/const LTF_CONFIRM=(\{[^}]*\});/); return m ? Object.keys(SPECIAL.a2).find(k => SPECIAL.a2[k] === m[1]) : undefined; },
    dow: () => Object.keys(SPECIAL.dow).find(k => html.includes(SPECIAL.dow[k])) };
  for (const k of KNOBS) if (!(k.id in S.best)) S.best[k.id] = k.cur;
  // Trọng đổi bot thật (giá trị trong code khác lần trước) → cấu hình tốt nhất lấy theo bot thật, quên các phương án đã thử
  S.liveCur = S.liveCur || {}; let chg = false;
  for (const k of KNOBS) { if (S.liveCur[k.id] !== undefined && !eq(S.liveCur[k.id], k.cur)) { S.best[k.id] = k.cur; chg = true; } S.liveCur[k.id] = k.cur; }
  for (const id of Object.keys(S.best)) if (!KNOBS.some(k => k.id === id)) delete S.best[id];
  if (chg) { S.seen = {}; S.mode = "coord"; S.near = []; }
  for (const [id, f] of Object.entries(liveOf)) { const v = f(); if (v === undefined) continue; const k = KNOBS.find(x => x.id === id); k.cur = v;
    if (!eq(S.live[id], v)) { if (S.live[id] !== undefined || !eq(S.best[id], v)) S.best[id] = v; S.live[id] = v; } }
}
function candidates(S, usable, mode, want) {
  const out = [], tried = c => S.seen[keyOf(c)] || out.some(x => keyOf(x.cfg) === keyOf(c));
  const add = (cfg, desc, delta) => { if (!tried(cfg)) out.push({ cfg, desc, delta }); };
  if (mode === "coord") {
    let guard = 0;
    while (out.length < want && guard++ < usable.length) {
      const k = usable[S.ptr % usable.length]; S.ptr++;
      for (const v of neighbors(S, k, S.best[k.id])) add({ ...S.best, [k.id]: v }, `${k.label}: ${fmt(S.best[k.id])} → ${fmt(v)}`, { [k.id]: v });
    }
    if (S.ptr >= usable.length * (Math.floor((S.ptr - 1) / usable.length) + 1) && !out.length) return out;
  } else if (mode === "fine") {
    for (const k of usable) {
      if (out.length >= want) break; const cur = S.best[k.id]; if (!isNum(cur)) continue;
      const allInt = k.c.filter(isNum).every(Number.isInteger);
      for (const nb of neighbors(S, k, cur)) {
        if (!isNum(nb)) continue; let m = (cur + nb) / 2; m = allInt ? Math.round(m) : +m.toPrecision(3);
        if (eq(m, cur) || eq(m, nb)) continue;
        if ((S.extra[k.id] || []).length >= 4 && !(S.extra[k.id] || []).some(x => eq(x, m))) continue;   // tối đa 4 giá trị tinh chỉnh mỗi thông số — chia nhỏ hơn nữa chỉ là khớp quá khứ
        (S.extra[k.id] = S.extra[k.id] || []); if (!S.extra[k.id].some(x => eq(x, m))) S.extra[k.id].push(m);
        add({ ...S.best, [k.id]: m }, `${k.label}: ${fmt(cur)} → ${fmt(m)} (tinh chỉnh)`, { [k.id]: m });
      }
    }
  } else if (mode === "pair") {
    const N = (S.near || []).slice().sort((a, b) => b.fit - a.fit).slice(0, 10);
    for (let i = 0; i < N.length && out.length < want; i++) for (let j = i + 1; j < N.length && out.length < want; j++) {
      const a = N[i].delta, b = N[j].delta; if (Object.keys(a).some(k => k in b)) continue;
      const d = { ...a, ...b }; add({ ...S.best, ...d }, "Ghép: " + Object.entries(d).map(([id, v]) => `${KNOBS.find(k => k.id === id).label} → ${fmt(v)}`).join(" + "), d);
    }
  } else {
    let sd = (S.round * 7919 + S.tested) % 2147483647 || 1; const rnd = () => (sd = sd * 16807 % 2147483647) / 2147483647;
    for (let t = 0; t < want * 20 && out.length < want; t++) {
      const n = 2 + Math.floor(rnd() * 3), d = {};
      for (let q = 0; q < n; q++) { const k = usable[Math.floor(rnd() * usable.length)], nb = neighbors(S, k, S.best[k.id]); if (nb.length) d[k.id] = nb[Math.floor(rnd() * nb.length)]; }
      if (!Object.keys(d).length) continue;
      add({ ...S.best, ...d }, "Ngẫu nhiên: " + Object.entries(d).map(([id, v]) => `${KNOBS.find(k => k.id === id).label} → ${fmt(v)}`).join(" + "), d);
    }
  }
  return out;
}
function plan() {
  const S = load(), html = fs.readFileSync(HTML, "utf8"), WANT = +arg("configs", 12);
  const SPLIT = "toiuu-2023-2025-kin-2026";   // đổi cách chia huấn luyện / kiểm tra kín → số liệu cũ không so được nữa
  if (S.split !== SPLIT) { S.split = SPLIT; S.baseline = null; S.seen = {}; S.near = []; S.mode = "coord"; S.rounds.push({ round: S.round, mode: "coord", rows: [], accepted: [], note: "Trọng chốt: tối ưu trên 01/2023 → 12/2025, kiểm tra kín năm 2026 → bắt đầu lại từ cấu hình bot thật" }); for (const k of KNOBS) S.best[k.id] = k.cur; }
  syncLive(S, html);
  fs.rmSync(DIR, { recursive: true, force: true }); fs.mkdirSync(DIR, { recursive: true });
  const usable = KNOBS.filter(k => { try { patches(html, { [k.id]: k.c.find(v => !eq(v, k.cur)) }); return true; } catch (e) { console.log("Bỏ qua:", k.label, e.message); return false; } });
  let cand = [], tries = 0;
  while (!cand.length && tries++ < MODES.length) {             // chế độ hiện tại hết thứ để thử → chuyển chế độ kế tiếp
    const before = S.ptr; cand = candidates(S, usable, S.mode, WANT);
    if (S.mode === "coord" && S.ptr - before >= usable.length && !cand.length) cand = [];
    if (!cand.length) { S.mode = MODES[(MODES.indexOf(S.mode) + 1) % MODES.length]; S.modeIdle = 0; }
  }
  const exps = [{ name: "000-best", desc: "Cấu hình tốt nhất hiện tại (mốc của vòng)", cfg: { ...S.best } }];
  const liveCfg = Object.fromEntries(KNOBS.map(k => [k.id, k.cur]));
  if (keyOf(liveCfg) !== keyOf(S.best)) exps.push({ name: "001-live", desc: "Bot thật đang chạy (để so trên phần kiểm tra kín)", cfg: liveCfg });
  cand.forEach((c, i) => exps.push({ name: `c-${String(i).padStart(2, "0")}`, desc: c.desc, cfg: c.cfg, delta: c.delta }));
  for (const e of exps) {
    try { fs.writeFileSync(path.join(DIR, e.name + ".json"), JSON.stringify({ name: e.name, desc: e.desc, delta: e.delta, patch: patches(html, e.cfg) }, null, 1)); }
    catch (err) { console.log("Lỗi tạo thí nghiệm", e.name, err.message); }
  }
  S.round++; S.pending = exps.map(e => ({ name: e.name, desc: e.desc, delta: e.delta || null, key: keyOf(e.cfg) })); save(S);
  console.log(`Vòng ${S.round} · chế độ ${MODE_VI[S.mode]} · ${exps.length} cấu hình`);
}

// ---------- update ----------
const metric = v => { const s = v && v.seg; if (!s || !s.train || !s.train.closed) return null; const t = s.train, x = s.test || {};
  return { n: t.closed, tot: t.totalR, win: t.winRate ?? 0, exp: t.expectancy ?? -9, dd: t.maxDD_R, dd95: t.dd95 ?? t.maxDD_R, h1: s.h1 ? s.h1.expectancy ?? -9 : -9, h2: s.h2 ? s.h2.expectancy ?? -9 : -9,
    test: { n: x.closed || 0, tot: x.totalR ?? 0, win: x.winRate ?? null, exp: x.expectancy ?? null, dd: x.maxDD_R ?? null },
    tf: Object.fromEntries(Object.entries(s.tf || {}).map(([k, a]) => [k, { n: a.closed, tot: a.totalR, win: a.winRate }])),
    tfTest: Object.fromEntries(Object.entries(s.tfTest || {}).map(([k, a]) => [k, { n: a.closed, tot: a.totalR, win: a.winRate }])) }; };
const fit = m => m ? m.tot / Math.max(m.dd95, 1) : -9;
const good = (m, b) => m && fit(m) >= fit(b) * 1.03 && m.tot >= b.tot * .97 && m.win >= b.win - .5 && m.dd95 <= b.dd95 * 1.05
  && m.h1 >= b.h1 - .005 && m.h2 >= b.h2 - .005 && (m.h1 > b.h1 || m.h2 > b.h2) && m.n >= b.n * .7;
function update() {
  const S = load(), J = JSON.parse(fs.readFileSync(arg("result"), "utf8")), V = Object.fromEntries((J.variants || []).map(v => [v.name, v]));
  const base = metric(V["000-best"]); if (!base) throw new Error("thiếu kết quả 000-best (phiên bản bt.mjs cũ?)");
  const liveM = V["001-live"] ? metric(V["001-live"]) : base; S.liveRef = liveM;
  const R = { round: S.round, mode: S.mode, base, rows: [], accepted: [] };
  // gộp các thay đổi vừa nhận mà kết quả chung kém đi → hoàn tác
  const lastAcc = S.accepted.filter(a => a.round === S.round - 1);
  if (S.baseline && lastAcc.length && fit(base) < fit(S.baseline) * .98) {
    for (const a of lastAcc) { S.best[a.knob] = a.from; a.undone = true; }
    R.note = `Gộp các thay đổi vòng ${S.round - 1} làm chỉ số giảm (${fit(S.baseline).toFixed(2)} → ${fit(base).toFixed(2)}) → hoàn tác`;
    S.rounds.push(R); S.rounds = S.rounds.slice(-40); save(S); report(S); fs.writeFileSync("opt/continue", "1"); console.log(R.note); return;
  }
  const res = (S.pending || []).filter(p => p.name.startsWith("c-")).map(p => ({ p, m: metric(V[p.name]) }));
  // "đã qua kiểm tra 2026": hơn bot thật ở CẢ 2023–2025 (chỉ số) LẪN năm 2026 (tổng R) → mới đáng đem ra duyệt
  const passes = m => m && liveM && fit(m) > fit(liveM) * 1.03 && m.tot >= liveM.tot && m.test.tot > liveM.test.tot + 1 && m.test.n >= liveM.test.n * .6;
  const cands = [{ m: base, cfg: { ...S.best }, desc: "Cấu hình tốt nhất vòng " + S.round }, ...res.map(({ p, m }) => ({ m, cfg: { ...S.best, ...(p.delta || {}) }, desc: p.desc }))];
  for (const c of cands) if (passes(c.m) && (!S.verified || fit(c.m) + c.m.test.tot / 10 > fit(S.verified.m) + S.verified.m.test.tot / 10))
    S.verified = { round: S.round, desc: c.desc, cfg: c.cfg, m: c.m };
  if (S.verified && liveM && !passes(S.verified.m)) S.verified = null;   // bot thật đổi → kiểm tra lại
  for (const { p, m } of res) { S.seen[p.key] = 1; S.tested++; R.rows.push({ desc: p.desc, delta: p.delta, ...(m || {}), fit: m ? +fit(m).toFixed(2) : null, good: good(m, base) }); }
  // nhận: chế độ "từng thông số" & "tinh chỉnh" → mỗi thông số lấy phương án tốt nhất; "ghép" & "ngẫu nhiên" → lấy 1 phương án tốt nhất
  const ok = res.filter(x => good(x.m, base)).sort((a, b) => fit(b.m) - fit(a.m)), take = [];
  if (S.mode === "coord" || S.mode === "fine") { const used = new Set(); for (const x of ok) { const ks = Object.keys(x.p.delta || {}); if (ks.some(k => used.has(k))) continue; ks.forEach(k => used.add(k)); take.push(x); } }
  else if (ok.length) take.push(ok[0]);
  for (const x of take) for (const [id, v] of Object.entries(x.p.delta || {})) {
    const k = KNOBS.find(q => q.id === id); R.accepted.push({ knob: id, label: k.label, from: S.best[id], to: v });
    S.accepted.push({ round: S.round, knob: id, label: k.label, from: S.best[id], to: v, fit: +fit(x.m).toFixed(2), tot: x.m.tot, win: x.m.win, dd95: x.m.dd95 }); S.best[id] = v;
  }
  // lưu các phương án "suýt đạt" (1 thông số, chỉ số ≥ 99.5% mốc) để chế độ ghép cặp dùng
  for (const { p, m } of res) if (m && !take.some(t => t.p === p) && Object.keys(p.delta || {}).length === 1 && fit(m) >= fit(base) * .995) S.near.push({ delta: p.delta, fit: fit(m), round: S.round });
  S.near = S.near.filter(x => Object.entries(x.delta).every(([k, v]) => !eq(S.best[k], v))).sort((a, b) => b.fit - a.fit).slice(0, 30);
  if (take.length) { S.mode = "coord"; S.modeIdle = 0; S.seen = {}; }       // cấu hình tốt nhất đổi → mọi phương án cũ cần thử lại trên nền mới
  else if (S.mode !== "coord") { S.modeIdle++; if (S.modeIdle >= (S.mode === "random" ? 8 : 3)) { S.mode = MODES[(MODES.indexOf(S.mode) + 1) % MODES.length]; S.modeIdle = 0; } }
  S.baseline = base; S.rounds.push(R); S.rounds = S.rounds.slice(-40);
  save(S); report(S); fs.writeFileSync("opt/continue", "1");      // chạy vĩnh viễn
  console.log(`Vòng ${S.round}: ${R.rows.length} phương án · nhận ${R.accepted.length} thay đổi · chế độ kế tiếp: ${MODE_VI[S.mode]}`);
}

// ---------- báo cáo ----------
function report(S) {
  const live = Object.fromEntries(KNOBS.map(k => [k.id, k.cur])), diff = KNOBS.filter(k => !eq(S.best[k.id], live[k.id]));
  const b = S.baseline, lv = S.liveRef || b, f2 = x => x == null ? "–" : x;
  const row = (n, m) => m ? `| ${n} | ${m.n} | ${m.win}% | ${m.tot}R | ${m.exp} | ${m.dd}R | ${m.dd95}R | ${fit(m).toFixed(2)} | ${m.test.n} | ${f2(m.test.win)}% | ${m.test.tot}R | ${f2(m.test.exp)} | ${f2(m.test.dd)}R |` : `| ${n} | – |`;
  const L = [`# Tối ưu tự động (chạy liên tục) — vòng ${S.round}`, "",
    "Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).", "",
    "**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = tổng R ÷ sụt vốn Monte Carlo 95% (xáo trộn thứ tự lệnh 2000 lần, lấy mức sụt vốn mà 95% trường hợp không vượt quá).",
    "Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.",
    "Nhận thay đổi khi: chỉ số tăng ≥ 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, sụt vốn MC95 không tệ hơn 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.",
    "⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.", "",
    `Chế độ dò hiện tại: **${MODE_VI[S.mode]}** · đã thử ${S.tested} phương án.`, "",
    "## Bot thật so với cấu hình tốt nhất", "", "Cấu hình mới chỉ đáng tin khi THẮNG bot thật ở phần kiểm tra kín (năm 2026). Thua ở đó thì bỏ, dù phần huấn luyện đẹp đến đâu.", "",
    "| | Lệnh 2023–2025 | Win rate | Tổng R | R/lệnh | Sụt vốn lớn nhất | Sụt vốn MC95 | Tổng R ÷ MC95 | Lệnh 2026 (kín) | Win rate | Tổng R | R/lệnh | Sụt vốn |",
    "|---|---|---|---|---|---|---|---|---|---|---|---|---|", row("Bot thật", lv), row("**Tốt nhất**", b), ""];
  if (b && b.tf) { const tfs = Object.keys({ ...b.tf, ...b.tfTest });
    L.push("## Theo khung (cấu hình tốt nhất)", "", "| Khung | Lệnh 2023–2025 | Win rate | Tổng R | Lệnh 2026 (kiểm tra kín) | Win rate | Tổng R |", "|---|---|---|---|---|---|---|",
      ...tfs.map(t => { const a = b.tf[t] || {}, c = b.tfTest[t] || {}; return `| ${t.toUpperCase()} | ${a.n ?? 0} | ${a.win ?? "–"}% | ${a.tot ?? 0}R | ${c.n ?? 0} | ${c.win ?? "–"}% | ${c.tot ?? 0}R |`; }), ""); }
  { const V2 = S.verified;
    L.push("## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)", "");
    if (!V2) L.push("Chưa có cấu hình nào vừa hơn bot thật ở 2023–2025 vừa hơn ở năm 2026.", "");
    else { const dv = KNOBS.filter(k => !eq(V2.cfg[k.id], live[k.id]));
      L.push(`Tìm thấy ở vòng ${V2.round} (${V2.desc}).`, "", "| | Lệnh 2023–2025 | Win rate | Tổng R | Sụt vốn MC95 | Chỉ số | Lệnh 2026 | Win rate | Tổng R 2026 |", "|---|---|---|---|---|---|---|---|---|",
        ...[["Bot thật", lv], ["**Đề xuất**", V2.m]].map(([n, m]) => m ? `| ${n} | ${m.n} | ${m.win}% | ${m.tot}R | ${m.dd95}R | ${fit(m).toFixed(2)} | ${m.test.n} | ${f2(m.test.win)}% | ${m.test.tot}R |` : `| ${n} | – |`), "",
        "| Thông số | Bot thật | Đề xuất |", "|---|---|---|", ...dv.map(k => `| ${k.label} | ${fmt(live[k.id])} | **${fmt(V2.cfg[k.id])}** |`), ""); } }
  L.push("## Thông số khác với bot thật", "", "| Thông số | Bot thật | Đề xuất |", "|---|---|---|", ...(diff.length ? diff.map(k => `| ${k.label} | ${fmt(live[k.id])} | **${fmt(S.best[k.id])}** |`) : ["| (chưa có) | | |"]), "");
  const acc = S.accepted.slice(-40).reverse();
  L.push("## Các thay đổi đã nhận (mới nhất trước)", "", "| Vòng | Thông số | Từ → Thành | Tổng R | Win rate | MC95 | Chỉ số |", "|---|---|---|---|---|---|---|",
    ...(acc.length ? acc.map(a => `| ${a.round}${a.undone ? " (hoàn tác)" : ""} | ${a.label} | ${fmt(a.from)} → ${fmt(a.to)} | ${a.tot}R | ${a.win}% | ${a.dd95}R | ${a.fit} |`) : ["| | (chưa có) | | | | | |"]), "");
  L.push("## 10 vòng gần nhất", "");
  for (const r of S.rounds.slice(-10).reverse()) {
    L.push(`### Vòng ${r.round} — ${MODE_VI[r.mode] || r.mode}` + (r.base ? ` · mốc: tổng ${r.base.tot}R, win ${r.base.win}%, MC95 ${r.base.dd95}R, chỉ số ${fit(r.base).toFixed(2)}` : ""));
    if (r.note) L.push(r.note);
    if (r.rows.length) { L.push("", "| Phương án | Tổng R | Win rate | R/lệnh | MC95 | Chỉ số | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |", "|---|---|---|---|---|---|---|---|---|---|");
      for (const x of r.rows) L.push(`| ${x.desc} | ${f2(x.tot)} | ${f2(x.win)}% | ${f2(x.exp)} | ${f2(x.dd95)} | ${f2(x.fit)} | ${f2(x.h1)} | ${f2(x.h2)} | ${x.test ? x.test.tot : "–"} | ${x.good ? "✅" : ""} |`); }
    if (r.accepted.length) L.push("", "Nhận: " + r.accepted.map(a => `${a.label} ${fmt(a.from)} → ${fmt(a.to)}`).join(" · "));
    L.push("");
  }
  fs.writeFileSync(REP, L.join("\n"));
}

const cmd = process.argv[2];
if (cmd === "plan") plan(); else if (cmd === "update") update(); else if (cmd === "report") report(load());
else console.log("node opt.mjs plan|update --result file.json|report");
