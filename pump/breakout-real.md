# Kiểm tra lại Breakout như bot thật (trước khi Trọng duyệt)

Tạo lúc 2026-11-12T08:20 UTC · 165 mã (đã bỏ BTC — BTC dành cho chiến lược RSI) · khung D1.
Luật: nến ngày ĐÃ ĐÓNG vượt đỉnh 60 ngày + volume ngày đó ≥ 2 lần trung bình 30 ngày → mua giá mở cửa hôm sau. TP = 3 lần SL, giữ tối đa 14 ngày.
Đủ phòng thủ như bot thật: altcoin chỉ khi BTC 1D trên EMA200 **VÀ** BTC 1D có cấu trúc Dow tăng (nến đã đóng); cổ phiếu/hàng hoá luôn được. Ví 100 USD, 1R = 3 USD, trần rủi ro 30% vốn, cầu dao −3R/ngày, −6R/tuần. Phí 0.045%×2, trượt giá 0.05%×2, funding ~0.03%/ngày. SL và TP chạm cùng ngày → tính thua.

Lệnh bot hiện tại lấy từ: 2026-11-12-long-tin-hieu-pump.json (952 lệnh từ 2023).

Mỗi giai đoạn chạy ví riêng bắt đầu 100 USD.

| Phương án | Giai đoạn | Lệnh | Thắng | Tổng R | Rủi ro tụt vốn (95%) | Ví cuối | Tụt vốn lớn nhất | Thua liên tiếp dài nhất | Tháng tệ nhất | Kèo bị cầu dao/trần chặn |
|---|---|---|---|---|---|---|---|---|---|---|
| Breakout SL 15% (chạy riêng) | 2023–2025 | 829 | 46% | **214.0R** | 22.7R | 742$ | 283$ (28%) | 54 | 2025-05 (-88$) | 490 |
| Breakout SL 15% (chạy riêng) | 2026 (kín) | 107 | 49% | **30.7R** | 12.4R | 192$ | 34$ (15%) | 11 | 2026-10 (-33$) | 39 |
| Breakout SL 10% (chạy riêng) | 2023–2025 | 960 | 41% | **264.2R** | 26.9R | 893$ | 328$ (30%) | 39 | 2025-05 (-93$) | 359 |
| Breakout SL 10% (chạy riêng) | 2026 (kín) | 107 | 37% | **11.3R** | 20.6R | 134$ | 43$ (24%) | 15 | 2026-10 (-40$) | 39 |
| Bot hiện tại (chạy riêng) | 2023–2025 | 161 | 49% | **113.7R** | 8.9R | 441$ | 20$ (11%) | 10 | 2024-08 (-6$) | 25 |
| Bot hiện tại (chạy riêng) | 2026 (kín) | 22 | 5% | **-17.6R** | 18.2R | 47$ | 53$ (53%) | 11 | 2026-09 (-13$) | 36 |
| Bot + Breakout SL 15% (1R) | 2023–2025 | 1013 | 47% | **353.0R** | 19.6R | 1159$ | 260$ (23%) | 67 | 2025-05 (-92$) | 615 |
| Bot + Breakout SL 15% (1R) | 2026 (kín) | 96 | 44% | **13.7R** | 14.8R | 141$ | 31$ (18%) | 9 | 2026-10 (-22$) | 119 |
| Bot + Breakout SL 15% (0.5R) | 2023–2025 | 719 | 48% | **143.7R** | 10.8R | 531$ | 53$ (14%) | 20 | 2025-05 (-47$) | 967 |
| Bot + Breakout SL 15% (0.5R) | 2026 (kín) | 77 | 47% | **0.5R** | 9.8R | 101$ | 24$ (19%) | 11 | 2026-06 (-16$) | 152 |

### Breakout SL 15% theo năm (ví chạy liền từ 2023, chỉ lệnh ví vào được)

| Năm | Lệnh | Thắng | Tổng R |
|---|---|---|---|
| 2023 | 179 | 50% | 78.6R |
| 2024 | 418 | 50% | 173.6R |
| 2025 | 232 | 36% | -38.2R |
| 2026 | 136 | 45% | 25.6R |

### Phụ thuộc vào vài mã? 5 mã lời nhất góp 74.9R / tổng 239.6R

AMD 17.8R · SOL 16.0R · NEAR 14.1R · DASH 13.7R · ADA 13.2R … lỗ nhất: JUP -4.1R · SAND -4.1R · APT -4.2R · WLD -7.1R · ZEN -10.2R

## Lưu ý trung thực
- Danh sách mã là mã còn sống / đang có trên Hyperliquid → quá khứ của chiến lược mua breakout đẹp hơn thực tế (coin breakout rồi chết không có trong mẫu).
- Luật được rút ra từ dữ liệu 2023–2025 → 2026 mới là thước đo thật.