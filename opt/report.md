# Tối ưu tự động (chạy liên tục) — vòng 661

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 7587 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.3% | 93.53R | 0.577 | 5.74R | 10.03R | 9.33 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 144 | 53.5% | 118.38R | 0.822 | 5.09R | 7.26R | 16.31 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 106 | 54.7% | 91.22R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.3% | 93.53R | 10.03R | 9.33 | 32 | 12.5% | -14.03R |
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

### Vòng 661 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.31

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Trend (/100) → 19 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Fib sóng 4 → 1.56 | 107.41 | 52% | 0.726 | 7.95 | 13.51 | 0.561 | 0.914 | -11.78 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + R:R tối thiểu riêng khung 1W → 2 | 106.27 | 50.7% | 0.728 | 8.22 | 12.93 | 0.617 | 0.835 | -12.09 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.563 | 114.75 | 50% | 0.775 | 8.37 | 13.71 | 0.586 | 0.97 | -10.7 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức RSI 30/70 → 0.875 | 79.67 | 47.5% | 0.653 | 9.31 | 8.56 | 0.459 | 0.889 | -6.48 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: EMA 50 → 0.75 | 114.02 | 49.3% | 0.77 | 8.41 | 13.56 | 0.591 | 0.95 | -10.7 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 89.59 | 45.8% | 0.54 | 9.99 | 8.97 | 0.408 | 0.672 | -10.47 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: POC volume profile cố định → 0.688 | 119.18 | 52.6% | 0.764 | 7.54 | 15.81 | 0.623 | 0.928 | -11.25 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: EMA 50 → 0.75 + Cộng thêm ngưỡng điểm khung 1W → 2 | 115.29 | 52.8% | 0.812 | 7.39 | 15.6 | 0.627 | 1.007 | -9.66 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL riêng khung 4H (ATR) → 0.3 | 101.85 | 36.6% | 0.345 | 20.85 | 4.88 | 0.258 | 0.417 | -1.13 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Ngưỡng điểm vào kèo → 77 | 114.02 | 46.4% | 0.687 | 10.26 | 11.11 | 0.576 | 0.825 | -8.51 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 118.18 | 53.1% | 0.815 | 7.47 | 15.82 | 0.624 | 1.037 | -9.66 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 112.2 | 52.2% | 0.825 | 7.3 | 15.37 | 0.59 | 1.089 | -10.98 |  |

### Vòng 660 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.32R, lời÷rủi ro 16.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 99.91 | 48.7% | 0.64 | 9.05 | 11.04 | 0.484 | 0.827 | -8.9 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 117.03 | 53.5% | 0.813 | 7.4 | 15.81 | 0.634 | 1.018 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Mức MACD → 1.13 | 107.86 | 45.7% | 0.616 | 9.09 | 11.87 | 0.593 | 0.639 | -7.92 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: HVN anchored → 0.313 + Cộng điểm phân kỳ dương ẩn → 3 | 81.57 | 46% | 0.507 | 9.98 | 8.17 | 0.418 | 0.592 | -9.82 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Đệm SL riêng khung 1W (ATR) → 0.3 | 107.95 | 47.6% | 0.744 | 8.99 | 12.01 | 0.455 | 1.022 | -10.56 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trọng số phần Elliott (/100) → 6 | 130.25 | 43.8% | 0.62 | 11.36 | 11.47 | 0.537 | 0.705 | -20.34 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần Entry (/100) → 28 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 110.73 | 51% | 0.774 | 7.37 | 15.02 | 0.646 | 0.916 | -9.66 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 21 → 0.875 | 88.39 | 50% | 0.737 | 8.23 | 10.74 | 0.588 | 0.912 | -16.13 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 105.51 | 48.9% | 0.759 | 8.19 | 12.88 | 0.583 | 0.972 | -9.25 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Cộng thêm ngưỡng điểm khung 1W → -1 + Cộng thêm ngưỡng điểm khung 1D → 5 | 114 | 53% | 0.765 | 7.69 | 14.82 | 0.586 | 0.979 | -9.66 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Momentum (/100) → 21 + R:R tối thiểu riêng khung 4H → 2 | 119.68 | 42% | 0.378 | 12.25 | 9.77 | 0.322 | 0.422 | -9.27 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Trend (/100) → 19 | 31.79 | 35.3% | 0.267 | 13.41 | 2.37 | 0.309 | 0.213 | -4.69 |  |

