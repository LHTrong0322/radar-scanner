# Tối ưu tự động (chạy liên tục) — vòng 224

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 2372 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.2% | 106.09R | 0.651 | 5.74R | 9.59R | 11.06 | 34 | 11.8% | -16.07R | -0.473 | 16.07R |
| **Tốt nhất** | 147 | 53.1% | 131.1R | 0.892 | 6.15R | 7.41R | 17.69 | 30 | 16.7% | -11.7R | -0.39 | 11.7R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 29 | 51.7% | 30.98R | 5 | 0% | -3.77R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 108 | 53.7% | 92.38R | 23 | 21.7% | -5.89R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 138 (Ghép: Điểm vùng: HVN anchored → 0.125 + Khoảng cách tối thiểu TP1 (ATR) → 0.875).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.2% | 106.09R | 9.59R | 11.06 | 34 | 11.8% | -16.07R |
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

### Vòng 224 — từng thông số · mốc: tổng 131.1R, win 53.1%, rủi ro tụt vốn 7.41R, lời÷rủi ro 17.69

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| R:R tối thiểu riêng khung 1D: null → 2 | 109.45 | 46.6% | 0.629 | 9.17 | 11.94 | 0.566 | 0.689 | -9.96 |  |
| Đệm SL riêng khung 1D (ATR): null → 0.3 | 113.13 | 47% | 0.681 | 10.45 | 10.83 | 0.598 | 0.763 | -7.38 |  |
| Cộng thêm ngưỡng điểm khung 1D: 5 → 4 | 130.84 | 53.1% | 0.89 | 7.49 | 17.47 | 0.749 | 1.049 | -11.7 |  |
| Cộng thêm ngưỡng điểm khung 1D: 5 → 7 | 131.1 | 53.1% | 0.892 | 7.41 | 17.69 | 0.737 | 1.071 | -11.7 |  |
| R:R tối thiểu riêng khung 1W: null → 2 | 111.41 | 51.3% | 0.743 | 7.86 | 14.17 | 0.595 | 0.894 | -12.74 |  |
| Đệm SL riêng khung 1W (ATR): null → 0.3 | 105.97 | 49.3% | 0.791 | 7.91 | 13.4 | 0.501 | 1.064 | -12.74 |  |
| Cộng thêm ngưỡng điểm khung 1W: 0 → -1 | 131.1 | 53.1% | 0.892 | 7.41 | 17.69 | 0.737 | 1.071 | -11.7 |  |
| Cộng thêm ngưỡng điểm khung 1W: 0 → 2 | 130.47 | 52.4% | 0.888 | 7.51 | 17.37 | 0.745 | 1.048 | -11.7 |  |
| Điểm tối thiểu của vùng đặt SL: 3 → 2 | 127.48 | 53% | 0.844 | 8.16 | 15.62 | 0.737 | 0.961 | -11.7 |  |
| Điểm tối thiểu của vùng đặt SL: 3 → 4 | 127.15 | 51.7% | 0.865 | 7.72 | 16.47 | 0.745 | 1 | -11.7 |  |
| % chốt ở TP1: 0.3 → 0.287 | 131.14 | 53.1% | 0.892 | 7.41 | 17.7 | 0.737 | 1.073 | -11.68 |  |
| % chốt ở TP1: 0.3 → 0.307 | 131.07 | 53.1% | 0.892 | 7.41 | 17.69 | 0.738 | 1.07 | -11.71 |  |

