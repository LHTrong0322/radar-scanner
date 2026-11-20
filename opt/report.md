# Tối ưu tự động (chạy liên tục) — vòng 877

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 10179 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 46.3% | 96.15R | 0.586 | 5.7R | 9.69R | 9.92 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 146 | 53.4% | 120.8R | 0.827 | 5.09R | 7.26R | 16.64 | 28 | 17.9% | -9.92R | -0.354 | 10.54R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.77R | 2 | 0% | -2.3R |
| 4H | 108 | 54.6% | 93.61R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 46.3% | 96.15R | 9.69R | 9.92 | 31 | 12.9% | -13R |
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

### Vòng 877 — ngẫu nhiên nhiều thông số · mốc: tổng 120.8R, win 53.4%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.64

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + % chốt ở TP1 → 0.287 + Điểm vùng: BOS → 3 | 117.41 | 52.8% | 0.827 | 7.15 | 16.42 | 0.618 | 1.054 | -9.9 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần R:R (/100) → 33 | 89.72 | 50.4% | 0.754 | 7.61 | 11.79 | 0.56 | 0.972 | -16.39 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 113.1 | 50.3% | 0.739 | 8.11 | 13.95 | 0.553 | 0.948 | -10.89 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Ngưỡng điểm vào kèo → 77 + Trọng số phần Divergence (/100) → 9 | 103.27 | 50.7% | 0.707 | 7.67 | 13.46 | 0.671 | 0.745 | -9.69 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Mức MACD → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 112.25 | 47.9% | 0.791 | 8.34 | 13.46 | 0.568 | 1.054 | -9.17 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 120.8 | 53.4% | 0.827 | 7.26 | 16.64 | 0.635 | 1.042 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 39.22 | 41.4% | 0.451 | 9.73 | 4.03 | 0.372 | 0.547 | -7.55 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: Biên mây Ichimoku → 1.05 + Cộng thêm ngưỡng điểm khung 1W → -1 | 108.56 | 51.4% | 0.744 | 7.68 | 14.14 | 0.594 | 0.901 | -10.75 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Elliott (/100) → 10 + Số TP tối đa → 2 | 113.39 | 48.6% | 0.822 | 8.07 | 14.05 | 0.602 | 1.075 | -9.17 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 110.2 | 48.9% | 0.782 | 8.42 | 13.09 | 0.569 | 1.03 | -10.14 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + % chốt ở TP1 → 0.287 + Điểm vùng: MACD cắt lên Signal → 0.438 | 109.91 | 50.6% | 0.705 | 8.84 | 12.43 | 0.467 | 0.968 | -7.32 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + R:R tối thiểu tới TP1 → 2.38 | 97.17 | 48.1% | 0.623 | 8.46 | 11.49 | 0.475 | 0.76 | -11.49 |  |

### Vòng 876 — ngẫu nhiên nhiều thông số · mốc: tổng 117.34R, win 53.1%, rủi ro tụt vốn 7.27R, lời÷rủi ro 16.14

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: POC anchored → 2 | 100.73 | 49% | 0.676 | 8.47 | 11.89 | 0.523 | 0.835 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: MACD cắt lên Signal → 0.563 | 116.33 | 52.8% | 0.808 | 7.65 | 15.21 | 0.61 | 1.03 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần Momentum (/100) → 21 | 104.21 | 50% | 0.695 | 8.82 | 11.82 | 0.517 | 0.898 | -6.32 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Elliott (/100) → 6 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Mức MACD → 0.875 | 24.78 | 56.7% | 0.158 | 6.52 | 3.8 | 0.138 | 0.176 | -8.44 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: HVN anchored → 0.188 + Trọng số phần Divergence (/100) → 12 | 116.33 | 52.8% | 0.808 | 7.65 | 15.21 | 0.61 | 1.03 | -8.9 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 105.32 | 51.4% | 0.731 | 7.94 | 13.26 | 0.567 | 0.91 | -9.74 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: POC anchored → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 54.8 | 43.4% | 0.517 | 9.96 | 5.5 | 0.325 | 0.717 | -6.37 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Cổng Dow → CHẶT + Lệnh chờ hết hạn sau (nến) → 6 + Khung lớn phải tăng (trend ≥) → 0.375 | 66.27 | 51.5% | 0.669 | 6.96 | 9.52 | 0.285 | 0.977 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Trọng số phần SL (/100) → 7 + Điểm vùng: Biên mây Ichimoku → 1.35 | 110.73 | 51% | 0.753 | 8.11 | 13.65 | 0.576 | 0.948 | -6.59 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 50 → 1.13 | 21.17 | 55.7% | 0.134 | 6.79 | 3.12 | 0.107 | 0.161 | -7.68 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần SL (/100) → 7 | 140.33 | 38% | 0.494 | 18.88 | 7.43 | 0.29 | 0.698 | -10.48 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: MACD cắt lên Signal → 0.438 | 83.67 | 42.2% | 0.504 | 12.26 | 6.82 | 0.31 | 0.718 | -4.54 |  |

