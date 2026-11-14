# Tối ưu tự động (chạy liên tục) — vòng 197

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 2048 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.2% | 106.1R | 0.651 | 5.74R | 9.56R | 11.10 | 34 | 11.8% | -16.07R | -0.473 | 16.07R |
| **Tốt nhất** | 146 | 52.7% | 131.28R | 0.899 | 5.15R | 7.31R | 17.96 | 31 | 12.9% | -14.96R | -0.483 | 14.96R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 53.6% | 33.37R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.93R | 2 | 0% | -2.04R |
| 4H | 107 | 53.3% | 90.98R | 22 | 18.2% | -7.25R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 138 (Ghép: Điểm vùng: HVN anchored → 0.125 + Khoảng cách tối thiểu TP1 (ATR) → 0.875).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.2% | 106.1R | 9.56R | 11.10 | 34 | 11.8% | -16.07R |
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

### Vòng 197 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.31R, lời÷rủi ro 17.96

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: POC anchored → 4 | 116.95 | 50.7% | 0.78 | 8.23 | 14.21 | 0.607 | 0.966 | -14.1 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: POC volume profile cố định → 0.813 | 131.09 | 52.4% | 0.892 | 7.39 | 17.74 | 0.765 | 1.043 | -13.94 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Ngưỡng điểm vào kèo → 77 | 115.27 | 48.7% | 0.749 | 8.54 | 13.5 | 0.597 | 0.917 | -13.87 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần SL (/100) → 7 + Điểm vùng: POC anchored → 4 + Cổng Dow → TẮT | 146.13 | 45% | 0.67 | 10.64 | 13.73 | 0.667 | 0.673 | -14.74 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 25.59 | 37.1% | 0.366 | 11.37 | 2.25 | 0.196 | 0.591 | -1.95 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng điểm phân kỳ dương ẩn → 3.5 | 16.88 | 43.7% | 0.071 | 13.89 | 1.22 | 0.16 | -0.024 | -10.55 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 127.7 | 50% | 0.819 | 7.92 | 16.12 | 0.792 | 0.851 | -15.54 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 33.23 | 56.6% | 0.209 | 5.84 | 5.69 | 0.276 | 0.146 | -10.25 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: EMA 200 → 3 | 105.88 | 48% | 0.697 | 9.26 | 11.43 | 0.515 | 0.899 | -12.34 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: HVN anchored → 0.313 | 129.52 | 52.1% | 0.887 | 7.48 | 17.32 | 0.755 | 1.043 | -14.96 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 102.73 | 50.7% | 0.694 | 8.32 | 12.35 | 0.641 | 0.755 | -13.41 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC volume profile cố định → 0.813 | 181.69 | 39% | 0.596 | 17.63 | 10.31 | 0.5 | 0.696 | -13 |  |

### Vòng 196 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.28R, lời÷rủi ro 18.03

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + R:R tối thiểu riêng khung 1D → 2 | 108.81 | 46.2% | 0.636 | 9.16 | 11.88 | 0.573 | 0.698 | -11.73 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 | 110.06 | 48.6% | 0.764 | 8.3 | 13.26 | 0.617 | 0.92 | -16.74 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 17.03 | 38.1% | 0.203 | 12.29 | 1.39 | 0.188 | 0.221 | -6.25 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 79.3 | 46.4% | 0.518 | 9.77 | 8.12 | 0.402 | 0.649 | -13.43 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: EMA 200 → 1 | 86.01 | 47.5% | 0.717 | 8.86 | 9.71 | 0.679 | 0.761 | -19.38 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 172.2 | 37.7% | 0.542 | 19.8 | 8.7 | 0.515 | 0.567 | -16.83 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + R:R tối thiểu tới TP1 → 2.63 | 105.37 | 50.4% | 0.843 | 8.23 | 12.8 | 0.71 | 0.987 | -14.97 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 124.26 | 50% | 0.84 | 7.85 | 15.83 | 0.779 | 0.911 | -13.59 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 117.78 | 49.7% | 0.801 | 8.16 | 14.43 | 0.715 | 0.891 | -15.99 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Xác nhận khung nhỏ (A2) → W + Trọng số phần Elliott (/100) → 10 | 99.12 | 36.6% | 0.339 | 17.67 | 5.61 | 0.363 | 0.315 | -10.28 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Divergence (/100) → 9 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 67.74 | 44.6% | 0.458 | 11.14 | 6.08 | 0.287 | 0.61 | -14.01 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 172.8 | 38.1% | 0.563 | 19.14 | 9.03 | 0.494 | 0.633 | -18.23 |  |

