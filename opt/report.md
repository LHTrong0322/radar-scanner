# Tối ưu tự động (chạy liên tục) — vòng 508

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 5757 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 160 | 46.3% | 90.14R | 0.563 | 6.74R | 10.3R | 8.75 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 143 | 53.1% | 113.77R | 0.796 | 6.15R | 7.37R | 15.44 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 105 | 54.3% | 86.61R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 160 | 46.3% | 90.14R | 10.3R | 8.75 | 32 | 12.5% | -14.03R |
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

### Vòng 508 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.37R, lời÷rủi ro 15.44

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số TP tối đa → 2 | 33.52 | 49.5% | 0.101 | 7.48 | 4.48 | 0.12 | 0.087 | -15.54 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Cổng Dow → CHẶT + R:R tối thiểu riêng khung 4H → 2 | 46.53 | 40.4% | 0.218 | 12.76 | 3.65 | 0.21 | 0.225 | -7.14 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 107.74 | 51% | 0.743 | 7.91 | 13.62 | 0.572 | 0.937 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Cộng điểm phân kỳ dương ẩn → 3 | 113.31 | 52.8% | 0.787 | 7.69 | 14.73 | 0.635 | 0.962 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Entry (/100) → 28 + Trọng số phần R:R (/100) → 33 | 113.12 | 52.4% | 0.78 | 7.42 | 15.25 | 0.624 | 0.962 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + % chốt ở TP1 → 0.287 + Cộng thêm ngưỡng điểm khung 1W → -1 | 112.47 | 52.8% | 0.781 | 7.64 | 14.72 | 0.611 | 0.982 | -9.64 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm tối thiểu của vùng đặt SL → 2 + Trọng số phần Trend (/100) → 19 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 66.12 | 46.3% | 0.612 | 9.69 | 6.82 | 0.473 | 0.768 | -6.48 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: EMA 21 → 1.13 | 106.7 | 50.6% | 0.693 | 8.06 | 13.24 | 0.567 | 0.826 | -6.89 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 46.44 | 31.7% | 0.278 | 22.15 | 2.1 | 0.066 | 0.504 | 2.41 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: HVN anchored → 0.188 + Ngưỡng điểm vào kèo → 77 | 81.26 | 37.5% | 0.324 | 17.33 | 4.69 | 0.278 | 0.365 | -4.66 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Entry (/100) → 33 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 102.37 | 35.5% | 0.472 | 18.91 | 5.41 | 0.319 | 0.626 | -1.47 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: EMA 200 → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 94.41 | 45.5% | 0.572 | 10.43 | 9.05 | 0.693 | 0.444 | -10.13 |  |

### Vòng 507 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.37R, lời÷rủi ro 15.44

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Mức RSI 30/70 → 0.875 | 118.21 | 52.2% | 0.753 | 8.11 | 14.58 | 0.601 | 0.942 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: EMA 200 → 1 | 117.06 | 51.5% | 0.701 | 8.73 | 13.41 | 0.608 | 0.82 | -4.67 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: HVN cố định → 0.438 | 111 | 52.1% | 0.771 | 8.03 | 13.82 | 0.591 | 0.983 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Mức MACD → 0.875 | 38.52 | 41.4% | 0.443 | 9.59 | 4.02 | 0.353 | 0.553 | -8.58 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 111.35 | 50.7% | 0.773 | 7.79 | 14.29 | 0.672 | 0.874 | -8.69 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 80.33 | 50.9% | 0.693 | 7.45 | 10.78 | 0.416 | 0.925 | -11.3 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: EMA 200 → 1 | 34.46 | 39.1% | 0.375 | 11 | 3.13 | 0.257 | 0.527 | -8.58 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL riêng khung 4H (ATR) → 0.3 | 137.23 | 37.6% | 0.506 | 19.31 | 7.11 | 0.311 | 0.678 | -11.04 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Trọng số phần R:R (/100) → 28 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 100.35 | 46.3% | 0.738 | 8.86 | 11.33 | 0.507 | 0.998 | -8.87 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + R:R tối thiểu tới TP1 → 2.38 | 104.13 | 41.1% | 0.345 | 12.45 | 8.36 | 0.339 | 0.349 | -7.5 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 1D (ATR) → 0.3 | 87.27 | 46.8% | 0.628 | 10.19 | 8.56 | 0.67 | 0.587 | -12.82 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 116.53 | 48.1% | 0.747 | 8.54 | 13.65 | 0.619 | 0.875 | -11.03 |  |

