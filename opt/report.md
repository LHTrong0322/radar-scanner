# Tối ưu tự động (chạy liên tục) — vòng 1315

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 15400 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 165 | 46.1% | 95.42R | 0.578 | 7.21R | 10.25R | 9.31 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 143 | 51.7% | 114.1R | 0.798 | 5.15R | 7.46R | 15.29 | 29 | 13.8% | -13.18R | -0.454 | 13.18R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 26 | 50% | 20.05R | 7 | 0% | -5.66R |
| 1W | 10 | 40% | 3.36R | 2 | 0% | -2.3R |
| 4H | 107 | 53.3% | 90.69R | 20 | 20% | -5.21R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 165 | 46.1% | 95.42R | 10.25R | 9.31 | 31 | 12.9% | -13R |
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

### Vòng 1315 — ngẫu nhiên nhiều thông số · mốc: tổng 114.1R, win 51.7%, rủi ro tụt vốn 7.46R, lời÷rủi ro 15.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần Divergence (/100) → 12 | 112.65 | 50.7% | 0.793 | 7.72 | 14.59 | 0.598 | 1.018 | -12.98 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + % chốt ở TP1 → 0.287 | 110.44 | 46.4% | 0.665 | 9.9 | 11.16 | 0.61 | 0.736 | -12.18 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Biên mây Ichimoku → 1.05 | 103.89 | 50.7% | 0.721 | 7.98 | 13.02 | 0.567 | 0.889 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 7 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 19.42 | 54.2% | 0.125 | 6.91 | 2.81 | 0.117 | 0.133 | -6.91 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: HVN cố định → 0.438 | 120.92 | 48.7% | 0.775 | 8.49 | 14.24 | 0.732 | 0.827 | -13.76 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Đệm SL riêng khung 4H (ATR) → 0.3 | 158.66 | 38.7% | 0.529 | 18.1 | 8.77 | 0.372 | 0.69 | -11.64 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Break mây Ichimoku → 1 | 98.69 | 49.3% | 0.649 | 8.65 | 11.41 | 0.478 | 0.811 | -10.02 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 108.75 | 48.1% | 0.697 | 8.82 | 12.33 | 0.533 | 0.884 | -13.57 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Trọng số phần Divergence (/100) → 9 | 114.1 | 51.7% | 0.798 | 7.46 | 15.29 | 0.61 | 1.011 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 37.26 | 40.9% | 0.423 | 9.97 | 3.74 | 0.332 | 0.538 | -5.18 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Trend (/100) → 12 + Trọng số phần Entry (/100) → 33 | 38.73 | 42% | 0.44 | 9.75 | 3.97 | 0.353 | 0.544 | -5.18 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm vào kèo → 77 + Trọng số phần Entry (/100) → 28 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 151.25 | 37.5% | 0.516 | 19.29 | 7.84 | 0.4 | 0.636 | -14.6 |  |

### Vòng 1314 — ngẫu nhiên nhiều thông số · mốc: tổng 115.74R, win 51.4%, rủi ro tụt vốn 7.9R, lời÷rủi ro 14.65

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Cổng Dow → TẮT + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 113.6 | 42.3% | 0.565 | 12.12 | 9.37 | 0.582 | 0.548 | -17.98 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.563 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm tối thiểu của vùng đặt SL → 2 | 121.14 | 36.9% | 0.475 | 19.07 | 6.35 | 0.286 | 0.669 | -0.85 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Điểm vùng: Break mây Ichimoku → 1 + SL tối đa (% Entry) → 0.425 + Trọng số phần SL (/100) → 7 | 100.05 | 48.6% | 0.705 | 8.69 | 11.51 | 0.565 | 0.856 | -12.19 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: EMA 21 → 1.13 | 120.72 | 50% | 0.805 | 7.61 | 15.86 | 0.761 | 0.857 | -10.91 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Momentum (/100) → 25 | 99.02 | 49.2% | 0.75 | 8.23 | 12.03 | 0.503 | 1.021 | -13.17 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần R:R (/100) → 33 + Cổng Dow → CHẶT + Điểm vùng: Vùng RSI 45–55 → 1.13 | 83.68 | 41.2% | 0.359 | 11.41 | 7.33 | 0.209 | 0.476 | -11.7 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: POC volume profile cố định → 0.813 + % chốt ở TP1 → 0.287 | 111.02 | 51.8% | 0.799 | 7.78 | 14.27 | 0.629 | 0.986 | -7.79 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: HVN cố định → 0.563 | 104.99 | 48.9% | 0.755 | 8.17 | 12.85 | 0.518 | 1.01 | -12.35 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Xác nhận khung nhỏ (A2) → W + Trọng số phần Entry (/100) → 33 | 13.28 | 46.6% | 0.053 | 13.49 | 0.98 | 0.11 | 0.003 | -10.33 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 25.55 | 57.5% | 0.167 | 6.45 | 3.96 | 0.191 | 0.144 | -8.89 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Trend (/100) → 19 + Điểm vùng: HVN cố định → 0.438 | 34.66 | 39.3% | 0.389 | 10.24 | 3.38 | 0.305 | 0.498 | -10.34 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: HVN anchored → 0.188 + Cộng điểm phân kỳ dương ẩn → 3 | 106.22 | 48.3% | 0.703 | 9.03 | 11.76 | 0.493 | 0.94 | -12.94 |  |

