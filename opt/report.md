# Tối ưu tự động (chạy liên tục) — vòng 186

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 1916 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.9% | 101.67R | 0.628 | 5.74R | 9.59R | 10.60 | 34 | 11.8% | -16.07R | -0.473 | 16.07R |
| **Tốt nhất** | 145 | 52.4% | 126.54R | 0.873 | 5.15R | 7.47R | 16.94 | 31 | 12.9% | -14.96R | -0.483 | 14.96R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 53.6% | 33.37R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.93R | 2 | 0% | -2.04R |
| 4H | 106 | 52.8% | 86.23R | 22 | 18.2% | -7.25R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 138 (Ghép: Điểm vùng: HVN anchored → 0.125 + Khoảng cách tối thiểu TP1 (ATR) → 0.875).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.9% | 101.67R | 9.59R | 10.60 | 34 | 11.8% | -16.07R |
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

### Vòng 186 — ngẫu nhiên nhiều thông số · mốc: tổng 126.54R, win 52.4%, rủi ro tụt vốn 7.47R, lời÷rủi ro 16.94

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần R:R (/100) → 28 + Số TP tối đa → 2 | 118.99 | 49.4% | 0.753 | 8.32 | 14.3 | 0.682 | 0.836 | -16.55 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC volume profile cố định → 0.688 | 68.99 | 45.3% | 0.651 | 9.27 | 7.44 | 0.458 | 0.892 | -9.89 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Divergence (/100) → 12 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 101.27 | 43.5% | 0.572 | 11.61 | 8.72 | 0.576 | 0.569 | -15.16 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 103.47 | 38.9% | 0.353 | 16.9 | 6.12 | 0.401 | 0.302 | -10.71 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + R:R tối thiểu tới TP1 → 2.63 | 105.91 | 50% | 0.854 | 8.12 | 13.04 | 0.674 | 1.066 | -15.93 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 99.12 | 49.4% | 0.627 | 8.94 | 11.09 | 0.577 | 0.688 | -15.82 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 80.5 | 47.4% | 0.596 | 8.75 | 9.2 | 0.5 | 0.685 | -16.79 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Mức RSI 30/70 → 0.875 | 122.05 | 49% | 0.777 | 8.87 | 13.76 | 0.702 | 0.871 | -14.96 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 | 67.71 | 45.9% | 0.621 | 9.07 | 7.47 | 0.439 | 0.853 | -10.39 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần Elliott (/100) → 6 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cổng Dow → TẮT | 137.92 | 43.7% | 0.602 | 10.75 | 12.83 | 0.679 | 0.527 | -17.37 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: POC volume profile cố định → 0.813 + Cộng thêm ngưỡng điểm khung 1D → 4 + Đệm SL riêng khung 1W (ATR) → 0.3 | 95.18 | 46.9% | 0.647 | 10.1 | 9.42 | 0.495 | 0.802 | -9.78 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 107.61 | 48.3% | 0.753 | 8.6 | 12.51 | 0.609 | 0.915 | -16.24 |  |

### Vòng 185 — ngẫu nhiên nhiều thông số · mốc: tổng 126.54R, win 52.4%, rủi ro tụt vốn 7.48R, lời÷rủi ro 16.92

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Mức RSI 30/70 → 1.13 | 86.25 | 44.9% | 0.587 | 10.26 | 8.41 | 0.45 | 0.759 | -12.22 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 | 50.22 | 41.5% | 0.474 | 10.44 | 4.81 | 0.406 | 0.552 | -18.24 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Elliott (/100) → 10 + R:R tối thiểu tới TP1 → 2.38 + Đệm SL riêng khung 1D (ATR) → 0.3 | 81 | 43% | 0.435 | 12.99 | 6.24 | 0.516 | 0.37 | -15.38 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: BOS → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng thêm ngưỡng điểm khung 1D → 7 | 99.8 | 48.1% | 0.75 | 8.39 | 11.9 | 0.551 | 0.979 | -13.89 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: EMA 21 → 1.13 | 102.12 | 45.7% | 0.623 | 10.68 | 9.56 | 0.558 | 0.684 | -13.05 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 126.54 | 52.4% | 0.873 | 7.48 | 16.92 | 0.777 | 0.987 | -14.96 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Biên mây Ichimoku → 1.05 | 128.8 | 42% | 0.41 | 11.52 | 11.18 | 0.462 | 0.368 | -16.32 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: EMA 200 → 3 + Ngưỡng điểm vào kèo → 77 | 97.92 | 48.8% | 0.809 | 8.36 | 11.71 | 0.686 | 0.938 | -11.62 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 1W (ATR) → 0.3 + Ngưỡng điểm vào kèo → 77 | 96.36 | 46.1% | 0.683 | 9.3 | 10.36 | 0.517 | 0.852 | -14.52 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + R:R tối thiểu riêng khung 4H → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Cộng thêm ngưỡng điểm khung 1D → 4 | 76.16 | 40.9% | 0.294 | 13.43 | 5.67 | 0.259 | 0.323 | -17.53 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + R:R tối thiểu tới TP1 → 2.38 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 116.72 | 48% | 0.675 | 8.92 | 13.09 | 0.747 | 0.603 | -15.26 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Trọng số phần Trend (/100) → 19 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 87.07 | 44.9% | 0.592 | 10.1 | 8.62 | 0.442 | 0.787 | -12.22 |  |

