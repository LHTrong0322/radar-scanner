# Tối ưu tự động (chạy liên tục) — vòng 1054

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 12303 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 165 | 46.7% | 95.56R | 0.579 | 6.44R | 10.16R | 9.41 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 144 | 52.8% | 114.47R | 0.795 | 5.09R | 7.82R | 14.64 | 27 | 18.5% | -8.9R | -0.33 | 10.54R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 27 | 48.1% | 17.16R | 5 | 0% | -3.77R |
| 1W | 10 | 50% | 7.77R | 2 | 0% | -2.3R |
| 4H | 107 | 54.2% | 89.54R | 20 | 25% | -2.83R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 165 | 46.7% | 95.56R | 10.16R | 9.41 | 30 | 13.3% | -11.98R |
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
| Điểm tối thiểu vùng đặt lệnh chờ | 3 | **2** |
| Số TP tối đa | 2 | **3** |
| Điểm ADX > 25 và +DI trội (Momentum) | 3 | **4** |
| Điểm ADX < 13 cạn lực giảm (Momentum) | 1.5 | **2.5** |
| Cộng điểm phân kỳ dương ẩn | 3 | **2.63** |
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
| 22 | Lọc BTC trên EMA200 (crypto) | true → false | 83.22R | 40.4% | 14.66R | 5.68 |
| 21 | Điểm tối thiểu của vùng đặt SL | 2 → 3 | 54.36R | 37.7% | 19.55R | 2.78 |
| 21 | Số nến mỗi bên để xác định đỉnh/đáy Dow | 5 → 4 | 73.82R | 39.5% | 15.56R | 4.74 |
| 19 (hoàn tác) | Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) | 6 → 5 | 104.08R | 43.9% | 13.85R | 7.51 |

## 10 vòng gần nhất

### Vòng 1054 — ngẫu nhiên nhiều thông số · mốc: tổng 114.47R, win 52.8%, rủi ro tụt vốn 7.82R, lời÷rủi ro 14.64

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: EMA 50 → 0.75 | 102.9 | 51.4% | 0.705 | 8.34 | 12.34 | 0.483 | 0.952 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Ngưỡng điểm vào kèo → 74 | 109.54 | 41.1% | 0.349 | 12.69 | 8.63 | 0.293 | 0.396 | -7.27 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Số TP tối đa → 2 | 113.51 | 51.7% | 0.794 | 7.81 | 14.53 | 0.601 | 1.012 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Ngưỡng điểm vào kèo → 74 + Trọng số phần Divergence (/100) → 12 | 111.72 | 51% | 0.75 | 8.2 | 13.62 | 0.534 | 1.007 | -8.9 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + SL tối đa (% Entry) → 0.425 + Cổng Dow → TẮT | 81.22 | 39.3% | 0.371 | 15.56 | 5.22 | 0.311 | 0.436 | -19.36 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + % chốt ở TP1 → 0.287 + Trọng số phần Elliott (/100) → 6 | 111.54 | 51.4% | 0.764 | 8.03 | 13.89 | 0.594 | 0.948 | -7.59 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Mức RSI 30/70 → 0.875 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: POC anchored → 4 | 101.57 | 39.5% | 0.389 | 16.7 | 6.08 | 0.338 | 0.43 | 2.27 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: POC anchored → 2 | 99.94 | 49.3% | 0.658 | 8.88 | 11.25 | 0.494 | 0.834 | -8.9 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + % chốt ở TP1 → 0.287 + Xác nhận khung nhỏ (A2) → W | 97.21 | 40.1% | 0.364 | 16.13 | 6.03 | 0.482 | 0.237 | -9.54 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trọng số phần SL (/100) → 7 + Đệm SL riêng khung 1D (ATR) → 0.3 + % chốt ở TP1 → 0.287 | 80.77 | 44.4% | 0.561 | 11.68 | 6.92 | 0.598 | 0.529 | -7.47 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + R:R tối thiểu riêng khung 1D → 2 + SL tối đa (% Entry) → 0.425 | 103.88 | 46.2% | 0.608 | 9.55 | 10.88 | 0.576 | 0.636 | -7.16 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Fib sóng 4 → 1.56 | 113.24 | 47.6% | 0.674 | 10.33 | 10.96 | 0.609 | 0.736 | -4.3 |  |

