# Tối ưu tự động (chạy liên tục) — vòng 1450

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 17020 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 47% | 97.31R | 0.593 | 6.7R | 9.94R | 9.79 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 141 | 53.2% | 120.32R | 0.853 | 5.15R | 7.11R | 16.92 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 26 | 50% | 20.05R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 104 | 54.8% | 93.3R | 19 | 21.1% | -4.19R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 47% | 97.31R | 9.94R | 9.79 | 30 | 13.3% | -11.98R |
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

### Vòng 1450 — ngẫu nhiên nhiều thông số · mốc: tổng 120.32R, win 53.2%, rủi ro tụt vốn 7.11R, lời÷rủi ro 16.92

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 102.56 | 47.1% | 0.733 | 8.42 | 12.18 | 0.56 | 0.943 | -9.38 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Mức RSI 30/70 → 0.875 | 122.25 | 51.3% | 0.804 | 8.14 | 15.02 | 0.625 | 1.02 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: HVN anchored → 0.188 + R:R tối thiểu riêng khung 4H → 2 | 137.64 | 42.4% | 0.436 | 11.37 | 12.11 | 0.437 | 0.435 | -6.41 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 120.32 | 53.2% | 0.853 | 7.11 | 16.92 | 0.694 | 1.034 | -12.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 50 → 0.75 + SL tối đa (% Entry) → 0.425 | 106.53 | 50.7% | 0.74 | 7.91 | 13.47 | 0.627 | 0.85 | -13.19 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: HVN anchored → 0.188 | 96.87 | 46.2% | 0.677 | 9.13 | 10.61 | 0.551 | 0.821 | -8.13 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 106.35 | 51.7% | 0.723 | 7.8 | 13.63 | 0.613 | 0.835 | -10.9 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: MACD cắt lên Signal → 0.438 | 108.9 | 48.5% | 0.66 | 9.58 | 11.37 | 0.497 | 0.85 | -11.17 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Fib sóng 4 → 0.938 + Số TP tối đa → 3 | 98.63 | 48% | 0.666 | 9.17 | 10.76 | 0.479 | 0.882 | -10.59 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần R:R (/100) → 33 + Trọng số phần Divergence (/100) → 12 | 119.12 | 52.4% | 0.833 | 7.41 | 16.08 | 0.66 | 1.034 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Đệm SL riêng khung 1D (ATR) → 0.3 | 100.91 | 44.4% | 0.623 | 10.76 | 9.38 | 0.743 | 0.527 | -10.76 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 103.68 | 48.6% | 0.72 | 8.26 | 12.55 | 0.592 | 0.867 | -12.1 |  |

### Vòng 1449 — ngẫu nhiên nhiều thông số · mốc: tổng 120.32R, win 53.2%, rủi ro tụt vốn 7.29R, lời÷rủi ro 16.50

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + R:R tối thiểu riêng khung 1W → 2 + Xác nhận khung nhỏ (A2) → W | 101.93 | 39.4% | 0.409 | 15.06 | 6.77 | 0.406 | 0.413 | -7.64 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Số TP tối đa → 1 | 120.32 | 53.2% | 0.853 | 7.29 | 16.5 | 0.694 | 1.034 | -12.16 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: EMA 21 → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 104.57 | 47% | 0.702 | 7.97 | 13.12 | 0.639 | 0.763 | -11.18 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 73.1 | 45.8% | 0.683 | 9.23 | 7.92 | 0.471 | 0.935 | -5.79 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Entry (/100) → 28 + Điểm vùng: MACD cắt lên Signal → 0.563 | 120.32 | 53.2% | 0.853 | 7.29 | 16.5 | 0.694 | 1.034 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Cộng điểm phân kỳ dương ẩn → 2.25 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 119.57 | 52.8% | 0.842 | 7.27 | 16.45 | 0.694 | 1.008 | -10.84 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Cộng thêm ngưỡng điểm khung 1W → -1 | 120.32 | 53.2% | 0.853 | 7.29 | 16.5 | 0.694 | 1.034 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 98.82 | 48.9% | 0.732 | 8.19 | 12.07 | 0.504 | 0.985 | -14.99 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: MACD cắt lên Signal → 0.563 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 87.24 | 38.1% | 0.305 | 21.4 | 4.08 | 0.342 | 0.271 | -10.56 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: POC volume profile cố định → 0.688 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: BOS → 0 | 99.43 | 46.9% | 0.765 | 8.49 | 11.71 | 0.543 | 1.015 | -13.46 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 125.37 | 42.4% | 0.612 | 11.75 | 10.67 | 0.539 | 0.686 | -20.99 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần Divergence (/100) → 9 | 101.73 | 47.2% | 0.706 | 8.55 | 11.9 | 0.63 | 0.783 | -11.17 |  |

