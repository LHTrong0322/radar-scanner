# Tối ưu tự động (chạy liên tục) — vòng 462

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 5214 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46.6% | 94.27R | 0.586 | 5.72R | 10R | 9.43 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 145 | 53.1% | 117.2R | 0.808 | 6.15R | 7.3R | 16.05 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 107 | 54.2% | 90.05R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46.6% | 94.27R | 10R | 9.43 | 32 | 12.5% | -14.03R |
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
| SL tối đa (% Entry) | 0.35 | **0.387** |
| Lệnh chờ hết hạn sau (nến) | 8 | **7** |
| Điểm tối thiểu vùng đặt lệnh chờ | 3 | **2** |
| Số TP tối đa | 2 | **3** |
| Điểm ADX > 25 và +DI trội (Momentum) | 3 | **4** |
| Điểm ADX < 13 cạn lực giảm (Momentum) | 1.5 | **2.5** |
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

### Vòng 462 — ngẫu nhiên nhiều thông số · mốc: tổng 117.2R, win 53.1%, rủi ro tụt vốn 7.3R, lời÷rủi ro 16.05

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + R:R tối thiểu riêng khung 1D → 2 + Xác nhận khung nhỏ (A2) → W | 101.22 | 39.5% | 0.344 | 15.86 | 6.38 | 0.311 | 0.374 | -5.48 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 113.59 | 53% | 0.762 | 7.86 | 14.45 | 0.624 | 0.914 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Lệnh chờ hết hạn sau (nến) → 8 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 24.63 | 55.6% | 0.146 | 7.17 | 3.44 | 0.189 | 0.102 | -11.62 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Trọng số phần Trend (/100) → 12 + Điểm vùng: HVN anchored → 0.313 | 113.99 | 50.3% | 0.786 | 7.87 | 14.48 | 0.657 | 0.928 | -9.66 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: EMA 200 → 3 | 60.5 | 36.5% | 0.177 | 18.07 | 3.35 | 0.163 | 0.186 | -16.38 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 109.19 | 51.7% | 0.743 | 7.8 | 14 | 0.601 | 0.907 | -12.03 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Cộng điểm phân kỳ dương ẩn → 2.63 | 73.63 | 46.2% | 0.695 | 8.77 | 8.4 | 0.484 | 0.95 | -7.85 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng điểm phân kỳ dương ẩn → 3.5 | 90.02 | 48.5% | 0.672 | 8.42 | 10.69 | 0.542 | 0.827 | -8.09 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + R:R tối thiểu riêng khung 4H → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.688 | 114.11 | 34.2% | 0.296 | 23.96 | 4.76 | 0.22 | 0.345 | -26.29 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Mức MACD → 0.875 | 109.98 | 52.1% | 0.786 | 7.5 | 14.66 | 0.626 | 0.96 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Số TP tối đa → 2 + Điểm vùng: HVN cố định → 0.563 | 120.91 | 42% | 0.385 | 12.27 | 9.85 | 0.332 | 0.431 | -11.37 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 4H → 2 | 71.19 | 39.6% | 0.316 | 14.14 | 5.03 | 0.279 | 0.353 | -9.52 |  |

### Vòng 461 — ngẫu nhiên nhiều thông số · mốc: tổng 117.2R, win 53.1%, rủi ro tụt vốn 7.3R, lời÷rủi ro 16.05

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 102.82 | 49.7% | 0.681 | 9.14 | 11.25 | 0.523 | 0.868 | -7.08 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 82.63 | 45.5% | 0.495 | 10.28 | 8.04 | 0.381 | 0.608 | -9.6 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Đệm SL riêng khung 1W (ATR) → 0.3 | 112.1 | 50.7% | 0.778 | 7.97 | 14.07 | 0.569 | 0.994 | -10.7 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Trend (/100) → 12 | 73.04 | 46.7% | 0.696 | 8.57 | 8.52 | 0.473 | 0.96 | -6.48 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm tối thiểu của vùng đặt SL → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 15.16 | 48.2% | 0.061 | 10.17 | 1.49 | 0.06 | 0.061 | -13.48 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm tối thiểu của vùng đặt SL → 4 | 104.57 | 44.8% | 0.634 | 11.34 | 9.22 | 0.655 | 0.615 | -6.35 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Divergence (/100) → 9 | 85.94 | 43.9% | 0.618 | 10.33 | 8.32 | 0.428 | 0.862 | -9.25 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 1D (ATR) → 0.3 | 115.71 | 44.8% | 0.673 | 10.66 | 10.85 | 0.748 | 0.604 | -6.62 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Cổng Dow → CHẶT + % chốt ở TP1 → 0.307 + Coin phải mạnh hơn BTC trong N ngày → 14 | 62.74 | 51.5% | 0.647 | 7.52 | 8.34 | 0.344 | 0.969 | -13.5 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 99.87 | 50.7% | 0.694 | 8.08 | 12.36 | 0.671 | 0.718 | -9.42 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Break mây Ichimoku → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 103.84 | 48% | 0.6 | 9.98 | 10.4 | 0.467 | 0.759 | -10.99 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trọng số phần R:R (/100) → 33 | 130.41 | 44.2% | 0.607 | 11.41 | 11.43 | 0.524 | 0.689 | -16.16 |  |

