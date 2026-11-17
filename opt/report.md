# Tối ưu tự động (chạy liên tục) — vòng 566

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 6447 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 46.3% | 95.54R | 0.583 | 6.74R | 10.09R | 9.47 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 145 | 53.1% | 114.31R | 0.788 | 6.15R | 7.72R | 14.81 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 107 | 54.2% | 87.15R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 46.3% | 95.54R | 10.09R | 9.47 | 32 | 12.5% | -14.03R |
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

### Vòng 566 — ngẫu nhiên nhiều thông số · mốc: tổng 114.31R, win 53.1%, rủi ro tụt vốn 7.72R, lời÷rủi ro 14.81

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN cố định → 0.438 | 111.54 | 52.1% | 0.764 | 7.87 | 14.17 | 0.591 | 0.962 | -9.66 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu tới TP1 → 2.38 + % chốt ở TP1 → 0.287 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 30.66 | 56.2% | 0.172 | 6.03 | 5.08 | 0.24 | 0.113 | -9.25 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 78.54 | 43.8% | 0.538 | 9.98 | 7.87 | 0.469 | 0.622 | -9.16 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Mức MACD → 1.13 + Điểm tối thiểu của vùng đặt SL → 4 | 107.69 | 49.7% | 0.723 | 8.28 | 13.01 | 0.584 | 0.875 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + % chốt ở TP1 → 0.307 | 116.42 | 51.9% | 0.737 | 8.38 | 13.89 | 0.581 | 0.923 | -9.67 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: EMA 21 → 0.875 | 67.51 | 45% | 0.608 | 9.94 | 6.79 | 0.484 | 0.745 | -5.46 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số TP tối đa → 2 + Điểm vùng: Mức MACD → 1.13 | 20.54 | 56.3% | 0.13 | 6.95 | 2.96 | 0.186 | 0.081 | -10.38 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Biên mây Ichimoku → 1.05 | 76.72 | 50.4% | 0.645 | 8.38 | 9.16 | 0.552 | 0.749 | -16.96 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng thêm ngưỡng điểm khung 1D → 5 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Đệm SL riêng khung 1W (ATR) → 0.3 | 111.99 | 43.7% | 0.709 | 10.5 | 10.67 | 0.593 | 0.847 | -10.82 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Đệm SL riêng khung 4H (ATR) → 0.3 | 124.02 | 37.1% | 0.47 | 18.96 | 6.54 | 0.278 | 0.656 | -7.21 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Ngưỡng điểm vào kèo → 77 | 107.75 | 50.7% | 0.759 | 7.68 | 14.03 | 0.646 | 0.882 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 100.22 | 40.7% | 0.326 | 12.8 | 7.83 | 0.323 | 0.33 | -11.08 |  |

### Vòng 565 — ngẫu nhiên nhiều thông số · mốc: tổng 114.31R, win 53.1%, rủi ro tụt vốn 7.69R, lời÷rủi ro 14.86

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 92.53 | 47.4% | 0.685 | 9.29 | 9.96 | 0.436 | 0.903 | -10.7 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần Trend (/100) → 12 | 107.51 | 49.6% | 0.762 | 7.84 | 13.71 | 0.626 | 0.909 | -12.92 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: EMA 200 → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 106.14 | 51.1% | 0.786 | 8.53 | 12.44 | 0.524 | 1.105 | -5.74 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 | 35.49 | 40% | 0.394 | 10.27 | 3.46 | 0.327 | 0.482 | -8.58 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Số TP tối đa → 2 | 113.44 | 48.1% | 0.718 | 8.87 | 12.79 | 0.704 | 0.735 | -10.24 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Elliott (/100) → 10 | 103.31 | 46.9% | 0.722 | 9.08 | 11.38 | 0.55 | 0.888 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 96.37 | 51.6% | 0.79 | 7.91 | 12.18 | 0.569 | 1.026 | -10.73 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu riêng khung 4H → 2 | 32.08 | 49.4% | 0.096 | 7.84 | 4.09 | 0.12 | 0.079 | -15.54 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + % chốt ở TP1 → 0.287 + Lệnh chờ hết hạn sau (nến) → 8 + Cộng điểm phân kỳ dương ẩn → 2.25 | 121.14 | 52.5% | 0.767 | 7.73 | 15.67 | 0.621 | 0.933 | -11.23 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 9.93 | 40.3% | 0.148 | 13.13 | 0.76 | -0.059 | 0.403 | -9.26 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Biên mây Ichimoku → 1.35 | 78.03 | 37.4% | 0.317 | 17.64 | 4.42 | 0.258 | 0.372 | -0.68 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Trọng số phần Trend (/100) → 19 + Điểm vùng: EMA 50 → 1.13 + R:R tối thiểu riêng khung 4H → 2 | 99.16 | 41% | 0.325 | 12.85 | 7.72 | 0.348 | 0.305 | -8.53 |  |

