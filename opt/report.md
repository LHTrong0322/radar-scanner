# Tối ưu tự động (chạy liên tục) — vòng 834

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 9663 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 94.27R | 0.578 | 5.7R | 9.78R | 9.64 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 145 | 53.1% | 118.93R | 0.82 | 5.09R | 7.35R | 16.18 | 28 | 17.9% | -9.92R | -0.354 | 10.54R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.77R | 2 | 0% | -2.3R |
| 4H | 107 | 54.2% | 91.73R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 94.27R | 9.78R | 9.64 | 31 | 12.9% | -13R |
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

### Vòng 834 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.35R, lời÷rủi ro 16.18

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1D (ATR) → 0.3 | 128.34 | 38.9% | 0.402 | 18.01 | 7.13 | 0.448 | 0.358 | -8.21 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 102.74 | 49.7% | 0.709 | 8.1 | 12.68 | 0.451 | 1.016 | -10.49 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: EMA 50 → 1.13 | 114.77 | 50.7% | 0.797 | 7.68 | 14.94 | 0.602 | 1.021 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 141.34 | 38.9% | 0.491 | 18.85 | 7.5 | 0.319 | 0.663 | -14.33 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: EMA 50 → 1.13 | 99.06 | 49.6% | 0.78 | 8.14 | 12.17 | 0.497 | 1.096 | -9.55 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: POC volume profile cố định → 0.688 | 138.54 | 44.4% | 0.641 | 11.07 | 12.51 | 0.584 | 0.699 | -19.51 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: HVN cố định → 0.438 | 110.73 | 51% | 0.753 | 7.48 | 14.8 | 0.585 | 0.944 | -10.26 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.19 | 50% | 0.681 | 8.02 | 12.74 | 0.633 | 0.733 | -8.39 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: EMA 50 → 0.75 + SL tối đa (% Entry) → 0.425 | 114.83 | 52.1% | 0.797 | 7.4 | 15.52 | 0.628 | 0.972 | -9.92 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib sóng 4 → 1.56 + Khung lớn phải tăng (trend ≥) → 0.425 | 115.22 | 52.4% | 0.806 | 7.47 | 15.42 | 0.567 | 1.092 | -9.95 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: BOS → 3 | 102.73 | 51.7% | 0.699 | 7.94 | 12.94 | 0.637 | 0.768 | -9.72 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: HVN anchored → 0.188 | 102.57 | 49.3% | 0.712 | 8.08 | 12.69 | 0.467 | 0.994 | -10.49 |  |

### Vòng 833 — ngẫu nhiên nhiều thông số · mốc: tổng 118.76R, win 52.4%, rủi ro tụt vốn 7.59R, lời÷rủi ro 15.65

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 116.73 | 53% | 0.783 | 7.52 | 15.52 | 0.594 | 0.992 | -9.93 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Cộng điểm phân kỳ dương ẩn → 3 | 89.54 | 50.4% | 0.765 | 7.83 | 11.44 | 0.56 | 0.981 | -17.42 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: EMA 200 → 1 + Trọng số phần Trend (/100) → 12 | 116.63 | 51.3% | 0.748 | 8.16 | 14.29 | 0.611 | 0.916 | -5.96 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Cổng Dow → CHẶT + Đệm SL riêng khung 1D (ATR) → 0.3 | 84.87 | 47.4% | 0.629 | 9.48 | 8.95 | 0.364 | 0.789 | -5.75 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Trend (/100) → 12 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 116.9 | 40.4% | 0.369 | 13.02 | 8.98 | 0.338 | 0.393 | -11.25 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: HVN cố định → 0.438 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 60.75 | 45% | 0.547 | 9.94 | 6.11 | 0.41 | 0.702 | -7.1 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: HVN anchored → 0.188 | 115.62 | 52.1% | 0.803 | 7.77 | 14.88 | 0.576 | 1.043 | -10.95 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 97.61 | 50% | 0.669 | 8.85 | 11.03 | 0.529 | 0.82 | -10.95 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Xác nhận khung nhỏ (A2) → W | 116 | 40.6% | 0.417 | 15.14 | 7.66 | 0.43 | 0.406 | -3.51 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Cộng thêm ngưỡng điểm khung 4H → -1 | 118.31 | 52.3% | 0.763 | 8.1 | 14.61 | 0.62 | 0.937 | -5.96 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 59.22 | 39.7% | 0.47 | 12.15 | 4.87 | 0.442 | 0.498 | -10.21 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + SL tối đa (% Entry) → 0.425 + Lệnh chờ hết hạn sau (nến) → 6 | 99.56 | 50% | 0.754 | 8.07 | 12.34 | 0.585 | 0.951 | -11.68 |  |