### Vòng 460 — ngẫu nhiên nhiều thông số · mốc: tổng 117.2R, win 53.1%, rủi ro tụt vốn 7.34R, lời÷rủi ro 15.97

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu tới TP1 → 2.38 + Cộng thêm ngưỡng điểm khung 1W → -1 | 98.53 | 47.2% | 0.62 | 8.51 | 11.58 | 0.527 | 0.709 | -10.97 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + R:R tối thiểu riêng khung 1W → 2 + R:R tối thiểu tới TP1 → 2.38 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 95.94 | 46.3% | 0.592 | 8.97 | 10.7 | 0.542 | 0.638 | -12.01 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Đệm SL riêng khung 4H (ATR) → 0.3 + % chốt ở TP1 → 0.287 | 147.57 | 37.3% | 0.492 | 20.19 | 7.31 | 0.312 | 0.674 | -11.93 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 138.76 | 37.1% | 0.472 | 19.79 | 7.01 | 0.375 | 0.567 | -15.54 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 | 107.55 | 47.1% | 0.633 | 8.82 | 12.19 | 0.616 | 0.648 | -7.92 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + R:R tối thiểu riêng khung 4H → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần SL (/100) → 7 | 115.41 | 40.8% | 0.354 | 13.97 | 8.26 | 0.423 | 0.302 | -8.03 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần Entry (/100) → 28 | 117.01 | 52.7% | 0.801 | 7.6 | 15.4 | 0.614 | 1.023 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 108.18 | 51% | 0.736 | 8.18 | 13.22 | 0.581 | 0.911 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Coin phải mạnh hơn BTC trong N ngày → 14 | 88.02 | 50.9% | 0.759 | 7.57 | 11.63 | 0.596 | 0.952 | -15.95 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: POC volume profile cố định → 0.688 | 100.81 | 49.3% | 0.663 | 9.27 | 10.87 | 0.484 | 0.873 | -7.08 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: BOS → 3 | 24.14 | 56.3% | 0.153 | 6.6 | 3.66 | 0.203 | 0.108 | -10.38 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 112.51 | 51.7% | 0.787 | 7.62 | 14.77 | 0.588 | 1.012 | -10.95 |  |

### Vòng 459 — ngẫu nhiên nhiều thông số · mốc: tổng 117.2R, win 53.1%, rủi ro tụt vốn 7.33R, lời÷rủi ro 15.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 75.8 | 41.9% | 0.423 | 11.96 | 6.34 | 0.477 | 0.371 | -18.68 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 105.56 | 49.7% | 0.699 | 8.79 | 12.01 | 0.523 | 0.908 | -7.08 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Trọng số phần Momentum (/100) → 21 | 114.25 | 52.5% | 0.81 | 7.37 | 15.5 | 0.595 | 1.062 | -9.69 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: POC anchored → 2 | 102.7 | 49.7% | 0.68 | 8.07 | 12.73 | 0.542 | 0.828 | -8.63 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 + Đệm SL riêng khung 4H (ATR) → 0.3 + Khung lớn phải tăng (trend ≥) → 0.375 | 149.89 | 36.9% | 0.468 | 19.51 | 7.68 | 0.404 | 0.528 | -12.18 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + R:R tối thiểu riêng khung 1W → 2 | 109.07 | 51.7% | 0.732 | 7.95 | 13.72 | 0.621 | 0.847 | -10.69 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Trọng số phần SL (/100) → 9 | 114.79 | 51.7% | 0.781 | 7.65 | 15.01 | 0.614 | 0.975 | -8.34 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Khung lớn phải tăng (trend ≥) → 0.425 | 113.4 | 49.7% | 0.761 | 8.05 | 14.09 | 0.579 | 0.972 | -10.73 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Momentum (/100) → 21 | 36.5 | 40.2% | 0.419 | 10.35 | 3.53 | 0.324 | 0.537 | -6.21 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Biên mây Ichimoku → 1.35 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 84.06 | 44.9% | 0.572 | 10.4 | 8.08 | 0.405 | 0.771 | -8.14 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Elliott (/100) → 10 | 115.67 | 52.4% | 0.809 | 7.47 | 15.48 | 0.64 | 1.001 | -9.66 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 118.26 | 52.1% | 0.821 | 7.31 | 16.18 | 0.659 | 1.013 | -12.92 |  |

