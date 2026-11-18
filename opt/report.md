# Tối ưu tự động (chạy liên tục) — vòng 638

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 7311 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.2% | 97.32R | 0.597 | 5.5R | 9.85R | 9.88 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 146 | 54.1% | 121.77R | 0.834 | 5.09R | 7.35R | 16.57 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 108 | 55.6% | 94.62R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 163 | 47.2% | 97.32R | 9.85R | 9.88 | 32 | 12.5% | -14.03R |
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

### Vòng 638 — ngẫu nhiên nhiều thông số · mốc: tổng 121.77R, win 54.1%, rủi ro tụt vốn 7.35R, lời÷rủi ro 16.57

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần Elliott (/100) → 6 | 110.58 | 51.4% | 0.757 | 7.92 | 13.96 | 0.542 | 0.979 | -9.62 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Cộng thêm ngưỡng điểm khung 1W → 2 | 115.22 | 51.7% | 0.806 | 7.49 | 15.38 | 0.646 | 0.977 | -10.07 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần Trend (/100) → 19 | 119.58 | 53.4% | 0.819 | 7.52 | 15.9 | 0.62 | 1.035 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: EMA 21 → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 71.57 | 45.1% | 0.633 | 9.75 | 7.34 | 0.434 | 0.859 | -6.59 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 110.55 | 50.7% | 0.747 | 8.05 | 13.73 | 0.554 | 0.968 | -8.46 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 93.45 | 48.6% | 0.677 | 8.91 | 10.49 | 0.626 | 0.735 | -8.3 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + % chốt ở TP1 → 0.307 + R:R tối thiểu riêng khung 1W → 2 | 86.36 | 41% | 0.305 | 13.13 | 6.58 | 0.282 | 0.325 | -11.34 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 1W (ATR) → 0.3 | 59.46 | 48.8% | 0.725 | 7.84 | 7.58 | 0.197 | 1.204 | -7.93 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Break mây Ichimoku → 3 + SL tối đa (% Entry) → 0.425 | 106.53 | 49.7% | 0.654 | 9.02 | 11.81 | 0.512 | 0.808 | -9.4 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: EMA 21 → 1.13 | 115.32 | 47.3% | 0.682 | 10.58 | 10.9 | 0.613 | 0.749 | -8.35 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 53.75 | 39.3% | 0.311 | 14.38 | 3.74 | 0.404 | 0.207 | -19.03 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 72.98 | 47.3% | 0.566 | 9.29 | 7.86 | 0.432 | 0.702 | -7.94 |  |

### Vòng 637 — ngẫu nhiên nhiều thông số · mốc: tổng 121.77R, win 54.1%, rủi ro tụt vốn 7.39R, lời÷rủi ro 16.48

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Fib sóng 4 → 0.938 | 69.61 | 45.9% | 0.639 | 9.36 | 7.44 | 0.428 | 0.869 | -6.48 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 128.35 | 45.5% | 0.53 | 10.86 | 11.82 | 0.639 | 0.42 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 88.35 | 51.3% | 0.742 | 7.96 | 11.1 | 0.527 | 0.994 | -16.13 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Cổng Dow → CHẶT + R:R tối thiểu riêng khung 1D → 2 | 31.37 | 61.1% | 0.194 | 5.32 | 5.9 | 0.184 | 0.201 | -6.62 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Trọng số phần SL (/100) → 9 | 119.3 | 53.1% | 0.812 | 7.6 | 15.7 | 0.635 | 1.006 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 86.31 | 46.4% | 0.514 | 9.71 | 8.89 | 0.452 | 0.576 | -9.26 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + R:R tối thiểu riêng khung 1D → 2 | 109.98 | 46.1% | 0.618 | 9.1 | 12.09 | 0.564 | 0.669 | -10.98 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần R:R (/100) → 28 | 105.5 | 46.7% | 0.639 | 10.47 | 10.08 | 0.656 | 0.626 | -6.21 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Mức MACD → 0.875 | 116.18 | 53.5% | 0.807 | 7.53 | 15.43 | 0.621 | 1.004 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Biên mây Ichimoku → 1.35 + Số TP tối đa → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 | 83.44 | 42.4% | 0.453 | 12.59 | 6.63 | 0.53 | 0.393 | -8.34 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 200 → 3 | 110.55 | 49.3% | 0.737 | 8.37 | 13.21 | 0.569 | 0.896 | -9.97 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Cộng thêm ngưỡng điểm khung 1D → 5 | 107.46 | 50.4% | 0.762 | 7.96 | 13.5 | 0.588 | 0.954 | -9.9 |  |

