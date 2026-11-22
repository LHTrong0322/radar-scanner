# Tối ưu tự động (chạy liên tục) — vòng 1157

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 13516 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 165 | 46.7% | 97.16R | 0.589 | 5.7R | 9.96R | 9.76 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 142 | 52.8% | 120.26R | 0.847 | 5.15R | 7.28R | 16.52 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 26 | 50% | 20.05R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 105 | 54.3% | 93.24R | 19 | 21.1% | -4.19R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 165 | 46.7% | 97.16R | 9.96R | 9.76 | 30 | 13.3% | -11.98R |
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
| Điểm vùng: Fib 0.5 / 0.382 sóng 2 | 3 | **4** |

## Các thay đổi đã nhận (mới nhất trước)

| Vòng | Thông số | Từ → Thành | Tổng R | Tỷ lệ thắng | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro |
|---|---|---|---|---|---|---|
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
| 24 | Trọng số phần R:R (/100) | 30 → 20 | 92.96R | 41.3% | 13.64R | 6.82 |
| 22 | Điểm ADX > 25 và +DI trội (Momentum) | 2 → 3 | 82.86R | 40.3% | 14.81R | 5.59 |

## 10 vòng gần nhất

### Vòng 1157 — ngẫu nhiên nhiều thông số · mốc: tổng 120.26R, win 52.8%, rủi ro tụt vốn 7.28R, lời÷rủi ro 16.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Biên mây Ichimoku → 1.35 + Cộng thêm ngưỡng điểm khung 4H → 2 | 95.16 | 48.2% | 0.685 | 8.52 | 11.17 | 0.479 | 0.906 | -12.69 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Divergence (/100) → 12 | 120.26 | 52.8% | 0.847 | 7.28 | 16.52 | 0.672 | 1.049 | -12.16 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: MACD cắt lên Signal → 0.438 | 108.11 | 48.7% | 0.711 | 8.91 | 12.13 | 0.499 | 0.953 | -8.26 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cộng thêm ngưỡng điểm khung 4H → 2 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 | 82.6 | 37.1% | 0.356 | 16.39 | 5.04 | 0.288 | 0.413 | -6.86 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + R:R tối thiểu tới TP1 → 2.38 | 113.84 | 47.5% | 0.636 | 8.7 | 13.09 | 0.489 | 0.792 | -13.06 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 114.09 | 50.3% | 0.798 | 7.54 | 15.13 | 0.597 | 1.032 | -11.98 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Entry (/100) → 33 + Cộng thêm ngưỡng điểm khung 1D → 5 | 118.04 | 51.4% | 0.831 | 7.54 | 15.66 | 0.677 | 1.004 | -11.13 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần SL (/100) → 9 | 118.79 | 52.1% | 0.837 | 7.4 | 16.05 | 0.672 | 1.027 | -12.16 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Break mây Ichimoku → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 63 | 39.6% | 0.438 | 12.66 | 4.98 | 0.415 | 0.465 | -7.9 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: EMA 200 → 1 + Trọng số phần Trend (/100) → 19 + Trọng số phần Momentum (/100) → 25 | 103.01 | 48.1% | 0.66 | 9.56 | 10.78 | 0.49 | 0.864 | -5.77 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + R:R tối thiểu tới TP1 → 2.38 + Xác nhận khung nhỏ (A2) → W | 84.03 | 40.7% | 0.339 | 15.77 | 5.33 | 0.307 | 0.363 | -11.41 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Fib sóng 4 → 0.938 + Đệm SL riêng khung 4H (ATR) → 0.3 | 163.79 | 38.3% | 0.555 | 17.88 | 9.16 | 0.455 | 0.663 | -8.77 |  |

