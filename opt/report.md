# Tối ưu tự động (chạy liên tục) — vòng 159

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 1592 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.2% | 106.28R | 0.652 | 5.5R | 9.35R | 11.37 | 34 | 11.8% | -16.07R | -0.473 | 16.07R |
| **Tốt nhất** | 147 | 52.4% | 131.23R | 0.893 | 5.15R | 7.33R | 17.90 | 31 | 12.9% | -14.96R | -0.483 | 14.96R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 53.6% | 33.37R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.94R | 2 | 0% | -2.04R |
| 4H | 108 | 52.8% | 90.92R | 22 | 18.2% | -7.25R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 138 (Ghép: Điểm vùng: HVN anchored → 0.125 + Khoảng cách tối thiểu TP1 (ATR) → 0.875).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.2% | 106.28R | 9.35R | 11.37 | 34 | 11.8% | -16.07R |
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

### Vòng 159 — ngẫu nhiên nhiều thông số · mốc: tổng 131.23R, win 52.4%, rủi ro tụt vốn 7.33R, lời÷rủi ro 17.90

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Trọng số phần SL (/100) → 7 + R:R tối thiểu riêng khung 1D → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 28.01 | 54.4% | 0.154 | 6.81 | 4.11 | 0.212 | 0.106 | -9.71 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 34 | 57% | 0.215 | 5.65 | 6.02 | 0.288 | 0.148 | -9.19 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu riêng khung 4H → 2 | 34.62 | 47.8% | 0.103 | 9.61 | 3.6 | 0.202 | 0.03 | -12.88 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Momentum (/100) → 25 + Số TP tối đa → 2 | 33.97 | 57% | 0.215 | 5.77 | 5.89 | 0.288 | 0.147 | -10.26 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cộng điểm phân kỳ dương ẩn → 3.5 | 127.93 | 51.3% | 0.853 | 7.51 | 17.03 | 0.75 | 0.974 | -15.93 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: EMA 21 → 1.13 + Trọng số phần Divergence (/100) → 9 | 131.22 | 51.3% | 0.875 | 7.58 | 17.31 | 0.748 | 1.019 | -14.52 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Break mây Ichimoku → 3 | 108.94 | 39.9% | 0.381 | 16.08 | 6.77 | 0.324 | 0.438 | -15.62 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Momentum (/100) → 25 | 119.14 | 50% | 0.774 | 8.2 | 14.53 | 0.687 | 0.883 | -10.56 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: EMA 50 → 0.75 | 115.95 | 47.2% | 0.817 | 8.96 | 12.94 | 0.643 | 0.99 | -16 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Fib sóng 4 → 1.56 | 130.96 | 52.1% | 0.897 | 7.33 | 17.87 | 0.784 | 1.027 | -14.96 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 63.88 | 47% | 0.477 | 9.8 | 6.52 | 0.441 | 0.506 | -17.07 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cổng Dow → CHẶT | 88.42 | 51.8% | 0.776 | 7.07 | 12.51 | 0.399 | 1.115 | -16.02 |  |

### Vòng 158 — ngẫu nhiên nhiều thông số · mốc: tổng 131.23R, win 52.4%, rủi ro tụt vốn 7.33R, lời÷rủi ro 17.90

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Elliott (/100) → 10 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 110.51 | 48.6% | 0.789 | 8.25 | 13.4 | 0.633 | 0.96 | -16.78 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 92.57 | 45.9% | 0.634 | 9.41 | 9.84 | 0.48 | 0.821 | -12.72 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần SL (/100) → 9 + Điểm vùng: POC anchored → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 | 128.21 | 41.8% | 0.394 | 11.99 | 10.69 | 0.378 | 0.408 | -11.34 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Điểm vùng: HVN anchored → 0.188 | 132.06 | 51.4% | 0.905 | 7.38 | 17.89 | 0.817 | 1.002 | -15.38 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Xác nhận khung nhỏ (A2) → W | 115.45 | 40.1% | 0.421 | 15 | 7.7 | 0.403 | 0.438 | -10.43 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 127.62 | 49.7% | 0.813 | 7.88 | 16.2 | 0.792 | 0.838 | -15.54 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Momentum (/100) → 21 + R:R tối thiểu riêng khung 1W → 2 | 117.58 | 41.9% | 0.379 | 12.35 | 9.52 | 0.357 | 0.398 | -12.72 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Cổng Dow → CHẶT + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần Divergence (/100) → 12 | 77.82 | 48.8% | 0.633 | 9.03 | 8.62 | 0.27 | 0.956 | -13.44 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Coin phải mạnh hơn BTC trong N ngày → 14 | 98.11 | 48.8% | 0.811 | 8.09 | 12.13 | 0.691 | 0.955 | -21.43 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: EMA 50 → 1.13 | 124.77 | 45.9% | 0.725 | 9.64 | 12.94 | 0.678 | 0.784 | -15.92 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL riêng khung 4H (ATR) → 0.3 | 182.04 | 38.8% | 0.599 | 17.29 | 10.53 | 0.506 | 0.694 | -14.03 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Mức RSI 30/70 → 1.13 | 72.29 | 43.2% | 0.578 | 10.74 | 6.73 | 0.512 | 0.65 | -8.13 |  |

