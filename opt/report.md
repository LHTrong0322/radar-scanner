# Tối ưu tự động (chạy liên tục) — vòng 607

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 6939 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.3% | 93.89R | 0.58 | 5.74R | 9.63R | 9.75 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 143 | 53.1% | 113.69R | 0.795 | 6.15R | 7.57R | 15.02 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 105 | 54.3% | 86.53R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.3% | 93.89R | 9.63R | 9.75 | 32 | 12.5% | -14.03R |
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

### Vòng 607 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.57R, lời÷rủi ro 15.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Trọng số phần Divergence (/100) → 12 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 92.82 | 49.7% | 0.615 | 8.97 | 10.35 | 0.546 | 0.688 | -7.85 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Ngưỡng điểm vào kèo → 74 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Cộng thêm ngưỡng điểm khung 4H → 2 | 117.58 | 48.7% | 0.764 | 8.58 | 13.7 | 0.743 | 0.788 | -10.24 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Cộng thêm ngưỡng điểm khung 1D → 3 | 111.23 | 49% | 0.727 | 8.77 | 12.68 | 0.57 | 0.908 | -10.69 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 147.81 | 38.7% | 0.515 | 18.58 | 7.96 | 0.374 | 0.657 | -14.46 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Biên mây Ichimoku → 1.35 | 27.02 | 57.1% | 0.175 | 6.45 | 4.19 | 0.217 | 0.135 | -10.36 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 150.27 | 38.9% | 0.522 | 18.38 | 8.18 | 0.352 | 0.692 | -14.81 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 109.04 | 51.4% | 0.757 | 7.71 | 14.14 | 0.662 | 0.856 | -10 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Entry (/100) → 33 | 124.99 | 44.2% | 0.634 | 11.01 | 11.35 | 0.657 | 0.614 | -20.31 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần R:R (/100) → 28 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: HVN anchored → 0.188 | 97.94 | 49.4% | 0.628 | 9.19 | 10.66 | 0.569 | 0.699 | -9.82 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 95.8 | 49% | 0.634 | 8.75 | 10.95 | 0.429 | 0.855 | -8.49 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần R:R (/100) → 28 + SL tối đa (% Entry) → 0.425 | 121.42 | 44.5% | 0.53 | 11.12 | 10.92 | 0.601 | 0.459 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 23.73 | 65.2% | 0.258 | 4.89 | 4.85 | 0.251 | 0.266 | -6.86 |  |

### Vòng 606 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.58R, lời÷rủi ro 15.00

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + SL tối đa (% Entry) → 0.425 | 81.61 | 50% | 0.704 | 8.23 | 9.92 | 0.552 | 0.884 | -16.13 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Cộng thêm ngưỡng điểm khung 4H → 2 | 91.96 | 46.2% | 0.59 | 9.36 | 9.82 | 0.53 | 0.646 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 4.97 | 32.3% | 0.08 | 15.5 | 0.32 | -0.082 | 0.337 | -6.6 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Coin phải mạnh hơn BTC trong N ngày → 14 | 82.94 | 47.7% | 0.775 | 8.08 | 10.26 | 0.579 | 1.016 | -15.62 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Coin phải mạnh hơn BTC trong N ngày → 14 + Lệnh chờ hết hạn sau (nến) → 8 | 89.75 | 50.4% | 0.707 | 7.9 | 11.36 | 0.576 | 0.863 | -17.72 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Khung lớn phải tăng (trend ≥) → 0.425 + Trọng số phần Elliott (/100) → 6 | 98.65 | 49.6% | 0.7 | 8.12 | 12.15 | 0.587 | 0.814 | -10.73 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 98.69 | 50% | 0.676 | 8.37 | 11.79 | 0.607 | 0.743 | -10.7 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 99.29 | 51.7% | 0.694 | 8.28 | 11.99 | 0.634 | 0.763 | -8.88 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 2.25 | 73.46 | 44.6% | 0.607 | 10.05 | 7.31 | 0.267 | 0.9 | -12.56 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Số TP tối đa → 2 + Trọng số phần Entry (/100) → 28 | 113.12 | 52.1% | 0.775 | 7.84 | 14.43 | 0.629 | 0.942 | -9.66 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: POC volume profile cố định → 0.688 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 111.86 | 49.6% | 0.817 | 8.38 | 13.35 | 0.614 | 1.055 | -7.59 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 105.93 | 51.3% | 0.706 | 8.18 | 12.95 | 0.554 | 0.885 | -9.66 |  |