### Vòng 1053 — ngẫu nhiên nhiều thông số · mốc: tổng 114.47R, win 52.8%, rủi ro tụt vốn 7.8R, lời÷rủi ro 14.68

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 112.94 | 52.1% | 0.795 | 7.85 | 14.39 | 0.607 | 1.007 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Cộng điểm phân kỳ dương ẩn → 2.25 + Đệm SL riêng khung 1W (ATR) → 0.3 | 101.44 | 47.9% | 0.725 | 8.92 | 11.37 | 0.48 | 0.95 | -10.75 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Trọng số phần R:R (/100) → 28 | 81.71 | 48.7% | 0.698 | 8.61 | 9.49 | 0.524 | 0.895 | -14.05 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Biên mây Ichimoku → 1.35 | 110.69 | 51.4% | 0.758 | 8.39 | 13.19 | 0.549 | 0.999 | -7.88 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Xác nhận khung nhỏ (A2) → W + Ngưỡng điểm vào kèo → 77 | 98.05 | 38.6% | 0.354 | 15.87 | 6.18 | 0.336 | 0.369 | -5.46 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Trend (/100) → 19 | 103.07 | 45.6% | 0.603 | 9.45 | 10.91 | 0.544 | 0.659 | -10.22 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + R:R tối thiểu riêng khung 1W → 2 | 107.51 | 52.1% | 0.736 | 7.95 | 13.52 | 0.62 | 0.853 | -9.93 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Xác nhận khung nhỏ (A2) → W + Cộng điểm phân kỳ dương ẩn → 2.25 | 39.18 | 28.9% | 0.123 | 36.76 | 1.07 | 0.08 | 0.162 | -44.29 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Trọng số phần SL (/100) → 9 | 114.47 | 52.8% | 0.795 | 7.8 | 14.68 | 0.592 | 1.029 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Fib sóng 4 → 1.56 | 91.95 | 46.3% | 0.568 | 9.38 | 9.8 | 0.428 | 0.703 | -10.21 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: EMA 200 → 3 | 95.04 | 46.1% | 0.617 | 8.85 | 10.74 | 0.566 | 0.66 | -10.21 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + SL tối đa (% Entry) → 0.425 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 21 → 1.13 | 30.94 | 59% | 0.192 | 5.58 | 5.54 | 0.21 | 0.176 | -6.93 |  |

### Vòng 1052 — ngẫu nhiên nhiều thông số · mốc: tổng 114.47R, win 52.8%, rủi ro tụt vốn 7.77R, lời÷rủi ro 14.73

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 110.02 | 50.9% | 0.692 | 8.64 | 12.73 | 0.544 | 0.866 | -11.57 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Đệm SL riêng khung 1D (ATR) → 0.3 | 113.52 | 47.6% | 0.684 | 10.44 | 10.87 | 0.628 | 0.736 | -3.31 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Cổng Dow → CHẶT + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 81.1 | 51.8% | 0.724 | 6.99 | 11.6 | 0.31 | 1.083 | -10.99 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Số TP tối đa → 2 + Trọng số phần Divergence (/100) → 12 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.23 | 59.6% | 0.194 | 5.68 | 5.5 | 0.206 | 0.182 | -9.69 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Khung lớn phải tăng (trend ≥) → 0.425 | 31.27 | 57.9% | 0.197 | 5.38 | 5.81 | 0.218 | 0.176 | -9.57 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cộng thêm ngưỡng điểm khung 1W → -1 + % chốt ở TP1 → 0.307 | 115.42 | 45.4% | 0.558 | 10.76 | 10.73 | 0.522 | 0.598 | -8.41 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 | 106.88 | 51% | 0.708 | 8.77 | 12.19 | 0.539 | 0.893 | -6.59 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Biên mây Ichimoku → 1.35 | 104.14 | 43.3% | 0.465 | 12.13 | 8.59 | 0.495 | 0.433 | -12.57 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 | 30.62 | 37.6% | 0.36 | 11.55 | 2.65 | 0.282 | 0.472 | -4.89 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 109.89 | 51.7% | 0.748 | 8.11 | 13.55 | 0.569 | 0.95 | -8.55 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + % chốt ở TP1 → 0.287 + Cộng thêm ngưỡng điểm khung 4H → 2 | 121.39 | 44.7% | 0.537 | 11.27 | 10.77 | 0.582 | 0.489 | -10.69 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 140.79 | 37.8% | 0.484 | 19.41 | 7.25 | 0.328 | 0.643 | -14.65 |  |

