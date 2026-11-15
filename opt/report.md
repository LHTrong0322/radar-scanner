# Tối ưu tự động (chạy liên tục) — vòng 306

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 3342 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 160 | 46.3% | 90.4R | 0.565 | 5.74R | 10.19R | 8.87 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 144 | 52.8% | 113.57R | 0.789 | 6.15R | 7.59R | 14.96 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 106 | 53.8% | 86.41R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 160 | 46.3% | 90.4R | 10.19R | 8.87 | 32 | 12.5% | -14.03R |
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

### Vòng 306 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.59R, lời÷rủi ro 14.96

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: BOS → 1 + Cộng thêm ngưỡng điểm khung 1D → 4 + R:R tối thiểu riêng khung 1W → 2 | 102.64 | 50.3% | 0.698 | 7.94 | 12.93 | 0.626 | 0.771 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 100.39 | 48.4% | 0.624 | 9.77 | 10.28 | 0.502 | 0.782 | -2.26 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 | 11.82 | 38.3% | 0.197 | 10.54 | 1.12 | 0.002 | 0.346 | -4.17 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 111.29 | 51.7% | 0.778 | 7.72 | 14.42 | 0.64 | 0.935 | -8.35 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: HVN anchored → 0.188 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 23.85 | 57.1% | 0.17 | 5.74 | 4.16 | 0.247 | 0.1 | -5.37 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 122.83 | 50% | 0.798 | 8.09 | 15.18 | 0.767 | 0.835 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 102.54 | 50% | 0.702 | 8.32 | 12.32 | 0.552 | 0.89 | -9.66 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + R:R tối thiểu riêng khung 1W → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 105.22 | 48.6% | 0.752 | 8.41 | 12.51 | 0.588 | 0.935 | -9.95 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Số TP tối đa → 2 | 110.86 | 52.1% | 0.759 | 7.8 | 14.21 | 0.606 | 0.94 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Break mây Ichimoku → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 54.05 | 41.4% | 0.334 | 13.18 | 4.1 | 0.388 | 0.273 | -7.33 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: EMA 200 → 1 + Lệnh chờ hết hạn sau (nến) → 8 + Cổng Dow → TẮT | 123.96 | 42.5% | 0.502 | 12.96 | 9.56 | 0.522 | 0.481 | -13.33 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + R:R tối thiểu tới TP1 → 2.63 + Cộng thêm ngưỡng điểm khung 1W → -1 | 95.47 | 51.7% | 0.796 | 7.97 | 11.98 | 0.557 | 1.069 | -11.65 |  |

### Vòng 305 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.39R, lời÷rủi ro 15.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 4H (ATR) → 0.3 | 78.95 | 30% | 0.195 | 34.35 | 2.3 | 0.201 | 0.191 | -41.46 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 92.08 | 43.9% | 0.532 | 12.93 | 7.12 | 0.544 | 0.52 | -2.29 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: BOS → 1 | 104.31 | 51% | 0.7 | 7.83 | 13.32 | 0.6 | 0.807 | -9.67 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 | 103.62 | 45.7% | 0.632 | 10.8 | 9.59 | 0.645 | 0.62 | -5.33 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Lệnh chờ hết hạn sau (nến) → 8 + Cộng thêm ngưỡng điểm khung 1W → 2 | 108.6 | 50% | 0.696 | 8.46 | 12.84 | 0.553 | 0.868 | -10.24 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 + R:R tối thiểu tới TP1 → 2.38 | 79.76 | 39.9% | 0.277 | 13.94 | 5.72 | 0.269 | 0.284 | -6.79 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 4H (ATR) → 0.3 | 71.56 | 29.4% | 0.181 | 36.46 | 1.96 | 0.175 | 0.186 | -34.04 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần Trend (/100) → 19 | 110.19 | 51.4% | 0.765 | 7.65 | 14.4 | 0.595 | 0.967 | -8.46 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 71.72 | 46.5% | 0.556 | 9.65 | 7.43 | 0.483 | 0.635 | -3.27 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần R:R (/100) → 28 | 103.81 | 49.4% | 0.674 | 9.12 | 11.38 | 0.491 | 0.894 | -6.06 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Cộng thêm ngưỡng điểm khung 1D → 7 | 102.08 | 49.3% | 0.719 | 8.23 | 12.4 | 0.584 | 0.874 | -9.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1D → 4 + Đệm SL riêng khung 1D (ATR) → 0.3 | 91.31 | 43.8% | 0.597 | 11.67 | 7.82 | 0.531 | 0.653 | -6.37 |  |

