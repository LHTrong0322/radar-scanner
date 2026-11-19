# Tối ưu tự động (chạy liên tục) — vòng 852

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 9879 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 94.27R | 0.578 | 5.7R | 9.84R | 9.58 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 145 | 53.1% | 118.93R | 0.82 | 5.09R | 7.29R | 16.31 | 28 | 17.9% | -9.92R | -0.354 | 10.54R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.77R | 2 | 0% | -2.3R |
| 4H | 107 | 54.2% | 91.73R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 94.27R | 9.84R | 9.58 | 31 | 12.9% | -13R |
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

### Vòng 852 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.29R, lời÷rủi ro 16.31

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Số TP tối đa → 2 + Trọng số phần Trend (/100) → 19 | 118.72 | 52.4% | 0.83 | 6.97 | 17.03 | 0.679 | 0.992 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 116.7 | 47.3% | 0.699 | 10.04 | 11.62 | 0.655 | 0.739 | -4.31 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 115.18 | 51.4% | 0.789 | 7.68 | 15 | 0.619 | 0.979 | -10.03 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + R:R tối thiểu riêng khung 1W → 2 | 110.74 | 52.1% | 0.758 | 7.68 | 14.42 | 0.649 | 0.868 | -10.96 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 112.55 | 52.7% | 0.76 | 7.91 | 14.23 | 0.635 | 0.896 | -8.61 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Trọng số phần Trend (/100) → 19 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.438 | 90.07 | 45.7% | 0.653 | 9.43 | 9.55 | 0.338 | 0.925 | -9.38 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Cổng Dow → TẮT | 89.89 | 40.3% | 0.407 | 14.21 | 6.33 | 0.355 | 0.466 | -16.71 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 3 + Xác nhận khung nhỏ (A2) → W | 67.03 | 36% | 0.335 | 17.06 | 3.93 | 0.266 | 0.381 | -5.81 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 108.97 | 50% | 0.726 | 8.19 | 13.31 | 0.598 | 0.848 | -9.99 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 118.31 | 50.3% | 0.773 | 8.12 | 14.57 | 0.595 | 0.973 | -10.96 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cộng điểm phân kỳ dương ẩn → 2.25 | 117.92 | 52.7% | 0.808 | 7.52 | 15.68 | 0.614 | 1.03 | -9.92 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu tới TP1 → 2.38 | 62.21 | 42.3% | 0.479 | 10.98 | 5.67 | 0.468 | 0.491 | -9.36 |  |

### Vòng 851 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.35R, lời÷rủi ro 16.18

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 113.68 | 50.7% | 0.768 | 7.98 | 14.25 | 0.571 | 0.993 | -8.61 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Momentum (/100) → 25 + Đệm SL riêng khung 1D (ATR) → 0.3 | 112.14 | 46.3% | 0.692 | 10.32 | 10.87 | 0.693 | 0.691 | -6.61 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: HVN anchored → 0.188 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 125 | 50% | 0.801 | 8.06 | 15.51 | 0.757 | 0.853 | -10.5 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần Trend (/100) → 19 + Trọng số phần Elliott (/100) → 10 | 76.7 | 44.8% | 0.465 | 10.2 | 7.52 | 0.397 | 0.535 | -9.06 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Xác nhận khung nhỏ (A2) → W + Cổng Dow → TẮT | 55.31 | 36.2% | 0.218 | 22.38 | 2.47 | 0.184 | 0.247 | -23.95 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Cộng thêm ngưỡng điểm khung 1W → 2 + Số TP tối đa → 2 | 86.58 | 50% | 0.71 | 7.94 | 10.9 | 0.553 | 0.883 | -16.39 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Xác nhận khung nhỏ (A2) → W + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: EMA 200 → 3 | 57.82 | 37.9% | 0.238 | 18.52 | 3.12 | 0.19 | 0.281 | -5.57 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: HVN cố định → 0.438 | 76.41 | 45.3% | 0.475 | 10.2 | 7.49 | 0.425 | 0.524 | -8.23 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Mức MACD → 1.13 | 112.63 | 52% | 0.751 | 7.58 | 14.86 | 0.574 | 0.953 | -9.92 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: EMA 200 → 3 + Trọng số phần SL (/100) → 7 | 108.3 | 50% | 0.742 | 7.8 | 13.88 | 0.537 | 0.958 | -10.91 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Elliott (/100) → 10 | 106.33 | 44.3% | 0.637 | 9.2 | 11.56 | 0.639 | 0.634 | -3.23 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 114.4 | 51.4% | 0.773 | 7.66 | 14.93 | 0.581 | 0.992 | -9.92 |  |

