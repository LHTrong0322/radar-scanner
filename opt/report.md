# Tối ưu tự động (chạy liên tục) — vòng 483

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 5466 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46.6% | 96.15R | 0.597 | 6.74R | 9.76R | 9.85 | 31 | 12.9% | -13.01R | -0.42 | 13.01R |
| **Tốt nhất** | 144 | 52.1% | 110.99R | 0.771 | 6.15R | 7.63R | 14.55 | 27 | 18.5% | -8.64R | -0.32 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 9 | 44.4% | 6.16R | 1 | 0% | -1.03R |
| 4H | 107 | 53.3% | 85.41R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46.6% | 96.15R | 9.76R | 9.85 | 31 | 12.9% | -13.01R |
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

### Vòng 481 — ngẫu nhiên nhiều thông số · mốc: tổng 112.56R, win 52.4%, rủi ro tụt vốn 7.67R, lời÷rủi ro 14.68

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + R:R tối thiểu riêng khung 4H → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 53.04 | 33.8% | 0.183 | 18.51 | 2.87 | 0.15 | 0.214 | -15.47 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + R:R tối thiểu riêng khung 1D → 2 | 102.07 | 46.7% | 0.611 | 9.33 | 10.94 | 0.644 | 0.581 | -7.92 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Trend (/100) → 19 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 107.93 | 50% | 0.683 | 8.23 | 13.11 | 0.538 | 0.861 | -11.25 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Entry (/100) → 33 + Điểm vùng: MACD cắt lên Signal → 0.438 + Xác nhận khung nhỏ (A2) → W | 60.14 | 34.8% | 0.218 | 22.23 | 2.71 | 0.255 | 0.18 | -7.02 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Fib sóng 4 → 0.938 + Khung lớn phải tăng (trend ≥) → 0.375 | 80.42 | 44.5% | 0.551 | 10.49 | 7.67 | 0.404 | 0.729 | -9.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + R:R tối thiểu tới TP1 → 2.38 + R:R tối thiểu riêng khung 1D → 2 | 95.43 | 45.3% | 0.527 | 9.48 | 10.07 | 0.574 | 0.488 | -8.96 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: POC volume profile cố định → 0.688 | 110.18 | 51% | 0.76 | 7.93 | 13.89 | 0.602 | 0.944 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: EMA 21 → 1.13 | 162.17 | 38.7% | 0.546 | 17.66 | 9.18 | 0.425 | 0.673 | -14.67 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: POC volume profile cố định → 0.813 | 112.56 | 52.4% | 0.776 | 7.67 | 14.68 | 0.624 | 0.953 | -8.64 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Ngưỡng điểm vào kèo → 77 + Trọng số phần R:R (/100) → 28 + Điểm vùng: EMA 50 → 1.13 | 116.17 | 41.5% | 0.561 | 12.37 | 9.39 | 0.509 | 0.612 | -11.53 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần Elliott (/100) → 6 | 103.9 | 48.2% | 0.758 | 8.09 | 12.84 | 0.638 | 0.884 | -9.94 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Số TP tối đa → 2 | 112.63 | 52.1% | 0.771 | 7.78 | 14.48 | 0.608 | 0.964 | -9.66 |  |

### Vòng 480 — ngẫu nhiên nhiều thông số · mốc: tổng 112.56R, win 52.4%, rủi ro tụt vốn 7.82R, lời÷rủi ro 14.39

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Trend (/100) → 19 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 147.5 | 37.8% | 0.493 | 19.24 | 7.67 | 0.368 | 0.618 | -14.52 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Break mây Ichimoku → 1 | 97.54 | 47.8% | 0.613 | 9.34 | 10.44 | 0.457 | 0.802 | -12.61 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 1W (ATR) → 0.3 | 70.57 | 44.9% | 0.66 | 9.74 | 7.25 | 0.434 | 0.917 | -7.52 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Trọng số phần SL (/100) → 9 + Trọng số phần Entry (/100) → 33 + SL tối đa (% Entry) → 0.425 | 108.27 | 50.7% | 0.752 | 8.2 | 13.2 | 0.596 | 0.931 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần Divergence (/100) → 12 | 112.37 | 52.1% | 0.77 | 7.66 | 14.67 | 0.614 | 0.953 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Cộng điểm phân kỳ dương ẩn → 2.63 + Trọng số phần Divergence (/100) → 9 + Trọng số phần Trend (/100) → 19 | 110.8 | 51.7% | 0.764 | 7.96 | 13.92 | 0.602 | 0.953 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 | 28.57 | 39.8% | 0.344 | 10.05 | 2.84 | 0.355 | 0.333 | -8.54 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 1D → 7 | 103.42 | 50.7% | 0.689 | 8.4 | 12.31 | 0.6 | 0.784 | -10.69 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Trọng số phần R:R (/100) → 28 + Cộng thêm ngưỡng điểm khung 1W → 2 | 110.26 | 51% | 0.771 | 7.76 | 14.21 | 0.643 | 0.912 | -9.64 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 1W (ATR) → 0.3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 75.26 | 42.2% | 0.649 | 10.46 | 7.2 | 0.627 | 0.674 | -8.24 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần SL (/100) → 9 | 109.78 | 51% | 0.747 | 8.05 | 13.64 | 0.593 | 0.93 | -9.66 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + SL tối đa (% Entry) → 0.425 | 83.86 | 38.5% | 0.34 | 16.9 | 4.96 | 0.299 | 0.377 | -4.56 |  |