### Vòng 1156 — ngẫu nhiên nhiều thông số · mốc: tổng 120.26R, win 52.8%, rủi ro tụt vốn 7.25R, lời÷rủi ro 16.59

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Xác nhận khung nhỏ (A2) → W + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 91.02 | 37.8% | 0.327 | 17.38 | 5.24 | 0.512 | 0.132 | -8.53 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Cộng thêm ngưỡng điểm khung 1W → -1 | 120.26 | 52.8% | 0.847 | 7.25 | 16.59 | 0.672 | 1.049 | -12.16 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 98.33 | 48.1% | 0.639 | 8.91 | 11.04 | 0.651 | 0.627 | -9.44 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Divergence (/100) → 9 | 103.52 | 50% | 0.709 | 7.65 | 13.53 | 0.679 | 0.742 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Mức MACD → 0.875 | 90.95 | 48% | 0.739 | 8.69 | 10.47 | 0.497 | 0.985 | -12.86 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Trọng số phần SL (/100) → 9 + Điểm vùng: EMA 21 → 1.13 | 98.23 | 46.6% | 0.61 | 9.02 | 10.89 | 0.51 | 0.709 | -12.45 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Elliott (/100) → 6 | 158.37 | 38.1% | 0.539 | 17.72 | 8.94 | 0.406 | 0.677 | -6.85 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Mức MACD → 0.875 + Trọng số phần Entry (/100) → 28 | 115.65 | 53.2% | 0.82 | 7.11 | 16.27 | 0.655 | 1.003 | -10.87 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 69.16 | 45.5% | 0.524 | 9.94 | 6.96 | 0.413 | 0.657 | -11.79 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Mức MACD → 0.875 | 115.18 | 52.8% | 0.811 | 7.2 | 16 | 0.655 | 0.981 | -10.87 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 28.47 | 54.6% | 0.154 | 6.63 | 4.29 | 0.168 | 0.141 | -7.02 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Cộng thêm ngưỡng điểm khung 1D → 3 | 104.69 | 46.3% | 0.638 | 8.59 | 12.19 | 0.483 | 0.794 | -13.47 |  |

### Vòng 1155 — ngẫu nhiên nhiều thông số · mốc: tổng 120.26R, win 52.8%, rủi ro tụt vốn 7.28R, lời÷rủi ro 16.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 112.51 | 49.7% | 0.717 | 8.61 | 13.07 | 0.595 | 0.853 | -11.03 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Mức MACD → 0.875 + Đệm SL riêng khung 1W (ATR) → 0.3 | 66.06 | 43.2% | 0.528 | 11.05 | 5.98 | 0.42 | 0.639 | -11.12 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Elliott (/100) → 6 | 119.39 | 52.1% | 0.829 | 7.28 | 16.4 | 0.657 | 1.026 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Divergence (/100) → 12 | 114.61 | 52.1% | 0.796 | 7.59 | 15.1 | 0.654 | 0.959 | -9.82 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Divergence (/100) → 12 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 76.47 | 42.6% | 0.452 | 11.67 | 6.55 | 0.553 | 0.366 | -4.76 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: EMA 50 → 1.13 | 108.9 | 38.8% | 0.419 | 16.37 | 6.65 | 0.444 | 0.396 | -5.28 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 | 115.2 | 52.4% | 0.794 | 7.35 | 15.67 | 0.627 | 0.989 | -12.16 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Ngưỡng điểm vào kèo → 77 | 114.66 | 51.4% | 0.807 | 7.55 | 15.19 | 0.679 | 0.952 | -11.56 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Elliott (/100) → 6 | 123.88 | 41.3% | 0.4 | 12.17 | 10.18 | 0.358 | 0.435 | -6.67 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 159.12 | 38.4% | 0.545 | 18.01 | 8.84 | 0.409 | 0.688 | -9.98 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: EMA 200 → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 | 116.46 | 51% | 0.771 | 8.26 | 14.1 | 0.608 | 0.981 | -7.13 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 | 130.33 | 36.9% | 0.454 | 19.85 | 6.57 | 0.255 | 0.639 | -12.31 |  |

### Vòng 1154 — ngẫu nhiên nhiều thông số · mốc: tổng 118.1R, win 52.6%, rủi ro tụt vốn 7.18R, lời÷rủi ro 16.45

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → -1 | 92.98 | 46.4% | 0.674 | 9.55 | 9.74 | 0.571 | 0.777 | -12.6 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Break mây Ichimoku → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Đệm SL riêng khung 1W (ATR) → 0.3 | 103.8 | 46.4% | 0.678 | 9.57 | 10.85 | 0.549 | 0.817 | -16.36 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Cộng điểm phân kỳ dương ẩn → 2.25 | 118.1 | 52.6% | 0.862 | 7.18 | 16.45 | 0.664 | 1.088 | -9.86 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 126.7 | 51% | 0.886 | 7.51 | 16.87 | 0.88 | 0.893 | -10.44 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Số TP tối đa → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 88.52 | 48.9% | 0.676 | 8.51 | 10.4 | 0.508 | 0.857 | -11.73 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 111.38 | 36.4% | 0.414 | 19.46 | 5.72 | 0.279 | 0.542 | -7.92 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Cộng thêm ngưỡng điểm khung 1D → 3 + Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần SL (/100) → 9 | 111.43 | 48.3% | 0.748 | 8.59 | 12.97 | 0.544 | 0.972 | -10.25 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Biên mây Ichimoku → 1.05 | 108.26 | 49.3% | 0.731 | 8.43 | 12.84 | 0.6 | 0.874 | -11.08 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Break mây Ichimoku → 3 + R:R tối thiểu riêng khung 1W → 2 | 94.13 | 48.6% | 0.636 | 9.21 | 10.22 | 0.577 | 0.694 | -8.62 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Khung lớn phải tăng (trend ≥) → 0.375 | 84.43 | 49.1% | 0.768 | 7.78 | 10.85 | 0.552 | 1.017 | -16.33 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần Divergence (/100) → 12 + Điểm tối thiểu của vùng đặt SL → 4 | 117.49 | 51.4% | 0.827 | 7.78 | 15.1 | 0.595 | 1.074 | -9.75 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Trend (/100) → 12 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 68.27 | 43.5% | 0.594 | 10.15 | 6.73 | 0.4 | 0.829 | -5.33 |  |

