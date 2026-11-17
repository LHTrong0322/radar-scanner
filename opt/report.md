# Tối ưu tự động (chạy liên tục) — vòng 548

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 6231 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 92.91R | 0.57 | 6.74R | 9.93R | 9.36 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 144 | 52.8% | 112.69R | 0.783 | 6.15R | 7.58R | 14.87 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 106 | 53.8% | 85.53R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 92.91R | 9.93R | 9.36 | 32 | 12.5% | -14.03R |
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

### Vòng 548 — ngẫu nhiên nhiều thông số · mốc: tổng 112.69R, win 52.8%, rủi ro tụt vốn 7.58R, lời÷rủi ro 14.87

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: BOS → 1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 88.36 | 40.5% | 0.341 | 16.57 | 5.33 | 0.364 | 0.319 | -3.51 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: HVN anchored → 0.313 | 110.99 | 49.3% | 0.73 | 8.4 | 13.21 | 0.581 | 0.901 | -10.69 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 21 → 0.875 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 113.03 | 51.4% | 0.764 | 7.93 | 14.25 | 0.688 | 0.846 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Fib sóng 4 → 1.56 | 115.16 | 44.8% | 0.516 | 11.03 | 10.44 | 0.543 | 0.489 | -10.74 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 + Ngưỡng điểm vào kèo → 77 | 104.7 | 51.4% | 0.748 | 7.38 | 14.19 | 0.665 | 0.833 | -9.88 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + % chốt ở TP1 → 0.307 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Mức MACD → 0.875 | 103.51 | 51.7% | 0.724 | 8.24 | 12.56 | 0.622 | 0.833 | -9.67 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: BOS → 3 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 83.8 | 38% | 0.342 | 17.15 | 4.89 | 0.287 | 0.392 | -3.74 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 38.47 | 52.3% | 0.134 | 12.45 | 3.09 | 0.049 | 0.196 | -6.08 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Cộng thêm ngưỡng điểm khung 4H → -1 | 104.25 | 51% | 0.719 | 8.09 | 12.89 | 0.608 | 0.835 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần R:R (/100) → 33 + Điểm vùng: POC anchored → 4 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 36.97 | 41.9% | 0.43 | 9.57 | 3.86 | 0.356 | 0.528 | -8.69 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 96.31 | 48.9% | 0.683 | 8.59 | 11.21 | 0.465 | 0.938 | -11.51 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: EMA 200 → 3 | 100.98 | 47.1% | 0.732 | 8.96 | 11.27 | 0.503 | 0.989 | -8.87 |  |

### Vòng 547 — ngẫu nhiên nhiều thông số · mốc: tổng 112.69R, win 52.8%, rủi ro tụt vốn 7.52R, lời÷rủi ro 14.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Xác nhận khung nhỏ (A2) → W + Trần điểm khi chart yếu (Trend < x) → -0.225 | 81.35 | 37.8% | 0.327 | 17.48 | 4.65 | 0.314 | 0.338 | -3.73 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: HVN anchored → 0.313 | 112.23 | 50.6% | 0.71 | 9 | 12.47 | 0.602 | 0.853 | -4.67 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Trọng số phần Divergence (/100) → 9 | 110.85 | 51.4% | 0.749 | 8 | 13.86 | 0.608 | 0.911 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Trọng số phần Elliott (/100) → 10 + Điểm tối thiểu của vùng đặt SL → 4 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 71.44 | 46.4% | 0.571 | 9.33 | 7.66 | 0.456 | 0.692 | -8.96 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 79.36 | 40.1% | 0.475 | 11.22 | 7.07 | 0.425 | 0.532 | -8.36 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + SL tối đa (% Entry) → 0.425 | 110.33 | 52.4% | 0.761 | 7.73 | 14.27 | 0.634 | 0.905 | -9.66 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + R:R tối thiểu riêng khung 4H → 2 | 102.64 | 40.9% | 0.333 | 12.93 | 7.94 | 0.339 | 0.328 | -10.84 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần Trend (/100) → 12 + R:R tối thiểu tới TP1 → 2.63 | 91.93 | 49.6% | 0.773 | 8.23 | 11.17 | 0.548 | 1.016 | -10.63 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Trọng số phần Momentum (/100) → 21 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 38.91 | 41.6% | 0.437 | 9.76 | 3.99 | 0.344 | 0.557 | -8.58 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Đệm SL riêng khung 1D (ATR) → 0.3 | 99.11 | 43.9% | 0.639 | 11.57 | 8.57 | 0.561 | 0.709 | -9.05 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + SL tối đa (% Entry) → 0.425 | 97.8 | 49.7% | 0.648 | 8.8 | 11.11 | 0.546 | 0.756 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Entry (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần SL (/100) → 9 | 113.61 | 47.9% | 0.697 | 9.96 | 11.41 | 0.675 | 0.717 | -6.35 |  |

