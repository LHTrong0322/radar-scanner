# Tối ưu tự động (chạy liên tục) — vòng 1365

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 16000 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 97.83R | 0.589 | 6.7R | 9.71R | 10.08 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 143 | 53.1% | 120.84R | 0.845 | 5.15R | 7.4R | 16.33 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 26 | 50% | 20.05R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 106 | 54.7% | 93.82R | 19 | 21.1% | -4.19R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 97.83R | 9.71R | 10.08 | 30 | 13.3% | -11.98R |
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

### Vòng 1365 — ngẫu nhiên nhiều thông số · mốc: tổng 120.84R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: HVN cố định → 0.438 | 115.96 | 50.7% | 0.794 | 7.84 | 14.79 | 0.63 | 0.978 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: MACD cắt lên Signal → 0.563 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 115.97 | 48.1% | 0.743 | 8.66 | 13.39 | 0.608 | 0.889 | -11.23 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 50 → 0.75 + Trọng số phần Entry (/100) → 33 | 101.27 | 48.6% | 0.713 | 8.3 | 12.2 | 0.567 | 0.847 | -12.17 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần Elliott (/100) → 10 | 107.48 | 48.6% | 0.757 | 8.24 | 13.04 | 0.567 | 0.952 | -11.13 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 107.67 | 46.2% | 0.637 | 8.81 | 12.22 | 0.585 | 0.685 | -8.93 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Cộng thêm ngưỡng điểm khung 4H → -1 + Lệnh chờ hết hạn sau (nến) → 8 | 99.96 | 46.6% | 0.613 | 9.53 | 10.49 | 0.575 | 0.652 | -12.73 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 21 → 0.875 + Lệnh chờ hết hạn sau (nến) → 8 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 110.15 | 39.9% | 0.382 | 15.71 | 7.01 | 0.415 | 0.352 | -8.62 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 114.5 | 51.7% | 0.79 | 7.77 | 14.74 | 0.653 | 0.945 | -10.84 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Momentum (/100) → 25 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 75.3 | 46.4% | 0.685 | 9.15 | 8.23 | 0.444 | 0.963 | -5.79 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 115.86 | 51.8% | 0.822 | 7.54 | 15.37 | 0.635 | 1.028 | -10.84 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Trọng số phần Divergence (/100) → 9 + Trọng số phần Trend (/100) → 19 | 120.84 | 53.1% | 0.845 | 7.4 | 16.33 | 0.67 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: EMA 200 → 3 | 105.24 | 48.6% | 0.721 | 8.54 | 12.32 | 0.511 | 0.942 | -14.2 |  |

### Vòng 1364 — ngẫu nhiên nhiều thông số · mốc: tổng 120.84R, win 53.1%, rủi ro tụt vốn 7.39R, lời÷rủi ro 16.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + R:R tối thiểu riêng khung 4H → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 101.09 | 40.9% | 0.316 | 13.2 | 7.66 | 0.439 | 0.204 | -14.72 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: EMA 200 → 1 + Trọng số phần Elliott (/100) → 10 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 132.16 | 41.8% | 0.418 | 11.99 | 11.02 | 0.423 | 0.414 | -2.73 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 160.1 | 36.7% | 0.534 | 19.32 | 8.29 | 0.392 | 0.683 | -10.66 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 110.73 | 45.8% | 0.667 | 9.26 | 11.96 | 0.617 | 0.709 | -14.91 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Mức MACD → 1.13 | 101.75 | 39.5% | 0.402 | 15.15 | 6.72 | 0.355 | 0.444 | -4.64 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: HVN anchored → 0.188 + Xác nhận khung nhỏ (A2) → W | 82.72 | 36.7% | 0.323 | 18.84 | 4.39 | 0.269 | 0.37 | -6.78 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 97.26 | 39.8% | 0.387 | 15.59 | 6.24 | 0.321 | 0.448 | -3.54 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu tới TP1 → 2.63 + Cộng thêm ngưỡng điểm khung 1D → 4 | 186.14 | 40.4% | 0.677 | 16.32 | 11.41 | 0.471 | 0.91 | -10.83 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + SL tối đa (% Entry) → 0.425 + Điểm vùng: HVN anchored → 0.313 | 127.16 | 50% | 0.815 | 8.12 | 15.66 | 0.795 | 0.839 | -12.74 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC volume profile cố định → 0.688 | 73.62 | 45.9% | 0.675 | 8.98 | 8.2 | 0.444 | 0.948 | -5.79 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Khung lớn phải tăng (trend ≥) → 0.375 + SL tối đa (% Entry) → 0.425 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 71.22 | 44.5% | 0.647 | 9.61 | 7.41 | 0.408 | 0.924 | -5.79 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 98.33 | 48.2% | 0.718 | 8.36 | 11.76 | 0.481 | 0.972 | -13.97 |  |

