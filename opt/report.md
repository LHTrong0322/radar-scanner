# Tối ưu tự động (chạy liên tục) — vòng 1107

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 12920 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 97.76R | 0.589 | 5.7R | 9.83R | 9.95 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 143 | 53.1% | 120.86R | 0.845 | 5.15R | 7.36R | 16.42 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 26 | 50% | 20.05R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 106 | 54.7% | 93.84R | 19 | 21.1% | -4.19R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 97.76R | 9.83R | 9.95 | 30 | 13.3% | -11.98R |
| **Đề xuất** | 148 | 56.1% | 149.32R | 6.47R | 23.08 | 25 | 20% | -7.28R |

| Thông số | Bot thật | Đề xuất |
|---|---|---|
| Ngưỡng điểm vào kèo | 70 | **75** |
| SL tối đa (% Entry) | 0.35 | **0.387** |
| Đệm SL dưới vùng hỗ trợ (ATR) | 1 | **0.95** |
| Lệnh chờ hết hạn sau (nến) | 8 | **7** |
| Điểm tối thiểu vùng đặt lệnh chờ | 3 | **2** |
| Số TP tối đa | 2 | **3** |
| Điểm ADX > 25 và +DI trội (Momentum) | 3 | **4** |
| Điểm ADX < 13 cạn lực giảm (Momentum) | 1.5 | **2.5** |
| Lọc BTC: giá trên EMA bao nhiêu ngày | 200 | **150** |
| Trọng số phần Trend (/100) | 30 | **15** |
| Trọng số phần Momentum (/100) | 15 | **23** |
| Trọng số phần R:R (/100) | 20 | **30** |
| Trọng số phần SL (/100) | 5 | **7** |
| Điểm vùng: EMA 50 | 0.75 | **0.94** |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) | 2.5 | **3.75** |
| Điểm vùng: HVN cố định | 0.25 | **0.5** |

## Thông số khác với bot thật

| Thông số | Bot thật | Đề xuất |
|---|---|---|
| Ngưỡng điểm vào kèo | 70 | **75** |
| SL tối đa (% Entry) | 0.35 | **0.5** |
| Cộng thêm ngưỡng điểm khung 1D | 5 | **4** |
| Lệnh chờ hết hạn sau (nến) | 8 | **7** |
| Điểm ADX > 25 và +DI trội (Momentum) | 3 | **4** |
| Điểm ADX < 13 cạn lực giảm (Momentum) | 1.5 | **2.5** |
| Cộng điểm phân kỳ dương ẩn | 3 | **2.63** |
| Lọc BTC: giá trên EMA bao nhiêu ngày | 200 | **150** |
| Trọng số phần Trend (/100) | 30 | **15** |
| Trọng số phần Momentum (/100) | 15 | **23** |
| Trọng số phần R:R (/100) | 20 | **30** |
| Trọng số phần SL (/100) | 5 | **8** |
| Điểm vùng: BOS | 2 | **1** |
| Điểm vùng: EMA 50 | 0.75 | **0.94** |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) | 2.5 | **3.44** |
| Điểm vùng: HVN cố định | 0.25 | **0.5** |
| Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) | 1 | **0.75** |
| Điểm vùng: Fib 0.5 / 0.382 sóng 2 | 3 | **4** |

## Các thay đổi đã nhận (mới nhất trước)