### Vòng 564 — ngẫu nhiên nhiều thông số · mốc: tổng 114.31R, win 53.1%, rủi ro tụt vốn 7.72R, lời÷rủi ro 14.81

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: EMA 50 → 0.75 + Trọng số phần Divergence (/100) → 9 | 110.27 | 52.4% | 0.761 | 7.86 | 14.03 | 0.599 | 0.934 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 50 → 1.13 | 105.34 | 46.1% | 0.631 | 10.86 | 9.7 | 0.577 | 0.682 | -5.33 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Break mây Ichimoku → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 129.06 | 43.9% | 0.529 | 11.6 | 11.13 | 0.674 | 0.389 | -16.42 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Trọng số phần Entry (/100) → 33 | 102.04 | 50% | 0.719 | 7.95 | 12.84 | 0.556 | 0.886 | -9.62 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Biên mây Ichimoku → 1.05 | 72.32 | 53.2% | 0.663 | 6.88 | 10.51 | 0.328 | 0.927 | -12.01 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Đệm SL riêng khung 1W (ATR) → 0.3 | 89.25 | 44.7% | 0.587 | 10.88 | 8.2 | 0.444 | 0.742 | -10.81 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 1D → 2 | 90.97 | 42.6% | 0.562 | 9.96 | 9.13 | 0.694 | 0.436 | -18.5 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 200 → 3 | 90.76 | 42.5% | 0.567 | 12.14 | 7.48 | 0.51 | 0.616 | -6.39 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Mức MACD → 1.13 | 114.46 | 41.3% | 0.369 | 12.29 | 9.31 | 0.361 | 0.376 | -9.25 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 109.23 | 51.7% | 0.743 | 7.94 | 13.76 | 0.595 | 0.91 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 65.8 | 44.7% | 0.414 | 11.19 | 5.88 | 0.306 | 0.51 | -10.96 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 66.44 | 45.9% | 0.61 | 9.1 | 7.3 | 0.449 | 0.785 | -6.83 |  |

### Vòng 563 — ngẫu nhiên nhiều thông số · mốc: tổng 114.31R, win 53.1%, rủi ro tụt vốn 7.83R, lời÷rủi ro 14.60

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm tối thiểu của vùng đặt SL → 2 + Cộng thêm ngưỡng điểm khung 1D → 3 + Trọng số phần Momentum (/100) → 25 | 102.32 | 51% | 0.678 | 8.22 | 12.45 | 0.615 | 0.745 | -10 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Khung lớn phải tăng (trend ≥) → 0.425 | 110.9 | 52.1% | 0.781 | 7.83 | 14.16 | 0.606 | 0.977 | -9.69 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: HVN anchored → 0.188 + Trọng số phần SL (/100) → 9 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.1 | 57.6% | 0.184 | 5.91 | 4.92 | 0.219 | 0.151 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 | 102.59 | 49.1% | 0.629 | 9.27 | 11.07 | 0.504 | 0.769 | -9.4 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Biên mây Ichimoku → 1.35 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Entry (/100) → 28 | 26.88 | 56.3% | 0.168 | 6.53 | 4.12 | 0.217 | 0.123 | -9.91 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 113.51 | 47.8% | 0.723 | 8.96 | 12.67 | 0.684 | 0.769 | -9.05 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: POC volume profile cố định → 0.813 | 85.9 | 45.6% | 0.584 | 9.76 | 8.8 | 0.443 | 0.758 | -8.14 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức RSI 30/70 → 0.875 + R:R tối thiểu riêng khung 1D → 2 | 99.59 | 45.4% | 0.538 | 10.33 | 9.64 | 0.581 | 0.497 | -7.06 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Entry (/100) → 33 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 64.62 | 45.6% | 0.567 | 10.13 | 6.38 | 0.4 | 0.74 | -6.51 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 30.68 | 58.4% | 0.185 | 5.91 | 5.19 | 0.236 | 0.137 | -7.71 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + SL tối đa (% Entry) → 0.425 | 113.88 | 47.3% | 0.674 | 10.24 | 11.12 | 0.703 | 0.648 | -5.37 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức MACD → 0.875 | 153.89 | 38.8% | 0.532 | 18.4 | 8.36 | 0.388 | 0.674 | -13.36 |  |

