# Tối ưu tự động (chạy liên tục) — vòng 342

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 3774 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46.6% | 95.4R | 0.593 | 5.74R | 9.74R | 9.79 | 31 | 12.9% | -13.01R | -0.42 | 13.01R |
| **Tốt nhất** | 145 | 53.1% | 118.93R | 0.82 | 6.15R | 7.16R | 16.61 | 27 | 18.5% | -8.64R | -0.32 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 107 | 54.2% | 91.78R | 20 | 25% | -2.83R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46.6% | 95.4R | 9.74R | 9.79 | 31 | 12.9% | -13.01R |
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

### Vòng 342 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.16R, lời÷rủi ro 16.61

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Trọng số phần SL (/100) → 9 | 112.79 | 51.4% | 0.773 | 7.78 | 14.5 | 0.558 | 1.019 | -8.64 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: POC anchored → 2 | 95.17 | 45.1% | 0.622 | 9.7 | 9.81 | 0.466 | 0.806 | -8.94 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 114.9 | 51% | 0.804 | 7.71 | 14.9 | 0.623 | 1.003 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: HVN cố định → 0.438 + Trọng số phần Entry (/100) → 33 + R:R tối thiểu tới TP1 → 2.38 | 98.84 | 46% | 0.606 | 9.23 | 10.71 | 0.515 | 0.696 | -9.95 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: EMA 21 → 0.875 + Trọng số phần SL (/100) → 9 | 107.18 | 50% | 0.744 | 8.31 | 12.9 | 0.654 | 0.845 | -7.59 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Divergence (/100) → 9 | 109.62 | 51.4% | 0.761 | 8.18 | 13.4 | 0.568 | 0.984 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Mức RSI 30/70 → 0.875 | 122.13 | 52.2% | 0.768 | 8.25 | 14.8 | 0.577 | 1.005 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần R:R (/100) → 28 + Cộng thêm ngưỡng điểm khung 1D → 7 | 109.18 | 49.7% | 0.704 | 9.09 | 12.01 | 0.491 | 0.957 | -5.01 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + SL tối đa (% Entry) → 0.35 + Trọng số phần Divergence (/100) → 9 | 59.66 | 42.5% | 0.528 | 11.33 | 5.27 | 0.352 | 0.742 | -6.89 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Trọng số phần Entry (/100) → 33 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 110.97 | 48.9% | 0.822 | 8.08 | 13.73 | 0.619 | 1.061 | -6.88 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: POC anchored → 4 | 123.38 | 47.8% | 0.766 | 9.78 | 12.62 | 0.726 | 0.801 | -0.41 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: BOS → 1 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 28.56 | 56.1% | 0.184 | 5.81 | 4.92 | 0.218 | 0.155 | -10.08 |  |

### Vòng 341 — ngẫu nhiên nhiều thông số · mốc: tổng 118.16R, win 53.5%, rủi ro tụt vốn 7.32R, lời÷rủi ro 16.14

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 29.17 | 57.6% | 0.185 | 6.39 | 4.56 | 0.186 | 0.184 | -11.14 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + R:R tối thiểu riêng khung 1D → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 97.03 | 46.8% | 0.614 | 8.96 | 10.83 | 0.53 | 0.688 | -9.86 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: EMA 200 → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 106.4 | 50.3% | 0.705 | 7.98 | 13.33 | 0.523 | 0.904 | -7.75 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 36.5 | 40.2% | 0.419 | 10.25 | 3.56 | 0.324 | 0.537 | -6.21 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 112.92 | 41.7% | 0.362 | 12.17 | 9.28 | 0.338 | 0.382 | -9.15 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: EMA 200 → 3 | 103.42 | 49.3% | 0.708 | 8.31 | 12.45 | 0.466 | 0.979 | -9.65 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 101.77 | 51.7% | 0.692 | 8.09 | 12.58 | 0.624 | 0.772 | -8.44 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Cổng Dow → TẮT + Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL riêng khung 1D (ATR) → 0.3 | 124.55 | 41.8% | 0.537 | 14.03 | 8.88 | 0.629 | 0.467 | -16.28 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 74 | 47.1% | 0.712 | 8.56 | 8.64 | 0.481 | 0.98 | -6.78 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: EMA 50 → 0.75 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 66.28 | 47.6% | 0.643 | 8.5 | 7.8 | 0.438 | 0.889 | -5.46 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần R:R (/100) → 28 | 43.29 | 35.7% | 0.191 | 18.79 | 2.3 | 0.294 | 0.066 | -19.2 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: POC anchored → 2 | 119.61 | 41.9% | 0.382 | 11.92 | 10.03 | 0.349 | 0.41 | -8.02 |  |

