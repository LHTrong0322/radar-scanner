# Tối ưu tự động (chạy liên tục) — vòng 748

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 8631 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 93.37R | 0.573 | 5.74R | 10.02R | 9.32 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 144 | 53.5% | 118.41R | 0.822 | 5.09R | 7.23R | 16.38 | 27 | 18.5% | -8.63R | -0.32 | 9.25R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.77R | 1 | 0% | -1.01R |
| 4H | 106 | 54.7% | 91.22R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 93.37R | 10.02R | 9.32 | 31 | 12.9% | -13R |
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

### Vòng 748 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.38

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: EMA 21 → 1.13 | 106.13 | 49.4% | 0.647 | 8.54 | 12.43 | 0.569 | 0.731 | -8.81 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 117.41 | 50.3% | 0.767 | 8.15 | 14.41 | 0.593 | 0.963 | -9.66 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Coin phải mạnh hơn BTC trong N ngày → 14 | 60.81 | 45.5% | 0.543 | 9.06 | 6.71 | 0.479 | 0.614 | -16.02 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Trọng số phần Momentum (/100) → 25 + R:R tối thiểu riêng khung 4H → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 118.56 | 41.2% | 0.379 | 12.42 | 9.55 | 0.329 | 0.421 | -11.49 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu tới TP1 → 2.63 + Đệm SL riêng khung 1D (ATR) → 0.3 | 91.95 | 45.7% | 0.724 | 10.66 | 8.63 | 0.692 | 0.755 | -12.1 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cộng thêm ngưỡng điểm khung 4H → -1 | 80.17 | 48.1% | 0.612 | 8.92 | 8.99 | 0.464 | 0.772 | -8.96 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Cổng Dow → CHẶT + Điểm vùng: HVN anchored → 0.188 + R:R tối thiểu riêng khung 1D → 2 | 52.72 | 43.3% | 0.351 | 10.63 | 4.96 | 0.239 | 0.422 | -11.99 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: HVN anchored → 0.313 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Biên mây Ichimoku → 1.05 | 119.69 | 42.8% | 0.557 | 12.37 | 9.68 | 0.519 | 0.595 | -20.36 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1D → 2 | 125.86 | 42.2% | 0.379 | 11.95 | 10.53 | 0.399 | 0.363 | -8.03 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + % chốt ở TP1 → 0.307 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 73.9 | 47.3% | 0.672 | 8.77 | 8.43 | 0.462 | 0.924 | -6.04 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 75.05 | 45.8% | 0.573 | 9.32 | 8.05 | 0.42 | 0.732 | -7.93 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: POC anchored → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 96.54 | 48.4% | 0.6 | 9.52 | 10.14 | 0.453 | 0.768 | -5.02 |  |

### Vòng 747 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.25R, lời÷rủi ro 16.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1W (ATR) → 0.3 | 96.54 | 36.8% | 0.404 | 16.11 | 5.99 | 0.369 | 0.433 | -3.75 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: HVN anchored → 0.188 + Cộng thêm ngưỡng điểm khung 1W → -1 | 99.84 | 51.5% | 0.756 | 7.95 | 12.56 | 0.608 | 0.93 | -8.27 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 75.74 | 47.2% | 0.701 | 8.34 | 9.08 | 0.474 | 0.956 | -5.45 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 22.77 | 36.5% | 0.361 | 10.09 | 2.26 | 0.286 | 0.435 | -11.35 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần Momentum (/100) → 25 | 98.17 | 50.4% | 0.738 | 7.77 | 12.63 | 0.596 | 0.905 | -8.27 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức MACD → 0.875 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 18.37 | 53.4% | 0.158 | 6.55 | 2.8 | 0.241 | 0.079 | -8.8 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 115.13 | 50.3% | 0.783 | 7.84 | 14.68 | 0.673 | 0.889 | -8.97 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần SL (/100) → 7 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 73.05 | 46.2% | 0.689 | 8.76 | 8.34 | 0.474 | 0.94 | -5.45 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 117.07 | 53.5% | 0.813 | 7.4 | 15.82 | 0.634 | 1.018 | -7.61 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu riêng khung 1W → 2 | 102.43 | 47% | 0.687 | 9.5 | 10.78 | 0.518 | 0.842 | -10.86 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 111.43 | 51.4% | 0.763 | 7.83 | 14.23 | 0.58 | 0.973 | -8.66 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 118.41 | 53.5% | 0.822 | 7.25 | 16.33 | 0.635 | 1.037 | -8.63 |  |

