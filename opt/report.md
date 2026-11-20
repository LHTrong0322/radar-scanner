# Tối ưu tự động (chạy liên tục) — vòng 942

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 10959 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 46.4% | 95.04R | 0.573 | 6.44R | 10.22R | 9.30 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 145 | 52.4% | 113.95R | 0.786 | 5.09R | 8.04R | 14.17 | 27 | 18.5% | -8.9R | -0.33 | 10.54R |

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
| Bot thật | 166 | 46.4% | 95.04R | 10.22R | 9.30 | 30 | 13.3% | -11.98R |
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

### Vòng 942 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.04R, lời÷rủi ro 14.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 82.7 | 46.1% | 0.646 | 9.42 | 8.78 | 0.434 | 0.901 | -16.4 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: POC anchored → 2 | 96.98 | 48.4% | 0.634 | 9.43 | 10.28 | 0.484 | 0.802 | -9.87 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 79.05 | 44.3% | 0.473 | 10.85 | 7.29 | 0.474 | 0.473 | -9.71 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 90.27 | 41.9% | 0.445 | 12.41 | 7.27 | 0.47 | 0.414 | -15.89 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 | 83.98 | 50% | 0.712 | 8.28 | 10.14 | 0.508 | 0.952 | -15.36 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức MACD → 1.13 | 100.84 | 49% | 0.686 | 8.55 | 11.79 | 0.564 | 0.806 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Đệm SL riêng khung 4H (ATR) → 0.3 | 38.08 | 52.5% | 0.127 | 14.94 | 2.55 | 0.133 | 0.123 | -15.71 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 109.16 | 50.7% | 0.738 | 8.49 | 12.86 | 0.548 | 0.948 | -7.98 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: POC volume profile cố định → 0.813 | 102.97 | 51% | 0.701 | 8.48 | 12.14 | 0.545 | 0.867 | -9.73 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 79.36 | 44.1% | 0.547 | 10.61 | 7.48 | 0.435 | 0.664 | -3.55 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 63.08 | 44.8% | 0.387 | 11.49 | 5.49 | 0.416 | 0.358 | -11.78 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Ngưỡng điểm vào kèo → 77 | 89.7 | 44.9% | 0.575 | 10.63 | 8.44 | 0.399 | 0.775 | -6.42 |  |

### Vòng 941 — ngẫu nhiên nhiều thông số · mốc: tổng 110.25R, win 52.1%, rủi ro tụt vốn 8.1R, lời÷rủi ro 13.61

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: EMA 200 → 3 + Điểm vùng: POC volume profile cố định → 0.813 | 99.55 | 49.7% | 0.696 | 8.45 | 11.78 | 0.479 | 0.936 | -9.35 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Cổng Dow → CHẶT | 80.3 | 53.2% | 0.737 | 6.76 | 11.88 | 0.326 | 1.098 | -9.12 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Xác nhận khung nhỏ (A2) → W + R:R tối thiểu riêng khung 1D → 2 | 76.95 | 37.2% | 0.27 | 19.66 | 3.91 | 0.255 | 0.285 | -3.64 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Mức RSI 30/70 → 1.13 + R:R tối thiểu riêng khung 1D → 2 | 95.48 | 45.6% | 0.525 | 9.17 | 10.41 | 0.54 | 0.511 | -7.64 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Mức MACD → 0.875 | 104.42 | 51.1% | 0.741 | 8.06 | 12.96 | 0.56 | 0.94 | -7.06 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: MACD cắt lên Signal → 0.438 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 67.11 | 41.7% | 0.399 | 11.87 | 5.65 | 0.318 | 0.476 | -4.94 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Cộng điểm phân kỳ dương ẩn → 2.25 | 98.18 | 49.7% | 0.687 | 8.53 | 11.51 | 0.518 | 0.883 | -8.35 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần R:R (/100) → 28 | 86.37 | 40.8% | 0.469 | 11.63 | 7.43 | 0.497 | 0.443 | -2.85 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: POC anchored → 4 | 111.34 | 41.4% | 0.419 | 14.92 | 7.46 | 0.461 | 0.375 | 3.76 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: POC anchored → 2 | 92.7 | 43.9% | 0.496 | 11.03 | 8.4 | 0.452 | 0.536 | -2.46 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: EMA 200 → 1 + Lệnh chờ hết hạn sau (nến) → 6 | 32.21 | 37.5% | 0.403 | 10.98 | 2.93 | 0.362 | 0.452 | -5.35 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: EMA 21 → 1.13 | 92.47 | 44.5% | 0.534 | 9.75 | 9.48 | 0.582 | 0.49 | -10.01 |  |

