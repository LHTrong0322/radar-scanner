# Tối ưu tự động (chạy liên tục) — vòng 884

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 10263 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46.6% | 94.52R | 0.58 | 6.44R | 10.04R | 9.41 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 145 | 53.8% | 119.18R | 0.822 | 5.09R | 7.55R | 15.79 | 28 | 17.9% | -9.92R | -0.354 | 10.54R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 27 | 51.9% | 19.41R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.77R | 2 | 0% | -2.3R |
| 4H | 108 | 54.6% | 92R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46.6% | 94.52R | 10.04R | 9.41 | 31 | 12.9% | -13R |
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

### Vòng 884 — ngẫu nhiên nhiều thông số · mốc: tổng 119.18R, win 53.8%, rủi ro tụt vốn 7.55R, lời÷rủi ro 15.79

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần SL (/100) → 9 + Điểm vùng: MACD cắt lên Signal → 0.563 | 98.08 | 39.4% | 0.386 | 16.65 | 5.89 | 0.36 | 0.409 | -2.71 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần SL (/100) → 7 + Ngưỡng điểm vào kèo → 74 | 107.34 | 51.7% | 0.72 | 8.06 | 13.32 | 0.571 | 0.881 | -10.75 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 | 107.39 | 51.7% | 0.711 | 8.7 | 12.34 | 0.582 | 0.849 | -10.89 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: EMA 50 → 0.75 + Cộng điểm phân kỳ dương ẩn → 3 | 138.27 | 45.8% | 0.646 | 10.93 | 12.65 | 0.58 | 0.71 | -19.53 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trọng số phần SL (/100) → 9 + Điểm vùng: Mức RSI 30/70 → 0.875 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 135.24 | 51.5% | 0.8 | 8.53 | 15.85 | 0.777 | 0.828 | -10.5 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần R:R (/100) → 33 | 104.64 | 50.3% | 0.712 | 8.3 | 12.61 | 0.597 | 0.816 | -10.96 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 109.45 | 51.7% | 0.765 | 7.81 | 14.01 | 0.571 | 0.962 | -11.02 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: BOS → 3 + % chốt ở TP1 → 0.307 + Số TP tối đa → 2 | 117.22 | 52.7% | 0.803 | 7.73 | 15.16 | 0.627 | 0.994 | -8.91 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 118.55 | 53.1% | 0.818 | 7.6 | 15.6 | 0.65 | 0.997 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 81.85 | 45.2% | 0.487 | 10.53 | 7.77 | 0.4 | 0.57 | -8.23 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + SL tối đa (% Entry) → 0.425 | 29.89 | 58.4% | 0.194 | 5.99 | 4.99 | 0.233 | 0.159 | -9.5 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + SL tối đa (% Entry) → 0.425 + Điểm vùng: HVN anchored → 0.313 | 108.16 | 51.4% | 0.731 | 8.08 | 13.39 | 0.633 | 0.824 | -10.96 |  |

### Vòng 883 — ngẫu nhiên nhiều thông số · mốc: tổng 119.19R, win 53.4%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.24

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần Elliott (/100) → 10 + SL tối đa (% Entry) → 0.425 + Điểm vùng: HVN cố định → 0.438 | 110.8 | 51% | 0.775 | 7.92 | 13.99 | 0.616 | 0.95 | -9.92 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 | 108.17 | 51% | 0.726 | 8.28 | 13.06 | 0.624 | 0.824 | -9.94 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + % chốt ở TP1 → 0.307 | 119.28 | 53.4% | 0.817 | 7.32 | 16.3 | 0.637 | 1.018 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + SL tối đa (% Entry) → 0.425 + Trọng số phần SL (/100) → 9 + Điểm vùng: EMA 21 → 0.875 | 119.54 | 52% | 0.797 | 7.63 | 15.67 | 0.688 | 0.912 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 104.46 | 47.2% | 0.594 | 9.16 | 11.4 | 0.558 | 0.627 | -8.18 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu riêng khung 1W → 2 | 27.22 | 56.2% | 0.168 | 6.36 | 4.28 | 0.207 | 0.135 | -9.48 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 35.95 | 57% | 0.218 | 5.29 | 6.8 | 0.304 | 0.139 | -8.86 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: BOS → 1 | 107.45 | 50.3% | 0.721 | 8.31 | 12.93 | 0.554 | 0.899 | -9.99 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: BOS → 3 | 81.16 | 38.3% | 0.307 | 19.22 | 4.22 | 0.347 | 0.267 | -4.33 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 99.27 | 51.4% | 0.68 | 8.4 | 11.82 | 0.623 | 0.74 | -8.43 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm vào kèo → 74 | 91.44 | 35.9% | 0.357 | 21.25 | 4.3 | 0.253 | 0.458 | -13.75 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 92.4 | 47% | 0.612 | 10.02 | 9.22 | 0.493 | 0.742 | -8.07 |  |

