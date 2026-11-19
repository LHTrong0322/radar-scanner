# Tối ưu tự động (chạy liên tục) — vòng 783

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 9051 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.9% | 109.14R | 0.67 | 5.7R | 8.92R | 12.24 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 142 | 54.2% | 123.06R | 0.867 | 5.09R | 6.94R | 17.73 | 28 | 17.9% | -9.92R | -0.354 | 10.54R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 27 | 51.9% | 20.46R | 5 | 0% | -3.76R |
| 1W | 9 | 55.6% | 8.29R | 2 | 0% | -2.3R |
| 4H | 106 | 54.7% | 94.31R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.9% | 109.14R | 8.92R | 12.24 | 31 | 12.9% | -13R |
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

### Vòng 783 — ngẫu nhiên nhiều thông số · mốc: tổng 123.06R, win 54.2%, rủi ro tụt vốn 6.94R, lời÷rủi ro 17.73

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Trend (/100) → 12 | 38.41 | 60.5% | 0.23 | 6.47 | 5.94 | 0.294 | 0.179 | -8.16 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC anchored → 4 | 75.2 | 46.8% | 0.69 | 8.76 | 8.58 | 0.404 | 0.981 | 0.49 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: BOS → 1 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 33.49 | 38.6% | 0.381 | 10.49 | 3.19 | 0.313 | 0.482 | -9.29 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần Divergence (/100) → 12 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 121.45 | 50.3% | 0.815 | 7.66 | 15.86 | 0.64 | 1.007 | -13.57 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: EMA 200 → 3 + Trọng số phần Entry (/100) → 33 | 117.1 | 50.3% | 0.756 | 8.23 | 14.23 | 0.577 | 0.956 | -10.91 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Trọng số phần SL (/100) → 9 | 121.39 | 53.1% | 0.849 | 7.13 | 17.03 | 0.646 | 1.085 | -9.92 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Entry (/100) → 28 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib sóng 4 → 1.56 | 115.19 | 40.5% | 0.389 | 15.38 | 7.49 | 0.378 | 0.399 | -8.82 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Trọng số phần Divergence (/100) → 9 | 103.36 | 48.5% | 0.771 | 8.25 | 12.53 | 0.476 | 1.026 | -10.69 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 123.06 | 54.2% | 0.867 | 6.94 | 17.73 | 0.657 | 1.108 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 1W → -1 | 118.86 | 52.8% | 0.837 | 7.09 | 16.76 | 0.616 | 1.091 | -9.74 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: EMA 50 → 0.75 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 130.82 | 51.9% | 0.808 | 7.95 | 16.46 | 0.561 | 1.086 | -9.79 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Trend (/100) → 12 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần SL (/100) → 9 | 111.74 | 51.7% | 0.781 | 7.53 | 14.84 | 0.665 | 0.896 | -10.96 |  |

### Vòng 782 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần R:R (/100) → 33 + Điểm vùng: MACD cắt lên Signal → 0.438 | 111.46 | 48.5% | 0.66 | 9.45 | 11.79 | 0.466 | 0.88 | -8.93 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + R:R tối thiểu riêng khung 1D → 2 | 111.23 | 46.3% | 0.628 | 9.06 | 12.28 | 0.587 | 0.667 | -8.29 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + R:R tối thiểu riêng khung 1W → 2 | 103 | 50% | 0.715 | 8.15 | 12.64 | 0.596 | 0.831 | -10.96 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 50 → 1.13 + Ngưỡng điểm vào kèo → 74 | 30.7 | 58.5% | 0.193 | 5.99 | 5.13 | 0.208 | 0.179 | -8.04 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib sóng 4 → 0.938 | 63.36 | 40.8% | 0.242 | 14.07 | 4.5 | 0.284 | 0.206 | -21.5 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + SL tối đa (% Entry) → 0.425 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 127.96 | 45% | 0.559 | 10.76 | 11.89 | 0.602 | 0.516 | -11.21 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 | 107.03 | 39.8% | 0.405 | 15.34 | 6.98 | 0.396 | 0.415 | -3.54 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm tối thiểu của vùng đặt SL → 2 | 96.79 | 47.4% | 0.706 | 9.13 | 10.6 | 0.456 | 0.913 | -10.69 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Số TP tối đa → 2 + Điểm vùng: Fib sóng 4 → 1.56 | 107.95 | 50% | 0.666 | 9.03 | 11.95 | 0.514 | 0.838 | -9.67 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần Entry (/100) → 33 | 119.36 | 52.4% | 0.812 | 7.52 | 15.87 | 0.61 | 1.04 | -9.92 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Break mây Ichimoku → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 21 → 1.13 | 74.6 | 47% | 0.565 | 9.36 | 7.97 | 0.502 | 0.625 | -15.79 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Trọng số phần Elliott (/100) → 10 + Cổng Dow → TẮT + Điểm tối thiểu của vùng đặt SL → 2 | 129.07 | 44% | 0.618 | 11.62 | 11.11 | 0.517 | 0.717 | -20.54 |  |

