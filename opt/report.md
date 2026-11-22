# Tối ưu tự động (chạy liên tục) — vòng 1163

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 13588 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 98.78R | 0.595 | 5.7R | 9.71R | 10.17 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 143 | 53.1% | 121.88R | 0.852 | 5.15R | 7.09R | 17.19 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

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
| Bot thật | 166 | 47% | 98.78R | 9.71R | 10.17 | 30 | 13.3% | -11.98R |
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

### Vòng 1163 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.09R, lời÷rủi ro 17.19

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Đệm SL riêng khung 1W (ATR) → 0.3 | 106.83 | 46.9% | 0.737 | 8.98 | 11.9 | 0.519 | 0.952 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Lệnh chờ hết hạn sau (nến) → 6 | 92.35 | 48.2% | 0.664 | 8.68 | 10.64 | 0.481 | 0.867 | -10.06 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Cộng thêm ngưỡng điểm khung 1D → 5 + SL tối đa (% Entry) → 0.425 | 120.87 | 52.8% | 0.839 | 7.26 | 16.65 | 0.672 | 1.027 | -12.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: BOS → 2 | 116.98 | 52.4% | 0.818 | 7.26 | 16.11 | 0.672 | 0.984 | -12.16 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần SL (/100) → 7 + Cộng điểm phân kỳ dương ẩn → 3 | 69.55 | 43.8% | 0.621 | 9.47 | 7.34 | 0.414 | 0.86 | -5.39 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 111.93 | 50.3% | 0.772 | 7.85 | 14.26 | 0.577 | 0.993 | -12.19 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cổng Dow → TẮT + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Vùng RSI 45–55 → 0.875 | 16.1 | 31.4% | 0.067 | 34.93 | 0.46 | 0.229 | -0.095 | -24.18 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Trend (/100) → 19 | 118.01 | 51.8% | 0.837 | 7.03 | 16.79 | 0.647 | 1.047 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: POC volume profile cố định → 0.688 | 87.01 | 49.6% | 0.757 | 7.61 | 11.43 | 0.543 | 1.006 | -18.62 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Trọng số phần R:R (/100) → 33 | 114.07 | 50.3% | 0.746 | 7.91 | 14.42 | 0.652 | 0.848 | -11.14 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 21.12 | 41.8% | 0.384 | 8.39 | 2.52 | 0.215 | 0.535 | -2.78 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Cộng thêm ngưỡng điểm khung 1D → 5 | 121.88 | 53.1% | 0.852 | 7.09 | 17.19 | 0.672 | 1.057 | -12.16 |  |

### Vòng 1162 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 120.98 | 52.4% | 0.834 | 7.26 | 16.66 | 0.694 | 0.985 | -12.16 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Lệnh chờ hết hạn sau (nến) → 6 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Trend (/100) → 19 | 95.29 | 46.3% | 0.701 | 8.82 | 10.8 | 0.511 | 0.896 | -13.65 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm tối thiểu của vùng đặt SL → 2 | 115.05 | 51.7% | 0.762 | 8.02 | 14.35 | 0.631 | 0.926 | -6.14 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Fib sóng 4 → 0.938 + Đệm SL riêng khung 4H (ATR) → 0.3 | 135.38 | 38.4% | 0.515 | 17.67 | 7.66 | 0.221 | 0.806 | -8.99 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Trọng số phần R:R (/100) → 33 | 119.44 | 51.4% | 0.818 | 7.26 | 16.45 | 0.629 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 130 | 50.6% | 0.844 | 7.83 | 16.6 | 0.815 | 0.878 | -12.74 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + R:R tối thiểu riêng khung 1W → 2 | 122.12 | 40.9% | 0.485 | 14.02 | 8.71 | 0.484 | 0.485 | -7.72 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Trọng số phần Elliott (/100) → 6 | 108.74 | 48.3% | 0.75 | 8.53 | 12.75 | 0.518 | 0.972 | -10.75 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Cộng điểm phân kỳ dương ẩn → 2.25 | 109.77 | 50% | 0.762 | 7.94 | 13.82 | 0.59 | 0.966 | -12.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 111.93 | 46.8% | 0.647 | 8.87 | 12.62 | 0.6 | 0.691 | -8.93 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cộng thêm ngưỡng điểm khung 4H → -1 | 114.24 | 41.9% | 0.452 | 11.83 | 9.66 | 0.605 | 0.299 | -15.43 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức MACD → 1.13 | 127.65 | 41% | 0.405 | 11.79 | 10.83 | 0.38 | 0.427 | -7.45 |  |