### Vòng 940 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.02R, lời÷rủi ro 14.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 113.95 | 52.4% | 0.786 | 8.02 | 14.21 | 0.592 | 1.006 | -8.9 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Khung lớn phải tăng (trend ≥) → 0.375 | 94.33 | 40% | 0.314 | 13.47 | 7 | 0.278 | 0.344 | -7.44 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: MACD cắt lên Signal → 0.438 | 106.15 | 48.8% | 0.632 | 9.5 | 11.17 | 0.451 | 0.846 | -7.91 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Fib sóng 4 → 0.938 + R:R tối thiểu riêng khung 1D → 2 | 101.3 | 44.8% | 0.589 | 9.67 | 10.48 | 0.585 | 0.593 | -7.16 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Cổng Dow → TẮT + Trọng số phần SL (/100) → 7 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 132.27 | 44% | 0.607 | 11.97 | 11.05 | 0.542 | 0.667 | -14.73 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Số TP tối đa → 2 | 120.57 | 45.2% | 0.529 | 11.32 | 10.65 | 0.569 | 0.485 | -9.07 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 111.18 | 51.4% | 0.762 | 8.31 | 13.38 | 0.549 | 1.006 | -8.9 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Số TP tối đa → 2 | 72.72 | 46.5% | 0.564 | 9.29 | 7.83 | 0.421 | 0.718 | -10.31 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 74.96 | 48% | 0.609 | 9.61 | 7.8 | 0.436 | 0.824 | -12.78 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần Divergence (/100) → 9 | 103.05 | 49.3% | 0.706 | 8.71 | 11.83 | 0.554 | 0.875 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần Divergence (/100) → 12 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 78.84 | 45.4% | 0.484 | 10.2 | 7.73 | 0.399 | 0.565 | -7.78 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng điểm phân kỳ dương ẩn → 3 + R:R tối thiểu tới TP1 → 2.63 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 26.86 | 58.4% | 0.196 | 5.79 | 4.64 | 0.199 | 0.194 | -7.28 |  |

### Vòng 939 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.98R, lời÷rủi ro 14.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần Trend (/100) → 19 | 102.01 | 46.3% | 0.638 | 9.48 | 10.76 | 0.494 | 0.789 | -9.72 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 109.93 | 51.7% | 0.748 | 8.07 | 13.62 | 0.566 | 0.954 | -9.85 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL riêng khung 1D (ATR) → 0.3 | 108.53 | 46.1% | 0.65 | 10.59 | 10.25 | 0.603 | 0.691 | -3.28 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: EMA 200 → 3 | 108.27 | 50% | 0.677 | 8.94 | 12.11 | 0.509 | 0.862 | -10.94 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần Entry (/100) → 28 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + SL tối đa (% Entry) → 0.425 | 100.55 | 48.3% | 0.666 | 8.87 | 11.34 | 0.502 | 0.841 | -8.97 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + R:R tối thiểu riêng khung 4H → 2 | 121.29 | 41.6% | 0.394 | 12.26 | 9.89 | 0.346 | 0.435 | -7.73 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 102.42 | 51% | 0.697 | 8.38 | 12.22 | 0.545 | 0.859 | -9.73 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Trọng số phần Elliott (/100) → 6 + Đệm SL riêng khung 1D (ATR) → 0.3 | 112.07 | 46% | 0.688 | 10.59 | 10.58 | 0.661 | 0.712 | -4.3 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: EMA 200 → 3 + Điểm vùng: EMA 50 → 0.75 + Cổng Dow → CHẶT | 77.7 | 49.6% | 0.688 | 7.35 | 10.57 | 0.267 | 1.022 | -9.94 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 107.86 | 50% | 0.739 | 8.25 | 13.07 | 0.515 | 0.995 | -8.9 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + % chốt ở TP1 → 0.287 | 72.75 | 46.5% | 0.564 | 9.44 | 7.71 | 0.418 | 0.721 | -10.31 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Biên mây Ichimoku → 1.35 | 95.51 | 48.9% | 0.687 | 8.6 | 11.11 | 0.425 | 0.969 | -9.47 |  |

