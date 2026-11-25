# Tối ưu tự động (chạy liên tục) — vòng 1465

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 17200 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 165 | 46.7% | 97.21R | 0.589 | 6.7R | 9.81R | 9.91 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 142 | 52.8% | 120.22R | 0.847 | 5.15R | 7.11R | 16.91 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 26 | 50% | 20.05R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 105 | 54.3% | 93.2R | 19 | 21.1% | -4.19R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 165 | 46.7% | 97.21R | 9.81R | 9.91 | 30 | 13.3% | -11.98R |
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

### Vòng 1465 — ngẫu nhiên nhiều thông số · mốc: tổng 120.22R, win 52.8%, rủi ro tụt vốn 7.11R, lời÷rủi ro 16.91

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + SL tối đa (% Entry) → 0.425 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.97 | 51% | 0.71 | 8.11 | 12.7 | 0.696 | 0.726 | -11.75 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Entry (/100) → 28 | 109.82 | 48.8% | 0.686 | 8.82 | 12.45 | 0.576 | 0.808 | -11.03 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Break mây Ichimoku → 1 + Ngưỡng điểm vào kèo → 77 | 106.41 | 50.7% | 0.739 | 7.62 | 13.96 | 0.569 | 0.909 | -11.11 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: BOS → 2 | 101.74 | 48% | 0.669 | 8.52 | 11.94 | 0.569 | 0.78 | -13.13 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Trọng số phần Divergence (/100) → 12 + Trọng số phần SL (/100) → 9 | 118.75 | 52.1% | 0.836 | 7.17 | 16.56 | 0.694 | 0.995 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 4 | 118.84 | 51.4% | 0.825 | 7.62 | 15.6 | 0.698 | 0.963 | -10.87 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Ngưỡng điểm vào kèo → 74 + Khung lớn phải tăng (trend ≥) → 0.425 | 114.19 | 50.7% | 0.816 | 7.34 | 15.56 | 0.621 | 1.034 | -12.19 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: BOS → 2 + Cộng thêm ngưỡng điểm khung 1W → -1 | 103.98 | 51.4% | 0.722 | 8.02 | 12.97 | 0.696 | 0.752 | -11.92 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: BOS → 0 + Điểm vùng: EMA 200 → 1 | 118.78 | 47.5% | 0.671 | 8.76 | 13.56 | 0.728 | 0.614 | -5.64 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 68.36 | 44.9% | 0.538 | 9.99 | 6.84 | 0.413 | 0.683 | -11.18 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Trọng số phần R:R (/100) → 33 + Trọng số phần SL (/100) → 7 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 112.9 | 51% | 0.768 | 7.9 | 14.29 | 0.545 | 1.027 | -8.9 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 200 → 3 | 104.89 | 34.4% | 0.468 | 19.94 | 5.26 | 0.372 | 0.575 | -13.42 |  |

### Vòng 1464 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 15.83

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức MACD → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 28.89 | 56.2% | 0.189 | 5.7 | 5.07 | 0.22 | 0.16 | -8.19 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Trend (/100) → 12 + Trọng số phần SL (/100) → 7 + Cộng thêm ngưỡng điểm khung 1W → -1 | 109.3 | 46.4% | 0.658 | 8.99 | 12.16 | 0.656 | 0.661 | -9.81 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Trọng số phần Momentum (/100) → 25 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.66 | 56.7% | 0.189 | 6.02 | 4.93 | 0.241 | 0.141 | -8.19 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm tối thiểu của vùng đặt SL → 2 + Số TP tối đa → 1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 125.55 | 50% | 0.815 | 8.09 | 15.52 | 0.8 | 0.833 | -10.43 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 101.88 | 50.7% | 0.707 | 8.39 | 12.14 | 0.658 | 0.764 | -11.92 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Mức MACD → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 112.94 | 49% | 0.748 | 8.43 | 13.4 | 0.741 | 0.756 | -10.4 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Đệm SL riêng khung 4H (ATR) → 0.3 | 174.56 | 38% | 0.588 | 17.82 | 9.8 | 0.52 | 0.662 | -7.72 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: POC anchored → 4 + Điểm vùng: BOS → 0 | 112.2 | 51.4% | 0.768 | 7.73 | 14.51 | 0.633 | 0.912 | -6.21 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + R:R tối thiểu riêng khung 4H → 2 | 127.41 | 42.6% | 0.42 | 12.18 | 10.46 | 0.435 | 0.407 | -6.86 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Momentum (/100) → 21 | 108.72 | 48.4% | 0.684 | 8.89 | 12.23 | 0.562 | 0.82 | -11.9 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Mức MACD → 1.13 | 113.98 | 49.7% | 0.797 | 7.84 | 14.54 | 0.616 | 1.002 | -12.57 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Cộng thêm ngưỡng điểm khung 1W → -1 | 105.93 | 47.1% | 0.692 | 9.09 | 11.65 | 0.634 | 0.755 | -11.14 |  |

