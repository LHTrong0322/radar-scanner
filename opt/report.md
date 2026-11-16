# Tối ưu tự động (chạy liên tục) — vòng 430

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 4830 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 159 | 45.9% | 86.46R | 0.544 | 5.74R | 10.07R | 8.59 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 143 | 52.4% | 109.63R | 0.767 | 6.15R | 7.61R | 14.41 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 27 | 48.1% | 15.49R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 106 | 53.8% | 86.41R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 159 | 45.9% | 86.46R | 10.07R | 8.59 | 32 | 12.5% | -14.03R |
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

### Vòng 430 — ngẫu nhiên nhiều thông số · mốc: tổng 109.63R, win 52.4%, rủi ro tụt vốn 7.61R, lời÷rủi ro 14.41

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Số TP tối đa → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 110.77 | 49.6% | 0.809 | 8.12 | 13.64 | 0.615 | 1.05 | -8.91 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Trọng số phần Trend (/100) → 12 + Cộng điểm phân kỳ dương ẩn → 3.5 | 107.99 | 51.4% | 0.76 | 7.66 | 14.1 | 0.631 | 0.914 | -9.67 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Break mây Ichimoku → 1 | 96.69 | 48.6% | 0.653 | 8.66 | 11.17 | 0.516 | 0.815 | -11.02 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 87.76 | 39.8% | 0.299 | 14.87 | 5.9 | 0.406 | 0.217 | -9.36 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Momentum (/100) → 21 | 109.44 | 52.1% | 0.76 | 7.54 | 14.51 | 0.614 | 0.938 | -9.66 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần Elliott (/100) → 6 + Khung lớn phải tăng (trend ≥) → 0.425 | 106.68 | 51.8% | 0.767 | 7.55 | 14.13 | 0.595 | 0.975 | -9.69 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Số TP tối đa → 2 + Điểm vùng: POC anchored → 2 | 94.31 | 48.6% | 0.637 | 8.85 | 10.66 | 0.535 | 0.751 | -8.63 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + R:R tối thiểu tới TP1 → 2.38 + % chốt ở TP1 → 0.307 + Điểm vùng: EMA 200 → 3 | 78.89 | 46.2% | 0.506 | 9.07 | 8.7 | 0.415 | 0.592 | -9.94 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: EMA 200 → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 77.08 | 46.8% | 0.501 | 8.81 | 8.75 | 0.434 | 0.571 | -10.31 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + R:R tối thiểu riêng khung 4H → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 110.76 | 37.7% | 0.271 | 18.15 | 6.1 | 0.352 | 0.192 | -19.72 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Cộng thêm ngưỡng điểm khung 1D → 4 | 104.02 | 51.4% | 0.712 | 7.73 | 13.46 | 0.613 | 0.83 | -10 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Ngưỡng điểm vào kèo → 74 | 109.18 | 52.1% | 0.758 | 7.63 | 14.31 | 0.624 | 0.917 | -9.66 |  |

### Vòng 429 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.5R, lời÷rủi ro 15.14

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: POC anchored → 4 | 94.91 | 51% | 0.637 | 8.42 | 11.27 | 0.61 | 0.666 | -4.25 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + SL tối đa (% Entry) → 0.425 | 106.82 | 51% | 0.727 | 7.66 | 13.95 | 0.587 | 0.894 | -10 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: EMA 200 → 3 | 101.3 | 49.6% | 0.718 | 8.04 | 12.6 | 0.525 | 0.933 | -9.62 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Trend (/100) → 12 | 105.12 | 48.2% | 0.756 | 8.35 | 12.59 | 0.607 | 0.917 | -9.65 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 112.11 | 52.1% | 0.768 | 7.79 | 14.39 | 0.624 | 0.933 | -9.66 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Divergence (/100) → 12 | 29.66 | 57.6% | 0.188 | 5.98 | 4.96 | 0.216 | 0.159 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: BOS → 3 | 112.49 | 49.6% | 0.821 | 8.35 | 13.47 | 0.603 | 1.085 | -8.91 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + SL tối đa (% Entry) → 0.425 + % chốt ở TP1 → 0.307 | 93.7 | 47.7% | 0.605 | 9.26 | 10.12 | 0.569 | 0.646 | -10.47 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: POC anchored → 2 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 61.87 | 45% | 0.48 | 10.61 | 5.83 | 0.392 | 0.58 | -4.85 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 20.15 | 39.3% | 0.36 | 8.93 | 2.26 | 0.091 | 0.694 | -3.77 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 33.93 | 57.7% | 0.218 | 5.86 | 5.79 | 0.278 | 0.159 | -10.94 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Trọng số phần Entry (/100) → 28 + Trọng số phần R:R (/100) → 28 | 111.64 | 51.7% | 0.77 | 7.52 | 14.85 | 0.624 | 0.94 | -9.66 |  |

