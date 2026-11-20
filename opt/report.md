# Tối ưu tự động (chạy liên tục) — vòng 927

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 10779 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46.6% | 96.7R | 0.593 | 6.44R | 9.98R | 9.69 | 30 | 13.3% | -12.45R | -0.415 | 12.45R |
| **Tốt nhất** | 144 | 52.1% | 110.25R | 0.766 | 5.09R | 7.98R | 13.82 | 27 | 18.5% | -9.37R | -0.347 | 9.99R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 25 | 48% | 14.38R | 4 | 0% | -3.21R |
| 1W | 10 | 50% | 7.77R | 2 | 0% | -2.3R |
| 4H | 109 | 53.2% | 88.11R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46.6% | 96.7R | 9.98R | 9.69 | 30 | 13.3% | -12.45R |
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

### Vòng 927 — ngẫu nhiên nhiều thông số · mốc: tổng 110.25R, win 52.1%, rủi ro tụt vốn 7.98R, lời÷rủi ro 13.82

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 92.93 | 49% | 0.65 | 8.96 | 10.37 | 0.428 | 0.909 | -10.88 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần R:R (/100) → 33 | 109.05 | 51.4% | 0.747 | 8.11 | 13.45 | 0.572 | 0.947 | -8.05 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 75.8 | 43.4% | 0.457 | 11.03 | 6.87 | 0.395 | 0.518 | -7.68 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu riêng khung 1W → 2 | 90.29 | 48.7% | 0.579 | 9.75 | 9.26 | 0.527 | 0.639 | -5.22 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + % chốt ở TP1 → 0.287 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: EMA 200 → 1 | 100.23 | 42.9% | 0.525 | 11.03 | 9.09 | 0.554 | 0.494 | -0.58 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Trọng số phần Trend (/100) → 12 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 100.87 | 46.3% | 0.742 | 8.97 | 11.25 | 0.561 | 0.951 | -9.61 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 89.49 | 47.6% | 0.617 | 9.01 | 9.93 | 0.435 | 0.818 | -11.41 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: BOS → 3 + Điểm vùng: EMA 200 → 3 | 97.79 | 48.6% | 0.689 | 8.72 | 11.21 | 0.481 | 0.915 | -10.36 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm tối thiểu của vùng đặt SL → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + % chốt ở TP1 → 0.287 | 115.8 | 45.2% | 0.616 | 10.1 | 11.47 | 0.713 | 0.517 | -7.89 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Cộng thêm ngưỡng điểm khung 4H → -1 + Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1W (ATR) → 0.3 | 79.34 | 36.1% | 0.35 | 18.12 | 4.38 | 0.303 | 0.389 | -4.79 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 106.73 | 50.7% | 0.731 | 8.68 | 12.3 | 0.53 | 0.968 | -8.05 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 109.24 | 51.7% | 0.753 | 8.12 | 13.45 | 0.572 | 0.964 | -9.48 |  |

### Vòng 926 — ngẫu nhiên nhiều thông số · mốc: tổng 117.32R, win 53.1%, rủi ro tụt vốn 7.5R, lời÷rủi ro 15.64

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cổng Dow → TẮT | 125.97 | 43.8% | 0.58 | 12.1 | 10.41 | 0.586 | 0.575 | -20.28 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần Elliott (/100) → 10 + Trọng số phần Entry (/100) → 28 | 117.12 | 52.7% | 0.802 | 7.58 | 15.45 | 0.625 | 1.006 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Fib sóng 4 → 1.56 | 108.4 | 51.4% | 0.774 | 7.64 | 14.19 | 0.527 | 1.06 | -9.96 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Trọng số phần Elliott (/100) → 6 | 116.87 | 52.7% | 0.8 | 7.49 | 15.6 | 0.635 | 0.985 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Cổng Dow → TẮT + Điểm vùng: HVN anchored → 0.313 + Khung lớn phải tăng (trend ≥) → 0.425 | 128.78 | 44.3% | 0.634 | 11.08 | 11.62 | 0.523 | 0.749 | -16.33 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: MACD cắt lên Signal → 0.563 | 106.8 | 52.1% | 0.731 | 7.93 | 13.47 | 0.59 | 0.885 | -10.75 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: POC volume profile cố định → 0.813 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 122.07 | 50.3% | 0.808 | 8.21 | 14.87 | 0.811 | 0.806 | -9.48 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 107.02 | 50.3% | 0.718 | 8.44 | 12.68 | 0.463 | 0.998 | -9.79 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: BOS → 1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 25.86 | 49.5% | 0.085 | 8.82 | 2.93 | 0.113 | 0.063 | -12.54 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Fib sóng 4 → 0.938 | 114.26 | 52.1% | 0.783 | 7.8 | 14.65 | 0.589 | 1.004 | -9.92 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: EMA 200 → 3 | 84.3 | 34.3% | 0.396 | 19.95 | 4.23 | 0.193 | 0.608 | -11.75 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Break mây Ichimoku → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 50 → 0.75 | 63.06 | 45.8% | 0.534 | 10.13 | 6.23 | 0.351 | 0.706 | -6.52 |  |

