# Tối ưu tự động (chạy liên tục) — vòng 1471

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 17272 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 165 | 46.7% | 100.54R | 0.609 | 6.7R | 9.76R | 10.30 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 142 | 52.1% | 118.12R | 0.832 | 5.15R | 7.46R | 15.83 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

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
| Bot thật | 165 | 46.7% | 100.54R | 9.76R | 10.30 | 30 | 13.3% | -11.98R |
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

### Vòng 1471 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 15.83

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Số TP tối đa → 3 | 117.34 | 51.8% | 0.832 | 7.56 | 15.52 | 0.695 | 0.984 | -11.13 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Elliott (/100) → 6 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN cố định → 0.438 | 124.37 | 41.2% | 0.4 | 12.03 | 10.34 | 0.383 | 0.415 | -12.11 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 28.33 | 56.3% | 0.179 | 6.04 | 4.69 | 0.242 | 0.121 | -7.17 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Cộng thêm ngưỡng điểm khung 1D → 7 + Trọng số phần Momentum (/100) → 21 | 113.15 | 51.4% | 0.797 | 7.81 | 14.49 | 0.596 | 1.029 | -9.21 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 115.9 | 50.7% | 0.816 | 7.77 | 14.92 | 0.661 | 0.99 | -11.13 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + R:R tối thiểu riêng khung 1D → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 108.66 | 44.8% | 0.667 | 9.26 | 11.73 | 0.67 | 0.664 | -7.31 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 111.07 | 50.7% | 0.761 | 7.89 | 14.08 | 0.591 | 0.956 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Trend (/100) → 12 | 106.52 | 47.2% | 0.67 | 9.13 | 11.67 | 0.566 | 0.784 | -10.88 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Trọng số phần Momentum (/100) → 25 + Cộng điểm phân kỳ dương ẩn → 3 | 116.65 | 51.4% | 0.821 | 7.64 | 15.27 | 0.656 | 1.012 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: EMA 200 → 3 | 81.67 | 44.4% | 0.575 | 10.62 | 7.69 | 0.375 | 0.764 | -13 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: BOS → 0 | 116.77 | 38.3% | 0.392 | 18.64 | 6.26 | 0.41 | 0.375 | -12.33 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Cổng Dow → TẮT + Điểm vùng: BOS → 2 | 134.56 | 44% | 0.644 | 11.25 | 11.96 | 0.591 | 0.699 | -17.09 |  |

### Vòng 1470 — ngẫu nhiên nhiều thông số · mốc: tổng 105.38R, win 52.3%, rủi ro tụt vốn 7.64R, lời÷rủi ro 13.79

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Mức MACD → 0.875 | 96.93 | 49.3% | 0.723 | 8.02 | 12.09 | 0.731 | 0.716 | -8.26 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 106.68 | 51.1% | 0.814 | 7.85 | 13.59 | 0.651 | 0.98 | -9.21 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 91.34 | 47.3% | 0.626 | 9.54 | 9.57 | 0.707 | 0.549 | -7.53 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: EMA 21 → 1.13 + Cộng điểm phân kỳ dương ẩn → 3 | 91.82 | 47.8% | 0.665 | 8.98 | 10.22 | 0.554 | 0.791 | -6.68 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Entry (/100) → 28 + Điểm vùng: HVN cố định → 0.563 | 72.78 | 43.8% | 0.601 | 10.36 | 7.03 | 0.479 | 0.753 | -4.35 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Cộng thêm ngưỡng điểm khung 1W → -1 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: Mức MACD → 1.13 | 102.49 | 50% | 0.776 | 8.19 | 12.51 | 0.662 | 0.902 | -9.27 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + R:R tối thiểu riêng khung 1W → 2 | 97.47 | 39% | 0.404 | 15.27 | 6.38 | 0.396 | 0.412 | -9.86 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: EMA 21 → 1.13 + SL tối đa (% Entry) → 0.425 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 114.51 | 50% | 0.784 | 8.56 | 13.38 | 0.895 | 0.677 | -5.89 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Số TP tối đa → 1 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 169.14 | 39.9% | 0.62 | 16.59 | 10.2 | 0.6 | 0.64 | -9.2 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: EMA 21 → 1.13 | 95.58 | 49.6% | 0.741 | 8.02 | 11.92 | 0.657 | 0.826 | -8.25 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 104.63 | 51.9% | 0.811 | 7.88 | 13.28 | 0.717 | 0.91 | -7.96 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 | 104.32 | 51.6% | 0.815 | 7.73 | 13.5 | 0.695 | 0.947 | -9.27 |  |

