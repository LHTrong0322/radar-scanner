# Tối ưu tự động (chạy liên tục) — vòng 962

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 11199 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 46.4% | 95.04R | 0.573 | 6.44R | 10.21R | 9.31 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
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
| Bot thật | 166 | 46.4% | 95.04R | 10.21R | 9.31 | 30 | 13.3% | -11.98R |
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

### Vòng 962 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.98R, lời÷rủi ro 14.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: EMA 50 → 0.75 | 106.97 | 51.4% | 0.733 | 8.06 | 13.27 | 0.505 | 0.98 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + R:R tối thiểu tới TP1 → 2.63 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Divergence (/100) → 9 | 97.65 | 50.8% | 0.787 | 8.11 | 12.04 | 0.516 | 1.068 | -9.6 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Mức RSI 30/70 → 0.875 + Coin phải mạnh hơn BTC trong N ngày → 14 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 81.12 | 48.5% | 0.615 | 9.6 | 8.45 | 0.422 | 0.846 | -14.05 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + R:R tối thiểu tới TP1 → 2.63 | 78.23 | 44.7% | 0.593 | 10.71 | 7.3 | 0.397 | 0.794 | -9.09 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Divergence (/100) → 9 | 71.71 | 45.9% | 0.658 | 8.73 | 8.21 | 0.422 | 0.916 | -4.43 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + R:R tối thiểu riêng khung 1D → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 57.49 | 38.3% | 0.432 | 12.43 | 4.63 | 0.293 | 0.554 | -4.77 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: POC anchored → 2 | 102.6 | 46.2% | 0.607 | 10.89 | 9.42 | 0.586 | 0.626 | -4.3 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 + Cổng Dow → CHẶT | 73.44 | 51.3% | 0.628 | 7.76 | 9.46 | 0.254 | 0.948 | -10.99 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm tối thiểu của vùng đặt SL → 2 | 108.27 | 52% | 0.732 | 8.51 | 12.72 | 0.592 | 0.883 | -8.9 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: BOS → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 95.5 | 49.7% | 0.668 | 8.17 | 11.69 | 0.484 | 0.849 | -11.52 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Cộng thêm ngưỡng điểm khung 1W → 2 | 112.31 | 51.4% | 0.769 | 8.07 | 13.92 | 0.598 | 0.956 | -8.9 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + R:R tối thiểu riêng khung 1D → 2 | 107.83 | 40.9% | 0.386 | 12.93 | 8.34 | 0.538 | 0.243 | -11.5 |  |

### Vòng 961 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.13R, lời÷rủi ro 14.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 109.71 | 47.2% | 0.673 | 10.22 | 10.73 | 0.634 | 0.707 | -4.8 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Divergence (/100) → 9 | 72.32 | 47.5% | 0.716 | 8.72 | 8.29 | 0.457 | 0.97 | -11.96 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC anchored → 4 + Điểm vùng: BOS → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 | 71.34 | 45.9% | 0.643 | 9.43 | 7.57 | 0.372 | 0.918 | 1.51 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: EMA 21 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 106.09 | 48.1% | 0.68 | 8.7 | 12.19 | 0.521 | 0.856 | -10.27 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cổng Dow → CHẶT + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 68.32 | 51.4% | 0.616 | 8.11 | 8.42 | 0.299 | 0.895 | -10.21 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Trọng số phần Trend (/100) → 19 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm tối thiểu của vùng đặt SL → 4 | 113.1 | 50.3% | 0.769 | 7.88 | 14.35 | 0.623 | 0.935 | -10.74 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: EMA 21 → 1.13 + Trọng số phần R:R (/100) → 28 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 107.84 | 50.7% | 0.739 | 7.87 | 13.7 | 0.59 | 0.905 | -9.24 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 23.97 | 57.4% | 0.176 | 5.2 | 4.61 | 0.239 | 0.121 | -6.91 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 106.06 | 48.1% | 0.655 | 9.49 | 11.18 | 0.551 | 0.764 | -7.35 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Divergence (/100) → 9 + Số TP tối đa → 2 | 107.8 | 48.8% | 0.665 | 9.41 | 11.46 | 0.552 | 0.79 | -7.35 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: EMA 50 → 0.75 + Trọng số phần R:R (/100) → 28 | 101.96 | 49% | 0.703 | 8.18 | 12.46 | 0.493 | 0.922 | -9.89 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Ngưỡng điểm vào kèo → 77 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 23.6 | 49.4% | 0.098 | 14.44 | 1.63 | 0.061 | 0.128 | -15.82 |  |