### Vòng 562 — ngẫu nhiên nhiều thông số · mốc: tổng 114.31R, win 53.1%, rủi ro tụt vốn 7.59R, lời÷rủi ro 15.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: BOS → 3 + Trọng số phần R:R (/100) → 33 + Coin phải mạnh hơn BTC trong N ngày → 14 | 91.97 | 48.1% | 0.713 | 8.77 | 10.49 | 0.684 | 0.747 | -16.13 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: MACD cắt lên Signal → 0.438 | 85.6 | 44.7% | 0.538 | 11.23 | 7.62 | 0.409 | 0.703 | -6.58 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: Mức RSI 30/70 → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 200 → 1 | 30.47 | 59.3% | 0.177 | 6.07 | 5.02 | 0.239 | 0.112 | -9.13 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: BOS → 1 + Cộng thêm ngưỡng điểm khung 1W → 2 | 103.92 | 51.7% | 0.707 | 8.09 | 12.85 | 0.586 | 0.836 | -9.66 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Khung lớn phải tăng (trend ≥) → 0.425 | 110.34 | 52.1% | 0.777 | 7.83 | 14.09 | 0.606 | 0.969 | -9.69 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Đệm SL riêng khung 4H (ATR) → 0.3 | 103.92 | 36.6% | 0.349 | 22.2 | 4.68 | 0.235 | 0.441 | -4.28 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + % chốt ở TP1 → 0.307 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Mức RSI 30/70 → 1.13 | 109.45 | 51.4% | 0.782 | 7.7 | 14.21 | 0.628 | 0.95 | -10.96 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần R:R (/100) → 33 | 113.85 | 52.7% | 0.78 | 7.7 | 14.79 | 0.635 | 0.942 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần Momentum (/100) → 21 | 102.31 | 48.4% | 0.652 | 9.76 | 10.48 | 0.452 | 0.887 | -7.08 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Cộng điểm phân kỳ dương ẩn → 2.25 | 114.31 | 53.1% | 0.788 | 7.59 | 15.06 | 0.635 | 0.962 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Trọng số phần Divergence (/100) → 12 + Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 | 152.57 | 37.2% | 0.481 | 19.07 | 8 | 0.418 | 0.539 | -16.8 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Cổng Dow → TẮT + Trần điểm khi chart yếu (Trend < x) → -0.375 | 122.77 | 43.4% | 0.579 | 11.87 | 10.34 | 0.519 | 0.642 | -20.29 |  |

### Vòng 561 — ngẫu nhiên nhiều thông số · mốc: tổng 114.31R, win 53.1%, rủi ro tụt vốn 7.72R, lời÷rủi ro 14.81

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 + R:R tối thiểu tới TP1 → 2.63 + Số TP tối đa → 2 | 100.01 | 51.2% | 0.8 | 7.98 | 12.53 | 0.575 | 1.06 | -13.89 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Elliott (/100) → 6 | 71.63 | 46.8% | 0.657 | 8.61 | 8.32 | 0.473 | 0.859 | -6.48 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Break mây Ichimoku → 3 + Cổng Dow → TẮT + Điểm vùng: Biên mây Ichimoku → 1.05 | 33.76 | 51.1% | 0.151 | 8.77 | 3.85 | 0.297 | 0.017 | -16.39 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Số TP tối đa → 2 | 114.64 | 52.7% | 0.785 | 7.63 | 15.02 | 0.64 | 0.947 | -7.32 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần Divergence (/100) → 12 + Cộng thêm ngưỡng điểm khung 4H → -1 | 111.12 | 52.1% | 0.772 | 7.48 | 14.86 | 0.616 | 0.946 | -9.48 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Số TP tối đa → 2 | 104.11 | 50.3% | 0.708 | 8.16 | 12.76 | 0.576 | 0.862 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần SL (/100) → 7 + Trọng số phần R:R (/100) → 33 | 158.58 | 38.8% | 0.545 | 17.89 | 8.86 | 0.398 | 0.693 | -12.32 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Mức RSI 30/70 → 0.875 | 111.1 | 51.6% | 0.717 | 8.36 | 13.29 | 0.569 | 0.892 | -10.02 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: HVN anchored → 0.313 + Đệm SL riêng khung 1D (ATR) → 0.3 | 111.69 | 45.5% | 0.669 | 10.75 | 10.39 | 0.602 | 0.734 | -5.17 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Cộng điểm phân kỳ dương ẩn → 3 + Cộng thêm ngưỡng điểm khung 4H → 2 + R:R tối thiểu riêng khung 4H → 2 | 108.76 | 40.9% | 0.347 | 12.44 | 8.74 | 0.344 | 0.35 | -15.2 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 125.24 | 50.6% | 0.803 | 8.31 | 15.07 | 0.782 | 0.827 | -10.24 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Cộng thêm ngưỡng điểm khung 4H → 2 | 111.63 | 51.7% | 0.781 | 7.47 | 14.94 | 0.65 | 0.92 | -9.66 |  |

