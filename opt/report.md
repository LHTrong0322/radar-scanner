# Tối ưu tự động (chạy liên tục) — vòng 766

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 8847 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 93.37R | 0.573 | 5.74R | 9.98R | 9.36 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 144 | 53.5% | 118.41R | 0.822 | 5.09R | 7.27R | 16.29 | 27 | 18.5% | -8.63R | -0.32 | 9.25R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.77R | 1 | 0% | -1.01R |
| 4H | 106 | 54.7% | 91.22R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 93.37R | 9.98R | 9.36 | 31 | 12.9% | -13R |
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

### Vòng 766 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.27R, lời÷rủi ro 16.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.35 | 116.52 | 45.5% | 0.525 | 11.05 | 10.54 | 0.562 | 0.49 | -11.9 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + % chốt ở TP1 → 0.307 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 113.37 | 51% | 0.793 | 7.76 | 14.61 | 0.606 | 1.005 | -7.62 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + R:R tối thiểu tới TP1 → 2.38 | 84.56 | 39.7% | 0.486 | 11.39 | 7.42 | 0.477 | 0.496 | -6.69 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 92.57 | 46.9% | 0.638 | 9.37 | 9.88 | 0.47 | 0.852 | -8.13 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 113.21 | 53% | 0.76 | 7.55 | 14.99 | 0.596 | 0.95 | -10.03 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + R:R tối thiểu riêng khung 1D → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 92.65 | 44.3% | 0.555 | 9.91 | 9.35 | 0.605 | 0.508 | -4.06 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: EMA 50 → 1.13 | 111.21 | 50.3% | 0.757 | 7.94 | 14.01 | 0.565 | 0.98 | -7.43 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Mức RSI 30/70 → 0.875 + Cổng Dow → TẮT | 153.13 | 46.2% | 0.654 | 11.15 | 13.73 | 0.551 | 0.766 | -18.48 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.49 | 58.6% | 0.207 | 5.6 | 5.62 | 0.246 | 0.171 | -10.36 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần SL (/100) → 9 + Cộng điểm phân kỳ dương ẩn → 2.25 + R:R tối thiểu tới TP1 → 2.38 | 64.41 | 44.8% | 0.481 | 9.55 | 6.74 | 0.484 | 0.477 | -16.67 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Lệnh chờ hết hạn sau (nến) → 8 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 74.47 | 47% | 0.636 | 9.11 | 8.17 | 0.434 | 0.881 | -6.03 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: EMA 50 → 1.13 | 144.62 | 38% | 0.504 | 18.93 | 7.64 | 0.316 | 0.691 | -10.86 |  |

### Vòng 765 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.25R, lời÷rủi ro 16.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Cộng thêm ngưỡng điểm khung 1D → 3 + Xác nhận khung nhỏ (A2) → W | 105.92 | 39.7% | 0.42 | 15.65 | 6.77 | 0.373 | 0.464 | -2.71 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC anchored → 2 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 65 | 45.5% | 0.591 | 9.67 | 6.72 | 0.414 | 0.775 | -5.46 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 85.11 | 45.5% | 0.587 | 10.09 | 8.44 | 0.44 | 0.767 | -8.13 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: EMA 50 → 0.75 | 126.88 | 45.6% | 0.561 | 10.8 | 11.75 | 0.624 | 0.495 | -9.94 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 | 111.64 | 46.6% | 0.693 | 10.13 | 11.02 | 0.694 | 0.693 | -5.32 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Trend (/100) → 12 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 72.87 | 44.9% | 0.461 | 10.59 | 6.88 | 0.349 | 0.577 | -11.99 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + R:R tối thiểu riêng khung 4H → 2 | 118.09 | 41.2% | 0.377 | 12.43 | 9.5 | 0.326 | 0.421 | -13.54 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 1D (ATR) → 0.3 | 116.74 | 47.6% | 0.703 | 10.39 | 11.24 | 0.677 | 0.727 | -5.32 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Cộng điểm phân kỳ dương ẩn → 3 + R:R tối thiểu riêng khung 1D → 2 | 107.8 | 45.9% | 0.627 | 9.12 | 11.82 | 0.61 | 0.642 | -6.89 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: EMA 21 → 1.13 | 108.63 | 51% | 0.739 | 7.74 | 14.03 | 0.597 | 0.891 | -8.97 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Cổng Dow → CHẶT | 73.72 | 46.4% | 0.534 | 8.65 | 8.52 | 0.373 | 0.655 | -10.98 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 101.76 | 51.7% | 0.692 | 8.12 | 12.53 | 0.637 | 0.754 | -8.43 |  |

