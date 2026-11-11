// Bot tối ưu tự động thuật toán (dò từng thông số / điểm số một, trên backtest TOÀN BỘ dữ liệu có phí + funding)
// - plan  : tạo các thí nghiệm cho vòng kế tiếp (thư mục experiments-opt/), mỗi thí nghiệm = cấu hình tốt nhất hiện tại + đổi 1 thông số
// - update: đọc kết quả backtest của vòng, chỉ nhận thay đổi nào tốt hơn RÕ RÀNG và ỔN ĐỊNH (cả nửa đầu lẫn nửa sau dữ liệu),
//           không làm sụt vốn tệ hơn đáng kể, không làm mất quá nửa số lệnh; ghi báo cáo opt/report.md
// KHÔNG sửa bot thật: cấu hình tốt nhất chỉ là đề xuất để Trọng duyệt.
import fs from "node:fs";
import path from "node:path";

const HTML = "index.html", DIR = "experiments-opt", ST = "opt/state.json", REP = "opt/report.md";
const arg = (k, d) => { const i = process.argv.indexOf("--" + k); return i > 0 ? process.argv[i + 1] : d; };
const fmt = v => v === null ? "null" : String(v);

// ---------- danh sách thông số được dò ----------
// find: đoạn code gốc (phải có đúng 1 lần trong index.html) · tpl: đoạn thay thế, {v} = giá trị · c: các giá trị thử (theo thứ tự)
const W = (id, label, finds, cur, c, group) => ({ id, label, finds, cur, c, group });
const KNOBS = [
  // ngưỡng & quản lý lệnh
  W("pick", "Ngưỡng điểm vào kèo", [["const PICK_MIN=70;", "const PICK_MIN={v};"]], 70, [55, 60, 65, 70, 75, 80, 85], "Ngưỡng"),
  W("rr", "R:R tối thiểu tới TP1", [[/const MIN_RR=[^;]*;/, "const MIN_RR={v};"]], 2.5, [1.2, 1.5, 2, 2.5, 3, 4], "Ngưỡng"),
  W("mkt", "Ngưỡng điểm 'vào ngay' (tín hiệu mạnh)", [[/const STRONG_MKT=\d+;/, "const STRONG_MKT={v};"]], 6, [2, 3, 4, 5, 6, 7, 9], "Entry"),
  W("maxsl", "SL tối đa (% Entry)", [["const MAX_SL=.35;", "const MAX_SL={v};"]], .35, [.08, .12, .2, .35, .5], "SL"),
  W("slbuf", "Đệm SL dưới vùng hỗ trợ (ATR)", [[/stop=zs\.lo-[\d.]+\*atr;/, "stop=zs.lo-{v}*atr;"]], 1, [.3, .5, .7, .8, 1, 1.2, 1.5, 2], "SL"),
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
  ].map(([id, label, finds, w]) => W(id, `Điểm vùng: ${label}`, finds, w, [0, +(w / 2).toFixed(2), w, +(w * 1.5).toFixed(2), w * 2], "Điểm vùng giá")),
];
const SPECIAL = {
  a2: { OFF: "{}", W: '{"1w":"1d"}', ON: '{"1w":"1d","1d":"4h","4h":"1h","1h":"15m"}' },
  dow: { TẮT: "const dw=i.dow, dowOK=true;", LỎNG: 'const dw=i.dow, dowOK=dw&&(dw.state===1||/^Gãy cấu trúc giảm/.test(dw.why||""));', CHẶT: "const dw=i.dow, dowOK=!!dw&&dw.state===1;" },
};
const val = (k, v) => SPECIAL[k.id] ? SPECIAL[k.id][v] : fmt(v);
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// ---------- trạng thái ----------
function load() {
  if (fs.existsSync(ST)) return JSON.parse(fs.readFileSync(ST, "utf8"));
  return { round: 0, ptr: 0, best: Object.fromEntries(KNOBS.map(k => [k.id, k.cur])), baseline: null, tested: {}, history: [], stale: 0, done: false };
}
const save = S => { fs.mkdirSync("opt", { recursive: true }); fs.writeFileSync(ST, JSON.stringify(S, null, 1)); };

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

