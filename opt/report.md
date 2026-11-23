# Tối ưu tự động (chạy liên tục) — vòng 1285

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 15044 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 46.4% | 99.04R | 0.597 | 6.7R | 10.12R | 9.79 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 143 | 51.7% | 117.44R | 0.821 | 5.15R | 7.61R | 15.43 | 29 | 13.8% | -13.18R | -0.454 | 13.18R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 25 | 48% | 19.78R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 107 | 53.3% | 90.69R | 20 | 20% | -5.21R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 46.4% | 99.04R | 10.12R | 9.79 | 31 | 12.9% | -13R |
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

### Vòng 1285 — ngẫu nhiên nhiều thông số · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.61R, lời÷rủi ro 15.43

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Trend (/100) → 19 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 105.74 | 45.5% | 0.601 | 9.52 | 11.11 | 0.562 | 0.638 | -10.06 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 113.51 | 50.7% | 0.788 | 7.97 | 14.24 | 0.599 | 1.006 | -13.18 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: Break mây Ichimoku → 3 | 109.26 | 41.9% | 0.508 | 13.23 | 8.26 | 0.471 | 0.545 | -18.33 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 4H (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 21.01 | 49.8% | 0.079 | 15.12 | 1.39 | 0.057 | 0.094 | -11.65 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 71.36 | 48.2% | 0.513 | 9.01 | 7.92 | 0.475 | 0.547 | -16.87 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 100.36 | 46.1% | 0.66 | 9.21 | 10.9 | 0.602 | 0.719 | -10.84 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Số TP tối đa → 1 | 115.22 | 50.3% | 0.806 | 7.85 | 14.68 | 0.659 | 0.968 | -12.16 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: EMA 50 → 0.75 | 108.91 | 49.7% | 0.762 | 8.09 | 13.46 | 0.601 | 0.934 | -13.05 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 4H (ATR) → 0.3 + % chốt ở TP1 → 0.307 | 87.62 | 33.9% | 0.376 | 21.5 | 4.08 | 0.266 | 0.494 | -16.4 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + % chốt ở TP1 → 0.287 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 115.08 | 47.1% | 0.733 | 8.73 | 13.18 | 0.718 | 0.751 | -13.75 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Mức MACD → 0.875 | 112.92 | 51.7% | 0.79 | 7.63 | 14.8 | 0.633 | 0.962 | -11.9 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Break mây Ichimoku → 1 + % chốt ở TP1 → 0.307 | 105.02 | 48.6% | 0.71 | 8.4 | 12.5 | 0.569 | 0.862 | -14.02 |  |

### Vòng 1284 — ghép cặp thay đổi suýt đạt · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.61R, lời÷rủi ro 15.43

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: HVN anchored → 0.125 + Điểm vùng: MACD cắt lên Signal → 0.563 | 117.44 | 51.7% | 0.821 | 7.61 | 15.43 | 0.654 | 1.011 | -13.76 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 136.87 | 49.7% | 0.782 | 8.21 | 16.67 | 0.61 | 0.973 | -13.4 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 117.44 | 51.7% | 0.821 | 7.61 | 15.43 | 0.654 | 1.011 | -13.76 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Điểm vùng: BOS → 3 | 117.44 | 51.7% | 0.821 | 7.61 | 15.43 | 0.654 | 1.011 | -13.76 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Trọng số phần Trend (/100) → 12 | 115.22 | 50.3% | 0.806 | 7.9 | 14.58 | 0.659 | 0.968 | -12.74 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 | 114.28 | 50.7% | 0.794 | 8.1 | 14.11 | 0.604 | 1.011 | -13.18 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 138.52 | 50% | 0.787 | 8.1 | 17.1 | 0.621 | 0.973 | -13.4 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 114.28 | 50.7% | 0.794 | 8.1 | 14.11 | 0.604 | 1.011 | -13.18 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: BOS → 3 | 114.28 | 50.7% | 0.794 | 8.1 | 14.11 | 0.604 | 1.011 | -13.18 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trọng số phần Trend (/100) → 12 | 112.06 | 49.3% | 0.778 | 8.3 | 13.5 | 0.609 | 0.968 | -12.16 |  |
| Ghép: Điểm vùng: MACD cắt lên Signal → 0.563 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 138.52 | 50% | 0.787 | 8.1 | 17.1 | 0.621 | 0.973 | -13.4 |  |
| Ghép: Điểm vùng: MACD cắt lên Signal → 0.563 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 117.44 | 51.7% | 0.821 | 7.61 | 15.43 | 0.654 | 1.011 | -13.18 |  |

### Vòng 1283 — ghép cặp thay đổi suýt đạt · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.58R, lời÷rủi ro 15.49

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 138.53 | 50% | 0.787 | 8.09 | 17.12 | 0.621 | 0.973 | -13.39 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 117.44 | 51.7% | 0.821 | 7.58 | 15.49 | 0.654 | 1.011 | -13.18 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: BOS → 3 | 117.44 | 51.7% | 0.821 | 7.58 | 15.49 | 0.654 | 1.011 | -13.18 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Trend (/100) → 12 | 115.22 | 50.3% | 0.806 | 7.79 | 14.79 | 0.659 | 0.968 | -12.16 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: HVN anchored → 0.125 | 117.44 | 51.7% | 0.821 | 7.58 | 15.49 | 0.654 | 1.011 | -12.74 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 114.28 | 50.7% | 0.794 | 8.09 | 14.13 | 0.604 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: MACD cắt lên Signal → 0.563 | 117.44 | 51.7% | 0.821 | 7.58 | 15.49 | 0.654 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 138.52 | 50% | 0.787 | 8.09 | 17.12 | 0.621 | 0.973 | -12.37 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 117.44 | 51.7% | 0.821 | 7.58 | 15.49 | 0.654 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: BOS → 3 | 117.44 | 51.7% | 0.821 | 7.58 | 15.49 | 0.654 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần Trend (/100) → 12 | 115.22 | 50.3% | 0.806 | 7.79 | 14.79 | 0.659 | 0.968 | -11.14 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 114.28 | 50.7% | 0.794 | 8.09 | 14.13 | 0.604 | 1.011 | -13.76 |  |

### Vòng 1282 — ghép cặp thay đổi suýt đạt · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.72R, lời÷rủi ro 15.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: POC volume profile cố định → 0.688 | 117.44 | 51.7% | 0.821 | 7.72 | 15.21 | 0.654 | 1.011 | -13.18 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: POC volume profile cố định → 0.813 | 117.44 | 51.7% | 0.821 | 7.72 | 15.21 | 0.654 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: HVN anchored → 0.125 | 117.44 | 51.7% | 0.821 | 7.72 | 15.21 | 0.654 | 1.011 | -13.76 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 114.28 | 50.7% | 0.794 | 8.08 | 14.14 | 0.604 | 1.011 | -13.18 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 | 117.44 | 51.7% | 0.821 | 7.72 | 15.21 | 0.654 | 1.011 | -13.18 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 138.52 | 50% | 0.787 | 8.06 | 17.19 | 0.621 | 0.973 | -13.39 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 117.44 | 51.7% | 0.821 | 7.72 | 15.21 | 0.654 | 1.011 | -13.18 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: BOS → 3 | 117.44 | 51.7% | 0.821 | 7.72 | 15.21 | 0.654 | 1.011 | -13.18 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Trend (/100) → 12 | 115.22 | 50.3% | 0.806 | 7.88 | 14.62 | 0.659 | 0.968 | -12.16 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: HVN anchored → 0.125 | 117.44 | 51.7% | 0.821 | 7.72 | 15.21 | 0.654 | 1.011 | -13.76 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 114.28 | 50.7% | 0.794 | 8.08 | 14.14 | 0.604 | 1.011 | -13.18 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: MACD cắt lên Signal → 0.563 | 117.44 | 51.7% | 0.821 | 7.72 | 15.21 | 0.654 | 1.011 | -13.18 |  |

### Vòng 1281 — từng thông số · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.58R, lời÷rủi ro 15.49

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| R:R tối thiểu riêng khung 1D: null → 2 | 107.07 | 45.7% | 0.619 | 9.39 | 11.4 | 0.579 | 0.657 | -9.96 |  |

### Vòng 1280 — từng thông số · mốc: tổng 120.65R, win 52.1%, rủi ro tụt vốn 7.57R, lời÷rủi ro 15.94

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngưỡng điểm vào kèo: 75 → 74 | 117.79 | 50.7% | 0.807 | 7.85 | 15.01 | 0.615 | 1.021 | -13.18 |  |
| Ngưỡng điểm vào kèo: 75 → 77 | 112.09 | 50.7% | 0.778 | 7.85 | 14.28 | 0.62 | 0.951 | -10.65 |  |
| R:R tối thiểu tới TP1: 2.5 → 2.38 | 104.89 | 46.4% | 0.632 | 9.08 | 11.55 | 0.52 | 0.741 | -14.75 |  |
| R:R tối thiểu tới TP1: 2.5 → 2.63 | 96.24 | 48.8% | 0.77 | 8.81 | 10.92 | 0.519 | 1.042 | -14.15 |  |
| Ngưỡng điểm 'vào ngay' (tín hiệu mạnh): 6 → 5 | 98.52 | 45.6% | 0.67 | 9.65 | 10.21 | 0.515 | 0.845 | -9.15 |  |
| Ngưỡng điểm 'vào ngay' (tín hiệu mạnh): 6 → 7 | 109.78 | 52.1% | 0.752 | 7.79 | 14.09 | 0.67 | 0.84 | -12.36 |  |
| SL tối đa (% Entry): 0.5 → 0.425 | 119.65 | 51.7% | 0.825 | 7.72 | 15.5 | 0.654 | 1.014 | -13.18 |  |
| Đệm SL dưới vùng hỗ trợ (ATR): 1 → 0.95 | 117.64 | 49.7% | 0.79 | 8.32 | 14.14 | 0.523 | 1.083 | -13.08 |  |
| Đệm SL dưới vùng hỗ trợ (ATR): 1 → 1.05 | 98.9 | 47.8% | 0.717 | 8.35 | 11.84 | 0.46 | 0.997 | -14.99 |  |
| R:R tối thiểu riêng khung 4H: null → 2 | 124.04 | 41.2% | 0.396 | 12.57 | 9.87 | 0.372 | 0.417 | -9.71 |  |
| Đệm SL riêng khung 4H (ATR): null → 0.3 | 166.8 | 38.7% | 0.562 | 17.64 | 9.46 | 0.431 | 0.698 | -11.68 |  |
| Cộng thêm ngưỡng điểm khung 4H: 0 → -1 | 120.65 | 52.1% | 0.838 | 7.57 | 15.94 | 0.654 | 1.044 | -13.18 |  |
| Cộng thêm ngưỡng điểm khung 4H: 0 → 2 | 117.04 | 52.1% | 0.813 | 7.4 | 15.82 | 0.67 | 0.972 | -13.18 |  |

### Vòng 1279 — từng thông số · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.64R, lời÷rủi ro 15.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: Biên mây Ichimoku: 1.2 → 1.05 | 107.19 | 51% | 0.739 | 7.86 | 13.64 | 0.603 | 0.889 | -14.01 |  |
| Điểm vùng: Biên mây Ichimoku: 1.2 → 1.35 | 113.6 | 50% | 0.778 | 7.83 | 14.51 | 0.609 | 0.967 | -12.16 |  |
| Điểm vùng: Mức sai Elliott (cho SL): 2 → 1 | 110 | 50% | 0.743 | 8.31 | 13.24 | 0.561 | 0.952 | -14.15 |  |
| Điểm vùng: Mức sai Elliott (cho SL): 2 → 3 | 113.52 | 50.7% | 0.788 | 7.73 | 14.69 | 0.608 | 0.995 | -13 |  |
| Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự): 0.75 → 0.5 | 117.44 | 51.7% | 0.821 | 7.64 | 15.37 | 0.654 | 1.011 | -13.18 |  |
| Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự): 0.75 → 0.875 | 117.44 | 51.7% | 0.821 | 7.64 | 15.37 | 0.654 | 1.011 | -13.18 |  |
| Điểm vùng: MACD cắt lên Signal: 0.5 → 0.438 | 105.26 | 48.4% | 0.688 | 9.42 | 11.17 | 0.467 | 0.943 | -10.6 |  |
| Điểm vùng: MACD cắt lên Signal: 0.5 → 0.563 | 117.44 | 51.7% | 0.821 | 7.64 | 15.37 | 0.654 | 1.011 | -13.18 |  |
| Điểm vùng: Fib 0.5 / 0.382 sóng 2: 3 → 2 | 113.25 | 50.3% | 0.781 | 7.99 | 14.17 | 0.604 | 0.982 | -13.16 |  |
| Điểm vùng: Fib 0.5 / 0.382 sóng 2: 3 → 4 | 114.27 | 50.7% | 0.794 | 7.96 | 14.36 | 0.604 | 1.011 | -13.18 |  |
| Điểm vùng: Fib sóng 4: 1.25 → 0.938 | 113.54 | 50.7% | 0.8 | 7.97 | 14.25 | 0.61 | 1.011 | -13.18 |  |
| Điểm vùng: Fib sóng 4: 1.25 → 1.56 | 115.39 | 51% | 0.796 | 7.86 | 14.68 | 0.611 | 1.011 | -13.18 |  |

