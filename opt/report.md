# Tối ưu tự động (chạy liên tục) — vòng 247

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 2634 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.2% | 106.08R | 0.651 | 5.74R | 9.33R | 11.37 | 33 | 12.1% | -15.05R | -0.456 | 15.05R |
| **Tốt nhất** | 147 | 53.1% | 131.08R | 0.892 | 6.15R | 7.46R | 17.57 | 29 | 17.2% | -10.68R | -0.368 | 10.68R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 29 | 51.7% | 30.98R | 5 | 0% | -3.77R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 108 | 53.7% | 92.37R | 22 | 22.7% | -4.88R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.2% | 106.08R | 9.33R | 11.37 | 33 | 12.1% | -15.05R |
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

### Vòng 247 — ngẫu nhiên nhiều thông số · mốc: tổng 131.08R, win 53.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 17.57

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 126.34 | 52.6% | 0.831 | 8.05 | 15.69 | 0.716 | 0.96 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 119.5 | 51.4% | 0.807 | 7.48 | 15.98 | 0.685 | 0.952 | -12.42 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: HVN cố định → 0.438 | 130.51 | 51.2% | 0.816 | 8.47 | 15.41 | 0.643 | 1.026 | -10.68 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Cổng Dow → CHẶT + Trọng số phần Momentum (/100) → 21 + Lệnh chờ hết hạn sau (nến) → 8 | 91.27 | 50.4% | 0.719 | 7.83 | 11.66 | 0.414 | 1 | -13.34 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Mức MACD → 1.13 | 128.7 | 51.7% | 0.876 | 7.58 | 16.98 | 0.715 | 1.062 | -10.68 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 35.47 | 39.8% | 0.403 | 10.66 | 3.33 | 0.297 | 0.537 | -8.58 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Cộng thêm ngưỡng điểm khung 1W → 2 + SL tối đa (% Entry) → 0.35 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 126.16 | 45.2% | 0.553 | 10.89 | 11.58 | 0.633 | 0.476 | -11.16 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Break mây Ichimoku → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 124.86 | 48.3% | 0.701 | 9.29 | 13.44 | 0.709 | 0.692 | -11.01 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Lệnh chờ hết hạn sau (nến) → 8 | 127.09 | 51% | 0.81 | 7.95 | 15.99 | 0.688 | 0.953 | -12.27 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 109.18 | 46.7% | 0.654 | 8.92 | 12.24 | 0.652 | 0.656 | -12.96 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Divergence (/100) → 12 + Trọng số phần SL (/100) → 9 | 99.55 | 46.1% | 0.603 | 9.19 | 10.83 | 0.519 | 0.689 | -12 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + SL tối đa (% Entry) → 0.35 + Cộng thêm ngưỡng điểm khung 1W → -1 | 120.03 | 50.7% | 0.811 | 7.88 | 15.23 | 0.67 | 0.982 | -10.68 |  |

### Vòng 246 — ngẫu nhiên nhiều thông số · mốc: tổng 131.08R, win 53.1%, rủi ro tụt vốn 7.42R, lời÷rủi ro 17.67

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 117.64 | 51.4% | 0.817 | 7.56 | 15.56 | 0.624 | 1.027 | -10.68 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Lệnh chờ hết hạn sau (nến) → 8 | 125.94 | 50.3% | 0.782 | 8.14 | 15.47 | 0.644 | 0.953 | -12.27 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Fib sóng 4 → 1.56 | 85.38 | 47.7% | 0.798 | 8.47 | 10.08 | 0.623 | 1.013 | -7.51 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 30.07 | 55.4% | 0.163 | 6.58 | 4.57 | 0.194 | 0.139 | -9.75 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Trọng số phần Momentum (/100) → 21 | 129.12 | 52% | 0.872 | 7.58 | 17.03 | 0.704 | 1.071 | -10.68 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Break mây Ichimoku → 1 | 71.23 | 43.7% | 0.692 | 9.22 | 7.73 | 0.543 | 0.868 | -8.4 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần R:R (/100) → 33 | 82.5 | 45.7% | 0.503 | 10.02 | 8.23 | 0.323 | 0.674 | -11.24 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm tối thiểu của vùng đặt SL → 4 | 96.09 | 52.2% | 0.85 | 6.87 | 13.99 | 0.59 | 1.064 | -11.74 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 1W → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 82.55 | 36.3% | 0.329 | 17.77 | 4.65 | 0.302 | 0.356 | -7.15 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm tối thiểu của vùng đặt SL → 4 | 113.28 | 48.1% | 0.736 | 9.38 | 12.08 | 0.585 | 0.912 | -9.39 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Biên mây Ichimoku → 1.35 | 128.3 | 52% | 0.867 | 7.8 | 16.45 | 0.715 | 1.041 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 113 | 47.3% | 0.774 | 8.99 | 12.57 | 0.661 | 0.903 | -11 |  |

