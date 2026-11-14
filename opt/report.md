# Tối ưu tự động (chạy liên tục) — vòng 242

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 2574 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.2% | 106.08R | 0.651 | 5.74R | 9.57R | 11.08 | 33 | 12.1% | -15.05R | -0.456 | 15.05R |
| **Tốt nhất** | 147 | 53.1% | 131.08R | 0.892 | 6.15R | 7.48R | 17.52 | 29 | 17.2% | -10.68R | -0.368 | 10.68R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 29 | 51.7% | 30.98R | 5 | 0% | -3.77R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 108 | 53.7% | 92.37R | 22 | 22.7% | -4.87R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.2% | 106.08R | 9.57R | 11.08 | 33 | 12.1% | -15.05R |
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
| SL tối đa (% Entry) | 0.35 | **0.387** |
| Lệnh chờ hết hạn sau (nến) | 8 | **7** |
| Điểm tối thiểu vùng đặt lệnh chờ | 3 | **2** |
| Số TP tối đa | 2 | **3** |
| Điểm ADX > 25 và +DI trội (Momentum) | 3 | **4** |
| Điểm ADX < 13 cạn lực giảm (Momentum) | 1.5 | **2.5** |
| Lọc BTC: giá trên EMA bao nhiêu ngày | 200 | **150** |
| Trọng số phần Trend (/100) | 30 | **15** |
| Trọng số phần Momentum (/100) | 15 | **23** |
| Trọng số phần R:R (/100) | 20 | **30** |
| Trọng số phần SL (/100) | 5 | **8** |
| Điểm vùng: EMA 50 | 0.75 | **0.94** |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) | 2.5 | **3.44** |
| Điểm vùng: HVN cố định | 0.25 | **0.5** |

## Các thay đổi đã nhận (mới nhất trước)

| Vòng | Thông số | Từ → Thành | Tổng R | Tỷ lệ thắng | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro |
|---|---|---|---|---|---|---|
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
| 22 | Lọc BTC trên EMA200 (crypto) | true → false | 83.22R | 40.4% | 14.66R | 5.68 |
| 21 | Điểm tối thiểu của vùng đặt SL | 2 → 3 | 54.36R | 37.7% | 19.55R | 2.78 |
| 21 | Số nến mỗi bên để xác định đỉnh/đáy Dow | 5 → 4 | 73.82R | 39.5% | 15.56R | 4.74 |
| 19 (hoàn tác) | Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) | 6 → 5 | 104.08R | 43.9% | 13.85R | 7.51 |

## 10 vòng gần nhất

### Vòng 242 — ngẫu nhiên nhiều thông số · mốc: tổng 131.08R, win 53.1%, rủi ro tụt vốn 7.48R, lời÷rủi ro 17.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 109.4 | 37.7% | 0.362 | 19.95 | 5.48 | 0.436 | 0.296 | -28.01 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.813 + Cổng Dow → CHẶT | 89.71 | 51.8% | 0.801 | 7.44 | 12.06 | 0.342 | 1.171 | -12.8 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 129.98 | 49.7% | 0.839 | 8.12 | 16.01 | 0.729 | 0.965 | -14.33 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm vùng: Mức MACD → 1.13 + Cộng điểm phân kỳ dương ẩn → 3.5 | 128.51 | 51.4% | 0.868 | 7.71 | 16.67 | 0.704 | 1.062 | -10.68 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 128.45 | 50.7% | 0.856 | 8.06 | 15.94 | 0.645 | 1.091 | -9.21 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 35.48 | 39.8% | 0.403 | 10.87 | 3.26 | 0.297 | 0.537 | -6.21 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Trọng số phần R:R (/100) → 33 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib sóng 4 → 1.56 | 128.77 | 42.2% | 0.411 | 11.56 | 11.14 | 0.382 | 0.435 | -9.68 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 57.7 | 32.1% | 0.314 | 22.07 | 2.61 | 0.137 | 0.483 | 4.84 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: POC anchored → 2 | 95.12 | 48.4% | 0.743 | 8.79 | 10.82 | 0.601 | 0.885 | -11.89 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 128.32 | 52.8% | 0.904 | 7.41 | 17.32 | 0.724 | 1.111 | -10.72 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Ngưỡng điểm vào kèo → 74 + Trọng số phần Momentum (/100) → 25 + Coin phải mạnh hơn BTC trong N ngày → 14 | 100 | 50% | 0.82 | 8.08 | 12.38 | 0.684 | 0.98 | -17.15 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: HVN anchored → 0.188 + Điểm tối thiểu của vùng đặt SL → 2 | 122.86 | 52% | 0.83 | 8.01 | 15.34 | 0.705 | 0.966 | -10.68 |  |

