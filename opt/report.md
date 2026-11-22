# Tối ưu tự động (chạy liên tục) — vòng 1121

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 13084 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 98.78R | 0.595 | 5.7R | 9.65R | 10.24 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 143 | 53.1% | 121.88R | 0.852 | 5.15R | 7.16R | 17.02 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

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
| Bot thật | 166 | 47% | 98.78R | 9.65R | 10.24 | 30 | 13.3% | -11.98R |
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

### Vòng 1121 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.16R, lời÷rủi ro 17.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Elliott (/100) → 10 | 106.63 | 50% | 0.73 | 7.99 | 13.35 | 0.614 | 0.86 | -13.96 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: EMA 200 → 3 | 111.41 | 50.7% | 0.785 | 7.54 | 14.78 | 0.579 | 1.002 | -11.84 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib sóng 4 → 1.56 | 119.38 | 52.1% | 0.818 | 7.4 | 16.13 | 0.628 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: HVN anchored → 0.188 | 84.46 | 51.3% | 0.747 | 7.18 | 11.76 | 0.321 | 1.125 | -14.25 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 105.64 | 51.7% | 0.729 | 7.84 | 13.47 | 0.673 | 0.791 | -11.75 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: HVN cố định → 0.563 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 103.88 | 51% | 0.707 | 8.06 | 12.89 | 0.673 | 0.743 | -10.44 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 200 → 1 + Trọng số phần R:R (/100) → 33 | 32.66 | 58.7% | 0.196 | 5.55 | 5.88 | 0.231 | 0.16 | -5.94 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 118.1 | 51.7% | 0.814 | 7.59 | 15.56 | 0.627 | 1.027 | -11.14 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Elliott (/100) → 10 | 119.66 | 51.7% | 0.837 | 7.4 | 16.17 | 0.677 | 1.013 | -12.16 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 87.08 | 45.5% | 0.609 | 10.16 | 8.57 | 0.478 | 0.734 | -13.61 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + % chốt ở TP1 → 0.307 | 123.33 | 50.3% | 0.806 | 7.69 | 16.04 | 0.759 | 0.86 | -12.74 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 50 → 1.13 | 102.57 | 42% | 0.35 | 12.48 | 8.22 | 0.31 | 0.386 | -4.1 |  |

### Vòng 1120 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Xác nhận khung nhỏ (A2) → W + Ngưỡng điểm vào kèo → 77 | 123.84 | 40.4% | 0.464 | 13.98 | 8.86 | 0.475 | 0.455 | -3.89 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 108.16 | 50.7% | 0.741 | 7.95 | 13.61 | 0.554 | 0.955 | -8.9 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 98.03 | 49.2% | 0.791 | 7.85 | 12.49 | 0.755 | 0.832 | -18.62 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: POC anchored → 2 + Điểm tối thiểu của vùng đặt SL → 4 | 105.35 | 49.4% | 0.684 | 8.62 | 12.22 | 0.573 | 0.793 | -7.22 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Trọng số phần Trend (/100) → 12 | 118.79 | 51% | 0.819 | 7.27 | 16.34 | 0.663 | 0.992 | -12.16 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần Trend (/100) → 19 | 120.44 | 39.5% | 0.461 | 14.63 | 8.23 | 0.466 | 0.457 | -7.94 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: POC volume profile cố định → 0.688 | 128.79 | 37.2% | 0.457 | 19.25 | 6.69 | 0.281 | 0.627 | -10.34 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + SL tối đa (% Entry) → 0.425 | 104.63 | 51.4% | 0.717 | 7.87 | 13.29 | 0.673 | 0.765 | -11.75 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Fib sóng 4 → 0.938 | 104.02 | 51.4% | 0.722 | 7.88 | 13.2 | 0.635 | 0.82 | -11.17 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + % chốt ở TP1 → 0.307 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 57.75 | 47.3% | 0.621 | 8.52 | 6.78 | 0.51 | 0.744 | -12.66 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Khung lớn phải tăng (trend ≥) → 0.425 + Đệm SL riêng khung 1D (ATR) → 0.3 | 112.17 | 45.9% | 0.705 | 10.07 | 11.14 | 0.66 | 0.746 | -13.85 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm tối thiểu của vùng đặt SL → 2 | 108.35 | 48.6% | 0.774 | 8.37 | 12.95 | 0.579 | 1.005 | -9.38 |  |

