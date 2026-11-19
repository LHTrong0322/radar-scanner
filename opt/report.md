# Tối ưu tự động (chạy liên tục) — vòng 760

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 8775 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 93.37R | 0.573 | 5.74R | 9.99R | 9.35 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 144 | 53.5% | 118.41R | 0.822 | 5.09R | 7.36R | 16.09 | 27 | 18.5% | -8.63R | -0.32 | 9.25R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.77R | 1 | 0% | -1.01R |
| 4H | 106 | 54.7% | 91.22R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 93.37R | 9.99R | 9.35 | 31 | 12.9% | -13R |
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
| Điểm tối thiểu vùng đặt lệnh chờ | 3 | **2** |
| Số TP tối đa | 2 | **3** |
| Điểm ADX > 25 và +DI trội (Momentum) | 3 | **4** |
| Điểm ADX < 13 cạn lực giảm (Momentum) | 1.5 | **2.5** |
| Cộng điểm phân kỳ dương ẩn | 3 | **2.63** |
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
| 22 | Lọc BTC trên EMA200 (crypto) | true → false | 83.22R | 40.4% | 14.66R | 5.68 |
| 21 | Điểm tối thiểu của vùng đặt SL | 2 → 3 | 54.36R | 37.7% | 19.55R | 2.78 |
| 21 | Số nến mỗi bên để xác định đỉnh/đáy Dow | 5 → 4 | 73.82R | 39.5% | 15.56R | 4.74 |
| 19 (hoàn tác) | Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) | 6 → 5 | 104.08R | 43.9% | 13.85R | 7.51 |

## 10 vòng gần nhất

### Vòng 760 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.09

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 80.56 | 44.8% | 0.488 | 10.48 | 7.69 | 0.474 | 0.502 | -8.09 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Fib sóng 4 → 1.56 | 114.38 | 52% | 0.773 | 7.91 | 14.46 | 0.574 | 1.007 | -7.61 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần Elliott (/100) → 10 | 90.96 | 37.9% | 0.36 | 17.33 | 5.25 | 0.33 | 0.388 | -4.03 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: POC anchored → 4 + Điểm vùng: Mức RSI 30/70 → 1.13 | 117.57 | 52% | 0.784 | 7.72 | 15.23 | 0.618 | 0.95 | -3.45 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Coin phải mạnh hơn BTC trong N ngày → 14 + Số TP tối đa → 2 | 87.57 | 50.9% | 0.755 | 7.99 | 10.96 | 0.559 | 0.988 | -15.1 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: EMA 50 → 0.75 | 115.96 | 53.5% | 0.817 | 7.35 | 15.78 | 0.621 | 1.029 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: POC volume profile cố định → 0.688 | 109.87 | 50% | 0.753 | 8.36 | 13.14 | 0.63 | 0.882 | -8.04 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: HVN cố định → 0.563 + Trọng số phần R:R (/100) → 33 | 107.99 | 46.2% | 0.632 | 9.18 | 11.76 | 0.62 | 0.642 | -9.95 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cổng Dow → TẮT + R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 | 107.21 | 41% | 0.602 | 13.43 | 7.98 | 0.62 | 0.589 | -29.52 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 116.8 | 51.9% | 0.749 | 8.31 | 14.06 | 0.607 | 0.928 | -3.64 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Cộng điểm phân kỳ dương ẩn → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 84.3 | 46% | 0.68 | 9.33 | 9.04 | 0.305 | 0.989 | -11.54 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 4H (ATR) → 0.3 | 161.49 | 38.2% | 0.546 | 17.62 | 9.17 | 0.481 | 0.61 | -11.32 |  |

