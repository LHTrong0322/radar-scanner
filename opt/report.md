# Tối ưu tự động (chạy liên tục) — vòng 414

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 4638 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 47.2% | 102.69R | 0.638 | 5.74R | 9.54R | 10.76 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 146 | 53.4% | 128.33R | 0.879 | 6.15R | 7.3R | 17.58 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 29 | 51.7% | 30.98R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 107 | 54.2% | 89.62R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 47.2% | 102.69R | 9.54R | 10.76 | 32 | 12.5% | -14.03R |
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

### Vòng 414 — ngẫu nhiên nhiều thông số · mốc: tổng 128.33R, win 53.4%, rủi ro tụt vốn 7.3R, lời÷rủi ro 17.58

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Trọng số phần Trend (/100) → 19 + Cộng thêm ngưỡng điểm khung 1W → -1 | 127.36 | 52.7% | 0.861 | 7.44 | 17.12 | 0.763 | 0.973 | -9.66 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 122.34 | 49.1% | 0.76 | 9.27 | 13.2 | 0.642 | 0.902 | -8.12 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 116.12 | 51.7% | 0.779 | 7.78 | 14.93 | 0.668 | 0.915 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 108.96 | 51% | 0.741 | 7.98 | 13.65 | 0.746 | 0.736 | -9.25 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: HVN cố định → 0.563 | 31.52 | 57.3% | 0.201 | 5.65 | 5.58 | 0.244 | 0.159 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + R:R tối thiểu riêng khung 4H → 2 | 131.38 | 41.8% | 0.404 | 12.15 | 10.81 | 0.418 | 0.392 | -12.85 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 112.4 | 48.1% | 0.721 | 9.13 | 12.31 | 0.701 | 0.74 | -9.99 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 | 99.57 | 51.4% | 0.673 | 8.14 | 12.23 | 0.606 | 0.751 | -9.43 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 113 | 49.7% | 0.729 | 9.14 | 12.36 | 0.622 | 0.862 | -7.08 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 70.41 | 46.9% | 0.542 | 9.63 | 7.31 | 0.433 | 0.665 | -4.82 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Fib sóng 4 → 1.56 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 115.54 | 52.7% | 0.781 | 7.7 | 15.01 | 0.586 | 1.016 | -11.06 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: HVN anchored → 0.188 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Elliott (/100) → 10 | 94.92 | 50% | 0.818 | 8 | 11.87 | 0.718 | 0.937 | -16.13 |  |

### Vòng 413 — ngẫu nhiên nhiều thông số · mốc: tổng 133.79R, win 53.7%, rủi ro tụt vốn 7.32R, lời÷rủi ro 18.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 120.93 | 51% | 0.78 | 8.65 | 13.98 | 0.641 | 0.949 | -8.48 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + R:R tối thiểu riêng khung 4H → 2 | 123.33 | 42.6% | 0.373 | 12.34 | 9.99 | 0.323 | 0.417 | -7.86 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 124.35 | 51% | 0.858 | 7.61 | 16.34 | 0.675 | 1.058 | -9.63 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Ngưỡng điểm vào kèo → 77 + Trọng số phần Momentum (/100) → 21 | 114.43 | 51.4% | 0.784 | 7.59 | 15.08 | 0.624 | 0.953 | -9.66 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + SL tối đa (% Entry) → 0.425 | 104.14 | 39.6% | 0.401 | 15.45 | 6.74 | 0.336 | 0.461 | -8.87 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Mức RSI 30/70 → 1.13 | 132.67 | 53.4% | 0.896 | 7.36 | 18.03 | 0.74 | 1.08 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Cổng Dow → TẮT + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 153.05 | 45.1% | 0.712 | 10.48 | 14.6 | 0.648 | 0.772 | -14.91 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trọng số phần Divergence (/100) → 9 + Trọng số phần SL (/100) → 7 + R:R tối thiểu tới TP1 → 2.38 | 99.37 | 46.7% | 0.602 | 9.03 | 11 | 0.538 | 0.664 | -11.94 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Số TP tối đa → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 + Cổng Dow → CHẶT | 62.82 | 49.5% | 0.635 | 8.08 | 7.77 | 0.314 | 0.948 | -9.2 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + % chốt ở TP1 → 0.287 | 133.49 | 53.7% | 0.908 | 7.1 | 18.8 | 0.773 | 1.06 | -9.64 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.05 | 116.71 | 50.3% | 0.794 | 8.1 | 14.41 | 0.702 | 0.901 | -11.78 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần SL (/100) → 7 | 121.74 | 52.7% | 0.823 | 7.54 | 16.15 | 0.608 | 1.068 | -8.34 |  |