### Vòng 1119 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.09R, lời÷rủi ro 17.19

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Cộng điểm phân kỳ dương ẩn → 3 | 73.8 | 46% | 0.653 | 8.98 | 8.22 | 0.42 | 0.917 | -5.79 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Khung lớn phải tăng (trend ≥) → 0.375 | 111.74 | 50.4% | 0.793 | 7.6 | 14.7 | 0.564 | 1.038 | -12.16 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Vùng RSI 45–55 → 0.875 + R:R tối thiểu tới TP1 → 2.38 | 58 | 44.1% | 0.457 | 10.06 | 5.77 | 0.435 | 0.476 | -18.14 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 123.26 | 48.5% | 0.747 | 8.47 | 14.55 | 0.703 | 0.798 | -14.33 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 113.31 | 50.3% | 0.741 | 7.9 | 14.34 | 0.647 | 0.843 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Trọng số phần Trend (/100) → 12 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 98.86 | 47.8% | 0.716 | 8.15 | 12.13 | 0.482 | 0.965 | -14.99 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 34.6 | 40.2% | 0.398 | 10.02 | 3.45 | 0.269 | 0.557 | -7.55 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Khung lớn phải tăng (trend ≥) → 0.375 | 105.97 | 47.4% | 0.679 | 8.61 | 12.31 | 0.508 | 0.855 | -13.75 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Ngưỡng điểm vào kèo → 77 + Đệm SL riêng khung 1W (ATR) → 0.3 | 67.8 | 43% | 0.595 | 11.01 | 6.16 | 0.36 | 0.865 | -8.34 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Divergence (/100) → 9 + % chốt ở TP1 → 0.287 | 121.32 | 52.8% | 0.842 | 7.16 | 16.94 | 0.669 | 1.037 | -12.14 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng thêm ngưỡng điểm khung 1W → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 127.91 | 48.6% | 0.864 | 8.19 | 15.62 | 0.803 | 0.941 | -11.69 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Mức RSI 30/70 → 1.13 | 121.43 | 52.8% | 0.843 | 7.15 | 16.98 | 0.672 | 1.035 | -12.16 |  |

### Vòng 1118 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần Momentum (/100) → 21 | 126.37 | 50.6% | 0.81 | 8.12 | 15.56 | 0.743 | 0.888 | -9.48 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Mức MACD → 0.875 | 117.25 | 53.5% | 0.826 | 7.14 | 16.42 | 0.655 | 1.012 | -10.87 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Khung lớn phải tăng (trend ≥) → 0.425 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 97.82 | 46.3% | 0.596 | 9.25 | 10.58 | 0.593 | 0.6 | -11.19 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 79.22 | 42.9% | 0.486 | 11.34 | 6.99 | 0.336 | 0.638 | -9.39 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: EMA 21 → 0.875 | 113.27 | 46.7% | 0.687 | 9.99 | 11.34 | 0.656 | 0.715 | -10.49 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + R:R tối thiểu riêng khung 1W → 2 + R:R tối thiểu tới TP1 → 2.63 | 94.62 | 49.2% | 0.751 | 8.09 | 11.7 | 0.526 | 0.983 | -11.67 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Trọng số phần Divergence (/100) → 12 | 116.24 | 51.7% | 0.813 | 7.43 | 15.64 | 0.677 | 0.963 | -11.55 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: EMA 200 → 3 | 102.34 | 45.2% | 0.609 | 8.98 | 11.4 | 0.52 | 0.688 | -9.93 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Momentum (/100) → 25 | 84.61 | 48.6% | 0.762 | 7.73 | 10.95 | 0.556 | 0.996 | -18.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Entry (/100) → 33 | 114.56 | 50.3% | 0.79 | 7.76 | 14.76 | 0.636 | 0.96 | -13.12 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Trọng số phần R:R (/100) → 28 | 112.33 | 49.7% | 0.725 | 8.06 | 13.94 | 0.682 | 0.769 | -11.14 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Trọng số phần Elliott (/100) → 10 | 84.92 | 50.4% | 0.752 | 7.06 | 12.03 | 0.373 | 1.074 | -14.25 |  |

