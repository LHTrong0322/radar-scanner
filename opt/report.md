# Tối ưu tự động (chạy liên tục) — vòng 1428

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 16756 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 102.16R | 0.615 | 6.7R | 9.65R | 10.59 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 143 | 52.4% | 119.74R | 0.837 | 5.15R | 7.59R | 15.78 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 26 | 50% | 20.05R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 106 | 53.8% | 92.72R | 19 | 21.1% | -4.19R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 102.16R | 9.65R | 10.59 | 30 | 13.3% | -11.98R |
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

## Các thay đổi đã nhận (mới nhất trước)

| Vòng | Thông số | Từ → Thành | Tổng R | Tỷ lệ thắng | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro |
|---|---|---|---|---|---|---|
| 1271 | Cộng thêm ngưỡng điểm khung 1D | 4 → 5 | 120.65R | 52.1% | 7.64R | 15.79 |
| 1271 | Điểm vùng: Fib 0.5 / 0.382 sóng 2 | 4 → 3 | 120.65R | 52.1% | 7.64R | 15.79 |
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

## 10 vòng gần nhất

### Vòng 1428 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.59R, lời÷rủi ro 15.78

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần Momentum (/100) → 21 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 72.51 | 45.9% | 0.653 | 9.21 | 7.87 | 0.435 | 0.91 | -5.79 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cộng thêm ngưỡng điểm khung 1W → 2 + Lệnh chờ hết hạn sau (nến) → 6 | 99.51 | 48.2% | 0.716 | 8.56 | 11.63 | 0.504 | 0.957 | -12.11 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Trọng số phần Entry (/100) → 28 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Divergence (/100) → 9 | 174.34 | 38.9% | 0.589 | 17.53 | 9.95 | 0.495 | 0.687 | -8.55 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Break mây Ichimoku → 3 | 154.32 | 34.7% | 0.491 | 20.74 | 7.44 | 0.34 | 0.632 | -7.43 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Lệnh chờ hết hạn sau (nến) → 8 + Điểm tối thiểu của vùng đặt SL → 4 + R:R tối thiểu riêng khung 4H → 2 | 89.85 | 35.2% | 0.19 | 23.47 | 3.83 | 0.262 | 0.131 | -3.46 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Fib sóng 4 → 1.56 + Lệnh chờ hết hạn sau (nến) → 6 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 107.42 | 47.9% | 0.746 | 8.51 | 12.62 | 0.74 | 0.753 | -12.38 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Điểm vùng: HVN anchored → 0.188 + R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 | 106.29 | 46.2% | 0.629 | 9.09 | 11.69 | 0.638 | 0.621 | -8.93 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng thêm ngưỡng điểm khung 1W → 2 | 98.23 | 47.8% | 0.722 | 8.46 | 11.61 | 0.486 | 0.972 | -15.4 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Fib sóng 4 → 0.938 | 101.56 | 49% | 0.691 | 8.61 | 11.8 | 0.531 | 0.853 | -12.16 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN anchored → 0.188 + Coin phải mạnh hơn BTC trong N ngày → 14 | 87.73 | 49.6% | 0.75 | 7.95 | 11.04 | 0.552 | 0.988 | -18.62 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: EMA 200 → 1 | 103.39 | 46.8% | 0.654 | 10.03 | 10.31 | 0.461 | 0.898 | -9.57 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + SL tối đa (% Entry) → 0.425 + Điểm vùng: BOS → 0 | 115.77 | 50.3% | 0.798 | 7.69 | 15.05 | 0.66 | 0.951 | -12.16 |  |

