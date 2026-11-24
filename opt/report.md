# Tối ưu tự động (chạy liên tục) — vòng 1305

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 15280 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 46.4% | 99.04R | 0.597 | 6.7R | 10.05R | 9.85 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 143 | 51.7% | 117.44R | 0.821 | 5.15R | 7.64R | 15.37 | 29 | 13.8% | -13.18R | -0.454 | 13.18R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 25 | 48% | 19.78R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 107 | 53.3% | 90.69R | 20 | 20% | -5.21R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 46.4% | 99.04R | 10.05R | 9.85 | 31 | 12.9% | -13R |
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
| Lệnh chờ hết hạn sau (nến) | 8 | **7** |
| Điểm ADX > 25 và +DI trội (Momentum) | 3 | **4** |
| Điểm ADX < 13 cạn lực giảm (Momentum) | 1.5 | **2.5** |
| Cộng điểm phân kỳ dương ẩn | 3 | **2.63** |
| Lọc BTC: giá trên EMA bao nhiêu ngày | 200 | **150** |
| Trọng số phần Trend (/100) | 30 | **15** |
| Trọng số phần Momentum (/100) | 15 | **23** |
| Trọng số phần R:R (/100) | 20 | **30** |
| Trọng số phần SL (/100) | 5 | **8** |
| Điểm vùng: BOS | 2 | **1** |
| Điểm vùng: EMA 50 | 0.75 | **0.94** |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) | 2.5 | **3.44** |
| Điểm vùng: HVN cố định | 0.25 | **0.5** |
| Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) | 1 | **0.75** |

## Các thay đổi đã nhận (mới nhất trước)

| Vòng | Thông số | Từ → Thành | Tổng R | Tỷ lệ thắng | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro |
|---|---|---|---|---|---|---|
| 1271 | Cộng thêm ngưỡng điểm khung 1D | 4 → 5 | 120.65R | 52.1% | 7.64R | 15.79 |
| 1271 | Điểm vùng: Fib 0.5 / 0.382 sóng 2 | 4 → 3 | 120.65R | 52.1% | 7.64R | 15.79 |
| 1092 | Trần điểm khi chart yếu (Trend < x) | -0.375 → -0.3 | 119.77R | 52.8% | 7.34R | 16.32 |
| 1092 | Điểm vùng: Fib 0.5 / 0.382 sóng 2 | 3 → 4 | 119.77R | 52.8% | 7.34R | 16.32 |
| 1092 | Điểm vùng: BOS | 2 → 1 | 119.77R | 52.8% | 7.34R | 16.32 |
| 1077 | Trần điểm khi chart yếu (Trend < x) | -0.3 → -0.375 | 118.06R | 52.4% | 7.5R | 15.74 |
| 1077 | Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) | 1 → 0.75 | 118.06R | 52.4% | 7.5R | 15.74 |
| 1055 | Điểm tối thiểu vùng đặt lệnh chờ | 2 → 3 | 114.12R | 51.4% | 7.82R | 14.59 |
| 1055 | Số TP tối đa | 3 → 2 | 114.12R | 51.4% | 7.82R | 14.59 |
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

## 10 vòng gần nhất

