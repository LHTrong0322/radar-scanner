# Tối ưu tự động (chạy liên tục) — vòng 419

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 4698 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 160 | 46.3% | 90.4R | 0.565 | 5.74R | 9.99R | 9.05 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 144 | 52.8% | 113.57R | 0.789 | 6.15R | 7.45R | 15.24 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

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
| Bot thật | 160 | 46.3% | 90.4R | 9.99R | 9.05 | 32 | 12.5% | -14.03R |
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

### Vòng 419 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.45R, lời÷rủi ro 15.24

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 97.42 | 45.2% | 0.62 | 10.83 | 9 | 0.707 | 0.542 | -12.94 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL riêng khung 1W (ATR) → 0.3 | 97.45 | 48.1% | 0.733 | 8.59 | 11.34 | 0.485 | 0.977 | -10.7 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng thêm ngưỡng điểm khung 1D → 7 | 99.85 | 51.7% | 0.689 | 8.19 | 12.19 | 0.624 | 0.764 | -8.84 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: EMA 200 → 1 | 90.85 | 45.3% | 0.606 | 9.91 | 9.17 | 0.545 | 0.671 | -7.95 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 200 → 3 | 83.24 | 47.3% | 0.57 | 9.35 | 8.9 | 0.478 | 0.673 | -8.37 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Coin phải mạnh hơn BTC trong N ngày → 14 | 74.42 | 50% | 0.642 | 8.62 | 8.63 | 0.638 | 0.645 | -15.31 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Xác nhận khung nhỏ (A2) → W + Trọng số phần Divergence (/100) → 12 | 78.77 | 37.4% | 0.324 | 17.35 | 4.54 | 0.277 | 0.367 | -5.57 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Divergence (/100) → 9 | 97.45 | 48.1% | 0.733 | 8.59 | 11.34 | 0.485 | 0.977 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 99.83 | 46.8% | 0.648 | 9.05 | 11.03 | 0.517 | 0.81 | -10.69 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 30.61 | 55.9% | 0.173 | 7.94 | 3.86 | 0.256 | 0.103 | -10.14 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 107.78 | 51.7% | 0.723 | 8.02 | 13.44 | 0.589 | 0.872 | -4.48 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Biên mây Ichimoku → 1.35 + Đệm SL riêng khung 1D (ATR) → 0.3 + Ngưỡng điểm vào kèo → 77 | 38.94 | 37.1% | 0.371 | 14.76 | 2.64 | 0.554 | 0.169 | -3.86 |  |

### Vòng 418 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.56R, lời÷rủi ro 15.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: EMA 21 → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC anchored → 2 | 58.34 | 44% | 0.535 | 9.96 | 5.86 | 0.444 | 0.639 | -5.46 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức RSI 30/70 → 0.875 | 116.77 | 51.9% | 0.739 | 8.36 | 13.97 | 0.577 | 0.942 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Break mây Ichimoku → 1 | 112.35 | 42.7% | 0.374 | 11.32 | 9.92 | 0.376 | 0.373 | -13.48 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 108.81 | 43.5% | 0.469 | 12.02 | 9.05 | 0.476 | 0.461 | -9.71 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Entry (/100) → 33 | 110.92 | 51.7% | 0.776 | 7.61 | 14.58 | 0.618 | 0.959 | -9.66 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 1D (ATR) → 0.3 | 68.88 | 35.4% | 0.257 | 23.03 | 2.99 | 0.283 | 0.236 | -7.01 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Elliott (/100) → 10 | 96.15 | 46.9% | 0.593 | 10.15 | 9.47 | 0.411 | 0.816 | -9.96 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: HVN cố định → 0.563 | 113.57 | 52.8% | 0.789 | 7.56 | 15.02 | 0.624 | 0.983 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Mức MACD → 0.875 + Coin phải mạnh hơn BTC trong N ngày → 14 | 74.15 | 48.2% | 0.65 | 8.53 | 8.69 | 0.504 | 0.819 | -16.13 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 1D (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 39.22 | 58.1% | 0.228 | 6.94 | 5.65 | 0.318 | 0.155 | -9.04 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: POC volume profile cố định → 0.813 | 109.76 | 52.3% | 0.737 | 8.13 | 13.5 | 0.614 | 0.875 | -8.64 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: EMA 21 → 0.875 | 102.52 | 48.6% | 0.702 | 8.27 | 12.4 | 0.599 | 0.817 | -11.03 |  |

