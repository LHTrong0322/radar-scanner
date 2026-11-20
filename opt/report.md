# Tối ưu tự động (chạy liên tục) — vòng 891

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 10347 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 46.3% | 94.54R | 0.576 | 6.44R | 9.99R | 9.46 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 146 | 53.4% | 119.19R | 0.816 | 5.09R | 7.34R | 16.24 | 28 | 17.9% | -9.92R | -0.354 | 10.54R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.77R | 2 | 0% | -2.3R |
| 4H | 108 | 54.6% | 92R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 46.3% | 94.54R | 9.99R | 9.46 | 31 | 12.9% | -13R |
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

### Vòng 891 — ngẫu nhiên nhiều thông số · mốc: tổng 119.19R, win 53.4%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.24

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Ngưỡng điểm vào kèo → 77 | 109.51 | 50.7% | 0.75 | 7.86 | 13.93 | 0.623 | 0.888 | -10.89 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần SL (/100) → 7 | 117.79 | 52.3% | 0.791 | 7.73 | 15.24 | 0.625 | 0.973 | -8.6 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: POC anchored → 4 + Điểm vùng: HVN cố định → 0.438 | 112.75 | 51.6% | 0.737 | 7.87 | 14.33 | 0.575 | 0.902 | -7.15 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm tối thiểu của vùng đặt SL → 2 | 112.76 | 52.7% | 0.752 | 8.2 | 13.75 | 0.635 | 0.875 | -8.6 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Ngưỡng điểm vào kèo → 74 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 1D → 3 | 30.86 | 58.6% | 0.191 | 5.8 | 5.32 | 0.208 | 0.174 | -9.49 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: BOS → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 113.22 | 51.4% | 0.786 | 7.8 | 14.52 | 0.647 | 0.938 | -9.92 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 114.96 | 52.4% | 0.804 | 7.57 | 15.19 | 0.621 | 1 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 1W → 2 + % chốt ở TP1 → 0.307 | 114.4 | 50% | 0.698 | 9.02 | 12.68 | 0.555 | 0.855 | -9.68 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: HVN anchored → 0.188 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 10.77 | 39.1% | 0.168 | 12.51 | 0.86 | -0.06 | 0.461 | -8.32 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Lệnh chờ hết hạn sau (nến) → 6 + Khung lớn phải tăng (trend ≥) → 0.375 | 90.35 | 45.1% | 0.558 | 9.57 | 9.44 | 0.559 | 0.557 | -7.32 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 119.96 | 53.4% | 0.822 | 7.34 | 16.34 | 0.64 | 1.024 | -9.92 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 113.51 | 53% | 0.762 | 7.8 | 14.55 | 0.635 | 0.897 | -9.92 |  |

### Vòng 890 — ngẫu nhiên nhiều thông số · mốc: tổng 119.19R, win 53.4%, rủi ro tụt vốn 7.42R, lời÷rủi ro 16.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 107.7 | 50.7% | 0.738 | 8.1 | 13.3 | 0.542 | 0.939 | -9.6 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 | 72.8 | 43.9% | 0.426 | 11.77 | 6.19 | 0.288 | 0.562 | -5.15 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: EMA 21 → 1.13 + Cộng thêm ngưỡng điểm khung 1W → -1 + Lệnh chờ hết hạn sau (nến) → 6 | 87.02 | 47.5% | 0.617 | 9.01 | 9.66 | 0.502 | 0.748 | -10.14 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Ngưỡng điểm vào kèo → 74 | 113.82 | 51% | 0.764 | 7.91 | 14.39 | 0.582 | 0.959 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Ngưỡng điểm vào kèo → 77 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Momentum (/100) → 21 | 117.35 | 51% | 0.788 | 7.86 | 14.93 | 0.63 | 0.939 | -4.74 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + R:R tối thiểu riêng khung 1W → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 97.68 | 51.4% | 0.688 | 8.09 | 12.07 | 0.618 | 0.758 | -10.57 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: HVN anchored → 0.313 | 116.77 | 51% | 0.794 | 7.85 | 14.88 | 0.673 | 0.911 | -8.97 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: POC anchored → 4 | 95.76 | 45.7% | 0.634 | 9.61 | 9.96 | 0.483 | 0.788 | -2.95 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: POC anchored → 4 | 108.8 | 39.6% | 0.396 | 16.15 | 6.74 | 0.346 | 0.441 | -3.04 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 98.99 | 46.7% | 0.586 | 9.37 | 10.56 | 0.63 | 0.546 | -7.96 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 17.58 | 32.6% | 0.191 | 13.61 | 1.29 | 0.446 | -0.014 | -6.82 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 117.17 | 52.7% | 0.792 | 7.75 | 15.12 | 0.614 | 0.989 | -9.92 |  |

