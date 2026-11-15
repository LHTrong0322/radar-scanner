# Tối ưu tự động (chạy liên tục) — vòng 327

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 3594 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 160 | 46.9% | 100.36R | 0.627 | 5.74R | 9.49R | 10.58 | 32 | 12.5% | -14.5R | -0.453 | 14.5R |
| **Tốt nhất** | 145 | 53.1% | 127.33R | 0.878 | 5.15R | 7.27R | 17.51 | 28 | 17.9% | -10.13R | -0.362 | 10.75R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 30 | 50% | 30.72R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 105 | 54.3% | 88.87R | 21 | 23.8% | -4.32R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 160 | 46.9% | 100.36R | 9.49R | 10.58 | 32 | 12.5% | -14.5R |
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

### Vòng 327 — ngẫu nhiên nhiều thông số · mốc: tổng 127.33R, win 53.1%, rủi ro tụt vốn 7.27R, lời÷rủi ro 17.51

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 77.33 | 45.4% | 0.474 | 10.43 | 7.41 | 0.404 | 0.544 | -9.28 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 122.89 | 51.7% | 0.859 | 7.37 | 16.67 | 0.727 | 1.018 | -11.42 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm tối thiểu của vùng đặt SL → 2 | 115.11 | 51.3% | 0.757 | 8.09 | 14.23 | 0.723 | 0.798 | -10.47 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: EMA 50 → 0.75 | 123.86 | 52.8% | 0.86 | 7.1 | 17.45 | 0.739 | 0.999 | -10.13 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần SL (/100) → 7 | 172.12 | 38.8% | 0.585 | 18.14 | 9.49 | 0.478 | 0.702 | -14.45 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Trọng số phần Elliott (/100) → 6 + R:R tối thiểu riêng khung 1W → 2 | 116.27 | 50.3% | 0.78 | 8.05 | 14.44 | 0.734 | 0.83 | -11.16 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm tối thiểu của vùng đặt SL → 2 | 121.99 | 52.7% | 0.813 | 8.13 | 15 | 0.739 | 0.898 | -10.11 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Trần điểm khi chart yếu (Trend < x) → -0.375 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 | 108.67 | 48.6% | 0.744 | 8.05 | 13.5 | 0.684 | 0.805 | -10.14 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: POC anchored → 4 | 122.76 | 52.3% | 0.824 | 7.59 | 16.17 | 0.704 | 0.955 | -8.21 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + SL tối đa (% Entry) → 0.35 + Điểm vùng: MACD cắt lên Signal → 0.438 | 95.63 | 45.5% | 0.66 | 9.45 | 10.12 | 0.406 | 0.909 | -8.59 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: BOS → 1 | 55.17 | 43.4% | 0.52 | 10.12 | 5.45 | 0.469 | 0.579 | -6.14 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 + Cộng thêm ngưỡng điểm khung 1W → 2 | 114.47 | 49% | 0.729 | 9.08 | 12.61 | 0.569 | 0.923 | -7.55 |  |