### Vòng 605 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.6R, lời÷rủi ro 14.96

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 29.49 | 57.9% | 0.185 | 6 | 4.92 | 0.225 | 0.147 | -11.38 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần Elliott (/100) → 10 + Đệm SL riêng khung 4H (ATR) → 0.3 | 135.21 | 36.6% | 0.463 | 18.78 | 7.2 | 0.373 | 0.555 | -11.27 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: HVN anchored → 0.313 | 108.11 | 47% | 0.659 | 10.23 | 10.57 | 0.675 | 0.645 | -7.22 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 110.4 | 50% | 0.756 | 8 | 13.8 | 0.672 | 0.838 | -10 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Divergence (/100) → 9 | 110.87 | 51.7% | 0.765 | 7.74 | 14.32 | 0.641 | 0.9 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 111.93 | 52.4% | 0.772 | 7.67 | 14.59 | 0.614 | 0.956 | -8.34 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm tối thiểu của vùng đặt SL → 2 | 107.54 | 52.4% | 0.732 | 8 | 13.44 | 0.635 | 0.838 | -9.66 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Ngưỡng điểm vào kèo → 74 | 95.57 | 49% | 0.668 | 8.55 | 11.18 | 0.629 | 0.712 | -11.93 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Break mây Ichimoku → 3 | 96.21 | 48.1% | 0.617 | 9.4 | 10.24 | 0.519 | 0.725 | -9.4 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần R:R (/100) → 33 | 103.94 | 41.2% | 0.397 | 13.1 | 7.93 | 0.514 | 0.273 | -13.56 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Mức RSI 30/70 → 0.875 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Break mây Ichimoku → 1 | 116.99 | 39% | 0.397 | 15.97 | 7.33 | 0.418 | 0.375 | -3.28 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 71.47 | 47.2% | 0.674 | 8.73 | 8.19 | 0.473 | 0.908 | -6.48 |  |

### Vòng 604 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.57R, lời÷rủi ro 15.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Khung lớn phải tăng (trend ≥) → 0.425 | 89.25 | 49.6% | 0.763 | 8.1 | 11.02 | 0.442 | 1.112 | -9.83 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Khung lớn phải tăng (trend ≥) → 0.375 + Cộng thêm ngưỡng điểm khung 1D → 3 | 84.5 | 45.5% | 0.542 | 9.26 | 9.13 | 0.467 | 0.611 | -11.23 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 120.44 | 35.3% | 0.398 | 21.67 | 5.56 | 0.26 | 0.531 | -13.29 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Entry (/100) → 33 + Điểm vùng: POC anchored → 4 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 126.58 | 50.3% | 0.796 | 8.44 | 15 | 0.799 | 0.793 | -8.3 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Divergence (/100) → 12 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Mức RSI 30/70 → 1.13 | 100.84 | 40.2% | 0.33 | 13.23 | 7.62 | 0.315 | 0.342 | -12.49 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 106.24 | 52.4% | 0.723 | 7.77 | 13.67 | 0.565 | 0.906 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Số TP tối đa → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 101.17 | 47.7% | 0.67 | 9.63 | 10.51 | 0.465 | 0.913 | -10.34 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Cổng Dow → TẮT | 104.63 | 42.8% | 0.487 | 13.12 | 7.97 | 0.43 | 0.546 | -18.2 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 200 → 3 | 102.06 | 47.1% | 0.667 | 9.29 | 10.99 | 0.58 | 0.763 | -8.89 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + R:R tối thiểu riêng khung 1D → 2 + Xác nhận khung nhỏ (A2) → W | 69.01 | 36.7% | 0.266 | 18.72 | 3.69 | 0.27 | 0.264 | -4.76 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm tối thiểu của vùng đặt SL → 2 + Ngưỡng điểm vào kèo → 77 | 106.71 | 51% | 0.746 | 7.93 | 13.46 | 0.646 | 0.854 | -9.66 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Đệm SL riêng khung 4H (ATR) → 0.3 | 150.55 | 38.7% | 0.534 | 18.2 | 8.27 | 0.35 | 0.717 | -13.4 |  |