### Vòng 1469 — ngẫu nhiên nhiều thông số · mốc: tổng 116.91R, win 51.8%, rủi ro tụt vốn 7.78R, lời÷rủi ro 15.03

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Lệnh chờ hết hạn sau (nến) → 8 | 93.34 | 46.2% | 0.644 | 8.94 | 10.44 | 0.432 | 0.883 | -14.17 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 116.9 | 51.8% | 0.829 | 7.68 | 15.22 | 0.656 | 1.032 | -8.76 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Số TP tối đa → 1 | 116.91 | 51.8% | 0.829 | 7.78 | 15.03 | 0.656 | 1.032 | -8.76 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 73.61 | 42.5% | 0.613 | 10.47 | 7.03 | 0.414 | 0.849 | -5.65 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần Entry (/100) → 33 | 94.11 | 48.3% | 0.658 | 8.66 | 10.87 | 0.615 | 0.707 | -8.96 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: EMA 200 → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 67.41 | 42.3% | 0.519 | 10.2 | 6.61 | 0.547 | 0.486 | -9.62 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần Entry (/100) → 33 | 104.18 | 48.4% | 0.681 | 8.9 | 11.71 | 0.591 | 0.79 | -5.54 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: EMA 50 → 0.75 | 112.43 | 51.1% | 0.797 | 7.81 | 14.4 | 0.598 | 1.024 | -9.78 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + R:R tối thiểu tới TP1 → 2.38 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần R:R (/100) → 33 | 85.98 | 42.7% | 0.465 | 12.78 | 6.73 | 0.525 | 0.415 | -10.45 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm tối thiểu của vùng đặt SL → 4 | 110.43 | 46.4% | 0.722 | 8.84 | 12.49 | 0.598 | 0.861 | -10.05 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Trọng số phần SL (/100) → 7 | 115.45 | 51.4% | 0.825 | 7.28 | 15.86 | 0.65 | 1.026 | -9.78 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Trend (/100) → 19 | 116.91 | 51.8% | 0.829 | 7.78 | 15.03 | 0.656 | 1.032 | -9.78 |  |

### Vòng 1468 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 15.83

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: EMA 50 → 1.13 | 115.08 | 50% | 0.81 | 7.97 | 14.44 | 0.629 | 1.025 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 110.58 | 49% | 0.752 | 8.39 | 13.18 | 0.538 | 0.988 | -11.04 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Khung lớn phải tăng (trend ≥) → 0.375 | 38.81 | 40.7% | 0.426 | 9.79 | 3.96 | 0.363 | 0.504 | -5.51 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần Elliott (/100) → 6 + R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Trend (/100) → 19 | 133.06 | 41.7% | 0.417 | 12 | 11.09 | 0.43 | 0.406 | -6.45 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Break mây Ichimoku → 3 | 108.72 | 48.4% | 0.684 | 8.89 | 12.23 | 0.562 | 0.82 | -11.9 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: HVN anchored → 0.188 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 114.08 | 48% | 0.751 | 8.58 | 13.3 | 0.597 | 0.921 | -12.55 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.313 | 176.35 | 37.8% | 0.551 | 17.96 | 9.82 | 0.564 | 0.539 | -10.97 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Momentum (/100) → 21 | 83.79 | 45.8% | 0.71 | 9.09 | 9.22 | 0.464 | 0.991 | -12.15 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: HVN anchored → 0.188 | 118.12 | 52.1% | 0.832 | 7.46 | 15.83 | 0.656 | 1.034 | -12.16 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: BOS → 2 | 114.92 | 50.3% | 0.793 | 7.73 | 14.87 | 0.65 | 0.95 | -10.74 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 38.92 | 41.6% | 0.437 | 9.53 | 4.08 | 0.362 | 0.525 | -5.18 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Coin phải mạnh hơn BTC trong N ngày → 14 | 86.12 | 49.1% | 0.742 | 8.19 | 10.52 | 0.552 | 0.976 | -18.62 |  |

