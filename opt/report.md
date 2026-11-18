# Tối ưu tự động (chạy liên tục) — vòng 679

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 7803 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46.6% | 96.75R | 0.594 | 5.74R | 9.93R | 9.74 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 145 | 53.8% | 121.59R | 0.839 | 5.09R | 7.31R | 16.63 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 107 | 55.1% | 94.44R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46.6% | 96.75R | 9.93R | 9.74 | 32 | 12.5% | -14.03R |
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

### Vòng 679 — ngẫu nhiên nhiều thông số · mốc: tổng 121.59R, win 53.8%, rủi ro tụt vốn 7.31R, lời÷rủi ro 16.63

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 126.71 | 50.6% | 0.812 | 8.15 | 15.55 | 0.757 | 0.877 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 + R:R tối thiểu riêng khung 1D → 2 | 29.75 | 55.9% | 0.158 | 6.55 | 4.54 | 0.157 | 0.16 | -11.3 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Cộng thêm ngưỡng điểm khung 1D → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 | 120.47 | 53.1% | 0.82 | 7.37 | 16.35 | 0.618 | 1.047 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Trend (/100) → 12 | 109.35 | 51.7% | 0.754 | 7.74 | 14.13 | 0.594 | 0.926 | -11.78 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Break mây Ichimoku → 1 | 30.52 | 40.5% | 0.363 | 10.37 | 2.94 | 0.347 | 0.386 | -8.22 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: EMA 200 → 1 | 114.12 | 51.3% | 0.732 | 8.39 | 13.6 | 0.573 | 0.937 | -4.67 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Break mây Ichimoku → 3 | 108.82 | 49.1% | 0.66 | 9.51 | 11.44 | 0.534 | 0.8 | -9.4 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cộng thêm ngưỡng điểm khung 1D → 3 | 111.91 | 50% | 0.756 | 8.41 | 13.31 | 0.485 | 1.042 | -9.49 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: POC anchored → 4 | 122.09 | 53% | 0.819 | 7.54 | 16.19 | 0.617 | 1.024 | -4.76 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Cộng thêm ngưỡng điểm khung 1W → -1 | 121.59 | 53.8% | 0.839 | 7.31 | 16.63 | 0.635 | 1.069 | -9.66 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: EMA 200 → 1 | 113.87 | 51% | 0.725 | 8.65 | 13.16 | 0.582 | 0.904 | -3.35 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: EMA 200 → 3 + Điểm vùng: EMA 50 → 1.13 | 89.92 | 45.2% | 0.616 | 9.5 | 9.47 | 0.421 | 0.852 | -9.12 |  |

### Vòng 678 — ngẫu nhiên nhiều thông số · mốc: tổng 113.58R, win 51.4%, rủi ro tụt vốn 8.01R, lời÷rủi ro 14.18

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: MACD cắt lên Signal → 0.438 | 100.94 | 47.5% | 0.623 | 10.21 | 9.89 | 0.498 | 0.762 | -10.03 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Ngưỡng điểm vào kèo → 77 | 113.41 | 50.3% | 0.713 | 8.82 | 12.86 | 0.567 | 0.89 | -8.2 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần Divergence (/100) → 9 | 97.63 | 47.8% | 0.548 | 9.91 | 9.85 | 0.466 | 0.621 | -13.27 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 113.22 | 51% | 0.77 | 8.18 | 13.84 | 0.582 | 0.989 | -8.2 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 87.65 | 45.2% | 0.6 | 9.91 | 8.84 | 0.478 | 0.745 | -7.8 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 109.54 | 49.7% | 0.745 | 8.79 | 12.46 | 0.639 | 0.85 | -8.19 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + R:R tối thiểu riêng khung 1D → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 29.87 | 53.6% | 0.143 | 6.63 | 4.51 | 0.165 | 0.126 | -8.73 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Fib sóng 4 → 1.56 | 110.77 | 50% | 0.729 | 8.7 | 12.73 | 0.533 | 0.964 | -8.2 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: HVN cố định → 0.563 | 105.91 | 44.4% | 0.588 | 9.77 | 10.84 | 0.591 | 0.586 | -7.21 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 111.49 | 50% | 0.743 | 8.29 | 13.45 | 0.575 | 0.936 | -9.59 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 57.14 | 33.6% | 0.243 | 21.14 | 2.7 | 0.208 | 0.274 | -1.71 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 4H → 2 + R:R tối thiểu tới TP1 → 2.63 | 96.78 | 37.2% | 0.419 | 15.86 | 6.1 | 0.362 | 0.468 | -2.76 |  |

