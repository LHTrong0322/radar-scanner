# Tối ưu tự động (chạy liên tục) — vòng 1398

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 16396 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 102.16R | 0.615 | 6.7R | 9.8R | 10.42 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 143 | 52.4% | 119.74R | 0.837 | 5.15R | 7.65R | 15.65 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 26 | 50% | 20.05R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 106 | 53.8% | 92.72R | 19 | 21.1% | -4.19R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 47% | 102.16R | 9.8R | 10.42 | 30 | 13.3% | -11.98R |
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

### Vòng 1398 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.65R, lời÷rủi ro 15.65

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trọng số phần Trend (/100) → 19 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 113.47 | 51.4% | 0.788 | 7.61 | 14.91 | 0.628 | 0.957 | -9.87 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: EMA 200 → 1 + Trọng số phần R:R (/100) → 33 + Cổng Dow → CHẶT | 83.08 | 52.6% | 0.716 | 7.63 | 10.89 | 0.4 | 1.011 | -10.28 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 115.51 | 51.4% | 0.825 | 7.79 | 14.83 | 0.62 | 1.055 | -12.16 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 106.62 | 49% | 0.735 | 8.37 | 12.74 | 0.574 | 0.923 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Đệm SL riêng khung 4H (ATR) → 0.3 | 182.91 | 39.6% | 0.614 | 16.32 | 11.21 | 0.511 | 0.721 | -10.6 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 87.88 | 46.7% | 0.526 | 9.22 | 9.53 | 0.565 | 0.49 | -10.06 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 32.24 | 40.2% | 0.393 | 9.54 | 3.38 | 0.302 | 0.516 | -5.28 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 106.85 | 50% | 0.752 | 8.11 | 13.18 | 0.61 | 0.891 | -13.19 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: BOS → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 97.19 | 50.4% | 0.79 | 8.21 | 11.84 | 0.524 | 1.079 | -10.89 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Cổng Dow → CHẶT + Điểm vùng: Mức MACD → 0.875 + Khung lớn phải tăng (trend ≥) → 0.375 | 77.83 | 51.4% | 0.714 | 7.2 | 10.81 | 0.309 | 1.045 | -14.25 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Cộng thêm ngưỡng điểm khung 1D → 7 + Trọng số phần SL (/100) → 9 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 127.66 | 49.7% | 0.824 | 8.12 | 15.72 | 0.789 | 0.865 | -10.84 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Trọng số phần Elliott (/100) → 6 | 118.98 | 51.7% | 0.832 | 7.39 | 16.1 | 0.7 | 0.974 | -9.36 |  |

### Vòng 1397 — ngẫu nhiên nhiều thông số · mốc: tổng 119.74R, win 52.4%, rủi ro tụt vốn 7.56R, lời÷rủi ro 15.84

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Cổng Dow → CHẶT + Điểm vùng: MACD cắt lên Signal → 0.563 | 88.22 | 53.2% | 0.795 | 6.71 | 13.15 | 0.425 | 1.109 | -14.25 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + R:R tối thiểu tới TP1 → 2.38 | 103.93 | 45.8% | 0.626 | 9.32 | 11.15 | 0.563 | 0.683 | -12.45 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần SL (/100) → 7 | 100.55 | 48.9% | 0.734 | 8.19 | 12.28 | 0.483 | 1.004 | -13.71 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Break mây Ichimoku → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 155.99 | 37% | 0.489 | 19.68 | 7.93 | 0.38 | 0.595 | -9.43 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Trọng số phần SL (/100) → 7 + Đệm SL riêng khung 4H (ATR) → 0.3 | 174.6 | 38.9% | 0.59 | 17.61 | 9.91 | 0.496 | 0.688 | -8.79 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: POC volume profile cố định → 0.688 + % chốt ở TP1 → 0.307 + Trọng số phần SL (/100) → 7 | 119.8 | 52.4% | 0.838 | 7.56 | 15.85 | 0.657 | 1.042 | -12.17 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 115.55 | 51% | 0.808 | 7.58 | 15.24 | 0.615 | 1.027 | -11.98 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Elliott (/100) → 10 + R:R tối thiểu riêng khung 1D → 2 | 105.36 | 44.6% | 0.635 | 9.26 | 11.38 | 0.612 | 0.654 | -5.87 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần R:R (/100) → 28 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 16.65 | 49.1% | 0.103 | 8.29 | 2.01 | 0.152 | 0.061 | -8.15 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Trọng số phần Divergence (/100) → 12 | 119.74 | 52.4% | 0.837 | 7.56 | 15.84 | 0.656 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Số TP tối đa → 1 | 119.74 | 52.4% | 0.837 | 7.56 | 15.84 | 0.656 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 115.8 | 52.4% | 0.799 | 7.36 | 15.73 | 0.634 | 0.985 | -12.16 |  |

