# Tối ưu tự động (chạy liên tục) — vòng 719

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 8283 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 159 | 47.8% | 94.86R | 0.597 | 5.28R | 9.55R | 9.93 | 31 | 12.9% | -13.82R | -0.446 | 13.82R |
| **Tốt nhất** | 140 | 52.1% | 111.96R | 0.8 | 6.16R | 7.73R | 14.48 | 29 | 17.2% | -11.62R | -0.401 | 11.62R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 24 | 45.8% | 15.8R | 4 | 0% | -3.4R |
| 1W | 11 | 45.5% | 6.82R | 3 | 0% | -3.33R |
| 4H | 105 | 54.3% | 89.35R | 22 | 22.7% | -4.88R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 159 | 47.8% | 94.86R | 9.55R | 9.93 | 31 | 12.9% | -13.82R |
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

### Vòng 719 — ngẫu nhiên nhiều thông số · mốc: tổng 111.96R, win 52.1%, rủi ro tụt vốn 7.73R, lời÷rủi ro 14.48

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: BOS → 3 + Xác nhận khung nhỏ (A2) → W | 58.33 | 36.8% | 0.244 | 19.42 | 3 | 0.125 | 0.351 | -5.95 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 + Trọng số phần Entry (/100) → 33 | 28.85 | 58.2% | 0.189 | 5.94 | 4.86 | 0.217 | 0.16 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Khung lớn phải tăng (trend ≥) → 0.375 + % chốt ở TP1 → 0.287 | 97.95 | 48.9% | 0.695 | 8.63 | 11.35 | 0.519 | 0.883 | -11.03 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 75.99 | 47.2% | 0.704 | 8.48 | 8.96 | 0.496 | 0.944 | -6.85 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 27.63 | 35.5% | 0.228 | 15.76 | 1.75 | 0.215 | 0.241 | -9.08 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: HVN anchored → 0.313 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 28 | 58.7% | 0.181 | 6.23 | 4.49 | 0.21 | 0.151 | -11.24 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: HVN anchored → 0.313 | 88.86 | 38.1% | 0.332 | 18.24 | 4.87 | 0.315 | 0.348 | -6.01 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số TP tối đa → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 | 22.54 | 54.8% | 0.136 | 7.79 | 2.89 | 0.174 | 0.098 | -9.46 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Cổng Dow → CHẶT + Trọng số phần Divergence (/100) → 12 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 68.67 | 50% | 0.648 | 7.54 | 9.11 | 0.21 | 1.01 | -13.11 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + R:R tối thiểu riêng khung 4H → 2 | 106.15 | 40.2% | 0.341 | 13.43 | 7.9 | 0.337 | 0.345 | -7.24 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: EMA 50 → 0.75 | 106.57 | 50% | 0.74 | 8.26 | 12.9 | 0.536 | 0.974 | -11.62 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần Entry (/100) → 33 | 58.94 | 43.9% | 0.601 | 9.47 | 6.22 | 0.419 | 0.816 | -6.56 |  |

### Vòng 718 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 117.03 | 53.5% | 0.813 | 7.36 | 15.9 | 0.634 | 1.018 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần Divergence (/100) → 9 + Đệm SL riêng khung 1W (ATR) → 0.3 | 99.89 | 46.4% | 0.714 | 9.34 | 10.69 | 0.448 | 0.957 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + R:R tối thiểu riêng khung 1D → 2 | 104.02 | 45.9% | 0.605 | 9.04 | 11.51 | 0.571 | 0.634 | -7.89 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Đệm SL riêng khung 4H (ATR) → 0.3 | 155.15 | 38.9% | 0.544 | 17.85 | 8.69 | 0.351 | 0.737 | -14.27 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 114.41 | 52.5% | 0.811 | 7.46 | 15.34 | 0.585 | 1.077 | -9.69 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 91.21 | 50% | 0.651 | 8.42 | 10.83 | 0.529 | 0.785 | -10.71 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Break mây Ichimoku → 3 | 109.97 | 49.7% | 0.675 | 8.79 | 12.51 | 0.538 | 0.831 | -9.4 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: EMA 200 → 1 + SL tối đa (% Entry) → 0.425 + Số TP tối đa → 2 | 108.05 | 50.6% | 0.675 | 8.68 | 12.45 | 0.574 | 0.803 | -4.67 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Ngưỡng điểm vào kèo → 74 + Cổng Dow → CHẶT + Khung lớn phải tăng (trend ≥) → 0.375 | 82.82 | 52.3% | 0.76 | 6.59 | 12.57 | 0.321 | 1.118 | -10.72 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: BOS → 1 + Trọng số phần Momentum (/100) → 21 + R:R tối thiểu riêng khung 4H → 2 | 120.14 | 42% | 0.383 | 12.37 | 9.71 | 0.325 | 0.43 | -8.61 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm tối thiểu của vùng đặt SL → 4 | 114.1 | 51.4% | 0.771 | 7.91 | 14.42 | 0.641 | 0.908 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Entry (/100) → 33 | 103.72 | 49.7% | 0.696 | 9.09 | 11.41 | 0.536 | 0.882 | -7.08 |  |

