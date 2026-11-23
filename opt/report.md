# Tối ưu tự động (chạy liên tục) — vòng 1217

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 14236 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 47% | 99.07R | 0.604 | 5.7R | 9.67R | 10.25 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 141 | 52.5% | 117.56R | 0.834 | 5.15R | 7.14R | 16.46 | 29 | 13.8% | -13.18R | -0.454 | 13.18R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 25 | 48% | 19.78R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 105 | 54.3% | 90.81R | 20 | 20% | -5.21R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 47% | 99.07R | 9.67R | 10.25 | 31 | 12.9% | -13R |
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

### Vòng 1217 — ngẫu nhiên nhiều thông số · mốc: tổng 117.56R, win 52.5%, rủi ro tụt vốn 7.14R, lời÷rủi ro 16.46

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Mức MACD → 0.875 | 91.84 | 47.3% | 0.621 | 9.41 | 9.76 | 0.404 | 0.875 | -10.32 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: EMA 50 → 0.75 + Coin phải mạnh hơn BTC trong N ngày → 14 | 88.36 | 51.3% | 0.755 | 7.64 | 11.57 | 0.538 | 1.018 | -19.65 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Khung lớn phải tăng (trend ≥) → 0.425 | 107.27 | 50.7% | 0.801 | 7.8 | 13.75 | 0.534 | 1.11 | -13.21 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Cổng Dow → TẮT + Trọng số phần Entry (/100) → 28 | 128.38 | 43.6% | 0.636 | 11.04 | 11.63 | 0.529 | 0.748 | -18.94 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 | 70.42 | 45.8% | 0.597 | 9.96 | 7.07 | 0.397 | 0.842 | -7.39 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Biên mây Ichimoku → 1.35 | 111.63 | 49.7% | 0.711 | 8.51 | 13.12 | 0.599 | 0.837 | -12.14 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: EMA 21 → 0.875 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 85.65 | 41.5% | 0.468 | 12.45 | 6.88 | 0.449 | 0.485 | -8.47 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Biên mây Ichimoku → 1.05 | 106.66 | 48.3% | 0.706 | 8.56 | 12.46 | 0.662 | 0.75 | -12.72 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần SL (/100) → 7 + R:R tối thiểu tới TP1 → 2.38 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 101.16 | 45.3% | 0.588 | 9.51 | 10.64 | 0.614 | 0.562 | -14.31 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Entry (/100) → 33 | 74.96 | 41.1% | 0.416 | 13 | 5.77 | 0.401 | 0.43 | -8.51 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 86.32 | 47.5% | 0.612 | 9.07 | 9.52 | 0.464 | 0.771 | -11.46 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 50 → 1.13 | 111.32 | 49.7% | 0.778 | 8.09 | 13.76 | 0.605 | 0.981 | -12.16 |  |

### Vòng 1216 — ngẫu nhiên nhiều thông số · mốc: tổng 120.6R, win 52.4%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.61

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Elliott (/100) → 10 + Lệnh chờ hết hạn sau (nến) → 6 | 98.69 | 49.6% | 0.753 | 7.86 | 12.56 | 0.608 | 0.92 | -12.82 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Cộng thêm ngưỡng điểm khung 1D → 5 + Số TP tối đa → 3 | 114.1 | 49.6% | 0.833 | 7.94 | 14.37 | 0.61 | 1.095 | -11.42 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm tối thiểu của vùng đặt SL → 2 | 113.3 | 50.3% | 0.781 | 7.78 | 14.56 | 0.646 | 0.931 | -12.16 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Số TP tối đa → 3 + R:R tối thiểu tới TP1 → 2.38 | 121.97 | 42.6% | 0.53 | 12.28 | 9.93 | 0.464 | 0.597 | -17.12 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Entry (/100) → 33 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 118.12 | 51.4% | 0.82 | 7.33 | 16.11 | 0.66 | 0.994 | -11.89 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần Momentum (/100) → 21 | 117.61 | 50% | 0.795 | 8.05 | 14.61 | 0.524 | 1.096 | -13.08 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: EMA 200 → 1 | 111.94 | 48.4% | 0.695 | 8.5 | 13.17 | 0.637 | 0.764 | -7.17 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Elliott (/100) → 10 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 137.52 | 42.6% | 0.548 | 11.83 | 11.62 | 0.666 | 0.434 | -18.25 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 109.9 | 51.4% | 0.753 | 7.76 | 14.16 | 0.604 | 0.914 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Cổng Dow → TẮT + Điểm vùng: POC anchored → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 | 86.01 | 32.5% | 0.245 | 28.2 | 3.05 | 0.152 | 0.322 | -27.52 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Đệm SL riêng khung 4H (ATR) → 0.3 | 160.03 | 38.4% | 0.544 | 18.14 | 8.82 | 0.401 | 0.694 | -5.91 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 82.33 | 47.2% | 0.659 | 9.29 | 8.86 | 0.525 | 0.809 | -20.84 |  |