### Vòng 875 — ngẫu nhiên nhiều thông số · mốc: tổng 117.35R, win 52.8%, rủi ro tụt vốn 7.48R, lời÷rủi ro 15.69

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + R:R tối thiểu riêng khung 1D → 2 | 85.99 | 42.2% | 0.46 | 10.96 | 7.85 | 0.473 | 0.448 | -6.9 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 21 → 0.875 | 95.27 | 43.2% | 0.515 | 10.75 | 8.86 | 0.577 | 0.457 | -19.33 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: HVN cố định → 0.563 | 97.55 | 38.9% | 0.387 | 15.99 | 6.1 | 0.35 | 0.419 | 0.57 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Break mây Ichimoku → 3 | 125.41 | 43.8% | 0.486 | 10.6 | 11.83 | 0.513 | 0.461 | -9.82 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Trọng số phần SL (/100) → 7 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 138.94 | 37.8% | 0.482 | 19.08 | 7.28 | 0.279 | 0.689 | -12.02 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: HVN anchored → 0.313 | 113.96 | 51% | 0.786 | 7.93 | 14.37 | 0.585 | 1.008 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Entry (/100) → 28 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 116.15 | 52.1% | 0.796 | 7.28 | 15.95 | 0.592 | 1.03 | -8.91 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 22.33 | 42.3% | 0.429 | 8.04 | 2.78 | 0.247 | 0.599 | -1.76 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần SL (/100) → 7 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 20.6 | 34.9% | 0.327 | 10.73 | 1.92 | 0.243 | 0.404 | -10.33 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Elliott (/100) → 6 | 141.38 | 38.2% | 0.5 | 18.81 | 7.52 | 0.3 | 0.698 | -12.6 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Trọng số phần Entry (/100) → 33 + Điểm vùng: HVN cố định → 0.438 | 113.06 | 51% | 0.791 | 7.56 | 14.96 | 0.594 | 1.008 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Cộng thêm ngưỡng điểm khung 4H → -1 | 114.9 | 52.8% | 0.809 | 7.28 | 15.78 | 0.608 | 1.022 | -8.91 |  |

### Vòng 874 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Entry (/100) → 28 | 119.45 | 41.5% | 0.384 | 11.79 | 10.13 | 0.337 | 0.423 | -9.46 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: MACD cắt lên Signal → 0.563 + R:R tối thiểu riêng khung 1W → 2 + Cộng điểm phân kỳ dương ẩn → 2.25 | 110.74 | 52.1% | 0.758 | 7.51 | 14.75 | 0.649 | 0.868 | -10.96 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Break mây Ichimoku → 3 | 110.54 | 50% | 0.682 | 8.6 | 12.85 | 0.543 | 0.84 | -8.65 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 4H → 2 + Cổng Dow → TẮT | 97.34 | 36.4% | 0.303 | 18.39 | 5.29 | 0.343 | 0.264 | -16.52 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Trọng số phần SL (/100) → 9 + Điểm vùng: BOS → 3 | 117.4 | 52.4% | 0.821 | 7.5 | 15.65 | 0.652 | 1.008 | -9.92 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu tới TP1 → 2.38 | 71.26 | 47.1% | 0.524 | 9.02 | 7.9 | 0.458 | 0.586 | -16.54 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Entry (/100) → 33 | 107.47 | 47.1% | 0.779 | 8.33 | 12.9 | 0.647 | 0.927 | -8.59 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 9 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: EMA 21 → 0.875 | 116.15 | 52% | 0.774 | 7.56 | 15.36 | 0.649 | 0.91 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 78.75 | 45.7% | 0.563 | 9.36 | 8.41 | 0.465 | 0.66 | -10.39 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 113.52 | 49% | 0.742 | 8.29 | 13.69 | 0.658 | 0.836 | -10.48 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 56.17 | 37.4% | 0.244 | 19.2 | 2.93 | 0.165 | 0.316 | -7.19 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + SL tối đa (% Entry) → 0.425 + Điểm vùng: BOS → 3 + Trọng số phần Divergence (/100) → 9 | 118.49 | 50.9% | 0.736 | 8.47 | 13.99 | 0.58 | 0.915 | -9.92 |  |

