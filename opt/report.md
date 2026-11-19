# Tối ưu tự động (chạy liên tục) — vòng 778

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 8991 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 94.27R | 0.578 | 5.7R | 9.86R | 9.56 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 145 | 53.1% | 118.93R | 0.82 | 5.09R | 7.35R | 16.18 | 28 | 17.9% | -9.92R | -0.354 | 10.54R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.77R | 2 | 0% | -2.3R |
| 4H | 107 | 54.2% | 91.73R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 94.27R | 9.86R | 9.56 | 31 | 12.9% | -13R |
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

### Vòng 778 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.35R, lời÷rủi ro 16.18

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Biên mây Ichimoku → 1.35 + Xác nhận khung nhỏ (A2) → W | 95.24 | 39% | 0.375 | 16.21 | 5.88 | 0.339 | 0.408 | -4.02 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: BOS → 1 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 112.11 | 49.7% | 0.784 | 7.95 | 14.1 | 0.584 | 1.011 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 1W (ATR) → 0.3 | 107.82 | 46.3% | 0.666 | 9.74 | 11.07 | 0.6 | 0.734 | -12.11 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1W → 2 | 88.4 | 41.5% | 0.313 | 13.11 | 6.74 | 0.301 | 0.324 | -9.5 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 58.05 | 45.4% | 0.598 | 9.62 | 6.03 | 0.437 | 0.77 | -12.55 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần Momentum (/100) → 25 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 119.12 | 48.7% | 0.754 | 8.43 | 14.13 | 0.731 | 0.778 | -9.56 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Số TP tối đa → 2 + R:R tối thiểu riêng khung 4H → 2 | 117.63 | 40.8% | 0.369 | 12.31 | 9.56 | 0.337 | 0.396 | -9.29 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: POC anchored → 4 | 124.01 | 47.3% | 0.752 | 9.8 | 12.65 | 0.776 | 0.731 | -1.17 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: EMA 200 → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 70.49 | 46.4% | 0.629 | 8.96 | 7.87 | 0.445 | 0.835 | -4.43 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: EMA 200 → 1 | 139.96 | 43.8% | 0.596 | 11.73 | 11.93 | 0.626 | 0.565 | -12.27 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 65.1 | 43.1% | 0.597 | 9.66 | 6.74 | 0.373 | 0.843 | -7.7 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Cổng Dow → TẮT + R:R tối thiểu riêng khung 1D → 2 | 119.15 | 41.6% | 0.49 | 12.92 | 9.22 | 0.575 | 0.417 | -16.35 |  |

### Vòng 777 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.35R, lời÷rủi ro 16.18

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Mức RSI 30/70 → 1.13 | 117.88 | 47.6% | 0.71 | 9.79 | 12.04 | 0.677 | 0.741 | -4.3 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 76.71 | 47.2% | 0.71 | 8.32 | 9.22 | 0.474 | 0.975 | -5.45 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 112.37 | 50.7% | 0.791 | 7.49 | 15 | 0.646 | 0.949 | -9.92 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 70.97 | 47.6% | 0.689 | 8.8 | 8.06 | 0.421 | 0.997 | -10.7 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Break mây Ichimoku → 1 + Khung lớn phải tăng (trend ≥) → 0.425 | 96.53 | 49% | 0.666 | 8.52 | 11.33 | 0.443 | 0.885 | -9.22 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: EMA 50 → 1.13 | 101.58 | 49% | 0.71 | 8.38 | 12.12 | 0.475 | 0.977 | -9.57 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Fib sóng 4 → 0.938 | 116.73 | 52.4% | 0.805 | 7.38 | 15.82 | 0.621 | 1.008 | -9.92 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Elliott (/100) → 10 | 96.38 | 47.5% | 0.693 | 8.58 | 11.23 | 0.65 | 0.742 | -8.93 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Vùng RSI 45–55 → 0.875 + R:R tối thiểu riêng khung 1D → 2 | 107.2 | 45.4% | 0.616 | 9.01 | 11.9 | 0.614 | 0.618 | -7.23 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Số TP tối đa → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 88.58 | 44.9% | 0.603 | 9.84 | 9 | 0.448 | 0.783 | -8.13 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Trọng số phần Momentum (/100) → 21 + Trọng số phần R:R (/100) → 28 | 117.4 | 52.4% | 0.821 | 7.41 | 15.84 | 0.652 | 1.008 | -9.92 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: MACD cắt lên Signal → 0.563 | 114.61 | 51% | 0.79 | 7.83 | 14.64 | 0.523 | 1.077 | -9.79 |  |

