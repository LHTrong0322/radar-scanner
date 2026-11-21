# Tối ưu tự động (chạy liên tục) — vòng 1017

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 11859 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 46.4% | 95.04R | 0.573 | 6.44R | 10.17R | 9.35 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 145 | 52.4% | 113.95R | 0.786 | 5.09R | 7.98R | 14.28 | 27 | 18.5% | -8.9R | -0.33 | 10.54R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 27 | 48.1% | 17.16R | 5 | 0% | -3.77R |
| 1W | 10 | 50% | 7.77R | 2 | 0% | -2.3R |
| 4H | 108 | 53.7% | 89.03R | 20 | 25% | -2.83R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 46.4% | 95.04R | 10.17R | 9.35 | 30 | 13.3% | -11.98R |
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

### Vòng 1017 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.98R, lời÷rủi ro 14.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Mức MACD → 0.875 | 106.33 | 51% | 0.733 | 8.26 | 12.87 | 0.534 | 0.953 | -7.61 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Cộng điểm phân kỳ dương ẩn → 3 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 36.73 | 39.8% | 0.417 | 10.14 | 3.62 | 0.335 | 0.516 | -7.55 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Trend (/100) → 12 + Điểm vùng: EMA 21 → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 104.91 | 45.8% | 0.632 | 11.15 | 9.41 | 0.621 | 0.641 | -3.63 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 96.13 | 50.3% | 0.654 | 8.83 | 10.89 | 0.548 | 0.774 | -8.12 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: EMA 21 → 0.875 + R:R tối thiểu tới TP1 → 2.63 | 93.37 | 48.8% | 0.759 | 8.72 | 10.71 | 0.496 | 1.036 | -9.6 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần SL (/100) → 9 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 85.8 | 48.8% | 0.698 | 8.44 | 10.17 | 0.576 | 0.825 | -14.42 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.563 | 80.19 | 44.1% | 0.553 | 11.36 | 7.06 | 0.598 | 0.514 | -6.47 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 107.85 | 50% | 0.729 | 8.29 | 13.01 | 0.551 | 0.921 | -8.72 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Cộng thêm ngưỡng điểm khung 4H → 2 | 111.3 | 51% | 0.768 | 8.13 | 13.69 | 0.59 | 0.963 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 85.39 | 45.3% | 0.614 | 9.82 | 8.7 | 0.351 | 0.846 | -11.77 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 128.34 | 44.9% | 0.565 | 10.85 | 11.83 | 0.603 | 0.526 | -9.42 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: POC volume profile cố định → 0.813 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 85.78 | 42.7% | 0.546 | 11.33 | 7.57 | 0.364 | 0.762 | -5.66 |  |

### Vòng 1016 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.35R, lời÷rủi ro 13.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Lệnh chờ hết hạn sau (nến) → 8 + % chốt ở TP1 → 0.287 + Ngưỡng điểm vào kèo → 77 | 104.91 | 49% | 0.686 | 8.77 | 11.96 | 0.548 | 0.84 | -10.89 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: POC volume profile cố định → 0.688 | 110.39 | 48.9% | 0.806 | 8.59 | 12.85 | 0.591 | 1.065 | -8.15 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Divergence (/100) → 9 + Xác nhận khung nhỏ (A2) → W | 68.04 | 38.6% | 0.337 | 16.45 | 4.14 | 0.243 | 0.416 | -12.72 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trọng số phần Entry (/100) → 33 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 109.44 | 50% | 0.76 | 8.24 | 13.28 | 0.542 | 1.011 | -8.9 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 103.09 | 37.2% | 0.366 | 19.62 | 5.25 | 0.367 | 0.365 | -7.2 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cộng thêm ngưỡng điểm khung 1D → 5 | 94.05 | 45.4% | 0.667 | 9.83 | 9.57 | 0.374 | 0.956 | -9.7 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 50 → 1.13 | 107.89 | 49% | 0.744 | 8.68 | 12.43 | 0.541 | 0.981 | -7.88 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần R:R (/100) → 28 | 110.02 | 50% | 0.754 | 8.3 | 13.26 | 0.546 | 0.998 | -8.9 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: POC volume profile cố định → 0.688 | 110.67 | 50.7% | 0.758 | 8.26 | 13.4 | 0.556 | 0.99 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 125.19 | 44.7% | 0.533 | 11.47 | 10.91 | 0.597 | 0.469 | -15.8 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 50 → 0.75 + Trọng số phần Divergence (/100) → 12 | 104.35 | 39.6% | 0.417 | 15.26 | 6.84 | 0.353 | 0.475 | -4.76 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Ngưỡng điểm vào kèo → 74 + % chốt ở TP1 → 0.287 + Điểm vùng: Fib sóng 4 → 0.938 | 104.62 | 49.3% | 0.697 | 8.57 | 12.21 | 0.501 | 0.922 | -8.88 |  |