### Vòng 223 — từng thông số · mốc: tổng 131.1R, win 53.1%, rủi ro tụt vốn 7.43R, lời÷rủi ro 17.64

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| R:R tối thiểu tới TP1: 2.5 → 2.38 | 101.24 | 47% | 0.617 | 8.73 | 11.6 | 0.528 | 0.707 | -13.01 |  |
| R:R tối thiểu tới TP1: 2.5 → 2.63 | 112.42 | 52.1% | 0.929 | 7.46 | 15.07 | 0.728 | 1.154 | -12.67 |  |
| Ngưỡng điểm 'vào ngay' (tín hiệu mạnh): 6 → 5 | 98.78 | 47.3% | 0.659 | 9.31 | 10.61 | 0.475 | 0.898 | -11.2 |  |
| Ngưỡng điểm 'vào ngay' (tín hiệu mạnh): 6 → 7 | 117.38 | 52% | 0.793 | 8.14 | 14.42 | 0.737 | 0.857 | -10.88 |  |
| SL tối đa (% Entry): 0.387 → 0.35 | 129.5 | 52.7% | 0.887 | 7.7 | 16.82 | 0.726 | 1.071 | -11.7 |  |
| SL tối đa (% Entry): 0.387 → 0.425 | 131.1 | 53.1% | 0.892 | 7.43 | 17.64 | 0.737 | 1.071 | -11.7 |  |
| Đệm SL dưới vùng hỗ trợ (ATR): 1 → 0.95 | 129.42 | 51.4% | 0.874 | 7.88 | 16.42 | 0.656 | 1.118 | -11.56 |  |
| Đệm SL dưới vùng hỗ trợ (ATR): 1 → 1.05 | 116.04 | 51.4% | 0.829 | 7.98 | 14.54 | 0.637 | 1.051 | -13.56 |  |
| R:R tối thiểu riêng khung 4H: null → 2 | 130.17 | 41.9% | 0.407 | 12.32 | 10.57 | 0.438 | 0.38 | -11.86 |  |
| Đệm SL riêng khung 4H (ATR): null → 0.3 | 184.03 | 39.5% | 0.611 | 17.52 | 10.5 | 0.502 | 0.725 | -16.51 |  |
| Cộng thêm ngưỡng điểm khung 4H: 0 → -1 | 131.1 | 53.1% | 0.892 | 7.43 | 17.64 | 0.737 | 1.071 | -11.7 |  |
| Cộng thêm ngưỡng điểm khung 4H: 0 → 2 | 118.29 | 52.1% | 0.821 | 7.63 | 15.5 | 0.617 | 1.049 | -11.7 |  |

### Vòng 222 — từng thông số · mốc: tổng 131.1R, win 53.1%, rủi ro tụt vốn 7.43R, lời÷rủi ro 17.64

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: Mức sai Elliott (cho SL): 2 → 1 | 127.3 | 52.3% | 0.854 | 7.71 | 16.51 | 0.714 | 1.017 | -12.67 |  |
| Điểm vùng: Mức sai Elliott (cho SL): 2 → 3 | 128.87 | 52.4% | 0.877 | 7.31 | 17.63 | 0.723 | 1.055 | -11.52 |  |
| Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự): 1 → 0.875 | 131.1 | 53.1% | 0.892 | 7.43 | 17.64 | 0.737 | 1.071 | -11.7 |  |
| Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự): 1 → 1.13 | 131.1 | 53.1% | 0.892 | 7.43 | 17.64 | 0.737 | 1.071 | -11.7 |  |
| Điểm vùng: MACD cắt lên Signal: 0.5 → 0.438 | 123.88 | 50.6% | 0.784 | 8.87 | 13.97 | 0.603 | 1 | -9.12 |  |
| Điểm vùng: MACD cắt lên Signal: 0.5 → 0.563 | 131.1 | 53.1% | 0.892 | 7.43 | 17.64 | 0.737 | 1.071 | -11.7 |  |
| Điểm vùng: Fib 0.5 / 0.382 sóng 2: 3 → 2 | 131.09 | 53.1% | 0.892 | 7.47 | 17.55 | 0.737 | 1.071 | -12.08 |  |
| Điểm vùng: Fib 0.5 / 0.382 sóng 2: 3 → 4 | 129.97 | 52.7% | 0.878 | 7.73 | 16.81 | 0.716 | 1.069 | -11.7 |  |
| Điểm vùng: Fib sóng 4: 1.25 → 0.938 | 129.35 | 52.7% | 0.886 | 7.54 | 17.16 | 0.725 | 1.071 | -11.7 |  |
| Điểm vùng: Fib sóng 4: 1.25 → 1.56 | 129.86 | 52.7% | 0.866 | 7.7 | 16.86 | 0.695 | 1.071 | -11.7 |  |
| Ngưỡng điểm vào kèo: 75 → 74 | 130.13 | 52.3% | 0.873 | 7.62 | 17.08 | 0.737 | 1.027 | -11.7 |  |
| Ngưỡng điểm vào kèo: 75 → 77 | 117.66 | 51.4% | 0.817 | 7.67 | 15.34 | 0.624 | 1.027 | -11.7 |  |

