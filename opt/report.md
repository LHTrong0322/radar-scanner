# Tối ưu tự động (chạy liên tục) — vòng 592

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 6759 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.3% | 92.53R | 0.571 | 5.74R | 9.96R | 9.29 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 144 | 53.5% | 116.9R | 0.812 | 6.15R | 7.53R | 15.52 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 106 | 54.7% | 89.75R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.3% | 92.53R | 9.96R | 9.29 | 32 | 12.5% | -14.03R |
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

### Vòng 592 — ngẫu nhiên nhiều thông số · mốc: tổng 116.9R, win 53.5%, rủi ro tụt vốn 7.53R, lời÷rủi ro 15.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Break mây Ichimoku → 1 | 64.49 | 44.4% | 0.403 | 11.18 | 5.77 | 0.353 | 0.455 | -11.78 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Trọng số phần Trend (/100) → 12 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 99.29 | 49% | 0.658 | 8.81 | 11.27 | 0.53 | 0.794 | -8.63 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Momentum (/100) → 21 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 67.58 | 46.1% | 0.588 | 9.93 | 6.81 | 0.393 | 0.831 | -7.06 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 101.65 | 49% | 0.656 | 9.59 | 10.6 | 0.519 | 0.822 | -6.09 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + SL tối đa (% Entry) → 0.425 | 108.74 | 46.3% | 0.663 | 10.66 | 10.2 | 0.67 | 0.656 | -5.33 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần R:R (/100) → 33 | 98.94 | 49.3% | 0.66 | 8.47 | 11.68 | 0.517 | 0.822 | -9.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Momentum (/100) → 21 + Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần R:R (/100) → 33 | 100.94 | 46.2% | 0.647 | 10.51 | 9.6 | 0.653 | 0.641 | -3.24 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: HVN anchored → 0.188 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm tối thiểu của vùng đặt SL → 2 | 110.57 | 52.3% | 0.742 | 8.14 | 13.58 | 0.624 | 0.872 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 112.79 | 51.7% | 0.767 | 7.94 | 14.21 | 0.571 | 0.995 | -9.66 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Khung lớn phải tăng (trend ≥) → 0.425 + Xác nhận khung nhỏ (A2) → W | 78.19 | 35.8% | 0.295 | 18.81 | 4.16 | 0.308 | 0.281 | -7.74 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần SL (/100) → 9 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 91.97 | 45.7% | 0.657 | 9.66 | 9.52 | 0.409 | 0.898 | -11.67 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 58.91 | 40.9% | 0.512 | 11.58 | 5.09 | 0.343 | 0.657 | -4.74 |  |

### Vòng 591 — ngẫu nhiên nhiều thông số · mốc: tổng 128.46R, win 53.8%, rủi ro tụt vốn 7.4R, lời÷rủi ro 17.36

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Fib sóng 4 → 0.938 | 109.78 | 50.7% | 0.773 | 7.66 | 14.33 | 0.65 | 0.915 | -11.83 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 1D → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + SL tối đa (% Entry) → 0.425 | 122.03 | 41.5% | 0.59 | 12.47 | 9.79 | 0.74 | 0.465 | -6.83 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 | 115.24 | 47.6% | 0.694 | 9.69 | 11.89 | 0.65 | 0.735 | -6.35 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 54.45 | 31.1% | 0.332 | 21.01 | 2.59 | 0.169 | 0.491 | 3.43 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: POC volume profile cố định → 0.813 | 115.49 | 51.3% | 0.74 | 8.43 | 13.7 | 0.638 | 0.872 | -4.67 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Xác nhận khung nhỏ (A2) → W + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 86.83 | 36.7% | 0.329 | 19.21 | 4.52 | 0.361 | 0.299 | -7.12 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: MACD cắt lên Signal → 0.563 | 127.16 | 53.4% | 0.859 | 7.55 | 16.84 | 0.729 | 1.016 | -9.64 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 33.16 | 58.4% | 0.206 | 5.99 | 5.54 | 0.229 | 0.184 | -11.38 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.563 + Trọng số phần Entry (/100) → 28 + Điểm vùng: EMA 21 → 1.13 | 109.26 | 47% | 0.65 | 10.24 | 10.67 | 0.654 | 0.647 | -6.69 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 1W (ATR) → 0.3 | 83.27 | 46.3% | 0.677 | 9.56 | 8.71 | 0.477 | 0.909 | -16.12 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Entry (/100) → 28 + Ngưỡng điểm vào kèo → 77 | 173.2 | 39.1% | 0.583 | 18.34 | 9.44 | 0.492 | 0.68 | -18.73 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Ngưỡng điểm vào kèo → 74 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 125.55 | 49.4% | 0.795 | 8.57 | 14.65 | 0.774 | 0.819 | -10.24 |  |

