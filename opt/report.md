# Tối ưu tự động (chạy liên tục) — vòng 1092

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 12737 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 167 | 46.7% | 96.66R | 0.579 | 6.44R | 10.15R | 9.52 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 144 | 52.8% | 119.68R | 0.831 | 5.15R | 7.61R | 15.73 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 26 | 50% | 20.05R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 107 | 54.2% | 92.66R | 19 | 21.1% | -4.19R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 167 | 46.7% | 96.66R | 10.15R | 9.52 | 30 | 13.3% | -11.98R |
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

### Vòng 1092 — ngẫu nhiên nhiều thông số · mốc: tổng 119.68R, win 52.8%, rủi ro tụt vốn 7.61R, lời÷rủi ro 15.73

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Số TP tối đa → 3 + Điểm vùng: POC volume profile cố định → 0.813 | 25.43 | 56.7% | 0.19 | 5.41 | 4.7 | 0.249 | 0.132 | -5.7 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Fib sóng 4 → 1.56 + SL tối đa (% Entry) → 0.425 | 105.1 | 47.6% | 0.715 | 8.81 | 11.93 | 0.525 | 0.913 | -10.87 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Trọng số phần SL (/100) → 7 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 88.42 | 47.2% | 0.614 | 9.59 | 9.22 | 0.561 | 0.685 | -10.58 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cộng thêm ngưỡng điểm khung 1W → 2 | 113.76 | 48.7% | 0.729 | 8.79 | 12.94 | 0.526 | 0.966 | -7.36 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 113.35 | 51% | 0.771 | 8.21 | 13.81 | 0.577 | 0.99 | -7.88 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần Divergence (/100) → 9 + Khung lớn phải tăng (trend ≥) → 0.425 | 99.48 | 47.8% | 0.721 | 8.4 | 11.84 | 0.502 | 0.966 | -12.19 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 111.97 | 48.9% | 0.806 | 8.51 | 13.16 | 0.614 | 1.024 | -10.38 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần SL (/100) → 9 | 119.68 | 52.8% | 0.831 | 7.61 | 15.73 | 0.67 | 1.011 | -12.16 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: POC anchored → 4 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 113 | 50.3% | 0.758 | 8.08 | 13.99 | 0.637 | 0.878 | -6.22 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 72.05 | 46% | 0.638 | 9.4 | 7.66 | 0.419 | 0.885 | -5.79 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Fib sóng 4 → 1.56 | 117.63 | 52.1% | 0.806 | 7.76 | 15.16 | 0.627 | 1.011 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trần điểm khi chart yếu (Trend < x) → -0.3 | 119.77 | 52.8% | 0.832 | 7.34 | 16.32 | 0.672 | 1.011 | -12.16 | ✅ |

Nhận: Điểm vùng: BOS 2 → 1 · Điểm vùng: Fib 0.5 / 0.382 sóng 2 3 → 4 · Trần điểm khi chart yếu (Trend < x) -0.375 → -0.3

### Vòng 1091 — ngẫu nhiên nhiều thông số · mốc: tổng 119.68R, win 52.8%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Mức MACD → 1.13 | 90.57 | 47.4% | 0.671 | 8.66 | 10.46 | 0.601 | 0.744 | -11.98 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Fib sóng 4 → 1.56 | 81.24 | 48% | 0.66 | 8.93 | 9.1 | 0.543 | 0.788 | -18.62 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trọng số phần Entry (/100) → 28 | 136.9 | 44.5% | 0.649 | 10.86 | 12.61 | 0.609 | 0.689 | -19.13 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Trend (/100) → 12 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 101.81 | 50% | 0.697 | 8.43 | 12.08 | 0.678 | 0.719 | -11.8 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Khung lớn phải tăng (trend ≥) → 0.375 | 111.47 | 48.4% | 0.729 | 8.57 | 13.01 | 0.544 | 0.926 | -12.55 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Cổng Dow → TẮT + Trọng số phần SL (/100) → 7 | 136.9 | 44.5% | 0.649 | 10.86 | 12.61 | 0.609 | 0.689 | -18.11 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 35.47 | 56.9% | 0.222 | 5.76 | 6.16 | 0.281 | 0.166 | -8.19 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 101.58 | 40% | 0.344 | 13.39 | 7.59 | 0.344 | 0.345 | -11.18 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 34.96 | 39.6% | 0.384 | 10.98 | 3.18 | 0.295 | 0.498 | -7.55 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 114.08 | 51.7% | 0.787 | 7.86 | 14.51 | 0.653 | 0.939 | -12.16 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → -1 | 105.76 | 44.6% | 0.674 | 10.56 | 10.02 | 0.597 | 0.751 | -14.59 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 86.41 | 47.3% | 0.584 | 9.58 | 9.02 | 0.567 | 0.602 | -11.18 |  |

