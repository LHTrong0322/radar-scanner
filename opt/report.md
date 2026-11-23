# Tối ưu tự động (chạy liên tục) — vòng 1237

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 14476 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 165 | 46.7% | 100.04R | 0.606 | 5.7R | 9.71R | 10.30 | 32 | 15.6% | -11.88R | -0.371 | 11.88R |
| **Tốt nhất** | 142 | 52.1% | 118.53R | 0.835 | 5.15R | 7.41R | 16.00 | 30 | 16.7% | -12.06R | -0.402 | 12.44R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 25 | 48% | 19.78R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 106 | 53.8% | 91.78R | 21 | 23.8% | -4.09R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 165 | 46.7% | 100.04R | 9.71R | 10.30 | 32 | 15.6% | -11.88R |
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

### Vòng 1237 — ngẫu nhiên nhiều thông số · mốc: tổng 118.53R, win 52.1%, rủi ro tụt vốn 7.41R, lời÷rủi ro 16.00

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 | 94.61 | 41.8% | 0.557 | 10.81 | 8.75 | 0.45 | 0.651 | -11.74 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 36.11 | 56.8% | 0.205 | 5.97 | 6.05 | 0.231 | 0.178 | -7.61 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: HVN cố định → 0.563 | 110.44 | 48.7% | 0.717 | 8.23 | 13.42 | 0.629 | 0.815 | -11.04 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Cộng thêm ngưỡng điểm khung 1W → 2 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: BOS → 2 | 113.07 | 50.7% | 0.785 | 7.81 | 14.48 | 0.66 | 0.921 | -11.45 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khung lớn phải tăng (trend ≥) → 0.425 | 99.65 | 50.7% | 0.722 | 8.02 | 12.43 | 0.634 | 0.824 | -11.69 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + SL tối đa (% Entry) → 0.425 | 110.62 | 49.7% | 0.774 | 8.02 | 13.79 | 0.572 | 1.002 | -12.06 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Fib sóng 4 → 0.938 | 85.85 | 45.4% | 0.527 | 10.04 | 8.55 | 0.466 | 0.585 | -10.04 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 123.25 | 50.3% | 0.816 | 7.79 | 15.82 | 0.815 | 0.818 | -12.03 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Cộng điểm phân kỳ dương ẩn → 3 | 117.33 | 51% | 0.82 | 7.47 | 15.71 | 0.66 | 0.997 | -12.47 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Cổng Dow → TẮT + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 118.48 | 41.4% | 0.551 | 12.4 | 9.55 | 0.53 | 0.573 | -19.93 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm tối thiểu của vùng đặt SL → 4 | 100.65 | 47.9% | 0.709 | 8.22 | 12.24 | 0.578 | 0.836 | -11.8 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 117.03 | 51% | 0.807 | 7.68 | 15.24 | 0.655 | 0.975 | -12.06 |  |

### Vòng 1236 — ngẫu nhiên nhiều thông số · mốc: tổng 118.53R, win 52.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 15.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần Entry (/100) → 33 | 103.06 | 48% | 0.678 | 9.27 | 11.12 | 0.528 | 0.854 | -10.6 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Trọng số phần Entry (/100) → 33 | 116.32 | 50.7% | 0.819 | 7.59 | 15.33 | 0.66 | 0.997 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: EMA 50 → 0.75 | 114.06 | 51.4% | 0.803 | 7.51 | 15.19 | 0.597 | 1.034 | -13.18 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + R:R tối thiểu riêng khung 1W → 2 + Ngưỡng điểm vào kèo → 74 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 94.85 | 47% | 0.628 | 8 | 11.86 | 0.496 | 0.748 | -13.81 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 113.61 | 50.7% | 0.789 | 7.73 | 14.7 | 0.609 | 0.995 | -13 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm tối thiểu của vùng đặt SL → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 | 91.44 | 43.8% | 0.598 | 10.21 | 8.96 | 0.488 | 0.698 | -11.83 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + R:R tối thiểu riêng khung 1D → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: MACD cắt lên Signal → 0.438 | 63.35 | 40.1% | 0.462 | 12.18 | 5.2 | 0.377 | 0.539 | -5.71 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Fib sóng 4 → 0.938 | 104.61 | 48.3% | 0.693 | 9.07 | 11.53 | 0.452 | 0.971 | -10.6 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 117.06 | 51.4% | 0.824 | 7.55 | 15.5 | 0.655 | 1.02 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 94.78 | 47% | 0.636 | 9.64 | 9.83 | 0.411 | 0.904 | -11.61 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: POC anchored → 2 | 119.05 | 40.7% | 0.376 | 13.07 | 9.11 | 0.319 | 0.425 | -6.96 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 21.32 | 46.2% | 0.068 | 9.29 | 2.29 | 0.083 | 0.058 | -12.21 |  |

