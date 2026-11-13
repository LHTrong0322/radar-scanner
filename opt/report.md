# Tối ưu tự động (chạy liên tục) — vòng 172

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 1748 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 47% | 105.98R | 0.646 | 5.74R | 9.49R | 11.17 | 34 | 11.8% | -16.07R | -0.473 | 16.07R |
| **Tốt nhất** | 147 | 52.4% | 131.17R | 0.892 | 5.15R | 7.38R | 17.77 | 31 | 12.9% | -14.96R | -0.483 | 14.96R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 53.6% | 33.37R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.94R | 2 | 0% | -2.04R |
| 4H | 108 | 52.8% | 90.86R | 22 | 18.2% | -7.25R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 138 (Ghép: Điểm vùng: HVN anchored → 0.125 + Khoảng cách tối thiểu TP1 (ATR) → 0.875).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 47% | 105.98R | 9.49R | 11.17 | 34 | 11.8% | -16.07R |
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

### Vòng 172 — ngẫu nhiên nhiều thông số · mốc: tổng 131.17R, win 52.4%, rủi ro tụt vốn 7.38R, lời÷rủi ro 17.77

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Mức MACD → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 79.94 | 45.9% | 0.72 | 9.26 | 8.63 | 0.615 | 0.848 | -9.89 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 + Điểm vùng: EMA 50 → 1.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 111.01 | 49.7% | 0.766 | 7.97 | 13.93 | 0.605 | 0.948 | -13.13 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: POC volume profile cố định → 0.813 + Số TP tối đa → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 | 128.26 | 52% | 0.867 | 7.46 | 17.19 | 0.726 | 1.032 | -13.94 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Xác nhận khung nhỏ (A2) → W | 107.85 | 40.4% | 0.407 | 15.06 | 7.16 | 0.464 | 0.356 | -10.76 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN anchored → 0.188 | 131.17 | 52.4% | 0.892 | 7.38 | 17.77 | 0.777 | 1.026 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 110.85 | 50.3% | 0.754 | 8.2 | 13.52 | 0.745 | 0.764 | -14.72 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 | 119.27 | 50.3% | 0.78 | 8.15 | 14.63 | 0.714 | 0.852 | -13.93 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần SL (/100) → 9 | 119.43 | 51.7% | 0.812 | 7.5 | 15.92 | 0.647 | 1.004 | -14.96 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 95.08 | 47.3% | 0.737 | 8.94 | 10.64 | 0.47 | 1.035 | -15.55 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Trần điểm khi chart yếu (Trend < x) → -0.375 + % chốt ở TP1 → 0.307 | 126.58 | 51% | 0.861 | 7.63 | 16.59 | 0.733 | 1.006 | -14.97 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + SL tối đa (% Entry) → 0.35 | 123.21 | 51% | 0.862 | 7.54 | 16.34 | 0.745 | 0.993 | -16.75 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + % chốt ở TP1 → 0.307 + Điểm vùng: EMA 21 → 0.875 | 81.76 | 45.5% | 0.73 | 9.08 | 9 | 0.616 | 0.867 | -9.89 |  |

### Vòng 171 — ngẫu nhiên nhiều thông số · mốc: tổng 131.27R, win 52.7%, rủi ro tụt vốn 7.31R, lời÷rủi ro 17.96

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Biên mây Ichimoku → 1.35 | 123.87 | 49.4% | 0.774 | 8.45 | 14.66 | 0.654 | 0.918 | -16.03 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Cộng thêm ngưỡng điểm khung 1D → 4 + SL tối đa (% Entry) → 0.425 | 90.26 | 46.1% | 0.54 | 9.64 | 9.36 | 0.421 | 0.658 | -14.47 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + R:R tối thiểu tới TP1 → 2.38 | 32.72 | 55.4% | 0.17 | 5.86 | 5.58 | 0.213 | 0.13 | -9.54 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: Fib sóng 4 → 1.56 | 118.32 | 51.7% | 0.805 | 7.92 | 14.94 | 0.788 | 0.825 | -14.14 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 127.43 | 50.3% | 0.855 | 8.06 | 15.81 | 0.731 | 1.012 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 126.56 | 51% | 0.885 | 7.87 | 16.08 | 0.729 | 1.062 | -15.22 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 122.81 | 50% | 0.797 | 8.06 | 15.24 | 0.804 | 0.79 | -15.42 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 149.75 | 46% | 0.632 | 10.62 | 14.1 | 0.769 | 0.498 | -14.39 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 123.62 | 51.4% | 0.835 | 7.74 | 15.97 | 0.677 | 1.021 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Momentum (/100) → 25 | 105.76 | 49% | 0.729 | 8.08 | 13.09 | 0.59 | 0.871 | -16 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: HVN cố định → 0.438 | 95.92 | 37.9% | 0.375 | 17.08 | 5.62 | 0.34 | 0.407 | -8.35 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 96.93 | 46.6% | 0.664 | 9.95 | 9.74 | 0.535 | 0.79 | -9.78 |  |