### Vòng 546 — ngẫu nhiên nhiều thông số · mốc: tổng 112.81R, win 53.1%, rủi ro tụt vốn 7.55R, lời÷rủi ro 14.94

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần Momentum (/100) → 21 + % chốt ở TP1 → 0.287 | 103.97 | 50.7% | 0.693 | 8.51 | 12.22 | 0.548 | 0.859 | -8.82 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: HVN anchored → 0.313 | 105.85 | 47.2% | 0.649 | 10.47 | 10.11 | 0.626 | 0.671 | -4.52 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 27.07 | 56.8% | 0.175 | 6.07 | 4.46 | 0.215 | 0.136 | -11.19 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Divergence (/100) → 12 | 27.07 | 56.8% | 0.175 | 6.07 | 4.46 | 0.215 | 0.136 | -11.19 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Ngưỡng điểm vào kèo → 77 | 91.28 | 50% | 0.634 | 8.6 | 10.61 | 0.656 | 0.61 | -7.53 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 1D → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Số TP tối đa → 2 | 113.65 | 45.1% | 0.624 | 9.6 | 11.84 | 0.727 | 0.528 | -7.37 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần Entry (/100) → 33 | 93.63 | 50.8% | 0.78 | 8.11 | 11.55 | 0.598 | 0.962 | -7.48 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 97.88 | 47.8% | 0.709 | 9.06 | 10.8 | 0.523 | 0.875 | -8.57 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + R:R tối thiểu riêng khung 1W → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 98.74 | 50.3% | 0.681 | 8.37 | 11.8 | 0.602 | 0.759 | -9.7 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 4H (ATR) → 0.3 | 92.6 | 34.5% | 0.41 | 20.72 | 4.47 | 0.314 | 0.513 | -15.76 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 70.3 | 44.7% | 0.617 | 10.14 | 6.93 | 0.433 | 0.835 | -6.26 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Fib sóng 4 → 0.938 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 119.76 | 50% | 0.788 | 8.39 | 14.27 | 0.77 | 0.808 | -9.42 |  |

