# Tối ưu tự động (chạy liên tục) — vòng 617

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 7059 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46% | 89.37R | 0.555 | 5.68R | 9.91R | 9.02 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 143 | 53.1% | 113.69R | 0.795 | 5.09R | 7.47R | 15.22 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 105 | 54.3% | 86.53R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46% | 89.37R | 9.91R | 9.02 | 32 | 12.5% | -14.03R |
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

### Vòng 617 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.22

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Đệm SL riêng khung 1D (ATR) → 0.3 | 102.8 | 44.9% | 0.584 | 12.4 | 8.29 | 0.554 | 0.613 | -4.46 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Elliott (/100) → 6 + Đệm SL riêng khung 1W (ATR) → 0.3 | 108.88 | 44.6% | 0.693 | 10.33 | 10.54 | 0.614 | 0.782 | -11.29 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 112.35 | 53.1% | 0.786 | 7.35 | 15.29 | 0.634 | 0.963 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Mức MACD → 1.13 | 102.75 | 52.9% | 0.849 | 7.43 | 13.83 | 0.622 | 1.112 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 117.26 | 48.7% | 0.752 | 8.62 | 13.6 | 0.697 | 0.818 | -10.07 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 114.39 | 47.3% | 0.693 | 10.52 | 10.87 | 0.633 | 0.753 | -8 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 122.31 | 49.7% | 0.789 | 8.15 | 15.01 | 0.767 | 0.816 | -10.24 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 112.57 | 52.8% | 0.782 | 7.43 | 15.15 | 0.614 | 0.98 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 115.74 | 51.9% | 0.742 | 8.31 | 13.93 | 0.58 | 0.941 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: MACD cắt lên Signal → 0.563 + Đệm SL riêng khung 1W (ATR) → 0.3 | 94.26 | 48.1% | 0.709 | 8.77 | 10.75 | 0.457 | 0.942 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Cổng Dow → CHẶT + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 63.22 | 49.6% | 0.55 | 7.91 | 7.99 | 0.383 | 0.688 | -11.29 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Cộng thêm ngưỡng điểm khung 1D → 5 | 107.13 | 50.7% | 0.765 | 7.64 | 14.02 | 0.646 | 0.899 | -8.61 |  |

### Vòng 616 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.54R, lời÷rủi ro 15.08

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Trọng số phần R:R (/100) → 28 | 113.35 | 50.7% | 0.787 | 8.08 | 14.03 | 0.686 | 0.898 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + R:R tối thiểu tới TP1 → 2.63 | 97.82 | 52.1% | 0.822 | 7.36 | 13.29 | 0.569 | 1.098 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 109.91 | 51.7% | 0.758 | 7.93 | 13.86 | 0.591 | 0.952 | -8.64 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 72.62 | 45.9% | 0.666 | 9.39 | 7.73 | 0.434 | 0.921 | -7.53 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 64.41 | 46.3% | 0.596 | 9.82 | 6.56 | 0.474 | 0.733 | -5.32 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 82.54 | 49.6% | 0.718 | 8.13 | 10.15 | 0.568 | 0.905 | -19.38 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Biên mây Ichimoku → 1.35 + Đệm SL riêng khung 1D (ATR) → 0.3 | 102.56 | 46.5% | 0.645 | 10.53 | 9.74 | 0.606 | 0.681 | -7.89 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 17.48 | 53.4% | 0.148 | 6.89 | 2.54 | 0.205 | 0.091 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + R:R tối thiểu riêng khung 1D → 2 + % chốt ở TP1 → 0.287 | 95.3 | 45.6% | 0.557 | 9.37 | 10.17 | 0.607 | 0.512 | -10.02 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 112.61 | 47.6% | 0.687 | 10.19 | 11.05 | 0.676 | 0.697 | -6.35 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 100.79 | 48% | 0.672 | 9.64 | 10.46 | 0.475 | 0.903 | -9.32 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần Entry (/100) → 28 | 35.03 | 40.2% | 0.403 | 10.31 | 3.4 | 0.324 | 0.504 | -8.58 |  |

