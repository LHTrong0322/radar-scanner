# Tối ưu tự động (chạy liên tục) — vòng 1178

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 13768 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 98.78R | 0.595 | 5.7R | 9.55R | 10.34 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 143 | 53.1% | 121.88R | 0.852 | 5.15R | 7.12R | 17.12 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

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
| Bot thật | 166 | 47% | 98.78R | 9.55R | 10.34 | 30 | 13.3% | -11.98R |
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

### Vòng 1178 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.12R, lời÷rủi ro 17.12

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 30.36 | 57% | 0.192 | 5.58 | 5.44 | 0.207 | 0.178 | -8.18 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Lệnh chờ hết hạn sau (nến) → 6 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: EMA 50 → 1.13 | 94.63 | 47.4% | 0.691 | 8.66 | 10.93 | 0.48 | 0.953 | -10.66 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Đệm SL riêng khung 4H (ATR) → 0.3 | 162.22 | 38.9% | 0.554 | 17.93 | 9.05 | 0.409 | 0.705 | -7.19 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 110.72 | 48.7% | 0.701 | 8.45 | 13.1 | 0.609 | 0.799 | -11.14 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 32.8 | 39.5% | 0.381 | 10.37 | 3.16 | 0.252 | 0.538 | -7.55 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 | 86.69 | 46.8% | 0.688 | 9.41 | 9.21 | 0.479 | 0.925 | -19.43 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Biên mây Ichimoku → 1.05 | 64.2 | 43.3% | 0.479 | 11.01 | 5.83 | 0.416 | 0.544 | -9.5 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL riêng khung 4H (ATR) → 0.3 | 141.64 | 36.9% | 0.494 | 19.28 | 7.35 | 0.311 | 0.663 | -6.34 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + R:R tối thiểu riêng khung 4H → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 | 107.1 | 41.2% | 0.327 | 14.34 | 7.47 | 0.392 | 0.276 | -8.56 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Trọng số phần SL (/100) → 9 + Điểm vùng: Mức RSI 30/70 → 1.13 | 110.4 | 50% | 0.812 | 7.74 | 14.26 | 0.571 | 1.075 | -12.19 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 105.18 | 47.8% | 0.67 | 9.02 | 11.66 | 0.595 | 0.748 | -10.81 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 4H → 2 | 122.22 | 40.4% | 0.383 | 11.92 | 10.25 | 0.375 | 0.39 | -5.16 |  |

### Vòng 1177 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.09

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 114.48 | 51.4% | 0.784 | 7.66 | 14.95 | 0.655 | 0.925 | -11.13 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 130 | 50.6% | 0.844 | 7.78 | 16.71 | 0.815 | 0.878 | -12.74 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 33.07 | 54.6% | 0.203 | 5.81 | 5.69 | 0.228 | 0.179 | -8.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trọng số phần R:R (/100) → 33 | 116.32 | 51.4% | 0.797 | 7.36 | 15.8 | 0.631 | 0.982 | -13.13 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 119.57 | 37.3% | 0.321 | 18.99 | 6.3 | 0.422 | 0.228 | 0.12 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: HVN anchored → 0.313 + Ngưỡng điểm vào kèo → 74 + Lệnh chờ hết hạn sau (nến) → 8 | 95.46 | 45.7% | 0.589 | 9.41 | 10.14 | 0.439 | 0.743 | -13.53 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Đệm SL riêng khung 1D (ATR) → 0.3 | 112.12 | 46.1% | 0.679 | 10.27 | 10.92 | 0.63 | 0.723 | -9.18 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm tối thiểu của vùng đặt SL → 4 | 118.94 | 51.7% | 0.82 | 7.17 | 16.59 | 0.677 | 0.974 | -10.87 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 100.76 | 50.4% | 0.715 | 7.79 | 12.93 | 0.634 | 0.803 | -11.79 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 115.41 | 51.7% | 0.785 | 7.35 | 15.7 | 0.633 | 0.952 | -11.26 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: HVN anchored → 0.313 + R:R tối thiểu riêng khung 1D → 2 | 107.65 | 45.1% | 0.592 | 9.5 | 11.33 | 0.528 | 0.65 | -9.35 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + % chốt ở TP1 → 0.307 + Trọng số phần SL (/100) → 7 | 118.84 | 51.3% | 0.782 | 7.9 | 15.04 | 0.632 | 0.967 | -7.18 |  |