### Vòng 1396 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 6.91R, lời÷rủi ro 17.65

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 107.91 | 50.3% | 0.696 | 9.01 | 11.98 | 0.605 | 0.804 | -12.12 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 | 101.16 | 41.7% | 0.391 | 11.42 | 8.86 | 0.402 | 0.382 | -13.47 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Trọng số phần Entry (/100) → 33 + Điểm vùng: POC volume profile cố định → 0.688 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 99.42 | 48.5% | 0.731 | 8.18 | 12.15 | 0.503 | 0.972 | -13.97 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Cộng thêm ngưỡng điểm khung 1D → 4 | 119.73 | 52.1% | 0.843 | 7.09 | 16.89 | 0.7 | 0.999 | -12.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 71.4 | 45.4% | 0.661 | 9.18 | 7.78 | 0.413 | 0.948 | -4.75 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Elliott (/100) → 6 | 114.19 | 49.3% | 0.827 | 8.03 | 14.22 | 0.615 | 1.073 | -10.4 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + SL tối đa (% Entry) → 0.425 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 115.63 | 52% | 0.781 | 7.89 | 14.66 | 0.587 | 0.997 | -7.58 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 117.55 | 50.3% | 0.8 | 8.02 | 14.66 | 0.624 | 1.004 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 111.79 | 49.7% | 0.771 | 8 | 13.97 | 0.592 | 0.98 | -12.1 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Cổng Dow → CHẶT + R:R tối thiểu riêng khung 1D → 2 | 82.74 | 48.2% | 0.604 | 8.03 | 10.3 | 0.428 | 0.729 | -11.02 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: POC anchored → 2 | 130.9 | 42.1% | 0.421 | 11.36 | 11.52 | 0.419 | 0.422 | -2.26 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Biên mây Ichimoku → 1.05 | 89.41 | 50% | 0.71 | 8.52 | 10.49 | 0.504 | 0.928 | -14.15 |  |

### Vòng 1395 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.08R, lời÷rủi ro 17.22

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức MACD → 1.13 | 110.26 | 48.1% | 0.829 | 8.12 | 13.58 | 0.587 | 1.106 | -10.43 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Biên mây Ichimoku → 1.05 | 109.21 | 51% | 0.764 | 7.66 | 14.26 | 0.653 | 0.879 | -11.97 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 119.89 | 52% | 0.81 | 7.77 | 15.43 | 0.633 | 0.992 | -6.21 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 84.38 | 46.1% | 0.555 | 10.05 | 8.4 | 0.487 | 0.633 | -10.35 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 107.68 | 51.4% | 0.769 | 7.99 | 13.48 | 0.61 | 0.948 | -12.19 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu riêng khung 4H → 2 + Cổng Dow → CHẶT | 61.45 | 41% | 0.277 | 12.87 | 4.77 | 0.302 | 0.258 | -13.5 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 75.19 | 45% | 0.69 | 9.09 | 8.27 | 0.541 | 0.872 | -3.37 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức RSI 30/70 → 1.13 + Cộng thêm ngưỡng điểm khung 1D → 7 | 114.19 | 49.3% | 0.827 | 8.15 | 14.01 | 0.615 | 1.073 | -8.5 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 99.07 | 47% | 0.665 | 9.23 | 10.73 | 0.504 | 0.846 | -9.56 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + % chốt ở TP1 → 0.287 + Trọng số phần Elliott (/100) → 6 | 121.83 | 53.5% | 0.858 | 7.08 | 17.21 | 0.691 | 1.045 | -12.14 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Trend (/100) → 19 | 111.48 | 51.4% | 0.774 | 7.66 | 14.55 | 0.657 | 0.891 | -12.17 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: HVN anchored → 0.313 + Trọng số phần Trend (/100) → 12 | 116.96 | 51% | 0.818 | 7.63 | 15.33 | 0.654 | 0.999 | -11.13 |  |

