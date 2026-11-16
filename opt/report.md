# Tối ưu tự động (chạy liên tục) — vòng 472

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 5334 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 160 | 46.3% | 90.4R | 0.565 | 5.74R | 10.13R | 8.92 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 144 | 52.8% | 113.57R | 0.789 | 6.15R | 7.56R | 15.02 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 106 | 53.8% | 86.41R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 160 | 46.3% | 90.4R | 10.13R | 8.92 | 32 | 12.5% | -14.03R |
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

### Vòng 468 — ngẫu nhiên nhiều thông số · mốc: tổng 117.2R, win 53.1%, rủi ro tụt vốn 7.3R, lời÷rủi ro 16.05

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: EMA 21 → 0.875 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 28.83 | 56.9% | 0.18 | 6.25 | 4.61 | 0.252 | 0.118 | -10.06 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Cộng thêm ngưỡng điểm khung 4H → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 114.99 | 52.1% | 0.81 | 7.51 | 15.31 | 0.639 | 1.001 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm tối thiểu của vùng đặt SL → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 | 160.23 | 38.9% | 0.556 | 18.03 | 8.89 | 0.41 | 0.702 | -12.23 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 69.9 | 43.4% | 0.44 | 12.37 | 5.65 | 0.382 | 0.501 | -11.07 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cộng điểm phân kỳ dương ẩn → 2.63 | 101.01 | 51.7% | 0.687 | 8.13 | 12.42 | 0.626 | 0.758 | -9.42 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 68.83 | 45.5% | 0.514 | 9.97 | 6.9 | 0.47 | 0.56 | -5.82 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Mức RSI 30/70 → 1.13 | 111.58 | 50.3% | 0.78 | 7.78 | 14.34 | 0.622 | 0.95 | -8.64 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 71.58 | 48.1% | 0.675 | 8.55 | 8.37 | 0.473 | 0.911 | -6.48 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: BOS → 3 | 111.82 | 50.7% | 0.766 | 8.08 | 13.84 | 0.493 | 1.071 | -9.52 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 | 81.88 | 41.1% | 0.317 | 12.24 | 6.69 | 0.277 | 0.348 | -16.85 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: EMA 200 → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 23.76 | 57.5% | 0.155 | 6.31 | 3.77 | 0.152 | 0.159 | -11.34 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: BOS → 1 | 112.73 | 52.4% | 0.777 | 7.66 | 14.72 | 0.568 | 1.015 | -9.66 |  |

### Vòng 467 — ngẫu nhiên nhiều thông số · mốc: tổng 117.2R, win 53.1%, rủi ro tụt vốn 7.33R, lời÷rủi ro 15.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Vùng RSI 45–55 → 1.13 + R:R tối thiểu riêng khung 1W → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 94.95 | 48% | 0.642 | 8.66 | 10.96 | 0.561 | 0.724 | -10.7 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 21 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 111.58 | 51.7% | 0.759 | 7.34 | 15.2 | 0.607 | 0.936 | -10 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Elliott (/100) → 6 | 112.77 | 51.7% | 0.789 | 7.72 | 14.61 | 0.578 | 1.034 | -10.95 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: EMA 50 → 1.13 | 108.95 | 49.1% | 0.685 | 8.69 | 12.54 | 0.503 | 0.917 | -10.23 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 1D (ATR) → 0.3 | 115.55 | 44.8% | 0.672 | 11.04 | 10.47 | 0.77 | 0.585 | -5.6 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: POC volume profile cố định → 0.688 | 117.01 | 52.7% | 0.801 | 7.54 | 15.52 | 0.614 | 1.023 | -9.66 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: EMA 50 → 0.75 + Điểm tối thiểu của vùng đặt SL → 4 | 89.98 | 46.2% | 0.621 | 9.29 | 9.69 | 0.505 | 0.759 | -9.16 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Cộng thêm ngưỡng điểm khung 1D → 4 + Cộng điểm phân kỳ dương ẩn → 3.5 | 101.64 | 52.5% | 0.833 | 7.27 | 13.98 | 0.569 | 1.116 | -10.63 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: EMA 200 → 3 + Lệnh chờ hết hạn sau (nến) → 8 | 102.18 | 49% | 0.659 | 8.62 | 11.85 | 0.45 | 0.901 | -11.7 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 114.68 | 52.1% | 0.786 | 7.6 | 15.09 | 0.602 | 0.997 | -9.74 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 98.84 | 46.3% | 0.618 | 9.12 | 10.84 | 0.55 | 0.679 | -9.86 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 114.72 | 52% | 0.775 | 8 | 14.34 | 0.603 | 0.972 | -9.66 |  |