### Vòng 417 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.5R, lời÷rủi ro 15.14

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần SL (/100) → 9 | 83.78 | 47.1% | 0.616 | 9.28 | 9.03 | 0.36 | 0.851 | -10.82 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 70.03 | 46.1% | 0.547 | 9.51 | 7.36 | 0.44 | 0.665 | -4.82 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + SL tối đa (% Entry) → 0.35 | 108.79 | 51.4% | 0.766 | 7.78 | 13.98 | 0.592 | 0.967 | -9.48 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Biên mây Ichimoku → 1.05 | 96.05 | 51% | 0.653 | 8.36 | 11.49 | 0.579 | 0.735 | -10.13 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 109.77 | 52.1% | 0.752 | 7.76 | 14.15 | 0.602 | 0.929 | -10.63 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: HVN cố định → 0.563 | 147.38 | 37.8% | 0.506 | 19.04 | 7.74 | 0.332 | 0.679 | -13.35 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 107.38 | 47.3% | 0.726 | 9.07 | 11.84 | 0.523 | 0.978 | -10.5 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 102.41 | 51% | 0.706 | 7.92 | 12.93 | 0.585 | 0.84 | -10.49 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: BOS → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 98.18 | 50.7% | 0.672 | 8.35 | 11.76 | 0.614 | 0.742 | -8.84 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: BOS → 3 + Điểm vùng: Fib sóng 4 → 1.56 + Xác nhận khung nhỏ (A2) → W | 84.68 | 39% | 0.344 | 16.57 | 5.11 | 0.291 | 0.393 | -3.44 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 99.5 | 45.6% | 0.589 | 9.64 | 10.32 | 0.647 | 0.537 | -7.92 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 87.96 | 43.6% | 0.511 | 10.59 | 8.31 | 0.494 | 0.529 | -10.22 |  |

### Vòng 416 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.4R, lời÷rủi ro 15.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần Momentum (/100) → 21 | 77.42 | 48.3% | 0.645 | 8.58 | 9.02 | 0.481 | 0.84 | -16.13 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 82.69 | 44.7% | 0.551 | 10.73 | 7.71 | 0.428 | 0.704 | -9.47 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Ngưỡng điểm vào kèo → 74 | 110.83 | 51.4% | 0.759 | 7.89 | 14.05 | 0.602 | 0.94 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: EMA 21 → 0.875 | 108.58 | 49% | 0.701 | 9.24 | 11.75 | 0.527 | 0.906 | -7.08 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 97.54 | 47.8% | 0.728 | 8.67 | 11.25 | 0.438 | 1.009 | -10.7 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: BOS → 1 + Điểm vùng: EMA 50 → 0.75 | 108.91 | 52.1% | 0.756 | 7.95 | 13.7 | 0.565 | 0.977 | -9.64 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 113.64 | 52.4% | 0.784 | 7.6 | 14.95 | 0.608 | 0.994 | -9.66 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + R:R tối thiểu riêng khung 1D → 2 | 86.68 | 41.5% | 0.492 | 10.79 | 8.03 | 0.496 | 0.489 | -4.82 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + R:R tối thiểu tới TP1 → 2.63 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 80.05 | 47.5% | 0.656 | 9.1 | 8.8 | 0.534 | 0.786 | -10.84 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: HVN cố định → 0.438 | 105.56 | 49.7% | 0.728 | 8.12 | 13 | 0.546 | 0.946 | -8.46 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 110.85 | 49.3% | 0.729 | 8.5 | 13.04 | 0.584 | 0.899 | -10.69 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: MACD cắt lên Signal → 0.438 | 105.34 | 50% | 0.675 | 9.11 | 11.56 | 0.48 | 0.915 | -7.08 |  |