### Vòng 1176 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Elliott (/100) → 6 | 28.45 | 36.2% | 0.245 | 13.27 | 2.14 | 0.349 | 0.114 | -2.89 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 121.79 | 53.1% | 0.852 | 7.22 | 16.87 | 0.67 | 1.057 | -12.16 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Fib sóng 4 → 1.56 | 119.08 | 52.1% | 0.816 | 7.6 | 15.67 | 0.628 | 1.031 | -10.84 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 121.88 | 53.1% | 0.852 | 7.06 | 17.26 | 0.672 | 1.057 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Cộng thêm ngưỡng điểm khung 4H → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 125.89 | 50.7% | 0.828 | 7.74 | 16.26 | 0.815 | 0.844 | -12.74 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần Momentum (/100) → 21 + Cổng Dow → TẮT | 130.39 | 43.7% | 0.662 | 10.5 | 12.42 | 0.596 | 0.73 | -22.37 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 112.69 | 50.3% | 0.727 | 7.84 | 14.37 | 0.635 | 0.831 | -11.14 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Divergence (/100) → 9 + R:R tối thiểu riêng khung 1W → 2 | 101.21 | 48% | 0.684 | 8.42 | 12.02 | 0.536 | 0.827 | -14.78 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + R:R tối thiểu riêng khung 1D → 2 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 149.15 | 42.4% | 0.436 | 14.18 | 10.52 | 0.435 | 0.437 | -5.29 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần R:R (/100) → 33 + Trọng số phần Momentum (/100) → 25 | 100.81 | 48.1% | 0.646 | 8.75 | 11.52 | 0.498 | 0.799 | -11.02 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 108.46 | 48.7% | 0.714 | 8.48 | 12.79 | 0.653 | 0.772 | -8.53 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Số TP tối đa → 1 + Đệm SL riêng khung 4H (ATR) → 0.3 | 172.69 | 39.7% | 0.563 | 17.61 | 9.81 | 0.394 | 0.751 | -5.11 |  |

### Vòng 1175 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.688 + R:R tối thiểu riêng khung 4H → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 46.06 | 36.1% | 0.21 | 19.01 | 2.42 | 0.203 | 0.217 | -10.06 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Elliott (/100) → 10 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 | 112.92 | 50.7% | 0.773 | 7.81 | 14.46 | 0.558 | 1.013 | -7.88 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: HVN anchored → 0.188 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 98.58 | 48.5% | 0.736 | 8.04 | 12.26 | 0.459 | 1.03 | -13.71 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + R:R tối thiểu riêng khung 1D → 2 | 124.32 | 41.8% | 0.486 | 11.58 | 10.74 | 0.524 | 0.45 | -11.62 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: EMA 50 → 1.13 | 109.28 | 45.6% | 0.639 | 9.09 | 12.02 | 0.579 | 0.697 | -7.91 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 118.41 | 52.8% | 0.834 | 7.19 | 16.47 | 0.636 | 1.049 | -12.16 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Cổng Dow → TẮT + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 107.65 | 41.3% | 0.57 | 13.25 | 8.12 | 0.472 | 0.66 | -19.83 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Số TP tối đa → 3 + Trọng số phần R:R (/100) → 33 | 118.68 | 51.7% | 0.83 | 7.38 | 16.08 | 0.649 | 1.029 | -12.16 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 + SL tối đa (% Entry) → 0.425 | 104.63 | 51.4% | 0.717 | 7.87 | 13.29 | 0.673 | 0.765 | -11.92 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Ngưỡng điểm vào kèo → 74 | 31.78 | 57.1% | 0.197 | 5.54 | 5.74 | 0.21 | 0.186 | -8.19 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + % chốt ở TP1 → 0.287 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 4H → -1 | 99.07 | 39.5% | 0.612 | 12.3 | 8.05 | 0.454 | 0.781 | -15.93 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Đệm SL riêng khung 4H (ATR) → 0.3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 161.7 | 38.9% | 0.552 | 17.39 | 9.3 | 0.487 | 0.617 | -7.77 |  |

