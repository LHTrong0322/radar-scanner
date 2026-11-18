# Tối ưu tự động (chạy liên tục) — vòng 741

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 8547 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 93.37R | 0.573 | 5.74R | 9.98R | 9.36 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 144 | 53.5% | 118.41R | 0.822 | 5.09R | 7.27R | 16.29 | 27 | 18.5% | -8.63R | -0.32 | 9.25R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.77R | 1 | 0% | -1.01R |
| 4H | 106 | 54.7% | 91.22R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 93.37R | 9.98R | 9.36 | 31 | 12.9% | -13R |
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

### Vòng 741 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.27R, lời÷rủi ro 16.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + R:R tối thiểu riêng khung 4H → 2 | 117.85 | 41% | 0.374 | 12.97 | 9.09 | 0.345 | 0.398 | -13.14 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Trend (/100) → 12 + R:R tối thiểu tới TP1 → 2.38 | 99.31 | 47.2% | 0.609 | 8.86 | 11.21 | 0.547 | 0.666 | -11.28 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: POC anchored → 4 + Điểm vùng: EMA 21 → 1.13 + Lệnh chờ hết hạn sau (nến) → 8 | 111.86 | 50% | 0.682 | 8.46 | 13.22 | 0.559 | 0.811 | -7.45 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: EMA 21 → 1.13 | 110.73 | 50.7% | 0.738 | 7.85 | 14.11 | 0.589 | 0.909 | -8.97 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng thêm ngưỡng điểm khung 1D → 5 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 95.86 | 50% | 0.614 | 9.44 | 10.15 | 0.53 | 0.71 | -5.23 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + % chốt ở TP1 → 0.307 | 112.88 | 52.8% | 0.795 | 7.54 | 14.97 | 0.623 | 0.982 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần Divergence (/100) → 12 | 68.82 | 39.1% | 0.427 | 13.2 | 5.21 | 0.491 | 0.36 | -7.72 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Divergence (/100) → 12 | 154.95 | 38.8% | 0.542 | 17.8 | 8.71 | 0.401 | 0.684 | -16.61 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Biên mây Ichimoku → 1.05 | 111.85 | 47% | 0.674 | 10.29 | 10.87 | 0.654 | 0.691 | -5.17 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Trọng số phần Momentum (/100) → 21 | 118.41 | 53.5% | 0.822 | 7.27 | 16.29 | 0.635 | 1.037 | -8.63 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.09 | 58.2% | 0.184 | 5.99 | 4.86 | 0.198 | 0.17 | -10.35 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 76.19 | 47.7% | 0.712 | 8.46 | 9.01 | 0.474 | 0.984 | -6.78 |  |

### Vòng 740 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.33R, lời÷rủi ro 16.15

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cộng thêm ngưỡng điểm khung 1W → 2 + Ngưỡng điểm vào kèo → 77 | 79.29 | 45.7% | 0.615 | 9.77 | 8.12 | 0.412 | 0.827 | -8.96 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: POC anchored → 4 | 117.91 | 52.3% | 0.791 | 7.7 | 15.31 | 0.597 | 0.994 | -3.45 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Cộng thêm ngưỡng điểm khung 4H → -1 | 74.31 | 45.5% | 0.664 | 9.31 | 7.98 | 0.472 | 0.877 | -6.82 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 120.93 | 49% | 0.77 | 8.34 | 14.5 | 0.723 | 0.827 | -7.9 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 200 → 1 + Đệm SL riêng khung 1W (ATR) → 0.3 | 98.21 | 43.8% | 0.606 | 11.28 | 8.71 | 0.569 | 0.648 | -6.38 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 116.32 | 53.1% | 0.802 | 7.47 | 15.57 | 0.634 | 0.992 | -7.31 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Divergence (/100) → 9 + Xác nhận khung nhỏ (A2) → W + Trọng số phần SL (/100) → 7 | 105.1 | 39.4% | 0.414 | 15.73 | 6.68 | 0.36 | 0.464 | -2.71 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: EMA 50 → 1.13 | 98.79 | 47.1% | 0.629 | 9.92 | 9.96 | 0.513 | 0.754 | -7.98 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Ngưỡng điểm vào kèo → 77 + Trọng số phần Momentum (/100) → 21 + SL tối đa (% Entry) → 0.425 | 83.92 | 51.8% | 0.749 | 6.9 | 12.16 | 0.379 | 1.059 | -10.72 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Khung lớn phải tăng (trend ≥) → 0.375 + Cộng thêm ngưỡng điểm khung 1W → -1 + SL tối đa (% Entry) → 0.425 | 75.45 | 47.2% | 0.699 | 8.55 | 8.82 | 0.466 | 0.959 | -5.45 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 95.9 | 47.4% | 0.71 | 9.14 | 10.49 | 0.437 | 0.95 | -8.37 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Mức MACD → 0.875 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu riêng khung 4H → 2 | 127.38 | 43.7% | 0.39 | 11.7 | 10.89 | 0.34 | 0.431 | -8.36 |  |

