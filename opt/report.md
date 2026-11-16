# Tối ưu tự động (chạy liên tục) — vòng 442

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 4974 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46.6% | 94.23R | 0.585 | 5.74R | 9.86R | 9.56 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 145 | 53.1% | 117.19R | 0.808 | 6.15R | 7.24R | 16.19 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 107 | 54.2% | 90.03R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46.6% | 94.23R | 9.86R | 9.56 | 32 | 12.5% | -14.03R |
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

### Vòng 442 — ngẫu nhiên nhiều thông số · mốc: tổng 117.19R, win 53.1%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.19

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 91.12 | 46.9% | 0.628 | 9.52 | 9.57 | 0.453 | 0.857 | -11.83 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + R:R tối thiểu riêng khung 1W → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 107.39 | 49.3% | 0.716 | 8.49 | 12.65 | 0.539 | 0.893 | -10.54 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 97.05 | 51.3% | 0.647 | 8.69 | 11.17 | 0.626 | 0.67 | -9.42 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần Momentum (/100) → 25 | 99.84 | 48.3% | 0.698 | 8.5 | 11.75 | 0.484 | 0.934 | -12.55 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm tối thiểu của vùng đặt SL → 2 | 19.72 | 54.4% | 0.134 | 7.81 | 2.52 | 0.191 | 0.093 | -11.34 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần Trend (/100) → 19 + Trọng số phần Entry (/100) → 28 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 118.31 | 48.1% | 0.739 | 8.42 | 14.05 | 0.704 | 0.78 | -11.6 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + SL tối đa (% Entry) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 85.77 | 45.9% | 0.58 | 10.11 | 8.48 | 0.396 | 0.802 | -9.99 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Trend (/100) → 12 | 23.08 | 53% | 0.139 | 7.41 | 3.11 | 0.18 | 0.1 | -10.27 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu riêng khung 4H → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 119.13 | 39.5% | 0.359 | 14.07 | 8.47 | 0.449 | 0.293 | -11.05 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Cổng Dow → CHẶT + Điểm vùng: Mức MACD → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 61.38 | 49% | 0.614 | 7.86 | 7.81 | 0.324 | 0.904 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Đệm SL riêng khung 4H (ATR) → 0.3 | 149.8 | 36.3% | 0.465 | 21.02 | 7.13 | 0.294 | 0.632 | -11.59 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 112.1 | 49.7% | 0.763 | 8.28 | 13.54 | 0.51 | 1.048 | -9.52 |  |

### Vòng 441 — ngẫu nhiên nhiều thông số · mốc: tổng 117.19R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 15.84

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 74.49 | 47.6% | 0.709 | 8.53 | 8.73 | 0.473 | 0.99 | -6.48 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: EMA 21 → 0.875 + Trọng số phần SL (/100) → 9 | 116.35 | 51.7% | 0.802 | 7.74 | 15.03 | 0.672 | 0.95 | -9.64 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + R:R tối thiểu riêng khung 1W → 2 + Xác nhận khung nhỏ (A2) → W + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 87.56 | 38.7% | 0.368 | 16.58 | 5.28 | 0.274 | 0.452 | -8.07 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần R:R (/100) → 33 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: EMA 50 → 0.75 | 122.29 | 41.9% | 0.388 | 11.98 | 10.21 | 0.346 | 0.424 | -16.77 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 | 92.77 | 48.8% | 0.58 | 9.81 | 9.46 | 0.503 | 0.669 | -6.86 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + % chốt ở TP1 → 0.307 + Cộng thêm ngưỡng điểm khung 1D → 4 + Lệnh chờ hết hạn sau (nến) → 8 | 37.99 | 40.2% | 0.413 | 10.05 | 3.78 | 0.341 | 0.503 | -8.91 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: BOS → 3 + Điểm tối thiểu của vùng đặt SL → 4 | 113.05 | 51.4% | 0.774 | 7.62 | 14.84 | 0.62 | 0.951 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 115.42 | 52.4% | 0.796 | 7.55 | 15.29 | 0.602 | 1.022 | -11.06 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Mức MACD → 0.875 | 111.14 | 51% | 0.717 | 8.51 | 13.06 | 0.591 | 0.878 | -4.67 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Coin phải mạnh hơn BTC trong N ngày → 14 | 82.55 | 50% | 0.724 | 7.99 | 10.33 | 0.501 | 0.99 | -16.16 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Biên mây Ichimoku → 1.05 | 104.03 | 46% | 0.646 | 10.35 | 10.05 | 0.633 | 0.658 | -8.51 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Trọng số phần Trend (/100) → 19 + Trọng số phần Momentum (/100) → 21 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 116.43 | 52% | 0.787 | 7.63 | 15.26 | 0.624 | 0.968 | -8.34 |  |