### Vòng 882 — ngẫu nhiên nhiều thông số · mốc: tổng 119.19R, win 53.4%, rủi ro tụt vốn 7.42R, lời÷rủi ro 16.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Ngưỡng điểm vào kèo → 74 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 28.97 | 56.9% | 0.173 | 6.34 | 4.57 | 0.187 | 0.162 | -8.42 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Trọng số phần Trend (/100) → 19 | 118.54 | 52.7% | 0.801 | 7.54 | 15.72 | 0.625 | 0.997 | -9.92 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: BOS → 3 + Cổng Dow → TẮT | 137.73 | 44.3% | 0.623 | 11.53 | 11.95 | 0.558 | 0.691 | -20.59 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Trọng số phần Elliott (/100) → 10 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Momentum (/100) → 25 | 106.63 | 46.2% | 0.735 | 9.62 | 11.08 | 0.516 | 0.952 | -9.67 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần R:R (/100) → 28 + Số TP tối đa → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 117.12 | 52.1% | 0.802 | 7.76 | 15.09 | 0.624 | 1.001 | -9.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Ngưỡng điểm vào kèo → 74 | 114.18 | 46.2% | 0.66 | 10.93 | 10.45 | 0.61 | 0.706 | -5.32 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Break mây Ichimoku → 1 + Cộng thêm ngưỡng điểm khung 1D → 5 | 68.07 | 35.3% | 0.312 | 21.05 | 3.23 | 0.131 | 0.522 | -0.23 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Entry (/100) → 33 | 98.68 | 51% | 0.671 | 8.23 | 11.99 | 0.629 | 0.714 | -9.72 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm ADX > 25 và +DI trội (Momentum) → 3 + SL tối đa (% Entry) → 0.425 + Điểm vùng: POC volume profile cố định → 0.688 | 71.68 | 52.6% | 0.618 | 7.48 | 9.58 | 0.403 | 0.799 | -11.81 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + R:R tối thiểu tới TP1 → 2.38 + Lệnh chờ hết hạn sau (nến) → 8 + Cổng Dow → CHẶT | 70.5 | 38.9% | 0.312 | 17.26 | 4.08 | 0.276 | 0.34 | -14.69 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 102.7 | 50.3% | 0.708 | 8.13 | 12.63 | 0.476 | 0.972 | -10.48 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Xác nhận khung nhỏ (A2) → W | 105.72 | 40% | 0.415 | 15.4 | 6.86 | 0.366 | 0.459 | -2.71 |  |

### Vòng 881 — ngẫu nhiên nhiều thông số · mốc: tổng 119.19R, win 53.4%, rủi ro tụt vốn 7.42R, lời÷rủi ro 16.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 112.33 | 51.3% | 0.749 | 8.26 | 13.6 | 0.575 | 0.942 | -9.57 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + R:R tối thiểu riêng khung 1D → 2 + Lệnh chờ hết hạn sau (nến) → 6 | 73.21 | 43.2% | 0.501 | 10.66 | 6.87 | 0.516 | 0.486 | -13.72 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần SL (/100) → 7 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 | 105.07 | 45.7% | 0.607 | 9.56 | 10.99 | 0.61 | 0.604 | -11.24 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Biên mây Ichimoku → 1.35 + Số TP tối đa → 2 | 91.45 | 50.8% | 0.75 | 8.11 | 11.28 | 0.596 | 0.931 | -15.37 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Mức MACD → 0.875 | 113.14 | 52.4% | 0.78 | 7.62 | 14.85 | 0.621 | 0.946 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 119.09 | 52.3% | 0.789 | 7.82 | 15.23 | 0.614 | 0.975 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 110.44 | 51.3% | 0.736 | 8.31 | 13.29 | 0.575 | 0.916 | -9.6 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Đệm SL riêng khung 1W (ATR) → 0.3 + % chốt ở TP1 → 0.307 + R:R tối thiểu riêng khung 1D → 2 | 89.81 | 43.6% | 0.551 | 10.73 | 8.37 | 0.43 | 0.647 | -8.97 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + R:R tối thiểu riêng khung 1W → 2 | 109.83 | 51.3% | 0.732 | 8.21 | 13.38 | 0.631 | 0.831 | -10.96 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: HVN cố định → 0.563 + Trọng số phần SL (/100) → 7 | 132.54 | 37% | 0.485 | 19.77 | 6.7 | 0.258 | 0.714 | -3.23 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 90.15 | 50.8% | 0.751 | 8 | 11.27 | 0.586 | 0.946 | -16.39 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 92.87 | 45.7% | 0.573 | 9.88 | 9.4 | 0.496 | 0.64 | -10.54 |  |

