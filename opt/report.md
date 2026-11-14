# Tối ưu tự động (chạy liên tục) — vòng 300

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 3270 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 160 | 46.3% | 90.4R | 0.565 | 5.74R | 10.28R | 8.79 | 31 | 12.9% | -13R | -0.42 | 13R |
| **Tốt nhất** | 144 | 52.8% | 113.57R | 0.789 | 6.15R | 7.47R | 15.20 | 27 | 18.5% | -8.64R | -0.32 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 106 | 53.8% | 86.41R | 20 | 25% | -2.83R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 160 | 46.3% | 90.4R | 10.28R | 8.79 | 31 | 12.9% | -13R |
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

### Vòng 300 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.20

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 81.87 | 37.2% | 0.343 | 16.83 | 4.86 | 0.305 | 0.376 | -6.85 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Số TP tối đa → 2 + % chốt ở TP1 → 0.307 + Trọng số phần SL (/100) → 9 | 93.44 | 49.3% | 0.697 | 8.32 | 11.23 | 0.57 | 0.854 | -7.26 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: HVN cố định → 0.563 | 110.43 | 50.6% | 0.717 | 8.43 | 13.1 | 0.61 | 0.852 | -3.82 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Khung lớn phải tăng (trend ≥) → 0.375 | 110.28 | 51% | 0.74 | 8.1 | 13.61 | 0.575 | 0.907 | -2.69 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Lệnh chờ hết hạn sau (nến) → 6 + Cộng thêm ngưỡng điểm khung 1W → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 | 90.5 | 44.7% | 0.595 | 11.23 | 8.06 | 0.653 | 0.538 | -2.18 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 104.55 | 51.4% | 0.747 | 7.81 | 13.39 | 0.573 | 0.947 | -8.64 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 117.65 | 37.8% | 0.523 | 18.19 | 6.47 | 0.447 | 0.59 | -19.24 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: POC anchored → 2 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 87.49 | 47.9% | 0.625 | 8.95 | 9.78 | 0.481 | 0.786 | -6.22 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm tối thiểu của vùng đặt SL → 4 | 107.83 | 51.1% | 0.765 | 7.65 | 14.1 | 0.632 | 0.912 | -8.63 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: EMA 21 → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 4 | 104.83 | 49% | 0.668 | 9.2 | 11.39 | 0.569 | 0.776 | -8.38 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Đệm SL riêng khung 1W (ATR) → 0.3 | 82.95 | 44.9% | 0.564 | 9.74 | 8.52 | 0.574 | 0.556 | -10.58 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Divergence (/100) → 9 | 90.2 | 46.6% | 0.609 | 9.8 | 9.2 | 0.475 | 0.791 | -8.14 |  |

### Vòng 299 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.20

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Đệm SL riêng khung 1W (ATR) → 0.3 | 105.28 | 50% | 0.741 | 8.35 | 12.61 | 0.569 | 0.924 | -9.68 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: POC volume profile cố định → 0.813 | 110.45 | 51.4% | 0.757 | 7.73 | 14.29 | 0.581 | 0.963 | -7.62 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 111.09 | 51.7% | 0.756 | 7.86 | 14.13 | 0.603 | 0.933 | -8.64 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Break mây Ichimoku → 3 | 102.86 | 49.1% | 0.639 | 9.12 | 11.28 | 0.496 | 0.807 | -8.38 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 162.51 | 37.4% | 0.482 | 19.07 | 8.52 | 0.366 | 0.598 | -15.33 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Cổng Dow → CHẶT + Trọng số phần Elliott (/100) → 6 + Trọng số phần Entry (/100) → 28 | 84.21 | 51.2% | 0.696 | 7.68 | 10.96 | 0.376 | 1 | -10.73 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Break mây Ichimoku → 3 | 23.99 | 54.4% | 0.133 | 8 | 3 | 0.213 | 0.056 | -11.39 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Cộng thêm ngưỡng điểm khung 4H → 2 | 114.06 | 52.9% | 0.815 | 7.15 | 15.95 | 0.684 | 0.961 | -8.64 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần SL (/100) → 7 | 116.43 | 41.3% | 0.388 | 12.73 | 9.15 | 0.357 | 0.416 | -10.81 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Cộng thêm ngưỡng điểm khung 1W → -1 | 113.57 | 52.8% | 0.789 | 7.47 | 15.2 | 0.624 | 0.983 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: HVN anchored → 0.188 | 100.71 | 50% | 0.663 | 9.19 | 10.96 | 0.512 | 0.849 | -6.06 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: EMA 21 → 0.875 | 91.66 | 40.4% | 0.314 | 13.47 | 6.8 | 0.276 | 0.345 | -7.87 |  |

