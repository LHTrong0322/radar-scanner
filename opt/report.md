# Tối ưu tự động (chạy liên tục) — vòng 673

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 7731 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 160 | 46.3% | 90.94R | 0.568 | 5.74R | 10.12R | 8.99 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 142 | 53.5% | 115.79R | 0.815 | 5.09R | 7.51R | 15.42 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 104 | 54.8% | 88.63R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 160 | 46.3% | 90.94R | 10.12R | 8.99 | 32 | 12.5% | -14.03R |
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

### Vòng 669 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.08

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + R:R tối thiểu riêng khung 4H → 2 | 107.68 | 39.8% | 0.348 | 12.92 | 8.33 | 0.31 | 0.381 | -8.53 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Lệnh chờ hết hạn sau (nến) → 8 | 28 | 56.3% | 0.161 | 6.71 | 4.17 | 0.195 | 0.128 | -12.45 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần SL (/100) → 9 + Điểm vùng: MACD cắt lên Signal → 0.438 | 106.78 | 44.9% | 0.6 | 12.08 | 8.84 | 0.554 | 0.642 | -3.44 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 98.09 | 51% | 0.667 | 8.37 | 11.72 | 0.593 | 0.753 | -9.46 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + % chốt ở TP1 → 0.287 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 1W (ATR) → 0.3 | 63.91 | 39.7% | 0.507 | 11.87 | 5.38 | 0.348 | 0.639 | -6.83 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: POC anchored → 2 | 97.63 | 48.3% | 0.655 | 8.59 | 11.37 | 0.555 | 0.759 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Biên mây Ichimoku → 1.05 + Cộng thêm ngưỡng điểm khung 4H → -1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 70.59 | 45.8% | 0.497 | 10.43 | 6.77 | 0.457 | 0.542 | -9.8 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 3 | 65.18 | 44% | 0.562 | 10.82 | 6.02 | 0.254 | 0.869 | -7.55 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Divergence (/100) → 9 | 151.08 | 38.7% | 0.526 | 18.11 | 8.34 | 0.333 | 0.719 | -11.22 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Cổng Dow → TẮT | 150.55 | 46.7% | 0.657 | 10.63 | 14.16 | 0.553 | 0.765 | -20.08 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu tới TP1 → 2.63 | 77.4 | 50% | 0.806 | 7.77 | 9.96 | 0.512 | 1.113 | -14.31 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 113.8 | 51.4% | 0.813 | 7.58 | 15.01 | 0.621 | 1.027 | -12.92 |  |

### Vòng 668 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.13

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 34.69 | 58.1% | 0.217 | 5.85 | 5.93 | 0.261 | 0.175 | -11.38 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: HVN cố định → 0.563 | 116.54 | 52% | 0.787 | 7.6 | 15.33 | 0.608 | 0.993 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Mức MACD → 0.875 | 106.11 | 40.3% | 0.342 | 13.42 | 7.91 | 0.293 | 0.384 | -11.29 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Coin phải mạnh hơn BTC trong N ngày → 14 + Cộng điểm phân kỳ dương ẩn → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 100.73 | 50% | 0.775 | 8.18 | 12.31 | 0.726 | 0.827 | -14.09 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 114.07 | 51.4% | 0.792 | 7.89 | 14.46 | 0.522 | 1.086 | -9.52 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Entry (/100) → 28 | 107.39 | 45.5% | 0.61 | 9.18 | 11.7 | 0.573 | 0.646 | -10.98 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + % chốt ở TP1 → 0.287 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Biên mây Ichimoku → 1.05 | 67.04 | 43.8% | 0.414 | 11.18 | 6 | 0.432 | 0.397 | -10.07 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 111.07 | 50.7% | 0.782 | 7.83 | 14.19 | 0.646 | 0.931 | -8.34 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Lệnh chờ hết hạn sau (nến) → 8 | 34.32 | 54.5% | 0.136 | 13 | 2.64 | 0.077 | 0.188 | -18.4 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Divergence (/100) → 12 | 29.65 | 58.6% | 0.189 | 5.93 | 5 | 0.207 | 0.171 | -11.38 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Break mây Ichimoku → 3 + Cổng Dow → TẮT | 106.74 | 43.9% | 0.479 | 12.67 | 8.42 | 0.373 | 0.58 | -18.39 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Ngưỡng điểm vào kèo → 74 | 105.81 | 49.3% | 0.705 | 8.35 | 12.67 | 0.549 | 0.875 | -11.02 |  |

