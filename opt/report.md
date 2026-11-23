# Tối ưu tự động (chạy liên tục) — vòng 1257

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 14716 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 103.26R | 0.622 | 5.7R | 9.7R | 10.65 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 143 | 52.4% | 121.75R | 0.851 | 5.15R | 7.34R | 16.59 | 29 | 13.8% | -13.18R | -0.454 | 13.18R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 25 | 48% | 19.78R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 107 | 54.2% | 95R | 20 | 20% | -5.21R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 103.26R | 9.7R | 10.65 | 31 | 12.9% | -13R |
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
| Điểm ADX > 25 và +DI trội (Momentum) | 3 | **4** |
| Điểm ADX < 13 cạn lực giảm (Momentum) | 1.5 | **2.5** |
| Cộng điểm phân kỳ dương ẩn | 3 | **2.63** |
| Lọc BTC: giá trên EMA bao nhiêu ngày | 200 | **150** |
| Trọng số phần Trend (/100) | 30 | **15** |
| Trọng số phần Momentum (/100) | 15 | **23** |
| Trọng số phần R:R (/100) | 20 | **30** |
| Trọng số phần SL (/100) | 5 | **8** |
| Điểm vùng: BOS | 2 | **1** |
| Điểm vùng: EMA 50 | 0.75 | **0.94** |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) | 2.5 | **3.44** |
| Điểm vùng: HVN cố định | 0.25 | **0.5** |
| Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) | 1 | **0.75** |
| Điểm vùng: Fib 0.5 / 0.382 sóng 2 | 3 | **4** |

## Các thay đổi đã nhận (mới nhất trước)

| Vòng | Thông số | Từ → Thành | Tổng R | Tỷ lệ thắng | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro |
|---|---|---|---|---|---|---|
| 1092 | Trần điểm khi chart yếu (Trend < x) | -0.375 → -0.3 | 119.77R | 52.8% | 7.34R | 16.32 |
| 1092 | Điểm vùng: Fib 0.5 / 0.382 sóng 2 | 3 → 4 | 119.77R | 52.8% | 7.34R | 16.32 |
| 1092 | Điểm vùng: BOS | 2 → 1 | 119.77R | 52.8% | 7.34R | 16.32 |
| 1077 | Trần điểm khi chart yếu (Trend < x) | -0.3 → -0.375 | 118.06R | 52.4% | 7.5R | 15.74 |
| 1077 | Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) | 1 → 0.75 | 118.06R | 52.4% | 7.5R | 15.74 |
| 1055 | Điểm tối thiểu vùng đặt lệnh chờ | 2 → 3 | 114.12R | 51.4% | 7.82R | 14.59 |
| 1055 | Số TP tối đa | 3 → 2 | 114.12R | 51.4% | 7.82R | 14.59 |
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

## 10 vòng gần nhất

### Vòng 1257 — ngẫu nhiên nhiều thông số · mốc: tổng 121.75R, win 52.4%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.59

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: EMA 50 → 1.13 | 110.34 | 49% | 0.703 | 8.79 | 12.55 | 0.567 | 0.867 | -3.64 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 1W → 2 | 117.08 | 50.7% | 0.813 | 7.37 | 15.89 | 0.614 | 1.036 | -13.42 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Số TP tối đa → 1 | 121.75 | 52.4% | 0.851 | 7.34 | 16.59 | 0.655 | 1.074 | -13.18 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 31.34 | 58% | 0.2 | 5.49 | 5.71 | 0.215 | 0.185 | -8.42 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Lệnh chờ hết hạn sau (nến) → 8 | 97.55 | 46.3% | 0.655 | 9.2 | 10.6 | 0.397 | 0.937 | -15.29 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Trend (/100) → 19 + Điểm vùng: POC anchored → 4 | 93.99 | 36% | 0.372 | 21.61 | 4.35 | 0.182 | 0.56 | 2.1 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Break mây Ichimoku → 1 | 111.18 | 39.7% | 0.416 | 15.73 | 7.07 | 0.456 | 0.381 | -9.48 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần Trend (/100) → 12 | 119.48 | 51% | 0.836 | 7.53 | 15.87 | 0.657 | 1.032 | -13.16 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần Momentum (/100) → 25 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 100.9 | 47.7% | 0.651 | 9.27 | 10.88 | 0.651 | 0.651 | -10.47 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 + Cổng Dow → TẮT + Khung lớn phải tăng (trend ≥) → 0.425 | 27.42 | 52% | 0.139 | 8.24 | 3.33 | 0.246 | 0.024 | -12.57 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: POC volume profile cố định → 0.813 | 106.28 | 47% | 0.64 | 9.44 | 11.26 | 0.508 | 0.789 | -8.57 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Mức MACD → 1.13 | 126.2 | 44.9% | 0.539 | 11.17 | 11.3 | 0.628 | 0.454 | -16.33 |  |

