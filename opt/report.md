# Tối ưu tự động (chạy liên tục) — vòng 1264

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 14800 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 167 | 46.7% | 102.25R | 0.612 | 6.7R | 9.95R | 10.28 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 145 | 51% | 117.49R | 0.81 | 5.15R | 7.85R | 14.97 | 29 | 13.8% | -13.18R | -0.454 | 13.18R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 24 | 45.8% | 18.63R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 110 | 52.7% | 91.89R | 20 | 20% | -5.21R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 167 | 46.7% | 102.25R | 9.95R | 10.28 | 31 | 12.9% | -13R |
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

### Vòng 1264 — ngẫu nhiên nhiều thông số · mốc: tổng 117.49R, win 51%, rủi ro tụt vốn 7.85R, lời÷rủi ro 14.97

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 90.23 | 48.9% | 0.659 | 8.68 | 10.4 | 0.595 | 0.729 | -12.41 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 112.72 | 48.6% | 0.794 | 8.44 | 13.36 | 0.574 | 1.054 | -11.42 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 84.61 | 45.2% | 0.672 | 9.92 | 8.53 | 0.557 | 0.797 | -11.91 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 108.8 | 47.9% | 0.667 | 10.05 | 10.83 | 0.505 | 0.878 | -5.61 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm tối thiểu của vùng đặt SL → 2 | 95.1 | 47.1% | 0.679 | 9.2 | 10.34 | 0.444 | 0.929 | -12.69 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 50 → 0.75 + Đệm SL riêng khung 4H (ATR) → 0.3 | 161.83 | 37.9% | 0.511 | 19.71 | 8.21 | 0.456 | 0.563 | -11.64 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 102.71 | 45.5% | 0.708 | 9.97 | 10.3 | 0.466 | 0.941 | -15.03 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + % chốt ở TP1 → 0.287 + Điểm vùng: HVN cố định → 0.438 | 113.6 | 50.3% | 0.783 | 8.25 | 13.77 | 0.572 | 1.016 | -13.16 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: EMA 200 → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 65.47 | 40.1% | 0.431 | 12.13 | 5.4 | 0.506 | 0.362 | -10.11 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 25.05 | 55.6% | 0.164 | 6.4 | 3.91 | 0.173 | 0.155 | -8.24 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần R:R (/100) → 28 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Elliott (/100) → 6 | 99.7 | 47.5% | 0.707 | 8.5 | 11.73 | 0.531 | 0.871 | -14.22 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: MACD cắt lên Signal → 0.438 | 102.84 | 46.2% | 0.651 | 9.88 | 10.41 | 0.4 | 0.935 | -10.6 |  |

### Vòng 1263 — ngẫu nhiên nhiều thông số · mốc: tổng 117.49R, win 51%, rủi ro tụt vốn 8.01R, lời÷rủi ro 14.67

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Break mây Ichimoku → 1 + % chốt ở TP1 → 0.307 + Trọng số phần Trend (/100) → 19 | 108.59 | 48.7% | 0.724 | 8.32 | 13.05 | 0.559 | 0.902 | -14.02 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: EMA 200 → 1 + Đệm SL riêng khung 1D (ATR) → 0.3 | 116.22 | 47.1% | 0.676 | 10.17 | 11.43 | 0.664 | 0.687 | -7.21 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Entry (/100) → 28 | 97.57 | 48.4% | 0.762 | 8.67 | 11.25 | 0.495 | 1.046 | -12.86 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + R:R tối thiểu riêng khung 1W → 2 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 88.17 | 43.3% | 0.694 | 9.51 | 9.27 | 0.477 | 0.936 | -13.42 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cộng thêm ngưỡng điểm khung 4H → -1 + Cộng thêm ngưỡng điểm khung 1D → 3 | 115.49 | 48.7% | 0.76 | 8.74 | 13.21 | 0.489 | 1.061 | -13.08 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số TP tối đa → 1 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 30.15 | 57.2% | 0.19 | 5.72 | 5.27 | 0.21 | 0.171 | -8.42 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần R:R (/100) → 33 | 100.27 | 47.9% | 0.716 | 8.68 | 11.55 | 0.444 | 1.005 | -13.71 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Số TP tối đa → 1 + Điểm vùng: BOS → 0 | 115.94 | 50% | 0.783 | 7.89 | 14.69 | 0.575 | 1.022 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + R:R tối thiểu riêng khung 1D → 2 + SL tối đa (% Entry) → 0.425 | 105.64 | 45.7% | 0.611 | 9.55 | 11.06 | 0.55 | 0.666 | -9.96 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 106.51 | 45% | 0.63 | 10.98 | 9.7 | 0.543 | 0.712 | -11.52 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Trọng số phần Elliott (/100) → 6 + R:R tối thiểu riêng khung 1D → 2 | 110.29 | 46% | 0.634 | 8.95 | 12.32 | 0.579 | 0.685 | -9.96 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Trend (/100) → 12 + Điểm vùng: POC anchored → 2 | 74.57 | 45.5% | 0.606 | 9.44 | 7.9 | 0.481 | 0.734 | -18.95 |  |