### Vòng 717 — ngẫu nhiên nhiều thông số · mốc: tổng 114.77R, win 53.1%, rủi ro tụt vốn 7.49R, lời÷rủi ro 15.32

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Trọng số phần Elliott (/100) → 6 + Cộng thêm ngưỡng điểm khung 1W → -1 | 113.89 | 52.4% | 0.785 | 7.52 | 15.14 | 0.583 | 1.015 | -9.66 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + SL tối đa (% Entry) → 0.425 | 27.04 | 57.6% | 0.171 | 6.26 | 4.32 | 0.187 | 0.156 | -11.38 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm tối thiểu của vùng đặt SL → 2 + Ngưỡng điểm vào kèo → 74 | 38.74 | 42% | 0.44 | 9.91 | 3.91 | 0.372 | 0.523 | -9.28 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 113.9 | 51.4% | 0.77 | 7.8 | 14.6 | 0.611 | 0.942 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 114.77 | 53.1% | 0.803 | 7.49 | 15.32 | 0.596 | 1.037 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: POC anchored → 2 + R:R tối thiểu riêng khung 1D → 2 | 107.71 | 41.7% | 0.523 | 11.95 | 9.01 | 0.65 | 0.416 | -1.59 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: EMA 50 → 1.13 | 97.69 | 49.7% | 0.656 | 8 | 12.21 | 0.564 | 0.749 | -12.12 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần SL (/100) → 7 + Cộng thêm ngưỡng điểm khung 4H → 2 | 97.13 | 48.3% | 0.679 | 8.49 | 11.44 | 0.503 | 0.858 | -8.31 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần Elliott (/100) → 10 | 83.78 | 45.9% | 0.527 | 9.79 | 8.56 | 0.465 | 0.588 | -10.12 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 108.55 | 52.3% | 0.729 | 7.82 | 13.88 | 0.537 | 0.95 | -11.06 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 109.04 | 51.8% | 0.784 | 7.48 | 14.58 | 0.61 | 0.977 | -9.66 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: POC anchored → 4 | 114.39 | 52% | 0.763 | 7.95 | 14.39 | 0.564 | 0.967 | -4.48 |  |

### Vòng 716 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.27R, lời÷rủi ro 16.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 144.43 | 37.8% | 0.376 | 18.73 | 7.71 | 0.491 | 0.262 | 1.21 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 28.57 | 58.1% | 0.179 | 6.29 | 4.54 | 0.187 | 0.17 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần R:R (/100) → 33 + R:R tối thiểu riêng khung 1W → 2 | 105.2 | 50.7% | 0.721 | 8.01 | 13.13 | 0.596 | 0.845 | -10.52 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Xác nhận khung nhỏ (A2) → W | 78.78 | 37% | 0.301 | 20.23 | 3.89 | 0.334 | 0.265 | -6.99 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 116.25 | 52.7% | 0.796 | 7.75 | 15 | 0.614 | 1.006 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 155.68 | 38.8% | 0.544 | 17.91 | 8.69 | 0.401 | 0.69 | -17.65 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Cộng thêm ngưỡng điểm khung 1W → 2 | 39.79 | 41.9% | 0.463 | 9.46 | 4.21 | 0.372 | 0.578 | -8.58 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: BOS → 3 + Cộng thêm ngưỡng điểm khung 4H → 2 | 112.65 | 52.1% | 0.805 | 7.59 | 14.84 | 0.65 | 0.977 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Số TP tối đa → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 | 158.2 | 38.8% | 0.553 | 17.34 | 9.12 | 0.414 | 0.694 | -17.47 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 30.57 | 59.1% | 0.192 | 5.77 | 5.3 | 0.219 | 0.167 | -11.38 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Biên mây Ichimoku → 1.05 | 106.14 | 51.4% | 0.737 | 7.77 | 13.66 | 0.594 | 0.893 | -11.78 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 117.49 | 53.1% | 0.81 | 7.6 | 15.46 | 0.632 | 1.012 | -8.32 |  |