### Vòng 739 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.42R, lời÷rủi ro 15.96

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 33.91 | 40.9% | 0.385 | 10.61 | 3.2 | 0.277 | 0.522 | -7.55 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: BOS → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 | 68.74 | 39.3% | 0.409 | 13.81 | 4.98 | 0.347 | 0.459 | -6.49 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Cổng Dow → CHẶT | 58.61 | 45.3% | 0.428 | 10.22 | 5.73 | 0.313 | 0.518 | -13.93 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 114.07 | 52.1% | 0.803 | 7.46 | 15.29 | 0.604 | 1.026 | -9.92 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 111 | 51.1% | 0.799 | 7.65 | 14.51 | 0.659 | 0.953 | -11.89 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cổng Dow → CHẶT | 72.63 | 49.1% | 0.626 | 8.73 | 8.32 | 0.213 | 0.999 | -8.14 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần Divergence (/100) → 12 | 114.11 | 51.4% | 0.792 | 7.75 | 14.72 | 0.523 | 1.086 | -8.49 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 110.02 | 52.1% | 0.764 | 7.89 | 13.94 | 0.599 | 0.944 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: EMA 21 → 0.875 + Đệm SL riêng khung 4H (ATR) → 0.3 | 156.62 | 38.4% | 0.536 | 17.91 | 8.74 | 0.408 | 0.666 | -12.38 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu riêng khung 1W → 2 | 25.05 | 57% | 0.166 | 6.18 | 4.05 | 0.251 | 0.09 | -9.27 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 116.31 | 52% | 0.786 | 7.74 | 15.03 | 0.625 | 0.965 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 106.16 | 51% | 0.732 | 8.1 | 13.11 | 0.594 | 0.884 | -10.33 |  |

### Vòng 738 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.38R, lời÷rủi ro 16.04

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Cộng thêm ngưỡng điểm khung 1W → -1 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: POC volume profile cố định → 0.813 | 120.18 | 42% | 0.385 | 11.89 | 10.11 | 0.331 | 0.431 | -6.17 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: BOS → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 94.4 | 46.4% | 0.684 | 9.23 | 10.23 | 0.507 | 0.877 | -10.99 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 4H → 2 | 109.17 | 40.5% | 0.345 | 12.57 | 8.68 | 0.3 | 0.384 | -7.76 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: HVN anchored → 0.188 + Ngưỡng điểm vào kèo → 77 | 112.17 | 51.4% | 0.801 | 7.53 | 14.9 | 0.646 | 0.975 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + SL tối đa (% Entry) → 0.425 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 1W (ATR) → 0.3 | 105.02 | 46.1% | 0.682 | 10.07 | 10.43 | 0.64 | 0.722 | -4.97 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Break mây Ichimoku → 1 | 97.42 | 49.6% | 0.691 | 8.35 | 11.67 | 0.498 | 0.898 | -9.93 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + SL tối đa (% Entry) → 0.425 | 116.75 | 52.4% | 0.794 | 7.66 | 15.24 | 0.625 | 0.986 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL riêng khung 1W (ATR) → 0.3 | 104.05 | 48.6% | 0.743 | 8.87 | 11.73 | 0.496 | 0.977 | -9.68 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Biên mây Ichimoku → 1.35 | 83.69 | 53.2% | 0.768 | 7.2 | 11.62 | 0.344 | 1.114 | -10.72 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Mức MACD → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần SL (/100) → 9 | 116.92 | 49.3% | 0.847 | 8.12 | 14.4 | 0.653 | 1.085 | -7.88 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 101.87 | 47.8% | 0.641 | 10.23 | 9.96 | 0.344 | 0.99 | -6.93 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 107.5 | 49.4% | 0.689 | 8.76 | 12.27 | 0.778 | 0.591 | -9.15 |  |