### Vòng 1262 — ngẫu nhiên nhiều thông số · mốc: tổng 126.09R, win 51.7%, rủi ro tụt vốn 7.63R, lời÷rủi ro 16.53

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 123.14 | 43.6% | 0.475 | 11.18 | 11.01 | 0.641 | 0.289 | -13.84 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Xác nhận khung nhỏ (A2) → W | 105.51 | 40% | 0.414 | 15.26 | 6.91 | 0.383 | 0.445 | -5.85 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Ngưỡng điểm vào kèo → 77 | 122.61 | 51% | 0.846 | 7.64 | 16.05 | 0.733 | 0.973 | -12.57 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Mức RSI 30/70 → 0.875 | 122.74 | 49.4% | 0.777 | 8.95 | 13.71 | 0.59 | 1 | -11.86 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Fib sóng 4 → 0.938 | 69.55 | 44.9% | 0.548 | 10.28 | 6.77 | 0.337 | 0.824 | -12.18 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: POC anchored → 2 + Trọng số phần Elliott (/100) → 10 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 71.47 | 44.3% | 0.406 | 11.2 | 6.38 | 0.489 | 0.317 | -10.83 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Điểm vùng: EMA 21 → 1.13 + Đệm SL riêng khung 4H (ATR) → 0.3 | 182.21 | 39.3% | 0.597 | 17.35 | 10.5 | 0.538 | 0.666 | -6.2 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 125.5 | 50% | 0.804 | 8.41 | 14.92 | 0.742 | 0.878 | -10.5 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: POC anchored → 4 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 91.68 | 50% | 0.751 | 7.69 | 11.92 | 0.635 | 0.88 | -17.5 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: EMA 21 → 1.13 | 90.15 | 43.6% | 0.605 | 10.05 | 8.97 | 0.45 | 0.785 | -8.13 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Số TP tối đa → 3 + Điểm vùng: EMA 50 → 0.75 | 120.14 | 51.4% | 0.823 | 7.81 | 15.38 | 0.697 | 0.967 | -14.01 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + R:R tối thiểu riêng khung 4H → 2 | 135.52 | 41.6% | 0.428 | 12.19 | 11.12 | 0.432 | 0.424 | -6.42 |  |

### Vòng 1261 — ngẫu nhiên nhiều thông số · mốc: tổng 121.75R, win 52.4%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.77

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 32.52 | 58.2% | 0.206 | 5.33 | 6.1 | 0.215 | 0.197 | -8.42 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Break mây Ichimoku → 1 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 101.85 | 38.4% | 0.343 | 17.27 | 5.9 | 0.294 | 0.387 | -10.6 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 111.23 | 50% | 0.772 | 8.03 | 13.85 | 0.593 | 0.984 | -13.18 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 | 107.67 | 49.7% | 0.753 | 7.88 | 13.66 | 0.604 | 0.9 | -14.22 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + % chốt ở TP1 → 0.307 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 115.36 | 47.8% | 0.726 | 8.76 | 13.17 | 0.585 | 0.879 | -13.58 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 99.26 | 47.4% | 0.645 | 9.5 | 10.45 | 0.441 | 0.883 | -9.3 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Lệnh chờ hết hạn sau (nến) → 6 + Xác nhận khung nhỏ (A2) → W | 107.62 | 40.1% | 0.464 | 14.16 | 7.6 | 0.472 | 0.457 | -7.57 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.35 | 109.4 | 49% | 0.744 | 8.21 | 13.33 | 0.59 | 0.919 | -13.76 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + % chốt ở TP1 → 0.307 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 119.47 | 40.8% | 0.384 | 12.35 | 9.67 | 0.349 | 0.414 | -7.73 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 | 128.45 | 42.8% | 0.385 | 12.36 | 10.39 | 0.363 | 0.403 | -7.16 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 | 117.04 | 50.3% | 0.796 | 7.99 | 14.65 | 0.596 | 1.022 | -13.18 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: EMA 200 → 1 + R:R tối thiểu tới TP1 → 2.63 + Cộng thêm ngưỡng điểm khung 1D → 3 | 103.06 | 47.5% | 0.741 | 8.99 | 11.46 | 0.471 | 1.068 | -6.55 |  |

