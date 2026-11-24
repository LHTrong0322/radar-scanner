# Tối ưu tự động (chạy liên tục) — vòng 1380

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 16180 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 165 | 47.3% | 98.93R | 0.6 | 6.7R | 9.44R | 10.48 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 142 | 53.5% | 121.94R | 0.859 | 5.15R | 7.06R | 17.27 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 26 | 50% | 20.05R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 105 | 55.2% | 94.92R | 19 | 21.1% | -4.19R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 165 | 47.3% | 98.93R | 9.44R | 10.48 | 30 | 13.3% | -11.98R |
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

### Vòng 1380 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Xác nhận khung nhỏ (A2) → W | 111.1 | 40% | 0.427 | 15.32 | 7.25 | 0.396 | 0.456 | -6.68 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Break mây Ichimoku → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 147.43 | 42.7% | 0.429 | 11.4 | 12.93 | 0.436 | 0.422 | -4.39 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + SL tối đa (% Entry) → 0.425 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 73.7 | 45.9% | 0.676 | 9.39 | 7.85 | 0.445 | 0.948 | -5.9 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu riêng khung 1W → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần Momentum (/100) → 21 | 109.34 | 48.1% | 0.692 | 9.3 | 11.76 | 0.5 | 0.899 | -11.54 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Cộng điểm phân kỳ dương ẩn → 2.25 | 108.05 | 50.7% | 0.761 | 7.76 | 13.92 | 0.627 | 0.891 | -13.19 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: POC anchored → 4 | 89.47 | 46.7% | 0.596 | 9.89 | 9.05 | 0.422 | 0.79 | -7.01 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 128.18 | 42.3% | 0.411 | 11.73 | 10.93 | 0.431 | 0.394 | -5.96 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Lệnh chờ hết hạn sau (nến) → 6 | 54.97 | 43.3% | 0.458 | 10.75 | 5.11 | 0.38 | 0.547 | -9.81 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Fib sóng 4 → 0.938 | 110.84 | 50.7% | 0.781 | 7.81 | 14.19 | 0.632 | 0.952 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Đệm SL riêng khung 1D (ATR) → 0.3 + Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần SL (/100) → 9 | 106.69 | 44.5% | 0.651 | 10.74 | 9.93 | 0.668 | 0.635 | -11.78 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Cổng Dow → TẮT + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 135.03 | 44.1% | 0.634 | 11.31 | 11.94 | 0.623 | 0.645 | -21.47 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Trọng số phần SL (/100) → 7 | 122 | 53.5% | 0.859 | 7.06 | 17.28 | 0.696 | 1.042 | -12.17 |  |

### Vòng 1379 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.54R, lời÷rủi ro 15.88

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Số TP tối đa → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 115.5 | 52.1% | 0.813 | 7.39 | 15.63 | 0.615 | 1.029 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + R:R tối thiểu tới TP1 → 2.63 + Xác nhận khung nhỏ (A2) → W + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 82.43 | 35.8% | 0.355 | 17.63 | 4.68 | 0.353 | 0.358 | -6.74 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: POC anchored → 4 | 116.08 | 50.3% | 0.759 | 8.3 | 13.99 | 0.609 | 0.918 | -8.02 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 106.8 | 47.6% | 0.651 | 8.55 | 12.49 | 0.541 | 0.757 | -13.47 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: EMA 21 → 1.13 + Cộng thêm ngưỡng điểm khung 1W → 2 | 113.63 | 50.7% | 0.789 | 7.46 | 15.23 | 0.656 | 0.934 | -11.56 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 21.55 | 63.2% | 0.227 | 5.14 | 4.19 | 0.214 | 0.242 | -5.83 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần SL (/100) → 7 | 87.73 | 49.6% | 0.75 | 7.95 | 11.04 | 0.552 | 0.988 | -18.62 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: EMA 200 → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 101.08 | 47.7% | 0.669 | 8.02 | 12.6 | 0.547 | 0.8 | -12.12 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 106.61 | 49% | 0.735 | 8.27 | 12.89 | 0.574 | 0.923 | -11.39 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 127.85 | 50% | 0.83 | 7.92 | 16.14 | 0.8 | 0.865 | -12.74 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 38.67 | 42.2% | 0.43 | 9.82 | 3.94 | 0.359 | 0.514 | -5.18 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 107.12 | 45.3% | 0.714 | 9.62 | 11.14 | 0.534 | 0.899 | -14.01 |  |

