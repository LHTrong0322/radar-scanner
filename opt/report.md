# Tối ưu tự động (chạy liên tục) — vòng 312

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 3414 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 160 | 46.3% | 90.4R | 0.565 | 5.74R | 10.25R | 8.82 | 31 | 12.9% | -13.01R | -0.42 | 13.01R |
| **Tốt nhất** | 144 | 52.8% | 113.57R | 0.789 | 6.15R | 7.51R | 15.12 | 27 | 18.5% | -8.64R | -0.32 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 106 | 53.8% | 86.41R | 20 | 25% | -2.83R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 160 | 46.3% | 90.4R | 10.25R | 8.82 | 31 | 12.9% | -13.01R |
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

### Vòng 312 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.51R, lời÷rủi ro 15.12

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Ngưỡng điểm vào kèo → 74 | 112.6 | 52.1% | 0.771 | 7.53 | 14.95 | 0.624 | 0.94 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 92.33 | 44.8% | 0.6 | 10.08 | 9.16 | 0.511 | 0.715 | -6.2 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Cộng điểm phân kỳ dương ẩn → 3.5 + Xác nhận khung nhỏ (A2) → W + SL tối đa (% Entry) → 0.425 | 93.6 | 39.6% | 0.39 | 15.45 | 6.06 | 0.339 | 0.432 | -4.57 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 | 123.55 | 44% | 0.38 | 11.54 | 10.71 | 0.337 | 0.419 | -8.11 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu riêng khung 1W → 2 | 91.9 | 48% | 0.613 | 9.44 | 9.74 | 0.455 | 0.788 | -7.09 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Đệm SL riêng khung 1W (ATR) → 0.3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 69 | 42.9% | 0.442 | 12.75 | 5.41 | 0.272 | 0.617 | -11.91 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 112.82 | 52.4% | 0.778 | 7.61 | 14.83 | 0.624 | 0.957 | -7.32 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 70.69 | 47.2% | 0.667 | 8.45 | 8.37 | 0.447 | 0.932 | -6.43 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 112.47 | 51% | 0.765 | 7.83 | 14.36 | 0.615 | 0.944 | -8.64 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần SL (/100) → 9 | 92.93 | 49.3% | 0.628 | 8.7 | 10.68 | 0.594 | 0.668 | -7.38 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần R:R (/100) → 28 | 81.74 | 50% | 0.717 | 7.82 | 10.45 | 0.569 | 0.893 | -15.1 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Cộng thêm ngưỡng điểm khung 4H → 2 | 111.35 | 51.8% | 0.79 | 7.7 | 14.46 | 0.639 | 0.961 | -7.62 |  |

### Vòng 311 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.58R, lời÷rủi ro 14.98

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 111.2 | 51% | 0.708 | 8.42 | 13.21 | 0.597 | 0.85 | -2.33 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 70.08 | 46.6% | 0.68 | 8.65 | 8.1 | 0.473 | 0.937 | -5.46 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trọng số phần SL (/100) → 9 | 109.19 | 51% | 0.743 | 7.8 | 14 | 0.596 | 0.918 | -9.6 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 92.86 | 44.8% | 0.57 | 11.14 | 8.34 | 0.55 | 0.589 | -4.01 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần SL (/100) → 9 | 108.28 | 48.3% | 0.757 | 8.54 | 12.68 | 0.5 | 1.026 | -9.54 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Divergence (/100) → 12 + R:R tối thiểu riêng khung 4H → 2 | 122.92 | 42.4% | 0.381 | 12.35 | 9.95 | 0.323 | 0.43 | -9.13 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: Fib sóng 4 → 1.56 | 105.16 | 51.4% | 0.73 | 8 | 13.14 | 0.57 | 0.919 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + R:R tối thiểu riêng khung 4H → 2 | 112.26 | 41.9% | 0.364 | 12.34 | 9.1 | 0.339 | 0.386 | -6.49 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Ngưỡng điểm vào kèo → 77 | 108.98 | 50.4% | 0.773 | 7.81 | 13.95 | 0.637 | 0.928 | -10.41 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 89.33 | 46.4% | 0.584 | 10.07 | 8.87 | 0.454 | 0.746 | -6.06 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Cộng điểm phân kỳ dương ẩn → 3.5 | 112.62 | 52.1% | 0.771 | 7.62 | 14.78 | 0.614 | 0.957 | -7.32 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Trọng số phần Elliott (/100) → 10 | 112.13 | 52.1% | 0.79 | 7.47 | 15.01 | 0.642 | 0.96 | -8.65 |  |