### Vòng 241 — ghép cặp thay đổi suýt đạt · mốc: tổng 131.08R, win 53.1%, rủi ro tụt vốn 7.42R, lời÷rủi ro 17.67

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: MACD cắt lên Signal → 0.563 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 131.08 | 53.1% | 0.892 | 7.42 | 17.67 | 0.737 | 1.071 | -10.68 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 0.875 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 | 138.45 | 51.7% | 0.805 | 7.64 | 18.12 | 0.63 | 1.001 | -10.89 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 138.45 | 51.7% | 0.805 | 7.64 | 18.12 | 0.63 | 1.001 | -10.89 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 138.45 | 51.7% | 0.805 | 7.64 | 18.12 | 0.63 | 1.001 | -10.89 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 131.08 | 53.1% | 0.892 | 7.42 | 17.67 | 0.737 | 1.071 | -10.68 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 131.08 | 53.1% | 0.892 | 7.42 | 17.67 | 0.737 | 1.071 | -10.68 |  |

### Vòng 240 — ngẫu nhiên nhiều thông số · mốc: tổng 131.08R, win 53.1%, rủi ro tụt vốn 7.43R, lời÷rủi ro 17.64

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: POC volume profile cố định → 0.688 + Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm tối thiểu của vùng đặt SL → 2 | 124.94 | 52.3% | 0.827 | 7.97 | 15.68 | 0.737 | 0.926 | -10.68 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + SL tối đa (% Entry) → 0.425 + Điểm vùng: POC anchored → 4 + % chốt ở TP1 → 0.287 | 126.65 | 52.6% | 0.833 | 7.75 | 16.34 | 0.652 | 1.024 | -5.48 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 101.02 | 50.3% | 0.706 | 8.31 | 12.16 | 0.603 | 0.827 | -13.74 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 21 → 1.13 + Số TP tối đa → 2 | 69.04 | 45.8% | 0.645 | 8.86 | 7.79 | 0.423 | 0.909 | -7.85 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Cổng Dow → TẮT | 115.28 | 42.7% | 0.546 | 11.97 | 9.63 | 0.53 | 0.562 | -15.75 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 105.13 | 46.4% | 0.626 | 11.07 | 9.5 | 0.598 | 0.652 | -11.2 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 94.2 | 38.3% | 0.368 | 16.28 | 5.79 | 0.323 | 0.411 | -10.7 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 128.53 | 52.1% | 0.88 | 7.67 | 16.76 | 0.733 | 1.049 | -12.08 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + R:R tối thiểu riêng khung 1D → 2 | 106.57 | 45.1% | 0.609 | 9.72 | 10.96 | 0.543 | 0.673 | -8.95 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu riêng khung 4H → 2 | 87.67 | 39.2% | 0.299 | 14.88 | 5.89 | 0.32 | 0.278 | -11.8 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Entry (/100) → 28 + Cộng thêm ngưỡng điểm khung 1D → 7 | 182.97 | 39.4% | 0.606 | 17.82 | 10.27 | 0.502 | 0.713 | -14.43 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Entry (/100) → 33 | 35.48 | 39.8% | 0.403 | 10.87 | 3.26 | 0.297 | 0.537 | -6.21 |  |

### Vòng 239 — ngẫu nhiên nhiều thông số · mốc: tổng 131.08R, win 53.1%, rủi ro tụt vốn 7.43R, lời÷rủi ro 17.64

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 | 112.6 | 46.6% | 0.691 | 10.3 | 10.93 | 0.633 | 0.745 | -7.38 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: BOS → 1 + Điểm vùng: POC anchored → 4 + Xác nhận khung nhỏ (A2) → W | 105.67 | 38.6% | 0.396 | 16.19 | 6.53 | 0.307 | 0.476 | -6.25 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: Fib sóng 4 → 1.56 + Cộng điểm phân kỳ dương ẩn → 2.63 | 111.77 | 50.7% | 0.81 | 8 | 13.97 | 0.7 | 0.944 | -9.29 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Trọng số phần SL (/100) → 7 | 130.33 | 52.7% | 0.881 | 7.43 | 17.54 | 0.737 | 1.044 | -9.37 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 50 → 0.75 | 89.53 | 39.9% | 0.361 | 16.16 | 5.54 | 0.299 | 0.417 | -8.35 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: EMA 21 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Đệm SL riêng khung 1D (ATR) → 0.3 | 97.4 | 45.4% | 0.598 | 11.28 | 8.63 | 0.63 | 0.568 | -6.83 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + R:R tối thiểu riêng khung 1W → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Cổng Dow → CHẶT | 65.8 | 45.9% | 0.539 | 9.09 | 7.24 | 0.285 | 0.786 | -9.91 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Cộng thêm ngưỡng điểm khung 1D → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 129.4 | 51.4% | 0.874 | 7.73 | 16.74 | 0.656 | 1.118 | -10.54 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu tới TP1 → 2.63 | 85.26 | 48.5% | 0.879 | 8.16 | 10.45 | 0.675 | 1.106 | -15.33 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 21 → 1.13 | 95.65 | 50% | 0.797 | 7.67 | 12.47 | 0.688 | 0.926 | -17.49 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Divergence (/100) → 12 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 80.67 | 43.8% | 0.498 | 11.71 | 6.89 | 0.281 | 0.709 | -13.05 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 35.48 | 39.8% | 0.403 | 10.83 | 3.28 | 0.297 | 0.537 | -6.21 |  |