### Vòng 1427 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.54R, lời÷rủi ro 15.88

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 111.77 | 50.3% | 0.782 | 8 | 13.97 | 0.593 | 0.989 | -13.13 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 126.7 | 45% | 0.548 | 10.77 | 11.76 | 0.576 | 0.522 | -15.31 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 | 103.93 | 44.4% | 0.688 | 9.94 | 10.46 | 0.505 | 0.874 | -12.22 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: EMA 21 → 1.13 | 114.11 | 51% | 0.787 | 7.5 | 15.21 | 0.638 | 0.956 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Biên mây Ichimoku → 1.05 | 109.52 | 51.4% | 0.761 | 7.74 | 14.15 | 0.614 | 0.92 | -12.99 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 115.31 | 51.1% | 0.818 | 7.36 | 15.67 | 0.609 | 1.055 | -12.16 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Số TP tối đa → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 98.4 | 48.5% | 0.724 | 8.22 | 11.97 | 0.479 | 0.991 | -15 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: BOS → 0 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: POC volume profile cố định → 0.813 | 97.36 | 48.3% | 0.645 | 9.25 | 10.53 | 0.482 | 0.833 | -9.57 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: BOS → 0 | 119.74 | 52.4% | 0.837 | 7.54 | 15.88 | 0.656 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần SL (/100) → 9 + Cổng Dow → CHẶT | 29.18 | 61.2% | 0.226 | 4.76 | 6.13 | 0.221 | 0.23 | -5.62 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Cổng Dow → CHẶT | 87.2 | 52.7% | 0.779 | 6.84 | 12.75 | 0.398 | 1.109 | -14.25 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 97.01 | 45.2% | 0.584 | 10.56 | 9.19 | 0.482 | 0.697 | -9.52 |  |

### Vòng 1426 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.59R, lời÷rủi ro 15.78

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Cộng điểm phân kỳ dương ẩn → 3 + Xác nhận khung nhỏ (A2) → W | 98.93 | 38.6% | 0.397 | 15.28 | 6.47 | 0.342 | 0.447 | -4.29 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Đệm SL riêng khung 4H (ATR) → 0.3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 165.42 | 37.9% | 0.555 | 17.98 | 9.2 | 0.507 | 0.604 | -7.5 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: POC volume profile cố định → 0.688 + R:R tối thiểu tới TP1 → 2.63 | 83.59 | 43.5% | 0.674 | 11.34 | 7.37 | 0.668 | 0.679 | -19.07 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Xác nhận khung nhỏ (A2) → W | 113.18 | 39.2% | 0.422 | 15.45 | 7.33 | 0.39 | 0.453 | -4.58 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Coin phải mạnh hơn BTC trong N ngày → 14 | 77.13 | 47.9% | 0.659 | 8.22 | 9.38 | 0.602 | 0.723 | -19.85 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: POC volume profile cố định → 0.688 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Cổng Dow → CHẶT | 80.28 | 41.6% | 0.337 | 11.51 | 6.97 | 0.303 | 0.362 | -11.72 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + % chốt ở TP1 → 0.307 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 106.03 | 51.4% | 0.736 | 8.2 | 12.93 | 0.657 | 0.824 | -11.35 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Số TP tối đa → 3 + % chốt ở TP1 → 0.307 | 98.4 | 48.5% | 0.724 | 8.25 | 11.93 | 0.479 | 0.991 | -15 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trọng số phần Entry (/100) → 33 | 135.94 | 43.8% | 0.647 | 10.98 | 12.38 | 0.613 | 0.683 | -16.99 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Lệnh chờ hết hạn sau (nến) → 6 | 60.01 | 44.4% | 0.606 | 9.52 | 6.3 | 0.365 | 0.884 | -6.87 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 127.85 | 50% | 0.83 | 8.07 | 15.84 | 0.8 | 0.865 | -12.74 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: EMA 50 → 0.75 + Cổng Dow → CHẶT | 81.5 | 51.4% | 0.748 | 6.98 | 11.68 | 0.306 | 1.109 | -14.25 |  |

