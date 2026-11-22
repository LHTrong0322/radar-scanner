# Tối ưu tự động (chạy liên tục) — vòng 1115

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 13012 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 98.78R | 0.595 | 5.7R | 9.71R | 10.17 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 143 | 53.1% | 121.88R | 0.852 | 5.15R | 7.09R | 17.19 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

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
| Bot thật | 166 | 47% | 98.78R | 9.71R | 10.17 | 30 | 13.3% | -11.98R |
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

### Vòng 1111 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.04R, lời÷rủi ro 17.31

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 110.28 | 47.3% | 0.755 | 8.84 | 12.48 | 0.519 | 0.986 | -14.01 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm tối thiểu của vùng đặt SL → 2 | 119.75 | 53.5% | 0.832 | 7.2 | 16.63 | 0.672 | 1.01 | -9.84 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 78.76 | 46.3% | 0.729 | 8.61 | 9.15 | 0.541 | 0.964 | -2 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Coin phải mạnh hơn BTC trong N ngày → 14 | 89.89 | 50.4% | 0.768 | 7.57 | 11.87 | 0.571 | 1.006 | -18.62 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 105.47 | 49.4% | 0.668 | 8.6 | 12.26 | 0.657 | 0.678 | -10.74 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: POC anchored → 2 + Điểm vùng: BOS → 0 + Điểm vùng: Break mây Ichimoku → 1 | 98.83 | 49.6% | 0.701 | 7.85 | 12.59 | 0.602 | 0.805 | -13.5 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: BOS → 2 + Điểm vùng: EMA 200 → 1 | 118.72 | 51% | 0.776 | 7.72 | 15.38 | 0.623 | 0.968 | -7.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: EMA 21 → 1.13 | 100.95 | 45.1% | 0.577 | 9.68 | 10.43 | 0.538 | 0.615 | -9.52 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC volume profile cố định → 0.688 | 20.05 | 41.1% | 0.358 | 9.02 | 2.22 | 0.167 | 0.535 | -2.77 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: BOS → 2 | 113.56 | 50.3% | 0.794 | 7.76 | 14.63 | 0.584 | 1.026 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + SL tối đa (% Entry) → 0.425 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: POC anchored → 2 | 100.38 | 48.3% | 0.665 | 8.73 | 11.5 | 0.501 | 0.835 | -11.46 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: POC anchored → 2 + % chốt ở TP1 → 0.287 + Cổng Dow → TẮT | 93.79 | 40.5% | 0.469 | 12.74 | 7.36 | 0.436 | 0.506 | -19.06 |  |

### Vòng 1110 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.05R, lời÷rủi ro 17.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm tối thiểu của vùng đặt SL → 4 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 135.2 | 44.4% | 0.606 | 10.69 | 12.65 | 0.643 | 0.57 | -14.05 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm tối thiểu của vùng đặt SL → 2 | 117.68 | 53.1% | 0.823 | 7.23 | 16.28 | 0.672 | 0.995 | -11.13 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Cộng thêm ngưỡng điểm khung 1D → 3 | 120.06 | 51.7% | 0.828 | 7.27 | 16.51 | 0.645 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + R:R tối thiểu riêng khung 1W → 2 | 74.5 | 46.2% | 0.573 | 9.28 | 8.03 | 0.477 | 0.678 | -13.47 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 102.41 | 51.1% | 0.726 | 7.68 | 13.33 | 0.661 | 0.799 | -10.73 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.41 | 51.1% | 0.726 | 7.68 | 13.33 | 0.661 | 0.799 | -11.75 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: EMA 200 → 3 | 89.91 | 43.6% | 0.642 | 10.13 | 8.88 | 0.382 | 0.888 | -15.03 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 50 → 1.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 74.17 | 44.8% | 0.639 | 9.26 | 8.01 | 0.635 | 0.644 | -4.13 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm tối thiểu của vùng đặt SL → 4 | 114.25 | 49.4% | 0.732 | 8.24 | 13.87 | 0.598 | 0.877 | -12.46 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Mức MACD → 1.13 + Trọng số phần Momentum (/100) → 21 + Trọng số phần Elliott (/100) → 10 | 102.81 | 43.6% | 0.69 | 9.86 | 10.43 | 0.479 | 0.903 | -14.01 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng điểm phân kỳ dương ẩn → 3 | 98.92 | 39.5% | 0.611 | 12.28 | 8.06 | 0.455 | 0.778 | -18.34 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Xác nhận khung nhỏ (A2) → W + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 126.22 | 39.8% | 0.452 | 14.98 | 8.43 | 0.436 | 0.467 | -6.29 |  |

