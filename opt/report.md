# Tối ưu tự động (chạy liên tục) — vòng 1476

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 17332 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 165 | 46.7% | 100.54R | 0.609 | 6.7R | 9.59R | 10.48 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 142 | 52.1% | 118.12R | 0.832 | 5.15R | 7.49R | 15.77 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 26 | 50% | 20.05R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 105 | 53.3% | 91.1R | 19 | 21.1% | -4.19R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 165 | 46.7% | 100.54R | 9.59R | 10.48 | 30 | 13.3% | -11.98R |
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

### Vòng 1476 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.49R, lời÷rủi ro 15.77

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần SL (/100) → 9 | 39.8 | 38.5% | 0.365 | 13.97 | 2.85 | 0.567 | 0.16 | -3.7 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: HVN anchored → 0.188 | 97.36 | 48.1% | 0.721 | 8.3 | 11.73 | 0.483 | 0.985 | -14.99 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Break mây Ichimoku → 1 + R:R tối thiểu riêng khung 1D → 2 | 107.69 | 48.5% | 0.661 | 8.32 | 12.94 | 0.634 | 0.684 | -9.48 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 1D → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Fib sóng 4 → 1.56 | 60.47 | 41.8% | 0.496 | 11.02 | 5.49 | 0.49 | 0.5 | -5.07 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần SL (/100) → 9 | 171.48 | 38.4% | 0.577 | 17.88 | 9.59 | 0.491 | 0.668 | -9.9 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.313 | 101.69 | 46.2% | 0.711 | 9.43 | 10.78 | 0.49 | 0.929 | -14.01 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 131.78 | 35.1% | 0.57 | 18.41 | 7.16 | 0.611 | 0.535 | -16.36 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần SL (/100) → 7 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 104.58 | 49% | 0.702 | 8.61 | 12.15 | 0.671 | 0.734 | -9.85 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 94.12 | 46.7% | 0.687 | 9.23 | 10.2 | 0.372 | 0.971 | -10.75 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: BOS → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 21 → 1.13 | 96.74 | 47.2% | 0.608 | 9.33 | 10.37 | 0.547 | 0.677 | -12.49 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + % chốt ở TP1 → 0.287 + Xác nhận khung nhỏ (A2) → W | 50.02 | 34.9% | 0.213 | 23.42 | 2.14 | 0.125 | 0.292 | -20.9 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Cộng thêm ngưỡng điểm khung 1W → -1 + Cộng thêm ngưỡng điểm khung 1D → 7 | 110.35 | 50% | 0.726 | 7.83 | 14.09 | 0.64 | 0.822 | -8.2 |  |

### Vòng 1475 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 15.83

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Trọng số phần R:R (/100) → 28 + SL tối đa (% Entry) → 0.425 | 117.1 | 51.4% | 0.825 | 7.49 | 15.63 | 0.7 | 0.96 | -11.13 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 72.89 | 45% | 0.565 | 10.01 | 7.28 | 0.454 | 0.693 | -11.18 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: EMA 200 → 3 + R:R tối thiểu riêng khung 1D → 2 | 97.91 | 44.3% | 0.586 | 9.58 | 10.22 | 0.524 | 0.641 | -9.93 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 71.05 | 42.3% | 0.477 | 11.44 | 6.21 | 0.518 | 0.44 | -7.37 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Cộng điểm phân kỳ dương ẩn → 3 | 135.41 | 42.3% | 0.434 | 11.36 | 11.92 | 0.444 | 0.426 | -7.45 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 112.43 | 49.7% | 0.786 | 7.95 | 14.14 | 0.62 | 0.97 | -11.08 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: EMA 50 → 1.13 | 87.57 | 45.1% | 0.617 | 9.83 | 8.91 | 0.403 | 0.856 | -10.57 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 96.37 | 45.8% | 0.669 | 9.38 | 10.27 | 0.537 | 0.821 | -8.13 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 118.12 | 52.1% | 0.832 | 7.46 | 15.83 | 0.656 | 1.034 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Cộng điểm phân kỳ dương ẩn → 3 | 39.16 | 42% | 0.445 | 9.35 | 4.19 | 0.362 | 0.544 | -5.18 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: BOS → 0 | 107.39 | 50% | 0.778 | 7.63 | 14.07 | 0.596 | 0.983 | -11.17 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 21 → 0.875 | 83.82 | 47.5% | 0.71 | 8.53 | 9.83 | 0.559 | 0.896 | -18.62 |  |

