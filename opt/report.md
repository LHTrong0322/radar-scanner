# Tối ưu tự động (chạy liên tục) — vòng 1024

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 11943 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 46.4% | 95.04R | 0.573 | 6.44R | 10.17R | 9.35 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 145 | 52.4% | 113.95R | 0.786 | 5.09R | 7.95R | 14.33 | 27 | 18.5% | -8.9R | -0.33 | 10.54R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 27 | 48.1% | 17.16R | 5 | 0% | -3.77R |
| 1W | 10 | 50% | 7.77R | 2 | 0% | -2.3R |
| 4H | 108 | 53.7% | 89.03R | 20 | 25% | -2.83R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 46.4% | 95.04R | 10.17R | 9.35 | 30 | 13.3% | -11.98R |
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

### Vòng 1024 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.95R, lời÷rủi ro 14.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: EMA 200 → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 72.73 | 44.9% | 0.466 | 9.69 | 7.51 | 0.364 | 0.559 | -11.24 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cộng điểm phân kỳ dương ẩn → 2.25 + Xác nhận khung nhỏ (A2) → W | 105.55 | 40.2% | 0.4 | 15.59 | 6.77 | 0.372 | 0.425 | -4.23 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: EMA 50 → 1.13 | 104.17 | 49.3% | 0.685 | 8.61 | 12.1 | 0.558 | 0.812 | -3.79 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 90.07 | 47.7% | 0.605 | 9.27 | 9.72 | 0.609 | 0.599 | -10.28 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: Mức MACD → 0.875 + Trọng số phần R:R (/100) → 33 + Điểm vùng: EMA 200 → 3 | 99.92 | 49% | 0.68 | 8.77 | 11.39 | 0.487 | 0.88 | -8.6 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 25.17 | 57.1% | 0.171 | 6.13 | 4.11 | 0.219 | 0.125 | -9.48 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 99.12 | 41.3% | 0.33 | 13.13 | 7.55 | 0.306 | 0.352 | -8.78 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Divergence (/100) → 9 + Đệm SL riêng khung 1D (ATR) → 0.3 + SL tối đa (% Entry) → 0.425 | 111.41 | 46.7% | 0.659 | 10.4 | 10.71 | 0.628 | 0.687 | -4.3 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Cộng điểm phân kỳ dương ẩn → 2.25 + Đệm SL riêng khung 1D (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 106.82 | 44.5% | 0.617 | 11.53 | 9.26 | 0.552 | 0.679 | -6.62 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần SL (/100) → 9 + Xác nhận khung nhỏ (A2) → W | 66.76 | 35.5% | 0.316 | 19.62 | 3.4 | 0.304 | 0.33 | -3.17 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: BOS → 1 + Trọng số phần Elliott (/100) → 10 | 112.23 | 51.4% | 0.779 | 7.97 | 14.08 | 0.596 | 0.984 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần Entry (/100) → 28 + Điểm vùng: POC anchored → 4 | 105.83 | 49.7% | 0.683 | 8.5 | 12.45 | 0.521 | 0.846 | -5.94 |  |

### Vòng 1023 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.28R, lời÷rủi ro 13.49

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Đệm SL riêng khung 1D (ATR) → 0.3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 94.39 | 43% | 0.597 | 12.18 | 7.75 | 0.477 | 0.696 | -4.37 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 111.21 | 50.7% | 0.762 | 8.25 | 13.48 | 0.557 | 0.997 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: POC volume profile cố định → 0.688 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 30.72 | 59.1% | 0.187 | 6.22 | 4.94 | 0.207 | 0.169 | -9.69 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 99.66 | 50.7% | 0.702 | 8.43 | 11.82 | 0.628 | 0.782 | -8.12 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Trọng số phần Trend (/100) → 12 + Số TP tối đa → 2 + Cổng Dow → TẮT | 123.97 | 44.1% | 0.614 | 11.7 | 10.6 | 0.533 | 0.694 | -21.62 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Ngưỡng điểm vào kèo → 77 + Trọng số phần Momentum (/100) → 21 | 112.54 | 50.7% | 0.793 | 7.86 | 14.32 | 0.624 | 0.976 | -8.9 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 63.31 | 45.4% | 0.586 | 9.66 | 6.55 | 0.422 | 0.77 | -4.47 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 1D → 3 | 104.6 | 50% | 0.707 | 8.35 | 12.53 | 0.586 | 0.827 | -8.9 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC anchored → 4 + R:R tối thiểu riêng khung 4H → 2 + Trọng số phần R:R (/100) → 33 | 58.92 | 38.1% | 0.27 | 14.96 | 3.94 | 0.212 | 0.327 | -0.46 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Momentum (/100) → 21 + Cổng Dow → CHẶT | 67.5 | 45.4% | 0.567 | 9.09 | 7.43 | 0.249 | 0.87 | -9.2 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần Momentum (/100) → 25 | 101.4 | 48.6% | 0.685 | 8.79 | 11.54 | 0.501 | 0.908 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 96.99 | 50% | 0.674 | 8.53 | 11.37 | 0.62 | 0.733 | -8.66 |  |

