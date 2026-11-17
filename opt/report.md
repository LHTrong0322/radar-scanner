# Tối ưu tự động (chạy liên tục) — vòng 529

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 6003 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.3% | 93.93R | 0.58 | 6.74R | 10.11R | 9.29 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 143 | 53.1% | 113.77R | 0.796 | 6.15R | 7.35R | 15.48 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

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
| Bot thật | 162 | 46.3% | 93.93R | 10.11R | 9.29 | 32 | 12.5% | -14.03R |
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

### Vòng 529 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.35R, lời÷rủi ro 15.48

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Số TP tối đa → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: MACD cắt lên Signal → 0.563 | 113.84 | 52.8% | 0.791 | 7.52 | 15.14 | 0.64 | 0.964 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 111.31 | 53.2% | 0.789 | 7.42 | 15 | 0.621 | 0.976 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Xác nhận khung nhỏ (A2) → W | 85.88 | 37.8% | 0.373 | 17.03 | 5.04 | 0.293 | 0.451 | -5.76 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Coin phải mạnh hơn BTC trong N ngày → 14 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 17 | 56.6% | 0.132 | 6.56 | 2.59 | 0.158 | 0.105 | -11.65 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Cộng thêm ngưỡng điểm khung 1D → 3 | 113.31 | 52.1% | 0.776 | 7.79 | 14.55 | 0.61 | 0.972 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Trend (/100) → 12 | 111.83 | 52.1% | 0.777 | 7.68 | 14.56 | 0.621 | 0.961 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.563 + Ngưỡng điểm vào kèo → 74 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 78.59 | 41.4% | 0.465 | 13.85 | 5.67 | 0.475 | 0.456 | -6.35 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 111.88 | 52.1% | 0.766 | 7.86 | 14.23 | 0.601 | 0.962 | -9.66 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: HVN anchored → 0.313 | 108.22 | 51.4% | 0.752 | 7.87 | 13.75 | 0.581 | 0.942 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 96.87 | 51% | 0.677 | 8.07 | 12 | 0.664 | 0.693 | -9.46 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Mức MACD → 0.875 | 113.06 | 52.3% | 0.729 | 8.2 | 13.79 | 0.592 | 0.892 | -10.02 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Biên mây Ichimoku → 1.35 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 59.46 | 42.7% | 0.508 | 10.51 | 5.66 | 0.404 | 0.634 | -14.61 |  |

### Vòng 528 — ngẫu nhiên nhiều thông số · mốc: tổng 110.99R, win 53.2%, rủi ro tụt vốn 7.43R, lời÷rủi ro 14.94

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Cổng Dow → TẮT + Điểm vùng: HVN cố định → 0.438 | 130.03 | 44.9% | 0.608 | 11.12 | 11.69 | 0.571 | 0.645 | -18.42 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 110.79 | 52.8% | 0.78 | 7.53 | 14.71 | 0.624 | 0.97 | -9.11 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm tối thiểu của vùng đặt SL → 4 | 108.63 | 52.1% | 0.765 | 7.69 | 14.13 | 0.641 | 0.907 | -9.11 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 81.05 | 47.5% | 0.583 | 8.24 | 9.84 | 0.615 | 0.563 | -8.7 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + SL tối đa (% Entry) → 0.425 + Điểm vùng: BOS → 1 | 109.79 | 52.4% | 0.768 | 7.68 | 14.3 | 0.624 | 0.94 | -9.11 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 109.06 | 52.1% | 0.757 | 7.69 | 14.18 | 0.635 | 0.898 | -9.11 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Trọng số phần Trend (/100) → 19 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: POC anchored → 2 | 95.05 | 48.7% | 0.625 | 8.75 | 10.86 | 0.522 | 0.741 | -8.08 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + % chốt ở TP1 → 0.287 + Cộng thêm ngưỡng điểm khung 1W → 2 | 110.17 | 52.5% | 0.781 | 7.51 | 14.67 | 0.638 | 0.949 | -9.09 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 27.28 | 55.8% | 0.175 | 6.29 | 4.34 | 0.197 | 0.153 | -11.27 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Divergence (/100) → 9 + Trọng số phần Momentum (/100) → 25 + Đệm SL riêng khung 1D (ATR) → 0.3 | 54.72 | 40.4% | 0.48 | 11.97 | 4.57 | 0.366 | 0.579 | -5.17 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: EMA 50 → 1.13 + Trọng số phần R:R (/100) → 28 + Điểm vùng: EMA 200 → 1 | 96.94 | 47.7% | 0.625 | 9.28 | 10.45 | 0.523 | 0.756 | -5.29 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm tối thiểu của vùng đặt SL → 4 | 99.13 | 47.8% | 0.623 | 9.45 | 10.49 | 0.555 | 0.703 | -11.24 |  |