### Vòng 615 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.54R, lời÷rủi ro 15.08

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 28.19 | 57.7% | 0.181 | 5.79 | 4.87 | 0.252 | 0.113 | -10.48 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 109.9 | 49% | 0.718 | 9.09 | 12.09 | 0.691 | 0.75 | -8.93 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: POC anchored → 4 | 111.47 | 51% | 0.758 | 7.92 | 14.07 | 0.601 | 0.922 | -4.48 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 70.07 | 46.7% | 0.667 | 8.89 | 7.88 | 0.473 | 0.898 | -6.48 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 27.42 | 58.1% | 0.177 | 6.31 | 4.35 | 0.234 | 0.12 | -10.26 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 81.99 | 49.6% | 0.713 | 8.22 | 9.97 | 0.559 | 0.893 | -16.13 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Elliott (/100) → 10 | 109.88 | 48.5% | 0.808 | 8.47 | 12.97 | 0.597 | 1.06 | -8.91 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm tối thiểu của vùng đặt SL → 4 | 108.06 | 51.4% | 0.75 | 7.82 | 13.82 | 0.61 | 0.903 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: POC volume profile cố định → 0.688 | 92 | 45.5% | 0.551 | 9.48 | 9.7 | 0.527 | 0.573 | -6.33 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Ngưỡng điểm vào kèo → 74 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 101.24 | 38.5% | 0.382 | 16.37 | 6.18 | 0.402 | 0.364 | -4.38 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: POC anchored → 2 + Trọng số phần Elliott (/100) → 10 | 97.16 | 49% | 0.652 | 8.62 | 11.27 | 0.531 | 0.785 | -8.64 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1D (ATR) → 0.3 | 78.49 | 36% | 0.294 | 21.1 | 3.72 | 0.336 | 0.258 | -7.19 |  |

### Vòng 614 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.48R, lời÷rủi ro 15.20

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 75.04 | 47.4% | 0.647 | 9.09 | 8.26 | 0.433 | 0.91 | -7.06 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 67.69 | 45% | 0.517 | 11.03 | 6.14 | 0.377 | 0.668 | -10.12 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 93.2 | 50% | 0.696 | 8.36 | 11.15 | 0.607 | 0.795 | -8.27 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 70.74 | 46.1% | 0.553 | 9.7 | 7.29 | 0.45 | 0.665 | -8.96 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu riêng khung 1W → 2 | 105.44 | 51.7% | 0.727 | 7.77 | 13.57 | 0.648 | 0.808 | -10.7 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần Elliott (/100) → 6 | 112.49 | 52.4% | 0.776 | 7.6 | 14.8 | 0.635 | 0.935 | -8.34 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: POC anchored → 4 | 107.46 | 49.7% | 0.721 | 8.36 | 12.85 | 0.5 | 0.951 | -4.25 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 55.31 | 42.3% | 0.498 | 11.15 | 4.96 | 0.374 | 0.649 | -7.92 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Elliott (/100) → 10 + Đệm SL riêng khung 4H (ATR) → 0.3 | 140.01 | 37.2% | 0.449 | 18.84 | 7.43 | 0.321 | 0.568 | -11.98 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần Momentum (/100) → 21 | 108.06 | 50.7% | 0.761 | 7.76 | 13.93 | 0.513 | 1.031 | -9.52 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 93.89 | 38.7% | 0.236 | 15.78 | 5.95 | 0.237 | 0.235 | -15.57 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: EMA 21 → 0.875 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 111.08 | 50.7% | 0.771 | 8.13 | 13.66 | 0.646 | 0.911 | -9.66 |  |