### Vòng 195 — ngẫu nhiên nhiều thông số · mốc: tổng 131.28R, win 52.7%, rủi ro tụt vốn 7.34R, lời÷rủi ro 17.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần Entry (/100) → 33 | 90.83 | 45.8% | 0.547 | 9.77 | 9.3 | 0.45 | 0.642 | -13.38 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 41.42 | 40.2% | 0.339 | 13.38 | 3.1 | 0.231 | 0.448 | -11.27 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Break mây Ichimoku → 3 | 109.27 | 48.4% | 0.687 | 8.95 | 12.21 | 0.556 | 0.838 | -15.12 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: Mức MACD → 0.875 | 113.63 | 51.7% | 0.784 | 7.68 | 14.8 | 0.631 | 0.951 | -14.96 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm tối thiểu của vùng đặt SL → 4 | 79.04 | 45% | 0.712 | 9.48 | 8.34 | 0.615 | 0.83 | -9.89 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Biên mây Ichimoku → 1.35 | 123.55 | 50.3% | 0.84 | 7.87 | 15.7 | 0.697 | 1.003 | -15.97 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 21 → 1.13 | 131.15 | 51.7% | 0.88 | 7.48 | 17.53 | 0.747 | 1.035 | -13.94 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 50 → 1.13 | 127.8 | 50.7% | 0.875 | 7.59 | 16.84 | 0.781 | 0.99 | -13.94 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Mức RSI 30/70 → 1.13 | 131.28 | 52.7% | 0.899 | 7.34 | 17.89 | 0.777 | 1.043 | -14.96 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: EMA 50 → 1.13 + Ngưỡng điểm vào kèo → 77 | 118.95 | 51% | 0.82 | 7.59 | 15.67 | 0.694 | 0.968 | -13.33 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: EMA 21 → 1.13 | 129.06 | 50.3% | 0.866 | 7.5 | 17.21 | 0.754 | 0.992 | -13.94 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: EMA 50 → 0.75 | 128.99 | 52.4% | 0.89 | 7.28 | 17.72 | 0.758 | 1.043 | -14.96 |  |

### Vòng 194 — ngẫu nhiên nhiều thông số · mốc: tổng 126.54R, win 52.4%, rủi ro tụt vốn 7.47R, lời÷rủi ro 16.94

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Biên mây Ichimoku → 1.35 + Cộng thêm ngưỡng điểm khung 1D → 7 | 122.02 | 41.4% | 0.383 | 13.32 | 9.16 | 0.384 | 0.382 | -6 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 121.6 | 51% | 0.827 | 7.71 | 15.77 | 0.716 | 0.96 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 2 | 117.06 | 47.3% | 0.709 | 10.19 | 11.49 | 0.654 | 0.759 | -4.24 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 89.1 | 45.6% | 0.606 | 9.88 | 9.02 | 0.485 | 0.759 | -12.22 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: EMA 50 → 0.75 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Mức MACD → 0.875 | 119.14 | 52.1% | 0.816 | 7.8 | 15.27 | 0.737 | 0.907 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần SL (/100) → 9 | 105.99 | 44.4% | 0.654 | 10.96 | 9.67 | 0.667 | 0.642 | -16.74 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần R:R (/100) → 28 + Trọng số phần Divergence (/100) → 9 | 96.27 | 48.9% | 0.713 | 8.29 | 11.61 | 0.507 | 0.942 | -16.78 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 95.84 | 43.4% | 0.631 | 11.43 | 8.38 | 0.538 | 0.714 | -16.08 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Divergence (/100) → 9 | 99.44 | 45.8% | 0.599 | 9.17 | 10.84 | 0.544 | 0.652 | -13.53 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: HVN cố định → 0.438 + Trọng số phần SL (/100) → 7 | 125.88 | 51.4% | 0.862 | 7.57 | 16.63 | 0.768 | 0.974 | -14.96 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Break mây Ichimoku → 1 | 87.14 | 45.9% | 0.597 | 9.92 | 8.78 | 0.603 | 0.59 | -14.59 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Mức RSI 30/70 → 0.875 + R:R tối thiểu riêng khung 1D → 2 | 117.16 | 43.9% | 0.627 | 9.82 | 11.93 | 0.632 | 0.622 | -10.74 |  |

