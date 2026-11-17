# Tối ưu tự động (chạy liên tục) — vòng 603

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 6891 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.3% | 93.89R | 0.58 | 5.74R | 9.6R | 9.78 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 143 | 53.1% | 113.69R | 0.795 | 6.15R | 7.51R | 15.14 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 105 | 54.3% | 86.53R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.3% | 93.89R | 9.6R | 9.78 | 32 | 12.5% | -14.03R |
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

### Vòng 603 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.51R, lời÷rủi ro 15.14

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Số TP tối đa → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 110.53 | 52.1% | 0.79 | 7.93 | 13.94 | 0.604 | 1.004 | -10.95 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 87.38 | 45.3% | 0.59 | 9.78 | 8.93 | 0.444 | 0.753 | -3.98 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 21 → 1.13 | 97.87 | 50.7% | 0.661 | 8.38 | 11.68 | 0.624 | 0.703 | -11.09 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 112.22 | 52.4% | 0.785 | 7.59 | 14.79 | 0.635 | 0.96 | -9.66 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Trọng số phần Momentum (/100) → 21 | 100.25 | 52.1% | 0.706 | 8.24 | 12.17 | 0.634 | 0.789 | -8.88 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 83.86 | 45.2% | 0.534 | 9.76 | 8.59 | 0.531 | 0.537 | -11.23 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: MACD cắt lên Signal → 0.438 | 79.9 | 43.6% | 0.49 | 12.25 | 6.52 | 0.38 | 0.63 | -6.89 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + R:R tối thiểu riêng khung 1D → 2 | 103.1 | 45.7% | 0.596 | 9.39 | 10.98 | 0.591 | 0.6 | -6.9 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + % chốt ở TP1 → 0.307 | 112.16 | 51.6% | 0.724 | 8.07 | 13.9 | 0.608 | 0.872 | -4.69 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: EMA 200 → 1 + Trọng số phần Elliott (/100) → 10 | 63.78 | 45.5% | 0.58 | 9.43 | 6.76 | 0.444 | 0.737 | -2.99 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Số TP tối đa → 2 + R:R tối thiểu riêng khung 1W → 2 | 96.45 | 52.1% | 0.67 | 7.97 | 12.1 | 0.694 | 0.646 | -10.27 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 108.84 | 46.3% | 0.664 | 10.4 | 10.47 | 0.663 | 0.665 | -6.27 |  |

### Vòng 602 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.22

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Mức MACD → 1.13 | 107.58 | 50% | 0.747 | 8.04 | 13.38 | 0.575 | 0.95 | -9.66 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Đệm SL riêng khung 4H (ATR) → 0.3 | 155.9 | 37.8% | 0.53 | 18.67 | 8.35 | 0.361 | 0.711 | -10.05 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 72.43 | 46.5% | 0.561 | 9.64 | 7.51 | 0.493 | 0.635 | -8.41 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Trọng số phần Elliott (/100) → 10 | 113.06 | 52.1% | 0.796 | 7.38 | 15.32 | 0.645 | 0.97 | -9.66 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 70.01 | 45.7% | 0.543 | 9.8 | 7.14 | 0.54 | 0.546 | -8.67 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 99.89 | 41% | 0.512 | 12.99 | 7.69 | 0.373 | 0.665 | -22.15 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: HVN cố định → 0.438 | 94.31 | 50.8% | 0.714 | 7.87 | 11.98 | 0.587 | 0.867 | -8.27 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 109.73 | 50.3% | 0.746 | 7.94 | 13.82 | 0.649 | 0.851 | -8.17 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Khung lớn phải tăng (trend ≥) → 0.425 | 108.28 | 52.6% | 0.79 | 7.3 | 14.83 | 0.59 | 1.012 | -9.69 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: MACD cắt lên Signal → 0.563 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Break mây Ichimoku → 1 | 100.27 | 49.3% | 0.706 | 8.38 | 11.97 | 0.536 | 0.902 | -9.2 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Divergence (/100) → 9 | 90.28 | 44.9% | 0.541 | 11.5 | 7.85 | 0.577 | 0.508 | -5.46 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: POC anchored → 2 | 91.24 | 43.9% | 0.534 | 10.17 | 8.97 | 0.558 | 0.512 | -5.86 |  |

