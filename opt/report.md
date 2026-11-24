# Tối ưu tự động (chạy liên tục) — vòng 1375

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 16120 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 158 | 48.1% | 105.11R | 0.665 | 6.48R | 9.13R | 11.51 | 29 | 13.8% | -10.93R | -0.377 | 10.93R |
| **Tốt nhất** | 137 | 53.3% | 119.79R | 0.874 | 5.15R | 7.34R | 16.32 | 26 | 15.4% | -9.86R | -0.379 | 10.14R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 26 | 46.2% | 19.33R | 7 | 0% | -5.66R |
| 1W | 8 | 62.5% | 8.41R | 1 | 0% | -1.01R |
| 4H | 103 | 54.4% | 92.05R | 18 | 22.2% | -3.18R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 158 | 48.1% | 105.11R | 9.13R | 11.51 | 29 | 13.8% | -10.93R |
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

### Vòng 1375 — ngẫu nhiên nhiều thông số · mốc: tổng 119.79R, win 53.3%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.32

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + R:R tối thiểu riêng khung 1W → 2 | 106.45 | 50.4% | 0.777 | 7.96 | 13.37 | 0.675 | 0.869 | -10.9 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 113.63 | 51.8% | 0.818 | 7.53 | 15.09 | 0.67 | 0.976 | -9.86 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 200 → 1 + Cộng điểm phân kỳ dương ẩn → 2.25 | 72.75 | 46.4% | 0.661 | 8.92 | 8.16 | 0.424 | 0.946 | 0.06 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cộng thêm ngưỡng điểm khung 1W → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 84.42 | 45.3% | 0.531 | 10.17 | 8.3 | 0.526 | 0.535 | -7.52 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 73.55 | 44.2% | 0.707 | 9.21 | 7.99 | 0.547 | 0.894 | -2.43 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + SL tối đa (% Entry) → 0.425 | 115.42 | 52.1% | 0.824 | 7.82 | 14.76 | 0.641 | 1.031 | -9.86 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Momentum (/100) → 21 + R:R tối thiểu tới TP1 → 2.63 | 79.58 | 48.3% | 0.686 | 9.13 | 8.72 | 0.519 | 0.878 | -10.6 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Cộng điểm phân kỳ dương ẩn → 3 | 41.55 | 41.3% | 0.381 | 11.04 | 3.76 | 0.414 | 0.342 | -8.63 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần SL (/100) → 9 | 106.14 | 45.4% | 0.651 | 9.18 | 11.56 | 0.661 | 0.643 | -8.78 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 3 | 101.1 | 45.5% | 0.648 | 10.33 | 9.79 | 0.479 | 0.817 | -11.71 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: POC anchored → 4 | 118.53 | 51.4% | 0.823 | 7.77 | 15.25 | 0.643 | 1.008 | -5.17 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Lệnh chờ hết hạn sau (nến) → 8 + Đệm SL riêng khung 1D (ATR) → 0.3 + Số TP tối đa → 1 | 108.2 | 45.2% | 0.644 | 11.07 | 9.77 | 0.663 | 0.628 | -10.1 |  |

### Vòng 1374 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Trọng số phần SL (/100) → 7 | 121.94 | 53.5% | 0.859 | 7.06 | 17.27 | 0.694 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + R:R tối thiểu riêng khung 4H → 2 + % chốt ở TP1 → 0.287 + Cộng điểm phân kỳ dương ẩn → 3 | 138.22 | 42.7% | 0.44 | 11.46 | 12.06 | 0.456 | 0.427 | -5.33 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 67.13 | 43.7% | 0.497 | 10.8 | 6.22 | 0.349 | 0.688 | -9.77 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 111.73 | 47.5% | 0.698 | 9.09 | 12.29 | 0.582 | 0.821 | -14.53 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Trend (/100) → 19 | 117.07 | 51% | 0.755 | 8.19 | 14.29 | 0.61 | 0.919 | -13.75 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + R:R tối thiểu riêng khung 1D → 2 | 106.64 | 45.3% | 0.62 | 9.05 | 11.78 | 0.572 | 0.662 | -8.93 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Momentum (/100) → 25 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 183.01 | 38.7% | 0.606 | 17.78 | 10.29 | 0.55 | 0.668 | -7.71 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Fib sóng 4 → 0.938 | 113.42 | 49.7% | 0.741 | 8.76 | 12.95 | 0.554 | 0.958 | -9.4 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Lệnh chờ hết hạn sau (nến) → 8 | 117.07 | 51% | 0.755 | 8.19 | 14.29 | 0.61 | 0.919 | -13.75 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 116.05 | 50% | 0.744 | 8.28 | 14.02 | 0.833 | 0.637 | -12.5 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Biên mây Ichimoku → 1.05 | 110.42 | 52.1% | 0.767 | 7.63 | 14.47 | 0.648 | 0.892 | -12.99 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Trọng số phần SL (/100) → 9 | 120.47 | 52.8% | 0.848 | 7.21 | 16.71 | 0.694 | 1.021 | -12.16 |  |

