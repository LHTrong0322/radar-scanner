# Tối ưu tự động (chạy liên tục) — vòng 1334

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 15628 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 101.16R | 0.609 | 6.7R | 9.76R | 10.36 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 143 | 52.4% | 119.56R | 0.836 | 5.15R | 7.47R | 16.01 | 29 | 13.8% | -13.18R | -0.454 | 13.18R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 25 | 48% | 19.78R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 107 | 54.2% | 92.81R | 20 | 20% | -5.21R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 101.16R | 9.76R | 10.36 | 31 | 12.9% | -13R |
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

### Vòng 1334 — ngẫu nhiên nhiều thông số · mốc: tổng 119.56R, win 52.4%, rủi ro tụt vốn 7.47R, lời÷rủi ro 16.01

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Xác nhận khung nhỏ (A2) → W + Cộng điểm phân kỳ dương ẩn → 2.25 | 103.55 | 38.7% | 0.404 | 16.41 | 6.31 | 0.358 | 0.447 | -10.2 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Fib sóng 4 → 0.938 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 114.65 | 51% | 0.802 | 7.91 | 14.49 | 0.61 | 1.013 | -13.18 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 70.83 | 45.4% | 0.595 | 9.91 | 7.15 | 0.397 | 0.834 | -8.72 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: POC anchored → 4 + Điểm vùng: Mức MACD → 1.13 + Xác nhận khung nhỏ (A2) → W | 106.01 | 39% | 0.402 | 15.82 | 6.7 | 0.343 | 0.454 | -4.4 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần Divergence (/100) → 9 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: POC volume profile cố định → 0.813 | 114.42 | 51% | 0.8 | 7.64 | 14.98 | 0.642 | 0.97 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Break mây Ichimoku → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 | 104.78 | 46.7% | 0.62 | 11.22 | 9.34 | 0.65 | 0.592 | -11.72 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: BOS → 0 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 114.18 | 51% | 0.777 | 7.85 | 14.55 | 0.59 | 0.994 | -13.16 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Trần điểm khi chart yếu (Trend < x) → -0.375 + R:R tối thiểu riêng khung 1W → 2 | 104.79 | 49.7% | 0.733 | 8.27 | 12.67 | 0.572 | 0.891 | -14.22 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 100.14 | 48.6% | 0.677 | 8.85 | 11.32 | 0.483 | 0.898 | -13.18 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: MACD cắt lên Signal → 0.563 | 108.16 | 46% | 0.622 | 9.11 | 11.87 | 0.579 | 0.661 | -10.64 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: BOS → 2 + Điểm tối thiểu của vùng đặt SL → 2 | 37.58 | 41.6% | 0.422 | 9.83 | 3.82 | 0.332 | 0.533 | -5.88 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 105.49 | 47.1% | 0.681 | 9.08 | 11.62 | 0.6 | 0.766 | -12.16 |  |

### Vòng 1333 — ngẫu nhiên nhiều thông số · mốc: tổng 116.09R, win 51.8%, rủi ro tụt vốn 7.5R, lời÷rủi ro 15.48

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Xác nhận khung nhỏ (A2) → W | 51.17 | 35.7% | 0.203 | 20.96 | 2.44 | 0.397 | -0.014 | -11.47 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần R:R (/100) → 33 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 18.95 | 49.7% | 0.116 | 7.85 | 2.41 | 0.155 | 0.08 | -9.44 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 1D → 4 | 108.93 | 42.6% | 0.559 | 12.36 | 8.81 | 0.507 | 0.603 | -10.14 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức MACD → 0.875 | 95.68 | 39.5% | 0.335 | 13.6 | 7.04 | 0.335 | 0.334 | -10.48 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trọng số phần Trend (/100) → 19 | 109.18 | 49.6% | 0.774 | 7.99 | 13.66 | 0.571 | 1.012 | -11.94 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần Entry (/100) → 33 | 89.07 | 44.6% | 0.602 | 10.18 | 8.75 | 0.407 | 0.831 | -9.35 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 67.21 | 43.5% | 0.513 | 10.59 | 6.35 | 0.468 | 0.566 | -10.64 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Trend (/100) → 12 | 119.32 | 47.8% | 0.76 | 9.02 | 13.23 | 0.758 | 0.762 | -11.5 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 3 + Cộng thêm ngưỡng điểm khung 1D → 7 | 156.64 | 37.7% | 0.542 | 18.06 | 8.67 | 0.404 | 0.687 | -9.53 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm tối thiểu của vùng đặt SL → 4 | 91.43 | 45.8% | 0.644 | 9.01 | 10.15 | 0.476 | 0.838 | -11.94 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: EMA 50 → 1.13 + Trọng số phần Trend (/100) → 19 | 112.72 | 49.6% | 0.799 | 7.97 | 14.14 | 0.637 | 0.989 | -10.31 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Trend (/100) → 19 | 94.42 | 46.4% | 0.674 | 8.93 | 10.57 | 0.531 | 0.814 | -11.69 |  |

