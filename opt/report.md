# Tối ưu tự động (chạy liên tục) — vòng 599

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 6843 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.3% | 93.89R | 0.58 | 5.74R | 9.57R | 9.81 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 143 | 53.1% | 113.69R | 0.795 | 6.15R | 7.46R | 15.24 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

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
| Bot thật | 162 | 46.3% | 93.89R | 9.57R | 9.81 | 32 | 12.5% | -14.03R |
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

### Vòng 597 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.54R, lời÷rủi ro 15.08

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Số TP tối đa → 2 + R:R tối thiểu riêng khung 1D → 2 | 96.87 | 45.5% | 0.587 | 8.93 | 10.85 | 0.549 | 0.623 | -12.84 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cổng Dow → CHẶT | 64.09 | 50.5% | 0.675 | 7.54 | 8.5 | 0.279 | 1.062 | -12.22 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Đệm SL riêng khung 1W (ATR) → 0.3 | 102.24 | 45.1% | 0.623 | 10.6 | 9.65 | 0.567 | 0.689 | -14.09 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần SL (/100) → 9 | 112.22 | 52.4% | 0.785 | 7.59 | 14.79 | 0.635 | 0.96 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 110.5 | 52.1% | 0.778 | 7.48 | 14.77 | 0.616 | 0.966 | -9.48 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: BOS → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Fib sóng 4 → 0.938 | 86.14 | 43.9% | 0.582 | 10.33 | 8.34 | 0.377 | 0.844 | -8.95 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: HVN cố định → 0.438 | 24.13 | 56.3% | 0.168 | 6.23 | 3.87 | 0.216 | 0.118 | -10.46 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Mức MACD → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 103.79 | 40.9% | 0.343 | 12.86 | 8.07 | 0.329 | 0.355 | -10.52 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 70.31 | 47.2% | 0.651 | 8.5 | 8.27 | 0.448 | 0.878 | -6.48 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 110.42 | 52.4% | 0.772 | 7.68 | 14.38 | 0.604 | 0.963 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Mức RSI 30/70 → 1.13 | 98.82 | 49.7% | 0.663 | 9.45 | 10.46 | 0.508 | 0.848 | -7.08 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng thêm ngưỡng điểm khung 4H → -1 | 98.74 | 50% | 0.705 | 8.13 | 12.15 | 0.465 | 0.991 | -11.51 |  |

### Vòng 596 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.57R, lời÷rủi ro 15.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Mức RSI 30/70 → 1.13 + SL tối đa (% Entry) → 0.425 | 120.93 | 49.7% | 0.78 | 8.46 | 14.29 | 0.757 | 0.808 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + R:R tối thiểu riêng khung 4H → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 47.71 | 37.5% | 0.221 | 17.14 | 2.78 | 0.24 | 0.201 | -9.46 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: EMA 50 → 0.75 | 111.23 | 53.2% | 0.789 | 7.42 | 14.99 | 0.621 | 0.975 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Trend (/100) → 12 + Trọng số phần Elliott (/100) → 10 | 106.72 | 40.6% | 0.346 | 13.04 | 8.18 | 0.331 | 0.359 | -17.25 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + SL tối đa (% Entry) → 0.425 + R:R tối thiểu tới TP1 → 2.38 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 93.99 | 44.9% | 0.563 | 9.79 | 9.6 | 0.613 | 0.516 | -11.56 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Cổng Dow → CHẶT | 84.05 | 53.5% | 0.737 | 6.87 | 12.23 | 0.384 | 1.023 | -6.64 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + SL tối đa (% Entry) → 0.425 + Điểm vùng: HVN anchored → 0.188 | 112.68 | 52.8% | 0.783 | 7.62 | 14.79 | 0.635 | 0.952 | -9.66 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: EMA 21 → 1.13 | 108.26 | 52.1% | 0.752 | 7.67 | 14.11 | 0.628 | 0.894 | -10 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: EMA 21 → 0.875 | 104.74 | 49.7% | 0.685 | 9.07 | 11.55 | 0.519 | 0.866 | -7.08 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Số TP tối đa → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 16.89 | 57% | 0.132 | 6.96 | 2.43 | 0.157 | 0.107 | -11.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 106.03 | 50% | 0.736 | 8.13 | 13.04 | 0.493 | 1.001 | -10.93 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: EMA 200 → 1 | 93.79 | 46.9% | 0.638 | 9.57 | 9.8 | 0.508 | 0.774 | -5.89 |  |

