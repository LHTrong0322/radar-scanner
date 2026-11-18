# Tối ưu tự động (chạy liên tục) — vòng 649

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 7443 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.9% | 94.11R | 0.581 | 5.5R | 9.87R | 9.53 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 145 | 53.8% | 118.56R | 0.818 | 5.09R | 7.61R | 15.58 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 107 | 55.1% | 91.4R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.9% | 94.11R | 9.87R | 9.53 | 32 | 12.5% | -14.03R |
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

### Vòng 649 — ngẫu nhiên nhiều thông số · mốc: tổng 118.56R, win 53.8%, rủi ro tụt vốn 7.61R, lời÷rủi ro 15.58

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.438 | 90.9 | 47.1% | 0.668 | 9.23 | 9.85 | 0.337 | 0.963 | -10.7 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần Momentum (/100) → 21 | 97.14 | 45.9% | 0.565 | 10.12 | 9.6 | 0.628 | 0.501 | -10.22 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Số TP tối đa → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 117.86 | 53.1% | 0.813 | 7.64 | 15.43 | 0.64 | 1.009 | -9.66 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 27.82 | 56.3% | 0.16 | 6.72 | 4.14 | 0.195 | 0.126 | -12.44 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: POC volume profile cố định → 0.813 | 117.54 | 53.4% | 0.805 | 7.46 | 15.76 | 0.635 | 0.995 | -10.04 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Biên mây Ichimoku → 1.35 | 83.66 | 53.2% | 0.767 | 7.18 | 11.65 | 0.343 | 1.114 | -10.72 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 117.54 | 53.4% | 0.805 | 7.46 | 15.76 | 0.635 | 0.995 | -11.06 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Ngưỡng điểm vào kèo → 74 | 116.72 | 52.3% | 0.783 | 7.67 | 15.22 | 0.608 | 0.981 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: BOS → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 117.54 | 53.4% | 0.805 | 7.46 | 15.76 | 0.635 | 0.995 | -11.06 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + R:R tối thiểu riêng khung 1W → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 100.49 | 47.5% | 0.636 | 8.56 | 11.74 | 0.564 | 0.697 | -11.23 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Khung lớn phải tăng (trend ≥) → 0.425 | 33.07 | 40.7% | 0.408 | 9.65 | 3.43 | 0.243 | 0.614 | -7.76 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Momentum (/100) → 25 | 124.06 | 49.1% | 0.771 | 8.68 | 14.29 | 0.729 | 0.819 | -11.27 |  |

### Vòng 648 — ngẫu nhiên nhiều thông số · mốc: tổng 118.56R, win 53.8%, rủi ro tụt vốn 7.55R, lời÷rủi ro 15.70

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 117.44 | 53.4% | 0.804 | 7.41 | 15.85 | 0.614 | 1.023 | -9.66 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Ngưỡng điểm vào kèo → 74 | 75.89 | 47.7% | 0.696 | 8.34 | 9.1 | 0.473 | 0.941 | -6.48 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Biên mây Ichimoku → 1.05 + SL tối đa (% Entry) → 0.425 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 62.2 | 47.3% | 0.555 | 9.67 | 6.43 | 0.475 | 0.639 | -6.15 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Cộng thêm ngưỡng điểm khung 1W → 2 | 117.93 | 53.1% | 0.813 | 7.61 | 15.5 | 0.641 | 1.003 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Xác nhận khung nhỏ (A2) → W | 90.2 | 38.8% | 0.35 | 17.28 | 5.22 | 0.383 | 0.317 | -5.72 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 116.69 | 53.1% | 0.794 | 7.67 | 15.21 | 0.614 | 0.997 | -8.34 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Đệm SL riêng khung 4H (ATR) → 0.3 | 165.18 | 40% | 0.533 | 17.61 | 9.38 | 0.362 | 0.711 | -15.42 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần SL (/100) → 7 | 109.66 | 51.7% | 0.736 | 7.88 | 13.92 | 0.637 | 0.834 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 5 | 114.37 | 50.7% | 0.783 | 7.88 | 14.51 | 0.66 | 0.906 | -10 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Trend (/100) → 12 | 79.56 | 50.4% | 0.68 | 7.98 | 9.97 | 0.569 | 0.8 | -18.25 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: POC volume profile cố định → 0.813 | 105.29 | 47.6% | 0.642 | 8.61 | 12.23 | 0.535 | 0.744 | -13.47 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Cộng thêm ngưỡng điểm khung 4H → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 93.84 | 45.9% | 0.643 | 9.76 | 9.61 | 0.569 | 0.727 | -9.71 |  |

