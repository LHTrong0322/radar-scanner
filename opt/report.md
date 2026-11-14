# Tối ưu tự động (chạy liên tục) — vòng 205

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 2144 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.2% | 106.1R | 0.651 | 5.74R | 9.53R | 11.13 | 34 | 11.8% | -16.07R | -0.473 | 16.07R |
| **Tốt nhất** | 146 | 52.7% | 131.28R | 0.899 | 5.15R | 7.34R | 17.89 | 31 | 12.9% | -14.96R | -0.483 | 14.96R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 53.6% | 33.37R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.93R | 2 | 0% | -2.04R |
| 4H | 107 | 53.3% | 90.98R | 22 | 18.2% | -7.25R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 138 (Ghép: Điểm vùng: HVN anchored → 0.125 + Khoảng cách tối thiểu TP1 (ATR) → 0.875).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.2% | 106.1R | 9.53R | 11.13 | 34 | 11.8% | -16.07R |
| **Đề xuất** | 171 | 52.6% | 144.79R | 7.32R | 19.78 | 33 | 12.1% | -15.17R |

| Thông số | Bot thật | Đề xuất |
|---|---|---|
| Ngưỡng điểm vào kèo | 70 | **75** |
| SL tối đa (% Entry) | 0.35 | **0.387** |
| Khoảng cách tối thiểu TP1 (ATR) | 0.75 | **0.875** |
| Lệnh chờ hết hạn sau (nến) | 8 | **7** |
| Số TP tối đa | 2 | **3** |
| Điểm ADX > 25 và +DI trội (Momentum) | 3 | **4** |
| Điểm ADX < 13 cạn lực giảm (Momentum) | 1.5 | **2.5** |
| Lọc BTC: giá trên EMA bao nhiêu ngày | 200 | **150** |
| Trọng số phần Trend (/100) | 30 | **15** |
| Trọng số phần Momentum (/100) | 15 | **23** |
| Trọng số phần R:R (/100) | 20 | **30** |
| Trọng số phần SL (/100) | 5 | **8** |
| Điểm vùng: EMA 50 | 0.75 | **0.94** |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) | 2.5 | **3.13** |
| Điểm vùng: HVN anchored | 0.25 | **0.125** |
| Điểm vùng: HVN cố định | 0.25 | **0.5** |

## Thông số khác với bot thật

| Thông số | Bot thật | Đề xuất |
|---|---|---|
| Ngưỡng điểm vào kèo | 70 | **75** |
| SL tối đa (% Entry) | 0.35 | **0.387** |
| Lệnh chờ hết hạn sau (nến) | 8 | **7** |
| Số TP tối đa | 2 | **3** |
| Điểm ADX > 25 và +DI trội (Momentum) | 3 | **4** |
| Điểm ADX < 13 cạn lực giảm (Momentum) | 1.5 | **2.5** |
| Lọc BTC: giá trên EMA bao nhiêu ngày | 200 | **150** |
| Trọng số phần Trend (/100) | 30 | **15** |
| Trọng số phần Momentum (/100) | 15 | **23** |
| Trọng số phần R:R (/100) | 20 | **30** |
| Trọng số phần SL (/100) | 5 | **8** |
| Điểm vùng: EMA 50 | 0.75 | **0.94** |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) | 2.5 | **3.13** |
| Điểm vùng: HVN cố định | 0.25 | **0.5** |

## Các thay đổi đã nhận (mới nhất trước)

| Vòng | Thông số | Từ → Thành | Tổng R | Tỷ lệ thắng | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro |
|---|---|---|---|---|---|---|
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

