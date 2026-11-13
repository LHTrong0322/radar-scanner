# Tối ưu tự động (chạy liên tục) — vòng 140

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 1380 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.2% | 106.13R | 0.651 | 5.74R | 9.51R | 11.16 | 34 | 11.8% | -16.07R | -0.473 | 16.07R |
| **Tốt nhất** | 146 | 52.7% | 131.31R | 0.899 | 5.15R | 7.34R | 17.89 | 31 | 12.9% | -14.96R | -0.483 | 14.96R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 53.6% | 33.37R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.93R | 2 | 0% | -2.04R |
| 4H | 107 | 53.3% | 91.01R | 22 | 18.2% | -7.25R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 138 (Ghép: Điểm vùng: HVN anchored → 0.125 + Khoảng cách tối thiểu TP1 (ATR) → 0.875).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.2% | 106.13R | 9.51R | 11.16 | 34 | 11.8% | -16.07R |
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

### Vòng 140 — ngẫu nhiên nhiều thông số · mốc: tổng 131.31R, win 52.7%, rủi ro tụt vốn 7.34R, lời÷rủi ro 17.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 122.14 | 50% | 0.793 | 8.14 | 15 | 0.766 | 0.822 | -14.2 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + R:R tối thiểu riêng khung 4H → 2 + Số TP tối đa → 2 + Trọng số phần Momentum (/100) → 21 | 125.14 | 41.7% | 0.384 | 12.54 | 9.98 | 0.36 | 0.405 | -10.91 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Cộng điểm phân kỳ dương ẩn → 2.63 + Số TP tối đa → 2 | 128.56 | 52.7% | 0.881 | 7.33 | 17.54 | 0.739 | 1.048 | -14.97 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 | 110.66 | 49% | 0.763 | 8.97 | 12.34 | 0.614 | 0.932 | -12.92 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 109.17 | 49.3% | 0.748 | 8.45 | 12.92 | 0.693 | 0.809 | -14.64 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 51.04 | 41.7% | 0.473 | 11.13 | 4.59 | 0.453 | 0.496 | -6.69 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 83.24 | 46.4% | 0.757 | 8.95 | 9.3 | 0.615 | 0.933 | -9.89 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + R:R tối thiểu riêng khung 1W → 2 | 118.52 | 49.7% | 0.806 | 7.9 | 15 | 0.715 | 0.901 | -16 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm tối thiểu của vùng đặt SL → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 67.92 | 43.6% | 0.581 | 10.41 | 6.52 | 0.388 | 0.829 | -9.69 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 126.04 | 48.5% | 0.773 | 8.5 | 14.83 | 0.779 | 0.766 | -15.94 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Ngưỡng điểm vào kèo → 77 | 121.01 | 49% | 0.781 | 8.3 | 14.58 | 0.751 | 0.816 | -15.03 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 121.03 | 49.4% | 0.786 | 7.97 | 15.19 | 0.75 | 0.825 | -14.2 |  |

### Vòng 139 — ngẫu nhiên nhiều thông số · mốc: tổng 131.31R, win 52.7%, rủi ro tụt vốn 7.33R, lời÷rủi ro 17.91

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: HVN cố định → 0.438 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 111.32 | 49.4% | 0.696 | 8.92 | 12.48 | 0.561 | 0.856 | -14.7 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Trend (/100) → 19 + Ngưỡng điểm vào kèo → 74 + Trọng số phần Momentum (/100) → 21 | 118.75 | 49.3% | 0.802 | 7.85 | 15.13 | 0.712 | 0.895 | -16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 | 81.95 | 43.6% | 0.585 | 11.42 | 7.18 | 0.668 | 0.515 | -6.81 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Khung lớn phải tăng (trend ≥) → 0.375 + R:R tối thiểu tới TP1 → 2.38 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 118.39 | 48% | 0.684 | 8.96 | 13.21 | 0.703 | 0.666 | -16.27 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: EMA 200 → 1 + Trọng số phần Trend (/100) → 19 | 121.33 | 51.6% | 0.793 | 7.92 | 15.32 | 0.681 | 0.941 | -10.14 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 + % chốt ở TP1 → 0.307 | 132.5 | 51.9% | 0.818 | 8.09 | 16.38 | 0.665 | 1.009 | -11.71 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + R:R tối thiểu tới TP1 → 2.63 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Break mây Ichimoku → 3 | 107.65 | 47.2% | 0.758 | 9.06 | 11.88 | 0.721 | 0.805 | -16.72 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 87.49 | 47.1% | 0.643 | 9.33 | 9.38 | 0.608 | 0.683 | -7.28 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 131.31 | 52.7% | 0.899 | 7.33 | 17.91 | 0.777 | 1.043 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 125.2 | 51.7% | 0.829 | 8.14 | 15.38 | 0.672 | 0.997 | -9.78 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: HVN anchored → 0.188 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 94.61 | 46.3% | 0.635 | 9.54 | 9.92 | 0.488 | 0.82 | -12.22 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Mức RSI 30/70 → 0.875 | 32.6 | 39.1% | 0.375 | 11.07 | 2.94 | 0.258 | 0.518 | -6.21 |  |

