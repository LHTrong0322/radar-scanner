# Tối ưu tự động (chạy liên tục) — vòng 165

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 1664 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 47% | 105.98R | 0.646 | 5.74R | 9.52R | 11.13 | 34 | 11.8% | -16.07R | -0.473 | 16.07R |
| **Tốt nhất** | 147 | 52.4% | 131.17R | 0.892 | 5.15R | 7.43R | 17.65 | 31 | 12.9% | -14.96R | -0.483 | 14.96R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 53.6% | 33.37R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.94R | 2 | 0% | -2.04R |
| 4H | 108 | 52.8% | 90.86R | 22 | 18.2% | -7.25R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 138 (Ghép: Điểm vùng: HVN anchored → 0.125 + Khoảng cách tối thiểu TP1 (ATR) → 0.875).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 47% | 105.98R | 9.52R | 11.13 | 34 | 11.8% | -16.07R |
| **Đề xuất** | 171 | 52.6% | 144.79R | 7.32R | 19.78 | 33 | 12.1% | -15.17R |

| Thông số | Bot thật | Đề xuất |
|---|---|---|
| Ngưỡng điểm vào kèo | 70 | **75** |
| SL tối đa (% Entry) | 0.35 | **0.387** |
| Khoảng cách tối thiểu TP1 (ATR) | 0.75 | **0.875** |
| Lệnh chờ hết hạn sau (nến) | 8 | **7** |
| Số TP tối đa | 2 | **3** |
| Điểm ADX > 25 và +DI trội (Momentum) | 3 | **4** |
| Điểm ADX < 13 cạn lực giảm (Momentum) | 1.5 | **2.5** |
| Lọc BTC: giá trên EMA bao nhiêu ngày | 200 | **150** |
| Trọng số phần Trend (/100) | 30 | **15** |
| Trọng số phần Momentum (/100) | 15 | **23** |
| Trọng số phần R:R (/100) | 20 | **30** |
| Trọng số phần SL (/100) | 5 | **8** |
| Điểm vùng: EMA 50 | 0.75 | **0.94** |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) | 2.5 | **3.13** |
| Điểm vùng: HVN anchored | 0.25 | **0.125** |
| Điểm vùng: HVN cố định | 0.25 | **0.5** |

## Thông số khác với bot thật

| Thông số | Bot thật | Đề xuất |
|---|---|---|
| Ngưỡng điểm vào kèo | 70 | **75** |
| SL tối đa (% Entry) | 0.35 | **0.387** |
| Lệnh chờ hết hạn sau (nến) | 8 | **7** |
| Số TP tối đa | 2 | **3** |
| Điểm ADX > 25 và +DI trội (Momentum) | 3 | **4** |
| Điểm ADX < 13 cạn lực giảm (Momentum) | 1.5 | **2.5** |
| Lọc BTC: giá trên EMA bao nhiêu ngày | 200 | **150** |
| Trọng số phần Trend (/100) | 30 | **15** |
| Trọng số phần Momentum (/100) | 15 | **23** |
| Trọng số phần R:R (/100) | 20 | **30** |
| Trọng số phần SL (/100) | 5 | **8** |
| Điểm vùng: EMA 50 | 0.75 | **0.94** |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) | 2.5 | **3.13** |
| Điểm vùng: HVN cố định | 0.25 | **0.5** |

## Các thay đổi đã nhận (mới nhất trước)

| Vòng | Thông số | Từ → Thành | Tổng R | Tỷ lệ thắng | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro |
|---|---|---|---|---|---|---|
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

