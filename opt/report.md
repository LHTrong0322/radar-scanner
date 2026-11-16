# Tối ưu tự động (chạy liên tục) — vòng 491

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 5562 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46% | 89.39R | 0.555 | 6.74R | 10.4R | 8.60 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 145 | 52.4% | 112.56R | 0.776 | 6.15R | 7.79R | 14.45 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 107 | 53.3% | 85.41R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46% | 89.39R | 10.4R | 8.60 | 32 | 12.5% | -14.03R |
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

### Vòng 491 — từng thông số · mốc: tổng 112.56R, win 52.4%, rủi ro tụt vốn 7.79R, lời÷rủi ro 14.45

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: Fib sóng 4: 1.25 → 0.938 | 110.82 | 52.1% | 0.77 | 7.53 | 14.72 | 0.61 | 0.953 | -9.66 |  |
| Điểm vùng: Fib sóng 4: 1.25 → 1.56 | 112.34 | 52.4% | 0.764 | 7.68 | 14.63 | 0.606 | 0.953 | -9.66 |  |
| Ngưỡng điểm vào kèo: 75 → 74 | 112.05 | 52.1% | 0.767 | 7.83 | 14.31 | 0.624 | 0.932 | -9.66 |  |
| Ngưỡng điểm vào kèo: 75 → 77 | 106.2 | 50.4% | 0.753 | 7.79 | 13.63 | 0.646 | 0.872 | -8.61 |  |
| R:R tối thiểu tới TP1: 2.5 → 2.38 | 94.45 | 47.1% | 0.602 | 8.88 | 10.64 | 0.539 | 0.662 | -10.97 |  |
| R:R tối thiểu tới TP1: 2.5 → 2.63 | 93.9 | 50.8% | 0.783 | 8.32 | 11.29 | 0.557 | 1.032 | -10.63 |  |
| Ngưỡng điểm 'vào ngay' (tín hiệu mạnh): 6 → 5 | 83.27 | 44.9% | 0.566 | 10.2 | 8.16 | 0.425 | 0.745 | -9.16 |  |
| Ngưỡng điểm 'vào ngay' (tín hiệu mạnh): 6 → 7 | 98.16 | 51% | 0.677 | 8.33 | 11.78 | 0.623 | 0.738 | -8.84 |  |
| SL tối đa (% Entry): 0.425 → 0.387 | 112.56 | 52.4% | 0.776 | 7.79 | 14.45 | 0.624 | 0.953 | -9.66 |  |
| SL tối đa (% Entry): 0.425 → 0.5 | 113.57 | 52.8% | 0.789 | 7.46 | 15.22 | 0.624 | 0.983 | -9.66 | ✅ |
| Đệm SL dưới vùng hỗ trợ (ATR): 1 → 0.95 | 106.93 | 50% | 0.743 | 8.27 | 12.93 | 0.504 | 1.002 | -9.52 |  |
| Đệm SL dưới vùng hỗ trợ (ATR): 1 → 1.05 | 95.07 | 48.9% | 0.674 | 8.57 | 11.09 | 0.462 | 0.929 | -11.51 |  |

Nhận: SL tối đa (% Entry) 0.425 → 0.5