### Vòng 138 — ghép cặp thay đổi suýt đạt · mốc: tổng 131.31R, win 52.7%, rủi ro tụt vốn 7.34R, lời÷rủi ro 17.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: HVN anchored → 0.125 + Điểm vùng: MACD cắt lên Signal → 0.563 | 131.31 | 52.7% | 0.899 | 7.34 | 17.89 | 0.777 | 1.043 | -15.54 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 144.79 | 52.6% | 0.847 | 7.32 | 19.78 | 0.692 | 1.015 | -15.17 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 | 131.32 | 52.7% | 0.899 | 7.33 | 17.92 | 0.777 | 1.043 | -15.54 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 131.31 | 52.7% | 0.899 | 7.34 | 17.89 | 0.777 | 1.043 | -15.54 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 131.31 | 52.7% | 0.899 | 7.34 | 17.89 | 0.777 | 1.043 | -15.54 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 | 131.31 | 52.7% | 0.899 | 7.34 | 17.89 | 0.777 | 1.043 | -14.96 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 141.33 | 52% | 0.817 | 8.05 | 17.56 | 0.639 | 1.015 | -15.17 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 131.31 | 52.7% | 0.899 | 7.34 | 17.89 | 0.777 | 1.043 | -14.96 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 131.31 | 52.7% | 0.899 | 7.34 | 17.89 | 0.777 | 1.043 | -14.96 |  |
| Ghép: Điểm vùng: MACD cắt lên Signal → 0.563 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 141.33 | 52% | 0.817 | 8.05 | 17.56 | 0.639 | 1.015 | -15.17 |  |
| Ghép: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 | 131.32 | 52.7% | 0.899 | 7.33 | 17.92 | 0.777 | 1.043 | -14.96 |  |
| Ghép: Điểm vùng: MACD cắt lên Signal → 0.563 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 131.31 | 52.7% | 0.899 | 7.34 | 17.89 | 0.777 | 1.043 | -14.96 |  |

### Vòng 137 — ghép cặp thay đổi suýt đạt · mốc: tổng 131.31R, win 52.7%, rủi ro tụt vốn 7.35R, lời÷rủi ro 17.87

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 141.34 | 52% | 0.817 | 7.96 | 17.76 | 0.639 | 1.015 | -15.17 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 | 131.32 | 52.7% | 0.899 | 7.32 | 17.94 | 0.777 | 1.043 | -14.96 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 131.31 | 52.7% | 0.899 | 7.35 | 17.87 | 0.777 | 1.043 | -14.96 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 131.31 | 52.7% | 0.899 | 7.35 | 17.87 | 0.777 | 1.043 | -14.96 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: HVN anchored → 0.125 | 131.31 | 52.7% | 0.899 | 7.35 | 17.87 | 0.777 | 1.043 | -14.52 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 131.31 | 52.7% | 0.899 | 7.35 | 17.87 | 0.777 | 1.043 | -13.94 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: MACD cắt lên Signal → 0.563 | 131.31 | 52.7% | 0.899 | 7.35 | 17.87 | 0.777 | 1.043 | -13.94 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 141.33 | 52% | 0.817 | 7.96 | 17.76 | 0.639 | 1.015 | -14.15 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 | 131.32 | 52.7% | 0.899 | 7.32 | 17.94 | 0.777 | 1.043 | -13.94 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 131.31 | 52.7% | 0.899 | 7.35 | 17.87 | 0.777 | 1.043 | -13.94 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 131.31 | 52.7% | 0.899 | 7.35 | 17.87 | 0.777 | 1.043 | -13.94 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 131.31 | 52.7% | 0.899 | 7.35 | 17.87 | 0.777 | 1.043 | -15.54 |  |

