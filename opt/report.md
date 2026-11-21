# Tối ưu tự động (chạy liên tục) — vòng 1031

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 12027 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 46.4% | 95.04R | 0.573 | 6.44R | 10.15R | 9.36 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 145 | 52.4% | 113.95R | 0.786 | 5.09R | 7.93R | 14.37 | 27 | 18.5% | -8.9R | -0.33 | 10.54R |

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
| Bot thật | 166 | 46.4% | 95.04R | 10.15R | 9.36 | 30 | 13.3% | -11.98R |
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

### Vòng 1031 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.93R, lời÷rủi ro 14.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: EMA 50 → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 106.46 | 46% | 0.661 | 10.68 | 9.97 | 0.582 | 0.732 | -3.28 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Biên mây Ichimoku → 1.05 | 102.42 | 51% | 0.697 | 8.29 | 12.35 | 0.545 | 0.859 | -9.73 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần R:R (/100) → 28 | 26.89 | 55.6% | 0.159 | 6.93 | 3.88 | 0.19 | 0.131 | -10.34 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 4H → 2 | 88.71 | 33.1% | 0.251 | 25.56 | 3.47 | 0.199 | 0.292 | -22.69 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + R:R tối thiểu riêng khung 1W → 2 + Xác nhận khung nhỏ (A2) → W | 83.76 | 39.7% | 0.353 | 16.58 | 5.05 | 0.35 | 0.356 | -2.57 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: HVN cố định → 0.438 | 96.64 | 45.7% | 0.559 | 9.51 | 10.16 | 0.563 | 0.554 | -7.99 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 32.2 | 39.1% | 0.35 | 11.51 | 2.8 | 0.312 | 0.398 | -7.55 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 37.25 | 40.4% | 0.419 | 10.22 | 3.64 | 0.342 | 0.512 | -7.55 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: POC anchored → 4 + Trọng số phần Trend (/100) → 12 + Xác nhận khung nhỏ (A2) → W | 113.49 | 37% | 0.372 | 20.18 | 5.62 | 0.422 | 0.331 | -1.63 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Divergence (/100) → 9 | 77.84 | 49.2% | 0.638 | 9.31 | 8.36 | 0.508 | 0.781 | -15.36 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 58.67 | 45.3% | 0.428 | 11.08 | 5.3 | 0.271 | 0.624 | -8.54 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 87.03 | 47.3% | 0.58 | 10.02 | 8.69 | 0.449 | 0.719 | -10.95 |  |

### Vòng 1030 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.98R, lời÷rủi ro 14.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cổng Dow → CHẶT + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Cộng thêm ngưỡng điểm khung 1D → 5 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 54.67 | 44% | 0.502 | 9.69 | 5.64 | 0.101 | 0.895 | -12 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: BOS → 1 | 112.94 | 52.1% | 0.774 | 8 | 14.12 | 0.571 | 1.006 | -8.9 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm tối thiểu của vùng đặt SL → 2 + Cổng Dow → CHẶT + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 47.98 | 48.1% | 0.592 | 8.14 | 5.89 | 0.166 | 1.008 | -5.85 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 125.69 | 45.2% | 0.551 | 10.86 | 11.57 | 0.575 | 0.526 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 57.58 | 45.6% | 0.64 | 9.38 | 6.14 | 0.399 | 0.903 | -10.9 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 70.34 | 46.5% | 0.554 | 9.39 | 7.49 | 0.399 | 0.717 | -10.56 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm vùng: HVN cố định → 0.563 + R:R tối thiểu riêng khung 1W → 2 | 106.99 | 51.7% | 0.728 | 8.08 | 13.24 | 0.62 | 0.834 | -9.93 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm tối thiểu của vùng đặt SL → 4 + Cộng thêm ngưỡng điểm khung 4H → 2 | 90.28 | 45.6% | 0.606 | 9.42 | 9.58 | 0.435 | 0.794 | -7.46 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: BOS → 3 | 102.16 | 44.1% | 0.571 | 12.5 | 8.17 | 0.498 | 0.638 | -2.4 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Elliott (/100) → 6 | 96.88 | 50.3% | 0.65 | 8.78 | 11.03 | 0.581 | 0.728 | -8.7 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Ngưỡng điểm vào kèo → 77 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Số TP tối đa → 2 | 29.3 | 57.2% | 0.193 | 5.77 | 5.08 | 0.221 | 0.167 | -8.81 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần R:R (/100) → 28 | 110.49 | 51% | 0.773 | 7.84 | 14.09 | 0.581 | 0.984 | -8.9 |  |

