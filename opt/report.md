# Tối ưu tự động (chạy liên tục) — vòng 1222

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 14296 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 101.66R | 0.612 | 5.7R | 9.7R | 10.48 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 143 | 52.4% | 120.15R | 0.84 | 5.15R | 7.32R | 16.41 | 29 | 13.8% | -13.18R | -0.454 | 13.18R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 25 | 48% | 19.78R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 107 | 54.2% | 93.4R | 20 | 20% | -5.21R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 101.66R | 9.7R | 10.48 | 31 | 12.9% | -13R |
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
| Điểm vùng: Fib 0.5 / 0.382 sóng 2 | 3 | **4** |

## Các thay đổi đã nhận (mới nhất trước)

| Vòng | Thông số | Từ → Thành | Tổng R | Tỷ lệ thắng | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro |
|---|---|---|---|---|---|---|
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
| 24 | Trọng số phần R:R (/100) | 30 → 20 | 92.96R | 41.3% | 13.64R | 6.82 |
| 22 | Điểm ADX > 25 và +DI trội (Momentum) | 2 → 3 | 82.86R | 40.3% | 14.81R | 5.59 |

## 10 vòng gần nhất

### Vòng 1222 — ngẫu nhiên nhiều thông số · mốc: tổng 120.15R, win 52.4%, rủi ro tụt vốn 7.32R, lời÷rủi ro 16.41

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + SL tối đa (% Entry) → 0.425 | 124.77 | 44.4% | 0.555 | 11.03 | 11.31 | 0.629 | 0.485 | -13.87 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 200 → 3 | 26.32 | 58.2% | 0.172 | 5.91 | 4.45 | 0.16 | 0.183 | -9.41 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Fib sóng 4 → 1.56 | 73.44 | 45.5% | 0.668 | 9.27 | 7.92 | 0.421 | 0.964 | -5.8 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu riêng khung 4H → 2 | 101.27 | 40.3% | 0.346 | 13.36 | 7.58 | 0.333 | 0.357 | -8.56 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần Momentum (/100) → 21 | 112.01 | 51% | 0.762 | 7.92 | 14.14 | 0.564 | 0.992 | -13.18 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: EMA 21 → 0.875 + R:R tối thiểu riêng khung 4H → 2 | 97.63 | 39.9% | 0.341 | 13.16 | 7.42 | 0.294 | 0.382 | -6.02 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + SL tối đa (% Entry) → 0.425 | 106.86 | 49% | 0.727 | 8.45 | 12.65 | 0.569 | 0.91 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Fib sóng 4 → 0.938 | 36.71 | 40.9% | 0.417 | 10.01 | 3.67 | 0.321 | 0.532 | -8.25 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Cổng Dow → TẮT + Điểm vùng: Mức RSI 30/70 → 0.875 | 142.98 | 43.8% | 0.591 | 12.23 | 11.69 | 0.493 | 0.697 | -16.39 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Cổng Dow → TẮT + Trọng số phần Momentum (/100) → 25 | 126.36 | 42.9% | 0.622 | 11.4 | 11.08 | 0.529 | 0.72 | -17.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 104.1 | 47.6% | 0.728 | 8.89 | 11.71 | 0.489 | 0.945 | -10.75 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 120.15 | 52.4% | 0.84 | 7.32 | 16.41 | 0.655 | 1.051 | -13.18 |  |

### Vòng 1221 — ngẫu nhiên nhiều thông số · mốc: tổng 120.15R, win 52.4%, rủi ro tụt vốn 7.29R, lời÷rủi ro 16.48

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Khung lớn phải tăng (trend ≥) → 0.425 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 | 156.84 | 38.7% | 0.552 | 17.62 | 8.9 | 0.411 | 0.695 | -10.12 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 120.15 | 52.4% | 0.84 | 7.29 | 16.48 | 0.655 | 1.051 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: HVN anchored → 0.313 | 111.96 | 50.7% | 0.756 | 7.92 | 14.14 | 0.569 | 0.971 | -13.18 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: HVN cố định → 0.563 | 106.87 | 45.2% | 0.604 | 9.64 | 11.09 | 0.585 | 0.621 | -8.67 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Momentum (/100) → 21 + Trọng số phần SL (/100) → 9 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.37 | 57.2% | 0.185 | 5.92 | 4.96 | 0.184 | 0.186 | -8.42 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: HVN cố định → 0.438 + R:R tối thiểu tới TP1 → 2.38 | 29.27 | 37.9% | 0.284 | 13.04 | 2.24 | 0.242 | 0.334 | -12.01 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Xác nhận khung nhỏ (A2) → W + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Break mây Ichimoku → 1 | 124.68 | 40.7% | 0.462 | 14.91 | 8.36 | 0.451 | 0.471 | -7.3 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần Entry (/100) → 28 + Khung lớn phải tăng (trend ≥) → 0.375 | 107.77 | 49.3% | 0.748 | 8.25 | 13.06 | 0.529 | 0.981 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: EMA 200 → 1 | 119.97 | 51.9% | 0.779 | 7.68 | 15.62 | 0.661 | 0.917 | -9.02 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 5.02 | 54.3% | 0.109 | 4.93 | 1.02 | 0.023 | 0.16 | -5.77 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: BOS → 0 | 106.07 | 49.7% | 0.742 | 7.68 | 13.81 | 0.604 | 0.878 | -14.22 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 119.4 | 52.1% | 0.829 | 7.54 | 15.84 | 0.655 | 1.024 | -11.86 |  |

