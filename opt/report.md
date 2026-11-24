# Tối ưu tự động (chạy liên tục) — vòng 1411

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 16552 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 165 | 47.3% | 98.93R | 0.6 | 6.7R | 9.35R | 10.58 | 31 | 16.1% | -10.86R | -0.35 | 11.15R |
| **Tốt nhất** | 142 | 53.5% | 121.94R | 0.859 | 5.15R | 7.17R | 17.01 | 29 | 17.2% | -11.04R | -0.381 | 12.44R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 26 | 50% | 20.05R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 105 | 55.2% | 94.92R | 20 | 25% | -3.07R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 165 | 47.3% | 98.93R | 9.35R | 10.58 | 31 | 16.1% | -10.86R |
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

### Vòng 1411 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.17R, lời÷rủi ro 17.01

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: HVN cố định → 0.438 | 111.77 | 46.2% | 0.607 | 9.66 | 11.57 | 0.524 | 0.686 | -6.02 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 121.94 | 53.5% | 0.859 | 7.17 | 17.01 | 0.694 | 1.043 | -11.04 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: MACD cắt lên Signal → 0.563 | 102.6 | 35.9% | 0.283 | 20.27 | 5.06 | 0.364 | 0.214 | -6.37 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 95.2 | 50% | 0.652 | 8.46 | 11.25 | 0.632 | 0.673 | -11.84 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: POC volume profile cố định → 0.813 | 113.1 | 51.8% | 0.802 | 7.39 | 15.3 | 0.666 | 0.949 | -7.49 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + R:R tối thiểu riêng khung 4H → 2 + Khung lớn phải tăng (trend ≥) → 0.425 | 132.96 | 41.8% | 0.437 | 11.73 | 11.34 | 0.456 | 0.422 | -8.6 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Trọng số phần Trend (/100) → 19 | 121.94 | 53.5% | 0.859 | 7.17 | 17.01 | 0.694 | 1.043 | -11.04 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Momentum (/100) → 21 | 121.94 | 53.5% | 0.859 | 7.17 | 17.01 | 0.694 | 1.043 | -11.04 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Coin phải mạnh hơn BTC trong N ngày → 14 | 82.2 | 49.1% | 0.709 | 7.97 | 10.31 | 0.568 | 0.87 | -14.98 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: POC anchored → 2 | 98.27 | 46.2% | 0.575 | 9.41 | 10.44 | 0.472 | 0.672 | -13.45 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Đệm SL riêng khung 1W (ATR) → 0.3 | 26.06 | 52.1% | 0.179 | 7.1 | 3.67 | 0.219 | 0.145 | -7.84 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm tối thiểu của vùng đặt SL → 2 | 86.03 | 53.1% | 0.761 | 6.54 | 13.15 | 0.425 | 1.038 | -11.94 |  |

### Vòng 1410 — ngẫu nhiên nhiều thông số · mốc: tổng 123R, win 53.9%, rủi ro tụt vốn 6.86R, lời÷rủi ro 17.93

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Trọng số phần Entry (/100) → 33 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 87.25 | 46% | 0.542 | 9.67 | 9.02 | 0.483 | 0.596 | -10.16 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm tối thiểu của vùng đặt SL → 4 | 115.84 | 50% | 0.793 | 7.8 | 14.85 | 0.586 | 1.012 | -11.92 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 89.77 | 46% | 0.551 | 9.47 | 9.48 | 0.51 | 0.59 | -10.16 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: POC volume profile cố định → 0.688 + Ngưỡng điểm vào kèo → 77 | 83.26 | 49.6% | 0.724 | 7.77 | 10.72 | 0.595 | 0.87 | -16.1 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 63.83 | 45.9% | 0.586 | 9.55 | 6.68 | 0.477 | 0.713 | -6.38 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: BOS → 0 | 90 | 50.9% | 0.776 | 7.6 | 11.84 | 0.597 | 0.988 | -18.62 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: POC anchored → 4 | 122.8 | 51% | 0.813 | 7.88 | 15.58 | 0.639 | 1 | -5.82 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 111.23 | 40% | 0.428 | 15.21 | 7.31 | 0.391 | 0.462 | -6.79 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Divergence (/100) → 9 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 159.45 | 38.2% | 0.539 | 18.53 | 8.6 | 0.487 | 0.59 | -11.78 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Trọng số phần Elliott (/100) → 10 + Trọng số phần R:R (/100) → 33 | 122.36 | 52.8% | 0.862 | 6.97 | 17.56 | 0.724 | 1.007 | -10.87 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Break mây Ichimoku → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 111.85 | 49.4% | 0.699 | 8.56 | 13.07 | 0.596 | 0.81 | -9.71 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: EMA 50 → 0.75 | 114.58 | 51.7% | 0.79 | 7.58 | 15.12 | 0.624 | 0.969 | -12.16 |  |

