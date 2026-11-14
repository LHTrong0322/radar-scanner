# Tối ưu tự động (chạy liên tục) — vòng 256

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 2742 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.9% | 101.67R | 0.628 | 5.74R | 9.83R | 10.34 | 33 | 12.1% | -15.05R | -0.456 | 15.05R |
| **Tốt nhất** | 146 | 52.7% | 126.35R | 0.865 | 6.15R | 7.52R | 16.80 | 29 | 17.2% | -10.68R | -0.368 | 10.68R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 29 | 51.7% | 30.98R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 107 | 53.3% | 87.64R | 22 | 22.7% | -4.87R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.9% | 101.67R | 9.83R | 10.34 | 33 | 12.1% | -15.05R |
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

### Vòng 256 — ngẫu nhiên nhiều thông số · mốc: tổng 126.35R, win 52.7%, rủi ro tụt vốn 7.52R, lời÷rủi ro 16.80

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Cổng Dow → TẮT | 134.13 | 41.4% | 0.539 | 13.17 | 10.18 | 0.513 | 0.564 | -16.57 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + % chốt ở TP1 → 0.287 | 126.36 | 52.7% | 0.865 | 7.53 | 16.78 | 0.737 | 1.017 | -10.66 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + R:R tối thiểu tới TP1 → 2.63 | 71.49 | 44.4% | 0.473 | 11.64 | 6.14 | 0.346 | 0.59 | -13.07 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 107.02 | 49.3% | 0.713 | 8.33 | 12.85 | 0.666 | 0.768 | -11.97 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: EMA 21 → 1.13 | 121.92 | 51.3% | 0.792 | 7.79 | 15.65 | 0.701 | 0.895 | -11.02 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Trend (/100) → 12 | 107.88 | 46.3% | 0.666 | 10.25 | 10.52 | 0.633 | 0.697 | -7.38 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cộng thêm ngưỡng điểm khung 1D → 4 + Trọng số phần R:R (/100) → 33 | 70.42 | 46.6% | 0.538 | 9.61 | 7.33 | 0.426 | 0.662 | -5.84 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 117.75 | 49.3% | 0.775 | 8.78 | 13.41 | 0.669 | 0.902 | -8.1 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Biên mây Ichimoku → 1.05 | 105.88 | 45.8% | 0.63 | 9.38 | 11.29 | 0.734 | 0.538 | -11.07 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 | 92.99 | 47.9% | 0.637 | 9.37 | 9.92 | 0.453 | 0.826 | -9.14 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Xác nhận khung nhỏ (A2) → W | 93.69 | 38.6% | 0.362 | 16.38 | 5.72 | 0.356 | 0.367 | -6.32 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Mức RSI 30/70 → 0.875 | 127.39 | 51.2% | 0.796 | 8.58 | 14.85 | 0.654 | 0.974 | -10.68 |  |

### Vòng 255 — ngẫu nhiên nhiều thông số · mốc: tổng 126.35R, win 52.7%, rủi ro tụt vốn 7.54R, lời÷rủi ro 16.76

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 103.07 | 50.3% | 0.683 | 8.65 | 11.92 | 0.601 | 0.775 | -14.2 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: HVN anchored → 0.188 | 99.57 | 51.4% | 0.673 | 8.38 | 11.88 | 0.606 | 0.751 | -10.45 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 83.35 | 45.5% | 0.758 | 8.87 | 9.4 | 0.595 | 0.968 | -16.64 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: MACD cắt lên Signal → 0.438 | 116.55 | 49.4% | 0.738 | 9.25 | 12.6 | 0.566 | 0.948 | -8.1 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Mức MACD → 0.875 + Trọng số phần Divergence (/100) → 9 | 118.17 | 51.4% | 0.821 | 8.01 | 14.75 | 0.705 | 0.953 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + R:R tối thiểu riêng khung 1W → 2 + Ngưỡng điểm vào kèo → 77 | 103.62 | 49.3% | 0.7 | 8.13 | 12.75 | 0.619 | 0.779 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Mức MACD → 0.875 + Trọng số phần Momentum (/100) → 21 | 101.98 | 45.6% | 0.596 | 9.76 | 10.45 | 0.552 | 0.64 | -8.95 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 109.36 | 51% | 0.734 | 8.52 | 12.84 | 0.719 | 0.751 | -10.45 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Lệnh chờ hết hạn sau (nến) → 8 | 88.29 | 44.6% | 0.505 | 10.02 | 8.81 | 0.453 | 0.56 | -14.15 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: BOS → 1 | 89.19 | 38.8% | 0.346 | 16.85 | 5.29 | 0.331 | 0.36 | -6.33 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Biên mây Ichimoku → 1.35 | 123.38 | 51.4% | 0.834 | 7.77 | 15.88 | 0.704 | 0.986 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Số TP tối đa → 2 + % chốt ở TP1 → 0.307 + Điểm vùng: Mức MACD → 0.875 | 109.31 | 45.8% | 0.651 | 9.37 | 11.67 | 0.652 | 0.649 | -8.96 |  |