### Vòng 746 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.27R, lời÷rủi ro 16.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 99.9 | 45.1% | 0.549 | 10.35 | 9.65 | 0.509 | 0.589 | -5.07 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib sóng 4 → 0.938 + Đệm SL riêng khung 1D (ATR) → 0.3 | 108.85 | 37.6% | 0.379 | 19 | 5.73 | 0.375 | 0.383 | -6.16 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Cộng thêm ngưỡng điểm khung 1D → 3 | 117.29 | 52.7% | 0.803 | 7.43 | 15.79 | 0.619 | 1.015 | -8.63 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + % chốt ở TP1 → 0.287 + Trọng số phần Trend (/100) → 19 | 124.1 | 50% | 0.795 | 8.32 | 14.92 | 0.758 | 0.839 | -9.2 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Elliott (/100) → 10 | 114.07 | 50.6% | 0.731 | 8.52 | 13.39 | 0.592 | 0.907 | -3.64 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Mức RSI 30/70 → 0.875 | 115.25 | 51.9% | 0.711 | 8.69 | 13.26 | 0.546 | 0.913 | -8.63 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: EMA 50 → 0.75 + Trọng số phần Divergence (/100) → 12 | 114.79 | 50% | 0.776 | 8.35 | 13.75 | 0.586 | 0.97 | -9.68 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 43.62 | 43.2% | 0.496 | 9.12 | 4.78 | 0.433 | 0.578 | -11.35 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Break mây Ichimoku → 3 + R:R tối thiểu riêng khung 1W → 2 | 93.37 | 47.2% | 0.587 | 9.17 | 10.18 | 0.495 | 0.67 | -8.37 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Lệnh chờ hết hạn sau (nến) → 8 | 120.25 | 48.8% | 0.707 | 8.77 | 13.71 | 0.59 | 0.84 | -11.25 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: POC volume profile cố định → 0.813 | 117.29 | 53.1% | 0.809 | 7.72 | 15.19 | 0.614 | 1.036 | -7.61 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần Elliott (/100) → 10 | 85.27 | 44.2% | 0.547 | 11.25 | 7.58 | 0.404 | 0.737 | -5.55 |  |

### Vòng 745 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.27R, lời÷rủi ro 16.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 76.03 | 47.7% | 0.711 | 8.49 | 8.96 | 0.47 | 0.985 | -5.46 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 4H → -1 | 75.32 | 46.3% | 0.697 | 8.83 | 8.53 | 0.484 | 0.945 | -6.82 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần Entry (/100) → 33 | 108.08 | 49% | 0.725 | 8.82 | 12.25 | 0.5 | 0.973 | -8.49 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 1W → 2 | 71.77 | 46.9% | 0.635 | 9.37 | 7.66 | 0.464 | 0.81 | -6.49 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Xác nhận khung nhỏ (A2) → W | 111.3 | 39.9% | 0.423 | 15.11 | 7.37 | 0.393 | 0.453 | -2.33 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 105.46 | 50% | 0.703 | 8.11 | 13 | 0.731 | 0.676 | -10.09 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: EMA 200 → 3 | 100.23 | 50.3% | 0.691 | 8.06 | 12.44 | 0.521 | 0.874 | -9.62 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Lệnh chờ hết hạn sau (nến) → 6 | 92.66 | 50.4% | 0.718 | 7.91 | 11.71 | 0.591 | 0.86 | -8.27 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 79.18 | 45.2% | 0.689 | 9.09 | 8.71 | 0.615 | 0.772 | -4.81 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + SL tối đa (% Entry) → 0.425 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 18.91 | 53.1% | 0.167 | 6.64 | 2.85 | 0.186 | 0.15 | -6.82 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Entry (/100) → 33 | 121.67 | 50% | 0.8 | 8.19 | 14.86 | 0.775 | 0.83 | -9.21 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Mức RSI 30/70 → 1.13 | 116.58 | 52% | 0.788 | 7.53 | 15.48 | 0.608 | 0.993 | -8.63 |  |