### Vòng 165 — ngẫu nhiên nhiều thông số · mốc: tổng 131.17R, win 52.4%, rủi ro tụt vốn 7.43R, lời÷rủi ro 17.65

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: MACD cắt lên Signal → 0.438 | 115.34 | 47.8% | 0.735 | 9.34 | 12.35 | 0.546 | 0.958 | -12.38 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Mức MACD → 0.875 | 66.09 | 46% | 0.525 | 9.85 | 6.71 | 0.441 | 0.613 | -7.38 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu riêng khung 1W → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 17.78 | 52.5% | 0.126 | 7.63 | 2.33 | 0.212 | 0.042 | -10.52 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Khung lớn phải tăng (trend ≥) → 0.375 | 83.57 | 50.9% | 0.76 | 7.36 | 11.35 | 0.335 | 1.114 | -16.02 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 | 132.39 | 51.5% | 0.812 | 8.12 | 16.3 | 0.665 | 0.994 | -11.7 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 46.35 | 39.8% | 0.45 | 10.96 | 4.23 | 0.282 | 0.643 | -17.27 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Mức RSI 30/70 → 1.13 + Số TP tối đa → 2 | 128.45 | 52.4% | 0.874 | 7.46 | 17.22 | 0.738 | 1.032 | -14.96 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Lệnh chờ hết hạn sau (nến) → 6 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: POC anchored → 4 | 63.38 | 41.1% | 0.42 | 12.08 | 5.25 | 0.292 | 0.563 | -2.85 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 126.48 | 49.4% | 0.8 | 8.19 | 15.44 | 0.77 | 0.837 | -15.02 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 | 112.18 | 51.4% | 0.768 | 7.55 | 14.86 | 0.599 | 0.957 | -15.46 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + R:R tối thiểu riêng khung 1D → 2 | 109.49 | 45.7% | 0.633 | 9.1 | 12.03 | 0.586 | 0.676 | -11.73 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: HVN anchored → 0.188 | 120.15 | 52.1% | 0.823 | 7.37 | 16.3 | 0.666 | 1.003 | -14.97 |  |

### Vòng 164 — ngẫu nhiên nhiều thông số · mốc: tổng 131.27R, win 52.7%, rủi ro tụt vốn 7.23R, lời÷rủi ro 18.16

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 86.6 | 45.9% | 0.509 | 10.05 | 8.62 | 0.429 | 0.59 | -12.65 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Lệnh chờ hết hạn sau (nến) → 8 + Xác nhận khung nhỏ (A2) → W | 97.17 | 37.9% | 0.392 | 16.12 | 6.03 | 0.371 | 0.408 | -11.8 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cổng Dow → TẮT + Coin phải mạnh hơn BTC trong N ngày → 14 | 85.4 | 41.1% | 0.433 | 13.35 | 6.4 | 0.582 | 0.306 | -23.14 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: MACD cắt lên Signal → 0.563 | 111.51 | 51.4% | 0.753 | 8.19 | 13.62 | 0.767 | 0.738 | -14.72 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 122.3 | 50.3% | 0.799 | 7.98 | 15.33 | 0.778 | 0.822 | -13.94 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số TP tối đa → 2 | 33.53 | 56.7% | 0.214 | 5.89 | 5.69 | 0.288 | 0.144 | -10.26 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: MACD cắt lên Signal → 0.563 | 126.73 | 51.4% | 0.868 | 7.6 | 16.68 | 0.733 | 1.023 | -14.96 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Cộng thêm ngưỡng điểm khung 1W → -1 + Coin phải mạnh hơn BTC trong N ngày → 14 | 106.27 | 41.5% | 0.394 | 11.98 | 8.87 | 0.428 | 0.367 | -19.22 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Entry (/100) → 28 | 122.33 | 47.7% | 0.8 | 8.91 | 13.73 | 0.577 | 1.044 | -15.9 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 125.71 | 51% | 0.844 | 7.82 | 16.08 | 0.724 | 0.99 | -16.75 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 94.06 | 45.9% | 0.636 | 9.4 | 10.01 | 0.506 | 0.797 | -12.22 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + R:R tối thiểu riêng khung 1D → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 93.65 | 44% | 0.49 | 10.52 | 8.9 | 0.443 | 0.533 | -12.14 |  |