### Vòng 850 — ngẫu nhiên nhiều thông số · mốc: tổng 117.94R, win 52.8%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.25

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cổng Dow → CHẶT | 42.04 | 45.7% | 0.601 | 7.64 | 5.5 | 0.472 | 0.763 | -3.87 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Cộng thêm ngưỡng điểm khung 1D → 5 + Đệm SL riêng khung 1D (ATR) → 0.3 | 115.69 | 47.5% | 0.714 | 9.7 | 11.93 | 0.677 | 0.751 | -4.46 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: EMA 21 → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 36.36 | 60% | 0.227 | 4.76 | 7.64 | 0.234 | 0.221 | -6.16 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 124.23 | 49.7% | 0.801 | 8.13 | 15.28 | 0.757 | 0.854 | -7.39 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 107.06 | 40.9% | 0.356 | 12.31 | 8.7 | 0.316 | 0.387 | -4.35 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.563 | 148.72 | 38.9% | 0.531 | 18.14 | 8.2 | 0.347 | 0.718 | -9.65 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Trọng số phần Elliott (/100) → 6 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 117.49 | 52.4% | 0.822 | 7.15 | 16.43 | 0.631 | 1.038 | -8.12 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Trọng số phần Momentum (/100) → 21 | 105.03 | 50.3% | 0.705 | 8.09 | 12.98 | 0.546 | 0.879 | -8.13 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 134.77 | 38% | 0.47 | 19.06 | 7.07 | 0.317 | 0.628 | -10.82 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 135.18 | 46.7% | 0.601 | 9.61 | 14.07 | 0.628 | 0.572 | -9.41 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Đệm SL riêng khung 4H (ATR) → 0.3 | 147.82 | 38.8% | 0.526 | 18.73 | 7.89 | 0.347 | 0.706 | -6.31 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + R:R tối thiểu riêng khung 1D → 2 | 112.27 | 47.6% | 0.668 | 8.43 | 13.32 | 0.608 | 0.73 | -8.08 |  |

### Vòng 849 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.38R, lời÷rủi ro 16.12

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Mức MACD → 1.13 | 107.7 | 50.3% | 0.733 | 7.88 | 13.67 | 0.576 | 0.915 | -8.9 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 63.17 | 47.4% | 0.461 | 9.49 | 6.66 | 0.358 | 0.549 | -15.51 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Trọng số phần Momentum (/100) → 25 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Divergence (/100) → 12 | 102.79 | 51% | 0.709 | 7.83 | 13.13 | 0.669 | 0.753 | -9.72 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Khung lớn phải tăng (trend ≥) → 0.375 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng thêm ngưỡng điểm khung 1D → 3 | 100.69 | 45% | 0.589 | 11.57 | 8.7 | 0.63 | 0.554 | -3.45 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC anchored → 2 | 139.08 | 37.9% | 0.488 | 18.67 | 7.45 | 0.277 | 0.703 | -7.93 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Trọng số phần Trend (/100) → 19 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 107.67 | 51.7% | 0.723 | 7.88 | 13.66 | 0.56 | 0.901 | -8.63 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Mức RSI 30/70 → 0.875 | 163.47 | 39.8% | 0.538 | 18.49 | 8.84 | 0.347 | 0.721 | -11.28 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Lệnh chờ hết hạn sau (nến) → 6 | 27.99 | 59% | 0.194 | 5.78 | 4.84 | 0.244 | 0.145 | -8.5 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: POC anchored → 2 | 105.05 | 50.3% | 0.696 | 8.13 | 12.92 | 0.546 | 0.855 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: EMA 50 → 1.13 | 114.57 | 50.7% | 0.785 | 7.81 | 14.67 | 0.598 | 0.999 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: EMA 50 → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 90.74 | 45.9% | 0.613 | 10 | 9.07 | 0.334 | 0.916 | -6.93 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + R:R tối thiểu riêng khung 1D → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 | 106.25 | 41.9% | 0.556 | 12.13 | 8.76 | 0.582 | 0.536 | -4.52 |  |