### Vòng 412 — ngẫu nhiên nhiều thông số · mốc: tổng 122.24R, win 53.4%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.88

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu riêng khung 4H → 2 | 108.6 | 41.1% | 0.351 | 13.39 | 8.11 | 0.338 | 0.363 | -14.08 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Trọng số phần Momentum (/100) → 21 | 122.13 | 53.1% | 0.831 | 7.39 | 16.53 | 0.615 | 1.081 | -9.67 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: BOS → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 115.69 | 50% | 0.838 | 8.03 | 14.41 | 0.603 | 1.119 | -8.91 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + SL tối đa (% Entry) → 0.425 | 120.57 | 52.4% | 0.82 | 7.48 | 16.12 | 0.614 | 1.06 | -9.66 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Cộng thêm ngưỡng điểm khung 1W → 2 | 115.69 | 50% | 0.838 | 8.03 | 14.41 | 0.603 | 1.119 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: POC volume profile cố định → 0.688 | 117.03 | 51.7% | 0.796 | 7.64 | 15.32 | 0.564 | 1.066 | -9.48 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: MACD cắt lên Signal → 0.563 | 119.48 | 53.2% | 0.847 | 7.28 | 16.41 | 0.606 | 1.122 | -9.7 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần R:R (/100) → 28 + Điểm vùng: HVN anchored → 0.188 | 35.13 | 39.8% | 0.399 | 11.16 | 3.15 | 0.317 | 0.498 | -6.21 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Break mây Ichimoku → 1 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 107.09 | 49.7% | 0.739 | 8.13 | 13.17 | 0.577 | 0.906 | -9.73 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 63.31 | 44.1% | 0.621 | 9.79 | 6.47 | 0.332 | 0.972 | -8.41 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Cộng thêm ngưỡng điểm khung 1D → 4 + % chốt ở TP1 → 0.307 | 115.22 | 51.4% | 0.789 | 8.07 | 14.28 | 0.595 | 1.018 | -8.65 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Mức RSI 30/70 → 0.875 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 80.3 | 45.9% | 0.467 | 10.8 | 7.44 | 0.525 | 0.407 | -10.52 |  |

### Vòng 411 — ngẫu nhiên nhiều thông số · mốc: tổng 119.02R, win 53.1%, rủi ro tụt vốn 7.39R, lời÷rủi ro 16.11

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: HVN anchored → 0.313 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 120.68 | 48.7% | 0.774 | 8.38 | 14.4 | 0.7 | 0.857 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Fib sóng 4 → 0.938 | 107.58 | 49.4% | 0.672 | 9.03 | 11.91 | 0.499 | 0.869 | -9.4 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần Divergence (/100) → 12 | 114.54 | 50.7% | 0.785 | 7.72 | 14.84 | 0.503 | 1.098 | -9.52 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: HVN cố định → 0.563 + Đệm SL riêng khung 4H (ATR) → 0.3 | 157.95 | 38.6% | 0.539 | 18.69 | 8.45 | 0.38 | 0.704 | -10.64 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Coin phải mạnh hơn BTC trong N ngày → 14 + Cộng thêm ngưỡng điểm khung 1D → 7 | 63.26 | 46.9% | 0.56 | 9.73 | 6.5 | 0.475 | 0.656 | -13.23 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + R:R tối thiểu riêng khung 1D → 2 | 110.63 | 47.1% | 0.651 | 8.88 | 12.46 | 0.621 | 0.679 | -7.92 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 74.04 | 45.8% | 0.692 | 9.07 | 8.16 | 0.484 | 0.939 | -6.48 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + R:R tối thiểu riêng khung 1W → 2 | 110.67 | 51.7% | 0.743 | 7.56 | 14.64 | 0.618 | 0.872 | -10.69 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Xác nhận khung nhỏ (A2) → W + Cộng điểm phân kỳ dương ẩn → 3.5 | 86.5 | 39.1% | 0.338 | 16.8 | 5.15 | 0.329 | 0.347 | -6.5 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 1 | 73.39 | 35.2% | 0.319 | 21.4 | 3.43 | 0.159 | 0.513 | -1.26 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + % chốt ở TP1 → 0.307 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 99.79 | 50.7% | 0.683 | 8.03 | 12.43 | 0.61 | 0.768 | -9.26 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 109.67 | 49.7% | 0.756 | 8.38 | 13.09 | 0.487 | 1.045 | -10.51 |  |