### Vòng 1409 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7R, lời÷rủi ro 17.42

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Break mây Ichimoku → 1 | 25.93 | 56% | 0.148 | 6.32 | 4.1 | 0.17 | 0.131 | -3.86 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: BOS → 0 | 121.94 | 53.5% | 0.859 | 7 | 17.42 | 0.694 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: EMA 200 → 3 | 81.78 | 46.8% | 0.75 | 8.08 | 10.12 | 0.391 | 1.054 | -11.79 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Ngưỡng điểm vào kèo → 74 | 28.23 | 55.1% | 0.179 | 5.81 | 4.86 | 0.204 | 0.155 | -8.19 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 91.92 | 48% | 0.747 | 8.93 | 10.29 | 0.463 | 1.046 | -14.15 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + % chốt ở TP1 → 0.307 + Điểm vùng: Mức RSI 30/70 → 0.875 | 122.89 | 51.3% | 0.798 | 8.17 | 15.04 | 0.607 | 1.028 | -12.17 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Mức MACD → 0.875 | 114.79 | 52.1% | 0.82 | 7.31 | 15.7 | 0.684 | 0.964 | -11.13 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 98.24 | 47.7% | 0.642 | 9.11 | 10.78 | 0.672 | 0.612 | -10.9 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Break mây Ichimoku → 3 | 110.07 | 48.8% | 0.688 | 8.76 | 12.57 | 0.576 | 0.812 | -11.9 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Cộng thêm ngưỡng điểm khung 4H → 2 | 116.57 | 52.5% | 0.827 | 7.31 | 15.95 | 0.7 | 0.967 | -11.13 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Ngưỡng điểm vào kèo → 74 | 119.17 | 51.3% | 0.794 | 7.65 | 15.58 | 0.622 | 0.972 | -6.21 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Momentum (/100) → 21 | 121.94 | 53.5% | 0.859 | 7 | 17.42 | 0.694 | 1.043 | -12.16 |  |

### Vòng 1408 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Coin phải mạnh hơn BTC trong N ngày → 14 | 86.3 | 48.8% | 0.68 | 8.48 | 10.18 | 0.53 | 0.858 | -20.21 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 124.57 | 41.5% | 0.401 | 12.65 | 9.85 | 0.358 | 0.436 | -9.34 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Cộng thêm ngưỡng điểm khung 1D → 7 | 114.81 | 53.1% | 0.803 | 7.28 | 15.77 | 0.638 | 0.985 | -9.21 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: EMA 50 → 1.13 | 116.14 | 51.4% | 0.807 | 7.61 | 15.26 | 0.655 | 0.976 | -8.82 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + SL tối đa (% Entry) → 0.425 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 109.68 | 46.2% | 0.703 | 9.33 | 11.76 | 0.561 | 0.864 | -12.5 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Cộng điểm phân kỳ dương ẩn → 3 | 121.94 | 53.5% | 0.859 | 7.06 | 17.27 | 0.694 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Số TP tối đa → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: EMA 50 → 1.13 | 92.91 | 46.7% | 0.611 | 9.51 | 9.77 | 0.469 | 0.778 | -13.73 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Cổng Dow → TẮT + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Khung lớn phải tăng (trend ≥) → 0.425 | 123.77 | 42.9% | 0.589 | 12.03 | 10.29 | 0.487 | 0.696 | -22.28 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: HVN cố định → 0.438 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 116.37 | 47.9% | 0.697 | 9.77 | 11.91 | 0.741 | 0.657 | -3.11 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 129.05 | 50.6% | 0.838 | 8.15 | 15.83 | 0.815 | 0.865 | -12.74 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Cổng Dow → CHẶT + Điểm vùng: EMA 21 → 1.13 | 80.9 | 51.3% | 0.716 | 6.91 | 11.71 | 0.371 | 1.01 | -14.25 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 98.14 | 48.6% | 0.711 | 8.44 | 11.63 | 0.479 | 0.965 | -14.23 |  |

