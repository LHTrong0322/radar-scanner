# Tối ưu tự động (chạy liên tục) — vòng 1371

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 16072 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 165 | 47.3% | 98.93R | 0.6 | 6.7R | 9.44R | 10.48 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 142 | 53.5% | 121.94R | 0.859 | 5.15R | 7.06R | 17.27 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 26 | 50% | 20.05R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 105 | 55.2% | 94.92R | 19 | 21.1% | -4.19R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 165 | 47.3% | 98.93R | 9.44R | 10.48 | 30 | 13.3% | -11.98R |
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

### Vòng 1371 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: MACD cắt lên Signal → 0.563 | 118.11 | 51.7% | 0.815 | 7.63 | 15.48 | 0.649 | 0.997 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần Entry (/100) → 28 | 119.93 | 52.9% | 0.857 | 7.16 | 16.75 | 0.685 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + R:R tối thiểu riêng khung 4H → 2 + Lệnh chờ hết hạn sau (nến) → 6 | 122.73 | 41.7% | 0.416 | 11.53 | 10.64 | 0.397 | 0.432 | -5.02 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: POC anchored → 2 + Điểm tối thiểu của vùng đặt SL → 2 | 98.92 | 49% | 0.664 | 8.84 | 11.19 | 0.537 | 0.793 | -9.85 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Cổng Dow → TẮT + Điểm vùng: Biên mây Ichimoku → 1.35 | 128.42 | 43% | 0.62 | 11.24 | 11.43 | 0.531 | 0.714 | -19.12 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 100.63 | 50.7% | 0.689 | 8.08 | 12.45 | 0.655 | 0.728 | -12.89 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Trọng số phần Trend (/100) → 19 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 116.19 | 51.7% | 0.78 | 7.75 | 14.99 | 0.587 | 0.991 | -8.9 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Break mây Ichimoku → 3 | 111.54 | 49.4% | 0.697 | 8.75 | 12.75 | 0.576 | 0.831 | -11.9 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: EMA 50 → 0.75 + Khung lớn phải tăng (trend ≥) → 0.425 | 114.33 | 52.6% | 0.835 | 7.36 | 15.53 | 0.612 | 1.074 | -12.19 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Khung lớn phải tăng (trend ≥) → 0.375 + R:R tối thiểu tới TP1 → 2.38 | 33.53 | 40% | 0.319 | 11.84 | 2.83 | 0.301 | 0.34 | -5.84 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: POC anchored → 4 | 93.07 | 47.1% | 0.674 | 9.09 | 10.24 | 0.478 | 0.865 | -5.57 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Coin phải mạnh hơn BTC trong N ngày → 14 + Ngưỡng điểm vào kèo → 77 + Điểm tối thiểu của vùng đặt SL → 4 | 77.25 | 48.3% | 0.666 | 8.36 | 9.24 | 0.568 | 0.779 | -16.1 |  |

### Vòng 1370 — ngẫu nhiên nhiều thông số · mốc: tổng 121.86R, win 53.6%, rủi ro tụt vốn 7.03R, lời÷rủi ro 17.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 200 → 3 + Cộng thêm ngưỡng điểm khung 1D → 4 | 96.08 | 50% | 0.686 | 8.02 | 11.98 | 0.554 | 0.835 | -10.95 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: HVN cố định → 0.563 + Coin phải mạnh hơn BTC trong N ngày → 14 | 75.88 | 46% | 0.671 | 8.94 | 8.49 | 0.501 | 0.871 | -12.8 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần Trend (/100) → 12 | 114.67 | 51.7% | 0.802 | 7.45 | 15.39 | 0.627 | 1 | -10.36 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Cộng điểm phân kỳ dương ẩn → 2.25 + Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Fib sóng 4 → 0.938 | 88.88 | 50.4% | 0.787 | 7.72 | 11.51 | 0.557 | 1.066 | -13.88 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 91.46 | 47.2% | 0.635 | 8.82 | 10.37 | 0.48 | 0.804 | -3.79 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần Elliott (/100) → 10 + Coin phải mạnh hơn BTC trong N ngày → 14 | 82.64 | 48.3% | 0.7 | 8.46 | 9.77 | 0.568 | 0.852 | -15.99 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Lệnh chờ hết hạn sau (nến) → 6 + Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu tới TP1 → 2.63 | 89.99 | 45.9% | 0.667 | 10.76 | 8.36 | 0.664 | 0.669 | -10.62 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 90.29 | 50.9% | 0.778 | 7.72 | 11.7 | 0.566 | 1.039 | -13.57 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Cộng điểm phân kỳ dương ẩn → 3 | 88.68 | 50.4% | 0.771 | 7.61 | 11.65 | 0.536 | 1.066 | -16.83 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: POC anchored → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 106.86 | 50% | 0.712 | 8.25 | 12.95 | 0.54 | 0.905 | -10.36 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: BOS → 0 | 127.79 | 53.2% | 0.819 | 7.54 | 16.95 | 0.63 | 1.058 | -8.05 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.563 + Xác nhận khung nhỏ (A2) → W | 54.5 | 30% | 0.164 | 34.1 | 1.6 | 0.096 | 0.213 | -29.01 |  |