### Vòng 848 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.33R, lời÷rủi ro 16.23

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Cộng thêm ngưỡng điểm khung 1D → 3 + Lệnh chờ hết hạn sau (nến) → 8 | 118.38 | 51.2% | 0.74 | 7.46 | 15.87 | 0.596 | 0.907 | -11.51 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Break mây Ichimoku → 3 | 110.55 | 50% | 0.682 | 9.1 | 12.15 | 0.543 | 0.84 | -9.77 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Khung lớn phải tăng (trend ≥) → 0.375 | 25.8 | 56.3% | 0.179 | 6.46 | 3.99 | 0.22 | 0.151 | -10.86 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Số TP tối đa → 2 | 114.49 | 52.7% | 0.763 | 7.72 | 14.83 | 0.6 | 0.949 | -10.03 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Mức RSI 30/70 → 0.875 + Đệm SL riêng khung 1W (ATR) → 0.3 | 103.33 | 45.3% | 0.65 | 10.23 | 10.1 | 0.437 | 0.871 | -13.95 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Elliott (/100) → 10 + Cộng thêm ngưỡng điểm khung 4H → 2 | 81.8 | 52.3% | 0.737 | 6.84 | 11.96 | 0.375 | 1.056 | -12.01 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 70.18 | 46.7% | 0.668 | 8.44 | 8.32 | 0.385 | 0.969 | -8.13 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + R:R tối thiểu tới TP1 → 2.38 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 90.61 | 45.8% | 0.539 | 9.31 | 9.73 | 0.508 | 0.57 | -12.98 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + % chốt ở TP1 → 0.307 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 116.57 | 50.7% | 0.798 | 7.68 | 15.18 | 0.675 | 0.919 | -8.98 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: EMA 21 → 1.13 | 59.37 | 42.9% | 0.565 | 9.29 | 6.39 | 0.336 | 0.818 | -7.71 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: EMA 200 → 1 | 95.47 | 49.6% | 0.677 | 8.75 | 10.91 | 0.599 | 0.774 | -8.67 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + R:R tối thiểu riêng khung 1W → 2 | 108.01 | 50.7% | 0.74 | 7.91 | 13.65 | 0.631 | 0.848 | -10.96 |  |

### Vòng 847 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.35R, lời÷rủi ro 16.18

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: EMA 200 → 3 | 108.74 | 50.7% | 0.755 | 7.78 | 13.98 | 0.563 | 0.952 | -11.02 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 1W (ATR) → 0.3 | 89.07 | 47.6% | 0.707 | 9.33 | 9.55 | 0.486 | 0.958 | -16.11 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Cộng điểm phân kỳ dương ẩn → 3 | 117.09 | 51.7% | 0.786 | 7.5 | 15.61 | 0.608 | 0.986 | -9.92 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: EMA 50 → 0.75 | 113.2 | 52.4% | 0.792 | 7.31 | 15.49 | 0.589 | 1.003 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm tối thiểu của vùng đặt SL → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: EMA 21 → 0.875 | 97.23 | 49.3% | 0.694 | 8.64 | 11.25 | 0.519 | 0.88 | -10.49 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 100.33 | 45.1% | 0.707 | 9.69 | 10.35 | 0.474 | 0.933 | -13.95 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Fib sóng 4 → 0.938 | 117.18 | 52.8% | 0.814 | 7.43 | 15.77 | 0.621 | 1.03 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 114.74 | 53% | 0.77 | 7.61 | 15.08 | 0.596 | 0.972 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + % chốt ở TP1 → 0.307 + Trọng số phần R:R (/100) → 33 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 124.78 | 44.3% | 0.531 | 11.12 | 11.22 | 0.552 | 0.51 | -11.9 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 77.27 | 47.2% | 0.715 | 8.32 | 9.29 | 0.48 | 0.978 | -5.45 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 129.01 | 45.3% | 0.556 | 11.05 | 11.68 | 0.593 | 0.518 | -11.71 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Fib sóng 4 → 1.56 + Đệm SL riêng khung 1D (ATR) → 0.3 | 116.83 | 47.3% | 0.7 | 9.82 | 11.9 | 0.655 | 0.741 | -5.32 |  |