### Vòng 1425 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.48R, lời÷rủi ro 16.01

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 114.59 | 51.7% | 0.801 | 7.38 | 15.53 | 0.653 | 0.97 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Trọng số phần Elliott (/100) → 6 + Cộng thêm ngưỡng điểm khung 4H → -1 | 119.54 | 52.1% | 0.83 | 7.26 | 16.47 | 0.645 | 1.043 | -12.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 50 → 0.75 + Điểm tối thiểu của vùng đặt SL → 4 | 130.79 | 41.8% | 0.421 | 11.86 | 11.03 | 0.41 | 0.429 | -10 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Fib sóng 4 → 1.56 | 118.23 | 51.3% | 0.778 | 8.08 | 14.63 | 0.623 | 0.975 | -7.34 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 106.57 | 48% | 0.71 | 8.44 | 12.63 | 0.655 | 0.766 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần SL (/100) → 9 | 39.16 | 42% | 0.445 | 9.5 | 4.12 | 0.362 | 0.544 | -5.18 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + R:R tối thiểu riêng khung 1D → 2 | 127.55 | 42.2% | 0.523 | 11.14 | 11.45 | 0.607 | 0.441 | -13.02 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần Trend (/100) → 19 + Điểm tối thiểu của vùng đặt SL → 2 | 111.27 | 50.7% | 0.773 | 7.74 | 14.38 | 0.615 | 0.949 | -10.96 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 27.72 | 36.7% | 0.308 | 11.72 | 2.37 | 0.185 | 0.469 | -6.03 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm vào kèo → 74 | 180.76 | 38.1% | 0.579 | 18.56 | 9.74 | 0.605 | 0.556 | -9.28 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Break mây Ichimoku → 1 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: EMA 50 → 0.75 | 181.33 | 40% | 0.595 | 15.99 | 11.34 | 0.569 | 0.62 | -6.95 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Break mây Ichimoku → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 109.6 | 48.4% | 0.681 | 8.87 | 12.36 | 0.562 | 0.81 | -10.57 |  |

### Vòng 1424 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.49R, lời÷rủi ro 15.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 | 101.14 | 46.6% | 0.693 | 9.07 | 11.15 | 0.591 | 0.794 | -11.17 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 119.32 | 50.3% | 0.812 | 8.1 | 14.73 | 0.53 | 1.113 | -12.06 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm tối thiểu của vùng đặt SL → 4 | 40.18 | 42.5% | 0.462 | 9.06 | 4.43 | 0.362 | 0.585 | -5.18 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 104.96 | 50.7% | 0.709 | 8.28 | 12.68 | 0.658 | 0.765 | -11.92 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: EMA 50 → 1.13 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 112.97 | 49% | 0.758 | 8.27 | 13.66 | 0.579 | 0.966 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: BOS → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 114.3 | 51.4% | 0.794 | 7.32 | 15.61 | 0.649 | 0.956 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + R:R tối thiểu riêng khung 4H → 2 | 138.68 | 42.6% | 0.444 | 11.46 | 12.1 | 0.444 | 0.445 | -4.37 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 115.03 | 51.7% | 0.782 | 7.73 | 14.88 | 0.593 | 0.991 | -7.61 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Điểm vùng: Mức MACD → 0.875 | 112.33 | 51.4% | 0.791 | 7.83 | 14.35 | 0.617 | 0.986 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: HVN anchored → 0.188 | 117.05 | 52.8% | 0.824 | 7.31 | 16.01 | 0.694 | 0.97 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Ngưỡng điểm vào kèo → 77 | 110.64 | 50.7% | 0.779 | 7.72 | 14.33 | 0.623 | 0.949 | -9.63 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + R:R tối thiểu riêng khung 4H → 2 | 132.07 | 38.3% | 0.321 | 15.9 | 8.31 | 0.415 | 0.239 | -20.29 |  |

### Vòng 1423 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.56R, lời÷rủi ro 15.84

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 119.74 | 52.4% | 0.837 | 7.56 | 15.84 | 0.656 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần Entry (/100) → 28 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 107.24 | 49% | 0.73 | 8.24 | 13.01 | 0.574 | 0.896 | -12.72 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Fib sóng 4 → 1.56 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 72.41 | 44.3% | 0.553 | 10.39 | 6.97 | 0.449 | 0.672 | -9.81 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 116.51 | 49.3% | 0.82 | 8.12 | 14.35 | 0.63 | 1.053 | -9.88 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 103.5 | 51% | 0.714 | 8.16 | 12.68 | 0.658 | 0.777 | -11.92 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: EMA 50 → 1.13 + Đệm SL riêng khung 4H (ATR) → 0.3 | 153.04 | 37.4% | 0.535 | 18.96 | 8.07 | 0.416 | 0.649 | -7.76 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + R:R tối thiểu riêng khung 1W → 2 | 104.31 | 49.4% | 0.677 | 8.75 | 11.92 | 0.534 | 0.836 | -13.49 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Số TP tối đa → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 120.13 | 42.5% | 0.544 | 11.78 | 10.2 | 0.557 | 0.531 | -17.75 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Elliott (/100) → 6 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 115.87 | 50.3% | 0.748 | 8.07 | 14.36 | 0.595 | 0.919 | -13.75 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Số TP tối đa → 1 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm tối thiểu của vùng đặt SL → 2 | 37.79 | 42% | 0.429 | 9.58 | 3.94 | 0.362 | 0.51 | -7.13 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + R:R tối thiểu tới TP1 → 2.38 | 109.12 | 47.6% | 0.665 | 8.46 | 12.9 | 0.559 | 0.767 | -12.45 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần Divergence (/100) → 9 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 57.79 | 41.7% | 0.37 | 12.72 | 4.54 | 0.308 | 0.422 | -5.54 |  |