### Vòng 1117 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.07R, lời÷rủi ro 17.24

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: EMA 200 → 3 | 92.82 | 48% | 0.743 | 8.24 | 11.26 | 0.436 | 1.054 | -12.6 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 105.64 | 51.7% | 0.729 | 7.84 | 13.47 | 0.673 | 0.791 | -11.75 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 119.02 | 40.6% | 0.378 | 12.59 | 9.45 | 0.375 | 0.38 | -4.13 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + SL tối đa (% Entry) → 0.425 | 113.15 | 50.3% | 0.74 | 7.86 | 14.4 | 0.652 | 0.836 | -11.14 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Trọng số phần R:R (/100) → 28 | 117.72 | 52.4% | 0.823 | 7.39 | 15.93 | 0.624 | 1.043 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Mức RSI 30/70 → 1.13 | 106.58 | 47% | 0.65 | 8.48 | 12.57 | 0.497 | 0.799 | -13.47 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: BOS → 0 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 97.62 | 49% | 0.664 | 8.96 | 10.9 | 0.521 | 0.813 | -9.77 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 116.22 | 51% | 0.813 | 7.35 | 15.81 | 0.631 | 1.019 | -11.98 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu riêng khung 1W → 2 | 106.08 | 47.3% | 0.628 | 8.83 | 12.01 | 0.56 | 0.695 | -9.99 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: BOS → 0 | 87.14 | 52.2% | 0.771 | 6.98 | 12.48 | 0.371 | 1.125 | -14.25 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: HVN cố định → 0.438 + Đệm SL riêng khung 4H (ATR) → 0.3 | 168.96 | 39.5% | 0.575 | 17.43 | 9.69 | 0.435 | 0.72 | -4.88 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Cộng thêm ngưỡng điểm khung 4H → -1 | 117.68 | 53.1% | 0.823 | 7.3 | 16.12 | 0.672 | 0.995 | -11.13 |  |

### Vòng 1116 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.1R, lời÷rủi ro 17.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Đệm SL riêng khung 1D (ATR) → 0.3 | 113.48 | 46.7% | 0.68 | 10.4 | 10.91 | 0.659 | 0.698 | -9.47 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: BOS → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 113.19 | 51.7% | 0.792 | 7.91 | 14.31 | 0.54 | 1.077 | -8.9 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: EMA 50 → 0.75 | 72.04 | 45% | 0.55 | 9.82 | 7.34 | 0.411 | 0.714 | -11.18 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 119.78 | 52.5% | 0.849 | 7.22 | 16.59 | 0.661 | 1.057 | -12.16 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: MACD cắt lên Signal → 0.438 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 110.35 | 49.3% | 0.726 | 8.71 | 12.67 | 0.497 | 0.987 | -9.56 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng thêm ngưỡng điểm khung 1D → 5 | 99.61 | 48.6% | 0.722 | 8.01 | 12.44 | 0.479 | 0.987 | -14.99 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 88.67 | 49.2% | 0.751 | 7.77 | 11.41 | 0.559 | 0.979 | -18.62 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Divergence (/100) → 12 | 111.74 | 50.4% | 0.793 | 7.65 | 14.61 | 0.564 | 1.038 | -12.16 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 109.11 | 49% | 0.723 | 8.24 | 13.24 | 0.651 | 0.794 | -9.83 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Break mây Ichimoku → 3 + R:R tối thiểu riêng khung 1W → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 94.09 | 47.5% | 0.596 | 9.46 | 9.95 | 0.474 | 0.717 | -10.91 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 34.08 | 58.1% | 0.198 | 7.18 | 4.75 | 0.241 | 0.164 | -5.86 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: POC anchored → 4 + Trọng số phần Divergence (/100) → 9 | 99.27 | 49.7% | 0.666 | 8.27 | 12 | 0.638 | 0.695 | -5.71 |  |