### Vòng 304 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.20

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Elliott (/100) → 6 + R:R tối thiểu tới TP1 → 2.38 | 96.41 | 45.3% | 0.533 | 9.21 | 10.47 | 0.554 | 0.514 | -7.93 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 99.19 | 49.3% | 0.661 | 8.87 | 11.18 | 0.523 | 0.827 | -6.06 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + SL tối đa (% Entry) → 0.35 + Số TP tối đa → 2 | 110.89 | 51.7% | 0.775 | 7.93 | 13.98 | 0.609 | 0.964 | -7.62 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: HVN anchored → 0.313 + Cộng thêm ngưỡng điểm khung 1W → -1 + Khung lớn phải tăng (trend ≥) → 0.425 | 102.62 | 51.1% | 0.749 | 7.76 | 13.22 | 0.568 | 0.956 | -8.67 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + R:R tối thiểu riêng khung 1D → 2 | 103.68 | 46.5% | 0.61 | 9.19 | 11.28 | 0.606 | 0.614 | -6.9 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: BOS → 3 | 109.84 | 50.3% | 0.758 | 7.82 | 14.05 | 0.655 | 0.864 | -8.98 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trọng số phần Momentum (/100) → 21 + R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 1W → 2 | 104.5 | 50.7% | 0.706 | 8.05 | 12.98 | 0.624 | 0.791 | -9.67 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 102.06 | 48.4% | 0.658 | 9.45 | 10.8 | 0.477 | 0.873 | -6.06 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 109.84 | 50.3% | 0.758 | 7.82 | 14.05 | 0.655 | 0.864 | -8.98 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 63.04 | 46.1% | 0.618 | 8.77 | 7.19 | 0.473 | 0.802 | -5.46 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Fib sóng 4 → 1.56 | 112.43 | 52.4% | 0.765 | 7.82 | 14.38 | 0.587 | 0.982 | -8.65 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + R:R tối thiểu riêng khung 4H → 2 | 111.73 | 41.7% | 0.362 | 12.26 | 9.11 | 0.339 | 0.38 | -9.82 |  |

### Vòng 303 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.44R, lời÷rủi ro 15.26

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Ngưỡng điểm vào kèo → 74 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 72.74 | 47.1% | 0.611 | 8.69 | 8.37 | 0.498 | 0.753 | -15.1 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần SL (/100) → 9 | 99.43 | 51.3% | 0.654 | 8.19 | 12.14 | 0.595 | 0.724 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 111.63 | 52.1% | 0.775 | 7.48 | 14.92 | 0.609 | 0.966 | -8.46 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần Momentum (/100) → 25 | 113.57 | 52.8% | 0.789 | 7.44 | 15.26 | 0.624 | 0.983 | -8.64 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: BOS → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 110.85 | 49.3% | 0.729 | 8.45 | 13.12 | 0.584 | 0.899 | -9.67 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + R:R tối thiểu riêng khung 4H → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 110.12 | 42.9% | 0.363 | 12.71 | 8.66 | 0.357 | 0.369 | -6.27 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 20.62 | 41.5% | 0.389 | 8.95 | 2.3 | 0.189 | 0.582 | -2.73 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Mức RSI 30/70 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 112.47 | 49.7% | 0.745 | 8.16 | 13.78 | 0.611 | 0.899 | -9.67 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Số TP tối đa → 2 + Trọng số phần Entry (/100) → 33 | 110.3 | 51.8% | 0.794 | 7.43 | 14.85 | 0.674 | 0.93 | -8.64 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Số TP tối đa → 2 | 166.68 | 38.9% | 0.569 | 18.24 | 9.14 | 0.397 | 0.745 | -12.13 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Biên mây Ichimoku → 1.05 | 91.9 | 49.7% | 0.601 | 9.71 | 9.46 | 0.489 | 0.733 | -8.18 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Biên mây Ichimoku → 1.35 | 107.94 | 50% | 0.76 | 7.91 | 13.65 | 0.622 | 0.91 | -7.62 |  |