### Vòng 832 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.29R, lời÷rủi ro 16.31

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm tối thiểu của vùng đặt SL → 4 | 74.5 | 43.6% | 0.457 | 10.85 | 6.87 | 0.402 | 0.509 | -9.06 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 34.34 | 38.3% | 0.299 | 12.79 | 2.68 | 0.435 | 0.155 | -3.03 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 24.44 | 56.2% | 0.167 | 6.78 | 3.6 | 0.207 | 0.138 | -10.87 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần R:R (/100) → 28 | 112.14 | 46.3% | 0.692 | 10.15 | 11.05 | 0.693 | 0.691 | -6.61 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 1D → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 | 114.62 | 51.4% | 0.785 | 7.41 | 15.47 | 0.599 | 0.992 | -9.75 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 113.19 | 46.9% | 0.647 | 8.67 | 13.06 | 0.606 | 0.685 | -8.18 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Số TP tối đa → 2 + Điểm vùng: HVN anchored → 0.188 | 105.5 | 51% | 0.728 | 7.8 | 13.53 | 0.699 | 0.76 | -12.78 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần R:R (/100) → 33 | 116.49 | 49% | 0.782 | 8.04 | 14.49 | 0.548 | 1.038 | -13.08 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần SL (/100) → 9 + Điểm vùng: EMA 50 → 1.13 + % chốt ở TP1 → 0.287 | 113.45 | 50.3% | 0.772 | 7.88 | 14.4 | 0.595 | 0.972 | -8.99 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Fib sóng 4 → 1.56 | 115.22 | 52.4% | 0.806 | 7.49 | 15.38 | 0.567 | 1.092 | -9.96 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + % chốt ở TP1 → 0.307 | 97.11 | 47.4% | 0.719 | 8.83 | 11 | 0.437 | 0.966 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Mức RSI 30/70 → 0.875 + R:R tối thiểu tới TP1 → 2.63 | 119.04 | 45.2% | 0.572 | 11.33 | 10.51 | 0.68 | 0.462 | -18.78 |  |

### Vòng 831 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.07

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 48.6 | 39.6% | 0.296 | 14.3 | 3.4 | 0.466 | 0.119 | -14.07 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Mức MACD → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 77.3 | 47.4% | 0.678 | 8.32 | 9.29 | 0.474 | 0.905 | -14.06 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 100.49 | 51.4% | 0.688 | 7.75 | 12.97 | 0.628 | 0.753 | -9.72 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 78.34 | 45.1% | 0.484 | 10.62 | 7.38 | 0.374 | 0.591 | -8.78 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: EMA 200 → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 109.57 | 51.2% | 0.685 | 9.12 | 12.01 | 0.625 | 0.754 | -2.83 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 90.14 | 45.9% | 0.617 | 10.28 | 8.77 | 0.719 | 0.516 | -11.6 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 50 → 0.75 | 97.5 | 50.7% | 0.668 | 8.13 | 11.99 | 0.579 | 0.764 | -9.72 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 95.59 | 47.7% | 0.633 | 9.75 | 9.8 | 0.458 | 0.836 | -7.29 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: HVN anchored → 0.313 + R:R tối thiểu riêng khung 4H → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 89.36 | 40.9% | 0.312 | 13.13 | 6.81 | 0.294 | 0.327 | -9.47 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: POC volume profile cố định → 0.688 + Cộng thêm ngưỡng điểm khung 1D → 3 | 116.8 | 52% | 0.789 | 7.61 | 15.35 | 0.619 | 0.979 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Momentum (/100) → 21 + Coin phải mạnh hơn BTC trong N ngày → 14 | 89.25 | 46.5% | 0.692 | 9.38 | 9.51 | 0.528 | 0.858 | -15.44 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Ngưỡng điểm vào kèo → 77 | 115.88 | 51% | 0.81 | 7.36 | 15.74 | 0.646 | 0.986 | -9.92 |  |