### Vòng 527 — ngẫu nhiên nhiều thông số · mốc: tổng 113.89R, win 53.5%, rủi ro tụt vốn 7.33R, lời÷rủi ro 15.54

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Mức RSI 30/70 → 0.875 | 96.19 | 49.3% | 0.677 | 8.93 | 10.77 | 0.565 | 0.811 | -7.45 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Trọng số phần Divergence (/100) → 9 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 111.72 | 52.1% | 0.787 | 7.22 | 15.47 | 0.65 | 0.94 | -8.84 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Đệm SL riêng khung 4H (ATR) → 0.3 | 149.88 | 38.9% | 0.52 | 18.74 | 8 | 0.372 | 0.671 | -13.69 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: Break mây Ichimoku → 1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 24.7 | 56.8% | 0.159 | 6.67 | 3.7 | 0.171 | 0.148 | -7.42 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần SL (/100) → 7 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Đệm SL riêng khung 1W (ATR) → 0.3 | 99.91 | 45.8% | 0.653 | 9.95 | 10.04 | 0.573 | 0.726 | -9.7 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cộng thêm ngưỡng điểm khung 1D → 3 | 65.31 | 51.8% | 0.583 | 7.55 | 8.65 | 0.41 | 0.728 | -10.52 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 41.04 | 42% | 0.466 | 9.54 | 4.3 | 0.357 | 0.617 | -9.51 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần SL (/100) → 7 | 97.72 | 49% | 0.647 | 9.09 | 10.75 | 0.507 | 0.814 | -6.26 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 98.27 | 50% | 0.702 | 8.2 | 11.98 | 0.47 | 0.97 | -10.71 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + SL tối đa (% Entry) → 0.425 + Cộng thêm ngưỡng điểm khung 1W → -1 | 107.29 | 52.5% | 0.761 | 7.91 | 13.56 | 0.631 | 0.901 | -8.84 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Cổng Dow → CHẶT + Cộng thêm ngưỡng điểm khung 1W → 2 | 77.31 | 48.6% | 0.709 | 7.99 | 9.68 | 0.317 | 0.996 | -10.96 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm tối thiểu của vùng đặt SL → 4 | 107.75 | 51% | 0.743 | 7.97 | 13.52 | 0.607 | 0.893 | -7.82 |  |

### Vòng 526 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.38R, lời÷rủi ro 15.42

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: EMA 50 → 0.75 + % chốt ở TP1 → 0.307 | 75.62 | 51.9% | 0.7 | 7.19 | 10.52 | 0.281 | 1.048 | -10.72 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 83.58 | 45.5% | 0.584 | 10.01 | 8.35 | 0.448 | 0.752 | -9.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cộng thêm ngưỡng điểm khung 4H → -1 | 112.65 | 52.8% | 0.782 | 7.63 | 14.76 | 0.614 | 0.981 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Số TP tối đa → 2 | 114.4 | 52.8% | 0.794 | 7.69 | 14.88 | 0.64 | 0.972 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu riêng khung 1W → 2 | 84.68 | 47.9% | 0.58 | 9.61 | 8.81 | 0.463 | 0.707 | -8.12 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Số TP tối đa → 2 | 98.65 | 51.7% | 0.68 | 8.24 | 11.97 | 0.642 | 0.725 | -9.46 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Khung lớn phải tăng (trend ≥) → 0.425 + Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Entry (/100) → 33 | 108.78 | 49.3% | 0.716 | 8.55 | 12.72 | 0.537 | 0.919 | -12.43 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Xác nhận khung nhỏ (A2) → W | 85.9 | 38.7% | 0.346 | 17 | 5.05 | 0.307 | 0.383 | -3.74 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 109.08 | 50.7% | 0.768 | 8.09 | 13.48 | 0.516 | 1.043 | -9.52 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Mức RSI 30/70 → 1.13 | 113.77 | 53.1% | 0.796 | 7.38 | 15.42 | 0.635 | 0.983 | -9.66 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Xác nhận khung nhỏ (A2) → W + SL tối đa (% Entry) → 0.425 | 86.05 | 38.8% | 0.344 | 16.73 | 5.14 | 0.308 | 0.378 | -3.74 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: BOS → 3 | 113.77 | 53.1% | 0.796 | 7.38 | 15.42 | 0.635 | 0.983 | -9.66 |  |