### Vòng 302 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.20

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: HVN anchored → 0.188 | 101.79 | 49.7% | 0.692 | 8.26 | 12.32 | 0.552 | 0.865 | -7.9 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Ngưỡng điểm vào kèo → 74 + Trọng số phần SL (/100) → 9 | 31.55 | 58.1% | 0.197 | 5.68 | 5.55 | 0.232 | 0.164 | -11.16 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trọng số phần R:R (/100) → 33 + R:R tối thiểu riêng khung 4H → 2 | 121.26 | 42.5% | 0.387 | 11.76 | 10.31 | 0.339 | 0.427 | -9.85 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 112.29 | 49.3% | 0.814 | 8.4 | 13.37 | 0.592 | 1.085 | -7.89 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Trọng số phần SL (/100) → 9 | 112.04 | 52.1% | 0.789 | 7.47 | 15 | 0.64 | 0.961 | -8.64 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 110.78 | 49.3% | 0.729 | 8.51 | 13.02 | 0.582 | 0.9 | -9.65 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần Momentum (/100) → 21 + Điểm vùng: POC anchored → 4 + Đệm SL riêng khung 1D (ATR) → 0.3 | 115.11 | 46.1% | 0.689 | 10.29 | 11.19 | 0.675 | 0.702 | -0.41 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 86.29 | 47.4% | 0.639 | 8.89 | 9.71 | 0.555 | 0.72 | -9.45 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Cổng Dow → TẮT + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 98.01 | 40.7% | 0.469 | 13.64 | 7.19 | 0.43 | 0.511 | -14.15 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm vùng: EMA 21 → 0.875 + Lệnh chờ hết hạn sau (nến) → 8 | 107.57 | 49.4% | 0.698 | 8.78 | 12.25 | 0.603 | 0.81 | -10.23 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib sóng 4 → 1.56 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 107.79 | 47% | 0.657 | 10.52 | 10.25 | 0.63 | 0.685 | -5.33 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần SL (/100) → 7 | 115.66 | 51.6% | 0.727 | 8.6 | 13.45 | 0.577 | 0.914 | -8.64 |  |

### Vòng 301 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.39R, lời÷rủi ro 15.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 | 106.07 | 49.6% | 0.752 | 8.1 | 13.1 | 0.614 | 0.896 | -8.5 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trọng số phần SL (/100) → 9 | 111.09 | 51.7% | 0.766 | 7.64 | 14.54 | 0.604 | 0.961 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: BOS → 3 | 100.82 | 49.3% | 0.681 | 8.86 | 11.38 | 0.525 | 0.86 | -10 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Fib sóng 4 → 0.938 | 107.79 | 50.3% | 0.733 | 8.17 | 13.19 | 0.562 | 0.943 | -8.91 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Cổng Dow → TẮT + Điểm vùng: POC volume profile cố định → 0.688 | 31.83 | 34.4% | 0.249 | 14.08 | 2.26 | 0.302 | 0.18 | -3.68 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL riêng khung 1D (ATR) → 0.3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 156.06 | 37.6% | 0.497 | 20.18 | 7.73 | 0.504 | 0.491 | -10.43 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần Trend (/100) → 12 + Cộng thêm ngưỡng điểm khung 4H → 2 + Trọng số phần SL (/100) → 7 | 99.54 | 49.7% | 0.677 | 8.86 | 11.23 | 0.537 | 0.844 | -6.06 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần Elliott (/100) → 10 + R:R tối thiểu riêng khung 4H → 2 | 115.86 | 41.7% | 0.371 | 12.36 | 9.37 | 0.334 | 0.403 | -12.07 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 91.69 | 48.7% | 0.603 | 9.4 | 9.75 | 0.458 | 0.773 | -6.02 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + R:R tối thiểu riêng khung 4H → 2 | 112.87 | 40.6% | 0.349 | 13.73 | 8.22 | 0.425 | 0.292 | -7.02 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Coin phải mạnh hơn BTC trong N ngày → 14 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 16.15 | 56.7% | 0.127 | 7.1 | 2.27 | 0.146 | 0.108 | -11.43 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Trọng số phần SL (/100) → 7 + Điểm vùng: EMA 21 → 1.13 | 58.43 | 42.6% | 0.43 | 11.51 | 5.08 | 0.403 | 0.459 | -3.22 |  |

