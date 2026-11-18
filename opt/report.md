# Tối ưu tự động (chạy liên tục) — vòng 709

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 8163 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.3% | 93.53R | 0.577 | 5.74R | 9.96R | 9.39 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 144 | 53.5% | 118.38R | 0.822 | 5.09R | 7.33R | 16.15 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 106 | 54.7% | 91.22R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.3% | 93.53R | 9.96R | 9.39 | 32 | 12.5% | -14.03R |
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

### Vòng 709 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.33R, lời÷rủi ro 16.15

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: POC anchored → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 91.99 | 44.8% | 0.503 | 10.45 | 8.8 | 0.493 | 0.511 | -4.04 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: EMA 50 → 1.13 + Trọng số phần Momentum (/100) → 21 | 114.05 | 51% | 0.787 | 7.73 | 14.75 | 0.585 | 1.028 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Fib sóng 4 → 1.56 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 74.51 | 47.7% | 0.684 | 8.62 | 8.64 | 0.454 | 0.945 | -6.48 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: EMA 21 → 0.875 + Cộng điểm phân kỳ dương ẩn → 2.25 | 120.02 | 52.4% | 0.828 | 7.6 | 15.79 | 0.691 | 0.978 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 106.82 | 50.7% | 0.732 | 8.28 | 12.9 | 0.571 | 0.921 | -11.53 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: POC anchored → 4 + Điểm vùng: BOS → 1 | 120.93 | 52.3% | 0.812 | 7.68 | 15.75 | 0.64 | 1.001 | -4.31 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: Biên mây Ichimoku → 1.35 + % chốt ở TP1 → 0.307 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 113.06 | 49.3% | 0.754 | 9.05 | 12.49 | 0.475 | 1.064 | -8.51 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + R:R tối thiểu riêng khung 4H → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Cổng Dow → CHẶT | 57.56 | 39.9% | 0.264 | 12.69 | 4.54 | 0.194 | 0.318 | -10.12 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 43.34 | 42.7% | 0.487 | 8.95 | 4.84 | 0.433 | 0.557 | -12.38 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: EMA 50 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 104.22 | 46.8% | 0.668 | 8.95 | 11.64 | 0.498 | 0.857 | -9.67 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 108.67 | 50.7% | 0.744 | 8.11 | 13.4 | 0.568 | 0.931 | -9.62 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Trọng số phần R:R (/100) → 28 + Trọng số phần Divergence (/100) → 9 + Đệm SL riêng khung 4H (ATR) → 0.3 | 180.14 | 40.4% | 0.667 | 16.13 | 11.17 | 0.448 | 0.899 | -9.38 |  |

### Vòng 708 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.25R, lời÷rủi ro 16.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Trọng số phần Entry (/100) → 33 + R:R tối thiểu riêng khung 1D → 2 | 108.94 | 46.5% | 0.633 | 9 | 12.1 | 0.62 | 0.646 | -7.92 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Momentum (/100) → 21 | 117.37 | 53.1% | 0.809 | 7.69 | 15.26 | 0.635 | 1.007 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: POC anchored → 4 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 119.75 | 51.7% | 0.804 | 7.92 | 15.12 | 0.67 | 0.936 | -7.51 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Đệm SL riêng khung 1D (ATR) → 0.3 | 84.51 | 50.4% | 0.655 | 8.59 | 9.84 | 0.434 | 0.805 | -4.69 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 117.63 | 53.1% | 0.811 | 7.55 | 15.58 | 0.635 | 1.011 | -8.34 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cổng Dow → CHẶT + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 73.13 | 50% | 0.653 | 7.95 | 9.2 | 0.493 | 0.802 | -10.63 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 115.96 | 51% | 0.8 | 7.69 | 15.08 | 0.672 | 0.925 | -10 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: POC anchored → 4 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 117.41 | 51.2% | 0.699 | 8.81 | 13.33 | 0.574 | 0.836 | -3.94 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: HVN anchored → 0.188 | 113.8 | 51.4% | 0.813 | 7.69 | 14.8 | 0.621 | 1.027 | -12.92 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức MACD → 1.13 | 106.98 | 51% | 0.728 | 8.07 | 13.26 | 0.605 | 0.852 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 118.38 | 53.5% | 0.822 | 7.25 | 16.33 | 0.635 | 1.037 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Cộng thêm ngưỡng điểm khung 1D → 5 | 114.98 | 52.1% | 0.788 | 7.66 | 15.01 | 0.61 | 0.986 | -9.66 |  |

