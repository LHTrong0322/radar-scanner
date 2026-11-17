# Tối ưu tự động (chạy liên tục) — vòng 583

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 6651 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 91.52R | 0.562 | 6.74R | 10.09R | 9.07 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 145 | 53.1% | 115.9R | 0.799 | 6.15R | 7.53R | 15.39 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 107 | 54.2% | 88.74R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 91.52R | 10.09R | 9.07 | 32 | 12.5% | -14.03R |
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

### Vòng 583 — ngẫu nhiên nhiều thông số · mốc: tổng 115.9R, win 53.1%, rủi ro tụt vốn 7.53R, lời÷rủi ro 15.39

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 79.65 | 45.7% | 0.627 | 9.53 | 8.36 | 0.534 | 0.742 | -9.96 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: POC anchored → 4 | 112.19 | 49% | 0.743 | 8.64 | 12.98 | 0.782 | 0.699 | -3.84 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 21.31 | 36.4% | 0.323 | 10.85 | 1.96 | 0.199 | 0.454 | -12.38 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: EMA 21 → 0.875 | 114.64 | 48.2% | 0.813 | 8.21 | 13.96 | 0.65 | 0.993 | -8.73 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 110.86 | 40.8% | 0.359 | 13.06 | 8.49 | 0.357 | 0.36 | -16.2 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu riêng khung 4H → 2 | 99.27 | 41.9% | 0.333 | 12.7 | 7.82 | 0.341 | 0.326 | -11.61 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Khung lớn phải tăng (trend ≥) → 0.425 | 101.79 | 46.3% | 0.628 | 10.76 | 9.46 | 0.671 | 0.591 | -8.17 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 56.65 | 44.1% | 0.51 | 10.25 | 5.53 | 0.364 | 0.671 | -5.46 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần SL (/100) → 9 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: EMA 200 → 3 | 97.83 | 45.6% | 0.719 | 9.06 | 10.8 | 0.498 | 0.962 | -7.87 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 86.85 | 49% | 0.553 | 9.87 | 8.8 | 0.542 | 0.566 | -6.88 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 34.63 | 57.9% | 0.202 | 7.32 | 4.73 | 0.284 | 0.139 | -9.04 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: POC volume profile cố định → 0.688 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức RSI 30/70 → 0.875 | 109.13 | 50.3% | 0.723 | 8.88 | 12.29 | 0.583 | 0.898 | -8.49 |  |

### Vòng 582 — ngẫu nhiên nhiều thông số · mốc: tổng 115.9R, win 53.1%, rủi ro tụt vốn 7.52R, lời÷rủi ro 15.41

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Break mây Ichimoku → 1 | 87.01 | 44.4% | 0.569 | 10.72 | 8.12 | 0.428 | 0.736 | -9.47 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + R:R tối thiểu tới TP1 → 2.38 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: BOS → 1 | 97.75 | 45.4% | 0.534 | 8.9 | 10.98 | 0.587 | 0.489 | -9.21 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 102.07 | 49% | 0.704 | 8.64 | 11.81 | 0.559 | 0.873 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 114.89 | 52.7% | 0.787 | 7.82 | 14.69 | 0.614 | 0.986 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: MACD cắt lên Signal → 0.438 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 105.04 | 48.8% | 0.657 | 9.7 | 10.83 | 0.456 | 0.884 | -8.48 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Ngưỡng điểm vào kèo → 77 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 56.11 | 42.2% | 0.515 | 9.95 | 5.64 | 0.4 | 0.65 | -6.82 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Số TP tối đa → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 171.14 | 40.1% | 0.545 | 17.37 | 9.85 | 0.372 | 0.722 | -14.15 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Trend (/100) → 12 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 102.52 | 44.6% | 0.586 | 9.83 | 10.43 | 0.588 | 0.584 | -7.92 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Khung lớn phải tăng (trend ≥) → 0.425 | 113.65 | 52.5% | 0.806 | 7.59 | 14.97 | 0.606 | 1.034 | -9.69 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 107.64 | 48.9% | 0.774 | 8.17 | 13.18 | 0.617 | 0.939 | -12.2 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 67.9 | 45.8% | 0.635 | 9.62 | 7.06 | 0.428 | 0.87 | -6.48 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cộng thêm ngưỡng điểm khung 4H → 2 + SL tối đa (% Entry) → 0.425 | 109.9 | 43.9% | 0.482 | 11.86 | 9.27 | 0.545 | 0.417 | -10.24 |  |