// ---------- plan ----------
function plan() {
  const S = load(), html = fs.readFileSync(HTML, "utf8"), BATCH = +arg("batch", 6);
  if (S.done) { console.log("Đã hội tụ, không còn gì để thử."); fs.writeFileSync("opt/continue", "0"); return; }
  // giá trị hiện tại trong code có thể đã đổi (Trọng duyệt áp dụng) → đồng bộ "cur" của các thông số đặc biệt
  // đồng bộ với bot thật: nếu Trọng đã đổi bộ lọc trên bot thật thì cấu hình gốc của tối ưu cũng đổi theo
  const liveOf = { rr: () => { const m = html.match(/const MIN_RR=([^;]*);/); return m ? +m[1] : undefined; },
    htf: () => { const m = html.match(/const HTF_MIN=([^;]*);/); return m ? (m[1] === "null" ? null : +m[1]) : undefined; },
    regime: () => { const m = html.match(/const REGIME=([^;]*);/); return m ? m[1] === "true" : undefined; },
    a2: () => { const m = html.match(/const LTF_CONFIRM=(\{[^}]*\});/); return m ? Object.keys(SPECIAL.a2).find(k => SPECIAL.a2[k] === m[1]) : undefined; },
    dow: () => Object.keys(SPECIAL.dow).find(k => html.includes(SPECIAL.dow[k])) };
  S.live = S.live || {};
  for (const k of KNOBS) if (!(k.id in S.best)) S.best[k.id] = k.cur;      // thông số mới thêm sau khi tối ưu đã chạy → lấy giá trị đang dùng (tránh hiện "undefined")
  for (const [id, f] of Object.entries(liveOf)) { const v = f(); if (v === undefined) continue; const k = KNOBS.find(x => x.id === id); k.cur = v;
    if (!eq(S.live[id], v)) { if (S.live[id] !== undefined || !eq(S.best[id], v)) S.best[id] = v; S.live[id] = v; } }
  fs.rmSync(DIR, { recursive: true, force: true }); fs.mkdirSync(DIR, { recursive: true });
  const usable = KNOBS.filter(k => { try { patches(html, { [k.id]: k.c.find(v => !eq(v, k.cur)) }); return true; } catch (e) { console.log("Bỏ qua:", k.label, e.message); return false; } });
  const exps = [{ name: "000-best", desc: "Cấu hình tốt nhất hiện tại (mốc so sánh của vòng)", cfg: { ...S.best } }];
  const batch = []; let guard = 0;
  while (batch.length < BATCH && guard++ < usable.length) { batch.push(usable[S.ptr % usable.length]); S.ptr++; }
  for (const k of batch) {
    const i = k.c.findIndex(v => eq(v, S.best[k.id])), cand = [k.c[i - 1], k.c[i + 1]].filter(v => v !== undefined);
    for (const v of cand) exps.push({ name: `k-${k.id}-${fmt(v)}`, desc: `${k.label}: ${fmt(S.best[k.id])} → ${fmt(v)}`, cfg: { ...S.best, [k.id]: v }, knob: k.id, v });
  }
  for (const e of exps) {
    try { fs.writeFileSync(path.join(DIR, e.name.replace(/[^\w.-]/g, "_") + ".json"), JSON.stringify({ name: e.name, desc: e.desc, knob: e.knob, v: e.v, patch: patches(html, e.cfg) }, null, 1)); }
    catch (err) { console.log("Lỗi tạo thí nghiệm", e.name, err.message); }
  }
  S.round++; S.batch = batch.map(k => k.id); save(S);
  console.log(`Vòng ${S.round}: ${exps.length} cấu hình · thông số: ${batch.map(k => k.label).join(", ")}`);
}

// ---------- update ----------
function update() {
  const S = load(), file = arg("result");
  const J = JSON.parse(fs.readFileSync(file, "utf8")), V = Object.fromEntries((J.variants || []).map(v => [v.name, v]));
  const metric = v => v && v.R && v.R.all ? { n: v.R.all.closed, exp: v.R.all.expectancy ?? -9, win: v.R.all.winRate ?? 0, dd: v.R.all.maxDD_R, tot: v.R.all.totalR, h1: v.half1 ? v.half1.expectancy ?? -9 : -9, h2: v.half2 ? v.half2.expectancy ?? -9 : -9 } : null;
  const base = metric(V["000-best"]); if (!base) throw new Error("thiếu kết quả 000-best");
  // nếu cấu hình gộp tệ hơn mốc vòng trước → hoàn tác lần nhận gần nhất
  if (S.baseline && base.exp < S.baseline.exp - .01 && S.history.length && S.history.at(-1).accepted.length) {
    const last = S.history.at(-1);
    for (const a of last.accepted) S.best[a.knob] = a.from;
    S.history.push({ round: S.round, note: `Gộp các thay đổi vòng ${last.round} làm kết quả giảm (${S.baseline.exp} → ${base.exp}R/lệnh) → hoàn tác`, accepted: [], base });
    save(S); report(S); fs.writeFileSync("opt/continue", "1"); return;
  }
  const rows = [], acc = [];
  for (const id of S.batch || []) {
    const k = KNOBS.find(x => x.id === id); let bestC = null;
    for (const [name, v] of Object.entries(V)) {
      if (!name.startsWith(`k-${id}-`)) continue;
      const m = metric(v), val0 = v.name.slice(`k-${id}-`.length);
      const good = m && m.exp >= base.exp + .005 && m.h1 >= base.h1 - .005 && m.h2 >= base.h2 - .005 && (m.h1 > base.h1 || m.h2 > base.h2)
        && m.dd <= base.dd * 1.1 + 1 && m.n >= base.n * .5 && m.tot >= base.tot * .9;   // giảm rủi ro: sụt vốn không tệ hơn 10%, tổng R không giảm quá 10%
      const score = m ? Math.max(0, Math.min(10, +(5 + (m.exp - base.exp) / .05).toFixed(1))) : null;
      rows.push({ knob: id, label: k.label, from: S.best[id], to: val0, ...m, score, good });
      S.tested[`${id}=${val0}`] = { round: S.round, ...m, score };
      if (good && (!bestC || m.exp > bestC.m.exp || (m.exp === bestC.m.exp && m.win > bestC.m.win))) bestC = { m, val0 };
    }
    if (bestC) { const kv = k.c.find(x => fmt(x) === bestC.val0); acc.push({ knob: id, label: k.label, from: S.best[id], to: kv, exp: bestC.m.exp }); S.best[id] = kv; }
  }
  S.stale = acc.length ? 0 : (S.stale || 0) + (S.batch || []).length;
  S.baseline = base;
  S.history.push({ round: S.round, base, accepted: acc, rows });
  const usable = KNOBS.length;
  if (S.stale >= usable || S.round >= +arg("max", 30)) S.done = true;
  save(S); report(S);
  fs.writeFileSync("opt/continue", S.done ? "0" : "1");
  console.log(`Vòng ${S.round}: nhận ${acc.length} thay đổi · ${S.done ? "DỪNG (hội tụ / đủ vòng)" : "tiếp tục"}`);
}

