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
const MAX_OPEN = parseInt(process.env.TRADE_MAX_OPEN || "99", 10) || 99;             // trần số lệnh tuyệt đối
const MAX_RISK_PCT = parseFloat(process.env.TRADE_MAX_RISK_PCT || "30") || 30;        // tổng rủi ro các lệnh đang mở ≤ 30% portfolio
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
// sàn chính + các sàn HIP-3 (vàng, cổ phiếu… tên dạng "xyz:GOLD"); mã tài sản HIP-3 = 110000 + thứ tự sàn × 10000 + vị trí
let DEXES = [""];
async function loadMarkets() {
  const M = new Map(), add = (meta, ctxs, dex, off) => (meta.universe || []).forEach((u, i) => {
    if (u.isDelisted) return;
    M.set(u.name, { ...u, asset: off + i, dex, short: String(u.name).split(":").pop().toUpperCase(), ctx: (ctxs && ctxs[i]) || {} });
  });
  DEXES = [""];
  const [meta, ctxs] = await info({ type: "metaAndAssetCtxs" }); add(meta, ctxs, "", 0);
  try {
    const dx = await info({ type: "perpDexs" }); if (!Array.isArray(dx)) throw new Error("dữ liệu lạ");
    await Promise.all(dx.slice(1).map(async (d, i) => {
      if (!d || !d.name) return;
      try { const [m2, c2] = await info({ type: "metaAndAssetCtxs", dex: d.name }); add(m2, c2, d.name, 110000 + i * 10000); DEXES.push(d.name); }
      catch (e) { console.log(`${TAG}: không đọc được sàn ${d.name} (${e.message})`); }
    }));
  } catch (e) { console.log(`${TAG}: không đọc được danh sách sàn HIP-3 (${e.message})`); }
  return M;
}
// tên khác nhau giữa radar và Hyperliquid
const ALIAS = { XAUT: ["GOLD", "XAU", "PAXG"], PAXG: ["GOLD", "XAU", "PAXG"], XAU: ["GOLD", "XAU"], SPY: ["SPY", "SPX", "SP500", "US500"], SPY500: ["SPY", "SPX", "SP500", "US500"],
  QQQ: ["QQQ", "NDX", "NAS100", "US100"], GOOGL: ["GOOGL", "GOOG"], BRKB: ["BRK.B", "BRKB"] };
function findMarket(M, j) {
  const base = String((j.src === "st" ? j.sym || j.base : j.base) || "").toUpperCase(), ref = j.cur || j.entry;
  if (!base) return null;
  const names = [...new Set([base, ...(ALIAS[base] || [])])];
  const all = [...M.values()];
  for (const n of names) {
    // ưu tiên sàn chính, sau đó sàn HIP-3 có volume lớn nhất
    const c = all.filter(m => m.short === n || m.short === "K" + n).sort((a, b) => (a.dex ? 1 : 0) - (b.dex ? 1 : 0) || parseFloat(b.ctx.dayNtlVlm || 0) - parseFloat(a.ctx.dayNtlVlm || 0));
    for (const m of c) {
      const mk = markOf(m); if (!(mk > 0) || !(ref > 0)) continue;
      const r = mk / ref, mult = [1, 10, 100, 1000].find(x => r > x * .9 && r < x * 1.1);   // kiểm tra giá khớp (vd. kPEPE ×1000, SPX ≈ SPY ×10)
      if (mult) return { m, mult };
    }
  }
  return null;
}
const markOf = m => parseFloat(m.ctx.markPx || m.ctx.oraclePx || m.ctx.midPx || 0);
async function account() {
  const [s, sp, ...more] = await Promise.all([info({ type: "clearinghouseState", user: USER }), info({ type: "spotClearinghouseState", user: USER }).catch(() => null),
    ...DEXES.slice(1).map(d => info({ type: "clearinghouseState", user: USER, dex: d }).catch(() => null))]);
  const pos = new Map();
  for (const st of [s, ...more]) for (const p of (st && st.assetPositions) || []) { const x = p.position || p; if (parseFloat(x.szi)) pos.set(x.coin, x); }
  const u = ((sp && sp.balances) || []).find(b => b.coin === "USDC");
  const spot = u ? Math.max(0, parseFloat(u.total || 0) - parseFloat(u.hold || 0)) : 0;
  const perp = parseFloat(s.withdrawable || 0);
  const uTot = u ? parseFloat(u.total || 0) : 0, acct = [s, ...more].reduce((a, st) => a + parseFloat((st && st.marginSummary && st.marginSummary.accountValue) || 0), 0);
  return { pos, perp, spot, free: perp + spot, equity: acct + uTot };      // tài khoản hợp nhất (unified) dùng được cả USDC bên Spot
}
async function orders() {
  const r = await Promise.all(DEXES.map(d => info(d ? { type: "frontendOpenOrders", user: USER, dex: d } : { type: "frontendOpenOrders", user: USER }).catch(e => { if (!d) throw e; return []; })));
  return r.flat().filter(Boolean);
}
const trig = (O, coin, kind) => O.filter(o => o.coin === coin && o.isTrigger && (kind === "sl" ? /stop/i.test(o.orderType) : /take/i.test(o.orderType)));

