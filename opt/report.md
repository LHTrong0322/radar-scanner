# Tối ưu tự động (chạy liên tục) — vòng 1439

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 16888 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 47% | 97.31R | 0.593 | 6.7R | 9.77R | 9.96 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 141 | 53.2% | 120.32R | 0.853 | 5.15R | 7.29R | 16.50 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 26 | 50% | 20.05R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 104 | 54.8% | 93.3R | 19 | 21.1% | -4.19R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 47% | 97.31R | 9.77R | 9.96 | 30 | 13.3% | -11.98R |
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

### Vòng 1439 — ngẫu nhiên nhiều thông số · mốc: tổng 120.32R, win 53.2%, rủi ro tụt vốn 7.29R, lời÷rủi ro 16.50

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 111.96 | 49.7% | 0.722 | 8.06 | 13.89 | 0.676 | 0.771 | -11.14 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Trọng số phần Entry (/100) → 33 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 118.11 | 51.8% | 0.838 | 7.51 | 15.73 | 0.7 | 0.99 | -11.13 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + R:R tối thiểu riêng khung 1W → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Khung lớn phải tăng (trend ≥) → 0.375 | 67.32 | 44.1% | 0.606 | 9.83 | 6.85 | 0.447 | 0.774 | -6.83 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Cộng thêm ngưỡng điểm khung 1W → -1 | 118.31 | 52.5% | 0.851 | 7.2 | 16.43 | 0.685 | 1.034 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 117.98 | 52.8% | 0.831 | 7.25 | 16.27 | 0.671 | 1.015 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + R:R tối thiểu tới TP1 → 2.38 | 104.41 | 47.2% | 0.641 | 8.66 | 12.06 | 0.521 | 0.756 | -13.47 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: EMA 21 → 1.13 | 121.12 | 49.7% | 0.792 | 7.7 | 15.73 | 0.797 | 0.785 | -11.72 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 122.53 | 50% | 0.817 | 8.12 | 15.09 | 0.791 | 0.846 | -12.74 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Số TP tối đa → 3 | 97.81 | 50% | 0.789 | 8.4 | 11.64 | 0.538 | 1.065 | -14.15 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Biên mây Ichimoku → 1.35 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 101.71 | 50% | 0.697 | 8.43 | 12.07 | 0.649 | 0.749 | -10.32 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 102.65 | 50% | 0.723 | 8.43 | 12.18 | 0.655 | 0.801 | -10.32 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 102.86 | 45.8% | 0.612 | 9.03 | 11.39 | 0.629 | 0.596 | -8.93 |  |

### Vòng 1438 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.49R, lời÷rủi ro 15.77

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 97.36 | 48.1% | 0.721 | 8.3 | 11.73 | 0.483 | 0.985 | -14.99 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Cộng thêm ngưỡng điểm khung 4H → 2 | 113.74 | 50% | 0.79 | 7.88 | 14.43 | 0.649 | 0.948 | -11.14 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: HVN cố định → 0.563 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 89.58 | 41% | 0.503 | 11.32 | 7.91 | 0.497 | 0.509 | -6.46 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 83.19 | 49.6% | 0.711 | 8.19 | 10.16 | 0.552 | 0.903 | -18.62 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: HVN anchored → 0.188 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.29 | 57.7% | 0.201 | 5.62 | 5.57 | 0.232 | 0.171 | -8.19 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần R:R (/100) → 28 | 110.47 | 47.8% | 0.801 | 8.59 | 12.86 | 0.62 | 1.009 | -9.38 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 73.1 | 45.8% | 0.683 | 8.94 | 8.18 | 0.471 | 0.935 | -5.79 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + % chốt ở TP1 → 0.287 + Xác nhận khung nhỏ (A2) → W | 102.57 | 39.4% | 0.409 | 15.49 | 6.62 | 0.366 | 0.446 | -6.71 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Lệnh chờ hết hạn sau (nến) → 8 + R:R tối thiểu riêng khung 4H → 2 | 131.36 | 41.5% | 0.4 | 12.37 | 10.62 | 0.404 | 0.398 | -11.18 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 79.07 | 45.5% | 0.59 | 9.72 | 8.13 | 0.577 | 0.606 | -9.96 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: EMA 21 → 0.875 | 110.96 | 49.7% | 0.776 | 8.07 | 13.75 | 0.605 | 0.97 | -9.21 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 104.18 | 48.3% | 0.709 | 8.81 | 11.83 | 0.538 | 0.919 | -12.74 |  |

