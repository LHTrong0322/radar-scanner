# Tối ưu tự động (chạy liên tục) — vòng 1170

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 13672 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 98.78R | 0.595 | 5.7R | 9.64R | 10.25 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 143 | 53.1% | 121.88R | 0.852 | 5.15R | 7.13R | 17.09 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

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
| Bot thật | 166 | 47% | 98.78R | 9.64R | 10.25 | 30 | 13.3% | -11.98R |
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

### Vòng 1168 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.2R, lời÷rủi ro 16.93

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: MACD cắt lên Signal → 0.563 + R:R tối thiểu riêng khung 1D → 2 | 108.98 | 45.4% | 0.626 | 9.1 | 11.98 | 0.604 | 0.646 | -8.93 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Trend (/100) → 12 + Điểm vùng: POC volume profile cố định → 0.813 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 109.19 | 46.6% | 0.738 | 8.95 | 12.2 | 0.555 | 0.948 | -10.97 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Đệm SL riêng khung 1W (ATR) → 0.3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + R:R tối thiểu riêng khung 1W → 2 | 79.54 | 43.5% | 0.468 | 12.29 | 6.47 | 0.364 | 0.572 | -13.29 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Số TP tối đa → 1 | 124.25 | 41.3% | 0.401 | 12.08 | 10.29 | 0.358 | 0.437 | -7.45 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + % chốt ở TP1 → 0.287 + Trọng số phần Momentum (/100) → 25 | 120.33 | 52.4% | 0.841 | 7.28 | 16.53 | 0.669 | 1.037 | -12.14 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 106.05 | 47.2% | 0.651 | 8.82 | 12.02 | 0.508 | 0.788 | -13.47 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Biên mây Ichimoku → 1.05 + R:R tối thiểu riêng khung 1D → 2 | 101.78 | 45.9% | 0.592 | 9.06 | 11.23 | 0.581 | 0.602 | -9.76 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Trọng số phần Momentum (/100) → 21 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 105.47 | 49.4% | 0.668 | 8.66 | 12.18 | 0.657 | 0.678 | -10.74 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Số TP tối đa → 1 | 121.13 | 52.8% | 0.841 | 7.25 | 16.71 | 0.672 | 1.031 | -10.84 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng điểm phân kỳ dương ẩn → 3 | 117.98 | 52.7% | 0.808 | 7.7 | 15.32 | 0.598 | 1.043 | -8.9 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: EMA 50 → 1.13 | 96.66 | 48% | 0.761 | 8.71 | 11.1 | 0.501 | 1.042 | -10.52 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 72.94 | 45.1% | 0.548 | 10.17 | 7.17 | 0.375 | 0.754 | -11.42 |  |

### Vòng 1167 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Elliott (/100) → 10 | 99 | 49.3% | 0.707 | 8.07 | 12.27 | 0.639 | 0.781 | -11.96 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 90.01 | 47.7% | 0.703 | 8.51 | 10.58 | 0.508 | 0.939 | -19.02 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: HVN cố định → 0.563 | 36.7 | 57.2% | 0.221 | 6.19 | 5.93 | 0.243 | 0.201 | -8.14 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Đệm SL riêng khung 4H (ATR) → 0.3 | 160.7 | 39% | 0.545 | 18.05 | 8.9 | 0.392 | 0.705 | -9.3 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 88.95 | 46.1% | 0.533 | 9.52 | 9.34 | 0.526 | 0.539 | -9.25 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Xác nhận khung nhỏ (A2) → W + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: BOS → 0 | 132.76 | 40.7% | 0.486 | 14.2 | 9.35 | 0.488 | 0.485 | -5.66 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: BOS → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 76.33 | 46.4% | 0.694 | 8.87 | 8.61 | 0.445 | 0.981 | -5.79 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: POC anchored → 2 | 94.76 | 44.1% | 0.557 | 11.61 | 8.16 | 0.522 | 0.59 | -11.51 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm tối thiểu của vùng đặt SL → 4 | 109.39 | 49.6% | 0.798 | 7.68 | 14.24 | 0.575 | 1.031 | -10.9 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: EMA 50 → 1.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + R:R tối thiểu riêng khung 1D → 2 | 108.53 | 45.3% | 0.631 | 9.19 | 11.81 | 0.579 | 0.681 | -6.6 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Điểm vùng: EMA 50 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 96.39 | 44.8% | 0.665 | 9.11 | 10.58 | 0.511 | 0.844 | -7.11 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Momentum (/100) → 21 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 81.49 | 46.2% | 0.685 | 8.93 | 9.13 | 0.684 | 0.686 | -5.98 |  |