### Vòng 846 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.35R, lời÷rủi ro 16.18

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 1D (ATR) → 0.3 | 124.33 | 49.4% | 0.706 | 9.61 | 12.94 | 0.687 | 0.726 | -6.03 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 116 | 51.7% | 0.779 | 7.51 | 15.45 | 0.635 | 0.932 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Số TP tối đa → 2 + % chốt ở TP1 → 0.287 | 120.67 | 51.6% | 0.759 | 8.09 | 14.92 | 0.583 | 0.967 | -9.9 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần SL (/100) → 9 | 104.33 | 49.3% | 0.686 | 9.27 | 11.25 | 0.524 | 0.877 | -7.34 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Mức MACD → 0.875 + Trọng số phần R:R (/100) → 28 | 111.5 | 51.8% | 0.791 | 7.57 | 14.73 | 0.626 | 0.968 | -9.92 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Khung lớn phải tăng (trend ≥) → 0.375 + Coin phải mạnh hơn BTC trong N ngày → 14 + Số TP tối đa → 2 | 75.79 | 41.1% | 0.433 | 13.07 | 5.8 | 0.432 | 0.435 | -24.21 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 4H → -1 | 103.49 | 39.5% | 0.404 | 16.17 | 6.4 | 0.366 | 0.439 | -2.7 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 115.74 | 52.1% | 0.804 | 7.5 | 15.43 | 0.616 | 1.014 | -9.75 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Break mây Ichimoku → 1 | 93.38 | 47.8% | 0.587 | 8.79 | 10.62 | 0.484 | 0.682 | -9.52 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 4H → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 36.63 | 59.2% | 0.217 | 6.87 | 5.33 | 0.28 | 0.168 | -8.17 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu tới TP1 → 2.38 | 105.5 | 42.2% | 0.455 | 12.54 | 8.41 | 0.497 | 0.418 | -20.22 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Coin phải mạnh hơn BTC trong N ngày → 14 | 86.33 | 49.6% | 0.751 | 7.65 | 11.28 | 0.57 | 0.955 | -16.39 |  |

### Vòng 845 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Entry (/100) → 28 | 30.71 | 58.3% | 0.197 | 5.62 | 5.46 | 0.212 | 0.183 | -9.5 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 4H → 2 + Điểm tối thiểu của vùng đặt SL → 4 + Cộng thêm ngưỡng điểm khung 4H → -1 | 82.91 | 40.5% | 0.32 | 12.38 | 6.7 | 0.283 | 0.347 | -19.96 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần Momentum (/100) → 25 | 116.46 | 51.7% | 0.803 | 7.5 | 15.53 | 0.64 | 0.982 | -8.61 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: HVN cố định → 0.438 + Đệm SL riêng khung 1W (ATR) → 0.3 | 89.92 | 45.3% | 0.656 | 9.43 | 9.54 | 0.338 | 0.935 | -9.38 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 87.59 | 50% | 0.755 | 7.73 | 11.33 | 0.553 | 0.996 | -16.39 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số TP tối đa → 2 | 27.46 | 56.8% | 0.17 | 6 | 4.58 | 0.153 | 0.186 | -9.97 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: POC anchored → 4 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 96 | 45.6% | 0.644 | 9.37 | 10.25 | 0.517 | 0.766 | -3.23 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + % chốt ở TP1 → 0.287 + Số TP tối đa → 2 + Trọng số phần Entry (/100) → 28 | 117.35 | 50.9% | 0.738 | 8.23 | 14.26 | 0.6 | 0.91 | -4.9 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL riêng khung 1D (ATR) → 0.3 | 102.98 | 46.1% | 0.624 | 10.84 | 9.5 | 0.675 | 0.578 | -3.69 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 113.49 | 40.2% | 0.383 | 15.42 | 7.36 | 0.376 | 0.39 | -4.75 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Khung lớn phải tăng (trend ≥) → 0.375 | 109.9 | 48.9% | 0.802 | 8.35 | 13.16 | 0.582 | 1.054 | -9.17 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Cộng thêm ngưỡng điểm khung 1D → 5 | 90.97 | 45.2% | 0.623 | 9.21 | 9.88 | 0.514 | 0.749 | -7.08 |  |

