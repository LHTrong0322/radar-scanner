# Tối ưu tự động (chạy liên tục) — vòng 537

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 6099 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.3% | 93.93R | 0.58 | 6.74R | 10.1R | 9.30 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 143 | 53.1% | 113.77R | 0.796 | 6.15R | 7.39R | 15.40 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 105 | 54.3% | 86.61R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.3% | 93.93R | 10.1R | 9.30 | 32 | 12.5% | -14.03R |
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

### Vòng 537 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.39R, lời÷rủi ro 15.40

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Mức RSI 30/70 → 0.875 | 115.8 | 51.9% | 0.742 | 8.2 | 14.12 | 0.58 | 0.942 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Trend (/100) → 19 + Cộng thêm ngưỡng điểm khung 1D → 3 | 103.39 | 50.7% | 0.699 | 8.29 | 12.47 | 0.608 | 0.791 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + % chốt ở TP1 → 0.287 | 113.59 | 53.1% | 0.794 | 7.39 | 15.37 | 0.632 | 0.984 | -9.64 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 108.24 | 51.4% | 0.741 | 7.88 | 13.74 | 0.595 | 0.909 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Cổng Dow → TẮT | 121.46 | 44.2% | 0.584 | 11.63 | 10.44 | 0.519 | 0.648 | -19.27 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Biên mây Ichimoku → 1.35 | 81.08 | 38.2% | 0.33 | 17.42 | 4.65 | 0.279 | 0.376 | -0.69 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Ngưỡng điểm vào kèo → 77 | 30.89 | 57.3% | 0.206 | 5.58 | 5.54 | 0.251 | 0.162 | -10.74 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Cổng Dow → CHẶT + Khung lớn phải tăng (trend ≥) → 0.375 | 73.07 | 51.4% | 0.696 | 6.96 | 10.5 | 0.326 | 1.008 | -10.72 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Momentum (/100) → 25 + R:R tối thiểu tới TP1 → 2.63 | 93.01 | 50% | 0.788 | 8.09 | 11.5 | 0.548 | 1.054 | -10.63 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: EMA 21 → 1.13 | 87.04 | 48.5% | 0.64 | 8.47 | 10.28 | 0.55 | 0.748 | -8.61 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 109.19 | 51.1% | 0.786 | 7.69 | 14.2 | 0.621 | 0.972 | -12.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Fib sóng 4 → 1.56 | 101.9 | 46.2% | 0.703 | 9.3 | 10.96 | 0.509 | 0.905 | -10.7 |  |

### Vòng 536 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.49R, lời÷rủi ro 15.19

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 109.92 | 48.7% | 0.714 | 8.75 | 12.56 | 0.578 | 0.864 | -10.69 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Biên mây Ichimoku → 1.05 | 90.72 | 50.4% | 0.643 | 8.42 | 10.77 | 0.545 | 0.741 | -10.03 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm tối thiểu của vùng đặt SL → 2 + SL tối đa (% Entry) → 0.425 | 79.17 | 47.1% | 0.574 | 10.18 | 7.78 | 0.541 | 0.603 | -10.5 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 162.5 | 39.2% | 0.568 | 17.91 | 9.07 | 0.425 | 0.713 | -12.14 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: MACD cắt lên Signal → 0.563 | 112.76 | 52.8% | 0.783 | 7.55 | 14.94 | 0.635 | 0.953 | -9.66 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 55.36 | 44.8% | 0.443 | 10.13 | 5.46 | 0.334 | 0.561 | -8.66 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 4H (ATR) → 0.3 | 158.2 | 39% | 0.551 | 18.52 | 8.54 | 0.412 | 0.691 | -12.32 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: POC anchored → 4 + Coin phải mạnh hơn BTC trong N ngày → 14 | 86.5 | 49.6% | 0.66 | 8.15 | 10.61 | 0.607 | 0.716 | -16.28 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + R:R tối thiểu tới TP1 → 2.38 | 91.89 | 46.8% | 0.589 | 8.82 | 10.42 | 0.515 | 0.657 | -11.23 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: HVN cố định → 0.438 | 115.8 | 51.9% | 0.742 | 8.1 | 14.3 | 0.58 | 0.942 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Entry (/100) → 33 | 95.35 | 51.3% | 0.801 | 7.84 | 12.16 | 0.561 | 1.063 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 28.21 | 53.6% | 0.17 | 6.18 | 4.56 | 0.184 | 0.154 | -9.51 |  |