### Vòng 1090 — ghép cặp thay đổi suýt đạt · mốc: tổng 119.68R, win 52.8%, rủi ro tụt vốn 7.49R, lời÷rủi ro 15.98

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: HVN anchored → 0.125 + Điểm vùng: MACD cắt lên Signal → 0.563 | 119.68 | 52.8% | 0.831 | 7.49 | 15.98 | 0.67 | 1.011 | -12.74 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 139.23 | 51.1% | 0.8 | 8.2 | 16.98 | 0.639 | 0.977 | -12.37 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 119.68 | 52.8% | 0.831 | 7.49 | 15.98 | 0.67 | 1.011 | -12.74 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Điểm vùng: BOS → 1 | 119.68 | 52.8% | 0.831 | 7.49 | 15.98 | 0.67 | 1.011 | -12.74 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Điểm vùng: BOS → 3 | 119.68 | 52.8% | 0.831 | 7.49 | 15.98 | 0.67 | 1.011 | -12.74 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 | 118.4 | 52.1% | 0.822 | 7.72 | 15.34 | 0.654 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 139.87 | 51.1% | 0.795 | 8.04 | 17.4 | 0.632 | 0.977 | -12.37 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 118.4 | 52.1% | 0.822 | 7.72 | 15.34 | 0.654 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: BOS → 1 | 118.4 | 52.1% | 0.822 | 7.72 | 15.34 | 0.654 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: BOS → 3 | 118.4 | 52.1% | 0.822 | 7.72 | 15.34 | 0.654 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: MACD cắt lên Signal → 0.563 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 139.87 | 51.1% | 0.795 | 8.04 | 17.4 | 0.632 | 0.977 | -12.37 |  |
| Ghép: Điểm vùng: MACD cắt lên Signal → 0.563 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 119.68 | 52.8% | 0.831 | 7.49 | 15.98 | 0.67 | 1.011 | -12.16 |  |

### Vòng 1089 — ghép cặp thay đổi suýt đạt · mốc: tổng 122.85R, win 53.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.69

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 142.86 | 51.1% | 0.803 | 8.21 | 17.4 | 0.632 | 0.989 | -12.37 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 122.85 | 53.1% | 0.847 | 7.36 | 16.69 | 0.67 | 1.042 | -12.16 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: BOS → 1 | 122.85 | 53.1% | 0.847 | 7.36 | 16.69 | 0.67 | 1.042 | -12.16 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: BOS → 3 | 122.85 | 53.1% | 0.847 | 7.36 | 16.69 | 0.67 | 1.042 | -12.16 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: HVN anchored → 0.125 | 122.85 | 53.1% | 0.847 | 7.36 | 16.69 | 0.67 | 1.042 | -11.72 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 121.57 | 52.4% | 0.838 | 7.5 | 16.21 | 0.654 | 1.042 | -11.14 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: MACD cắt lên Signal → 0.563 | 122.85 | 53.1% | 0.847 | 7.36 | 16.69 | 0.67 | 1.042 | -11.14 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 143.04 | 51.4% | 0.808 | 8.09 | 17.68 | 0.632 | 1.003 | -11.35 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 122.85 | 53.1% | 0.847 | 7.36 | 16.69 | 0.67 | 1.042 | -11.14 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: BOS → 1 | 122.85 | 53.1% | 0.847 | 7.36 | 16.69 | 0.67 | 1.042 | -11.14 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: BOS → 3 | 122.85 | 53.1% | 0.847 | 7.36 | 16.69 | 0.67 | 1.042 | -11.14 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 121.57 | 52.4% | 0.838 | 7.5 | 16.21 | 0.654 | 1.042 | -12.74 |  |

