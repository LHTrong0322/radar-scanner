# Tối ưu tự động (chạy liên tục) — vòng 345

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 3810 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46.6% | 95.4R | 0.593 | 5.74R | 9.67R | 9.87 | 31 | 12.9% | -13.01R | -0.42 | 13.01R |
| **Tốt nhất** | 145 | 53.1% | 118.93R | 0.82 | 6.15R | 7.29R | 16.31 | 27 | 18.5% | -8.64R | -0.32 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 107 | 54.2% | 91.78R | 20 | 25% | -2.83R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 161 | 46.6% | 95.4R | 9.67R | 9.87 | 31 | 12.9% | -13.01R |
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

### Vòng 345 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.29R, lời÷rủi ro 16.31

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Cộng thêm ngưỡng điểm khung 1W → 2 | 104.46 | 51% | 0.72 | 8.09 | 12.91 | 0.694 | 0.75 | -12.08 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Xác nhận khung nhỏ (A2) → W | 116.05 | 39.9% | 0.396 | 15.95 | 7.28 | 0.345 | 0.45 | -8.84 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Cộng thêm ngưỡng điểm khung 1D → 4 + Đệm SL riêng khung 1D (ATR) → 0.3 | 114.91 | 47% | 0.684 | 10.33 | 11.12 | 0.628 | 0.736 | -5.33 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 136.71 | 46.6% | 0.589 | 10.44 | 13.09 | 0.659 | 0.515 | -8.88 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần Entry (/100) → 33 | 117.67 | 49.7% | 0.759 | 8.33 | 14.13 | 0.619 | 0.921 | -8.35 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 35.75 | 40.2% | 0.411 | 10.29 | 3.47 | 0.324 | 0.518 | -6.21 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: MACD cắt lên Signal → 0.563 + Đệm SL riêng khung 1D (ATR) → 0.3 | 112.56 | 47.2% | 0.691 | 10.24 | 10.99 | 0.638 | 0.741 | -5.33 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 96.04 | 34.5% | 0.425 | 20.5 | 4.68 | 0.322 | 0.536 | -14.65 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Elliott (/100) → 10 | 101.21 | 51% | 0.698 | 8.1 | 12.5 | 0.642 | 0.761 | -8.4 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần Divergence (/100) → 12 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 115.47 | 52.1% | 0.791 | 7.63 | 15.13 | 0.583 | 1.029 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: MACD cắt lên Signal → 0.438 | 108.13 | 49.4% | 0.693 | 8.94 | 12.1 | 0.515 | 0.906 | -6.06 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 107.91 | 50.3% | 0.734 | 7.95 | 13.57 | 0.552 | 0.957 | -8.64 |  |

### Vòng 344 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.3R, lời÷rủi ro 16.29

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 21 → 0.875 | 106.72 | 50% | 0.731 | 8.09 | 13.19 | 0.616 | 0.849 | -9.67 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 27.64 | 55.6% | 0.183 | 6.69 | 4.13 | 0.231 | 0.135 | -9.65 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Cộng thêm ngưỡng điểm khung 4H → -1 | 119.01 | 53.1% | 0.821 | 7.3 | 16.3 | 0.626 | 1.048 | -8.65 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Đệm SL riêng khung 4H (ATR) → 0.3 | 154.53 | 38.4% | 0.529 | 18.13 | 8.52 | 0.347 | 0.714 | -12.31 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.35 + Điểm vùng: POC volume profile cố định → 0.813 | 117.34 | 52.8% | 0.815 | 7.64 | 15.36 | 0.612 | 1.048 | -7.62 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số TP tối đa → 2 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 28.52 | 58.1% | 0.184 | 5.72 | 4.99 | 0.218 | 0.153 | -10.33 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: EMA 50 → 0.75 | 106.61 | 41.4% | 0.334 | 12.86 | 8.29 | 0.298 | 0.368 | -11.54 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 76.24 | 47.6% | 0.726 | 8.32 | 9.16 | 0.473 | 1.027 | -5.46 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Mức MACD → 0.875 + Cộng điểm phân kỳ dương ẩn → 3.5 + R:R tối thiểu riêng khung 4H → 2 | 103.45 | 41.6% | 0.336 | 12.69 | 8.15 | 0.318 | 0.351 | -8.82 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: POC anchored → 4 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 31.93 | 59.1% | 0.201 | 5.43 | 5.88 | 0.254 | 0.153 | -8.51 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: EMA 200 → 3 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + R:R tối thiểu riêng khung 1W → 2 | 91.88 | 48.3% | 0.608 | 8.84 | 10.39 | 0.52 | 0.693 | -9.39 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 100.86 | 49.6% | 0.747 | 7.98 | 12.64 | 0.512 | 1.016 | -14.74 |  |