### Vòng 428 — ngẫu nhiên nhiều thông số · mốc: tổng 116.78R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 15.78

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + R:R tối thiểu riêng khung 1D → 2 | 103.33 | 48.2% | 0.615 | 8.77 | 11.78 | 0.607 | 0.622 | -8.96 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: BOS → 1 | 116.87 | 53.1% | 0.806 | 7.4 | 15.79 | 0.626 | 1.016 | -9.67 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 21.8 | 63.2% | 0.229 | 5.24 | 4.16 | 0.236 | 0.222 | -6.86 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Mức MACD → 1.13 + % chốt ở TP1 → 0.307 | 109.55 | 50.3% | 0.745 | 7.98 | 13.73 | 0.543 | 0.98 | -9.5 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.84 | 58.1% | 0.193 | 5.74 | 5.2 | 0.228 | 0.159 | -11.38 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Trọng số phần SL (/100) → 7 + Đệm SL riêng khung 1D (ATR) → 0.3 | 109.74 | 46.9% | 0.677 | 10.17 | 10.79 | 0.638 | 0.715 | -6.35 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 58.08 | 40.7% | 0.328 | 14.43 | 4.02 | 0.385 | 0.268 | -12.85 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 98.71 | 51% | 0.663 | 8.43 | 11.71 | 0.606 | 0.728 | -8.11 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Ngưỡng điểm vào kèo → 77 + Xác nhận khung nhỏ (A2) → W | 84.64 | 38.9% | 0.347 | 15.62 | 5.42 | 0.318 | 0.37 | -6.57 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Số TP tối đa → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 85.43 | 50.4% | 0.73 | 8.08 | 10.57 | 0.533 | 0.968 | -16.13 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: EMA 200 → 3 + Điểm vùng: EMA 21 → 1.13 | 73.94 | 44.9% | 0.468 | 9.74 | 7.59 | 0.446 | 0.49 | -12.34 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 116.08 | 51.7% | 0.801 | 7.66 | 15.15 | 0.675 | 0.943 | -9.66 |  |

### Vòng 427 — ngẫu nhiên nhiều thông số · mốc: tổng 116.78R, win 53.1%, rủi ro tụt vốn 7.17R, lời÷rủi ro 16.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: EMA 21 → 1.13 + Trọng số phần Elliott (/100) → 10 | 101.04 | 48.4% | 0.652 | 9.11 | 11.09 | 0.466 | 0.872 | -7.42 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: HVN anchored → 0.313 + Lệnh chờ hết hạn sau (nến) → 6 | 90.21 | 49.3% | 0.663 | 8.15 | 11.07 | 0.529 | 0.828 | -8.61 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Trọng số phần R:R (/100) → 33 | 115.84 | 52.4% | 0.788 | 7.62 | 15.2 | 0.614 | 0.99 | -8.34 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 128.52 | 45.8% | 0.571 | 10.15 | 12.66 | 0.634 | 0.51 | -15.36 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Xác nhận khung nhỏ (A2) → W + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm tối thiểu của vùng đặt SL → 4 | 76.71 | 36.8% | 0.317 | 17.06 | 4.5 | 0.271 | 0.36 | -4.84 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Trend (/100) → 12 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 97.72 | 48% | 0.66 | 8.67 | 11.27 | 0.537 | 0.79 | -11.89 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: HVN anchored → 0.313 + R:R tối thiểu riêng khung 1W → 2 | 100.4 | 49.3% | 0.697 | 8.18 | 12.27 | 0.558 | 0.836 | -12.09 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Biên mây Ichimoku → 1.05 | 123.39 | 45.4% | 0.571 | 10.39 | 11.88 | 0.587 | 0.555 | -8.48 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Break mây Ichimoku → 1 | 102.5 | 49% | 0.697 | 8.58 | 11.95 | 0.537 | 0.873 | -11.02 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Fib sóng 4 → 1.56 | 89.1 | 49% | 0.59 | 8.92 | 9.99 | 0.512 | 0.673 | -10.37 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: Mức MACD → 0.875 + R:R tối thiểu tới TP1 → 2.38 | 88.15 | 45.6% | 0.558 | 9.22 | 9.56 | 0.503 | 0.613 | -10.97 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 37.16 | 40.4% | 0.418 | 10.34 | 3.59 | 0.297 | 0.566 | -6.21 |  |

