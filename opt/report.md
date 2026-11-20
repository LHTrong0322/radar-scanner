# Tối ưu tự động (chạy liên tục) — vòng 948

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 11031 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 46.4% | 95.04R | 0.573 | 6.44R | 10.19R | 9.33 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 145 | 52.4% | 113.95R | 0.786 | 5.09R | 8.02R | 14.21 | 27 | 18.5% | -8.9R | -0.33 | 10.54R |

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
| Bot thật | 166 | 46.4% | 95.04R | 10.19R | 9.33 | 30 | 13.3% | -11.98R |
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

### Vòng 948 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.02R, lời÷rủi ro 14.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 103.92 | 49.7% | 0.688 | 8.91 | 11.66 | 0.497 | 0.909 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + SL tối đa (% Entry) → 0.425 | 108.46 | 51.4% | 0.743 | 8.28 | 13.1 | 0.534 | 0.97 | -8.9 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Xác nhận khung nhỏ (A2) → W + R:R tối thiểu tới TP1 → 2.38 | 61.97 | 37.6% | 0.271 | 18.81 | 3.29 | 0.157 | 0.376 | -7.59 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu riêng khung 4H → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 85.18 | 37.7% | 0.268 | 16.09 | 5.29 | 0.301 | 0.238 | -14.73 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 77 | 33.1% | 0.226 | 25.93 | 2.97 | 0.206 | 0.24 | -22.77 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Divergence (/100) → 9 + R:R tối thiểu riêng khung 1D → 2 | 102.94 | 44.8% | 0.592 | 9.5 | 10.84 | 0.57 | 0.612 | -7.16 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 120.66 | 49.7% | 0.799 | 8.5 | 14.2 | 0.723 | 0.89 | -9.52 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Mức sai Elliott (cho SL) → 1 + R:R tối thiểu tới TP1 → 2.38 | 67.29 | 37.7% | 0.272 | 18.84 | 3.57 | 0.193 | 0.346 | -7.83 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cộng thêm ngưỡng điểm khung 1W → -1 | 29.2 | 58% | 0.186 | 5.97 | 4.89 | 0.206 | 0.167 | -9.28 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 112.09 | 52.1% | 0.801 | 7.58 | 14.79 | 0.561 | 1.077 | -8.41 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: POC volume profile cố định → 0.688 | 114.72 | 52.4% | 0.791 | 8.02 | 14.3 | 0.597 | 1.012 | -8.9 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Trọng số phần Elliott (/100) → 6 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 101.65 | 49.7% | 0.664 | 9.36 | 10.86 | 0.498 | 0.856 | -6.32 |  |

### Vòng 947 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8R, lời÷rủi ro 14.24

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + % chốt ở TP1 → 0.307 + Điểm vùng: Break mây Ichimoku → 1 | 91.87 | 48% | 0.621 | 9.21 | 9.98 | 0.564 | 0.682 | -7.36 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Trọng số phần SL (/100) → 7 | 101.54 | 49% | 0.691 | 8.69 | 11.68 | 0.468 | 0.93 | -9.89 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 123.37 | 45.8% | 0.548 | 10.64 | 11.59 | 0.583 | 0.512 | -9.38 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 79.94 | 47.5% | 0.506 | 10.45 | 7.65 | 0.47 | 0.543 | -7.51 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN anchored → 0.313 + Cộng thêm ngưỡng điểm khung 1W → 2 | 114.67 | 41.2% | 0.372 | 12.58 | 9.12 | 0.308 | 0.428 | -8.46 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 36.25 | 40% | 0.403 | 10.65 | 3.4 | 0.342 | 0.475 | -7.55 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 101.47 | 50.3% | 0.681 | 8.09 | 12.54 | 0.578 | 0.777 | -9.93 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Entry (/100) → 33 | 100.45 | 48.3% | 0.683 | 9.02 | 11.14 | 0.508 | 0.871 | -10.01 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: BOS → 1 | 112.93 | 52.1% | 0.774 | 8.06 | 14.01 | 0.591 | 0.977 | -9.01 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần Divergence (/100) → 12 + Trọng số phần Trend (/100) → 12 | 100.49 | 48.3% | 0.684 | 8.66 | 11.6 | 0.514 | 0.865 | -8.97 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 104.66 | 45.7% | 0.598 | 9.29 | 11.27 | 0.566 | 0.628 | -7.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Entry (/100) → 33 + Đệm SL riêng khung 1W (ATR) → 0.3 | 104.37 | 47.5% | 0.74 | 8.87 | 11.77 | 0.54 | 0.927 | -9.67 |  |