### Vòng 1467 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.53R, lời÷rủi ro 15.69

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Cộng thêm ngưỡng điểm khung 1D → 4 + Trọng số phần Trend (/100) → 19 + Trọng số phần Momentum (/100) → 25 | 117.66 | 51.7% | 0.823 | 7.57 | 15.54 | 0.656 | 1.012 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Khung lớn phải tăng (trend ≥) → 0.375 | 107.08 | 49.3% | 0.754 | 7.94 | 13.49 | 0.535 | 0.992 | -12.16 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: EMA 200 → 1 + Ngưỡng điểm vào kèo → 74 + Trọng số phần R:R (/100) → 33 | 118.73 | 51.3% | 0.751 | 8.19 | 14.5 | 0.635 | 0.894 | -3.9 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: BOS → 2 | 118.11 | 51.8% | 0.838 | 7.47 | 15.81 | 0.7 | 0.99 | -11.13 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Trọng số phần R:R (/100) → 33 + Trọng số phần Momentum (/100) → 21 | 118.12 | 52.1% | 0.832 | 7.53 | 15.69 | 0.656 | 1.034 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Coin phải mạnh hơn BTC trong N ngày → 14 | 83.19 | 49.6% | 0.711 | 8.16 | 10.19 | 0.552 | 0.903 | -18.62 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Ngưỡng điểm vào kèo → 77 | 27.78 | 55.7% | 0.186 | 5.75 | 4.83 | 0.212 | 0.162 | -7.45 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Cổng Dow → TẮT | 76.15 | 38.9% | 0.401 | 16.07 | 4.74 | 0.604 | 0.229 | -22.88 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 73.64 | 46.2% | 0.558 | 9.45 | 7.79 | 0.416 | 0.718 | -10.31 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: MACD cắt lên Signal → 0.563 | 118.12 | 52.1% | 0.832 | 7.53 | 15.69 | 0.656 | 1.034 | -12.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 + Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần SL (/100) → 7 | 108.28 | 45.9% | 0.637 | 9.08 | 11.93 | 0.622 | 0.651 | -9.61 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: BOS → 2 | 117.11 | 51.7% | 0.819 | 7.79 | 15.03 | 0.656 | 1.004 | -12.16 |  |

### Vòng 1466 — ngẫu nhiên nhiều thông số · mốc: tổng 122.74R, win 52.8%, rủi ro tụt vốn 7.43R, lời÷rủi ro 16.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số TP tối đa → 3 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Coin phải mạnh hơn BTC trong N ngày → 14 | 94.67 | 50.4% | 0.809 | 7.69 | 12.31 | 0.657 | 0.999 | -18.62 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 | 85.27 | 44.5% | 0.493 | 10.35 | 8.24 | 0.411 | 0.575 | -6.91 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 94.44 | 46.8% | 0.613 | 9.7 | 9.74 | 0.469 | 0.782 | -10.46 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + R:R tối thiểu riêng khung 4H → 2 + Cộng điểm phân kỳ dương ẩn → 3 | 115.11 | 41.3% | 0.34 | 13.52 | 8.51 | 0.506 | 0.176 | -16.15 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: POC volume profile cố định → 0.688 | 122.74 | 52.8% | 0.852 | 7.57 | 16.21 | 0.685 | 1.05 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 4 + Xác nhận khung nhỏ (A2) → W | 108.33 | 39.7% | 0.391 | 15.48 | 7 | 0.406 | 0.377 | -8.22 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Đệm SL riêng khung 1W (ATR) → 0.3 | 98.96 | 45.5% | 0.692 | 9.24 | 10.71 | 0.435 | 0.946 | -14.46 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: EMA 21 → 1.13 | 113.83 | 50.7% | 0.79 | 7.83 | 14.54 | 0.659 | 0.942 | -10.12 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Break mây Ichimoku → 3 | 112.63 | 49.1% | 0.691 | 9.05 | 12.45 | 0.569 | 0.834 | -12.4 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Biên mây Ichimoku → 1.05 + Lệnh chờ hết hạn sau (nến) → 6 + Đệm SL riêng khung 4H (ATR) → 0.3 | 117.77 | 36% | 0.441 | 20.24 | 5.82 | 0.31 | 0.56 | -16.78 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 104.38 | 46.6% | 0.715 | 8.88 | 11.75 | 0.587 | 0.87 | -14.99 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: POC anchored → 2 | 93.14 | 47.9% | 0.665 | 8.88 | 10.49 | 0.511 | 0.844 | -9.48 |  |