### Vòng 873 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + R:R tối thiểu tới TP1 → 2.63 | 98.9 | 50.8% | 0.824 | 7.31 | 13.53 | 0.528 | 1.12 | -9.6 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần SL (/100) → 7 | 87.85 | 50.4% | 0.751 | 7.77 | 11.31 | 0.553 | 0.982 | -16.39 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Mức MACD → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + R:R tối thiểu riêng khung 1D → 2 | 86.59 | 42.1% | 0.456 | 11.28 | 7.68 | 0.46 | 0.452 | -6.99 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Cộng điểm phân kỳ dương ẩn → 3 | 119.45 | 41.5% | 0.384 | 12.01 | 9.95 | 0.337 | 0.423 | -10.45 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: EMA 200 → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 102.54 | 47.1% | 0.743 | 8.47 | 12.11 | 0.504 | 1.012 | -10.17 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: BOS → 3 | 113.3 | 53.1% | 0.771 | 7.9 | 14.34 | 0.635 | 0.92 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: BOS → 1 + Cổng Dow → CHẶT | 94.14 | 53.5% | 0.73 | 7.11 | 13.24 | 0.413 | 1.032 | -12.01 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: HVN cố định → 0.438 | 95.29 | 38.6% | 0.35 | 17.27 | 5.52 | 0.338 | 0.363 | -5.37 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 87.71 | 48% | 0.702 | 9.12 | 9.62 | 0.414 | 1.003 | -7.02 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 104.68 | 49.7% | 0.684 | 9.06 | 11.55 | 0.505 | 0.897 | -7.34 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: POC anchored → 4 + Trần điểm khi chart yếu (Trend < x) → -0.375 + % chốt ở TP1 → 0.307 | 115.96 | 51% | 0.768 | 8.12 | 14.28 | 0.599 | 0.94 | -4.76 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Số TP tối đa → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 120.92 | 47.9% | 0.715 | 9.76 | 12.39 | 0.652 | 0.774 | -4.3 |  |

### Vòng 872 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.31R, lời÷rủi ro 16.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Coin phải mạnh hơn BTC trong N ngày → 14 | 79.94 | 48.8% | 0.65 | 8.94 | 8.94 | 0.486 | 0.853 | -13.81 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: MACD cắt lên Signal → 0.563 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 32.21 | 39.5% | 0.398 | 9.78 | 3.29 | 0.296 | 0.531 | -7.64 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 139.4 | 45.1% | 0.567 | 10.64 | 13.1 | 0.669 | 0.457 | -12.27 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu riêng khung 1W → 2 | 110.44 | 48.5% | 0.646 | 10 | 11.04 | 0.616 | 0.673 | -5.01 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 117.02 | 52% | 0.791 | 7.48 | 15.64 | 0.635 | 0.959 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 + % chốt ở TP1 → 0.287 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 108.57 | 51% | 0.759 | 7.74 | 14.03 | 0.562 | 0.982 | -9.61 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 117.13 | 52.7% | 0.802 | 7.2 | 16.27 | 0.634 | 0.989 | -9.92 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trọng số phần R:R (/100) → 33 | 139.02 | 44.7% | 0.647 | 11.3 | 12.3 | 0.584 | 0.71 | -20.59 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 | 120.72 | 51.6% | 0.759 | 8.39 | 14.39 | 0.584 | 0.965 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 116.51 | 50.7% | 0.798 | 7.62 | 15.29 | 0.673 | 0.92 | -8.97 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần Divergence (/100) → 9 + Trọng số phần Momentum (/100) → 25 | 112.97 | 50.3% | 0.769 | 7.71 | 14.65 | 0.596 | 0.958 | -8.9 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: EMA 50 → 1.13 | 113.56 | 50.3% | 0.773 | 8.03 | 14.14 | 0.598 | 0.97 | -8.9 |  |