### Vòng 205 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.34R, lời÷rủi ro 17.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Cộng thêm ngưỡng điểm khung 4H → 2 + R:R tối thiểu riêng khung 1D → 2 | 109.82 | 46.5% | 0.646 | 8.81 | 12.47 | 0.592 | 0.698 | -11.73 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + R:R tối thiểu tới TP1 → 2.38 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 118.72 | 46.4% | 0.715 | 9.63 | 12.33 | 0.759 | 0.676 | -15.87 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần Trend (/100) → 19 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 85.75 | 44.1% | 0.564 | 10.85 | 7.9 | 0.375 | 0.811 | -9.64 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.563 | 114.28 | 46.6% | 0.701 | 10.12 | 11.29 | 0.663 | 0.738 | -13.57 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 97.32 | 48.6% | 0.658 | 9.2 | 10.58 | 0.406 | 0.954 | -12.38 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Ngưỡng điểm vào kèo → 77 | 128.23 | 52.1% | 0.878 | 7.5 | 17.1 | 0.778 | 0.99 | -13.48 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 110.45 | 47.6% | 0.762 | 8.78 | 12.58 | 0.535 | 1.005 | -16 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: Mức RSI 30/70 → 1.13 | 156.08 | 45.8% | 0.729 | 10.4 | 15.01 | 0.673 | 0.785 | -19.85 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 32.57 | 56.7% | 0.207 | 6.19 | 5.26 | 0.277 | 0.138 | -8.78 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + R:R tối thiểu riêng khung 4H → 2 | 121.18 | 42.6% | 0.388 | 12.81 | 9.46 | 0.419 | 0.362 | -12.15 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 110.11 | 49% | 0.729 | 8.99 | 12.25 | 0.563 | 0.916 | -11.36 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 | 90.54 | 46.2% | 0.624 | 9.62 | 9.41 | 0.461 | 0.82 | -12.72 |  |

### Vòng 204 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.2R, lời÷rủi ro 18.23

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần Elliott (/100) → 10 | 98.91 | 37.3% | 0.38 | 16.79 | 5.89 | 0.359 | 0.401 | -9.4 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: MACD cắt lên Signal → 0.438 | 86.01 | 48% | 0.688 | 9.4 | 9.15 | 0.458 | 0.971 | -18.85 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + % chốt ở TP1 → 0.287 + Điểm tối thiểu của vùng đặt SL → 2 | 100.95 | 50.3% | 0.678 | 8.37 | 12.06 | 0.668 | 0.687 | -13.69 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần R:R (/100) → 28 | 119.8 | 51.7% | 0.826 | 7.41 | 16.17 | 0.674 | 0.999 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Trend (/100) → 12 + R:R tối thiểu riêng khung 4H → 2 | 42.47 | 37.3% | 0.251 | 14.38 | 2.95 | 0.277 | 0.223 | -5.01 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Mức MACD → 1.13 | 141.48 | 42.4% | 0.438 | 11.91 | 11.88 | 0.465 | 0.414 | -11.71 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Điểm vùng: EMA 50 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 101.97 | 50% | 0.698 | 8.7 | 11.72 | 0.621 | 0.792 | -13.71 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Entry (/100) → 33 + Điểm vùng: POC volume profile cố định → 0.813 + Cổng Dow → TẮT | 124.95 | 42.3% | 0.581 | 12.2 | 10.24 | 0.587 | 0.575 | -15.79 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Fib sóng 4 → 0.938 | 119.61 | 49.7% | 0.792 | 8.15 | 14.68 | 0.764 | 0.822 | -13.94 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 75.24 | 42.9% | 0.448 | 12.53 | 6 | 0.283 | 0.621 | -10.56 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: HVN cố định → 0.563 + Cộng điểm phân kỳ dương ẩn → 3.5 | 98.59 | 49.6% | 0.815 | 8.13 | 12.13 | 0.672 | 0.998 | -21.43 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.563 | 105.06 | 45.7% | 0.761 | 9.37 | 11.21 | 0.519 | 1.025 | -14.24 |  |