### Vòng 1166 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: POC volume profile cố định → 0.688 | 121.88 | 53.1% | 0.852 | 7.06 | 17.26 | 0.672 | 1.057 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Lệnh chờ hết hạn sau (nến) → 8 | 109.14 | 48.4% | 0.704 | 8.44 | 12.93 | 0.509 | 0.923 | -13.75 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 110.28 | 43.3% | 0.672 | 11.2 | 9.85 | 0.655 | 0.689 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: BOS → 2 | 95.55 | 48.6% | 0.654 | 8.88 | 10.76 | 0.59 | 0.729 | -11.17 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 160.81 | 37.7% | 0.501 | 18.37 | 8.75 | 0.431 | 0.568 | -10.73 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Fib sóng 4 → 0.938 + Đệm SL riêng khung 1W (ATR) → 0.3 | 102.35 | 46.1% | 0.726 | 9.25 | 11.06 | 0.495 | 0.935 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 101.23 | 48% | 0.675 | 9.29 | 10.9 | 0.482 | 0.901 | -10.58 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: EMA 21 → 1.13 + Trọng số phần Entry (/100) → 33 + Điểm vùng: EMA 50 → 0.75 | 110.7 | 50.3% | 0.774 | 7.19 | 15.4 | 0.612 | 0.949 | -11.13 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 110.85 | 45.5% | 0.664 | 10.6 | 10.46 | 0.63 | 0.693 | -10.49 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Mức MACD → 1.13 | 114.01 | 50.7% | 0.803 | 7.75 | 14.71 | 0.584 | 1.048 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + R:R tối thiểu riêng khung 1W → 2 | 100.43 | 49.6% | 0.733 | 7.86 | 12.78 | 0.542 | 0.921 | -13.02 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Cộng thêm ngưỡng điểm khung 1W → -1 | 102.15 | 50.4% | 0.817 | 7.81 | 13.08 | 0.544 | 1.113 | -12.86 |  |

### Vòng 1165 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.09

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 114.07 | 50.3% | 0.746 | 7.94 | 14.37 | 0.652 | 0.848 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: HVN anchored → 0.313 | 114.75 | 49.7% | 0.791 | 7.97 | 14.4 | 0.59 | 1.026 | -11.14 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: HVN anchored → 0.188 + Số TP tối đa → 1 + Điểm vùng: Mức RSI 30/70 → 1.13 | 118.89 | 50.7% | 0.803 | 8.1 | 14.68 | 0.541 | 1.096 | -12.06 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 35.89 | 57% | 0.227 | 5.64 | 6.36 | 0.278 | 0.18 | -8.19 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 116.77 | 51.7% | 0.805 | 7.48 | 15.61 | 0.631 | 1.003 | -13.13 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Lệnh chờ hết hạn sau (nến) → 8 + R:R tối thiểu tới TP1 → 2.38 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 94.66 | 43% | 0.509 | 10.37 | 9.13 | 0.495 | 0.523 | -16.21 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần R:R (/100) → 33 + Điểm vùng: HVN cố định → 0.563 | 122.09 | 39.5% | 0.459 | 14.06 | 8.68 | 0.45 | 0.467 | -10.17 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: EMA 200 → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Trọng số phần Elliott (/100) → 6 | 108.26 | 50.7% | 0.752 | 7.99 | 13.55 | 0.503 | 1.015 | -9.89 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: HVN cố định → 0.438 | 108.51 | 48.7% | 0.714 | 8.57 | 12.66 | 0.636 | 0.792 | -9.85 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 101.23 | 51.5% | 0.779 | 7.18 | 14.1 | 0.616 | 0.968 | -11.79 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + R:R tối thiểu riêng khung 1W → 2 + R:R tối thiểu riêng khung 4H → 2 | 92.55 | 40.4% | 0.325 | 13.09 | 7.07 | 0.305 | 0.341 | -7.46 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 112.68 | 40.1% | 0.348 | 13.08 | 8.61 | 0.291 | 0.397 | -8.42 |  |

