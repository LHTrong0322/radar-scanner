# Tối ưu tự động (chạy liên tục) — vòng 816

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 9447 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 46.3% | 97.49R | 0.594 | 5.7R | 9.72R | 10.03 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 146 | 53.4% | 122.14R | 0.837 | 5.09R | 7.1R | 17.20 | 28 | 17.9% | -9.92R | -0.354 | 10.54R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.77R | 2 | 0% | -2.3R |
| 4H | 108 | 54.6% | 94.95R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 46.3% | 97.49R | 9.72R | 10.03 | 31 | 12.9% | -13R |
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

### Vòng 816 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.1R, lời÷rủi ro 17.20

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cộng điểm phân kỳ dương ẩn → 2.25 + R:R tối thiểu riêng khung 1W → 2 | 113.84 | 52.4% | 0.774 | 7.59 | 15 | 0.648 | 0.899 | -10.96 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Fib sóng 4 → 0.938 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Ngưỡng điểm vào kèo → 77 | 91.78 | 44.5% | 0.629 | 9.48 | 9.68 | 0.481 | 0.793 | -8.13 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 73.69 | 45.9% | 0.676 | 8.83 | 8.35 | 0.429 | 0.947 | -6.78 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: EMA 200 → 3 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: HVN anchored → 0.188 | 109.04 | 49.3% | 0.757 | 7.95 | 13.72 | 0.552 | 0.963 | -9.9 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Lệnh chờ hết hạn sau (nến) → 6 | 38.38 | 35.4% | 0.238 | 15.25 | 2.52 | 0.3 | 0.177 | 2.22 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + R:R tối thiểu riêng khung 1W → 2 | 100.2 | 50.3% | 0.673 | 8.25 | 12.15 | 0.552 | 0.785 | -10.96 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Cộng thêm ngưỡng điểm khung 1W → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 92.79 | 44.1% | 0.61 | 10.34 | 8.97 | 0.453 | 0.785 | -8.44 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức MACD → 1.13 | 110.06 | 51% | 0.739 | 8.21 | 13.41 | 0.606 | 0.87 | -9.64 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 87.15 | 50.9% | 0.751 | 7.04 | 12.38 | 0.377 | 1.035 | -12.08 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 + Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 80.65 | 48.3% | 0.695 | 8.33 | 9.68 | 0.474 | 0.933 | -14.06 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + % chốt ở TP1 → 0.287 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Cộng điểm phân kỳ dương ẩn → 3 | 99.6 | 46.6% | 0.673 | 9.06 | 10.99 | 0.49 | 0.883 | -8.13 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: POC anchored → 4 + Điểm vùng: HVN anchored → 0.188 | 121.98 | 46.6% | 0.645 | 9.32 | 13.09 | 0.706 | 0.591 | -5.27 |  |

### Vòng 815 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: HVN cố định → 0.438 + Trọng số phần Divergence (/100) → 9 | 113.49 | 51% | 0.762 | 7.68 | 14.78 | 0.585 | 0.956 | -10.26 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Fib sóng 4 → 1.56 | 21.13 | 35.4% | 0.325 | 11.14 | 1.9 | 0.206 | 0.448 | -11.35 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: POC anchored → 2 | 105.53 | 49.3% | 0.694 | 8.28 | 12.75 | 0.53 | 0.867 | -9.92 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Khung lớn phải tăng (trend ≥) → 0.425 + Lệnh chờ hết hạn sau (nến) → 6 | 99.15 | 50.8% | 0.763 | 7.69 | 12.89 | 0.552 | 1.008 | -9.59 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 116.01 | 51.7% | 0.779 | 7.57 | 15.32 | 0.635 | 0.932 | -9.92 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 68.18 | 46.2% | 0.516 | 9.7 | 7.03 | 0.411 | 0.639 | -10.25 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Biên mây Ichimoku → 1.35 | 76.42 | 47.2% | 0.602 | 9.43 | 8.1 | 0.444 | 0.757 | -9.23 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + R:R tối thiểu riêng khung 4H → 2 | 102.31 | 40% | 0.335 | 13.49 | 7.58 | 0.296 | 0.368 | -9.56 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + SL tối đa (% Entry) → 0.425 | 108 | 50% | 0.701 | 8.83 | 12.23 | 0.524 | 0.904 | -7.34 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + R:R tối thiểu riêng khung 1D → 2 | 104.91 | 46.3% | 0.6 | 8.93 | 11.75 | 0.584 | 0.614 | -7.15 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần Divergence (/100) → 12 | 117.61 | 51.7% | 0.789 | 7.65 | 15.37 | 0.592 | 1.006 | -7.58 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + % chốt ở TP1 → 0.287 | 83.79 | 50.4% | 0.704 | 8.09 | 10.36 | 0.525 | 0.912 | -16.39 |  |