### Vòng 1369 — ngẫu nhiên nhiều thông số · mốc: tổng 121.76R, win 54%, rủi ro tụt vốn 7.01R, lời÷rủi ro 17.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: POC volume profile cố định → 0.688 + R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu riêng khung 4H → 2 | 131.23 | 41.8% | 0.4 | 12.26 | 10.7 | 0.445 | 0.362 | -11.46 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 10.35 | 53.1% | 0.108 | 7.36 | 1.41 | 0.166 | 0.049 | -8.89 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: BOS → 2 + Điểm vùng: EMA 21 → 1.13 | 79.68 | 51.4% | 0.718 | 7.18 | 11.1 | 0.343 | 1.061 | -14.25 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: HVN anchored → 0.313 + % chốt ở TP1 → 0.287 | 99.97 | 49.6% | 0.752 | 8.24 | 12.13 | 0.497 | 1.043 | -14.98 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Mức RSI 30/70 → 1.13 | 112.86 | 51% | 0.757 | 8.63 | 13.08 | 0.573 | 0.983 | -9.58 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần Elliott (/100) → 10 | 105.37 | 44.9% | 0.717 | 9.53 | 11.06 | 0.525 | 0.917 | -11.67 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: POC volume profile cố định → 0.813 | 110.44 | 40.1% | 0.438 | 15.39 | 7.18 | 0.408 | 0.466 | -5.66 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: BOS → 2 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Fib sóng 4 → 0.938 | 98.3 | 50.7% | 0.712 | 8.15 | 12.06 | 0.65 | 0.781 | -8.4 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: BOS → 0 | 111.24 | 52.9% | 0.795 | 7.37 | 15.09 | 0.647 | 0.96 | -12.99 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Trọng số phần SL (/100) → 9 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 118.19 | 49.3% | 0.778 | 8.3 | 14.24 | 0.614 | 0.969 | -12.55 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: EMA 21 → 1.13 | 111.95 | 50.7% | 0.8 | 7.48 | 14.97 | 0.663 | 0.953 | -10.11 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Divergence (/100) → 9 | 102.54 | 40.5% | 0.355 | 13.56 | 7.56 | 0.372 | 0.339 | -12.44 |  |

### Vòng 1368 — ngẫu nhiên nhiều thông số · mốc: tổng 118.69R, win 52.9%, rủi ro tụt vốn 7.56R, lời÷rủi ro 15.70

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Trọng số phần Elliott (/100) → 10 + R:R tối thiểu tới TP1 → 2.38 | 105.76 | 47.6% | 0.637 | 9.15 | 11.56 | 0.644 | 0.631 | -10.03 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Trọng số phần Momentum (/100) → 21 | 118.95 | 53.3% | 0.868 | 7.34 | 16.21 | 0.686 | 1.07 | -9.86 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Trọng số phần Entry (/100) → 28 + Điểm vùng: POC anchored → 4 | 118.73 | 49.7% | 0.776 | 8.47 | 14.02 | 0.575 | 1.008 | -5.81 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: EMA 21 → 1.13 | 104.88 | 50% | 0.739 | 8.74 | 12 | 0.631 | 0.843 | -8.84 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Cổng Dow → TẮT | 108.83 | 40.6% | 0.526 | 12.98 | 8.38 | 0.483 | 0.57 | -12.39 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 36.29 | 40.2% | 0.394 | 9.85 | 3.68 | 0.319 | 0.484 | -4.18 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: POC volume profile cố định → 0.813 | 97.84 | 48.5% | 0.73 | 8.36 | 11.7 | 0.49 | 0.985 | -10.38 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: MACD cắt lên Signal → 0.563 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 117.55 | 49.3% | 0.784 | 8.37 | 14.04 | 0.623 | 0.962 | -10.26 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức MACD → 0.875 | 128.45 | 41.1% | 0.425 | 12.37 | 10.38 | 0.406 | 0.442 | -9.21 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + % chốt ở TP1 → 0.287 | 111.55 | 51.5% | 0.82 | 7.68 | 14.52 | 0.592 | 1.063 | -9.84 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu tới TP1 → 2.38 | 79.28 | 46.3% | 0.583 | 8.86 | 8.95 | 0.584 | 0.582 | -17.64 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 109.62 | 49% | 0.726 | 8.46 | 12.96 | 0.54 | 0.935 | -11.28 |  |