### Vòng 707 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Elliott (/100) → 6 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 26.2 | 56.8% | 0.162 | 5.69 | 4.6 | 0.263 | 0.074 | -7.01 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Momentum (/100) → 21 | 30.3 | 58.2% | 0.192 | 5.7 | 5.32 | 0.219 | 0.166 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 90.8 | 43.7% | 0.601 | 10.16 | 8.94 | 0.53 | 0.671 | -7.56 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: POC volume profile cố định → 0.813 | 117.12 | 53.1% | 0.797 | 7.65 | 15.31 | 0.595 | 1.037 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Ngưỡng điểm vào kèo → 74 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 112.21 | 50% | 0.758 | 8.13 | 13.8 | 0.497 | 1.041 | -8.5 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + SL tối đa (% Entry) → 0.425 | 117.05 | 47.9% | 0.701 | 10.1 | 11.59 | 0.676 | 0.723 | -5.33 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: EMA 200 → 1 + Điểm vùng: MACD cắt lên Signal → 0.438 | 109.05 | 48.2% | 0.641 | 10.08 | 10.82 | 0.493 | 0.83 | -2.09 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 4H → 2 | 112.65 | 52.1% | 0.805 | 7.49 | 15.04 | 0.65 | 0.977 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trọng số phần Divergence (/100) → 12 | 146.38 | 38.7% | 0.51 | 18.71 | 7.82 | 0.319 | 0.703 | -16.5 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 | 115.12 | 52.9% | 0.822 | 7.36 | 15.64 | 0.679 | 0.983 | -9.66 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 115.01 | 52.1% | 0.788 | 7.66 | 15.01 | 0.62 | 0.975 | -9.66 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm tối thiểu của vùng đặt SL → 2 | 112.7 | 53.1% | 0.767 | 8.04 | 14.02 | 0.635 | 0.912 | -9.66 |  |

### Vòng 706 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.31

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Ngưỡng điểm vào kèo → 77 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 77.19 | 40.2% | 0.302 | 12.84 | 6.01 | 0.291 | 0.309 | -23.27 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Elliott (/100) → 6 | 117.92 | 53.1% | 0.813 | 7.56 | 15.6 | 0.635 | 1.015 | -9.66 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trọng số phần Divergence (/100) → 9 | 99.99 | 48.6% | 0.694 | 8.74 | 11.44 | 0.465 | 0.951 | -11.51 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần Momentum (/100) → 21 | 113.8 | 51.4% | 0.813 | 7.69 | 14.8 | 0.621 | 1.027 | -12.92 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Trọng số phần SL (/100) → 9 + Điểm vùng: HVN anchored → 0.188 | 116.16 | 52.4% | 0.801 | 7.71 | 15.07 | 0.635 | 0.989 | -8.34 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 101.73 | 49.7% | 0.692 | 8.5 | 11.97 | 0.577 | 0.809 | -11.66 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Ngưỡng điểm vào kèo → 77 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 11.63 | 54.5% | 0.095 | 7.79 | 1.49 | 0.141 | 0.051 | -10.79 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm tối thiểu của vùng đặt SL → 4 + R:R tối thiểu riêng khung 4H → 2 | 113.86 | 40% | 0.345 | 13.25 | 8.59 | 0.271 | 0.408 | -11.92 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần Momentum (/100) → 25 | 106.87 | 49% | 0.681 | 8.42 | 12.69 | 0.534 | 0.85 | -12.61 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần R:R (/100) → 33 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 98.79 | 50.3% | 0.663 | 8.36 | 11.82 | 0.614 | 0.717 | -8.44 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + % chốt ở TP1 → 0.287 | 115.8 | 52.1% | 0.804 | 7.6 | 15.24 | 0.637 | 0.991 | -8.32 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 117.03 | 53.5% | 0.813 | 7.42 | 15.77 | 0.634 | 1.018 | -9.66 |  |

