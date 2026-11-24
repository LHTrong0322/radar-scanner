# Tối ưu tự động (chạy liên tục) — vòng 1385

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 16240 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 102.16R | 0.615 | 6.7R | 9.67R | 10.56 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 143 | 52.4% | 119.74R | 0.837 | 5.15R | 7.58R | 15.80 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 26 | 50% | 20.05R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 106 | 53.8% | 92.72R | 19 | 21.1% | -4.19R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 102.16R | 9.67R | 10.56 | 30 | 13.3% | -11.98R |
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

## Các thay đổi đã nhận (mới nhất trước)

| Vòng | Thông số | Từ → Thành | Tổng R | Tỷ lệ thắng | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro |
|---|---|---|---|---|---|---|
| 1271 | Cộng thêm ngưỡng điểm khung 1D | 4 → 5 | 120.65R | 52.1% | 7.64R | 15.79 |
| 1271 | Điểm vùng: Fib 0.5 / 0.382 sóng 2 | 4 → 3 | 120.65R | 52.1% | 7.64R | 15.79 |
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

## 10 vòng gần nhất

### Vòng 1385 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.58R, lời÷rủi ro 15.80

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: EMA 50 → 0.75 + R:R tối thiểu riêng khung 1W → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 69.99 | 46.2% | 0.598 | 8.78 | 7.97 | 0.454 | 0.74 | -17.54 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: BOS → 2 | 111.08 | 39.8% | 0.426 | 15.13 | 7.34 | 0.393 | 0.456 | -6.68 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + % chốt ở TP1 → 0.307 + Điểm vùng: POC anchored → 4 | 111.16 | 50.3% | 0.756 | 8.11 | 13.71 | 0.605 | 0.905 | -4.31 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: EMA 50 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 117.86 | 43.8% | 0.506 | 11.59 | 10.17 | 0.573 | 0.442 | -11.98 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Đệm SL riêng khung 1W (ATR) → 0.3 + Số TP tối đa → 1 | 94.77 | 46.2% | 0.654 | 9.85 | 9.62 | 0.466 | 0.828 | -14.84 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm tối thiểu của vùng đặt SL → 4 + Cộng điểm phân kỳ dương ẩn → 3 | 132.02 | 43.3% | 0.629 | 11.23 | 11.76 | 0.594 | 0.664 | -20.38 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 115.62 | 48.1% | 0.741 | 8.73 | 13.24 | 0.594 | 0.904 | -12.55 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 50 → 0.75 | 100.03 | 50.7% | 0.695 | 8.22 | 12.17 | 0.623 | 0.773 | -11.92 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: BOS → 0 + Điểm vùng: EMA 200 → 3 | 105.77 | 48.3% | 0.74 | 8.26 | 12.81 | 0.545 | 0.943 | -12.13 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Cộng thêm ngưỡng điểm khung 1D → 4 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 115.83 | 51% | 0.81 | 7.33 | 15.8 | 0.653 | 0.984 | -11.98 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Elliott (/100) → 6 | 119.74 | 52.4% | 0.837 | 7.58 | 15.8 | 0.656 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: POC volume profile cố định → 0.813 | 117.44 | 43.3% | 0.541 | 11 | 10.68 | 0.502 | 0.579 | -15.34 |  |