### Vòng 667 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.27R, lời÷rủi ro 16.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: MACD cắt lên Signal → 0.563 | 112.62 | 50% | 0.828 | 8.1 | 13.9 | 0.614 | 1.084 | -8.91 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 24.6 | 57.4% | 0.181 | 5.59 | 4.4 | 0.245 | 0.12 | -8.17 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 200 → 1 | 105.6 | 45.7% | 0.644 | 10.09 | 10.47 | 0.586 | 0.724 | -4.46 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 114.07 | 51.4% | 0.792 | 7.81 | 14.61 | 0.522 | 1.086 | -9.52 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 118.24 | 53.5% | 0.821 | 7.28 | 16.24 | 0.632 | 1.039 | -9.64 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Trọng số phần SL (/100) → 9 + Điểm vùng: Mức MACD → 0.875 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 79.33 | 45% | 0.525 | 9.61 | 8.25 | 0.442 | 0.612 | -10.86 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.7 | 58.9% | 0.188 | 5.93 | 5.01 | 0.218 | 0.159 | -9.91 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: EMA 21 → 0.875 | 113.55 | 50.7% | 0.789 | 8.04 | 14.12 | 0.631 | 0.955 | -9.66 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Divergence (/100) → 12 | 101.87 | 49.6% | 0.722 | 8.09 | 12.59 | 0.465 | 1.024 | -11.51 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Số TP tối đa → 2 | 117.53 | 51.9% | 0.753 | 8.34 | 14.09 | 0.611 | 0.933 | -4.67 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 23.47 | 54.4% | 0.139 | 7.49 | 3.13 | 0.171 | 0.107 | -10.72 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Coin phải mạnh hơn BTC trong N ngày → 14 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 78.37 | 48.4% | 0.642 | 9.5 | 8.25 | 0.485 | 0.84 | -13.52 |  |

### Vòng 666 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.85

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 78.13 | 47.6% | 0.62 | 9.41 | 8.3 | 0.526 | 0.717 | -8.14 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: Break mây Ichimoku → 1 | 70.6 | 45.5% | 0.642 | 9.33 | 7.57 | 0.432 | 0.876 | -6.08 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib sóng 4 → 0.938 | 105.06 | 38.9% | 0.409 | 15.72 | 6.68 | 0.361 | 0.454 | -3.74 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Ngưỡng điểm vào kèo → 74 + Xác nhận khung nhỏ (A2) → W | 103.77 | 38.7% | 0.405 | 15.79 | 6.57 | 0.388 | 0.421 | -3.74 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 95.58 | 45.8% | 0.673 | 9.87 | 9.68 | 0.499 | 0.816 | -11.83 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Trọng số phần Elliott (/100) → 10 | 114.22 | 51% | 0.799 | 7.92 | 14.42 | 0.602 | 1.028 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cộng thêm ngưỡng điểm khung 4H → -1 | 112.27 | 51.7% | 0.764 | 7.88 | 14.25 | 0.575 | 0.983 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Cộng thêm ngưỡng điểm khung 4H → 2 | 115.05 | 51.7% | 0.805 | 7.67 | 15 | 0.686 | 0.935 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Cổng Dow → TẮT | 127.86 | 43.9% | 0.624 | 11.49 | 11.13 | 0.532 | 0.715 | -19.26 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 115.61 | 52.4% | 0.797 | 7.72 | 14.98 | 0.591 | 1.037 | -9.66 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: EMA 200 → 1 + Xác nhận khung nhỏ (A2) → W | 102.88 | 38.4% | 0.373 | 16.97 | 6.06 | 0.362 | 0.383 | -5.06 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: BOS → 3 + SL tối đa (% Entry) → 0.425 | 106.85 | 52.1% | 0.732 | 7.89 | 13.54 | 0.589 | 0.887 | -11.78 |  |

