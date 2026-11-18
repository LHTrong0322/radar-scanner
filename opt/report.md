# Tối ưu tự động (chạy liên tục) — vòng 642

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 7359 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.9% | 94.11R | 0.581 | 5.5R | 9.95R | 9.46 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 145 | 53.8% | 118.56R | 0.818 | 5.09R | 7.67R | 15.46 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 107 | 55.1% | 91.4R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.9% | 94.11R | 9.95R | 9.46 | 32 | 12.5% | -14.03R |
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

### Vòng 642 — ngẫu nhiên nhiều thông số · mốc: tổng 118.56R, win 53.8%, rủi ro tụt vốn 7.67R, lời÷rủi ro 15.46

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Momentum (/100) → 21 | 112 | 51.4% | 0.789 | 7.71 | 14.53 | 0.646 | 0.944 | -9.66 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: POC volume profile cố định → 0.813 | 118.11 | 53.4% | 0.809 | 7.33 | 16.11 | 0.635 | 1.003 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 3 | 118.04 | 51.7% | 0.803 | 7.76 | 15.21 | 0.674 | 0.941 | -9.66 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 108.29 | 51.7% | 0.727 | 8.02 | 13.5 | 0.626 | 0.827 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Khung lớn phải tăng (trend ≥) → 0.425 | 24.32 | 66.3% | 0.283 | 4.34 | 5.6 | 0.304 | 0.26 | -6.61 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 103.04 | 49.7% | 0.721 | 8.02 | 12.85 | 0.524 | 0.949 | -9.69 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Cộng thêm ngưỡng điểm khung 1W → 2 + R:R tối thiểu riêng khung 4H → 2 | 69.67 | 38.9% | 0.212 | 16.31 | 4.27 | 0.321 | 0.111 | -10.57 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 113.13 | 52.7% | 0.775 | 7.49 | 15.1 | 0.628 | 0.939 | -10 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Lệnh chờ hết hạn sau (nến) → 6 | 69.66 | 44.3% | 0.467 | 10.44 | 6.67 | 0.448 | 0.488 | -4.7 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Biên mây Ichimoku → 1.35 + Cộng điểm phân kỳ dương ẩn → 3 | 112.84 | 51.7% | 0.768 | 8.09 | 13.95 | 0.566 | 0.995 | -8.64 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 102.85 | 50.3% | 0.719 | 8.35 | 12.32 | 0.565 | 0.876 | -10.73 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib sóng 4 → 1.56 | 101.1 | 52% | 0.674 | 8.47 | 11.94 | 0.598 | 0.763 | -9.46 |  |

### Vòng 641 — ngẫu nhiên nhiều thông số · mốc: tổng 118.56R, win 53.8%, rủi ro tụt vốn 7.57R, lời÷rủi ro 15.66

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số TP tối đa → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Coin phải mạnh hơn BTC trong N ngày → 14 | 88.07 | 48.4% | 0.699 | 8.91 | 9.88 | 0.509 | 0.929 | -15.84 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 115.04 | 52.4% | 0.783 | 7.86 | 14.64 | 0.591 | 0.999 | -8.34 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 133.67 | 37.9% | 0.474 | 18.92 | 7.07 | 0.26 | 0.694 | -13.37 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Mức RSI 30/70 → 0.875 | 114.88 | 50.6% | 0.727 | 8.58 | 13.39 | 0.595 | 0.881 | -11.06 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Xác nhận khung nhỏ (A2) → W + Khung lớn phải tăng (trend ≥) → 0.425 | 104.71 | 38.4% | 0.411 | 16.21 | 6.46 | 0.381 | 0.438 | -2.35 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: HVN cố định → 0.563 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần SL (/100) → 7 | 109.7 | 50.7% | 0.762 | 7.81 | 14.05 | 0.597 | 0.941 | -13.89 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 84.59 | 49.3% | 0.587 | 8.92 | 9.48 | 0.499 | 0.689 | -11.31 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 85.74 | 50.9% | 0.739 | 7.9 | 10.85 | 0.533 | 0.976 | -16.13 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 4H → -1 | 116.29 | 37.6% | 0.451 | 18.71 | 6.22 | 0.285 | 0.607 | -15.66 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: HVN anchored → 0.188 + Coin phải mạnh hơn BTC trong N ngày → 14 | 86.93 | 50.8% | 0.737 | 8 | 10.87 | 0.559 | 0.94 | -16.13 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Trọng số phần Elliott (/100) → 6 | 112.51 | 52.8% | 0.781 | 7.56 | 14.88 | 0.621 | 0.951 | -9.66 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 86.02 | 50.4% | 0.723 | 8.22 | 10.46 | 0.552 | 0.915 | -17.52 |  |