### Vòng 889 — ngẫu nhiên nhiều thông số · mốc: tổng 119.19R, win 53.4%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.96

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 68.68 | 46.3% | 0.636 | 8.83 | 7.78 | 0.474 | 0.817 | -5.45 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 93.34 | 45.9% | 0.702 | 9.75 | 9.57 | 0.624 | 0.785 | -16.11 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + R:R tối thiểu riêng khung 1D → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 151.56 | 38% | 0.484 | 18.32 | 8.27 | 0.382 | 0.581 | -11.16 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 118.54 | 50.6% | 0.77 | 8.12 | 14.6 | 0.594 | 0.964 | -10.95 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Momentum (/100) → 21 + Đệm SL riêng khung 4H (ATR) → 0.3 | 25.46 | 51% | 0.099 | 15.01 | 1.7 | 0.084 | 0.113 | -14.72 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Cộng điểm phân kỳ dương ẩn → 2.25 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Mức MACD → 1.13 | 115.8 | 51.7% | 0.788 | 7.92 | 14.62 | 0.592 | 1.009 | -9.92 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần SL (/100) → 7 | 95.16 | 46.3% | 0.639 | 9.65 | 9.86 | 0.474 | 0.83 | -8.13 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần Momentum (/100) → 25 | 98.03 | 47.5% | 0.62 | 9.97 | 9.83 | 0.502 | 0.749 | -7.58 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + R:R tối thiểu riêng khung 1D → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Số TP tối đa → 2 | 106.49 | 46.6% | 0.598 | 9.81 | 10.86 | 0.593 | 0.603 | -8.18 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng điểm phân kỳ dương ẩn → 3 | 74.61 | 39.6% | 0.332 | 13.95 | 5.35 | 0.287 | 0.375 | -5.45 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 38.51 | 40.9% | 0.438 | 10.16 | 3.79 | 0.372 | 0.516 | -7.55 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Trọng số phần Divergence (/100) → 9 + Cổng Dow → CHẶT + Số TP tối đa → 2 | 84.89 | 52.2% | 0.751 | 7.24 | 11.73 | 0.332 | 1.096 | -12.01 |  |

