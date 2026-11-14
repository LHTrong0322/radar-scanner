# Tối ưu tự động (chạy liên tục) — vòng 213

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 2240 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.2% | 106.09R | 0.651 | 5.74R | 9.49R | 11.18 | 34 | 11.8% | -16.07R | -0.473 | 16.07R |
| **Tốt nhất** | 146 | 52.7% | 131.28R | 0.899 | 5.15R | 7.25R | 18.11 | 31 | 12.9% | -14.96R | -0.483 | 14.96R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 53.6% | 33.37R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.93R | 2 | 0% | -2.04R |
| 4H | 107 | 53.3% | 90.97R | 22 | 18.2% | -7.26R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 138 (Ghép: Điểm vùng: HVN anchored → 0.125 + Khoảng cách tối thiểu TP1 (ATR) → 0.875).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.2% | 106.09R | 9.49R | 11.18 | 34 | 11.8% | -16.07R |
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

### Vòng 213 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.25R, lời÷rủi ro 18.11

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số TP tối đa → 2 + Trọng số phần Elliott (/100) → 10 | 126.34 | 51.4% | 0.865 | 7.5 | 16.85 | 0.744 | 1.004 | -14.96 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 | 98.19 | 50% | 0.818 | 7.96 | 12.34 | 0.683 | 0.984 | -18.17 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: POC anchored → 4 | 121.06 | 44.5% | 0.533 | 11.37 | 10.65 | 0.577 | 0.491 | -13.71 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 91.95 | 46.8% | 0.538 | 9.5 | 9.68 | 0.44 | 0.639 | -14.42 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Số TP tối đa → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 142.41 | 46.1% | 0.619 | 9.85 | 14.46 | 0.688 | 0.551 | -17.4 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: HVN anchored → 0.188 | 117.77 | 49.7% | 0.801 | 7.92 | 14.87 | 0.715 | 0.891 | -16 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + SL tối đa (% Entry) → 0.425 + Khung lớn phải tăng (trend ≥) → 0.375 | 122.27 | 50.3% | 0.855 | 7.86 | 15.56 | 0.702 | 1.023 | -14.96 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: EMA 50 → 0.75 | 128.17 | 52.4% | 0.884 | 7.38 | 17.37 | 0.747 | 1.043 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 126.34 | 51.4% | 0.854 | 7.56 | 16.71 | 0.716 | 1.016 | -14.96 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 74.89 | 46.6% | 0.646 | 8.92 | 8.4 | 0.424 | 0.918 | -20.35 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Fib sóng 4 → 1.56 | 94.64 | 42.2% | 0.547 | 10.56 | 8.96 | 0.433 | 0.68 | -11.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Cộng thêm ngưỡng điểm khung 1W → -1 | 130.26 | 52.4% | 0.886 | 7.26 | 17.94 | 0.755 | 1.043 | -15.22 |  |

### Vòng 212 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.1R, lời÷rủi ro 18.49

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Ngưỡng điểm vào kèo → 74 | 130.12 | 51.7% | 0.873 | 7.67 | 16.96 | 0.765 | 0.999 | -13.94 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 | 123.94 | 50.3% | 0.81 | 7.91 | 15.67 | 0.775 | 0.851 | -15.02 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + R:R tối thiểu tới TP1 → 2.38 | 78.47 | 45.5% | 0.541 | 9.76 | 8.04 | 0.636 | 0.447 | -21.72 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 130.03 | 51.7% | 0.885 | 7.54 | 17.25 | 0.786 | 0.999 | -14.36 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần R:R (/100) → 33 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 128.17 | 48.5% | 0.786 | 8.58 | 14.94 | 0.715 | 0.872 | -13.36 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + R:R tối thiểu riêng khung 1W → 2 | 91.63 | 49.3% | 0.611 | 8.8 | 10.41 | 0.584 | 0.64 | -15.71 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Trọng số phần Divergence (/100) → 12 | 129.07 | 51.4% | 0.884 | 7.29 | 17.71 | 0.784 | 0.999 | -13.94 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 1W → -1 + Số TP tối đa → 2 | 102.26 | 38.5% | 0.39 | 16.49 | 6.2 | 0.378 | 0.402 | -9.19 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: EMA 21 → 0.875 | 123.99 | 51.3% | 0.805 | 7.8 | 15.9 | 0.672 | 0.945 | -11.8 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Trọng số phần Elliott (/100) → 10 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 69.17 | 44.5% | 0.629 | 9.63 | 7.18 | 0.409 | 0.902 | -8.87 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 83.03 | 46.4% | 0.741 | 9.12 | 9.1 | 0.589 | 0.93 | -9.84 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: MACD cắt lên Signal → 0.438 | 130.45 | 52.4% | 0.887 | 7.29 | 17.89 | 0.777 | 1.015 | -13.94 |  |