### Vòng 1373 — ngẫu nhiên nhiều thông số · mốc: tổng 119.66R, win 52.4%, rủi ro tụt vốn 7.54R, lời÷rủi ro 15.87

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 97.86 | 37.5% | 0.382 | 16.27 | 6.01 | 0.342 | 0.42 | -10.17 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Entry (/100) → 33 + Điểm vùng: POC anchored → 4 | 118.43 | 51.4% | 0.8 | 7.71 | 15.36 | 0.633 | 0.972 | -6.98 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Cổng Dow → TẮT | 83.05 | 42.1% | 0.486 | 12.96 | 6.41 | 0.503 | 0.467 | -21.72 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần Entry (/100) → 33 | 116.89 | 52.4% | 0.817 | 7.54 | 15.5 | 0.624 | 1.031 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Mức MACD → 0.875 | 110.09 | 52.1% | 0.775 | 7.46 | 14.76 | 0.626 | 0.943 | -12.16 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 114.19 | 49.3% | 0.827 | 7.8 | 14.64 | 0.615 | 1.073 | -11.42 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Momentum (/100) → 21 | 105.43 | 50% | 0.742 | 7.94 | 13.28 | 0.589 | 0.891 | -14.22 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Khung lớn phải tăng (trend ≥) → 0.425 + SL tối đa (% Entry) → 0.425 | 104.67 | 46.1% | 0.634 | 9.25 | 11.32 | 0.565 | 0.697 | -9.99 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 103.48 | 50.7% | 0.719 | 8.08 | 12.81 | 0.701 | 0.737 | -11.92 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 111.73 | 49.4% | 0.726 | 8.09 | 13.81 | 0.629 | 0.833 | -12.17 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần R:R (/100) → 33 | 105.7 | 52.1% | 0.734 | 7.87 | 13.43 | 0.696 | 0.777 | -12.78 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: HVN anchored → 0.188 | 89.22 | 46.3% | 0.544 | 9.47 | 9.42 | 0.48 | 0.606 | -10.16 |  |

### Vòng 1372 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 118.74 | 45.3% | 0.656 | 9.21 | 12.89 | 0.737 | 0.582 | -11.35 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 41.99 | 33% | 0.124 | 28.62 | 1.47 | 0.16 | 0.106 | -38.51 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Momentum (/100) → 21 + SL tối đa (% Entry) → 0.425 | 120.93 | 53.1% | 0.846 | 7.19 | 16.82 | 0.694 | 1.013 | -12.16 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cổng Dow → CHẶT | 71.62 | 51.3% | 0.623 | 7.71 | 9.29 | 0.41 | 0.811 | -14.01 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + SL tối đa (% Entry) → 0.425 | 120.93 | 53.1% | 0.846 | 7.19 | 16.82 | 0.694 | 1.013 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 118.11 | 51.7% | 0.815 | 7.63 | 15.48 | 0.649 | 0.997 | -11.14 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 148.39 | 37.8% | 0.501 | 19.01 | 7.81 | 0.461 | 0.54 | -10.74 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Momentum (/100) → 21 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Mức RSI 30/70 → 1.13 | 92.31 | 42.9% | 0.599 | 11.79 | 7.83 | 0.536 | 0.653 | -12.62 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 44.65 | 42.7% | 0.465 | 9.56 | 4.67 | 0.467 | 0.463 | -5.18 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Xác nhận khung nhỏ (A2) → W | 71.94 | 35.9% | 0.29 | 19.36 | 3.72 | 0.28 | 0.3 | -7.97 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: BOS → 2 + % chốt ở TP1 → 0.307 | 119.22 | 52.4% | 0.834 | 7.37 | 16.18 | 0.65 | 1.042 | -12.17 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 113.12 | 51.4% | 0.786 | 7.48 | 15.12 | 0.676 | 0.904 | -11.13 |  |

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