### Vòng 1161 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.09R, lời÷rủi ro 17.19

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1W → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 100.7 | 41.1% | 0.345 | 12.31 | 8.18 | 0.32 | 0.366 | -7.46 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Đệm SL riêng khung 1D (ATR) → 0.3 | 112.43 | 46.1% | 0.681 | 10.25 | 10.97 | 0.652 | 0.707 | -10.49 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 | 37.08 | 40.2% | 0.426 | 10.04 | 3.69 | 0.335 | 0.538 | -5.18 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Mức RSI 30/70 → 0.875 | 119.29 | 49.7% | 0.76 | 8.48 | 14.07 | 0.586 | 0.964 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 124.14 | 44.5% | 0.547 | 10.97 | 11.32 | 0.577 | 0.518 | -15.8 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu tới TP1 → 2.63 | 66.34 | 44.9% | 0.677 | 8.9 | 7.45 | 0.448 | 0.906 | -16.54 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: EMA 200 → 3 + Điểm vùng: Break mây Ichimoku → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 77.91 | 44.3% | 0.443 | 11.59 | 6.72 | 0.427 | 0.459 | -13.01 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm tối thiểu của vùng đặt SL → 2 | 107.96 | 51.1% | 0.766 | 7.62 | 14.17 | 0.579 | 0.966 | -12.13 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 4H (ATR) → 0.3 | 104.73 | 37.1% | 0.366 | 19.76 | 5.3 | 0.456 | 0.286 | -29.74 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN cố định → 0.563 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 105.64 | 51.7% | 0.729 | 7.76 | 13.61 | 0.673 | 0.791 | -11.75 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Trọng số phần SL (/100) → 9 + Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → 2 | 151.98 | 38% | 0.512 | 19.17 | 7.93 | 0.43 | 0.593 | -9.22 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cổng Dow → CHẶT | 87.14 | 52.2% | 0.771 | 6.91 | 12.61 | 0.371 | 1.125 | -14.25 |  |

### Vòng 1160 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.09

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Trend (/100) → 19 + Trọng số phần Divergence (/100) → 9 + Khung lớn phải tăng (trend ≥) → 0.375 | 108.93 | 48.4% | 0.685 | 8.47 | 12.86 | 0.561 | 0.814 | -11.03 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 121.4 | 41% | 0.392 | 12.54 | 9.68 | 0.359 | 0.419 | -5.65 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Cộng thêm ngưỡng điểm khung 4H → 2 | 116.98 | 52.4% | 0.818 | 7.36 | 15.89 | 0.672 | 0.984 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 119.51 | 51.7% | 0.824 | 7.48 | 15.98 | 0.694 | 0.964 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 102.51 | 49.3% | 0.693 | 8.45 | 12.13 | 0.516 | 0.879 | -11.46 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 89.88 | 50.4% | 0.768 | 7.61 | 11.81 | 0.571 | 1.006 | -18.62 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 117.43 | 52.1% | 0.827 | 7.21 | 16.29 | 0.659 | 1.005 | -10.87 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: POC anchored → 2 + Cộng điểm phân kỳ dương ẩn → 3 | 98.28 | 47.3% | 0.673 | 8.63 | 11.39 | 0.506 | 0.84 | -10.85 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 108.6 | 49.3% | 0.744 | 8.26 | 13.15 | 0.58 | 0.937 | -12.16 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm tối thiểu của vùng đặt SL → 2 | 116.78 | 52.4% | 0.805 | 7.5 | 15.57 | 0.694 | 0.925 | -11.13 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: HVN cố định → 0.438 | 102.82 | 49.3% | 0.695 | 8.45 | 12.17 | 0.52 | 0.879 | -11.46 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Fib sóng 4 → 1.56 + R:R tối thiểu riêng khung 4H → 2 | 120.94 | 40.1% | 0.362 | 13.1 | 9.23 | 0.393 | 0.337 | -9.23 |  |