### Vòng 490 — từng thông số · mốc: tổng 112.56R, win 52.4%, rủi ro tụt vốn 7.66R, lời÷rủi ro 14.69

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: Vùng RSI 45–55: 1 → 0.875 | 108.56 | 49.7% | 0.749 | 8.28 | 13.11 | 0.66 | 0.838 | -10 |  |
| Điểm vùng: Vùng RSI 45–55: 1 → 1.13 | 100.46 | 49.3% | 0.688 | 8.49 | 11.83 | 0.545 | 0.861 | -9.66 |  |
| Điểm vùng: Biên mây Ichimoku: 1.2 → 1.05 | 102.04 | 51.4% | 0.699 | 8.13 | 12.55 | 0.579 | 0.833 | -11.78 |  |
| Điểm vùng: Biên mây Ichimoku: 1.2 → 1.35 | 108.78 | 51% | 0.74 | 8.21 | 13.25 | 0.581 | 0.924 | -8.64 |  |
| Điểm vùng: Mức sai Elliott (cho SL): 2 → 1 | 107.49 | 51% | 0.731 | 8.13 | 13.22 | 0.585 | 0.901 | -10.63 |  |
| Điểm vùng: Mức sai Elliott (cho SL): 2 → 3 | 109.38 | 51.4% | 0.76 | 7.69 | 14.22 | 0.605 | 0.937 | -9.48 |  |
| Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự): 1 → 0.875 | 112.56 | 52.4% | 0.776 | 7.66 | 14.69 | 0.624 | 0.953 | -9.66 |  |
| Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự): 1 → 1.13 | 112.56 | 52.4% | 0.776 | 7.66 | 14.69 | 0.624 | 0.953 | -9.66 |  |
| Điểm vùng: MACD cắt lên Signal: 0.5 → 0.438 | 104.06 | 49.4% | 0.667 | 9.26 | 11.24 | 0.482 | 0.888 | -7.08 |  |
| Điểm vùng: MACD cắt lên Signal: 0.5 → 0.563 | 112.56 | 52.4% | 0.776 | 7.66 | 14.69 | 0.624 | 0.953 | -9.66 |  |
| Điểm vùng: Fib 0.5 / 0.382 sóng 2: 3 → 2 | 112.55 | 52.4% | 0.776 | 7.72 | 14.58 | 0.624 | 0.953 | -11.06 |  |
| Điểm vùng: Fib 0.5 / 0.382 sóng 2: 3 → 4 | 111.44 | 52.1% | 0.763 | 7.73 | 14.42 | 0.603 | 0.952 | -9.66 |  |

### Vòng 489 — từng thông số · mốc: tổng 112.56R, win 52.4%, rủi ro tụt vốn 7.74R, lời÷rủi ro 14.54

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4): 3.44 → 3.13 | 111.22 | 52.4% | 0.767 | 7.57 | 14.69 | 0.623 | 0.934 | -9.66 |  |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4): 3.44 → 3.75 | 109.42 | 52.7% | 0.739 | 7.71 | 14.19 | 0.606 | 0.896 | -9.66 |  |
| Điểm vùng: Mức RSI 30/70: 1 → 0.875 | 115.62 | 51.6% | 0.736 | 8.36 | 13.83 | 0.571 | 0.942 | -9.66 |  |
| Điểm vùng: Mức RSI 30/70: 1 → 1.13 | 112.56 | 52.4% | 0.776 | 7.74 | 14.54 | 0.624 | 0.953 | -9.66 |  |
| Điểm vùng: Mức MACD: 1 → 0.875 | 105.39 | 51.4% | 0.742 | 7.97 | 13.22 | 0.61 | 0.89 | -9.66 |  |
| Điểm vùng: Mức MACD: 1 → 1.13 | 109.18 | 50.7% | 0.748 | 7.95 | 13.73 | 0.581 | 0.944 | -9.66 |  |
| Điểm vùng: POC volume profile cố định: 0.75 → 0.688 | 112.56 | 52.4% | 0.776 | 7.74 | 14.54 | 0.624 | 0.953 | -9.66 |  |
| Điểm vùng: POC volume profile cố định: 0.75 → 0.813 | 112.56 | 52.4% | 0.776 | 7.74 | 14.54 | 0.624 | 0.953 | -8.64 |  |
| Điểm vùng: HVN anchored: 0.25 → 0.188 | 112.56 | 52.4% | 0.776 | 7.74 | 14.54 | 0.624 | 0.953 | -9.66 |  |
| Điểm vùng: HVN anchored: 0.25 → 0.313 | 109.8 | 51.4% | 0.752 | 8.05 | 13.64 | 0.581 | 0.953 | -9.66 |  |
| Điểm vùng: HVN cố định: 0.5 → 0.438 | 109.79 | 51.4% | 0.752 | 8.05 | 13.64 | 0.581 | 0.953 | -9.66 |  |
| Điểm vùng: HVN cố định: 0.5 → 0.563 | 112.56 | 52.4% | 0.776 | 7.74 | 14.54 | 0.624 | 0.953 | -9.66 |  |