### Vòng 601 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.42R, lời÷rủi ro 15.32

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Lệnh chờ hết hạn sau (nến) → 6 | 91.14 | 50% | 0.712 | 7.84 | 11.63 | 0.552 | 0.905 | -8.3 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: BOS → 3 | 101.62 | 47.9% | 0.716 | 8.9 | 11.42 | 0.714 | 0.717 | -8.85 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần R:R (/100) → 33 | 102.71 | 51.7% | 0.708 | 7.87 | 13.05 | 0.589 | 0.84 | -11.78 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: EMA 50 → 1.13 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Mức MACD → 0.875 | 111.6 | 51.7% | 0.759 | 8.28 | 13.48 | 0.62 | 0.93 | -8.64 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần SL (/100) → 7 | 38.01 | 40.9% | 0.432 | 10.09 | 3.77 | 0.372 | 0.504 | -8.58 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần SL (/100) → 9 | 78.42 | 45.1% | 0.484 | 10.85 | 7.23 | 0.4 | 0.566 | -9.82 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: Mức RSI 30/70 → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 5 | 114.52 | 51.3% | 0.725 | 8.33 | 13.75 | 0.571 | 0.914 | -9.66 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần Elliott (/100) → 10 + Trọng số phần Divergence (/100) → 12 + Số TP tối đa → 2 | 112.05 | 51.7% | 0.784 | 7.89 | 14.2 | 0.645 | 0.941 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 117.58 | 48.7% | 0.763 | 8.56 | 13.74 | 0.736 | 0.797 | -9.22 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cộng điểm phân kỳ dương ẩn → 2.25 | 113.71 | 51.3% | 0.72 | 8.76 | 12.98 | 0.561 | 0.914 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: BOS → 3 | 95.97 | 50.7% | 0.657 | 8.23 | 11.66 | 0.644 | 0.672 | -13.81 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần Elliott (/100) → 10 | 96.91 | 51% | 0.678 | 8.22 | 11.79 | 0.639 | 0.722 | -8.84 |  |

### Vòng 600 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.59R, lời÷rủi ro 14.98

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: EMA 50 → 1.13 | 109.33 | 50.7% | 0.759 | 7.87 | 13.89 | 0.597 | 0.951 | -8.64 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + R:R tối thiểu tới TP1 → 2.38 | 91.63 | 46.8% | 0.587 | 8.77 | 10.45 | 0.5 | 0.671 | -11.23 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 50 → 0.75 | 110.22 | 52.8% | 0.776 | 7.57 | 14.56 | 0.621 | 0.945 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 95.84 | 50.8% | 0.786 | 7.97 | 12.03 | 0.553 | 1.034 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 121.94 | 50% | 0.792 | 8.52 | 14.31 | 0.757 | 0.834 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Cộng điểm phân kỳ dương ẩn → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 | 101.78 | 48.8% | 0.628 | 9.39 | 10.84 | 0.496 | 0.781 | -9.4 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 1W (ATR) → 0.3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 12.4 | 49.4% | 0.08 | 10.18 | 1.22 | 0.121 | 0.047 | -14.11 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Trọng số phần Trend (/100) → 19 + Trọng số phần R:R (/100) → 33 | 101.29 | 49.7% | 0.699 | 8.23 | 12.31 | 0.512 | 0.905 | -9.62 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 89.52 | 43.2% | 0.578 | 11.66 | 7.68 | 0.51 | 0.633 | -6.38 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 82.48 | 40.4% | 0.406 | 13.07 | 6.31 | 0.427 | 0.381 | -13.46 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 + Số TP tối đa → 2 | 79.7 | 43.2% | 0.415 | 12.07 | 6.6 | 0.51 | 0.314 | -16.33 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Cộng thêm ngưỡng điểm khung 1W → 2 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Biên mây Ichimoku → 1.05 | 85.91 | 50.4% | 0.734 | 8.2 | 10.48 | 0.552 | 0.927 | -10.63 |  |