### Vòng 1422 — ngẫu nhiên nhiều thông số · mốc: tổng 119.72R, win 52.8%, rủi ro tụt vốn 7.44R, lời÷rủi ro 16.09

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm tối thiểu của vùng đặt SL → 2 | 117.53 | 52.8% | 0.816 | 7.42 | 15.84 | 0.664 | 0.981 | -9.84 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 87.57 | 46.5% | 0.608 | 9.68 | 9.05 | 0.391 | 0.864 | -13.46 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 117.79 | 49.1% | 0.741 | 8.61 | 13.68 | 0.592 | 0.892 | -6.61 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: POC volume profile cố định → 0.688 | 138.09 | 42.3% | 0.445 | 11.19 | 12.34 | 0.448 | 0.443 | -7.44 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: EMA 200 → 1 | 97.04 | 48.4% | 0.634 | 9.16 | 10.59 | 0.548 | 0.731 | -8.2 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: POC anchored → 2 | 90.78 | 45.7% | 0.648 | 9.42 | 9.64 | 0.47 | 0.832 | -11.44 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 101.79 | 51.8% | 0.722 | 7.8 | 13.05 | 0.642 | 0.807 | -11.34 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần Entry (/100) → 33 | 117.7 | 51.8% | 0.847 | 7.38 | 15.95 | 0.701 | 0.999 | -11.13 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 30.39 | 57.7% | 0.195 | 5.79 | 5.25 | 0.22 | 0.172 | -8.19 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Momentum (/100) → 25 | 120.46 | 53.2% | 0.854 | 7.26 | 16.59 | 0.703 | 1.021 | -12.16 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Vùng RSI 45–55 → 1.13 + % chốt ở TP1 → 0.287 + R:R tối thiểu tới TP1 → 2.63 | 91.21 | 48% | 0.73 | 8.88 | 10.27 | 0.507 | 0.971 | -12.85 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 75.05 | 45.3% | 0.708 | 8.85 | 8.48 | 0.567 | 0.872 | -3.37 |  |

### Vòng 1421 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: BOS → 2 | 121.94 | 53.5% | 0.859 | 7.06 | 17.27 | 0.694 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Trọng số phần Entry (/100) → 33 + Khung lớn phải tăng (trend ≥) → 0.375 | 113.01 | 50% | 0.796 | 7.88 | 14.34 | 0.621 | 0.98 | -11.13 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: HVN cố định → 0.563 + Đệm SL riêng khung 1W (ATR) → 0.3 | 19.06 | 40% | 0.254 | 12.09 | 1.58 | 0.201 | 0.318 | -6.23 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Biên mây Ichimoku → 1.35 | 113.65 | 50.7% | 0.778 | 7.48 | 15.19 | 0.648 | 0.92 | -12.54 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 93.34 | 42.7% | 0.622 | 10.76 | 8.67 | 0.465 | 0.789 | -8.86 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 102.99 | 46.9% | 0.701 | 9.04 | 11.39 | 0.512 | 0.887 | -14.01 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Trọng số phần Divergence (/100) → 9 | 121.94 | 53.5% | 0.859 | 7.06 | 17.27 | 0.694 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 97.45 | 48% | 0.658 | 9.25 | 10.54 | 0.456 | 0.896 | -10.58 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.313 | 106.4 | 42.4% | 0.557 | 12.56 | 8.47 | 0.537 | 0.574 | -8.34 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 120.47 | 52.8% | 0.848 | 7.19 | 16.76 | 0.694 | 1.021 | -12.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần R:R (/100) → 33 | 112.13 | 47.1% | 0.66 | 8.77 | 12.79 | 0.637 | 0.68 | -8.93 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 108.17 | 52.4% | 0.756 | 7.91 | 13.68 | 0.694 | 0.825 | -11.34 |  |