### Vòng 1051 — ngẫu nhiên nhiều thông số · mốc: tổng 114.47R, win 52.8%, rủi ro tụt vốn 7.77R, lời÷rủi ro 14.73

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: BOS → 1 | 105.18 | 46% | 0.604 | 9.32 | 11.29 | 0.566 | 0.641 | -7.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 114.27 | 52.4% | 0.788 | 7.8 | 14.65 | 0.581 | 1.029 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 4H (ATR) → 0.3 | 148.6 | 38.8% | 0.52 | 18.18 | 8.17 | 0.345 | 0.697 | -13.51 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + % chốt ở TP1 → 0.287 | 109.84 | 52.1% | 0.763 | 8.08 | 13.59 | 0.531 | 1.022 | -8.88 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + % chốt ở TP1 → 0.307 | 114.54 | 52.8% | 0.795 | 7.76 | 14.76 | 0.593 | 1.028 | -8.91 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Break mây Ichimoku → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 93.62 | 44.5% | 0.571 | 10.85 | 8.63 | 0.388 | 0.772 | -6.85 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 | 90.14 | 42.7% | 0.469 | 11.19 | 8.06 | 0.475 | 0.464 | -17.51 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 112.12 | 52.4% | 0.773 | 7.82 | 14.34 | 0.57 | 1.009 | -8.9 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần Divergence (/100) → 9 | 111.75 | 52.1% | 0.776 | 7.92 | 14.11 | 0.581 | 0.988 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + % chốt ở TP1 → 0.307 + Điểm vùng: Break mây Ichimoku → 3 | 102.14 | 48.8% | 0.623 | 10.01 | 10.2 | 0.449 | 0.824 | -8.65 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần SL (/100) → 7 + Điểm vùng: MACD cắt lên Signal → 0.438 | 102.17 | 46.3% | 0.686 | 9.86 | 10.36 | 0.447 | 0.915 | -8.17 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần R:R (/100) → 28 | 104.34 | 39% | 0.411 | 16.2 | 6.44 | 0.368 | 0.449 | -3.74 |  |

### Vòng 1050 — ngẫu nhiên nhiều thông số · mốc: tổng 114.47R, win 52.8%, rủi ro tụt vốn 7.96R, lời÷rủi ro 14.38

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Cộng thêm ngưỡng điểm khung 4H → 2 | 99.13 | 49% | 0.693 | 8.4 | 11.8 | 0.562 | 0.842 | -8.9 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: HVN anchored → 0.188 | 109.63 | 51.7% | 0.746 | 8.06 | 13.6 | 0.569 | 0.946 | -9.87 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 97.98 | 50.7% | 0.671 | 9.03 | 10.85 | 0.548 | 0.812 | -8.12 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cộng thêm ngưỡng điểm khung 4H → -1 | 110.8 | 50.7% | 0.769 | 8.3 | 13.35 | 0.499 | 1.055 | -8.77 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 107.67 | 50% | 0.769 | 8.05 | 13.38 | 0.558 | 0.999 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Trọng số phần Momentum (/100) → 25 + R:R tối thiểu riêng khung 1W → 2 | 104.77 | 50.7% | 0.718 | 8.32 | 12.59 | 0.603 | 0.833 | -9.93 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Ngưỡng điểm vào kèo → 77 + SL tối đa (% Entry) → 0.425 | 107 | 50% | 0.753 | 8.08 | 13.24 | 0.602 | 0.918 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 128.15 | 44.8% | 0.557 | 10.71 | 11.97 | 0.605 | 0.508 | -10.68 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Đệm SL riêng khung 1W (ATR) → 0.3 | 98.96 | 47.1% | 0.707 | 9.09 | 10.89 | 0.477 | 0.912 | -9.74 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: POC anchored → 4 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 109.74 | 50% | 0.732 | 8.95 | 12.26 | 0.474 | 0.996 | -2.71 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Break mây Ichimoku → 1 | 97.03 | 48.3% | 0.643 | 9.16 | 10.59 | 0.457 | 0.857 | -8.97 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 200 → 1 + % chốt ở TP1 → 0.287 | 95.98 | 49.4% | 0.615 | 9.45 | 10.16 | 0.532 | 0.713 | -4.91 |  |

