# Tối ưu tự động (chạy liên tục) — vòng 1272

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 14897 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 167 | 46.7% | 102.25R | 0.612 | 6.7R | 10.04R | 10.18 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 144 | 52.1% | 120.65R | 0.838 | 5.15R | 7.57R | 15.94 | 29 | 13.8% | -13.18R | -0.454 | 13.18R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 25 | 48% | 19.78R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 108 | 53.7% | 93.91R | 20 | 20% | -5.21R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 167 | 46.7% | 102.25R | 10.04R | 10.18 | 31 | 12.9% | -13R |
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

### Vòng 1272 — từng thông số · mốc: tổng 120.65R, win 52.1%, rủi ro tụt vốn 7.57R, lời÷rủi ro 15.94

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Đệm SL riêng khung 1D (ATR): null → 0.3 | 113.49 | 46% | 0.696 | 10.45 | 10.86 | 0.669 | 0.722 | -11.79 |  |
| Cộng thêm ngưỡng điểm khung 1D: 5 → 4 | 120.65 | 52.1% | 0.838 | 7.57 | 15.94 | 0.654 | 1.044 | -13.18 |  |
| Cộng thêm ngưỡng điểm khung 1D: 5 → 7 | 116.73 | 51.7% | 0.805 | 7.68 | 15.2 | 0.594 | 1.044 | -10.24 |  |
| R:R tối thiểu riêng khung 1W: null → 2 | 101.17 | 48.2% | 0.728 | 8.28 | 12.22 | 0.554 | 0.889 | -14.22 |  |
| Đệm SL riêng khung 1W (ATR): null → 0.3 | 103.09 | 45.5% | 0.711 | 9.66 | 10.67 | 0.471 | 0.941 | -15.03 |  |
| Cộng thêm ngưỡng điểm khung 1W: 0 → -1 | 120.65 | 52.1% | 0.838 | 7.57 | 15.94 | 0.654 | 1.044 | -13.18 |  |
| Cộng thêm ngưỡng điểm khung 1W: 0 → 2 | 119.91 | 51.4% | 0.833 | 7.72 | 15.53 | 0.659 | 1.022 | -13.6 |  |
| Điểm tối thiểu của vùng đặt SL: 3 → 2 | 118.46 | 52.1% | 0.811 | 7.47 | 15.86 | 0.654 | 0.983 | -10.87 |  |
| Điểm tối thiểu của vùng đặt SL: 3 → 4 | 116.6 | 50.7% | 0.81 | 7.83 | 14.89 | 0.659 | 0.974 | -13.05 |  |
| % chốt ở TP1: 0.3 → 0.287 | 120.57 | 52.1% | 0.837 | 7.57 | 15.93 | 0.651 | 1.046 | -13.16 |  |
| % chốt ở TP1: 0.3 → 0.307 | 120.7 | 52.1% | 0.838 | 7.57 | 15.94 | 0.655 | 1.043 | -13.19 |  |
| Khoảng cách tối thiểu TP1 (ATR): 0.75 → 0.688 | 115.19 | 48.9% | 0.829 | 8.18 | 14.08 | 0.614 | 1.073 | -11.42 |  |
| Khoảng cách tối thiểu TP1 (ATR): 0.75 → 0.813 | 115.66 | 47.8% | 0.737 | 8.88 | 13.02 | 0.562 | 0.933 | -13.57 |  |