### Vòng 1394 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.04R, lời÷rủi ro 17.32

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: EMA 200 → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 139.7 | 37.4% | 0.517 | 18.09 | 7.72 | 0.296 | 0.717 | -7.03 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Entry (/100) → 28 | 53.06 | 32.9% | 0.129 | 29.77 | 1.78 | 0.246 | 0.045 | -9.34 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần R:R (/100) → 28 + Điểm vùng: MACD cắt lên Signal → 0.438 | 104.79 | 48.4% | 0.685 | 8.86 | 11.83 | 0.56 | 0.825 | -8.56 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu riêng khung 1D → 2 | 102.86 | 47.6% | 0.62 | 8.8 | 11.69 | 0.676 | 0.569 | -12.2 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Xác nhận khung nhỏ (A2) → W | 119.31 | 41.1% | 0.392 | 14.9 | 8.01 | 0.394 | 0.391 | -10.01 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức MACD → 0.875 | 71.74 | 45.8% | 0.671 | 8.98 | 7.99 | 0.475 | 0.902 | -5.79 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 110.25 | 42.5% | 0.422 | 12.03 | 9.16 | 0.552 | 0.29 | -15.34 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 121.24 | 53.1% | 0.848 | 7.2 | 16.84 | 0.676 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần R:R (/100) → 33 | 127.04 | 50.7% | 0.836 | 7.87 | 16.14 | 0.81 | 0.865 | -12.74 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: POC anchored → 4 | 109.8 | 47.9% | 0.65 | 8.55 | 12.84 | 0.573 | 0.72 | -6.49 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + R:R tối thiểu riêng khung 1D → 2 | 107.91 | 46.5% | 0.635 | 8.93 | 12.08 | 0.627 | 0.642 | -11.6 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: HVN anchored → 0.313 | 95.62 | 48.8% | 0.777 | 8.14 | 11.75 | 0.5 | 1.089 | -13.97 |  |

### Vòng 1393 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7R, lời÷rủi ro 17.42

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 200 → 1 | 128.71 | 49.1% | 0.771 | 8.92 | 14.43 | 0.8 | 0.742 | -11.22 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Elliott (/100) → 6 | 119.9 | 53.1% | 0.838 | 6.99 | 17.15 | 0.675 | 1.024 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Điểm vùng: POC anchored → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 105.67 | 50% | 0.704 | 8.2 | 12.89 | 0.58 | 0.835 | -12.16 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: POC volume profile cố định → 0.688 | 98.49 | 46.5% | 0.684 | 9.12 | 10.8 | 0.551 | 0.833 | -8.13 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 + Cổng Dow → TẮT | 119.27 | 42.2% | 0.503 | 13.22 | 9.02 | 0.583 | 0.433 | -16.83 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Trọng số phần Elliott (/100) → 10 | 119.73 | 52.1% | 0.843 | 7.25 | 16.51 | 0.7 | 0.999 | -11.13 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 97.47 | 46.2% | 0.672 | 9.16 | 10.64 | 0.531 | 0.833 | -8.24 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 117.29 | 52.7% | 0.803 | 7.47 | 15.7 | 0.587 | 1.051 | -8.9 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Cộng thêm ngưỡng điểm khung 1W → -1 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 115.19 | 48.1% | 0.748 | 8.39 | 13.73 | 0.63 | 0.876 | -12.43 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần SL (/100) → 7 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: BOS → 0 | 91.91 | 47% | 0.56 | 9.25 | 9.94 | 0.507 | 0.613 | -12.03 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 107.02 | 48.3% | 0.709 | 8.64 | 12.39 | 0.671 | 0.746 | -9.82 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Trend (/100) → 19 | 121.94 | 53.5% | 0.859 | 7 | 17.42 | 0.694 | 1.043 | -12.16 |  |