### Vòng 203 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.34R, lời÷rủi ro 17.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Ngưỡng điểm vào kèo → 77 | 123.48 | 51.7% | 0.863 | 7.58 | 16.29 | 0.778 | 0.963 | -12.66 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: MACD cắt lên Signal → 0.438 | 116.01 | 47.9% | 0.712 | 9.66 | 12.01 | 0.628 | 0.805 | -13.48 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 125.68 | 52% | 0.849 | 7.62 | 16.49 | 0.756 | 0.953 | -11.35 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 87.22 | 45.8% | 0.519 | 10.09 | 8.64 | 0.377 | 0.662 | -13.38 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN anchored → 0.188 + Coin phải mạnh hơn BTC trong N ngày → 14 | 128.86 | 39.7% | 0.341 | 13.9 | 9.27 | 0.471 | 0.253 | -29.04 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Lệnh chờ hết hạn sau (nến) → 6 + Số TP tối đa → 2 | 97.82 | 49.3% | 0.709 | 8.43 | 11.6 | 0.695 | 0.725 | -13.33 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 127.23 | 51.4% | 0.871 | 7.53 | 16.9 | 0.784 | 0.972 | -14.83 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Lệnh chờ hết hạn sau (nến) → 6 + Cộng điểm phân kỳ dương ẩn → 3.5 + Coin phải mạnh hơn BTC trong N ngày → 14 | 79.23 | 46.8% | 0.714 | 8.93 | 8.87 | 0.602 | 0.855 | -20.03 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + R:R tối thiểu riêng khung 1W → 2 + SL tối đa (% Entry) → 0.425 | 112.51 | 48.6% | 0.781 | 8.26 | 13.62 | 0.709 | 0.852 | -15.99 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 138.34 | 45.9% | 0.599 | 10.15 | 13.63 | 0.65 | 0.549 | -18.42 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Mức RSI 30/70 → 0.875 + SL tối đa (% Entry) → 0.35 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 87.88 | 46% | 0.709 | 9.79 | 8.98 | 0.607 | 0.84 | -9.88 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: BOS → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 38.64 | 43.6% | 0.495 | 9.21 | 4.2 | 0.283 | 0.757 | -4.13 |  |

### Vòng 202 — ngẫu nhiên nhiều thông số · mốc: tổng 132.11R, win 53.6%, rủi ro tụt vốn 7.25R, lời÷rủi ro 18.22

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Cộng điểm phân kỳ dương ẩn → 2.63 | 118.81 | 51% | 0.819 | 8.03 | 14.8 | 0.798 | 0.84 | -11.62 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Xác nhận khung nhỏ (A2) → W + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: MACD cắt lên Signal → 0.438 | 82.84 | 37.9% | 0.317 | 17.82 | 4.65 | 0.303 | 0.332 | -11.47 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 63.11 | 45% | 0.579 | 10.27 | 6.15 | 0.372 | 0.814 | -7.68 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: Fib sóng 4 → 1.56 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 111.75 | 49.2% | 0.847 | 8.35 | 13.38 | 0.758 | 0.95 | -14.92 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Cổng Dow → TẮT + % chốt ở TP1 → 0.287 | 161.82 | 46.4% | 0.774 | 9.93 | 16.3 | 0.749 | 0.799 | -20.53 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: HVN cố định → 0.438 | 112.18 | 50% | 0.837 | 8.06 | 13.92 | 0.661 | 1.036 | -15.77 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: EMA 200 → 1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 127.47 | 50.9% | 0.802 | 7.95 | 16.03 | 0.744 | 0.881 | -11.15 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 62.86 | 41.5% | 0.533 | 11.59 | 5.42 | 0.338 | 0.709 | -10.48 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 1D → 2 + Khung lớn phải tăng (trend ≥) → 0.425 | 59.07 | 40.8% | 0.492 | 10.75 | 5.49 | 0.405 | 0.566 | -11.86 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Trọng số phần Elliott (/100) → 10 + Cộng thêm ngưỡng điểm khung 1W → -1 + Số TP tối đa → 2 | 127.93 | 52.9% | 0.914 | 7.38 | 17.33 | 0.783 | 1.065 | -13.95 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cổng Dow → TẮT | 28.13 | 48.7% | 0.144 | 9 | 3.13 | 0.225 | 0.062 | -15.36 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Lệnh chờ hết hạn sau (nến) → 8 + Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: EMA 50 → 0.75 | 193.59 | 38.6% | 0.607 | 17.99 | 10.76 | 0.483 | 0.739 | -19.18 |  |

