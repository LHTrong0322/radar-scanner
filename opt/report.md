# Tối ưu tự động (chạy liên tục) — vòng 795

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 9195 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 46% | 94.27R | 0.578 | 5.7R | 9.8R | 9.62 | 31 | 12.9% | -13R | -0.419 | 13R |
| **Tốt nhất** | 145 | 53.1% | 118.93R | 0.82 | 5.09R | 7.39R | 16.09 | 28 | 17.9% | -9.92R | -0.354 | 10.54R |

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
| Bot thật | 163 | 46% | 94.27R | 9.8R | 9.62 | 31 | 12.9% | -13R |
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

### Vòng 795 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.39R, lời÷rủi ro 16.09

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 114.11 | 52.3% | 0.766 | 7.59 | 15.03 | 0.601 | 0.951 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 77.73 | 47.7% | 0.726 | 8 | 9.72 | 0.5 | 0.975 | -5.45 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 50 → 1.13 | 113.56 | 50.3% | 0.773 | 7.81 | 14.54 | 0.598 | 0.97 | -8.9 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 71.73 | 45.8% | 0.67 | 8.5 | 8.44 | 0.474 | 0.895 | -5.45 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 62.73 | 42.1% | 0.55 | 10.82 | 5.8 | 0.377 | 0.742 | -6.89 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Cộng thêm ngưỡng điểm khung 4H → 2 | 97.64 | 46.5% | 0.614 | 8.89 | 10.98 | 0.515 | 0.71 | -11.49 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: EMA 21 → 1.13 | 106.51 | 50.3% | 0.715 | 8.07 | 13.2 | 0.557 | 0.893 | -11.23 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: HVN cố định → 0.438 + Cộng thêm ngưỡng điểm khung 4H → -1 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 26.61 | 58.1% | 0.172 | 6.23 | 4.27 | 0.171 | 0.172 | -9.33 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Khung lớn phải tăng (trend ≥) → 0.375 + Xác nhận khung nhỏ (A2) → W + R:R tối thiểu tới TP1 → 2.38 | 63.05 | 37.5% | 0.272 | 18.52 | 3.4 | 0.173 | 0.361 | -9.26 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Ngưỡng điểm vào kèo → 77 | 80.3 | 46.1% | 0.627 | 9.25 | 8.68 | 0.434 | 0.827 | -10.25 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 1D (ATR) → 0.3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 76.96 | 41.8% | 0.503 | 13.06 | 5.89 | 0.49 | 0.516 | -10.93 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Momentum (/100) → 21 | 29.4 | 58.6% | 0.182 | 5.97 | 4.92 | 0.181 | 0.182 | -9.5 |  |

### Vòng 794 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.31R, lời÷rủi ro 16.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + % chốt ở TP1 → 0.287 | 117.06 | 52.8% | 0.813 | 7.31 | 16.01 | 0.618 | 1.031 | -9.9 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần Momentum (/100) → 25 | 116.09 | 51.7% | 0.801 | 7.42 | 15.65 | 0.619 | 1.006 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: POC anchored → 2 + Ngưỡng điểm vào kèo → 77 | 99.19 | 48.3% | 0.666 | 8.5 | 11.67 | 0.556 | 0.78 | -9.92 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 1D → 3 | 32.03 | 59.4% | 0.2 | 5.46 | 5.87 | 0.212 | 0.189 | -9.49 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: BOS → 1 + Điểm tối thiểu của vùng đặt SL → 4 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 112.92 | 50% | 0.763 | 7.93 | 14.24 | 0.604 | 0.936 | -6.29 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Lệnh chờ hết hạn sau (nến) → 6 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 94.86 | 49.2% | 0.719 | 8.04 | 11.8 | 0.626 | 0.823 | -8.24 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 25.97 | 38.3% | 0.321 | 10.52 | 2.47 | 0.228 | 0.455 | -6.54 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Đệm SL riêng khung 1W (ATR) → 0.3 + Số TP tối đa → 2 | 98.28 | 47.8% | 0.723 | 8.65 | 11.36 | 0.443 | 0.964 | -10.69 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: HVN cố định → 0.438 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 90.12 | 48.1% | 0.699 | 8.77 | 10.28 | 0.567 | 0.855 | -11.25 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 100.86 | 48.6% | 0.681 | 8.29 | 12.17 | 0.451 | 0.945 | -10.49 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Cổng Dow → CHẶT | 82.27 | 51.3% | 0.715 | 7.18 | 11.46 | 0.283 | 1.098 | -12.01 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: BOS → 3 | 110.03 | 46.6% | 0.632 | 9.06 | 12.14 | 0.606 | 0.657 | -8.18 |  |

