# Tối ưu tự động (chạy liên tục) — vòng 690

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 7935 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.3% | 93.53R | 0.577 | 5.74R | 9.91R | 9.44 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 144 | 53.5% | 118.38R | 0.822 | 5.09R | 7.4R | 16.00 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 106 | 54.7% | 91.22R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.3% | 93.53R | 9.91R | 9.44 | 32 | 12.5% | -14.03R |
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

### Vòng 690 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.00

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: MACD cắt lên Signal → 0.438 + Đệm SL riêng khung 1W (ATR) → 0.3 | 82.61 | 46.1% | 0.645 | 10.37 | 7.97 | 0.407 | 0.916 | -13.54 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Số TP tối đa → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 | 90.01 | 49.6% | 0.744 | 8.56 | 10.52 | 0.518 | 1.006 | -16.15 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Divergence (/100) → 12 + Số TP tối đa → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 112.14 | 50.7% | 0.79 | 7.73 | 14.51 | 0.501 | 1.103 | -10.82 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 90.09 | 49.3% | 0.617 | 8.52 | 10.57 | 0.442 | 0.812 | -12.33 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 | 112.7 | 53.1% | 0.767 | 7.87 | 14.32 | 0.635 | 0.912 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Mức RSI 30/70 → 0.875 | 117.94 | 51.3% | 0.746 | 8.69 | 13.57 | 0.58 | 0.946 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: BOS → 3 + Điểm vùng: Mức MACD → 1.13 | 114.55 | 51.4% | 0.785 | 7.9 | 14.5 | 0.591 | 1.006 | -9.66 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Trọng số phần Divergence (/100) → 9 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Biên mây Ichimoku → 1.35 | 100.01 | 38.7% | 0.391 | 16.23 | 6.16 | 0.371 | 0.409 | -0.49 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần Momentum (/100) → 25 + Đệm SL riêng khung 1D (ATR) → 0.3 | 92.18 | 43.8% | 0.524 | 12.61 | 7.31 | 0.574 | 0.478 | -5.6 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: EMA 200 → 3 + % chốt ở TP1 → 0.287 | 105.91 | 50% | 0.725 | 8.21 | 12.9 | 0.539 | 0.917 | -8.29 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 118.38 | 53.5% | 0.822 | 7.4 | 16 | 0.635 | 1.037 | -9.66 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: POC anchored → 2 | 77.51 | 45.4% | 0.476 | 10.12 | 7.66 | 0.429 | 0.519 | -9.4 |  |

### Vòng 689 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.3R, lời÷rủi ro 16.22

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + SL tối đa (% Entry) → 0.425 + Số TP tối đa → 2 + R:R tối thiểu riêng khung 1D → 2 | 107.3 | 46.2% | 0.627 | 9.1 | 11.79 | 0.608 | 0.646 | -7.94 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Fib sóng 4 → 1.56 + Coin phải mạnh hơn BTC trong N ngày → 14 | 94.2 | 49.6% | 0.742 | 8.33 | 11.31 | 0.691 | 0.804 | -16.13 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 68.74 | 45% | 0.631 | 9.22 | 7.46 | 0.395 | 0.879 | -6.45 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Divergence (/100) → 9 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Trọng số phần Elliott (/100) → 6 | 104.18 | 50.6% | 0.659 | 8.58 | 12.14 | 0.634 | 0.688 | -10.47 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 85.88 | 44.2% | 0.551 | 11.15 | 7.7 | 0.437 | 0.693 | -6.58 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Trọng số phần Entry (/100) → 28 | 118.49 | 52.7% | 0.812 | 7.43 | 15.95 | 0.629 | 1.021 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 28.01 | 58.8% | 0.183 | 5.75 | 4.87 | 0.211 | 0.158 | -10.55 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + % chốt ở TP1 → 0.287 + Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 130.22 | 38.1% | 0.486 | 19.23 | 6.77 | 0.28 | 0.674 | -12.09 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Trend (/100) → 19 | 109.67 | 51.7% | 0.746 | 7.83 | 14.01 | 0.648 | 0.843 | -10.7 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 96.6 | 47.8% | 0.721 | 9.13 | 10.58 | 0.436 | 0.974 | -10.7 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: BOS → 1 + R:R tối thiểu riêng khung 4H → 2 | 116.7 | 41.9% | 0.373 | 12.24 | 9.53 | 0.322 | 0.414 | -10.29 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Divergence (/100) → 9 | 110.98 | 41.2% | 0.355 | 12.62 | 8.79 | 0.322 | 0.381 | -10.29 |  |

