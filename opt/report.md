# Tối ưu tự động (chạy liên tục) — vòng 1347

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 15784 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 101.16R | 0.609 | 6.7R | 9.81R | 10.31 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 143 | 52.4% | 119.56R | 0.836 | 5.15R | 7.47R | 16.01 | 29 | 13.8% | -13.18R | -0.454 | 13.18R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 25 | 48% | 19.78R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 107 | 54.2% | 92.81R | 20 | 20% | -5.21R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 101.16R | 9.81R | 10.31 | 31 | 12.9% | -13R |
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

### Vòng 1347 — ngẫu nhiên nhiều thông số · mốc: tổng 119.56R, win 52.4%, rủi ro tụt vốn 7.47R, lời÷rủi ro 16.01

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: EMA 200 → 1 | 18.42 | 40.7% | 0.312 | 9.98 | 1.85 | 0.116 | 0.502 | -1.7 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Ngưỡng điểm vào kèo → 74 | 116.45 | 48.4% | 0.742 | 8.56 | 13.6 | 0.553 | 0.959 | -13.57 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 | 105.13 | 46.3% | 0.641 | 9.02 | 11.66 | 0.549 | 0.726 | -13.73 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần SL (/100) → 9 | 117.08 | 51.4% | 0.813 | 7.76 | 15.09 | 0.654 | 0.991 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần SL (/100) → 7 | 14.4 | 53.5% | 0.113 | 7.1 | 2.03 | 0.127 | 0.101 | -8.68 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Cổng Dow → CHẶT + Xác nhận khung nhỏ (A2) → W + Điểm tối thiểu của vùng đặt SL → 2 | 70.92 | 37.8% | 0.377 | 16.06 | 4.42 | 0.271 | 0.474 | -10.02 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: HVN cố định → 0.563 | 108.13 | 49.7% | 0.756 | 8.32 | 13 | 0.528 | 1.001 | -13.18 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: POC anchored → 4 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 57.86 | 43.1% | 0.499 | 11.16 | 5.18 | 0.339 | 0.682 | -0.99 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Divergence (/100) → 12 | 109.48 | 48.8% | 0.684 | 8.97 | 12.21 | 0.552 | 0.831 | -12.92 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + SL tối đa (% Entry) → 0.425 | 112.91 | 50% | 0.773 | 7.89 | 14.31 | 0.642 | 0.908 | -10.65 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 119.84 | 40.8% | 0.382 | 12.56 | 9.54 | 0.375 | 0.387 | -6.81 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Trọng số phần R:R (/100) → 28 + Điểm vùng: POC anchored → 4 | 117.59 | 50.7% | 0.795 | 7.71 | 15.25 | 0.637 | 0.952 | -8 |  |

### Vòng 1346 — ngẫu nhiên nhiều thông số · mốc: tổng 119.56R, win 52.4%, rủi ro tụt vốn 7.53R, lời÷rủi ro 15.88

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 | 158.07 | 37.4% | 0.492 | 19.13 | 8.26 | 0.415 | 0.568 | -11.98 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: EMA 200 → 1 + Trọng số phần Divergence (/100) → 9 | 131.07 | 42% | 0.413 | 12.37 | 10.6 | 0.392 | 0.432 | 0 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 109.22 | 45.7% | 0.581 | 10.25 | 10.66 | 0.474 | 0.686 | -8.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: BOS → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 73.62 | 45.9% | 0.675 | 9.24 | 7.97 | 0.444 | 0.948 | -6.82 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 64.61 | 37.3% | 0.305 | 17.61 | 3.67 | 0.344 | 0.264 | -4.5 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Trọng số phần Elliott (/100) → 10 | 107.92 | 48.1% | 0.692 | 9.03 | 11.95 | 0.632 | 0.754 | -11.14 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + R:R tối thiểu riêng khung 1D → 2 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 109.18 | 46% | 0.62 | 9.09 | 12.01 | 0.571 | 0.667 | -9.96 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 100.82 | 46.5% | 0.642 | 9.41 | 10.71 | 0.532 | 0.753 | -14.2 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: HVN cố định → 0.563 | 104.79 | 49.7% | 0.733 | 8.22 | 12.75 | 0.572 | 0.891 | -14.22 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: EMA 21 → 1.13 | 105.56 | 50% | 0.733 | 7.97 | 13.24 | 0.613 | 0.864 | -9.63 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 70.9 | 45.3% | 0.554 | 9.49 | 7.47 | 0.413 | 0.714 | -10.71 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 104.6 | 51.7% | 0.721 | 7.78 | 13.44 | 0.672 | 0.777 | -12.78 |  |

