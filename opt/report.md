# Tối ưu tự động (chạy liên tục) — vòng 627

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 7179 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.9% | 95.89R | 0.588 | 5.46R | 9.3R | 10.31 | 32 | 12.5% | -14.18R | -0.443 | 14.18R |
| **Tốt nhất** | 144 | 52.1% | 112.42R | 0.781 | 6.16R | 8.07R | 13.93 | 30 | 16.7% | -11.98R | -0.399 | 11.98R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 27 | 48.1% | 18.83R | 5 | 0% | -3.76R |
| 1W | 11 | 45.5% | 6.82R | 3 | 0% | -3.33R |
| 4H | 106 | 53.8% | 86.77R | 22 | 22.7% | -4.88R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.9% | 95.89R | 9.3R | 10.31 | 32 | 12.5% | -14.18R |
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

### Vòng 627 — ngẫu nhiên nhiều thông số · mốc: tổng 112.42R, win 52.1%, rủi ro tụt vốn 8.07R, lời÷rủi ro 13.93

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: POC anchored → 2 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 85.43 | 48.3% | 0.566 | 9.39 | 9.1 | 0.524 | 0.607 | -10.17 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 1W (ATR) → 0.3 | 136.21 | 36.5% | 0.478 | 19.09 | 7.14 | 0.312 | 0.631 | -15.44 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: BOS → 3 + Điểm vùng: POC anchored → 4 | 103.66 | 49.6% | 0.735 | 8.26 | 12.55 | 0.468 | 0.998 | -6.84 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần Entry (/100) → 28 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 114.14 | 49.6% | 0.821 | 8.11 | 14.07 | 0.595 | 1.078 | -10.22 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Ngưỡng điểm vào kèo → 74 + Xác nhận khung nhỏ (A2) → W | 82.51 | 37.3% | 0.299 | 19.69 | 4.19 | 0.319 | 0.28 | -5.99 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Cổng Dow → CHẶT + Trọng số phần Momentum (/100) → 21 | 83.39 | 53.6% | 0.745 | 6.98 | 11.95 | 0.353 | 1.049 | -13.04 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 50 → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 95.73 | 49% | 0.651 | 8.97 | 10.67 | 0.544 | 0.773 | -12.42 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Fib sóng 4 → 0.938 | 109.34 | 50.7% | 0.759 | 8.07 | 13.55 | 0.575 | 0.96 | -11.98 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: Fib sóng 4 → 0.938 | 110.02 | 51% | 0.769 | 8.19 | 13.43 | 0.578 | 0.981 | -11.98 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Lệnh chờ hết hạn sau (nến) → 6 | 116.53 | 44.4% | 0.54 | 10.82 | 10.77 | 0.579 | 0.497 | -5.34 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: HVN cố định → 0.563 | 93.49 | 50.8% | 0.779 | 7.87 | 11.88 | 0.489 | 1.089 | -11.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Lệnh chờ hết hạn sau (nến) → 6 | 117.58 | 36.5% | 0.434 | 19.45 | 6.05 | 0.314 | 0.549 | -14.6 |  |

### Vòng 626 — ngẫu nhiên nhiều thông số · mốc: tổng 109.21R, win 51.7%, rủi ro tụt vốn 8.03R, lời÷rủi ro 13.60

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Khung lớn phải tăng (trend ≥) → 0.375 | 97.43 | 44.1% | 0.573 | 9.61 | 10.14 | 0.568 | 0.578 | -8.21 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: BOS → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 94.89 | 46% | 0.693 | 9.28 | 10.23 | 0.496 | 0.87 | -12.74 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Trọng số phần Momentum (/100) → 25 | 107.43 | 50.3% | 0.741 | 8.1 | 13.26 | 0.572 | 0.932 | -11.98 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Entry (/100) → 28 + Điểm vùng: EMA 21 → 1.13 | 93.67 | 49% | 0.629 | 8.61 | 10.88 | 0.585 | 0.677 | -12.12 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 107.83 | 50.7% | 0.749 | 8.2 | 13.15 | 0.588 | 0.923 | -10.66 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 86.81 | 46.5% | 0.603 | 9.6 | 9.04 | 0.461 | 0.781 | -10.19 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 100.66 | 40.3% | 0.325 | 13.31 | 7.56 | 0.299 | 0.346 | -8.07 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + R:R tối thiểu riêng khung 1D → 2 + Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 4H → -1 | 105.08 | 38.5% | 0.337 | 16.44 | 6.39 | 0.358 | 0.317 | -4.9 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 76.22 | 44.8% | 0.438 | 11.32 | 6.73 | 0.518 | 0.36 | -11.72 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 103.99 | 51.4% | 0.712 | 8.75 | 11.88 | 0.582 | 0.853 | -11.98 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 79.06 | 37.5% | 0.215 | 17 | 4.65 | 0.236 | 0.199 | -24.78 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 89.13 | 49.6% | 0.713 | 8.24 | 10.82 | 0.575 | 0.873 | -9.29 |  |

