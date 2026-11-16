# Tối ưu tự động (chạy liên tục) — vòng 478

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 5406 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46% | 89.39R | 0.555 | 6.74R | 10.19R | 8.77 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 145 | 52.4% | 112.56R | 0.776 | 6.15R | 7.75R | 14.52 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 107 | 53.3% | 85.41R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46% | 89.39R | 10.19R | 8.77 | 32 | 12.5% | -14.03R |
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

### Vòng 478 — ngẫu nhiên nhiều thông số · mốc: tổng 112.56R, win 52.4%, rủi ro tụt vốn 7.75R, lời÷rủi ro 14.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Fib sóng 4 → 1.56 + Số TP tối đa → 2 | 71.53 | 47.2% | 0.675 | 8.62 | 8.3 | 0.485 | 0.904 | -6.48 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Cộng thêm ngưỡng điểm khung 4H → -1 + Cổng Dow → TẮT + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 105.69 | 42% | 0.528 | 12.28 | 8.61 | 0.485 | 0.57 | -15.18 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 50 → 1.13 | 113.88 | 48.1% | 0.739 | 8.83 | 12.9 | 0.698 | 0.79 | -9.22 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Trọng số phần SL (/100) → 7 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: EMA 50 → 1.13 | 107.76 | 50.3% | 0.743 | 8.08 | 13.34 | 0.577 | 0.942 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Divergence (/100) → 9 | 112.55 | 52.4% | 0.776 | 7.74 | 14.54 | 0.624 | 0.953 | -11.06 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + SL tối đa (% Entry) → 0.35 | 109.85 | 51.7% | 0.758 | 8.04 | 13.66 | 0.591 | 0.952 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần Trend (/100) → 12 | 117.88 | 44.2% | 0.526 | 11.27 | 10.46 | 0.598 | 0.454 | -10.24 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Lệnh chờ hết hạn sau (nến) → 6 | 83.89 | 47.4% | 0.612 | 9 | 9.32 | 0.549 | 0.678 | -9.3 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 57.64 | 42.2% | 0.358 | 12.92 | 4.46 | 0.28 | 0.426 | -7.09 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức MACD → 0.875 | 25.39 | 55.2% | 0.165 | 6.36 | 3.99 | 0.214 | 0.118 | -11.38 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 20.42 | 62.5% | 0.213 | 5.5 | 3.71 | 0.2 | 0.227 | -6.86 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Break mây Ichimoku → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 141.29 | 35.7% | 0.454 | 21.18 | 6.67 | 0.246 | 0.648 | -6.58 |  |

### Vòng 477 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.56R, lời÷rủi ro 15.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: Mức MACD → 0.875 | 103.84 | 48.7% | 0.692 | 8.69 | 11.95 | 0.548 | 0.857 | -10.69 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Trọng số phần Divergence (/100) → 9 | 112.87 | 51.4% | 0.784 | 7.81 | 14.45 | 0.675 | 0.909 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + SL tối đa (% Entry) → 0.35 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 78.71 | 45.7% | 0.486 | 10.34 | 7.61 | 0.423 | 0.551 | -9.52 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Coin phải mạnh hơn BTC trong N ngày → 14 | 73.54 | 50% | 0.645 | 8.22 | 8.95 | 0.526 | 0.782 | -17.45 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 70.41 | 47.1% | 0.677 | 8.76 | 8.04 | 0.465 | 0.934 | -6.59 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 97.83 | 44.4% | 0.639 | 9.96 | 9.82 | 0.59 | 0.705 | -8.52 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Cổng Dow → TẮT + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Elliott (/100) → 6 | 92.93 | 39.3% | 0.553 | 13.77 | 6.75 | 0.494 | 0.61 | -20.32 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 4H → -1 | 113.57 | 52.8% | 0.789 | 7.56 | 15.02 | 0.624 | 0.983 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + R:R tối thiểu riêng khung 1D → 2 | 109.29 | 47.7% | 0.621 | 9.09 | 12.02 | 0.693 | 0.548 | -4.7 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 1D → 7 | 94.5 | 45.8% | 0.618 | 9.82 | 9.62 | 0.554 | 0.67 | -8.96 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + R:R tối thiểu riêng khung 1W → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 98.2 | 50.3% | 0.677 | 8.19 | 11.99 | 0.584 | 0.774 | -10.69 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Divergence (/100) → 9 | 24.25 | 57% | 0.161 | 6.82 | 3.56 | 0.174 | 0.147 | -11.18 |  |