### Vòng 157 — ngẫu nhiên nhiều thông số · mốc: tổng 131.23R, win 52.4%, rủi ro tụt vốn 7.24R, lời÷rủi ro 18.13

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Fib sóng 4 → 0.938 + Khung lớn phải tăng (trend ≥) → 0.375 | 118.14 | 48.7% | 0.777 | 8.27 | 14.29 | 0.735 | 0.822 | -15.54 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 35.63 | 40.9% | 0.405 | 10.23 | 3.48 | 0.311 | 0.522 | -10.01 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Break mây Ichimoku → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 114.08 | 49.4% | 0.704 | 8.73 | 13.07 | 0.548 | 0.89 | -14.7 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 | 126.78 | 51.4% | 0.88 | 7.72 | 16.42 | 0.749 | 1.027 | -15.46 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 + Khung lớn phải tăng (trend ≥) → 0.375 | 125.43 | 51.7% | 0.842 | 7.61 | 16.48 | 0.686 | 1.017 | -11.7 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần SL (/100) → 9 | 123.28 | 50.3% | 0.806 | 7.98 | 15.45 | 0.801 | 0.81 | -13.94 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 115.65 | 50.3% | 0.776 | 8.05 | 14.37 | 0.626 | 0.955 | -13.97 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm tối thiểu của vùng đặt SL → 4 | 122.83 | 50.7% | 0.841 | 7.85 | 15.65 | 0.778 | 0.912 | -13.48 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Xác nhận khung nhỏ (A2) → W + Coin phải mạnh hơn BTC trong N ngày → 14 | 53.99 | 38.3% | 0.269 | 17.93 | 3.01 | 0.192 | 0.333 | -17.05 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 167.18 | 38.7% | 0.599 | 16.98 | 9.85 | 0.403 | 0.789 | -12.25 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 | 126.29 | 51% | 0.848 | 7.67 | 16.47 | 0.716 | 1 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần Divergence (/100) → 9 | 110.13 | 46.5% | 0.64 | 9.05 | 12.17 | 0.592 | 0.685 | -10.72 |  |

### Vòng 156 — ngẫu nhiên nhiều thông số · mốc: tổng 131.23R, win 52.4%, rủi ro tụt vốn 7.41R, lời÷rủi ro 17.71

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 + Cộng điểm phân kỳ dương ẩn → 2.63 | 28.98 | 53.8% | 0.168 | 7.04 | 4.12 | 0.244 | 0.095 | -9.59 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Mức MACD → 0.875 | 127.83 | 50.9% | 0.804 | 8.38 | 15.25 | 0.705 | 0.92 | -14.16 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: EMA 200 → 1 | 123.54 | 51.3% | 0.792 | 7.78 | 15.88 | 0.689 | 0.921 | -10.14 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: BOS → 1 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 | 134 | 50.6% | 0.838 | 8.44 | 15.88 | 0.722 | 0.975 | -14.96 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Trend (/100) → 12 + Ngưỡng điểm vào kèo → 77 + Cổng Dow → CHẶT | 80.52 | 50.9% | 0.706 | 7.46 | 10.79 | 0.346 | 1.019 | -13.49 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 88.84 | 45.2% | 0.608 | 9.77 | 9.09 | 0.48 | 0.764 | -12.77 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 36.78 | 54.7% | 0.216 | 5.73 | 6.42 | 0.281 | 0.147 | -9.86 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần Momentum (/100) → 25 | 121.66 | 52.7% | 0.833 | 7.34 | 16.57 | 0.665 | 1.027 | -14.96 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 87.92 | 41.4% | 0.379 | 12.7 | 6.92 | 0.405 | 0.353 | -8.98 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: EMA 200 → 1 + Đệm SL riêng khung 1D (ATR) → 0.3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 77.78 | 39.9% | 0.477 | 13.83 | 5.62 | 0.5 | 0.453 | -6.31 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Entry (/100) → 33 | 83.95 | 47% | 0.718 | 8.81 | 9.53 | 0.549 | 0.921 | -20.4 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Xác nhận khung nhỏ (A2) → W + Điểm tối thiểu của vùng đặt SL → 4 | 70.39 | 40.6% | 0.402 | 13.21 | 5.33 | 0.415 | 0.388 | -15.57 |  |