### Vòng 184 — ngẫu nhiên nhiều thông số · mốc: tổng 126.54R, win 52.4%, rủi ro tụt vốn 7.46R, lời÷rủi ro 16.96

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 80.2 | 45.5% | 0.729 | 9.11 | 8.8 | 0.65 | 0.838 | -7.46 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Cổng Dow → CHẶT + R:R tối thiểu riêng khung 4H → 2 | 65.74 | 40.8% | 0.274 | 12.72 | 5.17 | 0.259 | 0.286 | -12.41 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Xác nhận khung nhỏ (A2) → W | 21.75 | 47.3% | 0.074 | 12.94 | 1.68 | 0.145 | 0 | -9.68 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 118.55 | 50.6% | 0.76 | 7.91 | 14.99 | 0.734 | 0.79 | -13.94 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 + Điểm vùng: EMA 50 → 1.13 + Trọng số phần Entry (/100) → 33 | 115.33 | 49% | 0.807 | 8.48 | 13.6 | 0.718 | 0.91 | -14.44 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng điểm phân kỳ dương ẩn → 2.63 + Trọng số phần R:R (/100) → 28 | 35.36 | 57.1% | 0.22 | 5.94 | 5.95 | 0.304 | 0.138 | -10.25 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Mức RSI 30/70 → 1.13 + R:R tối thiểu tới TP1 → 2.38 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 18.21 | 52.4% | 0.124 | 7.04 | 2.59 | 0.203 | 0.055 | -10.01 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Đệm SL riêng khung 1W (ATR) → 0.3 | 103.72 | 46.5% | 0.72 | 9.4 | 11.03 | 0.535 | 0.922 | -14.69 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 125.52 | 52.1% | 0.86 | 7.41 | 16.94 | 0.755 | 0.987 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Trend (/100) → 12 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 76.99 | 45% | 0.706 | 9.54 | 8.07 | 0.615 | 0.822 | -9.89 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: EMA 200 → 1 | 81.91 | 51.3% | 0.7 | 8.05 | 10.18 | 0.512 | 0.891 | -12.25 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 125.9 | 50.3% | 0.834 | 7.97 | 15.8 | 0.671 | 1.027 | -14.85 |  |

### Vòng 183 — ngẫu nhiên nhiều thông số · mốc: tổng 126.43R, win 52.1%, rủi ro tụt vốn 7.51R, lời÷rủi ro 16.83

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 123.13 | 51% | 0.826 | 7.56 | 16.29 | 0.75 | 0.918 | -15.93 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: POC anchored → 4 | 57.92 | 46.2% | 0.439 | 10.53 | 5.5 | 0.422 | 0.456 | -9.32 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Elliott (/100) → 10 | 117.74 | 50% | 0.818 | 7.81 | 15.08 | 0.752 | 0.891 | -15.43 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Lệnh chờ hết hạn sau (nến) → 8 | 82.01 | 50% | 0.661 | 7.72 | 10.62 | 0.364 | 0.931 | -17.61 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Mức RSI 30/70 → 1.13 + % chốt ở TP1 → 0.307 | 122.19 | 51.4% | 0.837 | 7.6 | 16.08 | 0.724 | 0.97 | -13.07 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: HVN cố định → 0.438 | 122.58 | 51.4% | 0.84 | 7.67 | 15.98 | 0.72 | 0.981 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần Momentum (/100) → 21 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần SL (/100) → 9 | 93.74 | 48.8% | 0.775 | 8.42 | 11.13 | 0.672 | 0.907 | -20.4 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: EMA 21 → 1.13 | 193.73 | 38.5% | 0.596 | 18.67 | 10.38 | 0.484 | 0.717 | -18.71 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 123.97 | 51.7% | 0.843 | 7.57 | 16.38 | 0.784 | 0.911 | -13.94 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: POC volume profile cố định → 0.813 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 1W → 2 | 30.18 | 57.2% | 0.182 | 6.37 | 4.74 | 0.252 | 0.108 | -8.57 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Ngưỡng điểm vào kèo → 74 | 132.93 | 42% | 0.41 | 12.27 | 10.83 | 0.452 | 0.375 | -10.66 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần SL (/100) → 7 | 23.86 | 38.6% | 0.287 | 11.85 | 2.01 | 0.173 | 0.437 | -6.21 |  |

