# Tối ưu tự động (chạy liên tục) — vòng 395

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 4410 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46.6% | 96.04R | 0.597 | 5.74R | 9.91R | 9.69 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 145 | 53.1% | 119.02R | 0.821 | 6.15R | 7.41R | 16.06 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 107 | 54.2% | 91.87R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46.6% | 96.04R | 9.91R | 9.69 | 32 | 12.5% | -14.03R |
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
| SL tối đa (% Entry) | 0.35 | **0.387** |
| Lệnh chờ hết hạn sau (nến) | 8 | **7** |
| Điểm tối thiểu vùng đặt lệnh chờ | 3 | **2** |
| Số TP tối đa | 2 | **3** |
| Điểm ADX > 25 và +DI trội (Momentum) | 3 | **4** |
| Điểm ADX < 13 cạn lực giảm (Momentum) | 1.5 | **2.5** |
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

### Vòng 395 — ngẫu nhiên nhiều thông số · mốc: tổng 119.02R, win 53.1%, rủi ro tụt vốn 7.41R, lời÷rủi ro 16.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Fib sóng 4 → 1.56 + Coin phải mạnh hơn BTC trong N ngày → 14 | 90.74 | 50% | 0.769 | 7.95 | 11.41 | 0.591 | 0.995 | -15.11 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + R:R tối thiểu tới TP1 → 2.63 | 159.29 | 36.8% | 0.553 | 19.68 | 8.09 | 0.406 | 0.709 | -9.61 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Xác nhận khung nhỏ (A2) → W | 22.68 | 50% | 0.079 | 11.77 | 1.93 | 0.124 | 0.034 | -12.1 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Mức MACD → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: HVN anchored → 0.313 | 109.27 | 51.1% | 0.775 | 7.98 | 13.69 | 0.582 | 0.994 | -8.67 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần R:R (/100) → 28 | 119.02 | 53.1% | 0.821 | 7.41 | 16.06 | 0.624 | 1.05 | -9.66 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: HVN anchored → 0.188 | 104.56 | 51.7% | 0.711 | 8.11 | 12.89 | 0.624 | 0.81 | -7.53 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: BOS → 1 | 119.02 | 53.1% | 0.821 | 7.41 | 16.06 | 0.624 | 1.05 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Lệnh chờ hết hạn sau (nến) → 6 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 91.67 | 49.2% | 0.694 | 8.03 | 11.42 | 0.501 | 0.913 | -8.23 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm tối thiểu của vùng đặt SL → 4 | 109.18 | 48.9% | 0.797 | 8.47 | 12.89 | 0.603 | 1.032 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 117.78 | 52.7% | 0.796 | 7.74 | 15.22 | 0.586 | 1.05 | -11.06 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 | 103.65 | 47.1% | 0.61 | 9.05 | 11.45 | 0.643 | 0.58 | -10.04 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Khung lớn phải tăng (trend ≥) → 0.425 + R:R tối thiểu riêng khung 1W → 2 | 106.65 | 50.3% | 0.736 | 7.94 | 13.43 | 0.574 | 0.904 | -10.73 |  |

### Vòng 394 — ngẫu nhiên nhiều thông số · mốc: tổng 118.18R, win 53.1%, rủi ro tụt vốn 7.52R, lời÷rủi ro 15.72

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Biên mây Ichimoku → 1.05 | 69.43 | 48.1% | 0.655 | 8.6 | 8.07 | 0.487 | 0.843 | -6.55 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Trọng số phần Momentum (/100) → 25 + R:R tối thiểu tới TP1 → 2.63 | 98.37 | 50.4% | 0.827 | 7.99 | 12.31 | 0.55 | 1.128 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Cổng Dow → TẮT + Trọng số phần Elliott (/100) → 10 | 129.07 | 44.1% | 0.612 | 10.97 | 11.77 | 0.512 | 0.711 | -13.53 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 100.59 | 49.7% | 0.633 | 9.63 | 10.45 | 0.507 | 0.773 | -2.86 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: BOS → 1 | 117.68 | 52.8% | 0.829 | 7.49 | 15.71 | 0.653 | 1.026 | -7.57 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 117.68 | 52.8% | 0.829 | 7.49 | 15.71 | 0.653 | 1.026 | -7.57 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 111.93 | 44.1% | 0.493 | 11.44 | 9.78 | 0.567 | 0.419 | -7.93 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Trọng số phần SL (/100) → 9 | 117.68 | 52.8% | 0.829 | 7.49 | 15.71 | 0.653 | 1.026 | -7.57 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Cộng điểm phân kỳ dương ẩn → 3.5 + Coin phải mạnh hơn BTC trong N ngày → 14 | 84.66 | 48.6% | 0.777 | 7.95 | 10.65 | 0.563 | 1.048 | -13.53 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Xác nhận khung nhỏ (A2) → W + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 70.35 | 38.1% | 0.327 | 17.48 | 4.02 | 0.367 | 0.283 | -1.22 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 115.81 | 51.7% | 0.799 | 7.76 | 14.92 | 0.593 | 1.038 | -7.57 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 108.88 | 48.6% | 0.767 | 8.51 | 12.79 | 0.561 | 0.978 | -7.3 |  |

