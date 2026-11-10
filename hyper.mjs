// Hyperliquid · tự đặt lệnh theo kèo của radar
// - Chỉ chạy khi có HL_ADDRESS + HL_AGENT_KEY trong GitHub Secrets
// - HL_AGENT_KEY là private key của API wallet (agent): chỉ đặt/huỷ lệnh, KHÔNG rút được tiền
// - R cố định (TRADE_RISK_USD): khối lượng = R ÷ %SL, đòn bẩy isolated cao nhất mà SL chiếm ≤ 70% khoảng cách thanh lý
// - Lệnh vào kèm SL + TP1 đặt sẵn trên sàn (normalTpsl); chạm TP1 → SL về Entry + TP2 cho phần còn lại
// - KHÔNG ghi số dư / khối lượng / địa chỉ ví vào state.json hay log (repo công khai)
import crypto from "node:crypto";

const ENV = (process.env.HL_ENV || "mainnet").toLowerCase() === "testnet" ? "testnet" : "mainnet";
const BASE = process.env.HL_BASE || (ENV === "mainnet" ? "https://api.hyperliquid.xyz" : "https://api.hyperliquid-testnet.xyz");
const USER = (process.env.HL_ADDRESS || "").trim().toLowerCase();
const MODE = (process.env.TRADE_MODE || "selftest").toLowerCase();       // selftest · auto · manage · off
const USD = parseFloat(process.env.TRADE_USD || "20") || 20;
const RISK = parseFloat(process.env.TRADE_RISK_USD || "0") || 0;
const MAX_OPEN = parseInt(process.env.TRADE_MAX_OPEN || "3", 10) || 3;
const MAX_FUND_APR = parseFloat(process.env.TRADE_MAX_FUNDING_APR || "30");
const LIQ_USE = Math.min(.95, Math.max(.3, parseFloat(process.env.TRADE_LIQ_BUFFER || "0.7") || .7));
const MIN_NOTIONAL = 10;                                                    // sàn yêu cầu mỗi lệnh ≥ 10 USD
const TAG = ENV === "mainnet" ? "Hyperliquid" : "Hyperliquid testnet";

let ethers, msgpack, WALLET;
async function libs() {
  if (!ethers) { ethers = await import("ethers"); msgpack = await import("@msgpack/msgpack"); }
  if (!WALLET) {
    let k = (process.env.HL_AGENT_KEY || "").trim(); if (!/^0x/i.test(k)) k = "0x" + k;
    if (!/^0x[0-9a-f]{64}$/i.test(k)) throw new Error("HL_AGENT_KEY sai định dạng (cần private key 64 ký tự hex của API wallet)");
    WALLET = new ethers.Wallet(k);
  }
}

/* ---------- ký lệnh (giống SDK Python chính thức) ---------- */
async function signL1(action, nonce) {
  const packed = msgpack.encode(action);
  const buf = new Uint8Array(packed.length + 9);
  buf.set(packed, 0); new DataView(buf.buffer).setBigUint64(packed.length, BigInt(nonce)); buf[packed.length + 8] = 0;   // không dùng vault
  const connectionId = ethers.keccak256(buf);
  const sig = await WALLET.signTypedData(
    { name: "Exchange", version: "1", chainId: 1337, verifyingContract: "0x0000000000000000000000000000000000000000" },
    { Agent: [{ name: "source", type: "string" }, { name: "connectionId", type: "bytes32" }] },
    { source: ENV === "mainnet" ? "a" : "b", connectionId });
  const s = ethers.Signature.from(sig);
  return { r: s.r, s: s.s, v: s.v };
}
let lastNonce = 0;
const nextNonce = () => { let n = Date.now(); if (n <= lastNonce) n = lastNonce + 1; lastNonce = n; return n; };