### Vòng 410 — ngẫu nhiên nhiều thông số · mốc: tổng 122.24R, win 53.4%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.91

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 | 113.4 | 37.9% | 0.387 | 19.11 | 5.93 | 0.449 | 0.33 | -27.74 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Cộng điểm phân kỳ dương ẩn → 3.5 | 122.13 | 53.1% | 0.831 | 7.39 | 16.53 | 0.615 | 1.081 | -9.67 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: BOS → 1 + Số TP tối đa → 2 | 119.2 | 51.7% | 0.822 | 7.45 | 16 | 0.6 | 1.073 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Đệm SL riêng khung 1D (ATR) → 0.3 | 120.45 | 48% | 0.704 | 10.04 | 12 | 0.735 | 0.673 | -0.97 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 | 89.11 | 52% | 0.724 | 7.9 | 11.28 | 0.53 | 0.95 | -17.09 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 + R:R tối thiểu tới TP1 → 2.63 | 98.26 | 51.3% | 0.826 | 7.77 | 12.65 | 0.521 | 1.168 | -10.45 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 | 118.63 | 53.3% | 0.791 | 7.88 | 15.05 | 0.624 | 0.971 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: EMA 50 → 1.13 + % chốt ở TP1 → 0.287 | 115.24 | 51.4% | 0.789 | 7.55 | 15.26 | 0.58 | 1.043 | -8.62 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Số TP tối đa → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 82.28 | 45.7% | 0.502 | 10.11 | 8.14 | 0.369 | 0.631 | -9.82 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cổng Dow → TẮT | 52.97 | 37.6% | 0.212 | 17.57 | 3.01 | 0.293 | 0.129 | -14.79 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Xác nhận khung nhỏ (A2) → W | 95.48 | 38% | 0.359 | 16.77 | 5.69 | 0.334 | 0.383 | -3.92 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 68.25 | 40% | 0.414 | 12.85 | 5.31 | 0.445 | 0.379 | -9.39 |  |

### Vòng 409 — ngẫu nhiên nhiều thông số · mốc: tổng 119.02R, win 53.1%, rủi ro tụt vốn 7.29R, lời÷rủi ro 16.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Break mây Ichimoku → 3 | 108.32 | 49.4% | 0.669 | 9.04 | 11.98 | 0.496 | 0.869 | -9.4 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: HVN cố định → 0.438 | 103.23 | 47.6% | 0.622 | 9.63 | 10.72 | 0.457 | 0.803 | -9.4 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần SL (/100) → 7 | 114.72 | 48.1% | 0.708 | 9.08 | 12.63 | 0.678 | 0.742 | -9.22 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Trọng số phần Trend (/100) → 12 | 118.77 | 52.4% | 0.831 | 7.34 | 16.18 | 0.645 | 1.041 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Trọng số phần Entry (/100) → 28 | 118.83 | 52.7% | 0.814 | 7.49 | 15.87 | 0.614 | 1.05 | -9.66 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Số TP tối đa → 2 + R:R tối thiểu riêng khung 1W → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 | 84.74 | 49.2% | 0.683 | 8.72 | 9.72 | 0.554 | 0.821 | -16.13 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + R:R tối thiểu riêng khung 1D → 2 | 109.37 | 47.1% | 0.643 | 8.87 | 12.33 | 0.616 | 0.669 | -6.9 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Ngưỡng điểm vào kèo → 77 | 29.73 | 56.8% | 0.192 | 6.28 | 4.73 | 0.203 | 0.182 | -10.92 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + R:R tối thiểu tới TP1 → 2.38 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 93.57 | 46.6% | 0.581 | 8.84 | 10.58 | 0.511 | 0.646 | -10.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Xác nhận khung nhỏ (A2) → W | 94.19 | 39.4% | 0.375 | 16.25 | 5.8 | 0.326 | 0.419 | -5.19 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Biên mây Ichimoku → 1.05 + Coin phải mạnh hơn BTC trong N ngày → 14 | 82.42 | 51.1% | 0.611 | 8.93 | 9.23 | 0.468 | 0.788 | -16.93 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Entry (/100) → 33 + Đệm SL riêng khung 4H (ATR) → 0.3 | 155.97 | 37.6% | 0.51 | 20.19 | 7.73 | 0.507 | 0.512 | -10.35 |  |

