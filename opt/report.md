# Tối ưu tự động (chạy liên tục) — vòng 382

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 4254 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46.6% | 96.03R | 0.596 | 5.74R | 9.85R | 9.75 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 145 | 53.1% | 118.88R | 0.82 | 6.15R | 7.4R | 16.06 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 107 | 54.2% | 91.72R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46.6% | 96.03R | 9.85R | 9.75 | 32 | 12.5% | -14.03R |
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

### Vòng 382 — ngẫu nhiên nhiều thông số · mốc: tổng 118.88R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Cộng thêm ngưỡng điểm khung 4H → 2 | 110.47 | 52.1% | 0.778 | 7.45 | 14.83 | 0.604 | 0.968 | -10.95 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 106.68 | 50% | 0.721 | 8.39 | 12.72 | 0.549 | 0.928 | -11.62 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.188 + R:R tối thiểu tới TP1 → 2.63 | 111.66 | 48.3% | 0.781 | 9.68 | 11.54 | 0.708 | 0.849 | -9.45 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Momentum (/100) → 25 + SL tối đa (% Entry) → 0.425 | 116.34 | 52.1% | 0.808 | 7.76 | 14.99 | 0.618 | 1.026 | -11.06 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Lệnh chờ hết hạn sau (nến) → 8 | 78.43 | 43.8% | 0.409 | 12.17 | 6.44 | 0.328 | 0.483 | -13.61 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.49 | 51.4% | 0.692 | 8.28 | 12.38 | 0.616 | 0.782 | -9.46 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: BOS → 1 | 72.52 | 44.4% | 0.504 | 10.85 | 6.68 | 0.541 | 0.47 | -4.53 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Cổng Dow → CHẶT | 84.89 | 52.2% | 0.751 | 7.08 | 11.99 | 0.321 | 1.131 | -10.72 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: HVN cố định → 0.563 | 116.1 | 52.1% | 0.795 | 7.97 | 14.57 | 0.602 | 1.017 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 | 113.53 | 52% | 0.767 | 7.32 | 15.51 | 0.603 | 0.96 | -10 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 36.5 | 40.2% | 0.419 | 10.35 | 3.53 | 0.324 | 0.537 | -6.21 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Coin phải mạnh hơn BTC trong N ngày → 14 + Cổng Dow → CHẶT + Số TP tối đa → 2 | 68.47 | 52% | 0.699 | 7.65 | 8.95 | 0.324 | 1.105 | -13.51 |  |

### Vòng 381 — ngẫu nhiên nhiều thông số · mốc: tổng 118.88R, win 53.1%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.20

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + % chốt ở TP1 → 0.287 + Trọng số phần Elliott (/100) → 10 | 117.21 | 52.4% | 0.82 | 7.38 | 15.88 | 0.637 | 1.027 | -9.64 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Khung lớn phải tăng (trend ≥) → 0.375 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: MACD cắt lên Signal → 0.438 | 118.55 | 47.1% | 0.681 | 9.73 | 12.18 | 0.649 | 0.72 | -9.02 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: EMA 21 → 0.875 | 161.26 | 37.8% | 0.548 | 19.1 | 8.44 | 0.425 | 0.677 | -12.32 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Divergence (/100) → 12 | 36.5 | 40.2% | 0.419 | 10.61 | 3.44 | 0.324 | 0.537 | -6.21 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: POC anchored → 4 | 110.31 | 36.9% | 0.438 | 19.96 | 5.53 | 0.193 | 0.679 | -4.59 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: POC anchored → 2 + Trọng số phần Divergence (/100) → 12 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 98.29 | 48.2% | 0.599 | 10.16 | 9.67 | 0.401 | 0.823 | -6.05 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: POC anchored → 4 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 111.8 | 47.2% | 0.621 | 8.87 | 12.6 | 0.614 | 0.628 | -5.46 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + SL tối đa (% Entry) → 0.35 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 127.28 | 42.4% | 0.539 | 14.28 | 8.91 | 0.576 | 0.508 | -11.24 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Mức RSI 30/70 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 102.72 | 44.8% | 0.667 | 9.71 | 10.58 | 0.59 | 0.767 | -8.52 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 113.21 | 47.8% | 0.703 | 9.71 | 11.66 | 0.68 | 0.725 | -5.33 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần Entry (/100) → 28 | 100.11 | 50.7% | 0.747 | 7.59 | 13.19 | 0.585 | 0.941 | -8.27 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Trend (/100) → 19 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 93.19 | 46.2% | 0.643 | 9.36 | 9.96 | 0.467 | 0.871 | -9.16 |  |