### Vòng 1345 — ngẫu nhiên nhiều thông số · mốc: tổng 119.56R, win 52.4%, rủi ro tụt vốn 7.51R, lời÷rủi ro 15.92

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Momentum (/100) → 21 + Trọng số phần Elliott (/100) → 6 | 107.19 | 47% | 0.646 | 8.86 | 12.1 | 0.522 | 0.767 | -14.75 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 | 108.11 | 45.2% | 0.651 | 11.29 | 9.58 | 0.668 | 0.636 | -12.8 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Entry (/100) → 33 | 117.34 | 51% | 0.821 | 7.73 | 15.18 | 0.659 | 0.999 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Điểm vùng: EMA 50 → 0.75 + Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 1W → -1 | 103.67 | 39.8% | 0.413 | 15.77 | 6.57 | 0.364 | 0.456 | -7.92 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL riêng khung 4H (ATR) → 0.3 | 154.34 | 37.7% | 0.529 | 18.18 | 8.49 | 0.404 | 0.657 | -11.59 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Trend (/100) → 12 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 124.17 | 49.4% | 0.806 | 8.34 | 14.89 | 0.798 | 0.815 | -11.42 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 88.54 | 43.5% | 0.602 | 10.52 | 8.42 | 0.401 | 0.806 | -16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 108.69 | 50.3% | 0.75 | 8.08 | 13.45 | 0.602 | 0.917 | -14.15 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Cổng Dow → TẮT | 123.2 | 43.5% | 0.595 | 11.07 | 11.13 | 0.522 | 0.666 | -23.69 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + R:R tối thiểu riêng khung 1W → 2 | 105.48 | 49.7% | 0.738 | 7.93 | 13.3 | 0.603 | 0.871 | -14.21 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 105.34 | 46.6% | 0.722 | 9.3 | 11.33 | 0.504 | 0.939 | -14.01 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Cổng Dow → TẮT | 136.33 | 44.3% | 0.643 | 10.86 | 12.55 | 0.582 | 0.707 | -22.55 |  |

### Vòng 1344 — ngẫu nhiên nhiều thông số · mốc: tổng 119.56R, win 52.4%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Fib sóng 4 → 1.56 + Ngưỡng điểm vào kèo → 77 | 107.03 | 51% | 0.738 | 7.75 | 13.81 | 0.598 | 0.892 | -10.65 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần R:R (/100) → 28 | 123.14 | 40.9% | 0.393 | 12.62 | 9.76 | 0.373 | 0.411 | -7.42 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: HVN anchored → 0.313 + R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Trend (/100) → 12 | 96.96 | 44.4% | 0.567 | 9.89 | 9.8 | 0.492 | 0.636 | -14.69 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: EMA 50 → 0.75 + Trọng số phần R:R (/100) → 28 | 112.87 | 50.3% | 0.789 | 7.99 | 14.13 | 0.601 | 0.992 | -13.18 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 25.43 | 56.7% | 0.19 | 5.33 | 4.77 | 0.249 | 0.132 | -7.63 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: MACD cắt lên Signal → 0.563 | 117.34 | 51% | 0.821 | 7.58 | 15.48 | 0.659 | 0.999 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Cổng Dow → CHẶT + Trọng số phần Entry (/100) → 28 | 66.06 | 44.4% | 0.565 | 9.73 | 6.79 | 0.236 | 0.876 | -11.07 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Elliott (/100) → 10 | 94.7 | 45.6% | 0.592 | 9.96 | 9.51 | 0.525 | 0.661 | -11.08 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 112.69 | 50.3% | 0.767 | 8.1 | 13.91 | 0.568 | 0.998 | -11.86 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần R:R (/100) → 33 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 108.03 | 48.2% | 0.766 | 8.04 | 13.44 | 0.613 | 0.94 | -8.99 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 50 → 0.75 + SL tối đa (% Entry) → 0.425 | 114.08 | 51.4% | 0.792 | 7.9 | 14.44 | 0.596 | 1.005 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: POC anchored → 2 | 90.23 | 46.8% | 0.586 | 9.36 | 9.64 | 0.485 | 0.701 | -13.03 |  |

