# Tối ưu tự động (chạy liên tục) — vòng 292

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 3174 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.9% | 97.2R | 0.6 | 5.74R | 9.69R | 10.03 | 31 | 12.9% | -13.01R | -0.42 | 13.01R |
| **Tốt nhất** | 144 | 52.1% | 110.28R | 0.766 | 6.15R | 7.73R | 14.27 | 27 | 18.5% | -8.64R | -0.32 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 27 | 48.1% | 17.16R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 107 | 53.3% | 85.39R | 20 | 25% | -2.83R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.9% | 97.2R | 9.69R | 10.03 | 31 | 12.9% | -13.01R |
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
| SL tối đa (% Entry) | 0.35 | **0.387** |
| Lệnh chờ hết hạn sau (nến) | 8 | **7** |
| Điểm tối thiểu vùng đặt lệnh chờ | 3 | **2** |
| Số TP tối đa | 2 | **3** |
| Điểm ADX > 25 và +DI trội (Momentum) | 3 | **4** |
| Điểm ADX < 13 cạn lực giảm (Momentum) | 1.5 | **2.5** |
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

### Vòng 292 — ngẫu nhiên nhiều thông số · mốc: tổng 110.28R, win 52.1%, rủi ro tụt vốn 7.73R, lời÷rủi ro 14.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Biên mây Ichimoku → 1.35 | 106.5 | 50.7% | 0.729 | 8.22 | 12.96 | 0.54 | 0.953 | -7.62 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Lệnh chờ hết hạn sau (nến) → 8 | 105.3 | 49% | 0.688 | 9 | 11.7 | 0.583 | 0.81 | -10.23 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 95.59 | 47.7% | 0.617 | 9.16 | 10.44 | 0.609 | 0.626 | -12.06 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Đệm SL riêng khung 1W (ATR) → 0.3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 146.66 | 38.3% | 0.545 | 18.07 | 8.12 | 0.307 | 0.762 | -11.02 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 4H (ATR) → 0.3 + Khung lớn phải tăng (trend ≥) → 0.375 | 159.44 | 38.3% | 0.54 | 17.75 | 8.98 | 0.454 | 0.627 | -9.12 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: EMA 200 → 1 | 93.21 | 46.8% | 0.59 | 9.47 | 9.84 | 0.441 | 0.773 | -4.55 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 | 106.96 | 46.2% | 0.677 | 10.48 | 10.21 | 0.658 | 0.695 | -10.5 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Đệm SL riêng khung 1D (ATR) → 0.3 | 104.74 | 46.6% | 0.651 | 10.58 | 9.9 | 0.611 | 0.688 | -3 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: POC anchored → 2 | 109.83 | 47.5% | 0.678 | 8.97 | 12.24 | 0.671 | 0.686 | -8.19 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: BOS → 1 | 111.18 | 51.3% | 0.741 | 8.08 | 13.76 | 0.571 | 0.921 | -1.38 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: MACD cắt lên Signal → 0.438 | 100.87 | 48.2% | 0.608 | 10.11 | 9.98 | 0.475 | 0.786 | -1.06 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: HVN anchored → 0.188 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Break mây Ichimoku → 1 | 99.4 | 49.3% | 0.672 | 8.46 | 11.75 | 0.523 | 0.837 | -8.68 |  |

### Vòng 291 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.20

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: BOS → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 77.75 | 39.1% | 0.327 | 16.49 | 4.71 | 0.336 | 0.318 | -6.46 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Entry (/100) → 28 | 112.63 | 52.1% | 0.771 | 7.81 | 14.42 | 0.588 | 0.994 | -8.64 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 21 → 0.875 + Trọng số phần R:R (/100) → 28 | 112.12 | 50.7% | 0.779 | 7.94 | 14.12 | 0.68 | 0.889 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + R:R tối thiểu riêng khung 4H → 2 | 119.84 | 42% | 0.382 | 12.36 | 9.7 | 0.336 | 0.42 | -10.18 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + % chốt ở TP1 → 0.287 + Cộng thêm ngưỡng điểm khung 4H → 2 | 109.12 | 51.8% | 0.797 | 7.41 | 14.73 | 0.618 | 1 | -8.65 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng điểm phân kỳ dương ẩn → 3.5 + Cộng thêm ngưỡng điểm khung 1W → -1 + Đệm SL riêng khung 1W (ATR) → 0.3 | 95.54 | 49.6% | 0.687 | 8.97 | 10.65 | 0.608 | 0.767 | -8.86 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: POC volume profile cố định → 0.688 | 112.04 | 52.1% | 0.789 | 7.49 | 14.96 | 0.64 | 0.961 | -8.64 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trọng số phần Elliott (/100) → 6 | 81.43 | 37% | 0.342 | 17.3 | 4.71 | 0.327 | 0.356 | -4.29 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 89.07 | 39.1% | 0.374 | 15.17 | 5.87 | 0.327 | 0.412 | -4.58 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Trọng số phần Trend (/100) → 19 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 108.93 | 50.3% | 0.751 | 8.04 | 13.55 | 0.503 | 1.032 | -8.5 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần R:R (/100) → 28 | 58.7 | 40.2% | 0.481 | 11.05 | 5.31 | 0.44 | 0.518 | -4.76 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Đệm SL riêng khung 1W (ATR) → 0.3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 68.11 | 44.4% | 0.582 | 10.36 | 6.57 | 0.526 | 0.64 | -7.99 |  |