### Vòng 1088 — ghép cặp thay đổi suýt đạt · mốc: tổng 119.68R, win 52.8%, rủi ro tụt vốn 7.41R, lời÷rủi ro 16.15

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: POC volume profile cố định → 0.688 | 119.68 | 52.8% | 0.831 | 7.41 | 16.15 | 0.67 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: POC volume profile cố định → 0.813 | 119.68 | 52.8% | 0.831 | 7.41 | 16.15 | 0.67 | 1.011 | -11.14 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: HVN anchored → 0.125 | 119.68 | 52.8% | 0.831 | 7.41 | 16.15 | 0.67 | 1.011 | -12.74 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 118.4 | 52.1% | 0.822 | 7.67 | 15.44 | 0.654 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 | 119.68 | 52.8% | 0.831 | 7.41 | 16.15 | 0.67 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 139.87 | 51.1% | 0.795 | 8.07 | 17.33 | 0.632 | 0.977 | -12.37 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 119.68 | 52.8% | 0.831 | 7.41 | 16.15 | 0.67 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: BOS → 1 | 119.68 | 52.8% | 0.831 | 7.41 | 16.15 | 0.67 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: BOS → 3 | 119.68 | 52.8% | 0.831 | 7.41 | 16.15 | 0.67 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: HVN anchored → 0.125 | 119.68 | 52.8% | 0.831 | 7.41 | 16.15 | 0.67 | 1.011 | -12.74 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 118.4 | 52.1% | 0.822 | 7.67 | 15.44 | 0.654 | 1.011 | -12.16 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: MACD cắt lên Signal → 0.563 | 119.68 | 52.8% | 0.831 | 7.41 | 16.15 | 0.67 | 1.011 | -12.16 |  |

### Vòng 1087 — từng thông số · mốc: tổng 119.68R, win 52.8%, rủi ro tụt vốn 7.53R, lời÷rủi ro 15.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Đệm SL riêng khung 1D (ATR): null → 0.3 | 115.44 | 46.7% | 0.7 | 10.57 | 10.92 | 0.691 | 0.707 | -10.49 |  |
| Cộng thêm ngưỡng điểm khung 1D: 4 → 3 | 117.86 | 51.4% | 0.807 | 7.66 | 15.39 | 0.644 | 0.989 | -12.16 |  |
| Cộng thêm ngưỡng điểm khung 1D: 4 → 5 | 119.68 | 52.8% | 0.831 | 7.53 | 15.89 | 0.67 | 1.011 | -12.16 |  |

### Vòng 1086 — từng thông số · mốc: tổng 119.68R, win 52.8%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| R:R tối thiểu tới TP1: 2.5 → 2.38 | 103.79 | 46.7% | 0.629 | 9.33 | 11.12 | 0.507 | 0.744 | -13.47 |  |
| R:R tối thiểu tới TP1: 2.5 → 2.63 | 99.43 | 49.6% | 0.783 | 8.21 | 12.11 | 0.543 | 1.035 | -12.86 |  |
| Ngưỡng điểm 'vào ngay' (tín hiệu mạnh): 6 → 5 | 97.24 | 46.2% | 0.671 | 9.24 | 10.52 | 0.55 | 0.804 | -8.13 |  |
| Ngưỡng điểm 'vào ngay' (tín hiệu mạnh): 6 → 7 | 105.91 | 51.7% | 0.73 | 8.06 | 13.14 | 0.67 | 0.796 | -11.17 |  |
| SL tối đa (% Entry): 0.5 → 0.425 | 118.67 | 52.4% | 0.818 | 7.51 | 15.8 | 0.67 | 0.981 | -12.16 |  |
| Đệm SL dưới vùng hỗ trợ (ATR): 1 → 0.95 | 116.69 | 50.3% | 0.783 | 8.17 | 14.28 | 0.539 | 1.051 | -12.06 |  |
| Đệm SL dưới vùng hỗ trợ (ATR): 1 → 1.05 | 99.46 | 48.6% | 0.71 | 8.37 | 11.88 | 0.478 | 0.957 | -13.71 |  |
| R:R tối thiểu riêng khung 4H: null → 2 | 122.38 | 41.3% | 0.395 | 12.5 | 9.79 | 0.357 | 0.427 | -7.44 |  |
| Đệm SL riêng khung 4H (ATR): null → 0.3 | 157.93 | 38.4% | 0.537 | 18.54 | 8.52 | 0.392 | 0.686 | -6.67 |  |
| Cộng thêm ngưỡng điểm khung 4H: 0 → -1 | 119.68 | 52.8% | 0.831 | 7.4 | 16.17 | 0.67 | 1.011 | -12.16 |  |
| Cộng thêm ngưỡng điểm khung 4H: 0 → 2 | 114.78 | 52.1% | 0.797 | 7.78 | 14.75 | 0.67 | 0.939 | -12.16 |  |
| R:R tối thiểu riêng khung 1D: null → 2 | 109.73 | 46.6% | 0.631 | 9.28 | 11.82 | 0.599 | 0.66 | -8.93 |  |

