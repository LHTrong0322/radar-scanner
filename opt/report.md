# Tối ưu tự động (chạy liên tục) — vòng 1132

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 13216 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 98.78R | 0.595 | 5.7R | 9.64R | 10.25 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 143 | 53.1% | 121.88R | 0.852 | 5.15R | 7.13R | 17.09 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 26 | 50% | 20.05R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 106 | 54.7% | 94.86R | 19 | 21.1% | -4.19R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 98.78R | 9.64R | 10.25 | 30 | 13.3% | -11.98R |
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

### Vòng 1132 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.09

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 113.14 | 50.3% | 0.74 | 7.98 | 14.18 | 0.652 | 0.836 | -11.14 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần R:R (/100) → 28 | 108.08 | 44.2% | 0.655 | 11.04 | 9.79 | 0.686 | 0.628 | -10.77 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Divergence (/100) → 12 | 113.59 | 49.7% | 0.742 | 7.78 | 14.6 | 0.566 | 0.941 | -13.75 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + % chốt ở TP1 → 0.287 + Đệm SL riêng khung 1W (ATR) → 0.3 | 106.82 | 46.9% | 0.737 | 9 | 11.87 | 0.517 | 0.954 | -13.99 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib sóng 4 → 0.938 | 83.64 | 50.8% | 0.709 | 7.52 | 11.12 | 0.583 | 0.853 | -19.45 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm tối thiểu của vùng đặt SL → 2 | 119.74 | 53.5% | 0.832 | 7.24 | 16.54 | 0.672 | 1.01 | -9.84 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 77.96 | 41.4% | 0.538 | 11.91 | 6.55 | 0.453 | 0.605 | -9.4 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Momentum (/100) → 25 + Cổng Dow → TẮT | 130.4 | 43.1% | 0.639 | 11.13 | 11.72 | 0.544 | 0.736 | -15.83 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + R:R tối thiểu riêng khung 1W → 2 | 108.04 | 50.7% | 0.761 | 7.8 | 13.85 | 0.604 | 0.918 | -13.19 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 50 → 1.13 + Trọng số phần Trend (/100) → 19 | 105.85 | 47% | 0.645 | 8.62 | 12.28 | 0.575 | 0.716 | -7.92 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Fib sóng 4 → 0.938 | 119.11 | 51.8% | 0.845 | 7.15 | 16.66 | 0.668 | 1.035 | -12.57 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Điểm vùng: POC volume profile cố định → 0.688 | 119.14 | 52.1% | 0.839 | 7.22 | 16.5 | 0.649 | 1.052 | -12.16 |  |

### Vòng 1131 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.16R, lời÷rủi ro 17.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 106.08 | 46.6% | 0.727 | 9.12 | 11.63 | 0.519 | 0.929 | -12.69 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 121.88 | 53.1% | 0.852 | 7.16 | 17.02 | 0.672 | 1.057 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần Elliott (/100) → 6 + R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Momentum (/100) → 21 | 123.68 | 41.2% | 0.398 | 11.95 | 10.35 | 0.354 | 0.435 | -6.42 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần R:R (/100) → 28 + Điểm vùng: BOS → 2 | 106.52 | 45% | 0.715 | 9.85 | 10.81 | 0.521 | 0.912 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Đệm SL riêng khung 4H (ATR) → 0.3 | 141.29 | 37.3% | 0.498 | 18.73 | 7.54 | 0.314 | 0.676 | -5.21 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + SL tối đa (% Entry) → 0.425 | 100.62 | 49.6% | 0.792 | 8.22 | 12.24 | 0.544 | 1.052 | -12.86 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC anchored → 4 | 103.12 | 37.2% | 0.408 | 19.66 | 5.25 | 0.212 | 0.608 | 5.26 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: POC volume profile cố định → 0.688 | 121.77 | 53.1% | 0.852 | 7.16 | 17.01 | 0.669 | 1.059 | -12.14 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Divergence (/100) → 9 + R:R tối thiểu riêng khung 1W → 2 | 118.83 | 49% | 0.767 | 8.16 | 14.56 | 0.76 | 0.774 | -13.78 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: POC anchored → 2 | 98.81 | 48.3% | 0.663 | 8.45 | 11.69 | 0.484 | 0.845 | -11.46 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Số TP tối đa → 1 | 125.29 | 44.5% | 0.547 | 10.66 | 11.75 | 0.574 | 0.521 | -15.8 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: HVN anchored → 0.188 | 116.98 | 52.4% | 0.818 | 7.43 | 15.74 | 0.672 | 0.984 | -12.16 |  |