### Vòng 677 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.00

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Divergence (/100) → 12 + Cộng thêm ngưỡng điểm khung 1W → 2 | 100.85 | 50.7% | 0.7 | 8.27 | 12.19 | 0.671 | 0.732 | -9.42 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Xác nhận khung nhỏ (A2) → W + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm tối thiểu của vùng đặt SL → 2 | 106.11 | 39.3% | 0.397 | 16.39 | 6.47 | 0.379 | 0.415 | -2.72 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Lệnh chờ hết hạn sau (nến) → 6 | 100.37 | 49.3% | 0.727 | 8.61 | 11.66 | 0.516 | 0.979 | -8.11 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Fib sóng 4 → 0.938 + Số TP tối đa → 2 | 106.81 | 45.7% | 0.617 | 9.14 | 11.69 | 0.582 | 0.651 | -7.92 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 112.27 | 51.7% | 0.764 | 8.02 | 14 | 0.575 | 0.983 | -10.63 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Xác nhận khung nhỏ (A2) → W + % chốt ở TP1 → 0.307 | 106.16 | 40.2% | 0.426 | 15.01 | 7.07 | 0.438 | 0.417 | -4.34 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Khung lớn phải tăng (trend ≥) → 0.425 + % chốt ở TP1 → 0.287 + Trọng số phần R:R (/100) → 33 | 104.78 | 50.3% | 0.713 | 8.81 | 11.89 | 0.523 | 0.939 | -7.1 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần SL (/100) → 7 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 80.58 | 42.6% | 0.544 | 10.82 | 7.45 | 0.458 | 0.636 | -3.72 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 103.52 | 51.7% | 0.714 | 8.27 | 12.52 | 0.634 | 0.802 | -8.88 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Trọng số phần Entry (/100) → 28 + Trọng số phần Divergence (/100) → 9 | 117.59 | 52.7% | 0.805 | 7.38 | 15.93 | 0.621 | 1.017 | -9.64 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 2.25 | 103.97 | 47% | 0.626 | 10.87 | 9.56 | 0.676 | 0.581 | -4.48 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: POC anchored → 2 | 101.16 | 48.7% | 0.674 | 8.74 | 11.57 | 0.51 | 0.857 | -8.63 |  |

### Vòng 676 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.57R, lời÷rủi ro 15.64

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: POC volume profile cố định → 0.813 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + R:R tối thiểu riêng khung 1D → 2 | 76.45 | 45% | 0.513 | 10.52 | 7.27 | 0.549 | 0.48 | -7.86 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khung lớn phải tăng (trend ≥) → 0.375 | 98.87 | 51.4% | 0.677 | 8.19 | 12.07 | 0.606 | 0.756 | -10.86 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Fib sóng 4 → 0.938 | 98.06 | 51.1% | 0.749 | 7.62 | 12.87 | 0.591 | 0.93 | -7.25 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Mức MACD → 0.875 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: HVN anchored → 0.188 | 109.11 | 52.4% | 0.763 | 7.72 | 14.13 | 0.621 | 0.916 | -9.66 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: POC volume profile cố định → 0.688 | 101.87 | 49.6% | 0.722 | 8.41 | 12.11 | 0.465 | 1.024 | -11.51 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 107.86 | 52.4% | 0.744 | 7.8 | 13.83 | 0.589 | 0.914 | -11.78 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 88.11 | 45.8% | 0.612 | 9.49 | 9.28 | 0.429 | 0.834 | -9.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Trọng số phần Elliott (/100) → 6 | 117.92 | 53.1% | 0.813 | 7.46 | 15.81 | 0.635 | 1.015 | -9.66 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Biên mây Ichimoku → 1.35 | 99.75 | 38.8% | 0.391 | 16.59 | 6.01 | 0.368 | 0.413 | -0.69 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Mức MACD → 0.875 | 132.84 | 42.7% | 0.59 | 13.07 | 10.16 | 0.706 | 0.493 | -21.43 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 33.79 | 38.5% | 0.371 | 11.01 | 3.07 | 0.237 | 0.551 | -8.58 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm tối thiểu của vùng đặt SL → 4 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 109.23 | 50% | 0.769 | 8.04 | 13.59 | 0.513 | 1.033 | -9.51 |  |