### Vòng 1313 — ngẫu nhiên nhiều thông số · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.65R, lời÷rủi ro 15.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Mức RSI 30/70 → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 77.34 | 45.9% | 0.634 | 9.82 | 7.88 | 0.461 | 0.852 | -6.82 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: HVN cố định → 0.563 + Điểm tối thiểu của vùng đặt SL → 2 | 98.22 | 50.7% | 0.673 | 8.29 | 11.85 | 0.672 | 0.673 | -11.75 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần SL (/100) → 9 | 105.05 | 48.6% | 0.74 | 8.44 | 12.45 | 0.528 | 0.971 | -13.18 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Khung lớn phải tăng (trend ≥) → 0.375 | 104.44 | 44.2% | 0.633 | 11.29 | 9.25 | 0.603 | 0.661 | -11.79 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 115.93 | 50.7% | 0.794 | 7.66 | 15.13 | 0.654 | 0.946 | -13.18 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: EMA 50 → 0.75 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 1D → 4 | 27.99 | 56.7% | 0.178 | 5.99 | 4.67 | 0.185 | 0.172 | -8.42 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 110.6 | 51.1% | 0.796 | 7.43 | 14.89 | 0.657 | 0.949 | -13.18 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 108.98 | 40.3% | 0.414 | 14.84 | 7.34 | 0.432 | 0.398 | -6.05 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: EMA 21 → 0.875 + % chốt ở TP1 → 0.307 | 111.04 | 48.1% | 0.712 | 9.25 | 12 | 0.514 | 0.942 | -10.61 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cổng Dow → TẮT + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 46.95 | 36.3% | 0.218 | 17.52 | 2.68 | 0.26 | 0.178 | -21.12 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Biên mây Ichimoku → 1.05 | 107.19 | 51% | 0.739 | 7.94 | 13.5 | 0.603 | 0.889 | -14.01 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Cổng Dow → CHẶT + Điểm vùng: Fib sóng 4 → 0.938 | 78.61 | 49.1% | 0.702 | 7.62 | 10.32 | 0.301 | 1.049 | -15.27 |  |

### Vòng 1312 — ngẫu nhiên nhiều thông số · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.56R, lời÷rủi ro 15.53

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Biên mây Ichimoku → 1.05 | 106.92 | 48.4% | 0.69 | 8.79 | 12.16 | 0.568 | 0.819 | -14.4 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.813 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm tối thiểu của vùng đặt SL → 2 | 81.67 | 33.6% | 0.352 | 22.55 | 3.62 | 0.267 | 0.445 | -15.32 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 23.42 | 55.2% | 0.162 | 6.27 | 3.74 | 0.186 | 0.136 | -8.53 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Số TP tối đa → 1 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 111.18 | 50% | 0.783 | 8.3 | 13.4 | 0.596 | 0.992 | -13.16 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 21 → 0.875 | 28.55 | 56.3% | 0.181 | 5.94 | 4.81 | 0.219 | 0.145 | -8.42 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 106.57 | 51.7% | 0.735 | 7.97 | 13.37 | 0.67 | 0.806 | -12.36 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 122.96 | 48.7% | 0.788 | 8.55 | 14.38 | 0.777 | 0.802 | -13.75 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: HVN anchored → 0.188 + Cộng điểm phân kỳ dương ẩn → 3 + Trọng số phần Divergence (/100) → 9 | 124.99 | 49.4% | 0.812 | 8.19 | 15.26 | 0.798 | 0.827 | -13.76 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Cộng thêm ngưỡng điểm khung 1D → 7 | 114.52 | 51.7% | 0.801 | 7.69 | 14.89 | 0.615 | 1.011 | -10.24 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: BOS → 2 + Điểm vùng: HVN cố định → 0.438 | 114.27 | 50% | 0.783 | 7.91 | 14.45 | 0.603 | 0.989 | -12.16 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Ngưỡng điểm vào kèo → 74 | 124.28 | 48.7% | 0.797 | 8.26 | 15.05 | 0.787 | 0.808 | -13.76 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Số TP tối đa → 3 | 109.9 | 40.6% | 0.363 | 13.74 | 8 | 0.302 | 0.413 | -10.05 |  |