### Vòng 625 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.28R, lời÷rủi ro 15.62

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Entry (/100) → 28 + Cộng thêm ngưỡng điểm khung 1W → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 108.34 | 48% | 0.722 | 8.2 | 13.21 | 0.565 | 0.898 | -11.98 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Lệnh chờ hết hạn sau (nến) → 8 | 112.69 | 51.6% | 0.737 | 7.69 | 14.65 | 0.614 | 0.878 | -11.25 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm tối thiểu của vùng đặt SL → 2 | 108.01 | 52.7% | 0.74 | 8.12 | 13.3 | 0.635 | 0.857 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần SL (/100) → 7 | 107.36 | 52% | 0.725 | 8.2 | 13.09 | 0.624 | 0.838 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 95.18 | 49.6% | 0.675 | 8.25 | 11.54 | 0.446 | 0.935 | -10.21 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Entry (/100) → 28 + Trọng số phần Divergence (/100) → 12 + Số TP tối đa → 2 | 99.9 | 50% | 0.714 | 8.16 | 12.24 | 0.492 | 0.977 | -11.51 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Mức RSI 30/70 → 0.875 | 109.72 | 49.4% | 0.703 | 9.2 | 11.93 | 0.578 | 0.853 | -13.89 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 109.11 | 51.1% | 0.785 | 7.63 | 14.3 | 0.621 | 0.971 | -12.92 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 5 | 110.85 | 50.3% | 0.765 | 7.94 | 13.96 | 0.66 | 0.873 | -10 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Trọng số phần R:R (/100) → 33 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 110.87 | 51% | 0.706 | 8.32 | 13.33 | 0.606 | 0.83 | -3.35 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 112.94 | 52.8% | 0.784 | 7.59 | 14.88 | 0.635 | 0.956 | -8.34 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 108 | 50.7% | 0.75 | 7.71 | 14.01 | 0.6 | 0.917 | -8.17 |  |

### Vòng 624 — ngẫu nhiên nhiều thông số · mốc: tổng 114.61R, win 54%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.34

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + R:R tối thiểu riêng khung 1W → 2 | 71.2 | 44.3% | 0.478 | 9.94 | 7.16 | 0.46 | 0.496 | -11.23 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 111.73 | 51.1% | 0.792 | 7.95 | 14.05 | 0.696 | 0.89 | -10 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + R:R tối thiểu riêng khung 1W → 2 | 102.82 | 52.1% | 0.724 | 7.93 | 12.97 | 0.631 | 0.822 | -10.69 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 49.8 | 42.7% | 0.519 | 10.84 | 4.59 | 0.409 | 0.62 | -11.24 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: POC anchored → 2 | 95 | 45.6% | 0.562 | 9.47 | 10.03 | 0.58 | 0.545 | -5.86 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 93.82 | 50% | 0.69 | 8.05 | 11.65 | 0.52 | 0.881 | -10.96 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Trend (/100) → 12 | 97.71 | 51.8% | 0.703 | 7.72 | 12.66 | 0.686 | 0.722 | -9.42 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: POC anchored → 2 + Điểm tối thiểu của vùng đặt SL → 4 + Cộng thêm ngưỡng điểm khung 4H → -1 | 89.67 | 49% | 0.602 | 8.81 | 10.18 | 0.515 | 0.702 | -8.63 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 26.47 | 50.4% | 0.102 | 16.68 | 1.59 | 0.067 | 0.134 | -15.49 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Trọng số phần SL (/100) → 9 | 113.96 | 53.2% | 0.808 | 7.36 | 15.48 | 0.646 | 1.004 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 81.59 | 42.7% | 0.497 | 12.78 | 6.38 | 0.492 | 0.503 | -6.66 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: POC volume profile cố định → 0.813 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 49.85 | 46.4% | 0.445 | 10.37 | 4.81 | 0.281 | 0.568 | -14.28 |  |