### Vòng 665 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.42R, lời÷rủi ro 15.95

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Break mây Ichimoku → 1 | 106.64 | 50.3% | 0.725 | 8.19 | 13.02 | 0.554 | 0.914 | -11.02 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: EMA 50 → 0.75 | 7.22 | 47.5% | 0.052 | 11.73 | 0.62 | 0.074 | 0.022 | -15.2 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 75.44 | 50% | 0.629 | 8.15 | 9.26 | 0.633 | 0.624 | -15.75 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Divergence (/100) → 9 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 79.2 | 47.3% | 0.614 | 8.72 | 9.08 | 0.53 | 0.697 | -10.2 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Cộng thêm ngưỡng điểm khung 1D → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 75.7 | 47.2% | 0.701 | 8.5 | 8.91 | 0.473 | 0.956 | -6.48 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Fib sóng 4 → 1.56 | 75.44 | 47% | 0.571 | 9.72 | 7.76 | 0.431 | 0.73 | -7.38 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Đệm SL riêng khung 1D (ATR) → 0.3 | 117.43 | 47.9% | 0.703 | 10.09 | 11.64 | 0.676 | 0.728 | -6.35 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + R:R tối thiểu riêng khung 4H → 2 | 118.34 | 41.9% | 0.378 | 12.31 | 9.61 | 0.332 | 0.416 | -9.27 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Đệm SL riêng khung 4H (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Fib sóng 4 → 1.56 | 87.5 | 34.2% | 0.384 | 21.14 | 4.14 | 0.224 | 0.552 | -12.54 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng thêm ngưỡng điểm khung 4H → 2 | 83.78 | 37% | 0.345 | 16.69 | 5.02 | 0.339 | 0.35 | -3.11 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: EMA 200 → 1 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 101.05 | 47.2% | 0.62 | 9.61 | 10.52 | 0.467 | 0.786 | -5.61 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần SL (/100) → 9 | 30.04 | 58% | 0.191 | 5.67 | 5.3 | 0.219 | 0.165 | -11.38 |  |

### Vòng 664 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.28R, lời÷rủi ro 16.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1W (ATR) → 0.3 | 107.86 | 47.2% | 0.76 | 8.66 | 12.45 | 0.557 | 0.957 | -10.7 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Ngưỡng điểm vào kèo → 74 | 110.36 | 48.2% | 0.783 | 8.45 | 13.06 | 0.573 | 1.035 | -8.91 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: HVN cố định → 0.563 | 29.51 | 58.1% | 0.184 | 5.89 | 5.01 | 0.219 | 0.152 | -10.63 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: POC volume profile cố định → 0.813 + Ngưỡng điểm vào kèo → 74 | 116.54 | 52% | 0.787 | 7.6 | 15.33 | 0.608 | 0.993 | -8.64 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 99.79 | 50% | 0.648 | 9.2 | 10.85 | 0.59 | 0.711 | -6.1 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Mức MACD → 0.875 | 101.87 | 50.3% | 0.675 | 8.64 | 11.79 | 0.546 | 0.812 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Cộng thêm ngưỡng điểm khung 4H → 2 + Ngưỡng điểm vào kèo → 77 | 112.32 | 50.4% | 0.797 | 8.1 | 13.87 | 0.703 | 0.9 | -8.84 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Biên mây Ichimoku → 1.05 + R:R tối thiểu tới TP1 → 2.63 | 91.82 | 49.6% | 0.772 | 8.16 | 11.25 | 0.534 | 1.013 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Trọng số phần Momentum (/100) → 25 | 113.89 | 51.4% | 0.791 | 7.75 | 14.7 | 0.596 | 1.015 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: EMA 21 → 1.13 | 112.76 | 52.1% | 0.772 | 7.46 | 15.12 | 0.617 | 0.95 | -10 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: MACD cắt lên Signal → 0.438 + Cộng thêm ngưỡng điểm khung 1W → -1 | 109.88 | 50.3% | 0.709 | 9.04 | 12.15 | 0.49 | 0.967 | -7.08 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Trọng số phần Divergence (/100) → 9 + SL tối đa (% Entry) → 0.425 + R:R tối thiểu tới TP1 → 2.63 | 89.99 | 49.2% | 0.75 | 8.49 | 10.6 | 0.52 | 0.98 | -10.63 |  |