### Vòng 1311 — ngẫu nhiên nhiều thông số · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.58R, lời÷rủi ro 15.49

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: EMA 200 → 1 | 114.27 | 50% | 0.742 | 8.48 | 13.48 | 0.61 | 0.904 | -8.19 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Trọng số phần R:R (/100) → 28 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 110.01 | 51.1% | 0.791 | 7.81 | 14.09 | 0.555 | 1.061 | -9.96 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + R:R tối thiểu riêng khung 1D → 2 | 107.07 | 45.7% | 0.619 | 9.5 | 11.27 | 0.579 | 0.657 | -9.96 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Điểm vùng: Mức RSI 30/70 → 1.13 | 117.44 | 51.7% | 0.821 | 7.58 | 15.49 | 0.654 | 1.011 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Xác nhận khung nhỏ (A2) → W | 9.26 | 46% | 0.037 | 14.61 | 0.63 | 0.114 | -0.037 | -8.47 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần R:R (/100) → 33 + Khung lớn phải tăng (trend ≥) → 0.375 | 116.99 | 47.7% | 0.755 | 8.75 | 13.37 | 0.706 | 0.812 | -13.76 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: POC volume profile cố định → 0.813 | 74.06 | 37% | 0.274 | 19.48 | 3.8 | 0.314 | 0.234 | -4.05 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Lệnh chờ hết hạn sau (nến) → 6 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 23.42 | 55.2% | 0.162 | 6.31 | 3.71 | 0.186 | 0.136 | -8.53 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: EMA 50 → 0.75 + Số TP tối đa → 3 + Trọng số phần Divergence (/100) → 12 | 112.2 | 51% | 0.785 | 7.89 | 14.22 | 0.591 | 0.998 | -13.18 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Cộng thêm ngưỡng điểm khung 1D → 4 | 29.98 | 57% | 0.19 | 5.8 | 5.17 | 0.21 | 0.171 | -8.42 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu tới TP1 → 2.63 | 24.69 | 56.1% | 0.178 | 6.48 | 3.81 | 0.174 | 0.181 | -8 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL riêng khung 1W (ATR) → 0.3 | 99.38 | 44.5% | 0.681 | 10.06 | 9.88 | 0.452 | 0.91 | -15.03 |  |

### Vòng 1310 — ngẫu nhiên nhiều thông số · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.62R, lời÷rủi ro 15.41

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL riêng khung 1D (ATR) → 0.3 | 164.68 | 37.7% | 0.531 | 18.91 | 8.71 | 0.511 | 0.551 | -11.6 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: EMA 50 → 0.75 | 136.24 | 36.7% | 0.471 | 19.3 | 7.06 | 0.339 | 0.607 | -8.6 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Cộng thêm ngưỡng điểm khung 1D → 7 | 121.17 | 41.2% | 0.39 | 12.68 | 9.56 | 0.357 | 0.417 | -4.5 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Trọng số phần SL (/100) → 7 | 112.66 | 49.7% | 0.788 | 7.87 | 14.32 | 0.604 | 1.002 | -12.16 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Cộng thêm ngưỡng điểm khung 1W → 2 | 102.91 | 43.3% | 0.655 | 10.26 | 10.03 | 0.485 | 0.824 | -15.84 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + R:R tối thiểu riêng khung 1D → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 107.06 | 45.5% | 0.608 | 9.53 | 11.23 | 0.571 | 0.644 | -9.96 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: HVN cố định → 0.563 | 73.85 | 46.8% | 0.596 | 9.28 | 7.96 | 0.535 | 0.658 | -14.47 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 | 81.12 | 49.2% | 0.687 | 8.38 | 9.68 | 0.532 | 0.879 | -18.45 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 94.83 | 35.7% | 0.323 | 23.39 | 4.05 | 0.406 | 0.252 | -23.96 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 114.39 | 51.4% | 0.817 | 7.6 | 15.05 | 0.632 | 1.025 | -13.16 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 6.57 | 45.4% | 0.028 | 20.84 | 0.32 | 0.009 | 0.043 | -21.72 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Biên mây Ichimoku → 1.05 + Xác nhận khung nhỏ (A2) → W | 87.83 | 39.6% | 0.351 | 16.4 | 5.36 | 0.345 | 0.357 | -3.83 |  |