### Vòng 254 — ngẫu nhiên nhiều thông số · mốc: tổng 126.35R, win 52.7%, rủi ro tụt vốn 7.69R, lời÷rủi ro 16.43

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Cộng thêm ngưỡng điểm khung 1W → -1 | 123.61 | 51% | 0.787 | 8.34 | 14.82 | 0.658 | 0.952 | -10.95 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 78.46 | 46.2% | 0.754 | 8.83 | 8.89 | 0.62 | 0.924 | -6.49 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 110.08 | 48.1% | 0.815 | 8.14 | 13.52 | 0.642 | 0.991 | -12.74 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + R:R tối thiểu tới TP1 → 2.38 + Cộng thêm ngưỡng điểm khung 1D → 7 | 96.48 | 46.6% | 0.592 | 8.94 | 10.79 | 0.519 | 0.667 | -12 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Trọng số phần Divergence (/100) → 12 | 114.25 | 50.3% | 0.747 | 8.08 | 14.14 | 0.663 | 0.841 | -9.66 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: EMA 50 → 1.13 + R:R tối thiểu riêng khung 4H → 2 + Trọng số phần SL (/100) → 7 | 124.75 | 42.2% | 0.408 | 12.16 | 10.26 | 0.439 | 0.379 | -8.24 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm tối thiểu của vùng đặt SL → 4 | 79.86 | 35.1% | 0.326 | 18.43 | 4.33 | 0.324 | 0.328 | -7.15 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 4H → 2 | 25.85 | 56.4% | 0.173 | 6.51 | 3.97 | 0.202 | 0.147 | -9.23 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 105.92 | 45.2% | 0.683 | 9.49 | 11.16 | 0.66 | 0.713 | -12.09 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 100.82 | 33.6% | 0.255 | 25.53 | 3.95 | 0.19 | 0.306 | -25.05 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cổng Dow → CHẶT | 76.93 | 48.5% | 0.574 | 8.31 | 9.26 | 0.415 | 0.685 | -9.34 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: POC anchored → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 | 104.59 | 48.6% | 0.726 | 8.81 | 11.87 | 0.553 | 0.891 | -10.7 |  |

### Vòng 253 — ngẫu nhiên nhiều thông số · mốc: tổng 126.35R, win 52.7%, rủi ro tụt vốn 7.56R, lời÷rủi ro 16.71

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 76.26 | 43.7% | 0.483 | 12.33 | 6.18 | 0.282 | 0.689 | -13.07 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 126.35 | 52.7% | 0.865 | 7.56 | 16.71 | 0.737 | 1.016 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Xác nhận khung nhỏ (A2) → W | 85.7 | 38% | 0.336 | 17.33 | 4.95 | 0.331 | 0.341 | -6.32 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: EMA 200 → 3 | 115.41 | 50% | 0.79 | 7.95 | 14.52 | 0.618 | 0.988 | -10.65 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 23.14 | 53.8% | 0.194 | 6.35 | 3.64 | 0.27 | 0.112 | -9.41 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1W → 2 | 118.24 | 40.6% | 0.381 | 13.12 | 9.01 | 0.42 | 0.349 | -10.82 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: POC anchored → 2 | 113.7 | 50.3% | 0.743 | 8.35 | 13.62 | 0.674 | 0.819 | -8.34 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Mức MACD → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 105.35 | 49.3% | 0.775 | 8.25 | 12.77 | 0.676 | 0.896 | -9.29 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Số TP tối đa → 2 | 123.96 | 52.7% | 0.849 | 7.56 | 16.4 | 0.698 | 1.027 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Fib sóng 4 → 0.938 | 111.58 | 50% | 0.754 | 8.22 | 13.57 | 0.699 | 0.81 | -12.69 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.05 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 108.52 | 49% | 0.738 | 8.72 | 12.44 | 0.677 | 0.809 | -11.49 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: BOS → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 68.63 | 46.1% | 0.536 | 9.88 | 6.95 | 0.418 | 0.662 | -5.84 |  |