### Vòng 1392 — ngẫu nhiên nhiều thông số · mốc: tổng 119.79R, win 53.3%, rủi ro tụt vốn 7.2R, lời÷rủi ro 16.64

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần R:R (/100) → 33 + R:R tối thiểu riêng khung 1D → 2 | 34.01 | 38.4% | 0.304 | 12.48 | 2.73 | 0.444 | 0.159 | -2.02 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + % chốt ở TP1 → 0.307 + Số TP tối đa → 1 + Trọng số phần Elliott (/100) → 6 | 139.05 | 42.1% | 0.457 | 11.34 | 12.26 | 0.444 | 0.469 | -7.19 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Trọng số phần Elliott (/100) → 6 | 119.59 | 52.9% | 0.867 | 7.07 | 16.92 | 0.675 | 1.082 | -9.86 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Xác nhận khung nhỏ (A2) → W | 110.77 | 39.5% | 0.438 | 15.41 | 7.19 | 0.355 | 0.51 | -4.48 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Biên mây Ichimoku → 1.35 + Đệm SL riêng khung 1D (ATR) → 0.3 | 109.21 | 46.1% | 0.709 | 10.43 | 10.47 | 0.792 | 0.644 | -8.93 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 95.15 | 35.6% | 0.326 | 22.41 | 4.25 | 0.237 | 0.397 | -7.27 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Cộng thêm ngưỡng điểm khung 4H → -1 | 106.71 | 47.8% | 0.663 | 8.41 | 12.69 | 0.617 | 0.705 | -11.17 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Cộng thêm ngưỡng điểm khung 1W → -1 | 119.04 | 52.9% | 0.863 | 7.17 | 16.6 | 0.687 | 1.054 | -9.79 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 125.36 | 44.8% | 0.567 | 10.19 | 12.3 | 0.551 | 0.583 | -14.51 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần R:R (/100) → 33 + Trọng số phần Entry (/100) → 28 | 74.59 | 48.4% | 0.602 | 8.82 | 8.46 | 0.457 | 0.696 | -10.58 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Lệnh chờ hết hạn sau (nến) → 8 | 111.01 | 48.7% | 0.74 | 8.76 | 12.67 | 0.564 | 0.941 | -10.43 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: MACD cắt lên Signal → 0.438 + Lệnh chờ hết hạn sau (nến) → 8 | 83 | 46.4% | 0.55 | 10.21 | 8.13 | 0.387 | 0.733 | -10.95 |  |

### Vòng 1391 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 108.17 | 52.4% | 0.756 | 7.95 | 13.61 | 0.694 | 0.825 | -11.34 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Entry (/100) → 28 + Điểm vùng: POC anchored → 2 | 94.02 | 45.3% | 0.635 | 9.78 | 9.61 | 0.424 | 0.82 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Entry (/100) → 33 + Cộng điểm phân kỳ dương ẩn → 2.25 | 115.89 | 50.3% | 0.799 | 7.8 | 14.86 | 0.654 | 0.955 | -10.11 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 108.76 | 50.6% | 0.706 | 8.92 | 12.19 | 0.633 | 0.797 | -6.93 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 118.01 | 52.1% | 0.843 | 6.95 | 16.98 | 0.67 | 1.031 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm tối thiểu của vùng đặt SL → 4 | 98.46 | 48% | 0.665 | 8.61 | 11.44 | 0.541 | 0.79 | -12.04 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trọng số phần Elliott (/100) → 6 | 117.55 | 51.4% | 0.816 | 7.63 | 15.41 | 0.627 | 1.034 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: MACD cắt lên Signal → 0.563 | 99.27 | 49.7% | 0.666 | 8.64 | 11.49 | 0.535 | 0.803 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cộng điểm phân kỳ dương ẩn → 2.25 + Lệnh chờ hết hạn sau (nến) → 8 | 116.37 | 50.6% | 0.746 | 8.32 | 13.99 | 0.594 | 0.919 | -13.75 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Cộng điểm phân kỳ dương ẩn → 3 | 120.47 | 52.8% | 0.848 | 7.21 | 16.71 | 0.694 | 1.021 | -12.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần SL (/100) → 9 + Điểm vùng: EMA 50 → 1.13 | 133.77 | 41.8% | 0.43 | 11.31 | 11.83 | 0.438 | 0.423 | -4.37 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 117.89 | 53.5% | 0.819 | 7.21 | 16.35 | 0.669 | 0.986 | -12.14 |  |

