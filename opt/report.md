# Tối ưu tự động (chạy liên tục) — vòng 914

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 10623 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 93.39R | 0.573 | 6.44R | 10.04R | 9.30 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 145 | 53.1% | 118.09R | 0.814 | 5.09R | 7.6R | 15.54 | 28 | 17.9% | -9.92R | -0.354 | 10.54R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.77R | 2 | 0% | -2.3R |
| 4H | 107 | 54.2% | 90.9R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 93.39R | 10.04R | 9.30 | 31 | 12.9% | -13R |
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

### Vòng 914 — ngẫu nhiên nhiều thông số · mốc: tổng 118.09R, win 53.1%, rủi ro tụt vốn 7.6R, lời÷rủi ro 15.54

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần Entry (/100) → 33 + % chốt ở TP1 → 0.307 | 104.64 | 45.6% | 0.612 | 9.18 | 11.4 | 0.639 | 0.587 | -8.98 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: HVN cố định → 0.563 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 118.81 | 53.1% | 0.819 | 7.6 | 15.63 | 0.64 | 1.022 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 114.91 | 52.1% | 0.798 | 7.66 | 15 | 0.616 | 1.001 | -9.74 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 113.83 | 51% | 0.785 | 8.08 | 14.09 | 0.523 | 1.066 | -9.79 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Khung lớn phải tăng (trend ≥) → 0.375 | 109.14 | 49.6% | 0.774 | 8.09 | 13.49 | 0.574 | 0.988 | -13.18 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trọng số phần R:R (/100) → 33 + Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần SL (/100) → 9 | 142.2 | 43.4% | 0.624 | 11.83 | 12.02 | 0.535 | 0.714 | -18.37 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Trọng số phần Momentum (/100) → 21 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: POC volume profile cố định → 0.813 | 97.02 | 38.5% | 0.385 | 16.78 | 5.78 | 0.361 | 0.405 | -2.93 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Trọng số phần Entry (/100) → 33 + Điểm vùng: EMA 21 → 1.13 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 111.4 | 51.4% | 0.763 | 7.75 | 14.37 | 0.612 | 0.931 | -10.26 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 91.81 | 38.8% | 0.375 | 16.67 | 5.51 | 0.319 | 0.425 | -2.7 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần Entry (/100) → 33 + Cổng Dow → TẮT + Điểm vùng: Fib sóng 4 → 0.938 | 128.34 | 43.1% | 0.608 | 11.85 | 10.83 | 0.562 | 0.655 | -19.56 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần R:R (/100) → 28 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: Biên mây Ichimoku → 1.05 | 105.85 | 51% | 0.73 | 8.06 | 13.13 | 0.594 | 0.875 | -10.75 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Divergence (/100) → 9 + Khung lớn phải tăng (trend ≥) → 0.375 + Đệm SL riêng khung 1D (ATR) → 0.3 | 34.89 | 59.4% | 0.205 | 7.07 | 4.93 | 0.256 | 0.168 | -8.17 |  |

### Vòng 913 — ngẫu nhiên nhiều thông số · mốc: tổng 113.63R, win 51.8%, rủi ro tụt vốn 8.12R, lời÷rủi ro 13.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu tới TP1 → 2.63 | 88.11 | 46.8% | 0.711 | 9.58 | 9.2 | 0.476 | 0.924 | -10.68 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Mức MACD → 1.13 | 111.64 | 50.3% | 0.781 | 8.21 | 13.6 | 0.591 | 0.99 | -6.31 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: HVN cố định → 0.563 | 103.79 | 49% | 0.697 | 9.25 | 11.22 | 0.534 | 0.857 | -5.39 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Cộng thêm ngưỡng điểm khung 4H → 2 | 111.66 | 39.9% | 0.377 | 12.88 | 8.67 | 0.371 | 0.382 | -13.17 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.188 | 108.77 | 46.1% | 0.716 | 10.37 | 10.49 | 0.676 | 0.75 | -7.02 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Mức RSI 30/70 → 1.13 | 112.62 | 51.4% | 0.793 | 8.11 | 13.89 | 0.608 | 0.995 | -6.6 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 | 94.16 | 38.6% | 0.293 | 15.44 | 6.1 | 0.354 | 0.244 | -4.12 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Elliott (/100) → 6 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 90.19 | 48.4% | 0.739 | 8.7 | 10.37 | 0.672 | 0.819 | -14.09 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + % chốt ở TP1 → 0.307 + Xác nhận khung nhỏ (A2) → W | 97.29 | 38% | 0.389 | 16.35 | 5.95 | 0.327 | 0.444 | -1.27 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Trọng số phần Elliott (/100) → 6 | 102.27 | 51.1% | 0.725 | 8.22 | 12.44 | 0.638 | 0.819 | -6.85 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 113.6 | 51.8% | 0.817 | 7.75 | 14.66 | 0.639 | 1.009 | -7.45 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Cộng thêm ngưỡng điểm khung 4H → 2 | 113.58 | 52% | 0.767 | 8.08 | 14.06 | 0.67 | 0.873 | -9.22 |  |

