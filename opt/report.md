# Tối ưu tự động (chạy liên tục) — vòng 369

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 4098 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 47.2% | 102.69R | 0.638 | 5.74R | 9.57R | 10.73 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 146 | 53.4% | 128.33R | 0.879 | 6.15R | 7.32R | 17.53 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 29 | 51.7% | 30.98R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 107 | 54.2% | 89.62R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 47.2% | 102.69R | 9.57R | 10.73 | 32 | 12.5% | -14.03R |
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

### Vòng 369 — ngẫu nhiên nhiều thông số · mốc: tổng 128.33R, win 53.4%, rủi ro tụt vốn 7.32R, lời÷rủi ro 17.53

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: MACD cắt lên Signal → 0.563 | 124.69 | 52.7% | 0.842 | 7.67 | 16.26 | 0.74 | 0.963 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Biên mây Ichimoku → 1.05 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 72.79 | 46.7% | 0.68 | 8.99 | 8.1 | 0.62 | 0.751 | -7.31 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: POC anchored → 4 + Xác nhận khung nhỏ (A2) → W | 103.21 | 39.3% | 0.375 | 16.89 | 6.11 | 0.31 | 0.434 | -0.64 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + % chốt ở TP1 → 0.307 | 127.35 | 53.1% | 0.866 | 7.58 | 16.8 | 0.741 | 1.016 | -9.67 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: EMA 50 → 0.75 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 124.65 | 42.3% | 0.391 | 12.75 | 9.78 | 0.413 | 0.372 | -9.79 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: EMA 200 → 1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.73 | 59.4% | 0.187 | 5.79 | 5.48 | 0.233 | 0.136 | -9.14 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Entry (/100) → 28 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần R:R (/100) → 28 | 188.5 | 39.5% | 0.626 | 17.57 | 10.73 | 0.539 | 0.719 | -14.1 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 68.39 | 46.2% | 0.645 | 9.09 | 7.52 | 0.415 | 0.934 | -6.59 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần Entry (/100) → 33 | 84.41 | 46.6% | 0.518 | 10.31 | 8.19 | 0.413 | 0.621 | -9.82 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 183.87 | 39.7% | 0.619 | 17.65 | 10.42 | 0.517 | 0.725 | -14.46 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: MACD cắt lên Signal → 0.563 | 97.68 | 47.2% | 0.607 | 8.55 | 11.42 | 0.547 | 0.667 | -10.97 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 65.07 | 44.2% | 0.576 | 10.11 | 6.44 | 0.384 | 0.818 | -6.26 |  |

### Vòng 368 — ngẫu nhiên nhiều thông số · mốc: tổng 128.33R, win 53.4%, rủi ro tụt vốn 7.27R, lời÷rủi ro 17.65

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 100.54 | 49.7% | 0.684 | 8.52 | 11.8 | 0.655 | 0.713 | -9.18 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 28.35 | 57.7% | 0.182 | 6.17 | 4.59 | 0.251 | 0.117 | -10.69 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 178.59 | 38.3% | 0.595 | 18.44 | 9.68 | 0.496 | 0.697 | -11.74 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Đệm SL riêng khung 1W (ATR) → 0.3 | 101.23 | 48.9% | 0.761 | 8.16 | 12.41 | 0.501 | 1.01 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: BOS → 1 + Điểm vùng: HVN cố định → 0.438 | 108.57 | 49.7% | 0.674 | 8.76 | 12.39 | 0.562 | 0.807 | -9.4 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: EMA 21 → 1.13 | 101.97 | 45.3% | 0.593 | 9.54 | 10.69 | 0.577 | 0.606 | -8.26 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 3 | 127.97 | 35.1% | 0.409 | 22.39 | 5.72 | 0.239 | 0.577 | -12.9 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: POC anchored → 4 | 107.02 | 51.1% | 0.77 | 7.86 | 13.62 | 0.667 | 0.887 | -2.32 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: POC volume profile cố định → 0.688 | 125.56 | 52.4% | 0.854 | 7.76 | 16.18 | 0.74 | 0.986 | -9.22 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: POC volume profile cố định → 0.813 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 127.25 | 50.3% | 0.821 | 8.08 | 15.75 | 0.791 | 0.856 | -9.22 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần R:R (/100) → 33 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng điểm phân kỳ dương ẩn → 3.5 | 116.94 | 47.2% | 0.726 | 8.77 | 13.33 | 0.704 | 0.752 | -11.6 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần Entry (/100) → 33 | 85.49 | 47.5% | 0.712 | 9.33 | 9.16 | 0.616 | 0.838 | -6.48 |  |