### Vòng 793 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.12R, lời÷rủi ro 17.15

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: POC anchored → 4 | 120.55 | 52% | 0.793 | 7.76 | 15.53 | 0.597 | 0.99 | -5.79 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Số TP tối đa → 2 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 121.89 | 53.1% | 0.829 | 7.26 | 16.79 | 0.64 | 1.037 | -10.03 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần Entry (/100) → 33 | 108.97 | 45.4% | 0.626 | 8.81 | 12.37 | 0.597 | 0.652 | -8.18 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 4H → 2 | 113.33 | 40.6% | 0.356 | 12.04 | 9.41 | 0.313 | 0.392 | -8.02 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Break mây Ichimoku → 3 | 76.82 | 46.2% | 0.591 | 9.44 | 8.14 | 0.43 | 0.757 | -16.13 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: EMA 50 → 1.13 | 98.17 | 45.6% | 0.668 | 9.33 | 10.52 | 0.474 | 0.899 | -7.11 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: POC volume profile cố định → 0.813 + R:R tối thiểu riêng khung 4H → 2 | 121.51 | 41.7% | 0.387 | 12.13 | 10.02 | 0.347 | 0.42 | -6.42 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Mức MACD → 0.875 + R:R tối thiểu riêng khung 1D → 2 | 110.83 | 46.4% | 0.606 | 9.8 | 11.31 | 0.504 | 0.7 | -5.1 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Break mây Ichimoku → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC volume profile cố định → 0.688 | 75.69 | 43.6% | 0.647 | 9.47 | 7.99 | 0.542 | 0.769 | -5.46 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + R:R tối thiểu riêng khung 1D → 2 | 108.03 | 44.3% | 0.59 | 9.77 | 11.06 | 0.527 | 0.649 | -9.23 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm tối thiểu của vùng đặt SL → 4 | 38.81 | 40.9% | 0.441 | 9.45 | 4.11 | 0.344 | 0.563 | -7.55 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 91.23 | 34.9% | 0.398 | 20.35 | 4.48 | 0.258 | 0.553 | -11.52 |  |

### Vòng 792 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.3R, lời÷rủi ro 16.73

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + R:R tối thiểu riêng khung 1D → 2 | 110.53 | 45.7% | 0.632 | 9.2 | 12.01 | 0.591 | 0.67 | -8.18 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: BOS → 1 | 120.27 | 52.7% | 0.813 | 7.67 | 15.68 | 0.614 | 1.034 | -8.61 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Elliott (/100) → 6 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cộng điểm phân kỳ dương ẩn → 2.25 | 60.74 | 44% | 0.557 | 9.97 | 6.09 | 0.443 | 0.683 | -8.77 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Break mây Ichimoku → 1 | 110.47 | 50.3% | 0.741 | 7.99 | 13.83 | 0.556 | 0.94 | -10 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm tối thiểu của vùng đặt SL → 4 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.3 | 58.5% | 0.197 | 5.78 | 5.42 | 0.222 | 0.174 | -9.06 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + SL tối đa (% Entry) → 0.425 | 87.61 | 49% | 0.604 | 8.83 | 9.92 | 0.498 | 0.724 | -10.28 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + R:R tối thiểu riêng khung 4H → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 113.85 | 40.7% | 0.359 | 12.18 | 9.35 | 0.303 | 0.406 | -11.06 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: HVN cố định → 0.563 | 89.6 | 50% | 0.759 | 7.71 | 11.62 | 0.553 | 0.996 | -16.39 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Cộng thêm ngưỡng điểm khung 1D → 5 | 119.49 | 53.1% | 0.824 | 7.19 | 16.62 | 0.61 | 1.053 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: MACD cắt lên Signal → 0.563 | 121.23 | 48.7% | 0.777 | 8.14 | 14.89 | 0.65 | 0.897 | -10.01 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Mức MACD → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 118.76 | 51.7% | 0.808 | 7.57 | 15.69 | 0.592 | 1.052 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Trọng số phần R:R (/100) → 28 | 113.45 | 50% | 0.727 | 8.31 | 13.65 | 0.586 | 0.901 | -4.93 |  |