### Vòng 408 — ngẫu nhiên nhiều thông số · mốc: tổng 122.24R, win 53.4%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.91

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + % chốt ở TP1 → 0.307 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 122.13 | 53.1% | 0.831 | 7.39 | 16.53 | 0.615 | 1.081 | -9.67 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần Elliott (/100) → 6 | 121.29 | 52.7% | 0.82 | 7.43 | 16.32 | 0.614 | 1.055 | -8.34 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Xác nhận khung nhỏ (A2) → W | 91.97 | 37.8% | 0.366 | 16.93 | 5.43 | 0.346 | 0.385 | -5.31 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Khung lớn phải tăng (trend ≥) → 0.375 | 87.08 | 50% | 0.738 | 8.16 | 10.67 | 0.489 | 1.024 | -16.13 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: HVN anchored → 0.313 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 120.48 | 52.7% | 0.825 | 7.37 | 16.35 | 0.602 | 1.082 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Khung lớn phải tăng (trend ≥) → 0.375 | 122.64 | 44.7% | 0.543 | 10.72 | 11.44 | 0.576 | 0.51 | -11.7 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: HVN cố định → 0.438 + Ngưỡng điểm vào kèo → 74 | 84.01 | 46.7% | 0.509 | 10.35 | 8.12 | 0.392 | 0.625 | -9.83 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Mức MACD → 1.13 | 119.87 | 52.1% | 0.821 | 7.56 | 15.86 | 0.602 | 1.073 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + R:R tối thiểu riêng khung 1W → 2 + % chốt ở TP1 → 0.307 + Trọng số phần Elliott (/100) → 10 | 109.67 | 50% | 0.741 | 8.09 | 13.56 | 0.599 | 0.883 | -12.11 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: EMA 50 → 1.13 | 115.2 | 51% | 0.784 | 8.12 | 14.19 | 0.574 | 1.041 | -8.64 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: EMA 200 → 1 | 113.74 | 50.3% | 0.734 | 8.38 | 13.57 | 0.585 | 0.919 | -4.67 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 67.6 | 44.7% | 0.55 | 9.94 | 6.8 | 0.389 | 0.723 | -5.69 |  |

### Vòng 407 — ngẫu nhiên nhiều thông số · mốc: tổng 119.02R, win 53.1%, rủi ro tụt vốn 7.3R, lời÷rủi ro 16.30

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 93.52 | 43.4% | 0.514 | 10.6 | 8.82 | 0.609 | 0.412 | -12.09 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + R:R tối thiểu riêng khung 1W → 2 | 107.58 | 50.3% | 0.722 | 7.87 | 13.67 | 0.628 | 0.818 | -10.69 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 145.24 | 38.2% | 0.491 | 19.46 | 7.46 | 0.37 | 0.611 | -13.45 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Xác nhận khung nhỏ (A2) → W + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 90.09 | 38.3% | 0.345 | 17.15 | 5.25 | 0.298 | 0.39 | -8.35 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 114.63 | 51.4% | 0.785 | 7.63 | 15.02 | 0.574 | 1.034 | -9.48 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Lệnh chờ hết hạn sau (nến) → 8 | 131.41 | 50% | 0.764 | 8.32 | 15.79 | 0.723 | 0.811 | -7.59 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Biên mây Ichimoku → 1.35 | 115.5 | 51.7% | 0.786 | 7.75 | 14.9 | 0.602 | 0.994 | -7.32 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Break mây Ichimoku → 1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 118.2 | 48.7% | 0.748 | 8.32 | 14.21 | 0.715 | 0.787 | -11.6 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: EMA 200 → 3 | 108.27 | 50.7% | 0.752 | 7.91 | 13.69 | 0.511 | 1.021 | -9.62 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + R:R tối thiểu riêng khung 4H → 2 + Cổng Dow → CHẶT | 56.68 | 41.2% | 0.251 | 12.4 | 4.57 | 0.224 | 0.273 | -7.13 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: POC anchored → 4 + Số TP tối đa → 2 + % chốt ở TP1 → 0.287 | 99.06 | 48.3% | 0.693 | 9.36 | 10.58 | 0.535 | 0.844 | -4.45 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Trọng số phần Elliott (/100) → 10 | 117.5 | 52.4% | 0.822 | 7.37 | 15.94 | 0.64 | 1.028 | -9.66 |  |