### Vòng 1235 — ngẫu nhiên nhiều thông số · mốc: tổng 118.53R, win 52.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + R:R tối thiểu riêng khung 4H → 2 + Ngưỡng điểm vào kèo → 74 | 112.1 | 39.2% | 0.36 | 13.08 | 8.57 | 0.337 | 0.381 | -6.64 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: EMA 200 → 1 | 117.92 | 51.4% | 0.797 | 7.76 | 15.2 | 0.651 | 0.983 | -12.16 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Trend (/100) → 12 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần SL (/100) → 9 | 83 | 45.2% | 0.669 | 9.88 | 8.4 | 0.5 | 0.856 | -20.45 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 4H → 2 | 114.92 | 52.1% | 0.809 | 7.51 | 15.3 | 0.672 | 0.968 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 136.43 | 44.4% | 0.571 | 10.95 | 12.46 | 0.688 | 0.456 | -15.21 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 24.25 | 55.6% | 0.152 | 6.14 | 3.95 | 0.153 | 0.151 | -7.4 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cộng thêm ngưỡng điểm khung 4H → -1 | 128.03 | 42.9% | 0.604 | 12.04 | 10.63 | 0.526 | 0.688 | -19.68 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: POC anchored → 2 | 100.07 | 48.3% | 0.672 | 8.55 | 11.7 | 0.506 | 0.849 | -12.48 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 0 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + % chốt ở TP1 → 0.287 | 118.44 | 52.1% | 0.834 | 7.4 | 16.01 | 0.652 | 1.044 | -13.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Elliott (/100) → 6 | 29.61 | 57.2% | 0.186 | 5.95 | 4.98 | 0.181 | 0.191 | -8.16 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần R:R (/100) → 28 + Trọng số phần Elliott (/100) → 6 + Đệm SL riêng khung 1W (ATR) → 0.3 | 98.34 | 46.6% | 0.674 | 9.69 | 10.15 | 0.523 | 0.824 | -15.03 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 96.62 | 45.5% | 0.666 | 9.2 | 10.5 | 0.536 | 0.814 | -9.15 |  |

### Vòng 1234 — ngẫu nhiên nhiều thông số · mốc: tổng 118.53R, win 52.1%, rủi ro tụt vốn 7.38R, lời÷rủi ro 16.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Momentum (/100) → 25 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 29.18 | 57% | 0.185 | 5.99 | 4.87 | 0.184 | 0.186 | -7.14 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Đệm SL riêng khung 1D (ATR) → 0.3 + Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần Trend (/100) → 12 | 97.24 | 41.8% | 0.549 | 12.38 | 7.85 | 0.493 | 0.6 | -12.55 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 26.43 | 54.3% | 0.142 | 6.9 | 3.83 | 0.155 | 0.131 | -7.25 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 21 → 1.13 + Trọng số phần R:R (/100) → 33 | 17.82 | 53.6% | 0.143 | 6.78 | 2.63 | 0.159 | 0.126 | -7.81 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Xác nhận khung nhỏ (A2) → W | 120.01 | 39.4% | 0.455 | 14.99 | 8.01 | 0.46 | 0.45 | -8.94 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Entry (/100) → 28 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 100.07 | 49.2% | 0.782 | 8.07 | 12.4 | 0.521 | 1.06 | -12.86 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 72.75 | 47.2% | 0.512 | 9.3 | 7.82 | 0.51 | 0.514 | -16.31 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Cổng Dow → CHẶT + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib sóng 4 → 0.938 | 109.71 | 39.7% | 0.49 | 13.67 | 8.03 | 0.44 | 0.531 | -13.59 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: HVN cố định → 0.438 + Cộng thêm ngưỡng điểm khung 1D → 3 | 112.02 | 50% | 0.778 | 7.81 | 14.34 | 0.568 | 1.02 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: POC volume profile cố định → 0.688 | 107.81 | 49.6% | 0.765 | 7.97 | 13.53 | 0.54 | 1.013 | -15.22 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Fib sóng 4 → 0.938 | 94.18 | 44.8% | 0.659 | 9.38 | 10.04 | 0.518 | 0.814 | -9.15 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + R:R tối thiểu riêng khung 1W → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 101.85 | 48.3% | 0.712 | 8.25 | 12.35 | 0.553 | 0.874 | -14.21 |  |