### Vòng 1029 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.05R, lời÷rủi ro 14.16

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Fib sóng 4 → 0.938 | 58.21 | 40.3% | 0.489 | 12.75 | 4.57 | 0.269 | 0.672 | -2.69 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + R:R tối thiểu riêng khung 1W → 2 + % chốt ở TP1 → 0.307 + Điểm vùng: POC anchored → 2 | 93.3 | 49.7% | 0.626 | 9.07 | 10.29 | 0.525 | 0.721 | -9.95 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 63.71 | 45.5% | 0.569 | 10.13 | 6.29 | 0.389 | 0.743 | 1.47 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần Divergence (/100) → 9 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 111.57 | 48.4% | 0.729 | 8.61 | 12.96 | 0.493 | 0.994 | -12.06 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Đệm SL riêng khung 1D (ATR) → 0.3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 82.16 | 44.8% | 0.575 | 11.08 | 7.42 | 0.647 | 0.514 | -6.47 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN anchored → 0.188 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 120.06 | 42% | 0.385 | 11.97 | 10.03 | 0.32 | 0.439 | -7.45 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 80.96 | 45.5% | 0.566 | 10.42 | 7.77 | 0.416 | 0.706 | -10.55 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Mức MACD → 0.875 | 107.53 | 50.7% | 0.727 | 8.4 | 12.8 | 0.549 | 0.925 | -6.59 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Cổng Dow → TẮT | 128.94 | 44.2% | 0.648 | 11.21 | 11.5 | 0.643 | 0.652 | -21.69 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 91.58 | 45.9% | 0.627 | 9.75 | 9.39 | 0.463 | 0.815 | -7.11 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Cộng thêm ngưỡng điểm khung 4H → -1 | 129.93 | 44.5% | 0.622 | 11.21 | 11.59 | 0.536 | 0.708 | -21.67 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Cổng Dow → TẮT + Trần điểm khi chart yếu (Trend < x) → -0.225 | 130.13 | 44.3% | 0.614 | 11.85 | 10.98 | 0.517 | 0.709 | -13.71 |  |

### Vòng 1028 — ngẫu nhiên nhiều thông số · mốc: tổng 110.87R, win 51.8%, rủi ro tụt vốn 8.16R, lời÷rủi ro 13.59

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Biên mây Ichimoku → 1.35 | 93.55 | 49.2% | 0.754 | 9.03 | 10.36 | 0.474 | 1.045 | -8.54 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 133.9 | 46.7% | 0.595 | 10.69 | 12.53 | 0.659 | 0.532 | -4.93 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Cộng thêm ngưỡng điểm khung 4H → -1 | 109.39 | 50.7% | 0.781 | 8.26 | 13.24 | 0.64 | 0.918 | -4.86 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Mức RSI 30/70 → 0.875 | 114.31 | 51.3% | 0.742 | 8.69 | 13.15 | 0.619 | 0.873 | -3.49 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 28.82 | 58.4% | 0.193 | 5.79 | 4.98 | 0.22 | 0.171 | -6.91 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Khung lớn phải tăng (trend ≥) → 0.425 | 113.2 | 42.6% | 0.602 | 11.98 | 9.45 | 0.492 | 0.715 | -17.22 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Momentum (/100) → 25 | 93.77 | 49.3% | 0.66 | 8.68 | 10.8 | 0.589 | 0.738 | -4.28 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 80.6 | 45% | 0.504 | 10.61 | 7.6 | 0.487 | 0.521 | -3.94 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: POC volume profile cố định → 0.688 | 117.24 | 50.7% | 0.792 | 8.2 | 14.3 | 0.785 | 0.8 | -5.44 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 37.57 | 41.4% | 0.432 | 9.72 | 3.87 | 0.372 | 0.506 | -5.5 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 98.38 | 48.2% | 0.698 | 8.88 | 11.08 | 0.52 | 0.9 | -4.51 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Ngưỡng điểm vào kèo → 77 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: EMA 50 → 1.13 | 105.25 | 49.7% | 0.736 | 8.48 | 12.41 | 0.575 | 0.914 | -4.87 |  |

