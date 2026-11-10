// Arcus (Robinhood Chain) · tự đặt lệnh theo kèo của radar
// - Chỉ chạy khi có ARCUS_ADDRESS + ARCUS_PRIVATE_KEY trong GitHub Secrets
// - Perp đòn bẩy 1x (tương đương mua spot), lệnh vào kèm SL + TP1 (50%) đặt sẵn trên sàn
// - Chạm TP1: huỷ SL cũ, đặt SL về Entry + TP2 cho phần còn lại
// - KHÔNG ghi số dư / khối lượng / địa chỉ ví vào state.json hay log (repo công khai)
import crypto from "node:crypto";

const ENV = (process.env.ARCUS_ENV || "testnet").toLowerCase() === "mainnet" ? "mainnet" : "testnet";
const BASE = process.env.ARCUS_BASE || (ENV === "mainnet" ? "https://api.arcus.xyz" : "https://api.testnet.arcus.xyz");
const ADDR = (process.env.ARCUS_ADDRESS || "").trim().toLowerCase();
const AI = parseInt(process.env.ARCUS_ACCOUNT_INDEX || "0", 10) || 0;
const MODE = (process.env.TRADE_MODE || "selftest").toLowerCase();          // auto · manage (chỉ quản lý lệnh cũ) · off
const USD = parseFloat(process.env.TRADE_USD || "50") || 50;
const MAX_OPEN = parseInt(process.env.TRADE_MAX_OPEN || "5", 10) || 5;
const MAX_FUND_APR = parseFloat(process.env.TRADE_MAX_FUNDING_APR || "30");
const RISK = parseFloat(process.env.TRADE_RISK_USD || "0") || 0;          // > 0: mỗi lệnh lỗ tối đa RISK USDG khi dính SL (1R)
const LIQ_USE = Math.min(.95, Math.max(.3, parseFloat(process.env.TRADE_LIQ_BUFFER || "0.7") || .7));   // SL chiếm tối đa 70% khoảng cách tới giá thanh lý
const TAG = ENV === "mainnet" ? "Arcus" : "Arcus testnet";

/* ---------- khoá Ed25519 ---------- */
function loadKey() {
  let raw = (process.env.ARCUS_PRIVATE_KEY || "").trim();
  if (!raw) return null;
  if (raw.includes("BEGIN")) return crypto.createPrivateKey(raw.replace(/\\n/g, "\n"));
  raw = raw.replace(/^0x/i, "").replace(/\s+/g, "");
  let seed;
  if (/^[0-9a-f]{64}$/i.test(raw) || /^[0-9a-f]{128}$/i.test(raw)) seed = Buffer.from(raw.slice(0, 64), "hex");
  else { const b = Buffer.from(raw, "base64"); if (b.length === 32 || b.length === 64) seed = b.subarray(0, 32); }
  if (!seed) throw new Error("ARCUS_PRIVATE_KEY sai định dạng (cần PEM, hex 64 ký tự hoặc base64)");
  const der = Buffer.concat([Buffer.from("302e020100300506032b657004220420", "hex"), seed]);
  return crypto.createPrivateKey({ key: der, format: "der", type: "pkcs8" });
}
let KEY = null, PUB = "";
const sign = msg => crypto.sign(null, Buffer.from(msg, "utf8"), KEY).toString("hex");

/* ---------- JSON chuẩn: khoá xếp a→z, không khoảng trắng, BigInt giữ nguyên chữ số ---------- */
function canon(v) {
  if (typeof v === "bigint") return v.toString();
  if (v === null || typeof v !== "object") return JSON.stringify(v);
  if (Array.isArray(v)) return "[" + v.map(canon).join(",") + "]";
  return "{" + Object.keys(v).filter(k => v[k] !== undefined).sort().map(k => JSON.stringify(k) + ":" + canon(v[k])).join(",") + "}";
}
let lastNs = 0n;
function nowNs() { let t = BigInt(Date.now()) * 1000000n; if (t <= lastNs) t = lastNs + 1n; lastNs = t; return t; }
const goodTilUs = () => BigInt(Date.now() + 40 * 864e5) * 1000n;   // ≥ 1 tháng