### Vòng 1174 — ngẫu nhiên nhiều thông số · mốc: tổng 120.31R, win 52.8%, rủi ro tụt vốn 7.13R, lời÷rủi ro 16.87

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Trọng số phần Trend (/100) → 19 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 98.62 | 50.7% | 0.675 | 8.13 | 12.13 | 0.575 | 0.788 | -7.51 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Cộng thêm ngưỡng điểm khung 1D → 5 + Lệnh chờ hết hạn sau (nến) → 6 + R:R tối thiểu tới TP1 → 2.63 | 78.24 | 46.4% | 0.699 | 9.08 | 8.62 | 0.466 | 0.957 | -12.77 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: EMA 200 → 1 | 112.41 | 49.7% | 0.725 | 8.46 | 13.29 | 0.535 | 0.95 | -5.93 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Đệm SL riêng khung 1D (ATR) → 0.3 | 92.48 | 41.7% | 0.495 | 13.1 | 7.06 | 0.52 | 0.473 | -8.67 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 94.43 | 48.6% | 0.656 | 8.9 | 10.61 | 0.577 | 0.747 | -10.16 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Trọng số phần Entry (/100) → 33 + Đệm SL riêng khung 1W (ATR) → 0.3 | 106.56 | 45.3% | 0.72 | 9.79 | 10.88 | 0.528 | 0.912 | -12.99 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 106.53 | 39.2% | 0.449 | 13.19 | 8.08 | 0.454 | 0.446 | -11.03 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 2.25 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 106.97 | 45.3% | 0.664 | 10.57 | 10.12 | 0.612 | 0.712 | -9.45 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 76.33 | 46.4% | 0.694 | 8.89 | 8.59 | 0.445 | 0.981 | -4.78 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Fib sóng 4 → 1.56 | 99.56 | 49.6% | 0.797 | 8.18 | 12.17 | 0.504 | 1.113 | -10.83 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + % chốt ở TP1 → 0.287 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức RSI 30/70 → 0.875 | 160.59 | 38.6% | 0.53 | 18.41 | 8.72 | 0.333 | 0.713 | -7.18 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: EMA 200 → 1 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Mức RSI 30/70 → 0.875 | 120.95 | 50% | 0.747 | 8.55 | 14.15 | 0.638 | 0.88 | -6.15 |  |

### Vòng 1173 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.15R, lời÷rủi ro 17.05

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 97.09 | 48.3% | 0.652 | 8.37 | 11.6 | 0.51 | 0.8 | -12.6 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Lệnh chờ hết hạn sau (nến) → 6 + R:R tối thiểu riêng khung 1D → 2 | 65.94 | 42.2% | 0.449 | 11.83 | 5.57 | 0.542 | 0.357 | -5.44 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trọng số phần SL (/100) → 9 | 114.64 | 49.4% | 0.726 | 8.24 | 13.91 | 0.61 | 0.85 | -13.75 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 97.43 | 45.9% | 0.613 | 9.87 | 9.87 | 0.435 | 0.817 | -12.18 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: EMA 50 → 0.75 | 118.41 | 52.8% | 0.834 | 7.19 | 16.47 | 0.636 | 1.049 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Số TP tối đa → 1 | 121.88 | 53.1% | 0.852 | 7.15 | 17.05 | 0.672 | 1.057 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + R:R tối thiểu tới TP1 → 2.38 + Ngưỡng điểm vào kèo → 74 | 105.53 | 46.1% | 0.632 | 8.78 | 12.02 | 0.473 | 0.788 | -13.47 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 111.97 | 46.2% | 0.772 | 9.31 | 12.03 | 0.575 | 0.989 | -12.25 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + % chốt ở TP1 → 0.307 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: EMA 200 → 1 | 112.5 | 46.7% | 0.625 | 9.1 | 12.36 | 0.691 | 0.557 | -5.67 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Ngưỡng điểm vào kèo → 74 | 101.23 | 44.4% | 0.562 | 9.49 | 10.67 | 0.431 | 0.694 | -15.62 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Entry (/100) → 33 | 30.03 | 56.1% | 0.191 | 6.14 | 4.89 | 0.234 | 0.15 | -8.18 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 | 108.04 | 50.7% | 0.761 | 7.81 | 13.83 | 0.604 | 0.918 | -13.19 |  |