### Vòng 1109 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.1R, lời÷rủi ro 17.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + R:R tối thiểu riêng khung 1W → 2 | 38.91 | 31.4% | 0.226 | 22.81 | 1.71 | 0.116 | 0.348 | 0.84 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Số TP tối đa → 1 + Điểm tối thiểu của vùng đặt SL → 2 | 117.68 | 53.1% | 0.823 | 7.24 | 16.25 | 0.672 | 0.995 | -11.13 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 73.6 | 46.6% | 0.624 | 8.56 | 8.6 | 0.316 | 0.921 | -10.22 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 1D → 3 | 111.27 | 46.6% | 0.639 | 9.09 | 12.24 | 0.585 | 0.691 | -9.99 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 118.72 | 52.5% | 0.854 | 7.18 | 16.53 | 0.66 | 1.068 | -12.17 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: HVN anchored → 0.188 | 31.29 | 57.3% | 0.199 | 5.5 | 5.69 | 0.215 | 0.185 | -8.18 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Khung lớn phải tăng (trend ≥) → 0.425 | 113.14 | 45.9% | 0.712 | 10.15 | 11.15 | 0.66 | 0.757 | -13.16 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 77 | 38.6% | 0.45 | 13.57 | 5.67 | 0.509 | 0.391 | -9.2 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 99.71 | 50% | 0.692 | 8.1 | 12.31 | 0.618 | 0.775 | -11.58 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + R:R tối thiểu riêng khung 1W → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 73.37 | 46.5% | 0.644 | 9.04 | 8.12 | 0.444 | 0.858 | -6.83 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: POC anchored → 2 + Điểm vùng: EMA 21 → 1.13 + Ngưỡng điểm vào kèo → 77 | 97.46 | 47.1% | 0.637 | 8.65 | 11.27 | 0.538 | 0.74 | -12 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 99.71 | 50% | 0.692 | 8.1 | 12.31 | 0.618 | 0.775 | -11.58 |  |

### Vòng 1108 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.2R, lời÷rủi ro 16.93

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Momentum (/100) → 21 + R:R tối thiểu riêng khung 4H → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 106.09 | 34.6% | 0.27 | 22.86 | 4.64 | 0.24 | 0.291 | -6.93 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Ngưỡng điểm vào kèo → 74 + Cộng thêm ngưỡng điểm khung 1W → -1 | 116.82 | 51% | 0.817 | 7.37 | 15.85 | 0.63 | 1.024 | -12.16 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Biên mây Ichimoku → 1.35 | 118.1 | 51.7% | 0.814 | 7.6 | 15.54 | 0.627 | 1.027 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Cộng thêm ngưỡng điểm khung 1W → -1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 96.98 | 44.9% | 0.622 | 9.98 | 9.72 | 0.479 | 0.788 | -5.55 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 | 120.32 | 52.4% | 0.841 | 7.29 | 16.5 | 0.67 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 99.44 | 46.5% | 0.691 | 8.83 | 11.26 | 0.551 | 0.847 | -8.13 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: EMA 200 → 3 | 71.53 | 46.4% | 0.572 | 9.17 | 7.8 | 0.432 | 0.719 | -18.52 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Biên mây Ichimoku → 1.35 | 117.65 | 51.4% | 0.806 | 7.63 | 15.42 | 0.627 | 1.005 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 117.17 | 53.1% | 0.808 | 7.16 | 16.36 | 0.68 | 0.942 | -10.87 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: EMA 50 → 0.75 | 137.73 | 45% | 0.653 | 10.83 | 12.72 | 0.558 | 0.75 | -20.31 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Đệm SL riêng khung 4H (ATR) → 0.3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 151.84 | 35.8% | 0.513 | 18.9 | 8.03 | 0.462 | 0.563 | -1.26 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Cổng Dow → CHẶT + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 66.43 | 39.7% | 0.28 | 12.17 | 5.46 | 0.218 | 0.324 | -10.25 |  |