### Vòng 1363 — ngẫu nhiên nhiều thông số · mốc: tổng 120.84R, win 53.1%, rủi ro tụt vốn 7.32R, lời÷rủi ro 16.51

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Trend (/100) → 19 + Điểm vùng: EMA 21 → 0.875 | 168.13 | 38.7% | 0.566 | 17.25 | 9.75 | 0.471 | 0.667 | -11.46 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu riêng khung 1W → 2 | 92.78 | 44.2% | 0.569 | 11.4 | 8.14 | 0.635 | 0.511 | -11.8 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Biên mây Ichimoku → 1.05 | 109.31 | 51.7% | 0.754 | 7.84 | 13.94 | 0.625 | 0.892 | -12.99 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Mức MACD → 1.13 + Cộng thêm ngưỡng điểm khung 4H → 2 | 116.59 | 50% | 0.757 | 8.63 | 13.51 | 0.586 | 0.968 | -11.14 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: POC anchored → 4 + Trọng số phần R:R (/100) → 28 + Lệnh chờ hết hạn sau (nến) → 6 | 101.14 | 38.8% | 0.405 | 15.32 | 6.6 | 0.36 | 0.445 | -2.74 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.38 | 50.3% | 0.706 | 8.14 | 12.58 | 0.678 | 0.737 | -11.92 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 120.14 | 52.8% | 0.834 | 7.24 | 16.59 | 0.653 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: POC anchored → 2 + Trọng số phần R:R (/100) → 33 | 78.9 | 46.2% | 0.467 | 9.94 | 7.94 | 0.542 | 0.391 | -15.79 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: POC anchored → 4 + Trọng số phần Divergence (/100) → 12 | 107.25 | 49.4% | 0.696 | 8.9 | 12.05 | 0.511 | 0.873 | -6.21 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + R:R tối thiểu riêng khung 1D → 2 | 99.68 | 44.8% | 0.573 | 9.59 | 10.39 | 0.523 | 0.62 | -7.91 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: HVN anchored → 0.313 + Trọng số phần Trend (/100) → 19 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 108.7 | 47.3% | 0.725 | 9.61 | 11.31 | 0.498 | 0.998 | -8.98 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: POC anchored → 4 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 115.86 | 50.7% | 0.783 | 7.9 | 14.67 | 0.659 | 0.903 | -6.09 |  |

### Vòng 1362 — ngẫu nhiên nhiều thông số · mốc: tổng 120.84R, win 53.1%, rủi ro tụt vốn 7.39R, lời÷rủi ro 16.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + R:R tối thiểu riêng khung 1W → 2 | 104.71 | 49.7% | 0.732 | 7.97 | 13.14 | 0.58 | 0.887 | -13.19 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 125.64 | 41.6% | 0.399 | 12.3 | 10.21 | 0.395 | 0.402 | -6.99 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Fib sóng 4 → 1.56 | 115.87 | 52.7% | 0.794 | 7.5 | 15.45 | 0.627 | 0.985 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Điểm vùng: HVN cố định → 0.563 | 120.84 | 53.1% | 0.845 | 7.39 | 16.35 | 0.67 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Trọng số phần SL (/100) → 9 + Cổng Dow → CHẶT | 77.55 | 49.6% | 0.652 | 7.36 | 10.54 | 0.377 | 0.872 | -13.23 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: HVN anchored → 0.188 | 110.9 | 46.8% | 0.641 | 9.24 | 12 | 0.599 | 0.68 | -8.93 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Mức MACD → 1.13 | 107.06 | 46.7% | 0.641 | 8.92 | 12 | 0.525 | 0.753 | -13.47 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Divergence (/100) → 9 | 120.84 | 53.1% | 0.845 | 7.39 | 16.35 | 0.67 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Fib sóng 4 → 0.938 | 116.61 | 51.1% | 0.827 | 7.74 | 15.07 | 0.667 | 0.999 | -12.16 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 55.04 | 40.7% | 0.51 | 12.57 | 4.38 | 0.347 | 0.692 | -8.89 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Trọng số phần Entry (/100) → 33 | 83.88 | 50.4% | 0.742 | 7.35 | 11.41 | 0.371 | 1.058 | -13.22 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: BOS → 0 + Điểm vùng: HVN cố định → 0.438 | 102.14 | 50.7% | 0.7 | 8.49 | 12.03 | 0.632 | 0.777 | -11.92 |  |

