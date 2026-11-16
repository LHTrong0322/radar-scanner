# Tối ưu tự động (chạy liên tục) — vòng 456

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 5142 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46.6% | 94.27R | 0.586 | 5.72R | 9.84R | 9.58 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 145 | 53.1% | 117.2R | 0.808 | 6.15R | 7.4R | 15.84 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 107 | 54.2% | 90.05R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46.6% | 94.27R | 9.84R | 9.58 | 32 | 12.5% | -14.03R |
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

### Vòng 456 — ngẫu nhiên nhiều thông số · mốc: tổng 117.2R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 15.84

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 123.83 | 50.6% | 0.784 | 8.35 | 14.83 | 0.746 | 0.829 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + % chốt ở TP1 → 0.287 + Điểm vùng: MACD cắt lên Signal → 0.438 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 65.67 | 44.1% | 0.592 | 10.51 | 6.25 | 0.385 | 0.818 | -4.3 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Cộng thêm ngưỡng điểm khung 1D → 4 | 116.95 | 53.1% | 0.807 | 7.47 | 15.66 | 0.635 | 1.001 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: POC anchored → 4 | 99.36 | 48.3% | 0.695 | 9.35 | 10.63 | 0.532 | 0.851 | -4.48 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng điểm phân kỳ dương ẩn → 2.63 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu riêng khung 1D → 2 | 28.6 | 55.6% | 0.153 | 6.83 | 4.19 | 0.197 | 0.116 | -9.38 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 113.41 | 52.4% | 0.772 | 7.54 | 15.04 | 0.602 | 0.969 | -10.63 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Trọng số phần SL (/100) → 7 + R:R tối thiểu tới TP1 → 2.38 | 100.56 | 47.2% | 0.632 | 8.59 | 11.71 | 0.541 | 0.72 | -10.97 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 112.77 | 51.7% | 0.789 | 7.61 | 14.82 | 0.578 | 1.034 | -10.95 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: EMA 21 → 1.13 | 68.86 | 46.2% | 0.65 | 8.78 | 7.84 | 0.449 | 0.883 | -6.83 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Số TP tối đa → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Entry (/100) → 28 | 100.63 | 46% | 0.625 | 8.91 | 11.29 | 0.553 | 0.691 | -9.86 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: HVN cố định → 0.563 | 98.43 | 50.7% | 0.735 | 7.67 | 12.83 | 0.585 | 0.914 | -8.27 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + SL tối đa (% Entry) → 0.35 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 103.4 | 49% | 0.703 | 8.34 | 12.4 | 0.521 | 0.909 | -11.19 |  |

### Vòng 455 — ngẫu nhiên nhiều thông số · mốc: tổng 117.2R, win 53.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 15.92

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + % chốt ở TP1 → 0.287 | 117.03 | 53.1% | 0.807 | 7.37 | 15.88 | 0.621 | 1.024 | -9.64 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: EMA 21 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 106.49 | 52.3% | 0.687 | 7.88 | 13.51 | 0.602 | 0.786 | -9.77 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 | 113.59 | 53% | 0.762 | 7.95 | 14.29 | 0.624 | 0.914 | -9.66 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: HVN anchored → 0.188 + Cộng thêm ngưỡng điểm khung 1W → 2 | 115.82 | 52.1% | 0.793 | 7.64 | 15.16 | 0.63 | 0.975 | -8.34 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Fib sóng 4 → 0.938 | 104.87 | 46.2% | 0.621 | 9.03 | 11.61 | 0.591 | 0.648 | -7.92 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Vùng RSI 45–55 → 1.13 + R:R tối thiểu tới TP1 → 2.38 | 86.63 | 45.6% | 0.541 | 9.2 | 9.42 | 0.497 | 0.586 | -10.97 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 112.49 | 49.6% | 0.821 | 8.17 | 13.77 | 0.603 | 1.085 | -8.91 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: POC anchored → 4 + Đệm SL riêng khung 1W (ATR) → 0.3 | 88.87 | 47.3% | 0.6 | 10.53 | 8.44 | 0.551 | 0.646 | -5.61 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: BOS → 1 | 113.41 | 52.4% | 0.772 | 7.76 | 14.61 | 0.602 | 0.969 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần SL (/100) → 7 | 115.97 | 52.7% | 0.784 | 7.62 | 15.22 | 0.586 | 1.023 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 115.86 | 53.1% | 0.799 | 7.39 | 15.68 | 0.623 | 1.004 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Trọng số phần Elliott (/100) → 6 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 70.54 | 46.7% | 0.659 | 8.24 | 8.56 | 0.449 | 0.899 | -6.83 |  |