### Vòng 925 — ngẫu nhiên nhiều thông số · mốc: tổng 112.86R, win 51.8%, rủi ro tụt vốn 8.24R, lời÷rủi ro 13.70

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 111.88 | 51.4% | 0.788 | 7.95 | 14.07 | 0.618 | 0.973 | -6.6 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 119.17 | 49.3% | 0.784 | 8.65 | 13.78 | 0.753 | 0.821 | -9.17 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + SL tối đa (% Entry) → 0.425 + Xác nhận khung nhỏ (A2) → W | 95.01 | 37.7% | 0.377 | 16.68 | 5.7 | 0.328 | 0.419 | -1.28 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.688 | 150.06 | 38.7% | 0.548 | 17.68 | 8.49 | 0.306 | 0.779 | -8.16 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: EMA 200 → 1 | 100.78 | 45.5% | 0.603 | 9.51 | 10.6 | 0.527 | 0.679 | -3.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: HVN cố định → 0.438 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 113.2 | 48.5% | 0.832 | 8.56 | 13.22 | 0.696 | 0.982 | -6.87 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu riêng khung 4H → 2 | 89.12 | 38.7% | 0.314 | 14.9 | 5.98 | 0.301 | 0.325 | -15.11 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + R:R tối thiểu riêng khung 1D → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Xác nhận khung nhỏ (A2) → W | 71.97 | 35.8% | 0.293 | 19.13 | 3.76 | 0.334 | 0.249 | -4.08 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: HVN anchored → 0.188 | 73.4 | 44.3% | 0.692 | 9.2 | 7.98 | 0.553 | 0.861 | -1.99 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + SL tối đa (% Entry) → 0.425 + Trọng số phần R:R (/100) → 28 + Trọng số phần Elliott (/100) → 10 | 111.33 | 50% | 0.784 | 8.27 | 13.46 | 0.63 | 0.947 | -7.62 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần Entry (/100) → 33 + Điểm vùng: HVN anchored → 0.188 + Cộng điểm phân kỳ dương ẩn → 3 | 101.17 | 49.6% | 0.718 | 8.55 | 11.83 | 0.604 | 0.833 | -8.45 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần SL (/100) → 7 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 118.06 | 48.5% | 0.707 | 8.75 | 13.49 | 0.606 | 0.822 | -10.25 |  |