### Vòng 1278 — từng thông số · mốc: tổng 120.65R, win 52.1%, rủi ro tụt vốn 7.51R, lời÷rủi ro 16.07

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: Mức RSI 30/70: 1 → 0.875 | 117.78 | 50% | 0.765 | 8.38 | 14.05 | 0.539 | 1.029 | -13.18 |  |
| Điểm vùng: Mức RSI 30/70: 1 → 1.13 | 120.65 | 52.1% | 0.838 | 7.51 | 16.07 | 0.654 | 1.044 | -13.18 |  |
| Điểm vùng: Mức MACD: 1 → 0.875 | 114.52 | 51.7% | 0.801 | 7.58 | 15.11 | 0.632 | 0.988 | -13.18 |  |
| Điểm vùng: Mức MACD: 1 → 1.13 | 113.75 | 50% | 0.79 | 7.89 | 14.42 | 0.571 | 1.035 | -13.18 |  |
| Điểm vùng: POC volume profile cố định: 0.75 → 0.688 | 120.65 | 52.1% | 0.838 | 7.51 | 16.07 | 0.654 | 1.044 | -13.18 |  |
| Điểm vùng: POC volume profile cố định: 0.75 → 0.813 | 120.65 | 52.1% | 0.838 | 7.51 | 16.07 | 0.654 | 1.044 | -12.16 |  |
| Điểm vùng: HVN anchored: 0.25 → 0.188 | 120.65 | 52.1% | 0.838 | 7.51 | 16.07 | 0.654 | 1.044 | -13.18 |  |
| Điểm vùng: HVN anchored: 0.25 → 0.313 | 117.89 | 51% | 0.813 | 7.84 | 15.04 | 0.609 | 1.044 | -13.18 |  |
| Điểm vùng: HVN cố định: 0.5 → 0.438 | 118.19 | 51% | 0.815 | 7.84 | 15.08 | 0.613 | 1.044 | -13.18 |  |
| Điểm vùng: HVN cố định: 0.5 → 0.563 | 120.65 | 52.1% | 0.838 | 7.51 | 16.07 | 0.654 | 1.044 | -13.18 |  |
| Điểm vùng: Vùng RSI 45–55: 1 → 0.875 | 104.32 | 46.7% | 0.686 | 8.92 | 11.7 | 0.602 | 0.771 | -12.16 |  |
| Điểm vùng: Vùng RSI 45–55: 1 → 1.13 | 109.83 | 49.7% | 0.757 | 8.1 | 13.56 | 0.588 | 0.954 | -13.18 |  |