### Vòng 623 — ngẫu nhiên nhiều thông số · mốc: tổng 116.9R, win 53.5%, rủi ro tụt vốn 7.51R, lời÷rủi ro 15.57

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 4H → 2 | 73.84 | 42.5% | 0.27 | 13.1 | 5.64 | 0.344 | 0.21 | -20.8 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: HVN cố định → 0.438 | 122.11 | 50% | 0.783 | 8.34 | 14.64 | 0.722 | 0.855 | -10.24 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: EMA 21 → 0.875 | 104.52 | 44.8% | 0.601 | 9.52 | 10.98 | 0.588 | 0.612 | -7.92 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: HVN cố định → 0.563 | 124.31 | 50.3% | 0.802 | 8.21 | 15.14 | 0.757 | 0.855 | -10.24 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Coin phải mạnh hơn BTC trong N ngày → 14 | 71.48 | 45.3% | 0.674 | 8.9 | 8.03 | 0.377 | 1.02 | -14.56 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: BOS → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: POC volume profile cố định → 0.688 | 113.64 | 52.8% | 0.789 | 7.64 | 14.87 | 0.604 | 0.996 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Khung lớn phải tăng (trend ≥) → 0.425 + Trọng số phần Entry (/100) → 33 + Điểm vùng: POC anchored → 2 | 90.88 | 45.7% | 0.649 | 9.3 | 9.77 | 0.457 | 0.821 | -9.71 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 111.34 | 44.7% | 0.493 | 11.34 | 9.82 | 0.585 | 0.392 | -10.15 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + SL tối đa (% Entry) → 0.425 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 82.66 | 49.6% | 0.706 | 8.5 | 9.72 | 0.518 | 0.927 | -16.13 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 107.42 | 36.9% | 0.396 | 19.91 | 5.4 | 0.298 | 0.498 | -14.39 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + R:R tối thiểu tới TP1 → 2.38 | 93.73 | 46.5% | 0.589 | 8.92 | 10.51 | 0.508 | 0.67 | -11.23 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Đệm SL riêng khung 4H (ATR) → 0.3 | 159.42 | 39.3% | 0.55 | 17.36 | 9.18 | 0.381 | 0.721 | -13.36 |  |

### Vòng 622 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.34R, lời÷rủi ro 15.49

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 118.26 | 40.5% | 0.363 | 12.39 | 9.54 | 0.362 | 0.363 | -11.31 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 111.86 | 51.7% | 0.761 | 7.77 | 14.4 | 0.608 | 0.939 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: POC anchored → 4 | 113.19 | 52% | 0.765 | 7.85 | 14.42 | 0.596 | 0.943 | -4.48 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Cộng điểm phân kỳ dương ẩn → 2.25 | 99.82 | 50.3% | 0.67 | 8.45 | 11.81 | 0.546 | 0.806 | -8.63 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Ngưỡng điểm vào kèo → 74 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 77.85 | 44% | 0.463 | 10.55 | 7.38 | 0.387 | 0.541 | -10.47 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 1W → 2 | 60.01 | 44.1% | 0.588 | 9.24 | 6.49 | 0.364 | 0.851 | -8.41 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Momentum (/100) → 21 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: HVN anchored → 0.188 | 92.77 | 48.9% | 0.698 | 8.19 | 11.33 | 0.42 | 1.006 | -11.55 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 102.94 | 41.3% | 0.338 | 12.62 | 8.16 | 0.322 | 0.351 | -10.27 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Elliott (/100) → 10 + Cổng Dow → CHẶT + Khung lớn phải tăng (trend ≥) → 0.425 | 65.8 | 50.5% | 0.665 | 7.23 | 9.1 | 0.176 | 1.056 | -11.65 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 71.8 | 46% | 0.57 | 9.33 | 7.7 | 0.422 | 0.733 | -12.05 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Trọng số phần Entry (/100) → 33 | 113.64 | 53.2% | 0.806 | 7.21 | 15.76 | 0.651 | 0.982 | -9.66 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Trọng số phần Divergence (/100) → 9 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: POC anchored → 2 | 85.27 | 38.3% | 0.333 | 16.2 | 5.26 | 0.396 | 0.28 | -9.29 |  |

