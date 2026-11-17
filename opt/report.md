# Tối ưu tự động (chạy liên tục) — vòng 613

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 7011 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.9% | 97.2R | 0.596 | 5.52R | 9.64R | 10.08 | 31 | 12.9% | -13.15R | -0.424 | 13.15R |
| **Tốt nhất** | 143 | 51.7% | 109.21R | 0.764 | 6.16R | 8.17R | 13.37 | 29 | 17.2% | -10.95R | -0.378 | 11.57R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 27 | 48.1% | 18.83R | 5 | 0% | -3.76R |
| 1W | 11 | 45.5% | 6.82R | 3 | 0% | -3.33R |
| 4H | 105 | 53.3% | 83.56R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.9% | 97.2R | 9.64R | 10.08 | 31 | 12.9% | -13.15R |
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

### Vòng 613 — ngẫu nhiên nhiều thông số · mốc: tổng 109.21R, win 51.7%, rủi ro tụt vốn 8.17R, lời÷rủi ro 13.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Khung lớn phải tăng (trend ≥) → 0.425 | 95.07 | 48.9% | 0.694 | 8.42 | 11.29 | 0.447 | 0.96 | -10.81 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Momentum (/100) → 25 | 90.06 | 41.5% | 0.527 | 13.65 | 6.6 | 0.565 | 0.493 | -5.78 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Divergence (/100) → 9 + Xác nhận khung nhỏ (A2) → W | 90.48 | 37.9% | 0.327 | 18.21 | 4.97 | 0.324 | 0.329 | -2.3 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: POC anchored → 4 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 127.86 | 50.3% | 0.794 | 8.41 | 15.2 | 0.777 | 0.813 | -5.21 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: POC volume profile cố định → 0.813 | 28.43 | 57.7% | 0.182 | 6.03 | 4.71 | 0.212 | 0.153 | -8.98 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Vùng RSI 45–55 → 0.875 + % chốt ở TP1 → 0.307 + Lệnh chờ hết hạn sau (nến) → 6 | 66.27 | 48.6% | 0.631 | 8.44 | 7.85 | 0.504 | 0.788 | -15.08 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 21 → 0.875 | 113.98 | 46.3% | 0.704 | 10.7 | 10.65 | 0.732 | 0.678 | -6.35 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 57.45 | 38.8% | 0.256 | 14.76 | 3.89 | 0.257 | 0.256 | -7.58 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 87.23 | 46.4% | 0.632 | 9.18 | 9.5 | 0.626 | 0.638 | -9.79 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: EMA 200 → 3 + R:R tối thiểu tới TP1 → 2.63 | 84.87 | 49.6% | 0.713 | 8.25 | 10.29 | 0.387 | 1.045 | -9.58 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: EMA 21 → 1.13 + Cộng điểm phân kỳ dương ẩn → 3 | 102.83 | 50% | 0.704 | 8.07 | 12.74 | 0.582 | 0.841 | -9.98 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: POC anchored → 4 + Trọng số phần SL (/100) → 9 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 94.89 | 48.9% | 0.703 | 8.28 | 11.46 | 0.606 | 0.814 | -4.71 |  |

### Vòng 612 — ngẫu nhiên nhiều thông số · mốc: tổng 114.24R, win 53.5%, rủi ro tụt vốn 7.49R, lời÷rủi ro 15.25

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Cổng Dow → CHẶT + Điểm vùng: HVN anchored → 0.188 + Lệnh chờ hết hạn sau (nến) → 6 | 67.2 | 51.5% | 0.665 | 6.98 | 9.63 | 0.362 | 0.952 | -10.94 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 36.21 | 39.3% | 0.323 | 12.2 | 2.97 | 0.42 | 0.212 | -4.06 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Cộng điểm phân kỳ dương ẩn → 3 | 109.6 | 53.1% | 0.746 | 7.67 | 14.29 | 0.595 | 0.925 | -9.66 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 102.17 | 48.2% | 0.725 | 9.02 | 11.33 | 0.714 | 0.737 | -8.85 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Momentum (/100) → 25 | 111.89 | 51.8% | 0.794 | 7.25 | 15.43 | 0.647 | 0.961 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 109.3 | 51% | 0.754 | 8 | 13.66 | 0.591 | 0.943 | -9.66 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC anchored → 4 + Đệm SL riêng khung 1D (ATR) → 0.3 | 59.79 | 40.5% | 0.539 | 11.71 | 5.11 | 0.278 | 0.753 | -2.28 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Cổng Dow → TẮT + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + R:R tối thiểu tới TP1 → 2.63 | 99.63 | 40.8% | 0.59 | 11.69 | 8.52 | 0.459 | 0.718 | -17.72 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Cộng thêm ngưỡng điểm khung 1W → 2 | 113.61 | 52.8% | 0.8 | 7.53 | 15.09 | 0.641 | 0.983 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.563 | 104.28 | 47.6% | 0.628 | 10.34 | 10.09 | 0.684 | 0.576 | -6.47 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Break mây Ichimoku → 3 | 103.97 | 50% | 0.658 | 9 | 11.55 | 0.506 | 0.839 | -9.41 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 80.49 | 45.6% | 0.503 | 9.94 | 8.1 | 0.418 | 0.586 | -10.08 |  |