### Vòng 245 — ngẫu nhiên nhiều thông số · mốc: tổng 131.08R, win 53.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 17.57

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: HVN anchored → 0.188 | 131.08 | 53.1% | 0.892 | 7.46 | 17.57 | 0.737 | 1.071 | -10.68 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: HVN anchored → 0.188 + Ngưỡng điểm vào kèo → 74 | 125.66 | 49.1% | 0.79 | 8.52 | 14.75 | 0.745 | 0.843 | -11.26 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: EMA 200 → 3 + Trọng số phần SL (/100) → 7 | 120.33 | 50.7% | 0.824 | 7.88 | 15.27 | 0.629 | 1.042 | -10.65 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Coin phải mạnh hơn BTC trong N ngày → 14 | 68.86 | 44% | 0.594 | 9.7 | 7.1 | 0.38 | 0.857 | -16.65 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: BOS → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 | 114.99 | 51.3% | 0.757 | 8.46 | 13.59 | 0.717 | 0.802 | -10.45 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Mức MACD → 1.13 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Biên mây Ichimoku → 1.05 | 124.83 | 50.7% | 0.832 | 7.65 | 16.32 | 0.698 | 0.982 | -12.8 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Cộng điểm phân kỳ dương ẩn → 3.5 | 130.88 | 52.7% | 0.884 | 7.49 | 17.47 | 0.726 | 1.071 | -10.68 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + SL tối đa (% Entry) → 0.35 + Đệm SL riêng khung 4H (ATR) → 0.3 | 182.59 | 38.5% | 0.576 | 18.92 | 9.65 | 0.56 | 0.591 | -10.36 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.35 + SL tối đa (% Entry) → 0.35 | 119.02 | 50.3% | 0.799 | 8.3 | 14.34 | 0.67 | 0.952 | -11.26 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Cộng điểm phân kỳ dương ẩn → 2.63 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 50.45 | 56.6% | 0.189 | 11.04 | 4.57 | 0.068 | 0.289 | -16.16 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Trọng số phần Entry (/100) → 28 | 130.25 | 52.7% | 0.88 | 7.36 | 17.7 | 0.718 | 1.071 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + SL tối đa (% Entry) → 0.35 | 125.96 | 52.7% | 0.84 | 7.59 | 16.6 | 0.659 | 1.025 | -5.51 |  |

### Vòng 244 — ngẫu nhiên nhiều thông số · mốc: tổng 131.08R, win 53.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 17.57

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 74.13 | 46.6% | 0.557 | 9.65 | 7.68 | 0.405 | 0.726 | -5.84 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Lệnh chờ hết hạn sau (nến) → 8 | 109.02 | 49.1% | 0.677 | 8.99 | 12.13 | 0.655 | 0.703 | -12.04 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Đệm SL riêng khung 4H (ATR) → 0.3 | 184.03 | 39.5% | 0.611 | 17.39 | 10.58 | 0.502 | 0.725 | -14.39 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: HVN anchored → 0.313 | 113.82 | 49.7% | 0.707 | 8.77 | 12.98 | 0.553 | 0.893 | -11.83 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 97.3 | 47.3% | 0.583 | 10.29 | 9.46 | 0.502 | 0.675 | -8.9 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Số TP tối đa → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 99.34 | 46% | 0.715 | 10.44 | 9.52 | 0.807 | 0.623 | -16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Mức RSI 30/70 → 1.13 | 126.21 | 41.8% | 0.399 | 12.33 | 10.24 | 0.433 | 0.371 | -10.85 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 118.1 | 40.1% | 0.365 | 13.62 | 8.67 | 0.388 | 0.345 | -11.68 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Trọng số phần Entry (/100) → 33 + Điểm vùng: BOS → 3 + Trọng số phần Trend (/100) → 19 | 130.43 | 52.3% | 0.875 | 7.61 | 17.14 | 0.726 | 1.049 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 118.22 | 50.3% | 0.763 | 8.89 | 13.3 | 0.618 | 0.938 | -8.1 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Elliott (/100) → 10 | 35.48 | 39.8% | 0.403 | 10.66 | 3.33 | 0.297 | 0.537 | -6.21 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 4H → -1 | 181.76 | 39.3% | 0.6 | 17.49 | 10.39 | 0.491 | 0.713 | -14.39 |  |