### Vòng 960 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.02R, lời÷rủi ro 14.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + % chốt ở TP1 → 0.307 + Trọng số phần R:R (/100) → 28 | 112.49 | 51.7% | 0.787 | 8.1 | 13.89 | 0.608 | 0.983 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trọng số phần Divergence (/100) → 9 | 109.62 | 50.7% | 0.731 | 8.45 | 12.97 | 0.532 | 0.958 | -7.88 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: HVN cố định → 0.563 | 112.23 | 51.4% | 0.779 | 7.81 | 14.37 | 0.596 | 0.984 | -8.9 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 34.16 | 58.4% | 0.212 | 5.77 | 5.92 | 0.264 | 0.165 | -8 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 1D (ATR) → 0.3 | 112.42 | 47% | 0.669 | 10.55 | 10.66 | 0.628 | 0.707 | -4.3 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 150.78 | 38.7% | 0.525 | 18.06 | 8.35 | 0.406 | 0.648 | -17.98 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần Entry (/100) → 28 | 105.31 | 50.7% | 0.721 | 8.15 | 12.92 | 0.598 | 0.855 | -12.99 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: BOS → 1 + Trọng số phần SL (/100) → 9 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 110.74 | 48.4% | 0.714 | 8.84 | 12.53 | 0.544 | 0.906 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Entry (/100) → 33 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 | 85.66 | 47.1% | 0.56 | 10.35 | 8.28 | 0.462 | 0.667 | -6.12 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Trend (/100) → 12 + Điểm tối thiểu của vùng đặt SL → 2 | 106.53 | 51% | 0.725 | 8.22 | 12.96 | 0.597 | 0.861 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Số TP tối đa → 2 + Khung lớn phải tăng (trend ≥) → 0.425 | 112.48 | 52.1% | 0.803 | 7.57 | 14.86 | 0.561 | 1.083 | -8.93 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: EMA 200 → 3 | 102.28 | 48% | 0.691 | 8.77 | 11.66 | 0.517 | 0.861 | -9.96 |  |

### Vòng 959 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.93R, lời÷rủi ro 14.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: POC anchored → 2 + R:R tối thiểu tới TP1 → 2.63 | 41.6 | 43.3% | 0.31 | 12.94 | 3.21 | 0.241 | 0.367 | -17.23 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Xác nhận khung nhỏ (A2) → W + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 87.48 | 36.8% | 0.354 | 17.92 | 4.88 | 0.326 | 0.381 | -7.87 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Cổng Dow → CHẶT + Cộng điểm phân kỳ dương ẩn → 3 | 81.52 | 52.2% | 0.721 | 7.29 | 11.18 | 0.299 | 1.082 | -10.99 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 113.23 | 49.1% | 0.712 | 8.97 | 12.62 | 0.538 | 0.917 | -9.93 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + R:R tối thiểu riêng khung 1D → 2 | 102.94 | 44.8% | 0.592 | 9.59 | 10.73 | 0.57 | 0.612 | -7.16 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Biên mây Ichimoku → 1.05 | 91.75 | 49% | 0.616 | 9.09 | 10.09 | 0.504 | 0.736 | -8.32 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: Vùng RSI 45–55 → 1.13 + % chốt ở TP1 → 0.287 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 105.87 | 50.3% | 0.701 | 8.49 | 12.47 | 0.549 | 0.855 | -3.97 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Lệnh chờ hết hạn sau (nến) → 8 + Cộng thêm ngưỡng điểm khung 1W → 2 | 95.19 | 47.8% | 0.606 | 9.29 | 10.25 | 0.576 | 0.64 | -13.76 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Fib sóng 4 → 1.56 | 116.54 | 49.1% | 0.715 | 9.03 | 12.91 | 0.586 | 0.863 | -7.61 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 30.21 | 58.3% | 0.194 | 5.54 | 5.45 | 0.223 | 0.167 | -9.28 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: MACD cắt lên Signal → 0.563 | 86.88 | 46.8% | 0.625 | 9 | 9.65 | 0.388 | 0.887 | -10.48 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 4H (ATR) → 0.3 | 78.9 | 32.9% | 0.265 | 25.59 | 3.08 | 0.216 | 0.303 | -18.59 |  |

