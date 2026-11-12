# Kiểm tra lại Breakout như bot thật (trước khi Trọng duyệt)

Tạo lúc 2026-11-12T08:51 UTC · 165 mã (đã bỏ BTC — BTC dành cho chiến lược RSI) · khung D1.
Luật: nến ngày ĐÃ ĐÓNG vượt đỉnh 60 ngày + volume ngày đó ≥ 2 lần trung bình 30 ngày → mua giá mở cửa hôm sau. TP = 3 lần SL, giữ tối đa 14 ngày.
Đủ phòng thủ như bot thật: altcoin chỉ khi BTC 1D trên EMA200 **VÀ** BTC 1D có cấu trúc Dow tăng (nến đã đóng); cổ phiếu/hàng hoá luôn được. Ví 100 USD, 1R = 3 USD, trần rủi ro 30% vốn, cầu dao −3R/ngày, −6R/tuần. Phí 0.045%×2, trượt giá 0.05%×2, funding ~0.03%/ngày. SL và TP chạm cùng ngày → tính thua.

Lệnh bot hiện tại lấy từ: 2026-11-12-long-bot-p1.json (967 lệnh từ 2023).

Mỗi giai đoạn chạy ví riêng bắt đầu 100 USD.

| Phương án | Giai đoạn | Lệnh | Thắng | Tổng R | Rủi ro tụt vốn (95%) | Ví cuối | Tụt vốn lớn nhất | Thua liên tiếp dài nhất | Tháng tệ nhất | Kèo bị cầu dao/trần chặn |
|---|---|---|---|---|---|---|---|---|---|---|
| Breakout SL 15% (chạy riêng) | 2023–2025 | 830 | 46% | **208.0R** | 22.7R | 724$ | 280$ (29%) | 55 | 2025-05 (-88$) | 489 |
| Breakout SL 15% (chạy riêng) | 2026 (kín) | 107 | 49% | **30.7R** | 12.6R | 192$ | 34$ (15%) | 11 | 2026-10 (-33$) | 39 |
| Breakout SL 10% (chạy riêng) | 2023–2025 | 954 | 41% | **257.4R** | 28.0R | 872$ | 328$ (30%) | 40 | 2025-05 (-93$) | 365 |
| Breakout SL 10% (chạy riêng) | 2026 (kín) | 107 | 37% | **11.3R** | 19.3R | 134$ | 43$ (24%) | 15 | 2026-10 (-40$) | 39 |
| Bot hiện tại (chạy riêng) | 2023–2025 | 162 | 50% | **120.8R** | 8.5R | 462$ | 20$ (11%) | 10 | 2024-08 (-6$) | 23 |
| Bot hiện tại (chạy riêng) | 2026 (kín) | 22 | 5% | **-17.6R** | 18.2R | 47$ | 53$ (53%) | 11 | 2026-09 (-13$) | 37 |
| Bot + Breakout SL 15% (1R) | 2023–2025 | 1030 | 47% | **365.9R** | 20.2R | 1198$ | 278$ (23%) | 75 | 2025-05 (-92$) | 606 |
| Bot + Breakout SL 15% (1R) | 2026 (kín) | 96 | 44% | **13.7R** | 15.1R | 141$ | 31$ (18%) | 9 | 2026-10 (-22$) | 120 |
| Bot + Breakout SL 15% (0.5R) | 2023–2025 | 738 | 48% | **151.8R** | 10.8R | 555$ | 60$ (14%) | 32 | 2025-05 (-48$) | 958 |
| Bot + Breakout SL 15% (0.5R) | 2026 (kín) | 77 | 47% | **0.5R** | 10.4R | 101$ | 24$ (19%) | 11 | 2026-06 (-16$) | 153 |

### Các lớp phòng thủ thêm cho Breakout (chung ví, lệnh Breakout 1R)

- **A. Tối đa 5 (hoặc 10) lệnh Breakout cùng lúc** — tránh ôm quá nhiều coin cùng chạy theo một nhịp thị trường.
- **B. Cầu dao tụt vốn:** ví tụt quá 10R (30$) so với đỉnh → tạm dừng mở Breakout mới cho tới khi ví hồi lại.
- **C. Cầu dao tháng:** riêng Breakout lỗ quá 8R trong 30 ngày gần nhất → tạm dừng mở Breakout mới.
- **D. BTC gãy là đóng:** altcoin Breakout đang mở bị đóng ngay khi BTC 1D xuống dưới EMA200 hoặc Dow 1D hết tăng.