### Vòng 163 — ngẫu nhiên nhiều thông số · mốc: tổng 131.17R, win 52.4%, rủi ro tụt vốn 7.29R, lời÷rủi ro 17.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: POC volume profile cố định → 0.813 | 111.74 | 49.6% | 0.804 | 8.08 | 13.83 | 0.628 | 1.004 | -15.76 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: EMA 50 → 0.75 | 100.33 | 40.8% | 0.325 | 14.25 | 7.04 | 0.337 | 0.314 | -11.91 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cổng Dow → CHẶT + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 47.38 | 36.7% | 0.22 | 15.64 | 3.03 | 0.212 | 0.228 | -11.38 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: BOS → 3 | 105.74 | 47.3% | 0.626 | 8.68 | 12.18 | 0.536 | 0.715 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Mức MACD → 0.875 | 112.08 | 48.1% | 0.709 | 9.22 | 12.16 | 0.567 | 0.871 | -11.06 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần SL (/100) → 7 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 96.23 | 48.1% | 0.746 | 8.47 | 11.36 | 0.74 | 0.753 | -21.43 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 130.48 | 50% | 0.847 | 8.14 | 16.03 | 0.661 | 1.065 | -14.85 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 32.15 | 55.2% | 0.185 | 6.12 | 5.25 | 0.253 | 0.123 | -8.27 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: EMA 50 → 1.13 | 116.99 | 48.7% | 0.77 | 8.6 | 13.6 | 0.72 | 0.826 | -13.93 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: HVN anchored → 0.188 | 130.42 | 51.7% | 0.887 | 7.42 | 17.58 | 0.784 | 1.004 | -15.38 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Fib sóng 4 → 1.56 | 122.2 | 50% | 0.794 | 8.05 | 15.18 | 0.778 | 0.809 | -13.94 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 103.93 | 47.8% | 0.646 | 9.45 | 11 | 0.574 | 0.726 | -11.36 |  |

### Vòng 162 — ngẫu nhiên nhiều thông số · mốc: tổng 131.27R, win 52.7%, rủi ro tụt vốn 7.29R, lời÷rủi ro 18.01

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: EMA 50 → 1.13 | 126.73 | 51.4% | 0.856 | 7.99 | 15.86 | 0.737 | 1 | -10.68 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 115.27 | 51% | 0.795 | 7.9 | 14.59 | 0.615 | 0.999 | -13.06 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: HVN cố định → 0.563 | 69.2 | 42.7% | 0.461 | 11.58 | 5.98 | 0.503 | 0.425 | -3.38 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu riêng khung 4H → 2 + Cổng Dow → TẮT + Điểm vùng: Mức RSI 30/70 → 1.13 | 45.26 | 47.8% | 0.104 | 9.59 | 4.72 | 0.183 | 0.036 | -18.87 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: EMA 50 → 1.13 + Cộng thêm ngưỡng điểm khung 1W → 2 | 112.7 | 51% | 0.777 | 7.84 | 14.38 | 0.661 | 0.908 | -11.41 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 110.43 | 47.6% | 0.762 | 8.77 | 12.59 | 0.535 | 1.005 | -16 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 116.96 | 50.7% | 0.78 | 7.91 | 14.79 | 0.77 | 0.79 | -11.41 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: POC anchored → 4 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 120.44 | 49.4% | 0.753 | 8.2 | 14.69 | 0.715 | 0.792 | -12.81 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 86.84 | 45.8% | 0.517 | 9.85 | 8.82 | 0.391 | 0.64 | -12.04 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL riêng khung 1D (ATR) → 0.3 | 132.83 | 44.6% | 0.553 | 11.74 | 11.31 | 0.6 | 0.51 | -16.81 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 35.52 | 56.4% | 0.218 | 5.54 | 6.41 | 0.292 | 0.146 | -10.06 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: HVN anchored → 0.188 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 47.4 | 41% | 0.451 | 11.09 | 4.27 | 0.424 | 0.486 | -9.34 |  |