### Vòng 880 — ngẫu nhiên nhiều thông số · mốc: tổng 120.8R, win 53.4%, rủi ro tụt vốn 7.21R, lời÷rủi ro 16.75

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Xác nhận khung nhỏ (A2) → W | 93.83 | 39% | 0.362 | 16.71 | 5.62 | 0.329 | 0.395 | -7.09 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Break mây Ichimoku → 1 | 119.43 | 48.4% | 0.751 | 8.36 | 14.29 | 0.701 | 0.807 | -10.57 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 104.15 | 51.7% | 0.699 | 7.66 | 13.6 | 0.637 | 0.767 | -9.72 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Cộng điểm phân kỳ dương ẩn → 2.25 + Trọng số phần Entry (/100) → 33 | 117.66 | 51.3% | 0.754 | 7.98 | 14.74 | 0.62 | 0.915 | -4.93 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Fib sóng 4 → 1.56 | 106.06 | 50% | 0.707 | 8.27 | 12.82 | 0.509 | 0.922 | -10.16 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Trend (/100) → 19 | 115.68 | 51.7% | 0.787 | 7.59 | 15.24 | 0.587 | 1 | -9.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Cộng thêm ngưỡng điểm khung 1D → 3 | 117.18 | 45.8% | 0.655 | 10.53 | 11.13 | 0.567 | 0.737 | -6.36 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Xác nhận khung nhỏ (A2) → W + Trọng số phần Elliott (/100) → 6 | 107.52 | 39.4% | 0.388 | 16.53 | 6.5 | 0.346 | 0.426 | 0.34 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Khung lớn phải tăng (trend ≥) → 0.425 | 118.35 | 53.2% | 0.839 | 7.1 | 16.67 | 0.606 | 1.104 | -9.96 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Cổng Dow → TẮT | 140.14 | 44.7% | 0.646 | 11.3 | 12.4 | 0.584 | 0.707 | -17.31 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm tối thiểu của vùng đặt SL → 4 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 88.38 | 48.3% | 0.593 | 8.78 | 10.07 | 0.526 | 0.659 | -5.53 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: EMA 200 → 3 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Mức MACD → 1.13 | 85.07 | 46.3% | 0.532 | 9.12 | 9.33 | 0.414 | 0.631 | -9.91 |  |

### Vòng 879 — ngẫu nhiên nhiều thông số · mốc: tổng 120.8R, win 53.4%, rủi ro tụt vốn 7.18R, lời÷rủi ro 16.82

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 104.77 | 39.5% | 0.409 | 15.96 | 6.56 | 0.367 | 0.448 | -2.95 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: MACD cắt lên Signal → 0.438 + Cổng Dow → TẮT | 84.87 | 41.9% | 0.474 | 13.11 | 6.47 | 0.427 | 0.521 | -22.02 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 98.24 | 46.9% | 0.668 | 8.81 | 11.15 | 0.493 | 0.872 | -8.13 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Mức MACD → 1.13 | 72.4 | 35.8% | 0.302 | 18.89 | 3.83 | 0.245 | 0.354 | -8.88 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần Trend (/100) → 12 | 93.02 | 38.6% | 0.359 | 16.93 | 5.49 | 0.335 | 0.382 | -4.03 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Cổng Dow → TẮT + Điểm vùng: BOS → 1 | 140.14 | 44.7% | 0.64 | 11.02 | 12.72 | 0.569 | 0.712 | -17.94 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 109.03 | 47.3% | 0.645 | 10.01 | 10.89 | 0.685 | 0.61 | -5.12 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Số TP tối đa → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần SL (/100) → 9 | 123.73 | 49.7% | 0.788 | 8.36 | 14.8 | 0.757 | 0.824 | -10.5 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 115.6 | 53% | 0.766 | 7.74 | 14.94 | 0.596 | 0.957 | -9.92 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Cộng điểm phân kỳ dương ẩn → 2.25 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 77.93 | 45.8% | 0.66 | 9.07 | 8.59 | 0.484 | 0.843 | -7.52 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Xác nhận khung nhỏ (A2) → W + Ngưỡng điểm vào kèo → 77 | 87.91 | 38.4% | 0.359 | 16.25 | 5.41 | 0.356 | 0.361 | -2.77 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 200 → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 108.16 | 50.3% | 0.68 | 8.63 | 12.53 | 0.574 | 0.799 | -4.65 |  |