### Vòng 659 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: POC volume profile cố định → 0.813 | 117.17 | 52.7% | 0.803 | 7.54 | 15.54 | 0.635 | 0.99 | -7.32 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.18 | 52.1% | 0.7 | 7.93 | 12.89 | 0.637 | 0.772 | -9.46 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: EMA 200 → 1 | 118.67 | 41.5% | 0.376 | 12.44 | 9.54 | 0.335 | 0.408 | -2.54 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 94.13 | 44.8% | 0.57 | 9.27 | 10.15 | 0.546 | 0.593 | -13.4 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Mức MACD → 1.13 + Điểm tối thiểu của vùng đặt SL → 2 | 109.32 | 51.4% | 0.739 | 8.51 | 12.85 | 0.591 | 0.903 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.18 | 52.1% | 0.7 | 7.93 | 12.89 | 0.637 | 0.772 | -9.46 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Trọng số phần SL (/100) → 9 + Cộng thêm ngưỡng điểm khung 4H → 2 | 110.38 | 51.8% | 0.806 | 7.38 | 14.96 | 0.622 | 1.016 | -9.69 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Elliott (/100) → 10 | 116.53 | 47.6% | 0.711 | 9.9 | 11.77 | 0.693 | 0.726 | -6.35 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần R:R (/100) → 28 | 152.81 | 38.7% | 0.532 | 17.86 | 8.56 | 0.339 | 0.73 | -13.78 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần Divergence (/100) → 12 | 114.6 | 52.1% | 0.785 | 7.93 | 14.45 | 0.591 | 1.007 | -8.64 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 4H → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: BOS → 3 | 71.82 | 35.3% | 0.251 | 22.3 | 3.22 | 0.173 | 0.296 | -23.78 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Khung lớn phải tăng (trend ≥) → 0.375 | 112.74 | 51.4% | 0.783 | 7.64 | 14.76 | 0.581 | 1.009 | -9.66 |  |

### Vòng 658 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 108.92 | 51.7% | 0.731 | 8.59 | 12.68 | 0.571 | 0.912 | -9.66 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu tới TP1 → 2.63 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 79.58 | 48.2% | 0.698 | 8.95 | 8.89 | 0.588 | 0.816 | -12.74 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 116.61 | 52.4% | 0.793 | 7.63 | 15.28 | 0.603 | 1.014 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: POC anchored → 2 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 93.08 | 48.4% | 0.593 | 9.96 | 9.35 | 0.43 | 0.775 | -6.05 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Ngưỡng điểm vào kèo → 77 + Đệm SL riêng khung 1W (ATR) → 0.3 | 86.23 | 45.5% | 0.595 | 10.35 | 8.33 | 0.539 | 0.648 | -10.47 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Số TP tối đa → 2 | 108.55 | 46% | 0.624 | 9.17 | 11.84 | 0.596 | 0.651 | -7.92 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 111.82 | 51.1% | 0.793 | 7.62 | 14.67 | 0.646 | 0.956 | -9.66 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm tối thiểu của vùng đặt SL → 2 | 106.21 | 39.3% | 0.398 | 16.51 | 6.43 | 0.372 | 0.422 | -3.73 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 111.89 | 50.3% | 0.782 | 7.95 | 14.07 | 0.621 | 0.955 | -12.92 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 94.56 | 34.6% | 0.272 | 26.15 | 3.62 | 0.128 | 0.423 | -31.12 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Cộng thêm ngưỡng điểm khung 4H → -1 | 99.8 | 51.5% | 0.756 | 7.84 | 12.73 | 0.607 | 0.93 | -8.27 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 122.45 | 50% | 0.806 | 8.01 | 15.29 | 0.785 | 0.83 | -10.24 |  |