### Vòng 1172 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.09

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 1W → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 65.78 | 46.6% | 0.567 | 8.96 | 7.34 | 0.547 | 0.588 | -16.71 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Lệnh chờ hết hạn sau (nến) → 6 + % chốt ở TP1 → 0.307 | 76.76 | 46.6% | 0.577 | 9.04 | 8.49 | 0.551 | 0.606 | -11.18 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 77.21 | 46.9% | 0.683 | 8.7 | 8.87 | 0.414 | 0.957 | 0.26 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Trọng số phần Entry (/100) → 28 + Trọng số phần Momentum (/100) → 25 | 121.43 | 52.8% | 0.843 | 7.09 | 17.13 | 0.672 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Ngưỡng điểm vào kèo → 77 + Cộng điểm phân kỳ dương ẩn → 3 | 109.14 | 50.7% | 0.758 | 7.8 | 13.99 | 0.631 | 0.892 | -12.38 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: HVN cố định → 0.438 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Đệm SL riêng khung 1W (ATR) → 0.3 | 93.7 | 45% | 0.629 | 10.02 | 9.35 | 0.409 | 0.823 | -11.99 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: POC volume profile cố định → 0.813 | 133.38 | 40.8% | 0.503 | 14 | 9.53 | 0.487 | 0.518 | -5.67 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: HVN anchored → 0.313 | 118.36 | 51.7% | 0.816 | 7.51 | 15.76 | 0.627 | 1.031 | -10.84 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 96.6 | 49.6% | 0.773 | 7.96 | 12.14 | 0.495 | 1.065 | -12.86 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 85 | 45.2% | 0.512 | 9.95 | 8.54 | 0.505 | 0.519 | -9.42 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần R:R (/100) → 33 + Ngưỡng điểm vào kèo → 74 | 119.35 | 51% | 0.812 | 7.33 | 16.28 | 0.634 | 1.013 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 | 97.62 | 48.6% | 0.66 | 8.76 | 11.14 | 0.516 | 0.811 | -11.46 |  |

### Vòng 1171 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.11R, lời÷rủi ro 17.14

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Trọng số phần SL (/100) → 9 + Điểm vùng: Mức MACD → 0.875 | 117.3 | 53.5% | 0.826 | 7.01 | 16.73 | 0.657 | 1.01 | -10.88 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Đệm SL riêng khung 1W (ATR) → 0.3 | 110.28 | 47.3% | 0.755 | 8.96 | 12.31 | 0.519 | 0.986 | -14.01 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + R:R tối thiểu riêng khung 1W → 2 | 108.96 | 51.1% | 0.773 | 7.64 | 14.26 | 0.604 | 0.944 | -12.17 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Cộng điểm phân kỳ dương ẩn → 3 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 123.87 | 44.2% | 0.536 | 11.23 | 11.03 | 0.567 | 0.507 | -15.82 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 105.5 | 49% | 0.681 | 9.09 | 11.61 | 0.463 | 0.932 | -9.58 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: BOS → 0 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 116.73 | 50.3% | 0.753 | 8.07 | 14.46 | 0.594 | 0.932 | -13.75 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu riêng khung 1W → 2 | 93.97 | 47.2% | 0.584 | 10.28 | 9.14 | 0.473 | 0.711 | -10.61 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: BOS → 2 + Trọng số phần Trend (/100) → 19 | 115.31 | 51% | 0.784 | 7.91 | 14.58 | 0.631 | 0.954 | -13.13 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 111.41 | 50.7% | 0.785 | 7.54 | 14.78 | 0.579 | 1.002 | -11.84 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 83.7 | 48.7% | 0.703 | 8.09 | 10.35 | 0.551 | 0.881 | -18.62 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Khung lớn phải tăng (trend ≥) → 0.425 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 77.94 | 47.2% | 0.722 | 8.47 | 9.2 | 0.489 | 0.981 | -8.47 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cộng thêm ngưỡng điểm khung 1W → 2 | 120.43 | 52.1% | 0.836 | 7.23 | 16.66 | 0.659 | 1.035 | -12.57 |  |