### Vòng 1220 — ngẫu nhiên nhiều thông số · mốc: tổng 120.15R, win 52.4%, rủi ro tụt vốn 7.33R, lời÷rủi ro 16.39

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần Trend (/100) → 19 | 119.7 | 52.1% | 0.831 | 7.41 | 16.15 | 0.655 | 1.028 | -13.18 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Số TP tối đa → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 74.1 | 45% | 0.668 | 9.08 | 8.16 | 0.508 | 0.855 | -4.39 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: EMA 21 → 0.875 + Trọng số phần Divergence (/100) → 9 + Xác nhận khung nhỏ (A2) → W | 88.5 | 38.2% | 0.408 | 14.78 | 5.99 | 0.38 | 0.431 | -14.01 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + R:R tối thiểu riêng khung 1W → 2 + Lệnh chờ hết hạn sau (nến) → 8 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 107.74 | 46.7% | 0.645 | 9.61 | 11.21 | 0.531 | 0.767 | -16.2 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Trọng số phần R:R (/100) → 28 | 117.93 | 51% | 0.825 | 7.53 | 15.66 | 0.66 | 1.006 | -13.18 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: EMA 21 → 0.875 + Cộng điểm phân kỳ dương ẩn → 2.25 | 111.46 | 47.4% | 0.715 | 8.28 | 13.46 | 0.646 | 0.785 | -10.88 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: EMA 21 → 1.13 + R:R tối thiểu tới TP1 → 2.38 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 98.59 | 46.6% | 0.605 | 8.87 | 11.11 | 0.5 | 0.706 | -13.73 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 | 128.52 | 44.1% | 0.566 | 10.62 | 12.1 | 0.603 | 0.53 | -16.83 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 4H → -1 + SL tối đa (% Entry) → 0.425 + Coin phải mạnh hơn BTC trong N ngày → 14 | 84.4 | 41.5% | 0.408 | 14.83 | 5.69 | 0.389 | 0.421 | -13.37 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 104.74 | 51.4% | 0.717 | 7.87 | 13.31 | 0.673 | 0.766 | -12.78 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: MACD cắt lên Signal → 0.563 | 127.83 | 43.3% | 0.63 | 11.03 | 11.59 | 0.529 | 0.735 | -16.85 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: EMA 21 → 0.875 | 116.45 | 50% | 0.809 | 7.61 | 15.3 | 0.664 | 0.966 | -13.18 |  |