### Vòng 326 — ngẫu nhiên nhiều thông số · mốc: tổng 129.73R, win 53.4%, rủi ro tụt vốn 7.16R, lời÷rủi ro 18.12

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 3 | 151.37 | 36.7% | 0.467 | 20.59 | 7.35 | 0.317 | 0.621 | -12.18 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Mức RSI 30/70 → 0.875 | 36.03 | 56.2% | 0.202 | 5.68 | 6.34 | 0.234 | 0.169 | -11.05 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + R:R tối thiểu riêng khung 1W → 2 | 106.89 | 52% | 0.703 | 7.91 | 13.51 | 0.603 | 0.809 | -11.72 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 113.22 | 51.1% | 0.803 | 7.68 | 14.74 | 0.662 | 0.963 | -12.54 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần Elliott (/100) → 6 | 127.5 | 52.7% | 0.873 | 7.19 | 17.73 | 0.751 | 1.018 | -10.68 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 28.26 | 39.8% | 0.34 | 10.8 | 2.62 | 0.26 | 0.441 | -6.21 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Đệm SL riêng khung 1D (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 103.13 | 46.3% | 0.702 | 10.8 | 9.55 | 0.638 | 0.761 | -11.5 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 112.92 | 50.7% | 0.753 | 8.38 | 13.47 | 0.708 | 0.807 | -10.45 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: POC volume profile cố định → 0.688 + R:R tối thiểu riêng khung 1W → 2 | 101.98 | 49.4% | 0.629 | 8.98 | 11.36 | 0.522 | 0.748 | -13.31 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: HVN cố định → 0.438 | 129.42 | 46.2% | 0.58 | 10.36 | 12.49 | 0.596 | 0.564 | -11.26 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Cộng điểm phân kỳ dương ẩn → 3.5 | 118.7 | 50.7% | 0.802 | 7.96 | 14.91 | 0.686 | 0.946 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: HVN cố định → 0.563 | 116.9 | 51% | 0.774 | 8.14 | 14.36 | 0.674 | 0.887 | -9.66 |  |

### Vòng 325 — ngẫu nhiên nhiều thông số · mốc: tổng 129.73R, win 53.4%, rủi ro tụt vốn 7.32R, lời÷rủi ro 17.72

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Đệm SL riêng khung 1W (ATR) → 0.3 | 94.52 | 47.8% | 0.705 | 8.67 | 10.9 | 0.371 | 1.03 | -10.7 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 114.29 | 47.7% | 0.737 | 8.59 | 13.31 | 0.628 | 0.87 | -11.98 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + SL tối đa (% Entry) → 0.35 + Điểm vùng: POC anchored → 4 + Điểm vùng: EMA 21 → 1.13 | 115.18 | 51% | 0.773 | 7.87 | 14.64 | 0.652 | 0.895 | -6.89 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: BOS → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 128.61 | 53.1% | 0.875 | 7.48 | 17.19 | 0.74 | 1.036 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + % chốt ở TP1 → 0.287 | 127.75 | 41.7% | 0.4 | 12.56 | 10.17 | 0.424 | 0.381 | -8.73 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm tối thiểu của vùng đặt SL → 4 + Coin phải mạnh hơn BTC trong N ngày → 14 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 56.93 | 40.9% | 0.518 | 10.75 | 5.3 | 0.483 | 0.549 | -12.25 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 110.14 | 51% | 0.739 | 8.15 | 13.51 | 0.75 | 0.727 | -10.53 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.813 | 159.81 | 37.9% | 0.536 | 19.44 | 8.22 | 0.422 | 0.656 | -10.04 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Cộng thêm ngưỡng điểm khung 1W → 2 | 127.75 | 52.7% | 0.875 | 7.33 | 17.43 | 0.77 | 0.996 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Break mây Ichimoku → 3 | 113.03 | 49.7% | 0.693 | 8.73 | 12.95 | 0.554 | 0.857 | -9.4 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 7 | 129.73 | 53.4% | 0.889 | 7.32 | 17.72 | 0.763 | 1.037 | -9.66 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Entry (/100) → 28 + Đệm SL riêng khung 4H (ATR) → 0.3 | 168.04 | 38.7% | 0.596 | 17.43 | 9.64 | 0.412 | 0.787 | -2.96 |  |

### Vòng 324 — ngẫu nhiên nhiều thông số · mốc: tổng 129.73R, win 53.4%, rủi ro tụt vốn 7.27R, lời÷rủi ro 17.84

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: EMA 200 → 1 | 119.1 | 49% | 0.759 | 8.95 | 13.31 | 0.65 | 0.908 | -5.51 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Ngưỡng điểm vào kèo → 74 | 116.51 | 51.7% | 0.815 | 7.78 | 14.98 | 0.651 | 1 | -11.51 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Break mây Ichimoku → 1 | 82.05 | 46.7% | 0.767 | 8.83 | 9.29 | 0.633 | 0.925 | -6.08 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: BOS → 1 | 126.95 | 52.4% | 0.864 | 7.48 | 16.97 | 0.74 | 1.007 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trọng số phần SL (/100) → 9 | 126.61 | 51.7% | 0.85 | 7.68 | 16.49 | 0.751 | 0.965 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Mức MACD → 1.13 | 114.95 | 46.2% | 0.793 | 9.57 | 12.01 | 0.64 | 0.975 | -6.48 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: BOS → 3 + Điểm vùng: POC anchored → 2 | 115.66 | 50.3% | 0.756 | 8.26 | 14 | 0.664 | 0.86 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Trọng số phần Momentum (/100) → 21 | 122.02 | 51.9% | 0.772 | 8.09 | 15.08 | 0.652 | 0.928 | -4.67 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 127.38 | 52.7% | 0.872 | 7.52 | 16.94 | 0.752 | 1.011 | -8.34 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Trọng số phần SL (/100) → 9 | 114.19 | 49.7% | 0.746 | 8.29 | 13.77 | 0.664 | 0.839 | -8.63 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 128.61 | 53.1% | 0.875 | 7.42 | 17.33 | 0.74 | 1.036 | -9.66 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Mức MACD → 0.875 | 120.2 | 49.7% | 0.796 | 8.53 | 14.09 | 0.695 | 0.91 | -10.69 |  |

### Vòng 323 — ngẫu nhiên nhiều thông số · mốc: tổng 125.12R, win 53.1%, rủi ro tụt vốn 7.44R, lời÷rủi ro 16.82

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Coin phải mạnh hơn BTC trong N ngày → 14 | 140.38 | 39% | 0.616 | 16.81 | 8.35 | 0.535 | 0.691 | -22.18 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: EMA 50 → 0.75 | 105.75 | 47.2% | 0.665 | 10.12 | 10.45 | 0.646 | 0.682 | -7.38 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 106.82 | 45.7% | 0.659 | 10.5 | 10.17 | 0.686 | 0.634 | -5.87 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Số TP tối đa → 2 + Trọng số phần Momentum (/100) → 21 | 119.34 | 51.7% | 0.823 | 7.5 | 15.91 | 0.694 | 0.977 | -10.51 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Khung lớn phải tăng (trend ≥) → 0.375 | 85.61 | 38.6% | 0.348 | 16.76 | 5.11 | 0.315 | 0.379 | -5.59 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 108.05 | 51.7% | 0.725 | 7.91 | 13.66 | 0.724 | 0.726 | -10.45 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Entry (/100) → 33 + R:R tối thiểu riêng khung 1D → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 98.91 | 47.6% | 0.603 | 8.77 | 11.28 | 0.634 | 0.575 | -9.98 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + % chốt ở TP1 → 0.287 | 125.07 | 53.1% | 0.863 | 7.47 | 16.74 | 0.761 | 0.984 | -10.67 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 78.82 | 45.4% | 0.484 | 10.45 | 7.54 | 0.372 | 0.594 | -10.85 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Trend (/100) → 19 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 108.87 | 49.7% | 0.741 | 8.4 | 12.96 | 0.71 | 0.775 | -12.54 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + SL tối đa (% Entry) → 0.35 + Khung lớn phải tăng (trend ≥) → 0.425 | 109.21 | 52.2% | 0.791 | 7.71 | 14.16 | 0.592 | 1.021 | -10.72 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cổng Dow → CHẶT + Điểm vùng: MACD cắt lên Signal → 0.563 | 91.08 | 52.7% | 0.813 | 7.16 | 12.72 | 0.551 | 1.048 | -11.74 |  |

### Vòng 322 — ngẫu nhiên nhiều thông số · mốc: tổng 125.12R, win 53.1%, rủi ro tụt vốn 7.42R, lời÷rủi ro 16.86

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Momentum (/100) → 21 + Cộng thêm ngưỡng điểm khung 1W → -1 + Số TP tối đa → 2 | 98.89 | 48.5% | 0.738 | 8.24 | 12 | 0.491 | 0.978 | -11.72 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: EMA 50 → 1.13 | 121.5 | 50% | 0.832 | 7.95 | 15.28 | 0.781 | 0.89 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 77.5 | 37.9% | 0.312 | 18 | 4.31 | 0.273 | 0.352 | -4.8 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Đệm SL riêng khung 4H (ATR) → 0.3 | 175 | 38.9% | 0.591 | 18.06 | 9.69 | 0.485 | 0.702 | -15.48 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 120.13 | 51% | 0.84 | 7.69 | 15.62 | 0.76 | 0.931 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm tối thiểu của vùng đặt SL → 2 | 121.51 | 53% | 0.815 | 7.94 | 15.3 | 0.763 | 0.875 | -10.68 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Trọng số phần Entry (/100) → 33 | 123.6 | 52.4% | 0.864 | 7.35 | 16.82 | 0.782 | 0.961 | -10.68 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Mức RSI 30/70 → 0.875 | 124.76 | 50.9% | 0.785 | 8.49 | 14.69 | 0.696 | 0.894 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 120.32 | 52% | 0.813 | 7.73 | 15.57 | 0.717 | 0.929 | -11.65 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Cộng thêm ngưỡng điểm khung 1W → -1 + Cộng điểm phân kỳ dương ẩn → 2.63 | 90.2 | 46.6% | 0.609 | 9.6 | 9.4 | 0.475 | 0.791 | -10.18 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Biên mây Ichimoku → 1.35 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần R:R (/100) → 28 | 83.06 | 46.2% | 0.698 | 9.67 | 8.59 | 0.647 | 0.764 | -6.49 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Elliott (/100) → 6 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 69.65 | 46.1% | 0.544 | 9.75 | 7.14 | 0.447 | 0.654 | -5.84 |  |

### Vòng 321 — ngẫu nhiên nhiều thông số · mốc: tổng 125.12R, win 53.1%, rủi ro tụt vốn 7.45R, lời÷rủi ro 16.79

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 69.15 | 46% | 0.505 | 10.46 | 6.61 | 0.409 | 0.617 | -4.72 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 200 → 3 | 83 | 39.2% | 0.326 | 16.47 | 5.04 | 0.333 | 0.318 | -4.34 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Elliott (/100) → 6 + Khung lớn phải tăng (trend ≥) → 0.425 | 94.66 | 46.3% | 0.706 | 9.05 | 10.46 | 0.425 | 1.005 | -11.76 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 102.67 | 50.7% | 0.694 | 8.13 | 12.63 | 0.602 | 0.791 | -11.72 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Coin phải mạnh hơn BTC trong N ngày → 14 | 94.24 | 50.9% | 0.812 | 8.02 | 11.75 | 0.724 | 0.921 | -17.15 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trọng số phần Elliott (/100) → 10 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 68.95 | 45.4% | 0.53 | 9.93 | 6.94 | 0.542 | 0.518 | -4.99 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: MACD cắt lên Signal → 0.438 | 104.22 | 49.7% | 0.664 | 9.3 | 11.21 | 0.463 | 0.914 | -8.1 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Trọng số phần Divergence (/100) → 9 | 122.27 | 51.4% | 0.861 | 7.51 | 16.28 | 0.791 | 0.939 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL riêng khung 1D (ATR) → 0.3 | 94.09 | 44.4% | 0.55 | 12.62 | 7.46 | 0.581 | 0.52 | -5.48 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Biên mây Ichimoku → 1.05 + Lệnh chờ hết hạn sau (nến) → 6 | 100.89 | 49.6% | 0.747 | 8.33 | 12.11 | 0.676 | 0.832 | -11.41 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 111.25 | 50.3% | 0.737 | 8.33 | 13.36 | 0.674 | 0.807 | -9.66 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + R:R tối thiểu riêng khung 4H → 2 | 73.32 | 34.8% | 0.159 | 24.88 | 2.95 | 0.211 | 0.113 | -6.3 |  |

### Vòng 320 — ngẫu nhiên nhiều thông số · mốc: tổng 125.12R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.91

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Cộng điểm phân kỳ dương ẩn → 2.63 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + % chốt ở TP1 → 0.287 | 97.88 | 48% | 0.653 | 9.64 | 10.15 | 0.579 | 0.739 | -12.29 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: MACD cắt lên Signal → 0.563 | 81.33 | 47.1% | 0.782 | 8.47 | 9.6 | 0.656 | 0.934 | -7.51 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 124.69 | 51.4% | 0.842 | 7.83 | 15.92 | 0.649 | 1.064 | -10.54 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 | 111.25 | 50.3% | 0.737 | 8.42 | 13.21 | 0.674 | 0.807 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 168.87 | 36.1% | 0.512 | 19.35 | 8.73 | 0.501 | 0.523 | -12.51 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + R:R tối thiểu riêng khung 1D → 2 | 93.18 | 44.9% | 0.523 | 10.86 | 8.58 | 0.509 | 0.538 | -6.1 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Xác nhận khung nhỏ (A2) → W | 19.11 | 50.7% | 0.084 | 11.28 | 1.69 | 0.131 | 0.045 | -8.66 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm tối thiểu của vùng đặt SL → 4 | 121.18 | 51.7% | 0.836 | 7.67 | 15.8 | 0.771 | 0.912 | -10.68 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.563 | 114.61 | 38.6% | 0.388 | 19.05 | 6.02 | 0.441 | 0.341 | -27.73 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.688 + Xác nhận khung nhỏ (A2) → W | 79.13 | 30.4% | 0.189 | 35.26 | 2.24 | 0.23 | 0.159 | -37.18 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 114.28 | 47.8% | 0.71 | 9.45 | 12.09 | 0.677 | 0.752 | -8.69 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 69.43 | 46.2% | 0.655 | 9.13 | 7.6 | 0.631 | 0.686 | -8.09 |  |

### Vòng 319 — ngẫu nhiên nhiều thông số · mốc: tổng 125.12R, win 53.1%, rủi ro tụt vốn 7.45R, lời÷rủi ro 16.79

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: HVN cố định → 0.438 + Cộng thêm ngưỡng điểm khung 1D → 7 | 124.62 | 49.7% | 0.804 | 8.05 | 15.48 | 0.779 | 0.835 | -11.27 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần Entry (/100) → 28 | 121.74 | 51.7% | 0.84 | 7.55 | 16.12 | 0.733 | 0.967 | -10.51 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 123.74 | 52% | 0.825 | 7.49 | 16.52 | 0.716 | 0.956 | -11.03 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Trend (/100) → 12 | 115.45 | 50.7% | 0.802 | 7.91 | 14.6 | 0.821 | 0.779 | -9.63 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Cộng điểm phân kỳ dương ẩn → 2.63 | 123.6 | 52.4% | 0.864 | 7.37 | 16.77 | 0.782 | 0.961 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: MACD cắt lên Signal → 0.563 | 124.85 | 51.4% | 0.844 | 7.9 | 15.8 | 0.742 | 0.973 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: HVN anchored → 0.188 | 104.16 | 50.4% | 0.875 | 8.1 | 12.86 | 0.721 | 1.055 | -11.65 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần Elliott (/100) → 10 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 32.8 | 57.7% | 0.21 | 5.55 | 5.91 | 0.254 | 0.169 | -9.65 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 119.79 | 48.4% | 0.763 | 8.5 | 14.09 | 0.762 | 0.764 | -12.62 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 153.03 | 37% | 0.497 | 20.56 | 7.44 | 0.395 | 0.603 | -14.22 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + R:R tối thiểu riêng khung 1W → 2 + Cổng Dow → TẮT | 117.26 | 42.1% | 0.548 | 12.13 | 9.67 | 0.611 | 0.481 | -15.24 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 176.97 | 39% | 0.6 | 17.5 | 10.11 | 0.492 | 0.715 | -13.79 |  |

### Vòng 318 — ngẫu nhiên nhiều thông số · mốc: tổng 125.12R, win 53.1%, rủi ro tụt vốn 7.28R, lời÷rủi ro 17.19

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + R:R tối thiểu riêng khung 4H → 2 | 127.75 | 41.6% | 0.399 | 12.38 | 10.32 | 0.425 | 0.378 | -10.84 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Đệm SL riêng khung 1W (ATR) → 0.3 | 134.04 | 43% | 0.67 | 11.72 | 11.44 | 0.668 | 0.673 | -22.49 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: BOS → 1 + Điểm vùng: Mức RSI 30/70 → 1.13 + R:R tối thiểu riêng khung 1W → 2 | 112.35 | 50.7% | 0.739 | 8.26 | 13.6 | 0.704 | 0.774 | -12.07 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 106.17 | 50% | 0.769 | 7.91 | 13.42 | 0.623 | 0.943 | -12.37 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 92.7 | 45.1% | 0.565 | 11.33 | 8.18 | 0.667 | 0.473 | -7.14 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Trọng số phần Momentum (/100) → 25 | 123.6 | 52.4% | 0.864 | 7.41 | 16.68 | 0.782 | 0.961 | -10.68 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: BOS → 1 | 124.92 | 52.7% | 0.856 | 7.4 | 16.88 | 0.751 | 0.983 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trọng số phần R:R (/100) → 28 | 37.49 | 41.4% | 0.431 | 10.14 | 3.7 | 0.345 | 0.532 | -6.91 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 121.25 | 49.6% | 0.872 | 8.14 | 14.9 | 0.745 | 1.026 | -10.9 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trọng số phần Momentum (/100) → 21 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: MACD cắt lên Signal → 0.438 | 137.73 | 42.4% | 0.596 | 12.05 | 11.43 | 0.632 | 0.56 | -17.22 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + R:R tối thiểu riêng khung 1W → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 77.95 | 43.7% | 0.493 | 11.53 | 6.76 | 0.399 | 0.61 | -6.27 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 118.2 | 50.3% | 0.815 | 7.89 | 14.98 | 0.768 | 0.864 | -9.98 |  |
