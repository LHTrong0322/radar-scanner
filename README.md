# Crypto RSI Radar · máy quét 24/7

Máy quét này chạy trên GitHub Actions mỗi 30 phút, kể cả khi bạn tắt máy:

- Quét top 100 crypto (CoinGecko) và các mã cổ phiếu ở khung 4H, 1D, 1W bằng đúng thuật toán của trang web (đọc từ `index.html`).
- Ghi kèo đạt chuẩn (≥ 65 điểm, R:R ≥ 1:2, SL ≤ 35%) vào `data/state.json`.
- Chấm các lệnh đang mở theo nến 1H: khớp lệnh chờ, chạm TP1 (chốt 50%, dời SL về Entry), chốt TP2, dính SL.
- Gửi thông báo Telegram khi có kèo mới hoặc lệnh thay đổi trạng thái.
- Trang web đọc `data/state.json` qua biến `STATE_URL` trên Cloudflare, nên mọi thiết bị thấy cùng một nhật ký.

## Các file

| File | Vai trò |
|---|---|
| `index.html` | Trang web, đồng thời là nơi chứa thuật toán. Khi có bản mới, tải đè file này lên repo. |
| `scanner/scan.mjs` | Máy quét. |
| `.github/workflows/radar.yml` | Lịch chạy mỗi 30 phút. |
| `data/state.json` | Kết quả quét và nhật ký lệnh (bot tự cập nhật). |

## Biến cần cài

GitHub → Settings → Secrets and variables → Actions:

| Tên | Loại | Bắt buộc | Giá trị |
|---|---|---|---|
| `TELEGRAM_BOT_TOKEN` | Secret | Có | Token lấy từ @BotFather |
| `TELEGRAM_CHAT_ID` | Secret | Có | Chat ID của bạn |
| `COINGECKO_KEY` | Secret | Không | Demo key CoinGecko (giảm lỗi giới hạn lượt gọi) |
| `SITE_URL` | Variable | Không | `https://smartpengu.pages.dev` (để tin Telegram có link mở trang) |

Cloudflare Pages → Settings → Variables and Secrets: `STATE_URL` = link Raw của `data/state.json`.

## Lưu ý

- GitHub có thể chạy trễ lịch 5–15 phút lúc đông người dùng.
- Repo nên để Public để GitHub Actions miễn phí không giới hạn phút chạy. Khi đó nhật ký kèo cũng công khai (không chứa thông tin cá nhân hay khoá API).
- Nếu repo không có hoạt động trong 60 ngày, GitHub sẽ tạm tắt lịch chạy. Vào tab Actions và bấm Enable workflow để bật lại.
- Muốn chạy ngay: tab Actions → Radar scanner → Run workflow.