### Vòng 781 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.1R, lời÷rủi ro 17.20

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 115.24 | 51.7% | 0.763 | 7.81 | 14.76 | 0.579 | 0.97 | -9.95 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: EMA 200 → 3 | 80.59 | 50.5% | 0.726 | 7.27 | 11.09 | 0.256 | 1.071 | -10.97 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trần điểm khi chart yếu (Trend < x) → -0.225 | 108.58 | 40.5% | 0.423 | 15.53 | 6.99 | 0.398 | 0.445 | -3.71 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 50.44 | 41.1% | 0.471 | 10.46 | 4.82 | 0.265 | 0.69 | -15.64 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: EMA 21 → 1.13 | 125.47 | 42.1% | 0.395 | 11.85 | 10.59 | 0.369 | 0.416 | -8.35 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: HVN cố định → 0.438 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 120 | 51.4% | 0.811 | 7.51 | 15.98 | 0.667 | 0.95 | -8.97 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN cố định → 0.438 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 117.76 | 48.7% | 0.755 | 8.22 | 14.33 | 0.578 | 0.941 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Cổng Dow → CHẶT | 86.74 | 52.2% | 0.768 | 6.74 | 12.87 | 0.325 | 1.132 | -12.01 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Ngưỡng điểm vào kèo → 77 | 81.15 | 45.7% | 0.501 | 10.05 | 8.07 | 0.429 | 0.571 | -8.8 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 121.69 | 53.1% | 0.828 | 7.41 | 16.42 | 0.635 | 1.04 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: EMA 21 → 0.875 + Trọng số phần Entry (/100) → 28 + Điểm tối thiểu của vùng đặt SL → 4 | 111.15 | 49.7% | 0.746 | 7.78 | 14.29 | 0.664 | 0.831 | -7.69 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: EMA 200 → 1 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 131.15 | 36.8% | 0.46 | 19.59 | 6.69 | 0.329 | 0.593 | -10.95 |  |

### Vòng 780 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.21R, lời÷rủi ro 16.94

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 69.93 | 45.4% | 0.648 | 9.17 | 7.63 | 0.429 | 0.892 | -5.45 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + R:R tối thiểu tới TP1 → 2.38 | 96.33 | 46.8% | 0.61 | 8.61 | 11.19 | 0.485 | 0.729 | -11.49 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 109.5 | 51.7% | 0.766 | 7.55 | 14.5 | 0.622 | 0.9 | -10.96 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Lệnh chờ hết hạn sau (nến) → 8 + Đệm SL riêng khung 1D (ATR) → 0.3 | 121.01 | 40.6% | 0.351 | 14.45 | 8.37 | 0.411 | 0.303 | -11.45 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Entry (/100) → 28 + R:R tối thiểu riêng khung 1W → 2 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 97.25 | 50.7% | 0.648 | 8.3 | 11.72 | 0.623 | 0.673 | -10.76 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Khung lớn phải tăng (trend ≥) → 0.375 | 118.24 | 52.1% | 0.81 | 7.56 | 15.64 | 0.611 | 1.02 | -9.92 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Khung lớn phải tăng (trend ≥) → 0.425 + R:R tối thiểu tới TP1 → 2.38 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 86.13 | 44.3% | 0.545 | 9.48 | 9.09 | 0.479 | 0.608 | -10 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần SL (/100) → 7 + Trọng số phần Momentum (/100) → 21 | 119.21 | 47.4% | 0.697 | 10.11 | 11.79 | 0.637 | 0.753 | -5.32 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần R:R (/100) → 33 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: HVN cố định → 0.438 | 108.62 | 40.5% | 0.415 | 15.34 | 7.08 | 0.412 | 0.417 | -3.84 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Momentum (/100) → 25 + Xác nhận khung nhỏ (A2) → W | 107.94 | 40.1% | 0.42 | 15.43 | 7 | 0.404 | 0.434 | -4.97 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: EMA 50 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Break mây Ichimoku → 3 | 104.61 | 45.9% | 0.658 | 9.61 | 10.89 | 0.436 | 0.906 | -4.48 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 112.25 | 46.6% | 0.638 | 9.07 | 12.38 | 0.587 | 0.686 | -8.18 |  |