### Vòng 640 — ngẫu nhiên nhiều thông số · mốc: tổng 118.56R, win 53.8%, rủi ro tụt vốn 7.6R, lời÷rủi ro 15.60

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: POC anchored → 4 | 119.53 | 51% | 0.781 | 7.85 | 15.23 | 0.682 | 0.869 | -8.88 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 112.39 | 50.3% | 0.754 | 7.93 | 14.17 | 0.497 | 1.029 | -9.52 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + SL tối đa (% Entry) → 0.425 | 116.9 | 52.7% | 0.79 | 7.6 | 15.38 | 0.624 | 0.974 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Mức MACD → 0.875 | 107.54 | 50.7% | 0.717 | 8.4 | 12.8 | 0.599 | 0.856 | -9.66 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Khung lớn phải tăng (trend ≥) → 0.375 | 82.61 | 45.7% | 0.651 | 9.82 | 8.41 | 0.504 | 0.791 | -9.19 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Cộng điểm phân kỳ dương ẩn → 3 + Cổng Dow → TẮT | 131.46 | 44.4% | 0.614 | 11.25 | 11.69 | 0.546 | 0.68 | -20.34 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Biên mây Ichimoku → 1.05 + Xác nhận khung nhỏ (A2) → W | 96.89 | 39.8% | 0.374 | 16.34 | 5.93 | 0.383 | 0.366 | -7.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Khung lớn phải tăng (trend ≥) → 0.375 + Cộng thêm ngưỡng điểm khung 1D → 3 + Lệnh chờ hết hạn sau (nến) → 8 | 111.89 | 50% | 0.708 | 8.44 | 13.26 | 0.551 | 0.882 | -11.25 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Trọng số phần Divergence (/100) → 9 + SL tối đa (% Entry) → 0.425 + Điểm vùng: POC volume profile cố định → 0.688 | 117.1 | 53.1% | 0.797 | 7.63 | 15.35 | 0.635 | 0.974 | -9.66 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Fib sóng 4 → 0.938 + % chốt ở TP1 → 0.307 | 116.89 | 53.5% | 0.812 | 7.48 | 15.63 | 0.622 | 1.024 | -9.67 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Mức MACD → 0.875 | 81.33 | 53.2% | 0.746 | 6.68 | 12.18 | 0.335 | 1.082 | -10.72 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: Biên mây Ichimoku → 1.35 | 113.06 | 51.4% | 0.774 | 7.84 | 14.42 | 0.596 | 0.974 | -8.64 |  |

### Vòng 639 — ngẫu nhiên nhiều thông số · mốc: tổng 116.29R, win 53.5%, rủi ro tụt vốn 7.3R, lời÷rủi ro 15.93

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Khung lớn phải tăng (trend ≥) → 0.425 + Cộng thêm ngưỡng điểm khung 4H → -1 | 105.48 | 51.1% | 0.759 | 8.02 | 13.15 | 0.499 | 1.047 | -9.52 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 122.46 | 50.3% | 0.78 | 8.67 | 14.12 | 0.722 | 0.848 | -10.24 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Fib sóng 4 → 0.938 | 104.25 | 46.9% | 0.729 | 9.24 | 11.28 | 0.503 | 0.946 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trọng số phần R:R (/100) → 33 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 104.46 | 43.7% | 0.456 | 12.49 | 8.36 | 0.412 | 0.501 | -10.58 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + R:R tối thiểu tới TP1 → 2.38 | 59.1 | 36.5% | 0.257 | 19.18 | 3.08 | 0.135 | 0.376 | -6.81 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 133.99 | 37.9% | 0.462 | 18.98 | 7.06 | 0.322 | 0.598 | -9.47 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Số TP tối đa → 2 + Trọng số phần Momentum (/100) → 21 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 97.98 | 50% | 0.653 | 8.77 | 11.17 | 0.538 | 0.785 | -9.46 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 94.55 | 46.6% | 0.58 | 9.36 | 10.1 | 0.645 | 0.52 | -9.13 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: EMA 21 → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 112.32 | 45.4% | 0.689 | 10.39 | 10.81 | 0.731 | 0.651 | -5.41 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Khung lớn phải tăng (trend ≥) → 0.425 | 110.8 | 51.8% | 0.797 | 7.5 | 14.77 | 0.577 | 1.041 | -9.69 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: POC volume profile cố định → 0.688 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 112.17 | 49.7% | 0.743 | 8.65 | 12.97 | 0.506 | 0.996 | -9.52 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Elliott (/100) → 10 + Cộng thêm ngưỡng điểm khung 1W → -1 | 88.19 | 46.3% | 0.6 | 9.87 | 8.94 | 0.427 | 0.818 | -9.16 |  |