### Vòng 705 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.27R, lời÷rủi ro 16.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Biên mây Ichimoku → 1.35 + Cộng điểm phân kỳ dương ẩn → 3 + Khung lớn phải tăng (trend ≥) → 0.375 | 111.36 | 51% | 0.758 | 7.96 | 13.99 | 0.581 | 0.947 | -9.22 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Cộng thêm ngưỡng điểm khung 1D → 5 | 118.95 | 53.1% | 0.82 | 7.5 | 15.86 | 0.629 | 1.043 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Entry (/100) → 33 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.09 | 56% | 0.178 | 5.62 | 5.53 | 0.22 | 0.142 | -10.82 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần R:R (/100) → 33 | 117.92 | 53.1% | 0.813 | 7.51 | 15.7 | 0.635 | 1.015 | -9.66 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 71.18 | 47.2% | 0.659 | 9 | 7.91 | 0.473 | 0.867 | -6.48 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm vào kèo → 77 | 148.35 | 38.6% | 0.545 | 17.65 | 8.41 | 0.52 | 0.572 | -22.93 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu tới TP1 → 2.63 | 103.41 | 47.1% | 0.676 | 8.39 | 12.33 | 0.652 | 0.697 | -9.96 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Break mây Ichimoku → 3 | 111.39 | 49.4% | 0.679 | 8.77 | 12.7 | 0.575 | 0.789 | -9.45 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 | 108.87 | 51.7% | 0.751 | 7.81 | 13.94 | 0.66 | 0.841 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: BOS → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần Entry (/100) → 33 | 115.89 | 51% | 0.748 | 8.02 | 14.45 | 0.603 | 0.91 | -10.69 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Mức MACD → 0.875 | 114.32 | 52.8% | 0.805 | 7.82 | 14.62 | 0.674 | 0.944 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 113.35 | 51.1% | 0.804 | 7.61 | 14.89 | 0.621 | 1.005 | -12.92 |  |

### Vòng 704 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.25R, lời÷rủi ro 16.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Cổng Dow → TẮT + Điểm vùng: HVN anchored → 0.313 | 138.53 | 44% | 0.635 | 11.01 | 12.58 | 0.592 | 0.679 | -18.74 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Mức MACD → 0.875 | 111.04 | 52.5% | 0.788 | 7.73 | 14.36 | 0.605 | 0.983 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Trend (/100) → 19 + Cổng Dow → TẮT | 130.77 | 43.9% | 0.617 | 11.67 | 11.21 | 0.544 | 0.687 | -19.64 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: HVN cố định → 0.563 | 118.27 | 52.3% | 0.794 | 7.77 | 15.22 | 0.614 | 0.992 | -9.66 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: POC anchored → 2 + Số TP tối đa → 2 | 101.57 | 49.7% | 0.673 | 8.61 | 11.8 | 0.519 | 0.832 | -8.63 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: POC anchored → 2 | 151.07 | 38.7% | 0.526 | 18.15 | 8.32 | 0.307 | 0.747 | -13.37 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + R:R tối thiểu riêng khung 1W → 2 | 110.13 | 52.1% | 0.754 | 7.66 | 14.38 | 0.648 | 0.861 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cộng điểm phân kỳ dương ẩn → 2.25 | 127.69 | 45.3% | 0.568 | 10.62 | 12.02 | 0.584 | 0.55 | -10.74 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 106.71 | 41% | 0.35 | 12.28 | 8.69 | 0.322 | 0.373 | -10.83 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: MACD cắt lên Signal → 0.438 + Đệm SL riêng khung 1D (ATR) → 0.3 | 72.44 | 42.2% | 0.387 | 13.29 | 5.45 | 0.421 | 0.359 | -7.85 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 1W → 2 | 76.16 | 47.7% | 0.712 | 8.58 | 8.88 | 0.473 | 0.984 | -6.48 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 115.92 | 53.5% | 0.816 | 7.25 | 15.99 | 0.621 | 1.029 | -9.66 |  |