### Vòng 201 — ngẫu nhiên nhiều thông số · mốc: tổng 131.29R, win 52.7%, rủi ro tụt vốn 7.36R, lời÷rủi ro 17.84

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: HVN anchored → 0.188 | 124.75 | 51.7% | 0.86 | 7.75 | 16.1 | 0.779 | 0.955 | -17.08 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 111.28 | 48.4% | 0.691 | 9.09 | 12.24 | 0.675 | 0.709 | -11.87 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 94.38 | 46% | 0.629 | 9.51 | 9.92 | 0.479 | 0.82 | -12.22 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: EMA 50 → 1.13 | 126.57 | 49.7% | 0.838 | 8.09 | 15.65 | 0.75 | 0.946 | -13.94 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Cộng thêm ngưỡng điểm khung 1W → -1 | 131.29 | 52.7% | 0.899 | 7.36 | 17.84 | 0.777 | 1.043 | -14.96 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 + R:R tối thiểu tới TP1 → 2.63 | 107.21 | 50.4% | 0.872 | 7.73 | 13.87 | 0.628 | 1.163 | -15.93 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Cổng Dow → TẮT + Điểm vùng: HVN cố định → 0.438 | 155.92 | 46.3% | 0.715 | 10.32 | 15.11 | 0.668 | 0.76 | -21.94 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 + Điểm vùng: BOS → 1 + Trọng số phần Entry (/100) → 28 + R:R tối thiểu riêng khung 1D → 2 | 106.73 | 46.5% | 0.628 | 8.81 | 12.11 | 0.519 | 0.735 | -12.24 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm tối thiểu của vùng đặt SL → 4 | 127.23 | 51.4% | 0.871 | 7.57 | 16.81 | 0.784 | 0.972 | -14.84 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cộng thêm ngưỡng điểm khung 1D → 4 + Cổng Dow → CHẶT + Trọng số phần R:R (/100) → 28 | 55.28 | 47.4% | 0.57 | 8.65 | 6.39 | 0.291 | 0.854 | -11.56 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Số TP tối đa → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 119.22 | 47.1% | 0.769 | 9.38 | 12.71 | 0.53 | 1.037 | -15.9 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: BOS → 1 | 127.23 | 51.4% | 0.871 | 7.57 | 16.81 | 0.784 | 0.972 | -14.84 |  |

### Vòng 200 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.31R, lời÷rủi ro 17.96

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Xác nhận khung nhỏ (A2) → W + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 108.35 | 39.4% | 0.388 | 15.98 | 6.78 | 0.516 | 0.248 | -21.19 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 + % chốt ở TP1 → 0.307 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 119.57 | 49.3% | 0.879 | 8.35 | 14.32 | 0.703 | 1.084 | -13.71 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Cổng Dow → CHẶT + Điểm vùng: Biên mây Ichimoku → 1.05 + SL tối đa (% Entry) → 0.35 | 90.6 | 50.9% | 0.795 | 7.04 | 12.87 | 0.568 | 0.992 | -17.31 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Lệnh chờ hết hạn sau (nến) → 6 | 109.33 | 49.6% | 0.81 | 7.78 | 14.05 | 0.742 | 0.889 | -13.57 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 + Điểm vùng: POC anchored → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 106.18 | 48.6% | 0.717 | 8.41 | 12.63 | 0.597 | 0.851 | -15.72 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 128.18 | 52% | 0.866 | 7.69 | 16.67 | 0.762 | 0.989 | -15.93 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Biên mây Ichimoku → 1.35 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 161 | 37.3% | 0.546 | 18.94 | 8.5 | 0.396 | 0.683 | -14.26 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: HVN cố định → 0.438 + % chốt ở TP1 → 0.307 + Trọng số phần Elliott (/100) → 6 | 129.66 | 51.7% | 0.87 | 7.49 | 17.31 | 0.772 | 0.984 | -14.97 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib sóng 4 → 1.56 | 136.44 | 45.7% | 0.593 | 10.34 | 13.2 | 0.657 | 0.531 | -18.42 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng điểm phân kỳ dương ẩn → 3.5 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + SL tối đa (% Entry) → 0.425 | 128.43 | 48.7% | 0.856 | 8.31 | 15.45 | 0.813 | 0.911 | -14.07 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Cộng thêm ngưỡng điểm khung 1D → 7 + Trọng số phần Entry (/100) → 33 | 112.96 | 48.7% | 0.743 | 8.45 | 13.37 | 0.666 | 0.827 | -12.04 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: BOS → 1 + Trọng số phần Elliott (/100) → 6 | 82.2 | 45.9% | 0.741 | 9.19 | 8.94 | 0.589 | 0.932 | -9.89 |  |

