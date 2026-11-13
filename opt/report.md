# Tối ưu tự động (chạy liên tục) — vòng 151

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 1496 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 47.5% | 106.39R | 0.657 | 5.5R | 9.33R | 11.40 | 34 | 11.8% | -16.07R | -0.473 | 16.07R |
| **Tốt nhất** | 146 | 52.7% | 131.33R | 0.9 | 5.15R | 7.35R | 17.87 | 31 | 12.9% | -14.96R | -0.483 | 14.96R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 53.6% | 33.37R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.93R | 2 | 0% | -2.04R |
| 4H | 107 | 53.3% | 91.03R | 22 | 18.2% | -7.25R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 138 (Ghép: Điểm vùng: HVN anchored → 0.125 + Khoảng cách tối thiểu TP1 (ATR) → 0.875).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 47.5% | 106.39R | 9.33R | 11.40 | 34 | 11.8% | -16.07R |
| **Đề xuất** | 171 | 52.6% | 144.79R | 7.32R | 19.78 | 33 | 12.1% | -15.17R |

| Thông số | Bot thật | Đề xuất |
|---|---|---|
| Ngưỡng điểm vào kèo | 70 | **75** |
| SL tối đa (% Entry) | 0.35 | **0.387** |
| Khoảng cách tối thiểu TP1 (ATR) | 0.75 | **0.875** |
| Lệnh chờ hết hạn sau (nến) | 8 | **7** |
| Số TP tối đa | 2 | **3** |
| Điểm ADX > 25 và +DI trội (Momentum) | 3 | **4** |
| Điểm ADX < 13 cạn lực giảm (Momentum) | 1.5 | **2.5** |
| Lọc BTC: giá trên EMA bao nhiêu ngày | 200 | **150** |
| Trọng số phần Trend (/100) | 30 | **15** |
| Trọng số phần Momentum (/100) | 15 | **23** |
| Trọng số phần R:R (/100) | 20 | **30** |
| Trọng số phần SL (/100) | 5 | **8** |
| Điểm vùng: EMA 50 | 0.75 | **0.94** |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) | 2.5 | **3.13** |
| Điểm vùng: HVN anchored | 0.25 | **0.125** |
| Điểm vùng: HVN cố định | 0.25 | **0.5** |

## Thông số khác với bot thật

| Thông số | Bot thật | Đề xuất |
|---|---|---|
| Ngưỡng điểm vào kèo | 70 | **75** |
| SL tối đa (% Entry) | 0.35 | **0.387** |
| Lệnh chờ hết hạn sau (nến) | 8 | **7** |
| Số TP tối đa | 2 | **3** |
| Điểm ADX > 25 và +DI trội (Momentum) | 3 | **4** |
| Điểm ADX < 13 cạn lực giảm (Momentum) | 1.5 | **2.5** |
| Lọc BTC: giá trên EMA bao nhiêu ngày | 200 | **150** |
| Trọng số phần Trend (/100) | 30 | **15** |
| Trọng số phần Momentum (/100) | 15 | **23** |
| Trọng số phần R:R (/100) | 20 | **30** |
| Trọng số phần SL (/100) | 5 | **8** |
| Điểm vùng: EMA 50 | 0.75 | **0.94** |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) | 2.5 | **3.13** |
| Điểm vùng: HVN cố định | 0.25 | **0.5** |

## Các thay đổi đã nhận (mới nhất trước)

| Vòng | Thông số | Từ → Thành | Tổng R | Tỷ lệ thắng | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro |
|---|---|---|---|---|---|---|
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

