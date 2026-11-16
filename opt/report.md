# Tối ưu tự động (chạy liên tục) — vòng 449

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 5058 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46.6% | 94.23R | 0.585 | 5.74R | 10.05R | 9.38 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 145 | 53.1% | 117.19R | 0.808 | 6.15R | 7.26R | 16.14 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 107 | 54.2% | 90.03R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46.6% | 94.23R | 10.05R | 9.38 | 32 | 12.5% | -14.03R |
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

### Vòng 449 — ngẫu nhiên nhiều thông số · mốc: tổng 117.19R, win 53.1%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.14

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Ngưỡng điểm vào kèo → 74 + SL tối đa (% Entry) → 0.425 | 111.14 | 51% | 0.746 | 7.76 | 14.32 | 0.585 | 0.927 | -10.63 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + % chốt ở TP1 → 0.307 | 103.18 | 51.4% | 0.748 | 7.72 | 13.37 | 0.53 | 1 | -11.52 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + % chốt ở TP1 → 0.287 | 118.27 | 52.4% | 0.827 | 7.37 | 16.05 | 0.667 | 1.013 | -12.9 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Ngưỡng điểm vào kèo → 77 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Divergence (/100) → 9 | 83.02 | 44.4% | 0.55 | 10.25 | 8.1 | 0.489 | 0.615 | -7.82 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: HVN cố định → 0.438 | 97.3 | 50% | 0.657 | 8.06 | 12.07 | 0.586 | 0.742 | -10.71 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Mức MACD → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 114.1 | 49.7% | 0.756 | 8.28 | 13.78 | 0.701 | 0.82 | -10.24 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Xác nhận khung nhỏ (A2) → W + Coin phải mạnh hơn BTC trong N ngày → 14 | 45.88 | 37.9% | 0.235 | 18.84 | 2.44 | 0.148 | 0.31 | -11.27 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Xác nhận khung nhỏ (A2) → W + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 85.44 | 38.4% | 0.319 | 16.84 | 5.07 | 0.384 | 0.255 | -3.23 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Divergence (/100) → 9 | 98.52 | 47.2% | 0.62 | 8.62 | 11.43 | 0.527 | 0.708 | -10.97 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 118.24 | 52.1% | 0.821 | 7.37 | 16.04 | 0.659 | 1.012 | -12.92 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Cổng Dow → CHẶT | 77.63 | 49.6% | 0.621 | 8.13 | 9.55 | 0.266 | 0.948 | -12.31 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 159.74 | 38.8% | 0.553 | 18.14 | 8.81 | 0.372 | 0.732 | -10.51 |  |

### Vòng 448 — ngẫu nhiên nhiều thông số · mốc: tổng 114.86R, win 52.4%, rủi ro tụt vốn 7.54R, lời÷rủi ro 15.23

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Cổng Dow → CHẶT + Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 84.68 | 54.9% | 0.694 | 7.35 | 11.52 | 0.441 | 0.924 | -10.06 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Số TP tối đa → 2 + % chốt ở TP1 → 0.307 | 128.46 | 50.6% | 0.823 | 8.13 | 15.8 | 0.765 | 0.891 | -12.57 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 7 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 114.91 | 52.1% | 0.798 | 7.54 | 15.24 | 0.624 | 0.992 | -9.62 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Trọng số phần SL (/100) → 9 + Điểm vùng: Break mây Ichimoku → 1 | 95.28 | 47.3% | 0.644 | 9.37 | 10.17 | 0.441 | 0.87 | -12.03 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Momentum (/100) → 21 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 41.12 | 39.3% | 0.337 | 13.23 | 3.11 | 0.302 | 0.371 | -11.12 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần SL (/100) → 9 | 164.17 | 38.1% | 0.549 | 18.24 | 9 | 0.412 | 0.683 | -15.7 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + R:R tối thiểu riêng khung 1W → 2 | 98.56 | 49% | 0.689 | 8.19 | 12.03 | 0.527 | 0.854 | -11.65 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 104.89 | 50% | 0.672 | 9.29 | 11.29 | 0.446 | 0.93 | -8.37 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Trọng số phần Entry (/100) → 33 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 83.11 | 52.1% | 0.71 | 7.15 | 11.62 | 0.323 | 1.02 | -14.4 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: HVN anchored → 0.188 + Đệm SL riêng khung 1D (ATR) → 0.3 | 82.28 | 41.6% | 0.445 | 13.31 | 6.18 | 0.528 | 0.38 | -7.84 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Trọng số phần Trend (/100) → 12 + Lệnh chờ hết hạn sau (nến) → 8 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 27.27 | 56.1% | 0.16 | 7.04 | 3.87 | 0.202 | 0.117 | -12.09 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Lệnh chờ hết hạn sau (nến) → 6 | 61.51 | 45.9% | 0.628 | 8.86 | 6.94 | 0.409 | 0.886 | -7.56 |  |