### Vòng 426 — ngẫu nhiên nhiều thông số · mốc: tổng 116.78R, win 53.1%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.13

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Fib sóng 4 → 1.56 | 102.32 | 49.7% | 0.687 | 8.24 | 12.42 | 0.586 | 0.797 | -9.68 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 81.62 | 45.7% | 0.498 | 10.15 | 8.04 | 0.367 | 0.625 | -9.83 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Momentum (/100) → 21 | 99.37 | 51% | 0.667 | 8.38 | 11.86 | 0.596 | 0.751 | -9.43 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Xác nhận khung nhỏ (A2) → W | 53.14 | 37.3% | 0.251 | 19.14 | 2.78 | 0.316 | 0.179 | -6.73 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 84.62 | 38.9% | 0.347 | 16.94 | 5 | 0.305 | 0.385 | -5.57 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Lệnh chờ hết hạn sau (nến) → 6 | 88.97 | 49.3% | 0.664 | 8.47 | 10.5 | 0.569 | 0.768 | -8.61 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + % chốt ở TP1 → 0.307 + Điểm vùng: Fib sóng 4 → 1.56 | 25.78 | 56.7% | 0.164 | 6.95 | 3.71 | 0.174 | 0.155 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 111.46 | 51.4% | 0.763 | 7.83 | 14.23 | 0.564 | 0.999 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 112.35 | 51% | 0.775 | 7.87 | 14.28 | 0.513 | 1.064 | -9.52 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 21.92 | 63.4% | 0.236 | 5.2 | 4.22 | 0.245 | 0.225 | -6.86 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 84.65 | 40.4% | 0.407 | 13.27 | 6.38 | 0.471 | 0.325 | -8.43 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Cổng Dow → CHẶT + Trọng số phần Divergence (/100) → 12 | 80.05 | 50.9% | 0.702 | 7.25 | 11.04 | 0.305 | 1.06 | -10.72 |  |

### Vòng 425 — ngẫu nhiên nhiều thông số · mốc: tổng 116.78R, win 53.1%, rủi ro tụt vốn 7.21R, lời÷rủi ro 16.20

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần SL (/100) → 7 | 29.84 | 58.1% | 0.193 | 5.85 | 5.1 | 0.228 | 0.159 | -11.38 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Break mây Ichimoku → 3 | 73.47 | 46.1% | 0.574 | 9.69 | 7.58 | 0.453 | 0.706 | -15.87 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Khung lớn phải tăng (trend ≥) → 0.375 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 63.59 | 44.4% | 0.589 | 9.63 | 6.6 | 0.393 | 0.825 | -6.08 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 61 | 44.9% | 0.48 | 10.33 | 5.91 | 0.391 | 0.58 | -4.85 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Lệnh chờ hết hạn sau (nến) → 6 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 87.74 | 48.5% | 0.645 | 8.8 | 9.97 | 0.521 | 0.798 | -5.26 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 94.04 | 47% | 0.631 | 9.6 | 9.8 | 0.475 | 0.838 | -9.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức MACD → 0.875 + Cộng thêm ngưỡng điểm khung 1W → -1 + R:R tối thiểu tới TP1 → 2.38 | 89.5 | 45.9% | 0.57 | 8.95 | 10 | 0.492 | 0.645 | -10.97 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + R:R tối thiểu riêng khung 4H → 2 | 111.11 | 41.8% | 0.357 | 12.54 | 8.86 | 0.327 | 0.384 | -11.02 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Khung lớn phải tăng (trend ≥) → 0.375 | 103.28 | 45.1% | 0.59 | 9.7 | 10.65 | 0.514 | 0.658 | -7.7 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + % chốt ở TP1 → 0.287 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 96 | 51.3% | 0.807 | 7.97 | 12.05 | 0.554 | 1.091 | -10.61 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần Elliott (/100) → 6 + Đệm SL riêng khung 1D (ATR) → 0.3 | 109.65 | 45.7% | 0.669 | 10.35 | 10.59 | 0.655 | 0.682 | -5.14 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 68.31 | 46.2% | 0.657 | 9.03 | 7.56 | 0.428 | 0.934 | -6.48 |  |