### Vòng 1130 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 109.23 | 49.7% | 0.753 | 8.17 | 13.37 | 0.588 | 0.945 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Cộng điểm phân kỳ dương ẩn → 2.25 | 111.08 | 50.7% | 0.741 | 7.77 | 14.3 | 0.634 | 0.856 | -9.85 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 111.87 | 41.4% | 0.533 | 11.99 | 9.33 | 0.504 | 0.561 | -17.17 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 121.13 | 52.4% | 0.847 | 7.18 | 16.87 | 0.677 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: MACD cắt lên Signal → 0.563 + Cộng thêm ngưỡng điểm khung 1W → 2 | 75.88 | 45.9% | 0.684 | 9.21 | 8.24 | 0.445 | 0.954 | -6.21 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Elliott (/100) → 6 + Cộng thêm ngưỡng điểm khung 1D → 3 | 108.09 | 50.3% | 0.756 | 7.56 | 14.3 | 0.586 | 0.928 | -13.19 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 32.63 | 58.5% | 0.205 | 5.48 | 5.95 | 0.232 | 0.181 | -8.18 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 120.87 | 52.8% | 0.839 | 7.12 | 16.98 | 0.672 | 1.027 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: POC anchored → 2 + Lệnh chờ hết hạn sau (nến) → 6 | 92.71 | 48.2% | 0.667 | 8.67 | 10.69 | 0.497 | 0.849 | -11.21 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 118.89 | 50.7% | 0.803 | 7.95 | 14.95 | 0.541 | 1.096 | -12.06 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 87.14 | 52.2% | 0.771 | 6.87 | 12.68 | 0.371 | 1.125 | -12.93 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Số TP tối đa → 3 + Điểm vùng: POC volume profile cố định → 0.688 | 37.31 | 40.9% | 0.424 | 9.82 | 3.8 | 0.337 | 0.534 | -7.55 |  |

### Vòng 1129 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Xác nhận khung nhỏ (A2) → W | 122.2 | 40% | 0.47 | 14.35 | 8.52 | 0.495 | 0.448 | -7.11 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 117.52 | 50.7% | 0.816 | 7.66 | 15.34 | 0.633 | 1.026 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Fib sóng 4 → 0.938 + Cộng điểm phân kỳ dương ẩn → 3 | 106.93 | 50.4% | 0.758 | 7.8 | 13.71 | 0.586 | 0.928 | -13.19 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + % chốt ở TP1 → 0.307 | 106.01 | 47.2% | 0.65 | 8.64 | 12.27 | 0.509 | 0.787 | -13.48 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + % chốt ở TP1 → 0.287 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm tối thiểu của vùng đặt SL → 4 | 117.49 | 49.1% | 0.739 | 8.64 | 13.6 | 0.589 | 0.907 | -9.53 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL riêng khung 4H (ATR) → 0.3 | 162.22 | 38.9% | 0.554 | 17.95 | 9.04 | 0.409 | 0.705 | -7.18 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Xác nhận khung nhỏ (A2) → W | 133.43 | 40.5% | 0.505 | 13.63 | 9.79 | 0.491 | 0.518 | -6.69 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức RSI 30/70 → 0.875 | 120.76 | 50.3% | 0.769 | 8.24 | 14.66 | 0.586 | 0.985 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Divergence (/100) → 12 + Cộng thêm ngưỡng điểm khung 4H → -1 | 121.88 | 53.1% | 0.852 | 7.06 | 17.26 | 0.672 | 1.057 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Ngưỡng điểm vào kèo → 77 | 119.22 | 51.4% | 0.828 | 7.34 | 16.24 | 0.7 | 0.963 | -11.55 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức MACD → 0.875 | 73.56 | 46.8% | 0.675 | 8.79 | 8.37 | 0.45 | 0.94 | -5.79 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 | 85.68 | 50.4% | 0.732 | 7.98 | 10.74 | 0.571 | 0.927 | -17.6 |  |