### Vòng 657 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: POC anchored → 4 | 118.23 | 52% | 0.788 | 7.59 | 15.58 | 0.607 | 0.974 | -4.48 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 114.3 | 47.8% | 0.728 | 8.86 | 12.9 | 0.704 | 0.754 | -11.6 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + R:R tối thiểu riêng khung 1W → 2 | 109.38 | 51.7% | 0.744 | 7.68 | 14.24 | 0.648 | 0.839 | -9.38 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 72.12 | 45.2% | 0.572 | 9.65 | 7.47 | 0.434 | 0.72 | -8.96 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Đệm SL riêng khung 4H (ATR) → 0.3 | 155.02 | 39.3% | 0.544 | 18.02 | 8.6 | 0.359 | 0.728 | -12.33 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: MACD cắt lên Signal → 0.563 + Cổng Dow → TẮT | 130.67 | 44% | 0.625 | 11.5 | 11.36 | 0.546 | 0.705 | -20.34 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: HVN anchored → 0.313 | 95.54 | 49.7% | 0.659 | 8.69 | 10.99 | 0.568 | 0.761 | -10.75 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Đệm SL riêng khung 4H (ATR) → 0.3 | 44.24 | 31.5% | 0.268 | 23.04 | 1.92 | 0.062 | 0.487 | 0.08 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Fib sóng 4 → 0.938 | 158.63 | 39.2% | 0.551 | 17.61 | 9.01 | 0.389 | 0.712 | -12.33 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN anchored → 0.313 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 100.16 | 41% | 0.34 | 12.4 | 8.08 | 0.252 | 0.407 | -15.81 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: EMA 200 → 3 | 79 | 46% | 0.637 | 9.47 | 8.34 | 0.442 | 0.852 | -15.11 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: BOS → 1 | 114.07 | 51.4% | 0.792 | 7.8 | 14.62 | 0.522 | 1.086 | -9.52 |  |