### Vòng 581 — ngẫu nhiên nhiều thông số · mốc: tổng 115.9R, win 53.1%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Đệm SL riêng khung 1W (ATR) → 0.3 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Biên mây Ichimoku → 1.35 | 95.38 | 46.8% | 0.686 | 9.23 | 10.33 | 0.477 | 0.864 | -9.68 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 114.38 | 52.4% | 0.8 | 7.5 | 15.25 | 0.651 | 0.964 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: POC volume profile cố định → 0.688 | 115.9 | 53.1% | 0.799 | 7.47 | 15.52 | 0.635 | 0.986 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Entry (/100) → 28 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 142.56 | 37.2% | 0.492 | 19.06 | 7.48 | 0.322 | 0.659 | -14.29 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 112.75 | 53.4% | 0.762 | 7.68 | 14.68 | 0.616 | 0.929 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + % chốt ở TP1 → 0.307 | 27.23 | 56.6% | 0.171 | 6.4 | 4.25 | 0.203 | 0.141 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: HVN anchored → 0.313 + Trọng số phần Trend (/100) → 12 + Điểm vùng: HVN cố định → 0.438 | 98.28 | 48.7% | 0.647 | 8.73 | 11.26 | 0.51 | 0.794 | -8.63 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Divergence (/100) → 9 | 114.81 | 52.1% | 0.786 | 7.69 | 14.93 | 0.641 | 0.944 | -9.66 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Cộng thêm ngưỡng điểm khung 1D → 5 | 91.51 | 49.6% | 0.678 | 8.19 | 11.17 | 0.54 | 0.836 | -8.27 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: BOS → 1 + Điểm vùng: POC anchored → 4 | 114.76 | 51.3% | 0.765 | 8.07 | 14.22 | 0.596 | 0.939 | -8.28 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 36.33 | 40.7% | 0.399 | 10.72 | 3.39 | 0.31 | 0.513 | -8.58 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 165.36 | 39.2% | 0.568 | 17.59 | 9.4 | 0.433 | 0.705 | -12.45 |  |

### Vòng 580 — ngẫu nhiên nhiều thông số · mốc: tổng 115.9R, win 53.1%, rủi ro tụt vốn 7.43R, lời÷rủi ro 15.60

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Mức MACD → 0.875 | 97.68 | 49.3% | 0.643 | 9.33 | 10.47 | 0.497 | 0.814 | -7.08 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 80.55 | 45.8% | 0.52 | 9.16 | 8.79 | 0.515 | 0.524 | -11.23 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 28.46 | 57.2% | 0.179 | 6.01 | 4.74 | 0.219 | 0.141 | -11.38 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần Elliott (/100) → 6 | 85.5 | 46.5% | 0.545 | 9.44 | 9.06 | 0.499 | 0.588 | -11.03 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 25.12 | 40.2% | 0.289 | 11.44 | 2.2 | 0.239 | 0.356 | -8.62 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Cộng điểm phân kỳ dương ẩn → 2.25 | 115.9 | 53.1% | 0.799 | 7.43 | 15.6 | 0.635 | 0.986 | -9.66 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + SL tối đa (% Entry) → 0.425 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 111.55 | 47.9% | 0.775 | 8.84 | 12.62 | 0.573 | 1.006 | -8.91 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 + Cộng điểm phân kỳ dương ẩn → 3 | 104.24 | 45.5% | 0.592 | 9.2 | 11.33 | 0.584 | 0.6 | -10.98 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Mức MACD → 1.13 | 84.61 | 50.4% | 0.699 | 8.16 | 10.37 | 0.582 | 0.835 | -16.13 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Divergence (/100) → 9 | 106.73 | 51.7% | 0.707 | 8.12 | 13.14 | 0.543 | 0.891 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Mức MACD → 0.875 | 102.52 | 50% | 0.693 | 8.33 | 12.31 | 0.574 | 0.818 | -9.73 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 109.34 | 50.7% | 0.77 | 7.84 | 13.95 | 0.646 | 0.905 | -9.66 |  |