/* ---------- số thập phân theo tick / step ---------- */
const decs = s => { s = String(s); return s.includes(".") ? s.split(".")[1].replace(/0+$/, "").length : 0; };
function quant(value, unit, mode) {                   // → { n: BigInt số đơn vị, s: chuỗi thập phân }
  const d = decs(unit), sc = 10 ** d, u = Math.round(parseFloat(unit) * sc);
  const x = value * sc / u, k = mode === "up" ? Math.ceil(x - 1e-9) : mode === "down" ? Math.floor(x + 1e-9) : Math.round(x);
  const n = BigInt(Math.max(0, k)), scaled = n * BigInt(u);
  let s = scaled.toString().padStart(d + 1, "0");
  if (d) s = s.slice(0, -d) + "." + s.slice(-d);
  return { n, s };
}

/* ---------- gọi API ---------- */
async function api(method, path, { query = {}, body, headers = {} } = {}) {
  const qs = new URLSearchParams(query).toString();
  const r = await fetch(BASE + path + (qs ? "?" + qs : ""), {
    method, headers: { "Content-Type": "application/json", "Accept": "application/json", ...headers },
    body: body === undefined ? undefined : canon(body),
  });
  const txt = await r.text(); let j = null; try { j = JSON.parse(txt); } catch (e) { }
  if (!r.ok && r.status !== 202) {
    const msg = (j && (j.error || j.message || j.rejectReason || j.rejectionReason)) || txt.slice(0, 160);
    const e = new Error(`HTTP ${r.status} ${path}: ${String(msg).replace(ADDR, "0x…")}`); e.status = r.status; e.body = j; throw e;
  }
  return j || {};
}
const authHdr = (ts, sig) => ({ "X-API-Key": PUB, "X-Timestamp": ts.toString(), "X-Signature": sig });

/* ---------- dữ liệu sàn ---------- */
let MK = null;
async function markets() {
  if (MK) return MK;
  const j = await api("GET", "/v1/markets"); MK = new Map();
  for (const m of j.markets || []) {
    if (String(m.status).toUpperCase() !== "ONLINE") continue;
    const base = String(m.baseAsset || (m.marketDisplayName || "").split("-")[0]).toUpperCase();
    MK.set(base, m);
  }
  return MK;
}
const mkPrice = m => parseFloat(m.oraclePrice || m.markPrice || m.markPx || m.indexPrice || m.lastTradePrice || 0);
async function positions() {
  const j = await api("GET", "/v1/positions", { query: { address: ADDR, accountIndex: AI } });
  const out = new Map(); for (const p of Object.values(j.positions || {})) out.set(Number(p.marketId), p); return out;
}
async function openOrders() {
  const j = await api("GET", "/v1/openOrders", { query: { address: ADDR, accountIndex: AI, status: "OPEN,UNTRIGGERED" } });
  const out = new Map(); for (const o of j.orders || []) if (o.clientId) out.set(o.clientId, o); return out;
}
async function freeCollateral() {
  try { const j = await api("GET", "/v1/account", { query: { address: ADDR, accountIndex: AI } }); return parseFloat(j.freeCollateral ?? j.equity ?? 0); }
  catch (e) { if (e.status === 404) return 0; throw e; }
}
async function fundingApr(marketId) {
  const j = await api("GET", "/v1/fundingRates", { query: { market: marketId, limit: 24 } });
  const r = (j.fundingRates || []).map(x => parseFloat(x.fundingRate)).filter(Number.isFinite);
  return r.length ? r.reduce((a, b) => a + b, 0) / r.length * 8760 * 100 : 0;
}