### Vòng 1474 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.5R, lời÷rủi ro 15.75

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 19.34 | 52.8% | 0.134 | 7.82 | 2.47 | 0.214 | 0.074 | -11.15 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Break mây Ichimoku → 1 | 91.29 | 47.8% | 0.681 | 8.43 | 10.83 | 0.482 | 0.886 | -15.18 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 37.73 | 40.9% | 0.429 | 9.61 | 3.93 | 0.352 | 0.525 | -5.18 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + SL tối đa (% Entry) → 0.425 | 114.42 | 52.1% | 0.806 | 7.65 | 14.96 | 0.694 | 0.931 | -12.16 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + R:R tối thiểu tới TP1 → 2.38 | 86.95 | 44.3% | 0.448 | 10.11 | 8.6 | 0.48 | 0.418 | -12.53 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Coin phải mạnh hơn BTC trong N ngày → 14 | 86.12 | 49.1% | 0.742 | 8.12 | 10.61 | 0.552 | 0.976 | -18.62 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Cộng điểm phân kỳ dương ẩn → 3 | 116.61 | 51% | 0.804 | 7.62 | 15.3 | 0.656 | 0.967 | -12.16 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 124.65 | 49.4% | 0.809 | 8.43 | 14.79 | 0.8 | 0.82 | -12.74 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần SL (/100) → 9 + Xác nhận khung nhỏ (A2) → W | 77.86 | 36.1% | 0.319 | 18.62 | 4.18 | 0.271 | 0.36 | -9.6 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 134.15 | 44.3% | 0.639 | 11.13 | 12.05 | 0.581 | 0.7 | -19.94 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: HVN cố định → 0.563 + Số TP tối đa → 1 | 117.37 | 51.7% | 0.821 | 7.69 | 15.26 | 0.656 | 1.008 | -10.84 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: POC volume profile cố định → 0.688 | 118.12 | 52.1% | 0.832 | 7.5 | 15.75 | 0.656 | 1.034 | -12.16 |  |

### Vòng 1473 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.53R, lời÷rủi ro 15.69

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 72.92 | 45.9% | 0.669 | 9.03 | 8.08 | 0.445 | 0.933 | -6.76 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Đệm SL riêng khung 1W (ATR) → 0.3 | 103.48 | 46.2% | 0.724 | 9.24 | 11.2 | 0.515 | 0.929 | -14.01 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Trọng số phần R:R (/100) → 33 + R:R tối thiểu tới TP1 → 2.38 | 107.3 | 47% | 0.654 | 8.66 | 12.39 | 0.55 | 0.756 | -13.47 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Biên mây Ichimoku → 1.35 | 97.12 | 45% | 0.575 | 10.72 | 9.06 | 0.371 | 0.801 | -10.13 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Trend (/100) → 12 | 104.33 | 44.6% | 0.705 | 9.83 | 10.61 | 0.526 | 0.889 | -12.99 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + R:R tối thiểu riêng khung 1D → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 86.74 | 41.7% | 0.516 | 10.65 | 8.14 | 0.429 | 0.593 | -10.79 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 104.95 | 47.7% | 0.704 | 8.58 | 12.23 | 0.655 | 0.755 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: EMA 50 → 0.75 | 104.63 | 48.3% | 0.722 | 8.63 | 12.12 | 0.574 | 0.884 | -12.34 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + % chốt ở TP1 → 0.307 | 126.37 | 44.2% | 0.559 | 10.74 | 11.77 | 0.569 | 0.55 | -15.82 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 34.85 | 58.1% | 0.203 | 7.08 | 4.92 | 0.299 | 0.128 | -6.88 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Khung lớn phải tăng (trend ≥) → 0.375 | 124.93 | 40.9% | 0.482 | 11.41 | 10.95 | 0.533 | 0.435 | -13.08 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 90.64 | 45% | 0.536 | 9.59 | 9.45 | 0.446 | 0.619 | -13.93 |  |