### Vòng 1215 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.07R, lời÷rủi ro 17.24

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: EMA 200 → 1 | 95.99 | 44.6% | 0.649 | 10.04 | 9.56 | 0.511 | 0.794 | -8.59 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Divergence (/100) → 9 + Ngưỡng điểm vào kèo → 77 | 116.44 | 51.1% | 0.838 | 7.51 | 15.5 | 0.664 | 1.024 | -11.55 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 95.79 | 44.7% | 0.639 | 10.07 | 9.51 | 0.436 | 0.858 | -12.89 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần R:R (/100) → 28 | 121.36 | 40.6% | 0.391 | 12.42 | 9.77 | 0.359 | 0.419 | -7.45 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 110.55 | 38.5% | 0.384 | 18.98 | 5.82 | 0.354 | 0.407 | -7.5 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Điểm vùng: POC anchored → 2 | 98.73 | 49.6% | 0.742 | 8.35 | 11.82 | 0.49 | 0.999 | -12.86 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Số TP tối đa → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 114.13 | 48.3% | 0.756 | 8.39 | 13.6 | 0.486 | 1.052 | -12.06 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm tối thiểu của vùng đặt SL → 4 | 118.94 | 51.7% | 0.82 | 7.09 | 16.78 | 0.677 | 0.974 | -10.87 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Đệm SL riêng khung 1W (ATR) → 0.3 | 113.52 | 38.5% | 0.465 | 13.99 | 8.11 | 0.494 | 0.44 | -10.75 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: HVN cố định → 0.438 + Cộng thêm ngưỡng điểm khung 1D → 5 | 119.42 | 52.1% | 0.829 | 7.48 | 15.97 | 0.631 | 1.057 | -12.16 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Đệm SL riêng khung 4H (ATR) → 0.3 | 157.02 | 36.7% | 0.534 | 19.44 | 8.08 | 0.385 | 0.688 | -9.31 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 107.09 | 51.4% | 0.724 | 8.19 | 13.08 | 0.651 | 0.805 | -11.67 |  |

### Vòng 1214 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.09R, lời÷rủi ro 17.19

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 121.04 | 52.8% | 0.841 | 7.22 | 16.76 | 0.67 | 1.031 | -10.84 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Lệnh chờ hết hạn sau (nến) → 8 | 106.61 | 44.4% | 0.599 | 11.37 | 9.38 | 0.553 | 0.64 | -12.08 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 113.54 | 51% | 0.783 | 7.5 | 15.14 | 0.636 | 0.945 | -9.82 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 120.23 | 52.1% | 0.824 | 7.33 | 16.4 | 0.694 | 0.96 | -10.84 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: HVN cố định → 0.563 | 111.73 | 50.7% | 0.787 | 7.42 | 15.06 | 0.634 | 0.949 | -11.55 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: HVN cố định → 0.438 + Cộng thêm ngưỡng điểm khung 1D → 3 | 127.7 | 49.7% | 0.846 | 7.86 | 16.25 | 0.684 | 1.06 | -9.2 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 114.65 | 46.1% | 0.695 | 10.69 | 10.72 | 0.588 | 0.796 | -12.15 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + R:R tối thiểu riêng khung 1D → 2 | 110.93 | 46.3% | 0.634 | 8.85 | 12.53 | 0.584 | 0.682 | -7.44 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: HVN anchored → 0.313 | 110.89 | 46.6% | 0.637 | 9.01 | 12.31 | 0.581 | 0.691 | -8.93 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số TP tối đa → 1 | 24.76 | 56.2% | 0.181 | 5.66 | 4.37 | 0.229 | 0.132 | -7.41 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: EMA 200 → 3 + Trọng số phần SL (/100) → 9 | 109.65 | 50% | 0.772 | 7.64 | 14.35 | 0.557 | 1.006 | -13.15 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Break mây Ichimoku → 3 | 114.68 | 50.3% | 0.73 | 8.11 | 14.14 | 0.597 | 0.88 | -11.04 |  |