### Vòng 1022 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.98R, lời÷rủi ro 14.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 110.14 | 50% | 0.754 | 8.23 | 13.38 | 0.602 | 0.915 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Entry (/100) → 33 | 108.24 | 50.3% | 0.757 | 8.2 | 13.2 | 0.565 | 0.968 | -8.72 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Cổng Dow → CHẶT + R:R tối thiểu riêng khung 1D → 2 | 73.58 | 47.2% | 0.518 | 8.74 | 8.42 | 0.38 | 0.622 | -8.58 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 19.5 | 41.1% | 0.348 | 9.04 | 2.16 | 0.2 | 0.476 | -2.78 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Trend (/100) → 19 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 58.21 | 40.3% | 0.489 | 12.69 | 4.59 | 0.269 | 0.672 | -2.69 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 | 99.63 | 44.8% | 0.579 | 9.8 | 10.17 | 0.579 | 0.579 | -7.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + SL tối đa (% Entry) → 0.425 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 119.34 | 49.1% | 0.751 | 8.9 | 13.41 | 0.704 | 0.805 | -9.48 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Coin phải mạnh hơn BTC trong N ngày → 14 | 84.43 | 50% | 0.715 | 8.38 | 10.08 | 0.515 | 0.952 | -15.36 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Cổng Dow → TẮT | 126.06 | 43.1% | 0.597 | 12.25 | 10.29 | 0.484 | 0.716 | -21.15 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 158.61 | 38.4% | 0.52 | 18.15 | 8.74 | 0.468 | 0.576 | -9.14 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Cộng thêm ngưỡng điểm khung 1W → -1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 91.58 | 45.9% | 0.627 | 9.45 | 9.69 | 0.463 | 0.815 | -6.09 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Số TP tối đa → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 108.6 | 48.7% | 0.696 | 8.76 | 12.4 | 0.548 | 0.86 | -10.27 |  |

### Vòng 1021 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.24R, lời÷rủi ro 13.55

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 96.72 | 50% | 0.672 | 8.93 | 10.83 | 0.565 | 0.788 | -8.12 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Cộng điểm phân kỳ dương ẩn → 3 | 105.82 | 50.3% | 0.73 | 8.47 | 12.49 | 0.534 | 0.946 | -7.61 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trọng số phần Trend (/100) → 19 + Điểm vùng: EMA 21 → 1.13 | 58.76 | 43.9% | 0.445 | 10.35 | 5.68 | 0.388 | 0.51 | -9.76 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 100.17 | 51% | 0.691 | 8.53 | 11.74 | 0.591 | 0.803 | -8.12 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần Momentum (/100) → 21 | 77.86 | 44.8% | 0.478 | 10.8 | 7.21 | 0.384 | 0.568 | -8.8 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 98.49 | 38.6% | 0.392 | 15.61 | 6.31 | 0.346 | 0.435 | -3.75 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 4H (ATR) → 0.3 | 112.99 | 37.4% | 0.498 | 17.34 | 6.52 | 0.437 | 0.554 | -15.37 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Trend (/100) → 19 + Trọng số phần Elliott (/100) → 6 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 28.55 | 55.7% | 0.162 | 6.05 | 4.72 | 0.196 | 0.134 | -8.71 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Cổng Dow → TẮT + Đệm SL riêng khung 4H (ATR) → 0.3 | 104.72 | 33.8% | 0.29 | 26.25 | 3.99 | 0.227 | 0.348 | -36.46 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần R:R (/100) → 28 | 84.7 | 48.3% | 0.73 | 8.52 | 9.94 | 0.552 | 0.942 | -15.37 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Mức MACD → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 105.64 | 43.4% | 0.611 | 11.4 | 9.27 | 0.539 | 0.679 | -5.61 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: HVN anchored → 0.188 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: BOS → 3 | 28 | 57.4% | 0.181 | 5.99 | 4.67 | 0.2 | 0.163 | -9.27 |  |