### Vòng 155 — ngẫu nhiên nhiều thông số · mốc: tổng 131.23R, win 52.4%, rủi ro tụt vốn 7.38R, lời÷rủi ro 17.78

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN anchored → 0.188 | 126.22 | 49.4% | 0.82 | 8.28 | 15.24 | 0.717 | 0.934 | -15.35 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Lệnh chờ hết hạn sau (nến) → 8 | 83.18 | 44.6% | 0.47 | 10.65 | 7.81 | 0.349 | 0.587 | -13.38 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + % chốt ở TP1 → 0.307 | 132.88 | 45.6% | 0.583 | 9.97 | 13.33 | 0.637 | 0.53 | -16.91 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: POC volume profile cố định → 0.813 | 127.57 | 51.7% | 0.868 | 7.46 | 17.1 | 0.777 | 0.973 | -13.94 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Số TP tối đa → 2 + Ngưỡng điểm vào kèo → 74 | 126.32 | 51% | 0.837 | 7.55 | 16.73 | 0.705 | 0.989 | -15.22 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Số TP tối đa → 2 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 | 112.64 | 46.5% | 0.663 | 8.88 | 12.68 | 0.596 | 0.725 | -11.74 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: BOS → 3 | 127.01 | 51.7% | 0.864 | 7.55 | 16.82 | 0.724 | 1.027 | -13.06 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Trọng số phần Entry (/100) → 28 + Cổng Dow → CHẶT | 98.31 | 52.9% | 0.813 | 7.39 | 13.3 | 0.535 | 1.052 | -11.94 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: EMA 50 → 0.75 | 123.18 | 50.7% | 0.844 | 7.56 | 16.29 | 0.713 | 0.989 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Cộng thêm ngưỡng điểm khung 4H → 2 | 130.27 | 51.7% | 0.886 | 7.38 | 17.65 | 0.784 | 1.005 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 178.21 | 39.2% | 0.592 | 17.77 | 10.03 | 0.473 | 0.716 | -15.47 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Số TP tối đa → 2 | 129.3 | 42.3% | 0.399 | 12.36 | 10.46 | 0.39 | 0.407 | -12.71 |  |

### Vòng 154 — ngẫu nhiên nhiều thông số · mốc: tổng 131.23R, win 52.4%, rủi ro tụt vốn 7.34R, lời÷rủi ro 17.88

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: HVN anchored → 0.188 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 93.38 | 47% | 0.627 | 9.62 | 9.71 | 0.448 | 0.851 | -11.2 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: EMA 50 → 0.75 | 130.87 | 50.6% | 0.839 | 8.18 | 16 | 0.714 | 0.985 | -14.96 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần Divergence (/100) → 9 + Điểm vùng: HVN cố định → 0.563 | 104.48 | 38.8% | 0.397 | 16.41 | 6.37 | 0.38 | 0.413 | -12.38 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 20.54 | 55.2% | 0.153 | 7.28 | 2.82 | 0.227 | 0.08 | -10.53 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: Break mây Ichimoku → 1 + % chốt ở TP1 → 0.307 + R:R tối thiểu tới TP1 → 2.63 | 100.95 | 49.2% | 0.814 | 8.34 | 12.1 | 0.705 | 0.926 | -14.97 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 | 129.38 | 51.4% | 0.886 | 7.31 | 17.7 | 0.761 | 1.03 | -14.78 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cộng thêm ngưỡng điểm khung 1W → -1 | 67.46 | 45% | 0.482 | 10.84 | 6.22 | 0.333 | 0.649 | -8.42 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 133.57 | 49.1% | 0.8 | 8.38 | 15.94 | 0.775 | 0.829 | -15.54 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Cổng Dow → TẮT + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 132.72 | 42.7% | 0.629 | 11.88 | 11.17 | 0.582 | 0.676 | -24.64 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: EMA 50 → 0.75 | 139.94 | 42.9% | 0.432 | 11.71 | 11.95 | 0.453 | 0.414 | -11.12 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần Trend (/100) → 12 | 118.69 | 51% | 0.807 | 7.61 | 15.6 | 0.67 | 0.959 | -13.64 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN anchored → 0.313 + R:R tối thiểu riêng khung 1W → 2 | 119 | 50.3% | 0.788 | 8.16 | 14.58 | 0.713 | 0.865 | -12.74 |  |