### Vòng 182 — ngẫu nhiên nhiều thông số · mốc: tổng 126.43R, win 52.1%, rủi ro tụt vốn 7.5R, lời÷rủi ro 16.86

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 | 102.71 | 47.1% | 0.744 | 8.8 | 11.67 | 0.539 | 0.95 | -16 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: EMA 50 → 1.13 | 123.13 | 50% | 0.843 | 8.04 | 15.31 | 0.783 | 0.916 | -13.94 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm tối thiểu của vùng đặt SL → 4 | 122.46 | 50.7% | 0.839 | 7.65 | 16.01 | 0.784 | 0.902 | -14.82 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 + Trọng số phần Momentum (/100) → 25 + Điểm tối thiểu của vùng đặt SL → 2 | 117.41 | 50.3% | 0.799 | 8.16 | 14.39 | 0.719 | 0.889 | -14.44 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm tối thiểu của vùng đặt SL → 4 | 122.29 | 48.7% | 0.815 | 8.14 | 15.02 | 0.758 | 0.882 | -14.83 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần Momentum (/100) → 25 | 112.23 | 52.1% | 0.779 | 7.76 | 14.46 | 0.664 | 0.915 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần R:R (/100) → 33 | 125.21 | 51.4% | 0.846 | 7.62 | 16.43 | 0.743 | 0.971 | -15.22 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + % chốt ở TP1 → 0.307 | 126.4 | 52.1% | 0.866 | 7.5 | 16.85 | 0.777 | 0.97 | -14.97 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: BOS → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 65.89 | 47.1% | 0.471 | 9.61 | 6.86 | 0.346 | 0.585 | -20.09 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần SL (/100) → 9 | 126.75 | 51.7% | 0.862 | 7.42 | 17.08 | 0.79 | 0.949 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Mức MACD → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 108.96 | 46.2% | 0.698 | 9.59 | 11.36 | 0.602 | 0.824 | -12.66 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm tối thiểu của vùng đặt SL → 4 | 115.62 | 49.7% | 0.756 | 8.2 | 14.1 | 0.778 | 0.731 | -12.77 |  |

### Vòng 181 — ngẫu nhiên nhiều thông số · mốc: tổng 126.43R, win 52.1%, rủi ro tụt vốn 7.54R, lời÷rủi ro 16.77

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Mức RSI 30/70 → 0.875 | 114.72 | 47.1% | 0.675 | 10.04 | 11.43 | 0.667 | 0.682 | -13.57 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: EMA 200 → 1 | 109.92 | 41.3% | 0.341 | 14.38 | 7.64 | 0.432 | 0.254 | -13.64 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + R:R tối thiểu tới TP1 → 2.38 + Khung lớn phải tăng (trend ≥) → 0.375 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 104.35 | 45.7% | 0.603 | 8.91 | 11.71 | 0.652 | 0.557 | -16.86 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Trọng số phần Momentum (/100) → 21 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 | 109.93 | 50% | 0.753 | 7.89 | 13.93 | 0.74 | 0.767 | -16.22 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Số TP tối đa → 2 | 124.04 | 52.1% | 0.85 | 7.54 | 16.45 | 0.738 | 0.981 | -14.96 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: EMA 200 → 3 + Cộng thêm ngưỡng điểm khung 1D → 7 | 115.39 | 49.3% | 0.79 | 8.09 | 14.26 | 0.662 | 0.934 | -13.88 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 105.69 | 48.7% | 0.705 | 9.05 | 11.68 | 0.577 | 0.855 | -12.38 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 113.4 | 49.7% | 0.751 | 8.52 | 13.31 | 0.766 | 0.733 | -14.72 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Lệnh chờ hết hạn sau (nến) → 8 + Xác nhận khung nhỏ (A2) → W | 26.59 | 48.6% | 0.085 | 12.23 | 2.17 | 0.137 | 0.034 | -6.97 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Coin phải mạnh hơn BTC trong N ngày → 14 | 94.24 | 49.2% | 0.785 | 8.18 | 11.52 | 0.689 | 0.907 | -21.42 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 | 107.02 | 47.4% | 0.686 | 9.34 | 11.46 | 0.765 | 0.601 | -15.12 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Mức MACD → 0.875 | 114.77 | 49.7% | 0.74 | 8.22 | 13.96 | 0.749 | 0.731 | -13.94 |  |