### Vòng 340 — ngẫu nhiên nhiều thông số · mốc: tổng 118.18R, win 53.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Entry (/100) → 28 | 112.29 | 49.3% | 0.814 | 8.23 | 13.64 | 0.592 | 1.085 | -8.91 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: HVN anchored → 0.188 + Trọng số phần Entry (/100) → 33 | 71.59 | 45.7% | 0.682 | 8.93 | 8.02 | 0.473 | 0.93 | -6.04 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: BOS → 3 + Lệnh chờ hết hạn sau (nến) → 8 | 112.21 | 50.3% | 0.724 | 8.13 | 13.8 | 0.559 | 0.919 | -11.25 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: POC volume profile cố định → 0.688 | 117.05 | 52.7% | 0.802 | 7.72 | 15.16 | 0.603 | 1.036 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Fib sóng 4 → 0.938 | 116.42 | 52.8% | 0.809 | 7.47 | 15.59 | 0.61 | 1.037 | -11.06 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: BOS → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 113.47 | 51% | 0.783 | 8.08 | 14.04 | 0.619 | 0.973 | -13.89 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức RSI 30/70 → 0.875 + R:R tối thiểu tới TP1 → 2.38 | 70.24 | 42.6% | 0.498 | 11.1 | 6.33 | 0.518 | 0.475 | -9.83 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Momentum (/100) → 21 | 117.98 | 52.7% | 0.808 | 7.53 | 15.67 | 0.614 | 1.037 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Lệnh chờ hết hạn sau (nến) → 6 | 99.6 | 51.1% | 0.749 | 7.77 | 12.82 | 0.596 | 0.929 | -7.25 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + R:R tối thiểu riêng khung 4H → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + % chốt ở TP1 → 0.307 | 102.68 | 40.3% | 0.35 | 13.16 | 7.8 | 0.334 | 0.365 | -7.15 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: HVN anchored → 0.188 | 113.57 | 52.7% | 0.757 | 7.83 | 14.5 | 0.586 | 0.958 | -9.66 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: POC volume profile cố định → 0.813 + R:R tối thiểu tới TP1 → 2.63 | 81.8 | 36.7% | 0.357 | 17.66 | 4.63 | 0.279 | 0.433 | -4.74 |  |

### Vòng 339 — ngẫu nhiên nhiều thông số · mốc: tổng 118.18R, win 53.1%, rủi ro tụt vốn 7.29R, lời÷rủi ro 16.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: POC anchored → 4 | 90.97 | 45.3% | 0.606 | 10.15 | 8.96 | 0.426 | 0.807 | -3.98 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 57.91 | 44.7% | 0.411 | 11.64 | 4.98 | 0.239 | 0.562 | -11.62 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Mức RSI 30/70 → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: HVN anchored → 0.188 | 120.63 | 51.9% | 0.754 | 8.28 | 14.57 | 0.577 | 0.97 | -7.32 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Biên mây Ichimoku → 1.05 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 101.34 | 50.3% | 0.699 | 8.43 | 12.02 | 0.629 | 0.775 | -8.84 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 116.43 | 52.8% | 0.809 | 7.38 | 15.78 | 0.61 | 1.037 | -9.66 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + R:R tối thiểu riêng khung 1W → 2 | 92.95 | 48.9% | 0.678 | 8.32 | 11.17 | 0.47 | 0.878 | -12.55 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 89.48 | 52.1% | 0.752 | 7.65 | 11.7 | 0.615 | 0.916 | -16.13 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm tối thiểu của vùng đặt SL → 4 + Cộng thêm ngưỡng điểm khung 1D → 4 | 109.82 | 51% | 0.757 | 7.77 | 14.13 | 0.692 | 0.828 | -8.61 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 53.11 | 45% | 0.379 | 11.23 | 4.73 | 0.269 | 0.48 | -17 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Ngưỡng điểm vào kèo → 74 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 105.73 | 47.4% | 0.678 | 8.96 | 11.8 | 0.525 | 0.856 | -10.69 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Cộng điểm phân kỳ dương ẩn → 3.5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 26.88 | 57% | 0.17 | 6.59 | 4.08 | 0.186 | 0.155 | -7.61 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: MACD cắt lên Signal → 0.563 | 117.43 | 52.7% | 0.804 | 7.48 | 15.7 | 0.624 | 1.011 | -8.34 |  |

