# Tối ưu tự động (chạy liên tục) — vòng 1390

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 16300 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.3% | 93.7R | 0.578 | 6.7R | 10.05R | 9.32 | 27 | 14.8% | -8.72R | -0.323 | 8.72R |
| **Tốt nhất** | 139 | 52.5% | 116.82R | 0.84 | 5.15R | 7.27R | 16.07 | 25 | 16% | -8.9R | -0.356 | 9.18R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 26 | 50% | 20.05R | 7 | 0% | -5.66R |
| 1W | 10 | 40% | 3.09R | 2 | 0% | -2.3R |
| 4H | 103 | 54.4% | 93.69R | 16 | 25% | -0.93R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.3% | 93.7R | 10.05R | 9.32 | 27 | 14.8% | -8.72R |
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
| Lệnh chờ hết hạn sau (nến) | 8 | **7** |
| Điểm ADX > 25 và +DI trội (Momentum) | 3 | **4** |
| Điểm ADX < 13 cạn lực giảm (Momentum) | 1.5 | **2.5** |
| Cộng điểm phân kỳ dương ẩn | 3 | **2.63** |
| Lọc BTC: giá trên EMA bao nhiêu ngày | 200 | **150** |
| Trọng số phần Trend (/100) | 30 | **15** |
| Trọng số phần Momentum (/100) | 15 | **23** |
| Trọng số phần R:R (/100) | 20 | **30** |
| Trọng số phần SL (/100) | 5 | **8** |
| Điểm vùng: BOS | 2 | **1** |
| Điểm vùng: EMA 50 | 0.75 | **0.94** |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) | 2.5 | **3.44** |
| Điểm vùng: HVN cố định | 0.25 | **0.5** |
| Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) | 1 | **0.75** |

## Các thay đổi đã nhận (mới nhất trước)

| Vòng | Thông số | Từ → Thành | Tổng R | Tỷ lệ thắng | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro |
|---|---|---|---|---|---|---|
| 1271 | Cộng thêm ngưỡng điểm khung 1D | 4 → 5 | 120.65R | 52.1% | 7.64R | 15.79 |
| 1271 | Điểm vùng: Fib 0.5 / 0.382 sóng 2 | 4 → 3 | 120.65R | 52.1% | 7.64R | 15.79 |
| 1092 | Trần điểm khi chart yếu (Trend < x) | -0.375 → -0.3 | 119.77R | 52.8% | 7.34R | 16.32 |
| 1092 | Điểm vùng: Fib 0.5 / 0.382 sóng 2 | 3 → 4 | 119.77R | 52.8% | 7.34R | 16.32 |
| 1092 | Điểm vùng: BOS | 2 → 1 | 119.77R | 52.8% | 7.34R | 16.32 |
| 1077 | Trần điểm khi chart yếu (Trend < x) | -0.3 → -0.375 | 118.06R | 52.4% | 7.5R | 15.74 |
| 1077 | Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) | 1 → 0.75 | 118.06R | 52.4% | 7.5R | 15.74 |
| 1055 | Điểm tối thiểu vùng đặt lệnh chờ | 2 → 3 | 114.12R | 51.4% | 7.82R | 14.59 |
| 1055 | Số TP tối đa | 3 → 2 | 114.12R | 51.4% | 7.82R | 14.59 |
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

## 10 vòng gần nhất

### Vòng 1390 — ngẫu nhiên nhiều thông số · mốc: tổng 116.82R, win 52.5%, rủi ro tụt vốn 7.27R, lời÷rủi ro 16.07

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 70.9 | 43.1% | 0.65 | 10.14 | 6.99 | 0.43 | 0.901 | -4.67 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 4H → 2 | 120.08 | 34.5% | 0.311 | 23.13 | 5.19 | 0.334 | 0.295 | -13.88 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: EMA 50 → 1.13 | 114.39 | 51.1% | 0.823 | 7.64 | 14.97 | 0.655 | 1.026 | -7.88 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 109.15 | 48.3% | 0.723 | 8.51 | 12.83 | 0.616 | 0.834 | -8.79 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 114.48 | 52.1% | 0.818 | 7.22 | 15.86 | 0.671 | 0.992 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1W → 2 | 116.19 | 40.9% | 0.377 | 12.83 | 9.06 | 0.396 | 0.362 | -0.57 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: Break mây Ichimoku → 3 + SL tối đa (% Entry) → 0.425 | 110.5 | 50% | 0.727 | 8.21 | 13.46 | 0.614 | 0.853 | -4.49 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần SL (/100) → 9 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 50 → 1.13 | 74.4 | 44.5% | 0.676 | 8.79 | 8.46 | 0.471 | 0.932 | -13.99 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Fib sóng 4 → 1.56 | 115.82 | 52.1% | 0.827 | 7.3 | 15.87 | 0.672 | 1.012 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Trend (/100) → 19 | 121.61 | 49.7% | 0.805 | 8.09 | 15.03 | 0.815 | 0.794 | -9.46 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: Fib sóng 4 → 0.938 | 125.6 | 42.6% | 0.616 | 11.32 | 11.1 | 0.556 | 0.677 | -11.68 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 200 → 1 + Điểm vùng: HVN cố định → 0.563 | 123.59 | 49.7% | 0.777 | 8.34 | 14.82 | 0.789 | 0.761 | -5.59 |  |