### Vòng 1437 — ngẫu nhiên nhiều thông số · mốc: tổng 120.32R, win 53.2%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.57

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Trọng số phần Trend (/100) → 19 | 115.5 | 52.9% | 0.825 | 7.12 | 16.22 | 0.678 | 0.985 | -10.87 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần Entry (/100) → 33 + Cộng thêm ngưỡng điểm khung 1W → -1 | 88.8 | 46.3% | 0.548 | 9.35 | 9.5 | 0.507 | 0.589 | -10.16 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm tối thiểu của vùng đặt SL → 2 | 93.97 | 47.8% | 0.691 | 8.74 | 10.75 | 0.47 | 0.932 | -11.67 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + R:R tối thiểu riêng khung 4H → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 90.31 | 38.9% | 0.258 | 15.03 | 6.01 | 0.322 | 0.211 | -29.54 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 123.53 | 52.9% | 0.787 | 7.84 | 15.76 | 0.592 | 1.029 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + % chốt ở TP1 → 0.287 | 120.23 | 53.2% | 0.853 | 7.26 | 16.56 | 0.691 | 1.036 | -12.14 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Ngưỡng điểm vào kèo → 74 | 99.88 | 50.7% | 0.675 | 8.48 | 11.78 | 0.639 | 0.715 | -11.16 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 21 → 1.13 | 97.12 | 44.5% | 0.592 | 11.01 | 8.82 | 0.635 | 0.554 | -12.93 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Đệm SL riêng khung 1D (ATR) → 0.3 | 87.18 | 43% | 0.469 | 12.49 | 6.98 | 0.525 | 0.423 | -13.85 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: BOS → 0 | 119.32 | 52.8% | 0.84 | 7.16 | 16.66 | 0.672 | 1.034 | -12.16 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + R:R tối thiểu riêng khung 4H → 2 + Trọng số phần R:R (/100) → 28 + Cộng thêm ngưỡng điểm khung 4H → -1 | 129.07 | 40.9% | 0.397 | 12.12 | 10.65 | 0.416 | 0.381 | -6.62 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 112.73 | 42.9% | 0.484 | 11.5 | 9.8 | 0.477 | 0.491 | -11.36 |  |

### Vòng 1436 — ngẫu nhiên nhiều thông số · mốc: tổng 120.32R, win 53.2%, rủi ro tụt vốn 7.11R, lời÷rủi ro 16.92

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Fib sóng 4 → 0.938 | 118.31 | 52.5% | 0.851 | 7.23 | 16.36 | 0.685 | 1.034 | -12.16 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 89.03 | 43.9% | 0.675 | 9.91 | 8.98 | 0.417 | 0.909 | -16.85 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Trọng số phần Trend (/100) → 19 + Điểm vùng: BOS → 0 | 119.67 | 52.4% | 0.837 | 7.17 | 16.69 | 0.682 | 1.012 | -12.16 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 116.31 | 50.3% | 0.791 | 8.13 | 14.31 | 0.541 | 1.075 | -12.06 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 84.81 | 49.3% | 0.633 | 8.87 | 9.56 | 0.619 | 0.649 | -10.54 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: POC volume profile cố định → 0.813 | 116.39 | 53.1% | 0.814 | 7.22 | 16.12 | 0.672 | 0.975 | -11.14 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: MACD cắt lên Signal → 0.438 | 92.56 | 46.6% | 0.634 | 9.59 | 9.65 | 0.39 | 0.914 | -12.46 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Elliott (/100) → 6 | 119.31 | 52.8% | 0.84 | 7.3 | 16.34 | 0.672 | 1.034 | -12.16 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Cổng Dow → TẮT + Điểm vùng: Mức RSI 30/70 → 0.875 | 135.21 | 45% | 0.609 | 11.32 | 11.94 | 0.532 | 0.694 | -16.78 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Mức RSI 30/70 → 1.13 + Cộng thêm ngưỡng điểm khung 1D → 7 | 106.62 | 51.8% | 0.756 | 7.28 | 14.65 | 0.591 | 0.938 | -10.04 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 118.27 | 51.7% | 0.805 | 7.9 | 14.97 | 0.633 | 0.983 | -6.21 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 99.26 | 42.3% | 0.403 | 13.06 | 7.6 | 0.479 | 0.333 | -14.78 |  |

### Vòng 1435 — ngẫu nhiên nhiều thông số · mốc: tổng 113.5R, win 51.4%, rủi ro tụt vốn 7.67R, lời÷rủi ro 14.80

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số TP tối đa → 1 + Cộng điểm phân kỳ dương ẩn → 2.25 | 113.5 | 51.4% | 0.799 | 7.67 | 14.8 | 0.595 | 1.034 | -12.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Entry (/100) → 33 + Đệm SL riêng khung 4H (ATR) → 0.3 | 111.57 | 34% | 0.292 | 24.09 | 4.63 | 0.307 | 0.282 | -17.59 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 104.54 | 48.6% | 0.706 | 9.15 | 11.43 | 0.457 | 0.999 | -9.61 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Mức MACD → 0.875 + Cộng điểm phân kỳ dương ẩn → 2.25 | 75.7 | 43.2% | 0.518 | 11.06 | 6.84 | 0.402 | 0.642 | -4.75 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: EMA 200 → 1 + Đệm SL riêng khung 1D (ATR) → 0.3 | 120.8 | 35.6% | 0.43 | 21.75 | 5.55 | 0.334 | 0.52 | 1.43 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 88.62 | 45.5% | 0.537 | 10.8 | 8.21 | 0.377 | 0.721 | -10.36 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần R:R (/100) → 28 | 64.74 | 44.3% | 0.611 | 9.74 | 6.65 | 0.406 | 0.858 | -5.79 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 67.57 | 35.3% | 0.271 | 19.28 | 3.5 | 0.325 | 0.223 | -8.02 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Fib sóng 4 → 1.56 | 111.74 | 50% | 0.787 | 8.09 | 13.81 | 0.586 | 1.025 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm tối thiểu của vùng đặt SL → 2 | 110.2 | 48.8% | 0.664 | 9.52 | 11.58 | 0.478 | 0.901 | -7.26 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Entry (/100) → 28 + Số TP tối đa → 1 | 97.48 | 45.5% | 0.682 | 9.42 | 10.35 | 0.43 | 0.929 | -14.01 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 69.36 | 44.9% | 0.648 | 9.28 | 7.47 | 0.406 | 0.935 | -5.79 |  |

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
