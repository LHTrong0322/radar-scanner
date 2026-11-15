# Tối ưu tự động (chạy liên tục) — vòng 359

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 3978 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 47.5% | 107.69R | 0.665 | 5.74R | 9.52R | 11.31 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 147 | 53.7% | 133.7R | 0.91 | 6.15R | 7.2R | 18.57 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 29 | 51.7% | 30.98R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 108 | 54.6% | 94.99R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 47.5% | 107.69R | 9.52R | 11.31 | 32 | 12.5% | -14.03R |
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

### Vòng 359 — ngẫu nhiên nhiều thông số · mốc: tổng 133.7R, win 53.7%, rủi ro tụt vốn 7.2R, lời÷rủi ro 18.57

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + SL tối đa (% Entry) → 0.35 | 131.91 | 53.1% | 0.897 | 7.62 | 17.31 | 0.74 | 1.08 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: Break mây Ichimoku → 1 | 121.69 | 50.7% | 0.811 | 7.92 | 15.36 | 0.695 | 0.937 | -11.02 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: POC volume profile cố định → 0.688 | 124.58 | 51.4% | 0.865 | 7.81 | 15.95 | 0.719 | 1.038 | -10.95 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: POC volume profile cố định → 0.813 | 33.59 | 38.9% | 0.373 | 11.21 | 3 | 0.317 | 0.438 | -6.21 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Mức RSI 30/70 → 1.13 + Đệm SL riêng khung 4H (ATR) → 0.3 | 176.24 | 39.3% | 0.591 | 18.13 | 9.72 | 0.462 | 0.73 | -12.33 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: HVN anchored → 0.188 + Đệm SL riêng khung 1D (ATR) → 0.3 + Ngưỡng điểm vào kèo → 77 | 108.18 | 44.9% | 0.648 | 11.01 | 9.83 | 0.703 | 0.602 | -6.18 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 1W → 2 + Xác nhận khung nhỏ (A2) → W | 64.51 | 41.4% | 0.347 | 14.53 | 4.44 | 0.232 | 0.44 | -12.89 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Coin phải mạnh hơn BTC trong N ngày → 14 | 92.76 | 48.2% | 0.843 | 8.12 | 11.42 | 0.643 | 1.092 | -15.62 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần SL (/100) → 7 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 128.07 | 51.6% | 0.795 | 8.43 | 15.19 | 0.663 | 0.968 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN cố định → 0.438 | 128.2 | 41.5% | 0.397 | 12.32 | 10.41 | 0.422 | 0.375 | -13.56 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: EMA 50 → 0.75 + Trọng số phần Momentum (/100) → 25 | 114.81 | 49.7% | 0.771 | 8.58 | 13.38 | 0.613 | 0.948 | -7.08 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 128.99 | 52% | 0.872 | 7.6 | 16.97 | 0.728 | 1.04 | -9.66 |  |

### Vòng 358 — ngẫu nhiên nhiều thông số · mốc: tổng 133.7R, win 53.7%, rủi ro tụt vốn 7.31R, lời÷rủi ro 18.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 33.43 | 58.6% | 0.22 | 5.37 | 6.23 | 0.293 | 0.154 | -11.02 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Elliott (/100) → 10 | 124.12 | 49.3% | 0.913 | 8.05 | 15.42 | 0.755 | 1.096 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: POC volume profile cố định → 0.813 | 129.5 | 52.4% | 0.881 | 7.44 | 17.41 | 0.723 | 1.064 | -8.46 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: BOS → 1 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Ngưỡng điểm vào kèo → 77 | 124.08 | 51.1% | 0.88 | 7.48 | 16.59 | 0.759 | 1.014 | -10.96 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 126.56 | 50.6% | 0.811 | 8.12 | 15.59 | 0.763 | 0.867 | -10.24 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 24.61 | 57% | 0.173 | 6.6 | 3.73 | 0.23 | 0.128 | -10.88 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + % chốt ở TP1 → 0.287 | 133.7 | 53.7% | 0.91 | 7.32 | 18.27 | 0.761 | 1.082 | -9.64 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Ngưỡng điểm vào kèo → 77 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 120.87 | 47.8% | 0.77 | 8.62 | 14.02 | 0.551 | 1.009 | -10.55 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 106.73 | 51.7% | 0.726 | 8.33 | 12.81 | 0.602 | 0.866 | -8.84 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Cổng Dow → CHẶT | 93.73 | 53.2% | 0.86 | 6.87 | 13.64 | 0.53 | 1.14 | -12.01 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Lệnh chờ hết hạn sau (nến) → 8 + R:R tối thiểu riêng khung 1W → 2 | 106.43 | 49.3% | 0.7 | 8.24 | 12.92 | 0.501 | 0.9 | -12.29 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Mức MACD → 1.13 + Coin phải mạnh hơn BTC trong N ngày → 14 | 47.97 | 40.8% | 0.466 | 10.54 | 4.55 | 0.247 | 0.698 | -14.34 |  |

