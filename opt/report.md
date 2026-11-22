# Tối ưu tự động (chạy liên tục) — vòng 1189

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 13900 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 98.78R | 0.595 | 5.7R | 9.67R | 10.22 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 143 | 53.1% | 121.88R | 0.852 | 5.15R | 7.07R | 17.24 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 26 | 50% | 20.05R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 106 | 54.7% | 94.86R | 19 | 21.1% | -4.19R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 98.78R | 9.67R | 10.22 | 30 | 13.3% | -11.98R |
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

### Vòng 1189 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.07R, lời÷rủi ro 17.24

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần R:R (/100) → 33 + Ngưỡng điểm vào kèo → 74 + Trọng số phần Momentum (/100) → 25 | 84.24 | 45.1% | 0.514 | 10.33 | 8.15 | 0.421 | 0.607 | -11.51 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 + Khung lớn phải tăng (trend ≥) → 0.375 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 81.01 | 47.4% | 0.609 | 9.19 | 8.82 | 0.477 | 0.747 | -13.71 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Fib sóng 4 → 1.56 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 70.87 | 45.1% | 0.533 | 10.34 | 6.85 | 0.384 | 0.714 | -10.06 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 21 → 0.875 | 103.96 | 47.9% | 0.743 | 8.26 | 12.59 | 0.771 | 0.709 | -12.38 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Elliott (/100) → 10 + Trọng số phần Entry (/100) → 33 | 30.7 | 56.8% | 0.198 | 5.63 | 5.45 | 0.213 | 0.184 | -8.19 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 120.57 | 49.7% | 0.778 | 8.12 | 14.85 | 0.605 | 0.972 | -12.55 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trọng số phần R:R (/100) → 33 | 131.87 | 43.6% | 0.646 | 11.02 | 11.97 | 0.544 | 0.751 | -16.85 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Cổng Dow → TẮT + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 103.71 | 41.9% | 0.648 | 11.15 | 9.3 | 0.528 | 0.775 | -14.33 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Mức MACD → 1.13 + Đệm SL riêng khung 1W (ATR) → 0.3 | 101.06 | 43.2% | 0.652 | 10.54 | 9.59 | 0.542 | 0.772 | -13.99 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 134.29 | 43.5% | 0.649 | 11.15 | 12.04 | 0.541 | 0.764 | -16.84 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 120.87 | 52.8% | 0.839 | 7.12 | 16.98 | 0.672 | 1.027 | -12.16 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần SL (/100) → 9 + R:R tối thiểu riêng khung 1D → 2 | 57.87 | 37.8% | 0.295 | 15.73 | 3.68 | 0.316 | 0.278 | -8.24 |  |

### Vòng 1188 — ngẫu nhiên nhiều thông số · mốc: tổng 119.12R, win 53.2%, rủi ro tụt vốn 7.09R, lời÷rủi ro 16.80

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + SL tối đa (% Entry) → 0.425 + Cộng điểm phân kỳ dương ẩn → 2.25 + Coin phải mạnh hơn BTC trong N ngày → 14 | 89.06 | 41.1% | 0.336 | 12.47 | 7.14 | 0.366 | 0.314 | -15.44 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Trọng số phần Entry (/100) → 28 + Khung lớn phải tăng (trend ≥) → 0.375 | 112.77 | 51.1% | 0.8 | 7.66 | 14.72 | 0.564 | 1.053 | -12.31 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: EMA 200 → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 87.3 | 45% | 0.586 | 10.4 | 8.39 | 0.346 | 0.843 | -13.05 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần Elliott (/100) → 10 | 111.93 | 51.4% | 0.777 | 7.53 | 14.86 | 0.599 | 0.971 | -12.31 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 116.64 | 52.1% | 0.821 | 7.2 | 16.2 | 0.644 | 1.01 | -11.02 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 100.47 | 47.2% | 0.698 | 8.92 | 11.26 | 0.551 | 0.862 | -9.16 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: BOS → 0 | 118.97 | 53.2% | 0.844 | 7.1 | 16.76 | 0.635 | 1.074 | -12.29 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 50 → 1.13 | 112.88 | 50.3% | 0.789 | 7.86 | 14.36 | 0.588 | 1.012 | -11.29 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 26.34 | 49% | 0.133 | 8.64 | 3.05 | 0.215 | 0.048 | -14.24 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: BOS → 0 + SL tối đa (% Entry) → 0.425 | 115.35 | 52.1% | 0.812 | 7.54 | 15.3 | 0.618 | 1.023 | -12.31 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: HVN cố định → 0.563 | 100.83 | 48% | 0.672 | 9.3 | 10.84 | 0.464 | 0.916 | -9.71 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Lệnh chờ hết hạn sau (nến) → 6 | 83.23 | 46% | 0.608 | 9.47 | 8.79 | 0.563 | 0.654 | -7.95 |  |