### Vòng 611 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.52R, lời÷rủi ro 15.12

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Mức MACD → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Đệm SL riêng khung 1W (ATR) → 0.3 | 88.77 | 47.7% | 0.673 | 9.06 | 9.8 | 0.405 | 0.902 | -10.7 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: HVN cố định → 0.563 + R:R tối thiểu riêng khung 1D → 2 | 98.84 | 45.4% | 0.568 | 9.55 | 10.35 | 0.591 | 0.546 | -7.92 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: BOS → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + R:R tối thiểu tới TP1 → 2.38 | 61.72 | 45.2% | 0.457 | 9.96 | 6.2 | 0.565 | 0.347 | -17.69 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 97.84 | 44.8% | 0.562 | 9.78 | 10 | 0.564 | 0.561 | -10.59 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 19.77 | 39.7% | 0.271 | 12.28 | 1.61 | 0.195 | 0.368 | -13.14 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: POC anchored → 2 + % chốt ở TP1 → 0.287 | 101.46 | 49.4% | 0.619 | 9.33 | 10.87 | 0.502 | 0.754 | -8.61 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: POC anchored → 2 | 65.63 | 44.8% | 0.382 | 11.77 | 5.58 | 0.481 | 0.291 | -14.91 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: HVN anchored → 0.188 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 108.66 | 50.7% | 0.776 | 7.69 | 14.13 | 0.621 | 0.95 | -12.92 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 1D → 5 | 95.6 | 38.6% | 0.381 | 16.22 | 5.89 | 0.378 | 0.384 | -3.73 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Lệnh chờ hết hạn sau (nến) → 6 | 94.66 | 50.8% | 0.717 | 7.77 | 12.18 | 0.607 | 0.845 | -8.27 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Fib sóng 4 → 0.938 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 78.88 | 44% | 0.526 | 10.36 | 7.61 | 0.408 | 0.66 | -5.03 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: POC anchored → 2 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 88.99 | 46.9% | 0.605 | 9.93 | 8.96 | 0.43 | 0.765 | -9.67 |  |

### Vòng 610 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.57R, lời÷rủi ro 15.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cổng Dow → TẮT + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: EMA 21 → 0.875 + Cộng thêm ngưỡng điểm khung 4H → -1 | 109.92 | 42.2% | 0.521 | 13.23 | 8.31 | 0.484 | 0.556 | -20.49 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 1D → 2 | 60.18 | 40.3% | 0.485 | 11.24 | 5.35 | 0.43 | 0.534 | -5.79 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: EMA 50 → 0.75 | 110.75 | 52.9% | 0.791 | 7.48 | 14.81 | 0.621 | 0.982 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 110.75 | 51.7% | 0.753 | 8 | 13.84 | 0.614 | 0.912 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm tối thiểu của vùng đặt SL → 2 + R:R tối thiểu riêng khung 1W → 2 | 102.78 | 50.7% | 0.704 | 8.15 | 12.61 | 0.631 | 0.777 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + % chốt ở TP1 → 0.307 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 97.64 | 48.9% | 0.702 | 8.78 | 11.12 | 0.647 | 0.768 | -8.73 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Xác nhận khung nhỏ (A2) → W + Trọng số phần Entry (/100) → 28 | 92.93 | 38.4% | 0.372 | 16.57 | 5.61 | 0.348 | 0.394 | -3.73 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Vùng RSI 45–55 → 0.875 | 98.36 | 39.4% | 0.387 | 15.85 | 6.21 | 0.409 | 0.367 | -2.95 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Khung lớn phải tăng (trend ≥) → 0.375 | 105.32 | 51% | 0.726 | 8.29 | 12.7 | 0.564 | 0.91 | -10.63 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Ngưỡng điểm vào kèo → 77 | 107.7 | 51.1% | 0.775 | 7.74 | 13.91 | 0.669 | 0.892 | -8.34 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Khung lớn phải tăng (trend ≥) → 0.425 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 67.16 | 43.4% | 0.442 | 10.91 | 6.16 | 0.306 | 0.571 | -12.23 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Break mây Ichimoku → 3 | 93.95 | 48.1% | 0.587 | 9.61 | 9.78 | 0.502 | 0.674 | -9.4 |  |