### Vòng 1389 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 120.93 | 53.1% | 0.846 | 7.13 | 16.96 | 0.672 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần Entry (/100) → 28 | 120.94 | 53.1% | 0.846 | 7.17 | 16.87 | 0.672 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Cộng thêm ngưỡng điểm khung 1W → -1 | 121.94 | 53.5% | 0.859 | 7.06 | 17.27 | 0.694 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Xác nhận khung nhỏ (A2) → W | 70.98 | 35.5% | 0.303 | 21.09 | 3.37 | 0.302 | 0.305 | -15 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần Momentum (/100) → 25 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 66.88 | 45.3% | 0.631 | 9.19 | 7.28 | 0.471 | 0.825 | -5.79 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.9 | 58.3% | 0.151 | 6.28 | 5.08 | 0.228 | 0.087 | -5.92 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Elliott (/100) → 10 | 39.16 | 42% | 0.445 | 9.35 | 4.19 | 0.362 | 0.544 | -5.18 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: EMA 200 → 1 | 32.77 | 38.2% | 0.368 | 11.04 | 2.97 | 0.279 | 0.483 | -7.55 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Entry (/100) → 33 + Điểm vùng: EMA 21 → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 101.25 | 49.3% | 0.693 | 8.16 | 12.41 | 0.706 | 0.681 | -9.59 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần Divergence (/100) → 12 | 112.54 | 48.6% | 0.804 | 8.34 | 13.49 | 0.598 | 1.041 | -9.38 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 66.92 | 44.5% | 0.523 | 10.32 | 6.48 | 0.394 | 0.673 | -10.44 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần Momentum (/100) → 21 | 121.19 | 53.1% | 0.848 | 7.09 | 17.09 | 0.694 | 1.017 | -10.84 |  |

### Vòng 1388 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Số TP tối đa → 1 | 111.54 | 49.4% | 0.697 | 8.75 | 12.75 | 0.576 | 0.831 | -11.9 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Mức MACD → 0.875 | 118.93 | 41.2% | 0.386 | 12.35 | 9.63 | 0.35 | 0.418 | -5.82 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 95.19 | 49% | 0.639 | 9.06 | 10.51 | 0.514 | 0.779 | -8.88 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Elliott (/100) → 10 + Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 92.98 | 48.6% | 0.637 | 8.59 | 10.82 | 0.637 | 0.637 | -12.96 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: EMA 200 → 3 + % chốt ở TP1 → 0.307 | 110.21 | 50.7% | 0.776 | 7.63 | 14.44 | 0.58 | 0.984 | -13.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 115.87 | 51.4% | 0.828 | 7.38 | 15.7 | 0.691 | 0.972 | -12.03 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 120.93 | 53.1% | 0.846 | 7.13 | 16.96 | 0.672 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 98.49 | 46.5% | 0.684 | 9.08 | 10.85 | 0.551 | 0.833 | -8.13 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trọng số phần Entry (/100) → 33 + Điểm vùng: MACD cắt lên Signal → 0.563 | 117.45 | 51% | 0.81 | 7.4 | 15.87 | 0.695 | 0.93 | -11.13 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 4H → 2 | 89.24 | 41% | 0.411 | 12.63 | 7.07 | 0.42 | 0.402 | -5.87 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + R:R tối thiểu riêng khung 4H → 2 | 60.48 | 38.1% | 0.32 | 13.2 | 4.58 | 0.38 | 0.26 | -0.46 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Số TP tối đa → 1 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: EMA 200 → 3 | 92.48 | 48.6% | 0.642 | 8.46 | 10.93 | 0.582 | 0.706 | -12.92 |  |