### Vòng 1085 — từng thông số · mốc: tổng 119.68R, win 52.8%, rủi ro tụt vốn 7.47R, lời÷rủi ro 16.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: Mức sai Elliott (cho SL): 2 → 1 | 112.42 | 50.7% | 0.77 | 8.01 | 14.03 | 0.602 | 0.958 | -13.13 |  |
| Điểm vùng: Mức sai Elliott (cho SL): 2 → 3 | 115.49 | 51.4% | 0.802 | 7.75 | 14.9 | 0.63 | 0.995 | -11.98 |  |
| Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự): 0.75 → 0.5 | 119.68 | 52.8% | 0.831 | 7.47 | 16.02 | 0.67 | 1.011 | -12.16 |  |
| Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự): 0.75 → 0.875 | 119.68 | 52.8% | 0.831 | 7.47 | 16.02 | 0.67 | 1.011 | -12.16 |  |
| Điểm vùng: MACD cắt lên Signal: 0.5 → 0.438 | 108.27 | 49% | 0.708 | 9.07 | 11.94 | 0.498 | 0.943 | -9.58 |  |
| Điểm vùng: MACD cắt lên Signal: 0.5 → 0.563 | 119.68 | 52.8% | 0.831 | 7.47 | 16.02 | 0.67 | 1.011 | -12.16 |  |
| Điểm vùng: Fib 0.5 / 0.382 sóng 2: 3 → 2 | 117.37 | 51.7% | 0.809 | 7.74 | 15.16 | 0.653 | 0.981 | -12.14 |  |
| Điểm vùng: Fib 0.5 / 0.382 sóng 2: 3 → 4 | 119.77 | 52.8% | 0.832 | 7.32 | 16.36 | 0.672 | 1.011 | -12.16 |  |
| Điểm vùng: Fib sóng 4: 1.25 → 0.938 | 117.66 | 52.1% | 0.829 | 7.5 | 15.69 | 0.661 | 1.011 | -12.16 |  |
| Điểm vùng: Fib sóng 4: 1.25 → 1.56 | 117.63 | 52.1% | 0.806 | 7.74 | 15.2 | 0.627 | 1.011 | -12.16 |  |
| Ngưỡng điểm vào kèo: 75 → 74 | 117.15 | 50.7% | 0.792 | 7.69 | 15.23 | 0.633 | 0.968 | -12.16 |  |
| Ngưỡng điểm vào kèo: 75 → 77 | 114.03 | 51.4% | 0.792 | 7.87 | 14.49 | 0.676 | 0.918 | -11.55 |  |