### Vòng 878 — ngẫu nhiên nhiều thông số · mốc: tổng 120.8R, win 53.4%, rủi ro tụt vốn 7.13R, lời÷rủi ro 16.94

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm tối thiểu của vùng đặt SL → 4 | 113.76 | 52.4% | 0.774 | 7.3 | 15.58 | 0.627 | 0.927 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 104.5 | 52% | 0.706 | 7.94 | 13.16 | 0.637 | 0.783 | -9.72 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + R:R tối thiểu riêng khung 1W → 2 | 110.88 | 51.4% | 0.749 | 7.52 | 14.74 | 0.656 | 0.838 | -9.67 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + % chốt ở TP1 → 0.307 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần R:R (/100) → 33 | 93.75 | 46.9% | 0.656 | 10.1 | 9.28 | 0.671 | 0.641 | -11.8 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: EMA 21 → 0.875 | 107.45 | 50.4% | 0.808 | 8.34 | 12.88 | 0.641 | 0.982 | -8.77 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 97.3 | 49.7% | 0.653 | 8.86 | 10.98 | 0.416 | 0.921 | -7.84 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 98.5 | 47.5% | 0.623 | 8.5 | 11.59 | 0.496 | 0.742 | -11.49 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cổng Dow → CHẶT | 30.99 | 64.1% | 0.237 | 4.42 | 7.01 | 0.225 | 0.246 | -6.93 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 112.92 | 52% | 0.763 | 7.99 | 14.13 | 0.56 | 0.989 | -8.63 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cộng thêm ngưỡng điểm khung 1W → 2 | 109.7 | 43.7% | 0.494 | 11.85 | 9.26 | 0.468 | 0.522 | -12.92 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Cộng thêm ngưỡng điểm khung 4H → -1 + R:R tối thiểu riêng khung 4H → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 124.95 | 39.6% | 0.33 | 13.65 | 9.15 | 0.293 | 0.361 | -13.64 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Mức MACD → 1.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 76.56 | 46.8% | 0.69 | 8.53 | 8.98 | 0.423 | 0.992 | -6.42 |  |

### Vòng 877 — ngẫu nhiên nhiều thông số · mốc: tổng 120.8R, win 53.4%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.64

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + % chốt ở TP1 → 0.287 + Điểm vùng: BOS → 3 | 117.41 | 52.8% | 0.827 | 7.15 | 16.42 | 0.618 | 1.054 | -9.9 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần R:R (/100) → 33 | 89.72 | 50.4% | 0.754 | 7.61 | 11.79 | 0.56 | 0.972 | -16.39 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 113.1 | 50.3% | 0.739 | 8.11 | 13.95 | 0.553 | 0.948 | -10.89 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Ngưỡng điểm vào kèo → 77 + Trọng số phần Divergence (/100) → 9 | 103.27 | 50.7% | 0.707 | 7.67 | 13.46 | 0.671 | 0.745 | -9.69 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Mức MACD → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 112.25 | 47.9% | 0.791 | 8.34 | 13.46 | 0.568 | 1.054 | -9.17 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 120.8 | 53.4% | 0.827 | 7.26 | 16.64 | 0.635 | 1.042 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 39.22 | 41.4% | 0.451 | 9.73 | 4.03 | 0.372 | 0.547 | -7.55 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: Biên mây Ichimoku → 1.05 + Cộng thêm ngưỡng điểm khung 1W → -1 | 108.56 | 51.4% | 0.744 | 7.68 | 14.14 | 0.594 | 0.901 | -10.75 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Elliott (/100) → 10 + Số TP tối đa → 2 | 113.39 | 48.6% | 0.822 | 8.07 | 14.05 | 0.602 | 1.075 | -9.17 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 110.2 | 48.9% | 0.782 | 8.42 | 13.09 | 0.569 | 1.03 | -10.14 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + % chốt ở TP1 → 0.287 + Điểm vùng: MACD cắt lên Signal → 0.438 | 109.91 | 50.6% | 0.705 | 8.84 | 12.43 | 0.467 | 0.968 | -7.32 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + R:R tối thiểu tới TP1 → 2.38 | 97.17 | 48.1% | 0.623 | 8.46 | 11.49 | 0.475 | 0.76 | -11.49 |  |

