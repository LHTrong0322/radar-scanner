# Tối ưu tự động (chạy liên tục) — vòng 1140

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 13312 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 98.78R | 0.595 | 5.7R | 9.67R | 10.22 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 143 | 53.1% | 121.88R | 0.852 | 5.15R | 7.07R | 17.24 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

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
| Bot thật | 166 | 47% | 98.78R | 9.67R | 10.22 | 30 | 13.3% | -11.98R |
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

### Vòng 1140 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.07R, lời÷rủi ro 17.24

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Mức RSI 30/70 → 0.875 | 58.79 | 45.3% | 0.459 | 10.62 | 5.54 | 0.311 | 0.633 | -8.42 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 97.69 | 46.2% | 0.683 | 9.05 | 10.79 | 0.535 | 0.847 | -8.13 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + R:R tối thiểu tới TP1 → 2.38 | 100.86 | 45.5% | 0.611 | 9.77 | 10.32 | 0.511 | 0.703 | -13.47 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cộng thêm ngưỡng điểm khung 1D → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần SL (/100) → 9 | 114.43 | 50.3% | 0.778 | 7.69 | 14.88 | 0.617 | 0.961 | -13.13 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + R:R tối thiểu riêng khung 1D → 2 | 111.93 | 46.8% | 0.647 | 8.91 | 12.56 | 0.6 | 0.691 | -8.93 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Cộng thêm ngưỡng điểm khung 4H → 2 + Khung lớn phải tăng (trend ≥) → 0.375 + Số TP tối đa → 1 | 106.85 | 49.6% | 0.758 | 8 | 13.36 | 0.564 | 0.966 | -12.16 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Elliott (/100) → 6 | 116.22 | 46.1% | 0.696 | 10.06 | 11.55 | 0.665 | 0.724 | -10.49 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Break mây Ichimoku → 3 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 77.88 | 44.8% | 0.448 | 11.33 | 6.87 | 0.389 | 0.506 | -13.02 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Fib sóng 4 → 0.938 | 97.69 | 46.2% | 0.683 | 9.05 | 10.79 | 0.535 | 0.847 | -8.13 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + % chốt ở TP1 → 0.307 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 121.04 | 52.4% | 0.835 | 7.26 | 16.67 | 0.696 | 0.984 | -12.17 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: BOS → 2 | 107.34 | 50.3% | 0.751 | 7.92 | 13.55 | 0.586 | 0.918 | -13.19 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Trọng số phần R:R (/100) → 33 | 121.68 | 52.8% | 0.845 | 7.1 | 17.14 | 0.66 | 1.057 | -12.16 |  |

### Vòng 1139 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: EMA 21 → 1.13 | 102.76 | 48% | 0.685 | 8.44 | 12.18 | 0.486 | 0.913 | -12.74 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + R:R tối thiểu riêng khung 1D → 2 | 123.92 | 41.4% | 0.484 | 12.03 | 10.3 | 0.524 | 0.447 | -11.62 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Trọng số phần Momentum (/100) → 25 | 120.32 | 52.4% | 0.841 | 7.36 | 16.35 | 0.67 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 113.14 | 48.9% | 0.814 | 8.21 | 13.78 | 0.572 | 1.106 | -10.4 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + % chốt ở TP1 → 0.307 | 119.71 | 51.7% | 0.837 | 7.26 | 16.49 | 0.679 | 1.012 | -12.17 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 | 111.85 | 46.8% | 0.647 | 9.2 | 12.16 | 0.599 | 0.691 | -8.93 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: POC anchored → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 100.84 | 50% | 0.672 | 8.28 | 12.18 | 0.515 | 0.839 | -10.17 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Mức RSI 30/70 → 0.875 | 120.61 | 51% | 0.768 | 8.24 | 14.64 | 0.6 | 0.967 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: EMA 50 → 0.75 + Coin phải mạnh hơn BTC trong N ngày → 14 | 90.38 | 50.8% | 0.766 | 7.51 | 12.03 | 0.571 | 0.997 | -18.62 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: BOS → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 101.19 | 45.7% | 0.585 | 9.43 | 10.73 | 0.553 | 0.615 | -8.93 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Xác nhận khung nhỏ (A2) → W + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 109.27 | 40% | 0.42 | 14.93 | 7.32 | 0.426 | 0.415 | -3.43 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 28.08 | 57.7% | 0.18 | 6.16 | 4.56 | 0.182 | 0.178 | -6.72 |  |