### Vòng 447 — ngẫu nhiên nhiều thông số · mốc: tổng 117.19R, win 53.1%, rủi ro tụt vốn 7.48R, lời÷rủi ro 15.67

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 70.17 | 46.6% | 0.595 | 9.6 | 7.31 | 0.459 | 0.772 | -6.48 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Ngưỡng điểm vào kèo → 77 + % chốt ở TP1 → 0.287 | 115.89 | 52.1% | 0.816 | 7.35 | 15.77 | 0.666 | 0.98 | -9.64 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 116.73 | 42.1% | 0.482 | 12.02 | 9.71 | 0.483 | 0.482 | -11.71 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 112.49 | 49.6% | 0.821 | 8.09 | 13.9 | 0.603 | 1.085 | -8.91 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Đệm SL riêng khung 1W (ATR) → 0.3 + SL tối đa (% Entry) → 0.35 | 101.29 | 48.5% | 0.745 | 8.36 | 12.12 | 0.485 | 0.99 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 7 | 120.39 | 52.2% | 0.757 | 8.16 | 14.75 | 0.577 | 0.98 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + % chốt ở TP1 → 0.287 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 134.77 | 37.3% | 0.457 | 20.2 | 6.67 | 0.309 | 0.598 | -14.45 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: HVN anchored → 0.313 + Số TP tối đa → 2 | 74.89 | 46.5% | 0.581 | 9.16 | 8.18 | 0.452 | 0.719 | -4.82 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Ngưỡng điểm vào kèo → 77 + Khung lớn phải tăng (trend ≥) → 0.425 | 110.11 | 50.4% | 0.792 | 7.72 | 14.26 | 0.584 | 1.029 | -8.67 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Trọng số phần Entry (/100) → 33 | 115.47 | 52.1% | 0.802 | 7.4 | 15.6 | 0.629 | 1 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Entry (/100) → 28 + Điểm vùng: POC volume profile cố định → 0.813 | 111.05 | 48.2% | 0.799 | 8.28 | 13.41 | 0.577 | 1.075 | -7.89 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 88.14 | 48.4% | 0.561 | 9.6 | 9.18 | 0.488 | 0.646 | -7.82 |  |

### Vòng 446 — ngẫu nhiên nhiều thông số · mốc: tổng 114.86R, win 52.4%, rủi ro tụt vốn 7.73R, lời÷rủi ro 14.86

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 68.19 | 43.7% | 0.505 | 10.61 | 6.43 | 0.494 | 0.517 | -6.51 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần SL (/100) → 9 | 99.08 | 51% | 0.674 | 8.17 | 12.13 | 0.626 | 0.728 | -11.73 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Mức RSI 30/70 → 0.875 | 106.44 | 51% | 0.678 | 8.68 | 12.26 | 0.529 | 0.845 | -12.81 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Cộng thêm ngưỡng điểm khung 1D → 4 | 110.6 | 52.1% | 0.768 | 7.91 | 13.98 | 0.566 | 0.988 | -11.98 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Divergence (/100) → 9 + Đệm SL riêng khung 4H (ATR) → 0.3 | 151.46 | 37.2% | 0.526 | 18.81 | 8.05 | 0.332 | 0.697 | -14.35 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Trọng số phần Entry (/100) → 33 | 113.2 | 51.7% | 0.781 | 7.89 | 14.35 | 0.597 | 0.988 | -11.96 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 121.34 | 41.6% | 0.567 | 12.65 | 9.59 | 0.513 | 0.619 | -15.37 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + % chốt ở TP1 → 0.307 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 32.15 | 40% | 0.378 | 10.57 | 3.04 | 0.27 | 0.526 | -6.22 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Divergence (/100) → 12 + Số TP tối đa → 2 | 113.16 | 40.3% | 0.354 | 13.11 | 8.63 | 0.323 | 0.379 | -13.34 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 61.57 | 38.2% | 0.373 | 13.7 | 4.49 | 0.433 | 0.312 | -4.47 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + SL tối đa (% Entry) → 0.35 | 96.14 | 47.8% | 0.697 | 9.35 | 10.28 | 0.434 | 0.93 | -11.72 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần Elliott (/100) → 10 | 92.62 | 49.6% | 0.686 | 7.76 | 11.94 | 0.571 | 0.807 | -10.33 |  |

