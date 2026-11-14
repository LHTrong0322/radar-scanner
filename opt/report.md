# Tối ưu tự động (chạy liên tục) — vòng 281

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 3042 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 160 | 46.9% | 99.48R | 0.622 | 5.74R | 9.51R | 10.46 | 33 | 12.1% | -15.05R | -0.456 | 15.05R |
| **Tốt nhất** | 145 | 53.1% | 125.12R | 0.863 | 6.15R | 7.45R | 16.79 | 29 | 17.2% | -10.68R | -0.368 | 10.68R |

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
| Bot thật | 160 | 46.9% | 99.48R | 9.51R | 10.46 | 33 | 12.1% | -15.05R |
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

### Vòng 281 — ngẫu nhiên nhiều thông số · mốc: tổng 125.12R, win 53.1%, rủi ro tụt vốn 7.45R, lời÷rủi ro 16.79

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Mức RSI 30/70 → 1.13 + R:R tối thiểu tới TP1 → 2.63 | 107.56 | 51.2% | 0.86 | 7.69 | 13.99 | 0.672 | 1.086 | -12.62 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Mức MACD → 0.875 | 119.9 | 52.1% | 0.821 | 7.91 | 15.16 | 0.74 | 0.919 | -10.68 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: BOS → 3 + Cộng thêm ngưỡng điểm khung 1D → 7 | 105.43 | 51.4% | 0.712 | 7.97 | 13.23 | 0.621 | 0.809 | -11.72 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + % chốt ở TP1 → 0.307 + Cộng thêm ngưỡng điểm khung 1D → 7 | 123.43 | 45.5% | 0.556 | 10.55 | 11.7 | 0.584 | 0.529 | -13.89 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: HVN anchored → 0.188 + R:R tối thiểu tới TP1 → 2.63 | 97.58 | 49.6% | 0.82 | 8.29 | 11.77 | 0.691 | 0.965 | -11.65 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + R:R tối thiểu tới TP1 → 2.63 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Đệm SL riêng khung 1D (ATR) → 0.3 | 111.59 | 46.3% | 0.82 | 10.65 | 10.48 | 0.817 | 0.824 | -9.29 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: EMA 50 → 0.75 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 87.55 | 49.3% | 0.634 | 8.91 | 9.83 | 0.63 | 0.64 | -12.29 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Cộng thêm ngưỡng điểm khung 1W → -1 | 125.12 | 53.1% | 0.863 | 7.45 | 16.79 | 0.763 | 0.983 | -10.68 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + R:R tối thiểu riêng khung 1D → 2 | 95.84 | 47.6% | 0.584 | 9.18 | 10.44 | 0.655 | 0.519 | -8.69 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần Entry (/100) → 33 + Trọng số phần SL (/100) → 7 | 91.17 | 38.1% | 0.355 | 16.83 | 5.42 | 0.32 | 0.388 | -6.6 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: EMA 50 → 1.13 | 111.49 | 43.1% | 0.496 | 12.01 | 9.28 | 0.561 | 0.429 | -12.75 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + % chốt ở TP1 → 0.307 + Điểm vùng: EMA 200 → 1 | 131.17 | 39.5% | 0.429 | 18.92 | 6.93 | 0.484 | 0.377 | -20.49 |  |

### Vòng 280 — ngẫu nhiên nhiều thông số · mốc: tổng 125.12R, win 53.1%, rủi ro tụt vốn 7.43R, lời÷rủi ro 16.84

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 114.43 | 47.8% | 0.829 | 8.44 | 13.56 | 0.641 | 1.053 | -9.9 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Divergence (/100) → 9 | 119.68 | 51.4% | 0.831 | 7.72 | 15.5 | 0.697 | 0.994 | -11.97 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Cộng thêm ngưỡng điểm khung 4H → -1 | 114.1 | 50.3% | 0.776 | 8 | 14.26 | 0.686 | 0.89 | -10.68 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: EMA 21 → 1.13 + Số TP tối đa → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 109.39 | 51.7% | 0.744 | 7.4 | 14.78 | 0.609 | 0.905 | -11.04 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 124.92 | 52.7% | 0.856 | 7.39 | 16.9 | 0.751 | 0.983 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần SL (/100) → 9 | 119.46 | 51% | 0.824 | 7.77 | 15.37 | 0.723 | 0.944 | -10.51 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: BOS → 1 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 23.65 | 37.6% | 0.278 | 12.06 | 1.96 | 0.267 | 0.293 | -10.01 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: BOS → 3 | 128.32 | 52.2% | 0.807 | 8.01 | 16.02 | 0.701 | 0.942 | -10.68 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 1 | 104.23 | 45.8% | 0.628 | 10.77 | 9.68 | 0.664 | 0.594 | -7.21 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: POC volume profile cố định → 0.813 | 105.43 | 51.4% | 0.712 | 7.94 | 13.28 | 0.621 | 0.809 | -10.7 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 86.63 | 44.3% | 0.619 | 10.09 | 8.59 | 0.429 | 0.837 | -8.85 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: EMA 21 → 0.875 + Trọng số phần R:R (/100) → 28 | 120.47 | 50.7% | 0.837 | 8.03 | 15 | 0.79 | 0.889 | -9.63 |  |