### Vòng 647 — ngẫu nhiên nhiều thông số · mốc: tổng 117.44R, win 53.5%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.22

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 115.35 | 52.1% | 0.812 | 7.66 | 15.06 | 0.675 | 0.958 | -7.27 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng thêm ngưỡng điểm khung 1W → -1 | 81.26 | 51.3% | 0.707 | 7.15 | 11.37 | 0.417 | 0.954 | -10.3 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Fib sóng 4 → 1.56 + Cộng điểm phân kỳ dương ẩn → 2.25 + Đệm SL riêng khung 1W (ATR) → 0.3 | 113.7 | 50.3% | 0.743 | 8.57 | 13.27 | 0.549 | 0.956 | -8.33 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 123.15 | 50.6% | 0.789 | 8.41 | 14.64 | 0.783 | 0.797 | -7.86 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 120.49 | 50.6% | 0.772 | 8.49 | 14.19 | 0.631 | 0.942 | -9.51 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần SL (/100) → 7 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 108.57 | 52.1% | 0.744 | 7.69 | 14.12 | 0.621 | 0.884 | -7.27 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 | 103.71 | 49.7% | 0.669 | 8.92 | 11.63 | 0.45 | 0.909 | -4.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + % chốt ở TP1 → 0.307 + Điểm vùng: Mức MACD → 1.13 | 118.24 | 51.6% | 0.753 | 8.22 | 14.38 | 0.582 | 0.961 | -7.29 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: MACD cắt lên Signal → 0.438 | 104.35 | 49% | 0.682 | 8.92 | 11.7 | 0.514 | 0.876 | -4.69 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: HVN anchored → 0.313 | 112.2 | 51% | 0.774 | 7.96 | 14.1 | 0.597 | 0.974 | -5.96 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Khung lớn phải tăng (trend ≥) → 0.425 | 76.24 | 49.5% | 0.726 | 7.92 | 9.63 | 0.497 | 0.968 | -7.11 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + % chốt ở TP1 → 0.287 + R:R tối thiểu riêng khung 4H → 2 | 116.99 | 41.1% | 0.367 | 11.81 | 9.91 | 0.374 | 0.36 | -9.21 |  |

### Vòng 646 — ngẫu nhiên nhiều thông số · mốc: tổng 118.56R, win 53.8%, rủi ro tụt vốn 7.55R, lời÷rủi ro 15.70

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm tối thiểu của vùng đặt SL → 2 | 121.03 | 50.6% | 0.766 | 8.71 | 13.9 | 0.757 | 0.777 | -10.24 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Ngưỡng điểm vào kèo → 74 | 115.37 | 49.4% | 0.74 | 8.09 | 14.26 | 0.561 | 0.943 | -10.69 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 122.83 | 44.5% | 0.536 | 10.96 | 11.21 | 0.567 | 0.505 | -10.74 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Số TP tối đa → 2 + Điểm vùng: HVN cố định → 0.438 | 117.11 | 52.7% | 0.802 | 7.54 | 15.53 | 0.617 | 1.009 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Trọng số phần Entry (/100) → 28 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 99.64 | 48.6% | 0.712 | 8.53 | 11.68 | 0.498 | 0.938 | -11.51 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm tối thiểu của vùng đặt SL → 2 | 109.61 | 52.7% | 0.741 | 8.17 | 13.42 | 0.604 | 0.885 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 114.37 | 53.7% | 0.768 | 7.61 | 15.03 | 0.595 | 0.967 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Số TP tối đa → 2 | 103.73 | 47.9% | 0.741 | 8.76 | 11.84 | 0.56 | 0.962 | -8.91 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Lệnh chờ hết hạn sau (nến) → 8 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Mức MACD → 0.875 | 109.63 | 51% | 0.698 | 8.1 | 13.53 | 0.551 | 0.859 | -11.25 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 64.71 | 45.6% | 0.518 | 9.8 | 6.6 | 0.405 | 0.636 | -9.69 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 111.6 | 41.5% | 0.357 | 12.65 | 8.82 | 0.322 | 0.385 | -9.84 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 86.32 | 46.6% | 0.49 | 10.42 | 8.28 | 0.508 | 0.474 | -10.7 |  |