### Vòng 1387 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: Mức MACD → 0.875 | 114.79 | 52.1% | 0.82 | 7.35 | 15.62 | 0.684 | 0.964 | -11.13 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Entry (/100) → 28 | 121.24 | 53.1% | 0.848 | 7.17 | 16.91 | 0.676 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 1D (ATR) → 0.3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 91.96 | 32.8% | 0.382 | 22.88 | 4.02 | 0.323 | 0.436 | -16.77 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib sóng 4 → 0.938 + Ngưỡng điểm vào kèo → 77 | 79.36 | 48.2% | 0.696 | 8.4 | 9.45 | 0.539 | 0.87 | -16.1 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Đệm SL riêng khung 1W (ATR) → 0.3 | 103.43 | 46% | 0.635 | 10.67 | 9.69 | 0.436 | 0.826 | -12.59 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 121.24 | 53.1% | 0.848 | 7.17 | 16.91 | 0.676 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Momentum (/100) → 25 | 87.47 | 49.6% | 0.748 | 7.99 | 10.95 | 0.571 | 0.961 | -18.62 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + R:R tối thiểu riêng khung 1D → 2 | 104.25 | 46.2% | 0.617 | 9.14 | 11.41 | 0.644 | 0.594 | -5.98 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 | 118.41 | 46.4% | 0.654 | 9.34 | 12.68 | 0.604 | 0.702 | -7.97 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 104.17 | 51.7% | 0.728 | 8.13 | 12.81 | 0.694 | 0.766 | -11.34 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: EMA 200 → 1 | 110.87 | 51% | 0.725 | 8.33 | 13.31 | 0.612 | 0.866 | -7.16 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 104.12 | 39.8% | 0.592 | 12.24 | 8.51 | 0.495 | 0.69 | -14.83 |  |

### Vòng 1386 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.08R, lời÷rủi ro 17.22

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: EMA 21 → 1.13 + Số TP tối đa → 1 | 114.65 | 51.6% | 0.721 | 7.83 | 14.64 | 0.594 | 0.868 | -10.83 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 99.1 | 48.6% | 0.718 | 8.08 | 12.26 | 0.5 | 0.949 | -13.97 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Mức RSI 30/70 → 1.13 | 113.97 | 50.3% | 0.745 | 8.04 | 14.18 | 0.676 | 0.82 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 33.77 | 40.4% | 0.379 | 9.9 | 3.41 | 0.277 | 0.499 | -8.98 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + SL tối đa (% Entry) → 0.425 + R:R tối thiểu riêng khung 1W → 2 | 107.04 | 50.3% | 0.749 | 7.83 | 13.67 | 0.627 | 0.865 | -12.17 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Mức RSI 30/70 → 0.875 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 200 → 1 | 122.76 | 48.3% | 0.705 | 10.37 | 11.84 | 0.666 | 0.746 | -8.51 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Break mây Ichimoku → 1 | 106.15 | 48.3% | 0.712 | 8.18 | 12.98 | 0.575 | 0.867 | -12.99 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: POC anchored → 2 | 95.05 | 48.7% | 0.609 | 8.77 | 10.84 | 0.467 | 0.767 | -7.59 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm tối thiểu của vùng đặt SL → 2 + Cổng Dow → TẮT + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 102.66 | 41.3% | 0.511 | 12.81 | 8.01 | 0.426 | 0.598 | -19.81 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 112.26 | 48.2% | 0.796 | 8.31 | 13.51 | 0.615 | 0.996 | -10.4 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm tối thiểu của vùng đặt SL → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 | 101.85 | 33.5% | 0.421 | 22.06 | 4.62 | 0.435 | 0.406 | -15.18 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + % chốt ở TP1 → 0.307 | 110.21 | 50.7% | 0.776 | 7.57 | 14.56 | 0.58 | 0.984 | -13.16 |  |