### Vòng 211 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.35R, lời÷rủi ro 17.86

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 127.43 | 51.7% | 0.855 | 7.66 | 16.64 | 0.762 | 0.964 | -14.61 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + Xác nhận khung nhỏ (A2) → W | 83.73 | 38.3% | 0.321 | 17.11 | 4.89 | 0.358 | 0.284 | -6.61 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 125.11 | 49.4% | 0.782 | 8.47 | 14.77 | 0.698 | 0.879 | -16.06 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cổng Dow → TẮT | 135.83 | 43.6% | 0.564 | 11.96 | 11.36 | 0.659 | 0.485 | -19.82 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 107.94 | 49.3% | 0.72 | 8.89 | 12.14 | 0.561 | 0.9 | -12.38 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu riêng khung 1D → 2 | 100.74 | 42% | 0.536 | 13.02 | 7.74 | 0.517 | 0.551 | -11.14 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần Divergence (/100) → 12 | 98.74 | 45.7% | 0.705 | 9.47 | 10.43 | 0.456 | 0.969 | -16.49 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Ngưỡng điểm vào kèo → 77 | 113.03 | 50.7% | 0.785 | 7.79 | 14.51 | 0.605 | 0.98 | -13.48 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 111.11 | 49.3% | 0.805 | 8.17 | 13.6 | 0.633 | 0.998 | -17.19 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Lệnh chờ hết hạn sau (nến) → 8 + Trọng số phần Trend (/100) → 12 | 118.85 | 48.8% | 0.725 | 8.78 | 13.54 | 0.725 | 0.724 | -15.53 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 127.89 | 50.3% | 0.825 | 7.89 | 16.21 | 0.804 | 0.851 | -15.54 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + R:R tối thiểu riêng khung 1W → 2 | 114.87 | 50% | 0.798 | 7.91 | 14.52 | 0.704 | 0.891 | -16 |  |

### Vòng 210 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.36R, lời÷rủi ro 17.84

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: MACD cắt lên Signal → 0.438 + Cổng Dow → CHẶT | 82 | 48.4% | 0.651 | 9.38 | 8.74 | 0.421 | 0.829 | -12.39 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Fib sóng 4 → 1.56 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 118.85 | 51.7% | 0.809 | 7.98 | 14.89 | 0.778 | 0.844 | -14.14 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 129.1 | 51.3% | 0.861 | 7.56 | 17.08 | 0.743 | 0.999 | -15.22 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Khung lớn phải tăng (trend ≥) → 0.375 + R:R tối thiểu tới TP1 → 2.63 | 89.95 | 47.5% | 0.737 | 9.03 | 9.96 | 0.477 | 1.015 | -14.03 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Cộng điểm phân kỳ dương ẩn → 2.63 + Cộng thêm ngưỡng điểm khung 4H → 2 | 107.05 | 49.7% | 0.738 | 7.89 | 13.57 | 0.608 | 0.871 | -15.99 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khung lớn phải tăng (trend ≥) → 0.425 | 112.28 | 51% | 0.785 | 7.87 | 14.27 | 0.766 | 0.808 | -14.76 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Số TP tối đa → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 | 87.79 | 48.8% | 0.726 | 7.92 | 11.08 | 0.537 | 0.968 | -21.42 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Elliott (/100) → 6 | 126.9 | 52.4% | 0.887 | 7.2 | 17.63 | 0.782 | 1.01 | -16.75 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + R:R tối thiểu tới TP1 → 2.38 | 104.13 | 47% | 0.62 | 9.03 | 11.53 | 0.518 | 0.725 | -16.27 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Coin phải mạnh hơn BTC trong N ngày → 14 | 89.04 | 49.6% | 0.736 | 7.77 | 11.46 | 0.531 | 0.998 | -21.42 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần Divergence (/100) → 9 + Trọng số phần Elliott (/100) → 6 | 128.72 | 50% | 0.836 | 7.81 | 16.48 | 0.727 | 0.956 | -15.35 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 86.07 | 43.7% | 0.57 | 10.78 | 7.98 | 0.442 | 0.718 | -11.96 |  |