### Vòng 136 — ghép cặp thay đổi suýt đạt · mốc: tổng 131.31R, win 52.7%, rủi ro tụt vốn 7.31R, lời÷rủi ro 17.96

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: POC volume profile cố định → 0.688 | 131.31 | 52.7% | 0.899 | 7.31 | 17.96 | 0.777 | 1.043 | -14.96 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: POC volume profile cố định → 0.813 | 131.31 | 52.7% | 0.899 | 7.31 | 17.96 | 0.777 | 1.043 | -13.94 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: HVN anchored → 0.125 | 131.31 | 52.7% | 0.899 | 7.31 | 17.96 | 0.777 | 1.043 | -15.54 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 131.31 | 52.7% | 0.899 | 7.31 | 17.96 | 0.777 | 1.043 | -14.96 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 | 131.31 | 52.7% | 0.899 | 7.31 | 17.96 | 0.777 | 1.043 | -14.96 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 141.33 | 52% | 0.817 | 7.98 | 17.71 | 0.639 | 1.015 | -15.18 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 | 131.32 | 52.7% | 0.899 | 7.26 | 18.09 | 0.777 | 1.043 | -14.96 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 131.31 | 52.7% | 0.899 | 7.31 | 17.96 | 0.777 | 1.043 | -14.96 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 131.31 | 52.7% | 0.899 | 7.31 | 17.96 | 0.777 | 1.043 | -14.96 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: HVN anchored → 0.125 | 131.31 | 52.7% | 0.899 | 7.31 | 17.96 | 0.777 | 1.043 | -15.54 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 131.31 | 52.7% | 0.899 | 7.31 | 17.96 | 0.777 | 1.043 | -14.96 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: MACD cắt lên Signal → 0.563 | 131.31 | 52.7% | 0.899 | 7.31 | 17.96 | 0.777 | 1.043 | -14.96 |  |

### Vòng 135 — tinh chỉnh giá trị giữa · mốc: tổng 131.31R, win 52.7%, rủi ro tụt vốn 7.23R, lời÷rủi ro 18.16

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: Vùng RSI 45–55: 1 → 0.875 (tinh chỉnh) | 122.35 | 50.3% | 0.8 | 7.98 | 15.33 | 0.778 | 0.822 | -13.94 |  |
| Điểm vùng: Vùng RSI 45–55: 1 → 1.13 (tinh chỉnh) | 131.23 | 50.7% | 0.875 | 7.8 | 16.82 | 0.752 | 1.023 | -14.96 |  |
| Điểm vùng: Biên mây Ichimoku: 1.2 → 1.05 (tinh chỉnh) | 125.79 | 52.1% | 0.874 | 7.54 | 16.68 | 0.802 | 0.955 | -17.08 |  |
| Điểm vùng: Biên mây Ichimoku: 1.2 → 1.35 (tinh chỉnh) | 129.48 | 52% | 0.875 | 7.66 | 16.9 | 0.735 | 1.043 | -14.44 |  |
| Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự): 1 → 0.875 (tinh chỉnh) | 131.32 | 52.7% | 0.899 | 7.29 | 18.01 | 0.777 | 1.043 | -14.96 |  |
| Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự): 1 → 1.13 (tinh chỉnh) | 131.31 | 52.7% | 0.899 | 7.23 | 18.16 | 0.777 | 1.043 | -14.96 |  |
| Điểm vùng: MACD cắt lên Signal: 0.5 → 0.438 (tinh chỉnh) | 115.68 | 48.4% | 0.746 | 9.05 | 12.78 | 0.555 | 0.973 | -12.38 |  |
| Điểm vùng: MACD cắt lên Signal: 0.5 → 0.563 (tinh chỉnh) | 131.31 | 52.7% | 0.899 | 7.23 | 18.16 | 0.777 | 1.043 | -14.96 |  |
| Điểm vùng: Fib sóng 4: 1.25 → 0.625 (tinh chỉnh) | 131.5 | 52.4% | 0.907 | 7.45 | 17.65 | 0.79 | 1.043 | -14.96 |  |
| Điểm vùng: Fib sóng 4: 1.25 → 1.88 (tinh chỉnh) | 129.27 | 52% | 0.873 | 7.63 | 16.94 | 0.733 | 1.043 | -14.96 |  |