### Vòng 458 — ngẫu nhiên nhiều thông số · mốc: tổng 117.2R, win 53.1%, rủi ro tụt vốn 7.33R, lời÷rủi ro 15.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Biên mây Ichimoku → 1.05 + R:R tối thiểu riêng khung 4H → 2 | 103.11 | 40.7% | 0.32 | 13.12 | 7.86 | 0.272 | 0.361 | -8.45 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 113.77 | 48.9% | 0.818 | 8.38 | 13.58 | 0.547 | 1.137 | -8.76 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 112.78 | 51% | 0.718 | 8.09 | 13.94 | 0.547 | 0.926 | -11.25 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: EMA 21 → 0.875 + Xác nhận khung nhỏ (A2) → W | 77.39 | 36.1% | 0.288 | 19.29 | 4.01 | 0.282 | 0.294 | -6.43 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 104.47 | 51% | 0.72 | 7.89 | 13.24 | 0.567 | 0.899 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 107.19 | 47.8% | 0.788 | 8.46 | 12.67 | 0.547 | 1.084 | -12.45 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: EMA 50 → 0.75 | 109.67 | 51.7% | 0.746 | 7.99 | 13.73 | 0.555 | 0.962 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 26.27 | 55.1% | 0.157 | 6.92 | 3.8 | 0.202 | 0.114 | -10.72 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1W → 2 | 99.84 | 41.6% | 0.341 | 12.77 | 7.82 | 0.328 | 0.351 | -9.79 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 91.72 | 34.6% | 0.402 | 21.16 | 4.33 | 0.316 | 0.497 | -14.63 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Cộng thêm ngưỡng điểm khung 1W → -1 | 117.2 | 53.1% | 0.808 | 7.33 | 15.99 | 0.624 | 1.023 | -9.66 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: EMA 50 → 0.75 + Trọng số phần Momentum (/100) → 25 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 11.24 | 49.4% | 0.07 | 9.46 | 1.19 | 0.077 | 0.064 | -11.06 |  |

### Vòng 457 — ngẫu nhiên nhiều thông số · mốc: tổng 117.2R, win 53.1%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.19

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Xác nhận khung nhỏ (A2) → W | 84.35 | 38.2% | 0.332 | 17.7 | 4.77 | 0.34 | 0.325 | -4.98 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: EMA 21 → 0.875 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 107.9 | 50% | 0.856 | 8.16 | 13.22 | 0.726 | 1.019 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + R:R tối thiểu tới TP1 → 2.38 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 89.87 | 44.4% | 0.555 | 9.64 | 9.32 | 0.518 | 0.589 | -10.97 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Fib sóng 4 → 1.56 | 115.97 | 52.7% | 0.784 | 7.59 | 15.28 | 0.586 | 1.023 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Cộng thêm ngưỡng điểm khung 4H → -1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 116.26 | 52.4% | 0.791 | 7.46 | 15.58 | 0.614 | 0.997 | -8.34 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Khung lớn phải tăng (trend ≥) → 0.425 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.32 | 58.8% | 0.205 | 5.45 | 5.75 | 0.262 | 0.151 | -11.01 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Momentum (/100) → 21 | 113.51 | 52% | 0.767 | 7.54 | 15.05 | 0.65 | 0.887 | -10 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Cộng thêm ngưỡng điểm khung 1D → 4 + R:R tối thiểu riêng khung 4H → 2 | 111.82 | 40.7% | 0.367 | 12.73 | 8.78 | 0.308 | 0.416 | -8.41 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Mức MACD → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 112.21 | 41.5% | 0.361 | 12.8 | 8.77 | 0.311 | 0.401 | -10.28 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: EMA 200 → 3 | 105.48 | 50% | 0.722 | 8.07 | 13.07 | 0.511 | 0.952 | -9.89 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu tới TP1 → 2.63 | 79.17 | 49.1% | 0.72 | 8.69 | 9.11 | 0.519 | 0.921 | -8.9 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: POC volume profile cố định → 0.688 + Cộng điểm phân kỳ dương ẩn → 2.63 | 117.2 | 53.1% | 0.808 | 7.24 | 16.19 | 0.624 | 1.023 | -8.61 |  |