### Vòng 506 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.42R, lời÷rủi ro 15.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Số TP tối đa → 2 + % chốt ở TP1 → 0.287 | 101.56 | 50% | 0.677 | 9.13 | 11.12 | 0.525 | 0.861 | -7.06 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 118.04 | 50.7% | 0.777 | 8.06 | 14.65 | 0.594 | 0.985 | -10.69 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 110.62 | 53.4% | 0.758 | 7.64 | 14.48 | 0.616 | 0.925 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: EMA 200 → 3 | 104.41 | 39.6% | 0.323 | 12.13 | 8.61 | 0.333 | 0.316 | -11.63 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 80.56 | 44.8% | 0.494 | 10.2 | 7.9 | 0.464 | 0.524 | -9.26 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + SL tối đa (% Entry) → 0.425 + Cổng Dow → TẮT | 131.45 | 43.1% | 0.584 | 11.71 | 11.23 | 0.606 | 0.561 | -21.93 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 34.12 | 52.2% | 0.135 | 13.36 | 2.55 | 0.09 | 0.172 | -19.24 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + % chốt ở TP1 → 0.287 + Trọng số phần Momentum (/100) → 25 | 112.97 | 50.6% | 0.724 | 8.51 | 13.27 | 0.563 | 0.922 | -9.64 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: EMA 200 → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Fib sóng 4 → 0.938 | 67.64 | 42% | 0.431 | 11.58 | 5.84 | 0.308 | 0.546 | -9.11 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 76.86 | 45.3% | 0.483 | 10.36 | 7.42 | 0.415 | 0.551 | -9.82 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần SL (/100) → 9 + Điểm vùng: EMA 200 → 3 | 61.46 | 43.5% | 0.569 | 9.87 | 6.23 | 0.333 | 0.832 | -6.45 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 30.01 | 57.6% | 0.19 | 5.78 | 5.19 | 0.219 | 0.162 | -11.38 |  |

### Vòng 505 — ghép cặp thay đổi suýt đạt · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.32R, lời÷rủi ro 15.54

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: HVN anchored → 0.125 + Điểm vùng: MACD cắt lên Signal → 0.563 | 113.77 | 53.1% | 0.796 | 7.32 | 15.54 | 0.635 | 0.983 | -10.24 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 141.33 | 52% | 0.817 | 7.74 | 18.26 | 0.63 | 1.024 | -9.87 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 | 113.77 | 53.1% | 0.796 | 7.32 | 15.54 | 0.635 | 0.983 | -10.24 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 113.77 | 53.1% | 0.796 | 7.32 | 15.54 | 0.635 | 0.983 | -10.24 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 113.77 | 53.1% | 0.796 | 7.32 | 15.54 | 0.635 | 0.983 | -10.24 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 | 113.77 | 53.1% | 0.796 | 7.32 | 15.54 | 0.635 | 0.983 | -9.66 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 141.33 | 52% | 0.817 | 7.74 | 18.26 | 0.63 | 1.024 | -9.87 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 113.77 | 53.1% | 0.796 | 7.32 | 15.54 | 0.635 | 0.983 | -9.66 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 113.77 | 53.1% | 0.796 | 7.32 | 15.54 | 0.635 | 0.983 | -9.66 |  |
| Ghép: Điểm vùng: MACD cắt lên Signal → 0.563 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 141.33 | 52% | 0.817 | 7.74 | 18.26 | 0.63 | 1.024 | -9.87 |  |
| Ghép: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 | 113.77 | 53.1% | 0.796 | 7.32 | 15.54 | 0.635 | 0.983 | -9.66 |  |
| Ghép: Điểm vùng: MACD cắt lên Signal → 0.563 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 113.77 | 53.1% | 0.796 | 7.32 | 15.54 | 0.635 | 0.983 | -9.66 |  |