### Vòng 1213 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.16R, lời÷rủi ro 17.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 114.05 | 49.3% | 0.781 | 8.25 | 13.82 | 0.593 | 0.996 | -12.57 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.63 | 53.8% | 0.185 | 6.06 | 4.89 | 0.21 | 0.161 | -8.66 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Cổng Dow → CHẶT | 89.78 | 50.9% | 0.831 | 7.11 | 12.63 | 0.451 | 1.184 | -12.84 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Trend (/100) → 19 | 118.01 | 51.8% | 0.837 | 6.93 | 17.03 | 0.647 | 1.047 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần Divergence (/100) → 9 + Đệm SL riêng khung 4H (ATR) → 0.3 | 153.48 | 38.1% | 0.522 | 18.86 | 8.14 | 0.36 | 0.694 | -8.96 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 65.44 | 39.5% | 0.336 | 14.39 | 4.55 | 0.424 | 0.233 | -13.73 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 119.11 | 52.1% | 0.839 | 7.32 | 16.27 | 0.663 | 1.031 | -10.84 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 114.14 | 51.7% | 0.776 | 7.56 | 15.1 | 0.585 | 0.999 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Elliott (/100) → 6 | 118.96 | 51.7% | 0.82 | 7.44 | 15.99 | 0.631 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 105.64 | 51.7% | 0.729 | 7.69 | 13.74 | 0.673 | 0.791 | -11.75 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1D → 2 | 44.21 | 39% | 0.194 | 15.29 | 2.89 | 0.174 | 0.207 | -11.57 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 4H (ATR) → 0.3 | 94.84 | 35.2% | 0.412 | 20.08 | 4.72 | 0.281 | 0.551 | -13.64 |  |

### Vòng 1212 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.07R, lời÷rủi ro 17.24

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Khung lớn phải tăng (trend ≥) → 0.375 | 126.47 | 49.7% | 0.827 | 7.9 | 16.01 | 0.795 | 0.862 | -12.74 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Lệnh chờ hết hạn sau (nến) → 8 | 109.99 | 49% | 0.701 | 8.61 | 12.77 | 0.528 | 0.899 | -14.72 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 115.46 | 49.1% | 0.691 | 9.02 | 12.8 | 0.498 | 0.917 | -10.9 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: BOS → 0 + Trọng số phần Entry (/100) → 28 + Trọng số phần Trend (/100) → 12 | 119.71 | 52.1% | 0.831 | 7.46 | 16.05 | 0.654 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Divergence (/100) → 12 | 40.62 | 42.2% | 0.451 | 9.3 | 4.37 | 0.35 | 0.572 | -5.18 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Fib sóng 4 → 1.56 + Số TP tối đa → 1 | 111.82 | 46.1% | 0.678 | 10.23 | 10.93 | 0.609 | 0.74 | -9.47 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Cộng điểm phân kỳ dương ẩn → 3 + Trọng số phần Trend (/100) → 19 | 121.23 | 52.4% | 0.836 | 7.05 | 17.2 | 0.66 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + R:R tối thiểu tới TP1 → 2.38 + R:R tối thiểu riêng khung 4H → 2 | 109.58 | 40.8% | 0.36 | 12.9 | 8.49 | 0.318 | 0.397 | -6.95 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: EMA 200 → 3 | 26.2 | 58.1% | 0.169 | 5.86 | 4.47 | 0.16 | 0.177 | -9.72 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Lệnh chờ hết hạn sau (nến) → 6 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 94.32 | 51.1% | 0.72 | 8.17 | 11.54 | 0.616 | 0.839 | -10.81 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Divergence (/100) → 9 | 118.94 | 51.7% | 0.82 | 7.12 | 16.71 | 0.677 | 0.974 | -10.87 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 119.66 | 51.7% | 0.837 | 7.36 | 16.26 | 0.677 | 1.013 | -12.16 |  |