### Vòng 393 — ngẫu nhiên nhiều thông số · mốc: tổng 118.88R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 101.46 | 46.8% | 0.73 | 9.07 | 11.19 | 0.529 | 0.987 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Fib sóng 4 → 0.938 | 111.6 | 50% | 0.698 | 8.85 | 12.61 | 0.505 | 0.921 | -9.4 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: BOS → 3 | 118.88 | 53.1% | 0.82 | 7.4 | 16.06 | 0.624 | 1.048 | -9.66 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Break mây Ichimoku → 1 + Ngưỡng điểm vào kèo → 74 | 116.8 | 42.8% | 0.382 | 11.14 | 10.48 | 0.354 | 0.404 | -10.82 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 125.53 | 50% | 0.805 | 8.13 | 15.44 | 0.732 | 0.892 | -10.24 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Khung lớn phải tăng (trend ≥) → 0.375 + Cộng thêm ngưỡng điểm khung 1D → 4 | 111.57 | 46.4% | 0.672 | 10.38 | 10.75 | 0.635 | 0.704 | -6.35 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Cộng điểm phân kỳ dương ẩn → 2.63 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 124.92 | 49.4% | 0.801 | 8.35 | 14.96 | 0.732 | 0.883 | -10.24 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Mức MACD → 0.875 | 105.28 | 48.6% | 0.752 | 8.64 | 12.19 | 0.531 | 0.98 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + R:R tối thiểu riêng khung 4H → 2 | 110.27 | 41.6% | 0.356 | 12.54 | 8.79 | 0.339 | 0.369 | -10.8 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Elliott (/100) → 10 + Cổng Dow → CHẶT | 29.2 | 62.5% | 0.228 | 4.9 | 5.96 | 0.226 | 0.23 | -7.78 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: EMA 21 → 1.13 + Ngưỡng điểm vào kèo → 74 | 108.72 | 49.7% | 0.675 | 8.3 | 13.1 | 0.542 | 0.832 | -11.59 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: POC anchored → 4 + R:R tối thiểu riêng khung 1D → 2 | 121.66 | 46.7% | 0.661 | 8.97 | 13.56 | 0.739 | 0.592 | -5.01 |  |

### Vòng 392 — ngẫu nhiên nhiều thông số · mốc: tổng 118.88R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Khung lớn phải tăng (trend ≥) → 0.425 | 102.4 | 51.8% | 0.726 | 8.14 | 12.58 | 0.606 | 0.863 | -8.88 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + % chốt ở TP1 → 0.307 + Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 117.77 | 52.4% | 0.801 | 7.73 | 15.24 | 0.595 | 1.047 | -9.67 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Trọng số phần Entry (/100) → 28 | 116.03 | 51.4% | 0.817 | 7.41 | 15.66 | 0.646 | 1.003 | -8.61 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 106.02 | 50.3% | 0.693 | 8.74 | 12.13 | 0.512 | 0.914 | -7.08 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Coin phải mạnh hơn BTC trong N ngày → 14 | 87.58 | 50.4% | 0.724 | 7.84 | 11.17 | 0.543 | 0.941 | -16.13 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 22.82 | 36.9% | 0.272 | 11.23 | 2.03 | 0.173 | 0.416 | -11.04 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Khung lớn phải tăng (trend ≥) → 0.425 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 103.59 | 40.1% | 0.341 | 13.28 | 7.8 | 0.308 | 0.369 | -11.11 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: EMA 200 → 3 + Điểm vùng: POC volume profile cố định → 0.813 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 77.55 | 39.3% | 0.368 | 14.25 | 5.44 | 0.269 | 0.467 | -16.08 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + R:R tối thiểu riêng khung 4H → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 90.19 | 34.9% | 0.256 | 22.96 | 3.93 | 0.175 | 0.305 | -27.1 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Mức MACD → 0.875 | 117.74 | 45% | 0.54 | 10.77 | 10.93 | 0.549 | 0.531 | -10.43 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 117.93 | 52.4% | 0.802 | 7.48 | 15.77 | 0.614 | 1.021 | -8.34 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần Elliott (/100) → 6 + R:R tối thiểu riêng khung 1D → 2 | 111.42 | 44.4% | 0.619 | 9.93 | 11.22 | 0.571 | 0.668 | -2.97 |  |