### Vòng 636 — ngẫu nhiên nhiều thông số · mốc: tổng 121.77R, win 54.1%, rủi ro tụt vốn 7.37R, lời÷rủi ro 16.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: BOS → 3 + Cộng điểm phân kỳ dương ẩn → 2.25 | 121.11 | 51.6% | 0.792 | 8.14 | 14.88 | 0.594 | 1.014 | -10.69 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Đệm SL riêng khung 4H (ATR) → 0.3 | 159 | 38.8% | 0.546 | 17.72 | 8.97 | 0.414 | 0.682 | -16.54 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Mức MACD → 1.13 | 117.94 | 52% | 0.797 | 7.63 | 15.46 | 0.591 | 1.026 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + R:R tối thiểu riêng khung 1D → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Coin phải mạnh hơn BTC trong N ngày → 14 | 93.6 | 44.9% | 0.592 | 9.58 | 9.77 | 0.584 | 0.601 | -18.53 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cổng Dow → TẮT | 135.11 | 43.4% | 0.611 | 12.09 | 11.18 | 0.499 | 0.721 | -19.21 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: EMA 200 → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 80.26 | 45.5% | 0.481 | 10.51 | 7.64 | 0.482 | 0.479 | -10.81 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 73.78 | 47.2% | 0.683 | 8.83 | 8.36 | 0.428 | 0.968 | -7.81 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + SL tối đa (% Entry) → 0.425 + Ngưỡng điểm vào kèo → 77 | 107.7 | 49.3% | 0.728 | 8.33 | 12.93 | 0.585 | 0.871 | -11.02 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Cộng điểm phân kỳ dương ẩn → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Entry (/100) → 33 | 114.03 | 49.6% | 0.832 | 8.39 | 13.59 | 0.63 | 1.057 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 4H → 2 | 121.33 | 47.7% | 0.697 | 10.56 | 11.49 | 0.669 | 0.724 | -6.35 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 118.82 | 53.1% | 0.808 | 7.34 | 16.19 | 0.598 | 1.039 | -9.48 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: HVN anchored → 0.313 | 66.72 | 45.9% | 0.547 | 10.17 | 6.56 | 0.407 | 0.697 | -16.12 |  |

### Vòng 635 — ngẫu nhiên nhiều thông số · mốc: tổng 132.04R, win 53.7%, rủi ro tụt vốn 7.36R, lời÷rủi ro 17.94

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: HVN anchored → 0.188 | 114.05 | 52.9% | 0.943 | 7.2 | 15.84 | 0.743 | 1.159 | -10.63 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Momentum (/100) → 21 | 129.06 | 51% | 0.822 | 8.34 | 15.47 | 0.781 | 0.869 | -10.24 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cổng Dow → TẮT | 144.67 | 44.8% | 0.682 | 10.91 | 13.26 | 0.644 | 0.719 | -18.36 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: MACD cắt lên Signal → 0.438 + Cộng thêm ngưỡng điểm khung 4H → 2 | 59.79 | 42.9% | 0.534 | 11.16 | 5.36 | 0.365 | 0.722 | -5.32 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: EMA 21 → 1.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 111.72 | 47.6% | 0.673 | 10.18 | 10.97 | 0.635 | 0.707 | -5.68 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Entry (/100) → 28 + Ngưỡng điểm vào kèo → 77 | 125.75 | 51.7% | 0.867 | 7.5 | 16.77 | 0.768 | 0.977 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Fib sóng 4 → 1.56 + Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần SL (/100) → 7 | 119.67 | 50% | 0.787 | 8.31 | 14.4 | 0.668 | 0.927 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 123.18 | 52.1% | 0.844 | 7.61 | 16.19 | 0.752 | 0.946 | -10.63 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Break mây Ichimoku → 3 | 107.7 | 48.8% | 0.673 | 9.19 | 11.72 | 0.599 | 0.753 | -9.4 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 126.69 | 51.3% | 0.834 | 8.06 | 15.72 | 0.76 | 0.913 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Trọng số phần Entry (/100) → 33 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + SL tối đa (% Entry) → 0.425 | 103.99 | 49.4% | 0.675 | 9.01 | 11.54 | 0.704 | 0.646 | -7.85 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + R:R tối thiểu tới TP1 → 2.63 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 112.93 | 50.4% | 0.889 | 8.08 | 13.98 | 0.755 | 1.044 | -10.63 |  |