### Vòng 545 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.29R, lời÷rủi ro 15.61

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: BOS → 1 + % chốt ở TP1 → 0.287 + Điểm vùng: Fib sóng 4 → 0.938 + Cộng thêm ngưỡng điểm khung 1D → 5 | 111.66 | 52.4% | 0.781 | 7.66 | 14.58 | 0.607 | 0.984 | -9.64 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Số TP tối đa → 2 + Điểm vùng: POC volume profile cố định → 0.813 | 113.13 | 52.1% | 0.797 | 7.48 | 15.12 | 0.645 | 0.971 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Cổng Dow → TẮT | 118.3 | 42.7% | 0.574 | 12.1 | 9.78 | 0.496 | 0.655 | -19.77 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 119 | 45.1% | 0.527 | 10.73 | 11.09 | 0.565 | 0.486 | -10.74 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 101.13 | 39.6% | 0.405 | 13.8 | 7.33 | 0.467 | 0.342 | -10.01 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng thêm ngưỡng điểm khung 1W → 2 | 96.76 | 48.6% | 0.691 | 8.48 | 11.41 | 0.469 | 0.947 | -10.49 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: EMA 50 → 1.13 | 106.64 | 49.7% | 0.735 | 8.48 | 12.58 | 0.555 | 0.952 | -8.64 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + % chốt ở TP1 → 0.307 + Điểm vùng: POC anchored → 4 | 108.09 | 51.8% | 0.767 | 7.56 | 14.3 | 0.559 | 0.978 | -4.53 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: HVN cố định → 0.563 | 113.77 | 53.1% | 0.796 | 7.29 | 15.61 | 0.635 | 0.983 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + R:R tối thiểu riêng khung 4H → 2 | 104.73 | 41.2% | 0.342 | 12.72 | 8.23 | 0.339 | 0.345 | -10.23 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Đệm SL riêng khung 1W (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 19.99 | 52.4% | 0.136 | 8.02 | 2.49 | 0.184 | 0.102 | -10.55 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 | 36.97 | 57% | 0.215 | 6.85 | 5.4 | 0.31 | 0.14 | -7.96 |  |

### Vòng 544 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.29R, lời÷rủi ro 15.61

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: POC anchored → 4 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL riêng khung 4H (ATR) → 0.3 | 97.36 | 37.9% | 0.414 | 19.26 | 5.06 | 0.203 | 0.606 | 0.8 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Ngưỡng điểm vào kèo → 74 | 98.81 | 50.7% | 0.668 | 8.46 | 11.68 | 0.615 | 0.728 | -7.86 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: Mức MACD → 1.13 + % chốt ở TP1 → 0.287 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 94.91 | 50.3% | 0.655 | 8.51 | 11.15 | 0.611 | 0.705 | -8.43 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 3 | 156.83 | 38.3% | 0.546 | 18.46 | 8.5 | 0.354 | 0.74 | -2.79 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 105.35 | 50.4% | 0.758 | 7.91 | 13.32 | 0.658 | 0.868 | -11.9 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: HVN cố định → 0.438 + Trọng số phần Momentum (/100) → 25 + Coin phải mạnh hơn BTC trong N ngày → 14 | 81.2 | 48.2% | 0.712 | 8.12 | 10 | 0.578 | 0.878 | -18.37 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần Trend (/100) → 19 | 112.23 | 52.8% | 0.779 | 7.37 | 15.23 | 0.623 | 0.964 | -8.64 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu tới TP1 → 2.38 | 56.74 | 40.9% | 0.381 | 11.7 | 4.85 | 0.394 | 0.368 | -8.21 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Mức RSI 30/70 → 0.875 | 115.8 | 51.9% | 0.742 | 8.1 | 14.3 | 0.58 | 0.942 | -8.64 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: HVN cố định → 0.438 | 92.53 | 45.5% | 0.593 | 9.78 | 9.46 | 0.451 | 0.776 | -9.41 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 89.31 | 49.7% | 0.625 | 8.71 | 10.25 | 0.541 | 0.714 | -4.55 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 109.06 | 51.4% | 0.779 | 7.33 | 14.88 | 0.631 | 0.944 | -8.47 |  |

### Vòng 543 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 15.25

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: POC volume profile cố định → 0.813 | 101.75 | 44.8% | 0.585 | 9.74 | 10.45 | 0.608 | 0.564 | -6.9 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 70.08 | 46.2% | 0.661 | 9.06 | 7.74 | 0.473 | 0.88 | -6.48 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 112.05 | 52.1% | 0.789 | 7.52 | 14.9 | 0.64 | 0.961 | -9.66 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 106.88 | 50.7% | 0.753 | 7.94 | 13.46 | 0.646 | 0.872 | -11.06 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Break mây Ichimoku → 1 + Cổng Dow → CHẶT + SL tối đa (% Entry) → 0.425 | 56.6 | 48.5% | 0.56 | 7.86 | 7.2 | 0.411 | 0.725 | -14.51 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Đệm SL riêng khung 1D (ATR) → 0.3 + Cổng Dow → TẮT + Trọng số phần SL (/100) → 9 | 123.16 | 41.6% | 0.529 | 14 | 8.8 | 0.64 | 0.439 | -17.13 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần Divergence (/100) → 9 | 111.57 | 52.4% | 0.78 | 7.57 | 14.74 | 0.62 | 0.962 | -9.66 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Momentum (/100) → 25 + Trọng số phần SL (/100) → 7 | 121.73 | 50% | 0.79 | 8.11 | 15.01 | 0.792 | 0.789 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 108.34 | 52.1% | 0.752 | 7.7 | 14.07 | 0.628 | 0.895 | -10 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Momentum (/100) → 25 | 70.08 | 46.2% | 0.661 | 9.06 | 7.74 | 0.473 | 0.88 | -6.48 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 68.17 | 45.8% | 0.637 | 9.28 | 7.35 | 0.473 | 0.824 | -6.48 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: BOS → 3 + Ngưỡng điểm vào kèo → 74 | 111.93 | 51.7% | 0.761 | 7.83 | 14.3 | 0.608 | 0.94 | -9.66 |  |

### Vòng 542 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.37R, lời÷rủi ro 15.44

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần Entry (/100) → 28 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 106.99 | 50.4% | 0.77 | 7.9 | 13.54 | 0.606 | 0.951 | -12.92 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: POC volume profile cố định → 0.813 | 78.54 | 43.9% | 0.5 | 9.8 | 8.01 | 0.489 | 0.51 | -10.03 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Mức RSI 30/70 → 1.13 | 110.07 | 52.8% | 0.764 | 7.81 | 14.09 | 0.581 | 0.976 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: POC volume profile cố định → 0.688 + R:R tối thiểu riêng khung 1D → 2 | 64.17 | 36.8% | 0.257 | 17.35 | 3.7 | 0.182 | 0.325 | -2.8 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Mức MACD → 1.13 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib sóng 4 → 0.938 | 104.06 | 50.3% | 0.698 | 8.51 | 12.23 | 0.581 | 0.83 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + R:R tối thiểu riêng khung 4H → 2 | 113.19 | 41.3% | 0.365 | 12.1 | 9.35 | 0.342 | 0.385 | -0.5 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Đệm SL riêng khung 1W (ATR) → 0.3 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: MACD cắt lên Signal → 0.563 | 98.3 | 45.2% | 0.673 | 9.4 | 10.46 | 0.508 | 0.848 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Ngưỡng điểm vào kèo → 77 | 108.42 | 50.3% | 0.748 | 7.8 | 13.9 | 0.629 | 0.868 | -4.48 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + % chốt ở TP1 → 0.307 + R:R tối thiểu tới TP1 → 2.63 | 98.53 | 52.5% | 0.821 | 7.51 | 13.12 | 0.57 | 1.098 | -10.63 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Trọng số phần R:R (/100) → 28 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: BOS → 1 | 112.05 | 52.1% | 0.789 | 7.33 | 15.29 | 0.64 | 0.961 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 + SL tối đa (% Entry) → 0.425 | 104.51 | 51.4% | 0.716 | 8.16 | 12.81 | 0.648 | 0.784 | -10.69 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: POC anchored → 4 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 130.39 | 50.9% | 0.81 | 8.12 | 16.06 | 0.781 | 0.842 | -5.89 |  |

### Vòng 541 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.17R, lời÷rủi ro 15.87

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: EMA 50 → 1.13 | 94.3 | 50.4% | 0.779 | 8.35 | 11.29 | 0.544 | 1.035 | -9.61 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Cổng Dow → TẮT + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Mức MACD → 0.875 | 116.07 | 43.5% | 0.58 | 11.69 | 9.93 | 0.515 | 0.647 | -21.31 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: HVN anchored → 0.313 + R:R tối thiểu tới TP1 → 2.63 + Trọng số phần R:R (/100) → 33 | 93.41 | 50.4% | 0.785 | 7.83 | 11.93 | 0.512 | 1.072 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần Elliott (/100) → 6 | 111.57 | 52.4% | 0.78 | 7.65 | 14.58 | 0.62 | 0.962 | -9.66 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần Divergence (/100) → 9 | 105.2 | 50% | 0.731 | 8.27 | 12.72 | 0.491 | 0.991 | -9.52 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + R:R tối thiểu riêng khung 4H → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 104.2 | 40.9% | 0.338 | 12.65 | 8.24 | 0.339 | 0.338 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Số TP tối đa → 2 + R:R tối thiểu tới TP1 → 2.38 + Cộng thêm ngưỡng điểm khung 4H → -1 | 85.46 | 41.6% | 0.378 | 11.85 | 7.21 | 0.411 | 0.348 | -14.07 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Trọng số phần Divergence (/100) → 12 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: HVN cố định → 0.438 | 103.6 | 50.7% | 0.71 | 8.49 | 12.2 | 0.596 | 0.837 | -9.66 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 110.49 | 49% | 0.762 | 8.34 | 13.25 | 0.54 | 1.014 | -12.81 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Trọng số phần Elliott (/100) → 6 | 112.89 | 52.4% | 0.779 | 7.54 | 14.97 | 0.621 | 0.962 | -9.66 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 93.41 | 34.8% | 0.406 | 20.68 | 4.52 | 0.313 | 0.507 | -16.84 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + R:R tối thiểu riêng khung 1W → 2 | 101.52 | 51.4% | 0.715 | 8.13 | 12.49 | 0.614 | 0.816 | -11.99 |  |

### Vòng 540 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.37R, lời÷rủi ro 15.44

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 1D → 5 | 68.4 | 45.7% | 0.651 | 8.88 | 7.7 | 0.473 | 0.863 | -6.48 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Mức RSI 30/70 → 1.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Mức MACD → 0.875 | 78.24 | 44.2% | 0.532 | 10.64 | 7.35 | 0.44 | 0.642 | -10.48 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: EMA 21 → 1.13 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 99.22 | 49.3% | 0.699 | 8.08 | 12.28 | 0.617 | 0.788 | -10.88 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Lệnh chờ hết hạn sau (nến) → 8 | 119.14 | 52.2% | 0.759 | 7.76 | 15.35 | 0.623 | 0.915 | -11.25 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Xác nhận khung nhỏ (A2) → W + Số TP tối đa → 2 | 29.32 | 33% | 0.084 | 28.39 | 1.03 | 0.08 | 0.086 | 0.5 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: HVN anchored → 0.188 | 112.3 | 52.4% | 0.785 | 7.47 | 15.03 | 0.635 | 0.961 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm tối thiểu của vùng đặt SL → 2 | 101.59 | 51.7% | 0.71 | 8.07 | 12.59 | 0.614 | 0.806 | -11.99 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 84.28 | 45.2% | 0.577 | 10.37 | 8.13 | 0.443 | 0.745 | -9.16 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Mức RSI 30/70 → 0.875 | 118.21 | 52.2% | 0.753 | 8.11 | 14.58 | 0.601 | 0.942 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Cộng thêm ngưỡng điểm khung 1D → 5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 112.82 | 52.4% | 0.778 | 7.78 | 14.5 | 0.624 | 0.957 | -8.34 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: MACD cắt lên Signal → 0.563 | 102.03 | 50% | 0.699 | 8.41 | 12.13 | 0.554 | 0.861 | -11.02 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + % chốt ở TP1 → 0.307 | 109.24 | 51.1% | 0.786 | 7.95 | 13.74 | 0.623 | 0.972 | -12.93 |  |

### Vòng 539 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.41R, lời÷rủi ro 15.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần R:R (/100) → 28 | 76.04 | 44.3% | 0.481 | 10.33 | 7.36 | 0.358 | 0.602 | -9.82 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Mức MACD → 0.875 | 106.02 | 46.8% | 0.752 | 9.2 | 11.52 | 0.492 | 1.064 | -8.79 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Trọng số phần Divergence (/100) → 12 + Cộng điểm phân kỳ dương ẩn → 2.25 + Ngưỡng điểm vào kèo → 77 | 107.32 | 51.1% | 0.783 | 7.51 | 14.29 | 0.669 | 0.914 | -7.79 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 112.74 | 52.8% | 0.783 | 7.64 | 14.76 | 0.615 | 0.981 | -9.67 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 92.17 | 39.9% | 0.294 | 14.6 | 6.31 | 0.369 | 0.238 | -11.09 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 30.46 | 58.1% | 0.19 | 5.8 | 5.25 | 0.218 | 0.164 | -10.1 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Khung lớn phải tăng (trend ≥) → 0.375 | 115.88 | 44.3% | 0.508 | 11.02 | 10.52 | 0.556 | 0.46 | -12.2 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Coin phải mạnh hơn BTC trong N ngày → 14 | 84.61 | 49.2% | 0.694 | 8.16 | 10.37 | 0.604 | 0.793 | -16.47 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Trọng số phần Entry (/100) → 28 | 111.5 | 51% | 0.71 | 8.15 | 13.68 | 0.597 | 0.854 | -4.67 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 95.47 | 48.7% | 0.636 | 9.46 | 10.09 | 0.485 | 0.81 | -5.76 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cộng thêm ngưỡng điểm khung 4H → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 117.66 | 49.7% | 0.79 | 8.24 | 14.28 | 0.775 | 0.808 | -10.24 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + R:R tối thiểu riêng khung 1W → 2 | 95.44 | 52.1% | 0.663 | 7.9 | 12.08 | 0.689 | 0.637 | -10.27 |  |