### Vòng 830 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.07

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 122.21 | 36.7% | 0.427 | 19.57 | 6.24 | 0.318 | 0.519 | -11.52 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cộng điểm phân kỳ dương ẩn → 3 + SL tối đa (% Entry) → 0.425 | 116.46 | 52% | 0.787 | 7.82 | 14.89 | 0.614 | 0.979 | -9.92 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 80.18 | 51.8% | 0.716 | 7.07 | 11.34 | 0.304 | 1.06 | -12.98 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 108.75 | 51% | 0.711 | 8.53 | 12.75 | 0.553 | 0.898 | -7.34 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức RSI 30/70 → 0.875 | 116.57 | 49.7% | 0.772 | 8.48 | 13.75 | 0.565 | 1.039 | -9.17 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 104.95 | 48.4% | 0.652 | 8.82 | 11.9 | 0.539 | 0.795 | -4.93 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: EMA 200 → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 105.87 | 47.4% | 0.687 | 8.95 | 11.83 | 0.58 | 0.804 | -11.5 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Mức MACD → 0.875 | 114.71 | 40.2% | 0.355 | 14.1 | 8.14 | 0.407 | 0.317 | -7.46 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Momentum (/100) → 25 | 83.6 | 48.1% | 0.648 | 8.87 | 9.43 | 0.454 | 0.886 | -16.39 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: POC volume profile cố định → 0.688 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Vùng RSI 45–55 → 0.875 | 114.71 | 40.7% | 0.403 | 15.49 | 7.41 | 0.444 | 0.36 | -7.03 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.688 + Ngưỡng điểm vào kèo → 77 | 104.45 | 46.5% | 0.725 | 8.94 | 11.68 | 0.592 | 0.855 | -10.69 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Fib sóng 4 → 0.938 | 113.64 | 51.7% | 0.795 | 7.55 | 15.05 | 0.594 | 1.011 | -9.92 |  |

### Vòng 829 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.29R, lời÷rủi ro 16.31

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần Trend (/100) → 19 | 97.98 | 48.3% | 0.658 | 8.86 | 11.06 | 0.456 | 0.879 | -6.32 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Cộng thêm ngưỡng điểm khung 1W → 2 + SL tối đa (% Entry) → 0.425 | 86.22 | 49.2% | 0.731 | 8.01 | 10.76 | 0.559 | 0.92 | -16.39 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 87.8 | 38.9% | 0.282 | 15.25 | 5.76 | 0.269 | 0.294 | -19.06 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: BOS → 3 + Trọng số phần SL (/100) → 9 | 112.02 | 50% | 0.778 | 7.6 | 14.74 | 0.598 | 0.968 | -9.92 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 118.47 | 52.7% | 0.811 | 7.51 | 15.77 | 0.635 | 1.008 | -8.9 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 200 → 3 | 107.87 | 46.1% | 0.654 | 10.58 | 10.2 | 0.589 | 0.711 | -6.35 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Trọng số phần Trend (/100) → 19 + Trọng số phần SL (/100) → 7 + R:R tối thiểu riêng khung 4H → 2 | 121.07 | 41.6% | 0.384 | 12.08 | 10.02 | 0.343 | 0.418 | -1.73 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Biên mây Ichimoku → 1.05 + Khung lớn phải tăng (trend ≥) → 0.375 | 103.62 | 50.7% | 0.72 | 7.76 | 13.35 | 0.572 | 0.871 | -10.75 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 116.8 | 45.7% | 0.721 | 10.49 | 11.13 | 0.733 | 0.71 | -5.06 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Ngưỡng điểm vào kèo → 74 | 134.72 | 45.9% | 0.578 | 10.16 | 13.26 | 0.6 | 0.555 | -13.36 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần SL (/100) → 9 + Điểm vùng: HVN anchored → 0.188 | 95.69 | 46.7% | 0.709 | 9.12 | 10.49 | 0.437 | 0.947 | -10.69 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Break mây Ichimoku → 1 + Cộng thêm ngưỡng điểm khung 1W → 2 | 105.09 | 48.6% | 0.71 | 8.23 | 12.77 | 0.56 | 0.869 | -9.99 |  |