### Vòng 645 — ngẫu nhiên nhiều thông số · mốc: tổng 114.95R, win 53.5%, rủi ro tụt vốn 7.48R, lời÷rủi ro 15.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: BOS → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 125.13 | 50% | 0.813 | 8.25 | 15.17 | 0.792 | 0.836 | -13.5 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm vào kèo → 74 | 143.13 | 38% | 0.49 | 18.52 | 7.73 | 0.305 | 0.673 | -14.44 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 102.66 | 50.3% | 0.698 | 8.24 | 12.46 | 0.513 | 0.914 | -9.66 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: EMA 200 → 3 + Trọng số phần SL (/100) → 9 + Điểm vùng: Mức MACD → 0.875 | 102.47 | 50% | 0.702 | 8.62 | 11.89 | 0.514 | 0.9 | -12.88 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 92.54 | 42.7% | 0.449 | 11.82 | 7.83 | 0.486 | 0.402 | -14.82 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: POC anchored → 2 | 103.9 | 51% | 0.697 | 8.39 | 12.38 | 0.538 | 0.868 | -8.63 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: EMA 50 → 1.13 + SL tối đa (% Entry) → 0.425 + Trọng số phần SL (/100) → 9 | 104.17 | 50.7% | 0.694 | 8.74 | 11.92 | 0.555 | 0.846 | -8.64 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 161.89 | 39% | 0.531 | 18.47 | 8.77 | 0.389 | 0.663 | -14.59 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 | 112.97 | 52.4% | 0.79 | 7.45 | 15.16 | 0.611 | 0.982 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib sóng 4 → 0.938 | 110.44 | 52.1% | 0.767 | 7.72 | 14.31 | 0.536 | 1.025 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 111.91 | 49.7% | 0.741 | 8.6 | 13.01 | 0.534 | 0.974 | -10.69 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 97.82 | 48.6% | 0.709 | 8.94 | 10.94 | 0.42 | 0.966 | -10.7 |  |

### Vòng 644 — ngẫu nhiên nhiều thông số · mốc: tổng 118.56R, win 53.8%, rủi ro tụt vốn 7.55R, lời÷rủi ro 15.70

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: EMA 200 → 1 | 113.25 | 49.4% | 0.717 | 8.87 | 12.77 | 0.562 | 0.907 | -4.4 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Trọng số phần Divergence (/100) → 9 | 116.39 | 52.4% | 0.803 | 7.43 | 15.66 | 0.64 | 0.982 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 113.68 | 51.7% | 0.763 | 8.1 | 14.03 | 0.588 | 0.95 | -10.69 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Trend (/100) → 19 + Điểm vùng: BOS → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 86.85 | 50% | 0.736 | 7.89 | 11.01 | 0.566 | 0.924 | -16.13 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm tối thiểu của vùng đặt SL → 4 | 79.68 | 44.8% | 0.483 | 10.42 | 7.65 | 0.467 | 0.497 | -9.82 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 100.12 | 44% | 0.63 | 10.35 | 9.67 | 0.608 | 0.657 | -7.57 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: POC volume profile cố định → 0.688 | 117.96 | 53.4% | 0.808 | 7.39 | 15.96 | 0.632 | 1.005 | -9.64 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + % chốt ở TP1 → 0.307 | 116.9 | 52.8% | 0.812 | 7.38 | 15.84 | 0.642 | 1.002 | -9.67 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: POC volume profile cố định → 0.688 + Số TP tối đa → 2 | 119.33 | 53.8% | 0.823 | 7.55 | 15.81 | 0.64 | 1.03 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: BOS → 1 | 115.79 | 52.7% | 0.793 | 7.58 | 15.28 | 0.591 | 1.025 | -9.66 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 24 | 36.8% | 0.353 | 9.91 | 2.42 | 0.466 | 0.201 | -4.97 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + R:R tối thiểu riêng khung 1W → 2 | 109.19 | 52% | 0.738 | 7.81 | 13.98 | 0.625 | 0.85 | -10.69 |  |