### Vòng 151 — ngẫu nhiên nhiều thông số · mốc: tổng 131.33R, win 52.7%, rủi ro tụt vốn 7.35R, lời÷rủi ro 17.87

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1W (ATR) → 0.3 | 80.84 | 36.5% | 0.369 | 16.9 | 4.78 | 0.311 | 0.419 | -12.57 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + SL tối đa (% Entry) → 0.425 | 80.14 | 45.3% | 0.448 | 11.24 | 7.13 | 0.409 | 0.49 | -17.61 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: EMA 50 → 0.75 | 127.47 | 52.1% | 0.873 | 7.41 | 17.2 | 0.747 | 1.017 | -13.64 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + SL tối đa (% Entry) → 0.35 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 122.3 | 48.9% | 0.88 | 8.42 | 14.52 | 0.72 | 1.068 | -13.46 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 94.63 | 46.3% | 0.635 | 9.58 | 9.88 | 0.488 | 0.821 | -12.22 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Elliott (/100) → 10 | 129.86 | 52.1% | 0.889 | 7.43 | 17.48 | 0.777 | 1.022 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 | 90.46 | 49.2% | 0.767 | 8.42 | 10.74 | 0.673 | 0.886 | -20.41 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Cộng thêm ngưỡng điểm khung 1W → -1 | 102.66 | 47.5% | 0.634 | 9.91 | 10.36 | 0.605 | 0.664 | -11.24 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + R:R tối thiểu riêng khung 1D → 2 | 110.33 | 46.8% | 0.645 | 8.97 | 12.3 | 0.573 | 0.715 | -11.74 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Trọng số phần Entry (/100) → 33 | 119.54 | 51.7% | 0.824 | 7.5 | 15.94 | 0.67 | 1 | -14.96 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: EMA 50 → 0.75 | 128.57 | 50.7% | 0.846 | 8.16 | 15.76 | 0.754 | 0.948 | -15.35 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 | 125.68 | 51.7% | 0.867 | 7.53 | 16.69 | 0.715 | 1.044 | -15.72 |  |

### Vòng 150 — ngẫu nhiên nhiều thông số · mốc: tổng 132.16R, win 53.6%, rủi ro tụt vốn 7.29R, lời÷rủi ro 18.13

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 115.72 | 46.1% | 0.701 | 8.97 | 12.9 | 0.742 | 0.663 | -10.75 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Mức RSI 30/70 → 1.13 | 128.51 | 52.9% | 0.918 | 7.37 | 17.44 | 0.824 | 1.026 | -13.95 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần R:R (/100) → 33 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 118.96 | 52.9% | 0.85 | 7.59 | 15.67 | 0.835 | 0.867 | -13.55 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 94.7 | 49.3% | 0.649 | 8.78 | 10.79 | 0.627 | 0.671 | -14.24 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Mức RSI 30/70 → 1.13 | 132.11 | 53.6% | 0.944 | 7.27 | 18.17 | 0.824 | 1.081 | -13.96 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Khung lớn phải tăng (trend ≥) → 0.425 + Đệm SL riêng khung 4H (ATR) → 0.3 | 161.88 | 37.5% | 0.514 | 19.53 | 8.29 | 0.392 | 0.641 | -17.88 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.813 | 110.99 | 48.6% | 0.804 | 8.41 | 13.2 | 0.572 | 1.043 | -13.98 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cổng Dow → CHẶT | 85.56 | 48.4% | 0.69 | 8.93 | 9.58 | 0.571 | 0.768 | -13.65 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 122.88 | 51.4% | 0.878 | 7.76 | 15.84 | 0.779 | 0.988 | -14.45 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 1W → 2 | 166.05 | 38.4% | 0.575 | 17.51 | 9.48 | 0.428 | 0.716 | -18.17 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Trend (/100) → 19 + Cộng thêm ngưỡng điểm khung 4H → 2 | 104.65 | 51.3% | 0.926 | 7.59 | 13.79 | 0.851 | 1.018 | -20.42 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Lệnh chờ hết hạn sau (nến) → 8 + Cộng thêm ngưỡng điểm khung 1D → 7 | 121.67 | 50.3% | 0.806 | 8.54 | 14.25 | 0.666 | 0.967 | -13.65 |  |

### Vòng 149 — ngẫu nhiên nhiều thông số · mốc: tổng 131.33R, win 52.7%, rủi ro tụt vốn 7.35R, lời÷rủi ro 17.87

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + R:R tối thiểu riêng khung 4H → 2 | 141.41 | 42.5% | 0.432 | 12.09 | 11.7 | 0.432 | 0.432 | -9.64 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 69.35 | 44.9% | 0.546 | 10.3 | 6.73 | 0.438 | 0.667 | -7.18 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần Divergence (/100) → 12 | 110.2 | 49.7% | 0.74 | 8.48 | 13 | 0.72 | 0.762 | -14.72 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 | 164.52 | 38.1% | 0.514 | 19.02 | 8.65 | 0.465 | 0.56 | -15.87 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Trọng số phần Trend (/100) → 12 | 131.33 | 52.7% | 0.9 | 7.35 | 17.87 | 0.777 | 1.044 | -14.96 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 83.28 | 46.4% | 0.757 | 8.96 | 9.29 | 0.615 | 0.934 | -9.89 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: EMA 200 → 1 + % chốt ở TP1 → 0.307 | 121.36 | 51.6% | 0.793 | 7.94 | 15.28 | 0.681 | 0.941 | -10.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng thêm ngưỡng điểm khung 1D → 7 | 119.49 | 45.3% | 0.506 | 10.51 | 11.37 | 0.559 | 0.453 | -14.11 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Trend (/100) → 19 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 81.23 | 45.7% | 0.7 | 8.97 | 9.06 | 0.65 | 0.76 | -9.24 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 126.87 | 48.4% | 0.819 | 8.57 | 14.8 | 0.664 | 1.002 | -14.85 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Coin phải mạnh hơn BTC trong N ngày → 14 | 93.84 | 48% | 0.739 | 8.49 | 11.05 | 0.692 | 0.797 | -21.43 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Break mây Ichimoku → 1 | 73.81 | 44.2% | 0.535 | 11.45 | 6.45 | 0.52 | 0.549 | -19.19 |  |