### Vòng 476 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.52R, lời÷rủi ro 15.10

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: HVN cố định → 0.438 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 102.56 | 48.6% | 0.733 | 8.8 | 11.65 | 0.658 | 0.821 | -8.09 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + SL tối đa (% Entry) → 0.425 | 109.63 | 51.4% | 0.761 | 7.65 | 14.33 | 0.63 | 0.912 | -9.66 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Ngưỡng điểm vào kèo → 74 | 120.85 | 49% | 0.77 | 8.33 | 14.51 | 0.746 | 0.798 | -10.24 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức MACD → 1.13 | 29.34 | 57.7% | 0.188 | 5.77 | 5.08 | 0.224 | 0.153 | -11.38 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Cổng Dow → TẮT | 118.62 | 42.5% | 0.573 | 11.9 | 9.97 | 0.494 | 0.651 | -15.18 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Fib sóng 4 → 1.56 | 109.84 | 50.3% | 0.758 | 8.01 | 13.71 | 0.655 | 0.864 | -10 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: HVN cố định → 0.563 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 92.54 | 50.7% | 0.652 | 8.4 | 11.02 | 0.612 | 0.697 | -9.42 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + SL tối đa (% Entry) → 0.35 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 | 34.83 | 39.5% | 0.405 | 10.57 | 3.3 | 0.295 | 0.537 | -6.21 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 | 85.85 | 45.5% | 0.557 | 10.52 | 8.16 | 0.578 | 0.541 | -8.7 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Divergence (/100) → 12 + % chốt ở TP1 → 0.287 | 111.81 | 51.4% | 0.766 | 7.75 | 14.43 | 0.617 | 0.937 | -8.32 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + R:R tối thiểu tới TP1 → 2.38 + R:R tối thiểu riêng khung 1D → 2 | 96.31 | 45.3% | 0.532 | 9.33 | 10.32 | 0.564 | 0.506 | -8.96 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: POC anchored → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 92.64 | 47.1% | 0.59 | 9.35 | 9.91 | 0.49 | 0.708 | -8.63 |  |

### Vòng 475 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.46R, lời÷rủi ro 15.22

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: EMA 200 → 1 | 111.04 | 51.2% | 0.694 | 8.53 | 13.02 | 0.558 | 0.869 | -4.7 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.43 | 57.9% | 0.198 | 5.53 | 5.68 | 0.22 | 0.176 | -10.3 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: MACD cắt lên Signal → 0.438 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Elliott (/100) → 10 | 92.79 | 45.3% | 0.668 | 9.94 | 9.34 | 0.436 | 0.889 | -8.12 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: EMA 200 → 3 + Trọng số phần Divergence (/100) → 9 | 99.32 | 49.3% | 0.699 | 8.18 | 12.14 | 0.472 | 0.954 | -8.6 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 95.63 | 51% | 0.659 | 8.36 | 11.44 | 0.612 | 0.715 | -9.42 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: POC volume profile cố định → 0.813 + Lệnh chờ hết hạn sau (nến) → 6 | 94.79 | 50.4% | 0.713 | 7.78 | 12.18 | 0.585 | 0.868 | -7.25 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Divergence (/100) → 9 + % chốt ở TP1 → 0.307 | 83.32 | 50.9% | 0.718 | 7.87 | 10.59 | 0.554 | 0.921 | -16.13 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Trend (/100) → 19 + Cộng thêm ngưỡng điểm khung 4H → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 108.76 | 50.7% | 0.716 | 8.16 | 13.33 | 0.587 | 0.866 | -11.25 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khung lớn phải tăng (trend ≥) → 0.375 | 94.11 | 50.7% | 0.645 | 8.38 | 11.23 | 0.596 | 0.7 | -9.42 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: POC anchored → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 98.03 | 49% | 0.649 | 8.58 | 11.43 | 0.527 | 0.786 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 97.14 | 45.3% | 0.571 | 9.19 | 10.57 | 0.587 | 0.556 | -8.5 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Cộng thêm ngưỡng điểm khung 4H → 2 | 111.35 | 51.8% | 0.79 | 7.61 | 14.63 | 0.639 | 0.961 | -9.66 |  |