### Vòng 221 — từng thông số · mốc: tổng 131.1R, win 53.1%, rủi ro tụt vốn 7.38R, lời÷rủi ro 17.76

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: Mức MACD: 1 → 0.875 | 122.91 | 51.7% | 0.848 | 7.87 | 15.62 | 0.705 | 1.009 | -11.7 |  |
| Điểm vùng: Mức MACD: 1 → 1.13 | 128.72 | 51.7% | 0.876 | 7.77 | 16.57 | 0.715 | 1.062 | -11.7 |  |
| Điểm vùng: POC volume profile cố định: 0.75 → 0.688 | 131.1 | 53.1% | 0.892 | 7.38 | 17.76 | 0.737 | 1.071 | -11.7 |  |
| Điểm vùng: POC volume profile cố định: 0.75 → 0.813 | 131.1 | 53.1% | 0.892 | 7.38 | 17.76 | 0.737 | 1.071 | -10.68 |  |
| Điểm vùng: HVN anchored: 0.25 → 0.188 | 131.1 | 53.1% | 0.892 | 7.38 | 17.76 | 0.737 | 1.071 | -11.7 |  |
| Điểm vùng: HVN anchored: 0.25 → 0.313 | 129.33 | 52.4% | 0.88 | 7.53 | 17.18 | 0.715 | 1.071 | -11.7 |  |
| Điểm vùng: HVN cố định: 0.5 → 0.438 | 129.33 | 52.4% | 0.88 | 7.53 | 17.18 | 0.715 | 1.071 | -11.7 |  |
| Điểm vùng: HVN cố định: 0.5 → 0.563 | 131.1 | 53.1% | 0.892 | 7.38 | 17.76 | 0.737 | 1.071 | -11.7 |  |
| Điểm vùng: Vùng RSI 45–55: 1 → 0.875 | 127.37 | 50.7% | 0.861 | 7.98 | 15.96 | 0.774 | 0.949 | -12.04 |  |
| Điểm vùng: Vùng RSI 45–55: 1 → 1.13 | 120.07 | 50.3% | 0.806 | 8.07 | 14.88 | 0.662 | 0.982 | -11.7 |  |
| Điểm vùng: Biên mây Ichimoku: 1.2 → 1.05 | 121.54 | 52.3% | 0.816 | 7.7 | 15.78 | 0.698 | 0.949 | -13.82 |  |
| Điểm vùng: Biên mây Ichimoku: 1.2 → 1.35 | 128.32 | 52% | 0.867 | 7.69 | 16.69 | 0.715 | 1.041 | -10.68 |  |

### Vòng 220 — từng thông số · mốc: tổng 131.1R, win 53.1%, rủi ro tụt vốn 7.38R, lời÷rủi ro 17.76

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: EMA 21: 1 → 0.875 | 130.4 | 51.7% | 0.887 | 7.82 | 16.68 | 0.789 | 0.998 | -11.7 |  |
| Điểm vùng: EMA 21: 1 → 1.13 | 125.75 | 52% | 0.838 | 7.58 | 16.59 | 0.714 | 0.985 | -12.04 |  |
| Điểm vùng: Break mây Ichimoku: 2 → 1 | 121.32 | 50.7% | 0.809 | 7.98 | 15.2 | 0.683 | 0.948 | -12.04 |  |
| Điểm vùng: Break mây Ichimoku: 2 → 3 | 113.31 | 50% | 0.699 | 8.8 | 12.88 | 0.562 | 0.859 | -11.44 |  |
| Điểm vùng: Kháng cự cũ bị phá: 1.5 → 1.31 | 130.09 | 52.7% | 0.879 | 7.62 | 17.07 | 0.716 | 1.071 | -11.7 |  |
| Điểm vùng: Kháng cự cũ bị phá: 1.5 → 1.69 | 123.44 | 51.4% | 0.857 | 7.76 | 15.91 | 0.693 | 1.051 | -12.99 |  |
| Điểm vùng: Fib 0.618 sóng 2: 2.5 → 2.19 | 131.1 | 53.1% | 0.892 | 7.38 | 17.76 | 0.737 | 1.071 | -11.7 |  |
| Điểm vùng: Fib 0.618 sóng 2: 2.5 → 2.81 | 131.1 | 53.1% | 0.892 | 7.38 | 17.76 | 0.737 | 1.071 | -11.7 |  |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4): 3.44 → 3.13 | 130.72 | 53.4% | 0.883 | 7.4 | 17.66 | 0.74 | 1.052 | -11.7 |  |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4): 3.44 → 3.75 | 126.93 | 53% | 0.841 | 7.85 | 16.17 | 0.695 | 1.013 | -11.7 |  |
| Điểm vùng: Mức RSI 30/70: 1 → 0.875 | 132.13 | 51.6% | 0.821 | 8.41 | 15.71 | 0.654 | 1.027 | -11.7 |  |
| Điểm vùng: Mức RSI 30/70: 1 → 1.13 | 131.1 | 53.1% | 0.892 | 7.38 | 17.76 | 0.737 | 1.071 | -11.7 |  |