### Vòng 1084 — từng thông số · mốc: tổng 119.68R, win 52.8%, rủi ro tụt vốn 7.54R, lời÷rủi ro 15.87

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: Mức MACD: 1 → 0.875 | 114.85 | 52.4% | 0.803 | 7.39 | 15.54 | 0.654 | 0.963 | -10.87 |  |
| Điểm vùng: Mức MACD: 1 → 1.13 | 111.81 | 50.3% | 0.782 | 7.91 | 14.14 | 0.583 | 1.002 | -12.16 |  |
| Điểm vùng: POC volume profile cố định: 0.75 → 0.688 | 119.68 | 52.8% | 0.831 | 7.54 | 15.87 | 0.67 | 1.011 | -12.16 |  |
| Điểm vùng: POC volume profile cố định: 0.75 → 0.813 | 119.68 | 52.8% | 0.831 | 7.54 | 15.87 | 0.67 | 1.011 | -11.14 |  |
| Điểm vùng: HVN anchored: 0.25 → 0.188 | 119.68 | 52.8% | 0.831 | 7.54 | 15.87 | 0.67 | 1.011 | -12.16 |  |
| Điểm vùng: HVN anchored: 0.25 → 0.313 | 116.91 | 51.7% | 0.806 | 7.66 | 15.26 | 0.626 | 1.011 | -12.16 |  |
| Điểm vùng: HVN cố định: 0.5 → 0.438 | 117.22 | 51.7% | 0.808 | 7.65 | 15.32 | 0.63 | 1.011 | -12.16 |  |
| Điểm vùng: HVN cố định: 0.5 → 0.563 | 119.68 | 52.8% | 0.831 | 7.54 | 15.87 | 0.67 | 1.011 | -12.16 |  |
| Điểm vùng: Vùng RSI 45–55: 1 → 0.875 | 106.81 | 48% | 0.703 | 8.75 | 12.21 | 0.652 | 0.752 | -9.84 |  |
| Điểm vùng: Vùng RSI 45–55: 1 → 1.13 | 107.12 | 49.3% | 0.734 | 8.35 | 12.83 | 0.588 | 0.9 | -12.16 |  |
| Điểm vùng: Biên mây Ichimoku: 1.2 → 1.05 | 109.16 | 51.7% | 0.753 | 7.69 | 14.2 | 0.625 | 0.89 | -12.99 |  |
| Điểm vùng: Biên mây Ichimoku: 1.2 → 1.35 | 115.9 | 51.4% | 0.794 | 7.84 | 14.78 | 0.626 | 0.981 | -11.14 |  |

### Vòng 1083 — từng thông số · mốc: tổng 118.06R, win 52.4%, rủi ro tụt vốn 7.5R, lời÷rủi ro 15.74

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: EMA 21: 1 → 0.875 | 116.68 | 51% | 0.805 | 7.79 | 14.98 | 0.674 | 0.948 | -10.87 |  |
| Điểm vùng: EMA 21: 1 → 1.13 | 110.47 | 50.7% | 0.767 | 7.7 | 14.35 | 0.635 | 0.915 | -11.14 |  |
| Điểm vùng: Break mây Ichimoku: 2 → 1 | 105.31 | 49% | 0.716 | 8.36 | 12.6 | 0.568 | 0.88 | -12.99 |  |
| Điểm vùng: Break mây Ichimoku: 2 → 3 | 106.69 | 48.1% | 0.667 | 9.36 | 11.4 | 0.552 | 0.794 | -11.03 |  |
| Điểm vùng: Kháng cự cũ bị phá: 1.5 → 1.31 | 117.36 | 52.1% | 0.815 | 7.57 | 15.5 | 0.653 | 1.002 | -12.16 |  |
| Điểm vùng: Kháng cự cũ bị phá: 1.5 → 1.69 | 114.83 | 51.8% | 0.826 | 7.47 | 15.37 | 0.657 | 1.013 | -12.16 |  |
| Điểm vùng: Fib 0.618 sóng 2: 2.5 → 2.19 | 118.06 | 52.4% | 0.826 | 7.5 | 15.74 | 0.67 | 1.002 | -12.16 |  |
| Điểm vùng: Fib 0.618 sóng 2: 2.5 → 2.81 | 118.06 | 52.4% | 0.826 | 7.5 | 15.74 | 0.67 | 1.002 | -12.16 |  |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4): 3.44 → 3.13 | 115.71 | 52.1% | 0.804 | 7.73 | 14.97 | 0.648 | 0.982 | -12.16 |  |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4): 3.44 → 3.75 | 113.66 | 52.4% | 0.773 | 7.63 | 14.9 | 0.627 | 0.938 | -12.16 |  |
| Điểm vùng: Mức RSI 30/70: 1 → 0.875 | 116.94 | 49.7% | 0.745 | 9.05 | 12.92 | 0.585 | 0.933 | -12.16 |  |
| Điểm vùng: Mức RSI 30/70: 1 → 1.13 | 118.06 | 52.4% | 0.826 | 7.5 | 15.74 | 0.67 | 1.002 | -12.16 |  |