### Vòng 675 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.48R, lời÷rủi ro 15.83

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 + SL tối đa (% Entry) → 0.425 | 89.96 | 49.6% | 0.743 | 8.21 | 10.96 | 0.539 | 0.973 | -16.15 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Trọng số phần R:R (/100) → 28 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 100.84 | 50% | 0.672 | 8.27 | 12.19 | 0.63 | 0.717 | -8.49 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 200 → 1 + Điểm vùng: Mức MACD → 0.875 | 63.88 | 45.5% | 0.57 | 9.65 | 6.62 | 0.444 | 0.711 | -2.71 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 76.16 | 47.7% | 0.712 | 8.35 | 9.12 | 0.473 | 0.984 | -6.48 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Break mây Ichimoku → 1 | 108.46 | 49% | 0.718 | 8.66 | 12.52 | 0.597 | 0.841 | -11.09 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: HVN anchored → 0.313 | 41.78 | 41.4% | 0.48 | 9.25 | 4.52 | 0.393 | 0.593 | -9.51 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib sóng 4 → 1.56 + Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu tới TP1 → 2.63 | 81.57 | 50.5% | 0.824 | 7.63 | 10.69 | 0.562 | 1.113 | -14.31 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Entry (/100) → 28 + Coin phải mạnh hơn BTC trong N ngày → 14 | 80.68 | 49.6% | 0.678 | 8.52 | 9.47 | 0.544 | 0.839 | -16.12 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: POC volume profile cố định → 0.688 | 117.36 | 53.1% | 0.809 | 7.47 | 15.71 | 0.635 | 1.007 | -11.06 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Break mây Ichimoku → 1 + SL tối đa (% Entry) → 0.425 | 27.19 | 57.8% | 0.157 | 6.44 | 4.22 | 0.185 | 0.134 | -6.11 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần Divergence (/100) → 9 | 116.92 | 52.7% | 0.801 | 7.65 | 15.28 | 0.635 | 0.986 | -9.66 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: EMA 50 → 0.75 | 115.92 | 53.5% | 0.816 | 7.32 | 15.84 | 0.621 | 1.029 | -9.66 |  |

### Vòng 674 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.59R, lời÷rủi ro 15.60

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Fib sóng 4 → 0.938 | 102.27 | 51% | 0.686 | 7.74 | 13.21 | 0.599 | 0.777 | -13.14 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Entry (/100) → 33 | 90.23 | 45.8% | 0.627 | 10 | 9.02 | 0.54 | 0.711 | -10.5 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: BOS → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Break mây Ichimoku → 3 | 94.29 | 47.2% | 0.586 | 9.79 | 9.63 | 0.493 | 0.682 | -8.62 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: EMA 50 → 0.75 | 114.22 | 50% | 0.84 | 8.12 | 14.07 | 0.635 | 1.084 | -8.91 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + R:R tối thiểu riêng khung 1D → 2 | 34.15 | 38.3% | 0.297 | 12.58 | 2.71 | 0.435 | 0.152 | -2.71 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 111.42 | 36.6% | 0.348 | 22.28 | 5 | 0.259 | 0.43 | -2.1 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Khung lớn phải tăng (trend ≥) → 0.375 | 120.94 | 49.7% | 0.77 | 8.42 | 14.36 | 0.71 | 0.842 | -10.24 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: BOS → 3 + Xác nhận khung nhỏ (A2) → W + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 92.98 | 36.6% | 0.41 | 16.77 | 5.54 | 0.328 | 0.49 | -6.82 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Biên mây Ichimoku → 1.05 | 107.86 | 52.4% | 0.744 | 7.82 | 13.79 | 0.589 | 0.914 | -11.78 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần Divergence (/100) → 9 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Elliott (/100) → 6 | 104.95 | 44.8% | 0.603 | 9.25 | 11.35 | 0.599 | 0.607 | -8.26 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: EMA 50 → 1.13 | 127.37 | 42.8% | 0.592 | 12.2 | 10.44 | 0.526 | 0.661 | -17.77 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Số TP tối đa → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 106.01 | 50.3% | 0.702 | 9.01 | 11.77 | 0.528 | 0.909 | -7.08 |  |