### Vòng 290 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.55R, lời÷rủi ro 15.04

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Cộng thêm ngưỡng điểm khung 4H → 2 | 99.97 | 49% | 0.653 | 9.29 | 10.76 | 0.466 | 0.876 | -7.08 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Số TP tối đa → 2 + Trọng số phần Entry (/100) → 28 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.31 | 57.3% | 0.187 | 5.79 | 5.06 | 0.221 | 0.153 | -10.69 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 | 113.57 | 52.8% | 0.789 | 7.55 | 15.04 | 0.624 | 0.983 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 100.71 | 50% | 0.663 | 9.22 | 10.92 | 0.512 | 0.849 | -7.08 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 109.4 | 50.7% | 0.76 | 7.84 | 13.95 | 0.653 | 0.873 | -10 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Ngưỡng điểm vào kèo → 74 | 100.78 | 50% | 0.672 | 8.55 | 11.79 | 0.588 | 0.758 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: BOS → 1 + Điểm vùng: EMA 21 → 1.13 | 107.2 | 51.4% | 0.724 | 7.61 | 14.09 | 0.583 | 0.895 | -11.4 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần Entry (/100) → 28 + Điểm vùng: EMA 50 → 1.13 | 110.53 | 51% | 0.752 | 7.93 | 13.94 | 0.576 | 0.973 | -10.04 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: POC anchored → 2 | 78.74 | 44.1% | 0.518 | 10.69 | 7.37 | 0.359 | 0.709 | -8.13 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 112.45 | 52.4% | 0.775 | 7.93 | 14.18 | 0.603 | 0.981 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Biên mây Ichimoku → 1.05 | 93.35 | 48.7% | 0.591 | 10.04 | 9.3 | 0.446 | 0.768 | -10.17 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Coin phải mạnh hơn BTC trong N ngày → 14 | 80.71 | 50.8% | 0.684 | 8.09 | 9.98 | 0.613 | 0.768 | -18.25 |  |

### Vòng 289 — ngẫu nhiên nhiều thông số · mốc: tổng 125.12R, win 53.1%, rủi ro tụt vốn 7.45R, lời÷rủi ro 16.79

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: HVN cố định → 0.563 | 105.5 | 48.4% | 0.681 | 8.17 | 12.91 | 0.565 | 0.818 | -12.06 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần Entry (/100) → 28 + Trọng số phần SL (/100) → 7 | 105.31 | 50.7% | 0.774 | 8.17 | 12.89 | 0.7 | 0.868 | -9.29 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Đệm SL riêng khung 1D (ATR) → 0.3 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: HVN cố định → 0.438 | 107.5 | 46.6% | 0.659 | 10.22 | 10.52 | 0.648 | 0.67 | -8.06 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần SL (/100) → 7 + Khung lớn phải tăng (trend ≥) → 0.425 | 32.45 | 56.1% | 0.209 | 5.64 | 5.75 | 0.29 | 0.137 | -9.47 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: EMA 50 → 1.13 + Cổng Dow → TẮT + Trọng số phần Momentum (/100) → 25 | 126.46 | 43.3% | 0.588 | 11.35 | 11.14 | 0.632 | 0.547 | -15.37 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + % chốt ở TP1 → 0.307 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 112.89 | 35.2% | 0.491 | 19.86 | 5.68 | 0.42 | 0.568 | -13.68 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần SL (/100) → 9 + Điểm vùng: POC anchored → 4 | 118.96 | 50.9% | 0.73 | 8.31 | 14.32 | 0.609 | 0.864 | -5.51 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 119.99 | 49.4% | 0.769 | 8.51 | 14.1 | 0.719 | 0.829 | -15.53 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 109.93 | 51.4% | 0.785 | 8.03 | 13.69 | 0.642 | 0.96 | -12.54 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Break mây Ichimoku → 3 | 92.86 | 42.2% | 0.497 | 11.22 | 8.28 | 0.49 | 0.503 | -6.57 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Fib sóng 4 → 0.938 | 87.17 | 47.7% | 0.681 | 9.14 | 9.54 | 0.418 | 0.928 | -11.73 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 113.68 | 52.4% | 0.784 | 7.97 | 14.26 | 0.748 | 0.826 | -13.77 |  |