### Vòng 148 — ghép cặp thay đổi suýt đạt · mốc: tổng 131.33R, win 52.7%, rủi ro tụt vốn 7.22R, lời÷rủi ro 18.19

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: MACD cắt lên Signal → 0.563 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 131.33 | 52.7% | 0.9 | 7.22 | 18.19 | 0.777 | 1.044 | -14.96 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 0.875 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 | 141.35 | 52% | 0.817 | 7.88 | 17.94 | 0.639 | 1.015 | -15.18 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 141.35 | 52% | 0.817 | 7.88 | 17.94 | 0.639 | 1.015 | -15.18 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 141.35 | 52% | 0.817 | 7.88 | 17.94 | 0.639 | 1.015 | -15.18 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 131.34 | 52.7% | 0.9 | 7.27 | 18.07 | 0.777 | 1.044 | -14.96 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 131.34 | 52.7% | 0.9 | 7.27 | 18.07 | 0.777 | 1.044 | -14.96 |  |

### Vòng 147 — tinh chỉnh giá trị giữa · mốc: tổng 131.33R, win 52.7%, rủi ro tụt vốn 7.44R, lời÷rủi ro 17.65

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: Fib sóng 4: 1.25 → 0.938 (tinh chỉnh) | 129.59 | 52.4% | 0.894 | 7.5 | 17.28 | 0.765 | 1.044 | -14.96 |  |
| Điểm vùng: Fib sóng 4: 1.25 → 1.56 (tinh chỉnh) | 131.33 | 52.7% | 0.9 | 7.44 | 17.65 | 0.777 | 1.044 | -14.96 |  |

### Vòng 146 — ngẫu nhiên nhiều thông số · mốc: tổng 131.33R, win 52.7%, rủi ro tụt vốn 7.28R, lời÷rủi ro 18.04

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Lệnh chờ hết hạn sau (nến) → 8 + Cổng Dow → CHẶT | 75.09 | 47.9% | 0.642 | 7.95 | 9.45 | 0.241 | 0.998 | -18.36 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 200 → 1 + Trọng số phần Entry (/100) → 33 + R:R tối thiểu riêng khung 4H → 2 | 126.44 | 41.6% | 0.393 | 12.36 | 10.23 | 0.38 | 0.403 | -3.59 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 | 89.68 | 45.8% | 0.579 | 10.45 | 8.58 | 0.542 | 0.609 | -14.6 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Entry (/100) → 28 | 131.14 | 52.4% | 0.892 | 7.55 | 17.37 | 0.765 | 1.044 | -14.96 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: EMA 200 → 3 | 120.88 | 49.4% | 0.765 | 8.5 | 14.22 | 0.646 | 0.9 | -17 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 50 → 0.75 | 111.01 | 50.7% | 0.76 | 8.21 | 13.52 | 0.745 | 0.778 | -14.72 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 3.5 + Trọng số phần R:R (/100) → 28 | 103.97 | 45.2% | 0.626 | 10.65 | 9.76 | 0.565 | 0.682 | -13.57 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Cộng thêm ngưỡng điểm khung 1W → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 112.6 | 48.6% | 0.782 | 8.5 | 13.25 | 0.638 | 0.957 | -13.87 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 33.92 | 57% | 0.215 | 5.7 | 5.95 | 0.288 | 0.146 | -10.26 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 27.69 | 55% | 0.147 | 7.04 | 3.93 | 0.198 | 0.103 | -8.06 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 106.1 | 46.3% | 0.647 | 10.96 | 9.68 | 0.571 | 0.717 | -13.57 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 128.01 | 51.7% | 0.859 | 7.61 | 16.82 | 0.75 | 0.99 | -15.93 |  |

