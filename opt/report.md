# Tối ưu tự động (chạy liên tục) — vòng 1206

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 14104 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 98.78R | 0.595 | 5.7R | 9.72R | 10.16 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 143 | 53.1% | 121.88R | 0.852 | 5.15R | 7.06R | 17.26 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

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
| Bot thật | 166 | 47% | 98.78R | 9.72R | 10.16 | 30 | 13.3% | -11.98R |
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

### Vòng 1206 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: POC volume profile cố định → 0.688 | 106.31 | 46.7% | 0.644 | 8.7 | 12.22 | 0.483 | 0.804 | -13.47 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Trọng số phần Trend (/100) → 19 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 121.23 | 52.4% | 0.836 | 6.99 | 17.34 | 0.66 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 32.37 | 57.6% | 0.205 | 5.66 | 5.72 | 0.226 | 0.185 | -8.19 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Lệnh chờ hết hạn sau (nến) → 6 | 96.96 | 48.5% | 0.713 | 8.43 | 11.5 | 0.619 | 0.813 | -10.77 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Ngưỡng điểm vào kèo → 77 | 33.48 | 40% | 0.394 | 10.35 | 3.23 | 0.272 | 0.538 | -5.18 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 109.26 | 49% | 0.724 | 8.31 | 13.15 | 0.655 | 0.791 | -9.86 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + % chốt ở TP1 → 0.307 + Điểm vùng: POC anchored → 4 + Cộng thêm ngưỡng điểm khung 1D → 3 | 105.81 | 50.7% | 0.696 | 8.36 | 12.66 | 0.635 | 0.756 | -5.14 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Lệnh chờ hết hạn sau (nến) → 8 + Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 88.02 | 33% | 0.229 | 28.87 | 3.05 | 0.171 | 0.286 | -35.77 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 1D (ATR) → 0.3 | 62.32 | 40% | 0.519 | 12.3 | 5.07 | 0.31 | 0.697 | -5.58 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần SL (/100) → 9 | 125.94 | 50.6% | 0.807 | 8.29 | 15.19 | 0.794 | 0.823 | -11.45 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 76.33 | 46.4% | 0.694 | 8.87 | 8.61 | 0.445 | 0.981 | -5.79 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Ngưỡng điểm vào kèo → 74 | 79.05 | 43.7% | 0.664 | 9.28 | 8.52 | 0.443 | 0.921 | -6.83 |  |

### Vòng 1205 — ngẫu nhiên nhiều thông số · mốc: tổng 120.31R, win 52.8%, rủi ro tụt vốn 7.03R, lời÷rủi ro 17.11

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 85.67 | 49.6% | 0.732 | 7.84 | 10.93 | 0.546 | 0.949 | -17.61 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + R:R tối thiểu riêng khung 1D → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 108.49 | 46.4% | 0.654 | 8.87 | 12.23 | 0.62 | 0.684 | -7.92 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: EMA 200 → 1 | 117.48 | 50.7% | 0.794 | 7.77 | 15.12 | 0.665 | 0.945 | -6.15 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Biên mây Ichimoku → 1.35 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 109.73 | 45.7% | 0.677 | 10.63 | 10.32 | 0.618 | 0.73 | -9.14 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 107.58 | 49% | 0.742 | 7.98 | 13.48 | 0.554 | 0.966 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Trọng số phần SL (/100) → 7 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần R:R (/100) → 28 | 88.12 | 46% | 0.547 | 9.63 | 9.15 | 0.494 | 0.6 | -9.13 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: EMA 21 → 0.875 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 122.31 | 49.7% | 0.789 | 8.27 | 14.79 | 0.756 | 0.827 | -10.44 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Coin phải mạnh hơn BTC trong N ngày → 14 | 68.08 | 47.8% | 0.756 | 8.2 | 8.3 | 0.499 | 1.038 | -11.25 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + R:R tối thiểu riêng khung 1D → 2 | 100.26 | 45.9% | 0.59 | 9.38 | 10.69 | 0.623 | 0.561 | -7.25 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + R:R tối thiểu riêng khung 4H → 2 | 119.6 | 40.6% | 0.382 | 12.37 | 9.67 | 0.379 | 0.385 | -4.36 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm vùng: EMA 50 → 1.13 + % chốt ở TP1 → 0.307 | 117.45 | 51.1% | 0.833 | 7.47 | 15.72 | 0.644 | 1.048 | -10.13 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Xác nhận khung nhỏ (A2) → W | 128.87 | 40.1% | 0.483 | 14.18 | 9.09 | 0.478 | 0.487 | -5.44 |  |