| Vòng | Thông số | Từ → Thành | Tổng R | Tỷ lệ thắng | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro |
|---|---|---|---|---|---|---|
| 1092 | Trần điểm khi chart yếu (Trend < x) | -0.375 → -0.3 | 119.77R | 52.8% | 7.34R | 16.32 |
| 1092 | Điểm vùng: Fib 0.5 / 0.382 sóng 2 | 3 → 4 | 119.77R | 52.8% | 7.34R | 16.32 |
| 1092 | Điểm vùng: BOS | 2 → 1 | 119.77R | 52.8% | 7.34R | 16.32 |
| 1077 | Trần điểm khi chart yếu (Trend < x) | -0.3 → -0.375 | 118.06R | 52.4% | 7.5R | 15.74 |
| 1077 | Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) | 1 → 0.75 | 118.06R | 52.4% | 7.5R | 15.74 |
| 1055 | Điểm tối thiểu vùng đặt lệnh chờ | 2 → 3 | 114.12R | 51.4% | 7.82R | 14.59 |
| 1055 | Số TP tối đa | 3 → 2 | 114.12R | 51.4% | 7.82R | 14.59 |
| 492 | Cộng thêm ngưỡng điểm khung 1D | 5 → 4 | 113.77R | 53.1% | 7.29R | 15.61 |
| 491 | SL tối đa (% Entry) | 0.425 → 0.5 | 113.57R | 52.8% | 7.46R | 15.22 |
| 487 | Cộng điểm phân kỳ dương ẩn | 3 → 2.63 | 108.95R | 52.1% | 7.67R | 14.2 |
| 487 | SL tối đa (% Entry) | 0.387 → 0.425 | 108.95R | 52.1% | 7.67R | 14.2 |
| 219 | Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) | 3.13 → 3.44 | 133.03R | 53.4% | 7.68R | 17.32 |
| 219 | Điểm tối thiểu vùng đặt lệnh chờ | 3 → 2 | 133.03R | 53.4% | 7.68R | 17.32 |
| 122 | Điểm vùng: EMA 50 | 0.75 → 0.94 | 126.54R | 52.4% | 7.51R | 16.85 |
| 116 | Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) | 2.5 → 3.13 | 123.43R | 52.1% | 7.41R | 16.66 |
| 89 | SL tối đa (% Entry) | 0.35 → 0.387 | 124.22R | 51.4% | 7.63R | 16.28 |
| 83 | Số TP tối đa | 2 → 3 | 118.77R | 51% | 8R | 14.85 |
| 83 | Điểm ADX > 25 và +DI trội (Momentum) | 3 → 4 | 119.91R | 51% | 7.85R | 15.28 |
| 75 | Trọng số phần R:R (/100) | 20 → 30 | 115.14R | 51% | 8.11R | 14.2 |
| 74 | Lệnh chờ hết hạn sau (nến) | 8 → 7 | 113.39R | 51.9% | 7.9R | 14.35 |
| 61 | Lọc BTC: giá trên EMA bao nhiêu ngày | 200 → 150 | 109.83R | 50% | 8.24R | 13.33 |
| 55 | Điểm vùng: HVN cố định | 0.25 → 0.5 | 109.08R | 49.7% | 8.65R | 12.61 |
| 53 | Trọng số phần SL (/100) | 5 → 8 | 107.61R | 49.3% | 8.69R | 12.38 |
| 51 (hoàn tác) | Điểm ADX > 25 và +DI trội (Momentum) | 3 → 4 | 115.55R | 49.3% | 8.82R | 13.1 |
| 48 (hoàn tác) | SL tối đa (% Entry) | 0.35 → 0.2 | 112R | 51.4% | 8.66R | 12.93 |
| 47 | Ngưỡng điểm vào kèo | 70 → 75 | 112.91R | 49.7% | 8.91R | 12.67 |
| 42 | Điểm ADX < 13 cạn lực giảm (Momentum) | 1.5 → 2.5 | 110.33R | 47.8% | 8.98R | 12.29 |
| 42 | Trọng số phần Momentum (/100) | 15 → 23 | 110.09R | 48.4% | 8.93R | 12.33 |
| 42 | Trọng số phần Trend (/100) | 30 → 15 | 111.26R | 49% | 9.01R | 12.35 |
| 37 (hoàn tác) | Điểm vùng: POC volume profile cố định | 0.75 → 1 | 110.11R | 43.4% | 11.87R | 9.28 |
| 37 (hoàn tác) | Điểm vùng: HVN anchored | 0.25 → 0.5 | 111.03R | 43.4% | 11.88R | 9.35 |
| 30 | Cộng thêm ngưỡng điểm khung 1D | 0 → 5 | 65.24R | 50% | 11.32R | 5.76 |
| 27 | Điểm vùng: POC volume profile cố định | 0.5 → 0.75 | 96.81R | 41.7% | 13.3R | 7.28 |
| 27 | Điểm vùng: HVN anchored | 0.5 → 0.25 | 100.23R | 42.2% | 12.29R | 8.16 |
| 27 | Điểm vùng: HVN cố định | 0.5 → 0.25 | 105.01R | 43.1% | 12.08R | 8.69 |
| 25 (hoàn tác) | Điểm vùng: EMA 21 | 1 → 1.5 | 95.44R | 41.5% | 13.13R | 7.27 |
| 25 (hoàn tác) | Điểm vùng: EMA 200 | 2 → 1 | 99.68R | 41.9% | 12.98R | 7.68 |
| 25 (hoàn tác) | Điểm vùng: POC anchored | 3 → 4 | 103.58R | 42.5% | 13.04R | 7.94 |
| 24 | Trọng số phần R:R (/100) | 30 → 20 | 92.96R | 41.3% | 13.64R | 6.82 |
| 22 | Điểm ADX > 25 và +DI trội (Momentum) | 2 → 3 | 82.86R | 40.3% | 14.81R | 5.59 |