### Vòng 1448 — ngẫu nhiên nhiều thông số · mốc: tổng 120.32R, win 53.2%, rủi ro tụt vốn 7.16R, lời÷rủi ro 16.80

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Đệm SL riêng khung 4H (ATR) → 0.3 | 154.1 | 37.9% | 0.496 | 20.02 | 7.7 | 0.427 | 0.565 | -11.46 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Ngưỡng điểm vào kèo → 77 | 111.48 | 51.4% | 0.796 | 7.61 | 14.65 | 0.666 | 0.939 | -9.63 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: BOS → 2 + Trọng số phần Divergence (/100) → 12 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 28.82 | 57.4% | 0.178 | 5.65 | 5.1 | 0.209 | 0.149 | -6.73 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Trọng số phần Entry (/100) → 28 + Điểm vùng: POC volume profile cố định → 0.813 | 120.32 | 53.2% | 0.853 | 7.16 | 16.8 | 0.694 | 1.034 | -11.14 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 106.43 | 50.4% | 0.755 | 7.81 | 13.63 | 0.627 | 0.881 | -13.19 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Cộng thêm ngưỡng điểm khung 1D → 7 | 93.43 | 46.2% | 0.644 | 9.37 | 9.97 | 0.493 | 0.821 | -6.06 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: EMA 50 → 1.13 | 113.65 | 49.7% | 0.795 | 8.08 | 14.07 | 0.638 | 0.972 | -10.1 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cổng Dow → CHẶT + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Fib sóng 4 → 0.938 | 79.78 | 47.8% | 0.595 | 8.16 | 9.78 | 0.419 | 0.718 | -11.03 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: HVN cố định → 0.563 | 113.64 | 52.4% | 0.795 | 7.63 | 14.89 | 0.659 | 0.936 | -9.84 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + R:R tối thiểu riêng khung 1W → 2 | 110.28 | 51% | 0.761 | 7.76 | 14.21 | 0.661 | 0.862 | -13.19 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 50 → 0.75 | 106.07 | 50.3% | 0.742 | 7.88 | 13.46 | 0.627 | 0.855 | -13.19 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Đệm SL riêng khung 1W (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 76.26 | 44.4% | 0.605 | 10.52 | 7.25 | 0.411 | 0.826 | -18.27 |  |

### Vòng 1447 — ngẫu nhiên nhiều thông số · mốc: tổng 120.32R, win 53.2%, rủi ro tụt vốn 7.16R, lời÷rủi ro 16.80

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 4H → 2 + Điểm tối thiểu của vùng đặt SL → 2 + R:R tối thiểu tới TP1 → 2.63 | 161.8 | 35.3% | 0.376 | 22.18 | 7.29 | 0.354 | 0.393 | -16.96 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần SL (/100) → 9 | 115.63 | 51.8% | 0.844 | 7.03 | 16.45 | 0.682 | 1.024 | -12.16 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Trọng số phần Divergence (/100) → 12 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 200 → 1 | 66.7 | 45.5% | 0.606 | 9.5 | 7.02 | 0.418 | 0.84 | -0.98 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Elliott (/100) → 10 | 103.37 | 44.6% | 0.698 | 9.78 | 10.57 | 0.513 | 0.889 | -12.99 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 103 | 48.6% | 0.696 | 8.55 | 12.05 | 0.671 | 0.722 | -11.13 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 106.63 | 47.3% | 0.711 | 8.84 | 12.06 | 0.633 | 0.796 | -13.73 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 102.44 | 47.9% | 0.702 | 8.95 | 11.45 | 0.498 | 0.942 | -12.06 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + SL tối đa (% Entry) → 0.425 | 90.82 | 46.1% | 0.55 | 9.59 | 9.47 | 0.547 | 0.554 | -10.62 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 107.45 | 50.4% | 0.773 | 7.98 | 13.46 | 0.581 | 0.992 | -11.17 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Trend (/100) → 12 + Đệm SL riêng khung 1W (ATR) → 0.3 + Lệnh chờ hết hạn sau (nến) → 6 | 90.84 | 43.6% | 0.649 | 10.09 | 9 | 0.502 | 0.804 | -12.62 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Cổng Dow → TẮT | 135.21 | 45% | 0.609 | 11.26 | 12.01 | 0.532 | 0.694 | -22.33 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 84.88 | 38.1% | 0.317 | 18.25 | 4.65 | 0.367 | 0.267 | -4.41 |  |

### Vòng 1446 — ngẫu nhiên nhiều thông số · mốc: tổng 120.32R, win 53.2%, rủi ro tụt vốn 7.11R, lời÷rủi ro 16.92

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 123.1 | 44.1% | 0.542 | 10.79 | 11.41 | 0.559 | 0.525 | -13.62 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm tối thiểu của vùng đặt SL → 2 | 118.13 | 53.1% | 0.826 | 7.17 | 16.48 | 0.694 | 0.972 | -9.84 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Elliott (/100) → 10 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Biên mây Ichimoku → 1.05 | 80.25 | 37.1% | 0.346 | 17.81 | 4.51 | 0.348 | 0.344 | -6.92 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Mức MACD → 1.13 | 99.54 | 47.7% | 0.668 | 9.5 | 10.48 | 0.476 | 0.896 | -10.59 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: Break mây Ichimoku → 3 | 109.92 | 49.1% | 0.691 | 8.8 | 12.49 | 0.576 | 0.82 | -11.9 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Cộng thêm ngưỡng điểm khung 1W → 2 | 113.17 | 51.8% | 0.814 | 7.31 | 15.48 | 0.684 | 0.955 | -12.57 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 1W → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Ngưỡng điểm vào kèo → 74 | 64.39 | 45.5% | 0.585 | 9.46 | 6.81 | 0.49 | 0.685 | -7.02 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 21 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 45.9 | 35.5% | 0.209 | 20.56 | 2.23 | 0.185 | 0.232 | -7.45 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: EMA 21 → 1.13 + Cộng điểm phân kỳ dương ẩn → 2.25 | 101.48 | 47.2% | 0.623 | 8.59 | 11.81 | 0.556 | 0.688 | -12.45 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: BOS → 0 | 117.04 | 40.9% | 0.386 | 14.97 | 7.82 | 0.393 | 0.38 | -10.01 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 105.79 | 50% | 0.735 | 7.96 | 13.29 | 0.627 | 0.873 | -11.14 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + SL tối đa (% Entry) → 0.425 + Điểm vùng: POC volume profile cố định → 0.688 | 117.12 | 52.8% | 0.813 | 7.43 | 15.76 | 0.694 | 0.943 | -9.84 |  |

### Vòng 1445 — ngẫu nhiên nhiều thông số · mốc: tổng 120.32R, win 53.2%, rủi ro tụt vốn 7.16R, lời÷rủi ro 16.80

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 | 159.76 | 37.7% | 0.519 | 19.9 | 8.03 | 0.444 | 0.597 | -9.07 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 35.6 | 40.2% | 0.409 | 10.11 | 3.52 | 0.333 | 0.508 | -6.43 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm tối thiểu của vùng đặt SL → 4 | 30.54 | 57.1% | 0.198 | 5.86 | 5.21 | 0.23 | 0.168 | -7.73 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: POC anchored → 4 | 125.25 | 42% | 0.411 | 11.98 | 10.45 | 0.42 | 0.403 | -1.45 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Break mây Ichimoku → 1 | 15.29 | 55.6% | 0.121 | 7.14 | 2.14 | 0.128 | 0.116 | -5.48 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Break mây Ichimoku → 3 + Lệnh chờ hết hạn sau (nến) → 8 + Cổng Dow → TẮT | 93.8 | 38.9% | 0.424 | 15.52 | 6.04 | 0.397 | 0.451 | -15.14 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: HVN cố định → 0.438 | 113.62 | 50% | 0.789 | 7.87 | 14.44 | 0.636 | 0.96 | -11.12 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 102.35 | 49.7% | 0.716 | 8.16 | 12.54 | 0.58 | 0.866 | -9.45 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: EMA 200 → 3 | 108.57 | 50.4% | 0.77 | 7.86 | 13.81 | 0.579 | 0.975 | -13.15 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: BOS → 0 | 89.76 | 46.6% | 0.551 | 9.41 | 9.54 | 0.507 | 0.594 | -10.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: EMA 21 → 0.875 | 126.2 | 44.7% | 0.558 | 10.56 | 11.95 | 0.555 | 0.562 | -14.14 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Cổng Dow → CHẶT + Đệm SL riêng khung 1D (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 44.68 | 43.2% | 0.508 | 10.04 | 4.45 | 0.123 | 0.774 | -5.46 |  |

### Vòng 1444 — ngẫu nhiên nhiều thông số · mốc: tổng 120.33R, win 53.2%, rủi ro tụt vốn 7.1R, lời÷rủi ro 16.95

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Trend (/100) → 12 | 118.11 | 51.8% | 0.838 | 7.34 | 16.09 | 0.7 | 0.99 | -11.13 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Đệm SL riêng khung 4H (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 138.37 | 38.1% | 0.612 | 16.81 | 8.23 | 0.603 | 0.621 | -15.59 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Đệm SL riêng khung 4H (ATR) → 0.3 | 171.83 | 38.4% | 0.584 | 18.42 | 9.33 | 0.506 | 0.666 | -6.21 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: EMA 21 → 1.13 | 111.07 | 50.3% | 0.766 | 7.51 | 14.79 | 0.642 | 0.903 | -11.72 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 116.95 | 49% | 0.764 | 8.21 | 14.24 | 0.625 | 0.921 | -12.55 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Xác nhận khung nhỏ (A2) → W | 59.87 | 28.7% | 0.15 | 39.79 | 1.5 | 0.151 | 0.149 | -28.18 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Đệm SL riêng khung 4H (ATR) → 0.3 | 172.73 | 38.6% | 0.59 | 18.32 | 9.43 | 0.506 | 0.677 | -9.55 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm tối thiểu của vùng đặt SL → 4 + Cộng thêm ngưỡng điểm khung 4H → 2 | 96.49 | 46.7% | 0.643 | 9.86 | 9.79 | 0.504 | 0.798 | -9.15 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần R:R (/100) → 33 + Trọng số phần SL (/100) → 7 | 115.13 | 51.4% | 0.811 | 7.51 | 15.33 | 0.631 | 1.018 | -11.98 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL riêng khung 4H (ATR) → 0.3 + % chốt ở TP1 → 0.287 | 172.21 | 38.4% | 0.586 | 18.13 | 9.5 | 0.507 | 0.668 | -9.5 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Entry (/100) → 33 + SL tối đa (% Entry) → 0.425 | 84.09 | 47.9% | 0.719 | 8.23 | 10.22 | 0.576 | 0.885 | -17.6 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + % chốt ở TP1 → 0.287 + Xác nhận khung nhỏ (A2) → W + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | -0.33 | 43.2% | -0.001 | 19.5 | -0.02 | 0.053 | -0.051 | -8.1 |  |

### Vòng 1443 — ngẫu nhiên nhiều thông số · mốc: tổng 118.17R, win 52.9%, rủi ro tụt vốn 7.2R, lời÷rủi ro 16.41

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: MACD cắt lên Signal → 0.563 | 108.82 | 46.9% | 0.761 | 8.92 | 12.2 | 0.566 | 0.964 | -13 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Trọng số phần Momentum (/100) → 25 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 99.64 | 49.2% | 0.778 | 8.05 | 12.38 | 0.564 | 1 | -11.68 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 117.15 | 52.6% | 0.855 | 7.42 | 15.79 | 0.664 | 1.073 | -9.86 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: EMA 200 → 1 | 113.99 | 49.7% | 0.765 | 8.42 | 13.54 | 0.673 | 0.878 | -8.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 101.84 | 48.9% | 0.733 | 8.64 | 11.79 | 0.625 | 0.833 | -10.77 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Mức MACD → 1.13 | 115.16 | 51.1% | 0.829 | 7.81 | 14.75 | 0.647 | 1.036 | -7.52 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 121.2 | 44% | 0.556 | 10.43 | 11.62 | 0.545 | 0.566 | -14.53 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Cộng điểm phân kỳ dương ẩn → 2.25 | 118.17 | 52.9% | 0.869 | 7.2 | 16.41 | 0.687 | 1.073 | -9.86 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 123.48 | 43.8% | 0.569 | 10.85 | 11.38 | 0.576 | 0.562 | -14.01 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: HVN cố định → 0.563 | 107.01 | 46% | 0.665 | 8.85 | 12.09 | 0.683 | 0.649 | -6.66 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 117.42 | 52.6% | 0.857 | 7.36 | 15.95 | 0.687 | 1.045 | -8.54 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần Momentum (/100) → 25 | 117.39 | 50% | 0.725 | 8.89 | 13.2 | 0.59 | 0.885 | -11.45 |  |

### Vòng 1442 — ngẫu nhiên nhiều thông số · mốc: tổng 120.32R, win 53.2%, rủi ro tụt vốn 7.29R, lời÷rủi ro 16.50

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 66.14 | 43.5% | 0.505 | 10.82 | 6.11 | 0.468 | 0.548 | -10.88 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: POC anchored → 4 | 98.66 | 48.6% | 0.705 | 8.5 | 11.61 | 0.514 | 0.901 | -8.53 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: EMA 21 → 1.13 | 101.33 | 48.3% | 0.709 | 8.25 | 12.28 | 0.545 | 0.879 | -11.7 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Khung lớn phải tăng (trend ≥) → 0.425 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 171.72 | 39% | 0.609 | 17.39 | 9.87 | 0.535 | 0.685 | -8.06 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Cộng điểm phân kỳ dương ẩn → 2.25 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 28.44 | 50.2% | 0.111 | 14.28 | 1.99 | 0.098 | 0.121 | -15.57 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: EMA 200 → 1 + Đệm SL riêng khung 1W (ATR) → 0.3 | 110.11 | 40.4% | 0.377 | 13.03 | 8.45 | 0.329 | 0.414 | 1.19 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: HVN cố định → 0.563 | 109.22 | 50.4% | 0.775 | 7.93 | 13.77 | 0.632 | 0.942 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: POC volume profile cố định → 0.813 | 120.32 | 53.2% | 0.853 | 7.29 | 16.5 | 0.694 | 1.034 | -11.14 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Số TP tối đa → 3 | 118.85 | 52.4% | 0.831 | 7.33 | 16.21 | 0.677 | 1.005 | -12.16 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: HVN anchored → 0.313 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: EMA 21 → 0.875 | 66.45 | 43.6% | 0.475 | 11.01 | 6.04 | 0.511 | 0.434 | -12.64 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: BOS → 0 | 120.32 | 53.2% | 0.853 | 7.29 | 16.5 | 0.694 | 1.034 | -12.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + SL tối đa (% Entry) → 0.425 + Cổng Dow → CHẶT | 79.68 | 50.9% | 0.711 | 7.4 | 10.77 | 0.398 | 0.983 | -14.25 |  |

### Vòng 1441 — ngẫu nhiên nhiều thông số · mốc: tổng 120.32R, win 53.2%, rủi ro tụt vốn 7.11R, lời÷rủi ro 16.92

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Mức MACD → 1.13 | 112.03 | 50% | 0.778 | 7.83 | 14.31 | 0.665 | 0.901 | -12.99 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Cộng điểm phân kỳ dương ẩn → 2.25 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 88.15 | 45.7% | 0.544 | 9.7 | 9.09 | 0.51 | 0.577 | -10.16 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: EMA 21 → 0.875 | 114.63 | 51.7% | 0.802 | 7.63 | 15.02 | 0.679 | 0.936 | -9.87 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Elliott (/100) → 10 | 106 | 48.6% | 0.746 | 8.07 | 13.14 | 0.615 | 0.898 | -11.13 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 115.92 | 40.2% | 0.379 | 13.27 | 8.74 | 0.357 | 0.396 | -8.13 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: BOS → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 86.8 | 47% | 0.648 | 9.06 | 9.58 | 0.615 | 0.687 | -10.53 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần R:R (/100) → 28 | 115.67 | 50.4% | 0.82 | 7.7 | 15.02 | 0.66 | 1.003 | -11.14 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Trend (/100) → 19 | 108.64 | 51% | 0.749 | 7.66 | 14.18 | 0.637 | 0.87 | -12.99 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu riêng khung 1W → 2 + % chốt ở TP1 → 0.287 | 107.16 | 47.9% | 0.649 | 8.61 | 12.45 | 0.611 | 0.686 | -8.91 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 101.46 | 45.5% | 0.7 | 9.66 | 10.5 | 0.494 | 0.903 | -13.99 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Trend (/100) → 19 | 104.96 | 49.6% | 0.744 | 7.85 | 13.37 | 0.627 | 0.86 | -13.19 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Mức MACD → 1.13 + R:R tối thiểu riêng khung 1D → 2 | 80.51 | 47.1% | 0.592 | 8.22 | 9.79 | 0.428 | 0.71 | -11.03 |  |