### Vòng 579 — ngẫu nhiên nhiều thông số · mốc: tổng 115.9R, win 53.1%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.58

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + R:R tối thiểu riêng khung 4H → 2 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Break mây Ichimoku → 3 | 63.23 | 35% | 0.136 | 24.69 | 2.56 | 0.151 | 0.12 | -3.93 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 92.28 | 48.8% | 0.727 | 8.78 | 10.51 | 0.69 | 0.771 | -16.12 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Cộng thêm ngưỡng điểm khung 1W → -1 | 114.04 | 51.7% | 0.776 | 7.79 | 14.64 | 0.688 | 0.873 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần SL (/100) → 9 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 96.11 | 51.4% | 0.658 | 8.28 | 11.61 | 0.689 | 0.629 | -10.27 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần Trend (/100) → 12 | 92.4 | 48% | 0.624 | 9.6 | 9.63 | 0.461 | 0.792 | -8.11 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + % chốt ở TP1 → 0.307 + Cộng thêm ngưỡng điểm khung 1D → 5 | 112.19 | 52.7% | 0.748 | 8.25 | 13.6 | 0.626 | 0.88 | -9.67 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần Momentum (/100) → 21 | 108.8 | 49.4% | 0.655 | 9.71 | 11.2 | 0.487 | 0.859 | -7.08 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib sóng 4 → 0.938 | 113.51 | 52.1% | 0.777 | 7.78 | 14.59 | 0.61 | 0.965 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 98.32 | 42.6% | 0.441 | 11.81 | 8.33 | 0.515 | 0.362 | -11.13 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 112.75 | 53.4% | 0.762 | 7.73 | 14.59 | 0.616 | 0.929 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + SL tối đa (% Entry) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Số TP tối đa → 2 | 88.1 | 44.4% | 0.576 | 10.77 | 8.18 | 0.432 | 0.746 | -9.47 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cộng điểm phân kỳ dương ẩn → 3 | 104.24 | 45.5% | 0.592 | 9.4 | 11.09 | 0.584 | 0.6 | -10.98 |  |

### Vòng 578 — ngẫu nhiên nhiều thông số · mốc: tổng 117.52R, win 53.4%, rủi ro tụt vốn 7.62R, lời÷rủi ro 15.42

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: POC anchored → 2 | 94.47 | 44.3% | 0.537 | 9.68 | 9.76 | 0.565 | 0.512 | -11.23 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + R:R tối thiểu riêng khung 1D → 2 | 100.27 | 46.2% | 0.58 | 9.18 | 10.92 | 0.641 | 0.527 | -10.04 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: POC anchored → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 114.43 | 48.8% | 0.706 | 8.92 | 12.83 | 0.709 | 0.704 | -9.22 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Mức RSI 30/70 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 117.3 | 53.4% | 0.793 | 7.71 | 15.21 | 0.616 | 0.995 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Cộng thêm ngưỡng điểm khung 4H → -1 | 116.18 | 53.4% | 0.796 | 7.46 | 15.57 | 0.634 | 0.976 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Mức RSI 30/70 → 0.875 | 31.71 | 54.6% | 0.155 | 7.19 | 4.41 | 0.199 | 0.116 | -9.67 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + % chốt ở TP1 → 0.287 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 115.61 | 53.1% | 0.797 | 7.64 | 15.13 | 0.617 | 0.996 | -9.64 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + SL tối đa (% Entry) → 0.425 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 110.41 | 52.7% | 0.756 | 7.68 | 14.38 | 0.587 | 0.945 | -9.7 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Coin phải mạnh hơn BTC trong N ngày → 14 | 85.43 | 50.4% | 0.718 | 8.23 | 10.38 | 0.527 | 0.939 | -16.13 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: EMA 200 → 3 | 97.88 | 50.3% | 0.666 | 8.58 | 11.41 | 0.542 | 0.792 | -10.91 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 3 + R:R tối thiểu riêng khung 4H → 2 | 108.54 | 41.2% | 0.349 | 12.63 | 8.59 | 0.347 | 0.351 | -9.24 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: POC anchored → 2 + SL tối đa (% Entry) → 0.425 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 102.64 | 50.3% | 0.671 | 8.42 | 12.19 | 0.546 | 0.801 | -8.63 |  |