### Vòng 912 — ngẫu nhiên nhiều thông số · mốc: tổng 118.09R, win 53.1%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.87

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 101.09 | 49% | 0.652 | 8.92 | 11.33 | 0.526 | 0.783 | -9.66 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Mức MACD → 0.875 | 111.75 | 52.1% | 0.776 | 7.91 | 14.13 | 0.621 | 0.94 | -7.31 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Fib sóng 4 → 1.56 + R:R tối thiểu riêng khung 4H → 2 + Cộng thêm ngưỡng điểm khung 1D → 5 | 106.84 | 41% | 0.348 | 12.91 | 8.28 | 0.324 | 0.368 | -8.41 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm vào kèo → 74 + Khung lớn phải tăng (trend ≥) → 0.375 | 137.98 | 37.5% | 0.479 | 18.83 | 7.33 | 0.327 | 0.629 | -12.53 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 114.93 | 51.4% | 0.798 | 7.63 | 15.06 | 0.64 | 0.97 | -8.6 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: BOS → 3 | 81.41 | 50.9% | 0.727 | 7.28 | 11.18 | 0.328 | 1.048 | -10.72 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 95.9 | 50% | 0.666 | 8.58 | 11.18 | 0.579 | 0.763 | -10.75 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 94.21 | 50% | 0.663 | 8.74 | 10.78 | 0.593 | 0.74 | -9.14 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần R:R (/100) → 33 | 124.06 | 46.9% | 0.594 | 10.7 | 11.59 | 0.684 | 0.495 | -14.72 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 4H → -1 | 95.6 | 46.7% | 0.708 | 9.34 | 10.24 | 0.441 | 0.935 | -10.69 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: EMA 200 → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 152.17 | 38.5% | 0.523 | 18.96 | 8.03 | 0.299 | 0.748 | -5.39 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Xác nhận khung nhỏ (A2) → W | 12.29 | 45.9% | 0.042 | 15.08 | 0.81 | 0.106 | -0.022 | -9.73 |  |

### Vòng 911 — ngẫu nhiên nhiều thông số · mốc: tổng 118.09R, win 53.1%, rủi ro tụt vốn 7.57R, lời÷rủi ro 15.60

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN cố định → 0.563 | 111.98 | 41.3% | 0.361 | 12.41 | 9.02 | 0.344 | 0.376 | -7.87 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: EMA 50 → 1.13 | 112.98 | 50.3% | 0.769 | 8.48 | 13.32 | 0.598 | 0.962 | -7.58 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 96.68 | 47.8% | 0.701 | 9.23 | 10.47 | 0.66 | 0.747 | -8.97 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Cộng thêm ngưỡng điểm khung 1W → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 | 94.59 | 46.3% | 0.695 | 9.35 | 10.12 | 0.441 | 0.909 | -9.67 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib sóng 4 → 1.56 + Đệm SL riêng khung 4H (ATR) → 0.3 | 63.23 | 30% | 0.171 | 35.11 | 1.8 | 0.138 | 0.197 | -31.2 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần Momentum (/100) → 21 | 102.38 | 50.4% | 0.806 | 8.17 | 12.53 | 0.546 | 1.096 | -12.86 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: POC volume profile cố định → 0.813 + Lệnh chờ hết hạn sau (nến) → 6 | 98.25 | 50.7% | 0.722 | 8.25 | 11.91 | 0.566 | 0.909 | -8.54 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Trọng số phần SL (/100) → 7 | 117.44 | 52.4% | 0.799 | 7.73 | 15.19 | 0.625 | 0.996 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 25.45 | 56.1% | 0.147 | 7.31 | 3.48 | 0.183 | 0.111 | -9.35 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Mức RSI 30/70 → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm tối thiểu của vùng đặt SL → 4 | 116.6 | 51% | 0.743 | 8.41 | 13.86 | 0.565 | 0.953 | -8.66 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trọng số phần Entry (/100) → 33 | 107.58 | 50% | 0.758 | 8.19 | 13.14 | 0.559 | 0.98 | -10.92 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: EMA 200 → 1 + Điểm vùng: BOS → 1 | 108.72 | 50.4% | 0.794 | 8.76 | 12.41 | 0.537 | 1.113 | -7.87 |  |