### Vòng 343 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.21R, lời÷rủi ro 16.50

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + R:R tối thiểu riêng khung 1W → 2 | 110.8 | 51.7% | 0.744 | 7.6 | 14.58 | 0.621 | 0.871 | -9.67 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 117.63 | 52.4% | 0.8 | 7.69 | 15.3 | 0.588 | 1.053 | -8.64 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + SL tối đa (% Entry) → 0.425 | 118.74 | 52.7% | 0.813 | 7.22 | 16.45 | 0.614 | 1.048 | -8.64 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: POC volume profile cố định → 0.813 | 118.18 | 52.7% | 0.809 | 7.46 | 15.84 | 0.624 | 1.022 | -6.3 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 93.24 | 46.2% | 0.643 | 9.53 | 9.78 | 0.467 | 0.872 | -8.14 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 104.26 | 51.7% | 0.7 | 8.2 | 12.71 | 0.626 | 0.782 | -8.4 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: EMA 200 → 3 | 108.18 | 50.7% | 0.751 | 7.79 | 13.89 | 0.511 | 1.019 | -9.65 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Mức MACD → 0.875 | 78.14 | 44.1% | 0.575 | 10.07 | 7.76 | 0.434 | 0.758 | -5.46 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 111.49 | 47% | 0.68 | 10.65 | 10.47 | 0.638 | 0.719 | -5.33 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 1D → 4 | 77.46 | 47.7% | 0.724 | 8.34 | 9.29 | 0.473 | 1.01 | -5.46 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Khung lớn phải tăng (trend ≥) → 0.375 | 82.3 | 45.9% | 0.484 | 10.5 | 7.84 | 0.426 | 0.538 | -9.81 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm vùng: POC anchored → 2 | 105.06 | 50.3% | 0.696 | 8.31 | 12.64 | 0.537 | 0.87 | -7.61 |  |

### Vòng 342 — ngẫu nhiên nhiều thông số · mốc: tổng 118.93R, win 53.1%, rủi ro tụt vốn 7.16R, lời÷rủi ro 16.61

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Trọng số phần SL (/100) → 9 | 112.79 | 51.4% | 0.773 | 7.78 | 14.5 | 0.558 | 1.019 | -8.64 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: POC anchored → 2 | 95.17 | 45.1% | 0.622 | 9.7 | 9.81 | 0.466 | 0.806 | -8.94 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 114.9 | 51% | 0.804 | 7.71 | 14.9 | 0.623 | 1.003 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: HVN cố định → 0.438 + Trọng số phần Entry (/100) → 33 + R:R tối thiểu tới TP1 → 2.38 | 98.84 | 46% | 0.606 | 9.23 | 10.71 | 0.515 | 0.696 | -9.95 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: EMA 21 → 0.875 + Trọng số phần SL (/100) → 9 | 107.18 | 50% | 0.744 | 8.31 | 12.9 | 0.654 | 0.845 | -7.59 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Divergence (/100) → 9 | 109.62 | 51.4% | 0.761 | 8.18 | 13.4 | 0.568 | 0.984 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Mức RSI 30/70 → 0.875 | 122.13 | 52.2% | 0.768 | 8.25 | 14.8 | 0.577 | 1.005 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần R:R (/100) → 28 + Cộng thêm ngưỡng điểm khung 1D → 7 | 109.18 | 49.7% | 0.704 | 9.09 | 12.01 | 0.491 | 0.957 | -5.01 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + SL tối đa (% Entry) → 0.35 + Trọng số phần Divergence (/100) → 9 | 59.66 | 42.5% | 0.528 | 11.33 | 5.27 | 0.352 | 0.742 | -6.89 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Trọng số phần Entry (/100) → 33 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 110.97 | 48.9% | 0.822 | 8.08 | 13.73 | 0.619 | 1.061 | -6.88 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: POC anchored → 4 | 123.38 | 47.8% | 0.766 | 9.78 | 12.62 | 0.726 | 0.801 | -0.41 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: BOS → 1 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 28.56 | 56.1% | 0.184 | 5.81 | 4.92 | 0.218 | 0.155 | -10.08 |  |

