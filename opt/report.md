# Tối ưu tự động (chạy liên tục) — vòng 986

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 11487 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 46.4% | 95.04R | 0.573 | 6.44R | 10.21R | 9.31 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 145 | 52.4% | 113.95R | 0.786 | 5.09R | 8R | 14.24 | 27 | 18.5% | -8.9R | -0.33 | 10.54R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 27 | 48.1% | 17.16R | 5 | 0% | -3.77R |
| 1W | 10 | 50% | 7.77R | 2 | 0% | -2.3R |
| 4H | 108 | 53.7% | 89.03R | 20 | 25% | -2.83R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 46.4% | 95.04R | 10.21R | 9.31 | 30 | 13.3% | -11.98R |
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

### Vòng 986 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8R, lời÷rủi ro 14.24

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 112.04 | 51.4% | 0.757 | 8.08 | 13.87 | 0.592 | 0.936 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: EMA 200 → 3 | 102.19 | 49.7% | 0.705 | 8.7 | 11.75 | 0.476 | 0.949 | -9.89 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Cộng điểm phân kỳ dương ẩn → 2.25 | 98.72 | 44.5% | 0.676 | 9.74 | 10.14 | 0.479 | 0.873 | -10.75 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Momentum (/100) → 21 | 113.95 | 52.4% | 0.786 | 8 | 14.24 | 0.592 | 1.006 | -8.9 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cổng Dow → TẮT + Điểm vùng: Mức MACD → 0.875 | 21.11 | 51.9% | 0.112 | 8.99 | 2.35 | 0.184 | 0.041 | -14.68 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: EMA 50 → 1.13 + Trọng số phần R:R (/100) → 28 | 110.48 | 50.3% | 0.773 | 8.16 | 13.54 | 0.575 | 0.997 | -7.88 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Trọng số phần SL (/100) → 9 | 109.1 | 50.7% | 0.768 | 7.85 | 13.9 | 0.624 | 0.925 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 118.99 | 48.8% | 0.744 | 8.86 | 13.43 | 0.685 | 0.814 | -9.48 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + % chốt ở TP1 → 0.307 | 115.89 | 51.7% | 0.799 | 7.88 | 14.71 | 0.666 | 0.942 | -7.62 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + R:R tối thiểu riêng khung 1D → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: POC anchored → 4 | 112.45 | 47.1% | 0.646 | 9.2 | 12.22 | 0.645 | 0.648 | -2.29 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Số TP tối đa → 2 | 112.42 | 47% | 0.669 | 10.76 | 10.45 | 0.624 | 0.71 | -2.99 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Cộng thêm ngưỡng điểm khung 4H → 2 | 109.93 | 51.8% | 0.78 | 7.91 | 13.9 | 0.628 | 0.947 | -8.9 |  |

### Vòng 985 — ngẫu nhiên nhiều thông số · mốc: tổng 114.01R, win 52.8%, rủi ro tụt vốn 7.83R, lời÷rủi ro 14.56

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 113.9 | 52.4% | 0.785 | 7.84 | 14.53 | 0.606 | 0.977 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: EMA 200 → 3 + Điểm vùng: EMA 21 → 1.13 | 102.14 | 42% | 0.452 | 12.48 | 8.18 | 0.462 | 0.442 | -11.92 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 98.6 | 51% | 0.653 | 8.87 | 11.12 | 0.57 | 0.744 | -9.73 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Cộng thêm ngưỡng điểm khung 4H → -1 + Cộng thêm ngưỡng điểm khung 1W → 2 | 83.65 | 52.6% | 0.734 | 7.08 | 11.81 | 0.34 | 1.042 | -12.02 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cổng Dow → CHẶT + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 54 | 43.4% | 0.372 | 11.08 | 4.87 | 0.293 | 0.432 | -15.12 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu riêng khung 4H → 2 | 113.2 | 40.1% | 0.357 | 12.8 | 8.84 | 0.307 | 0.399 | -6.48 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần R:R (/100) → 33 | 110.07 | 49.3% | 0.798 | 8.25 | 13.34 | 0.607 | 1.012 | -8.17 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: EMA 21 → 1.13 + R:R tối thiểu riêng khung 4H → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 111.04 | 39.8% | 0.348 | 13.04 | 8.52 | 0.368 | 0.332 | -5.8 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: EMA 200 → 1 + Điểm vùng: EMA 50 → 0.75 | 119.15 | 52.3% | 0.769 | 8.29 | 14.37 | 0.6 | 0.969 | -8.91 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + R:R tối thiểu tới TP1 → 2.38 + R:R tối thiểu riêng khung 4H → 2 | 94.76 | 40.2% | 0.326 | 13.09 | 7.24 | 0.294 | 0.354 | -9.36 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Trend (/100) → 19 | 83.82 | 53% | 0.729 | 7 | 11.97 | 0.336 | 1.042 | -12.02 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: POC anchored → 4 + Lệnh chờ hết hạn sau (nến) → 6 + % chốt ở TP1 → 0.307 | 94.2 | 45.7% | 0.582 | 9.4 | 10.02 | 0.612 | 0.553 | 0.77 |  |