### Vòng 1463 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 15.83

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Lệnh chờ hết hạn sau (nến) → 6 + % chốt ở TP1 → 0.307 | 94.52 | 48.1% | 0.722 | 8.33 | 11.35 | 0.566 | 0.912 | -10.79 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 113.68 | 51.4% | 0.779 | 7.86 | 14.46 | 0.634 | 0.94 | -12.16 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 21.3 | 49.6% | 0.083 | 16.41 | 1.3 | 0.09 | 0.077 | -12.39 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 1W → -1 | 105.23 | 49.6% | 0.746 | 8.1 | 12.99 | 0.61 | 0.881 | -13.19 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 116.65 | 51.4% | 0.821 | 7.64 | 15.27 | 0.656 | 1.012 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 113.16 | 51.7% | 0.78 | 7.64 | 14.81 | 0.634 | 0.946 | -12.14 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: EMA 200 → 3 | 106.37 | 49.3% | 0.749 | 7.9 | 13.46 | 0.541 | 0.975 | -13.15 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: HVN cố định → 0.563 | 118.12 | 52.1% | 0.832 | 7.46 | 15.83 | 0.656 | 1.034 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 114.26 | 50.7% | 0.783 | 7.83 | 14.59 | 0.612 | 0.978 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.438 | 96.99 | 46.7% | 0.638 | 9.94 | 9.76 | 0.441 | 0.875 | -9.58 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 134 | 39.1% | 0.583 | 15.88 | 8.44 | 0.645 | 0.526 | -13.13 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 59.89 | 40.9% | 0.454 | 11.9 | 5.03 | 0.434 | 0.477 | -10.28 |  |

### Vòng 1462 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.05

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Số TP tối đa → 1 + Điểm vùng: EMA 200 → 1 + Cộng thêm ngưỡng điểm khung 1D → 4 | 69.32 | 46.4% | 0.63 | 9.26 | 7.49 | 0.44 | 0.858 | -0.98 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN anchored → 0.188 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 127.83 | 41.7% | 0.41 | 12.36 | 10.34 | 0.358 | 0.453 | -8.03 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Mức RSI 30/70 → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 129.36 | 40.8% | 0.555 | 14.28 | 9.06 | 0.647 | 0.478 | -15.17 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm tối thiểu của vùng đặt SL → 2 | 96.69 | 50% | 0.662 | 8.32 | 11.62 | 0.633 | 0.695 | -9.44 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 + R:R tối thiểu riêng khung 1D → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 | 79.83 | 43.6% | 0.57 | 9.41 | 8.48 | 0.574 | 0.567 | -15.44 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.688 + Cộng thêm ngưỡng điểm khung 4H → 2 | 173.88 | 38.7% | 0.595 | 18.13 | 9.59 | 0.515 | 0.679 | -8.78 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 21 → 0.875 | 84.27 | 47.5% | 0.714 | 8.3 | 10.15 | 0.582 | 0.871 | -18.62 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: BOS → 0 | 101.88 | 50.7% | 0.707 | 8.35 | 12.2 | 0.658 | 0.764 | -11.92 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: HVN cố định → 0.563 | 113.18 | 50.3% | 0.791 | 7.65 | 14.79 | 0.615 | 0.992 | -10.84 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Biên mây Ichimoku → 1.05 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần R:R (/100) → 28 | 110.65 | 48% | 0.728 | 8.58 | 12.9 | 0.73 | 0.726 | -12.26 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Khung lớn phải tăng (trend ≥) → 0.375 + Xác nhận khung nhỏ (A2) → W | 109.22 | 39.1% | 0.411 | 15.86 | 6.89 | 0.409 | 0.412 | -6.79 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 110.74 | 48.6% | 0.769 | 8.49 | 13.04 | 0.578 | 0.995 | -12.57 |  |