// ---------- báo cáo ----------
function report(S) {
  const live = Object.fromEntries(KNOBS.map(k => [k.id, k.cur])), diff = KNOBS.filter(k => !eq(S.best[k.id], live[k.id]));
  const last = [...S.history].reverse().find(h => h.base);
  const first = S.history.find(h => h.base);
  const L = [`# Tối ưu tự động — vòng ${S.round}${S.done ? " (đã dừng)" : ""}`, "",
    "Đây là báo cáo để thảo luận. Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt.", "",
    "Mỗi vòng: backtest toàn bộ dữ liệu (từ 2018, mọi nến, có phí + funding), đổi từng thông số một so với cấu hình tốt nhất hiện tại. Chỉ nhận thay đổi khi R/lệnh tăng ≥ 0.005R, KHÔNG xấu đi ở cả nửa đầu lẫn nửa sau dữ liệu, sụt vốn không tệ hơn 10%, tổng R không giảm quá 10%, số lệnh không giảm quá nửa.", ""];
  if (first && last) L.push(`**Mốc ban đầu:** ${first.base.n} lệnh · win rate ${first.base.win}% · ${first.base.exp}R/lệnh · tổng ${first.base.tot}R · sụt vốn ${first.base.dd}R`,
    `**Cấu hình tốt nhất hiện tại:** ${last.base.n} lệnh · win rate ${last.base.win}% · ${last.base.exp}R/lệnh · tổng ${last.base.tot}R · sụt vốn ${last.base.dd}R`, "");
  L.push("## Thông số khác với bot thật", "", "| Thông số | Bot thật | Đề xuất |", "|---|---|---|", ...(diff.length ? diff.map(k => `| ${k.label} | ${fmt(live[k.id])} | **${fmt(S.best[k.id])}** |`) : ["| (chưa có) | | |"]), "");
  L.push("## Lịch sử các vòng", "");
  for (const h of S.history) {
    L.push(`### Vòng ${h.round}` + (h.base ? ` — mốc: ${h.base.exp}R/lệnh, win ${h.base.win}%, DD ${h.base.dd}R, ${h.base.n} lệnh` : ""));
    if (h.note) L.push(h.note);
    if (h.rows && h.rows.length) {
      L.push("", "| Thông số | Từ → Thử | Điểm 0–10 | R/lệnh | Win rate | Lệnh | Max DD | Nửa đầu | Nửa sau | Nhận? |", "|---|---|---|---|---|---|---|---|---|---|");
      for (const r of h.rows) L.push(`| ${r.label} | ${fmt(r.from)} → ${r.to} | ${r.score ?? "–"} | ${r.exp ?? "–"} | ${r.win ?? "–"}% | ${r.n ?? "–"} | ${r.dd ?? "–"} | ${r.h1 ?? "–"} | ${r.h2 ?? "–"} | ${r.good ? "✅" : ""} |`);
    }
    if (h.accepted && h.accepted.length) L.push("", "Nhận: " + h.accepted.map(a => `${a.label} ${fmt(a.from)} → ${fmt(a.to)}`).join(" · "));
    L.push("");
  }
  fs.writeFileSync(REP, L.join("\n"));
}

const cmd = process.argv[2];
if (cmd === "plan") plan(); else if (cmd === "update") update(); else if (cmd === "report") report(load());
else console.log("node opt.mjs plan|update --result file.json|report");