### Vòng 161 — ngẫu nhiên nhiều thông số · mốc: tổng 127.47R, win 52.4%, rủi ro tụt vốn 7.46R, lời÷rủi ro 17.09

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: EMA 21 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 107.08 | 47.2% | 0.673 | 9.78 | 10.95 | 0.391 | 0.989 | -12.17 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 118.12 | 49.7% | 0.815 | 7.95 | 14.86 | 0.535 | 1.115 | -18.04 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Ngưỡng điểm vào kèo → 74 + R:R tối thiểu riêng khung 4H → 2 | 119.76 | 40.6% | 0.357 | 12.8 | 9.36 | 0.341 | 0.371 | -13.52 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: EMA 200 → 1 + R:R tối thiểu riêng khung 4H → 2 + SL tối đa (% Entry) → 0.425 | 121.72 | 41.3% | 0.37 | 12.96 | 9.39 | 0.363 | 0.376 | -3.81 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Số TP tối đa → 2 + Trọng số phần SL (/100) → 9 | 122.54 | 51% | 0.845 | 7.71 | 15.89 | 0.69 | 1.021 | -17.28 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần R:R (/100) → 28 | 98.41 | 45.8% | 0.586 | 9.44 | 10.42 | 0.585 | 0.587 | -15.29 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Biên mây Ichimoku → 1.05 + Xác nhận khung nhỏ (A2) → W | 100.13 | 38.8% | 0.341 | 17.76 | 5.64 | 0.411 | 0.271 | -12.81 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 50 → 1.13 | 112.07 | 49.7% | 0.773 | 8.42 | 13.31 | 0.762 | 0.786 | -16.02 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: EMA 21 → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 122.16 | 51.7% | 0.831 | 7.8 | 15.66 | 0.796 | 0.87 | -16.11 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Entry (/100) → 33 | 125.82 | 51% | 0.868 | 7.8 | 16.13 | 0.753 | 0.994 | -16.4 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: POC anchored → 4 | 130.18 | 41.7% | 0.517 | 12.74 | 10.22 | 0.595 | 0.445 | -15.33 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + % chốt ở TP1 → 0.307 + Lệnh chờ hết hạn sau (nến) → 6 | 109.37 | 50.4% | 0.81 | 8.02 | 13.64 | 0.694 | 0.955 | -14.61 |  |

### Vòng 160 — ngẫu nhiên nhiều thông số · mốc: tổng 131.33R, win 52.7%, rủi ro tụt vốn 7.36R, lời÷rủi ro 17.84

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: POC anchored → 4 + Trọng số phần Entry (/100) → 33 | 97.25 | 48.7% | 0.631 | 9.02 | 10.78 | 0.648 | 0.616 | -9.55 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 131.06 | 52.4% | 0.904 | 7.46 | 17.57 | 0.784 | 1.044 | -14.96 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.563 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Số TP tối đa → 2 | 110.29 | 46.8% | 0.716 | 9.53 | 11.57 | 0.628 | 0.806 | -13.82 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 67.98 | 45% | 0.519 | 10.05 | 6.76 | 0.421 | 0.619 | -6.56 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Trend (/100) → 19 | 108.53 | 46.1% | 0.658 | 10.44 | 10.4 | 0.594 | 0.718 | -13.57 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Xác nhận khung nhỏ (A2) → W | 109.73 | 39.9% | 0.359 | 15.8 | 6.94 | 0.38 | 0.338 | -13.83 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 85.8 | 44.1% | 0.564 | 11.07 | 7.75 | 0.375 | 0.812 | -9.64 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Coin phải mạnh hơn BTC trong N ngày → 14 | 84.51 | 48% | 0.845 | 8.33 | 10.15 | 0.657 | 1.066 | -19.61 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Mức MACD → 1.13 + R:R tối thiểu riêng khung 1D → 2 | 106.81 | 45.4% | 0.614 | 9.5 | 11.24 | 0.55 | 0.674 | -12.61 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trọng số phần SL (/100) → 9 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 131.65 | 52.4% | 0.896 | 7.48 | 17.6 | 0.79 | 1.022 | -14.96 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Break mây Ichimoku → 3 | 111.24 | 49.4% | 0.695 | 8.87 | 12.54 | 0.56 | 0.857 | -13.83 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần Momentum (/100) → 25 | 129.13 | 49.7% | 0.802 | 8.7 | 14.84 | 0.697 | 0.928 | -13.64 |  |