### Vòng 1187 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.05R, lời÷rủi ro 17.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: HVN cố định → 0.438 | 31.04 | 58% | 0.198 | 5.63 | 5.51 | 0.212 | 0.185 | -8.18 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Đệm SL riêng khung 1W (ATR) → 0.3 | 112.97 | 46.1% | 0.734 | 9.67 | 11.68 | 0.479 | 1.001 | -13.9 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: POC volume profile cố định → 0.813 + R:R tối thiểu riêng khung 1W → 2 | 108.04 | 50.7% | 0.761 | 7.72 | 13.99 | 0.604 | 0.918 | -12.17 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 9 + Điểm vùng: Mức MACD → 1.13 | 122.38 | 41.1% | 0.387 | 12.29 | 9.96 | 0.361 | 0.411 | -5.39 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: POC volume profile cố định → 0.813 | 121.13 | 52.8% | 0.841 | 7.03 | 17.23 | 0.672 | 1.031 | -9.82 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: EMA 21 → 1.13 + Trọng số phần Momentum (/100) → 25 + Trọng số phần Trend (/100) → 12 | 118.32 | 50.7% | 0.81 | 7.15 | 16.55 | 0.647 | 0.988 | -11.14 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm tối thiểu của vùng đặt SL → 4 | 120.79 | 51.6% | 0.75 | 8.3 | 14.55 | 0.588 | 0.937 | -7.61 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 101.34 | 51.3% | 0.676 | 7.94 | 12.76 | 0.622 | 0.732 | -10.46 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 124.06 | 41.5% | 0.399 | 12.01 | 10.33 | 0.358 | 0.434 | -5.39 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Mức MACD → 0.875 | 115.98 | 50% | 0.743 | 8.19 | 14.16 | 0.593 | 0.902 | -11.26 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Số TP tối đa → 1 + R:R tối thiểu riêng khung 1D → 2 | 93.13 | 44.1% | 0.495 | 9.83 | 9.47 | 0.518 | 0.475 | -8.92 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Break mây Ichimoku → 3 | 112.52 | 49% | 0.717 | 8.54 | 13.18 | 0.576 | 0.878 | -10.01 |  |

### Vòng 1186 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.1R, lời÷rủi ro 17.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 72.63 | 43.6% | 0.44 | 11.14 | 6.52 | 0.399 | 0.483 | -6.52 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 123.26 | 48.5% | 0.747 | 8.45 | 14.59 | 0.703 | 0.798 | -14.33 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần Trend (/100) → 12 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 158.74 | 38.1% | 0.54 | 18.37 | 8.64 | 0.41 | 0.673 | -4.88 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Mức RSI 30/70 → 0.875 | 107.49 | 45.7% | 0.614 | 10.72 | 10.03 | 0.56 | 0.666 | -10.49 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + R:R tối thiểu riêng khung 1W → 2 | 104.06 | 49.6% | 0.738 | 7.98 | 13.04 | 0.583 | 0.895 | -13.19 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần Momentum (/100) → 21 + Trọng số phần R:R (/100) → 33 | 120.81 | 52.1% | 0.827 | 7.18 | 16.83 | 0.646 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 115.19 | 49.6% | 0.841 | 7.69 | 14.98 | 0.615 | 1.106 | -10.4 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 32.37 | 58% | 0.206 | 5.43 | 5.96 | 0.229 | 0.185 | -8.19 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + SL tối đa (% Entry) → 0.425 | 30.28 | 57% | 0.192 | 5.75 | 5.27 | 0.215 | 0.17 | -8.19 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: BOS → 2 | 111.74 | 50.4% | 0.793 | 7.66 | 14.59 | 0.564 | 1.038 | -12.16 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 116.24 | 51.7% | 0.813 | 7.37 | 15.77 | 0.677 | 0.963 | -11.55 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Break mây Ichimoku → 3 | 113.83 | 50% | 0.72 | 8.27 | 13.76 | 0.595 | 0.859 | -9.71 |  |