### Vòng 474 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.52R, lời÷rủi ro 15.10

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + R:R tối thiểu riêng khung 1D → 2 | 103.42 | 46.2% | 0.605 | 9.13 | 11.33 | 0.594 | 0.615 | -7.92 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Cộng điểm phân kỳ dương ẩn → 2.63 + Xác nhận khung nhỏ (A2) → W | 80 | 37.4% | 0.325 | 17.78 | 4.5 | 0.302 | 0.346 | -4.56 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 3.5 + Đệm SL riêng khung 4H (ATR) → 0.3 | 169.31 | 38.4% | 0.555 | 19.21 | 8.81 | 0.504 | 0.602 | -12.54 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Khung lớn phải tăng (trend ≥) → 0.425 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 53.93 | 43.7% | 0.399 | 11.22 | 4.81 | 0.242 | 0.533 | -16.21 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: POC anchored → 4 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 87.28 | 48.4% | 0.542 | 10.08 | 8.66 | 0.482 | 0.607 | -1.67 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: BOS → 3 | 110.72 | 51.1% | 0.785 | 7.59 | 14.59 | 0.646 | 0.939 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần R:R (/100) → 33 | 100.62 | 49% | 0.675 | 8.58 | 11.73 | 0.516 | 0.86 | -11.02 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: POC volume profile cố định → 0.813 | 105.51 | 41.1% | 0.347 | 12.64 | 8.35 | 0.334 | 0.358 | -8.04 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Mức MACD → 1.13 | 110.17 | 51% | 0.76 | 7.97 | 13.82 | 0.581 | 0.974 | -11.06 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Trọng số phần Divergence (/100) → 12 + Điểm vùng: BOS → 1 | 78.31 | 51.3% | 0.693 | 7.11 | 11.01 | 0.305 | 1.048 | -10.72 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 95.52 | 47.9% | 0.579 | 10.24 | 9.33 | 0.449 | 0.743 | -7.36 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần R:R (/100) → 33 | 115.39 | 51.4% | 0.78 | 7.7 | 14.99 | 0.638 | 0.933 | -7.74 |  |

### Vòng 473 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.52R, lời÷rủi ro 15.10

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: EMA 21 → 1.13 + Số TP tối đa → 2 | 110.88 | 51.7% | 0.734 | 7.83 | 14.16 | 0.569 | 0.93 | -10 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: POC volume profile cố định → 0.813 | 109.77 | 52.1% | 0.752 | 7.74 | 14.18 | 0.602 | 0.929 | -9.61 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần Entry (/100) → 28 | 109.84 | 50.3% | 0.758 | 8.08 | 13.59 | 0.655 | 0.864 | -10 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Cộng thêm ngưỡng điểm khung 1D → 7 + Cổng Dow → TẮT | 109.81 | 42.8% | 0.546 | 11.87 | 9.25 | 0.439 | 0.652 | -16.16 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Trọng số phần Entry (/100) → 28 + Điểm vùng: POC anchored → 4 | 112.86 | 51.3% | 0.752 | 8.2 | 13.76 | 0.576 | 0.944 | -3.83 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 110.79 | 51.7% | 0.764 | 8.03 | 13.8 | 0.602 | 0.953 | -8.64 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 1W → -1 + R:R tối thiểu riêng khung 1D → 2 | 65.44 | 43.8% | 0.511 | 10.55 | 6.2 | 0.51 | 0.512 | -6.82 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Cộng điểm phân kỳ dương ẩn → 2.63 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 95.83 | 50.7% | 0.656 | 8.51 | 11.26 | 0.593 | 0.727 | -7.53 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + SL tối đa (% Entry) → 0.35 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 54.3 | 42% | 0.485 | 11.5 | 4.72 | 0.352 | 0.649 | -7.92 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + % chốt ở TP1 → 0.287 | 74.75 | 46.5% | 0.579 | 9.59 | 7.79 | 0.438 | 0.733 | -4.82 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Elliott (/100) → 6 + Trọng số phần R:R (/100) → 28 | 111.35 | 51.8% | 0.79 | 7.74 | 14.39 | 0.639 | 0.961 | -9.66 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm tối thiểu của vùng đặt SL → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 164.61 | 39.4% | 0.554 | 17.88 | 9.21 | 0.384 | 0.723 | -11.23 |  |