### Vòng 779 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.16

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 69.04 | 44.9% | 0.645 | 9.23 | 7.48 | 0.448 | 0.879 | -5.45 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 107.39 | 50.3% | 0.721 | 8.12 | 13.23 | 0.554 | 0.919 | -9.92 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 109.44 | 51.4% | 0.76 | 7.52 | 14.55 | 0.616 | 0.904 | -11.06 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Khung lớn phải tăng (trend ≥) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 102.7 | 51.8% | 0.728 | 7.83 | 13.12 | 0.628 | 0.839 | -9.18 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Biên mây Ichimoku → 1.35 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 105.35 | 39.2% | 0.393 | 17.05 | 6.18 | 0.336 | 0.444 | -0.79 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 111.94 | 50.7% | 0.746 | 7.91 | 14.15 | 0.563 | 0.956 | -10.89 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + SL tối đa (% Entry) → 0.425 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 107.32 | 48.2% | 0.761 | 8.49 | 12.64 | 0.569 | 0.986 | -10.14 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 89.07 | 47.6% | 0.707 | 9.24 | 9.64 | 0.486 | 0.958 | -16.11 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: BOS → 1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Đệm SL riêng khung 1W (ATR) → 0.3 | 104.78 | 47.2% | 0.728 | 8.85 | 11.84 | 0.496 | 0.953 | -10.69 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Số TP tối đa → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Xác nhận khung nhỏ (A2) → W | 130.51 | 39.6% | 0.487 | 14.46 | 9.03 | 0.48 | 0.493 | -5.64 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Trọng số phần Elliott (/100) → 6 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 118.47 | 52.7% | 0.811 | 7.28 | 16.27 | 0.635 | 1.008 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + R:R tối thiểu tới TP1 → 2.63 | 96.02 | 48.4% | 0.762 | 8.29 | 11.58 | 0.551 | 0.994 | -12.74 |  |

### Vòng 778 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.35R, lời÷rủi ro 16.18

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Biên mây Ichimoku → 1.35 + Xác nhận khung nhỏ (A2) → W | 95.24 | 39% | 0.375 | 16.21 | 5.88 | 0.339 | 0.408 | -4.02 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: BOS → 1 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 112.11 | 49.7% | 0.784 | 7.95 | 14.1 | 0.584 | 1.011 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 1W (ATR) → 0.3 | 107.82 | 46.3% | 0.666 | 9.74 | 11.07 | 0.6 | 0.734 | -12.11 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1W → 2 | 88.4 | 41.5% | 0.313 | 13.11 | 6.74 | 0.301 | 0.324 | -9.5 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 58.05 | 45.4% | 0.598 | 9.62 | 6.03 | 0.437 | 0.77 | -12.55 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần Momentum (/100) → 25 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 119.12 | 48.7% | 0.754 | 8.43 | 14.13 | 0.731 | 0.778 | -9.56 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Số TP tối đa → 2 + R:R tối thiểu riêng khung 4H → 2 | 117.63 | 40.8% | 0.369 | 12.31 | 9.56 | 0.337 | 0.396 | -9.29 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: POC anchored → 4 | 124.01 | 47.3% | 0.752 | 9.8 | 12.65 | 0.776 | 0.731 | -1.17 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: EMA 200 → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 70.49 | 46.4% | 0.629 | 8.96 | 7.87 | 0.445 | 0.835 | -4.43 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: EMA 200 → 1 | 139.96 | 43.8% | 0.596 | 11.73 | 11.93 | 0.626 | 0.565 | -12.27 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 65.1 | 43.1% | 0.597 | 9.66 | 6.74 | 0.373 | 0.843 | -7.7 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Cổng Dow → TẮT + R:R tối thiểu riêng khung 1D → 2 | 119.15 | 41.6% | 0.49 | 12.92 | 9.22 | 0.575 | 0.417 | -16.35 |  |