### Vòng 1185 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.09R, lời÷rủi ro 17.19

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Số TP tối đa → 1 + Điểm vùng: Break mây Ichimoku → 3 | 101.05 | 48.1% | 0.648 | 8.95 | 11.29 | 0.561 | 0.739 | -10.04 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: MACD cắt lên Signal → 0.438 | 114.35 | 50% | 0.733 | 8.79 | 13.01 | 0.521 | 0.986 | -9.58 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Coin phải mạnh hơn BTC trong N ngày → 14 | 87.72 | 49.6% | 0.75 | 7.8 | 11.25 | 0.562 | 0.969 | -17.6 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 | 119.57 | 51.7% | 0.836 | 7.36 | 16.25 | 0.676 | 1.013 | -12.16 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Mức RSI 30/70 → 1.13 | 21.09 | 53% | 0.142 | 7.63 | 2.76 | 0.2 | 0.098 | -11.13 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần SL (/100) → 9 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 126.56 | 44.6% | 0.548 | 10.8 | 11.72 | 0.574 | 0.523 | -15.8 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 | 86.76 | 46.3% | 0.529 | 9.61 | 9.03 | 0.493 | 0.566 | -13.33 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Cộng thêm ngưỡng điểm khung 1D → 5 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN cố định → 0.438 | 120.12 | 40.7% | 0.385 | 12.33 | 9.74 | 0.357 | 0.41 | -6.64 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 104.7 | 47.5% | 0.654 | 9.3 | 11.26 | 0.568 | 0.738 | -8.85 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần Entry (/100) → 28 | 101.23 | 48% | 0.675 | 9.36 | 10.82 | 0.482 | 0.901 | -10.58 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Trọng số phần Entry (/100) → 33 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 101.74 | 51.4% | 0.707 | 8.04 | 12.65 | 0.637 | 0.782 | -8.7 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 200 → 1 + Điểm vùng: Fib sóng 4 → 0.938 | 83.55 | 50% | 0.72 | 7.75 | 10.78 | 0.538 | 0.936 | -17.43 |  |

### Vòng 1184 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức MACD → 1.13 | 103.67 | 49.3% | 0.73 | 8.42 | 12.31 | 0.56 | 0.905 | -13.19 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 91.7 | 50.4% | 0.689 | 8.03 | 11.42 | 0.619 | 0.77 | -11.39 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: HVN anchored → 0.313 | 118.63 | 51.3% | 0.78 | 7.86 | 15.09 | 0.616 | 0.989 | -7.16 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 29.25 | 56.9% | 0.183 | 5.96 | 4.91 | 0.183 | 0.182 | -8.19 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Mức RSI 30/70 → 0.875 | 42.29 | 42.2% | 0.47 | 9.36 | 4.52 | 0.41 | 0.544 | -7.55 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cộng thêm ngưỡng điểm khung 1W → 2 | 116.03 | 51% | 0.8 | 7.53 | 15.41 | 0.636 | 0.981 | -13.54 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: POC anchored → 2 + Cộng thêm ngưỡng điểm khung 1W → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 75.54 | 46.1% | 0.452 | 10.07 | 7.5 | 0.545 | 0.359 | -14.68 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 108.32 | 49.7% | 0.681 | 8.62 | 12.57 | 0.526 | 0.859 | -13.43 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Mức RSI 30/70 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 118.66 | 52.5% | 0.854 | 7.24 | 16.39 | 0.659 | 1.069 | -12.16 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 155.38 | 38.6% | 0.53 | 17.85 | 8.7 | 0.413 | 0.652 | -8.69 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Mức RSI 30/70 → 1.13 + SL tối đa (% Entry) → 0.425 | 119.4 | 52.1% | 0.829 | 7.24 | 16.49 | 0.672 | 1.005 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + SL tối đa (% Entry) → 0.425 | 120.87 | 52.8% | 0.839 | 7.12 | 16.98 | 0.672 | 1.027 | -12.16 |  |