## 10 vòng gần nhất

### Vòng 1107 — ngẫu nhiên nhiều thông số · mốc: tổng 120.86R, win 53.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.42

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần Trend (/100) → 12 | 109.06 | 48.4% | 0.695 | 9.01 | 12.1 | 0.64 | 0.753 | -11.14 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng thêm ngưỡng điểm khung 1W → -1 | 128.98 | 50.6% | 0.838 | 7.99 | 16.14 | 0.815 | 0.864 | -12.74 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: MACD cắt lên Signal → 0.438 + Lệnh chờ hết hạn sau (nến) → 6 | 94.76 | 48.9% | 0.682 | 8.91 | 10.64 | 0.5 | 0.894 | -9.21 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: BOS → 2 | 111.68 | 48.7% | 0.735 | 8.9 | 12.55 | 0.551 | 0.928 | -11.53 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng điểm phân kỳ dương ẩn → 3 | 74.86 | 45.9% | 0.674 | 9.34 | 8.01 | 0.445 | 0.934 | -5.79 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần R:R (/100) → 33 + R:R tối thiểu tới TP1 → 2.38 | 101.35 | 47% | 0.618 | 9.03 | 11.22 | 0.5 | 0.73 | -12.45 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Trọng số phần Divergence (/100) → 9 + Lệnh chờ hết hạn sau (nến) → 6 | 99.7 | 50.8% | 0.755 | 7.66 | 13.02 | 0.616 | 0.912 | -11.79 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 122.38 | 49% | 0.8 | 7.9 | 15.49 | 0.757 | 0.849 | -12.56 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Lệnh chờ hết hạn sau (nến) → 8 | 115.71 | 50.3% | 0.747 | 8.29 | 13.96 | 0.594 | 0.918 | -13.75 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Elliott (/100) → 10 + SL tối đa (% Entry) → 0.425 | 98.78 | 44.9% | 0.591 | 9.38 | 10.53 | 0.511 | 0.663 | -13.47 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: HVN cố định → 0.438 | 117.94 | 51.7% | 0.813 | 7.65 | 15.42 | 0.631 | 1.02 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 | 101.4 | 49.3% | 0.685 | 8.74 | 11.6 | 0.515 | 0.864 | -12.16 |  |