### Vòng 871 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.33R, lời÷rủi ro 16.23

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 86.24 | 49.3% | 0.634 | 8.18 | 10.54 | 0.561 | 0.714 | -9.36 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm tối thiểu của vùng đặt SL → 4 | 123.01 | 49.7% | 0.737 | 8.41 | 14.63 | 0.73 | 0.745 | -10.8 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm tối thiểu của vùng đặt SL → 4 | 115.44 | 51.7% | 0.785 | 7.57 | 15.25 | 0.62 | 0.967 | -8.63 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Đệm SL riêng khung 1D (ATR) → 0.3 | 118.13 | 47.6% | 0.712 | 9.76 | 12.1 | 0.656 | 0.765 | -5.32 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: HVN cố định → 0.563 | 112.28 | 52.7% | 0.759 | 7.9 | 14.21 | 0.635 | 0.893 | -10.03 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 122.2 | 49% | 0.778 | 8.35 | 14.63 | 0.723 | 0.844 | -10.5 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: POC anchored → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Trend (/100) → 12 | 22.2 | 56.5% | 0.144 | 6.79 | 3.27 | 0.171 | 0.121 | -9.53 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + % chốt ở TP1 → 0.287 + Điểm vùng: Break mây Ichimoku → 3 | 105.98 | 36.2% | 0.376 | 21.89 | 4.84 | 0.229 | 0.511 | -13.51 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.438 | 108.11 | 49% | 0.697 | 9.14 | 11.83 | 0.451 | 0.989 | -7.34 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Mức MACD → 1.13 | 97.69 | 37.9% | 0.374 | 16.31 | 5.99 | 0.349 | 0.399 | -0.04 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Break mây Ichimoku → 3 | 25.94 | 48.3% | 0.079 | 10 | 2.59 | 0.129 | 0.04 | -11.75 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Entry (/100) → 28 | 117.65 | 51.7% | 0.8 | 7.45 | 15.79 | 0.631 | 0.987 | -9.92 |  |

### Vòng 870 — ngẫu nhiên nhiều thông số · mốc: tổng 116.33R, win 53.1%, rủi ro tụt vốn 7.21R, lời÷rủi ro 16.13

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 200 → 1 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 79.57 | 37.5% | 0.307 | 18.33 | 4.34 | 0.338 | 0.277 | -4.93 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm tối thiểu của vùng đặt SL → 4 | 106 | 50.3% | 0.741 | 7.54 | 14.06 | 0.674 | 0.81 | -7.92 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: HVN cố định → 0.438 | 110.38 | 51.2% | 0.69 | 8.27 | 13.35 | 0.55 | 0.861 | -11.51 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 38.84 | 41.2% | 0.457 | 9.76 | 3.98 | 0.38 | 0.548 | -5.18 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 140 | 38.3% | 0.488 | 19.12 | 7.32 | 0.336 | 0.641 | -13.7 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức RSI 30/70 → 1.13 | 116.33 | 53.1% | 0.814 | 7.21 | 16.13 | 0.635 | 1.021 | -9.92 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 48.95 | 42.3% | 0.441 | 10.24 | 4.78 | 0.289 | 0.601 | -16.6 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 104.28 | 51% | 0.664 | 8.87 | 11.76 | 0.588 | 0.756 | -10.08 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 27.42 | 55.3% | 0.183 | 6.93 | 3.96 | 0.233 | 0.141 | -10.87 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu riêng khung 1W → 2 | 106.39 | 48.5% | 0.637 | 8.26 | 12.88 | 0.643 | 0.631 | -8.19 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Lệnh chờ hết hạn sau (nến) → 6 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 96.91 | 47.9% | 0.692 | 8.8 | 11.01 | 0.7 | 0.683 | -10.48 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần R:R (/100) → 28 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 121.85 | 48.1% | 0.762 | 8.4 | 14.51 | 0.73 | 0.8 | -11.54 |  |