### Vòng 357 — ngẫu nhiên nhiều thông số · mốc: tổng 122.15R, win 53.4%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.87

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Break mây Ichimoku → 1 + R:R tối thiểu tới TP1 → 2.38 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 95.44 | 44.5% | 0.552 | 9.78 | 9.76 | 0.484 | 0.615 | -11.32 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: EMA 50 → 0.75 + Cộng thêm ngưỡng điểm khung 1D → 4 | 114.45 | 52.1% | 0.784 | 7.68 | 14.9 | 0.555 | 1.039 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trọng số phần SL (/100) → 9 + Lệnh chờ hết hạn sau (nến) → 6 + Đệm SL riêng khung 1W (ATR) → 0.3 | 98.62 | 48.1% | 0.741 | 8.14 | 12.12 | 0.503 | 0.991 | -9.32 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 100.61 | 41% | 0.412 | 14.32 | 7.03 | 0.346 | 0.466 | -7.59 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 111.39 | 52.3% | 0.748 | 7.69 | 14.49 | 0.561 | 0.958 | -10.49 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 110.92 | 43.9% | 0.486 | 11.53 | 9.62 | 0.561 | 0.413 | -9.85 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần Momentum (/100) → 21 | 134.46 | 51.2% | 0.791 | 8.25 | 16.3 | 0.724 | 0.874 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 108.4 | 47.9% | 0.774 | 8.59 | 12.62 | 0.517 | 1.032 | -13.96 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Số TP tối đa → 2 | 120.51 | 53.1% | 0.82 | 7.33 | 16.44 | 0.607 | 1.066 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Đệm SL riêng khung 1W (ATR) → 0.3 | 104.65 | 48.2% | 0.764 | 8.46 | 12.37 | 0.439 | 1.075 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: Fib sóng 4 → 0.938 | 115.95 | 52.8% | 0.805 | 7.24 | 16.02 | 0.625 | 1.001 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 98.7 | 46.6% | 0.613 | 8.64 | 11.42 | 0.508 | 0.714 | -10.97 |  |

### Vòng 356 — ngẫu nhiên nhiều thông số · mốc: tổng 133.7R, win 53.7%, rủi ro tụt vốn 7.25R, lời÷rủi ro 18.44

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Số TP tối đa → 2 | 119.14 | 51% | 0.81 | 7.66 | 15.55 | 0.66 | 0.963 | -10 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Coin phải mạnh hơn BTC trong N ngày → 14 | 95.43 | 47.3% | 0.868 | 8.14 | 11.72 | 0.697 | 1.08 | -15.62 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: EMA 21 → 0.875 + Trọng số phần R:R (/100) → 28 | 132.25 | 51.7% | 0.9 | 7.67 | 17.24 | 0.821 | 0.986 | -9.66 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: HVN cố định → 0.563 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 128.25 | 50.7% | 0.929 | 7.72 | 16.61 | 0.77 | 1.119 | -8.91 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 118.55 | 52.3% | 0.775 | 8.2 | 14.46 | 0.698 | 0.857 | -10.49 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: POC anchored → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 26.65 | 56.9% | 0.167 | 6.41 | 4.16 | 0.254 | 0.088 | -10.37 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 82.26 | 47.2% | 0.776 | 8.88 | 9.26 | 0.566 | 1.029 | -6.48 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần Entry (/100) → 33 | 127.5 | 52.1% | 0.873 | 7.57 | 16.84 | 0.782 | 0.976 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + % chốt ở TP1 → 0.287 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Mức RSI 30/70 → 0.875 | 107.76 | 48.8% | 0.674 | 9 | 11.97 | 0.526 | 0.832 | -10.01 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần Divergence (/100) → 9 | 171.67 | 39.9% | 0.611 | 16.76 | 10.24 | 0.494 | 0.734 | -13.37 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Entry (/100) → 33 | 111.48 | 51% | 0.748 | 8.04 | 13.87 | 0.615 | 0.883 | -10.69 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần SL (/100) → 9 + Điểm vùng: POC volume profile cố định → 0.813 | 93.74 | 39.4% | 0.373 | 16.27 | 5.76 | 0.311 | 0.43 | -5.56 |  |