### Vòng 145 — ngẫu nhiên nhiều thông số · mốc: tổng 131.31R, win 52.7%, rủi ro tụt vốn 7.31R, lời÷rủi ro 17.96

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: EMA 50 → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 117.13 | 51.7% | 0.808 | 7.57 | 15.47 | 0.642 | 1 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần Elliott (/100) → 10 + Đệm SL riêng khung 1W (ATR) → 0.3 | 89.19 | 44.3% | 0.534 | 11.33 | 7.87 | 0.385 | 0.688 | -15.45 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Xác nhận khung nhỏ (A2) → W | 103.53 | 38.9% | 0.391 | 16.13 | 6.42 | 0.364 | 0.417 | -9.48 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Momentum (/100) → 21 | 118.92 | 40.8% | 0.385 | 13.19 | 9.02 | 0.386 | 0.384 | -7.9 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + R:R tối thiểu tới TP1 → 2.63 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 114.57 | 48.3% | 0.79 | 9 | 12.73 | 0.631 | 0.991 | -17.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần SL (/100) → 9 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 177.9 | 39.3% | 0.583 | 17.53 | 10.15 | 0.475 | 0.697 | -12.82 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: EMA 21 → 1.13 | 117.87 | 50% | 0.765 | 8.49 | 13.88 | 0.597 | 0.962 | -17.23 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Entry (/100) → 28 | 102.09 | 49.3% | 0.672 | 8.87 | 11.51 | 0.54 | 0.826 | -14.03 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 + Trọng số phần Momentum (/100) → 21 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 90.37 | 45.9% | 0.619 | 9.72 | 9.3 | 0.453 | 0.82 | -12.72 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Elliott (/100) → 10 | 29.12 | 53.7% | 0.195 | 6.41 | 4.54 | 0.253 | 0.138 | -9.22 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Ngưỡng điểm vào kèo → 77 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 47.11 | 39.8% | 0.383 | 12.56 | 3.75 | 0.267 | 0.501 | -13.5 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Entry (/100) → 28 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Fib sóng 4 → 1.88 | 125.67 | 49.4% | 0.795 | 8.38 | 15 | 0.75 | 0.851 | -15.54 |  |

### Vòng 144 — ngẫu nhiên nhiều thông số · mốc: tổng 131.31R, win 52.7%, rủi ro tụt vốn 7.24R, lời÷rủi ro 18.14

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → 2 | 127.33 | 44.1% | 0.535 | 11.73 | 10.86 | 0.566 | 0.506 | -17.49 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần Elliott (/100) → 10 | 86.64 | 45.4% | 0.532 | 9.73 | 8.9 | 0.352 | 0.705 | -13.38 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 126.42 | 51.3% | 0.843 | 7.63 | 16.57 | 0.739 | 0.964 | -14.61 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Mức MACD → 1.13 | 104.79 | 45.4% | 0.643 | 10.57 | 9.91 | 0.576 | 0.704 | -14.58 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 | 114.06 | 49% | 0.726 | 8.49 | 13.43 | 0.755 | 0.697 | -13.63 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Mức MACD → 1.13 | 121.26 | 49.4% | 0.787 | 8.12 | 14.93 | 0.722 | 0.86 | -13.94 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 150.91 | 46.2% | 0.639 | 10.27 | 14.69 | 0.769 | 0.512 | -14.39 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 128.56 | 49.3% | 0.846 | 8.38 | 15.34 | 0.676 | 1.039 | -14.85 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Xác nhận khung nhỏ (A2) → W + Trần điểm khi chart yếu (Trend < x) → -0.375 | 101.48 | 38.4% | 0.386 | 16.14 | 6.29 | 0.362 | 0.409 | -12.77 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: HVN anchored → 0.188 + Số TP tối đa → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 128.4 | 52.4% | 0.873 | 7.59 | 16.92 | 0.726 | 1.049 | -14.96 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Cổng Dow → TẮT | 131.08 | 42.3% | 0.518 | 12.91 | 10.15 | 0.627 | 0.426 | -15.28 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Ngưỡng điểm vào kèo → 74 | 119.82 | 52.1% | 0.821 | 7.34 | 16.32 | 0.665 | 1 | -14.96 |  |