### Vòng 1472 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.88

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 108.97 | 49% | 0.731 | 8.6 | 12.67 | 0.572 | 0.907 | -14.13 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 106.55 | 47.2% | 0.67 | 9.41 | 11.32 | 0.474 | 0.89 | -12.92 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Momentum (/100) → 25 | 118.86 | 52.5% | 0.843 | 7.33 | 16.22 | 0.694 | 1.012 | -12.16 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 74.6 | 49.5% | 0.672 | 7.75 | 9.63 | 0.316 | 0.998 | -14.25 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Trọng số phần Elliott (/100) → 6 | 112.49 | 50.7% | 0.781 | 7.51 | 14.98 | 0.638 | 0.946 | -11.14 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + R:R tối thiểu riêng khung 4H → 2 + SL tối đa (% Entry) → 0.425 + Trọng số phần Trend (/100) → 19 | 135.41 | 42.3% | 0.434 | 11.54 | 11.73 | 0.444 | 0.426 | -5.97 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 81.06 | 43.4% | 0.463 | 11.17 | 7.26 | 0.456 | 0.47 | -9.81 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 22.44 | 40.2% | 0.274 | 9.53 | 2.35 | 0.417 | 0.123 | -6.28 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 97.7 | 43.4% | 0.558 | 10.23 | 9.55 | 0.627 | 0.5 | -7.91 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Đệm SL riêng khung 1W (ATR) → 0.3 | 102.3 | 45.6% | 0.687 | 9.71 | 10.54 | 0.523 | 0.857 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: POC volume profile cố định → 0.688 | 116.61 | 51% | 0.804 | 7.62 | 15.3 | 0.656 | 0.967 | -12.16 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: BOS → 2 + Xác nhận khung nhỏ (A2) → W | 90.42 | 36.8% | 0.374 | 16.45 | 5.5 | 0.342 | 0.403 | -7.65 |  |

### Vòng 1471 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 15.83

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Số TP tối đa → 3 | 117.34 | 51.8% | 0.832 | 7.56 | 15.52 | 0.695 | 0.984 | -11.13 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Elliott (/100) → 6 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN cố định → 0.438 | 124.37 | 41.2% | 0.4 | 12.03 | 10.34 | 0.383 | 0.415 | -12.11 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 28.33 | 56.3% | 0.179 | 6.04 | 4.69 | 0.242 | 0.121 | -7.17 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Cộng thêm ngưỡng điểm khung 1D → 7 + Trọng số phần Momentum (/100) → 21 | 113.15 | 51.4% | 0.797 | 7.81 | 14.49 | 0.596 | 1.029 | -9.21 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 115.9 | 50.7% | 0.816 | 7.77 | 14.92 | 0.661 | 0.99 | -11.13 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + R:R tối thiểu riêng khung 1D → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 108.66 | 44.8% | 0.667 | 9.26 | 11.73 | 0.67 | 0.664 | -7.31 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 111.07 | 50.7% | 0.761 | 7.89 | 14.08 | 0.591 | 0.956 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Trend (/100) → 12 | 106.52 | 47.2% | 0.67 | 9.13 | 11.67 | 0.566 | 0.784 | -10.88 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Trọng số phần Momentum (/100) → 25 + Cộng điểm phân kỳ dương ẩn → 3 | 116.65 | 51.4% | 0.821 | 7.64 | 15.27 | 0.656 | 1.012 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: EMA 200 → 3 | 81.67 | 44.4% | 0.575 | 10.62 | 7.69 | 0.375 | 0.764 | -13 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: BOS → 0 | 116.77 | 38.3% | 0.392 | 18.64 | 6.26 | 0.41 | 0.375 | -12.33 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Cổng Dow → TẮT + Điểm vùng: BOS → 2 | 134.56 | 44% | 0.644 | 11.25 | 11.96 | 0.591 | 0.699 | -17.09 |  |