### Vòng 159 — ngẫu nhiên nhiều thông số · mốc: tổng 131.23R, win 52.4%, rủi ro tụt vốn 7.33R, lời÷rủi ro 17.90

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Trọng số phần SL (/100) → 7 + R:R tối thiểu riêng khung 1D → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 28.01 | 54.4% | 0.154 | 6.81 | 4.11 | 0.212 | 0.106 | -9.71 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 34 | 57% | 0.215 | 5.65 | 6.02 | 0.288 | 0.148 | -9.19 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu riêng khung 4H → 2 | 34.62 | 47.8% | 0.103 | 9.61 | 3.6 | 0.202 | 0.03 | -12.88 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Momentum (/100) → 25 + Số TP tối đa → 2 | 33.97 | 57% | 0.215 | 5.77 | 5.89 | 0.288 | 0.147 | -10.26 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cộng điểm phân kỳ dương ẩn → 3.5 | 127.93 | 51.3% | 0.853 | 7.51 | 17.03 | 0.75 | 0.974 | -15.93 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: EMA 21 → 1.13 + Trọng số phần Divergence (/100) → 9 | 131.22 | 51.3% | 0.875 | 7.58 | 17.31 | 0.748 | 1.019 | -14.52 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Break mây Ichimoku → 3 | 108.94 | 39.9% | 0.381 | 16.08 | 6.77 | 0.324 | 0.438 | -15.62 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Momentum (/100) → 25 | 119.14 | 50% | 0.774 | 8.2 | 14.53 | 0.687 | 0.883 | -10.56 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: EMA 50 → 0.75 | 115.95 | 47.2% | 0.817 | 8.96 | 12.94 | 0.643 | 0.99 | -16 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Fib sóng 4 → 1.56 | 130.96 | 52.1% | 0.897 | 7.33 | 17.87 | 0.784 | 1.027 | -14.96 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 63.88 | 47% | 0.477 | 9.8 | 6.52 | 0.441 | 0.506 | -17.07 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cổng Dow → CHẶT | 88.42 | 51.8% | 0.776 | 7.07 | 12.51 | 0.399 | 1.115 | -16.02 |  |

### Vòng 158 — ngẫu nhiên nhiều thông số · mốc: tổng 131.23R, win 52.4%, rủi ro tụt vốn 7.33R, lời÷rủi ro 17.90

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Elliott (/100) → 10 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 110.51 | 48.6% | 0.789 | 8.25 | 13.4 | 0.633 | 0.96 | -16.78 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 92.57 | 45.9% | 0.634 | 9.41 | 9.84 | 0.48 | 0.821 | -12.72 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần SL (/100) → 9 + Điểm vùng: POC anchored → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 | 128.21 | 41.8% | 0.394 | 11.99 | 10.69 | 0.378 | 0.408 | -11.34 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Điểm vùng: HVN anchored → 0.188 | 132.06 | 51.4% | 0.905 | 7.38 | 17.89 | 0.817 | 1.002 | -15.38 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Xác nhận khung nhỏ (A2) → W | 115.45 | 40.1% | 0.421 | 15 | 7.7 | 0.403 | 0.438 | -10.43 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 127.62 | 49.7% | 0.813 | 7.88 | 16.2 | 0.792 | 0.838 | -15.54 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Momentum (/100) → 21 + R:R tối thiểu riêng khung 1W → 2 | 117.58 | 41.9% | 0.379 | 12.35 | 9.52 | 0.357 | 0.398 | -12.72 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Cổng Dow → CHẶT + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần Divergence (/100) → 12 | 77.82 | 48.8% | 0.633 | 9.03 | 8.62 | 0.27 | 0.956 | -13.44 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Coin phải mạnh hơn BTC trong N ngày → 14 | 98.11 | 48.8% | 0.811 | 8.09 | 12.13 | 0.691 | 0.955 | -21.43 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: EMA 50 → 1.13 | 124.77 | 45.9% | 0.725 | 9.64 | 12.94 | 0.678 | 0.784 | -15.92 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL riêng khung 4H (ATR) → 0.3 | 182.04 | 38.8% | 0.599 | 17.29 | 10.53 | 0.506 | 0.694 | -14.03 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Mức RSI 30/70 → 1.13 | 72.29 | 43.2% | 0.578 | 10.74 | 6.73 | 0.512 | 0.65 | -8.13 |  |