### Vòng 238 — ngẫu nhiên nhiều thông số · mốc: tổng 131.08R, win 53.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 17.57

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: EMA 21 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 94.45 | 44.3% | 0.598 | 10.52 | 8.98 | 0.407 | 0.851 | -8.96 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: BOS → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 84.23 | 49.1% | 0.766 | 8.13 | 10.36 | 0.657 | 0.896 | -15.76 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: EMA 200 → 3 + Cổng Dow → CHẶT | 68.26 | 46.5% | 0.537 | 9.42 | 7.25 | 0.489 | 0.57 | -9.8 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Divergence (/100) → 9 | 129.31 | 52.4% | 0.88 | 7.67 | 16.86 | 0.715 | 1.071 | -10.68 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Cổng Dow → CHẶT | 100.03 | 54% | 0.885 | 6.49 | 15.41 | 0.582 | 1.144 | -11.74 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 94.74 | 40.7% | 0.439 | 13 | 7.29 | 0.498 | 0.365 | -11.76 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 130.58 | 52.1% | 0.907 | 7.39 | 17.67 | 0.772 | 1.062 | -13.94 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: POC anchored → 4 + Xác nhận khung nhỏ (A2) → W | 132.26 | 41.4% | 0.453 | 14.97 | 8.84 | 0.56 | 0.335 | -16.48 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: EMA 21 → 0.875 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 131.38 | 52.1% | 0.9 | 7.6 | 17.29 | 0.812 | 0.998 | -10.68 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1W (ATR) → 0.3 | 78.81 | 37.8% | 0.363 | 16.5 | 4.78 | 0.297 | 0.419 | -8.4 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 | 126.58 | 52.4% | 0.861 | 7.73 | 16.38 | 0.683 | 1.062 | -12.08 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 130.5 | 53% | 0.876 | 7.46 | 17.49 | 0.728 | 1.052 | -10.68 |  |

### Vòng 237 — ngẫu nhiên nhiều thông số · mốc: tổng 131.08R, win 53.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 17.57

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + R:R tối thiểu riêng khung 1W → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 | 80.95 | 48.4% | 0.653 | 9.06 | 8.93 | 0.519 | 0.805 | -18.44 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: EMA 50 → 1.13 | 122.47 | 50.3% | 0.833 | 8.03 | 15.25 | 0.673 | 1.03 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: EMA 200 → 3 + Trần điểm khi chart yếu (Trend < x) → -0.225 + R:R tối thiểu tới TP1 → 2.63 | 104.03 | 50.4% | 0.86 | 7.51 | 13.85 | 0.624 | 1.116 | -10.61 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: HVN anchored → 0.188 | 88.77 | 39.9% | 0.381 | 15.58 | 5.7 | 0.315 | 0.434 | -5.83 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: EMA 200 → 3 | 80.81 | 44.6% | 0.481 | 10.85 | 7.45 | 0.305 | 0.653 | -11.92 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Cộng điểm phân kỳ dương ẩn → 3.5 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 113.82 | 48.2% | 0.686 | 9.13 | 12.47 | 0.595 | 0.781 | -11.79 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Mức RSI 30/70 → 0.875 | 133.13 | 51.9% | 0.832 | 8.46 | 15.74 | 0.673 | 1.026 | -10.68 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: EMA 21 → 1.13 | 125.67 | 52.3% | 0.843 | 7.65 | 16.43 | 0.737 | 0.964 | -11.03 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC anchored → 2 + R:R tối thiểu tới TP1 → 2.63 | 205.99 | 40.7% | 0.723 | 16.37 | 12.58 | 0.515 | 0.953 | -10.49 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + % chốt ở TP1 → 0.307 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 27.86 | 37.2% | 0.324 | 12.57 | 2.22 | 0.211 | 0.496 | -3.55 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần SL (/100) → 9 + Điểm vùng: Break mây Ichimoku → 3 | 112.35 | 49.1% | 0.698 | 8.93 | 12.58 | 0.553 | 0.873 | -10.43 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu tới TP1 → 2.38 | 67.2 | 38.2% | 0.361 | 13.48 | 4.99 | 0.374 | 0.348 | -13.59 |  |

