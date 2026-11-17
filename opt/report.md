# Tối ưu tự động (chạy liên tục) — vòng 560

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 6375 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 46.3% | 95.54R | 0.583 | 6.74R | 10.03R | 9.53 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 145 | 53.1% | 114.31R | 0.788 | 6.15R | 7.59R | 15.06 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 107 | 54.2% | 87.15R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 46.3% | 95.54R | 10.03R | 9.53 | 32 | 12.5% | -14.03R |
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

### Vòng 560 — ngẫu nhiên nhiều thông số · mốc: tổng 114.31R, win 53.1%, rủi ro tụt vốn 7.59R, lời÷rủi ro 15.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Elliott (/100) → 10 + Coin phải mạnh hơn BTC trong N ngày → 14 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 47.89 | 44.4% | 0.38 | 11.19 | 4.28 | 0.194 | 0.544 | -16.58 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + R:R tối thiểu riêng khung 1W → 2 | 101.43 | 51% | 0.69 | 8.29 | 12.24 | 0.616 | 0.763 | -11.66 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: EMA 200 → 3 + % chốt ở TP1 → 0.287 + Cộng thêm ngưỡng điểm khung 4H → 2 | 98.68 | 49.6% | 0.7 | 8.07 | 12.23 | 0.576 | 0.826 | -8.29 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + R:R tối thiểu riêng khung 4H → 2 | 98.8 | 40.8% | 0.323 | 12.99 | 7.61 | 0.339 | 0.309 | -9.24 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 107.36 | 52.7% | 0.716 | 7.87 | 13.64 | 0.594 | 0.855 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.05 | 103.78 | 52.1% | 0.711 | 7.84 | 13.24 | 0.589 | 0.843 | -11.78 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: POC anchored → 4 + Trọng số phần SL (/100) → 9 | 107.43 | 49.4% | 0.663 | 9.25 | 11.61 | 0.478 | 0.857 | -1.9 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 21 → 0.875 | 101.45 | 50% | 0.705 | 8.4 | 12.08 | 0.631 | 0.776 | -11.05 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Xác nhận khung nhỏ (A2) → W | 91.65 | 36.3% | 0.326 | 20.74 | 4.42 | 0.355 | 0.301 | -4.49 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 57.32 | 45% | 0.526 | 9.86 | 5.81 | 0.454 | 0.611 | -6.08 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: POC anchored → 2 + Trọng số phần SL (/100) → 7 | 91.65 | 49% | 0.607 | 8.67 | 10.57 | 0.542 | 0.668 | -9.67 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: POC volume profile cố định → 0.688 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 106.32 | 49.6% | 0.765 | 8.27 | 12.86 | 0.621 | 0.915 | -9.95 |  |

### Vòng 559 — ngẫu nhiên nhiều thông số · mốc: tổng 112.69R, win 52.8%, rủi ro tụt vốn 7.63R, lời÷rủi ro 14.77

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 96.96 | 47.9% | 0.664 | 8.7 | 11.14 | 0.608 | 0.729 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Cổng Dow → CHẶT | 77.68 | 51.4% | 0.7 | 7.26 | 10.7 | 0.333 | 1.023 | -10.72 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + R:R tối thiểu riêng khung 1D → 2 | 39.38 | 39.8% | 0.334 | 11.97 | 3.29 | 0.432 | 0.221 | -6.62 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 | 96.64 | 47.4% | 0.565 | 10.66 | 9.07 | 0.422 | 0.732 | -6.82 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: EMA 21 → 1.13 | 36.55 | 40.9% | 0.393 | 10.09 | 3.62 | 0.321 | 0.481 | -7.24 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + SL tối đa (% Entry) → 0.425 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức MACD → 1.13 | 107.55 | 50.3% | 0.732 | 8.14 | 13.21 | 0.591 | 0.89 | -8.93 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + % chốt ở TP1 → 0.307 | 100.94 | 46.7% | 0.604 | 10.59 | 9.53 | 0.684 | 0.531 | -5.16 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 28.32 | 57% | 0.179 | 6.08 | 4.66 | 0.22 | 0.141 | -11.38 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Ngưỡng điểm vào kèo → 77 + Trọng số phần Entry (/100) → 28 | 91.77 | 50% | 0.637 | 8.26 | 11.11 | 0.671 | 0.601 | -9.42 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Mức RSI 30/70 → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 28.28 | 57% | 0.179 | 6.09 | 4.64 | 0.219 | 0.141 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Mức MACD → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 106.26 | 52.1% | 0.759 | 7.79 | 13.64 | 0.605 | 0.927 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Ngưỡng điểm vào kèo → 74 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 | 94.38 | 49.3% | 0.629 | 8.7 | 10.85 | 0.619 | 0.64 | -9.46 |  |