### Vòng 634 — ngẫu nhiên nhiều thông số · mốc: tổng 132.04R, win 53.7%, rủi ro tụt vốn 7.74R, lời÷rủi ro 17.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần Entry (/100) → 33 | 129.45 | 53.4% | 0.887 | 7.29 | 17.76 | 0.77 | 1.017 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Ngưỡng điểm vào kèo → 77 | 125.75 | 51.7% | 0.867 | 7.58 | 16.59 | 0.768 | 0.977 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm tối thiểu của vùng đặt SL → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: EMA 50 → 0.75 | 69.72 | 45% | 0.387 | 12.04 | 5.79 | 0.374 | 0.402 | -14.05 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + R:R tối thiểu riêng khung 1W → 2 | 93.29 | 51% | 0.635 | 8.32 | 11.21 | 0.593 | 0.674 | -10.5 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Xác nhận khung nhỏ (A2) → W + Số TP tối đa → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 | 101.31 | 39.4% | 0.399 | 16.04 | 6.32 | 0.336 | 0.456 | -4.54 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 122.33 | 52.3% | 0.81 | 7.95 | 15.39 | 0.639 | 0.993 | -8.8 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Trọng số phần Trend (/100) → 12 | 123.79 | 51% | 0.854 | 7.8 | 15.87 | 0.714 | 1.016 | -8.64 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 115.41 | 52% | 0.78 | 7.95 | 14.52 | 0.735 | 0.83 | -8.7 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức RSI 30/70 → 1.13 | 85.33 | 47.7% | 0.783 | 8.62 | 9.9 | 0.62 | 0.968 | -6.48 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: POC anchored → 2 | 116.69 | 50.3% | 0.763 | 8.39 | 13.91 | 0.669 | 0.863 | -8.63 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: EMA 21 → 1.13 | 105.51 | 46.3% | 0.596 | 9.26 | 11.39 | 0.582 | 0.609 | -11.32 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: POC volume profile cố định → 0.813 | 129.61 | 44.4% | 0.554 | 11.03 | 11.75 | 0.586 | 0.52 | -10.44 |  |

### Vòng 633 — ngẫu nhiên nhiều thông số · mốc: tổng 132.04R, win 53.7%, rủi ro tụt vốn 7.65R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng điểm phân kỳ dương ẩn → 2.25 + Cổng Dow → TẮT | 136.71 | 43.8% | 0.61 | 11.08 | 12.34 | 0.666 | 0.555 | -17.87 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: BOS → 1 | 128.56 | 51.4% | 0.932 | 7.69 | 16.72 | 0.783 | 1.103 | -8.91 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Divergence (/100) → 9 + Điểm tối thiểu của vùng đặt SL → 4 | 129.22 | 52.3% | 0.867 | 7.52 | 17.18 | 0.766 | 0.975 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 115.85 | 51.7% | 0.767 | 8.19 | 14.15 | 0.771 | 0.763 | -9.46 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: MACD cắt lên Signal → 0.563 | 128.42 | 52% | 0.845 | 7.68 | 16.72 | 0.728 | 0.975 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: POC volume profile cố định → 0.813 + SL tối đa (% Entry) → 0.425 | 130.4 | 52.7% | 0.881 | 7.67 | 17 | 0.766 | 1.005 | -8.64 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: MACD cắt lên Signal → 0.563 | 116.91 | 50% | 0.749 | 9.02 | 12.96 | 0.614 | 0.907 | -7.08 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 4H (ATR) → 0.3 | 25.65 | 53.3% | 0.121 | 12.75 | 2.01 | 0.004 | 0.206 | -19.4 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: MACD cắt lên Signal → 0.563 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 38.15 | 60.1% | 0.234 | 5.12 | 7.45 | 0.298 | 0.174 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 84.78 | 47.8% | 0.623 | 9.17 | 9.25 | 0.439 | 0.831 | -8.96 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Cộng thêm ngưỡng điểm khung 1W → -1 | 113.27 | 51.5% | 0.845 | 7.85 | 14.43 | 0.741 | 0.966 | -8.27 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu tới TP1 → 2.63 | 88.79 | 46.7% | 0.74 | 9.13 | 9.73 | 0.356 | 1.111 | -12.71 |  |