### Vòng 599 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 15.24

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + R:R tối thiểu riêng khung 1W → 2 | 98.84 | 50.3% | 0.691 | 8.3 | 11.91 | 0.582 | 0.802 | -10.69 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Elliott (/100) → 10 | 118.93 | 49.3% | 0.782 | 8.4 | 14.16 | 0.785 | 0.78 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: EMA 200 → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 92.88 | 47.1% | 0.599 | 9.24 | 10.05 | 0.45 | 0.763 | -10.47 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Cổng Dow → TẮT + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 121.93 | 42.4% | 0.528 | 13.15 | 9.27 | 0.512 | 0.545 | -13.65 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Break mây Ichimoku → 3 | 99.87 | 47.8% | 0.628 | 9.46 | 10.56 | 0.498 | 0.778 | -8.38 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Cộng điểm phân kỳ dương ẩn → 2.25 + R:R tối thiểu tới TP1 → 2.38 | 91.69 | 46.8% | 0.588 | 8.95 | 10.24 | 0.504 | 0.668 | -11.23 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: EMA 50 → 1.13 | 77.15 | 48.4% | 0.603 | 9.51 | 8.11 | 0.452 | 0.79 | -16.03 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: POC volume profile cố định → 0.688 | 113.07 | 50.7% | 0.774 | 8.14 | 13.89 | 0.678 | 0.873 | -11.02 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Momentum (/100) → 21 | 111.78 | 52.1% | 0.766 | 7.89 | 14.17 | 0.635 | 0.912 | -9.66 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng điểm phân kỳ dương ẩn → 2.25 + Trọng số phần SL (/100) → 9 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 95.33 | 50.3% | 0.667 | 8.42 | 11.32 | 0.616 | 0.725 | -8.7 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: HVN cố định → 0.563 + Cộng thêm ngưỡng điểm khung 4H → -1 | 112.57 | 52.8% | 0.782 | 7.49 | 15.03 | 0.614 | 0.98 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Divergence (/100) → 12 | 28.99 | 58.3% | 0.186 | 5.99 | 4.84 | 0.219 | 0.153 | -11.38 |  |

### Vòng 598 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.51R, lời÷rủi ro 15.14

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần SL (/100) → 7 | 38.72 | 41.2% | 0.456 | 9.6 | 4.03 | 0.357 | 0.578 | -8.58 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + R:R tối thiểu tới TP1 → 2.63 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: POC volume profile cố định → 0.688 | 95.2 | 50% | 0.768 | 7.98 | 11.93 | 0.534 | 1.017 | -10.63 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 110.47 | 52.5% | 0.795 | 7.48 | 14.77 | 0.621 | 0.993 | -10.95 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 22.76 | 41.7% | 0.474 | 7.92 | 2.87 | 0.29 | 0.643 | -2.78 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: POC volume profile cố định → 0.688 + Cộng thêm ngưỡng điểm khung 1W → 2 | 110.96 | 48.4% | 0.689 | 8.71 | 12.74 | 0.591 | 0.808 | -6.74 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Trọng số phần Momentum (/100) → 25 | 111.97 | 52.1% | 0.789 | 7.33 | 15.28 | 0.64 | 0.96 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 96.48 | 51.4% | 0.661 | 8.42 | 11.46 | 0.637 | 0.688 | -10.86 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Ngưỡng điểm vào kèo → 74 | 110.11 | 51.4% | 0.754 | 7.74 | 14.23 | 0.593 | 0.939 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: POC anchored → 2 | 99.19 | 49.7% | 0.666 | 8.22 | 12.07 | 0.551 | 0.788 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Cộng điểm phân kỳ dương ẩn → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 91.46 | 47% | 0.683 | 9.09 | 10.06 | 0.436 | 0.901 | -10.7 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Mức MACD → 1.13 | 104.29 | 49.7% | 0.7 | 8.25 | 12.64 | 0.602 | 0.804 | -12.81 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Trọng số phần Divergence (/100) → 9 + Coin phải mạnh hơn BTC trong N ngày → 14 | 82.62 | 50.4% | 0.718 | 8.04 | 10.28 | 0.552 | 0.92 | -16.13 |  |