### Vòng 603 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.51R, lời÷rủi ro 15.14

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Số TP tối đa → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 110.53 | 52.1% | 0.79 | 7.93 | 13.94 | 0.604 | 1.004 | -10.95 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 87.38 | 45.3% | 0.59 | 9.78 | 8.93 | 0.444 | 0.753 | -3.98 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 21 → 1.13 | 97.87 | 50.7% | 0.661 | 8.38 | 11.68 | 0.624 | 0.703 | -11.09 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 112.22 | 52.4% | 0.785 | 7.59 | 14.79 | 0.635 | 0.96 | -9.66 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Trọng số phần Momentum (/100) → 21 | 100.25 | 52.1% | 0.706 | 8.24 | 12.17 | 0.634 | 0.789 | -8.88 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 83.86 | 45.2% | 0.534 | 9.76 | 8.59 | 0.531 | 0.537 | -11.23 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: MACD cắt lên Signal → 0.438 | 79.9 | 43.6% | 0.49 | 12.25 | 6.52 | 0.38 | 0.63 | -6.89 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + R:R tối thiểu riêng khung 1D → 2 | 103.1 | 45.7% | 0.596 | 9.39 | 10.98 | 0.591 | 0.6 | -6.9 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + % chốt ở TP1 → 0.307 | 112.16 | 51.6% | 0.724 | 8.07 | 13.9 | 0.608 | 0.872 | -4.69 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: EMA 200 → 1 + Trọng số phần Elliott (/100) → 10 | 63.78 | 45.5% | 0.58 | 9.43 | 6.76 | 0.444 | 0.737 | -2.99 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Số TP tối đa → 2 + R:R tối thiểu riêng khung 1W → 2 | 96.45 | 52.1% | 0.67 | 7.97 | 12.1 | 0.694 | 0.646 | -10.27 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 108.84 | 46.3% | 0.664 | 10.4 | 10.47 | 0.663 | 0.665 | -6.27 |  |

### Vòng 602 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.22

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Mức MACD → 1.13 | 107.58 | 50% | 0.747 | 8.04 | 13.38 | 0.575 | 0.95 | -9.66 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Đệm SL riêng khung 4H (ATR) → 0.3 | 155.9 | 37.8% | 0.53 | 18.67 | 8.35 | 0.361 | 0.711 | -10.05 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 72.43 | 46.5% | 0.561 | 9.64 | 7.51 | 0.493 | 0.635 | -8.41 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Trọng số phần Elliott (/100) → 10 | 113.06 | 52.1% | 0.796 | 7.38 | 15.32 | 0.645 | 0.97 | -9.66 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 70.01 | 45.7% | 0.543 | 9.8 | 7.14 | 0.54 | 0.546 | -8.67 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 99.89 | 41% | 0.512 | 12.99 | 7.69 | 0.373 | 0.665 | -22.15 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: HVN cố định → 0.438 | 94.31 | 50.8% | 0.714 | 7.87 | 11.98 | 0.587 | 0.867 | -8.27 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 109.73 | 50.3% | 0.746 | 7.94 | 13.82 | 0.649 | 0.851 | -8.17 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Khung lớn phải tăng (trend ≥) → 0.425 | 108.28 | 52.6% | 0.79 | 7.3 | 14.83 | 0.59 | 1.012 | -9.69 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: MACD cắt lên Signal → 0.563 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Break mây Ichimoku → 1 | 100.27 | 49.3% | 0.706 | 8.38 | 11.97 | 0.536 | 0.902 | -9.2 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Divergence (/100) → 9 | 90.28 | 44.9% | 0.541 | 11.5 | 7.85 | 0.577 | 0.508 | -5.46 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: POC anchored → 2 | 91.24 | 43.9% | 0.534 | 10.17 | 8.97 | 0.558 | 0.512 | -5.86 |  |