### Vòng 456 — ngẫu nhiên nhiều thông số · mốc: tổng 117.2R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 15.84

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 123.83 | 50.6% | 0.784 | 8.35 | 14.83 | 0.746 | 0.829 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + % chốt ở TP1 → 0.287 + Điểm vùng: MACD cắt lên Signal → 0.438 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 65.67 | 44.1% | 0.592 | 10.51 | 6.25 | 0.385 | 0.818 | -4.3 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Cộng thêm ngưỡng điểm khung 1D → 4 | 116.95 | 53.1% | 0.807 | 7.47 | 15.66 | 0.635 | 1.001 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: POC anchored → 4 | 99.36 | 48.3% | 0.695 | 9.35 | 10.63 | 0.532 | 0.851 | -4.48 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng điểm phân kỳ dương ẩn → 2.63 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu riêng khung 1D → 2 | 28.6 | 55.6% | 0.153 | 6.83 | 4.19 | 0.197 | 0.116 | -9.38 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 113.41 | 52.4% | 0.772 | 7.54 | 15.04 | 0.602 | 0.969 | -10.63 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Trọng số phần SL (/100) → 7 + R:R tối thiểu tới TP1 → 2.38 | 100.56 | 47.2% | 0.632 | 8.59 | 11.71 | 0.541 | 0.72 | -10.97 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 112.77 | 51.7% | 0.789 | 7.61 | 14.82 | 0.578 | 1.034 | -10.95 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: EMA 21 → 1.13 | 68.86 | 46.2% | 0.65 | 8.78 | 7.84 | 0.449 | 0.883 | -6.83 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Số TP tối đa → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Entry (/100) → 28 | 100.63 | 46% | 0.625 | 8.91 | 11.29 | 0.553 | 0.691 | -9.86 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: HVN cố định → 0.563 | 98.43 | 50.7% | 0.735 | 7.67 | 12.83 | 0.585 | 0.914 | -8.27 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + SL tối đa (% Entry) → 0.35 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 103.4 | 49% | 0.703 | 8.34 | 12.4 | 0.521 | 0.909 | -11.19 |  |

### Vòng 455 — ngẫu nhiên nhiều thông số · mốc: tổng 117.2R, win 53.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 15.92

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + % chốt ở TP1 → 0.287 | 117.03 | 53.1% | 0.807 | 7.37 | 15.88 | 0.621 | 1.024 | -9.64 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: EMA 21 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 106.49 | 52.3% | 0.687 | 7.88 | 13.51 | 0.602 | 0.786 | -9.77 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 | 113.59 | 53% | 0.762 | 7.95 | 14.29 | 0.624 | 0.914 | -9.66 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: HVN anchored → 0.188 + Cộng thêm ngưỡng điểm khung 1W → 2 | 115.82 | 52.1% | 0.793 | 7.64 | 15.16 | 0.63 | 0.975 | -8.34 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Fib sóng 4 → 0.938 | 104.87 | 46.2% | 0.621 | 9.03 | 11.61 | 0.591 | 0.648 | -7.92 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Vùng RSI 45–55 → 1.13 + R:R tối thiểu tới TP1 → 2.38 | 86.63 | 45.6% | 0.541 | 9.2 | 9.42 | 0.497 | 0.586 | -10.97 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 112.49 | 49.6% | 0.821 | 8.17 | 13.77 | 0.603 | 1.085 | -8.91 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: POC anchored → 4 + Đệm SL riêng khung 1W (ATR) → 0.3 | 88.87 | 47.3% | 0.6 | 10.53 | 8.44 | 0.551 | 0.646 | -5.61 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: BOS → 1 | 113.41 | 52.4% | 0.772 | 7.76 | 14.61 | 0.602 | 0.969 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần SL (/100) → 7 | 115.97 | 52.7% | 0.784 | 7.62 | 15.22 | 0.586 | 1.023 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 115.86 | 53.1% | 0.799 | 7.39 | 15.68 | 0.623 | 1.004 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Trọng số phần Elliott (/100) → 6 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 70.54 | 46.7% | 0.659 | 8.24 | 8.56 | 0.449 | 0.899 | -6.83 |  |