### Vòng 791 — ngẫu nhiên nhiều thông số · mốc: tổng 122.69R, win 53.8%, rủi ro tụt vốn 7.2R, lời÷rủi ro 17.04

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trọng số phần Entry (/100) → 33 | 78.93 | 48% | 0.631 | 8.81 | 8.96 | 0.426 | 0.868 | -10.25 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Lệnh chờ hết hạn sau (nến) → 8 | 120.63 | 51.9% | 0.773 | 7.8 | 15.47 | 0.582 | 0.996 | -11.51 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cộng thêm ngưỡng điểm khung 1D → 5 | 109.36 | 50.3% | 0.715 | 8.62 | 12.69 | 0.515 | 0.952 | -7.34 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Đệm SL riêng khung 1W (ATR) → 0.3 | 104.17 | 48.9% | 0.76 | 8.53 | 12.21 | 0.439 | 1.051 | -10.69 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Fib sóng 4 → 0.938 | 119.84 | 51.7% | 0.838 | 7.52 | 15.94 | 0.628 | 1.076 | -13.18 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + R:R tối thiểu tới TP1 → 2.38 | 96.99 | 47.1% | 0.618 | 8.78 | 11.05 | 0.485 | 0.746 | -11.23 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng điểm phân kỳ dương ẩn → 2.25 + Đệm SL riêng khung 1W (ATR) → 0.3 | 101.27 | 48.5% | 0.745 | 8.48 | 11.94 | 0.411 | 1.059 | -10.69 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: EMA 21 → 1.13 | 114.53 | 51.4% | 0.784 | 7.5 | 15.27 | 0.612 | 0.977 | -10.26 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trọng số phần R:R (/100) → 28 | 90.76 | 46.7% | 0.543 | 9.34 | 9.72 | 0.489 | 0.6 | -9.83 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: EMA 21 → 0.875 | 111.81 | 40.7% | 0.37 | 13.11 | 8.53 | 0.355 | 0.383 | -11.51 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm tối thiểu của vùng đặt SL → 2 | 40.05 | 42.5% | 0.46 | 9.22 | 4.34 | 0.344 | 0.61 | -8.25 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 1D → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 115.37 | 49.3% | 0.824 | 8.02 | 14.39 | 0.583 | 1.11 | -8.16 |  |

### Vòng 790 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.35R, lời÷rủi ro 16.18

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu tới TP1 → 2.63 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức RSI 30/70 → 1.13 | 78.82 | 39.6% | 0.347 | 13.94 | 5.65 | 0.275 | 0.421 | -5.9 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 114.31 | 50% | 0.783 | 7.84 | 14.58 | 0.658 | 0.901 | -8.97 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Fib sóng 4 → 1.56 | 79.31 | 44.7% | 0.493 | 10.3 | 7.7 | 0.453 | 0.529 | -9.14 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Trọng số phần SL (/100) → 9 | 117.52 | 52.4% | 0.81 | 7.4 | 15.88 | 0.637 | 1.007 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Ngưỡng điểm vào kèo → 74 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 114.4 | 49% | 0.768 | 7.84 | 14.59 | 0.643 | 0.891 | -8.97 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: HVN anchored → 0.188 | 125 | 50% | 0.801 | 8.06 | 15.51 | 0.757 | 0.853 | -9.48 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: EMA 50 → 0.75 | 77.81 | 47.7% | 0.714 | 8.22 | 9.47 | 0.474 | 0.977 | -5.45 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: EMA 21 → 1.13 | 112.2 | 46.9% | 0.634 | 8.73 | 12.85 | 0.603 | 0.663 | -12.17 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Biên mây Ichimoku → 1.35 | 112.27 | 50% | 0.78 | 7.86 | 14.28 | 0.605 | 0.969 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Ngưỡng điểm vào kèo → 77 | 103.33 | 48.9% | 0.733 | 7.81 | 13.23 | 0.574 | 0.894 | -10.91 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.438 + Cộng thêm ngưỡng điểm khung 4H → 2 | 112.85 | 46.6% | 0.692 | 10.38 | 10.87 | 0.694 | 0.691 | -6.01 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Trend (/100) → 12 + R:R tối thiểu riêng khung 1W → 2 | 104.6 | 48.5% | 0.769 | 8.3 | 12.6 | 0.627 | 0.92 | -10.21 |  |