### Vòng 252 — ngẫu nhiên nhiều thông số · mốc: tổng 126.35R, win 52.7%, rủi ro tụt vốn 7.58R, lời÷rủi ro 16.67

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 73.66 | 50.8% | 0.594 | 8.72 | 8.45 | 0.371 | 0.817 | -9.19 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: EMA 21 → 1.13 | 117.93 | 50% | 0.728 | 8.23 | 14.33 | 0.639 | 0.839 | -12.62 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu riêng khung 4H → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 113.95 | 40.6% | 0.356 | 13.31 | 8.56 | 0.355 | 0.357 | -11.14 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 21 → 0.875 | 99 | 50% | 0.678 | 8.42 | 11.76 | 0.648 | 0.713 | -10.43 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Cổng Dow → TẮT | 112.13 | 41.8% | 0.526 | 12.48 | 8.98 | 0.547 | 0.506 | -17.37 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: POC volume profile cố định → 0.813 | 133.12 | 41.9% | 0.413 | 12.15 | 10.96 | 0.435 | 0.396 | -8.8 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: HVN cố định → 0.563 | 122.87 | 50.7% | 0.83 | 7.89 | 15.57 | 0.718 | 0.973 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Xác nhận khung nhỏ (A2) → W + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 77.13 | 36.3% | 0.311 | 17.75 | 4.35 | 0.362 | 0.259 | -7.44 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần Trend (/100) → 12 | 113.95 | 50% | 0.75 | 8.92 | 12.77 | 0.656 | 0.862 | -8.1 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: HVN anchored → 0.313 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 101.11 | 44.4% | 0.661 | 10.1 | 10.01 | 0.602 | 0.736 | -9.54 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: EMA 200 → 3 | 115.6 | 50.3% | 0.797 | 7.95 | 14.54 | 0.629 | 0.988 | -10.65 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần Momentum (/100) → 21 | 125.66 | 51.4% | 0.873 | 7.69 | 16.34 | 0.76 | 1.006 | -13.94 |  |

### Vòng 251 — ngẫu nhiên nhiều thông số · mốc: tổng 126.35R, win 52.7%, rủi ro tụt vốn 7.58R, lời÷rủi ro 16.67

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 98.15 | 44.5% | 0.598 | 10.2 | 9.62 | 0.458 | 0.717 | -9.76 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + R:R tối thiểu riêng khung 1W → 2 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 106.67 | 51% | 0.716 | 8.13 | 13.12 | 0.595 | 0.841 | -11.72 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Số TP tối đa → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Biên mây Ichimoku → 1.05 | 102.87 | 49.1% | 0.647 | 9.89 | 10.4 | 0.552 | 0.749 | -8.58 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 93.28 | 46.7% | 0.622 | 9.68 | 9.64 | 0.475 | 0.814 | -11.51 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần R:R (/100) → 28 | 113.95 | 50% | 0.75 | 8.88 | 12.83 | 0.656 | 0.862 | -8.1 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Khung lớn phải tăng (trend ≥) → 0.425 | 84.13 | 37.7% | 0.341 | 17.38 | 4.84 | 0.284 | 0.395 | -5.22 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: BOS → 1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Đệm SL riêng khung 4H (ATR) → 0.3 | 182.7 | 39.3% | 0.609 | 17.55 | 10.41 | 0.504 | 0.717 | -11.95 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + R:R tối thiểu riêng khung 4H → 2 | 133.36 | 41.9% | 0.414 | 11.77 | 11.33 | 0.434 | 0.398 | -9.82 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Lệnh chờ hết hạn sau (nến) → 8 | 118.53 | 50.3% | 0.745 | 8.42 | 14.08 | 0.63 | 0.889 | -13.24 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Đệm SL riêng khung 1W (ATR) → 0.3 | 102.04 | 48.9% | 0.745 | 8.16 | 12.5 | 0.495 | 0.984 | -11.73 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: POC anchored → 2 | 92.85 | 48.3% | 0.649 | 9.4 | 9.88 | 0.551 | 0.754 | -12.56 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Entry (/100) → 33 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 187.48 | 39.7% | 0.621 | 17.37 | 10.79 | 0.507 | 0.736 | -10.02 |  |