### Vòng 938 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.93R, lời÷rủi ro 14.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm tối thiểu của vùng đặt SL → 2 | 108.28 | 37.6% | 0.407 | 20.54 | 5.27 | 0.255 | 0.55 | -9.92 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 113.5 | 52.1% | 0.777 | 8 | 14.19 | 0.592 | 0.985 | -7.88 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 73.66 | 46.9% | 0.575 | 10.03 | 7.34 | 0.344 | 0.855 | -11.47 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Cộng điểm phân kỳ dương ẩn → 2.25 + R:R tối thiểu tới TP1 → 2.38 | 88.03 | 46.2% | 0.564 | 9.31 | 9.46 | 0.469 | 0.655 | -8.16 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Cộng thêm ngưỡng điểm khung 1W → 2 | 111.41 | 50.7% | 0.753 | 8.09 | 13.77 | 0.598 | 0.917 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 21 → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 116.32 | 51.7% | 0.791 | 8.01 | 14.52 | 0.666 | 0.925 | -7.61 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 97.75 | 51% | 0.665 | 8.38 | 11.66 | 0.594 | 0.745 | -8.7 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Trend (/100) → 12 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 50 → 0.75 | 99.94 | 40.7% | 0.406 | 15.54 | 6.43 | 0.393 | 0.417 | -5.38 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Divergence (/100) → 9 | 27.12 | 57.3% | 0.173 | 5.85 | 4.64 | 0.189 | 0.158 | -9.27 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 123.91 | 45.9% | 0.558 | 10.92 | 11.35 | 0.589 | 0.524 | -10.18 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Break mây Ichimoku → 3 | 115.92 | 47.2% | 0.659 | 9.76 | 11.88 | 0.715 | 0.594 | -8.41 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Khung lớn phải tăng (trend ≥) → 0.375 | 97.38 | 49% | 0.645 | 8.93 | 10.9 | 0.491 | 0.801 | -8.9 |  |

### Vòng 937 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.02R, lời÷rủi ro 14.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.14 | 58.8% | 0.204 | 5.47 | 5.69 | 0.248 | 0.163 | -8.91 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Đệm SL riêng khung 1D (ATR) → 0.3 | 111.67 | 46.7% | 0.661 | 10.49 | 10.65 | 0.628 | 0.69 | -2.99 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: BOS → 1 | 85.73 | 43.8% | 0.529 | 11.57 | 7.41 | 0.587 | 0.483 | -5.34 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Biên mây Ichimoku → 1.35 | 110.17 | 51% | 0.749 | 8.33 | 13.23 | 0.549 | 0.977 | -7.88 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Cộng thêm ngưỡng điểm khung 1D → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: MACD cắt lên Signal → 0.438 | 104.86 | 49.1% | 0.659 | 9.34 | 11.23 | 0.453 | 0.897 | -5 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + R:R tối thiểu riêng khung 1W → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 65.77 | 46.1% | 0.514 | 10.89 | 6.04 | 0.392 | 0.657 | -12.78 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Mức RSI 30/70 → 1.13 | 111.31 | 52.1% | 0.762 | 7.99 | 13.93 | 0.592 | 0.953 | -7.61 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + R:R tối thiểu riêng khung 1D → 2 | 108.29 | 45.6% | 0.602 | 9.74 | 11.12 | 0.51 | 0.686 | -5.61 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: EMA 50 → 0.75 + Trọng số phần SL (/100) → 7 | 104.62 | 50% | 0.737 | 8.27 | 12.65 | 0.564 | 0.919 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Ngưỡng điểm vào kèo → 77 | 118.7 | 49.7% | 0.786 | 8.17 | 14.53 | 0.77 | 0.806 | -9.48 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Entry (/100) → 28 | 108.29 | 42.5% | 0.362 | 13.02 | 8.32 | 0.334 | 0.387 | -7.92 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + R:R tối thiểu riêng khung 1D → 2 | 102.18 | 46.4% | 0.571 | 9.51 | 10.74 | 0.552 | 0.589 | -6.14 |  |