### Vòng 454 — ngẫu nhiên nhiều thông số · mốc: tổng 117.2R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 15.84

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + % chốt ở TP1 → 0.307 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: EMA 200 → 1 | 98.47 | 48.7% | 0.631 | 8.86 | 11.11 | 0.507 | 0.772 | -8.79 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 111.29 | 50.7% | 0.762 | 7.92 | 14.05 | 0.486 | 1.071 | -9.52 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: HVN anchored → 0.313 | 84.92 | 44.9% | 0.578 | 10.05 | 8.45 | 0.398 | 0.798 | -9.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 | 104.6 | 42.1% | 0.551 | 12.73 | 8.22 | 0.576 | 0.53 | -5.55 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Trọng số phần Entry (/100) → 28 + Điểm vùng: EMA 200 → 1 + Trọng số phần Divergence (/100) → 9 | 114.15 | 51% | 0.746 | 8 | 14.27 | 0.635 | 0.881 | -4.67 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Số TP tối đa → 2 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 100.68 | 49.6% | 0.714 | 7.97 | 12.63 | 0.557 | 0.878 | -9.62 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Cổng Dow → TẮT + Ngưỡng điểm vào kèo → 74 + Trọng số phần Trend (/100) → 19 | 128.02 | 44.1% | 0.634 | 10.88 | 11.77 | 0.618 | 0.647 | -17.19 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + R:R tối thiểu tới TP1 → 2.63 + R:R tối thiểu riêng khung 1D → 2 | 114.16 | 41.1% | 0.338 | 12.77 | 8.94 | 0.382 | 0.303 | -10.34 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 114.49 | 49.7% | 0.748 | 8.39 | 13.65 | 0.584 | 0.938 | -10.69 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Mức MACD → 1.13 + Đệm SL riêng khung 1W (ATR) → 0.3 | 90.55 | 37.2% | 0.379 | 16.55 | 5.47 | 0.316 | 0.434 | -4.59 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 65.94 | 44.5% | 0.554 | 10.59 | 6.23 | 0.52 | 0.598 | -6.33 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 3 + R:R tối thiểu tới TP1 → 2.63 | 108.93 | 48% | 0.717 | 10.06 | 10.83 | 0.642 | 0.793 | -9.49 |  |

### Vòng 453 — ngẫu nhiên nhiều thông số · mốc: tổng 120.04R, win 53.5%, rủi ro tụt vốn 7R, lời÷rủi ro 17.15

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + R:R tối thiểu riêng khung 1D → 2 | 114.94 | 48.2% | 0.692 | 8.42 | 13.65 | 0.646 | 0.739 | -6.12 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: EMA 21 → 1.13 | 113.73 | 52.1% | 0.779 | 7.36 | 15.45 | 0.598 | 0.992 | -8.2 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Đệm SL riêng khung 4H (ATR) → 0.3 | 145.02 | 37.4% | 0.488 | 20.12 | 7.21 | 0.299 | 0.684 | -8.19 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu riêng khung 1W → 2 | 24.28 | 53.3% | 0.145 | 6.7 | 3.62 | 0.196 | 0.099 | -9.37 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Break mây Ichimoku → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Đệm SL riêng khung 1D (ATR) → 0.3 | 102.32 | 46.1% | 0.664 | 10.14 | 10.09 | 0.691 | 0.641 | -5.27 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: BOS → 3 + Cộng điểm phân kỳ dương ẩn → 3.5 | 118.98 | 50.3% | 0.788 | 8.1 | 14.69 | 0.611 | 0.992 | -8.89 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + % chốt ở TP1 → 0.287 | 119.67 | 53.1% | 0.825 | 7.34 | 16.3 | 0.611 | 1.082 | -7.84 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: EMA 21 → 1.13 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: POC volume profile cố định → 0.688 | 104.74 | 50.7% | 0.708 | 7.6 | 13.78 | 0.561 | 0.871 | -9.24 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: EMA 21 → 1.13 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Mức MACD → 1.13 | 107.17 | 50.7% | 0.714 | 8 | 13.4 | 0.505 | 0.948 | -10.08 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần Elliott (/100) → 10 | 110.54 | 48.2% | 0.807 | 8.29 | 13.33 | 0.572 | 1.032 | -8.2 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: EMA 200 → 3 + R:R tối thiểu riêng khung 1D → 2 + Khung lớn phải tăng (trend ≥) → 0.375 | 98.88 | 46% | 0.607 | 9.37 | 10.55 | 0.483 | 0.723 | -6.09 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 1W → -1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 78.51 | 45.5% | 0.714 | 8.89 | 8.83 | 0.608 | 0.846 | -4.04 |  |