### Vòng 984 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.02R, lời÷rủi ro 14.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Momentum (/100) → 25 | 110.2 | 50.7% | 0.755 | 8.19 | 13.46 | 0.575 | 0.955 | -9.01 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm tối thiểu của vùng đặt SL → 4 | 111.08 | 50.3% | 0.736 | 8.19 | 13.56 | 0.558 | 0.911 | -1.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: POC volume profile cố định → 0.813 | 83.98 | 50% | 0.712 | 8.26 | 10.17 | 0.508 | 0.952 | -14.34 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Break mây Ichimoku → 1 | 102.21 | 49.3% | 0.691 | 8.89 | 11.5 | 0.511 | 0.886 | -9.14 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Số TP tối đa → 2 | 113.25 | 51.7% | 0.781 | 8.17 | 13.86 | 0.597 | 0.99 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Cộng điểm phân kỳ dương ẩn → 3 | 89.91 | 45% | 0.603 | 10.14 | 8.87 | 0.455 | 0.771 | -7.11 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần SL (/100) → 9 + Điểm vùng: Fib sóng 4 → 0.938 | 102.3 | 48.1% | 0.631 | 9.66 | 10.59 | 0.489 | 0.789 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Cộng điểm phân kỳ dương ẩn → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 30.86 | 58.6% | 0.197 | 5.4 | 5.71 | 0.223 | 0.173 | -9.28 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 | 109.16 | 50.7% | 0.738 | 8.48 | 12.87 | 0.548 | 0.948 | -7.99 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Lệnh chờ hết hạn sau (nến) → 8 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 90.45 | 44.7% | 0.562 | 10.66 | 8.48 | 0.418 | 0.735 | -9.34 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Cộng thêm ngưỡng điểm khung 4H → -1 + Cộng thêm ngưỡng điểm khung 1D → 3 | 108.59 | 50.7% | 0.754 | 8.06 | 13.47 | 0.538 | 0.995 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: POC anchored → 2 + Điểm vùng: EMA 50 → 0.75 | 100.75 | 49.7% | 0.667 | 8.96 | 11.24 | 0.503 | 0.842 | -8.9 |  |

### Vòng 983 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.98R, lời÷rủi ro 14.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần R:R (/100) → 33 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 70.09 | 44.6% | 0.626 | 9.92 | 7.07 | 0.438 | 0.835 | -4.43 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Trọng số phần Trend (/100) → 12 | 112.23 | 51.4% | 0.779 | 7.82 | 14.35 | 0.596 | 0.984 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: BOS → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 1D (ATR) → 0.3 | 88.1 | 46.5% | 0.62 | 10.46 | 8.42 | 0.622 | 0.619 | -9.75 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL riêng khung 1D (ATR) → 0.3 | 152.48 | 38% | 0.503 | 19.29 | 7.9 | 0.443 | 0.559 | -8.56 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: EMA 21 → 1.13 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: MACD cắt lên Signal → 0.438 | 101.73 | 47.8% | 0.648 | 9.68 | 10.51 | 0.393 | 0.927 | -7.24 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Momentum (/100) → 21 + Cộng thêm ngưỡng điểm khung 4H → 2 | 109.97 | 51.1% | 0.791 | 8.01 | 13.73 | 0.596 | 1.001 | -8.9 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 110.9 | 51% | 0.765 | 8.23 | 13.48 | 0.494 | 1.054 | -8.77 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 37.25 | 40.4% | 0.419 | 10.13 | 3.68 | 0.342 | 0.512 | -7.55 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 | 112.96 | 51.1% | 0.801 | 7.75 | 14.58 | 0.613 | 1.009 | -7.64 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Ngưỡng điểm vào kèo → 74 + Xác nhận khung nhỏ (A2) → W + Lệnh chờ hết hạn sau (nến) → 6 | 88.55 | 36.1% | 0.333 | 20.49 | 4.32 | 0.336 | 0.33 | -8.35 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + % chốt ở TP1 → 0.307 + Điểm vùng: Biên mây Ichimoku → 1.35 | 110.23 | 51% | 0.75 | 8.14 | 13.54 | 0.55 | 0.976 | -7.89 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + R:R tối thiểu tới TP1 → 2.63 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: POC anchored → 4 | 92.27 | 50.4% | 0.715 | 8.6 | 10.73 | 0.473 | 0.946 | -4.03 |  |

