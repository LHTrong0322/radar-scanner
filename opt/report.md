# Tối ưu tự động (chạy liên tục) — vòng 1487

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 17464 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 167 | 47.3% | 105.83R | 0.634 | 6.7R | 9.5R | 11.14 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 145 | 51.7% | 121.21R | 0.836 | 5.15R | 7.46R | 16.25 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 26 | 50% | 20.05R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 108 | 52.8% | 94.19R | 19 | 21.1% | -4.19R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 167 | 47.3% | 105.83R | 9.5R | 11.14 | 30 | 13.3% | -11.98R |
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

### Vòng 1487 — ngẫu nhiên nhiều thông số · mốc: tổng 121.21R, win 51.7%, rủi ro tụt vốn 7.46R, lời÷rủi ro 16.25

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + % chốt ở TP1 → 0.307 | 118.7 | 47.2% | 0.737 | 9.94 | 11.94 | 0.771 | 0.706 | -11.8 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: MACD cắt lên Signal → 0.563 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 122.53 | 51% | 0.822 | 7.93 | 15.45 | 0.605 | 1.075 | -12.06 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 82.24 | 45.2% | 0.715 | 9.27 | 8.87 | 0.707 | 0.725 | -5.15 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Đệm SL riêng khung 1D (ATR) → 0.3 | 113.01 | 45.4% | 0.693 | 10.66 | 10.6 | 0.794 | 0.605 | -7.96 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 | 69.16 | 45.7% | 0.545 | 9.88 | 7 | 0.408 | 0.707 | -11.31 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Số TP tối đa → 1 | 87.73 | 45.7% | 0.542 | 9.96 | 8.81 | 0.506 | 0.576 | -10.16 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: HVN cố định → 0.563 + Đệm SL riêng khung 1D (ATR) → 0.3 | 107.51 | 46.6% | 0.66 | 10.21 | 10.53 | 0.771 | 0.555 | -11.55 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: EMA 200 → 1 | 124.99 | 51.9% | 0.812 | 7.82 | 15.98 | 0.711 | 0.946 | -7.34 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 + Đệm SL riêng khung 1W (ATR) → 0.3 | 96.65 | 42.2% | 0.559 | 10.51 | 9.2 | 0.474 | 0.633 | -11.46 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + R:R tối thiểu riêng khung 1D → 2 | 110.72 | 46.7% | 0.655 | 8.73 | 12.68 | 0.64 | 0.669 | -8.95 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm tối thiểu của vùng đặt SL → 4 | 99.86 | 48.2% | 0.729 | 8.31 | 12.02 | 0.542 | 0.935 | -14.88 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 121.21 | 51.7% | 0.836 | 7.46 | 16.25 | 0.67 | 1.034 | -12.16 |  |

### Vòng 1486 — ngẫu nhiên nhiều thông số · mốc: tổng 121.21R, win 51.7%, rủi ro tụt vốn 7.71R, lời÷rủi ro 15.72

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: POC anchored → 2 | 105.93 | 48.1% | 0.688 | 9.16 | 11.56 | 0.563 | 0.826 | -13.31 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + SL tối đa (% Entry) → 0.425 | 116.05 | 51% | 0.789 | 7.99 | 14.52 | 0.68 | 0.917 | -11.14 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Lệnh chờ hết hạn sau (nến) → 6 | 128.66 | 36.3% | 0.477 | 19.43 | 6.62 | 0.392 | 0.564 | -15.51 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + R:R tối thiểu tới TP1 → 2.63 + Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần SL (/100) → 9 | 100.75 | 48.8% | 0.793 | 8.49 | 11.87 | 0.57 | 1.042 | -14.15 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 77.04 | 45.9% | 0.571 | 10.13 | 7.61 | 0.468 | 0.695 | -10.69 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Vùng RSI 45–55 → 0.875 + % chốt ở TP1 → 0.287 | 84.9 | 46.5% | 0.658 | 9.1 | 9.33 | 0.673 | 0.641 | -17.6 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 118.5 | 50.3% | 0.795 | 8.2 | 14.45 | 0.633 | 0.988 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Xác nhận khung nhỏ (A2) → W + Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần SL (/100) → 7 | 113.96 | 39.6% | 0.438 | 14.91 | 7.64 | 0.445 | 0.432 | -5.61 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib sóng 4 → 0.938 | 78.89 | 48.3% | 0.657 | 8.77 | 9 | 0.688 | 0.62 | -18.39 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 47.71 | 38.8% | 0.463 | 11.08 | 4.31 | 0.287 | 0.657 | -18.09 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Mức MACD → 1.13 | 94.99 | 49.2% | 0.805 | 7.94 | 11.96 | 0.679 | 0.964 | -18.62 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cổng Dow → CHẶT | 95.97 | 45.4% | 0.524 | 10.16 | 9.45 | 0.426 | 0.606 | -18.25 |  |