### Vòng 1015 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.28R, lời÷rủi ro 13.49

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: BOS → 1 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 104.99 | 49.3% | 0.691 | 8.99 | 11.68 | 0.495 | 0.913 | -9.97 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: POC volume profile cố định → 0.688 | 108.46 | 49.7% | 0.738 | 8.43 | 12.87 | 0.514 | 0.998 | -8.9 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Elliott (/100) → 10 | 70.69 | 45.4% | 0.655 | 9.15 | 7.73 | 0.422 | 0.914 | -4.43 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + SL tối đa (% Entry) → 0.425 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Ngưỡng điểm vào kèo → 77 | 106.25 | 49.3% | 0.738 | 8.39 | 12.66 | 0.602 | 0.886 | -7.69 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: HVN cố định → 0.438 | 107.19 | 49% | 0.739 | 8.67 | 12.36 | 0.517 | 0.998 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: MACD cắt lên Signal → 0.563 | 83.31 | 43.8% | 0.579 | 10.63 | 7.84 | 0.407 | 0.75 | -9.99 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Lệnh chờ hết hạn sau (nến) → 6 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 | 59.38 | 42.7% | 0.396 | 11.57 | 5.13 | 0.376 | 0.418 | -4.7 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu tới TP1 → 2.63 | 69.24 | 46.2% | 0.525 | 10.84 | 6.39 | 0.33 | 0.731 | -10.45 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: POC anchored → 4 | 109.36 | 50.3% | 0.754 | 8.22 | 13.3 | 0.588 | 0.923 | -2.3 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.188 + Lệnh chờ hết hạn sau (nến) → 6 | 98.75 | 45.5% | 0.641 | 10.78 | 9.16 | 0.621 | 0.662 | -2.22 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cổng Dow → CHẶT | 80.71 | 51.4% | 0.727 | 7.31 | 11.04 | 0.275 | 1.125 | -10.99 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: POC anchored → 4 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần R:R (/100) → 33 | 112.18 | 50.3% | 0.743 | 8.39 | 13.37 | 0.552 | 0.936 | -1.64 |  |

### Vòng 1014 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.44R, lời÷rủi ro 13.23

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Cộng thêm ngưỡng điểm khung 1D → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: POC volume profile cố định → 0.813 | 101.02 | 48.3% | 0.678 | 8.83 | 11.44 | 0.495 | 0.879 | -7.95 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức MACD → 0.875 | 22.55 | 55% | 0.149 | 6.41 | 3.52 | 0.166 | 0.134 | -9.27 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần SL (/100) → 7 | 98.28 | 38.1% | 0.39 | 16.53 | 5.95 | 0.353 | 0.424 | -4.99 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 | 111.49 | 50.7% | 0.764 | 8.25 | 13.51 | 0.546 | 1.02 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 111.23 | 50.7% | 0.762 | 8.28 | 13.43 | 0.556 | 0.998 | -8.9 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Trend (/100) → 12 + Trọng số phần SL (/100) → 7 | 111.45 | 46.3% | 0.68 | 10.47 | 10.64 | 0.643 | 0.713 | -3.28 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần SL (/100) → 9 | 86.77 | 49.1% | 0.748 | 8.35 | 10.39 | 0.587 | 0.94 | -15.37 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.05 | 90.99 | 45.3% | 0.655 | 9.36 | 9.72 | 0.544 | 0.781 | -8.15 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.813 + Cộng điểm phân kỳ dương ẩn → 3 | 111.15 | 46.1% | 0.666 | 10.81 | 10.28 | 0.613 | 0.714 | -2.26 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Xác nhận khung nhỏ (A2) → W | 94.24 | 39.2% | 0.398 | 15.25 | 6.18 | 0.363 | 0.426 | -3.33 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: HVN anchored → 0.188 + Lệnh chờ hết hạn sau (nến) → 6 | 93.99 | 48.5% | 0.712 | 8.42 | 11.16 | 0.557 | 0.898 | -11.79 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + R:R tối thiểu riêng khung 1D → 2 | 78.91 | 43% | 0.523 | 10.42 | 7.57 | 0.536 | 0.51 | -12.31 |  |