### Vòng 982 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.93R, lời÷rủi ro 14.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng điểm phân kỳ dương ẩn → 3 + R:R tối thiểu tới TP1 → 2.63 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 108.12 | 49.6% | 0.825 | 8.44 | 12.81 | 0.705 | 0.959 | -9.6 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: EMA 200 → 1 + Số TP tối đa → 2 | 108.61 | 45.8% | 0.607 | 9.46 | 11.48 | 0.679 | 0.533 | -3.87 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Xác nhận khung nhỏ (A2) → W + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 114.34 | 38.9% | 0.454 | 14.73 | 7.76 | 0.428 | 0.477 | -4.49 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL riêng khung 4H (ATR) → 0.3 | 156.4 | 39.2% | 0.537 | 18.01 | 8.68 | 0.371 | 0.705 | -12.57 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: HVN anchored → 0.188 | 74.48 | 44.7% | 0.468 | 10.83 | 6.88 | 0.408 | 0.527 | -8.8 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Khung lớn phải tăng (trend ≥) → 0.425 + Xác nhận khung nhỏ (A2) → W | 101.86 | 38.3% | 0.361 | 16.14 | 6.31 | 0.323 | 0.394 | -1.21 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: HVN cố định → 0.438 | 112.68 | 42.4% | 0.55 | 12.44 | 9.06 | 0.488 | 0.611 | -18.56 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: POC anchored → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 97.92 | 48.6% | 0.662 | 8.81 | 11.11 | 0.51 | 0.821 | -12.16 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Mức MACD → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 118.04 | 51.6% | 0.752 | 8.54 | 13.82 | 0.586 | 0.947 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: EMA 200 → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 85.08 | 47.3% | 0.575 | 9.78 | 8.7 | 0.409 | 0.749 | -4.55 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Mức MACD → 0.875 + Số TP tối đa → 2 | 102.75 | 39.4% | 0.409 | 15.73 | 6.53 | 0.372 | 0.443 | -3.54 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: POC anchored → 4 + Trọng số phần Entry (/100) → 33 | 73.99 | 47.1% | 0.536 | 10.03 | 7.38 | 0.505 | 0.566 | -11.68 |  |

### Vòng 981 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.98R, lời÷rủi ro 14.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: HVN cố định → 0.563 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Khung lớn phải tăng (trend ≥) → 0.375 | 110.42 | 51.4% | 0.756 | 7.94 | 13.91 | 0.581 | 0.942 | -7.58 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: EMA 200 → 1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 25.59 | 57% | 0.143 | 7.33 | 3.49 | 0.201 | 0.088 | -8.04 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Elliott (/100) → 6 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 109.61 | 50.3% | 0.767 | 8.1 | 13.53 | 0.632 | 0.906 | -9.24 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Xác nhận khung nhỏ (A2) → W | 97.09 | 38.6% | 0.387 | 16.58 | 5.86 | 0.356 | 0.415 | -3.75 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 110.22 | 49.3% | 0.745 | 8.43 | 13.07 | 0.62 | 0.873 | -7.77 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 1D → 3 | 108.64 | 50.3% | 0.739 | 8.12 | 13.38 | 0.536 | 0.969 | -8.72 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: EMA 50 → 0.75 | 112.01 | 52.7% | 0.767 | 7.74 | 14.47 | 0.56 | 0.998 | -8.9 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Fib sóng 4 → 1.56 + R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu riêng khung 1W → 2 | 100.57 | 47.4% | 0.581 | 9.54 | 10.54 | 0.539 | 0.623 | -7.16 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + R:R tối thiểu riêng khung 1W → 2 + R:R tối thiểu riêng khung 4H → 2 | 85.89 | 39.8% | 0.302 | 13.69 | 6.27 | 0.288 | 0.315 | -7.42 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 105.98 | 49.7% | 0.721 | 8.72 | 12.15 | 0.458 | 1.003 | -9.75 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 1W → -1 + Coin phải mạnh hơn BTC trong N ngày → 14 | 80.73 | 44% | 0.538 | 9.94 | 8.12 | 0.556 | 0.52 | -13.63 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC anchored → 2 | 59.87 | 32.2% | 0.224 | 26.42 | 2.27 | 0.154 | 0.301 | -10.45 |  |