### Vòng 643 — ngẫu nhiên nhiều thông số · mốc: tổng 120.64R, win 53.8%, rủi ro tụt vốn 7.14R, lời÷rủi ro 16.90

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Trọng số phần Elliott (/100) → 6 + Số TP tối đa → 2 + Trọng số phần SL (/100) → 9 | 113.6 | 52.1% | 0.789 | 7.46 | 15.23 | 0.624 | 0.968 | -10.13 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm tối thiểu của vùng đặt SL → 4 | 116.28 | 52.1% | 0.807 | 7.39 | 15.73 | 0.641 | 0.984 | -10.13 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Cộng thêm ngưỡng điểm khung 1W → 2 | 120.01 | 53.1% | 0.828 | 7.24 | 16.58 | 0.65 | 1.023 | -10.13 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 50 → 1.13 + R:R tối thiểu riêng khung 4H → 2 | 74.08 | 35.9% | 0.173 | 23.42 | 3.16 | 0.122 | 0.214 | -7.61 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 104.34 | 49.7% | 0.682 | 8.88 | 11.75 | 0.487 | 0.914 | -7.55 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 1D → 3 | 30.49 | 37.1% | 0.263 | 13.91 | 2.19 | 0.41 | 0.106 | -5.11 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 31.05 | 58.8% | 0.194 | 5.64 | 5.51 | 0.212 | 0.177 | -12.01 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần Momentum (/100) → 25 + Trọng số phần Trend (/100) → 19 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 120.77 | 51% | 0.769 | 8 | 15.1 | 0.603 | 0.965 | -11.16 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Cộng thêm ngưỡng điểm khung 1D → 5 + Trọng số phần R:R (/100) → 28 | 116.63 | 51.7% | 0.804 | 7.46 | 15.63 | 0.61 | 1.024 | -10.13 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Entry (/100) → 33 | 106.28 | 45.4% | 0.652 | 10.74 | 9.9 | 0.57 | 0.726 | -5.8 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng điểm phân kỳ dương ẩn → 3 | 28.45 | 58% | 0.181 | 5.81 | 4.9 | 0.191 | 0.173 | -12.01 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 115.73 | 52.1% | 0.815 | 7.41 | 15.62 | 0.636 | 1.01 | -12.07 |  |

### Vòng 642 — ngẫu nhiên nhiều thông số · mốc: tổng 118.56R, win 53.8%, rủi ro tụt vốn 7.67R, lời÷rủi ro 15.46

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Momentum (/100) → 21 | 112 | 51.4% | 0.789 | 7.71 | 14.53 | 0.646 | 0.944 | -9.66 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: POC volume profile cố định → 0.813 | 118.11 | 53.4% | 0.809 | 7.33 | 16.11 | 0.635 | 1.003 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 3 | 118.04 | 51.7% | 0.803 | 7.76 | 15.21 | 0.674 | 0.941 | -9.66 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 108.29 | 51.7% | 0.727 | 8.02 | 13.5 | 0.626 | 0.827 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Khung lớn phải tăng (trend ≥) → 0.425 | 24.32 | 66.3% | 0.283 | 4.34 | 5.6 | 0.304 | 0.26 | -6.61 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 103.04 | 49.7% | 0.721 | 8.02 | 12.85 | 0.524 | 0.949 | -9.69 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Cộng thêm ngưỡng điểm khung 1W → 2 + R:R tối thiểu riêng khung 4H → 2 | 69.67 | 38.9% | 0.212 | 16.31 | 4.27 | 0.321 | 0.111 | -10.57 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 113.13 | 52.7% | 0.775 | 7.49 | 15.1 | 0.628 | 0.939 | -10 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Lệnh chờ hết hạn sau (nến) → 6 | 69.66 | 44.3% | 0.467 | 10.44 | 6.67 | 0.448 | 0.488 | -4.7 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Biên mây Ichimoku → 1.35 + Cộng điểm phân kỳ dương ẩn → 3 | 112.84 | 51.7% | 0.768 | 8.09 | 13.95 | 0.566 | 0.995 | -8.64 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 102.85 | 50.3% | 0.719 | 8.35 | 12.32 | 0.565 | 0.876 | -10.73 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib sóng 4 → 1.56 | 101.1 | 52% | 0.674 | 8.47 | 11.94 | 0.598 | 0.763 | -9.46 |  |