### Vòng 1211 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 112.69 | 50.3% | 0.727 | 7.84 | 14.37 | 0.635 | 0.831 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Số TP tối đa → 1 | 119.42 | 50.6% | 0.775 | 8.28 | 14.42 | 0.588 | 0.995 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Lệnh chờ hết hạn sau (nến) → 8 | 111.07 | 49.4% | 0.721 | 8.17 | 13.59 | 0.532 | 0.932 | -13.75 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 19.98 | 53.2% | 0.115 | 7.89 | 2.53 | 0.161 | 0.071 | -7.98 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 130 | 50.6% | 0.844 | 7.83 | 16.6 | 0.815 | 0.878 | -13.15 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Trọng số phần Trend (/100) → 12 | 111.91 | 47.7% | 0.741 | 8.78 | 12.75 | 0.526 | 0.972 | -10.75 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Elliott (/100) → 10 | 100.19 | 48.2% | 0.721 | 8.19 | 12.23 | 0.465 | 0.996 | -13.71 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần Elliott (/100) → 10 | 118.91 | 51.4% | 0.826 | 7.24 | 16.42 | 0.677 | 0.987 | -10.84 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: EMA 21 → 1.13 + Đệm SL riêng khung 1W (ATR) → 0.3 | 92.49 | 45.1% | 0.651 | 9.58 | 9.65 | 0.431 | 0.866 | -14.82 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Mức RSI 30/70 → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 78.02 | 45.5% | 0.634 | 9.75 | 8 | 0.462 | 0.847 | -5.79 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Fib sóng 4 → 0.938 + Xác nhận khung nhỏ (A2) → W | 104.28 | 37.3% | 0.427 | 15.99 | 6.52 | 0.383 | 0.469 | -8.96 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Trọng số phần Momentum (/100) → 25 + R:R tối thiểu riêng khung 1D → 2 | 103.77 | 46.7% | 0.621 | 9.12 | 11.38 | 0.589 | 0.653 | -10.58 |  |

### Vòng 1210 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.09R, lời÷rủi ro 17.19

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + % chốt ở TP1 → 0.307 | 118.93 | 50.7% | 0.804 | 7.94 | 14.98 | 0.542 | 1.095 | -12.07 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Mức MACD → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 99.83 | 46.8% | 0.64 | 8.82 | 11.32 | 0.47 | 0.838 | -14.1 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Mức MACD → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 73.56 | 46.8% | 0.675 | 8.79 | 8.37 | 0.45 | 0.94 | -6.21 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: POC anchored → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Divergence (/100) → 9 | 103.85 | 49.3% | 0.711 | 8.07 | 12.87 | 0.537 | 0.896 | -11.46 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 119.71 | 52.1% | 0.831 | 7.42 | 16.13 | 0.654 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần Elliott (/100) → 6 | 118.43 | 50.3% | 0.795 | 7.8 | 15.18 | 0.541 | 1.074 | -12.06 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 200 → 3 + Trọng số phần Entry (/100) → 33 + Trọng số phần SL (/100) → 9 | 80.78 | 46.6% | 0.696 | 8.14 | 9.92 | 0.497 | 0.917 | -18.61 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 38.93 | 41.6% | 0.437 | 9.7 | 4.01 | 0.35 | 0.544 | -7.55 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Trọng số phần Momentum (/100) → 25 | 117.95 | 51.4% | 0.819 | 7.52 | 15.68 | 0.631 | 1.035 | -12.16 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: POC anchored → 2 + Trọng số phần Divergence (/100) → 12 | 92.29 | 49.3% | 0.669 | 8.25 | 11.19 | 0.534 | 0.807 | -9.05 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 121.04 | 52.8% | 0.841 | 7.32 | 16.54 | 0.67 | 1.031 | -10.84 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 111.87 | 50.7% | 0.823 | 7.52 | 14.88 | 0.571 | 1.097 | -12.19 |  |

