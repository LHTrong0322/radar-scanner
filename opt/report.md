# Tối ưu tự động (chạy liên tục) — vòng 773

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 8931 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 94.27R | 0.578 | 5.7R | 9.89R | 9.53 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 145 | 53.1% | 118.93R | 0.82 | 5.09R | 7.35R | 16.18 | 28 | 17.9% | -9.92R | -0.354 | 10.54R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.77R | 2 | 0% | -2.3R |
| 4H | 107 | 54.2% | 91.73R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 94.27R | 9.89R | 9.53 | 31 | 12.9% | -13R |
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

### Vòng 773 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.35R, lời÷rủi ro 16.18

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: HVN cố định → 0.438 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 122.41 | 49.4% | 0.775 | 8.3 | 14.75 | 0.723 | 0.835 | -10.49 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 104.72 | 50.6% | 0.663 | 8.45 | 12.39 | 0.647 | 0.68 | -10.73 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 5 | 118.73 | 52.7% | 0.813 | 7.22 | 16.44 | 0.625 | 1.03 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu riêng khung 1W → 2 + Cổng Dow → CHẶT | 68.42 | 49.2% | 0.58 | 8.98 | 7.62 | 0.257 | 0.843 | -10.47 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Đệm SL riêng khung 1D (ATR) → 0.3 | 114.71 | 47.2% | 0.704 | 9.83 | 11.67 | 0.677 | 0.729 | -6.61 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 141.13 | 37.8% | 0.493 | 19.35 | 7.29 | 0.325 | 0.665 | -7.92 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 | 110.74 | 52.1% | 0.758 | 7.49 | 14.79 | 0.649 | 0.868 | -10.96 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 119.06 | 47.8% | 0.739 | 8.55 | 13.93 | 0.68 | 0.806 | -9.39 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 118.93 | 53.1% | 0.82 | 7.35 | 16.18 | 0.635 | 1.03 | -9.92 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Divergence (/100) → 12 + Ngưỡng điểm vào kèo → 74 + Trọng số phần Elliott (/100) → 6 | 124.28 | 49.1% | 0.782 | 8.15 | 15.25 | 0.736 | 0.835 | -10.5 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Khung lớn phải tăng (trend ≥) → 0.375 | 83.73 | 46.9% | 0.644 | 9 | 9.3 | 0.434 | 0.855 | -10.49 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Số TP tối đa → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 117.84 | 51.4% | 0.818 | 7.44 | 15.84 | 0.652 | 1.009 | -13 |  |

### Vòng 772 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.25R, lời÷rủi ro 16.40

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + SL tối đa (% Entry) → 0.425 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Cộng điểm phân kỳ dương ẩn → 3 | 61.91 | 41.4% | 0.342 | 11.83 | 5.23 | 0.35 | 0.335 | -11.17 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Mức RSI 30/70 → 1.13 | 101.92 | 50.7% | 0.708 | 8.26 | 12.34 | 0.651 | 0.768 | -9.14 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần Trend (/100) → 19 | 114.69 | 51.4% | 0.775 | 7.87 | 14.57 | 0.592 | 0.979 | -8.9 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Lệnh chờ hết hạn sau (nến) → 8 | 117.59 | 51% | 0.749 | 7.76 | 15.15 | 0.609 | 0.906 | -11.51 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cổng Dow → TẮT + Điểm vùng: BOS → 1 + Điểm vùng: EMA 21 → 1.13 | 128.13 | 44.7% | 0.59 | 11.63 | 11.02 | 0.606 | 0.576 | -16.58 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Số TP tối đa → 2 + Điểm tối thiểu của vùng đặt SL → 2 | 72.35 | 47.2% | 0.67 | 8.86 | 8.17 | 0.48 | 0.882 | -5.45 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Mức RSI 30/70 → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 | 117.75 | 51.3% | 0.755 | 8.33 | 14.14 | 0.56 | 0.994 | -9.95 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Biên mây Ichimoku → 1.35 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 77.73 | 45.2% | 0.532 | 10.46 | 7.43 | 0.519 | 0.543 | -9.96 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: EMA 200 → 3 | 88.95 | 44.9% | 0.605 | 10.05 | 8.85 | 0.405 | 0.844 | -9.13 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Trọng số phần Elliott (/100) → 10 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 81.88 | 45.1% | 0.499 | 10.55 | 7.76 | 0.414 | 0.586 | -8.79 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: HVN cố định → 0.563 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 94.61 | 38.5% | 0.361 | 16.21 | 5.84 | 0.416 | 0.307 | -6.09 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Xác nhận khung nhỏ (A2) → W | 117.29 | 40.9% | 0.453 | 14.25 | 8.23 | 0.433 | 0.469 | -2.8 |  |