### Vòng 759 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.38

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: POC volume profile cố định → 0.813 | 114.11 | 51.4% | 0.792 | 7.78 | 14.67 | 0.523 | 1.086 | -7.47 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Xác nhận khung nhỏ (A2) → W + R:R tối thiểu tới TP1 → 2.38 | 72.23 | 36.4% | 0.317 | 17.74 | 4.07 | 0.361 | 0.268 | -7.42 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Lệnh chờ hết hạn sau (nến) → 8 + Đệm SL riêng khung 1W (ATR) → 0.3 | 111.92 | 45.8% | 0.674 | 9.97 | 11.23 | 0.608 | 0.745 | -10.84 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 118.41 | 53.5% | 0.822 | 7.23 | 16.38 | 0.635 | 1.037 | -8.63 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 81.03 | 50% | 0.643 | 8.36 | 9.69 | 0.552 | 0.741 | -15.1 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 113.47 | 51.8% | 0.816 | 7.39 | 15.35 | 0.626 | 1.027 | -9.92 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Momentum (/100) → 21 | 116.69 | 52.4% | 0.816 | 7.38 | 15.81 | 0.64 | 1.015 | -8.63 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + R:R tối thiểu tới TP1 → 2.38 | 96.7 | 47.1% | 0.616 | 8.63 | 11.21 | 0.505 | 0.72 | -10.21 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: EMA 50 → 0.75 + SL tối đa (% Entry) → 0.425 | 114.2 | 52.8% | 0.793 | 7.41 | 15.41 | 0.621 | 0.975 | -7.31 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: BOS → 3 | 116.89 | 52.8% | 0.823 | 7.37 | 15.86 | 0.652 | 1.015 | -8.63 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Trend (/100) → 12 | 116.69 | 52.4% | 0.816 | 7.38 | 15.81 | 0.64 | 1.015 | -8.63 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Cộng điểm phân kỳ dương ẩn → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: EMA 21 → 1.13 | 110.9 | 51% | 0.765 | 7.68 | 14.44 | 0.635 | 0.908 | -8.97 |  |

### Vòng 758 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.38

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Số TP tối đa → 2 + Cổng Dow → CHẶT | 86.7 | 52.3% | 0.781 | 6.63 | 13.08 | 0.392 | 1.136 | -13.98 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 104.14 | 48.8% | 0.627 | 9.26 | 11.25 | 0.507 | 0.763 | -8.37 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Mức RSI 30/70 → 0.875 | 105.87 | 51.3% | 0.67 | 8.48 | 12.48 | 0.608 | 0.743 | -8.62 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 160.97 | 38.9% | 0.531 | 18.17 | 8.86 | 0.332 | 0.748 | -10.14 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Xác nhận khung nhỏ (A2) → W | 105.11 | 39.4% | 0.414 | 15.6 | 6.74 | 0.36 | 0.464 | -2.7 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Khung lớn phải tăng (trend ≥) → 0.425 | 115.46 | 52.9% | 0.825 | 7.24 | 15.95 | 0.606 | 1.077 | -8.66 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + % chốt ở TP1 → 0.287 + Điểm vùng: Mức MACD → 1.13 + Số TP tối đa → 2 | 106.89 | 52.8% | 0.869 | 7.5 | 14.25 | 0.6 | 1.181 | -9.58 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 107.38 | 50.6% | 0.671 | 8.12 | 13.22 | 0.567 | 0.786 | -12.34 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: HVN anchored → 0.313 | 29.95 | 63.6% | 0.232 | 4.7 | 6.37 | 0.212 | 0.248 | -7.78 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 1 | 109.09 | 46.4% | 0.657 | 10.47 | 10.42 | 0.706 | 0.614 | -4.13 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + % chốt ở TP1 → 0.307 + Điểm vùng: EMA 200 → 3 | 103.44 | 49.3% | 0.708 | 8.33 | 12.42 | 0.499 | 0.93 | -10.68 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 39.07 | 41.4% | 0.449 | 9.79 | 3.99 | 0.372 | 0.544 | -6.21 |  |

### Vòng 757 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.38

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Mức MACD → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 111.29 | 50.3% | 0.767 | 8.24 | 13.51 | 0.607 | 0.945 | -8.63 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + % chốt ở TP1 → 0.307 + Điểm vùng: Break mây Ichimoku → 3 + R:R tối thiểu riêng khung 4H → 2 | 97.68 | 39.5% | 0.321 | 14.12 | 6.92 | 0.301 | 0.34 | -4.04 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Divergence (/100) → 9 | 92.11 | 46.6% | 0.631 | 9.41 | 9.79 | 0.47 | 0.832 | -8.13 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: BOS → 1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.11 | 52.1% | 0.699 | 7.97 | 12.81 | 0.637 | 0.77 | -8.43 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Khung lớn phải tăng (trend ≥) → 0.425 | 78.92 | 46.4% | 0.705 | 8.91 | 8.86 | 0.494 | 0.947 | -7.98 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Elliott (/100) → 6 + Trọng số phần SL (/100) → 7 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 35.99 | 38.9% | 0.318 | 12.37 | 2.91 | 0.461 | 0.168 | -4.08 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần R:R (/100) → 28 | 74.72 | 46.7% | 0.698 | 8.71 | 8.58 | 0.474 | 0.955 | -5.45 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 84.92 | 44.9% | 0.578 | 9.32 | 9.11 | 0.581 | 0.575 | -17.38 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: HVN cố định → 0.563 | 101.44 | 52.1% | 0.838 | 7.69 | 13.19 | 0.543 | 1.159 | -9.6 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 100.7 | 50% | 0.73 | 7.89 | 12.76 | 0.466 | 1.035 | -10.49 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: HVN anchored → 0.313 | 38.76 | 41.2% | 0.456 | 9.56 | 4.05 | 0.358 | 0.578 | -5.18 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: EMA 200 → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 134.59 | 38.8% | 0.512 | 17.24 | 7.81 | 0.225 | 0.776 | -11.44 |  |