### Vòng 1361 — ngẫu nhiên nhiều thông số · mốc: tổng 120.84R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Divergence (/100) → 12 | 119.33 | 52.1% | 0.817 | 7.49 | 15.93 | 0.67 | 0.977 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 107.95 | 52% | 0.72 | 8.12 | 13.29 | 0.619 | 0.832 | -12.25 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: BOS → 2 | 109.48 | 48.8% | 0.684 | 9.09 | 12.04 | 0.552 | 0.831 | -11.9 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + R:R tối thiểu riêng khung 4H → 2 | 29.96 | 47.4% | 0.092 | 7.94 | 3.77 | 0.127 | 0.066 | -11.4 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cổng Dow → TẮT + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 93.71 | 39% | 0.571 | 12.81 | 7.32 | 0.432 | 0.722 | -13.9 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 1W → 2 | 120.09 | 52.4% | 0.84 | 7.46 | 16.1 | 0.676 | 1.021 | -12.57 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 113.69 | 52.7% | 0.758 | 7.9 | 14.39 | 0.586 | 0.944 | -7.61 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: EMA 200 → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: EMA 21 → 1.13 | 166.93 | 39% | 0.533 | 18.61 | 8.97 | 0.474 | 0.596 | 0.19 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm tối thiểu của vùng đặt SL → 4 | 95.49 | 45.5% | 0.668 | 9.15 | 10.44 | 0.577 | 0.765 | -8.13 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Break mây Ichimoku → 3 | 105.42 | 47.5% | 0.659 | 9.23 | 11.42 | 0.555 | 0.771 | -10 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 105.89 | 48.7% | 0.679 | 8.73 | 12.13 | 0.651 | 0.708 | -10.33 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 105.61 | 48.3% | 0.728 | 8.02 | 13.17 | 0.593 | 0.874 | -11.18 |  |

### Vòng 1360 — ngẫu nhiên nhiều thông số · mốc: tổng 120.84R, win 53.1%, rủi ro tụt vốn 7.45R, lời÷rủi ro 16.22

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN anchored → 0.313 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 104.31 | 51% | 0.719 | 8.16 | 12.78 | 0.626 | 0.825 | -11.34 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu tới TP1 → 2.63 | 83.06 | 39.6% | 0.369 | 13.59 | 6.11 | 0.341 | 0.399 | -6.21 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: HVN cố định → 0.563 + Trọng số phần Momentum (/100) → 25 | 107.62 | 49.7% | 0.753 | 7.99 | 13.47 | 0.556 | 0.964 | -13.15 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: EMA 200 → 3 | 110.11 | 50.7% | 0.775 | 7.76 | 14.19 | 0.556 | 1.014 | -13.15 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Cổng Dow → CHẶT | 84.14 | 52.3% | 0.758 | 7.04 | 11.95 | 0.345 | 1.109 | -14.25 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 101.11 | 51.4% | 0.683 | 8.32 | 12.15 | 0.589 | 0.791 | -8.66 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Cộng điểm phân kỳ dương ẩn → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Mức MACD → 1.13 | 86.89 | 48.7% | 0.743 | 8.1 | 10.73 | 0.549 | 0.977 | -18.62 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 119.56 | 52.4% | 0.836 | 7.19 | 16.63 | 0.654 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Biên mây Ichimoku → 1.35 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Entry (/100) → 33 | 79.06 | 46.3% | 0.653 | 9.11 | 8.68 | 0.563 | 0.745 | -16.58 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 | 60.1 | 47.8% | 0.436 | 9.53 | 6.31 | 0.43 | 0.44 | -22.53 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Divergence (/100) → 12 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 71.16 | 44.4% | 0.527 | 10.28 | 6.92 | 0.466 | 0.602 | -10.88 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 61.21 | 43.4% | 0.542 | 10.44 | 5.86 | 0.37 | 0.73 | -5.8 |  |

