# Tối ưu tự động (chạy liên tục) — vòng 805

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 9315 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 46.3% | 97.49R | 0.594 | 5.7R | 9.79R | 9.96 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 146 | 53.4% | 122.14R | 0.837 | 5.09R | 7.23R | 16.89 | 28 | 17.9% | -9.92R | -0.354 | 10.54R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.77R | 2 | 0% | -2.3R |
| 4H | 108 | 54.6% | 94.95R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 46.3% | 97.49R | 9.79R | 9.96 | 31 | 12.9% | -13R |
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

### Vòng 805 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 73.95 | 45.9% | 0.666 | 8.93 | 8.28 | 0.416 | 0.951 | -5.45 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 109.58 | 50% | 0.74 | 7.92 | 13.84 | 0.555 | 0.952 | -9.92 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Ngưỡng điểm vào kèo → 77 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Break mây Ichimoku → 3 | 105.88 | 46.7% | 0.634 | 9.69 | 10.93 | 0.479 | 0.81 | -9.52 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Trọng số phần Divergence (/100) → 9 + Xác nhận khung nhỏ (A2) → W | 107.21 | 40.2% | 0.414 | 15.4 | 6.96 | 0.398 | 0.429 | -4.96 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm tối thiểu của vùng đặt SL → 4 + R:R tối thiểu riêng khung 1W → 2 | 109.45 | 47.7% | 0.636 | 8.98 | 12.19 | 0.659 | 0.616 | -6.9 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Xác nhận khung nhỏ (A2) → W | 98.81 | 40.6% | 0.386 | 15.94 | 6.2 | 0.384 | 0.388 | -1.91 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 110.9 | 49.3% | 0.804 | 7.95 | 13.95 | 0.614 | 1.011 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + R:R tối thiểu tới TP1 → 2.38 | 91.52 | 46.2% | 0.587 | 9.27 | 9.87 | 0.497 | 0.672 | -9.43 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Entry (/100) → 28 | 100.37 | 37.2% | 0.349 | 20.97 | 4.79 | 0.404 | 0.299 | -27.66 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + % chốt ở TP1 → 0.287 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 85.49 | 46.7% | 0.518 | 9.66 | 8.85 | 0.394 | 0.644 | -8.78 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + SL tối đa (% Entry) → 0.425 + Ngưỡng điểm vào kèo → 77 | 114.7 | 50% | 0.796 | 7.91 | 14.5 | 0.67 | 0.931 | -12.57 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Xác nhận khung nhỏ (A2) → W | 78.96 | 40.6% | 0.372 | 15.33 | 5.15 | 0.347 | 0.394 | -10.66 |  |

### Vòng 804 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.22R, lời÷rủi ro 16.92

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: HVN cố định → 0.563 | 99.16 | 48.2% | 0.703 | 8.79 | 11.28 | 0.617 | 0.802 | -8.97 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 102.55 | 48.2% | 0.749 | 8.62 | 11.9 | 0.452 | 1.001 | -10.69 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm tối thiểu của vùng đặt SL → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 102.25 | 50.3% | 0.705 | 8.21 | 12.45 | 0.498 | 0.927 | -10.48 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần Elliott (/100) → 10 | 109.06 | 46% | 0.583 | 9.57 | 11.4 | 0.507 | 0.655 | -6.39 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 34.46 | 39.6% | 0.379 | 10.48 | 3.29 | 0.313 | 0.462 | -7.55 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + SL tối đa (% Entry) → 0.425 + Xác nhận khung nhỏ (A2) → W | 90.11 | 39.4% | 0.348 | 17.41 | 5.18 | 0.421 | 0.28 | -1.64 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: BOS → 3 + % chốt ở TP1 → 0.307 | 61.57 | 35.5% | 0.288 | 19.36 | 3.18 | 0.305 | 0.269 | -2.13 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 89.92 | 44.6% | 0.608 | 9.73 | 9.24 | 0.433 | 0.819 | -8.13 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần SL (/100) → 7 | 112.99 | 49.7% | 0.711 | 8.87 | 12.74 | 0.483 | 0.972 | -7.34 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 104.27 | 45.9% | 0.714 | 8.67 | 12.03 | 0.482 | 0.928 | -9.68 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 | 113.95 | 52.4% | 0.775 | 7.51 | 15.17 | 0.649 | 0.9 | -10.96 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Trọng số phần Divergence (/100) → 12 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.59 | 58.5% | 0.186 | 6.04 | 4.9 | 0.247 | 0.132 | -8.61 |  |