### Vòng 415 — ngẫu nhiên nhiều thông số · mốc: tổng 116.78R, win 53.1%, rủi ro tụt vốn 7.17R, lời÷rủi ro 16.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Coin phải mạnh hơn BTC trong N ngày → 14 | 82.93 | 41.4% | 0.318 | 12.39 | 6.69 | 0.305 | 0.327 | -17.89 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm tối thiểu của vùng đặt SL → 4 | 43.09 | 32.4% | 0.31 | 20.13 | 2.14 | 0.037 | 0.579 | 4.89 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + % chốt ở TP1 → 0.307 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 91.95 | 50% | 0.793 | 7.88 | 11.67 | 0.511 | 1.105 | -11.92 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.438 + Coin phải mạnh hơn BTC trong N ngày → 14 | 73.89 | 42.6% | 0.524 | 13.21 | 5.59 | 0.544 | 0.505 | -17.12 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: POC volume profile cố định → 0.688 | 174.02 | 39.4% | 0.586 | 17.38 | 10.01 | 0.443 | 0.73 | -10.87 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 1W → 2 | 80.42 | 48.8% | 0.654 | 8.65 | 9.3 | 0.545 | 0.772 | -16.13 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Break mây Ichimoku → 1 | 98.06 | 48.6% | 0.672 | 8.85 | 11.08 | 0.443 | 0.92 | -9.87 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Break mây Ichimoku → 3 + R:R tối thiểu riêng khung 1W → 2 | 93.89 | 47.8% | 0.591 | 9.42 | 9.97 | 0.488 | 0.697 | -9.4 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Mức MACD → 0.875 | 108.59 | 51.7% | 0.759 | 7.71 | 14.08 | 0.588 | 0.953 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Coin phải mạnh hơn BTC trong N ngày → 14 + Cổng Dow → CHẶT | 65.19 | 51.5% | 0.672 | 7.08 | 9.21 | 0.317 | 1.05 | -13.51 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần SL (/100) → 7 + Trọng số phần Elliott (/100) → 6 | 112.38 | 51.4% | 0.77 | 7.46 | 15.06 | 0.574 | 1 | -9.48 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cộng thêm ngưỡng điểm khung 1D → 7 | 102.26 | 49.4% | 0.664 | 9.34 | 10.95 | 0.503 | 0.862 | -6.03 |  |

### Vòng 414 — ngẫu nhiên nhiều thông số · mốc: tổng 128.33R, win 53.4%, rủi ro tụt vốn 7.3R, lời÷rủi ro 17.58

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Trọng số phần Trend (/100) → 19 + Cộng thêm ngưỡng điểm khung 1W → -1 | 127.36 | 52.7% | 0.861 | 7.44 | 17.12 | 0.763 | 0.973 | -9.66 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 122.34 | 49.1% | 0.76 | 9.27 | 13.2 | 0.642 | 0.902 | -8.12 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 116.12 | 51.7% | 0.779 | 7.78 | 14.93 | 0.668 | 0.915 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 108.96 | 51% | 0.741 | 7.98 | 13.65 | 0.746 | 0.736 | -9.25 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: HVN cố định → 0.563 | 31.52 | 57.3% | 0.201 | 5.65 | 5.58 | 0.244 | 0.159 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + R:R tối thiểu riêng khung 4H → 2 | 131.38 | 41.8% | 0.404 | 12.15 | 10.81 | 0.418 | 0.392 | -12.85 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 112.4 | 48.1% | 0.721 | 9.13 | 12.31 | 0.701 | 0.74 | -9.99 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 | 99.57 | 51.4% | 0.673 | 8.14 | 12.23 | 0.606 | 0.751 | -9.43 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 113 | 49.7% | 0.729 | 9.14 | 12.36 | 0.622 | 0.862 | -7.08 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 70.41 | 46.9% | 0.542 | 9.63 | 7.31 | 0.433 | 0.665 | -4.82 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Fib sóng 4 → 1.56 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 115.54 | 52.7% | 0.781 | 7.7 | 15.01 | 0.586 | 1.016 | -11.06 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: HVN anchored → 0.188 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Elliott (/100) → 10 | 94.92 | 50% | 0.818 | 8 | 11.87 | 0.718 | 0.937 | -16.13 |  |