### Vòng 936 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.01R, lời÷rủi ro 14.23

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 113.95 | 52.4% | 0.786 | 8.01 | 14.23 | 0.592 | 1.006 | -8.9 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + R:R tối thiểu riêng khung 4H → 2 | 108.93 | 42.6% | 0.366 | 12.98 | 8.39 | 0.334 | 0.393 | -7.89 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 110.97 | 50.7% | 0.76 | 8 | 13.87 | 0.572 | 0.975 | -7.88 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 37.25 | 40.4% | 0.419 | 10.12 | 3.68 | 0.342 | 0.512 | -7.55 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: POC anchored → 2 | 57.26 | 44.8% | 0.458 | 10.85 | 5.28 | 0.412 | 0.506 | -14.59 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 36.19 | 40.2% | 0.393 | 10.24 | 3.53 | 0.326 | 0.473 | -7.55 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng điểm phân kỳ dương ẩn → 3 | 96.6 | 50% | 0.662 | 8.6 | 11.23 | 0.572 | 0.759 | -7.94 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: BOS → 1 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: EMA 200 → 1 | 112.4 | 49.4% | 0.711 | 8.78 | 12.8 | 0.55 | 0.9 | -4.08 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Xác nhận khung nhỏ (A2) → W | 16.48 | 48.1% | 0.062 | 12.29 | 1.34 | 0.106 | 0.019 | -10.27 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 110.98 | 50% | 0.74 | 8.44 | 13.15 | 0.616 | 0.867 | -8.92 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần R:R (/100) → 33 | 113.5 | 52.1% | 0.777 | 7.77 | 14.61 | 0.592 | 0.985 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 110.25 | 49.6% | 0.793 | 8.31 | 13.27 | 0.598 | 1.029 | -8.15 |  |

### Vòng 935 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.01R, lời÷rủi ro 14.23

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Số TP tối đa → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Mức MACD → 0.875 | 106.82 | 51% | 0.737 | 8.31 | 12.85 | 0.539 | 0.955 | -6.29 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Fib sóng 4 → 1.56 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 24.81 | 56.9% | 0.155 | 6.69 | 3.71 | 0.189 | 0.124 | -8.38 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Entry (/100) → 28 | 91.02 | 48.4% | 0.587 | 8.36 | 10.89 | 0.484 | 0.692 | -9.3 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 95.77 | 48.4% | 0.618 | 9.6 | 9.98 | 0.485 | 0.756 | -7.71 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần SL (/100) → 7 | 111.27 | 43.8% | 0.473 | 12.06 | 9.23 | 0.533 | 0.416 | -6.63 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Trọng số phần Divergence (/100) → 12 | 112.23 | 51.4% | 0.779 | 7.8 | 14.39 | 0.596 | 0.984 | -8.9 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 82.09 | 45.6% | 0.513 | 9.71 | 8.45 | 0.428 | 0.594 | -11.18 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Trọng số phần SL (/100) → 9 + Trọng số phần Trend (/100) → 12 + Điểm vùng: BOS → 1 | 107.13 | 50% | 0.744 | 8.5 | 12.6 | 0.543 | 0.956 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: HVN cố định → 0.563 + Đệm SL riêng khung 4H (ATR) → 0.3 | 144.08 | 38.3% | 0.502 | 19.04 | 7.57 | 0.308 | 0.703 | -12.51 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Trọng số phần Trend (/100) → 12 + SL tối đa (% Entry) → 0.425 | 111.22 | 51% | 0.767 | 7.84 | 14.19 | 0.596 | 0.955 | -8.9 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: POC volume profile cố định → 0.688 | 131.02 | 44.7% | 0.63 | 11.48 | 11.41 | 0.546 | 0.715 | -18.33 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần Entry (/100) → 33 | 162.05 | 39.5% | 0.53 | 18.57 | 8.73 | 0.343 | 0.709 | -11.27 |  |