### Vòng 367 — ngẫu nhiên nhiều thông số · mốc: tổng 124.88R, win 52.5%, rủi ro tụt vốn 7.65R, lời÷rủi ro 16.32

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cổng Dow → CHẶT + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Mức RSI 30/70 → 1.13 | 38.34 | 43.9% | 0.468 | 10.09 | 3.8 | 0.122 | 0.797 | -4.67 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 | 113.64 | 50.7% | 0.812 | 7.88 | 14.42 | 0.767 | 0.859 | -10.73 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 193.41 | 39.8% | 0.681 | 16.9 | 11.44 | 0.564 | 0.802 | -11.04 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 21 → 1.13 | 72.29 | 50.9% | 0.634 | 7.46 | 9.69 | 0.413 | 0.801 | -12.12 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 117.07 | 47.4% | 0.855 | 8.65 | 13.53 | 0.687 | 1.051 | -9.15 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: EMA 200 → 1 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 171.06 | 39.7% | 0.586 | 17.81 | 9.6 | 0.388 | 0.792 | 1.41 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Ngưỡng điểm vào kèo → 74 + Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 124.16 | 51.7% | 0.868 | 7.48 | 16.6 | 0.751 | 1.001 | -10.01 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + SL tối đa (% Entry) → 0.35 + Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 108.99 | 50% | 0.813 | 8.21 | 13.28 | 0.645 | 1.003 | -9.49 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 21.34 | 55.5% | 0.167 | 6.15 | 3.47 | 0.237 | 0.102 | -5.5 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Lệnh chờ hết hạn sau (nến) → 8 + R:R tối thiểu riêng khung 1W → 2 | 78.86 | 47.4% | 0.584 | 9.26 | 8.52 | 0.496 | 0.682 | -5.68 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: BOS → 1 | 100.43 | 51.3% | 0.889 | 7.5 | 13.39 | 0.816 | 0.974 | -15.12 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần Trend (/100) → 12 + Trọng số phần Momentum (/100) → 21 + Lệnh chờ hết hạn sau (nến) → 8 | 122.23 | 48.8% | 0.728 | 9.65 | 12.67 | 0.633 | 0.845 | -10.24 |  |

### Vòng 366 — ngẫu nhiên nhiều thông số · mốc: tổng 128.33R, win 53.4%, rủi ro tụt vốn 7.36R, lời÷rủi ro 17.44

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + R:R tối thiểu riêng khung 4H → 2 | 109.49 | 39.8% | 0.335 | 14.57 | 7.51 | 0.426 | 0.262 | -7.88 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 111.32 | 47.7% | 0.728 | 8.92 | 12.48 | 0.663 | 0.793 | -11.01 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: POC volume profile cố định → 0.813 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 31.99 | 37.3% | 0.254 | 15.55 | 2.06 | 0.151 | 0.357 | -9.07 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 118.1 | 51% | 0.793 | 8.03 | 14.71 | 0.687 | 0.925 | -9.66 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 101.36 | 51.4% | 0.694 | 8.19 | 12.38 | 0.602 | 0.8 | -8.84 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: POC anchored → 2 + Điểm vùng: EMA 21 → 0.875 | 106.18 | 48% | 0.708 | 9 | 11.8 | 0.671 | 0.744 | -8.63 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 123.98 | 48.1% | 0.775 | 8.55 | 14.5 | 0.772 | 0.778 | -11.28 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + R:R tối thiểu riêng khung 4H → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 124.84 | 41.1% | 0.383 | 12.51 | 9.98 | 0.415 | 0.356 | -10.66 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 128.14 | 53.1% | 0.872 | 7.39 | 17.34 | 0.751 | 1.016 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Lệnh chờ hết hạn sau (nến) → 6 | 109.76 | 51.5% | 0.819 | 7.64 | 14.37 | 0.746 | 0.907 | -8.27 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: POC anchored → 2 + Điểm vùng: HVN cố định → 0.563 | 111.92 | 49.7% | 0.741 | 8.68 | 12.89 | 0.669 | 0.82 | -8.63 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Break mây Ichimoku → 1 | 98.35 | 39.2% | 0.378 | 16.31 | 6.03 | 0.33 | 0.425 | -6.32 |  |