### Vòng 1107 — ngẫu nhiên nhiều thông số · mốc: tổng 120.86R, win 53.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.42

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần Trend (/100) → 12 | 109.06 | 48.4% | 0.695 | 9.01 | 12.1 | 0.64 | 0.753 | -11.14 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng thêm ngưỡng điểm khung 1W → -1 | 128.98 | 50.6% | 0.838 | 7.99 | 16.14 | 0.815 | 0.864 | -12.74 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: MACD cắt lên Signal → 0.438 + Lệnh chờ hết hạn sau (nến) → 6 | 94.76 | 48.9% | 0.682 | 8.91 | 10.64 | 0.5 | 0.894 | -9.21 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: BOS → 2 | 111.68 | 48.7% | 0.735 | 8.9 | 12.55 | 0.551 | 0.928 | -11.53 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng điểm phân kỳ dương ẩn → 3 | 74.86 | 45.9% | 0.674 | 9.34 | 8.01 | 0.445 | 0.934 | -5.79 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần R:R (/100) → 33 + R:R tối thiểu tới TP1 → 2.38 | 101.35 | 47% | 0.618 | 9.03 | 11.22 | 0.5 | 0.73 | -12.45 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Trọng số phần Divergence (/100) → 9 + Lệnh chờ hết hạn sau (nến) → 6 | 99.7 | 50.8% | 0.755 | 7.66 | 13.02 | 0.616 | 0.912 | -11.79 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 122.38 | 49% | 0.8 | 7.9 | 15.49 | 0.757 | 0.849 | -12.56 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Lệnh chờ hết hạn sau (nến) → 8 | 115.71 | 50.3% | 0.747 | 8.29 | 13.96 | 0.594 | 0.918 | -13.75 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Elliott (/100) → 10 + SL tối đa (% Entry) → 0.425 | 98.78 | 44.9% | 0.591 | 9.38 | 10.53 | 0.511 | 0.663 | -13.47 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: HVN cố định → 0.438 | 117.94 | 51.7% | 0.813 | 7.65 | 15.42 | 0.631 | 1.02 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 | 101.4 | 49.3% | 0.685 | 8.74 | 11.6 | 0.515 | 0.864 | -12.16 |  |

### Vòng 1106 — ngẫu nhiên nhiều thông số · mốc: tổng 119.77R, win 52.8%, rủi ro tụt vốn 7.32R, lời÷rủi ro 16.36

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 | 93.1 | 46.1% | 0.612 | 10 | 9.31 | 0.372 | 0.873 | -11.18 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm tối thiểu của vùng đặt SL → 4 + Cộng thêm ngưỡng điểm khung 1W → 2 | 36.07 | 39.6% | 0.396 | 10.67 | 3.38 | 0.35 | 0.45 | -7.55 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 34.18 | 38.5% | 0.376 | 10.9 | 3.14 | 0.314 | 0.455 | -7.55 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + R:R tối thiểu tới TP1 → 2.38 + Cổng Dow → TẮT | 86.62 | 40.5% | 0.394 | 14.79 | 5.86 | 0.5 | 0.284 | -18.92 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN anchored → 0.188 | 125.74 | 41.6% | 0.406 | 12.16 | 10.34 | 0.358 | 0.446 | -4.37 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Ngưỡng điểm vào kèo → 77 | 46.78 | 32.2% | 0.264 | 22.15 | 2.11 | 0.139 | 0.399 | 1.78 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 74.22 | 45.9% | 0.669 | 9.38 | 7.91 | 0.445 | 0.922 | -5.79 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 74.22 | 45.9% | 0.669 | 9.38 | 7.91 | 0.445 | 0.922 | -5.79 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: HVN cố định → 0.563 | 104.06 | 47% | 0.634 | 8.9 | 11.69 | 0.508 | 0.755 | -13.47 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần Divergence (/100) → 12 + Cổng Dow → CHẶT | 84.14 | 52.3% | 0.758 | 6.96 | 12.09 | 0.347 | 1.107 | -14.25 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Momentum (/100) → 25 + Xác nhận khung nhỏ (A2) → W | 117.86 | 39.1% | 0.452 | 15.31 | 7.7 | 0.478 | 0.428 | -6.68 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: BOS → 2 + Điểm vùng: HVN anchored → 0.313 | 114.52 | 50.7% | 0.784 | 7.85 | 14.59 | 0.632 | 0.95 | -10.87 |  |