### Vòng 288 — ngẫu nhiên nhiều thông số · mốc: tổng 125.12R, win 53.1%, rủi ro tụt vốn 7.45R, lời÷rủi ro 16.79

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 200 → 1 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 122.83 | 50% | 0.749 | 8.23 | 14.92 | 0.767 | 0.726 | -7.38 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Trọng số phần Divergence (/100) → 12 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: EMA 21 → 0.875 | 122.06 | 50.3% | 0.83 | 8.1 | 15.07 | 0.763 | 0.911 | -9.66 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Xác nhận khung nhỏ (A2) → W | 71.71 | 38.3% | 0.289 | 18.05 | 3.97 | 0.309 | 0.269 | -7.53 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: HVN anchored → 0.313 + Cộng thêm ngưỡng điểm khung 1W → 2 + R:R tối thiểu riêng khung 1D → 2 | 69.17 | 43.2% | 0.474 | 11.1 | 6.23 | 0.527 | 0.426 | -5.56 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Cộng điểm phân kỳ dương ẩn → 2.63 | 114.6 | 52.1% | 0.785 | 7.73 | 14.83 | 0.72 | 0.86 | -12.8 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: MACD cắt lên Signal → 0.563 | 105.09 | 50.4% | 0.778 | 7.94 | 13.24 | 0.746 | 0.817 | -9.29 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Break mây Ichimoku → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 72.95 | 43.3% | 0.41 | 12.11 | 6.02 | 0.376 | 0.443 | -14.33 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: EMA 50 → 0.75 | 73.96 | 44.7% | 0.465 | 10.89 | 6.79 | 0.3 | 0.629 | -10.85 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Trọng số phần Momentum (/100) → 21 | 122.27 | 51.4% | 0.861 | 7.51 | 16.28 | 0.791 | 0.939 | -10.68 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cổng Dow → TẮT | 28.1 | 51.5% | 0.139 | 8.29 | 3.39 | 0.229 | 0.055 | -16.48 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 81.14 | 47.2% | 0.766 | 8.43 | 9.63 | 0.628 | 0.932 | -8.47 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 106.88 | 50.4% | 0.792 | 7.87 | 13.58 | 0.639 | 0.971 | -13.82 |  |

### Vòng 287 — ngẫu nhiên nhiều thông số · mốc: tổng 125.12R, win 53.1%, rủi ro tụt vốn 7.38R, lời÷rủi ro 16.95

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 21 → 1.13 | 95.06 | 44.1% | 0.537 | 11.92 | 7.97 | 0.556 | 0.519 | -8.29 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: POC volume profile cố định → 0.813 | 118.55 | 52% | 0.79 | 8.2 | 14.46 | 0.748 | 0.839 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Elliott (/100) → 6 | 114.4 | 51.7% | 0.778 | 7.72 | 14.82 | 0.708 | 0.86 | -12.8 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Biên mây Ichimoku → 1.05 | 67.24 | 37.1% | 0.316 | 18 | 3.74 | 0.372 | 0.256 | -3.24 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 1W → 2 | 52.16 | 50% | 0.669 | 7.21 | 7.23 | 0.249 | 1.088 | -7.9 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Số TP tối đa → 2 + Trọng số phần Trend (/100) → 19 | 84.58 | 38.5% | 0.342 | 17.02 | 4.97 | 0.318 | 0.365 | -5.38 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 | 99.42 | 42% | 0.529 | 12.46 | 7.98 | 0.575 | 0.49 | -9.26 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 100.19 | 48.5% | 0.737 | 8.8 | 11.39 | 0.505 | 0.975 | -11.73 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + R:R tối thiểu tới TP1 → 2.38 | 91.18 | 44.5% | 0.556 | 9.52 | 9.58 | 0.527 | 0.584 | -12 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: EMA 200 → 1 | 111.54 | 48.3% | 0.634 | 9.08 | 12.28 | 0.703 | 0.562 | -5.65 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Coin phải mạnh hơn BTC trong N ngày → 14 | 87.97 | 50% | 0.698 | 8.39 | 10.49 | 0.718 | 0.676 | -17.15 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 30.37 | 40.7% | 0.375 | 9.17 | 3.31 | 0.398 | 0.351 | -7.3 |  |