### Vòng 828 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + R:R tối thiểu riêng khung 4H → 2 | 121.91 | 41.7% | 0.391 | 11.65 | 10.46 | 0.361 | 0.415 | -8.69 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: BOS → 1 | 134.55 | 45.1% | 0.577 | 10.89 | 12.36 | 0.642 | 0.51 | -12.83 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 120.75 | 50.3% | 0.779 | 8.16 | 14.8 | 0.594 | 0.981 | -9.64 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 18.82 | 54.9% | 0.133 | 7.52 | 2.5 | 0.143 | 0.125 | -10.52 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: MACD cắt lên Signal → 0.438 | 91.52 | 48.1% | 0.699 | 8.97 | 10.2 | 0.375 | 1.038 | -7.02 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + % chốt ở TP1 → 0.307 + Điểm vùng: HVN anchored → 0.188 | 110.94 | 50.7% | 0.75 | 7.89 | 14.06 | 0.569 | 0.94 | -10 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Trọng số phần Momentum (/100) → 25 | 119.67 | 52.1% | 0.82 | 7.45 | 16.06 | 0.64 | 1.014 | -8.61 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 122.96 | 53.1% | 0.836 | 7.35 | 16.73 | 0.686 | 0.998 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Trend (/100) → 19 + Khung lớn phải tăng (trend ≥) → 0.425 | 118.12 | 52.4% | 0.826 | 7.33 | 16.11 | 0.585 | 1.099 | -9.96 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 97.67 | 45.9% | 0.66 | 9.36 | 10.43 | 0.493 | 0.851 | -8.13 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 122.14 | 53.4% | 0.837 | 7.23 | 16.89 | 0.635 | 1.061 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: POC anchored → 2 | 105.9 | 49% | 0.683 | 8.86 | 11.95 | 0.518 | 0.869 | -10.89 |  |

### Vòng 827 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.07

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần Trend (/100) → 19 | 117.72 | 52.4% | 0.801 | 7.56 | 15.57 | 0.635 | 0.983 | -8.61 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 4H (ATR) → 0.3 | 115.46 | 38.4% | 0.527 | 16.64 | 6.94 | 0.389 | 0.652 | -19.6 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 94.69 | 51% | 0.644 | 8.49 | 11.15 | 0.634 | 0.654 | -10.76 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 117.92 | 52.7% | 0.808 | 7.29 | 16.18 | 0.635 | 1 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Cộng thêm ngưỡng điểm khung 1D → 5 + Trọng số phần R:R (/100) → 33 | 115.31 | 51.7% | 0.806 | 7.44 | 15.5 | 0.6 | 1.041 | -9.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: BOS → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Mức MACD → 0.875 | 111.57 | 47.2% | 0.693 | 10.09 | 11.06 | 0.665 | 0.719 | -4.31 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Momentum (/100) → 21 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 107.65 | 51.7% | 0.732 | 7.65 | 14.07 | 0.59 | 0.885 | -9.44 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm tối thiểu của vùng đặt SL → 2 + R:R tối thiểu tới TP1 → 2.38 + Cổng Dow → CHẶT | 74.22 | 48.5% | 0.546 | 8.23 | 9.02 | 0.446 | 0.614 | -14.16 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Ngưỡng điểm vào kèo → 77 + Cộng điểm phân kỳ dương ẩn → 2.25 | 112.37 | 50.7% | 0.791 | 7.45 | 15.08 | 0.646 | 0.949 | -9.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib sóng 4 → 1.56 | 100.9 | 46.4% | 0.721 | 9.27 | 10.88 | 0.448 | 0.971 | -10.69 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: POC anchored → 2 | 102.32 | 49% | 0.678 | 8.38 | 12.21 | 0.53 | 0.835 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 106.13 | 47.6% | 0.742 | 8.42 | 12.6 | 0.636 | 0.862 | -13.71 |  |