### Vòng 1138 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.16R, lời÷rủi ro 17.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Khung lớn phải tăng (trend ≥) → 0.425 + R:R tối thiểu riêng khung 1W → 2 | 103.68 | 50% | 0.762 | 7.69 | 13.48 | 0.577 | 0.948 | -13.23 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: HVN cố định → 0.438 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + R:R tối thiểu riêng khung 1D → 2 | 91.89 | 44.4% | 0.537 | 10 | 9.19 | 0.495 | 0.581 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 117.69 | 51.7% | 0.823 | 7.35 | 16.01 | 0.631 | 1.041 | -11.98 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: HVN cố định → 0.438 | 93.24 | 47.4% | 0.539 | 9.33 | 9.99 | 0.515 | 0.562 | -9.9 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu tới TP1 → 2.38 | 71.84 | 32.4% | 0.245 | 27.06 | 2.65 | 0.235 | 0.255 | -11.77 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: POC volume profile cố định → 0.813 + R:R tối thiểu riêng khung 1W → 2 | 27.03 | 55.6% | 0.177 | 6.04 | 4.48 | 0.217 | 0.14 | -6.94 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 116.73 | 51.4% | 0.834 | 7.28 | 16.03 | 0.659 | 1.025 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Đệm SL riêng khung 1W (ATR) → 0.3 | 107.54 | 46.9% | 0.742 | 8.9 | 12.08 | 0.519 | 0.962 | -14.01 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Break mây Ichimoku → 3 | 106.71 | 48.9% | 0.613 | 8.76 | 12.18 | 0.56 | 0.667 | -9.31 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 19.57 | 52.6% | 0.129 | 7.68 | 2.55 | 0.145 | 0.117 | -11.39 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: POC anchored → 4 | 106.01 | 48.8% | 0.654 | 9.2 | 11.52 | 0.582 | 0.726 | -5.49 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần R:R (/100) → 33 + Điểm vùng: MACD cắt lên Signal → 0.563 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 118.94 | 51.7% | 0.82 | 7.25 | 16.41 | 0.677 | 0.974 | -10.87 |  |

### Vòng 1137 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.09

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần Divergence (/100) → 12 | 120.41 | 52.4% | 0.842 | 7.22 | 16.68 | 0.672 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: HVN cố định → 0.563 | 121.88 | 53.1% | 0.852 | 7.13 | 17.09 | 0.672 | 1.057 | -12.16 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: HVN anchored → 0.313 | 102.87 | 50.7% | 0.705 | 8.22 | 12.51 | 0.629 | 0.791 | -11.75 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 101.23 | 48% | 0.675 | 9.37 | 10.8 | 0.482 | 0.901 | -10.58 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.438 | 156.16 | 37.6% | 0.502 | 19.55 | 7.99 | 0.362 | 0.641 | -7.97 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + % chốt ở TP1 → 0.307 | 161.81 | 38.7% | 0.554 | 17.43 | 9.28 | 0.41 | 0.704 | -8.24 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: POC anchored → 4 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Momentum (/100) → 21 | 10.74 | 37.9% | 0.185 | 11.66 | 0.92 | 0.049 | 0.341 | -8.32 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: EMA 50 → 1.13 | 117.52 | 50.7% | 0.816 | 7.63 | 15.4 | 0.633 | 1.026 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 38.87 | 41.3% | 0.423 | 9.76 | 3.98 | 0.356 | 0.501 | -11.35 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + SL tối đa (% Entry) → 0.425 | 100.22 | 51.1% | 0.765 | 7.59 | 13.2 | 0.616 | 0.936 | -11.79 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 1D (ATR) → 0.3 | 91.98 | 46.4% | 0.657 | 10.12 | 9.09 | 0.686 | 0.63 | -17.64 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 39.84 | 42.7% | 0.448 | 9.37 | 4.25 | 0.372 | 0.54 | -7.55 |  |