### Vòng 1367 — ngẫu nhiên nhiều thông số · mốc: tổng 117.37R, win 52.5%, rủi ro tụt vốn 7.48R, lời÷rủi ro 15.69

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 107.04 | 49.6% | 0.759 | 8.07 | 13.26 | 0.646 | 0.884 | -9.27 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: EMA 50 → 0.75 | 78.67 | 50.5% | 0.722 | 7.36 | 10.69 | 0.306 | 1.087 | -13.01 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 99.39 | 46.6% | 0.759 | 8.55 | 11.62 | 0.52 | 1.033 | -12.25 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Trọng số phần SL (/100) → 7 | 115.15 | 51.1% | 0.817 | 7.71 | 14.94 | 0.676 | 0.977 | -10.92 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Khung lớn phải tăng (trend ≥) → 0.425 | 107.36 | 50% | 0.801 | 7.63 | 14.07 | 0.57 | 1.062 | -10.43 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trọng số phần Trend (/100) → 19 | 115.85 | 51.4% | 0.805 | 7.73 | 14.99 | 0.67 | 0.954 | -10.92 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + R:R tối thiểu riêng khung 1W → 2 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN cố định → 0.438 | 111.16 | 40.7% | 0.374 | 12.6 | 8.82 | 0.355 | 0.391 | -9.2 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng điểm phân kỳ dương ẩn → 3 | 116.36 | 52.1% | 0.819 | 7.59 | 15.33 | 0.67 | 0.991 | -10.92 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + SL tối đa (% Entry) → 0.425 | 106.13 | 46.4% | 0.632 | 9.08 | 11.69 | 0.611 | 0.651 | -11.22 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: EMA 50 → 0.75 | 121.17 | 45.5% | 0.551 | 10.32 | 11.74 | 0.56 | 0.542 | -13.63 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + % chốt ở TP1 → 0.287 | 99.53 | 50.3% | 0.696 | 8.16 | 12.2 | 0.669 | 0.728 | -10.67 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Fib sóng 4 → 1.56 + % chốt ở TP1 → 0.307 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 99.43 | 46.1% | 0.595 | 10.21 | 9.74 | 0.488 | 0.724 | -6.48 |  |

### Vòng 1366 — ngẫu nhiên nhiều thông số · mốc: tổng 120.84R, win 53.1%, rủi ro tụt vốn 7.35R, lời÷rủi ro 16.44

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: HVN anchored → 0.188 | 99.73 | 45.5% | 0.688 | 9.77 | 10.21 | 0.433 | 0.939 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Khung lớn phải tăng (trend ≥) → 0.375 | 118.78 | 50.3% | 0.766 | 8.51 | 13.96 | 0.576 | 0.986 | -12.16 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 116.79 | 52.4% | 0.794 | 7.69 | 15.19 | 0.586 | 1.03 | -8.9 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: BOS → 0 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 109.01 | 39.9% | 0.423 | 15.93 | 6.84 | 0.385 | 0.456 | -6.69 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Khung lớn phải tăng (trend ≥) → 0.425 + Ngưỡng điểm vào kèo → 77 + Lệnh chờ hết hạn sau (nến) → 8 | 99.05 | 44.6% | 0.669 | 9.68 | 10.23 | 0.469 | 0.869 | -12.86 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 82.57 | 44.2% | 0.562 | 11.09 | 7.45 | 0.422 | 0.704 | -13.77 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Cộng thêm ngưỡng điểm khung 1D → 7 | 91.56 | 45.5% | 0.52 | 10.16 | 9.01 | 0.594 | 0.45 | -9.41 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 70.9 | 45.3% | 0.554 | 9.83 | 7.21 | 0.413 | 0.714 | -11.18 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 100.96 | 45.6% | 0.687 | 9.65 | 10.46 | 0.455 | 0.921 | -14.01 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Lệnh chờ hết hạn sau (nến) → 8 | 112.94 | 48.5% | 0.693 | 9.06 | 12.47 | 0.477 | 0.934 | -14.02 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL riêng khung 1D (ATR) → 0.3 | 113.4 | 46.6% | 0.704 | 10.1 | 11.23 | 0.69 | 0.717 | -10.77 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Cộng thêm ngưỡng điểm khung 4H → 2 + Xác nhận khung nhỏ (A2) → W | 84.93 | 37.6% | 0.347 | 17.14 | 4.96 | 0.31 | 0.378 | -4.27 |  |