### Vòng 279 — ngẫu nhiên nhiều thông số · mốc: tổng 125.12R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.91

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 200 → 3 | 87.47 | 48.7% | 0.748 | 8.31 | 10.53 | 0.633 | 0.887 | -16.11 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: EMA 50 → 0.75 + R:R tối thiểu riêng khung 1D → 2 | 115.23 | 47.6% | 0.678 | 8.75 | 13.17 | 0.731 | 0.628 | -8.95 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Biên mây Ichimoku → 1.35 | 115.44 | 49.7% | 0.785 | 8.17 | 14.13 | 0.671 | 0.922 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Break mây Ichimoku → 1 | 113.38 | 50% | 0.766 | 8.27 | 13.71 | 0.684 | 0.86 | -12.04 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + % chốt ở TP1 → 0.287 + Cộng điểm phân kỳ dương ẩn → 2.63 | 33.05 | 58% | 0.211 | 5.73 | 5.77 | 0.254 | 0.168 | -10.92 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu tới TP1 → 2.63 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 101.2 | 46.2% | 0.698 | 9.33 | 10.85 | 0.666 | 0.727 | -6.28 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 93.61 | 45.1% | 0.578 | 10.98 | 8.53 | 0.55 | 0.606 | -6.36 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần Momentum (/100) → 25 | 123.6 | 52.4% | 0.864 | 7.34 | 16.84 | 0.782 | 0.961 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Cộng thêm ngưỡng điểm khung 4H → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 114.87 | 49.3% | 0.776 | 8.23 | 13.96 | 0.79 | 0.76 | -11.27 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: POC anchored → 4 + Cổng Dow → CHẶT + Điểm vùng: Biên mây Ichimoku → 1.35 | 89 | 54.2% | 0.754 | 7.15 | 12.45 | 0.501 | 0.961 | -7.95 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Entry (/100) → 33 + % chốt ở TP1 → 0.287 + Trọng số phần Momentum (/100) → 21 | 108.19 | 49.4% | 0.676 | 8.93 | 12.12 | 0.563 | 0.808 | -10.41 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Số TP tối đa → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 121.3 | 36.6% | 0.379 | 21.04 | 5.77 | 0.473 | 0.3 | -23.9 |  |

### Vòng 278 — ngẫu nhiên nhiều thông số · mốc: tổng 121.99R, win 51.7%, rủi ro tụt vốn 7.76R, lời÷rủi ro 15.72

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Đệm SL riêng khung 1D (ATR) → 0.3 | 107.99 | 46.9% | 0.675 | 10.32 | 10.46 | 0.665 | 0.685 | -6.32 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Lệnh chờ hết hạn sau (nến) → 6 + Cộng thêm ngưỡng điểm khung 1D → 7 | 98.82 | 48.9% | 0.721 | 8.35 | 11.83 | 0.731 | 0.711 | -10.33 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: BOS → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 32.67 | 58% | 0.208 | 5.72 | 5.71 | 0.235 | 0.181 | -10.92 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Cộng thêm ngưỡng điểm khung 4H → -1 | 117.51 | 51% | 0.822 | 7.86 | 14.95 | 0.7 | 0.964 | -12.47 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 3.5 | 175.57 | 38.9% | 0.593 | 17.73 | 9.9 | 0.485 | 0.705 | -13.36 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: BOS → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 194.36 | 39.7% | 0.613 | 17.73 | 10.96 | 0.493 | 0.736 | -12.97 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: POC anchored → 4 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 101.05 | 49.7% | 0.687 | 8.67 | 11.66 | 0.665 | 0.71 | -7.24 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm vào kèo → 77 | 139.29 | 38.2% | 0.611 | 16.93 | 8.23 | 0.551 | 0.669 | -24.67 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib sóng 4 → 0.938 | 107.88 | 48.2% | 0.765 | 8.74 | 12.34 | 0.565 | 0.98 | -11.73 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 117.64 | 51% | 0.811 | 7.8 | 15.08 | 0.69 | 0.948 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng thêm ngưỡng điểm khung 4H → 2 | 107.77 | 50.3% | 0.754 | 8.4 | 12.83 | 0.764 | 0.742 | -11.26 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Đệm SL riêng khung 4H (ATR) → 0.3 | 179.17 | 39.1% | 0.62 | 18.24 | 9.82 | 0.532 | 0.713 | -12.89 |  |