### Vòng 632 — ngẫu nhiên nhiều thông số · mốc: tổng 127.17R, win 53.1%, rủi ro tụt vốn 7.21R, lời÷rủi ro 17.64

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Coin phải mạnh hơn BTC trong N ngày → 14 | 68.48 | 39.3% | 0.332 | 16.5 | 4.15 | 0.304 | 0.357 | -12.47 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Ngưỡng điểm vào kèo → 77 | 115.24 | 49.3% | 0.812 | 8.42 | 13.69 | 0.728 | 0.911 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: POC volume profile cố định → 0.688 + Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Divergence (/100) → 9 | 126.71 | 52.7% | 0.868 | 7.41 | 17.1 | 0.758 | 0.994 | -9.66 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Cộng điểm phân kỳ dương ẩn → 2.25 | 127.13 | 53.1% | 0.877 | 7.24 | 17.56 | 0.757 | 1.016 | -9.64 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Khung lớn phải tăng (trend ≥) → 0.375 | 114.93 | 49.3% | 0.787 | 8.35 | 13.76 | 0.679 | 0.911 | -8.64 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm tối thiểu của vùng đặt SL → 4 | 89.72 | 46.2% | 0.627 | 9.18 | 9.77 | 0.512 | 0.766 | -9.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 | 105.04 | 44.1% | 0.559 | 10.16 | 10.34 | 0.504 | 0.612 | -6.92 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Coin phải mạnh hơn BTC trong N ngày → 14 | 97.37 | 51.3% | 0.832 | 7.69 | 12.66 | 0.724 | 0.963 | -16.13 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 179.38 | 39% | 0.598 | 17.42 | 10.3 | 0.507 | 0.694 | -12.99 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần SL (/100) → 7 | 126.52 | 52.4% | 0.861 | 7.74 | 16.35 | 0.746 | 0.994 | -8.64 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 + R:R tối thiểu riêng khung 4H → 2 | 91.25 | 40.8% | 0.316 | 13.38 | 6.82 | 0.342 | 0.293 | -10.01 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Fib sóng 4 → 1.56 + % chốt ở TP1 → 0.307 + Số TP tối đa → 2 | 122.28 | 52.4% | 0.832 | 7.61 | 16.07 | 0.689 | 1.003 | -9.67 |  |

### Vòng 631 — ngẫu nhiên nhiều thông số · mốc: tổng 127.17R, win 53.1%, rủi ro tụt vốn 7.33R, lời÷rủi ro 17.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 | 118.94 | 51% | 0.832 | 8.07 | 14.74 | 0.749 | 0.926 | -8.64 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 126.37 | 50.3% | 0.815 | 8.22 | 15.37 | 0.781 | 0.855 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cộng thêm ngưỡng điểm khung 1D → 3 + Trọng số phần Elliott (/100) → 10 | 124.27 | 44.3% | 0.54 | 11.19 | 11.11 | 0.619 | 0.459 | -10.74 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 124.26 | 49.4% | 0.807 | 8.65 | 14.37 | 0.701 | 0.931 | -10.69 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: EMA 200 → 1 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 118.17 | 51.5% | 0.716 | 8.48 | 13.94 | 0.643 | 0.814 | -6.26 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Ngưỡng điểm vào kèo → 74 | 126.52 | 52.4% | 0.861 | 7.63 | 16.58 | 0.746 | 0.994 | -9.66 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 123.86 | 50.7% | 0.848 | 7.99 | 15.5 | 0.792 | 0.905 | -10 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Lệnh chờ hết hạn sau (nến) → 6 + Cộng điểm phân kỳ dương ẩn → 2.25 | 104.89 | 50.8% | 0.795 | 7.96 | 13.18 | 0.759 | 0.838 | -8.27 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: HVN cố định → 0.563 + Cộng thêm ngưỡng điểm khung 1W → 2 + Cộng thêm ngưỡng điểm khung 1D → 5 | 126.34 | 52.1% | 0.865 | 7.53 | 16.78 | 0.754 | 0.993 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.225 + R:R tối thiểu tới TP1 → 2.38 | 90.23 | 45.4% | 0.554 | 10.29 | 8.77 | 0.507 | 0.597 | -11.57 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 123.24 | 52.1% | 0.844 | 7.58 | 16.26 | 0.735 | 0.97 | -10.88 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Divergence (/100) → 12 + SL tối đa (% Entry) → 0.425 | 111.25 | 52% | 0.752 | 8.08 | 13.77 | 0.775 | 0.725 | -9.46 |  |