### Vòng 756 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.38

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu riêng khung 1W → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm tối thiểu của vùng đặt SL → 4 | 89.47 | 47.5% | 0.635 | 9.43 | 9.49 | 0.609 | 0.661 | -8.68 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Break mây Ichimoku → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 89.45 | 45.9% | 0.604 | 10.11 | 8.85 | 0.448 | 0.744 | -10.43 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Đệm SL riêng khung 4H (ATR) → 0.3 | 185.7 | 40.9% | 0.69 | 16.3 | 11.39 | 0.464 | 0.925 | -8.35 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần SL (/100) → 7 + Cộng thêm ngưỡng điểm khung 4H → -1 | 30.75 | 58.9% | 0.195 | 5.77 | 5.33 | 0.214 | 0.176 | -10.36 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 117.74 | 48.5% | 0.714 | 9.86 | 11.94 | 0.698 | 0.728 | -5.32 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + R:R tối thiểu riêng khung 4H → 2 + Ngưỡng điểm vào kèo → 74 | 114.15 | 41.3% | 0.36 | 12.8 | 8.92 | 0.319 | 0.393 | -11.09 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: POC anchored → 2 + Trọng số phần SL (/100) → 9 | 79.08 | 48.3% | 0.659 | 8.75 | 9.04 | 0.56 | 0.765 | -15.1 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.688 | 150.82 | 38.9% | 0.533 | 18.17 | 8.3 | 0.335 | 0.727 | -13.42 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Ngưỡng điểm vào kèo → 77 | 122.48 | 44% | 0.544 | 10.86 | 11.28 | 0.598 | 0.487 | -9.94 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 81.26 | 45.7% | 0.502 | 10.24 | 7.94 | 0.425 | 0.576 | -8.23 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: EMA 200 → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 106.85 | 50.7% | 0.732 | 7.47 | 14.3 | 0.535 | 0.934 | -8.61 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + R:R tối thiểu tới TP1 → 2.38 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: HVN anchored → 0.188 | 99.13 | 47.2% | 0.623 | 9 | 11.01 | 0.504 | 0.733 | -8.63 |  |

### Vòng 755 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.25R, lời÷rủi ro 16.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Trọng số phần SL (/100) → 7 + Điểm vùng: EMA 200 → 1 + Đệm SL riêng khung 1D (ATR) → 0.3 | 124.49 | 48.6% | 0.703 | 9.77 | 12.74 | 0.745 | 0.662 | -0.96 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 21 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 60.38 | 41% | 0.516 | 11.62 | 5.2 | 0.358 | 0.647 | -5.07 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + R:R tối thiểu tới TP1 → 2.63 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 82.96 | 46.2% | 0.638 | 10.1 | 8.21 | 0.445 | 0.843 | -9.09 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Mức MACD → 1.13 | 111.11 | 50.7% | 0.761 | 7.9 | 14.06 | 0.552 | 1.001 | -8.46 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 83.94 | 46.7% | 0.613 | 8.87 | 9.46 | 0.44 | 0.778 | -11.52 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + R:R tối thiểu riêng khung 4H → 2 + Xác nhận khung nhỏ (A2) → W + Lệnh chờ hết hạn sau (nến) → 6 | 60.34 | 35.1% | 0.162 | 23.01 | 2.62 | 0.12 | 0.196 | -8.26 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.05 | 105.11 | 50.3% | 0.725 | 8.03 | 13.09 | 0.594 | 0.869 | -10.75 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + R:R tối thiểu riêng khung 1D → 2 | 108.77 | 46.6% | 0.625 | 9.27 | 11.73 | 0.606 | 0.643 | -5.58 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Trọng số phần SL (/100) → 9 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + SL tối đa (% Entry) → 0.425 | 77.62 | 43.6% | 0.476 | 11.07 | 7.01 | 0.437 | 0.514 | -8.8 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Cổng Dow → TẮT | 33.89 | 36.2% | 0.292 | 13.22 | 2.56 | 0.356 | 0.213 | -3.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Cộng điểm phân kỳ dương ẩn → 3 | 114.61 | 52.8% | 0.796 | 7.64 | 15 | 0.621 | 0.981 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 115.21 | 53.1% | 0.806 | 7.42 | 15.53 | 0.621 | 1.003 | -7.31 |  |

