# Tối ưu tự động (chạy liên tục) — vòng 120

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 1150 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.9% | 101.67R | 0.628 | 5.74R | 9.49R | 10.71 | 34 | 11.8% | -16.07R | -0.473 | 16.07R |
| **Tốt nhất** | 144 | 52.1% | 123.43R | 0.857 | 5.14R | 7.48R | 16.50 | 31 | 12.9% | -14.96R | -0.483 | 14.96R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 53.6% | 33.37R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.93R | 2 | 0% | -2.04R |
| 4H | 105 | 52.4% | 83.12R | 22 | 18.2% | -7.25R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 103 (Ghép: Khoảng cách tối thiểu TP1 (ATR) → 1 + Điểm vùng: Mức sai Elliott (cho SL) → 3).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.9% | 101.67R | 9.49R | 10.71 | 34 | 11.8% | -16.07R |
| **Đề xuất** | 184 | 50% | 153.67R | 7.84R | 19.60 | 34 | 11.8% | -16.2R |

| Thông số | Bot thật | Đề xuất |
|---|---|---|
| Ngưỡng điểm vào kèo | 70 | **75** |
| SL tối đa (% Entry) | 0.35 | **0.387** |
| Khoảng cách tối thiểu TP1 (ATR) | 0.75 | **1** |
| Lệnh chờ hết hạn sau (nến) | 8 | **7** |
| Số TP tối đa | 2 | **3** |
| Điểm ADX > 25 và +DI trội (Momentum) | 3 | **4** |
| Điểm ADX < 13 cạn lực giảm (Momentum) | 1.5 | **2.5** |
| Lọc BTC: giá trên EMA bao nhiêu ngày | 200 | **150** |
| Trọng số phần Trend (/100) | 30 | **15** |
| Trọng số phần Momentum (/100) | 15 | **23** |
| Trọng số phần R:R (/100) | 20 | **30** |
| Trọng số phần SL (/100) | 5 | **8** |
| Điểm vùng: HVN cố định | 0.25 | **0.5** |
| Điểm vùng: Mức sai Elliott (cho SL) | 2 | **3** |

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
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) | 2.5 | **3.13** |
| Điểm vùng: HVN cố định | 0.25 | **0.5** |

## Các thay đổi đã nhận (mới nhất trước)

| Vòng | Thông số | Từ → Thành | Tổng R | Tỷ lệ thắng | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro |
|---|---|---|---|---|---|---|
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

### Vòng 120 — từng thông số · mốc: tổng 123.43R, win 52.1%, rủi ro tụt vốn 7.48R, lời÷rủi ro 16.50

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Cộng điểm phân kỳ dương ẩn: 3 → 2.63 | 123.43 | 52.1% | 0.857 | 7.48 | 16.5 | 0.747 | 0.987 | -14.96 |  |
| Cộng điểm phân kỳ dương ẩn: 3 → 3.5 | 123.23 | 51.7% | 0.85 | 7.62 | 16.17 | 0.735 | 0.987 | -14.96 |  |
| Lọc BTC: giá trên EMA bao nhiêu ngày: 150 → 138 | 122.68 | 51.7% | 0.846 | 7.55 | 16.25 | 0.747 | 0.961 | -13.64 |  |
| Lọc BTC: giá trên EMA bao nhiêu ngày: 150 → 163 | 122.68 | 51.7% | 0.846 | 7.55 | 16.25 | 0.747 | 0.961 | -13.64 |  |
| Coin phải mạnh hơn BTC trong N ngày: null → 14 | 93.37 | 49.2% | 0.791 | 8.43 | 11.08 | 0.685 | 0.926 | -21.42 |  |
| Bỏ kèo khi biến động > N lần bình thường: null → 1.5 | 78.96 | 45.9% | 0.724 | 9.19 | 8.59 | 0.614 | 0.865 | -9.89 |  |
| Thoát lệnh ì sau N nến chưa tới TP1: null → 3 | 28.8 | 55.5% | 0.186 | 6.21 | 4.64 | 0.245 | 0.128 | -10.25 |  |
| Sau TP1: SL bám giá cao nhất − N×R: null → 0.5 | 119.22 | 49% | 0.779 | 8.31 | 14.35 | 0.739 | 0.826 | -15.54 |  |
| Trọng số phần Trend (/100): 15 → 12 | 122.23 | 51% | 0.855 | 7.64 | 16 | 0.777 | 0.943 | -14.96 |  |
| Trọng số phần Trend (/100): 15 → 19 | 123.23 | 51.7% | 0.85 | 7.62 | 16.17 | 0.735 | 0.987 | -14.96 |  |
| Trọng số phần Momentum (/100): 23 → 21 | 123.23 | 51.7% | 0.85 | 7.62 | 16.17 | 0.735 | 0.987 | -14.96 |  |
| Trọng số phần Momentum (/100): 23 → 25 | 122.97 | 51.7% | 0.86 | 7.57 | 16.24 | 0.77 | 0.965 | -14.96 |  |

