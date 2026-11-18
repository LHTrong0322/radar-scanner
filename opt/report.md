# Tối ưu tự động (chạy liên tục) — vòng 732

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 8439 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 93.37R | 0.573 | 5.74R | 10.02R | 9.32 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 144 | 53.5% | 118.41R | 0.822 | 5.09R | 7.23R | 16.38 | 27 | 18.5% | -8.63R | -0.32 | 9.25R |

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
| Bot thật | 163 | 46% | 93.37R | 10.02R | 9.32 | 31 | 12.9% | -13R |
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

### Vòng 732 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.38

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: POC anchored → 4 | 116.89 | 52% | 0.779 | 7.78 | 15.02 | 0.596 | 0.967 | -5.76 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Cổng Dow → CHẶT + Trọng số phần R:R (/100) → 33 | 82.38 | 51.8% | 0.723 | 7.29 | 11.3 | 0.283 | 1.118 | -10.72 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + SL tối đa (% Entry) → 0.425 + Điểm vùng: HVN cố định → 0.438 | 114.18 | 51.7% | 0.777 | 7.89 | 14.47 | 0.592 | 0.986 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm tối thiểu của vùng đặt SL → 4 + Khung lớn phải tăng (trend ≥) → 0.375 + R:R tối thiểu riêng khung 1D → 2 | 106.89 | 43% | 0.554 | 10.24 | 10.44 | 0.537 | 0.569 | -5.89 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: EMA 200 → 1 | 110.89 | 52.2% | 0.706 | 8.58 | 12.92 | 0.625 | 0.804 | -2.86 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Biên mây Ichimoku → 1.35 | 114.18 | 51.7% | 0.777 | 8.01 | 14.25 | 0.592 | 0.986 | -7.61 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + R:R tối thiểu riêng khung 1W → 2 + Điểm tối thiểu của vùng đặt SL → 4 | 108.43 | 51% | 0.738 | 7.71 | 14.06 | 0.655 | 0.816 | -9.67 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Break mây Ichimoku → 1 | 127.2 | 41.1% | 0.446 | 15.26 | 8.34 | 0.438 | 0.455 | -4.28 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.188 + Trọng số phần Momentum (/100) → 21 | 96.65 | 47.8% | 0.721 | 9.21 | 10.49 | 0.437 | 0.974 | -9.68 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + R:R tối thiểu riêng khung 1W → 2 | 109.99 | 50.3% | 0.748 | 8.15 | 13.5 | 0.584 | 0.906 | -9.53 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: POC anchored → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 1D → 3 | 75.46 | 40.5% | 0.463 | 12.8 | 5.9 | 0.535 | 0.387 | -9.89 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Mức RSI 30/70 → 0.875 | 99.28 | 46.8% | 0.636 | 9.54 | 10.41 | 0.505 | 0.806 | -9.16 |  |

### Vòng 731 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.35R, lời÷rủi ro 16.11

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 112.99 | 52.4% | 0.779 | 7.47 | 15.13 | 0.628 | 0.95 | -8.97 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 23.13 | 57.3% | 0.147 | 6.69 | 3.46 | 0.19 | 0.109 | -10.38 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Số TP tối đa → 2 + Điểm vùng: Fib sóng 4 → 0.938 | 104.75 | 52.4% | 0.713 | 7.89 | 13.28 | 0.628 | 0.806 | -8.43 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: MACD cắt lên Signal → 0.438 | 102.77 | 48.7% | 0.685 | 9.57 | 10.74 | 0.49 | 0.908 | -9.31 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: BOS → 1 + Trọng số phần R:R (/100) → 33 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 76.9 | 45.9% | 0.693 | 9.14 | 8.41 | 0.434 | 0.965 | -6.51 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: EMA 200 → 1 | 122.19 | 51.4% | 0.873 | 7.82 | 15.63 | 0.747 | 1.035 | -5.54 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Ngưỡng điểm vào kèo → 77 + Khung lớn phải tăng (trend ≥) → 0.425 | 98.66 | 48.2% | 0.72 | 8.06 | 12.24 | 0.515 | 0.934 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Mức MACD → 0.875 + Trọng số phần SL (/100) → 7 + Điểm vùng: Mức RSI 30/70 → 0.875 | 118.96 | 49.1% | 0.704 | 9.83 | 12.1 | 0.7 | 0.707 | -4.67 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 58.12 | 34.7% | 0.24 | 21.52 | 2.7 | 0.213 | 0.266 | -2.21 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần SL (/100) → 7 | 116.87 | 52.4% | 0.795 | 7.6 | 15.38 | 0.622 | 0.991 | -7.3 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Trend (/100) → 19 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 35.01 | 53.1% | 0.135 | 13.64 | 2.57 | 0.087 | 0.173 | -20.33 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: EMA 21 → 1.13 + Xác nhận khung nhỏ (A2) → W | 100.28 | 38.8% | 0.393 | 15.97 | 6.28 | 0.363 | 0.423 | -3.15 |  |