### Vòng 1385 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.58R, lời÷rủi ro 15.80

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: EMA 50 → 0.75 + R:R tối thiểu riêng khung 1W → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 69.99 | 46.2% | 0.598 | 8.78 | 7.97 | 0.454 | 0.74 | -17.54 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: BOS → 2 | 111.08 | 39.8% | 0.426 | 15.13 | 7.34 | 0.393 | 0.456 | -6.68 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + % chốt ở TP1 → 0.307 + Điểm vùng: POC anchored → 4 | 111.16 | 50.3% | 0.756 | 8.11 | 13.71 | 0.605 | 0.905 | -4.31 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: EMA 50 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 117.86 | 43.8% | 0.506 | 11.59 | 10.17 | 0.573 | 0.442 | -11.98 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Đệm SL riêng khung 1W (ATR) → 0.3 + Số TP tối đa → 1 | 94.77 | 46.2% | 0.654 | 9.85 | 9.62 | 0.466 | 0.828 | -14.84 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm tối thiểu của vùng đặt SL → 4 + Cộng điểm phân kỳ dương ẩn → 3 | 132.02 | 43.3% | 0.629 | 11.23 | 11.76 | 0.594 | 0.664 | -20.38 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 115.62 | 48.1% | 0.741 | 8.73 | 13.24 | 0.594 | 0.904 | -12.55 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 50 → 0.75 | 100.03 | 50.7% | 0.695 | 8.22 | 12.17 | 0.623 | 0.773 | -11.92 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: BOS → 0 + Điểm vùng: EMA 200 → 3 | 105.77 | 48.3% | 0.74 | 8.26 | 12.81 | 0.545 | 0.943 | -12.13 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Cộng thêm ngưỡng điểm khung 1D → 4 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 115.83 | 51% | 0.81 | 7.33 | 15.8 | 0.653 | 0.984 | -11.98 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Elliott (/100) → 6 | 119.74 | 52.4% | 0.837 | 7.58 | 15.8 | 0.656 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: POC volume profile cố định → 0.813 | 117.44 | 43.3% | 0.541 | 11 | 10.68 | 0.502 | 0.579 | -15.34 |  |

### Vòng 1384 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.10

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Cộng thêm ngưỡng điểm khung 1D → 7 + Trọng số phần Divergence (/100) → 9 + Điểm tối thiểu của vùng đặt SL → 2 | 114.49 | 52.8% | 0.806 | 7.27 | 15.75 | 0.66 | 0.965 | -10.26 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 111.86 | 50% | 0.726 | 7.9 | 14.16 | 0.646 | 0.815 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Elliott (/100) → 10 | 105.95 | 45% | 0.711 | 9.78 | 10.83 | 0.526 | 0.899 | -12.99 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: BOS → 0 | 74.72 | 46.3% | 0.692 | 9.12 | 8.19 | 0.471 | 0.948 | -5.79 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Đệm SL riêng khung 1W (ATR) → 0.3 | 103.86 | 45.9% | 0.711 | 9.46 | 10.98 | 0.481 | 0.948 | -14.01 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: Biên mây Ichimoku → 1.05 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + R:R tối thiểu riêng khung 1W → 2 | 72.59 | 45.4% | 0.445 | 10.18 | 7.13 | 0.471 | 0.42 | -11.2 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần Trend (/100) → 19 | 105.1 | 46.5% | 0.73 | 9.08 | 11.57 | 0.515 | 0.939 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Trọng số phần SL (/100) → 7 | 119.48 | 52.4% | 0.836 | 7.3 | 16.37 | 0.653 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm tối thiểu của vùng đặt SL → 4 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 56.08 | 43.2% | 0.505 | 10.31 | 5.44 | 0.452 | 0.568 | -6.38 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Cộng thêm ngưỡng điểm khung 1W → -1 + SL tối đa (% Entry) → 0.425 | 175.66 | 39% | 0.595 | 17.75 | 9.9 | 0.506 | 0.688 | -6.67 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 97.19 | 48.6% | 0.704 | 8.25 | 11.78 | 0.48 | 0.949 | -13.69 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Ngưỡng điểm vào kèo → 77 | 109.26 | 50% | 0.759 | 8 | 13.66 | 0.619 | 0.906 | -8.61 |  |

### Vòng 1383 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.02R, lời÷rủi ro 17.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Trọng số phần Divergence (/100) → 12 + SL tối đa (% Entry) → 0.425 + Cộng thêm ngưỡng điểm khung 1D → 7 | 117.74 | 52.8% | 0.829 | 7.14 | 16.49 | 0.66 | 1.013 | -10.09 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Biên mây Ichimoku → 1.05 | 111.52 | 52.4% | 0.78 | 7.52 | 14.83 | 0.65 | 0.919 | -13 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + R:R tối thiểu riêng khung 1D → 2 + Cộng điểm phân kỳ dương ẩn → 3 | 99.61 | 43.9% | 0.576 | 9.47 | 10.52 | 0.617 | 0.542 | -7.91 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 125.15 | 53.2% | 0.792 | 7.81 | 16.02 | 0.592 | 1.038 | -8.9 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 + Đệm SL riêng khung 4H (ATR) → 0.3 | 25.8 | 50.2% | 0.099 | 14.8 | 1.74 | 0.092 | 0.104 | -11.43 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Lệnh chờ hết hạn sau (nến) → 6 | 98.41 | 50.4% | 0.74 | 7.98 | 12.33 | 0.596 | 0.905 | -10.77 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Khung lớn phải tăng (trend ≥) → 0.425 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Fib sóng 4 → 0.938 | 68.92 | 43.3% | 0.459 | 10.37 | 6.65 | 0.275 | 0.635 | -9.36 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Biên mây Ichimoku → 1.05 | 102.87 | 51.1% | 0.74 | 7.53 | 13.66 | 0.625 | 0.857 | -10.46 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 109.84 | 50.3% | 0.768 | 7.97 | 13.78 | 0.61 | 0.952 | -12.16 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 31.52 | 58% | 0.201 | 5.68 | 5.55 | 0.232 | 0.172 | -8.18 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 116.75 | 51.7% | 0.816 | 7.36 | 15.86 | 0.631 | 1.027 | -11.98 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 1D → 4 | 29.38 | 57.7% | 0.188 | 5.92 | 4.96 | 0.213 | 0.166 | -8.18 |  |