### Vòng 310 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.20

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 63.04 | 46.1% | 0.618 | 8.77 | 7.19 | 0.473 | 0.802 | -5.46 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 107.25 | 49% | 0.692 | 8.82 | 12.16 | 0.57 | 0.828 | -10.64 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Khung lớn phải tăng (trend ≥) → 0.375 | 104.43 | 50.7% | 0.706 | 7.62 | 13.7 | 0.573 | 0.858 | -8.98 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Khung lớn phải tăng (trend ≥) → 0.425 | 105.1 | 46.5% | 0.678 | 10.09 | 10.42 | 0.654 | 0.701 | -9.02 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 95.84 | 47.6% | 0.584 | 9.24 | 10.37 | 0.655 | 0.519 | -6.64 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: EMA 21 → 0.875 + Cộng điểm phân kỳ dương ẩn → 3.5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 118.16 | 48.7% | 0.767 | 8.46 | 13.97 | 0.773 | 0.76 | -9.22 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + % chốt ở TP1 → 0.287 | 113.39 | 52.8% | 0.787 | 7.48 | 15.16 | 0.621 | 0.984 | -8.62 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: HVN cố định → 0.563 | 105.43 | 51.4% | 0.712 | 7.96 | 13.24 | 0.621 | 0.809 | -9.67 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + % chốt ở TP1 → 0.307 + Trọng số phần Momentum (/100) → 21 | 109.51 | 51% | 0.755 | 7.8 | 14.04 | 0.622 | 0.911 | -8.65 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Số TP tối đa → 2 + Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 111.79 | 52.1% | 0.787 | 7.45 | 15.01 | 0.644 | 0.952 | -8.64 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Lệnh chờ hết hạn sau (nến) → 8 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 107.38 | 47.3% | 0.726 | 9.21 | 11.66 | 0.523 | 0.978 | -9.48 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 100.64 | 45.8% | 0.606 | 9.24 | 10.89 | 0.617 | 0.597 | -6.9 |  |

### Vòng 309 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.52R, lời÷rủi ro 15.10

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Khung lớn phải tăng (trend ≥) → 0.375 | 109.22 | 48.9% | 0.797 | 8.36 | 13.06 | 0.571 | 1.063 | -7.89 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Cổng Dow → CHẶT + Điểm vùng: EMA 50 → 1.13 | 74.12 | 49.1% | 0.674 | 7.85 | 9.44 | 0.261 | 1.044 | -10.99 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: POC anchored → 2 | 90.67 | 49% | 0.6 | 8.96 | 10.12 | 0.508 | 0.694 | -8.65 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Trọng số phần Trend (/100) → 19 + Cộng thêm ngưỡng điểm khung 1W → 2 + R:R tối thiểu riêng khung 1W → 2 | 104.71 | 50.7% | 0.708 | 8.02 | 13.06 | 0.627 | 0.791 | -9.67 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trọng số phần Momentum (/100) → 25 | 110.13 | 51% | 0.77 | 7.75 | 14.21 | 0.596 | 0.974 | -8.64 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: POC volume profile cố định → 0.813 | 30.71 | 58.3% | 0.197 | 5.54 | 5.54 | 0.235 | 0.159 | -10.13 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: EMA 21 → 0.875 | 104.72 | 49.6% | 0.743 | 8.4 | 12.47 | 0.646 | 0.85 | -7.59 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu riêng khung 1W → 2 | 22.25 | 36.6% | 0.271 | 11.6 | 1.92 | 0.149 | 0.462 | -7.25 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 107.97 | 52% | 0.71 | 8.31 | 12.99 | 0.586 | 0.852 | -7.32 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 129.14 | 45% | 0.559 | 10.61 | 12.17 | 0.503 | 0.617 | -9.06 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Trọng số phần Elliott (/100) → 10 + Cổng Dow → TẮT + R:R tối thiểu riêng khung 1D → 2 | 113.54 | 42.4% | 0.481 | 12.95 | 8.77 | 0.566 | 0.411 | -14.88 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trọng số phần SL (/100) → 7 + R:R tối thiểu riêng khung 1W → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 100.36 | 50.3% | 0.674 | 8.05 | 12.47 | 0.581 | 0.767 | -9.67 |  |