### Vòng 1260 — ngẫu nhiên nhiều thông số · mốc: tổng 121.75R, win 52.4%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.59

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 86.13 | 51.3% | 0.762 | 7 | 12.3 | 0.33 | 1.144 | -15.27 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 116.33 | 49.3% | 0.843 | 8.06 | 14.43 | 0.617 | 1.105 | -11.44 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Mức MACD → 0.875 | 109.42 | 47.1% | 0.697 | 9.08 | 12.05 | 0.503 | 0.898 | -12.28 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: BOS → 0 + Ngưỡng điểm vào kèo → 74 | 115.78 | 49.7% | 0.777 | 7.77 | 14.9 | 0.634 | 0.934 | -14.2 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Momentum (/100) → 21 | 111.5 | 51.7% | 0.769 | 7.65 | 14.58 | 0.604 | 0.95 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: POC anchored → 2 | 103.83 | 47.7% | 0.67 | 9.05 | 11.47 | 0.513 | 0.851 | -13.45 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: MACD cắt lên Signal → 0.438 | 57.29 | 42.2% | 0.345 | 12.16 | 4.71 | 0.273 | 0.419 | -6.52 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Mức MACD → 1.13 | 115.95 | 50.3% | 0.768 | 8.1 | 14.31 | 0.616 | 0.963 | -11.98 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Biên mây Ichimoku → 1.35 | 115.69 | 49.3% | 0.792 | 7.79 | 14.85 | 0.615 | 0.985 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + R:R tối thiểu riêng khung 1D → 2 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 99.59 | 43.4% | 0.547 | 10.24 | 9.73 | 0.527 | 0.567 | -11.6 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 118.41 | 52.8% | 0.834 | 7.15 | 16.56 | 0.672 | 1.021 | -13.18 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần Elliott (/100) → 10 | 78.16 | 43% | 0.454 | 11.23 | 6.96 | 0.44 | 0.469 | -6.51 |  |

### Vòng 1259 — ngẫu nhiên nhiều thông số · mốc: tổng 112.21R, win 53%, rủi ro tụt vốn 7.97R, lời÷rủi ro 14.08

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Số TP tối đa → 1 | 78.55 | 44.7% | 0.488 | 11.79 | 6.66 | 0.459 | 0.515 | -8.63 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Break mây Ichimoku → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 97.13 | 47.1% | 0.571 | 9.42 | 10.31 | 0.549 | 0.594 | -14.04 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 16.64 | 53.8% | 0.105 | 7.9 | 2.11 | 0.133 | 0.081 | -11.79 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Cộng thêm ngưỡng điểm khung 1W → 2 + R:R tối thiểu riêng khung 4H → 2 | 116.9 | 40.6% | 0.373 | 13.11 | 8.92 | 0.308 | 0.43 | -12.54 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Số TP tối đa → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 135.9 | 40.5% | 0.452 | 16.52 | 8.23 | 0.55 | 0.368 | -18.75 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: MACD cắt lên Signal → 0.438 + SL tối đa (% Entry) → 0.425 | 121.26 | 47.4% | 0.701 | 9.89 | 12.26 | 0.679 | 0.726 | -14.77 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 95.82 | 50% | 0.63 | 8.91 | 10.75 | 0.61 | 0.653 | -16.11 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần SL (/100) → 7 + Điểm tối thiểu của vùng đặt SL → 2 | 175.83 | 39.7% | 0.564 | 17.55 | 10.02 | 0.428 | 0.702 | -10.79 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 75.53 | 43.3% | 0.461 | 12.4 | 6.09 | 0.416 | 0.503 | -8.63 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần Elliott (/100) → 10 | 13.41 | 51.6% | 0.086 | 8.56 | 1.57 | 0.106 | 0.069 | -11.82 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Coin phải mạnh hơn BTC trong N ngày → 14 + Xác nhận khung nhỏ (A2) → W | 83.01 | 41.4% | 0.419 | 15.29 | 5.43 | 0.402 | 0.432 | -22.7 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + R:R tối thiểu riêng khung 1W → 2 | 19.58 | 37.2% | 0.251 | 11.3 | 1.73 | 0.192 | 0.327 | -4.7 |  |