### Vòng 764 — ngẫu nhiên nhiều thông số · mốc: tổng 115.64R, win 53.5%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.54

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 115.01 | 52.8% | 0.81 | 7.56 | 15.21 | 0.642 | 1.003 | -8.08 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 103.96 | 45.6% | 0.571 | 10.06 | 10.33 | 0.493 | 0.647 | -4.52 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Trọng số phần SL (/100) → 7 | 80.03 | 52.3% | 0.721 | 7.03 | 11.38 | 0.297 | 1.109 | -10.17 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 103.35 | 50.3% | 0.713 | 8.33 | 12.41 | 0.552 | 0.911 | -8.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Cổng Dow → CHẶT + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 68.88 | 51.8% | 0.626 | 7.65 | 9 | 0.344 | 0.889 | -9.39 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 113.25 | 52.1% | 0.776 | 7.88 | 14.37 | 0.635 | 0.932 | -8.08 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: EMA 21 → 0.875 | 106.18 | 51.4% | 0.748 | 7.87 | 13.49 | 0.641 | 0.867 | -8.91 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Entry (/100) → 28 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.66 | 56.8% | 0.203 | 5.84 | 5.08 | 0.234 | 0.171 | -8.73 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: HVN cố định → 0.438 | 100.21 | 50% | 0.716 | 8.13 | 12.33 | 0.486 | 0.989 | -9.93 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + R:R tối thiểu riêng khung 1W → 2 | 98.36 | 50% | 0.647 | 9.21 | 10.68 | 0.524 | 0.781 | -6.89 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Entry (/100) → 33 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 97.52 | 50.3% | 0.673 | 8.53 | 11.43 | 0.588 | 0.771 | -9.17 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần SL (/100) → 9 | 110.9 | 52.1% | 0.781 | 7.54 | 14.71 | 0.604 | 0.984 | -8.08 |  |

### Vòng 763 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.32R, lời÷rủi ro 16.18

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + SL tối đa (% Entry) → 0.425 | 117.4 | 53.1% | 0.81 | 7.61 | 15.43 | 0.635 | 1.007 | -10.03 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 76.29 | 47.7% | 0.713 | 8.46 | 9.02 | 0.476 | 0.983 | -5.45 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + SL tối đa (% Entry) → 0.425 | 109.69 | 47.1% | 0.645 | 9.01 | 12.17 | 0.628 | 0.661 | -6.72 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: BOS → 1 | 94.2 | 43.3% | 0.628 | 10.63 | 8.86 | 0.568 | 0.678 | -9.71 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Break mây Ichimoku → 3 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: EMA 200 → 3 | 81.41 | 46.2% | 0.522 | 10.4 | 7.83 | 0.371 | 0.685 | -7.83 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm tối thiểu của vùng đặt SL → 4 + Ngưỡng điểm vào kèo → 74 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 114.65 | 51.4% | 0.775 | 7.55 | 15.19 | 0.631 | 0.931 | -7.31 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Mức MACD → 0.875 | 119.57 | 52.7% | 0.819 | 7.78 | 15.37 | 0.646 | 1.029 | -7.61 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Ngưỡng điểm vào kèo → 74 | 113.39 | 51% | 0.771 | 7.74 | 14.65 | 0.589 | 0.977 | -8.46 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: EMA 200 → 1 + Trọng số phần SL (/100) → 7 | 123.44 | 51.3% | 0.781 | 7.96 | 15.51 | 0.669 | 0.908 | -8.8 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Khung lớn phải tăng (trend ≥) → 0.375 | 104.63 | 48.1% | 0.646 | 9.11 | 11.49 | 0.513 | 0.785 | -8.38 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: HVN cố định → 0.438 | 113.25 | 51% | 0.781 | 7.97 | 14.21 | 0.593 | 0.994 | -8.63 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: POC anchored → 4 + Điểm vùng: EMA 21 → 0.875 | 119.79 | 51.7% | 0.804 | 7.91 | 15.14 | 0.67 | 0.936 | -6.48 |  |