### Vòng 703 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.31

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 70.21 | 45.3% | 0.549 | 9.62 | 7.3 | 0.488 | 0.613 | -8.66 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 | 90.59 | 50.4% | 0.749 | 8.06 | 11.24 | 0.585 | 0.939 | -17.09 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.563 | 111.62 | 49% | 0.781 | 8.33 | 13.4 | 0.577 | 0.987 | -9.68 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + R:R tối thiểu riêng khung 1W → 2 | 109.48 | 51.4% | 0.74 | 7.8 | 14.04 | 0.637 | 0.843 | -10.69 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần Momentum (/100) → 25 + Trọng số phần Elliott (/100) → 10 | 98.14 | 50.4% | 0.738 | 7.77 | 12.63 | 0.596 | 0.905 | -8.27 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: EMA 50 → 1.13 + Khung lớn phải tăng (trend ≥) → 0.425 | 109.62 | 49.3% | 0.751 | 8.44 | 12.99 | 0.526 | 1.024 | -8.7 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 21 → 0.875 + Điểm tối thiểu của vùng đặt SL → 4 | 95.37 | 47.3% | 0.636 | 9.33 | 10.22 | 0.565 | 0.713 | -8.24 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC anchored → 4 | 87.37 | 37.2% | 0.366 | 19.88 | 4.39 | 0.186 | 0.541 | -4.6 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Momentum (/100) → 21 | 127.76 | 48.2% | 0.77 | 9.99 | 12.79 | 0.752 | 0.784 | -2.19 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Mức RSI 30/70 → 1.13 + Ngưỡng điểm vào kèo → 77 + Khung lớn phải tăng (trend ≥) → 0.375 | 108.24 | 50.3% | 0.757 | 7.74 | 13.98 | 0.615 | 0.909 | -9.66 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần Entry (/100) → 33 | 115.85 | 52.4% | 0.81 | 7.59 | 15.26 | 0.651 | 0.986 | -9.66 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: MACD cắt lên Signal → 0.563 | 115.42 | 52.9% | 0.824 | 7.3 | 15.81 | 0.606 | 1.077 | -9.69 |  |

### Vòng 702 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.45R, lời÷rủi ro 15.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: EMA 21 → 0.875 | 99.23 | 47.8% | 0.741 | 8.62 | 11.51 | 0.571 | 0.92 | -10.3 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: EMA 21 → 0.875 | 117.24 | 51.7% | 0.82 | 7.61 | 15.41 | 0.677 | 0.973 | -9.66 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: HVN anchored → 0.188 | 118.45 | 53.5% | 0.823 | 7.45 | 15.9 | 0.637 | 1.036 | -9.67 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần Divergence (/100) → 12 | 117.1 | 50.4% | 0.855 | 7.6 | 15.41 | 0.68 | 1.067 | -8.73 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Trend (/100) → 12 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 114.98 | 50% | 0.777 | 8.05 | 14.28 | 0.667 | 0.89 | -10 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: EMA 21 → 0.875 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức RSI 30/70 → 0.875 | 112.94 | 48% | 0.753 | 8.81 | 12.82 | 0.578 | 0.964 | -7.89 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Mức RSI 30/70 → 1.13 | 117.92 | 53.1% | 0.813 | 7.58 | 15.56 | 0.635 | 1.015 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Lệnh chờ hết hạn sau (nến) → 6 | 103.15 | 40.7% | 0.35 | 12.72 | 8.11 | 0.296 | 0.394 | -7.84 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: BOS → 1 | 100.29 | 37.6% | 0.393 | 16.28 | 6.16 | 0.36 | 0.424 | -8.28 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 115.96 | 52.1% | 0.817 | 7.65 | 15.16 | 0.639 | 1.015 | -9.66 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng thêm ngưỡng điểm khung 1D → 5 + R:R tối thiểu riêng khung 1W → 2 + Xác nhận khung nhỏ (A2) → W | 98 | 38.9% | 0.389 | 15.99 | 6.13 | 0.418 | 0.363 | -2.71 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Đệm SL riêng khung 1W (ATR) → 0.3 | 76.17 | 38% | 0.276 | 15.37 | 4.96 | 0.234 | 0.313 | -15.11 |  |

