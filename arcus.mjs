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
const MODE = (process.env.TRADE_MODE || "auto").toLowerCase();          // auto · manage (chỉ quản lý lệnh cũ) · off
const USD = parseFloat(process.env.TRADE_USD || "50") || 50;
const MAX_OPEN = parseInt(process.env.TRADE_MAX_OPEN || "5", 10) || 5;
const MAX_FUND_APR = parseFloat(process.env.TRADE_MAX_FUNDING_APR || "30");
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
async function setLev1(m) {
  const ts = nowNs(), body = { accountIndex: AI, address: ADDR, leverage: 1, marketId: Number(m.marketId) };
  try { await api("POST", "/v1/setLeverage", { query: { address: ADDR }, headers: authHdr(ts, sign(ts.toString() + "setLeverage" + canon(body))), body }); }
  catch (e) { console.log(`${TAG}: không đặt được đòn bẩy 1x cho ${m.marketDisplayName} (${e.message})`); }
}
const tick = m => m.tickSize, step = m => m.stepSize;
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
      if (free < USD * 1.05) { skip(`không đủ tiền ký quỹ (cần ~${USD} USDC)`); continue; }
      const mark = mkPrice(m), limit = j.status === "pending";
      const entry = limit ? j.entry : (mark || j.entry);
      if (!(entry > 0) || j.stop >= entry || j.tp1 <= entry) { skip("giá trên sàn đã lệch khỏi vùng Entry/SL/TP"); continue; }
      const qty = quant(USD / entry, step(m), "down");
      if (qty.n === 0n || parseFloat(qty.s) * entry < 5) { skip("khối lượng nhỏ hơn mức tối thiểu của sàn"); continue; }
      const half = quant(parseFloat(qty.s) / 2, step(m), "down");
      await setLev1(m);
      const cid = `r${j.id}`;
      const ent = limit
        ? { m, side: "BUY", type: "LIMIT", tif: "GTT", cid: cid + "e", qty, px: quant(j.entry, tick(m), "down") }
        : { m, side: "BUY", type: "MARKET", tif: "IOC", cid: cid + "e", qty, px: quant(mark * 1.02, tick(m), "up") };
      const legs = [ent, sellLeg(m, cid + "s", "STOP_LOSS", j.stop, qty, false)];
      if (half.n > 0n) legs.push(sellLeg(m, cid + "t", "TAKE_PROFIT", j.tp1, half, false));
      await batch("entryTpsl", legs);
      j.arcus = { st: "placed", mid: Number(m.marketId), mk: m.marketDisplayName, at: Date.now(), kind: limit ? "limit" : "market" };
      nLive++; free -= USD;
      say(`${limit ? "Đặt lệnh chờ mua" : "Mua"} <b>${esc(j.base)}</b> (${j.tf.toUpperCase()}) ~${USD} USDC · Entry ${limit ? j.entry : "market"} · SL ${j.stop} · TP1 ${j.tp1} (50%) · TP2 ${j.tp2}` + link());
    } catch (e) { j.arcus = { st: "fail", why: e.message.slice(0, 140), mk: m.marketDisplayName, at: Date.now() }; errors.push(`${TAG} ${j.base}: ${e.message}`); say(`Lỗi khi vào lệnh <b>${esc(j.base)}</b>: ${esc(e.message.slice(0, 160))}`); }
  }
}

export const _test = { canon, quant, loadKey, orderRow, setKey: (k, p) => { KEY = k; PUB = p; }, BASE };
