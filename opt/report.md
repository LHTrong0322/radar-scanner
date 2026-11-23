# Tối ưu tự động (chạy liên tục) — vòng 1229

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 14380 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 155 | 45.8% | 93.28R | 0.602 | 5.7R | 9.75R | 9.57 | 30 | 13.3% | -12.67R | -0.422 | 12.67R |
| **Tốt nhất** | 134 | 51.5% | 114.09R | 0.851 | 5.15R | 7.41R | 15.40 | 29 | 13.8% | -13.18R | -0.454 | 13.18R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 23 | 47.8% | 19.66R | 7 | 0% | -5.66R |
| 1W | 11 | 54.5% | 11.11R | 2 | 0% | -2.3R |
| 4H | 100 | 52% | 83.33R | 20 | 20% | -5.21R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 155 | 45.8% | 93.28R | 9.75R | 9.57 | 30 | 13.3% | -12.67R |
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
| Điểm vùng: Fib 0.5 / 0.382 sóng 2 | 3 | **4** |

## Các thay đổi đã nhận (mới nhất trước)

| Vòng | Thông số | Từ → Thành | Tổng R | Tỷ lệ thắng | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro |
|---|---|---|---|---|---|---|
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
| 24 | Trọng số phần R:R (/100) | 30 → 20 | 92.96R | 41.3% | 13.64R | 6.82 |
| 22 | Điểm ADX > 25 và +DI trội (Momentum) | 2 → 3 | 82.86R | 40.3% | 14.81R | 5.59 |

## 10 vòng gần nhất

### Vòng 1229 — ngẫu nhiên nhiều thông số · mốc: tổng 114.09R, win 51.5%, rủi ro tụt vốn 7.41R, lời÷rủi ro 15.40

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 109.17 | 39.1% | 0.44 | 15.03 | 7.26 | 0.424 | 0.454 | -5.45 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Số TP tối đa → 1 | 110.96 | 51.1% | 0.847 | 7.34 | 15.12 | 0.602 | 1.111 | -13.18 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: HVN anchored → 0.313 | 112.73 | 50.4% | 0.835 | 7.52 | 14.99 | 0.613 | 1.074 | -13.59 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần SL (/100) → 9 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: HVN cố định → 0.438 | 109.02 | 44.9% | 0.69 | 10.2 | 10.69 | 0.605 | 0.771 | -12.33 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 79.56 | 40.1% | 0.375 | 13.06 | 6.09 | 0.328 | 0.422 | -3.23 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Break mây Ichimoku → 1 | 105.89 | 49.6% | 0.773 | 7.83 | 13.52 | 0.601 | 0.947 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Momentum (/100) → 21 | 110.3 | 46.7% | 0.66 | 8.86 | 12.45 | 0.608 | 0.71 | -9.96 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib sóng 4 → 1.56 | 160.47 | 38.9% | 0.573 | 17.61 | 9.11 | 0.458 | 0.695 | -7.93 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 106.55 | 50% | 0.772 | 7.91 | 13.47 | 0.583 | 0.972 | -11.76 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: EMA 21 → 1.13 | 108.2 | 49.3% | 0.751 | 7.91 | 13.68 | 0.537 | 0.984 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: BOS → 2 + % chốt ở TP1 → 0.287 + Điểm vùng: Biên mây Ichimoku → 1.35 | 106.26 | 48.6% | 0.718 | 8.66 | 12.27 | 0.652 | 0.782 | -10.85 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Số TP tối đa → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 99.51 | 49.3% | 0.721 | 8.1 | 12.29 | 0.532 | 0.927 | -13.83 |  |

### Vòng 1228 — ngẫu nhiên nhiều thông số · mốc: tổng 120.15R, win 52.4%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.32

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 1W → -1 | 110.48 | 46.6% | 0.635 | 9.08 | 12.17 | 0.581 | 0.686 | -9.96 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 110.05 | 48% | 0.724 | 8.43 | 13.05 | 0.524 | 0.935 | -14.57 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Mức RSI 30/70 → 1.13 | 110.48 | 46.6% | 0.635 | 9.08 | 12.17 | 0.581 | 0.686 | -9.96 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 26.96 | 57.1% | 0.173 | 6.25 | 4.31 | 0.171 | 0.175 | -6.98 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 200 → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 29.45 | 57.9% | 0.172 | 6.57 | 4.48 | 0.183 | 0.16 | -6.08 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: MACD cắt lên Signal → 0.438 + SL tối đa (% Entry) → 0.425 | 112.51 | 46.3% | 0.686 | 9.82 | 11.46 | 0.408 | 1 | -10.23 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 95.96 | 46.4% | 0.627 | 9.92 | 9.67 | 0.408 | 0.894 | -11.61 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL riêng khung 1W (ATR) → 0.3 | 104.06 | 46.2% | 0.718 | 9.26 | 11.24 | 0.476 | 0.956 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 35.25 | 38.9% | 0.392 | 10.52 | 3.35 | 0.314 | 0.494 | -7.55 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 74.3 | 48.3% | 0.619 | 8.45 | 8.79 | 0.61 | 0.629 | -19.24 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Trọng số phần Elliott (/100) → 6 + Trọng số phần Entry (/100) → 28 + Đệm SL riêng khung 1W (ATR) → 0.3 | 96.02 | 46.2% | 0.662 | 9.83 | 9.77 | 0.5 | 0.809 | -7.62 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + R:R tối thiểu riêng khung 1D → 2 | 109.78 | 45.7% | 0.627 | 8.88 | 12.36 | 0.588 | 0.665 | -9.78 |  |