### Vòng 180 — ngẫu nhiên nhiều thông số · mốc: tổng 121.8R, win 51.4%, rủi ro tụt vốn 7.63R, lời÷rủi ro 15.96

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 126.65 | 49.7% | 0.886 | 7.95 | 15.93 | 0.745 | 1.059 | -13.2 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Trend (/100) → 12 | 94.85 | 43.8% | 0.585 | 10.88 | 8.72 | 0.542 | 0.624 | -11.28 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Số TP tối đa → 2 + Cộng thêm ngưỡng điểm khung 1D → 7 | 107.16 | 48.7% | 0.678 | 9.47 | 11.32 | 0.472 | 0.925 | -9.12 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 | 123.92 | 51% | 0.855 | 7.57 | 16.37 | 0.774 | 0.946 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Mức MACD → 0.875 | 116.45 | 51.4% | 0.798 | 7.95 | 14.65 | 0.707 | 0.901 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: Break mây Ichimoku → 3 | 102.23 | 46.5% | 0.601 | 10.06 | 10.16 | 0.418 | 0.828 | -15.1 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu tới TP1 → 2.38 + Đệm SL riêng khung 4H (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 130.7 | 36.4% | 0.517 | 19.4 | 6.74 | 0.506 | 0.525 | -17.86 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + R:R tối thiểu riêng khung 1W → 2 + SL tối đa (% Entry) → 0.425 | 90.6 | 47.9% | 0.629 | 9.08 | 9.98 | 0.432 | 0.844 | -13.41 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 77.44 | 45.3% | 0.565 | 10.08 | 7.68 | 0.448 | 0.685 | -15.77 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: MACD cắt lên Signal → 0.438 | 175.24 | 37.7% | 0.555 | 19.21 | 9.12 | 0.432 | 0.682 | -15.98 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: EMA 50 → 0.75 + Cộng thêm ngưỡng điểm khung 1W → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 117.94 | 50.3% | 0.813 | 7.89 | 14.95 | 0.694 | 0.949 | -15.37 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần Momentum (/100) → 25 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Trend (/100) → 12 | 92.12 | 47.3% | 0.631 | 8.68 | 10.61 | 0.473 | 0.776 | -16.27 |  |

### Vòng 179 — ngẫu nhiên nhiều thông số · mốc: tổng 131.17R, win 52.4%, rủi ro tụt vốn 7.29R, lời÷rủi ro 17.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: EMA 200 → 3 | 127.17 | 51% | 0.853 | 7.61 | 16.71 | 0.712 | 1.005 | -15.61 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần R:R (/100) → 28 | 90.18 | 45.5% | 0.54 | 9.94 | 9.07 | 0.45 | 0.627 | -13.38 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Biên mây Ichimoku → 1.35 | 109.18 | 45.6% | 0.682 | 10.49 | 10.41 | 0.624 | 0.737 | -14.75 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Trọng số phần Trend (/100) → 12 | 119.38 | 51.4% | 0.818 | 7.44 | 16.05 | 0.67 | 0.983 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 | 129.09 | 50.7% | 0.884 | 7.56 | 17.08 | 0.793 | 0.986 | -14.78 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Cộng điểm phân kỳ dương ẩn → 2.63 + Khung lớn phải tăng (trend ≥) → 0.375 + Đệm SL riêng khung 1D (ATR) → 0.3 | 110.18 | 45.1% | 0.672 | 10.46 | 10.53 | 0.625 | 0.716 | -14.58 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 126.23 | 51% | 0.847 | 7.7 | 16.39 | 0.716 | 0.999 | -14.96 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 119.7 | 50.3% | 0.782 | 7.97 | 15.02 | 0.537 | 1.065 | -14.85 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu riêng khung 1W → 2 | 105.04 | 47% | 0.625 | 8.84 | 11.88 | 0.561 | 0.685 | -12.77 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: BOS → 3 + Trọng số phần R:R (/100) → 28 | 130.92 | 50.7% | 0.873 | 7.59 | 17.25 | 0.78 | 0.977 | -13.94 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Trọng số phần Trend (/100) → 19 | 131.03 | 51.4% | 0.885 | 7.52 | 17.42 | 0.75 | 1.045 | -14.96 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + R:R tối thiểu riêng khung 1W → 2 | 108.02 | 49% | 0.725 | 7.88 | 13.71 | 0.629 | 0.822 | -15.12 |  |

### Vòng 178 — ngẫu nhiên nhiều thông số · mốc: tổng 131.17R, win 52.4%, rủi ro tụt vốn 7.31R, lời÷rủi ro 17.94

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 96.93 | 48.4% | 0.794 | 8.45 | 11.47 | 0.665 | 0.952 | -21.43 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: POC volume profile cố định → 0.813 | 111.03 | 50.3% | 0.766 | 7.99 | 13.9 | 0.756 | 0.776 | -14.91 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 97.95 | 46.4% | 0.59 | 9.62 | 10.18 | 0.542 | 0.633 | -13.65 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 121.77 | 52.1% | 0.834 | 7.77 | 15.67 | 0.79 | 0.883 | -14.14 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng thêm ngưỡng điểm khung 1W → 2 + R:R tối thiểu riêng khung 1W → 2 | 95.04 | 47.5% | 0.684 | 8.12 | 11.7 | 0.483 | 0.876 | -18.22 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Điểm vùng: Break mây Ichimoku → 1 | 120.53 | 48.7% | 0.804 | 8.42 | 14.31 | 0.73 | 0.883 | -16.07 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Đệm SL riêng khung 1W (ATR) → 0.3 | 98.3 | 44.9% | 0.669 | 9.83 | 10 | 0.708 | 0.631 | -15.75 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 83.09 | 45.9% | 0.749 | 8.93 | 9.3 | 0.616 | 0.911 | -9.89 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: HVN cố định → 0.438 + Lệnh chờ hết hạn sau (nến) → 6 + Đệm SL riêng khung 4H (ATR) → 0.3 | 135.63 | 36% | 0.479 | 20.01 | 6.78 | 0.43 | 0.529 | -17.29 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 21 → 1.13 | 130.97 | 51% | 0.867 | 7.42 | 17.65 | 0.737 | 1.019 | -13.94 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: BOS → 3 + Điểm vùng: Break mây Ichimoku → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 | 112.09 | 47.3% | 0.671 | 10.05 | 11.15 | 0.628 | 0.716 | -15.01 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Điểm vùng: Break mây Ichimoku → 3 | 114.8 | 49.4% | 0.717 | 8.64 | 13.29 | 0.594 | 0.861 | -14.7 |  |

### Vòng 177 — ngẫu nhiên nhiều thông số · mốc: tổng 131.17R, win 52.4%, rủi ro tụt vốn 7.29R, lời÷rủi ro 17.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Trọng số phần Divergence (/100) → 12 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: HVN anchored → 0.188 | 69.01 | 44.5% | 0.539 | 10.51 | 6.57 | 0.426 | 0.668 | -7.17 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cổng Dow → CHẶT | 53.95 | 47.6% | 0.658 | 8.33 | 6.48 | 0.238 | 1.078 | -10.28 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Cộng thêm ngưỡng điểm khung 4H → 2 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 105.73 | 46.1% | 0.633 | 9.03 | 11.71 | 0.541 | 0.725 | -16.27 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: POC anchored → 2 | 119.06 | 49% | 0.758 | 8.17 | 14.57 | 0.675 | 0.85 | -15.08 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần SL (/100) → 9 | 131.48 | 52% | 0.888 | 7.31 | 17.99 | 0.79 | 1.004 | -13.94 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 22.64 | 53.9% | 0.161 | 6.82 | 3.32 | 0.251 | 0.067 | -4.87 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + R:R tối thiểu riêng khung 1W → 2 | 108.29 | 50% | 0.752 | 7.76 | 13.95 | 0.623 | 0.877 | -15.99 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 104.36 | 49% | 0.682 | 9.13 | 11.43 | 0.492 | 0.891 | -12.38 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: HVN cố định → 0.438 | 121.34 | 48.2% | 0.861 | 8.52 | 14.24 | 0.69 | 1.066 | -13.2 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 87.04 | 45.5% | 0.528 | 9.94 | 8.76 | 0.41 | 0.641 | -13.38 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: EMA 50 → 0.75 | 129.41 | 51.7% | 0.857 | 7.31 | 17.7 | 0.723 | 1.008 | -14.96 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Đệm SL riêng khung 1D (ATR) → 0.3 | 113.44 | 46% | 0.696 | 10.36 | 10.95 | 0.684 | 0.707 | -14.58 |  |