### Vòng 844 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.35R, lời÷rủi ro 16.18

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 | 79.37 | 45.4% | 0.487 | 10.86 | 7.31 | 0.382 | 0.591 | -8.79 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 117.28 | 52.1% | 0.803 | 7.44 | 15.76 | 0.642 | 0.979 | -10.03 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 115.74 | 52.1% | 0.804 | 7.5 | 15.43 | 0.616 | 1.014 | -9.74 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Coin phải mạnh hơn BTC trong N ngày → 14 | 83.86 | 50.4% | 0.705 | 7.44 | 11.27 | 0.558 | 0.875 | -16.73 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Fib sóng 4 → 1.56 + Khung lớn phải tăng (trend ≥) → 0.375 | 115.46 | 50.6% | 0.722 | 8.43 | 13.7 | 0.588 | 0.885 | -5.1 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 110.85 | 49.7% | 0.775 | 7.83 | 14.16 | 0.605 | 0.958 | -11.89 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Trọng số phần Divergence (/100) → 12 | 118.93 | 53.1% | 0.82 | 7.35 | 16.18 | 0.635 | 1.03 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Cộng thêm ngưỡng điểm khung 1W → 2 | 116.51 | 50.7% | 0.798 | 7.74 | 15.05 | 0.673 | 0.92 | -8.97 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: EMA 200 → 3 + Điểm vùng: POC volume profile cố định → 0.688 | 108.18 | 50.7% | 0.751 | 7.43 | 14.56 | 0.542 | 0.972 | -11.96 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Đệm SL riêng khung 1W (ATR) → 0.3 | 107.05 | 46.3% | 0.669 | 9.91 | 10.8 | 0.534 | 0.794 | -8.7 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Lệnh chờ hết hạn sau (nến) → 8 + SL tối đa (% Entry) → 0.425 + Điểm vùng: POC volume profile cố định → 0.813 | 121.76 | 48.5% | 0.729 | 8.79 | 13.85 | 0.692 | 0.774 | -11.07 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 118.28 | 50.3% | 0.773 | 8.04 | 14.71 | 0.594 | 0.974 | -10.95 |  |

### Vòng 843 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.07

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 85.41 | 49% | 0.597 | 8.57 | 9.97 | 0.498 | 0.713 | -10.28 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 116.97 | 38.6% | 0.532 | 16.97 | 6.89 | 0.413 | 0.638 | -19.76 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm tối thiểu của vùng đặt SL → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 99.04 | 50% | 0.688 | 8.34 | 11.88 | 0.484 | 0.916 | -10.47 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 134.5 | 38% | 0.482 | 18.81 | 7.15 | 0.293 | 0.667 | -13.44 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Fib sóng 4 → 1.56 | 116.12 | 51.7% | 0.769 | 7.87 | 14.75 | 0.568 | 1.008 | -8.9 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần SL (/100) → 9 + % chốt ở TP1 → 0.307 + R:R tối thiểu tới TP1 → 2.63 | 179.09 | 40.8% | 0.671 | 16.09 | 11.13 | 0.484 | 0.867 | -8.4 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Lệnh chờ hết hạn sau (nến) → 6 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 89.6 | 50.8% | 0.679 | 8.43 | 10.63 | 0.631 | 0.733 | -8.78 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Cổng Dow → TẮT | 132.3 | 43.5% | 0.618 | 11.59 | 11.42 | 0.535 | 0.703 | -19.53 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Break mây Ichimoku → 3 + Số TP tối đa → 2 | 96.36 | 49.3% | 0.709 | 8.73 | 11.04 | 0.517 | 0.911 | -10.38 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 114.74 | 53% | 0.77 | 7.5 | 15.3 | 0.596 | 0.972 | -9.92 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Cộng thêm ngưỡng điểm khung 1W → -1 | 106.82 | 48.4% | 0.68 | 8.26 | 12.93 | 0.553 | 0.83 | -11.51 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + SL tối đa (% Entry) → 0.425 + Điểm vùng: MACD cắt lên Signal → 0.563 | 123.99 | 49.7% | 0.79 | 8.29 | 14.96 | 0.757 | 0.827 | -10.5 |  |