### Vòng 338 — ngẫu nhiên nhiều thông số · mốc: tổng 118.18R, win 53.1%, rủi ro tụt vốn 7.25R, lời÷rủi ro 16.30

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + % chốt ở TP1 → 0.307 + Trọng số phần Divergence (/100) → 9 | 102.07 | 51.7% | 0.694 | 8.09 | 12.62 | 0.628 | 0.771 | -9.44 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 111.74 | 50.3% | 0.76 | 7.96 | 14.04 | 0.489 | 1.067 | -11.34 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần Trend (/100) → 12 | 116.65 | 52.4% | 0.816 | 7.27 | 16.05 | 0.64 | 1.015 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: EMA 50 → 0.75 | 36.22 | 40.2% | 0.416 | 10.58 | 3.42 | 0.318 | 0.537 | -6.21 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 108.81 | 46.9% | 0.68 | 9.93 | 10.96 | 0.657 | 0.701 | -8.51 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Fib sóng 4 → 0.938 + Cổng Dow → CHẶT + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 85.2 | 50.8% | 0.71 | 7.76 | 10.98 | 0.362 | 1.024 | -11.75 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: Mức MACD → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 115.61 | 51.4% | 0.792 | 7.7 | 15.01 | 0.592 | 1.028 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Elliott (/100) → 6 | 108.03 | 46.5% | 0.628 | 9.1 | 11.87 | 0.594 | 0.66 | -7.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 164.95 | 38.2% | 0.543 | 19.24 | 8.57 | 0.504 | 0.579 | -12.54 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Ngưỡng điểm vào kèo → 74 | 98.63 | 50.4% | 0.731 | 7.68 | 12.84 | 0.596 | 0.885 | -8.27 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Mức RSI 30/70 → 0.875 | 121.38 | 52.2% | 0.763 | 8.24 | 14.73 | 0.577 | 0.994 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 101.38 | 50% | 0.676 | 8.78 | 11.55 | 0.463 | 0.925 | -7.08 |  |

### Vòng 337 — ngẫu nhiên nhiều thông số · mốc: tổng 118.18R, win 53.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: POC anchored → 4 + Trọng số phần Trend (/100) → 19 | 117.51 | 51.3% | 0.773 | 7.75 | 15.16 | 0.596 | 0.954 | -4.48 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: EMA 200 → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Lệnh chờ hết hạn sau (nến) → 6 | 78.54 | 45.7% | 0.569 | 9.35 | 8.4 | 0.479 | 0.671 | -12.82 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 7 | 106.88 | 51% | 0.747 | 8.14 | 13.13 | 0.588 | 0.928 | -9.66 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Ngưỡng điểm vào kèo → 74 + Trọng số phần Trend (/100) → 19 | 123.3 | 49.4% | 0.78 | 8.54 | 14.44 | 0.746 | 0.821 | -10.24 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + % chốt ở TP1 → 0.307 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 127.32 | 45.8% | 0.566 | 10.37 | 12.28 | 0.596 | 0.536 | -10.24 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Break mây Ichimoku → 3 | 122.63 | 47.2% | 0.681 | 9.96 | 12.31 | 0.632 | 0.742 | -9.79 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 105.12 | 50% | 0.683 | 8.74 | 12.03 | 0.503 | 0.904 | -7.08 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 152.7 | 38.4% | 0.523 | 18.86 | 8.1 | 0.342 | 0.711 | -14.44 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + R:R tối thiểu riêng khung 4H → 2 | 102.19 | 41% | 0.335 | 12.52 | 8.16 | 0.273 | 0.386 | -9.71 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Cổng Dow → TẮT | 131.38 | 44.2% | 0.611 | 11.14 | 11.79 | 0.524 | 0.698 | -18.25 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Biên mây Ichimoku → 1.05 | 112 | 49% | 0.732 | 8.41 | 13.32 | 0.708 | 0.76 | -12.36 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 114.23 | 51.7% | 0.788 | 7.67 | 14.89 | 0.63 | 0.966 | -9.66 |  |