### Vòng 1227 — ngẫu nhiên nhiều thông số · mốc: tổng 120.15R, win 52.4%, rủi ro tụt vốn 7.33R, lời÷rủi ro 16.39

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Lệnh chờ hết hạn sau (nến) → 6 | 95.24 | 48.8% | 0.738 | 7.78 | 12.24 | 0.586 | 0.908 | -12.82 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 3 | 125.53 | 35.9% | 0.41 | 21.04 | 5.97 | 0.266 | 0.549 | -9.06 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Mức MACD → 1.13 | 97.02 | 48.9% | 0.729 | 8 | 12.13 | 0.556 | 0.934 | -12.82 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 112.95 | 50% | 0.763 | 7.96 | 14.19 | 0.549 | 1.016 | -12.66 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Mức MACD → 1.13 | 108.86 | 45.7% | 0.622 | 9.17 | 11.87 | 0.563 | 0.679 | -9.96 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 117.2 | 52.1% | 0.837 | 7.33 | 15.99 | 0.636 | 1.062 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Cổng Dow → CHẶT | 84.07 | 51.3% | 0.744 | 7.56 | 11.12 | 0.322 | 1.117 | -15.27 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Mức MACD → 0.875 + R:R tối thiểu riêng khung 1W → 2 | 73.76 | 34.1% | 0.267 | 23.48 | 3.14 | 0.274 | 0.262 | -7.37 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Số TP tối đa → 3 + SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 200 → 3 | 105.42 | 47.6% | 0.717 | 8.67 | 12.16 | 0.42 | 1.026 | -13.07 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: POC volume profile cố định → 0.688 + Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 140.4 | 35.4% | 0.493 | 20.36 | 6.9 | 0.313 | 0.671 | -10.04 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần Entry (/100) → 33 | 116.93 | 50.7% | 0.812 | 7.6 | 15.39 | 0.66 | 0.977 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần R:R (/100) → 33 | 38.93 | 41.6% | 0.437 | 9.8 | 3.97 | 0.35 | 0.544 | -7.55 |  |

### Vòng 1226 — ngẫu nhiên nhiều thông số · mốc: tổng 120.15R, win 52.4%, rủi ro tụt vốn 7.3R, lời÷rủi ro 16.46

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: EMA 50 → 1.13 + % chốt ở TP1 → 0.307 | 73.27 | 43.8% | 0.654 | 9.56 | 7.66 | 0.544 | 0.782 | -3.37 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 200 → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 72.47 | 47.3% | 0.659 | 8.84 | 8.2 | 0.465 | 0.883 | -2 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Break mây Ichimoku → 3 | 147.54 | 37.1% | 0.464 | 19.9 | 7.41 | 0.312 | 0.61 | -10.15 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 118.51 | 44.5% | 0.502 | 11.01 | 10.76 | 0.568 | 0.439 | -17.41 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Cổng Dow → CHẶT + % chốt ở TP1 → 0.287 + Cộng thêm ngưỡng điểm khung 1W → -1 | 87.06 | 50.4% | 0.708 | 7.96 | 10.94 | 0.331 | 1.055 | -15.66 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + R:R tối thiểu riêng khung 1D → 2 | 109.01 | 46% | 0.626 | 8.9 | 12.25 | 0.581 | 0.67 | -9.96 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 30.99 | 57.4% | 0.191 | 6.17 | 5.02 | 0.186 | 0.196 | -8.38 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Biên mây Ichimoku → 1.35 | 116.21 | 48.6% | 0.807 | 8.06 | 14.42 | 0.618 | 1.031 | -10.4 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Cổng Dow → CHẶT | 74.66 | 48.7% | 0.638 | 7.71 | 9.68 | 0.248 | 0.973 | -14.59 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 110.52 | 45.4% | 0.635 | 10.84 | 10.2 | 0.487 | 0.773 | -10.34 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 113.16 | 50.7% | 0.775 | 8.2 | 13.8 | 0.582 | 0.997 | -14.15 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Biên mây Ichimoku → 1.35 | 92.1 | 43.2% | 0.622 | 10.11 | 9.11 | 0.514 | 0.736 | -8.13 |  |

