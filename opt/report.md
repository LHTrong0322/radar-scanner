# Tối ưu tự động (chạy liên tục) — vòng 575

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 6555 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 46.3% | 95.54R | 0.583 | 6.74R | 10.03R | 9.53 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 145 | 53.1% | 114.31R | 0.788 | 6.15R | 7.63R | 14.98 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 107 | 54.2% | 87.15R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 46.3% | 95.54R | 10.03R | 9.53 | 32 | 12.5% | -14.03R |
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

### Vòng 575 — ngẫu nhiên nhiều thông số · mốc: tổng 114.31R, win 53.1%, rủi ro tụt vốn 7.63R, lời÷rủi ro 14.98

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 113.56 | 52.7% | 0.778 | 7.61 | 14.92 | 0.635 | 0.937 | -8.34 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + % chốt ở TP1 → 0.307 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 112.84 | 52.4% | 0.768 | 7.7 | 14.65 | 0.615 | 0.94 | -9.67 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 1D → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 108.98 | 45.6% | 0.605 | 9.72 | 11.21 | 0.729 | 0.49 | -7.34 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: POC anchored → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 101.73 | 46.2% | 0.602 | 11.05 | 9.21 | 0.63 | 0.577 | -4.01 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 114.31 | 53.1% | 0.788 | 7.63 | 14.98 | 0.635 | 0.962 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: EMA 21 → 1.13 | 100.41 | 49.4% | 0.612 | 9.02 | 11.13 | 0.544 | 0.686 | -9.84 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: BOS → 1 | 113.3 | 52.7% | 0.776 | 7.79 | 14.54 | 0.635 | 0.934 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: HVN cố định → 0.438 | 97.79 | 47.3% | 0.586 | 8.99 | 10.88 | 0.593 | 0.579 | -9.63 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 94.94 | 50.7% | 0.65 | 8.08 | 11.75 | 0.618 | 0.686 | -9.29 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Mức MACD → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 76.66 | 44.8% | 0.465 | 10.74 | 7.14 | 0.345 | 0.58 | -9.25 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 113.3 | 52.7% | 0.776 | 7.77 | 14.58 | 0.614 | 0.962 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm tối thiểu của vùng đặt SL → 4 | 109.17 | 51% | 0.743 | 7.91 | 13.8 | 0.597 | 0.903 | -9.66 |  |

### Vòng 574 — ngẫu nhiên nhiều thông số · mốc: tổng 114.31R, win 53.1%, rủi ro tụt vốn 7.63R, lời÷rủi ro 14.98

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Cổng Dow → TẮT | 120.73 | 43.3% | 0.58 | 12.09 | 9.99 | 0.55 | 0.611 | -19.27 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: POC anchored → 2 + Trọng số phần Entry (/100) → 33 | 87.32 | 49.2% | 0.704 | 8.76 | 9.97 | 0.478 | 0.916 | -9.6 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Ngưỡng điểm vào kèo → 77 + % chốt ở TP1 → 0.287 | 79.8 | 48.7% | 0.671 | 8.4 | 9.5 | 0.586 | 0.76 | -16.13 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 77.33 | 44.4% | 0.614 | 10.59 | 7.3 | 0.479 | 0.748 | -8.94 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Mức MACD → 0.875 | 106.36 | 52.1% | 0.739 | 7.84 | 13.57 | 0.598 | 0.891 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Mức RSI 30/70 → 0.875 | 64.35 | 46.9% | 0.503 | 9.77 | 6.59 | 0.37 | 0.648 | -8.96 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần R:R (/100) → 28 | 111.75 | 50% | 0.707 | 8.52 | 13.12 | 0.565 | 0.869 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + R:R tối thiểu riêng khung 4H → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 96.06 | 40.1% | 0.323 | 13.29 | 7.23 | 0.337 | 0.311 | -7.62 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần Elliott (/100) → 10 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Khung lớn phải tăng (trend ≥) → 0.375 | 107.28 | 50.3% | 0.74 | 8.09 | 13.26 | 0.592 | 0.899 | -8.34 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Cộng thêm ngưỡng điểm khung 4H → -1 + Số TP tối đa → 2 + Điểm vùng: BOS → 3 | 114.94 | 52.7% | 0.787 | 7.65 | 15.02 | 0.64 | 0.952 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Khung lớn phải tăng (trend ≥) → 0.375 + SL tối đa (% Entry) → 0.425 + Cộng thêm ngưỡng điểm khung 4H → -1 | 109.58 | 51.7% | 0.745 | 7.95 | 13.78 | 0.604 | 0.897 | -9.66 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Trend (/100) → 19 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 88.64 | 50.3% | 0.62 | 8.71 | 10.18 | 0.513 | 0.738 | -10.74 |  |