### Vòng 1233 — ngẫu nhiên nhiều thông số · mốc: tổng 118.53R, win 52.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 15.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: HVN cố định → 0.438 | 110.6 | 47.8% | 0.801 | 8.39 | 13.18 | 0.574 | 1.072 | -11.42 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần R:R (/100) → 28 + Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần Trend (/100) → 12 | 104.38 | 47% | 0.691 | 9.67 | 10.79 | 0.477 | 0.939 | -10.6 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Cổng Dow → TẮT | 106.84 | 36.3% | 0.271 | 17.8 | 6 | 0.338 | 0.21 | -21.92 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Trend (/100) → 19 + Cổng Dow → TẮT + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 127.47 | 43.3% | 0.587 | 11.13 | 11.45 | 0.547 | 0.627 | -21.38 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Biên mây Ichimoku → 1.05 + Cộng thêm ngưỡng điểm khung 1W → 2 | 106.79 | 50.3% | 0.736 | 7.84 | 13.62 | 0.609 | 0.873 | -13.11 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + SL tối đa (% Entry) → 0.425 | 14.95 | 35.7% | 0.178 | 13.92 | 1.07 | 0.095 | 0.299 | -7.46 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: EMA 200 → 3 | 107.81 | 49.6% | 0.765 | 7.94 | 13.58 | 0.54 | 1.013 | -14.17 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần R:R (/100) → 28 + R:R tối thiểu tới TP1 → 2.38 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 86.5 | 44.4% | 0.573 | 9.44 | 9.16 | 0.437 | 0.7 | -13.72 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 21.71 | 56.3% | 0.151 | 6.47 | 3.36 | 0.175 | 0.127 | -8.68 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Break mây Ichimoku → 1 | 92.15 | 44.4% | 0.545 | 9.68 | 9.52 | 0.584 | 0.509 | -10.86 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Trọng số phần Trend (/100) → 12 | 116.32 | 50.7% | 0.819 | 7.59 | 15.33 | 0.66 | 0.997 | -13.18 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Trọng số phần Entry (/100) → 33 + Khung lớn phải tăng (trend ≥) → 0.425 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 110.55 | 48.9% | 0.844 | 7.9 | 13.99 | 0.612 | 1.118 | -11.46 |  |

### Vòng 1232 — ngẫu nhiên nhiều thông số · mốc: tổng 118.53R, win 52.1%, rủi ro tụt vốn 7.38R, lời÷rủi ro 16.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng điểm phân kỳ dương ẩn → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 80.97 | 45.4% | 0.497 | 9.97 | 8.12 | 0.54 | 0.453 | -10.65 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Trọng số phần Elliott (/100) → 10 + Trọng số phần Trend (/100) → 12 | 102.71 | 46.8% | 0.658 | 9.38 | 10.95 | 0.61 | 0.711 | -11.47 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + % chốt ở TP1 → 0.287 + Đệm SL riêng khung 1D (ATR) → 0.3 | 89.89 | 42.9% | 0.476 | 12.11 | 7.42 | 0.503 | 0.453 | -12.79 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Fib sóng 4 → 0.938 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 110.36 | 51.1% | 0.783 | 7.61 | 14.5 | 0.64 | 0.945 | -12.57 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 104.47 | 48.6% | 0.706 | 8.25 | 12.66 | 0.569 | 0.855 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Entry (/100) → 28 + Trọng số phần Elliott (/100) → 10 | 120.76 | 40.8% | 0.391 | 12.82 | 9.42 | 0.356 | 0.42 | -11.96 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: POC volume profile cố định → 0.813 | 107.81 | 49.6% | 0.765 | 7.97 | 13.53 | 0.54 | 1.013 | -14.17 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 126.95 | 41.6% | 0.494 | 11.8 | 10.76 | 0.536 | 0.454 | -12.64 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trọng số phần Momentum (/100) → 21 | 104.41 | 50.7% | 0.705 | 8.1 | 12.89 | 0.696 | 0.716 | -12.78 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Trọng số phần Elliott (/100) → 10 | 115.06 | 50.3% | 0.794 | 7.62 | 15.1 | 0.599 | 1.02 | -13.18 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 19.92 | 53% | 0.134 | 7.69 | 2.59 | 0.129 | 0.137 | -11.36 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần Entry (/100) → 28 | 100.72 | 46.7% | 0.671 | 9.38 | 10.74 | 0.443 | 0.932 | -10.32 |  |

