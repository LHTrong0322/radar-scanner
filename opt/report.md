# Tối ưu tự động (chạy liên tục) — vòng 1455

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 17080 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 47% | 97.31R | 0.593 | 6.7R | 9.82R | 9.91 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 141 | 53.2% | 120.32R | 0.853 | 5.15R | 7.26R | 16.57 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

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
| Bot thật | 164 | 47% | 97.31R | 9.82R | 9.91 | 30 | 13.3% | -11.98R |
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

### Vòng 1455 — ngẫu nhiên nhiều thông số · mốc: tổng 120.32R, win 53.2%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.57

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 114.17 | 48.7% | 0.751 | 8.44 | 13.53 | 0.73 | 0.775 | -13.57 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Trọng số phần Elliott (/100) → 10 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: EMA 200 → 1 | 99.07 | 43.6% | 0.6 | 11.2 | 8.85 | 0.547 | 0.656 | -5.99 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + SL tối đa (% Entry) → 0.425 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 20.38 | 62.1% | 0.214 | 5.53 | 3.69 | 0.215 | 0.214 | -5.83 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.563 + R:R tối thiểu riêng khung 1D → 2 | 105.26 | 44.3% | 0.605 | 10.68 | 9.86 | 0.541 | 0.663 | -9.81 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: POC anchored → 2 | 93.3 | 38.1% | 0.332 | 17.11 | 5.45 | 0.396 | 0.275 | -11.24 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Momentum (/100) → 25 + Điểm tối thiểu của vùng đặt SL → 2 | 105.19 | 47.3% | 0.638 | 8.55 | 12.3 | 0.554 | 0.718 | -11.16 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm tối thiểu của vùng đặt SL → 4 + Cộng điểm phân kỳ dương ẩn → 3 | 109.96 | 50.7% | 0.785 | 7.77 | 14.15 | 0.666 | 0.916 | -10.67 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 168.42 | 38.6% | 0.571 | 18.13 | 9.29 | 0.508 | 0.637 | -11.09 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Số TP tối đa → 3 + Điểm vùng: POC anchored → 2 | 86.47 | 47.1% | 0.551 | 10.31 | 8.39 | 0.419 | 0.695 | -9.56 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: EMA 200 → 3 | 110.06 | 50.7% | 0.775 | 7.62 | 14.44 | 0.592 | 0.968 | -13.15 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + R:R tối thiểu riêng khung 1D → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Ngưỡng điểm vào kèo → 74 | 122.93 | 41.1% | 0.398 | 14.41 | 8.53 | 0.404 | 0.392 | -13.52 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 101.29 | 48.3% | 0.68 | 9.09 | 11.14 | 0.501 | 0.887 | -10.58 |  |

### Vòng 1454 — ngẫu nhiên nhiều thông số · mốc: tổng 122.81R, win 53.1%, rủi ro tụt vốn 7.45R, lời÷rủi ro 16.48

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Điểm vùng: MACD cắt lên Signal → 0.438 | 112.41 | 50.3% | 0.735 | 8.75 | 12.85 | 0.535 | 0.966 | -9.58 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 101.96 | 50.4% | 0.755 | 7.25 | 14.06 | 0.543 | 0.97 | -17.06 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Divergence (/100) → 12 | 104.42 | 50.7% | 0.715 | 8.37 | 12.48 | 0.657 | 0.784 | -12.95 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm tối thiểu của vùng đặt SL → 4 | 112.83 | 44.5% | 0.497 | 11.54 | 9.78 | 0.517 | 0.478 | -12.81 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: POC anchored → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 | 97.3 | 48.6% | 0.676 | 8.27 | 11.77 | 0.605 | 0.751 | -14.21 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Trọng số phần Momentum (/100) → 21 | 118.81 | 52.8% | 0.837 | 7.42 | 16.01 | 0.651 | 1.05 | -13.19 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Mức RSI 30/70 → 0.875 + Số TP tối đa → 3 | 117.87 | 50.9% | 0.741 | 8.52 | 13.83 | 0.631 | 0.868 | -14.02 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Cộng thêm ngưỡng điểm khung 4H → -1 | 122.06 | 52.4% | 0.854 | 7.49 | 16.3 | 0.7 | 1.027 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + % chốt ở TP1 → 0.307 + Điểm vùng: EMA 21 → 1.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 107.09 | 51% | 0.739 | 7.57 | 14.15 | 0.683 | 0.798 | -12.71 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 76.51 | 45.9% | 0.689 | 8.94 | 8.56 | 0.49 | 0.933 | -7.24 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức MACD → 1.13 | 174.44 | 37.7% | 0.578 | 18 | 9.69 | 0.529 | 0.627 | -14.99 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + % chốt ở TP1 → 0.307 + Điểm vùng: HVN anchored → 0.188 | 102.29 | 51.1% | 0.781 | 7.6 | 13.46 | 0.648 | 0.943 | -11.54 |  |