### Vòng 440 — ngẫu nhiên nhiều thông số · mốc: tổng 117.19R, win 53.1%, rủi ro tụt vốn 7.39R, lời÷rủi ro 15.86

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 106.16 | 50.3% | 0.722 | 8.05 | 13.19 | 0.552 | 0.931 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + % chốt ở TP1 → 0.287 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 79.5 | 44.5% | 0.513 | 10.96 | 7.25 | 0.548 | 0.481 | -1.5 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 85.24 | 42.7% | 0.461 | 10.85 | 7.86 | 0.462 | 0.46 | -8.59 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Biên mây Ichimoku → 1.05 | 113.6 | 50.7% | 0.768 | 7.59 | 14.97 | 0.642 | 0.897 | -11.85 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: EMA 21 → 0.875 + Cộng thêm ngưỡng điểm khung 1W → 2 | 115.74 | 51% | 0.798 | 7.74 | 14.95 | 0.68 | 0.928 | -9.66 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Ngưỡng điểm vào kèo → 77 | 112.27 | 51.4% | 0.814 | 7.42 | 15.13 | 0.628 | 1.016 | -9.69 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Cổng Dow → CHẶT + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 78.8 | 51.4% | 0.71 | 7.08 | 11.13 | 0.311 | 1.049 | -10.54 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: BOS → 1 | 28.95 | 57.3% | 0.184 | 5.96 | 4.86 | 0.23 | 0.139 | -11.01 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Lệnh chờ hết hạn sau (nến) → 6 + Ngưỡng điểm vào kèo → 77 + R:R tối thiểu riêng khung 1D → 2 | 86 | 44.2% | 0.551 | 9.78 | 8.79 | 0.595 | 0.511 | -6.03 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: POC volume profile cố định → 0.688 | 64.28 | 47.2% | 0.595 | 9.26 | 6.94 | 0.454 | 0.766 | -7.1 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 68.5 | 46.8% | 0.617 | 9.22 | 7.43 | 0.4 | 0.855 | -6.51 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 | 161.86 | 38.8% | 0.556 | 17.5 | 9.25 | 0.391 | 0.723 | -14.36 |  |

### Vòng 439 — ngẫu nhiên nhiều thông số · mốc: tổng 117.19R, win 53.1%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.14

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Số TP tối đa → 2 | 117.47 | 52.7% | 0.805 | 7.56 | 15.54 | 0.608 | 1.036 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: EMA 21 → 0.875 + Trọng số phần Trend (/100) → 19 | 99.57 | 46% | 0.611 | 8.99 | 11.08 | 0.535 | 0.684 | -10.97 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + % chốt ở TP1 → 0.287 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 96.04 | 50.3% | 0.662 | 8.55 | 11.23 | 0.526 | 0.812 | -8.68 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: POC anchored → 4 | 109.43 | 50.6% | 0.711 | 8.25 | 13.26 | 0.554 | 0.875 | -6.89 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 129.57 | 49.7% | 0.825 | 7.89 | 16.42 | 0.765 | 0.895 | -10.06 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 110.23 | 46.6% | 0.676 | 10.08 | 10.94 | 0.639 | 0.712 | -5.33 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: HVN cố định → 0.563 | 74.49 | 47.6% | 0.709 | 8.53 | 8.73 | 0.473 | 0.99 | -6.48 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 106.16 | 50.3% | 0.722 | 8.08 | 13.14 | 0.552 | 0.931 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Cộng điểm phân kỳ dương ẩn → 2.63 | 101.83 | 48.9% | 0.754 | 8.18 | 12.45 | 0.478 | 1.019 | -10.7 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Mức MACD → 0.875 + SL tối đa (% Entry) → 0.35 | 107.37 | 51.7% | 0.741 | 8.15 | 13.17 | 0.575 | 0.918 | -9.66 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 93.82 | 47% | 0.63 | 9.84 | 9.53 | 0.475 | 0.835 | -9.16 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + SL tối đa (% Entry) → 0.425 + Điểm tối thiểu của vùng đặt SL → 2 + R:R tối thiểu tới TP1 → 2.38 | 97.51 | 47.2% | 0.598 | 8.73 | 11.17 | 0.524 | 0.666 | -10.97 |  |