### Vòng 1271 — ngẫu nhiên nhiều thông số · mốc: tổng 117.49R, win 51%, rủi ro tụt vốn 7.92R, lời÷rủi ro 14.83

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 96.02 | 38.2% | 0.378 | 16.59 | 5.79 | 0.42 | 0.339 | -5.13 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Trọng số phần SL (/100) → 7 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 99.76 | 47.4% | 0.656 | 9.19 | 10.86 | 0.479 | 0.839 | -12.48 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 | 100.73 | 41.3% | 0.514 | 12.8 | 7.87 | 0.48 | 0.543 | -8.07 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Trọng số phần Elliott (/100) → 6 | 116.41 | 50% | 0.787 | 7.82 | 14.89 | 0.581 | 1.022 | -13.18 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: BOS → 0 | 112.55 | 48.4% | 0.736 | 8.88 | 12.67 | 0.539 | 0.935 | -14.12 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần Trend (/100) → 19 + Đệm SL riêng khung 1D (ATR) → 0.3 + Ngưỡng điểm vào kèo → 74 | 111.13 | 43.5% | 0.654 | 10.78 | 10.31 | 0.611 | 0.692 | -11.32 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Trọng số phần Momentum (/100) → 25 | 107.72 | 39.5% | 0.418 | 15.57 | 6.92 | 0.397 | 0.436 | -6.66 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + R:R tối thiểu tới TP1 → 2.63 | 92.47 | 47.2% | 0.728 | 8.83 | 10.47 | 0.441 | 1.02 | -11.84 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Ngưỡng điểm vào kèo → 77 | 99.06 | 47.1% | 0.647 | 9.01 | 10.99 | 0.527 | 0.773 | -11.87 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 4H (ATR) → 0.3 | 99.4 | 34.6% | 0.414 | 20.67 | 4.81 | 0.328 | 0.514 | -13.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 | 120.65 | 52.1% | 0.838 | 7.64 | 15.79 | 0.654 | 1.044 | -13.18 | ✅ |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cộng thêm ngưỡng điểm khung 1D → 5 + Trọng số phần Elliott (/100) → 10 | 64.09 | 43.5% | 0.489 | 10.96 | 5.85 | 0.356 | 0.657 | -12.18 |  |

Nhận: Điểm vùng: Fib 0.5 / 0.382 sóng 2 4 → 3 · Cộng thêm ngưỡng điểm khung 1D 4 → 5

### Vòng 1270 — ngẫu nhiên nhiều thông số · mốc: tổng 117.49R, win 51%, rủi ro tụt vốn 7.95R, lời÷rủi ro 14.78

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: EMA 200 → 1 | 64.16 | 44.8% | 0.553 | 9.98 | 6.43 | 0.377 | 0.755 | -2 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + % chốt ở TP1 → 0.287 + Điểm vùng: POC anchored → 2 + SL tối đa (% Entry) → 0.425 | 97.45 | 44.3% | 0.56 | 10.11 | 9.64 | 0.492 | 0.622 | -8.19 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Khung lớn phải tăng (trend ≥) → 0.425 | 101.54 | 46% | 0.631 | 9.27 | 10.95 | 0.478 | 0.781 | -14.78 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + R:R tối thiểu riêng khung 1W → 2 + SL tối đa (% Entry) → 0.425 + Coin phải mạnh hơn BTC trong N ngày → 14 | 16.81 | 35.8% | 0.251 | 11.3 | 1.49 | 0.156 | 0.368 | -11.35 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Mức MACD → 1.13 | 108.01 | 49% | 0.735 | 8.55 | 12.63 | 0.55 | 0.938 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Trọng số phần Entry (/100) → 33 | 115.27 | 49.7% | 0.795 | 8.12 | 14.2 | 0.608 | 1 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Xác nhận khung nhỏ (A2) → W | 112.98 | 40.1% | 0.44 | 14.88 | 7.59 | 0.398 | 0.477 | -6.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 115.18 | 48.9% | 0.829 | 8.17 | 14.1 | 0.614 | 1.073 | -11.42 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: POC anchored → 4 + Điểm tối thiểu của vùng đặt SL → 4 | 114.96 | 49.3% | 0.756 | 8.23 | 13.97 | 0.588 | 0.92 | -6.6 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Break mây Ichimoku → 1 | 107.54 | 48.7% | 0.717 | 8.37 | 12.85 | 0.56 | 0.892 | -12.99 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: BOS → 0 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 118.27 | 40.3% | 0.378 | 12.91 | 9.16 | 0.363 | 0.39 | -8.46 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 | 123.18 | 44.1% | 0.543 | 10.93 | 11.27 | 0.56 | 0.527 | -16.33 |  |