### Vòng 803 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 93.98 | 46% | 0.577 | 8.79 | 10.69 | 0.474 | 0.668 | -10.2 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + R:R tối thiểu tới TP1 → 2.63 | 103.06 | 52.1% | 0.852 | 7.45 | 13.83 | 0.569 | 1.149 | -9.6 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Mức RSI 30/70 → 0.875 | 124.31 | 47.4% | 0.719 | 10.06 | 12.36 | 0.751 | 0.69 | -5.67 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: HVN anchored → 0.313 | 135.73 | 45.7% | 0.585 | 10.36 | 13.1 | 0.638 | 0.53 | -11.21 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Đệm SL riêng khung 1D (ATR) → 0.3 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 50 → 1.13 | 93.97 | 35.3% | 0.329 | 21.21 | 4.43 | 0.352 | 0.308 | -9.88 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần SL (/100) → 7 + Điểm tối thiểu của vùng đặt SL → 4 | 114.92 | 50.3% | 0.771 | 7.63 | 15.06 | 0.59 | 0.965 | -8.45 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: HVN cố định → 0.563 + Coin phải mạnh hơn BTC trong N ngày → 14 | 87.13 | 48.2% | 0.792 | 8.16 | 10.68 | 0.553 | 1.079 | -15.88 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: EMA 21 → 0.875 | 121.04 | 47.2% | 0.743 | 9.53 | 12.7 | 0.706 | 0.777 | -5.32 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 80.33 | 44.9% | 0.481 | 10.47 | 7.67 | 0.394 | 0.569 | -8.23 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: POC volume profile cố định → 0.813 + R:R tối thiểu riêng khung 4H → 2 + Xác nhận khung nhỏ (A2) → W | 63.59 | 33.6% | 0.146 | 26.28 | 2.42 | 0.139 | 0.153 | -7.12 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần Trend (/100) → 19 + Điểm vùng: MACD cắt lên Signal → 0.563 | 115.74 | 49.7% | 0.766 | 8.17 | 14.17 | 0.498 | 1.046 | -9.79 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Xác nhận khung nhỏ (A2) → W + % chốt ở TP1 → 0.287 | 109.53 | 40.2% | 0.428 | 15.41 | 7.11 | 0.409 | 0.445 | -3.75 |  |

### Vòng 802 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.31R, lời÷rủi ro 16.71

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: BOS → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: EMA 50 → 1.13 | 113.46 | 49% | 0.723 | 8.27 | 13.72 | 0.581 | 0.877 | -9.93 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần SL (/100) → 7 | 115.87 | 52.7% | 0.772 | 7.91 | 14.65 | 0.625 | 0.933 | -9.92 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: POC anchored → 2 + Xác nhận khung nhỏ (A2) → W | 91.59 | 36.1% | 0.191 | 22.71 | 4.03 | 0.217 | 0.169 | -6.9 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 67.08 | 44.1% | 0.604 | 9.27 | 7.24 | 0.311 | 0.925 | -6.45 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số TP tối đa → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 27.9 | 57.8% | 0.19 | 5.8 | 4.81 | 0.222 | 0.16 | -8.15 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 88.94 | 49.6% | 0.669 | 8.77 | 10.14 | 0.448 | 0.937 | -16.39 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Xác nhận khung nhỏ (A2) → W + Ngưỡng điểm vào kèo → 74 + Điểm tối thiểu của vùng đặt SL → 4 | 99.01 | 38.4% | 0.388 | 16.42 | 6.03 | 0.367 | 0.407 | -3.72 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Trend (/100) → 19 | 108.56 | 50% | 0.705 | 8.79 | 12.35 | 0.524 | 0.911 | -7.34 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 4H → 2 | 102.22 | 47.4% | 0.746 | 8.55 | 11.96 | 0.485 | 0.962 | -10.69 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Trọng số phần Trend (/100) → 19 | 121.69 | 53.1% | 0.828 | 7.37 | 16.51 | 0.635 | 1.04 | -9.92 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Mức RSI 30/70 → 1.13 | 121.2 | 50.3% | 0.782 | 8.05 | 15.06 | 0.594 | 0.987 | -10.95 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + % chốt ở TP1 → 0.307 + Điểm vùng: HVN cố định → 0.563 + Khung lớn phải tăng (trend ≥) → 0.425 | 119.77 | 53.2% | 0.849 | 7.18 | 16.68 | 0.608 | 1.124 | -9.97 |  |