### Vòng 525 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.41R, lời÷rủi ro 15.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: BOS → 3 | 109.49 | 47.2% | 0.68 | 9.96 | 10.99 | 0.675 | 0.685 | -6.35 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 27.16 | 58.1% | 0.129 | 7.32 | 3.71 | 0.225 | 0.035 | -6.37 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: POC volume profile cố định → 0.813 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 110.97 | 52.4% | 0.776 | 7.75 | 14.32 | 0.634 | 0.941 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 104.44 | 49.6% | 0.741 | 8.08 | 12.93 | 0.622 | 0.872 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Fib sóng 4 → 1.56 | 109.4 | 52.7% | 0.749 | 7.61 | 14.38 | 0.626 | 0.895 | -10 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: POC volume profile cố định → 0.813 | 113.77 | 53.1% | 0.796 | 7.41 | 15.35 | 0.635 | 0.983 | -8.64 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần R:R (/100) → 33 | 113.31 | 52.8% | 0.787 | 7.69 | 14.73 | 0.635 | 0.962 | -9.66 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 119.59 | 52.6% | 0.767 | 7.66 | 15.61 | 0.623 | 0.934 | -11.25 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 27.52 | 56.3% | 0.174 | 6.5 | 4.23 | 0.227 | 0.123 | -11.38 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: EMA 21 → 0.875 | 93.68 | 46.2% | 0.593 | 9.13 | 10.26 | 0.533 | 0.648 | -11.23 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 112.37 | 52.1% | 0.77 | 7.77 | 14.46 | 0.624 | 0.936 | -8.34 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Đệm SL riêng khung 1D (ATR) → 0.3 | 106.35 | 47.2% | 0.669 | 10.46 | 10.17 | 0.664 | 0.674 | -6.35 |  |

### Vòng 524 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.33R, lời÷rủi ro 15.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trọng số phần Divergence (/100) → 9 + Cộng thêm ngưỡng điểm khung 4H → 2 | 109 | 51.7% | 0.762 | 7.71 | 14.14 | 0.649 | 0.887 | -10.63 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Lệnh chờ hết hạn sau (nến) → 6 | 72.63 | 43.4% | 0.534 | 10.8 | 6.72 | 0.391 | 0.72 | -6.48 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: EMA 50 → 0.75 + Trọng số phần Trend (/100) → 19 | 100.83 | 49.3% | 0.691 | 8.57 | 11.77 | 0.574 | 0.817 | -10.36 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần SL (/100) → 9 | 94.26 | 48.3% | 0.641 | 9.17 | 10.28 | 0.478 | 0.836 | -6.06 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 99.41 | 46.5% | 0.7 | 9.41 | 10.56 | 0.517 | 0.883 | -13.96 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trọng số phần Entry (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần R:R (/100) → 33 | 111.83 | 47% | 0.674 | 10.13 | 11.04 | 0.664 | 0.682 | -5.33 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Mức RSI 30/70 → 1.13 | 112.65 | 52.8% | 0.782 | 7.63 | 14.76 | 0.614 | 0.981 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 1W → -1 + R:R tối thiểu tới TP1 → 2.63 | 98.79 | 52% | 0.803 | 7.44 | 13.28 | 0.543 | 1.094 | -11.59 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: POC volume profile cố định → 0.813 | 111.35 | 50.7% | 0.773 | 7.85 | 14.18 | 0.672 | 0.874 | -10 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Trọng số phần Divergence (/100) → 12 | 109.86 | 51% | 0.768 | 7.9 | 13.91 | 0.597 | 0.973 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: EMA 21 → 1.13 | 94.76 | 49.3% | 0.64 | 8.89 | 10.66 | 0.473 | 0.831 | -8.44 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + R:R tối thiểu tới TP1 → 2.38 + Điểm tối thiểu của vùng đặt SL → 4 | 96.3 | 40% | 0.428 | 13.42 | 7.18 | 0.462 | 0.397 | -18.75 |  |