### Vòng 744 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.27R, lời÷rủi ro 16.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Trọng số phần Trend (/100) → 12 | 116.2 | 51.4% | 0.785 | 7.87 | 14.76 | 0.601 | 0.974 | -3.45 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Fib sóng 4 → 0.938 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 102.59 | 47.3% | 0.622 | 9.04 | 11.35 | 0.6 | 0.643 | -6.09 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần SL (/100) → 9 | 103.59 | 49.7% | 0.714 | 8.13 | 12.74 | 0.544 | 0.907 | -8.63 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Trọng số phần Entry (/100) → 33 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 102.55 | 51.4% | 0.722 | 8.53 | 12.02 | 0.653 | 0.798 | -7.86 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: MACD cắt lên Signal → 0.563 | 111.55 | 52.8% | 0.786 | 7.42 | 15.03 | 0.656 | 0.93 | -10.75 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: BOS → 3 | 115.65 | 52.4% | 0.798 | 7.75 | 14.92 | 0.592 | 1.037 | -8.63 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + R:R tối thiểu riêng khung 1D → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 106.51 | 44.7% | 0.567 | 8.64 | 12.33 | 0.658 | 0.49 | -8.45 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: EMA 200 → 1 | 113.73 | 46.9% | 0.635 | 8.8 | 12.92 | 0.678 | 0.592 | -3.6 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Ngưỡng điểm vào kèo → 77 | 108.73 | 50.7% | 0.755 | 7.79 | 13.96 | 0.623 | 0.903 | -9.6 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 50 → 0.75 | 28.45 | 59% | 0.182 | 5.83 | 4.88 | 0.192 | 0.173 | -10.36 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 | 125.34 | 42.5% | 0.386 | 12.6 | 9.95 | 0.315 | 0.445 | -7.3 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 110.89 | 52.2% | 0.706 | 8.67 | 12.79 | 0.625 | 0.804 | -2.86 |  |

### Vòng 743 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.85

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 116.54 | 52.7% | 0.798 | 7.75 | 15.04 | 0.614 | 1.009 | -7.31 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC volume profile cố định → 0.688 | 61.64 | 42.3% | 0.474 | 11.11 | 5.55 | 0.468 | 0.481 | -9.36 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Lệnh chờ hết hạn sau (nến) → 6 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 26.88 | 58% | 0.188 | 6.05 | 4.44 | 0.245 | 0.132 | -10 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 117.66 | 53.1% | 0.811 | 7.55 | 15.58 | 0.635 | 1.011 | -7.31 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: Vùng RSI 45–55 → 0.875 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 106.06 | 49.3% | 0.726 | 8.32 | 12.75 | 0.616 | 0.831 | -8.97 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + SL tối đa (% Entry) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Khung lớn phải tăng (trend ≥) → 0.375 | 90.23 | 49% | 0.622 | 8.95 | 10.08 | 0.509 | 0.738 | -5.57 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu tới TP1 → 2.38 | 85.43 | 43.2% | 0.467 | 12.1 | 7.06 | 0.558 | 0.397 | -6.63 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần SL (/100) → 9 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 115.93 | 52.4% | 0.8 | 7.77 | 14.92 | 0.635 | 0.986 | -10.03 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần SL (/100) → 7 | 116.67 | 50.9% | 0.734 | 8.13 | 14.35 | 0.594 | 0.894 | -10.22 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Cổng Dow → CHẶT | 81.67 | 52.3% | 0.736 | 7.35 | 11.11 | 0.317 | 1.079 | -12.01 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + SL tối đa (% Entry) → 0.425 + Trọng số phần Trend (/100) → 12 | 74.72 | 46.7% | 0.698 | 8.71 | 8.58 | 0.474 | 0.955 | -5.45 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Biên mây Ichimoku → 1.05 | 104.22 | 52.4% | 0.709 | 7.68 | 13.57 | 0.571 | 0.865 | -10.75 |  |