### Vòng 688 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.31

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 | 34.38 | 57.6% | 0.187 | 5.36 | 6.41 | 0.226 | 0.153 | -10.82 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: MACD cắt lên Signal → 0.438 | 108.04 | 49.1% | 0.68 | 9.31 | 11.6 | 0.469 | 0.928 | -7.08 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 132.83 | 43.9% | 0.521 | 11.02 | 12.05 | 0.577 | 0.463 | -9.4 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Cộng thêm ngưỡng điểm khung 1D → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 111.9 | 52% | 0.736 | 7.91 | 14.15 | 0.567 | 0.934 | -8.34 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần SL (/100) → 9 | 114.16 | 52.1% | 0.793 | 7.83 | 14.58 | 0.62 | 0.986 | -9.66 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 146.63 | 38.9% | 0.533 | 17.26 | 8.5 | 0.338 | 0.721 | -12.22 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Số TP tối đa → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 75.13 | 46.2% | 0.569 | 9.47 | 7.93 | 0.429 | 0.728 | -8.96 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + R:R tối thiểu riêng khung 1D → 2 | 104.29 | 47.6% | 0.628 | 8.96 | 11.64 | 0.614 | 0.643 | -7.12 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: EMA 50 → 0.75 | 38.71 | 41.4% | 0.445 | 9.66 | 4.01 | 0.342 | 0.578 | -8.58 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: HVN anchored → 0.188 + Khung lớn phải tăng (trend ≥) → 0.425 + Coin phải mạnh hơn BTC trong N ngày → 14 | 82.5 | 48.7% | 0.73 | 8.05 | 10.25 | 0.526 | 0.969 | -15.14 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: EMA 200 → 1 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 101.07 | 49.1% | 0.628 | 9.23 | 10.95 | 0.55 | 0.724 | -4.67 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 110.9 | 48.9% | 0.821 | 8.15 | 13.61 | 0.619 | 1.06 | -8.91 |  |

### Vòng 687 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.55R, lời÷rủi ro 15.68

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 117.73 | 50.7% | 0.775 | 8.18 | 14.39 | 0.594 | 0.981 | -10.69 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm tối thiểu của vùng đặt SL → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 28.57 | 58.6% | 0.176 | 6.27 | 4.56 | 0.234 | 0.124 | -8.96 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.4 | 59.2% | 0.2 | 5.57 | 5.64 | 0.222 | 0.179 | -11.38 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Biên mây Ichimoku → 1.35 + Ngưỡng điểm vào kèo → 77 | 108.04 | 49.7% | 0.756 | 8.19 | 13.19 | 0.622 | 0.899 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: HVN cố định → 0.563 | 112.95 | 52.4% | 0.779 | 7.49 | 15.08 | 0.628 | 0.95 | -10 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần Elliott (/100) → 6 | 116.47 | 52.4% | 0.792 | 7.64 | 15.24 | 0.635 | 0.965 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 97.47 | 47.8% | 0.621 | 9.78 | 9.97 | 0.498 | 0.759 | -8.61 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Trọng số phần SL (/100) → 9 | 116.16 | 52.4% | 0.801 | 7.73 | 15.03 | 0.635 | 0.989 | -8.34 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cộng thêm ngưỡng điểm khung 1W → -1 + Ngưỡng điểm vào kèo → 77 | 108.69 | 50.7% | 0.755 | 7.86 | 13.83 | 0.622 | 0.903 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần R:R (/100) → 33 | 91.03 | 49% | 0.628 | 8.96 | 10.16 | 0.396 | 0.89 | -9.3 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Ngưỡng điểm vào kèo → 77 | 111.82 | 51.1% | 0.793 | 7.8 | 14.34 | 0.646 | 0.956 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: HVN cố định → 0.438 | 114.49 | 52.1% | 0.784 | 7.79 | 14.7 | 0.571 | 1.036 | -9.66 |  |