### Vòng 609 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.61R, lời÷rủi ro 14.94

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 50 → 0.75 + Cộng thêm ngưỡng điểm khung 1D → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 99.37 | 46.7% | 0.595 | 11.23 | 8.85 | 0.643 | 0.553 | -5.5 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Đệm SL riêng khung 4H (ATR) → 0.3 | 153.99 | 39.1% | 0.533 | 17.87 | 8.62 | 0.37 | 0.699 | -14.44 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Cộng điểm phân kỳ dương ẩn → 2.25 | 98.52 | 41.3% | 0.478 | 12.93 | 7.62 | 0.434 | 0.526 | -16.2 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: EMA 200 → 3 | 96.75 | 48.1% | 0.62 | 9.43 | 10.26 | 0.424 | 0.844 | -7.04 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 94.85 | 44.2% | 0.524 | 10.39 | 9.13 | 0.45 | 0.597 | -8.86 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + R:R tối thiểu riêng khung 1W → 2 | 93.2 | 47.4% | 0.613 | 8.69 | 10.72 | 0.577 | 0.645 | -11.23 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + R:R tối thiểu tới TP1 → 2.38 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Cộng điểm phân kỳ dương ẩn → 2.25 | 100.78 | 47.9% | 0.618 | 8.61 | 11.7 | 0.555 | 0.681 | -5.2 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN anchored → 0.313 | 99.98 | 39.9% | 0.327 | 13.41 | 7.46 | 0.308 | 0.343 | -11.29 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 101.95 | 49.3% | 0.698 | 8.3 | 12.28 | 0.55 | 0.842 | -11.02 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Mức MACD → 1.13 | 106.88 | 49.6% | 0.758 | 7.75 | 13.79 | 0.584 | 0.962 | -12.92 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Cộng thêm ngưỡng điểm khung 1D → 5 | 113.49 | 52.8% | 0.788 | 7.37 | 15.4 | 0.624 | 0.982 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Số TP tối đa → 2 + Cộng thêm ngưỡng điểm khung 1W → -1 | 113.51 | 52.7% | 0.777 | 7.8 | 14.55 | 0.6 | 0.993 | -9.66 |  |

### Vòng 608 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.57R, lời÷rủi ro 15.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 1D → 3 + Trọng số phần R:R (/100) → 28 + Điểm vùng: MACD cắt lên Signal → 0.438 | 104.01 | 48.7% | 0.675 | 9.01 | 11.54 | 0.518 | 0.859 | -6.9 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: EMA 50 → 0.75 + Cộng thêm ngưỡng điểm khung 4H → 2 | 106.31 | 52.2% | 0.77 | 7.44 | 14.29 | 0.626 | 0.933 | -9.66 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 70.62 | 45.7% | 0.547 | 9.54 | 7.4 | 0.45 | 0.652 | -9.15 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 59.96 | 45.9% | 0.612 | 8.93 | 6.71 | 0.419 | 0.839 | -6.53 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 111.78 | 52.1% | 0.766 | 7.71 | 14.5 | 0.635 | 0.912 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Cổng Dow → CHẶT + Điểm vùng: Mức RSI 30/70 → 1.13 | 79.38 | 52.3% | 0.728 | 7.06 | 11.24 | 0.324 | 1.084 | -10.72 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + SL tối đa (% Entry) → 0.425 | 96.57 | 49.3% | 0.68 | 8.3 | 11.63 | 0.462 | 0.938 | -11.51 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 121.94 | 50% | 0.792 | 8.45 | 14.43 | 0.757 | 0.834 | -10.24 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: POC volume profile cố định → 0.813 | 107.25 | 51.3% | 0.706 | 7.98 | 13.44 | 0.558 | 0.883 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 24.81 | 55.2% | 0.144 | 7.52 | 3.3 | 0.207 | 0.08 | -11 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 | 78.3 | 43.9% | 0.529 | 9.67 | 8.1 | 0.573 | 0.485 | -14.39 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần Divergence (/100) → 12 | 113.69 | 53.1% | 0.795 | 7.57 | 15.02 | 0.635 | 0.982 | -9.66 |  |