### Vòng 742 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.29R, lời÷rủi ro 16.24

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 1D → 5 | 106.84 | 39.6% | 0.403 | 16.38 | 6.52 | 0.361 | 0.444 | -2.71 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 89.03 | 50.9% | 0.768 | 7.53 | 11.82 | 0.597 | 0.971 | -14.92 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 200 → 3 | 101.18 | 44.7% | 0.628 | 11.01 | 9.19 | 0.604 | 0.65 | -6.35 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 99.45 | 50% | 0.7 | 7.72 | 12.88 | 0.496 | 0.936 | -10.81 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần R:R (/100) → 33 | 106.22 | 50% | 0.718 | 8.2 | 12.95 | 0.554 | 0.895 | -9.99 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: MACD cắt lên Signal → 0.438 | 108.09 | 49.7% | 0.688 | 9.35 | 11.56 | 0.458 | 0.967 | -6.05 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 69.13 | 46.8% | 0.634 | 9.27 | 7.46 | 0.475 | 0.809 | -4.29 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Biên mây Ichimoku → 1.05 | 31.85 | 58.1% | 0.206 | 5.33 | 5.98 | 0.253 | 0.165 | -10.45 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Cộng thêm ngưỡng điểm khung 4H → -1 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 98.95 | 49.1% | 0.853 | 8.22 | 12.04 | 0.539 | 1.226 | -9.09 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: MACD cắt lên Signal → 0.438 | 109.91 | 50.3% | 0.709 | 8.95 | 12.28 | 0.491 | 0.967 | -6.05 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: MACD cắt lên Signal → 0.438 | 78.38 | 36.1% | 0.311 | 18.78 | 4.17 | 0.261 | 0.355 | -3.58 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 50 → 1.13 + Đệm SL riêng khung 1W (ATR) → 0.3 | 87.64 | 43.8% | 0.674 | 10.11 | 8.67 | 0.484 | 0.889 | -15.12 |  |

### Vòng 741 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.27R, lời÷rủi ro 16.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + R:R tối thiểu riêng khung 4H → 2 | 117.85 | 41% | 0.374 | 12.97 | 9.09 | 0.345 | 0.398 | -13.14 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Trend (/100) → 12 + R:R tối thiểu tới TP1 → 2.38 | 99.31 | 47.2% | 0.609 | 8.86 | 11.21 | 0.547 | 0.666 | -11.28 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: POC anchored → 4 + Điểm vùng: EMA 21 → 1.13 + Lệnh chờ hết hạn sau (nến) → 8 | 111.86 | 50% | 0.682 | 8.46 | 13.22 | 0.559 | 0.811 | -7.45 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: EMA 21 → 1.13 | 110.73 | 50.7% | 0.738 | 7.85 | 14.11 | 0.589 | 0.909 | -8.97 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng thêm ngưỡng điểm khung 1D → 5 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 95.86 | 50% | 0.614 | 9.44 | 10.15 | 0.53 | 0.71 | -5.23 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + % chốt ở TP1 → 0.307 | 112.88 | 52.8% | 0.795 | 7.54 | 14.97 | 0.623 | 0.982 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần Divergence (/100) → 12 | 68.82 | 39.1% | 0.427 | 13.2 | 5.21 | 0.491 | 0.36 | -7.72 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Divergence (/100) → 12 | 154.95 | 38.8% | 0.542 | 17.8 | 8.71 | 0.401 | 0.684 | -16.61 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Biên mây Ichimoku → 1.05 | 111.85 | 47% | 0.674 | 10.29 | 10.87 | 0.654 | 0.691 | -5.17 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Trọng số phần Momentum (/100) → 21 | 118.41 | 53.5% | 0.822 | 7.27 | 16.29 | 0.635 | 1.037 | -8.63 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.09 | 58.2% | 0.184 | 5.99 | 4.86 | 0.198 | 0.17 | -10.35 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 76.19 | 47.7% | 0.712 | 8.46 | 9.01 | 0.474 | 0.984 | -6.78 |  |