### Vòng 814 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.87

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trần điểm khi chart yếu (Trend < x) → -0.225 + SL tối đa (% Entry) → 0.425 | 126.36 | 50% | 0.8 | 8.26 | 15.3 | 0.757 | 0.848 | -10.5 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: HVN cố định → 0.438 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 119.3 | 49.7% | 0.77 | 8.04 | 14.84 | 0.562 | 1.003 | -10.95 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 18.22 | 53.3% | 0.135 | 7.53 | 2.42 | 0.168 | 0.113 | -9.84 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.438 | 155.45 | 38.3% | 0.518 | 18.58 | 8.37 | 0.302 | 0.737 | -11.28 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → 2 | 73.8 | 43.8% | 0.512 | 10.42 | 7.08 | 0.487 | 0.533 | -10.96 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: POC volume profile cố định → 0.688 | 98.75 | 45.7% | 0.61 | 8.89 | 11.11 | 0.523 | 0.694 | -11.49 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần Trend (/100) → 12 + Điểm vùng: POC volume profile cố định → 0.813 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 113.9 | 48.6% | 0.825 | 8 | 14.24 | 0.619 | 1.057 | -6.83 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Lệnh chờ hết hạn sau (nến) → 8 | 104.2 | 49.7% | 0.647 | 9.06 | 11.5 | 0.606 | 0.691 | -10.84 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần R:R (/100) → 33 | 122.45 | 53.1% | 0.833 | 7.22 | 16.96 | 0.64 | 1.045 | -9.92 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 99.19 | 46.6% | 0.67 | 9.04 | 10.97 | 0.474 | 0.901 | -8.13 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Trend (/100) → 19 | 74.25 | 45.9% | 0.681 | 8.82 | 8.42 | 0.435 | 0.951 | -5.45 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 | 29.98 | 57.1% | 0.184 | 5.83 | 5.14 | 0.174 | 0.194 | -10.15 |  |

### Vòng 813 — ngẫu nhiên nhiều thông số · mốc: tổng 116.34R, win 54%, rủi ro tụt vốn 7.18R, lời÷rủi ro 16.20

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 64.06 | 44.6% | 0.634 | 9.43 | 6.79 | 0.429 | 0.901 | -5.45 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: HVN cố định → 0.438 | 83.1 | 50.5% | 0.749 | 7.79 | 10.67 | 0.543 | 1.009 | -15.1 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Đệm SL riêng khung 4H (ATR) → 0.3 | 156.65 | 39.2% | 0.535 | 17.82 | 8.79 | 0.444 | 0.636 | -5.74 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần R:R (/100) → 28 + Điểm vùng: POC anchored → 4 | 112.65 | 47.1% | 0.727 | 9.64 | 11.69 | 0.713 | 0.739 | -1.17 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Fib sóng 4 → 0.938 + Số TP tối đa → 2 | 108.92 | 52.6% | 0.819 | 7.33 | 14.86 | 0.634 | 1.038 | -8.63 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Cộng điểm phân kỳ dương ẩn → 3 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Fib sóng 4 → 1.56 | 96.3 | 51.1% | 0.735 | 7.93 | 12.14 | 0.577 | 0.94 | -8.27 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Cổng Dow → CHẶT + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 82.86 | 52.3% | 0.746 | 6.67 | 12.42 | 0.444 | 1.013 | -11.3 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 72.4 | 50% | 0.646 | 8.23 | 8.8 | 0.604 | 0.697 | -14.32 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần R:R (/100) → 28 | 102.92 | 44.5% | 0.595 | 9.32 | 11.04 | 0.575 | 0.615 | -7.95 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cộng điểm phân kỳ dương ẩn → 2.25 + Trọng số phần SL (/100) → 9 | 108.86 | 51.4% | 0.767 | 7.83 | 13.9 | 0.597 | 0.973 | -9.61 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Fib sóng 4 → 1.56 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Khung lớn phải tăng (trend ≥) → 0.425 | 108.44 | 50.4% | 0.841 | 7.76 | 13.97 | 0.585 | 1.184 | -7.92 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 91.67 | 45.3% | 0.716 | 8.95 | 10.24 | 0.502 | 1.009 | -5.02 |  |