### Vòng 1305 — ngẫu nhiên nhiều thông số · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.64R, lời÷rủi ro 15.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Số TP tối đa → 1 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm tối thiểu của vùng đặt SL → 4 | 109.2 | 49% | 0.753 | 8.14 | 13.42 | 0.608 | 0.912 | -13.16 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 105.26 | 48.4% | 0.688 | 9.42 | 11.17 | 0.467 | 0.943 | -10.6 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 99.42 | 46.7% | 0.654 | 9.07 | 10.96 | 0.596 | 0.714 | -12.16 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Break mây Ichimoku → 3 | 108.14 | 48.1% | 0.684 | 8.89 | 12.16 | 0.552 | 0.835 | -12.92 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.98 | 57% | 0.19 | 5.65 | 5.31 | 0.21 | 0.171 | -8.41 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Mức MACD → 0.875 | 106.34 | 51% | 0.733 | 7.83 | 13.58 | 0.589 | 0.897 | -12.16 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: POC volume profile cố định → 0.688 | 110.41 | 48.7% | 0.708 | 8.74 | 12.63 | 0.548 | 0.89 | -14.77 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Cộng thêm ngưỡng điểm khung 4H → 2 | 113.83 | 51.7% | 0.796 | 7.59 | 15 | 0.67 | 0.938 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Break mây Ichimoku → 3 | 95.29 | 46.8% | 0.611 | 9.57 | 9.96 | 0.502 | 0.717 | -12.92 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: POC anchored → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Break mây Ichimoku → 1 | 57.02 | 42.7% | 0.518 | 10.49 | 5.44 | 0.342 | 0.715 | -7.63 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 37.26 | 40.9% | 0.423 | 9.95 | 3.74 | 0.332 | 0.538 | -5.18 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức RSI 30/70 → 0.875 | 98.94 | 50% | 0.642 | 8.96 | 11.04 | 0.55 | 0.74 | -7.96 |  |

### Vòng 1304 — ngẫu nhiên nhiều thông số · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.62R, lời÷rủi ro 15.41

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Mức MACD → 1.13 + Số TP tối đa → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 | 115.16 | 47.1% | 0.677 | 10.18 | 11.31 | 0.667 | 0.688 | -12.22 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: POC volume profile cố định → 0.688 | 116.74 | 51.4% | 0.811 | 7.85 | 14.87 | 0.636 | 1.011 | -13.18 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 112.36 | 51.4% | 0.77 | 7.76 | 14.48 | 0.608 | 0.955 | -13.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 60.71 | 41.7% | 0.347 | 13.65 | 4.45 | 0.433 | 0.249 | -13.54 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Điểm vùng: Biên mây Ichimoku → 1.35 | 110.33 | 50% | 0.766 | 8.09 | 13.64 | 0.587 | 0.961 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Fib sóng 4 → 1.56 + SL tối đa (% Entry) → 0.425 + Trọng số phần Elliott (/100) → 10 | 124.64 | 44% | 0.554 | 10.88 | 11.46 | 0.575 | 0.534 | -13.84 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Break mây Ichimoku → 1 | 104.96 | 48.6% | 0.709 | 8.5 | 12.35 | 0.568 | 0.863 | -14.01 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Cộng điểm phân kỳ dương ẩn → 3 | 117.44 | 51.7% | 0.821 | 7.62 | 15.41 | 0.654 | 1.011 | -13.18 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 114.27 | 50.7% | 0.794 | 7.99 | 14.3 | 0.604 | 1.011 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: EMA 200 → 3 + R:R tối thiểu riêng khung 1W → 2 | 90.59 | 47.9% | 0.629 | 9.5 | 9.54 | 0.405 | 0.836 | -12.82 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Mức MACD → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Lệnh chờ hết hạn sau (nến) → 6 | 84.44 | 47.4% | 0.625 | 9.11 | 9.27 | 0.549 | 0.716 | -12.58 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: HVN cố định → 0.563 | 95.7 | 49.7% | 0.669 | 8.36 | 11.45 | 0.644 | 0.697 | -10.42 |  |