### Vòng 209 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.35R, lời÷rủi ro 17.86

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Khung lớn phải tăng (trend ≥) → 0.375 + Số TP tối đa → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 79.32 | 46.8% | 0.728 | 8.86 | 8.95 | 0.539 | 0.951 | -8.52 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Fib sóng 4 → 0.938 + Đệm SL riêng khung 1D (ATR) → 0.3 | 113.9 | 45.8% | 0.686 | 10.48 | 10.87 | 0.631 | 0.739 | -13.53 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: POC anchored → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 27.26 | 54.7% | 0.171 | 6.32 | 4.31 | 0.289 | 0.069 | -9.06 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Lệnh chờ hết hạn sau (nến) → 8 + Cộng thêm ngưỡng điểm khung 4H → 2 | 114.89 | 50.3% | 0.741 | 8.22 | 13.98 | 0.602 | 0.898 | -16.55 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: Break mây Ichimoku → 1 | 104.04 | 50.8% | 0.839 | 7.93 | 13.12 | 0.672 | 1.023 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng điểm phân kỳ dương ẩn → 2.63 + Xác nhận khung nhỏ (A2) → W | 111.46 | 39.3% | 0.417 | 15.43 | 7.22 | 0.406 | 0.428 | -10.48 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: POC anchored → 2 + R:R tối thiểu tới TP1 → 2.63 | 94.94 | 46.5% | 0.736 | 9.49 | 10 | 0.606 | 0.868 | -14.78 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + % chốt ở TP1 → 0.287 | 109.99 | 49.1% | 0.692 | 8.9 | 12.36 | 0.551 | 0.858 | -14.68 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm tối thiểu của vùng đặt SL → 4 | 26.45 | 39.3% | 0.315 | 10.99 | 2.41 | 0.205 | 0.461 | -6.21 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 4H → 2 + Ngưỡng điểm vào kèo → 77 | 89.54 | 38.5% | 0.363 | 16.3 | 5.49 | 0.337 | 0.384 | -8.76 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 182.8 | 39.1% | 0.601 | 17.63 | 10.37 | 0.509 | 0.697 | -12.92 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Entry (/100) → 33 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 103.24 | 50.3% | 0.702 | 8.02 | 12.87 | 0.671 | 0.737 | -15.14 |  |

### Vòng 208 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.38R, lời÷rủi ro 17.79

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Mức MACD → 0.875 + Điểm tối thiểu của vùng đặt SL → 4 | 115.57 | 48.6% | 0.826 | 8.31 | 13.91 | 0.671 | 1.009 | -12.06 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Lệnh chờ hết hạn sau (nến) → 8 | 125.5 | 40.7% | 0.416 | 16.26 | 7.72 | 0.42 | 0.412 | -5.97 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Số TP tối đa → 2 | 126.74 | 52% | 0.856 | 7.6 | 16.68 | 0.697 | 1.049 | -13.42 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 122.65 | 50.3% | 0.781 | 7.84 | 15.64 | 0.732 | 0.838 | -12.93 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 34.17 | 57.2% | 0.215 | 5.65 | 6.05 | 0.289 | 0.144 | -9.83 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Cộng thêm ngưỡng điểm khung 1D → 4 | 130.83 | 52.4% | 0.89 | 7.44 | 17.58 | 0.777 | 1.021 | -13.94 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 | 108.59 | 48.3% | 0.759 | 8.59 | 12.64 | 0.483 | 1.048 | -11.73 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Khung lớn phải tăng (trend ≥) → 0.375 + Số TP tối đa → 2 | 127.19 | 41.1% | 0.39 | 12.97 | 9.81 | 0.411 | 0.373 | -11.16 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: HVN anchored → 0.188 + R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 | 74.06 | 37.4% | 0.322 | 17.82 | 4.16 | 0.27 | 0.368 | -8.37 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 124.99 | 50.3% | 0.806 | 8 | 15.62 | 0.792 | 0.822 | -13.94 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: EMA 200 → 1 | 105.27 | 44.8% | 0.646 | 11.2 | 9.4 | 0.644 | 0.647 | -7.5 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: MACD cắt lên Signal → 0.563 | 130.26 | 52.4% | 0.886 | 7.66 | 17.01 | 0.755 | 1.043 | -15.22 |  |