### Vòng 573 — ngẫu nhiên nhiều thông số · mốc: tổng 114.31R, win 53.1%, rủi ro tụt vốn 7.62R, lời÷rủi ro 15.00

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Mức RSI 30/70 → 0.875 | 113.71 | 50.6% | 0.711 | 8.28 | 13.73 | 0.557 | 0.894 | -10.95 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + R:R tối thiểu riêng khung 1D → 2 | 103.65 | 45.7% | 0.592 | 9.54 | 10.86 | 0.602 | 0.583 | -10.98 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + R:R tối thiểu riêng khung 1D → 2 | 101.93 | 44.8% | 0.586 | 9.46 | 10.77 | 0.607 | 0.567 | -7.92 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Đệm SL riêng khung 1W (ATR) → 0.3 | 79.95 | 38.8% | 0.285 | 14.52 | 5.51 | 0.297 | 0.275 | -10.6 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: POC anchored → 4 | 84.03 | 50.8% | 0.7 | 8.14 | 10.32 | 0.516 | 0.891 | -14.09 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: HVN anchored → 0.313 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 111.3 | 49.3% | 0.752 | 8.09 | 13.76 | 0.67 | 0.849 | -11.51 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 110.47 | 51% | 0.752 | 8.19 | 13.49 | 0.591 | 0.933 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 75.08 | 43.4% | 0.518 | 11.63 | 6.46 | 0.43 | 0.605 | -13.56 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 107.41 | 52.8% | 0.746 | 7.76 | 13.84 | 0.599 | 0.906 | -10.95 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 111.69 | 50.3% | 0.76 | 8.11 | 13.77 | 0.66 | 0.858 | -10 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Cổng Dow → CHẶT | 79.54 | 51.8% | 0.71 | 7.05 | 11.28 | 0.324 | 1.033 | -10.72 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: HVN anchored → 0.313 + % chốt ở TP1 → 0.287 | 107.54 | 50.7% | 0.757 | 7.6 | 14.15 | 0.642 | 0.883 | -9.64 |  |

### Vòng 572 — ngẫu nhiên nhiều thông số · mốc: tổng 114.31R, win 53.1%, rủi ro tụt vốn 7.62R, lời÷rủi ro 15.00

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Cộng thêm ngưỡng điểm khung 1W → -1 + % chốt ở TP1 → 0.287 | 114.11 | 53.1% | 0.787 | 7.63 | 14.96 | 0.632 | 0.963 | -9.64 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Entry (/100) → 28 | 96.17 | 50.8% | 0.788 | 7.8 | 12.33 | 0.557 | 1.036 | -10.63 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 41.07 | 35.3% | 0.216 | 19.8 | 2.07 | 0.216 | 0.216 | -10.39 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Trọng số phần Elliott (/100) → 6 | 94.92 | 50.4% | 0.772 | 8.08 | 11.75 | 0.528 | 1.036 | -10.63 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: POC volume profile cố định → 0.688 + Coin phải mạnh hơn BTC trong N ngày → 14 | 92.98 | 48.8% | 0.732 | 8.55 | 10.87 | 0.702 | 0.768 | -16.13 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Fib sóng 4 → 0.938 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 76.87 | 45.6% | 0.48 | 10.25 | 7.5 | 0.338 | 0.616 | -9.83 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Lệnh chờ hết hạn sau (nến) → 8 | 122.94 | 42.1% | 0.381 | 12.03 | 10.22 | 0.353 | 0.404 | -14.23 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Trọng số phần Entry (/100) → 33 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 28.08 | 57.1% | 0.18 | 6.08 | 4.62 | 0.217 | 0.145 | -11.38 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Mức RSI 30/70 → 0.875 | 81.05 | 50.4% | 0.6 | 9.67 | 8.38 | 0.48 | 0.751 | -16.13 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Biên mây Ichimoku → 1.35 | 79.43 | 45.4% | 0.563 | 11.28 | 7.04 | 0.599 | 0.529 | -11.46 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trọng số phần R:R (/100) → 28 | 72.25 | 45.2% | 0.573 | 9.82 | 7.36 | 0.434 | 0.723 | -8.96 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 37.3 | 40.9% | 0.424 | 9.98 | 3.74 | 0.321 | 0.553 | -8.58 |  |