### Vòng 1470 — ngẫu nhiên nhiều thông số · mốc: tổng 105.38R, win 52.3%, rủi ro tụt vốn 7.64R, lời÷rủi ro 13.79

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Mức MACD → 0.875 | 96.93 | 49.3% | 0.723 | 8.02 | 12.09 | 0.731 | 0.716 | -8.26 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 106.68 | 51.1% | 0.814 | 7.85 | 13.59 | 0.651 | 0.98 | -9.21 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 91.34 | 47.3% | 0.626 | 9.54 | 9.57 | 0.707 | 0.549 | -7.53 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: EMA 21 → 1.13 + Cộng điểm phân kỳ dương ẩn → 3 | 91.82 | 47.8% | 0.665 | 8.98 | 10.22 | 0.554 | 0.791 | -6.68 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Entry (/100) → 28 + Điểm vùng: HVN cố định → 0.563 | 72.78 | 43.8% | 0.601 | 10.36 | 7.03 | 0.479 | 0.753 | -4.35 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Cộng thêm ngưỡng điểm khung 1W → -1 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: Mức MACD → 1.13 | 102.49 | 50% | 0.776 | 8.19 | 12.51 | 0.662 | 0.902 | -9.27 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + R:R tối thiểu riêng khung 1W → 2 | 97.47 | 39% | 0.404 | 15.27 | 6.38 | 0.396 | 0.412 | -9.86 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: EMA 21 → 1.13 + SL tối đa (% Entry) → 0.425 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 114.51 | 50% | 0.784 | 8.56 | 13.38 | 0.895 | 0.677 | -5.89 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Số TP tối đa → 1 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 169.14 | 39.9% | 0.62 | 16.59 | 10.2 | 0.6 | 0.64 | -9.2 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: EMA 21 → 1.13 | 95.58 | 49.6% | 0.741 | 8.02 | 11.92 | 0.657 | 0.826 | -8.25 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 104.63 | 51.9% | 0.811 | 7.88 | 13.28 | 0.717 | 0.91 | -7.96 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 | 104.32 | 51.6% | 0.815 | 7.73 | 13.5 | 0.695 | 0.947 | -9.27 |  |

### Vòng 1469 — ngẫu nhiên nhiều thông số · mốc: tổng 116.91R, win 51.8%, rủi ro tụt vốn 7.78R, lời÷rủi ro 15.03

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Lệnh chờ hết hạn sau (nến) → 8 | 93.34 | 46.2% | 0.644 | 8.94 | 10.44 | 0.432 | 0.883 | -14.17 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 116.9 | 51.8% | 0.829 | 7.68 | 15.22 | 0.656 | 1.032 | -8.76 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Số TP tối đa → 1 | 116.91 | 51.8% | 0.829 | 7.78 | 15.03 | 0.656 | 1.032 | -8.76 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 73.61 | 42.5% | 0.613 | 10.47 | 7.03 | 0.414 | 0.849 | -5.65 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần Entry (/100) → 33 | 94.11 | 48.3% | 0.658 | 8.66 | 10.87 | 0.615 | 0.707 | -8.96 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: EMA 200 → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 67.41 | 42.3% | 0.519 | 10.2 | 6.61 | 0.547 | 0.486 | -9.62 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần Entry (/100) → 33 | 104.18 | 48.4% | 0.681 | 8.9 | 11.71 | 0.591 | 0.79 | -5.54 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: EMA 50 → 0.75 | 112.43 | 51.1% | 0.797 | 7.81 | 14.4 | 0.598 | 1.024 | -9.78 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + R:R tối thiểu tới TP1 → 2.38 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần R:R (/100) → 33 | 85.98 | 42.7% | 0.465 | 12.78 | 6.73 | 0.525 | 0.415 | -10.45 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm tối thiểu của vùng đặt SL → 4 | 110.43 | 46.4% | 0.722 | 8.84 | 12.49 | 0.598 | 0.861 | -10.05 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Trọng số phần SL (/100) → 7 | 115.45 | 51.4% | 0.825 | 7.28 | 15.86 | 0.65 | 1.026 | -9.78 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Trend (/100) → 19 | 116.91 | 51.8% | 0.829 | 7.78 | 15.03 | 0.656 | 1.032 | -9.78 |  |