### Vòng 1258 — ngẫu nhiên nhiều thông số · mốc: tổng 121.75R, win 52.4%, rủi ro tụt vốn 7.28R, lời÷rủi ro 16.72

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: POC volume profile cố định → 0.813 | 114.76 | 50.7% | 0.786 | 7.97 | 14.4 | 0.582 | 1.02 | -13.13 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 99.64 | 46.7% | 0.817 | 8.6 | 11.59 | 0.541 | 1.142 | -11.35 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: EMA 50 → 0.75 | 123.36 | 40.9% | 0.476 | 14.04 | 8.79 | 0.469 | 0.483 | -8.5 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 127.78 | 44.7% | 0.524 | 11.03 | 11.58 | 0.611 | 0.442 | -16.91 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + R:R tối thiểu riêng khung 4H → 2 | 117.15 | 41% | 0.375 | 12.98 | 9.03 | 0.334 | 0.412 | -6.42 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: EMA 21 → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trọng số phần Elliott (/100) → 10 | 55.65 | 42.3% | 0.428 | 11.3 | 4.92 | 0.384 | 0.483 | -10.6 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: EMA 200 → 1 | 122.44 | 52% | 0.816 | 7.83 | 15.64 | 0.651 | 1.021 | -8.19 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: EMA 21 → 1.13 | 37.54 | 40.2% | 0.408 | 10.06 | 3.73 | 0.329 | 0.502 | -7.55 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Cộng thêm ngưỡng điểm khung 1D → 5 | 121.75 | 52.4% | 0.851 | 7.28 | 16.72 | 0.655 | 1.074 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + R:R tối thiểu riêng khung 4H → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 82.11 | 40.6% | 0.367 | 13.13 | 6.25 | 0.319 | 0.415 | -0.61 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 1W → 2 | 117.19 | 48.4% | 0.756 | 8.66 | 13.53 | 0.738 | 0.776 | -14.8 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: MACD cắt lên Signal → 0.563 | 127.44 | 49.7% | 0.822 | 7.95 | 16.03 | 0.799 | 0.848 | -13.76 |  |

### Vòng 1257 — ngẫu nhiên nhiều thông số · mốc: tổng 121.75R, win 52.4%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.59

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: EMA 50 → 1.13 | 110.34 | 49% | 0.703 | 8.79 | 12.55 | 0.567 | 0.867 | -3.64 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 1W → 2 | 117.08 | 50.7% | 0.813 | 7.37 | 15.89 | 0.614 | 1.036 | -13.42 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Số TP tối đa → 1 | 121.75 | 52.4% | 0.851 | 7.34 | 16.59 | 0.655 | 1.074 | -13.18 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 31.34 | 58% | 0.2 | 5.49 | 5.71 | 0.215 | 0.185 | -8.42 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Lệnh chờ hết hạn sau (nến) → 8 | 97.55 | 46.3% | 0.655 | 9.2 | 10.6 | 0.397 | 0.937 | -15.29 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Trend (/100) → 19 + Điểm vùng: POC anchored → 4 | 93.99 | 36% | 0.372 | 21.61 | 4.35 | 0.182 | 0.56 | 2.1 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Break mây Ichimoku → 1 | 111.18 | 39.7% | 0.416 | 15.73 | 7.07 | 0.456 | 0.381 | -9.48 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần Trend (/100) → 12 | 119.48 | 51% | 0.836 | 7.53 | 15.87 | 0.657 | 1.032 | -13.16 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần Momentum (/100) → 25 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 100.9 | 47.7% | 0.651 | 9.27 | 10.88 | 0.651 | 0.651 | -10.47 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 + Cổng Dow → TẮT + Khung lớn phải tăng (trend ≥) → 0.425 | 27.42 | 52% | 0.139 | 8.24 | 3.33 | 0.246 | 0.024 | -12.57 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: POC volume profile cố định → 0.813 | 106.28 | 47% | 0.64 | 9.44 | 11.26 | 0.508 | 0.789 | -8.57 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Mức MACD → 1.13 | 126.2 | 44.9% | 0.539 | 11.17 | 11.3 | 0.628 | 0.454 | -16.33 |  |