### Vòng 1382 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.10

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số TP tối đa → 3 + SL tối đa (% Entry) → 0.425 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 4H → 2 | 93.46 | 41.1% | 0.417 | 12.96 | 7.21 | 0.426 | 0.408 | -5.79 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 1W (ATR) → 0.3 | 92.16 | 43.1% | 0.576 | 11.38 | 8.1 | 0.462 | 0.682 | -14.59 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 84.7 | 46.7% | 0.618 | 9.46 | 8.95 | 0.518 | 0.74 | -9.34 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 116.64 | 44.4% | 0.518 | 10.31 | 11.31 | 0.498 | 0.539 | -14.5 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 118.96 | 51% | 0.809 | 7.79 | 15.27 | 0.561 | 1.083 | -12.06 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Biên mây Ichimoku → 1.05 | 72.12 | 46.8% | 0.65 | 8.95 | 8.06 | 0.54 | 0.774 | -6.62 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 70.9 | 45.3% | 0.554 | 9.75 | 7.27 | 0.413 | 0.714 | -10.17 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 117.71 | 48.2% | 0.718 | 8.77 | 13.42 | 0.797 | 0.63 | -11.72 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: EMA 21 → 0.875 | 116.22 | 51% | 0.791 | 8.1 | 14.35 | 0.654 | 0.941 | -12.03 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 115.25 | 51.7% | 0.795 | 7.35 | 15.68 | 0.669 | 0.934 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cổng Dow → TẮT | 138.42 | 34.8% | 0.342 | 24.54 | 5.64 | 0.323 | 0.36 | -30.2 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 102.63 | 40.7% | 0.317 | 13.51 | 7.6 | 0.447 | 0.199 | -14.6 |  |

### Vòng 1381 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.54R, lời÷rủi ro 15.88

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 25.48 | 57.5% | 0.167 | 6.1 | 4.18 | 0.193 | 0.142 | -7.87 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + R:R tối thiểu riêng khung 1D → 2 | 108.99 | 45.3% | 0.641 | 8.94 | 12.19 | 0.647 | 0.636 | -6.74 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 109.75 | 51% | 0.767 | 7.64 | 14.37 | 0.62 | 0.93 | -9.63 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.45 | 58% | 0.2 | 5.71 | 5.51 | 0.231 | 0.172 | -8.18 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: POC anchored → 2 + Khung lớn phải tăng (trend ≥) → 0.375 | 62.88 | 44.3% | 0.48 | 10.48 | 6 | 0.368 | 0.608 | -11.58 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Trọng số phần Entry (/100) → 33 | 119.73 | 52.1% | 0.843 | 7.38 | 16.22 | 0.7 | 0.999 | -11.13 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần Momentum (/100) → 21 + Xác nhận khung nhỏ (A2) → W | 115.14 | 40.2% | 0.433 | 14.86 | 7.75 | 0.436 | 0.43 | -6.5 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: MACD cắt lên Signal → 0.563 | 101.42 | 48.6% | 0.685 | 8.56 | 11.85 | 0.636 | 0.734 | -8.61 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 103.5 | 51% | 0.714 | 8.29 | 12.48 | 0.658 | 0.777 | -11.75 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 86.08 | 42.3% | 0.473 | 12.57 | 6.85 | 0.433 | 0.508 | -8.51 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + R:R tối thiểu riêng khung 4H → 2 + Cổng Dow → CHẶT + Trần điểm khi chart yếu (Trend < x) → -0.375 | 80.19 | 41.3% | 0.331 | 11.83 | 6.78 | 0.302 | 0.352 | -10.7 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Ngưỡng điểm vào kèo → 74 + Điểm vùng: POC anchored → 4 | 86.12 | 51.3% | 0.736 | 7.47 | 11.53 | 0.356 | 1.04 | -9.4 |  |