### Vòng 737 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.33R, lời÷rủi ro 16.15

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 46.02 | 32.1% | 0.279 | 21.64 | 2.13 | 0.088 | 0.477 | 3.44 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Trend (/100) → 19 + Điểm vùng: BOS → 3 + Cổng Dow → TẮT | 136.24 | 42.3% | 0.565 | 13.64 | 9.99 | 0.678 | 0.472 | -17.32 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 120.12 | 49% | 0.775 | 8.39 | 14.32 | 0.737 | 0.822 | -8.19 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 113.13 | 49.6% | 0.814 | 8 | 14.14 | 0.61 | 1.06 | -7.88 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Cộng điểm phân kỳ dương ẩn → 2.25 | 115.04 | 51.7% | 0.793 | 7.71 | 14.92 | 0.592 | 1.028 | -8.63 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Trend (/100) → 19 + Điểm vùng: HVN cố định → 0.438 + Cổng Dow → TẮT | 148.12 | 35.5% | 0.376 | 23.25 | 6.37 | 0.316 | 0.43 | -38.72 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: POC anchored → 4 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + SL tối đa (% Entry) → 0.425 | 112.69 | 50.3% | 0.746 | 8.38 | 13.45 | 0.519 | 0.977 | -4.27 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần R:R (/100) → 28 + Điểm vùng: EMA 21 → 0.875 | 104.37 | 50.7% | 0.715 | 8 | 13.05 | 0.704 | 0.726 | -8.23 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Mức MACD → 1.13 | 96.04 | 47% | 0.717 | 9.18 | 10.46 | 0.437 | 0.965 | -9.68 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Đệm SL riêng khung 1W (ATR) → 0.3 | 99.54 | 45.7% | 0.711 | 9.27 | 10.74 | 0.46 | 0.948 | -8.66 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Entry (/100) → 33 + Trọng số phần Trend (/100) → 19 | 109.52 | 49.7% | 0.672 | 8.74 | 12.53 | 0.543 | 0.816 | -8.37 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 200 → 1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 34.65 | 59.3% | 0.201 | 6.3 | 5.5 | 0.258 | 0.141 | -8.1 |  |

### Vòng 736 — ngẫu nhiên nhiều thông số · mốc: tổng 115.38R, win 53.2%, rủi ro tụt vốn 7.58R, lời÷rủi ro 15.22

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.438 | 150.96 | 38% | 0.517 | 19.38 | 7.79 | 0.299 | 0.741 | -11.8 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 43.96 | 38.3% | 0.411 | 13.77 | 3.19 | 0.611 | 0.199 | -4.41 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Số TP tối đa → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 110.95 | 49% | 0.745 | 8.34 | 13.3 | 0.569 | 0.948 | -9.13 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Mức MACD → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 86.1 | 45.3% | 0.619 | 9.54 | 9.03 | 0.522 | 0.74 | -9.34 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần Divergence (/100) → 9 | 113.14 | 52.4% | 0.791 | 7.5 | 15.09 | 0.634 | 0.974 | -8.27 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: POC volume profile cố định → 0.813 + Cộng thêm ngưỡng điểm khung 4H → 2 | 108.9 | 51.4% | 0.789 | 7.86 | 13.85 | 0.651 | 0.949 | -5.93 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 111.72 | 50.7% | 0.745 | 8.31 | 13.44 | 0.662 | 0.832 | -8.61 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Trọng số phần SL (/100) → 9 + Coin phải mạnh hơn BTC trong N ngày → 14 | 82.5 | 48.3% | 0.699 | 8.12 | 10.16 | 0.515 | 0.933 | -14.73 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm vùng: HVN anchored → 0.313 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 111.86 | 51.7% | 0.782 | 7.66 | 14.6 | 0.592 | 1.011 | -6.95 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trọng số phần Divergence (/100) → 12 + R:R tối thiểu riêng khung 1W → 2 | 105.45 | 51% | 0.737 | 7.98 | 13.21 | 0.625 | 0.854 | -9.3 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần Trend (/100) → 19 + R:R tối thiểu riêng khung 4H → 2 + % chốt ở TP1 → 0.307 | 116.83 | 41.8% | 0.384 | 12.18 | 9.59 | 0.331 | 0.431 | -7.89 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Ngưỡng điểm vào kèo → 74 | 120.54 | 48.7% | 0.773 | 8.48 | 14.21 | 0.736 | 0.817 | -8.85 |  |