### Vòng 1332 — ngẫu nhiên nhiều thông số · mốc: tổng 114.44R, win 51.4%, rủi ro tụt vốn 7.72R, lời÷rủi ro 14.82

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Khung lớn phải tăng (trend ≥) → 0.375 + Cộng thêm ngưỡng điểm khung 1W → 2 | 109.65 | 39.7% | 0.363 | 12.51 | 8.76 | 0.352 | 0.372 | -5.06 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 117.2 | 40.6% | 0.378 | 12.67 | 9.25 | 0.372 | 0.383 | -4.65 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm tối thiểu của vùng đặt SL → 4 | 113.43 | 51.1% | 0.804 | 7.49 | 15.14 | 0.659 | 0.97 | -8.5 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 103.09 | 45.9% | 0.648 | 9.75 | 10.57 | 0.604 | 0.707 | -8.78 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Xác nhận khung nhỏ (A2) → W | 102.38 | 38.8% | 0.41 | 15.83 | 6.47 | 0.382 | 0.436 | -1.26 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Cộng thêm ngưỡng điểm khung 1D → 7 + R:R tối thiểu riêng khung 1W → 2 | 101.05 | 49.3% | 0.712 | 8.25 | 12.25 | 0.575 | 0.856 | -8.01 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Cộng thêm ngưỡng điểm khung 1W → -1 | 109.03 | 49.3% | 0.768 | 8.37 | 13.03 | 0.61 | 0.944 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: POC anchored → 2 | 92.14 | 47% | 0.618 | 9.14 | 10.08 | 0.478 | 0.773 | -9.69 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 99.48 | 50.7% | 0.701 | 8.09 | 12.3 | 0.672 | 0.734 | -9.68 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 106.45 | 49.3% | 0.739 | 8.34 | 12.76 | 0.561 | 0.956 | -10.89 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: EMA 200 → 1 + Trọng số phần Elliott (/100) → 10 + R:R tối thiểu riêng khung 4H → 2 | 133.47 | 41.5% | 0.42 | 12.11 | 11.02 | 0.422 | 0.418 | 1.85 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 77.62 | 48.3% | 0.669 | 8.5 | 9.13 | 0.512 | 0.869 | -16.39 |  |

### Vòng 1331 — ngẫu nhiên nhiều thông số · mốc: tổng 122.78R, win 52.8%, rủi ro tụt vốn 7.3R, lời÷rủi ro 16.82

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 33.78 | 38.9% | 0.375 | 10.84 | 3.12 | 0.271 | 0.518 | -5.18 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Số TP tối đa → 3 | 117.64 | 50.7% | 0.817 | 7.96 | 14.78 | 0.625 | 1.025 | -13.18 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + R:R tối thiểu riêng khung 1W → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 73.45 | 45.5% | 0.548 | 9.47 | 7.76 | 0.492 | 0.601 | -12.12 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần R:R (/100) → 33 + Trọng số phần Elliott (/100) → 6 + Số TP tối đa → 3 | 118.46 | 50.7% | 0.811 | 7.8 | 15.19 | 0.614 | 1.025 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 169.19 | 39.2% | 0.548 | 17.2 | 9.84 | 0.409 | 0.696 | -4.22 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + R:R tối thiểu riêng khung 4H → 2 | 126.3 | 41.5% | 0.404 | 11.98 | 10.54 | 0.382 | 0.422 | -7.44 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + SL tối đa (% Entry) → 0.425 | 121.77 | 52.4% | 0.84 | 7.72 | 15.77 | 0.654 | 1.045 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: HVN anchored → 0.313 | 115.47 | 51% | 0.796 | 7.77 | 14.86 | 0.571 | 1.045 | -13.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + R:R tối thiểu riêng khung 1W → 2 + Ngưỡng điểm vào kèo → 77 | 111.05 | 51.4% | 0.782 | 7.33 | 15.15 | 0.595 | 0.98 | -10.87 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Break mây Ichimoku → 1 | 97.77 | 48.7% | 0.635 | 9.39 | 10.41 | 0.433 | 0.826 | -11.46 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 104.04 | 50.3% | 0.698 | 8.45 | 12.31 | 0.543 | 0.865 | -13.44 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + R:R tối thiểu riêng khung 1W → 2 | 86.06 | 46.7% | 0.705 | 8.71 | 9.88 | 0.454 | 0.957 | -16.23 |  |

