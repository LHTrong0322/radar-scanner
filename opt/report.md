# Tối ưu tự động (chạy liên tục) — vòng 1357

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 15904 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 97.83R | 0.589 | 6.7R | 9.71R | 10.08 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 143 | 53.1% | 120.84R | 0.845 | 5.15R | 7.4R | 16.33 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 26 | 50% | 20.05R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 106 | 54.7% | 93.82R | 19 | 21.1% | -4.19R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 97.83R | 9.71R | 10.08 | 30 | 13.3% | -11.98R |
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

### Vòng 1357 — ngẫu nhiên nhiều thông số · mốc: tổng 120.84R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Đệm SL riêng khung 1W (ATR) → 0.3 | 100.42 | 45% | 0.665 | 9.57 | 10.49 | 0.474 | 0.864 | -12.99 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Mức RSI 30/70 → 1.13 | 120.84 | 53.1% | 0.845 | 7.4 | 16.33 | 0.67 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: EMA 50 → 0.75 + Cộng thêm ngưỡng điểm khung 1D → 7 | 96.93 | 50.7% | 0.673 | 8.35 | 11.61 | 0.581 | 0.773 | -8.98 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Cộng thêm ngưỡng điểm khung 4H → 2 | 113.6 | 52.1% | 0.789 | 7.55 | 15.05 | 0.648 | 0.951 | -12.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 98.33 | 47% | 0.585 | 9.05 | 10.87 | 0.625 | 0.551 | -12.2 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần Entry (/100) → 33 | 116.28 | 51.4% | 0.807 | 7.55 | 15.4 | 0.653 | 0.98 | -11.13 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Mức MACD → 0.875 | 111.35 | 51.4% | 0.784 | 7.55 | 14.75 | 0.636 | 0.946 | -11.13 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 104.53 | 44.3% | 0.571 | 9.65 | 10.83 | 0.521 | 0.618 | -9.35 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 107.63 | 44.6% | 0.641 | 10.93 | 9.85 | 0.695 | 0.592 | -11.09 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: POC anchored → 2 | 100.71 | 48.3% | 0.667 | 8.53 | 11.81 | 0.506 | 0.834 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần SL (/100) → 9 + Điểm vùng: POC anchored → 2 | 106.58 | 48.4% | 0.688 | 8.71 | 12.24 | 0.562 | 0.825 | -11.98 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 | 99.58 | 43% | 0.579 | 10.52 | 9.47 | 0.483 | 0.662 | -10.79 |  |

### Vòng 1356 — ngẫu nhiên nhiều thông số · mốc: tổng 120.84R, win 53.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.42

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 111.67 | 46.6% | 0.685 | 9.62 | 11.61 | 0.631 | 0.753 | -11.17 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + R:R tối thiểu riêng khung 4H → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 68.38 | 39.3% | 0.32 | 14.27 | 4.79 | 0.337 | 0.302 | -4.37 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: BOS → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 61.99 | 41.4% | 0.534 | 11.49 | 5.4 | 0.376 | 0.71 | -5.87 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 1W → 2 | 107.98 | 50.4% | 0.766 | 7.59 | 14.23 | 0.6 | 0.934 | -13.61 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 103.58 | 51% | 0.695 | 8.04 | 12.88 | 0.652 | 0.744 | -12.42 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần SL (/100) → 7 | 110.9 | 46.8% | 0.641 | 9.11 | 12.17 | 0.599 | 0.68 | -8.93 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Entry (/100) → 33 + Số TP tối đa → 1 | 101.67 | 43.7% | 0.673 | 10.3 | 9.87 | 0.476 | 0.874 | -12.22 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Cổng Dow → TẮT | 123.19 | 43.5% | 0.595 | 11.13 | 11.07 | 0.522 | 0.666 | -18.1 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Mức MACD → 0.875 + R:R tối thiểu riêng khung 4H → 2 | 33.68 | 34.3% | 0.192 | 16.65 | 2.02 | 0.285 | 0.087 | -0.71 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 1D → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu tới TP1 → 2.63 | 155.09 | 39.3% | 0.641 | 15.76 | 9.84 | 0.641 | 0.64 | -19.01 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Break mây Ichimoku → 1 | 99.54 | 46.4% | 0.651 | 9.15 | 10.88 | 0.622 | 0.679 | -10.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Cộng thêm ngưỡng điểm khung 1W → -1 | 102.47 | 48.4% | 0.67 | 8.58 | 11.94 | 0.643 | 0.697 | -12.18 |  |