### Vòng 595 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.51R, lời÷rủi ro 15.14

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: MACD cắt lên Signal → 0.438 + % chốt ở TP1 → 0.307 | 104.19 | 49.7% | 0.672 | 9.31 | 11.19 | 0.474 | 0.912 | -7.09 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: POC anchored → 4 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần R:R (/100) → 33 | 104.27 | 49.3% | 0.724 | 8.45 | 12.34 | 0.483 | 0.965 | -4.28 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 128.21 | 45.3% | 0.543 | 11.12 | 11.53 | 0.629 | 0.448 | -10.74 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 1D → 5 + Lệnh chờ hết hạn sau (nến) → 8 | 107 | 46.4% | 0.585 | 9.31 | 11.49 | 0.605 | 0.564 | -9.57 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Trọng số phần Divergence (/100) → 9 | 113.24 | 52.8% | 0.786 | 7.65 | 14.8 | 0.635 | 0.96 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + R:R tối thiểu riêng khung 4H → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 91.48 | 39.7% | 0.308 | 13.87 | 6.6 | 0.288 | 0.325 | -10.58 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: BOS → 1 | 102.35 | 45.4% | 0.588 | 9.66 | 10.6 | 0.591 | 0.585 | -6.61 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 111.03 | 43.9% | 0.483 | 11.61 | 9.56 | 0.572 | 0.392 | -10.55 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Xác nhận khung nhỏ (A2) → W | 9.02 | 45.2% | 0.032 | 16.29 | 0.55 | 0.093 | -0.028 | -10.43 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: BOS → 1 | 97.49 | 51.7% | 0.672 | 8.19 | 11.9 | 0.637 | 0.714 | -9.46 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Momentum (/100) → 21 | 33.23 | 57.6% | 0.21 | 5.94 | 5.59 | 0.261 | 0.161 | -11.38 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 107.64 | 50.4% | 0.774 | 7.76 | 13.87 | 0.621 | 0.949 | -12.92 |  |

### Vòng 594 — ngẫu nhiên nhiều thông số · mốc: tổng 116.9R, win 53.5%, rủi ro tụt vốn 7.56R, lời÷rủi ro 15.46

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: POC anchored → 4 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 101.85 | 49.7% | 0.666 | 8.59 | 11.86 | 0.641 | 0.688 | -9.42 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 200 → 3 | 77.5 | 46.9% | 0.596 | 8.93 | 8.68 | 0.567 | 0.627 | -8.96 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + R:R tối thiểu riêng khung 1D → 2 + SL tối đa (% Entry) → 0.425 | 102.3 | 45% | 0.598 | 9.87 | 10.36 | 0.587 | 0.609 | -7.92 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 106.59 | 37.2% | 0.3 | 19.67 | 5.42 | 0.379 | 0.228 | 2.76 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Khung lớn phải tăng (trend ≥) → 0.375 | 113.18 | 52.4% | 0.781 | 7.55 | 14.99 | 0.604 | 0.975 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Trend (/100) → 12 | 113.26 | 47% | 0.691 | 10.36 | 10.93 | 0.67 | 0.709 | -6.35 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Mức MACD → 1.13 | 34.23 | 40.9% | 0.389 | 10.48 | 3.27 | 0.26 | 0.551 | -12.38 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: HVN anchored → 0.313 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 99.83 | 51.1% | 0.729 | 8.03 | 12.43 | 0.461 | 1.025 | -11.51 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Fib sóng 4 → 1.56 + Khung lớn phải tăng (trend ≥) → 0.375 | 111.25 | 51.7% | 0.747 | 8.01 | 13.89 | 0.55 | 0.975 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: MACD cắt lên Signal → 0.563 + Lệnh chờ hết hạn sau (nến) → 8 + Cộng thêm ngưỡng điểm khung 4H → -1 | 116.1 | 51.9% | 0.744 | 7.76 | 14.96 | 0.602 | 0.91 | -11.25 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: POC volume profile cố định → 0.688 | 91.14 | 46.8% | 0.584 | 8.93 | 10.21 | 0.484 | 0.682 | -11.23 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 111.78 | 52.1% | 0.766 | 7.77 | 14.39 | 0.635 | 0.912 | -9.66 |  |