### Vòng 119 — từng thông số · mốc: tổng 123.43R, win 52.1%, rủi ro tụt vốn 7.49R, lời÷rủi ro 16.48

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Số nến mỗi bên để xác định đỉnh/đáy Dow: 4 → 3 | 80.33 | 45.7% | 0.496 | 10.1 | 7.95 | 0.351 | 0.641 | -13.38 |  |
| Số nến mỗi bên để xác định đỉnh/đáy Dow: 4 → 5 | 64.46 | 45.3% | 0.504 | 10.19 | 6.33 | 0.411 | 0.609 | -7.74 |  |
| Trần điểm khi chart yếu (Trend < x): -0.3 → -0.375 | 123.43 | 52.1% | 0.857 | 7.49 | 16.48 | 0.747 | 0.987 | -14.96 |  |
| Trần điểm khi chart yếu (Trend < x): -0.3 → -0.225 | 123.43 | 52.1% | 0.857 | 7.49 | 16.48 | 0.747 | 0.987 | -14.96 |  |
| Khung lớn phải tăng (trend ≥): 0.4 → 0.375 | 120.17 | 51.4% | 0.834 | 7.62 | 15.77 | 0.718 | 0.968 | -14.96 |  |
| Khung lớn phải tăng (trend ≥): 0.4 → 0.425 | 119.66 | 51.4% | 0.855 | 7.66 | 15.62 | 0.711 | 1.025 | -14.99 |  |
| Xác nhận khung nhỏ (A2): ON → W | 106.27 | 39.8% | 0.407 | 15.67 | 6.78 | 0.405 | 0.409 | -10.49 |  |
| Cổng Dow: LỎNG → TẮT | 151.77 | 46% | 0.713 | 10.53 | 14.41 | 0.666 | 0.759 | -21.47 |  |
| Cổng Dow: LỎNG → CHẶT | 92.23 | 51.4% | 0.831 | 7.02 | 13.14 | 0.579 | 1.053 | -16.02 |  |
| Số TP tối đa: 3 → 2 | 121.03 | 52.1% | 0.84 | 7.49 | 16.16 | 0.708 | 0.998 | -14.96 |  |
| Điểm ADX > 25 và +DI trội (Momentum): 4 → 3 | 106.21 | 50.3% | 0.733 | 8.31 | 12.78 | 0.745 | 0.718 | -14.72 |  |
| Điểm ADX < 13 cạn lực giảm (Momentum): 2.5 → 2.44 | 123.43 | 52.1% | 0.857 | 7.49 | 16.48 | 0.747 | 0.987 | -14.96 |  |