### Vòng 1204 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.16R, lời÷rủi ro 17.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Biên mây Ichimoku → 1.05 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC anchored → 2 | 68.6 | 46% | 0.607 | 8.83 | 7.77 | 0.439 | 0.791 | -5.58 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Break mây Ichimoku → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 117.04 | 47.3% | 0.693 | 9.08 | 12.89 | 0.764 | 0.613 | -10.63 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Biên mây Ichimoku → 1.05 | 28.43 | 58% | 0.181 | 5.85 | 4.86 | 0.206 | 0.158 | -8.35 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần Trend (/100) → 19 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: BOS → 2 | 116.61 | 51% | 0.793 | 7.66 | 15.22 | 0.585 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 128.94 | 45% | 0.558 | 10.53 | 12.25 | 0.574 | 0.543 | -15.8 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: HVN cố định → 0.563 | 87.29 | 52.7% | 0.779 | 6.88 | 12.69 | 0.381 | 1.125 | -14.25 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Elliott (/100) → 6 | 114.12 | 50% | 0.722 | 8.26 | 13.82 | 0.595 | 0.863 | -11.03 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 119.96 | 51.6% | 0.774 | 7.85 | 15.28 | 0.661 | 0.904 | -8 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 133.33 | 45.7% | 0.58 | 10.57 | 12.61 | 0.613 | 0.548 | -12.85 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 118.43 | 53.1% | 0.817 | 7.56 | 15.67 | 0.598 | 1.065 | -8.9 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Trend (/100) → 12 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 105.08 | 49% | 0.735 | 8.06 | 13.04 | 0.609 | 0.856 | -11.88 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 116.24 | 51.7% | 0.813 | 7.57 | 15.36 | 0.677 | 0.963 | -11.55 |  |

### Vòng 1203 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.09

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 90.07 | 38.8% | 0.421 | 16.12 | 5.59 | 0.421 | 0.421 | -4.42 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: MACD cắt lên Signal → 0.438 + Cổng Dow → TẮT | 133.89 | 42.5% | 0.626 | 12.03 | 11.13 | 0.488 | 0.769 | -16.74 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần R:R (/100) → 28 | 118.91 | 51.4% | 0.826 | 7.41 | 16.05 | 0.677 | 0.987 | -9.82 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: HVN cố định → 0.563 + R:R tối thiểu riêng khung 1D → 2 | 145.09 | 41% | 0.458 | 13.67 | 10.61 | 0.471 | 0.446 | -13.52 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 101.23 | 48% | 0.675 | 9.37 | 10.8 | 0.482 | 0.901 | -10.59 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 117.52 | 50.7% | 0.816 | 7.63 | 15.4 | 0.633 | 1.026 | -11.14 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Trọng số phần Divergence (/100) → 9 | 111.42 | 50.4% | 0.813 | 7.68 | 14.51 | 0.571 | 1.074 | -12.19 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 117.43 | 41.5% | 0.567 | 12.24 | 9.59 | 0.515 | 0.622 | -16.6 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Entry (/100) → 28 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 117.8 | 44% | 0.673 | 10.81 | 10.9 | 0.765 | 0.595 | -10.06 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 103.92 | 50.7% | 0.722 | 8 | 12.99 | 0.631 | 0.823 | -11 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Ngưỡng điểm vào kèo → 77 | 116.24 | 51.7% | 0.813 | 7.52 | 15.46 | 0.677 | 0.963 | -11.55 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Divergence (/100) → 9 + Ngưỡng điểm vào kèo → 74 | 116.7 | 51% | 0.783 | 7.51 | 15.54 | 0.587 | 1.005 | -12.16 |  |