### Vòng 735 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.27R, lời÷rủi ro 16.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần Momentum (/100) → 25 + Số TP tối đa → 2 | 104.33 | 49.3% | 0.696 | 8.82 | 11.83 | 0.532 | 0.888 | -6.05 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Break mây Ichimoku → 3 | 59.39 | 43.2% | 0.503 | 11.27 | 5.27 | 0.291 | 0.73 | -6.91 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Cộng thêm ngưỡng điểm khung 1W → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 116.39 | 49.4% | 0.756 | 8.18 | 14.23 | 0.6 | 0.924 | -9.66 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + R:R tối thiểu riêng khung 4H → 2 | 107.9 | 41.1% | 0.355 | 12.6 | 8.56 | 0.309 | 0.391 | -10.23 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 94.48 | 47.3% | 0.566 | 10.35 | 9.13 | 0.424 | 0.727 | -5.79 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần Momentum (/100) → 25 | 96.83 | 50.4% | 0.728 | 7.81 | 12.4 | 0.596 | 0.884 | -8.27 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 1W → 2 | 105.15 | 37.3% | 0.392 | 20.21 | 5.2 | 0.272 | 0.51 | -13.36 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 101.2 | 48.6% | 0.693 | 8.89 | 11.38 | 0.518 | 0.864 | -11.52 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 118.41 | 53.5% | 0.822 | 7.27 | 16.29 | 0.635 | 1.037 | -8.63 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: EMA 50 → 1.13 | 114.06 | 51% | 0.787 | 7.82 | 14.59 | 0.598 | 1.006 | -7.61 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Khung lớn phải tăng (trend ≥) → 0.375 | 23.2 | 64.5% | 0.249 | 5.02 | 4.62 | 0.243 | 0.257 | -5.75 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.96 | 58.8% | 0.187 | 6.02 | 4.98 | 0.214 | 0.162 | -9.6 |  |

### Vòng 734 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.38

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Mức MACD → 0.875 | 110.54 | 52.1% | 0.757 | 7.81 | 14.15 | 0.56 | 0.983 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cổng Dow → TẮT | 100.36 | 40.1% | 0.601 | 12.29 | 8.17 | 0.502 | 0.706 | -16.19 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 | 105.05 | 41.8% | 0.556 | 12.64 | 8.31 | 0.582 | 0.534 | -4.52 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu riêng khung 4H → 2 | 123.48 | 41.9% | 0.372 | 11.98 | 10.31 | 0.393 | 0.355 | -9.03 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 + Cộng thêm ngưỡng điểm khung 1D → 3 | 33.78 | 40.2% | 0.388 | 10.33 | 3.27 | 0.29 | 0.504 | -7.55 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 83.41 | 45.7% | 0.509 | 10.34 | 8.07 | 0.414 | 0.605 | -8.8 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: EMA 200 → 3 | 101.53 | 50.3% | 0.691 | 8.59 | 11.82 | 0.542 | 0.841 | -9.63 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 88.33 | 49.3% | 0.659 | 8.71 | 10.14 | 0.497 | 0.826 | -9.92 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Ngưỡng điểm vào kèo → 77 + Cộng thêm ngưỡng điểm khung 1D → 5 | 109.28 | 50.7% | 0.77 | 7.85 | 13.92 | 0.615 | 0.937 | -7.58 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 121.74 | 49.7% | 0.796 | 8.2 | 14.85 | 0.785 | 0.808 | -7.9 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 94.52 | 47.1% | 0.695 | 8.89 | 10.63 | 0.441 | 1.016 | -9.96 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần Trend (/100) → 19 | 116.62 | 53.1% | 0.804 | 7.39 | 15.78 | 0.634 | 0.996 | -8.63 |  |