### Vòng 1485 — ngẫu nhiên nhiều thông số · mốc: tổng 121.15R, win 51.4%, rủi ro tụt vốn 7.66R, lời÷rủi ro 15.82

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 118.59 | 50.3% | 0.775 | 7.81 | 15.18 | 0.726 | 0.832 | -10.12 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: BOS → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: HVN cố định → 0.438 | 116.64 | 47.8% | 0.734 | 9.02 | 12.93 | 0.611 | 0.877 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Divergence (/100) → 9 | 108.11 | 51.4% | 0.751 | 7.97 | 13.56 | 0.73 | 0.775 | -11.92 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu riêng khung 1D → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 15.09 | 52.3% | 0.097 | 7.76 | 1.94 | 0.098 | 0.096 | -6.03 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + R:R tối thiểu riêng khung 1D → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 90.57 | 41.3% | 0.506 | 10.98 | 8.25 | 0.503 | 0.509 | -6.57 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 1D (ATR) → 0.3 | 83.42 | 48.1% | 0.647 | 8.89 | 9.38 | 0.513 | 0.746 | -12.84 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + SL tối đa (% Entry) → 0.425 | 100.49 | 49.2% | 0.785 | 8.58 | 11.71 | 0.566 | 1.034 | -14.15 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 + Đệm SL riêng khung 1D (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 105.78 | 41.2% | 0.581 | 12.35 | 8.57 | 0.609 | 0.558 | -6.71 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: EMA 21 → 1.13 | 104.28 | 47.3% | 0.705 | 8.76 | 11.9 | 0.617 | 0.805 | -12.55 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Mức MACD → 0.875 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 36.45 | 37.9% | 0.419 | 10.09 | 3.61 | 0.291 | 0.592 | -3.14 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Break mây Ichimoku → 1 | 118.25 | 44.7% | 0.523 | 11.66 | 10.14 | 0.55 | 0.496 | -15.35 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 76.16 | 46.1% | 0.662 | 9.25 | 8.23 | 0.545 | 0.794 | -5.79 |  |

### Vòng 1484 — ngẫu nhiên nhiều thông số · mốc: tổng 122.2R, win 52.6%, rủi ro tụt vốn 7.54R, lời÷rủi ro 16.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Entry (/100) → 33 | 96.52 | 50% | 0.862 | 7.73 | 12.49 | 0.764 | 0.983 | -15.31 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: EMA 50 → 1.13 | 106.49 | 45.3% | 0.67 | 9.19 | 11.59 | 0.679 | 0.661 | -5.64 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 120.54 | 52.2% | 0.873 | 7.31 | 16.49 | 0.729 | 1.046 | -9.86 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: EMA 21 → 0.875 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 135.79 | 41.6% | 0.438 | 11.44 | 11.87 | 0.477 | 0.403 | -12.17 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 116.64 | 37.9% | 0.391 | 18.47 | 6.32 | 0.44 | 0.347 | -10.01 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 133.8 | 44.5% | 0.614 | 10.07 | 13.29 | 0.602 | 0.625 | -15.04 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 118.19 | 49.7% | 0.815 | 8.58 | 13.78 | 0.653 | 1.015 | -11.1 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần Trend (/100) → 12 | 121.12 | 51.4% | 0.878 | 7.5 | 16.15 | 0.76 | 1.01 | -8.84 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Mức RSI 30/70 → 1.13 | 107.56 | 40.3% | 0.417 | 14.8 | 7.27 | 0.546 | 0.284 | -11.58 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần R:R (/100) → 28 + SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 1D (ATR) → 0.3 | 114.41 | 43.8% | 0.706 | 10.97 | 10.43 | 0.864 | 0.566 | -9.09 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: BOS → 0 + Khung lớn phải tăng (trend ≥) → 0.425 | 87.58 | 45.4% | 0.621 | 9.93 | 8.82 | 0.527 | 0.722 | -8.43 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Cổng Dow → CHẶT + Điểm vùng: EMA 50 → 1.13 | 83.61 | 48.3% | 0.709 | 8.03 | 10.41 | 0.406 | 0.982 | -13.54 |  |

### Vòng 1483 — ngẫu nhiên nhiều thông số · mốc: tổng 121.15R, win 51.4%, rủi ro tụt vốn 7.71R, lời÷rủi ro 15.71

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 97.28 | 45.1% | 0.676 | 9.83 | 9.9 | 0.546 | 0.828 | -8.13 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Điểm vùng: BOS → 2 | 129.47 | 49.4% | 0.83 | 7.8 | 16.6 | 0.858 | 0.795 | -11.72 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: BOS → 2 | 108.65 | 49% | 0.701 | 8.64 | 12.58 | 0.701 | 0.701 | -8.62 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 106.64 | 48.6% | 0.762 | 8.51 | 12.53 | 0.703 | 0.829 | -9.58 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: BOS → 0 | 121.15 | 51.4% | 0.841 | 7.71 | 15.71 | 0.67 | 1.049 | -12.16 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 117.9 | 46.6% | 0.732 | 10.12 | 11.65 | 0.77 | 0.696 | -9.45 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 32.63 | 57% | 0.206 | 5.53 | 5.9 | 0.252 | 0.162 | -7.17 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần R:R (/100) → 28 | 116.59 | 49.4% | 0.757 | 8.82 | 13.22 | 0.609 | 0.935 | -9.58 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Coin phải mạnh hơn BTC trong N ngày → 14 | 75.15 | 45.7% | 0.583 | 8.86 | 8.48 | 0.624 | 0.535 | -17.38 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Biên mây Ichimoku → 1.35 | 114.23 | 49.7% | 0.799 | 8.24 | 13.86 | 0.604 | 1.026 | -11.17 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Trọng số phần Entry (/100) → 33 + Điểm vùng: EMA 50 → 1.13 + Đệm SL riêng khung 1W (ATR) → 0.3 | 102.79 | 45% | 0.734 | 9.52 | 10.8 | 0.512 | 0.962 | -11.94 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức MACD → 0.875 | 105.27 | 49% | 0.726 | 8.59 | 12.25 | 0.62 | 0.849 | -12.74 |  |

### Vòng 1482 — ngẫu nhiên nhiều thông số · mốc: tổng 118.05R, win 51.8%, rủi ro tụt vốn 7.62R, lời÷rủi ro 15.49

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC anchored → 2 | 62.37 | 43.8% | 0.557 | 10.07 | 6.19 | 0.395 | 0.731 | -5.8 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 108.19 | 47.9% | 0.664 | 8.28 | 13.07 | 0.634 | 0.692 | -7.9 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: EMA 21 → 1.13 | 95.23 | 48.1% | 0.716 | 8.7 | 10.95 | 0.535 | 0.93 | -11.35 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 1D → 7 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 69.78 | 44.9% | 0.652 | 9.25 | 7.54 | 0.413 | 0.935 | -6.07 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + R:R tối thiểu riêng khung 1W → 2 | 108.16 | 50% | 0.773 | 7.95 | 13.61 | 0.61 | 0.935 | -9.84 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Trend (/100) → 12 + SL tối đa (% Entry) → 0.425 | 94.61 | 48% | 0.757 | 9.03 | 10.48 | 0.549 | 0.975 | -12.36 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu tới TP1 → 2.63 + Xác nhận khung nhỏ (A2) → W | 81.5 | 35.5% | 0.37 | 18.03 | 4.52 | 0.284 | 0.442 | -9.88 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: POC volume profile cố định → 0.813 | 109.25 | 45.8% | 0.65 | 8.91 | 12.26 | 0.622 | 0.677 | -7.91 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần R:R (/100) → 33 | 118.05 | 51.8% | 0.837 | 7.62 | 15.49 | 0.656 | 1.049 | -12.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: EMA 200 → 1 + Số TP tối đa → 1 | 138.89 | 42.2% | 0.444 | 11.47 | 12.11 | 0.448 | 0.44 | 2.05 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 111.06 | 50% | 0.805 | 7.88 | 14.09 | 0.604 | 1.03 | -12.14 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Cộng điểm phân kỳ dương ẩn → 3 | 86.58 | 48.6% | 0.809 | 7.44 | 11.64 | 0.466 | 1.134 | -12.84 |  |

### Vòng 1481 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.56R, lời÷rủi ro 15.62

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần Divergence (/100) → 12 | 113.3 | 50.7% | 0.787 | 7.88 | 14.38 | 0.637 | 0.954 | -11.81 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 97.56 | 45.7% | 0.646 | 9.23 | 10.57 | 0.608 | 0.686 | -11.97 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: EMA 200 → 1 | 117.35 | 51% | 0.788 | 7.98 | 14.71 | 0.642 | 0.976 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Biên mây Ichimoku → 1.35 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 113.53 | 50% | 0.778 | 8.11 | 14 | 0.611 | 0.963 | -9.82 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 50 → 0.75 + Điểm tối thiểu của vùng đặt SL → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 71.42 | 44.3% | 0.621 | 10.16 | 7.03 | 0.443 | 0.837 | -5.59 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Lệnh chờ hết hạn sau (nến) → 8 | 109.66 | 48.1% | 0.694 | 8.62 | 12.72 | 0.555 | 0.848 | -11.41 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: HVN cố định → 0.438 + Trọng số phần R:R (/100) → 28 | 110.57 | 49.3% | 0.768 | 7.95 | 13.91 | 0.617 | 0.936 | -13.12 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 100.66 | 48.6% | 0.68 | 8.7 | 11.57 | 0.527 | 0.842 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 70.17 | 46.3% | 0.65 | 9.04 | 7.76 | 0.471 | 0.858 | -5.79 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Đệm SL riêng khung 1D (ATR) → 0.3 | 113.92 | 46.8% | 0.721 | 9.93 | 11.47 | 0.737 | 0.706 | -10.76 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: HVN anchored → 0.188 | 83.66 | 48.7% | 0.715 | 8.41 | 9.95 | 0.552 | 0.911 | -16.31 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Elliott (/100) → 6 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 200 → 3 | 22.8 | 35.1% | 0.205 | 17.93 | 1.27 | 0.515 | -0.121 | -7.73 |  |

### Vòng 1480 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.5R, lời÷rủi ro 15.75

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Cổng Dow → TẮT + Điểm vùng: HVN cố định → 0.438 + Trọng số phần Trend (/100) → 12 | 130.85 | 43.3% | 0.623 | 11.31 | 11.57 | 0.575 | 0.672 | -20.1 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Ngưỡng điểm vào kèo → 74 | 108.94 | 36.7% | 0.22 | 21.64 | 5.03 | 0.289 | 0.16 | -5.05 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Biên mây Ichimoku → 1.05 | 107.19 | 50.7% | 0.744 | 7.96 | 13.47 | 0.61 | 0.89 | -12.99 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trọng số phần Trend (/100) → 19 | 114.05 | 51% | 0.798 | 7.68 | 14.85 | 0.637 | 0.98 | -13.13 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.59 | 58% | 0.201 | 5.69 | 5.55 | 0.232 | 0.173 | -6.92 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: EMA 21 → 1.13 | 107.23 | 47.8% | 0.777 | 8.33 | 12.87 | 0.609 | 0.971 | -9.38 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cổng Dow → TẮT + % chốt ở TP1 → 0.287 | 130.65 | 40.9% | 0.563 | 13.91 | 9.39 | 0.647 | 0.492 | -16.22 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Cổng Dow → CHẶT | 82.71 | 50.9% | 0.738 | 7.05 | 11.73 | 0.336 | 1.1 | -14.25 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: POC anchored → 2 | 93.93 | 46.5% | 0.652 | 8.57 | 10.96 | 0.517 | 0.808 | -14.34 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: HVN anchored → 0.188 + Cộng thêm ngưỡng điểm khung 1W → 2 | 117.37 | 51.4% | 0.827 | 7.57 | 15.5 | 0.661 | 1.012 | -12.57 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức MACD → 0.875 | 102.23 | 48.3% | 0.695 | 8.64 | 11.83 | 0.555 | 0.854 | -12.99 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1D → 2 | 134.78 | 41.6% | 0.404 | 12.14 | 11.1 | 0.473 | 0.347 | -11.27 |  |

### Vòng 1479 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 15.83

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Mức RSI 30/70 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Coin phải mạnh hơn BTC trong N ngày → 14 | 81.43 | 47.4% | 0.702 | 8.58 | 9.49 | 0.491 | 0.952 | -18.62 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 | 111.91 | 50% | 0.777 | 8.07 | 13.87 | 0.573 | 1.018 | -11.98 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 115.5 | 49.3% | 0.791 | 8.17 | 14.14 | 0.768 | 0.819 | -12.74 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.188 + % chốt ở TP1 → 0.307 | 112.92 | 46.5% | 0.71 | 10.05 | 11.24 | 0.715 | 0.706 | -10.78 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 90.12 | 44.7% | 0.567 | 10.31 | 8.74 | 0.486 | 0.656 | -10.58 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: HVN cố định → 0.563 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 125.66 | 49.7% | 0.821 | 8.37 | 15.01 | 0.8 | 0.846 | -12.74 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Coin phải mạnh hơn BTC trong N ngày → 14 | 86.12 | 49.1% | 0.742 | 8.19 | 10.52 | 0.552 | 0.976 | -18.62 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm tối thiểu của vùng đặt SL → 2 | 102.52 | 48.3% | 0.679 | 9.18 | 11.17 | 0.501 | 0.88 | -8.27 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 111.17 | 50% | 0.761 | 7.76 | 14.33 | 0.649 | 0.884 | -11.14 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 88.58 | 45.7% | 0.54 | 9.68 | 9.15 | 0.492 | 0.587 | -12.02 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 110.71 | 51.1% | 0.785 | 7.83 | 14.14 | 0.617 | 0.976 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Trọng số phần Entry (/100) → 28 + % chốt ở TP1 → 0.307 | 113.5 | 49.7% | 0.794 | 8.14 | 13.94 | 0.619 | 0.997 | -9.83 |  |

### Vòng 1478 — ngẫu nhiên nhiều thông số · mốc: tổng 117.11R, win 51.7%, rủi ro tụt vốn 7.41R, lời÷rủi ro 15.80

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Break mây Ichimoku → 3 + Số TP tối đa → 1 | 127.37 | 35.4% | 0.455 | 20.33 | 6.27 | 0.281 | 0.619 | -2.47 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + % chốt ở TP1 → 0.287 | 112.79 | 50.3% | 0.789 | 8.01 | 14.08 | 0.612 | 0.99 | -11.95 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 73.98 | 45.8% | 0.691 | 8.71 | 8.49 | 0.486 | 0.935 | -5.79 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Momentum (/100) → 25 | 112.1 | 49.7% | 0.733 | 8.36 | 13.41 | 0.855 | 0.584 | -12.51 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Cộng thêm ngưỡng điểm khung 4H → -1 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: POC anchored → 2 | 91.39 | 44.6% | 0.617 | 10.19 | 8.97 | 0.403 | 0.81 | -14.01 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Khung lớn phải tăng (trend ≥) → 0.375 | 128.4 | 41.6% | 0.414 | 11.78 | 10.9 | 0.424 | 0.406 | -5.39 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 200 → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 72.77 | 45.2% | 0.587 | 9.5 | 7.66 | 0.583 | 0.591 | -15.56 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: EMA 50 → 0.75 | 114.64 | 51.8% | 0.813 | 7.27 | 15.77 | 0.62 | 1.026 | -12.16 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 83.98 | 48.3% | 0.724 | 8.6 | 9.77 | 0.519 | 0.976 | -18.62 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: BOS → 2 | 113.24 | 49.7% | 0.731 | 8.36 | 13.55 | 0.576 | 0.909 | -14.79 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Break mây Ichimoku → 3 | 106.11 | 47.5% | 0.663 | 9.51 | 11.16 | 0.525 | 0.82 | -11.91 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Break mây Ichimoku → 1 + Cộng thêm ngưỡng điểm khung 4H → -1 | 101.6 | 49% | 0.701 | 8.41 | 12.08 | 0.551 | 0.841 | -13.02 |  |