### Vòng 479 — ngẫu nhiên nhiều thông số · mốc: tổng 112.56R, win 52.4%, rủi ro tụt vốn 7.74R, lời÷rủi ro 14.54

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: MACD cắt lên Signal → 0.438 + Khung lớn phải tăng (trend ≥) → 0.425 | 101.6 | 49.7% | 0.673 | 8.99 | 11.3 | 0.464 | 0.915 | -7.11 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Cổng Dow → TẮT | 125.35 | 44.5% | 0.594 | 11.38 | 11.01 | 0.523 | 0.665 | -15.18 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 108.12 | 50.3% | 0.746 | 8.05 | 13.43 | 0.513 | 1.002 | -9.52 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Trend (/100) → 19 | 108.13 | 51% | 0.756 | 7.85 | 13.77 | 0.578 | 0.964 | -10.95 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 26.77 | 56.7% | 0.171 | 6.09 | 4.4 | 0.214 | 0.129 | -10.55 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: POC anchored → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 83.8 | 47.4% | 0.537 | 9.72 | 8.62 | 0.512 | 0.565 | -6.54 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: HVN cố định → 0.563 | 79.7 | 50.4% | 0.67 | 8.17 | 9.76 | 0.613 | 0.736 | -16.96 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần Elliott (/100) → 10 | 111.04 | 51.7% | 0.776 | 7.62 | 14.57 | 0.64 | 0.931 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Mức RSI 30/70 → 0.875 + Cộng thêm ngưỡng điểm khung 1W → -1 | 88.72 | 48.1% | 0.677 | 9.1 | 9.75 | 0.379 | 1.02 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 28.94 | 51.6% | 0.114 | 14.11 | 2.05 | 0.081 | 0.142 | -16.52 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + R:R tối thiểu tới TP1 → 2.38 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 52.57 | 39.8% | 0.411 | 12.41 | 4.24 | 0.448 | 0.368 | -10.39 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Trọng số phần SL (/100) → 7 + Điểm vùng: Break mây Ichimoku → 1 | 99.36 | 48.7% | 0.662 | 8.69 | 11.43 | 0.525 | 0.816 | -11.02 |  |

### Vòng 478 — ngẫu nhiên nhiều thông số · mốc: tổng 112.56R, win 52.4%, rủi ro tụt vốn 7.75R, lời÷rủi ro 14.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Fib sóng 4 → 1.56 + Số TP tối đa → 2 | 71.53 | 47.2% | 0.675 | 8.62 | 8.3 | 0.485 | 0.904 | -6.48 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Cộng thêm ngưỡng điểm khung 4H → -1 + Cổng Dow → TẮT + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 105.69 | 42% | 0.528 | 12.28 | 8.61 | 0.485 | 0.57 | -15.18 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 50 → 1.13 | 113.88 | 48.1% | 0.739 | 8.83 | 12.9 | 0.698 | 0.79 | -9.22 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Trọng số phần SL (/100) → 7 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: EMA 50 → 1.13 | 107.76 | 50.3% | 0.743 | 8.08 | 13.34 | 0.577 | 0.942 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Divergence (/100) → 9 | 112.55 | 52.4% | 0.776 | 7.74 | 14.54 | 0.624 | 0.953 | -11.06 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + SL tối đa (% Entry) → 0.35 | 109.85 | 51.7% | 0.758 | 8.04 | 13.66 | 0.591 | 0.952 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần Trend (/100) → 12 | 117.88 | 44.2% | 0.526 | 11.27 | 10.46 | 0.598 | 0.454 | -10.24 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Lệnh chờ hết hạn sau (nến) → 6 | 83.89 | 47.4% | 0.612 | 9 | 9.32 | 0.549 | 0.678 | -9.3 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 57.64 | 42.2% | 0.358 | 12.92 | 4.46 | 0.28 | 0.426 | -7.09 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức MACD → 0.875 | 25.39 | 55.2% | 0.165 | 6.36 | 3.99 | 0.214 | 0.118 | -11.38 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 20.42 | 62.5% | 0.213 | 5.5 | 3.71 | 0.2 | 0.227 | -6.86 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Break mây Ichimoku → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 141.29 | 35.7% | 0.454 | 21.18 | 6.67 | 0.246 | 0.648 | -6.58 |  |