### Vòng 1269 — ngẫu nhiên nhiều thông số · mốc: tổng 117.49R, win 51%, rủi ro tụt vốn 7.94R, lời÷rủi ro 14.80

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần SL (/100) → 9 | 111.76 | 50% | 0.765 | 8.22 | 13.6 | 0.604 | 0.946 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: POC anchored → 2 | 100.99 | 47.3% | 0.673 | 8.75 | 11.54 | 0.528 | 0.819 | -12.48 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 85.98 | 41.7% | 0.569 | 11 | 7.82 | 0.481 | 0.657 | -8.68 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Mức RSI 30/70 → 1.13 | 111.45 | 48.6% | 0.774 | 8.37 | 13.32 | 0.608 | 0.959 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 102.28 | 45% | 0.686 | 9.96 | 10.27 | 0.412 | 0.957 | -15.03 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Trọng số phần Divergence (/100) → 9 + Cộng thêm ngưỡng điểm khung 1D → 5 + Ngưỡng điểm vào kèo → 74 | 116.74 | 49.7% | 0.763 | 8.22 | 14.2 | 0.574 | 0.954 | -7.89 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Đệm SL riêng khung 1W (ATR) → 0.3 | 98.82 | 45.5% | 0.682 | 9.71 | 10.18 | 0.476 | 0.878 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 108.8 | 50.3% | 0.74 | 7.87 | 13.82 | 0.592 | 0.908 | -14.01 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: EMA 200 → 1 | 86.34 | 37.6% | 0.319 | 17.31 | 4.99 | 0.296 | 0.342 | -5.95 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cổng Dow → TẮT + Điểm vùng: MACD cắt lên Signal → 0.438 | 123.28 | 41% | 0.582 | 12.76 | 9.66 | 0.454 | 0.711 | -17.8 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Break mây Ichimoku → 3 | 110.35 | 49.1% | 0.694 | 8.85 | 12.47 | 0.575 | 0.827 | -12.05 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: EMA 200 → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Xác nhận khung nhỏ (A2) → W | 122.58 | 41.3% | 0.464 | 13.85 | 8.85 | 0.428 | 0.496 | -5.12 |  |

### Vòng 1268 — ngẫu nhiên nhiều thông số · mốc: tổng 117.49R, win 51%, rủi ro tụt vốn 7.88R, lời÷rủi ro 14.91

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Số TP tối đa → 3 + Điểm vùng: BOS → 0 | 99.39 | 47.9% | 0.71 | 8.64 | 11.5 | 0.526 | 0.884 | -14.22 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + R:R tối thiểu tới TP1 → 2.38 + Coin phải mạnh hơn BTC trong N ngày → 14 | 72.83 | 43% | 0.489 | 10.19 | 7.15 | 0.501 | 0.477 | -21.61 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Break mây Ichimoku → 1 | 108.23 | 49% | 0.726 | 8.48 | 12.76 | 0.547 | 0.924 | -15.05 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cộng điểm phân kỳ dương ẩn → 2.25 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 69.05 | 43.8% | 0.616 | 9.78 | 7.06 | 0.362 | 0.921 | -6.82 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 13.91 | 28.4% | 0.059 | 36.15 | 0.38 | 0.116 | -0.005 | -15.02 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + R:R tối thiểu riêng khung 1D → 2 + Ngưỡng điểm vào kèo → 77 + Trọng số phần SL (/100) → 7 | 103.23 | 44.6% | 0.59 | 9.85 | 10.48 | 0.575 | 0.604 | -7.77 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Khung lớn phải tăng (trend ≥) → 0.425 + R:R tối thiểu tới TP1 → 2.38 | 96.35 | 44.2% | 0.591 | 9.96 | 9.67 | 0.481 | 0.694 | -14.78 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: BOS → 0 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 | 70.06 | 44.1% | 0.631 | 9.91 | 7.07 | 0.385 | 0.921 | -6.82 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Trend (/100) → 19 | 114.72 | 48.6% | 0.819 | 8.26 | 13.89 | 0.614 | 1.05 | -11.42 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: EMA 50 → 0.75 + Khung lớn phải tăng (trend ≥) → 0.375 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 102.93 | 46% | 0.741 | 8.64 | 11.91 | 0.542 | 0.948 | -11.42 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 115.47 | 50.3% | 0.786 | 7.97 | 14.49 | 0.654 | 0.927 | -13.18 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Cộng điểm phân kỳ dương ẩn → 3 | 64.09 | 43.5% | 0.489 | 11.15 | 5.75 | 0.356 | 0.657 | -13.2 |  |