### Vòng 638 — ngẫu nhiên nhiều thông số · mốc: tổng 121.77R, win 54.1%, rủi ro tụt vốn 7.35R, lời÷rủi ro 16.57

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần Elliott (/100) → 6 | 110.58 | 51.4% | 0.757 | 7.92 | 13.96 | 0.542 | 0.979 | -9.62 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Cộng thêm ngưỡng điểm khung 1W → 2 | 115.22 | 51.7% | 0.806 | 7.49 | 15.38 | 0.646 | 0.977 | -10.07 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần Trend (/100) → 19 | 119.58 | 53.4% | 0.819 | 7.52 | 15.9 | 0.62 | 1.035 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: EMA 21 → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 71.57 | 45.1% | 0.633 | 9.75 | 7.34 | 0.434 | 0.859 | -6.59 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 110.55 | 50.7% | 0.747 | 8.05 | 13.73 | 0.554 | 0.968 | -8.46 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 93.45 | 48.6% | 0.677 | 8.91 | 10.49 | 0.626 | 0.735 | -8.3 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + % chốt ở TP1 → 0.307 + R:R tối thiểu riêng khung 1W → 2 | 86.36 | 41% | 0.305 | 13.13 | 6.58 | 0.282 | 0.325 | -11.34 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 1W (ATR) → 0.3 | 59.46 | 48.8% | 0.725 | 7.84 | 7.58 | 0.197 | 1.204 | -7.93 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Break mây Ichimoku → 3 + SL tối đa (% Entry) → 0.425 | 106.53 | 49.7% | 0.654 | 9.02 | 11.81 | 0.512 | 0.808 | -9.4 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: EMA 21 → 1.13 | 115.32 | 47.3% | 0.682 | 10.58 | 10.9 | 0.613 | 0.749 | -8.35 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 53.75 | 39.3% | 0.311 | 14.38 | 3.74 | 0.404 | 0.207 | -19.03 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 72.98 | 47.3% | 0.566 | 9.29 | 7.86 | 0.432 | 0.702 | -7.94 |  |

### Vòng 637 — ngẫu nhiên nhiều thông số · mốc: tổng 121.77R, win 54.1%, rủi ro tụt vốn 7.39R, lời÷rủi ro 16.48

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Fib sóng 4 → 0.938 | 69.61 | 45.9% | 0.639 | 9.36 | 7.44 | 0.428 | 0.869 | -6.48 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 128.35 | 45.5% | 0.53 | 10.86 | 11.82 | 0.639 | 0.42 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 88.35 | 51.3% | 0.742 | 7.96 | 11.1 | 0.527 | 0.994 | -16.13 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Cổng Dow → CHẶT + R:R tối thiểu riêng khung 1D → 2 | 31.37 | 61.1% | 0.194 | 5.32 | 5.9 | 0.184 | 0.201 | -6.62 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần SL (/100) → 9 | 119.3 | 53.1% | 0.812 | 7.6 | 15.7 | 0.635 | 1.006 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 86.31 | 46.4% | 0.514 | 9.71 | 8.89 | 0.452 | 0.576 | -9.26 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + R:R tối thiểu riêng khung 1D → 2 | 109.98 | 46.1% | 0.618 | 9.1 | 12.09 | 0.564 | 0.669 | -10.98 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần R:R (/100) → 28 | 105.5 | 46.7% | 0.639 | 10.47 | 10.08 | 0.656 | 0.626 | -6.21 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Mức MACD → 0.875 | 116.18 | 53.5% | 0.807 | 7.53 | 15.43 | 0.621 | 1.004 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Biên mây Ichimoku → 1.35 + Số TP tối đa → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 | 83.44 | 42.4% | 0.453 | 12.59 | 6.63 | 0.53 | 0.393 | -8.34 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 200 → 3 | 110.55 | 49.3% | 0.737 | 8.37 | 13.21 | 0.569 | 0.896 | -9.97 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Cộng thêm ngưỡng điểm khung 1D → 5 | 107.46 | 50.4% | 0.762 | 7.96 | 13.5 | 0.588 | 0.954 | -9.9 |  |