### Vòng 613 — ngẫu nhiên nhiều thông số · mốc: tổng 109.21R, win 51.7%, rủi ro tụt vốn 8.17R, lời÷rủi ro 13.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Khung lớn phải tăng (trend ≥) → 0.425 | 95.07 | 48.9% | 0.694 | 8.42 | 11.29 | 0.447 | 0.96 | -10.81 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Momentum (/100) → 25 | 90.06 | 41.5% | 0.527 | 13.65 | 6.6 | 0.565 | 0.493 | -5.78 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Divergence (/100) → 9 + Xác nhận khung nhỏ (A2) → W | 90.48 | 37.9% | 0.327 | 18.21 | 4.97 | 0.324 | 0.329 | -2.3 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: POC anchored → 4 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 127.86 | 50.3% | 0.794 | 8.41 | 15.2 | 0.777 | 0.813 | -5.21 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: POC volume profile cố định → 0.813 | 28.43 | 57.7% | 0.182 | 6.03 | 4.71 | 0.212 | 0.153 | -8.98 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Vùng RSI 45–55 → 0.875 + % chốt ở TP1 → 0.307 + Lệnh chờ hết hạn sau (nến) → 6 | 66.27 | 48.6% | 0.631 | 8.44 | 7.85 | 0.504 | 0.788 | -15.08 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 21 → 0.875 | 113.98 | 46.3% | 0.704 | 10.7 | 10.65 | 0.732 | 0.678 | -6.35 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 57.45 | 38.8% | 0.256 | 14.76 | 3.89 | 0.257 | 0.256 | -7.58 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 87.23 | 46.4% | 0.632 | 9.18 | 9.5 | 0.626 | 0.638 | -9.79 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: EMA 200 → 3 + R:R tối thiểu tới TP1 → 2.63 | 84.87 | 49.6% | 0.713 | 8.25 | 10.29 | 0.387 | 1.045 | -9.58 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: EMA 21 → 1.13 + Cộng điểm phân kỳ dương ẩn → 3 | 102.83 | 50% | 0.704 | 8.07 | 12.74 | 0.582 | 0.841 | -9.98 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: POC anchored → 4 + Trọng số phần SL (/100) → 9 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 94.89 | 48.9% | 0.703 | 8.28 | 11.46 | 0.606 | 0.814 | -4.71 |  |

### Vòng 612 — ngẫu nhiên nhiều thông số · mốc: tổng 114.24R, win 53.5%, rủi ro tụt vốn 7.49R, lời÷rủi ro 15.25

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Cổng Dow → CHẶT + Điểm vùng: HVN anchored → 0.188 + Lệnh chờ hết hạn sau (nến) → 6 | 67.2 | 51.5% | 0.665 | 6.98 | 9.63 | 0.362 | 0.952 | -10.94 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 36.21 | 39.3% | 0.323 | 12.2 | 2.97 | 0.42 | 0.212 | -4.06 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Cộng điểm phân kỳ dương ẩn → 3 | 109.6 | 53.1% | 0.746 | 7.67 | 14.29 | 0.595 | 0.925 | -9.66 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 102.17 | 48.2% | 0.725 | 9.02 | 11.33 | 0.714 | 0.737 | -8.85 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Momentum (/100) → 25 | 111.89 | 51.8% | 0.794 | 7.25 | 15.43 | 0.647 | 0.961 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 109.3 | 51% | 0.754 | 8 | 13.66 | 0.591 | 0.943 | -9.66 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC anchored → 4 + Đệm SL riêng khung 1D (ATR) → 0.3 | 59.79 | 40.5% | 0.539 | 11.71 | 5.11 | 0.278 | 0.753 | -2.28 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Cổng Dow → TẮT + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + R:R tối thiểu tới TP1 → 2.63 | 99.63 | 40.8% | 0.59 | 11.69 | 8.52 | 0.459 | 0.718 | -17.72 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Cộng thêm ngưỡng điểm khung 1W → 2 | 113.61 | 52.8% | 0.8 | 7.53 | 15.09 | 0.641 | 0.983 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.563 | 104.28 | 47.6% | 0.628 | 10.34 | 10.09 | 0.684 | 0.576 | -6.47 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Break mây Ichimoku → 3 | 103.97 | 50% | 0.658 | 9 | 11.55 | 0.506 | 0.839 | -9.41 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 80.49 | 45.6% | 0.503 | 9.94 | 8.1 | 0.418 | 0.586 | -10.08 |  |