### Vòng 762 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.5R, lời÷rủi ro 15.79

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 116.35 | 48.4% | 0.741 | 8.63 | 13.48 | 0.701 | 0.787 | -10.57 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Fib sóng 4 → 0.938 + R:R tối thiểu tới TP1 → 2.63 | 103.93 | 47.4% | 0.684 | 8.82 | 11.78 | 0.653 | 0.712 | -8.94 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Ngưỡng điểm vào kèo → 77 | 107.37 | 50.3% | 0.74 | 7.82 | 13.73 | 0.635 | 0.857 | -8.97 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: EMA 50 → 0.75 | 91.58 | 47.8% | 0.576 | 8.71 | 10.51 | 0.465 | 0.68 | -10.2 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Divergence (/100) → 9 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 101.01 | 51.4% | 0.683 | 8.24 | 12.26 | 0.637 | 0.733 | -7.12 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cộng thêm ngưỡng điểm khung 4H → 2 | 105.04 | 50.3% | 0.705 | 8.37 | 12.55 | 0.552 | 0.882 | -6.05 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Cộng điểm phân kỳ dương ẩn → 2.25 | 117.78 | 52.8% | 0.818 | 7.51 | 15.68 | 0.642 | 1.015 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: EMA 21 → 1.13 + Coin phải mạnh hơn BTC trong N ngày → 14 | 80.85 | 49.2% | 0.674 | 8.07 | 10.02 | 0.549 | 0.812 | -15.44 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Biên mây Ichimoku → 1.35 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Break mây Ichimoku → 3 | 114.15 | 48.4% | 0.718 | 9.38 | 12.17 | 0.635 | 0.819 | -6.55 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cổng Dow → TẮT + Đệm SL riêng khung 1W (ATR) → 0.3 | 100.23 | 39.4% | 0.647 | 12.49 | 8.02 | 0.607 | 0.684 | -20.39 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: BOS → 3 | 119.15 | 50.6% | 0.774 | 8.11 | 14.69 | 0.607 | 0.963 | -9.66 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Break mây Ichimoku → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 93.05 | 45.1% | 0.608 | 10.33 | 9.01 | 0.536 | 0.687 | -5.68 |  |

### Vòng 761 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.38

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: MACD cắt lên Signal → 0.563 | 117.96 | 53.1% | 0.814 | 7.49 | 15.75 | 0.635 | 1.015 | -8.63 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 111.64 | 46.6% | 0.693 | 10.13 | 11.02 | 0.694 | 0.693 | -5.32 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: POC volume profile cố định → 0.813 | 114.26 | 51% | 0.799 | 7.74 | 14.76 | 0.602 | 1.028 | -7.61 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + R:R tối thiểu riêng khung 1W → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 62.99 | 42.4% | 0.504 | 11.09 | 5.68 | 0.406 | 0.61 | -11.51 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Số TP tối đa → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 22.41 | 42.3% | 0.431 | 8.28 | 2.71 | 0.262 | 0.587 | -2.78 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Cộng điểm phân kỳ dương ẩn → 2.25 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 104.67 | 51.1% | 0.742 | 7.98 | 13.12 | 0.495 | 1.023 | -10.49 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần SL (/100) → 9 + Lệnh chờ hết hạn sau (nến) → 8 | 118.01 | 50% | 0.686 | 9.16 | 12.88 | 0.579 | 0.812 | -10.22 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: MACD cắt lên Signal → 0.563 + R:R tối thiểu riêng khung 1D → 2 | 108.26 | 45.7% | 0.619 | 9.15 | 11.83 | 0.612 | 0.625 | -9.95 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần Entry (/100) → 28 | 81.06 | 45.4% | 0.497 | 10.28 | 7.89 | 0.417 | 0.576 | -8.23 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.22 | 52.1% | 0.7 | 7.93 | 12.89 | 0.637 | 0.772 | -8.43 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + R:R tối thiểu riêng khung 1D → 2 | 91.35 | 42.1% | 0.513 | 10.43 | 8.76 | 0.519 | 0.508 | -3.76 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Trend (/100) → 12 | 99.03 | 49.6% | 0.734 | 7.97 | 12.43 | 0.477 | 1.027 | -11.77 |  |