### Vòng 1465 — ngẫu nhiên nhiều thông số · mốc: tổng 120.22R, win 52.8%, rủi ro tụt vốn 7.11R, lời÷rủi ro 16.91

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + SL tối đa (% Entry) → 0.425 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.97 | 51% | 0.71 | 8.11 | 12.7 | 0.696 | 0.726 | -11.75 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Entry (/100) → 28 | 109.82 | 48.8% | 0.686 | 8.82 | 12.45 | 0.576 | 0.808 | -11.03 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Break mây Ichimoku → 1 + Ngưỡng điểm vào kèo → 77 | 106.41 | 50.7% | 0.739 | 7.62 | 13.96 | 0.569 | 0.909 | -11.11 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: BOS → 2 | 101.74 | 48% | 0.669 | 8.52 | 11.94 | 0.569 | 0.78 | -13.13 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Trọng số phần Divergence (/100) → 12 + Trọng số phần SL (/100) → 9 | 118.75 | 52.1% | 0.836 | 7.17 | 16.56 | 0.694 | 0.995 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 4 | 118.84 | 51.4% | 0.825 | 7.62 | 15.6 | 0.698 | 0.963 | -10.87 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Ngưỡng điểm vào kèo → 74 + Khung lớn phải tăng (trend ≥) → 0.425 | 114.19 | 50.7% | 0.816 | 7.34 | 15.56 | 0.621 | 1.034 | -12.19 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: BOS → 2 + Cộng thêm ngưỡng điểm khung 1W → -1 | 103.98 | 51.4% | 0.722 | 8.02 | 12.97 | 0.696 | 0.752 | -11.92 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: BOS → 0 + Điểm vùng: EMA 200 → 1 | 118.78 | 47.5% | 0.671 | 8.76 | 13.56 | 0.728 | 0.614 | -5.64 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 68.36 | 44.9% | 0.538 | 9.99 | 6.84 | 0.413 | 0.683 | -11.18 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Trọng số phần R:R (/100) → 33 + Trọng số phần SL (/100) → 7 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 112.9 | 51% | 0.768 | 7.9 | 14.29 | 0.545 | 1.027 | -8.9 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 200 → 3 | 104.89 | 34.4% | 0.468 | 19.94 | 5.26 | 0.372 | 0.575 | -13.42 |  |

### Vòng 1464 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 15.83

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức MACD → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 28.89 | 56.2% | 0.189 | 5.7 | 5.07 | 0.22 | 0.16 | -8.19 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Trend (/100) → 12 + Trọng số phần SL (/100) → 7 + Cộng thêm ngưỡng điểm khung 1W → -1 | 109.3 | 46.4% | 0.658 | 8.99 | 12.16 | 0.656 | 0.661 | -9.81 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Trọng số phần Momentum (/100) → 25 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.66 | 56.7% | 0.189 | 6.02 | 4.93 | 0.241 | 0.141 | -8.19 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm tối thiểu của vùng đặt SL → 2 + Số TP tối đa → 1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 125.55 | 50% | 0.815 | 8.09 | 15.52 | 0.8 | 0.833 | -10.43 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 101.88 | 50.7% | 0.707 | 8.39 | 12.14 | 0.658 | 0.764 | -11.92 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Mức MACD → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 112.94 | 49% | 0.748 | 8.43 | 13.4 | 0.741 | 0.756 | -10.4 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Đệm SL riêng khung 4H (ATR) → 0.3 | 174.56 | 38% | 0.588 | 17.82 | 9.8 | 0.52 | 0.662 | -7.72 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: POC anchored → 4 + Điểm vùng: BOS → 0 | 112.2 | 51.4% | 0.768 | 7.73 | 14.51 | 0.633 | 0.912 | -6.21 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + R:R tối thiểu riêng khung 4H → 2 | 127.41 | 42.6% | 0.42 | 12.18 | 10.46 | 0.435 | 0.407 | -6.86 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Momentum (/100) → 21 | 108.72 | 48.4% | 0.684 | 8.89 | 12.23 | 0.562 | 0.82 | -11.9 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Mức MACD → 1.13 | 113.98 | 49.7% | 0.797 | 7.84 | 14.54 | 0.616 | 1.002 | -12.57 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Cộng thêm ngưỡng điểm khung 1W → -1 | 105.93 | 47.1% | 0.692 | 9.09 | 11.65 | 0.634 | 0.755 | -11.14 |  |

