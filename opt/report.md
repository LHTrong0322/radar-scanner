# Tối ưu tự động (chạy liên tục) — vòng 824

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 9543 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 46.3% | 97.49R | 0.594 | 5.7R | 9.69R | 10.06 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 146 | 53.4% | 122.14R | 0.837 | 5.09R | 7.29R | 16.75 | 28 | 17.9% | -9.92R | -0.354 | 10.54R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.77R | 2 | 0% | -2.3R |
| 4H | 108 | 54.6% | 94.95R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 46.3% | 97.49R | 9.69R | 10.06 | 31 | 12.9% | -13R |
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

### Vòng 824 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.29R, lời÷rủi ro 16.75

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: HVN anchored → 0.188 | 122.14 | 53.4% | 0.837 | 7.29 | 16.75 | 0.635 | 1.061 | -9.92 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Cộng điểm phân kỳ dương ẩn → 2.25 + Cộng thêm ngưỡng điểm khung 4H → 2 | 117.46 | 51.4% | 0.794 | 7.69 | 15.27 | 0.613 | 0.99 | -10.03 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 100.06 | 46.9% | 0.681 | 9.04 | 11.07 | 0.49 | 0.903 | -8.13 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần R:R (/100) → 33 | 120.34 | 53.1% | 0.819 | 7.09 | 16.97 | 0.634 | 1.021 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần Divergence (/100) → 9 | 108.75 | 49.7% | 0.675 | 8.89 | 12.23 | 0.555 | 0.803 | -8.35 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Cộng thêm ngưỡng điểm khung 1D → 3 | 121.79 | 41.7% | 0.388 | 11.9 | 10.23 | 0.348 | 0.421 | -8.46 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm tối thiểu của vùng đặt SL → 2 + Khung lớn phải tăng (trend ≥) → 0.425 | 114.07 | 53.1% | 0.798 | 7.88 | 14.48 | 0.606 | 1.009 | -9.96 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức MACD → 1.13 | 30.9 | 58.9% | 0.196 | 5.57 | 5.55 | 0.208 | 0.184 | -9.5 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 73.69 | 45.9% | 0.676 | 8.81 | 8.36 | 0.429 | 0.947 | -5.45 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 77.09 | 46.2% | 0.584 | 9.74 | 7.91 | 0.4 | 0.785 | -9.54 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: HVN cố định → 0.438 | 98.53 | 47.9% | 0.694 | 8.86 | 11.12 | 0.6 | 0.802 | -8.97 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + R:R tối thiểu riêng khung 1W → 2 | 105.29 | 51% | 0.707 | 7.96 | 13.23 | 0.607 | 0.799 | -10.96 |  |

### Vòng 823 — ngẫu nhiên nhiều thông số · mốc: tổng 118.26R, win 53.1%, rủi ro tụt vốn 7.28R, lời÷rủi ro 16.24

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 76.71 | 45.7% | 0.468 | 10.08 | 7.61 | 0.353 | 0.582 | -8.8 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Fib sóng 4 → 0.938 | 97.74 | 51.7% | 0.674 | 7.93 | 12.33 | 0.639 | 0.709 | -10.76 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 110.64 | 50.7% | 0.748 | 7.93 | 13.95 | 0.615 | 0.896 | -9.92 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 85.76 | 44.3% | 0.493 | 10.97 | 7.82 | 0.468 | 0.518 | -9.19 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Cộng điểm phân kỳ dương ẩn → 2.25 | 116.53 | 52.1% | 0.809 | 7.59 | 15.35 | 0.641 | 0.997 | -9.92 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm tối thiểu của vùng đặt SL → 4 | 74.13 | 44.2% | 0.449 | 10.57 | 7.01 | 0.373 | 0.521 | -8.79 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + R:R tối thiểu riêng khung 4H → 2 + Cộng thêm ngưỡng điểm khung 1D → 3 + Trọng số phần Momentum (/100) → 21 | 118.7 | 41.7% | 0.378 | 11.89 | 9.98 | 0.372 | 0.382 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: MACD cắt lên Signal → 0.563 | 109.42 | 52.7% | 0.749 | 7.68 | 14.25 | 0.658 | 0.849 | -9.14 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Lệnh chờ hết hạn sau (nến) → 6 + Cộng điểm phân kỳ dương ẩn → 3 | 92.64 | 49.6% | 0.718 | 7.97 | 11.62 | 0.58 | 0.877 | -9.56 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 30.54 | 55.6% | 0.189 | 5.76 | 5.3 | 0.187 | 0.19 | -9.5 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: HVN cố định → 0.438 + Cộng thêm ngưỡng điểm khung 4H → 2 | 113.6 | 51% | 0.773 | 7.91 | 14.36 | 0.644 | 0.919 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 107.29 | 48.6% | 0.766 | 8.08 | 13.28 | 0.608 | 0.944 | -12.16 |  |