### Vòng 1390 — ngẫu nhiên nhiều thông số · mốc: tổng 116.82R, win 52.5%, rủi ro tụt vốn 7.27R, lời÷rủi ro 16.07

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 70.9 | 43.1% | 0.65 | 10.14 | 6.99 | 0.43 | 0.901 | -4.67 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 4H → 2 | 120.08 | 34.5% | 0.311 | 23.13 | 5.19 | 0.334 | 0.295 | -13.88 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: EMA 50 → 1.13 | 114.39 | 51.1% | 0.823 | 7.64 | 14.97 | 0.655 | 1.026 | -7.88 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 109.15 | 48.3% | 0.723 | 8.51 | 12.83 | 0.616 | 0.834 | -8.79 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 114.48 | 52.1% | 0.818 | 7.22 | 15.86 | 0.671 | 0.992 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1W → 2 | 116.19 | 40.9% | 0.377 | 12.83 | 9.06 | 0.396 | 0.362 | -0.57 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: Break mây Ichimoku → 3 + SL tối đa (% Entry) → 0.425 | 110.5 | 50% | 0.727 | 8.21 | 13.46 | 0.614 | 0.853 | -4.49 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần SL (/100) → 9 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 50 → 1.13 | 74.4 | 44.5% | 0.676 | 8.79 | 8.46 | 0.471 | 0.932 | -13.99 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Fib sóng 4 → 1.56 | 115.82 | 52.1% | 0.827 | 7.3 | 15.87 | 0.672 | 1.012 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Trend (/100) → 19 | 121.61 | 49.7% | 0.805 | 8.09 | 15.03 | 0.815 | 0.794 | -9.46 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: Fib sóng 4 → 0.938 | 125.6 | 42.6% | 0.616 | 11.32 | 11.1 | 0.556 | 0.677 | -11.68 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 200 → 1 + Điểm vùng: HVN cố định → 0.563 | 123.59 | 49.7% | 0.777 | 8.34 | 14.82 | 0.789 | 0.761 | -5.59 |  |

### Vòng 1389 — ngẫu nhiên nhiều thông số · mốc: tổng 121.94R, win 53.5%, rủi ro tụt vốn 7.06R, lời÷rủi ro 17.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 120.93 | 53.1% | 0.846 | 7.13 | 16.96 | 0.672 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần Entry (/100) → 28 | 120.94 | 53.1% | 0.846 | 7.17 | 16.87 | 0.672 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Cộng thêm ngưỡng điểm khung 1W → -1 | 121.94 | 53.5% | 0.859 | 7.06 | 17.27 | 0.694 | 1.043 | -12.16 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Xác nhận khung nhỏ (A2) → W | 70.98 | 35.5% | 0.303 | 21.09 | 3.37 | 0.302 | 0.305 | -15 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần Momentum (/100) → 25 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 66.88 | 45.3% | 0.631 | 9.19 | 7.28 | 0.471 | 0.825 | -5.79 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.9 | 58.3% | 0.151 | 6.28 | 5.08 | 0.228 | 0.087 | -5.92 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Elliott (/100) → 10 | 39.16 | 42% | 0.445 | 9.35 | 4.19 | 0.362 | 0.544 | -5.18 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: EMA 200 → 1 | 32.77 | 38.2% | 0.368 | 11.04 | 2.97 | 0.279 | 0.483 | -7.55 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Entry (/100) → 33 + Điểm vùng: EMA 21 → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 101.25 | 49.3% | 0.693 | 8.16 | 12.41 | 0.706 | 0.681 | -9.59 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần Divergence (/100) → 12 | 112.54 | 48.6% | 0.804 | 8.34 | 13.49 | 0.598 | 1.041 | -9.38 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 66.92 | 44.5% | 0.523 | 10.32 | 6.48 | 0.394 | 0.673 | -10.44 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần Momentum (/100) → 21 | 121.19 | 53.1% | 0.848 | 7.09 | 17.09 | 0.694 | 1.017 | -10.84 |  |