### Vòng 1463 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 15.83

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Lệnh chờ hết hạn sau (nến) → 6 + % chốt ở TP1 → 0.307 | 94.52 | 48.1% | 0.722 | 8.33 | 11.35 | 0.566 | 0.912 | -10.79 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 113.68 | 51.4% | 0.779 | 7.86 | 14.46 | 0.634 | 0.94 | -12.16 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 21.3 | 49.6% | 0.083 | 16.41 | 1.3 | 0.09 | 0.077 | -12.39 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 1W → -1 | 105.23 | 49.6% | 0.746 | 8.1 | 12.99 | 0.61 | 0.881 | -13.19 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 116.65 | 51.4% | 0.821 | 7.64 | 15.27 | 0.656 | 1.012 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 113.16 | 51.7% | 0.78 | 7.64 | 14.81 | 0.634 | 0.946 | -12.14 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: EMA 200 → 3 | 106.37 | 49.3% | 0.749 | 7.9 | 13.46 | 0.541 | 0.975 | -13.15 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: HVN cố định → 0.563 | 118.12 | 52.1% | 0.832 | 7.46 | 15.83 | 0.656 | 1.034 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 114.26 | 50.7% | 0.783 | 7.83 | 14.59 | 0.612 | 0.978 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.438 | 96.99 | 46.7% | 0.638 | 9.94 | 9.76 | 0.441 | 0.875 | -9.58 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 134 | 39.1% | 0.583 | 15.88 | 8.44 | 0.645 | 0.526 | -13.13 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 59.89 | 40.9% | 0.454 | 11.9 | 5.03 | 0.434 | 0.477 | -10.28 |  |

### Vòng 1462 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.05

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Số TP tối đa → 1 + Điểm vùng: EMA 200 → 1 + Cộng thêm ngưỡng điểm khung 1D → 4 | 69.32 | 46.4% | 0.63 | 9.26 | 7.49 | 0.44 | 0.858 | -0.98 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN anchored → 0.188 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 127.83 | 41.7% | 0.41 | 12.36 | 10.34 | 0.358 | 0.453 | -8.03 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Mức RSI 30/70 → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 129.36 | 40.8% | 0.555 | 14.28 | 9.06 | 0.647 | 0.478 | -15.17 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm tối thiểu của vùng đặt SL → 2 | 96.69 | 50% | 0.662 | 8.32 | 11.62 | 0.633 | 0.695 | -9.44 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 + R:R tối thiểu riêng khung 1D → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 | 79.83 | 43.6% | 0.57 | 9.41 | 8.48 | 0.574 | 0.567 | -15.44 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.688 + Cộng thêm ngưỡng điểm khung 4H → 2 | 173.88 | 38.7% | 0.595 | 18.13 | 9.59 | 0.515 | 0.679 | -8.78 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 21 → 0.875 | 84.27 | 47.5% | 0.714 | 8.3 | 10.15 | 0.582 | 0.871 | -18.62 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: BOS → 0 | 101.88 | 50.7% | 0.707 | 8.35 | 12.2 | 0.658 | 0.764 | -11.92 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: HVN cố định → 0.563 | 113.18 | 50.3% | 0.791 | 7.65 | 14.79 | 0.615 | 0.992 | -10.84 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Biên mây Ichimoku → 1.05 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần R:R (/100) → 28 | 110.65 | 48% | 0.728 | 8.58 | 12.9 | 0.73 | 0.726 | -12.26 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Khung lớn phải tăng (trend ≥) → 0.375 + Xác nhận khung nhỏ (A2) → W | 109.22 | 39.1% | 0.411 | 15.86 | 6.89 | 0.409 | 0.412 | -6.79 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 110.74 | 48.6% | 0.769 | 8.49 | 13.04 | 0.578 | 0.995 | -12.57 |  |