### Vòng 341 — ngẫu nhiên nhiều thông số · mốc: tổng 118.16R, win 53.5%, rủi ro tụt vốn 7.32R, lời÷rủi ro 16.14

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 29.17 | 57.6% | 0.185 | 6.39 | 4.56 | 0.186 | 0.184 | -11.14 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + R:R tối thiểu riêng khung 1D → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 97.03 | 46.8% | 0.614 | 8.96 | 10.83 | 0.53 | 0.688 | -9.86 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: EMA 200 → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 106.4 | 50.3% | 0.705 | 7.98 | 13.33 | 0.523 | 0.904 | -7.75 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 36.5 | 40.2% | 0.419 | 10.25 | 3.56 | 0.324 | 0.537 | -6.21 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 112.92 | 41.7% | 0.362 | 12.17 | 9.28 | 0.338 | 0.382 | -9.15 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: EMA 200 → 3 | 103.42 | 49.3% | 0.708 | 8.31 | 12.45 | 0.466 | 0.979 | -9.65 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 101.77 | 51.7% | 0.692 | 8.09 | 12.58 | 0.624 | 0.772 | -8.44 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Cổng Dow → TẮT + Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL riêng khung 1D (ATR) → 0.3 | 124.55 | 41.8% | 0.537 | 14.03 | 8.88 | 0.629 | 0.467 | -16.28 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 74 | 47.1% | 0.712 | 8.56 | 8.64 | 0.481 | 0.98 | -6.78 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: EMA 50 → 0.75 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 66.28 | 47.6% | 0.643 | 8.5 | 7.8 | 0.438 | 0.889 | -5.46 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần R:R (/100) → 28 | 43.29 | 35.7% | 0.191 | 18.79 | 2.3 | 0.294 | 0.066 | -19.2 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: POC anchored → 2 | 119.61 | 41.9% | 0.382 | 11.92 | 10.03 | 0.349 | 0.41 | -8.02 |  |

### Vòng 340 — ngẫu nhiên nhiều thông số · mốc: tổng 118.18R, win 53.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần Entry (/100) → 28 | 112.29 | 49.3% | 0.814 | 8.23 | 13.64 | 0.592 | 1.085 | -8.91 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: HVN anchored → 0.188 + Trọng số phần Entry (/100) → 33 | 71.59 | 45.7% | 0.682 | 8.93 | 8.02 | 0.473 | 0.93 | -6.04 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: BOS → 3 + Lệnh chờ hết hạn sau (nến) → 8 | 112.21 | 50.3% | 0.724 | 8.13 | 13.8 | 0.559 | 0.919 | -11.25 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: POC volume profile cố định → 0.688 | 117.05 | 52.7% | 0.802 | 7.72 | 15.16 | 0.603 | 1.036 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Fib sóng 4 → 0.938 | 116.42 | 52.8% | 0.809 | 7.47 | 15.59 | 0.61 | 1.037 | -11.06 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: BOS → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 113.47 | 51% | 0.783 | 8.08 | 14.04 | 0.619 | 0.973 | -13.89 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức RSI 30/70 → 0.875 + R:R tối thiểu tới TP1 → 2.38 | 70.24 | 42.6% | 0.498 | 11.1 | 6.33 | 0.518 | 0.475 | -9.83 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Momentum (/100) → 21 | 117.98 | 52.7% | 0.808 | 7.53 | 15.67 | 0.614 | 1.037 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Lệnh chờ hết hạn sau (nến) → 6 | 99.6 | 51.1% | 0.749 | 7.77 | 12.82 | 0.596 | 0.929 | -7.25 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + R:R tối thiểu riêng khung 4H → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + % chốt ở TP1 → 0.307 | 102.68 | 40.3% | 0.35 | 13.16 | 7.8 | 0.334 | 0.365 | -7.15 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: HVN anchored → 0.188 | 113.57 | 52.7% | 0.757 | 7.83 | 14.5 | 0.586 | 0.958 | -9.66 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: POC volume profile cố định → 0.813 + R:R tối thiểu tới TP1 → 2.63 | 81.8 | 36.7% | 0.357 | 17.66 | 4.63 | 0.279 | 0.433 | -4.74 |  |

