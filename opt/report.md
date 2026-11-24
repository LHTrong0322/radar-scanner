# Tối ưu tự động (chạy liên tục) — vòng 1325

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 15520 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 167 | 46.7% | 100.66R | 0.603 | 6.7R | 9.92R | 10.15 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 144 | 52.1% | 119.06R | 0.827 | 5.15R | 7.39R | 16.11 | 29 | 13.8% | -13.18R | -0.454 | 13.18R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 25 | 48% | 19.78R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 108 | 53.7% | 92.31R | 20 | 20% | -5.21R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 167 | 46.7% | 100.66R | 9.92R | 10.15 | 31 | 12.9% | -13R |
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

### Vòng 1325 — ngẫu nhiên nhiều thông số · mốc: tổng 119.06R, win 52.1%, rủi ro tụt vốn 7.39R, lời÷rủi ro 16.11

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 15.01 | 55% | 0.116 | 7.04 | 2.13 | 0.127 | 0.107 | -8.68 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần R:R (/100) → 28 | 105.76 | 48.6% | 0.724 | 8.42 | 12.56 | 0.568 | 0.908 | -13.18 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 103.09 | 51.4% | 0.697 | 8.45 | 12.2 | 0.586 | 0.819 | -9.1 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + % chốt ở TP1 → 0.307 | 114.31 | 50% | 0.794 | 8.17 | 13.99 | 0.605 | 1.01 | -12.17 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: EMA 21 → 0.875 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 106.07 | 39.1% | 0.38 | 16.01 | 6.63 | 0.37 | 0.389 | -3.21 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + R:R tối thiểu riêng khung 1W → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 114.91 | 47.8% | 0.732 | 8.98 | 12.8 | 0.715 | 0.75 | -14.8 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 98.23 | 42% | 0.558 | 12.97 | 7.57 | 0.502 | 0.611 | -10.91 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 | 108.69 | 46% | 0.625 | 9.18 | 11.84 | 0.579 | 0.667 | -9.96 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần R:R (/100) → 33 | 119.06 | 52.1% | 0.827 | 7.39 | 16.11 | 0.654 | 1.02 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trọng số phần R:R (/100) → 28 | 115.33 | 49.7% | 0.785 | 7.98 | 14.45 | 0.659 | 0.915 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 + Số TP tối đa → 1 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 100.67 | 46.4% | 0.599 | 10.27 | 9.8 | 0.412 | 0.816 | -10.34 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Đệm SL riêng khung 1W (ATR) → 0.3 | 101 | 44.9% | 0.687 | 9.8 | 10.31 | 0.452 | 0.919 | -15.03 |  |