### Vòng 1407 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.10

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Biên mây Ichimoku → 1.35 | 117.1 | 51.4% | 0.802 | 7.97 | 14.69 | 0.649 | 0.969 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Entry (/100) → 28 + Trọng số phần Elliott (/100) → 6 | 120.73 | 52.8% | 0.838 | 7.27 | 16.61 | 0.66 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Đệm SL riêng khung 1D (ATR) → 0.3 | 114.33 | 46.6% | 0.71 | 10.25 | 11.15 | 0.703 | 0.717 | -10.76 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Divergence (/100) → 12 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 74.72 | 46.3% | 0.692 | 9.06 | 8.25 | 0.471 | 0.948 | -5.79 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 200 → 3 + SL tối đa (% Entry) → 0.425 | 96.09 | 47.9% | 0.686 | 8.38 | 11.47 | 0.524 | 0.836 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 96.25 | 48.5% | 0.708 | 8.53 | 11.28 | 0.489 | 0.94 | -15.94 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần Entry (/100) → 28 + Cộng thêm ngưỡng điểm khung 4H → -1 | 85.8 | 46% | 0.526 | 9.81 | 8.75 | 0.437 | 0.613 | -10.16 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: HVN cố định → 0.563 | 116.75 | 51.7% | 0.816 | 7.36 | 15.86 | 0.631 | 1.027 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: POC anchored → 2 + Điểm vùng: HVN anchored → 0.188 | 87.07 | 45.8% | 0.562 | 10.02 | 8.69 | 0.392 | 0.747 | -9.56 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 66.89 | 44.6% | 0.515 | 10.22 | 6.55 | 0.416 | 0.626 | -11.65 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Trọng số phần SL (/100) → 7 | 109.3 | 47.9% | 0.662 | 8.29 | 13.18 | 0.554 | 0.767 | -13.47 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: EMA 21 → 1.13 | 115.31 | 51.7% | 0.795 | 7.36 | 15.67 | 0.653 | 0.956 | -11.14 |  |

### Vòng 1406 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.02R, lời÷rủi ro 17.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Xác nhận khung nhỏ (A2) → W | 110.88 | 39.8% | 0.425 | 15.52 | 7.14 | 0.391 | 0.456 | -6.69 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 117.14 | 50.3% | 0.797 | 7.93 | 14.77 | 0.537 | 1.083 | -12.06 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 121.94 | 53.5% | 0.859 | 7.02 | 17.37 | 0.694 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib sóng 4 → 0.938 | 86.06 | 49.6% | 0.748 | 7.88 | 10.92 | 0.543 | 0.988 | -18.62 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Cộng thêm ngưỡng điểm khung 4H → 2 | 80.43 | 44.5% | 0.551 | 9.46 | 8.5 | 0.595 | 0.509 | -15.4 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 104.23 | 51.4% | 0.724 | 7.89 | 13.21 | 0.696 | 0.755 | -11.75 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cộng thêm ngưỡng điểm khung 1W → -1 | 70.9 | 45.3% | 0.554 | 9.79 | 7.24 | 0.413 | 0.714 | -12.21 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 111.07 | 51% | 0.777 | 7.93 | 14.01 | 0.643 | 0.92 | -9.74 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Ngưỡng điểm vào kèo → 77 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 113.2 | 51.4% | 0.786 | 7.43 | 15.24 | 0.676 | 0.905 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + R:R tối thiểu riêng khung 4H → 2 + Số TP tối đa → 3 | 129.28 | 42.6% | 0.417 | 11.53 | 11.21 | 0.425 | 0.41 | -7.45 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Cổng Dow → TẮT + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 29.55 | 34.7% | 0.244 | 14.07 | 2.1 | 0.327 | 0.142 | -2.11 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 113.1 | 51.8% | 0.802 | 7.29 | 15.51 | 0.666 | 0.949 | -9.63 |  |