### Vòng 601 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.42R, lời÷rủi ro 15.32

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Lệnh chờ hết hạn sau (nến) → 6 | 91.14 | 50% | 0.712 | 7.84 | 11.63 | 0.552 | 0.905 | -8.3 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: BOS → 3 | 101.62 | 47.9% | 0.716 | 8.9 | 11.42 | 0.714 | 0.717 | -8.85 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần R:R (/100) → 33 | 102.71 | 51.7% | 0.708 | 7.87 | 13.05 | 0.589 | 0.84 | -11.78 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: EMA 50 → 1.13 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Mức MACD → 0.875 | 111.6 | 51.7% | 0.759 | 8.28 | 13.48 | 0.62 | 0.93 | -8.64 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần SL (/100) → 7 | 38.01 | 40.9% | 0.432 | 10.09 | 3.77 | 0.372 | 0.504 | -8.58 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần SL (/100) → 9 | 78.42 | 45.1% | 0.484 | 10.85 | 7.23 | 0.4 | 0.566 | -9.82 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: Mức RSI 30/70 → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 5 | 114.52 | 51.3% | 0.725 | 8.33 | 13.75 | 0.571 | 0.914 | -9.66 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần Elliott (/100) → 10 + Trọng số phần Divergence (/100) → 12 + Số TP tối đa → 2 | 112.05 | 51.7% | 0.784 | 7.89 | 14.2 | 0.645 | 0.941 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 117.58 | 48.7% | 0.763 | 8.56 | 13.74 | 0.736 | 0.797 | -9.22 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cộng điểm phân kỳ dương ẩn → 2.25 | 113.71 | 51.3% | 0.72 | 8.76 | 12.98 | 0.561 | 0.914 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: BOS → 3 | 95.97 | 50.7% | 0.657 | 8.23 | 11.66 | 0.644 | 0.672 | -13.81 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần Elliott (/100) → 10 | 96.91 | 51% | 0.678 | 8.22 | 11.79 | 0.639 | 0.722 | -8.84 |  |

### Vòng 600 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.59R, lời÷rủi ro 14.98

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: EMA 50 → 1.13 | 109.33 | 50.7% | 0.759 | 7.87 | 13.89 | 0.597 | 0.951 | -8.64 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + R:R tối thiểu tới TP1 → 2.38 | 91.63 | 46.8% | 0.587 | 8.77 | 10.45 | 0.5 | 0.671 | -11.23 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 50 → 0.75 | 110.22 | 52.8% | 0.776 | 7.57 | 14.56 | 0.621 | 0.945 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 95.84 | 50.8% | 0.786 | 7.97 | 12.03 | 0.553 | 1.034 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 121.94 | 50% | 0.792 | 8.52 | 14.31 | 0.757 | 0.834 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Cộng điểm phân kỳ dương ẩn → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 | 101.78 | 48.8% | 0.628 | 9.39 | 10.84 | 0.496 | 0.781 | -9.4 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 1W (ATR) → 0.3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 12.4 | 49.4% | 0.08 | 10.18 | 1.22 | 0.121 | 0.047 | -14.11 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Trọng số phần Trend (/100) → 19 + Trọng số phần R:R (/100) → 33 | 101.29 | 49.7% | 0.699 | 8.23 | 12.31 | 0.512 | 0.905 | -9.62 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 89.52 | 43.2% | 0.578 | 11.66 | 7.68 | 0.51 | 0.633 | -6.38 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 82.48 | 40.4% | 0.406 | 13.07 | 6.31 | 0.427 | 0.381 | -13.46 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 + Số TP tối đa → 2 | 79.7 | 43.2% | 0.415 | 12.07 | 6.6 | 0.51 | 0.314 | -16.33 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Cộng thêm ngưỡng điểm khung 1W → 2 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Biên mây Ichimoku → 1.05 | 85.91 | 50.4% | 0.734 | 8.2 | 10.48 | 0.552 | 0.927 | -10.63 |  |