### Vòng 1359 — ngẫu nhiên nhiều thông số · mốc: tổng 120.84R, win 53.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.42

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 80.57 | 44% | 0.48 | 11.74 | 6.86 | 0.345 | 0.618 | -12.24 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 118.63 | 45.1% | 0.525 | 10.39 | 11.42 | 0.511 | 0.539 | -15.3 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Mức MACD → 0.875 | 111.6 | 52.1% | 0.764 | 7.78 | 14.34 | 0.612 | 0.935 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu tới TP1 → 2.63 | 97.41 | 44.4% | 0.676 | 11.25 | 8.66 | 0.597 | 0.743 | -15.14 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Trend (/100) → 19 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.01 | 57.3% | 0.198 | 5.85 | 5.3 | 0.225 | 0.172 | -7.93 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Ngưỡng điểm vào kèo → 74 + Trọng số phần Elliott (/100) → 10 | 118.63 | 51.4% | 0.813 | 7.37 | 16.1 | 0.643 | 1.002 | -12.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 + Đệm SL riêng khung 1D (ATR) → 0.3 | 110.35 | 45.7% | 0.673 | 10.7 | 10.31 | 0.669 | 0.677 | -11.3 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần R:R (/100) → 33 + Điểm vùng: POC volume profile cố định → 0.813 | 107.97 | 48.3% | 0.715 | 8.41 | 12.84 | 0.652 | 0.777 | -9.85 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 98.72 | 47.3% | 0.658 | 9.6 | 10.28 | 0.481 | 0.866 | -10.59 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng điểm phân kỳ dương ẩn → 2.25 | 28.21 | 55.8% | 0.181 | 5.65 | 4.99 | 0.202 | 0.16 | -8.19 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Cộng thêm ngưỡng điểm khung 1D → 7 + Cộng điểm phân kỳ dương ẩn → 3 | 115.9 | 52.5% | 0.822 | 7.39 | 15.68 | 0.622 | 1.043 | -10.26 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: HVN cố định → 0.563 | 108.16 | 45.7% | 0.625 | 9.35 | 11.57 | 0.584 | 0.665 | -8.93 |  |

### Vòng 1358 — ngẫu nhiên nhiều thông số · mốc: tổng 119.17R, win 53.6%, rủi ro tụt vốn 7.09R, lời÷rủi ro 16.81

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Break mây Ichimoku → 1 | 105.4 | 49.7% | 0.727 | 8.05 | 13.09 | 0.569 | 0.906 | -12.44 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + R:R tối thiểu riêng khung 4H → 2 + Cổng Dow → TẮT + % chốt ở TP1 → 0.307 | 120.94 | 38.2% | 0.294 | 16.46 | 7.35 | 0.374 | 0.224 | -20.77 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 112.12 | 50.3% | 0.743 | 7.69 | 14.58 | 0.676 | 0.817 | -10.59 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 95.39 | 48.5% | 0.701 | 8.41 | 11.34 | 0.479 | 0.952 | -14.43 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + SL tối đa (% Entry) → 0.425 + Số TP tối đa → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 53.95 | 50% | 0.674 | 7.63 | 7.07 | 0.274 | 1.075 | -6.66 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Lệnh chờ hết hạn sau (nến) → 6 | 89.79 | 50.4% | 0.685 | 8.51 | 10.55 | 0.616 | 0.765 | -9.11 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Trọng số phần Trend (/100) → 19 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: HVN cố định → 0.563 | 115.63 | 51.7% | 0.766 | 8.35 | 13.85 | 0.618 | 0.962 | -6.79 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 84.67 | 37.2% | 0.315 | 18.4 | 4.6 | 0.358 | 0.27 | -4.85 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức MACD → 0.875 + Cổng Dow → CHẶT | 22.92 | 58.7% | 0.182 | 5.07 | 4.52 | 0.171 | 0.19 | -4.05 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Trọng số phần Trend (/100) → 19 + % chốt ở TP1 → 0.307 | 114.76 | 52.9% | 0.82 | 7.48 | 15.34 | 0.638 | 1.023 | -11.62 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + R:R tối thiểu riêng khung 1W → 2 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 103.75 | 50.7% | 0.721 | 8 | 12.97 | 0.588 | 0.865 | -13.61 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 112.15 | 43% | 0.492 | 11.1 | 10.1 | 0.498 | 0.486 | -16.72 |  |