### Vòng 715 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.85

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Coin phải mạnh hơn BTC trong N ngày → 14 | 87.31 | 50.9% | 0.753 | 7.57 | 11.53 | 0.552 | 0.991 | -16.13 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 26.07 | 58.9% | 0.165 | 6.55 | 3.98 | 0.203 | 0.13 | -10.69 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: EMA 21 → 1.13 + Cộng thêm ngưỡng điểm khung 4H → 2 | 107.96 | 51% | 0.745 | 7.7 | 14.02 | 0.628 | 0.876 | -10 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: HVN anchored → 0.188 + R:R tối thiểu riêng khung 4H → 2 | 122.82 | 41.9% | 0.39 | 12.18 | 10.08 | 0.321 | 0.448 | -8.21 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 111.94 | 52.4% | 0.761 | 7.94 | 14.1 | 0.573 | 0.986 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: BOS → 1 + R:R tối thiểu riêng khung 1W → 2 | 110.13 | 52.1% | 0.754 | 7.8 | 14.12 | 0.648 | 0.861 | -10.69 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 112.27 | 51.7% | 0.764 | 7.9 | 14.21 | 0.575 | 0.983 | -10.63 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần R:R (/100) → 28 + Khung lớn phải tăng (trend ≥) → 0.375 | 67.32 | 46.4% | 0.612 | 8.83 | 7.62 | 0.473 | 0.761 | -7.31 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + R:R tối thiểu riêng khung 4H → 2 | 117.23 | 41% | 0.372 | 12.71 | 9.22 | 0.325 | 0.411 | -9.24 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng điểm phân kỳ dương ẩn → 2.25 | 111.83 | 51% | 0.771 | 7.92 | 14.12 | 0.574 | 1.001 | -8.46 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 110.87 | 49.7% | 0.697 | 8.33 | 13.31 | 0.529 | 0.896 | -11.07 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Entry (/100) → 33 + Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm vào kèo → 77 | 154.33 | 38.3% | 0.538 | 18.28 | 8.44 | 0.397 | 0.684 | -15.96 |  |

### Vòng 714 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.13

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.35 | 104.8 | 49.7% | 0.713 | 8.44 | 12.42 | 0.555 | 0.897 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Fib sóng 4 → 1.56 + Số TP tối đa → 2 | 117.8 | 53.5% | 0.818 | 7.27 | 16.2 | 0.639 | 1.024 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 25.18 | 57.2% | 0.166 | 6.4 | 3.93 | 0.174 | 0.158 | -11.19 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: POC anchored → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 | 105.25 | 46.5% | 0.612 | 10.68 | 9.85 | 0.617 | 0.608 | -6.17 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 78.99 | 46.9% | 0.608 | 8.96 | 8.82 | 0.456 | 0.764 | -10.19 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → -1 | 152.87 | 39.1% | 0.538 | 17.8 | 8.59 | 0.347 | 0.727 | -14.44 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 117.26 | 52.7% | 0.803 | 7.48 | 15.68 | 0.618 | 1.015 | -9.66 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib sóng 4 → 0.938 + SL tối đa (% Entry) → 0.425 + Trọng số phần Trend (/100) → 12 | 113.91 | 51.7% | 0.797 | 7.74 | 14.72 | 0.625 | 0.986 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 105.27 | 50.3% | 0.716 | 8.52 | 12.36 | 0.595 | 0.835 | -11.99 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm tối thiểu của vùng đặt SL → 2 + Số TP tối đa → 2 | 110.69 | 52% | 0.748 | 8.3 | 13.34 | 0.617 | 0.89 | -8.64 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 99.82 | 49% | 0.661 | 9.45 | 10.56 | 0.485 | 0.86 | -7.08 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 | 105.92 | 47% | 0.63 | 10.38 | 10.2 | 0.684 | 0.581 | -6.15 |  |