### Vòng 1309 — ngẫu nhiên nhiều thông số · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.62R, lời÷rủi ro 15.41

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Trọng số phần R:R (/100) → 33 | 114.98 | 50.7% | 0.798 | 8.04 | 14.3 | 0.613 | 1.011 | -13.18 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần R:R (/100) → 28 | 113.35 | 51.4% | 0.798 | 7.64 | 14.84 | 0.676 | 0.935 | -13.18 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm tối thiểu của vùng đặt SL → 2 | 113.18 | 51.4% | 0.786 | 7.71 | 14.68 | 0.654 | 0.934 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 97.53 | 47% | 0.646 | 9.45 | 10.32 | 0.455 | 0.867 | -11.61 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cộng thêm ngưỡng điểm khung 1D → 7 + Cộng thêm ngưỡng điểm khung 4H → 2 | 107.34 | 49% | 0.73 | 8.56 | 12.54 | 0.502 | 0.981 | -10.13 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 117.44 | 51.7% | 0.821 | 7.62 | 15.41 | 0.654 | 1.011 | -13.18 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 88.87 | 47.4% | 0.658 | 9.07 | 9.8 | 0.505 | 0.845 | -13.78 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 144.17 | 37.6% | 0.489 | 18.91 | 7.62 | 0.385 | 0.594 | -10.59 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm tối thiểu của vùng đặt SL → 2 + Cộng điểm phân kỳ dương ẩn → 3 | 110.96 | 51.4% | 0.771 | 8 | 13.87 | 0.632 | 0.922 | -9.85 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: EMA 200 → 1 | 161.74 | 38.9% | 0.546 | 18.14 | 8.92 | 0.363 | 0.742 | 0.03 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 71.5 | 45% | 0.656 | 9.54 | 7.49 | 0.444 | 0.906 | -6.82 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 1W (ATR) → 0.3 | 98.63 | 44.2% | 0.671 | 10.06 | 9.8 | 0.452 | 0.887 | -13.71 |  |

### Vòng 1308 — ngẫu nhiên nhiều thông số · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.61R, lời÷rủi ro 15.43

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 110.56 | 39.7% | 0.463 | 12.2 | 9.06 | 0.452 | 0.472 | -13.07 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần SL (/100) → 9 | 155.63 | 37.7% | 0.524 | 19.05 | 8.17 | 0.398 | 0.653 | -10.93 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Ngưỡng điểm vào kèo → 77 | 71.63 | 40.7% | 0.494 | 11.58 | 6.19 | 0.351 | 0.661 | -9.41 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Trọng số phần R:R (/100) → 28 | 106.81 | 47.7% | 0.689 | 9.1 | 11.74 | 0.653 | 0.726 | -12.17 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 107.1 | 49.3% | 0.724 | 8.51 | 12.59 | 0.541 | 0.939 | -14.15 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Entry (/100) → 33 | 97.7 | 49% | 0.665 | 8.61 | 11.35 | 0.634 | 0.699 | -11.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 122.73 | 41% | 0.39 | 12.69 | 9.67 | 0.372 | 0.404 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Biên mây Ichimoku → 1.35 | 110.39 | 49.7% | 0.761 | 8.06 | 13.7 | 0.575 | 0.967 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: POC anchored → 2 + Điểm vùng: EMA 50 → 1.13 | 99.86 | 46.2% | 0.632 | 9.54 | 10.47 | 0.528 | 0.741 | -14.2 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 125.99 | 44.1% | 0.555 | 10.5 | 12 | 0.57 | 0.541 | -16.83 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Số TP tối đa → 3 | 156.78 | 38.3% | 0.531 | 18.6 | 8.43 | 0.399 | 0.67 | -11.11 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Điểm tối thiểu của vùng đặt SL → 4 | 113.38 | 50.3% | 0.793 | 7.85 | 14.44 | 0.659 | 0.941 | -13.05 |  |