### Vòng 339 — ngẫu nhiên nhiều thông số · mốc: tổng 118.18R, win 53.1%, rủi ro tụt vốn 7.29R, lời÷rủi ro 16.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: POC anchored → 4 | 90.97 | 45.3% | 0.606 | 10.15 | 8.96 | 0.426 | 0.807 | -3.98 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 57.91 | 44.7% | 0.411 | 11.64 | 4.98 | 0.239 | 0.562 | -11.62 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Mức RSI 30/70 → 0.875 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: HVN anchored → 0.188 | 120.63 | 51.9% | 0.754 | 8.28 | 14.57 | 0.577 | 0.97 | -7.32 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Biên mây Ichimoku → 1.05 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 101.34 | 50.3% | 0.699 | 8.43 | 12.02 | 0.629 | 0.775 | -8.84 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 116.43 | 52.8% | 0.809 | 7.38 | 15.78 | 0.61 | 1.037 | -9.66 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + R:R tối thiểu riêng khung 1W → 2 | 92.95 | 48.9% | 0.678 | 8.32 | 11.17 | 0.47 | 0.878 | -12.55 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 89.48 | 52.1% | 0.752 | 7.65 | 11.7 | 0.615 | 0.916 | -16.13 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm tối thiểu của vùng đặt SL → 4 + Cộng thêm ngưỡng điểm khung 1D → 4 | 109.82 | 51% | 0.757 | 7.77 | 14.13 | 0.692 | 0.828 | -8.61 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 53.11 | 45% | 0.379 | 11.23 | 4.73 | 0.269 | 0.48 | -17 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Ngưỡng điểm vào kèo → 74 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 105.73 | 47.4% | 0.678 | 8.96 | 11.8 | 0.525 | 0.856 | -10.69 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Cộng điểm phân kỳ dương ẩn → 3.5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 26.88 | 57% | 0.17 | 6.59 | 4.08 | 0.186 | 0.155 | -7.61 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: MACD cắt lên Signal → 0.563 | 117.43 | 52.7% | 0.804 | 7.48 | 15.7 | 0.624 | 1.011 | -8.34 |  |

### Vòng 338 — ngẫu nhiên nhiều thông số · mốc: tổng 118.18R, win 53.1%, rủi ro tụt vốn 7.25R, lời÷rủi ro 16.30

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + % chốt ở TP1 → 0.307 + Trọng số phần Divergence (/100) → 9 | 102.07 | 51.7% | 0.694 | 8.09 | 12.62 | 0.628 | 0.771 | -9.44 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 111.74 | 50.3% | 0.76 | 7.96 | 14.04 | 0.489 | 1.067 | -11.34 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần Trend (/100) → 12 | 116.65 | 52.4% | 0.816 | 7.27 | 16.05 | 0.64 | 1.015 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: EMA 50 → 0.75 | 36.22 | 40.2% | 0.416 | 10.58 | 3.42 | 0.318 | 0.537 | -6.21 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Biên mây Ichimoku → 1.05 | 108.81 | 46.9% | 0.68 | 9.93 | 10.96 | 0.657 | 0.701 | -8.51 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Fib sóng 4 → 0.938 + Cổng Dow → CHẶT + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 85.2 | 50.8% | 0.71 | 7.76 | 10.98 | 0.362 | 1.024 | -11.75 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Điểm vùng: Mức MACD → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 115.61 | 51.4% | 0.792 | 7.7 | 15.01 | 0.592 | 1.028 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Elliott (/100) → 6 | 108.03 | 46.5% | 0.628 | 9.1 | 11.87 | 0.594 | 0.66 | -7.92 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 164.95 | 38.2% | 0.543 | 19.24 | 8.57 | 0.504 | 0.579 | -12.54 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Ngưỡng điểm vào kèo → 74 | 98.63 | 50.4% | 0.731 | 7.68 | 12.84 | 0.596 | 0.885 | -8.27 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Mức RSI 30/70 → 0.875 | 121.38 | 52.2% | 0.763 | 8.24 | 14.73 | 0.577 | 0.994 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 101.38 | 50% | 0.676 | 8.78 | 11.55 | 0.463 | 0.925 | -7.08 |  |

