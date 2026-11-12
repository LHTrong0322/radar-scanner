# Kiểm tra lại Breakout như bot thật (trước khi Trọng duyệt)

Tạo lúc 2026-11-12T08:17 UTC · 165 mã (đã bỏ BTC — BTC dành cho chiến lược RSI) · khung D1.
Luật: nến ngày ĐÃ ĐÓNG vượt đỉnh 60 ngày + volume ngày đó ≥ 2 lần trung bình 30 ngày → mua giá mở cửa hôm sau. TP = 3 lần SL, giữ tối đa 14 ngày.
Đủ phòng thủ như bot thật: altcoin chỉ khi BTC 1D trên EMA200 **VÀ** BTC 1D có cấu trúc Dow tăng (nến đã đóng); cổ phiếu/hàng hoá luôn được. Ví 100 USD, 1R = 3 USD, trần rủi ro 30% vốn, cầu dao −3R/ngày, −6R/tuần. Phí 0.045%×2, trượt giá 0.05%×2, funding ~0.03%/ngày. SL và TP chạm cùng ngày → tính thua.

Lệnh bot hiện tại lấy từ: 2026-11-12-long-tin-hieu-pump.json (952 lệnh từ 2023).

Mỗi giai đoạn chạy ví riêng bắt đầu 100 USD.

| Phương án | Giai đoạn | Lệnh | Thắng | Tổng R | Rủi ro tụt vốn (95%) | Ví cuối | Tụt vốn lớn nhất | Thua liên tiếp dài nhất | Tháng tệ nhất | Kèo bị cầu dao/trần chặn |
|---|---|---|---|---|---|---|---|---|---|---|
| Breakout SL 15% (chạy riêng) | 2023–2025 | 1319 | 48% | **440.3R** | 20.7R | 730$ | 283$ (29%) | 54 | 2025-05 (-88$) | 487 |
| Breakout SL 15% (chạy riêng) | 2026 (kín) | 146 | 45% | **28.0R** | 16.9R | 192$ | 34$ (15%) | 11 | 2026-10 (-33$) | 39 |
| Breakout SL 10% (chạy riêng) | 2023–2025 | 1319 | 40% | **313.0R** | 31.9R | 903$ | 328$ (30%) | 39 | 2025-05 (-93$) | 361 |
| Breakout SL 10% (chạy riêng) | 2026 (kín) | 146 | 33% | **0.9R** | 29.1R | 134$ | 43$ (24%) | 15 | 2026-10 (-40$) | 39 |
| Bot hiện tại (chạy riêng) | 2023–2025 | 176 | 49% | **123.3R** | 9.5R | 441$ | 20$ (11%) | 10 | 2024-08 (-6$) | 25 |
| Bot hiện tại (chạy riêng) | 2026 (kín) | 33 | 12% | **-15.0R** | 19.7R | 47$ | 53$ (53%) | 11 | 2026-09 (-13$) | 36 |
| Bot + Breakout SL 15% (1R) | 2023–2025 | 1495 | 48% | **563.6R** | 19.1R | 1167$ | 263$ (23%) | 68 | 2025-05 (-92$) | 614 |
| Bot + Breakout SL 15% (1R) | 2026 (kín) | 179 | 39% | **12.9R** | 23.1R | 141$ | 31$ (18%) | 9 | 2026-10 (-22$) | 119 |
| Bot + Breakout SL 15% (0.5R) | 2023–2025 | 1495 | 48% | **343.4R** | 10.8R | 545$ | 57$ (14%) | 23 | 2025-05 (-48$) | 954 |
| Bot + Breakout SL 15% (0.5R) | 2026 (kín) | 179 | 39% | **-1.0R** | 17.6R | 101$ | 24$ (19%) | 11 | 2026-06 (-16$) | 152 |

### Breakout SL 15% theo năm (ví chạy liền từ 2023)

| Năm | Lệnh | Thắng | Tổng R |
|---|---|---|---|
| 2023 | 185 | 50% | 79.8R |
| 2024 | 415 | 50% | 168.6R |
| 2025 | 232 | 36% | -38.2R |
| 2026 | 136 | 45% | 25.6R |

### Phụ thuộc vào vài mã? 5 mã lời nhất góp 106.0R / tổng 468.3R

SOL 24.4R · AVAX 23.9R · NEAR 20.3R · ADA 18.7R · INJ 18.6R … lỗ nhất: APT -4.3R · SEI -4.8R · SAND -5.8R · WLD -7.1R · CELO -8.5R

## Lưu ý trung thực
- Danh sách mã là mã còn sống / đang có trên Hyperliquid → quá khứ của chiến lược mua breakout đẹp hơn thực tế (coin breakout rồi chết không có trong mẫu).
- Luật được rút ra từ dữ liệu 2023–2025 → 2026 mới là thước đo thật.