### Vòng 298 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.41R, lời÷rủi ro 15.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + % chốt ở TP1 → 0.287 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 99.5 | 49.7% | 0.65 | 9.31 | 10.69 | 0.491 | 0.85 | -6.04 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Coin phải mạnh hơn BTC trong N ngày → 14 | 64.75 | 47.7% | 0.605 | 8.8 | 7.36 | 0.473 | 0.768 | -13.71 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Trọng số phần R:R (/100) → 33 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 102.62 | 50% | 0.713 | 7.96 | 12.89 | 0.502 | 0.954 | -8.6 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 109.51 | 52.7% | 0.74 | 7.86 | 13.93 | 0.587 | 0.924 | -8.65 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 107.58 | 50.3% | 0.742 | 8.09 | 13.3 | 0.605 | 0.889 | -8.98 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 109.91 | 52.8% | 0.763 | 7.21 | 15.24 | 0.642 | 0.903 | -8.64 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Mức MACD → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 | 102.59 | 51.4% | 0.733 | 8.06 | 12.73 | 0.568 | 0.912 | -8.67 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + % chốt ở TP1 → 0.287 | 111.89 | 52.1% | 0.788 | 7.54 | 14.84 | 0.637 | 0.962 | -8.62 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng điểm phân kỳ dương ẩn → 2.63 | 104.01 | 47.7% | 0.689 | 8.95 | 11.62 | 0.52 | 0.884 | -9.49 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 95.94 | 44.9% | 0.545 | 11.79 | 8.14 | 0.531 | 0.559 | -2.41 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 | 102.35 | 48.7% | 0.648 | 9.14 | 11.2 | 0.525 | 0.787 | -8.38 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: HVN cố định → 0.438 | 109.04 | 51.8% | 0.784 | 7.62 | 14.31 | 0.582 | 1.021 | -8.67 |  |

### Vòng 297 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.5R, lời÷rủi ro 15.14

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: POC anchored → 4 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 111.54 | 50% | 0.744 | 8.36 | 13.34 | 0.546 | 0.952 | -2.44 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: EMA 50 → 0.75 + R:R tối thiểu riêng khung 4H → 2 | 114.99 | 42.2% | 0.367 | 12.11 | 9.5 | 0.326 | 0.403 | -8.82 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Trend (/100) → 19 + R:R tối thiểu riêng khung 1W → 2 | 23.07 | 36.6% | 0.281 | 11.6 | 1.99 | 0.173 | 0.443 | -9.62 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: POC volume profile cố định → 0.688 + Cộng thêm ngưỡng điểm khung 1W → 2 | 108.49 | 50% | 0.753 | 7.92 | 13.7 | 0.518 | 1.01 | -8.5 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Coin phải mạnh hơn BTC trong N ngày → 14 | 71.56 | 46.4% | 0.572 | 9.42 | 7.6 | 0.569 | 0.576 | -17.34 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: EMA 21 → 0.875 | 90.13 | 44.7% | 0.601 | 10.12 | 8.91 | 0.524 | 0.702 | -8.69 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 103.3 | 48.3% | 0.712 | 9.09 | 11.36 | 0.546 | 0.923 | -6.47 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 86.97 | 40.1% | 0.306 | 12.97 | 6.71 | 0.287 | 0.324 | -6.72 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 107.15 | 52.4% | 0.729 | 7.69 | 13.93 | 0.576 | 0.907 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: EMA 50 → 0.75 + Đệm SL riêng khung 1D (ATR) → 0.3 | 104.73 | 46.9% | 0.655 | 10.29 | 10.18 | 0.625 | 0.682 | -5.33 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Cộng điểm phân kỳ dương ẩn → 2.63 + Trọng số phần Momentum (/100) → 25 | 112.04 | 52.1% | 0.789 | 7.47 | 15 | 0.64 | 0.961 | -8.64 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Divergence (/100) → 9 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 106.86 | 51.4% | 0.722 | 8.07 | 13.24 | 0.559 | 0.919 | -8.67 |  |