### Vòng 477 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.56R, lời÷rủi ro 15.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: Mức MACD → 0.875 | 103.84 | 48.7% | 0.692 | 8.69 | 11.95 | 0.548 | 0.857 | -10.69 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Trọng số phần Divergence (/100) → 9 | 112.87 | 51.4% | 0.784 | 7.81 | 14.45 | 0.675 | 0.909 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + SL tối đa (% Entry) → 0.35 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 78.71 | 45.7% | 0.486 | 10.34 | 7.61 | 0.423 | 0.551 | -9.52 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Coin phải mạnh hơn BTC trong N ngày → 14 | 73.54 | 50% | 0.645 | 8.22 | 8.95 | 0.526 | 0.782 | -17.45 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 70.41 | 47.1% | 0.677 | 8.76 | 8.04 | 0.465 | 0.934 | -6.59 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 97.83 | 44.4% | 0.639 | 9.96 | 9.82 | 0.59 | 0.705 | -8.52 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Cổng Dow → TẮT + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Elliott (/100) → 6 | 92.93 | 39.3% | 0.553 | 13.77 | 6.75 | 0.494 | 0.61 | -20.32 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 4H → -1 | 113.57 | 52.8% | 0.789 | 7.56 | 15.02 | 0.624 | 0.983 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + R:R tối thiểu riêng khung 1D → 2 | 109.29 | 47.7% | 0.621 | 9.09 | 12.02 | 0.693 | 0.548 | -4.7 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 1D → 7 | 94.5 | 45.8% | 0.618 | 9.82 | 9.62 | 0.554 | 0.67 | -8.96 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + R:R tối thiểu riêng khung 1W → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 98.2 | 50.3% | 0.677 | 8.19 | 11.99 | 0.584 | 0.774 | -10.69 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Divergence (/100) → 9 | 24.25 | 57% | 0.161 | 6.82 | 3.56 | 0.174 | 0.147 | -11.18 |  |

### Vòng 476 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.52R, lời÷rủi ro 15.10

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: HVN cố định → 0.438 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 102.56 | 48.6% | 0.733 | 8.8 | 11.65 | 0.658 | 0.821 | -8.09 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + SL tối đa (% Entry) → 0.425 | 109.63 | 51.4% | 0.761 | 7.65 | 14.33 | 0.63 | 0.912 | -9.66 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Ngưỡng điểm vào kèo → 74 | 120.85 | 49% | 0.77 | 8.33 | 14.51 | 0.746 | 0.798 | -10.24 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức MACD → 1.13 | 29.34 | 57.7% | 0.188 | 5.77 | 5.08 | 0.224 | 0.153 | -11.38 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Cổng Dow → TẮT | 118.62 | 42.5% | 0.573 | 11.9 | 9.97 | 0.494 | 0.651 | -15.18 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Fib sóng 4 → 1.56 | 109.84 | 50.3% | 0.758 | 8.01 | 13.71 | 0.655 | 0.864 | -10 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: HVN cố định → 0.563 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 92.54 | 50.7% | 0.652 | 8.4 | 11.02 | 0.612 | 0.697 | -9.42 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + SL tối đa (% Entry) → 0.35 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 | 34.83 | 39.5% | 0.405 | 10.57 | 3.3 | 0.295 | 0.537 | -6.21 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 | 85.85 | 45.5% | 0.557 | 10.52 | 8.16 | 0.578 | 0.541 | -8.7 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Divergence (/100) → 12 + % chốt ở TP1 → 0.287 | 111.81 | 51.4% | 0.766 | 7.75 | 14.43 | 0.617 | 0.937 | -8.32 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + R:R tối thiểu tới TP1 → 2.38 + R:R tối thiểu riêng khung 1D → 2 | 96.31 | 45.3% | 0.532 | 9.33 | 10.32 | 0.564 | 0.506 | -8.96 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: POC anchored → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 92.64 | 47.1% | 0.59 | 9.35 | 9.91 | 0.49 | 0.708 | -8.63 |  |