### Vòng 199 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.35R, lời÷rủi ro 17.86

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 | 125.9 | 51.4% | 0.874 | 7.55 | 16.68 | 0.744 | 1.02 | -15.88 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: EMA 200 → 1 + Điểm vùng: HVN cố định → 0.563 | 105.65 | 41.9% | 0.316 | 13.52 | 7.81 | 0.391 | 0.247 | -15.37 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 115.19 | 47.3% | 0.778 | 9.59 | 12.01 | 0.588 | 1.008 | -11.79 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Vùng RSI 45–55 → 0.875 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: EMA 21 → 1.13 | 97.88 | 44.3% | 0.563 | 9.61 | 10.19 | 0.537 | 0.585 | -11.59 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: MACD cắt lên Signal → 0.438 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 1 | 176.33 | 39.3% | 0.598 | 17.99 | 9.8 | 0.446 | 0.752 | -15.16 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 31.08 | 56.8% | 0.201 | 5.93 | 5.24 | 0.296 | 0.109 | -9.85 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số TP tối đa → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 33.54 | 56.7% | 0.214 | 5.95 | 5.64 | 0.288 | 0.144 | -10.26 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: EMA 50 → 0.75 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: EMA 21 → 1.13 | 121.29 | 49% | 0.848 | 8.08 | 15.01 | 0.664 | 1.063 | -13.2 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: BOS → 1 + Trọng số phần SL (/100) → 9 | 115.15 | 49% | 0.733 | 8.82 | 13.06 | 0.595 | 0.897 | -15.35 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Điểm tối thiểu của vùng đặt SL → 4 + Đệm SL riêng khung 1D (ATR) → 0.3 | 110.47 | 45.7% | 0.682 | 10.55 | 10.47 | 0.688 | 0.676 | -14.33 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + R:R tối thiểu tới TP1 → 2.63 | 81.28 | 50.4% | 0.661 | 8.78 | 9.26 | 0.536 | 0.816 | -15.95 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 105.98 | 39.1% | 0.269 | 15.03 | 7.05 | 0.287 | 0.256 | -22.25 |  |

### Vòng 198 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.34R, lời÷rủi ro 17.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + % chốt ở TP1 → 0.307 | 129.48 | 52.4% | 0.893 | 7.36 | 17.59 | 0.765 | 1.042 | -14.97 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 108.88 | 49% | 0.731 | 8.9 | 12.23 | 0.563 | 0.925 | -12.38 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu riêng khung 4H → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 | 115.75 | 42.3% | 0.357 | 12.46 | 9.29 | 0.384 | 0.334 | -14.98 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: POC anchored → 2 | 109.34 | 46.1% | 0.663 | 9.17 | 11.92 | 0.643 | 0.684 | -16.36 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Ngưỡng điểm vào kèo → 74 + Trọng số phần Entry (/100) → 28 + Cộng thêm ngưỡng điểm khung 1W → 2 | 129.37 | 51% | 0.868 | 7.54 | 17.16 | 0.772 | 0.977 | -14.96 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: MACD cắt lên Signal → 0.563 | 156.08 | 45.8% | 0.729 | 10.3 | 15.15 | 0.673 | 0.785 | -19.85 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần R:R (/100) → 28 | 119.49 | 51.7% | 0.824 | 7.5 | 15.93 | 0.67 | 0.999 | -14.96 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 33.63 | 57.3% | 0.214 | 5.78 | 5.82 | 0.32 | 0.112 | -9.85 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 101.38 | 46.7% | 0.6 | 9.14 | 11.09 | 0.477 | 0.724 | -16.75 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Fib sóng 4 → 1.56 + Ngưỡng điểm vào kèo → 77 | 88.17 | 44.7% | 0.588 | 10.36 | 8.51 | 0.452 | 0.751 | -11.62 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trọng số phần Entry (/100) → 33 + Điểm vùng: MACD cắt lên Signal → 0.438 | 53.45 | 44.1% | 0.421 | 11.02 | 4.85 | 0.313 | 0.545 | -5.76 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 44.36 | 31.8% | 0.256 | 22.46 | 1.98 | 0.125 | 0.389 | 4.84 |  |