### Vòng 1164 — ngẫu nhiên nhiều thông số · mốc: tổng 125.05R, win 53.5%, rủi ro tụt vốn 6.84R, lời÷rủi ro 18.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Break mây Ichimoku → 1 | 27.49 | 39.3% | 0.327 | 10.89 | 2.52 | 0.354 | 0.29 | -7.19 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Lệnh chờ hết hạn sau (nến) → 6 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 53.58 | 42.6% | 0.439 | 11.26 | 4.76 | 0.362 | 0.534 | -9.8 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Khung lớn phải tăng (trend ≥) → 0.375 | 120.96 | 50% | 0.766 | 8.45 | 14.31 | 0.577 | 0.974 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Ngưỡng điểm vào kèo → 77 + Trọng số phần R:R (/100) → 28 | 117.22 | 51.4% | 0.814 | 7.45 | 15.73 | 0.636 | 1.013 | -11.55 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: MACD cắt lên Signal → 0.438 | 112.88 | 48.5% | 0.684 | 9.53 | 11.84 | 0.477 | 0.927 | -9.58 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Xác nhận khung nhỏ (A2) → W | 104.65 | 38.1% | 0.415 | 16.35 | 6.4 | 0.334 | 0.487 | -7.98 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: HVN cố định → 0.438 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 120.37 | 51.4% | 0.813 | 7.52 | 16.01 | 0.631 | 1.011 | -9.82 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → -1 | 115.41 | 46.4% | 0.695 | 9.92 | 11.63 | 0.63 | 0.752 | -10.49 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Đệm SL riêng khung 4H (ATR) → 0.3 | 160.14 | 38.2% | 0.547 | 17.97 | 8.91 | 0.41 | 0.687 | -9.32 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + SL tối đa (% Entry) → 0.425 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Elliott (/100) → 6 | 116.91 | 49.3% | 0.835 | 7.98 | 14.65 | 0.615 | 1.082 | -10.4 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + R:R tối thiểu riêng khung 4H → 2 | 117.27 | 40.7% | 0.376 | 12.56 | 9.34 | 0.348 | 0.4 | -5.87 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: BOS → 0 | 117.79 | 52.4% | 0.824 | 7.4 | 15.92 | 0.649 | 1.016 | -11.13 |  |

### Vòng 1163 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.09R, lời÷rủi ro 17.19

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Đệm SL riêng khung 1W (ATR) → 0.3 | 106.83 | 46.9% | 0.737 | 8.98 | 11.9 | 0.519 | 0.952 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Lệnh chờ hết hạn sau (nến) → 6 | 92.35 | 48.2% | 0.664 | 8.68 | 10.64 | 0.481 | 0.867 | -10.06 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Cộng thêm ngưỡng điểm khung 1D → 5 + SL tối đa (% Entry) → 0.425 | 120.87 | 52.8% | 0.839 | 7.26 | 16.65 | 0.672 | 1.027 | -12.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: BOS → 2 | 116.98 | 52.4% | 0.818 | 7.26 | 16.11 | 0.672 | 0.984 | -12.16 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần SL (/100) → 7 + Cộng điểm phân kỳ dương ẩn → 3 | 69.55 | 43.8% | 0.621 | 9.47 | 7.34 | 0.414 | 0.86 | -5.39 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 111.93 | 50.3% | 0.772 | 7.85 | 14.26 | 0.577 | 0.993 | -12.19 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cổng Dow → TẮT + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Vùng RSI 45–55 → 0.875 | 16.1 | 31.4% | 0.067 | 34.93 | 0.46 | 0.229 | -0.095 | -24.18 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Trend (/100) → 19 | 118.01 | 51.8% | 0.837 | 7.03 | 16.79 | 0.647 | 1.047 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: POC volume profile cố định → 0.688 | 87.01 | 49.6% | 0.757 | 7.61 | 11.43 | 0.543 | 1.006 | -18.62 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Trọng số phần R:R (/100) → 33 | 114.07 | 50.3% | 0.746 | 7.91 | 14.42 | 0.652 | 0.848 | -11.14 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 21.12 | 41.8% | 0.384 | 8.39 | 2.52 | 0.215 | 0.535 | -2.78 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Cộng thêm ngưỡng điểm khung 1D → 5 | 121.88 | 53.1% | 0.852 | 7.09 | 17.19 | 0.672 | 1.057 | -12.16 |  |