### Vòng 466 — ngẫu nhiên nhiều thông số · mốc: tổng 117.2R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 15.84

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần Divergence (/100) → 9 | 109.5 | 51% | 0.766 | 7.52 | 14.56 | 0.547 | 1.014 | -10.95 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Khung lớn phải tăng (trend ≥) → 0.425 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 123.7 | 50% | 0.825 | 8.15 | 15.18 | 0.759 | 0.901 | -10.28 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: Break mây Ichimoku → 1 | 101.83 | 48.3% | 0.683 | 8.68 | 11.73 | 0.505 | 0.89 | -9.35 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib sóng 4 → 1.56 | 82.99 | 37.9% | 0.335 | 17.16 | 4.84 | 0.273 | 0.391 | -4.57 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Cộng điểm phân kỳ dương ẩn → 3.5 + Trọng số phần Divergence (/100) → 9 | 116.49 | 52.4% | 0.792 | 7.68 | 15.17 | 0.614 | 1 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 | 33.24 | 39.3% | 0.373 | 10.94 | 3.04 | 0.313 | 0.447 | -6.21 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Đệm SL riêng khung 1D (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Khung lớn phải tăng (trend ≥) → 0.375 | 65.07 | 41% | 0.556 | 11.47 | 5.67 | 0.371 | 0.72 | -4.74 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Ngưỡng điểm vào kèo → 74 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 110.47 | 40.8% | 0.363 | 12.85 | 8.6 | 0.333 | 0.391 | -8.52 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: POC anchored → 2 + Trọng số phần Momentum (/100) → 21 + Trọng số phần Elliott (/100) → 10 | 101.25 | 49.3% | 0.666 | 8.74 | 11.58 | 0.51 | 0.835 | -7.93 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng điểm phân kỳ dương ẩn → 2.63 | 68.86 | 46.2% | 0.65 | 8.8 | 7.82 | 0.449 | 0.883 | -6.83 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần Elliott (/100) → 6 | 87.83 | 50.4% | 0.751 | 7.83 | 11.22 | 0.584 | 0.952 | -16.13 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: MACD cắt lên Signal → 0.438 | 105.23 | 48.8% | 0.658 | 9.54 | 11.03 | 0.459 | 0.888 | -6.06 |  |

### Vòng 465 — ngẫu nhiên nhiều thông số · mốc: tổng 117.2R, win 53.1%, rủi ro tụt vốn 7.33R, lời÷rủi ro 15.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Lệnh chờ hết hạn sau (nến) → 8 | 97.44 | 49.1% | 0.613 | 9.18 | 10.61 | 0.54 | 0.699 | -10.43 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 108.98 | 50.3% | 0.694 | 9.06 | 12.03 | 0.48 | 0.954 | -7.08 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: MACD cắt lên Signal → 0.438 | 31.46 | 38.3% | 0.388 | 9.99 | 3.15 | 0.409 | 0.361 | -3.68 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: POC anchored → 4 | 117.35 | 52% | 0.782 | 7.85 | 14.95 | 0.591 | 0.984 | -4.37 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Fib sóng 4 → 1.56 + Số TP tối đa → 2 + Điểm vùng: HVN anchored → 0.313 | 110.44 | 50% | 0.746 | 8.3 | 13.31 | 0.451 | 1.084 | -9.52 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 | 112.24 | 51.7% | 0.774 | 7.59 | 14.79 | 0.604 | 0.966 | -9.48 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần R:R (/100) → 33 | 115.89 | 52.4% | 0.788 | 7.73 | 14.99 | 0.593 | 1.021 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần SL (/100) → 9 | 115.54 | 52.1% | 0.791 | 7.64 | 15.12 | 0.614 | 1.001 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: POC anchored → 4 | 116.7 | 52% | 0.778 | 7.75 | 15.06 | 0.586 | 0.981 | -5.53 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: EMA 200 → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: HVN anchored → 0.188 | 106.26 | 48% | 0.708 | 8.58 | 12.38 | 0.611 | 0.817 | -9.19 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 116.23 | 52.4% | 0.791 | 7.48 | 15.54 | 0.624 | 0.979 | -9.66 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + % chốt ở TP1 → 0.287 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + R:R tối thiểu tới TP1 → 2.63 | 87.07 | 48.8% | 0.708 | 9 | 9.67 | 0.433 | 0.996 | -8.03 |  |

### Vòng 464 — ngẫu nhiên nhiều thông số · mốc: tổng 117.2R, win 53.1%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.14

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + % chốt ở TP1 → 0.307 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 1W (ATR) → 0.3 | 75.29 | 45.8% | 0.704 | 9.15 | 8.23 | 0.435 | 1.009 | -7.52 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Entry (/100) → 28 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 73.64 | 43.6% | 0.446 | 11.15 | 6.6 | 0.368 | 0.524 | -9.09 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 1D → 4 | 108.81 | 51.7% | 0.73 | 7.67 | 14.19 | 0.632 | 0.83 | -10.7 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Trọng số phần Divergence (/100) → 9 | 116.49 | 52.4% | 0.792 | 7.6 | 15.33 | 0.614 | 1 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Momentum (/100) → 25 | 102.07 | 51.1% | 0.745 | 7.86 | 12.99 | 0.521 | 1.001 | -11.51 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 114.67 | 52.1% | 0.796 | 7.74 | 14.82 | 0.619 | 1.001 | -9.66 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 74.51 | 47.6% | 0.71 | 8.53 | 8.74 | 0.473 | 0.991 | -6.48 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: POC volume profile cố định → 0.813 | 31.39 | 58.9% | 0.199 | 5.67 | 5.54 | 0.235 | 0.164 | -9.09 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm tối thiểu của vùng đặt SL → 2 + Cộng điểm phân kỳ dương ẩn → 3.5 | 68.51 | 44.7% | 0.426 | 11.17 | 6.13 | 0.333 | 0.519 | -9.82 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Elliott (/100) → 10 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 111.79 | 48.4% | 0.721 | 8.77 | 12.75 | 0.722 | 0.721 | -11.28 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: Mức RSI 30/70 → 1.13 | 111.85 | 52% | 0.756 | 7.52 | 14.87 | 0.603 | 0.936 | -10 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Biên mây Ichimoku → 1.05 | 100.71 | 51.7% | 0.685 | 8.12 | 12.4 | 0.579 | 0.802 | -10.13 |  |

### Vòng 463 — ngẫu nhiên nhiều thông số · mốc: tổng 117.2R, win 53.1%, rủi ro tụt vốn 7.3R, lời÷rủi ro 16.05

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC anchored → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 + Cộng thêm ngưỡng điểm khung 4H → 2 | 158.58 | 37.5% | 0.541 | 18.48 | 8.58 | 0.311 | 0.783 | -18.34 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + R:R tối thiểu riêng khung 1W → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 79.47 | 45.7% | 0.491 | 10.32 | 7.7 | 0.397 | 0.584 | -9.84 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + SL tối đa (% Entry) → 0.425 + Cổng Dow → CHẶT + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 81.81 | 51.8% | 0.73 | 6.93 | 11.81 | 0.314 | 1.091 | -10.72 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 + R:R tối thiểu riêng khung 1W → 2 | 111.21 | 52.3% | 0.736 | 7.66 | 14.52 | 0.621 | 0.853 | -10.69 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 157.98 | 38.9% | 0.534 | 18.12 | 8.72 | 0.37 | 0.7 | -15.48 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + R:R tối thiểu riêng khung 4H → 2 + Số TP tối đa → 2 + Trọng số phần Momentum (/100) → 25 | 121.17 | 41.1% | 0.383 | 12.32 | 9.84 | 0.339 | 0.421 | -9.78 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Đệm SL riêng khung 1D (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cổng Dow → TẮT | 42.99 | 53.3% | 0.188 | 9.41 | 4.57 | 0.298 | 0.103 | -14.52 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Mức MACD → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 104.48 | 50.3% | 0.721 | 8.37 | 12.48 | 0.556 | 0.896 | -8.34 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + R:R tối thiểu riêng khung 4H → 2 | 108 | 40.8% | 0.355 | 13.12 | 8.23 | 0.319 | 0.386 | -10.8 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 103.1 | 49.3% | 0.726 | 8.34 | 12.36 | 0.563 | 0.92 | -12.92 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 | 92.65 | 48.8% | 0.579 | 9.83 | 9.43 | 0.501 | 0.67 | -6.84 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: BOS → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Coin phải mạnh hơn BTC trong N ngày → 14 | 81.85 | 44.4% | 0.568 | 9.44 | 8.67 | 0.576 | 0.561 | -15.68 |  |
