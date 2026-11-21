# Tối ưu tự động (chạy liên tục) — vòng 996

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 11607 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 45.8% | 98.21R | 0.592 | 6.44R | 10.19R | 9.64 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 145 | 51% | 111.68R | 0.77 | 5.09R | 8.33R | 13.41 | 27 | 18.5% | -8.9R | -0.33 | 10.54R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 27 | 48.1% | 17.16R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.77R | 2 | 0% | -2.3R |
| 4H | 108 | 51.9% | 86.76R | 20 | 25% | -2.83R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 45.8% | 98.21R | 10.19R | 9.64 | 30 | 13.3% | -11.98R |
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

### Vòng 996 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.33R, lời÷rủi ro 13.41

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 57.77 | 42.7% | 0.525 | 11.24 | 5.14 | 0.256 | 0.784 | 1.5 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 100.01 | 49.3% | 0.667 | 8.77 | 11.4 | 0.475 | 0.899 | -8.9 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Cổng Dow → CHẶT | 90.63 | 39.5% | 0.512 | 15.31 | 5.92 | 0.311 | 0.686 | -9.65 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: BOS → 3 + Trọng số phần Entry (/100) → 28 | 109.04 | 50% | 0.747 | 8.23 | 13.25 | 0.542 | 0.982 | -8.72 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Đệm SL riêng khung 1D (ATR) → 0.3 | 104.12 | 45% | 0.578 | 11.65 | 8.94 | 0.53 | 0.623 | -5.89 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm tối thiểu của vùng đặt SL → 4 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 107.14 | 49% | 0.739 | 8.5 | 12.6 | 0.483 | 1.006 | -7.46 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Xác nhận khung nhỏ (A2) → W | 92.36 | 38% | 0.358 | 16.92 | 5.46 | 0.401 | 0.315 | -4.07 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: BOS → 3 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Momentum (/100) → 21 | 102.99 | 44.9% | 0.585 | 9.77 | 10.54 | 0.554 | 0.615 | -10.22 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + R:R tối thiểu tới TP1 → 2.38 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: MACD cắt lên Signal → 0.563 | 93.07 | 45.6% | 0.551 | 9.49 | 9.81 | 0.445 | 0.655 | -12.36 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC anchored → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 51.24 | 39.7% | 0.423 | 13.05 | 3.93 | 0.243 | 0.613 | -5.87 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 104.72 | 50.3% | 0.712 | 8.41 | 12.45 | 0.582 | 0.845 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cộng thêm ngưỡng điểm khung 4H → -1 | 99.83 | 48.7% | 0.657 | 9.6 | 10.4 | 0.465 | 0.887 | -6.32 |  |

### Vòng 995 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.28R, lời÷rủi ro 13.49

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Cổng Dow → CHẶT + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 67.26 | 50% | 0.58 | 7.99 | 8.42 | 0.317 | 0.801 | -9.48 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Break mây Ichimoku → 1 | 100.74 | 48% | 0.672 | 9.23 | 10.91 | 0.495 | 0.862 | -8.97 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: BOS → 3 + R:R tối thiểu riêng khung 4H → 2 | 117.45 | 41.2% | 0.381 | 12.17 | 9.65 | 0.327 | 0.428 | -7.45 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Trọng số phần SL (/100) → 9 + Điểm vùng: Biên mây Ichimoku → 1.35 + SL tối đa (% Entry) → 0.425 | 106.89 | 49.3% | 0.722 | 9.05 | 11.81 | 0.514 | 0.961 | -7.88 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: HVN cố định → 0.563 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 113.6 | 50% | 0.768 | 8.46 | 13.43 | 0.521 | 1.05 | -8.77 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần R:R (/100) → 33 | 81.54 | 48.8% | 0.674 | 8.84 | 9.22 | 0.567 | 0.794 | -15.37 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 | 98.1 | 34.8% | 0.359 | 22.24 | 4.41 | 0.199 | 0.503 | -9.46 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: BOS → 3 + SL tối đa (% Entry) → 0.425 | 112.73 | 50% | 0.783 | 8.24 | 13.68 | 0.612 | 0.98 | -12.16 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Coin phải mạnh hơn BTC trong N ngày → 14 | 73.59 | 45% | 0.675 | 9.02 | 8.16 | 0.525 | 0.866 | -14.86 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 | 63.03 | 39.3% | 0.354 | 14.86 | 4.24 | 0.338 | 0.367 | -7.15 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 200 → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 95.52 | 48.7% | 0.612 | 9.5 | 10.05 | 0.534 | 0.704 | -5.03 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + R:R tối thiểu tới TP1 → 2.38 + Cổng Dow → TẮT + Điểm vùng: HVN anchored → 0.313 | 106.41 | 40.8% | 0.477 | 12.59 | 8.45 | 0.449 | 0.504 | -23.01 |  |

