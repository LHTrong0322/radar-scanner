# Kiểm tra lại Breakout như bot thật (trước khi Trọng duyệt)

Tạo lúc 2026-11-12T09:20 UTC · 165 mã (đã bỏ BTC — BTC dành cho chiến lược RSI) · khung D1.
Luật: nến ngày ĐÃ ĐÓNG vượt đỉnh 60 ngày + volume ngày đó ≥ 2 lần trung bình 30 ngày → mua giá mở cửa hôm sau. TP = 3 lần SL, giữ tối đa 14 ngày.
Đủ phòng thủ như bot thật: altcoin chỉ khi BTC 1D trên EMA200 **VÀ** BTC 1D có cấu trúc Dow tăng (nến đã đóng); cổ phiếu/hàng hoá luôn được. Ví 100 USD, 1R = 3 USD, trần rủi ro 30% vốn, cầu dao −3R/ngày, −6R/tuần. Phí 0.045%×2, trượt giá 0.05%×2, funding ~0.03%/ngày. SL và TP chạm cùng ngày → tính thua.

Lệnh bot hiện tại lấy từ: 2026-11-12-long-bot-p1.json (967 lệnh từ 2023).

Mỗi giai đoạn chạy ví riêng bắt đầu 100 USD.

| Phương án | Giai đoạn | Lệnh | Thắng | Tổng R | Rủi ro tụt vốn (95%) | Ví cuối | Tụt vốn lớn nhất | Thua liên tiếp dài nhất | Tháng tệ nhất | Kèo bị cầu dao/trần chặn |
|---|---|---|---|---|---|---|---|---|---|---|
| Breakout SL 15% (chạy riêng) | 2023–2025 | 826 | 46% | **195.4R** | 22.4R | 686$ | 279$ (30%) | 54 | 2025-05 (-88$) | 493 |
| Breakout SL 15% (chạy riêng) | 2026 (kín) | 107 | 49% | **30.7R** | 11.9R | 192$ | 34$ (15%) | 11 | 2026-10 (-33$) | 39 |
| Breakout SL 10% (chạy riêng) | 2023–2025 | 959 | 41% | **264.9R** | 28.0R | 895$ | 328$ (30%) | 39 | 2025-05 (-93$) | 360 |
| Breakout SL 10% (chạy riêng) | 2026 (kín) | 107 | 37% | **11.3R** | 20.2R | 134$ | 43$ (24%) | 15 | 2026-10 (-40$) | 39 |
| Bot hiện tại (chạy riêng) | 2023–2025 | 162 | 50% | **120.8R** | 8.8R | 462$ | 20$ (11%) | 10 | 2024-08 (-6$) | 23 |
| Bot hiện tại (chạy riêng) | 2026 (kín) | 22 | 5% | **-17.6R** | 18.2R | 47$ | 53$ (53%) | 11 | 2026-09 (-13$) | 37 |
| Bot + Breakout SL 15% (1R) | 2023–2025 | 1034 | 47% | **366.7R** | 19.4R | 1200$ | 275$ (23%) | 73 | 2025-05 (-92$) | 600 |
| Bot + Breakout SL 15% (1R) | 2026 (kín) | 96 | 44% | **13.7R** | 14.7R | 141$ | 31$ (18%) | 9 | 2026-10 (-22$) | 120 |
| Bot + Breakout SL 15% (0.5R) | 2023–2025 | 759 | 47% | **159.7R** | 10.9R | 579$ | 59$ (14%) | 33 | 2025-05 (-48$) | 927 |
| Bot + Breakout SL 15% (0.5R) | 2026 (kín) | 77 | 47% | **0.5R** | 10.0R | 101$ | 24$ (19%) | 11 | 2026-06 (-16$) | 153 |

### Các lớp phòng thủ thêm cho Breakout (chung ví, lệnh Breakout 1R)

- **A. Tối đa 5 (hoặc 10) lệnh Breakout cùng lúc** — tránh ôm quá nhiều coin cùng chạy theo một nhịp thị trường.
- **B. Cầu dao tụt vốn:** ví tụt quá 10R (30$) so với đỉnh → tạm dừng mở Breakout mới cho tới khi ví hồi lại.
- **C. Cầu dao tháng:** riêng Breakout lỗ quá 8R trong 30 ngày gần nhất → tạm dừng mở Breakout mới.
- **D. BTC gãy là đóng:** altcoin Breakout đang mở bị đóng ngay khi BTC 1D xuống dưới EMA200 hoặc Dow 1D hết tăng.