### Vòng 445 — ngẫu nhiên nhiều thông số · mốc: tổng 117.19R, win 53.1%, rủi ro tụt vốn 7.34R, lời÷rủi ro 15.97

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: EMA 200 → 3 + Điểm vùng: EMA 21 → 1.13 | 76.87 | 45% | 0.48 | 9.48 | 8.11 | 0.427 | 0.533 | -12.34 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm tối thiểu của vùng đặt SL → 2 | 112.55 | 51.4% | 0.76 | 8.5 | 13.24 | 0.675 | 0.854 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Trend (/100) → 12 | 102.44 | 50.7% | 0.753 | 7.86 | 13.03 | 0.548 | 0.978 | -11.51 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: HVN cố định → 0.563 | 31.08 | 58.6% | 0.198 | 5.82 | 5.34 | 0.235 | 0.162 | -11.38 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: HVN anchored → 0.313 | 114.54 | 51.7% | 0.79 | 7.67 | 14.93 | 0.618 | 0.979 | -9.66 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 73.65 | 46.5% | 0.571 | 9.74 | 7.56 | 0.44 | 0.713 | -4.82 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: HVN cố định → 0.438 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 80.34 | 48% | 0.633 | 8.84 | 9.09 | 0.724 | 0.524 | -15.89 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Cộng thêm ngưỡng điểm khung 1W → 2 + % chốt ở TP1 → 0.287 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 103.5 | 49.7% | 0.676 | 8.88 | 11.66 | 0.513 | 0.87 | -7.06 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 200 → 3 + Cộng điểm phân kỳ dương ẩn → 2.63 | 103.18 | 46.2% | 0.653 | 10.32 | 10 | 0.591 | 0.709 | -5.34 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Số TP tối đa → 2 | 100.39 | 50.7% | 0.678 | 8.46 | 11.87 | 0.6 | 0.771 | -9.42 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: BOS → 3 + Trọng số phần Momentum (/100) → 21 + Cộng thêm ngưỡng điểm khung 1D → 7 | 113.36 | 51% | 0.771 | 8.03 | 14.12 | 0.574 | 1.013 | -8.64 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Đệm SL riêng khung 1D (ATR) → 0.3 | 108.59 | 46.3% | 0.679 | 10.61 | 10.23 | 0.676 | 0.682 | -5.33 |  |

### Vòng 444 — ngẫu nhiên nhiều thông số · mốc: tổng 117.19R, win 53.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 15.92

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1D → 7 | 111.52 | 47.8% | 0.693 | 9.89 | 11.28 | 0.68 | 0.704 | -5.33 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm tối thiểu của vùng đặt SL → 2 | 113.38 | 53% | 0.761 | 8 | 14.17 | 0.621 | 0.915 | -9.64 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Lệnh chờ hết hạn sau (nến) → 8 + % chốt ở TP1 → 0.287 | 117.32 | 43.9% | 0.464 | 11.78 | 9.96 | 0.531 | 0.392 | -11.02 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần R:R (/100) → 33 | 107.04 | 46.5% | 0.622 | 9.13 | 11.72 | 0.594 | 0.649 | -7.92 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 103.22 | 51% | 0.684 | 8.5 | 12.14 | 0.492 | 0.911 | -7.08 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN anchored → 0.313 | 114.44 | 52.4% | 0.8 | 7.65 | 14.96 | 0.605 | 1.022 | -9.66 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 92.72 | 46.4% | 0.662 | 9.35 | 9.92 | 0.584 | 0.745 | -8.44 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm vùng: EMA 200 → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: POC volume profile cố định → 0.813 | 23.76 | 57.5% | 0.155 | 6.31 | 3.77 | 0.152 | 0.159 | -11.35 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Ngưỡng điểm vào kèo → 74 + Đệm SL riêng khung 4H (ATR) → 0.3 | 161.43 | 39% | 0.553 | 18.13 | 8.9 | 0.386 | 0.715 | -14.8 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 27.58 | 57.4% | 0.163 | 7.89 | 3.5 | 0.271 | 0.079 | -10.56 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Số TP tối đa → 2 + Điểm vùng: HVN anchored → 0.313 | 74.19 | 47.1% | 0.713 | 8.63 | 8.6 | 0.48 | 0.997 | -6.48 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần SL (/100) → 7 | 86.88 | 51.3% | 0.743 | 7.74 | 11.22 | 0.552 | 0.972 | -16.13 |  |