### Vòng 1225 — ngẫu nhiên nhiều thông số · mốc: tổng 120.15R, win 52.4%, rủi ro tụt vốn 7.31R, lời÷rủi ro 16.44

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Trọng số phần Momentum (/100) → 21 + Xác nhận khung nhỏ (A2) → W + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 128.95 | 40.8% | 0.474 | 13.72 | 9.4 | 0.508 | 0.446 | -9.19 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: HVN anchored → 0.313 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.5 | 57.2% | 0.186 | 6.04 | 4.88 | 0.179 | 0.192 | -8.41 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cổng Dow → TẮT | 127.91 | 43.1% | 0.606 | 11.82 | 10.82 | 0.52 | 0.697 | -22.3 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Số TP tối đa → 1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 116.56 | 50% | 0.747 | 8.26 | 14.11 | 0.833 | 0.644 | -13.36 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: EMA 200 → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 82.55 | 48.3% | 0.712 | 7.98 | 10.34 | 0.493 | 0.962 | -19.63 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 115.18 | 52.1% | 0.789 | 7.64 | 15.08 | 0.612 | 0.992 | -13.18 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Trọng số phần Trend (/100) → 19 | 119.7 | 52.1% | 0.831 | 7.43 | 16.11 | 0.655 | 1.028 | -13.18 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Trọng số phần Entry (/100) → 28 + Cổng Dow → TẮT + Điểm vùng: Vùng RSI 45–55 → 0.875 | 103.01 | 40.5% | 0.502 | 12.78 | 8.06 | 0.485 | 0.519 | -23.42 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Cổng Dow → TẮT + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + R:R tối thiểu riêng khung 4H → 2 | 89.73 | 37.1% | 0.244 | 19.01 | 4.72 | 0.34 | 0.155 | -20.58 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần Trend (/100) → 19 | 111.48 | 49% | 0.758 | 8.08 | 13.8 | 0.557 | 0.993 | -11.98 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: HVN cố định → 0.438 | 104.78 | 48.6% | 0.708 | 8.37 | 12.52 | 0.516 | 0.933 | -13 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: HVN anchored → 0.313 | 91.47 | 43.6% | 0.653 | 9.82 | 9.31 | 0.463 | 0.873 | -8.41 |  |

### Vòng 1224 — ngẫu nhiên nhiều thông số · mốc: tổng 120.15R, win 52.4%, rủi ro tụt vốn 7.35R, lời÷rủi ro 16.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Cộng thêm ngưỡng điểm khung 1W → -1 | 113.84 | 51.4% | 0.78 | 7.98 | 14.27 | 0.612 | 0.973 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 17.55 | 52.8% | 0.143 | 7.08 | 2.48 | 0.171 | 0.115 | -8.84 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm tối thiểu của vùng đặt SL → 4 | 117.67 | 51.4% | 0.817 | 7.41 | 15.88 | 0.66 | 0.988 | -11.89 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: BOS → 0 | 108.98 | 47.9% | 0.66 | 9.07 | 12.02 | 0.541 | 0.791 | -12.05 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần SL (/100) → 7 | 106.1 | 49.7% | 0.742 | 8.05 | 13.18 | 0.573 | 0.908 | -14.22 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Lệnh chờ hết hạn sau (nến) → 8 | 113.12 | 49.4% | 0.725 | 8.4 | 13.47 | 0.549 | 0.925 | -14.77 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 | 107.27 | 46.4% | 0.701 | 9.64 | 11.13 | 0.564 | 0.833 | -15.07 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 66.19 | 43.2% | 0.561 | 10.89 | 6.08 | 0.389 | 0.772 | -6.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + % chốt ở TP1 → 0.287 | 110.4 | 46.6% | 0.634 | 8.95 | 12.34 | 0.58 | 0.687 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + % chốt ở TP1 → 0.307 | 120.12 | 52.4% | 0.84 | 7.36 | 16.32 | 0.655 | 1.05 | -13.19 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần Entry (/100) → 33 + Khung lớn phải tăng (trend ≥) → 0.425 | 98.98 | 47.5% | 0.712 | 8.6 | 11.51 | 0.481 | 0.975 | -13.21 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Break mây Ichimoku → 3 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 92.43 | 44.7% | 0.608 | 9.84 | 9.39 | 0.554 | 0.666 | -9.15 |  |