### Vòng 1115 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.09R, lời÷rủi ro 17.19

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Trọng số phần R:R (/100) → 33 | 121.23 | 52.4% | 0.836 | 7.17 | 16.91 | 0.66 | 1.035 | -12.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 108.04 | 50.7% | 0.761 | 7.77 | 13.9 | 0.604 | 0.918 | -13.19 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 27.28 | 51.4% | 0.105 | 14.56 | 1.87 | 0.095 | 0.114 | -12.56 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Momentum (/100) → 25 | 113.11 | 49.7% | 0.72 | 8.28 | 13.66 | 0.595 | 0.861 | -11.03 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: EMA 200 → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Ngưỡng điểm vào kèo → 77 | 116.4 | 51.3% | 0.766 | 7.89 | 14.75 | 0.682 | 0.864 | -5.24 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: EMA 200 → 3 | 110.79 | 48% | 0.739 | 8.18 | 13.54 | 0.633 | 0.853 | -14.15 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: HVN anchored → 0.313 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 39.61 | 41.1% | 0.44 | 9.41 | 4.21 | 0.364 | 0.536 | -8.48 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: EMA 21 → 1.13 + Ngưỡng điểm vào kèo → 74 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 70.02 | 44.7% | 0.614 | 9.29 | 7.54 | 0.398 | 0.854 | -5.74 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + % chốt ở TP1 → 0.307 | 117.46 | 46.7% | 0.712 | 9.95 | 11.81 | 0.681 | 0.739 | -9.49 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Điểm vùng: POC anchored → 2 + R:R tối thiểu riêng khung 1W → 2 | 94.4 | 49% | 0.66 | 8.8 | 10.73 | 0.519 | 0.792 | -12.49 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Fib sóng 4 → 1.56 | 113.72 | 48.8% | 0.685 | 9.27 | 12.27 | 0.629 | 0.744 | -8.68 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: EMA 200 → 1 | 126.58 | 51.4% | 0.867 | 7.65 | 16.55 | 0.741 | 1.033 | -5.41 |  |

### Vòng 1114 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 112.32 | 38.7% | 0.403 | 16.3 | 6.89 | 0.464 | 0.346 | -5.86 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Trọng số phần Elliott (/100) → 10 | 96.99 | 47.7% | 0.642 | 8.93 | 10.86 | 0.558 | 0.728 | -13.98 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 81.36 | 44.3% | 0.487 | 11.39 | 7.14 | 0.358 | 0.618 | -11.2 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 95.19 | 46.5% | 0.553 | 10.73 | 8.87 | 0.42 | 0.714 | -8.86 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: BOS → 2 | 87.14 | 52.2% | 0.771 | 6.87 | 12.68 | 0.371 | 1.125 | -14.25 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Khung lớn phải tăng (trend ≥) → 0.375 + % chốt ở TP1 → 0.307 | 95.73 | 49.6% | 0.731 | 7.99 | 11.98 | 0.542 | 0.947 | -11.8 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 37.15 | 40.7% | 0.408 | 10.55 | 3.52 | 0.35 | 0.476 | -7.55 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: HVN cố định → 0.438 | 118.97 | 51.7% | 0.82 | 7.61 | 15.63 | 0.631 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 86.03 | 48.7% | 0.735 | 7.62 | 11.29 | 0.567 | 0.931 | -18.45 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 | 121.34 | 52.8% | 0.843 | 7.31 | 16.6 | 0.67 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 114.32 | 50% | 0.724 | 8.16 | 14.01 | 0.631 | 0.816 | -5.09 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 111.08 | 51.4% | 0.771 | 7.4 | 15.01 | 0.63 | 0.925 | -12.99 |  |

