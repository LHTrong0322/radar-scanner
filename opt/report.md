# Tối ưu tự động (chạy liên tục) — vòng 903

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 10491 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 93.39R | 0.573 | 6.44R | 10.01R | 9.33 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 145 | 53.1% | 118.09R | 0.814 | 5.09R | 7.53R | 15.68 | 28 | 17.9% | -9.92R | -0.354 | 10.54R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.77R | 2 | 0% | -2.3R |
| 4H | 107 | 54.2% | 90.9R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 93.39R | 10.01R | 9.33 | 31 | 12.9% | -13R |
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

### Vòng 903 — ngẫu nhiên nhiều thông số · mốc: tổng 118.09R, win 53.1%, rủi ro tụt vốn 7.53R, lời÷rủi ro 15.68

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cổng Dow → CHẶT + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 59.41 | 48.8% | 0.483 | 9.25 | 6.42 | 0.282 | 0.663 | -9.23 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần SL (/100) → 9 | 115.92 | 51% | 0.738 | 8.15 | 14.22 | 0.603 | 0.894 | -11.51 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 123.23 | 42.8% | 0.573 | 12.29 | 10.03 | 0.56 | 0.587 | -20.3 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Trọng số phần SL (/100) → 7 + Cộng thêm ngưỡng điểm khung 1W → -1 | 116.37 | 52.1% | 0.808 | 7.67 | 15.17 | 0.64 | 0.996 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 112.98 | 50.3% | 0.769 | 8.35 | 13.53 | 0.598 | 0.962 | -7.58 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 + Đệm SL riêng khung 1W (ATR) → 0.3 | 95.99 | 46.7% | 0.701 | 9.27 | 10.35 | 0.418 | 0.956 | -10.69 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: BOS → 1 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: EMA 50 → 1.13 | 114.74 | 51% | 0.791 | 7.87 | 14.58 | 0.619 | 0.987 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cộng thêm ngưỡng điểm khung 1W → 2 | 131.37 | 45.5% | 0.559 | 10.98 | 11.96 | 0.645 | 0.474 | -11.21 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 103.95 | 49.3% | 0.702 | 8.74 | 11.89 | 0.535 | 0.899 | -9.92 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần SL (/100) → 7 | 38 | 41.4% | 0.437 | 10.05 | 3.78 | 0.358 | 0.53 | -8.25 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Lệnh chờ hết hạn sau (nến) → 8 | 115.09 | 51.3% | 0.757 | 8.04 | 14.31 | 0.571 | 0.976 | -11.29 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 121.71 | 50% | 0.77 | 8.1 | 15.03 | 0.743 | 0.802 | -10.5 |  |

### Vòng 902 — ngẫu nhiên nhiều thông số · mốc: tổng 118.09R, win 53.1%, rủi ro tụt vốn 7.57R, lời÷rủi ro 15.60

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 141.23 | 38.9% | 0.49 | 18.56 | 7.61 | 0.319 | 0.662 | -13.24 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + % chốt ở TP1 → 0.307 | 115.71 | 53.1% | 0.809 | 7.44 | 15.55 | 0.623 | 1.009 | -9.93 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Lệnh chờ hết hạn sau (nến) → 6 | 66.58 | 45% | 0.555 | 9.71 | 6.86 | 0.424 | 0.686 | -8.9 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: BOS → 1 + Điểm vùng: Mức MACD → 1.13 + Trọng số phần Entry (/100) → 33 | 104.1 | 39.1% | 0.407 | 16.32 | 6.38 | 0.366 | 0.445 | -2.94 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu tới TP1 → 2.63 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần Trend (/100) → 19 | 109.55 | 51.5% | 0.818 | 8.2 | 13.36 | 0.645 | 1 | -8.77 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: POC volume profile cố định → 0.813 | 114.39 | 50% | 0.784 | 8.04 | 14.23 | 0.673 | 0.891 | -8.97 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần R:R (/100) → 33 | 101.44 | 51.4% | 0.685 | 8.28 | 12.25 | 0.637 | 0.739 | -9.72 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Đệm SL riêng khung 1D (ATR) → 0.3 | 116.72 | 47.6% | 0.695 | 10.2 | 11.44 | 0.656 | 0.731 | -5.32 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 74.54 | 47% | 0.637 | 9.26 | 8.05 | 0.434 | 0.882 | -6.03 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Trend (/100) → 12 + Cộng thêm ngưỡng điểm khung 4H → 2 | 109.72 | 51.7% | 0.757 | 7.69 | 14.27 | 0.672 | 0.84 | -10.96 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 103.66 | 47.4% | 0.592 | 9.53 | 10.88 | 0.624 | 0.563 | -7.96 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.438 | 103.18 | 47.1% | 0.657 | 10.27 | 10.05 | 0.446 | 0.9 | -6.32 |  |