### Vòng 1223 — ngẫu nhiên nhiều thông số · mốc: tổng 120.15R, win 52.4%, rủi ro tụt vốn 7.31R, lời÷rủi ro 16.44

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm tối thiểu của vùng đặt SL → 2 + R:R tối thiểu riêng khung 1D → 2 | 105.1 | 45.5% | 0.59 | 9.54 | 11.02 | 0.576 | 0.604 | -6.63 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + R:R tối thiểu riêng khung 4H → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 21.7 | 46.5% | 0.069 | 9.39 | 2.31 | 0.086 | 0.057 | -10.24 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Cộng thêm ngưỡng điểm khung 4H → 2 + Ngưỡng điểm vào kèo → 77 | 113.89 | 51.4% | 0.814 | 7.45 | 15.29 | 0.673 | 0.971 | -11.76 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần SL (/100) → 9 | 96.89 | 45.5% | 0.668 | 9.35 | 10.36 | 0.536 | 0.818 | -9.15 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Trend (/100) → 12 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 28.12 | 56.6% | 0.177 | 6.2 | 4.54 | 0.182 | 0.172 | -8.95 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: HVN anchored → 0.313 | 56.85 | 43.6% | 0.517 | 10.43 | 5.45 | 0.428 | 0.628 | -7.82 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Trọng số phần Entry (/100) → 33 | 113.46 | 50.3% | 0.793 | 7.68 | 14.77 | 0.602 | 0.999 | -13.18 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: POC anchored → 4 + Điểm vùng: EMA 50 → 1.13 | 115.73 | 49.7% | 0.777 | 7.98 | 14.5 | 0.612 | 0.94 | -7.89 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 109.91 | 51.7% | 0.758 | 7.61 | 14.44 | 0.604 | 0.927 | -14.01 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 126.23 | 49.4% | 0.809 | 8.39 | 15.05 | 0.757 | 0.872 | -13.76 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Divergence (/100) → 12 | 104.62 | 49.3% | 0.737 | 8.19 | 12.77 | 0.556 | 0.923 | -14.22 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Khung lớn phải tăng (trend ≥) → 0.425 | 109.86 | 50.7% | 0.808 | 7.76 | 14.16 | 0.534 | 1.115 | -12.7 |  |

### Vòng 1222 — ngẫu nhiên nhiều thông số · mốc: tổng 120.15R, win 52.4%, rủi ro tụt vốn 7.32R, lời÷rủi ro 16.41

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + SL tối đa (% Entry) → 0.425 | 124.77 | 44.4% | 0.555 | 11.03 | 11.31 | 0.629 | 0.485 | -13.87 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 200 → 3 | 26.32 | 58.2% | 0.172 | 5.91 | 4.45 | 0.16 | 0.183 | -9.41 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Fib sóng 4 → 1.56 | 73.44 | 45.5% | 0.668 | 9.27 | 7.92 | 0.421 | 0.964 | -5.8 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu riêng khung 4H → 2 | 101.27 | 40.3% | 0.346 | 13.36 | 7.58 | 0.333 | 0.357 | -8.56 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần Momentum (/100) → 21 | 112.01 | 51% | 0.762 | 7.92 | 14.14 | 0.564 | 0.992 | -13.18 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: EMA 21 → 0.875 + R:R tối thiểu riêng khung 4H → 2 | 97.63 | 39.9% | 0.341 | 13.16 | 7.42 | 0.294 | 0.382 | -6.02 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + SL tối đa (% Entry) → 0.425 | 106.86 | 49% | 0.727 | 8.45 | 12.65 | 0.569 | 0.91 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Fib sóng 4 → 0.938 | 36.71 | 40.9% | 0.417 | 10.01 | 3.67 | 0.321 | 0.532 | -8.25 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Cổng Dow → TẮT + Điểm vùng: Mức RSI 30/70 → 0.875 | 142.98 | 43.8% | 0.591 | 12.23 | 11.69 | 0.493 | 0.697 | -16.39 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Cổng Dow → TẮT + Trọng số phần Momentum (/100) → 25 | 126.36 | 42.9% | 0.622 | 11.4 | 11.08 | 0.529 | 0.72 | -17.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 104.1 | 47.6% | 0.728 | 8.89 | 11.71 | 0.489 | 0.945 | -10.75 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 120.15 | 52.4% | 0.84 | 7.32 | 16.41 | 0.655 | 1.051 | -13.18 |  |