### Vòng 236 — ngẫu nhiên nhiều thông số · mốc: tổng 131.08R, win 53.1%, rủi ro tụt vốn 7.47R, lời÷rủi ro 17.55

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Trọng số phần SL (/100) → 9 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 120.7 | 50.7% | 0.827 | 7.84 | 15.4 | 0.714 | 0.96 | -10.68 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 1D → 4 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: BOS → 3 | 88.64 | 38.1% | 0.334 | 16.86 | 5.26 | 0.323 | 0.346 | -4.67 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Cộng thêm ngưỡng điểm khung 1D → 4 + Cộng thêm ngưỡng điểm khung 4H → 2 | 115.65 | 47.4% | 0.844 | 8.54 | 13.54 | 0.731 | 0.976 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần Entry (/100) → 28 | 129.14 | 52.4% | 0.878 | 7.44 | 17.36 | 0.713 | 1.071 | -10.68 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: BOS → 1 | 126.64 | 50.9% | 0.796 | 8.22 | 15.41 | 0.65 | 0.973 | -12.27 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Coin phải mạnh hơn BTC trong N ngày → 14 | 97.39 | 49.2% | 0.773 | 8.54 | 11.4 | 0.722 | 0.833 | -17.15 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần SL (/100) → 7 | 71.83 | 47.4% | 0.532 | 9.97 | 7.2 | 0.406 | 0.672 | -5.84 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Lệnh chờ hết hạn sau (nến) → 8 + Cộng thêm ngưỡng điểm khung 1D → 4 | 123.66 | 50.9% | 0.778 | 8.21 | 15.06 | 0.624 | 0.959 | -12.27 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: EMA 21 → 1.13 + Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 123.73 | 48.7% | 0.793 | 8.21 | 15.07 | 0.713 | 0.884 | -13.31 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 103.8 | 45.3% | 0.645 | 10.88 | 9.54 | 0.544 | 0.744 | -6.36 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: BOS → 1 | 131.08 | 53.1% | 0.892 | 7.47 | 17.55 | 0.737 | 1.071 | -10.68 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: POC volume profile cố định → 0.813 | 118.32 | 45.1% | 0.721 | 9.62 | 12.3 | 0.735 | 0.708 | -2.97 |  |

### Vòng 235 — ngẫu nhiên nhiều thông số · mốc: tổng 131.08R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 17.71

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Khung lớn phải tăng (trend ≥) → 0.425 | 66.61 | 43.8% | 0.435 | 11.2 | 5.95 | 0.23 | 0.628 | -13.4 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Trọng số phần Divergence (/100) → 12 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: BOS → 3 | 108.04 | 45.7% | 0.617 | 9.68 | 11.16 | 0.543 | 0.689 | -8.95 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Cổng Dow → CHẶT + Điểm vùng: Mức MACD → 0.875 | 87.82 | 51.9% | 0.813 | 7.05 | 12.46 | 0.519 | 1.058 | -11.74 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 131.08 | 53.1% | 0.892 | 7.4 | 17.71 | 0.737 | 1.071 | -10.68 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Mức MACD → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 122.14 | 51.4% | 0.837 | 7.96 | 15.34 | 0.705 | 0.983 | -9.37 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + SL tối đa (% Entry) → 0.35 | 130.25 | 52.7% | 0.88 | 7.48 | 17.41 | 0.718 | 1.071 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Trọng số phần Divergence (/100) → 12 | 122.69 | 51.4% | 0.84 | 8.15 | 15.05 | 0.693 | 1.009 | -10.68 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 130.88 | 52.7% | 0.884 | 7.46 | 17.54 | 0.726 | 1.071 | -10.68 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cổng Dow → TẮT | 132.47 | 44.9% | 0.64 | 10.73 | 12.35 | 0.564 | 0.705 | -19.4 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng thêm ngưỡng điểm khung 4H → 2 | 104.56 | 51% | 0.721 | 8.27 | 12.64 | 0.617 | 0.835 | -9.87 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: BOS → 1 + Cộng thêm ngưỡng điểm khung 1D → 7 | 126.64 | 50.9% | 0.796 | 8.21 | 15.43 | 0.65 | 0.973 | -12.27 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Fib sóng 4 → 0.938 | 121.09 | 51.4% | 0.853 | 7.81 | 15.5 | 0.709 | 1.009 | -10.68 |  |