### Vòng 560 — ngẫu nhiên nhiều thông số · mốc: tổng 114.31R, win 53.1%, rủi ro tụt vốn 7.59R, lời÷rủi ro 15.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Elliott (/100) → 10 + Coin phải mạnh hơn BTC trong N ngày → 14 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 47.89 | 44.4% | 0.38 | 11.19 | 4.28 | 0.194 | 0.544 | -16.58 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + R:R tối thiểu riêng khung 1W → 2 | 101.43 | 51% | 0.69 | 8.29 | 12.24 | 0.616 | 0.763 | -11.66 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: EMA 200 → 3 + % chốt ở TP1 → 0.287 + Cộng thêm ngưỡng điểm khung 4H → 2 | 98.68 | 49.6% | 0.7 | 8.07 | 12.23 | 0.576 | 0.826 | -8.29 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + R:R tối thiểu riêng khung 4H → 2 | 98.8 | 40.8% | 0.323 | 12.99 | 7.61 | 0.339 | 0.309 | -9.24 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 107.36 | 52.7% | 0.716 | 7.87 | 13.64 | 0.594 | 0.855 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.05 | 103.78 | 52.1% | 0.711 | 7.84 | 13.24 | 0.589 | 0.843 | -11.78 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: POC anchored → 4 + Trọng số phần SL (/100) → 9 | 107.43 | 49.4% | 0.663 | 9.25 | 11.61 | 0.478 | 0.857 | -1.9 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 21 → 0.875 | 101.45 | 50% | 0.705 | 8.4 | 12.08 | 0.631 | 0.776 | -11.05 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Xác nhận khung nhỏ (A2) → W | 91.65 | 36.3% | 0.326 | 20.74 | 4.42 | 0.355 | 0.301 | -4.49 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 57.32 | 45% | 0.526 | 9.86 | 5.81 | 0.454 | 0.611 | -6.08 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: POC anchored → 2 + Trọng số phần SL (/100) → 7 | 91.65 | 49% | 0.607 | 8.67 | 10.57 | 0.542 | 0.668 | -9.67 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: POC volume profile cố định → 0.688 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 106.32 | 49.6% | 0.765 | 8.27 | 12.86 | 0.621 | 0.915 | -9.95 |  |

### Vòng 559 — ngẫu nhiên nhiều thông số · mốc: tổng 112.69R, win 52.8%, rủi ro tụt vốn 7.63R, lời÷rủi ro 14.77

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 96.96 | 47.9% | 0.664 | 8.7 | 11.14 | 0.608 | 0.729 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Cổng Dow → CHẶT | 77.68 | 51.4% | 0.7 | 7.26 | 10.7 | 0.333 | 1.023 | -10.72 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + R:R tối thiểu riêng khung 1D → 2 | 39.38 | 39.8% | 0.334 | 11.97 | 3.29 | 0.432 | 0.221 | -6.62 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 | 96.64 | 47.4% | 0.565 | 10.66 | 9.07 | 0.422 | 0.732 | -6.82 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: EMA 21 → 1.13 | 36.55 | 40.9% | 0.393 | 10.09 | 3.62 | 0.321 | 0.481 | -7.24 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + SL tối đa (% Entry) → 0.425 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức MACD → 1.13 | 107.55 | 50.3% | 0.732 | 8.14 | 13.21 | 0.591 | 0.89 | -8.93 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + % chốt ở TP1 → 0.307 | 100.94 | 46.7% | 0.604 | 10.59 | 9.53 | 0.684 | 0.531 | -5.16 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 28.32 | 57% | 0.179 | 6.08 | 4.66 | 0.22 | 0.141 | -11.38 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Ngưỡng điểm vào kèo → 77 + Trọng số phần Entry (/100) → 28 | 91.77 | 50% | 0.637 | 8.26 | 11.11 | 0.671 | 0.601 | -9.42 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Mức RSI 30/70 → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 28.28 | 57% | 0.179 | 6.09 | 4.64 | 0.219 | 0.141 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Mức MACD → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 106.26 | 52.1% | 0.759 | 7.79 | 13.64 | 0.605 | 0.927 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Ngưỡng điểm vào kèo → 74 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 | 94.38 | 49.3% | 0.629 | 8.7 | 10.85 | 0.619 | 0.64 | -9.46 |  |