### Vòng 1365 — ngẫu nhiên nhiều thông số · mốc: tổng 120.84R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: HVN cố định → 0.438 | 115.96 | 50.7% | 0.794 | 7.84 | 14.79 | 0.63 | 0.978 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: MACD cắt lên Signal → 0.563 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 115.97 | 48.1% | 0.743 | 8.66 | 13.39 | 0.608 | 0.889 | -11.23 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 50 → 0.75 + Trọng số phần Entry (/100) → 33 | 101.27 | 48.6% | 0.713 | 8.3 | 12.2 | 0.567 | 0.847 | -12.17 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần Elliott (/100) → 10 | 107.48 | 48.6% | 0.757 | 8.24 | 13.04 | 0.567 | 0.952 | -11.13 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 107.67 | 46.2% | 0.637 | 8.81 | 12.22 | 0.585 | 0.685 | -8.93 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Cộng thêm ngưỡng điểm khung 4H → -1 + Lệnh chờ hết hạn sau (nến) → 8 | 99.96 | 46.6% | 0.613 | 9.53 | 10.49 | 0.575 | 0.652 | -12.73 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 21 → 0.875 + Lệnh chờ hết hạn sau (nến) → 8 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 110.15 | 39.9% | 0.382 | 15.71 | 7.01 | 0.415 | 0.352 | -8.62 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 114.5 | 51.7% | 0.79 | 7.77 | 14.74 | 0.653 | 0.945 | -10.84 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Momentum (/100) → 25 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 75.3 | 46.4% | 0.685 | 9.15 | 8.23 | 0.444 | 0.963 | -5.79 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 115.86 | 51.8% | 0.822 | 7.54 | 15.37 | 0.635 | 1.028 | -10.84 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Trọng số phần Divergence (/100) → 9 + Trọng số phần Trend (/100) → 19 | 120.84 | 53.1% | 0.845 | 7.4 | 16.33 | 0.67 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: EMA 200 → 3 | 105.24 | 48.6% | 0.721 | 8.54 | 12.32 | 0.511 | 0.942 | -14.2 |  |

### Vòng 1364 — ngẫu nhiên nhiều thông số · mốc: tổng 120.84R, win 53.1%, rủi ro tụt vốn 7.39R, lời÷rủi ro 16.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + R:R tối thiểu riêng khung 4H → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 101.09 | 40.9% | 0.316 | 13.2 | 7.66 | 0.439 | 0.204 | -14.72 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: EMA 200 → 1 + Trọng số phần Elliott (/100) → 10 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 132.16 | 41.8% | 0.418 | 11.99 | 11.02 | 0.423 | 0.414 | -2.73 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 160.1 | 36.7% | 0.534 | 19.32 | 8.29 | 0.392 | 0.683 | -10.66 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 110.73 | 45.8% | 0.667 | 9.26 | 11.96 | 0.617 | 0.709 | -14.91 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Mức MACD → 1.13 | 101.75 | 39.5% | 0.402 | 15.15 | 6.72 | 0.355 | 0.444 | -4.64 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: HVN anchored → 0.188 + Xác nhận khung nhỏ (A2) → W | 82.72 | 36.7% | 0.323 | 18.84 | 4.39 | 0.269 | 0.37 | -6.78 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 97.26 | 39.8% | 0.387 | 15.59 | 6.24 | 0.321 | 0.448 | -3.54 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu tới TP1 → 2.63 + Cộng thêm ngưỡng điểm khung 1D → 4 | 186.14 | 40.4% | 0.677 | 16.32 | 11.41 | 0.471 | 0.91 | -10.83 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + SL tối đa (% Entry) → 0.425 + Điểm vùng: HVN anchored → 0.313 | 127.16 | 50% | 0.815 | 8.12 | 15.66 | 0.795 | 0.839 | -12.74 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC volume profile cố định → 0.688 | 73.62 | 45.9% | 0.675 | 8.98 | 8.2 | 0.444 | 0.948 | -5.79 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Khung lớn phải tăng (trend ≥) → 0.375 + SL tối đa (% Entry) → 0.425 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 71.22 | 44.5% | 0.647 | 9.61 | 7.41 | 0.408 | 0.924 | -5.79 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 98.33 | 48.2% | 0.718 | 8.36 | 11.76 | 0.481 | 0.972 | -13.97 |  |