### Vòng 789 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.1R, lời÷rủi ro 17.20

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: EMA 21 → 0.875 | 89.08 | 48.8% | 0.724 | 8.62 | 10.33 | 0.529 | 0.943 | -16.06 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: HVN cố định → 0.438 | 113.82 | 50.3% | 0.796 | 7.63 | 14.92 | 0.623 | 0.982 | -9.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + SL tối đa (% Entry) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 107.36 | 46.2% | 0.628 | 11.07 | 9.7 | 0.654 | 0.605 | -4.47 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần SL (/100) → 9 + Điểm vùng: EMA 200 → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 64.33 | 36.9% | 0.29 | 18.65 | 3.45 | 0.325 | 0.252 | 2.23 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 | 119.97 | 41.5% | 0.377 | 12.3 | 9.75 | 0.331 | 0.416 | -7.41 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cộng thêm ngưỡng điểm khung 1W → 2 | 134.69 | 45.1% | 0.578 | 10.71 | 12.58 | 0.644 | 0.51 | -11.71 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: EMA 50 → 1.13 + Trọng số phần Trend (/100) → 19 | 114.57 | 50.7% | 0.785 | 7.81 | 14.67 | 0.598 | 0.999 | -8.9 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Trọng số phần SL (/100) → 7 + Xác nhận khung nhỏ (A2) → W + R:R tối thiểu riêng khung 1D → 2 | 116.58 | 40.7% | 0.402 | 14.77 | 7.89 | 0.376 | 0.424 | -5.76 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Ngưỡng điểm vào kèo → 77 | 114.02 | 51.4% | 0.826 | 7.26 | 15.71 | 0.629 | 1.042 | -9.96 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 104.61 | 52% | 0.707 | 7.89 | 13.26 | 0.637 | 0.785 | -9.72 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Break mây Ichimoku → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 107.88 | 47% | 0.65 | 8.47 | 12.74 | 0.694 | 0.609 | -7.33 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Mức RSI 30/70 → 1.13 | 119.78 | 52.4% | 0.815 | 7.36 | 16.27 | 0.642 | 1 | -8.63 |  |

### Vòng 788 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.23R, lời÷rủi ro 16.89

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Biên mây Ichimoku → 1.35 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 72.96 | 42.3% | 0.401 | 13.11 | 5.57 | 0.432 | 0.367 | -18.88 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: HVN cố định → 0.438 | 116.26 | 51% | 0.78 | 7.85 | 14.81 | 0.598 | 0.976 | -7.31 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + % chốt ở TP1 → 0.307 | 119.61 | 41.7% | 0.381 | 11.83 | 10.11 | 0.333 | 0.42 | -8.32 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: EMA 21 → 0.875 | 113.25 | 48.2% | 0.815 | 8.43 | 13.43 | 0.608 | 1.044 | -7.88 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 + Đệm SL riêng khung 4H (ATR) → 0.3 | 162.63 | 39% | 0.567 | 17.56 | 9.26 | 0.461 | 0.677 | -10.82 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 109.01 | 50.3% | 0.712 | 8.77 | 12.43 | 0.524 | 0.931 | -7.34 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Divergence (/100) → 12 + Đệm SL riêng khung 1W (ATR) → 0.3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 105.25 | 37.9% | 0.439 | 18.46 | 5.7 | 0.338 | 0.519 | -11.07 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + % chốt ở TP1 → 0.307 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 107.97 | 47.6% | 0.745 | 8.68 | 12.44 | 0.497 | 0.983 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: HVN cố định → 0.563 + Cổng Dow → CHẶT | 85.78 | 52.2% | 0.759 | 6.95 | 12.34 | 0.308 | 1.13 | -12.01 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm tối thiểu của vùng đặt SL → 2 + SL tối đa (% Entry) → 0.425 + Điểm vùng: MACD cắt lên Signal → 0.563 | 112.35 | 51% | 0.786 | 7.72 | 14.55 | 0.622 | 0.961 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: POC anchored → 2 | 104.82 | 50% | 0.699 | 8.19 | 12.8 | 0.527 | 0.89 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Khung lớn phải tăng (trend ≥) → 0.425 | 114.89 | 51.4% | 0.798 | 7.84 | 14.65 | 0.562 | 1.062 | -9.04 |  |