### Vòng 406 — ngẫu nhiên nhiều thông số · mốc: tổng 119.02R, win 53.1%, rủi ro tụt vốn 7.3R, lời÷rủi ro 16.30

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu riêng khung 4H → 2 | 96.46 | 40.3% | 0.333 | 13.41 | 7.19 | 0.308 | 0.353 | -9.69 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + % chốt ở TP1 → 0.307 + Cộng thêm ngưỡng điểm khung 1W → 2 + R:R tối thiểu riêng khung 1W → 2 | 77.59 | 50% | 0.647 | 8.1 | 9.58 | 0.329 | 0.898 | -11.76 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 97.26 | 38.9% | 0.378 | 16.4 | 5.93 | 0.308 | 0.444 | -7.86 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Ngưỡng điểm vào kèo → 74 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 106.37 | 38.8% | 0.35 | 15.76 | 6.75 | 0.331 | 0.367 | -9.66 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 | 13.21 | 48% | 0.048 | 14.07 | 0.94 | 0.101 | -0.005 | -10.68 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Momentum (/100) → 21 | 158.69 | 38.8% | 0.54 | 18.31 | 8.67 | 0.384 | 0.698 | -13.36 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Ngưỡng điểm vào kèo → 74 | 112.75 | 50% | 0.762 | 8.33 | 13.54 | 0.493 | 1.053 | -9.52 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + R:R tối thiểu riêng khung 4H → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 86.06 | 40.9% | 0.265 | 14.56 | 5.91 | 0.338 | 0.197 | -14.27 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 | 109.37 | 47.1% | 0.643 | 8.94 | 12.23 | 0.616 | 0.669 | -7.92 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 | 100.88 | 45.1% | 0.554 | 10.53 | 9.58 | 0.447 | 0.655 | -6.13 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 116.31 | 49.7% | 0.76 | 8.35 | 13.93 | 0.584 | 0.963 | -10.69 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: POC anchored → 2 + R:R tối thiểu tới TP1 → 2.38 | 98.51 | 45.1% | 0.563 | 9.88 | 9.97 | 0.572 | 0.554 | -10.51 |  |

### Vòng 405 — ngẫu nhiên nhiều thông số · mốc: tổng 119.02R, win 53.1%, rủi ro tụt vốn 7.29R, lời÷rủi ro 16.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Momentum (/100) → 21 | 117.71 | 52.4% | 0.801 | 7.53 | 15.63 | 0.593 | 1.048 | -9.66 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Break mây Ichimoku → 1 | 104.89 | 47.4% | 0.672 | 9.09 | 11.54 | 0.544 | 0.814 | -12.05 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 108.5 | 52.1% | 0.743 | 7.8 | 13.91 | 0.579 | 0.926 | -11.78 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + SL tối đa (% Entry) → 0.35 + Điểm vùng: Mức MACD → 1.13 | 106.36 | 48.7% | 0.673 | 9.09 | 11.7 | 0.494 | 0.877 | -9.4 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cộng thêm ngưỡng điểm khung 1W → -1 | 112.04 | 48.4% | 0.696 | 9.55 | 11.73 | 0.499 | 0.934 | -8.11 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 98.51 | 48% | 0.657 | 9.82 | 10.03 | 0.452 | 0.904 | -6.06 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: EMA 200 → 1 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 121.31 | 51% | 0.773 | 7.96 | 15.24 | 0.625 | 0.943 | -9.82 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Momentum (/100) → 21 + Cổng Dow → TẮT | 141.03 | 43.9% | 0.632 | 10.92 | 12.91 | 0.64 | 0.624 | -17.49 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 118.02 | 52.7% | 0.808 | 7.58 | 15.57 | 0.604 | 1.05 | -9.66 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 1D (ATR) → 0.3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 119.68 | 37% | 0.487 | 19.26 | 6.21 | 0.497 | 0.478 | -17.49 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: POC volume profile cố định → 0.688 | 31.25 | 58.6% | 0.199 | 5.81 | 5.38 | 0.235 | 0.164 | -11.38 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 127.05 | 50.7% | 0.836 | 7.99 | 15.9 | 0.81 | 0.866 | -10.24 |  |