### Vòng 472 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.56R, lời÷rủi ro 15.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: BOS → 3 | 103.91 | 46.7% | 0.615 | 8.98 | 11.57 | 0.616 | 0.614 | -7.92 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 82.18 | 46.6% | 0.555 | 10.02 | 8.2 | 0.467 | 0.672 | -7.34 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 16.15 | 56.7% | 0.127 | 6.98 | 2.31 | 0.146 | 0.108 | -11.65 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: EMA 200 → 3 + Điểm tối thiểu của vùng đặt SL → 4 | 94.97 | 46.7% | 0.576 | 10.42 | 9.11 | 0.402 | 0.778 | -7.04 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khung lớn phải tăng (trend ≥) → 0.375 | 94.11 | 50.7% | 0.645 | 8.42 | 11.18 | 0.596 | 0.7 | -9.42 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: BOS → 1 + Xác nhận khung nhỏ (A2) → W + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 80.54 | 37.2% | 0.318 | 17.81 | 4.52 | 0.289 | 0.348 | -9.08 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Điểm vùng: HVN anchored → 0.313 | 110.82 | 52.1% | 0.78 | 7.8 | 14.21 | 0.605 | 0.983 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Ngưỡng điểm vào kèo → 74 | 108.77 | 50.3% | 0.761 | 8.02 | 13.56 | 0.647 | 0.879 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 151.8 | 36.4% | 0.503 | 20.05 | 7.57 | 0.329 | 0.681 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 + Lệnh chờ hết hạn sau (nến) → 8 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 93.21 | 47.5% | 0.59 | 9.54 | 9.77 | 0.484 | 0.708 | -10.71 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 89.24 | 39.9% | 0.292 | 14.72 | 6.06 | 0.354 | 0.233 | -11.57 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần R:R (/100) → 28 | 96.86 | 51% | 0.677 | 8.01 | 12.09 | 0.664 | 0.693 | -9.42 |  |

### Vòng 471 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.57R, lời÷rủi ro 15.00

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Cộng thêm ngưỡng điểm khung 4H → -1 | 103.05 | 51.7% | 0.711 | 7.89 | 13.06 | 0.579 | 0.86 | -11.78 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: EMA 21 → 1.13 + Lệnh chờ hết hạn sau (nến) → 6 | 88.95 | 50% | 0.664 | 8.07 | 11.02 | 0.563 | 0.789 | -8.61 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Break mây Ichimoku → 3 | 102.76 | 49.1% | 0.638 | 9.52 | 10.79 | 0.495 | 0.807 | -9.4 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + R:R tối thiểu riêng khung 4H → 2 | 83.74 | 38.6% | 0.252 | 16.53 | 5.07 | 0.35 | 0.17 | -11.59 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần SL (/100) → 7 | 103.05 | 51.7% | 0.711 | 7.89 | 13.06 | 0.579 | 0.86 | -11.78 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: POC volume profile cố định → 0.813 | 114.82 | 52.1% | 0.809 | 7.66 | 14.99 | 0.67 | 0.972 | -11.9 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: EMA 50 → 1.13 + Ngưỡng điểm vào kèo → 74 | 98.73 | 49% | 0.672 | 8.32 | 11.87 | 0.563 | 0.794 | -11.78 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Fib sóng 4 → 1.56 + Cổng Dow → CHẶT | 27.3 | 62% | 0.199 | 5.13 | 5.32 | 0.227 | 0.178 | -7.41 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Biên mây Ichimoku → 1.05 | 103.05 | 51.7% | 0.711 | 7.89 | 13.06 | 0.579 | 0.86 | -11.78 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Mức RSI 30/70 → 1.13 | 112.82 | 52.4% | 0.778 | 7.94 | 14.21 | 0.624 | 0.957 | -8.34 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + SL tối đa (% Entry) → 0.35 | 107.76 | 51% | 0.754 | 7.88 | 13.68 | 0.571 | 0.967 | -10.88 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 97.38 | 47.2% | 0.597 | 9.03 | 10.78 | 0.7 | 0.508 | -8 |  |