### Vòng 1355 — ngẫu nhiên nhiều thông số · mốc: tổng 120.84R, win 53.1%, rủi ro tụt vốn 7.32R, lời÷rủi ro 16.51

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + R:R tối thiểu riêng khung 4H → 2 | 131.75 | 42.1% | 0.414 | 11.67 | 11.29 | 0.421 | 0.409 | -6.42 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần R:R (/100) → 33 | 120.84 | 53.1% | 0.845 | 7.32 | 16.51 | 0.67 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + R:R tối thiểu tới TP1 → 2.38 + Cộng điểm phân kỳ dương ẩn → 2.25 + Trọng số phần Divergence (/100) → 12 | 108.02 | 47.3% | 0.655 | 8.71 | 12.4 | 0.539 | 0.767 | -13.47 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Mức MACD → 1.13 | 107.2 | 50% | 0.744 | 8.2 | 13.07 | 0.578 | 0.926 | -9.82 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 106.93 | 45.7% | 0.652 | 10.68 | 10.01 | 0.668 | 0.637 | -11.78 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Entry (/100) → 28 | 66.01 | 43.6% | 0.6 | 9.86 | 6.69 | 0.332 | 0.899 | -6.79 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Khung lớn phải tăng (trend ≥) → 0.425 + Cổng Dow → CHẶT | 82.97 | 51.9% | 0.768 | 7.09 | 11.7 | 0.319 | 1.156 | -13.45 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 105.35 | 49.3% | 0.722 | 8.36 | 12.6 | 0.517 | 0.95 | -12.17 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Coin phải mạnh hơn BTC trong N ngày → 14 | 86.7 | 49.6% | 0.741 | 8.09 | 10.72 | 0.536 | 0.988 | -18.62 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 4H → 2 | 110.99 | 51% | 0.776 | 7.69 | 14.43 | 0.625 | 0.948 | -11.98 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trọng số phần Trend (/100) → 19 | 136.37 | 44.3% | 0.649 | 10.96 | 12.44 | 0.594 | 0.707 | -21.57 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 37.83 | 39.8% | 0.321 | 12.24 | 3.09 | 0.472 | 0.159 | -3.01 |  |

### Vòng 1354 — ngẫu nhiên nhiều thông số · mốc: tổng 120.84R, win 53.1%, rủi ro tụt vốn 7.39R, lời÷rủi ro 16.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: MACD cắt lên Signal → 0.438 | 110.19 | 42.4% | 0.463 | 13.01 | 8.47 | 0.45 | 0.476 | -12.71 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 200 → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 91.2 | 44.2% | 0.559 | 11.62 | 7.85 | 0.583 | 0.539 | -12.9 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Mức RSI 30/70 → 0.875 | 120.55 | 50% | 0.783 | 8.41 | 14.33 | 0.609 | 0.986 | -11.13 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Coin phải mạnh hơn BTC trong N ngày → 14 | 68.35 | 47.7% | 0.639 | 8.64 | 7.91 | 0.466 | 0.843 | -18.26 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 50 → 0.75 | 74.72 | 46.4% | 0.679 | 9.16 | 8.16 | 0.444 | 0.951 | -5.79 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 120.09 | 52.4% | 0.84 | 7.43 | 16.16 | 0.676 | 1.021 | -12.57 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 119.39 | 52.1% | 0.818 | 7.47 | 15.98 | 0.672 | 0.976 | -12.17 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần Momentum (/100) → 21 | 118.96 | 44.3% | 0.522 | 11.11 | 10.71 | 0.515 | 0.528 | -15.8 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + SL tối đa (% Entry) → 0.425 | 117.78 | 51.3% | 0.785 | 8 | 14.72 | 0.61 | 0.965 | -6.21 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần Divergence (/100) → 9 | 119.83 | 52.8% | 0.832 | 7.56 | 15.85 | 0.67 | 1.013 | -12.16 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Mức RSI 30/70 → 1.13 | 105.72 | 40.2% | 0.413 | 15.4 | 6.86 | 0.382 | 0.441 | -4.88 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần R:R (/100) → 28 + Điểm vùng: HVN anchored → 0.313 + Số TP tối đa → 1 | 119.53 | 49.7% | 0.771 | 8.4 | 14.23 | 0.589 | 0.986 | -12.16 |  |