### Vòng 243 — ngẫu nhiên nhiều thông số · mốc: tổng 131.08R, win 53.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 17.57

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Break mây Ichimoku → 1 | 121.3 | 50.7% | 0.809 | 7.96 | 15.24 | 0.683 | 0.948 | -12.04 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Break mây Ichimoku → 1 | 121.3 | 50.7% | 0.809 | 7.96 | 15.24 | 0.683 | 0.948 | -12.04 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Mức MACD → 1.13 | 121.23 | 51.7% | 0.814 | 7.63 | 15.89 | 0.702 | 0.94 | -12.8 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: POC anchored → 4 | 118.47 | 51.3% | 0.779 | 7.79 | 15.21 | 0.635 | 0.932 | -6.55 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 | 111.17 | 51.3% | 0.741 | 7.89 | 14.09 | 0.592 | 0.894 | -11.72 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Trend (/100) → 12 + Điểm vùng: POC anchored → 4 + Điểm vùng: Fib sóng 4 → 1.56 | 125.82 | 52.3% | 0.833 | 7.6 | 16.56 | 0.668 | 1.006 | -5.51 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Break mây Ichimoku → 3 + Cộng thêm ngưỡng điểm khung 1D → 4 + Cộng thêm ngưỡng điểm khung 1W → 2 | 67.7 | 45.6% | 0.594 | 9.72 | 6.97 | 0.34 | 0.866 | -7.53 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 77.63 | 45.7% | 0.826 | 8.88 | 8.74 | 0.606 | 1.086 | -8.51 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Lệnh chờ hết hạn sau (nến) → 8 + % chốt ở TP1 → 0.307 | 129.15 | 44.3% | 0.525 | 11.03 | 11.71 | 0.555 | 0.492 | -12.85 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần Entry (/100) → 28 | 131.91 | 51.2% | 0.814 | 8.32 | 15.85 | 0.645 | 1.026 | -10.68 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu tới TP1 → 2.38 + R:R tối thiểu riêng khung 4H → 2 | 99.72 | 41.3% | 0.335 | 13.45 | 7.41 | 0.319 | 0.35 | -11.4 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Momentum (/100) → 25 + Cộng thêm ngưỡng điểm khung 1W → 2 | 110.11 | 50.3% | 0.739 | 7.92 | 13.9 | 0.621 | 0.856 | -11.72 |  |

### Vòng 242 — ngẫu nhiên nhiều thông số · mốc: tổng 131.08R, win 53.1%, rủi ro tụt vốn 7.48R, lời÷rủi ro 17.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 109.4 | 37.7% | 0.362 | 19.95 | 5.48 | 0.436 | 0.296 | -28.01 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.813 + Cổng Dow → CHẶT | 89.71 | 51.8% | 0.801 | 7.44 | 12.06 | 0.342 | 1.171 | -12.8 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 129.98 | 49.7% | 0.839 | 8.12 | 16.01 | 0.729 | 0.965 | -14.33 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm vùng: Mức MACD → 1.13 + Cộng điểm phân kỳ dương ẩn → 3.5 | 128.51 | 51.4% | 0.868 | 7.71 | 16.67 | 0.704 | 1.062 | -10.68 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 128.45 | 50.7% | 0.856 | 8.06 | 15.94 | 0.645 | 1.091 | -9.21 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 35.48 | 39.8% | 0.403 | 10.87 | 3.26 | 0.297 | 0.537 | -6.21 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Trọng số phần R:R (/100) → 33 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib sóng 4 → 1.56 | 128.77 | 42.2% | 0.411 | 11.56 | 11.14 | 0.382 | 0.435 | -9.68 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 57.7 | 32.1% | 0.314 | 22.07 | 2.61 | 0.137 | 0.483 | 4.84 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: POC anchored → 2 | 95.12 | 48.4% | 0.743 | 8.79 | 10.82 | 0.601 | 0.885 | -11.89 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 128.32 | 52.8% | 0.904 | 7.41 | 17.32 | 0.724 | 1.111 | -10.72 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Ngưỡng điểm vào kèo → 74 + Trọng số phần Momentum (/100) → 25 + Coin phải mạnh hơn BTC trong N ngày → 14 | 100 | 50% | 0.82 | 8.08 | 12.38 | 0.684 | 0.98 | -17.15 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: HVN anchored → 0.188 + Điểm tối thiểu của vùng đặt SL → 2 | 122.86 | 52% | 0.83 | 8.01 | 15.34 | 0.705 | 0.966 | -10.68 |  |