### Vòng 219 — ngẫu nhiên nhiều thông số · mốc: tổng 129R, win 52.4%, rủi ro tụt vốn 7.75R, lời÷rủi ro 16.65

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: HVN cố định → 0.563 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 101.05 | 45% | 0.669 | 10.3 | 9.81 | 0.579 | 0.785 | -12.77 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 | 133.03 | 53.4% | 0.899 | 7.68 | 17.32 | 0.743 | 1.087 | -11.7 | ✅ |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 + Ngưỡng điểm vào kèo → 74 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.78 | 48.7% | 0.685 | 9.1 | 11.29 | 0.629 | 0.751 | -15.06 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Break mây Ichimoku → 3 | 99.59 | 48.7% | 0.638 | 9.45 | 10.54 | 0.438 | 0.872 | -14.7 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 129.97 | 51.3% | 0.833 | 8 | 16.25 | 0.809 | 0.863 | -15.54 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + SL tối đa (% Entry) → 0.35 + Trọng số phần R:R (/100) → 33 | 118.44 | 49.6% | 0.865 | 8.27 | 14.32 | 0.659 | 1.114 | -13.2 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: POC anchored → 2 + Trọng số phần Trend (/100) → 12 + Điểm vùng: HVN anchored → 0.188 | 111.67 | 48.7% | 0.725 | 9.08 | 12.3 | 0.654 | 0.806 | -15.72 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: HVN anchored → 0.313 + Trọng số phần Trend (/100) → 12 | 128.99 | 50% | 0.796 | 8.62 | 14.96 | 0.747 | 0.851 | -14.84 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Coin phải mạnh hơn BTC trong N ngày → 14 | 78.16 | 39.3% | 0.32 | 17.36 | 4.5 | 0.332 | 0.309 | -10.01 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần Entry (/100) → 33 + R:R tối thiểu riêng khung 4H → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 80.93 | 39.7% | 0.261 | 14.58 | 5.55 | 0.347 | 0.185 | -16.37 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Elliott (/100) → 6 | 130.06 | 52% | 0.879 | 7.59 | 17.14 | 0.749 | 1.035 | -15.37 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: Break mây Ichimoku → 3 | 105.15 | 49% | 0.67 | 9.4 | 11.19 | 0.498 | 0.872 | -13.83 |  |

Nhận: Điểm tối thiểu vùng đặt lệnh chờ 3 → 2 · Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) 3.13 → 3.44