### Vòng 730 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.08

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 117.29 | 49.3% | 0.772 | 8.39 | 13.98 | 0.691 | 0.866 | -11.53 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib sóng 4 → 1.56 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 120.77 | 50% | 0.755 | 8.54 | 14.14 | 0.596 | 0.944 | -10.69 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 105.25 | 50.3% | 0.697 | 9.03 | 11.66 | 0.523 | 0.904 | -7.08 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + SL tối đa (% Entry) → 0.425 + Điểm vùng: POC anchored → 4 | 112.02 | 50.3% | 0.762 | 8.05 | 13.92 | 0.629 | 0.893 | -4.48 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Mức RSI 30/70 → 1.13 | 94.6 | 50.4% | 0.782 | 7.74 | 12.22 | 0.54 | 1.036 | -12.7 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 102.48 | 49.3% | 0.674 | 9.17 | 11.18 | 0.483 | 0.904 | -7.08 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 103.47 | 49% | 0.714 | 8.44 | 12.26 | 0.471 | 0.966 | -9.87 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Divergence (/100) → 9 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 105.71 | 51.4% | 0.714 | 8.01 | 13.2 | 0.543 | 0.916 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 21 → 1.13 | 121.64 | 50% | 0.77 | 8.29 | 14.67 | 0.747 | 0.797 | -10.58 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 109.37 | 47.1% | 0.629 | 8.83 | 12.39 | 0.625 | 0.632 | -10.98 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Đệm SL riêng khung 1D (ATR) → 0.3 | 108.43 | 47% | 0.661 | 10.37 | 10.46 | 0.672 | 0.651 | -6.35 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 114.83 | 50.7% | 0.786 | 8.03 | 14.3 | 0.649 | 0.924 | -10 |  |

### Vòng 729 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.43R, lời÷rủi ro 15.93

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Cộng thêm ngưỡng điểm khung 1W → 2 | 117.75 | 52.8% | 0.818 | 7.44 | 15.83 | 0.641 | 1.015 | -9.66 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 17.45 | 57.4% | 0.135 | 6.97 | 2.5 | 0.157 | 0.114 | -11.66 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: HVN cố định → 0.563 | 99.8 | 51.5% | 0.756 | 7.81 | 12.78 | 0.607 | 0.93 | -8.27 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Số TP tối đa → 2 | 112.92 | 46.9% | 0.645 | 8.84 | 12.77 | 0.61 | 0.678 | -7.92 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Biên mây Ichimoku → 1.05 | 107.86 | 52.4% | 0.744 | 7.7 | 14.01 | 0.589 | 0.914 | -10.49 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu riêng khung 4H → 2 + SL tối đa (% Entry) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 107.66 | 41.6% | 0.34 | 15 | 7.18 | 0.396 | 0.296 | -8.47 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Biên mây Ichimoku → 1.05 + Khung lớn phải tăng (trend ≥) → 0.375 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 68.78 | 47.3% | 0.625 | 8.78 | 7.83 | 0.473 | 0.789 | -7.31 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Số TP tối đa → 2 + Điểm vùng: POC anchored → 4 | 116.58 | 51.7% | 0.793 | 7.89 | 14.78 | 0.617 | 0.972 | -4.48 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 4H → 2 | 76.16 | 40.1% | 0.336 | 13.78 | 5.53 | 0.279 | 0.391 | -8.85 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức RSI 30/70 → 0.875 | 116.02 | 50% | 0.773 | 8.52 | 13.62 | 0.564 | 1.047 | -8.91 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Cộng thêm ngưỡng điểm khung 1W → -1 | 116.92 | 52.7% | 0.801 | 7.76 | 15.07 | 0.635 | 0.986 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Cộng điểm phân kỳ dương ẩn → 2.25 | 118.38 | 53.5% | 0.822 | 7.43 | 15.93 | 0.635 | 1.037 | -9.66 |  |