### Vòng 118 — từng thông số · mốc: tổng 123.43R, win 52.1%, rủi ro tụt vốn 7.51R, lời÷rủi ro 16.44

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Cộng thêm ngưỡng điểm khung 1W: 0 → -1 | 123.43 | 52.1% | 0.857 | 7.51 | 16.44 | 0.747 | 0.987 | -14.96 |  |
| Cộng thêm ngưỡng điểm khung 1W: 0 → 2 | 122.68 | 51.4% | 0.852 | 7.58 | 16.18 | 0.754 | 0.965 | -15.38 |  |
| Điểm tối thiểu của vùng đặt SL: 3 → 2 | 120.21 | 51.7% | 0.818 | 7.79 | 15.43 | 0.747 | 0.897 | -13.94 |  |
| Điểm tối thiểu của vùng đặt SL: 3 → 4 | 119.37 | 50.7% | 0.829 | 7.7 | 15.5 | 0.754 | 0.915 | -14.84 |  |
| % chốt ở TP1: 0.3 → 0.287 | 123.43 | 52.1% | 0.857 | 7.53 | 16.39 | 0.746 | 0.988 | -14.94 |  |
| % chốt ở TP1: 0.3 → 0.307 | 123.42 | 52.1% | 0.857 | 7.51 | 16.43 | 0.748 | 0.986 | -14.97 |  |
| Khoảng cách tối thiểu TP1 (ATR): 0.75 → 0.688 | 119.96 | 48.9% | 0.863 | 8.37 | 14.33 | 0.679 | 1.085 | -13.2 |  |
| Khoảng cách tối thiểu TP1 (ATR): 0.75 → 0.813 | 123.77 | 50.3% | 0.82 | 7.97 | 15.53 | 0.754 | 0.894 | -15.35 |  |
| Lệnh chờ hết hạn sau (nến): 7 → 6 | 101.71 | 49.6% | 0.765 | 7.87 | 12.92 | 0.676 | 0.872 | -13.57 |  |
| Lệnh chờ hết hạn sau (nến): 7 → 8 | 117.55 | 49.4% | 0.754 | 8.57 | 13.72 | 0.658 | 0.865 | -16.55 |  |
| Điểm tối thiểu vùng đặt lệnh chờ: 3 → 2 | 121.9 | 52.4% | 0.841 | 7.55 | 16.15 | 0.706 | 0.997 | -11.7 |  |
| Điểm tối thiểu vùng đặt lệnh chờ: 3 → 4 | 117.89 | 50.3% | 0.771 | 7.9 | 14.92 | 0.762 | 0.78 | -13.95 |  |

### Vòng 117 — từng thông số · mốc: tổng 123.43R, win 52.1%, rủi ro tụt vốn 7.54R, lời÷rủi ro 16.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Đệm SL dưới vùng hỗ trợ (ATR): 1 → 0.95 | 128.46 | 51.3% | 0.856 | 7.88 | 16.3 | 0.711 | 1.027 | -14.85 |  |
| Đệm SL dưới vùng hỗ trợ (ATR): 1 → 1.05 | 103.28 | 48.9% | 0.765 | 8.54 | 12.09 | 0.591 | 0.964 | -16.78 |  |
| R:R tối thiểu riêng khung 4H: null → 2 | 133.47 | 42.5% | 0.414 | 11.98 | 11.14 | 0.442 | 0.391 | -13.14 |  |
| Đệm SL riêng khung 4H (ATR): null → 0.3 | 176.51 | 39.2% | 0.577 | 17.56 | 10.05 | 0.454 | 0.708 | -16.15 |  |
| Cộng thêm ngưỡng điểm khung 4H: 0 → -1 | 123.43 | 52.1% | 0.857 | 7.54 | 16.37 | 0.747 | 0.987 | -14.96 |  |
| Cộng thêm ngưỡng điểm khung 4H: 0 → 2 | 122.97 | 51.7% | 0.86 | 7.46 | 16.48 | 0.77 | 0.965 | -14.96 |  |
| R:R tối thiểu riêng khung 1D: null → 2 | 112.57 | 46.2% | 0.666 | 9.32 | 12.08 | 0.666 | 0.666 | -11.74 |  |
| Đệm SL riêng khung 1D (ATR): null → 0.3 | 96.48 | 45% | 0.603 | 11.32 | 8.52 | 0.513 | 0.689 | -13.57 |  |
| Cộng thêm ngưỡng điểm khung 1D: 5 → 4 | 122.97 | 51.7% | 0.848 | 7.5 | 16.4 | 0.747 | 0.965 | -14.96 |  |
| Cộng thêm ngưỡng điểm khung 1D: 5 → 7 | 119.21 | 51.4% | 0.828 | 7.86 | 15.17 | 0.693 | 0.987 | -13.06 |  |
| R:R tối thiểu riêng khung 1W: null → 2 | 112.99 | 49.7% | 0.769 | 7.9 | 14.3 | 0.705 | 0.837 | -16 |  |
| Đệm SL riêng khung 1W (ATR): null → 0.3 | 111.25 | 47.1% | 0.795 | 8.93 | 12.46 | 0.643 | 0.95 | -16 |  |