### Vòng 1013 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.28R, lời÷rủi ro 13.49

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Trọng số phần Divergence (/100) → 12 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 110.22 | 50.3% | 0.75 | 8.29 | 13.3 | 0.536 | 0.998 | -8.9 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức MACD → 0.875 | 138.27 | 37.8% | 0.489 | 18.82 | 7.35 | 0.314 | 0.667 | -11.83 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Khung lớn phải tăng (trend ≥) → 0.375 | 71.21 | 47.1% | 0.524 | 10.14 | 7.02 | 0.403 | 0.663 | -10.55 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: HVN anchored → 0.188 | 75.85 | 44.2% | 0.46 | 11.07 | 6.85 | 0.35 | 0.568 | -8.8 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cộng thêm ngưỡng điểm khung 4H → 2 | 112.9 | 51.4% | 0.795 | 7.91 | 14.27 | 0.63 | 0.975 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Xác nhận khung nhỏ (A2) → W + Cổng Dow → TẮT | 43.17 | 35.2% | 0.19 | 23.22 | 1.86 | 0.154 | 0.224 | -22.77 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cộng điểm phân kỳ dương ẩn → 2.25 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 21 → 1.13 | 10.75 | 46.4% | 0.041 | 14.45 | 0.74 | 0.075 | 0.006 | -9.19 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 105.41 | 49.7% | 0.727 | 8.46 | 12.46 | 0.519 | 0.956 | -8.83 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 121.06 | 49.4% | 0.776 | 8.61 | 14.06 | 0.722 | 0.841 | -9.48 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: EMA 50 → 0.75 + Cộng điểm phân kỳ dương ẩn → 3 | 109.72 | 50.3% | 0.746 | 8.02 | 13.68 | 0.544 | 0.975 | -8.72 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Elliott (/100) → 10 + Đệm SL riêng khung 1W (ATR) → 0.3 | 88.67 | 41.7% | 0.568 | 12.48 | 7.1 | 0.469 | 0.65 | -4.37 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 54.12 | 40.7% | 0.334 | 13.54 | 4 | 0.465 | 0.193 | -13.66 |  |

### Vòng 1012 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.35R, lời÷rủi ro 13.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: POC anchored → 4 | 78.43 | 47.4% | 0.581 | 9.33 | 8.41 | 0.522 | 0.639 | -11.12 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Mức MACD → 0.875 | 113.15 | 51% | 0.759 | 8.17 | 13.85 | 0.6 | 0.944 | -6.59 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 1W → 2 + SL tối đa (% Entry) → 0.425 | 86.06 | 35.1% | 0.325 | 22.87 | 3.76 | 0.268 | 0.384 | -14.18 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trọng số phần Entry (/100) → 28 | 106.2 | 49.3% | 0.708 | 8.89 | 11.95 | 0.506 | 0.946 | -9.87 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Trọng số phần Trend (/100) → 19 + Điểm vùng: HVN cố định → 0.438 | 108.26 | 49.3% | 0.732 | 8.71 | 12.43 | 0.505 | 0.998 | -8.9 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Cộng thêm ngưỡng điểm khung 1D → 5 | 117.23 | 41.4% | 0.382 | 12.19 | 9.62 | 0.326 | 0.43 | -9.49 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Divergence (/100) → 12 | 106.21 | 47.1% | 0.759 | 8.84 | 12.01 | 0.607 | 0.938 | -7.56 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Ngưỡng điểm vào kèo → 74 | 110.29 | 49.7% | 0.74 | 8.11 | 13.6 | 0.535 | 0.978 | -8.88 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: POC anchored → 4 | 86.29 | 36.4% | 0.361 | 21.06 | 4.1 | 0.182 | 0.542 | 0.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + SL tối đa (% Entry) → 0.425 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 97.85 | 47.2% | 0.608 | 9.98 | 9.8 | 0.691 | 0.514 | -9.28 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần Momentum (/100) → 25 | 103.68 | 48.4% | 0.669 | 9.75 | 10.63 | 0.459 | 0.911 | -6.32 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Trọng số phần Entry (/100) → 33 | 111.54 | 50.3% | 0.78 | 8.02 | 13.91 | 0.602 | 0.976 | -8.9 |  |