/* ---------- lệnh ---------- */
// o: { m, side, type, qty:{n,s}, px:{n,s}, tif, cid, tpsl, stop:{s}, reduce, pos }
function orderRow(o, ts, gt) {
  const payload = { ad: ADDR, ai: AI, ct: ts, g: gt * 1000n, m: Number(o.m.marketId), op: o.tpsl ? 4 : 1,
    p: o.px.n, q: o.qty.n, r: o.reduce ? 1 : 0, s: o.side === "BUY" ? 0 : 1, t: { GTT: 0, FOK: 1, IOC: 2, ALO: 3 }[o.tif], v: 1 };
  if (o.cid) payload.c = o.cid;
  const sig = sign(canon(payload));
  const row = { address: ADDR, marketId: Number(o.m.marketId), accountIndex: AI, orderSide: o.side, orderType: o.type,
    quantity: o.qty.s, price: o.px.s, timeInForce: o.tif, goodTilTime: gt.toString(), reduceOnly: !!o.reduce,
    clientTime: ts.toString(), timestamp: ts, signature: sig };
  if (o.cid) row.clientId = o.cid;
  if (o.tpsl) { row.tpslType = o.tpsl; row.stopPrice = o.stop.s; if (o.pos) row.isPositionTPSL = true; }
  return { row, sig };
}
async function batch(grouping, list) {
  const ts = nowNs(), gt = goodTilUs(), rows = list.map(o => orderRow(o, ts, gt));
  const j = await api("POST", "/v1/batchPlaceOrders", { query: { address: ADDR }, headers: authHdr(ts, rows[0].sig),
    body: { grouping, orders: rows.map(x => x.row) } });
  const bad = (j.responses || []).filter(x => String(x.status || "").toUpperCase() === "ERROR" || x.error || x.rejectionReason);
  if (bad.length) throw new Error(bad.map(x => x.error || x.rejectionReason || x.status).join("; "));
  return j;
}
async function cancelCid(m, cid) {
  const ts = nowNs(), payload = { ad: ADDR, ai: AI, c: cid, ct: ts, m: Number(m.marketId), op: 2, v: 1 };
  try {
    await api("POST", "/v1/cancelOrder", { query: { address: ADDR }, headers: authHdr(ts, sign(canon(payload))),
      body: { address: ADDR, marketId: Number(m.marketId), accountIndex: AI, kind: "clientId", clientId: cid, timestamp: ts } });
  } catch (e) { if (!/NOT_FOUND|not found/i.test(e.message)) throw e; }
}
async function setLev(m, lev, isolated) {
  const ts = nowNs(), body = { accountIndex: AI, address: ADDR, leverage: lev, marketId: Number(m.marketId) };
  if (isolated) body.isolated = true;
  return api("POST", "/v1/setLeverage", { query: { address: ADDR }, headers: authHdr(ts, sign(ts.toString() + "setLeverage" + canon(body))), body });
}
async function setLev1(m) {
  try { await setLev(m, 1, false); }
  catch (e) { console.log(`${TAG}: không đặt được đòn bẩy 1x cho ${m.marketDisplayName} (${e.message})`); }
}
const tick = m => m.tickSize, step = m => m.stepSize;
// đòn bẩy tối đa và tỉ lệ ký quỹ duy trì của sàn (đọc nhiều tên trường; không rõ thì dùng mức an toàn)
function levInfo(m) {
  const num = (...k) => { for (const x of k) { const v = parseFloat(m[x]); if (v > 0) return v; } return null; };
  const imf = num("initialMarginFraction", "imf", "initialMarginRatio");
  const maxLev = num("maxLeverage", "maxLev", "leverageMax") || (imf ? 1 / imf : null);
  const lev = maxLev || 5, mmr = num("maintenanceMarginFraction", "mmf", "maintenanceMarginRatio") || .6 / lev;
  return { maxLev: Math.floor(lev), mmr, known: !!maxLev };
}
// R cố định: khối lượng = RISK / %SL; đòn bẩy cao nhất mà SL vẫn chỉ chiếm ≤ LIQ_USE khoảng cách tới giá thanh lý (isolated)
function riskPlan(m, entry, stop) {
  const sl = (entry - stop) / entry, { maxLev, mmr } = levInfo(m);
  const notional = RISK / sl, levLiq = 1 / (sl / LIQ_USE + mmr);
  const lev = Math.max(1, Math.min(maxLev, Math.floor(levLiq)));
  const liqDist = 1 / lev - mmr, margin = notional / lev;
  return { sl, notional, lev, margin, liq: entry * (1 - liqDist), slShare: sl / liqDist };
}
const sellLeg = (m, cid, kind, stop, qty, pos) => ({ m, side: "SELL", type: "MARKET", tif: "IOC", tpsl: kind, reduce: true, pos, cid,
  qty: pos ? { n: 0n, s: "0" } : qty, stop: quant(stop, tick(m), "round"), px: quant(stop * .93, tick(m), "down") });