### Vòng 888 — ngẫu nhiên nhiều thông số · mốc: tổng 119.19R, win 53.4%, rủi ro tụt vốn 7.42R, lời÷rủi ro 16.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Khung lớn phải tăng (trend ≥) → 0.425 | 113.15 | 50.4% | 0.851 | 7.87 | 14.38 | 0.605 | 1.141 | -9.2 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Mức MACD → 1.13 | 123.14 | 41.7% | 0.392 | 11.64 | 10.58 | 0.357 | 0.422 | -8.41 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cổng Dow → TẮT | 133.96 | 45.1% | 0.623 | 11.16 | 12 | 0.56 | 0.683 | -18.33 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Trọng số phần Entry (/100) → 28 + Trọng số phần Trend (/100) → 19 | 118.74 | 53.1% | 0.808 | 7.58 | 15.66 | 0.635 | 0.997 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Biên mây Ichimoku → 1.05 + R:R tối thiểu riêng khung 1W → 2 | 90.36 | 48.1% | 0.565 | 10.63 | 8.5 | 0.453 | 0.668 | -3.35 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Mức MACD → 0.875 + R:R tối thiểu riêng khung 4H → 2 | 77.63 | 36.5% | 0.176 | 22.77 | 3.41 | 0.163 | 0.187 | -6.01 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: POC volume profile cố định → 0.813 | 118.18 | 53.1% | 0.804 | 7.55 | 15.65 | 0.635 | 0.989 | -8.9 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Trọng số phần Entry (/100) → 28 | 104.83 | 51.7% | 0.704 | 8.37 | 12.52 | 0.625 | 0.79 | -9.14 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 20.47 | 56.6% | 0.141 | 7.56 | 2.71 | 0.159 | 0.128 | -11.36 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Trend (/100) → 19 + SL tối đa (% Entry) → 0.425 + Trọng số phần Entry (/100) → 33 | 117.73 | 52.7% | 0.795 | 7.52 | 15.66 | 0.635 | 0.969 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: HVN cố định → 0.438 + Trọng số phần Entry (/100) → 28 + Cộng thêm ngưỡng điểm khung 1W → 2 | 106.07 | 47.8% | 0.667 | 9.76 | 10.87 | 0.447 | 0.914 | -7.34 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: BOS → 3 | 77.14 | 45% | 0.695 | 9.1 | 8.48 | 0.449 | 0.964 | -6.49 |  |

### Vòng 887 — ngẫu nhiên nhiều thông số · mốc: tổng 119.19R, win 53.4%, rủi ro tụt vốn 7.46R, lời÷rủi ro 15.98

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trần điểm khi chart yếu (Trend < x) → -0.225 + R:R tối thiểu riêng khung 1W → 2 | 100.42 | 51.2% | 0.791 | 7.63 | 13.16 | 0.597 | 0.982 | -11.68 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 102.24 | 51.7% | 0.686 | 8.5 | 12.03 | 0.637 | 0.74 | -8.41 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Coin phải mạnh hơn BTC trong N ngày → 14 | 86.6 | 50% | 0.747 | 8 | 10.82 | 0.57 | 0.942 | -16.39 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Break mây Ichimoku → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 110.75 | 50% | 0.675 | 9.07 | 12.21 | 0.543 | 0.821 | -9.67 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Mức RSI 30/70 → 1.13 + R:R tối thiểu riêng khung 1W → 2 | 82.77 | 48.8% | 0.662 | 8.84 | 9.36 | 0.549 | 0.781 | -16.39 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Cộng thêm ngưỡng điểm khung 1W → -1 | 119.19 | 53.4% | 0.816 | 7.46 | 15.98 | 0.635 | 1.018 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trọng số phần Divergence (/100) → 9 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 78.44 | 48.1% | 0.599 | 9.02 | 8.7 | 0.464 | 0.744 | -10.25 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: POC anchored → 4 + Khung lớn phải tăng (trend ≥) → 0.425 | 99.48 | 50.8% | 0.754 | 7.71 | 12.9 | 0.571 | 0.942 | -3.65 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 125.95 | 50.3% | 0.802 | 8.21 | 15.34 | 0.757 | 0.854 | -10.5 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN anchored → 0.188 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 116.72 | 52.1% | 0.799 | 7.73 | 15.1 | 0.64 | 0.972 | -8.61 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 92.96 | 49.7% | 0.585 | 9.75 | 9.53 | 0.524 | 0.653 | -7.14 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 93.2 | 45.3% | 0.621 | 9.92 | 9.4 | 0.493 | 0.765 | -8.13 |  |