### Vòng 1405 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.10

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Entry (/100) → 28 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 110.79 | 49.1% | 0.688 | 9.03 | 12.27 | 0.576 | 0.81 | -9.71 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + SL tối đa (% Entry) → 0.425 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 120.93 | 53.1% | 0.846 | 7.1 | 17.03 | 0.694 | 1.013 | -12.16 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + R:R tối thiểu riêng khung 1D → 2 | 113.95 | 46.8% | 0.666 | 8.8 | 12.95 | 0.668 | 0.664 | -7.62 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + % chốt ở TP1 → 0.287 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + SL tối đa (% Entry) → 0.425 | 106.03 | 51.4% | 0.716 | 8.42 | 12.59 | 0.669 | 0.767 | -11.82 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 30.74 | 56.8% | 0.198 | 5.56 | 5.53 | 0.23 | 0.17 | -8.19 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Xác nhận khung nhỏ (A2) → W | 105.89 | 39.1% | 0.406 | 15.43 | 6.86 | 0.396 | 0.415 | -8.08 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + R:R tối thiểu riêng khung 1D → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 124.93 | 41.9% | 0.481 | 11.38 | 10.98 | 0.536 | 0.429 | -11.41 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Lệnh chờ hết hạn sau (nến) → 8 | 116.06 | 50.6% | 0.744 | 8.31 | 13.97 | 0.61 | 0.893 | -13.75 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Khung lớn phải tăng (trend ≥) → 0.425 | 116.51 | 52.2% | 0.844 | 7.2 | 16.18 | 0.632 | 1.083 | -12.19 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Lệnh chờ hết hạn sau (nến) → 8 | 72.44 | 43.7% | 0.575 | 11.01 | 6.58 | 0.399 | 0.788 | -6.54 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 50 → 0.75 | 96.82 | 39.4% | 0.367 | 15.74 | 6.15 | 0.409 | 0.33 | -4.8 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Cộng thêm ngưỡng điểm khung 4H → -1 | 117.54 | 50.3% | 0.8 | 7.99 | 14.71 | 0.624 | 1.004 | -12.16 |  |

### Vòng 1404 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.13R, lời÷rủi ro 17.10

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cổng Dow → TẮT + % chốt ở TP1 → 0.287 | 136.37 | 44.3% | 0.649 | 11 | 12.4 | 0.59 | 0.711 | -18.12 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Ngưỡng điểm vào kèo → 74 | 96.34 | 45.1% | 0.63 | 9.88 | 9.75 | 0.405 | 0.889 | -12.06 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Lệnh chờ hết hạn sau (nến) → 6 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 100.46 | 49.3% | 0.718 | 8.24 | 12.19 | 0.497 | 0.979 | -11.68 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Break mây Ichimoku → 3 + R:R tối thiểu riêng khung 1D → 2 | 110.5 | 46.2% | 0.601 | 9.46 | 11.68 | 0.612 | 0.589 | -9.38 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 52.45 | 34.7% | 0.309 | 16.17 | 3.24 | 0.384 | 0.239 | -7.98 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm tối thiểu của vùng đặt SL → 2 | 30.92 | 58.1% | 0.193 | 5.97 | 5.18 | 0.232 | 0.159 | -8.72 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + % chốt ở TP1 → 0.287 | 126.48 | 44.3% | 0.555 | 10.6 | 11.93 | 0.589 | 0.522 | -15.29 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: HVN cố định → 0.438 | 107.81 | 48.7% | 0.709 | 8.42 | 12.8 | 0.675 | 0.743 | -11.14 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Trọng số phần Entry (/100) → 28 | 121.94 | 53.5% | 0.859 | 7.13 | 17.1 | 0.694 | 1.043 | -10.09 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 121.94 | 53.5% | 0.859 | 7.13 | 17.1 | 0.694 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 116.37 | 52.4% | 0.792 | 7.57 | 15.37 | 0.587 | 1.023 | -9.01 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: HVN anchored → 0.313 | 37.86 | 41.4% | 0.435 | 9.78 | 3.87 | 0.362 | 0.525 | -8.98 |  |