### Vòng 452 — ngẫu nhiên nhiều thông số · mốc: tổng 117.2R, win 53.1%, rủi ro tụt vốn 7.29R, lời÷rủi ro 16.08

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Trọng số phần R:R (/100) → 28 + Điểm vùng: POC anchored → 2 + Lệnh chờ hết hạn sau (nến) → 6 | 89.99 | 47.9% | 0.643 | 8.8 | 10.23 | 0.501 | 0.797 | -7.24 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Ngưỡng điểm vào kèo → 77 | 109.82 | 48.3% | 0.737 | 8.56 | 12.83 | 0.656 | 0.824 | -9.64 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Trọng số phần SL (/100) → 7 + Trọng số phần Entry (/100) → 28 | 117.2 | 53.1% | 0.808 | 7.29 | 16.08 | 0.624 | 1.023 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: HVN cố định → 0.438 | 112.21 | 51% | 0.785 | 7.7 | 14.57 | 0.616 | 0.971 | -8.64 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: BOS → 3 | 116.28 | 52.7% | 0.796 | 7.48 | 15.55 | 0.621 | 0.998 | -8.33 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 100.75 | 51.7% | 0.685 | 8.19 | 12.3 | 0.637 | 0.74 | -9.46 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + R:R tối thiểu tới TP1 → 2.38 + Khung lớn phải tăng (trend ≥) → 0.425 | 84.75 | 44.6% | 0.54 | 9.5 | 8.92 | 0.469 | 0.608 | -11.01 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 108.36 | 46.6% | 0.665 | 10.42 | 10.4 | 0.687 | 0.644 | -8.97 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Mức MACD → 0.875 | 107.63 | 51.8% | 0.763 | 7.58 | 14.2 | 0.603 | 0.941 | -9.66 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 1W → 2 | 80.97 | 48.8% | 0.658 | 8.87 | 9.13 | 0.548 | 0.778 | -16.13 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: POC volume profile cố định → 0.813 | 102.97 | 50% | 0.696 | 8.07 | 12.76 | 0.55 | 0.849 | -9.5 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Đệm SL riêng khung 1D (ATR) → 0.3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 110.81 | 43.9% | 0.616 | 11.72 | 9.45 | 0.685 | 0.548 | -3.7 |  |

### Vòng 451 — ngẫu nhiên nhiều thông số · mốc: tổng 117.2R, win 53.1%, rủi ro tụt vốn 7.42R, lời÷rủi ro 15.80

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số TP tối đa → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + R:R tối thiểu riêng khung 1D → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 | 96.07 | 46.2% | 0.616 | 9.92 | 9.68 | 0.563 | 0.663 | -8.58 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Momentum (/100) → 25 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Cộng thêm ngưỡng điểm khung 4H → 2 | 104.49 | 47.4% | 0.67 | 8.82 | 11.85 | 0.574 | 0.768 | -11.73 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Mức MACD → 1.13 + Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần Entry (/100) → 33 | 93.77 | 48.5% | 0.7 | 8.47 | 11.07 | 0.55 | 0.879 | -8.27 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Cộng thêm ngưỡng điểm khung 4H → -1 | 117.01 | 52.7% | 0.801 | 7.44 | 15.73 | 0.614 | 1.023 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm tối thiểu của vùng đặt SL → 4 | 113.26 | 51.7% | 0.781 | 7.66 | 14.79 | 0.63 | 0.952 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.35 + Xác nhận khung nhỏ (A2) → W | 85.79 | 37.4% | 0.334 | 17.64 | 4.86 | 0.285 | 0.381 | -1.52 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Trọng số phần Momentum (/100) → 21 | 117.01 | 52.7% | 0.801 | 7.44 | 15.73 | 0.614 | 1.023 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + R:R tối thiểu riêng khung 1W → 2 | 106.53 | 50.7% | 0.72 | 7.84 | 13.59 | 0.615 | 0.827 | -10.7 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29 | 56.1% | 0.177 | 6.05 | 4.79 | 0.22 | 0.139 | -10.99 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Divergence (/100) → 9 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 115.45 | 52.4% | 0.785 | 7.63 | 15.13 | 0.604 | 0.997 | -8.34 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 32.74 | 39.3% | 0.226 | 15.83 | 2.07 | 0.258 | 0.194 | -15.61 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Cổng Dow → TẮT + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 112.65 | 43.2% | 0.467 | 12.28 | 9.17 | 0.433 | 0.501 | -7.54 |  |