### Vòng 116 — tinh chỉnh giá trị giữa · mốc: tổng 119.62R, win 51.4%, rủi ro tụt vốn 7.75R, lời÷rủi ro 15.43

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: Kháng cự cũ bị phá: 1.5 → 1.31 (tinh chỉnh) | 120.44 | 51.7% | 0.831 | 7.72 | 15.6 | 0.707 | 0.979 | -15.46 |  |
| Điểm vùng: Kháng cự cũ bị phá: 1.5 → 1.69 (tinh chỉnh) | 119.4 | 51% | 0.835 | 7.96 | 15 | 0.712 | 0.978 | -16.75 |  |
| Điểm vùng: Fib 0.618 sóng 2: 2.5 → 2.19 (tinh chỉnh) | 119.62 | 51.4% | 0.842 | 7.75 | 15.43 | 0.724 | 0.979 | -15.46 |  |
| Điểm vùng: Fib 0.618 sóng 2: 2.5 → 2.81 (tinh chỉnh) | 119.62 | 51.4% | 0.842 | 7.75 | 15.43 | 0.724 | 0.979 | -15.46 |  |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4): 2.5 → 1.88 (tinh chỉnh) | 109.58 | 51.5% | 0.83 | 7 | 15.65 | 0.703 | 0.957 | -15.46 |  |
| Điểm vùng: Đỉnh sóng 1 (sàn sóng 4): 2.5 → 3.13 (tinh chỉnh) | 123.43 | 52.1% | 0.857 | 7.41 | 16.66 | 0.747 | 0.987 | -14.96 | ✅ |
| Điểm vùng: Mức RSI 30/70: 1 → 0.75 (tinh chỉnh) | 120.86 | 50.3% | 0.79 | 8.29 | 14.58 | 0.695 | 0.906 | -15.46 |  |
| Điểm vùng: Mức RSI 30/70: 1 → 1.25 (tinh chỉnh) | 119.37 | 51.4% | 0.841 | 7.75 | 15.4 | 0.721 | 0.979 | -15.46 |  |
| Điểm vùng: Mức MACD: 1 → 0.75 (tinh chỉnh) | 116.67 | 51.4% | 0.81 | 7.82 | 14.92 | 0.739 | 0.889 | -15.48 |  |
| Điểm vùng: Mức MACD: 1 → 1.25 (tinh chỉnh) | 119.5 | 51% | 0.836 | 7.98 | 14.97 | 0.713 | 0.979 | -17.33 |  |
| Điểm vùng: POC volume profile cố định: 0.75 → 0.625 (tinh chỉnh) | 122.3 | 51.4% | 0.849 | 7.85 | 15.58 | 0.74 | 0.979 | -15.46 |  |
| Điểm vùng: POC volume profile cố định: 0.75 → 0.875 (tinh chỉnh) | 119.63 | 51.4% | 0.842 | 7.75 | 15.44 | 0.724 | 0.979 | -15.46 |  |

Nhận: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) 2.5 → 3.13