### Vòng 776 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.35R, lời÷rủi ro 16.18

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 108.33 | 48.6% | 0.774 | 8.42 | 12.87 | 0.569 | 1.017 | -10.14 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 113.62 | 52.7% | 0.757 | 7.63 | 14.89 | 0.576 | 0.971 | -9.92 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 21 → 1.13 + Cộng điểm phân kỳ dương ẩn → 3 | 112.85 | 51.4% | 0.763 | 7.35 | 15.35 | 0.618 | 0.924 | -10.26 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu tới TP1 → 2.38 | 66.45 | 45.5% | 0.496 | 9.32 | 7.13 | 0.484 | 0.507 | -17.95 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trọng số phần Divergence (/100) → 12 + Khung lớn phải tăng (trend ≥) → 0.375 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 113.45 | 51.4% | 0.767 | 7.67 | 14.79 | 0.604 | 0.938 | -8.6 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 1D (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 120.08 | 44.7% | 0.671 | 10.83 | 11.09 | 0.757 | 0.595 | -4.27 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + SL tối đa (% Entry) → 0.425 | 119.88 | 47.3% | 0.727 | 8.97 | 13.36 | 0.697 | 0.759 | -11.54 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 71.68 | 49.2% | 0.588 | 9.05 | 7.92 | 0.642 | 0.526 | -16.19 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần Trend (/100) → 12 + Điểm vùng: HVN cố định → 0.438 | 116.13 | 48.4% | 0.749 | 8.3 | 13.99 | 0.574 | 0.946 | -10.95 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: BOS → 1 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 100.95 | 50.7% | 0.691 | 8.06 | 12.52 | 0.616 | 0.773 | -8.96 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + R:R tối thiểu riêng khung 1W → 2 | 67.48 | 45.3% | 0.577 | 10.01 | 6.74 | 0.434 | 0.717 | -5.68 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Break mây Ichimoku → 1 + Đệm SL riêng khung 1D (ATR) → 0.3 + Số TP tối đa → 2 | 110.93 | 41.5% | 0.555 | 12.7 | 8.73 | 0.61 | 0.509 | -5.42 |  |

### Vòng 775 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.16

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: EMA 200 → 3 | 108.41 | 50.7% | 0.743 | 7.97 | 13.6 | 0.521 | 0.964 | -10.57 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 75.24 | 46.3% | 0.697 | 8.48 | 8.87 | 0.474 | 0.946 | -5.45 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm tối thiểu của vùng đặt SL → 4 | 95.22 | 45.9% | 0.599 | 9.12 | 10.44 | 0.509 | 0.679 | -10.2 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: HVN anchored → 0.313 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 91.23 | 43.8% | 0.625 | 10.11 | 9.02 | 0.525 | 0.736 | -9.7 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 112.96 | 50.3% | 0.758 | 8.31 | 13.59 | 0.654 | 0.864 | -9.94 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Mức MACD → 1.13 | 107.37 | 50.3% | 0.73 | 8.03 | 13.37 | 0.572 | 0.915 | -10.5 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần SL (/100) → 9 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 117.16 | 45.7% | 0.714 | 9.95 | 11.77 | 0.77 | 0.664 | -5.43 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Mức RSI 30/70 → 0.875 | 110.83 | 49.1% | 0.664 | 9.74 | 11.38 | 0.488 | 0.874 | -7.34 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Cộng thêm ngưỡng điểm khung 4H → -1 | 117.18 | 52.8% | 0.814 | 7.42 | 15.79 | 0.621 | 1.03 | -9.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Vùng RSI 45–55 → 0.875 + R:R tối thiểu riêng khung 4H → 2 | 117.65 | 39.9% | 0.364 | 14.18 | 8.3 | 0.435 | 0.31 | -7.8 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: BOS → 3 | 18.28 | 57.7% | 0.141 | 6.51 | 2.81 | 0.15 | 0.131 | -9.77 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cổng Dow → CHẶT + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần R:R (/100) → 28 | 66.66 | 38.2% | 0.374 | 16.31 | 4.09 | 0.349 | 0.4 | -4.21 |  |

### Vòng 774 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.07

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Cộng thêm ngưỡng điểm khung 1D → 5 + Cộng điểm phân kỳ dương ẩn → 2.25 + Trọng số phần R:R (/100) → 33 | 87.85 | 50.4% | 0.751 | 7.63 | 11.51 | 0.553 | 0.982 | -16.39 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: Mức RSI 30/70 → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 129.04 | 48.2% | 0.768 | 9.57 | 13.48 | 0.757 | 0.778 | -1.17 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 117.71 | 52.4% | 0.801 | 7.54 | 15.61 | 0.625 | 1 | -10.03 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Cộng thêm ngưỡng điểm khung 1D → 3 | 114.26 | 51.4% | 0.783 | 7.77 | 14.71 | 0.592 | 0.99 | -9.92 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + R:R tối thiểu riêng khung 1W → 2 | 110.29 | 51.7% | 0.75 | 7.71 | 14.3 | 0.649 | 0.851 | -10.96 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + SL tối đa (% Entry) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 99.94 | 50.3% | 0.68 | 8.35 | 11.97 | 0.616 | 0.748 | -8.96 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: POC anchored → 4 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Xác nhận khung nhỏ (A2) → W | 103.2 | 39.2% | 0.378 | 16.77 | 6.15 | 0.398 | 0.36 | -0.77 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 100.41 | 51.5% | 0.761 | 7.51 | 13.37 | 0.608 | 0.939 | -9.56 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Số TP tối đa → 2 | 119.69 | 53.1% | 0.825 | 7.4 | 16.17 | 0.64 | 1.035 | -9.92 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + % chốt ở TP1 → 0.287 | 87.78 | 50.4% | 0.75 | 7.65 | 11.47 | 0.55 | 0.984 | -16.39 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Break mây Ichimoku → 3 | 126.47 | 48.6% | 0.715 | 8.85 | 14.29 | 0.746 | 0.677 | -10.25 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + SL tối đa (% Entry) → 0.425 + R:R tối thiểu tới TP1 → 2.38 + Số TP tối đa → 2 | 106.19 | 47% | 0.648 | 8.71 | 12.19 | 0.549 | 0.741 | -14.49 |  |

### Vòng 773 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.35R, lời÷rủi ro 16.18

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: HVN cố định → 0.438 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 122.41 | 49.4% | 0.775 | 8.3 | 14.75 | 0.723 | 0.835 | -10.49 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 104.72 | 50.6% | 0.663 | 8.45 | 12.39 | 0.647 | 0.68 | -10.73 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 5 | 118.73 | 52.7% | 0.813 | 7.22 | 16.44 | 0.625 | 1.03 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu riêng khung 1W → 2 + Cổng Dow → CHẶT | 68.42 | 49.2% | 0.58 | 8.98 | 7.62 | 0.257 | 0.843 | -10.47 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Đệm SL riêng khung 1D (ATR) → 0.3 | 114.71 | 47.2% | 0.704 | 9.83 | 11.67 | 0.677 | 0.729 | -6.61 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 141.13 | 37.8% | 0.493 | 19.35 | 7.29 | 0.325 | 0.665 | -7.92 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 | 110.74 | 52.1% | 0.758 | 7.49 | 14.79 | 0.649 | 0.868 | -10.96 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 119.06 | 47.8% | 0.739 | 8.55 | 13.93 | 0.68 | 0.806 | -9.39 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 118.93 | 53.1% | 0.82 | 7.35 | 16.18 | 0.635 | 1.03 | -9.92 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Divergence (/100) → 12 + Ngưỡng điểm vào kèo → 74 + Trọng số phần Elliott (/100) → 6 | 124.28 | 49.1% | 0.782 | 8.15 | 15.25 | 0.736 | 0.835 | -10.5 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Khung lớn phải tăng (trend ≥) → 0.375 | 83.73 | 46.9% | 0.644 | 9 | 9.3 | 0.434 | 0.855 | -10.49 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Số TP tối đa → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 117.84 | 51.4% | 0.818 | 7.44 | 15.84 | 0.652 | 1.009 | -13 |  |

### Vòng 772 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.25R, lời÷rủi ro 16.40

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + SL tối đa (% Entry) → 0.425 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Cộng điểm phân kỳ dương ẩn → 3 | 61.91 | 41.4% | 0.342 | 11.83 | 5.23 | 0.35 | 0.335 | -11.17 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Mức RSI 30/70 → 1.13 | 101.92 | 50.7% | 0.708 | 8.26 | 12.34 | 0.651 | 0.768 | -9.14 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần Trend (/100) → 19 | 114.69 | 51.4% | 0.775 | 7.87 | 14.57 | 0.592 | 0.979 | -8.9 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Lệnh chờ hết hạn sau (nến) → 8 | 117.59 | 51% | 0.749 | 7.76 | 15.15 | 0.609 | 0.906 | -11.51 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cổng Dow → TẮT + Điểm vùng: BOS → 1 + Điểm vùng: EMA 21 → 1.13 | 128.13 | 44.7% | 0.59 | 11.63 | 11.02 | 0.606 | 0.576 | -16.58 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Số TP tối đa → 2 + Điểm tối thiểu của vùng đặt SL → 2 | 72.35 | 47.2% | 0.67 | 8.86 | 8.17 | 0.48 | 0.882 | -5.45 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Mức RSI 30/70 → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 | 117.75 | 51.3% | 0.755 | 8.33 | 14.14 | 0.56 | 0.994 | -9.95 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Biên mây Ichimoku → 1.35 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 77.73 | 45.2% | 0.532 | 10.46 | 7.43 | 0.519 | 0.543 | -9.96 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: EMA 200 → 3 | 88.95 | 44.9% | 0.605 | 10.05 | 8.85 | 0.405 | 0.844 | -9.13 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Trọng số phần Elliott (/100) → 10 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 81.88 | 45.1% | 0.499 | 10.55 | 7.76 | 0.414 | 0.586 | -8.79 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: HVN cố định → 0.563 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 94.61 | 38.5% | 0.361 | 16.21 | 5.84 | 0.416 | 0.307 | -6.09 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Xác nhận khung nhỏ (A2) → W | 117.29 | 40.9% | 0.453 | 14.25 | 8.23 | 0.433 | 0.469 | -2.8 |  |

### Vòng 771 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.07

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 21 → 0.875 + Cổng Dow → TẮT | 28.67 | 52.8% | 0.146 | 7.96 | 3.6 | 0.233 | 0.06 | -14.45 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Mức RSI 30/70 → 0.875 | 122.02 | 43.9% | 0.496 | 10.74 | 11.36 | 0.485 | 0.506 | -15.69 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: EMA 21 → 1.13 | 114.47 | 51.6% | 0.739 | 7.79 | 14.69 | 0.558 | 0.947 | -10.26 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Biên mây Ichimoku → 1.05 | 85.68 | 48.5% | 0.649 | 8.71 | 9.84 | 0.577 | 0.721 | -18.88 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: EMA 50 → 0.75 | 30 | 59.1% | 0.195 | 5.39 | 5.57 | 0.205 | 0.185 | -9.5 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm tối thiểu của vùng đặt SL → 2 | 78.75 | 46.5% | 0.61 | 10.24 | 7.69 | 0.442 | 0.804 | -16.11 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số TP tối đa → 2 | 31.33 | 58.9% | 0.198 | 5.59 | 5.6 | 0.214 | 0.184 | -9.5 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 110.21 | 49.7% | 0.771 | 8.01 | 13.76 | 0.603 | 0.961 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: POC anchored → 2 + Trọng số phần Entry (/100) → 28 + Trọng số phần SL (/100) → 9 | 103.02 | 49.7% | 0.673 | 8.55 | 12.05 | 0.527 | 0.83 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Trọng số phần Divergence (/100) → 9 | 116.86 | 51.3% | 0.74 | 8.16 | 14.32 | 0.607 | 0.903 | -4.93 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần SL (/100) → 7 | 123.18 | 50% | 0.76 | 8.28 | 14.88 | 0.73 | 0.796 | -10.5 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Xác nhận khung nhỏ (A2) → W + Số TP tối đa → 2 | 108.01 | 39.2% | 0.424 | 15.53 | 6.95 | 0.386 | 0.457 | -2.5 |  |

### Vòng 770 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + R:R tối thiểu riêng khung 1W → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 106.99 | 50% | 0.753 | 7.76 | 13.79 | 0.614 | 0.893 | -14.21 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 68.75 | 48.2% | 0.625 | 8.6 | 7.99 | 0.459 | 0.832 | -16.02 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: BOS → 1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 118.93 | 53.1% | 0.82 | 7.44 | 15.99 | 0.635 | 1.03 | -9.92 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Trọng số phần Trend (/100) → 12 + R:R tối thiểu riêng khung 1W → 2 | 108.01 | 50.7% | 0.74 | 7.83 | 13.79 | 0.631 | 0.848 | -10.96 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 115.51 | 53% | 0.775 | 7.53 | 15.34 | 0.6 | 0.978 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 122.42 | 45.1% | 0.547 | 10.58 | 11.57 | 0.579 | 0.515 | -12.87 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Cổng Dow → TẮT + Điểm vùng: POC anchored → 4 + Trọng số phần Entry (/100) → 28 | 123.37 | 43% | 0.617 | 11.82 | 10.44 | 0.597 | 0.637 | -10.43 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: EMA 21 → 0.875 + % chốt ở TP1 → 0.307 + Điểm vùng: Fib sóng 4 → 0.938 | 117.08 | 51% | 0.807 | 7.72 | 15.17 | 0.679 | 0.941 | -7.33 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 119 | 53.1% | 0.821 | 7.41 | 16.06 | 0.637 | 1.029 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Cổng Dow → CHẶT | 107.08 | 47.5% | 0.585 | 9.01 | 11.88 | 0.52 | 0.643 | -13.11 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trọng số phần SL (/100) → 9 | 88.02 | 48.1% | 0.662 | 8.6 | 10.23 | 0.578 | 0.747 | -10.25 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: EMA 200 → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Cộng thêm ngưỡng điểm khung 1D → 5 | 88.22 | 51.9% | 0.684 | 8.24 | 10.71 | 0.472 | 0.892 | -10.11 |  |

### Vòng 769 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.07

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Số TP tối đa → 2 + Trọng số phần Divergence (/100) → 12 + Cộng thêm ngưỡng điểm khung 1W → -1 | 116.43 | 52.4% | 0.803 | 7.62 | 15.28 | 0.609 | 1.016 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 112.06 | 52.4% | 0.784 | 7.17 | 15.63 | 0.656 | 0.924 | -10.75 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần Momentum (/100) → 21 + Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 | 111.31 | 42.9% | 0.568 | 11.79 | 9.44 | 0.589 | 0.551 | -8.34 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.51 | 46.2% | 0.607 | 10.86 | 9.44 | 0.605 | 0.608 | -4.11 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 50 → 1.13 | 94.38 | 38.6% | 0.376 | 16.87 | 5.59 | 0.349 | 0.4 | -1.32 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cộng thêm ngưỡng điểm khung 1W → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 32.73 | 58.9% | 0.207 | 6.01 | 5.45 | 0.206 | 0.208 | -9.47 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + % chốt ở TP1 → 0.287 | 106.64 | 51.4% | 0.741 | 7.73 | 13.8 | 0.61 | 0.871 | -10.76 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 4H → 2 + Xác nhận khung nhỏ (A2) → W + Trọng số phần Divergence (/100) → 12 | 71.3 | 36.4% | 0.289 | 20.88 | 3.41 | 0.315 | 0.268 | -6.18 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cổng Dow → CHẶT | 59.27 | 51.2% | 0.723 | 6.85 | 8.65 | 0.283 | 1.122 | -6.87 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 118.93 | 53.1% | 0.82 | 7.4 | 16.07 | 0.635 | 1.03 | -9.92 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 113.35 | 48.4% | 0.722 | 8.56 | 13.24 | 0.575 | 0.878 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Entry (/100) → 28 + Điểm vùng: EMA 50 → 1.13 | 109.96 | 46.1% | 0.658 | 10.55 | 10.42 | 0.577 | 0.735 | -3.29 |  |