### Vòng 994 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.24R, lời÷rủi ro 13.55

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 112.48 | 41.3% | 0.363 | 12.34 | 9.12 | 0.316 | 0.403 | -8.44 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 111.68 | 51% | 0.77 | 8.24 | 13.55 | 0.556 | 1.02 | -8.9 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: POC volume profile cố định → 0.813 | 86.91 | 44.1% | 0.54 | 10.1 | 8.6 | 0.528 | 0.552 | -5.28 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Đệm SL riêng khung 1W (ATR) → 0.3 | 77.22 | 43% | 0.572 | 10.91 | 7.08 | 0.325 | 0.822 | -9.42 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Cộng thêm ngưỡng điểm khung 1D → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Số TP tối đa → 2 | 49.64 | 41.9% | 0.365 | 12.93 | 3.84 | 0.203 | 0.509 | -10.85 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 50 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Entry (/100) → 28 | 72.48 | 34.7% | 0.27 | 20.9 | 3.47 | 0.309 | 0.231 | -3.69 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Trọng số phần Trend (/100) → 12 | 112.17 | 51% | 0.784 | 7.96 | 14.09 | 0.596 | 0.998 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: EMA 50 → 0.75 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 107.57 | 48.5% | 0.791 | 8.79 | 12.24 | 0.561 | 1.065 | -8.15 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: MACD cắt lên Signal → 0.563 | 87.24 | 49.6% | 0.746 | 8.23 | 10.6 | 0.56 | 0.969 | -15.37 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 70.96 | 44.7% | 0.622 | 9.79 | 7.25 | 0.426 | 0.841 | -4.77 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần R:R (/100) → 33 | 31.31 | 57.6% | 0.198 | 5.6 | 5.59 | 0.226 | 0.171 | -8.19 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 106.35 | 47.8% | 0.669 | 9.63 | 11.04 | 0.699 | 0.633 | -8.65 |  |

### Vòng 993 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.15R, lời÷rủi ro 13.70

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Trọng số phần Trend (/100) → 12 + % chốt ở TP1 → 0.307 | 110.69 | 50% | 0.748 | 8.26 | 13.4 | 0.536 | 0.997 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm tối thiểu của vùng đặt SL → 2 | 103.89 | 49.7% | 0.707 | 8.87 | 11.71 | 0.478 | 0.945 | -8.77 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Cộng thêm ngưỡng điểm khung 1D → 5 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức MACD → 1.13 | 119.95 | 41% | 0.384 | 12.13 | 9.89 | 0.324 | 0.439 | -7.44 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Break mây Ichimoku → 1 | 102.15 | 49% | 0.695 | 8.86 | 11.53 | 0.511 | 0.898 | -8.97 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Trọng số phần Elliott (/100) → 10 | 109.96 | 50% | 0.764 | 8.18 | 13.44 | 0.56 | 0.998 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 72.16 | 46.3% | 0.668 | 9.04 | 7.98 | 0.422 | 0.943 | -4.43 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 72.55 | 44.3% | 0.631 | 10.14 | 7.15 | 0.393 | 0.909 | -4.21 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: POC anchored → 4 + R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Divergence (/100) → 12 | 95.04 | 50% | 0.743 | 8.57 | 11.09 | 0.473 | 1.003 | -4.03 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: EMA 21 → 1.13 | 94.73 | 43.4% | 0.548 | 9.65 | 9.82 | 0.6 | 0.499 | -11.92 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + % chốt ở TP1 → 0.287 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 82.99 | 49.6% | 0.686 | 8.62 | 9.63 | 0.538 | 0.864 | -15.47 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Khung lớn phải tăng (trend ≥) → 0.425 + SL tối đa (% Entry) → 0.425 | 112.59 | 40.3% | 0.372 | 12.93 | 8.71 | 0.304 | 0.43 | -5.58 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Biên mây Ichimoku → 1.05 | 117.99 | 43.3% | 0.562 | 12 | 9.83 | 0.501 | 0.624 | -20.49 |  |

