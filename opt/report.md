# Tối ưu tự động (chạy liên tục) — vòng 872

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 10119 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 94.27R | 0.578 | 5.7R | 9.63R | 9.79 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 145 | 53.1% | 118.93R | 0.82 | 5.09R | 7.31R | 16.27 | 28 | 17.9% | -9.92R | -0.354 | 10.54R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.77R | 2 | 0% | -2.3R |
| 4H | 107 | 54.2% | 91.73R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 94.27R | 9.63R | 9.79 | 31 | 12.9% | -13R |
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

### Vòng 867 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.31R, lời÷rủi ro 16.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 200 → 3 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: BOS → 1 | 24.71 | 57.4% | 0.167 | 6.29 | 3.93 | 0.168 | 0.166 | -10.04 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: EMA 21 → 1.13 | 113.5 | 52.1% | 0.777 | 7.52 | 15.09 | 0.628 | 0.944 | -10.26 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cổng Dow → CHẶT | 59.27 | 51.2% | 0.723 | 6.82 | 8.69 | 0.283 | 1.122 | -6.88 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Lệnh chờ hết hạn sau (nến) → 8 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 111.74 | 50.3% | 0.74 | 7.78 | 14.36 | 0.542 | 0.969 | -11.29 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: BOS → 1 | 117.4 | 52.4% | 0.821 | 7.55 | 15.55 | 0.652 | 1.008 | -9.92 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 38.21 | 40.9% | 0.434 | 10.02 | 3.81 | 0.372 | 0.509 | -7.55 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 118.62 | 41.2% | 0.379 | 12.18 | 9.74 | 0.337 | 0.413 | -8.93 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + % chốt ở TP1 → 0.287 + Lệnh chờ hết hạn sau (nến) → 8 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 81.49 | 47.9% | 0.582 | 9.64 | 8.45 | 0.39 | 0.804 | -11.49 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 122.82 | 50.3% | 0.763 | 8.3 | 14.8 | 0.721 | 0.813 | -10.5 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Khung lớn phải tăng (trend ≥) → 0.425 | 115.77 | 40.7% | 0.383 | 12.16 | 9.52 | 0.32 | 0.437 | -7.05 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Khung lớn phải tăng (trend ≥) → 0.425 | 113.94 | 51.8% | 0.82 | 7.37 | 15.46 | 0.6 | 1.07 | -9.96 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 43.03 | 44.9% | 0.552 | 8.66 | 4.97 | 0.434 | 0.704 | -6.5 |  |