### Vòng 728 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.08

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 131.23 | 45.1% | 0.563 | 11.2 | 11.72 | 0.519 | 0.61 | -10.58 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib sóng 4 → 0.938 + Cộng thêm ngưỡng điểm khung 1D → 5 | 105.46 | 39.1% | 0.417 | 15.96 | 6.61 | 0.366 | 0.464 | -3.74 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng thêm ngưỡng điểm khung 4H → -1 + Cộng điểm phân kỳ dương ẩn → 3 | 103.52 | 51.7% | 0.714 | 8.35 | 12.4 | 0.634 | 0.802 | -8.88 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: EMA 200 → 3 + Lệnh chờ hết hạn sau (nến) → 6 | 87.94 | 47.7% | 0.666 | 8.47 | 10.38 | 0.516 | 0.826 | -9.28 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Break mây Ichimoku → 1 | 103.56 | 48.6% | 0.7 | 8.62 | 12.01 | 0.534 | 0.885 | -9.35 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: HVN anchored → 0.188 | 118.38 | 53.5% | 0.822 | 7.36 | 16.08 | 0.635 | 1.037 | -9.66 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần R:R (/100) → 28 + Xác nhận khung nhỏ (A2) → W | 100.01 | 38.9% | 0.377 | 16.17 | 6.18 | 0.389 | 0.367 | -2.08 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu tới TP1 → 2.63 | 95.74 | 49.6% | 0.778 | 8.89 | 10.77 | 0.573 | 0.95 | -13.84 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: POC anchored → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 49.97 | 40.3% | 0.42 | 13.13 | 3.81 | 0.227 | 0.58 | -4.73 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Đệm SL riêng khung 4H (ATR) → 0.3 | 79.15 | 33.6% | 0.283 | 24 | 3.3 | 0.2 | 0.364 | -13.51 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Fib sóng 4 → 0.938 | 98.62 | 49.6% | 0.72 | 7.89 | 12.5 | 0.438 | 1.023 | -11.51 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Số TP tối đa → 2 + Trọng số phần Entry (/100) → 28 | 119.14 | 53.5% | 0.827 | 7.36 | 16.19 | 0.64 | 1.043 | -9.66 |  |

### Vòng 727 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.13

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Cộng thêm ngưỡng điểm khung 4H → 2 | 110.97 | 51.1% | 0.787 | 7.84 | 14.15 | 0.628 | 0.968 | -9.66 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: BOS → 1 | 31.08 | 58.9% | 0.197 | 5.61 | 5.54 | 0.218 | 0.176 | -11.38 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 102.96 | 48% | 0.677 | 8.93 | 11.53 | 0.55 | 0.805 | -13.02 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: BOS → 3 | 67.23 | 48.9% | 0.764 | 7.95 | 8.46 | 0.502 | 1.051 | -12.95 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Mức MACD → 0.875 + Trọng số phần Entry (/100) → 28 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 124.3 | 50.3% | 0.744 | 8.32 | 14.94 | 0.769 | 0.713 | -6.18 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 114.36 | 52.4% | 0.789 | 7.67 | 14.91 | 0.604 | 0.992 | -8.34 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 118.38 | 53.5% | 0.822 | 7.34 | 16.13 | 0.635 | 1.037 | -9.66 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 4H (ATR) → 0.3 + Xác nhận khung nhỏ (A2) → W | 38.51 | 29.1% | 0.105 | 40.62 | 0.95 | 0.083 | 0.122 | -35.53 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Vùng RSI 45–55 → 0.875 + R:R tối thiểu riêng khung 1W → 2 | 106.13 | 49.3% | 0.727 | 8.24 | 12.88 | 0.616 | 0.832 | -10 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Cổng Dow → CHẶT + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 58.69 | 51.8% | 0.69 | 7.07 | 8.3 | 0.259 | 1.093 | -7.84 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Số TP tối đa → 2 + Trọng số phần SL (/100) → 9 | 36.07 | 41.2% | 0.424 | 9.73 | 3.71 | 0.297 | 0.582 | -8.58 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: EMA 21 → 1.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 103.77 | 47.7% | 0.678 | 8.73 | 11.89 | 0.611 | 0.75 | -12.61 |  |