### Vòng 980 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.95R, lời÷rủi ro 14.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 111.47 | 45.9% | 0.701 | 9.7 | 11.49 | 0.503 | 0.892 | -8.86 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Cổng Dow → TẮT + Điểm vùng: POC anchored → 2 + Trọng số phần Divergence (/100) → 12 | 104.94 | 41.7% | 0.527 | 12.63 | 8.31 | 0.461 | 0.587 | -19.58 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: EMA 200 → 3 + Điểm vùng: Mức MACD → 1.13 | 99.42 | 40.7% | 0.326 | 13.17 | 7.55 | 0.25 | 0.392 | -9.39 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần R:R (/100) → 33 + Khung lớn phải tăng (trend ≥) → 0.375 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 74.84 | 47.9% | 0.527 | 9.85 | 7.6 | 0.353 | 0.734 | -11.78 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Cộng điểm phân kỳ dương ẩn → 3 + Trọng số phần Divergence (/100) → 12 | 113.76 | 52.1% | 0.779 | 7.96 | 14.29 | 0.581 | 1.006 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 154.47 | 38.4% | 0.52 | 18.56 | 8.32 | 0.394 | 0.65 | -11.13 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Xác nhận khung nhỏ (A2) → W + Trọng số phần SL (/100) → 7 | 102.22 | 38.2% | 0.39 | 16.44 | 6.22 | 0.366 | 0.413 | -3.57 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: HVN anchored → 0.313 | 110.17 | 51% | 0.749 | 8.28 | 13.31 | 0.549 | 0.977 | -7.88 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Đệm SL riêng khung 1W (ATR) → 0.3 | 106.11 | 46.1% | 0.698 | 9.64 | 11.01 | 0.5 | 0.886 | -10.7 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: POC anchored → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 | 54.51 | 43.1% | 0.534 | 10.64 | 5.12 | 0.313 | 0.765 | -7.44 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: EMA 50 → 1.13 | 74.18 | 46.7% | 0.55 | 9.9 | 7.49 | 0.379 | 0.744 | -7.31 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: MACD cắt lên Signal → 0.563 | 61.29 | 45.9% | 0.562 | 9.62 | 6.37 | 0.429 | 0.714 | -5.05 |  |

### Vòng 979 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.95R, lời÷rủi ro 14.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trần điểm khi chart yếu (Trend < x) → -0.375 + R:R tối thiểu riêng khung 1W → 2 | 102.55 | 50% | 0.693 | 8.82 | 11.63 | 0.56 | 0.826 | -9.93 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: POC anchored → 2 + Điểm vùng: EMA 21 → 0.875 | 99.36 | 48.4% | 0.649 | 9.3 | 10.68 | 0.552 | 0.748 | -6.3 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 113.48 | 52.1% | 0.777 | 7.9 | 14.36 | 0.593 | 0.983 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Cộng điểm phân kỳ dương ẩn → 2.25 + Trọng số phần R:R (/100) → 28 | 110.2 | 50.7% | 0.755 | 8.22 | 13.41 | 0.575 | 0.955 | -7.99 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Đệm SL riêng khung 1D (ATR) → 0.3 | 89.33 | 39.1% | 0.291 | 14.87 | 6.01 | 0.355 | 0.246 | -7.49 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 1W → 2 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 53.7 | 40.7% | 0.312 | 14.43 | 3.72 | 0.424 | 0.19 | -15.67 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 103.68 | 50% | 0.71 | 8.58 | 12.08 | 0.548 | 0.896 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Entry (/100) → 33 + Điểm vùng: MACD cắt lên Signal → 0.438 | 85.1 | 43.6% | 0.495 | 11.28 | 7.54 | 0.37 | 0.625 | -9.45 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Trọng số phần Momentum (/100) → 25 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 111.72 | 50.3% | 0.712 | 8.55 | 13.07 | 0.578 | 0.878 | -3.91 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 | 109.38 | 50% | 0.692 | 8.72 | 12.54 | 0.528 | 0.869 | -9.89 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Khung lớn phải tăng (trend ≥) → 0.425 + Đệm SL riêng khung 4H (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 23.24 | 50.4% | 0.092 | 15.23 | 1.53 | 0.073 | 0.108 | -15.1 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 82.48 | 42.5% | 0.565 | 11.48 | 7.18 | 0.426 | 0.743 | -4.95 |  |