### Vòng 286 — ngẫu nhiên nhiều thông số · mốc: tổng 125.12R, win 53.1%, rủi ro tụt vốn 7.44R, lời÷rủi ro 16.82

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần R:R (/100) → 33 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 125.57 | 45.7% | 0.546 | 10.71 | 11.72 | 0.569 | 0.522 | -11.26 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Mức MACD → 0.875 + Trọng số phần Elliott (/100) → 6 | 116.74 | 51.4% | 0.811 | 7.67 | 15.22 | 0.719 | 0.919 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + R:R tối thiểu riêng khung 1D → 2 | 102.69 | 46.5% | 0.604 | 9.22 | 11.14 | 0.616 | 0.593 | -8.95 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 122.43 | 51.4% | 0.839 | 7.65 | 16 | 0.67 | 1.032 | -10.54 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Elliott (/100) → 6 | 78.03 | 47.2% | 0.736 | 9.05 | 8.62 | 0.656 | 0.829 | -7.51 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần SL (/100) → 9 + Điểm vùng: HVN cố định → 0.563 + R:R tối thiểu tới TP1 → 2.38 | 98.66 | 47.3% | 0.598 | 8.99 | 10.97 | 0.557 | 0.638 | -12 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC anchored → 4 | 164.93 | 39.4% | 0.575 | 17.6 | 9.37 | 0.443 | 0.713 | -11.87 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Biên mây Ichimoku → 1.35 | 171.98 | 38.6% | 0.562 | 17.37 | 9.9 | 0.467 | 0.659 | -10.23 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: HVN cố định → 0.438 | 93.69 | 47.5% | 0.593 | 9.38 | 9.99 | 0.464 | 0.739 | -13.31 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm tối thiểu của vùng đặt SL → 2 | 89.2 | 46.7% | 0.587 | 10.17 | 8.77 | 0.476 | 0.728 | -10.12 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Lệnh chờ hết hạn sau (nến) → 6 | 106.54 | 51.1% | 0.801 | 7.72 | 13.8 | 0.746 | 0.868 | -9.29 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần R:R (/100) → 33 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 34.02 | 39.1% | 0.391 | 10.61 | 3.21 | 0.315 | 0.489 | -8.58 |  |

### Vòng 285 — ngẫu nhiên nhiều thông số · mốc: tổng 125.12R, win 53.1%, rủi ro tụt vốn 7.47R, lời÷rủi ro 16.75

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 84.62 | 44.5% | 0.58 | 10.17 | 8.32 | 0.507 | 0.673 | -11.76 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + SL tối đa (% Entry) → 0.35 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 117.33 | 50.7% | 0.815 | 8.18 | 14.34 | 0.686 | 0.968 | -10.66 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 118.58 | 42% | 0.498 | 11.47 | 10.34 | 0.5 | 0.497 | -10.53 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: EMA 21 → 1.13 + Khung lớn phải tăng (trend ≥) → 0.375 | 113.84 | 50% | 0.759 | 8.07 | 14.11 | 0.694 | 0.833 | -9.71 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 118.29 | 51.7% | 0.827 | 7.58 | 15.61 | 0.679 | 1.005 | -11.97 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: EMA 200 → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng thêm ngưỡng điểm khung 4H → 2 | 112.24 | 51.3% | 0.72 | 8.61 | 13.04 | 0.712 | 0.729 | -4.87 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 126.37 | 52.4% | 0.884 | 7.37 | 17.15 | 0.81 | 0.972 | -13.94 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 110.33 | 46.9% | 0.69 | 10.36 | 10.65 | 0.636 | 0.743 | -8.01 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + SL tối đa (% Entry) → 0.35 + Đệm SL riêng khung 1W (ATR) → 0.3 | 90.98 | 46.3% | 0.679 | 9.32 | 9.76 | 0.491 | 0.862 | -11.73 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: EMA 50 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 121.29 | 51% | 0.825 | 7.92 | 15.31 | 0.708 | 0.973 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Trọng số phần SL (/100) → 9 + Đệm SL riêng khung 4H (ATR) → 0.3 | 168.78 | 38.6% | 0.572 | 18.48 | 9.13 | 0.46 | 0.689 | -15.47 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + R:R tối thiểu riêng khung 4H → 2 | 129.34 | 42% | 0.408 | 12.19 | 10.61 | 0.435 | 0.386 | -11.83 |  |