### Vòng 1202 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.09

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Xác nhận khung nhỏ (A2) → W | 129.19 | 40.6% | 0.457 | 15.46 | 8.36 | 0.468 | 0.446 | -7.74 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 | 90.6 | 50% | 0.676 | 8.41 | 10.77 | 0.595 | 0.77 | -11.39 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 76.2 | 48.8% | 0.62 | 8.65 | 8.81 | 0.554 | 0.695 | -18.22 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: POC anchored → 4 + % chốt ở TP1 → 0.287 | 113.04 | 47.7% | 0.65 | 8.91 | 12.69 | 0.64 | 0.658 | -0.84 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 1W → -1 | 121.88 | 53.1% | 0.852 | 7.13 | 17.09 | 0.672 | 1.057 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: EMA 50 → 1.13 | 114.86 | 51.4% | 0.787 | 7.36 | 15.61 | 0.633 | 0.958 | -11.14 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 | 160.81 | 37.7% | 0.501 | 18.31 | 8.78 | 0.431 | 0.568 | -11.48 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Số TP tối đa → 3 + Điểm vùng: HVN anchored → 0.188 + Ngưỡng điểm vào kèo → 77 | 113.49 | 50.7% | 0.799 | 7.49 | 15.15 | 0.654 | 0.957 | -11.55 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Xác nhận khung nhỏ (A2) → W | 137.26 | 41.3% | 0.477 | 14.2 | 9.67 | 0.47 | 0.483 | -3.88 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Elliott (/100) → 6 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 74.77 | 48.8% | 0.608 | 8.41 | 8.89 | 0.595 | 0.623 | -18.22 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Trọng số phần R:R (/100) → 28 | 116.89 | 50.7% | 0.812 | 7.7 | 15.18 | 0.632 | 1.013 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: POC volume profile cố định → 0.688 | 121.43 | 52.8% | 0.843 | 7.03 | 17.27 | 0.672 | 1.035 | -12.16 |  |

### Vòng 1201 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + % chốt ở TP1 → 0.287 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 102.05 | 50.4% | 0.816 | 7.81 | 13.07 | 0.541 | 1.115 | -12.85 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần R:R (/100) → 33 | 120.72 | 52.4% | 0.833 | 7.43 | 16.25 | 0.654 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Khung lớn phải tăng (trend ≥) → 0.425 | 107.37 | 50.3% | 0.721 | 8.22 | 13.06 | 0.542 | 0.912 | -11.06 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + R:R tối thiểu riêng khung 1D → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 109.32 | 46.4% | 0.651 | 8.58 | 12.74 | 0.586 | 0.711 | -8.93 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: POC anchored → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Fib sóng 4 → 1.56 | 112.84 | 40.6% | 0.355 | 12.91 | 8.74 | 0.316 | 0.389 | -5.94 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trọng số phần Entry (/100) → 28 + Trọng số phần SL (/100) → 9 | 66.71 | 44.3% | 0.509 | 10.51 | 6.35 | 0.375 | 0.673 | -11.18 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Cộng thêm ngưỡng điểm khung 4H → 2 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 99.11 | 46.3% | 0.612 | 8.76 | 11.31 | 0.496 | 0.719 | -13.47 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Đệm SL riêng khung 1W (ATR) → 0.3 | 106.08 | 46.6% | 0.727 | 9.11 | 11.64 | 0.519 | 0.929 | -12.69 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Trọng số phần SL (/100) → 9 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Cộng thêm ngưỡng điểm khung 4H → 2 | 104.48 | 49% | 0.701 | 8.33 | 12.54 | 0.653 | 0.75 | -11.14 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 93.13 | 44.1% | 0.495 | 10.03 | 9.29 | 0.518 | 0.475 | -8.92 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Lệnh chờ hết hạn sau (nến) → 6 | 101.23 | 51.5% | 0.779 | 7.18 | 14.1 | 0.616 | 0.968 | -11.79 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + R:R tối thiểu riêng khung 4H → 2 | 123.82 | 41.2% | 0.398 | 11.99 | 10.33 | 0.358 | 0.432 | -7.38 |  |