### Vòng 1324 — ngẫu nhiên nhiều thông số · mốc: tổng 113.2R, win 52.2%, rủi ro tụt vốn 7.49R, lời÷rủi ro 15.11

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Biên mây Ichimoku → 1.05 | 97.95 | 48.7% | 0.644 | 8.73 | 11.22 | 0.531 | 0.777 | -14.31 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Đệm SL riêng khung 4H (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 | 22 | 50.2% | 0.087 | 15.07 | 1.46 | 0.089 | 0.086 | -13.76 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 109.28 | 51.1% | 0.786 | 7.76 | 14.08 | 0.63 | 0.975 | -11.71 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 91.56 | 47.7% | 0.694 | 8.8 | 10.4 | 0.481 | 0.941 | -13.71 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 18.18 | 51.9% | 0.114 | 9.08 | 2 | 0.161 | 0.073 | -10.91 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 121 | 47.2% | 0.761 | 8.84 | 13.69 | 0.764 | 0.757 | -12.87 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 105.28 | 49% | 0.707 | 8.31 | 12.67 | 0.648 | 0.774 | -10.88 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 107.48 | 51.4% | 0.757 | 7.97 | 13.49 | 0.632 | 0.905 | -10.57 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: BOS → 0 | 111 | 51.5% | 0.816 | 7.63 | 14.55 | 0.684 | 0.969 | -11.89 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 1W → 2 | 28.03 | 56.6% | 0.184 | 5.81 | 4.82 | 0.221 | 0.149 | -9.01 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: POC volume profile cố định → 0.813 | 105.93 | 50% | 0.746 | 7.91 | 13.39 | 0.589 | 0.927 | -11.88 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + SL tối đa (% Entry) → 0.425 + R:R tối thiểu tới TP1 → 2.63 | 101.31 | 47.3% | 0.785 | 9.02 | 11.23 | 0.722 | 0.863 | -12.86 |  |

### Vòng 1323 — ngẫu nhiên nhiều thông số · mốc: tổng 119.06R, win 52.1%, rủi ro tụt vốn 7.52R, lời÷rủi ro 15.83

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Xác nhận khung nhỏ (A2) → W | 106.77 | 39.8% | 0.417 | 15.95 | 6.69 | 0.378 | 0.452 | -5.64 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Trọng số phần R:R (/100) → 28 | 116.84 | 50.7% | 0.811 | 7.69 | 15.19 | 0.659 | 0.977 | -13.18 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: HVN cố định → 0.563 | 101.53 | 46.4% | 0.672 | 9.2 | 11.04 | 0.602 | 0.744 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: HVN cố định → 0.438 | 101.19 | 47.1% | 0.661 | 9.08 | 11.14 | 0.598 | 0.725 | -12.16 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 28 | 38% | 0.354 | 10.6 | 2.64 | 0.212 | 0.586 | -2.7 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Fib sóng 4 → 0.938 | 93.13 | 46% | 0.67 | 9.26 | 10.06 | 0.406 | 0.954 | -14.99 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu tới TP1 → 2.38 | 106.89 | 47% | 0.644 | 8.95 | 11.94 | 0.531 | 0.752 | -14.75 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Số TP tối đa → 3 | 114.38 | 51% | 0.789 | 7.58 | 15.09 | 0.603 | 0.999 | -13 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cổng Dow → TẮT + Điểm vùng: Break mây Ichimoku → 3 | 107.45 | 42.1% | 0.486 | 13.28 | 8.09 | 0.456 | 0.515 | -20.37 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Trend (/100) → 12 + Ngưỡng điểm vào kèo → 74 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 27.15 | 56.7% | 0.173 | 6.27 | 4.33 | 0.209 | 0.138 | -8 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 21 → 0.875 | 104.62 | 47.9% | 0.717 | 8.61 | 12.15 | 0.543 | 0.895 | -14.17 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Xác nhận khung nhỏ (A2) → W | 129.88 | 38% | 0.36 | 17.45 | 7.44 | 0.441 | 0.285 | -3.18 |  |

### Vòng 1322 — ngẫu nhiên nhiều thông số · mốc: tổng 119.06R, win 52.1%, rủi ro tụt vốn 7.52R, lời÷rủi ro 15.83

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần Elliott (/100) → 10 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 130.75 | 50.3% | 0.783 | 8.3 | 15.75 | 0.771 | 0.798 | -12.74 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Xác nhận khung nhỏ (A2) → W | 107.17 | 39.7% | 0.417 | 15.3 | 7 | 0.375 | 0.455 | -5.85 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Mức RSI 30/70 → 1.13 | 116.69 | 51% | 0.763 | 8.2 | 14.23 | 0.61 | 0.953 | -8.19 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 126.58 | 47.6% | 0.745 | 9.01 | 14.05 | 0.811 | 0.664 | -9.72 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 119.05 | 43.6% | 0.529 | 10.59 | 11.24 | 0.546 | 0.512 | -16.33 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Divergence (/100) → 12 + Cộng điểm phân kỳ dương ẩn → 3 | 126.98 | 49.4% | 0.814 | 8.22 | 15.45 | 0.787 | 0.846 | -13.76 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Trọng số phần Elliott (/100) → 6 + Trọng số phần Momentum (/100) → 25 | 119.06 | 52.1% | 0.827 | 7.52 | 15.83 | 0.654 | 1.02 | -13.18 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: MACD cắt lên Signal → 0.563 + R:R tối thiểu riêng khung 1D → 2 | 70.5 | 42% | 0.47 | 11.23 | 6.28 | 0.486 | 0.456 | -8.36 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 118.05 | 51.7% | 0.814 | 7.76 | 15.21 | 0.654 | 0.991 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Coin phải mạnh hơn BTC trong N ngày → 14 + Cộng thêm ngưỡng điểm khung 1W → 2 | 87.6 | 49.2% | 0.742 | 8.01 | 10.94 | 0.575 | 0.934 | -20.06 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cộng thêm ngưỡng điểm khung 1W → -1 | 110.14 | 48.7% | 0.725 | 9.04 | 12.18 | 0.487 | 0.981 | -14.07 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 123.41 | 40.7% | 0.389 | 11.82 | 10.44 | 0.399 | 0.382 | -9.83 |  |

### Vòng 1321 — ngẫu nhiên nhiều thông số · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.62R, lời÷rủi ro 15.41

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + % chốt ở TP1 → 0.287 + Ngưỡng điểm vào kèo → 74 + Cộng điểm phân kỳ dương ẩn → 3 | 113.82 | 49.7% | 0.774 | 7.98 | 14.26 | 0.612 | 0.953 | -13.16 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: MACD cắt lên Signal → 0.563 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Cộng thêm ngưỡng điểm khung 1D → 7 | 101.94 | 46.8% | 0.662 | 9.26 | 11.01 | 0.523 | 0.816 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trọng số phần Divergence (/100) → 12 | 115.93 | 50.7% | 0.794 | 7.8 | 14.86 | 0.654 | 0.946 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 | 106.04 | 45.4% | 0.609 | 9.28 | 11.43 | 0.579 | 0.638 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Cộng thêm ngưỡng điểm khung 1D → 7 | 37.19 | 41.1% | 0.413 | 9.9 | 3.76 | 0.353 | 0.482 | -5.18 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 113.48 | 43.4% | 0.656 | 11.45 | 9.91 | 0.769 | 0.554 | -13.39 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: POC anchored → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 98.17 | 46.5% | 0.617 | 9.85 | 9.97 | 0.406 | 0.842 | -12.95 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + % chốt ở TP1 → 0.287 + Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 96.07 | 44.2% | 0.654 | 10.43 | 9.21 | 0.416 | 0.894 | -15.01 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + R:R tối thiểu riêng khung 4H → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 84.42 | 33.8% | 0.244 | 24.88 | 3.39 | 0.222 | 0.261 | -19.73 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: MACD cắt lên Signal → 0.438 + % chốt ở TP1 → 0.287 + Điểm vùng: Biên mây Ichimoku → 1.05 | 102.06 | 49% | 0.65 | 9.07 | 11.25 | 0.494 | 0.83 | -11.41 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 84.67 | 34.7% | 0.316 | 22.95 | 3.69 | 0.208 | 0.439 | -4.43 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Biên mây Ichimoku → 1.05 | 104.28 | 50.7% | 0.724 | 7.86 | 13.27 | 0.619 | 0.842 | -14.01 |  |

### Vòng 1320 — ngẫu nhiên nhiều thông số · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.51R, lời÷rủi ro 15.64

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: POC anchored → 4 + Cộng điểm phân kỳ dương ẩn → 2.25 | 131.36 | 43.3% | 0.632 | 11.82 | 11.11 | 0.556 | 0.706 | -14.28 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Entry (/100) → 28 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 108.09 | 44.8% | 0.597 | 10.15 | 10.65 | 0.548 | 0.651 | -14.15 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Mức RSI 30/70 → 0.875 | 134.38 | 50.3% | 0.814 | 8.18 | 16.43 | 0.791 | 0.844 | -13.76 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Divergence (/100) → 12 | 110.97 | 49.7% | 0.776 | 8.1 | 13.7 | 0.564 | 1.023 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Điểm vùng: EMA 50 → 1.13 | 112.66 | 49.7% | 0.788 | 8.08 | 13.94 | 0.604 | 1.002 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Trọng số phần R:R (/100) → 33 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 81.33 | 45.3% | 0.55 | 9.87 | 8.24 | 0.432 | 0.664 | -15.27 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Xác nhận khung nhỏ (A2) → W | 102.24 | 38.5% | 0.398 | 15.99 | 6.39 | 0.358 | 0.434 | -6.89 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Cổng Dow → CHẶT | 81.82 | 50.4% | 0.724 | 7.46 | 10.97 | 0.329 | 1.073 | -15.27 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Break mây Ichimoku → 1 | 104.23 | 48.3% | 0.709 | 8.7 | 11.98 | 0.568 | 0.865 | -13.36 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần SL (/100) → 7 + % chốt ở TP1 → 0.287 | 105.92 | 39.5% | 0.414 | 15.68 | 6.76 | 0.373 | 0.451 | -5.59 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: MACD cắt lên Signal → 0.438 | 106.41 | 47.5% | 0.657 | 10.07 | 10.57 | 0.451 | 0.907 | -10.6 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 81.82 | 50.4% | 0.724 | 7.46 | 10.97 | 0.329 | 1.073 | -15.27 |  |

### Vòng 1319 — ngẫu nhiên nhiều thông số · mốc: tổng 118.72R, win 52.4%, rủi ro tụt vốn 7.41R, lời÷rủi ro 16.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.188 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 96.21 | 44.1% | 0.566 | 11.6 | 8.29 | 0.609 | 0.528 | -10.77 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Đệm SL riêng khung 1W (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 85.32 | 43.7% | 0.54 | 11.85 | 7.2 | 0.455 | 0.625 | -14.17 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + R:R tối thiểu tới TP1 → 2.38 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 112.33 | 47.4% | 0.657 | 8.62 | 13.03 | 0.505 | 0.804 | -14.06 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần SL (/100) → 7 | 126.27 | 50% | 0.82 | 8.07 | 15.65 | 0.814 | 0.827 | -12.74 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + % chốt ở TP1 → 0.307 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Break mây Ichimoku → 1 | 65.9 | 42.9% | 0.588 | 10.44 | 6.31 | 0.391 | 0.825 | -5.39 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 4H (ATR) → 0.3 | 135.14 | 38.9% | 0.59 | 16.12 | 8.38 | 0.501 | 0.673 | -15.89 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 4H → 2 | 106.39 | 45.3% | 0.661 | 10.64 | 10 | 0.69 | 0.634 | -11.78 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 84.01 | 49.2% | 0.689 | 8.54 | 9.84 | 0.517 | 0.885 | -15.36 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Khung lớn phải tăng (trend ≥) → 0.375 + R:R tối thiểu riêng khung 1W → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 | 73.32 | 47.2% | 0.596 | 9.01 | 8.14 | 0.518 | 0.678 | -17.6 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Cổng Dow → TẮT + Điểm vùng: BOS → 2 | 80.66 | 41.2% | 0.474 | 12.85 | 6.28 | 0.505 | 0.441 | -20.7 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Trọng số phần SL (/100) → 9 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm tối thiểu của vùng đặt SL → 4 | 92.35 | 44.4% | 0.641 | 9.64 | 9.58 | 0.577 | 0.709 | -7.11 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Divergence (/100) → 12 | 109.97 | 39.6% | 0.423 | 15.69 | 7.01 | 0.379 | 0.463 | -6.69 |  |

### Vòng 1318 — ngẫu nhiên nhiều thông số · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.61R, lời÷rủi ro 15.43

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần R:R (/100) → 28 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 | 69.72 | 44.4% | 0.43 | 10.7 | 6.52 | 0.453 | 0.408 | -10.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + % chốt ở TP1 → 0.307 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 117.95 | 49% | 0.751 | 8.6 | 13.72 | 0.721 | 0.787 | -10.82 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 109.84 | 48.9% | 0.79 | 8.63 | 12.73 | 0.614 | 0.991 | -9.11 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Cộng thêm ngưỡng điểm khung 4H → 2 | 85.85 | 40.2% | 0.508 | 11.26 | 7.62 | 0.422 | 0.601 | -8.35 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Đệm SL riêng khung 1D (ATR) → 0.3 | 110.22 | 45.7% | 0.672 | 10.88 | 10.13 | 0.669 | 0.675 | -11.49 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + SL tối đa (% Entry) → 0.425 + Điểm vùng: BOS → 2 + Điểm vùng: Mức MACD → 0.875 | 124.35 | 44.1% | 0.548 | 10.8 | 11.51 | 0.57 | 0.527 | -14.51 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Số TP tối đa → 3 | 112.2 | 51% | 0.785 | 7.89 | 14.22 | 0.591 | 0.998 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần R:R (/100) → 28 + Điểm vùng: BOS → 2 | 112.05 | 49.3% | 0.778 | 8.2 | 13.66 | 0.608 | 0.968 | -13.18 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu riêng khung 1D → 2 + Cộng điểm phân kỳ dương ẩn → 3 | 8.35 | 46.6% | 0.028 | 15.28 | 0.55 | 0.033 | 0.024 | -10.93 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Momentum (/100) → 25 | 23.4 | 56.1% | 0.177 | 5.37 | 4.36 | 0.249 | 0.105 | -7.63 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: EMA 50 → 1.13 | 112.66 | 49.7% | 0.788 | 7.99 | 14.1 | 0.604 | 1.002 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Mức RSI 30/70 → 0.875 | 34.99 | 57.8% | 0.202 | 5.37 | 6.52 | 0.254 | 0.155 | -3.44 |  |

### Vòng 1317 — ngẫu nhiên nhiều thông số · mốc: tổng 113.8R, win 51.8%, rủi ro tụt vốn 7.54R, lời÷rủi ro 15.09

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: EMA 21 → 0.875 + R:R tối thiểu riêng khung 1D → 2 | 106.66 | 46.5% | 0.627 | 9.03 | 11.81 | 0.635 | 0.62 | -10.39 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + % chốt ở TP1 → 0.287 + Trọng số phần SL (/100) → 9 | 112.25 | 51.1% | 0.796 | 7.7 | 14.58 | 0.605 | 1.007 | -14.19 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cộng điểm phân kỳ dương ẩn → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 24.86 | 54.1% | 0.134 | 7.09 | 3.51 | 0.155 | 0.117 | -7.48 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: EMA 21 → 0.875 + Ngưỡng điểm vào kèo → 77 + Trọng số phần Divergence (/100) → 9 | 111.64 | 50% | 0.765 | 8.01 | 13.94 | 0.609 | 0.933 | -11.68 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + SL tối đa (% Entry) → 0.425 | 110.6 | 51.4% | 0.768 | 7.99 | 13.84 | 0.608 | 0.937 | -11.9 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Trọng số phần SL (/100) → 7 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 69.64 | 44.5% | 0.633 | 9.44 | 7.38 | 0.401 | 0.901 | -7.85 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Momentum (/100) → 25 | 119.49 | 49% | 0.791 | 8.43 | 14.17 | 0.741 | 0.849 | -14.79 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 62.33 | 45.1% | 0.552 | 9.94 | 6.27 | 0.426 | 0.699 | -8.26 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Trọng số phần SL (/100) → 7 + Đệm SL riêng khung 4H (ATR) → 0.3 | 164.3 | 38% | 0.533 | 18.05 | 9.1 | 0.491 | 0.579 | -14.34 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 119.12 | 39.9% | 0.369 | 13.06 | 9.12 | 0.373 | 0.365 | -12.04 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 113.8 | 51.8% | 0.807 | 7.54 | 15.09 | 0.608 | 1.027 | -14.21 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Lệnh chờ hết hạn sau (nến) → 6 | 95.73 | 49.6% | 0.731 | 8.21 | 11.66 | 0.571 | 0.92 | -12.55 |  |

### Vòng 1316 — ngẫu nhiên nhiều thông số · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.72R, lời÷rủi ro 15.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 1D → 7 | 59.04 | 44.9% | 0.663 | 9.3 | 6.35 | 0.407 | 0.95 | -12.24 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + SL tối đa (% Entry) → 0.425 | 159.05 | 38.2% | 0.537 | 18.53 | 8.58 | 0.412 | 0.668 | -9.56 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.48 | 51% | 0.707 | 7.9 | 12.97 | 0.672 | 0.746 | -12.78 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: BOS → 0 | 112.22 | 50.3% | 0.785 | 7.95 | 14.12 | 0.601 | 0.982 | -13.59 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 124.89 | 43.9% | 0.548 | 10.88 | 11.48 | 0.57 | 0.527 | -16.83 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + R:R tối thiểu riêng khung 4H → 2 | 116.15 | 40.1% | 0.361 | 13.48 | 8.62 | 0.353 | 0.367 | -7.88 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 112.22 | 50% | 0.769 | 8.23 | 13.64 | 0.563 | 1.011 | -13.18 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Mức MACD → 1.13 | 99.96 | 44.2% | 0.552 | 9.82 | 10.18 | 0.593 | 0.515 | -8.94 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Mức RSI 30/70 → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 70.78 | 36.1% | 0.29 | 19.04 | 3.72 | 0.217 | 0.362 | -11.17 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 111.45 | 47.7% | 0.748 | 8.81 | 12.65 | 0.527 | 0.99 | -13.08 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 91.84 | 44.3% | 0.616 | 9.98 | 9.2 | 0.466 | 0.786 | -10.12 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 99.98 | 46.9% | 0.617 | 10.48 | 9.54 | 0.431 | 0.844 | -4.48 |  |