### Vòng 1183 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.09R, lời÷rủi ro 17.19

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Divergence (/100) → 12 | 105.88 | 47.6% | 0.646 | 9.67 | 10.95 | 0.445 | 0.873 | -11.17 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: POC volume profile cố định → 0.813 | 121.18 | 52.8% | 0.842 | 7.23 | 16.76 | 0.654 | 1.057 | -11.14 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Mức RSI 30/70 → 1.13 + Cổng Dow → CHẶT | 89.24 | 50.4% | 0.75 | 7.03 | 12.69 | 0.49 | 0.973 | -14.83 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần SL (/100) → 9 | 120.41 | 52.4% | 0.842 | 7.21 | 16.7 | 0.672 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 21 → 1.13 | 120.6 | 40.1% | 0.46 | 14.04 | 8.59 | 0.467 | 0.454 | -4.88 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + SL tối đa (% Entry) → 0.425 | 113.01 | 50.3% | 0.79 | 7.81 | 14.47 | 0.584 | 1.018 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: EMA 21 → 1.13 + R:R tối thiểu riêng khung 4H → 2 + Khung lớn phải tăng (trend ≥) → 0.375 | 112.72 | 40.6% | 0.364 | 12.38 | 9.11 | 0.358 | 0.368 | -5.37 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + R:R tối thiểu riêng khung 1D → 2 | 96.48 | 45.2% | 0.581 | 9.66 | 9.99 | 0.628 | 0.54 | -11.16 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 76.34 | 46.4% | 0.694 | 8.87 | 8.61 | 0.445 | 0.981 | -7.12 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cộng thêm ngưỡng điểm khung 1D → 5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cộng thêm ngưỡng điểm khung 1W → -1 | 84.66 | 46.4% | 0.605 | 9.78 | 8.66 | 0.498 | 0.74 | -9.34 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Trend (/100) → 19 | 116.32 | 51.4% | 0.797 | 7.45 | 15.61 | 0.631 | 0.982 | -13.13 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần SL (/100) → 7 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: HVN anchored → 0.313 | 90.56 | 43.8% | 0.62 | 9.91 | 9.14 | 0.513 | 0.74 | -7.53 |  |

### Vòng 1182 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.09

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: EMA 50 → 0.75 | 118.51 | 52.8% | 0.823 | 7.19 | 16.48 | 0.663 | 0.987 | -10.87 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Lệnh chờ hết hạn sau (nến) → 6 | 99.01 | 50% | 0.762 | 7.44 | 13.31 | 0.621 | 0.92 | -11.79 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức RSI 30/70 → 1.13 + Khung lớn phải tăng (trend ≥) → 0.375 + Coin phải mạnh hơn BTC trong N ngày → 14 | 124.01 | 38.8% | 0.566 | 16.01 | 7.75 | 0.51 | 0.617 | -13.75 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 107.52 | 48.9% | 0.774 | 7.93 | 13.56 | 0.768 | 0.78 | -12.38 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Đệm SL riêng khung 1W (ATR) → 0.3 | 97.86 | 43.6% | 0.699 | 9.95 | 9.84 | 0.44 | 0.981 | -14.31 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm tối thiểu của vùng đặt SL → 4 | 119.4 | 52.1% | 0.829 | 7.22 | 16.54 | 0.677 | 0.994 | -10.87 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu riêng khung 4H → 2 | 79.53 | 36.8% | 0.21 | 17.26 | 4.61 | 0.242 | 0.185 | -20.79 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 104.58 | 46.6% | 0.642 | 8.83 | 11.84 | 0.508 | 0.77 | -13.47 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Đệm SL riêng khung 4H (ATR) → 0.3 | 162.22 | 38.9% | 0.554 | 18.07 | 8.98 | 0.409 | 0.705 | -8.21 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 | 112.24 | 46.1% | 0.68 | 10.08 | 11.13 | 0.63 | 0.724 | -10.49 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 35.89 | 57% | 0.227 | 5.64 | 6.36 | 0.278 | 0.18 | -8.18 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Mức MACD → 1.13 | 112.81 | 49.4% | 0.733 | 7.96 | 14.17 | 0.634 | 0.842 | -11.14 |  |

