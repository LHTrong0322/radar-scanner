# Tối ưu tự động (chạy liên tục) — vòng 933

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 10851 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 46.4% | 95.04R | 0.573 | 6.44R | 10.17R | 9.35 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 145 | 52.4% | 113.95R | 0.786 | 5.09R | 7.95R | 14.33 | 27 | 18.5% | -8.9R | -0.33 | 10.54R |

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

### Vòng 932 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.03R, lời÷rủi ro 14.19

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Divergence (/100) → 12 | 106.56 | 49.4% | 0.658 | 9.12 | 11.68 | 0.504 | 0.832 | -8.64 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: Mức MACD → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 84.46 | 37.9% | 0.525 | 13.72 | 6.16 | 0.401 | 0.649 | -16.22 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 97.44 | 51% | 0.663 | 8.83 | 11.04 | 0.566 | 0.764 | -8.12 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Đệm SL riêng khung 1D (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 101.67 | 46.1% | 0.609 | 11.33 | 8.97 | 0.644 | 0.578 | -3.41 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Đệm SL riêng khung 1W (ATR) → 0.3 | 101.38 | 47.9% | 0.724 | 9.04 | 11.21 | 0.48 | 0.949 | -9.67 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: EMA 50 → 0.75 | 109.47 | 51.7% | 0.755 | 8.1 | 13.51 | 0.534 | 0.998 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: HVN cố định → 0.563 + R:R tối thiểu riêng khung 1D → 2 | 104.66 | 45.7% | 0.598 | 9.34 | 11.21 | 0.566 | 0.628 | -7.16 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 100.31 | 39.5% | 0.381 | 16.58 | 6.05 | 0.367 | 0.395 | -4.24 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Khung lớn phải tăng (trend ≥) → 0.425 + Đệm SL riêng khung 1D (ATR) → 0.3 | 112.07 | 47.2% | 0.705 | 9.88 | 11.34 | 0.643 | 0.761 | -7.99 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Lệnh chờ hết hạn sau (nến) → 6 | 61.78 | 36.1% | 0.301 | 20.33 | 3.04 | 0.09 | 0.495 | -11.87 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 113.97 | 52.1% | 0.781 | 7.86 | 14.5 | 0.597 | 0.986 | -7.58 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: HVN cố định → 0.563 | 114.14 | 50.3% | 0.766 | 8.17 | 13.97 | 0.59 | 0.975 | -7.88 |  |

### Vòng 931 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.98R, lời÷rủi ro 14.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cộng thêm ngưỡng điểm khung 1D → 5 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Trend (/100) → 12 | 98.76 | 45.5% | 0.691 | 9.55 | 10.34 | 0.455 | 0.923 | -9.67 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 72.16 | 46.3% | 0.668 | 8.93 | 8.08 | 0.422 | 0.943 | -5.75 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Biên mây Ichimoku → 1.35 | 110.17 | 51% | 0.749 | 8.14 | 13.53 | 0.549 | 0.977 | -7.88 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: BOS → 1 + R:R tối thiểu tới TP1 → 2.63 | 98.7 | 51.2% | 0.802 | 8.09 | 12.2 | 0.522 | 1.097 | -9.6 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần Divergence (/100) → 9 | 109.31 | 52% | 0.729 | 8.13 | 13.45 | 0.554 | 0.929 | -8.9 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Trọng số phần R:R (/100) → 33 | 81.52 | 52.2% | 0.721 | 7.29 | 11.18 | 0.299 | 1.082 | -10.99 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 124.65 | 43.7% | 0.509 | 12.93 | 9.64 | 0.586 | 0.427 | -5.16 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 87.4 | 42.4% | 0.458 | 11.82 | 7.39 | 0.486 | 0.431 | -18.68 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: BOS → 1 + Trọng số phần SL (/100) → 9 | 99.72 | 51% | 0.688 | 8.4 | 11.87 | 0.591 | 0.797 | -8.12 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: BOS → 3 | 112.12 | 51% | 0.752 | 7.92 | 14.16 | 0.566 | 0.963 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: BOS → 1 | 109.94 | 50% | 0.753 | 8.16 | 13.47 | 0.554 | 0.975 | -8.9 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib sóng 4 → 1.56 | 119.6 | 41.9% | 0.386 | 11.89 | 10.06 | 0.316 | 0.447 | -7.45 |  |

### Vòng 930 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.99R, lời÷rủi ro 14.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần Divergence (/100) → 9 + Trọng số phần SL (/100) → 9 | 100.29 | 48.3% | 0.673 | 8.9 | 11.27 | 0.511 | 0.847 | -9.99 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + SL tối đa (% Entry) → 0.425 | 110.45 | 49.3% | 0.8 | 8.34 | 13.24 | 0.613 | 1.017 | -9.17 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 111.6 | 52.1% | 0.764 | 7.97 | 14 | 0.57 | 0.987 | -9.92 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 110.46 | 49.3% | 0.8 | 8.49 | 13.01 | 0.591 | 1.049 | -9.17 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Số TP tối đa → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 152.05 | 38.1% | 0.517 | 18.63 | 8.16 | 0.363 | 0.68 | -13.09 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 96.9 | 49.7% | 0.65 | 8.69 | 11.15 | 0.552 | 0.762 | -9.72 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Cộng thêm ngưỡng điểm khung 1D → 5 | 110.49 | 51% | 0.773 | 7.83 | 14.11 | 0.581 | 0.984 | -9.92 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + R:R tối thiểu tới TP1 → 2.63 | 96.47 | 48.1% | 0.715 | 9 | 10.72 | 0.654 | 0.784 | -10.83 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + R:R tối thiểu tới TP1 → 2.38 | 100.05 | 46.3% | 0.61 | 9.22 | 10.85 | 0.485 | 0.729 | -14.75 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Trọng số phần SL (/100) → 7 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 112.75 | 51.7% | 0.767 | 8.19 | 13.77 | 0.592 | 0.96 | -8.61 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Trọng số phần Divergence (/100) → 12 + Cộng thêm ngưỡng điểm khung 4H → 2 | 109.48 | 51% | 0.766 | 7.93 | 13.81 | 0.62 | 0.926 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Mức MACD → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 90.78 | 45.9% | 0.683 | 9.17 | 9.9 | 0.412 | 1.002 | -9.96 |  |

### Vòng 929 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.83R, lời÷rủi ro 14.55

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + SL tối đa (% Entry) → 0.425 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 97.17 | 48.9% | 0.689 | 8.72 | 11.14 | 0.451 | 0.96 | -11.76 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: EMA 200 → 3 + Điểm vùng: BOS → 3 | 101.44 | 49.3% | 0.695 | 8.9 | 11.4 | 0.476 | 0.926 | -9.6 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: BOS → 1 | 106.56 | 49.4% | 0.658 | 9.26 | 11.51 | 0.504 | 0.832 | -9.67 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 71.94 | 44.1% | 0.447 | 11.66 | 6.17 | 0.466 | 0.428 | -8.41 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 85.07 | 45.2% | 0.549 | 10.88 | 7.82 | 0.412 | 0.698 | -9.04 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần Trend (/100) → 19 | 95.34 | 38.6% | 0.375 | 16.69 | 5.71 | 0.331 | 0.416 | -3.96 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 95.97 | 48.1% | 0.623 | 9.52 | 10.08 | 0.466 | 0.802 | -10.89 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Momentum (/100) → 21 + Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 1W (ATR) → 0.3 | 80.5 | 45.1% | 0.559 | 10.62 | 7.58 | 0.416 | 0.691 | -10.49 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần Divergence (/100) → 12 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 113.32 | 51.7% | 0.782 | 7.93 | 14.29 | 0.598 | 0.984 | -8.9 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: HVN anchored → 0.188 | 114.72 | 52.4% | 0.791 | 7.83 | 14.65 | 0.597 | 1.012 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: HVN cố định → 0.438 | 120.35 | 51.2% | 0.752 | 8.58 | 14.03 | 0.598 | 0.946 | -8.72 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Đệm SL riêng khung 1W (ATR) → 0.3 | 97.61 | 47.1% | 0.707 | 9.29 | 10.51 | 0.448 | 0.945 | -10.69 |  |

### Vòng 928 — ngẫu nhiên nhiều thông số · mốc: tổng 111.72R, win 51.7%, rủi ro tụt vốn 8.16R, lời÷rủi ro 13.69

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: BOS → 3 | 126.14 | 50.3% | 0.803 | 8.41 | 15 | 0.759 | 0.854 | -10.5 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: HVN cố định → 0.563 + Xác nhận khung nhỏ (A2) → W | 92.53 | 38.2% | 0.34 | 17.77 | 5.21 | 0.326 | 0.355 | -3.49 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm tối thiểu của vùng đặt SL → 4 | 89.34 | 48.9% | 0.662 | 8.92 | 10.02 | 0.549 | 0.791 | -8.27 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần Divergence (/100) → 9 | 51.42 | 42.5% | 0.405 | 11.16 | 4.61 | 0.318 | 0.499 | -9.69 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm tối thiểu của vùng đặt SL → 4 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 91.2 | 47.9% | 0.651 | 9.19 | 9.92 | 0.381 | 0.938 | -10.48 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Momentum (/100) → 25 + Lệnh chờ hết hạn sau (nến) → 8 | 37.92 | 39.6% | 0.417 | 10.08 | 3.76 | 0.303 | 0.555 | -7.88 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: POC volume profile cố định → 0.688 | 28.88 | 59% | 0.179 | 6.08 | 4.75 | 0.191 | 0.168 | -8.11 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Cổng Dow → CHẶT + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 32.84 | 43.6% | 0.421 | 9.4 | 3.49 | 0.378 | 0.483 | -6.14 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Mức RSI 30/70 → 1.13 | 61.25 | 43% | 0.479 | 10.46 | 5.86 | 0.37 | 0.594 | -10.25 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trọng số phần Entry (/100) → 28 | 60.24 | 42.6% | 0.467 | 10.99 | 5.48 | 0.349 | 0.594 | -10.25 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Fib sóng 4 → 0.938 | 109.09 | 51.4% | 0.768 | 7.81 | 13.97 | 0.57 | 0.978 | -9.75 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Lệnh chờ hết hạn sau (nến) → 6 + Cổng Dow → CHẶT | 62.84 | 51.9% | 0.604 | 7.99 | 7.86 | 0.329 | 0.84 | -9.58 |  |

### Vòng 927 — ngẫu nhiên nhiều thông số · mốc: tổng 110.25R, win 52.1%, rủi ro tụt vốn 7.98R, lời÷rủi ro 13.82

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 92.93 | 49% | 0.65 | 8.96 | 10.37 | 0.428 | 0.909 | -10.88 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần R:R (/100) → 33 | 109.05 | 51.4% | 0.747 | 8.11 | 13.45 | 0.572 | 0.947 | -8.05 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 75.8 | 43.4% | 0.457 | 11.03 | 6.87 | 0.395 | 0.518 | -7.68 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu riêng khung 1W → 2 | 90.29 | 48.7% | 0.579 | 9.75 | 9.26 | 0.527 | 0.639 | -5.22 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + % chốt ở TP1 → 0.287 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: EMA 200 → 1 | 100.23 | 42.9% | 0.525 | 11.03 | 9.09 | 0.554 | 0.494 | -0.58 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Trọng số phần Trend (/100) → 12 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 100.87 | 46.3% | 0.742 | 8.97 | 11.25 | 0.561 | 0.951 | -9.61 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 89.49 | 47.6% | 0.617 | 9.01 | 9.93 | 0.435 | 0.818 | -11.41 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: BOS → 3 + Điểm vùng: EMA 200 → 3 | 97.79 | 48.6% | 0.689 | 8.72 | 11.21 | 0.481 | 0.915 | -10.36 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm tối thiểu của vùng đặt SL → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + % chốt ở TP1 → 0.287 | 115.8 | 45.2% | 0.616 | 10.1 | 11.47 | 0.713 | 0.517 | -7.89 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Cộng thêm ngưỡng điểm khung 4H → -1 + Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1W (ATR) → 0.3 | 79.34 | 36.1% | 0.35 | 18.12 | 4.38 | 0.303 | 0.389 | -4.79 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 106.73 | 50.7% | 0.731 | 8.68 | 12.3 | 0.53 | 0.968 | -8.05 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 109.24 | 51.7% | 0.753 | 8.12 | 13.45 | 0.572 | 0.964 | -9.48 |  |

### Vòng 926 — ngẫu nhiên nhiều thông số · mốc: tổng 117.32R, win 53.1%, rủi ro tụt vốn 7.5R, lời÷rủi ro 15.64

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cổng Dow → TẮT | 125.97 | 43.8% | 0.58 | 12.1 | 10.41 | 0.586 | 0.575 | -20.28 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần Elliott (/100) → 10 + Trọng số phần Entry (/100) → 28 | 117.12 | 52.7% | 0.802 | 7.58 | 15.45 | 0.625 | 1.006 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Fib sóng 4 → 1.56 | 108.4 | 51.4% | 0.774 | 7.64 | 14.19 | 0.527 | 1.06 | -9.96 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Trọng số phần Elliott (/100) → 6 | 116.87 | 52.7% | 0.8 | 7.49 | 15.6 | 0.635 | 0.985 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Cổng Dow → TẮT + Điểm vùng: HVN anchored → 0.313 + Khung lớn phải tăng (trend ≥) → 0.425 | 128.78 | 44.3% | 0.634 | 11.08 | 11.62 | 0.523 | 0.749 | -16.33 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: MACD cắt lên Signal → 0.563 | 106.8 | 52.1% | 0.731 | 7.93 | 13.47 | 0.59 | 0.885 | -10.75 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: POC volume profile cố định → 0.813 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 122.07 | 50.3% | 0.808 | 8.21 | 14.87 | 0.811 | 0.806 | -9.48 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 107.02 | 50.3% | 0.718 | 8.44 | 12.68 | 0.463 | 0.998 | -9.79 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: BOS → 1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 25.86 | 49.5% | 0.085 | 8.82 | 2.93 | 0.113 | 0.063 | -12.54 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Fib sóng 4 → 0.938 | 114.26 | 52.1% | 0.783 | 7.8 | 14.65 | 0.589 | 1.004 | -9.92 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: EMA 200 → 3 | 84.3 | 34.3% | 0.396 | 19.95 | 4.23 | 0.193 | 0.608 | -11.75 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Break mây Ichimoku → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 50 → 0.75 | 63.06 | 45.8% | 0.534 | 10.13 | 6.23 | 0.351 | 0.706 | -6.52 |  |

### Vòng 925 — ngẫu nhiên nhiều thông số · mốc: tổng 112.86R, win 51.8%, rủi ro tụt vốn 8.24R, lời÷rủi ro 13.70

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 111.88 | 51.4% | 0.788 | 7.95 | 14.07 | 0.618 | 0.973 | -6.6 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 119.17 | 49.3% | 0.784 | 8.65 | 13.78 | 0.753 | 0.821 | -9.17 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + SL tối đa (% Entry) → 0.425 + Xác nhận khung nhỏ (A2) → W | 95.01 | 37.7% | 0.377 | 16.68 | 5.7 | 0.328 | 0.419 | -1.28 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.688 | 150.06 | 38.7% | 0.548 | 17.68 | 8.49 | 0.306 | 0.779 | -8.16 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: EMA 200 → 1 | 100.78 | 45.5% | 0.603 | 9.51 | 10.6 | 0.527 | 0.679 | -3.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: HVN cố định → 0.438 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 113.2 | 48.5% | 0.832 | 8.56 | 13.22 | 0.696 | 0.982 | -6.87 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu riêng khung 4H → 2 | 89.12 | 38.7% | 0.314 | 14.9 | 5.98 | 0.301 | 0.325 | -15.11 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + R:R tối thiểu riêng khung 1D → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Xác nhận khung nhỏ (A2) → W | 71.97 | 35.8% | 0.293 | 19.13 | 3.76 | 0.334 | 0.249 | -4.08 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: HVN anchored → 0.188 | 73.4 | 44.3% | 0.692 | 9.2 | 7.98 | 0.553 | 0.861 | -1.99 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + SL tối đa (% Entry) → 0.425 + Trọng số phần R:R (/100) → 28 + Trọng số phần Elliott (/100) → 10 | 111.33 | 50% | 0.784 | 8.27 | 13.46 | 0.63 | 0.947 | -7.62 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Entry (/100) → 33 + Điểm vùng: HVN anchored → 0.188 + Cộng điểm phân kỳ dương ẩn → 3 | 101.17 | 49.6% | 0.718 | 8.55 | 11.83 | 0.604 | 0.833 | -8.45 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần SL (/100) → 7 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 118.06 | 48.5% | 0.707 | 8.75 | 13.49 | 0.606 | 0.822 | -10.25 |  |

### Vòng 924 — ngẫu nhiên nhiều thông số · mốc: tổng 117.32R, win 53.1%, rủi ro tụt vốn 7.41R, lời÷rủi ro 15.83

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: EMA 21 → 0.875 + Coin phải mạnh hơn BTC trong N ngày → 14 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 65.64 | 47.3% | 0.706 | 8.79 | 7.47 | 0.53 | 0.901 | -11.92 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: EMA 200 → 1 | 117.61 | 51.9% | 0.754 | 8.26 | 14.24 | 0.626 | 0.912 | -5.1 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Mức MACD → 0.875 | 112.1 | 49.4% | 0.728 | 8.64 | 12.97 | 0.692 | 0.769 | -9.21 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Cổng Dow → CHẶT | 82.31 | 51.8% | 0.735 | 7.34 | 11.21 | 0.333 | 1.083 | -12.01 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 111.79 | 50.3% | 0.782 | 7.66 | 14.59 | 0.627 | 0.947 | -9.74 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm tối thiểu của vùng đặt SL → 2 | 109.92 | 51.7% | 0.748 | 8.08 | 13.6 | 0.64 | 0.863 | -9.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: BOS → 1 | 115.95 | 47.6% | 0.69 | 10.37 | 11.18 | 0.656 | 0.722 | -5.32 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 116.57 | 52.7% | 0.798 | 7.64 | 15.26 | 0.635 | 0.98 | -8.61 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Biên mây Ichimoku → 1.05 | 109.08 | 50.3% | 0.669 | 8.66 | 12.6 | 0.55 | 0.799 | -7.06 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Trọng số phần Entry (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 100.63 | 44.4% | 0.559 | 12.15 | 8.28 | 0.553 | 0.565 | -3.43 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: HVN cố định → 0.563 | 102.39 | 49.6% | 0.726 | 8.28 | 12.37 | 0.499 | 0.977 | -10.48 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Ngưỡng điểm vào kèo → 74 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 102.14 | 49.3% | 0.7 | 8.11 | 12.59 | 0.471 | 0.954 | -10.48 |  |