### Vòng 300 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.20

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 81.87 | 37.2% | 0.343 | 16.83 | 4.86 | 0.305 | 0.376 | -6.85 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Số TP tối đa → 2 + % chốt ở TP1 → 0.307 + Trọng số phần SL (/100) → 9 | 93.44 | 49.3% | 0.697 | 8.32 | 11.23 | 0.57 | 0.854 | -7.26 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: HVN cố định → 0.563 | 110.43 | 50.6% | 0.717 | 8.43 | 13.1 | 0.61 | 0.852 | -3.82 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Khung lớn phải tăng (trend ≥) → 0.375 | 110.28 | 51% | 0.74 | 8.1 | 13.61 | 0.575 | 0.907 | -2.69 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Lệnh chờ hết hạn sau (nến) → 6 + Cộng thêm ngưỡng điểm khung 1W → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 | 90.5 | 44.7% | 0.595 | 11.23 | 8.06 | 0.653 | 0.538 | -2.18 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 104.55 | 51.4% | 0.747 | 7.81 | 13.39 | 0.573 | 0.947 | -8.64 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 117.65 | 37.8% | 0.523 | 18.19 | 6.47 | 0.447 | 0.59 | -19.24 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: POC anchored → 2 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 87.49 | 47.9% | 0.625 | 8.95 | 9.78 | 0.481 | 0.786 | -6.22 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm tối thiểu của vùng đặt SL → 4 | 107.83 | 51.1% | 0.765 | 7.65 | 14.1 | 0.632 | 0.912 | -8.63 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: EMA 21 → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 4 | 104.83 | 49% | 0.668 | 9.2 | 11.39 | 0.569 | 0.776 | -8.38 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Đệm SL riêng khung 1W (ATR) → 0.3 | 82.95 | 44.9% | 0.564 | 9.74 | 8.52 | 0.574 | 0.556 | -10.58 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trọng số phần Divergence (/100) → 9 | 90.2 | 46.6% | 0.609 | 9.8 | 9.2 | 0.475 | 0.791 | -8.14 |  |

### Vòng 299 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.47R, lời÷rủi ro 15.20

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Đệm SL riêng khung 1W (ATR) → 0.3 | 105.28 | 50% | 0.741 | 8.35 | 12.61 | 0.569 | 0.924 | -9.68 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: POC volume profile cố định → 0.813 | 110.45 | 51.4% | 0.757 | 7.73 | 14.29 | 0.581 | 0.963 | -7.62 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 111.09 | 51.7% | 0.756 | 7.86 | 14.13 | 0.603 | 0.933 | -8.64 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Break mây Ichimoku → 3 | 102.86 | 49.1% | 0.639 | 9.12 | 11.28 | 0.496 | 0.807 | -8.38 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 162.51 | 37.4% | 0.482 | 19.07 | 8.52 | 0.366 | 0.598 | -15.33 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Cổng Dow → CHẶT + Trọng số phần Elliott (/100) → 6 + Trọng số phần Entry (/100) → 28 | 84.21 | 51.2% | 0.696 | 7.68 | 10.96 | 0.376 | 1 | -10.73 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Break mây Ichimoku → 3 | 23.99 | 54.4% | 0.133 | 8 | 3 | 0.213 | 0.056 | -11.39 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Cộng thêm ngưỡng điểm khung 4H → 2 | 114.06 | 52.9% | 0.815 | 7.15 | 15.95 | 0.684 | 0.961 | -8.64 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần SL (/100) → 7 | 116.43 | 41.3% | 0.388 | 12.73 | 9.15 | 0.357 | 0.416 | -10.81 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Cộng thêm ngưỡng điểm khung 1W → -1 | 113.57 | 52.8% | 0.789 | 7.47 | 15.2 | 0.624 | 0.983 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: HVN anchored → 0.188 | 100.71 | 50% | 0.663 | 9.19 | 10.96 | 0.512 | 0.849 | -6.06 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: EMA 21 → 0.875 | 91.66 | 40.4% | 0.314 | 13.47 | 6.8 | 0.276 | 0.345 | -7.87 |  |