### Vòng 886 — ngẫu nhiên nhiều thông số · mốc: tổng 119.19R, win 53.4%, rủi ro tụt vốn 7.45R, lời÷rủi ro 16.00

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Break mây Ichimoku → 3 + Cộng thêm ngưỡng điểm khung 4H → 2 | 98.96 | 48.5% | 0.607 | 9.28 | 10.66 | 0.518 | 0.702 | -8.37 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 76.97 | 47.7% | 0.706 | 8.65 | 8.9 | 0.474 | 0.961 | -5.45 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Trọng số phần Entry (/100) → 28 | 115.77 | 51.7% | 0.777 | 7.68 | 15.07 | 0.582 | 0.997 | -9.92 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + R:R tối thiểu riêng khung 4H → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 121.06 | 41.3% | 0.391 | 12.63 | 9.59 | 0.364 | 0.413 | -10.32 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: EMA 50 → 0.75 | 108.5 | 50.6% | 0.696 | 9.02 | 12.03 | 0.47 | 0.945 | -7.34 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Trọng số phần Divergence (/100) → 9 | 116.87 | 52.8% | 0.823 | 7.35 | 15.9 | 0.606 | 1.066 | -9.96 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Cộng thêm ngưỡng điểm khung 4H → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Trọng số phần Entry (/100) → 28 | 105.54 | 49% | 0.708 | 8.21 | 12.86 | 0.579 | 0.839 | -9.71 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 101.67 | 51.3% | 0.669 | 8.45 | 12.03 | 0.614 | 0.73 | -10.22 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Divergence (/100) → 9 | 113.3 | 46.4% | 0.683 | 10.41 | 10.88 | 0.7 | 0.668 | -5.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Fib sóng 4 → 1.56 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 134.25 | 51.1% | 0.772 | 8.66 | 15.5 | 0.731 | 0.821 | -10.5 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Break mây Ichimoku → 3 | 109.03 | 49.1% | 0.669 | 9.04 | 12.06 | 0.546 | 0.803 | -9.67 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cộng thêm ngưỡng điểm khung 1D → 5 | 112.88 | 51.3% | 0.753 | 8.08 | 13.97 | 0.566 | 0.966 | -10.89 |  |

### Vòng 885 — ngẫu nhiên nhiều thông số · mốc: tổng 119.51R, win 53.8%, rủi ro tụt vốn 7.27R, lời÷rủi ro 16.44

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: BOS → 1 + R:R tối thiểu riêng khung 1W → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 86.9 | 45.6% | 0.583 | 9.89 | 8.79 | 0.481 | 0.69 | -2.67 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: BOS → 1 | 119.51 | 53.8% | 0.824 | 7.27 | 16.44 | 0.648 | 1.018 | -7.83 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Xác nhận khung nhỏ (A2) → W | 107.98 | 40.5% | 0.428 | 14.84 | 7.28 | 0.372 | 0.48 | -1.51 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 101.99 | 52.4% | 0.694 | 7.92 | 12.88 | 0.649 | 0.743 | -7.6 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: HVN anchored → 0.313 + Đệm SL riêng khung 1D (ATR) → 0.3 | 117.12 | 47.9% | 0.693 | 9.81 | 11.94 | 0.668 | 0.715 | -3.32 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + R:R tối thiểu riêng khung 4H → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 115.09 | 40.8% | 0.361 | 12.93 | 8.9 | 0.336 | 0.382 | -7.2 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Ngưỡng điểm vào kèo → 77 | 107.95 | 51.4% | 0.771 | 7.77 | 13.89 | 0.646 | 0.899 | -7.83 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Trọng số phần SL (/100) → 9 + Trọng số phần Entry (/100) → 33 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 125.85 | 50.6% | 0.817 | 8.27 | 15.22 | 0.799 | 0.838 | -7.13 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 | 108.25 | 47.9% | 0.752 | 8.81 | 12.29 | 0.593 | 0.906 | -8.6 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Số TP tối đa → 2 | 99.89 | 50% | 0.694 | 8.25 | 12.11 | 0.63 | 0.757 | -6.69 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Coin phải mạnh hơn BTC trong N ngày → 14 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 44.13 | 42.3% | 0.424 | 10.56 | 4.18 | 0.255 | 0.601 | -15.16 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Elliott (/100) → 6 | 98.49 | 48.8% | 0.608 | 9.36 | 10.52 | 0.497 | 0.743 | -4.71 |  |

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