/* ---------- lệnh ---------- */
const limitO = (m, buy, px, sz, tif, cloid, reduce = false) => {
  const o = { a: m.asset, b: buy, p: px, s: sz, r: reduce, t: { limit: { tif } } }; if (cloid) o.c = cloid; return o;
};
const trigO = (m, px, sz, tpsl, cloid, buy = false) => {               // buy = true: lệnh đóng vị thế SHORT
  const o = { a: m.asset, b: buy, p: px, s: sz, r: true, t: { trigger: { isMarket: true, triggerPx: px, tpsl } } }; if (cloid) o.c = cloid; return o;
};
const placeOrders = (list, grouping = "na") => exchange({ type: "order", orders: list, grouping });
const cancelOids = (list) => list.length ? exchange({ type: "cancel", cancels: list.map(o => ({ a: o.asset, o: o.oid })) }) : null;
const cancelCloid = (m, cloid) => exchange({ type: "cancelByCloid", cancels: [{ asset: m.asset, cloid }] }).catch(e => { if (!/never placed|already canceled|filled|not found/i.test(e.message)) throw e; });
const setLeverage = (m, lev, cross) => exchange({ type: "updateLeverage", asset: m.asset, isCross: !!cross, leverage: lev });

// R cố định → khối lượng; đòn bẩy cao nhất mà SL chỉ chiếm ≤ LIQ_USE khoảng cách tới giá thanh lý (isolated)
function plan(m, entry, stop) {
  const short = stop > entry, sl = Math.abs(entry - stop) / entry, maxLev = Math.max(1, Math.floor(m.maxLeverage || 3)), mmr = .5 / maxLev;
  if (RISK <= 0) return { sl, notional: USD, lev: 1, margin: USD, liq: 0, share: 0 };
  const notional = RISK / sl, lev = Math.max(1, Math.min(maxLev, Math.floor(1 / (sl / LIQ_USE + mmr))));
  const liqDist = 1 / lev - mmr;
  return { sl, notional, lev, margin: notional / lev, liq: entry * (short ? 1 + liqDist : 1 - liqDist), share: sl / liqDist };
}