### Vòng 771 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.07

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 21 → 0.875 + Cổng Dow → TẮT | 28.67 | 52.8% | 0.146 | 7.96 | 3.6 | 0.233 | 0.06 | -14.45 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Mức RSI 30/70 → 0.875 | 122.02 | 43.9% | 0.496 | 10.74 | 11.36 | 0.485 | 0.506 | -15.69 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: EMA 21 → 1.13 | 114.47 | 51.6% | 0.739 | 7.79 | 14.69 | 0.558 | 0.947 | -10.26 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Biên mây Ichimoku → 1.05 | 85.68 | 48.5% | 0.649 | 8.71 | 9.84 | 0.577 | 0.721 | -18.88 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: EMA 50 → 0.75 | 30 | 59.1% | 0.195 | 5.39 | 5.57 | 0.205 | 0.185 | -9.5 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm tối thiểu của vùng đặt SL → 2 | 78.75 | 46.5% | 0.61 | 10.24 | 7.69 | 0.442 | 0.804 | -16.11 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số TP tối đa → 2 | 31.33 | 58.9% | 0.198 | 5.59 | 5.6 | 0.214 | 0.184 | -9.5 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 110.21 | 49.7% | 0.771 | 8.01 | 13.76 | 0.603 | 0.961 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: POC anchored → 2 + Trọng số phần Entry (/100) → 28 + Trọng số phần SL (/100) → 9 | 103.02 | 49.7% | 0.673 | 8.55 | 12.05 | 0.527 | 0.83 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Trọng số phần Divergence (/100) → 9 | 116.86 | 51.3% | 0.74 | 8.16 | 14.32 | 0.607 | 0.903 | -4.93 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần SL (/100) → 7 | 123.18 | 50% | 0.76 | 8.28 | 14.88 | 0.73 | 0.796 | -10.5 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Xác nhận khung nhỏ (A2) → W + Số TP tối đa → 2 | 108.01 | 39.2% | 0.424 | 15.53 | 6.95 | 0.386 | 0.457 | -2.5 |  |

### Vòng 770 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + R:R tối thiểu riêng khung 1W → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 106.99 | 50% | 0.753 | 7.76 | 13.79 | 0.614 | 0.893 | -14.21 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 68.75 | 48.2% | 0.625 | 8.6 | 7.99 | 0.459 | 0.832 | -16.02 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: BOS → 1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 118.93 | 53.1% | 0.82 | 7.44 | 15.99 | 0.635 | 1.03 | -9.92 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Trọng số phần Trend (/100) → 12 + R:R tối thiểu riêng khung 1W → 2 | 108.01 | 50.7% | 0.74 | 7.83 | 13.79 | 0.631 | 0.848 | -10.96 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 115.51 | 53% | 0.775 | 7.53 | 15.34 | 0.6 | 0.978 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 122.42 | 45.1% | 0.547 | 10.58 | 11.57 | 0.579 | 0.515 | -12.87 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Cổng Dow → TẮT + Điểm vùng: POC anchored → 4 + Trọng số phần Entry (/100) → 28 | 123.37 | 43% | 0.617 | 11.82 | 10.44 | 0.597 | 0.637 | -10.43 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: EMA 21 → 0.875 + % chốt ở TP1 → 0.307 + Điểm vùng: Fib sóng 4 → 0.938 | 117.08 | 51% | 0.807 | 7.72 | 15.17 | 0.679 | 0.941 | -7.33 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 119 | 53.1% | 0.821 | 7.41 | 16.06 | 0.637 | 1.029 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Cổng Dow → CHẶT | 107.08 | 47.5% | 0.585 | 9.01 | 11.88 | 0.52 | 0.643 | -13.11 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trọng số phần SL (/100) → 9 | 88.02 | 48.1% | 0.662 | 8.6 | 10.23 | 0.578 | 0.747 | -10.25 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: EMA 200 → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Cộng thêm ngưỡng điểm khung 1D → 5 | 88.22 | 51.9% | 0.684 | 8.24 | 10.71 | 0.472 | 0.892 | -10.11 |  |