### Vòng 777 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.35R, lời÷rủi ro 16.18

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Mức RSI 30/70 → 1.13 | 117.88 | 47.6% | 0.71 | 9.79 | 12.04 | 0.677 | 0.741 | -4.3 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 76.71 | 47.2% | 0.71 | 8.32 | 9.22 | 0.474 | 0.975 | -5.45 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 112.37 | 50.7% | 0.791 | 7.49 | 15 | 0.646 | 0.949 | -9.92 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 70.97 | 47.6% | 0.689 | 8.8 | 8.06 | 0.421 | 0.997 | -10.7 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Break mây Ichimoku → 1 + Khung lớn phải tăng (trend ≥) → 0.425 | 96.53 | 49% | 0.666 | 8.52 | 11.33 | 0.443 | 0.885 | -9.22 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: EMA 50 → 1.13 | 101.58 | 49% | 0.71 | 8.38 | 12.12 | 0.475 | 0.977 | -9.57 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Fib sóng 4 → 0.938 | 116.73 | 52.4% | 0.805 | 7.38 | 15.82 | 0.621 | 1.008 | -9.92 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Elliott (/100) → 10 | 96.38 | 47.5% | 0.693 | 8.58 | 11.23 | 0.65 | 0.742 | -8.93 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Vùng RSI 45–55 → 0.875 + R:R tối thiểu riêng khung 1D → 2 | 107.2 | 45.4% | 0.616 | 9.01 | 11.9 | 0.614 | 0.618 | -7.23 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Số TP tối đa → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 88.58 | 44.9% | 0.603 | 9.84 | 9 | 0.448 | 0.783 | -8.13 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Trọng số phần Momentum (/100) → 21 + Trọng số phần R:R (/100) → 28 | 117.4 | 52.4% | 0.821 | 7.41 | 15.84 | 0.652 | 1.008 | -9.92 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: MACD cắt lên Signal → 0.563 | 114.61 | 51% | 0.79 | 7.83 | 14.64 | 0.523 | 1.077 | -9.79 |  |