### Vòng 958 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.04R, lời÷rủi ro 14.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1D → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 122.35 | 41.4% | 0.367 | 12.45 | 9.83 | 0.389 | 0.35 | -7.66 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: HVN anchored → 0.188 | 109.76 | 52.3% | 0.737 | 8.16 | 13.45 | 0.554 | 0.949 | -8.9 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 72.75 | 46.5% | 0.564 | 9.36 | 7.77 | 0.418 | 0.721 | -10.31 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Trọng số phần Elliott (/100) → 6 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: EMA 50 → 0.75 | 102.97 | 49.7% | 0.691 | 8.45 | 12.19 | 0.519 | 0.881 | -10.26 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 1 + Lệnh chờ hết hạn sau (nến) → 6 | 95.85 | 44.7% | 0.603 | 11.43 | 8.39 | 0.663 | 0.546 | -2.63 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: POC anchored → 4 + Trọng số phần Divergence (/100) → 12 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 90.6 | 52% | 0.725 | 7.57 | 11.97 | 0.476 | 0.927 | -7.66 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 101 | 51.4% | 0.692 | 8.51 | 11.87 | 0.596 | 0.798 | -8.12 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + SL tối đa (% Entry) → 0.425 + Cộng điểm phân kỳ dương ẩn → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 97.28 | 39.9% | 0.363 | 15.97 | 6.09 | 0.493 | 0.225 | -9.55 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Entry (/100) → 33 + R:R tối thiểu riêng khung 1D → 2 | 95.05 | 45.6% | 0.556 | 9.75 | 9.75 | 0.617 | 0.501 | -6.94 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cổng Dow → TẮT | 24.17 | 51.8% | 0.125 | 8.78 | 2.75 | 0.202 | 0.046 | -14.24 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 27.47 | 58% | 0.175 | 6 | 4.58 | 0.186 | 0.165 | -9.27 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Số TP tối đa → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 124.28 | 44.8% | 0.562 | 11.06 | 11.24 | 0.589 | 0.534 | -8.92 |  |

### Vòng 957 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.35R, lời÷rủi ro 13.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 101.54 | 49% | 0.7 | 8.75 | 11.6 | 0.522 | 0.908 | -9.48 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + % chốt ở TP1 → 0.287 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 71.56 | 46.3% | 0.663 | 9.29 | 7.7 | 0.411 | 0.944 | -5.74 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Đệm SL riêng khung 1W (ATR) → 0.3 | 104 | 43.8% | 0.642 | 10.57 | 9.84 | 0.518 | 0.757 | -12.88 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Số TP tối đa → 2 | 111.48 | 48.7% | 0.743 | 8.8 | 12.67 | 0.602 | 0.889 | -7.95 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu tới TP1 → 2.38 + Lệnh chờ hết hạn sau (nến) → 6 | 70.77 | 43.8% | 0.491 | 9.83 | 7.2 | 0.386 | 0.597 | -9.44 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm tối thiểu của vùng đặt SL → 4 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.3 | 55.3% | 0.156 | 6.61 | 4.43 | 0.17 | 0.143 | -7.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 102.13 | 45.2% | 0.659 | 10.91 | 9.36 | 0.619 | 0.692 | -7.52 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + SL tối đa (% Entry) → 0.425 + Coin phải mạnh hơn BTC trong N ngày → 14 | 84.07 | 48% | 0.662 | 8.94 | 9.4 | 0.518 | 0.839 | -16.96 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: POC anchored → 2 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Entry (/100) → 28 | 86.31 | 44.8% | 0.529 | 9.92 | 8.7 | 0.431 | 0.62 | -9.18 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần R:R (/100) → 28 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 69.62 | 48.3% | 0.58 | 9.64 | 7.22 | 0.513 | 0.646 | -11.79 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 85.17 | 47.1% | 0.704 | 8.67 | 9.82 | 0.523 | 0.928 | -15.36 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 87.24 | 49.6% | 0.746 | 8.18 | 10.67 | 0.56 | 0.969 | -15.36 |  |