### Vòng 577 — ngẫu nhiên nhiều thông số · mốc: tổng 117.52R, win 53.4%, rủi ro tụt vốn 7.58R, lời÷rủi ro 15.50

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Divergence (/100) → 12 | 95.87 | 48.9% | 0.68 | 8.8 | 10.89 | 0.446 | 0.924 | -10.6 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 54.31 | 41.6% | 0.305 | 14.61 | 3.72 | 0.345 | 0.257 | -23.18 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Trọng số phần SL (/100) → 9 + Đệm SL riêng khung 4H (ATR) → 0.3 | 169.88 | 39.5% | 0.584 | 17.84 | 9.52 | 0.445 | 0.721 | -12.15 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Biên mây Ichimoku → 1.35 | 88.62 | 45.3% | 0.591 | 9.96 | 8.9 | 0.447 | 0.76 | -8.14 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần Trend (/100) → 19 | 111.44 | 51.7% | 0.748 | 7.52 | 14.82 | 0.617 | 0.891 | -10 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: HVN anchored → 0.313 | 116.84 | 52.7% | 0.8 | 7.7 | 15.17 | 0.617 | 1.005 | -9.66 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Coin phải mạnh hơn BTC trong N ngày → 14 | 85.43 | 50.4% | 0.718 | 8.23 | 10.38 | 0.527 | 0.939 | -16.12 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 96.07 | 51.2% | 0.794 | 7.78 | 12.35 | 0.569 | 1.031 | -9.31 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Xác nhận khung nhỏ (A2) → W + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 90.63 | 38.9% | 0.346 | 17.01 | 5.33 | 0.37 | 0.322 | -5.17 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 21 → 1.13 + Đệm SL riêng khung 1W (ATR) → 0.3 | 92.76 | 43.2% | 0.573 | 11.66 | 7.96 | 0.523 | 0.614 | -7.74 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Break mây Ichimoku → 3 | 81.7 | 52.8% | 0.654 | 7.71 | 10.6 | 0.374 | 0.92 | -10.75 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 82.23 | 45.5% | 0.492 | 10.17 | 8.09 | 0.383 | 0.598 | -9.82 |  |

### Vòng 576 — ngẫu nhiên nhiều thông số · mốc: tổng 114.31R, win 53.1%, rủi ro tụt vốn 7.63R, lời÷rủi ro 14.98

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Trend (/100) → 12 | 109.1 | 47.8% | 0.686 | 9.23 | 11.82 | 0.714 | 0.655 | -9.22 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 83.54 | 37.3% | 0.328 | 17.14 | 4.87 | 0.268 | 0.387 | -3.97 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: POC anchored → 2 | 102.67 | 48.1% | 0.634 | 9.23 | 11.12 | 0.533 | 0.745 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 82.1 | 48% | 0.555 | 9.53 | 8.61 | 0.554 | 0.556 | -9.41 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: POC anchored → 4 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 24.56 | 60% | 0.214 | 5.37 | 4.57 | 0.236 | 0.187 | -6.57 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm vùng: Fib sóng 4 → 0.938 | 112.56 | 52.8% | 0.782 | 7.59 | 14.83 | 0.62 | 0.962 | -9.66 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: POC anchored → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 200 → 3 | 22.24 | 55.3% | 0.14 | 7.22 | 3.08 | 0.193 | 0.093 | -10.47 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + R:R tối thiểu tới TP1 → 2.63 | 94.76 | 50% | 0.764 | 8.11 | 11.68 | 0.534 | 1.01 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + R:R tối thiểu riêng khung 1W → 2 | 102.91 | 52% | 0.686 | 8.02 | 12.83 | 0.628 | 0.744 | -10.7 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Coin phải mạnh hơn BTC trong N ngày → 14 | 79.47 | 49.6% | 0.691 | 8.27 | 9.61 | 0.501 | 0.913 | -16.16 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 114.31 | 53.1% | 0.788 | 7.63 | 14.98 | 0.635 | 0.962 | -9.66 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Elliott (/100) → 6 + SL tối đa (% Entry) → 0.425 | 96.22 | 50.7% | 0.641 | 8.58 | 11.21 | 0.624 | 0.661 | -9.46 |  |