### Vòng 571 — ngẫu nhiên nhiều thông số · mốc: tổng 114.31R, win 53.1%, rủi ro tụt vốn 7.6R, lời÷rủi ro 15.04

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: POC anchored → 4 | 107.73 | 43.7% | 0.485 | 11.93 | 9.03 | 0.522 | 0.448 | -6.54 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + R:R tối thiểu tới TP1 → 2.63 | 96.93 | 51.6% | 0.794 | 7.62 | 12.72 | 0.569 | 1.036 | -10.63 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + R:R tối thiểu tới TP1 → 2.38 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 71.95 | 42.8% | 0.385 | 10.97 | 6.56 | 0.416 | 0.358 | -12.21 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: POC volume profile cố định → 0.688 + Xác nhận khung nhỏ (A2) → W | 101.53 | 38.5% | 0.395 | 16.02 | 6.34 | 0.381 | 0.408 | -6.88 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Cổng Dow → TẮT | 121.21 | 43.9% | 0.572 | 12.26 | 9.89 | 0.531 | 0.612 | -19.27 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 92.88 | 49.3% | 0.645 | 8.61 | 10.79 | 0.485 | 0.819 | -12.46 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Cộng thêm ngưỡng điểm khung 1W → 2 | 112.21 | 51.7% | 0.774 | 7.82 | 14.35 | 0.641 | 0.92 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: BOS → 1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 50 → 0.75 | 26.85 | 57.7% | 0.172 | 6.14 | 4.37 | 0.197 | 0.149 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 3 | 42.41 | 38.2% | 0.386 | 14.53 | 2.92 | 0.598 | 0.165 | -5 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: BOS → 1 | 81.43 | 48.4% | 0.667 | 8.17 | 9.97 | 0.514 | 0.848 | -16.13 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Mức MACD → 0.875 | 83.73 | 38.2% | 0.336 | 16.64 | 5.03 | 0.295 | 0.375 | -3.74 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 | 113.67 | 52.4% | 0.784 | 7.73 | 14.71 | 0.641 | 0.941 | -9.66 |  |

### Vòng 570 — ngẫu nhiên nhiều thông số · mốc: tổng 114.31R, win 53.1%, rủi ro tụt vốn 7.77R, lời÷rủi ro 14.71

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL riêng khung 4H (ATR) → 0.3 | 159.86 | 39.1% | 0.553 | 18.2 | 8.78 | 0.412 | 0.693 | -13.35 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + R:R tối thiểu tới TP1 → 2.63 | 97.38 | 52.1% | 0.805 | 7.7 | 12.65 | 0.569 | 1.061 | -10.63 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 113.29 | 52.7% | 0.776 | 7.61 | 14.89 | 0.635 | 0.934 | -11.06 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 1W (ATR) → 0.3 | 73.23 | 45.9% | 0.66 | 9.33 | 7.85 | 0.434 | 0.898 | -7.53 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Ngưỡng điểm vào kèo → 74 + Điểm tối thiểu của vùng đặt SL → 2 | 104.43 | 47.8% | 0.649 | 9.43 | 11.07 | 0.561 | 0.742 | -10.69 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 1D (ATR) → 0.3 | 58.97 | 41.2% | 0.517 | 11.73 | 5.03 | 0.619 | 0.432 | -10.52 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Xác nhận khung nhỏ (A2) → W + Khung lớn phải tăng (trend ≥) → 0.425 + R:R tối thiểu riêng khung 1D → 2 | 40.05 | 35.8% | 0.165 | 20.7 | 1.93 | 0.123 | 0.209 | -6.45 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 110.67 | 51.7% | 0.763 | 7.64 | 14.49 | 0.616 | 0.926 | -9.48 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: POC volume profile cố định → 0.688 | 102.33 | 40.7% | 0.336 | 12.65 | 8.09 | 0.335 | 0.336 | -11.29 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Break mây Ichimoku → 1 | 102.55 | 51% | 0.679 | 8.18 | 12.54 | 0.591 | 0.761 | -11.05 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: EMA 50 → 0.75 | 109.12 | 51.7% | 0.763 | 7.61 | 14.34 | 0.604 | 0.934 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Số TP tối đa → 2 | 115.29 | 51.7% | 0.806 | 7.74 | 14.9 | 0.669 | 0.962 | -12.92 |  |