### Vòng 535 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.29R, lời÷rủi ro 15.61

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 200 → 1 | 103.76 | 51.6% | 0.661 | 8.73 | 11.89 | 0.627 | 0.703 | -4.47 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần Trend (/100) → 19 | 104.81 | 49.7% | 0.676 | 9.26 | 11.32 | 0.49 | 0.896 | -7.08 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Lệnh chờ hết hạn sau (nến) → 8 | 111.49 | 46.7% | 0.613 | 9.18 | 12.14 | 0.623 | 0.602 | -9.57 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + SL tối đa (% Entry) → 0.425 | 112.01 | 52.4% | 0.772 | 7.69 | 14.57 | 0.635 | 0.928 | -8.34 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: EMA 50 → 1.13 | 109.32 | 47.7% | 0.714 | 8.77 | 12.47 | 0.55 | 0.909 | -9.67 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + R:R tối thiểu riêng khung 1W → 2 | 104.77 | 49.7% | 0.676 | 8.69 | 12.06 | 0.597 | 0.762 | -10.02 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 69.23 | 48.2% | 0.629 | 8.65 | 8 | 0.453 | 0.833 | -7.45 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Số TP tối đa → 2 | 110.77 | 51% | 0.764 | 8.1 | 13.68 | 0.598 | 0.962 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: MACD cắt lên Signal → 0.563 | 113.77 | 53.1% | 0.796 | 7.29 | 15.61 | 0.635 | 0.983 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 101.72 | 43.3% | 0.473 | 12.54 | 8.11 | 0.517 | 0.43 | -11.85 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Elliott (/100) → 10 | 157.93 | 38.9% | 0.548 | 18.33 | 8.62 | 0.398 | 0.703 | -14.45 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Biên mây Ichimoku → 1.35 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 30.95 | 57.6% | 0.182 | 7.75 | 3.99 | 0.258 | 0.122 | -9.77 |  |

### Vòng 534 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 15.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 | 96.09 | 47.1% | 0.612 | 9.86 | 9.75 | 0.687 | 0.55 | -7.39 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu riêng khung 1D → 2 | 29.94 | 57.1% | 0.171 | 6.08 | 4.92 | 0.225 | 0.125 | -9.65 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 | 73.19 | 40.2% | 0.286 | 12.83 | 5.7 | 0.287 | 0.285 | -17.67 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Cổng Dow → CHẶT + Trọng số phần Trend (/100) → 12 | 77.05 | 50.5% | 0.694 | 7.48 | 10.3 | 0.336 | 0.998 | -10.72 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: EMA 200 → 1 | 108.13 | 51% | 0.716 | 8.19 | 13.2 | 0.639 | 0.812 | -4.67 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng thêm ngưỡng điểm khung 4H → 2 | 94.46 | 51.1% | 0.67 | 8.27 | 11.42 | 0.65 | 0.691 | -8.88 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 | 102.31 | 47% | 0.687 | 9.67 | 10.58 | 0.606 | 0.76 | -11.83 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Biên mây Ichimoku → 1.35 | 106.35 | 48.5% | 0.652 | 9.36 | 11.36 | 0.58 | 0.728 | -10.86 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Trọng số phần SL (/100) → 9 + Trọng số phần Divergence (/100) → 12 | 112.3 | 52.4% | 0.785 | 7.48 | 15.01 | 0.635 | 0.961 | -9.66 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + R:R tối thiểu riêng khung 1D → 2 | 103.2 | 45.7% | 0.597 | 9.28 | 11.12 | 0.604 | 0.59 | -7.94 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: HVN cố định → 0.563 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Fib sóng 4 → 1.56 | 98.17 | 49.6% | 0.696 | 8.4 | 11.69 | 0.565 | 0.833 | -10.73 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: EMA 21 → 0.875 | 84.11 | 49.6% | 0.707 | 8.33 | 10.1 | 0.577 | 0.868 | -16.13 |  |