### Vòng 380 — ngẫu nhiên nhiều thông số · mốc: tổng 118.88R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: POC anchored → 2 + Điểm vùng: Fib sóng 4 → 0.938 | 103.26 | 50% | 0.688 | 8.58 | 12.03 | 0.521 | 0.87 | -8.63 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 | 106.03 | 45.7% | 0.655 | 9.46 | 11.21 | 0.63 | 0.678 | -2.97 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Divergence (/100) → 9 | 95.51 | 47% | 0.641 | 9.81 | 9.74 | 0.475 | 0.861 | -9.16 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm tối thiểu của vùng đặt SL → 4 | 63.97 | 37.7% | 0.395 | 13.63 | 4.69 | 0.431 | 0.357 | -7.22 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: POC anchored → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 10.12 | 59% | 0.122 | 7.6 | 1.33 | 0.078 | 0.18 | -6.63 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 89.78 | 49.3% | 0.632 | 8.67 | 10.36 | 0.433 | 0.843 | -10.49 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + R:R tối thiểu riêng khung 4H → 2 | 82.17 | 39.7% | 0.286 | 13.75 | 5.98 | 0.279 | 0.293 | -7.92 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Trọng số phần Entry (/100) → 33 + Điểm vùng: EMA 50 → 1.13 + % chốt ở TP1 → 0.287 | 115.05 | 51.4% | 0.799 | 7.8 | 14.75 | 0.595 | 1.041 | -8.62 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 | 108.9 | 47.2% | 0.668 | 10.39 | 10.48 | 0.659 | 0.677 | -9.16 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Cổng Dow → TẮT + Coin phải mạnh hơn BTC trong N ngày → 14 | 69.35 | 40.7% | 0.415 | 13.72 | 5.05 | 0.379 | 0.452 | -22.93 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: POC anchored → 4 + Điểm vùng: Break mây Ichimoku → 1 + Xác nhận khung nhỏ (A2) → W | 112.49 | 41.4% | 0.402 | 15.4 | 7.3 | 0.446 | 0.358 | 0.64 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: BOS → 1 + % chốt ở TP1 → 0.307 | 118.97 | 53.1% | 0.821 | 7.4 | 16.08 | 0.626 | 1.047 | -9.67 |  |