### Vòng 1384 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.10

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Cộng thêm ngưỡng điểm khung 1D → 7 + Trọng số phần Divergence (/100) → 9 + Điểm tối thiểu của vùng đặt SL → 2 | 114.49 | 52.8% | 0.806 | 7.27 | 15.75 | 0.66 | 0.965 | -10.26 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 111.86 | 50% | 0.726 | 7.9 | 14.16 | 0.646 | 0.815 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Elliott (/100) → 10 | 105.95 | 45% | 0.711 | 9.78 | 10.83 | 0.526 | 0.899 | -12.99 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: BOS → 0 | 74.72 | 46.3% | 0.692 | 9.12 | 8.19 | 0.471 | 0.948 | -5.79 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Đệm SL riêng khung 1W (ATR) → 0.3 | 103.86 | 45.9% | 0.711 | 9.46 | 10.98 | 0.481 | 0.948 | -14.01 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: Biên mây Ichimoku → 1.05 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + R:R tối thiểu riêng khung 1W → 2 | 72.59 | 45.4% | 0.445 | 10.18 | 7.13 | 0.471 | 0.42 | -11.2 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần Trend (/100) → 19 | 105.1 | 46.5% | 0.73 | 9.08 | 11.57 | 0.515 | 0.939 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Trọng số phần SL (/100) → 7 | 119.48 | 52.4% | 0.836 | 7.3 | 16.37 | 0.653 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm tối thiểu của vùng đặt SL → 4 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 56.08 | 43.2% | 0.505 | 10.31 | 5.44 | 0.452 | 0.568 | -6.38 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Cộng thêm ngưỡng điểm khung 1W → -1 + SL tối đa (% Entry) → 0.425 | 175.66 | 39% | 0.595 | 17.75 | 9.9 | 0.506 | 0.688 | -6.67 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 97.19 | 48.6% | 0.704 | 8.25 | 11.78 | 0.48 | 0.949 | -13.69 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Ngưỡng điểm vào kèo → 77 | 109.26 | 50% | 0.759 | 8 | 13.66 | 0.619 | 0.906 | -8.61 |  |

### Vòng 1383 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.02R, lời÷rủi ro 17.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Trọng số phần Divergence (/100) → 12 + SL tối đa (% Entry) → 0.425 + Cộng thêm ngưỡng điểm khung 1D → 7 | 117.74 | 52.8% | 0.829 | 7.14 | 16.49 | 0.66 | 1.013 | -10.09 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Biên mây Ichimoku → 1.05 | 111.52 | 52.4% | 0.78 | 7.52 | 14.83 | 0.65 | 0.919 | -13 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + R:R tối thiểu riêng khung 1D → 2 + Cộng điểm phân kỳ dương ẩn → 3 | 99.61 | 43.9% | 0.576 | 9.47 | 10.52 | 0.617 | 0.542 | -7.91 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 125.15 | 53.2% | 0.792 | 7.81 | 16.02 | 0.592 | 1.038 | -8.9 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 + Đệm SL riêng khung 4H (ATR) → 0.3 | 25.8 | 50.2% | 0.099 | 14.8 | 1.74 | 0.092 | 0.104 | -11.43 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Lệnh chờ hết hạn sau (nến) → 6 | 98.41 | 50.4% | 0.74 | 7.98 | 12.33 | 0.596 | 0.905 | -10.77 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Khung lớn phải tăng (trend ≥) → 0.425 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Fib sóng 4 → 0.938 | 68.92 | 43.3% | 0.459 | 10.37 | 6.65 | 0.275 | 0.635 | -9.36 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Biên mây Ichimoku → 1.05 | 102.87 | 51.1% | 0.74 | 7.53 | 13.66 | 0.625 | 0.857 | -10.46 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 109.84 | 50.3% | 0.768 | 7.97 | 13.78 | 0.61 | 0.952 | -12.16 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 31.52 | 58% | 0.201 | 5.68 | 5.55 | 0.232 | 0.172 | -8.18 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 116.75 | 51.7% | 0.816 | 7.36 | 15.86 | 0.631 | 1.027 | -11.98 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 1D → 4 | 29.38 | 57.7% | 0.188 | 5.92 | 4.96 | 0.213 | 0.166 | -8.18 |  |

### Vòng 1382 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.10

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số TP tối đa → 3 + SL tối đa (% Entry) → 0.425 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 4H → 2 | 93.46 | 41.1% | 0.417 | 12.96 | 7.21 | 0.426 | 0.408 | -5.79 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 1W (ATR) → 0.3 | 92.16 | 43.1% | 0.576 | 11.38 | 8.1 | 0.462 | 0.682 | -14.59 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 84.7 | 46.7% | 0.618 | 9.46 | 8.95 | 0.518 | 0.74 | -9.34 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 116.64 | 44.4% | 0.518 | 10.31 | 11.31 | 0.498 | 0.539 | -14.5 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 118.96 | 51% | 0.809 | 7.79 | 15.27 | 0.561 | 1.083 | -12.06 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Biên mây Ichimoku → 1.05 | 72.12 | 46.8% | 0.65 | 8.95 | 8.06 | 0.54 | 0.774 | -6.62 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 70.9 | 45.3% | 0.554 | 9.75 | 7.27 | 0.413 | 0.714 | -10.17 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 117.71 | 48.2% | 0.718 | 8.77 | 13.42 | 0.797 | 0.63 | -11.72 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: EMA 21 → 0.875 | 116.22 | 51% | 0.791 | 8.1 | 14.35 | 0.654 | 0.941 | -12.03 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 115.25 | 51.7% | 0.795 | 7.35 | 15.68 | 0.669 | 0.934 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cổng Dow → TẮT | 138.42 | 34.8% | 0.342 | 24.54 | 5.64 | 0.323 | 0.36 | -30.2 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 102.63 | 40.7% | 0.317 | 13.51 | 7.6 | 0.447 | 0.199 | -14.6 |  |