### Vòng 277 — ngẫu nhiên nhiều thông số · mốc: tổng 125.12R, win 53.1%, rủi ro tụt vốn 7.27R, lời÷rủi ro 17.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Divergence (/100) → 9 | 98.51 | 47.2% | 0.612 | 8.7 | 11.32 | 0.566 | 0.657 | -12 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Divergence (/100) → 9 + Xác nhận khung nhỏ (A2) → W | 88.21 | 37.7% | 0.339 | 17.69 | 4.99 | 0.282 | 0.398 | -9.33 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 35.75 | 39.8% | 0.406 | 10.36 | 3.45 | 0.324 | 0.505 | -4.87 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Break mây Ichimoku → 1 | 114.19 | 50% | 0.772 | 8.13 | 14.05 | 0.694 | 0.86 | -13.09 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 124.37 | 52.7% | 0.852 | 7.41 | 16.78 | 0.763 | 0.957 | -9.37 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Cộng thêm ngưỡng điểm khung 1W → 2 | 124.49 | 52.4% | 0.859 | 7.37 | 16.89 | 0.771 | 0.961 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 161.83 | 38.8% | 0.593 | 17.2 | 9.41 | 0.361 | 0.823 | -14.59 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 1D → 4 | 33.78 | 58.2% | 0.214 | 5.52 | 6.12 | 0.255 | 0.174 | -10.92 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Cộng thêm ngưỡng điểm khung 1D → 4 | 110.04 | 52.1% | 0.764 | 7.45 | 14.77 | 0.604 | 0.943 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Trọng số phần R:R (/100) → 33 | 124.92 | 52.7% | 0.856 | 7.34 | 17.02 | 0.751 | 0.983 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 130.23 | 46.5% | 0.566 | 10.23 | 12.73 | 0.618 | 0.51 | -11.26 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 82.35 | 47.6% | 0.799 | 8.29 | 9.93 | 0.686 | 0.934 | -7.51 |  |

### Vòng 276 — ngẫu nhiên nhiều thông số · mốc: tổng 125.12R, win 53.1%, rủi ro tụt vốn 7.45R, lời÷rủi ro 16.79

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + SL tối đa (% Entry) → 0.425 | 121.97 | 53.4% | 0.824 | 7.37 | 16.55 | 0.741 | 0.925 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Lệnh chờ hết hạn sau (nến) → 6 | 106.54 | 51.1% | 0.801 | 7.84 | 13.59 | 0.746 | 0.868 | -9.29 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm tối thiểu của vùng đặt SL → 4 | 114.69 | 50.7% | 0.765 | 8.13 | 14.11 | 0.656 | 0.879 | -5.5 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần R:R (/100) → 33 + Trọng số phần Entry (/100) → 33 | 173.78 | 38.7% | 0.585 | 18.12 | 9.59 | 0.473 | 0.702 | -13.36 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Mức RSI 30/70 → 1.13 | 124.49 | 52.4% | 0.859 | 7.53 | 16.53 | 0.771 | 0.961 | -10.68 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Break mây Ichimoku → 3 | 121.97 | 42.1% | 0.37 | 12.38 | 9.85 | 0.299 | 0.434 | -7.46 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 33.13 | 58% | 0.211 | 5.62 | 5.9 | 0.255 | 0.168 | -10.92 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: BOS → 1 | 126.37 | 52.4% | 0.884 | 7.3 | 17.31 | 0.81 | 0.972 | -13.94 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Lệnh chờ hết hạn sau (nến) → 8 | 120.42 | 51% | 0.767 | 8.06 | 14.94 | 0.683 | 0.869 | -12.28 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Elliott (/100) → 6 + Coin phải mạnh hơn BTC trong N ngày → 14 | 81.46 | 48.5% | 0.84 | 8.15 | 10 | 0.698 | 0.997 | -15.33 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 83.01 | 47.6% | 0.791 | 8.36 | 9.93 | 0.656 | 0.95 | -7.51 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.73 | 56.3% | 0.186 | 6.34 | 4.69 | 0.211 | 0.163 | -4.8 |  |