### Vòng 234 — ngẫu nhiên nhiều thông số · mốc: tổng 141.11R, win 54.1%, rủi ro tụt vốn 6.46R, lời÷rủi ro 21.84

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 140.06 | 42.5% | 0.447 | 11.51 | 12.17 | 0.484 | 0.413 | -13.92 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + SL tối đa (% Entry) → 0.35 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 54.96 | 39.3% | 0.379 | 14.73 | 3.73 | 0.489 | 0.265 | -13.87 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Entry (/100) → 33 + Trọng số phần Trend (/100) → 12 | 20.63 | 35.9% | 0.264 | 12.4 | 1.66 | 0.179 | 0.375 | -3.04 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Fib sóng 4 → 0.938 | 136.19 | 53.8% | 1.048 | 6.53 | 20.86 | 0.927 | 1.176 | -7.38 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Số TP tối đa → 2 + Điểm tối thiểu của vùng đặt SL → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 131.88 | 52.1% | 0.916 | 7.98 | 16.53 | 0.777 | 1.063 | -7.64 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 149.32 | 56.1% | 1.009 | 6.47 | 23.08 | 0.986 | 1.036 | -7.28 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: EMA 21 → 1.13 + Trọng số phần Divergence (/100) → 12 | 103.77 | 52.5% | 0.736 | 6.93 | 14.97 | 0.558 | 0.97 | -11.12 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Đệm SL riêng khung 1D (ATR) → 0.3 | 86.11 | 43.9% | 0.7 | 10.22 | 8.43 | 0.534 | 0.822 | 0.52 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Mức MACD → 0.875 + Ngưỡng điểm vào kèo → 74 | 138.09 | 54.9% | 1.038 | 6.7 | 20.61 | 0.976 | 1.106 | -7.4 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + SL tối đa (% Entry) → 0.35 + Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần SL (/100) → 7 | 109.73 | 51.9% | 0.825 | 7.75 | 14.16 | 0.566 | 1.105 | -8.23 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 95.31 | 46.4% | 0.681 | 9.36 | 10.18 | 0.526 | 0.811 | 4.23 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trọng số phần SL (/100) → 9 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 92.85 | 44.6% | 0.591 | 10.13 | 9.17 | 0.639 | 0.551 | -12.09 |  |

### Vòng 233 — ngẫu nhiên nhiều thông số · mốc: tổng 131.08R, win 53.1%, rủi ro tụt vốn 7.42R, lời÷rủi ro 17.67

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cộng thêm ngưỡng điểm khung 1W → -1 | 128.19 | 52% | 0.866 | 7.67 | 16.71 | 0.694 | 1.069 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 15.62 | 48.4% | 0.041 | 15.82 | 0.99 | 0.142 | -0.054 | -4.46 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Trend (/100) → 19 | 182.35 | 39.3% | 0.602 | 18.04 | 10.11 | 0.502 | 0.704 | -14.38 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: EMA 200 → 3 | 55.99 | 40.2% | 0.479 | 12.32 | 4.54 | 0.232 | 0.69 | -6.78 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 127.81 | 52.4% | 0.869 | 7.61 | 16.8 | 0.709 | 1.051 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 123.87 | 51.4% | 0.837 | 7.83 | 15.82 | 0.706 | 0.996 | -12.94 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần SL (/100) → 9 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 127.35 | 50.7% | 0.86 | 7.82 | 16.29 | 0.774 | 0.949 | -11.02 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Biên mây Ichimoku → 1.35 + R:R tối thiểu tới TP1 → 2.38 | 110.02 | 46.2% | 0.651 | 9.42 | 11.68 | 0.575 | 0.732 | -11.48 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Momentum (/100) → 21 | 130.87 | 52.7% | 0.884 | 7.35 | 17.81 | 0.726 | 1.071 | -12.08 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 125.17 | 53.1% | 0.863 | 7.31 | 17.12 | 0.702 | 1.051 | -10.72 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 + R:R tối thiểu tới TP1 → 2.63 | 199.09 | 40.8% | 0.701 | 16.77 | 11.87 | 0.616 | 0.792 | -10.44 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: EMA 200 → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib sóng 4 → 1.56 | 120.33 | 50.7% | 0.824 | 7.99 | 15.06 | 0.629 | 1.042 | -10.65 |  |