### Vòng 1027 — ngẫu nhiên nhiều thông số · mốc: tổng 115.01R, win 52.8%, rủi ro tụt vốn 7.73R, lời÷rủi ro 14.88

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Cổng Dow → CHẶT + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Mức MACD → 0.875 | 52.36 | 49% | 0.534 | 8.48 | 6.17 | 0.195 | 0.86 | -12.51 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 156.79 | 38.6% | 0.535 | 17.83 | 8.79 | 0.473 | 0.597 | -10.42 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Fib sóng 4 → 0.938 + Đệm SL riêng khung 4H (ATR) → 0.3 | 156.66 | 38.9% | 0.529 | 18.11 | 8.65 | 0.414 | 0.649 | -12.27 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trọng số phần Trend (/100) → 19 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 137.44 | 45.5% | 0.645 | 10.98 | 12.52 | 0.595 | 0.695 | -19.58 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 118.42 | 41.8% | 0.381 | 12.24 | 9.67 | 0.341 | 0.414 | -7.91 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: EMA 200 → 1 | 151.42 | 39.1% | 0.524 | 18.21 | 8.32 | 0.32 | 0.729 | 0.52 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + R:R tối thiểu riêng khung 4H → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 86.09 | 39.7% | 0.329 | 12.16 | 7.08 | 0.34 | 0.32 | -14.49 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Cộng điểm phân kỳ dương ẩn → 3 | 114.56 | 52.4% | 0.79 | 7.9 | 14.5 | 0.613 | 0.985 | -8.9 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: EMA 50 → 1.13 | 83.06 | 48.7% | 0.71 | 8.35 | 9.95 | 0.535 | 0.914 | -14.34 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.1 | 57.1% | 0.202 | 5.89 | 5.28 | 0.246 | 0.16 | -7.86 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 112.46 | 51.4% | 0.76 | 7.9 | 14.24 | 0.563 | 0.985 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 109.77 | 51.4% | 0.773 | 7.89 | 13.91 | 0.555 | 1.017 | -8.9 |  |

### Vòng 1026 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.79R, lời÷rủi ro 14.63

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 85.8 | 48.8% | 0.698 | 8.34 | 10.29 | 0.576 | 0.825 | -14.42 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trọng số phần Momentum (/100) → 21 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 93.37 | 43.8% | 0.53 | 10.39 | 8.99 | 0.527 | 0.534 | -12.89 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: HVN anchored → 0.188 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 76 | 47.7% | 0.685 | 9.15 | 8.31 | 0.446 | 0.928 | -14.1 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 1D → 3 | 112.83 | 51.7% | 0.768 | 8 | 14.1 | 0.575 | 0.985 | -8.9 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 200 → 1 | 129.42 | 49.1% | 0.794 | 8.95 | 14.46 | 0.796 | 0.792 | -4.96 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Trọng số phần Trend (/100) → 12 | 111.6 | 50.7% | 0.775 | 7.95 | 14.04 | 0.602 | 0.963 | -8.9 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: POC volume profile cố định → 0.813 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 30.51 | 58.6% | 0.194 | 5.47 | 5.58 | 0.223 | 0.169 | -6.97 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Break mây Ichimoku → 1 | 101.7 | 49% | 0.692 | 8.72 | 11.66 | 0.529 | 0.867 | -8.31 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 106.99 | 51.7% | 0.728 | 7.97 | 13.42 | 0.62 | 0.834 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + % chốt ở TP1 → 0.287 | 16.39 | 36.1% | 0.197 | 13.59 | 1.21 | 0.094 | 0.354 | -7.45 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + R:R tối thiểu tới TP1 → 2.38 + Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1W (ATR) → 0.3 | 92.53 | 42.9% | 0.568 | 10.27 | 9.01 | 0.563 | 0.571 | -11.65 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Cộng điểm phân kỳ dương ẩn → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Momentum (/100) → 21 | 112.22 | 46.7% | 0.664 | 10.4 | 10.79 | 0.618 | 0.707 | -3.97 |  |