### Vòng 1153 — ngẫu nhiên nhiều thông số · mốc: tổng 120.26R, win 52.8%, rủi ro tụt vốn 7.25R, lời÷rủi ro 16.59

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 124.67 | 44.3% | 0.547 | 11.09 | 11.24 | 0.574 | 0.521 | -15.8 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Đệm SL riêng khung 1W (ATR) → 0.3 + SL tối đa (% Entry) → 0.425 | 110.45 | 47.6% | 0.772 | 8.98 | 12.3 | 0.545 | 1.003 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Số TP tối đa → 1 | 56.78 | 43.1% | 0.437 | 10.73 | 5.29 | 0.403 | 0.477 | -9.6 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu tới TP1 → 2.38 + Đệm SL riêng khung 1W (ATR) → 0.3 | 73.91 | 42.1% | 0.556 | 11.26 | 6.56 | 0.518 | 0.595 | -11.42 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 4H → -1 | 115.2 | 46.1% | 0.698 | 10.18 | 11.32 | 0.681 | 0.714 | -9.47 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 21 → 1.13 | 80.55 | 44.8% | 0.694 | 9.03 | 8.92 | 0.629 | 0.77 | -4.71 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Đệm SL riêng khung 1W (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 73.61 | 44.2% | 0.651 | 9.75 | 7.55 | 0.407 | 0.919 | -9.25 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: EMA 50 → 1.13 | 108.25 | 45.1% | 0.626 | 9.22 | 11.74 | 0.559 | 0.692 | -7.74 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Cộng thêm ngưỡng điểm khung 1D → 3 | 113.55 | 50.7% | 0.789 | 7.55 | 15.04 | 0.645 | 0.953 | -12.16 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Coin phải mạnh hơn BTC trong N ngày → 14 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: MACD cắt lên Signal → 0.563 | 84.85 | 40.9% | 0.418 | 14.58 | 5.82 | 0.41 | 0.424 | -14.41 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 112.14 | 51.4% | 0.813 | 7.45 | 15.05 | 0.659 | 0.985 | -12.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 108.6 | 36% | 0.395 | 21.02 | 5.17 | 0.327 | 0.464 | -8.97 |  |

### Vòng 1152 — ngẫu nhiên nhiều thông số · mốc: tổng 120.26R, win 52.8%, rủi ro tụt vốn 7.29R, lời÷rủi ro 16.50

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 4H → 2 | 107.46 | 33.8% | 0.281 | 23.8 | 4.52 | 0.278 | 0.284 | -14.12 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: BOS → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 | 100.99 | 45.2% | 0.643 | 10.39 | 9.72 | 0.504 | 0.792 | -15.51 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần R:R (/100) → 28 | 105.52 | 48.3% | 0.699 | 9.02 | 11.7 | 0.536 | 0.851 | -6.11 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: EMA 21 → 0.875 | 115.2 | 51.7% | 0.794 | 7.61 | 15.14 | 0.676 | 0.925 | -10.87 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 103.83 | 46.8% | 0.736 | 9.27 | 11.2 | 0.51 | 0.972 | -14.01 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần Elliott (/100) → 6 | 109.67 | 49.6% | 0.778 | 7.81 | 14.04 | 0.564 | 1.007 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Cộng thêm ngưỡng điểm khung 1W → -1 | 118.79 | 52.1% | 0.837 | 7.44 | 15.97 | 0.672 | 1.027 | -12.16 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + R:R tối thiểu riêng khung 4H → 2 | 106.38 | 40.1% | 0.364 | 13.44 | 7.92 | 0.304 | 0.409 | -7.35 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Break mây Ichimoku → 1 | 105.43 | 40% | 0.439 | 15.39 | 6.85 | 0.438 | 0.441 | -5.81 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Xác nhận khung nhỏ (A2) → W + % chốt ở TP1 → 0.287 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 112.32 | 38% | 0.449 | 15.52 | 7.24 | 0.41 | 0.485 | -7.74 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 119.36 | 52.1% | 0.829 | 7.14 | 16.72 | 0.694 | 0.975 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm tối thiểu của vùng đặt SL → 2 + Cộng điểm phân kỳ dương ẩn → 3 | 97.7 | 50% | 0.669 | 8.24 | 11.86 | 0.662 | 0.677 | -10.73 |  |

### Vòng 1151 — ngẫu nhiên nhiều thông số · mốc: tổng 120.26R, win 52.8%, rủi ro tụt vốn 7.25R, lời÷rủi ro 16.59

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Trọng số phần Momentum (/100) → 21 + Trọng số phần Trend (/100) → 12 | 115.61 | 50% | 0.814 | 7.69 | 15.03 | 0.638 | 1.017 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + R:R tối thiểu riêng khung 4H → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 120.57 | 41.5% | 0.385 | 12.03 | 10.02 | 0.337 | 0.426 | -7.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần SL (/100) → 9 | 108.85 | 45.9% | 0.633 | 9.05 | 12.03 | 0.6 | 0.664 | -8.93 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 117.26 | 50.3% | 0.798 | 8.09 | 14.49 | 0.541 | 1.088 | -12.06 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: MACD cắt lên Signal → 0.563 | 96.35 | 48.9% | 0.683 | 8.44 | 11.42 | 0.564 | 0.811 | -11.17 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Xác nhận khung nhỏ (A2) → W | 87.12 | 37% | 0.359 | 17.32 | 5.03 | 0.279 | 0.43 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Điểm vùng: EMA 200 → 1 | 117.63 | 51.3% | 0.784 | 7.86 | 14.97 | 0.631 | 0.979 | -7.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 109.45 | 46.2% | 0.588 | 9.67 | 11.32 | 0.604 | 0.574 | -9.57 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần SL (/100) → 9 | 115.01 | 50.7% | 0.799 | 7.7 | 14.94 | 0.627 | 0.996 | -11.14 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 85.31 | 45.3% | 0.496 | 10.46 | 8.16 | 0.46 | 0.531 | -10.16 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Trọng số phần R:R (/100) → 28 | 118.04 | 51.4% | 0.831 | 7.48 | 15.78 | 0.677 | 1.004 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần SL (/100) → 9 | 102.56 | 44.5% | 0.625 | 10.84 | 9.46 | 0.609 | 0.64 | -10.49 |  |

### Vòng 1150 — ngẫu nhiên nhiều thông số · mốc: tổng 123.28R, win 54%, rủi ro tụt vốn 6.66R, lời÷rủi ro 18.51

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 114.29 | 48.8% | 0.714 | 8.75 | 13.06 | 0.602 | 0.827 | -14.28 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Entry (/100) → 33 | 130.03 | 41.6% | 0.419 | 11.8 | 11.02 | 0.386 | 0.448 | -5.85 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: EMA 200 → 3 + Xác nhận khung nhỏ (A2) → W | 120.51 | 40.8% | 0.473 | 13.93 | 8.65 | 0.456 | 0.488 | -5.22 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 103.39 | 49.6% | 0.766 | 7.42 | 13.93 | 0.49 | 1.046 | -15.27 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: POC anchored → 4 | 31.11 | 58.8% | 0.194 | 5.25 | 5.93 | 0.229 | 0.165 | -5.5 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 106.79 | 39.6% | 0.371 | 13.17 | 8.11 | 0.27 | 0.453 | -6.54 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 125.58 | 51% | 0.832 | 7.64 | 16.44 | 0.65 | 1.031 | -14.11 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Trọng số phần SL (/100) → 9 + SL tối đa (% Entry) → 0.425 | 121.07 | 52.5% | 0.871 | 6.71 | 18.04 | 0.688 | 1.062 | -13.71 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 120.79 | 41.6% | 0.474 | 14.01 | 8.62 | 0.492 | 0.457 | -5 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Điểm vùng: Fib sóng 4 → 1.56 | 112.71 | 47.1% | 0.663 | 8.39 | 13.43 | 0.588 | 0.731 | -10.49 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần SL (/100) → 7 + Đệm SL riêng khung 1W (ATR) → 0.3 | 106.18 | 47.6% | 0.743 | 8.49 | 12.51 | 0.463 | 1.018 | -15.56 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 63.11 | 45% | 0.424 | 10.26 | 6.15 | 0.414 | 0.433 | -10.71 |  |

### Vòng 1149 — ngẫu nhiên nhiều thông số · mốc: tổng 120.26R, win 52.8%, rủi ro tụt vốn 7.28R, lời÷rủi ro 16.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Cộng điểm phân kỳ dương ẩn → 3 | 113.11 | 48.9% | 0.826 | 8.2 | 13.79 | 0.615 | 1.073 | -10.4 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Fib sóng 4 → 1.56 | 118.21 | 52.1% | 0.821 | 7.43 | 15.91 | 0.628 | 1.049 | -12.16 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 109.72 | 47.8% | 0.699 | 8.94 | 12.27 | 0.745 | 0.644 | -11.75 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Fib sóng 4 → 1.56 | 142.34 | 43.3% | 0.576 | 11.35 | 12.54 | 0.722 | 0.436 | -15.91 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: HVN anchored → 0.313 + % chốt ở TP1 → 0.287 | 115.42 | 49.7% | 0.785 | 8.22 | 14.04 | 0.515 | 1.091 | -12.04 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: EMA 21 → 1.13 | 113.41 | 50.3% | 0.761 | 7.74 | 14.65 | 0.597 | 0.941 | -11.14 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Khung lớn phải tăng (trend ≥) → 0.375 | 81.42 | 47.1% | 0.59 | 9.22 | 8.83 | 0.41 | 0.804 | -10.22 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 200 → 1 | 117.18 | 51% | 0.776 | 7.95 | 14.74 | 0.631 | 0.958 | -7.16 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Cộng thêm ngưỡng điểm khung 1W → -1 + Số TP tối đa → 3 + Trọng số phần Momentum (/100) → 25 | 106.82 | 48.7% | 0.712 | 8.49 | 12.58 | 0.648 | 0.776 | -9.84 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: EMA 200 → 3 | 108.35 | 41.2% | 0.366 | 11.94 | 9.07 | 0.285 | 0.434 | -7.35 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: POC anchored → 2 | 88.12 | 43.1% | 0.576 | 10.44 | 8.44 | 0.438 | 0.72 | -7.85 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cộng thêm ngưỡng điểm khung 4H → 2 + % chốt ở TP1 → 0.287 | 66.03 | 44.2% | 0.512 | 10.33 | 6.39 | 0.392 | 0.659 | -11.19 |  |

### Vòng 1148 — ngẫu nhiên nhiều thông số · mốc: tổng 120.26R, win 52.8%, rủi ro tụt vốn 7.19R, lời÷rủi ro 16.73

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: HVN cố định → 0.438 | 104.03 | 50.7% | 0.722 | 8.01 | 12.99 | 0.631 | 0.828 | -11.17 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Lệnh chờ hết hạn sau (nến) → 8 + Cộng điểm phân kỳ dương ẩn → 2.25 + R:R tối thiểu riêng khung 1D → 2 | 103.63 | 45.3% | 0.573 | 9.55 | 10.85 | 0.532 | 0.611 | -9.24 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 86.03 | 49.1% | 0.742 | 7.96 | 10.81 | 0.536 | 0.994 | -18.62 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Divergence (/100) → 12 | 120.06 | 52.4% | 0.84 | 7.38 | 16.27 | 0.66 | 1.049 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + R:R tối thiểu riêng khung 4H → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 121.92 | 40.8% | 0.395 | 12.39 | 9.84 | 0.359 | 0.425 | -10.98 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: BOS → 0 | 117.04 | 52.2% | 0.848 | 7.28 | 16.08 | 0.659 | 1.061 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Khung lớn phải tăng (trend ≥) → 0.375 | 97.09 | 47.1% | 0.693 | 8.45 | 11.49 | 0.442 | 0.967 | -13.71 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 84.58 | 46% | 0.617 | 9.45 | 8.95 | 0.585 | 0.658 | -10.52 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Trend (/100) → 12 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.438 | 97.89 | 47.8% | 0.624 | 9.03 | 10.84 | 0.528 | 0.728 | -10.41 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần Entry (/100) → 33 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 100.26 | 48.6% | 0.726 | 8.12 | 12.35 | 0.482 | 0.985 | -13.71 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Khung lớn phải tăng (trend ≥) → 0.425 | 79.29 | 44.9% | 0.508 | 10.1 | 7.85 | 0.401 | 0.61 | -9.36 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.563 + Cổng Dow → TẮT | 96.3 | 33.8% | 0.26 | 27.41 | 3.51 | 0.168 | 0.353 | -36.52 |  |