### Vòng 1219 — ngẫu nhiên nhiều thông số · mốc: tổng 120.15R, win 52.4%, rủi ro tụt vốn 7.29R, lời÷rủi ro 16.48

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 | 158.53 | 38.7% | 0.534 | 18.32 | 8.65 | 0.403 | 0.669 | -9.32 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Mức MACD → 0.875 + Trọng số phần Momentum (/100) → 21 + Coin phải mạnh hơn BTC trong N ngày → 14 | 86.82 | 49.6% | 0.742 | 7.76 | 11.19 | 0.574 | 0.938 | -18.36 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Mức RSI 30/70 → 1.13 + SL tối đa (% Entry) → 0.425 | 118.69 | 51.7% | 0.819 | 7.55 | 15.72 | 0.655 | 0.999 | -13.18 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Fib sóng 4 → 1.56 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 75.18 | 42.9% | 0.488 | 11.18 | 6.72 | 0.517 | 0.461 | -7.53 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Cộng thêm ngưỡng điểm khung 1D → 5 | 119.14 | 52.1% | 0.827 | 7.47 | 15.95 | 0.655 | 1.02 | -13.18 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + R:R tối thiểu riêng khung 1W → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 66.69 | 43.8% | 0.487 | 11.04 | 6.04 | 0.445 | 0.535 | -13.25 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Cổng Dow → TẮT | 137.71 | 44.5% | 0.653 | 10.91 | 12.62 | 0.593 | 0.715 | -18.03 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 75.89 | 46.4% | 0.69 | 8.73 | 8.69 | 0.445 | 0.973 | -8.14 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + % chốt ở TP1 → 0.307 + Trọng số phần Elliott (/100) → 6 | 67.74 | 43.4% | 0.498 | 10.84 | 6.25 | 0.444 | 0.565 | -12.9 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Trọng số phần Entry (/100) → 33 + Trọng số phần SL (/100) → 7 + Trọng số phần Momentum (/100) → 25 | 118.73 | 51.7% | 0.83 | 7.44 | 15.96 | 0.656 | 1.028 | -13.19 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 110.48 | 46.6% | 0.635 | 8.91 | 12.4 | 0.581 | 0.686 | -9.96 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 107.97 | 49% | 0.706 | 9.15 | 11.8 | 0.468 | 0.98 | -10.6 |  |

### Vòng 1218 — ngẫu nhiên nhiều thông số · mốc: tổng 120.15R, win 52.4%, rủi ro tụt vốn 7.29R, lời÷rủi ro 16.48

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: BOS → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 105.19 | 51.7% | 0.725 | 7.62 | 13.8 | 0.673 | 0.784 | -12.78 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Lệnh chờ hết hạn sau (nến) → 8 + Cộng thêm ngưỡng điểm khung 1D → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 81.59 | 44.7% | 0.663 | 9.01 | 9.06 | 0.5 | 0.852 | -19.72 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 71.9 | 43.4% | 0.726 | 9.21 | 7.81 | 0.544 | 0.964 | -5.64 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 111.63 | 50.7% | 0.775 | 7.63 | 14.63 | 0.597 | 0.969 | -12.39 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 100.11 | 46.7% | 0.742 | 8.76 | 11.43 | 0.479 | 1.042 | -12.18 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 | 113.07 | 49.7% | 0.711 | 8.27 | 13.67 | 0.576 | 0.862 | -12.05 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + R:R tối thiểu riêng khung 4H → 2 | 103.7 | 39.8% | 0.33 | 13.5 | 7.68 | 0.261 | 0.388 | -9.98 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Trọng số phần Elliott (/100) → 6 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 | 117.6 | 51.4% | 0.817 | 7.71 | 15.25 | 0.613 | 1.051 | -13.18 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: MACD cắt lên Signal → 0.438 | 125.28 | 47.9% | 0.75 | 9.29 | 13.49 | 0.68 | 0.836 | -11.18 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 79.83 | 42.4% | 0.484 | 11.34 | 7.04 | 0.416 | 0.547 | -11.81 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Số TP tối đa → 3 | 93.86 | 47% | 0.63 | 9.72 | 9.66 | 0.405 | 0.898 | -10.59 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 118.95 | 51.7% | 0.82 | 7.61 | 15.63 | 0.655 | 1.003 | -11.86 |  |

### Vòng 1217 — ngẫu nhiên nhiều thông số · mốc: tổng 117.56R, win 52.5%, rủi ro tụt vốn 7.14R, lời÷rủi ro 16.46

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Mức MACD → 0.875 | 91.84 | 47.3% | 0.621 | 9.41 | 9.76 | 0.404 | 0.875 | -10.32 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: EMA 50 → 0.75 + Coin phải mạnh hơn BTC trong N ngày → 14 | 88.36 | 51.3% | 0.755 | 7.64 | 11.57 | 0.538 | 1.018 | -19.65 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Khung lớn phải tăng (trend ≥) → 0.425 | 107.27 | 50.7% | 0.801 | 7.8 | 13.75 | 0.534 | 1.11 | -13.21 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Cổng Dow → TẮT + Trọng số phần Entry (/100) → 28 | 128.38 | 43.6% | 0.636 | 11.04 | 11.63 | 0.529 | 0.748 | -18.94 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 | 70.42 | 45.8% | 0.597 | 9.96 | 7.07 | 0.397 | 0.842 | -7.39 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Biên mây Ichimoku → 1.35 | 111.63 | 49.7% | 0.711 | 8.51 | 13.12 | 0.599 | 0.837 | -12.14 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: EMA 21 → 0.875 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 85.65 | 41.5% | 0.468 | 12.45 | 6.88 | 0.449 | 0.485 | -8.47 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Biên mây Ichimoku → 1.05 | 106.66 | 48.3% | 0.706 | 8.56 | 12.46 | 0.662 | 0.75 | -12.72 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần SL (/100) → 7 + R:R tối thiểu tới TP1 → 2.38 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 101.16 | 45.3% | 0.588 | 9.51 | 10.64 | 0.614 | 0.562 | -14.31 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Entry (/100) → 33 | 74.96 | 41.1% | 0.416 | 13 | 5.77 | 0.401 | 0.43 | -8.51 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 86.32 | 47.5% | 0.612 | 9.07 | 9.52 | 0.464 | 0.771 | -11.46 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 50 → 1.13 | 111.32 | 49.7% | 0.778 | 8.09 | 13.76 | 0.605 | 0.981 | -12.16 |  |