### Vòng 558 — ngẫu nhiên nhiều thông số · mốc: tổng 112.69R, win 52.8%, rủi ro tụt vốn 7.54R, lời÷rủi ro 14.95

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Khung lớn phải tăng (trend ≥) → 0.425 | 109.28 | 51.8% | 0.775 | 7.68 | 14.23 | 0.606 | 0.967 | -9.17 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Mức RSI 30/70 → 0.875 | 104.1 | 47.7% | 0.591 | 9.03 | 11.53 | 0.517 | 0.67 | -10.67 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Khung lớn phải tăng (trend ≥) → 0.425 + Trọng số phần R:R (/100) → 28 | 105.35 | 50.7% | 0.752 | 7.97 | 13.22 | 0.572 | 0.928 | -4.52 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Entry (/100) → 33 | 110.27 | 51.7% | 0.771 | 7.92 | 13.92 | 0.658 | 0.892 | -9.66 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm tối thiểu của vùng đặt SL → 4 | 111.41 | 51.7% | 0.768 | 7.83 | 14.23 | 0.646 | 0.903 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu riêng khung 4H → 2 | 91.08 | 39.7% | 0.304 | 13.99 | 6.51 | 0.319 | 0.292 | -10.69 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Ngưỡng điểm vào kèo → 77 | 83.27 | 44.2% | 0.566 | 10.2 | 8.16 | 0.474 | 0.678 | -9.16 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Coin phải mạnh hơn BTC trong N ngày → 14 | 75.35 | 48% | 0.613 | 9.6 | 7.85 | 0.53 | 0.705 | -17.42 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Momentum (/100) → 21 | 111.61 | 49.6% | 0.815 | 8.39 | 13.3 | 0.614 | 1.051 | -8.91 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Momentum (/100) → 25 | 94.39 | 45.9% | 0.594 | 9.35 | 10.1 | 0.553 | 0.632 | -11.23 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: BOS → 1 | 112.69 | 52.8% | 0.783 | 7.54 | 14.95 | 0.635 | 0.952 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Số TP tối đa → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 | 161.32 | 38.9% | 0.56 | 18.35 | 8.79 | 0.425 | 0.695 | -13.17 |  |

### Vòng 557 — ngẫu nhiên nhiều thông số · mốc: tổng 112.67R, win 53.1%, rủi ro tụt vốn 7.69R, lời÷rủi ro 14.65

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 100.08 | 50.7% | 0.676 | 8.47 | 11.82 | 0.535 | 0.842 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 111.57 | 50% | 0.734 | 8.46 | 13.19 | 0.601 | 0.882 | -10.69 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 27.78 | 55.4% | 0.177 | 6.45 | 4.31 | 0.212 | 0.143 | -10.3 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 92.31 | 47.5% | 0.577 | 10.49 | 8.8 | 0.667 | 0.503 | -7.19 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Fib sóng 4 → 0.938 | 69.99 | 46.4% | 0.56 | 9.61 | 7.28 | 0.46 | 0.665 | -8.96 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Trọng số phần SL (/100) → 9 + Điểm tối thiểu của vùng đặt SL → 2 | 104.77 | 51.7% | 0.713 | 8.34 | 12.56 | 0.643 | 0.787 | -8.34 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 1D → 2 | 113.25 | 44.6% | 0.615 | 10.04 | 11.28 | 0.751 | 0.494 | -8.19 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Lệnh chờ hết hạn sau (nến) → 6 | 92.35 | 50.8% | 0.71 | 8.24 | 11.21 | 0.599 | 0.836 | -8.27 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Cổng Dow → CHẶT + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 84.41 | 52.6% | 0.728 | 7.44 | 11.35 | 0.415 | 1 | -11.75 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: EMA 21 → 0.875 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 158.83 | 38.2% | 0.528 | 18.06 | 8.79 | 0.502 | 0.554 | -9.18 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: EMA 21 → 0.875 | 113.28 | 51.7% | 0.792 | 8.02 | 14.12 | 0.701 | 0.89 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 106.53 | 51.4% | 0.73 | 8.16 | 13.06 | 0.577 | 0.905 | -11.06 |  |