### Vòng 733 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.37R, lời÷rủi ro 16.07

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 2.25 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 110.44 | 47% | 0.741 | 9 | 12.27 | 0.559 | 0.912 | -10.71 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Fib sóng 4 → 0.938 | 31.44 | 59.7% | 0.198 | 5.89 | 5.34 | 0.216 | 0.18 | -10.77 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm vào kèo → 74 | 88.77 | 34.5% | 0.388 | 20.9 | 4.25 | 0.215 | 0.568 | -13.64 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 200 → 3 | 97.93 | 49% | 0.666 | 8.4 | 11.66 | 0.528 | 0.795 | -9.66 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 55.52 | 39.4% | 0.405 | 12.68 | 4.38 | 0.434 | 0.378 | -14.55 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: EMA 200 → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: HVN anchored → 0.188 | 90.72 | 48.6% | 0.621 | 9.07 | 10 | 0.498 | 0.752 | -4.55 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 106.62 | 51.3% | 0.711 | 8.81 | 12.1 | 0.575 | 0.862 | -9.6 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Trọng số phần Momentum (/100) → 25 + R:R tối thiểu tới TP1 → 2.63 | 98.13 | 50.4% | 0.811 | 8.06 | 12.17 | 0.523 | 1.124 | -9.6 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần Elliott (/100) → 10 + Cộng thêm ngưỡng điểm khung 4H → -1 | 112.53 | 50.3% | 0.708 | 8.48 | 13.27 | 0.54 | 0.896 | -9.63 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 117.15 | 53.1% | 0.797 | 7.75 | 15.12 | 0.596 | 1.037 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trọng số phần Entry (/100) → 28 | 116.31 | 52% | 0.786 | 7.7 | 15.11 | 0.625 | 0.965 | -8.63 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm tối thiểu của vùng đặt SL → 2 | 112.73 | 53.1% | 0.767 | 8.1 | 13.92 | 0.635 | 0.912 | -8.63 |  |

### Vòng 732 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.38

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: POC anchored → 4 | 116.89 | 52% | 0.779 | 7.78 | 15.02 | 0.596 | 0.967 | -5.76 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Cổng Dow → CHẶT + Trọng số phần R:R (/100) → 33 | 82.38 | 51.8% | 0.723 | 7.29 | 11.3 | 0.283 | 1.118 | -10.72 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + SL tối đa (% Entry) → 0.425 + Điểm vùng: HVN cố định → 0.438 | 114.18 | 51.7% | 0.777 | 7.89 | 14.47 | 0.592 | 0.986 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm tối thiểu của vùng đặt SL → 4 + Khung lớn phải tăng (trend ≥) → 0.375 + R:R tối thiểu riêng khung 1D → 2 | 106.89 | 43% | 0.554 | 10.24 | 10.44 | 0.537 | 0.569 | -5.89 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: EMA 200 → 1 | 110.89 | 52.2% | 0.706 | 8.58 | 12.92 | 0.625 | 0.804 | -2.86 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Biên mây Ichimoku → 1.35 | 114.18 | 51.7% | 0.777 | 8.01 | 14.25 | 0.592 | 0.986 | -7.61 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + R:R tối thiểu riêng khung 1W → 2 + Điểm tối thiểu của vùng đặt SL → 4 | 108.43 | 51% | 0.738 | 7.71 | 14.06 | 0.655 | 0.816 | -9.67 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Break mây Ichimoku → 1 | 127.2 | 41.1% | 0.446 | 15.26 | 8.34 | 0.438 | 0.455 | -4.28 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.188 + Trọng số phần Momentum (/100) → 21 | 96.65 | 47.8% | 0.721 | 9.21 | 10.49 | 0.437 | 0.974 | -9.68 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + R:R tối thiểu riêng khung 1W → 2 | 109.99 | 50.3% | 0.748 | 8.15 | 13.5 | 0.584 | 0.906 | -9.53 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: POC anchored → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 1D → 3 | 75.46 | 40.5% | 0.463 | 12.8 | 5.9 | 0.535 | 0.387 | -9.89 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Mức RSI 30/70 → 0.875 | 99.28 | 46.8% | 0.636 | 9.54 | 10.41 | 0.505 | 0.806 | -9.16 |  |