### Vòng 1049 — ngẫu nhiên nhiều thông số · mốc: tổng 114.47R, win 52.8%, rủi ro tụt vốn 7.79R, lời÷rủi ro 14.69

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Trọng số phần Elliott (/100) → 6 | 114.01 | 52.4% | 0.786 | 7.79 | 14.64 | 0.592 | 1.007 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Ngưỡng điểm vào kèo → 77 | 70.05 | 45.6% | 0.56 | 9.53 | 7.35 | 0.403 | 0.731 | -10.31 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Entry (/100) → 33 | 115.5 | 49.4% | 0.731 | 8.86 | 13.04 | 0.546 | 0.952 | -9.93 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Break mây Ichimoku → 3 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 130.43 | 42.6% | 0.535 | 11.71 | 11.14 | 0.585 | 0.481 | -11.49 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Fib sóng 4 → 1.56 + Ngưỡng điểm vào kèo → 77 | 107.92 | 51% | 0.734 | 8.03 | 13.44 | 0.583 | 0.9 | -8.9 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 78.61 | 48.3% | 0.666 | 8.67 | 9.07 | 0.436 | 0.93 | -15.36 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Mức MACD → 1.13 + Đệm SL riêng khung 1W (ATR) → 0.3 | 102.15 | 45.9% | 0.7 | 9.84 | 10.38 | 0.483 | 0.905 | -10.04 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 95 | 50.7% | 0.669 | 8.36 | 11.36 | 0.558 | 0.797 | -8.7 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Elliott (/100) → 6 + Cộng thêm ngưỡng điểm khung 1D → 5 | 101.09 | 47.5% | 0.717 | 8.86 | 11.41 | 0.454 | 0.969 | -10.75 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: EMA 50 → 0.75 + Coin phải mạnh hơn BTC trong N ngày → 14 | 76.23 | 49.6% | 0.63 | 8.87 | 8.59 | 0.48 | 0.804 | -16.19 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Trọng số phần SL (/100) → 9 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 102.73 | 51% | 0.68 | 8.39 | 12.24 | 0.601 | 0.762 | -9.24 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Cộng thêm ngưỡng điểm khung 1W → -1 + R:R tối thiểu riêng khung 4H → 2 | 119.51 | 41.7% | 0.383 | 12.3 | 9.72 | 0.332 | 0.427 | 2.33 |  |

