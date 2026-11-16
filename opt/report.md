# Tối ưu tự động (chạy liên tục) — vòng 521

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 5907 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 160 | 46.3% | 90.14R | 0.563 | 6.74R | 10.23R | 8.81 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 143 | 53.1% | 113.77R | 0.796 | 6.15R | 7.43R | 15.31 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 105 | 54.3% | 86.61R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 160 | 46.3% | 90.14R | 10.23R | 8.81 | 32 | 12.5% | -14.03R |
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

### Vòng 521 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.43R, lời÷rủi ro 15.31

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 113.59 | 53.1% | 0.794 | 7.43 | 15.29 | 0.632 | 0.984 | -9.64 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Trend (/100) → 12 + Lệnh chờ hết hạn sau (nến) → 6 | 86.02 | 49.6% | 0.647 | 8.46 | 10.17 | 0.621 | 0.677 | -8.03 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 113.77 | 53.1% | 0.796 | 7.43 | 15.31 | 0.635 | 0.983 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm tối thiểu của vùng đặt SL → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 | 107.67 | 47.3% | 0.645 | 10.47 | 10.28 | 0.675 | 0.617 | -10.86 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: BOS → 3 + % chốt ở TP1 → 0.287 + Cộng thêm ngưỡng điểm khung 1W → -1 | 109.26 | 50.7% | 0.759 | 7.86 | 13.9 | 0.594 | 0.953 | -8.62 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 129.36 | 36.9% | 0.483 | 19.53 | 6.62 | 0.313 | 0.636 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm tối thiểu của vùng đặt SL → 2 + R:R tối thiểu riêng khung 1D → 2 + Cộng điểm phân kỳ dương ẩn → 2.25 | 96.56 | 44.3% | 0.522 | 10.86 | 8.89 | 0.491 | 0.55 | -6.13 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 119.71 | 51% | 0.782 | 8.07 | 14.83 | 0.607 | 0.985 | -10.69 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 37.3 | 40.9% | 0.424 | 10.04 | 3.72 | 0.321 | 0.553 | -8.58 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 116.63 | 47.5% | 0.729 | 9.34 | 12.49 | 0.68 | 0.783 | -10.42 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 4H → 2 | 119.82 | 40.7% | 0.378 | 12.07 | 9.93 | 0.388 | 0.37 | -10.84 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 70.67 | 45.8% | 0.66 | 9.11 | 7.76 | 0.484 | 0.87 | -7.84 |  |