### Vòng 250 — ngẫu nhiên nhiều thông số · mốc: tổng 126.35R, win 52.7%, rủi ro tụt vốn 7.52R, lời÷rủi ro 16.80

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 18.86 | 53% | 0.114 | 8.45 | 2.23 | 0.165 | 0.063 | -9.57 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần SL (/100) → 9 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 100.26 | 47.8% | 0.623 | 9.46 | 10.6 | 0.644 | 0.597 | -13.01 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 127.24 | 50.4% | 0.915 | 7.76 | 16.4 | 0.747 | 1.119 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Cộng thêm ngưỡng điểm khung 1W → -1 | 115.33 | 50% | 0.779 | 8.19 | 14.08 | 0.662 | 0.925 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 122.32 | 52.4% | 0.832 | 7.7 | 15.89 | 0.74 | 0.943 | -10.68 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 124.61 | 51% | 0.848 | 7.75 | 16.08 | 0.801 | 0.897 | -11.03 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 112.66 | 49.7% | 0.766 | 8.03 | 14.03 | 0.716 | 0.819 | -11.72 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Mức MACD → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.38 | 56.6% | 0.185 | 6.36 | 4.62 | 0.243 | 0.129 | -10.92 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 113.3 | 49.7% | 0.731 | 9.14 | 12.4 | 0.609 | 0.883 | -8.1 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 122.06 | 52.4% | 0.842 | 7.44 | 16.41 | 0.718 | 0.986 | -10.68 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: EMA 21 → 1.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 185.7 | 39.3% | 0.603 | 17.53 | 10.59 | 0.525 | 0.686 | -12.36 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Elliott (/100) → 6 + Trọng số phần Trend (/100) → 12 | 112.14 | 52% | 0.758 | 7.94 | 14.12 | 0.763 | 0.751 | -10.45 |  |

### Vòng 249 — ngẫu nhiên nhiều thông số · mốc: tổng 131.08R, win 53.1%, rủi ro tụt vốn 7.34R, lời÷rủi ro 17.86

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 113.47 | 42.1% | 0.367 | 12.04 | 9.42 | 0.341 | 0.39 | -4.59 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần Momentum (/100) → 21 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 108.14 | 49.3% | 0.711 | 8.72 | 12.4 | 0.623 | 0.815 | -10.32 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + R:R tối thiểu riêng khung 1D → 2 | 115.57 | 45.7% | 0.66 | 9.55 | 12.1 | 0.671 | 0.65 | -11.61 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 120.28 | 48.6% | 0.872 | 8.45 | 14.23 | 0.676 | 1.105 | -12.18 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 129.08 | 45.1% | 0.554 | 11.04 | 11.69 | 0.625 | 0.481 | -9.85 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 30.48 | 57.7% | 0.195 | 5.92 | 5.15 | 0.225 | 0.167 | -10.92 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: HVN cố định → 0.563 | 130.11 | 52.3% | 0.873 | 7.5 | 17.35 | 0.737 | 1.026 | -10.68 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 131.08 | 53.1% | 0.892 | 7.34 | 17.86 | 0.737 | 1.071 | -10.68 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần Trend (/100) → 12 | 109.22 | 44.1% | 0.642 | 10.94 | 9.98 | 0.575 | 0.705 | -7.39 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trọng số phần Divergence (/100) → 12 + Cổng Dow → CHẶT + Trọng số phần Momentum (/100) → 25 | 86.77 | 52.6% | 0.761 | 6.97 | 12.45 | 0.348 | 1.12 | -11.74 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + SL tối đa (% Entry) → 0.425 | 33.59 | 38.9% | 0.373 | 11.32 | 2.97 | 0.317 | 0.438 | -6.21 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Break mây Ichimoku → 1 + Khung lớn phải tăng (trend ≥) → 0.425 + Cộng thêm ngưỡng điểm khung 1W → 2 | 116.05 | 47.6% | 0.8 | 8.6 | 13.49 | 0.689 | 0.919 | -11.25 |  |