### Vòng 776 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.35R, lời÷rủi ro 16.18

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 108.33 | 48.6% | 0.774 | 8.42 | 12.87 | 0.569 | 1.017 | -10.14 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 113.62 | 52.7% | 0.757 | 7.63 | 14.89 | 0.576 | 0.971 | -9.92 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 21 → 1.13 + Cộng điểm phân kỳ dương ẩn → 3 | 112.85 | 51.4% | 0.763 | 7.35 | 15.35 | 0.618 | 0.924 | -10.26 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu tới TP1 → 2.38 | 66.45 | 45.5% | 0.496 | 9.32 | 7.13 | 0.484 | 0.507 | -17.95 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trọng số phần Divergence (/100) → 12 + Khung lớn phải tăng (trend ≥) → 0.375 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 113.45 | 51.4% | 0.767 | 7.67 | 14.79 | 0.604 | 0.938 | -8.6 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 1D (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 120.08 | 44.7% | 0.671 | 10.83 | 11.09 | 0.757 | 0.595 | -4.27 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + SL tối đa (% Entry) → 0.425 | 119.88 | 47.3% | 0.727 | 8.97 | 13.36 | 0.697 | 0.759 | -11.54 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 71.68 | 49.2% | 0.588 | 9.05 | 7.92 | 0.642 | 0.526 | -16.19 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần Trend (/100) → 12 + Điểm vùng: HVN cố định → 0.438 | 116.13 | 48.4% | 0.749 | 8.3 | 13.99 | 0.574 | 0.946 | -10.95 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: BOS → 1 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 100.95 | 50.7% | 0.691 | 8.06 | 12.52 | 0.616 | 0.773 | -8.96 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + R:R tối thiểu riêng khung 1W → 2 | 67.48 | 45.3% | 0.577 | 10.01 | 6.74 | 0.434 | 0.717 | -5.68 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Break mây Ichimoku → 1 + Đệm SL riêng khung 1D (ATR) → 0.3 + Số TP tối đa → 2 | 110.93 | 41.5% | 0.555 | 12.7 | 8.73 | 0.61 | 0.509 | -5.42 |  |

### Vòng 775 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.16

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: EMA 200 → 3 | 108.41 | 50.7% | 0.743 | 7.97 | 13.6 | 0.521 | 0.964 | -10.57 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 75.24 | 46.3% | 0.697 | 8.48 | 8.87 | 0.474 | 0.946 | -5.45 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm tối thiểu của vùng đặt SL → 4 | 95.22 | 45.9% | 0.599 | 9.12 | 10.44 | 0.509 | 0.679 | -10.2 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: HVN anchored → 0.313 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 91.23 | 43.8% | 0.625 | 10.11 | 9.02 | 0.525 | 0.736 | -9.7 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 112.96 | 50.3% | 0.758 | 8.31 | 13.59 | 0.654 | 0.864 | -9.94 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Mức MACD → 1.13 | 107.37 | 50.3% | 0.73 | 8.03 | 13.37 | 0.572 | 0.915 | -10.5 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần SL (/100) → 9 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 117.16 | 45.7% | 0.714 | 9.95 | 11.77 | 0.77 | 0.664 | -5.43 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Mức RSI 30/70 → 0.875 | 110.83 | 49.1% | 0.664 | 9.74 | 11.38 | 0.488 | 0.874 | -7.34 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Cộng thêm ngưỡng điểm khung 4H → -1 | 117.18 | 52.8% | 0.814 | 7.42 | 15.79 | 0.621 | 1.03 | -9.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Vùng RSI 45–55 → 0.875 + R:R tối thiểu riêng khung 4H → 2 | 117.65 | 39.9% | 0.364 | 14.18 | 8.3 | 0.435 | 0.31 | -7.8 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: BOS → 3 | 18.28 | 57.7% | 0.141 | 6.51 | 2.81 | 0.15 | 0.131 | -9.77 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cổng Dow → CHẶT + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần R:R (/100) → 28 | 66.66 | 38.2% | 0.374 | 16.31 | 4.09 | 0.349 | 0.4 | -4.21 |  |

### Vòng 774 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.07

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Cộng thêm ngưỡng điểm khung 1D → 5 + Cộng điểm phân kỳ dương ẩn → 2.25 + Trọng số phần R:R (/100) → 33 | 87.85 | 50.4% | 0.751 | 7.63 | 11.51 | 0.553 | 0.982 | -16.39 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: Mức RSI 30/70 → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 129.04 | 48.2% | 0.768 | 9.57 | 13.48 | 0.757 | 0.778 | -1.17 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 117.71 | 52.4% | 0.801 | 7.54 | 15.61 | 0.625 | 1 | -10.03 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Cộng thêm ngưỡng điểm khung 1D → 3 | 114.26 | 51.4% | 0.783 | 7.77 | 14.71 | 0.592 | 0.99 | -9.92 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + R:R tối thiểu riêng khung 1W → 2 | 110.29 | 51.7% | 0.75 | 7.71 | 14.3 | 0.649 | 0.851 | -10.96 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + SL tối đa (% Entry) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 99.94 | 50.3% | 0.68 | 8.35 | 11.97 | 0.616 | 0.748 | -8.96 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: POC anchored → 4 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Xác nhận khung nhỏ (A2) → W | 103.2 | 39.2% | 0.378 | 16.77 | 6.15 | 0.398 | 0.36 | -0.77 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 100.41 | 51.5% | 0.761 | 7.51 | 13.37 | 0.608 | 0.939 | -9.56 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Số TP tối đa → 2 | 119.69 | 53.1% | 0.825 | 7.4 | 16.17 | 0.64 | 1.035 | -9.92 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + % chốt ở TP1 → 0.287 | 87.78 | 50.4% | 0.75 | 7.65 | 11.47 | 0.55 | 0.984 | -16.39 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Break mây Ichimoku → 3 | 126.47 | 48.6% | 0.715 | 8.85 | 14.29 | 0.746 | 0.677 | -10.25 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + SL tối đa (% Entry) → 0.425 + R:R tối thiểu tới TP1 → 2.38 + Số TP tối đa → 2 | 106.19 | 47% | 0.648 | 8.71 | 12.19 | 0.549 | 0.741 | -14.49 |  |