### Vòng 197 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.31R, lời÷rủi ro 17.96

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: POC anchored → 4 | 116.95 | 50.7% | 0.78 | 8.23 | 14.21 | 0.607 | 0.966 | -14.1 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: POC volume profile cố định → 0.813 | 131.09 | 52.4% | 0.892 | 7.39 | 17.74 | 0.765 | 1.043 | -13.94 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Ngưỡng điểm vào kèo → 77 | 115.27 | 48.7% | 0.749 | 8.54 | 13.5 | 0.597 | 0.917 | -13.87 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần SL (/100) → 7 + Điểm vùng: POC anchored → 4 + Cổng Dow → TẮT | 146.13 | 45% | 0.67 | 10.64 | 13.73 | 0.667 | 0.673 | -14.74 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 25.59 | 37.1% | 0.366 | 11.37 | 2.25 | 0.196 | 0.591 | -1.95 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng điểm phân kỳ dương ẩn → 3.5 | 16.88 | 43.7% | 0.071 | 13.89 | 1.22 | 0.16 | -0.024 | -10.55 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 127.7 | 50% | 0.819 | 7.92 | 16.12 | 0.792 | 0.851 | -15.54 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 33.23 | 56.6% | 0.209 | 5.84 | 5.69 | 0.276 | 0.146 | -10.25 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: EMA 200 → 3 | 105.88 | 48% | 0.697 | 9.26 | 11.43 | 0.515 | 0.899 | -12.34 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: HVN anchored → 0.313 | 129.52 | 52.1% | 0.887 | 7.48 | 17.32 | 0.755 | 1.043 | -14.96 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.73 | 50.7% | 0.694 | 8.32 | 12.35 | 0.641 | 0.755 | -13.41 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.813 | 181.69 | 39% | 0.596 | 17.63 | 10.31 | 0.5 | 0.696 | -13 |  |

### Vòng 196 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.28R, lời÷rủi ro 18.03

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + R:R tối thiểu riêng khung 1D → 2 | 108.81 | 46.2% | 0.636 | 9.16 | 11.88 | 0.573 | 0.698 | -11.73 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 | 110.06 | 48.6% | 0.764 | 8.3 | 13.26 | 0.617 | 0.92 | -16.74 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 17.03 | 38.1% | 0.203 | 12.29 | 1.39 | 0.188 | 0.221 | -6.25 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 79.3 | 46.4% | 0.518 | 9.77 | 8.12 | 0.402 | 0.649 | -13.43 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: EMA 200 → 1 | 86.01 | 47.5% | 0.717 | 8.86 | 9.71 | 0.679 | 0.761 | -19.38 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 172.2 | 37.7% | 0.542 | 19.8 | 8.7 | 0.515 | 0.567 | -16.83 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + R:R tối thiểu tới TP1 → 2.63 | 105.37 | 50.4% | 0.843 | 8.23 | 12.8 | 0.71 | 0.987 | -14.97 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 124.26 | 50% | 0.84 | 7.85 | 15.83 | 0.779 | 0.911 | -13.59 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 117.78 | 49.7% | 0.801 | 8.16 | 14.43 | 0.715 | 0.891 | -15.99 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Xác nhận khung nhỏ (A2) → W + Trọng số phần Elliott (/100) → 10 | 99.12 | 36.6% | 0.339 | 17.67 | 5.61 | 0.363 | 0.315 | -10.28 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Divergence (/100) → 9 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 67.74 | 44.6% | 0.458 | 11.14 | 6.08 | 0.287 | 0.61 | -14.01 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 172.8 | 38.1% | 0.563 | 19.14 | 9.03 | 0.494 | 0.633 | -18.23 |  |