### Vòng 115 — tinh chỉnh giá trị giữa · mốc: tổng 119.62R, win 51.4%, rủi ro tụt vốn 7.75R, lời÷rủi ro 15.43

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Trọng số phần Divergence (/100): 10 → 9 (tinh chỉnh) | 119.62 | 51.4% | 0.842 | 7.75 | 15.43 | 0.724 | 0.979 | -15.46 |  |
| Trọng số phần Divergence (/100): 10 → 12 (tinh chỉnh) | 119.43 | 51% | 0.835 | 7.95 | 15.02 | 0.712 | 0.979 | -15.46 |  |
| Điểm vùng: Đỉnh/đáy pivot Dow: 2.5 → 2.19 (tinh chỉnh) | 110.42 | 50.3% | 0.751 | 8.74 | 12.63 | 0.656 | 0.861 | -12.88 |  |
| Điểm vùng: Đỉnh/đáy pivot Dow: 2.5 → 2.81 (tinh chỉnh) | 116.53 | 51.1% | 0.826 | 7.79 | 14.96 | 0.724 | 0.946 | -15.46 |  |
| Điểm vùng: EMA 50: 0.75 → 0.563 (tinh chỉnh) | 112.97 | 51.1% | 0.801 | 7.76 | 14.56 | 0.645 | 0.978 | -15.46 |  |
| Điểm vùng: EMA 50: 0.75 → 0.94 (tinh chỉnh) | 113.16 | 52.1% | 0.786 | 7.58 | 14.93 | 0.622 | 0.979 | -15.46 |  |
| Điểm vùng: EMA 21: 1 → 0.875 (tinh chỉnh) | 119.04 | 51% | 0.832 | 7.78 | 15.3 | 0.751 | 0.922 | -15.46 |  |
| Điểm vùng: EMA 21: 1 → 1.13 (tinh chỉnh) | 120.43 | 50.3% | 0.831 | 7.85 | 15.34 | 0.705 | 0.973 | -15.46 |  |
| Điểm vùng: Kháng cự cũ bị phá: 1.5 → 1.13 (tinh chỉnh) | 120.42 | 51.7% | 0.831 | 7.85 | 15.34 | 0.707 | 0.979 | -14.96 |  |
| Điểm vùng: Kháng cự cũ bị phá: 1.5 → 1.88 (tinh chỉnh) | 115.16 | 50.3% | 0.805 | 8.21 | 14.03 | 0.69 | 0.944 | -16.75 |  |
| Điểm vùng: Fib 0.618 sóng 2: 2.5 → 1.88 (tinh chỉnh) | 119.62 | 51.4% | 0.842 | 7.75 | 15.43 | 0.724 | 0.979 | -15.46 |  |
| Điểm vùng: Fib 0.618 sóng 2: 2.5 → 3.13 (tinh chỉnh) | 119.63 | 51.4% | 0.842 | 7.72 | 15.5 | 0.724 | 0.979 | -15.46 |  |

### Vòng 114 — tinh chỉnh giá trị giữa · mốc: tổng 119.62R, win 51.4%, rủi ro tụt vốn 7.68R, lời÷rủi ro 15.58

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm ADX < 13 cạn lực giảm (Momentum): 2.5 → 2.44 (tinh chỉnh) | 119.62 | 51.4% | 0.842 | 7.68 | 15.58 | 0.724 | 0.979 | -15.46 |  |
| Trọng số phần R:R (/100): 30 → 28 (tinh chỉnh) | 117.4 | 50% | 0.827 | 7.77 | 15.11 | 0.73 | 0.935 | -15.46 |  |
| Trọng số phần R:R (/100): 30 → 33 (tinh chỉnh) | 119.43 | 51% | 0.835 | 7.93 | 15.06 | 0.712 | 0.979 | -15.46 |  |
| Trọng số phần Divergence (/100): 10 → 8 (tinh chỉnh) | 119.62 | 51.4% | 0.842 | 7.68 | 15.58 | 0.724 | 0.979 | -15.46 |  |
| Trọng số phần Divergence (/100): 10 → 13 (tinh chỉnh) | 119.43 | 51% | 0.835 | 7.93 | 15.06 | 0.712 | 0.979 | -15.46 |  |
| Trọng số phần SL (/100): 8 → 7 (tinh chỉnh) | 119.62 | 51.4% | 0.842 | 7.68 | 15.58 | 0.724 | 0.979 | -15.46 |  |
| Trọng số phần SL (/100): 8 → 9 (tinh chỉnh) | 117.96 | 50.3% | 0.825 | 8.02 | 14.71 | 0.712 | 0.957 | -15.46 |  |
| Điểm vùng: Đỉnh/đáy pivot Dow: 2.5 → 1.88 (tinh chỉnh) | 111.2 | 49.3% | 0.772 | 8.51 | 13.07 | 0.693 | 0.861 | -12.88 |  |
| Điểm vùng: Đỉnh/đáy pivot Dow: 2.5 → 3.13 (tinh chỉnh) | 84.08 | 50% | 0.667 | 7.36 | 11.42 | 0.693 | 0.635 | -12.86 |  |
| Điểm vùng: EMA 50: 0.75 → 0.375 (tinh chỉnh) | 96.03 | 48.9% | 0.722 | 7.99 | 12.02 | 0.523 | 0.924 | -15.49 |  |
| Điểm vùng: EMA 50: 0.75 → 1.13 (tinh chỉnh) | 115.56 | 49.7% | 0.808 | 8.31 | 13.91 | 0.712 | 0.924 | -14.44 |  |
| Điểm vùng: EMA 21: 1 → 0.75 (tinh chỉnh) | 118.03 | 50.7% | 0.82 | 7.69 | 15.35 | 0.728 | 0.922 | -15.87 |  |
| Điểm vùng: EMA 21: 1 → 1.25 (tinh chỉnh) | 118.07 | 50% | 0.798 | 8.33 | 14.17 | 0.673 | 0.937 | -16.78 |  |