### Vòng 599 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 15.24

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + R:R tối thiểu riêng khung 1W → 2 | 98.84 | 50.3% | 0.691 | 8.3 | 11.91 | 0.582 | 0.802 | -10.69 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Elliott (/100) → 10 | 118.93 | 49.3% | 0.782 | 8.4 | 14.16 | 0.785 | 0.78 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: EMA 200 → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 92.88 | 47.1% | 0.599 | 9.24 | 10.05 | 0.45 | 0.763 | -10.47 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Cổng Dow → TẮT + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 121.93 | 42.4% | 0.528 | 13.15 | 9.27 | 0.512 | 0.545 | -13.65 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Break mây Ichimoku → 3 | 99.87 | 47.8% | 0.628 | 9.46 | 10.56 | 0.498 | 0.778 | -8.38 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Cộng điểm phân kỳ dương ẩn → 2.25 + R:R tối thiểu tới TP1 → 2.38 | 91.69 | 46.8% | 0.588 | 8.95 | 10.24 | 0.504 | 0.668 | -11.23 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: EMA 50 → 1.13 | 77.15 | 48.4% | 0.603 | 9.51 | 8.11 | 0.452 | 0.79 | -16.03 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: POC volume profile cố định → 0.688 | 113.07 | 50.7% | 0.774 | 8.14 | 13.89 | 0.678 | 0.873 | -11.02 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Momentum (/100) → 21 | 111.78 | 52.1% | 0.766 | 7.89 | 14.17 | 0.635 | 0.912 | -9.66 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng điểm phân kỳ dương ẩn → 2.25 + Trọng số phần SL (/100) → 9 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 95.33 | 50.3% | 0.667 | 8.42 | 11.32 | 0.616 | 0.725 | -8.7 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: HVN cố định → 0.563 + Cộng thêm ngưỡng điểm khung 4H → -1 | 112.57 | 52.8% | 0.782 | 7.49 | 15.03 | 0.614 | 0.98 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Divergence (/100) → 12 | 28.99 | 58.3% | 0.186 | 5.99 | 4.84 | 0.219 | 0.153 | -11.38 |  |

### Vòng 598 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.51R, lời÷rủi ro 15.14

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần SL (/100) → 7 | 38.72 | 41.2% | 0.456 | 9.6 | 4.03 | 0.357 | 0.578 | -8.58 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + R:R tối thiểu tới TP1 → 2.63 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: POC volume profile cố định → 0.688 | 95.2 | 50% | 0.768 | 7.98 | 11.93 | 0.534 | 1.017 | -10.63 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 110.47 | 52.5% | 0.795 | 7.48 | 14.77 | 0.621 | 0.993 | -10.95 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 22.76 | 41.7% | 0.474 | 7.92 | 2.87 | 0.29 | 0.643 | -2.78 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: POC volume profile cố định → 0.688 + Cộng thêm ngưỡng điểm khung 1W → 2 | 110.96 | 48.4% | 0.689 | 8.71 | 12.74 | 0.591 | 0.808 | -6.74 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Trọng số phần Momentum (/100) → 25 | 111.97 | 52.1% | 0.789 | 7.33 | 15.28 | 0.64 | 0.96 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 96.48 | 51.4% | 0.661 | 8.42 | 11.46 | 0.637 | 0.688 | -10.86 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Ngưỡng điểm vào kèo → 74 | 110.11 | 51.4% | 0.754 | 7.74 | 14.23 | 0.593 | 0.939 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: POC anchored → 2 | 99.19 | 49.7% | 0.666 | 8.22 | 12.07 | 0.551 | 0.788 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Cộng điểm phân kỳ dương ẩn → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 91.46 | 47% | 0.683 | 9.09 | 10.06 | 0.436 | 0.901 | -10.7 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Mức MACD → 1.13 | 104.29 | 49.7% | 0.7 | 8.25 | 12.64 | 0.602 | 0.804 | -12.81 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Trọng số phần Divergence (/100) → 9 + Coin phải mạnh hơn BTC trong N ngày → 14 | 82.62 | 50.4% | 0.718 | 8.04 | 10.28 | 0.552 | 0.92 | -16.13 |  |
