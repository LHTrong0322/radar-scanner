# Tối ưu tự động (chạy liên tục) — vòng 920

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 10695 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 92.67R | 0.569 | 6.44R | 10.07R | 9.20 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 145 | 53.1% | 117.32R | 0.809 | 5.09R | 7.51R | 15.62 | 28 | 17.9% | -9.92R | -0.354 | 10.54R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.77R | 2 | 0% | -2.3R |
| 4H | 107 | 54.2% | 90.13R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 92.67R | 10.07R | 9.20 | 31 | 12.9% | -13R |
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

### Vòng 920 — ngẫu nhiên nhiều thông số · mốc: tổng 117.32R, win 53.1%, rủi ro tụt vốn 7.51R, lời÷rủi ro 15.62

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 24.91 | 57.5% | 0.163 | 6.5 | 3.83 | 0.171 | 0.155 | -9.32 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: EMA 50 → 0.75 + Đệm SL riêng khung 1W (ATR) → 0.3 | 96.35 | 47.3% | 0.651 | 9.38 | 10.27 | 0.475 | 0.822 | -10.69 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 75.1 | 47.2% | 0.695 | 8.88 | 8.46 | 0.474 | 0.943 | -5.45 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + R:R tối thiểu riêng khung 1D → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 110.57 | 46.6% | 0.628 | 9.07 | 12.19 | 0.587 | 0.667 | -8.18 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + % chốt ở TP1 → 0.287 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: BOS → 1 | 117.17 | 42.8% | 0.604 | 12.33 | 9.5 | 0.566 | 0.646 | -17.21 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 115.2 | 47.3% | 0.682 | 10.36 | 11.12 | 0.656 | 0.705 | -2.99 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: MACD cắt lên Signal → 0.563 + R:R tối thiểu riêng khung 4H → 2 | 118.06 | 41.5% | 0.38 | 12.18 | 9.69 | 0.337 | 0.415 | -7.41 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần R:R (/100) → 28 + Điểm vùng: MACD cắt lên Signal → 0.563 | 138.6 | 35.8% | 0.473 | 20.16 | 6.88 | 0.303 | 0.649 | -10.13 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Đệm SL riêng khung 4H (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 85.46 | 34.5% | 0.378 | 21.06 | 4.06 | 0.227 | 0.537 | -9.4 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 19.86 | 56.6% | 0.114 | 8.58 | 2.31 | 0.242 | 0.003 | -8.68 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 104.76 | 49.7% | 0.713 | 8.59 | 12.2 | 0.555 | 0.896 | -9.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + % chốt ở TP1 → 0.307 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + R:R tối thiểu tới TP1 → 2.38 | 66.35 | 33.1% | 0.241 | 26.04 | 2.55 | 0.195 | 0.288 | -12.82 |  |

### Vòng 919 — ngẫu nhiên nhiều thông số · mốc: tổng 117.32R, win 53.1%, rủi ro tụt vốn 7.59R, lời÷rủi ro 15.46

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần SL (/100) → 7 | 115.02 | 48.1% | 0.747 | 8.97 | 12.82 | 0.859 | 0.605 | -9.84 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Mức RSI 30/70 → 1.13 + Cộng điểm phân kỳ dương ẩn → 2.25 + Trọng số phần Entry (/100) → 28 | 117.12 | 52.7% | 0.802 | 7.57 | 15.47 | 0.625 | 1.006 | -9.92 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Biên mây Ichimoku → 1.35 + Cộng điểm phân kỳ dương ẩn → 2.25 | 78.2 | 44.9% | 0.468 | 10.73 | 7.29 | 0.412 | 0.521 | -7.07 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 121.39 | 49.7% | 0.793 | 8.19 | 14.82 | 0.785 | 0.803 | -10.5 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN cố định → 0.438 + Trọng số phần SL (/100) → 9 + Lệnh chờ hết hạn sau (nến) → 6 | 97.93 | 39.5% | 0.333 | 13.59 | 7.21 | 0.284 | 0.375 | -9.08 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 100.85 | 47.9% | 0.691 | 8.67 | 11.63 | 0.564 | 0.833 | -12.45 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: EMA 21 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 110.6 | 48.7% | 0.709 | 8.62 | 12.83 | 0.578 | 0.854 | -11.3 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Số TP tối đa → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 87.6 | 38.3% | 0.294 | 14.84 | 5.9 | 0.267 | 0.319 | -15.68 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Ngưỡng điểm vào kèo → 77 | 66.77 | 36.1% | 0.281 | 19.89 | 3.36 | 0.287 | 0.275 | -6.03 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + R:R tối thiểu riêng khung 1W → 2 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Mức MACD → 0.875 | 102.43 | 50.7% | 0.702 | 8.17 | 12.54 | 0.611 | 0.787 | -9.67 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 103.59 | 47.7% | 0.589 | 9.11 | 11.37 | 0.625 | 0.555 | -7.96 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 109.18 | 50% | 0.682 | 8.94 | 12.21 | 0.544 | 0.852 | -9.92 |  |

### Vòng 918 — ngẫu nhiên nhiều thông số · mốc: tổng 117.32R, win 53.1%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.77

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Momentum (/100) → 25 | 101.19 | 50.7% | 0.703 | 8.41 | 12.03 | 0.64 | 0.771 | -9.14 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: EMA 200 → 1 | 115.71 | 51.6% | 0.737 | 8.4 | 13.77 | 0.607 | 0.899 | -4.93 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm tối thiểu của vùng đặt SL → 4 | 115.98 | 50.6% | 0.725 | 8.5 | 13.64 | 0.585 | 0.883 | -8.63 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: BOS → 1 + Ngưỡng điểm vào kèo → 74 | 72.19 | 44.4% | 0.451 | 10.67 | 6.77 | 0.339 | 0.566 | -12.24 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: MACD cắt lên Signal → 0.563 | 62.53 | 41% | 0.534 | 11.69 | 5.35 | 0.344 | 0.692 | -3.71 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: HVN cố định → 0.563 + Trọng số phần Elliott (/100) → 6 | 94.35 | 46.7% | 0.689 | 9.38 | 10.06 | 0.437 | 0.903 | -9.38 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần SL (/100) → 9 + Điểm vùng: HVN anchored → 0.188 + Số TP tối đa → 2 | 112.3 | 49.3% | 0.814 | 8.15 | 13.78 | 0.626 | 1.037 | -9.17 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Lệnh chờ hết hạn sau (nến) → 8 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 107.5 | 45.9% | 0.587 | 11.2 | 9.6 | 0.57 | 0.603 | -4.58 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: BOS → 3 | 98.66 | 51.3% | 0.658 | 8.61 | 11.46 | 0.621 | 0.696 | -4.54 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 104.76 | 49.7% | 0.713 | 8.56 | 12.24 | 0.555 | 0.896 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 68.02 | 47.3% | 0.618 | 9 | 7.56 | 0.474 | 0.774 | -6.28 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Cộng điểm phân kỳ dương ẩn → 3 | 82.55 | 51.8% | 0.737 | 7.15 | 11.55 | 0.325 | 1.082 | -12.01 |  |

### Vòng 917 — ngẫu nhiên nhiều thông số · mốc: tổng 117.32R, win 53.1%, rủi ro tụt vốn 7.52R, lời÷rủi ro 15.60

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Lệnh chờ hết hạn sau (nến) → 6 + Coin phải mạnh hơn BTC trong N ngày → 14 | 62.45 | 47.8% | 0.553 | 9.42 | 6.63 | 0.517 | 0.594 | -15.83 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Mức RSI 30/70 → 0.875 | 102.75 | 47.1% | 0.654 | 9.46 | 10.86 | 0.542 | 0.791 | -9.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: EMA 50 → 1.13 | 111.87 | 50% | 0.756 | 8.34 | 13.41 | 0.569 | 0.975 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Cộng điểm phân kỳ dương ẩn → 2.25 | 106.8 | 52.1% | 0.731 | 8.22 | 12.99 | 0.59 | 0.885 | -10.75 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trọng số phần SL (/100) → 9 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 73.92 | 47.2% | 0.582 | 8.84 | 8.36 | 0.45 | 0.72 | -8.78 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: HVN cố định → 0.438 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Break mây Ichimoku → 1 | 97.9 | 50% | 0.689 | 8.11 | 12.07 | 0.521 | 0.858 | -9.93 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Fib sóng 4 → 1.56 | 116.41 | 51.2% | 0.719 | 8.36 | 13.92 | 0.579 | 0.885 | -11.51 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: POC volume profile cố định → 0.813 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 115.34 | 52.1% | 0.801 | 7.74 | 14.9 | 0.652 | 0.963 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 112.54 | 46.5% | 0.654 | 10.86 | 10.36 | 0.601 | 0.705 | -5.32 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần SL (/100) → 7 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 94.95 | 49.1% | 0.597 | 9.6 | 9.89 | 0.473 | 0.73 | -8.73 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 23.94 | 39.5% | 0.278 | 11.6 | 2.06 | 0.194 | 0.385 | -7.55 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + % chốt ở TP1 → 0.287 + R:R tối thiểu riêng khung 4H → 2 | 90.09 | 40.4% | 0.328 | 14.28 | 6.31 | 0.276 | 0.368 | -8.32 |  |

### Vòng 916 — ngẫu nhiên nhiều thông số · mốc: tổng 117.32R, win 53.1%, rủi ro tụt vốn 7.57R, lời÷rủi ro 15.50

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: EMA 50 → 0.75 + Số TP tối đa → 2 | 112.89 | 51.7% | 0.789 | 7.66 | 14.74 | 0.609 | 0.983 | -9.92 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 38.83 | 60.5% | 0.167 | 6.89 | 5.64 | 0.253 | 0.084 | -5.77 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 17.43 | 37% | 0.215 | 13.21 | 1.32 | 0.12 | 0.361 | -7.46 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Đệm SL riêng khung 1W (ATR) → 0.3 | 95.55 | 47.4% | 0.708 | 9.27 | 10.31 | 0.437 | 0.945 | -10.69 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Divergence (/100) → 9 | 116.87 | 52.7% | 0.8 | 7.53 | 15.52 | 0.635 | 0.985 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: POC anchored → 4 + Trọng số phần Elliott (/100) → 10 | 108.77 | 50.7% | 0.725 | 8.31 | 13.09 | 0.582 | 0.876 | -4.74 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: POC anchored → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 23.14 | 57.1% | 0.142 | 6.74 | 3.43 | 0.182 | 0.107 | -8.69 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 108.01 | 49.6% | 0.766 | 8.48 | 12.74 | 0.581 | 0.995 | -9.17 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 116.69 | 52.4% | 0.805 | 7.61 | 15.33 | 0.642 | 0.984 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + R:R tối thiểu riêng khung 1W → 2 | 98.1 | 49% | 0.641 | 9.42 | 10.41 | 0.516 | 0.772 | -8.73 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: POC volume profile cố định → 0.688 + Coin phải mạnh hơn BTC trong N ngày → 14 | 85.82 | 49.6% | 0.721 | 8.14 | 10.54 | 0.544 | 0.927 | -16.39 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: BOS → 1 | 48.58 | 40.4% | 0.293 | 14.07 | 3.45 | 0.4 | 0.172 | -16.99 |  |

### Vòng 915 — ngẫu nhiên nhiều thông số · mốc: tổng 117.32R, win 53.1%, rủi ro tụt vốn 7.54R, lời÷rủi ro 15.56

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 118.5 | 37.4% | 0.399 | 19.06 | 6.22 | 0.443 | 0.36 | -12.51 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 112.69 | 50% | 0.817 | 8.23 | 13.69 | 0.621 | 1.049 | -9.17 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Biên mây Ichimoku → 1.05 | 107.08 | 52.4% | 0.749 | 7.57 | 14.15 | 0.618 | 0.885 | -10.75 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Ngưỡng điểm vào kèo → 74 | 116 | 52% | 0.784 | 7.81 | 14.85 | 0.608 | 0.985 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Cộng điểm phân kỳ dương ẩn → 3 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Break mây Ichimoku → 1 | 101.28 | 49.3% | 0.684 | 8.32 | 12.17 | 0.508 | 0.876 | -10.16 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: POC anchored → 4 | 116.82 | 52% | 0.779 | 7.91 | 14.77 | 0.597 | 0.966 | -4.74 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Mức RSI 30/70 → 0.875 + R:R tối thiểu riêng khung 4H → 2 | 112.9 | 42.8% | 0.363 | 12.81 | 8.81 | 0.304 | 0.41 | -9.69 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Divergence (/100) → 9 + Đệm SL riêng khung 1D (ATR) → 0.3 | 90.25 | 46.5% | 0.636 | 10.44 | 8.64 | 0.671 | 0.602 | -10.77 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 75.27 | 44.5% | 0.684 | 9.22 | 8.16 | 0.449 | 0.946 | -6.49 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + % chốt ở TP1 → 0.307 + Cộng thêm ngưỡng điểm khung 1D → 5 + Đệm SL riêng khung 1D (ATR) → 0.3 | 112.07 | 47% | 0.675 | 10.43 | 10.74 | 0.657 | 0.693 | -4.3 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Trọng số phần Momentum (/100) → 21 + SL tối đa (% Entry) → 0.425 | 110.88 | 51.7% | 0.754 | 7.57 | 14.65 | 0.628 | 0.893 | -10.26 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Cổng Dow → TẮT + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 128.25 | 43.7% | 0.602 | 11.79 | 10.88 | 0.61 | 0.595 | -16.29 |  |

### Vòng 914 — ngẫu nhiên nhiều thông số · mốc: tổng 118.09R, win 53.1%, rủi ro tụt vốn 7.6R, lời÷rủi ro 15.54

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần Entry (/100) → 33 + % chốt ở TP1 → 0.307 | 104.64 | 45.6% | 0.612 | 9.18 | 11.4 | 0.639 | 0.587 | -8.98 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: HVN cố định → 0.563 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 118.81 | 53.1% | 0.819 | 7.6 | 15.63 | 0.64 | 1.022 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 114.91 | 52.1% | 0.798 | 7.66 | 15 | 0.616 | 1.001 | -9.74 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 113.83 | 51% | 0.785 | 8.08 | 14.09 | 0.523 | 1.066 | -9.79 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Khung lớn phải tăng (trend ≥) → 0.375 | 109.14 | 49.6% | 0.774 | 8.09 | 13.49 | 0.574 | 0.988 | -13.18 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trọng số phần R:R (/100) → 33 + Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần SL (/100) → 9 | 142.2 | 43.4% | 0.624 | 11.83 | 12.02 | 0.535 | 0.714 | -18.37 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Trọng số phần Momentum (/100) → 21 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: POC volume profile cố định → 0.813 | 97.02 | 38.5% | 0.385 | 16.78 | 5.78 | 0.361 | 0.405 | -2.93 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Trọng số phần Entry (/100) → 33 + Điểm vùng: EMA 21 → 1.13 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 111.4 | 51.4% | 0.763 | 7.75 | 14.37 | 0.612 | 0.931 | -10.26 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 91.81 | 38.8% | 0.375 | 16.67 | 5.51 | 0.319 | 0.425 | -2.7 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần Entry (/100) → 33 + Cổng Dow → TẮT + Điểm vùng: Fib sóng 4 → 0.938 | 128.34 | 43.1% | 0.608 | 11.85 | 10.83 | 0.562 | 0.655 | -19.56 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần R:R (/100) → 28 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: Biên mây Ichimoku → 1.05 | 105.85 | 51% | 0.73 | 8.06 | 13.13 | 0.594 | 0.875 | -10.75 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Divergence (/100) → 9 + Khung lớn phải tăng (trend ≥) → 0.375 + Đệm SL riêng khung 1D (ATR) → 0.3 | 34.89 | 59.4% | 0.205 | 7.07 | 4.93 | 0.256 | 0.168 | -8.17 |  |

### Vòng 913 — ngẫu nhiên nhiều thông số · mốc: tổng 113.63R, win 51.8%, rủi ro tụt vốn 8.12R, lời÷rủi ro 13.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu tới TP1 → 2.63 | 88.11 | 46.8% | 0.711 | 9.58 | 9.2 | 0.476 | 0.924 | -10.68 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Mức MACD → 1.13 | 111.64 | 50.3% | 0.781 | 8.21 | 13.6 | 0.591 | 0.99 | -6.31 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: HVN cố định → 0.563 | 103.79 | 49% | 0.697 | 9.25 | 11.22 | 0.534 | 0.857 | -5.39 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Cộng thêm ngưỡng điểm khung 4H → 2 | 111.66 | 39.9% | 0.377 | 12.88 | 8.67 | 0.371 | 0.382 | -13.17 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.188 | 108.77 | 46.1% | 0.716 | 10.37 | 10.49 | 0.676 | 0.75 | -7.02 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Mức RSI 30/70 → 1.13 | 112.62 | 51.4% | 0.793 | 8.11 | 13.89 | 0.608 | 0.995 | -6.6 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 | 94.16 | 38.6% | 0.293 | 15.44 | 6.1 | 0.354 | 0.244 | -4.12 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Elliott (/100) → 6 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 90.19 | 48.4% | 0.739 | 8.7 | 10.37 | 0.672 | 0.819 | -14.09 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + % chốt ở TP1 → 0.307 + Xác nhận khung nhỏ (A2) → W | 97.29 | 38% | 0.389 | 16.35 | 5.95 | 0.327 | 0.444 | -1.27 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Trọng số phần Elliott (/100) → 6 | 102.27 | 51.1% | 0.725 | 8.22 | 12.44 | 0.638 | 0.819 | -6.85 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 113.6 | 51.8% | 0.817 | 7.75 | 14.66 | 0.639 | 1.009 | -7.45 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Cộng thêm ngưỡng điểm khung 4H → 2 | 113.58 | 52% | 0.767 | 8.08 | 14.06 | 0.67 | 0.873 | -9.22 |  |

### Vòng 912 — ngẫu nhiên nhiều thông số · mốc: tổng 118.09R, win 53.1%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.87

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 101.09 | 49% | 0.652 | 8.92 | 11.33 | 0.526 | 0.783 | -9.66 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Mức MACD → 0.875 | 111.75 | 52.1% | 0.776 | 7.91 | 14.13 | 0.621 | 0.94 | -7.31 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Fib sóng 4 → 1.56 + R:R tối thiểu riêng khung 4H → 2 + Cộng thêm ngưỡng điểm khung 1D → 5 | 106.84 | 41% | 0.348 | 12.91 | 8.28 | 0.324 | 0.368 | -8.41 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm vào kèo → 74 + Khung lớn phải tăng (trend ≥) → 0.375 | 137.98 | 37.5% | 0.479 | 18.83 | 7.33 | 0.327 | 0.629 | -12.53 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 114.93 | 51.4% | 0.798 | 7.63 | 15.06 | 0.64 | 0.97 | -8.6 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: BOS → 3 | 81.41 | 50.9% | 0.727 | 7.28 | 11.18 | 0.328 | 1.048 | -10.72 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 95.9 | 50% | 0.666 | 8.58 | 11.18 | 0.579 | 0.763 | -10.75 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 94.21 | 50% | 0.663 | 8.74 | 10.78 | 0.593 | 0.74 | -9.14 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần R:R (/100) → 33 | 124.06 | 46.9% | 0.594 | 10.7 | 11.59 | 0.684 | 0.495 | -14.72 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 4H → -1 | 95.6 | 46.7% | 0.708 | 9.34 | 10.24 | 0.441 | 0.935 | -10.69 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: EMA 200 → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 152.17 | 38.5% | 0.523 | 18.96 | 8.03 | 0.299 | 0.748 | -5.39 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Xác nhận khung nhỏ (A2) → W | 12.29 | 45.9% | 0.042 | 15.08 | 0.81 | 0.106 | -0.022 | -9.73 |  |

### Vòng 911 — ngẫu nhiên nhiều thông số · mốc: tổng 118.09R, win 53.1%, rủi ro tụt vốn 7.57R, lời÷rủi ro 15.60

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN cố định → 0.563 | 111.98 | 41.3% | 0.361 | 12.41 | 9.02 | 0.344 | 0.376 | -7.87 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: EMA 50 → 1.13 | 112.98 | 50.3% | 0.769 | 8.48 | 13.32 | 0.598 | 0.962 | -7.58 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 96.68 | 47.8% | 0.701 | 9.23 | 10.47 | 0.66 | 0.747 | -8.97 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Cộng thêm ngưỡng điểm khung 1W → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 | 94.59 | 46.3% | 0.695 | 9.35 | 10.12 | 0.441 | 0.909 | -9.67 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib sóng 4 → 1.56 + Đệm SL riêng khung 4H (ATR) → 0.3 | 63.23 | 30% | 0.171 | 35.11 | 1.8 | 0.138 | 0.197 | -31.2 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần Momentum (/100) → 21 | 102.38 | 50.4% | 0.806 | 8.17 | 12.53 | 0.546 | 1.096 | -12.86 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: POC volume profile cố định → 0.813 + Lệnh chờ hết hạn sau (nến) → 6 | 98.25 | 50.7% | 0.722 | 8.25 | 11.91 | 0.566 | 0.909 | -8.54 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Trọng số phần SL (/100) → 7 | 117.44 | 52.4% | 0.799 | 7.73 | 15.19 | 0.625 | 0.996 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 25.45 | 56.1% | 0.147 | 7.31 | 3.48 | 0.183 | 0.111 | -9.35 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Mức RSI 30/70 → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm tối thiểu của vùng đặt SL → 4 | 116.6 | 51% | 0.743 | 8.41 | 13.86 | 0.565 | 0.953 | -8.66 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trọng số phần Entry (/100) → 33 | 107.58 | 50% | 0.758 | 8.19 | 13.14 | 0.559 | 0.98 | -10.92 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: EMA 200 → 1 + Điểm vùng: BOS → 1 | 108.72 | 50.4% | 0.794 | 8.76 | 12.41 | 0.537 | 1.113 | -7.87 |  |
