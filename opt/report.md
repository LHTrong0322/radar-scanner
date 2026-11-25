# Tối ưu tự động (chạy liên tục) — vòng 1420

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 16660 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.9% | 103.96R | 0.638 | 6.7R | 9.48R | 10.97 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 143 | 52.4% | 119.28R | 0.834 | 5.15R | 7.5R | 15.90 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 25 | 52% | 20.6R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 107 | 53.3% | 91.71R | 19 | 21.1% | -4.19R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.9% | 103.96R | 9.48R | 10.97 | 30 | 13.3% | -11.98R |
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

### Vòng 1420 — ngẫu nhiên nhiều thông số · mốc: tổng 119.28R, win 52.4%, rủi ro tụt vốn 7.5R, lời÷rủi ro 15.90

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Cộng thêm ngưỡng điểm khung 4H → -1 | 118.54 | 52.5% | 0.841 | 7.43 | 15.95 | 0.641 | 1.067 | -12.16 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Đệm SL riêng khung 1W (ATR) → 0.3 | 89.2 | 45.1% | 0.671 | 9.72 | 9.18 | 0.31 | 1.005 | -16.85 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu riêng khung 4H → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 118.15 | 40% | 0.369 | 14.68 | 8.05 | 0.434 | 0.318 | -10.16 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: EMA 200 → 3 | 106.85 | 50.7% | 0.763 | 7.72 | 13.84 | 0.579 | 0.964 | -13.15 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Mức RSI 30/70 → 0.875 + Coin phải mạnh hơn BTC trong N ngày → 14 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 16.61 | 55% | 0.119 | 7.3 | 2.28 | 0.118 | 0.119 | -8.46 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: POC volume profile cố định → 0.688 | 115.12 | 52.1% | 0.799 | 7.31 | 15.75 | 0.644 | 0.978 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Entry (/100) → 33 + Điểm vùng: MACD cắt lên Signal → 0.438 | 113.02 | 49.7% | 0.729 | 8.96 | 12.61 | 0.54 | 0.953 | -8.55 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 119.28 | 52.4% | 0.834 | 7.5 | 15.9 | 0.634 | 1.067 | -12.16 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Mức MACD → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 106.93 | 47.6% | 0.748 | 8.49 | 12.59 | 0.644 | 0.869 | -15.4 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Elliott (/100) → 6 + Cộng thêm ngưỡng điểm khung 1D → 7 + Trọng số phần Entry (/100) → 33 | 117.28 | 52.8% | 0.826 | 7.32 | 16.02 | 0.616 | 1.067 | -10.26 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Elliott (/100) → 6 + Cộng điểm phân kỳ dương ẩn → 3 | 31.73 | 57.1% | 0.197 | 5.56 | 5.71 | 0.227 | 0.169 | -8.19 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Break mây Ichimoku → 1 | 109.75 | 50.3% | 0.757 | 7.88 | 13.93 | 0.569 | 0.97 | -12.99 |  |