### Vòng 134 — tinh chỉnh giá trị giữa · mốc: tổng 131.31R, win 52.7%, rủi ro tụt vốn 7.35R, lời÷rủi ro 17.87

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: HVN anchored: 0.25 → 0.188 (tinh chỉnh) | 131.31 | 52.7% | 0.899 | 7.35 | 17.87 | 0.777 | 1.043 | -14.96 |  |
| Điểm vùng: HVN anchored: 0.25 → 0.313 (tinh chỉnh) | 129.55 | 52.1% | 0.887 | 7.45 | 17.39 | 0.755 | 1.043 | -14.96 |  |
| Điểm vùng: HVN cố định: 0.5 → 0.438 (tinh chỉnh) | 129.86 | 52.1% | 0.889 | 7.45 | 17.43 | 0.759 | 1.043 | -14.96 |  |
| Điểm vùng: HVN cố định: 0.5 → 0.563 (tinh chỉnh) | 131.31 | 52.7% | 0.899 | 7.35 | 17.87 | 0.777 | 1.043 | -14.96 |  |
| Điểm vùng: Vùng RSI 45–55: 1 → 0.75 (tinh chỉnh) | 115.01 | 49.3% | 0.757 | 8 | 14.38 | 0.726 | 0.79 | -14.77 |  |
| Điểm vùng: Vùng RSI 45–55: 1 → 1.25 (tinh chỉnh) | 124.43 | 50% | 0.808 | 8.17 | 15.23 | 0.727 | 0.908 | -17.24 |  |
| Điểm vùng: Biên mây Ichimoku: 1.2 → 0.9 (tinh chỉnh) | 117.71 | 50.7% | 0.817 | 7.71 | 15.27 | 0.7 | 0.949 | -16.71 |  |
| Điểm vùng: Biên mây Ichimoku: 1.2 → 1.5 (tinh chỉnh) | 127.98 | 51.7% | 0.859 | 7.88 | 16.24 | 0.714 | 1.036 | -12.97 |  |
| Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự): 1 → 0.75 (tinh chỉnh) | 131.32 | 52.7% | 0.899 | 7.26 | 18.09 | 0.777 | 1.043 | -14.96 |  |
| Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự): 1 → 1.25 (tinh chỉnh) | 131.31 | 52.7% | 0.899 | 7.35 | 17.87 | 0.777 | 1.043 | -14.96 |  |
| Điểm vùng: MACD cắt lên Signal: 0.5 → 0.375 (tinh chỉnh) | 115.68 | 48.4% | 0.746 | 9.17 | 12.62 | 0.555 | 0.973 | -12.38 |  |
| Điểm vùng: MACD cắt lên Signal: 0.5 → 0.625 (tinh chỉnh) | 131.31 | 52.7% | 0.899 | 7.35 | 17.87 | 0.777 | 1.043 | -14.96 |  |

### Vòng 133 — tinh chỉnh giá trị giữa · mốc: tổng 131.31R, win 52.7%, rủi ro tụt vốn 7.23R, lời÷rủi ro 18.16

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4): 3.13 → 2.81 (tinh chỉnh) | 126.68 | 52.1% | 0.88 | 7.5 | 16.89 | 0.737 | 1.043 | -15.46 |  |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4): 3.13 → 3.44 (tinh chỉnh) | 132.38 | 52.4% | 0.913 | 7.38 | 17.94 | 0.785 | 1.063 | -14.96 |  |
| Điểm vùng: Mức RSI 30/70: 1 → 0.875 (tinh chỉnh) | 132.35 | 50.9% | 0.832 | 8.28 | 15.98 | 0.697 | 1 | -14.96 |  |
| Điểm vùng: Mức RSI 30/70: 1 → 1.13 (tinh chỉnh) | 131.31 | 52.7% | 0.899 | 7.23 | 18.16 | 0.777 | 1.043 | -14.96 |  |
| Điểm vùng: Mức MACD: 1 → 0.875 (tinh chỉnh) | 123.98 | 52.1% | 0.849 | 7.67 | 16.16 | 0.741 | 0.973 | -14.96 |  |
| Điểm vùng: Mức MACD: 1 → 1.13 (tinh chỉnh) | 129.16 | 51.7% | 0.867 | 7.66 | 16.86 | 0.736 | 1.023 | -14.96 |  |
| Điểm vùng: POC volume profile cố định: 0.75 → 0.688 (tinh chỉnh) | 131.31 | 52.7% | 0.899 | 7.23 | 18.16 | 0.777 | 1.043 | -14.96 |  |
| Điểm vùng: POC volume profile cố định: 0.75 → 0.813 (tinh chỉnh) | 131.31 | 52.7% | 0.899 | 7.23 | 18.16 | 0.777 | 1.043 | -13.94 |  |
| Điểm vùng: HVN anchored: 0.25 → 0.125 (tinh chỉnh) | 131.31 | 52.7% | 0.899 | 7.23 | 18.16 | 0.777 | 1.043 | -15.54 |  |
| Điểm vùng: HVN anchored: 0.25 → 0.375 (tinh chỉnh) | 130.4 | 52.4% | 0.887 | 7.72 | 16.89 | 0.756 | 1.043 | -15.46 |  |
| Điểm vùng: HVN cố định: 0.5 → 0.375 (tinh chỉnh) | 129.87 | 52.1% | 0.89 | 7.35 | 17.67 | 0.759 | 1.043 | -14.96 |  |
| Điểm vùng: HVN cố định: 0.5 → 0.625 (tinh chỉnh) | 131.79 | 53.1% | 0.909 | 7.44 | 17.71 | 0.777 | 1.066 | -14.96 |  |

