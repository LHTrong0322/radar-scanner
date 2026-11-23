# Tối ưu tự động (chạy liên tục) — vòng 1198

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 14008 phương án.

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

### Vòng 1196 — ngẫu nhiên nhiều thông số · mốc: tổng 119.12R, win 53.2%, rủi ro tụt vốn 7.09R, lời÷rủi ro 16.80

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 65.62 | 44% | 0.566 | 9.92 | 6.61 | 0.422 | 0.714 | -4.77 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Lệnh chờ hết hạn sau (nến) → 6 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 84.34 | 41.1% | 0.407 | 14.53 | 5.8 | 0.487 | 0.33 | -10.14 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: EMA 50 → 0.75 | 63.94 | 43% | 0.598 | 9.82 | 6.51 | 0.309 | 0.927 | -8.72 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Số TP tối đa → 1 + Trọng số phần Momentum (/100) → 25 | 109.47 | 49.7% | 0.725 | 8.33 | 13.14 | 0.643 | 0.806 | -7.69 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: EMA 21 → 0.875 + Trọng số phần R:R (/100) → 28 | 87.17 | 51.7% | 0.739 | 7.23 | 12.06 | 0.378 | 1.033 | -12.08 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: EMA 50 → 0.75 + % chốt ở TP1 → 0.307 + Trọng số phần Trend (/100) → 19 | 103.19 | 49.7% | 0.693 | 8.34 | 12.37 | 0.498 | 0.901 | -10.6 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + SL tối đa (% Entry) → 0.425 + R:R tối thiểu riêng khung 1D → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 26.76 | 55.1% | 0.145 | 6.98 | 3.83 | 0.188 | 0.109 | -6.74 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 4H (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 37.69 | 29.6% | 0.109 | 40.2 | 0.94 | 0.188 | 0.043 | -15.47 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Mức RSI 30/70 → 0.875 | 118.6 | 48.5% | 0.702 | 9.2 | 12.89 | 0.506 | 0.931 | -11.88 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: POC volume profile cố định → 0.688 | 124.52 | 51.9% | 0.788 | 8.12 | 15.33 | 0.618 | 0.986 | -11.28 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm tối thiểu của vùng đặt SL → 2 + R:R tối thiểu riêng khung 1D → 2 | 101.91 | 46.2% | 0.603 | 9.2 | 11.08 | 0.601 | 0.605 | -7.22 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Lệnh chờ hết hạn sau (nến) → 6 | 97.55 | 51.2% | 0.756 | 7.78 | 12.54 | 0.561 | 0.98 | -9.63 |  |

### Vòng 1195 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.09

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 116.77 | 51.7% | 0.805 | 7.48 | 15.61 | 0.631 | 1.003 | -13.13 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 100.3 | 43.6% | 0.673 | 9.52 | 10.54 | 0.647 | 0.702 | -7.49 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Cộng điểm phân kỳ dương ẩn → 3 | 120.3 | 50% | 0.761 | 8.41 | 14.3 | 0.586 | 0.965 | -12.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Số TP tối đa → 3 | 114.24 | 51.4% | 0.805 | 7.47 | 15.29 | 0.649 | 0.978 | -12.16 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Cộng thêm ngưỡng điểm khung 1W → -1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm tối thiểu của vùng đặt SL → 4 | 125.5 | 50.3% | 0.81 | 7.65 | 16.41 | 0.815 | 0.804 | -11.45 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 102.56 | 47.8% | 0.653 | 9.27 | 11.06 | 0.465 | 0.859 | -8.29 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: EMA 50 → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng điểm phân kỳ dương ẩn → 3 | 29.16 | 50.8% | 0.154 | 8.57 | 3.4 | 0.216 | 0.092 | -13.14 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 89.43 | 50% | 0.758 | 7.56 | 11.83 | 0.571 | 0.979 | -18.62 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 117 | 50% | 0.75 | 8.12 | 14.41 | 0.833 | 0.651 | -12.34 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Mức MACD → 0.875 | 118.02 | 51.6% | 0.752 | 8.26 | 14.29 | 0.585 | 0.943 | -10.06 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 32.74 | 58.3% | 0.195 | 7.27 | 4.5 | 0.242 | 0.159 | -6.88 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 | 35.78 | 39.5% | 0.416 | 10.52 | 3.4 | 0.335 | 0.518 | -8.98 |  |

### Vòng 1194 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 101.93 | 47.2% | 0.625 | 8.91 | 11.44 | 0.469 | 0.808 | -13.57 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 + Coin phải mạnh hơn BTC trong N ngày → 14 | 85.65 | 48.8% | 0.696 | 8.68 | 9.87 | 0.477 | 0.959 | -16.04 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: MACD cắt lên Signal → 0.438 | 26.56 | 53.5% | 0.154 | 7.11 | 3.74 | 0.214 | 0.095 | -7.53 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: EMA 50 → 1.13 | 118.08 | 51% | 0.803 | 7.64 | 15.46 | 0.637 | 0.986 | -9.85 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: EMA 200 → 3 | 109.39 | 50% | 0.77 | 7.59 | 14.41 | 0.534 | 1.028 | -12.13 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 96.75 | 45.2% | 0.663 | 9.18 | 10.54 | 0.51 | 0.837 | -8.71 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 1W → 2 + % chốt ở TP1 → 0.287 | 111.01 | 43.7% | 0.584 | 10.19 | 10.89 | 0.534 | 0.631 | -7.9 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu tới TP1 → 2.38 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 25.99 | 55.4% | 0.141 | 8.29 | 3.14 | 0.22 | 0.082 | -7.59 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Đệm SL riêng khung 1W (ATR) → 0.3 | 107.41 | 45.6% | 0.721 | 9.64 | 11.14 | 0.518 | 0.932 | -14.01 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Mức MACD → 0.875 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 71.59 | 44.1% | 0.471 | 10.31 | 6.94 | 0.351 | 0.581 | -10.41 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Mức RSI 30/70 → 1.13 | 98.42 | 46.2% | 0.679 | 9.13 | 10.78 | 0.551 | 0.82 | -8.13 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + R:R tối thiểu riêng khung 1W → 2 | 103.68 | 50% | 0.762 | 7.69 | 13.48 | 0.577 | 0.948 | -13.23 |  |

### Vòng 1193 — ngẫu nhiên nhiều thông số · mốc: tổng 104.78R, win 52.3%, rủi ro tụt vốn 7.02R, lời÷rủi ro 14.93

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Mức RSI 30/70 → 0.875 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: POC volume profile cố định → 0.813 | 102.33 | 47.4% | 0.664 | 9 | 11.37 | 0.484 | 0.875 | -9.65 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cổng Dow → TẮT + Điểm vùng: POC volume profile cố định → 0.813 | 28.1 | 52.1% | 0.149 | 8.21 | 3.42 | 0.216 | 0.082 | -11.48 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Cộng thêm ngưỡng điểm khung 1D → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 67.9 | 45.9% | 0.623 | 8.7 | 7.8 | 0.389 | 0.889 | -15.52 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 36.12 | 42.4% | 0.425 | 9.63 | 3.75 | 0.312 | 0.558 | -6.51 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Lệnh chờ hết hạn sau (nến) → 8 + R:R tối thiểu riêng khung 1W → 2 | 85.7 | 46.8% | 0.549 | 9.49 | 9.03 | 0.465 | 0.638 | -10.55 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Lệnh chờ hết hạn sau (nến) → 8 | 99.16 | 49.3% | 0.689 | 7.84 | 12.65 | 0.564 | 0.824 | -9.33 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Mức RSI 30/70 → 0.875 | 104.83 | 49.7% | 0.713 | 8.14 | 12.88 | 0.573 | 0.881 | -9.05 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 87.26 | 47.7% | 0.671 | 7.89 | 11.06 | 0.427 | 0.916 | -10.61 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần Trend (/100) → 19 | 126.08 | 45.5% | 0.568 | 10.77 | 11.71 | 0.65 | 0.486 | -12.89 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Khung lớn phải tăng (trend ≥) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 72.94 | 41% | 0.439 | 10.9 | 6.69 | 0.394 | 0.48 | -5.34 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 80.44 | 44.9% | 0.591 | 9.55 | 8.42 | 0.465 | 0.726 | -5.99 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Elliott (/100) → 10 | 102.56 | 50.8% | 0.789 | 7.19 | 14.26 | 0.658 | 0.928 | -9.46 |  |

### Vòng 1192 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.15R, lời÷rủi ro 17.05

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: EMA 200 → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 111.06 | 48.4% | 0.726 | 8.46 | 13.13 | 0.524 | 0.941 | -14.59 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Cộng thêm ngưỡng điểm khung 4H → -1 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: MACD cắt lên Signal → 0.563 | 131.53 | 40.4% | 0.493 | 13.67 | 9.62 | 0.487 | 0.497 | -5.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Cổng Dow → TẮT + R:R tối thiểu riêng khung 1W → 2 | 132.15 | 44.4% | 0.674 | 10.73 | 12.32 | 0.614 | 0.737 | -21.35 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Cổng Dow → CHẶT | 86.13 | 51.8% | 0.756 | 6.86 | 12.56 | 0.371 | 1.09 | -14.25 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 | 112.4 | 49.7% | 0.775 | 7.63 | 14.73 | 0.659 | 0.9 | -12.34 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: POC volume profile cố định → 0.688 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 94.72 | 44.5% | 0.611 | 9.98 | 9.49 | 0.466 | 0.774 | -4.56 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 119.66 | 51.7% | 0.837 | 7.34 | 16.3 | 0.677 | 1.013 | -12.16 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Số TP tối đa → 3 | 72.12 | 43.2% | 0.611 | 10.18 | 7.08 | 0.417 | 0.842 | -5.59 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 39.67 | 41.6% | 0.446 | 9.72 | 4.08 | 0.35 | 0.563 | -7.55 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: BOS → 0 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 121.88 | 53.1% | 0.852 | 7.15 | 17.05 | 0.672 | 1.057 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Cộng thêm ngưỡng điểm khung 1W → 2 | 118.5 | 51% | 0.785 | 7.8 | 15.19 | 0.635 | 0.967 | -7.58 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần SL (/100) → 7 + Coin phải mạnh hơn BTC trong N ngày → 14 | 73.74 | 48.3% | 0.614 | 8.67 | 8.51 | 0.578 | 0.657 | -18.39 |  |

### Vòng 1191 — ngẫu nhiên nhiều thông số · mốc: tổng 121.89R, win 53.1%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: EMA 200 → 3 + R:R tối thiểu riêng khung 1D → 2 | 104.32 | 46.1% | 0.632 | 8.8 | 11.85 | 0.52 | 0.735 | -9.93 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: EMA 21 → 0.875 + Xác nhận khung nhỏ (A2) → W + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 102.29 | 38.9% | 0.406 | 15.07 | 6.79 | 0.396 | 0.415 | -7.48 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Entry (/100) → 28 + Điểm vùng: HVN cố định → 0.563 | 126.4 | 41.7% | 0.403 | 11.91 | 10.61 | 0.37 | 0.431 | -6.67 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 119.65 | 40.8% | 0.379 | 12.56 | 9.53 | 0.375 | 0.381 | -5.42 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 112.08 | 50% | 0.778 | 7.47 | 15 | 0.641 | 0.927 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Trọng số phần Momentum (/100) → 25 | 120.42 | 52.4% | 0.842 | 7.12 | 16.91 | 0.672 | 1.035 | -12.16 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 99.32 | 46.5% | 0.69 | 8.81 | 11.27 | 0.548 | 0.848 | -8.13 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 12.98 | 53.4% | 0.089 | 9.86 | 1.32 | 0.159 | 0.033 | -6.13 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức MACD → 1.13 | 101.44 | 49.7% | 0.69 | 8.19 | 12.39 | 0.629 | 0.759 | -10.73 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Entry (/100) → 28 + Điểm vùng: BOS → 2 | 118.95 | 51.7% | 0.82 | 7.09 | 16.78 | 0.677 | 0.974 | -10.87 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Xác nhận khung nhỏ (A2) → W | 127.16 | 40.2% | 0.469 | 14.38 | 8.84 | 0.436 | 0.499 | 0.4 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + SL tối đa (% Entry) → 0.425 | 104.63 | 51.4% | 0.717 | 7.87 | 13.29 | 0.673 | 0.765 | -11.75 |  |

### Vòng 1190 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.09R, lời÷rủi ro 17.19

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Entry (/100) → 28 + Trọng số phần SL (/100) → 7 | 112.24 | 46.1% | 0.68 | 10.12 | 11.09 | 0.63 | 0.724 | -10.49 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Khung lớn phải tăng (trend ≥) → 0.425 + Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1W (ATR) → 0.3 | 96.89 | 37.1% | 0.418 | 15.87 | 6.11 | 0.379 | 0.448 | -5.62 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần R:R (/100) → 33 + Điểm vùng: HVN anchored → 0.188 | 121.43 | 52.8% | 0.843 | 7.19 | 16.89 | 0.672 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Đệm SL riêng khung 4H (ATR) → 0.3 + Số TP tối đa → 3 | 158.66 | 38.7% | 0.543 | 17.86 | 8.88 | 0.398 | 0.695 | -9.42 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Ngưỡng điểm vào kèo → 74 | 128.68 | 44.8% | 0.559 | 11 | 11.7 | 0.567 | 0.552 | -15.8 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cổng Dow → TẮT + SL tối đa (% Entry) → 0.425 | 133.79 | 41.4% | 0.56 | 13.92 | 9.61 | 0.616 | 0.512 | -18.19 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 117.69 | 51.7% | 0.823 | 7.2 | 16.35 | 0.631 | 1.041 | -11.98 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trọng số phần Momentum (/100) → 21 + Đệm SL riêng khung 1D (ATR) → 0.3 | 110.23 | 45.2% | 0.664 | 10.48 | 10.52 | 0.589 | 0.733 | -10.49 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + % chốt ở TP1 → 0.307 | 121.94 | 53.1% | 0.853 | 7.08 | 17.22 | 0.673 | 1.056 | -12.17 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: EMA 50 → 0.75 | 113.86 | 51.4% | 0.802 | 7.33 | 15.53 | 0.587 | 1.03 | -12.16 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 152.73 | 38.4% | 0.514 | 19.11 | 7.99 | 0.429 | 0.6 | -8.13 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 110.61 | 51.4% | 0.768 | 7.52 | 14.71 | 0.631 | 0.913 | -13.4 |  |

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