### Vòng 193 — ngẫu nhiên nhiều thông số · mốc: tổng 126.54R, win 52.4%, rủi ro tụt vốn 7.48R, lời÷rủi ro 16.92

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Coin phải mạnh hơn BTC trong N ngày → 14 + Khung lớn phải tăng (trend ≥) → 0.375 + R:R tối thiểu riêng khung 4H → 2 | 87.78 | 40.6% | 0.336 | 12.73 | 6.9 | 0.42 | 0.274 | -19.75 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trọng số phần Elliott (/100) → 10 | 149.11 | 44.6% | 0.7 | 10.72 | 13.91 | 0.677 | 0.723 | -20.78 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Fib sóng 4 → 1.56 + R:R tối thiểu tới TP1 → 2.63 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.32 | 58% | 0.227 | 6.24 | 5.02 | 0.301 | 0.15 | -9.22 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 + Điểm vùng: EMA 21 → 1.13 + Điểm vùng: POC anchored → 4 | 114.59 | 49.7% | 0.739 | 8.27 | 13.86 | 0.595 | 0.889 | -10.83 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 125.97 | 50.3% | 0.834 | 8.09 | 15.57 | 0.727 | 0.965 | -16.83 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Divergence (/100) → 9 | 90.85 | 46.3% | 0.618 | 9.75 | 9.32 | 0.488 | 0.787 | -12.22 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + % chốt ở TP1 → 0.287 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 52.72 | 38.2% | 0.265 | 17.8 | 2.96 | 0.195 | 0.325 | -16.21 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Mức RSI 30/70 → 0.875 | 95.64 | 46.9% | 0.534 | 10.08 | 9.49 | 0.515 | 0.554 | -13.11 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 94.04 | 49.6% | 0.79 | 8.03 | 11.71 | 0.685 | 0.926 | -21.68 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Mức MACD → 0.875 + Trọng số phần Elliott (/100) → 10 | 118.4 | 51% | 0.817 | 7.97 | 14.86 | 0.748 | 0.895 | -14.97 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: EMA 50 → 0.75 | 106.06 | 48.7% | 0.671 | 8.91 | 11.9 | 0.543 | 0.828 | -14.7 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Elliott (/100) → 10 + Khung lớn phải tăng (trend ≥) → 0.425 | 88.04 | 43.5% | 0.518 | 10.55 | 8.35 | 0.489 | 0.543 | -12.22 |  |

### Vòng 192 — ngẫu nhiên nhiều thông số · mốc: tổng 126.52R, win 52.8%, rủi ro tụt vốn 7.39R, lời÷rủi ro 17.12

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Ngưỡng điểm vào kèo → 77 | 88.89 | 47.3% | 0.609 | 9.56 | 9.3 | 0.413 | 0.828 | -10.38 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Cộng thêm ngưỡng điểm khung 1D → 7 | 122.31 | 52.1% | 0.849 | 7.69 | 15.91 | 0.733 | 0.987 | -13.06 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: EMA 200 → 1 | 115.63 | 49.7% | 0.756 | 8.42 | 13.73 | 0.691 | 0.841 | -10.14 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 190.98 | 39.6% | 0.61 | 17.53 | 10.89 | 0.536 | 0.686 | -10.61 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Cổng Dow → TẮT + Coin phải mạnh hơn BTC trong N ngày → 14 | 82.2 | 41.6% | 0.495 | 12.87 | 6.39 | 0.559 | 0.427 | -25.57 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 126.52 | 52.8% | 0.879 | 7.39 | 17.12 | 0.787 | 0.987 | -14.96 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cổng Dow → CHẶT | 79.52 | 49.2% | 0.612 | 8.26 | 9.63 | 0.465 | 0.713 | -12.8 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Trọng số phần Elliott (/100) → 10 | 124.3 | 51.4% | 0.863 | 7.55 | 16.46 | 0.794 | 0.943 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 119.7 | 51% | 0.826 | 7.99 | 14.98 | 0.733 | 0.933 | -15.93 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu riêng khung 1W → 2 | 86.93 | 47.4% | 0.572 | 9.95 | 8.74 | 0.527 | 0.619 | -13.88 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Trend (/100) → 19 | 102.33 | 39.6% | 0.343 | 13.73 | 7.45 | 0.345 | 0.342 | -10.57 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: EMA 200 → 3 | 102.08 | 44.7% | 0.642 | 11.11 | 9.19 | 0.608 | 0.674 | -14.59 |  |

