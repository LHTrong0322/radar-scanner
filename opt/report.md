# Tối ưu tự động (chạy liên tục) — vòng 694

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 7983 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.9% | 96.84R | 0.594 | 5.28R | 9.44R | 10.26 | 31 | 12.9% | -13.15R | -0.424 | 13.15R |
| **Tốt nhất** | 144 | 52.1% | 113.9R | 0.791 | 6.16R | 7.97R | 14.29 | 29 | 17.2% | -10.95R | -0.378 | 11.57R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 27 | 48.1% | 18.83R | 5 | 0% | -3.76R |
| 1W | 11 | 45.5% | 6.82R | 3 | 0% | -3.33R |
| 4H | 106 | 53.8% | 88.25R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.9% | 96.84R | 9.44R | 10.26 | 31 | 12.9% | -13.15R |
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

### Vòng 694 — ngẫu nhiên nhiều thông số · mốc: tổng 113.9R, win 52.1%, rủi ro tụt vốn 7.97R, lời÷rủi ro 14.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Ngưỡng điểm vào kèo → 77 | 114.77 | 51.4% | 0.797 | 7.87 | 14.58 | 0.628 | 0.981 | -10.95 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: EMA 50 → 0.75 | 108.38 | 50.7% | 0.753 | 8.31 | 13.04 | 0.558 | 0.958 | -9.66 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Lệnh chờ hết hạn sau (nến) → 8 | 85.9 | 44.7% | 0.48 | 10.84 | 7.92 | 0.48 | 0.48 | -11.58 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Đệm SL riêng khung 1W (ATR) → 0.3 | 105.66 | 48.2% | 0.749 | 8.93 | 11.83 | 0.531 | 0.947 | -11.7 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Mức RSI 30/70 → 1.13 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 98.02 | 44.9% | 0.587 | 9.18 | 10.68 | 0.52 | 0.648 | -10.14 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 | 36.45 | 58.5% | 0.207 | 7.12 | 5.12 | 0.272 | 0.157 | -8.49 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Số TP tối đa → 2 | 113.65 | 51.7% | 0.784 | 8.22 | 13.83 | 0.587 | 1 | -10.95 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: EMA 50 → 1.13 | 109.12 | 50.7% | 0.758 | 8.07 | 13.52 | 0.605 | 0.924 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Đệm SL riêng khung 4H (ATR) → 0.3 + Xác nhận khung nhỏ (A2) → W | 46.53 | 29.8% | 0.125 | 39.72 | 1.17 | 0.13 | 0.121 | -33.62 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: POC anchored → 4 | 69.15 | 34% | 0.291 | 23.04 | 3 | 0.167 | 0.414 | -3.76 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 82.93 | 48.7% | 0.697 | 7.94 | 10.44 | 0.516 | 0.9 | -17.42 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần R:R (/100) → 33 + Lệnh chờ hết hạn sau (nến) → 6 | 39.51 | 41% | 0.507 | 9.07 | 4.36 | 0.382 | 0.667 | -5.9 |  |

### Vòng 693 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.31

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cộng điểm phân kỳ dương ẩn → 3 | 115.18 | 43% | 0.501 | 13.52 | 8.52 | 0.505 | 0.497 | -6.89 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Trọng số phần Momentum (/100) → 25 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 64.89 | 45.5% | 0.579 | 9.36 | 6.93 | 0.431 | 0.745 | -7.44 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: MACD cắt lên Signal → 0.438 | 108.84 | 49.7% | 0.693 | 9.26 | 11.75 | 0.472 | 0.948 | -8.37 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 117.37 | 53.1% | 0.809 | 7.73 | 15.18 | 0.614 | 1.037 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Mức MACD → 1.13 | 115 | 51.7% | 0.793 | 7.6 | 15.13 | 0.591 | 1.028 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Ngưỡng điểm vào kèo → 77 + Cộng điểm phân kỳ dương ẩn → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 102.58 | 50% | 0.743 | 7.86 | 13.05 | 0.522 | 0.992 | -11.51 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Cộng điểm phân kỳ dương ẩn → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 | 83.6 | 52.3% | 0.753 | 6.83 | 12.24 | 0.324 | 1.118 | -10.72 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 116.4 | 48.2% | 0.693 | 9.92 | 11.73 | 0.675 | 0.709 | -5.44 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 50 → 0.75 + Đệm SL riêng khung 4H (ATR) → 0.3 | 142.93 | 38.6% | 0.493 | 18.45 | 7.75 | 0.349 | 0.633 | -12.39 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + SL tối đa (% Entry) → 0.425 | 75.73 | 46.9% | 0.592 | 9.08 | 8.34 | 0.462 | 0.73 | -8.96 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + R:R tối thiểu riêng khung 1D → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + % chốt ở TP1 → 0.287 | 31.2 | 55.8% | 0.164 | 6.53 | 4.78 | 0.196 | 0.137 | -10.21 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Coin phải mạnh hơn BTC trong N ngày → 14 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 50.26 | 42.1% | 0.347 | 12.51 | 4.02 | 0.518 | 0.191 | -21.28 |  |