### Vòng 1136 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.16R, lời÷rủi ro 17.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm tối thiểu của vùng đặt SL → 4 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 108.06 | 51% | 0.745 | 7.8 | 13.85 | 0.677 | 0.818 | -10.05 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 28.96 | 57.7% | 0.186 | 5.78 | 5.01 | 0.189 | 0.182 | -9.28 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Mức RSI 30/70 → 1.13 | 133.77 | 40.7% | 0.509 | 13.65 | 9.8 | 0.491 | 0.524 | -6.69 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Coin phải mạnh hơn BTC trong N ngày → 14 | 88.75 | 49.6% | 0.759 | 7.79 | 11.39 | 0.569 | 0.979 | -18.62 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức RSI 30/70 → 0.875 | 109.7 | 48.2% | 0.669 | 9.85 | 11.14 | 0.477 | 0.897 | -9.58 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Số TP tối đa → 1 | 119.66 | 51.7% | 0.837 | 7.36 | 16.26 | 0.677 | 1.013 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + R:R tối thiểu riêng khung 1W → 2 | 105.83 | 49.3% | 0.745 | 7.97 | 13.28 | 0.609 | 0.878 | -13.19 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm tối thiểu của vùng đặt SL → 4 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 131.5 | 39.9% | 0.5 | 14.34 | 9.17 | 0.506 | 0.495 | -6.68 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + SL tối đa (% Entry) → 0.425 + Trọng số phần Divergence (/100) → 12 + R:R tối thiểu riêng khung 4H → 2 | 98.64 | 40.1% | 0.338 | 13.23 | 7.46 | 0.337 | 0.338 | -9.36 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần SL (/100) → 9 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 113.8 | 49% | 0.774 | 8.17 | 13.93 | 0.55 | 1.02 | -12.59 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 119.53 | 52.8% | 0.83 | 7.16 | 16.69 | 0.649 | 1.038 | -12.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Cộng thêm ngưỡng điểm khung 1W → -1 | 121.88 | 53.1% | 0.852 | 7.16 | 17.02 | 0.672 | 1.057 | -12.16 |  |

### Vòng 1135 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.05R, lời÷rủi ro 17.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: BOS → 0 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 94.84 | 35.2% | 0.412 | 20.16 | 4.7 | 0.281 | 0.551 | -14.74 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Cộng thêm ngưỡng điểm khung 1W → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 161.56 | 38.6% | 0.551 | 17.69 | 9.13 | 0.41 | 0.697 | -9.72 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Break mây Ichimoku → 3 | 86.42 | 46% | 0.491 | 10.77 | 8.02 | 0.471 | 0.512 | -14.38 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 117.57 | 48.2% | 0.717 | 8.78 | 13.39 | 0.782 | 0.645 | -11.73 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: BOS → 2 | 107.74 | 49.3% | 0.738 | 8.28 | 13.01 | 0.569 | 0.937 | -12.16 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 105.18 | 47.6% | 0.725 | 8.42 | 12.49 | 0.602 | 0.861 | -13.71 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: POC anchored → 2 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Mức RSI 30/70 → 0.875 | 77.45 | 47.8% | 0.578 | 9.38 | 8.26 | 0.433 | 0.741 | -17.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Fib sóng 4 → 0.938 | 114.01 | 50.7% | 0.803 | 7.86 | 14.51 | 0.584 | 1.048 | -12.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Trọng số phần Trend (/100) → 19 | 120.06 | 51.7% | 0.828 | 7.27 | 16.51 | 0.645 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Biên mây Ichimoku → 1.05 | 101.08 | 50.7% | 0.683 | 8.08 | 12.51 | 0.628 | 0.741 | -10.44 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 106.95 | 47.4% | 0.686 | 8.76 | 12.21 | 0.612 | 0.759 | -9.85 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 114.69 | 51.4% | 0.786 | 7.56 | 15.17 | 0.633 | 0.956 | -12.16 |  |