### Vòng 1381 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.54R, lời÷rủi ro 15.88

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 25.48 | 57.5% | 0.167 | 6.1 | 4.18 | 0.193 | 0.142 | -7.87 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + R:R tối thiểu riêng khung 1D → 2 | 108.99 | 45.3% | 0.641 | 8.94 | 12.19 | 0.647 | 0.636 | -6.74 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 109.75 | 51% | 0.767 | 7.64 | 14.37 | 0.62 | 0.93 | -9.63 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.45 | 58% | 0.2 | 5.71 | 5.51 | 0.231 | 0.172 | -8.18 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: POC anchored → 2 + Khung lớn phải tăng (trend ≥) → 0.375 | 62.88 | 44.3% | 0.48 | 10.48 | 6 | 0.368 | 0.608 | -11.58 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Trọng số phần Entry (/100) → 33 | 119.73 | 52.1% | 0.843 | 7.38 | 16.22 | 0.7 | 0.999 | -11.13 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần Momentum (/100) → 21 + Xác nhận khung nhỏ (A2) → W | 115.14 | 40.2% | 0.433 | 14.86 | 7.75 | 0.436 | 0.43 | -6.5 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: MACD cắt lên Signal → 0.563 | 101.42 | 48.6% | 0.685 | 8.56 | 11.85 | 0.636 | 0.734 | -8.61 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 103.5 | 51% | 0.714 | 8.29 | 12.48 | 0.658 | 0.777 | -11.75 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 86.08 | 42.3% | 0.473 | 12.57 | 6.85 | 0.433 | 0.508 | -8.51 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + R:R tối thiểu riêng khung 4H → 2 + Cổng Dow → CHẶT + Trần điểm khi chart yếu (Trend < x) → -0.375 | 80.19 | 41.3% | 0.331 | 11.83 | 6.78 | 0.302 | 0.352 | -10.7 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Ngưỡng điểm vào kèo → 74 + Điểm vùng: POC anchored → 4 | 86.12 | 51.3% | 0.736 | 7.47 | 11.53 | 0.356 | 1.04 | -9.4 |  |

### Vòng 1380 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Xác nhận khung nhỏ (A2) → W | 111.1 | 40% | 0.427 | 15.32 | 7.25 | 0.396 | 0.456 | -6.68 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Break mây Ichimoku → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 147.43 | 42.7% | 0.429 | 11.4 | 12.93 | 0.436 | 0.422 | -4.39 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + SL tối đa (% Entry) → 0.425 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 73.7 | 45.9% | 0.676 | 9.39 | 7.85 | 0.445 | 0.948 | -5.9 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu riêng khung 1W → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần Momentum (/100) → 21 | 109.34 | 48.1% | 0.692 | 9.3 | 11.76 | 0.5 | 0.899 | -11.54 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Cộng điểm phân kỳ dương ẩn → 2.25 | 108.05 | 50.7% | 0.761 | 7.76 | 13.92 | 0.627 | 0.891 | -13.19 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: POC anchored → 4 | 89.47 | 46.7% | 0.596 | 9.89 | 9.05 | 0.422 | 0.79 | -7.01 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 128.18 | 42.3% | 0.411 | 11.73 | 10.93 | 0.431 | 0.394 | -5.96 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Lệnh chờ hết hạn sau (nến) → 6 | 54.97 | 43.3% | 0.458 | 10.75 | 5.11 | 0.38 | 0.547 | -9.81 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Fib sóng 4 → 0.938 | 110.84 | 50.7% | 0.781 | 7.81 | 14.19 | 0.632 | 0.952 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Đệm SL riêng khung 1D (ATR) → 0.3 + Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần SL (/100) → 9 | 106.69 | 44.5% | 0.651 | 10.74 | 9.93 | 0.668 | 0.635 | -11.78 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Cổng Dow → TẮT + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 135.03 | 44.1% | 0.634 | 11.31 | 11.94 | 0.623 | 0.645 | -21.47 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Trọng số phần SL (/100) → 7 | 122 | 53.5% | 0.859 | 7.06 | 17.28 | 0.696 | 1.042 | -12.17 |  |