### Vòng 170 — ngẫu nhiên nhiều thông số · mốc: tổng 131.17R, win 52.4%, rủi ro tụt vốn 7.33R, lời÷rủi ro 17.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: EMA 50 → 0.75 + Khung lớn phải tăng (trend ≥) → 0.425 | 16.05 | 38% | 0.203 | 12.22 | 1.31 | 0.091 | 0.359 | -5.39 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: BOS → 1 | 132.04 | 51.7% | 0.898 | 7.53 | 17.54 | 0.772 | 1.045 | -14.96 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: Break mây Ichimoku → 3 + R:R tối thiểu riêng khung 1D → 2 + Điểm tối thiểu của vùng đặt SL → 2 | 101.18 | 45.9% | 0.553 | 10.06 | 10.06 | 0.535 | 0.57 | -9.4 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 114.09 | 41.3% | 0.366 | 13.11 | 8.7 | 0.314 | 0.408 | -13.35 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần Momentum (/100) → 25 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 113.27 | 49% | 0.721 | 8.39 | 13.5 | 0.776 | 0.666 | -13.54 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần Elliott (/100) → 6 | 123.02 | 50% | 0.799 | 7.76 | 15.85 | 0.789 | 0.809 | -13.94 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Trọng số phần Momentum (/100) → 21 | 124.4 | 49% | 0.824 | 8.26 | 15.06 | 0.744 | 0.914 | -17.29 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 82.8 | 45.5% | 0.739 | 9.12 | 9.08 | 0.615 | 0.888 | -10.39 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 4H → 2 + Cộng thêm ngưỡng điểm khung 1D → 7 | 69.02 | 44.1% | 0.677 | 9.2 | 7.5 | 0.566 | 0.812 | -9.94 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: POC anchored → 2 | 101.12 | 46.6% | 0.581 | 9.3 | 10.87 | 0.473 | 0.685 | -15.23 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 73.82 | 46.4% | 0.659 | 8.99 | 8.21 | 0.427 | 0.9 | -3.94 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần Momentum (/100) → 21 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 33.81 | 56.6% | 0.213 | 5.72 | 5.91 | 0.284 | 0.146 | -10.26 |  |

### Vòng 169 — ngẫu nhiên nhiều thông số · mốc: tổng 131.27R, win 52.7%, rủi ro tụt vốn 7.22R, lời÷rủi ro 18.18

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 127.88 | 52.1% | 0.876 | 7.28 | 17.57 | 0.734 | 1.043 | -13.06 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + SL tối đa (% Entry) → 0.35 | 70.95 | 45.2% | 0.563 | 10.38 | 6.84 | 0.434 | 0.705 | -7.18 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Số TP tối đa → 2 | 124.5 | 51.4% | 0.853 | 7.51 | 16.58 | 0.744 | 0.977 | -14.84 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: EMA 50 → 0.75 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Đệm SL riêng khung 1D (ATR) → 0.3 | 111.24 | 45.5% | 0.666 | 10.74 | 10.36 | 0.496 | 0.839 | -16.1 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Số TP tối đa → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 + Đệm SL riêng khung 4H (ATR) → 0.3 | 180.41 | 38.6% | 0.59 | 17.69 | 10.2 | 0.432 | 0.756 | -14.87 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 130.57 | 52.4% | 0.888 | 7.52 | 17.36 | 0.759 | 1.043 | -14.96 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Lệnh chờ hết hạn sau (nến) → 8 | 145.24 | 43.5% | 0.631 | 11.49 | 12.64 | 0.618 | 0.644 | -18.58 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Elliott (/100) → 10 | 129.36 | 51.4% | 0.886 | 7.5 | 17.25 | 0.788 | 0.999 | -14.96 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Break mây Ichimoku → 3 | 103.81 | 46.2% | 0.657 | 9.84 | 10.55 | 0.496 | 0.831 | -15.3 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Số TP tối đa → 2 | 114.4 | 46.6% | 0.702 | 10.09 | 11.34 | 0.659 | 0.743 | -14.58 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Trọng số phần Elliott (/100) → 6 | 122.27 | 52.7% | 0.837 | 7.23 | 16.91 | 0.658 | 1.049 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 121.34 | 48.4% | 0.783 | 8.75 | 13.87 | 0.657 | 0.924 | -13.52 |  |