### Vòng 1134 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.09

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Cộng thêm ngưỡng điểm khung 4H → -1 | 121.88 | 53.1% | 0.852 | 7.13 | 17.09 | 0.672 | 1.057 | -12.16 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: EMA 50 → 0.75 | 111.26 | 45.1% | 0.576 | 10.36 | 10.74 | 0.558 | 0.595 | -10.56 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: EMA 200 → 1 | 119.3 | 51.7% | 0.79 | 7.78 | 15.33 | 0.632 | 0.988 | -7.18 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Cộng thêm ngưỡng điểm khung 4H → -1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Số TP tối đa → 1 | 130 | 50.6% | 0.844 | 7.78 | 16.71 | 0.815 | 0.878 | -12.74 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + R:R tối thiểu riêng khung 1W → 2 + % chốt ở TP1 → 0.307 | 108.8 | 50.7% | 0.766 | 7.74 | 14.06 | 0.605 | 0.927 | -13.2 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 118.61 | 50.7% | 0.78 | 7.87 | 15.07 | 0.741 | 0.825 | -11.45 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + R:R tối thiểu riêng khung 4H → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Lệnh chờ hết hạn sau (nến) → 6 | 105.68 | 38.3% | 0.306 | 14.18 | 7.45 | 0.249 | 0.355 | -8.27 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + SL tối đa (% Entry) → 0.425 | 67.02 | 44.6% | 0.516 | 10.83 | 6.19 | 0.384 | 0.673 | -11.19 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + R:R tối thiểu riêng khung 1D → 2 | 104.86 | 47% | 0.624 | 8.91 | 11.77 | 0.612 | 0.635 | -11.08 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu tới TP1 → 2.63 | 28.14 | 57.1% | 0.201 | 5.98 | 4.71 | 0.2 | 0.202 | -7.38 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.29 | 57.7% | 0.201 | 5.62 | 5.57 | 0.218 | 0.185 | -8.18 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + R:R tối thiểu riêng khung 1D → 2 | 111.1 | 46% | 0.588 | 8.81 | 12.61 | 0.549 | 0.622 | -9.97 |  |

### Vòng 1133 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.07R, lời÷rủi ro 17.24

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trọng số phần Elliott (/100) → 10 | 119.22 | 51.4% | 0.828 | 7.36 | 16.2 | 0.7 | 0.963 | -12.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Đệm SL riêng khung 4H (ATR) → 0.3 | 160.82 | 38.4% | 0.547 | 18.01 | 8.93 | 0.403 | 0.697 | -8.22 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 132.99 | 44.4% | 0.573 | 11.45 | 11.61 | 0.612 | 0.536 | -16.66 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Elliott (/100) → 10 + Ngưỡng điểm vào kèo → 74 | 130.95 | 40.1% | 0.49 | 13.87 | 9.44 | 0.49 | 0.491 | -7.94 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Đệm SL riêng khung 1W (ATR) → 0.3 | 106.83 | 46.9% | 0.737 | 8.88 | 12.03 | 0.519 | 0.952 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần Trend (/100) → 19 | 112.54 | 50% | 0.76 | 8.11 | 13.88 | 0.587 | 0.953 | -12.11 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 118.02 | 40.6% | 0.371 | 13.04 | 9.05 | 0.337 | 0.401 | -5.59 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: POC anchored → 4 | 110.74 | 46.8% | 0.71 | 9.21 | 12.02 | 0.511 | 0.925 | -5.29 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: EMA 200 → 3 | 112.16 | 51.1% | 0.795 | 7.28 | 15.41 | 0.579 | 1.028 | -13.15 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: EMA 200 → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 | 104.24 | 49.4% | 0.677 | 8.72 | 11.95 | 0.415 | 0.968 | -7.32 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Momentum (/100) → 21 + Cộng thêm ngưỡng điểm khung 1D → 5 | 98.84 | 49.6% | 0.791 | 8.1 | 12.2 | 0.544 | 1.058 | -14.15 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + % chốt ở TP1 → 0.307 | 89.92 | 50.4% | 0.769 | 7.63 | 11.79 | 0.572 | 1.006 | -18.62 |  |

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