### Vòng 910 — ngẫu nhiên nhiều thông số · mốc: tổng 118.09R, win 53.1%, rủi ro tụt vốn 7.41R, lời÷rủi ro 15.94

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Trend (/100) → 19 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 115.27 | 51.7% | 0.784 | 7.86 | 14.67 | 0.642 | 0.937 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Cộng thêm ngưỡng điểm khung 1D → 3 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 90.56 | 47.8% | 0.57 | 10.32 | 8.78 | 0.483 | 0.664 | -7.14 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Lệnh chờ hết hạn sau (nến) → 8 + Đệm SL riêng khung 1D (ATR) → 0.3 | 106.56 | 46.1% | 0.592 | 10.98 | 9.7 | 0.556 | 0.624 | -6.91 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Xác nhận khung nhỏ (A2) → W + Trọng số phần Momentum (/100) → 25 + Điểm vùng: HVN anchored → 0.313 | 89.93 | 37.9% | 0.363 | 17.4 | 5.17 | 0.302 | 0.416 | -1.31 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 21 → 1.13 | 31.97 | 59.1% | 0.201 | 5.6 | 5.71 | 0.216 | 0.187 | -8.42 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 116.01 | 46% | 0.667 | 10.83 | 10.71 | 0.599 | 0.73 | -6.36 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 117.45 | 50.3% | 0.768 | 8.25 | 14.24 | 0.594 | 0.963 | -10.95 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: POC anchored → 2 + Điểm vùng: HVN anchored → 0.188 | 97.19 | 47.6% | 0.67 | 9.19 | 10.58 | 0.445 | 0.869 | -10.7 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib sóng 4 → 0.938 + Số TP tối đa → 2 | 101.88 | 51.7% | 0.703 | 8.17 | 12.47 | 0.65 | 0.761 | -9.72 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: EMA 50 → 0.75 | 116.78 | 52.4% | 0.805 | 7.77 | 15.03 | 0.674 | 0.938 | -8.63 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: HVN cố định → 0.438 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 73.87 | 43.8% | 0.66 | 9.6 | 7.69 | 0.408 | 0.95 | -7.45 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cổng Dow → CHẶT | 104.92 | 47.8% | 0.57 | 10.19 | 10.3 | 0.539 | 0.597 | -13.47 |  |

### Vòng 909 — ngẫu nhiên nhiều thông số · mốc: tổng 118.09R, win 53.1%, rủi ro tụt vốn 7.5R, lời÷rủi ro 15.75

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Break mây Ichimoku → 1 | 105.52 | 49% | 0.699 | 8.48 | 12.44 | 0.549 | 0.859 | -10.1 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Số TP tối đa → 2 | 118.06 | 52.7% | 0.809 | 7.67 | 15.39 | 0.64 | 0.996 | -8.6 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Đệm SL riêng khung 1D (ATR) → 0.3 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib sóng 4 → 0.938 | 72.28 | 35% | 0.214 | 25.69 | 2.81 | 0.291 | 0.152 | 2.11 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần Divergence (/100) → 12 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 93.27 | 47.2% | 0.579 | 9.19 | 10.15 | 0.472 | 0.68 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: HVN anchored → 0.313 + Trọng số phần Elliott (/100) → 10 | 91.97 | 46.6% | 0.621 | 9.77 | 9.41 | 0.443 | 0.805 | -8.73 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 31.99 | 58% | 0.204 | 5.78 | 5.53 | 0.234 | 0.174 | -8.41 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 117.07 | 52.7% | 0.802 | 7.79 | 15.03 | 0.635 | 0.988 | -10.03 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần SL (/100) → 9 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 102.44 | 44% | 0.557 | 10.47 | 9.78 | 0.506 | 0.605 | -8.31 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: POC volume profile cố định → 0.688 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Break mây Ichimoku → 3 | 74.61 | 44.1% | 0.417 | 12.25 | 6.09 | 0.428 | 0.405 | -13.02 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Coin phải mạnh hơn BTC trong N ngày → 14 | 84.48 | 49.1% | 0.728 | 8.27 | 10.22 | 0.544 | 0.94 | -16.39 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: POC anchored → 2 | 103.54 | 50% | 0.681 | 8.54 | 12.12 | 0.548 | 0.822 | -8.62 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + R:R tối thiểu riêng khung 1W → 2 | 105.93 | 51% | 0.731 | 7.99 | 13.26 | 0.614 | 0.845 | -10.78 |  |