### Vòng 1128 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.15R, lời÷rủi ro 17.05

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Biên mây Ichimoku → 1.05 | 113.75 | 48.7% | 0.739 | 8.46 | 13.45 | 0.708 | 0.773 | -13.57 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu riêng khung 4H → 2 | 102.34 | 40.4% | 0.35 | 12.8 | 8 | 0.337 | 0.362 | -8.86 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Cộng thêm ngưỡng điểm khung 1D → 5 | 87.14 | 52.2% | 0.771 | 6.86 | 12.7 | 0.371 | 1.125 | -14.25 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Mức RSI 30/70 → 0.875 + Đệm SL riêng khung 1D (ATR) → 0.3 | 103.71 | 45.3% | 0.603 | 11.14 | 9.31 | 0.489 | 0.707 | -12.37 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Divergence (/100) → 9 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 127.43 | 50.6% | 0.827 | 7.86 | 16.21 | 0.815 | 0.842 | -11.72 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: BOS → 2 | 105.44 | 46.3% | 0.717 | 9.43 | 11.18 | 0.486 | 0.952 | -14.01 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 117.6 | 51.7% | 0.822 | 7.36 | 15.98 | 0.63 | 1.041 | -11.98 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 101.23 | 48% | 0.675 | 9.19 | 11.02 | 0.482 | 0.901 | -10.59 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Momentum (/100) → 25 + Trọng số phần SL (/100) → 9 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 83.7 | 45.1% | 0.686 | 9.26 | 9.04 | 0.448 | 0.94 | -14.15 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 102.06 | 49.3% | 0.709 | 7.74 | 13.19 | 0.513 | 0.922 | -13.15 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Khung lớn phải tăng (trend ≥) → 0.425 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 90.31 | 40.6% | 0.298 | 13.5 | 6.69 | 0.37 | 0.234 | -11.54 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 111.31 | 49.3% | 0.818 | 7.95 | 14 | 0.637 | 1.028 | -10.4 |  |

### Vòng 1127 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.05R, lời÷rủi ro 17.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + % chốt ở TP1 → 0.287 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Mức MACD → 1.13 | 112.74 | 49.4% | 0.732 | 7.94 | 14.2 | 0.632 | 0.844 | -11.12 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + R:R tối thiểu tới TP1 → 2.63 + R:R tối thiểu riêng khung 4H → 2 | 112.86 | 41% | 0.368 | 12.42 | 9.09 | 0.27 | 0.452 | -5.84 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: EMA 21 → 1.13 | 100.52 | 50.3% | 0.693 | 8.01 | 12.55 | 0.636 | 0.756 | -10.15 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 118.66 | 52.5% | 0.854 | 7.15 | 16.6 | 0.659 | 1.069 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + % chốt ở TP1 → 0.307 + Cộng thêm ngưỡng điểm khung 1D → 5 | 121.94 | 53.1% | 0.853 | 7.03 | 17.35 | 0.673 | 1.056 | -12.17 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 95.19 | 50% | 0.652 | 8.45 | 11.27 | 0.61 | 0.696 | -12.79 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 99.41 | 44.6% | 0.562 | 9.29 | 10.7 | 0.554 | 0.568 | -6.62 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Điểm vùng: Fib sóng 4 → 1.56 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 99.13 | 48.2% | 0.703 | 8.56 | 11.58 | 0.438 | 0.995 | -13.71 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Cộng thêm ngưỡng điểm khung 1D → 5 + Số TP tối đa → 3 | 101.75 | 49.3% | 0.687 | 8.21 | 12.39 | 0.511 | 0.873 | -11.46 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 64.66 | 43.6% | 0.486 | 10.9 | 5.93 | 0.337 | 0.673 | -10.63 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 162.22 | 38.9% | 0.554 | 17.75 | 9.14 | 0.409 | 0.705 | -7.93 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1D → 3 + Trọng số phần R:R (/100) → 28 + SL tối đa (% Entry) → 0.425 | 110.04 | 44.1% | 0.647 | 11.09 | 9.92 | 0.67 | 0.628 | -9.47 |  |