### Vòng 934 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.92R, lời÷rủi ro 14.39

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 36.55 | 40.7% | 0.402 | 10.01 | 3.65 | 0.335 | 0.486 | -11.35 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Divergence (/100) → 12 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 15.51 | 52.5% | 0.127 | 7.12 | 2.18 | 0.158 | 0.097 | -8.67 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Cộng thêm ngưỡng điểm khung 1W → 2 | 96.45 | 50% | 0.778 | 8.26 | 11.68 | 0.497 | 1.068 | -9.6 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 112.81 | 50.7% | 0.773 | 8.13 | 13.88 | 0.644 | 0.898 | -7.95 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 82 | 44.2% | 0.558 | 9.87 | 8.31 | 0.554 | 0.561 | -15.4 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 + SL tối đa (% Entry) → 0.425 | 104.21 | 48.9% | 0.75 | 8.83 | 11.8 | 0.523 | 0.967 | -9.67 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu riêng khung 1D → 2 | 71.4 | 42.8% | 0.47 | 11.02 | 6.48 | 0.485 | 0.455 | -9.43 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 24.21 | 51.8% | 0.125 | 8.75 | 2.77 | 0.202 | 0.046 | -14.25 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Biên mây Ichimoku → 1.05 | 118.1 | 48.3% | 0.663 | 10.46 | 11.29 | 0.631 | 0.695 | -4.15 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm tối thiểu của vùng đặt SL → 4 + Lệnh chờ hết hạn sau (nến) → 6 | 86.53 | 45.8% | 0.661 | 9.55 | 9.06 | 0.543 | 0.817 | -7.78 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 108.38 | 47.7% | 0.708 | 8.78 | 12.34 | 0.499 | 0.944 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: EMA 21 → 0.875 | 114.32 | 50.3% | 0.757 | 8.59 | 13.31 | 0.603 | 0.909 | -5.46 |  |

### Vòng 933 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.95R, lời÷rủi ro 14.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Lệnh chờ hết hạn sau (nến) → 8 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: POC anchored → 2 | 102.44 | 49.4% | 0.64 | 8.9 | 11.51 | 0.538 | 0.748 | -10.98 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 26.82 | 58.1% | 0.173 | 5.87 | 4.57 | 0.193 | 0.155 | -8.44 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib sóng 4 → 0.938 | 104.79 | 49.4% | 0.672 | 9.48 | 11.05 | 0.443 | 0.939 | -6.32 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần R:R (/100) → 33 + R:R tối thiểu riêng khung 1D → 2 | 104.66 | 45.7% | 0.598 | 9.36 | 11.18 | 0.566 | 0.628 | -10.22 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 113.32 | 51.7% | 0.782 | 7.99 | 14.18 | 0.598 | 0.984 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Cổng Dow → CHẶT + R:R tối thiểu riêng khung 1D → 2 + % chốt ở TP1 → 0.287 | 74.6 | 46.5% | 0.525 | 8.9 | 8.38 | 0.332 | 0.667 | -12.31 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Biên mây Ichimoku → 1.35 | 101.5 | 45.4% | 0.583 | 9.31 | 10.9 | 0.561 | 0.604 | -8.34 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: HVN cố định → 0.563 | 113.2 | 52.1% | 0.775 | 7.89 | 14.35 | 0.592 | 0.98 | -7.58 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 146.48 | 38.2% | 0.514 | 18.57 | 7.89 | 0.329 | 0.711 | -2.59 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Fib sóng 4 → 1.56 | 97.19 | 48.4% | 0.627 | 9.45 | 10.28 | 0.451 | 0.825 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 100.23 | 51.4% | 0.687 | 8.6 | 11.65 | 0.591 | 0.793 | -8.12 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 90.41 | 48.4% | 0.569 | 9.91 | 9.12 | 0.47 | 0.682 | -6.12 |  |