### Vòng 992 — ngẫu nhiên nhiều thông số · mốc: tổng 109.09R, win 51%, rủi ro tụt vốn 8.23R, lời÷rủi ro 13.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: BOS → 3 | 109.07 | 51% | 0.763 | 8.46 | 12.89 | 0.557 | 1.01 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: BOS → 3 | 109.09 | 51% | 0.763 | 8.23 | 13.26 | 0.556 | 1.011 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + R:R tối thiểu tới TP1 → 2.38 | 92.09 | 45% | 0.512 | 10.33 | 8.91 | 0.405 | 0.616 | -9.96 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: POC anchored → 2 + Trọng số phần Divergence (/100) → 12 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 84.36 | 47.7% | 0.559 | 9.92 | 8.5 | 0.488 | 0.638 | -8.12 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: POC anchored → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 + Khung lớn phải tăng (trend ≥) → 0.375 | 99.28 | 46.1% | 0.645 | 9.88 | 10.05 | 0.656 | 0.632 | -9.48 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 26.72 | 57.5% | 0.175 | 6.12 | 4.37 | 0.2 | 0.151 | -9.28 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần SL (/100) → 7 + Số TP tối đa → 2 | 96.35 | 47.5% | 0.683 | 8.66 | 11.13 | 0.563 | 0.824 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: BOS → 1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 108.08 | 50.7% | 0.751 | 8.32 | 12.99 | 0.536 | 1.011 | -8.9 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 69.11 | 45.4% | 0.64 | 9.09 | 7.6 | 0.422 | 0.883 | -4.43 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 96.03 | 48% | 0.632 | 9.75 | 9.85 | 0.44 | 0.875 | -6.32 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 4H (ATR) → 0.3 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Mức RSI 30/70 → 1.13 | 113.8 | 38.8% | 0.491 | 16.99 | 6.7 | 0.309 | 0.666 | -18.42 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + % chốt ở TP1 → 0.307 | 113.2 | 48.3% | 0.75 | 8.94 | 12.66 | 0.679 | 0.836 | -9.48 |  |

### Vòng 991 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.68R, lời÷rủi ro 12.87

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 4H → 2 | 113.37 | 51.8% | 0.804 | 7.53 | 15.06 | 0.628 | 0.998 | -8.9 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Cộng thêm ngưỡng điểm khung 4H → -1 | 111.68 | 51% | 0.77 | 8.68 | 12.87 | 0.556 | 1.02 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: MACD cắt lên Signal → 0.438 + Cộng thêm ngưỡng điểm khung 4H → 2 | 101 | 48% | 0.673 | 9.69 | 10.42 | 0.471 | 0.911 | -6.32 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Mức RSI 30/70 → 1.13 + R:R tối thiểu riêng khung 1W → 2 | 104.72 | 50.3% | 0.712 | 8.45 | 12.39 | 0.582 | 0.845 | -8.9 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 129.96 | 43.4% | 0.593 | 11.7 | 11.11 | 0.493 | 0.699 | -21.69 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 39.61 | 40.4% | 0.445 | 10.09 | 3.93 | 0.375 | 0.53 | -7.55 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 95.62 | 49.6% | 0.719 | 8.3 | 11.52 | 0.571 | 0.889 | -8.53 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 143.8 | 38.4% | 0.489 | 19.3 | 7.45 | 0.388 | 0.59 | -10.03 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: POC anchored → 4 | 59.93 | 41% | 0.372 | 13.19 | 4.54 | 0.318 | 0.423 | -7.01 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL riêng khung 1D (ATR) → 0.3 | 132.82 | 36.7% | 0.447 | 21.26 | 6.25 | 0.398 | 0.493 | -8.84 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần Divergence (/100) → 9 | 83.5 | 46.8% | 0.542 | 10.5 | 7.95 | 0.509 | 0.579 | -6.08 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần SL (/100) → 7 | 35.66 | 39.8% | 0.405 | 10.25 | 3.48 | 0.311 | 0.524 | -11.35 |  |