### Vòng 1011 — ngẫu nhiên nhiều thông số · mốc: tổng 111.81R, win 51.4%, rủi ro tụt vốn 8.03R, lời÷rủi ro 13.92

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần SL (/100) → 7 | 29.77 | 58.3% | 0.191 | 5.96 | 4.99 | 0.192 | 0.19 | -9.04 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Mức MACD → 0.875 | 101.79 | 49% | 0.712 | 8.65 | 11.77 | 0.519 | 0.907 | -6.79 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 97.78 | 46.4% | 0.698 | 9.49 | 10.3 | 0.442 | 0.934 | -8.99 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Elliott (/100) → 6 | 101.82 | 48.6% | 0.727 | 8.36 | 12.18 | 0.582 | 0.868 | -11.34 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần SL (/100) → 7 | 109.34 | 51.1% | 0.775 | 8.05 | 13.58 | 0.627 | 0.939 | -8.08 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: HVN anchored → 0.313 + Cổng Dow → CHẶT | 65.73 | 50.9% | 0.598 | 7.9 | 8.32 | 0.327 | 0.823 | -10.79 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Khung lớn phải tăng (trend ≥) → 0.425 | 111.01 | 51.8% | 0.799 | 7.84 | 14.16 | 0.554 | 1.077 | -8.12 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: POC volume profile cố định → 0.688 + Cộng điểm phân kỳ dương ẩn → 2.25 + Đệm SL riêng khung 1D (ATR) → 0.3 | 102.18 | 45.6% | 0.639 | 11 | 9.29 | 0.562 | 0.712 | -3.76 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + R:R tối thiểu riêng khung 1W → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 | 75.05 | 46.3% | 0.62 | 9.6 | 7.82 | 0.497 | 0.75 | -14.55 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Entry (/100) → 28 + Trọng số phần R:R (/100) → 28 + Điểm vùng: EMA 21 → 1.13 | 27.59 | 57.8% | 0.179 | 5.62 | 4.91 | 0.184 | 0.174 | -8 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: EMA 50 → 1.13 | 106.29 | 50% | 0.718 | 8.41 | 12.64 | 0.574 | 0.874 | -8.42 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: POC volume profile cố định → 0.688 | 116.27 | 51.3% | 0.736 | 8.68 | 13.4 | 0.557 | 0.95 | -8.08 |  |

### Vòng 1010 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.98R, lời÷rủi ro 14.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: MACD cắt lên Signal → 0.438 | 121.16 | 44.1% | 0.491 | 12.43 | 9.75 | 0.516 | 0.462 | -8.25 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.313 + Trọng số phần R:R (/100) → 28 | 95.04 | 42.3% | 0.543 | 13.45 | 7.07 | 0.509 | 0.574 | -2.68 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Fib sóng 4 → 1.56 | 103.99 | 50.3% | 0.689 | 8.07 | 12.89 | 0.585 | 0.791 | -7.63 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 125.69 | 45.2% | 0.551 | 10.86 | 11.57 | 0.575 | 0.526 | -9.67 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Elliott (/100) → 10 | 112.23 | 51.4% | 0.779 | 7.82 | 14.35 | 0.596 | 0.984 | -7.88 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Biên mây Ichimoku → 1.05 | 98.58 | 49.7% | 0.689 | 8.17 | 12.07 | 0.576 | 0.807 | -8.71 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Lệnh chờ hết hạn sau (nến) → 8 + Đệm SL riêng khung 4H (ATR) → 0.3 | 160.44 | 39.6% | 0.521 | 18.14 | 8.84 | 0.361 | 0.689 | -14.6 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 110.76 | 51.6% | 0.688 | 8.33 | 13.3 | 0.549 | 0.851 | -9.48 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: EMA 50 → 0.75 + Số TP tối đa → 2 | 110.23 | 51.7% | 0.76 | 8.12 | 13.58 | 0.539 | 1.004 | -7.88 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Trọng số phần Trend (/100) → 19 + % chốt ở TP1 → 0.307 + Lệnh chờ hết hạn sau (nến) → 8 | 115.57 | 51.6% | 0.736 | 8.21 | 14.08 | 0.604 | 0.884 | -9.49 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: HVN cố định → 0.563 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 77.91 | 45.2% | 0.677 | 8.75 | 8.9 | 0.47 | 0.875 | -8.71 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: EMA 200 → 3 | 79.57 | 46.8% | 0.642 | 9.41 | 8.46 | 0.402 | 0.906 | -13.36 |  |