### Vòng 1353 — ngẫu nhiên nhiều thông số · mốc: tổng 120.84R, win 53.1%, rủi ro tụt vốn 7.32R, lời÷rủi ro 16.51

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Fib sóng 4 → 0.938 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN cố định → 0.563 | 121.79 | 41.7% | 0.397 | 12.3 | 9.9 | 0.362 | 0.427 | -8.71 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 104.6 | 51.7% | 0.721 | 8.01 | 13.06 | 0.672 | 0.777 | -11.75 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + R:R tối thiểu tới TP1 → 2.38 | 115.38 | 44.9% | 0.454 | 10.62 | 10.86 | 0.43 | 0.476 | -17.29 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + R:R tối thiểu riêng khung 4H → 2 | 128.02 | 41.9% | 0.409 | 11.94 | 10.72 | 0.387 | 0.428 | -8.71 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Cộng điểm phân kỳ dương ẩn → 2.25 | 110.71 | 50.4% | 0.785 | 8.04 | 13.77 | 0.563 | 1.024 | -12.16 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Break mây Ichimoku → 1 | 107.81 | 49.3% | 0.728 | 8.31 | 12.97 | 0.568 | 0.903 | -12.99 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cổng Dow → TẮT + Cộng thêm ngưỡng điểm khung 1D → 4 | 143.5 | 43.9% | 0.649 | 10.88 | 13.19 | 0.705 | 0.59 | -19.7 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 69.65 | 45.9% | 0.628 | 9.38 | 7.43 | 0.419 | 0.873 | -5.79 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Mức MACD → 1.13 | 70.57 | 45.8% | 0.66 | 9.1 | 7.75 | 0.412 | 0.942 | -5.79 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 116.3 | 52.4% | 0.791 | 7.83 | 14.85 | 0.566 | 1.053 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Ngưỡng điểm vào kèo → 74 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Đệm SL riêng khung 4H (ATR) → 0.3 | 147.87 | 37.3% | 0.475 | 20.02 | 7.39 | 0.345 | 0.607 | -9.31 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Break mây Ichimoku → 1 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: BOS → 0 | 107.42 | 48.7% | 0.716 | 8.45 | 12.71 | 0.543 | 0.904 | -12.22 |  |

### Vòng 1352 — ngẫu nhiên nhiều thông số · mốc: tổng 119.69R, win 52.8%, rủi ro tụt vốn 7.42R, lời÷rủi ro 16.13

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Cộng điểm phân kỳ dương ẩn → 3 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 115.17 | 51% | 0.783 | 7.87 | 14.63 | 0.609 | 0.98 | -12.36 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Số TP tối đa → 1 | 94.64 | 45.6% | 0.644 | 9.81 | 9.65 | 0.466 | 0.85 | -9.31 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần Trend (/100) → 12 + Điểm tối thiểu của vùng đặt SL → 4 | 114.88 | 51% | 0.803 | 7.63 | 15.06 | 0.669 | 0.947 | -9.15 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 130.91 | 43.1% | 0.6 | 11.64 | 11.25 | 0.544 | 0.662 | -17.03 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Cộng thêm ngưỡng điểm khung 4H → -1 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 109.29 | 48.3% | 0.724 | 8.83 | 12.38 | 0.571 | 0.887 | -12.76 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 118.26 | 51.7% | 0.805 | 7.82 | 15.12 | 0.62 | 0.997 | -7.19 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 118.26 | 51.7% | 0.805 | 7.82 | 15.12 | 0.62 | 0.997 | -7.19 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần SL (/100) → 7 + SL tối đa (% Entry) → 0.425 + Khung lớn phải tăng (trend ≥) → 0.375 | 111.24 | 50.3% | 0.767 | 8.38 | 13.27 | 0.561 | 0.994 | -12.36 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Divergence (/100) → 9 | 73.75 | 46.3% | 0.683 | 9.26 | 7.96 | 0.454 | 0.948 | -6.82 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần R:R (/100) → 28 | 112.11 | 50.3% | 0.773 | 7.94 | 14.12 | 0.618 | 0.939 | -10.05 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: HVN cố định → 0.438 | 127.32 | 50% | 0.827 | 8.19 | 15.55 | 0.794 | 0.865 | -12.95 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 116.39 | 49.3% | 0.766 | 8.3 | 14.02 | 0.739 | 0.794 | -13.78 |  |