### Vòng 1461 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.49R, lời÷rủi ro 15.77

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức MACD → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 106.09 | 43.2% | 0.684 | 11.08 | 9.57 | 0.715 | 0.657 | -10.16 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Trọng số phần Trend (/100) → 19 | 118.12 | 52.1% | 0.832 | 7.49 | 15.77 | 0.656 | 1.034 | -12.16 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 117.09 | 51.7% | 0.819 | 7.78 | 15.05 | 0.656 | 1.004 | -12.14 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: HVN anchored → 0.313 | 120.22 | 50.6% | 0.781 | 8.2 | 14.66 | 0.587 | 1.02 | -12.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 111.37 | 40.3% | 0.362 | 13.76 | 8.09 | 0.302 | 0.41 | -3.02 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + SL tối đa (% Entry) → 0.425 + Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần Divergence (/100) → 12 | 117.11 | 51.7% | 0.819 | 7.78 | 15.05 | 0.656 | 1.004 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Cộng thêm ngưỡng điểm khung 4H → 2 | 116.33 | 50.3% | 0.76 | 8.51 | 13.67 | 0.606 | 0.949 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + SL tối đa (% Entry) → 0.425 + Trọng số phần SL (/100) → 7 + R:R tối thiểu riêng khung 4H → 2 | 136.12 | 42.5% | 0.435 | 11.31 | 12.04 | 0.444 | 0.427 | -8.25 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu riêng khung 4H → 2 + SL tối đa (% Entry) → 0.425 | 134.4 | 42.2% | 0.429 | 11.95 | 11.25 | 0.444 | 0.417 | -8.27 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 89.07 | 46.3% | 0.55 | 9.75 | 9.14 | 0.492 | 0.608 | -10.16 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Mức MACD → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 23.59 | 56.1% | 0.15 | 6.45 | 3.66 | 0.198 | 0.11 | -8.22 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + R:R tối thiểu riêng khung 1W → 2 | 100.59 | 46.9% | 0.694 | 9.43 | 10.67 | 0.529 | 0.88 | -10.02 |  |

### Vòng 1460 — ngẫu nhiên nhiều thông số · mốc: tổng 113R, win 51.1%, rủi ro tụt vốn 7.62R, lời÷rủi ro 14.83

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Entry (/100) → 33 | 98.49 | 48.7% | 0.648 | 9.12 | 10.8 | 0.614 | 0.686 | -8.65 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 102.16 | 44.6% | 0.615 | 9.64 | 10.6 | 0.613 | 0.618 | -7.39 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: POC anchored → 2 | 94.55 | 47.3% | 0.648 | 8.63 | 10.96 | 0.507 | 0.805 | -10.76 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 97.78 | 47% | 0.656 | 9.36 | 10.45 | 0.474 | 0.879 | -8.49 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Trọng số phần Divergence (/100) → 9 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 91.25 | 44.7% | 0.647 | 9.59 | 9.52 | 0.537 | 0.779 | -4.87 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 96.23 | 47.3% | 0.659 | 9.35 | 10.29 | 0.503 | 0.849 | -8.5 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 112.99 | 51.1% | 0.813 | 7.69 | 14.69 | 0.656 | 1.002 | -8.89 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: EMA 21 → 1.13 | 89.23 | 49.6% | 0.75 | 7.75 | 11.51 | 0.568 | 0.961 | -9.87 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Elliott (/100) → 6 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 116.21 | 49% | 0.77 | 8.25 | 14.09 | 0.779 | 0.758 | -9.48 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu tới TP1 → 2.38 | 101.12 | 44.1% | 0.628 | 9.84 | 10.28 | 0.615 | 0.639 | -12.81 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: POC anchored → 4 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Xác nhận khung nhỏ (A2) → W | 110.5 | 39.3% | 0.406 | 15.81 | 6.99 | 0.389 | 0.422 | 2.98 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm tối thiểu của vùng đặt SL → 2 | 110.81 | 51.1% | 0.786 | 7.85 | 14.12 | 0.656 | 0.938 | -6.58 |  |