### Vòng 1231 — ngẫu nhiên nhiều thông số · mốc: tổng 120.15R, win 52.4%, rủi ro tụt vốn 7.3R, lời÷rủi ro 16.46

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Break mây Ichimoku → 1 | 117.53 | 50% | 0.726 | 8.5 | 13.83 | 0.625 | 0.839 | -14.19 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Trend (/100) → 12 | 22.15 | 54.7% | 0.15 | 6.32 | 3.5 | 0.173 | 0.129 | -8.44 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 + Xác nhận khung nhỏ (A2) → W | 116.43 | 39.5% | 0.438 | 15.52 | 7.5 | 0.454 | 0.423 | -5.64 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: EMA 50 → 0.75 | 114.21 | 51% | 0.799 | 7.59 | 15.05 | 0.597 | 1.021 | -13.18 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 75.66 | 49.2% | 0.641 | 8.43 | 8.98 | 0.571 | 0.724 | -18.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Mức MACD → 1.13 + Trọng số phần Trend (/100) → 12 + Cộng thêm ngưỡng điểm khung 1W → 2 | 129.55 | 44.9% | 0.571 | 10.51 | 12.33 | 0.614 | 0.53 | -16.83 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Cổng Dow → TẮT + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 113.95 | 41.1% | 0.6 | 12.35 | 9.23 | 0.535 | 0.672 | -18.14 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib sóng 4 → 0.938 | 83.54 | 46.8% | 0.592 | 9.25 | 9.03 | 0.534 | 0.653 | -12.2 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Trọng số phần Momentum (/100) → 21 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: EMA 21 → 0.875 | 90.07 | 46.1% | 0.704 | 8.92 | 10.1 | 0.444 | 0.948 | -9.71 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 97.46 | 49% | 0.663 | 8.7 | 11.2 | 0.509 | 0.823 | -13.27 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: EMA 21 → 0.875 | 101.81 | 45.3% | 0.592 | 9.42 | 10.81 | 0.581 | 0.602 | -9.5 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 113.47 | 51% | 0.783 | 7.52 | 15.09 | 0.582 | 1.01 | -13.68 |  |

### Vòng 1230 — ngẫu nhiên nhiều thông số · mốc: tổng 120.15R, win 52.4%, rủi ro tụt vốn 7.31R, lời÷rủi ro 16.44

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 117.93 | 51% | 0.825 | 7.53 | 15.66 | 0.66 | 1.006 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 116.31 | 49% | 0.75 | 8.44 | 13.78 | 0.572 | 0.951 | -13.4 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Biên mây Ichimoku → 1.35 | 110.38 | 45.1% | 0.673 | 10.03 | 11 | 0.593 | 0.759 | -13.13 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: BOS → 2 + % chốt ở TP1 → 0.307 | 114.34 | 50.7% | 0.783 | 7.54 | 15.16 | 0.617 | 0.968 | -11.9 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần R:R (/100) → 33 | 72.2 | 45.9% | 0.65 | 9.1 | 7.93 | 0.445 | 0.883 | -6.82 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Biên mây Ichimoku → 1.05 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 99.62 | 45.5% | 0.639 | 9.86 | 10.1 | 0.492 | 0.774 | -16.25 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: HVN anchored → 0.313 + Cộng thêm ngưỡng điểm khung 1W → -1 | 94.01 | 47.6% | 0.746 | 8.39 | 11.21 | 0.448 | 1.054 | -12.86 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: EMA 200 → 1 | 112 | 50.7% | 0.737 | 8.53 | 13.13 | 0.655 | 0.832 | -7.2 |  |
| Ngẫu nhiên: Số TP tối đa → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Đệm SL riêng khung 1W (ATR) → 0.3 | 107.09 | 44.9% | 0.686 | 9.66 | 11.09 | 0.513 | 0.855 | -15.42 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Trọng số phần Entry (/100) → 28 | 75.44 | 45.9% | 0.68 | 9 | 8.38 | 0.445 | 0.945 | -6.82 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + R:R tối thiểu riêng khung 1D → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 78.72 | 43.8% | 0.515 | 9.61 | 8.19 | 0.575 | 0.458 | -15.41 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 99.13 | 44.4% | 0.648 | 9.95 | 9.96 | 0.443 | 0.885 | -8.95 |  |