### Vòng 308 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.59R, lời÷rủi ro 14.96

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 91.3 | 46.9% | 0.621 | 9.44 | 9.67 | 0.494 | 0.791 | -9.16 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 32.31 | 57.5% | 0.202 | 5.19 | 6.23 | 0.226 | 0.179 | -11.35 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Xác nhận khung nhỏ (A2) → W + Điểm tối thiểu của vùng đặt SL → 2 + R:R tối thiểu riêng khung 1D → 2 | 88.11 | 38.3% | 0.296 | 17.62 | 5 | 0.347 | 0.244 | -7.68 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 104.31 | 51% | 0.7 | 8.01 | 13.02 | 0.6 | 0.807 | -10.7 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Số TP tối đa → 2 | 113.64 | 52.4% | 0.784 | 7.72 | 14.72 | 0.608 | 0.994 | -9.66 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 97.37 | 51.4% | 0.667 | 8.16 | 11.93 | 0.626 | 0.715 | -9.43 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + % chốt ở TP1 → 0.307 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 27.97 | 55.8% | 0.182 | 6.08 | 4.6 | 0.218 | 0.149 | -9.62 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: HVN anchored → 0.313 + Trọng số phần Entry (/100) → 33 | 34.21 | 57.7% | 0.219 | 5.74 | 5.96 | 0.28 | 0.161 | -10.23 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Divergence (/100) → 9 + Trọng số phần Elliott (/100) → 6 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 102.74 | 45.1% | 0.587 | 9.37 | 10.96 | 0.523 | 0.648 | -7.7 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Số TP tối đa → 2 + Khung lớn phải tăng (trend ≥) → 0.375 | 98.54 | 50.4% | 0.709 | 8.27 | 11.92 | 0.504 | 0.949 | -12.54 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: POC anchored → 2 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 96.59 | 49.3% | 0.635 | 9.13 | 10.58 | 0.432 | 0.856 | -8.49 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: EMA 200 → 1 + Xác nhận khung nhỏ (A2) → W | 92.97 | 39.3% | 0.344 | 16.83 | 5.52 | 0.335 | 0.354 | -6.71 |  |

### Vòng 307 — ngẫu nhiên nhiều thông số · mốc: tổng 110.28R, win 52.1%, rủi ro tụt vốn 7.81R, lời÷rủi ro 14.12

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: EMA 50 → 0.75 + % chốt ở TP1 → 0.307 | 97.16 | 49.7% | 0.661 | 8.58 | 11.32 | 0.494 | 0.855 | -8.65 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 125.53 | 44.3% | 0.546 | 11.12 | 11.29 | 0.565 | 0.526 | -8.38 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Cộng điểm phân kỳ dương ẩn → 2.63 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 109.09 | 41.9% | 0.354 | 12.53 | 8.71 | 0.321 | 0.383 | -7.24 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: MACD cắt lên Signal → 0.563 | 107.02 | 51.4% | 0.743 | 7.81 | 13.7 | 0.551 | 0.964 | -8.64 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: EMA 21 → 1.13 | 101.97 | 49% | 0.703 | 7.99 | 12.76 | 0.608 | 0.814 | -10.73 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: POC anchored → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 89.86 | 46.5% | 0.58 | 9.69 | 9.27 | 0.437 | 0.736 | -10.42 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Số TP tối đa → 2 | 126.82 | 43.9% | 0.593 | 11.67 | 10.87 | 0.518 | 0.668 | -18.3 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần R:R (/100) → 28 + Điểm vùng: BOS → 1 | 26.1 | 56% | 0.174 | 6.08 | 4.29 | 0.192 | 0.157 | -10.69 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + SL tối đa (% Entry) → 0.35 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 104.73 | 50% | 0.727 | 8.42 | 12.44 | 0.569 | 0.909 | -8.64 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + R:R tối thiểu tới TP1 → 2.38 | 91.72 | 46.2% | 0.58 | 9.14 | 10.04 | 0.484 | 0.677 | -9.95 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần R:R (/100) → 28 | 99.79 | 48.6% | 0.713 | 8.82 | 11.31 | 0.528 | 0.902 | -9.68 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: HVN anchored → 0.188 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 86.92 | 45.9% | 0.587 | 10.13 | 8.58 | 0.454 | 0.763 | -8.14 |  |