### Vòng 191 — ngẫu nhiên nhiều thông số · mốc: tổng 126.54R, win 52.4%, rủi ro tụt vốn 7.49R, lời÷rủi ro 16.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 81.34 | 37.6% | 0.309 | 17.78 | 4.57 | 0.398 | 0.22 | -11.1 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 123.91 | 49.6% | 0.891 | 8.02 | 15.45 | 0.731 | 1.085 | -13.2 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Biên mây Ichimoku → 1.35 | 121.32 | 50.7% | 0.843 | 7.68 | 15.8 | 0.787 | 0.908 | -14.44 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Mức RSI 30/70 → 1.13 | 94.09 | 46.2% | 0.649 | 9.43 | 9.98 | 0.532 | 0.789 | -13.05 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Đệm SL riêng khung 1D (ATR) → 0.3 + Cổng Dow → TẮT | 112.99 | 42.1% | 0.481 | 14.71 | 7.68 | 0.509 | 0.457 | -17.29 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cổng Dow → TẮT + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Cộng điểm phân kỳ dương ẩn → 3.5 | 41.48 | 33.3% | 0.161 | 25.01 | 1.66 | 0.159 | 0.162 | -21.61 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 32.81 | 55.1% | 0.196 | 6.3 | 5.21 | 0.251 | 0.144 | -10.04 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Mức MACD → 0.875 + SL tối đa (% Entry) → 0.425 | 115.1 | 49.3% | 0.767 | 8.06 | 14.28 | 0.769 | 0.765 | -13.95 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: Mức RSI 30/70 → 1.13 | 126.54 | 52.4% | 0.873 | 7.49 | 16.89 | 0.777 | 0.987 | -14.96 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 95.44 | 46.6% | 0.645 | 9.97 | 9.57 | 0.538 | 0.768 | -13.22 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: POC volume profile cố định → 0.813 | 108 | 45.7% | 0.659 | 10.73 | 10.07 | 0.668 | 0.65 | -13.06 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Khung lớn phải tăng (trend ≥) → 0.425 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 114.2 | 47.9% | 0.782 | 8.41 | 13.58 | 0.684 | 0.886 | -14.83 |  |

### Vòng 190 — ngẫu nhiên nhiều thông số · mốc: tổng 126.54R, win 52.4%, rủi ro tụt vốn 7.48R, lời÷rủi ro 16.92

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: POC volume profile cố định → 0.813 | 119.13 | 45.1% | 0.527 | 10.67 | 11.16 | 0.597 | 0.459 | -15.93 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 99.32 | 49.3% | 0.69 | 8.12 | 12.23 | 0.69 | 0.689 | -14.96 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cộng thêm ngưỡng điểm khung 4H → 2 | 138.45 | 45.4% | 0.605 | 10.18 | 13.6 | 0.687 | 0.522 | -17.4 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Momentum (/100) → 21 | 132.38 | 42.1% | 0.412 | 12.45 | 10.63 | 0.452 | 0.378 | -10.69 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Break mây Ichimoku → 1 + Xác nhận khung nhỏ (A2) → W | 81.99 | 39.6% | 0.387 | 15.74 | 5.21 | 0.33 | 0.436 | -17.37 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + % chốt ở TP1 → 0.287 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 75.65 | 30.6% | 0.205 | 34.04 | 2.22 | 0.157 | 0.236 | -34.6 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Cổng Dow → CHẶT | 47.11 | 43.4% | 0.386 | 11.34 | 4.15 | 0.359 | 0.405 | -13.6 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: HVN anchored → 0.188 | 126.54 | 52.4% | 0.873 | 7.48 | 16.92 | 0.777 | 0.987 | -14.96 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: EMA 200 → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 35.74 | 39.8% | 0.316 | 13.25 | 2.7 | 0.223 | 0.408 | -9.71 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 200 → 1 | 92.33 | 45.9% | 0.581 | 9.78 | 9.44 | 0.587 | 0.574 | -12.61 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Ngưỡng điểm vào kèo → 74 | 79.69 | 45.9% | 0.718 | 9.15 | 8.71 | 0.615 | 0.843 | -9.89 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + R:R tối thiểu tới TP1 → 2.63 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 74.48 | 45.5% | 0.752 | 9.16 | 8.13 | 0.596 | 0.955 | -10.89 |  |