### Vòng 726 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Trọng số phần Elliott (/100) → 6 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 77.93 | 44.8% | 0.478 | 10.51 | 7.41 | 0.372 | 0.586 | -10.09 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Lệnh chờ hết hạn sau (nến) → 8 | 112.78 | 51% | 0.718 | 8.07 | 13.98 | 0.555 | 0.911 | -11.25 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: EMA 50 → 0.75 + R:R tối thiểu riêng khung 1D → 2 | 103.57 | 45.9% | 0.609 | 8.91 | 11.62 | 0.607 | 0.611 | -7.92 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Trend (/100) → 19 + R:R tối thiểu riêng khung 4H → 2 + Số TP tối đa → 2 | 118.51 | 41.6% | 0.374 | 12.29 | 9.64 | 0.326 | 0.413 | -10.46 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Số TP tối đa → 2 + Xác nhận khung nhỏ (A2) → W + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 100.13 | 39% | 0.394 | 15.97 | 6.27 | 0.346 | 0.439 | -2.14 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 | 101.04 | 52.1% | 0.692 | 7.68 | 13.16 | 0.629 | 0.752 | -12.82 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.438 | 126.85 | 37.2% | 0.437 | 20.53 | 6.18 | 0.234 | 0.643 | -14.31 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + R:R tối thiểu riêng khung 1W → 2 | 98.93 | 49.3% | 0.678 | 8.43 | 11.74 | 0.55 | 0.795 | -9.65 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cổng Dow → TẮT + Cộng thêm ngưỡng điểm khung 1D → 3 | 138.17 | 44% | 0.634 | 11.13 | 12.41 | 0.566 | 0.704 | -18.06 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Mức MACD → 0.875 | 110.69 | 51.8% | 0.796 | 7.77 | 14.25 | 0.626 | 0.985 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Cổng Dow → TẮT + Cộng thêm ngưỡng điểm khung 1D → 3 | 133.05 | 43.4% | 0.608 | 12.32 | 10.8 | 0.531 | 0.686 | -19.76 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Momentum (/100) → 25 | 96.3 | 47.2% | 0.606 | 9.59 | 10.04 | 0.536 | 0.678 | -8.62 |  |

### Vòng 725 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.31

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số TP tối đa → 2 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: HVN anchored → 0.188 | 117.49 | 50.3% | 0.789 | 7.94 | 14.8 | 0.653 | 0.937 | -9.66 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 30.39 | 58.4% | 0.189 | 5.77 | 5.27 | 0.224 | 0.155 | -11.38 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: BOS → 1 + Ngưỡng điểm vào kèo → 77 | 98 | 49.3% | 0.71 | 8.11 | 12.08 | 0.522 | 0.922 | -11.51 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 112.65 | 52.8% | 0.793 | 7.25 | 15.54 | 0.588 | 1.01 | -9.66 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Cổng Dow → CHẶT | 78.38 | 52.2% | 0.694 | 7.64 | 10.26 | 0.324 | 0.998 | -10.72 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Cộng điểm phân kỳ dương ẩn → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 78.32 | 50% | 0.653 | 8.51 | 9.2 | 0.615 | 0.698 | -15.35 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm tối thiểu của vùng đặt SL → 2 + Cổng Dow → TẮT | 130.66 | 43.8% | 0.628 | 11.35 | 11.51 | 0.587 | 0.669 | -20.15 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần R:R (/100) → 28 | 107.28 | 45.7% | 0.62 | 8.86 | 12.11 | 0.61 | 0.63 | -7.92 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 30.44 | 39.4% | 0.293 | 12.31 | 2.47 | 0.259 | 0.331 | -9.24 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần Entry (/100) → 28 | 115.99 | 52.4% | 0.8 | 7.54 | 15.38 | 0.61 | 1.015 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: BOS → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 103.07 | 39.4% | 0.262 | 15.09 | 6.83 | 0.273 | 0.254 | -19.56 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 + Khung lớn phải tăng (trend ≥) → 0.375 | 110.07 | 51.8% | 0.781 | 7.58 | 14.52 | 0.619 | 0.959 | -9.66 |  |