### Vòng 520 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.37R, lời÷rủi ro 15.44

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Số TP tối đa → 2 | 99.38 | 52.5% | 0.828 | 7.51 | 13.23 | 0.575 | 1.108 | -10.63 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: EMA 21 → 0.875 | 81.03 | 43.3% | 0.54 | 10.6 | 7.64 | 0.452 | 0.646 | -8.69 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần Trend (/100) → 12 + Điểm tối thiểu của vùng đặt SL → 2 + Khung lớn phải tăng (trend ≥) → 0.425 | 86.3 | 37.7% | 0.336 | 17.49 | 4.93 | 0.299 | 0.372 | -2.35 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Đệm SL riêng khung 1D (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 111.37 | 47.6% | 0.671 | 10.52 | 10.59 | 0.655 | 0.686 | -4.7 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Trend (/100) → 12 + Điểm vùng: HVN anchored → 0.313 | 106.81 | 50.3% | 0.747 | 8.02 | 13.32 | 0.602 | 0.912 | -9.66 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Coin phải mạnh hơn BTC trong N ngày → 14 | 93.59 | 48.9% | 0.693 | 8.43 | 11.1 | 0.675 | 0.717 | -17.72 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Trend (/100) → 19 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 101.67 | 46.7% | 0.602 | 10.14 | 10.03 | 0.463 | 0.76 | -5.84 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: EMA 200 → 1 + Ngưỡng điểm vào kèo → 77 | 116.63 | 43% | 0.496 | 12.35 | 9.44 | 0.605 | 0.381 | -7.1 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 113.77 | 51.3% | 0.72 | 8.74 | 13.02 | 0.561 | 0.915 | -11.06 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 | 84.98 | 51.7% | 0.72 | 7.75 | 10.97 | 0.615 | 0.849 | -16.13 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 106.06 | 50.4% | 0.763 | 7.77 | 13.65 | 0.58 | 0.971 | -10.95 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Break mây Ichimoku → 1 | 101.92 | 50% | 0.698 | 8.49 | 12 | 0.554 | 0.859 | -9.73 |  |

### Vòng 519 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 15.25

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Mức MACD → 0.875 | 108.17 | 52.5% | 0.767 | 7.58 | 14.27 | 0.621 | 0.929 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Trend (/100) → 12 | 103.25 | 46.8% | 0.732 | 9.12 | 11.32 | 0.557 | 0.905 | -10.7 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm tối thiểu của vùng đặt SL → 4 | 110.95 | 49.6% | 0.81 | 8.31 | 13.35 | 0.614 | 1.04 | -8.91 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + R:R tối thiểu riêng khung 1D → 2 | 85.93 | 44.7% | 0.54 | 9.74 | 8.82 | 0.578 | 0.502 | -6.03 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Cộng thêm ngưỡng điểm khung 1D → 5 | 112.05 | 52.1% | 0.789 | 7.49 | 14.96 | 0.64 | 0.961 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cộng thêm ngưỡng điểm khung 1D → 5 | 112.56 | 52.4% | 0.776 | 7.55 | 14.91 | 0.604 | 0.983 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 95.79 | 39.7% | 0.295 | 14.18 | 6.76 | 0.265 | 0.321 | -11.25 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + % chốt ở TP1 → 0.287 + SL tối đa (% Entry) → 0.425 | 86.11 | 38.8% | 0.344 | 16.79 | 5.13 | 0.308 | 0.378 | -3.76 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Biên mây Ichimoku → 1.35 + R:R tối thiểu riêng khung 4H → 2 | 86.33 | 39.9% | 0.302 | 13.38 | 6.45 | 0.297 | 0.306 | -5.82 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Lệnh chờ hết hạn sau (nến) → 6 + R:R tối thiểu riêng khung 4H → 2 | 90.69 | 39.6% | 0.315 | 13.13 | 6.91 | 0.316 | 0.314 | -7.06 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Elliott (/100) → 10 + % chốt ở TP1 → 0.287 | 105.14 | 45.9% | 0.661 | 10.51 | 10 | 0.677 | 0.647 | -6.31 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 88.3 | 40.7% | 0.327 | 13 | 6.79 | 0.339 | 0.318 | -10.28 |  |

### Vòng 518 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.41R, lời÷rủi ro 15.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Lệnh chờ hết hạn sau (nến) → 6 | 94.74 | 50.8% | 0.718 | 7.84 | 12.08 | 0.607 | 0.847 | -8.27 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: MACD cắt lên Signal → 0.438 | 97.56 | 37.7% | 0.264 | 16.23 | 6.01 | 0.228 | 0.298 | -15.42 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Break mây Ichimoku → 3 | 115.27 | 48.7% | 0.749 | 9.03 | 12.77 | 0.636 | 0.887 | -7.49 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Số TP tối đa → 2 + Điểm vùng: HVN cố định → 0.563 | 90.01 | 46.8% | 0.584 | 8.95 | 10.06 | 0.53 | 0.636 | -11.23 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cổng Dow → TẮT | 50.29 | 37.9% | 0.207 | 18.32 | 2.75 | 0.31 | 0.098 | -19.9 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 99.42 | 49.7% | 0.658 | 9.25 | 10.75 | 0.508 | 0.833 | -8.48 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Trend (/100) → 19 | 146.13 | 37.5% | 0.507 | 19.4 | 7.53 | 0.326 | 0.688 | -13.43 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Số TP tối đa → 2 + Điểm vùng: Break mây Ichimoku → 1 | 103.11 | 50% | 0.706 | 8.34 | 12.36 | 0.559 | 0.871 | -10 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 111.57 | 48.4% | 0.72 | 8.99 | 12.41 | 0.721 | 0.719 | -10.59 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: HVN cố định → 0.438 | 111 | 52.1% | 0.771 | 8.01 | 13.86 | 0.591 | 0.983 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: BOS → 1 | 110.81 | 52.5% | 0.797 | 7.44 | 14.89 | 0.606 | 1.022 | -9.69 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 72.73 | 45.7% | 0.449 | 10.45 | 6.96 | 0.36 | 0.536 | -9.83 |  |

### Vòng 517 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: EMA 21 → 1.13 | 105.38 | 51.4% | 0.753 | 7.55 | 13.96 | 0.599 | 0.93 | -10.04 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Trend (/100) → 19 | 112.3 | 52.4% | 0.774 | 7.55 | 14.87 | 0.635 | 0.933 | -11.06 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Mức MACD → 1.13 | 110.06 | 50% | 0.706 | 8.37 | 13.15 | 0.568 | 0.87 | -11.25 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 113.69 | 50.3% | 0.724 | 8.45 | 13.45 | 0.82 | 0.605 | -10.04 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần R:R (/100) → 28 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: EMA 21 → 1.13 | 97.24 | 48.1% | 0.631 | 9.49 | 10.25 | 0.459 | 0.839 | -7.42 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Divergence (/100) → 9 + Lệnh chờ hết hạn sau (nến) → 6 | 74.74 | 42.3% | 0.575 | 10.76 | 6.95 | 0.453 | 0.741 | -5.74 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: HVN cố định → 0.438 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 15.98 | 56.6% | 0.124 | 7.06 | 2.26 | 0.143 | 0.105 | -11.66 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: EMA 50 → 1.13 | 73.81 | 39.3% | 0.33 | 14 | 5.27 | 0.33 | 0.329 | -4.43 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trọng số phần R:R (/100) → 28 | 106.98 | 50.7% | 0.743 | 8.06 | 13.27 | 0.6 | 0.907 | -10.63 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 97.39 | 49.3% | 0.696 | 8.5 | 11.46 | 0.465 | 0.97 | -11.51 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: HVN anchored → 0.313 | 110.9 | 51% | 0.744 | 8.07 | 13.74 | 0.571 | 0.94 | -9.66 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 107.33 | 50% | 0.767 | 7.92 | 13.55 | 0.669 | 0.876 | -11.9 |  |

### Vòng 516 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.41R, lời÷rủi ro 15.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần R:R (/100) → 33 + Điểm vùng: MACD cắt lên Signal → 0.438 | 83.28 | 46.9% | 0.574 | 9.56 | 8.71 | 0.482 | 0.67 | -8.12 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 21 → 0.875 + Trọng số phần SL (/100) → 7 | 26.62 | 54.4% | 0.168 | 6.03 | 4.41 | 0.253 | 0.094 | -11.37 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 108.32 | 50% | 0.742 | 8.13 | 13.32 | 0.569 | 0.952 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 121.43 | 48.7% | 0.778 | 8.6 | 14.12 | 0.793 | 0.762 | -13.5 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: MACD cắt lên Signal → 0.563 + Đệm SL riêng khung 1W (ATR) → 0.3 | 106.85 | 48.3% | 0.747 | 8.85 | 12.07 | 0.567 | 0.935 | -11.71 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Fib sóng 4 → 0.938 | 96.4 | 52.4% | 0.674 | 8.01 | 12.03 | 0.642 | 0.71 | -7.56 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: POC volume profile cố định → 0.688 | 112.05 | 52.1% | 0.789 | 7.57 | 14.8 | 0.64 | 0.961 | -9.66 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Cổng Dow → CHẶT + Điểm vùng: Fib sóng 4 → 1.56 | 78.15 | 51.8% | 0.698 | 7.39 | 10.58 | 0.307 | 1.048 | -10.72 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Mức RSI 30/70 → 1.13 + SL tối đa (% Entry) → 0.425 + R:R tối thiểu tới TP1 → 2.63 | 76.9 | 45% | 0.587 | 10.54 | 7.3 | 0.423 | 0.764 | -10.12 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 111 | 52.1% | 0.771 | 7.87 | 14.1 | 0.591 | 0.983 | -9.66 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm tối thiểu của vùng đặt SL → 4 | 69.18 | 46.7% | 0.647 | 8.68 | 7.97 | 0.505 | 0.808 | -6.48 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 88.74 | 48% | 0.71 | 8.57 | 10.35 | 0.504 | 0.964 | -17.16 |  |

### Vòng 515 — ngẫu nhiên nhiều thông số · mốc: tổng 114.31R, win 53.5%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.30

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Trọng số phần SL (/100) → 9 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 86.13 | 49.6% | 0.724 | 8.22 | 10.48 | 0.503 | 0.964 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: EMA 21 → 0.875 | 112.39 | 53.2% | 0.809 | 7.47 | 15.05 | 0.672 | 0.96 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Cổng Dow → TẮT + Ngưỡng điểm vào kèo → 74 | 125.06 | 44.1% | 0.593 | 11.31 | 11.06 | 0.533 | 0.654 | -20.3 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Ngưỡng điểm vào kèo → 74 | 93.9 | 50% | 0.701 | 8.11 | 11.58 | 0.579 | 0.847 | -8.27 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: EMA 21 → 0.875 + Đệm SL riêng khung 4H (ATR) → 0.3 | 146.29 | 37.9% | 0.538 | 17.98 | 8.14 | 0.319 | 0.77 | -7.21 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Cổng Dow → CHẶT + Điểm vùng: POC volume profile cố định → 0.688 | 67.64 | 51.8% | 0.604 | 7.67 | 8.82 | 0.345 | 0.82 | -11.76 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Cổng Dow → CHẶT + Điểm vùng: MACD cắt lên Signal → 0.563 | 62.73 | 52.1% | 0.667 | 7.13 | 8.8 | 0.327 | 1.038 | -13.51 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 111.17 | 53.8% | 0.767 | 7.4 | 15.02 | 0.616 | 0.947 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: BOS → 3 | 112.4 | 52.4% | 0.775 | 7.79 | 14.43 | 0.635 | 0.934 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 | 76.27 | 46.2% | 0.489 | 10.18 | 7.49 | 0.331 | 0.639 | -9.83 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 105.14 | 50% | 0.674 | 9.23 | 11.39 | 0.476 | 0.917 | -7.08 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Break mây Ichimoku → 3 | 104.71 | 50% | 0.671 | 8.91 | 11.75 | 0.504 | 0.876 | -9.4 |  |

### Vòng 514 — ghép cặp thay đổi suýt đạt · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.33R, lời÷rủi ro 15.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: MACD cắt lên Signal → 0.563 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 113.77 | 53.1% | 0.796 | 7.33 | 15.52 | 0.635 | 0.983 | -9.66 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 0.875 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 | 141.33 | 52% | 0.817 | 7.95 | 17.78 | 0.63 | 1.024 | -9.88 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 141.33 | 52% | 0.817 | 7.95 | 17.78 | 0.63 | 1.024 | -9.88 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 141.33 | 52% | 0.817 | 7.95 | 17.78 | 0.63 | 1.024 | -9.88 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 113.77 | 53.1% | 0.796 | 7.33 | 15.52 | 0.635 | 0.983 | -9.66 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 113.77 | 53.1% | 0.796 | 7.33 | 15.52 | 0.635 | 0.983 | -9.66 |  |

### Vòng 513 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.41R, lời÷rủi ro 15.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức RSI 30/70 → 1.13 | 112.69 | 50% | 0.829 | 8.3 | 13.58 | 0.614 | 1.085 | -8.91 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu tới TP1 → 2.38 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 91.23 | 40.2% | 0.458 | 11.02 | 8.28 | 0.491 | 0.427 | -7.63 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Biên mây Ichimoku → 1.05 + Ngưỡng điểm vào kèo → 74 | 84.76 | 44.7% | 0.601 | 10.07 | 8.42 | 0.434 | 0.757 | -11.99 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 | 102.94 | 41.2% | 0.336 | 12.45 | 8.27 | 0.313 | 0.356 | -8.97 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: EMA 21 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 109.65 | 50.4% | 0.8 | 7.71 | 14.22 | 0.639 | 0.99 | -7.94 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: HVN cố định → 0.563 + Cổng Dow → CHẶT | 74.99 | 47.8% | 0.543 | 8.37 | 8.96 | 0.437 | 0.618 | -8.31 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Trọng số phần SL (/100) → 7 | 113.31 | 52.8% | 0.787 | 7.75 | 14.62 | 0.635 | 0.962 | -9.66 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 123.41 | 43.8% | 0.593 | 11.61 | 10.63 | 0.546 | 0.641 | -18.08 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: MACD cắt lên Signal → 0.438 | 104.54 | 49.7% | 0.692 | 9.04 | 11.56 | 0.493 | 0.929 | -7.11 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Momentum (/100) → 21 | 83.06 | 50% | 0.704 | 7.81 | 10.64 | 0.548 | 0.896 | -16.13 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: EMA 200 → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 75.71 | 41.9% | 0.382 | 12.72 | 5.95 | 0.394 | 0.371 | -11.15 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Đệm SL riêng khung 1D (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC anchored → 2 | 51.71 | 39.8% | 0.438 | 12.77 | 4.05 | 0.315 | 0.542 | -5.07 |  |

### Vòng 512 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 15.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: EMA 200 → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: EMA 21 → 0.875 | 114.28 | 51.3% | 0.742 | 8.17 | 13.99 | 0.667 | 0.834 | -8.46 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Trọng số phần SL (/100) → 7 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 84.27 | 45.2% | 0.577 | 10.01 | 8.42 | 0.461 | 0.718 | -9.16 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Divergence (/100) → 12 | 109.49 | 47.2% | 0.68 | 10.01 | 10.94 | 0.675 | 0.685 | -5.33 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 93.68 | 51.4% | 0.66 | 8.12 | 11.54 | 0.675 | 0.642 | -9.46 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: HVN anchored → 0.188 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 122.68 | 49.3% | 0.807 | 8.24 | 14.89 | 0.794 | 0.823 | -13.5 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: HVN cố định → 0.438 | 109.66 | 52.1% | 0.761 | 7.73 | 14.19 | 0.59 | 0.964 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: POC anchored → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 99.66 | 49% | 0.669 | 8.92 | 11.17 | 0.579 | 0.765 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần R:R (/100) → 28 + Cộng thêm ngưỡng điểm khung 4H → -1 | 112.55 | 52.4% | 0.776 | 7.72 | 14.58 | 0.624 | 0.953 | -11.06 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Ngưỡng điểm vào kèo → 74 | 101.97 | 45.1% | 0.583 | 9.5 | 10.73 | 0.588 | 0.578 | -12.03 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Trend (/100) → 12 | 80.54 | 48.7% | 0.713 | 8.28 | 9.73 | 0.576 | 0.867 | -16.13 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần SL (/100) → 7 + R:R tối thiểu riêng khung 1W → 2 | 86.62 | 48.6% | 0.593 | 9 | 9.62 | 0.609 | 0.577 | -9.6 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 59.02 | 45% | 0.541 | 9.81 | 6.02 | 0.47 | 0.62 | -9.61 |  |
