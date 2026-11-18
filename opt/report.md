# Tối ưu tự động (chạy liên tục) — vòng 666

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 7647 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.3% | 93.53R | 0.577 | 5.74R | 9.95R | 9.40 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 144 | 53.5% | 118.38R | 0.822 | 5.09R | 7.47R | 15.85 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 106 | 54.7% | 91.22R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.3% | 93.53R | 9.95R | 9.40 | 32 | 12.5% | -14.03R |
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

### Vòng 666 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.85

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 78.13 | 47.6% | 0.62 | 9.41 | 8.3 | 0.526 | 0.717 | -8.14 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: Break mây Ichimoku → 1 | 70.6 | 45.5% | 0.642 | 9.33 | 7.57 | 0.432 | 0.876 | -6.08 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib sóng 4 → 0.938 | 105.06 | 38.9% | 0.409 | 15.72 | 6.68 | 0.361 | 0.454 | -3.74 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Ngưỡng điểm vào kèo → 74 + Xác nhận khung nhỏ (A2) → W | 103.77 | 38.7% | 0.405 | 15.79 | 6.57 | 0.388 | 0.421 | -3.74 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 95.58 | 45.8% | 0.673 | 9.87 | 9.68 | 0.499 | 0.816 | -11.83 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Trọng số phần Elliott (/100) → 10 | 114.22 | 51% | 0.799 | 7.92 | 14.42 | 0.602 | 1.028 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cộng thêm ngưỡng điểm khung 4H → -1 | 112.27 | 51.7% | 0.764 | 7.88 | 14.25 | 0.575 | 0.983 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Cộng thêm ngưỡng điểm khung 4H → 2 | 115.05 | 51.7% | 0.805 | 7.67 | 15 | 0.686 | 0.935 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Cổng Dow → TẮT | 127.86 | 43.9% | 0.624 | 11.49 | 11.13 | 0.532 | 0.715 | -19.26 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 115.61 | 52.4% | 0.797 | 7.72 | 14.98 | 0.591 | 1.037 | -9.66 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: EMA 200 → 1 + Xác nhận khung nhỏ (A2) → W | 102.88 | 38.4% | 0.373 | 16.97 | 6.06 | 0.362 | 0.383 | -5.06 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: BOS → 3 + SL tối đa (% Entry) → 0.425 | 106.85 | 52.1% | 0.732 | 7.89 | 13.54 | 0.589 | 0.887 | -11.78 |  |