### Vòng 656 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.41R, lời÷rủi ro 15.98

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: EMA 21 → 0.875 | 118.24 | 52.1% | 0.81 | 7.68 | 15.4 | 0.669 | 0.963 | -9.66 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Đệm SL riêng khung 1W (ATR) → 0.3 + % chốt ở TP1 → 0.287 | 106.81 | 46.9% | 0.747 | 8.67 | 12.32 | 0.589 | 0.902 | -10.68 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Biên mây Ichimoku → 1.05 | 80.9 | 50.8% | 0.686 | 7.83 | 10.33 | 0.552 | 0.838 | -18.25 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Divergence (/100) → 9 | 96.15 | 47.4% | 0.712 | 9.11 | 10.55 | 0.436 | 0.954 | -10.7 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 115.21 | 50.7% | 0.789 | 7.85 | 14.68 | 0.672 | 0.903 | -8.69 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Biên mây Ichimoku → 1.35 | 105.28 | 45.3% | 0.612 | 9.29 | 11.33 | 0.605 | 0.619 | -8.6 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Cộng thêm ngưỡng điểm khung 4H → 2 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Break mây Ichimoku → 1 | 105.12 | 49.7% | 0.725 | 8.4 | 12.51 | 0.568 | 0.893 | -11.02 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Ngưỡng điểm vào kèo → 77 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 84.02 | 49.2% | 0.689 | 8.48 | 9.91 | 0.604 | 0.786 | -17.72 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: BOS → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 115.62 | 52.8% | 0.803 | 7.53 | 15.35 | 0.62 | 1.007 | -11.06 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Fib sóng 4 → 0.938 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 76.16 | 47.7% | 0.712 | 8.56 | 8.9 | 0.473 | 0.984 | -6.48 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Đệm SL riêng khung 1D (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + % chốt ở TP1 → 0.287 | 78.56 | 41.8% | 0.427 | 12.89 | 6.09 | 0.483 | 0.383 | -8.69 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 106.04 | 45.7% | 0.613 | 9.33 | 11.37 | 0.578 | 0.646 | -7.92 |  |

### Vòng 655 — ngẫu nhiên nhiều thông số · mốc: tổng 118.37R, win 53.5%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.30

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Cộng thêm ngưỡng điểm khung 1W → 2 + Cộng thêm ngưỡng điểm khung 1D → 3 | 115.76 | 51.7% | 0.81 | 7.44 | 15.56 | 0.658 | 0.972 | -9.66 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: HVN anchored → 0.188 | 113.04 | 48.5% | 0.694 | 9.34 | 12.1 | 0.629 | 0.775 | -7.66 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN anchored → 0.188 | 118.37 | 53.5% | 0.822 | 7.26 | 16.3 | 0.635 | 1.037 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Cộng điểm phân kỳ dương ẩn → 3 | 115.7 | 52.1% | 0.815 | 7.68 | 15.07 | 0.65 | 0.994 | -9.66 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 40.33 | 41.9% | 0.469 | 9.32 | 4.33 | 0.38 | 0.582 | -8.58 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + SL tối đa (% Entry) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 93.3 | 46.9% | 0.643 | 9.37 | 9.96 | 0.474 | 0.858 | -9.16 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trọng số phần Divergence (/100) → 9 | 111.81 | 51.4% | 0.755 | 7.91 | 14.14 | 0.575 | 0.962 | -10.63 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 112.32 | 52.1% | 0.791 | 7.55 | 14.88 | 0.651 | 0.948 | -11.06 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 37.25 | 42% | 0.423 | 9.61 | 3.88 | 0.328 | 0.537 | -8.62 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần SL (/100) → 7 | 105.05 | 50% | 0.691 | 8.98 | 11.7 | 0.514 | 0.904 | -7.08 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 105.81 | 47.6% | 0.74 | 9.05 | 11.69 | 0.528 | 0.954 | -12.68 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: EMA 21 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 125.87 | 45.5% | 0.545 | 10.7 | 11.76 | 0.611 | 0.477 | -8.2 |  |

### Vòng 654 — ngẫu nhiên nhiều thông số · mốc: tổng 118.37R, win 53.5%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.30

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần Divergence (/100) → 9 | 128.52 | 45.4% | 0.561 | 10.71 | 12 | 0.583 | 0.538 | -10.74 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + R:R tối thiểu riêng khung 4H → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 67.42 | 38.8% | 0.301 | 14.81 | 4.55 | 0.266 | 0.336 | -13.44 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Mức RSI 30/70 → 1.13 | 102.24 | 38.8% | 0.401 | 16.14 | 6.33 | 0.366 | 0.432 | -3.73 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 105.03 | 50% | 0.691 | 8.82 | 11.91 | 0.614 | 0.777 | -9.91 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Cộng điểm phân kỳ dương ẩn → 2.25 | 82.27 | 45.7% | 0.508 | 9.98 | 8.24 | 0.418 | 0.597 | -9.83 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Trọng số phần Momentum (/100) → 25 | 116.25 | 52.1% | 0.796 | 7.46 | 15.58 | 0.624 | 0.994 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức MACD → 0.875 | 145.04 | 38.6% | 0.509 | 18.31 | 7.92 | 0.324 | 0.692 | -11.22 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: EMA 200 → 1 | 103.07 | 49.7% | 0.683 | 8.64 | 11.93 | 0.498 | 0.914 | -6.64 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần Elliott (/100) → 6 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 101.73 | 48.8% | 0.636 | 10.14 | 10.03 | 0.461 | 0.834 | -7.08 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 105.81 | 50% | 0.725 | 8.27 | 12.79 | 0.555 | 0.925 | -9.66 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + % chốt ở TP1 → 0.307 | 76.74 | 47.3% | 0.595 | 9.05 | 8.48 | 0.471 | 0.729 | -8.96 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + SL tối đa (% Entry) → 0.425 | 114.6 | 52.1% | 0.785 | 7.72 | 14.84 | 0.591 | 1.007 | -9.66 |  |

### Vòng 653 — ngẫu nhiên nhiều thông số · mốc: tổng 118.37R, win 53.5%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.85

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Trend (/100) → 12 + R:R tối thiểu riêng khung 4H → 2 | 116.4 | 40.2% | 0.36 | 12.57 | 9.26 | 0.362 | 0.359 | -15.11 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Break mây Ichimoku → 3 | 89.7 | 46.3% | 0.602 | 9.93 | 9.03 | 0.435 | 0.796 | -8.97 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + R:R tối thiểu riêng khung 4H → 2 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Mức MACD → 0.875 | 106.93 | 40.9% | 0.347 | 12.82 | 8.34 | 0.301 | 0.386 | -11.26 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + % chốt ở TP1 → 0.287 | 103.5 | 50.4% | 0.734 | 8 | 12.94 | 0.485 | 1.026 | -11.5 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cổng Dow → CHẶT | 63.37 | 50% | 0.647 | 7.54 | 8.4 | 0.356 | 0.925 | -13.33 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Khung lớn phải tăng (trend ≥) → 0.375 | 115.11 | 52.8% | 0.799 | 7.57 | 15.21 | 0.604 | 1.018 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 116.65 | 52.4% | 0.816 | 7.42 | 15.72 | 0.64 | 1.015 | -9.66 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: EMA 50 → 1.13 | 113 | 50.7% | 0.774 | 8.14 | 13.88 | 0.597 | 0.977 | -8.64 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Trần điểm khi chart yếu (Trend < x) → -0.225 | 84.06 | 52.7% | 0.764 | 6.85 | 12.27 | 0.324 | 1.145 | -10.72 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trọng số phần Entry (/100) → 28 | 144.14 | 37.7% | 0.499 | 18.91 | 7.62 | 0.304 | 0.697 | -13.35 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: EMA 50 → 1.13 + Cổng Dow → CHẶT + Điểm vùng: Fib sóng 4 → 1.56 | 94.88 | 48.3% | 0.539 | 9.93 | 9.55 | 0.454 | 0.608 | -13.68 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Divergence (/100) → 12 + Đệm SL riêng khung 4H (ATR) → 0.3 | 155.15 | 39% | 0.541 | 17.33 | 8.95 | 0.383 | 0.699 | -14.27 |  |

### Vòng 652 — ngẫu nhiên nhiều thông số · mốc: tổng 118.37R, win 53.5%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Trọng số phần Momentum (/100) → 25 + Coin phải mạnh hơn BTC trong N ngày → 14 | 85.78 | 50% | 0.752 | 8.01 | 10.71 | 0.569 | 0.963 | -16.13 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 112.4 | 51.4% | 0.792 | 7.5 | 14.99 | 0.647 | 0.954 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: EMA 200 → 3 + Điểm vùng: Mức MACD → 1.13 | 104.3 | 46.8% | 0.75 | 8.84 | 11.8 | 0.532 | 0.999 | -8.87 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 110.97 | 49.3% | 0.804 | 8.58 | 12.93 | 0.597 | 1.051 | -7.89 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 112.62 | 49.4% | 0.731 | 8.44 | 13.34 | 0.556 | 0.93 | -11.66 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Biên mây Ichimoku → 1.35 + Số TP tối đa → 2 + Trọng số phần Momentum (/100) → 25 | 113.89 | 51% | 0.785 | 7.84 | 14.53 | 0.622 | 0.966 | -7.32 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + R:R tối thiểu tới TP1 → 2.38 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: HVN cố định → 0.438 | 97.83 | 45.9% | 0.615 | 9.07 | 10.79 | 0.475 | 0.747 | -11.26 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + % chốt ở TP1 → 0.307 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 100.28 | 51.4% | 0.678 | 8.11 | 12.36 | 0.628 | 0.735 | -9.47 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: POC volume profile cố định → 0.813 | 124.45 | 50.3% | 0.803 | 8.23 | 15.12 | 0.757 | 0.857 | -9.22 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trọng số phần Divergence (/100) → 9 | 114.54 | 51.4% | 0.785 | 7.92 | 14.46 | 0.591 | 1.006 | -9.66 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu riêng khung 1W → 2 | 10.85 | 51% | 0.074 | 10 | 1.08 | 0.101 | 0.05 | -10.76 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Break mây Ichimoku → 3 | 86.98 | 35.2% | 0.322 | 22.86 | 3.8 | 0.206 | 0.433 | -11.21 |  |