### Vòng 391 — ngẫu nhiên nhiều thông số · mốc: tổng 118.88R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 118.88 | 53.1% | 0.82 | 7.4 | 16.06 | 0.624 | 1.048 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Break mây Ichimoku → 3 | 96.6 | 48.3% | 0.64 | 8.85 | 10.92 | 0.486 | 0.804 | -10.41 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + % chốt ở TP1 → 0.287 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 102.98 | 49.7% | 0.691 | 8.42 | 12.23 | 0.571 | 0.809 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 + Khung lớn phải tăng (trend ≥) → 0.375 | 94.94 | 50% | 0.642 | 8.65 | 10.98 | 0.573 | 0.718 | -10.39 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Divergence (/100) → 9 | 114.94 | 51.7% | 0.793 | 7.6 | 15.12 | 0.63 | 0.976 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 112.29 | 49.3% | 0.814 | 8.23 | 13.64 | 0.592 | 1.085 | -8.91 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Mức RSI 30/70 → 0.875 | 122.07 | 52.7% | 0.731 | 8.57 | 14.24 | 0.572 | 0.931 | -9.66 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Xác nhận khung nhỏ (A2) → W + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 15.28 | 48.3% | 0.052 | 14.3 | 1.07 | 0.108 | -0.004 | -11.29 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm tối thiểu của vùng đặt SL → 2 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 112.08 | 52% | 0.757 | 7.85 | 14.28 | 0.605 | 0.923 | -9.48 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Xác nhận khung nhỏ (A2) → W | 32.57 | 32.4% | 0.087 | 29.32 | 1.11 | 0.081 | 0.094 | -0.46 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: EMA 21 → 1.13 | 75.64 | 50.4% | 0.625 | 8.11 | 9.33 | 0.621 | 0.629 | -15.65 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: EMA 50 → 0.75 | 109.54 | 52% | 0.721 | 8.62 | 12.71 | 0.551 | 0.905 | -9.66 |  |

### Vòng 390 — ngẫu nhiên nhiều thông số · mốc: tổng 118.88R, win 53.1%, rủi ro tụt vốn 7.3R, lời÷rủi ro 16.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm tối thiểu của vùng đặt SL → 4 | 114.74 | 51.4% | 0.786 | 7.67 | 14.96 | 0.62 | 0.976 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + % chốt ở TP1 → 0.307 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 118.78 | 52.7% | 0.814 | 7.53 | 15.77 | 0.615 | 1.047 | -9.67 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần R:R (/100) → 33 + Điểm vùng: HVN anchored → 0.313 | 122.05 | 49.7% | 0.787 | 8.36 | 14.6 | 0.699 | 0.892 | -10.24 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: MACD cắt lên Signal → 0.438 | 104.71 | 50% | 0.654 | 9.46 | 11.07 | 0.488 | 0.843 | -7.08 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Biên mây Ichimoku → 1.35 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 112.32 | 41.6% | 0.357 | 12.95 | 8.67 | 0.331 | 0.378 | -12.53 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: EMA 50 → 1.13 | 115.25 | 51.4% | 0.789 | 7.81 | 14.76 | 0.583 | 1.039 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Elliott (/100) → 6 | 127.64 | 49.7% | 0.813 | 8.13 | 15.7 | 0.753 | 0.883 | -11.21 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 78.4 | 44.1% | 0.548 | 9.6 | 8.17 | 0.609 | 0.493 | -18.41 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 114.59 | 51% | 0.79 | 7.67 | 14.94 | 0.513 | 1.096 | -9.52 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 103.3 | 49.7% | 0.684 | 8.76 | 11.79 | 0.488 | 0.923 | -8.37 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Trend (/100) → 12 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 117.35 | 52.4% | 0.821 | 7.61 | 15.42 | 0.64 | 1.026 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 96.59 | 43.8% | 0.549 | 12.21 | 7.91 | 0.561 | 0.536 | -3.82 |  |