### Vòng 593 — ngẫu nhiên nhiều thông số · mốc: tổng 116.9R, win 53.5%, rủi ro tụt vốn 7.48R, lời÷rủi ro 15.63

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: POC volume profile cố định → 0.688 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Mức RSI 30/70 → 1.13 | 116.71 | 53.1% | 0.805 | 7.24 | 16.12 | 0.624 | 1.015 | -9.66 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Mức MACD → 0.875 | 106.83 | 50.7% | 0.722 | 8.44 | 12.66 | 0.58 | 0.88 | -10.63 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 96.43 | 50.7% | 0.661 | 8.25 | 11.69 | 0.585 | 0.747 | -10 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: POC anchored → 4 + Trọng số phần Divergence (/100) → 12 + Đệm SL riêng khung 1D (ATR) → 0.3 | 118.54 | 47.9% | 0.727 | 9.84 | 12.05 | 0.672 | 0.775 | -2.2 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + % chốt ở TP1 → 0.287 + Trọng số phần Momentum (/100) → 25 | 111.27 | 51.8% | 0.8 | 7.65 | 14.55 | 0.596 | 1.033 | -9.68 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 100.92 | 35.4% | 0.325 | 23.21 | 4.35 | 0.233 | 0.399 | -7.42 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Trọng số phần Elliott (/100) → 10 | 115.18 | 52.4% | 0.805 | 7.33 | 15.71 | 0.64 | 0.993 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Elliott (/100) → 10 | 115.18 | 52.4% | 0.805 | 7.33 | 15.71 | 0.64 | 0.993 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + R:R tối thiểu riêng khung 4H → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 2.25 | 90.51 | 39.5% | 0.316 | 13.58 | 6.66 | 0.287 | 0.34 | -9.15 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Lệnh chờ hết hạn sau (nến) → 8 | 108.43 | 50.3% | 0.718 | 8.08 | 13.42 | 0.604 | 0.847 | -12.54 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + % chốt ở TP1 → 0.307 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 99.68 | 50% | 0.674 | 8.49 | 11.74 | 0.528 | 0.84 | -9.93 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 115.07 | 52% | 0.777 | 7.5 | 15.34 | 0.608 | 0.972 | -8.64 |  |

### Vòng 592 — ngẫu nhiên nhiều thông số · mốc: tổng 116.9R, win 53.5%, rủi ro tụt vốn 7.53R, lời÷rủi ro 15.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Break mây Ichimoku → 1 | 64.49 | 44.4% | 0.403 | 11.18 | 5.77 | 0.353 | 0.455 | -11.78 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Trọng số phần Trend (/100) → 12 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 99.29 | 49% | 0.658 | 8.81 | 11.27 | 0.53 | 0.794 | -8.63 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Momentum (/100) → 21 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 67.58 | 46.1% | 0.588 | 9.93 | 6.81 | 0.393 | 0.831 | -7.06 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 101.65 | 49% | 0.656 | 9.59 | 10.6 | 0.519 | 0.822 | -6.09 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + SL tối đa (% Entry) → 0.425 | 108.74 | 46.3% | 0.663 | 10.66 | 10.2 | 0.67 | 0.656 | -5.33 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần R:R (/100) → 33 | 98.94 | 49.3% | 0.66 | 8.47 | 11.68 | 0.517 | 0.822 | -9.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Momentum (/100) → 21 + Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần R:R (/100) → 33 | 100.94 | 46.2% | 0.647 | 10.51 | 9.6 | 0.653 | 0.641 | -3.24 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: HVN anchored → 0.188 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm tối thiểu của vùng đặt SL → 2 | 110.57 | 52.3% | 0.742 | 8.14 | 13.58 | 0.624 | 0.872 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 112.79 | 51.7% | 0.767 | 7.94 | 14.21 | 0.571 | 0.995 | -9.66 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Khung lớn phải tăng (trend ≥) → 0.425 + Xác nhận khung nhỏ (A2) → W | 78.19 | 35.8% | 0.295 | 18.81 | 4.16 | 0.308 | 0.281 | -7.74 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần SL (/100) → 9 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 91.97 | 45.7% | 0.657 | 9.66 | 9.52 | 0.409 | 0.898 | -11.67 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 58.91 | 40.9% | 0.512 | 11.58 | 5.09 | 0.343 | 0.657 | -4.74 |  |