### Vòng 443 — ngẫu nhiên nhiều thông số · mốc: tổng 117.19R, win 53.1%, rủi ro tụt vốn 7.29R, lời÷rủi ro 16.08

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Trọng số phần R:R (/100) → 33 + Trọng số phần Divergence (/100) → 9 | 117.19 | 53.1% | 0.808 | 7.29 | 16.08 | 0.624 | 1.022 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 3.5 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 64.8 | 42.6% | 0.563 | 10.87 | 5.96 | 0.366 | 0.732 | -5.75 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm tối thiểu của vùng đặt SL → 4 + Lệnh chờ hết hạn sau (nến) → 8 | 94.99 | 47% | 0.579 | 10.24 | 9.28 | 0.447 | 0.741 | -8.67 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 30 | 58.2% | 0.19 | 5.86 | 5.12 | 0.219 | 0.162 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 126.06 | 50.3% | 0.813 | 8.15 | 15.47 | 0.767 | 0.869 | -10.24 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 87.56 | 44.8% | 0.604 | 9.83 | 8.91 | 0.455 | 0.787 | -10.18 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: BOS → 3 + Số TP tối đa → 2 | 131.78 | 44.2% | 0.613 | 11.15 | 11.82 | 0.528 | 0.697 | -14.11 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Lệnh chờ hết hạn sau (nến) → 6 | 67.3 | 40.1% | 0.391 | 11.48 | 5.86 | 0.471 | 0.324 | -2.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 18.75 | 57.7% | 0.152 | 6.46 | 2.9 | 0.274 | 0.064 | -5.05 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Trend (/100) → 19 | 65.65 | 45.2% | 0.486 | 9.39 | 6.99 | 0.489 | 0.484 | -17.44 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: EMA 200 → 3 | 103.32 | 49.3% | 0.708 | 8.25 | 12.52 | 0.469 | 0.974 | -9.62 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Xác nhận khung nhỏ (A2) → W | 87.89 | 38.3% | 0.354 | 16.44 | 5.35 | 0.288 | 0.413 | -4.57 |  |

### Vòng 442 — ngẫu nhiên nhiều thông số · mốc: tổng 117.19R, win 53.1%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.19

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 91.12 | 46.9% | 0.628 | 9.52 | 9.57 | 0.453 | 0.857 | -11.83 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + R:R tối thiểu riêng khung 1W → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 107.39 | 49.3% | 0.716 | 8.49 | 12.65 | 0.539 | 0.893 | -10.54 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 97.05 | 51.3% | 0.647 | 8.69 | 11.17 | 0.626 | 0.67 | -9.42 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần Momentum (/100) → 25 | 99.84 | 48.3% | 0.698 | 8.5 | 11.75 | 0.484 | 0.934 | -12.55 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm tối thiểu của vùng đặt SL → 2 | 19.72 | 54.4% | 0.134 | 7.81 | 2.52 | 0.191 | 0.093 | -11.34 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần Trend (/100) → 19 + Trọng số phần Entry (/100) → 28 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 118.31 | 48.1% | 0.739 | 8.42 | 14.05 | 0.704 | 0.78 | -11.6 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + SL tối đa (% Entry) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 85.77 | 45.9% | 0.58 | 10.11 | 8.48 | 0.396 | 0.802 | -9.99 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Trend (/100) → 12 | 23.08 | 53% | 0.139 | 7.41 | 3.11 | 0.18 | 0.1 | -10.27 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu riêng khung 4H → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 119.13 | 39.5% | 0.359 | 14.07 | 8.47 | 0.449 | 0.293 | -11.05 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Cổng Dow → CHẶT + Điểm vùng: Mức MACD → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 61.38 | 49% | 0.614 | 7.86 | 7.81 | 0.324 | 0.904 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Đệm SL riêng khung 4H (ATR) → 0.3 | 149.8 | 36.3% | 0.465 | 21.02 | 7.13 | 0.294 | 0.632 | -11.59 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 112.1 | 49.7% | 0.763 | 8.28 | 13.54 | 0.51 | 1.048 | -9.52 |  |