### Vòng 306 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.59R, lời÷rủi ro 14.96

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: BOS → 1 + Cộng thêm ngưỡng điểm khung 1D → 4 + R:R tối thiểu riêng khung 1W → 2 | 102.64 | 50.3% | 0.698 | 7.94 | 12.93 | 0.626 | 0.771 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 100.39 | 48.4% | 0.624 | 9.77 | 10.28 | 0.502 | 0.782 | -2.26 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 | 11.82 | 38.3% | 0.197 | 10.54 | 1.12 | 0.002 | 0.346 | -4.17 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 111.29 | 51.7% | 0.778 | 7.72 | 14.42 | 0.64 | 0.935 | -8.35 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: HVN anchored → 0.188 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 23.85 | 57.1% | 0.17 | 5.74 | 4.16 | 0.247 | 0.1 | -5.37 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 122.83 | 50% | 0.798 | 8.09 | 15.18 | 0.767 | 0.835 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 102.54 | 50% | 0.702 | 8.32 | 12.32 | 0.552 | 0.89 | -9.66 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + R:R tối thiểu riêng khung 1W → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 105.22 | 48.6% | 0.752 | 8.41 | 12.51 | 0.588 | 0.935 | -9.95 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Số TP tối đa → 2 | 110.86 | 52.1% | 0.759 | 7.8 | 14.21 | 0.606 | 0.94 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Break mây Ichimoku → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 54.05 | 41.4% | 0.334 | 13.18 | 4.1 | 0.388 | 0.273 | -7.33 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: EMA 200 → 1 + Lệnh chờ hết hạn sau (nến) → 8 + Cổng Dow → TẮT | 123.96 | 42.5% | 0.502 | 12.96 | 9.56 | 0.522 | 0.481 | -13.33 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + R:R tối thiểu tới TP1 → 2.63 + Cộng thêm ngưỡng điểm khung 1W → -1 | 95.47 | 51.7% | 0.796 | 7.97 | 11.98 | 0.557 | 1.069 | -11.65 |  |

### Vòng 305 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.39R, lời÷rủi ro 15.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 4H (ATR) → 0.3 | 78.95 | 30% | 0.195 | 34.35 | 2.3 | 0.201 | 0.191 | -41.46 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 92.08 | 43.9% | 0.532 | 12.93 | 7.12 | 0.544 | 0.52 | -2.29 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: BOS → 1 | 104.31 | 51% | 0.7 | 7.83 | 13.32 | 0.6 | 0.807 | -9.67 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 | 103.62 | 45.7% | 0.632 | 10.8 | 9.59 | 0.645 | 0.62 | -5.33 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Lệnh chờ hết hạn sau (nến) → 8 + Cộng thêm ngưỡng điểm khung 1W → 2 | 108.6 | 50% | 0.696 | 8.46 | 12.84 | 0.553 | 0.868 | -10.24 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 + R:R tối thiểu tới TP1 → 2.38 | 79.76 | 39.9% | 0.277 | 13.94 | 5.72 | 0.269 | 0.284 | -6.79 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 4H (ATR) → 0.3 | 71.56 | 29.4% | 0.181 | 36.46 | 1.96 | 0.175 | 0.186 | -34.04 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần Trend (/100) → 19 | 110.19 | 51.4% | 0.765 | 7.65 | 14.4 | 0.595 | 0.967 | -8.46 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 71.72 | 46.5% | 0.556 | 9.65 | 7.43 | 0.483 | 0.635 | -3.27 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần R:R (/100) → 28 | 103.81 | 49.4% | 0.674 | 9.12 | 11.38 | 0.491 | 0.894 | -6.06 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Cộng thêm ngưỡng điểm khung 1D → 7 | 102.08 | 49.3% | 0.719 | 8.23 | 12.4 | 0.584 | 0.874 | -9.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1D → 4 + Đệm SL riêng khung 1D (ATR) → 0.3 | 91.31 | 43.8% | 0.597 | 11.67 | 7.82 | 0.531 | 0.653 | -6.37 |  |