### Vòng 1403 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.08R, lời÷rủi ro 17.22

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: POC anchored → 2 | 103.64 | 45.1% | 0.632 | 10.77 | 9.62 | 0.635 | 0.629 | -11.79 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Trọng số phần Entry (/100) → 28 + Khung lớn phải tăng (trend ≥) → 0.375 | 111.61 | 50.4% | 0.792 | 7.73 | 14.44 | 0.575 | 1.024 | -12.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm tối thiểu của vùng đặt SL → 2 | 119 | 52.8% | 0.826 | 7.28 | 16.35 | 0.7 | 0.96 | -10.26 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 108.28 | 50.3% | 0.708 | 7.93 | 13.65 | 0.638 | 0.782 | -11.14 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Trọng số phần SL (/100) → 9 | 63.37 | 43.3% | 0.609 | 10 | 6.34 | 0.37 | 0.889 | -8.72 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: EMA 50 → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 117.15 | 47.6% | 0.697 | 10.14 | 11.55 | 0.71 | 0.685 | -12.77 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: EMA 50 → 1.13 | 107.77 | 50.3% | 0.754 | 7.98 | 13.51 | 0.575 | 0.956 | -8.02 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trọng số phần R:R (/100) → 33 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 135.17 | 44.1% | 0.641 | 11.19 | 12.08 | 0.576 | 0.708 | -19.64 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Xác nhận khung nhỏ (A2) → W | 72.21 | 40.5% | 0.352 | 15.44 | 4.68 | 0.261 | 0.427 | -14.42 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.688 | 177.58 | 39.2% | 0.606 | 17.63 | 10.07 | 0.515 | 0.7 | -7.77 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Biên mây Ichimoku → 1.05 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Mức RSI 30/70 → 0.875 | 83.3 | 50.4% | 0.646 | 8.38 | 9.94 | 0.496 | 0.829 | -19.45 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 28.42 | 57.4% | 0.183 | 6.09 | 4.67 | 0.231 | 0.138 | -7.79 |  |

### Vòng 1402 — ngẫu nhiên nhiều thông số · mốc: tổng 122.07R, win 53.9%, rủi ro tụt vốn 7.02R, lời÷rủi ro 17.39

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần Divergence (/100) → 9 | 112.44 | 47.9% | 0.673 | 8.56 | 13.14 | 0.661 | 0.684 | -8.8 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + % chốt ở TP1 → 0.287 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Biên mây Ichimoku → 1.05 | 111.38 | 52.8% | 0.784 | 7.29 | 15.28 | 0.656 | 0.921 | -12.15 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 109.72 | 50% | 0.741 | 7.84 | 13.99 | 0.67 | 0.819 | -10.33 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 1D → 2 + Xác nhận khung nhỏ (A2) → W | 69.28 | 40% | 0.301 | 15.82 | 4.38 | 0.237 | 0.353 | -17.13 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + R:R tối thiểu riêng khung 4H → 2 | 96.38 | 41% | 0.341 | 12.68 | 7.6 | 0.331 | 0.348 | -14.48 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Biên mây Ichimoku → 1.05 | 76.51 | 46.1% | 0.503 | 10.66 | 7.18 | 0.414 | 0.6 | -12.21 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Khung lớn phải tăng (trend ≥) → 0.425 | 116.64 | 52.6% | 0.851 | 7.37 | 15.83 | 0.642 | 1.083 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + R:R tối thiểu riêng khung 1W → 2 | 105.13 | 44.2% | 0.484 | 10.97 | 9.58 | 0.509 | 0.46 | -13.51 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Break mây Ichimoku → 1 + Xác nhận khung nhỏ (A2) → W | 42.63 | 35.3% | 0.179 | 24 | 1.78 | 0.203 | 0.16 | -17.88 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Khung lớn phải tăng (trend ≥) → 0.425 + Cộng thêm ngưỡng điểm khung 1D → 7 | 69.34 | 46.1% | 0.542 | 10.14 | 6.84 | 0.42 | 0.684 | -8.75 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Momentum (/100) → 21 + Cộng thêm ngưỡng điểm khung 4H → -1 | 120.04 | 53.1% | 0.839 | 7.36 | 16.31 | 0.682 | 1.013 | -11.32 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 33.17 | 56.5% | 0.215 | 5.97 | 5.56 | 0.272 | 0.163 | -8 |  |