### Vòng 218 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.34R, lời÷rủi ro 17.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 78.72 | 45.2% | 0.685 | 9.31 | 8.46 | 0.65 | 0.727 | -8.23 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 + % chốt ở TP1 → 0.287 + Cộng thêm ngưỡng điểm khung 1W → 2 + R:R tối thiểu tới TP1 → 2.63 | 96.63 | 48.8% | 0.786 | 8.38 | 11.53 | 0.51 | 1.095 | -15.4 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 1D → 7 | 91.9 | 38.4% | 0.36 | 17.39 | 5.28 | 0.321 | 0.396 | -8.37 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: BOS → 1 + Điểm vùng: Fib sóng 4 → 1.56 | 119.49 | 51.7% | 0.824 | 7.45 | 16.04 | 0.67 | 0.999 | -13.94 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trọng số phần Momentum (/100) → 25 + Điểm vùng: EMA 200 → 1 + % chốt ở TP1 → 0.287 | 140.96 | 44.2% | 0.624 | 11.43 | 12.33 | 0.648 | 0.598 | -15.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trọng số phần Trend (/100) → 12 + Điểm vùng: EMA 200 → 3 + R:R tối thiểu riêng khung 1W → 2 | 113.76 | 48.3% | 0.753 | 8.56 | 13.29 | 0.718 | 0.79 | -14.4 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm tối thiểu của vùng đặt SL → 2 | 80.06 | 45.5% | 0.479 | 10.74 | 7.45 | 0.348 | 0.609 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Số TP tối đa → 2 + Trọng số phần Trend (/100) → 12 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 126.96 | 50% | 0.858 | 8.14 | 15.6 | 0.693 | 1.068 | -12.18 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần SL (/100) → 9 | 117.97 | 41.5% | 0.377 | 12.61 | 9.36 | 0.379 | 0.375 | -15.64 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: MACD cắt lên Signal → 0.438 + Khung lớn phải tăng (trend ≥) → 0.425 | 103.37 | 47.7% | 0.685 | 9.04 | 11.43 | 0.423 | 0.987 | -11.4 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 100.63 | 49.1% | 0.625 | 9.02 | 11.16 | 0.564 | 0.699 | -15.3 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Biên mây Ichimoku → 1.35 | 121.9 | 50.3% | 0.829 | 8.23 | 14.81 | 0.686 | 1.001 | -12.92 |  |

### Vòng 217 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.23R, lời÷rủi ro 18.16

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Biên mây Ichimoku → 1.05 | 128.75 | 51.3% | 0.836 | 7.56 | 17.03 | 0.828 | 0.844 | -14.77 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: POC anchored → 4 + Điểm vùng: Mức MACD → 0.875 + R:R tối thiểu tới TP1 → 2.63 | 98.25 | 48% | 0.774 | 9.05 | 10.86 | 0.635 | 0.919 | -7.87 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 119.61 | 50.3% | 0.752 | 8.41 | 14.22 | 0.792 | 0.709 | -13.13 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 50 → 0.75 + Trọng số phần SL (/100) → 7 | 128.17 | 52.4% | 0.884 | 7.4 | 17.32 | 0.747 | 1.043 | -14.96 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Elliott (/100) → 6 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 120.47 | 49.3% | 0.861 | 8.22 | 14.66 | 0.742 | 1.001 | -12.18 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Ngưỡng điểm vào kèo → 77 | 120.17 | 50.3% | 0.796 | 8.12 | 14.8 | 0.641 | 0.957 | -8.91 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 | 73.73 | 45.8% | 0.689 | 9.26 | 7.96 | 0.458 | 0.973 | -9.89 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 73.78 | 45.7% | 0.535 | 10.11 | 7.3 | 0.535 | 0.534 | -8.44 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: EMA 21 → 0.875 + Cổng Dow → CHẶT + Điểm vùng: EMA 50 → 1.13 | 74.89 | 47.7% | 0.675 | 8.65 | 8.66 | 0.206 | 1.045 | -15.91 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Fib sóng 4 → 0.938 | 128.34 | 51.7% | 0.885 | 7.59 | 16.91 | 0.75 | 1.043 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Fib sóng 4 → 0.938 + % chốt ở TP1 → 0.307 | 129.48 | 52.4% | 0.893 | 7.44 | 17.4 | 0.765 | 1.042 | -14.97 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 115.52 | 51% | 0.775 | 8.14 | 14.19 | 0.804 | 0.743 | -16.01 |  |