### Vòng 1343 — ngẫu nhiên nhiều thông số · mốc: tổng 119.56R, win 52.4%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Cộng điểm phân kỳ dương ẩn → 2.25 | 119.56 | 52.4% | 0.836 | 7.34 | 16.29 | 0.654 | 1.043 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Trọng số phần R:R (/100) → 28 + SL tối đa (% Entry) → 0.425 | 113.87 | 49.7% | 0.785 | 7.89 | 14.43 | 0.618 | 0.97 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.438 | 110.3 | 48.4% | 0.712 | 9.02 | 12.23 | 0.513 | 0.947 | -10.6 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cổng Dow → TẮT + Điểm vùng: Mức MACD → 1.13 | 118.86 | 41.9% | 0.566 | 12.34 | 9.63 | 0.547 | 0.586 | -18.88 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 25.09 | 55.9% | 0.156 | 5.81 | 4.32 | 0.197 | 0.119 | -6.56 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 94.17 | 46.6% | 0.645 | 10.02 | 9.4 | 0.441 | 0.833 | -4.47 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Cộng điểm phân kỳ dương ẩn → 2.25 | 114.03 | 50% | 0.792 | 8.12 | 14.04 | 0.604 | 1.008 | -10.84 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần Trend (/100) → 19 | 119.56 | 52.4% | 0.836 | 7.34 | 16.29 | 0.654 | 1.043 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần Divergence (/100) → 12 | 116.21 | 51.7% | 0.801 | 7.78 | 14.94 | 0.61 | 1.024 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: EMA 200 → 3 | 104.04 | 47.9% | 0.722 | 8.56 | 12.15 | 0.513 | 0.943 | -15.22 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu tới TP1 → 2.63 + Trần điểm khi chart yếu (Trend < x) → -0.225 + R:R tối thiểu riêng khung 1D → 2 | 85.48 | 41.8% | 0.559 | 11.27 | 7.58 | 0.465 | 0.632 | -14.4 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 92.94 | 38.3% | 0.367 | 16.47 | 5.64 | 0.384 | 0.351 | -6.42 |  |

### Vòng 1342 — ngẫu nhiên nhiều thông số · mốc: tổng 119.56R, win 52.4%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 100.23 | 46.7% | 0.668 | 9.24 | 10.85 | 0.581 | 0.753 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + R:R tối thiểu riêng khung 4H → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 27.05 | 46.7% | 0.081 | 8.71 | 3.11 | 0.085 | 0.079 | -11.23 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 + Lệnh chờ hết hạn sau (nến) → 6 | 99.95 | 48.3% | 0.662 | 9.37 | 10.67 | 0.538 | 0.802 | -12.56 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.563 | 101.65 | 45.5% | 0.701 | 9.78 | 10.39 | 0.46 | 0.939 | -15.03 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 127.68 | 50% | 0.829 | 8.11 | 15.74 | 0.798 | 0.865 | -13.76 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + R:R tối thiểu tới TP1 → 2.63 + Cộng thêm ngưỡng điểm khung 4H → 2 | 93.64 | 48.8% | 0.761 | 8.52 | 10.99 | 0.547 | 1.001 | -14.15 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Mức RSI 30/70 → 0.875 | 118.58 | 50% | 0.76 | 8.66 | 13.69 | 0.542 | 1.028 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: EMA 21 → 0.875 | 105.12 | 48.3% | 0.725 | 8.51 | 12.35 | 0.543 | 0.915 | -14.17 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 102.52 | 44.1% | 0.573 | 9.36 | 10.95 | 0.632 | 0.522 | -6.89 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + SL tối đa (% Entry) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 94.28 | 44.7% | 0.629 | 9.91 | 9.51 | 0.515 | 0.751 | -9.15 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Divergence (/100) → 9 | 31.67 | 37.8% | 0.352 | 11.31 | 2.8 | 0.252 | 0.483 | -7.55 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 86.24 | 46.5% | 0.669 | 9.01 | 9.57 | 0.508 | 0.859 | -18.72 |  |