### Vòng 769 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.07

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Số TP tối đa → 2 + Trọng số phần Divergence (/100) → 12 + Cộng thêm ngưỡng điểm khung 1W → -1 | 116.43 | 52.4% | 0.803 | 7.62 | 15.28 | 0.609 | 1.016 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 112.06 | 52.4% | 0.784 | 7.17 | 15.63 | 0.656 | 0.924 | -10.75 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần Momentum (/100) → 21 + Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 | 111.31 | 42.9% | 0.568 | 11.79 | 9.44 | 0.589 | 0.551 | -8.34 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.51 | 46.2% | 0.607 | 10.86 | 9.44 | 0.605 | 0.608 | -4.11 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 50 → 1.13 | 94.38 | 38.6% | 0.376 | 16.87 | 5.59 | 0.349 | 0.4 | -1.32 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cộng thêm ngưỡng điểm khung 1W → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 32.73 | 58.9% | 0.207 | 6.01 | 5.45 | 0.206 | 0.208 | -9.47 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + % chốt ở TP1 → 0.287 | 106.64 | 51.4% | 0.741 | 7.73 | 13.8 | 0.61 | 0.871 | -10.76 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 4H → 2 + Xác nhận khung nhỏ (A2) → W + Trọng số phần Divergence (/100) → 12 | 71.3 | 36.4% | 0.289 | 20.88 | 3.41 | 0.315 | 0.268 | -6.18 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cổng Dow → CHẶT | 59.27 | 51.2% | 0.723 | 6.85 | 8.65 | 0.283 | 1.122 | -6.87 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 118.93 | 53.1% | 0.82 | 7.4 | 16.07 | 0.635 | 1.03 | -9.92 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 113.35 | 48.4% | 0.722 | 8.56 | 13.24 | 0.575 | 0.878 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Entry (/100) → 28 + Điểm vùng: EMA 50 → 1.13 | 109.96 | 46.1% | 0.658 | 10.55 | 10.42 | 0.577 | 0.735 | -3.29 |  |

### Vòng 768 — ngẫu nhiên nhiều thông số · mốc: tổng 121.63R, win 53.8%, rủi ro tụt vốn 7.27R, lời÷rủi ro 16.73

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Mức MACD → 0.875 + SL tối đa (% Entry) → 0.425 | 110.44 | 52.1% | 0.778 | 7.71 | 14.32 | 0.615 | 0.95 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Ngưỡng điểm vào kèo → 77 | 76.09 | 45.7% | 0.599 | 9.59 | 7.93 | 0.42 | 0.786 | -8.96 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 107.08 | 51.1% | 0.759 | 7.74 | 13.83 | 0.498 | 1.057 | -10.48 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Biên mây Ichimoku → 1.35 | 80.69 | 49.6% | 0.646 | 8.39 | 9.62 | 0.587 | 0.714 | -13.88 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức RSI 30/70 → 0.875 + Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần Momentum (/100) → 25 | 114.55 | 49.4% | 0.725 | 8.89 | 12.89 | 0.533 | 0.937 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Xác nhận khung nhỏ (A2) → W + Trọng số phần SL (/100) → 7 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 108.56 | 39.2% | 0.38 | 16.86 | 6.44 | 0.332 | 0.428 | -6.96 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: POC volume profile cố định → 0.813 + Cộng thêm ngưỡng điểm khung 1W → 2 | 119.47 | 52.4% | 0.835 | 7.35 | 16.25 | 0.658 | 1.025 | -7.61 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: HVN cố định → 0.563 | 119.91 | 52.8% | 0.833 | 7.35 | 16.31 | 0.64 | 1.048 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 97.04 | 49.3% | 0.683 | 7.85 | 12.36 | 0.423 | 0.951 | -10.47 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: POC volume profile cố định → 0.813 | 72.23 | 46.2% | 0.681 | 8.74 | 8.26 | 0.429 | 0.975 | -5.76 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Divergence (/100) → 12 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 104.41 | 52% | 0.705 | 8.14 | 12.83 | 0.637 | 0.781 | -9.83 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Cổng Dow → CHẶT + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC anchored → 4 | 84.49 | 39.1% | 0.408 | 17.11 | 4.94 | 0.243 | 0.538 | -2.22 |  |