### Vòng 740 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.33R, lời÷rủi ro 16.15

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cộng thêm ngưỡng điểm khung 1W → 2 + Ngưỡng điểm vào kèo → 77 | 79.29 | 45.7% | 0.615 | 9.77 | 8.12 | 0.412 | 0.827 | -8.96 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: POC anchored → 4 | 117.91 | 52.3% | 0.791 | 7.7 | 15.31 | 0.597 | 0.994 | -3.45 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Cộng thêm ngưỡng điểm khung 4H → -1 | 74.31 | 45.5% | 0.664 | 9.31 | 7.98 | 0.472 | 0.877 | -6.82 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 120.93 | 49% | 0.77 | 8.34 | 14.5 | 0.723 | 0.827 | -7.9 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 200 → 1 + Đệm SL riêng khung 1W (ATR) → 0.3 | 98.21 | 43.8% | 0.606 | 11.28 | 8.71 | 0.569 | 0.648 | -6.38 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 116.32 | 53.1% | 0.802 | 7.47 | 15.57 | 0.634 | 0.992 | -7.31 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Divergence (/100) → 9 + Xác nhận khung nhỏ (A2) → W + Trọng số phần SL (/100) → 7 | 105.1 | 39.4% | 0.414 | 15.73 | 6.68 | 0.36 | 0.464 | -2.71 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: EMA 50 → 1.13 | 98.79 | 47.1% | 0.629 | 9.92 | 9.96 | 0.513 | 0.754 | -7.98 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Ngưỡng điểm vào kèo → 77 + Trọng số phần Momentum (/100) → 21 + SL tối đa (% Entry) → 0.425 | 83.92 | 51.8% | 0.749 | 6.9 | 12.16 | 0.379 | 1.059 | -10.72 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Khung lớn phải tăng (trend ≥) → 0.375 + Cộng thêm ngưỡng điểm khung 1W → -1 + SL tối đa (% Entry) → 0.425 | 75.45 | 47.2% | 0.699 | 8.55 | 8.82 | 0.466 | 0.959 | -5.45 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 95.9 | 47.4% | 0.71 | 9.14 | 10.49 | 0.437 | 0.95 | -8.37 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Mức MACD → 0.875 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu riêng khung 4H → 2 | 127.38 | 43.7% | 0.39 | 11.7 | 10.89 | 0.34 | 0.431 | -8.36 |  |

### Vòng 739 — ngẫu nhiên nhiều thông số · mốc: tổng 118.41R, win 53.5%, rủi ro tụt vốn 7.42R, lời÷rủi ro 15.96

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 33.91 | 40.9% | 0.385 | 10.61 | 3.2 | 0.277 | 0.522 | -7.55 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: BOS → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 | 68.74 | 39.3% | 0.409 | 13.81 | 4.98 | 0.347 | 0.459 | -6.49 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Cổng Dow → CHẶT | 58.61 | 45.3% | 0.428 | 10.22 | 5.73 | 0.313 | 0.518 | -13.93 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 114.07 | 52.1% | 0.803 | 7.46 | 15.29 | 0.604 | 1.026 | -9.92 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 111 | 51.1% | 0.799 | 7.65 | 14.51 | 0.659 | 0.953 | -11.89 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cổng Dow → CHẶT | 72.63 | 49.1% | 0.626 | 8.73 | 8.32 | 0.213 | 0.999 | -8.14 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần Divergence (/100) → 12 | 114.11 | 51.4% | 0.792 | 7.75 | 14.72 | 0.523 | 1.086 | -8.49 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 110.02 | 52.1% | 0.764 | 7.89 | 13.94 | 0.599 | 0.944 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: EMA 21 → 0.875 + Đệm SL riêng khung 4H (ATR) → 0.3 | 156.62 | 38.4% | 0.536 | 17.91 | 8.74 | 0.408 | 0.666 | -12.38 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu riêng khung 1W → 2 | 25.05 | 57% | 0.166 | 6.18 | 4.05 | 0.251 | 0.09 | -9.27 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 116.31 | 52% | 0.786 | 7.74 | 15.03 | 0.625 | 0.965 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 106.16 | 51% | 0.732 | 8.1 | 13.11 | 0.594 | 0.884 | -10.33 |  |