### Vòng 558 — ngẫu nhiên nhiều thông số · mốc: tổng 112.69R, win 52.8%, rủi ro tụt vốn 7.54R, lời÷rủi ro 14.95

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Khung lớn phải tăng (trend ≥) → 0.425 | 109.28 | 51.8% | 0.775 | 7.68 | 14.23 | 0.606 | 0.967 | -9.17 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Mức RSI 30/70 → 0.875 | 104.1 | 47.7% | 0.591 | 9.03 | 11.53 | 0.517 | 0.67 | -10.67 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Khung lớn phải tăng (trend ≥) → 0.425 + Trọng số phần R:R (/100) → 28 | 105.35 | 50.7% | 0.752 | 7.97 | 13.22 | 0.572 | 0.928 | -4.52 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Entry (/100) → 33 | 110.27 | 51.7% | 0.771 | 7.92 | 13.92 | 0.658 | 0.892 | -9.66 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm tối thiểu của vùng đặt SL → 4 | 111.41 | 51.7% | 0.768 | 7.83 | 14.23 | 0.646 | 0.903 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu riêng khung 4H → 2 | 91.08 | 39.7% | 0.304 | 13.99 | 6.51 | 0.319 | 0.292 | -10.69 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Ngưỡng điểm vào kèo → 77 | 83.27 | 44.2% | 0.566 | 10.2 | 8.16 | 0.474 | 0.678 | -9.16 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Coin phải mạnh hơn BTC trong N ngày → 14 | 75.35 | 48% | 0.613 | 9.6 | 7.85 | 0.53 | 0.705 | -17.42 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Momentum (/100) → 21 | 111.61 | 49.6% | 0.815 | 8.39 | 13.3 | 0.614 | 1.051 | -8.91 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Momentum (/100) → 25 | 94.39 | 45.9% | 0.594 | 9.35 | 10.1 | 0.553 | 0.632 | -11.23 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: BOS → 1 | 112.69 | 52.8% | 0.783 | 7.54 | 14.95 | 0.635 | 0.952 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Số TP tối đa → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 | 161.32 | 38.9% | 0.56 | 18.35 | 8.79 | 0.425 | 0.695 | -13.17 |  |

### Vòng 557 — ngẫu nhiên nhiều thông số · mốc: tổng 112.67R, win 53.1%, rủi ro tụt vốn 7.69R, lời÷rủi ro 14.65

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 100.08 | 50.7% | 0.676 | 8.47 | 11.82 | 0.535 | 0.842 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 111.57 | 50% | 0.734 | 8.46 | 13.19 | 0.601 | 0.882 | -10.69 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 27.78 | 55.4% | 0.177 | 6.45 | 4.31 | 0.212 | 0.143 | -10.3 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 92.31 | 47.5% | 0.577 | 10.49 | 8.8 | 0.667 | 0.503 | -7.19 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Fib sóng 4 → 0.938 | 69.99 | 46.4% | 0.56 | 9.61 | 7.28 | 0.46 | 0.665 | -8.96 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Trọng số phần SL (/100) → 9 + Điểm tối thiểu của vùng đặt SL → 2 | 104.77 | 51.7% | 0.713 | 8.34 | 12.56 | 0.643 | 0.787 | -8.34 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 1D → 2 | 113.25 | 44.6% | 0.615 | 10.04 | 11.28 | 0.751 | 0.494 | -8.19 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Lệnh chờ hết hạn sau (nến) → 6 | 92.35 | 50.8% | 0.71 | 8.24 | 11.21 | 0.599 | 0.836 | -8.27 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Cổng Dow → CHẶT + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 84.41 | 52.6% | 0.728 | 7.44 | 11.35 | 0.415 | 1 | -11.75 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: EMA 21 → 0.875 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 158.83 | 38.2% | 0.528 | 18.06 | 8.79 | 0.502 | 0.554 | -9.18 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: EMA 21 → 0.875 | 113.28 | 51.7% | 0.792 | 8.02 | 14.12 | 0.701 | 0.89 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 106.53 | 51.4% | 0.73 | 8.16 | 13.06 | 0.577 | 0.905 | -11.06 |  |