| Phương án | Giai đoạn | Lệnh | Thắng | Tổng R | Rủi ro tụt vốn (95%) | Ví cuối | Tụt vốn lớn nhất | Thua liên tiếp dài nhất | Tháng tệ nhất | Kèo bị chặn |
|---|---|---|---|---|---|---|---|---|---|---|
| Bot + Breakout 1R (chưa thêm gì) | 2023–2025 | 1030 | 47% | **365.9R** | 20.0R | 1198$ | 278$ (23%) | 75 | 2025-05 (-92$) | 606 |
| Bot + Breakout 1R (chưa thêm gì) | 2026 (kín) | 96 | 44% | **13.7R** | 15.5R | 141$ | 31$ (18%) | 9 | 2026-10 (-22$) | 120 |
| + A: tối đa 5 lệnh Breakout | 2023–2025 | 407 | 51% | **197.0R** | 12.1R | 691$ | 23$ (23%) | 8 | 2024-08 (-12$) | 1097 |
| + A: tối đa 5 lệnh Breakout | 2026 (kín) | 68 | 41% | **0.7R** | 15.0R | 102$ | 53$ (34%) | 10 | 2026-06 (-21$) | 133 |
| + A: tối đa 10 lệnh Breakout | 2023–2025 | 543 | 50% | **218.9R** | 14.6R | 757$ | 60$ (23%) | 12 | 2025-05 (-39$) | 970 |
| + A: tối đa 10 lệnh Breakout | 2026 (kín) | 94 | 46% | **18.8R** | 13.7R | 156$ | 32$ (17%) | 9 | 2026-10 (-25$) | 112 |
| + B: cầu dao tụt vốn 10R | 2023–2025 | 713 | 51% | **379.0R** | 13.9R | 1237$ | 221$ (23%) | 67 | 2023-07 (-9$) | 918 |
| + B: cầu dao tụt vốn 10R | 2026 (kín) | 96 | 44% | **13.7R** | 14.8R | 141$ | 31$ (18%) | 9 | 2026-10 (-22$) | 120 |
| + C: cầu dao tháng −8R | 2023–2025 | 1005 | 48% | **373.2R** | 19.7R | 1220$ | 251$ (23%) | 75 | 2025-05 (-74$) | 629 |
| + C: cầu dao tháng −8R | 2026 (kín) | 96 | 44% | **13.7R** | 15.1R | 141$ | 31$ (18%) | 9 | 2026-10 (-22$) | 120 |
| + D: BTC gãy là đóng | 2023–2025 | 937 | 48% | **311.5R** | 18.4R | 1035$ | 260$ (22%) | 20 | 2025-05 (-92$) | 726 |
| + D: BTC gãy là đóng | 2026 (kín) | 92 | 41% | **15.6R** | 11.6R | 147$ | 43$ (23%) | 13 | 2026-06 (-18$) | 122 |
| + A5 + B + C + D (tất cả) | 2023–2025 | 403 | 52% | **187.6R** | 11.7R | 663$ | 24$ (22%) | 9 | 2023-02 (-20$) | 1110 |
| + A5 + B + C + D (tất cả) | 2026 (kín) | 63 | 41% | **2.4R** | 13.4R | 107$ | 52$ (33%) | 7 | 2026-06 (-18$) | 131 |
| + A5 + D | 2023–2025 | 403 | 52% | **187.6R** | 11.7R | 663$ | 24$ (22%) | 9 | 2023-02 (-20$) | 1110 |
| + A5 + D | 2026 (kín) | 73 | 41% | **5.8R** | 13.0R | 117$ | 42$ (26%) | 11 | 2026-06 (-18$) | 124 |
| Breakout 0.5R + tất cả | 2023–2025 | 395 | 52% | **150.8R** | 8.7R | 552$ | 22$ (13%) | 9 | 2023-02 (-12$) | 1124 |
| Breakout 0.5R + tất cả | 2026 (kín) | 67 | 43% | **-4.6R** | 11.9R | 86$ | 37$ (30%) | 9 | 2026-06 (-15$) | 148 |

### Breakout SL 15% theo năm (ví chạy liền từ 2023, chỉ lệnh ví vào được)

| Năm | Lệnh | Thắng | Tổng R |
|---|---|---|---|
| 2023 | 183 | 51% | 80.3R |
| 2024 | 415 | 50% | 166.0R |
| 2025 | 232 | 36% | -38.2R |
| 2026 | 136 | 45% | 25.6R |

### Phụ thuộc vào vài mã? 5 mã lời nhất góp 74.5R / tổng 233.6R

AMD 17.5R · SOL 16.0R · NEAR 14.1R · DASH 13.7R · ADA 13.2R … lỗ nhất: AR -4.1R · SAND -4.1R · APT -4.2R · WLD -7.1R · ZEN -10.2R

## Lưu ý trung thực
- Danh sách mã là mã còn sống / đang có trên Hyperliquid → quá khứ của chiến lược mua breakout đẹp hơn thực tế (coin breakout rồi chết không có trong mẫu).
- Luật được rút ra từ dữ liệu 2023–2025 → 2026 mới là thước đo thật.