### Vòng 876 — ngẫu nhiên nhiều thông số · mốc: tổng 117.34R, win 53.1%, rủi ro tụt vốn 7.27R, lời÷rủi ro 16.14

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: POC anchored → 2 | 100.73 | 49% | 0.676 | 8.47 | 11.89 | 0.523 | 0.835 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: MACD cắt lên Signal → 0.563 | 116.33 | 52.8% | 0.808 | 7.65 | 15.21 | 0.61 | 1.03 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần Momentum (/100) → 21 | 104.21 | 50% | 0.695 | 8.82 | 11.82 | 0.517 | 0.898 | -6.32 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Elliott (/100) → 6 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Mức MACD → 0.875 | 24.78 | 56.7% | 0.158 | 6.52 | 3.8 | 0.138 | 0.176 | -8.44 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: HVN anchored → 0.188 + Trọng số phần Divergence (/100) → 12 | 116.33 | 52.8% | 0.808 | 7.65 | 15.21 | 0.61 | 1.03 | -8.9 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 105.32 | 51.4% | 0.731 | 7.94 | 13.26 | 0.567 | 0.91 | -9.74 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: POC anchored → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 54.8 | 43.4% | 0.517 | 9.96 | 5.5 | 0.325 | 0.717 | -6.37 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Cổng Dow → CHẶT + Lệnh chờ hết hạn sau (nến) → 6 + Khung lớn phải tăng (trend ≥) → 0.375 | 66.27 | 51.5% | 0.669 | 6.96 | 9.52 | 0.285 | 0.977 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Trọng số phần SL (/100) → 7 + Điểm vùng: Biên mây Ichimoku → 1.35 | 110.73 | 51% | 0.753 | 8.11 | 13.65 | 0.576 | 0.948 | -6.59 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 50 → 1.13 | 21.17 | 55.7% | 0.134 | 6.79 | 3.12 | 0.107 | 0.161 | -7.68 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần SL (/100) → 7 | 140.33 | 38% | 0.494 | 18.88 | 7.43 | 0.29 | 0.698 | -10.48 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: MACD cắt lên Signal → 0.438 | 83.67 | 42.2% | 0.504 | 12.26 | 6.82 | 0.31 | 0.718 | -4.54 |  |

### Vòng 875 — ngẫu nhiên nhiều thông số · mốc: tổng 117.35R, win 52.8%, rủi ro tụt vốn 7.48R, lời÷rủi ro 15.69

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + R:R tối thiểu riêng khung 1D → 2 | 85.99 | 42.2% | 0.46 | 10.96 | 7.85 | 0.473 | 0.448 | -6.9 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 21 → 0.875 | 95.27 | 43.2% | 0.515 | 10.75 | 8.86 | 0.577 | 0.457 | -19.33 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: HVN cố định → 0.563 | 97.55 | 38.9% | 0.387 | 15.99 | 6.1 | 0.35 | 0.419 | 0.57 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Break mây Ichimoku → 3 | 125.41 | 43.8% | 0.486 | 10.6 | 11.83 | 0.513 | 0.461 | -9.82 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Trọng số phần SL (/100) → 7 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 138.94 | 37.8% | 0.482 | 19.08 | 7.28 | 0.279 | 0.689 | -12.02 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: HVN anchored → 0.313 | 113.96 | 51% | 0.786 | 7.93 | 14.37 | 0.585 | 1.008 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Entry (/100) → 28 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 116.15 | 52.1% | 0.796 | 7.28 | 15.95 | 0.592 | 1.03 | -8.91 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 22.33 | 42.3% | 0.429 | 8.04 | 2.78 | 0.247 | 0.599 | -1.76 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần SL (/100) → 7 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 20.6 | 34.9% | 0.327 | 10.73 | 1.92 | 0.243 | 0.404 | -10.33 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Elliott (/100) → 6 | 141.38 | 38.2% | 0.5 | 18.81 | 7.52 | 0.3 | 0.698 | -12.6 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Trọng số phần Entry (/100) → 33 + Điểm vùng: HVN cố định → 0.438 | 113.06 | 51% | 0.791 | 7.56 | 14.96 | 0.594 | 1.008 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Cộng thêm ngưỡng điểm khung 4H → -1 | 114.9 | 52.8% | 0.809 | 7.28 | 15.78 | 0.608 | 1.022 | -8.91 |  |