### Vòng 1379 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.54R, lời÷rủi ro 15.88

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Số TP tối đa → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 115.5 | 52.1% | 0.813 | 7.39 | 15.63 | 0.615 | 1.029 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + R:R tối thiểu tới TP1 → 2.63 + Xác nhận khung nhỏ (A2) → W + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 82.43 | 35.8% | 0.355 | 17.63 | 4.68 | 0.353 | 0.358 | -6.74 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: POC anchored → 4 | 116.08 | 50.3% | 0.759 | 8.3 | 13.99 | 0.609 | 0.918 | -8.02 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 106.8 | 47.6% | 0.651 | 8.55 | 12.49 | 0.541 | 0.757 | -13.47 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: EMA 21 → 1.13 + Cộng thêm ngưỡng điểm khung 1W → 2 | 113.63 | 50.7% | 0.789 | 7.46 | 15.23 | 0.656 | 0.934 | -11.56 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 21.55 | 63.2% | 0.227 | 5.14 | 4.19 | 0.214 | 0.242 | -5.83 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần SL (/100) → 7 | 87.73 | 49.6% | 0.75 | 7.95 | 11.04 | 0.552 | 0.988 | -18.62 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: EMA 200 → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 101.08 | 47.7% | 0.669 | 8.02 | 12.6 | 0.547 | 0.8 | -12.12 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 106.61 | 49% | 0.735 | 8.27 | 12.89 | 0.574 | 0.923 | -11.39 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 127.85 | 50% | 0.83 | 7.92 | 16.14 | 0.8 | 0.865 | -12.74 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 38.67 | 42.2% | 0.43 | 9.82 | 3.94 | 0.359 | 0.514 | -5.18 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 107.12 | 45.3% | 0.714 | 9.62 | 11.14 | 0.534 | 0.899 | -14.01 |  |

### Vòng 1378 — ngẫu nhiên nhiều thông số · mốc: tổng 119.79R, win 53.3%, rủi ro tụt vốn 7.17R, lời÷rủi ro 16.71

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức MACD → 1.13 + Điểm tối thiểu của vùng đặt SL → 4 | 69.97 | 44.8% | 0.666 | 9.35 | 7.48 | 0.475 | 0.885 | -4.75 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 18.08 | 48.1% | 0.07 | 9.38 | 1.93 | 0.085 | 0.059 | -12.14 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 104.72 | 50% | 0.737 | 8 | 13.09 | 0.63 | 0.842 | -8.84 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cộng điểm phân kỳ dương ẩn → 3 | 121.08 | 52.5% | 0.859 | 7.55 | 16.04 | 0.612 | 1.123 | -11.01 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + % chốt ở TP1 → 0.307 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 107.41 | 49.7% | 0.741 | 8.03 | 13.38 | 0.64 | 0.84 | -9.69 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần Entry (/100) → 33 + Điểm tối thiểu của vùng đặt SL → 2 | 119.64 | 51.3% | 0.798 | 8.08 | 14.81 | 0.645 | 0.977 | -7.96 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: HVN anchored → 0.188 | 119.79 | 53.3% | 0.874 | 7.17 | 16.71 | 0.687 | 1.082 | -9.86 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 109.36 | 45.8% | 0.706 | 10.48 | 10.44 | 0.792 | 0.638 | -8.25 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Cộng thêm ngưỡng điểm khung 1W → 2 | 118.59 | 52.2% | 0.872 | 7.17 | 16.54 | 0.718 | 1.036 | -9.25 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Break mây Ichimoku → 1 | 106.03 | 49.3% | 0.747 | 8.28 | 12.81 | 0.557 | 0.953 | -10.69 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: BOS → 0 + Cộng điểm phân kỳ dương ẩn → 2.25 | 110.42 | 50.3% | 0.761 | 7.8 | 14.16 | 0.663 | 0.864 | -8.85 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Lệnh chờ hết hạn sau (nến) → 8 | 170.73 | 39.1% | 0.565 | 17.53 | 9.74 | 0.407 | 0.728 | -13.43 |  |