### Vòng 1303 — ngẫu nhiên nhiều thông số · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.64R, lời÷rủi ro 15.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Mức RSI 30/70 → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 79.68 | 45% | 0.569 | 10.36 | 7.69 | 0.364 | 0.813 | -14.64 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Ngưỡng điểm vào kèo → 74 | 114.57 | 50.3% | 0.79 | 7.91 | 14.48 | 0.615 | 0.989 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 112.97 | 51% | 0.79 | 7.89 | 14.32 | 0.596 | 1.004 | -13.18 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: POC volume profile cố định → 0.813 | 117.44 | 51.7% | 0.821 | 7.64 | 15.37 | 0.654 | 1.011 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 113.59 | 50.3% | 0.773 | 8.11 | 14.01 | 0.61 | 0.956 | -13.18 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 114.42 | 49.3% | 0.773 | 8.06 | 14.2 | 0.523 | 1.052 | -13.08 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + SL tối đa (% Entry) → 0.425 + Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần Entry (/100) → 28 | 80.82 | 48.3% | 0.685 | 8.63 | 9.37 | 0.57 | 0.821 | -19.65 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: POC volume profile cố định → 0.688 | 123.51 | 42.3% | 0.498 | 12.41 | 9.95 | 0.525 | 0.472 | -15.36 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 102.57 | 51% | 0.707 | 8.05 | 12.74 | 0.67 | 0.748 | -12.36 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 1D → 4 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 88.76 | 37.8% | 0.349 | 17.12 | 5.18 | 0.376 | 0.324 | -6.25 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: POC anchored → 2 | 100.2 | 47.1% | 0.638 | 9.68 | 10.35 | 0.424 | 0.867 | -13.09 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 110.96 | 48.2% | 0.798 | 8.58 | 12.93 | 0.592 | 1.04 | -11.42 |  |

### Vòng 1302 — ngẫu nhiên nhiều thông số · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.64R, lời÷rủi ro 15.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: EMA 50 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Fib sóng 4 → 0.938 | 109.87 | 47.1% | 0.785 | 8.62 | 12.75 | 0.586 | 1.021 | -8.15 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Trọng số phần SL (/100) → 9 | 109.52 | 48.7% | 0.711 | 8.35 | 13.12 | 0.628 | 0.804 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Điểm vùng: EMA 21 → 1.13 | 109.37 | 50.3% | 0.754 | 8.12 | 13.47 | 0.604 | 0.925 | -12.16 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + % chốt ở TP1 → 0.287 | 95.71 | 47.4% | 0.699 | 8.49 | 11.27 | 0.458 | 0.965 | -14.98 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 90.73 | 47.1% | 0.648 | 9.16 | 9.91 | 0.42 | 0.904 | -14.99 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 4H → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 77.64 | 39.5% | 0.348 | 13.91 | 5.58 | 0.323 | 0.374 | -7.21 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 145.33 | 37.7% | 0.498 | 19.08 | 7.62 | 0.375 | 0.619 | -11.91 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Trend (/100) → 12 + Điểm vùng: HVN anchored → 0.313 | 95.55 | 48.3% | 0.65 | 8.53 | 11.2 | 0.582 | 0.716 | -14.02 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + SL tối đa (% Entry) → 0.425 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Mức MACD → 0.875 | 105.1 | 39.4% | 0.406 | 15.43 | 6.81 | 0.388 | 0.421 | -5.74 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: EMA 21 → 0.875 | 52.31 | 40.2% | 0.412 | 12.47 | 4.19 | 0.34 | 0.49 | -12.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Break mây Ichimoku → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 127.75 | 41.1% | 0.372 | 12.79 | 9.99 | 0.349 | 0.393 | -3.19 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: Mức MACD → 1.13 | 108.32 | 48.3% | 0.757 | 8.21 | 13.19 | 0.575 | 0.959 | -12.16 |  |

### Vòng 1301 — ngẫu nhiên nhiều thông số · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.62R, lời÷rủi ro 15.41

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: POC anchored → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 96.1 | 46.3% | 0.601 | 9.83 | 9.78 | 0.403 | 0.819 | -9.95 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + % chốt ở TP1 → 0.307 + R:R tối thiểu riêng khung 1W → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 94.13 | 46.2% | 0.658 | 9.27 | 10.15 | 0.534 | 0.777 | -13.27 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Mức MACD → 1.13 + Trọng số phần Momentum (/100) → 25 | 107.65 | 50.3% | 0.753 | 8.07 | 13.34 | 0.579 | 0.95 | -13.18 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 123.47 | 41.1% | 0.393 | 12.18 | 10.14 | 0.372 | 0.411 | -8.71 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần Divergence (/100) → 9 + Trọng số phần R:R (/100) → 28 | 104.31 | 47.9% | 0.735 | 8.57 | 12.17 | 0.531 | 0.95 | -12.16 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Biên mây Ichimoku → 1.05 + Số TP tối đa → 3 | 106 | 45.4% | 0.65 | 10.82 | 9.8 | 0.644 | 0.656 | -12.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: BOS → 2 + Lệnh chờ hết hạn sau (nến) → 6 | 90.94 | 47% | 0.689 | 8.68 | 10.48 | 0.522 | 0.889 | -11.8 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 97.55 | 44.2% | 0.625 | 10.22 | 9.55 | 0.518 | 0.73 | -12.85 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 | 91.81 | 36.3% | 0.37 | 20.58 | 4.46 | 0.196 | 0.545 | 0.08 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Trọng số phần R:R (/100) → 28 | 115.22 | 50.3% | 0.806 | 7.85 | 14.68 | 0.659 | 0.968 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: EMA 50 → 0.75 | 117.86 | 51% | 0.76 | 8.34 | 14.13 | 0.566 | 0.991 | -13.18 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng thêm ngưỡng điểm khung 4H → -1 | 106.57 | 51.7% | 0.735 | 7.84 | 13.59 | 0.67 | 0.806 | -12.36 |  |