### Vòng 1020 — ngẫu nhiên nhiều thông số · mốc: tổng 110.67R, win 50.7%, rủi ro tụt vốn 8.38R, lời÷rủi ro 13.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 | 110.17 | 50.7% | 0.755 | 7.9 | 13.95 | 0.544 | 0.996 | -8.72 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC anchored → 4 | 68.03 | 45% | 0.613 | 9.49 | 7.17 | 0.372 | 0.858 | 1.51 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.05 | 99.47 | 48.3% | 0.686 | 8.59 | 11.58 | 0.535 | 0.852 | -9.73 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Momentum (/100) → 25 + SL tối đa (% Entry) → 0.425 + Điểm vùng: POC anchored → 4 | 91.49 | 48.7% | 0.61 | 9.32 | 9.82 | 0.56 | 0.662 | -2.76 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 97.62 | 45.1% | 0.595 | 9.37 | 10.42 | 0.477 | 0.707 | -13.88 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: POC anchored → 4 + Điểm vùng: EMA 21 → 1.13 | 99.36 | 48.1% | 0.621 | 9.5 | 10.46 | 0.422 | 0.841 | -2.78 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Khung lớn phải tăng (trend ≥) → 0.375 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Mức MACD → 0.875 | 101.76 | 49.3% | 0.707 | 8.74 | 11.64 | 0.485 | 0.947 | -7.61 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 116.41 | 47.9% | 0.697 | 9.36 | 12.44 | 0.675 | 0.725 | -7.24 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: EMA 200 → 3 | 95.08 | 46.7% | 0.626 | 9.48 | 10.03 | 0.401 | 0.869 | -9.35 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 106.15 | 50% | 0.748 | 8.02 | 13.24 | 0.578 | 0.937 | -8.72 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 | 60.27 | 40.1% | 0.424 | 11.88 | 5.07 | 0.369 | 0.467 | -10.71 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Cộng thêm ngưỡng điểm khung 1W → 2 | 110.04 | 50% | 0.754 | 8.47 | 12.99 | 0.541 | 0.998 | -8.9 |  |