### Vòng 1267 — ngẫu nhiên nhiều thông số · mốc: tổng 117.49R, win 51%, rủi ro tụt vốn 7.91R, lời÷rủi ro 14.85

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Mức MACD → 0.875 + Đệm SL riêng khung 4H (ATR) → 0.3 | 159.18 | 37.4% | 0.513 | 19.38 | 8.21 | 0.361 | 0.676 | -8.88 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 4H → 2 | 99.03 | 41.6% | 0.361 | 12.27 | 8.07 | 0.305 | 0.404 | -11.64 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: MACD cắt lên Signal → 0.438 | 94.39 | 44.4% | 0.617 | 11.05 | 8.54 | 0.378 | 0.865 | -13.91 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 130.35 | 50% | 0.767 | 8.9 | 14.65 | 0.51 | 1.076 | -14.11 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 | 30.15 | 57.2% | 0.19 | 5.77 | 5.23 | 0.21 | 0.171 | -8.41 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN anchored → 0.313 | 132.98 | 42.2% | 0.401 | 12.44 | 10.69 | 0.349 | 0.446 | -4.6 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Coin phải mạnh hơn BTC trong N ngày → 14 | 77.89 | 47.5% | 0.771 | 8.56 | 9.1 | 0.528 | 1.029 | -16.54 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 42.05 | 43% | 0.452 | 9.63 | 4.37 | 0.383 | 0.544 | -7.55 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 128.91 | 44.6% | 0.558 | 10.52 | 12.25 | 0.591 | 0.527 | -16.83 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: POC volume profile cố định → 0.688 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức MACD → 0.875 | 118.27 | 40.6% | 0.384 | 12.44 | 9.51 | 0.367 | 0.399 | -7.19 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: MACD cắt lên Signal → 0.438 + Cộng thêm ngưỡng điểm khung 1D → 3 | 106.33 | 47.8% | 0.677 | 9.66 | 11.01 | 0.436 | 0.955 | -10.6 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 104.89 | 48.6% | 0.728 | 8.25 | 12.71 | 0.545 | 0.933 | -13.18 |  |

### Vòng 1266 — ngẫu nhiên nhiều thông số · mốc: tổng 110.95R, win 50.4%, rủi ro tụt vốn 8.04R, lời÷rủi ro 13.80

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Trend (/100) → 19 | 100.32 | 46.8% | 0.635 | 8.9 | 11.27 | 0.528 | 0.76 | -14.33 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: POC anchored → 2 | 107.48 | 45.9% | 0.726 | 9.37 | 11.47 | 0.597 | 0.874 | -11.53 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.563 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng thêm ngưỡng điểm khung 1D → 3 | 107.56 | 42.5% | 0.618 | 11.5 | 9.35 | 0.707 | 0.539 | -11.91 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: POC anchored → 4 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 110.68 | 47.1% | 0.705 | 8.87 | 12.48 | 0.657 | 0.749 | -9.15 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 23.06 | 36.9% | 0.355 | 9.96 | 2.32 | 0.257 | 0.456 | -11.35 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 112.02 | 47.5% | 0.709 | 9.25 | 12.11 | 0.675 | 0.745 | -10.53 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 35.51 | 41.2% | 0.418 | 9.77 | 3.63 | 0.299 | 0.565 | -7.55 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Cộng thêm ngưỡng điểm khung 1W → -1 + Cộng thêm ngưỡng điểm khung 1D → 3 | 107.93 | 48.6% | 0.75 | 8.22 | 13.13 | 0.592 | 0.935 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Cộng thêm ngưỡng điểm khung 1D → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: HVN cố định → 0.563 | 112.78 | 46.2% | 0.723 | 8.94 | 12.62 | 0.742 | 0.701 | -14.77 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 104.78 | 49.6% | 0.765 | 8.1 | 12.94 | 0.603 | 0.955 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 95.07 | 46.7% | 0.704 | 8.85 | 10.74 | 0.608 | 0.805 | -12.62 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + % chốt ở TP1 → 0.307 | 21 | 54.2% | 0.137 | 7.37 | 2.85 | 0.142 | 0.132 | -8.57 |  |