### Vòng 143 — ngẫu nhiên nhiều thông số · mốc: tổng 131.31R, win 52.7%, rủi ro tụt vốn 7.22R, lời÷rủi ro 18.19

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Entry (/100) → 33 + R:R tối thiểu riêng khung 1D → 2 | 37.59 | 30.6% | 0.195 | 25.59 | 1.47 | 0.138 | 0.243 | 3.49 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Momentum (/100) → 25 + Trọng số phần Elliott (/100) → 10 | 109.81 | 48.4% | 0.691 | 8.97 | 12.24 | 0.58 | 0.818 | -14.7 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 93.27 | 50% | 0.657 | 8.4 | 11.1 | 0.589 | 0.733 | -16.52 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.625 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 130.75 | 52.1% | 0.896 | 7.48 | 17.48 | 0.79 | 1.017 | -13.64 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Số TP tối đa → 2 | 123.24 | 50.7% | 0.833 | 7.87 | 15.66 | 0.708 | 0.965 | -12.04 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Entry (/100) → 28 | 104.24 | 46.7% | 0.617 | 9.26 | 11.26 | 0.495 | 0.743 | -16.27 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Trend (/100) → 19 + Coin phải mạnh hơn BTC trong N ngày → 14 | 85.38 | 48.8% | 0.694 | 8.45 | 10.1 | 0.545 | 0.867 | -21.43 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Cộng thêm ngưỡng điểm khung 1D → 7 | 117.23 | 51% | 0.766 | 8.47 | 13.84 | 0.634 | 0.941 | -8.25 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Mức MACD → 0.875 | 32.48 | 54.4% | 0.203 | 5.98 | 5.43 | 0.276 | 0.138 | -10.26 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cộng thêm ngưỡng điểm khung 4H → -1 | 139.8 | 46.1% | 0.608 | 9.9 | 14.12 | 0.657 | 0.56 | -17.4 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Mức MACD → 0.875 | 76.39 | 40.7% | 0.444 | 13.21 | 5.78 | 0.511 | 0.374 | -9.96 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 1W → 2 | 70.89 | 46.5% | 0.622 | 9.34 | 7.59 | 0.468 | 0.793 | -10.92 |  |

### Vòng 142 — ngẫu nhiên nhiều thông số · mốc: tổng 132.14R, win 53.6%, rủi ro tụt vốn 7.1R, lời÷rủi ro 18.61

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Trọng số phần Momentum (/100) → 21 + R:R tối thiểu tới TP1 → 2.63 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 89.02 | 47.9% | 0.761 | 8.74 | 10.19 | 0.483 | 1.074 | -11.91 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1D → 7 + Trọng số phần Elliott (/100) → 6 | 108.78 | 47.8% | 0.788 | 8.73 | 12.46 | 0.541 | 1.043 | -13.1 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: POC anchored → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 109.98 | 49.3% | 0.775 | 8.38 | 13.12 | 0.632 | 0.93 | -12.26 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + R:R tối thiểu riêng khung 4H → 2 | 145.74 | 41% | 0.398 | 12.83 | 11.36 | 0.391 | 0.405 | -15.23 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 77.72 | 45.6% | 0.571 | 10.3 | 7.55 | 0.473 | 0.682 | -7.95 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Entry (/100) → 33 + SL tối đa (% Entry) → 0.35 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 70.54 | 42.4% | 0.564 | 11.32 | 6.23 | 0.48 | 0.652 | -5.76 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: EMA 200 → 1 + Điểm vùng: Biên mây Ichimoku → 1.35 | 131.38 | 52.7% | 0.876 | 7.7 | 17.06 | 0.76 | 1.027 | -9.64 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: POC anchored → 2 + Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: MACD cắt lên Signal → 0.438 | 103.54 | 48.1% | 0.672 | 9.95 | 10.41 | 0.488 | 0.872 | -8.45 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 127.8 | 50.3% | 0.858 | 7.98 | 16.02 | 0.763 | 0.962 | -14.35 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 118.12 | 52.9% | 0.844 | 7.57 | 15.6 | 0.824 | 0.867 | -13.72 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: EMA 21 → 1.13 + Trọng số phần SL (/100) → 7 | 128.94 | 52.7% | 0.883 | 7.47 | 17.26 | 0.731 | 1.053 | -11.62 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Entry (/100) → 33 | 126.03 | 50% | 0.829 | 8.05 | 15.66 | 0.757 | 0.91 | -15.54 |  |