### Vòng 826 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.35R, lời÷rủi ro 16.18

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 115.55 | 51.7% | 0.786 | 7.72 | 14.97 | 0.642 | 0.94 | -8.74 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 104.73 | 48.6% | 0.708 | 8.36 | 12.53 | 0.561 | 0.872 | -10.03 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Đệm SL riêng khung 1D (ATR) → 0.3 | 114.05 | 46.7% | 0.683 | 10.41 | 10.96 | 0.653 | 0.709 | -4.3 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Đệm SL riêng khung 1D (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 37.53 | 59.6% | 0.211 | 6.89 | 5.45 | 0.266 | 0.168 | -5.87 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.25 | 57.3% | 0.186 | 6 | 4.88 | 0.234 | 0.144 | -9.59 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: HVN cố định → 0.563 | 92.06 | 46.2% | 0.635 | 9.73 | 9.46 | 0.418 | 0.894 | -10.8 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.313 | 153.95 | 39.3% | 0.54 | 17.76 | 8.67 | 0.386 | 0.696 | -11.49 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: HVN cố định → 0.563 | 91.74 | 53.6% | 0.734 | 6.97 | 13.16 | 0.375 | 1.044 | -12.04 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 90.8 | 49.3% | 0.631 | 8.69 | 10.45 | 0.503 | 0.773 | -9.71 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần R:R (/100) → 28 | 38.16 | 40.7% | 0.444 | 9.87 | 3.87 | 0.358 | 0.547 | -7.55 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Cộng thêm ngưỡng điểm khung 1W → -1 + R:R tối thiểu riêng khung 4H → 2 | 118.51 | 41.8% | 0.381 | 12.14 | 9.76 | 0.322 | 0.431 | -8.43 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Divergence (/100) → 9 | 117.24 | 47.3% | 0.702 | 9.81 | 11.95 | 0.676 | 0.725 | -4.3 |  |

### Vòng 825 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.45R, lời÷rủi ro 15.96

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 112.37 | 50.7% | 0.791 | 7.4 | 15.19 | 0.646 | 0.949 | -9.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 115.46 | 38.4% | 0.527 | 16.66 | 6.93 | 0.389 | 0.652 | -16.39 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Đệm SL riêng khung 4H (ATR) → 0.3 | 147.24 | 38.6% | 0.517 | 18.43 | 7.99 | 0.342 | 0.69 | -10.41 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Momentum (/100) → 25 | 112 | 50.3% | 0.772 | 7.74 | 14.47 | 0.599 | 0.963 | -9.85 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần R:R (/100) → 33 | 117.46 | 52.4% | 0.799 | 7.35 | 15.98 | 0.635 | 0.979 | -10.03 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: HVN cố định → 0.438 + Cộng thêm ngưỡng điểm khung 4H → 2 | 114.75 | 51% | 0.802 | 7.29 | 15.74 | 0.616 | 1.008 | -9.92 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 116.82 | 51.7% | 0.784 | 7.69 | 15.19 | 0.625 | 0.959 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 79.37 | 45.4% | 0.487 | 10.51 | 7.55 | 0.382 | 0.591 | -8.8 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + R:R tối thiểu riêng khung 4H → 2 | 120.9 | 41.8% | 0.389 | 12.21 | 9.9 | 0.337 | 0.431 | -8.43 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 4H → 2 + Cộng thêm ngưỡng điểm khung 1W → -1 | 108.28 | 47.6% | 0.757 | 8.44 | 12.83 | 0.597 | 0.915 | -10.69 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm tối thiểu của vùng đặt SL → 4 + Số TP tối đa → 2 + Điểm vùng: EMA 50 → 1.13 | 111.61 | 50% | 0.786 | 7.55 | 14.78 | 0.574 | 1.023 | -7.64 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: HVN anchored → 0.313 | 116.76 | 50.7% | 0.8 | 8.03 | 14.54 | 0.647 | 0.966 | -8.63 |  |