### Vòng 1229 — ngẫu nhiên nhiều thông số · mốc: tổng 114.09R, win 51.5%, rủi ro tụt vốn 7.41R, lời÷rủi ro 15.40

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 109.17 | 39.1% | 0.44 | 15.03 | 7.26 | 0.424 | 0.454 | -5.45 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Số TP tối đa → 1 | 110.96 | 51.1% | 0.847 | 7.34 | 15.12 | 0.602 | 1.111 | -13.18 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: HVN anchored → 0.313 | 112.73 | 50.4% | 0.835 | 7.52 | 14.99 | 0.613 | 1.074 | -13.59 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần SL (/100) → 9 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: HVN cố định → 0.438 | 109.02 | 44.9% | 0.69 | 10.2 | 10.69 | 0.605 | 0.771 | -12.33 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 79.56 | 40.1% | 0.375 | 13.06 | 6.09 | 0.328 | 0.422 | -3.23 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Break mây Ichimoku → 1 | 105.89 | 49.6% | 0.773 | 7.83 | 13.52 | 0.601 | 0.947 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Momentum (/100) → 21 | 110.3 | 46.7% | 0.66 | 8.86 | 12.45 | 0.608 | 0.71 | -9.96 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib sóng 4 → 1.56 | 160.47 | 38.9% | 0.573 | 17.61 | 9.11 | 0.458 | 0.695 | -7.93 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 106.55 | 50% | 0.772 | 7.91 | 13.47 | 0.583 | 0.972 | -11.76 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: EMA 21 → 1.13 | 108.2 | 49.3% | 0.751 | 7.91 | 13.68 | 0.537 | 0.984 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: BOS → 2 + % chốt ở TP1 → 0.287 + Điểm vùng: Biên mây Ichimoku → 1.35 | 106.26 | 48.6% | 0.718 | 8.66 | 12.27 | 0.652 | 0.782 | -10.85 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Số TP tối đa → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 99.51 | 49.3% | 0.721 | 8.1 | 12.29 | 0.532 | 0.927 | -13.83 |  |

### Vòng 1228 — ngẫu nhiên nhiều thông số · mốc: tổng 120.15R, win 52.4%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.32

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 1W → -1 | 110.48 | 46.6% | 0.635 | 9.08 | 12.17 | 0.581 | 0.686 | -9.96 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 110.05 | 48% | 0.724 | 8.43 | 13.05 | 0.524 | 0.935 | -14.57 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Mức RSI 30/70 → 1.13 | 110.48 | 46.6% | 0.635 | 9.08 | 12.17 | 0.581 | 0.686 | -9.96 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 26.96 | 57.1% | 0.173 | 6.25 | 4.31 | 0.171 | 0.175 | -6.98 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 200 → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 29.45 | 57.9% | 0.172 | 6.57 | 4.48 | 0.183 | 0.16 | -6.08 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: MACD cắt lên Signal → 0.438 + SL tối đa (% Entry) → 0.425 | 112.51 | 46.3% | 0.686 | 9.82 | 11.46 | 0.408 | 1 | -10.23 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 95.96 | 46.4% | 0.627 | 9.92 | 9.67 | 0.408 | 0.894 | -11.61 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL riêng khung 1W (ATR) → 0.3 | 104.06 | 46.2% | 0.718 | 9.26 | 11.24 | 0.476 | 0.956 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 35.25 | 38.9% | 0.392 | 10.52 | 3.35 | 0.314 | 0.494 | -7.55 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 74.3 | 48.3% | 0.619 | 8.45 | 8.79 | 0.61 | 0.629 | -19.24 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Trọng số phần Elliott (/100) → 6 + Trọng số phần Entry (/100) → 28 + Đệm SL riêng khung 1W (ATR) → 0.3 | 96.02 | 46.2% | 0.662 | 9.83 | 9.77 | 0.5 | 0.809 | -7.62 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + R:R tối thiểu riêng khung 1D → 2 | 109.78 | 45.7% | 0.627 | 8.88 | 12.36 | 0.588 | 0.665 | -9.78 |  |