### Vòng 812 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.22R, lời÷rủi ro 16.92

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 104.26 | 49.3% | 0.734 | 7.8 | 13.37 | 0.48 | 1.011 | -10.31 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31 | 58.9% | 0.196 | 5.67 | 5.47 | 0.202 | 0.191 | -9.5 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Số TP tối đa → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 81.18 | 46.6% | 0.62 | 9.15 | 8.87 | 0.429 | 0.826 | -10.25 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: POC volume profile cố định → 0.688 | 81.35 | 46% | 0.585 | 9.7 | 8.39 | 0.438 | 0.711 | -10.49 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Break mây Ichimoku → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 111.66 | 47.4% | 0.716 | 9.26 | 12.06 | 0.593 | 0.867 | -8.76 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần R:R (/100) → 28 | 55.48 | 44% | 0.509 | 10.13 | 5.48 | 0.395 | 0.649 | -6.04 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: POC anchored → 4 | 69 | 46% | 0.611 | 9.77 | 7.06 | 0.379 | 0.839 | 0.49 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: BOS → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 | 157.64 | 39.4% | 0.545 | 17.73 | 8.89 | 0.375 | 0.72 | -11.49 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 104.18 | 51.4% | 0.704 | 7.99 | 13.04 | 0.615 | 0.803 | -9.72 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.35 + Đệm SL riêng khung 1W (ATR) → 0.3 | 100.31 | 47.4% | 0.732 | 8.85 | 11.33 | 0.452 | 0.971 | -9.67 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Divergence (/100) → 12 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + % chốt ở TP1 → 0.287 | 110.61 | 50% | 0.79 | 8.49 | 13.03 | 0.611 | 0.991 | -9.15 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 1W → -1 | 119.72 | 51% | 0.814 | 7.61 | 15.73 | 0.673 | 0.95 | -8.97 |  |

### Vòng 811 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 37.19 | 40.4% | 0.418 | 10.24 | 3.63 | 0.344 | 0.508 | -7.55 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm tối thiểu của vùng đặt SL → 4 | 69.52 | 44.5% | 0.632 | 9.04 | 7.69 | 0.429 | 0.851 | -5.45 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần Elliott (/100) → 10 | 117.53 | 52.5% | 0.834 | 7.24 | 16.23 | 0.662 | 1.023 | -9.92 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần Momentum (/100) → 21 | 107.35 | 52% | 0.725 | 7.98 | 13.45 | 0.635 | 0.823 | -9.14 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: EMA 21 → 0.875 | 120.29 | 52% | 0.813 | 7.42 | 16.21 | 0.688 | 0.948 | -8.63 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Xác nhận khung nhỏ (A2) → W + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 66.51 | 34.2% | 0.152 | 24.79 | 2.68 | 0.184 | 0.122 | -9.36 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + R:R tối thiểu riêng khung 1D → 2 | 89.19 | 43.3% | 0.568 | 10.16 | 8.78 | 0.431 | 0.675 | -8.96 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: EMA 21 → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 121.76 | 52% | 0.812 | 7.7 | 15.81 | 0.645 | 0.998 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Cộng thêm ngưỡng điểm khung 4H → -1 | 122.14 | 53.4% | 0.837 | 7.23 | 16.89 | 0.635 | 1.061 | -9.92 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: HVN anchored → 0.313 | 112.19 | 51.7% | 0.763 | 7.67 | 14.63 | 0.624 | 0.9 | -10.96 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: EMA 200 → 3 + Cổng Dow → CHẶT + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 79.26 | 50.9% | 0.721 | 7.17 | 11.05 | 0.287 | 1.056 | -10.97 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Trọng số phần Trend (/100) → 19 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Momentum (/100) → 21 | 115.8 | 48.9% | 0.821 | 8.09 | 14.31 | 0.587 | 1.095 | -9.17 |  |