### Vòng 504 — ghép cặp thay đổi suýt đạt · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.37R, lời÷rủi ro 15.44

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 141.34 | 52% | 0.817 | 7.96 | 17.76 | 0.63 | 1.025 | -9.87 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 | 113.77 | 53.1% | 0.796 | 7.37 | 15.44 | 0.635 | 0.983 | -9.66 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 113.77 | 53.1% | 0.796 | 7.37 | 15.44 | 0.635 | 0.983 | -9.66 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 113.77 | 53.1% | 0.796 | 7.37 | 15.44 | 0.635 | 0.983 | -9.66 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: HVN anchored → 0.125 | 113.77 | 53.1% | 0.796 | 7.37 | 15.44 | 0.635 | 0.983 | -9.22 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 113.77 | 53.1% | 0.796 | 7.37 | 15.44 | 0.635 | 0.983 | -8.64 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: MACD cắt lên Signal → 0.563 | 113.77 | 53.1% | 0.796 | 7.37 | 15.44 | 0.635 | 0.983 | -8.64 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 141.33 | 52% | 0.817 | 7.96 | 17.76 | 0.63 | 1.024 | -8.85 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 | 113.77 | 53.1% | 0.796 | 7.37 | 15.44 | 0.635 | 0.983 | -8.64 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 113.77 | 53.1% | 0.796 | 7.37 | 15.44 | 0.635 | 0.983 | -8.64 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 113.77 | 53.1% | 0.796 | 7.37 | 15.44 | 0.635 | 0.983 | -8.64 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 113.77 | 53.1% | 0.796 | 7.37 | 15.44 | 0.635 | 0.983 | -10.24 |  |

### Vòng 503 — ghép cặp thay đổi suýt đạt · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.41R, lời÷rủi ro 15.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: POC volume profile cố định → 0.688 | 113.77 | 53.1% | 0.796 | 7.41 | 15.35 | 0.635 | 0.983 | -9.66 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: POC volume profile cố định → 0.813 | 113.77 | 53.1% | 0.796 | 7.41 | 15.35 | 0.635 | 0.983 | -8.64 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: HVN anchored → 0.125 | 113.77 | 53.1% | 0.796 | 7.41 | 15.35 | 0.635 | 0.983 | -10.24 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 113.77 | 53.1% | 0.796 | 7.41 | 15.35 | 0.635 | 0.983 | -9.66 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 | 113.77 | 53.1% | 0.796 | 7.41 | 15.35 | 0.635 | 0.983 | -9.66 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 136.41 | 51.7% | 0.793 | 7.86 | 17.35 | 0.63 | 0.976 | -9.87 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 | 113.77 | 53.1% | 0.796 | 7.41 | 15.35 | 0.635 | 0.983 | -9.66 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 113.77 | 53.1% | 0.796 | 7.41 | 15.35 | 0.635 | 0.983 | -9.66 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 113.77 | 53.1% | 0.796 | 7.41 | 15.35 | 0.635 | 0.983 | -9.66 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: HVN anchored → 0.125 | 113.77 | 53.1% | 0.796 | 7.41 | 15.35 | 0.635 | 0.983 | -10.24 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 113.77 | 53.1% | 0.796 | 7.41 | 15.35 | 0.635 | 0.983 | -9.66 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: MACD cắt lên Signal → 0.563 | 113.77 | 53.1% | 0.796 | 7.41 | 15.35 | 0.635 | 0.983 | -9.66 |  |