### Vòng 365 — ngẫu nhiên nhiều thông số · mốc: tổng 128.33R, win 53.4%, rủi ro tụt vốn 7.26R, lời÷rủi ro 17.68

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cổng Dow → TẮT + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 136.31 | 44% | 0.625 | 10.89 | 12.52 | 0.662 | 0.59 | -16.16 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Khung lớn phải tăng (trend ≥) → 0.375 | 102.16 | 47.6% | 0.623 | 9.65 | 10.59 | 0.517 | 0.74 | -8.09 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: EMA 50 → 1.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 116.53 | 48.4% | 0.762 | 8.67 | 13.44 | 0.745 | 0.783 | -9.22 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần SL (/100) → 7 | 128.33 | 53.4% | 0.879 | 7.26 | 17.68 | 0.763 | 1.016 | -9.66 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: HVN cố định → 0.438 | 120.71 | 49.7% | 0.759 | 8.55 | 14.12 | 0.712 | 0.816 | -10.24 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + R:R tối thiểu riêng khung 4H → 2 + Lệnh chờ hết hạn sau (nến) → 6 | 110.46 | 40.3% | 0.368 | 12.69 | 8.7 | 0.354 | 0.38 | -7.19 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Vùng RSI 45–55 → 0.875 + R:R tối thiểu riêng khung 4H → 2 | 131.97 | 41.7% | 0.411 | 12.76 | 10.34 | 0.463 | 0.366 | -10.13 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: POC anchored → 2 | 112.01 | 49% | 0.723 | 8.83 | 12.69 | 0.681 | 0.768 | -8.63 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Entry (/100) → 33 | 100.18 | 48.1% | 0.765 | 8.31 | 12.06 | 0.524 | 0.988 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC anchored → 4 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 68.92 | 43.4% | 0.61 | 10.33 | 6.67 | 0.406 | 0.841 | -4.12 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 + Cộng thêm ngưỡng điểm khung 4H → -1 | 117.71 | 50.6% | 0.745 | 8.97 | 13.12 | 0.572 | 0.958 | -7.08 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 113 | 52.5% | 0.801 | 7.55 | 14.97 | 0.584 | 1.055 | -11.09 |  |

### Vòng 364 — ngẫu nhiên nhiều thông số · mốc: tổng 128.33R, win 53.4%, rủi ro tụt vốn 7.34R, lời÷rủi ro 17.48

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 125.42 | 51.9% | 0.794 | 7.99 | 15.7 | 0.665 | 0.948 | -9.62 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.438 | 111.02 | 46% | 0.74 | 9.82 | 11.31 | 0.576 | 0.949 | -7.49 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần R:R (/100) → 33 + Điểm vùng: EMA 50 → 1.13 | 101.33 | 49.7% | 0.68 | 8.28 | 12.24 | 0.587 | 0.78 | -9.67 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + % chốt ở TP1 → 0.287 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 25.47 | 38.6% | 0.252 | 13.91 | 1.83 | 0.15 | 0.348 | -16.84 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Trọng số phần R:R (/100) → 33 | 128.33 | 53.4% | 0.879 | 7.34 | 17.48 | 0.763 | 1.016 | -9.66 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: POC volume profile cố định → 0.688 | 127.36 | 52.7% | 0.861 | 7.54 | 16.89 | 0.763 | 0.973 | -9.66 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Biên mây Ichimoku → 1.05 | 115.23 | 48.6% | 0.823 | 8.37 | 13.77 | 0.68 | 0.993 | -11.03 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Cộng điểm phân kỳ dương ẩn → 2.63 + R:R tối thiểu riêng khung 1D → 2 | 103.64 | 45.9% | 0.573 | 10.35 | 10.01 | 0.495 | 0.645 | -6.13 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Elliott (/100) → 10 | 126.18 | 52.1% | 0.876 | 7.46 | 16.91 | 0.79 | 0.973 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: MACD cắt lên Signal → 0.438 | 112.96 | 49.4% | 0.724 | 8.85 | 12.76 | 0.556 | 0.92 | -7.04 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Cộng điểm phân kỳ dương ẩn → 3.5 | 116.6 | 51.7% | 0.783 | 7.8 | 14.95 | 0.687 | 0.894 | -11.78 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Biên mây Ichimoku → 1.35 + R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 1D → 4 | 80.41 | 44.8% | 0.555 | 9.49 | 8.47 | 0.587 | 0.524 | -18.13 |  |