### Vòng 413 — ngẫu nhiên nhiều thông số · mốc: tổng 133.79R, win 53.7%, rủi ro tụt vốn 7.32R, lời÷rủi ro 18.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 120.93 | 51% | 0.78 | 8.65 | 13.98 | 0.641 | 0.949 | -8.48 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + R:R tối thiểu riêng khung 4H → 2 | 123.33 | 42.6% | 0.373 | 12.34 | 9.99 | 0.323 | 0.417 | -7.86 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 124.35 | 51% | 0.858 | 7.61 | 16.34 | 0.675 | 1.058 | -9.63 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Ngưỡng điểm vào kèo → 77 + Trọng số phần Momentum (/100) → 21 | 114.43 | 51.4% | 0.784 | 7.59 | 15.08 | 0.624 | 0.953 | -9.66 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + SL tối đa (% Entry) → 0.425 | 104.14 | 39.6% | 0.401 | 15.45 | 6.74 | 0.336 | 0.461 | -8.87 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Mức RSI 30/70 → 1.13 | 132.67 | 53.4% | 0.896 | 7.36 | 18.03 | 0.74 | 1.08 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Cổng Dow → TẮT + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 153.05 | 45.1% | 0.712 | 10.48 | 14.6 | 0.648 | 0.772 | -14.91 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trọng số phần Divergence (/100) → 9 + Trọng số phần SL (/100) → 7 + R:R tối thiểu tới TP1 → 2.38 | 99.37 | 46.7% | 0.602 | 9.03 | 11 | 0.538 | 0.664 | -11.94 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Số TP tối đa → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 + Cổng Dow → CHẶT | 62.82 | 49.5% | 0.635 | 8.08 | 7.77 | 0.314 | 0.948 | -9.2 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + % chốt ở TP1 → 0.287 | 133.49 | 53.7% | 0.908 | 7.1 | 18.8 | 0.773 | 1.06 | -9.64 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.05 | 116.71 | 50.3% | 0.794 | 8.1 | 14.41 | 0.702 | 0.901 | -11.78 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần SL (/100) → 7 | 121.74 | 52.7% | 0.823 | 7.54 | 16.15 | 0.608 | 1.068 | -8.34 |  |

### Vòng 412 — ngẫu nhiên nhiều thông số · mốc: tổng 122.24R, win 53.4%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.88

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu riêng khung 4H → 2 | 108.6 | 41.1% | 0.351 | 13.39 | 8.11 | 0.338 | 0.363 | -14.08 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Trọng số phần Momentum (/100) → 21 | 122.13 | 53.1% | 0.831 | 7.39 | 16.53 | 0.615 | 1.081 | -9.67 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: BOS → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 115.69 | 50% | 0.838 | 8.03 | 14.41 | 0.603 | 1.119 | -8.91 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + SL tối đa (% Entry) → 0.425 | 120.57 | 52.4% | 0.82 | 7.48 | 16.12 | 0.614 | 1.06 | -9.66 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Cộng thêm ngưỡng điểm khung 1W → 2 | 115.69 | 50% | 0.838 | 8.03 | 14.41 | 0.603 | 1.119 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: POC volume profile cố định → 0.688 | 117.03 | 51.7% | 0.796 | 7.64 | 15.32 | 0.564 | 1.066 | -9.48 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: MACD cắt lên Signal → 0.563 | 119.48 | 53.2% | 0.847 | 7.28 | 16.41 | 0.606 | 1.122 | -9.7 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần R:R (/100) → 28 + Điểm vùng: HVN anchored → 0.188 | 35.13 | 39.8% | 0.399 | 11.16 | 3.15 | 0.317 | 0.498 | -6.21 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Break mây Ichimoku → 1 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 107.09 | 49.7% | 0.739 | 8.13 | 13.17 | 0.577 | 0.906 | -9.73 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 63.31 | 44.1% | 0.621 | 9.79 | 6.47 | 0.332 | 0.972 | -8.41 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Cộng thêm ngưỡng điểm khung 1D → 4 + % chốt ở TP1 → 0.307 | 115.22 | 51.4% | 0.789 | 8.07 | 14.28 | 0.595 | 1.018 | -8.65 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Mức RSI 30/70 → 0.875 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 80.3 | 45.9% | 0.467 | 10.8 | 7.44 | 0.525 | 0.407 | -10.52 |  |