### Vòng 1307 — ngẫu nhiên nhiều thông số · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.64R, lời÷rủi ro 15.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.98 | 57% | 0.19 | 5.65 | 5.31 | 0.21 | 0.171 | -8.42 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần R:R (/100) → 28 | 101.11 | 46.4% | 0.67 | 9.22 | 10.97 | 0.602 | 0.738 | -12.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: POC volume profile cố định → 0.688 | 102.67 | 49% | 0.718 | 8.23 | 12.48 | 0.572 | 0.862 | -14.22 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 4H → 2 | 56.32 | 43% | 0.526 | 10.53 | 5.35 | 0.403 | 0.679 | -6.82 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 112.05 | 49.3% | 0.778 | 8.2 | 13.66 | 0.608 | 0.968 | -12.16 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: BOS → 0 | 115.99 | 51% | 0.8 | 7.79 | 14.89 | 0.636 | 0.986 | -11.86 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Entry (/100) → 33 + Coin phải mạnh hơn BTC trong N ngày → 14 + Số TP tối đa → 1 | 60.77 | 44.4% | 0.675 | 9.4 | 6.46 | 0.465 | 0.915 | -13.28 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Cộng thêm ngưỡng điểm khung 4H → -1 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 200 → 1 | 92.5 | 44.2% | 0.561 | 10.73 | 8.62 | 0.494 | 0.637 | -10.65 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần R:R (/100) → 33 | 106.16 | 50.7% | 0.737 | 7.76 | 13.68 | 0.603 | 0.884 | -14.01 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: EMA 21 → 1.13 | 102.21 | 50% | 0.7 | 8.04 | 12.71 | 0.618 | 0.787 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 1D → 7 | 113 | 50.7% | 0.774 | 7.87 | 14.36 | 0.615 | 0.946 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 | 37.26 | 40.9% | 0.423 | 9.97 | 3.74 | 0.332 | 0.538 | -5.18 |  |

### Vòng 1306 — ngẫu nhiên nhiều thông số · mốc: tổng 117.44R, win 51.7%, rủi ro tụt vốn 7.64R, lời÷rủi ro 15.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 83 | 42.3% | 0.474 | 12.04 | 6.89 | 0.416 | 0.533 | -12.63 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng thêm ngưỡng điểm khung 1D → 7 | 122.06 | 49.4% | 0.793 | 8.25 | 14.8 | 0.763 | 0.827 | -10.82 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: MACD cắt lên Signal → 0.438 | 105.26 | 48.4% | 0.688 | 9.42 | 11.17 | 0.467 | 0.943 | -10.6 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Điểm vùng: POC anchored → 4 + Trọng số phần Trend (/100) → 12 | 95.82 | 48.6% | 0.647 | 8.83 | 10.85 | 0.642 | 0.653 | -6.74 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Momentum (/100) → 25 | 112.07 | 50% | 0.789 | 7.87 | 14.24 | 0.635 | 0.957 | -13.18 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Break mây Ichimoku → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu tới TP1 → 2.63 | 44.19 | 45% | 0.337 | 11.92 | 3.71 | 0.334 | 0.34 | -20.9 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần Entry (/100) → 28 | 115.39 | 51% | 0.796 | 7.86 | 14.68 | 0.611 | 1.011 | -13.18 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 2.25 | 106.97 | 45.2% | 0.681 | 10.57 | 10.12 | 0.637 | 0.724 | -14.45 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Xác nhận khung nhỏ (A2) → W | 106.39 | 38.5% | 0.409 | 15.63 | 6.81 | 0.369 | 0.445 | -5.56 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần SL (/100) → 9 + Điểm vùng: HVN cố định → 0.438 | 97.31 | 47.9% | 0.685 | 8.58 | 11.34 | 0.514 | 0.857 | -14.21 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: EMA 50 → 0.75 | 101.73 | 50% | 0.706 | 8.14 | 12.5 | 0.518 | 0.923 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Mức MACD → 1.13 | 105.83 | 49.7% | 0.72 | 8.22 | 12.87 | 0.53 | 0.935 | -13.18 |  |