### Vòng 1256 — ngẫu nhiên nhiều thông số · mốc: tổng 121.75R, win 52.4%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.59

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 83.14 | 47.6% | 0.67 | 8.9 | 9.34 | 0.48 | 0.894 | -16.78 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: Mức MACD → 0.875 + Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 48.92 | 36.1% | 0.223 | 17.52 | 2.79 | 0.254 | 0.196 | -26.55 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Cộng thêm ngưỡng điểm khung 1W → -1 | 116.28 | 49.3% | 0.843 | 8.02 | 14.5 | 0.615 | 1.106 | -11.42 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Biên mây Ichimoku → 1.05 | 75.12 | 50% | 0.659 | 7.83 | 9.59 | 0.253 | 1.012 | -15.27 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Momentum (/100) → 25 | 104.31 | 50.7% | 0.714 | 8.16 | 12.78 | 0.673 | 0.76 | -12.78 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: EMA 200 → 1 | 116.66 | 50.7% | 0.767 | 8.15 | 14.31 | 0.623 | 0.951 | -8.19 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: HVN anchored → 0.313 | 111.6 | 49% | 0.72 | 8.2 | 13.61 | 0.518 | 0.947 | -14.77 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Trọng số phần SL (/100) → 7 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: HVN cố định → 0.563 | 121.58 | 48.7% | 0.779 | 8.1 | 15.01 | 0.764 | 0.797 | -12.74 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: BOS → 0 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: HVN anchored → 0.313 | 96.01 | 45.6% | 0.653 | 9.65 | 9.95 | 0.513 | 0.807 | -8.07 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 106.68 | 51.7% | 0.736 | 7.71 | 13.84 | 0.67 | 0.81 | -12.76 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 21 → 1.13 + Xác nhận khung nhỏ (A2) → W | 80.21 | 38.1% | 0.373 | 16.18 | 4.96 | 0.385 | 0.36 | -2.45 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Mức MACD → 1.13 | 117.61 | 49.7% | 0.769 | 8.34 | 14.1 | 0.559 | 1.011 | -13.18 |  |

### Vòng 1255 — ngẫu nhiên nhiều thông số · mốc: tổng 121.75R, win 52.4%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.59

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + R:R tối thiểu riêng khung 1W → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Trọng số phần Elliott (/100) → 10 | 103.54 | 47.9% | 0.729 | 8.46 | 12.24 | 0.575 | 0.879 | -14.2 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần SL (/100) → 9 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 118.83 | 51% | 0.82 | 7.83 | 15.18 | 0.637 | 1.026 | -11.86 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 111.38 | 46.2% | 0.644 | 8.99 | 12.39 | 0.58 | 0.704 | -9.96 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Entry (/100) → 28 + Điểm vùng: EMA 200 → 3 | 110.57 | 49.7% | 0.773 | 7.7 | 14.36 | 0.54 | 1.023 | -14.17 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Trọng số phần SL (/100) → 7 | 113.82 | 49.4% | 0.739 | 8.11 | 14.03 | 0.629 | 0.861 | -12.17 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: POC volume profile cố định → 0.813 | 121.29 | 52.1% | 0.842 | 7.21 | 16.82 | 0.655 | 1.052 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần SL (/100) → 7 + Điểm vùng: Mức RSI 30/70 → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 5 | 122.31 | 50.9% | 0.769 | 8.17 | 14.97 | 0.644 | 0.913 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 113.25 | 48.8% | 0.691 | 8.71 | 13 | 0.585 | 0.807 | -11 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: BOS → 0 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 23.73 | 62.9% | 0.245 | 5.03 | 4.72 | 0.252 | 0.236 | -5.83 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + R:R tối thiểu riêng khung 1D → 2 | 106.74 | 45.4% | 0.613 | 9.32 | 11.45 | 0.559 | 0.665 | -12.62 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần Trend (/100) → 12 + Điểm vùng: HVN anchored → 0.313 | 106.73 | 47.4% | 0.693 | 9.31 | 11.46 | 0.458 | 0.961 | -10.6 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Mức MACD → 0.875 + Trọng số phần Momentum (/100) → 25 | 107.32 | 49.3% | 0.715 | 8.45 | 12.7 | 0.545 | 0.905 | -12.72 |  |