### Vòng 611 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.52R, lời÷rủi ro 15.12

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Mức MACD → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Đệm SL riêng khung 1W (ATR) → 0.3 | 88.77 | 47.7% | 0.673 | 9.06 | 9.8 | 0.405 | 0.902 | -10.7 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: HVN cố định → 0.563 + R:R tối thiểu riêng khung 1D → 2 | 98.84 | 45.4% | 0.568 | 9.55 | 10.35 | 0.591 | 0.546 | -7.92 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: BOS → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + R:R tối thiểu tới TP1 → 2.38 | 61.72 | 45.2% | 0.457 | 9.96 | 6.2 | 0.565 | 0.347 | -17.69 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 97.84 | 44.8% | 0.562 | 9.78 | 10 | 0.564 | 0.561 | -10.59 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 19.77 | 39.7% | 0.271 | 12.28 | 1.61 | 0.195 | 0.368 | -13.14 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: POC anchored → 2 + % chốt ở TP1 → 0.287 | 101.46 | 49.4% | 0.619 | 9.33 | 10.87 | 0.502 | 0.754 | -8.61 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: POC anchored → 2 | 65.63 | 44.8% | 0.382 | 11.77 | 5.58 | 0.481 | 0.291 | -14.91 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: HVN anchored → 0.188 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 108.66 | 50.7% | 0.776 | 7.69 | 14.13 | 0.621 | 0.95 | -12.92 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 1D → 5 | 95.6 | 38.6% | 0.381 | 16.22 | 5.89 | 0.378 | 0.384 | -3.73 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Lệnh chờ hết hạn sau (nến) → 6 | 94.66 | 50.8% | 0.717 | 7.77 | 12.18 | 0.607 | 0.845 | -8.27 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Fib sóng 4 → 0.938 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 78.88 | 44% | 0.526 | 10.36 | 7.61 | 0.408 | 0.66 | -5.03 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: POC anchored → 2 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 88.99 | 46.9% | 0.605 | 9.93 | 8.96 | 0.43 | 0.765 | -9.67 |  |

### Vòng 610 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.57R, lời÷rủi ro 15.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cổng Dow → TẮT + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: EMA 21 → 0.875 + Cộng thêm ngưỡng điểm khung 4H → -1 | 109.92 | 42.2% | 0.521 | 13.23 | 8.31 | 0.484 | 0.556 | -20.49 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 1D → 2 | 60.18 | 40.3% | 0.485 | 11.24 | 5.35 | 0.43 | 0.534 | -5.79 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: EMA 50 → 0.75 | 110.75 | 52.9% | 0.791 | 7.48 | 14.81 | 0.621 | 0.982 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 110.75 | 51.7% | 0.753 | 8 | 13.84 | 0.614 | 0.912 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm tối thiểu của vùng đặt SL → 2 + R:R tối thiểu riêng khung 1W → 2 | 102.78 | 50.7% | 0.704 | 8.15 | 12.61 | 0.631 | 0.777 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + % chốt ở TP1 → 0.307 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 97.64 | 48.9% | 0.702 | 8.78 | 11.12 | 0.647 | 0.768 | -8.73 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Xác nhận khung nhỏ (A2) → W + Trọng số phần Entry (/100) → 28 | 92.93 | 38.4% | 0.372 | 16.57 | 5.61 | 0.348 | 0.394 | -3.73 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Vùng RSI 45–55 → 0.875 | 98.36 | 39.4% | 0.387 | 15.85 | 6.21 | 0.409 | 0.367 | -2.95 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Khung lớn phải tăng (trend ≥) → 0.375 | 105.32 | 51% | 0.726 | 8.29 | 12.7 | 0.564 | 0.91 | -10.63 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Ngưỡng điểm vào kèo → 77 | 107.7 | 51.1% | 0.775 | 7.74 | 13.91 | 0.669 | 0.892 | -8.34 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Khung lớn phải tăng (trend ≥) → 0.425 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 67.16 | 43.4% | 0.442 | 10.91 | 6.16 | 0.306 | 0.571 | -12.23 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Break mây Ichimoku → 3 | 93.95 | 48.1% | 0.587 | 9.61 | 9.78 | 0.502 | 0.674 | -9.4 |  |