### Vòng 1221 — ngẫu nhiên nhiều thông số · mốc: tổng 120.15R, win 52.4%, rủi ro tụt vốn 7.29R, lời÷rủi ro 16.48

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Khung lớn phải tăng (trend ≥) → 0.425 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 | 156.84 | 38.7% | 0.552 | 17.62 | 8.9 | 0.411 | 0.695 | -10.12 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 120.15 | 52.4% | 0.84 | 7.29 | 16.48 | 0.655 | 1.051 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: HVN anchored → 0.313 | 111.96 | 50.7% | 0.756 | 7.92 | 14.14 | 0.569 | 0.971 | -13.18 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: HVN cố định → 0.563 | 106.87 | 45.2% | 0.604 | 9.64 | 11.09 | 0.585 | 0.621 | -8.67 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Momentum (/100) → 21 + Trọng số phần SL (/100) → 9 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.37 | 57.2% | 0.185 | 5.92 | 4.96 | 0.184 | 0.186 | -8.42 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: HVN cố định → 0.438 + R:R tối thiểu tới TP1 → 2.38 | 29.27 | 37.9% | 0.284 | 13.04 | 2.24 | 0.242 | 0.334 | -12.01 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Xác nhận khung nhỏ (A2) → W + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Break mây Ichimoku → 1 | 124.68 | 40.7% | 0.462 | 14.91 | 8.36 | 0.451 | 0.471 | -7.3 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần Entry (/100) → 28 + Khung lớn phải tăng (trend ≥) → 0.375 | 107.77 | 49.3% | 0.748 | 8.25 | 13.06 | 0.529 | 0.981 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: EMA 200 → 1 | 119.97 | 51.9% | 0.779 | 7.68 | 15.62 | 0.661 | 0.917 | -9.02 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 5.02 | 54.3% | 0.109 | 4.93 | 1.02 | 0.023 | 0.16 | -5.77 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: BOS → 0 | 106.07 | 49.7% | 0.742 | 7.68 | 13.81 | 0.604 | 0.878 | -14.22 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 119.4 | 52.1% | 0.829 | 7.54 | 15.84 | 0.655 | 1.024 | -11.86 |  |

### Vòng 1220 — ngẫu nhiên nhiều thông số · mốc: tổng 120.15R, win 52.4%, rủi ro tụt vốn 7.33R, lời÷rủi ro 16.39

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần Trend (/100) → 19 | 119.7 | 52.1% | 0.831 | 7.41 | 16.15 | 0.655 | 1.028 | -13.18 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Số TP tối đa → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 74.1 | 45% | 0.668 | 9.08 | 8.16 | 0.508 | 0.855 | -4.39 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: EMA 21 → 0.875 + Trọng số phần Divergence (/100) → 9 + Xác nhận khung nhỏ (A2) → W | 88.5 | 38.2% | 0.408 | 14.78 | 5.99 | 0.38 | 0.431 | -14.01 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + R:R tối thiểu riêng khung 1W → 2 + Lệnh chờ hết hạn sau (nến) → 8 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 107.74 | 46.7% | 0.645 | 9.61 | 11.21 | 0.531 | 0.767 | -16.2 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Trọng số phần R:R (/100) → 28 | 117.93 | 51% | 0.825 | 7.53 | 15.66 | 0.66 | 1.006 | -13.18 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: EMA 21 → 0.875 + Cộng điểm phân kỳ dương ẩn → 2.25 | 111.46 | 47.4% | 0.715 | 8.28 | 13.46 | 0.646 | 0.785 | -10.88 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: EMA 21 → 1.13 + R:R tối thiểu tới TP1 → 2.38 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 98.59 | 46.6% | 0.605 | 8.87 | 11.11 | 0.5 | 0.706 | -13.73 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 | 128.52 | 44.1% | 0.566 | 10.62 | 12.1 | 0.603 | 0.53 | -16.83 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 4H → -1 + SL tối đa (% Entry) → 0.425 + Coin phải mạnh hơn BTC trong N ngày → 14 | 84.4 | 41.5% | 0.408 | 14.83 | 5.69 | 0.389 | 0.421 | -13.37 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 104.74 | 51.4% | 0.717 | 7.87 | 13.31 | 0.673 | 0.766 | -12.78 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: MACD cắt lên Signal → 0.563 | 127.83 | 43.3% | 0.63 | 11.03 | 11.59 | 0.529 | 0.735 | -16.85 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: EMA 21 → 0.875 | 116.45 | 50% | 0.809 | 7.61 | 15.3 | 0.664 | 0.966 | -13.18 |  |