### Vòng 1254 — ngẫu nhiên nhiều thông số · mốc: tổng 121.75R, win 52.4%, rủi ro tụt vốn 7.25R, lời÷rủi ro 16.79

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Trọng số phần SL (/100) → 7 + Điểm vùng: Break mây Ichimoku → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.77 | 54.9% | 0.153 | 6.37 | 4.67 | 0.196 | 0.116 | -7.58 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + SL tối đa (% Entry) → 0.425 + Trọng số phần SL (/100) → 9 + Điểm vùng: HVN cố định → 0.438 | 111.34 | 47.1% | 0.795 | 8.71 | 12.78 | 0.574 | 1.051 | -11.42 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Trọng số phần SL (/100) → 9 + Lệnh chờ hết hạn sau (nến) → 6 | 99.2 | 48.9% | 0.735 | 8.09 | 12.26 | 0.569 | 0.924 | -12.81 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 106.79 | 51.7% | 0.736 | 7.72 | 13.83 | 0.673 | 0.808 | -12.78 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: HVN anchored → 0.313 | 97.4 | 46.8% | 0.632 | 9.41 | 10.35 | 0.423 | 0.877 | -12.57 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Trọng số phần Elliott (/100) → 10 | 109.24 | 49.3% | 0.803 | 7.93 | 13.78 | 0.538 | 1.093 | -13.21 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 | 109.32 | 45.1% | 0.667 | 10.43 | 10.48 | 0.603 | 0.726 | -11.51 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 113.82 | 49.4% | 0.739 | 8.05 | 14.14 | 0.629 | 0.861 | -12.16 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Trọng số phần Momentum (/100) → 25 | 120.28 | 51.7% | 0.841 | 7.42 | 16.21 | 0.655 | 1.053 | -13.18 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Break mây Ichimoku → 1 | 86.46 | 49.6% | 0.727 | 7.89 | 10.96 | 0.596 | 0.874 | -19.83 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Coin phải mạnh hơn BTC trong N ngày → 14 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cổng Dow → CHẶT | 54.11 | 50.7% | 0.741 | 6.67 | 8.11 | 0.351 | 1.121 | -11.02 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Cộng thêm ngưỡng điểm khung 4H → 2 | 113.16 | 52.1% | 0.775 | 7.6 | 14.89 | 0.628 | 0.944 | -13.18 |  |