### Vòng 304 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.20

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Elliott (/100) → 6 + R:R tối thiểu tới TP1 → 2.38 | 96.41 | 45.3% | 0.533 | 9.21 | 10.47 | 0.554 | 0.514 | -7.93 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 99.19 | 49.3% | 0.661 | 8.87 | 11.18 | 0.523 | 0.827 | -6.06 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + SL tối đa (% Entry) → 0.35 + Số TP tối đa → 2 | 110.89 | 51.7% | 0.775 | 7.93 | 13.98 | 0.609 | 0.964 | -7.62 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: HVN anchored → 0.313 + Cộng thêm ngưỡng điểm khung 1W → -1 + Khung lớn phải tăng (trend ≥) → 0.425 | 102.62 | 51.1% | 0.749 | 7.76 | 13.22 | 0.568 | 0.956 | -8.67 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + R:R tối thiểu riêng khung 1D → 2 | 103.68 | 46.5% | 0.61 | 9.19 | 11.28 | 0.606 | 0.614 | -6.9 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: BOS → 3 | 109.84 | 50.3% | 0.758 | 7.82 | 14.05 | 0.655 | 0.864 | -8.98 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trọng số phần Momentum (/100) → 21 + R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 1W → 2 | 104.5 | 50.7% | 0.706 | 8.05 | 12.98 | 0.624 | 0.791 | -9.67 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 102.06 | 48.4% | 0.658 | 9.45 | 10.8 | 0.477 | 0.873 | -6.06 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 109.84 | 50.3% | 0.758 | 7.82 | 14.05 | 0.655 | 0.864 | -8.98 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 63.04 | 46.1% | 0.618 | 8.77 | 7.19 | 0.473 | 0.802 | -5.46 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Fib sóng 4 → 1.56 | 112.43 | 52.4% | 0.765 | 7.82 | 14.38 | 0.587 | 0.982 | -8.65 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + R:R tối thiểu riêng khung 4H → 2 | 111.73 | 41.7% | 0.362 | 12.26 | 9.11 | 0.339 | 0.38 | -9.82 |  |

### Vòng 303 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Ngưỡng điểm vào kèo → 74 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 72.74 | 47.1% | 0.611 | 8.69 | 8.37 | 0.498 | 0.753 | -15.1 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần SL (/100) → 9 | 99.43 | 51.3% | 0.654 | 8.19 | 12.14 | 0.595 | 0.724 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 111.63 | 52.1% | 0.775 | 7.48 | 14.92 | 0.609 | 0.966 | -8.46 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần Momentum (/100) → 25 | 113.57 | 52.8% | 0.789 | 7.44 | 15.26 | 0.624 | 0.983 | -8.64 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: BOS → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 110.85 | 49.3% | 0.729 | 8.45 | 13.12 | 0.584 | 0.899 | -9.67 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + R:R tối thiểu riêng khung 4H → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 110.12 | 42.9% | 0.363 | 12.71 | 8.66 | 0.357 | 0.369 | -6.27 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 20.62 | 41.5% | 0.389 | 8.95 | 2.3 | 0.189 | 0.582 | -2.73 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Mức RSI 30/70 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 112.47 | 49.7% | 0.745 | 8.16 | 13.78 | 0.611 | 0.899 | -9.67 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Số TP tối đa → 2 + Trọng số phần Entry (/100) → 33 | 110.3 | 51.8% | 0.794 | 7.43 | 14.85 | 0.674 | 0.93 | -8.64 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Số TP tối đa → 2 | 166.68 | 38.9% | 0.569 | 18.24 | 9.14 | 0.397 | 0.745 | -12.13 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Biên mây Ichimoku → 1.05 | 91.9 | 49.7% | 0.601 | 9.71 | 9.46 | 0.489 | 0.733 | -8.18 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Biên mây Ichimoku → 1.35 | 107.94 | 50% | 0.76 | 7.91 | 13.65 | 0.622 | 0.91 | -7.62 |  |