### Vòng 569 — ngẫu nhiên nhiều thông số · mốc: tổng 114.31R, win 53.1%, rủi ro tụt vốn 7.72R, lời÷rủi ro 14.81

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Momentum (/100) → 21 | 158.57 | 38.8% | 0.545 | 18.02 | 8.8 | 0.408 | 0.681 | -13.36 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Biên mây Ichimoku → 1.35 | 104.45 | 50% | 0.696 | 8.2 | 12.74 | 0.575 | 0.832 | -10.58 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 94.04 | 47.8% | 0.691 | 9.01 | 10.44 | 0.407 | 0.944 | -10.7 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 29.01 | 57.9% | 0.182 | 5.88 | 4.93 | 0.219 | 0.148 | -10.11 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN anchored → 0.313 | 100.98 | 40.6% | 0.328 | 12.79 | 7.9 | 0.315 | 0.339 | -10.49 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + R:R tối thiểu tới TP1 → 2.38 | 89.45 | 46.8% | 0.573 | 8.91 | 10.04 | 0.515 | 0.627 | -11.23 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 97.65 | 51.4% | 0.66 | 8.53 | 11.45 | 0.637 | 0.685 | -9.46 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 | 69.33 | 45.7% | 0.537 | 9.91 | 7 | 0.344 | 0.747 | -7.54 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: POC anchored → 4 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 131.61 | 50.9% | 0.807 | 8.54 | 15.41 | 0.802 | 0.813 | -6 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Số TP tối đa → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 87.07 | 45.6% | 0.592 | 9.99 | 8.72 | 0.449 | 0.769 | -9.16 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + R:R tối thiểu riêng khung 4H → 2 | 114.17 | 41.5% | 0.367 | 12.48 | 9.15 | 0.357 | 0.376 | -1.52 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Số TP tối đa → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 98.49 | 51% | 0.679 | 8.41 | 11.71 | 0.669 | 0.691 | -9.42 |  |

### Vòng 568 — ngẫu nhiên nhiều thông số · mốc: tổng 114.31R, win 53.1%, rủi ro tụt vốn 7.72R, lời÷rủi ro 14.81

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Fib sóng 4 → 1.56 | 113.3 | 52.7% | 0.776 | 7.69 | 14.73 | 0.614 | 0.962 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + R:R tối thiểu tới TP1 → 2.63 + Xác nhận khung nhỏ (A2) → W + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 100.95 | 37.8% | 0.41 | 16.38 | 6.16 | 0.354 | 0.46 | -8.94 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + R:R tối thiểu riêng khung 1D → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 68.31 | 41.4% | 0.534 | 10.59 | 6.45 | 0.518 | 0.548 | -4.49 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 24.4 | 56.8% | 0.157 | 6.66 | 3.66 | 0.183 | 0.133 | -11.18 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: EMA 200 → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 | 96.8 | 48.1% | 0.613 | 9.74 | 9.94 | 0.393 | 0.856 | -6.02 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần Divergence (/100) → 12 | 113.66 | 50.3% | 0.743 | 8.39 | 13.55 | 0.594 | 0.91 | -10.69 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 95.31 | 51.4% | 0.644 | 8.47 | 11.25 | 0.613 | 0.677 | -10.75 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Xác nhận khung nhỏ (A2) → W + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 57.48 | 38.5% | 0.287 | 17.52 | 3.28 | 0.2 | 0.363 | -12.82 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Khung lớn phải tăng (trend ≥) → 0.375 | 110.58 | 52.1% | 0.757 | 7.84 | 14.1 | 0.604 | 0.924 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Lệnh chờ hết hạn sau (nến) → 6 + Coin phải mạnh hơn BTC trong N ngày → 14 | 64.67 | 46.8% | 0.593 | 8.96 | 7.22 | 0.473 | 0.735 | -14.73 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 128.03 | 43.1% | 0.569 | 11.68 | 10.96 | 0.606 | 0.531 | -21.93 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 113.09 | 52.7% | 0.775 | 7.53 | 15.02 | 0.632 | 0.934 | -11.04 |  |