### Vòng 556 — ngẫu nhiên nhiều thông số · mốc: tổng 112.69R, win 52.8%, rủi ro tụt vốn 7.63R, lời÷rủi ro 14.77

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Khung lớn phải tăng (trend ≥) → 0.375 + Đệm SL riêng khung 1W (ATR) → 0.3 | 99.16 | 47.1% | 0.708 | 8.8 | 11.27 | 0.534 | 0.864 | -10.7 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: EMA 200 → 1 | 102.9 | 51.1% | 0.774 | 8.51 | 12.09 | 0.545 | 1.052 | -5.64 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + % chốt ở TP1 → 0.287 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 52.13 | 43.4% | 0.492 | 10.22 | 5.1 | 0.467 | 0.52 | -8.78 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm tối thiểu của vùng đặt SL → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần R:R (/100) → 33 | 160.79 | 38.3% | 0.545 | 17.93 | 8.97 | 0.467 | 0.624 | -13.23 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib sóng 4 → 0.938 | 86.49 | 47.2% | 0.544 | 10.28 | 8.41 | 0.499 | 0.593 | -6.84 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 62.24 | 42.9% | 0.399 | 11.45 | 5.44 | 0.306 | 0.492 | -13.01 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: EMA 200 → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 63.8 | 45.5% | 0.58 | 9.26 | 6.89 | 0.47 | 0.703 | -1.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1D → 3 | 109.33 | 46.4% | 0.651 | 10.36 | 10.55 | 0.639 | 0.662 | -6.35 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Mức MACD → 0.875 + Cộng thêm ngưỡng điểm khung 1W → 2 + R:R tối thiểu riêng khung 1D → 2 | 96.56 | 44.8% | 0.561 | 9.99 | 9.67 | 0.595 | 0.531 | -7.92 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Break mây Ichimoku → 3 | 92.29 | 47.5% | 0.577 | 9.82 | 9.4 | 0.5 | 0.653 | -9.4 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 1D (ATR) → 0.3 | 49.86 | 39.1% | 0.375 | 14.91 | 3.34 | 0.292 | 0.449 | -6.88 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 91.88 | 42.9% | 0.54 | 10.38 | 8.85 | 0.522 | 0.557 | -11.63 |  |

### Vòng 555 — ngẫu nhiên nhiều thông số · mốc: tổng 112.69R, win 52.8%, rủi ro tụt vốn 7.54R, lời÷rủi ro 14.95

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 93.61 | 48.4% | 0.612 | 9.79 | 9.56 | 0.477 | 0.772 | -8.05 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Đệm SL riêng khung 1D (ATR) → 0.3 + % chốt ở TP1 → 0.287 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 108.68 | 46.3% | 0.671 | 10.63 | 10.22 | 0.744 | 0.609 | -5.64 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Trọng số phần SL (/100) → 9 | 111.22 | 52.1% | 0.772 | 7.64 | 14.56 | 0.635 | 0.93 | -9.66 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 1D (ATR) → 0.3 | 110.56 | 47% | 0.666 | 10.75 | 10.28 | 0.675 | 0.658 | -5.33 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + R:R tối thiểu riêng khung 4H → 2 | 103.45 | 41.1% | 0.335 | 12.7 | 8.15 | 0.339 | 0.331 | -10.23 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần SL (/100) → 9 + Số TP tối đa → 2 | 29.04 | 57.1% | 0.18 | 5.91 | 4.91 | 0.215 | 0.147 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cổng Dow → CHẶT + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: MACD cắt lên Signal → 0.563 | 85.41 | 51.9% | 0.806 | 7.16 | 11.93 | 0.46 | 1.126 | -11.29 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1W → 2 | 76.5 | 39.8% | 0.274 | 13.67 | 5.6 | 0.322 | 0.233 | -10.25 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 122.63 | 48.1% | 0.766 | 8.84 | 13.87 | 0.722 | 0.818 | -10.06 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 105.04 | 49.7% | 0.724 | 8.67 | 12.12 | 0.473 | 1.001 | -9.52 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + SL tối đa (% Entry) → 0.425 | 111.5 | 52.4% | 0.769 | 7.93 | 14.06 | 0.632 | 0.924 | -9.64 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần Trend (/100) → 19 | 112.23 | 52.4% | 0.774 | 7.85 | 14.3 | 0.635 | 0.932 | -8.64 |  |