### Vòng 1048 — ngẫu nhiên nhiều thông số · mốc: tổng 114.47R, win 52.8%, rủi ro tụt vốn 7.79R, lời÷rủi ro 14.69

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Ngưỡng điểm vào kèo → 77 + Khung lớn phải tăng (trend ≥) → 0.425 + Cộng điểm phân kỳ dương ẩn → 3 | 110.45 | 51.1% | 0.806 | 7.7 | 14.34 | 0.582 | 1.055 | -8.41 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần SL (/100) → 7 | 102.08 | 49% | 0.685 | 8.56 | 11.93 | 0.502 | 0.887 | -8.97 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 102.62 | 50.3% | 0.68 | 9.09 | 11.29 | 0.498 | 0.895 | -6.32 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Biên mây Ichimoku → 1.35 | 85.83 | 47.3% | 0.58 | 9.31 | 9.22 | 0.55 | 0.611 | -7.64 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Đệm SL riêng khung 1D (ATR) → 0.3 | 102.15 | 46.5% | 0.601 | 11.2 | 9.12 | 0.627 | 0.578 | -2.43 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: EMA 200 → 3 | 102.71 | 50% | 0.713 | 8.39 | 12.24 | 0.476 | 0.971 | -9.89 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1D → 2 + Lệnh chờ hết hạn sau (nến) → 8 + Coin phải mạnh hơn BTC trong N ngày → 14 | 94.87 | 41.2% | 0.328 | 12.22 | 7.76 | 0.366 | 0.299 | -16.96 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 109.89 | 51.7% | 0.748 | 8.04 | 13.67 | 0.569 | 0.95 | -8.55 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Khung lớn phải tăng (trend ≥) → 0.425 | 95.5 | 49.6% | 0.707 | 8.43 | 11.33 | 0.57 | 0.86 | -11.21 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: BOS → 1 + Xác nhận khung nhỏ (A2) → W | 87 | 36.2% | 0.325 | 18.3 | 4.75 | 0.359 | 0.289 | -4.9 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Cổng Dow → TẮT + R:R tối thiểu tới TP1 → 2.63 | 124.49 | 43.3% | 0.692 | 11.01 | 11.31 | 0.624 | 0.754 | -24.08 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 115.23 | 52.8% | 0.8 | 7.78 | 14.81 | 0.597 | 1.034 | -8.9 |  |

### Vòng 1047 — ngẫu nhiên nhiều thông số · mốc: tổng 114.47R, win 52.8%, rủi ro tụt vốn 7.82R, lời÷rủi ro 14.64

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Xác nhận khung nhỏ (A2) → W | 95.32 | 37.8% | 0.38 | 16.9 | 5.64 | 0.351 | 0.406 | -7.05 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Fib sóng 4 → 1.56 | 104.12 | 43% | 0.582 | 12.18 | 8.55 | 0.637 | 0.531 | -4.56 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Ngưỡng điểm vào kèo → 74 | 93.31 | 38.2% | 0.379 | 16.67 | 5.6 | 0.347 | 0.407 | -5 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 105.31 | 39.9% | 0.408 | 15.87 | 6.64 | 0.37 | 0.444 | -3.88 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Số TP tối đa → 2 + Trọng số phần SL (/100) → 7 + Điểm vùng: MACD cắt lên Signal → 0.438 | 102.51 | 49% | 0.653 | 9.66 | 10.61 | 0.421 | 0.927 | -6.32 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Coin phải mạnh hơn BTC trong N ngày → 14 | 88.45 | 47% | 0.67 | 9.26 | 9.55 | 0.677 | 0.663 | -15.36 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Trọng số phần Trend (/100) → 12 | 102 | 49.3% | 0.718 | 8.33 | 12.24 | 0.5 | 0.949 | -9.89 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: EMA 200 → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 70.4 | 38.5% | 0.258 | 14.74 | 4.78 | 0.223 | 0.285 | -8.33 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 21 → 0.875 + R:R tối thiểu riêng khung 1W → 2 | 105.94 | 47.7% | 0.692 | 9.36 | 11.32 | 0.69 | 0.695 | -10.87 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 106.11 | 50.3% | 0.712 | 8.59 | 12.35 | 0.526 | 0.922 | -7.53 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 24.56 | 56.5% | 0.167 | 7.11 | 3.45 | 0.2 | 0.142 | -11.72 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 105.54 | 45.7% | 0.603 | 9.63 | 10.96 | 0.566 | 0.638 | -7.16 |  |