### Vòng 502 — từng thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.45R, lời÷rủi ro 15.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Đệm SL riêng khung 1W (ATR): null → 0.3 | 91.99 | 47.4% | 0.692 | 8.83 | 10.42 | 0.436 | 0.922 | -10.7 |  |
| Cộng thêm ngưỡng điểm khung 1W: 0 → -1 | 113.77 | 53.1% | 0.796 | 7.45 | 15.27 | 0.635 | 0.983 | -9.66 |  |
| Cộng thêm ngưỡng điểm khung 1W: 0 → 2 | 113.14 | 52.4% | 0.791 | 7.54 | 15.01 | 0.641 | 0.961 | -9.66 |  |

### Vòng 501 — từng thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.43R, lời÷rủi ro 15.31

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| SL tối đa (% Entry): 0.5 → 0.425 | 112.76 | 52.8% | 0.783 | 7.69 | 14.66 | 0.635 | 0.953 | -9.66 |  |
| Đệm SL dưới vùng hỗ trợ (ATR): 1 → 0.95 | 108.14 | 50.7% | 0.762 | 7.99 | 13.53 | 0.513 | 1.032 | -9.52 |  |
| Đệm SL dưới vùng hỗ trợ (ATR): 1 → 1.05 | 97.39 | 49.3% | 0.696 | 8.35 | 11.66 | 0.465 | 0.97 | -11.51 |  |
| R:R tối thiểu riêng khung 4H: null → 2 | 109.77 | 41.6% | 0.36 | 12.29 | 8.93 | 0.339 | 0.378 | -8.25 |  |
| Đệm SL riêng khung 4H (ATR): null → 0.3 | 159.21 | 39.2% | 0.557 | 18.02 | 8.84 | 0.412 | 0.703 | -11.23 |  |
| Cộng thêm ngưỡng điểm khung 4H: 0 → -1 | 113.77 | 53.1% | 0.796 | 7.43 | 15.31 | 0.635 | 0.983 | -9.66 |  |
| Cộng thêm ngưỡng điểm khung 4H: 0 → 2 | 108.04 | 51.8% | 0.777 | 7.78 | 13.89 | 0.65 | 0.922 | -9.66 |  |
| R:R tối thiểu riêng khung 1D: null → 2 | 103.11 | 45.7% | 0.596 | 9.39 | 10.98 | 0.602 | 0.59 | -7.92 |  |
| Đệm SL riêng khung 1D (ATR): null → 0.3 | 112.65 | 47.6% | 0.687 | 9.98 | 11.29 | 0.675 | 0.698 | -6.35 |  |
| Cộng thêm ngưỡng điểm khung 1D: 4 → 3 | 112.64 | 52.4% | 0.777 | 7.51 | 15 | 0.618 | 0.962 | -9.66 |  |
| Cộng thêm ngưỡng điểm khung 1D: 4 → 5 | 113.57 | 52.8% | 0.789 | 7.55 | 15.04 | 0.624 | 0.983 | -9.66 |  |
| R:R tối thiểu riêng khung 1W: null → 2 | 105.52 | 51.7% | 0.728 | 7.89 | 13.37 | 0.648 | 0.809 | -10.69 |  |