### Vòng 1253 — ngẫu nhiên nhiều thông số · mốc: tổng 121.75R, win 52.4%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.77

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + R:R tối thiểu riêng khung 1W → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 88.87 | 47.4% | 0.649 | 8.49 | 10.47 | 0.412 | 0.868 | -14.74 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: BOS → 2 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Fib sóng 4 → 0.938 | 107.67 | 48.9% | 0.764 | 8.04 | 13.39 | 0.515 | 1.023 | -14.17 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 | 115.06 | 50.3% | 0.805 | 7.66 | 15.02 | 0.575 | 1.065 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 100.78 | 47% | 0.667 | 9.42 | 10.7 | 0.458 | 0.916 | -11.61 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: EMA 50 → 1.13 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 96.93 | 47.8% | 0.713 | 8.52 | 11.38 | 0.583 | 0.859 | -11.8 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm tối thiểu của vùng đặt SL → 4 | 107.23 | 48.3% | 0.729 | 8.48 | 12.65 | 0.594 | 0.879 | -10.57 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + R:R tối thiểu riêng khung 4H → 2 + Trọng số phần SL (/100) → 9 | 114.14 | 40.1% | 0.378 | 12.9 | 8.85 | 0.387 | 0.37 | -8.37 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 116.91 | 40.5% | 0.37 | 12.74 | 9.18 | 0.379 | 0.362 | -7.44 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + SL tối đa (% Entry) → 0.425 + Trọng số phần Elliott (/100) → 10 | 102.22 | 49.7% | 0.695 | 8.67 | 11.79 | 0.631 | 0.761 | -12.36 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + R:R tối thiểu riêng khung 1D → 2 | 109.73 | 46.3% | 0.627 | 9.11 | 12.05 | 0.562 | 0.69 | -9.96 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN cố định → 0.563 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.6 | 40.3% | 0.348 | 12.76 | 8.04 | 0.346 | 0.35 | -8.58 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: POC volume profile cố định → 0.688 + Đệm SL riêng khung 1D (ATR) → 0.3 | 112.08 | 45.8% | 0.667 | 10.93 | 10.25 | 0.59 | 0.737 | -11.52 |  |

### Vòng 1252 — ngẫu nhiên nhiều thông số · mốc: tổng 121.75R, win 52.4%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.59

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần SL (/100) → 7 | 125.68 | 49.7% | 0.821 | 8.14 | 15.44 | 0.799 | 0.847 | -13.76 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 94.55 | 43.2% | 0.511 | 12.2 | 7.75 | 0.515 | 0.508 | -11.53 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Break mây Ichimoku → 1 | 109.82 | 49.3% | 0.752 | 8.27 | 13.28 | 0.59 | 0.929 | -14.01 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Trọng số phần Elliott (/100) → 6 | 120.68 | 51.4% | 0.827 | 7.47 | 16.16 | 0.63 | 1.052 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Xác nhận khung nhỏ (A2) → W + Trần điểm khi chart yếu (Trend < x) → -0.375 | 135.07 | 41.3% | 0.502 | 13.43 | 10.06 | 0.509 | 0.496 | -6.14 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + % chốt ở TP1 → 0.287 | 120.97 | 52.1% | 0.84 | 7.22 | 16.75 | 0.634 | 1.077 | -13.16 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 90.52 | 46.2% | 0.536 | 9.94 | 9.11 | 0.468 | 0.604 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: EMA 21 → 0.875 | 116.81 | 50.3% | 0.774 | 8.22 | 14.21 | 0.654 | 0.919 | -10.69 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cổng Dow → CHẶT + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + SL tối đa (% Entry) → 0.425 | 74.03 | 46.9% | 0.569 | 9.85 | 7.52 | 0.392 | 0.692 | -12.57 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 1D → 5 + Cộng thêm ngưỡng điểm khung 1W → -1 | 59.26 | 39.2% | 0.494 | 12.92 | 4.59 | 0.286 | 0.675 | -6.09 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: HVN anchored → 0.313 | 20.1 | 41.1% | 0.359 | 9.04 | 2.22 | 0.17 | 0.535 | -4.1 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần Momentum (/100) → 21 | 106.66 | 48.6% | 0.741 | 8.23 | 12.96 | 0.55 | 0.937 | -13.18 |  |