### Vòng 336 — ngẫu nhiên nhiều thông số · mốc: tổng 118.18R, win 53.1%, rủi ro tụt vốn 7.33R, lời÷rủi ro 16.12

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Cộng thêm ngưỡng điểm khung 4H → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 126.03 | 43.5% | 0.603 | 11.34 | 11.11 | 0.526 | 0.675 | -15.99 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1D (ATR) → 0.3 | 73.13 | 35.6% | 0.274 | 21.98 | 3.33 | 0.279 | 0.269 | -7 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + R:R tối thiểu riêng khung 4H → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 19.67 | 35.1% | 0.173 | 15.34 | 1.28 | 0.26 | 0.082 | -4.47 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Cộng thêm ngưỡng điểm khung 1D → 4 + Xác nhận khung nhỏ (A2) → W | 99.6 | 40% | 0.391 | 15.66 | 6.36 | 0.308 | 0.467 | -3.44 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Lệnh chờ hết hạn sau (nến) → 6 + SL tối đa (% Entry) → 0.35 | 83.67 | 39.6% | 0.291 | 14 | 5.98 | 0.279 | 0.3 | -8.38 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cổng Dow → TẮT + R:R tối thiểu tới TP1 → 2.63 | 169.03 | 35.8% | 0.406 | 24.14 | 7 | 0.335 | 0.489 | -25.52 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Trend (/100) → 12 | 97.25 | 44.8% | 0.589 | 9.23 | 10.54 | 0.54 | 0.632 | -7.89 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 84.86 | 48.7% | 0.725 | 8.31 | 10.21 | 0.591 | 0.882 | -15.95 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + R:R tối thiểu riêng khung 4H → 2 + Ngưỡng điểm vào kèo → 77 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 115.27 | 38.2% | 0.317 | 14.08 | 8.19 | 0.337 | 0.299 | -22.28 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Cổng Dow → TẮT | 131.7 | 44.2% | 0.613 | 11.33 | 11.62 | 0.531 | 0.692 | -20.3 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Mức MACD → 1.13 + R:R tối thiểu tới TP1 → 2.63 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 81.93 | 49.5% | 0.752 | 8.58 | 9.55 | 0.631 | 0.884 | -7.32 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm tối thiểu của vùng đặt SL → 2 | 112.91 | 52% | 0.743 | 8.08 | 13.97 | 0.614 | 0.882 | -9.66 |  |

### Vòng 335 — ngẫu nhiên nhiều thông số · mốc: tổng 118.18R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 15.97

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần Elliott (/100) → 6 + Số TP tối đa → 2 | 104.41 | 45.6% | 0.611 | 9.22 | 11.32 | 0.581 | 0.639 | -9.99 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Break mây Ichimoku → 3 | 102.64 | 49.4% | 0.634 | 8.96 | 11.46 | 0.474 | 0.819 | -9.4 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần R:R (/100) → 33 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: POC anchored → 4 | 109.13 | 50% | 0.682 | 9.01 | 12.11 | 0.469 | 0.923 | -1.9 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN cố định → 0.438 | 111.61 | 51.4% | 0.754 | 8.06 | 13.85 | 0.559 | 0.983 | -10.63 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + SL tối đa (% Entry) → 0.425 | 92.25 | 45.8% | 0.549 | 9.81 | 9.4 | 0.441 | 0.657 | -10.21 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: BOS → 1 + Điểm vùng: EMA 21 → 1.13 | 104.17 | 51.7% | 0.69 | 7.78 | 13.39 | 0.619 | 0.772 | -9.77 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: POC volume profile cố định → 0.813 | 117.87 | 51.9% | 0.756 | 8.23 | 14.32 | 0.574 | 0.973 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 98.25 | 50.3% | 0.668 | 8.26 | 11.89 | 0.601 | 0.743 | -9.77 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Elliott (/100) → 10 + Cộng thêm ngưỡng điểm khung 4H → 2 | 30.95 | 57.2% | 0.204 | 5.72 | 5.41 | 0.244 | 0.164 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 80.29 | 38.6% | 0.231 | 16.15 | 4.97 | 0.188 | 0.262 | -12.89 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 | 108.33 | 52.6% | 0.713 | 8.25 | 13.13 | 0.586 | 0.857 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần SL (/100) → 7 + R:R tối thiểu tới TP1 → 2.38 | 90.52 | 46% | 0.562 | 9.01 | 10.05 | 0.512 | 0.612 | -10.74 |  |

