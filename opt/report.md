# Tối ưu tự động (chạy liên tục) — vòng 403

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 4506 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46.6% | 96.04R | 0.597 | 5.74R | 10.05R | 9.56 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 145 | 53.1% | 119.02R | 0.821 | 6.15R | 7.26R | 16.39 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 107 | 54.2% | 91.87R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46.6% | 96.04R | 10.05R | 9.56 | 32 | 12.5% | -14.03R |
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

### Vòng 403 — ngẫu nhiên nhiều thông số · mốc: tổng 119.02R, win 53.1%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.39

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần Momentum (/100) → 25 | 115.76 | 52.1% | 0.815 | 7.34 | 15.77 | 0.625 | 1.028 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + R:R tối thiểu tới TP1 → 2.63 + SL tối đa (% Entry) → 0.35 | 101.97 | 52.1% | 0.857 | 7.36 | 13.85 | 0.572 | 1.167 | -10.63 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 200 → 1 | 129.72 | 50% | 0.772 | 8.63 | 15.03 | 0.75 | 0.801 | -6.18 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức RSI 30/70 → 0.875 | 33.95 | 57.2% | 0.196 | 5.97 | 5.69 | 0.238 | 0.153 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 125.48 | 49.4% | 0.794 | 8.03 | 15.63 | 0.761 | 0.833 | -10.07 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Cộng thêm ngưỡng điểm khung 1D → 4 | 117.78 | 53% | 0.79 | 7.55 | 15.6 | 0.666 | 0.927 | -9.66 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 35.63 | 39.8% | 0.405 | 10.69 | 3.33 | 0.345 | 0.474 | -6.21 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm tối thiểu của vùng đặt SL → 2 | 110.97 | 51.4% | 0.75 | 8.39 | 13.23 | 0.602 | 0.915 | -9.66 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần SL (/100) → 7 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: MACD cắt lên Signal → 0.563 | 76.02 | 43.5% | 0.472 | 12.28 | 6.19 | 0.318 | 0.629 | -11.9 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 109.79 | 49.7% | 0.699 | 9.24 | 11.88 | 0.473 | 0.967 | -8.48 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: HVN anchored → 0.313 | 103.54 | 51.4% | 0.709 | 8.08 | 12.81 | 0.602 | 0.833 | -8.84 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: POC anchored → 4 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Đệm SL riêng khung 1D (ATR) → 0.3 | 58.92 | 34.4% | 0.26 | 24.82 | 2.37 | 0.179 | 0.334 | 5.63 |  |

### Vòng 402 — ngẫu nhiên nhiều thông số · mốc: tổng 119.02R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.08

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: HVN cố định → 0.438 + Cộng điểm phân kỳ dương ẩn → 3.5 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 74.05 | 45.7% | 0.705 | 9.03 | 8.2 | 0.484 | 0.979 | -7.84 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần SL (/100) → 7 + SL tối đa (% Entry) → 0.35 | 117.21 | 52.7% | 0.803 | 7.73 | 15.16 | 0.593 | 1.05 | -9.66 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Số TP tối đa → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 108.47 | 51.7% | 0.738 | 7.78 | 13.94 | 0.56 | 0.938 | -10.47 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Cổng Dow → CHẶT | 83.96 | 52.2% | 0.743 | 7.08 | 11.86 | 0.314 | 1.122 | -9.4 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Đệm SL riêng khung 1W (ATR) → 0.3 | 104.14 | 48.9% | 0.771 | 8.34 | 12.49 | 0.485 | 1.045 | -10.7 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: HVN cố định → 0.438 | 98.68 | 50.4% | 0.742 | 7.94 | 12.43 | 0.571 | 0.943 | -8.27 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Momentum (/100) → 25 | 69.25 | 45.7% | 0.537 | 9.75 | 7.1 | 0.452 | 0.631 | -5.29 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 112.59 | 51.4% | 0.793 | 7.75 | 14.53 | 0.573 | 1.039 | -10.95 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Xác nhận khung nhỏ (A2) → W | 91.17 | 38.2% | 0.363 | 16.73 | 5.45 | 0.31 | 0.414 | -10.07 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + SL tối đa (% Entry) → 0.35 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + % chốt ở TP1 → 0.287 | 100.63 | 48.9% | 0.724 | 8.58 | 11.73 | 0.618 | 0.849 | -8.65 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm tối thiểu của vùng đặt SL → 4 | 115.08 | 51.7% | 0.794 | 7.69 | 14.96 | 0.63 | 0.978 | -9.66 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Break mây Ichimoku → 3 | 88.57 | 45.6% | 0.594 | 10.17 | 8.71 | 0.422 | 0.789 | -4.82 |  |