### Vòng 1277 — từng thông số · mốc: tổng 120.65R, win 52.1%, rủi ro tụt vốn 7.57R, lời÷rủi ro 15.94

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: EMA 50: 0.94 → 0.75 | 116.18 | 51.4% | 0.807 | 7.6 | 15.29 | 0.596 | 1.036 | -13.18 |  |
| Điểm vùng: EMA 50: 0.94 → 1.13 | 112.66 | 49.7% | 0.788 | 8.13 | 13.86 | 0.604 | 1.002 | -12.16 |  |
| Điểm vùng: EMA 21: 1 → 0.875 | 117.7 | 50.3% | 0.812 | 7.91 | 14.88 | 0.658 | 0.981 | -13.18 |  |
| Điểm vùng: EMA 21: 1 → 1.13 | 114.34 | 51% | 0.789 | 7.51 | 15.23 | 0.635 | 0.958 | -12.16 |  |
| Điểm vùng: Break mây Ichimoku: 2 → 1 | 109.19 | 49.3% | 0.738 | 8.23 | 13.27 | 0.568 | 0.922 | -14.01 |  |
| Điểm vùng: Break mây Ichimoku: 2 → 3 | 107.36 | 48.1% | 0.671 | 9.16 | 11.72 | 0.552 | 0.803 | -12.92 |  |
| Điểm vùng: Kháng cự cũ bị phá: 1.5 → 1.31 | 119.95 | 51.7% | 0.827 | 7.68 | 15.62 | 0.636 | 1.044 | -13.18 |  |
| Điểm vùng: Kháng cự cũ bị phá: 1.5 → 1.69 | 114.49 | 51.4% | 0.818 | 7.41 | 15.45 | 0.635 | 1.023 | -13.18 |  |
| Điểm vùng: Fib 0.618 sóng 2: 2.5 → 2.19 | 120.65 | 52.1% | 0.838 | 7.57 | 15.94 | 0.654 | 1.044 | -13.18 |  |
| Điểm vùng: Fib 0.618 sóng 2: 2.5 → 2.81 | 120.65 | 52.1% | 0.838 | 7.57 | 15.94 | 0.654 | 1.044 | -13.18 |  |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4): 3.44 → 3.13 | 117.3 | 51.4% | 0.803 | 7.83 | 14.98 | 0.61 | 1.025 | -13.18 |  |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4): 3.44 → 3.75 | 116.23 | 52% | 0.785 | 7.49 | 15.52 | 0.611 | 0.98 | -13.18 |  |