### Vòng 1378 — ngẫu nhiên nhiều thông số · mốc: tổng 119.79R, win 53.3%, rủi ro tụt vốn 7.17R, lời÷rủi ro 16.71

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức MACD → 1.13 + Điểm tối thiểu của vùng đặt SL → 4 | 69.97 | 44.8% | 0.666 | 9.35 | 7.48 | 0.475 | 0.885 | -4.75 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 18.08 | 48.1% | 0.07 | 9.38 | 1.93 | 0.085 | 0.059 | -12.14 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 104.72 | 50% | 0.737 | 8 | 13.09 | 0.63 | 0.842 | -8.84 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cộng điểm phân kỳ dương ẩn → 3 | 121.08 | 52.5% | 0.859 | 7.55 | 16.04 | 0.612 | 1.123 | -11.01 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + % chốt ở TP1 → 0.307 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 107.41 | 49.7% | 0.741 | 8.03 | 13.38 | 0.64 | 0.84 | -9.69 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần Entry (/100) → 33 + Điểm tối thiểu của vùng đặt SL → 2 | 119.64 | 51.3% | 0.798 | 8.08 | 14.81 | 0.645 | 0.977 | -7.96 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: HVN anchored → 0.188 | 119.79 | 53.3% | 0.874 | 7.17 | 16.71 | 0.687 | 1.082 | -9.86 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 109.36 | 45.8% | 0.706 | 10.48 | 10.44 | 0.792 | 0.638 | -8.25 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Cộng thêm ngưỡng điểm khung 1W → 2 | 118.59 | 52.2% | 0.872 | 7.17 | 16.54 | 0.718 | 1.036 | -9.25 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Break mây Ichimoku → 1 | 106.03 | 49.3% | 0.747 | 8.28 | 12.81 | 0.557 | 0.953 | -10.69 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: BOS → 0 + Cộng điểm phân kỳ dương ẩn → 2.25 | 110.42 | 50.3% | 0.761 | 7.8 | 14.16 | 0.663 | 0.864 | -8.85 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Lệnh chờ hết hạn sau (nến) → 8 | 170.73 | 39.1% | 0.565 | 17.53 | 9.74 | 0.407 | 0.728 | -13.43 |  |

### Vòng 1377 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.02R, lời÷rủi ro 17.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 39.9 | 42% | 0.453 | 9.44 | 4.23 | 0.362 | 0.563 | -5.18 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần R:R (/100) → 28 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 27.86 | 56.4% | 0.179 | 6.27 | 4.44 | 0.217 | 0.144 | -7.79 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: BOS → 0 + Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm vào kèo → 74 | 175.07 | 38.6% | 0.587 | 17.92 | 9.77 | 0.505 | 0.673 | -9.55 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 1W (ATR) → 0.3 | 108.05 | 47.6% | 0.756 | 8.95 | 12.07 | 0.55 | 0.964 | -14.01 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: HVN anchored → 0.188 | 114.19 | 49.3% | 0.827 | 8.04 | 14.2 | 0.615 | 1.073 | -10.4 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Mức RSI 30/70 → 0.875 | 110.88 | 50% | 0.711 | 8.7 | 12.74 | 0.576 | 0.895 | -11.14 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + % chốt ở TP1 → 0.307 | 74.79 | 46.3% | 0.692 | 9.04 | 8.27 | 0.472 | 0.948 | -5.79 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Xác nhận khung nhỏ (A2) → W | 108.67 | 40.1% | 0.415 | 15.09 | 7.2 | 0.366 | 0.46 | -4.45 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 1W → -1 | 112.13 | 47.1% | 0.66 | 8.56 | 13.1 | 0.637 | 0.68 | -8.93 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: POC anchored → 4 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 119.12 | 41.8% | 0.405 | 12.26 | 9.72 | 0.435 | 0.383 | -7.16 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 118.32 | 53.5% | 0.822 | 7.17 | 16.5 | 0.676 | 0.985 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Xác nhận khung nhỏ (A2) → W + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib sóng 4 → 1.56 | 96.61 | 38.1% | 0.372 | 16.58 | 5.83 | 0.418 | 0.324 | -4.79 |  |