### Vòng 1256 — ngẫu nhiên nhiều thông số · mốc: tổng 121.75R, win 52.4%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.59

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 83.14 | 47.6% | 0.67 | 8.9 | 9.34 | 0.48 | 0.894 | -16.78 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: Mức MACD → 0.875 + Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 48.92 | 36.1% | 0.223 | 17.52 | 2.79 | 0.254 | 0.196 | -26.55 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Cộng thêm ngưỡng điểm khung 1W → -1 | 116.28 | 49.3% | 0.843 | 8.02 | 14.5 | 0.615 | 1.106 | -11.42 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Biên mây Ichimoku → 1.05 | 75.12 | 50% | 0.659 | 7.83 | 9.59 | 0.253 | 1.012 | -15.27 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Momentum (/100) → 25 | 104.31 | 50.7% | 0.714 | 8.16 | 12.78 | 0.673 | 0.76 | -12.78 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: EMA 200 → 1 | 116.66 | 50.7% | 0.767 | 8.15 | 14.31 | 0.623 | 0.951 | -8.19 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: HVN anchored → 0.313 | 111.6 | 49% | 0.72 | 8.2 | 13.61 | 0.518 | 0.947 | -14.77 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Trọng số phần SL (/100) → 7 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: HVN cố định → 0.563 | 121.58 | 48.7% | 0.779 | 8.1 | 15.01 | 0.764 | 0.797 | -12.74 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: BOS → 0 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: HVN anchored → 0.313 | 96.01 | 45.6% | 0.653 | 9.65 | 9.95 | 0.513 | 0.807 | -8.07 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 106.68 | 51.7% | 0.736 | 7.71 | 13.84 | 0.67 | 0.81 | -12.76 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 21 → 1.13 + Xác nhận khung nhỏ (A2) → W | 80.21 | 38.1% | 0.373 | 16.18 | 4.96 | 0.385 | 0.36 | -2.45 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Mức MACD → 1.13 | 117.61 | 49.7% | 0.769 | 8.34 | 14.1 | 0.559 | 1.011 | -13.18 |  |

### Vòng 1255 — ngẫu nhiên nhiều thông số · mốc: tổng 121.75R, win 52.4%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.59

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + R:R tối thiểu riêng khung 1W → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Trọng số phần Elliott (/100) → 10 | 103.54 | 47.9% | 0.729 | 8.46 | 12.24 | 0.575 | 0.879 | -14.2 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần SL (/100) → 9 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 118.83 | 51% | 0.82 | 7.83 | 15.18 | 0.637 | 1.026 | -11.86 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 111.38 | 46.2% | 0.644 | 8.99 | 12.39 | 0.58 | 0.704 | -9.96 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Entry (/100) → 28 + Điểm vùng: EMA 200 → 3 | 110.57 | 49.7% | 0.773 | 7.7 | 14.36 | 0.54 | 1.023 | -14.17 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Trọng số phần SL (/100) → 7 | 113.82 | 49.4% | 0.739 | 8.11 | 14.03 | 0.629 | 0.861 | -12.17 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: POC volume profile cố định → 0.813 | 121.29 | 52.1% | 0.842 | 7.21 | 16.82 | 0.655 | 1.052 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần SL (/100) → 7 + Điểm vùng: Mức RSI 30/70 → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 5 | 122.31 | 50.9% | 0.769 | 8.17 | 14.97 | 0.644 | 0.913 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 113.25 | 48.8% | 0.691 | 8.71 | 13 | 0.585 | 0.807 | -11 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: BOS → 0 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 23.73 | 62.9% | 0.245 | 5.03 | 4.72 | 0.252 | 0.236 | -5.83 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + R:R tối thiểu riêng khung 1D → 2 | 106.74 | 45.4% | 0.613 | 9.32 | 11.45 | 0.559 | 0.665 | -12.62 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần Trend (/100) → 12 + Điểm vùng: HVN anchored → 0.313 | 106.73 | 47.4% | 0.693 | 9.31 | 11.46 | 0.458 | 0.961 | -10.6 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Mức MACD → 0.875 + Trọng số phần Momentum (/100) → 25 | 107.32 | 49.3% | 0.715 | 8.45 | 12.7 | 0.545 | 0.905 | -12.72 |  |