### Vòng 1265 — ngẫu nhiên nhiều thông số · mốc: tổng 117.49R, win 51%, rủi ro tụt vốn 7.93R, lời÷rủi ro 14.82

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 | 120.13 | 49.4% | 0.78 | 8.39 | 14.32 | 0.723 | 0.843 | -13.76 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Xác nhận khung nhỏ (A2) → W | 116.79 | 40.8% | 0.446 | 14.86 | 7.86 | 0.423 | 0.467 | -8.3 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + R:R tối thiểu riêng khung 4H → 2 | 122.76 | 40.8% | 0.391 | 12.78 | 9.61 | 0.363 | 0.414 | -7.08 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Biên mây Ichimoku → 1.05 | 122.57 | 41.4% | 0.384 | 12.48 | 9.82 | 0.357 | 0.408 | -8.19 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Cộng thêm ngưỡng điểm khung 1W → 2 | 109.17 | 49% | 0.763 | 7.99 | 13.66 | 0.543 | 0.994 | -14.59 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + R:R tối thiểu tới TP1 → 2.38 | 102.14 | 45.8% | 0.615 | 9.47 | 10.79 | 0.486 | 0.741 | -14.75 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: Mức RSI 30/70 → 1.13 | 129.2 | 43.6% | 0.633 | 11.1 | 11.64 | 0.538 | 0.73 | -22.4 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm tối thiểu của vùng đặt SL → 4 + Cộng thêm ngưỡng điểm khung 1D → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 | 53.88 | 37.1% | 0.435 | 13.66 | 3.94 | 0.262 | 0.581 | -5.07 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Trend (/100) → 19 + Cộng điểm phân kỳ dương ẩn → 3 | 116.84 | 50.3% | 0.795 | 8.19 | 14.27 | 0.594 | 1.022 | -13.18 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 113.55 | 50.3% | 0.772 | 8.18 | 13.88 | 0.578 | 0.992 | -14.13 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Lệnh chờ hết hạn sau (nến) → 6 | 97.12 | 48.9% | 0.719 | 8.46 | 11.48 | 0.555 | 0.908 | -11.79 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm tối thiểu của vùng đặt SL → 2 + % chốt ở TP1 → 0.287 | 112.41 | 50% | 0.77 | 8.09 | 13.89 | 0.606 | 0.948 | -12.55 |  |