### Vòng 1046 — ngẫu nhiên nhiều thông số · mốc: tổng 114.47R, win 52.8%, rủi ro tụt vốn 7.79R, lời÷rủi ro 14.69

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Đệm SL riêng khung 1W (ATR) → 0.3 + Lệnh chờ hết hạn sau (nến) → 8 | 98.39 | 44.3% | 0.66 | 10.61 | 9.27 | 0.498 | 0.801 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: POC volume profile cố định → 0.688 | 102.62 | 50.3% | 0.68 | 9.07 | 11.31 | 0.498 | 0.895 | -6.32 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Đệm SL riêng khung 4H (ATR) → 0.3 + Số TP tối đa → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 | 99.75 | 36.4% | 0.382 | 21.32 | 4.68 | 0.232 | 0.521 | -10.9 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần SL (/100) → 7 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 73.3 | 48.8% | 0.596 | 9.18 | 7.98 | 0.598 | 0.594 | -15.17 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Trọng số phần Elliott (/100) → 10 | 114.7 | 51.7% | 0.802 | 7.48 | 15.33 | 0.624 | 0.993 | -7.61 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 95.84 | 46.4% | 0.685 | 9.43 | 10.16 | 0.458 | 0.917 | -10.75 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Khung lớn phải tăng (trend ≥) → 0.425 | 112.15 | 52.1% | 0.801 | 7.55 | 14.85 | 0.561 | 1.078 | -8.93 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần R:R (/100) → 33 | 11.92 | 51.1% | 0.085 | 8.49 | 1.4 | 0.082 | 0.087 | -8.89 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 68.2 | 48.8% | 0.554 | 9.32 | 7.32 | 0.515 | 0.6 | -13.85 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 116.3 | 49.4% | 0.755 | 8.62 | 13.49 | 0.675 | 0.849 | -9.48 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Cổng Dow → CHẶT + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Coin phải mạnh hơn BTC trong N ngày → 14 | 64.44 | 47.7% | 0.602 | 8.82 | 7.31 | 0.343 | 0.876 | -14.81 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 64.1 | 45.5% | 0.583 | 10.35 | 6.19 | 0.39 | 0.798 | -3.27 |  |

### Vòng 1045 — ngẫu nhiên nhiều thông số · mốc: tổng 114.47R, win 52.8%, rủi ro tụt vốn 7.8R, lời÷rủi ro 14.68

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cộng thêm ngưỡng điểm khung 1W → -1 | 102.43 | 50.3% | 0.697 | 8.94 | 11.46 | 0.482 | 0.96 | -6.35 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + SL tối đa (% Entry) → 0.425 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 94.58 | 48.1% | 0.606 | 9.88 | 9.57 | 0.518 | 0.709 | -9.73 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 68.78 | 45.1% | 0.517 | 11.05 | 6.22 | 0.411 | 0.639 | -13.82 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần SL (/100) → 9 + Điểm vùng: Fib sóng 4 → 1.56 | 96.89 | 39.7% | 0.323 | 13.23 | 7.32 | 0.278 | 0.36 | -8.47 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần Elliott (/100) → 6 | 114.01 | 52.4% | 0.786 | 8.01 | 14.23 | 0.592 | 1.007 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 110.51 | 50% | 0.757 | 8.5 | 13 | 0.61 | 0.908 | -9.24 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 93.77 | 47.3% | 0.634 | 9.79 | 9.58 | 0.425 | 0.873 | -10.23 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: EMA 21 → 0.875 | 116.33 | 52.1% | 0.808 | 7.94 | 14.65 | 0.665 | 0.963 | -7.61 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Đệm SL riêng khung 1W (ATR) → 0.3 | 55.25 | 41.7% | 0.512 | 11.46 | 4.82 | 0.42 | 0.617 | -8.77 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 75.69 | 44.7% | 0.664 | 9.66 | 7.84 | 0.56 | 0.784 | -6.34 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + SL tối đa (% Entry) → 0.425 + Điểm vùng: POC anchored → 2 | 100.35 | 49.7% | 0.665 | 9.07 | 11.06 | 0.508 | 0.832 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Ngưỡng điểm vào kèo → 74 | 81.19 | 45.2% | 0.556 | 10.61 | 7.65 | 0.422 | 0.679 | -11.05 |  |