### Vòng 168 — ngẫu nhiên nhiều thông số · mốc: tổng 131.27R, win 52.7%, rủi ro tụt vốn 7.22R, lời÷rủi ro 18.18

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Divergence (/100) → 12 | 130.33 | 51.7% | 0.887 | 7.59 | 17.17 | 0.772 | 1.02 | -15.37 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 34.55 | 57.6% | 0.219 | 5.51 | 6.27 | 0.263 | 0.176 | -10.25 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: HVN cố định → 0.563 | 87.8 | 48.6% | 0.593 | 9.59 | 9.16 | 0.431 | 0.769 | -11.6 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 103.95 | 44.7% | 0.737 | 9.72 | 10.69 | 0.496 | 0.982 | -16 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Biên mây Ichimoku → 1.05 | 125.73 | 52.1% | 0.873 | 7.49 | 16.79 | 0.801 | 0.956 | -17.06 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 + SL tối đa (% Entry) → 0.35 | 124.74 | 51% | 0.849 | 7.77 | 16.05 | 0.705 | 1.016 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 124.91 | 51.7% | 0.873 | 7.44 | 16.79 | 0.757 | 1.01 | -16.75 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần SL (/100) → 9 | 71.78 | 44.5% | 0.653 | 9.54 | 7.52 | 0.444 | 0.922 | -9.89 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Momentum (/100) → 25 | 122.25 | 51% | 0.843 | 7.4 | 16.52 | 0.8 | 0.891 | -15.76 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + R:R tối thiểu riêng khung 1W → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 | 104.84 | 48.6% | 0.708 | 8.19 | 12.8 | 0.586 | 0.83 | -13.7 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + SL tối đa (% Entry) → 0.425 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức RSI 30/70 → 0.875 | 128.84 | 50% | 0.871 | 8.27 | 15.58 | 0.706 | 1.08 | -13.2 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Đệm SL riêng khung 1D (ATR) → 0.3 | 114.4 | 46.6% | 0.702 | 10.14 | 11.28 | 0.659 | 0.743 | -14.58 |  |

### Vòng 167 — ngẫu nhiên nhiều thông số · mốc: tổng 132.77R, win 53.1%, rủi ro tụt vốn 7.27R, lời÷rủi ro 18.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + SL tối đa (% Entry) → 0.35 | 129.88 | 52.1% | 0.89 | 7.5 | 17.32 | 0.742 | 1.064 | -15.68 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 74.09 | 46.2% | 0.57 | 9.83 | 7.54 | 0.47 | 0.683 | -8.69 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Entry (/100) → 28 | 128.54 | 50.6% | 0.803 | 8.1 | 15.87 | 0.691 | 0.937 | -16 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: EMA 50 → 0.75 + % chốt ở TP1 → 0.287 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 127.52 | 51.4% | 0.873 | 7.45 | 17.12 | 0.744 | 1.022 | -15.41 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: EMA 21 → 1.13 | 177.16 | 39% | 0.575 | 17.82 | 9.94 | 0.487 | 0.671 | -14.05 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Fib sóng 4 → 0.938 | 109.69 | 46.8% | 0.641 | 8.88 | 12.35 | 0.549 | 0.731 | -12.2 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Khung lớn phải tăng (trend ≥) → 0.425 | 129.54 | 52.1% | 0.912 | 7.23 | 17.92 | 0.75 | 1.104 | -15.46 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 120 | 52.4% | 0.816 | 7.9 | 15.19 | 0.791 | 0.846 | -14.61 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Entry (/100) → 33 | 105.87 | 46.7% | 0.634 | 8.92 | 11.87 | 0.548 | 0.717 | -14.87 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 132.44 | 52.7% | 0.895 | 7.22 | 18.34 | 0.755 | 1.064 | -15.43 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 21 → 1.13 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 111.15 | 39.6% | 0.407 | 15.34 | 7.25 | 0.415 | 0.399 | -8.14 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: MACD cắt lên Signal → 0.563 | 123.67 | 52.4% | 0.841 | 7.17 | 17.25 | 0.78 | 0.913 | -16.75 |  |