### Vòng 787 — ngẫu nhiên nhiều thông số · mốc: tổng 119.85R, win 53.9%, rủi ro tụt vốn 7.08R, lời÷rủi ro 16.93

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần Entry (/100) → 28 | 99.5 | 38.6% | 0.392 | 16.14 | 6.16 | 0.451 | 0.336 | -3.02 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 77.31 | 45.9% | 0.581 | 9.58 | 8.07 | 0.4 | 0.795 | -7.6 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: HVN cố định → 0.438 + Cộng thêm ngưỡng điểm khung 4H → -1 | 92.05 | 51.3% | 0.815 | 7.39 | 12.46 | 0.631 | 1.038 | -16.39 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Cộng thêm ngưỡng điểm khung 4H → 2 + Ngưỡng điểm vào kèo → 74 | 111.02 | 48.5% | 0.829 | 7.94 | 13.98 | 0.621 | 1.077 | -8.16 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Elliott (/100) → 10 + Cộng thêm ngưỡng điểm khung 4H → 2 | 81.84 | 51.4% | 0.751 | 6.84 | 11.96 | 0.482 | 0.987 | -12.59 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Cộng thêm ngưỡng điểm khung 1W → -1 | 102.88 | 52.5% | 0.872 | 7.35 | 14 | 0.568 | 1.208 | -9.6 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: BOS → 3 | 119.85 | 53.9% | 0.85 | 7.08 | 16.93 | 0.657 | 1.075 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 117.93 | 52.8% | 0.819 | 7.21 | 16.36 | 0.657 | 1 | -9.92 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Cộng thêm ngưỡng điểm khung 4H → 2 | 113.47 | 51.8% | 0.816 | 7.3 | 15.54 | 0.662 | 0.992 | -9.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Xác nhận khung nhỏ (A2) → W + Trọng số phần Elliott (/100) → 10 | 115.85 | 39.7% | 0.46 | 15.43 | 7.51 | 0.419 | 0.498 | -1.69 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + SL tối đa (% Entry) → 0.425 | 119.44 | 52.1% | 0.841 | 7.41 | 16.12 | 0.715 | 0.978 | -8.63 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Số TP tối đa → 2 + Điểm vùng: POC anchored → 4 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 121.45 | 52% | 0.821 | 7.6 | 15.98 | 0.667 | 0.988 | -4.57 |  |

### Vòng 786 — ngẫu nhiên nhiều thông số · mốc: tổng 122.14R, win 53.4%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.64

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm tối thiểu của vùng đặt SL → 4 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 35.6 | 55.4% | 0.214 | 5.11 | 6.97 | 0.263 | 0.168 | -8.78 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 118.12 | 52.4% | 0.804 | 7.61 | 15.52 | 0.604 | 1.017 | -8.6 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: BOS → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 141.11 | 44% | 0.581 | 10.83 | 13.03 | 0.654 | 0.505 | -13.03 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 35.91 | 59% | 0.223 | 5.77 | 6.22 | 0.256 | 0.192 | -9.49 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 81.96 | 42.8% | 0.594 | 10.4 | 7.88 | 0.437 | 0.77 | -7.03 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Cổng Dow → TẮT | 142.14 | 35.1% | 0.362 | 24.32 | 5.84 | 0.307 | 0.411 | -42 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: POC volume profile cố định → 0.813 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 122.91 | 53.4% | 0.842 | 7.34 | 16.75 | 0.64 | 1.067 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 157.27 | 39.3% | 0.542 | 17.15 | 9.17 | 0.39 | 0.695 | -13.63 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: EMA 50 → 1.13 | 108.93 | 49.3% | 0.746 | 8.4 | 12.97 | 0.54 | 0.976 | -8.9 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 119.29 | 51.7% | 0.79 | 7.44 | 16.03 | 0.608 | 0.989 | -10.03 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Khung lớn phải tăng (trend ≥) → 0.375 | 112.76 | 51.7% | 0.778 | 7.39 | 15.26 | 0.589 | 0.969 | -8.63 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Mức MACD → 0.875 + Xác nhận khung nhỏ (A2) → W | 114.41 | 40.3% | 0.443 | 15.09 | 7.58 | 0.439 | 0.447 | -3.72 |  |