### Vòng 523 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.17R, lời÷rủi ro 15.87

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + SL tối đa (% Entry) → 0.425 + Trọng số phần Momentum (/100) → 25 | 110.54 | 50.7% | 0.747 | 8.14 | 13.58 | 0.601 | 0.897 | -4.48 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Số TP tối đa → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 102.3 | 49.7% | 0.715 | 8.03 | 12.74 | 0.58 | 0.878 | -9.66 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: POC anchored → 4 + Trọng số phần R:R (/100) → 28 + Điểm vùng: EMA 21 → 1.13 | 120.37 | 49.4% | 0.752 | 8.54 | 14.09 | 0.766 | 0.738 | -8.4 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 109.59 | 49.3% | 0.818 | 8.18 | 13.4 | 0.583 | 1.099 | -10.2 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Mức MACD → 0.875 | 108.17 | 52.5% | 0.767 | 7.65 | 14.14 | 0.621 | 0.929 | -8.64 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: EMA 21 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 75.36 | 45.9% | 0.567 | 9.56 | 7.88 | 0.54 | 0.594 | -7.64 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + R:R tối thiểu riêng khung 4H → 2 | 39.74 | 33.4% | 0.107 | 27.36 | 1.45 | 0.094 | 0.119 | 1.56 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Xác nhận khung nhỏ (A2) → W + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 10.02 | 46.7% | 0.039 | 14.72 | 0.68 | 0.097 | -0.019 | -11.25 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần Elliott (/100) → 6 + Cộng thêm ngưỡng điểm khung 1D → 5 | 100.44 | 49.7% | 0.665 | 9.3 | 10.8 | 0.514 | 0.849 | -7.08 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần Divergence (/100) → 9 | 104.81 | 49.7% | 0.676 | 9.1 | 11.52 | 0.49 | 0.896 | -7.08 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 | 29.36 | 57.3% | 0.187 | 5.82 | 5.04 | 0.219 | 0.156 | -11.38 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Cộng thêm ngưỡng điểm khung 4H → -1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 121.57 | 49.7% | 0.784 | 8.37 | 14.52 | 0.757 | 0.817 | -10.24 |  |

### Vòng 522 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.28R, lời÷rủi ro 15.63

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 16.96 | 56.6% | 0.131 | 6.95 | 2.44 | 0.157 | 0.107 | -11.66 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Mức MACD → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 28.14 | 53.3% | 0.171 | 6.02 | 4.67 | 0.192 | 0.148 | -10.53 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 86.22 | 50% | 0.707 | 8.5 | 10.14 | 0.611 | 0.816 | -17.09 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 101.21 | 49.7% | 0.698 | 8.32 | 12.16 | 0.555 | 0.869 | -9.66 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Cộng thêm ngưỡng điểm khung 1W → 2 | 114.22 | 52.4% | 0.799 | 7.43 | 15.37 | 0.646 | 0.972 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Elliott (/100) → 10 + Cộng thêm ngưỡng điểm khung 4H → 2 | 110.86 | 52.9% | 0.803 | 7.24 | 15.31 | 0.684 | 0.941 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Mức RSI 30/70 → 0.875 | 107.88 | 51.9% | 0.674 | 8.42 | 12.81 | 0.569 | 0.8 | -11.78 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + SL tối đa (% Entry) → 0.425 | 86.97 | 48.6% | 0.596 | 9.13 | 9.53 | 0.506 | 0.695 | -9.33 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: HVN anchored → 0.313 | 108.86 | 52.7% | 0.746 | 7.8 | 13.96 | 0.594 | 0.925 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: HVN anchored → 0.313 | 103.12 | 45.7% | 0.596 | 9.44 | 10.92 | 0.602 | 0.59 | -7.92 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 29.36 | 57.3% | 0.187 | 5.75 | 5.11 | 0.219 | 0.156 | -11.38 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 77.17 | 45.1% | 0.683 | 9.21 | 8.38 | 0.614 | 0.763 | -5.84 |  |

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