### Vòng 284 — ngẫu nhiên nhiều thông số · mốc: tổng 125.12R, win 53.1%, rủi ro tụt vốn 7.45R, lời÷rủi ro 16.79

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 50 → 1.13 | 78.03 | 46.2% | 0.75 | 8.87 | 8.8 | 0.656 | 0.864 | -6.49 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 26.14 | 56.2% | 0.161 | 7.22 | 3.62 | 0.191 | 0.131 | -11.76 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Mức MACD → 1.13 + Trọng số phần Trend (/100) → 12 | 119.19 | 50.3% | 0.822 | 7.97 | 14.95 | 0.714 | 0.951 | -12.08 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 33.13 | 58% | 0.211 | 5.71 | 5.8 | 0.255 | 0.168 | -10.91 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: MACD cắt lên Signal → 0.438 + Số TP tối đa → 2 | 123.7 | 44.2% | 0.531 | 11.44 | 10.81 | 0.539 | 0.522 | -10.87 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm tối thiểu của vùng đặt SL → 4 | 106.36 | 50.7% | 0.739 | 7.78 | 13.67 | 0.6 | 0.894 | -10.68 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 118.2 | 50.3% | 0.815 | 8.08 | 14.63 | 0.768 | 0.864 | -11.02 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Ngưỡng điểm vào kèo → 77 | 94.15 | 46.5% | 0.663 | 9.07 | 10.38 | 0.48 | 0.862 | -12.53 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 123.38 | 52.8% | 0.857 | 7.39 | 16.7 | 0.75 | 0.983 | -10.68 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Biên mây Ichimoku → 1.05 + Ngưỡng điểm vào kèo → 77 | 92.14 | 50.4% | 0.801 | 7.79 | 11.83 | 0.846 | 0.751 | -19.27 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Số TP tối đa → 2 | 97.05 | 50% | 0.665 | 8.25 | 11.76 | 0.677 | 0.652 | -10.79 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Fib sóng 4 → 0.938 | 122.78 | 49.3% | 0.903 | 7.84 | 15.66 | 0.791 | 1.033 | -8.62 |  |

### Vòng 283 — ngẫu nhiên nhiều thông số · mốc: tổng 125.12R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.91

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cộng thêm ngưỡng điểm khung 1D → 7 | 87.06 | 53.2% | 0.784 | 7.25 | 12.01 | 0.532 | 0.999 | -12.71 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: BOS → 3 | 124.11 | 52.7% | 0.85 | 7.74 | 16.03 | 0.74 | 0.983 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 120.86 | 51.7% | 0.822 | 7.54 | 16.03 | 0.727 | 0.939 | -12.94 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Fib sóng 4 → 0.938 | 98.77 | 49.3% | 0.65 | 9.25 | 10.68 | 0.488 | 0.849 | -8.1 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 50 → 0.75 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 36.89 | 43.9% | 0.3 | 12.12 | 3.04 | 0.258 | 0.351 | -6.92 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 118.63 | 52% | 0.791 | 7.79 | 15.23 | 0.65 | 0.944 | -5.5 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: POC anchored → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 69.43 | 36.5% | 0.253 | 19.01 | 3.65 | 0.254 | 0.253 | -12.58 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Ngưỡng điểm vào kèo → 77 | 110.58 | 44.3% | 0.485 | 11.58 | 9.55 | 0.556 | 0.413 | -6.41 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Đệm SL riêng khung 1D (ATR) → 0.3 | 107.51 | 46.9% | 0.672 | 10.26 | 10.48 | 0.659 | 0.685 | -6.36 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần Momentum (/100) → 25 | 120.41 | 51.4% | 0.848 | 7.42 | 16.23 | 0.764 | 0.944 | -10.51 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Trend (/100) → 12 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 120.68 | 51% | 0.769 | 8.16 | 14.79 | 0.673 | 0.887 | -12.27 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Momentum (/100) → 21 | 123.8 | 52.4% | 0.842 | 7.49 | 16.53 | 0.729 | 0.981 | -10.68 |  |