### Vòng 1025 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.02R, lời÷rủi ro 14.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 110.32 | 49.3% | 0.799 | 8.7 | 12.68 | 0.588 | 1.051 | -8.13 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: HVN cố định → 0.563 | 114.26 | 51.4% | 0.783 | 8.24 | 13.87 | 0.62 | 0.964 | -7.61 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: EMA 21 → 0.875 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 115.87 | 47.3% | 0.686 | 9.92 | 11.68 | 0.601 | 0.787 | -5.61 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Xác nhận khung nhỏ (A2) → W + Trọng số phần Momentum (/100) → 25 | 56.03 | 38.2% | 0.282 | 17.38 | 3.22 | 0.212 | 0.341 | -11.48 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 109.19 | 49% | 0.704 | 9.43 | 11.58 | 0.513 | 0.963 | -8.15 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Số TP tối đa → 2 + Điểm vùng: POC anchored → 4 + Điểm vùng: Biên mây Ichimoku → 1.35 | 111.95 | 50.3% | 0.751 | 8.3 | 13.49 | 0.583 | 0.918 | -4 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN anchored → 0.313 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 82.58 | 39.1% | 0.281 | 13.43 | 6.15 | 0.245 | 0.313 | -9.06 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Break mây Ichimoku → 3 | 105.31 | 48.8% | 0.642 | 9.46 | 11.13 | 0.496 | 0.808 | -8.64 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + SL tối đa (% Entry) → 0.425 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần Elliott (/100) → 6 | 97.69 | 48.1% | 0.746 | 8.79 | 11.11 | 0.496 | 1 | -10.63 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 + Coin phải mạnh hơn BTC trong N ngày → 14 | 95.76 | 43.1% | 0.341 | 12.29 | 7.79 | 0.312 | 0.365 | -14.97 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Cổng Dow → TẮT | 129.93 | 44.5% | 0.622 | 11.32 | 11.48 | 0.536 | 0.708 | -20.65 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + SL tối đa (% Entry) → 0.425 | 96.85 | 49.7% | 0.65 | 8.79 | 11.02 | 0.6 | 0.703 | -7.37 |  |

### Vòng 1024 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.95R, lời÷rủi ro 14.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: EMA 200 → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 72.73 | 44.9% | 0.466 | 9.69 | 7.51 | 0.364 | 0.559 | -11.24 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cộng điểm phân kỳ dương ẩn → 2.25 + Xác nhận khung nhỏ (A2) → W | 105.55 | 40.2% | 0.4 | 15.59 | 6.77 | 0.372 | 0.425 | -4.23 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: EMA 50 → 1.13 | 104.17 | 49.3% | 0.685 | 8.61 | 12.1 | 0.558 | 0.812 | -3.79 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 90.07 | 47.7% | 0.605 | 9.27 | 9.72 | 0.609 | 0.599 | -10.28 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: Mức MACD → 0.875 + Trọng số phần R:R (/100) → 33 + Điểm vùng: EMA 200 → 3 | 99.92 | 49% | 0.68 | 8.77 | 11.39 | 0.487 | 0.88 | -8.6 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 25.17 | 57.1% | 0.171 | 6.13 | 4.11 | 0.219 | 0.125 | -9.48 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 99.12 | 41.3% | 0.33 | 13.13 | 7.55 | 0.306 | 0.352 | -8.78 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Divergence (/100) → 9 + Đệm SL riêng khung 1D (ATR) → 0.3 + SL tối đa (% Entry) → 0.425 | 111.41 | 46.7% | 0.659 | 10.4 | 10.71 | 0.628 | 0.687 | -4.3 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Cộng điểm phân kỳ dương ẩn → 2.25 + Đệm SL riêng khung 1D (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 106.82 | 44.5% | 0.617 | 11.53 | 9.26 | 0.552 | 0.679 | -6.62 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần SL (/100) → 9 + Xác nhận khung nhỏ (A2) → W | 66.76 | 35.5% | 0.316 | 19.62 | 3.4 | 0.304 | 0.33 | -3.17 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: BOS → 1 + Trọng số phần Elliott (/100) → 10 | 112.23 | 51.4% | 0.779 | 7.97 | 14.08 | 0.596 | 0.984 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần Entry (/100) → 28 + Điểm vùng: POC anchored → 4 | 105.83 | 49.7% | 0.683 | 8.5 | 12.45 | 0.521 | 0.846 | -5.94 |  |