### Vòng 1009 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.35R, lời÷rủi ro 13.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Số TP tối đa → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 113.04 | 49.7% | 0.79 | 8.37 | 13.51 | 0.616 | 0.993 | -12.16 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Elliott (/100) → 6 | 146.41 | 38.1% | 0.512 | 18.46 | 7.93 | 0.349 | 0.675 | -13.13 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 101.68 | 40% | 0.333 | 13.28 | 7.66 | 0.297 | 0.366 | -9.8 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 109.5 | 50.6% | 0.684 | 8.96 | 12.22 | 0.535 | 0.862 | -10.49 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cộng thêm ngưỡng điểm khung 1W → 2 | 94.3 | 47.7% | 0.625 | 9.74 | 9.68 | 0.453 | 0.818 | -5.03 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: BOS → 1 | 111.68 | 51% | 0.77 | 8.35 | 13.37 | 0.556 | 1.02 | -8.9 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: EMA 50 → 0.75 | 102.86 | 49% | 0.69 | 8.88 | 11.58 | 0.468 | 0.941 | -8.9 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + % chốt ở TP1 → 0.307 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng thêm ngưỡng điểm khung 1W → -1 | 69.11 | 45.7% | 0.544 | 9.53 | 7.25 | 0.375 | 0.727 | -14.12 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Đệm SL riêng khung 1W (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 20.34 | 50.9% | 0.089 | 15.05 | 1.35 | 0.054 | 0.118 | -17.78 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: BOS → 3 | 117.45 | 40.8% | 0.38 | 12.3 | 9.55 | 0.327 | 0.424 | -9.73 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 50 → 0.75 + Trọng số phần R:R (/100) → 28 | 71.8 | 45.9% | 0.659 | 9.29 | 7.73 | 0.422 | 0.918 | -4.43 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: HVN cố định → 0.438 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 98.27 | 49% | 0.678 | 8.51 | 11.55 | 0.579 | 0.784 | -6.79 |  |

### Vòng 1008 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.04R, lời÷rủi ro 14.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: EMA 50 → 0.75 | 93.8 | 50.3% | 0.647 | 8.8 | 10.66 | 0.558 | 0.745 | -8.7 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trọng số phần Momentum (/100) → 21 + R:R tối thiểu riêng khung 1W → 2 | 102.48 | 51% | 0.688 | 8.45 | 12.13 | 0.574 | 0.803 | -10.9 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Divergence (/100) → 12 + Ngưỡng điểm vào kèo → 77 | 86.7 | 44.5% | 0.594 | 10.16 | 8.53 | 0.491 | 0.709 | -7.11 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 50 → 1.13 | 111.43 | 51% | 0.768 | 8.1 | 13.76 | 0.572 | 0.997 | -7.88 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Fib sóng 4 → 0.938 + % chốt ở TP1 → 0.287 + Coin phải mạnh hơn BTC trong N ngày → 14 | 80.81 | 48.7% | 0.703 | 8.6 | 9.4 | 0.477 | 0.967 | -15.36 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 27.46 | 56% | 0.183 | 6.22 | 4.41 | 0.244 | 0.124 | -6.65 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu riêng khung 1D → 2 | 70.87 | 43.3% | 0.472 | 11.3 | 6.27 | 0.503 | 0.445 | -10.23 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 90.17 | 47% | 0.673 | 8.96 | 10.06 | 0.471 | 0.868 | -10.39 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 24.14 | 57.1% | 0.155 | 6.37 | 3.79 | 0.157 | 0.153 | -9.28 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 106.08 | 51.4% | 0.737 | 7.9 | 13.43 | 0.59 | 0.9 | -9.73 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Fib sóng 4 → 0.938 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 72.09 | 46.5% | 0.568 | 9.16 | 7.87 | 0.422 | 0.72 | -8.84 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Trọng số phần Trend (/100) → 19 | 113.3 | 51.7% | 0.771 | 8.03 | 14.11 | 0.581 | 0.985 | -8.9 |  |