### Vòng 355 — ngẫu nhiên nhiều thông số · mốc: tổng 133.7R, win 53.7%, rủi ro tụt vốn 7.27R, lời÷rủi ro 18.39

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 21.2 | 37.2% | 0.246 | 12.59 | 1.68 | 0.188 | 0.328 | -8.58 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 78.15 | 47.2% | 0.724 | 8.79 | 8.89 | 0.62 | 0.844 | -7.31 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Entry (/100) → 28 | 90.39 | 48.8% | 0.735 | 8.52 | 10.61 | 0.634 | 0.844 | -15.1 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: HVN cố định → 0.438 | 128.04 | 51.7% | 0.871 | 7.59 | 16.87 | 0.705 | 1.064 | -9.48 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN cố định → 0.563 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Elliott (/100) → 10 | 100.73 | 41.4% | 0.376 | 12.45 | 8.09 | 0.426 | 0.336 | -20.14 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Cộng điểm phân kỳ dương ẩn → 2.63 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Divergence (/100) → 9 | 102.22 | 48.3% | 0.677 | 9.33 | 10.96 | 0.569 | 0.801 | -11.28 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần SL (/100) → 9 + Trọng số phần Entry (/100) → 28 | 134.75 | 52.7% | 0.923 | 7.26 | 18.56 | 0.797 | 1.071 | -12.92 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: MACD cắt lên Signal → 0.563 | 119.94 | 52.3% | 0.794 | 7.55 | 15.89 | 0.586 | 1.036 | -9.66 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + R:R tối thiểu riêng khung 4H → 2 + Cổng Dow → CHẶT | 75.89 | 41.9% | 0.274 | 13.02 | 5.83 | 0.347 | 0.213 | -15.06 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Cộng thêm ngưỡng điểm khung 1W → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 | 102.7 | 47.1% | 0.755 | 8.63 | 11.9 | 0.443 | 1.049 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu riêng khung 4H → 2 | 127.16 | 41.1% | 0.376 | 13.06 | 9.74 | 0.371 | 0.381 | -8.79 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Momentum (/100) → 25 | 125.21 | 49.7% | 0.818 | 8.35 | 15 | 0.784 | 0.859 | -10.24 |  |

### Vòng 354 — ngẫu nhiên nhiều thông số · mốc: tổng 133.7R, win 53.7%, rủi ro tụt vốn 7.27R, lời÷rủi ro 18.39

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Mức MACD → 0.875 | 106.53 | 49.6% | 0.801 | 8.04 | 13.25 | 0.713 | 0.904 | -11.53 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL riêng khung 1W (ATR) → 0.3 | 11.85 | 25.1% | 0.06 | 35.77 | 0.33 | -0.055 | 0.142 | -22.16 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 118.27 | 52.8% | 0.833 | 7.5 | 15.77 | 0.584 | 1.119 | -9.69 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 115.75 | 49.4% | 0.733 | 8.47 | 13.67 | 0.805 | 0.646 | -9.83 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Khung lớn phải tăng (trend ≥) → 0.375 | 111.74 | 51.2% | 0.908 | 7.47 | 14.96 | 0.702 | 1.14 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 34.82 | 39.3% | 0.391 | 10.85 | 3.21 | 0.349 | 0.438 | -6.21 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Cộng thêm ngưỡng điểm khung 4H → 2 | 118.91 | 52.1% | 0.826 | 7.51 | 15.83 | 0.617 | 1.059 | -9.66 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + R:R tối thiểu riêng khung 1D → 2 + Cộng điểm phân kỳ dương ẩn → 3.5 | 110.36 | 46.2% | 0.638 | 9.13 | 12.09 | 0.576 | 0.696 | -7.92 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + SL tối đa (% Entry) → 0.35 | 30.72 | 57.7% | 0.197 | 6.08 | 5.05 | 0.228 | 0.168 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: HVN cố định → 0.438 | 131.94 | 53.1% | 0.898 | 7.35 | 17.95 | 0.74 | 1.08 | -9.66 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần R:R (/100) → 33 | 106.68 | 49.1% | 0.647 | 9.85 | 10.83 | 0.579 | 0.72 | -8.62 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC volume profile cố định → 0.688 + Cộng điểm phân kỳ dương ẩn → 3.5 | 18.52 | 40% | 0.337 | 9.81 | 1.89 | 0.101 | 0.582 | -2.73 |  |