### Vòng 978 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.05R, lời÷rủi ro 14.16

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 112.94 | 52.1% | 0.774 | 8.14 | 13.87 | 0.571 | 1.006 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 103.68 | 50% | 0.71 | 8.58 | 12.08 | 0.548 | 0.896 | -8.9 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 80.27 | 46.8% | 0.521 | 9.77 | 8.22 | 0.444 | 0.611 | -11.86 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Mức MACD → 1.13 + Điểm tối thiểu của vùng đặt SL → 2 | 102.44 | 39% | 0.388 | 16.73 | 6.12 | 0.351 | 0.424 | -2.73 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN anchored → 0.188 + Trọng số phần Trend (/100) → 19 + Cộng thêm ngưỡng điểm khung 1W → 2 | 112.87 | 51.4% | 0.773 | 8.05 | 14.02 | 0.598 | 0.964 | -8.9 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: BOS → 1 | 30.2 | 58.2% | 0.191 | 6.16 | 4.9 | 0.196 | 0.186 | -9.23 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + R:R tối thiểu riêng khung 1W → 2 | 101.79 | 50.3% | 0.702 | 8.2 | 12.41 | 0.568 | 0.834 | -9.76 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Ngưỡng điểm vào kèo → 74 | 112.12 | 51% | 0.752 | 8.13 | 13.79 | 0.566 | 0.963 | -7.88 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 66.16 | 39.7% | 0.486 | 11.88 | 5.57 | 0.431 | 0.537 | -3.52 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 107.7 | 50.7% | 0.748 | 8.46 | 12.73 | 0.534 | 0.987 | -7.88 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: POC anchored → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Mức MACD → 1.13 | 87.11 | 47.1% | 0.555 | 10.22 | 8.52 | 0.389 | 0.746 | -5.29 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 112.94 | 52.1% | 0.774 | 8.14 | 13.87 | 0.571 | 1.006 | -8.9 |  |

### Vòng 977 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8R, lời÷rủi ro 14.24

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Đệm SL riêng khung 1W (ATR) → 0.3 | 108.33 | 43% | 0.49 | 12.75 | 8.5 | 0.469 | 0.511 | -11.48 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm tối thiểu của vùng đặt SL → 4 | 111.59 | 51.4% | 0.764 | 7.88 | 14.16 | 0.598 | 0.945 | -7.61 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Lệnh chờ hết hạn sau (nến) → 6 + Số TP tối đa → 2 | 70.72 | 52.4% | 0.687 | 7.13 | 9.92 | 0.365 | 0.967 | -10.63 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + R:R tối thiểu riêng khung 1D → 2 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: HVN anchored → 0.313 | 87.48 | 44.7% | 0.543 | 10.03 | 8.72 | 0.541 | 0.546 | -9.36 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 109.01 | 50.7% | 0.747 | 8.28 | 13.17 | 0.551 | 0.965 | -7.41 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 120.67 | 49.4% | 0.764 | 8.63 | 13.98 | 0.722 | 0.813 | -9.48 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Lệnh chờ hết hạn sau (nến) → 6 + Cổng Dow → TẮT + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 55.37 | 40% | 0.369 | 13.86 | 3.99 | 0.372 | 0.366 | -21.97 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 117.41 | 51.9% | 0.734 | 8.54 | 13.75 | 0.563 | 0.938 | -8.9 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần Entry (/100) → 28 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 1W → 2 | 35.57 | 37.7% | 0.292 | 14.29 | 2.49 | 0.221 | 0.357 | -9.06 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: POC volume profile cố định → 0.813 | 105.11 | 46.1% | 0.59 | 9.46 | 11.11 | 0.552 | 0.628 | -6.14 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: HVN cố định → 0.438 + R:R tối thiểu riêng khung 1W → 2 | 100.45 | 48.7% | 0.636 | 9.65 | 10.41 | 0.513 | 0.765 | -9.26 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + SL tối đa (% Entry) → 0.425 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: MACD cắt lên Signal → 0.438 | 132.79 | 42.1% | 0.565 | 12.47 | 10.65 | 0.573 | 0.557 | -20.02 |  |