### Vòng 401 — ngẫu nhiên nhiều thông số · mốc: tổng 119.02R, win 53.1%, rủi ro tụt vốn 7.34R, lời÷rủi ro 16.22

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: HVN anchored → 0.313 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 80.55 | 48.5% | 0.592 | 9.07 | 8.88 | 0.483 | 0.715 | -11.27 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.63 + % chốt ở TP1 → 0.287 | 118.84 | 53.1% | 0.82 | 7.34 | 16.19 | 0.621 | 1.051 | -9.64 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1W → 2 | 89.34 | 41% | 0.31 | 13.42 | 6.66 | 0.328 | 0.295 | -11.84 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + R:R tối thiểu riêng khung 1D → 2 | 107.88 | 46.1% | 0.646 | 8.88 | 12.15 | 0.633 | 0.658 | -7.92 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 104.23 | 50.3% | 0.69 | 8.54 | 12.2 | 0.453 | 0.965 | -7.08 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Mức RSI 30/70 → 0.875 | 121.99 | 49.4% | 0.726 | 8.72 | 13.99 | 0.553 | 0.946 | -10.89 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: EMA 200 → 3 | 104.96 | 49% | 0.714 | 8.21 | 12.78 | 0.46 | 1.001 | -9.62 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 4H → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 90.4 | 35.9% | 0.239 | 25.32 | 3.57 | 0.201 | 0.254 | -11.53 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 118.05 | 51% | 0.826 | 7.62 | 15.49 | 0.676 | 0.995 | -12.92 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: POC volume profile cố định → 0.813 + Ngưỡng điểm vào kèo → 74 + Trọng số phần Momentum (/100) → 21 | 118.15 | 52.4% | 0.804 | 7.63 | 15.48 | 0.626 | 1.005 | -8.65 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: BOS → 1 | 108 | 50.3% | 0.735 | 8.29 | 13.03 | 0.552 | 0.959 | -9.66 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: BOS → 3 + Điểm vùng: POC anchored → 4 | 115.13 | 51.7% | 0.762 | 7.94 | 14.5 | 0.586 | 0.946 | -2.4 |  |

### Vòng 400 — ngẫu nhiên nhiều thông số · mốc: tổng 119.02R, win 53.1%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.39

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 117.13 | 51.8% | 0.831 | 7.55 | 15.51 | 0.641 | 1.052 | -14.21 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: HVN anchored → 0.313 | 119.03 | 53.1% | 0.821 | 7.26 | 16.4 | 0.624 | 1.05 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: MACD cắt lên Signal → 0.438 | 122.55 | 43.8% | 0.522 | 11.61 | 10.56 | 0.531 | 0.512 | -9.85 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 19.36 | 55.2% | 0.167 | 6.27 | 3.09 | 0.199 | 0.133 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cổng Dow → CHẶT | 56.57 | 49.1% | 0.496 | 8.11 | 6.98 | 0.353 | 0.617 | -10.62 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: BOS → 3 | 115.76 | 52.4% | 0.798 | 7.55 | 15.33 | 0.594 | 1.03 | -9.66 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + % chốt ở TP1 → 0.287 | 95.46 | 47% | 0.641 | 9.82 | 9.72 | 0.472 | 0.864 | -9.16 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: Mức RSI 30/70 → 1.13 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Trend (/100) → 19 | 108.88 | 46.5% | 0.633 | 9.13 | 11.93 | 0.594 | 0.67 | -10.98 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL riêng khung 1D (ATR) → 0.3 | 69.74 | 42.2% | 0.601 | 10.89 | 6.4 | 0.397 | 0.779 | -5.08 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Cổng Dow → CHẶT + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 83.87 | 51.8% | 0.736 | 7.41 | 11.32 | 0.297 | 1.131 | -12.01 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 87.2 | 47.2% | 0.698 | 8.72 | 10 | 0.504 | 0.936 | -17.16 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Ngưỡng điểm vào kèo → 77 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 25.13 | 35.2% | 0.286 | 13.55 | 1.85 | 0.178 | 0.441 | -2.53 |  |