### Vòng 438 — ngẫu nhiên nhiều thông số · mốc: tổng 117.19R, win 53.1%, rủi ro tụt vốn 7.3R, lời÷rủi ro 16.05

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: Mức MACD → 1.13 | 114.81 | 51.7% | 0.792 | 7.53 | 15.25 | 0.602 | 1.013 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + % chốt ở TP1 → 0.287 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Trend (/100) → 12 | 104.94 | 51.4% | 0.729 | 7.79 | 13.47 | 0.591 | 0.879 | -11.76 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Đệm SL riêng khung 1W (ATR) → 0.3 | 91.49 | 47.1% | 0.769 | 8.8 | 10.4 | 0.395 | 1.162 | -12.71 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 112.77 | 51% | 0.767 | 7.64 | 14.76 | 0.594 | 0.952 | -10 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 111.39 | 47.9% | 0.763 | 8.93 | 12.47 | 0.522 | 1.055 | -12.06 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 112.85 | 50.3% | 0.757 | 8 | 14.11 | 0.642 | 0.875 | -10.54 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Momentum (/100) → 21 | 110.32 | 46.9% | 0.69 | 10.3 | 10.71 | 0.676 | 0.702 | -6.35 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: BOS → 3 | 106.44 | 50.7% | 0.739 | 7.91 | 13.46 | 0.511 | 0.994 | -9.62 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 79.24 | 44.7% | 0.492 | 10.35 | 7.66 | 0.423 | 0.557 | -9.82 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 | 111.15 | 47.2% | 0.69 | 10.08 | 11.03 | 0.659 | 0.72 | -6.35 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + R:R tối thiểu tới TP1 → 2.63 + Trọng số phần SL (/100) → 9 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 97.39 | 51.7% | 0.812 | 7.58 | 12.85 | 0.528 | 1.135 | -10.45 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Divergence (/100) → 9 + Cộng thêm ngưỡng điểm khung 4H → 2 | 114.97 | 52.1% | 0.81 | 7.51 | 15.31 | 0.639 | 1 | -9.66 |  |

### Vòng 437 — ngẫu nhiên nhiều thông số · mốc: tổng 117.19R, win 53.1%, rủi ro tụt vốn 7.39R, lời÷rủi ro 15.86

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Lệnh chờ hết hạn sau (nến) → 8 | 112.75 | 51% | 0.718 | 8.02 | 14.06 | 0.547 | 0.926 | -11.25 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 92.89 | 46.7% | 0.619 | 9.77 | 9.51 | 0.459 | 0.835 | -9.16 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Elliott (/100) → 10 + SL tối đa (% Entry) → 0.425 | 110.81 | 48.6% | 0.792 | 8.25 | 13.43 | 0.592 | 0.997 | -10.7 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 109.79 | 49.6% | 0.779 | 8.27 | 13.28 | 0.581 | 1.03 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần R:R (/100) → 33 + Điểm vùng: POC anchored → 2 | 103.12 | 50% | 0.678 | 8.46 | 12.19 | 0.527 | 0.846 | -8.63 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Trọng số phần Divergence (/100) → 12 + Trọng số phần Momentum (/100) → 21 + Trọng số phần Elliott (/100) → 10 | 115.66 | 52.4% | 0.809 | 7.5 | 15.42 | 0.64 | 1 | -8.61 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Cổng Dow → CHẶT + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Mức MACD → 1.13 | 82.81 | 50.9% | 0.726 | 7.48 | 11.07 | 0.382 | 1.036 | -13.98 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức MACD → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 107.33 | 44.2% | 0.624 | 11.23 | 9.56 | 0.791 | 0.472 | -6.38 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: BOS → 1 | 117.47 | 52.7% | 0.805 | 7.63 | 15.4 | 0.608 | 1.036 | -9.66 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + R:R tối thiểu riêng khung 1D → 2 | 28.44 | 54.5% | 0.152 | 6.79 | 4.19 | 0.195 | 0.118 | -10.22 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: POC volume profile cố định → 0.688 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 83.86 | 52.3% | 0.756 | 7.2 | 11.65 | 0.267 | 1.142 | -10.73 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: EMA 200 → 3 + Trọng số phần SL (/100) → 9 | 91.06 | 48.6% | 0.624 | 8.94 | 10.19 | 0.502 | 0.759 | -5.53 |  |