### Vòng 665 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.42R, lời÷rủi ro 15.95

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Break mây Ichimoku → 1 | 106.64 | 50.3% | 0.725 | 8.19 | 13.02 | 0.554 | 0.914 | -11.02 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: EMA 50 → 0.75 | 7.22 | 47.5% | 0.052 | 11.73 | 0.62 | 0.074 | 0.022 | -15.2 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 75.44 | 50% | 0.629 | 8.15 | 9.26 | 0.633 | 0.624 | -15.75 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Divergence (/100) → 9 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 79.2 | 47.3% | 0.614 | 8.72 | 9.08 | 0.53 | 0.697 | -10.2 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Cộng thêm ngưỡng điểm khung 1D → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 75.7 | 47.2% | 0.701 | 8.5 | 8.91 | 0.473 | 0.956 | -6.48 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Fib sóng 4 → 1.56 | 75.44 | 47% | 0.571 | 9.72 | 7.76 | 0.431 | 0.73 | -7.38 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Đệm SL riêng khung 1D (ATR) → 0.3 | 117.43 | 47.9% | 0.703 | 10.09 | 11.64 | 0.676 | 0.728 | -6.35 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + R:R tối thiểu riêng khung 4H → 2 | 118.34 | 41.9% | 0.378 | 12.31 | 9.61 | 0.332 | 0.416 | -9.27 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Đệm SL riêng khung 4H (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Fib sóng 4 → 1.56 | 87.5 | 34.2% | 0.384 | 21.14 | 4.14 | 0.224 | 0.552 | -12.54 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng thêm ngưỡng điểm khung 4H → 2 | 83.78 | 37% | 0.345 | 16.69 | 5.02 | 0.339 | 0.35 | -3.11 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: EMA 200 → 1 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 101.05 | 47.2% | 0.62 | 9.61 | 10.52 | 0.467 | 0.786 | -5.61 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần SL (/100) → 9 | 30.04 | 58% | 0.191 | 5.67 | 5.3 | 0.219 | 0.165 | -11.38 |  |

### Vòng 664 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.28R, lời÷rủi ro 16.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1W (ATR) → 0.3 | 107.86 | 47.2% | 0.76 | 8.66 | 12.45 | 0.557 | 0.957 | -10.7 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Ngưỡng điểm vào kèo → 74 | 110.36 | 48.2% | 0.783 | 8.45 | 13.06 | 0.573 | 1.035 | -8.91 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: HVN cố định → 0.563 | 29.51 | 58.1% | 0.184 | 5.89 | 5.01 | 0.219 | 0.152 | -10.63 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: POC volume profile cố định → 0.813 + Ngưỡng điểm vào kèo → 74 | 116.54 | 52% | 0.787 | 7.6 | 15.33 | 0.608 | 0.993 | -8.64 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 99.79 | 50% | 0.648 | 9.2 | 10.85 | 0.59 | 0.711 | -6.1 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Mức MACD → 0.875 | 101.87 | 50.3% | 0.675 | 8.64 | 11.79 | 0.546 | 0.812 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Cộng thêm ngưỡng điểm khung 4H → 2 + Ngưỡng điểm vào kèo → 77 | 112.32 | 50.4% | 0.797 | 8.1 | 13.87 | 0.703 | 0.9 | -8.84 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Biên mây Ichimoku → 1.05 + R:R tối thiểu tới TP1 → 2.63 | 91.82 | 49.6% | 0.772 | 8.16 | 11.25 | 0.534 | 1.013 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Trọng số phần Momentum (/100) → 25 | 113.89 | 51.4% | 0.791 | 7.75 | 14.7 | 0.596 | 1.015 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: EMA 21 → 1.13 | 112.76 | 52.1% | 0.772 | 7.46 | 15.12 | 0.617 | 0.95 | -10 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: MACD cắt lên Signal → 0.438 + Cộng thêm ngưỡng điểm khung 1W → -1 | 109.88 | 50.3% | 0.709 | 9.04 | 12.15 | 0.49 | 0.967 | -7.08 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Trọng số phần Divergence (/100) → 9 + SL tối đa (% Entry) → 0.425 + R:R tối thiểu tới TP1 → 2.63 | 89.99 | 49.2% | 0.75 | 8.49 | 10.6 | 0.52 | 0.98 | -10.63 |  |

### Vòng 663 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.25R, lời÷rủi ro 16.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 110.88 | 38.9% | 0.418 | 15.99 | 6.93 | 0.383 | 0.452 | -4.85 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 | 24.7 | 48.3% | 0.078 | 10.04 | 2.46 | 0.115 | 0.052 | -15.72 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Cộng thêm ngưỡng điểm khung 1W → 2 | 114.37 | 51% | 0.789 | 7.77 | 14.72 | 0.597 | 1.006 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: EMA 200 → 3 + Trọng số phần Elliott (/100) → 10 + SL tối đa (% Entry) → 0.425 | 104.28 | 50% | 0.724 | 8.25 | 12.64 | 0.546 | 0.908 | -9.62 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Divergence (/100) → 12 + R:R tối thiểu riêng khung 1D → 2 | 108.3 | 48.5% | 0.649 | 8.41 | 12.88 | 0.658 | 0.64 | -10.99 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Coin phải mạnh hơn BTC trong N ngày → 14 | 67.23 | 48.9% | 0.764 | 7.8 | 8.62 | 0.502 | 1.051 | -12.95 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: POC volume profile cố định → 0.813 | 113.44 | 50.7% | 0.788 | 7.77 | 14.6 | 0.527 | 1.063 | -8.5 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: HVN cố định → 0.563 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần SL (/100) → 7 | 72.08 | 46.8% | 0.572 | 9.2 | 7.83 | 0.431 | 0.723 | -12.05 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Trọng số phần Divergence (/100) → 12 + Điểm tối thiểu của vùng đặt SL → 4 | 115.82 | 52.1% | 0.793 | 7.44 | 15.57 | 0.63 | 0.975 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần SL (/100) → 9 + Cộng thêm ngưỡng điểm khung 4H → 2 | 96.6 | 48.6% | 0.7 | 8.4 | 11.5 | 0.515 | 0.901 | -11.51 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Khung lớn phải tăng (trend ≥) → 0.375 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 38.49 | 59.6% | 0.225 | 6.46 | 5.96 | 0.28 | 0.182 | -9.04 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Break mây Ichimoku → 3 | 105.66 | 49.1% | 0.648 | 9.28 | 11.39 | 0.487 | 0.833 | -9.4 |  |

### Vòng 662 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.13

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu riêng khung 4H → 2 | 117 | 41.1% | 0.353 | 12.36 | 9.47 | 0.375 | 0.336 | -10.09 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Ngưỡng điểm vào kèo → 74 | 90.06 | 45.6% | 0.613 | 9.58 | 9.4 | 0.439 | 0.832 | -9.16 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 122.45 | 50% | 0.806 | 8.16 | 15.01 | 0.785 | 0.83 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Lệnh chờ hết hạn sau (nến) → 8 | 111.94 | 49.1% | 0.704 | 8.83 | 12.68 | 0.609 | 0.8 | -11.59 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Đệm SL riêng khung 4H (ATR) → 0.3 | 104.76 | 37.1% | 0.35 | 21.09 | 4.97 | 0.256 | 0.427 | -2.11 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 116.84 | 53.1% | 0.806 | 7.52 | 15.54 | 0.623 | 1.018 | -9.66 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + % chốt ở TP1 → 0.287 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: HVN cố định → 0.563 | 104.88 | 50.7% | 0.739 | 7.93 | 13.23 | 0.584 | 0.893 | -10.71 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Momentum (/100) → 25 | 61.85 | 44.1% | 0.487 | 10.4 | 5.95 | 0.381 | 0.601 | -8.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm tối thiểu của vùng đặt SL → 2 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Break mây Ichimoku → 1 | 102.6 | 50% | 0.693 | 8.66 | 11.85 | 0.536 | 0.859 | -10.22 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Mức RSI 30/70 → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cổng Dow → TẮT | 106.92 | 43.2% | 0.537 | 12.67 | 8.44 | 0.47 | 0.606 | -18.44 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Cổng Dow → TẮT + Cộng thêm ngưỡng điểm khung 1W → -1 | 130.57 | 44% | 0.625 | 11.24 | 11.62 | 0.546 | 0.704 | -20.34 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 113.16 | 49.7% | 0.77 | 8.3 | 13.63 | 0.51 | 1.064 | -9.52 |  |

### Vòng 661 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.31

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Trend (/100) → 19 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Fib sóng 4 → 1.56 | 107.41 | 52% | 0.726 | 7.95 | 13.51 | 0.561 | 0.914 | -11.78 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + R:R tối thiểu riêng khung 1W → 2 | 106.27 | 50.7% | 0.728 | 8.22 | 12.93 | 0.617 | 0.835 | -12.09 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.563 | 114.75 | 50% | 0.775 | 8.37 | 13.71 | 0.586 | 0.97 | -10.7 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức RSI 30/70 → 0.875 | 79.67 | 47.5% | 0.653 | 9.31 | 8.56 | 0.459 | 0.889 | -6.48 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: EMA 50 → 0.75 | 114.02 | 49.3% | 0.77 | 8.41 | 13.56 | 0.591 | 0.95 | -10.7 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 89.59 | 45.8% | 0.54 | 9.99 | 8.97 | 0.408 | 0.672 | -10.47 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: POC volume profile cố định → 0.688 | 119.18 | 52.6% | 0.764 | 7.54 | 15.81 | 0.623 | 0.928 | -11.25 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: EMA 50 → 0.75 + Cộng thêm ngưỡng điểm khung 1W → 2 | 115.29 | 52.8% | 0.812 | 7.39 | 15.6 | 0.627 | 1.007 | -9.66 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL riêng khung 4H (ATR) → 0.3 | 101.85 | 36.6% | 0.345 | 20.85 | 4.88 | 0.258 | 0.417 | -1.13 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Ngưỡng điểm vào kèo → 77 | 114.02 | 46.4% | 0.687 | 10.26 | 11.11 | 0.576 | 0.825 | -8.51 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 118.18 | 53.1% | 0.815 | 7.47 | 15.82 | 0.624 | 1.037 | -9.66 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 112.2 | 52.2% | 0.825 | 7.3 | 15.37 | 0.59 | 1.089 | -10.98 |  |

### Vòng 660 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.32R, lời÷rủi ro 16.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 99.91 | 48.7% | 0.64 | 9.05 | 11.04 | 0.484 | 0.827 | -8.9 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 117.03 | 53.5% | 0.813 | 7.4 | 15.81 | 0.634 | 1.018 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Mức MACD → 1.13 | 107.86 | 45.7% | 0.616 | 9.09 | 11.87 | 0.593 | 0.639 | -7.92 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: HVN anchored → 0.313 + Cộng điểm phân kỳ dương ẩn → 3 | 81.57 | 46% | 0.507 | 9.98 | 8.17 | 0.418 | 0.592 | -9.82 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Đệm SL riêng khung 1W (ATR) → 0.3 | 107.95 | 47.6% | 0.744 | 8.99 | 12.01 | 0.455 | 1.022 | -10.56 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trọng số phần Elliott (/100) → 6 | 130.25 | 43.8% | 0.62 | 11.36 | 11.47 | 0.537 | 0.705 | -20.34 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần Entry (/100) → 28 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 110.73 | 51% | 0.774 | 7.37 | 15.02 | 0.646 | 0.916 | -9.66 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 21 → 0.875 | 88.39 | 50% | 0.737 | 8.23 | 10.74 | 0.588 | 0.912 | -16.13 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 105.51 | 48.9% | 0.759 | 8.19 | 12.88 | 0.583 | 0.972 | -9.25 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Cộng thêm ngưỡng điểm khung 1W → -1 + Cộng thêm ngưỡng điểm khung 1D → 5 | 114 | 53% | 0.765 | 7.69 | 14.82 | 0.586 | 0.979 | -9.66 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Momentum (/100) → 21 + R:R tối thiểu riêng khung 4H → 2 | 119.68 | 42% | 0.378 | 12.25 | 9.77 | 0.322 | 0.422 | -9.27 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Trend (/100) → 19 | 31.79 | 35.3% | 0.267 | 13.41 | 2.37 | 0.309 | 0.213 | -4.69 |  |

### Vòng 659 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: POC volume profile cố định → 0.813 | 117.17 | 52.7% | 0.803 | 7.54 | 15.54 | 0.635 | 0.99 | -7.32 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.18 | 52.1% | 0.7 | 7.93 | 12.89 | 0.637 | 0.772 | -9.46 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: EMA 200 → 1 | 118.67 | 41.5% | 0.376 | 12.44 | 9.54 | 0.335 | 0.408 | -2.54 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 94.13 | 44.8% | 0.57 | 9.27 | 10.15 | 0.546 | 0.593 | -13.4 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Mức MACD → 1.13 + Điểm tối thiểu của vùng đặt SL → 2 | 109.32 | 51.4% | 0.739 | 8.51 | 12.85 | 0.591 | 0.903 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.18 | 52.1% | 0.7 | 7.93 | 12.89 | 0.637 | 0.772 | -9.46 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Trọng số phần SL (/100) → 9 + Cộng thêm ngưỡng điểm khung 4H → 2 | 110.38 | 51.8% | 0.806 | 7.38 | 14.96 | 0.622 | 1.016 | -9.69 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Elliott (/100) → 10 | 116.53 | 47.6% | 0.711 | 9.9 | 11.77 | 0.693 | 0.726 | -6.35 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần R:R (/100) → 28 | 152.81 | 38.7% | 0.532 | 17.86 | 8.56 | 0.339 | 0.73 | -13.78 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần Divergence (/100) → 12 | 114.6 | 52.1% | 0.785 | 7.93 | 14.45 | 0.591 | 1.007 | -8.64 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 4H → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: BOS → 3 | 71.82 | 35.3% | 0.251 | 22.3 | 3.22 | 0.173 | 0.296 | -23.78 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Khung lớn phải tăng (trend ≥) → 0.375 | 112.74 | 51.4% | 0.783 | 7.64 | 14.76 | 0.581 | 1.009 | -9.66 |  |

### Vòng 658 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 108.92 | 51.7% | 0.731 | 8.59 | 12.68 | 0.571 | 0.912 | -9.66 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu tới TP1 → 2.63 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 79.58 | 48.2% | 0.698 | 8.95 | 8.89 | 0.588 | 0.816 | -12.74 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 116.61 | 52.4% | 0.793 | 7.63 | 15.28 | 0.603 | 1.014 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: POC anchored → 2 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 93.08 | 48.4% | 0.593 | 9.96 | 9.35 | 0.43 | 0.775 | -6.05 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Ngưỡng điểm vào kèo → 77 + Đệm SL riêng khung 1W (ATR) → 0.3 | 86.23 | 45.5% | 0.595 | 10.35 | 8.33 | 0.539 | 0.648 | -10.47 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Số TP tối đa → 2 | 108.55 | 46% | 0.624 | 9.17 | 11.84 | 0.596 | 0.651 | -7.92 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 111.82 | 51.1% | 0.793 | 7.62 | 14.67 | 0.646 | 0.956 | -9.66 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm tối thiểu của vùng đặt SL → 2 | 106.21 | 39.3% | 0.398 | 16.51 | 6.43 | 0.372 | 0.422 | -3.73 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 111.89 | 50.3% | 0.782 | 7.95 | 14.07 | 0.621 | 0.955 | -12.92 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 94.56 | 34.6% | 0.272 | 26.15 | 3.62 | 0.128 | 0.423 | -31.12 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Cộng thêm ngưỡng điểm khung 4H → -1 | 99.8 | 51.5% | 0.756 | 7.84 | 12.73 | 0.607 | 0.93 | -8.27 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 122.45 | 50% | 0.806 | 8.01 | 15.29 | 0.785 | 0.83 | -10.24 |  |

### Vòng 657 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: POC anchored → 4 | 118.23 | 52% | 0.788 | 7.59 | 15.58 | 0.607 | 0.974 | -4.48 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 114.3 | 47.8% | 0.728 | 8.86 | 12.9 | 0.704 | 0.754 | -11.6 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + R:R tối thiểu riêng khung 1W → 2 | 109.38 | 51.7% | 0.744 | 7.68 | 14.24 | 0.648 | 0.839 | -9.38 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 72.12 | 45.2% | 0.572 | 9.65 | 7.47 | 0.434 | 0.72 | -8.96 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Đệm SL riêng khung 4H (ATR) → 0.3 | 155.02 | 39.3% | 0.544 | 18.02 | 8.6 | 0.359 | 0.728 | -12.33 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: MACD cắt lên Signal → 0.563 + Cổng Dow → TẮT | 130.67 | 44% | 0.625 | 11.5 | 11.36 | 0.546 | 0.705 | -20.34 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: HVN anchored → 0.313 | 95.54 | 49.7% | 0.659 | 8.69 | 10.99 | 0.568 | 0.761 | -10.75 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Đệm SL riêng khung 4H (ATR) → 0.3 | 44.24 | 31.5% | 0.268 | 23.04 | 1.92 | 0.062 | 0.487 | 0.08 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Fib sóng 4 → 0.938 | 158.63 | 39.2% | 0.551 | 17.61 | 9.01 | 0.389 | 0.712 | -12.33 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN anchored → 0.313 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 100.16 | 41% | 0.34 | 12.4 | 8.08 | 0.252 | 0.407 | -15.81 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: EMA 200 → 3 | 79 | 46% | 0.637 | 9.47 | 8.34 | 0.442 | 0.852 | -15.11 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: BOS → 1 | 114.07 | 51.4% | 0.792 | 7.8 | 14.62 | 0.522 | 1.086 | -9.52 |  |