### Vòng 1468 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 15.83

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: EMA 50 → 1.13 | 115.08 | 50% | 0.81 | 7.97 | 14.44 | 0.629 | 1.025 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 110.58 | 49% | 0.752 | 8.39 | 13.18 | 0.538 | 0.988 | -11.04 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Khung lớn phải tăng (trend ≥) → 0.375 | 38.81 | 40.7% | 0.426 | 9.79 | 3.96 | 0.363 | 0.504 | -5.51 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần Elliott (/100) → 6 + R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Trend (/100) → 19 | 133.06 | 41.7% | 0.417 | 12 | 11.09 | 0.43 | 0.406 | -6.45 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Break mây Ichimoku → 3 | 108.72 | 48.4% | 0.684 | 8.89 | 12.23 | 0.562 | 0.82 | -11.9 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: HVN anchored → 0.188 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 114.08 | 48% | 0.751 | 8.58 | 13.3 | 0.597 | 0.921 | -12.55 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.313 | 176.35 | 37.8% | 0.551 | 17.96 | 9.82 | 0.564 | 0.539 | -10.97 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Momentum (/100) → 21 | 83.79 | 45.8% | 0.71 | 9.09 | 9.22 | 0.464 | 0.991 | -12.15 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: HVN anchored → 0.188 | 118.12 | 52.1% | 0.832 | 7.46 | 15.83 | 0.656 | 1.034 | -12.16 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: BOS → 2 | 114.92 | 50.3% | 0.793 | 7.73 | 14.87 | 0.65 | 0.95 | -10.74 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 38.92 | 41.6% | 0.437 | 9.53 | 4.08 | 0.362 | 0.525 | -5.18 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Coin phải mạnh hơn BTC trong N ngày → 14 | 86.12 | 49.1% | 0.742 | 8.19 | 10.52 | 0.552 | 0.976 | -18.62 |  |

### Vòng 1467 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.53R, lời÷rủi ro 15.69

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Cộng thêm ngưỡng điểm khung 1D → 4 + Trọng số phần Trend (/100) → 19 + Trọng số phần Momentum (/100) → 25 | 117.66 | 51.7% | 0.823 | 7.57 | 15.54 | 0.656 | 1.012 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Khung lớn phải tăng (trend ≥) → 0.375 | 107.08 | 49.3% | 0.754 | 7.94 | 13.49 | 0.535 | 0.992 | -12.16 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: EMA 200 → 1 + Ngưỡng điểm vào kèo → 74 + Trọng số phần R:R (/100) → 33 | 118.73 | 51.3% | 0.751 | 8.19 | 14.5 | 0.635 | 0.894 | -3.9 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: BOS → 2 | 118.11 | 51.8% | 0.838 | 7.47 | 15.81 | 0.7 | 0.99 | -11.13 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Trọng số phần R:R (/100) → 33 + Trọng số phần Momentum (/100) → 21 | 118.12 | 52.1% | 0.832 | 7.53 | 15.69 | 0.656 | 1.034 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Coin phải mạnh hơn BTC trong N ngày → 14 | 83.19 | 49.6% | 0.711 | 8.16 | 10.19 | 0.552 | 0.903 | -18.62 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Ngưỡng điểm vào kèo → 77 | 27.78 | 55.7% | 0.186 | 5.75 | 4.83 | 0.212 | 0.162 | -7.45 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Cổng Dow → TẮT | 76.15 | 38.9% | 0.401 | 16.07 | 4.74 | 0.604 | 0.229 | -22.88 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 73.64 | 46.2% | 0.558 | 9.45 | 7.79 | 0.416 | 0.718 | -10.31 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: MACD cắt lên Signal → 0.563 | 118.12 | 52.1% | 0.832 | 7.53 | 15.69 | 0.656 | 1.034 | -12.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 + Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần SL (/100) → 7 | 108.28 | 45.9% | 0.637 | 9.08 | 11.93 | 0.622 | 0.651 | -9.61 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: BOS → 2 | 117.11 | 51.7% | 0.819 | 7.79 | 15.03 | 0.656 | 1.004 | -12.16 |  |