### Vòng 424 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.52R, lời÷rủi ro 15.10

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 80.97 | 48.4% | 0.643 | 8.35 | 9.7 | 0.492 | 0.819 | -10.13 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + % chốt ở TP1 → 0.287 + Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 | 110.59 | 40.7% | 0.512 | 14.23 | 7.77 | 0.603 | 0.437 | -14.17 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Cộng điểm phân kỳ dương ẩn → 2.63 | 113.57 | 52.8% | 0.789 | 7.52 | 15.1 | 0.624 | 0.983 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + R:R tối thiểu riêng khung 1D → 2 | 103.91 | 46.7% | 0.615 | 8.99 | 11.56 | 0.616 | 0.614 | -7.92 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 96.01 | 50% | 0.667 | 8.24 | 11.65 | 0.616 | 0.726 | -8.67 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1D → 4 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 163.54 | 39.2% | 0.558 | 17.7 | 9.24 | 0.398 | 0.717 | -11.23 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm tối thiểu của vùng đặt SL → 2 | 89.28 | 38.9% | 0.337 | 17.28 | 5.17 | 0.295 | 0.378 | -4.56 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 108.65 | 51.7% | 0.739 | 7.93 | 13.7 | 0.581 | 0.927 | -10.63 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Break mây Ichimoku → 1 | 113.8 | 42.9% | 0.376 | 11.08 | 10.27 | 0.354 | 0.394 | -9.76 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Divergence (/100) → 12 | 113.37 | 52.4% | 0.782 | 7.55 | 15.02 | 0.614 | 0.983 | -9.66 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 | 106.42 | 50% | 0.682 | 9.14 | 11.64 | 0.484 | 0.925 | -7.08 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + R:R tối thiểu riêng khung 1W → 2 | 105.43 | 51.4% | 0.712 | 7.86 | 13.41 | 0.621 | 0.809 | -10.7 |  |

### Vòng 423 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 122.83 | 50% | 0.798 | 8.35 | 14.71 | 0.767 | 0.835 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Cổng Dow → TẮT + % chốt ở TP1 → 0.287 | 119.75 | 42.3% | 0.562 | 12.27 | 9.76 | 0.469 | 0.658 | -14.58 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: MACD cắt lên Signal → 0.438 | 113.75 | 47.3% | 0.689 | 9.77 | 11.64 | 0.599 | 0.8 | -7.66 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 116.57 | 51.6% | 0.733 | 8.12 | 14.36 | 0.569 | 0.942 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: HVN anchored → 0.188 | 67.75 | 45.2% | 0.546 | 9.75 | 6.95 | 0.445 | 0.654 | -4.82 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Trọng số phần SL (/100) → 9 | 111.9 | 51.7% | 0.772 | 7.75 | 14.44 | 0.614 | 0.961 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Cộng điểm phân kỳ dương ẩn → 2.63 + R:R tối thiểu riêng khung 4H → 2 | 116.25 | 42.4% | 0.376 | 12.31 | 9.44 | 0.349 | 0.399 | -10.77 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Ngưỡng điểm vào kèo → 77 | 95 | 47.5% | 0.674 | 9.4 | 10.11 | 0.621 | 0.728 | -10.34 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 93.4 | 45.6% | 0.687 | 9.59 | 9.74 | 0.479 | 0.877 | -10 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Xác nhận khung nhỏ (A2) → W | 101.61 | 37.5% | 0.289 | 19.12 | 5.31 | 0.349 | 0.233 | 3.03 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 36.5 | 40.2% | 0.419 | 10.63 | 3.43 | 0.324 | 0.537 | -6.21 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 116.68 | 36.9% | 0.388 | 20.88 | 5.59 | 0.252 | 0.495 | -2.63 |  |

