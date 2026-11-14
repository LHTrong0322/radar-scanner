# Tối ưu tự động (chạy liên tục) — vòng 269

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 2898 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 160 | 46.9% | 99.48R | 0.622 | 5.74R | 9.62R | 10.34 | 33 | 12.1% | -15.05R | -0.456 | 15.05R |
| **Tốt nhất** | 145 | 53.1% | 125.12R | 0.863 | 6.15R | 7.29R | 17.16 | 29 | 17.2% | -10.68R | -0.368 | 10.68R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 29 | 51.7% | 30.98R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 106 | 53.8% | 86.41R | 22 | 22.7% | -4.88R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 160 | 46.9% | 99.48R | 9.62R | 10.34 | 33 | 12.1% | -15.05R |
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

### Vòng 269 — ngẫu nhiên nhiều thông số · mốc: tổng 125.12R, win 53.1%, rủi ro tụt vốn 7.29R, lời÷rủi ro 17.16

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Cộng thêm ngưỡng điểm khung 1D → 4 + % chốt ở TP1 → 0.287 | 124.18 | 52.4% | 0.856 | 7.59 | 16.36 | 0.782 | 0.941 | -10.67 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + R:R tối thiểu riêng khung 1W → 2 + Lệnh chờ hết hạn sau (nến) → 8 | 95.51 | 48.1% | 0.612 | 9.46 | 10.1 | 0.495 | 0.746 | -14.6 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 103.64 | 44.7% | 0.545 | 11.67 | 8.88 | 0.493 | 0.604 | -15.89 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 126.89 | 48.2% | 0.9 | 8.5 | 14.93 | 0.752 | 1.077 | -10.98 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Mức RSI 30/70 → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Momentum (/100) → 21 | 22.38 | 54.2% | 0.158 | 7.44 | 3.01 | 0.213 | 0.112 | -10.41 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: POC volume profile cố định → 0.813 | 123.6 | 52.4% | 0.864 | 7.36 | 16.79 | 0.782 | 0.961 | -9.66 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Cộng điểm phân kỳ dương ẩn → 2.63 | 125.15 | 53.1% | 0.863 | 7.27 | 17.21 | 0.763 | 0.982 | -10.69 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Mức MACD → 0.875 | 116.3 | 51% | 0.813 | 7.55 | 15.4 | 0.739 | 0.898 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cộng điểm phân kỳ dương ẩn → 2.63 + Số TP tối đa → 2 | 121.6 | 52.7% | 0.833 | 7.59 | 16.02 | 0.702 | 0.992 | -10.68 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL riêng khung 4H (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: EMA 21 → 1.13 | 173.83 | 38.7% | 0.576 | 18.45 | 9.42 | 0.517 | 0.639 | -13.45 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: EMA 50 → 1.13 + SL tối đa (% Entry) → 0.425 + Cổng Dow → TẮT | 130.08 | 42.1% | 0.602 | 11.78 | 11.04 | 0.589 | 0.615 | -16.81 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: POC anchored → 2 + Điểm vùng: EMA 200 → 3 + R:R tối thiểu riêng khung 1D → 2 | 86.73 | 42.8% | 0.501 | 10.22 | 8.49 | 0.476 | 0.526 | -9.96 |  |

### Vòng 268 — ngẫu nhiên nhiều thông số · mốc: tổng 126.35R, win 52.7%, rủi ro tụt vốn 7.52R, lời÷rủi ro 16.80

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: BOS → 1 | 124.42 | 52.1% | 0.852 | 7.68 | 16.2 | 0.713 | 1.016 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần Trend (/100) → 19 | 97.28 | 44.9% | 0.583 | 11.16 | 8.72 | 0.569 | 0.595 | -5.33 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Số TP tối đa → 2 | 53.77 | 43.6% | 0.384 | 12.27 | 4.38 | 0.213 | 0.541 | -12.64 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 4H (ATR) → 0.3 | 173.65 | 39.1% | 0.575 | 17.09 | 10.16 | 0.513 | 0.639 | -13.38 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Khung lớn phải tăng (trend ≥) → 0.425 + Trọng số phần Elliott (/100) → 6 | 179.72 | 39.5% | 0.611 | 17.88 | 10.05 | 0.528 | 0.695 | -16.51 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 21 → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 110.33 | 44% | 0.63 | 11.01 | 10.02 | 0.718 | 0.55 | -6.96 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Cộng thêm ngưỡng điểm khung 4H → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 76.46 | 47.4% | 0.659 | 8.73 | 8.76 | 0.679 | 0.637 | -15.29 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 36.15 | 40.2% | 0.415 | 10.19 | 3.55 | 0.317 | 0.537 | -6.21 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Trọng số phần Divergence (/100) → 9 | 125.64 | 52% | 0.849 | 7.65 | 16.42 | 0.726 | 0.994 | -10.68 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Cộng thêm ngưỡng điểm khung 1D → 7 | 126.16 | 52.4% | 0.858 | 7.91 | 15.95 | 0.726 | 1.016 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: POC volume profile cố định → 0.813 | 114.45 | 50.7% | 0.753 | 8.22 | 13.92 | 0.674 | 0.841 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Cổng Dow → TẮT + Điểm vùng: POC volume profile cố định → 0.688 | 142.3 | 44.8% | 0.638 | 11.04 | 12.89 | 0.635 | 0.641 | -19.48 |  |

### Vòng 267 — ngẫu nhiên nhiều thông số · mốc: tổng 126R, win 52.7%, rủi ro tụt vốn 7.61R, lời÷rủi ro 16.56

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + SL tối đa (% Entry) → 0.35 + Cộng thêm ngưỡng điểm khung 4H → 2 | 108.08 | 48.3% | 0.756 | 8.72 | 12.39 | 0.653 | 0.863 | -13.07 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 119.53 | 49.7% | 0.824 | 8.37 | 14.28 | 0.645 | 1.027 | -12.87 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 | 36.37 | 49.2% | 0.099 | 8.87 | 4.1 | 0.135 | 0.072 | -11.45 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Xác nhận khung nhỏ (A2) → W | 84.24 | 37.9% | 0.323 | 17.29 | 4.87 | 0.318 | 0.327 | -8.22 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Trọng số phần Momentum (/100) → 21 | 121.78 | 52.1% | 0.834 | 7.83 | 15.55 | 0.691 | 0.998 | -13 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 29.98 | 39.5% | 0.349 | 10.8 | 2.78 | 0.242 | 0.496 | -6.21 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 97.73 | 46.9% | 0.611 | 10.42 | 9.38 | 0.462 | 0.817 | -6.22 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Cộng thêm ngưỡng điểm khung 1W → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 28.49 | 56.1% | 0.181 | 6.15 | 4.63 | 0.215 | 0.15 | -11.01 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Số TP tối đa → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 74.03 | 43.4% | 0.574 | 10.44 | 7.09 | 0.458 | 0.711 | -8.14 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 127.89 | 52.4% | 0.894 | 7.27 | 17.59 | 0.804 | 0.988 | -13.33 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Khung lớn phải tăng (trend ≥) → 0.375 + Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 1W → 2 | 149.58 | 37.5% | 0.5 | 19.23 | 7.78 | 0.407 | 0.591 | -16.6 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng thêm ngưỡng điểm khung 1W → 2 + Lệnh chờ hết hạn sau (nến) → 6 | 113.7 | 44.5% | 0.544 | 10.44 | 10.89 | 0.574 | 0.513 | -9.71 |  |

### Vòng 266 — ngẫu nhiên nhiều thông số · mốc: tổng 126.35R, win 52.7%, rủi ro tụt vốn 7.48R, lời÷rủi ro 16.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Momentum (/100) → 25 | 29.85 | 56.7% | 0.19 | 6.12 | 4.88 | 0.222 | 0.159 | -10.92 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 121.82 | 48.2% | 0.734 | 8.83 | 13.8 | 0.681 | 0.8 | -12.86 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 59.4 | 42% | 0.367 | 12.88 | 4.61 | 0.246 | 0.476 | -8.12 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: POC anchored → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 99.32 | 47.1% | 0.641 | 9.45 | 10.51 | 0.707 | 0.568 | -10.2 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Trend (/100) → 19 | 29.48 | 57.3% | 0.188 | 6.19 | 4.76 | 0.246 | 0.132 | -9.81 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Đệm SL riêng khung 1W (ATR) → 0.3 | 98.67 | 47.8% | 0.726 | 8.65 | 11.41 | 0.442 | 1.01 | -11.73 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 3.5 | 98.67 | 47.8% | 0.726 | 8.65 | 11.41 | 0.442 | 1.01 | -11.73 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 50 → 0.75 + Trọng số phần SL (/100) → 7 | 93.98 | 39.9% | 0.371 | 16.04 | 5.86 | 0.315 | 0.426 | -7.62 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: EMA 21 → 0.875 | 78.71 | 29.3% | 0.185 | 35.13 | 2.24 | 0.237 | 0.145 | -37.07 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Cộng điểm phân kỳ dương ẩn → 3.5 + R:R tối thiểu riêng khung 1W → 2 | 104.48 | 48.1% | 0.67 | 8.75 | 11.94 | 0.578 | 0.767 | -12.75 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: EMA 21 → 1.13 + Trọng số phần Momentum (/100) → 25 | 97.98 | 48.2% | 0.705 | 8.42 | 11.64 | 0.479 | 0.941 | -12.07 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Cộng thêm ngưỡng điểm khung 1D → 7 | 120.67 | 52.3% | 0.81 | 8.03 | 15.03 | 0.737 | 0.892 | -10.68 |  |

### Vòng 265 — ngẫu nhiên nhiều thông số · mốc: tổng 126.35R, win 52.7%, rủi ro tụt vốn 7.53R, lời÷rủi ro 16.78

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Fib sóng 4 → 1.56 | 70.08 | 46.6% | 0.535 | 9.5 | 7.38 | 0.422 | 0.665 | -5.29 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: MACD cắt lên Signal → 0.438 | 119.14 | 50.3% | 0.759 | 8.99 | 13.25 | 0.603 | 0.948 | -8.1 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 107.29 | 46.9% | 0.662 | 9.89 | 10.85 | 0.623 | 0.7 | -6.36 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Coin phải mạnh hơn BTC trong N ngày → 14 | 97.2 | 48.8% | 0.765 | 8.35 | 11.64 | 0.735 | 0.803 | -17.15 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: EMA 21 → 1.13 | 122.33 | 49.7% | 0.779 | 7.99 | 15.31 | 0.694 | 0.88 | -12.06 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Mức MACD → 0.875 | 111.39 | 49.7% | 0.768 | 8.46 | 13.17 | 0.629 | 0.926 | -10.65 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Elliott (/100) → 6 | 121.21 | 50.7% | 0.819 | 7.83 | 15.48 | 0.711 | 0.945 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Cộng thêm ngưỡng điểm khung 1D → 7 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần SL (/100) → 9 | 107.73 | 46.1% | 0.653 | 10.54 | 10.22 | 0.608 | 0.697 | -6.36 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: HVN cố định → 0.438 + Lệnh chờ hết hạn sau (nến) → 6 | 68.09 | 45.3% | 0.717 | 8.84 | 7.7 | 0.61 | 0.851 | -7.56 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 116.79 | 52% | 0.789 | 7.87 | 14.84 | 0.698 | 0.894 | -12.8 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng điểm phân kỳ dương ẩn → 3.5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 64.82 | 45.2% | 0.523 | 9.81 | 6.61 | 0.411 | 0.65 | -9.04 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + SL tối đa (% Entry) → 0.425 | 97.17 | 48.7% | 0.639 | 9.33 | 10.41 | 0.508 | 0.778 | -9.14 |  |

### Vòng 264 — ngẫu nhiên nhiều thông số · mốc: tổng 126.35R, win 52.7%, rủi ro tụt vốn 7.65R, lời÷rủi ro 16.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 117.99 | 42.1% | 0.379 | 12.63 | 9.34 | 0.427 | 0.338 | -12.15 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.63 | 47.8% | 0.637 | 9.45 | 10.86 | 0.646 | 0.627 | -12.04 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: EMA 21 → 0.875 | 122.87 | 51% | 0.836 | 8.12 | 15.13 | 0.773 | 0.909 | -11.65 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Khung lớn phải tăng (trend ≥) → 0.425 | 111.48 | 51.8% | 0.802 | 7.41 | 15.04 | 0.6 | 1.033 | -10.72 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Cộng thêm ngưỡng điểm khung 4H → -1 | 141.18 | 40.4% | 0.368 | 13.52 | 10.44 | 0.366 | 0.369 | -15.24 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: EMA 200 → 1 + Lệnh chờ hết hạn sau (nến) → 6 | 103.76 | 49% | 0.726 | 8.63 | 12.02 | 0.769 | 0.677 | -7.24 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → 2 | 97.95 | 47.1% | 0.72 | 8.81 | 11.12 | 0.446 | 0.987 | -11.72 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Biên mây Ichimoku → 1.05 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 60.08 | 44.9% | 0.562 | 10.04 | 5.98 | 0.459 | 0.688 | -8.34 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Trọng số phần R:R (/100) → 28 | 126.18 | 52.1% | 0.876 | 7.46 | 16.91 | 0.79 | 0.973 | -10.68 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Mức RSI 30/70 → 1.13 | 102.14 | 49.7% | 0.704 | 8.51 | 12 | 0.72 | 0.686 | -10.45 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Số TP tối đa → 2 + Lệnh chờ hết hạn sau (nến) → 6 | 104.88 | 50.4% | 0.777 | 8.16 | 12.85 | 0.68 | 0.894 | -9.29 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Khung lớn phải tăng (trend ≥) → 0.375 | 134.17 | 43.9% | 0.627 | 11.37 | 11.8 | 0.574 | 0.677 | -19.38 |  |

### Vòng 263 — ngẫu nhiên nhiều thông số · mốc: tổng 126.35R, win 52.7%, rủi ro tụt vốn 7.52R, lời÷rủi ro 16.80

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: MACD cắt lên Signal → 0.563 | 125.11 | 49.7% | 0.807 | 8.33 | 15.02 | 0.766 | 0.856 | -11.27 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: POC anchored → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 106.13 | 49% | 0.685 | 8.78 | 12.09 | 0.623 | 0.756 | -10.71 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Trọng số phần Elliott (/100) → 6 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 123.23 | 48.7% | 0.78 | 8.42 | 14.64 | 0.731 | 0.838 | -11.27 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 119.89 | 51.3% | 0.789 | 7.86 | 15.25 | 0.664 | 0.939 | -12.08 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Ngưỡng điểm vào kèo → 77 + Coin phải mạnh hơn BTC trong N ngày → 14 | 79.99 | 48.2% | 0.714 | 8.24 | 9.71 | 0.523 | 0.927 | -17.19 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: POC anchored → 2 | 112.69 | 50% | 0.732 | 8.66 | 13.01 | 0.653 | 0.819 | -8.34 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần SL (/100) → 9 | 92.32 | 46% | 0.615 | 9.78 | 9.44 | 0.467 | 0.815 | -10.18 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: EMA 50 → 0.75 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 115.9 | 49% | 0.748 | 9.15 | 12.67 | 0.593 | 0.931 | -11.36 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 115.6 | 50.3% | 0.797 | 8.18 | 14.13 | 0.629 | 0.988 | -10.65 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 33.01 | 38.6% | 0.375 | 10.86 | 3.04 | 0.288 | 0.49 | -6.21 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trọng số phần R:R (/100) → 28 + Trọng số phần Divergence (/100) → 9 | 126.81 | 52.8% | 0.881 | 7.43 | 17.07 | 0.782 | 0.994 | -10.68 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Cộng thêm ngưỡng điểm khung 1D → 7 | 147.87 | 44.9% | 0.685 | 10.97 | 13.48 | 0.648 | 0.719 | -19.43 |  |

### Vòng 262 — ngẫu nhiên nhiều thông số · mốc: tổng 126.35R, win 52.7%, rủi ro tụt vốn 7.52R, lời÷rủi ro 16.80

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 125.94 | 51% | 0.869 | 7.68 | 16.4 | 0.772 | 0.984 | -13.94 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Lệnh chờ hết hạn sau (nến) → 6 | 100.21 | 50.4% | 0.731 | 8.4 | 11.93 | 0.723 | 0.742 | -9.06 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần Momentum (/100) → 21 | 122 | 52.3% | 0.808 | 7.72 | 15.8 | 0.685 | 0.958 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: Fib sóng 4 → 0.938 | 114.68 | 50% | 0.796 | 8.17 | 14.04 | 0.625 | 0.988 | -10.65 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Mức MACD → 1.13 | 125.9 | 52.1% | 0.874 | 7.31 | 17.22 | 0.759 | 1.007 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cổng Dow → TẮT | 145.38 | 45.4% | 0.673 | 10.98 | 13.24 | 0.599 | 0.743 | -19.24 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Ngưỡng điểm vào kèo → 74 | 97.9 | 47.4% | 0.715 | 8.65 | 11.32 | 0.451 | 0.967 | -11.73 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + R:R tối thiểu riêng khung 1W → 2 | 98.35 | 49.7% | 0.651 | 8.69 | 11.32 | 0.541 | 0.773 | -12.06 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: MACD cắt lên Signal → 0.563 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 125.22 | 52.7% | 0.846 | 7.78 | 16.1 | 0.74 | 0.972 | -9.37 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm tối thiểu của vùng đặt SL → 2 | 123.2 | 52.7% | 0.832 | 7.89 | 15.61 | 0.782 | 0.887 | -10.68 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Lệnh chờ hết hạn sau (nến) → 8 + Khung lớn phải tăng (trend ≥) → 0.425 | 92.61 | 48.7% | 0.609 | 9.45 | 9.8 | 0.513 | 0.719 | -11.24 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Số TP tối đa → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 127.2 | 50.3% | 0.821 | 8.12 | 15.67 | 0.791 | 0.856 | -11.27 |  |

### Vòng 261 — ngẫu nhiên nhiều thông số · mốc: tổng 126.35R, win 52.7%, rủi ro tụt vốn 7.52R, lời÷rủi ro 16.80

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 21 → 0.875 | 99.11 | 50% | 0.679 | 8.55 | 11.59 | 0.651 | 0.711 | -10.45 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: EMA 21 → 0.875 + R:R tối thiểu riêng khung 1W → 2 | 96.44 | 47.2% | 0.67 | 8.73 | 11.05 | 0.551 | 0.792 | -14.98 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 113.95 | 50% | 0.75 | 8.83 | 12.9 | 0.656 | 0.862 | -8.1 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Xác nhận khung nhỏ (A2) → W | 63.84 | 40.7% | 0.361 | 14.15 | 4.51 | 0.449 | 0.265 | -15.58 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Ngưỡng điểm vào kèo → 74 + Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1W (ATR) → 0.3 | 75.69 | 37.1% | 0.342 | 16.9 | 4.48 | 0.326 | 0.357 | -8.68 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần SL (/100) → 7 + Số TP tối đa → 2 + % chốt ở TP1 → 0.287 | 77.17 | 46.7% | 0.735 | 8.83 | 8.74 | 0.564 | 0.946 | -7.51 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Biên mây Ichimoku → 1.35 | 77.45 | 45.7% | 0.738 | 9.27 | 8.35 | 0.62 | 0.883 | -6.49 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần SL (/100) → 7 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 77.26 | 46.7% | 0.736 | 8.83 | 8.75 | 0.566 | 0.945 | -7.51 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: EMA 21 → 1.13 | 121 | 51.7% | 0.812 | 7.71 | 15.69 | 0.714 | 0.929 | -11.02 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: HVN anchored → 0.313 + R:R tối thiểu riêng khung 4H → 2 + Trọng số phần R:R (/100) → 33 | 130.11 | 41.8% | 0.403 | 12.21 | 10.66 | 0.405 | 0.401 | -9.84 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Momentum (/100) → 21 | 126.4 | 52.4% | 0.872 | 7.46 | 16.94 | 0.756 | 1.003 | -10.68 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: BOS → 3 + Trọng số phần Divergence (/100) → 12 | 127.41 | 51.7% | 0.879 | 7.52 | 16.94 | 0.772 | 1.006 | -13.94 |  |

### Vòng 260 — ngẫu nhiên nhiều thông số · mốc: tổng 126.35R, win 52.7%, rủi ro tụt vốn 7.41R, lời÷rủi ro 17.05

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Lệnh chờ hết hạn sau (nến) → 6 | 101.89 | 49.3% | 0.738 | 8.18 | 12.46 | 0.729 | 0.748 | -10.33 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Cộng thêm ngưỡng điểm khung 1D → 4 | 123.72 | 51.4% | 0.847 | 7.78 | 15.9 | 0.727 | 0.986 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: BOS → 3 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 99.87 | 48.5% | 0.734 | 8.17 | 12.22 | 0.68 | 0.799 | -9.12 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Momentum (/100) → 21 + Trọng số phần Entry (/100) → 33 | 180.38 | 39.5% | 0.603 | 17.29 | 10.43 | 0.462 | 0.753 | -12.25 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần R:R (/100) → 28 | 126.05 | 52.4% | 0.869 | 7.51 | 16.78 | 0.78 | 0.97 | -9.35 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Coin phải mạnh hơn BTC trong N ngày → 14 | 94.09 | 50.4% | 0.791 | 7.78 | 12.09 | 0.67 | 0.941 | -17.15 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 107.82 | 49.4% | 0.666 | 9.02 | 11.95 | 0.562 | 0.786 | -9.11 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Số TP tối đa → 2 | 105.12 | 51.7% | 0.876 | 7.53 | 13.96 | 0.68 | 1.1 | -11.65 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: POC anchored → 4 | 121.82 | 52.3% | 0.807 | 7.75 | 15.72 | 0.671 | 0.948 | -5.79 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Mức RSI 30/70 → 0.875 | 129.35 | 51.6% | 0.803 | 8.34 | 15.51 | 0.668 | 0.974 | -10.68 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: EMA 21 → 1.13 | 120.26 | 49% | 0.766 | 8.24 | 14.59 | 0.694 | 0.851 | -12.06 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Cổng Dow → CHẶT | 93.19 | 53.2% | 0.855 | 6.69 | 13.93 | 0.542 | 1.13 | -10.95 |  |