### Vòng 591 — ngẫu nhiên nhiều thông số · mốc: tổng 128.46R, win 53.8%, rủi ro tụt vốn 7.4R, lời÷rủi ro 17.36

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Fib sóng 4 → 0.938 | 109.78 | 50.7% | 0.773 | 7.66 | 14.33 | 0.65 | 0.915 | -11.83 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 1D → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + SL tối đa (% Entry) → 0.425 | 122.03 | 41.5% | 0.59 | 12.47 | 9.79 | 0.74 | 0.465 | -6.83 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 | 115.24 | 47.6% | 0.694 | 9.69 | 11.89 | 0.65 | 0.735 | -6.35 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 54.45 | 31.1% | 0.332 | 21.01 | 2.59 | 0.169 | 0.491 | 3.43 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: POC volume profile cố định → 0.813 | 115.49 | 51.3% | 0.74 | 8.43 | 13.7 | 0.638 | 0.872 | -4.67 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Xác nhận khung nhỏ (A2) → W + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 86.83 | 36.7% | 0.329 | 19.21 | 4.52 | 0.361 | 0.299 | -7.12 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: MACD cắt lên Signal → 0.563 | 127.16 | 53.4% | 0.859 | 7.55 | 16.84 | 0.729 | 1.016 | -9.64 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 33.16 | 58.4% | 0.206 | 5.99 | 5.54 | 0.229 | 0.184 | -11.38 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.563 + Trọng số phần Entry (/100) → 28 + Điểm vùng: EMA 21 → 1.13 | 109.26 | 47% | 0.65 | 10.24 | 10.67 | 0.654 | 0.647 | -6.69 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 1W (ATR) → 0.3 | 83.27 | 46.3% | 0.677 | 9.56 | 8.71 | 0.477 | 0.909 | -16.12 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Entry (/100) → 28 + Ngưỡng điểm vào kèo → 77 | 173.2 | 39.1% | 0.583 | 18.34 | 9.44 | 0.492 | 0.68 | -18.73 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Ngưỡng điểm vào kèo → 74 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 125.55 | 49.4% | 0.795 | 8.57 | 14.65 | 0.774 | 0.819 | -10.24 |  |

### Vòng 590 — ngẫu nhiên nhiều thông số · mốc: tổng 116.9R, win 53.5%, rủi ro tụt vốn 7.53R, lời÷rủi ro 15.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + R:R tối thiểu riêng khung 1W → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 108.65 | 52.1% | 0.744 | 7.66 | 14.18 | 0.648 | 0.84 | -10.7 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 93.95 | 50.4% | 0.803 | 7.77 | 12.09 | 0.535 | 1.085 | -10.63 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Khung lớn phải tăng (trend ≥) → 0.425 | 89.96 | 45.8% | 0.58 | 9.01 | 9.98 | 0.47 | 0.69 | -11.26 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 113.87 | 47% | 0.678 | 10.42 | 10.93 | 0.635 | 0.719 | -6.35 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Trọng số phần SL (/100) → 9 + R:R tối thiểu riêng khung 4H → 2 | 104.43 | 40.6% | 0.339 | 12.54 | 8.33 | 0.342 | 0.337 | -9.5 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.55 | 58% | 0.188 | 5.8 | 5.09 | 0.219 | 0.159 | -11.38 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 130.48 | 43.6% | 0.508 | 11.18 | 11.67 | 0.588 | 0.423 | -7.71 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: EMA 200 → 3 | 92.31 | 47.9% | 0.65 | 8.7 | 10.61 | 0.408 | 0.906 | -10.47 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 30.06 | 49.5% | 0.092 | 8.11 | 3.71 | 0.095 | 0.091 | -13.94 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: EMA 50 → 1.13 + R:R tối thiểu riêng khung 4H → 2 | 105.44 | 40.5% | 0.347 | 12.7 | 8.3 | 0.336 | 0.356 | -8.22 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Fib sóng 4 → 1.56 | 68.31 | 36.9% | 0.268 | 20.55 | 3.32 | 0.3 | 0.235 | -6.02 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 115.32 | 47.2% | 0.801 | 9.19 | 12.55 | 0.581 | 1.047 | -9.95 |  |