### Vòng 337 — ngẫu nhiên nhiều thông số · mốc: tổng 118.18R, win 53.1%, rủi ro tụt vốn 7.36R, lời÷rủi ro 16.06

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: POC anchored → 4 + Trọng số phần Trend (/100) → 19 | 117.51 | 51.3% | 0.773 | 7.75 | 15.16 | 0.596 | 0.954 | -4.48 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: EMA 200 → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Lệnh chờ hết hạn sau (nến) → 6 | 78.54 | 45.7% | 0.569 | 9.35 | 8.4 | 0.479 | 0.671 | -12.82 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Cộng thêm ngưỡng điểm khung 1D → 7 | 106.88 | 51% | 0.747 | 8.14 | 13.13 | 0.588 | 0.928 | -9.66 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Ngưỡng điểm vào kèo → 74 + Trọng số phần Trend (/100) → 19 | 123.3 | 49.4% | 0.78 | 8.54 | 14.44 | 0.746 | 0.821 | -10.24 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + % chốt ở TP1 → 0.307 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 127.32 | 45.8% | 0.566 | 10.37 | 12.28 | 0.596 | 0.536 | -10.24 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Break mây Ichimoku → 3 | 122.63 | 47.2% | 0.681 | 9.96 | 12.31 | 0.632 | 0.742 | -9.79 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 105.12 | 50% | 0.683 | 8.74 | 12.03 | 0.503 | 0.904 | -7.08 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 152.7 | 38.4% | 0.523 | 18.86 | 8.1 | 0.342 | 0.711 | -14.44 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + R:R tối thiểu riêng khung 4H → 2 | 102.19 | 41% | 0.335 | 12.52 | 8.16 | 0.273 | 0.386 | -9.71 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Cổng Dow → TẮT | 131.38 | 44.2% | 0.611 | 11.14 | 11.79 | 0.524 | 0.698 | -18.25 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Biên mây Ichimoku → 1.05 | 112 | 49% | 0.732 | 8.41 | 13.32 | 0.708 | 0.76 | -12.36 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 114.23 | 51.7% | 0.788 | 7.67 | 14.89 | 0.63 | 0.966 | -9.66 |  |

### Vòng 336 — ngẫu nhiên nhiều thông số · mốc: tổng 118.18R, win 53.1%, rủi ro tụt vốn 7.33R, lời÷rủi ro 16.12

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Cộng thêm ngưỡng điểm khung 4H → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 126.03 | 43.5% | 0.603 | 11.34 | 11.11 | 0.526 | 0.675 | -15.99 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1D (ATR) → 0.3 | 73.13 | 35.6% | 0.274 | 21.98 | 3.33 | 0.279 | 0.269 | -7 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + R:R tối thiểu riêng khung 4H → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 19.67 | 35.1% | 0.173 | 15.34 | 1.28 | 0.26 | 0.082 | -4.47 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Cộng thêm ngưỡng điểm khung 1D → 4 + Xác nhận khung nhỏ (A2) → W | 99.6 | 40% | 0.391 | 15.66 | 6.36 | 0.308 | 0.467 | -3.44 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Lệnh chờ hết hạn sau (nến) → 6 + SL tối đa (% Entry) → 0.35 | 83.67 | 39.6% | 0.291 | 14 | 5.98 | 0.279 | 0.3 | -8.38 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cổng Dow → TẮT + R:R tối thiểu tới TP1 → 2.63 | 169.03 | 35.8% | 0.406 | 24.14 | 7 | 0.335 | 0.489 | -25.52 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + R:R tối thiểu riêng khung 1D → 2 + Trọng số phần Trend (/100) → 12 | 97.25 | 44.8% | 0.589 | 9.23 | 10.54 | 0.54 | 0.632 | -7.89 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 84.86 | 48.7% | 0.725 | 8.31 | 10.21 | 0.591 | 0.882 | -15.95 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + R:R tối thiểu riêng khung 4H → 2 + Ngưỡng điểm vào kèo → 77 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 115.27 | 38.2% | 0.317 | 14.08 | 8.19 | 0.337 | 0.299 | -22.28 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Cổng Dow → TẮT | 131.7 | 44.2% | 0.613 | 11.33 | 11.62 | 0.531 | 0.692 | -20.3 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Mức MACD → 1.13 + R:R tối thiểu tới TP1 → 2.63 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 81.93 | 49.5% | 0.752 | 8.58 | 9.55 | 0.631 | 0.884 | -7.32 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm tối thiểu của vùng đặt SL → 2 | 112.91 | 52% | 0.743 | 8.08 | 13.97 | 0.614 | 0.882 | -9.66 |  |