### Vòng 132 — từng thông số · mốc: tổng 131.31R, win 52.7%, rủi ro tụt vốn 7.44R, lời÷rủi ro 17.65

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: EMA 21: 1 → 0.875 | 129.72 | 52% | 0.876 | 7.39 | 17.55 | 0.781 | 0.986 | -14.96 |  |
| Điểm vùng: EMA 21: 1 → 1.13 | 131.11 | 51.3% | 0.874 | 7.55 | 17.37 | 0.737 | 1.035 | -13.94 |  |

### Vòng 131 — từng thông số · mốc: tổng 131.31R, win 52.7%, rủi ro tụt vốn 7.33R, lời÷rủi ro 17.91

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: Đỉnh/đáy pivot Dow: 2.5 → 2.19 | 108.91 | 49% | 0.731 | 8.89 | 12.25 | 0.563 | 0.926 | -12.38 |  |
| Điểm vùng: Đỉnh/đáy pivot Dow: 2.5 → 2.81 | 127.66 | 52.1% | 0.874 | 7.22 | 17.68 | 0.777 | 0.989 | -14.96 |  |
| Điểm vùng: Đỉnh/đáy swing lớn: 2 → 1 | 137.59 | 45.9% | 0.601 | 10.08 | 13.65 | 0.657 | 0.546 | -17.4 |  |
| Điểm vùng: Đỉnh/đáy swing lớn: 2 → 3 | 26.59 | 39.3% | 0.317 | 10.92 | 2.43 | 0.235 | 0.421 | -6.21 |  |
| Điểm vùng: BOS: 2 → 1 | 131.31 | 52.7% | 0.899 | 7.33 | 17.91 | 0.777 | 1.043 | -14.96 |  |
| Điểm vùng: BOS: 2 → 3 | 131.31 | 52.7% | 0.899 | 7.33 | 17.91 | 0.777 | 1.043 | -14.96 |  |
| Điểm vùng: POC anchored: 3 → 2 | 119.42 | 50.7% | 0.786 | 8.25 | 14.48 | 0.714 | 0.866 | -13.93 |  |
| Điểm vùng: POC anchored: 3 → 4 | 125.61 | 52% | 0.826 | 7.81 | 16.08 | 0.668 | 0.997 | -9.78 |  |
| Điểm vùng: EMA 200: 2 → 1 | 121.43 | 51.6% | 0.794 | 7.91 | 15.35 | 0.682 | 0.941 | -10.14 |  |
| Điểm vùng: EMA 200: 2 → 3 | 124.42 | 50.7% | 0.852 | 7.67 | 16.22 | 0.716 | 1.004 | -14.92 |  |
| Điểm vùng: EMA 50: 0.94 → 0.75 | 128.21 | 52.4% | 0.884 | 7.33 | 17.49 | 0.747 | 1.043 | -14.96 |  |
| Điểm vùng: EMA 50: 0.94 → 1.13 | 128.02 | 50.7% | 0.877 | 7.73 | 16.56 | 0.783 | 0.99 | -13.94 |  |