### Vòng 810 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: BOS → 1 + Điểm vùng: EMA 50 → 1.13 | 112.81 | 50% | 0.762 | 8.04 | 14.03 | 0.598 | 0.945 | -7.69 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: EMA 200 → 3 + Điểm vùng: EMA 50 → 0.75 | 94.5 | 47.2% | 0.665 | 8.49 | 11.13 | 0.611 | 0.723 | -10.1 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Coin phải mạnh hơn BTC trong N ngày → 14 | 50.12 | 41.3% | 0.482 | 10.13 | 4.95 | 0.247 | 0.727 | -16.2 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 2.25 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 106.31 | 37.6% | 0.37 | 19.83 | 5.36 | 0.459 | 0.293 | -21.46 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 61.56 | 35.5% | 0.288 | 19.58 | 3.14 | 0.305 | 0.269 | -2.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Elliott (/100) → 6 | 120.67 | 52.7% | 0.815 | 7.48 | 16.13 | 0.635 | 1.011 | -10.03 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 119.44 | 49.7% | 0.771 | 8.57 | 13.94 | 0.573 | 0.987 | -10.95 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần Elliott (/100) → 10 | 131.42 | 44.8% | 0.571 | 10.64 | 12.35 | 0.622 | 0.519 | -11.7 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần Trend (/100) → 12 + Ngưỡng điểm vào kèo → 74 | 117.23 | 50.7% | 0.792 | 7.74 | 15.15 | 0.515 | 1.085 | -9.8 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Mức RSI 30/70 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Ngưỡng điểm vào kèo → 74 | 113.54 | 46.4% | 0.742 | 8.84 | 12.84 | 0.564 | 0.901 | -11.72 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + R:R tối thiểu riêng khung 4H → 2 | 99.24 | 41.6% | 0.341 | 12.1 | 8.2 | 0.318 | 0.36 | -9.47 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 112.45 | 49.7% | 0.755 | 8.04 | 13.99 | 0.485 | 1.035 | -10.78 |  |

### Vòng 809 — ngẫu nhiên nhiều thông số · mốc: tổng 117.68R, win 52.1%, rủi ro tụt vốn 7.67R, lời÷rủi ro 15.34

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 71.2 | 44.1% | 0.641 | 9.45 | 7.53 | 0.381 | 0.937 | -4.41 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: EMA 21 → 1.13 | 110.92 | 52.1% | 0.792 | 7.48 | 14.83 | 0.607 | 0.983 | -8.99 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần SL (/100) → 9 | 115.87 | 46.2% | 0.733 | 10.06 | 11.52 | 0.72 | 0.745 | -9.53 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Trọng số phần Entry (/100) → 28 | 116.02 | 51% | 0.811 | 7.84 | 14.8 | 0.597 | 1.048 | -7.62 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + R:R tối thiểu riêng khung 4H → 2 | 126.46 | 41% | 0.408 | 12.1 | 10.45 | 0.353 | 0.453 | -8.25 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Cộng thêm ngưỡng điểm khung 1W → 2 | 116.6 | 51% | 0.815 | 7.8 | 14.95 | 0.614 | 1.025 | -7.62 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + R:R tối thiểu riêng khung 4H → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: MACD cắt lên Signal → 0.438 | 83.01 | 39.4% | 0.314 | 13.6 | 6.1 | 0.319 | 0.311 | -21.22 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu riêng khung 1D → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 29.66 | 55.3% | 0.174 | 6.5 | 4.56 | 0.188 | 0.164 | -8.44 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + R:R tối thiểu riêng khung 1D → 2 | 103.31 | 45.1% | 0.638 | 9.05 | 11.42 | 0.617 | 0.656 | -7.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Cổng Dow → CHẶT + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 27.42 | 61.1% | 0.218 | 5.08 | 5.4 | 0.236 | 0.205 | -5.73 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu tới TP1 → 2.63 + Cộng thêm ngưỡng điểm khung 1D → 5 | 88.7 | 47.4% | 0.765 | 9.33 | 9.51 | 0.54 | 1.005 | -11.12 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Lệnh chờ hết hạn sau (nến) → 8 + R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 1D → 5 | 100.3 | 45.1% | 0.573 | 9.79 | 10.25 | 0.641 | 0.512 | -7.29 |  |