### Vòng 1251 — ngẫu nhiên nhiều thông số · mốc: tổng 119.59R, win 52.2%, rủi ro tụt vốn 7.52R, lời÷rủi ro 15.90

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: MACD cắt lên Signal → 0.438 + SL tối đa (% Entry) → 0.425 | 105.1 | 48.3% | 0.705 | 9.58 | 10.97 | 0.446 | 0.99 | -8.3 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần R:R (/100) → 33 | 112.78 | 50.7% | 0.829 | 7.81 | 14.44 | 0.615 | 1.07 | -12.13 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Xác nhận khung nhỏ (A2) → W + SL tối đa (% Entry) → 0.425 + Trọng số phần SL (/100) → 9 | 118.16 | 39.4% | 0.456 | 14.89 | 7.94 | 0.431 | 0.478 | -5.58 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần SL (/100) → 7 | 118.39 | 51.4% | 0.846 | 7.55 | 15.68 | 0.646 | 1.063 | -9.57 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Cộng thêm ngưỡng điểm khung 1W → -1 | 90.87 | 50.9% | 0.811 | 7.61 | 11.94 | 0.59 | 1.076 | -18.6 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Cộng thêm ngưỡng điểm khung 1D → 5 | 157.88 | 39.2% | 0.552 | 17.91 | 8.82 | 0.369 | 0.738 | -11.82 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 100.04 | 48.1% | 0.764 | 8.27 | 12.1 | 0.499 | 1.041 | -12.71 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: BOS → 0 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu riêng khung 1W → 2 | 54.23 | 43% | 0.507 | 10.03 | 5.41 | 0.526 | 0.485 | -10.88 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1D → 5 + SL tối đa (% Entry) → 0.425 | 107.21 | 45.5% | 0.687 | 10.46 | 10.25 | 0.621 | 0.746 | -10.55 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Cổng Dow → TẮT + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 35.04 | 37.2% | 0.29 | 12.91 | 2.71 | 0.369 | 0.181 | -2.38 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần Entry (/100) → 28 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC volume profile cố định → 0.688 | 67.24 | 44.4% | 0.623 | 9.8 | 6.86 | 0.408 | 0.871 | -5.78 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Lệnh chờ hết hạn sau (nến) → 8 + Cổng Dow → TẮT | 128.75 | 42.9% | 0.593 | 11.9 | 10.82 | 0.548 | 0.641 | -13.28 |  |

### Vòng 1250 — ngẫu nhiên nhiều thông số · mốc: tổng 121.75R, win 52.4%, rủi ro tụt vốn 7.28R, lời÷rủi ro 16.72

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 59.2 | 43.8% | 0.529 | 10.33 | 5.73 | 0.37 | 0.725 | -7.23 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 98.53 | 43.2% | 0.636 | 9.81 | 10.04 | 0.508 | 0.775 | -7.22 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Ngưỡng điểm vào kèo → 77 | 78.77 | 44.9% | 0.505 | 10.08 | 7.81 | 0.405 | 0.6 | -9.36 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: BOS → 0 | 102 | 50.8% | 0.773 | 7.78 | 13.11 | 0.603 | 0.97 | -12.82 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 115.18 | 49% | 0.784 | 8.4 | 13.71 | 0.493 | 1.095 | -13.06 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 114.04 | 48.9% | 0.832 | 7.98 | 14.29 | 0.605 | 1.085 | -11.42 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 83.37 | 46.3% | 0.515 | 9.73 | 8.57 | 0.389 | 0.634 | -12.03 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 | 88.28 | 49.1% | 0.761 | 8.1 | 10.9 | 0.553 | 1 | -20.06 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Biên mây Ichimoku → 1.05 | 116.76 | 51.4% | 0.8 | 7.34 | 15.91 | 0.609 | 1.001 | -12.72 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Break mây Ichimoku → 1 | 105.68 | 48% | 0.705 | 8.09 | 13.06 | 0.601 | 0.817 | -13.18 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Mức RSI 30/70 → 0.875 | 106.14 | 44.8% | 0.651 | 10.62 | 9.99 | 0.446 | 0.869 | -15.03 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Entry (/100) → 33 | 104.57 | 50.3% | 0.721 | 7.91 | 13.22 | 0.679 | 0.768 | -12.78 |  |