### Vòng 298 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.41R, lời÷rủi ro 15.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + % chốt ở TP1 → 0.287 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 99.5 | 49.7% | 0.65 | 9.31 | 10.69 | 0.491 | 0.85 | -6.04 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Coin phải mạnh hơn BTC trong N ngày → 14 | 64.75 | 47.7% | 0.605 | 8.8 | 7.36 | 0.473 | 0.768 | -13.71 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Trọng số phần R:R (/100) → 33 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 102.62 | 50% | 0.713 | 7.96 | 12.89 | 0.502 | 0.954 | -8.6 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 109.51 | 52.7% | 0.74 | 7.86 | 13.93 | 0.587 | 0.924 | -8.65 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 107.58 | 50.3% | 0.742 | 8.09 | 13.3 | 0.605 | 0.889 | -8.98 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 109.91 | 52.8% | 0.763 | 7.21 | 15.24 | 0.642 | 0.903 | -8.64 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Mức MACD → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 | 102.59 | 51.4% | 0.733 | 8.06 | 12.73 | 0.568 | 0.912 | -8.67 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + % chốt ở TP1 → 0.287 | 111.89 | 52.1% | 0.788 | 7.54 | 14.84 | 0.637 | 0.962 | -8.62 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng điểm phân kỳ dương ẩn → 2.63 | 104.01 | 47.7% | 0.689 | 8.95 | 11.62 | 0.52 | 0.884 | -9.49 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 95.94 | 44.9% | 0.545 | 11.79 | 8.14 | 0.531 | 0.559 | -2.41 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 | 102.35 | 48.7% | 0.648 | 9.14 | 11.2 | 0.525 | 0.787 | -8.38 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: HVN cố định → 0.438 | 109.04 | 51.8% | 0.784 | 7.62 | 14.31 | 0.582 | 1.021 | -8.67 |  |

### Vòng 297 — ngẫu nhiên nhiều thông số · mốc: tổng 113.57R, win 52.8%, rủi ro tụt vốn 7.5R, lời÷rủi ro 15.14

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: POC anchored → 4 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 111.54 | 50% | 0.744 | 8.36 | 13.34 | 0.546 | 0.952 | -2.44 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: EMA 50 → 0.75 + R:R tối thiểu riêng khung 4H → 2 | 114.99 | 42.2% | 0.367 | 12.11 | 9.5 | 0.326 | 0.403 | -8.82 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần Trend (/100) → 19 + R:R tối thiểu riêng khung 1W → 2 | 23.07 | 36.6% | 0.281 | 11.6 | 1.99 | 0.173 | 0.443 | -9.62 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: POC volume profile cố định → 0.688 + Cộng thêm ngưỡng điểm khung 1W → 2 | 108.49 | 50% | 0.753 | 7.92 | 13.7 | 0.518 | 1.01 | -8.5 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Coin phải mạnh hơn BTC trong N ngày → 14 | 71.56 | 46.4% | 0.572 | 9.42 | 7.6 | 0.569 | 0.576 | -17.34 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: EMA 21 → 0.875 | 90.13 | 44.7% | 0.601 | 10.12 | 8.91 | 0.524 | 0.702 | -8.69 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 103.3 | 48.3% | 0.712 | 9.09 | 11.36 | 0.546 | 0.923 | -6.47 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 86.97 | 40.1% | 0.306 | 12.97 | 6.71 | 0.287 | 0.324 | -6.72 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 107.15 | 52.4% | 0.729 | 7.69 | 13.93 | 0.576 | 0.907 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: EMA 50 → 0.75 + Đệm SL riêng khung 1D (ATR) → 0.3 | 104.73 | 46.9% | 0.655 | 10.29 | 10.18 | 0.625 | 0.682 | -5.33 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Cộng điểm phân kỳ dương ẩn → 2.63 + Trọng số phần Momentum (/100) → 25 | 112.04 | 52.1% | 0.789 | 7.47 | 15 | 0.64 | 0.961 | -8.64 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Divergence (/100) → 9 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 106.86 | 51.4% | 0.722 | 8.07 | 13.24 | 0.559 | 0.919 | -8.67 |  |