### Vòng 389 — ngẫu nhiên nhiều thông số · mốc: tổng 118.88R, win 53.1%, rủi ro tụt vốn 7.3R, lời÷rủi ro 16.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: BOS → 1 | 94.23 | 38.8% | 0.37 | 16.63 | 5.67 | 0.308 | 0.428 | -4.57 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Break mây Ichimoku → 3 | 70.19 | 46.8% | 0.632 | 9.22 | 7.61 | 0.4 | 0.887 | -6.51 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.313 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Trend (/100) → 19 | 92.03 | 47.6% | 0.742 | 9.24 | 9.96 | 0.512 | 1.022 | -16.12 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + SL tối đa (% Entry) → 0.35 + Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần R:R (/100) → 33 | 108.1 | 49.7% | 0.68 | 9.01 | 12 | 0.513 | 0.867 | -9.4 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần SL (/100) → 7 + Coin phải mạnh hơn BTC trong N ngày → 14 | 88.57 | 51.3% | 0.757 | 7.88 | 11.24 | 0.552 | 1.004 | -16.13 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + SL tối đa (% Entry) → 0.425 | 117.91 | 52.4% | 0.802 | 7.48 | 15.76 | 0.624 | 1.003 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + % chốt ở TP1 → 0.307 + Điểm vùng: BOS → 1 | 103.74 | 49.7% | 0.696 | 8.71 | 11.91 | 0.526 | 0.888 | -11.03 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Mức MACD → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 78.33 | 45.7% | 0.746 | 8.6 | 9.11 | 0.6 | 0.949 | -4.06 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 18.78 | 52.5% | 0.078 | 9.58 | 1.96 | 0.187 | -0.009 | -6.98 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Cộng điểm phân kỳ dương ẩn → 2.63 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 75.34 | 46.5% | 0.584 | 9.74 | 7.74 | 0.44 | 0.74 | -4.82 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: EMA 21 → 1.13 | 108.93 | 49.7% | 0.751 | 8.19 | 13.3 | 0.568 | 0.965 | -11.9 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 91.48 | 49% | 0.598 | 8.13 | 11.25 | 0.483 | 0.715 | -11.46 |  |

### Vòng 388 — ngẫu nhiên nhiều thông số · mốc: tổng 118.88R, win 53.1%, rủi ro tụt vốn 7.29R, lời÷rủi ro 16.31

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 | 109.22 | 47.1% | 0.642 | 8.87 | 12.31 | 0.616 | 0.667 | -7.92 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + % chốt ở TP1 → 0.307 + Cộng thêm ngưỡng điểm khung 1W → 2 | 142.03 | 44.7% | 0.661 | 10.89 | 13.04 | 0.573 | 0.744 | -15.2 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 36.5 | 40.2% | 0.419 | 10.54 | 3.46 | 0.324 | 0.537 | -6.21 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: BOS → 3 + Điểm vùng: HVN cố định → 0.563 | 117.76 | 52.7% | 0.807 | 7.51 | 15.68 | 0.603 | 1.046 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: EMA 50 → 0.75 | 98.45 | 47.5% | 0.623 | 8.36 | 11.78 | 0.512 | 0.726 | -10.97 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Trọng số phần Entry (/100) → 28 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: HVN cố định → 0.563 | 117.49 | 52% | 0.794 | 7.62 | 15.42 | 0.611 | 1.003 | -9.66 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.68 | 51.7% | 0.699 | 8.13 | 12.63 | 0.626 | 0.782 | -9.42 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Đệm SL riêng khung 4H (ATR) → 0.3 | 162.17 | 38.3% | 0.559 | 18.4 | 8.81 | 0.415 | 0.705 | -16.54 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu tới TP1 → 2.38 + Đệm SL riêng khung 4H (ATR) → 0.3 | 83.43 | 34% | 0.33 | 23.06 | 3.62 | 0.316 | 0.342 | -11.96 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Fib sóng 4 → 1.56 | 20.62 | 41.5% | 0.389 | 8.87 | 2.32 | 0.189 | 0.582 | -2.73 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 111.15 | 45.2% | 0.708 | 10.93 | 10.17 | 0.716 | 0.7 | -6.09 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 105.34 | 47.4% | 0.684 | 8.97 | 11.74 | 0.525 | 0.874 | -10.69 |  |