### Vòng 166 — ngẫu nhiên nhiều thông số · mốc: tổng 131.27R, win 52.7%, rủi ro tụt vốn 7.36R, lời÷rủi ro 17.84

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 120.19 | 48% | 0.695 | 9.04 | 13.3 | 0.691 | 0.699 | -15.29 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 | 132.34 | 52.4% | 0.913 | 7.5 | 17.65 | 0.785 | 1.062 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm tối thiểu của vùng đặt SL → 2 | 26.82 | 40% | 0.316 | 11.34 | 2.37 | 0.233 | 0.418 | -6.91 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Momentum (/100) → 21 | 51 | 41.7% | 0.472 | 11.28 | 4.52 | 0.453 | 0.495 | -6.68 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Trọng số phần Trend (/100) → 19 | 128.36 | 52.4% | 0.873 | 7.47 | 17.18 | 0.726 | 1.049 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Fib sóng 4 → 1.56 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 89.9 | 46.4% | 0.642 | 9.75 | 9.22 | 0.545 | 0.742 | -15.77 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Elliott (/100) → 10 | 129.06 | 51.4% | 0.884 | 7.57 | 17.05 | 0.784 | 0.999 | -15.38 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + R:R tối thiểu riêng khung 1W → 2 + Xác nhận khung nhỏ (A2) → W | 77 | 30.2% | 0.226 | 31.75 | 2.43 | 0.159 | 0.266 | -41.1 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Đệm SL riêng khung 1W (ATR) → 0.3 | 106.75 | 47.1% | 0.763 | 8.94 | 11.94 | 0.532 | 0.986 | -16 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Điểm vùng: EMA 21 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: HVN cố định → 0.438 | 122.24 | 47.9% | 0.861 | 8.16 | 14.98 | 0.689 | 1.059 | -13.47 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 117.02 | 49.3% | 0.791 | 8.3 | 14.1 | 0.654 | 0.947 | -15.22 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + R:R tối thiểu riêng khung 1D → 2 + Khung lớn phải tăng (trend ≥) → 0.425 | 103.42 | 45.5% | 0.619 | 9.46 | 10.93 | 0.497 | 0.737 | -11.77 |  |

### Vòng 165 — ngẫu nhiên nhiều thông số · mốc: tổng 131.17R, win 52.4%, rủi ro tụt vốn 7.43R, lời÷rủi ro 17.65

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: MACD cắt lên Signal → 0.438 | 115.34 | 47.8% | 0.735 | 9.34 | 12.35 | 0.546 | 0.958 | -12.38 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Mức MACD → 0.875 | 66.09 | 46% | 0.525 | 9.85 | 6.71 | 0.441 | 0.613 | -7.38 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 1W → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 17.78 | 52.5% | 0.126 | 7.63 | 2.33 | 0.212 | 0.042 | -10.52 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Khung lớn phải tăng (trend ≥) → 0.375 | 83.57 | 50.9% | 0.76 | 7.36 | 11.35 | 0.335 | 1.114 | -16.02 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 | 132.39 | 51.5% | 0.812 | 8.12 | 16.3 | 0.665 | 0.994 | -11.7 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 46.35 | 39.8% | 0.45 | 10.96 | 4.23 | 0.282 | 0.643 | -17.27 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Mức RSI 30/70 → 1.13 + Số TP tối đa → 2 | 128.45 | 52.4% | 0.874 | 7.46 | 17.22 | 0.738 | 1.032 | -14.96 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Lệnh chờ hết hạn sau (nến) → 6 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: POC anchored → 4 | 63.38 | 41.1% | 0.42 | 12.08 | 5.25 | 0.292 | 0.563 | -2.85 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 126.48 | 49.4% | 0.8 | 8.19 | 15.44 | 0.77 | 0.837 | -15.02 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 | 112.18 | 51.4% | 0.768 | 7.55 | 14.86 | 0.599 | 0.957 | -15.46 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + R:R tối thiểu riêng khung 1D → 2 | 109.49 | 45.7% | 0.633 | 9.1 | 12.03 | 0.586 | 0.676 | -11.73 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: HVN anchored → 0.188 | 120.15 | 52.1% | 0.823 | 7.37 | 16.3 | 0.666 | 1.003 | -14.97 |  |