### Vòng 488 — từng thông số · mốc: tổng 112.56R, win 52.4%, rủi ro tụt vốn 7.81R, lời÷rủi ro 14.41

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: EMA 200: 2 → 1 | 115.43 | 51.6% | 0.735 | 8.42 | 13.71 | 0.597 | 0.911 | -4.67 |  |
| Điểm vùng: EMA 200: 2 → 3 | 102.83 | 50.3% | 0.719 | 7.98 | 12.89 | 0.532 | 0.926 | -9.62 |  |
| Điểm vùng: EMA 50: 0.94 → 0.75 | 110.11 | 52.4% | 0.77 | 7.7 | 14.3 | 0.61 | 0.947 | -9.66 |  |
| Điểm vùng: EMA 50: 0.94 → 1.13 | 108.66 | 50.3% | 0.749 | 8.11 | 13.4 | 0.587 | 0.943 | -8.64 |  |
| Điểm vùng: EMA 21: 1 → 0.875 | 111.59 | 50.7% | 0.775 | 7.96 | 14.02 | 0.68 | 0.881 | -9.66 |  |
| Điểm vùng: EMA 21: 1 → 1.13 | 107.14 | 51.4% | 0.734 | 7.73 | 13.86 | 0.617 | 0.867 | -10 |  |
| Điểm vùng: Break mây Ichimoku: 2 → 1 | 100.82 | 49.3% | 0.681 | 8.57 | 11.76 | 0.544 | 0.834 | -11.02 |  |
| Điểm vùng: Break mây Ichimoku: 2 → 3 | 106.64 | 49.1% | 0.654 | 9.24 | 11.54 | 0.496 | 0.835 | -9.4 |  |
| Điểm vùng: Kháng cự cũ bị phá: 1.5 → 1.31 | 111.55 | 52.1% | 0.764 | 7.68 | 14.52 | 0.604 | 0.953 | -9.66 |  |
| Điểm vùng: Kháng cự cũ bị phá: 1.5 → 1.69 | 109.34 | 51.8% | 0.775 | 7.7 | 14.2 | 0.61 | 0.964 | -10.95 |  |
| Điểm vùng: Fib 0.618 sóng 2: 2.5 → 2.19 | 112.56 | 52.4% | 0.776 | 7.81 | 14.41 | 0.624 | 0.953 | -9.66 |  |
| Điểm vùng: Fib 0.618 sóng 2: 2.5 → 2.81 | 112.56 | 52.4% | 0.776 | 7.81 | 14.41 | 0.624 | 0.953 | -9.66 |  |