### Vòng 1376 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.56R, lời÷rủi ro 15.84

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: EMA 21 → 1.13 + R:R tối thiểu riêng khung 4H → 2 | 142.71 | 40.3% | 0.381 | 12.69 | 11.25 | 0.407 | 0.358 | -9.18 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1W (ATR) → 0.3 | 45.71 | 33.6% | 0.142 | 24.6 | 1.86 | 0.064 | 0.199 | -4.76 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Momentum (/100) → 21 | 110.01 | 48.4% | 0.683 | 9.13 | 12.05 | 0.561 | 0.817 | -11.03 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1D → 7 | 176.1 | 38.9% | 0.595 | 17.8 | 9.89 | 0.495 | 0.7 | -3.73 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Trọng số phần SL (/100) → 9 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 118.51 | 48.7% | 0.76 | 8.58 | 13.81 | 0.585 | 0.959 | -12.55 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + SL tối đa (% Entry) → 0.425 | 113.17 | 48.9% | 0.814 | 8.21 | 13.78 | 0.615 | 1.041 | -10.38 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 91.82 | 46.3% | 0.675 | 9.65 | 9.52 | 0.436 | 0.944 | -15.74 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Elliott (/100) → 10 | 178.97 | 38.9% | 0.605 | 17.14 | 10.44 | 0.521 | 0.692 | -5.65 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần Momentum (/100) → 21 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 118.71 | 48.4% | 0.766 | 8.73 | 13.6 | 0.76 | 0.772 | -11.45 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Fib sóng 4 → 0.938 + Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 1W → 2 | 71.43 | 46.7% | 0.595 | 9.01 | 7.93 | 0.507 | 0.684 | -18.62 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 91.2 | 47.4% | 0.666 | 8.47 | 10.77 | 0.448 | 0.868 | -12.8 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm tối thiểu của vùng đặt SL → 4 | 115.68 | 51% | 0.809 | 7.83 | 14.77 | 0.661 | 0.972 | -12.03 |  |

### Vòng 1375 — ngẫu nhiên nhiều thông số · mốc: tổng 119.79R, win 53.3%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.32

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + R:R tối thiểu riêng khung 1W → 2 | 106.45 | 50.4% | 0.777 | 7.96 | 13.37 | 0.675 | 0.869 | -10.9 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 113.63 | 51.8% | 0.818 | 7.53 | 15.09 | 0.67 | 0.976 | -9.86 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 200 → 1 + Cộng điểm phân kỳ dương ẩn → 2.25 | 72.75 | 46.4% | 0.661 | 8.92 | 8.16 | 0.424 | 0.946 | 0.06 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cộng thêm ngưỡng điểm khung 1W → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 84.42 | 45.3% | 0.531 | 10.17 | 8.3 | 0.526 | 0.535 | -7.52 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 73.55 | 44.2% | 0.707 | 9.21 | 7.99 | 0.547 | 0.894 | -2.43 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + SL tối đa (% Entry) → 0.425 | 115.42 | 52.1% | 0.824 | 7.82 | 14.76 | 0.641 | 1.031 | -9.86 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Momentum (/100) → 21 + R:R tối thiểu tới TP1 → 2.63 | 79.58 | 48.3% | 0.686 | 9.13 | 8.72 | 0.519 | 0.878 | -10.6 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Cộng điểm phân kỳ dương ẩn → 3 | 41.55 | 41.3% | 0.381 | 11.04 | 3.76 | 0.414 | 0.342 | -8.63 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần SL (/100) → 9 | 106.14 | 45.4% | 0.651 | 9.18 | 11.56 | 0.661 | 0.643 | -8.78 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 3 | 101.1 | 45.5% | 0.648 | 10.33 | 9.79 | 0.479 | 0.817 | -11.71 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: POC anchored → 4 | 118.53 | 51.4% | 0.823 | 7.77 | 15.25 | 0.643 | 1.008 | -5.17 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Lệnh chờ hết hạn sau (nến) → 8 + Đệm SL riêng khung 1D (ATR) → 0.3 + Số TP tối đa → 1 | 108.2 | 45.2% | 0.644 | 11.07 | 9.77 | 0.663 | 0.628 | -10.1 |  |