### Vòng 609 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.61R, lời÷rủi ro 14.94

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 50 → 0.75 + Cộng thêm ngưỡng điểm khung 1D → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 99.37 | 46.7% | 0.595 | 11.23 | 8.85 | 0.643 | 0.553 | -5.5 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Đệm SL riêng khung 4H (ATR) → 0.3 | 153.99 | 39.1% | 0.533 | 17.87 | 8.62 | 0.37 | 0.699 | -14.44 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Cộng điểm phân kỳ dương ẩn → 2.25 | 98.52 | 41.3% | 0.478 | 12.93 | 7.62 | 0.434 | 0.526 | -16.2 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: EMA 200 → 3 | 96.75 | 48.1% | 0.62 | 9.43 | 10.26 | 0.424 | 0.844 | -7.04 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 94.85 | 44.2% | 0.524 | 10.39 | 9.13 | 0.45 | 0.597 | -8.86 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + R:R tối thiểu riêng khung 1W → 2 | 93.2 | 47.4% | 0.613 | 8.69 | 10.72 | 0.577 | 0.645 | -11.23 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + R:R tối thiểu tới TP1 → 2.38 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Cộng điểm phân kỳ dương ẩn → 2.25 | 100.78 | 47.9% | 0.618 | 8.61 | 11.7 | 0.555 | 0.681 | -5.2 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN anchored → 0.313 | 99.98 | 39.9% | 0.327 | 13.41 | 7.46 | 0.308 | 0.343 | -11.29 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 101.95 | 49.3% | 0.698 | 8.3 | 12.28 | 0.55 | 0.842 | -11.02 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Mức MACD → 1.13 | 106.88 | 49.6% | 0.758 | 7.75 | 13.79 | 0.584 | 0.962 | -12.92 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Cộng thêm ngưỡng điểm khung 1D → 5 | 113.49 | 52.8% | 0.788 | 7.37 | 15.4 | 0.624 | 0.982 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Số TP tối đa → 2 + Cộng thêm ngưỡng điểm khung 1W → -1 | 113.51 | 52.7% | 0.777 | 7.8 | 14.55 | 0.6 | 0.993 | -9.66 |  |

### Vòng 608 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.57R, lời÷rủi ro 15.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 1D → 3 + Trọng số phần R:R (/100) → 28 + Điểm vùng: MACD cắt lên Signal → 0.438 | 104.01 | 48.7% | 0.675 | 9.01 | 11.54 | 0.518 | 0.859 | -6.9 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: EMA 50 → 0.75 + Cộng thêm ngưỡng điểm khung 4H → 2 | 106.31 | 52.2% | 0.77 | 7.44 | 14.29 | 0.626 | 0.933 | -9.66 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 70.62 | 45.7% | 0.547 | 9.54 | 7.4 | 0.45 | 0.652 | -9.15 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 59.96 | 45.9% | 0.612 | 8.93 | 6.71 | 0.419 | 0.839 | -6.53 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 111.78 | 52.1% | 0.766 | 7.71 | 14.5 | 0.635 | 0.912 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Cổng Dow → CHẶT + Điểm vùng: Mức RSI 30/70 → 1.13 | 79.38 | 52.3% | 0.728 | 7.06 | 11.24 | 0.324 | 1.084 | -10.72 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + SL tối đa (% Entry) → 0.425 | 96.57 | 49.3% | 0.68 | 8.3 | 11.63 | 0.462 | 0.938 | -11.51 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 121.94 | 50% | 0.792 | 8.45 | 14.43 | 0.757 | 0.834 | -10.24 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: POC volume profile cố định → 0.813 | 107.25 | 51.3% | 0.706 | 7.98 | 13.44 | 0.558 | 0.883 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 24.81 | 55.2% | 0.144 | 7.52 | 3.3 | 0.207 | 0.08 | -11 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 | 78.3 | 43.9% | 0.529 | 9.67 | 8.1 | 0.573 | 0.485 | -14.39 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần Divergence (/100) → 12 | 113.69 | 53.1% | 0.795 | 7.57 | 15.02 | 0.635 | 0.982 | -9.66 |  |