### Vòng 767 — ngẫu nhiên nhiều thông số · mốc: tổng 121.63R, win 53.8%, rủi ro tụt vốn 7.3R, lời÷rủi ro 16.66

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Lệnh chờ hết hạn sau (nến) → 8 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 71.91 | 46.2% | 0.615 | 9.69 | 7.42 | 0.394 | 0.881 | -6.03 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 72.65 | 47.3% | 0.66 | 8.97 | 8.1 | 0.415 | 0.945 | -5.45 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 121.19 | 50% | 0.767 | 8.36 | 14.5 | 0.577 | 0.957 | -4.49 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Coin phải mạnh hơn BTC trong N ngày → 14 | 80.26 | 47.9% | 0.686 | 8.56 | 9.38 | 0.524 | 0.868 | -15.1 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 121.17 | 53.4% | 0.83 | 7.35 | 16.49 | 0.635 | 1.047 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 103.45 | 50.7% | 0.69 | 8.26 | 12.52 | 0.574 | 0.822 | -8.43 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 90.55 | 51.3% | 0.774 | 7.89 | 11.48 | 0.553 | 1.032 | -15.1 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khung lớn phải tăng (trend ≥) → 0.375 | 103.19 | 52.1% | 0.707 | 7.89 | 13.08 | 0.628 | 0.792 | -8.43 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần SL (/100) → 7 + SL tối đa (% Entry) → 0.425 | 112.73 | 51.7% | 0.757 | 7.61 | 14.81 | 0.66 | 0.85 | -9.67 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 | 112.49 | 50% | 0.721 | 8.91 | 12.63 | 0.495 | 0.978 | -6.05 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm tối thiểu của vùng đặt SL → 4 + Xác nhận khung nhỏ (A2) → W | 60.68 | 29.7% | 0.172 | 33.8 | 1.8 | 0.093 | 0.23 | -33.68 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Momentum (/100) → 25 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 50 → 0.75 | 110.64 | 46.5% | 0.643 | 9.12 | 12.13 | 0.598 | 0.685 | -6.89 |  |

### Vòng 766 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.27R, lời÷rủi ro 16.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.35 | 116.52 | 45.5% | 0.525 | 11.05 | 10.54 | 0.562 | 0.49 | -11.9 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + % chốt ở TP1 → 0.307 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 113.37 | 51% | 0.793 | 7.76 | 14.61 | 0.606 | 1.005 | -7.62 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + R:R tối thiểu tới TP1 → 2.38 | 84.56 | 39.7% | 0.486 | 11.39 | 7.42 | 0.477 | 0.496 | -6.69 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 92.57 | 46.9% | 0.638 | 9.37 | 9.88 | 0.47 | 0.852 | -8.13 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 113.21 | 53% | 0.76 | 7.55 | 14.99 | 0.596 | 0.95 | -10.03 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + R:R tối thiểu riêng khung 1D → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 92.65 | 44.3% | 0.555 | 9.91 | 9.35 | 0.605 | 0.508 | -4.06 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: EMA 50 → 1.13 | 111.21 | 50.3% | 0.757 | 7.94 | 14.01 | 0.565 | 0.98 | -7.43 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Mức RSI 30/70 → 0.875 + Cổng Dow → TẮT | 153.13 | 46.2% | 0.654 | 11.15 | 13.73 | 0.551 | 0.766 | -18.48 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.49 | 58.6% | 0.207 | 5.6 | 5.62 | 0.246 | 0.171 | -10.36 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần SL (/100) → 9 + Cộng điểm phân kỳ dương ẩn → 2.25 + R:R tối thiểu tới TP1 → 2.38 | 64.41 | 44.8% | 0.481 | 9.55 | 6.74 | 0.484 | 0.477 | -16.67 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Lệnh chờ hết hạn sau (nến) → 8 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 74.47 | 47% | 0.636 | 9.11 | 8.17 | 0.434 | 0.881 | -6.03 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: EMA 50 → 1.13 | 144.62 | 38% | 0.504 | 18.93 | 7.64 | 0.316 | 0.691 | -10.86 |  |