### Vòng 1209 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: POC anchored → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 66.03 | 44.4% | 0.496 | 10.46 | 6.31 | 0.352 | 0.684 | -13.25 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: POC anchored → 2 + Cộng điểm phân kỳ dương ẩn → 2.25 | 93.05 | 48.6% | 0.674 | 8.63 | 10.78 | 0.497 | 0.867 | -10.06 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Xác nhận khung nhỏ (A2) → W | 133.45 | 40.8% | 0.504 | 13.87 | 9.62 | 0.488 | 0.517 | -6.69 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 21 → 0.875 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 98.09 | 45.1% | 0.598 | 11.01 | 8.91 | 0.633 | 0.567 | -10.06 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 101.23 | 48% | 0.675 | 9.29 | 10.9 | 0.482 | 0.901 | -10.59 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: POC anchored → 4 | 118.53 | 51% | 0.795 | 7.97 | 14.87 | 0.628 | 0.96 | -6.11 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm vào kèo → 77 + Coin phải mạnh hơn BTC trong N ngày → 14 | 116.21 | 37.1% | 0.526 | 17.61 | 6.6 | 0.489 | 0.56 | -18.46 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 53.07 | 31.5% | 0.288 | 21.98 | 2.41 | 0.119 | 0.466 | 3.71 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Biên mây Ichimoku → 1.35 | 116.28 | 50% | 0.786 | 7.72 | 15.06 | 0.608 | 0.984 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: HVN cố định → 0.563 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm tối thiểu của vùng đặt SL → 4 | 102.27 | 47.6% | 0.705 | 8.26 | 12.38 | 0.542 | 0.886 | -10.87 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần R:R (/100) → 33 + Cộng thêm ngưỡng điểm khung 1W → 2 | 119.67 | 51.7% | 0.825 | 7.23 | 16.55 | 0.677 | 0.984 | -12.57 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Trọng số phần SL (/100) → 7 + Điểm vùng: Fib sóng 4 → 0.938 | 101.69 | 50% | 0.807 | 8.04 | 12.65 | 0.544 | 1.087 | -12.86 |  |

### Vòng 1208 — ngẫu nhiên nhiều thông số · mốc: tổng 121.88R, win 53.1%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Fib sóng 4 → 0.938 | 105.06 | 45.2% | 0.625 | 8.87 | 11.84 | 0.581 | 0.666 | -10.48 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Cộng điểm phân kỳ dương ẩn → 2.25 | 115.81 | 51.7% | 0.799 | 7.73 | 14.98 | 0.577 | 1.057 | -7.88 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm tối thiểu của vùng đặt SL → 2 | 113.18 | 52.4% | 0.791 | 7.67 | 14.76 | 0.636 | 0.958 | -11.13 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 121.79 | 53.1% | 0.852 | 7.22 | 16.87 | 0.67 | 1.057 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + R:R tối thiểu riêng khung 4H → 2 | 121.28 | 40.5% | 0.39 | 12.19 | 9.95 | 0.359 | 0.416 | -8.67 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: POC anchored → 4 + Cộng thêm ngưỡng điểm khung 1D → 3 | 34.54 | 40.4% | 0.388 | 10.41 | 3.32 | 0.338 | 0.45 | -7.55 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + % chốt ở TP1 → 0.307 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 112.78 | 48.2% | 0.8 | 8.22 | 13.72 | 0.615 | 1.004 | -10.41 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: HVN anchored → 0.188 | 129.91 | 50.6% | 0.844 | 7.65 | 16.98 | 0.814 | 0.878 | -12.74 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: HVN cố định → 0.438 + Điểm tối thiểu của vùng đặt SL → 4 | 92.8 | 44.5% | 0.677 | 9.39 | 9.88 | 0.533 | 0.842 | -7.39 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1D → 5 | 161.16 | 38.8% | 0.548 | 18 | 8.95 | 0.409 | 0.693 | -6.08 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 69.75 | 44.5% | 0.634 | 9.22 | 7.57 | 0.357 | 0.932 | -6.79 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 | 159.93 | 38.1% | 0.521 | 18.24 | 8.77 | 0.484 | 0.558 | -3.63 |  |