### Vòng 1106 — ngẫu nhiên nhiều thông số · mốc: tổng 119.77R, win 52.8%, rủi ro tụt vốn 7.32R, lời÷rủi ro 16.36

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 | 93.1 | 46.1% | 0.612 | 10 | 9.31 | 0.372 | 0.873 | -11.18 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm tối thiểu của vùng đặt SL → 4 + Cộng thêm ngưỡng điểm khung 1W → 2 | 36.07 | 39.6% | 0.396 | 10.67 | 3.38 | 0.35 | 0.45 | -7.55 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 34.18 | 38.5% | 0.376 | 10.9 | 3.14 | 0.314 | 0.455 | -7.55 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + R:R tối thiểu tới TP1 → 2.38 + Cổng Dow → TẮT | 86.62 | 40.5% | 0.394 | 14.79 | 5.86 | 0.5 | 0.284 | -18.92 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN anchored → 0.188 | 125.74 | 41.6% | 0.406 | 12.16 | 10.34 | 0.358 | 0.446 | -4.37 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Ngưỡng điểm vào kèo → 77 | 46.78 | 32.2% | 0.264 | 22.15 | 2.11 | 0.139 | 0.399 | 1.78 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 74.22 | 45.9% | 0.669 | 9.38 | 7.91 | 0.445 | 0.922 | -5.79 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 74.22 | 45.9% | 0.669 | 9.38 | 7.91 | 0.445 | 0.922 | -5.79 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: HVN cố định → 0.563 | 104.06 | 47% | 0.634 | 8.9 | 11.69 | 0.508 | 0.755 | -13.47 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần Divergence (/100) → 12 + Cổng Dow → CHẶT | 84.14 | 52.3% | 0.758 | 6.96 | 12.09 | 0.347 | 1.107 | -14.25 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Momentum (/100) → 25 + Xác nhận khung nhỏ (A2) → W | 117.86 | 39.1% | 0.452 | 15.31 | 7.7 | 0.478 | 0.428 | -6.68 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: BOS → 2 + Điểm vùng: HVN anchored → 0.313 | 114.52 | 50.7% | 0.784 | 7.85 | 14.59 | 0.632 | 0.95 | -10.87 |  |

### Vòng 1105 — ngẫu nhiên nhiều thông số · mốc: tổng 119.77R, win 52.8%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: HVN cố định → 0.438 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 101.06 | 50.3% | 0.688 | 8.25 | 12.25 | 0.633 | 0.749 | -11.75 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.813 + Cộng thêm ngưỡng điểm khung 1W → 2 | 160.87 | 38.1% | 0.538 | 17.33 | 9.28 | 0.489 | 0.588 | -5.8 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Trọng số phần Trend (/100) → 19 + Ngưỡng điểm vào kèo → 74 | 117.01 | 50.3% | 0.785 | 7.89 | 14.83 | 0.634 | 0.951 | -12.16 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: EMA 50 → 0.75 | 118.09 | 40.7% | 0.458 | 14.83 | 7.96 | 0.446 | 0.467 | -8.19 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 132.11 | 45.1% | 0.562 | 11.11 | 11.89 | 0.648 | 0.479 | -14.11 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + R:R tối thiểu riêng khung 4H → 2 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Mức RSI 30/70 → 0.875 | 86.13 | 40.2% | 0.301 | 13.78 | 6.25 | 0.275 | 0.324 | -7.21 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Trọng số phần Divergence (/100) → 9 + Xác nhận khung nhỏ (A2) → W | 132.94 | 40.8% | 0.502 | 14.08 | 9.44 | 0.489 | 0.513 | -6.81 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: MACD cắt lên Signal → 0.438 | 56.32 | 38.8% | 0.437 | 14.48 | 3.89 | 0.229 | 0.617 | -4.59 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm tối thiểu của vùng đặt SL → 4 | 156.62 | 37.3% | 0.504 | 19.7 | 7.95 | 0.523 | 0.486 | -10.79 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Trọng số phần SL (/100) → 7 | 119.31 | 52.4% | 0.823 | 7.35 | 16.23 | 0.672 | 0.989 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 66.71 | 44.3% | 0.509 | 10.57 | 6.31 | 0.375 | 0.674 | -11.18 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + R:R tối thiểu tới TP1 → 2.63 | 99.94 | 47.4% | 0.74 | 9.15 | 10.92 | 0.503 | 0.989 | -13.25 |  |