### Vòng 1159 — ngẫu nhiên nhiều thông số · mốc: tổng 120.26R, win 52.8%, rủi ro tụt vốn 7.28R, lời÷rủi ro 16.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + SL tối đa (% Entry) → 0.425 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 116.32 | 47.7% | 0.75 | 8.45 | 13.77 | 0.608 | 0.906 | -12.55 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Cổng Dow → CHẶT | 85.06 | 51.3% | 0.753 | 7.02 | 12.12 | 0.371 | 1.09 | -14.25 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 99.33 | 48.2% | 0.725 | 8.2 | 12.11 | 0.482 | 0.986 | -13.71 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Đệm SL riêng khung 1W (ATR) → 0.3 | 103.74 | 45.8% | 0.72 | 9.09 | 11.41 | 0.519 | 0.922 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Cộng điểm phân kỳ dương ẩn → 2.25 | 116.79 | 52.5% | 0.828 | 7.4 | 15.78 | 0.636 | 1.04 | -12.16 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: BOS → 2 | 127.81 | 50.3% | 0.835 | 7.75 | 16.49 | 0.815 | 0.86 | -12.74 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: BOS → 2 + Điểm vùng: EMA 200 → 1 | 115.14 | 51% | 0.773 | 7.65 | 15.05 | 0.682 | 0.884 | -6.56 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Momentum (/100) → 21 + Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1D → 3 | 106.45 | 44.5% | 0.687 | 9.87 | 10.79 | 0.598 | 0.779 | -14.59 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 114.57 | 51.8% | 0.813 | 7.55 | 15.17 | 0.644 | 0.989 | -10.87 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần R:R (/100) → 33 | 103.56 | 51% | 0.714 | 8.02 | 12.91 | 0.673 | 0.76 | -11.75 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Mức MACD → 1.13 + Cổng Dow → CHẶT | 69.16 | 44.1% | 0.586 | 9.09 | 7.61 | 0.286 | 0.876 | -10.22 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 111.8 | 49.4% | 0.708 | 8.72 | 12.82 | 0.58 | 0.853 | -11.03 |  |

### Vòng 1158 — ngẫu nhiên nhiều thông số · mốc: tổng 120.26R, win 52.8%, rủi ro tụt vốn 7.28R, lời÷rủi ro 16.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 1W → 2 | 57.15 | 44% | 0.524 | 9.56 | 5.98 | 0.535 | 0.512 | -10.9 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm vùng: Fib sóng 4 → 1.56 | 118.12 | 52.1% | 0.82 | 7.39 | 15.98 | 0.627 | 1.049 | -12.16 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Ngưỡng điểm vào kèo → 77 | 29.09 | 55.5% | 0.188 | 5.87 | 4.96 | 0.197 | 0.178 | -8.54 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Xác nhận khung nhỏ (A2) → W | 87.66 | 37.1% | 0.358 | 16.83 | 5.21 | 0.293 | 0.415 | -8.22 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Mức MACD → 0.875 | 109.88 | 52.1% | 0.785 | 7.42 | 14.81 | 0.66 | 0.921 | -11.55 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: POC volume profile cố định → 0.688 | 110.25 | 50.4% | 0.817 | 7.59 | 14.53 | 0.571 | 1.089 | -12.19 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: EMA 50 → 0.75 | 116.55 | 51.4% | 0.809 | 7.37 | 15.81 | 0.622 | 1.024 | -11.98 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Mức MACD → 0.875 | 114.88 | 52.5% | 0.815 | 7.34 | 15.65 | 0.66 | 0.981 | -11.28 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Biên mây Ichimoku → 1.05 | 121.33 | 44.9% | 0.539 | 11.07 | 10.96 | 0.566 | 0.513 | -15.3 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 115.9 | 50.3% | 0.811 | 7.66 | 15.13 | 0.633 | 1.017 | -11.14 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 107.7 | 46.1% | 0.645 | 8.76 | 12.29 | 0.586 | 0.7 | -8.93 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Divergence (/100) → 12 | 124.71 | 44.2% | 0.535 | 11.91 | 10.47 | 0.553 | 0.517 | -16.61 |  |