### Vòng 686 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.85

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Số TP tối đa → 2 + Điểm vùng: POC anchored → 4 | 116.38 | 51.4% | 0.786 | 7.72 | 15.08 | 0.606 | 0.972 | -4.48 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Mức MACD → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 113.16 | 51.3% | 0.754 | 8.1 | 13.97 | 0.608 | 0.917 | -8.34 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Momentum (/100) → 25 | 116.66 | 52.4% | 0.816 | 7.59 | 15.37 | 0.64 | 1.015 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 115 | 51.7% | 0.793 | 7.8 | 14.74 | 0.591 | 1.028 | -10.95 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: HVN anchored → 0.188 | 102.51 | 52.5% | 0.854 | 7.48 | 13.7 | 0.569 | 1.159 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + R:R tối thiểu riêng khung 1D → 2 + Xác nhận khung nhỏ (A2) → W | 104.1 | 39.5% | 0.337 | 17.09 | 6.09 | 0.286 | 0.382 | -12.85 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần Elliott (/100) → 6 | 106.21 | 49.7% | 0.723 | 8.25 | 12.87 | 0.553 | 0.925 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + SL tối đa (% Entry) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 103.54 | 51.7% | 0.704 | 8.21 | 12.61 | 0.639 | 0.776 | -8.88 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 103.14 | 52.4% | 0.711 | 7.78 | 13.26 | 0.637 | 0.798 | -9.46 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: MACD cắt lên Signal → 0.438 | 84.77 | 48% | 0.678 | 9.07 | 9.35 | 0.526 | 0.859 | -13.55 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + R:R tối thiểu riêng khung 4H → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 79.93 | 40.5% | 0.309 | 12.94 | 6.18 | 0.268 | 0.338 | -18.3 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Cổng Dow → CHẶT + Điểm vùng: HVN cố định → 0.563 | 76.03 | 51.8% | 0.691 | 6.93 | 10.97 | 0.289 | 1.014 | -10.75 |  |

### Vòng 685 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.59R, lời÷rủi ro 15.60

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Mức MACD → 0.875 + R:R tối thiểu riêng khung 1D → 2 | 105.42 | 45.9% | 0.62 | 9.1 | 11.58 | 0.615 | 0.625 | -7.92 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 32.34 | 57.9% | 0.203 | 5.87 | 5.51 | 0.224 | 0.184 | -9.03 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 30.18 | 58.6% | 0.192 | 5.88 | 5.13 | 0.207 | 0.178 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 41.47 | 42.5% | 0.477 | 9.35 | 4.44 | 0.372 | 0.606 | -6.21 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + R:R tối thiểu tới TP1 → 2.63 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 67.93 | 46.2% | 0.475 | 10.71 | 6.34 | 0.353 | 0.586 | -11.62 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 39.79 | 41.9% | 0.463 | 9.53 | 4.18 | 0.372 | 0.578 | -8.58 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Mức MACD → 1.13 | 115.94 | 51.4% | 0.783 | 7.75 | 14.96 | 0.58 | 1.01 | -11.87 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.96 | 58.6% | 0.191 | 5.9 | 5.08 | 0.252 | 0.134 | -10.49 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: EMA 200 → 3 | 69.87 | 45.5% | 0.635 | 8.71 | 8.02 | 0.388 | 0.901 | -5.43 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: POC anchored → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 68.06 | 44.9% | 0.536 | 10.03 | 6.79 | 0.391 | 0.693 | -8.99 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + % chốt ở TP1 → 0.287 | 118.24 | 53.5% | 0.821 | 7.59 | 15.58 | 0.632 | 1.039 | -9.64 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Ngưỡng điểm vào kèo → 74 | 96.42 | 48.3% | 0.639 | 8.99 | 10.73 | 0.54 | 0.741 | -10.7 |  |