### Vòng 1023 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.28R, lời÷rủi ro 13.49

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Đệm SL riêng khung 1D (ATR) → 0.3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 94.39 | 43% | 0.597 | 12.18 | 7.75 | 0.477 | 0.696 | -4.37 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 111.21 | 50.7% | 0.762 | 8.25 | 13.48 | 0.557 | 0.997 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: POC volume profile cố định → 0.688 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 30.72 | 59.1% | 0.187 | 6.22 | 4.94 | 0.207 | 0.169 | -9.69 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 99.66 | 50.7% | 0.702 | 8.43 | 11.82 | 0.628 | 0.782 | -8.12 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Trọng số phần Trend (/100) → 12 + Số TP tối đa → 2 + Cổng Dow → TẮT | 123.97 | 44.1% | 0.614 | 11.7 | 10.6 | 0.533 | 0.694 | -21.62 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Ngưỡng điểm vào kèo → 77 + Trọng số phần Momentum (/100) → 21 | 112.54 | 50.7% | 0.793 | 7.86 | 14.32 | 0.624 | 0.976 | -8.9 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 63.31 | 45.4% | 0.586 | 9.66 | 6.55 | 0.422 | 0.77 | -4.47 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 1D → 3 | 104.6 | 50% | 0.707 | 8.35 | 12.53 | 0.586 | 0.827 | -8.9 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC anchored → 4 + R:R tối thiểu riêng khung 4H → 2 + Trọng số phần R:R (/100) → 33 | 58.92 | 38.1% | 0.27 | 14.96 | 3.94 | 0.212 | 0.327 | -0.46 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Momentum (/100) → 21 + Cổng Dow → CHẶT | 67.5 | 45.4% | 0.567 | 9.09 | 7.43 | 0.249 | 0.87 | -9.2 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần Momentum (/100) → 25 | 101.4 | 48.6% | 0.685 | 8.79 | 11.54 | 0.501 | 0.908 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 96.99 | 50% | 0.674 | 8.53 | 11.37 | 0.62 | 0.733 | -8.66 |  |

### Vòng 1022 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.98R, lời÷rủi ro 14.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 110.14 | 50% | 0.754 | 8.23 | 13.38 | 0.602 | 0.915 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Entry (/100) → 33 | 108.24 | 50.3% | 0.757 | 8.2 | 13.2 | 0.565 | 0.968 | -8.72 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Cổng Dow → CHẶT + R:R tối thiểu riêng khung 1D → 2 | 73.58 | 47.2% | 0.518 | 8.74 | 8.42 | 0.38 | 0.622 | -8.58 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 19.5 | 41.1% | 0.348 | 9.04 | 2.16 | 0.2 | 0.476 | -2.78 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Trend (/100) → 19 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 58.21 | 40.3% | 0.489 | 12.69 | 4.59 | 0.269 | 0.672 | -2.69 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 | 99.63 | 44.8% | 0.579 | 9.8 | 10.17 | 0.579 | 0.579 | -7.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + SL tối đa (% Entry) → 0.425 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 119.34 | 49.1% | 0.751 | 8.9 | 13.41 | 0.704 | 0.805 | -9.48 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Coin phải mạnh hơn BTC trong N ngày → 14 | 84.43 | 50% | 0.715 | 8.38 | 10.08 | 0.515 | 0.952 | -15.36 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Cổng Dow → TẮT | 126.06 | 43.1% | 0.597 | 12.25 | 10.29 | 0.484 | 0.716 | -21.15 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 158.61 | 38.4% | 0.52 | 18.15 | 8.74 | 0.468 | 0.576 | -9.14 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Cộng thêm ngưỡng điểm khung 1W → -1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 91.58 | 45.9% | 0.627 | 9.45 | 9.69 | 0.463 | 0.815 | -6.09 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Số TP tối đa → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 108.6 | 48.7% | 0.696 | 8.76 | 12.4 | 0.548 | 0.86 | -10.27 |  |