### Vòng 822 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Entry (/100) → 33 + % chốt ở TP1 → 0.307 | 109.25 | 49.7% | 0.687 | 8.66 | 12.62 | 0.566 | 0.82 | -9.68 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Xác nhận khung nhỏ (A2) → W | 103.68 | 39.8% | 0.408 | 15.44 | 6.72 | 0.369 | 0.445 | -3.72 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 107.52 | 50.3% | 0.703 | 8.26 | 13.02 | 0.546 | 0.865 | -8.61 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Cộng thêm ngưỡng điểm khung 1D → 3 + Ngưỡng điểm vào kèo → 74 | 120.82 | 52.3% | 0.811 | 7.37 | 16.39 | 0.608 | 1.04 | -9.92 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 56.92 | 39.9% | 0.32 | 14.01 | 4.06 | 0.409 | 0.22 | -18.86 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 1W → -1 | 103.68 | 39.8% | 0.408 | 15.44 | 6.72 | 0.369 | 0.445 | -4.97 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 155.95 | 39.7% | 0.534 | 17.87 | 8.73 | 0.349 | 0.714 | -14.33 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 200 → 3 | 66.71 | 49% | 0.667 | 7.52 | 8.87 | 0.289 | 1.03 | -13.75 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: EMA 200 → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 65.63 | 42.9% | 0.551 | 10.83 | 6.06 | 0.339 | 0.799 | -0.29 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Momentum (/100) → 21 | 119.5 | 53.1% | 0.813 | 7.16 | 16.69 | 0.635 | 1.008 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.13 | 51.3% | 0.681 | 8.22 | 12.42 | 0.614 | 0.755 | -10.69 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: HVN cố định → 0.438 + Ngưỡng điểm vào kèo → 74 | 117.71 | 51.3% | 0.785 | 7.8 | 15.09 | 0.582 | 1.011 | -10.03 |  |