### Vòng 590 — ngẫu nhiên nhiều thông số · mốc: tổng 116.9R, win 53.5%, rủi ro tụt vốn 7.53R, lời÷rủi ro 15.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + R:R tối thiểu riêng khung 1W → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 108.65 | 52.1% | 0.744 | 7.66 | 14.18 | 0.648 | 0.84 | -10.7 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 93.95 | 50.4% | 0.803 | 7.77 | 12.09 | 0.535 | 1.085 | -10.63 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Khung lớn phải tăng (trend ≥) → 0.425 | 89.96 | 45.8% | 0.58 | 9.01 | 9.98 | 0.47 | 0.69 | -11.26 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 113.87 | 47% | 0.678 | 10.42 | 10.93 | 0.635 | 0.719 | -6.35 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Trọng số phần SL (/100) → 9 + R:R tối thiểu riêng khung 4H → 2 | 104.43 | 40.6% | 0.339 | 12.54 | 8.33 | 0.342 | 0.337 | -9.5 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.55 | 58% | 0.188 | 5.8 | 5.09 | 0.219 | 0.159 | -11.38 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 130.48 | 43.6% | 0.508 | 11.18 | 11.67 | 0.588 | 0.423 | -7.71 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: EMA 200 → 3 | 92.31 | 47.9% | 0.65 | 8.7 | 10.61 | 0.408 | 0.906 | -10.47 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 30.06 | 49.5% | 0.092 | 8.11 | 3.71 | 0.095 | 0.091 | -13.94 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: EMA 50 → 1.13 + R:R tối thiểu riêng khung 4H → 2 | 105.44 | 40.5% | 0.347 | 12.7 | 8.3 | 0.336 | 0.356 | -8.22 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Fib sóng 4 → 1.56 | 68.31 | 36.9% | 0.268 | 20.55 | 3.32 | 0.3 | 0.235 | -6.02 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 115.32 | 47.2% | 0.801 | 9.19 | 12.55 | 0.581 | 1.047 | -9.95 |  |

### Vòng 589 — ngẫu nhiên nhiều thông số · mốc: tổng 115.9R, win 53.1%, rủi ro tụt vốn 7.48R, lời÷rủi ro 15.49

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: HVN anchored → 0.313 | 111.66 | 51.4% | 0.765 | 8.22 | 13.58 | 0.591 | 0.964 | -9.66 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu tới TP1 → 2.63 + Cổng Dow → CHẶT | 67.09 | 51.7% | 0.754 | 6.98 | 9.61 | 0.282 | 1.105 | -10.86 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Lệnh chờ hết hạn sau (nến) → 6 | 92.94 | 49.3% | 0.664 | 8.89 | 10.45 | 0.514 | 0.837 | -5.69 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 93.13 | 49.3% | 0.621 | 8.93 | 10.43 | 0.547 | 0.699 | -10.37 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: MACD cắt lên Signal → 0.563 | 113.44 | 53.1% | 0.793 | 7.64 | 14.85 | 0.621 | 0.978 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Mức MACD → 1.13 | 111.1 | 46.1% | 0.665 | 10.65 | 10.43 | 0.629 | 0.699 | -5.33 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 82.8 | 46.1% | 0.502 | 10.06 | 8.23 | 0.396 | 0.604 | -9.83 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 101.9 | 51.4% | 0.708 | 8.01 | 12.72 | 0.589 | 0.84 | -11.78 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu riêng khung 4H → 2 | 71.01 | 38.8% | 0.293 | 14.89 | 4.77 | 0.32 | 0.268 | -9.03 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Xác nhận khung nhỏ (A2) → W | 81.95 | 39% | 0.329 | 16.78 | 4.88 | 0.304 | 0.352 | -5.24 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Trọng số phần Entry (/100) → 28 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 113.3 | 52.7% | 0.766 | 7.78 | 14.56 | 0.593 | 0.958 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cộng điểm phân kỳ dương ẩn → 2.25 + R:R tối thiểu tới TP1 → 2.38 | 82.73 | 45.9% | 0.527 | 9.47 | 8.74 | 0.488 | 0.565 | -11.03 |  |