### Vòng 189 — ngẫu nhiên nhiều thông số · mốc: tổng 126.54R, win 52.4%, rủi ro tụt vốn 7.48R, lời÷rủi ro 16.92

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 115.6 | 40.7% | 0.357 | 13.1 | 8.82 | 0.362 | 0.352 | -11.88 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Cộng điểm phân kỳ dương ẩn → 3.5 | 98.22 | 44.4% | 0.581 | 10.82 | 9.08 | 0.652 | 0.522 | -13.56 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 114.74 | 51.4% | 0.797 | 7.42 | 15.46 | 0.67 | 0.943 | -14.96 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm tối thiểu của vùng đặt SL → 2 + R:R tối thiểu riêng khung 1W → 2 | 98.2 | 47.3% | 0.595 | 8.95 | 10.97 | 0.544 | 0.643 | -9.71 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: EMA 200 → 3 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 21 → 1.13 | 94.26 | 47.9% | 0.664 | 8.4 | 11.22 | 0.593 | 0.726 | -16.05 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Trọng số phần Elliott (/100) → 10 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 125.79 | 52.1% | 0.862 | 7.45 | 16.88 | 0.777 | 0.961 | -13.64 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Coin phải mạnh hơn BTC trong N ngày → 14 | 81.36 | 47.5% | 0.69 | 8.52 | 9.55 | 0.564 | 0.855 | -20.4 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 1W → -1 | 120.95 | 50.6% | 0.775 | 7.96 | 15.19 | 0.771 | 0.78 | -13.94 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Divergence (/100) → 12 | 123.14 | 51.7% | 0.826 | 7.79 | 15.81 | 0.743 | 0.926 | -13.94 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 | 124.17 | 50% | 0.828 | 8.42 | 14.75 | 0.642 | 1.046 | -12.95 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 2.81 + Cộng thêm ngưỡng điểm khung 1D → 4 | 121.45 | 51.4% | 0.843 | 7.63 | 15.92 | 0.737 | 0.965 | -15.46 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: POC volume profile cố định → 0.688 | 119.2 | 51.4% | 0.828 | 7.89 | 15.11 | 0.693 | 0.987 | -13.06 |  |

### Vòng 188 — ngẫu nhiên nhiều thông số · mốc: tổng 126.54R, win 52.4%, rủi ro tụt vốn 7.48R, lời÷rủi ro 16.92

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: EMA 200 → 1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 124.09 | 50% | 0.757 | 8.28 | 14.99 | 0.806 | 0.69 | -14.52 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.44 + Trọng số phần R:R (/100) → 33 + Trọng số phần SL (/100) → 9 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 115.69 | 48.7% | 0.761 | 8.6 | 13.45 | 0.789 | 0.732 | -13.94 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Trend (/100) → 12 | 105.97 | 49.7% | 0.731 | 8.16 | 12.99 | 0.777 | 0.678 | -14.72 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 110.12 | 49.7% | 0.77 | 8.12 | 13.56 | 0.704 | 0.837 | -16 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Coin phải mạnh hơn BTC trong N ngày → 14 | 71.63 | 47.8% | 0.796 | 8.42 | 8.51 | 0.715 | 0.897 | -16.35 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Elliott (/100) → 10 | 96.51 | 49.3% | 0.661 | 8.47 | 11.39 | 0.646 | 0.678 | -14.72 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + % chốt ở TP1 → 0.307 | 123.42 | 52.1% | 0.857 | 7.49 | 16.48 | 0.748 | 0.986 | -14.97 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Lệnh chờ hết hạn sau (nến) → 8 | 88.25 | 42.6% | 0.501 | 12.3 | 7.17 | 0.516 | 0.488 | -16.67 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Trọng số phần SL (/100) → 7 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 113.62 | 50% | 0.747 | 8.5 | 13.37 | 0.692 | 0.811 | -14.08 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Mức RSI 30/70 → 1.13 | 100.85 | 47.3% | 0.604 | 8.76 | 11.51 | 0.518 | 0.693 | -16.27 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + R:R tối thiểu riêng khung 1D → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần Entry (/100) → 33 | 102.16 | 45% | 0.597 | 9.73 | 10.5 | 0.588 | 0.606 | -11.29 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 50 → 0.75 | 115.83 | 41% | 0.432 | 14.75 | 7.85 | 0.415 | 0.449 | -10.5 |  |