### Vòng 630 — ngẫu nhiên nhiều thông số · mốc: tổng 127.17R, win 53.1%, rủi ro tụt vốn 7.37R, lời÷rủi ro 17.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Ngưỡng điểm vào kèo → 77 | 36.87 | 59.4% | 0.238 | 5.05 | 7.3 | 0.303 | 0.175 | -10.92 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL riêng khung 4H (ATR) → 0.3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 112.7 | 38.1% | 0.488 | 17.11 | 6.59 | 0.382 | 0.586 | -16.22 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 124.75 | 51.7% | 0.849 | 7.9 | 15.79 | 0.724 | 0.994 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: HVN anchored → 0.313 | 82.02 | 45.3% | 0.59 | 10.08 | 8.14 | 0.457 | 0.711 | -10.5 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Số TP tối đa → 2 | 124.68 | 41.6% | 0.393 | 12.39 | 10.06 | 0.405 | 0.383 | -8.25 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 97.01 | 46.2% | 0.567 | 9.53 | 10.18 | 0.608 | 0.529 | -7.7 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Số TP tối đa → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 | 113.4 | 47.9% | 0.696 | 9.76 | 11.62 | 0.652 | 0.735 | -6.35 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 123.14 | 51.6% | 0.794 | 7.9 | 15.59 | 0.694 | 0.911 | -11.25 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + R:R tối thiểu riêng khung 1W → 2 | 96.89 | 50% | 0.712 | 7.88 | 12.3 | 0.567 | 0.841 | -10.69 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Elliott (/100) → 10 | 111.56 | 49.7% | 0.711 | 9.06 | 12.31 | 0.671 | 0.758 | -9.78 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Biên mây Ichimoku → 1.35 | 122.92 | 51.4% | 0.842 | 7.69 | 15.98 | 0.736 | 0.964 | -8.64 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: HVN cố định → 0.438 | 117.78 | 51.4% | 0.807 | 8.21 | 14.35 | 0.749 | 0.87 | -9.66 |  |

### Vòng 629 — ngẫu nhiên nhiều thông số · mốc: tổng 116.9R, win 53.5%, rủi ro tụt vốn 7.34R, lời÷rủi ro 15.93

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Elliott (/100) → 10 | 80.11 | 50% | 0.679 | 8.21 | 9.76 | 0.523 | 0.864 | -16.13 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Mức MACD → 0.875 | 111.31 | 52.8% | 0.784 | 7.64 | 14.57 | 0.621 | 0.961 | -9.66 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Lệnh chờ hết hạn sau (nến) → 6 | 93.38 | 49.6% | 0.702 | 8.12 | 11.5 | 0.563 | 0.861 | -6.78 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 112.93 | 51.7% | 0.768 | 7.84 | 14.4 | 0.561 | 1.015 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Momentum (/100) → 21 + Trọng số phần Entry (/100) → 28 | 90.51 | 50.8% | 0.767 | 7.66 | 11.82 | 0.607 | 0.963 | -16.13 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: EMA 50 → 1.13 | 100.39 | 50% | 0.697 | 8.19 | 12.26 | 0.594 | 0.813 | -11.78 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 29.92 | 58.7% | 0.193 | 5.98 | 5 | 0.219 | 0.169 | -11.38 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Trọng số phần R:R (/100) → 33 | 97.37 | 51.7% | 0.811 | 7.56 | 12.88 | 0.569 | 1.071 | -10.63 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Cộng thêm ngưỡng điểm khung 4H → -1 + Cộng thêm ngưỡng điểm khung 1W → -1 | 108.06 | 41.7% | 0.35 | 12.46 | 8.67 | 0.334 | 0.363 | -10.72 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + R:R tối thiểu riêng khung 1D → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib sóng 4 → 0.938 | 167.75 | 38.4% | 0.519 | 17.31 | 9.69 | 0.426 | 0.609 | -11.99 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Elliott (/100) → 10 | 110.55 | 49.3% | 0.747 | 8.55 | 12.93 | 0.491 | 1.041 | -9.52 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Mức RSI 30/70 → 1.13 | 115.9 | 53.1% | 0.799 | 7.7 | 15.05 | 0.635 | 0.985 | -9.66 |  |