### Vòng 399 — ngẫu nhiên nhiều thông số · mốc: tổng 119.02R, win 53.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: EMA 21 → 1.13 + % chốt ở TP1 → 0.307 | 113.79 | 52% | 0.769 | 7.42 | 15.34 | 0.605 | 0.962 | -10.01 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Coin phải mạnh hơn BTC trong N ngày → 14 | 88.71 | 51.3% | 0.758 | 7.74 | 11.46 | 0.552 | 1.007 | -16.13 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 97.74 | 49.6% | 0.724 | 8.26 | 11.83 | 0.45 | 1.028 | -11.51 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 117.5 | 52.4% | 0.822 | 7.36 | 15.96 | 0.64 | 1.028 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Xác nhận khung nhỏ (A2) → W + Trọng số phần Momentum (/100) → 21 | 92.71 | 36.6% | 0.35 | 17.63 | 5.26 | 0.312 | 0.388 | -5.39 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: Biên mây Ichimoku → 1.35 + Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 155.08 | 38.1% | 0.537 | 19 | 8.16 | 0.338 | 0.742 | -15.51 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: EMA 50 → 0.75 | 122.83 | 52.2% | 0.782 | 7.94 | 15.47 | 0.609 | 0.993 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trọng số phần Elliott (/100) → 6 | 118.83 | 52.7% | 0.814 | 7.53 | 15.78 | 0.614 | 1.05 | -9.66 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: EMA 50 → 0.75 | 110.11 | 51.7% | 0.759 | 8.06 | 13.66 | 0.565 | 0.98 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 125.57 | 50% | 0.805 | 8.17 | 15.37 | 0.732 | 0.893 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Entry (/100) → 28 | 101.88 | 51% | 0.684 | 8.19 | 12.44 | 0.616 | 0.762 | -8.11 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 50 → 1.13 | 99.8 | 40.1% | 0.52 | 13.33 | 7.49 | 0.531 | 0.51 | -4.53 |  |

### Vòng 398 — ngẫu nhiên nhiều thông số · mốc: tổng 119.02R, win 53.1%, rủi ro tụt vốn 7.41R, lời÷rủi ro 16.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Cộng thêm ngưỡng điểm khung 1D → 4 | 38.1 | 40.9% | 0.433 | 10.08 | 3.78 | 0.347 | 0.541 | -8.58 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 114.41 | 51.7% | 0.8 | 7.77 | 14.72 | 0.575 | 1.063 | -10.93 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 115.03 | 52% | 0.777 | 7.81 | 14.73 | 0.592 | 0.996 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 76.33 | 47.6% | 0.727 | 8.37 | 9.12 | 0.473 | 1.029 | -6.48 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Break mây Ichimoku → 3 + R:R tối thiểu tới TP1 → 2.38 | 99.49 | 45.7% | 0.541 | 9.85 | 10.1 | 0.431 | 0.65 | -10.72 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: EMA 50 → 0.75 | 111.9 | 47.6% | 0.658 | 8.74 | 12.8 | 0.632 | 0.682 | -7.92 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: EMA 21 → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 + Coin phải mạnh hơn BTC trong N ngày → 14 | 76.65 | 45.3% | 0.723 | 8.8 | 8.71 | 0.518 | 0.971 | -15.65 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + SL tối đa (% Entry) → 0.35 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: HVN cố định → 0.563 | 124.88 | 50.3% | 0.816 | 8.24 | 15.16 | 0.75 | 0.893 | -10.24 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Lệnh chờ hết hạn sau (nến) → 8 | 113.13 | 50.3% | 0.712 | 8.48 | 13.34 | 0.547 | 0.906 | -11.25 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: BOS → 1 + Trọng số phần SL (/100) → 7 + Số TP tối đa → 2 | 119.28 | 52.7% | 0.817 | 7.46 | 15.99 | 0.608 | 1.063 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Cộng điểm phân kỳ dương ẩn → 3.5 + Đệm SL riêng khung 4H (ATR) → 0.3 | 154.79 | 37.3% | 0.525 | 19.17 | 8.07 | 0.39 | 0.657 | -14.03 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Biên mây Ichimoku → 1.05 + Coin phải mạnh hơn BTC trong N ngày → 14 | 80 | 50.4% | 0.684 | 8.19 | 9.77 | 0.533 | 0.854 | -18.25 |  |