### Vòng 1276 — từng thông số · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.64R, lời÷rủi ro 15.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Trọng số phần SL (/100): 8 → 7 | 117.44 | 51.7% | 0.821 | 7.64 | 15.37 | 0.654 | 1.011 | -13.18 |  |
| Trọng số phần SL (/100): 8 → 9 | 115.97 | 51% | 0.811 | 7.73 | 15 | 0.654 | 0.99 | -13.18 |  |
| Điểm vùng: Đỉnh/đáy pivot Dow: 2.5 → 2.19 | 97.53 | 47% | 0.646 | 9.55 | 10.21 | 0.455 | 0.867 | -11.61 |  |
| Điểm vùng: Đỉnh/đáy pivot Dow: 2.5 → 2.81 | 115.93 | 50.7% | 0.794 | 7.69 | 15.08 | 0.654 | 0.946 | -13.18 |  |
| Điểm vùng: Đỉnh/đáy swing lớn: 2 → 1 | 125.99 | 44.1% | 0.555 | 10.33 | 12.2 | 0.57 | 0.541 | -16.83 |  |
| Điểm vùng: Đỉnh/đáy swing lớn: 2 → 3 | 37.26 | 40.9% | 0.423 | 9.97 | 3.74 | 0.332 | 0.538 | -5.18 |  |
| Điểm vùng: BOS: 1 → 0 | 117.44 | 51.7% | 0.821 | 7.64 | 15.37 | 0.654 | 1.011 | -13.18 |  |
| Điểm vùng: BOS: 1 → 2 | 117.44 | 51.7% | 0.821 | 7.64 | 15.37 | 0.654 | 1.011 | -13.18 |  |
| Điểm vùng: POC anchored: 3 → 2 | 98.98 | 48% | 0.66 | 8.89 | 11.13 | 0.504 | 0.824 | -13.18 |  |
| Điểm vùng: POC anchored: 3 → 4 | 116.67 | 51% | 0.783 | 7.96 | 14.66 | 0.61 | 0.963 | -8 |  |
| Điểm vùng: EMA 200: 2 → 1 | 115.07 | 50.7% | 0.757 | 8.47 | 13.59 | 0.611 | 0.943 | -8.19 |  |
| Điểm vùng: EMA 200: 2 → 3 | 105.69 | 49% | 0.739 | 8.13 | 13 | 0.539 | 0.954 | -14.17 |  |