### Vòng 908 — ngẫu nhiên nhiều thông số · mốc: tổng 118.09R, win 53.1%, rủi ro tụt vốn 7.69R, lời÷rủi ro 15.36

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 118.09 | 53.1% | 0.814 | 7.69 | 15.36 | 0.635 | 1.017 | -9.92 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: MACD cắt lên Signal → 0.438 | 72.41 | 46.2% | 0.557 | 9.44 | 7.67 | 0.344 | 0.784 | -8.83 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: BOS → 1 | 105.66 | 39.8% | 0.416 | 16.04 | 6.59 | 0.367 | 0.462 | -2.7 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Số TP tối đa → 2 + Điểm vùng: BOS → 3 | 118.81 | 53.1% | 0.819 | 7.69 | 15.45 | 0.64 | 1.022 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + R:R tối thiểu riêng khung 1W → 2 | 76.1 | 46.9% | 0.518 | 10.63 | 7.16 | 0.394 | 0.64 | -7.35 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 57.56 | 34.7% | 0.142 | 24.56 | 2.34 | 0.116 | 0.165 | -1.37 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần SL (/100) → 9 | 115.44 | 51.7% | 0.796 | 7.63 | 15.13 | 0.634 | 0.975 | -9.92 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Trọng số phần Elliott (/100) → 10 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 27.76 | 56.7% | 0.162 | 6.94 | 4 | 0.191 | 0.135 | -10.57 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần R:R (/100) → 28 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 1W → 2 | 62.33 | 44.9% | 0.528 | 10.38 | 6 | 0.375 | 0.666 | -6.52 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: EMA 200 → 3 | 95.1 | 42.1% | 0.44 | 12.55 | 7.58 | 0.421 | 0.459 | -11.57 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 116.03 | 44.9% | 0.62 | 9.78 | 11.86 | 0.688 | 0.556 | -8.45 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: POC anchored → 4 | 117.33 | 52% | 0.772 | 8.06 | 14.56 | 0.599 | 0.95 | -5.02 |  |

### Vòng 907 — ngẫu nhiên nhiều thông số · mốc: tổng 118.09R, win 53.1%, rủi ro tụt vốn 7.51R, lời÷rủi ro 15.72

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: HVN anchored → 0.313 | 113.6 | 51% | 0.783 | 7.84 | 14.49 | 0.596 | 0.996 | -9.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 23.95 | 56.4% | 0.161 | 7.17 | 3.34 | 0.192 | 0.137 | -9.59 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần R:R (/100) → 33 + Điểm tối thiểu của vùng đặt SL → 2 | 119.8 | 49.7% | 0.753 | 8.66 | 13.83 | 0.757 | 0.749 | -10.5 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 115.08 | 50% | 0.81 | 7.81 | 14.73 | 0.67 | 0.964 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + R:R tối thiểu riêng khung 1D → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 83.11 | 45% | 0.558 | 10.1 | 8.23 | 0.571 | 0.546 | -10.98 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 103.67 | 49.3% | 0.73 | 8.28 | 12.52 | 0.525 | 0.973 | -10.54 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Elliott (/100) → 6 | 122.99 | 49.4% | 0.778 | 8.44 | 14.57 | 0.743 | 0.819 | -10.5 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Elliott (/100) → 10 | 89.31 | 44.5% | 0.545 | 9.99 | 8.94 | 0.493 | 0.597 | -11.25 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 30.11 | 56.5% | 0.156 | 6.75 | 4.46 | 0.177 | 0.138 | -8.33 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 97.57 | 48% | 0.65 | 10.03 | 9.73 | 0.46 | 0.874 | -6.32 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 94.62 | 46.9% | 0.662 | 9.34 | 10.13 | 0.579 | 0.758 | -8.97 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 118.09 | 53.1% | 0.814 | 7.51 | 15.72 | 0.635 | 1.017 | -9.92 |  |