### Vòng 956 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.86R, lời÷rủi ro 14.50

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + R:R tối thiểu tới TP1 → 2.38 | 81.65 | 44.6% | 0.492 | 10.8 | 7.56 | 0.367 | 0.616 | -9.45 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 113.3 | 51.7% | 0.771 | 8.06 | 14.06 | 0.581 | 0.985 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: HVN anchored → 0.313 + R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 1W → -1 | 103.56 | 45.5% | 0.588 | 9.73 | 10.64 | 0.566 | 0.609 | -7.16 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: EMA 21 → 1.13 | 108.74 | 51.7% | 0.75 | 7.82 | 13.91 | 0.595 | 0.92 | -9.24 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Lệnh chờ hết hạn sau (nến) → 6 + R:R tối thiểu tới TP1 → 2.63 | 120.08 | 37.4% | 0.505 | 19.01 | 6.32 | 0.296 | 0.716 | -13.78 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: BOS → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm tối thiểu của vùng đặt SL → 2 | 70.29 | 44.2% | 0.431 | 11.15 | 6.3 | 0.375 | 0.489 | -8.8 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Cộng điểm phân kỳ dương ẩn → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 83.52 | 49.6% | 0.702 | 8.45 | 9.88 | 0.508 | 0.927 | -15.36 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: BOS → 1 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 113.42 | 51% | 0.732 | 8.04 | 14.11 | 0.597 | 0.883 | -10.49 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Trọng số phần SL (/100) → 7 + Điểm vùng: MACD cắt lên Signal → 0.563 + Cổng Dow → TẮT | 125 | 43.4% | 0.61 | 11.49 | 10.88 | 0.509 | 0.711 | -19.58 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Cộng thêm ngưỡng điểm khung 1W → -1 | 112.69 | 52% | 0.761 | 8.16 | 13.81 | 0.554 | 1.006 | -8.9 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Elliott (/100) → 6 | 109.58 | 48.6% | 0.783 | 8.42 | 13.01 | 0.578 | 1.026 | -8.15 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + % chốt ở TP1 → 0.307 | 147.67 | 36.5% | 0.504 | 19.47 | 7.58 | 0.333 | 0.679 | -12.24 |  |

### Vòng 955 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.04R, lời÷rủi ro 14.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 73.75 | 49.2% | 0.604 | 8.94 | 8.25 | 0.598 | 0.612 | -15.17 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: EMA 200 → 3 | 98.66 | 43.2% | 0.539 | 10.2 | 9.67 | 0.581 | 0.503 | -7.1 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 99.9 | 49.3% | 0.657 | 9.28 | 10.77 | 0.483 | 0.856 | -6.32 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Số TP tối đa → 2 + R:R tối thiểu tới TP1 → 2.38 | 90.25 | 42.3% | 0.537 | 10.66 | 8.47 | 0.45 | 0.633 | -6.05 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu tới TP1 → 2.38 + Cộng thêm ngưỡng điểm khung 4H → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 88.71 | 42.2% | 0.493 | 11.49 | 7.72 | 0.388 | 0.602 | -10.63 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL riêng khung 1D (ATR) → 0.3 + Ngưỡng điểm vào kèo → 74 | 106.6 | 44.8% | 0.613 | 11.05 | 9.65 | 0.481 | 0.733 | -3.12 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Trọng số phần R:R (/100) → 33 + Điểm vùng: EMA 200 → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 19.58 | 57% | 0.124 | 6.52 | 3 | 0.128 | 0.121 | -8.7 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 24.4 | 55.1% | 0.154 | 6.25 | 3.9 | 0.162 | 0.148 | -8.2 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: POC anchored → 4 + R:R tối thiểu riêng khung 1D → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 90.52 | 42% | 0.469 | 11.2 | 8.08 | 0.456 | 0.48 | -5.81 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Khung lớn phải tăng (trend ≥) → 0.375 + Lệnh chờ hết hạn sau (nến) → 8 | 109.15 | 50% | 0.7 | 8.54 | 12.78 | 0.548 | 0.867 | -10.49 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Trọng số phần SL (/100) → 7 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 108.04 | 51.4% | 0.73 | 8.03 | 13.45 | 0.557 | 0.928 | -8.9 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL riêng khung 1D (ATR) → 0.3 | 161.59 | 37.5% | 0.513 | 19.27 | 8.39 | 0.508 | 0.518 | -7.64 |  |