### Vòng 207 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.25R, lời÷rủi ro 18.11

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm tối thiểu của vùng đặt SL → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Đệm SL riêng khung 1D (ATR) → 0.3 | 101.76 | 45.3% | 0.678 | 11.27 | 9.03 | 0.632 | 0.72 | -16.55 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Số TP tối đa → 2 | 108.82 | 45.9% | 0.633 | 9.22 | 11.8 | 0.545 | 0.719 | -12.12 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần SL (/100) → 9 + Đệm SL riêng khung 4H (ATR) → 0.3 + Xác nhận khung nhỏ (A2) → W | 72.64 | 30.9% | 0.195 | 34.3 | 2.12 | 0.153 | 0.222 | -41.92 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 95.38 | 49.2% | 0.795 | 8.14 | 11.72 | 0.672 | 0.956 | -22.2 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Break mây Ichimoku → 1 | 117.03 | 49.3% | 0.791 | 8.23 | 14.22 | 0.654 | 0.948 | -16.24 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trọng số phần Divergence (/100) → 9 + R:R tối thiểu riêng khung 4H → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 148.34 | 40.2% | 0.389 | 13.5 | 10.99 | 0.407 | 0.374 | -14.6 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 33.27 | 56.4% | 0.213 | 5.81 | 5.73 | 0.288 | 0.142 | -9.83 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Trọng số phần Momentum (/100) → 25 | 119.49 | 51.7% | 0.824 | 7.39 | 16.17 | 0.67 | 0.999 | -13.94 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu tới TP1 → 2.63 | 90.03 | 48.6% | 0.841 | 8.35 | 10.78 | 0.712 | 0.994 | -17.46 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: POC anchored → 4 + R:R tối thiểu tới TP1 → 2.63 | 138.71 | 43.2% | 0.73 | 11.15 | 12.44 | 0.62 | 0.834 | -13.87 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 24.41 | 38.4% | 0.284 | 11.82 | 2.07 | 0.181 | 0.421 | -6.21 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 1W (ATR) → 0.3 | 105.01 | 44.7% | 0.7 | 9.96 | 10.54 | 0.591 | 0.812 | -15.57 |  |

### Vòng 206 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.3R, lời÷rủi ro 17.98

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Điểm vùng: BOS → 3 + Điểm vùng: POC anchored → 4 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 114.6 | 49.6% | 0.813 | 8.4 | 13.64 | 0.672 | 0.96 | -10.05 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 33.73 | 56.6% | 0.212 | 5.65 | 5.97 | 0.283 | 0.144 | -9.07 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Mức MACD → 1.13 | 26.23 | 39.5% | 0.305 | 11.27 | 2.33 | 0.232 | 0.397 | -10.01 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 1W → 2 + Ngưỡng điểm vào kèo → 77 | 99.91 | 46.9% | 0.699 | 8.5 | 11.75 | 0.759 | 0.634 | -12.69 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Trend (/100) → 19 + Điểm vùng: EMA 21 → 1.13 | 131.08 | 51.3% | 0.874 | 7.4 | 17.71 | 0.737 | 1.035 | -12.92 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 129.83 | 44.8% | 0.587 | 10.19 | 12.74 | 0.624 | 0.553 | -17.44 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần Divergence (/100) → 12 | 119.13 | 49% | 0.789 | 8.11 | 14.69 | 0.653 | 0.943 | -15.62 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: HVN cố định → 0.563 | 126.2 | 51% | 0.859 | 7.64 | 16.52 | 0.761 | 0.972 | -15.21 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cổng Dow → TẮT + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Fib sóng 4 → 1.56 | 116.52 | 42.1% | 0.733 | 11.24 | 10.37 | 0.68 | 0.786 | -17.22 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + SL tối đa (% Entry) → 0.425 | 125.91 | 50% | 0.797 | 8.21 | 15.34 | 0.693 | 0.918 | -15.53 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Trend (/100) → 12 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 46.2 | 40.2% | 0.453 | 11.04 | 4.18 | 0.306 | 0.619 | -16.25 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Break mây Ichimoku → 3 + Cổng Dow → TẮT | 147.36 | 40.3% | 0.425 | 14.87 | 9.91 | 0.518 | 0.335 | -22.07 |  |