### Vòng 1157 — ngẫu nhiên nhiều thông số · mốc: tổng 120.26R, win 52.8%, rủi ro tụt vốn 7.28R, lời÷rủi ro 16.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Biên mây Ichimoku → 1.35 + Cộng thêm ngưỡng điểm khung 4H → 2 | 95.16 | 48.2% | 0.685 | 8.52 | 11.17 | 0.479 | 0.906 | -12.69 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Divergence (/100) → 12 | 120.26 | 52.8% | 0.847 | 7.28 | 16.52 | 0.672 | 1.049 | -12.16 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: MACD cắt lên Signal → 0.438 | 108.11 | 48.7% | 0.711 | 8.91 | 12.13 | 0.499 | 0.953 | -8.26 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cộng thêm ngưỡng điểm khung 4H → 2 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 | 82.6 | 37.1% | 0.356 | 16.39 | 5.04 | 0.288 | 0.413 | -6.86 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + R:R tối thiểu tới TP1 → 2.38 | 113.84 | 47.5% | 0.636 | 8.7 | 13.09 | 0.489 | 0.792 | -13.06 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 114.09 | 50.3% | 0.798 | 7.54 | 15.13 | 0.597 | 1.032 | -11.98 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Entry (/100) → 33 + Cộng thêm ngưỡng điểm khung 1D → 5 | 118.04 | 51.4% | 0.831 | 7.54 | 15.66 | 0.677 | 1.004 | -11.13 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần SL (/100) → 9 | 118.79 | 52.1% | 0.837 | 7.4 | 16.05 | 0.672 | 1.027 | -12.16 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Break mây Ichimoku → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 63 | 39.6% | 0.438 | 12.66 | 4.98 | 0.415 | 0.465 | -7.9 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: EMA 200 → 1 + Trọng số phần Trend (/100) → 19 + Trọng số phần Momentum (/100) → 25 | 103.01 | 48.1% | 0.66 | 9.56 | 10.78 | 0.49 | 0.864 | -5.77 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + R:R tối thiểu tới TP1 → 2.38 + Xác nhận khung nhỏ (A2) → W | 84.03 | 40.7% | 0.339 | 15.77 | 5.33 | 0.307 | 0.363 | -11.41 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Fib sóng 4 → 0.938 + Đệm SL riêng khung 4H (ATR) → 0.3 | 163.79 | 38.3% | 0.555 | 17.88 | 9.16 | 0.455 | 0.663 | -8.77 |  |

### Vòng 1156 — ngẫu nhiên nhiều thông số · mốc: tổng 120.26R, win 52.8%, rủi ro tụt vốn 7.25R, lời÷rủi ro 16.59

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Xác nhận khung nhỏ (A2) → W + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 91.02 | 37.8% | 0.327 | 17.38 | 5.24 | 0.512 | 0.132 | -8.53 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Cộng thêm ngưỡng điểm khung 1W → -1 | 120.26 | 52.8% | 0.847 | 7.25 | 16.59 | 0.672 | 1.049 | -12.16 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 98.33 | 48.1% | 0.639 | 8.91 | 11.04 | 0.651 | 0.627 | -9.44 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Divergence (/100) → 9 | 103.52 | 50% | 0.709 | 7.65 | 13.53 | 0.679 | 0.742 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Mức MACD → 0.875 | 90.95 | 48% | 0.739 | 8.69 | 10.47 | 0.497 | 0.985 | -12.86 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Trọng số phần SL (/100) → 9 + Điểm vùng: EMA 21 → 1.13 | 98.23 | 46.6% | 0.61 | 9.02 | 10.89 | 0.51 | 0.709 | -12.45 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Elliott (/100) → 6 | 158.37 | 38.1% | 0.539 | 17.72 | 8.94 | 0.406 | 0.677 | -6.85 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Mức MACD → 0.875 + Trọng số phần Entry (/100) → 28 | 115.65 | 53.2% | 0.82 | 7.11 | 16.27 | 0.655 | 1.003 | -10.87 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 69.16 | 45.5% | 0.524 | 9.94 | 6.96 | 0.413 | 0.657 | -11.79 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Mức MACD → 0.875 | 115.18 | 52.8% | 0.811 | 7.2 | 16 | 0.655 | 0.981 | -10.87 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 28.47 | 54.6% | 0.154 | 6.63 | 4.29 | 0.168 | 0.141 | -7.02 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Cộng thêm ngưỡng điểm khung 1D → 3 | 104.69 | 46.3% | 0.638 | 8.59 | 12.19 | 0.483 | 0.794 | -13.47 |  |