### Vòng 754 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.85

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + R:R tối thiểu riêng khung 1D → 2 | 102.78 | 46.7% | 0.623 | 8.66 | 11.87 | 0.568 | 0.674 | -8.83 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: EMA 21 → 1.13 + Cộng điểm phân kỳ dương ẩn → 2.25 | 150.85 | 38.6% | 0.511 | 18.62 | 8.1 | 0.387 | 0.64 | -13.64 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Break mây Ichimoku → 1 | 125.68 | 46.3% | 0.554 | 10.61 | 11.85 | 0.599 | 0.505 | -10.15 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Trọng số phần Trend (/100) → 12 + R:R tối thiểu riêng khung 4H → 2 | 118.09 | 41.2% | 0.377 | 12.47 | 9.47 | 0.326 | 0.421 | -13.51 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: BOS → 1 | 112.99 | 52.4% | 0.779 | 7.45 | 15.17 | 0.628 | 0.95 | -8.97 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần SL (/100) → 9 + Điểm vùng: BOS → 3 + Cộng thêm ngưỡng điểm khung 1D → 3 | 114.8 | 51.7% | 0.781 | 7.74 | 14.83 | 0.618 | 0.965 | -10.03 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Mức MACD → 0.875 + Trọng số phần SL (/100) → 9 | 112.82 | 52.8% | 0.794 | 7.57 | 14.9 | 0.621 | 0.983 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Đệm SL riêng khung 1W (ATR) → 0.3 + SL tối đa (% Entry) → 0.425 + Điểm vùng: POC anchored → 2 | 98.45 | 48.3% | 0.688 | 9.06 | 10.87 | 0.473 | 0.884 | -9.69 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 98.2 | 45.5% | 0.687 | 9.88 | 9.94 | 0.516 | 0.851 | -8.37 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 100.58 | 35.6% | 0.377 | 21.57 | 4.66 | 0.172 | 0.571 | -8.78 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Số TP tối đa → 2 + SL tối đa (% Entry) → 0.425 | 118.17 | 53.1% | 0.815 | 7.51 | 15.74 | 0.64 | 1.013 | -8.63 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → 2 | 86.39 | 46.4% | 0.617 | 9.67 | 8.93 | 0.516 | 0.707 | -9.48 |  |

### Vòng 753 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.32R, lời÷rủi ro 16.18

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Fib sóng 4 → 0.938 | 114.19 | 49% | 0.746 | 8.78 | 13.01 | 0.666 | 0.835 | -9.21 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: EMA 200 → 1 + Điểm vùng: EMA 21 → 1.13 | 88.82 | 45.9% | 0.566 | 10.84 | 8.19 | 0.439 | 0.741 | -3.31 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Trend (/100) → 12 + Cộng điểm phân kỳ dương ẩn → 2.25 | 107.43 | 50.7% | 0.736 | 8.09 | 13.28 | 0.631 | 0.841 | -9.67 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm tối thiểu của vùng đặt SL → 2 | 110.23 | 52.4% | 0.75 | 7.68 | 14.35 | 0.648 | 0.85 | -9.67 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 125.15 | 49.7% | 0.818 | 8.2 | 15.26 | 0.795 | 0.846 | -12.47 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + SL tối đa (% Entry) → 0.425 + Xác nhận khung nhỏ (A2) → W | 102.47 | 39.4% | 0.417 | 15.16 | 6.76 | 0.411 | 0.421 | -4.75 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 107.58 | 48.4% | 0.703 | 8.61 | 12.49 | 0.526 | 0.887 | -10.66 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Đệm SL riêng khung 1D (ATR) → 0.3 | 115.96 | 47.8% | 0.729 | 9.7 | 11.95 | 0.694 | 0.761 | -7.99 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: BOS → 3 | 118.29 | 48.3% | 0.688 | 9.14 | 12.94 | 0.573 | 0.817 | -11.62 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 77.29 | 43.6% | 0.495 | 10.76 | 7.18 | 0.394 | 0.597 | -7.01 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần SL (/100) → 7 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Lệnh chờ hết hạn sau (nến) → 6 | 22.47 | 55.8% | 0.163 | 7.23 | 3.11 | 0.21 | 0.124 | -9.97 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 106.44 | 45% | 0.63 | 9.74 | 10.93 | 0.655 | 0.607 | -1.94 |  |