### Vòng 1351 — ngẫu nhiên nhiều thông số · mốc: tổng 120.84R, win 53.1%, rủi ro tụt vốn 7.39R, lời÷rủi ro 16.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số TP tối đa → 3 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: EMA 50 → 1.13 | 113.71 | 50% | 0.79 | 8.21 | 13.85 | 0.587 | 1.029 | -11.14 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Momentum (/100) → 21 + Số TP tối đa → 1 | 73.62 | 45.9% | 0.675 | 8.99 | 8.19 | 0.444 | 0.949 | -5.79 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 104.6 | 51.7% | 0.721 | 8.02 | 13.04 | 0.672 | 0.777 | -11.92 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Trọng số phần SL (/100) → 7 | 110.83 | 50.7% | 0.815 | 7.76 | 14.28 | 0.57 | 1.083 | -12.19 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Số TP tối đa → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 103.75 | 49.3% | 0.731 | 8.29 | 12.52 | 0.561 | 0.921 | -10.84 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 107.07 | 52.1% | 0.744 | 8.14 | 13.15 | 0.67 | 0.825 | -11.34 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm tối thiểu của vùng đặt SL → 2 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần SL (/100) → 7 | 99.35 | 47.7% | 0.658 | 9.37 | 10.6 | 0.481 | 0.863 | -9.56 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 108.37 | 48.6% | 0.785 | 8.09 | 13.4 | 0.536 | 1.073 | -10.4 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Divergence (/100) → 9 | 118.65 | 53.1% | 0.818 | 7.39 | 16.06 | 0.67 | 0.981 | -9.84 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 78.86 | 45% | 0.657 | 9.43 | 8.36 | 0.632 | 0.685 | -6.19 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: BOS → 2 + Điểm vùng: HVN cố định → 0.438 | 98.9 | 47.8% | 0.738 | 8.66 | 11.42 | 0.554 | 0.928 | -13.14 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: BOS → 2 | 116.04 | 50% | 0.784 | 8.2 | 14.15 | 0.516 | 1.083 | -12.06 |  |

### Vòng 1350 — ngẫu nhiên nhiều thông số · mốc: tổng 119.56R, win 52.4%, rủi ro tụt vốn 7.44R, lời÷rủi ro 16.07

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Số TP tối đa → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 85.01 | 42.4% | 0.494 | 13.26 | 6.41 | 0.463 | 0.524 | -10.9 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cộng thêm ngưỡng điểm khung 1D → 4 + Số TP tối đa → 1 | 111.57 | 50.3% | 0.759 | 8.38 | 13.31 | 0.561 | 0.989 | -14.15 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Cộng thêm ngưỡng điểm khung 4H → -1 | 102.16 | 46.5% | 0.651 | 9.22 | 11.08 | 0.461 | 0.848 | -14.77 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Khung lớn phải tăng (trend ≥) → 0.425 | 107.76 | 50% | 0.781 | 8.07 | 13.35 | 0.512 | 1.083 | -13.21 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: BOS → 0 + R:R tối thiểu riêng khung 4H → 2 | 124.8 | 41.4% | 0.397 | 12.43 | 10.04 | 0.372 | 0.419 | -10.2 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 62.31 | 40.3% | 0.524 | 11.83 | 5.27 | 0.333 | 0.682 | -5.07 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: EMA 50 → 0.75 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Biên mây Ichimoku → 1.05 | 118.36 | 50% | 0.74 | 8.75 | 13.53 | 0.563 | 0.936 | -12.92 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Khung lớn phải tăng (trend ≥) → 0.425 | 99.57 | 44.7% | 0.706 | 9.8 | 10.16 | 0.427 | 0.989 | -15.07 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Mức MACD → 0.875 | 107.82 | 39.5% | 0.418 | 15.19 | 7.1 | 0.408 | 0.428 | -5.64 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Số TP tối đa → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 115.89 | 51.4% | 0.805 | 7.92 | 14.63 | 0.62 | 1.011 | -11.86 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 115.86 | 51.8% | 0.822 | 7.71 | 15.03 | 0.635 | 1.028 | -11.86 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 113.84 | 51.4% | 0.78 | 7.76 | 14.67 | 0.615 | 0.963 | -13.6 |  |