### Vòng 1419 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.53R, lời÷rủi ro 15.90

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Elliott (/100) → 6 | 115.31 | 51.1% | 0.818 | 7.6 | 15.17 | 0.609 | 1.055 | -12.16 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trọng số phần Entry (/100) → 33 + Điểm tối thiểu của vùng đặt SL → 2 | 73.67 | 47% | 0.558 | 9.62 | 7.66 | 0.408 | 0.722 | -9.9 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 | 131.28 | 41.6% | 0.401 | 12.1 | 10.85 | 0.404 | 0.4 | -9.14 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: EMA 21 → 0.875 | 117.19 | 50% | 0.792 | 7.81 | 15.01 | 0.649 | 0.947 | -10.87 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Số TP tối đa → 1 | 110.34 | 48.8% | 0.69 | 8.87 | 12.44 | 0.562 | 0.831 | -11.9 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 117.28 | 51.4% | 0.814 | 7.61 | 15.41 | 0.615 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 54.56 | 41.5% | 0.515 | 10.06 | 5.42 | 0.316 | 0.737 | -17.14 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Đệm SL riêng khung 4H (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 22.88 | 49.8% | 0.095 | 14.49 | 1.58 | 0.086 | 0.102 | -12.18 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Coin phải mạnh hơn BTC trong N ngày → 14 | 87.73 | 49.6% | 0.75 | 7.97 | 11.01 | 0.552 | 0.988 | -18.62 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Xác nhận khung nhỏ (A2) → W | 117.29 | 37.8% | 0.386 | 18.97 | 6.18 | 0.443 | 0.33 | -13.96 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Xác nhận khung nhỏ (A2) → W | 134.28 | 37.7% | 0.265 | 18.85 | 7.12 | 0.46 | 0.087 | -16.72 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 25.85 | 54.7% | 0.15 | 6.9 | 3.75 | 0.185 | 0.115 | -8.54 |  |

### Vòng 1418 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.49R, lời÷rủi ro 15.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Mức RSI 30/70 → 0.875 | 109.09 | 50.7% | 0.718 | 8.39 | 13 | 0.581 | 0.877 | -8.83 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu riêng khung 4H → 2 | 135.49 | 42.4% | 0.436 | 11.5 | 11.78 | 0.444 | 0.429 | -8.71 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 123.15 | 43.7% | 0.538 | 10.89 | 11.31 | 0.584 | 0.495 | -16.93 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Cộng thêm ngưỡng điểm khung 4H → 2 + Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần R:R (/100) → 33 | 135.94 | 44% | 0.65 | 11.15 | 12.19 | 0.618 | 0.683 | -19.61 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu riêng khung 4H → 2 | 105.3 | 40.8% | 0.352 | 13.31 | 7.91 | 0.378 | 0.328 | -14.5 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + SL tối đa (% Entry) → 0.425 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: HVN cố định → 0.563 | 96.2 | 48.8% | 0.77 | 8.84 | 10.88 | 0.526 | 1.034 | -14.15 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Ngưỡng điểm vào kèo → 77 | 66.5 | 44.4% | 0.616 | 9.7 | 6.86 | 0.413 | 0.851 | -5.16 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Trend (/100) → 19 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 94.51 | 46.3% | 0.643 | 9.4 | 10.05 | 0.495 | 0.802 | -8.96 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 116.37 | 41.3% | 0.565 | 12.34 | 9.43 | 0.533 | 0.597 | -16.79 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: HVN cố định → 0.563 | 119.47 | 50.7% | 0.818 | 7.72 | 15.48 | 0.64 | 1.034 | -11.14 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 | 110.64 | 46.5% | 0.696 | 10.1 | 10.95 | 0.737 | 0.659 | -10.76 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 112.44 | 51% | 0.775 | 7.92 | 14.2 | 0.579 | 0.998 | -7.9 |  |

### Vòng 1417 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.64R, lời÷rủi ro 15.67

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: EMA 21 → 1.13 | 81.84 | 45% | 0.542 | 9.49 | 8.62 | 0.566 | 0.517 | -6.34 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: BOS → 2 + Cộng thêm ngưỡng điểm khung 1W → 2 | 105.22 | 50.7% | 0.731 | 8.22 | 12.8 | 0.661 | 0.806 | -11.34 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: BOS → 0 | 122.48 | 51.6% | 0.801 | 7.99 | 15.33 | 0.623 | 1.023 | -7.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Mức MACD → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 91.8 | 47.8% | 0.685 | 8.64 | 10.62 | 0.443 | 0.934 | -13.69 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Entry (/100) → 33 + R:R tối thiểu riêng khung 1W → 2 | 109.08 | 50.7% | 0.779 | 7.44 | 14.66 | 0.625 | 0.934 | -12.59 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức MACD → 1.13 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 110.34 | 47% | 0.657 | 8.75 | 12.61 | 0.526 | 0.782 | -14.05 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: POC anchored → 4 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 92.82 | 46.2% | 0.543 | 9.95 | 9.33 | 0.454 | 0.629 | -7.37 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Biên mây Ichimoku → 1.35 | 101.38 | 49.3% | 0.685 | 8.54 | 11.87 | 0.611 | 0.765 | -9.01 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần R:R (/100) → 33 | 119.47 | 52.4% | 0.835 | 7.23 | 16.52 | 0.694 | 0.991 | -12.16 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.438 + Xác nhận khung nhỏ (A2) → W | 66.41 | 35.6% | 0.285 | 19.21 | 3.46 | 0.257 | 0.309 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Cộng điểm phân kỳ dương ẩn → 3 | 116.38 | 51.7% | 0.803 | 7.7 | 15.11 | 0.612 | 1.024 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Cộng điểm phân kỳ dương ẩn → 3 + Khung lớn phải tăng (trend ≥) → 0.425 | 115.31 | 51.4% | 0.836 | 7.51 | 15.35 | 0.615 | 1.083 | -12.19 |  |

### Vòng 1416 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.10

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: EMA 200 → 3 + Điểm vùng: BOS → 0 | 116.51 | 42% | 0.382 | 11.58 | 10.06 | 0.359 | 0.402 | -9.41 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 39.82 | 42.7% | 0.447 | 9.36 | 4.25 | 0.368 | 0.544 | -5.18 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 1D (ATR) → 0.3 | 114.71 | 47.2% | 0.713 | 10.08 | 11.38 | 0.73 | 0.697 | -11.78 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 120.93 | 53.1% | 0.846 | 7.22 | 16.75 | 0.672 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 126.77 | 50.3% | 0.829 | 7.79 | 16.27 | 0.797 | 0.865 | -12.74 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Entry (/100) → 28 + Điểm vùng: HVN cố định → 0.438 | 136.08 | 42.4% | 0.433 | 11.7 | 11.63 | 0.429 | 0.438 | -9.46 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 102.92 | 45.6% | 0.651 | 10.67 | 9.65 | 0.663 | 0.641 | -11.78 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 70.9 | 45.3% | 0.554 | 9.75 | 7.27 | 0.413 | 0.714 | -11.18 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Cộng điểm phân kỳ dương ẩn → 2.25 | 121.94 | 53.5% | 0.859 | 7.13 | 17.1 | 0.694 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + R:R tối thiểu riêng khung 1W → 2 + Ngưỡng điểm vào kèo → 77 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 110.46 | 51.4% | 0.778 | 7.1 | 15.56 | 0.626 | 0.934 | -10.67 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần SL (/100) → 9 | 83.14 | 45.3% | 0.523 | 9.78 | 8.5 | 0.434 | 0.606 | -10.16 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: POC volume profile cố định → 0.813 | 121.19 | 53.1% | 0.848 | 7.14 | 16.97 | 0.694 | 1.017 | -9.82 |  |

### Vòng 1415 — ngẫu nhiên nhiều thông số · mốc: tổng 119.28R, win 52.4%, rủi ro tụt vốn 7.5R, lời÷rủi ro 15.90

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Khung lớn phải tăng (trend ≥) → 0.425 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần R:R (/100) → 33 | 106.32 | 45.8% | 0.64 | 9.16 | 11.61 | 0.559 | 0.716 | -8.97 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 41.49 | 43.2% | 0.472 | 9.07 | 4.57 | 0.376 | 0.591 | -7.55 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Coin phải mạnh hơn BTC trong N ngày → 14 + Lệnh chờ hết hạn sau (nến) → 8 | 86.08 | 49.2% | 0.683 | 8.44 | 10.2 | 0.508 | 0.903 | -20.22 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + % chốt ở TP1 → 0.307 | 107.83 | 47.6% | 0.754 | 8.86 | 12.17 | 0.525 | 0.986 | -14.02 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 105.7 | 49.6% | 0.75 | 8.04 | 13.15 | 0.585 | 0.912 | -13.18 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Break mây Ichimoku → 3 | 110.59 | 49.1% | 0.696 | 8.89 | 12.44 | 0.542 | 0.872 | -11.03 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Ngưỡng điểm vào kèo → 74 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 118.56 | 51.7% | 0.818 | 7.55 | 15.7 | 0.624 | 1.044 | -12.16 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Mức MACD → 1.13 + Khung lớn phải tăng (trend ≥) → 0.375 | 111.11 | 50.3% | 0.766 | 8.13 | 13.67 | 0.518 | 1.047 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Fib sóng 4 → 1.56 | 98.14 | 48.6% | 0.701 | 8.49 | 11.56 | 0.465 | 0.965 | -14.99 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: HVN cố định → 0.563 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 77.42 | 48.1% | 0.73 | 8.45 | 9.16 | 0.471 | 1.044 | -6.76 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Elliott (/100) → 6 | 111.48 | 46.7% | 0.66 | 8.7 | 12.81 | 0.622 | 0.694 | -8.93 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Biên mây Ichimoku → 1.05 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 108.72 | 49% | 0.711 | 8.36 | 13 | 0.571 | 0.864 | -13.38 |  |

### Vòng 1414 — ngẫu nhiên nhiều thông số · mốc: tổng 113.26R, win 51.1%, rủi ro tụt vốn 7.81R, lời÷rủi ro 14.50

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần Entry (/100) → 33 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 120.51 | 49% | 0.788 | 8.42 | 14.31 | 0.728 | 0.854 | -12.66 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 36.27 | 40.2% | 0.394 | 10.85 | 3.34 | 0.294 | 0.509 | -7.01 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Khung lớn phải tăng (trend ≥) → 0.375 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 72.06 | 45.4% | 0.667 | 9.43 | 7.64 | 0.418 | 0.946 | -5.72 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: MACD cắt lên Signal → 0.438 + Đệm SL riêng khung 1W (ATR) → 0.3 | 79.94 | 42.2% | 0.544 | 11.88 | 6.73 | 0.211 | 0.863 | -11.36 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 131.35 | 37% | 0.476 | 20.09 | 6.54 | 0.336 | 0.6 | -8.71 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 101.5 | 46.7% | 0.677 | 9.28 | 10.94 | 0.584 | 0.769 | -11.06 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 113.67 | 48.5% | 0.697 | 9.51 | 11.95 | 0.579 | 0.829 | -11.82 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trọng số phần Divergence (/100) → 9 + Cổng Dow → CHẶT + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 39.58 | 46.2% | 0.507 | 8.45 | 4.68 | 0.375 | 0.647 | -14.14 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: EMA 21 → 1.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 96.31 | 47.4% | 0.625 | 9.19 | 10.48 | 0.463 | 0.801 | -8.49 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: HVN cố định → 0.438 | 95.85 | 49.2% | 0.726 | 8.25 | 11.62 | 0.552 | 0.922 | -11.72 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 83.51 | 45.3% | 0.601 | 10.26 | 8.14 | 0.807 | 0.403 | -14.09 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + % chốt ở TP1 → 0.307 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 113.27 | 51.1% | 0.803 | 7.8 | 14.52 | 0.594 | 1.028 | -12.09 |  |

### Vòng 1413 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.54R, lời÷rủi ro 15.88

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + % chốt ở TP1 → 0.307 + Ngưỡng điểm vào kèo → 77 | 97.84 | 50.3% | 0.684 | 8.1 | 12.08 | 0.67 | 0.7 | -9.41 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 63 | 42.5% | 0.558 | 10.24 | 6.15 | 0.447 | 0.674 | -4.77 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cộng thêm ngưỡng điểm khung 1W → -1 | 88.04 | 49.6% | 0.752 | 7.95 | 11.07 | 0.557 | 0.988 | -18.62 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: BOS → 2 | 24.77 | 56.4% | 0.186 | 5.18 | 4.78 | 0.243 | 0.132 | -8.44 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: HVN cố định → 0.438 | 110.76 | 49.6% | 0.786 | 8.06 | 13.74 | 0.605 | 0.98 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Biên mây Ichimoku → 1.05 + R:R tối thiểu riêng khung 4H → 2 | 129.3 | 42.2% | 0.41 | 11.75 | 11 | 0.402 | 0.417 | -6.78 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: EMA 200 → 3 + R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Entry (/100) → 28 | 91.96 | 46.2% | 0.697 | 9.08 | 10.13 | 0.444 | 0.957 | -12.88 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Vùng RSI 45–55 → 1.13 + R:R tối thiểu tới TP1 → 2.38 | 103.59 | 47.1% | 0.609 | 8.84 | 11.72 | 0.503 | 0.713 | -14.06 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cổng Dow → TẮT | 121 | 42.4% | 0.513 | 13.06 | 9.26 | 0.599 | 0.436 | -19.31 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 | 106.85 | 46.2% | 0.685 | 10.18 | 10.5 | 0.534 | 0.832 | -15.13 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 104.08 | 47.6% | 0.728 | 8.58 | 12.13 | 0.614 | 0.856 | -14.99 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Elliott (/100) → 10 + R:R tối thiểu riêng khung 4H → 2 | 116.19 | 41.1% | 0.391 | 11.95 | 9.72 | 0.381 | 0.4 | -14.27 |  |

### Vòng 1412 — ngẫu nhiên nhiều thông số · mốc: tổng 121.93R, win 53.9%, rủi ro tụt vốn 7.12R, lời÷rủi ro 17.13

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: POC anchored → 2 + Cộng điểm phân kỳ dương ẩn → 3 | 95.26 | 49.7% | 0.666 | 8.46 | 11.26 | 0.548 | 0.773 | -13.2 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Khung lớn phải tăng (trend ≥) → 0.425 + Đệm SL riêng khung 4H (ATR) → 0.3 | 168.57 | 38.6% | 0.602 | 17.54 | 9.61 | 0.504 | 0.7 | -10.25 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 200 → 1 + R:R tối thiểu riêng khung 4H → 2 | 139.28 | 42.9% | 0.442 | 11.54 | 12.07 | 0.449 | 0.436 | 0 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + R:R tối thiểu riêng khung 1D → 2 + Cổng Dow → CHẶT | 74.1 | 39.4% | 0.314 | 16.24 | 4.56 | 0.175 | 0.441 | -15.28 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Break mây Ichimoku → 1 | 27.61 | 39.3% | 0.329 | 10.89 | 2.54 | 0.313 | 0.35 | -4.82 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 30.39 | 57.7% | 0.195 | 5.65 | 5.38 | 0.22 | 0.172 | -8.19 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: BOS → 2 + Trọng số phần Trend (/100) → 19 + R:R tối thiểu riêng khung 1D → 2 | 111.18 | 46.5% | 0.646 | 8.87 | 12.53 | 0.634 | 0.657 | -8.93 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.57 | 58.3% | 0.202 | 5.52 | 5.72 | 0.235 | 0.172 | -8.19 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: HVN cố định → 0.563 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 98.49 | 46.5% | 0.684 | 9.12 | 10.8 | 0.551 | 0.833 | -8.13 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần R:R (/100) → 28 | 32.9 | 40.7% | 0.406 | 9.6 | 3.43 | 0.323 | 0.516 | -5.28 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 110.68 | 50.7% | 0.779 | 7.63 | 14.51 | 0.63 | 0.952 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + R:R tối thiểu tới TP1 → 2.38 | 104.97 | 47.8% | 0.652 | 8.65 | 12.14 | 0.554 | 0.749 | -11.42 |  |

### Vòng 1411 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.17R, lời÷rủi ro 17.01

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: HVN cố định → 0.438 | 111.77 | 46.2% | 0.607 | 9.66 | 11.57 | 0.524 | 0.686 | -6.02 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 121.94 | 53.5% | 0.859 | 7.17 | 17.01 | 0.694 | 1.043 | -11.04 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: MACD cắt lên Signal → 0.563 | 102.6 | 35.9% | 0.283 | 20.27 | 5.06 | 0.364 | 0.214 | -6.37 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 95.2 | 50% | 0.652 | 8.46 | 11.25 | 0.632 | 0.673 | -11.84 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: POC volume profile cố định → 0.813 | 113.1 | 51.8% | 0.802 | 7.39 | 15.3 | 0.666 | 0.949 | -7.49 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + R:R tối thiểu riêng khung 4H → 2 + Khung lớn phải tăng (trend ≥) → 0.425 | 132.96 | 41.8% | 0.437 | 11.73 | 11.34 | 0.456 | 0.422 | -8.6 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Trọng số phần Trend (/100) → 19 | 121.94 | 53.5% | 0.859 | 7.17 | 17.01 | 0.694 | 1.043 | -11.04 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Momentum (/100) → 21 | 121.94 | 53.5% | 0.859 | 7.17 | 17.01 | 0.694 | 1.043 | -11.04 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Coin phải mạnh hơn BTC trong N ngày → 14 | 82.2 | 49.1% | 0.709 | 7.97 | 10.31 | 0.568 | 0.87 | -14.98 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: POC anchored → 2 | 98.27 | 46.2% | 0.575 | 9.41 | 10.44 | 0.472 | 0.672 | -13.45 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Đệm SL riêng khung 1W (ATR) → 0.3 | 26.06 | 52.1% | 0.179 | 7.1 | 3.67 | 0.219 | 0.145 | -7.84 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm tối thiểu của vùng đặt SL → 2 | 86.03 | 53.1% | 0.761 | 6.54 | 13.15 | 0.425 | 1.038 | -11.94 |  |