### Vòng 1374 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Trọng số phần SL (/100) → 7 | 121.94 | 53.5% | 0.859 | 7.06 | 17.27 | 0.694 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + R:R tối thiểu riêng khung 4H → 2 + % chốt ở TP1 → 0.287 + Cộng điểm phân kỳ dương ẩn → 3 | 138.22 | 42.7% | 0.44 | 11.46 | 12.06 | 0.456 | 0.427 | -5.33 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 67.13 | 43.7% | 0.497 | 10.8 | 6.22 | 0.349 | 0.688 | -9.77 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 111.73 | 47.5% | 0.698 | 9.09 | 12.29 | 0.582 | 0.821 | -14.53 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Trend (/100) → 19 | 117.07 | 51% | 0.755 | 8.19 | 14.29 | 0.61 | 0.919 | -13.75 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + R:R tối thiểu riêng khung 1D → 2 | 106.64 | 45.3% | 0.62 | 9.05 | 11.78 | 0.572 | 0.662 | -8.93 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Momentum (/100) → 25 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 183.01 | 38.7% | 0.606 | 17.78 | 10.29 | 0.55 | 0.668 | -7.71 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Fib sóng 4 → 0.938 | 113.42 | 49.7% | 0.741 | 8.76 | 12.95 | 0.554 | 0.958 | -9.4 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Lệnh chờ hết hạn sau (nến) → 8 | 117.07 | 51% | 0.755 | 8.19 | 14.29 | 0.61 | 0.919 | -13.75 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 116.05 | 50% | 0.744 | 8.28 | 14.02 | 0.833 | 0.637 | -12.5 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Biên mây Ichimoku → 1.05 | 110.42 | 52.1% | 0.767 | 7.63 | 14.47 | 0.648 | 0.892 | -12.99 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Trọng số phần SL (/100) → 9 | 120.47 | 52.8% | 0.848 | 7.21 | 16.71 | 0.694 | 1.021 | -12.16 |  |

### Vòng 1373 — ngẫu nhiên nhiều thông số · mốc: tổng 119.66R, win 52.4%, rủi ro tụt vốn 7.54R, lời÷rủi ro 15.87

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 97.86 | 37.5% | 0.382 | 16.27 | 6.01 | 0.342 | 0.42 | -10.17 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Entry (/100) → 33 + Điểm vùng: POC anchored → 4 | 118.43 | 51.4% | 0.8 | 7.71 | 15.36 | 0.633 | 0.972 | -6.98 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Cổng Dow → TẮT | 83.05 | 42.1% | 0.486 | 12.96 | 6.41 | 0.503 | 0.467 | -21.72 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần Entry (/100) → 33 | 116.89 | 52.4% | 0.817 | 7.54 | 15.5 | 0.624 | 1.031 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Mức MACD → 0.875 | 110.09 | 52.1% | 0.775 | 7.46 | 14.76 | 0.626 | 0.943 | -12.16 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 114.19 | 49.3% | 0.827 | 7.8 | 14.64 | 0.615 | 1.073 | -11.42 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Momentum (/100) → 21 | 105.43 | 50% | 0.742 | 7.94 | 13.28 | 0.589 | 0.891 | -14.22 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Khung lớn phải tăng (trend ≥) → 0.425 + SL tối đa (% Entry) → 0.425 | 104.67 | 46.1% | 0.634 | 9.25 | 11.32 | 0.565 | 0.697 | -9.99 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 103.48 | 50.7% | 0.719 | 8.08 | 12.81 | 0.701 | 0.737 | -11.92 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 111.73 | 49.4% | 0.726 | 8.09 | 13.81 | 0.629 | 0.833 | -12.17 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần R:R (/100) → 33 | 105.7 | 52.1% | 0.734 | 7.87 | 13.43 | 0.696 | 0.777 | -12.78 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: HVN anchored → 0.188 | 89.22 | 46.3% | 0.544 | 9.47 | 9.42 | 0.48 | 0.606 | -10.16 |  |