### Vòng 533 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.41R, lời÷rủi ro 15.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần R:R (/100) → 33 | 113.31 | 52.8% | 0.787 | 7.67 | 14.77 | 0.635 | 0.962 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Trọng số phần Trend (/100) → 19 | 113.92 | 51.4% | 0.791 | 7.81 | 14.59 | 0.692 | 0.899 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + % chốt ở TP1 → 0.287 | 87.85 | 44.8% | 0.532 | 11.71 | 7.5 | 0.591 | 0.48 | -5.46 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + % chốt ở TP1 → 0.287 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Fib sóng 4 → 0.938 | 105.37 | 47.2% | 0.742 | 8.78 | 12 | 0.588 | 0.88 | -11.72 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu riêng khung 1D → 2 | 100.82 | 44.6% | 0.548 | 10.65 | 9.47 | 0.491 | 0.601 | -6.13 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Trọng số phần R:R (/100) → 33 | 112.56 | 52.4% | 0.776 | 7.51 | 14.99 | 0.635 | 0.936 | -8.34 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Entry (/100) → 33 | 70.08 | 46.2% | 0.661 | 9.06 | 7.74 | 0.473 | 0.88 | -6.48 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 92.75 | 49.3% | 0.644 | 8.94 | 10.37 | 0.544 | 0.762 | -9.5 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Số TP tối đa → 2 + SL tối đa (% Entry) → 0.425 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 112.74 | 51% | 0.788 | 7.92 | 14.23 | 0.647 | 0.953 | -12.92 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần Elliott (/100) → 6 | 112.14 | 52.1% | 0.768 | 7.54 | 14.87 | 0.621 | 0.936 | -8.34 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Xác nhận khung nhỏ (A2) → W | 85.45 | 38.6% | 0.343 | 17.06 | 5.01 | 0.307 | 0.377 | -3.74 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Momentum (/100) → 25 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 78.61 | 45.1% | 0.485 | 10.3 | 7.63 | 0.406 | 0.564 | -10.86 |  |

### Vòng 532 — ngẫu nhiên nhiều thông số · mốc: tổng 112.56R, win 52.8%, rủi ro tụt vốn 7.59R, lời÷rủi ro 14.83

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + R:R tối thiểu riêng khung 1W → 2 | 68.79 | 41.3% | 0.481 | 11.42 | 6.02 | 0.387 | 0.584 | -7.02 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Cổng Dow → CHẶT + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 76.63 | 50.5% | 0.703 | 7.51 | 10.2 | 0.331 | 1.03 | -9.71 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: MACD cắt lên Signal → 0.438 | 102.9 | 48% | 0.677 | 9.64 | 10.67 | 0.472 | 0.911 | -5.72 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trọng số phần Entry (/100) → 28 | 111.91 | 52.1% | 0.777 | 7.72 | 14.5 | 0.624 | 0.958 | -8.3 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Fib sóng 4 → 1.56 | 120.18 | 45.5% | 0.537 | 10.74 | 11.19 | 0.585 | 0.486 | -11.05 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 84.56 | 38.7% | 0.455 | 11.81 | 7.16 | 0.625 | 0.288 | -4.81 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Fib sóng 4 → 1.56 | 98.94 | 35% | 0.438 | 20.55 | 4.81 | 0.321 | 0.563 | -17 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: EMA 50 → 1.13 | 106.67 | 50% | 0.721 | 8.51 | 12.53 | 0.576 | 0.896 | -7.28 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Trọng số phần Trend (/100) → 19 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: HVN anchored → 0.313 | 103.71 | 50% | 0.71 | 8.1 | 12.8 | 0.575 | 0.87 | -8.65 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 89.38 | 42.2% | 0.517 | 13.16 | 6.79 | 0.504 | 0.528 | -10.13 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 93.32 | 50.3% | 0.653 | 8.4 | 11.11 | 0.641 | 0.666 | -8.07 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Break mây Ichimoku → 3 | 100.57 | 48.4% | 0.632 | 9.4 | 10.7 | 0.504 | 0.783 | -8.33 |  |