### Vòng 397 — ngẫu nhiên nhiều thông số · mốc: tổng 119.02R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.08

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 4 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Divergence (/100) → 9 | 159.36 | 38.9% | 0.544 | 18.5 | 8.61 | 0.387 | 0.702 | -14.44 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Cộng thêm ngưỡng điểm khung 1W → -1 | 103.64 | 49.7% | 0.696 | 8.32 | 12.46 | 0.525 | 0.888 | -11.02 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Break mây Ichimoku → 1 | 105.2 | 50% | 0.711 | 8.51 | 12.36 | 0.542 | 0.899 | -9.73 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Biên mây Ichimoku → 1.05 | 106.23 | 51% | 0.733 | 7.95 | 13.36 | 0.594 | 0.881 | -10.46 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: Fib sóng 4 → 1.56 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 104.89 | 51.7% | 0.704 | 8.26 | 12.7 | 0.596 | 0.833 | -8.88 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần Entry (/100) → 33 + Điểm vùng: EMA 200 → 3 | 107.59 | 49% | 0.752 | 7.92 | 13.58 | 0.558 | 0.967 | -12.88 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 29.74 | 58% | 0.189 | 5.73 | 5.19 | 0.263 | 0.122 | -11.2 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Biên mây Ichimoku → 1.05 + R:R tối thiểu tới TP1 → 2.63 | 91.43 | 50.8% | 0.737 | 7.98 | 11.46 | 0.494 | 0.997 | -11.92 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: EMA 200 → 3 + Điểm vùng: POC anchored → 4 | 108.17 | 51.4% | 0.741 | 7.71 | 14.03 | 0.517 | 0.978 | -8.23 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 50 → 1.13 + Đệm SL riêng khung 4H (ATR) → 0.3 | 156.98 | 38.3% | 0.523 | 18.36 | 8.55 | 0.458 | 0.591 | -9.8 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 123.9 | 42.3% | 0.514 | 11.69 | 10.6 | 0.552 | 0.476 | -8.73 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: EMA 200 → 3 + Trọng số phần Momentum (/100) → 21 + Trọng số phần Divergence (/100) → 12 | 91.9 | 49% | 0.625 | 8.74 | 10.51 | 0.506 | 0.76 | -9.39 |  |

### Vòng 396 — ngẫu nhiên nhiều thông số · mốc: tổng 119.02R, win 53.1%, rủi ro tụt vốn 7.4R, lời÷rủi ro 16.08

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Momentum (/100) → 21 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 92.35 | 46.6% | 0.624 | 9.39 | 9.83 | 0.441 | 0.864 | -9.16 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 36.48 | 40.2% | 0.419 | 10.43 | 3.5 | 0.324 | 0.537 | -6.2 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Mức MACD → 0.875 | 94.76 | 47.4% | 0.712 | 8.9 | 10.65 | 0.434 | 0.978 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: HVN anchored → 0.313 | 94.44 | 48.9% | 0.7 | 8.33 | 11.34 | 0.513 | 0.926 | -8.09 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 113.3 | 51% | 0.792 | 7.58 | 14.95 | 0.599 | 1.012 | -9.48 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần Trend (/100) → 19 | 118.74 | 51.7% | 0.786 | 7.66 | 15.5 | 0.619 | 0.975 | -4.31 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Cộng thêm ngưỡng điểm khung 4H → 2 | 113.11 | 49.6% | 0.838 | 8.02 | 14.1 | 0.648 | 1.061 | -8.91 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: EMA 21 → 0.875 | 100.21 | 49.3% | 0.737 | 8.28 | 12.1 | 0.52 | 0.974 | -11.51 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 102.59 | 42% | 0.402 | 12.68 | 8.09 | 0.505 | 0.295 | -13.11 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 155.84 | 38.9% | 0.523 | 18.52 | 8.41 | 0.35 | 0.698 | -14.64 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: EMA 200 → 1 | 121.53 | 41.5% | 0.388 | 12.28 | 9.9 | 0.35 | 0.421 | -8.72 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: BOS → 1 + Điểm vùng: EMA 50 → 1.13 | 106.99 | 49.7% | 0.718 | 8.29 | 12.91 | 0.584 | 0.862 | -9.68 |  |