### Vòng 248 — ngẫu nhiên nhiều thông số · mốc: tổng 131.08R, win 53.1%, rủi ro tụt vốn 7.48R, lời÷rủi ro 17.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Trend (/100) → 12 | 99.64 | 50.4% | 0.852 | 7.76 | 12.84 | 0.718 | 1.007 | -17.15 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Lệnh chờ hết hạn sau (nến) → 8 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 124.36 | 48.5% | 0.745 | 8.93 | 13.93 | 0.681 | 0.823 | -11.84 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Đệm SL riêng khung 4H (ATR) → 0.3 | 190.96 | 39.9% | 0.63 | 17.08 | 11.18 | 0.502 | 0.761 | -15.48 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trọng số phần Momentum (/100) → 21 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 73.96 | 46.2% | 0.56 | 9.72 | 7.61 | 0.407 | 0.728 | -5.84 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Lệnh chờ hết hạn sau (nến) → 8 | 17.19 | 37.6% | 0.202 | 12.11 | 1.42 | 0.11 | 0.327 | -9.51 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Entry (/100) → 28 + R:R tối thiểu tới TP1 → 2.63 | 111.2 | 51.2% | 0.919 | 7.74 | 14.37 | 0.71 | 1.154 | -13.05 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Trend (/100) → 19 | 118.83 | 52.1% | 0.837 | 7.74 | 15.35 | 0.626 | 1.08 | -12.54 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Cổng Dow → TẮT | 190.34 | 36.3% | 0.407 | 23.46 | 8.11 | 0.37 | 0.442 | -41.98 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức MACD → 1.13 | 20.27 | 51.8% | 0.124 | 8.01 | 2.53 | 0.154 | 0.096 | -10.26 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Cổng Dow → CHẶT + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Mức RSI 30/70 → 1.13 | 98.13 | 53.5% | 0.861 | 6.9 | 14.22 | 0.535 | 1.144 | -13.03 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + R:R tối thiểu riêng khung 1W → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 121.06 | 48.8% | 0.757 | 8.52 | 14.21 | 0.747 | 0.767 | -13.27 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Số TP tối đa → 2 | 123.01 | 52% | 0.82 | 7.57 | 16.25 | 0.675 | 0.99 | -11.03 |  |

### Vòng 247 — ngẫu nhiên nhiều thông số · mốc: tổng 131.08R, win 53.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 17.57

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 126.34 | 52.6% | 0.831 | 8.05 | 15.69 | 0.716 | 0.96 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 119.5 | 51.4% | 0.807 | 7.48 | 15.98 | 0.685 | 0.952 | -12.42 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: HVN cố định → 0.438 | 130.51 | 51.2% | 0.816 | 8.47 | 15.41 | 0.643 | 1.026 | -10.68 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Cổng Dow → CHẶT + Trọng số phần Momentum (/100) → 21 + Lệnh chờ hết hạn sau (nến) → 8 | 91.27 | 50.4% | 0.719 | 7.83 | 11.66 | 0.414 | 1 | -13.34 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Mức MACD → 1.13 | 128.7 | 51.7% | 0.876 | 7.58 | 16.98 | 0.715 | 1.062 | -10.68 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 35.47 | 39.8% | 0.403 | 10.66 | 3.33 | 0.297 | 0.537 | -8.58 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Cộng thêm ngưỡng điểm khung 1W → 2 + SL tối đa (% Entry) → 0.35 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 126.16 | 45.2% | 0.553 | 10.89 | 11.58 | 0.633 | 0.476 | -11.16 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Break mây Ichimoku → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 124.86 | 48.3% | 0.701 | 9.29 | 13.44 | 0.709 | 0.692 | -11.01 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Lệnh chờ hết hạn sau (nến) → 8 | 127.09 | 51% | 0.81 | 7.95 | 15.99 | 0.688 | 0.953 | -12.27 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 109.18 | 46.7% | 0.654 | 8.92 | 12.24 | 0.652 | 0.656 | -12.96 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Divergence (/100) → 12 + Trọng số phần SL (/100) → 9 | 99.55 | 46.1% | 0.603 | 9.19 | 10.83 | 0.519 | 0.689 | -12 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + SL tối đa (% Entry) → 0.35 + Cộng thêm ngưỡng điểm khung 1W → -1 | 120.03 | 50.7% | 0.811 | 7.88 | 15.23 | 0.67 | 0.982 | -10.68 |  |