### Vòng 1104 — ghép cặp thay đổi suýt đạt · mốc: tổng 119.77R, win 52.8%, rủi ro tụt vốn 7.39R, lời÷rủi ro 16.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: HVN anchored → 0.125 + Điểm vùng: MACD cắt lên Signal → 0.563 | 119.77 | 52.8% | 0.832 | 7.39 | 16.21 | 0.672 | 1.011 | -12.74 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 139.74 | 51.4% | 0.798 | 7.92 | 17.64 | 0.64 | 0.97 | -12.37 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 119.77 | 52.8% | 0.832 | 7.39 | 16.21 | 0.672 | 1.011 | -12.74 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Điểm vùng: BOS → 3 | 119.77 | 52.8% | 0.832 | 7.39 | 16.21 | 0.672 | 1.011 | -12.74 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Trọng số phần Trend (/100) → 12 | 117.55 | 51.4% | 0.816 | 7.61 | 15.45 | 0.677 | 0.968 | -12.74 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 | 118.49 | 52.1% | 0.823 | 7.47 | 15.86 | 0.655 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 141.39 | 51.7% | 0.803 | 8.07 | 17.52 | 0.651 | 0.97 | -12.37 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 118.49 | 52.1% | 0.823 | 7.47 | 15.86 | 0.655 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: BOS → 3 | 118.49 | 52.1% | 0.823 | 7.47 | 15.86 | 0.655 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trọng số phần Trend (/100) → 12 | 116.27 | 50.7% | 0.807 | 7.64 | 15.22 | 0.66 | 0.968 | -12.16 |  |
| Ghép: Điểm vùng: MACD cắt lên Signal → 0.563 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 141.39 | 51.7% | 0.803 | 8.07 | 17.52 | 0.651 | 0.97 | -12.37 |  |
| Ghép: Điểm vùng: MACD cắt lên Signal → 0.563 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 119.77 | 52.8% | 0.832 | 7.39 | 16.21 | 0.672 | 1.011 | -12.16 |  |

### Vòng 1103 — ghép cặp thay đổi suýt đạt · mốc: tổng 119.77R, win 52.8%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 141.2 | 51.4% | 0.798 | 8.06 | 17.52 | 0.651 | 0.956 | -12.37 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 119.77 | 52.8% | 0.832 | 7.36 | 16.27 | 0.672 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: BOS → 3 | 119.77 | 52.8% | 0.832 | 7.36 | 16.27 | 0.672 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Trend (/100) → 12 | 117.55 | 51.4% | 0.816 | 7.64 | 15.39 | 0.677 | 0.968 | -12.16 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: HVN anchored → 0.125 | 119.77 | 52.8% | 0.832 | 7.36 | 16.27 | 0.672 | 1.011 | -11.72 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 118.49 | 52.1% | 0.823 | 7.45 | 15.9 | 0.655 | 1.011 | -11.14 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: MACD cắt lên Signal → 0.563 | 119.77 | 52.8% | 0.832 | 7.36 | 16.27 | 0.672 | 1.011 | -11.14 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 141.39 | 51.7% | 0.803 | 7.99 | 17.7 | 0.651 | 0.97 | -11.35 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 119.77 | 52.8% | 0.832 | 7.36 | 16.27 | 0.672 | 1.011 | -11.14 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: BOS → 3 | 119.77 | 52.8% | 0.832 | 7.36 | 16.27 | 0.672 | 1.011 | -11.14 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần Trend (/100) → 12 | 117.55 | 51.4% | 0.816 | 7.64 | 15.39 | 0.677 | 0.968 | -11.14 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 118.49 | 52.1% | 0.823 | 7.45 | 15.9 | 0.655 | 1.011 | -12.74 |  |