### Vòng 113 — ngẫu nhiên nhiều thông số · mốc: tổng 119.62R, win 51.4%, rủi ro tụt vốn 7.75R, lời÷rủi ro 15.43

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Trọng số phần R:R (/100) → 35 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 116.29 | 50% | 0.808 | 8.19 | 14.2 | 0.678 | 0.957 | -15.72 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: Biên mây Ichimoku → 1.8 | 115.24 | 48.6% | 0.779 | 8.56 | 13.46 | 0.674 | 0.902 | -11.95 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 3.75 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 82.3 | 48.1% | 0.619 | 8.37 | 9.83 | 0.717 | 0.492 | -12.08 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Trend (/100) → 19 + Trọng số phần R:R (/100) → 25 + Lệnh chờ hết hạn sau (nến) → 8 | 98.59 | 47.2% | 0.685 | 8.82 | 11.18 | 0.529 | 0.858 | -18.84 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Fib sóng 4 → 2.5 | 99.18 | 44.8% | 0.577 | 9.47 | 10.47 | 0.566 | 0.587 | -12.31 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần SL (/100) → 5 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 112.93 | 48.2% | 0.812 | 8.76 | 12.89 | 0.679 | 0.973 | -13.2 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Điểm tối thiểu của vùng đặt SL → 2 | 114.81 | 50.7% | 0.797 | 8.3 | 13.83 | 0.712 | 0.89 | -14.44 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Break mây Ichimoku → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 111.16 | 47.3% | 0.666 | 9.21 | 12.07 | 0.642 | 0.695 | -14.47 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Kháng cự cũ bị phá → 0.75 | 115.53 | 41.5% | 0.369 | 12.97 | 8.91 | 0.353 | 0.383 | -12.96 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Trọng số phần SL (/100) → 5 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL riêng khung 1W (ATR) → 0.3 | 89.09 | 48.2% | 0.81 | 8.17 | 10.9 | 0.49 | 1.076 | -17.57 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm tối thiểu của vùng đặt SL → 4 | 122.79 | 49% | 0.813 | 8.66 | 14.18 | 0.696 | 0.949 | -15.24 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trọng số phần Divergence (/100) → 5 + Trọng số phần SL (/100) → 10 | 134.48 | 43.3% | 0.64 | 11.06 | 12.16 | 0.621 | 0.658 | -22.44 |  |