### Vòng 673 — ngẫu nhiên nhiều thông số · mốc: tổng 115.79R, win 53.5%, rủi ro tụt vốn 7.51R, lời÷rủi ro 15.42

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + R:R tối thiểu riêng khung 1W → 2 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Biên mây Ichimoku → 1.35 | 93.29 | 47.5% | 0.662 | 8.61 | 10.84 | 0.552 | 0.763 | -9.68 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Mức RSI 30/70 → 1.13 + Số TP tối đa → 2 + Điểm vùng: POC anchored → 4 | 115.17 | 52% | 0.778 | 7.67 | 15.02 | 0.623 | 0.938 | -4.48 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: HVN cố định → 0.563 | 87.86 | 51.3% | 0.764 | 7.82 | 11.24 | 0.552 | 1.021 | -16.13 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 110.46 | 50.7% | 0.8 | 7.94 | 13.91 | 0.626 | 0.996 | -13.33 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm vào kèo → 77 + Số TP tối đa → 2 | 160.31 | 38.1% | 0.555 | 17.88 | 8.97 | 0.331 | 0.783 | -18.56 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: BOS → 1 | 39.54 | 41.4% | 0.455 | 9.5 | 4.16 | 0.372 | 0.557 | -8.58 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần SL (/100) → 9 | 90.87 | 47% | 0.688 | 9.25 | 9.82 | 0.407 | 0.953 | -10.7 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Biên mây Ichimoku → 1.35 | 105.34 | 46.7% | 0.693 | 10.08 | 10.45 | 0.626 | 0.756 | -10.81 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 118.82 | 37.4% | 0.411 | 19.07 | 6.23 | 0.48 | 0.35 | -27.62 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm tối thiểu của vùng đặt SL → 4 | 105.41 | 50.7% | 0.742 | 7.96 | 13.24 | 0.672 | 0.814 | -8.95 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: HVN cố định → 0.438 + Cộng điểm phân kỳ dương ẩn → 3 | 109.74 | 47.3% | 0.657 | 10.01 | 10.96 | 0.665 | 0.65 | -6.36 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Trọng số phần Trend (/100) → 19 + Điểm vùng: EMA 200 → 1 + Cộng thêm ngưỡng điểm khung 4H → -1 | 116.26 | 51% | 0.741 | 8.4 | 13.84 | 0.611 | 0.91 | -4.67 |  |

### Vòng 672 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.48R, lời÷rủi ro 15.83

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần SL (/100) → 7 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 101.53 | 51.4% | 0.686 | 8.38 | 12.12 | 0.626 | 0.754 | -9.46 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + R:R tối thiểu riêng khung 4H → 2 + Cộng điểm phân kỳ dương ẩn → 3 + Số TP tối đa → 2 | 114.44 | 40.3% | 0.363 | 13.03 | 8.78 | 0.343 | 0.38 | -17.22 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Khung lớn phải tăng (trend ≥) → 0.375 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 | 108.29 | 41.7% | 0.337 | 12.74 | 8.5 | 0.284 | 0.38 | -9.58 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: BOS → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 | 115.19 | 52.4% | 0.806 | 7.53 | 15.3 | 0.616 | 1.021 | -9.48 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Cộng thêm ngưỡng điểm khung 1D → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 1D → 2 | 63.4 | 40% | 0.507 | 11.33 | 5.6 | 0.43 | 0.574 | -6.84 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Lệnh chờ hết hạn sau (nến) → 6 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Mức RSI 30/70 → 0.875 | 102.72 | 46.7% | 0.685 | 9.7 | 10.59 | 0.537 | 0.836 | -9.54 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Cộng thêm ngưỡng điểm khung 1D → 5 + R:R tối thiểu riêng khung 4H → 2 | 112.68 | 41.7% | 0.361 | 12.32 | 9.15 | 0.317 | 0.397 | -10.83 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Cộng thêm ngưỡng điểm khung 1D → 5 + Khung lớn phải tăng (trend ≥) → 0.425 | 113.41 | 52.2% | 0.822 | 7.5 | 15.12 | 0.595 | 1.077 | -9.7 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + R:R tối thiểu riêng khung 4H → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 | 105.09 | 42.1% | 0.348 | 13.05 | 8.05 | 0.332 | 0.362 | -15.01 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Elliott (/100) → 10 | 65.76 | 47.7% | 0.747 | 8.05 | 8.17 | 0.502 | 1.016 | -12.95 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 4H → 2 | 87.29 | 40.1% | 0.385 | 12.35 | 7.07 | 0.38 | 0.389 | -6.77 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 89.26 | 34.5% | 0.39 | 21.06 | 4.24 | 0.224 | 0.563 | -15.76 |  |