### Vòng 821 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.22R, lời÷rủi ro 16.92

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Ngưỡng điểm vào kèo → 77 + Cộng thêm ngưỡng điểm khung 1D → 3 | 156.22 | 38.8% | 0.541 | 17.89 | 8.73 | 0.408 | 0.678 | -18.94 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: MACD cắt lên Signal → 0.438 | 108.49 | 50% | 0.714 | 8.72 | 12.44 | 0.488 | 0.971 | -7.34 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN cố định → 0.563 | 122.6 | 42% | 0.393 | 11.8 | 10.39 | 0.353 | 0.426 | -10.48 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + SL tối đa (% Entry) → 0.425 + R:R tối thiểu tới TP1 → 2.63 | 101.82 | 39.1% | 0.428 | 15.42 | 6.6 | 0.37 | 0.48 | -5.71 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + SL tối đa (% Entry) → 0.425 | 111.4 | 51% | 0.768 | 7.75 | 14.37 | 0.542 | 1.004 | -10.92 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Đệm SL riêng khung 1W (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 24.44 | 56.3% | 0.17 | 6.84 | 3.57 | 0.192 | 0.153 | -10.87 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Cổng Dow → TẮT + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 118.96 | 42.1% | 0.511 | 11.78 | 10.1 | 0.483 | 0.537 | -17.31 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Đệm SL riêng khung 1D (ATR) → 0.3 | 127.41 | 48.9% | 0.724 | 9.75 | 13.07 | 0.676 | 0.768 | -5.32 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 74.27 | 35.7% | 0.231 | 21.65 | 3.43 | 0.293 | 0.174 | -2.02 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Đệm SL riêng khung 1W (ATR) → 0.3 + Xác nhận khung nhỏ (A2) → W | 84.97 | 36.6% | 0.366 | 17.07 | 4.98 | 0.365 | 0.367 | -5.78 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Xác nhận khung nhỏ (A2) → W | 103.05 | 39.4% | 0.406 | 15.53 | 6.64 | 0.37 | 0.438 | -3.72 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + SL tối đa (% Entry) → 0.425 + Trọng số phần SL (/100) → 9 | 118.26 | 51.3% | 0.788 | 7.73 | 15.3 | 0.625 | 0.966 | -8.61 |  |

### Vòng 820 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.21R, lời÷rủi ro 16.94

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + R:R tối thiểu riêng khung 4H → 2 | 39.54 | 35.5% | 0.23 | 15.15 | 2.61 | 0.277 | 0.18 | -3.86 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Entry (/100) → 33 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 86.95 | 45.3% | 0.547 | 9.22 | 9.43 | 0.497 | 0.595 | -11.49 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + R:R tối thiểu tới TP1 → 2.63 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 126.46 | 45.1% | 0.594 | 10.57 | 11.96 | 0.698 | 0.48 | -14.35 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Mức MACD → 1.13 | 108.49 | 50.7% | 0.733 | 8.09 | 13.41 | 0.578 | 0.915 | -8.9 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần R:R (/100) → 28 | 79.6 | 47.3% | 0.711 | 8.55 | 9.31 | 0.496 | 0.95 | -10.52 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 25.14 | 55.3% | 0.148 | 7.28 | 3.45 | 0.168 | 0.129 | -7.57 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + % chốt ở TP1 → 0.287 + Điểm vùng: POC volume profile cố định → 0.813 | 126.97 | 50% | 0.804 | 8 | 15.87 | 0.758 | 0.856 | -9.48 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 147.1 | 38.8% | 0.514 | 18.1 | 8.13 | 0.373 | 0.658 | -14.64 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: HVN anchored → 0.313 | 108.63 | 50% | 0.744 | 8.05 | 13.49 | 0.498 | 1.004 | -10.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Divergence (/100) → 12 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 109.68 | 46.9% | 0.767 | 8.85 | 12.39 | 0.535 | 0.99 | -13.95 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Cộng thêm ngưỡng điểm khung 1D → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Đệm SL riêng khung 1D (ATR) → 0.3 | 117.86 | 46.8% | 0.689 | 10.55 | 11.17 | 0.62 | 0.753 | -5.32 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần Entry (/100) → 33 | 83.79 | 46.3% | 0.511 | 9.68 | 8.66 | 0.402 | 0.62 | -8.8 |  |

### Vòng 819 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.438 + R:R tối thiểu tới TP1 → 2.38 | 73.92 | 33.2% | 0.267 | 25.25 | 2.93 | 0.205 | 0.33 | -14.48 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Ngưỡng điểm vào kèo → 77 | 18.57 | 39.7% | 0.273 | 11.55 | 1.61 | 0.198 | 0.363 | -6.23 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: EMA 50 → 1.13 + Cộng thêm ngưỡng điểm khung 1W → 2 | 116.77 | 51% | 0.784 | 8.22 | 14.21 | 0.627 | 0.966 | -7.61 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 + Coin phải mạnh hơn BTC trong N ngày → 14 | 90.61 | 50.4% | 0.761 | 7.78 | 11.65 | 0.553 | 0.996 | -16.39 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Fib sóng 4 → 1.56 | 110.39 | 51% | 0.772 | 7.95 | 13.89 | 0.546 | 1.021 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: HVN cố định → 0.563 | 114.36 | 51.7% | 0.8 | 7.49 | 15.27 | 0.621 | 0.991 | -9.92 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: BOS → 3 + Trọng số phần Trend (/100) → 19 | 116.05 | 53% | 0.779 | 7.74 | 14.99 | 0.635 | 0.933 | -9.92 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trọng số phần Trend (/100) → 19 + Đệm SL riêng khung 4H (ATR) → 0.3 | 154.68 | 38.9% | 0.528 | 17.79 | 8.69 | 0.36 | 0.699 | -11.5 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Số TP tối đa → 2 | 118.7 | 52.1% | 0.813 | 7.53 | 15.76 | 0.6 | 1.051 | -9.74 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Cộng thêm ngưỡng điểm khung 1W → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 | 116.64 | 46.5% | 0.686 | 10.36 | 11.26 | 0.658 | 0.71 | -5.32 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Đệm SL riêng khung 1D (ATR) → 0.3 | 120.06 | 47.6% | 0.715 | 9.81 | 12.24 | 0.654 | 0.769 | -5.28 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: BOS → 3 | 122.14 | 53.4% | 0.837 | 7.23 | 16.89 | 0.635 | 1.061 | -8.9 |  |

### Vòng 818 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.31R, lời÷rủi ro 16.71

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Momentum (/100) → 21 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 81.39 | 46.3% | 0.496 | 9.86 | 8.25 | 0.353 | 0.639 | -8.8 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức RSI 30/70 → 0.875 + Ngưỡng điểm vào kèo → 77 + Cộng thêm ngưỡng điểm khung 4H → 2 | 149.12 | 39.2% | 0.509 | 18.06 | 8.26 | 0.333 | 0.679 | -14.56 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 1D (ATR) → 0.3 | 95.33 | 46.4% | 0.681 | 10.16 | 9.38 | 0.756 | 0.614 | -12.13 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 | 101.43 | 51% | 0.69 | 8.55 | 11.86 | 0.651 | 0.73 | -9.25 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Trọng số phần Divergence (/100) → 9 + Trọng số phần Trend (/100) → 19 + Trọng số phần Entry (/100) → 28 | 107.62 | 50% | 0.699 | 8.31 | 12.95 | 0.537 | 0.869 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Mức MACD → 1.13 | 114.91 | 50% | 0.776 | 7.88 | 14.58 | 0.555 | 1.029 | -9.92 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: POC anchored → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 24.56 | 57.7% | 0.157 | 6.25 | 3.93 | 0.181 | 0.138 | -9.53 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + % chốt ở TP1 → 0.287 | 122.81 | 53.4% | 0.841 | 7.31 | 16.8 | 0.637 | 1.069 | -9.9 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Coin phải mạnh hơn BTC trong N ngày → 14 | 91.06 | 50.8% | 0.772 | 7.72 | 11.8 | 0.553 | 1.023 | -16.39 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Coin phải mạnh hơn BTC trong N ngày → 14 | 81.41 | 48.3% | 0.69 | 8.16 | 9.98 | 0.518 | 0.886 | -16.39 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: EMA 21 → 1.13 | 138.76 | 45.7% | 0.593 | 10.06 | 13.79 | 0.656 | 0.528 | -13.36 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Cổng Dow → CHẶT + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần R:R (/100) → 28 | 87.23 | 52.7% | 0.779 | 6.88 | 12.68 | 0.37 | 1.108 | -10.7 |  |

### Vòng 817 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Break mây Ichimoku → 1 | 94.2 | 48.9% | 0.678 | 8.72 | 10.8 | 0.428 | 0.897 | -10.96 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Momentum (/100) → 25 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Ngưỡng điểm vào kèo → 77 | 85.4 | 48.7% | 0.743 | 7.97 | 10.72 | 0.577 | 0.923 | -16.39 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần Entry (/100) → 28 | 135.16 | 45.1% | 0.58 | 10.87 | 12.43 | 0.642 | 0.515 | -11.7 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: MACD cắt lên Signal → 0.438 | 112.99 | 49.7% | 0.711 | 8.8 | 12.84 | 0.483 | 0.972 | -7.34 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + % chốt ở TP1 → 0.307 | 121.76 | 53.1% | 0.828 | 7.41 | 16.43 | 0.637 | 1.039 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 110.7 | 50.3% | 0.688 | 8.74 | 12.67 | 0.551 | 0.84 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Cổng Dow → CHẶT + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Biên mây Ichimoku → 1.05 | 74.13 | 37.6% | 0.328 | 20.79 | 3.57 | 0.112 | 0.515 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Biên mây Ichimoku → 1.35 | 34.3 | 38.9% | 0.381 | 11.08 | 3.1 | 0.317 | 0.461 | -7.55 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 132.24 | 50.6% | 0.806 | 8.02 | 16.49 | 0.761 | 0.854 | -6.26 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 | 113.61 | 44.5% | 0.624 | 11.31 | 10.05 | 0.763 | 0.5 | -5.39 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Trọng số phần Elliott (/100) → 6 + R:R tối thiểu riêng khung 4H → 2 | 122.46 | 41.9% | 0.391 | 11.83 | 10.35 | 0.355 | 0.421 | -8.46 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 107.32 | 49.7% | 0.73 | 8.12 | 13.22 | 0.544 | 0.935 | -9.92 |  |

### Vòng 816 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.1R, lời÷rủi ro 17.20

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cộng điểm phân kỳ dương ẩn → 2.25 + R:R tối thiểu riêng khung 1W → 2 | 113.84 | 52.4% | 0.774 | 7.59 | 15 | 0.648 | 0.899 | -10.96 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Fib sóng 4 → 0.938 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Ngưỡng điểm vào kèo → 77 | 91.78 | 44.5% | 0.629 | 9.48 | 9.68 | 0.481 | 0.793 | -8.13 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 73.69 | 45.9% | 0.676 | 8.83 | 8.35 | 0.429 | 0.947 | -6.78 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: EMA 200 → 3 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: HVN anchored → 0.188 | 109.04 | 49.3% | 0.757 | 7.95 | 13.72 | 0.552 | 0.963 | -9.9 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Lệnh chờ hết hạn sau (nến) → 6 | 38.38 | 35.4% | 0.238 | 15.25 | 2.52 | 0.3 | 0.177 | 2.22 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + R:R tối thiểu riêng khung 1W → 2 | 100.2 | 50.3% | 0.673 | 8.25 | 12.15 | 0.552 | 0.785 | -10.96 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Cộng thêm ngưỡng điểm khung 1W → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 92.79 | 44.1% | 0.61 | 10.34 | 8.97 | 0.453 | 0.785 | -8.44 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức MACD → 1.13 | 110.06 | 51% | 0.739 | 8.21 | 13.41 | 0.606 | 0.87 | -9.64 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 87.15 | 50.9% | 0.751 | 7.04 | 12.38 | 0.377 | 1.035 | -12.08 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 + Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 80.65 | 48.3% | 0.695 | 8.33 | 9.68 | 0.474 | 0.933 | -14.06 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + % chốt ở TP1 → 0.287 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Cộng điểm phân kỳ dương ẩn → 3 | 99.6 | 46.6% | 0.673 | 9.06 | 10.99 | 0.49 | 0.883 | -8.13 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: POC anchored → 4 + Điểm vùng: HVN anchored → 0.188 | 121.98 | 46.6% | 0.645 | 9.32 | 13.09 | 0.706 | 0.591 | -5.27 |  |

### Vòng 815 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: HVN cố định → 0.438 + Trọng số phần Divergence (/100) → 9 | 113.49 | 51% | 0.762 | 7.68 | 14.78 | 0.585 | 0.956 | -10.26 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Fib sóng 4 → 1.56 | 21.13 | 35.4% | 0.325 | 11.14 | 1.9 | 0.206 | 0.448 | -11.35 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: POC anchored → 2 | 105.53 | 49.3% | 0.694 | 8.28 | 12.75 | 0.53 | 0.867 | -9.92 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Khung lớn phải tăng (trend ≥) → 0.425 + Lệnh chờ hết hạn sau (nến) → 6 | 99.15 | 50.8% | 0.763 | 7.69 | 12.89 | 0.552 | 1.008 | -9.59 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 116.01 | 51.7% | 0.779 | 7.57 | 15.32 | 0.635 | 0.932 | -9.92 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 68.18 | 46.2% | 0.516 | 9.7 | 7.03 | 0.411 | 0.639 | -10.25 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Biên mây Ichimoku → 1.35 | 76.42 | 47.2% | 0.602 | 9.43 | 8.1 | 0.444 | 0.757 | -9.23 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + R:R tối thiểu riêng khung 4H → 2 | 102.31 | 40% | 0.335 | 13.49 | 7.58 | 0.296 | 0.368 | -9.56 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + SL tối đa (% Entry) → 0.425 | 108 | 50% | 0.701 | 8.83 | 12.23 | 0.524 | 0.904 | -7.34 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + R:R tối thiểu riêng khung 1D → 2 | 104.91 | 46.3% | 0.6 | 8.93 | 11.75 | 0.584 | 0.614 | -7.15 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần Divergence (/100) → 12 | 117.61 | 51.7% | 0.789 | 7.65 | 15.37 | 0.592 | 1.006 | -7.58 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + % chốt ở TP1 → 0.287 | 83.79 | 50.4% | 0.704 | 8.09 | 10.36 | 0.525 | 0.912 | -16.39 |  |