### Vòng 760 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.09

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 80.56 | 44.8% | 0.488 | 10.48 | 7.69 | 0.474 | 0.502 | -8.09 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Fib sóng 4 → 1.56 | 114.38 | 52% | 0.773 | 7.91 | 14.46 | 0.574 | 1.007 | -7.61 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần Elliott (/100) → 10 | 90.96 | 37.9% | 0.36 | 17.33 | 5.25 | 0.33 | 0.388 | -4.03 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: POC anchored → 4 + Điểm vùng: Mức RSI 30/70 → 1.13 | 117.57 | 52% | 0.784 | 7.72 | 15.23 | 0.618 | 0.95 | -3.45 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Coin phải mạnh hơn BTC trong N ngày → 14 + Số TP tối đa → 2 | 87.57 | 50.9% | 0.755 | 7.99 | 10.96 | 0.559 | 0.988 | -15.1 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: EMA 50 → 0.75 | 115.96 | 53.5% | 0.817 | 7.35 | 15.78 | 0.621 | 1.029 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: POC volume profile cố định → 0.688 | 109.87 | 50% | 0.753 | 8.36 | 13.14 | 0.63 | 0.882 | -8.04 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: HVN cố định → 0.563 + Trọng số phần R:R (/100) → 33 | 107.99 | 46.2% | 0.632 | 9.18 | 11.76 | 0.62 | 0.642 | -9.95 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cổng Dow → TẮT + R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 | 107.21 | 41% | 0.602 | 13.43 | 7.98 | 0.62 | 0.589 | -29.52 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 116.8 | 51.9% | 0.749 | 8.31 | 14.06 | 0.607 | 0.928 | -3.64 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Cộng điểm phân kỳ dương ẩn → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 84.3 | 46% | 0.68 | 9.33 | 9.04 | 0.305 | 0.989 | -11.54 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 4H (ATR) → 0.3 | 161.49 | 38.2% | 0.546 | 17.62 | 9.17 | 0.481 | 0.61 | -11.32 |  |

### Vòng 759 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.38

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: POC volume profile cố định → 0.813 | 114.11 | 51.4% | 0.792 | 7.78 | 14.67 | 0.523 | 1.086 | -7.47 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Xác nhận khung nhỏ (A2) → W + R:R tối thiểu tới TP1 → 2.38 | 72.23 | 36.4% | 0.317 | 17.74 | 4.07 | 0.361 | 0.268 | -7.42 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Lệnh chờ hết hạn sau (nến) → 8 + Đệm SL riêng khung 1W (ATR) → 0.3 | 111.92 | 45.8% | 0.674 | 9.97 | 11.23 | 0.608 | 0.745 | -10.84 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 118.41 | 53.5% | 0.822 | 7.23 | 16.38 | 0.635 | 1.037 | -8.63 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 81.03 | 50% | 0.643 | 8.36 | 9.69 | 0.552 | 0.741 | -15.1 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 113.47 | 51.8% | 0.816 | 7.39 | 15.35 | 0.626 | 1.027 | -9.92 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Momentum (/100) → 21 | 116.69 | 52.4% | 0.816 | 7.38 | 15.81 | 0.64 | 1.015 | -8.63 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + R:R tối thiểu tới TP1 → 2.38 | 96.7 | 47.1% | 0.616 | 8.63 | 11.21 | 0.505 | 0.72 | -10.21 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: EMA 50 → 0.75 + SL tối đa (% Entry) → 0.425 | 114.2 | 52.8% | 0.793 | 7.41 | 15.41 | 0.621 | 0.975 | -7.31 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: BOS → 3 | 116.89 | 52.8% | 0.823 | 7.37 | 15.86 | 0.652 | 1.015 | -8.63 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Trend (/100) → 12 | 116.69 | 52.4% | 0.816 | 7.38 | 15.81 | 0.64 | 1.015 | -8.63 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Cộng điểm phân kỳ dương ẩn → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: EMA 21 → 1.13 | 110.9 | 51% | 0.765 | 7.68 | 14.44 | 0.635 | 0.908 | -8.97 |  |