### Vòng 554 — ngẫu nhiên nhiều thông số · mốc: tổng 108.2R, win 51.4%, rủi ro tụt vốn 8.03R, lời÷rủi ro 13.47

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm tối thiểu của vùng đặt SL → 4 | 94.09 | 47.6% | 0.649 | 9.21 | 10.22 | 0.47 | 0.83 | -9.62 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + R:R tối thiểu tới TP1 → 2.63 | 81.56 | 46.5% | 0.715 | 8.8 | 9.27 | 0.426 | 1.026 | -7.64 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + R:R tối thiểu riêng khung 1D → 2 | 74.71 | 43.8% | 0.519 | 9.46 | 7.9 | 0.556 | 0.483 | -14.5 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 113.19 | 51.7% | 0.792 | 7.36 | 15.38 | 0.674 | 0.907 | -11.85 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 157.68 | 37.6% | 0.535 | 18.23 | 8.65 | 0.438 | 0.627 | -13.59 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần SL (/100) → 9 + Cộng thêm ngưỡng điểm khung 1D → 5 | 89.52 | 48.9% | 0.673 | 7.9 | 11.33 | 0.459 | 0.884 | -13.83 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 20.3 | 54% | 0.146 | 6.29 | 3.23 | 0.239 | 0.062 | -6.54 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Ngưỡng điểm vào kèo → 74 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 81.96 | 44.8% | 0.477 | 10.88 | 7.53 | 0.396 | 0.557 | -10.22 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: EMA 21 → 0.875 + Đệm SL riêng khung 1D (ATR) → 0.3 | 115.2 | 46.9% | 0.72 | 10.32 | 11.16 | 0.72 | 0.72 | -6.35 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Đệm SL riêng khung 1W (ATR) → 0.3 | 96.48 | 44.9% | 0.656 | 9.7 | 9.95 | 0.516 | 0.794 | -11.71 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần SL (/100) → 9 | 106.73 | 50.7% | 0.741 | 8.11 | 13.16 | 0.582 | 0.919 | -10.95 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: EMA 200 → 1 + Lệnh chờ hết hạn sau (nến) → 6 | 96.01 | 45.8% | 0.572 | 9.94 | 9.66 | 0.641 | 0.497 | -1.2 |  |

### Vòng 553 — ngẫu nhiên nhiều thông số · mốc: tổng 112.69R, win 52.8%, rủi ro tụt vốn 7.59R, lời÷rủi ro 14.85

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: BOS → 1 | 70.47 | 46.7% | 0.659 | 8.71 | 8.09 | 0.473 | 0.87 | -6.48 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần Trend (/100) → 19 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 97.83 | 51% | 0.675 | 8.58 | 11.4 | 0.634 | 0.719 | -8.88 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + R:R tối thiểu riêng khung 4H → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 110.32 | 41.7% | 0.354 | 12.76 | 8.65 | 0.374 | 0.336 | -11.61 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: EMA 50 → 0.75 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 108.96 | 49.3% | 0.801 | 8.47 | 12.86 | 0.635 | 0.999 | -8.91 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Fib sóng 4 → 1.56 | 104.58 | 50% | 0.726 | 8.54 | 12.25 | 0.491 | 0.982 | -9.52 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: EMA 50 → 1.13 | 108.03 | 50.3% | 0.735 | 8.45 | 12.78 | 0.597 | 0.89 | -8.64 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 200 → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 116.4 | 48% | 0.665 | 9.74 | 11.95 | 0.66 | 0.672 | -3.78 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 | 113.04 | 46.6% | 0.693 | 10.58 | 10.68 | 0.723 | 0.666 | -12.54 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Cộng thêm ngưỡng điểm khung 4H → 2 | 105.51 | 52.4% | 0.738 | 7.62 | 13.85 | 0.653 | 0.834 | -9.66 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Số TP tối đa → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 120.43 | 49.4% | 0.772 | 8.59 | 14.02 | 0.757 | 0.79 | -10.24 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 72.63 | 42.7% | 0.508 | 11.14 | 6.52 | 0.351 | 0.713 | -11.08 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 200 → 3 | 100.99 | 45.4% | 0.62 | 11.06 | 9.13 | 0.588 | 0.648 | -6.35 |  |