### Vòng 1126 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.09

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: POC anchored → 2 + Số TP tối đa → 1 + Điểm vùng: Break mây Ichimoku → 1 | 86.96 | 47.8% | 0.63 | 8.04 | 10.82 | 0.511 | 0.749 | -15.74 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần SL (/100) → 9 + R:R tối thiểu riêng khung 4H → 2 | 121.92 | 40.8% | 0.395 | 12.19 | 10 | 0.359 | 0.425 | -7.86 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 99.41 | 50.8% | 0.753 | 7.66 | 12.98 | 0.596 | 0.936 | -10.77 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Mức RSI 30/70 → 0.875 | 107.46 | 50.9% | 0.659 | 8.6 | 12.5 | 0.582 | 0.748 | -12.12 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 92.41 | 45.3% | 0.624 | 9.72 | 9.51 | 0.418 | 0.861 | -9.57 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 | 42.33 | 38.5% | 0.388 | 13.92 | 3.04 | 0.594 | 0.179 | -4.99 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Đệm SL riêng khung 1W (ATR) → 0.3 | 105.33 | 46.4% | 0.688 | 9.75 | 10.8 | 0.463 | 0.917 | -11.43 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 124.01 | 44.2% | 0.549 | 10.88 | 11.4 | 0.57 | 0.528 | -15.8 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 119.03 | 40.7% | 0.47 | 14.05 | 8.47 | 0.47 | 0.471 | -6.69 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Đệm SL riêng khung 1D (ATR) → 0.3 | 112.39 | 47.5% | 0.694 | 9.89 | 11.36 | 0.681 | 0.706 | -10.49 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 116.83 | 51.4% | 0.811 | 7.51 | 15.56 | 0.611 | 1.041 | -11.98 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: EMA 21 → 1.13 + Trọng số phần Entry (/100) → 28 | 113.83 | 51% | 0.785 | 7.34 | 15.51 | 0.636 | 0.949 | -11.14 |  |

### Vòng 1125 — ngẫu nhiên nhiều thông số · mốc: tổng 119.72R, win 52.9%, rủi ro tụt vốn 7.11R, lời÷rủi ro 16.84

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: BOS → 2 | 105.68 | 46.6% | 0.648 | 8.99 | 11.76 | 0.625 | 0.669 | -6.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + % chốt ở TP1 → 0.287 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 101.81 | 42.2% | 0.467 | 11.79 | 8.64 | 0.502 | 0.435 | -16.27 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Đệm SL riêng khung 1D (ATR) → 0.3 | 115.44 | 47.4% | 0.75 | 9.77 | 11.82 | 0.759 | 0.742 | -8.51 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: HVN cố định → 0.438 | 105.26 | 46.9% | 0.658 | 8.66 | 12.15 | 0.54 | 0.767 | -11.17 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Lệnh chờ hết hạn sau (nến) → 8 | 115.89 | 50.7% | 0.773 | 7.87 | 14.73 | 0.602 | 0.963 | -11.46 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Entry (/100) → 33 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 21 → 0.875 | 100.07 | 49% | 0.663 | 8.58 | 11.66 | 0.621 | 0.707 | -11.05 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Entry (/100) → 28 | 75.38 | 45.4% | 0.698 | 8.99 | 8.38 | 0.449 | 0.976 | -4.75 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Cổng Dow → TẮT + Trần điểm khi chart yếu (Trend < x) → -0.225 | 133.37 | 44% | 0.617 | 11.31 | 11.79 | 0.609 | 0.627 | -8.85 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + R:R tối thiểu tới TP1 → 2.38 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN cố định → 0.563 | 90.54 | 38.8% | 0.374 | 15.99 | 5.66 | 0.293 | 0.433 | -11.07 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần Momentum (/100) → 25 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm tối thiểu của vùng đặt SL → 2 | 70.64 | 30.8% | 0.17 | 36.89 | 1.91 | 0.215 | 0.134 | -18.19 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: HVN anchored → 0.188 | 118.96 | 52.9% | 0.862 | 7.11 | 16.73 | 0.659 | 1.09 | -9.86 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.35 + Lệnh chờ hết hạn sau (nến) → 8 | 102.28 | 47.1% | 0.669 | 9.09 | 11.25 | 0.523 | 0.832 | -12.03 |  |