### Vòng 692 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.27R, lời÷rủi ro 16.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: EMA 50 → 1.13 + R:R tối thiểu riêng khung 4H → 2 + Xác nhận khung nhỏ (A2) → W | 40.16 | 34.3% | 0.105 | 27.93 | 1.44 | 0.084 | 0.125 | -0.44 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 53.78 | 41.3% | 0.444 | 12.4 | 4.34 | 0.344 | 0.528 | -6.79 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 117.26 | 53.1% | 0.809 | 7.74 | 15.15 | 0.614 | 1.036 | -9.66 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Số TP tối đa → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 76.58 | 47.7% | 0.716 | 8.49 | 9.02 | 0.476 | 0.989 | -6.49 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Số TP tối đa → 2 | 110.64 | 50.3% | 0.714 | 9.04 | 12.24 | 0.495 | 0.973 | -7.08 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 50.79 | 37.1% | 0.29 | 13.89 | 3.66 | 0.277 | 0.304 | -1.74 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Mức MACD → 0.875 | 113.89 | 51% | 0.785 | 7.76 | 14.68 | 0.669 | 0.9 | -10 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + R:R tối thiểu riêng khung 1W → 2 | 108.87 | 51.7% | 0.731 | 7.98 | 13.64 | 0.606 | 0.861 | -10.69 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Biên mây Ichimoku → 1.35 + SL tối đa (% Entry) → 0.425 | 88.56 | 50% | 0.751 | 8.25 | 10.73 | 0.604 | 0.918 | -15.11 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + R:R tối thiểu riêng khung 4H → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 119.21 | 40.6% | 0.369 | 12.41 | 9.61 | 0.362 | 0.375 | -14.12 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 95.38 | 47.6% | 0.575 | 10.34 | 9.22 | 0.429 | 0.742 | -6.82 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần SL (/100) → 9 | 114.54 | 51.4% | 0.774 | 7.96 | 14.39 | 0.569 | 1.015 | -9.66 |  |

### Vòng 691 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Cộng thêm ngưỡng điểm khung 1D → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Lệnh chờ hết hạn sau (nến) → 8 | 110.66 | 46.8% | 0.64 | 9.57 | 11.56 | 0.638 | 0.641 | -11.29 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Coin phải mạnh hơn BTC trong N ngày → 14 | 85.84 | 50% | 0.74 | 7.79 | 11.02 | 0.552 | 0.963 | -16.13 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: EMA 21 → 0.875 + R:R tối thiểu riêng khung 1W → 2 | 106.75 | 50.7% | 0.741 | 8.09 | 13.2 | 0.631 | 0.849 | -11.05 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu tới TP1 → 2.63 + Đệm SL riêng khung 1W (ATR) → 0.3 | 86.62 | 47.7% | 0.78 | 9.16 | 9.46 | 0.588 | 0.956 | -13.02 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: MACD cắt lên Signal → 0.438 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 108.01 | 49.7% | 0.688 | 9.28 | 11.64 | 0.473 | 0.942 | -5.76 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 102.51 | 52.5% | 0.854 | 7.47 | 13.72 | 0.569 | 1.159 | -10.63 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 | 113.97 | 51.4% | 0.781 | 7.99 | 14.26 | 0.597 | 0.985 | -8.64 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 115.5 | 50.7% | 0.791 | 7.77 | 14.86 | 0.672 | 0.907 | -10 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: HVN anchored → 0.313 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: EMA 50 → 0.75 | 98.98 | 51% | 0.683 | 8.4 | 11.78 | 0.575 | 0.797 | -8.88 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Cộng thêm ngưỡng điểm khung 4H → -1 + Cộng thêm ngưỡng điểm khung 1D → 5 | 115.47 | 49.7% | 0.755 | 8.33 | 13.86 | 0.584 | 0.952 | -10.69 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 40.41 | 41% | 0.487 | 8.41 | 4.8 | 0.473 | 0.505 | -4.21 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 + Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 | 153.65 | 37.7% | 0.496 | 18.61 | 8.26 | 0.353 | 0.622 | -13.73 |  |

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