### Vòng 241 — ghép cặp thay đổi suýt đạt · mốc: tổng 131.08R, win 53.1%, rủi ro tụt vốn 7.42R, lời÷rủi ro 17.67

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: MACD cắt lên Signal → 0.563 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 131.08 | 53.1% | 0.892 | 7.42 | 17.67 | 0.737 | 1.071 | -10.68 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 0.875 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 | 138.45 | 51.7% | 0.805 | 7.64 | 18.12 | 0.63 | 1.001 | -10.89 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 138.45 | 51.7% | 0.805 | 7.64 | 18.12 | 0.63 | 1.001 | -10.89 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 138.45 | 51.7% | 0.805 | 7.64 | 18.12 | 0.63 | 1.001 | -10.89 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 131.08 | 53.1% | 0.892 | 7.42 | 17.67 | 0.737 | 1.071 | -10.68 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 131.08 | 53.1% | 0.892 | 7.42 | 17.67 | 0.737 | 1.071 | -10.68 |  |

### Vòng 240 — ngẫu nhiên nhiều thông số · mốc: tổng 131.08R, win 53.1%, rủi ro tụt vốn 7.43R, lời÷rủi ro 17.64

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: POC volume profile cố định → 0.688 + Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm tối thiểu của vùng đặt SL → 2 | 124.94 | 52.3% | 0.827 | 7.97 | 15.68 | 0.737 | 0.926 | -10.68 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + SL tối đa (% Entry) → 0.425 + Điểm vùng: POC anchored → 4 + % chốt ở TP1 → 0.287 | 126.65 | 52.6% | 0.833 | 7.75 | 16.34 | 0.652 | 1.024 | -5.48 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 101.02 | 50.3% | 0.706 | 8.31 | 12.16 | 0.603 | 0.827 | -13.74 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: EMA 21 → 1.13 + Số TP tối đa → 2 | 69.04 | 45.8% | 0.645 | 8.86 | 7.79 | 0.423 | 0.909 | -7.85 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Cổng Dow → TẮT | 115.28 | 42.7% | 0.546 | 11.97 | 9.63 | 0.53 | 0.562 | -15.75 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 105.13 | 46.4% | 0.626 | 11.07 | 9.5 | 0.598 | 0.652 | -11.2 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 94.2 | 38.3% | 0.368 | 16.28 | 5.79 | 0.323 | 0.411 | -10.7 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 128.53 | 52.1% | 0.88 | 7.67 | 16.76 | 0.733 | 1.049 | -12.08 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + R:R tối thiểu riêng khung 1D → 2 | 106.57 | 45.1% | 0.609 | 9.72 | 10.96 | 0.543 | 0.673 | -8.95 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu riêng khung 4H → 2 | 87.67 | 39.2% | 0.299 | 14.88 | 5.89 | 0.32 | 0.278 | -11.8 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Entry (/100) → 28 + Cộng thêm ngưỡng điểm khung 1D → 7 | 182.97 | 39.4% | 0.606 | 17.82 | 10.27 | 0.502 | 0.713 | -14.43 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Entry (/100) → 33 | 35.48 | 39.8% | 0.403 | 10.87 | 3.26 | 0.297 | 0.537 | -6.21 |  |