### Vòng 387 — ngẫu nhiên nhiều thông số · mốc: tổng 118.88R, win 53.1%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.42

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 | 103.06 | 50.7% | 0.736 | 7.99 | 12.9 | 0.552 | 0.937 | -10.98 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Fib sóng 4 → 0.938 | 124.19 | 44.6% | 0.554 | 10.92 | 11.37 | 0.565 | 0.544 | -9.59 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Fib sóng 4 → 1.56 | 30.16 | 58.2% | 0.191 | 5.86 | 5.15 | 0.219 | 0.164 | -11.38 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: POC volume profile cố định → 0.688 + Ngưỡng điểm vào kèo → 77 | 73.72 | 46.5% | 0.581 | 9.42 | 7.83 | 0.445 | 0.718 | -4.82 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: EMA 50 → 0.75 | 102.08 | 50% | 0.681 | 8.76 | 11.65 | 0.463 | 0.936 | -7.08 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần Divergence (/100) → 9 | 35.27 | 58.4% | 0.204 | 5.75 | 6.13 | 0.234 | 0.171 | -10.55 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + R:R tối thiểu riêng khung 1D → 2 | 101.81 | 45.9% | 0.563 | 9.16 | 11.11 | 0.564 | 0.562 | -8.96 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: POC anchored → 4 | 90.12 | 49.7% | 0.574 | 9.52 | 9.47 | 0.574 | 0.574 | -6.07 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 118.88 | 53.1% | 0.82 | 7.24 | 16.42 | 0.624 | 1.048 | -9.66 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng điểm phân kỳ dương ẩn → 3.5 + Cổng Dow → TẮT | 98.18 | 40.5% | 0.621 | 11.91 | 8.24 | 0.519 | 0.724 | -12.06 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 117.1 | 52.1% | 0.813 | 7.4 | 15.82 | 0.61 | 1.047 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: EMA 21 → 0.875 + Trọng số phần Momentum (/100) → 25 | 115.99 | 52.1% | 0.805 | 7.75 | 14.97 | 0.662 | 0.957 | -9.66 |  |

### Vòng 386 — ngẫu nhiên nhiều thông số · mốc: tổng 118.88R, win 53.1%, rủi ro tụt vốn 7.3R, lời÷rủi ro 16.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Ngưỡng điểm vào kèo → 74 + Số TP tối đa → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 113.73 | 49.3% | 0.812 | 8.17 | 13.92 | 0.615 | 1.047 | -8.91 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Fib sóng 4 → 0.938 | 159.81 | 38.6% | 0.545 | 18.55 | 8.62 | 0.391 | 0.703 | -10.02 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Đệm SL riêng khung 1W (ATR) → 0.3 | 87.22 | 51.8% | 0.793 | 7.64 | 11.42 | 0.352 | 1.147 | -11.77 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Coin phải mạnh hơn BTC trong N ngày → 14 | 52.67 | 38.1% | 0.267 | 18.16 | 2.9 | 0.149 | 0.371 | -12.29 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Elliott (/100) → 10 | 113.62 | 44.1% | 0.668 | 11.26 | 10.09 | 0.766 | 0.582 | -5.6 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + R:R tối thiểu riêng khung 4H → 2 | 100.58 | 39.5% | 0.288 | 15.17 | 6.63 | 0.313 | 0.271 | -15.75 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: POC volume profile cố định → 0.688 | 104.64 | 50% | 0.707 | 8.36 | 12.52 | 0.544 | 0.888 | -12.06 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + % chốt ở TP1 → 0.307 + Cổng Dow → CHẶT | 73.1 | 49.1% | 0.653 | 7.95 | 9.19 | 0.245 | 1.019 | -10.72 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Cộng thêm ngưỡng điểm khung 4H → -1 | 118.88 | 53.1% | 0.82 | 7.3 | 16.28 | 0.624 | 1.048 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trọng số phần R:R (/100) → 28 + Điểm vùng: HVN anchored → 0.313 | 73.34 | 46% | 0.582 | 9.49 | 7.73 | 0.445 | 0.723 | -4.82 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Break mây Ichimoku → 1 | 101.82 | 45.6% | 0.595 | 9.34 | 10.9 | 0.59 | 0.601 | -13.05 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Fib sóng 4 → 1.56 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 111.93 | 45.6% | 0.708 | 10.81 | 10.35 | 0.717 | 0.7 | -5.07 |  |