### Vòng 216 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.08R, lời÷rủi ro 18.54

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng thêm ngưỡng điểm khung 1W → 2 + Xác nhận khung nhỏ (A2) → W | 101.56 | 37.2% | 0.378 | 16.33 | 6.22 | 0.384 | 0.371 | -12.8 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 + R:R tối thiểu riêng khung 1D → 2 + Cộng điểm phân kỳ dương ẩn → 2.63 + Ngưỡng điểm vào kèo → 77 | 96.96 | 44.9% | 0.581 | 9.52 | 10.18 | 0.525 | 0.63 | -8.16 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 126.45 | 51.4% | 0.854 | 7.73 | 16.36 | 0.718 | 1.015 | -13.95 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + % chốt ở TP1 → 0.287 + R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Elliott (/100) → 10 | 124.24 | 40.9% | 0.391 | 13.25 | 9.38 | 0.423 | 0.363 | -14.14 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 141.01 | 44.8% | 0.585 | 10.94 | 12.89 | 0.639 | 0.533 | -16.63 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Mức RSI 30/70 → 0.875 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 52.26 | 44.2% | 0.405 | 11.62 | 4.5 | 0.301 | 0.522 | -6.16 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần SL (/100) → 9 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 31.7 | 39.1% | 0.364 | 10.82 | 2.93 | 0.26 | 0.492 | -7.14 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Mức MACD → 1.13 | 124.72 | 51.4% | 0.854 | 7.55 | 16.52 | 0.783 | 0.936 | -16.06 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: HVN cố định → 0.563 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Xác nhận khung nhỏ (A2) → W | 78.06 | 34.9% | 0.248 | 20.6 | 3.79 | 0.297 | 0.204 | -0.96 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Mức MACD → 0.875 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 17.65 | 49.1% | 0.102 | 8.55 | 2.06 | 0.127 | 0.078 | -10.15 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Coin phải mạnh hơn BTC trong N ngày → 14 | 98.78 | 50% | 0.823 | 7.9 | 12.5 | 0.685 | 0.998 | -20.41 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + SL tối đa (% Entry) → 0.35 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 106.11 | 51% | 0.722 | 8.24 | 12.88 | 0.637 | 0.815 | -14.21 |  |

### Vòng 215 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.26R, lời÷rủi ro 18.08

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 137.44 | 45.7% | 0.592 | 10.49 | 13.1 | 0.64 | 0.546 | -14.57 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Trọng số phần Entry (/100) → 33 + SL tối đa (% Entry) → 0.35 | 127.6 | 52.4% | 0.88 | 7.41 | 17.22 | 0.747 | 1.031 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Đệm SL riêng khung 1W (ATR) → 0.3 | 110.44 | 47.6% | 0.762 | 8.84 | 12.49 | 0.535 | 1.005 | -14.98 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: HVN cố định → 0.563 | 106.68 | 48.8% | 0.827 | 8.35 | 12.78 | 0.7 | 0.982 | -20.47 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trọng số phần Entry (/100) → 28 + Số TP tối đa → 2 + Trọng số phần Elliott (/100) → 10 | 128.67 | 52.4% | 0.875 | 7.34 | 17.53 | 0.738 | 1.035 | -13.94 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 21 → 0.875 + Cộng điểm phân kỳ dương ẩn → 2.63 | 112.48 | 48.3% | 0.765 | 8.46 | 13.3 | 0.68 | 0.852 | -14.98 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Cổng Dow → CHẶT | 97.75 | 51.3% | 0.85 | 7.49 | 13.05 | 0.562 | 1.114 | -14.86 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Cộng thêm ngưỡng điểm khung 1W → -1 + Đệm SL riêng khung 4H (ATR) → 0.3 | 180.41 | 38.9% | 0.59 | 17.97 | 10.04 | 0.478 | 0.708 | -15.12 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: EMA 21 → 1.13 | 118.15 | 49% | 0.753 | 8.3 | 14.23 | 0.654 | 0.863 | -15.23 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: HVN cố định → 0.563 + R:R tối thiểu riêng khung 4H → 2 | 119.92 | 41.9% | 0.383 | 12.75 | 9.41 | 0.436 | 0.336 | -13.45 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 65.98 | 44.2% | 0.584 | 10.5 | 6.28 | 0.374 | 0.813 | -7.71 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần SL (/100) → 9 | 110.12 | 50% | 0.744 | 7.81 | 14.1 | 0.624 | 0.871 | -14.98 |  |