### Vòng 575 — ngẫu nhiên nhiều thông số · mốc: tổng 114.31R, win 53.1%, rủi ro tụt vốn 7.63R, lời÷rủi ro 14.98

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 113.56 | 52.7% | 0.778 | 7.61 | 14.92 | 0.635 | 0.937 | -8.34 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + % chốt ở TP1 → 0.307 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 112.84 | 52.4% | 0.768 | 7.7 | 14.65 | 0.615 | 0.94 | -9.67 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 1D → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 108.98 | 45.6% | 0.605 | 9.72 | 11.21 | 0.729 | 0.49 | -7.34 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: POC anchored → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 101.73 | 46.2% | 0.602 | 11.05 | 9.21 | 0.63 | 0.577 | -4.01 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 114.31 | 53.1% | 0.788 | 7.63 | 14.98 | 0.635 | 0.962 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: EMA 21 → 1.13 | 100.41 | 49.4% | 0.612 | 9.02 | 11.13 | 0.544 | 0.686 | -9.84 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: BOS → 1 | 113.3 | 52.7% | 0.776 | 7.79 | 14.54 | 0.635 | 0.934 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: HVN cố định → 0.438 | 97.79 | 47.3% | 0.586 | 8.99 | 10.88 | 0.593 | 0.579 | -9.63 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 94.94 | 50.7% | 0.65 | 8.08 | 11.75 | 0.618 | 0.686 | -9.29 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Mức MACD → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 76.66 | 44.8% | 0.465 | 10.74 | 7.14 | 0.345 | 0.58 | -9.25 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 113.3 | 52.7% | 0.776 | 7.77 | 14.58 | 0.614 | 0.962 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm tối thiểu của vùng đặt SL → 4 | 109.17 | 51% | 0.743 | 7.91 | 13.8 | 0.597 | 0.903 | -9.66 |  |

### Vòng 574 — ngẫu nhiên nhiều thông số · mốc: tổng 114.31R, win 53.1%, rủi ro tụt vốn 7.63R, lời÷rủi ro 14.98

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Cổng Dow → TẮT | 120.73 | 43.3% | 0.58 | 12.09 | 9.99 | 0.55 | 0.611 | -19.27 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: POC anchored → 2 + Trọng số phần Entry (/100) → 33 | 87.32 | 49.2% | 0.704 | 8.76 | 9.97 | 0.478 | 0.916 | -9.6 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Ngưỡng điểm vào kèo → 77 + % chốt ở TP1 → 0.287 | 79.8 | 48.7% | 0.671 | 8.4 | 9.5 | 0.586 | 0.76 | -16.13 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 77.33 | 44.4% | 0.614 | 10.59 | 7.3 | 0.479 | 0.748 | -8.94 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Mức MACD → 0.875 | 106.36 | 52.1% | 0.739 | 7.84 | 13.57 | 0.598 | 0.891 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Mức RSI 30/70 → 0.875 | 64.35 | 46.9% | 0.503 | 9.77 | 6.59 | 0.37 | 0.648 | -8.96 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần R:R (/100) → 28 | 111.75 | 50% | 0.707 | 8.52 | 13.12 | 0.565 | 0.869 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + R:R tối thiểu riêng khung 4H → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 96.06 | 40.1% | 0.323 | 13.29 | 7.23 | 0.337 | 0.311 | -7.62 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần Elliott (/100) → 10 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Khung lớn phải tăng (trend ≥) → 0.375 | 107.28 | 50.3% | 0.74 | 8.09 | 13.26 | 0.592 | 0.899 | -8.34 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Cộng thêm ngưỡng điểm khung 4H → -1 + Số TP tối đa → 2 + Điểm vùng: BOS → 3 | 114.94 | 52.7% | 0.787 | 7.65 | 15.02 | 0.64 | 0.952 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Khung lớn phải tăng (trend ≥) → 0.375 + SL tối đa (% Entry) → 0.425 + Cộng thêm ngưỡng điểm khung 4H → -1 | 109.58 | 51.7% | 0.745 | 7.95 | 13.78 | 0.604 | 0.897 | -9.66 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Trend (/100) → 19 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 88.64 | 50.3% | 0.62 | 8.71 | 10.18 | 0.513 | 0.738 | -10.74 |  |