### Vòng 395 — ngẫu nhiên nhiều thông số · mốc: tổng 119.02R, win 53.1%, rủi ro tụt vốn 7.41R, lời÷rủi ro 16.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Fib sóng 4 → 1.56 + Coin phải mạnh hơn BTC trong N ngày → 14 | 90.74 | 50% | 0.769 | 7.95 | 11.41 | 0.591 | 0.995 | -15.11 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + R:R tối thiểu tới TP1 → 2.63 | 159.29 | 36.8% | 0.553 | 19.68 | 8.09 | 0.406 | 0.709 | -9.61 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Xác nhận khung nhỏ (A2) → W | 22.68 | 50% | 0.079 | 11.77 | 1.93 | 0.124 | 0.034 | -12.1 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Mức MACD → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: HVN anchored → 0.313 | 109.27 | 51.1% | 0.775 | 7.98 | 13.69 | 0.582 | 0.994 | -8.67 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần R:R (/100) → 28 | 119.02 | 53.1% | 0.821 | 7.41 | 16.06 | 0.624 | 1.05 | -9.66 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: HVN anchored → 0.188 | 104.56 | 51.7% | 0.711 | 8.11 | 12.89 | 0.624 | 0.81 | -7.53 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: BOS → 1 | 119.02 | 53.1% | 0.821 | 7.41 | 16.06 | 0.624 | 1.05 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Lệnh chờ hết hạn sau (nến) → 6 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 91.67 | 49.2% | 0.694 | 8.03 | 11.42 | 0.501 | 0.913 | -8.23 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm tối thiểu của vùng đặt SL → 4 | 109.18 | 48.9% | 0.797 | 8.47 | 12.89 | 0.603 | 1.032 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 117.78 | 52.7% | 0.796 | 7.74 | 15.22 | 0.586 | 1.05 | -11.06 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 | 103.65 | 47.1% | 0.61 | 9.05 | 11.45 | 0.643 | 0.58 | -10.04 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Khung lớn phải tăng (trend ≥) → 0.425 + R:R tối thiểu riêng khung 1W → 2 | 106.65 | 50.3% | 0.736 | 7.94 | 13.43 | 0.574 | 0.904 | -10.73 |  |

### Vòng 394 — ngẫu nhiên nhiều thông số · mốc: tổng 118.18R, win 53.1%, rủi ro tụt vốn 7.52R, lời÷rủi ro 15.72

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Biên mây Ichimoku → 1.05 | 69.43 | 48.1% | 0.655 | 8.6 | 8.07 | 0.487 | 0.843 | -6.55 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Trọng số phần Momentum (/100) → 25 + R:R tối thiểu tới TP1 → 2.63 | 98.37 | 50.4% | 0.827 | 7.99 | 12.31 | 0.55 | 1.128 | -10.63 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Cổng Dow → TẮT + Trọng số phần Elliott (/100) → 10 | 129.07 | 44.1% | 0.612 | 10.97 | 11.77 | 0.512 | 0.711 | -13.53 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 100.59 | 49.7% | 0.633 | 9.63 | 10.45 | 0.507 | 0.773 | -2.86 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: BOS → 1 | 117.68 | 52.8% | 0.829 | 7.49 | 15.71 | 0.653 | 1.026 | -7.57 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 117.68 | 52.8% | 0.829 | 7.49 | 15.71 | 0.653 | 1.026 | -7.57 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 111.93 | 44.1% | 0.493 | 11.44 | 9.78 | 0.567 | 0.419 | -7.93 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Trọng số phần SL (/100) → 9 | 117.68 | 52.8% | 0.829 | 7.49 | 15.71 | 0.653 | 1.026 | -7.57 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Cộng điểm phân kỳ dương ẩn → 3.5 + Coin phải mạnh hơn BTC trong N ngày → 14 | 84.66 | 48.6% | 0.777 | 7.95 | 10.65 | 0.563 | 1.048 | -13.53 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Xác nhận khung nhỏ (A2) → W + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 70.35 | 38.1% | 0.327 | 17.48 | 4.02 | 0.367 | 0.283 | -1.22 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Cộng điểm phân kỳ dương ẩn → 2.63 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 115.81 | 51.7% | 0.799 | 7.76 | 14.92 | 0.593 | 1.038 | -7.57 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 108.88 | 48.6% | 0.767 | 8.51 | 12.79 | 0.561 | 0.978 | -7.3 |  |