### Vòng 1377 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.02R, lời÷rủi ro 17.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 39.9 | 42% | 0.453 | 9.44 | 4.23 | 0.362 | 0.563 | -5.18 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần R:R (/100) → 28 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 27.86 | 56.4% | 0.179 | 6.27 | 4.44 | 0.217 | 0.144 | -7.79 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: BOS → 0 + Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm vào kèo → 74 | 175.07 | 38.6% | 0.587 | 17.92 | 9.77 | 0.505 | 0.673 | -9.55 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 1W (ATR) → 0.3 | 108.05 | 47.6% | 0.756 | 8.95 | 12.07 | 0.55 | 0.964 | -14.01 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: HVN anchored → 0.188 | 114.19 | 49.3% | 0.827 | 8.04 | 14.2 | 0.615 | 1.073 | -10.4 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Mức RSI 30/70 → 0.875 | 110.88 | 50% | 0.711 | 8.7 | 12.74 | 0.576 | 0.895 | -11.14 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + % chốt ở TP1 → 0.307 | 74.79 | 46.3% | 0.692 | 9.04 | 8.27 | 0.472 | 0.948 | -5.79 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Xác nhận khung nhỏ (A2) → W | 108.67 | 40.1% | 0.415 | 15.09 | 7.2 | 0.366 | 0.46 | -4.45 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 1W → -1 | 112.13 | 47.1% | 0.66 | 8.56 | 13.1 | 0.637 | 0.68 | -8.93 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: POC anchored → 4 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 119.12 | 41.8% | 0.405 | 12.26 | 9.72 | 0.435 | 0.383 | -7.16 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 118.32 | 53.5% | 0.822 | 7.17 | 16.5 | 0.676 | 0.985 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Xác nhận khung nhỏ (A2) → W + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib sóng 4 → 1.56 | 96.61 | 38.1% | 0.372 | 16.58 | 5.83 | 0.418 | 0.324 | -4.79 |  |

### Vòng 1376 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.56R, lời÷rủi ro 15.84

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: EMA 21 → 1.13 + R:R tối thiểu riêng khung 4H → 2 | 142.71 | 40.3% | 0.381 | 12.69 | 11.25 | 0.407 | 0.358 | -9.18 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1W (ATR) → 0.3 | 45.71 | 33.6% | 0.142 | 24.6 | 1.86 | 0.064 | 0.199 | -4.76 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Momentum (/100) → 21 | 110.01 | 48.4% | 0.683 | 9.13 | 12.05 | 0.561 | 0.817 | -11.03 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1D → 7 | 176.1 | 38.9% | 0.595 | 17.8 | 9.89 | 0.495 | 0.7 | -3.73 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Trọng số phần SL (/100) → 9 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 118.51 | 48.7% | 0.76 | 8.58 | 13.81 | 0.585 | 0.959 | -12.55 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + SL tối đa (% Entry) → 0.425 | 113.17 | 48.9% | 0.814 | 8.21 | 13.78 | 0.615 | 1.041 | -10.38 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 91.82 | 46.3% | 0.675 | 9.65 | 9.52 | 0.436 | 0.944 | -15.74 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Elliott (/100) → 10 | 178.97 | 38.9% | 0.605 | 17.14 | 10.44 | 0.521 | 0.692 | -5.65 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần Momentum (/100) → 21 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 118.71 | 48.4% | 0.766 | 8.73 | 13.6 | 0.76 | 0.772 | -11.45 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Fib sóng 4 → 0.938 + Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 1W → 2 | 71.43 | 46.7% | 0.595 | 9.01 | 7.93 | 0.507 | 0.684 | -18.62 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 91.2 | 47.4% | 0.666 | 8.47 | 10.77 | 0.448 | 0.868 | -12.8 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm tối thiểu của vùng đặt SL → 4 | 115.68 | 51% | 0.809 | 7.83 | 14.77 | 0.661 | 0.972 | -12.03 |  |