### Vòng 1216 — ngẫu nhiên nhiều thông số · mốc: tổng 120.6R, win 52.4%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.61

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Elliott (/100) → 10 + Lệnh chờ hết hạn sau (nến) → 6 | 98.69 | 49.6% | 0.753 | 7.86 | 12.56 | 0.608 | 0.92 | -12.82 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Cộng thêm ngưỡng điểm khung 1D → 5 + Số TP tối đa → 3 | 114.1 | 49.6% | 0.833 | 7.94 | 14.37 | 0.61 | 1.095 | -11.42 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm tối thiểu của vùng đặt SL → 2 | 113.3 | 50.3% | 0.781 | 7.78 | 14.56 | 0.646 | 0.931 | -12.16 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Số TP tối đa → 3 + R:R tối thiểu tới TP1 → 2.38 | 121.97 | 42.6% | 0.53 | 12.28 | 9.93 | 0.464 | 0.597 | -17.12 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Entry (/100) → 33 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 118.12 | 51.4% | 0.82 | 7.33 | 16.11 | 0.66 | 0.994 | -11.89 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần Momentum (/100) → 21 | 117.61 | 50% | 0.795 | 8.05 | 14.61 | 0.524 | 1.096 | -13.08 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: EMA 200 → 1 | 111.94 | 48.4% | 0.695 | 8.5 | 13.17 | 0.637 | 0.764 | -7.17 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Elliott (/100) → 10 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 137.52 | 42.6% | 0.548 | 11.83 | 11.62 | 0.666 | 0.434 | -18.25 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 109.9 | 51.4% | 0.753 | 7.76 | 14.16 | 0.604 | 0.914 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Cổng Dow → TẮT + Điểm vùng: POC anchored → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 | 86.01 | 32.5% | 0.245 | 28.2 | 3.05 | 0.152 | 0.322 | -27.52 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Đệm SL riêng khung 4H (ATR) → 0.3 | 160.03 | 38.4% | 0.544 | 18.14 | 8.82 | 0.401 | 0.694 | -5.91 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 82.33 | 47.2% | 0.659 | 9.29 | 8.86 | 0.525 | 0.809 | -20.84 |  |

### Vòng 1215 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.07R, lời÷rủi ro 17.24

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: EMA 200 → 1 | 95.99 | 44.6% | 0.649 | 10.04 | 9.56 | 0.511 | 0.794 | -8.59 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Divergence (/100) → 9 + Ngưỡng điểm vào kèo → 77 | 116.44 | 51.1% | 0.838 | 7.51 | 15.5 | 0.664 | 1.024 | -11.55 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 95.79 | 44.7% | 0.639 | 10.07 | 9.51 | 0.436 | 0.858 | -12.89 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần R:R (/100) → 28 | 121.36 | 40.6% | 0.391 | 12.42 | 9.77 | 0.359 | 0.419 | -7.45 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 110.55 | 38.5% | 0.384 | 18.98 | 5.82 | 0.354 | 0.407 | -7.5 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Điểm vùng: POC anchored → 2 | 98.73 | 49.6% | 0.742 | 8.35 | 11.82 | 0.49 | 0.999 | -12.86 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Số TP tối đa → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 114.13 | 48.3% | 0.756 | 8.39 | 13.6 | 0.486 | 1.052 | -12.06 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm tối thiểu của vùng đặt SL → 4 | 118.94 | 51.7% | 0.82 | 7.09 | 16.78 | 0.677 | 0.974 | -10.87 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Đệm SL riêng khung 1W (ATR) → 0.3 | 113.52 | 38.5% | 0.465 | 13.99 | 8.11 | 0.494 | 0.44 | -10.75 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: HVN cố định → 0.438 + Cộng thêm ngưỡng điểm khung 1D → 5 | 119.42 | 52.1% | 0.829 | 7.48 | 15.97 | 0.631 | 1.057 | -12.16 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Đệm SL riêng khung 4H (ATR) → 0.3 | 157.02 | 36.7% | 0.534 | 19.44 | 8.08 | 0.385 | 0.688 | -9.31 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 107.09 | 51.4% | 0.724 | 8.19 | 13.08 | 0.651 | 0.805 | -11.67 |  |