### Vòng 1113 — ghép cặp thay đổi suýt đạt · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.07R, lời÷rủi ro 17.24

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: BOS → 3 | 121.88 | 53.1% | 0.852 | 7.07 | 17.24 | 0.672 | 1.057 | -12.16 |  |
| Ghép: Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần Trend (/100) → 12 | 119.66 | 51.7% | 0.837 | 7.36 | 16.26 | 0.677 | 1.013 | -12.16 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 143.5 | 52% | 0.82 | 7.67 | 18.71 | 0.651 | 1.007 | -12.37 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 0.875 + Điểm vùng: BOS → 3 | 143.5 | 52% | 0.82 | 7.67 | 18.71 | 0.651 | 1.007 | -12.37 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 0.875 + Trọng số phần Trend (/100) → 12 | 141.97 | 50.9% | 0.811 | 7.89 | 17.99 | 0.656 | 0.98 | -12.37 |  |
| Ghép: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: BOS → 3 | 121.88 | 53.1% | 0.852 | 7.07 | 17.24 | 0.672 | 1.057 | -12.16 |  |
| Ghép: Trần điểm khi chart yếu (Trend < x) → -0.225 + Trọng số phần Trend (/100) → 12 | 119.66 | 51.7% | 0.837 | 7.36 | 16.26 | 0.677 | 1.013 | -12.16 |  |
| Ghép: Điểm vùng: BOS → 3 + Trọng số phần Trend (/100) → 12 | 119.66 | 51.7% | 0.837 | 7.36 | 16.26 | 0.677 | 1.013 | -12.16 |  |

### Vòng 1112 — ngẫu nhiên nhiều thông số · mốc: tổng 118.27R, win 52.8%, rủi ro tụt vốn 7.09R, lời÷rủi ro 16.68

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Xác nhận khung nhỏ (A2) → W + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 113.43 | 38.8% | 0.44 | 15.02 | 7.55 | 0.503 | 0.384 | -6.88 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần Momentum (/100) → 21 + Điểm tối thiểu của vùng đặt SL → 2 | 112.02 | 52.1% | 0.778 | 7.82 | 14.32 | 0.589 | 0.995 | -11.13 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Entry (/100) → 33 | 117.52 | 52.1% | 0.828 | 7.19 | 16.34 | 0.637 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 107.43 | 48.4% | 0.693 | 8.84 | 12.15 | 0.59 | 0.8 | -9.85 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Cộng thêm ngưỡng điểm khung 1W → 2 | 111.08 | 50.7% | 0.771 | 7.69 | 14.44 | 0.608 | 0.949 | -11.55 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 5 | 118.27 | 52.8% | 0.833 | 7.09 | 16.68 | 0.632 | 1.057 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Cộng thêm ngưỡng điểm khung 1D → 3 | 116.28 | 51.4% | 0.796 | 7.5 | 15.5 | 0.623 | 0.985 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Coin phải mạnh hơn BTC trong N ngày → 14 | 75.23 | 47.4% | 0.66 | 8.35 | 9.01 | 0.42 | 0.936 | -17.28 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần SL (/100) → 9 + Điểm vùng: Biên mây Ichimoku → 1.35 + Cộng thêm ngưỡng điểm khung 1W → -1 | 104.97 | 49.3% | 0.719 | 8.1 | 12.96 | 0.547 | 0.917 | -12.74 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: POC anchored → 4 + Cổng Dow → TẮT | 122.85 | 41.8% | 0.591 | 12.13 | 10.13 | 0.506 | 0.673 | -9.8 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức MACD → 1.13 | 71.81 | 45% | 0.659 | 8.95 | 8.02 | 0.382 | 0.985 | -5.79 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 105.52 | 44.6% | 0.672 | 9.99 | 10.56 | 0.56 | 0.788 | -14.59 |  |