### Vòng 363 — ngẫu nhiên nhiều thông số · mốc: tổng 127.02R, win 53.1%, rủi ro tụt vốn 7.57R, lời÷rủi ro 16.78

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Số TP tối đa → 2 | 92.45 | 47.6% | 0.734 | 8.95 | 10.33 | 0.608 | 0.886 | -19.48 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần Elliott (/100) → 10 | 107.37 | 47.6% | 0.73 | 8.7 | 12.34 | 0.622 | 0.847 | -12.05 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 4H → -1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 102.57 | 33.5% | 0.435 | 21.55 | 4.76 | 0.381 | 0.493 | -15.11 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: HVN cố định → 0.563 + R:R tối thiểu tới TP1 → 2.38 | 111.49 | 46.5% | 0.648 | 8.96 | 12.44 | 0.684 | 0.61 | -12.85 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Fib sóng 4 → 0.938 + Cổng Dow → TẮT + Trọng số phần Trend (/100) → 12 | 144.98 | 42.6% | 0.671 | 11.35 | 12.77 | 0.695 | 0.649 | -19.62 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Cộng điểm phân kỳ dương ẩn → 3.5 + Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: EMA 21 → 1.13 | 120.83 | 51.7% | 0.822 | 7.62 | 15.86 | 0.738 | 0.919 | -12.32 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Break mây Ichimoku → 1 | 114.44 | 49.3% | 0.795 | 8.11 | 14.11 | 0.684 | 0.919 | -12.05 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Elliott (/100) → 10 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Số TP tối đa → 2 | 181.08 | 38.7% | 0.594 | 18.48 | 9.8 | 0.511 | 0.678 | -14.51 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Biên mây Ichimoku → 1.35 | 60.17 | 44% | 0.481 | 10.19 | 5.9 | 0.409 | 0.553 | -3.8 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: POC volume profile cố định → 0.813 | 127.06 | 53.1% | 0.876 | 7.57 | 16.78 | 0.764 | 1.003 | -10.97 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: POC anchored → 4 | 119.01 | 51.7% | 0.799 | 8.05 | 14.78 | 0.661 | 0.939 | -7.08 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Lệnh chờ hết hạn sau (nến) → 6 | 26.18 | 56.2% | 0.179 | 6.27 | 4.18 | 0.239 | 0.118 | -11.49 |  |

### Vòng 362 — ngẫu nhiên nhiều thông số · mốc: tổng 128.33R, win 53.4%, rủi ro tụt vốn 7.26R, lời÷rủi ro 17.68

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: EMA 200 → 1 + Điểm vùng: Mức RSI 30/70 → 0.875 | 121.52 | 51.2% | 0.723 | 8.79 | 13.82 | 0.637 | 0.838 | -4.64 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + R:R tối thiểu riêng khung 1W → 2 | 120.21 | 49.6% | 0.853 | 7.94 | 15.14 | 0.747 | 0.969 | -9.95 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Xác nhận khung nhỏ (A2) → W + R:R tối thiểu riêng khung 1D → 2 | 69.59 | 37.7% | 0.241 | 19.91 | 3.5 | 0.197 | 0.283 | -6.51 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.52 | 57.3% | 0.201 | 5.58 | 5.65 | 0.244 | 0.159 | -11.38 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần Elliott (/100) → 10 + R:R tối thiểu riêng khung 1D → 2 | 125.45 | 42.6% | 0.358 | 12.99 | 9.66 | 0.384 | 0.337 | -9.7 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Ngưỡng điểm vào kèo → 77 | 105.69 | 50% | 0.724 | 7.89 | 13.4 | 0.635 | 0.816 | -12.47 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: HVN anchored → 0.188 | 90.28 | 45.5% | 0.507 | 10.26 | 8.8 | 0.379 | 0.635 | -9.61 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Fib sóng 4 → 0.938 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.55 | 58.1% | 0.204 | 5.66 | 5.57 | 0.25 | 0.159 | -11.38 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + SL tối đa (% Entry) → 0.425 + R:R tối thiểu riêng khung 1W → 2 | 81.56 | 49.2% | 0.669 | 8.53 | 9.56 | 0.573 | 0.771 | -16.13 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 127.89 | 51.7% | 0.858 | 7.76 | 16.48 | 0.779 | 0.951 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Cộng điểm phân kỳ dương ẩn → 3.5 + R:R tối thiểu tới TP1 → 2.38 | 110.02 | 41.6% | 0.355 | 12.53 | 8.78 | 0.358 | 0.352 | -9.07 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: HVN cố định → 0.438 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 111.12 | 47.3% | 0.751 | 9.66 | 11.5 | 0.627 | 0.868 | -11.83 |  |