### Vòng 1363 — ngẫu nhiên nhiều thông số · mốc: tổng 120.84R, win 53.1%, rủi ro tụt vốn 7.32R, lời÷rủi ro 16.51

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Trend (/100) → 19 + Điểm vùng: EMA 21 → 0.875 | 168.13 | 38.7% | 0.566 | 17.25 | 9.75 | 0.471 | 0.667 | -11.46 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu riêng khung 1W → 2 | 92.78 | 44.2% | 0.569 | 11.4 | 8.14 | 0.635 | 0.511 | -11.8 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Biên mây Ichimoku → 1.05 | 109.31 | 51.7% | 0.754 | 7.84 | 13.94 | 0.625 | 0.892 | -12.99 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Mức MACD → 1.13 + Cộng thêm ngưỡng điểm khung 4H → 2 | 116.59 | 50% | 0.757 | 8.63 | 13.51 | 0.586 | 0.968 | -11.14 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: POC anchored → 4 + Trọng số phần R:R (/100) → 28 + Lệnh chờ hết hạn sau (nến) → 6 | 101.14 | 38.8% | 0.405 | 15.32 | 6.6 | 0.36 | 0.445 | -2.74 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.38 | 50.3% | 0.706 | 8.14 | 12.58 | 0.678 | 0.737 | -11.92 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 120.14 | 52.8% | 0.834 | 7.24 | 16.59 | 0.653 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: POC anchored → 2 + Trọng số phần R:R (/100) → 33 | 78.9 | 46.2% | 0.467 | 9.94 | 7.94 | 0.542 | 0.391 | -15.79 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: POC anchored → 4 + Trọng số phần Divergence (/100) → 12 | 107.25 | 49.4% | 0.696 | 8.9 | 12.05 | 0.511 | 0.873 | -6.21 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + R:R tối thiểu riêng khung 1D → 2 | 99.68 | 44.8% | 0.573 | 9.59 | 10.39 | 0.523 | 0.62 | -7.91 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: HVN anchored → 0.313 + Trọng số phần Trend (/100) → 19 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 108.7 | 47.3% | 0.725 | 9.61 | 11.31 | 0.498 | 0.998 | -8.98 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: POC anchored → 4 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 115.86 | 50.7% | 0.783 | 7.9 | 14.67 | 0.659 | 0.903 | -6.09 |  |

### Vòng 1362 — ngẫu nhiên nhiều thông số · mốc: tổng 120.84R, win 53.1%, rủi ro tụt vốn 7.39R, lời÷rủi ro 16.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + R:R tối thiểu riêng khung 1W → 2 | 104.71 | 49.7% | 0.732 | 7.97 | 13.14 | 0.58 | 0.887 | -13.19 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 125.64 | 41.6% | 0.399 | 12.3 | 10.21 | 0.395 | 0.402 | -6.99 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Fib sóng 4 → 1.56 | 115.87 | 52.7% | 0.794 | 7.5 | 15.45 | 0.627 | 0.985 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Điểm vùng: HVN cố định → 0.563 | 120.84 | 53.1% | 0.845 | 7.39 | 16.35 | 0.67 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Trọng số phần SL (/100) → 9 + Cổng Dow → CHẶT | 77.55 | 49.6% | 0.652 | 7.36 | 10.54 | 0.377 | 0.872 | -13.23 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: HVN anchored → 0.188 | 110.9 | 46.8% | 0.641 | 9.24 | 12 | 0.599 | 0.68 | -8.93 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Mức MACD → 1.13 | 107.06 | 46.7% | 0.641 | 8.92 | 12 | 0.525 | 0.753 | -13.47 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Divergence (/100) → 9 | 120.84 | 53.1% | 0.845 | 7.39 | 16.35 | 0.67 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Fib sóng 4 → 0.938 | 116.61 | 51.1% | 0.827 | 7.74 | 15.07 | 0.667 | 0.999 | -12.16 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 55.04 | 40.7% | 0.51 | 12.57 | 4.38 | 0.347 | 0.692 | -8.89 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Trọng số phần Entry (/100) → 33 | 83.88 | 50.4% | 0.742 | 7.35 | 11.41 | 0.371 | 1.058 | -13.22 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: BOS → 0 + Điểm vùng: HVN cố định → 0.438 | 102.14 | 50.7% | 0.7 | 8.49 | 12.03 | 0.632 | 0.777 | -11.92 |  |
