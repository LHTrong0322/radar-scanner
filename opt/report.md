# Tối ưu tự động (chạy liên tục) — vòng 436

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 4902 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 48.1% | 97.54R | 0.602 | 5.52R | 9.21R | 10.59 | 31 | 12.9% | -13.15R | -0.424 | 13.15R |
| **Tốt nhất** | 145 | 52.4% | 114.86R | 0.792 | 6.16R | 7.62R | 15.07 | 29 | 17.2% | -10.95R | -0.378 | 11.57R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.98R | 5 | 0% | -3.76R |
| 1W | 11 | 45.5% | 6.82R | 3 | 0% | -3.33R |
| 4H | 106 | 53.8% | 88.06R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 48.1% | 97.54R | 9.21R | 10.59 | 31 | 12.9% | -13.15R |
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

### Vòng 436 — ngẫu nhiên nhiều thông số · mốc: tổng 114.86R, win 52.4%, rủi ro tụt vốn 7.62R, lời÷rủi ro 15.07

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 15.92 | 36.7% | 0.201 | 13.71 | 1.16 | 0.026 | 0.521 | -6.11 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Break mây Ichimoku → 3 | 105.45 | 49.4% | 0.651 | 9.15 | 11.52 | 0.489 | 0.835 | -9.4 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + R:R tối thiểu riêng khung 4H → 2 | 111.55 | 40.5% | 0.348 | 13.19 | 8.46 | 0.298 | 0.388 | -6.73 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: POC volume profile cố định → 0.688 | 112.76 | 51% | 0.778 | 7.86 | 14.35 | 0.606 | 0.966 | -10.95 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 113.97 | 50.9% | 0.717 | 8.63 | 13.21 | 0.533 | 0.928 | -10.95 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần Momentum (/100) → 25 | 96.01 | 50% | 0.716 | 8.16 | 11.77 | 0.582 | 0.878 | -8.27 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Cổng Dow → CHẶT + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 50 → 0.75 | 26.18 | 60.8% | 0.201 | 5.04 | 5.19 | 0.198 | 0.204 | -6.86 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Break mây Ichimoku → 1 + Số TP tối đa → 2 | 99.97 | 48.3% | 0.68 | 8.7 | 11.49 | 0.475 | 0.912 | -11.19 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 1D (ATR) → 0.3 | 94.47 | 45% | 0.626 | 10.96 | 8.62 | 0.662 | 0.589 | -3.28 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: HVN cố định → 0.563 | 101.79 | 47.3% | 0.602 | 8.9 | 11.44 | 0.622 | 0.585 | -9.25 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Đệm SL riêng khung 1W (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 4H → 2 | 58.66 | 38.8% | 0.274 | 15.24 | 3.85 | 0.248 | 0.3 | -7.63 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần R:R (/100) → 33 | 97.28 | 50.4% | 0.721 | 8.14 | 11.95 | 0.571 | 0.902 | -8.27 |  |

### Vòng 435 — ngẫu nhiên nhiều thông số · mốc: tổng 117.19R, win 53.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 15.92

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Cộng thêm ngưỡng điểm khung 1D → 7 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib sóng 4 → 1.56 | 115.29 | 42.2% | 0.374 | 12.06 | 9.56 | 0.325 | 0.416 | -10.02 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cổng Dow → CHẶT + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 64.41 | 49% | 0.671 | 8.51 | 7.57 | 0.429 | 0.903 | -9.18 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần Divergence (/100) → 12 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 117.19 | 53.1% | 0.808 | 7.36 | 15.92 | 0.624 | 1.022 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + SL tối đa (% Entry) → 0.35 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 110.14 | 51% | 0.77 | 7.97 | 13.82 | 0.544 | 1.034 | -11.06 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 106.36 | 50.7% | 0.728 | 8.09 | 13.15 | 0.561 | 0.931 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Cổng Dow → CHẶT + Cộng điểm phân kỳ dương ẩn → 3.5 + Coin phải mạnh hơn BTC trong N ngày → 14 | 65.4 | 51.6% | 0.688 | 7.26 | 9.01 | 0.356 | 1.028 | -13.5 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Mức MACD → 1.13 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 200 → 1 | 71.02 | 47.6% | 0.564 | 9.58 | 7.41 | 0.517 | 0.616 | -14.93 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 109 | 51.7% | 0.762 | 7.87 | 13.85 | 0.588 | 0.959 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + % chốt ở TP1 → 0.287 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Khung lớn phải tăng (trend ≥) → 0.375 | 113.74 | 52.4% | 0.784 | 7.59 | 14.99 | 0.59 | 1.004 | -9.64 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: BOS → 1 | 106.66 | 52.1% | 0.731 | 7.66 | 13.92 | 0.579 | 0.9 | -11.78 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 99.41 | 51.7% | 0.676 | 7.92 | 12.55 | 0.636 | 0.721 | -9.46 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần Divergence (/100) → 12 | 83.75 | 38.1% | 0.343 | 16.81 | 4.98 | 0.277 | 0.402 | -4.56 |  |

### Vòng 434 — ngẫu nhiên nhiều thông số · mốc: tổng 117.19R, win 53.1%, rủi ro tụt vốn 7.34R, lời÷rủi ro 15.97

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Trọng số phần Divergence (/100) → 9 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Biên mây Ichimoku → 1.05 | 112.77 | 49% | 0.737 | 8.4 | 13.42 | 0.708 | 0.77 | -12.36 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Fib sóng 4 → 0.938 + R:R tối thiểu riêng khung 1W → 2 + SL tối đa (% Entry) → 0.425 | 104.51 | 51.4% | 0.706 | 8.22 | 12.71 | 0.575 | 0.831 | -11.05 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Khung lớn phải tăng (trend ≥) → 0.375 | 97.73 | 51% | 0.665 | 8.42 | 11.61 | 0.596 | 0.742 | -9.42 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + % chốt ở TP1 → 0.287 | 117.01 | 53.1% | 0.807 | 7.34 | 15.94 | 0.621 | 1.023 | -9.64 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Cổng Dow → TẮT + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 108.18 | 41.2% | 0.501 | 12.96 | 8.35 | 0.464 | 0.54 | -12.1 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: HVN cố định → 0.438 + Trọng số phần Entry (/100) → 28 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 95.24 | 50% | 0.635 | 8.42 | 11.31 | 0.572 | 0.708 | -10.39 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 105.05 | 47.8% | 0.669 | 9.09 | 11.56 | 0.564 | 0.778 | -11.73 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 112.58 | 50.7% | 0.782 | 7.76 | 14.51 | 0.651 | 0.924 | -8.34 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + SL tối đa (% Entry) → 0.425 | 117.18 | 53.1% | 0.808 | 7.25 | 16.16 | 0.624 | 1.022 | -11.06 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Cổng Dow → TẮT | 125.65 | 43% | 0.587 | 11.73 | 10.71 | 0.49 | 0.683 | -15.68 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Fib sóng 4 → 1.56 | 103.49 | 50% | 0.699 | 8.52 | 12.15 | 0.519 | 0.9 | -11.3 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: EMA 200 → 3 | 82.45 | 48.3% | 0.711 | 8.23 | 10.02 | 0.537 | 0.91 | -15.08 |  |

### Vòng 433 — ngẫu nhiên nhiều thông số · mốc: tổng 117.19R, win 53.1%, rủi ro tụt vốn 7.3R, lời÷rủi ro 16.05

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + SL tối đa (% Entry) → 0.35 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Mức MACD → 1.13 | 72.58 | 46.6% | 0.554 | 9.89 | 7.34 | 0.364 | 0.765 | -2.84 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần R:R (/100) → 28 + R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 1D → 7 | 112.01 | 47% | 0.752 | 9.39 | 11.93 | 0.645 | 0.854 | -10.78 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần Trend (/100) → 19 | 98.41 | 50.7% | 0.734 | 7.6 | 12.95 | 0.585 | 0.913 | -8.27 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + R:R tối thiểu tới TP1 → 2.38 | 96.77 | 46.8% | 0.612 | 8.75 | 11.06 | 0.512 | 0.708 | -10.97 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: HVN cố định → 0.563 | 117.69 | 51.7% | 0.823 | 7.42 | 15.86 | 0.676 | 0.99 | -13.33 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 116.99 | 52.7% | 0.801 | 7.53 | 15.54 | 0.614 | 1.022 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + R:R tối thiểu riêng khung 1D → 2 | 113.88 | 47.7% | 0.662 | 8.57 | 13.29 | 0.655 | 0.669 | -3.81 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: EMA 200 → 1 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 79.02 | 54.4% | 0.632 | 7.86 | 10.05 | 0.5 | 0.758 | -6.51 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Trọng số phần Elliott (/100) → 6 | 103.12 | 50% | 0.678 | 8.57 | 12.03 | 0.527 | 0.846 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + R:R tối thiểu tới TP1 → 2.63 | 26.29 | 37.7% | 0.381 | 10.7 | 2.46 | 0.254 | 0.546 | -1.95 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Cổng Dow → CHẶT + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Fib sóng 4 → 0.938 | 57.21 | 45.5% | 0.433 | 11.64 | 4.91 | 0.256 | 0.56 | -3.82 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 86.88 | 51.3% | 0.743 | 7.72 | 11.25 | 0.552 | 0.972 | -16.13 |  |

### Vòng 432 — ngẫu nhiên nhiều thông số · mốc: tổng 117.31R, win 53.5%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.20

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số TP tối đa → 2 + Điểm vùng: Break mây Ichimoku → 1 | 29.84 | 49.9% | 0.086 | 8.16 | 3.66 | 0.106 | 0.072 | -11.03 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cộng thêm ngưỡng điểm khung 1W → -1 + R:R tối thiểu riêng khung 1W → 2 + Lệnh chờ hết hạn sau (nến) → 8 | 89.99 | 45.9% | 0.566 | 10.42 | 8.64 | 0.418 | 0.724 | -8.89 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 21 → 1.13 | 100.3 | 46.6% | 0.623 | 10.54 | 9.52 | 0.598 | 0.646 | -4.86 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 28.2 | 30.9% | 0.171 | 25.87 | 1.09 | 0.025 | 0.338 | 2.5 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 117.31 | 53.5% | 0.815 | 7.24 | 16.2 | 0.634 | 1.022 | -8.84 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: HVN anchored → 0.188 + Số TP tối đa → 2 + Trọng số phần Trend (/100) → 12 | 101.91 | 51.7% | 0.713 | 7.88 | 12.93 | 0.679 | 0.749 | -9.42 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Divergence (/100) → 12 | 102.99 | 48.6% | 0.715 | 8.53 | 12.07 | 0.461 | 0.991 | -8.51 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Elliott (/100) → 10 | 115.79 | 52.8% | 0.815 | 7.41 | 15.63 | 0.65 | 1 | -8.84 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Trọng số phần Entry (/100) → 33 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 110.09 | 51.4% | 0.798 | 7.44 | 14.8 | 0.643 | 0.962 | -10.13 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 | 86.86 | 51.3% | 0.742 | 7.64 | 11.37 | 0.552 | 0.972 | -15.31 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần R:R (/100) → 28 | 115.79 | 52.8% | 0.815 | 7.41 | 15.63 | 0.65 | 1 | -8.84 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 200 → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần R:R (/100) → 28 | 105.05 | 50.4% | 0.745 | 7.97 | 13.18 | 0.534 | 0.972 | -8.81 |  |

### Vòng 431 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.20

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: POC anchored → 4 | 114.98 | 51.2% | 0.719 | 8.48 | 13.56 | 0.547 | 0.908 | -4.48 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức MACD → 1.13 + R:R tối thiểu riêng khung 1W → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 70.99 | 39.7% | 0.261 | 14.23 | 4.99 | 0.246 | 0.276 | -13.19 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 89.63 | 45.9% | 0.564 | 9.25 | 9.69 | 0.508 | 0.619 | -9.66 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 105.99 | 50.9% | 0.667 | 8.27 | 12.82 | 0.532 | 0.834 | -11.25 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Fib sóng 4 → 0.938 | 69.3 | 46% | 0.55 | 9.51 | 7.29 | 0.442 | 0.665 | -4.82 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần R:R (/100) → 28 + Điểm vùng: MACD cắt lên Signal → 0.438 | 69.9 | 42.7% | 0.597 | 10.5 | 6.66 | 0.55 | 0.653 | -4.68 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 68.52 | 47.2% | 0.557 | 9.07 | 7.55 | 0.461 | 0.658 | -3.8 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần Entry (/100) → 33 | 114.23 | 51% | 0.728 | 8.48 | 13.47 | 0.59 | 0.894 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Xác nhận khung nhỏ (A2) → W | 82.04 | 38.1% | 0.336 | 16.81 | 4.88 | 0.28 | 0.389 | -4.56 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: EMA 50 → 1.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 68 | 45.4% | 0.63 | 9.18 | 7.41 | 0.473 | 0.805 | -5.46 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần SL (/100) → 9 | 99.05 | 49% | 0.647 | 9.13 | 10.85 | 0.503 | 0.828 | -7.08 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần Entry (/100) → 33 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Biên mây Ichimoku → 1.05 | 100.93 | 50.3% | 0.706 | 8.02 | 12.58 | 0.603 | 0.822 | -11.6 |  |

### Vòng 430 — ngẫu nhiên nhiều thông số · mốc: tổng 109.63R, win 52.4%, rủi ro tụt vốn 7.61R, lời÷rủi ro 14.41

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Số TP tối đa → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 110.77 | 49.6% | 0.809 | 8.12 | 13.64 | 0.615 | 1.05 | -8.91 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Trọng số phần Trend (/100) → 12 + Cộng điểm phân kỳ dương ẩn → 3.5 | 107.99 | 51.4% | 0.76 | 7.66 | 14.1 | 0.631 | 0.914 | -9.67 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Break mây Ichimoku → 1 | 96.69 | 48.6% | 0.653 | 8.66 | 11.17 | 0.516 | 0.815 | -11.02 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 87.76 | 39.8% | 0.299 | 14.87 | 5.9 | 0.406 | 0.217 | -9.36 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Momentum (/100) → 21 | 109.44 | 52.1% | 0.76 | 7.54 | 14.51 | 0.614 | 0.938 | -9.66 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần Elliott (/100) → 6 + Khung lớn phải tăng (trend ≥) → 0.425 | 106.68 | 51.8% | 0.767 | 7.55 | 14.13 | 0.595 | 0.975 | -9.69 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Số TP tối đa → 2 + Điểm vùng: POC anchored → 2 | 94.31 | 48.6% | 0.637 | 8.85 | 10.66 | 0.535 | 0.751 | -8.63 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + R:R tối thiểu tới TP1 → 2.38 + % chốt ở TP1 → 0.307 + Điểm vùng: EMA 200 → 3 | 78.89 | 46.2% | 0.506 | 9.07 | 8.7 | 0.415 | 0.592 | -9.94 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: EMA 200 → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 77.08 | 46.8% | 0.501 | 8.81 | 8.75 | 0.434 | 0.571 | -10.31 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + R:R tối thiểu riêng khung 4H → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 110.76 | 37.7% | 0.271 | 18.15 | 6.1 | 0.352 | 0.192 | -19.72 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Cộng thêm ngưỡng điểm khung 1D → 4 | 104.02 | 51.4% | 0.712 | 7.73 | 13.46 | 0.613 | 0.83 | -10 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Ngưỡng điểm vào kèo → 74 | 109.18 | 52.1% | 0.758 | 7.63 | 14.31 | 0.624 | 0.917 | -9.66 |  |

### Vòng 429 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.5R, lời÷rủi ro 15.14

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: POC anchored → 4 | 94.91 | 51% | 0.637 | 8.42 | 11.27 | 0.61 | 0.666 | -4.25 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + SL tối đa (% Entry) → 0.425 | 106.82 | 51% | 0.727 | 7.66 | 13.95 | 0.587 | 0.894 | -10 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: EMA 200 → 3 | 101.3 | 49.6% | 0.718 | 8.04 | 12.6 | 0.525 | 0.933 | -9.62 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Trend (/100) → 12 | 105.12 | 48.2% | 0.756 | 8.35 | 12.59 | 0.607 | 0.917 | -9.65 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 112.11 | 52.1% | 0.768 | 7.79 | 14.39 | 0.624 | 0.933 | -9.66 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Divergence (/100) → 12 | 29.66 | 57.6% | 0.188 | 5.98 | 4.96 | 0.216 | 0.159 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: BOS → 3 | 112.49 | 49.6% | 0.821 | 8.35 | 13.47 | 0.603 | 1.085 | -8.91 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + SL tối đa (% Entry) → 0.425 + % chốt ở TP1 → 0.307 | 93.7 | 47.7% | 0.605 | 9.26 | 10.12 | 0.569 | 0.646 | -10.47 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: POC anchored → 2 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 61.87 | 45% | 0.48 | 10.61 | 5.83 | 0.392 | 0.58 | -4.85 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 20.15 | 39.3% | 0.36 | 8.93 | 2.26 | 0.091 | 0.694 | -3.77 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 33.93 | 57.7% | 0.218 | 5.86 | 5.79 | 0.278 | 0.159 | -10.94 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Trọng số phần Entry (/100) → 28 + Trọng số phần R:R (/100) → 28 | 111.64 | 51.7% | 0.77 | 7.52 | 14.85 | 0.624 | 0.94 | -9.66 |  |

### Vòng 428 — ngẫu nhiên nhiều thông số · mốc: tổng 116.78R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 15.78

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + R:R tối thiểu riêng khung 1D → 2 | 103.33 | 48.2% | 0.615 | 8.77 | 11.78 | 0.607 | 0.622 | -8.96 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: BOS → 1 | 116.87 | 53.1% | 0.806 | 7.4 | 15.79 | 0.626 | 1.016 | -9.67 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 21.8 | 63.2% | 0.229 | 5.24 | 4.16 | 0.236 | 0.222 | -6.86 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Mức MACD → 1.13 + % chốt ở TP1 → 0.307 | 109.55 | 50.3% | 0.745 | 7.98 | 13.73 | 0.543 | 0.98 | -9.5 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.84 | 58.1% | 0.193 | 5.74 | 5.2 | 0.228 | 0.159 | -11.38 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Trọng số phần SL (/100) → 7 + Đệm SL riêng khung 1D (ATR) → 0.3 | 109.74 | 46.9% | 0.677 | 10.17 | 10.79 | 0.638 | 0.715 | -6.35 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 58.08 | 40.7% | 0.328 | 14.43 | 4.02 | 0.385 | 0.268 | -12.85 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 98.71 | 51% | 0.663 | 8.43 | 11.71 | 0.606 | 0.728 | -8.11 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Ngưỡng điểm vào kèo → 77 + Xác nhận khung nhỏ (A2) → W | 84.64 | 38.9% | 0.347 | 15.62 | 5.42 | 0.318 | 0.37 | -6.57 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Số TP tối đa → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 85.43 | 50.4% | 0.73 | 8.08 | 10.57 | 0.533 | 0.968 | -16.13 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: EMA 200 → 3 + Điểm vùng: EMA 21 → 1.13 | 73.94 | 44.9% | 0.468 | 9.74 | 7.59 | 0.446 | 0.49 | -12.34 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 116.08 | 51.7% | 0.801 | 7.66 | 15.15 | 0.675 | 0.943 | -9.66 |  |

### Vòng 427 — ngẫu nhiên nhiều thông số · mốc: tổng 116.78R, win 53.1%, rủi ro tụt vốn 7.17R, lời÷rủi ro 16.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: EMA 21 → 1.13 + Trọng số phần Elliott (/100) → 10 | 101.04 | 48.4% | 0.652 | 9.11 | 11.09 | 0.466 | 0.872 | -7.42 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: HVN anchored → 0.313 + Lệnh chờ hết hạn sau (nến) → 6 | 90.21 | 49.3% | 0.663 | 8.15 | 11.07 | 0.529 | 0.828 | -8.61 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Trọng số phần R:R (/100) → 33 | 115.84 | 52.4% | 0.788 | 7.62 | 15.2 | 0.614 | 0.99 | -8.34 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 128.52 | 45.8% | 0.571 | 10.15 | 12.66 | 0.634 | 0.51 | -15.36 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Xác nhận khung nhỏ (A2) → W + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm tối thiểu của vùng đặt SL → 4 | 76.71 | 36.8% | 0.317 | 17.06 | 4.5 | 0.271 | 0.36 | -4.84 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Trend (/100) → 12 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 97.72 | 48% | 0.66 | 8.67 | 11.27 | 0.537 | 0.79 | -11.89 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: HVN anchored → 0.313 + R:R tối thiểu riêng khung 1W → 2 | 100.4 | 49.3% | 0.697 | 8.18 | 12.27 | 0.558 | 0.836 | -12.09 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Biên mây Ichimoku → 1.05 | 123.39 | 45.4% | 0.571 | 10.39 | 11.88 | 0.587 | 0.555 | -8.48 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Break mây Ichimoku → 1 | 102.5 | 49% | 0.697 | 8.58 | 11.95 | 0.537 | 0.873 | -11.02 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Fib sóng 4 → 1.56 | 89.1 | 49% | 0.59 | 8.92 | 9.99 | 0.512 | 0.673 | -10.37 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: Mức MACD → 0.875 + R:R tối thiểu tới TP1 → 2.38 | 88.15 | 45.6% | 0.558 | 9.22 | 9.56 | 0.503 | 0.613 | -10.97 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 37.16 | 40.4% | 0.418 | 10.34 | 3.59 | 0.297 | 0.566 | -6.21 |  |