### Vòng 275 — ngẫu nhiên nhiều thông số · mốc: tổng 126.35R, win 52.7%, rủi ro tụt vốn 7.52R, lời÷rủi ro 16.80

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.85 | 56.7% | 0.19 | 6.09 | 4.9 | 0.222 | 0.159 | -10.92 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 28.87 | 56.7% | 0.184 | 6.33 | 4.56 | 0.209 | 0.159 | -9.9 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Khung lớn phải tăng (trend ≥) → 0.425 | 110.99 | 49% | 0.745 | 8.61 | 12.89 | 0.781 | 0.704 | -10.49 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + % chốt ở TP1 → 0.307 + Điểm vùng: MACD cắt lên Signal → 0.563 | 29.92 | 57.1% | 0.192 | 5.89 | 5.08 | 0.226 | 0.159 | -10.92 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: BOS → 1 | 126.16 | 52.4% | 0.858 | 7.84 | 16.09 | 0.726 | 1.016 | -10.68 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 1W → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 79.89 | 45.7% | 0.487 | 10.28 | 7.77 | 0.35 | 0.621 | -10.85 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Cộng điểm phân kỳ dương ẩn → 2.63 | 104.22 | 48.7% | 0.66 | 9.09 | 11.47 | 0.582 | 0.763 | -5.69 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 86.11 | 49% | 0.578 | 8.99 | 9.58 | 0.566 | 0.591 | -11.49 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: POC anchored → 2 | 85.46 | 52.7% | 0.763 | 7.11 | 12.02 | 0.522 | 0.958 | -11.77 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần SL (/100) → 9 + Điểm vùng: BOS → 1 + Trọng số phần R:R (/100) → 28 | 126.06 | 52.4% | 0.869 | 7.51 | 16.79 | 0.782 | 0.969 | -9.37 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Cộng thêm ngưỡng điểm khung 1D → 4 + Khung lớn phải tăng (trend ≥) → 0.375 | 116.04 | 50% | 0.774 | 8.16 | 14.22 | 0.695 | 0.859 | -12.04 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 70.71 | 38.2% | 0.282 | 19.18 | 3.69 | 0.295 | 0.269 | -7.9 |  |

### Vòng 274 — ngẫu nhiên nhiều thông số · mốc: tổng 125.12R, win 53.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 17.00

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: EMA 21 → 0.875 | 103.67 | 48.2% | 0.746 | 8.79 | 11.79 | 0.637 | 0.866 | -12.54 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Đệm SL riêng khung 1W (ATR) → 0.3 | 97.45 | 48.1% | 0.733 | 8.41 | 11.59 | 0.485 | 0.977 | -11.73 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Lệnh chờ hết hạn sau (nến) → 6 | 103.9 | 49.6% | 0.781 | 7.98 | 13.02 | 0.743 | 0.828 | -11.23 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Ngưỡng điểm vào kèo → 77 | 98.25 | 50.4% | 0.728 | 7.97 | 12.33 | 0.539 | 0.937 | -11.49 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần Trend (/100) → 19 + Coin phải mạnh hơn BTC trong N ngày → 14 | 89.77 | 49.2% | 0.761 | 7.97 | 11.26 | 0.648 | 0.899 | -17.15 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: POC volume profile cố định → 0.688 + Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 80.8 | 38.7% | 0.316 | 17.75 | 4.55 | 0.291 | 0.339 | -6.08 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 119.43 | 52.4% | 0.812 | 7.6 | 15.71 | 0.737 | 0.903 | -10.68 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + R:R tối thiểu riêng khung 1W → 2 | 105.22 | 51.4% | 0.711 | 7.93 | 13.27 | 0.618 | 0.809 | -11.72 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 29.49 | 39.1% | 0.321 | 10.96 | 2.69 | 0.284 | 0.363 | -6.57 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 107.16 | 51% | 0.729 | 8.25 | 12.99 | 0.741 | 0.715 | -10.45 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 1D (ATR) → 0.3 | 106.28 | 46.3% | 0.656 | 10.55 | 10.07 | 0.648 | 0.664 | -6.36 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → -1 | 96.7 | 47.8% | 0.722 | 8.61 | 11.23 | 0.485 | 0.951 | -10.41 |  |