### Vòng 157 — ngẫu nhiên nhiều thông số · mốc: tổng 131.23R, win 52.4%, rủi ro tụt vốn 7.24R, lời÷rủi ro 18.13

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Fib sóng 4 → 0.938 + Khung lớn phải tăng (trend ≥) → 0.375 | 118.14 | 48.7% | 0.777 | 8.27 | 14.29 | 0.735 | 0.822 | -15.54 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 35.63 | 40.9% | 0.405 | 10.23 | 3.48 | 0.311 | 0.522 | -10.01 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Break mây Ichimoku → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 114.08 | 49.4% | 0.704 | 8.73 | 13.07 | 0.548 | 0.89 | -14.7 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 | 126.78 | 51.4% | 0.88 | 7.72 | 16.42 | 0.749 | 1.027 | -15.46 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 + Khung lớn phải tăng (trend ≥) → 0.375 | 125.43 | 51.7% | 0.842 | 7.61 | 16.48 | 0.686 | 1.017 | -11.7 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần SL (/100) → 9 | 123.28 | 50.3% | 0.806 | 7.98 | 15.45 | 0.801 | 0.81 | -13.94 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 115.65 | 50.3% | 0.776 | 8.05 | 14.37 | 0.626 | 0.955 | -13.97 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm tối thiểu của vùng đặt SL → 4 | 122.83 | 50.7% | 0.841 | 7.85 | 15.65 | 0.778 | 0.912 | -13.48 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Xác nhận khung nhỏ (A2) → W + Coin phải mạnh hơn BTC trong N ngày → 14 | 53.99 | 38.3% | 0.269 | 17.93 | 3.01 | 0.192 | 0.333 | -17.05 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 167.18 | 38.7% | 0.599 | 16.98 | 9.85 | 0.403 | 0.789 | -12.25 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 | 126.29 | 51% | 0.848 | 7.67 | 16.47 | 0.716 | 1 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần Divergence (/100) → 9 | 110.13 | 46.5% | 0.64 | 9.05 | 12.17 | 0.592 | 0.685 | -10.72 |  |

### Vòng 156 — ngẫu nhiên nhiều thông số · mốc: tổng 131.23R, win 52.4%, rủi ro tụt vốn 7.41R, lời÷rủi ro 17.71

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 + Cộng điểm phân kỳ dương ẩn → 2.63 | 28.98 | 53.8% | 0.168 | 7.04 | 4.12 | 0.244 | 0.095 | -9.59 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Mức MACD → 0.875 | 127.83 | 50.9% | 0.804 | 8.38 | 15.25 | 0.705 | 0.92 | -14.16 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: EMA 200 → 1 | 123.54 | 51.3% | 0.792 | 7.78 | 15.88 | 0.689 | 0.921 | -10.14 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: BOS → 1 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 | 134 | 50.6% | 0.838 | 8.44 | 15.88 | 0.722 | 0.975 | -14.96 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Trend (/100) → 12 + Ngưỡng điểm vào kèo → 77 + Cổng Dow → CHẶT | 80.52 | 50.9% | 0.706 | 7.46 | 10.79 | 0.346 | 1.019 | -13.49 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 88.84 | 45.2% | 0.608 | 9.77 | 9.09 | 0.48 | 0.764 | -12.77 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 36.78 | 54.7% | 0.216 | 5.73 | 6.42 | 0.281 | 0.147 | -9.86 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần Momentum (/100) → 25 | 121.66 | 52.7% | 0.833 | 7.34 | 16.57 | 0.665 | 1.027 | -14.96 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 87.92 | 41.4% | 0.379 | 12.7 | 6.92 | 0.405 | 0.353 | -8.98 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: EMA 200 → 1 + Đệm SL riêng khung 1D (ATR) → 0.3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 77.78 | 39.9% | 0.477 | 13.83 | 5.62 | 0.5 | 0.453 | -6.31 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Entry (/100) → 33 | 83.95 | 47% | 0.718 | 8.81 | 9.53 | 0.549 | 0.921 | -20.4 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Xác nhận khung nhỏ (A2) → W + Điểm tối thiểu của vùng đặt SL → 4 | 70.39 | 40.6% | 0.402 | 13.21 | 5.33 | 0.415 | 0.388 | -15.57 |  |