### Vòng 353 — ngẫu nhiên nhiều thông số · mốc: tổng 133.7R, win 53.7%, rủi ro tụt vốn 7.3R, lời÷rủi ro 18.32

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Break mây Ichimoku → 3 | 114.54 | 49.1% | 0.711 | 8.91 | 12.86 | 0.579 | 0.871 | -8.38 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: EMA 200 → 3 + Điểm vùng: POC volume profile cố định → 0.813 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 69.02 | 45.3% | 0.539 | 9.8 | 7.04 | 0.471 | 0.61 | -4.82 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: POC anchored → 2 | 117.96 | 50% | 0.756 | 8.59 | 13.73 | 0.641 | 0.884 | -8.63 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 + R:R tối thiểu riêng khung 1W → 2 | 107.17 | 47.9% | 0.642 | 8.52 | 12.58 | 0.622 | 0.659 | -8.96 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Divergence (/100) → 12 | 182.99 | 39.6% | 0.614 | 17.9 | 10.22 | 0.502 | 0.732 | -12.32 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 128.53 | 52% | 0.857 | 7.64 | 16.82 | 0.793 | 0.922 | -10 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: POC volume profile cố định → 0.688 + Ngưỡng điểm vào kèo → 77 + Đệm SL riêng khung 1W (ATR) → 0.3 | 105.28 | 48.1% | 0.78 | 8.05 | 13.08 | 0.501 | 1.031 | -10.7 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Xác nhận khung nhỏ (A2) → W + R:R tối thiểu riêng khung 4H → 2 | 71.46 | 36.3% | 0.155 | 23.52 | 3.04 | 0.21 | 0.11 | -7.26 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Cộng thêm ngưỡng điểm khung 1D → 4 | 131.78 | 52.7% | 0.89 | 7.35 | 17.93 | 0.763 | 1.037 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Đệm SL riêng khung 1D (ATR) → 0.3 + Khung lớn phải tăng (trend ≥) → 0.425 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 32.05 | 58.3% | 0.197 | 7.02 | 4.57 | 0.312 | 0.107 | -11.09 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Fib sóng 4 → 0.938 | 129.49 | 51.4% | 0.887 | 7.84 | 16.52 | 0.779 | 1.007 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: EMA 200 → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 110.05 | 43.9% | 0.514 | 11.02 | 9.99 | 0.484 | 0.544 | -10.91 |  |

### Vòng 352 — ngẫu nhiên nhiều thông số · mốc: tổng 133.7R, win 53.7%, rủi ro tụt vốn 7.27R, lời÷rủi ro 18.39

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: BOS → 1 | 131.7 | 53.4% | 0.902 | 7.35 | 17.92 | 0.762 | 1.058 | -9.66 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 133.7 | 53.7% | 0.91 | 7.28 | 18.37 | 0.761 | 1.082 | -8.62 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 + Số TP tối đa → 2 + Cộng điểm phân kỳ dương ẩn → 3.5 | 115.86 | 41.3% | 0.374 | 12.99 | 8.92 | 0.346 | 0.397 | -9.69 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + SL tối đa (% Entry) → 0.35 | 130.34 | 52.4% | 0.899 | 7.46 | 17.47 | 0.747 | 1.071 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần Entry (/100) → 33 | 129.15 | 49.7% | 0.833 | 7.85 | 16.45 | 0.822 | 0.847 | -13.5 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 101.69 | 50.4% | 0.827 | 7.92 | 12.84 | 0.544 | 1.155 | -13.89 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: EMA 50 → 0.75 + Trọng số phần SL (/100) → 7 | 123.83 | 51% | 0.789 | 8.69 | 14.25 | 0.603 | 1.002 | -8.37 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Momentum (/100) → 25 | 106.77 | 48.9% | 0.803 | 8 | 13.35 | 0.524 | 1.054 | -10.7 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 128.91 | 51% | 0.865 | 7.56 | 17.05 | 0.776 | 0.958 | -10 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Biên mây Ichimoku → 1.05 + Trọng số phần R:R (/100) → 28 | 25.55 | 38.6% | 0.308 | 11.27 | 2.27 | 0.233 | 0.406 | -8.58 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Cổng Dow → CHẶT + Trọng số phần R:R (/100) → 28 | 87.41 | 52.6% | 0.767 | 7.01 | 12.47 | 0.348 | 1.131 | -10.72 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 98.67 | 47% | 0.662 | 9.34 | 10.56 | 0.472 | 0.908 | -9.16 |  |