### Vòng 752 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.38

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 + Ngưỡng điểm vào kèo → 74 | 22.69 | 54.1% | 0.132 | 7.66 | 2.96 | 0.154 | 0.11 | -9.69 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: EMA 21 → 0.875 | 73.65 | 45.9% | 0.664 | 9.42 | 7.82 | 0.464 | 0.898 | -5.45 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 91.3 | 45.6% | 0.502 | 10.43 | 8.75 | 0.536 | 0.469 | -4.84 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 111.39 | 53.1% | 0.758 | 8 | 13.92 | 0.634 | 0.893 | -8.63 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Trend (/100) → 19 + Điểm vùng: HVN anchored → 0.313 + Cộng thêm ngưỡng điểm khung 1W → 2 | 107.23 | 50.3% | 0.729 | 8.1 | 13.24 | 0.63 | 0.825 | -9.67 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 129.99 | 42.6% | 0.395 | 11.39 | 11.41 | 0.438 | 0.361 | -8.03 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Break mây Ichimoku → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + SL tối đa (% Entry) → 0.425 | 95.24 | 48.6% | 0.644 | 8.72 | 10.92 | 0.606 | 0.684 | -8.34 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Khung lớn phải tăng (trend ≥) → 0.375 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 108.45 | 51% | 0.738 | 7.92 | 13.69 | 0.597 | 0.888 | -7.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Cộng thêm ngưỡng điểm khung 4H → -1 | 118.41 | 53.5% | 0.822 | 7.23 | 16.38 | 0.635 | 1.037 | -8.63 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Khung lớn phải tăng (trend ≥) → 0.425 | 115.46 | 52.9% | 0.825 | 7.24 | 15.95 | 0.606 | 1.077 | -8.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: MACD cắt lên Signal → 0.438 | 104.09 | 49% | 0.68 | 9.15 | 11.38 | 0.472 | 0.921 | -6.05 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Trend (/100) → 12 + Coin phải mạnh hơn BTC trong N ngày → 14 | 85.82 | 50% | 0.753 | 8 | 10.73 | 0.57 | 0.963 | -15.1 |  |

### Vòng 751 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.38

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng điểm phân kỳ dương ẩn → 3 | 117.02 | 50% | 0.76 | 8.18 | 14.31 | 0.594 | 0.944 | -9.66 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: EMA 50 → 0.75 | 75.74 | 47.3% | 0.676 | 8.53 | 8.88 | 0.423 | 0.958 | -6.42 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: HVN cố định → 0.438 | 123.33 | 42% | 0.378 | 12.31 | 10.02 | 0.335 | 0.416 | -14.19 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 132.23 | 45.4% | 0.577 | 10.47 | 12.63 | 0.618 | 0.535 | -10.74 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: EMA 200 → 1 | 112.43 | 50.3% | 0.745 | 8.37 | 13.43 | 0.608 | 0.907 | -3.64 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần R:R (/100) → 33 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 103.77 | 51% | 0.716 | 7.93 | 13.09 | 0.694 | 0.74 | -11.49 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Ngưỡng điểm vào kèo → 74 | 112.49 | 46.4% | 0.678 | 10.51 | 10.7 | 0.633 | 0.718 | -4.31 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 132.23 | 45.4% | 0.577 | 10.47 | 12.63 | 0.618 | 0.535 | -10.74 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Số TP tối đa → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 115.8 | 51.7% | 0.788 | 7.78 | 14.88 | 0.64 | 0.95 | -8.63 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Cộng thêm ngưỡng điểm khung 1D → 5 | 114.6 | 53% | 0.769 | 8.04 | 14.25 | 0.625 | 0.928 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Coin phải mạnh hơn BTC trong N ngày → 14 + Khung lớn phải tăng (trend ≥) → 0.425 | 83.58 | 50% | 0.733 | 8.1 | 10.32 | 0.502 | 1.009 | -15.13 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Coin phải mạnh hơn BTC trong N ngày → 14 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 92.73 | 48.8% | 0.73 | 8.55 | 10.85 | 0.715 | 0.747 | -15.18 |  |