### Vòng 411 — ngẫu nhiên nhiều thông số · mốc: tổng 119.02R, win 53.1%, rủi ro tụt vốn 7.39R, lời÷rủi ro 16.11

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: HVN anchored → 0.313 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 120.68 | 48.7% | 0.774 | 8.38 | 14.4 | 0.7 | 0.857 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Fib sóng 4 → 0.938 | 107.58 | 49.4% | 0.672 | 9.03 | 11.91 | 0.499 | 0.869 | -9.4 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần Divergence (/100) → 12 | 114.54 | 50.7% | 0.785 | 7.72 | 14.84 | 0.503 | 1.098 | -9.52 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: HVN cố định → 0.563 + Đệm SL riêng khung 4H (ATR) → 0.3 | 157.95 | 38.6% | 0.539 | 18.69 | 8.45 | 0.38 | 0.704 | -10.64 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Coin phải mạnh hơn BTC trong N ngày → 14 + Cộng thêm ngưỡng điểm khung 1D → 7 | 63.26 | 46.9% | 0.56 | 9.73 | 6.5 | 0.475 | 0.656 | -13.23 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + R:R tối thiểu riêng khung 1D → 2 | 110.63 | 47.1% | 0.651 | 8.88 | 12.46 | 0.621 | 0.679 | -7.92 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 74.04 | 45.8% | 0.692 | 9.07 | 8.16 | 0.484 | 0.939 | -6.48 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + R:R tối thiểu riêng khung 1W → 2 | 110.67 | 51.7% | 0.743 | 7.56 | 14.64 | 0.618 | 0.872 | -10.69 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Xác nhận khung nhỏ (A2) → W + Cộng điểm phân kỳ dương ẩn → 3.5 | 86.5 | 39.1% | 0.338 | 16.8 | 5.15 | 0.329 | 0.347 | -6.5 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 1 | 73.39 | 35.2% | 0.319 | 21.4 | 3.43 | 0.159 | 0.513 | -1.26 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + % chốt ở TP1 → 0.307 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 99.79 | 50.7% | 0.683 | 8.03 | 12.43 | 0.61 | 0.768 | -9.26 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 109.67 | 49.7% | 0.756 | 8.38 | 13.09 | 0.487 | 1.045 | -10.51 |  |

### Vòng 410 — ngẫu nhiên nhiều thông số · mốc: tổng 122.24R, win 53.4%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.91

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 | 113.4 | 37.9% | 0.387 | 19.11 | 5.93 | 0.449 | 0.33 | -27.74 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Cộng điểm phân kỳ dương ẩn → 3.5 | 122.13 | 53.1% | 0.831 | 7.39 | 16.53 | 0.615 | 1.081 | -9.67 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: BOS → 1 + Số TP tối đa → 2 | 119.2 | 51.7% | 0.822 | 7.45 | 16 | 0.6 | 1.073 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Đệm SL riêng khung 1D (ATR) → 0.3 | 120.45 | 48% | 0.704 | 10.04 | 12 | 0.735 | 0.673 | -0.97 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 | 89.11 | 52% | 0.724 | 7.9 | 11.28 | 0.53 | 0.95 | -17.09 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 + R:R tối thiểu tới TP1 → 2.63 | 98.26 | 51.3% | 0.826 | 7.77 | 12.65 | 0.521 | 1.168 | -10.45 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 | 118.63 | 53.3% | 0.791 | 7.88 | 15.05 | 0.624 | 0.971 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: EMA 50 → 1.13 + % chốt ở TP1 → 0.287 | 115.24 | 51.4% | 0.789 | 7.55 | 15.26 | 0.58 | 1.043 | -8.62 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Số TP tối đa → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 82.28 | 45.7% | 0.502 | 10.11 | 8.14 | 0.369 | 0.631 | -9.82 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cổng Dow → TẮT | 52.97 | 37.6% | 0.212 | 17.57 | 3.01 | 0.293 | 0.129 | -14.79 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Xác nhận khung nhỏ (A2) → W | 95.48 | 38% | 0.359 | 16.77 | 5.69 | 0.334 | 0.383 | -3.92 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 68.25 | 40% | 0.414 | 12.85 | 5.31 | 0.445 | 0.379 | -9.39 |  |