### Vòng 1124 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.09

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Trọng số phần Entry (/100) → 28 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 114.73 | 49.3% | 0.831 | 7.93 | 14.47 | 0.615 | 1.082 | -10.4 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.188 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 176.59 | 39.5% | 0.591 | 16.95 | 10.42 | 0.469 | 0.718 | -6.94 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Xác nhận khung nhỏ (A2) → W + Khung lớn phải tăng (trend ≥) → 0.375 | 58.72 | 41.9% | 0.352 | 13.03 | 4.51 | 0.427 | 0.268 | -15.31 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần R:R (/100) → 28 | 125.24 | 44.5% | 0.552 | 10.79 | 11.61 | 0.574 | 0.53 | -15.8 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: POC volume profile cố định → 0.813 | 115.19 | 49.6% | 0.841 | 7.86 | 14.66 | 0.615 | 1.106 | -9.38 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + R:R tối thiểu riêng khung 1D → 2 | 136.11 | 42.2% | 0.528 | 11.38 | 11.96 | 0.569 | 0.489 | -12.67 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Ngưỡng điểm vào kèo → 74 | 66.99 | 44% | 0.5 | 10.28 | 6.52 | 0.363 | 0.673 | -12.21 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần SL (/100) → 7 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib sóng 4 → 0.938 | 31.94 | 58% | 0.203 | 5.52 | 5.79 | 0.218 | 0.19 | -8.18 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: POC anchored → 4 | 118.81 | 51.3% | 0.792 | 8.12 | 14.63 | 0.611 | 0.978 | -6.11 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Mức MACD → 1.13 | 108.59 | 49.3% | 0.754 | 7.72 | 14.07 | 0.534 | 0.987 | -13.15 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: HVN anchored → 0.313 + Cộng thêm ngưỡng điểm khung 1W → -1 | 99.89 | 48% | 0.666 | 9.37 | 10.66 | 0.466 | 0.901 | -10.58 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + SL tối đa (% Entry) → 0.425 + Điểm vùng: POC volume profile cố định → 0.813 | 110.35 | 51.7% | 0.761 | 7.47 | 14.77 | 0.626 | 0.906 | -12.99 |  |

### Vòng 1123 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.16R, lời÷rủi ro 17.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số TP tối đa → 3 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: POC anchored → 2 | 97.61 | 49.3% | 0.728 | 8.6 | 11.35 | 0.484 | 0.973 | -12.86 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần Momentum (/100) → 21 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 76.33 | 46.4% | 0.694 | 8.78 | 8.69 | 0.445 | 0.981 | -5.79 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 162.22 | 38.9% | 0.554 | 18.1 | 8.96 | 0.409 | 0.705 | -8.97 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Cộng thêm ngưỡng điểm khung 1W → -1 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 118.89 | 50.7% | 0.803 | 8.09 | 14.7 | 0.541 | 1.096 | -12.06 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: MACD cắt lên Signal → 0.563 | 121.88 | 53.1% | 0.852 | 7.16 | 17.02 | 0.672 | 1.057 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + R:R tối thiểu riêng khung 1D → 2 | 101.19 | 44.6% | 0.572 | 9.57 | 10.57 | 0.58 | 0.565 | -6.62 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: BOS → 2 + Điểm vùng: EMA 200 → 3 | 80.65 | 49.1% | 0.72 | 7.45 | 10.83 | 0.271 | 1.096 | -13.2 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 86.15 | 44.4% | 0.538 | 10.43 | 8.26 | 0.421 | 0.662 | -9.27 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: EMA 200 → 3 | 61.44 | 43.1% | 0.564 | 9.82 | 6.26 | 0.357 | 0.79 | -7.84 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức RSI 30/70 → 1.13 + Cổng Dow → TẮT + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 44.76 | 36.5% | 0.195 | 18.33 | 2.44 | 0.26 | 0.125 | -23.32 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + SL tối đa (% Entry) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Đệm SL riêng khung 1D (ATR) → 0.3 | 85.32 | 41.1% | 0.508 | 13.1 | 6.51 | 0.487 | 0.525 | -7.11 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: HVN anchored → 0.313 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 74.93 | 45.9% | 0.687 | 8.84 | 8.48 | 0.445 | 0.973 | -5.79 |  |