### Vòng 205 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.34R, lời÷rủi ro 17.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Cộng thêm ngưỡng điểm khung 4H → 2 + R:R tối thiểu riêng khung 1D → 2 | 109.82 | 46.5% | 0.646 | 8.81 | 12.47 | 0.592 | 0.698 | -11.73 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + R:R tối thiểu tới TP1 → 2.38 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 118.72 | 46.4% | 0.715 | 9.63 | 12.33 | 0.759 | 0.676 | -15.87 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần Trend (/100) → 19 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 85.75 | 44.1% | 0.564 | 10.85 | 7.9 | 0.375 | 0.811 | -9.64 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.563 | 114.28 | 46.6% | 0.701 | 10.12 | 11.29 | 0.663 | 0.738 | -13.57 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 97.32 | 48.6% | 0.658 | 9.2 | 10.58 | 0.406 | 0.954 | -12.38 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Ngưỡng điểm vào kèo → 77 | 128.23 | 52.1% | 0.878 | 7.5 | 17.1 | 0.778 | 0.99 | -13.48 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 110.45 | 47.6% | 0.762 | 8.78 | 12.58 | 0.535 | 1.005 | -16 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: Mức RSI 30/70 → 1.13 | 156.08 | 45.8% | 0.729 | 10.4 | 15.01 | 0.673 | 0.785 | -19.85 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 32.57 | 56.7% | 0.207 | 6.19 | 5.26 | 0.277 | 0.138 | -8.78 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 2 + R:R tối thiểu riêng khung 4H → 2 | 121.18 | 42.6% | 0.388 | 12.81 | 9.46 | 0.419 | 0.362 | -12.15 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 110.11 | 49% | 0.729 | 8.99 | 12.25 | 0.563 | 0.916 | -11.36 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 | 90.54 | 46.2% | 0.624 | 9.62 | 9.41 | 0.461 | 0.82 | -12.72 |  |

### Vòng 204 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.2R, lời÷rủi ro 18.23

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần Elliott (/100) → 10 | 98.91 | 37.3% | 0.38 | 16.79 | 5.89 | 0.359 | 0.401 | -9.4 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: MACD cắt lên Signal → 0.438 | 86.01 | 48% | 0.688 | 9.4 | 9.15 | 0.458 | 0.971 | -18.85 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + % chốt ở TP1 → 0.287 + Điểm tối thiểu của vùng đặt SL → 2 | 100.95 | 50.3% | 0.678 | 8.37 | 12.06 | 0.668 | 0.687 | -13.69 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần R:R (/100) → 28 | 119.8 | 51.7% | 0.826 | 7.41 | 16.17 | 0.674 | 0.999 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Trend (/100) → 12 + R:R tối thiểu riêng khung 4H → 2 | 42.47 | 37.3% | 0.251 | 14.38 | 2.95 | 0.277 | 0.223 | -5.01 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Mức MACD → 1.13 | 141.48 | 42.4% | 0.438 | 11.91 | 11.88 | 0.465 | 0.414 | -11.71 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Điểm vùng: EMA 50 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 101.97 | 50% | 0.698 | 8.7 | 11.72 | 0.621 | 0.792 | -13.71 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Entry (/100) → 33 + Điểm vùng: POC volume profile cố định → 0.813 + Cổng Dow → TẮT | 124.95 | 42.3% | 0.581 | 12.2 | 10.24 | 0.587 | 0.575 | -15.79 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Fib sóng 4 → 0.938 | 119.61 | 49.7% | 0.792 | 8.15 | 14.68 | 0.764 | 0.822 | -13.94 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 75.24 | 42.9% | 0.448 | 12.53 | 6 | 0.283 | 0.621 | -10.56 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: HVN cố định → 0.563 + Cộng điểm phân kỳ dương ẩn → 3.5 | 98.59 | 49.6% | 0.815 | 8.13 | 12.13 | 0.672 | 0.998 | -21.43 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.563 | 105.06 | 45.7% | 0.761 | 9.37 | 11.21 | 0.519 | 1.025 | -14.24 |  |