### Vòng 296 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.39R, lời÷rủi ro 15.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + R:R tối thiểu riêng khung 1D → 2 | 103.91 | 46.7% | 0.615 | 9.11 | 11.41 | 0.616 | 0.614 | -6.9 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Trọng số phần Divergence (/100) → 12 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 69.86 | 46.7% | 0.665 | 8.75 | 7.98 | 0.447 | 0.934 | -5.46 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Trend (/100) → 19 | 113.9 | 50.3% | 0.764 | 8.07 | 14.11 | 0.662 | 0.874 | -10 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 77.06 | 45.6% | 0.482 | 10.21 | 7.55 | 0.357 | 0.603 | -11.69 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần SL (/100) → 7 | 111.42 | 50.7% | 0.763 | 7.74 | 14.4 | 0.655 | 0.874 | -8.98 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Trọng số phần Divergence (/100) → 9 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 20.57 | 35.8% | 0.254 | 12.07 | 1.7 | 0.149 | 0.423 | -9.62 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 96.97 | 50% | 0.664 | 8.43 | 11.5 | 0.692 | 0.632 | -11.66 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 98.73 | 51.4% | 0.676 | 8.34 | 11.84 | 0.603 | 0.762 | -7.82 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Mức MACD → 1.13 + Cộng thêm ngưỡng điểm khung 4H → -1 | 98.06 | 49% | 0.649 | 8.83 | 11.11 | 0.517 | 0.798 | -7.61 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC volume profile cố định → 0.688 + R:R tối thiểu riêng khung 4H → 2 | 68.85 | 39.1% | 0.306 | 13.94 | 4.94 | 0.27 | 0.341 | -6.45 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 112.87 | 51.4% | 0.784 | 7.8 | 14.47 | 0.675 | 0.909 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 1D → 7 | 83.68 | 39.2% | 0.349 | 16.63 | 5.03 | 0.296 | 0.395 | -6.61 |  |

### Vòng 295 — ngẫu nhiên nhiều thông số · mốc: tổng 112.36R, win 52.4%, rủi ro tụt vốn 7.45R, lời÷rủi ro 15.08

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Entry (/100) → 28 | 121.15 | 42.3% | 0.391 | 11.8 | 10.27 | 0.336 | 0.438 | -8.23 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Divergence (/100) → 9 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 73.25 | 45.9% | 0.551 | 9.82 | 7.46 | 0.459 | 0.659 | -0.11 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 107.05 | 51% | 0.749 | 7.72 | 13.87 | 0.616 | 0.903 | -8.25 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Coin phải mạnh hơn BTC trong N ngày → 14 + % chốt ở TP1 → 0.307 | 80.48 | 49.1% | 0.706 | 8.41 | 9.57 | 0.554 | 0.901 | -12.73 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Ngưỡng điểm vào kèo → 77 + R:R tối thiểu tới TP1 → 2.38 | 70.4 | 43% | 0.473 | 10.58 | 6.65 | 0.462 | 0.483 | -1.85 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 24.65 | 57.6% | 0.163 | 5.97 | 4.13 | 0.164 | 0.162 | -9.19 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: EMA 200 → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Trọng số phần Elliott (/100) → 10 | 93.84 | 49.4% | 0.602 | 9.54 | 9.84 | 0.569 | 0.642 | -3.01 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần SL (/100) → 7 | 120.17 | 49.7% | 0.785 | 8.36 | 14.37 | 0.767 | 0.808 | -7.86 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 200 → 3 + Trọng số phần Divergence (/100) → 12 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 26.31 | 56.5% | 0.171 | 6.14 | 4.29 | 0.17 | 0.172 | -8.72 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 115.37 | 49% | 0.735 | 8.45 | 13.65 | 0.724 | 0.748 | -8.45 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: EMA 200 → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 77.85 | 46.5% | 0.683 | 8.63 | 9.02 | 0.57 | 0.813 | -11.65 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 94.86 | 50.7% | 0.65 | 8.45 | 11.23 | 0.622 | 0.681 | -7.43 |  |