### Vòng 1019 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.28R, lời÷rủi ro 13.49

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 35.82 | 39.3% | 0.403 | 10.66 | 3.36 | 0.342 | 0.476 | -7.55 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: EMA 21 → 1.13 | 104.36 | 49.3% | 0.687 | 8.61 | 12.12 | 0.529 | 0.867 | -9.24 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Momentum (/100) → 25 | 107.94 | 50% | 0.771 | 8 | 13.49 | 0.559 | 1.009 | -8.9 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Elliott (/100) → 6 + Trọng số phần SL (/100) → 7 | 109.94 | 48.6% | 0.797 | 8.62 | 12.75 | 0.591 | 1.041 | -8.15 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 110.87 | 51.8% | 0.798 | 7.68 | 14.44 | 0.651 | 0.96 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Đệm SL riêng khung 1D (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 88.1 | 39.5% | 0.498 | 14.17 | 6.22 | 0.549 | 0.452 | -2.32 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 11.13 | 51.1% | 0.081 | 9 | 1.24 | 0.11 | 0.059 | -11.47 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Cộng thêm ngưỡng điểm khung 1W → 2 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 103.8 | 48.7% | 0.692 | 8.75 | 11.86 | 0.51 | 0.9 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: POC anchored → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 86.07 | 47.7% | 0.563 | 9.79 | 8.79 | 0.488 | 0.644 | -8.12 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: BOS → 1 + Trọng số phần Elliott (/100) → 10 | 27.37 | 56.9% | 0.179 | 5.96 | 4.59 | 0.198 | 0.161 | -9.28 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 89.98 | 42.8% | 0.481 | 11.13 | 8.08 | 0.5 | 0.463 | -17.52 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + % chốt ở TP1 → 0.307 + Trọng số phần Elliott (/100) → 6 | 117.46 | 41.1% | 0.38 | 12.21 | 9.62 | 0.327 | 0.426 | -8.47 |  |

### Vòng 1018 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.95R, lời÷rủi ro 14.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Số TP tối đa → 2 | 126.23 | 45% | 0.551 | 11.19 | 11.28 | 0.569 | 0.532 | -10.68 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 20.75 | 51.2% | 0.084 | 15.43 | 1.34 | 0.042 | 0.119 | -16.14 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Cổng Dow → TẮT | 127.38 | 44.5% | 0.609 | 11.36 | 11.21 | 0.524 | 0.696 | -17.05 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Trọng số phần SL (/100) → 7 + Cộng thêm ngưỡng điểm khung 4H → -1 | 113.76 | 52.1% | 0.779 | 7.83 | 14.53 | 0.581 | 1.006 | -8.9 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Mức MACD → 1.13 | 109.72 | 50.7% | 0.784 | 7.7 | 14.25 | 0.538 | 1.067 | -8.41 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Mức MACD → 0.875 + Trọng số phần SL (/100) → 9 | 106.22 | 50.7% | 0.728 | 8.37 | 12.69 | 0.538 | 0.933 | -7.61 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Trend (/100) → 12 + Đệm SL riêng khung 1W (ATR) → 0.3 | 104.41 | 47.4% | 0.687 | 9.87 | 10.58 | 0.558 | 0.816 | -10.75 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: Mức MACD → 0.875 + Trọng số phần Entry (/100) → 28 + R:R tối thiểu riêng khung 1D → 2 | 102.3 | 45.6% | 0.598 | 9.46 | 10.81 | 0.557 | 0.637 | -5.87 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Trọng số phần Entry (/100) → 33 + Trọng số phần Trend (/100) → 12 | 108.83 | 49.7% | 0.751 | 8.34 | 13.05 | 0.558 | 0.963 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 146.17 | 38.1% | 0.511 | 18.27 | 8 | 0.345 | 0.679 | -13.6 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Cộng thêm ngưỡng điểm khung 1D → 5 | 117.64 | 41.9% | 0.379 | 12.48 | 9.43 | 0.325 | 0.426 | -9.46 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Cộng thêm ngưỡng điểm khung 4H → -1 | 85.84 | 47.3% | 0.58 | 9.81 | 8.75 | 0.416 | 0.778 | -3.72 |  |

### Vòng 1017 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.98R, lời÷rủi ro 14.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Mức MACD → 0.875 | 106.33 | 51% | 0.733 | 8.26 | 12.87 | 0.534 | 0.953 | -7.61 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Cộng điểm phân kỳ dương ẩn → 3 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 36.73 | 39.8% | 0.417 | 10.14 | 3.62 | 0.335 | 0.516 | -7.55 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Trend (/100) → 12 + Điểm vùng: EMA 21 → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 104.91 | 45.8% | 0.632 | 11.15 | 9.41 | 0.621 | 0.641 | -3.63 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 96.13 | 50.3% | 0.654 | 8.83 | 10.89 | 0.548 | 0.774 | -8.12 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: EMA 21 → 0.875 + R:R tối thiểu tới TP1 → 2.63 | 93.37 | 48.8% | 0.759 | 8.72 | 10.71 | 0.496 | 1.036 | -9.6 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần SL (/100) → 9 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 85.8 | 48.8% | 0.698 | 8.44 | 10.17 | 0.576 | 0.825 | -14.42 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.563 | 80.19 | 44.1% | 0.553 | 11.36 | 7.06 | 0.598 | 0.514 | -6.47 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 107.85 | 50% | 0.729 | 8.29 | 13.01 | 0.551 | 0.921 | -8.72 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Cộng thêm ngưỡng điểm khung 4H → 2 | 111.3 | 51% | 0.768 | 8.13 | 13.69 | 0.59 | 0.963 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 85.39 | 45.3% | 0.614 | 9.82 | 8.7 | 0.351 | 0.846 | -11.77 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 128.34 | 44.9% | 0.565 | 10.85 | 11.83 | 0.603 | 0.526 | -9.42 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: POC volume profile cố định → 0.813 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 85.78 | 42.7% | 0.546 | 11.33 | 7.57 | 0.364 | 0.762 | -5.66 |  |

### Vòng 1016 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.35R, lời÷rủi ro 13.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Lệnh chờ hết hạn sau (nến) → 8 + % chốt ở TP1 → 0.287 + Ngưỡng điểm vào kèo → 77 | 104.91 | 49% | 0.686 | 8.77 | 11.96 | 0.548 | 0.84 | -10.89 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: POC volume profile cố định → 0.688 | 110.39 | 48.9% | 0.806 | 8.59 | 12.85 | 0.591 | 1.065 | -8.15 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Divergence (/100) → 9 + Xác nhận khung nhỏ (A2) → W | 68.04 | 38.6% | 0.337 | 16.45 | 4.14 | 0.243 | 0.416 | -12.72 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trọng số phần Entry (/100) → 33 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 109.44 | 50% | 0.76 | 8.24 | 13.28 | 0.542 | 1.011 | -8.9 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 103.09 | 37.2% | 0.366 | 19.62 | 5.25 | 0.367 | 0.365 | -7.2 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cộng thêm ngưỡng điểm khung 1D → 5 | 94.05 | 45.4% | 0.667 | 9.83 | 9.57 | 0.374 | 0.956 | -9.7 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 50 → 1.13 | 107.89 | 49% | 0.744 | 8.68 | 12.43 | 0.541 | 0.981 | -7.88 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần R:R (/100) → 28 | 110.02 | 50% | 0.754 | 8.3 | 13.26 | 0.546 | 0.998 | -8.9 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: POC volume profile cố định → 0.688 | 110.67 | 50.7% | 0.758 | 8.26 | 13.4 | 0.556 | 0.99 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 125.19 | 44.7% | 0.533 | 11.47 | 10.91 | 0.597 | 0.469 | -15.8 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 50 → 0.75 + Trọng số phần Divergence (/100) → 12 | 104.35 | 39.6% | 0.417 | 15.26 | 6.84 | 0.353 | 0.475 | -4.76 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Ngưỡng điểm vào kèo → 74 + % chốt ở TP1 → 0.287 + Điểm vùng: Fib sóng 4 → 0.938 | 104.62 | 49.3% | 0.697 | 8.57 | 12.21 | 0.501 | 0.922 | -8.88 |  |

### Vòng 1015 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.28R, lời÷rủi ro 13.49

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: BOS → 1 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 104.99 | 49.3% | 0.691 | 8.99 | 11.68 | 0.495 | 0.913 | -9.97 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: POC volume profile cố định → 0.688 | 108.46 | 49.7% | 0.738 | 8.43 | 12.87 | 0.514 | 0.998 | -8.9 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Elliott (/100) → 10 | 70.69 | 45.4% | 0.655 | 9.15 | 7.73 | 0.422 | 0.914 | -4.43 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + SL tối đa (% Entry) → 0.425 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Ngưỡng điểm vào kèo → 77 | 106.25 | 49.3% | 0.738 | 8.39 | 12.66 | 0.602 | 0.886 | -7.69 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: HVN cố định → 0.438 | 107.19 | 49% | 0.739 | 8.67 | 12.36 | 0.517 | 0.998 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: MACD cắt lên Signal → 0.563 | 83.31 | 43.8% | 0.579 | 10.63 | 7.84 | 0.407 | 0.75 | -9.99 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Lệnh chờ hết hạn sau (nến) → 6 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 | 59.38 | 42.7% | 0.396 | 11.57 | 5.13 | 0.376 | 0.418 | -4.7 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu tới TP1 → 2.63 | 69.24 | 46.2% | 0.525 | 10.84 | 6.39 | 0.33 | 0.731 | -10.45 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: POC anchored → 4 | 109.36 | 50.3% | 0.754 | 8.22 | 13.3 | 0.588 | 0.923 | -2.3 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.188 + Lệnh chờ hết hạn sau (nến) → 6 | 98.75 | 45.5% | 0.641 | 10.78 | 9.16 | 0.621 | 0.662 | -2.22 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cổng Dow → CHẶT | 80.71 | 51.4% | 0.727 | 7.31 | 11.04 | 0.275 | 1.125 | -10.99 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: POC anchored → 4 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần R:R (/100) → 33 | 112.18 | 50.3% | 0.743 | 8.39 | 13.37 | 0.552 | 0.936 | -1.64 |  |
