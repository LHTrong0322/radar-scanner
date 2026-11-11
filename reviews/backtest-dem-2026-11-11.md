# Tổng kết tối ưu backtest 10–11/11/2026

Đây là báo cáo để thảo luận. Chưa có thay đổi nào ngoài những luật Trọng đã duyệt bật trong ngày 11/11.

## Kết luận chính (vòng 5: xét mọi nến 4H, 2 năm, ~100 coin)
| Bộ luật | Lệnh | Tổng R | R/lệnh | Win rate | PF | Max DD | Năm 1 / Năm 2 |
|---|---|---|---|---|---|---|---|
| Luật cũ (trước 11/11) | 1262 | −32.8R | −0.026 | 27.3% | 0.95 | 116R | +10 / −43 |
| **Luật hiện tại (live)** | 268 | **+32.7R** | **+0.122** | 28.7% | 1.24 | **34R** | +29 / +4 |
| Hiện tại nhưng bỏ "khung lớn phải tăng" | 387 | +66.4R | +0.171 | 30.0% | 1.33 | 42R | +46 / +20 ✅ |
| Hiện tại nhưng bỏ lọc BTC > EMA200 | 318 | +36.6R | +0.115 | 29.2% | 1.23 | 29R | +29 / +8 |
| Hiện tại nhưng bỏ xác nhận khung nhỏ (A2) | 553 | −16.5R | −0.030 | 27.5% | 0.94 | 84R | +13 / −29 ❌ |
| Hiện tại nhưng Dow cho phép "vừa phá đỉnh thấp hơn" | 324 | +41.9R | +0.129 | 29.9% | 1.26 | 28R | +38 / +4 |
| Hiện tại + bỏ điểm break mây | 262 | +17.4R | +0.066 | 27.9% | 1.13 | 48R | +6 / +11 |

- Luật quan trọng nhất là **A2 – khung nhỏ phải xác nhận cấu trúc tăng**: bỏ nó đi thì từ +32.7R về −16.5R.
- **"Khung lớn phải tăng" khi đã có A2 lại làm giảm hiệu quả** (bỏ nó: +66R, tốt hơn cả 2 năm). Kết quả vòng 3 (+72.5R) bị nhiễu do lấy mẫu 4H cách 3 nến.
- Lọc BTC và Dow chặt: gần như trung tính (giảm số lệnh, R/lệnh tương đương).
- Khung 1D/1W quá ít lệnh (24 và 4) để kết luận; gần như toàn bộ lợi nhuận đến từ 4H.
- Chưa tính phí/funding (~0.03–0.05R/lệnh) → luật hiện tại sau phí còn khoảng +0.07–0.09R/lệnh.

## Đề xuất để thảo luận
1. Cân nhắc tắt "khung lớn phải tăng" (giữ A2) — dữ liệu ủng hộ, tự tin trung bình; nên chạy lại thêm 1 lần để chắc.
2. Giữ lọc BTC > EMA200 vì an toàn (không làm giảm hiệu quả rõ rệt, thị trường xấu thì đứng ngoài).
3. Backtest riêng BTC 15m/1h trước khi để bot đánh thật số tiền lớn.

Lịch sử các vòng: experiments/BACKLOG.md · số liệu chi tiết: backtests/
