# Tối ưu tự động (chạy liên tục) — vòng 1434

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 16828 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 165 | 46.7% | 100.54R | 0.609 | 6.7R | 9.63R | 10.44 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 142 | 52.1% | 118.12R | 0.832 | 5.15R | 7.62R | 15.50 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 26 | 50% | 20.05R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 105 | 53.3% | 91.1R | 19 | 21.1% | -4.19R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 165 | 46.7% | 100.54R | 9.63R | 10.44 | 30 | 13.3% | -11.98R |
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

### Vòng 1434 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.62R, lời÷rủi ro 15.50

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.563 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 85.11 | 41% | 0.513 | 13.12 | 6.49 | 0.558 | 0.474 | -8.13 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Trọng số phần R:R (/100) → 28 + Điểm vùng: EMA 21 → 1.13 | 111.58 | 50.3% | 0.78 | 7.63 | 14.62 | 0.669 | 0.903 | -10.11 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: POC volume profile cố định → 0.813 | 107.6 | 51% | 0.752 | 7.85 | 13.71 | 0.61 | 0.91 | -12.99 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + % chốt ở TP1 → 0.287 + Khung lớn phải tăng (trend ≥) → 0.425 | 101.76 | 48.9% | 0.754 | 8.31 | 12.25 | 0.58 | 0.925 | -13.21 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần SL (/100) → 9 | 101.95 | 46.7% | 0.68 | 8.86 | 11.51 | 0.6 | 0.762 | -11.14 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: EMA 21 → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 4 | 99.49 | 47.6% | 0.696 | 8.37 | 11.89 | 0.571 | 0.812 | -10.94 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 84.29 | 44.9% | 0.62 | 11.01 | 7.66 | 0.657 | 0.582 | -18.25 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu tới TP1 → 2.63 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 81.83 | 44.4% | 0.568 | 12.19 | 6.71 | 0.638 | 0.506 | -15.15 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Số TP tối đa → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 81.38 | 42.3% | 0.573 | 10.47 | 7.77 | 0.408 | 0.768 | -11.07 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: EMA 21 → 1.13 + Lệnh chờ hết hạn sau (nến) → 6 | 91.09 | 48.9% | 0.695 | 8.1 | 11.25 | 0.569 | 0.845 | -10.77 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Số TP tối đa → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 123.14 | 48.7% | 0.81 | 8.07 | 15.26 | 0.792 | 0.831 | -12.56 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: EMA 50 → 1.13 + Ngưỡng điểm vào kèo → 74 + Đệm SL riêng khung 1D (ATR) → 0.3 | 109.9 | 45.1% | 0.678 | 10.21 | 10.76 | 0.656 | 0.698 | -10.16 |  |

### Vòng 1433 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.62R, lời÷rủi ro 15.71

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: MACD cắt lên Signal → 0.563 | 70.78 | 46.1% | 0.553 | 9.68 | 7.31 | 0.408 | 0.722 | -11.31 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: EMA 21 → 1.13 | 113.55 | 50.7% | 0.789 | 7.53 | 15.08 | 0.654 | 0.935 | -11.55 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: EMA 50 → 1.13 + Trọng số phần Entry (/100) → 28 | 116.7 | 50.3% | 0.816 | 8.07 | 14.46 | 0.629 | 1.034 | -11.14 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 73.92 | 46.7% | 0.691 | 8.51 | 8.69 | 0.43 | 0.988 | -4.43 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Elliott (/100) → 10 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 101.28 | 49.7% | 0.698 | 8.37 | 12.1 | 0.663 | 0.737 | -10.9 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + R:R tối thiểu riêng khung 1W → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: MACD cắt lên Signal → 0.563 | 78.61 | 46.8% | 0.566 | 9.44 | 8.33 | 0.428 | 0.709 | -14.7 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: POC volume profile cố định → 0.813 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 75.36 | 47% | 0.562 | 9.52 | 7.92 | 0.411 | 0.733 | -10.31 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 94.85 | 41.2% | 0.42 | 12.52 | 7.58 | 0.439 | 0.4 | -7.11 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Cộng điểm phân kỳ dương ẩn → 2.25 + Số TP tối đa → 1 + Đệm SL riêng khung 1D (ATR) → 0.3 | 109.71 | 45.7% | 0.677 | 10.29 | 10.66 | 0.668 | 0.685 | -10.76 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Cộng điểm phân kỳ dương ẩn → 2.25 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 88.57 | 45.4% | 0.543 | 9.56 | 9.26 | 0.495 | 0.59 | -12.02 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + % chốt ở TP1 → 0.287 + Điểm vùng: POC anchored → 2 | 102.17 | 49% | 0.686 | 8.48 | 12.05 | 0.524 | 0.854 | -12.14 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức MACD → 1.13 | 103.7 | 49% | 0.725 | 8.47 | 12.24 | 0.566 | 0.883 | -13.19 |  |