### Vòng 906 — ngẫu nhiên nhiều thông số · mốc: tổng 118.09R, win 53.1%, rủi ro tụt vốn 7.6R, lời÷rủi ro 15.54

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 77.71 | 45.1% | 0.474 | 10.77 | 7.22 | 0.382 | 0.564 | -8.8 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 | 97.56 | 39.4% | 0.303 | 13.98 | 6.98 | 0.277 | 0.327 | -8.4 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Trọng số phần Trend (/100) → 12 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 30.08 | 63.8% | 0.237 | 4.55 | 6.61 | 0.222 | 0.248 | -6.94 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + SL tối đa (% Entry) → 0.425 + Coin phải mạnh hơn BTC trong N ngày → 14 + Khung lớn phải tăng (trend ≥) → 0.425 | 91.02 | 48.4% | 0.746 | 8.56 | 10.63 | 0.704 | 0.794 | -16.42 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Số TP tối đa → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 114.93 | 47% | 0.684 | 10.3 | 11.16 | 0.631 | 0.734 | -4.3 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: MACD cắt lên Signal → 0.563 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần SL (/100) → 9 | 115.87 | 52.1% | 0.794 | 7.82 | 14.82 | 0.635 | 0.97 | -8.61 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 80.41 | 46.9% | 0.619 | 9.03 | 8.9 | 0.45 | 0.797 | -9.23 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Đệm SL riêng khung 1W (ATR) → 0.3 | 94.07 | 43.2% | 0.644 | 10.38 | 9.06 | 0.475 | 0.824 | -6.81 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 115.4 | 50.3% | 0.796 | 8.06 | 14.32 | 0.673 | 0.917 | -8.97 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + R:R tối thiểu tới TP1 → 2.38 + SL tối đa (% Entry) → 0.425 | 97.13 | 46.3% | 0.6 | 9.18 | 10.58 | 0.52 | 0.674 | -11.23 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: POC anchored → 2 + Cộng thêm ngưỡng điểm khung 1W → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 104.6 | 47.1% | 0.666 | 9.26 | 11.3 | 0.521 | 0.817 | -9.92 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 119.66 | 51.6% | 0.762 | 8.24 | 14.52 | 0.581 | 0.976 | -9.92 |  |

### Vòng 905 — ngẫu nhiên nhiều thông số · mốc: tổng 118.09R, win 53.1%, rủi ro tụt vốn 7.6R, lời÷rủi ro 15.54

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Số TP tối đa → 2 | 116.93 | 52.4% | 0.795 | 7.78 | 15.03 | 0.619 | 0.995 | -8.61 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 116.99 | 38.4% | 0.522 | 17.57 | 6.66 | 0.411 | 0.624 | -14.14 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: HVN cố định → 0.563 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 123.86 | 50% | 0.794 | 8.43 | 14.69 | 0.757 | 0.837 | -10.5 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Ngưỡng điểm vào kèo → 74 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khung lớn phải tăng (trend ≥) → 0.375 | 63.23 | 45.5% | 0.565 | 9.52 | 6.64 | 0.454 | 0.688 | -6.07 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: POC anchored → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 101.05 | 46.3% | 0.624 | 9.88 | 10.23 | 0.631 | 0.615 | -9.96 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm tối thiểu của vùng đặt SL → 4 + Cộng thêm ngưỡng điểm khung 4H → 2 | 81.85 | 52.3% | 0.737 | 6.83 | 11.98 | 0.407 | 1.008 | -10.72 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: HVN anchored → 0.313 | 115.71 | 50% | 0.761 | 8.3 | 13.94 | 0.58 | 0.963 | -10.95 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần Elliott (/100) → 6 + Số TP tối đa → 2 + Cộng thêm ngưỡng điểm khung 1D → 5 | 102.44 | 39% | 0.403 | 16.5 | 6.21 | 0.36 | 0.443 | -2.5 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: EMA 21 → 0.875 | 108.24 | 50% | 0.762 | 8.43 | 12.84 | 0.641 | 0.894 | -9.96 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + SL tối đa (% Entry) → 0.425 + Lệnh chờ hết hạn sau (nến) → 6 + Xác nhận khung nhỏ (A2) → W | 102.69 | 39.9% | 0.423 | 14.44 | 7.11 | 0.442 | 0.405 | -3.58 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 111.98 | 51.4% | 0.757 | 8.36 | 13.39 | 0.575 | 0.964 | -10.89 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: BOS → 1 + Cổng Dow → TẮT | 138.19 | 44.7% | 0.643 | 11.4 | 12.12 | 0.584 | 0.702 | -20.59 |  |