### Vòng 422 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.49R, lời÷rủi ro 15.16

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + % chốt ở TP1 → 0.287 + R:R tối thiểu riêng khung 4H → 2 + Xác nhận khung nhỏ (A2) → W | 27.46 | 32.5% | 0.082 | 32.59 | 0.84 | 0.124 | 0.046 | -6.79 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 105.43 | 51.4% | 0.712 | 7.87 | 13.4 | 0.621 | 0.809 | -10.7 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: Biên mây Ichimoku → 1.35 | 110.6 | 51.4% | 0.758 | 8.12 | 13.62 | 0.592 | 0.953 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Số TP tối đa → 2 | 101.8 | 50% | 0.67 | 9.01 | 11.3 | 0.516 | 0.859 | -7.08 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 97.17 | 51% | 0.661 | 8.23 | 11.81 | 0.616 | 0.715 | -9.42 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + R:R tối thiểu tới TP1 → 2.38 | 54.49 | 37.8% | 0.245 | 18.48 | 2.95 | 0.136 | 0.345 | -6.38 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 | 110.19 | 51.4% | 0.765 | 7.57 | 14.56 | 0.595 | 0.967 | -9.48 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Break mây Ichimoku → 3 + Cộng điểm phân kỳ dương ẩn → 2.63 | 79.07 | 44.9% | 0.538 | 10.39 | 7.61 | 0.422 | 0.672 | -4.83 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức RSI 30/70 → 1.13 | 112.49 | 49.6% | 0.821 | 8.36 | 13.46 | 0.603 | 1.085 | -8.91 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 100.29 | 49.3% | 0.696 | 8.32 | 12.05 | 0.456 | 0.973 | -9.34 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Cộng thêm ngưỡng điểm khung 1W → -1 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 109.13 | 51.4% | 0.769 | 7.8 | 13.99 | 0.578 | 0.994 | -10.95 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Coin phải mạnh hơn BTC trong N ngày → 14 | 90.62 | 49.6% | 0.749 | 8.03 | 11.29 | 0.589 | 0.941 | -16.15 |  |

### Vòng 421 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.52R, lời÷rủi ro 15.10

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 96.86 | 51% | 0.677 | 8.05 | 12.03 | 0.664 | 0.693 | -9.42 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: EMA 21 → 0.875 | 99.67 | 50.3% | 0.697 | 8.41 | 11.85 | 0.674 | 0.723 | -8.84 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + R:R tối thiểu riêng khung 1D → 2 | 102.93 | 46.7% | 0.609 | 9.47 | 10.87 | 0.616 | 0.602 | -10 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Xác nhận khung nhỏ (A2) → W | 82.46 | 38% | 0.337 | 17.14 | 4.81 | 0.281 | 0.388 | -4.56 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khung lớn phải tăng (trend ≥) → 0.425 | 93.41 | 50.3% | 0.653 | 8.38 | 11.15 | 0.577 | 0.744 | -9.5 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Elliott (/100) → 10 + Trọng số phần Entry (/100) → 28 | 69.4 | 46.2% | 0.667 | 8.68 | 8 | 0.473 | 0.903 | -6.48 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: HVN anchored → 0.313 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 21 → 0.875 | 111.6 | 51% | 0.77 | 7.83 | 14.25 | 0.652 | 0.903 | -9.66 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Xác nhận khung nhỏ (A2) → W | 84.42 | 38.6% | 0.339 | 16.97 | 4.97 | 0.307 | 0.368 | -4.56 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: HVN anchored → 0.313 | 72.9 | 50% | 0.608 | 8.44 | 8.64 | 0.639 | 0.569 | -15.89 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Ngưỡng điểm vào kèo → 74 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu tới TP1 → 2.38 | 53.59 | 40.3% | 0.415 | 11.71 | 4.58 | 0.409 | 0.423 | -10.39 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Divergence (/100) → 9 | 70.53 | 39.8% | 0.39 | 14 | 5.04 | 0.366 | 0.411 | -7.44 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 122.83 | 50% | 0.798 | 8.35 | 14.71 | 0.767 | 0.835 | -10.24 |  |