### Vòng 1300 — ngẫu nhiên nhiều thông số · mốc: tổng 118.72R, win 52.4%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.96

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần Divergence (/100) → 9 + R:R tối thiểu riêng khung 1D → 2 | 108.78 | 46.2% | 0.629 | 9.26 | 11.75 | 0.599 | 0.657 | -7.91 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: POC volume profile cố định → 0.813 | 113.52 | 36.4% | 0.405 | 20.3 | 5.59 | 0.326 | 0.488 | -10.66 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 112.06 | 50% | 0.778 | 7.86 | 14.26 | 0.608 | 0.973 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 105.85 | 49% | 0.692 | 8.3 | 12.75 | 0.634 | 0.753 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 104.27 | 47.3% | 0.695 | 8.64 | 12.07 | 0.652 | 0.738 | -11.14 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + % chốt ở TP1 → 0.307 + Điểm vùng: HVN cố định → 0.438 | 114.06 | 50% | 0.792 | 7.74 | 14.74 | 0.636 | 0.967 | -11.15 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Cộng thêm ngưỡng điểm khung 1D → 7 + Đệm SL riêng khung 4H (ATR) → 0.3 | 155.31 | 37.5% | 0.53 | 18.73 | 8.29 | 0.404 | 0.659 | -7.71 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần R:R (/100) → 28 + Điểm vùng: HVN anchored → 0.188 | 115.8 | 50.7% | 0.804 | 7.73 | 14.98 | 0.658 | 0.968 | -12.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: POC volume profile cố định → 0.688 | 69.52 | 43.4% | 0.437 | 11.34 | 6.13 | 0.502 | 0.381 | -5.06 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 110.76 | 50.3% | 0.775 | 7.99 | 13.86 | 0.587 | 0.982 | -12.14 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 113.15 | 50% | 0.775 | 7.6 | 14.89 | 0.676 | 0.88 | -12.03 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: HVN cố định → 0.563 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: POC volume profile cố định → 0.688 | 102.76 | 48.7% | 0.685 | 8.76 | 11.73 | 0.611 | 0.777 | -10.9 |  |