### Vòng 239 — ngẫu nhiên nhiều thông số · mốc: tổng 131.08R, win 53.1%, rủi ro tụt vốn 7.43R, lời÷rủi ro 17.64

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 | 112.6 | 46.6% | 0.691 | 10.3 | 10.93 | 0.633 | 0.745 | -7.38 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: BOS → 1 + Điểm vùng: POC anchored → 4 + Xác nhận khung nhỏ (A2) → W | 105.67 | 38.6% | 0.396 | 16.19 | 6.53 | 0.307 | 0.476 | -6.25 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: Fib sóng 4 → 1.56 + Cộng điểm phân kỳ dương ẩn → 2.63 | 111.77 | 50.7% | 0.81 | 8 | 13.97 | 0.7 | 0.944 | -9.29 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Trọng số phần SL (/100) → 7 | 130.33 | 52.7% | 0.881 | 7.43 | 17.54 | 0.737 | 1.044 | -9.37 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 50 → 0.75 | 89.53 | 39.9% | 0.361 | 16.16 | 5.54 | 0.299 | 0.417 | -8.35 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: EMA 21 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Đệm SL riêng khung 1D (ATR) → 0.3 | 97.4 | 45.4% | 0.598 | 11.28 | 8.63 | 0.63 | 0.568 | -6.83 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + R:R tối thiểu riêng khung 1W → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Cổng Dow → CHẶT | 65.8 | 45.9% | 0.539 | 9.09 | 7.24 | 0.285 | 0.786 | -9.91 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Cộng thêm ngưỡng điểm khung 1D → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 129.4 | 51.4% | 0.874 | 7.73 | 16.74 | 0.656 | 1.118 | -10.54 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu tới TP1 → 2.63 | 85.26 | 48.5% | 0.879 | 8.16 | 10.45 | 0.675 | 1.106 | -15.33 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 21 → 1.13 | 95.65 | 50% | 0.797 | 7.67 | 12.47 | 0.688 | 0.926 | -17.49 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Divergence (/100) → 12 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 80.67 | 43.8% | 0.498 | 11.71 | 6.89 | 0.281 | 0.709 | -13.05 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 35.48 | 39.8% | 0.403 | 10.83 | 3.28 | 0.297 | 0.537 | -6.21 |  |

### Vòng 238 — ngẫu nhiên nhiều thông số · mốc: tổng 131.08R, win 53.1%, rủi ro tụt vốn 7.46R, lời÷rủi ro 17.57

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: EMA 21 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 94.45 | 44.3% | 0.598 | 10.52 | 8.98 | 0.407 | 0.851 | -8.96 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: BOS → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 84.23 | 49.1% | 0.766 | 8.13 | 10.36 | 0.657 | 0.896 | -15.76 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: EMA 200 → 3 + Cổng Dow → CHẶT | 68.26 | 46.5% | 0.537 | 9.42 | 7.25 | 0.489 | 0.57 | -9.8 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Divergence (/100) → 9 | 129.31 | 52.4% | 0.88 | 7.67 | 16.86 | 0.715 | 1.071 | -10.68 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Cổng Dow → CHẶT | 100.03 | 54% | 0.885 | 6.49 | 15.41 | 0.582 | 1.144 | -11.74 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 94.74 | 40.7% | 0.439 | 13 | 7.29 | 0.498 | 0.365 | -11.76 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 130.58 | 52.1% | 0.907 | 7.39 | 17.67 | 0.772 | 1.062 | -13.94 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: POC anchored → 4 + Xác nhận khung nhỏ (A2) → W | 132.26 | 41.4% | 0.453 | 14.97 | 8.84 | 0.56 | 0.335 | -16.48 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: EMA 21 → 0.875 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 131.38 | 52.1% | 0.9 | 7.6 | 17.29 | 0.812 | 0.998 | -10.68 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1W (ATR) → 0.3 | 78.81 | 37.8% | 0.363 | 16.5 | 4.78 | 0.297 | 0.419 | -8.4 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 | 126.58 | 52.4% | 0.861 | 7.73 | 16.38 | 0.683 | 1.062 | -12.08 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 130.5 | 53% | 0.876 | 7.46 | 17.49 | 0.728 | 1.052 | -10.68 |  |