### Vòng 500 — từng thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.42R, lời÷rủi ro 15.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: MACD cắt lên Signal: 0.5 → 0.438 | 105.27 | 50% | 0.684 | 9.13 | 11.53 | 0.49 | 0.915 | -7.08 |  |
| Điểm vùng: MACD cắt lên Signal: 0.5 → 0.563 | 113.77 | 53.1% | 0.796 | 7.42 | 15.33 | 0.635 | 0.983 | -9.66 |  |
| Điểm vùng: Fib 0.5 / 0.382 sóng 2: 3 → 2 | 112.75 | 52.8% | 0.783 | 7.45 | 15.13 | 0.635 | 0.953 | -11.06 |  |
| Điểm vùng: Fib 0.5 / 0.382 sóng 2: 3 → 4 | 112.65 | 52.8% | 0.782 | 7.64 | 14.74 | 0.614 | 0.981 | -9.66 |  |
| Điểm vùng: Fib sóng 4: 1.25 → 0.938 | 112.02 | 52.8% | 0.789 | 7.61 | 14.72 | 0.62 | 0.983 | -9.66 |  |
| Điểm vùng: Fib sóng 4: 1.25 → 1.56 | 113.55 | 53.1% | 0.783 | 7.46 | 15.22 | 0.616 | 0.983 | -9.66 |  |
| Ngưỡng điểm vào kèo: 75 → 74 | 111.93 | 51.7% | 0.761 | 7.71 | 14.52 | 0.608 | 0.94 | -9.66 |  |
| Ngưỡng điểm vào kèo: 75 → 77 | 107.21 | 50.7% | 0.766 | 7.66 | 14 | 0.646 | 0.9 | -9.66 |  |
| R:R tối thiểu tới TP1: 2.5 → 2.38 | 92.6 | 47.4% | 0.601 | 8.8 | 10.52 | 0.515 | 0.683 | -11.23 |  |
| R:R tối thiểu tới TP1: 2.5 → 2.63 | 98.46 | 52.5% | 0.821 | 7.51 | 13.11 | 0.569 | 1.099 | -10.63 |  |
| Ngưỡng điểm 'vào ngay' (tín hiệu mạnh): 6 → 5 | 84.28 | 45.2% | 0.577 | 10.37 | 8.13 | 0.443 | 0.745 | -9.16 |  |
| Ngưỡng điểm 'vào ngay' (tín hiệu mạnh): 6 → 7 | 99.36 | 51.7% | 0.695 | 8.15 | 12.19 | 0.634 | 0.764 | -8.88 |  |

### Vòng 499 — từng thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.41R, lời÷rủi ro 15.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm vùng: HVN anchored: 0.25 → 0.188 | 113.77 | 53.1% | 0.796 | 7.41 | 15.35 | 0.635 | 0.983 | -9.66 |  |
| Điểm vùng: HVN anchored: 0.25 → 0.313 | 111 | 52.1% | 0.771 | 7.93 | 14 | 0.591 | 0.983 | -9.66 |  |
| Điểm vùng: HVN cố định: 0.5 → 0.438 | 111 | 52.1% | 0.771 | 7.93 | 14 | 0.591 | 0.983 | -9.66 |  |
| Điểm vùng: HVN cố định: 0.5 → 0.563 | 113.77 | 53.1% | 0.796 | 7.41 | 15.35 | 0.635 | 0.983 | -9.66 |  |
| Điểm vùng: Vùng RSI 45–55: 1 → 0.875 | 111.35 | 50.7% | 0.773 | 7.9 | 14.09 | 0.672 | 0.874 | -10 |  |
| Điểm vùng: Vùng RSI 45–55: 1 → 1.13 | 101.21 | 49.7% | 0.698 | 8.55 | 11.84 | 0.555 | 0.869 | -9.66 |  |
| Điểm vùng: Biên mây Ichimoku: 1.2 → 1.05 | 103.24 | 52.1% | 0.717 | 7.67 | 13.46 | 0.589 | 0.86 | -11.78 |  |
| Điểm vùng: Biên mây Ichimoku: 1.2 → 1.35 | 109.99 | 51.7% | 0.759 | 8.02 | 13.71 | 0.591 | 0.953 | -8.64 |  |
| Điểm vùng: Mức sai Elliott (cho SL): 2 → 1 | 108.7 | 51.7% | 0.75 | 7.91 | 13.74 | 0.595 | 0.929 | -10.63 |  |
| Điểm vùng: Mức sai Elliott (cho SL): 2 → 3 | 110.58 | 52.1% | 0.779 | 7.63 | 14.49 | 0.616 | 0.967 | -9.48 |  |
| Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự): 1 → 0.875 | 113.77 | 53.1% | 0.796 | 7.41 | 15.35 | 0.635 | 0.983 | -9.66 |  |
| Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự): 1 → 1.13 | 113.77 | 53.1% | 0.796 | 7.41 | 15.35 | 0.635 | 0.983 | -9.66 |  |