### Vòng 641 — ngẫu nhiên nhiều thông số · mốc: tổng 118.56R, win 53.8%, rủi ro tụt vốn 7.57R, lời÷rủi ro 15.66

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số TP tối đa → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Coin phải mạnh hơn BTC trong N ngày → 14 | 88.07 | 48.4% | 0.699 | 8.91 | 9.88 | 0.509 | 0.929 | -15.84 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 115.04 | 52.4% | 0.783 | 7.86 | 14.64 | 0.591 | 0.999 | -8.34 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 133.67 | 37.9% | 0.474 | 18.92 | 7.07 | 0.26 | 0.694 | -13.37 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Mức RSI 30/70 → 0.875 | 114.88 | 50.6% | 0.727 | 8.58 | 13.39 | 0.595 | 0.881 | -11.06 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Xác nhận khung nhỏ (A2) → W + Khung lớn phải tăng (trend ≥) → 0.425 | 104.71 | 38.4% | 0.411 | 16.21 | 6.46 | 0.381 | 0.438 | -2.35 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: HVN cố định → 0.563 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần SL (/100) → 7 | 109.7 | 50.7% | 0.762 | 7.81 | 14.05 | 0.597 | 0.941 | -13.89 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 84.59 | 49.3% | 0.587 | 8.92 | 9.48 | 0.499 | 0.689 | -11.31 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 85.74 | 50.9% | 0.739 | 7.9 | 10.85 | 0.533 | 0.976 | -16.13 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 4H → -1 | 116.29 | 37.6% | 0.451 | 18.71 | 6.22 | 0.285 | 0.607 | -15.66 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: HVN anchored → 0.188 + Coin phải mạnh hơn BTC trong N ngày → 14 | 86.93 | 50.8% | 0.737 | 8 | 10.87 | 0.559 | 0.94 | -16.13 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Trọng số phần Elliott (/100) → 6 | 112.51 | 52.8% | 0.781 | 7.56 | 14.88 | 0.621 | 0.951 | -9.66 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 86.02 | 50.4% | 0.723 | 8.22 | 10.46 | 0.552 | 0.915 | -17.52 |  |

### Vòng 640 — ngẫu nhiên nhiều thông số · mốc: tổng 118.56R, win 53.8%, rủi ro tụt vốn 7.6R, lời÷rủi ro 15.60

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: POC anchored → 4 | 119.53 | 51% | 0.781 | 7.85 | 15.23 | 0.682 | 0.869 | -8.88 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 112.39 | 50.3% | 0.754 | 7.93 | 14.17 | 0.497 | 1.029 | -9.52 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + SL tối đa (% Entry) → 0.425 | 116.9 | 52.7% | 0.79 | 7.6 | 15.38 | 0.624 | 0.974 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Mức MACD → 0.875 | 107.54 | 50.7% | 0.717 | 8.4 | 12.8 | 0.599 | 0.856 | -9.66 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Khung lớn phải tăng (trend ≥) → 0.375 | 82.61 | 45.7% | 0.651 | 9.82 | 8.41 | 0.504 | 0.791 | -9.19 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Cộng điểm phân kỳ dương ẩn → 3 + Cổng Dow → TẮT | 131.46 | 44.4% | 0.614 | 11.25 | 11.69 | 0.546 | 0.68 | -20.34 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Biên mây Ichimoku → 1.05 + Xác nhận khung nhỏ (A2) → W | 96.89 | 39.8% | 0.374 | 16.34 | 5.93 | 0.383 | 0.366 | -7.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Khung lớn phải tăng (trend ≥) → 0.375 + Cộng thêm ngưỡng điểm khung 1D → 3 + Lệnh chờ hết hạn sau (nến) → 8 | 111.89 | 50% | 0.708 | 8.44 | 13.26 | 0.551 | 0.882 | -11.25 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Trọng số phần Divergence (/100) → 9 + SL tối đa (% Entry) → 0.425 + Điểm vùng: POC volume profile cố định → 0.688 | 117.1 | 53.1% | 0.797 | 7.63 | 15.35 | 0.635 | 0.974 | -9.66 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Fib sóng 4 → 0.938 + % chốt ở TP1 → 0.307 | 116.89 | 53.5% | 0.812 | 7.48 | 15.63 | 0.622 | 1.024 | -9.67 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Mức MACD → 0.875 | 81.33 | 53.2% | 0.746 | 6.68 | 12.18 | 0.335 | 1.082 | -10.72 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: Biên mây Ichimoku → 1.35 | 113.06 | 51.4% | 0.774 | 7.84 | 14.42 | 0.596 | 0.974 | -8.64 |  |