### Vòng 1349 — ngẫu nhiên nhiều thông số · mốc: tổng 115.92R, win 52.5%, rủi ro tụt vốn 7.54R, lời÷rủi ro 15.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Mức MACD → 1.13 + Trọng số phần Entry (/100) → 33 | 106.28 | 48.6% | 0.728 | 8.78 | 12.1 | 0.512 | 0.976 | -13.12 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Số TP tối đa → 1 | 81.62 | 50.9% | 0.729 | 7.55 | 10.81 | 0.263 | 1.118 | -15.27 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Mức MACD → 1.13 | 113.83 | 51% | 0.774 | 8.07 | 14.11 | 0.548 | 1.03 | -8.87 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + SL tối đa (% Entry) → 0.425 | 112.7 | 50.7% | 0.794 | 7.8 | 14.45 | 0.613 | 0.985 | -13.18 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 95.34 | 48.4% | 0.769 | 8.43 | 11.31 | 0.677 | 0.876 | -19.65 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.563 | 105.15 | 47.2% | 0.73 | 8.9 | 11.81 | 0.45 | 1.018 | -15.03 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Lệnh chờ hết hạn sau (nến) → 6 | 96.23 | 49.6% | 0.724 | 8.23 | 11.69 | 0.555 | 0.923 | -10.51 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1W (ATR) → 0.3 | 90.65 | 37.4% | 0.368 | 17.23 | 5.26 | 0.331 | 0.399 | -10.35 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Cộng thêm ngưỡng điểm khung 1W → 2 | 116.26 | 50% | 0.83 | 7.73 | 15.04 | 0.621 | 1.073 | -11.84 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib sóng 4 → 0.938 | 98.01 | 50.4% | 0.695 | 8.44 | 11.61 | 0.6 | 0.797 | -12.07 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức RSI 30/70 → 0.875 | 182.57 | 39.4% | 0.576 | 18 | 10.14 | 0.447 | 0.702 | -15.68 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: EMA 50 → 0.75 | 92.89 | 49.2% | 0.704 | 8.39 | 11.07 | 0.516 | 0.916 | -12.36 |  |

### Vòng 1348 — ngẫu nhiên nhiều thông số · mốc: tổng 120.38R, win 53.1%, rủi ro tụt vốn 7.37R, lời÷rủi ro 16.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 104.03 | 47.1% | 0.754 | 8.77 | 11.86 | 0.483 | 1.067 | -12.42 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 + Số TP tối đa → 3 | 132.69 | 43.9% | 0.413 | 11.79 | 11.25 | 0.364 | 0.456 | -9.2 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm tối thiểu của vùng đặt SL → 4 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 98.8 | 48.3% | 0.672 | 8.87 | 11.14 | 0.543 | 0.814 | -12.12 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Entry (/100) → 33 | 116.32 | 51.7% | 0.813 | 7.57 | 15.37 | 0.654 | 0.995 | -11.28 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 98.76 | 48% | 0.658 | 9.4 | 10.51 | 0.451 | 0.908 | -11.61 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + R:R tối thiểu tới TP1 → 2.38 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 66.5 | 43.1% | 0.512 | 10.98 | 6.06 | 0.443 | 0.591 | -10.72 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Khung lớn phải tăng (trend ≥) → 0.425 | 107.39 | 50.7% | 0.778 | 7.87 | 13.65 | 0.573 | 1.008 | -10.69 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: BOS → 0 | 28.86 | 56.3% | 0.183 | 5.93 | 4.87 | 0.194 | 0.171 | -8.41 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 124.74 | 41.4% | 0.377 | 12.43 | 10.04 | 0.396 | 0.361 | -10.25 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 88.38 | 50.4% | 0.755 | 8 | 11.05 | 0.545 | 1.018 | -19.64 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Cổng Dow → CHẶT | 84.1 | 52.3% | 0.758 | 7.51 | 11.2 | 0.327 | 1.137 | -15.27 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 1D → 4 | 112.88 | 40.2% | 0.444 | 14.85 | 7.6 | 0.386 | 0.5 | -5.86 |  |