### Vòng 450 — ngẫu nhiên nhiều thông số · mốc: tổng 117.19R, win 53.1%, rủi ro tụt vốn 7.34R, lời÷rủi ro 15.97

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Elliott (/100) → 6 + R:R tối thiểu riêng khung 1D → 2 | 68.3 | 39.8% | 0.514 | 12.49 | 5.47 | 0.433 | 0.572 | -6.86 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Cộng thêm ngưỡng điểm khung 1D → 7 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm tối thiểu của vùng đặt SL → 4 | 111.21 | 48.4% | 0.727 | 8.53 | 13.04 | 0.59 | 0.881 | -10.69 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Fib sóng 4 → 0.938 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.57 | 58.3% | 0.19 | 5.77 | 5.12 | 0.266 | 0.12 | -11.19 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Cổng Dow → TẮT | 121.08 | 44% | 0.605 | 11.26 | 10.75 | 0.461 | 0.747 | -17.54 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Fib sóng 4 → 0.938 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.84 | 63.8% | 0.23 | 4.82 | 6.19 | 0.231 | 0.228 | -7.78 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + R:R tối thiểu tới TP1 → 2.63 | 98.64 | 51.2% | 0.815 | 7.77 | 12.69 | 0.557 | 1.096 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + % chốt ở TP1 → 0.307 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 116.39 | 52.1% | 0.831 | 7.28 | 15.99 | 0.665 | 1.023 | -14.22 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 88.34 | 40.7% | 0.274 | 14.62 | 6.04 | 0.364 | 0.193 | -16.01 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Khung lớn phải tăng (trend ≥) → 0.425 | 111.24 | 40.7% | 0.365 | 12.92 | 8.61 | 0.308 | 0.413 | -8.41 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + % chốt ở TP1 → 0.307 + Cộng thêm ngưỡng điểm khung 4H → 2 | 110.6 | 51.7% | 0.763 | 7.68 | 14.4 | 0.63 | 0.913 | -10.01 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: HVN anchored → 0.313 + Cộng thêm ngưỡng điểm khung 4H → 2 | 62.32 | 40.7% | 0.507 | 10.88 | 5.73 | 0.44 | 0.566 | -5.79 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Trọng số phần Trend (/100) → 19 | 116.21 | 52.4% | 0.791 | 7.52 | 15.45 | 0.624 | 0.979 | -9.66 |  |

### Vòng 449 — ngẫu nhiên nhiều thông số · mốc: tổng 117.19R, win 53.1%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.14

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Ngưỡng điểm vào kèo → 74 + SL tối đa (% Entry) → 0.425 | 111.14 | 51% | 0.746 | 7.76 | 14.32 | 0.585 | 0.927 | -10.63 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + % chốt ở TP1 → 0.307 | 103.18 | 51.4% | 0.748 | 7.72 | 13.37 | 0.53 | 1 | -11.52 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + % chốt ở TP1 → 0.287 | 118.27 | 52.4% | 0.827 | 7.37 | 16.05 | 0.667 | 1.013 | -12.9 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Ngưỡng điểm vào kèo → 77 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Divergence (/100) → 9 | 83.02 | 44.4% | 0.55 | 10.25 | 8.1 | 0.489 | 0.615 | -7.82 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: HVN cố định → 0.438 | 97.3 | 50% | 0.657 | 8.06 | 12.07 | 0.586 | 0.742 | -10.71 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Mức MACD → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 114.1 | 49.7% | 0.756 | 8.28 | 13.78 | 0.701 | 0.82 | -10.24 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Xác nhận khung nhỏ (A2) → W + Coin phải mạnh hơn BTC trong N ngày → 14 | 45.88 | 37.9% | 0.235 | 18.84 | 2.44 | 0.148 | 0.31 | -11.27 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Xác nhận khung nhỏ (A2) → W + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 85.44 | 38.4% | 0.319 | 16.84 | 5.07 | 0.384 | 0.255 | -3.23 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Divergence (/100) → 9 | 98.52 | 47.2% | 0.62 | 8.62 | 11.43 | 0.527 | 0.708 | -10.97 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 118.24 | 52.1% | 0.821 | 7.37 | 16.04 | 0.659 | 1.012 | -12.92 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Cổng Dow → CHẶT | 77.63 | 49.6% | 0.621 | 8.13 | 9.55 | 0.266 | 0.948 | -12.31 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 159.74 | 38.8% | 0.553 | 18.14 | 8.81 | 0.372 | 0.732 | -10.51 |  |