async function post(path, body) {
  const r = await fetch(BASE + path, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  const t = await r.text(); let j; try { j = JSON.parse(t); } catch (e) { j = null; }
  if (!r.ok) throw new Error(`HTTP ${r.status} ${path}: ${(t || "").slice(0, 160)}`);
  return j;
}
const info = body => post("/info", body);
async function exchange(action) {
  const nonce = nextNonce(), signature = await signL1(action, nonce);
  const j = await post("/exchange", { action, nonce, signature, vaultAddress: null, expiresAfter: null });
  if (!j || j.status !== "ok") throw new Error(String(j && j.response || "sàn từ chối").replace(USER, "0x…").slice(0, 200));
  const st = (j.response && j.response.data && j.response.data.statuses) || [];
  const errs = st.filter(x => x && typeof x === "object" && x.error).map(x => x.error);
  if (errs.length) throw new Error(errs.join("; ").slice(0, 200));
  return st;
}

/* ---------- định dạng giá / khối lượng theo luật sàn ---------- */
// giá: tối đa 5 chữ số có nghĩa và tối đa (6 - szDecimals) chữ số thập phân; số nguyên luôn hợp lệ
function fmtPx(px, szDec, mode = "round") {
  if (!(px > 0)) throw new Error("giá không hợp lệ");
  const maxDec = Math.max(0, 6 - szDec);
  const mag = Math.floor(Math.log10(px)), sigDec = Math.max(0, 4 - mag);
  const dec = Math.min(maxDec, sigDec), f = 10 ** dec;
  let v = mode === "up" ? Math.ceil(px * f - 1e-9) / f : mode === "down" ? Math.floor(px * f + 1e-9) / f : Math.round(px * f) / f;
  if (mag >= 5) { const g = 10 ** (mag - 4); v = (mode === "up" ? Math.ceil(px / g) : mode === "down" ? Math.floor(px / g) : Math.round(px / g)) * g; }
  return wire(v);
}
const fmtSz = (sz, szDec) => wire(Math.floor(sz * 10 ** szDec + 1e-9) / 10 ** szDec);
function wire(x) { let s = x.toFixed(8); s = s.replace(/\.?0+$/, ""); return s === "-0" || s === "" ? "0" : s; }
const cloidOf = s => "0x" + crypto.createHash("sha256").update(s).digest("hex").slice(0, 32);

/* ---------- dữ liệu sàn ---------- */
async function loadMarkets() {
  const [meta, ctxs] = await info({ type: "metaAndAssetCtxs" });
  const M = new Map();
  meta.universe.forEach((u, i) => { if (!u.isDelisted) M.set(u.name, { ...u, asset: i, ctx: ctxs[i] || {} }); });
  return M;
}
function findMarket(M, base) {                       // BTC → BTC · PEPE → kPEPE (giá × 1000)
  base = base.toUpperCase();
  if (M.has(base)) return { m: M.get(base), mult: 1 };
  if (M.has("k" + base)) return { m: M.get("k" + base), mult: 1000 };
  return null;
}
const markOf = m => parseFloat(m.ctx.markPx || m.ctx.oraclePx || m.ctx.midPx || 0);
async function account() {
  const [s, sp] = await Promise.all([info({ type: "clearinghouseState", user: USER }), info({ type: "spotClearinghouseState", user: USER }).catch(() => null)]);
  const pos = new Map();
  for (const p of s.assetPositions || []) { const x = p.position || p; if (parseFloat(x.szi)) pos.set(x.coin, x); }
  const u = ((sp && sp.balances) || []).find(b => b.coin === "USDC");
  const spot = u ? Math.max(0, parseFloat(u.total || 0) - parseFloat(u.hold || 0)) : 0;
  const perp = parseFloat(s.withdrawable || 0);
  return { pos, perp, spot, free: perp + spot };      // tài khoản hợp nhất (unified) dùng được cả USDC bên Spot
}
async function orders() { return (await info({ type: "frontendOpenOrders", user: USER })) || []; }
const trig = (O, coin, kind) => O.filter(o => o.coin === coin && o.isTrigger && (kind === "sl" ? /stop/i.test(o.orderType) : /take/i.test(o.orderType)));

/* ---------- lệnh ---------- */
const limitO = (m, buy, px, sz, tif, cloid, reduce = false) => {
  const o = { a: m.asset, b: buy, p: px, s: sz, r: reduce, t: { limit: { tif } } }; if (cloid) o.c = cloid; return o;
};
const trigO = (m, px, sz, tpsl, cloid) => {
  const o = { a: m.asset, b: false, p: px, s: sz, r: true, t: { trigger: { isMarket: true, triggerPx: px, tpsl } } }; if (cloid) o.c = cloid; return o;
};
const placeOrders = (list, grouping = "na") => exchange({ type: "order", orders: list, grouping });
const cancelOids = (list) => list.length ? exchange({ type: "cancel", cancels: list.map(o => ({ a: o.asset, o: o.oid })) }) : null;
const cancelCloid = (m, cloid) => exchange({ type: "cancelByCloid", cancels: [{ asset: m.asset, cloid }] }).catch(e => { if (!/never placed|already canceled|filled|not found/i.test(e.message)) throw e; });
const setLeverage = (m, lev, cross) => exchange({ type: "updateLeverage", asset: m.asset, isCross: !!cross, leverage: lev });

// R cố định → khối lượng; đòn bẩy cao nhất mà SL chỉ chiếm ≤ LIQ_USE khoảng cách tới giá thanh lý (isolated)
function plan(m, entry, stop) {
  const sl = (entry - stop) / entry, maxLev = Math.max(1, Math.floor(m.maxLeverage || 3)), mmr = .5 / maxLev;
  if (RISK <= 0) return { sl, notional: USD, lev: 1, margin: USD, liq: 0, share: 0 };
  const notional = RISK / sl, lev = Math.max(1, Math.min(maxLev, Math.floor(1 / (sl / LIQ_USE + mmr))));
  const liqDist = 1 / lev - mmr;
  return { sl, notional, lev, margin: notional / lev, liq: entry * (1 - liqDist), share: sl / liqDist };
}

/* ---------- chạy mỗi lượt quét ---------- */
export async function hyperRun({ state, newIds, outbox, errors, esc, link }) {
  if (!USER || !process.env.HL_AGENT_KEY) return;
  if (MODE === "off") { console.log(`${TAG}: đang tắt (TRADE_MODE=off)`); return; }
  try { await libs(); } catch (e) { errors.push(`${TAG}: ${e.message}`); return; }
  const say = s => outbox.push(`🤖 <b>${TAG}</b> · ${s}`);
  let M, A, O;
  try { [M, A, O] = await Promise.all([loadMarkets(), account(), orders()]); }
  catch (e) { errors.push(`${TAG}: không đọc được tài khoản (${e.message})`); return; }

  // 0) tự kiểm tra: đặt lệnh chờ mua BTC thấp hơn giá 30% (không thể khớp) kèm SL/TP, rồi huỷ ngay
  if (MODE === "selftest") {
    state.hlMeta = state.hlMeta || {};
    const key = WALLET.address.slice(2, 10).toLowerCase(), st0 = state.hlMeta.selftest;
    const force = process.env.PING === "true";                // bấm Run workflow (có tick) → kiểm tra lại ngay
    if (!force && st0 && st0.key === key && st0.env === ENV && (st0.ok || Date.now() - st0.at < (st0.fund ? 1 : 12) * 36e5)) return;
    const steps = [];
    try {
      const m = M.get("BTC"); if (!m) throw new Error("không thấy BTC");
      const mark = markOf(m); if (!(mark > 0)) throw new Error("không đọc được giá BTC");
      steps.push(`đọc tài khoản OK (USDC bên Perps ~${A.perp.toFixed(2)}, bên Spot ~${A.spot.toFixed(2)})`);
      if (A.free < 3) { const e = new Error("chưa thấy USDC trên Hyperliquid (cả Perps và Spot đều ~0). Kiểm tra HL_ADDRESS có đúng là ví chính đang chứa tiền không (không phải địa chỉ API wallet)"); e.fund = 1; throw e; }
      if (!A.pos.has("BTC")) { await setLeverage(m, Math.min(5, m.maxLeverage), false); steps.push("đặt đòn bẩy isolated OK"); }
      const px = fmtPx(mark * .7, m.szDecimals, "down"), sz = wire(Math.ceil(12 / parseFloat(px) * 10 ** m.szDecimals) / 10 ** m.szDecimals);
      const cid = cloidOf("selftest" + Date.now());
      await placeOrders([limitO(m, true, px, sz, "Gtc", cid), trigO(m, fmtPx(mark * .6, m.szDecimals), sz, "sl"), trigO(m, fmtPx(mark * 1.5, m.szDecimals), sz, "tp")], "normalTpsl");
      steps.push("ký và gửi lệnh chờ mua BTC kèm SL/TP OK");
      await new Promise(r => setTimeout(r, 2500));
      const O2 = await orders();
      if (!O2.some(o => o.cloid === cid)) throw new Error("sàn nhận lệnh nhưng không thấy lệnh trong danh sách lệnh chờ");
      steps.push("lệnh hiện trên sàn");
      await cancelCloid(m, cid);
      await new Promise(r => setTimeout(r, 2500));
      const O3 = await orders();
      if (O3.some(o => o.cloid === cid)) throw new Error("huỷ lệnh chưa thành công, hãy kiểm tra trên app Hyperliquid");
      await cancelOids(O3.filter(o => o.coin === "BTC" && o.isTrigger && !A.pos.has("BTC")).map(o => ({ asset: m.asset, oid: o.oid })));
      steps.push("huỷ lệnh OK");
      state.hlMeta.selftest = { ok: true, at: Date.now(), key, env: ENV };
      say(`✅ <b>Tự kiểm tra thành công</b>\n• ${steps.join("\n• ")}\n\nBot sẵn sàng. Đổi biến <code>TRADE_MODE</code> thành <code>auto</code> để bắt đầu tự vào lệnh.`);
    } catch (e) {
      if (!e.fund && A.perp < 3 && A.spot >= 3 && /margin|insufficient|balance/i.test(e.message)) e.message += ". USDC đang nằm bên Spot: vào app Hyperliquid bấm Transfer → chuyển sang Perps";
      state.hlMeta.selftest = { ok: false, at: Date.now(), key, env: ENV, why: e.message.slice(0, 200), fund: e.fund || (A.perp < 3 ? 1 : 0) };
      say(`❌ <b>Tự kiểm tra lỗi</b>\n• ${steps.join("\n• ")}${steps.length ? "\n• " : ""}lỗi: ${esc(e.message.slice(0, 300))}`);
      errors.push(`${TAG} selftest: ${e.message}`);
    }
    return;
  }

  const live = st => ["placed", "open", "be"].includes(st);
  // 1) quản lý lệnh đang chạy
  for (const j of state.journal) {
    const h = j.hl; if (!h || !live(h.st)) continue;
    const m = M.get(h.coin); if (!m) { h.st = "closed"; h.why = "sàn gỡ mã"; continue; }
    const p = A.pos.get(h.coin), size = p ? parseFloat(p.szi) : 0, mult = h.mult || 1;
    const entry = j.entry * mult, stop = j.stop * mult, tp1 = j.tp1 * mult, tp2 = j.tp2 * mult, mark = markOf(m);
    try {
      if (h.st === "placed") {
        const resting = O.some(o => o.cloid === h.cid);
        if (size > 0) { h.st = "open"; h.at = Date.now(); say(`Đã khớp lệnh mua <b>${esc(j.base)}</b> (${j.tf.toUpperCase()}), SL và TP1 đã nằm sẵn trên sàn.`); continue; }
        if (!resting) { h.st = "fail"; h.why = "lệnh vào không khớp / bị huỷ"; say(`Lệnh vào <b>${esc(j.base)}</b> không khớp, bỏ kèo.`); continue; }
        if (["expired", "cancel", "manual", "sl", "tp2", "tp1_be"].includes(j.status)) {
          await cancelCloid(m, h.cid);
          if (!A.pos.has(h.coin)) await cancelOids(O.filter(o => o.coin === h.coin && o.isTrigger).map(o => ({ asset: m.asset, oid: o.oid })));   // dọn SL/TP con
          h.st = "cancel"; h.why = "kèo hết hạn trước khi khớp"; say(`Huỷ lệnh chờ <b>${esc(j.base)}</b> (kèo hết hạn).`);
        }
        continue;
      }
      const sls = trig(O, h.coin, "sl"), tps = trig(O, h.coin, "tp");
      if (size <= 0) {                                                   // đã đóng (dính SL / chạm TP2 / đóng tay)
        await cancelOids([...sls, ...tps].map(o => ({ asset: m.asset, oid: o.oid })));
        h.st = "closed"; h.at = Date.now(); say(`Đã đóng vị thế <b>${esc(j.base)}</b> trên sàn.`); continue;
      }
      const szS = fmtSz(size, m.szDecimals);
      if (h.st === "open" && h.part && !tps.length && (j.half || mark >= tp1 * .98)) {   // TP1 đã khớp
        await cancelOids(sls.map(o => ({ asset: m.asset, oid: o.oid })));
        const be = Math.min(entry, mark * .995), legs = [trigO(m, fmtPx(be, m.szDecimals), szS, "sl")];
        if (tp2 > mark) legs.push(trigO(m, fmtPx(tp2, m.szDecimals), szS, "tp"));
        await placeOrders(legs);
        h.st = "be"; h.at = Date.now(); say(`<b>${esc(j.base)}</b> chạm TP1: đã chốt 50%, dời SL về Entry, đặt TP2 cho phần còn lại.`);
      } else if (!sls.length) {                                          // không thấy SL → đặt lại cho cả vị thế
        const s = h.st === "be" ? Math.min(entry, mark * .995) : Math.min(stop, mark * .995);
        await placeOrders([trigO(m, fmtPx(s, m.szDecimals), szS, "sl")]);
        say(`Đặt lại SL cho <b>${esc(j.base)}</b> (không thấy SL trên sàn).`);
      }
    } catch (e) { errors.push(`${TAG} ${j.base}: ${e.message}`); }
  }

  // 2) vào lệnh cho kèo mới
  if (MODE !== "auto" || !newIds.size) return;
  let nLive = state.journal.filter(j => j.hl && live(j.hl.st)).length, free = A.free;
  for (const j of state.journal) {
    if (!newIds.has(j.id) || j.hl || j.src === "st" || !["open", "pending"].includes(j.status)) continue;
    const f = findMarket(M, j.base); if (!f) { j.hl = { st: "na" }; continue; }
    const { m, mult } = f, coin = m.name;
    const skip = why => { j.hl = { st: "skip", why, coin, at: Date.now() }; say(`Bỏ qua <b>${esc(j.base)}</b>: ${why}.`); };
    try {
      if (nLive >= MAX_OPEN) { skip(`đã đủ ${MAX_OPEN} lệnh đang mở`); continue; }
      if (A.pos.has(coin)) { skip("đang có vị thế mã này trên sàn"); continue; }
      const apr = parseFloat(m.ctx.funding || 0) * 8760 * 100;
      if (apr > MAX_FUND_APR) { skip(`funding ${apr.toFixed(0)}%/năm cao hơn ngưỡng ${MAX_FUND_APR}%`); continue; }
      const mark = markOf(m), limit = j.status === "pending";
      const entry = limit ? j.entry * mult : mark, stop = j.stop * mult, tp1 = j.tp1 * mult, tp2 = j.tp2 * mult;
      if (!(entry > 0) || stop >= entry * .998 || tp1 <= entry) { skip("giá trên sàn đã lệch khỏi vùng Entry/SL/TP"); continue; }
      const P = plan(m, entry, stop);
      if (free < P.margin * 1.1 + 1) { skip(`không đủ tiền ký quỹ (cần ~${(P.margin * 1.1 + 1).toFixed(1)} USDC)`); continue; }
      const sz = fmtSz(P.notional / entry, m.szDecimals), szN = parseFloat(sz);
      if (!(szN > 0) || szN * entry < MIN_NOTIONAL) { skip(`khối lượng ~${(szN * entry).toFixed(1)} USD nhỏ hơn mức tối thiểu 10 USD của sàn (SL quá xa)`); continue; }
      const half = fmtSz(szN / 2, m.szDecimals), part = parseFloat(half) * tp1 >= MIN_NOTIONAL * 1.05;
      await setLeverage(m, P.lev, false);
      const cid = cloidOf("r" + j.id + "e");
      const ent = limit ? limitO(m, true, fmtPx(entry, m.szDecimals, "down"), sz, "Gtc", cid)
                        : limitO(m, true, fmtPx(mark * 1.03, m.szDecimals, "up"), sz, "Ioc", cid);
      await placeOrders([ent, trigO(m, fmtPx(stop, m.szDecimals), sz, "sl"), trigO(m, fmtPx(tp1, m.szDecimals), part ? half : sz, "tp")], "normalTpsl");
      j.hl = { st: "placed", coin, mult, cid, part, at: Date.now(), kind: limit ? "limit" : "market" };
      nLive++; free -= P.margin;
      const vol = szN * entry;
      say(`${limit ? "Đặt lệnh chờ mua" : "Mua"} <b>${esc(j.base)}</b> (${j.tf.toUpperCase()}) · Entry ${limit ? j.entry : "market"} · SL ${j.stop} (-${(P.sl * 100).toFixed(1)}%) · TP1 ${j.tp1}${part ? " (50%)" : " (đóng hết, lệnh quá nhỏ để chia đôi)"} · TP2 ${j.tp2}\n` +
        (RISK > 0 ? `Rủi ro 1R = ${RISK} USDC · khối lượng ~${vol.toFixed(0)} USDC · đòn bẩy ${P.lev}x isolated · ký quỹ ~${P.margin.toFixed(1)} USDC · giá thanh lý ~${(P.liq / mult).toPrecision(5)} (SL dùng ${(P.share * 100).toFixed(0)}% khoảng cách)` : `~${vol.toFixed(0)} USDC, đòn bẩy 1x`) + link());
    } catch (e) { j.hl = { st: "fail", why: e.message.slice(0, 140), coin, at: Date.now() }; errors.push(`${TAG} ${j.base}: ${e.message}`); say(`Lỗi khi vào lệnh <b>${esc(j.base)}</b>: ${esc(e.message.slice(0, 160))}`); }
  }
}

export const _test = { signL1, fmtPx, fmtSz, wire, cloidOf, plan, libs, setWallet: w => { WALLET = w; } };