### Vòng 621 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.34R, lời÷rủi ro 15.49

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Cổng Dow → CHẶT + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 81.78 | 53.6% | 0.743 | 6.91 | 11.84 | 0.364 | 1.084 | -10.72 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: EMA 21 → 1.13 + R:R tối thiểu riêng khung 1W → 2 | 106.44 | 47.5% | 0.674 | 8.82 | 12.07 | 0.706 | 0.639 | -11.62 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trọng số phần Entry (/100) → 33 | 94.56 | 50.4% | 0.769 | 8.15 | 11.6 | 0.511 | 1.058 | -11.59 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: EMA 21 → 0.875 | 111.08 | 50.7% | 0.771 | 8.05 | 13.8 | 0.646 | 0.911 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 39.41 | 35.9% | 0.232 | 15.26 | 2.58 | 0.272 | 0.187 | -1.49 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: HVN anchored → 0.188 + Số TP tối đa → 2 | 114.78 | 53.1% | 0.803 | 7.34 | 15.64 | 0.64 | 0.993 | -9.66 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trần điểm khi chart yếu (Trend < x) → -0.375 + Cổng Dow → TẮT + Trọng số phần Elliott (/100) → 10 | 30.91 | 34.5% | 0.137 | 25.48 | 1.21 | 0.143 | 0.131 | -23.55 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Entry (/100) → 28 | 111.98 | 47.3% | 0.679 | 10.35 | 10.82 | 0.676 | 0.681 | -5.33 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + R:R tối thiểu riêng khung 4H → 2 | 102.01 | 41.1% | 0.33 | 12.95 | 7.88 | 0.318 | 0.34 | -10.23 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Khung lớn phải tăng (trend ≥) → 0.425 + Đệm SL riêng khung 1W (ATR) → 0.3 | 88.72 | 46.2% | 0.682 | 8.91 | 9.96 | 0.497 | 0.874 | -9.35 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: POC anchored → 2 | 88.74 | 45.2% | 0.535 | 9.05 | 9.81 | 0.527 | 0.542 | -7.8 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Divergence (/100) → 9 | 28.89 | 57.3% | 0.184 | 5.55 | 5.21 | 0.242 | 0.134 | -11.41 |  |

### Vòng 620 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 15.36

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Mức RSI 30/70 → 1.13 + Số TP tối đa → 2 | 101.65 | 50% | 0.678 | 9.1 | 11.17 | 0.528 | 0.858 | -7.08 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm tối thiểu của vùng đặt SL → 4 + Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 1D → 5 | 91.3 | 37.3% | 0.362 | 17.07 | 5.35 | 0.374 | 0.352 | -3.74 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 111.45 | 52.4% | 0.769 | 7.71 | 14.46 | 0.634 | 0.921 | -9.66 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + SL tối đa (% Entry) → 0.425 | 29.15 | 58.2% | 0.185 | 5.92 | 4.92 | 0.219 | 0.151 | -10.63 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: EMA 50 → 0.75 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 107.68 | 51.4% | 0.758 | 7.87 | 13.68 | 0.508 | 1.023 | -9.52 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: MACD cắt lên Signal → 0.438 | 100.27 | 46.9% | 0.692 | 9.43 | 10.63 | 0.502 | 0.868 | -6.81 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Lệnh chờ hết hạn sau (nến) → 8 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng điểm phân kỳ dương ẩn → 3 | 79.48 | 45.5% | 0.646 | 9.78 | 8.13 | 0.598 | 0.707 | -6.42 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: HVN cố định → 0.563 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 52.16 | 51.3% | 0.686 | 6.8 | 7.67 | 0.223 | 1.103 | -8.72 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 88.26 | 39.2% | 0.277 | 15.07 | 5.86 | 0.254 | 0.298 | -11.22 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 111 | 50.3% | 0.776 | 7.88 | 14.09 | 0.672 | 0.882 | -10 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Số TP tối đa → 2 + Điểm vùng: HVN cố định → 0.563 | 121.89 | 50% | 0.791 | 8.33 | 14.63 | 0.757 | 0.833 | -10.24 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 1W (ATR) → 0.3 | 91.46 | 47% | 0.683 | 9.33 | 9.8 | 0.436 | 0.901 | -10.7 |  |