### Vòng 671 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.27R, lời÷rủi ro 16.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng thêm ngưỡng điểm khung 1W → -1 | 102.65 | 50% | 0.723 | 8.16 | 12.58 | 0.481 | 1.002 | -11.51 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Trend (/100) → 19 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Số TP tối đa → 2 | 30.35 | 55.1% | 0.182 | 6.19 | 4.9 | 0.184 | 0.179 | -10.53 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Trọng số phần Trend (/100) → 12 | 114.17 | 51.4% | 0.793 | 7.78 | 14.67 | 0.64 | 0.964 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Số TP tối đa → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 118.39 | 53.1% | 0.817 | 7.6 | 15.58 | 0.64 | 1.017 | -8.34 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 107.79 | 46% | 0.619 | 9.25 | 11.65 | 0.591 | 0.646 | -7.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Mức MACD → 1.13 | 112.27 | 50.3% | 0.774 | 8 | 14.03 | 0.575 | 1.006 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 116 | 52.7% | 0.784 | 7.84 | 14.8 | 0.575 | 1.036 | -9.66 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần SL (/100) → 9 | 121.69 | 50% | 0.79 | 8.38 | 14.52 | 0.757 | 0.83 | -10.24 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Xác nhận khung nhỏ (A2) → W + Ngưỡng điểm vào kèo → 74 | 90.91 | 37.7% | 0.35 | 16.71 | 5.44 | 0.343 | 0.356 | -2.08 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: HVN cố định → 0.438 | 114.14 | 51.7% | 0.787 | 7.89 | 14.47 | 0.591 | 1.015 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 28.8 | 57.3% | 0.183 | 5.48 | 5.26 | 0.242 | 0.133 | -11.42 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 101.29 | 51% | 0.689 | 8.09 | 12.52 | 0.54 | 0.854 | -10.98 |  |

### Vòng 670 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.35R, lời÷rủi ro 16.11

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 123.2 | 49.7% | 0.775 | 8.58 | 14.36 | 0.756 | 0.797 | -10.24 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Số TP tối đa → 2 | 121.39 | 43.8% | 0.537 | 11.28 | 10.76 | 0.598 | 0.473 | -11.06 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + R:R tối thiểu riêng khung 4H → 2 | 111.43 | 41.3% | 0.357 | 12.45 | 8.95 | 0.322 | 0.386 | -9.21 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Xác nhận khung nhỏ (A2) → W + R:R tối thiểu riêng khung 1W → 2 | 91.74 | 36.4% | 0.347 | 17.53 | 5.23 | 0.408 | 0.292 | -1.22 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 4H → 2 | 71.18 | 46.2% | 0.671 | 8.81 | 8.08 | 0.473 | 0.902 | -6.48 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 96.96 | 50.4% | 0.801 | 7.91 | 12.26 | 0.524 | 1.074 | -10.97 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Xác nhận khung nhỏ (A2) → W | 100.79 | 38.6% | 0.382 | 16.09 | 6.26 | 0.38 | 0.383 | -2.08 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Mức MACD → 1.13 | 114.25 | 51.4% | 0.783 | 7.85 | 14.55 | 0.591 | 1.002 | -8.34 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + R:R tối thiểu riêng khung 4H → 2 | 115.33 | 41.5% | 0.368 | 12.11 | 9.52 | 0.322 | 0.406 | -8.94 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: MACD cắt lên Signal → 0.563 | 99 | 51.1% | 0.744 | 7.92 | 12.5 | 0.587 | 0.93 | -8.27 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: EMA 50 → 0.75 | 29.45 | 58.6% | 0.194 | 5.33 | 5.53 | 0.236 | 0.155 | -11.01 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Mức MACD → 1.13 + Ngưỡng điểm vào kèo → 77 + Trọng số phần Momentum (/100) → 21 | 87.82 | 48.2% | 0.77 | 8.14 | 10.79 | 0.631 | 0.925 | -16.13 |  |