/* ---------- chạy mỗi lượt quét ---------- */
export async function arcusRun({ state, newIds, outbox, errors, esc, link }) {
  if (!ADDR || !process.env.ARCUS_PRIVATE_KEY) return;
  if (MODE === "off") { console.log(`${TAG}: đang tắt (TRADE_MODE=off)`); return; }
  try { KEY = loadKey(); PUB = crypto.createPublicKey(KEY).export({ format: "der", type: "spki" }).subarray(-32).toString("hex"); }
  catch (e) { errors.push(`${TAG}: khoá lỗi (${e.message})`); return; }
  if (process.env.ARCUS_API_KEY && process.env.ARCUS_API_KEY.replace(/^0x/, "").toLowerCase() !== PUB) errors.push(`${TAG}: ARCUS_API_KEY không khớp với ARCUS_PRIVATE_KEY`);

  let M, P, O;
  try { [M, P, O] = await Promise.all([markets(), positions(), openOrders()]); }
  catch (e) { errors.push(`${TAG}: không đọc được tài khoản (${e.message})`); return; }
  const key = j => (j.src === "st" ? j.sym : j.base).toUpperCase();
  const live = st => ["placed", "open", "be"].includes(st);
  const say = s => outbox.push(`🤖 <b>${TAG}</b> · ${s}`);

  // 0) tự kiểm tra (TRADE_MODE=selftest): đặt 1 lệnh chờ mua BTC thấp hơn giá 30% (không thể khớp) rồi huỷ ngay
  if (MODE === "selftest") {
    state.arcusMeta = state.arcusMeta || {};
    if (state.arcusMeta.selftest && state.arcusMeta.selftest.key === PUB.slice(0, 8) && state.arcusMeta.selftest.ok) return;   // đã test thành công với key này
    const st0 = state.arcusMeta.selftest;                       // test lỗi gần đây với cùng key → chờ 12 giờ mới thử lại, tránh spam Telegram
    if (st0 && st0.key === PUB.slice(0, 8) && !st0.ok && Date.now() - st0.at < 12 * 36e5 && st0.env === ENV) return;
    const m = M.get("BTC") || M.get("ETH"), steps = [];
    try {
      if (!m) throw new Error("không thấy thị trường BTC/ETH");
      const mark = mkPrice(m); if (!(mark > 0)) throw new Error("không đọc được giá");
      const free = await freeCollateral(); steps.push(`đọc tài khoản OK (ký quỹ khả dụng ~${free.toFixed(2)} USDC)`);
      const px = quant(mark * .7, tick(m), "down"), qty = quant(6 / parseFloat(px.s), step(m), "up");
      const cid = "rselftest" + Date.now().toString(36);
      await batch("entryTpsl", [
        { m, side: "BUY", type: "LIMIT", tif: "GTT", cid: cid + "e", qty, px },
        sellLeg(m, cid + "s", "STOP_LOSS", mark * .6, qty, false),
        sellLeg(m, cid + "t", "TAKE_PROFIT", mark * 1.5, qty, false),
      ]);
      steps.push(`ký và gửi lệnh chờ mua ${m.marketDisplayName} kèm SL/TP OK`);
      await new Promise(r => setTimeout(r, 3000));
      const O2 = await openOrders();
      if (!O2.has(cid + "e")) throw new Error("sàn nhận lệnh nhưng không thấy lệnh trong danh sách lệnh chờ");
      steps.push(`lệnh hiện trên sàn${O2.has(cid + "s") ? " (kèm SL" + (O2.has(cid + "t") ? " + TP)" : ")") : ""}`);
      await cancelCid(m, cid + "e");
      await new Promise(r => setTimeout(r, 3000));
      const O3 = await openOrders();
      if (O3.has(cid + "e")) throw new Error("huỷ lệnh chưa thành công, hãy kiểm tra trên app Arcus");
      for (const c of ["s", "t"]) if (O3.has(cid + c)) await cancelCid(m, cid + c);
      steps.push("huỷ lệnh OK");
      state.arcusMeta.selftest = { ok: true, at: Date.now(), key: PUB.slice(0, 8), env: ENV };
      say(`✅ <b>Tự kiểm tra thành công</b>\n• ${steps.join("\n• ")}\n\nBot sẵn sàng. Đổi biến <code>TRADE_MODE</code> thành <code>auto</code> để bắt đầu tự vào lệnh.`);
    } catch (e) {
      state.arcusMeta.selftest = { ok: false, at: Date.now(), key: PUB.slice(0, 8), env: ENV, why: e.message.slice(0, 200) };
      say(`❌ <b>Tự kiểm tra lỗi</b>\n• ${steps.join("\n• ")}${steps.length ? "\n• " : ""}lỗi: ${esc(e.message.slice(0, 300))}`);
      errors.push(`${TAG} selftest: ${e.message}`);
    }
    return;
  }

  // 1) quản lý lệnh đang chạy trên sàn
  for (const j of state.journal) {
    const a = j.arcus; if (!a || !live(a.st)) continue;
    const m = [...M.values()].find(x => Number(x.marketId) === a.mid);
    if (!m) { a.st = "closed"; a.why = "sàn gỡ mã"; continue; }
    const pos = P.get(a.mid), size = pos ? parseFloat(pos.size) : 0, cid = `r${j.id}`;
    let fresh = false;                                         // vừa khớp ở lượt này: chờ lượt sau mới kiểm tra TP1/SL
    try {
      if (a.st === "placed") {
        if (size > 0) { a.st = "open"; a.at = Date.now(); fresh = true; say(`Đã khớp lệnh mua <b>${esc(j.base)}</b> (${j.tf.toUpperCase()}), SL và TP1 đã đặt sẵn trên sàn.`); }
        else if (!O.has(cid + "e")) { a.st = "fail"; a.why = "lệnh vào không khớp / bị từ chối"; say(`Lệnh vào <b>${esc(j.base)}</b> không khớp, bỏ kèo.`); continue; }
        else if (["expired", "cancel", "manual", "sl", "tp2", "tp1_be"].includes(j.status)) {
          await cancelCid(m, cid + "e"); a.st = "cancel"; a.why = "kèo hết hạn trước khi khớp"; say(`Huỷ lệnh chờ <b>${esc(j.base)}</b> (kèo hết hạn).`); continue;
        }
      }
      if (a.st === "open" || a.st === "be") {
        if (size <= 0) {
          for (const c of ["e", "s", "t", "S", "T"]) if (O.has(cid + c)) await cancelCid(m, cid + c);   // dọn lệnh treo
          a.st = "closed"; a.at = Date.now(); say(`Đã đóng vị thế <b>${esc(j.base)}</b> trên sàn${a.be ? " (phần còn lại)" : ""}.`); continue;
        }
        if (fresh) continue;
        if (a.st === "open" && !O.has(cid + "t") && (j.half || mkPrice(m) >= j.tp1 * .98)) {            // TP1 đã khớp → SL về Entry, TP2 cho phần còn lại
          if (O.has(cid + "s")) await cancelCid(m, cid + "s");
          const px = mkPrice(m) || j.tp1, be = Math.min(j.entry, px * .995);
          await batch("positionTpsl", [sellLeg(m, cid + "S", "STOP_LOSS", be, null, true), ...(j.tp2 > px ? [sellLeg(m, cid + "T", "TAKE_PROFIT", j.tp2, null, true)] : [])]);
          a.st = "be"; a.be = 1; a.at = Date.now(); say(`<b>${esc(j.base)}</b> chạm TP1: đã chốt 50%, dời SL về Entry, đặt TP2.`);
        } else if (!O.has(cid + "s") && !O.has(cid + "S") && !O.has(cid + "t")) {    // mất SL (bị huỷ / lỗi) → đặt lại SL cho cả vị thế
          const px = mkPrice(m), stop = a.st === "be" ? Math.min(j.entry, px * .995) : Math.min(j.stop, px * .995);
          await batch("positionTpsl", [sellLeg(m, cid + "S", "STOP_LOSS", stop, null, true)]);
          say(`Đặt lại SL cho <b>${esc(j.base)}</b> (không thấy SL trên sàn).`);
        }
      }
    } catch (e) { errors.push(`${TAG} ${j.base}: ${e.message}`); }
  }

  // 2) vào lệnh cho kèo mới
  if (MODE !== "auto" || !newIds.size) return;
  let nLive = state.journal.filter(j => j.arcus && live(j.arcus.st)).length;
  let free = null;
  for (const j of state.journal) {
    if (!newIds.has(j.id) || j.arcus || !["open", "pending"].includes(j.status)) continue;
    const m = M.get(key(j)); if (!m || !m.tickSize || !m.stepSize) { j.arcus = { st: "na" }; continue; }      // sàn không có mã này
    const skip = why => { j.arcus = { st: "skip", why, mk: m.marketDisplayName, at: Date.now() }; say(`Bỏ qua <b>${esc(j.base)}</b>: ${why}.`); };
    try {
      if (nLive >= MAX_OPEN) { skip(`đã đủ ${MAX_OPEN} lệnh đang mở`); continue; }
      if ([...P.keys()].includes(Number(m.marketId))) { skip("đang có vị thế mã này trên sàn"); continue; }
      const apr = await fundingApr(m.marketId);
      if (apr > MAX_FUND_APR) { skip(`funding ${apr.toFixed(0)}%/năm cao hơn ngưỡng ${MAX_FUND_APR}%`); continue; }
      if (free == null) free = await freeCollateral();
      const mark = mkPrice(m), limit = j.status === "pending";
      const entry = limit ? j.entry : (mark || j.entry);
      if (!(entry > 0) || j.stop >= entry || j.tp1 <= entry) { skip("giá trên sàn đã lệch khỏi vùng Entry/SL/TP"); continue; }
      const rp = RISK > 0 ? riskPlan(m, entry, j.stop) : null;
      const need = rp ? rp.margin * 1.1 + RISK * .1 : USD * 1.05;
      if (free < need) { skip(`không đủ tiền ký quỹ (cần ~${need.toFixed(1)} USDG)`); continue; }
      const qty = quant((rp ? rp.notional : USD) / entry, step(m), "down");
      if (qty.n === 0n || parseFloat(qty.s) * entry < 5) { skip("khối lượng nhỏ hơn mức tối thiểu 5 USD của sàn"); continue; }
      const half = quant(parseFloat(qty.s) / 2, step(m), "down");
      if (rp) {
        try { const r = await setLev(m, rp.lev, true); if (String(r.status || "").toUpperCase() === "REJECTED") throw new Error(r.rejectReason || "sàn từ chối"); }
        catch (e) { skip(`không đặt được đòn bẩy ${rp.lev}x isolated (${e.message.slice(0, 80)})`); continue; }
      } else await setLev1(m);
      const cid = `r${j.id}`;
      const ent = limit
        ? { m, side: "BUY", type: "LIMIT", tif: "GTT", cid: cid + "e", qty, px: quant(j.entry, tick(m), "down") }
        : { m, side: "BUY", type: "MARKET", tif: "IOC", cid: cid + "e", qty, px: quant(mark * 1.02, tick(m), "up") };
      const legs = [ent, sellLeg(m, cid + "s", "STOP_LOSS", j.stop, qty, false)];
      if (half.n > 0n) legs.push(sellLeg(m, cid + "t", "TAKE_PROFIT", j.tp1, half, false));
      await batch("entryTpsl", legs);
      j.arcus = { st: "placed", mid: Number(m.marketId), mk: m.marketDisplayName, at: Date.now(), kind: limit ? "limit" : "market" };
      nLive++; free -= rp ? rp.margin : USD;
      const vol = parseFloat(qty.s) * entry;
      say(`${limit ? "Đặt lệnh chờ mua" : "Mua"} <b>${esc(j.base)}</b> (${j.tf.toUpperCase()}) · Entry ${limit ? j.entry : "market"} · SL ${j.stop} (-${((entry - j.stop) / entry * 100).toFixed(1)}%) · TP1 ${j.tp1} (50%) · TP2 ${j.tp2}\n` +
        (rp ? `Rủi ro 1R = ${RISK} USDG · khối lượng ~${vol.toFixed(0)} USDG · đòn bẩy ${rp.lev}x isolated · ký quỹ ~${rp.margin.toFixed(1)} USDG · giá thanh lý ~${rp.liq.toPrecision(5)} (SL dùng ${(rp.slShare * 100).toFixed(0)}% khoảng cách)${levInfo(m).known ? "" : " · chưa đọc được đòn bẩy tối đa của sàn, tạm giới hạn 5x"}`
            : `~${vol.toFixed(0)} USDG, đòn bẩy 1x`) + link());
    } catch (e) { j.arcus = { st: "fail", why: e.message.slice(0, 140), mk: m.marketDisplayName, at: Date.now() }; errors.push(`${TAG} ${j.base}: ${e.message}`); say(`Lỗi khi vào lệnh <b>${esc(j.base)}</b>: ${esc(e.message.slice(0, 160))}`); }
  }
}

export const _test = { canon, quant, loadKey, orderRow, setKey: (k, p) => { KEY = k; PUB = p; }, BASE };