### Vòng 588 — ngẫu nhiên nhiều thông số · mốc: tổng 127.45R, win 53.4%, rủi ro tụt vốn 7.55R, lời÷rủi ro 16.88

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 106.73 | 48.3% | 0.707 | 9.19 | 11.61 | 0.702 | 0.712 | -12.42 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib sóng 4 → 0.938 | 82.06 | 48.5% | 0.846 | 8.35 | 9.83 | 0.708 | 0.992 | -14.31 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm tối thiểu của vùng đặt SL → 2 | 111.25 | 52% | 0.742 | 8.51 | 13.07 | 0.732 | 0.752 | -11.78 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Momentum (/100) → 21 | 32.5 | 57.5% | 0.203 | 5.91 | 5.5 | 0.294 | 0.118 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: EMA 50 → 1.13 | 118.28 | 52% | 0.789 | 8 | 14.79 | 0.731 | 0.856 | -8.64 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: POC anchored → 4 + Điểm vùng: BOS → 1 | 119.94 | 52% | 0.789 | 7.97 | 15.05 | 0.661 | 0.921 | -4.48 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Mức MACD → 1.13 | 120.13 | 50.7% | 0.812 | 8.12 | 14.79 | 0.691 | 0.95 | -9.48 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: POC anchored → 4 | 116.2 | 51% | 0.77 | 8.35 | 13.92 | 0.626 | 0.912 | -4.48 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 104.25 | 45.5% | 0.592 | 9.36 | 11.14 | 0.584 | 0.6 | -7.92 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Elliott (/100) → 10 | 27.37 | 39.5% | 0.318 | 11.05 | 2.48 | 0.214 | 0.457 | -8.58 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 127.45 | 53.4% | 0.873 | 7.55 | 16.88 | 0.775 | 0.986 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 124.84 | 50.7% | 0.843 | 7.8 | 16.01 | 0.808 | 0.879 | -10 |  |

### Vòng 587 — ngẫu nhiên nhiều thông số · mốc: tổng 127.45R, win 53.4%, rủi ro tụt vốn 7.47R, lời÷rủi ro 17.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Trọng số phần Trend (/100) → 12 + Điểm vùng: EMA 50 → 1.13 | 120.08 | 50.7% | 0.834 | 8.01 | 14.99 | 0.742 | 0.942 | -8.64 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần Divergence (/100) → 9 | 123.63 | 49.1% | 0.778 | 8.82 | 14.02 | 0.769 | 0.787 | -9.22 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Cộng thêm ngưỡng điểm khung 1D → 3 | 124.57 | 52% | 0.842 | 7.75 | 16.07 | 0.734 | 0.965 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Trọng số phần SL (/100) → 7 + Trọng số phần Momentum (/100) → 21 | 127 | 53.1% | 0.864 | 7.41 | 17.14 | 0.775 | 0.965 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 119.5 | 44.6% | 0.517 | 11.07 | 10.79 | 0.569 | 0.463 | -10.24 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Đệm SL riêng khung 1W (ATR) → 0.3 + % chốt ở TP1 → 0.307 + Điểm vùng: Break mây Ichimoku → 3 | 105.53 | 47.2% | 0.655 | 9.91 | 10.65 | 0.513 | 0.796 | -9.26 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + SL tối đa (% Entry) → 0.425 | 126.44 | 53.1% | 0.86 | 7.5 | 16.86 | 0.775 | 0.957 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần SL (/100) → 7 | 74.02 | 44.4% | 0.685 | 9.48 | 7.81 | 0.62 | 0.761 | -6.48 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Break mây Ichimoku → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 | 112.58 | 48% | 0.643 | 10.41 | 10.81 | 0.643 | 0.644 | -6.04 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Khung lớn phải tăng (trend ≥) → 0.425 | 124.5 | 52.8% | 0.877 | 7.37 | 16.89 | 0.75 | 1.023 | -8.67 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần Divergence (/100) → 9 + Số TP tối đa → 2 | 123.89 | 52.7% | 0.837 | 7.54 | 16.43 | 0.736 | 0.949 | -8.36 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: EMA 50 → 1.13 | 108.18 | 49.6% | 0.767 | 8.29 | 13.05 | 0.629 | 0.929 | -10.49 |  |

### Vòng 586 — ngẫu nhiên nhiều thông số · mốc: tổng 127.45R, win 53.4%, rủi ro tụt vốn 7.6R, lời÷rủi ro 16.77

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 126.33 | 53.1% | 0.859 | 7.49 | 16.87 | 0.752 | 0.984 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + R:R tối thiểu tới TP1 → 2.38 | 93.85 | 46.9% | 0.587 | 9.01 | 10.42 | 0.525 | 0.647 | -11.23 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Mức RSI 30/70 → 1.13 | 76.68 | 44.1% | 0.536 | 10.14 | 7.56 | 0.451 | 0.626 | -5.78 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.39 | 57.3% | 0.2 | 5.86 | 5.36 | 0.264 | 0.141 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 200 → 3 | 98.48 | 49% | 0.67 | 8.77 | 11.23 | 0.69 | 0.649 | -9.43 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Trọng số phần Momentum (/100) → 25 | 125.73 | 52.4% | 0.867 | 7.51 | 16.74 | 0.782 | 0.964 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: EMA 50 → 0.75 + Đệm SL riêng khung 1W (ATR) → 0.3 | 94.66 | 44.2% | 0.644 | 10.17 | 9.31 | 0.491 | 0.799 | -7.83 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Trọng số phần Elliott (/100) → 6 + Trọng số phần Momentum (/100) → 25 | 127 | 53.1% | 0.864 | 7.43 | 17.09 | 0.775 | 0.965 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức MACD → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 60.53 | 44.6% | 0.54 | 10.56 | 5.73 | 0.437 | 0.651 | -7.52 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.438 | 113.78 | 47.3% | 0.681 | 10.1 | 11.27 | 0.654 | 0.706 | -6.02 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Mức MACD → 1.13 | 121.81 | 51.4% | 0.834 | 7.98 | 15.26 | 0.723 | 0.958 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 125.03 | 51% | 0.851 | 7.77 | 16.09 | 0.821 | 0.879 | -10 |  |