### Vòng 294 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + R:R tối thiểu tới TP1 → 2.63 | 96.12 | 51.3% | 0.808 | 7.6 | 12.65 | 0.557 | 1.09 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Lệnh chờ hết hạn sau (nến) → 6 + SL tối đa (% Entry) → 0.425 | 90.61 | 48.9% | 0.652 | 8.91 | 10.17 | 0.504 | 0.83 | -4.67 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cổng Dow → TẮT + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 25.58 | 51% | 0.128 | 8.75 | 2.92 | 0.219 | 0.035 | -15.78 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Ngưỡng điểm vào kèo → 74 | 112.6 | 52.1% | 0.771 | 7.56 | 14.89 | 0.624 | 0.94 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Số TP tối đa → 2 | 113.53 | 52.4% | 0.783 | 7.79 | 14.57 | 0.608 | 0.992 | -8.64 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 11 | 38.7% | 0.177 | 12.84 | 0.86 | -0.066 | 0.514 | -7.25 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: HVN cố định → 0.563 | 94.55 | 50.7% | 0.639 | 8.35 | 11.32 | 0.633 | 0.646 | -8.4 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 113.37 | 52.4% | 0.782 | 7.53 | 15.06 | 0.614 | 0.983 | -8.64 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 90.33 | 41.2% | 0.443 | 12.19 | 7.41 | 0.504 | 0.371 | -9.73 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 113.57 | 52.8% | 0.789 | 7.44 | 15.26 | 0.624 | 0.983 | -8.64 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Trọng số phần Divergence (/100) → 9 | 99.85 | 51.7% | 0.689 | 8.36 | 11.94 | 0.624 | 0.764 | -7.82 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Momentum (/100) → 25 | 92.38 | 50% | 0.624 | 8.95 | 10.32 | 0.604 | 0.646 | -2.46 |  |

### Vòng 293 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.39R, lời÷rủi ro 15.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Coin phải mạnh hơn BTC trong N ngày → 14 | 82.46 | 50.4% | 0.693 | 8.14 | 10.13 | 0.554 | 0.86 | -15.1 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Momentum (/100) → 21 | 27.77 | 56.9% | 0.181 | 5.7 | 4.87 | 0.214 | 0.15 | -10.3 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: BOS → 3 | 112.82 | 52.4% | 0.778 | 7.74 | 14.58 | 0.624 | 0.957 | -7.32 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + SL tối đa (% Entry) → 0.35 | 114.66 | 43.1% | 0.568 | 12.1 | 9.48 | 0.465 | 0.67 | -15.86 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + % chốt ở TP1 → 0.307 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Cộng thêm ngưỡng điểm khung 4H → 2 | 106.98 | 51.4% | 0.743 | 7.52 | 14.23 | 0.63 | 0.873 | -8.99 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 119.52 | 49.4% | 0.766 | 8.56 | 13.96 | 0.711 | 0.833 | -9.22 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Break mây Ichimoku → 1 | 100.7 | 48.6% | 0.699 | 8.39 | 12 | 0.564 | 0.847 | -10 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: MACD cắt lên Signal → 0.438 | 116.64 | 47.3% | 0.707 | 9.48 | 12.3 | 0.643 | 0.786 | -6.47 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 80.82 | 47.6% | 0.55 | 9.9 | 8.16 | 0.402 | 0.746 | -5.77 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Ngưỡng điểm vào kèo → 74 | 83.47 | 48.7% | 0.701 | 8.06 | 10.36 | 0.579 | 0.854 | -18.36 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Trọng số phần Elliott (/100) → 6 + Trọng số phần Entry (/100) → 28 + Lệnh chờ hết hạn sau (nến) → 6 | 94 | 50% | 0.701 | 7.99 | 11.76 | 0.585 | 0.841 | -7.25 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + SL tối đa (% Entry) → 0.35 + Điểm vùng: EMA 200 → 3 | 100.1 | 50% | 0.736 | 7.89 | 12.69 | 0.502 | 0.991 | -8.64 |  |

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