### Vòng 1102 — ghép cặp thay đổi suýt đạt · mốc: tổng 119.77R, win 52.8%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: POC volume profile cố định → 0.688 | 119.77 | 52.8% | 0.832 | 7.36 | 16.27 | 0.672 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: POC volume profile cố định → 0.813 | 119.77 | 52.8% | 0.832 | 7.36 | 16.27 | 0.672 | 1.011 | -11.14 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: HVN anchored → 0.125 | 119.77 | 52.8% | 0.832 | 7.36 | 16.27 | 0.672 | 1.011 | -12.74 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 118.49 | 52.1% | 0.823 | 7.45 | 15.9 | 0.655 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 | 119.77 | 52.8% | 0.832 | 7.36 | 16.27 | 0.672 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 141.39 | 51.7% | 0.803 | 8 | 17.67 | 0.651 | 0.97 | -12.37 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 119.77 | 52.8% | 0.832 | 7.36 | 16.27 | 0.672 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: BOS → 3 | 119.77 | 52.8% | 0.832 | 7.36 | 16.27 | 0.672 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Trend (/100) → 12 | 117.55 | 51.4% | 0.816 | 7.64 | 15.39 | 0.677 | 0.968 | -12.16 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: HVN anchored → 0.125 | 119.77 | 52.8% | 0.832 | 7.36 | 16.27 | 0.672 | 1.011 | -12.74 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 118.49 | 52.1% | 0.823 | 7.45 | 15.9 | 0.655 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: MACD cắt lên Signal → 0.563 | 119.77 | 52.8% | 0.832 | 7.36 | 16.27 | 0.672 | 1.011 | -12.16 |  |

### Vòng 1101 — từng thông số · mốc: tổng 119.77R, win 52.8%, rủi ro tụt vốn 7.44R, lời÷rủi ro 16.10

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| R:R tối thiểu tới TP1: 2.5 → 2.38 | 103.88 | 46.7% | 0.63 | 8.86 | 11.72 | 0.508 | 0.744 | -13.47 |  |
| R:R tối thiểu tới TP1: 2.5 → 2.63 | 99.51 | 49.6% | 0.784 | 8.45 | 11.78 | 0.544 | 1.035 | -12.86 |  |
| Ngưỡng điểm 'vào ngay' (tín hiệu mạnh): 6 → 5 | 97.32 | 46.2% | 0.671 | 9.2 | 10.58 | 0.551 | 0.804 | -8.13 |  |
| Ngưỡng điểm 'vào ngay' (tín hiệu mạnh): 6 → 7 | 106 | 51.7% | 0.731 | 8.04 | 13.18 | 0.672 | 0.796 | -11.17 |  |
| SL tối đa (% Entry): 0.5 → 0.425 | 118.76 | 52.4% | 0.819 | 7.57 | 15.69 | 0.672 | 0.981 | -12.16 |  |
| Đệm SL dưới vùng hỗ trợ (ATR): 1 → 0.95 | 116.78 | 50.3% | 0.784 | 8.25 | 14.16 | 0.541 | 1.051 | -12.06 |  |
| Đệm SL dưới vùng hỗ trợ (ATR): 1 → 1.05 | 99.54 | 48.6% | 0.711 | 8.32 | 11.96 | 0.479 | 0.957 | -13.71 |  |
| R:R tối thiểu riêng khung 4H: null → 2 | 122.47 | 41.3% | 0.395 | 12.26 | 9.99 | 0.358 | 0.427 | -7.69 |  |
| Đệm SL riêng khung 4H (ATR): null → 0.3 | 160.37 | 38.8% | 0.545 | 18.32 | 8.75 | 0.409 | 0.687 | -7.93 |  |
| Cộng thêm ngưỡng điểm khung 4H: 0 → -1 | 119.77 | 52.8% | 0.832 | 7.44 | 16.1 | 0.672 | 1.011 | -12.16 |  |
| Cộng thêm ngưỡng điểm khung 4H: 0 → 2 | 114.87 | 52.1% | 0.798 | 7.64 | 15.04 | 0.672 | 0.939 | -12.16 |  |
| R:R tối thiểu riêng khung 1D: null → 2 | 109.82 | 46.6% | 0.631 | 9.21 | 11.92 | 0.6 | 0.66 | -8.93 |  |