### Vòng 1432 — ngẫu nhiên nhiều thông số · mốc: tổng 122.91R, win 52.8%, rủi ro tụt vốn 7.17R, lời÷rủi ro 17.14

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: HVN cố định → 0.438 | 95.76 | 47.3% | 0.638 | 9.34 | 10.25 | 0.47 | 0.807 | -12.92 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: EMA 21 → 0.875 | 118.83 | 50.7% | 0.814 | 7.91 | 15.02 | 0.616 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 118.98 | 52.7% | 0.815 | 7.34 | 16.21 | 0.634 | 1.016 | -12.16 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Trọng số phần R:R (/100) → 28 | 117.47 | 51.1% | 0.845 | 7.51 | 15.64 | 0.637 | 1.069 | -12.19 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: POC volume profile cố định → 0.813 | 122.91 | 52.8% | 0.854 | 7.17 | 17.14 | 0.656 | 1.074 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Mức RSI 30/70 → 1.13 | 118.43 | 52.1% | 0.822 | 7.41 | 15.98 | 0.598 | 1.066 | -12.16 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: EMA 50 → 1.13 | 160.24 | 38% | 0.525 | 18.84 | 8.51 | 0.404 | 0.647 | -10.43 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu tới TP1 → 2.63 | 87.46 | 46.2% | 0.663 | 10.21 | 8.57 | 0.366 | 0.987 | -11.58 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cổng Dow → CHẶT + Khung lớn phải tăng (trend ≥) → 0.375 | 76.88 | 48.2% | 0.561 | 8.11 | 9.48 | 0.417 | 0.67 | -15.33 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Trend (/100) → 12 | 72.46 | 44.9% | 0.677 | 9.13 | 7.94 | 0.471 | 0.921 | -5.79 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 21 → 1.13 | 115.64 | 44.6% | 0.628 | 9.78 | 11.82 | 0.704 | 0.561 | -10.33 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 116.75 | 51% | 0.794 | 7.93 | 14.72 | 0.552 | 1.075 | -7.88 |  |

### Vòng 1431 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.02R, lời÷rủi ro 17.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 1W → 2 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 | 74.95 | 47.7% | 0.675 | 8.73 | 8.59 | 0.462 | 0.917 | -7.25 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: EMA 50 → 0.75 | 116.01 | 52.1% | 0.817 | 7.41 | 15.66 | 0.617 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib sóng 4 → 1.56 | 84.81 | 50.4% | 0.725 | 7.43 | 11.41 | 0.593 | 0.879 | -17.6 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 + R:R tối thiểu tới TP1 → 2.63 | 77.4 | 50% | 0.624 | 8.73 | 8.87 | 0.531 | 0.721 | -11.6 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 121.94 | 53.5% | 0.859 | 7.02 | 17.37 | 0.694 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Coin phải mạnh hơn BTC trong N ngày → 14 | 88.08 | 49.6% | 0.728 | 8.13 | 10.83 | 0.573 | 0.908 | -18.62 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 84.61 | 45.9% | 0.532 | 9.69 | 8.73 | 0.434 | 0.624 | -10.16 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Cộng thêm ngưỡng điểm khung 1D → 7 | 118.75 | 53.2% | 0.842 | 7.13 | 16.65 | 0.66 | 1.043 | -9.21 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Ngưỡng điểm vào kèo → 74 | 120.22 | 52.4% | 0.829 | 7.14 | 16.84 | 0.682 | 0.991 | -12.16 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: HVN anchored → 0.313 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 109.43 | 50.4% | 0.799 | 7.78 | 14.07 | 0.542 | 1.083 | -12.19 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.35 | 108.77 | 49.7% | 0.75 | 8.11 | 13.41 | 0.61 | 0.908 | -12.74 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 119.14 | 52.8% | 0.827 | 7.2 | 16.55 | 0.671 | 1.002 | -12.16 |  |