### Vòng 597 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.54R, lời÷rủi ro 15.08

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Số TP tối đa → 2 + R:R tối thiểu riêng khung 1D → 2 | 96.87 | 45.5% | 0.587 | 8.93 | 10.85 | 0.549 | 0.623 | -12.84 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cổng Dow → CHẶT | 64.09 | 50.5% | 0.675 | 7.54 | 8.5 | 0.279 | 1.062 | -12.22 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Đệm SL riêng khung 1W (ATR) → 0.3 | 102.24 | 45.1% | 0.623 | 10.6 | 9.65 | 0.567 | 0.689 | -14.09 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần SL (/100) → 9 | 112.22 | 52.4% | 0.785 | 7.59 | 14.79 | 0.635 | 0.96 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 110.5 | 52.1% | 0.778 | 7.48 | 14.77 | 0.616 | 0.966 | -9.48 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: BOS → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Fib sóng 4 → 0.938 | 86.14 | 43.9% | 0.582 | 10.33 | 8.34 | 0.377 | 0.844 | -8.95 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: HVN cố định → 0.438 | 24.13 | 56.3% | 0.168 | 6.23 | 3.87 | 0.216 | 0.118 | -10.46 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Mức MACD → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 103.79 | 40.9% | 0.343 | 12.86 | 8.07 | 0.329 | 0.355 | -10.52 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 70.31 | 47.2% | 0.651 | 8.5 | 8.27 | 0.448 | 0.878 | -6.48 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 110.42 | 52.4% | 0.772 | 7.68 | 14.38 | 0.604 | 0.963 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Mức RSI 30/70 → 1.13 | 98.82 | 49.7% | 0.663 | 9.45 | 10.46 | 0.508 | 0.848 | -7.08 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng thêm ngưỡng điểm khung 4H → -1 | 98.74 | 50% | 0.705 | 8.13 | 12.15 | 0.465 | 0.991 | -11.51 |  |

### Vòng 596 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.57R, lời÷rủi ro 15.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Mức RSI 30/70 → 1.13 + SL tối đa (% Entry) → 0.425 | 120.93 | 49.7% | 0.78 | 8.46 | 14.29 | 0.757 | 0.808 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + R:R tối thiểu riêng khung 4H → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 47.71 | 37.5% | 0.221 | 17.14 | 2.78 | 0.24 | 0.201 | -9.46 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: EMA 50 → 0.75 | 111.23 | 53.2% | 0.789 | 7.42 | 14.99 | 0.621 | 0.975 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Trend (/100) → 12 + Trọng số phần Elliott (/100) → 10 | 106.72 | 40.6% | 0.346 | 13.04 | 8.18 | 0.331 | 0.359 | -17.25 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + SL tối đa (% Entry) → 0.425 + R:R tối thiểu tới TP1 → 2.38 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 93.99 | 44.9% | 0.563 | 9.79 | 9.6 | 0.613 | 0.516 | -11.56 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Cổng Dow → CHẶT | 84.05 | 53.5% | 0.737 | 6.87 | 12.23 | 0.384 | 1.023 | -6.64 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + SL tối đa (% Entry) → 0.425 + Điểm vùng: HVN anchored → 0.188 | 112.68 | 52.8% | 0.783 | 7.62 | 14.79 | 0.635 | 0.952 | -9.66 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: EMA 21 → 1.13 | 108.26 | 52.1% | 0.752 | 7.67 | 14.11 | 0.628 | 0.894 | -10 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: EMA 21 → 0.875 | 104.74 | 49.7% | 0.685 | 9.07 | 11.55 | 0.519 | 0.866 | -7.08 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Số TP tối đa → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 16.89 | 57% | 0.132 | 6.96 | 2.43 | 0.157 | 0.107 | -11.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 106.03 | 50% | 0.736 | 8.13 | 13.04 | 0.493 | 1.001 | -10.93 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: EMA 200 → 1 | 93.79 | 46.9% | 0.638 | 9.57 | 9.8 | 0.508 | 0.774 | -5.89 |  |