### Vòng 361 — ngẫu nhiên nhiều thông số · mốc: tổng 128.33R, win 53.4%, rủi ro tụt vốn 7.28R, lời÷rủi ro 17.63

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Đệm SL riêng khung 1D (ATR) → 0.3 + % chốt ở TP1 → 0.287 | 104.19 | 47.1% | 0.744 | 10.33 | 10.09 | 0.697 | 0.788 | -8.39 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 112.19 | 50.3% | 0.733 | 8.74 | 12.84 | 0.638 | 0.835 | -9.9 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm tối thiểu của vùng đặt SL → 2 + Khung lớn phải tăng (trend ≥) → 0.375 | 107.42 | 51% | 0.741 | 7.83 | 13.72 | 0.615 | 0.872 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + R:R tối thiểu riêng khung 1D → 2 | 106.12 | 46.8% | 0.621 | 9.07 | 11.7 | 0.597 | 0.643 | -7.92 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Mức MACD → 1.13 + Cộng thêm ngưỡng điểm khung 4H → 2 | 122.72 | 50.7% | 0.852 | 7.71 | 15.92 | 0.737 | 0.985 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + R:R tối thiểu tới TP1 → 2.38 + Trọng số phần R:R (/100) → 33 | 99.62 | 44.9% | 0.566 | 9.29 | 10.72 | 0.531 | 0.602 | -12 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Cổng Dow → TẮT + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 135.79 | 43.7% | 0.638 | 11.2 | 12.12 | 0.612 | 0.662 | -16.3 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 128.14 | 53.1% | 0.872 | 7.37 | 17.39 | 0.751 | 1.016 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức RSI 30/70 → 1.13 | 183.85 | 39.5% | 0.621 | 17.21 | 10.68 | 0.514 | 0.733 | -12.32 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 127.21 | 51.9% | 0.795 | 8.35 | 15.23 | 0.7 | 0.914 | -9.66 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: HVN cố định → 0.563 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 113.32 | 49.4% | 0.736 | 8.28 | 13.69 | 0.584 | 0.908 | -9.38 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần R:R (/100) → 33 | 35.47 | 39.8% | 0.403 | 10.69 | 3.32 | 0.297 | 0.537 | -8.58 |  |

### Vòng 360 — ngẫu nhiên nhiều thông số · mốc: tổng 128.33R, win 53.4%, rủi ro tụt vốn 7.27R, lời÷rủi ro 17.65

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần R:R (/100) → 33 | 125.78 | 52.7% | 0.85 | 7.43 | 16.93 | 0.728 | 0.997 | -9.66 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: BOS → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 108.9 | 48.4% | 0.851 | 8.09 | 13.46 | 0.77 | 0.955 | -7.52 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Momentum (/100) → 21 | 181.98 | 39.5% | 0.609 | 17.34 | 10.49 | 0.502 | 0.72 | -14.46 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Break mây Ichimoku → 1 + Đệm SL riêng khung 1D (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 80.44 | 45.8% | 0.567 | 11.06 | 7.27 | 0.634 | 0.501 | -11.99 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm vùng: POC anchored → 2 | 114.46 | 50.7% | 0.753 | 8.13 | 14.08 | 0.674 | 0.841 | -8.63 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Break mây Ichimoku → 1 | 116.3 | 50% | 0.775 | 8 | 14.54 | 0.683 | 0.877 | -11.02 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cổng Dow → TẮT | 146.97 | 44.7% | 0.684 | 11.07 | 13.28 | 0.632 | 0.733 | -17.15 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Đệm SL riêng khung 4H (ATR) → 0.3 | 179.05 | 38.8% | 0.599 | 17.85 | 10.03 | 0.503 | 0.702 | -14.46 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 50 → 0.75 + Trọng số phần Elliott (/100) → 6 | 121.55 | 49.4% | 0.779 | 8.37 | 14.52 | 0.717 | 0.851 | -10.24 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 160.49 | 37.8% | 0.537 | 19.13 | 8.39 | 0.442 | 0.637 | -15.49 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 117.23 | 50.7% | 0.771 | 8.04 | 14.58 | 0.683 | 0.875 | -11.54 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Khung lớn phải tăng (trend ≥) → 0.375 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Số TP tối đa → 2 | 72.65 | 45.5% | 0.542 | 9.79 | 7.42 | 0.513 | 0.571 | -7.2 |  |