### Vòng 636 — ngẫu nhiên nhiều thông số · mốc: tổng 121.77R, win 54.1%, rủi ro tụt vốn 7.37R, lời÷rủi ro 16.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: BOS → 3 + Cộng điểm phân kỳ dương ẩn → 2.25 | 121.11 | 51.6% | 0.792 | 8.14 | 14.88 | 0.594 | 1.014 | -10.69 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Đệm SL riêng khung 4H (ATR) → 0.3 | 159 | 38.8% | 0.546 | 17.72 | 8.97 | 0.414 | 0.682 | -16.54 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Mức MACD → 1.13 | 117.94 | 52% | 0.797 | 7.63 | 15.46 | 0.591 | 1.026 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + R:R tối thiểu riêng khung 1D → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Coin phải mạnh hơn BTC trong N ngày → 14 | 93.6 | 44.9% | 0.592 | 9.58 | 9.77 | 0.584 | 0.601 | -18.53 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cổng Dow → TẮT | 135.11 | 43.4% | 0.611 | 12.09 | 11.18 | 0.499 | 0.721 | -19.21 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: EMA 200 → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 80.26 | 45.5% | 0.481 | 10.51 | 7.64 | 0.482 | 0.479 | -10.81 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 73.78 | 47.2% | 0.683 | 8.83 | 8.36 | 0.428 | 0.968 | -7.81 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + SL tối đa (% Entry) → 0.425 + Ngưỡng điểm vào kèo → 77 | 107.7 | 49.3% | 0.728 | 8.33 | 12.93 | 0.585 | 0.871 | -11.02 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Cộng điểm phân kỳ dương ẩn → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Entry (/100) → 33 | 114.03 | 49.6% | 0.832 | 8.39 | 13.59 | 0.63 | 1.057 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 4H → 2 | 121.33 | 47.7% | 0.697 | 10.56 | 11.49 | 0.669 | 0.724 | -6.35 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 118.82 | 53.1% | 0.808 | 7.34 | 16.19 | 0.598 | 1.039 | -9.48 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: HVN anchored → 0.313 | 66.72 | 45.9% | 0.547 | 10.17 | 6.56 | 0.407 | 0.697 | -16.12 |  |

### Vòng 635 — ngẫu nhiên nhiều thông số · mốc: tổng 132.04R, win 53.7%, rủi ro tụt vốn 7.36R, lời÷rủi ro 17.94

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: HVN anchored → 0.188 | 114.05 | 52.9% | 0.943 | 7.2 | 15.84 | 0.743 | 1.159 | -10.63 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Momentum (/100) → 21 | 129.06 | 51% | 0.822 | 8.34 | 15.47 | 0.781 | 0.869 | -10.24 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cổng Dow → TẮT | 144.67 | 44.8% | 0.682 | 10.91 | 13.26 | 0.644 | 0.719 | -18.36 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: MACD cắt lên Signal → 0.438 + Cộng thêm ngưỡng điểm khung 4H → 2 | 59.79 | 42.9% | 0.534 | 11.16 | 5.36 | 0.365 | 0.722 | -5.32 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: EMA 21 → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 111.72 | 47.6% | 0.673 | 10.18 | 10.97 | 0.635 | 0.707 | -5.68 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Entry (/100) → 28 + Ngưỡng điểm vào kèo → 77 | 125.75 | 51.7% | 0.867 | 7.5 | 16.77 | 0.768 | 0.977 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Fib sóng 4 → 1.56 + Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần SL (/100) → 7 | 119.67 | 50% | 0.787 | 8.31 | 14.4 | 0.668 | 0.927 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 123.18 | 52.1% | 0.844 | 7.61 | 16.19 | 0.752 | 0.946 | -10.63 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Break mây Ichimoku → 3 | 107.7 | 48.8% | 0.673 | 9.19 | 11.72 | 0.599 | 0.753 | -9.4 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 126.69 | 51.3% | 0.834 | 8.06 | 15.72 | 0.76 | 0.913 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Trọng số phần Entry (/100) → 33 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + SL tối đa (% Entry) → 0.425 | 103.99 | 49.4% | 0.675 | 9.01 | 11.54 | 0.704 | 0.646 | -7.85 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + R:R tối thiểu tới TP1 → 2.63 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 112.93 | 50.4% | 0.889 | 8.08 | 13.98 | 0.755 | 1.044 | -10.63 |  |