/* ---------- chạy mỗi lượt quét ---------- */
export async function hyperRun({ state, newIds, outbox, errors, esc, link, allowed }) {
  if (!USER || !process.env.HL_AGENT_KEY) return;
  if (MODE === "off") { console.log(`${TAG}: đang tắt (TRADE_MODE=off)`); return; }
  try { await libs(); } catch (e) { errors.push(`${TAG}: ${e.message}`); return; }
  const say = s => outbox.push(`🤖 <b>${TAG}</b> · ${s}`);
  let M, A, O;
  try { M = await loadMarkets(); [A, O] = await Promise.all([account(), orders()]); }
  catch (e) { errors.push(`${TAG}: không đọc được tài khoản (${e.message})`); return; }

  // 0) tự kiểm tra: đặt lệnh chờ mua BTC thấp hơn giá 30% (không thể khớp) kèm SL/TP, rồi huỷ ngay
  if (MODE === "selftest") {
    state.hlMeta = state.hlMeta || {};
    const key = WALLET.address.slice(2, 10).toLowerCase(), st0 = state.hlMeta.selftest;
    const force = process.env.PING === "true";                // bấm Run workflow (có tick) → kiểm tra lại ngay
    if (!force && st0 && st0.key === key && st0.env === ENV && (st0.ok || (st0.fund !== undefined && Date.now() - st0.at < (st0.fund ? 1 : 12) * 36e5))) return;
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
    const sh = j.side === "short", p = A.pos.get(h.coin), size = p ? parseFloat(p.szi) * (sh ? -1 : 1) : 0, mult = h.mult || 1;   // size > 0: đang có vị thế đúng chiều kèo
    const lo = (a, b) => sh ? Math.max(a, b) : Math.min(a, b), past = (px, lvl, tol) => sh ? px <= lvl * (1 + tol) : px >= lvl * (1 - tol);
    const entry = j.entry * mult, stop = j.stop * mult, tp1 = j.tp1 * mult, tp2 = j.tp2 * mult, mark = markOf(m);
    try {
      if (h.st === "placed") {
        const resting = O.some(o => o.cloid === h.cid);
        if (size > 0) { h.st = "open"; h.at = Date.now(); say(`Đã khớp lệnh ${sh ? "SHORT" : "mua"} <b>${esc(j.base)}</b> (${j.tf.toUpperCase()}), SL và TP1 đã nằm sẵn trên sàn.`); continue; }
        if (h.replan && size <= 0) {                                     // kèo đã được dời Entry/SL/TP → huỷ lệnh cũ, để bước dưới đặt lại theo mức mới
          if (resting) await cancelCloid(m, h.cid);
          await cancelOids(O.filter(o => o.coin === h.coin && o.isTrigger).map(o => ({ asset: m.asset, oid: o.oid })))
            .catch(e => { if (!/never placed|already canceled|filled|not found/i.test(e.message)) throw e; });
          delete j.hl; say(`Huỷ lệnh chờ cũ <b>${esc(j.base)}</b> để đặt lại theo Entry/SL/TP mới.`); continue;
        }
        const ended = ["expired", "cancel", "manual", "sl", "tp2", "tp1_be", "trail", "struct"].includes(j.status);
        if (!resting && ended) { h.st = "cancel"; h.why = j.cancelWhy || "kèo hết hạn trước khi khớp"; say(`Đã huỷ lệnh chờ <b>${esc(j.base)}</b> trên sàn (${esc(h.why)}).`); continue; }
        if (!resting) { h.st = "fail"; h.why = "lệnh vào không khớp / bị huỷ"; say(`Lệnh vào <b>${esc(j.base)}</b> không khớp, bỏ kèo.`); continue; }
        if (ended) {
          await cancelCloid(m, h.cid);
          if (!A.pos.has(h.coin)) await cancelOids(O.filter(o => o.coin === h.coin && o.isTrigger).map(o => ({ asset: m.asset, oid: o.oid })))
            .catch(e => { if (!/never placed|already canceled|filled|not found/i.test(e.message)) throw e; });   // SL/TP con thường đã tự huỷ theo lệnh mẹ
          h.st = "cancel"; h.why = j.cancelWhy || "kèo hết hạn trước khi khớp"; say(`Huỷ lệnh chờ <b>${esc(j.base)}</b> trên sàn (${esc(j.cancelWhy || "kèo hết hạn")}).`);
        }
        continue;
      }
      const sls = trig(O, h.coin, "sl"), tps = trig(O, h.coin, "tp");
      if (size <= 0) {                                                   // đã đóng (dính SL / chạm TP2 / đóng tay)
        await cancelOids([...sls, ...tps].map(o => ({ asset: m.asset, oid: o.oid })));
        h.st = "closed"; h.at = Date.now(); say(`Đã đóng vị thế <b>${esc(j.base)}</b> trên sàn.`); continue;
      }
      const szS = fmtSz(size, m.szDecimals);
      if (j.status === "struct") {                                     // cấu trúc tăng bị phá → đóng toàn bộ vị thế bằng lệnh thị trường (reduce-only)
        await cancelOids([...sls, ...tps].map(o => ({ asset: m.asset, oid: o.oid })));
        await placeOrders([limitO(m, sh, fmtPx(mark * (sh ? 1.03 : .97), m.szDecimals, sh ? "up" : "down"), szS, "Ioc", null, true)]);
        h.st = "closed"; h.at = Date.now(); h.why = sh ? "phá cấu trúc giảm" : "phá cấu trúc tăng";
        say(`<b>${esc(j.base)}</b> ${sh ? "phá cấu trúc giảm" : "phá cấu trúc tăng"} (nến ${String(j.tf).toUpperCase()} đóng ${sh ? "trên đỉnh" : "dưới đáy"} gần nhất): đã đóng toàn bộ vị thế bằng lệnh thị trường.`);
        continue;
      }
      // các mức TP của kèo (có thể 2–4 mức), tỷ lệ chốt: TP1 50%, phần còn lại chia đều
      const T = (Array.isArray(j.tps) && j.tps.length >= 2 ? j.tps : [j.tp1, j.tp2]).map(x => x * mult);
      const F = Array.isArray(j.tpf) && j.tpf.length === T.length ? j.tpf : (T.length <= 1 ? [1] : [.5, ...Array(T.length - 1).fill(.5 / (T.length - 1))]);
      const near = (o, px) => Math.abs(parseFloat(o.triggerPx) / px - 1) < .002;
      const replaceSL = async (px, why) => {
        await cancelOids(sls.map(o => ({ asset: m.asset, oid: o.oid })));
        await placeOrders([trigO(m, fmtPx(lo(px, mark * (sh ? 1.005 : .995)), m.szDecimals), szS, "sl", null, sh)]);
        if (why) say(why);
      };
      if (h.st === "open" && h.part && !tps.length && (j.half || past(mark, T[0], .02))) {   // TP1 đã khớp → đặt thang TP cho phần còn lại, SL về Entry
        await cancelOids(sls.map(o => ({ asset: m.asset, oid: o.oid })));
        const rest = F.slice(1).reduce((a, x) => a + x, 0) || 1, lad = [], legs = [trigO(m, fmtPx(lo(entry, mark * (sh ? 1.005 : .995)), m.szDecimals), szS, "sl", null, sh)];
        let acc = 0, used = 0;
        for (let i = 1; i < T.length; i++) {
          acc += F[i] / rest;
          const last = i === T.length - 1, want = last ? size - used : size * acc;
          if (!last && want * T[i] < MIN_NOTIONAL * 1.05) continue;             // phần quá nhỏ (< 10 USD) gộp sang TP sau
          const sz = last ? fmtSz(size - used, m.szDecimals) : fmtSz(want, m.szDecimals); if (!(parseFloat(sz) > 0)) continue;
          legs.push(trigO(m, fmtPx(T[i], m.szDecimals), sz, "tp", null, sh)); lad.push(T[i]); used += parseFloat(sz); acc = 0;
        }
        await placeOrders(legs);
        h.st = "be"; h.lad = lad; h.ladHit = 0; h.at = Date.now();
        say(`<b>${esc(j.base)}</b> chạm TP1: đã chốt ${Math.round(F[0] * 100)}%, dời SL về Entry, đặt ${lad.length} TP cho phần còn lại (${lad.map(x => fmtPx(x / mult, m.szDecimals)).join(" · ")}).`);
      } else if (h.st === "be") {
        const lad = Array.isArray(h.lad) ? h.lad : [T[1]];                       // lệnh cũ chỉ có TP2
        const filled = lad.filter(px => !tps.some(o => near(o, px))).length;     // TP đã khớp (không còn trên sổ)
        const trailPx = k => { if (!k) return entry; const i = T.findIndex(x => Math.abs(x / lad[k - 1] - 1) < 1e-6); return i > 0 ? T[i - 1] : (k === 1 ? T[0] : lad[k - 2]); };   // SL = mức TP ngay trước TP vừa khớp
        if (filled > (h.ladHit || 0) && filled < lad.length) {
          h.ladHit = filled; const slPx = trailPx(filled);
          await replaceSL(slPx, `<b>${esc(j.base)}</b> chạm thêm TP (${filled + 1}/${lad.length + 1}): dời SL ${sh ? "xuống" : "lên"} ${fmtPx(slPx / mult, m.szDecimals)} để khoá lời.`);
        } else if (!sls.length) {
          const slPx = trailPx(h.ladHit || 0);
          await replaceSL(slPx, `Đặt lại SL cho <b>${esc(j.base)}</b> (không thấy SL trên sàn).`);
        } else if (sls.some(o => Math.abs(parseFloat(o.sz) - size) / size > .02)) {   // SL lệch khối lượng sau khi chốt bớt → chỉnh lại cho khớp vị thế
          const slPx = trailPx(h.ladHit || 0);
          await replaceSL(slPx, null);
        }
      } else if (!sls.length) {                                          // không thấy SL → đặt lại cho cả vị thế
        await replaceSL(stop, `Đặt lại SL cho <b>${esc(j.base)}</b> (không thấy SL trên sàn).`);
      }
    } catch (e) { errors.push(`${TAG} ${j.base}: ${e.message}`); }
  }

  // 2) vào lệnh cho kèo mới
  if (MODE !== "auto") return;
  // Cầu dao (B2): lỗ thực tế ≥ 3R trong ngày (giờ VN) → nghỉ tới hết ngày; ≥ 6R trong tuần (từ thứ Hai) → nghỉ tới tuần sau.
  // Chỉ chặn lệnh MỚI; lệnh đang mở vẫn được quản lý SL/TP bình thường.
  {
    const DAY_R = parseFloat(process.env.TRADE_DAY_STOP_R || "3"), WEEK_R = parseFloat(process.env.TRADE_WEEK_STOP_R || "6");
    const vn = Date.now() + 7 * 36e5, dayStart = Math.floor(vn / 864e5) * 864e5 - 7 * 36e5, weekStart = dayStart - ((new Date(vn).getUTCDay() + 6) % 7) * 864e5;
    const real = state.journal.filter(j => j.hl && !["skip", "na", "fail", "cancel"].includes(j.hl.st) && ["tp2", "trail", "tp1_be", "struct", "sl", "manual"].includes(j.status) && j.exitAt && isFinite(j.r));
    const sum = t0 => real.filter(j => j.exitAt >= t0).reduce((a, j) => a + j.r, 0), dR = sum(dayStart), wR = sum(weekStart);
    const why = dR <= -DAY_R ? `đã lỗ ${dR.toFixed(1)}R hôm nay (giới hạn −${DAY_R}R/ngày) → nghỉ mở lệnh mới tới hết ngày`
      : wR <= -WEEK_R ? `đã lỗ ${wR.toFixed(1)}R tuần này (giới hạn −${WEEK_R}R/tuần) → nghỉ mở lệnh mới tới thứ Hai` : null;
    if (why) {
      const key = new Date(vn).toISOString().slice(0, 10);
      if (state.breakerMsg !== key) { state.breakerMsg = key; say(`⛔ <b>Cầu dao ngắt lỗ</b>: ${why}. Lệnh đang mở vẫn được quản lý SL/TP.`); }
      state.hlMeta = { ...(state.hlMeta || {}), breaker: why };
      return;
    }
    if (state.hlMeta && state.hlMeta.breaker) state.hlMeta = { ...state.hlMeta, breaker: null };
  }
  // kèo mới của lượt này + kèo cũ còn mở/chờ khớp: vào giá thị trường nếu giá ≤ Entry và còn cách SL (chưa phá cấu trúc)
  const taken = new Set(state.journal.filter(j => j.hl && live(j.hl.st)).map(j => j.hl.coin));
  const ADOPT_MS = (parseFloat(process.env.TRADE_ADOPT_HOURS || "720") || 0) * 36e5;     // kèo cũ trong 30 ngày
  let nLive = state.journal.filter(j => j.hl && live(j.hl.st)).length, free = A.free;
  // rủi ro đang chịu (R): lệnh đã dời SL về Entry (be) coi như 0R
  let riskR = state.journal.filter(j => j.hl && ["placed", "open"].includes(j.hl.st)).length;
  const maxR = RISK > 0 && A.equity > 0 ? Math.floor(A.equity * MAX_RISK_PCT / 100 / RISK + 1e-9) : MAX_OPEN;
  for (const j of [...state.journal].reverse()) {                  // kèo mới nhất trước
    if ((j.hl && !["skip", "na"].includes(j.hl.st)) || !["open", "pending"].includes(j.status)) continue;   // kèo bị bỏ qua trước đó được xét lại
    const late = !newIds.has(j.id); if (late && !(Date.now() - j.at < ADOPT_MS)) continue;
    if (j.by !== "github" && allowed && allowed.size && !allowed.has(j.base)) { if (!j.hl) j.hl = { st: "skip", why: "kèo nhập ngoài, mã không thuộc danh sách quét", at: Date.now() }; continue; }   // kèo bot tự pick luôn hợp lệ (kể cả khi coin rớt khỏi top 100 sau đó); chỉ chặn kèo nhập từ ngoài không thuộc danh sách
    if (j.hl && j.hl.st === "skip" && !late) continue;
    let f = null; try { f = findMarket(M, j); } catch (e) { console.log(`${TAG}: lỗi tìm mã ${j.base} (${e.message})`); }
    if (!f) { if (!j.hl) j.hl = { st: "na" }; continue; }
    const { m, mult } = f, coin = m.name;
    // kèo cũ chưa đủ điều kiện → bỏ qua lặng lẽ, lượt sau xét lại (không spam Telegram)
    const skip = why => { if (late) { console.log(`${TAG}: chưa vào ${j.base} (${why})`); return; } j.hl = { st: "skip", why, coin, at: Date.now() }; say(`Bỏ qua <b>${esc(j.base)}</b>: ${why}.`); };
    try {
      if (nLive >= MAX_OPEN) { skip(`đã đủ ${MAX_OPEN} lệnh đang mở`); continue; }
      if (riskR + 1 > maxR) { skip(`tổng rủi ro các lệnh đang mở đã chạm ${MAX_RISK_PCT}% portfolio (${riskR}R)`); continue; }
      if (A.pos.has(coin) || taken.has(coin)) { skip("đang có vị thế / lệnh mã này trên sàn"); continue; }
      const apr = parseFloat(m.ctx.funding || 0) * 8760 * 100;
      const sh = j.side === "short";
      if (!sh && apr > MAX_FUND_APR) { skip(`funding ${apr.toFixed(0)}%/năm cao hơn ngưỡng ${MAX_FUND_APR}%`); continue; }
      if (sh && -apr > MAX_FUND_APR) { skip(`funding ${apr.toFixed(0)}%/năm: short phải trả phí quá cao (ngưỡng −${MAX_FUND_APR}%)`); continue; }
      const mark = markOf(m), limit = !late && j.status === "pending";   // kèo cũ: chỉ vào giá thị trường khi giá ≤ Entry
      const entry = limit ? j.entry * mult : mark, stop = j.stop * mult, tp1 = j.tp1 * mult, tp2 = j.tp2 * mult;
      if (!(entry > 0) || (sh ? stop <= entry * 1.002 || tp1 >= entry : stop >= entry * .998 || tp1 <= entry)) { skip("giá trên sàn đã lệch khỏi vùng Entry/SL/TP"); continue; }
      if (late) {
        if (sh ? mark < j.entry * mult * .997 : mark > j.entry * mult * 1.003) { skip(`giá đang ${sh ? "thấp" : "cao"} hơn Entry, chờ giá về Entry`); continue; }
        if (sh ? mark > stop - (stop - j.entry * mult) * .25 : mark < stop + (j.entry * mult - stop) * .25) { skip("giá đã sát SL, cấu trúc kỹ thuật gần bị phá"); continue; }
      }
      const P = plan(m, entry, stop);
      if (free < P.margin * 1.1 + 1) { skip(`không đủ tiền ký quỹ (cần ~${(P.margin * 1.1 + 1).toFixed(1)} USDC)`); continue; }
      const sz = fmtSz(P.notional / entry, m.szDecimals), szN = parseFloat(sz);
      if (!(szN > 0) || szN * entry < MIN_NOTIONAL) { skip(`khối lượng ~${(szN * entry).toFixed(1)} USD nhỏ hơn mức tối thiểu 10 USD của sàn (SL quá xa)`); continue; }
      const half = fmtSz(szN / 2, m.szDecimals), part = parseFloat(half) * tp1 >= MIN_NOTIONAL * 1.05;
      await setLeverage(m, P.lev, false);
      const cid = cloidOf("r" + j.id + "e" + (j.rev || ""));          // rev: kèo đã được dời mức → cloid mới
      const ent = limit ? limitO(m, !sh, fmtPx(entry, m.szDecimals, sh ? "up" : "down"), sz, "Gtc", cid)
                        : limitO(m, !sh, fmtPx(mark * (sh ? .97 : 1.03), m.szDecimals, sh ? "down" : "up"), sz, "Ioc", cid);
      await placeOrders([ent, trigO(m, fmtPx(stop, m.szDecimals), sz, "sl", null, sh), trigO(m, fmtPx(tp1, m.szDecimals), part ? half : sz, "tp", null, sh)], "normalTpsl");
      j.hl = { st: "placed", coin, mult, cid, part, at: Date.now(), kind: limit ? "limit" : "market" };
      nLive++; riskR++; free -= P.margin; taken.add(coin);
      const vol = szN * entry;
      say(`${sh ? (limit ? "Đặt lệnh chờ SHORT" : "SHORT") : (limit ? "Đặt lệnh chờ mua" : "Mua")}${late ? " (vào muộn kèo cũ)" : ""} <b>${esc(j.base)}</b>${m.short !== (j.src === "st" ? j.sym : j.base).toUpperCase() || m.dex ? ` (trên sàn: ${esc(m.name)})` : ""} (${j.tf.toUpperCase()}) · Entry ${limit ? j.entry : "market"} · SL ${j.stop} (${sh ? "+" : "-"}${(P.sl * 100).toFixed(1)}%) · TP1 ${j.tp1}${part ? " (50%)" : " (đóng hết, lệnh quá nhỏ để chia đôi)"} · TP2 ${j.tp2}${Array.isArray(j.tps) && j.tps.length > 2 ? " · " + j.tps.slice(2).map((x, i) => `TP${i + 3} ${x}`).join(" · ") + " (phần còn lại chia đều các TP sau TP1)" : ""}\n` +
        (RISK > 0 ? `Rủi ro 1R = ${RISK} USDC · khối lượng ~${vol.toFixed(0)} USDC · đòn bẩy ${P.lev}x isolated · ký quỹ ~${P.margin.toFixed(1)} USDC · giá thanh lý ~${(P.liq / mult).toPrecision(5)} (SL dùng ${(P.share * 100).toFixed(0)}% khoảng cách)` : `~${vol.toFixed(0)} USDC, đòn bẩy 1x`) + link());
    } catch (e) { j.hl = { st: "fail", why: e.message.slice(0, 140), coin, at: Date.now() }; errors.push(`${TAG} ${j.base}: ${e.message}`); say(`Lỗi khi vào lệnh <b>${esc(j.base)}</b>: ${esc(e.message.slice(0, 160))}`); }
  }
}

export const _test = { signL1, fmtPx, fmtSz, wire, cloidOf, plan, libs, setWallet: w => { WALLET = w; } };