### Vòng 607 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.57R, lời÷rủi ro 15.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Trọng số phần Divergence (/100) → 12 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 92.82 | 49.7% | 0.615 | 8.97 | 10.35 | 0.546 | 0.688 | -7.85 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Ngưỡng điểm vào kèo → 74 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Cộng thêm ngưỡng điểm khung 4H → 2 | 117.58 | 48.7% | 0.764 | 8.58 | 13.7 | 0.743 | 0.788 | -10.24 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Cộng thêm ngưỡng điểm khung 1D → 3 | 111.23 | 49% | 0.727 | 8.77 | 12.68 | 0.57 | 0.908 | -10.69 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 147.81 | 38.7% | 0.515 | 18.58 | 7.96 | 0.374 | 0.657 | -14.46 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Biên mây Ichimoku → 1.35 | 27.02 | 57.1% | 0.175 | 6.45 | 4.19 | 0.217 | 0.135 | -10.36 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 150.27 | 38.9% | 0.522 | 18.38 | 8.18 | 0.352 | 0.692 | -14.81 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 109.04 | 51.4% | 0.757 | 7.71 | 14.14 | 0.662 | 0.856 | -10 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Entry (/100) → 33 | 124.99 | 44.2% | 0.634 | 11.01 | 11.35 | 0.657 | 0.614 | -20.31 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần R:R (/100) → 28 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: HVN anchored → 0.188 | 97.94 | 49.4% | 0.628 | 9.19 | 10.66 | 0.569 | 0.699 | -9.82 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 95.8 | 49% | 0.634 | 8.75 | 10.95 | 0.429 | 0.855 | -8.49 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần R:R (/100) → 28 + SL tối đa (% Entry) → 0.425 | 121.42 | 44.5% | 0.53 | 11.12 | 10.92 | 0.601 | 0.459 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 23.73 | 65.2% | 0.258 | 4.89 | 4.85 | 0.251 | 0.266 | -6.86 |  |

### Vòng 606 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.58R, lời÷rủi ro 15.00

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + SL tối đa (% Entry) → 0.425 | 81.61 | 50% | 0.704 | 8.23 | 9.92 | 0.552 | 0.884 | -16.13 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Cộng thêm ngưỡng điểm khung 4H → 2 | 91.96 | 46.2% | 0.59 | 9.36 | 9.82 | 0.53 | 0.646 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 4.97 | 32.3% | 0.08 | 15.5 | 0.32 | -0.082 | 0.337 | -6.6 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Coin phải mạnh hơn BTC trong N ngày → 14 | 82.94 | 47.7% | 0.775 | 8.08 | 10.26 | 0.579 | 1.016 | -15.62 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Coin phải mạnh hơn BTC trong N ngày → 14 + Lệnh chờ hết hạn sau (nến) → 8 | 89.75 | 50.4% | 0.707 | 7.9 | 11.36 | 0.576 | 0.863 | -17.72 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Khung lớn phải tăng (trend ≥) → 0.425 + Trọng số phần Elliott (/100) → 6 | 98.65 | 49.6% | 0.7 | 8.12 | 12.15 | 0.587 | 0.814 | -10.73 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 98.69 | 50% | 0.676 | 8.37 | 11.79 | 0.607 | 0.743 | -10.7 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 99.29 | 51.7% | 0.694 | 8.28 | 11.99 | 0.634 | 0.763 | -8.88 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 2.25 | 73.46 | 44.6% | 0.607 | 10.05 | 7.31 | 0.267 | 0.9 | -12.56 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Số TP tối đa → 2 + Trọng số phần Entry (/100) → 28 | 113.12 | 52.1% | 0.775 | 7.84 | 14.43 | 0.629 | 0.942 | -9.66 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: POC volume profile cố định → 0.688 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 111.86 | 49.6% | 0.817 | 8.38 | 13.35 | 0.614 | 1.055 | -7.59 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 105.93 | 51.3% | 0.706 | 8.18 | 12.95 | 0.554 | 0.885 | -9.66 |  |