### Vòng 1341 — ngẫu nhiên nhiều thông số · mốc: tổng 119.56R, win 52.4%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Khung lớn phải tăng (trend ≥) → 0.425 | 105.94 | 50% | 0.779 | 8.12 | 13.05 | 0.57 | 1.008 | -13.21 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần R:R (/100) → 33 | 35.57 | 40.2% | 0.409 | 10.21 | 3.48 | 0.332 | 0.508 | -7.55 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 200 → 3 + Điểm vùng: POC volume profile cố định → 0.688 | 105.15 | 39.5% | 0.4 | 15.42 | 6.82 | 0.372 | 0.424 | -7.02 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + R:R tối thiểu tới TP1 → 2.38 | 107.48 | 47.3% | 0.651 | 8.85 | 12.14 | 0.53 | 0.768 | -14.73 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 109.24 | 46.6% | 0.67 | 9.81 | 11.14 | 0.604 | 0.753 | -12.19 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 96.34 | 49.3% | 0.719 | 8.33 | 11.57 | 0.538 | 0.936 | -12.82 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Mức MACD → 1.13 | 28.14 | 56.3% | 0.176 | 5.94 | 4.74 | 0.186 | 0.166 | -8.42 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 96.6 | 47.4% | 0.705 | 8.55 | 11.3 | 0.444 | 0.995 | -14.99 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Đệm SL riêng khung 4H (ATR) → 0.3 | 160.44 | 38% | 0.544 | 18.15 | 8.84 | 0.413 | 0.679 | -8.53 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 114.57 | 48.1% | 0.734 | 8.71 | 13.15 | 0.562 | 0.93 | -13.57 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng thêm ngưỡng điểm khung 1D → 4 + R:R tối thiểu riêng khung 4H → 2 | 113.13 | 41.4% | 0.383 | 11.94 | 9.47 | 0.31 | 0.443 | -16.07 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần R:R (/100) → 33 | 103.95 | 48.6% | 0.712 | 8.38 | 12.4 | 0.541 | 0.908 | -13.76 |  |

### Vòng 1340 — ngẫu nhiên nhiều thông số · mốc: tổng 119.56R, win 52.4%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 107.73 | 49.7% | 0.743 | 8.37 | 12.87 | 0.568 | 0.952 | -13.18 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + R:R tối thiểu riêng khung 4H → 2 + Số TP tối đa → 1 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 119.8 | 40.8% | 0.379 | 13.12 | 9.13 | 0.337 | 0.415 | -9.43 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + R:R tối thiểu tới TP1 → 2.38 | 134.09 | 43.9% | 0.53 | 10.61 | 12.64 | 0.544 | 0.517 | -17.49 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm tối thiểu của vùng đặt SL → 2 + Cộng điểm phân kỳ dương ẩn → 2.25 | 113.19 | 51% | 0.77 | 7.83 | 14.46 | 0.604 | 0.953 | -11.11 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Trọng số phần Momentum (/100) → 21 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 117.34 | 51% | 0.821 | 7.58 | 15.48 | 0.659 | 0.999 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 30.07 | 57% | 0.19 | 5.69 | 5.28 | 0.21 | 0.172 | -8.42 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 104.36 | 47.6% | 0.629 | 9.02 | 11.57 | 0.607 | 0.649 | -12.64 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Trọng số phần Entry (/100) → 28 + Cộng thêm ngưỡng điểm khung 1D → 7 | 117.21 | 51.4% | 0.814 | 7.67 | 15.28 | 0.615 | 1.043 | -11.11 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: BOS → 0 | 125.55 | 41.5% | 0.401 | 12.27 | 10.23 | 0.372 | 0.426 | -9.71 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần R:R (/100) → 33 + Trọng số phần Trend (/100) → 19 | 108.3 | 39.3% | 0.413 | 16 | 6.77 | 0.382 | 0.442 | -6.89 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Cộng điểm phân kỳ dương ẩn → 2.25 | 116.64 | 51.7% | 0.816 | 7.74 | 15.07 | 0.62 | 1.037 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Trọng số phần Divergence (/100) → 9 + Khung lớn phải tăng (trend ≥) → 0.375 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 70.7 | 44.1% | 0.637 | 9.8 | 7.21 | 0.408 | 0.897 | -6.82 |  |