| Phương án | Giai đoạn | Lệnh | Thắng | Tổng R | Rủi ro tụt vốn (95%) | Ví cuối | Tụt vốn lớn nhất | Thua liên tiếp dài nhất | Tháng tệ nhất | Kèo bị chặn |
|---|---|---|---|---|---|---|---|---|---|---|
| Bot + Breakout 1R (chưa thêm gì) | 2023–2025 | 1034 | 47% | **366.7R** | 19.3R | 1200$ | 275$ (23%) | 73 | 2025-05 (-92$) | 600 |
| Bot + Breakout 1R (chưa thêm gì) | 2026 (kín) | 96 | 44% | **13.7R** | 15.3R | 141$ | 31$ (18%) | 9 | 2026-10 (-22$) | 120 |
| + A: tối đa 5 lệnh Breakout | 2023–2025 | 404 | 51% | **203.5R** | 11.4R | 710$ | 23$ (23%) | 8 | 2024-08 (-12$) | 1100 |
| + A: tối đa 5 lệnh Breakout | 2026 (kín) | 68 | 41% | **0.7R** | 15.3R | 102$ | 53$ (34%) | 10 | 2026-06 (-21$) | 133 |
| + A: tối đa 10 lệnh Breakout | 2023–2025 | 543 | 49% | **219.4R** | 14.7R | 758$ | 60$ (23%) | 12 | 2025-05 (-39$) | 967 |
| + A: tối đa 10 lệnh Breakout | 2026 (kín) | 94 | 46% | **18.8R** | 13.5R | 156$ | 32$ (17%) | 9 | 2026-10 (-25$) | 112 |
| + B: cầu dao tụt vốn 10R | 2023–2025 | 717 | 51% | **383.1R** | 14.1R | 1249$ | 218$ (23%) | 65 | 2023-07 (-9$) | 913 |
| + B: cầu dao tụt vốn 10R | 2026 (kín) | 96 | 44% | **13.7R** | 15.0R | 141$ | 31$ (18%) | 9 | 2026-10 (-22$) | 120 |
| + C: cầu dao tháng −8R | 2023–2025 | 1009 | 47% | **374.0R** | 19.4R | 1222$ | 248$ (23%) | 73 | 2025-05 (-74$) | 623 |
| + C: cầu dao tháng −8R | 2026 (kín) | 96 | 44% | **13.7R** | 14.8R | 141$ | 31$ (18%) | 9 | 2026-10 (-22$) | 120 |
| + D: BTC gãy là đóng | 2023–2025 | 995 | 49% | **353.4R** | 18.0R | 1160$ | 293$ (22%) | 22 | 2025-05 (-92$) | 658 |
| + D: BTC gãy là đóng | 2026 (kín) | 92 | 41% | **15.6R** | 11.8R | 147$ | 43$ (23%) | 13 | 2026-06 (-18$) | 122 |
| + A5 + B + C + D (tất cả) | 2023–2025 | 400 | 52% | **199.4R** | 10.9R | 698$ | 24$ (22%) | 9 | 2023-02 (-20$) | 1109 |
| + A5 + B + C + D (tất cả) | 2026 (kín) | 63 | 41% | **2.4R** | 13.5R | 107$ | 52$ (33%) | 7 | 2026-06 (-18$) | 131 |
| + A5 + D | 2023–2025 | 400 | 52% | **199.4R** | 10.8R | 698$ | 24$ (22%) | 9 | 2023-02 (-20$) | 1109 |
| + A5 + D | 2026 (kín) | 73 | 41% | **5.8R** | 12.5R | 117$ | 42$ (26%) | 11 | 2026-06 (-18$) | 124 |
| Breakout 0.5R + tất cả | 2023–2025 | 393 | 52% | **157.8R** | 8.4R | 574$ | 22$ (13%) | 9 | 2023-02 (-12$) | 1123 |
| Breakout 0.5R + tất cả | 2026 (kín) | 67 | 43% | **-4.6R** | 11.9R | 86$ | 37$ (30%) | 9 | 2026-06 (-15$) | 148 |