### Vòng 1357 — ngẫu nhiên nhiều thông số · mốc: tổng 120.84R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Đệm SL riêng khung 1W (ATR) → 0.3 | 100.42 | 45% | 0.665 | 9.57 | 10.49 | 0.474 | 0.864 | -12.99 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Mức RSI 30/70 → 1.13 | 120.84 | 53.1% | 0.845 | 7.4 | 16.33 | 0.67 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: EMA 50 → 0.75 + Cộng thêm ngưỡng điểm khung 1D → 7 | 96.93 | 50.7% | 0.673 | 8.35 | 11.61 | 0.581 | 0.773 | -8.98 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Cộng thêm ngưỡng điểm khung 4H → 2 | 113.6 | 52.1% | 0.789 | 7.55 | 15.05 | 0.648 | 0.951 | -12.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 98.33 | 47% | 0.585 | 9.05 | 10.87 | 0.625 | 0.551 | -12.2 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần Entry (/100) → 33 | 116.28 | 51.4% | 0.807 | 7.55 | 15.4 | 0.653 | 0.98 | -11.13 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Mức MACD → 0.875 | 111.35 | 51.4% | 0.784 | 7.55 | 14.75 | 0.636 | 0.946 | -11.13 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 104.53 | 44.3% | 0.571 | 9.65 | 10.83 | 0.521 | 0.618 | -9.35 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 107.63 | 44.6% | 0.641 | 10.93 | 9.85 | 0.695 | 0.592 | -11.09 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: POC anchored → 2 | 100.71 | 48.3% | 0.667 | 8.53 | 11.81 | 0.506 | 0.834 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần SL (/100) → 9 + Điểm vùng: POC anchored → 2 | 106.58 | 48.4% | 0.688 | 8.71 | 12.24 | 0.562 | 0.825 | -11.98 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 | 99.58 | 43% | 0.579 | 10.52 | 9.47 | 0.483 | 0.662 | -10.79 |  |

### Vòng 1356 — ngẫu nhiên nhiều thông số · mốc: tổng 120.84R, win 53.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.42

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 111.67 | 46.6% | 0.685 | 9.62 | 11.61 | 0.631 | 0.753 | -11.17 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + R:R tối thiểu riêng khung 4H → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 68.38 | 39.3% | 0.32 | 14.27 | 4.79 | 0.337 | 0.302 | -4.37 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: BOS → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 61.99 | 41.4% | 0.534 | 11.49 | 5.4 | 0.376 | 0.71 | -5.87 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 1W → 2 | 107.98 | 50.4% | 0.766 | 7.59 | 14.23 | 0.6 | 0.934 | -13.61 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 103.58 | 51% | 0.695 | 8.04 | 12.88 | 0.652 | 0.744 | -12.42 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần SL (/100) → 7 | 110.9 | 46.8% | 0.641 | 9.11 | 12.17 | 0.599 | 0.68 | -8.93 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Entry (/100) → 33 + Số TP tối đa → 1 | 101.67 | 43.7% | 0.673 | 10.3 | 9.87 | 0.476 | 0.874 | -12.22 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Cổng Dow → TẮT | 123.19 | 43.5% | 0.595 | 11.13 | 11.07 | 0.522 | 0.666 | -18.1 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Mức MACD → 0.875 + R:R tối thiểu riêng khung 4H → 2 | 33.68 | 34.3% | 0.192 | 16.65 | 2.02 | 0.285 | 0.087 | -0.71 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 1D → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu tới TP1 → 2.63 | 155.09 | 39.3% | 0.641 | 15.76 | 9.84 | 0.641 | 0.64 | -19.01 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Break mây Ichimoku → 1 | 99.54 | 46.4% | 0.651 | 9.15 | 10.88 | 0.622 | 0.679 | -10.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Cộng thêm ngưỡng điểm khung 1W → -1 | 102.47 | 48.4% | 0.67 | 8.58 | 11.94 | 0.643 | 0.697 | -12.18 |  |