### Vòng 475 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.46R, lời÷rủi ro 15.22

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: EMA 200 → 1 | 111.04 | 51.2% | 0.694 | 8.53 | 13.02 | 0.558 | 0.869 | -4.7 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.43 | 57.9% | 0.198 | 5.53 | 5.68 | 0.22 | 0.176 | -10.3 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: MACD cắt lên Signal → 0.438 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Elliott (/100) → 10 | 92.79 | 45.3% | 0.668 | 9.94 | 9.34 | 0.436 | 0.889 | -8.12 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: EMA 200 → 3 + Trọng số phần Divergence (/100) → 9 | 99.32 | 49.3% | 0.699 | 8.18 | 12.14 | 0.472 | 0.954 | -8.6 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 95.63 | 51% | 0.659 | 8.36 | 11.44 | 0.612 | 0.715 | -9.42 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: POC volume profile cố định → 0.813 + Lệnh chờ hết hạn sau (nến) → 6 | 94.79 | 50.4% | 0.713 | 7.78 | 12.18 | 0.585 | 0.868 | -7.25 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Divergence (/100) → 9 + % chốt ở TP1 → 0.307 | 83.32 | 50.9% | 0.718 | 7.87 | 10.59 | 0.554 | 0.921 | -16.13 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Trend (/100) → 19 + Cộng thêm ngưỡng điểm khung 4H → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 108.76 | 50.7% | 0.716 | 8.16 | 13.33 | 0.587 | 0.866 | -11.25 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khung lớn phải tăng (trend ≥) → 0.375 | 94.11 | 50.7% | 0.645 | 8.38 | 11.23 | 0.596 | 0.7 | -9.42 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: POC anchored → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 98.03 | 49% | 0.649 | 8.58 | 11.43 | 0.527 | 0.786 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 97.14 | 45.3% | 0.571 | 9.19 | 10.57 | 0.587 | 0.556 | -8.5 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Cộng thêm ngưỡng điểm khung 4H → 2 | 111.35 | 51.8% | 0.79 | 7.61 | 14.63 | 0.639 | 0.961 | -9.66 |  |

### Vòng 474 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.52R, lời÷rủi ro 15.10

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + R:R tối thiểu riêng khung 1D → 2 | 103.42 | 46.2% | 0.605 | 9.13 | 11.33 | 0.594 | 0.615 | -7.92 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Cộng điểm phân kỳ dương ẩn → 2.63 + Xác nhận khung nhỏ (A2) → W | 80 | 37.4% | 0.325 | 17.78 | 4.5 | 0.302 | 0.346 | -4.56 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 3.5 + Đệm SL riêng khung 4H (ATR) → 0.3 | 169.31 | 38.4% | 0.555 | 19.21 | 8.81 | 0.504 | 0.602 | -12.54 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Khung lớn phải tăng (trend ≥) → 0.425 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 53.93 | 43.7% | 0.399 | 11.22 | 4.81 | 0.242 | 0.533 | -16.21 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: POC anchored → 4 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 87.28 | 48.4% | 0.542 | 10.08 | 8.66 | 0.482 | 0.607 | -1.67 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: BOS → 3 | 110.72 | 51.1% | 0.785 | 7.59 | 14.59 | 0.646 | 0.939 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần R:R (/100) → 33 | 100.62 | 49% | 0.675 | 8.58 | 11.73 | 0.516 | 0.86 | -11.02 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: POC volume profile cố định → 0.813 | 105.51 | 41.1% | 0.347 | 12.64 | 8.35 | 0.334 | 0.358 | -8.04 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Mức MACD → 1.13 | 110.17 | 51% | 0.76 | 7.97 | 13.82 | 0.581 | 0.974 | -11.06 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Trọng số phần Divergence (/100) → 12 + Điểm vùng: BOS → 1 | 78.31 | 51.3% | 0.693 | 7.11 | 11.01 | 0.305 | 1.048 | -10.72 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 95.52 | 47.9% | 0.579 | 10.24 | 9.33 | 0.449 | 0.743 | -7.36 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần R:R (/100) → 33 | 115.39 | 51.4% | 0.78 | 7.7 | 14.99 | 0.638 | 0.933 | -7.74 |  |