### Vòng 634 — ngẫu nhiên nhiều thông số · mốc: tổng 132.04R, win 53.7%, rủi ro tụt vốn 7.74R, lời÷rủi ro 17.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần Entry (/100) → 33 | 129.45 | 53.4% | 0.887 | 7.29 | 17.76 | 0.77 | 1.017 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Ngưỡng điểm vào kèo → 77 | 125.75 | 51.7% | 0.867 | 7.58 | 16.59 | 0.768 | 0.977 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm tối thiểu của vùng đặt SL → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: EMA 50 → 0.75 | 69.72 | 45% | 0.387 | 12.04 | 5.79 | 0.374 | 0.402 | -14.05 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + R:R tối thiểu riêng khung 1W → 2 | 93.29 | 51% | 0.635 | 8.32 | 11.21 | 0.593 | 0.674 | -10.5 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Xác nhận khung nhỏ (A2) → W + Số TP tối đa → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 | 101.31 | 39.4% | 0.399 | 16.04 | 6.32 | 0.336 | 0.456 | -4.54 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 122.33 | 52.3% | 0.81 | 7.95 | 15.39 | 0.639 | 0.993 | -8.8 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Trọng số phần Trend (/100) → 12 | 123.79 | 51% | 0.854 | 7.8 | 15.87 | 0.714 | 1.016 | -8.64 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 115.41 | 52% | 0.78 | 7.95 | 14.52 | 0.735 | 0.83 | -8.7 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức RSI 30/70 → 1.13 | 85.33 | 47.7% | 0.783 | 8.62 | 9.9 | 0.62 | 0.968 | -6.48 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: POC anchored → 2 | 116.69 | 50.3% | 0.763 | 8.39 | 13.91 | 0.669 | 0.863 | -8.63 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: EMA 21 → 1.13 | 105.51 | 46.3% | 0.596 | 9.26 | 11.39 | 0.582 | 0.609 | -11.32 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: POC volume profile cố định → 0.813 | 129.61 | 44.4% | 0.554 | 11.03 | 11.75 | 0.586 | 0.52 | -10.44 |  |

### Vòng 633 — ngẫu nhiên nhiều thông số · mốc: tổng 132.04R, win 53.7%, rủi ro tụt vốn 7.65R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng điểm phân kỳ dương ẩn → 2.25 + Cổng Dow → TẮT | 136.71 | 43.8% | 0.61 | 11.08 | 12.34 | 0.666 | 0.555 | -17.87 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: BOS → 1 | 128.56 | 51.4% | 0.932 | 7.69 | 16.72 | 0.783 | 1.103 | -8.91 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Divergence (/100) → 9 + Điểm tối thiểu của vùng đặt SL → 4 | 129.22 | 52.3% | 0.867 | 7.52 | 17.18 | 0.766 | 0.975 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 115.85 | 51.7% | 0.767 | 8.19 | 14.15 | 0.771 | 0.763 | -9.46 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: MACD cắt lên Signal → 0.563 | 128.42 | 52% | 0.845 | 7.68 | 16.72 | 0.728 | 0.975 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: POC volume profile cố định → 0.813 + SL tối đa (% Entry) → 0.425 | 130.4 | 52.7% | 0.881 | 7.67 | 17 | 0.766 | 1.005 | -8.64 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: MACD cắt lên Signal → 0.563 | 116.91 | 50% | 0.749 | 9.02 | 12.96 | 0.614 | 0.907 | -7.08 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 4H (ATR) → 0.3 | 25.65 | 53.3% | 0.121 | 12.75 | 2.01 | 0.004 | 0.206 | -19.4 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: MACD cắt lên Signal → 0.563 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 38.15 | 60.1% | 0.234 | 5.12 | 7.45 | 0.298 | 0.174 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 84.78 | 47.8% | 0.623 | 9.17 | 9.25 | 0.439 | 0.831 | -8.96 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Cộng thêm ngưỡng điểm khung 1W → -1 | 113.27 | 51.5% | 0.845 | 7.85 | 14.43 | 0.741 | 0.966 | -8.27 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu tới TP1 → 2.63 | 88.79 | 46.7% | 0.74 | 9.13 | 9.73 | 0.356 | 1.111 | -12.71 |  |