### Vòng 153 — ngẫu nhiên nhiều thông số · mốc: tổng 131.33R, win 52.7%, rủi ro tụt vốn 7.33R, lời÷rủi ro 17.92

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: EMA 21 → 1.13 | 70.48 | 44.4% | 0.522 | 10.65 | 6.62 | 0.403 | 0.654 | -5.6 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Cộng thêm ngưỡng điểm khung 1D → 7 | 88.63 | 46.1% | 0.531 | 9.72 | 9.12 | 0.409 | 0.648 | -13.38 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Trọng số phần Momentum (/100) → 25 | 115.07 | 51.4% | 0.788 | 7.75 | 14.85 | 0.59 | 1.022 | -12.02 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 129.63 | 52.4% | 0.894 | 7.34 | 17.66 | 0.789 | 1.009 | -11.7 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu tới TP1 → 2.38 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 119.21 | 34.4% | 0.36 | 22.95 | 5.19 | 0.278 | 0.433 | -12.58 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Lệnh chờ hết hạn sau (nến) → 8 | 91.09 | 48.5% | 0.67 | 8.85 | 10.29 | 0.667 | 0.673 | -22 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: EMA 21 → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 35.97 | 57.4% | 0.222 | 5.53 | 6.5 | 0.273 | 0.175 | -9.24 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 | 132.4 | 52.4% | 0.913 | 7.38 | 17.94 | 0.785 | 1.063 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 123.15 | 51% | 0.849 | 7.88 | 15.63 | 0.714 | 1.011 | -15.72 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 127.77 | 51.6% | 0.824 | 7.55 | 16.92 | 0.814 | 0.836 | -13.95 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Entry (/100) → 33 + Cộng thêm ngưỡng điểm khung 4H → -1 + % chốt ở TP1 → 0.287 | 140.59 | 42.6% | 0.434 | 11.96 | 11.76 | 0.468 | 0.405 | -11.63 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Đệm SL riêng khung 4H (ATR) → 0.3 | 178.79 | 39.5% | 0.588 | 17.48 | 10.23 | 0.475 | 0.708 | -14.02 |  |

### Vòng 152 — ngẫu nhiên nhiều thông số · mốc: tổng 131.33R, win 52.7%, rủi ro tụt vốn 7.22R, lời÷rủi ro 18.19

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Break mây Ichimoku → 3 + Cộng thêm ngưỡng điểm khung 1D → 7 | 109.97 | 49.1% | 0.692 | 8.87 | 12.4 | 0.552 | 0.857 | -13.68 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: EMA 21 → 1.13 | 133.44 | 50.3% | 0.829 | 8.41 | 15.87 | 0.755 | 0.916 | -13.94 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + SL tối đa (% Entry) → 0.35 | 124.94 | 51% | 0.85 | 7.92 | 15.78 | 0.73 | 0.99 | -15.42 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Coin phải mạnh hơn BTC trong N ngày → 14 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 85.75 | 45.5% | 0.78 | 8.81 | 9.73 | 0.587 | 1.002 | -19.91 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 + Đệm SL riêng khung 1W (ATR) → 0.3 | 95.99 | 38.1% | 0.402 | 15.9 | 6.04 | 0.371 | 0.428 | -13.19 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Số TP tối đa → 2 | 125.17 | 51.7% | 0.863 | 7.23 | 17.31 | 0.738 | 1.005 | -13.48 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Đệm SL riêng khung 4H (ATR) → 0.3 | 182.83 | 39.7% | 0.599 | 17.44 | 10.48 | 0.48 | 0.725 | -12.93 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Số TP tối đa → 2 + Điểm tối thiểu của vùng đặt SL → 2 | 123.17 | 51.3% | 0.821 | 7.68 | 16.04 | 0.726 | 0.93 | -13.94 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Trọng số phần Divergence (/100) → 9 | 131.33 | 52.7% | 0.9 | 7.22 | 18.19 | 0.777 | 1.044 | -14.96 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu riêng khung 4H → 2 | 30.05 | 46.5% | 0.082 | 9.86 | 3.05 | 0.1 | 0.068 | -12.92 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 | 107.11 | 49.4% | 0.696 | 8.91 | 12.02 | 0.511 | 0.905 | -12.88 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 125.04 | 50.3% | 0.807 | 7.92 | 15.79 | 0.792 | 0.823 | -14.96 |  |