### Vòng 470 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.52R, lời÷rủi ro 15.10

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Trọng số phần Elliott (/100) → 10 | 112.04 | 52.1% | 0.789 | 7.46 | 15.02 | 0.64 | 0.961 | -9.66 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 74.26 | 47.9% | 0.624 | 8.58 | 8.66 | 0.579 | 0.679 | -15.42 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 112.47 | 51.3% | 0.74 | 7.93 | 14.18 | 0.6 | 0.896 | -5.24 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL riêng khung 1D (ATR) → 0.3 | 100.97 | 41.8% | 0.534 | 12.29 | 8.22 | 0.576 | 0.5 | -5.55 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Đệm SL riêng khung 1W (ATR) → 0.3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 98.81 | 45.9% | 0.81 | 9 | 10.98 | 0.614 | 1.027 | -12.71 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 114.63 | 50.4% | 0.837 | 8.02 | 14.29 | 0.631 | 1.085 | -8.91 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 108.11 | 51% | 0.735 | 7.99 | 13.53 | 0.592 | 0.907 | -10.63 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 50 → 0.75 + Đệm SL riêng khung 4H (ATR) → 0.3 | 110.89 | 35.1% | 0.486 | 19.32 | 5.74 | 0.42 | 0.559 | -15.77 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: HVN cố định → 0.563 | 110.87 | 51.7% | 0.765 | 7.63 | 14.53 | 0.599 | 0.953 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Trọng số phần R:R (/100) → 28 + Khung lớn phải tăng (trend ≥) → 0.425 | 108.27 | 51.4% | 0.785 | 7.74 | 13.99 | 0.6 | 0.998 | -9.69 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: POC volume profile cố định → 0.813 | 113.03 | 52.1% | 0.785 | 7.56 | 14.95 | 0.632 | 0.961 | -8.65 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Fib sóng 4 → 0.938 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.89 | 57.9% | 0.197 | 5.77 | 5.18 | 0.237 | 0.158 | -11.38 |  |

### Vòng 469 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.56R, lời÷rủi ro 15.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Ngưỡng điểm vào kèo → 77 | 109.97 | 50.7% | 0.774 | 7.76 | 14.17 | 0.646 | 0.914 | -8.34 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 21 → 1.13 | 85.31 | 38.6% | 0.329 | 16.85 | 5.06 | 0.298 | 0.36 | -5.21 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 97.42 | 48.6% | 0.696 | 8.61 | 11.31 | 0.634 | 0.77 | -8.67 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: HVN anchored → 0.188 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Khung lớn phải tăng (trend ≥) → 0.425 | 108.27 | 51.4% | 0.785 | 7.62 | 14.21 | 0.6 | 0.998 | -9.17 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Cộng thêm ngưỡng điểm khung 4H → -1 | 110.85 | 49.3% | 0.729 | 8.41 | 13.18 | 0.584 | 0.899 | -10.69 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Lệnh chờ hết hạn sau (nến) → 8 | 126.88 | 48.8% | 0.755 | 8.92 | 14.22 | 0.77 | 0.737 | -10.81 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 106.21 | 48.6% | 0.738 | 8.43 | 12.6 | 0.537 | 0.961 | -12.21 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 113.57 | 52.8% | 0.789 | 7.56 | 15.02 | 0.624 | 0.983 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 111.91 | 51.7% | 0.761 | 7.74 | 14.46 | 0.614 | 0.933 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: POC anchored → 2 + Điểm vùng: EMA 50 → 0.75 | 102.6 | 48.3% | 0.679 | 9.03 | 11.36 | 0.44 | 0.929 | -9.53 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Biên mây Ichimoku → 1.05 | 91.03 | 48.3% | 0.637 | 8.86 | 10.27 | 0.514 | 0.784 | -13.65 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Trọng số phần R:R (/100) → 28 | 112.04 | 52.1% | 0.789 | 7.53 | 14.88 | 0.64 | 0.961 | -9.66 |  |