### Vòng 1181 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.83

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 | 31.29 | 57.3% | 0.199 | 5.55 | 5.64 | 0.215 | 0.185 | -8.19 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: EMA 21 → 1.13 | 70.12 | 44.6% | 0.626 | 9.24 | 7.59 | 0.423 | 0.853 | -4.77 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: EMA 200 → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Mức MACD → 0.875 | 112.48 | 46.6% | 0.595 | 9.46 | 11.89 | 0.599 | 0.592 | -5.8 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 102.34 | 45.1% | 0.585 | 10.98 | 9.32 | 0.59 | 0.58 | -9.48 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: POC volume profile cố định → 0.813 | 117.68 | 53.1% | 0.823 | 7.17 | 16.41 | 0.672 | 0.995 | -10.11 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 115.97 | 48.7% | 0.753 | 8.12 | 14.28 | 0.563 | 0.963 | -12.55 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 109.77 | 50% | 0.762 | 7.88 | 13.93 | 0.59 | 0.967 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Trọng số phần SL (/100) → 7 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Mức MACD → 1.13 | 100.43 | 48% | 0.67 | 8.62 | 11.65 | 0.497 | 0.852 | -11.46 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Mức RSI 30/70 → 0.875 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 111.08 | 49.4% | 0.677 | 8.78 | 12.65 | 0.634 | 0.721 | -9.46 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Đệm SL riêng khung 1D (ATR) → 0.3 | 110.65 | 45.2% | 0.667 | 10.53 | 10.51 | 0.613 | 0.714 | -9.47 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 17.4 | 46.5% | 0.067 | 12.51 | 1.39 | 0.099 | 0.04 | -10.45 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 67.66 | 44.9% | 0.497 | 10.47 | 6.46 | 0.338 | 0.688 | -12.01 |  |

### Vòng 1180 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần Divergence (/100) → 9 | 100.77 | 51.1% | 0.769 | 7.45 | 13.53 | 0.616 | 0.945 | -11.79 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Lệnh chờ hết hạn sau (nến) → 6 + R:R tối thiểu riêng khung 1W → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 61.1 | 46.1% | 0.599 | 8.92 | 6.85 | 0.409 | 0.789 | -7.91 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Đệm SL riêng khung 1W (ATR) → 0.3 | 133.59 | 44.2% | 0.573 | 11.34 | 11.78 | 0.601 | 0.547 | -16.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Elliott (/100) → 6 | 109.42 | 45.5% | 0.701 | 9.87 | 11.09 | 0.566 | 0.841 | -14.05 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Momentum (/100) → 21 + % chốt ở TP1 → 0.287 | 124.01 | 41.4% | 0.401 | 12.24 | 10.13 | 0.362 | 0.434 | -5.34 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Mức RSI 30/70 → 1.13 | 97.7 | 46.2% | 0.683 | 9.05 | 10.8 | 0.535 | 0.847 | -8.13 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Lệnh chờ hết hạn sau (nến) → 8 + % chốt ở TP1 → 0.307 | 119.83 | 48.2% | 0.705 | 8.77 | 13.66 | 0.569 | 0.861 | -14.15 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + % chốt ở TP1 → 0.307 | 129.96 | 50.6% | 0.844 | 7.83 | 16.6 | 0.815 | 0.878 | -12.74 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + SL tối đa (% Entry) → 0.425 | 114.76 | 51% | 0.781 | 7.95 | 14.44 | 0.61 | 0.974 | -13.12 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: HVN anchored → 0.313 | 97.01 | 48.8% | 0.802 | 8.04 | 12.07 | 0.496 | 1.113 | -12.86 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Khung lớn phải tăng (trend ≥) → 0.425 + Cổng Dow → TẮT + Coin phải mạnh hơn BTC trong N ngày → 14 | 89.06 | 43.4% | 0.537 | 11.72 | 7.6 | 0.517 | 0.558 | -25.5 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: HVN cố định → 0.563 | 109.43 | 47.9% | 0.671 | 8.45 | 12.95 | 0.508 | 0.828 | -13.47 |  |