### Vòng 619 — ngẫu nhiên nhiều thông số · mốc: tổng 113.69R, win 53.1%, rủi ro tụt vốn 7.34R, lời÷rủi ro 15.49

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức RSI 30/70 → 0.875 | 102.97 | 49.7% | 0.682 | 8.98 | 11.47 | 0.586 | 0.806 | -9.07 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: BOS → 1 + Điểm vùng: MACD cắt lên Signal → 0.438 + Cộng thêm ngưỡng điểm khung 1D → 5 | 116.7 | 47.6% | 0.703 | 9.85 | 11.85 | 0.626 | 0.799 | -7.66 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: BOS → 1 + Điểm vùng: Fib sóng 4 → 0.938 + Xác nhận khung nhỏ (A2) → W | 87.84 | 39.1% | 0.347 | 16.6 | 5.29 | 0.373 | 0.323 | -3.18 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Trend (/100) → 12 | 111.25 | 49.6% | 0.812 | 8.13 | 13.68 | 0.631 | 1.031 | -8.91 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần SL (/100) → 7 + Trọng số phần Entry (/100) → 33 + Điểm vùng: EMA 50 → 0.75 | 109.53 | 52.1% | 0.782 | 7.5 | 14.6 | 0.621 | 0.953 | -9.66 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN anchored → 0.313 | 83.71 | 39% | 0.266 | 14.93 | 5.61 | 0.252 | 0.278 | -9.21 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu riêng khung 1D → 2 | 100.5 | 44.5% | 0.552 | 10.31 | 9.75 | 0.49 | 0.611 | -6.13 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Trọng số phần SL (/100) → 9 + Điểm vùng: Mức RSI 30/70 → 0.875 | 113.65 | 50.6% | 0.71 | 8.58 | 13.25 | 0.559 | 0.895 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 | 38.82 | 30.9% | 0.261 | 21.76 | 1.78 | 0.069 | 0.465 | 6.93 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 111.95 | 52.8% | 0.788 | 7.53 | 14.87 | 0.62 | 0.982 | -9.66 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Số TP tối đa → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 | 79.02 | 49.6% | 0.699 | 8.19 | 9.65 | 0.501 | 0.94 | -16.16 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + R:R tối thiểu riêng khung 1D → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 104.96 | 46.2% | 0.614 | 9.32 | 11.26 | 0.602 | 0.624 | -7.92 |  |

### Vòng 618 — ngẫu nhiên nhiều thông số · mốc: tổng 114.01R, win 53.5%, rủi ro tụt vốn 7.42R, lời÷rủi ro 15.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 200 → 3 | 95.63 | 50.4% | 0.678 | 8.39 | 11.4 | 0.563 | 0.789 | -7.57 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + R:R tối thiểu tới TP1 → 2.63 | 94.83 | 51.3% | 0.797 | 7.77 | 12.2 | 0.557 | 1.067 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Cộng thêm ngưỡng điểm khung 1D → 3 | 100.36 | 49.3% | 0.687 | 8.64 | 11.62 | 0.538 | 0.868 | -7.57 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cộng thêm ngưỡng điểm khung 1W → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 155.51 | 39% | 0.542 | 17.44 | 8.92 | 0.396 | 0.689 | -8.55 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: EMA 50 → 1.13 | 97.89 | 49.6% | 0.704 | 8.3 | 11.79 | 0.486 | 0.96 | -8.41 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Coin phải mạnh hơn BTC trong N ngày → 14 | 84.77 | 50% | 0.684 | 8.83 | 9.6 | 0.532 | 0.873 | -11.46 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 103.27 | 50.7% | 0.717 | 8.17 | 12.64 | 0.586 | 0.859 | -9.04 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Trend (/100) → 12 + Trọng số phần R:R (/100) → 33 | 93.02 | 47.4% | 0.689 | 9.02 | 10.31 | 0.428 | 0.925 | -8.61 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: EMA 200 → 3 | 99.8 | 49.6% | 0.718 | 8.01 | 12.46 | 0.541 | 0.903 | -7.54 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 106.79 | 51.4% | 0.742 | 7.77 | 13.74 | 0.6 | 0.896 | -8.05 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Lệnh chờ hết hạn sau (nến) → 8 | 28.48 | 56.7% | 0.174 | 6.49 | 4.39 | 0.234 | 0.117 | -10.32 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cộng điểm phân kỳ dương ẩn → 3 | 112.43 | 52.8% | 0.781 | 7.48 | 15.03 | 0.626 | 0.959 | -7.57 |  |