### Vòng 684 — ngẫu nhiên nhiều thông số · mốc: tổng 113.92R, win 52.1%, rủi ro tụt vốn 8.07R, lời÷rủi ro 14.12

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Elliott (/100) → 6 | 114.86 | 51% | 0.751 | 8.22 | 13.97 | 0.605 | 0.915 | -10.24 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: EMA 21 → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng điểm phân kỳ dương ẩn → 3 | 96.86 | 47.1% | 0.702 | 8.73 | 11.1 | 0.482 | 0.935 | -10.51 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần SL (/100) → 7 | 113.27 | 51.4% | 0.798 | 7.76 | 14.6 | 0.596 | 1.023 | -8.65 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu tới TP1 → 2.63 | 66.64 | 45.3% | 0.701 | 9.18 | 7.26 | 0.418 | 1.004 | -7.48 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Break mây Ichimoku → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 83.36 | 39.6% | 0.458 | 11.74 | 7.1 | 0.548 | 0.374 | -5.99 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cộng thêm ngưỡng điểm khung 4H → -1 | 112.8 | 51.8% | 0.8 | 7.96 | 14.17 | 0.586 | 1.044 | -8.65 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Mức RSI 30/70 → 1.13 | 113.72 | 51.8% | 0.807 | 7.81 | 14.56 | 0.596 | 1.045 | -8.65 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cổng Dow → CHẶT | 74.07 | 53.7% | 0.686 | 6.59 | 11.24 | 0.47 | 0.865 | -9.52 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Trọng số phần SL (/100) → 9 + R:R tối thiểu riêng khung 1W → 2 | 103.58 | 50.4% | 0.735 | 8.43 | 12.29 | 0.644 | 0.819 | -9.69 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: EMA 200 → 1 + Điểm vùng: Break mây Ichimoku → 3 | 106.99 | 48.8% | 0.66 | 9.58 | 11.17 | 0.51 | 0.819 | -2.22 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Entry (/100) → 28 + Điểm vùng: POC volume profile cố định → 0.688 | 116.1 | 49.6% | 0.873 | 8.03 | 14.46 | 0.702 | 1.069 | -7.9 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 95.46 | 48.6% | 0.645 | 8.99 | 10.62 | 0.62 | 0.672 | -11.3 |  |

### Vòng 683 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.48R, lời÷rủi ro 15.83

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: EMA 50 → 0.75 | 115.92 | 53.5% | 0.816 | 7.32 | 15.84 | 0.621 | 1.029 | -9.66 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: BOS → 3 | 29.49 | 63.4% | 0.225 | 4.21 | 7 | 0.264 | 0.198 | -7.82 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Số TP tối đa → 2 + Điểm vùng: EMA 50 → 0.75 | 115.67 | 53.1% | 0.809 | 7.5 | 15.42 | 0.604 | 1.035 | -9.66 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: EMA 200 → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: HVN cố định → 0.438 | 77.51 | 44% | 0.461 | 11.86 | 6.54 | 0.393 | 0.522 | -11.62 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 89.77 | 45.8% | 0.541 | 9.86 | 9.1 | 0.408 | 0.674 | -10.47 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: HVN cố định → 0.438 | 115 | 51.7% | 0.793 | 7.88 | 14.59 | 0.591 | 1.028 | -10.95 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 116.47 | 52.4% | 0.792 | 7.51 | 15.51 | 0.635 | 0.965 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 74.39 | 39.8% | 0.329 | 13.71 | 5.43 | 0.266 | 0.391 | -9.87 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Số TP tối đa → 2 + Điểm vùng: HVN cố định → 0.438 | 115.66 | 51.7% | 0.809 | 7.65 | 15.12 | 0.622 | 1.021 | -9.66 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + R:R tối thiểu riêng khung 4H → 2 | 64.12 | 38.4% | 0.239 | 13.96 | 4.59 | 0.198 | 0.273 | -14.42 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Ngưỡng điểm vào kèo → 74 | 117.67 | 52.7% | 0.806 | 7.49 | 15.71 | 0.624 | 1.014 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Đệm SL riêng khung 1D (ATR) → 0.3 + Ngưỡng điểm vào kèo → 74 + Khung lớn phải tăng (trend ≥) → 0.375 | 113.47 | 46.5% | 0.66 | 10.33 | 10.98 | 0.651 | 0.667 | -7.38 |  |