### Vòng 1330 — ngẫu nhiên nhiều thông số · mốc: tổng 119.56R, win 52.4%, rủi ro tụt vốn 7.41R, lời÷rủi ro 16.13

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + % chốt ở TP1 → 0.307 + R:R tối thiểu riêng khung 4H → 2 | 123.8 | 41.2% | 0.396 | 12.49 | 9.91 | 0.372 | 0.415 | -8.48 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức MACD → 0.875 | 118.96 | 41.1% | 0.385 | 12.59 | 9.45 | 0.351 | 0.415 | -8.44 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + R:R tối thiểu riêng khung 1D → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 104.17 | 44.3% | 0.563 | 10.37 | 10.05 | 0.504 | 0.619 | -10.34 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 4H (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 10.76 | 43.4% | 0.031 | 26.09 | 0.41 | 0.07 | 0.004 | -18.42 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần R:R (/100) → 28 + R:R tối thiểu riêng khung 1D → 2 | 98.65 | 45% | 0.584 | 9.54 | 10.34 | 0.507 | 0.653 | -12.64 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 108.85 | 47.8% | 0.8 | 8.39 | 12.97 | 0.554 | 1.086 | -11.42 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Coin phải mạnh hơn BTC trong N ngày → 14 | 64.36 | 46.7% | 0.715 | 8.82 | 7.3 | 0.465 | 1 | -13.28 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 107.56 | 49.1% | 0.676 | 8.92 | 12.06 | 0.511 | 0.867 | -14.77 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 2.25 + Xác nhận khung nhỏ (A2) → W + % chốt ở TP1 → 0.307 | 64.27 | 30.2% | 0.164 | 35.79 | 1.8 | 0.157 | 0.17 | -29.72 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: EMA 21 → 1.13 | 111.49 | 51% | 0.769 | 7.97 | 13.99 | 0.604 | 0.956 | -12.16 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Trend (/100) → 12 | 123.93 | 42.5% | 0.516 | 12.55 | 9.87 | 0.586 | 0.454 | -18.26 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Break mây Ichimoku → 3 + R:R tối thiểu riêng khung 4H → 2 | 126.34 | 42.1% | 0.383 | 12.39 | 10.2 | 0.321 | 0.435 | -6.22 |  |

### Vòng 1329 — ngẫu nhiên nhiều thông số · mốc: tổng 119.56R, win 52.4%, rủi ro tụt vốn 7.42R, lời÷rủi ro 16.11

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: POC anchored → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 104.01 | 46.6% | 0.638 | 9.59 | 10.85 | 0.72 | 0.547 | -12.95 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Lệnh chờ hết hạn sau (nến) → 8 | 110.32 | 48.1% | 0.707 | 8.58 | 12.86 | 0.551 | 0.88 | -14.77 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + R:R tối thiểu riêng khung 4H → 2 | 124.54 | 41.4% | 0.397 | 12.4 | 10.04 | 0.372 | 0.417 | -7 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Lệnh chờ hết hạn sau (nến) → 8 | 102.98 | 49.7% | 0.664 | 8.73 | 11.8 | 0.593 | 0.744 | -13.96 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 128.96 | 45.3% | 0.546 | 10.78 | 11.96 | 0.593 | 0.5 | -16.83 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 113.99 | 50.3% | 0.786 | 7.9 | 14.43 | 0.615 | 0.98 | -12.16 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: POC volume profile cố định → 0.688 | 29.06 | 56.6% | 0.183 | 6.05 | 4.8 | 0.194 | 0.172 | -8.42 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 89.66 | 34.2% | 0.383 | 21.01 | 4.27 | 0.267 | 0.508 | -11.02 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 116.67 | 52.1% | 0.833 | 7.48 | 15.6 | 0.637 | 1.054 | -13.19 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: HVN cố định → 0.563 | 118.86 | 52.1% | 0.825 | 7.45 | 15.95 | 0.636 | 1.043 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Cổng Dow → TẮT + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 32.6 | 52.3% | 0.151 | 8.83 | 3.69 | 0.284 | 0.023 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: HVN anchored → 0.313 + Cộng điểm phân kỳ dương ẩn → 3 | 114.28 | 49% | 0.767 | 8.41 | 13.59 | 0.5 | 1.06 | -13.08 |  |

### Vòng 1328 — ngẫu nhiên nhiều thông số · mốc: tổng 119.56R, win 52.4%, rủi ro tụt vốn 7.47R, lời÷rủi ro 16.01

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 | 104.44 | 47.1% | 0.6 | 9.3 | 11.23 | 0.499 | 0.695 | -8.17 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: BOS → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 117.49 | 41% | 0.377 | 12.32 | 9.54 | 0.347 | 0.402 | -5.1 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng thêm ngưỡng điểm khung 1D → 7 | 107.35 | 43.1% | 0.617 | 11.61 | 9.25 | 0.654 | 0.583 | -8.24 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 70.61 | 45.6% | 0.519 | 10.2 | 6.92 | 0.487 | 0.558 | -11.65 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: EMA 200 → 1 | 117.24 | 51.3% | 0.771 | 8.37 | 14.01 | 0.612 | 0.974 | -8.2 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 87.53 | 46% | 0.544 | 9.55 | 9.17 | 0.46 | 0.624 | -10.16 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Cổng Dow → CHẶT | 84.65 | 51.2% | 0.677 | 8 | 10.58 | 0.381 | 0.959 | -15.3 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: EMA 21 → 0.875 | 108.46 | 50% | 0.764 | 7.79 | 13.92 | 0.688 | 0.847 | -12.01 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng điểm phân kỳ dương ẩn → 3 | 113.65 | 48.4% | 0.733 | 8.67 | 13.11 | 0.571 | 0.916 | -13.4 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Fib sóng 4 → 0.938 | 105.15 | 47.7% | 0.678 | 9.47 | 11.1 | 0.454 | 0.937 | -10.6 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: POC volume profile cố định → 0.813 | 116.8 | 51.4% | 0.811 | 7.67 | 15.23 | 0.609 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 30.37 | 57.2% | 0.191 | 5.78 | 5.25 | 0.21 | 0.173 | -7.13 |  |

### Vòng 1327 — ngẫu nhiên nhiều thông số · mốc: tổng 119.56R, win 52.4%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần Entry (/100) → 28 | 119.56 | 52.4% | 0.836 | 7.34 | 16.29 | 0.654 | 1.043 | -13.18 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần R:R (/100) → 28 + Cộng thêm ngưỡng điểm khung 1D → 4 | 115.47 | 52.1% | 0.813 | 7.49 | 15.42 | 0.676 | 0.967 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 115.38 | 51% | 0.796 | 7.75 | 14.89 | 0.604 | 1.013 | -13.16 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 157.14 | 39% | 0.542 | 17.77 | 8.84 | 0.369 | 0.719 | -9.9 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL riêng khung 1W (ATR) → 0.3 | 101.5 | 45.2% | 0.695 | 9.66 | 10.51 | 0.452 | 0.939 | -15.03 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: POC volume profile cố định → 0.688 | 108.01 | 48.1% | 0.675 | 9.21 | 11.73 | 0.552 | 0.812 | -12.92 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: HVN cố định → 0.438 | 29.99 | 57.1% | 0.186 | 5.9 | 5.08 | 0.216 | 0.157 | -8.51 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Cổng Dow → TẮT + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 63.7 | 36.6% | 0.233 | 18.3 | 3.48 | 0.322 | 0.153 | -17.68 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Trọng số phần Divergence (/100) → 12 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 169.21 | 39.4% | 0.57 | 17.64 | 9.59 | 0.388 | 0.766 | -2.08 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cộng thêm ngưỡng điểm khung 1D → 7 + Lệnh chờ hết hạn sau (nến) → 8 | 109.79 | 49% | 0.699 | 8.83 | 12.43 | 0.509 | 0.919 | -11.83 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Mức RSI 30/70 → 1.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 76.25 | 38.2% | 0.351 | 17.64 | 4.32 | 0.356 | 0.346 | -4.5 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: EMA 21 → 1.13 | 87.26 | 44.2% | 0.594 | 10.43 | 8.37 | 0.471 | 0.736 | -8.13 |  |

### Vòng 1326 — ngẫu nhiên nhiều thông số · mốc: tổng 119.06R, win 52.1%, rủi ro tụt vốn 7.39R, lời÷rủi ro 16.11

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + R:R tối thiểu tới TP1 → 2.38 | 104.3 | 47.3% | 0.625 | 9.05 | 11.52 | 0.493 | 0.749 | -14.75 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 150.29 | 37.2% | 0.508 | 18.83 | 7.98 | 0.408 | 0.61 | -10.39 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 90.34 | 44.6% | 0.61 | 10.32 | 8.75 | 0.455 | 0.788 | -8.98 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 96.24 | 48.8% | 0.77 | 8.59 | 11.2 | 0.519 | 1.042 | -14.15 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần SL (/100) → 7 | 27.22 | 55.6% | 0.17 | 6.38 | 4.27 | 0.192 | 0.15 | -8.51 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Cộng điểm phân kỳ dương ẩn → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 158.92 | 38.5% | 0.537 | 17.92 | 8.87 | 0.398 | 0.678 | -7.73 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + R:R tối thiểu tới TP1 → 2.63 + Cộng điểm phân kỳ dương ẩn → 3 | 98.06 | 48.4% | 0.766 | 8.38 | 11.7 | 0.519 | 1.022 | -12.86 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Cộng thêm ngưỡng điểm khung 4H → 2 | 118.87 | 52.1% | 0.826 | 7.35 | 16.17 | 0.67 | 0.999 | -13.18 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 94.3 | 44.7% | 0.502 | 9.87 | 9.55 | 0.517 | 0.488 | -8.92 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: EMA 200 → 1 + Cổng Dow → CHẶT + Trọng số phần Momentum (/100) → 25 | 82.88 | 52.1% | 0.696 | 7.88 | 10.52 | 0.417 | 0.962 | -11.3 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: HVN cố định → 0.563 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 112.54 | 47.4% | 0.731 | 9.3 | 12.1 | 0.685 | 0.783 | -8.25 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Cộng thêm ngưỡng điểm khung 1D → 7 | 104.03 | 49% | 0.717 | 8.25 | 12.61 | 0.534 | 0.93 | -10.24 |  |

### Vòng 1325 — ngẫu nhiên nhiều thông số · mốc: tổng 119.06R, win 52.1%, rủi ro tụt vốn 7.39R, lời÷rủi ro 16.11

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 15.01 | 55% | 0.116 | 7.04 | 2.13 | 0.127 | 0.107 | -8.68 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần R:R (/100) → 28 | 105.76 | 48.6% | 0.724 | 8.42 | 12.56 | 0.568 | 0.908 | -13.18 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 103.09 | 51.4% | 0.697 | 8.45 | 12.2 | 0.586 | 0.819 | -9.1 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + % chốt ở TP1 → 0.307 | 114.31 | 50% | 0.794 | 8.17 | 13.99 | 0.605 | 1.01 | -12.17 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: EMA 21 → 0.875 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 106.07 | 39.1% | 0.38 | 16.01 | 6.63 | 0.37 | 0.389 | -3.21 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + R:R tối thiểu riêng khung 1W → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 114.91 | 47.8% | 0.732 | 8.98 | 12.8 | 0.715 | 0.75 | -14.8 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 98.23 | 42% | 0.558 | 12.97 | 7.57 | 0.502 | 0.611 | -10.91 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 | 108.69 | 46% | 0.625 | 9.18 | 11.84 | 0.579 | 0.667 | -9.96 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần R:R (/100) → 33 | 119.06 | 52.1% | 0.827 | 7.39 | 16.11 | 0.654 | 1.02 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trọng số phần R:R (/100) → 28 | 115.33 | 49.7% | 0.785 | 7.98 | 14.45 | 0.659 | 0.915 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 + Số TP tối đa → 1 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 100.67 | 46.4% | 0.599 | 10.27 | 9.8 | 0.412 | 0.816 | -10.34 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Đệm SL riêng khung 1W (ATR) → 0.3 | 101 | 44.9% | 0.687 | 9.8 | 10.31 | 0.452 | 0.919 | -15.03 |  |