### Vòng 713 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Xác nhận khung nhỏ (A2) → W | 104.14 | 39.5% | 0.412 | 15.93 | 6.54 | 0.363 | 0.457 | -3.73 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức MACD → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 28.33 | 57.3% | 0.189 | 5.41 | 5.24 | 0.239 | 0.145 | -6.51 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + R:R tối thiểu tới TP1 → 2.63 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 27.55 | 58.1% | 0.203 | 5.85 | 4.71 | 0.216 | 0.19 | -10.44 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 1W (ATR) → 0.3 + % chốt ở TP1 → 0.287 | 107.68 | 44.7% | 0.677 | 10.01 | 10.76 | 0.563 | 0.802 | -11.28 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 124.97 | 44.8% | 0.543 | 11.36 | 11 | 0.585 | 0.501 | -10.74 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 21 → 1.13 | 122.44 | 41.7% | 0.433 | 14.98 | 8.17 | 0.442 | 0.422 | -7.89 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: POC anchored → 2 | 102.16 | 50.3% | 0.677 | 8.54 | 11.96 | 0.545 | 0.817 | -8.63 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Break mây Ichimoku → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Trend (/100) → 12 | 95.55 | 46.9% | 0.597 | 9.61 | 9.94 | 0.536 | 0.66 | -7.27 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL riêng khung 1D (ATR) → 0.3 | 157.52 | 38.7% | 0.516 | 19.27 | 8.17 | 0.418 | 0.605 | -10.35 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL riêng khung 1D (ATR) → 0.3 | 118.09 | 48.2% | 0.711 | 9.88 | 11.95 | 0.676 | 0.743 | -6.35 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: HVN anchored → 0.313 | 107.01 | 46% | 0.656 | 10.53 | 10.16 | 0.7 | 0.617 | -6.35 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: EMA 21 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 104.92 | 51% | 0.686 | 8.23 | 12.75 | 0.626 | 0.75 | -9.8 |  |

### Vòng 712 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.32R, lời÷rủi ro 16.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 116.28 | 53.1% | 0.802 | 7.46 | 15.59 | 0.634 | 0.992 | -8.34 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Fib sóng 4 → 1.56 + Lệnh chờ hết hạn sau (nến) → 6 | 97.07 | 50.4% | 0.719 | 8.06 | 12.04 | 0.565 | 0.905 | -8.27 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Số TP tối đa → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 + Cổng Dow → CHẶT | 83.48 | 52.3% | 0.752 | 6.88 | 12.13 | 0.305 | 1.146 | -10.72 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + % chốt ở TP1 → 0.287 + Điểm vùng: HVN anchored → 0.313 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 70.04 | 44.6% | 0.446 | 10.97 | 6.38 | 0.335 | 0.55 | -10.06 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Cộng thêm ngưỡng điểm khung 1W → -1 + Đệm SL riêng khung 1W (ATR) → 0.3 | 112.6 | 47.8% | 0.717 | 9.42 | 11.95 | 0.527 | 0.915 | -10.7 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Coin phải mạnh hơn BTC trong N ngày → 14 | 87.31 | 50.9% | 0.753 | 7.71 | 11.32 | 0.552 | 0.991 | -16.13 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Số TP tối đa → 2 | 119.14 | 53.5% | 0.827 | 7.32 | 16.28 | 0.64 | 1.043 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: Mức MACD → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 117.12 | 47.6% | 0.697 | 10.07 | 11.63 | 0.676 | 0.716 | -5.33 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 200 → 1 | 107.83 | 39.9% | 0.368 | 16.44 | 6.56 | 0.432 | 0.303 | -6.19 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Lệnh chờ hết hạn sau (nến) → 6 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 97.44 | 51.1% | 0.733 | 7.77 | 12.54 | 0.584 | 0.909 | -8.27 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Fib sóng 4 → 1.56 + Đệm SL riêng khung 1W (ATR) → 0.3 | 84.02 | 45.7% | 0.651 | 9.93 | 8.46 | 0.484 | 0.816 | -8.38 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: BOS → 1 + Điểm vùng: Fib sóng 4 → 1.56 | 114.18 | 50.6% | 0.714 | 8.61 | 13.26 | 0.562 | 0.908 | -4.84 |  |