### Vòng 946 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.97R, lời÷rủi ro 14.30

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cổng Dow → TẮT + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: BOS → 3 | 88.67 | 38.5% | 0.551 | 12.97 | 6.84 | 0.401 | 0.702 | -17.27 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Đệm SL riêng khung 1D (ATR) → 0.3 + % chốt ở TP1 → 0.307 + Trọng số phần Momentum (/100) → 25 | 107.27 | 46% | 0.658 | 10.66 | 10.06 | 0.665 | 0.652 | -4.6 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Break mây Ichimoku → 1 | 96.52 | 48% | 0.635 | 9.25 | 10.43 | 0.457 | 0.838 | -8.97 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Lệnh chờ hết hạn sau (nến) → 8 + Cổng Dow → CHẶT + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 82.43 | 51.2% | 0.659 | 7.68 | 10.73 | 0.331 | 0.953 | -11.27 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần Elliott (/100) → 6 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 95.56 | 50.3% | 0.65 | 8.85 | 10.8 | 0.579 | 0.728 | -8.7 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Số TP tối đa → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 + Cộng thêm ngưỡng điểm khung 1W → -1 | 118.22 | 51.9% | 0.739 | 8.42 | 14.04 | 0.568 | 0.942 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: HVN cố định → 0.438 + Đệm SL riêng khung 1D (ATR) → 0.3 | 110.51 | 45.8% | 0.658 | 10.47 | 10.55 | 0.612 | 0.7 | -3.97 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 58.17 | 45.7% | 0.421 | 10 | 5.82 | 0.323 | 0.495 | -13.93 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 1 + Cộng thêm ngưỡng điểm khung 4H → 2 | 107.84 | 45.2% | 0.642 | 10.76 | 10.02 | 0.648 | 0.636 | -3.11 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Mức MACD → 1.13 | 86.64 | 48.7% | 0.728 | 8.32 | 10.41 | 0.567 | 0.916 | -15.36 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Đệm SL riêng khung 4H (ATR) → 0.3 + Xác nhận khung nhỏ (A2) → W + Điểm tối thiểu của vùng đặt SL → 2 | 92.5 | 30.7% | 0.212 | 32.47 | 2.85 | 0.201 | 0.222 | -37.4 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Break mây Ichimoku → 1 | 102.21 | 49.3% | 0.691 | 8.95 | 11.42 | 0.511 | 0.886 | -8.97 |  |

### Vòng 945 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.04R, lời÷rủi ro 14.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Đệm SL riêng khung 4H (ATR) → 0.3 | 153.57 | 38.2% | 0.505 | 19.89 | 7.72 | 0.385 | 0.618 | -10.14 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần R:R (/100) → 33 + Điểm vùng: POC volume profile cố định → 0.813 | 112.75 | 51.7% | 0.767 | 8.11 | 13.9 | 0.592 | 0.96 | -6.56 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: BOS → 3 | 112.23 | 51.4% | 0.779 | 7.82 | 14.35 | 0.596 | 0.984 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + R:R tối thiểu riêng khung 4H → 2 | 27.87 | 48.6% | 0.086 | 8.72 | 3.2 | 0.1 | 0.075 | -12.44 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 147.82 | 38.8% | 0.517 | 18.56 | 7.96 | 0.349 | 0.685 | -11.64 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cộng thêm ngưỡng điểm khung 1W → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 | 103.19 | 41.6% | 0.402 | 12.49 | 8.26 | 0.532 | 0.27 | -12.6 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: EMA 50 → 0.75 | 109.33 | 51.7% | 0.754 | 8.06 | 13.56 | 0.531 | 1 | -8.88 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Mức RSI 30/70 → 0.875 | 114.51 | 50.3% | 0.72 | 8.85 | 12.94 | 0.549 | 0.927 | -7.88 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Biên mây Ichimoku → 1.35 | 109.72 | 50.7% | 0.741 | 8.48 | 12.94 | 0.549 | 0.956 | -7.88 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Fib sóng 4 → 1.56 | 74.61 | 46.7% | 0.553 | 10.08 | 7.4 | 0.405 | 0.722 | -10.72 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: POC anchored → 4 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: EMA 200 → 1 | 106.83 | 48% | 0.625 | 10.04 | 10.64 | 0.478 | 0.8 | -7.58 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 117.77 | 48.4% | 0.75 | 8.99 | 13.1 | 0.654 | 0.858 | -9.31 |  |