### Vòng 990 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.26R, lời÷rủi ro 13.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: HVN anchored → 0.188 + Trọng số phần Momentum (/100) → 21 | 111.68 | 51% | 0.77 | 8.26 | 13.52 | 0.556 | 1.02 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Elliott (/100) → 10 | 110.97 | 50.3% | 0.776 | 8.22 | 13.5 | 0.58 | 0.998 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Khung lớn phải tăng (trend ≥) → 0.425 | 95 | 48% | 0.642 | 9.35 | 10.16 | 0.418 | 0.892 | -8.94 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Trọng số phần Momentum (/100) → 25 + Đệm SL riêng khung 1D (ATR) → 0.3 | 106.68 | 45.5% | 0.647 | 11.13 | 9.58 | 0.628 | 0.664 | -5.59 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trọng số phần R:R (/100) → 33 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: BOS → 3 | 105.65 | 49.3% | 0.704 | 8.89 | 11.88 | 0.514 | 0.921 | -8.55 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần R:R (/100) → 28 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: HVN anchored → 0.188 | 100.38 | 49.7% | 0.692 | 8.63 | 11.63 | 0.538 | 0.857 | -9.73 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Biên mây Ichimoku → 1.05 | 103.17 | 50.7% | 0.707 | 8.05 | 12.82 | 0.536 | 0.897 | -9.73 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: EMA 50 → 1.13 + Trọng số phần Divergence (/100) → 9 | 110.65 | 50% | 0.768 | 8.1 | 13.66 | 0.576 | 0.989 | -7.88 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 124.87 | 43.8% | 0.553 | 11.07 | 11.28 | 0.639 | 0.465 | -14.64 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần SL (/100) → 7 | 104.93 | 49.7% | 0.734 | 8.32 | 12.61 | 0.564 | 0.921 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần SL (/100) → 9 | 36.12 | 39.1% | 0.415 | 10.47 | 3.45 | 0.327 | 0.524 | -7.55 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Momentum (/100) → 25 + R:R tối thiểu riêng khung 4H → 2 | 105.97 | 40.4% | 0.351 | 12.66 | 8.37 | 0.299 | 0.394 | -6.96 |  |

### Vòng 989 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.68R, lời÷rủi ro 12.87

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 135.97 | 38.1% | 0.504 | 18.41 | 7.39 | 0.479 | 0.53 | -20.05 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Cộng điểm phân kỳ dương ẩn → 2.25 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: POC volume profile cố định → 0.688 | 112 | 49% | 0.762 | 8.16 | 13.73 | 0.573 | 0.988 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Ngưỡng điểm vào kèo → 77 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Biên mây Ichimoku → 1.05 | 98.52 | 49.3% | 0.694 | 8.39 | 11.74 | 0.576 | 0.818 | -9.73 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: HVN cố định → 0.563 | 110.89 | 51.4% | 0.792 | 7.9 | 14.04 | 0.545 | 1.077 | -8.93 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Số TP tối đa → 2 + Điểm vùng: EMA 200 → 3 | 102.89 | 49.3% | 0.715 | 8.63 | 11.92 | 0.481 | 0.968 | -8.88 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Fib sóng 4 → 0.938 + Lệnh chờ hết hạn sau (nến) → 8 | 110.61 | 50% | 0.718 | 8.4 | 13.17 | 0.564 | 0.894 | -10.49 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 4H → 2 | 131.31 | 43.4% | 0.543 | 12.56 | 10.45 | 0.594 | 0.488 | -7.84 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: POC anchored → 4 + Trọng số phần SL (/100) → 9 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 104.83 | 48.7% | 0.672 | 9.35 | 11.21 | 0.506 | 0.865 | -0.38 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 + SL tối đa (% Entry) → 0.425 + Trọng số phần SL (/100) → 9 | 99.46 | 48.3% | 0.668 | 9.12 | 10.91 | 0.558 | 0.776 | -7.88 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: POC anchored → 2 | 98.85 | 47.7% | 0.655 | 9.45 | 10.46 | 0.517 | 0.802 | -7.61 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần SL (/100) → 7 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 107.01 | 44.2% | 0.728 | 9.85 | 10.86 | 0.515 | 0.976 | -8.95 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cộng thêm ngưỡng điểm khung 1W → -1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 33.02 | 59.9% | 0.149 | 6.94 | 4.76 | 0.223 | 0.077 | -5.47 |  |