### Vòng 711 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.5R, lời÷rủi ro 15.78

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + % chốt ở TP1 → 0.307 | 118.45 | 53.5% | 0.823 | 7.49 | 15.81 | 0.637 | 1.036 | -9.67 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 50 → 1.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 9.3 | 53.1% | 0.095 | 8.06 | 1.15 | 0.156 | 0.034 | -8.74 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Biên mây Ichimoku → 1.05 + % chốt ở TP1 → 0.307 | 105.72 | 52.1% | 0.734 | 7.67 | 13.78 | 0.58 | 0.897 | -11.79 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 117.26 | 52.7% | 0.803 | 7.46 | 15.72 | 0.618 | 1.015 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Mức RSI 30/70 → 1.13 | 114.97 | 52.5% | 0.815 | 7.4 | 15.54 | 0.606 | 1.054 | -9.69 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: POC volume profile cố định → 0.688 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng thêm ngưỡng điểm khung 1W → 2 | 34.48 | 57.9% | 0.217 | 5.84 | 5.9 | 0.262 | 0.175 | -11.38 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: POC volume profile cố định → 0.688 + Coin phải mạnh hơn BTC trong N ngày → 14 | 87.31 | 50.9% | 0.753 | 7.67 | 11.38 | 0.552 | 0.991 | -16.13 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 21 → 0.875 | 106.75 | 50.7% | 0.741 | 8.23 | 12.97 | 0.631 | 0.849 | -11.05 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 98 | 51% | 0.676 | 8.15 | 12.02 | 0.623 | 0.733 | -9.46 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Fib sóng 4 → 0.938 | 114.92 | 52.1% | 0.809 | 7.6 | 15.12 | 0.625 | 1.015 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: POC volume profile cố định → 0.813 + R:R tối thiểu riêng khung 1D → 2 | 108.64 | 46.5% | 0.581 | 9.39 | 11.57 | 0.616 | 0.547 | -7.63 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: EMA 200 → 1 + Điểm vùng: EMA 21 → 0.875 + Trọng số phần Divergence (/100) → 12 | 121.32 | 51.6% | 0.783 | 8.32 | 14.58 | 0.67 | 0.912 | -8.46 |  |

### Vòng 710 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.25R, lời÷rủi ro 16.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: POC anchored → 2 | 103.24 | 50.3% | 0.675 | 8.73 | 11.83 | 0.51 | 0.86 | -8.63 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib sóng 4 → 1.56 | 102.09 | 39.2% | 0.4 | 16.08 | 6.35 | 0.341 | 0.457 | -3.73 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 152.87 | 39.1% | 0.538 | 17.8 | 8.59 | 0.347 | 0.727 | -11.22 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Biên mây Ichimoku → 1.05 + Xác nhận khung nhỏ (A2) → W | 111.95 | 42.1% | 0.393 | 15.42 | 7.26 | 0.383 | 0.402 | -2.85 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: HVN cố định → 0.563 + Cổng Dow → TẮT | 136.88 | 45.5% | 0.643 | 10.79 | 12.69 | 0.575 | 0.71 | -20.34 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: MACD cắt lên Signal → 0.563 + Cộng thêm ngưỡng điểm khung 1D → 5 | 117.21 | 51.4% | 0.814 | 7.68 | 15.26 | 0.68 | 0.964 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Ngưỡng điểm vào kèo → 77 + Trọng số phần R:R (/100) → 28 | 94.93 | 45.2% | 0.65 | 10.51 | 9.03 | 0.455 | 0.851 | -8.12 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 87.76 | 45.2% | 0.566 | 11.05 | 7.94 | 0.419 | 0.759 | -6.58 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: EMA 200 → 1 + Cổng Dow → TẮT | 105.33 | 40.7% | 0.437 | 13.67 | 7.71 | 0.475 | 0.397 | -18.29 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 31.65 | 59% | 0.197 | 5.71 | 5.54 | 0.219 | 0.175 | -11.79 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: BOS → 1 | 116.83 | 50.7% | 0.847 | 7.81 | 14.96 | 0.67 | 1.063 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Cộng thêm ngưỡng điểm khung 1D → 5 + R:R tối thiểu tới TP1 → 2.63 | 89.57 | 51.2% | 0.728 | 8.25 | 10.86 | 0.493 | 0.984 | -11.92 |  |