### Vòng 164 — ngẫu nhiên nhiều thông số · mốc: tổng 131.27R, win 52.7%, rủi ro tụt vốn 7.23R, lời÷rủi ro 18.16

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 86.6 | 45.9% | 0.509 | 10.05 | 8.62 | 0.429 | 0.59 | -12.65 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Lệnh chờ hết hạn sau (nến) → 8 + Xác nhận khung nhỏ (A2) → W | 97.17 | 37.9% | 0.392 | 16.12 | 6.03 | 0.371 | 0.408 | -11.8 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cổng Dow → TẮT + Coin phải mạnh hơn BTC trong N ngày → 14 | 85.4 | 41.1% | 0.433 | 13.35 | 6.4 | 0.582 | 0.306 | -23.14 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: MACD cắt lên Signal → 0.563 | 111.51 | 51.4% | 0.753 | 8.19 | 13.62 | 0.767 | 0.738 | -14.72 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 122.3 | 50.3% | 0.799 | 7.98 | 15.33 | 0.778 | 0.822 | -13.94 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số TP tối đa → 2 | 33.53 | 56.7% | 0.214 | 5.89 | 5.69 | 0.288 | 0.144 | -10.26 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: MACD cắt lên Signal → 0.563 | 126.73 | 51.4% | 0.868 | 7.6 | 16.68 | 0.733 | 1.023 | -14.96 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Cộng thêm ngưỡng điểm khung 1W → -1 + Coin phải mạnh hơn BTC trong N ngày → 14 | 106.27 | 41.5% | 0.394 | 11.98 | 8.87 | 0.428 | 0.367 | -19.22 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Entry (/100) → 28 | 122.33 | 47.7% | 0.8 | 8.91 | 13.73 | 0.577 | 1.044 | -15.9 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 125.71 | 51% | 0.844 | 7.82 | 16.08 | 0.724 | 0.99 | -16.75 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 94.06 | 45.9% | 0.636 | 9.4 | 10.01 | 0.506 | 0.797 | -12.22 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + R:R tối thiểu riêng khung 1D → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 93.65 | 44% | 0.49 | 10.52 | 8.9 | 0.443 | 0.533 | -12.14 |  |

### Vòng 163 — ngẫu nhiên nhiều thông số · mốc: tổng 131.17R, win 52.4%, rủi ro tụt vốn 7.29R, lời÷rủi ro 17.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: POC volume profile cố định → 0.813 | 111.74 | 49.6% | 0.804 | 8.08 | 13.83 | 0.628 | 1.004 | -15.76 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: EMA 50 → 0.75 | 100.33 | 40.8% | 0.325 | 14.25 | 7.04 | 0.337 | 0.314 | -11.91 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cổng Dow → CHẶT + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 47.38 | 36.7% | 0.22 | 15.64 | 3.03 | 0.212 | 0.228 | -11.38 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: BOS → 3 | 105.74 | 47.3% | 0.626 | 8.68 | 12.18 | 0.536 | 0.715 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Mức MACD → 0.875 | 112.08 | 48.1% | 0.709 | 9.22 | 12.16 | 0.567 | 0.871 | -11.06 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần SL (/100) → 7 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 96.23 | 48.1% | 0.746 | 8.47 | 11.36 | 0.74 | 0.753 | -21.43 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 130.48 | 50% | 0.847 | 8.14 | 16.03 | 0.661 | 1.065 | -14.85 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 32.15 | 55.2% | 0.185 | 6.12 | 5.25 | 0.253 | 0.123 | -8.27 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: EMA 50 → 1.13 | 116.99 | 48.7% | 0.77 | 8.6 | 13.6 | 0.72 | 0.826 | -13.93 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: HVN anchored → 0.188 | 130.42 | 51.7% | 0.887 | 7.42 | 17.58 | 0.784 | 1.004 | -15.38 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Fib sóng 4 → 1.56 | 122.2 | 50% | 0.794 | 8.05 | 15.18 | 0.778 | 0.809 | -13.94 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 103.93 | 47.8% | 0.646 | 9.45 | 11 | 0.574 | 0.726 | -11.36 |  |