### Vòng 954 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.04R, lời÷rủi ro 14.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 97.75 | 51% | 0.665 | 8.45 | 11.57 | 0.594 | 0.745 | -8.7 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 62.82 | 44.3% | 0.546 | 10.67 | 5.89 | 0.367 | 0.728 | -3.3 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Mức RSI 30/70 → 1.13 | 104.92 | 50% | 0.681 | 9.24 | 11.35 | 0.484 | 0.912 | -6.32 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 108.75 | 52% | 0.725 | 8.42 | 12.92 | 0.554 | 0.921 | -8.9 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần Elliott (/100) → 10 | 96.03 | 50% | 0.658 | 8.66 | 11.09 | 0.599 | 0.724 | -7.64 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cộng thêm ngưỡng điểm khung 4H → 2 + Khung lớn phải tăng (trend ≥) → 0.425 | 106.04 | 50.7% | 0.768 | 7.95 | 13.34 | 0.555 | 1.016 | -8.93 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Ngưỡng điểm vào kèo → 77 | 119.57 | 43.8% | 0.534 | 11.37 | 10.52 | 0.557 | 0.509 | -9.88 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 97.74 | 50.7% | 0.669 | 8.86 | 11.03 | 0.576 | 0.771 | -6.8 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Cộng thêm ngưỡng điểm khung 1D → 5 + R:R tối thiểu tới TP1 → 2.63 | 94.55 | 50% | 0.775 | 8.43 | 11.22 | 0.504 | 1.065 | -10.89 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng thêm ngưỡng điểm khung 4H → -1 | 121.12 | 49.7% | 0.771 | 8.9 | 13.61 | 0.722 | 0.83 | -9.48 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 101.31 | 50.7% | 0.685 | 8.56 | 11.84 | 0.497 | 0.899 | -8.9 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 2.25 | 148.83 | 38.9% | 0.522 | 18.41 | 8.08 | 0.349 | 0.697 | -13.6 |  |

### Vòng 953 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8R, lời÷rủi ro 14.24

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Xác nhận khung nhỏ (A2) → W | 78.82 | 36.5% | 0.317 | 18.86 | 4.18 | 0.269 | 0.358 | -4.96 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + R:R tối thiểu tới TP1 → 2.38 | 91.87 | 46.3% | 0.574 | 9.16 | 10.03 | 0.456 | 0.684 | -8.9 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + SL tối đa (% Entry) → 0.425 + Điểm vùng: POC anchored → 2 | 97 | 48.3% | 0.651 | 9.11 | 10.65 | 0.511 | 0.796 | -11.46 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 148.2 | 38.6% | 0.52 | 18.53 | 8 | 0.35 | 0.689 | -11.49 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: POC volume profile cố định → 0.688 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 94.18 | 42.9% | 0.604 | 10.54 | 8.94 | 0.564 | 0.649 | -6.47 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần Elliott (/100) → 10 + Cộng điểm phân kỳ dương ẩn → 2.25 | 80.92 | 44.8% | 0.49 | 10.53 | 7.68 | 0.432 | 0.549 | -8.8 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + R:R tối thiểu tới TP1 → 2.38 | 95.2 | 47.2% | 0.584 | 8.83 | 10.78 | 0.499 | 0.661 | -3.23 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Lệnh chờ hết hạn sau (nến) → 6 + R:R tối thiểu riêng khung 1D → 2 | 87.54 | 44.7% | 0.544 | 9.91 | 8.83 | 0.542 | 0.545 | -6.32 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: BOS → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 105.23 | 48.2% | 0.746 | 8.28 | 12.71 | 0.541 | 0.932 | -10.75 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Momentum (/100) → 21 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 41.24 | 36% | 0.236 | 15.1 | 2.73 | 0.282 | 0.187 | -3.74 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Trọng số phần SL (/100) → 9 | 112.23 | 51.4% | 0.779 | 7.82 | 14.35 | 0.596 | 0.984 | -8.9 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 88.36 | 48.8% | 0.707 | 9.24 | 9.56 | 0.45 | 0.977 | -7.02 |  |