### Vòng 801 — ngẫu nhiên nhiều thông số · mốc: tổng 122.27R, win 53.8%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.91

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: EMA 200 → 1 | 111.58 | 51% | 0.739 | 8.34 | 13.38 | 0.623 | 0.88 | -4.11 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: BOS → 3 + % chốt ở TP1 → 0.287 | 72.53 | 45.9% | 0.665 | 9.16 | 7.92 | 0.393 | 0.976 | -5.46 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần Elliott (/100) → 10 | 96.11 | 46.3% | 0.654 | 9.01 | 10.67 | 0.467 | 0.877 | -7.31 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 90.91 | 35% | 0.354 | 22.12 | 4.11 | 0.174 | 0.502 | -8.89 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Lệnh chờ hết hạn sau (nến) → 8 | 90.19 | 49.2% | 0.694 | 8.22 | 10.97 | 0.524 | 0.892 | -17.16 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 4H → 2 | 102.18 | 34.1% | 0.264 | 24.21 | 4.22 | 0.244 | 0.279 | -18.7 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần Elliott (/100) → 6 | 78.76 | 43.7% | 0.498 | 11.14 | 7.07 | 0.311 | 0.682 | -10.38 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Đệm SL riêng khung 1W (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 22.51 | 54.9% | 0.159 | 7.29 | 3.09 | 0.19 | 0.136 | -10.67 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 113.37 | 51.7% | 0.761 | 7.82 | 14.5 | 0.562 | 0.991 | -8.58 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC volume profile cố định → 0.813 | 71.3 | 45.4% | 0.66 | 9.07 | 7.86 | 0.396 | 0.966 | -4.43 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 115.73 | 51% | 0.766 | 7.99 | 14.48 | 0.617 | 0.914 | -3.93 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Divergence (/100) → 12 | 121.25 | 53.4% | 0.83 | 7.43 | 16.32 | 0.645 | 1.032 | -9.21 |  |

### Vòng 800 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.25R, lời÷rủi ro 16.85

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần Elliott (/100) → 6 + R:R tối thiểu riêng khung 1D → 2 | 115.52 | 40.3% | 0.394 | 15.45 | 7.48 | 0.374 | 0.412 | -8.81 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: EMA 21 → 0.875 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 114.45 | 50.7% | 0.795 | 7.7 | 14.86 | 0.648 | 0.946 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: EMA 21 → 0.875 | 122.74 | 52.1% | 0.841 | 7.42 | 16.54 | 0.692 | 0.998 | -8.63 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Cộng thêm ngưỡng điểm khung 1D → 5 + SL tối đa (% Entry) → 0.425 | 97.96 | 50.4% | 0.796 | 8.26 | 11.86 | 0.531 | 1.084 | -10.89 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức MACD → 0.875 | 109.58 | 52.4% | 0.756 | 7.54 | 14.53 | 0.629 | 0.877 | -9.67 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: MACD cắt lên Signal → 0.438 + Khung lớn phải tăng (trend ≥) → 0.425 | 113.87 | 50.7% | 0.749 | 8.47 | 13.44 | 0.493 | 1.049 | -6.35 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: MACD cắt lên Signal → 0.438 | 75.51 | 45.3% | 0.503 | 10.88 | 6.94 | 0.352 | 0.672 | -8.99 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: HVN cố định → 0.438 | 119.37 | 52.4% | 0.812 | 7.74 | 15.42 | 0.592 | 1.061 | -9.92 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Biên mây Ichimoku → 1.35 | 117.35 | 51.7% | 0.788 | 7.92 | 14.82 | 0.592 | 1.003 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 4H → -1 | 119.02 | 47.3% | 0.704 | 10.13 | 11.75 | 0.656 | 0.748 | -5.32 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 73.24 | 43.5% | 0.559 | 10.33 | 7.09 | 0.399 | 0.699 | -11.33 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Trend (/100) → 19 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần SL (/100) → 9 | 118.25 | 46.8% | 0.692 | 10.29 | 11.49 | 0.645 | 0.733 | -5.43 |  |

### Vòng 799 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.37R, lời÷rủi ro 16.57

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Ngưỡng điểm vào kèo → 74 + Trọng số phần Entry (/100) → 28 | 119.5 | 52.1% | 0.818 | 7.41 | 16.13 | 0.634 | 1.019 | -9.92 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Elliott (/100) → 10 + Coin phải mạnh hơn BTC trong N ngày → 14 | 65.29 | 46.7% | 0.725 | 8.25 | 7.91 | 0.471 | 1.004 | -11.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: POC anchored → 4 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 79.78 | 45.7% | 0.57 | 10.47 | 7.62 | 0.408 | 0.731 | -13.87 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Xác nhận khung nhỏ (A2) → W + Trọng số phần Divergence (/100) → 12 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 100.94 | 36.9% | 0.362 | 17.21 | 5.87 | 0.368 | 0.356 | -5.92 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Mức MACD → 0.875 | 116.09 | 52.4% | 0.801 | 7.32 | 15.86 | 0.621 | 0.988 | -8.63 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần Elliott (/100) → 10 | 122.62 | 50.3% | 0.791 | 8 | 15.33 | 0.612 | 0.987 | -10.95 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Cổng Dow → TẮT + Khung lớn phải tăng (trend ≥) → 0.375 | 83.86 | 42.3% | 0.479 | 12.26 | 6.84 | 0.49 | 0.468 | -24.21 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Divergence (/100) → 12 | 74.15 | 46.3% | 0.687 | 8.71 | 8.51 | 0.429 | 0.975 | -5.45 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + SL tối đa (% Entry) → 0.425 | 81.86 | 46.6% | 0.625 | 9.12 | 8.98 | 0.433 | 0.82 | -10.25 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Đệm SL riêng khung 1W (ATR) → 0.3 | 110.12 | 36.9% | 0.437 | 16.71 | 6.59 | 0.398 | 0.468 | -7.94 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần R:R (/100) → 28 | 32.91 | 38.6% | 0.397 | 10.03 | 3.28 | 0.441 | 0.341 | -4.97 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 118.49 | 52.7% | 0.801 | 7.52 | 15.76 | 0.614 | 1.008 | -8.63 |  |

### Vòng 798 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Ngưỡng điểm vào kèo → 74 | 107.18 | 48.7% | 0.705 | 8.36 | 12.82 | 0.528 | 0.908 | -8.61 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Ngưỡng điểm vào kèo → 74 + R:R tối thiểu riêng khung 4H → 2 | 119.26 | 41.4% | 0.374 | 12.53 | 9.52 | 0.332 | 0.408 | -9.46 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Trọng số phần SL (/100) → 9 + Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu riêng khung 1W → 2 | 91.77 | 45.9% | 0.62 | 9.85 | 9.32 | 0.464 | 0.757 | -11.82 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Fib sóng 4 → 1.56 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 118.1 | 52% | 0.787 | 7.84 | 15.06 | 0.574 | 1.032 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 118.42 | 52.4% | 0.806 | 7.33 | 16.16 | 0.604 | 1.021 | -9.92 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 108.96 | 49.3% | 0.726 | 8.35 | 13.05 | 0.534 | 0.952 | -9.92 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Mức MACD → 0.875 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.67 | 58% | 0.189 | 5.72 | 5.19 | 0.198 | 0.181 | -9.5 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: POC anchored → 4 + Số TP tối đa → 2 | 107.64 | 49.4% | 0.673 | 9.39 | 11.46 | 0.484 | 0.871 | -3.18 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 50.82 | 43.5% | 0.598 | 9.04 | 5.62 | 0.414 | 0.786 | -14.72 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 111.3 | 50.7% | 0.752 | 7.91 | 14.07 | 0.581 | 0.914 | -11.81 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cổng Dow → TẮT + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 54.69 | 32.5% | 0.146 | 28.75 | 1.9 | 0.317 | 0.014 | -10.57 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Cộng thêm ngưỡng điểm khung 1D → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 111.04 | 49% | 0.777 | 7.83 | 14.18 | 0.608 | 0.968 | -8.2 |  |

### Vòng 797 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.16R, lời÷rủi ro 17.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Biên mây Ichimoku → 1.05 + Cộng điểm phân kỳ dương ẩn → 2.25 | 110.61 | 52% | 0.747 | 7.62 | 14.52 | 0.569 | 0.941 | -10.75 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: EMA 200 → 1 | 69.48 | 46% | 0.615 | 9.19 | 7.56 | 0.421 | 0.835 | -1.96 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trọng số phần Entry (/100) → 33 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Số TP tối đa → 2 | 102.1 | 48.6% | 0.74 | 8.14 | 12.54 | 0.454 | 1.043 | -10.48 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần Divergence (/100) → 12 | 122.14 | 53.4% | 0.837 | 7.16 | 17.06 | 0.635 | 1.061 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu tới TP1 → 2.63 | 188.52 | 40.9% | 0.683 | 15.85 | 11.89 | 0.537 | 0.845 | -7.26 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 117.01 | 51.7% | 0.796 | 7.1 | 16.48 | 0.639 | 0.964 | -10.26 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng thêm ngưỡng điểm khung 1D → 3 | 107.24 | 51.7% | 0.72 | 7.83 | 13.7 | 0.64 | 0.805 | -9.14 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 82.6 | 47% | 0.626 | 9.28 | 8.9 | 0.429 | 0.835 | -10.25 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: BOS → 1 | 122.21 | 53.4% | 0.837 | 7.16 | 17.07 | 0.637 | 1.06 | -9.93 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: POC anchored → 4 + Trọng số phần Elliott (/100) → 6 | 102.97 | 49.7% | 0.664 | 8.93 | 11.53 | 0.56 | 0.759 | -3.73 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần Trend (/100) → 12 + Trọng số phần Entry (/100) → 28 | 108.69 | 49% | 0.701 | 8.37 | 12.99 | 0.553 | 0.859 | -9.75 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 | 91.06 | 50.8% | 0.772 | 7.55 | 12.06 | 0.553 | 1.023 | -16.39 |  |

### Vòng 796 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.16

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: HVN cố định → 0.563 | 108.72 | 39.8% | 0.428 | 15.5 | 7.01 | 0.372 | 0.478 | -6.01 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 115.38 | 50.3% | 0.785 | 7.98 | 14.46 | 0.65 | 0.918 | -8.97 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 119 | 53.1% | 0.821 | 7.36 | 16.17 | 0.637 | 1.029 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 117.15 | 52.4% | 0.808 | 7.36 | 15.92 | 0.631 | 1.008 | -9.92 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Lệnh chờ hết hạn sau (nến) → 8 | 117.35 | 50.9% | 0.738 | 7.94 | 14.78 | 0.591 | 0.907 | -11.51 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 113.14 | 50.3% | 0.77 | 7.99 | 14.16 | 0.502 | 1.056 | -9.79 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + % chốt ở TP1 → 0.307 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 92.96 | 44.9% | 0.632 | 9.5 | 9.79 | 0.452 | 0.848 | -8.13 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Lệnh chờ hết hạn sau (nến) → 6 | 61.07 | 44.4% | 0.492 | 10.37 | 5.89 | 0.362 | 0.632 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trọng số phần R:R (/100) → 33 | 117.02 | 52% | 0.791 | 7.49 | 15.62 | 0.635 | 0.959 | -9.92 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Entry (/100) → 33 | 117.46 | 52.4% | 0.821 | 7.26 | 16.18 | 0.653 | 1.007 | -9.93 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 1 | 107.57 | 49.3% | 0.717 | 8.6 | 12.51 | 0.577 | 0.865 | -10.96 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần SL (/100) → 9 | 29.4 | 54.9% | 0.179 | 6.12 | 4.8 | 0.182 | 0.176 | -9.5 |  |