### Vòng 758 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.38

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Số TP tối đa → 2 + Cổng Dow → CHẶT | 86.7 | 52.3% | 0.781 | 6.63 | 13.08 | 0.392 | 1.136 | -13.98 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 104.14 | 48.8% | 0.627 | 9.26 | 11.25 | 0.507 | 0.763 | -8.37 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Mức RSI 30/70 → 0.875 | 105.87 | 51.3% | 0.67 | 8.48 | 12.48 | 0.608 | 0.743 | -8.62 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 160.97 | 38.9% | 0.531 | 18.17 | 8.86 | 0.332 | 0.748 | -10.14 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Xác nhận khung nhỏ (A2) → W | 105.11 | 39.4% | 0.414 | 15.6 | 6.74 | 0.36 | 0.464 | -2.7 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Khung lớn phải tăng (trend ≥) → 0.425 | 115.46 | 52.9% | 0.825 | 7.24 | 15.95 | 0.606 | 1.077 | -8.66 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + % chốt ở TP1 → 0.287 + Điểm vùng: Mức MACD → 1.13 + Số TP tối đa → 2 | 106.89 | 52.8% | 0.869 | 7.5 | 14.25 | 0.6 | 1.181 | -9.58 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 107.38 | 50.6% | 0.671 | 8.12 | 13.22 | 0.567 | 0.786 | -12.34 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: HVN anchored → 0.313 | 29.95 | 63.6% | 0.232 | 4.7 | 6.37 | 0.212 | 0.248 | -7.78 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 1 | 109.09 | 46.4% | 0.657 | 10.47 | 10.42 | 0.706 | 0.614 | -4.13 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + % chốt ở TP1 → 0.307 + Điểm vùng: EMA 200 → 3 | 103.44 | 49.3% | 0.708 | 8.33 | 12.42 | 0.499 | 0.93 | -10.68 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 39.07 | 41.4% | 0.449 | 9.79 | 3.99 | 0.372 | 0.544 | -6.21 |  |

### Vòng 757 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.38

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Mức MACD → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 111.29 | 50.3% | 0.767 | 8.24 | 13.51 | 0.607 | 0.945 | -8.63 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + % chốt ở TP1 → 0.307 + Điểm vùng: Break mây Ichimoku → 3 + R:R tối thiểu riêng khung 4H → 2 | 97.68 | 39.5% | 0.321 | 14.12 | 6.92 | 0.301 | 0.34 | -4.04 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Divergence (/100) → 9 | 92.11 | 46.6% | 0.631 | 9.41 | 9.79 | 0.47 | 0.832 | -8.13 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: BOS → 1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.11 | 52.1% | 0.699 | 7.97 | 12.81 | 0.637 | 0.77 | -8.43 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Khung lớn phải tăng (trend ≥) → 0.425 | 78.92 | 46.4% | 0.705 | 8.91 | 8.86 | 0.494 | 0.947 | -7.98 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Elliott (/100) → 6 + Trọng số phần SL (/100) → 7 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 35.99 | 38.9% | 0.318 | 12.37 | 2.91 | 0.461 | 0.168 | -4.08 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần R:R (/100) → 28 | 74.72 | 46.7% | 0.698 | 8.71 | 8.58 | 0.474 | 0.955 | -5.45 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 84.92 | 44.9% | 0.578 | 9.32 | 9.11 | 0.581 | 0.575 | -17.38 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: HVN cố định → 0.563 | 101.44 | 52.1% | 0.838 | 7.69 | 13.19 | 0.543 | 1.159 | -9.6 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 100.7 | 50% | 0.73 | 7.89 | 12.76 | 0.466 | 1.035 | -10.49 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: HVN anchored → 0.313 | 38.76 | 41.2% | 0.456 | 9.56 | 4.05 | 0.358 | 0.578 | -5.18 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: EMA 200 → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 134.59 | 38.8% | 0.512 | 17.24 | 7.81 | 0.225 | 0.776 | -11.44 |  |