### Vòng 1453 — ngẫu nhiên nhiều thông số · mốc: tổng 120.32R, win 53.2%, rủi ro tụt vốn 7.09R, lời÷rủi ro 16.97

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 103.33 | 51.4% | 0.718 | 7.97 | 12.96 | 0.696 | 0.742 | -10.61 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần Elliott (/100) → 6 + R:R tối thiểu riêng khung 4H → 2 | 126.99 | 41.5% | 0.406 | 12.53 | 10.13 | 0.352 | 0.451 | -10.37 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + % chốt ở TP1 → 0.287 | 120.23 | 53.2% | 0.853 | 7.09 | 16.96 | 0.691 | 1.036 | -12.14 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 63.88 | 42.5% | 0.565 | 10.07 | 6.34 | 0.476 | 0.66 | -6.1 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: POC anchored → 4 | 118.26 | 51.7% | 0.805 | 7.8 | 15.16 | 0.633 | 0.983 | -6.21 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần SL (/100) → 9 | 102.61 | 51% | 0.718 | 8.25 | 12.44 | 0.696 | 0.742 | -11.92 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Khung lớn phải tăng (trend ≥) → 0.425 | 94.21 | 47.1% | 0.683 | 8.7 | 10.83 | 0.512 | 0.88 | -9.67 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Cộng điểm phân kỳ dương ẩn → 2.25 | 25.66 | 56.6% | 0.169 | 6.41 | 4 | 0.178 | 0.16 | -8.24 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Số TP tối đa → 1 + R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1D → 2 | 132.17 | 41.1% | 0.393 | 12.72 | 10.39 | 0.479 | 0.322 | -13.52 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần SL (/100) → 9 | 27.49 | 56.7% | 0.175 | 6.38 | 4.31 | 0.196 | 0.155 | -8.14 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: EMA 200 → 3 | 71.11 | 44.2% | 0.551 | 9.95 | 7.15 | 0.498 | 0.613 | -11.18 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Cộng điểm phân kỳ dương ẩn → 2.25 | 113.92 | 52.5% | 0.82 | 7.28 | 15.65 | 0.678 | 0.976 | -12.16 |  |

### Vòng 1452 — ngẫu nhiên nhiều thông số · mốc: tổng 120.32R, win 53.2%, rủi ro tụt vốn 7.29R, lời÷rủi ro 16.50

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: POC volume profile cố định → 0.813 | 118.13 | 53.1% | 0.826 | 7.16 | 16.5 | 0.694 | 0.972 | -8.82 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 111.05 | 48.1% | 0.694 | 9.68 | 11.47 | 0.432 | 1.006 | -10.5 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần R:R (/100) → 33 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.29 | 57.7% | 0.201 | 5.76 | 5.43 | 0.232 | 0.171 | -8.19 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Khung lớn phải tăng (trend ≥) → 0.375 | 66.55 | 42.8% | 0.482 | 11.42 | 5.83 | 0.45 | 0.518 | -11.82 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Coin phải mạnh hơn BTC trong N ngày → 14 | 87.32 | 50% | 0.753 | 7.89 | 11.07 | 0.571 | 0.976 | -18.62 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: EMA 200 → 1 | 128.36 | 41% | 0.379 | 13.49 | 9.52 | 0.342 | 0.412 | 2.5 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu tới TP1 → 2.63 | 78 | 49.2% | 0.65 | 8.64 | 9.03 | 0.521 | 0.793 | -13.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Trend (/100) → 19 | 109.37 | 45.7% | 0.675 | 10.68 | 10.24 | 0.736 | 0.622 | -12.29 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Divergence (/100) → 9 | 119.62 | 52.8% | 0.842 | 7.29 | 16.41 | 0.676 | 1.034 | -12.16 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.438 | 95.84 | 45.1% | 0.666 | 9.84 | 9.74 | 0.402 | 0.929 | -14.01 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 58.36 | 37.6% | 0.314 | 13.59 | 4.29 | 0.353 | 0.275 | -0.71 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần R:R (/100) → 28 + R:R tối thiểu riêng khung 1W → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 24.72 | 54.4% | 0.168 | 6.1 | 4.05 | 0.223 | 0.121 | -8.29 |  |

### Vòng 1451 — ngẫu nhiên nhiều thông số · mốc: tổng 120.32R, win 53.2%, rủi ro tụt vốn 7.09R, lời÷rủi ro 16.97

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 74.43 | 46.7% | 0.696 | 8.67 | 8.58 | 0.438 | 0.989 | -4.43 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: Mức RSI 30/70 → 0.875 | 119.2 | 50.3% | 0.769 | 8.38 | 14.22 | 0.587 | 0.991 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Fib sóng 4 → 0.938 | 111.17 | 51.8% | 0.8 | 7.55 | 14.72 | 0.64 | 0.977 | -12.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Số TP tối đa → 1 + Điểm vùng: EMA 200 → 3 + Điểm vùng: EMA 50 → 0.75 | 100.49 | 45.2% | 0.598 | 9.56 | 10.51 | 0.552 | 0.638 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 24.73 | 57.2% | 0.163 | 6.27 | 3.94 | 0.173 | 0.153 | -9.19 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: MACD cắt lên Signal → 0.563 | 31.29 | 57.7% | 0.201 | 5.69 | 5.5 | 0.232 | 0.171 | -8.19 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Momentum (/100) → 21 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 113.85 | 49.7% | 0.735 | 8.37 | 13.6 | 0.833 | 0.615 | -12.34 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: EMA 200 → 1 + Cộng thêm ngưỡng điểm khung 1W → 2 | 113.86 | 49% | 0.754 | 8.52 | 13.36 | 0.639 | 0.894 | -11.38 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Coin phải mạnh hơn BTC trong N ngày → 14 | 74.8 | 47.8% | 0.662 | 8.72 | 8.58 | 0.502 | 0.843 | -17.09 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 107.98 | 49% | 0.735 | 8.13 | 13.28 | 0.628 | 0.852 | -11.18 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Lệnh chờ hết hạn sau (nến) → 8 | 97.5 | 46.2% | 0.617 | 9.7 | 10.05 | 0.452 | 0.804 | -12.18 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: EMA 21 → 1.13 | 113.88 | 51.7% | 0.796 | 7.5 | 15.18 | 0.665 | 0.946 | -11.14 |  |

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