### Vòng 701 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: EMA 200 → 1 + Cộng thêm ngưỡng điểm khung 1D → 3 | 109.67 | 48.5% | 0.649 | 9.88 | 11.1 | 0.494 | 0.848 | -2.09 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Mức RSI 30/70 → 0.875 + Xác nhận khung nhỏ (A2) → W | 98.9 | 39% | 0.382 | 16.59 | 5.96 | 0.346 | 0.414 | -3.73 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Break mây Ichimoku → 1 | 102.96 | 49.7% | 0.691 | 8.39 | 12.27 | 0.537 | 0.865 | -12.06 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 99.8 | 50.3% | 0.679 | 8.1 | 12.32 | 0.594 | 0.77 | -10.95 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Lệnh chờ hết hạn sau (nến) → 6 + Khung lớn phải tăng (trend ≥) → 0.425 | 95.83 | 50.4% | 0.743 | 7.85 | 12.21 | 0.552 | 0.969 | -7.28 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: BOS → 3 + R:R tối thiểu riêng khung 1D → 2 | 109 | 46.6% | 0.626 | 9.04 | 12.06 | 0.606 | 0.646 | -7.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trọng số phần Divergence (/100) → 12 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 115 | 51.7% | 0.793 | 7.64 | 15.05 | 0.591 | 1.028 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: EMA 50 → 1.13 + R:R tối thiểu riêng khung 4H → 2 | 108.58 | 39.5% | 0.349 | 13.18 | 8.24 | 0.318 | 0.376 | -9.24 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 113.65 | 51.7% | 0.773 | 7.81 | 14.55 | 0.634 | 0.926 | -10.95 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 27.47 | 38.6% | 0.392 | 10.63 | 2.58 | 0.278 | 0.546 | -4.32 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + % chốt ở TP1 → 0.307 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 106.31 | 50% | 0.728 | 8.18 | 13 | 0.564 | 0.892 | -9.64 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Trend (/100) → 12 | 106.79 | 52% | 0.712 | 8.3 | 12.87 | 0.6 | 0.837 | -9.66 |  |

### Vòng 700 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.25R, lời÷rủi ro 16.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Divergence (/100) → 9 | 112.53 | 47.6% | 0.67 | 9.97 | 11.29 | 0.676 | 0.665 | -6.7 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần SL (/100) → 7 + % chốt ở TP1 → 0.307 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 123.47 | 50% | 0.802 | 8 | 15.43 | 0.769 | 0.839 | -10.25 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: HVN anchored → 0.313 + Khung lớn phải tăng (trend ≥) → 0.375 | 76.7 | 47.2% | 0.604 | 9.16 | 8.37 | 0.458 | 0.748 | -9.2 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Số TP tối đa → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 + Khung lớn phải tăng (trend ≥) → 0.425 | 115.81 | 52.9% | 0.827 | 7.32 | 15.82 | 0.606 | 1.083 | -8.67 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 72.9 | 47.2% | 0.675 | 8.57 | 8.51 | 0.43 | 0.949 | -6.48 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 113.8 | 51.4% | 0.813 | 7.72 | 14.74 | 0.621 | 1.027 | -12.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: BOS → 1 | 118.38 | 53.5% | 0.822 | 7.25 | 16.33 | 0.635 | 1.037 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Momentum (/100) → 25 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 23.07 | 50.8% | 0.095 | 15.4 | 1.5 | 0.037 | 0.141 | -16.99 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Break mây Ichimoku → 3 | 94.74 | 47.5% | 0.592 | 9.52 | 9.95 | 0.493 | 0.697 | -8.62 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần Elliott (/100) → 6 | 117.28 | 50.3% | 0.767 | 8.17 | 14.35 | 0.594 | 0.961 | -10.69 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Số TP tối đa → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần Trend (/100) → 12 | 102.22 | 51% | 0.695 | 8.06 | 12.68 | 0.56 | 0.849 | -11.78 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Cộng điểm phân kỳ dương ẩn → 2.25 | 115.61 | 52.4% | 0.797 | 7.85 | 14.73 | 0.591 | 1.037 | -9.66 |  |