### Vòng 1264 — ngẫu nhiên nhiều thông số · mốc: tổng 117.49R, win 51%, rủi ro tụt vốn 7.85R, lời÷rủi ro 14.97

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 90.23 | 48.9% | 0.659 | 8.68 | 10.4 | 0.595 | 0.729 | -12.41 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 112.72 | 48.6% | 0.794 | 8.44 | 13.36 | 0.574 | 1.054 | -11.42 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 84.61 | 45.2% | 0.672 | 9.92 | 8.53 | 0.557 | 0.797 | -11.91 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 108.8 | 47.9% | 0.667 | 10.05 | 10.83 | 0.505 | 0.878 | -5.61 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm tối thiểu của vùng đặt SL → 2 | 95.1 | 47.1% | 0.679 | 9.2 | 10.34 | 0.444 | 0.929 | -12.69 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 50 → 0.75 + Đệm SL riêng khung 4H (ATR) → 0.3 | 161.83 | 37.9% | 0.511 | 19.71 | 8.21 | 0.456 | 0.563 | -11.64 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 102.71 | 45.5% | 0.708 | 9.97 | 10.3 | 0.466 | 0.941 | -15.03 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + % chốt ở TP1 → 0.287 + Điểm vùng: HVN cố định → 0.438 | 113.6 | 50.3% | 0.783 | 8.25 | 13.77 | 0.572 | 1.016 | -13.16 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: EMA 200 → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 65.47 | 40.1% | 0.431 | 12.13 | 5.4 | 0.506 | 0.362 | -10.11 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 25.05 | 55.6% | 0.164 | 6.4 | 3.91 | 0.173 | 0.155 | -8.24 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần R:R (/100) → 28 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Elliott (/100) → 6 | 99.7 | 47.5% | 0.707 | 8.5 | 11.73 | 0.531 | 0.871 | -14.22 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: MACD cắt lên Signal → 0.438 | 102.84 | 46.2% | 0.651 | 9.88 | 10.41 | 0.4 | 0.935 | -10.6 |  |

### Vòng 1263 — ngẫu nhiên nhiều thông số · mốc: tổng 117.49R, win 51%, rủi ro tụt vốn 8.01R, lời÷rủi ro 14.67

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Break mây Ichimoku → 1 + % chốt ở TP1 → 0.307 + Trọng số phần Trend (/100) → 19 | 108.59 | 48.7% | 0.724 | 8.32 | 13.05 | 0.559 | 0.902 | -14.02 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: EMA 200 → 1 + Đệm SL riêng khung 1D (ATR) → 0.3 | 116.22 | 47.1% | 0.676 | 10.17 | 11.43 | 0.664 | 0.687 | -7.21 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Entry (/100) → 28 | 97.57 | 48.4% | 0.762 | 8.67 | 11.25 | 0.495 | 1.046 | -12.86 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + R:R tối thiểu riêng khung 1W → 2 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 88.17 | 43.3% | 0.694 | 9.51 | 9.27 | 0.477 | 0.936 | -13.42 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cộng thêm ngưỡng điểm khung 4H → -1 + Cộng thêm ngưỡng điểm khung 1D → 3 | 115.49 | 48.7% | 0.76 | 8.74 | 13.21 | 0.489 | 1.061 | -13.08 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số TP tối đa → 1 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 30.15 | 57.2% | 0.19 | 5.72 | 5.27 | 0.21 | 0.171 | -8.42 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần R:R (/100) → 33 | 100.27 | 47.9% | 0.716 | 8.68 | 11.55 | 0.444 | 1.005 | -13.71 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Số TP tối đa → 1 + Điểm vùng: BOS → 0 | 115.94 | 50% | 0.783 | 7.89 | 14.69 | 0.575 | 1.022 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + R:R tối thiểu riêng khung 1D → 2 + SL tối đa (% Entry) → 0.425 | 105.64 | 45.7% | 0.611 | 9.55 | 11.06 | 0.55 | 0.666 | -9.96 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 106.51 | 45% | 0.63 | 10.98 | 9.7 | 0.543 | 0.712 | -11.52 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Trọng số phần Elliott (/100) → 6 + R:R tối thiểu riêng khung 1D → 2 | 110.29 | 46% | 0.634 | 8.95 | 12.32 | 0.579 | 0.685 | -9.96 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Trend (/100) → 12 + Điểm vùng: POC anchored → 2 | 74.57 | 45.5% | 0.606 | 9.44 | 7.9 | 0.481 | 0.734 | -18.95 |  |