### Vòng 901 — ngẫu nhiên nhiều thông số · mốc: tổng 118.09R, win 53.1%, rủi ro tụt vốn 7.57R, lời÷rủi ro 15.60

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Momentum (/100) → 21 + Điểm tối thiểu của vùng đặt SL → 4 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 108.29 | 45.9% | 0.742 | 9.4 | 11.52 | 0.561 | 0.944 | -8.93 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: HVN anchored → 0.188 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 81.32 | 36.5% | 0.323 | 18.71 | 4.35 | 0.281 | 0.359 | -2.46 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 86.51 | 50.4% | 0.727 | 8.26 | 10.47 | 0.528 | 0.958 | -16.39 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Trọng số phần Entry (/100) → 33 + Điểm vùng: POC volume profile cố định → 0.813 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 115.36 | 51.7% | 0.796 | 7.85 | 14.7 | 0.652 | 0.95 | -7.58 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần Momentum (/100) → 25 | 108.23 | 37.1% | 0.309 | 18.98 | 5.7 | 0.376 | 0.25 | 3.68 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: POC anchored → 4 | 82.58 | 48.6% | 0.573 | 9.53 | 8.67 | 0.555 | 0.591 | -4.43 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Mức MACD → 0.875 | 111.85 | 51.7% | 0.771 | 7.74 | 14.45 | 0.61 | 0.944 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Cộng thêm ngưỡng điểm khung 1D → 3 | 106.45 | 51.4% | 0.719 | 8.01 | 13.29 | 0.573 | 0.877 | -10.75 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần R:R (/100) → 28 | 84.49 | 49.1% | 0.728 | 8.2 | 10.3 | 0.57 | 0.904 | -16.39 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần R:R (/100) → 33 | 123.41 | 49.7% | 0.786 | 8.65 | 14.27 | 0.757 | 0.819 | -10.5 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 92.58 | 46.2% | 0.647 | 9.6 | 9.64 | 0.471 | 0.854 | -8.13 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: EMA 200 → 3 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: POC volume profile cố định → 0.813 | 98.3 | 48.7% | 0.63 | 9.36 | 10.5 | 0.453 | 0.827 | -8.33 |  |

### Vòng 900 — ngẫu nhiên nhiều thông số · mốc: tổng 118.09R, win 53.1%, rủi ro tụt vốn 7.57R, lời÷rủi ro 15.60

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: BOS → 1 + R:R tối thiểu riêng khung 1W → 2 | 105.83 | 50.7% | 0.725 | 8.41 | 12.58 | 0.603 | 0.843 | -10.96 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Coin phải mạnh hơn BTC trong N ngày → 14 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Break mây Ichimoku → 1 | 69.34 | 40.7% | 0.321 | 16.28 | 4.26 | 0.368 | 0.277 | -12.04 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Cộng thêm ngưỡng điểm khung 1W → -1 + Xác nhận khung nhỏ (A2) → W | 63.41 | 38.1% | 0.274 | 18.55 | 3.42 | 0.169 | 0.372 | -6.81 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cổng Dow → TẮT | 133.39 | 43.7% | 0.601 | 11.89 | 11.22 | 0.548 | 0.656 | -20.49 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Ngưỡng điểm vào kèo → 74 + R:R tối thiểu riêng khung 1W → 2 + Điểm tối thiểu của vùng đặt SL → 4 | 107.12 | 50.7% | 0.705 | 8.04 | 13.32 | 0.622 | 0.785 | -9.67 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Cộng thêm ngưỡng điểm khung 1W → 2 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 78.6 | 43.9% | 0.479 | 10.53 | 7.46 | 0.461 | 0.497 | -8.23 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: Biên mây Ichimoku → 1.05 + R:R tối thiểu tới TP1 → 2.38 | 95.35 | 48.1% | 0.596 | 8.78 | 10.86 | 0.489 | 0.69 | -11.29 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.375 + SL tối đa (% Entry) → 0.425 | 117.69 | 51.4% | 0.806 | 7.91 | 14.88 | 0.692 | 0.926 | -8.63 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Fib sóng 4 → 1.56 | 150.03 | 38.9% | 0.495 | 19.2 | 7.81 | 0.298 | 0.681 | -12.53 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: HVN cố định → 0.563 | 117.64 | 52.7% | 0.806 | 7.53 | 15.62 | 0.635 | 0.996 | -9.92 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng điểm phân kỳ dương ẩn → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 18.54 | 54.5% | 0.153 | 6.75 | 2.75 | 0.198 | 0.111 | -7.9 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 116.18 | 52% | 0.785 | 7.77 | 14.95 | 0.635 | 0.947 | -9.92 |  |