### Vòng 454 — ngẫu nhiên nhiều thông số · mốc: tổng 117.2R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 15.84

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + % chốt ở TP1 → 0.307 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: EMA 200 → 1 | 98.47 | 48.7% | 0.631 | 8.86 | 11.11 | 0.507 | 0.772 | -8.79 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 111.29 | 50.7% | 0.762 | 7.92 | 14.05 | 0.486 | 1.071 | -9.52 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: HVN anchored → 0.313 | 84.92 | 44.9% | 0.578 | 10.05 | 8.45 | 0.398 | 0.798 | -9.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 | 104.6 | 42.1% | 0.551 | 12.73 | 8.22 | 0.576 | 0.53 | -5.55 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Trọng số phần Entry (/100) → 28 + Điểm vùng: EMA 200 → 1 + Trọng số phần Divergence (/100) → 9 | 114.15 | 51% | 0.746 | 8 | 14.27 | 0.635 | 0.881 | -4.67 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Số TP tối đa → 2 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 100.68 | 49.6% | 0.714 | 7.97 | 12.63 | 0.557 | 0.878 | -9.62 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Cổng Dow → TẮT + Ngưỡng điểm vào kèo → 74 + Trọng số phần Trend (/100) → 19 | 128.02 | 44.1% | 0.634 | 10.88 | 11.77 | 0.618 | 0.647 | -17.19 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + R:R tối thiểu tới TP1 → 2.63 + R:R tối thiểu riêng khung 1D → 2 | 114.16 | 41.1% | 0.338 | 12.77 | 8.94 | 0.382 | 0.303 | -10.34 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 114.49 | 49.7% | 0.748 | 8.39 | 13.65 | 0.584 | 0.938 | -10.69 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Mức MACD → 1.13 + Đệm SL riêng khung 1W (ATR) → 0.3 | 90.55 | 37.2% | 0.379 | 16.55 | 5.47 | 0.316 | 0.434 | -4.59 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 65.94 | 44.5% | 0.554 | 10.59 | 6.23 | 0.52 | 0.598 | -6.33 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 3 + R:R tối thiểu tới TP1 → 2.63 | 108.93 | 48% | 0.717 | 10.06 | 10.83 | 0.642 | 0.793 | -9.49 |  |

### Vòng 453 — ngẫu nhiên nhiều thông số · mốc: tổng 120.04R, win 53.5%, rủi ro tụt vốn 7R, lời÷rủi ro 17.15

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + R:R tối thiểu riêng khung 1D → 2 | 114.94 | 48.2% | 0.692 | 8.42 | 13.65 | 0.646 | 0.739 | -6.12 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: EMA 21 → 1.13 | 113.73 | 52.1% | 0.779 | 7.36 | 15.45 | 0.598 | 0.992 | -8.2 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Đệm SL riêng khung 4H (ATR) → 0.3 | 145.02 | 37.4% | 0.488 | 20.12 | 7.21 | 0.299 | 0.684 | -8.19 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu riêng khung 1W → 2 | 24.28 | 53.3% | 0.145 | 6.7 | 3.62 | 0.196 | 0.099 | -9.37 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Break mây Ichimoku → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Đệm SL riêng khung 1D (ATR) → 0.3 | 102.32 | 46.1% | 0.664 | 10.14 | 10.09 | 0.691 | 0.641 | -5.27 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: BOS → 3 + Cộng điểm phân kỳ dương ẩn → 3.5 | 118.98 | 50.3% | 0.788 | 8.1 | 14.69 | 0.611 | 0.992 | -8.89 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + % chốt ở TP1 → 0.287 | 119.67 | 53.1% | 0.825 | 7.34 | 16.3 | 0.611 | 1.082 | -7.84 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: EMA 21 → 1.13 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: POC volume profile cố định → 0.688 | 104.74 | 50.7% | 0.708 | 7.6 | 13.78 | 0.561 | 0.871 | -9.24 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: EMA 21 → 1.13 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Mức MACD → 1.13 | 107.17 | 50.7% | 0.714 | 8 | 13.4 | 0.505 | 0.948 | -10.08 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần Elliott (/100) → 10 | 110.54 | 48.2% | 0.807 | 8.29 | 13.33 | 0.572 | 1.032 | -8.2 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: EMA 200 → 3 + R:R tối thiểu riêng khung 1D → 2 + Khung lớn phải tăng (trend ≥) → 0.375 | 98.88 | 46% | 0.607 | 9.37 | 10.55 | 0.483 | 0.723 | -6.09 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 1W → -1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 78.51 | 45.5% | 0.714 | 8.89 | 8.83 | 0.608 | 0.846 | -4.04 |  |