### Vòng 531 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.33R, lời÷rủi ro 15.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Đệm SL riêng khung 4H (ATR) → 0.3 | 17.9 | 46.9% | 0.079 | 16.78 | 1.07 | 0.051 | 0.105 | -16.76 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Biên mây Ichimoku → 1.05 | 96.67 | 51.4% | 0.653 | 8.08 | 11.96 | 0.569 | 0.748 | -10.49 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: BOS → 1 | 104.27 | 41% | 0.34 | 12.48 | 8.35 | 0.339 | 0.34 | -10.29 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Mức MACD → 0.875 | 39.62 | 42% | 0.45 | 9.63 | 4.11 | 0.368 | 0.553 | -8.59 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Xác nhận khung nhỏ (A2) → W | 86.68 | 38.7% | 0.35 | 16.79 | 5.16 | 0.31 | 0.386 | -3.53 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Cộng điểm phân kỳ dương ẩn → 2.25 + R:R tối thiểu riêng khung 4H → 2 | 103.8 | 37.6% | 0.257 | 17.45 | 5.95 | 0.348 | 0.173 | -24.22 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm tối thiểu của vùng đặt SL → 4 + Cộng thêm ngưỡng điểm khung 1W → -1 | 113.09 | 50.4% | 0.825 | 8.09 | 13.98 | 0.642 | 1.04 | -8.91 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: POC volume profile cố định → 0.813 | 104.02 | 50% | 0.703 | 8.46 | 12.3 | 0.554 | 0.873 | -9.62 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Fib sóng 4 → 1.56 | 111.83 | 52.1% | 0.777 | 7.72 | 14.49 | 0.621 | 0.961 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 62.93 | 44.4% | 0.583 | 9.38 | 6.71 | 0.333 | 0.861 | -6.45 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Lệnh chờ hết hạn sau (nến) → 8 + % chốt ở TP1 → 0.287 | 120.26 | 52.6% | 0.771 | 7.99 | 15.05 | 0.625 | 0.941 | -11.23 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 71.55 | 47.2% | 0.675 | 8.88 | 8.06 | 0.473 | 0.91 | -6.48 |  |

### Vòng 530 — ngẫu nhiên nhiều thông số · mốc: tổng 112.76R, win 52.8%, rủi ro tụt vốn 7.64R, lời÷rủi ro 14.76

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 26.81 | 52.7% | 0.147 | 7.1 | 3.78 | 0.165 | 0.127 | -11.12 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 116.59 | 51% | 0.752 | 7.97 | 14.63 | 0.612 | 0.913 | -12.29 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 61.98 | 44.6% | 0.614 | 9.08 | 6.83 | 0.406 | 0.853 | -8.41 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 110.3 | 52.8% | 0.777 | 7.6 | 14.51 | 0.599 | 0.976 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần Trend (/100) → 12 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 106.84 | 45.2% | 0.636 | 10.92 | 9.78 | 0.676 | 0.6 | -6.18 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 112.01 | 52.4% | 0.772 | 7.58 | 14.78 | 0.614 | 0.957 | -8.34 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: EMA 21 → 1.13 | 104.65 | 51.7% | 0.732 | 7.69 | 13.61 | 0.588 | 0.895 | -11.29 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần SL (/100) → 7 | 78.48 | 46% | 0.487 | 10.08 | 7.79 | 0.356 | 0.62 | -8.8 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Khung lớn phải tăng (trend ≥) → 0.375 + Xác nhận khung nhỏ (A2) → W | 94.23 | 38.8% | 0.365 | 16.31 | 5.78 | 0.313 | 0.413 | -3.74 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1W (ATR) → 0.3 | 84.08 | 41.2% | 0.568 | 11.33 | 7.42 | 0.416 | 0.738 | -7.83 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Break mây Ichimoku → 3 | 64.1 | 46.2% | 0.486 | 9.85 | 6.51 | 0.381 | 0.6 | -15.87 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + SL tối đa (% Entry) → 0.425 | 111.3 | 52.1% | 0.762 | 7.95 | 14 | 0.614 | 0.933 | -9.66 |  |