### Vòng 595 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.51R, lời÷rủi ro 15.14

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: MACD cắt lên Signal → 0.438 + % chốt ở TP1 → 0.307 | 104.19 | 49.7% | 0.672 | 9.31 | 11.19 | 0.474 | 0.912 | -7.09 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: POC anchored → 4 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần R:R (/100) → 33 | 104.27 | 49.3% | 0.724 | 8.45 | 12.34 | 0.483 | 0.965 | -4.28 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 128.21 | 45.3% | 0.543 | 11.12 | 11.53 | 0.629 | 0.448 | -10.74 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 1D → 5 + Lệnh chờ hết hạn sau (nến) → 8 | 107 | 46.4% | 0.585 | 9.31 | 11.49 | 0.605 | 0.564 | -9.57 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Trọng số phần Divergence (/100) → 9 | 113.24 | 52.8% | 0.786 | 7.65 | 14.8 | 0.635 | 0.96 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + R:R tối thiểu riêng khung 4H → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 91.48 | 39.7% | 0.308 | 13.87 | 6.6 | 0.288 | 0.325 | -10.58 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: BOS → 1 | 102.35 | 45.4% | 0.588 | 9.66 | 10.6 | 0.591 | 0.585 | -6.61 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 111.03 | 43.9% | 0.483 | 11.61 | 9.56 | 0.572 | 0.392 | -10.55 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Xác nhận khung nhỏ (A2) → W | 9.02 | 45.2% | 0.032 | 16.29 | 0.55 | 0.093 | -0.028 | -10.43 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: BOS → 1 | 97.49 | 51.7% | 0.672 | 8.19 | 11.9 | 0.637 | 0.714 | -9.46 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Momentum (/100) → 21 | 33.23 | 57.6% | 0.21 | 5.94 | 5.59 | 0.261 | 0.161 | -11.38 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 107.64 | 50.4% | 0.774 | 7.76 | 13.87 | 0.621 | 0.949 | -12.92 |  |

### Vòng 594 — ngẫu nhiên nhiều thông số · mốc: tổng 116.9R, win 53.5%, rủi ro tụt vốn 7.56R, lời÷rủi ro 15.46

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: POC anchored → 4 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 101.85 | 49.7% | 0.666 | 8.59 | 11.86 | 0.641 | 0.688 | -9.42 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 200 → 3 | 77.5 | 46.9% | 0.596 | 8.93 | 8.68 | 0.567 | 0.627 | -8.96 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + R:R tối thiểu riêng khung 1D → 2 + SL tối đa (% Entry) → 0.425 | 102.3 | 45% | 0.598 | 9.87 | 10.36 | 0.587 | 0.609 | -7.92 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 106.59 | 37.2% | 0.3 | 19.67 | 5.42 | 0.379 | 0.228 | 2.76 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Khung lớn phải tăng (trend ≥) → 0.375 | 113.18 | 52.4% | 0.781 | 7.55 | 14.99 | 0.604 | 0.975 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Trend (/100) → 12 | 113.26 | 47% | 0.691 | 10.36 | 10.93 | 0.67 | 0.709 | -6.35 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Mức MACD → 1.13 | 34.23 | 40.9% | 0.389 | 10.48 | 3.27 | 0.26 | 0.551 | -12.38 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: HVN anchored → 0.313 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 99.83 | 51.1% | 0.729 | 8.03 | 12.43 | 0.461 | 1.025 | -11.51 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Fib sóng 4 → 1.56 + Khung lớn phải tăng (trend ≥) → 0.375 | 111.25 | 51.7% | 0.747 | 8.01 | 13.89 | 0.55 | 0.975 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: MACD cắt lên Signal → 0.563 + Lệnh chờ hết hạn sau (nến) → 8 + Cộng thêm ngưỡng điểm khung 4H → -1 | 116.1 | 51.9% | 0.744 | 7.76 | 14.96 | 0.602 | 0.91 | -11.25 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: POC volume profile cố định → 0.688 | 91.14 | 46.8% | 0.584 | 8.93 | 10.21 | 0.484 | 0.682 | -11.23 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 111.78 | 52.1% | 0.766 | 7.77 | 14.39 | 0.635 | 0.912 | -9.66 |  |