### Vòng 1430 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.53R, lời÷rủi ro 15.90

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: EMA 21 → 0.875 | 131.54 | 44.5% | 0.579 | 10.56 | 12.46 | 0.621 | 0.537 | -13.32 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 50 → 0.75 | 114.25 | 51.4% | 0.793 | 7.66 | 14.92 | 0.598 | 1.005 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Khung lớn phải tăng (trend ≥) → 0.375 + Đệm SL riêng khung 1W (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 63.84 | 44.1% | 0.541 | 10.37 | 6.16 | 0.443 | 0.63 | -15.55 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Divergence (/100) → 9 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 115.94 | 48.1% | 0.743 | 8.53 | 13.59 | 0.578 | 0.931 | -12.55 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 + SL tối đa (% Entry) → 0.425 | 143.94 | 37.1% | 0.495 | 19.4 | 7.42 | 0.388 | 0.596 | -7.11 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: HVN cố định → 0.438 | 109.29 | 46.8% | 0.71 | 8.83 | 12.38 | 0.556 | 0.876 | -12.43 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 116.63 | 48.4% | 0.752 | 8.42 | 13.85 | 0.594 | 0.93 | -12.55 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Trọng số phần SL (/100) → 7 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 115.96 | 51% | 0.778 | 7.95 | 14.59 | 0.592 | 0.972 | -6.21 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: BOS → 0 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Cộng điểm phân kỳ dương ẩn → 2.25 | 114.19 | 49.3% | 0.827 | 7.98 | 14.31 | 0.615 | 1.073 | -10.4 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 1W (ATR) → 0.3 | 94.16 | 45.8% | 0.654 | 10.48 | 8.98 | 0.498 | 0.793 | -5.94 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 121.81 | 47% | 0.734 | 9.73 | 12.52 | 0.668 | 0.811 | -10.16 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Xác nhận khung nhỏ (A2) → W | 88.1 | 36.7% | 0.36 | 16.93 | 5.2 | 0.33 | 0.388 | -7.71 |  |

### Vòng 1429 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.56R, lời÷rủi ro 15.84

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Đệm SL riêng khung 4H (ATR) → 0.3 + SL tối đa (% Entry) → 0.425 | 200.45 | 40.4% | 0.729 | 16.22 | 12.36 | 0.595 | 0.88 | -7.85 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: BOS → 0 | 119.04 | 52.1% | 0.827 | 7.54 | 15.79 | 0.638 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 65.36 | 42.9% | 0.491 | 10.98 | 5.95 | 0.463 | 0.523 | -11.92 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 16.59 | 52.5% | 0.141 | 7.01 | 2.37 | 0.184 | 0.1 | -8.61 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: HVN anchored → 0.188 | 106.85 | 50% | 0.752 | 7.94 | 13.46 | 0.61 | 0.891 | -13.19 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần R:R (/100) → 33 | 118.99 | 52.1% | 0.826 | 7.49 | 15.89 | 0.656 | 1.017 | -10.84 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + R:R tối thiểu tới TP1 → 2.63 + R:R tối thiểu riêng khung 4H → 2 | 124.8 | 41.4% | 0.397 | 12.57 | 9.93 | 0.375 | 0.417 | -4.79 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Số TP tối đa → 1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 37.93 | 57.5% | 0.218 | 5.7 | 6.65 | 0.259 | 0.176 | -8.18 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: EMA 21 → 0.875 | 112.71 | 49.7% | 0.777 | 8.31 | 13.56 | 0.641 | 0.927 | -13.12 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần SL (/100) → 9 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 93.34 | 47.9% | 0.771 | 8.32 | 11.22 | 0.498 | 1.068 | -14.15 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Cộng thêm ngưỡng điểm khung 4H → 2 | 89.92 | 44.7% | 0.638 | 9.61 | 9.36 | 0.535 | 0.751 | -8.13 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: EMA 50 → 0.75 | 115.26 | 51.7% | 0.806 | 7.71 | 14.95 | 0.598 | 1.035 | -12.16 |  |

### Vòng 1428 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.59R, lời÷rủi ro 15.78

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần Momentum (/100) → 21 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 72.51 | 45.9% | 0.653 | 9.21 | 7.87 | 0.435 | 0.91 | -5.79 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cộng thêm ngưỡng điểm khung 1W → 2 + Lệnh chờ hết hạn sau (nến) → 6 | 99.51 | 48.2% | 0.716 | 8.56 | 11.63 | 0.504 | 0.957 | -12.11 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Trọng số phần Entry (/100) → 28 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Divergence (/100) → 9 | 174.34 | 38.9% | 0.589 | 17.53 | 9.95 | 0.495 | 0.687 | -8.55 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Break mây Ichimoku → 3 | 154.32 | 34.7% | 0.491 | 20.74 | 7.44 | 0.34 | 0.632 | -7.43 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Lệnh chờ hết hạn sau (nến) → 8 + Điểm tối thiểu của vùng đặt SL → 4 + R:R tối thiểu riêng khung 4H → 2 | 89.85 | 35.2% | 0.19 | 23.47 | 3.83 | 0.262 | 0.131 | -3.46 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Fib sóng 4 → 1.56 + Lệnh chờ hết hạn sau (nến) → 6 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 107.42 | 47.9% | 0.746 | 8.51 | 12.62 | 0.74 | 0.753 | -12.38 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Điểm vùng: HVN anchored → 0.188 + R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 | 106.29 | 46.2% | 0.629 | 9.09 | 11.69 | 0.638 | 0.621 | -8.93 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng thêm ngưỡng điểm khung 1W → 2 | 98.23 | 47.8% | 0.722 | 8.46 | 11.61 | 0.486 | 0.972 | -15.4 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Fib sóng 4 → 0.938 | 101.56 | 49% | 0.691 | 8.61 | 11.8 | 0.531 | 0.853 | -12.16 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN anchored → 0.188 + Coin phải mạnh hơn BTC trong N ngày → 14 | 87.73 | 49.6% | 0.75 | 7.95 | 11.04 | 0.552 | 0.988 | -18.62 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: EMA 200 → 1 | 103.39 | 46.8% | 0.654 | 10.03 | 10.31 | 0.461 | 0.898 | -9.57 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + SL tối đa (% Entry) → 0.425 + Điểm vùng: BOS → 0 | 115.77 | 50.3% | 0.798 | 7.69 | 15.05 | 0.66 | 0.951 | -12.16 |  |

### Vòng 1427 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.54R, lời÷rủi ro 15.88

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 111.77 | 50.3% | 0.782 | 8 | 13.97 | 0.593 | 0.989 | -13.13 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 126.7 | 45% | 0.548 | 10.77 | 11.76 | 0.576 | 0.522 | -15.31 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 | 103.93 | 44.4% | 0.688 | 9.94 | 10.46 | 0.505 | 0.874 | -12.22 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: EMA 21 → 1.13 | 114.11 | 51% | 0.787 | 7.5 | 15.21 | 0.638 | 0.956 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Biên mây Ichimoku → 1.05 | 109.52 | 51.4% | 0.761 | 7.74 | 14.15 | 0.614 | 0.92 | -12.99 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 115.31 | 51.1% | 0.818 | 7.36 | 15.67 | 0.609 | 1.055 | -12.16 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Số TP tối đa → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 98.4 | 48.5% | 0.724 | 8.22 | 11.97 | 0.479 | 0.991 | -15 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: BOS → 0 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: POC volume profile cố định → 0.813 | 97.36 | 48.3% | 0.645 | 9.25 | 10.53 | 0.482 | 0.833 | -9.57 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: BOS → 0 | 119.74 | 52.4% | 0.837 | 7.54 | 15.88 | 0.656 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần SL (/100) → 9 + Cổng Dow → CHẶT | 29.18 | 61.2% | 0.226 | 4.76 | 6.13 | 0.221 | 0.23 | -5.62 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Cổng Dow → CHẶT | 87.2 | 52.7% | 0.779 | 6.84 | 12.75 | 0.398 | 1.109 | -14.25 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 97.01 | 45.2% | 0.584 | 10.56 | 9.19 | 0.482 | 0.697 | -9.52 |  |

### Vòng 1426 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.59R, lời÷rủi ro 15.78

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Cộng điểm phân kỳ dương ẩn → 3 + Xác nhận khung nhỏ (A2) → W | 98.93 | 38.6% | 0.397 | 15.28 | 6.47 | 0.342 | 0.447 | -4.29 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Đệm SL riêng khung 4H (ATR) → 0.3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 165.42 | 37.9% | 0.555 | 17.98 | 9.2 | 0.507 | 0.604 | -7.5 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: POC volume profile cố định → 0.688 + R:R tối thiểu tới TP1 → 2.63 | 83.59 | 43.5% | 0.674 | 11.34 | 7.37 | 0.668 | 0.679 | -19.07 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Xác nhận khung nhỏ (A2) → W | 113.18 | 39.2% | 0.422 | 15.45 | 7.33 | 0.39 | 0.453 | -4.58 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Coin phải mạnh hơn BTC trong N ngày → 14 | 77.13 | 47.9% | 0.659 | 8.22 | 9.38 | 0.602 | 0.723 | -19.85 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: POC volume profile cố định → 0.688 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Cổng Dow → CHẶT | 80.28 | 41.6% | 0.337 | 11.51 | 6.97 | 0.303 | 0.362 | -11.72 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + % chốt ở TP1 → 0.307 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 106.03 | 51.4% | 0.736 | 8.2 | 12.93 | 0.657 | 0.824 | -11.35 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Số TP tối đa → 3 + % chốt ở TP1 → 0.307 | 98.4 | 48.5% | 0.724 | 8.25 | 11.93 | 0.479 | 0.991 | -15 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trọng số phần Entry (/100) → 33 | 135.94 | 43.8% | 0.647 | 10.98 | 12.38 | 0.613 | 0.683 | -16.99 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Lệnh chờ hết hạn sau (nến) → 6 | 60.01 | 44.4% | 0.606 | 9.52 | 6.3 | 0.365 | 0.884 | -6.87 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 127.85 | 50% | 0.83 | 8.07 | 15.84 | 0.8 | 0.865 | -12.74 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: EMA 50 → 0.75 + Cổng Dow → CHẶT | 81.5 | 51.4% | 0.748 | 6.98 | 11.68 | 0.306 | 1.109 | -14.25 |  |

### Vòng 1425 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.48R, lời÷rủi ro 16.01

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 114.59 | 51.7% | 0.801 | 7.38 | 15.53 | 0.653 | 0.97 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Trọng số phần Elliott (/100) → 6 + Cộng thêm ngưỡng điểm khung 4H → -1 | 119.54 | 52.1% | 0.83 | 7.26 | 16.47 | 0.645 | 1.043 | -12.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 50 → 0.75 + Điểm tối thiểu của vùng đặt SL → 4 | 130.79 | 41.8% | 0.421 | 11.86 | 11.03 | 0.41 | 0.429 | -10 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Fib sóng 4 → 1.56 | 118.23 | 51.3% | 0.778 | 8.08 | 14.63 | 0.623 | 0.975 | -7.34 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 106.57 | 48% | 0.71 | 8.44 | 12.63 | 0.655 | 0.766 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần SL (/100) → 9 | 39.16 | 42% | 0.445 | 9.5 | 4.12 | 0.362 | 0.544 | -5.18 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + R:R tối thiểu riêng khung 1D → 2 | 127.55 | 42.2% | 0.523 | 11.14 | 11.45 | 0.607 | 0.441 | -13.02 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần Trend (/100) → 19 + Điểm tối thiểu của vùng đặt SL → 2 | 111.27 | 50.7% | 0.773 | 7.74 | 14.38 | 0.615 | 0.949 | -10.96 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 27.72 | 36.7% | 0.308 | 11.72 | 2.37 | 0.185 | 0.469 | -6.03 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm vào kèo → 74 | 180.76 | 38.1% | 0.579 | 18.56 | 9.74 | 0.605 | 0.556 | -9.28 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Break mây Ichimoku → 1 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: EMA 50 → 0.75 | 181.33 | 40% | 0.595 | 15.99 | 11.34 | 0.569 | 0.62 | -6.95 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Break mây Ichimoku → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 109.6 | 48.4% | 0.681 | 8.87 | 12.36 | 0.562 | 0.81 | -10.57 |  |