### Vòng 151 — ngẫu nhiên nhiều thông số · mốc: tổng 131.33R, win 52.7%, rủi ro tụt vốn 7.35R, lời÷rủi ro 17.87

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1W (ATR) → 0.3 | 80.84 | 36.5% | 0.369 | 16.9 | 4.78 | 0.311 | 0.419 | -12.57 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + SL tối đa (% Entry) → 0.425 | 80.14 | 45.3% | 0.448 | 11.24 | 7.13 | 0.409 | 0.49 | -17.61 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: EMA 50 → 0.75 | 127.47 | 52.1% | 0.873 | 7.41 | 17.2 | 0.747 | 1.017 | -13.64 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + SL tối đa (% Entry) → 0.35 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 122.3 | 48.9% | 0.88 | 8.42 | 14.52 | 0.72 | 1.068 | -13.46 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 94.63 | 46.3% | 0.635 | 9.58 | 9.88 | 0.488 | 0.821 | -12.22 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Elliott (/100) → 10 | 129.86 | 52.1% | 0.889 | 7.43 | 17.48 | 0.777 | 1.022 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 | 90.46 | 49.2% | 0.767 | 8.42 | 10.74 | 0.673 | 0.886 | -20.41 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Cộng thêm ngưỡng điểm khung 1W → -1 | 102.66 | 47.5% | 0.634 | 9.91 | 10.36 | 0.605 | 0.664 | -11.24 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + R:R tối thiểu riêng khung 1D → 2 | 110.33 | 46.8% | 0.645 | 8.97 | 12.3 | 0.573 | 0.715 | -11.74 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Trọng số phần Entry (/100) → 33 | 119.54 | 51.7% | 0.824 | 7.5 | 15.94 | 0.67 | 1 | -14.96 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: EMA 50 → 0.75 | 128.57 | 50.7% | 0.846 | 8.16 | 15.76 | 0.754 | 0.948 | -15.35 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 | 125.68 | 51.7% | 0.867 | 7.53 | 16.69 | 0.715 | 1.044 | -15.72 |  |

### Vòng 150 — ngẫu nhiên nhiều thông số · mốc: tổng 132.16R, win 53.6%, rủi ro tụt vốn 7.29R, lời÷rủi ro 18.13

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 115.72 | 46.1% | 0.701 | 8.97 | 12.9 | 0.742 | 0.663 | -10.75 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Mức RSI 30/70 → 1.13 | 128.51 | 52.9% | 0.918 | 7.37 | 17.44 | 0.824 | 1.026 | -13.95 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần R:R (/100) → 33 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 118.96 | 52.9% | 0.85 | 7.59 | 15.67 | 0.835 | 0.867 | -13.55 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 94.7 | 49.3% | 0.649 | 8.78 | 10.79 | 0.627 | 0.671 | -14.24 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Mức RSI 30/70 → 1.13 | 132.11 | 53.6% | 0.944 | 7.27 | 18.17 | 0.824 | 1.081 | -13.96 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Khung lớn phải tăng (trend ≥) → 0.425 + Đệm SL riêng khung 4H (ATR) → 0.3 | 161.88 | 37.5% | 0.514 | 19.53 | 8.29 | 0.392 | 0.641 | -17.88 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.813 | 110.99 | 48.6% | 0.804 | 8.41 | 13.2 | 0.572 | 1.043 | -13.98 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cổng Dow → CHẶT | 85.56 | 48.4% | 0.69 | 8.93 | 9.58 | 0.571 | 0.768 | -13.65 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 122.88 | 51.4% | 0.878 | 7.76 | 15.84 | 0.779 | 0.988 | -14.45 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 1W → 2 | 166.05 | 38.4% | 0.575 | 17.51 | 9.48 | 0.428 | 0.716 | -18.17 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Trend (/100) → 19 + Cộng thêm ngưỡng điểm khung 4H → 2 | 104.65 | 51.3% | 0.926 | 7.59 | 13.79 | 0.851 | 1.018 | -20.42 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Lệnh chờ hết hạn sau (nến) → 8 + Cộng thêm ngưỡng điểm khung 1D → 7 | 121.67 | 50.3% | 0.806 | 8.54 | 14.25 | 0.666 | 0.967 | -13.65 |  |