### Vòng 585 — ngẫu nhiên nhiều thông số · mốc: tổng 127.45R, win 53.4%, rủi ro tụt vốn 7.55R, lời÷rủi ro 16.88

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 119.88 | 50.7% | 0.821 | 8.14 | 14.73 | 0.736 | 0.921 | -8.64 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 34.9 | 57.4% | 0.215 | 6.02 | 5.8 | 0.287 | 0.149 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Break mây Ichimoku → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 89.16 | 46.4% | 0.583 | 10.05 | 8.87 | 0.602 | 0.562 | -10.51 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cổng Dow → TẮT | 125.2 | 42.4% | 0.617 | 12.5 | 10.02 | 0.65 | 0.582 | -14.93 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Trend (/100) → 12 | 98.69 | 48.2% | 0.7 | 8.96 | 11.01 | 0.588 | 0.804 | -11.98 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Break mây Ichimoku → 1 | 121.18 | 51.4% | 0.819 | 7.86 | 15.42 | 0.775 | 0.866 | -10.57 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 125.03 | 51% | 0.851 | 7.95 | 15.73 | 0.821 | 0.879 | -10 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Đệm SL riêng khung 4H (ATR) → 0.3 | 183.18 | 39.7% | 0.617 | 17.46 | 10.49 | 0.514 | 0.722 | -14.06 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 113.17 | 43.9% | 0.605 | 12.44 | 9.1 | 0.675 | 0.537 | -3.7 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Break mây Ichimoku → 3 | 113.72 | 50.3% | 0.657 | 9.45 | 12.03 | 0.576 | 0.754 | -9.4 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần SL (/100) → 7 | 96.39 | 47.1% | 0.698 | 8.83 | 10.92 | 0.451 | 0.926 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 166.67 | 38.9% | 0.563 | 17.88 | 9.32 | 0.468 | 0.664 | -12.61 |  |

### Vòng 584 — ngẫu nhiên nhiều thông số · mốc: tổng 127.45R, win 53.4%, rủi ro tụt vốn 7.52R, lời÷rủi ro 16.95

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: HVN anchored → 0.313 | 28.64 | 56.7% | 0.182 | 6.13 | 4.67 | 0.227 | 0.141 | -11.38 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + R:R tối thiểu tới TP1 → 2.38 | 97.41 | 47.5% | 0.601 | 8.94 | 10.9 | 0.548 | 0.654 | -11.23 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Khung lớn phải tăng (trend ≥) → 0.375 + Đệm SL riêng khung 4H (ATR) → 0.3 | 96.74 | 35% | 0.313 | 23.45 | 4.13 | 0.224 | 0.385 | -5.85 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + % chốt ở TP1 → 0.287 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Break mây Ichimoku → 3 | 108.19 | 46.8% | 0.685 | 9.78 | 11.06 | 0.589 | 0.799 | -7.46 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Fib sóng 4 → 0.938 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 30.76 | 57.1% | 0.2 | 5.76 | 5.34 | 0.266 | 0.14 | -11.38 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 96.38 | 50.8% | 0.817 | 7.85 | 12.28 | 0.724 | 0.927 | -16.13 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 113.39 | 50.7% | 0.756 | 8.32 | 13.63 | 0.663 | 0.865 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 126.11 | 53.4% | 0.864 | 7.55 | 16.7 | 0.774 | 0.967 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 120.89 | 51% | 0.834 | 7.91 | 15.28 | 0.758 | 0.921 | -9.93 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Trọng số phần Trend (/100) → 12 + Trọng số phần Elliott (/100) → 10 + Đệm SL riêng khung 1D (ATR) → 0.3 | 103.01 | 45.4% | 0.632 | 11.06 | 9.31 | 0.678 | 0.59 | -6.35 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: POC anchored → 4 + Cộng thêm ngưỡng điểm khung 1D → 5 | 94.54 | 38.4% | 0.366 | 16.87 | 5.6 | 0.387 | 0.349 | -3.32 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Đệm SL riêng khung 1D (ATR) → 0.3 | 112.77 | 44.2% | 0.484 | 12.44 | 9.07 | 0.55 | 0.418 | -9.18 |  |

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