### Vòng 605 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.6R, lời÷rủi ro 14.96

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 29.49 | 57.9% | 0.185 | 6 | 4.92 | 0.225 | 0.147 | -11.38 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần Elliott (/100) → 10 + Đệm SL riêng khung 4H (ATR) → 0.3 | 135.21 | 36.6% | 0.463 | 18.78 | 7.2 | 0.373 | 0.555 | -11.27 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: HVN anchored → 0.313 | 108.11 | 47% | 0.659 | 10.23 | 10.57 | 0.675 | 0.645 | -7.22 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 110.4 | 50% | 0.756 | 8 | 13.8 | 0.672 | 0.838 | -10 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Divergence (/100) → 9 | 110.87 | 51.7% | 0.765 | 7.74 | 14.32 | 0.641 | 0.9 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 111.93 | 52.4% | 0.772 | 7.67 | 14.59 | 0.614 | 0.956 | -8.34 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm tối thiểu của vùng đặt SL → 2 | 107.54 | 52.4% | 0.732 | 8 | 13.44 | 0.635 | 0.838 | -9.66 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Ngưỡng điểm vào kèo → 74 | 95.57 | 49% | 0.668 | 8.55 | 11.18 | 0.629 | 0.712 | -11.93 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Break mây Ichimoku → 3 | 96.21 | 48.1% | 0.617 | 9.4 | 10.24 | 0.519 | 0.725 | -9.4 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần R:R (/100) → 33 | 103.94 | 41.2% | 0.397 | 13.1 | 7.93 | 0.514 | 0.273 | -13.56 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Mức RSI 30/70 → 0.875 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Break mây Ichimoku → 1 | 116.99 | 39% | 0.397 | 15.97 | 7.33 | 0.418 | 0.375 | -3.28 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 71.47 | 47.2% | 0.674 | 8.73 | 8.19 | 0.473 | 0.908 | -6.48 |  |

### Vòng 604 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.57R, lời÷rủi ro 15.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Khung lớn phải tăng (trend ≥) → 0.425 | 89.25 | 49.6% | 0.763 | 8.1 | 11.02 | 0.442 | 1.112 | -9.83 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Khung lớn phải tăng (trend ≥) → 0.375 + Cộng thêm ngưỡng điểm khung 1D → 3 | 84.5 | 45.5% | 0.542 | 9.26 | 9.13 | 0.467 | 0.611 | -11.23 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 120.44 | 35.3% | 0.398 | 21.67 | 5.56 | 0.26 | 0.531 | -13.29 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Entry (/100) → 33 + Điểm vùng: POC anchored → 4 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 126.58 | 50.3% | 0.796 | 8.44 | 15 | 0.799 | 0.793 | -8.3 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Divergence (/100) → 12 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Mức RSI 30/70 → 1.13 | 100.84 | 40.2% | 0.33 | 13.23 | 7.62 | 0.315 | 0.342 | -12.49 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 106.24 | 52.4% | 0.723 | 7.77 | 13.67 | 0.565 | 0.906 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Số TP tối đa → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 101.17 | 47.7% | 0.67 | 9.63 | 10.51 | 0.465 | 0.913 | -10.34 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Cổng Dow → TẮT | 104.63 | 42.8% | 0.487 | 13.12 | 7.97 | 0.43 | 0.546 | -18.2 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 200 → 3 | 102.06 | 47.1% | 0.667 | 9.29 | 10.99 | 0.58 | 0.763 | -8.89 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + R:R tối thiểu riêng khung 1D → 2 + Xác nhận khung nhỏ (A2) → W | 69.01 | 36.7% | 0.266 | 18.72 | 3.69 | 0.27 | 0.264 | -4.76 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm tối thiểu của vùng đặt SL → 2 + Ngưỡng điểm vào kèo → 77 | 106.71 | 51% | 0.746 | 7.93 | 13.46 | 0.646 | 0.854 | -9.66 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Đệm SL riêng khung 4H (ATR) → 0.3 | 150.55 | 38.7% | 0.534 | 18.2 | 8.27 | 0.35 | 0.717 | -13.4 |  |