### Vòng 351 — ngẫu nhiên nhiều thông số · mốc: tổng 133.7R, win 53.7%, rủi ro tụt vốn 7.31R, lời÷rủi ro 18.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Divergence (/100) → 9 + Trọng số phần R:R (/100) → 33 | 113.31 | 49.7% | 0.695 | 8.97 | 12.63 | 0.561 | 0.849 | -9.4 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Mức MACD → 0.875 + Trọng số phần Trend (/100) → 12 | 123.94 | 52.3% | 0.832 | 7.7 | 16.1 | 0.688 | 0.977 | -4.48 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Xác nhận khung nhỏ (A2) → W | 33.57 | 27.3% | 0.1 | 40.36 | 0.83 | 0.114 | 0.088 | -35.48 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: BOS → 3 | 133.5 | 53.4% | 0.902 | 7.13 | 18.72 | 0.751 | 1.08 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Cộng điểm phân kỳ dương ẩn → 2.63 | 17.99 | 36.9% | 0.214 | 12.63 | 1.42 | 0.241 | 0.177 | -10.01 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Số TP tối đa → 2 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 82.52 | 52.7% | 0.75 | 6.87 | 12.01 | 0.333 | 1.086 | -10.72 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng điểm phân kỳ dương ẩn → 2.63 | 106.27 | 51.4% | 0.77 | 7.89 | 13.47 | 0.512 | 1.06 | -11.51 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: BOS → 1 + Điểm vùng: Biên mây Ichimoku → 1.05 | 110.22 | 49.4% | 0.689 | 8.78 | 12.55 | 0.595 | 0.801 | -11.96 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng thêm ngưỡng điểm khung 1W → -1 | 106.73 | 51.7% | 0.726 | 8.34 | 12.8 | 0.602 | 0.866 | -8.84 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: BOS → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 73.99 | 44.2% | 0.655 | 10.13 | 7.3 | 0.391 | 0.987 | -6.26 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Khung lớn phải tăng (trend ≥) → 0.425 | 182.74 | 39.7% | 0.63 | 17.29 | 10.57 | 0.533 | 0.731 | -8.45 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + SL tối đa (% Entry) → 0.35 + Điểm vùng: Mức MACD → 0.875 | 123.91 | 52.1% | 0.861 | 7.6 | 16.3 | 0.719 | 1.018 | -9.66 |  |

### Vòng 350 — ngẫu nhiên nhiều thông số · mốc: tổng 133.7R, win 53.7%, rủi ro tụt vốn 7.26R, lời÷rủi ro 18.42

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + SL tối đa (% Entry) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 95.83 | 46.6% | 0.647 | 9.35 | 10.25 | 0.443 | 0.908 | -9.16 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Momentum (/100) → 21 | 104.5 | 44.2% | 0.577 | 10.13 | 10.32 | 0.504 | 0.647 | -8.97 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần Divergence (/100) → 9 | 133.7 | 53.7% | 0.91 | 7.26 | 18.42 | 0.763 | 1.08 | -8.64 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + R:R tối thiểu tới TP1 → 2.63 + % chốt ở TP1 → 0.287 + Điểm vùng: Biên mây Ichimoku → 1.35 | 94.44 | 49.6% | 0.768 | 7.84 | 12.05 | 0.542 | 0.998 | -11.67 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Cộng điểm phân kỳ dương ẩn → 3.5 | 128.05 | 50.4% | 0.921 | 7.9 | 16.21 | 0.757 | 1.119 | -8.91 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 183.88 | 39.7% | 0.619 | 17.42 | 10.56 | 0.517 | 0.725 | -12.68 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: EMA 50 → 0.75 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 98.32 | 48.7% | 0.63 | 9.63 | 10.21 | 0.592 | 0.673 | -6.84 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 125.82 | 52.7% | 0.862 | 7.42 | 16.96 | 0.763 | 0.975 | -11.78 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cộng thêm ngưỡng điểm khung 1D → 7 | 126.72 | 45.1% | 0.561 | 11.06 | 11.46 | 0.605 | 0.515 | -9.44 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: POC volume profile cố định → 0.688 | 125.47 | 50.9% | 0.789 | 8.63 | 14.54 | 0.607 | 1.009 | -7.08 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Entry (/100) → 33 | 114.33 | 40.2% | 0.38 | 15.19 | 7.53 | 0.388 | 0.373 | -8.63 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 124.45 | 51.7% | 0.87 | 7.66 | 16.25 | 0.707 | 1.06 | -10.95 |  |