### Vòng 529 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.35R, lời÷rủi ro 15.48

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Số TP tối đa → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: MACD cắt lên Signal → 0.563 | 113.84 | 52.8% | 0.791 | 7.52 | 15.14 | 0.64 | 0.964 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 111.31 | 53.2% | 0.789 | 7.42 | 15 | 0.621 | 0.976 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Xác nhận khung nhỏ (A2) → W | 85.88 | 37.8% | 0.373 | 17.03 | 5.04 | 0.293 | 0.451 | -5.76 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Coin phải mạnh hơn BTC trong N ngày → 14 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 17 | 56.6% | 0.132 | 6.56 | 2.59 | 0.158 | 0.105 | -11.65 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Cộng thêm ngưỡng điểm khung 1D → 3 | 113.31 | 52.1% | 0.776 | 7.79 | 14.55 | 0.61 | 0.972 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Trend (/100) → 12 | 111.83 | 52.1% | 0.777 | 7.68 | 14.56 | 0.621 | 0.961 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.563 + Ngưỡng điểm vào kèo → 74 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 78.59 | 41.4% | 0.465 | 13.85 | 5.67 | 0.475 | 0.456 | -6.35 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 111.88 | 52.1% | 0.766 | 7.86 | 14.23 | 0.601 | 0.962 | -9.66 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: HVN anchored → 0.313 | 108.22 | 51.4% | 0.752 | 7.87 | 13.75 | 0.581 | 0.942 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 96.87 | 51% | 0.677 | 8.07 | 12 | 0.664 | 0.693 | -9.46 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Mức MACD → 0.875 | 113.06 | 52.3% | 0.729 | 8.2 | 13.79 | 0.592 | 0.892 | -10.02 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Biên mây Ichimoku → 1.35 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 59.46 | 42.7% | 0.508 | 10.51 | 5.66 | 0.404 | 0.634 | -14.61 |  |

### Vòng 528 — ngẫu nhiên nhiều thông số · mốc: tổng 110.99R, win 53.2%, rủi ro tụt vốn 7.43R, lời÷rủi ro 14.94

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Cổng Dow → TẮT + Điểm vùng: HVN cố định → 0.438 | 130.03 | 44.9% | 0.608 | 11.12 | 11.69 | 0.571 | 0.645 | -18.42 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 110.79 | 52.8% | 0.78 | 7.53 | 14.71 | 0.624 | 0.97 | -9.11 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm tối thiểu của vùng đặt SL → 4 | 108.63 | 52.1% | 0.765 | 7.69 | 14.13 | 0.641 | 0.907 | -9.11 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 81.05 | 47.5% | 0.583 | 8.24 | 9.84 | 0.615 | 0.563 | -8.7 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + SL tối đa (% Entry) → 0.425 + Điểm vùng: BOS → 1 | 109.79 | 52.4% | 0.768 | 7.68 | 14.3 | 0.624 | 0.94 | -9.11 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 109.06 | 52.1% | 0.757 | 7.69 | 14.18 | 0.635 | 0.898 | -9.11 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Trọng số phần Trend (/100) → 19 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: POC anchored → 2 | 95.05 | 48.7% | 0.625 | 8.75 | 10.86 | 0.522 | 0.741 | -8.08 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + % chốt ở TP1 → 0.287 + Cộng thêm ngưỡng điểm khung 1W → 2 | 110.17 | 52.5% | 0.781 | 7.51 | 14.67 | 0.638 | 0.949 | -9.09 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 27.28 | 55.8% | 0.175 | 6.29 | 4.34 | 0.197 | 0.153 | -11.27 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Divergence (/100) → 9 + Trọng số phần Momentum (/100) → 25 + Đệm SL riêng khung 1D (ATR) → 0.3 | 54.72 | 40.4% | 0.48 | 11.97 | 4.57 | 0.366 | 0.579 | -5.17 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: EMA 50 → 1.13 + Trọng số phần R:R (/100) → 28 + Điểm vùng: EMA 200 → 1 | 96.94 | 47.7% | 0.625 | 9.28 | 10.45 | 0.523 | 0.756 | -5.29 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm tối thiểu của vùng đặt SL → 4 | 99.13 | 47.8% | 0.623 | 9.45 | 10.49 | 0.555 | 0.703 | -11.24 |  |