### Vòng 869 — ngẫu nhiên nhiều thông số · mốc: tổng 115.54R, win 52.1%, rủi ro tụt vốn 7.7R, lời÷rủi ro 15.01

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Mức RSI 30/70 → 0.875 | 126.35 | 48.3% | 0.702 | 10.07 | 12.55 | 0.675 | 0.727 | -5.36 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm tối thiểu của vùng đặt SL → 4 | 28.57 | 57.7% | 0.183 | 6.14 | 4.65 | 0.244 | 0.128 | -9.14 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 131.19 | 50.3% | 0.836 | 7.78 | 16.86 | 0.815 | 0.858 | -11.53 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần SL (/100) → 9 | 92.62 | 44% | 0.48 | 10.76 | 8.61 | 0.531 | 0.435 | -15.73 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 66.08 | 40.9% | 0.52 | 10.55 | 6.26 | 0.428 | 0.6 | -7.51 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: POC anchored → 2 | 92.77 | 46.5% | 0.644 | 9.37 | 9.9 | 0.413 | 0.829 | -11.72 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 57.57 | 40.7% | 0.468 | 11.22 | 5.13 | 0.439 | 0.493 | -4.77 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 200 → 3 | 80.13 | 48.3% | 0.679 | 8.48 | 9.45 | 0.474 | 0.899 | -17.4 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: POC anchored → 4 | 26.7 | 57% | 0.155 | 8.12 | 3.29 | 0.227 | 0.108 | -5.85 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: EMA 200 → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 21.35 | 51% | 0.088 | 14.67 | 1.46 | -0.002 | 0.156 | -14.67 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần Trend (/100) → 12 | 90.56 | 47.5% | 0.642 | 9.39 | 9.64 | 0.491 | 0.81 | -8.27 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Xác nhận khung nhỏ (A2) → W + Lệnh chờ hết hạn sau (nến) → 6 | 77.56 | 37.8% | 0.311 | 17.98 | 4.31 | 0.33 | 0.294 | -7.15 |  |

### Vòng 868 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + % chốt ở TP1 → 0.287 + Trọng số phần Entry (/100) → 33 | 112.26 | 51.7% | 0.774 | 7.43 | 15.11 | 0.62 | 0.945 | -10.24 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Cộng điểm phân kỳ dương ẩn → 3 | 118.28 | 52.4% | 0.805 | 7.46 | 15.86 | 0.625 | 1.008 | -9.92 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Số TP tối đa → 2 + R:R tối thiểu riêng khung 1D → 2 | 109.74 | 46.3% | 0.62 | 9.04 | 12.14 | 0.593 | 0.646 | -6.87 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: BOS → 3 + R:R tối thiểu tới TP1 → 2.38 + Số TP tối đa → 2 | 96.28 | 47.8% | 0.613 | 8.46 | 11.38 | 0.47 | 0.748 | -11.49 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: HVN cố định → 0.563 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 124.13 | 49.4% | 0.786 | 8.17 | 15.19 | 0.743 | 0.835 | -10.5 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Entry (/100) → 33 | 106.88 | 51.4% | 0.742 | 7.59 | 14.08 | 0.605 | 0.887 | -10.75 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 116.01 | 51.7% | 0.779 | 7.66 | 15.14 | 0.635 | 0.932 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 31.09 | 38.3% | 0.27 | 13.04 | 2.38 | 0.38 | 0.155 | -3.03 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: HVN anchored → 0.313 | 96.73 | 49.7% | 0.649 | 8.58 | 11.27 | 0.547 | 0.758 | -9.34 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 102.68 | 49.4% | 0.667 | 8.72 | 11.78 | 0.526 | 0.814 | -10.97 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 97.49 | 44.4% | 0.637 | 9.78 | 9.97 | 0.512 | 0.782 | -6.19 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: POC anchored → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 | 106.85 | 46.5% | 0.629 | 10.39 | 10.28 | 0.612 | 0.644 | -5.33 |  |