### Vòng 1100 — từng thông số · mốc: tổng 119.77R, win 52.8%, rủi ro tụt vốn 7.33R, lời÷rủi ro 16.34

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: Biên mây Ichimoku: 1.2 → 1.05 | 109.25 | 51.7% | 0.753 | 7.63 | 14.32 | 0.626 | 0.89 | -12.99 |  |
| Điểm vùng: Biên mây Ichimoku: 1.2 → 1.35 | 115.98 | 51.4% | 0.794 | 7.89 | 14.7 | 0.627 | 0.981 | -11.14 |  |
| Điểm vùng: Mức sai Elliott (cho SL): 2 → 1 | 114.66 | 51.4% | 0.785 | 8.07 | 14.21 | 0.631 | 0.958 | -13.13 |  |
| Điểm vùng: Mức sai Elliott (cho SL): 2 → 3 | 115.58 | 51.4% | 0.803 | 7.84 | 14.74 | 0.631 | 0.995 | -11.98 |  |
| Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự): 0.75 → 0.5 | 119.77 | 52.8% | 0.832 | 7.33 | 16.34 | 0.672 | 1.011 | -12.16 |  |
| Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự): 0.75 → 0.875 | 119.77 | 52.8% | 0.832 | 7.33 | 16.34 | 0.672 | 1.011 | -12.16 |  |
| Điểm vùng: MACD cắt lên Signal: 0.5 → 0.438 | 108.36 | 49% | 0.708 | 9.13 | 11.87 | 0.499 | 0.943 | -9.58 |  |
| Điểm vùng: MACD cắt lên Signal: 0.5 → 0.563 | 119.77 | 52.8% | 0.832 | 7.33 | 16.34 | 0.672 | 1.011 | -12.16 |  |
| Điểm vùng: Fib 0.5 / 0.382 sóng 2: 4 → 3 | 119.68 | 52.8% | 0.831 | 7.49 | 15.98 | 0.67 | 1.011 | -12.16 |  |
| Điểm vùng: Fib sóng 4: 1.25 → 0.938 | 117.75 | 52.1% | 0.829 | 7.34 | 16.04 | 0.663 | 1.011 | -12.16 |  |
| Điểm vùng: Fib sóng 4: 1.25 → 1.56 | 117.72 | 52.1% | 0.806 | 7.71 | 15.27 | 0.628 | 1.011 | -12.16 |  |
| Ngưỡng điểm vào kèo: 75 → 74 | 117.24 | 50.7% | 0.792 | 7.67 | 15.29 | 0.634 | 0.968 | -12.16 |  |
| Ngưỡng điểm vào kèo: 75 → 77 | 114.12 | 51.4% | 0.793 | 7.65 | 14.92 | 0.677 | 0.918 | -11.55 |  |