### Vòng 944 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.05R, lời÷rủi ro 14.16

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cổng Dow → CHẶT + Trọng số phần Momentum (/100) → 21 | 78.3 | 51.3% | 0.693 | 7.26 | 10.79 | 0.244 | 1.089 | -10.81 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Coin phải mạnh hơn BTC trong N ngày → 14 | 64.59 | 42.4% | 0.547 | 10.45 | 6.18 | 0.365 | 0.757 | -13.57 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Elliott (/100) → 10 + Trọng số phần Momentum (/100) → 25 | 118.11 | 49% | 0.762 | 8.52 | 13.86 | 0.727 | 0.803 | -9.48 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần Momentum (/100) → 21 | 124.59 | 45% | 0.544 | 11.24 | 11.08 | 0.575 | 0.511 | -10.68 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Elliott (/100) → 6 + Cộng thêm ngưỡng điểm khung 4H → 2 | 30.38 | 58.3% | 0.195 | 5.53 | 5.49 | 0.22 | 0.172 | -9.27 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 94.5 | 43.4% | 0.594 | 11.77 | 8.03 | 0.477 | 0.689 | -4.33 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + R:R tối thiểu tới TP1 → 2.63 | 51.93 | 41.1% | 0.464 | 12.96 | 4.01 | 0.242 | 0.693 | -5.29 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: HVN anchored → 0.313 | 27.5 | 39.1% | 0.316 | 11.27 | 2.44 | 0.323 | 0.306 | -7.19 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Cộng thêm ngưỡng điểm khung 4H → 2 + Khung lớn phải tăng (trend ≥) → 0.425 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 92.57 | 48.5% | 0.681 | 8.68 | 10.66 | 0.426 | 0.967 | -10.52 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 58.29 | 40.7% | 0.494 | 12.65 | 4.61 | 0.246 | 0.711 | -2.79 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Ngưỡng điểm vào kèo → 77 + Trọng số phần Entry (/100) → 33 | 112.61 | 51% | 0.787 | 7.74 | 14.55 | 0.624 | 0.963 | -8.9 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Momentum (/100) → 25 | 16.64 | 56.7% | 0.131 | 6.78 | 2.45 | 0.154 | 0.11 | -9.54 |  |

### Vòng 943 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.02R, lời÷rủi ro 14.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 101.58 | 48.5% | 0.608 | 9.81 | 10.35 | 0.474 | 0.758 | -8.9 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng điểm phân kỳ dương ẩn → 3 | 119.92 | 49.1% | 0.754 | 8.62 | 13.91 | 0.722 | 0.792 | -8.17 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Divergence (/100) → 9 + Đệm SL riêng khung 1D (ATR) → 0.3 | 58.21 | 40.3% | 0.489 | 12.51 | 4.65 | 0.269 | 0.672 | -3.7 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 4H → -1 + Đệm SL riêng khung 4H (ATR) → 0.3 | 146.55 | 38.7% | 0.511 | 18.1 | 8.1 | 0.338 | 0.685 | -11.48 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Số TP tối đa → 2 | 116.6 | 51.7% | 0.804 | 7.9 | 14.76 | 0.669 | 0.949 | -7.61 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 27.11 | 57.7% | 0.174 | 5.89 | 4.6 | 0.223 | 0.13 | -9.09 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm tối thiểu của vùng đặt SL → 4 + Cộng điểm phân kỳ dương ẩn → 2.25 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.61 | 57.4% | 0.191 | 5.59 | 5.3 | 0.223 | 0.163 | -8.83 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: BOS → 3 + Cổng Dow → TẮT | 24.21 | 51.8% | 0.125 | 8.76 | 2.76 | 0.202 | 0.046 | -14.62 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu riêng khung 4H → 2 | 112.41 | 40.2% | 0.343 | 13.53 | 8.31 | 0.267 | 0.409 | -8.43 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 112.25 | 49% | 0.724 | 8.72 | 12.87 | 0.553 | 0.912 | -8.62 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Mức RSI 30/70 → 0.875 | 170.89 | 38.1% | 0.513 | 19.37 | 8.82 | 0.492 | 0.531 | -9.59 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 108.68 | 49.7% | 0.749 | 8.44 | 12.88 | 0.507 | 1.003 | -7.46 |  |

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