### Vòng 682 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.67R, lời÷rủi ro 15.43

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 | 38.73 | 41.2% | 0.456 | 9.56 | 4.05 | 0.357 | 0.578 | -6.21 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Ngưỡng điểm vào kèo → 74 + Trọng số phần SL (/100) → 7 | 117.67 | 49.7% | 0.749 | 8.37 | 14.06 | 0.57 | 0.961 | -10.69 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Mức RSI 30/70 → 1.13 | 118.38 | 53.5% | 0.822 | 7.67 | 15.43 | 0.635 | 1.037 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 80.93 | 46% | 0.503 | 9.96 | 8.13 | 0.418 | 0.584 | -9.82 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 85.53 | 47.7% | 0.574 | 9.46 | 9.04 | 0.544 | 0.607 | -9.41 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 103.29 | 45.1% | 0.59 | 9.65 | 10.7 | 0.568 | 0.612 | -10.59 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Đệm SL riêng khung 1D (ATR) → 0.3 | 118.06 | 48.2% | 0.711 | 10.11 | 11.68 | 0.676 | 0.743 | -5.33 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: EMA 200 → 1 + R:R tối thiểu tới TP1 → 2.38 | 104.95 | 47.9% | 0.636 | 8.56 | 12.26 | 0.554 | 0.716 | -5.17 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Lệnh chờ hết hạn sau (nến) → 8 + Đệm SL riêng khung 1W (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 108.34 | 48.6% | 0.752 | 8.64 | 12.54 | 0.612 | 0.875 | -10.98 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + SL tối đa (% Entry) → 0.425 + Cộng thêm ngưỡng điểm khung 4H → 2 | 113.55 | 40.6% | 0.36 | 12.97 | 8.75 | 0.33 | 0.385 | -16.77 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: EMA 21 → 1.13 + Cộng điểm phân kỳ dương ẩn → 3 | 111.66 | 49% | 0.72 | 8.47 | 13.18 | 0.578 | 0.88 | -11.04 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: EMA 200 → 3 | 107.17 | 50.7% | 0.744 | 7.94 | 13.5 | 0.542 | 0.958 | -10.91 |  |

### Vòng 681 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.55R, lời÷rủi ro 15.68

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Biên mây Ichimoku → 1.05 | 28.4 | 58.9% | 0.174 | 8.31 | 3.42 | 0.234 | 0.13 | -9.03 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Lệnh chờ hết hạn sau (nến) → 8 + Coin phải mạnh hơn BTC trong N ngày → 14 | 87.86 | 49.6% | 0.692 | 8.42 | 10.43 | 0.547 | 0.87 | -19.01 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 105.02 | 49.7% | 0.678 | 9.15 | 11.48 | 0.448 | 0.949 | -7.08 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Trọng số phần Momentum (/100) → 21 | 117.63 | 53.1% | 0.811 | 7.41 | 15.87 | 0.635 | 1.011 | -8.34 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 70.7 | 45.8% | 0.54 | 9.76 | 7.24 | 0.377 | 0.72 | -7.54 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + R:R tối thiểu tới TP1 → 2.63 | 82.26 | 46.2% | 0.633 | 10.45 | 7.87 | 0.435 | 0.843 | -10.12 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Mức RSI 30/70 → 1.13 | 151.74 | 38.8% | 0.531 | 18.24 | 8.32 | 0.344 | 0.715 | -11.22 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Xác nhận khung nhỏ (A2) → W + Số TP tối đa → 2 | 111.62 | 39.6% | 0.429 | 15.36 | 7.27 | 0.43 | 0.428 | -3.52 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Xác nhận khung nhỏ (A2) → W + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Cộng thêm ngưỡng điểm khung 1W → 2 | 76.21 | 29.8% | 0.186 | 34.57 | 2.2 | 0.164 | 0.204 | -24.41 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần Trend (/100) → 19 + Trọng số phần Divergence (/100) → 9 | 84.11 | 46% | 0.522 | 9.78 | 8.6 | 0.458 | 0.584 | -10.09 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Fib sóng 4 → 1.56 | 116.98 | 53.1% | 0.796 | 7.66 | 15.27 | 0.592 | 1.039 | -9.64 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 1W → -1 | 63.53 | 44.3% | 0.552 | 10.19 | 6.23 | 0.36 | 0.741 | -7.49 |  |