### Vòng 436 — ngẫu nhiên nhiều thông số · mốc: tổng 114.86R, win 52.4%, rủi ro tụt vốn 7.62R, lời÷rủi ro 15.07

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 15.92 | 36.7% | 0.201 | 13.71 | 1.16 | 0.026 | 0.521 | -6.11 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Break mây Ichimoku → 3 | 105.45 | 49.4% | 0.651 | 9.15 | 11.52 | 0.489 | 0.835 | -9.4 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + R:R tối thiểu riêng khung 4H → 2 | 111.55 | 40.5% | 0.348 | 13.19 | 8.46 | 0.298 | 0.388 | -6.73 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: POC volume profile cố định → 0.688 | 112.76 | 51% | 0.778 | 7.86 | 14.35 | 0.606 | 0.966 | -10.95 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 113.97 | 50.9% | 0.717 | 8.63 | 13.21 | 0.533 | 0.928 | -10.95 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần Momentum (/100) → 25 | 96.01 | 50% | 0.716 | 8.16 | 11.77 | 0.582 | 0.878 | -8.27 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Cổng Dow → CHẶT + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 50 → 0.75 | 26.18 | 60.8% | 0.201 | 5.04 | 5.19 | 0.198 | 0.204 | -6.86 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Break mây Ichimoku → 1 + Số TP tối đa → 2 | 99.97 | 48.3% | 0.68 | 8.7 | 11.49 | 0.475 | 0.912 | -11.19 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 1D (ATR) → 0.3 | 94.47 | 45% | 0.626 | 10.96 | 8.62 | 0.662 | 0.589 | -3.28 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: HVN cố định → 0.563 | 101.79 | 47.3% | 0.602 | 8.9 | 11.44 | 0.622 | 0.585 | -9.25 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Đệm SL riêng khung 1W (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 4H → 2 | 58.66 | 38.8% | 0.274 | 15.24 | 3.85 | 0.248 | 0.3 | -7.63 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần R:R (/100) → 33 | 97.28 | 50.4% | 0.721 | 8.14 | 11.95 | 0.571 | 0.902 | -8.27 |  |

### Vòng 435 — ngẫu nhiên nhiều thông số · mốc: tổng 117.19R, win 53.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 15.92

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Cộng thêm ngưỡng điểm khung 1D → 7 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib sóng 4 → 1.56 | 115.29 | 42.2% | 0.374 | 12.06 | 9.56 | 0.325 | 0.416 | -10.02 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cổng Dow → CHẶT + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 64.41 | 49% | 0.671 | 8.51 | 7.57 | 0.429 | 0.903 | -9.18 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần Divergence (/100) → 12 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 117.19 | 53.1% | 0.808 | 7.36 | 15.92 | 0.624 | 1.022 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + SL tối đa (% Entry) → 0.35 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 110.14 | 51% | 0.77 | 7.97 | 13.82 | 0.544 | 1.034 | -11.06 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 106.36 | 50.7% | 0.728 | 8.09 | 13.15 | 0.561 | 0.931 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Cổng Dow → CHẶT + Cộng điểm phân kỳ dương ẩn → 3.5 + Coin phải mạnh hơn BTC trong N ngày → 14 | 65.4 | 51.6% | 0.688 | 7.26 | 9.01 | 0.356 | 1.028 | -13.5 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Mức MACD → 1.13 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 200 → 1 | 71.02 | 47.6% | 0.564 | 9.58 | 7.41 | 0.517 | 0.616 | -14.93 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 109 | 51.7% | 0.762 | 7.87 | 13.85 | 0.588 | 0.959 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + % chốt ở TP1 → 0.287 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Khung lớn phải tăng (trend ≥) → 0.375 | 113.74 | 52.4% | 0.784 | 7.59 | 14.99 | 0.59 | 1.004 | -9.64 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: BOS → 1 | 106.66 | 52.1% | 0.731 | 7.66 | 13.92 | 0.579 | 0.9 | -11.78 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 99.41 | 51.7% | 0.676 | 7.92 | 12.55 | 0.636 | 0.721 | -9.46 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần Divergence (/100) → 12 | 83.75 | 38.1% | 0.343 | 16.81 | 4.98 | 0.277 | 0.402 | -4.56 |  |

### Vòng 434 — ngẫu nhiên nhiều thông số · mốc: tổng 117.19R, win 53.1%, rủi ro tụt vốn 7.34R, lời÷rủi ro 15.97

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Trọng số phần Divergence (/100) → 9 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Biên mây Ichimoku → 1.05 | 112.77 | 49% | 0.737 | 8.4 | 13.42 | 0.708 | 0.77 | -12.36 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Fib sóng 4 → 0.938 + R:R tối thiểu riêng khung 1W → 2 + SL tối đa (% Entry) → 0.425 | 104.51 | 51.4% | 0.706 | 8.22 | 12.71 | 0.575 | 0.831 | -11.05 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Khung lớn phải tăng (trend ≥) → 0.375 | 97.73 | 51% | 0.665 | 8.42 | 11.61 | 0.596 | 0.742 | -9.42 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + % chốt ở TP1 → 0.287 | 117.01 | 53.1% | 0.807 | 7.34 | 15.94 | 0.621 | 1.023 | -9.64 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Cổng Dow → TẮT + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 108.18 | 41.2% | 0.501 | 12.96 | 8.35 | 0.464 | 0.54 | -12.1 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: HVN cố định → 0.438 + Trọng số phần Entry (/100) → 28 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 95.24 | 50% | 0.635 | 8.42 | 11.31 | 0.572 | 0.708 | -10.39 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 105.05 | 47.8% | 0.669 | 9.09 | 11.56 | 0.564 | 0.778 | -11.73 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 112.58 | 50.7% | 0.782 | 7.76 | 14.51 | 0.651 | 0.924 | -8.34 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + SL tối đa (% Entry) → 0.425 | 117.18 | 53.1% | 0.808 | 7.25 | 16.16 | 0.624 | 1.022 | -11.06 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Cổng Dow → TẮT | 125.65 | 43% | 0.587 | 11.73 | 10.71 | 0.49 | 0.683 | -15.68 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Fib sóng 4 → 1.56 | 103.49 | 50% | 0.699 | 8.52 | 12.15 | 0.519 | 0.9 | -11.3 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: EMA 200 → 3 | 82.45 | 48.3% | 0.711 | 8.23 | 10.02 | 0.537 | 0.91 | -15.08 |  |

### Vòng 433 — ngẫu nhiên nhiều thông số · mốc: tổng 117.19R, win 53.1%, rủi ro tụt vốn 7.3R, lời÷rủi ro 16.05

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + SL tối đa (% Entry) → 0.35 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Mức MACD → 1.13 | 72.58 | 46.6% | 0.554 | 9.89 | 7.34 | 0.364 | 0.765 | -2.84 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần R:R (/100) → 28 + R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 1D → 7 | 112.01 | 47% | 0.752 | 9.39 | 11.93 | 0.645 | 0.854 | -10.78 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần Trend (/100) → 19 | 98.41 | 50.7% | 0.734 | 7.6 | 12.95 | 0.585 | 0.913 | -8.27 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + R:R tối thiểu tới TP1 → 2.38 | 96.77 | 46.8% | 0.612 | 8.75 | 11.06 | 0.512 | 0.708 | -10.97 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: HVN cố định → 0.563 | 117.69 | 51.7% | 0.823 | 7.42 | 15.86 | 0.676 | 0.99 | -13.33 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 116.99 | 52.7% | 0.801 | 7.53 | 15.54 | 0.614 | 1.022 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + R:R tối thiểu riêng khung 1D → 2 | 113.88 | 47.7% | 0.662 | 8.57 | 13.29 | 0.655 | 0.669 | -3.81 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: EMA 200 → 1 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 79.02 | 54.4% | 0.632 | 7.86 | 10.05 | 0.5 | 0.758 | -6.51 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Trọng số phần Elliott (/100) → 6 | 103.12 | 50% | 0.678 | 8.57 | 12.03 | 0.527 | 0.846 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + R:R tối thiểu tới TP1 → 2.63 | 26.29 | 37.7% | 0.381 | 10.7 | 2.46 | 0.254 | 0.546 | -1.95 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Cổng Dow → CHẶT + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Fib sóng 4 → 0.938 | 57.21 | 45.5% | 0.433 | 11.64 | 4.91 | 0.256 | 0.56 | -3.82 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 86.88 | 51.3% | 0.743 | 7.72 | 11.25 | 0.552 | 0.972 | -16.13 |  |