### Vòng 448 — ngẫu nhiên nhiều thông số · mốc: tổng 114.86R, win 52.4%, rủi ro tụt vốn 7.54R, lời÷rủi ro 15.23

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Cổng Dow → CHẶT + Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 84.68 | 54.9% | 0.694 | 7.35 | 11.52 | 0.441 | 0.924 | -10.06 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Số TP tối đa → 2 + % chốt ở TP1 → 0.307 | 128.46 | 50.6% | 0.823 | 8.13 | 15.8 | 0.765 | 0.891 | -12.57 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 7 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 114.91 | 52.1% | 0.798 | 7.54 | 15.24 | 0.624 | 0.992 | -9.62 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Trọng số phần SL (/100) → 9 + Điểm vùng: Break mây Ichimoku → 1 | 95.28 | 47.3% | 0.644 | 9.37 | 10.17 | 0.441 | 0.87 | -12.03 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Momentum (/100) → 21 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 41.12 | 39.3% | 0.337 | 13.23 | 3.11 | 0.302 | 0.371 | -11.12 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần SL (/100) → 9 | 164.17 | 38.1% | 0.549 | 18.24 | 9 | 0.412 | 0.683 | -15.7 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + R:R tối thiểu riêng khung 1W → 2 | 98.56 | 49% | 0.689 | 8.19 | 12.03 | 0.527 | 0.854 | -11.65 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 104.89 | 50% | 0.672 | 9.29 | 11.29 | 0.446 | 0.93 | -8.37 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Trọng số phần Entry (/100) → 33 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 83.11 | 52.1% | 0.71 | 7.15 | 11.62 | 0.323 | 1.02 | -14.4 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: HVN anchored → 0.188 + Đệm SL riêng khung 1D (ATR) → 0.3 | 82.28 | 41.6% | 0.445 | 13.31 | 6.18 | 0.528 | 0.38 | -7.84 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Trọng số phần Trend (/100) → 12 + Lệnh chờ hết hạn sau (nến) → 8 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 27.27 | 56.1% | 0.16 | 7.04 | 3.87 | 0.202 | 0.117 | -12.09 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Lệnh chờ hết hạn sau (nến) → 6 | 61.51 | 45.9% | 0.628 | 8.86 | 6.94 | 0.409 | 0.886 | -7.56 |  |

### Vòng 447 — ngẫu nhiên nhiều thông số · mốc: tổng 117.19R, win 53.1%, rủi ro tụt vốn 7.48R, lời÷rủi ro 15.67

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 70.17 | 46.6% | 0.595 | 9.6 | 7.31 | 0.459 | 0.772 | -6.48 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Ngưỡng điểm vào kèo → 77 + % chốt ở TP1 → 0.287 | 115.89 | 52.1% | 0.816 | 7.35 | 15.77 | 0.666 | 0.98 | -9.64 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 116.73 | 42.1% | 0.482 | 12.02 | 9.71 | 0.483 | 0.482 | -11.71 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 112.49 | 49.6% | 0.821 | 8.09 | 13.9 | 0.603 | 1.085 | -8.91 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Đệm SL riêng khung 1W (ATR) → 0.3 + SL tối đa (% Entry) → 0.35 | 101.29 | 48.5% | 0.745 | 8.36 | 12.12 | 0.485 | 0.99 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 7 | 120.39 | 52.2% | 0.757 | 8.16 | 14.75 | 0.577 | 0.98 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + % chốt ở TP1 → 0.287 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 134.77 | 37.3% | 0.457 | 20.2 | 6.67 | 0.309 | 0.598 | -14.45 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: HVN anchored → 0.313 + Số TP tối đa → 2 | 74.89 | 46.5% | 0.581 | 9.16 | 8.18 | 0.452 | 0.719 | -4.82 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Ngưỡng điểm vào kèo → 77 + Khung lớn phải tăng (trend ≥) → 0.425 | 110.11 | 50.4% | 0.792 | 7.72 | 14.26 | 0.584 | 1.029 | -8.67 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Trọng số phần Entry (/100) → 33 | 115.47 | 52.1% | 0.802 | 7.4 | 15.6 | 0.629 | 1 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Entry (/100) → 28 + Điểm vùng: POC volume profile cố định → 0.813 | 111.05 | 48.2% | 0.799 | 8.28 | 13.41 | 0.577 | 1.075 | -7.89 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 88.14 | 48.4% | 0.561 | 9.6 | 9.18 | 0.488 | 0.646 | -7.82 |  |