### Vòng 1372 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 118.74 | 45.3% | 0.656 | 9.21 | 12.89 | 0.737 | 0.582 | -11.35 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 41.99 | 33% | 0.124 | 28.62 | 1.47 | 0.16 | 0.106 | -38.51 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Momentum (/100) → 21 + SL tối đa (% Entry) → 0.425 | 120.93 | 53.1% | 0.846 | 7.19 | 16.82 | 0.694 | 1.013 | -12.16 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cổng Dow → CHẶT | 71.62 | 51.3% | 0.623 | 7.71 | 9.29 | 0.41 | 0.811 | -14.01 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + SL tối đa (% Entry) → 0.425 | 120.93 | 53.1% | 0.846 | 7.19 | 16.82 | 0.694 | 1.013 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 118.11 | 51.7% | 0.815 | 7.63 | 15.48 | 0.649 | 0.997 | -11.14 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 148.39 | 37.8% | 0.501 | 19.01 | 7.81 | 0.461 | 0.54 | -10.74 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Momentum (/100) → 21 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Mức RSI 30/70 → 1.13 | 92.31 | 42.9% | 0.599 | 11.79 | 7.83 | 0.536 | 0.653 | -12.62 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 44.65 | 42.7% | 0.465 | 9.56 | 4.67 | 0.467 | 0.463 | -5.18 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Xác nhận khung nhỏ (A2) → W | 71.94 | 35.9% | 0.29 | 19.36 | 3.72 | 0.28 | 0.3 | -7.97 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: BOS → 2 + % chốt ở TP1 → 0.307 | 119.22 | 52.4% | 0.834 | 7.37 | 16.18 | 0.65 | 1.042 | -12.17 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 113.12 | 51.4% | 0.786 | 7.48 | 15.12 | 0.676 | 0.904 | -11.13 |  |

### Vòng 1371 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: MACD cắt lên Signal → 0.563 | 118.11 | 51.7% | 0.815 | 7.63 | 15.48 | 0.649 | 0.997 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần Entry (/100) → 28 | 119.93 | 52.9% | 0.857 | 7.16 | 16.75 | 0.685 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + R:R tối thiểu riêng khung 4H → 2 + Lệnh chờ hết hạn sau (nến) → 6 | 122.73 | 41.7% | 0.416 | 11.53 | 10.64 | 0.397 | 0.432 | -5.02 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: POC anchored → 2 + Điểm tối thiểu của vùng đặt SL → 2 | 98.92 | 49% | 0.664 | 8.84 | 11.19 | 0.537 | 0.793 | -9.85 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Cổng Dow → TẮT + Điểm vùng: Biên mây Ichimoku → 1.35 | 128.42 | 43% | 0.62 | 11.24 | 11.43 | 0.531 | 0.714 | -19.12 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 100.63 | 50.7% | 0.689 | 8.08 | 12.45 | 0.655 | 0.728 | -12.89 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Trọng số phần Trend (/100) → 19 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 116.19 | 51.7% | 0.78 | 7.75 | 14.99 | 0.587 | 0.991 | -8.9 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Break mây Ichimoku → 3 | 111.54 | 49.4% | 0.697 | 8.75 | 12.75 | 0.576 | 0.831 | -11.9 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: EMA 50 → 0.75 + Khung lớn phải tăng (trend ≥) → 0.425 | 114.33 | 52.6% | 0.835 | 7.36 | 15.53 | 0.612 | 1.074 | -12.19 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Khung lớn phải tăng (trend ≥) → 0.375 + R:R tối thiểu tới TP1 → 2.38 | 33.53 | 40% | 0.319 | 11.84 | 2.83 | 0.301 | 0.34 | -5.84 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: POC anchored → 4 | 93.07 | 47.1% | 0.674 | 9.09 | 10.24 | 0.478 | 0.865 | -5.57 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Coin phải mạnh hơn BTC trong N ngày → 14 + Ngưỡng điểm vào kèo → 77 + Điểm tối thiểu của vùng đặt SL → 4 | 77.25 | 48.3% | 0.666 | 8.36 | 9.24 | 0.568 | 0.779 | -16.1 |  |