### Vòng 334 — ngẫu nhiên nhiều thông số · mốc: tổng 118.18R, win 53.1%, rủi ro tụt vốn 7.39R, lời÷rủi ro 15.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib sóng 4 → 0.938 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 70.93 | 42.9% | 0.455 | 12.48 | 5.68 | 0.268 | 0.646 | -10.88 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Cổng Dow → TẮT + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 97.62 | 40.5% | 0.618 | 11.84 | 8.24 | 0.517 | 0.718 | -17.27 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 112.39 | 50.7% | 0.77 | 7.83 | 14.35 | 0.652 | 0.891 | -10 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 93.06 | 46.6% | 0.629 | 9.62 | 9.67 | 0.46 | 0.85 | -9.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu tới TP1 → 2.63 + Cộng thêm ngưỡng điểm khung 1W → -1 | 110.16 | 41.6% | 0.355 | 12.64 | 8.72 | 0.326 | 0.38 | -7.17 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC volume profile cố định → 0.813 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 69.9 | 43.8% | 0.666 | 9.32 | 7.5 | 0.549 | 0.822 | -3.03 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trọng số phần Momentum (/100) → 21 | 155.67 | 38.5% | 0.526 | 18.43 | 8.45 | 0.37 | 0.684 | -12.27 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + SL tối đa (% Entry) → 0.425 + Coin phải mạnh hơn BTC trong N ngày → 14 | 93.31 | 48.5% | 0.696 | 8.4 | 11.11 | 0.651 | 0.754 | -17.72 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + SL tối đa (% Entry) → 0.425 | 100.56 | 49.6% | 0.713 | 8.36 | 12.03 | 0.462 | 1.015 | -11.51 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 112.68 | 52.1% | 0.772 | 7.75 | 14.54 | 0.547 | 1.029 | -11.06 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 109.99 | 51.7% | 0.769 | 7.86 | 13.99 | 0.588 | 0.974 | -9.66 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 50 → 0.75 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 83.91 | 39.3% | 0.347 | 16.12 | 5.21 | 0.263 | 0.414 | -7.11 |  |

### Vòng 333 — ngẫu nhiên nhiều thông số · mốc: tổng 118.18R, win 53.1%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.10

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 107.52 | 50.3% | 0.685 | 9.07 | 11.85 | 0.495 | 0.898 | -1.9 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: POC anchored → 4 | 118.22 | 51.7% | 0.793 | 7.71 | 15.33 | 0.596 | 1.004 | -8.8 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Momentum (/100) → 25 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 200 → 1 | 32.11 | 56.8% | 0.167 | 6.53 | 4.92 | 0.232 | 0.111 | -8.66 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 94.81 | 47% | 0.636 | 9.56 | 9.92 | 0.475 | 0.85 | -9.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 90.7 | 46.5% | 0.63 | 9.3 | 9.75 | 0.453 | 0.85 | -9.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần Elliott (/100) → 10 + Trọng số phần R:R (/100) → 28 | 116.02 | 51.7% | 0.811 | 7.56 | 15.35 | 0.647 | 0.993 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Trọng số phần SL (/100) → 9 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Cổng Dow → TẮT | 98.55 | 39.9% | 0.423 | 13.61 | 7.24 | 0.387 | 0.459 | -17.15 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu riêng khung 1W → 2 | 29.8 | 57% | 0.189 | 5.41 | 5.51 | 0.259 | 0.126 | -11.01 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: EMA 200 → 3 | 107.57 | 40.3% | 0.409 | 14.9 | 7.22 | 0.337 | 0.473 | -7.36 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 200 → 3 + Trọng số phần Divergence (/100) → 12 | 102.93 | 45.6% | 0.643 | 10.66 | 9.66 | 0.559 | 0.721 | -5.33 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Cộng thêm ngưỡng điểm khung 1W → 2 | 115.17 | 51% | 0.794 | 7.69 | 14.98 | 0.608 | 1.006 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: HVN cố định → 0.563 | 114.38 | 52.4% | 0.778 | 7.47 | 15.31 | 0.602 | 0.983 | -10.63 |  |