### Vòng 441 — ngẫu nhiên nhiều thông số · mốc: tổng 117.19R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 15.84

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 74.49 | 47.6% | 0.709 | 8.53 | 8.73 | 0.473 | 0.99 | -6.48 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: EMA 21 → 0.875 + Trọng số phần SL (/100) → 9 | 116.35 | 51.7% | 0.802 | 7.74 | 15.03 | 0.672 | 0.95 | -9.64 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + R:R tối thiểu riêng khung 1W → 2 + Xác nhận khung nhỏ (A2) → W + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 87.56 | 38.7% | 0.368 | 16.58 | 5.28 | 0.274 | 0.452 | -8.07 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần R:R (/100) → 33 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: EMA 50 → 0.75 | 122.29 | 41.9% | 0.388 | 11.98 | 10.21 | 0.346 | 0.424 | -16.77 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 | 92.77 | 48.8% | 0.58 | 9.81 | 9.46 | 0.503 | 0.669 | -6.86 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + % chốt ở TP1 → 0.307 + Cộng thêm ngưỡng điểm khung 1D → 4 + Lệnh chờ hết hạn sau (nến) → 8 | 37.99 | 40.2% | 0.413 | 10.05 | 3.78 | 0.341 | 0.503 | -8.91 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: BOS → 3 + Điểm tối thiểu của vùng đặt SL → 4 | 113.05 | 51.4% | 0.774 | 7.62 | 14.84 | 0.62 | 0.951 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 115.42 | 52.4% | 0.796 | 7.55 | 15.29 | 0.602 | 1.022 | -11.06 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Mức MACD → 0.875 | 111.14 | 51% | 0.717 | 8.51 | 13.06 | 0.591 | 0.878 | -4.67 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Coin phải mạnh hơn BTC trong N ngày → 14 | 82.55 | 50% | 0.724 | 7.99 | 10.33 | 0.501 | 0.99 | -16.16 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Biên mây Ichimoku → 1.05 | 104.03 | 46% | 0.646 | 10.35 | 10.05 | 0.633 | 0.658 | -8.51 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Trọng số phần Trend (/100) → 19 + Trọng số phần Momentum (/100) → 21 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 116.43 | 52% | 0.787 | 7.63 | 15.26 | 0.624 | 0.968 | -8.34 |  |

### Vòng 440 — ngẫu nhiên nhiều thông số · mốc: tổng 117.19R, win 53.1%, rủi ro tụt vốn 7.39R, lời÷rủi ro 15.86

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 106.16 | 50.3% | 0.722 | 8.05 | 13.19 | 0.552 | 0.931 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + % chốt ở TP1 → 0.287 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 79.5 | 44.5% | 0.513 | 10.96 | 7.25 | 0.548 | 0.481 | -1.5 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 85.24 | 42.7% | 0.461 | 10.85 | 7.86 | 0.462 | 0.46 | -8.59 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Biên mây Ichimoku → 1.05 | 113.6 | 50.7% | 0.768 | 7.59 | 14.97 | 0.642 | 0.897 | -11.85 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: EMA 21 → 0.875 + Cộng thêm ngưỡng điểm khung 1W → 2 | 115.74 | 51% | 0.798 | 7.74 | 14.95 | 0.68 | 0.928 | -9.66 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Ngưỡng điểm vào kèo → 77 | 112.27 | 51.4% | 0.814 | 7.42 | 15.13 | 0.628 | 1.016 | -9.69 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Cổng Dow → CHẶT + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 78.8 | 51.4% | 0.71 | 7.08 | 11.13 | 0.311 | 1.049 | -10.54 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: BOS → 1 | 28.95 | 57.3% | 0.184 | 5.96 | 4.86 | 0.23 | 0.139 | -11.01 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Lệnh chờ hết hạn sau (nến) → 6 + Ngưỡng điểm vào kèo → 77 + R:R tối thiểu riêng khung 1D → 2 | 86 | 44.2% | 0.551 | 9.78 | 8.79 | 0.595 | 0.511 | -6.03 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: POC volume profile cố định → 0.688 | 64.28 | 47.2% | 0.595 | 9.26 | 6.94 | 0.454 | 0.766 | -7.1 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 68.5 | 46.8% | 0.617 | 9.22 | 7.43 | 0.4 | 0.855 | -6.51 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 | 161.86 | 38.8% | 0.556 | 17.5 | 9.25 | 0.391 | 0.723 | -14.36 |  |