### Vòng 988 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.33R, lời÷rủi ro 13.41

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Break mây Ichimoku → 1 | 102.15 | 49% | 0.695 | 8.75 | 11.67 | 0.511 | 0.898 | -9.14 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 103.97 | 50% | 0.702 | 8.63 | 12.05 | 0.582 | 0.823 | -7.58 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: MACD cắt lên Signal → 0.563 | 107.49 | 51% | 0.721 | 8.34 | 12.89 | 0.52 | 0.962 | -8.9 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: BOS → 3 + Điểm vùng: Mức MACD → 1.13 | 94.66 | 49.3% | 0.648 | 9.14 | 10.36 | 0.552 | 0.762 | -8.7 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: BOS → 1 | 105.25 | 50.3% | 0.706 | 8.65 | 12.17 | 0.556 | 0.872 | -7.58 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Trend (/100) → 19 + SL tối đa (% Entry) → 0.425 | 109.45 | 50% | 0.74 | 8.45 | 12.95 | 0.557 | 0.943 | -7.58 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cộng thêm ngưỡng điểm khung 4H → -1 | 59.45 | 44.6% | 0.457 | 10.33 | 5.76 | 0.409 | 0.51 | -8.72 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + R:R tối thiểu riêng khung 1W → 2 | 88.65 | 44.4% | 0.587 | 10.94 | 8.1 | 0.443 | 0.722 | -10.83 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Mức RSI 30/70 → 1.13 + Đệm SL riêng khung 1W (ATR) → 0.3 | 92.04 | 45.7% | 0.667 | 9.84 | 9.35 | 0.359 | 0.957 | -9.7 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Fib sóng 4 → 0.938 | 110.94 | 51% | 0.776 | 8.23 | 13.48 | 0.561 | 1.02 | -7.88 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 110 | 47.7% | 0.71 | 9.23 | 11.92 | 0.504 | 0.947 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 1W → -1 | 103.47 | 44.6% | 0.591 | 9.81 | 10.55 | 0.554 | 0.627 | -7.16 |  |

### Vòng 987 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.98R, lời÷rủi ro 14.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Đệm SL riêng khung 1W (ATR) → 0.3 | 91.53 | 46.2% | 0.631 | 10.14 | 9.03 | 0.398 | 0.867 | -8.62 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 98.41 | 47.9% | 0.693 | 8.68 | 11.34 | 0.486 | 0.9 | -10.8 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: MACD cắt lên Signal → 0.438 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 106.45 | 46.8% | 0.615 | 10.5 | 10.14 | 0.468 | 0.768 | -6.13 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Trọng số phần R:R (/100) → 28 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: HVN cố định → 0.563 | 66.05 | 44.8% | 0.528 | 9.8 | 6.74 | 0.403 | 0.664 | -10.31 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + % chốt ở TP1 → 0.307 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 122.09 | 50% | 0.783 | 8.38 | 14.57 | 0.742 | 0.83 | -9.48 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Entry (/100) → 33 | 147.62 | 38.7% | 0.514 | 18.59 | 7.94 | 0.349 | 0.679 | -8.15 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 101.34 | 45.7% | 0.724 | 9.1 | 11.14 | 0.479 | 0.969 | -14.04 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cổng Dow → TẮT | 88.67 | 38.5% | 0.551 | 13.04 | 6.8 | 0.401 | 0.702 | -18.34 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: POC volume profile cố định → 0.688 | 124.66 | 45% | 0.544 | 11.32 | 11.01 | 0.575 | 0.512 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: EMA 50 → 0.75 | 108.13 | 51% | 0.736 | 7.93 | 13.64 | 0.534 | 0.951 | -8.9 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: BOS → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 | 30.2 | 58.3% | 0.194 | 5.56 | 5.43 | 0.223 | 0.167 | -9.27 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Mức RSI 30/70 → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 3 | 115.87 | 50.9% | 0.711 | 8.45 | 13.71 | 0.538 | 0.919 | -8.9 |  |