### Vòng 765 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.25R, lời÷rủi ro 16.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Cộng thêm ngưỡng điểm khung 1D → 3 + Xác nhận khung nhỏ (A2) → W | 105.92 | 39.7% | 0.42 | 15.65 | 6.77 | 0.373 | 0.464 | -2.71 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC anchored → 2 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 65 | 45.5% | 0.591 | 9.67 | 6.72 | 0.414 | 0.775 | -5.46 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 85.11 | 45.5% | 0.587 | 10.09 | 8.44 | 0.44 | 0.767 | -8.13 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: EMA 50 → 0.75 | 126.88 | 45.6% | 0.561 | 10.8 | 11.75 | 0.624 | 0.495 | -9.94 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 | 111.64 | 46.6% | 0.693 | 10.13 | 11.02 | 0.694 | 0.693 | -5.32 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Trend (/100) → 12 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 72.87 | 44.9% | 0.461 | 10.59 | 6.88 | 0.349 | 0.577 | -11.99 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + R:R tối thiểu riêng khung 4H → 2 | 118.09 | 41.2% | 0.377 | 12.43 | 9.5 | 0.326 | 0.421 | -13.54 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 1D (ATR) → 0.3 | 116.74 | 47.6% | 0.703 | 10.39 | 11.24 | 0.677 | 0.727 | -5.32 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Cộng điểm phân kỳ dương ẩn → 3 + R:R tối thiểu riêng khung 1D → 2 | 107.8 | 45.9% | 0.627 | 9.12 | 11.82 | 0.61 | 0.642 | -6.89 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: EMA 21 → 1.13 | 108.63 | 51% | 0.739 | 7.74 | 14.03 | 0.597 | 0.891 | -8.97 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Cổng Dow → CHẶT | 73.72 | 46.4% | 0.534 | 8.65 | 8.52 | 0.373 | 0.655 | -10.98 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 101.76 | 51.7% | 0.692 | 8.12 | 12.53 | 0.637 | 0.754 | -8.43 |  |

### Vòng 764 — ngẫu nhiên nhiều thông số · mốc: tổng 115.64R, win 53.5%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.54

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 115.01 | 52.8% | 0.81 | 7.56 | 15.21 | 0.642 | 1.003 | -8.08 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 103.96 | 45.6% | 0.571 | 10.06 | 10.33 | 0.493 | 0.647 | -4.52 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Trọng số phần SL (/100) → 7 | 80.03 | 52.3% | 0.721 | 7.03 | 11.38 | 0.297 | 1.109 | -10.17 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 103.35 | 50.3% | 0.713 | 8.33 | 12.41 | 0.552 | 0.911 | -8.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Cổng Dow → CHẶT + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 68.88 | 51.8% | 0.626 | 7.65 | 9 | 0.344 | 0.889 | -9.39 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 113.25 | 52.1% | 0.776 | 7.88 | 14.37 | 0.635 | 0.932 | -8.08 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: EMA 21 → 0.875 | 106.18 | 51.4% | 0.748 | 7.87 | 13.49 | 0.641 | 0.867 | -8.91 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Entry (/100) → 28 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.66 | 56.8% | 0.203 | 5.84 | 5.08 | 0.234 | 0.171 | -8.73 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: HVN cố định → 0.438 | 100.21 | 50% | 0.716 | 8.13 | 12.33 | 0.486 | 0.989 | -9.93 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + R:R tối thiểu riêng khung 1W → 2 | 98.36 | 50% | 0.647 | 9.21 | 10.68 | 0.524 | 0.781 | -6.89 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Entry (/100) → 33 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 97.52 | 50.3% | 0.673 | 8.53 | 11.43 | 0.588 | 0.771 | -9.17 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần SL (/100) → 9 | 110.9 | 52.1% | 0.781 | 7.54 | 14.71 | 0.604 | 0.984 | -8.08 |  |