### ⭐ Cấu hình thử nghiệm Trọng chọn: Bot + Breakout 1R + B (cầu dao tụt vốn 10R) — kết quả mới nhất

B = khi ví tụt quá 10R (30$) so với đỉnh cao nhất → tạm dừng mở lệnh Breakout mới cho tới khi ví hồi lại dưới mức đó.

| Phương án | Giai đoạn | Lệnh | Thắng | Tổng R | Rủi ro tụt vốn (95%) | Ví cuối | Tụt vốn lớn nhất | Thua liên tiếp dài nhất | Tháng tệ nhất | Kèo bị chặn |
|---|---|---|---|---|---|---|---|---|---|---|
| Bot hiện tại (có p1) | 2023–2025 | 162 | 50% | **120.8R** | 8.9R | 462$ | 20$ (11%) | 10 | 2024-08 (-6$) | 23 |
| Bot hiện tại (có p1) | 2026 (kín) | 22 | 5% | **-17.6R** | 18.2R | 47$ | 53$ (53%) | 11 | 2026-09 (-13$) | 37 |
| Bot hiện tại + B áp cho chính bot | 2023–2025 | 162 | 50% | **120.8R** | 8.7R | 462$ | 20$ (11%) | 10 | 2024-08 (-6$) | 23 |
| Bot hiện tại + B áp cho chính bot | 2026 (kín) | 13 | 8% | **-10.6R** | 11.3R | 68$ | 32$ (32%) | 10 | 2026-06 (-12$) | 87 |
| ⭐ Bot + Breakout 1R + B | 2023–2025 | 717 | 51% | **383.1R** | 14.5R | 1249$ | 218$ (23%) | 65 | 2023-07 (-9$) | 913 |
| ⭐ Bot + Breakout 1R + B | 2026 (kín) | 96 | 44% | **13.7R** | 15.1R | 141$ | 31$ (18%) | 9 | 2026-10 (-22$) | 120 |
| Bot + Breakout 1R + B + A10 | 2023–2025 | 518 | 49% | **218.1R** | 14.8R | 754$ | 42$ (23%) | 12 | 2025-05 (-27$) | 991 |
| Bot + Breakout 1R + B + A10 | 2026 (kín) | 94 | 46% | **18.8R** | 13.6R | 156$ | 32$ (17%) | 9 | 2026-10 (-25$) | 112 |
| Bot + Breakout 1R + B + D | 2023–2025 | 697 | 53% | **364.6R** | 13.1R | 1194$ | 169$ (22%) | 20 | 2023-02 (-20$) | 953 |
| Bot + Breakout 1R + B + D | 2026 (kín) | 92 | 41% | **15.6R** | 11.4R | 147$ | 43$ (23%) | 13 | 2026-06 (-18$) | 123 |
| Bot + Breakout 1R + B áp cho CẢ bot lẫn Breakout | 2023–2025 | 462 | 45% | **148.4R** | 18.8R | 545$ | 90$ (23%) | 14 | 2025-05 (-73$) | 1498 |
| Bot + Breakout 1R + B áp cho CẢ bot lẫn Breakout | 2026 (kín) | 96 | 44% | **13.7R** | 14.5R | 141$ | 31$ (18%) | 9 | 2026-10 (-22$) | 120 |

### Breakout SL 15% theo năm (ví chạy liền từ 2023, chỉ lệnh ví vào được)

| Năm | Lệnh | Thắng | Tổng R |
|---|---|---|---|
| 2023 | 185 | 50% | 79.8R |
| 2024 | 409 | 50% | 153.9R |
| 2025 | 232 | 36% | -38.2R |
| 2026 | 136 | 45% | 25.6R |

### Phụ thuộc vào vài mã? 5 mã lời nhất góp 76.7R / tổng 221.0R

SOL 20.9R · AMD 17.5R · NEAR 14.1R · COIN 12.2R · AVAX 11.9R … lỗ nhất: JUP -4.1R · SAND -4.1R · APT -4.2R · WLD -7.1R · ZEN -10.2R

## Lưu ý trung thực
- Danh sách mã là mã còn sống / đang có trên Hyperliquid → quá khứ của chiến lược mua breakout đẹp hơn thực tế (coin breakout rồi chết không có trong mẫu).
- Luật được rút ra từ dữ liệu 2023–2025 → 2026 mới là thước đo thật.