### Vòng 112 — ngẫu nhiên nhiều thông số · mốc: tổng 119.62R, win 51.4%, rủi ro tụt vốn 7.71R, lời÷rủi ro 15.51

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.5 + SL tối đa (% Entry) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Vùng RSI 45–55 → 1.5 | 109.34 | 49.7% | 0.715 | 8.74 | 12.51 | 0.696 | 0.739 | -9.42 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + SL tối đa (% Entry) → 0.35 + Điểm vùng: Biên mây Ichimoku → 1.8 | 114.12 | 48.6% | 0.771 | 8.87 | 12.87 | 0.655 | 0.903 | -12.1 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 3.75 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 117.33 | 49.3% | 0.782 | 8.25 | 14.22 | 0.766 | 0.801 | -15.03 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.5 + Cộng thêm ngưỡng điểm khung 1D → 7 | 118.62 | 49% | 0.765 | 8.78 | 13.51 | 0.699 | 0.85 | -13.98 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Fib 0.618 sóng 2 → 3.75 + Đệm SL riêng khung 1D (ATR) → 0.3 | 93.64 | 45.2% | 0.604 | 10.76 | 8.7 | 0.501 | 0.699 | -14.07 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần Elliott (/100) → 6 | 118.68 | 50.7% | 0.824 | 8.18 | 14.51 | 0.712 | 0.953 | -14.14 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Cộng thêm ngưỡng điểm khung 1W → -1 | 118.74 | 51.4% | 0.802 | 8.08 | 14.7 | 0.682 | 0.948 | -14.96 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 50 → 1.5 + Số TP tối đa → 2 | 98.74 | 48.3% | 0.654 | 8.85 | 11.16 | 0.554 | 0.769 | -14.21 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.38 | 23.51 | 38.6% | 0.283 | 11.68 | 2.01 | 0.233 | 0.349 | -6.21 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.25 + Điểm vùng: EMA 21 → 1.5 + Số TP tối đa → 2 | 114.19 | 47% | 0.696 | 9.86 | 11.58 | 0.552 | 0.86 | -13.18 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: HVN cố định → 0.25 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 66.76 | 42.2% | 0.576 | 11.13 | 6 | 0.622 | 0.524 | -9.4 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 86.55 | 46.6% | 0.651 | 9.52 | 9.09 | 0.528 | 0.764 | -16.27 |  |

### Vòng 111 — ngẫu nhiên nhiều thông số · mốc: tổng 119.62R, win 51.4%, rủi ro tụt vốn 8.05R, lời÷rủi ro 14.86

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 15 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Mức RSI 30/70 → 0.5 | 18.71 | 52.1% | 0.128 | 7.56 | 2.47 | 0.214 | 0.029 | -10.3 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: BOS → 3 + Điểm vùng: Biên mây Ichimoku → 1.8 | 117.73 | 50% | 0.795 | 8.1 | 14.53 | 0.69 | 0.92 | -11.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.5 + Số TP tối đa → 2 | 116.93 | 50.7% | 0.801 | 8.23 | 14.21 | 0.703 | 0.91 | -16.88 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0 + Điểm tối thiểu của vùng đặt SL → 4 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 91.37 | 46.3% | 0.682 | 8.87 | 10.3 | 0.546 | 0.827 | -15.36 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 1.25 + Số TP tối đa → 2 + Điểm vùng: EMA 200 → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 59.17 | 43.1% | 0.387 | 11.42 | 5.18 | 0.265 | 0.503 | -6.66 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: HVN anchored → 0.5 + Điểm vùng: EMA 50 → 1.5 | 74.98 | 44.7% | 0.532 | 10.49 | 7.15 | 0.449 | 0.634 | -5.79 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.5 + Điểm vùng: BOS → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.5 | 118.83 | 48.4% | 0.757 | 8.87 | 13.4 | 0.718 | 0.806 | -14.85 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.5 + SL tối đa (% Entry) → 0.35 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 134.17 | 46.5% | 0.588 | 10.37 | 12.94 | 0.715 | 0.468 | -17.95 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: POC anchored → 2 | 101.99 | 47.7% | 0.675 | 8.85 | 11.52 | 0.599 | 0.761 | -14.43 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Cộng thêm ngưỡng điểm khung 1W → 2 + Cộng thêm ngưỡng điểm khung 1D → 7 | 115.67 | 50.4% | 0.82 | 7.81 | 14.81 | 0.697 | 0.957 | -13.98 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + R:R tối thiểu tới TP1 → 2.38 | 111.1 | 47.3% | 0.673 | 8.86 | 12.54 | 0.678 | 0.669 | -16.77 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Đệm SL riêng khung 1W (ATR) → 0.3 | 107.97 | 47.1% | 0.782 | 9.39 | 11.5 | 0.617 | 0.948 | -16.5 |  |