### Vòng 1420 — ngẫu nhiên nhiều thông số · mốc: tổng 119.28R, win 52.4%, rủi ro tụt vốn 7.5R, lời÷rủi ro 15.90

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Cộng thêm ngưỡng điểm khung 4H → -1 | 118.54 | 52.5% | 0.841 | 7.43 | 15.95 | 0.641 | 1.067 | -12.16 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Đệm SL riêng khung 1W (ATR) → 0.3 | 89.2 | 45.1% | 0.671 | 9.72 | 9.18 | 0.31 | 1.005 | -16.85 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu riêng khung 4H → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 118.15 | 40% | 0.369 | 14.68 | 8.05 | 0.434 | 0.318 | -10.16 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: EMA 200 → 3 | 106.85 | 50.7% | 0.763 | 7.72 | 13.84 | 0.579 | 0.964 | -13.15 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Mức RSI 30/70 → 0.875 + Coin phải mạnh hơn BTC trong N ngày → 14 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 16.61 | 55% | 0.119 | 7.3 | 2.28 | 0.118 | 0.119 | -8.46 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: POC volume profile cố định → 0.688 | 115.12 | 52.1% | 0.799 | 7.31 | 15.75 | 0.644 | 0.978 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Entry (/100) → 33 + Điểm vùng: MACD cắt lên Signal → 0.438 | 113.02 | 49.7% | 0.729 | 8.96 | 12.61 | 0.54 | 0.953 | -8.55 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 119.28 | 52.4% | 0.834 | 7.5 | 15.9 | 0.634 | 1.067 | -12.16 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Mức MACD → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 106.93 | 47.6% | 0.748 | 8.49 | 12.59 | 0.644 | 0.869 | -15.4 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Elliott (/100) → 6 + Cộng thêm ngưỡng điểm khung 1D → 7 + Trọng số phần Entry (/100) → 33 | 117.28 | 52.8% | 0.826 | 7.32 | 16.02 | 0.616 | 1.067 | -10.26 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Elliott (/100) → 6 + Cộng điểm phân kỳ dương ẩn → 3 | 31.73 | 57.1% | 0.197 | 5.56 | 5.71 | 0.227 | 0.169 | -8.19 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Break mây Ichimoku → 1 | 109.75 | 50.3% | 0.757 | 7.88 | 13.93 | 0.569 | 0.97 | -12.99 |  |

### Vòng 1419 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.53R, lời÷rủi ro 15.90

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Elliott (/100) → 6 | 115.31 | 51.1% | 0.818 | 7.6 | 15.17 | 0.609 | 1.055 | -12.16 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trọng số phần Entry (/100) → 33 + Điểm tối thiểu của vùng đặt SL → 2 | 73.67 | 47% | 0.558 | 9.62 | 7.66 | 0.408 | 0.722 | -9.9 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 | 131.28 | 41.6% | 0.401 | 12.1 | 10.85 | 0.404 | 0.4 | -9.14 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: EMA 21 → 0.875 | 117.19 | 50% | 0.792 | 7.81 | 15.01 | 0.649 | 0.947 | -10.87 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Số TP tối đa → 1 | 110.34 | 48.8% | 0.69 | 8.87 | 12.44 | 0.562 | 0.831 | -11.9 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 117.28 | 51.4% | 0.814 | 7.61 | 15.41 | 0.615 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 54.56 | 41.5% | 0.515 | 10.06 | 5.42 | 0.316 | 0.737 | -17.14 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Đệm SL riêng khung 4H (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 22.88 | 49.8% | 0.095 | 14.49 | 1.58 | 0.086 | 0.102 | -12.18 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Coin phải mạnh hơn BTC trong N ngày → 14 | 87.73 | 49.6% | 0.75 | 7.97 | 11.01 | 0.552 | 0.988 | -18.62 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Xác nhận khung nhỏ (A2) → W | 117.29 | 37.8% | 0.386 | 18.97 | 6.18 | 0.443 | 0.33 | -13.96 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Xác nhận khung nhỏ (A2) → W | 134.28 | 37.7% | 0.265 | 18.85 | 7.12 | 0.46 | 0.087 | -16.72 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 25.85 | 54.7% | 0.15 | 6.9 | 3.75 | 0.185 | 0.115 | -8.54 |  |