### Vòng 1200 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.09

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: POC anchored → 4 + Điểm tối thiểu của vùng đặt SL → 4 | 113.41 | 49.7% | 0.751 | 8.14 | 13.93 | 0.575 | 0.929 | -4.82 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Cộng thêm ngưỡng điểm khung 1W → 2 | 97.01 | 47.5% | 0.688 | 8.71 | 11.14 | 0.61 | 0.771 | -11.2 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Cộng thêm ngưỡng điểm khung 1W → 2 | 103.93 | 49.7% | 0.688 | 8.48 | 12.26 | 0.514 | 0.87 | -8.2 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 1W (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: EMA 200 → 3 | 79.2 | 43.2% | 0.57 | 10.62 | 7.46 | 0.394 | 0.733 | -11.08 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Break mây Ichimoku → 3 | 109.83 | 39.6% | 0.402 | 15.48 | 7.09 | 0.419 | 0.386 | -3.21 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 | 91.53 | 47% | 0.558 | 9.58 | 9.55 | 0.509 | 0.606 | -10.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: POC volume profile cố định → 0.813 | 31.29 | 57.3% | 0.199 | 5.56 | 5.63 | 0.215 | 0.185 | -7.17 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Cộng thêm ngưỡng điểm khung 4H → -1 | 121.88 | 53.1% | 0.852 | 7.13 | 17.09 | 0.672 | 1.057 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 100.61 | 44.4% | 0.666 | 10.49 | 9.59 | 0.482 | 0.863 | -9.92 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 117.66 | 50.7% | 0.806 | 7.61 | 15.46 | 0.606 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần R:R (/100) → 33 | 125.59 | 44.5% | 0.548 | 11.1 | 11.31 | 0.574 | 0.524 | -15.8 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Break mây Ichimoku → 3 | 111.5 | 48.7% | 0.706 | 8.51 | 13.1 | 0.58 | 0.845 | -8.72 |  |

### Vòng 1199 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 123.08 | 43.2% | 0.511 | 12.72 | 9.68 | 0.556 | 0.468 | -15.21 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: EMA 21 → 0.875 | 119.96 | 52.4% | 0.816 | 7.33 | 16.37 | 0.654 | 0.995 | -10.87 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm tối thiểu của vùng đặt SL → 4 + R:R tối thiểu riêng khung 4H → 2 | 112.28 | 39.6% | 0.348 | 13.03 | 8.62 | 0.292 | 0.396 | -9.86 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + % chốt ở TP1 → 0.307 + Điểm vùng: BOS → 0 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 105.72 | 51.7% | 0.729 | 7.84 | 13.48 | 0.675 | 0.79 | -11.76 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần Trend (/100) → 12 + Khung lớn phải tăng (trend ≥) → 0.375 | 113.64 | 49% | 0.733 | 7.95 | 14.29 | 0.614 | 0.871 | -7.16 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Cộng điểm phân kỳ dương ẩn → 2.25 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 27.94 | 56.1% | 0.178 | 5.85 | 4.78 | 0.215 | 0.143 | -7.1 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Cộng thêm ngưỡng điểm khung 1D → 5 | 121.88 | 53.1% | 0.852 | 7.06 | 17.26 | 0.672 | 1.057 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 108.31 | 49.3% | 0.742 | 8.18 | 13.24 | 0.59 | 0.917 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 36.74 | 40.2% | 0.399 | 10.03 | 3.66 | 0.333 | 0.478 | -11.39 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN anchored → 0.188 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 98.3 | 40.7% | 0.31 | 13.55 | 7.25 | 0.419 | 0.211 | -14.61 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: BOS → 2 | 118.43 | 53.1% | 0.817 | 7.41 | 15.98 | 0.598 | 1.065 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + R:R tối thiểu tới TP1 → 2.63 | 102.15 | 50.4% | 0.817 | 7.81 | 13.08 | 0.544 | 1.113 | -12.86 |  |

### Vòng 1198 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần R:R (/100) → 28 | 132.76 | 39.9% | 0.495 | 14.03 | 9.46 | 0.49 | 0.5 | -6.68 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Lệnh chờ hết hạn sau (nến) → 6 | 117.09 | 42.8% | 0.626 | 11.49 | 10.19 | 0.527 | 0.742 | -19.4 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Số TP tối đa → 1 | 119.42 | 52.1% | 0.829 | 7.48 | 15.97 | 0.631 | 1.057 | -12.16 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 81.47 | 45.9% | 0.613 | 9.42 | 8.65 | 0.449 | 0.812 | -9.2 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cộng điểm phân kỳ dương ẩn → 2.25 | 116.77 | 51.7% | 0.805 | 7.49 | 15.59 | 0.631 | 1.003 | -13.13 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 | 107.97 | 45.7% | 0.658 | 10.19 | 10.6 | 0.63 | 0.683 | -9.47 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + % chốt ở TP1 → 0.307 | 52.41 | 43% | 0.49 | 10.28 | 5.1 | 0.483 | 0.498 | -8.81 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cổng Dow → TẮT | 134.28 | 43.5% | 0.649 | 11.1 | 12.1 | 0.541 | 0.764 | -18.98 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Lệnh chờ hết hạn sau (nến) → 6 | 96.26 | 50% | 0.729 | 7.76 | 12.4 | 0.578 | 0.911 | -12.76 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 119.92 | 50% | 0.759 | 8.18 | 14.66 | 0.585 | 0.961 | -10.84 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 119.54 | 45.4% | 0.653 | 9.23 | 12.95 | 0.719 | 0.592 | -10.48 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + R:R tối thiểu riêng khung 1W → 2 | 107.03 | 50.3% | 0.748 | 7.69 | 13.92 | 0.604 | 0.891 | -13.19 |  |

### Vòng 1197 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.09

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 108.11 | 52.1% | 0.751 | 7.91 | 13.67 | 0.672 | 0.839 | -11.17 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần SL (/100) → 7 | 114.03 | 48.9% | 0.82 | 8.28 | 13.77 | 0.597 | 1.082 | -10.4 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Momentum (/100) → 21 | 106.83 | 46.9% | 0.737 | 8.97 | 11.91 | 0.519 | 0.952 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần Elliott (/100) → 6 | 121 | 52.4% | 0.835 | 7.2 | 16.81 | 0.657 | 1.035 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Xác nhận khung nhỏ (A2) → W | 70.79 | 35.9% | 0.322 | 18.19 | 3.89 | 0.236 | 0.392 | -8.57 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Số TP tối đa → 3 + Điểm vùng: Fib sóng 4 → 0.938 + Cộng thêm ngưỡng điểm khung 1D → 3 | 112.13 | 50% | 0.779 | 7.81 | 14.36 | 0.562 | 1.02 | -12.16 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 3 | 118.68 | 48.3% | 0.69 | 10.08 | 11.77 | 0.639 | 0.739 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 105.67 | 44.8% | 0.686 | 9.58 | 11.03 | 0.677 | 0.696 | -7.49 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Số TP tối đa → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 83.66 | 46.1% | 0.593 | 9.96 | 8.4 | 0.498 | 0.712 | -9.34 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Lệnh chờ hết hạn sau (nến) → 6 | 89.12 | 49.2% | 0.675 | 8.46 | 10.53 | 0.549 | 0.822 | -10.63 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Break mây Ichimoku → 3 | 85.33 | 45.7% | 0.488 | 10.71 | 7.97 | 0.471 | 0.505 | -14.6 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 76.41 | 46.4% | 0.695 | 8.83 | 8.65 | 0.447 | 0.981 | -5.79 |  |