### Vòng 899 — ngẫu nhiên nhiều thông số · mốc: tổng 118.09R, win 53.1%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.87

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Cộng điểm phân kỳ dương ẩn → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 151.73 | 37.9% | 0.518 | 18.42 | 8.24 | 0.404 | 0.634 | -13.43 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + R:R tối thiểu riêng khung 4H → 2 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: HVN anchored → 0.188 | 54.21 | 34.4% | 0.134 | 25.32 | 2.14 | 0.112 | 0.154 | 0.47 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 89.93 | 47.1% | 0.642 | 9.07 | 9.92 | 0.414 | 0.898 | -10.48 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: EMA 200 → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 70.77 | 46.9% | 0.626 | 8.91 | 7.94 | 0.47 | 0.791 | -0.64 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 113.77 | 50% | 0.824 | 8.1 | 14.05 | 0.626 | 1.061 | -9.17 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Momentum (/100) → 25 | 160.87 | 38.5% | 0.512 | 18.03 | 8.92 | 0.425 | 0.601 | -14.63 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: MACD cắt lên Signal → 0.563 + Cộng thêm ngưỡng điểm khung 4H → 2 | 111.35 | 51.4% | 0.784 | 8 | 13.92 | 0.651 | 0.929 | -9.92 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 116.97 | 52.7% | 0.801 | 7.67 | 15.25 | 0.614 | 1.016 | -9.92 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 129.25 | 43.7% | 0.564 | 10.57 | 12.23 | 0.59 | 0.537 | -11.33 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Cộng thêm ngưỡng điểm khung 1W → -1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 91.5 | 43.9% | 0.558 | 10.16 | 9.01 | 0.576 | 0.538 | -9.9 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: EMA 50 → 1.13 | 107.59 | 48.5% | 0.66 | 9.01 | 11.94 | 0.525 | 0.815 | -8.65 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 113.22 | 50% | 0.726 | 8.44 | 13.41 | 0.782 | 0.66 | -9.72 |  |

### Vòng 898 — ngẫu nhiên nhiều thông số · mốc: tổng 118.09R, win 53.1%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.87

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: HVN cố định → 0.438 + Trọng số phần Trend (/100) → 12 + R:R tối thiểu tới TP1 → 2.63 | 110.77 | 50% | 0.865 | 7.7 | 14.39 | 0.813 | 0.925 | -10.89 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 200 → 3 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Fib sóng 4 → 0.938 | 24.48 | 58.8% | 0.16 | 6.56 | 3.73 | 0.169 | 0.152 | -10.5 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần SL (/100) → 9 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Biên mây Ichimoku → 1.05 | 106.84 | 51.4% | 0.742 | 7.96 | 13.42 | 0.611 | 0.884 | -10.75 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 21 → 0.875 + R:R tối thiểu riêng khung 1D → 2 + Khung lớn phải tăng (trend ≥) → 0.375 | 104.52 | 44.6% | 0.597 | 9.68 | 10.8 | 0.58 | 0.613 | -6.89 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Xác nhận khung nhỏ (A2) → W | 105.21 | 39.6% | 0.413 | 15.82 | 6.65 | 0.367 | 0.455 | -2.71 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 4H → 2 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 79.08 | 33.4% | 0.222 | 26.39 | 3 | 0.242 | 0.206 | -22.32 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Mức MACD → 1.13 + Trọng số phần R:R (/100) → 33 | 99.74 | 48.9% | 0.718 | 8.15 | 12.24 | 0.454 | 1 | -10.48 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 95.53 | 46.6% | 0.654 | 9.33 | 10.24 | 0.493 | 0.845 | -8.13 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Elliott (/100) → 10 | 116.37 | 52.1% | 0.808 | 7.64 | 15.23 | 0.64 | 0.996 | -9.92 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 104.51 | 37.5% | 0.369 | 19.23 | 5.43 | 0.441 | 0.306 | -25.65 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + SL tối đa (% Entry) → 0.425 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Mức MACD → 0.875 | 106.29 | 51.7% | 0.713 | 8.41 | 12.64 | 0.56 | 0.882 | -8.63 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 116.32 | 52.4% | 0.791 | 7.82 | 14.87 | 0.635 | 0.963 | -8.71 |  |