### Vòng 487 — ngẫu nhiên nhiều thông số · mốc: tổng 107.93R, win 51.7%, rủi ro tụt vốn 7.92R, lời÷rủi ro 13.63

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: Fib sóng 4 → 0.938 | 106 | 51% | 0.731 | 8.13 | 13.04 | 0.54 | 0.953 | -9.66 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: EMA 21 → 1.13 + Cộng thêm ngưỡng điểm khung 1D → 4 | 100.39 | 50.3% | 0.702 | 8.03 | 12.5 | 0.544 | 0.881 | -10.04 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Trọng số phần Entry (/100) → 28 + Điểm vùng: POC volume profile cố định → 0.688 | 107.74 | 51.4% | 0.738 | 7.92 | 13.6 | 0.555 | 0.953 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + R:R tối thiểu riêng khung 4H → 2 | 105.49 | 41.6% | 0.34 | 12.72 | 8.29 | 0.304 | 0.371 | -10.52 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Trọng số phần Divergence (/100) → 9 | 107.68 | 51.7% | 0.743 | 7.97 | 13.51 | 0.575 | 0.933 | -9.66 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Trend (/100) → 19 + Điểm vùng: POC anchored → 2 + R:R tối thiểu riêng khung 4H → 2 | 114.78 | 41.7% | 0.358 | 12.32 | 9.32 | 0.31 | 0.399 | -13.46 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: POC volume profile cố định → 0.688 + Lệnh chờ hết hạn sau (nến) → 6 | 85.75 | 48.9% | 0.645 | 8.47 | 10.12 | 0.53 | 0.781 | -9.23 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 + Ngưỡng điểm vào kèo → 74 | 109.42 | 50.7% | 0.749 | 7.95 | 13.76 | 0.616 | 0.902 | -12.92 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 92.83 | 50.3% | 0.632 | 8.69 | 10.68 | 0.573 | 0.7 | -9.42 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Cộng điểm phân kỳ dương ẩn → 2.63 | 108.95 | 52.1% | 0.757 | 7.67 | 14.2 | 0.585 | 0.953 | -9.66 | ✅ |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu riêng khung 4H → 2 | 95.38 | 40.6% | 0.305 | 13.72 | 6.95 | 0.254 | 0.35 | -10.22 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 50 → 0.75 + Trọng số phần Trend (/100) → 12 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 26.24 | 57.1% | 0.168 | 6.1 | 4.3 | 0.188 | 0.15 | -9.65 |  |

Nhận: SL tối đa (% Entry) 0.387 → 0.425 · Cộng điểm phân kỳ dương ẩn 3 → 2.63