### Vòng 1162 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 120.98 | 52.4% | 0.834 | 7.26 | 16.66 | 0.694 | 0.985 | -12.16 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Lệnh chờ hết hạn sau (nến) → 6 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Trend (/100) → 19 | 95.29 | 46.3% | 0.701 | 8.82 | 10.8 | 0.511 | 0.896 | -13.65 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm tối thiểu của vùng đặt SL → 2 | 115.05 | 51.7% | 0.762 | 8.02 | 14.35 | 0.631 | 0.926 | -6.14 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Fib sóng 4 → 0.938 + Đệm SL riêng khung 4H (ATR) → 0.3 | 135.38 | 38.4% | 0.515 | 17.67 | 7.66 | 0.221 | 0.806 | -8.99 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Trọng số phần R:R (/100) → 33 | 119.44 | 51.4% | 0.818 | 7.26 | 16.45 | 0.629 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 130 | 50.6% | 0.844 | 7.83 | 16.6 | 0.815 | 0.878 | -12.74 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + R:R tối thiểu riêng khung 1W → 2 | 122.12 | 40.9% | 0.485 | 14.02 | 8.71 | 0.484 | 0.485 | -7.72 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Trọng số phần Elliott (/100) → 6 | 108.74 | 48.3% | 0.75 | 8.53 | 12.75 | 0.518 | 0.972 | -10.75 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Cộng điểm phân kỳ dương ẩn → 2.25 | 109.77 | 50% | 0.762 | 7.94 | 13.82 | 0.59 | 0.966 | -12.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 111.93 | 46.8% | 0.647 | 8.87 | 12.62 | 0.6 | 0.691 | -8.93 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cộng thêm ngưỡng điểm khung 4H → -1 | 114.24 | 41.9% | 0.452 | 11.83 | 9.66 | 0.605 | 0.299 | -15.43 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức MACD → 1.13 | 127.65 | 41% | 0.405 | 11.79 | 10.83 | 0.38 | 0.427 | -7.45 |  |

### Vòng 1161 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.09R, lời÷rủi ro 17.19

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1W → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 100.7 | 41.1% | 0.345 | 12.31 | 8.18 | 0.32 | 0.366 | -7.46 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Đệm SL riêng khung 1D (ATR) → 0.3 | 112.43 | 46.1% | 0.681 | 10.25 | 10.97 | 0.652 | 0.707 | -10.49 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 | 37.08 | 40.2% | 0.426 | 10.04 | 3.69 | 0.335 | 0.538 | -5.18 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Mức RSI 30/70 → 0.875 | 119.29 | 49.7% | 0.76 | 8.48 | 14.07 | 0.586 | 0.964 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 124.14 | 44.5% | 0.547 | 10.97 | 11.32 | 0.577 | 0.518 | -15.8 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu tới TP1 → 2.63 | 66.34 | 44.9% | 0.677 | 8.9 | 7.45 | 0.448 | 0.906 | -16.54 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: EMA 200 → 3 + Điểm vùng: Break mây Ichimoku → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 77.91 | 44.3% | 0.443 | 11.59 | 6.72 | 0.427 | 0.459 | -13.01 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm tối thiểu của vùng đặt SL → 2 | 107.96 | 51.1% | 0.766 | 7.62 | 14.17 | 0.579 | 0.966 | -12.13 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 4H (ATR) → 0.3 | 104.73 | 37.1% | 0.366 | 19.76 | 5.3 | 0.456 | 0.286 | -29.74 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN cố định → 0.563 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 105.64 | 51.7% | 0.729 | 7.76 | 13.61 | 0.673 | 0.791 | -11.75 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Trọng số phần SL (/100) → 9 + Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → 2 | 151.98 | 38% | 0.512 | 19.17 | 7.93 | 0.43 | 0.593 | -9.22 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cổng Dow → CHẶT | 87.14 | 52.2% | 0.771 | 6.91 | 12.61 | 0.371 | 1.125 | -14.25 |  |