### Vòng 1299 — ngẫu nhiên nhiều thông số · mốc: tổng 118.72R, win 52.4%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.96

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + SL tối đa (% Entry) → 0.425 + Trọng số phần Elliott (/100) → 6 | 117.71 | 52.1% | 0.817 | 7.48 | 15.74 | 0.67 | 0.982 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Trọng số phần SL (/100) → 7 + Coin phải mạnh hơn BTC trong N ngày → 14 + Cộng thêm ngưỡng điểm khung 1D → 7 | 82.52 | 48.7% | 0.705 | 8.54 | 9.66 | 0.504 | 0.948 | -17.6 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: HVN anchored → 0.313 + R:R tối thiểu riêng khung 1D → 2 + % chốt ở TP1 → 0.287 | 106.12 | 45.1% | 0.613 | 9.46 | 11.22 | 0.613 | 0.614 | -6.7 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 30.15 | 56.9% | 0.188 | 5.99 | 5.03 | 0.237 | 0.144 | -7.16 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 117.97 | 52.1% | 0.819 | 7.42 | 15.9 | 0.67 | 0.986 | -10.84 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib sóng 4 → 1.56 | 126.53 | 41.5% | 0.404 | 12.1 | 10.46 | 0.384 | 0.421 | -10.72 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 31.24 | 57.6% | 0.198 | 5.81 | 5.38 | 0.226 | 0.171 | -8.18 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 97.27 | 49.3% | 0.666 | 8.36 | 11.64 | 0.611 | 0.73 | -10.72 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: BOS → 0 | 114.99 | 50% | 0.788 | 7.6 | 15.13 | 0.676 | 0.906 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Cộng thêm ngưỡng điểm khung 4H → 2 | 113.83 | 51.7% | 0.796 | 7.73 | 14.73 | 0.67 | 0.938 | -12.16 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Cộng điểm phân kỳ dương ẩn → 3 + Lệnh chờ hết hạn sau (nến) → 6 | 93.74 | 46.9% | 0.732 | 8.76 | 10.7 | 0.613 | 0.885 | -10.03 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: POC volume profile cố định → 0.688 | 106.57 | 51.7% | 0.735 | 8.07 | 13.21 | 0.67 | 0.806 | -11.34 |  |