### Vòng 567 — ngẫu nhiên nhiều thông số · mốc: tổng 114.31R, win 53.1%, rủi ro tụt vốn 7.63R, lời÷rủi ro 14.98

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Cộng điểm phân kỳ dương ẩn → 3 | 112.39 | 52% | 0.759 | 8.07 | 13.93 | 0.635 | 0.895 | -9.66 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 118.89 | 50% | 0.762 | 8.17 | 14.55 | 0.763 | 0.761 | -10.24 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 + R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1D → 2 | 102.98 | 41.4% | 0.335 | 12.49 | 8.24 | 0.37 | 0.307 | -10.38 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: EMA 200 → 1 + R:R tối thiểu riêng khung 1D → 2 | 112.07 | 43.9% | 0.547 | 12.5 | 8.97 | 0.646 | 0.461 | -7.05 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: HVN anchored → 0.188 | 84.36 | 47.6% | 0.67 | 8.7 | 9.7 | 0.504 | 0.87 | -17.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 89.67 | 47.4% | 0.674 | 9.13 | 9.82 | 0.386 | 0.933 | -10.7 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: BOS → 1 | 78.34 | 46% | 0.481 | 10.54 | 7.43 | 0.363 | 0.594 | -9.82 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Đệm SL riêng khung 1D (ATR) → 0.3 | 111.97 | 47% | 0.666 | 10.14 | 11.04 | 0.659 | 0.673 | -6.35 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 155.63 | 38.9% | 0.531 | 18.7 | 8.32 | 0.377 | 0.687 | -13.86 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Elliott (/100) → 6 | 28.5 | 57.8% | 0.177 | 6.09 | 4.68 | 0.203 | 0.152 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Fib sóng 4 → 1.56 | 109.91 | 51% | 0.748 | 8.3 | 13.24 | 0.571 | 0.953 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Trọng số phần Elliott (/100) → 6 | 113.43 | 52.4% | 0.772 | 7.65 | 14.83 | 0.621 | 0.942 | -9.66 |  |

### Vòng 566 — ngẫu nhiên nhiều thông số · mốc: tổng 114.31R, win 53.1%, rủi ro tụt vốn 7.72R, lời÷rủi ro 14.81

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN cố định → 0.438 | 111.54 | 52.1% | 0.764 | 7.87 | 14.17 | 0.591 | 0.962 | -9.66 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu tới TP1 → 2.38 + % chốt ở TP1 → 0.287 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 30.66 | 56.2% | 0.172 | 6.03 | 5.08 | 0.24 | 0.113 | -9.25 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 78.54 | 43.8% | 0.538 | 9.98 | 7.87 | 0.469 | 0.622 | -9.16 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Mức MACD → 1.13 + Điểm tối thiểu của vùng đặt SL → 4 | 107.69 | 49.7% | 0.723 | 8.28 | 13.01 | 0.584 | 0.875 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + % chốt ở TP1 → 0.307 | 116.42 | 51.9% | 0.737 | 8.38 | 13.89 | 0.581 | 0.923 | -9.67 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: EMA 21 → 0.875 | 67.51 | 45% | 0.608 | 9.94 | 6.79 | 0.484 | 0.745 | -5.46 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số TP tối đa → 2 + Điểm vùng: Mức MACD → 1.13 | 20.54 | 56.3% | 0.13 | 6.95 | 2.96 | 0.186 | 0.081 | -10.38 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Biên mây Ichimoku → 1.05 | 76.72 | 50.4% | 0.645 | 8.38 | 9.16 | 0.552 | 0.749 | -16.96 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng thêm ngưỡng điểm khung 1D → 5 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Đệm SL riêng khung 1W (ATR) → 0.3 | 111.99 | 43.7% | 0.709 | 10.5 | 10.67 | 0.593 | 0.847 | -10.82 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Đệm SL riêng khung 4H (ATR) → 0.3 | 124.02 | 37.1% | 0.47 | 18.96 | 6.54 | 0.278 | 0.656 | -7.21 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Ngưỡng điểm vào kèo → 77 | 107.75 | 50.7% | 0.759 | 7.68 | 14.03 | 0.646 | 0.882 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 100.22 | 40.7% | 0.326 | 12.8 | 7.83 | 0.323 | 0.33 | -11.08 |  |