### Vòng 273 — ngẫu nhiên nhiều thông số · mốc: tổng 125.12R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.91

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Số TP tối đa → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 20.38 | 63.4% | 0.219 | 5.58 | 3.65 | 0.208 | 0.232 | -6.86 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 32.16 | 58.6% | 0.205 | 5.87 | 5.48 | 0.279 | 0.133 | -9.24 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 3.5 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: EMA 21 → 0.875 | 105.87 | 44.9% | 0.67 | 10.31 | 10.27 | 0.659 | 0.68 | -7.38 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Mức RSI 30/70 → 0.875 | 128.32 | 52.2% | 0.807 | 8.14 | 15.76 | 0.701 | 0.942 | -10.68 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + SL tối đa (% Entry) → 0.35 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 77.17 | 45.6% | 0.482 | 10.18 | 7.58 | 0.347 | 0.618 | -12.21 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: EMA 50 → 0.75 + R:R tối thiểu riêng khung 1W → 2 | 21.18 | 36.1% | 0.255 | 11.99 | 1.77 | 0.125 | 0.462 | -7.25 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Trọng số phần R:R (/100) → 28 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: EMA 200 → 1 | 118.23 | 52.3% | 0.763 | 8.15 | 14.51 | 0.672 | 0.882 | -5.69 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cộng thêm ngưỡng điểm khung 1D → 7 | 121.43 | 51% | 0.826 | 7.89 | 15.39 | 0.649 | 1.032 | -10.54 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần Trend (/100) → 12 | 124.15 | 51% | 0.868 | 7.65 | 16.23 | 0.817 | 0.928 | -13.94 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 124.72 | 51.4% | 0.854 | 7.58 | 16.45 | 0.797 | 0.921 | -13.94 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Trọng số phần Divergence (/100) → 12 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần R:R (/100) → 33 | 117.56 | 51.4% | 0.805 | 7.79 | 15.09 | 0.719 | 0.904 | -9.37 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 20.92 | 54.7% | 0.179 | 6.38 | 3.28 | 0.239 | 0.115 | -9.46 |  |

### Vòng 272 — ngẫu nhiên nhiều thông số · mốc: tổng 125.12R, win 53.1%, rủi ro tụt vốn 7.37R, lời÷rủi ro 16.98

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trọng số phần R:R (/100) → 28 | 114.5 | 50.3% | 0.779 | 8.09 | 14.15 | 0.738 | 0.829 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Cộng điểm phân kỳ dương ẩn → 2.63 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Elliott (/100) → 6 | 33.13 | 58% | 0.211 | 5.67 | 5.84 | 0.255 | 0.168 | -9.89 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 92.48 | 46.3% | 0.571 | 9.19 | 10.06 | 0.547 | 0.595 | -11.99 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.563 | 173.37 | 38.6% | 0.588 | 18.44 | 9.4 | 0.462 | 0.721 | -14.37 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: HVN anchored → 0.313 | 79.88 | 46.6% | 0.776 | 8.67 | 9.21 | 0.655 | 0.925 | -7.51 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trọng số phần R:R (/100) → 28 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + % chốt ở TP1 → 0.307 | 104.68 | 50.7% | 0.717 | 8.38 | 12.49 | 0.781 | 0.644 | -11.43 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: MACD cắt lên Signal → 0.563 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 124.37 | 52.7% | 0.852 | 7.4 | 16.81 | 0.763 | 0.957 | -8.35 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: POC volume profile cố định → 0.813 | 58.26 | 39.2% | 0.246 | 17.97 | 3.24 | 0.183 | 0.303 | -4.78 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần Trend (/100) → 12 | 121.72 | 50% | 0.822 | 8.3 | 14.67 | 0.663 | 1.01 | -10.54 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: HVN cố định → 0.563 + R:R tối thiểu tới TP1 → 2.38 | 95.64 | 47.5% | 0.605 | 8.49 | 11.27 | 0.547 | 0.664 | -11.99 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Divergence (/100) → 12 + R:R tối thiểu tới TP1 → 2.38 + Điểm tối thiểu của vùng đặt SL → 2 | 99.92 | 47% | 0.609 | 8.58 | 11.65 | 0.575 | 0.642 | -13.03 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 + R:R tối thiểu riêng khung 1D → 2 | 100.74 | 46.8% | 0.589 | 9.5 | 10.6 | 0.616 | 0.564 | -9.62 |  |