### Vòng 1099 — từng thông số · mốc: tổng 119.77R, win 52.8%, rủi ro tụt vốn 7.32R, lời÷rủi ro 16.36

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: Mức RSI 30/70: 1 → 0.875 | 118.64 | 50% | 0.751 | 8.84 | 13.42 | 0.586 | 0.942 | -12.16 |  |
| Điểm vùng: Mức RSI 30/70: 1 → 1.13 | 119.77 | 52.8% | 0.832 | 7.32 | 16.36 | 0.672 | 1.011 | -12.16 |  |
| Điểm vùng: Mức MACD: 1 → 0.875 | 114.94 | 52.4% | 0.804 | 7.39 | 15.55 | 0.655 | 0.963 | -10.87 |  |
| Điểm vùng: Mức MACD: 1 → 1.13 | 111.9 | 50.3% | 0.783 | 7.95 | 14.08 | 0.584 | 1.002 | -12.16 |  |
| Điểm vùng: POC volume profile cố định: 0.75 → 0.688 | 119.77 | 52.8% | 0.832 | 7.32 | 16.36 | 0.672 | 1.011 | -12.16 |  |
| Điểm vùng: POC volume profile cố định: 0.75 → 0.813 | 119.77 | 52.8% | 0.832 | 7.32 | 16.36 | 0.672 | 1.011 | -11.14 |  |
| Điểm vùng: HVN anchored: 0.25 → 0.188 | 119.77 | 52.8% | 0.832 | 7.32 | 16.36 | 0.672 | 1.011 | -12.16 |  |
| Điểm vùng: HVN anchored: 0.25 → 0.313 | 117 | 51.7% | 0.807 | 7.58 | 15.44 | 0.627 | 1.011 | -12.16 |  |
| Điểm vùng: HVN cố định: 0.5 → 0.438 | 117.3 | 51.7% | 0.809 | 7.58 | 15.47 | 0.631 | 1.011 | -12.16 |  |
| Điểm vùng: HVN cố định: 0.5 → 0.563 | 119.77 | 52.8% | 0.832 | 7.32 | 16.36 | 0.672 | 1.011 | -12.16 |  |
| Điểm vùng: Vùng RSI 45–55: 1 → 0.875 | 106.89 | 48% | 0.703 | 8.84 | 12.09 | 0.653 | 0.752 | -9.85 |  |
| Điểm vùng: Vùng RSI 45–55: 1 → 1.13 | 107.2 | 49.3% | 0.734 | 8.19 | 13.09 | 0.59 | 0.9 | -12.16 |  |

### Vòng 1098 — từng thông số · mốc: tổng 119.77R, win 52.8%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: EMA 50: 0.94 → 0.75 | 116.3 | 52.4% | 0.813 | 7.77 | 14.97 | 0.636 | 1.003 | -12.16 |  |
| Điểm vùng: EMA 50: 0.94 → 1.13 | 115.41 | 50.3% | 0.796 | 7.7 | 14.99 | 0.633 | 0.98 | -11.14 |  |
| Điểm vùng: EMA 21: 1 → 0.875 | 118.38 | 51.4% | 0.811 | 7.58 | 15.62 | 0.676 | 0.958 | -10.87 |  |
| Điểm vùng: EMA 21: 1 → 1.13 | 112.17 | 51% | 0.774 | 7.62 | 14.72 | 0.636 | 0.925 | -11.14 |  |
| Điểm vùng: Break mây Ichimoku: 2 → 1 | 108.03 | 49.7% | 0.735 | 8.21 | 13.16 | 0.59 | 0.89 | -12.99 |  |
| Điểm vùng: Break mây Ichimoku: 2 → 3 | 112.41 | 49.7% | 0.707 | 8.68 | 12.95 | 0.595 | 0.829 | -11.03 |  |
| Điểm vùng: Kháng cự cũ bị phá: 1.5 → 1.31 | 119.06 | 52.4% | 0.821 | 7.65 | 15.56 | 0.654 | 1.011 | -12.16 |  |
| Điểm vùng: Kháng cự cũ bị phá: 1.5 → 1.69 | 116.54 | 52.1% | 0.832 | 7.48 | 15.58 | 0.659 | 1.022 | -12.16 |  |
| Điểm vùng: Fib 0.618 sóng 2: 2.5 → 2.19 | 119.77 | 52.8% | 0.832 | 7.36 | 16.27 | 0.672 | 1.011 | -12.16 |  |
| Điểm vùng: Fib 0.618 sóng 2: 2.5 → 2.81 | 119.77 | 52.8% | 0.832 | 7.36 | 16.27 | 0.672 | 1.011 | -12.16 |  |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4): 3.44 → 3.13 | 117.42 | 52.4% | 0.81 | 7.48 | 15.7 | 0.649 | 0.992 | -12.16 |  |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4): 3.44 → 3.75 | 114.79 | 52.4% | 0.781 | 7.69 | 14.93 | 0.628 | 0.954 | -12.16 |  |