### Vòng 1459 — ngẫu nhiên nhiều thông số · mốc: tổng 118.12R, win 52.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 15.83

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: EMA 21 → 0.875 + Ngưỡng điểm vào kèo → 77 | 109.99 | 50.4% | 0.78 | 7.74 | 14.21 | 0.67 | 0.898 | -9.63 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: POC volume profile cố định → 0.813 | 114.26 | 47.4% | 0.742 | 8.88 | 12.87 | 0.598 | 0.902 | -10.51 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm tối thiểu của vùng đặt SL → 4 | 108.25 | 47.8% | 0.784 | 8.75 | 12.37 | 0.593 | 1.012 | -10.27 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: POC anchored → 4 + SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 1D (ATR) → 0.3 | 122.43 | 47% | 0.747 | 10.19 | 12.01 | 0.752 | 0.742 | -6.86 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần SL (/100) → 7 | 104.97 | 45.8% | 0.625 | 9.51 | 11.04 | 0.472 | 0.789 | -12.7 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Ngưỡng điểm vào kèo → 74 + Trọng số phần Divergence (/100) → 9 | 116.95 | 51% | 0.807 | 7.51 | 15.57 | 0.645 | 0.99 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Fib sóng 4 → 0.938 | 116.1 | 51.4% | 0.829 | 7.46 | 15.56 | 0.646 | 1.034 | -12.16 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Fib sóng 4 → 0.938 | 99.59 | 45.6% | 0.63 | 10.19 | 9.77 | 0.403 | 0.882 | -10.98 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 | 129.3 | 40.7% | 0.399 | 13.59 | 9.51 | 0.496 | 0.324 | -8.3 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Cộng điểm phân kỳ dương ẩn → 2.25 + Ngưỡng điểm vào kèo → 74 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 96.73 | 45.5% | 0.667 | 9.53 | 10.15 | 0.548 | 0.802 | -8.13 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng thêm ngưỡng điểm khung 1W → 2 | 125.66 | 49.7% | 0.821 | 8.37 | 15.01 | 0.8 | 0.846 | -13.15 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.29 | 58.1% | 0.202 | 5.59 | 5.6 | 0.235 | 0.171 | -8.18 |  |

### Vòng 1458 — ngẫu nhiên nhiều thông số · mốc: tổng 120.32R, win 53.2%, rủi ro tụt vốn 7.39R, lời÷rủi ro 16.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + R:R tối thiểu riêng khung 1W → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 105.68 | 50% | 0.744 | 7.76 | 13.62 | 0.627 | 0.858 | -11.88 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: POC volume profile cố định → 0.813 | 98.56 | 48.9% | 0.73 | 8.25 | 11.95 | 0.5 | 0.985 | -13.97 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: HVN anchored → 0.313 + Cộng điểm phân kỳ dương ẩn → 2.25 | 117.56 | 52.1% | 0.828 | 7.39 | 15.91 | 0.649 | 1.034 | -12.16 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Break mây Ichimoku → 1 | 73.81 | 45.4% | 0.523 | 10.41 | 7.09 | 0.503 | 0.548 | -9.01 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần Entry (/100) → 28 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 112.27 | 44.5% | 0.49 | 11.16 | 10.06 | 0.496 | 0.485 | -11.63 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 117.98 | 52.8% | 0.831 | 7.21 | 16.36 | 0.671 | 1.015 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Break mây Ichimoku → 3 | 106.54 | 48.8% | 0.658 | 9.1 | 11.71 | 0.574 | 0.75 | -11.9 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + R:R tối thiểu riêng khung 4H → 2 | 130.36 | 41.6% | 0.43 | 11.76 | 11.09 | 0.443 | 0.418 | -10.42 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Số TP tối đa → 1 | 73.56 | 43.9% | 0.645 | 10.04 | 7.33 | 0.443 | 0.895 | -5.59 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Xác nhận khung nhỏ (A2) → W + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 82.94 | 37.6% | 0.321 | 18.2 | 4.56 | 0.37 | 0.275 | -6.54 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Biên mây Ichimoku → 1.05 | 92.89 | 45.9% | 0.636 | 9.44 | 9.84 | 0.495 | 0.79 | -8.96 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: BOS → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 | 112.34 | 45.6% | 0.702 | 10.19 | 11.02 | 0.752 | 0.656 | -10.57 |  |