### Vòng 1155 — ngẫu nhiên nhiều thông số · mốc: tổng 120.26R, win 52.8%, rủi ro tụt vốn 7.28R, lời÷rủi ro 16.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 112.51 | 49.7% | 0.717 | 8.61 | 13.07 | 0.595 | 0.853 | -11.03 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Mức MACD → 0.875 + Đệm SL riêng khung 1W (ATR) → 0.3 | 66.06 | 43.2% | 0.528 | 11.05 | 5.98 | 0.42 | 0.639 | -11.12 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Elliott (/100) → 6 | 119.39 | 52.1% | 0.829 | 7.28 | 16.4 | 0.657 | 1.026 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Divergence (/100) → 12 | 114.61 | 52.1% | 0.796 | 7.59 | 15.1 | 0.654 | 0.959 | -9.82 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Divergence (/100) → 12 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 76.47 | 42.6% | 0.452 | 11.67 | 6.55 | 0.553 | 0.366 | -4.76 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: EMA 50 → 1.13 | 108.9 | 38.8% | 0.419 | 16.37 | 6.65 | 0.444 | 0.396 | -5.28 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 | 115.2 | 52.4% | 0.794 | 7.35 | 15.67 | 0.627 | 0.989 | -12.16 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Ngưỡng điểm vào kèo → 77 | 114.66 | 51.4% | 0.807 | 7.55 | 15.19 | 0.679 | 0.952 | -11.56 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Elliott (/100) → 6 | 123.88 | 41.3% | 0.4 | 12.17 | 10.18 | 0.358 | 0.435 | -6.67 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 159.12 | 38.4% | 0.545 | 18.01 | 8.84 | 0.409 | 0.688 | -9.98 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: EMA 200 → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 | 116.46 | 51% | 0.771 | 8.26 | 14.1 | 0.608 | 0.981 | -7.13 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 | 130.33 | 36.9% | 0.454 | 19.85 | 6.57 | 0.255 | 0.639 | -12.31 |  |

### Vòng 1154 — ngẫu nhiên nhiều thông số · mốc: tổng 118.1R, win 52.6%, rủi ro tụt vốn 7.18R, lời÷rủi ro 16.45

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → -1 | 92.98 | 46.4% | 0.674 | 9.55 | 9.74 | 0.571 | 0.777 | -12.6 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Break mây Ichimoku → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Đệm SL riêng khung 1W (ATR) → 0.3 | 103.8 | 46.4% | 0.678 | 9.57 | 10.85 | 0.549 | 0.817 | -16.36 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Cộng điểm phân kỳ dương ẩn → 2.25 | 118.1 | 52.6% | 0.862 | 7.18 | 16.45 | 0.664 | 1.088 | -9.86 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 126.7 | 51% | 0.886 | 7.51 | 16.87 | 0.88 | 0.893 | -10.44 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Số TP tối đa → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 88.52 | 48.9% | 0.676 | 8.51 | 10.4 | 0.508 | 0.857 | -11.73 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 111.38 | 36.4% | 0.414 | 19.46 | 5.72 | 0.279 | 0.542 | -7.92 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Cộng thêm ngưỡng điểm khung 1D → 3 + Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần SL (/100) → 9 | 111.43 | 48.3% | 0.748 | 8.59 | 12.97 | 0.544 | 0.972 | -10.25 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Biên mây Ichimoku → 1.05 | 108.26 | 49.3% | 0.731 | 8.43 | 12.84 | 0.6 | 0.874 | -11.08 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Break mây Ichimoku → 3 + R:R tối thiểu riêng khung 1W → 2 | 94.13 | 48.6% | 0.636 | 9.21 | 10.22 | 0.577 | 0.694 | -8.62 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Khung lớn phải tăng (trend ≥) → 0.375 | 84.43 | 49.1% | 0.768 | 7.78 | 10.85 | 0.552 | 1.017 | -16.33 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần Divergence (/100) → 12 + Điểm tối thiểu của vùng đặt SL → 4 | 117.49 | 51.4% | 0.827 | 7.78 | 15.1 | 0.595 | 1.074 | -9.75 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Trend (/100) → 12 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 68.27 | 43.5% | 0.594 | 10.15 | 6.73 | 0.4 | 0.829 | -5.33 |  |