### Vòng 724 — ngẫu nhiên nhiều thông số · mốc: tổng 115.79R, win 53.5%, rủi ro tụt vốn 7.35R, lời÷rủi ro 15.75

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 106.59 | 51.4% | 0.73 | 7.82 | 13.63 | 0.637 | 0.826 | -9.38 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 121.86 | 50.3% | 0.796 | 8.39 | 14.52 | 0.757 | 0.845 | -10.24 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: HVN cố định → 0.563 | 98.36 | 51.7% | 0.82 | 7.6 | 12.94 | 0.542 | 1.126 | -10.63 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Khung lớn phải tăng (trend ≥) → 0.425 | 102.38 | 50.3% | 0.706 | 8.75 | 11.7 | 0.527 | 0.927 | -7.11 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: EMA 50 → 1.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 93.54 | 43.2% | 0.603 | 11.09 | 8.43 | 0.572 | 0.64 | -10.26 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 124.4 | 45.1% | 0.55 | 10.79 | 11.53 | 0.584 | 0.515 | -9.12 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib sóng 4 → 1.56 | 113.87 | 52.4% | 0.775 | 7.71 | 14.77 | 0.586 | 1.007 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm tối thiểu của vùng đặt SL → 2 + Cộng điểm phân kỳ dương ẩn → 2.25 | 110.1 | 53.1% | 0.759 | 7.85 | 14.03 | 0.635 | 0.9 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 39.57 | 42% | 0.45 | 9.44 | 4.19 | 0.377 | 0.54 | -12.38 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: HVN anchored → 0.188 | 111.71 | 52.5% | 0.804 | 7.7 | 14.51 | 0.585 | 1.068 | -9.69 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 | 114.13 | 41.6% | 0.368 | 12.65 | 9.02 | 0.334 | 0.397 | -9.21 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Break mây Ichimoku → 3 | 33.87 | 38.9% | 0.376 | 10.25 | 3.3 | 0.242 | 0.553 | -6.8 |  |

### Vòng 723 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.31R, lời÷rủi ro 16.19

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: EMA 200 → 1 | 117.17 | 50.3% | 0.737 | 8.24 | 14.22 | 0.611 | 0.874 | -9.83 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 | 119.14 | 53.5% | 0.827 | 7.31 | 16.3 | 0.64 | 1.043 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Break mây Ichimoku → 3 | 108.36 | 49.4% | 0.677 | 9 | 12.04 | 0.554 | 0.813 | -9.4 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: POC anchored → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 102.55 | 50% | 0.675 | 8.73 | 11.75 | 0.528 | 0.834 | -9.93 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 21 → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 99.16 | 48.6% | 0.708 | 8.67 | 11.44 | 0.495 | 0.941 | -11.51 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Trend (/100) → 19 + Số TP tối đa → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 40.33 | 41.9% | 0.469 | 9.32 | 4.33 | 0.38 | 0.582 | -8.58 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Mức RSI 30/70 → 1.13 | 124.45 | 50.3% | 0.803 | 8.23 | 15.12 | 0.757 | 0.858 | -10.24 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: EMA 200 → 1 | 112.63 | 50% | 0.704 | 8.77 | 12.84 | 0.574 | 0.863 | -5.69 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Biên mây Ichimoku → 1.35 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Divergence (/100) → 9 | 97.82 | 48.9% | 0.704 | 8.42 | 11.62 | 0.455 | 0.972 | -10.49 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: EMA 50 → 0.75 | 115.92 | 53.5% | 0.816 | 7.3 | 15.88 | 0.621 | 1.029 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trọng số phần Trend (/100) → 19 | 114.55 | 51.4% | 0.785 | 7.92 | 14.46 | 0.591 | 1.006 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: HVN anchored → 0.313 | 103.48 | 49.3% | 0.709 | 8.52 | 12.15 | 0.477 | 0.96 | -9.62 |  |