### Vòng 1214 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.09R, lời÷rủi ro 17.19

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 121.04 | 52.8% | 0.841 | 7.22 | 16.76 | 0.67 | 1.031 | -10.84 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Lệnh chờ hết hạn sau (nến) → 8 | 106.61 | 44.4% | 0.599 | 11.37 | 9.38 | 0.553 | 0.64 | -12.08 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 113.54 | 51% | 0.783 | 7.5 | 15.14 | 0.636 | 0.945 | -9.82 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 120.23 | 52.1% | 0.824 | 7.33 | 16.4 | 0.694 | 0.96 | -10.84 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: HVN cố định → 0.563 | 111.73 | 50.7% | 0.787 | 7.42 | 15.06 | 0.634 | 0.949 | -11.55 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: HVN cố định → 0.438 + Cộng thêm ngưỡng điểm khung 1D → 3 | 127.7 | 49.7% | 0.846 | 7.86 | 16.25 | 0.684 | 1.06 | -9.2 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 114.65 | 46.1% | 0.695 | 10.69 | 10.72 | 0.588 | 0.796 | -12.15 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + R:R tối thiểu riêng khung 1D → 2 | 110.93 | 46.3% | 0.634 | 8.85 | 12.53 | 0.584 | 0.682 | -7.44 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: HVN anchored → 0.313 | 110.89 | 46.6% | 0.637 | 9.01 | 12.31 | 0.581 | 0.691 | -8.93 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số TP tối đa → 1 | 24.76 | 56.2% | 0.181 | 5.66 | 4.37 | 0.229 | 0.132 | -7.41 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: EMA 200 → 3 + Trọng số phần SL (/100) → 9 | 109.65 | 50% | 0.772 | 7.64 | 14.35 | 0.557 | 1.006 | -13.15 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Break mây Ichimoku → 3 | 114.68 | 50.3% | 0.73 | 8.11 | 14.14 | 0.597 | 0.88 | -11.04 |  |

### Vòng 1213 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.16R, lời÷rủi ro 17.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 114.05 | 49.3% | 0.781 | 8.25 | 13.82 | 0.593 | 0.996 | -12.57 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.63 | 53.8% | 0.185 | 6.06 | 4.89 | 0.21 | 0.161 | -8.66 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Cổng Dow → CHẶT | 89.78 | 50.9% | 0.831 | 7.11 | 12.63 | 0.451 | 1.184 | -12.84 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Trend (/100) → 19 | 118.01 | 51.8% | 0.837 | 6.93 | 17.03 | 0.647 | 1.047 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần Divergence (/100) → 9 + Đệm SL riêng khung 4H (ATR) → 0.3 | 153.48 | 38.1% | 0.522 | 18.86 | 8.14 | 0.36 | 0.694 | -8.96 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 65.44 | 39.5% | 0.336 | 14.39 | 4.55 | 0.424 | 0.233 | -13.73 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 119.11 | 52.1% | 0.839 | 7.32 | 16.27 | 0.663 | 1.031 | -10.84 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 114.14 | 51.7% | 0.776 | 7.56 | 15.1 | 0.585 | 0.999 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Elliott (/100) → 6 | 118.96 | 51.7% | 0.82 | 7.44 | 15.99 | 0.631 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 105.64 | 51.7% | 0.729 | 7.69 | 13.74 | 0.673 | 0.791 | -11.75 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1D → 2 | 44.21 | 39% | 0.194 | 15.29 | 2.89 | 0.174 | 0.207 | -11.57 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 4H (ATR) → 0.3 | 94.84 | 35.2% | 0.412 | 20.08 | 4.72 | 0.281 | 0.551 | -13.64 |  |