### Vòng 897 — ngẫu nhiên nhiều thông số · mốc: tổng 118.09R, win 53.1%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.87

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 111.48 | 50.3% | 0.78 | 8.25 | 13.51 | 0.6 | 0.978 | -13.16 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Khung lớn phải tăng (trend ≥) → 0.375 | 83.56 | 47.3% | 0.638 | 8.98 | 9.31 | 0.45 | 0.834 | -9.02 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 113.59 | 50.3% | 0.783 | 8.05 | 14.11 | 0.646 | 0.926 | -9.92 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cộng thêm ngưỡng điểm khung 4H → 2 | 67.18 | 45.4% | 0.622 | 9.37 | 7.17 | 0.423 | 0.845 | -5.45 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + R:R tối thiểu riêng khung 4H → 2 | 119.45 | 42.8% | 0.365 | 11.98 | 9.97 | 0.357 | 0.372 | -8.6 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: BOS → 1 + Điểm vùng: HVN cố định → 0.563 + Trọng số phần Elliott (/100) → 6 | 117.44 | 52.4% | 0.799 | 7.82 | 15.02 | 0.625 | 0.996 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Momentum (/100) → 21 + R:R tối thiểu tới TP1 → 2.38 | 92.54 | 46.9% | 0.578 | 9.26 | 9.99 | 0.474 | 0.668 | -11.49 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Fib sóng 4 → 0.938 + Cộng điểm phân kỳ dương ẩn → 2.25 + Đệm SL riêng khung 4H (ATR) → 0.3 | 151.77 | 38.6% | 0.533 | 17.92 | 8.47 | 0.408 | 0.659 | -18.94 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 1W → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 63.58 | 47.5% | 0.457 | 9.74 | 6.53 | 0.39 | 0.52 | -15.51 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Mức MACD → 0.875 | 127.21 | 44.4% | 0.548 | 11.08 | 11.48 | 0.588 | 0.507 | -11.05 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + R:R tối thiểu riêng khung 1D → 2 | 101.75 | 45.9% | 0.556 | 8.86 | 11.48 | 0.565 | 0.548 | -9.47 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Fib sóng 4 → 0.938 | 106.95 | 51% | 0.738 | 7.98 | 13.4 | 0.626 | 0.845 | -10.96 |  |

### Vòng 896 — ngẫu nhiên nhiều thông số · mốc: tổng 118.09R, win 53.1%, rủi ro tụt vốn 7.6R, lời÷rủi ro 15.54

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 89.41 | 48.6% | 0.621 | 9.11 | 9.81 | 0.483 | 0.771 | -9.6 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Số TP tối đa → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Khung lớn phải tăng (trend ≥) → 0.375 | 110.43 | 51% | 0.751 | 7.98 | 13.84 | 0.569 | 0.951 | -10.89 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 123.86 | 50% | 0.794 | 8.42 | 14.71 | 0.757 | 0.837 | -10.5 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 77.27 | 44.7% | 0.48 | 11.16 | 6.92 | 0.376 | 0.582 | -8.8 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 50 → 0.75 + Coin phải mạnh hơn BTC trong N ngày → 14 | 76.42 | 50% | 0.626 | 8.77 | 8.71 | 0.617 | 0.638 | -16.19 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 110.37 | 48.9% | 0.806 | 8.29 | 13.31 | 0.61 | 1.036 | -11.42 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Số TP tối đa → 2 | 118.81 | 53.1% | 0.819 | 7.57 | 15.69 | 0.64 | 1.022 | -9.92 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 115.37 | 49.7% | 0.754 | 8.38 | 13.77 | 0.594 | 0.934 | -10.95 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + R:R tối thiểu riêng khung 1W → 2 | 101.72 | 50.7% | 0.687 | 8.63 | 11.79 | 0.6 | 0.777 | -11.3 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Cộng thêm ngưỡng điểm khung 4H → -1 + Ngưỡng điểm vào kèo → 77 + Trọng số phần Elliott (/100) → 10 | 105.22 | 50.3% | 0.726 | 7.95 | 13.24 | 0.6 | 0.856 | -10.75 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Divergence (/100) → 9 | 97.31 | 46.3% | 0.608 | 9.14 | 10.65 | 0.481 | 0.726 | -10.47 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 64.19 | 42.9% | 0.417 | 11.17 | 5.75 | 0.284 | 0.553 | -11.99 |  |