### Vòng 924 — ngẫu nhiên nhiều thông số · mốc: tổng 117.32R, win 53.1%, rủi ro tụt vốn 7.41R, lời÷rủi ro 15.83

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: EMA 21 → 0.875 + Coin phải mạnh hơn BTC trong N ngày → 14 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 65.64 | 47.3% | 0.706 | 8.79 | 7.47 | 0.53 | 0.901 | -11.92 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: EMA 200 → 1 | 117.61 | 51.9% | 0.754 | 8.26 | 14.24 | 0.626 | 0.912 | -5.1 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Mức MACD → 0.875 | 112.1 | 49.4% | 0.728 | 8.64 | 12.97 | 0.692 | 0.769 | -9.21 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Cổng Dow → CHẶT | 82.31 | 51.8% | 0.735 | 7.34 | 11.21 | 0.333 | 1.083 | -12.01 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 111.79 | 50.3% | 0.782 | 7.66 | 14.59 | 0.627 | 0.947 | -9.74 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm tối thiểu của vùng đặt SL → 2 | 109.92 | 51.7% | 0.748 | 8.08 | 13.6 | 0.64 | 0.863 | -9.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: BOS → 1 | 115.95 | 47.6% | 0.69 | 10.37 | 11.18 | 0.656 | 0.722 | -5.32 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 116.57 | 52.7% | 0.798 | 7.64 | 15.26 | 0.635 | 0.98 | -8.61 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Biên mây Ichimoku → 1.05 | 109.08 | 50.3% | 0.669 | 8.66 | 12.6 | 0.55 | 0.799 | -7.06 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Trọng số phần Entry (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 100.63 | 44.4% | 0.559 | 12.15 | 8.28 | 0.553 | 0.565 | -3.43 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: HVN cố định → 0.563 | 102.39 | 49.6% | 0.726 | 8.28 | 12.37 | 0.499 | 0.977 | -10.48 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Ngưỡng điểm vào kèo → 74 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 102.14 | 49.3% | 0.7 | 8.11 | 12.59 | 0.471 | 0.954 | -10.48 |  |

### Vòng 923 — ngẫu nhiên nhiều thông số · mốc: tổng 117.32R, win 53.1%, rủi ro tụt vốn 7.6R, lời÷rủi ro 15.44

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: EMA 21 → 1.13 | 110.35 | 51% | 0.741 | 7.93 | 13.92 | 0.599 | 0.901 | -10.26 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Cổng Dow → CHẶT + Xác nhận khung nhỏ (A2) → W | 82.93 | 39.9% | 0.409 | 14.64 | 5.66 | 0.33 | 0.474 | -10.46 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Biên mây Ichimoku → 1.35 | 98.19 | 50.3% | 0.659 | 8.66 | 11.34 | 0.615 | 0.708 | -8.7 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: POC anchored → 4 | 117.17 | 51.7% | 0.776 | 7.99 | 14.66 | 0.607 | 0.947 | -4.74 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 104.47 | 47% | 0.692 | 9.24 | 11.31 | 0.551 | 0.864 | -10.76 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần R:R (/100) → 33 | 73.58 | 47% | 0.736 | 8.4 | 8.76 | 0.467 | 1.005 | -13.28 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Khung lớn phải tăng (trend ≥) → 0.375 | 108.29 | 48.9% | 0.79 | 8.63 | 12.55 | 0.582 | 1.029 | -9.17 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Đệm SL riêng khung 4H (ATR) → 0.3 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: HVN cố định → 0.438 | 161.03 | 39.5% | 0.521 | 17.64 | 9.13 | 0.351 | 0.696 | -16.71 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: MACD cắt lên Signal → 0.563 | 96.38 | 50.7% | 0.719 | 8.14 | 11.84 | 0.584 | 0.876 | -9.56 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Trọng số phần Momentum (/100) → 21 + % chốt ở TP1 → 0.307 | 82.98 | 52.3% | 0.748 | 7 | 11.85 | 0.325 | 1.107 | -12.01 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 105.3 | 44.7% | 0.619 | 12.23 | 8.61 | 0.666 | 0.575 | -3.16 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần Entry (/100) → 33 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 72.19 | 44.7% | 0.633 | 9.98 | 7.23 | 0.447 | 0.841 | -5.8 |  |

### Vòng 922 — ngẫu nhiên nhiều thông số · mốc: tổng 117.32R, win 53.1%, rủi ro tụt vốn 7.6R, lời÷rủi ro 15.44

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: MACD cắt lên Signal → 0.563 | 114.55 | 52.1% | 0.785 | 7.87 | 14.56 | 0.592 | 1.006 | -9.92 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Xác nhận khung nhỏ (A2) → W + Cổng Dow → CHẶT | 78.75 | 39.4% | 0.388 | 15.52 | 5.07 | 0.329 | 0.436 | -10.65 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 25.71 | 40.2% | 0.314 | 9.59 | 2.68 | 0.462 | 0.158 | -10.33 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Mức MACD → 0.875 | 91.57 | 50% | 0.704 | 8.19 | 11.18 | 0.591 | 0.829 | -9.56 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Cộng thêm ngưỡng điểm khung 4H → -1 + Cộng thêm ngưỡng điểm khung 1W → -1 | 116.2 | 52.4% | 0.79 | 7.8 | 14.9 | 0.619 | 0.985 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Số TP tối đa → 2 | 118.09 | 53.1% | 0.814 | 7.6 | 15.54 | 0.64 | 1.012 | -9.92 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: BOS → 3 | 27.84 | 51.6% | 0.109 | 14.8 | 1.88 | 0.085 | 0.13 | -16.77 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: BOS → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 112.77 | 50% | 0.817 | 8.22 | 13.72 | 0.623 | 1.049 | -9.18 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: POC anchored → 4 + Trọng số phần Momentum (/100) → 21 | 111.48 | 51.3% | 0.724 | 8.44 | 13.21 | 0.607 | 0.838 | -4.74 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Trend (/100) → 12 + Điểm vùng: EMA 50 → 1.13 | 83.57 | 48.7% | 0.727 | 8.36 | 10 | 0.544 | 0.94 | -15.37 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cổng Dow → TẮT + R:R tối thiểu riêng khung 4H → 2 | 101.13 | 35.1% | 0.241 | 20.53 | 4.93 | 0.29 | 0.194 | -24.77 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần Trend (/100) → 12 | 98.42 | 44.4% | 0.547 | 10.32 | 9.54 | 0.529 | 0.564 | -5.32 |  |

### Vòng 921 — ngẫu nhiên nhiều thông số · mốc: tổng 117.32R, win 53.1%, rủi ro tụt vốn 7.6R, lời÷rủi ro 15.44

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Lệnh chờ hết hạn sau (nến) → 8 | 107.49 | 48.3% | 0.625 | 9.57 | 11.23 | 0.552 | 0.703 | -9.94 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 74.74 | 46.2% | 0.575 | 9.4 | 7.95 | 0.443 | 0.72 | -10.25 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: EMA 200 → 3 | 120.65 | 43.9% | 0.525 | 11.54 | 10.45 | 0.579 | 0.467 | -13.28 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 88.98 | 49% | 0.567 | 9.38 | 9.49 | 0.568 | 0.566 | -12.35 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 97.55 | 47.3% | 0.659 | 9.56 | 10.2 | 0.517 | 0.801 | -5.87 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Fib sóng 4 → 0.938 | 91.3 | 49% | 0.621 | 9.11 | 10.02 | 0.608 | 0.635 | -10.07 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: MACD cắt lên Signal → 0.438 | 105.29 | 48.4% | 0.671 | 9.62 | 10.94 | 0.444 | 0.939 | -7.34 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Cộng thêm ngưỡng điểm khung 1D → 5 | 111.01 | 51% | 0.745 | 8.17 | 13.59 | 0.566 | 0.953 | -10.89 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Mức MACD → 0.875 + Trọng số phần R:R (/100) → 28 | 112.64 | 50.3% | 0.766 | 7.96 | 14.15 | 0.658 | 0.873 | -8.97 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần Trend (/100) → 12 | 103.49 | 49% | 0.714 | 8.58 | 12.06 | 0.559 | 0.894 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: HVN cố định → 0.563 | 117.32 | 53.1% | 0.809 | 7.6 | 15.44 | 0.635 | 1.006 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: BOS → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 | 114.5 | 47.1% | 0.674 | 10.49 | 10.92 | 0.656 | 0.69 | -5.32 |  |

### Vòng 920 — ngẫu nhiên nhiều thông số · mốc: tổng 117.32R, win 53.1%, rủi ro tụt vốn 7.51R, lời÷rủi ro 15.62

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 24.91 | 57.5% | 0.163 | 6.5 | 3.83 | 0.171 | 0.155 | -9.32 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: EMA 50 → 0.75 + Đệm SL riêng khung 1W (ATR) → 0.3 | 96.35 | 47.3% | 0.651 | 9.38 | 10.27 | 0.475 | 0.822 | -10.69 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 75.1 | 47.2% | 0.695 | 8.88 | 8.46 | 0.474 | 0.943 | -5.45 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + R:R tối thiểu riêng khung 1D → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 110.57 | 46.6% | 0.628 | 9.07 | 12.19 | 0.587 | 0.667 | -8.18 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + % chốt ở TP1 → 0.287 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: BOS → 1 | 117.17 | 42.8% | 0.604 | 12.33 | 9.5 | 0.566 | 0.646 | -17.21 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 115.2 | 47.3% | 0.682 | 10.36 | 11.12 | 0.656 | 0.705 | -2.99 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: MACD cắt lên Signal → 0.563 + R:R tối thiểu riêng khung 4H → 2 | 118.06 | 41.5% | 0.38 | 12.18 | 9.69 | 0.337 | 0.415 | -7.41 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần R:R (/100) → 28 + Điểm vùng: MACD cắt lên Signal → 0.563 | 138.6 | 35.8% | 0.473 | 20.16 | 6.88 | 0.303 | 0.649 | -10.13 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Đệm SL riêng khung 4H (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 85.46 | 34.5% | 0.378 | 21.06 | 4.06 | 0.227 | 0.537 | -9.4 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 19.86 | 56.6% | 0.114 | 8.58 | 2.31 | 0.242 | 0.003 | -8.68 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 104.76 | 49.7% | 0.713 | 8.59 | 12.2 | 0.555 | 0.896 | -9.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + % chốt ở TP1 → 0.307 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + R:R tối thiểu tới TP1 → 2.38 | 66.35 | 33.1% | 0.241 | 26.04 | 2.55 | 0.195 | 0.288 | -12.82 |  |

### Vòng 919 — ngẫu nhiên nhiều thông số · mốc: tổng 117.32R, win 53.1%, rủi ro tụt vốn 7.59R, lời÷rủi ro 15.46

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần SL (/100) → 7 | 115.02 | 48.1% | 0.747 | 8.97 | 12.82 | 0.859 | 0.605 | -9.84 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Mức RSI 30/70 → 1.13 + Cộng điểm phân kỳ dương ẩn → 2.25 + Trọng số phần Entry (/100) → 28 | 117.12 | 52.7% | 0.802 | 7.57 | 15.47 | 0.625 | 1.006 | -9.92 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Biên mây Ichimoku → 1.35 + Cộng điểm phân kỳ dương ẩn → 2.25 | 78.2 | 44.9% | 0.468 | 10.73 | 7.29 | 0.412 | 0.521 | -7.07 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 121.39 | 49.7% | 0.793 | 8.19 | 14.82 | 0.785 | 0.803 | -10.5 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN cố định → 0.438 + Trọng số phần SL (/100) → 9 + Lệnh chờ hết hạn sau (nến) → 6 | 97.93 | 39.5% | 0.333 | 13.59 | 7.21 | 0.284 | 0.375 | -9.08 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 100.85 | 47.9% | 0.691 | 8.67 | 11.63 | 0.564 | 0.833 | -12.45 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: EMA 21 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 110.6 | 48.7% | 0.709 | 8.62 | 12.83 | 0.578 | 0.854 | -11.3 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Số TP tối đa → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 87.6 | 38.3% | 0.294 | 14.84 | 5.9 | 0.267 | 0.319 | -15.68 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Ngưỡng điểm vào kèo → 77 | 66.77 | 36.1% | 0.281 | 19.89 | 3.36 | 0.287 | 0.275 | -6.03 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + R:R tối thiểu riêng khung 1W → 2 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Mức MACD → 0.875 | 102.43 | 50.7% | 0.702 | 8.17 | 12.54 | 0.611 | 0.787 | -9.67 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 103.59 | 47.7% | 0.589 | 9.11 | 11.37 | 0.625 | 0.555 | -7.96 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 109.18 | 50% | 0.682 | 8.94 | 12.21 | 0.544 | 0.852 | -9.92 |  |

### Vòng 918 — ngẫu nhiên nhiều thông số · mốc: tổng 117.32R, win 53.1%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.77

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Momentum (/100) → 25 | 101.19 | 50.7% | 0.703 | 8.41 | 12.03 | 0.64 | 0.771 | -9.14 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: EMA 200 → 1 | 115.71 | 51.6% | 0.737 | 8.4 | 13.77 | 0.607 | 0.899 | -4.93 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm tối thiểu của vùng đặt SL → 4 | 115.98 | 50.6% | 0.725 | 8.5 | 13.64 | 0.585 | 0.883 | -8.63 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: BOS → 1 + Ngưỡng điểm vào kèo → 74 | 72.19 | 44.4% | 0.451 | 10.67 | 6.77 | 0.339 | 0.566 | -12.24 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: MACD cắt lên Signal → 0.563 | 62.53 | 41% | 0.534 | 11.69 | 5.35 | 0.344 | 0.692 | -3.71 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: HVN cố định → 0.563 + Trọng số phần Elliott (/100) → 6 | 94.35 | 46.7% | 0.689 | 9.38 | 10.06 | 0.437 | 0.903 | -9.38 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần SL (/100) → 9 + Điểm vùng: HVN anchored → 0.188 + Số TP tối đa → 2 | 112.3 | 49.3% | 0.814 | 8.15 | 13.78 | 0.626 | 1.037 | -9.17 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Lệnh chờ hết hạn sau (nến) → 8 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 107.5 | 45.9% | 0.587 | 11.2 | 9.6 | 0.57 | 0.603 | -4.58 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: BOS → 3 | 98.66 | 51.3% | 0.658 | 8.61 | 11.46 | 0.621 | 0.696 | -4.54 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 104.76 | 49.7% | 0.713 | 8.56 | 12.24 | 0.555 | 0.896 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 68.02 | 47.3% | 0.618 | 9 | 7.56 | 0.474 | 0.774 | -6.28 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Cộng điểm phân kỳ dương ẩn → 3 | 82.55 | 51.8% | 0.737 | 7.15 | 11.55 | 0.325 | 1.082 | -12.01 |  |