### Vòng 552 — ngẫu nhiên nhiều thông số · mốc: tổng 108.2R, win 51.4%, rủi ro tụt vốn 8.05R, lời÷rủi ro 13.44

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + R:R tối thiểu riêng khung 1D → 2 | 102.37 | 44% | 0.609 | 10.33 | 9.91 | 0.627 | 0.594 | -4.26 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + R:R tối thiểu tới TP1 → 2.63 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 4H → 2 | 66.01 | 38.1% | 0.286 | 15.2 | 4.34 | 0.258 | 0.314 | -1.64 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Lệnh chờ hết hạn sau (nến) → 8 + % chốt ở TP1 → 0.307 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 101.41 | 50.6% | 0.658 | 8.78 | 11.55 | 0.634 | 0.684 | -12.8 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: BOS → 3 | 133.56 | 36.1% | 0.477 | 20.67 | 6.46 | 0.487 | 0.466 | -18.53 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + R:R tối thiểu riêng khung 4H → 2 | 97.56 | 39.4% | 0.315 | 14.13 | 6.9 | 0.324 | 0.307 | -8.54 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 87.94 | 46.4% | 0.575 | 10.01 | 8.79 | 0.413 | 0.766 | -8.37 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Cộng thêm ngưỡng điểm khung 4H → -1 | 108.21 | 51.4% | 0.751 | 8.11 | 13.34 | 0.583 | 0.94 | -10.96 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: HVN anchored → 0.188 | 98.6 | 49.6% | 0.709 | 7.99 | 12.34 | 0.595 | 0.818 | -11.99 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 | 72.89 | 47.1% | 0.521 | 9.66 | 7.55 | 0.43 | 0.622 | -12.34 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 107.83 | 51% | 0.754 | 8.09 | 13.33 | 0.605 | 0.919 | -11.98 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 80.3 | 36.2% | 0.326 | 18 | 4.46 | 0.289 | 0.357 | -8.45 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 86.56 | 47.4% | 0.641 | 9.4 | 9.21 | 0.499 | 0.808 | -8.96 |  |

### Vòng 551 — ngẫu nhiên nhiều thông số · mốc: tổng 112.69R, win 52.8%, rủi ro tụt vốn 7.52R, lời÷rủi ro 14.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 103.04 | 50% | 0.696 | 8.08 | 12.75 | 0.578 | 0.831 | -10 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cộng thêm ngưỡng điểm khung 1W → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 | 102.94 | 50% | 0.746 | 7.88 | 13.06 | 0.606 | 0.903 | -9.69 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 50 → 1.13 + Coin phải mạnh hơn BTC trong N ngày → 14 | 10.87 | 36.8% | 0.087 | 18.28 | 0.59 | -0.136 | 0.28 | -12.11 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: HVN anchored → 0.313 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 89.01 | 49% | 0.614 | 8.65 | 10.29 | 0.626 | 0.601 | -9.42 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức RSI 30/70 → 0.875 | 74.28 | 45.9% | 0.609 | 9.86 | 7.53 | 0.499 | 0.742 | -6.48 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức RSI 30/70 → 0.875 | 35.46 | 57.2% | 0.205 | 5.85 | 6.06 | 0.252 | 0.157 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: POC volume profile cố định → 0.688 | 108.49 | 51.4% | 0.753 | 7.94 | 13.66 | 0.594 | 0.936 | -9.48 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: EMA 21 → 1.13 | 103.48 | 50.3% | 0.704 | 8.34 | 12.41 | 0.584 | 0.839 | -10.58 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Mức MACD → 1.13 | 109.39 | 51% | 0.754 | 8.16 | 13.41 | 0.593 | 0.943 | -9.67 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: EMA 200 → 3 + Điểm vùng: EMA 50 → 0.75 + Đệm SL riêng khung 4H (ATR) → 0.3 | 141.45 | 39% | 0.53 | 17.19 | 8.23 | 0.265 | 0.77 | -13.62 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: HVN anchored → 0.313 + Điểm tối thiểu của vùng đặt SL → 4 | 105.56 | 49.7% | 0.708 | 8.33 | 12.67 | 0.564 | 0.872 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: HVN anchored → 0.188 + Coin phải mạnh hơn BTC trong N ngày → 14 | 77.09 | 43.3% | 0.514 | 10.06 | 7.66 | 0.576 | 0.453 | -14.39 |  |