### Vòng 1298 — ngẫu nhiên nhiều thông số · mốc: tổng 118.72R, win 52.4%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.96

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số TP tối đa → 1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Fib sóng 4 → 1.56 | 29.19 | 56.9% | 0.182 | 6.21 | 4.7 | 0.195 | 0.171 | -8.19 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + R:R tối thiểu riêng khung 4H → 2 + Cộng thêm ngưỡng điểm khung 1D → 4 | 113.14 | 34.1% | 0.273 | 24.42 | 4.63 | 0.253 | 0.29 | -17.45 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 21 → 1.13 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 116.36 | 48.3% | 0.781 | 8.32 | 13.99 | 0.752 | 0.815 | -11.76 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Cộng thêm ngưỡng điểm khung 1W → 2 | 117.97 | 51.7% | 0.825 | 7.52 | 15.69 | 0.676 | 0.989 | -12.57 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 95.18 | 48.8% | 0.774 | 8.35 | 11.4 | 0.508 | 1.062 | -13.97 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 54.43 | 40.5% | 0.315 | 14.51 | 3.75 | 0.409 | 0.209 | -13.54 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: BOS → 0 | 108.78 | 46.2% | 0.629 | 9.26 | 11.75 | 0.599 | 0.657 | -8.93 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Ngưỡng điểm vào kèo → 74 | 116.28 | 50.7% | 0.796 | 7.65 | 15.2 | 0.643 | 0.968 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Biên mây Ichimoku → 1.05 | 89.8 | 39.2% | 0.359 | 16.07 | 5.59 | 0.381 | 0.34 | -3.78 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 115.5 | 51.8% | 0.831 | 7.38 | 15.65 | 0.657 | 1.023 | -12.16 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: EMA 21 → 0.875 + Cộng thêm ngưỡng điểm khung 1W → -1 | 113.19 | 47.4% | 0.735 | 8.78 | 12.89 | 0.625 | 0.854 | -12.55 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Đệm SL riêng khung 1W (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: POC volume profile cố định → 0.813 | 95.32 | 43% | 0.603 | 10.74 | 8.88 | 0.391 | 0.816 | -13.38 |  |

### Vòng 1297 — ngẫu nhiên nhiều thông số · mốc: tổng 118.72R, win 52.4%, rủi ro tụt vốn 7.45R, lời÷rủi ro 15.94

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Cộng điểm phân kỳ dương ẩn → 3 | 115.52 | 52.1% | 0.814 | 7.45 | 15.51 | 0.637 | 1.011 | -9.14 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: POC anchored → 4 | 129.03 | 49.7% | 0.801 | 8.26 | 15.62 | 0.771 | 0.835 | -6.61 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 69.57 | 47.1% | 0.575 | 9.27 | 7.5 | 0.553 | 0.601 | -17.27 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Cổng Dow → CHẶT + Đệm SL riêng khung 1D (ATR) → 0.3 | 69.67 | 46.9% | 0.544 | 9.76 | 7.14 | 0.402 | 0.645 | -12.84 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Xác nhận khung nhỏ (A2) → W | 110.58 | 39.6% | 0.405 | 16.22 | 6.82 | 0.38 | 0.427 | -9.85 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: HVN cố định → 0.563 + Đệm SL riêng khung 1W (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 50.02 | 39.8% | 0.463 | 12.25 | 4.08 | 0.436 | 0.497 | -8.72 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 114.53 | 51% | 0.801 | 7.87 | 14.55 | 0.63 | 0.995 | -10.85 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Elliott (/100) → 10 + Điểm tối thiểu của vùng đặt SL → 2 | 66.8 | 44% | 0.613 | 10.01 | 6.67 | 0.444 | 0.812 | -4.67 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + % chốt ở TP1 → 0.287 + R:R tối thiểu tới TP1 → 2.63 + Đệm SL riêng khung 1W (ATR) → 0.3 | 83.63 | 43.2% | 0.634 | 10.66 | 7.85 | 0.386 | 0.897 | -14.79 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 101.77 | 50.3% | 0.692 | 8.12 | 12.53 | 0.661 | 0.728 | -10.63 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Cộng thêm ngưỡng điểm khung 1W → -1 | 109.19 | 50.3% | 0.753 | 8.1 | 13.48 | 0.529 | 1.006 | -7.58 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Coin phải mạnh hơn BTC trong N ngày → 14 | 84.58 | 48.7% | 0.723 | 8.5 | 9.95 | 0.536 | 0.948 | -17.5 |  |

### Vòng 1296 — ngẫu nhiên nhiều thông số · mốc: tổng 115.96R, win 52.5%, rủi ro tụt vốn 7.32R, lời÷rủi ro 15.84

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: HVN anchored → 0.313 | 96.14 | 49.7% | 0.672 | 8.68 | 11.08 | 0.588 | 0.766 | -12.95 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.563 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 139.81 | 36.9% | 0.496 | 18.9 | 7.4 | 0.528 | 0.461 | -18.66 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 80.64 | 37.3% | 0.31 | 17.7 | 4.56 | 0.365 | 0.26 | -9.5 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 1W (ATR) → 0.3 | 107.47 | 47.6% | 0.741 | 8.84 | 12.16 | 0.501 | 0.984 | -14.16 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: POC volume profile cố định → 0.813 + R:R tối thiểu riêng khung 1D → 2 | 93.61 | 43.9% | 0.596 | 10.21 | 9.17 | 0.552 | 0.635 | -10.49 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Mức RSI 30/70 → 1.13 | 112.26 | 50% | 0.791 | 7.82 | 14.36 | 0.647 | 0.943 | -12.16 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 17.26 | 36.4% | 0.196 | 13.04 | 1.32 | 0.076 | 0.378 | -5.41 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Trọng số phần Momentum (/100) → 21 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Đệm SL riêng khung 1D (ATR) → 0.3 | 113.87 | 45.4% | 0.699 | 10.57 | 10.77 | 0.69 | 0.706 | -9.49 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: POC volume profile cố định → 0.813 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: HVN cố định → 0.438 | 110.24 | 50.7% | 0.776 | 7.77 | 14.19 | 0.622 | 0.945 | -10.85 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng thêm ngưỡng điểm khung 4H → 2 | 119.04 | 50% | 0.804 | 8.1 | 14.7 | 0.759 | 0.858 | -13.77 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần SL (/100) → 7 | 113.2 | 51.8% | 0.803 | 7.53 | 15.03 | 0.617 | 1.008 | -12.31 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: HVN anchored → 0.188 + Lệnh chờ hết hạn sau (nến) → 6 | 90.64 | 44.8% | 0.556 | 9.63 | 9.41 | 0.562 | 0.55 | -5.87 |  |