### Vòng 1249 — ngẫu nhiên nhiều thông số · mốc: tổng 114.9R, win 52.1%, rủi ro tụt vốn 7.33R, lời÷rủi ro 15.68

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 99.11 | 48.3% | 0.683 | 8.52 | 11.63 | 0.509 | 0.892 | -13.27 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 72.97 | 45.5% | 0.663 | 9.22 | 7.91 | 0.409 | 0.957 | -6.82 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 111.67 | 43.6% | 0.685 | 11.47 | 9.74 | 0.651 | 0.715 | -9.91 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: EMA 50 → 0.75 | 155.78 | 37.5% | 0.526 | 18.38 | 8.48 | 0.399 | 0.657 | -13.53 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Khung lớn phải tăng (trend ≥) → 0.425 | 98.85 | 48.5% | 0.749 | 7.96 | 12.42 | 0.507 | 1.005 | -12.43 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: HVN cố định → 0.563 + Khung lớn phải tăng (trend ≥) → 0.425 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 80.24 | 43.8% | 0.495 | 10.43 | 7.69 | 0.403 | 0.585 | -9.76 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Divergence (/100) → 9 | 30.55 | 57.6% | 0.193 | 5.71 | 5.35 | 0.207 | 0.18 | -8.29 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Trend (/100) → 12 + Cổng Dow → CHẶT | 82.3 | 50% | 0.722 | 7.48 | 11 | 0.331 | 1.05 | -14.81 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Biên mây Ichimoku → 1.05 | 106.06 | 50.7% | 0.747 | 8.22 | 12.9 | 0.58 | 0.934 | -13.14 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Trọng số phần SL (/100) → 9 | 112.68 | 50.7% | 0.805 | 7.64 | 14.75 | 0.614 | 1.013 | -13.18 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: POC volume profile cố định → 0.813 | 98.27 | 50% | 0.692 | 8.14 | 12.07 | 0.617 | 0.774 | -10.88 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Lệnh chờ hết hạn sau (nến) → 6 | 94.92 | 48.9% | 0.714 | 8.32 | 11.41 | 0.572 | 0.876 | -10.65 |  |

### Vòng 1248 — ngẫu nhiên nhiều thông số · mốc: tổng 121.75R, win 52.4%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.59

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Xác nhận khung nhỏ (A2) → W | 117.57 | 38.3% | 0.324 | 18.5 | 6.36 | 0.389 | 0.263 | 3.13 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 115 | 48.1% | 0.728 | 8.61 | 13.36 | 0.542 | 0.939 | -14.54 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 99.38 | 42.1% | 0.606 | 11.16 | 8.91 | 0.533 | 0.666 | -11.18 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 35.48 | 40% | 0.394 | 10.37 | 3.42 | 0.325 | 0.481 | -7.55 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần Trend (/100) → 12 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Mức RSI 30/70 → 0.875 | 114.55 | 47.8% | 0.73 | 8.95 | 12.8 | 0.554 | 0.921 | -13.18 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Xác nhận khung nhỏ (A2) → W | 101.88 | 39% | 0.409 | 15.91 | 6.4 | 0.453 | 0.369 | -7.26 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: HVN cố định → 0.438 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 124.62 | 50% | 0.799 | 7.95 | 15.68 | 0.751 | 0.856 | -13.76 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: MACD cắt lên Signal → 0.563 + Cộng điểm phân kỳ dương ẩn → 2.25 | 119.7 | 51.7% | 0.826 | 7.74 | 15.47 | 0.612 | 1.074 | -13.18 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 15.96 | 36.1% | 0.192 | 13.29 | 1.2 | 0.095 | 0.339 | -7.46 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Cổng Dow → CHẶT | 73.6 | 47.1% | 0.618 | 8.2 | 8.98 | 0.299 | 0.85 | -13.98 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 117.83 | 51.4% | 0.818 | 7.35 | 16.03 | 0.609 | 1.058 | -13 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: HVN anchored → 0.188 | 119.1 | 49.3% | 0.805 | 8.11 | 14.69 | 0.493 | 1.143 | -13.08 |  |