### Vòng 808 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Elliott (/100) → 6 | 115.03 | 52.7% | 0.767 | 8.03 | 14.33 | 0.635 | 0.906 | -10.03 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu riêng khung 1W → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 94.89 | 51% | 0.654 | 8.08 | 11.74 | 0.654 | 0.655 | -9.44 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 81.93 | 50.4% | 0.677 | 8.5 | 9.64 | 0.543 | 0.823 | -10.45 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Cộng thêm ngưỡng điểm khung 1D → 5 + Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần Elliott (/100) → 6 | 118.72 | 51.7% | 0.819 | 7.4 | 16.04 | 0.64 | 1.011 | -9.92 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 124.12 | 50.3% | 0.822 | 8.05 | 15.42 | 0.797 | 0.851 | -10.5 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 121.13 | 53.1% | 0.824 | 7.49 | 16.17 | 0.614 | 1.061 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần SL (/100) → 7 + Số TP tối đa → 2 | 116.28 | 52.1% | 0.796 | 7.31 | 15.91 | 0.571 | 1.048 | -9.92 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.438 | 95.89 | 47.2% | 0.596 | 9.96 | 9.63 | 0.455 | 0.752 | -7.14 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Số TP tối đa → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 72.75 | 39.6% | 0.444 | 13.29 | 5.47 | 0.464 | 0.422 | -8.88 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 109.8 | 41.4% | 0.35 | 12.27 | 8.95 | 0.339 | 0.359 | -7.44 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Lệnh chờ hết hạn sau (nến) → 6 + Cộng điểm phân kỳ dương ẩn → 2.25 | 103.62 | 51.9% | 0.779 | 7.63 | 13.58 | 0.608 | 0.976 | -9.56 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Trọng số phần Trend (/100) → 12 | 113.68 | 46% | 0.646 | 8.87 | 12.82 | 0.591 | 0.697 | -8.18 |  |

### Vòng 807 — ngẫu nhiên nhiều thông số · mốc: tổng 118.76R, win 52.4%, rủi ro tụt vốn 7.67R, lời÷rủi ro 15.48

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 113.36 | 51% | 0.771 | 7.94 | 14.28 | 0.582 | 0.974 | -9.57 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 74.05 | 46.4% | 0.673 | 8.84 | 8.38 | 0.428 | 0.936 | -5.45 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Khung lớn phải tăng (trend ≥) → 0.425 | 104.17 | 49.7% | 0.69 | 8.81 | 11.82 | 0.509 | 0.878 | -9.7 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trọng số phần Elliott (/100) → 6 + Coin phải mạnh hơn BTC trong N ngày → 14 | 75.57 | 39.7% | 0.434 | 13.23 | 5.71 | 0.458 | 0.409 | -24.25 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Mức RSI 30/70 → 1.13 + R:R tối thiểu tới TP1 → 2.38 | 78.93 | 37.7% | 0.313 | 17.48 | 4.52 | 0.235 | 0.379 | -8.22 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: EMA 200 → 3 | 99.31 | 48.3% | 0.685 | 8.56 | 11.6 | 0.431 | 0.942 | -10.91 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Ngưỡng điểm vào kèo → 74 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 117.28 | 51% | 0.809 | 7.51 | 15.62 | 0.594 | 1.045 | -12.3 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 97.03 | 51.2% | 0.802 | 7.8 | 12.44 | 0.476 | 1.145 | -9.6 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 76.95 | 41.6% | 0.391 | 12.64 | 6.09 | 0.496 | 0.304 | -15.66 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Số TP tối đa → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 + Xác nhận khung nhỏ (A2) → W | 100.28 | 38.2% | 0.369 | 17.17 | 5.84 | 0.371 | 0.366 | -4.07 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Số TP tối đa → 2 | 119.92 | 52.4% | 0.816 | 7.57 | 15.84 | 0.639 | 1 | -8.61 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: EMA 21 → 0.875 + Điểm tối thiểu của vùng đặt SL → 4 | 98.51 | 50% | 0.758 | 7.9 | 12.47 | 0.617 | 0.917 | -7.22 |  |