### Vòng 1170 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.09

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 98.76 | 46.5% | 0.637 | 9.06 | 10.9 | 0.534 | 0.745 | -11.13 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 97.43 | 45.9% | 0.613 | 9.93 | 9.81 | 0.435 | 0.817 | -12.18 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 95.61 | 35.3% | 0.352 | 15.15 | 6.31 | 0.432 | 0.285 | -7.9 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cổng Dow → CHẶT + Điểm vùng: EMA 200 → 1 | 107.75 | 41.6% | 0.453 | 13.86 | 7.77 | 0.45 | 0.455 | -9.36 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + R:R tối thiểu riêng khung 1D → 2 | 124.09 | 41.4% | 0.472 | 11.8 | 10.52 | 0.54 | 0.406 | -13.02 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: HVN anchored → 0.188 + Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần Divergence (/100) → 9 | 111.29 | 50% | 0.784 | 7.77 | 14.32 | 0.564 | 1.016 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + R:R tối thiểu riêng khung 1D → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Khung lớn phải tăng (trend ≥) → 0.425 | 66.85 | 43.4% | 0.518 | 10.08 | 6.63 | 0.483 | 0.549 | -4.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 106.83 | 46.9% | 0.737 | 8.97 | 11.91 | 0.519 | 0.952 | -14.01 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 114.31 | 44.2% | 0.665 | 11.13 | 10.27 | 0.765 | 0.577 | -10.06 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: MACD cắt lên Signal → 0.563 | 121.88 | 53.1% | 0.852 | 7.13 | 17.09 | 0.672 | 1.057 | -12.16 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Cộng thêm ngưỡng điểm khung 1D → 5 | 108.81 | 50.4% | 0.783 | 7.53 | 14.45 | 0.606 | 0.973 | -10.5 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Fib sóng 4 → 0.938 | 106.3 | 50.4% | 0.754 | 7.68 | 13.84 | 0.587 | 0.918 | -13.19 |  |

### Vòng 1169 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.09

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 200 → 1 | 132.87 | 50.6% | 0.82 | 7.91 | 16.8 | 0.809 | 0.834 | -8.68 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + R:R tối thiểu riêng khung 4H → 2 | 123.57 | 41.2% | 0.397 | 12.12 | 10.2 | 0.358 | 0.431 | -6.42 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 101.68 | 49.3% | 0.737 | 7.9 | 12.87 | 0.479 | 1.018 | -13.71 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Lệnh chờ hết hạn sau (nến) → 6 + Đệm SL riêng khung 1W (ATR) → 0.3 | 98.83 | 44.5% | 0.677 | 9.71 | 10.18 | 0.636 | 0.72 | -14.23 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 26.67 | 55.6% | 0.177 | 5.99 | 4.45 | 0.192 | 0.163 | -7.35 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Xác nhận khung nhỏ (A2) → W + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 125.08 | 39.4% | 0.474 | 14.33 | 8.73 | 0.461 | 0.485 | -10.18 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + % chốt ở TP1 → 0.307 | 119.44 | 52.1% | 0.829 | 7.21 | 16.57 | 0.679 | 0.993 | -10.88 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + R:R tối thiểu riêng khung 4H → 2 | 124.3 | 41.3% | 0.401 | 12.25 | 10.15 | 0.358 | 0.438 | -5.39 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Break mây Ichimoku → 1 | 123.42 | 42.6% | 0.407 | 11.1 | 11.12 | 0.386 | 0.425 | -5.92 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 1W → -1 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.688 | 120.22 | 38.4% | 0.412 | 18.55 | 6.48 | 0.411 | 0.413 | -13.35 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Trọng số phần Trend (/100) → 19 | 126.08 | 47.9% | 0.764 | 8.46 | 14.9 | 0.734 | 0.798 | -13.13 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Biên mây Ichimoku → 1.35 + Cộng thêm ngưỡng điểm khung 4H → -1 | 110.88 | 46.1% | 0.672 | 10.49 | 10.57 | 0.609 | 0.728 | -10.16 |  |