### Vòng 1339 — ngẫu nhiên nhiều thông số · mốc: tổng 119.56R, win 52.4%, rủi ro tụt vốn 7.46R, lời÷rủi ro 16.03

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Điểm tối thiểu của vùng đặt SL → 4 | 115.5 | 51% | 0.808 | 7.68 | 15.04 | 0.659 | 0.972 | -13.05 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Trọng số phần R:R (/100) → 33 | 117.21 | 51.4% | 0.814 | 7.57 | 15.48 | 0.615 | 1.043 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Break mây Ichimoku → 3 | 98.02 | 45.3% | 0.577 | 10.47 | 9.36 | 0.413 | 0.756 | -10.44 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: BOS → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: HVN anchored → 0.313 | 127.19 | 39.1% | 0.343 | 13.83 | 9.2 | 0.312 | 0.369 | -11.76 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần Trend (/100) → 19 | 108.66 | 39.5% | 0.416 | 15.53 | 7 | 0.384 | 0.446 | -6.89 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Cổng Dow → TẮT | 135.58 | 44.4% | 0.634 | 11.02 | 12.3 | 0.582 | 0.687 | -19.17 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: HVN cố định → 0.563 | 30.07 | 57% | 0.19 | 5.79 | 5.19 | 0.21 | 0.172 | -8.42 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Cộng thêm ngưỡng điểm khung 1W → 2 | 108.73 | 48.1% | 0.68 | 9.26 | 11.74 | 0.555 | 0.814 | -13.34 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 81.4 | 46.9% | 0.636 | 9.02 | 9.02 | 0.732 | 0.52 | -19.41 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: HVN cố định → 0.563 | 148.33 | 38.2% | 0.524 | 18.59 | 7.98 | 0.326 | 0.721 | -8.8 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 114.59 | 52.1% | 0.785 | 7.7 | 14.88 | 0.611 | 0.985 | -13.18 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: EMA 200 → 1 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 117.09 | 51% | 0.775 | 8.28 | 14.14 | 0.629 | 0.96 | -10.84 |  |

### Vòng 1338 — ngẫu nhiên nhiều thông số · mốc: tổng 119.56R, win 52.4%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: BOS → 2 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: EMA 21 → 0.875 | 116.61 | 50.7% | 0.81 | 7.71 | 15.12 | 0.658 | 0.98 | -13.18 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần Trend (/100) → 19 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm tối thiểu của vùng đặt SL → 4 | 87.47 | 46.9% | 0.683 | 8.8 | 9.94 | 0.495 | 0.897 | -12.73 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần SL (/100) → 7 + Cộng thêm ngưỡng điểm khung 1W → -1 | 118.86 | 52.1% | 0.825 | 7.47 | 15.91 | 0.636 | 1.043 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Xác nhận khung nhỏ (A2) → W | 95.49 | 38.1% | 0.372 | 15.68 | 6.09 | 0.419 | 0.324 | -3.74 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Ngưỡng điểm vào kèo → 77 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 83.1 | 47.8% | 0.62 | 9.07 | 9.16 | 0.583 | 0.66 | -10.05 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: HVN anchored → 0.188 | 115.09 | 51.7% | 0.805 | 7.67 | 15.01 | 0.596 | 1.035 | -13.18 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: MACD cắt lên Signal → 0.438 | 100.53 | 46.7% | 0.661 | 9.98 | 10.07 | 0.441 | 0.907 | -10.47 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + R:R tối thiểu riêng khung 4H → 2 | 82.77 | 36% | 0.189 | 22.52 | 3.68 | 0.199 | 0.181 | -4.75 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Trọng số phần Trend (/100) → 19 | 117.2 | 51.3% | 0.771 | 8.33 | 14.07 | 0.611 | 0.975 | -8.19 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Fib sóng 4 → 1.56 | 90.35 | 43.4% | 0.594 | 11.34 | 7.97 | 0.38 | 0.839 | -13.92 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Cộng điểm phân kỳ dương ẩn → 2.25 | 107.99 | 48.7% | 0.683 | 8.42 | 12.83 | 0.588 | 0.789 | -12.17 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: HVN cố định → 0.563 + % chốt ở TP1 → 0.307 + R:R tối thiểu riêng khung 1W → 2 | 96.36 | 46.1% | 0.634 | 9.93 | 9.7 | 0.453 | 0.84 | -13.01 |  |