### Vòng 379 — ngẫu nhiên nhiều thông số · mốc: tổng 118.88R, win 53.1%, rủi ro tụt vốn 7.33R, lời÷rủi ro 16.22

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 + Cộng điểm phân kỳ dương ẩn → 2.63 | 154.92 | 37.5% | 0.492 | 18.96 | 8.17 | 0.416 | 0.562 | -13.07 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 | 104.56 | 49.4% | 0.63 | 9.54 | 10.96 | 0.496 | 0.777 | -9.4 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 69.12 | 46.7% | 0.646 | 9.44 | 7.32 | 0.474 | 0.842 | -5.32 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: POC volume profile cố định → 0.813 | 113.91 | 52.1% | 0.791 | 7.75 | 14.7 | 0.568 | 1.048 | -9.66 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: POC anchored → 4 + SL tối đa (% Entry) → 0.35 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 129.68 | 50.9% | 0.805 | 8.15 | 15.91 | 0.753 | 0.862 | -5.89 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Đệm SL riêng khung 1D (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 103.57 | 44.2% | 0.664 | 11.14 | 9.3 | 0.67 | 0.658 | -7.38 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần R:R (/100) → 33 + Ngưỡng điểm vào kèo → 77 | 91.85 | 50.4% | 0.799 | 7.61 | 12.07 | 0.665 | 0.949 | -16.13 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: BOS → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 121.81 | 52.8% | 0.846 | 7.35 | 16.57 | 0.67 | 1.054 | -12.92 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 75.18 | 47.2% | 0.592 | 8.92 | 8.43 | 0.451 | 0.74 | -6.11 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: EMA 21 → 0.875 | 117.43 | 51% | 0.81 | 7.83 | 15 | 0.68 | 0.953 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm tối thiểu của vùng đặt SL → 2 | 99.06 | 48.6% | 0.718 | 8.88 | 11.16 | 0.485 | 0.931 | -10.7 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Đệm SL riêng khung 1W (ATR) → 0.3 | 113.63 | 48.6% | 0.8 | 8.43 | 13.48 | 0.607 | 0.999 | -10.7 |  |

### Vòng 378 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.42R, lời÷rủi ro 15.31

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Trọng số phần Entry (/100) → 28 | 113.37 | 52.4% | 0.782 | 7.64 | 14.84 | 0.614 | 0.983 | -9.66 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: BOS → 3 + Xác nhận khung nhỏ (A2) → W | 87.71 | 36.1% | 0.348 | 17.67 | 4.96 | 0.311 | 0.385 | -5.39 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: POC volume profile cố định → 0.688 | 91.83 | 39% | 0.348 | 16.64 | 5.52 | 0.375 | 0.322 | -5.29 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Số TP tối đa → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 63.08 | 46.2% | 0.607 | 9.33 | 6.76 | 0.498 | 0.733 | -6.98 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 97.21 | 48.6% | 0.657 | 8.56 | 11.36 | 0.561 | 0.769 | -12.06 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: EMA 50 → 1.13 | 109.88 | 51% | 0.768 | 8.03 | 13.68 | 0.598 | 0.973 | -8.64 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Ngưỡng điểm vào kèo → 74 + SL tối đa (% Entry) → 0.35 | 71.64 | 47.2% | 0.676 | 8.46 | 8.47 | 0.465 | 0.921 | -6.48 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Elliott (/100) → 6 | 97.17 | 51% | 0.661 | 8.24 | 11.79 | 0.616 | 0.715 | -9.46 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 30.49 | 58% | 0.194 | 5.76 | 5.29 | 0.23 | 0.159 | -11.38 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 110.85 | 49.3% | 0.729 | 8.52 | 13.01 | 0.584 | 0.899 | -10.69 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 69.14 | 46% | 0.558 | 9.39 | 7.36 | 0.468 | 0.65 | -7.49 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: HVN cố định → 0.563 + SL tối đa (% Entry) → 0.35 + R:R tối thiểu riêng khung 1D → 2 | 102.93 | 46.7% | 0.616 | 9.35 | 11.01 | 0.604 | 0.628 | -7.92 |  |

### Vòng 377 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.53R, lời÷rủi ro 15.08

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + R:R tối thiểu tới TP1 → 2.63 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 81.31 | 47.5% | 0.666 | 9.39 | 8.66 | 0.404 | 0.966 | -8.05 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 100.71 | 49.3% | 0.68 | 8.69 | 11.59 | 0.525 | 0.859 | -9.73 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: HVN cố định → 0.438 + Điểm tối thiểu của vùng đặt SL → 4 + SL tối đa (% Entry) → 0.425 | 106.25 | 49.7% | 0.733 | 8.2 | 12.96 | 0.587 | 0.902 | -10.95 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 173.86 | 38.8% | 0.563 | 18.12 | 9.59 | 0.395 | 0.723 | -10.49 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Mức RSI 30/70 → 0.875 | 115.29 | 51.2% | 0.721 | 8.43 | 13.68 | 0.577 | 0.896 | -9.66 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 79.19 | 41.4% | 0.39 | 12.53 | 6.32 | 0.446 | 0.323 | -10.33 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: POC volume profile cố định → 0.813 | 109.95 | 52.7% | 0.743 | 7.86 | 13.99 | 0.624 | 0.875 | -8.64 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 100.71 | 50% | 0.663 | 9.04 | 11.14 | 0.512 | 0.849 | -7.08 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Cộng thêm ngưỡng điểm khung 4H → 2 | 115.51 | 51.6% | 0.736 | 8.16 | 14.16 | 0.586 | 0.921 | -9.66 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Xác nhận khung nhỏ (A2) → W + Ngưỡng điểm vào kèo → 74 | 80.61 | 36.8% | 0.333 | 17.4 | 4.63 | 0.324 | 0.341 | -4.29 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 92.76 | 46.3% | 0.682 | 9.53 | 9.73 | 0.458 | 0.913 | -10.65 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Momentum (/100) → 25 | 111.04 | 51.7% | 0.776 | 7.73 | 14.36 | 0.619 | 0.961 | -9.66 |  |

### Vòng 376 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.52R, lời÷rủi ro 15.10

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Coin phải mạnh hơn BTC trong N ngày → 14 | 83.26 | 50.9% | 0.718 | 7.93 | 10.5 | 0.552 | 0.921 | -16.13 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Elliott (/100) → 10 + Trọng số phần R:R (/100) → 28 | 96.23 | 47.4% | 0.702 | 8.9 | 10.81 | 0.619 | 0.798 | -8.09 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Mức MACD → 1.13 + Cộng thêm ngưỡng điểm khung 4H → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 109.31 | 47.7% | 0.724 | 8.52 | 12.83 | 0.59 | 0.879 | -10.69 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 113.31 | 52% | 0.766 | 7.46 | 15.19 | 0.602 | 0.958 | -10.58 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: EMA 21 → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 105.27 | 51.4% | 0.731 | 7.6 | 13.85 | 0.588 | 0.895 | -11.02 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: BOS → 3 | 90.49 | 45.9% | 0.569 | 8.97 | 10.09 | 0.495 | 0.639 | -10.97 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + SL tối đa (% Entry) → 0.35 | 110.51 | 51.7% | 0.762 | 8.01 | 13.8 | 0.612 | 0.933 | -9.66 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 | 97.37 | 51.4% | 0.667 | 8.13 | 11.98 | 0.626 | 0.715 | -9.42 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần Elliott (/100) → 6 | 130.71 | 47% | 0.568 | 10.42 | 12.54 | 0.633 | 0.503 | -10.24 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần R:R (/100) → 33 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 110.39 | 48.3% | 0.761 | 8.49 | 13 | 0.597 | 0.928 | -11.73 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: BOS → 1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.28 | 56.9% | 0.191 | 5.9 | 4.96 | 0.252 | 0.134 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 113.79 | 51.7% | 0.796 | 7.67 | 14.84 | 0.649 | 0.972 | -14.19 |  |

### Vòng 375 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.59R, lời÷rủi ro 14.96

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 94.33 | 48.9% | 0.669 | 8.69 | 10.86 | 0.48 | 0.861 | -12.54 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Break mây Ichimoku → 1 | 105.57 | 50% | 0.695 | 8.47 | 12.46 | 0.551 | 0.859 | -12.16 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + R:R tối thiểu riêng khung 1W → 2 | 105.43 | 51.4% | 0.712 | 7.87 | 13.4 | 0.621 | 0.809 | -10.69 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: BOS → 3 + Trọng số phần SL (/100) → 7 | 109.4 | 52.7% | 0.739 | 7.74 | 14.13 | 0.586 | 0.925 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: EMA 200 → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: EMA 50 → 1.13 | 97.69 | 40.3% | 0.331 | 12.88 | 7.58 | 0.283 | 0.373 | -8.69 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: MACD cắt lên Signal → 0.563 | 112.56 | 52.4% | 0.776 | 7.54 | 14.93 | 0.604 | 0.983 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 122.83 | 50% | 0.798 | 8.3 | 14.8 | 0.767 | 0.835 | -10.24 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: BOS → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 75.47 | 45.7% | 0.719 | 8.45 | 8.93 | 0.549 | 0.946 | -4.05 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: EMA 200 → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 | 82.84 | 50.8% | 0.69 | 8 | 10.36 | 0.599 | 0.802 | -14.93 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Break mây Ichimoku → 1 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 82.69 | 44.7% | 0.551 | 10.84 | 7.63 | 0.428 | 0.704 | -9.47 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 50 → 0.75 + Cổng Dow → CHẶT | 76.76 | 52.3% | 0.704 | 7.11 | 10.8 | 0.298 | 1.048 | -10.72 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Trọng số phần Elliott (/100) → 6 | 108.89 | 51.7% | 0.751 | 7.9 | 13.78 | 0.558 | 0.976 | -9.66 |  |

### Vòng 374 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.62R, lời÷rủi ro 14.90

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Xác nhận khung nhỏ (A2) → W | 83.22 | 38.1% | 0.341 | 16.56 | 5.03 | 0.283 | 0.394 | -4.56 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 115.79 | 48.8% | 0.689 | 9.12 | 12.7 | 0.553 | 0.862 | -9.58 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: BOS → 3 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: HVN anchored → 0.313 | 108.96 | 50.7% | 0.746 | 8.07 | 13.5 | 0.564 | 0.973 | -8.64 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm tối thiểu của vùng đặt SL → 4 | 107.13 | 50.7% | 0.744 | 7.9 | 13.56 | 0.616 | 0.887 | -9.74 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: POC volume profile cố định → 0.813 | 112.87 | 51.4% | 0.784 | 7.64 | 14.77 | 0.675 | 0.909 | -9.66 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu riêng khung 1W → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 12.43 | 51% | 0.085 | 8.04 | 1.55 | 0.125 | 0.042 | -11.32 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 97.36 | 51.4% | 0.667 | 8.3 | 11.73 | 0.626 | 0.715 | -10.82 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Mức RSI 30/70 → 0.875 | 100.6 | 45.8% | 0.658 | 10.17 | 9.89 | 0.46 | 0.88 | -10.7 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 93.72 | 50% | 0.642 | 8.92 | 10.51 | 0.492 | 0.792 | -11.66 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Đệm SL riêng khung 1D (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 98.97 | 45.8% | 0.589 | 11.22 | 8.82 | 0.629 | 0.552 | -5.52 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 108.93 | 50.3% | 0.751 | 8.05 | 13.53 | 0.503 | 1.032 | -9.52 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần R:R (/100) → 33 + Điểm vùng: POC volume profile cố định → 0.688 | 153.05 | 37.9% | 0.528 | 18.42 | 8.31 | 0.355 | 0.698 | -14.45 |  |

### Vòng 373 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.5R, lời÷rủi ro 15.14

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 111.79 | 51.7% | 0.771 | 7.8 | 14.33 | 0.652 | 0.909 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Break mây Ichimoku → 3 | 102.64 | 47.9% | 0.622 | 9.67 | 10.61 | 0.457 | 0.806 | -5.61 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 34.03 | 39.1% | 0.391 | 10.71 | 3.18 | 0.315 | 0.49 | -6.21 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Lệnh chờ hết hạn sau (nến) → 8 + R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Divergence (/100) → 9 | 93.08 | 49.6% | 0.722 | 8.19 | 11.37 | 0.47 | 1.029 | -10.9 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: EMA 21 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần SL (/100) → 7 | 112.86 | 44.3% | 0.495 | 11.12 | 10.15 | 0.585 | 0.407 | -11.7 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần SL (/100) → 7 | 110.85 | 49.3% | 0.729 | 8.61 | 12.87 | 0.584 | 0.899 | -10.69 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 29.63 | 58.2% | 0.188 | 5.97 | 4.96 | 0.219 | 0.157 | -11.38 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + SL tối đa (% Entry) → 0.425 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 95.61 | 47.3% | 0.579 | 9.39 | 10.18 | 0.643 | 0.519 | -7.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: HVN cố định → 0.438 | 111.19 | 51.4% | 0.772 | 7.54 | 14.75 | 0.602 | 0.974 | -10.95 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Mức MACD → 0.875 | 89.38 | 47.3% | 0.682 | 8.74 | 10.23 | 0.427 | 0.934 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Đệm SL riêng khung 4H (ATR) → 0.3 + Lệnh chờ hết hạn sau (nến) → 8 | 158.12 | 37.7% | 0.505 | 18.97 | 8.34 | 0.296 | 0.724 | -13.35 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Trọng số phần R:R (/100) → 33 | 108.22 | 51.7% | 0.736 | 7.45 | 14.53 | 0.603 | 0.895 | -10 |  |