### Vòng 486 — ngẫu nhiên nhiều thông số · mốc: tổng 112.56R, win 52.4%, rủi ro tụt vốn 7.82R, lời÷rủi ro 14.39

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Cộng điểm phân kỳ dương ẩn → 2.63 | 113.81 | 51.7% | 0.796 | 7.62 | 14.94 | 0.67 | 0.942 | -12.92 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Divergence (/100) → 12 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 102.28 | 49.7% | 0.686 | 8.6 | 11.89 | 0.505 | 0.88 | -9.53 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 109.7 | 51.7% | 0.767 | 7.64 | 14.36 | 0.639 | 0.912 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Mức RSI 30/70 → 0.875 | 109.13 | 52.2% | 0.678 | 8.25 | 13.23 | 0.557 | 0.827 | -11.78 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Biên mây Ichimoku → 1.05 + % chốt ở TP1 → 0.307 + Cộng thêm ngưỡng điểm khung 4H → 2 | 101.38 | 50.7% | 0.714 | 7.68 | 13.2 | 0.617 | 0.819 | -11.79 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Đệm SL riêng khung 1W (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Fib sóng 4 → 1.56 | 93.8 | 49% | 0.656 | 9.29 | 10.1 | 0.573 | 0.742 | -10.34 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: EMA 21 → 0.875 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 72.83 | 43.6% | 0.447 | 10.51 | 6.93 | 0.396 | 0.494 | -10.96 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần R:R (/100) → 28 | 105.12 | 48.4% | 0.653 | 9.29 | 11.32 | 0.507 | 0.816 | -9.4 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 4H → 2 + Trọng số phần R:R (/100) → 28 | 57.64 | 39.8% | 0.25 | 14.81 | 3.89 | 0.231 | 0.27 | -7.99 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: POC volume profile cố định → 0.813 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 109.85 | 49% | 0.718 | 8.75 | 12.55 | 0.584 | 0.872 | -9.67 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng điểm phân kỳ dương ẩn → 2.63 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 98.09 | 51% | 0.667 | 8.67 | 11.31 | 0.624 | 0.716 | -7.53 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần Elliott (/100) → 10 | 108.58 | 47.4% | 0.705 | 9.13 | 11.89 | 0.634 | 0.778 | -11.03 |  |

### Vòng 485 — ngẫu nhiên nhiều thông số · mốc: tổng 112.56R, win 52.4%, rủi ro tụt vốn 7.74R, lời÷rủi ro 14.54

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: HVN cố định → 0.563 | 108.12 | 50.3% | 0.746 | 8.23 | 13.14 | 0.513 | 1.002 | -9.52 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: EMA 21 → 0.875 + SL tối đa (% Entry) → 0.35 | 100.37 | 45.5% | 0.608 | 9.67 | 10.38 | 0.633 | 0.586 | -7.92 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Mức RSI 30/70 → 1.13 | 62.85 | 45% | 0.577 | 9.97 | 6.3 | 0.432 | 0.741 | -6.08 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Cổng Dow → TẮT + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 104.78 | 41% | 0.499 | 12.39 | 8.46 | 0.575 | 0.427 | -17.67 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: EMA 200 → 1 | 105.37 | 48.4% | 0.663 | 9.13 | 11.54 | 0.608 | 0.728 | -9.83 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trọng số phần SL (/100) → 7 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Cộng thêm ngưỡng điểm khung 4H → -1 | 107.42 | 51.7% | 0.731 | 7.85 | 13.68 | 0.601 | 0.882 | -10.63 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 94.53 | 50% | 0.639 | 8.8 | 10.74 | 0.639 | 0.638 | -9.93 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Mức RSI 30/70 → 0.875 | 88.72 | 48.1% | 0.677 | 9.27 | 9.57 | 0.379 | 1.02 | -10.63 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: HVN anchored → 0.313 | 160.74 | 38.6% | 0.554 | 18.17 | 8.85 | 0.395 | 0.716 | -12.33 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 80.77 | 47.2% | 0.657 | 9.54 | 8.47 | 0.426 | 0.906 | -8.05 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 36.13 | 34.9% | 0.214 | 16 | 2.26 | 0.266 | 0.158 | -1.74 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu tới TP1 → 2.63 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 178.1 | 39.8% | 0.65 | 17.26 | 10.32 | 0.525 | 0.784 | -12.7 |  |

### Vòng 484 — ngẫu nhiên nhiều thông số · mốc: tổng 112.56R, win 52.4%, rủi ro tụt vốn 7.75R, lời÷rủi ro 14.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: EMA 50 → 0.75 | 107.6 | 51.4% | 0.747 | 8.03 | 13.4 | 0.568 | 0.953 | -9.66 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 27.68 | 57.7% | 0.177 | 6.54 | 4.23 | 0.245 | 0.113 | -10.97 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + SL tối đa (% Entry) → 0.425 | 98.69 | 49.7% | 0.654 | 8.57 | 11.52 | 0.537 | 0.782 | -8.63 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm tối thiểu của vùng đặt SL → 2 + R:R tối thiểu tới TP1 → 2.63 | 79.18 | 47% | 0.689 | 8.72 | 9.08 | 0.466 | 0.915 | -7.64 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: BOS → 3 + Trọng số phần Divergence (/100) → 9 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 129.72 | 44.1% | 0.609 | 11.52 | 11.26 | 0.569 | 0.649 | -15.18 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Divergence (/100) → 12 + Trọng số phần SL (/100) → 9 | 110.9 | 51.4% | 0.76 | 7.83 | 14.16 | 0.614 | 0.931 | -9.66 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC anchored → 2 | 43.65 | 46.4% | 0.52 | 8.49 | 5.14 | 0.284 | 0.745 | -6.26 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 73.2 | 46.6% | 0.55 | 9.9 | 7.39 | 0.427 | 0.687 | -4.26 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + R:R tối thiểu riêng khung 1W → 2 | 98.06 | 35.7% | 0.346 | 22.78 | 4.3 | 0.343 | 0.35 | -14.09 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 110.81 | 51.4% | 0.759 | 7.91 | 14.01 | 0.609 | 0.931 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Số TP tối đa → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm tối thiểu của vùng đặt SL → 2 | 109.52 | 52.1% | 0.75 | 7.99 | 13.71 | 0.667 | 0.838 | -9.66 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cổng Dow → CHẶT + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 50.14 | 48.8% | 0.627 | 7.75 | 6.47 | 0.249 | 0.986 | -7.37 |  |

### Vòng 483 — ngẫu nhiên nhiều thông số · mốc: tổng 110.99R, win 52.1%, rủi ro tụt vốn 7.63R, lời÷rủi ro 14.55

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 103.56 | 49% | 0.724 | 8.31 | 12.46 | 0.571 | 0.893 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Biên mây Ichimoku → 1.35 + Số TP tối đa → 2 | 108.28 | 50.7% | 0.742 | 8.2 | 13.2 | 0.573 | 0.935 | -7.62 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trọng số phần Elliott (/100) → 6 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 107.78 | 47.5% | 0.764 | 8.81 | 12.23 | 0.579 | 0.975 | -7.89 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 200 → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 60.92 | 43.5% | 0.564 | 9.8 | 6.22 | 0.333 | 0.822 | -5.9 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 84.01 | 47.1% | 0.609 | 9.52 | 8.82 | 0.521 | 0.694 | -9.46 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 92.15 | 44.1% | 0.635 | 10.97 | 8.4 | 0.626 | 0.643 | -5.36 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: HVN cố định → 0.438 | 107.99 | 51% | 0.735 | 8.14 | 13.27 | 0.551 | 0.953 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Cổng Dow → CHẶT + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 60.5 | 50.5% | 0.545 | 8.17 | 7.41 | 0.311 | 0.752 | -8.68 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 106.83 | 52% | 0.722 | 7.91 | 13.51 | 0.573 | 0.896 | -8.64 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Trọng số phần SL (/100) → 7 + Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 4H → 2 | 156.32 | 38.6% | 0.539 | 17.83 | 8.77 | 0.345 | 0.736 | -16.63 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 102.7 | 46.8% | 0.739 | 9.27 | 11.08 | 0.548 | 0.944 | -8.24 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cổng Dow → CHẶT + Xác nhận khung nhỏ (A2) → W | 24.68 | 33.9% | 0.142 | 22.75 | 1.08 | 0.174 | 0.114 | -9.39 |  |

### Vòng 482 — ngẫu nhiên nhiều thông số · mốc: tổng 112.56R, win 52.4%, rủi ro tụt vốn 7.8R, lời÷rủi ro 14.43

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số TP tối đa → 2 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Elliott (/100) → 6 | 38.52 | 41.1% | 0.428 | 10.34 | 3.73 | 0.329 | 0.546 | -6.21 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Trọng số phần Trend (/100) → 19 | 112.43 | 51.7% | 0.765 | 7.72 | 14.56 | 0.598 | 0.964 | -9.66 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Trọng số phần Entry (/100) → 33 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 110.29 | 51.4% | 0.766 | 7.71 | 14.3 | 0.64 | 0.907 | -8.34 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Trend (/100) → 19 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 112.37 | 52.1% | 0.77 | 7.65 | 14.69 | 0.614 | 0.953 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 70.57 | 44.9% | 0.66 | 9.6 | 7.35 | 0.434 | 0.917 | -7.52 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Lệnh chờ hết hạn sau (nến) → 6 | 91.63 | 50% | 0.684 | 8.09 | 11.33 | 0.573 | 0.816 | -8.27 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 113.49 | 50% | 0.718 | 8.47 | 13.4 | 0.829 | 0.582 | -10.01 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + SL tối đa (% Entry) → 0.425 | 105.93 | 50.4% | 0.751 | 7.81 | 13.56 | 0.584 | 0.941 | -10.95 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: POC volume profile cố định → 0.688 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 69.87 | 46.7% | 0.665 | 8.69 | 8.04 | 0.473 | 0.894 | -6.48 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Trọng số phần R:R (/100) → 33 + Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: EMA 50 → 0.75 | 105.12 | 50.3% | 0.715 | 8.27 | 12.71 | 0.516 | 0.947 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 79.23 | 47.5% | 0.562 | 9.23 | 8.58 | 0.552 | 0.574 | -9.5 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + R:R tối thiểu riêng khung 1W → 2 | 74.99 | 38.3% | 0.312 | 17.01 | 4.41 | 0.329 | 0.297 | -7.13 |  |