### Vòng 1457 — ngẫu nhiên nhiều thông số · mốc: tổng 119.12R, win 52.9%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.45

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần SL (/100) → 7 + Điểm vùng: HVN cố định → 0.563 | 104.57 | 39.8% | 0.417 | 15.13 | 6.91 | 0.379 | 0.451 | -4.23 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức MACD → 1.13 | 47.35 | 41.7% | 0.46 | 10.68 | 4.43 | 0.493 | 0.418 | -8.25 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 89.51 | 42.7% | 0.523 | 12.76 | 7.01 | 0.545 | 0.503 | -10.13 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Coin phải mạnh hơn BTC trong N ngày → 14 | 100.96 | 41.8% | 0.394 | 11.28 | 8.95 | 0.402 | 0.388 | -14.17 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Mức RSI 30/70 → 0.875 | 115.53 | 47% | 0.696 | 10.07 | 11.47 | 0.674 | 0.717 | -12.03 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Trọng số phần Momentum (/100) → 21 + Số TP tối đa → 1 + Trọng số phần SL (/100) → 7 | 113.64 | 50% | 0.748 | 7.95 | 14.29 | 0.676 | 0.827 | -7.47 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Entry (/100) → 33 + Cộng thêm ngưỡng điểm khung 1W → -1 | 115.06 | 51.4% | 0.822 | 7.54 | 15.26 | 0.7 | 0.959 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 | 109.72 | 49% | 0.699 | 8.59 | 12.77 | 0.595 | 0.815 | -9.8 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Trọng số phần Elliott (/100) → 10 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: POC volume profile cố định → 0.688 | 104.14 | 44.4% | 0.609 | 9.84 | 10.58 | 0.645 | 0.577 | -5.52 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 88.54 | 46.6% | 0.598 | 9.57 | 9.25 | 0.393 | 0.84 | -9.18 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + SL tối đa (% Entry) → 0.425 | 115.89 | 51.1% | 0.822 | 7.54 | 15.37 | 0.7 | 0.957 | -9.78 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 116.1 | 50.3% | 0.801 | 8.01 | 14.49 | 0.561 | 1.072 | -9.7 |  |

### Vòng 1456 — ngẫu nhiên nhiều thông số · mốc: tổng 120.32R, win 53.2%, rủi ro tụt vốn 7.29R, lời÷rủi ro 16.50

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 111.62 | 45.8% | 0.624 | 9.37 | 11.91 | 0.528 | 0.716 | -8.83 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 78.22 | 46.7% | 0.571 | 9.42 | 8.3 | 0.483 | 0.671 | -14.75 |  |
| Ngẫu nhiên: Số TP tối đa → 1 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 200 → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 64.82 | 30.4% | 0.167 | 36.51 | 1.78 | 0.2 | 0.143 | -22.02 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Ngưỡng điểm vào kèo → 74 + R:R tối thiểu riêng khung 1D → 2 | 109.8 | 46.2% | 0.642 | 8.79 | 12.49 | 0.627 | 0.656 | -8.93 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Cổng Dow → TẮT + Lệnh chờ hết hạn sau (nến) → 8 | 89.53 | 38.4% | 0.521 | 13.86 | 6.46 | 0.415 | 0.626 | -14.33 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần Divergence (/100) → 12 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 51.22 | 41.8% | 0.466 | 11.33 | 4.52 | 0.391 | 0.559 | -4.56 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Cộng điểm phân kỳ dương ẩn → 2.25 | 118.27 | 51.7% | 0.805 | 7.6 | 15.56 | 0.633 | 0.983 | -6.21 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 84.89 | 45.1% | 0.598 | 10.85 | 7.82 | 0.484 | 0.709 | -13.77 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Mức MACD → 1.13 | 103.68 | 39.5% | 0.397 | 15.81 | 6.56 | 0.368 | 0.424 | -6.16 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: HVN cố định → 0.438 | 115.87 | 50% | 0.794 | 8.05 | 14.39 | 0.542 | 1.075 | -12.06 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 117.08 | 41.7% | 0.39 | 12.57 | 9.31 | 0.397 | 0.384 | -10.05 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 107.9 | 44.5% | 0.696 | 10.95 | 9.85 | 0.731 | 0.665 | -10.16 |  |