### Vòng 895 — ngẫu nhiên nhiều thông số · mốc: tổng 119.19R, win 53.4%, rủi ro tụt vốn 7.42R, lời÷rủi ro 16.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: POC volume profile cố định → 0.813 | 113.59 | 52.8% | 0.789 | 7.7 | 14.75 | 0.621 | 0.966 | -7.61 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Mức MACD → 1.13 + Trọng số phần Momentum (/100) → 21 + Khung lớn phải tăng (trend ≥) → 0.425 | 113.95 | 51.4% | 0.802 | 7.66 | 14.88 | 0.562 | 1.079 | -9.44 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Số TP tối đa → 2 | 117.81 | 51.4% | 0.796 | 7.72 | 15.26 | 0.673 | 0.916 | -8.97 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu tới TP1 → 2.63 | 104.39 | 47.4% | 0.669 | 8.75 | 11.93 | 0.631 | 0.704 | -10.23 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Trọng số phần Entry (/100) → 28 | 118.99 | 53.1% | 0.809 | 7.63 | 15.6 | 0.625 | 1.018 | -9.92 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Mức MACD → 1.13 | 115.7 | 50.3% | 0.777 | 8.12 | 14.25 | 0.633 | 0.93 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 113.5 | 49.7% | 0.762 | 8.11 | 14 | 0.659 | 0.881 | -10.48 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Cộng thêm ngưỡng điểm khung 1W → -1 | 118.74 | 53.1% | 0.808 | 7.58 | 15.66 | 0.635 | 0.997 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Vùng RSI 45–55 → 0.875 + % chốt ở TP1 → 0.287 | 115.52 | 50.7% | 0.781 | 8.09 | 14.28 | 0.647 | 0.911 | -8.95 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + R:R tối thiểu tới TP1 → 2.63 | 71.34 | 52.7% | 0.784 | 6.65 | 10.73 | 0.197 | 1.205 | -10.86 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 19.09 | 38.6% | 0.217 | 12.04 | 1.59 | 0.242 | 0.186 | -7.59 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: EMA 200 → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 106.37 | 47.4% | 0.682 | 9.1 | 11.69 | 0.58 | 0.789 | -11.5 |  |

### Vòng 894 — ngẫu nhiên nhiều thông số · mốc: tổng 119.19R, win 53.4%, rủi ro tụt vốn 7.42R, lời÷rủi ro 16.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Lệnh chờ hết hạn sau (nến) → 8 | 40.89 | 41.3% | 0.444 | 9.44 | 4.33 | 0.373 | 0.53 | -5.51 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 121.05 | 48.2% | 0.712 | 9.87 | 12.26 | 0.656 | 0.763 | -4.3 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 117.81 | 50.3% | 0.76 | 8.25 | 14.28 | 0.594 | 0.941 | -9.64 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: POC volume profile cố định → 0.813 + % chốt ở TP1 → 0.287 | 104.65 | 50.3% | 0.732 | 7.94 | 13.18 | 0.484 | 1.013 | -9.45 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 74.79 | 45.9% | 0.674 | 9.23 | 8.1 | 0.523 | 0.858 | -3.03 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 80.32 | 46.1% | 0.487 | 10.33 | 7.78 | 0.381 | 0.589 | -8.8 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần R:R (/100) → 33 | 113.04 | 52.7% | 0.754 | 8.04 | 14.06 | 0.635 | 0.879 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng điểm phân kỳ dương ẩn → 3 | 124.02 | 49.4% | 0.785 | 8.48 | 14.62 | 0.752 | 0.822 | -10.33 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: BOS → 3 | 113.6 | 51% | 0.794 | 7.91 | 14.36 | 0.6 | 1.009 | -13.18 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Fib sóng 4 → 0.938 | 22.86 | 37.2% | 0.293 | 11.01 | 2.08 | 0.177 | 0.46 | -6.54 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: HVN anchored → 0.313 + Trọng số phần Elliott (/100) → 10 | 106.45 | 50% | 0.719 | 7.97 | 13.36 | 0.607 | 0.828 | -10.96 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Đệm SL riêng khung 1D (ATR) → 0.3 | 112.56 | 39.5% | 0.342 | 14.47 | 7.78 | 0.415 | 0.288 | -5.41 |  |