### Vòng 866 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.16

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Đệm SL riêng khung 1D (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Trọng số phần R:R (/100) → 33 | 108.79 | 45.6% | 0.598 | 11.1 | 9.8 | 0.587 | 0.607 | -4.58 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 118.47 | 52.7% | 0.811 | 7.41 | 15.99 | 0.635 | 1.008 | -9.92 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Đệm SL riêng khung 4H (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Số TP tối đa → 2 | 58.6 | 32.5% | 0.28 | 24.34 | 2.41 | 0.112 | 0.46 | -5.22 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: POC anchored → 4 | 116.89 | 51.3% | 0.769 | 7.87 | 14.85 | 0.597 | 0.941 | -4.74 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trọng số phần R:R (/100) → 28 | 115.3 | 51% | 0.784 | 7.56 | 15.25 | 0.64 | 0.938 | -9.92 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 76.24 | 47.2% | 0.706 | 8.22 | 9.27 | 0.465 | 0.975 | -5.56 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu riêng khung 1W → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 80.54 | 45.5% | 0.666 | 9.79 | 8.23 | 0.458 | 0.891 | -5.49 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 72.58 | 45.7% | 0.563 | 10.25 | 7.08 | 0.484 | 0.648 | -16.88 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Khung lớn phải tăng (trend ≥) → 0.425 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 116.48 | 52.9% | 0.832 | 7.24 | 16.09 | 0.606 | 1.092 | -9.95 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 113.3 | 53.1% | 0.771 | 7.96 | 14.23 | 0.635 | 0.92 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: MACD cắt lên Signal → 0.563 | 117.18 | 52.8% | 0.814 | 7.35 | 15.94 | 0.621 | 1.03 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần Momentum (/100) → 21 | 110.43 | 50% | 0.708 | 8.86 | 12.46 | 0.491 | 0.961 | -7.34 |  |

### Vòng 865 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.07

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần R:R (/100) → 33 + Điểm vùng: HVN cố định → 0.563 | 117.46 | 52.4% | 0.799 | 7.51 | 15.64 | 0.635 | 0.979 | -9.92 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.438 | 83.17 | 45.7% | 0.645 | 10.38 | 8.01 | 0.407 | 0.909 | -13.53 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Lệnh chờ hết hạn sau (nến) → 8 | 120.69 | 52.2% | 0.769 | 7.64 | 15.8 | 0.628 | 0.93 | -11.51 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trọng số phần Trend (/100) → 19 | 104.62 | 50.7% | 0.707 | 8.14 | 12.85 | 0.594 | 0.819 | -11.92 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 111.87 | 50% | 0.788 | 7.55 | 14.82 | 0.627 | 0.958 | -11.76 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 | 113.17 | 43.4% | 0.577 | 11.84 | 9.56 | 0.578 | 0.577 | -5.54 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Trọng số phần Elliott (/100) → 10 | 114.44 | 51% | 0.789 | 7.49 | 15.28 | 0.596 | 1.008 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Cộng thêm ngưỡng điểm khung 4H → 2 | 110.58 | 50.3% | 0.773 | 7.77 | 14.23 | 0.607 | 0.962 | -8.9 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: HVN cố định → 0.438 + R:R tối thiểu riêng khung 1D → 2 | 108.69 | 46.8% | 0.636 | 9.05 | 12.01 | 0.598 | 0.671 | -8.59 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Momentum (/100) → 21 | 116.56 | 52.1% | 0.798 | 7.3 | 15.97 | 0.642 | 0.968 | -8.63 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Break mây Ichimoku → 3 | 110.1 | 49.7% | 0.675 | 9.04 | 12.18 | 0.543 | 0.823 | -9.77 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL riêng khung 4H (ATR) → 0.3 | 147.51 | 38.9% | 0.521 | 17.33 | 8.51 | 0.375 | 0.668 | -13.63 |  |

### Vòng 864 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.07

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 100.4 | 50.7% | 0.688 | 8.33 | 12.05 | 0.621 | 0.756 | -7.85 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trọng số phần Entry (/100) → 28 | 118.63 | 51.7% | 0.786 | 7.82 | 15.17 | 0.604 | 0.985 | -9.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Entry (/100) → 28 | 94.09 | 35.3% | 0.329 | 22.54 | 4.17 | 0.185 | 0.463 | -10.34 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 200 → 3 | 96.09 | 43.5% | 0.597 | 11.28 | 8.52 | 0.61 | 0.586 | -6.63 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: POC anchored → 2 | 103.03 | 49.7% | 0.673 | 8.5 | 12.12 | 0.527 | 0.83 | -10.73 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: POC anchored → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 88.13 | 43.2% | 0.544 | 10.68 | 8.25 | 0.415 | 0.683 | -9.89 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 139.7 | 37.2% | 0.469 | 19.21 | 7.27 | 0.318 | 0.628 | -11.45 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Cộng thêm ngưỡng điểm khung 1D → 5 | 118.73 | 52.7% | 0.813 | 7.14 | 16.63 | 0.625 | 1.03 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Khung lớn phải tăng (trend ≥) → 0.425 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 101.61 | 48.6% | 0.726 | 8.52 | 11.93 | 0.525 | 0.972 | -8.13 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: POC volume profile cố định → 0.688 + Ngưỡng điểm vào kèo → 74 | 117.61 | 52% | 0.795 | 7.47 | 15.74 | 0.608 | 1.008 | -9.92 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + R:R tối thiểu riêng khung 1D → 2 | 110.03 | 46.6% | 0.632 | 8.98 | 12.25 | 0.606 | 0.657 | -8.18 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cộng thêm ngưỡng điểm khung 1D → 3 | 129.89 | 45.4% | 0.567 | 10.46 | 12.42 | 0.593 | 0.54 | -11.71 |  |

### Vòng 863 — ngẫu nhiên nhiều thông số · mốc: tổng 114.47R, win 51.8%, rủi ro tụt vốn 7.75R, lời÷rủi ro 14.77

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Break mây Ichimoku → 1 | 67.52 | 43.2% | 0.608 | 9.54 | 7.08 | 0.382 | 0.855 | -5.05 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1W → 2 | 81.8 | 41.2% | 0.337 | 12.49 | 6.55 | 0.302 | 0.363 | -14.27 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Cộng thêm ngưỡng điểm khung 1D → 3 | 114.93 | 50.3% | 0.741 | 8.25 | 13.93 | 0.59 | 0.912 | -9.22 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 85.62 | 47.5% | 0.714 | 8.83 | 9.7 | 0.464 | 0.955 | -6.01 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Ngưỡng điểm vào kèo → 74 | 111.63 | 50% | 0.765 | 8.06 | 13.85 | 0.56 | 0.993 | -8.87 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + SL tối đa (% Entry) → 0.425 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 109.09 | 51.1% | 0.774 | 7.81 | 13.97 | 0.66 | 0.889 | -7.62 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Mức MACD → 0.875 + Trọng số phần Elliott (/100) → 10 | 109.59 | 51.1% | 0.788 | 8.03 | 13.65 | 0.581 | 1.012 | -7.62 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cộng thêm ngưỡng điểm khung 4H → 2 | 114.46 | 51.4% | 0.818 | 7.5 | 15.26 | 0.652 | 0.992 | -8.87 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 95.36 | 48.5% | 0.734 | 8.39 | 11.37 | 0.609 | 0.871 | -13.09 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: MACD cắt lên Signal → 0.438 + Cộng thêm ngưỡng điểm khung 1D → 5 | 106.78 | 48.7% | 0.702 | 9.51 | 11.23 | 0.47 | 0.968 | -5.04 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 112.01 | 51.8% | 0.806 | 7.6 | 14.74 | 0.592 | 1.029 | -7.62 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần R:R (/100) → 33 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 123.91 | 49.7% | 0.77 | 8.18 | 15.15 | 0.726 | 0.82 | -11.05 |  |
