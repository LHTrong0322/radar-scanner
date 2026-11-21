# Tối ưu tự động (chạy liên tục) — vòng 979

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 11403 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 46.4% | 95.04R | 0.573 | 6.44R | 10.17R | 9.35 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 145 | 52.4% | 113.95R | 0.786 | 5.09R | 7.95R | 14.33 | 27 | 18.5% | -8.9R | -0.33 | 10.54R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 27 | 48.1% | 17.16R | 5 | 0% | -3.77R |
| 1W | 10 | 50% | 7.77R | 2 | 0% | -2.3R |
| 4H | 108 | 53.7% | 89.03R | 20 | 25% | -2.83R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 46.4% | 95.04R | 10.17R | 9.35 | 30 | 13.3% | -11.98R |
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

### Vòng 979 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.95R, lời÷rủi ro 14.33

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trần điểm khi chart yếu (Trend < x) → -0.375 + R:R tối thiểu riêng khung 1W → 2 | 102.55 | 50% | 0.693 | 8.82 | 11.63 | 0.56 | 0.826 | -9.93 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: POC anchored → 2 + Điểm vùng: EMA 21 → 0.875 | 99.36 | 48.4% | 0.649 | 9.3 | 10.68 | 0.552 | 0.748 | -6.3 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 113.48 | 52.1% | 0.777 | 7.9 | 14.36 | 0.593 | 0.983 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Cộng điểm phân kỳ dương ẩn → 2.25 + Trọng số phần R:R (/100) → 28 | 110.2 | 50.7% | 0.755 | 8.22 | 13.41 | 0.575 | 0.955 | -7.99 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Đệm SL riêng khung 1D (ATR) → 0.3 | 89.33 | 39.1% | 0.291 | 14.87 | 6.01 | 0.355 | 0.246 | -7.49 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Cộng thêm ngưỡng điểm khung 1W → 2 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 53.7 | 40.7% | 0.312 | 14.43 | 3.72 | 0.424 | 0.19 | -15.67 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 103.68 | 50% | 0.71 | 8.58 | 12.08 | 0.548 | 0.896 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Entry (/100) → 33 + Điểm vùng: MACD cắt lên Signal → 0.438 | 85.1 | 43.6% | 0.495 | 11.28 | 7.54 | 0.37 | 0.625 | -9.45 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Trọng số phần Momentum (/100) → 25 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 111.72 | 50.3% | 0.712 | 8.55 | 13.07 | 0.578 | 0.878 | -3.91 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 | 109.38 | 50% | 0.692 | 8.72 | 12.54 | 0.528 | 0.869 | -9.89 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Khung lớn phải tăng (trend ≥) → 0.425 + Đệm SL riêng khung 4H (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 23.24 | 50.4% | 0.092 | 15.23 | 1.53 | 0.073 | 0.108 | -15.1 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 82.48 | 42.5% | 0.565 | 11.48 | 7.18 | 0.426 | 0.743 | -4.95 |  |

### Vòng 978 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.05R, lời÷rủi ro 14.16

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 112.94 | 52.1% | 0.774 | 8.14 | 13.87 | 0.571 | 1.006 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 103.68 | 50% | 0.71 | 8.58 | 12.08 | 0.548 | 0.896 | -8.9 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 80.27 | 46.8% | 0.521 | 9.77 | 8.22 | 0.444 | 0.611 | -11.86 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Mức MACD → 1.13 + Điểm tối thiểu của vùng đặt SL → 2 | 102.44 | 39% | 0.388 | 16.73 | 6.12 | 0.351 | 0.424 | -2.73 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: HVN anchored → 0.188 + Trọng số phần Trend (/100) → 19 + Cộng thêm ngưỡng điểm khung 1W → 2 | 112.87 | 51.4% | 0.773 | 8.05 | 14.02 | 0.598 | 0.964 | -8.9 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: BOS → 1 | 30.2 | 58.2% | 0.191 | 6.16 | 4.9 | 0.196 | 0.186 | -9.23 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + R:R tối thiểu riêng khung 1W → 2 | 101.79 | 50.3% | 0.702 | 8.2 | 12.41 | 0.568 | 0.834 | -9.76 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Ngưỡng điểm vào kèo → 74 | 112.12 | 51% | 0.752 | 8.13 | 13.79 | 0.566 | 0.963 | -7.88 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 66.16 | 39.7% | 0.486 | 11.88 | 5.57 | 0.431 | 0.537 | -3.52 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 107.7 | 50.7% | 0.748 | 8.46 | 12.73 | 0.534 | 0.987 | -7.88 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: POC anchored → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Mức MACD → 1.13 | 87.11 | 47.1% | 0.555 | 10.22 | 8.52 | 0.389 | 0.746 | -5.29 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 112.94 | 52.1% | 0.774 | 8.14 | 13.87 | 0.571 | 1.006 | -8.9 |  |

### Vòng 977 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8R, lời÷rủi ro 14.24

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Đệm SL riêng khung 1W (ATR) → 0.3 | 108.33 | 43% | 0.49 | 12.75 | 8.5 | 0.469 | 0.511 | -11.48 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Điểm tối thiểu của vùng đặt SL → 4 | 111.59 | 51.4% | 0.764 | 7.88 | 14.16 | 0.598 | 0.945 | -7.61 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Lệnh chờ hết hạn sau (nến) → 6 + Số TP tối đa → 2 | 70.72 | 52.4% | 0.687 | 7.13 | 9.92 | 0.365 | 0.967 | -10.63 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + R:R tối thiểu riêng khung 1D → 2 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: HVN anchored → 0.313 | 87.48 | 44.7% | 0.543 | 10.03 | 8.72 | 0.541 | 0.546 | -9.36 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 109.01 | 50.7% | 0.747 | 8.28 | 13.17 | 0.551 | 0.965 | -7.41 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 120.67 | 49.4% | 0.764 | 8.63 | 13.98 | 0.722 | 0.813 | -9.48 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Lệnh chờ hết hạn sau (nến) → 6 + Cổng Dow → TẮT + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 55.37 | 40% | 0.369 | 13.86 | 3.99 | 0.372 | 0.366 | -21.97 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 117.41 | 51.9% | 0.734 | 8.54 | 13.75 | 0.563 | 0.938 | -8.9 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần Entry (/100) → 28 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cộng thêm ngưỡng điểm khung 1W → 2 | 35.57 | 37.7% | 0.292 | 14.29 | 2.49 | 0.221 | 0.357 | -9.06 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: POC volume profile cố định → 0.813 | 105.11 | 46.1% | 0.59 | 9.46 | 11.11 | 0.552 | 0.628 | -6.14 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: HVN cố định → 0.438 + R:R tối thiểu riêng khung 1W → 2 | 100.45 | 48.7% | 0.636 | 9.65 | 10.41 | 0.513 | 0.765 | -9.26 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + SL tối đa (% Entry) → 0.425 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: MACD cắt lên Signal → 0.438 | 132.79 | 42.1% | 0.565 | 12.47 | 10.65 | 0.573 | 0.557 | -20.02 |  |

### Vòng 976 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.02R, lời÷rủi ro 14.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần SL (/100) → 9 | 147.39 | 38.5% | 0.512 | 18.56 | 7.94 | 0.342 | 0.682 | -13.6 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: BOS → 1 | 109.76 | 52.3% | 0.737 | 8.17 | 13.43 | 0.554 | 0.949 | -8.9 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần Entry (/100) → 28 | 115.56 | 51.4% | 0.802 | 7.76 | 14.89 | 0.649 | 0.974 | -12.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 72.16 | 46.3% | 0.668 | 9.02 | 8 | 0.422 | 0.943 | -4.43 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 131.33 | 45.2% | 0.571 | 10.77 | 12.19 | 0.594 | 0.546 | -11.21 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần R:R (/100) → 28 + Điểm vùng: HVN anchored → 0.313 | 102.49 | 49.7% | 0.697 | 8.19 | 12.51 | 0.578 | 0.814 | -9.93 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Lệnh chờ hết hạn sau (nến) → 6 + Khung lớn phải tăng (trend ≥) → 0.425 | 96.3 | 39.6% | 0.334 | 13.24 | 7.27 | 0.296 | 0.368 | -5.63 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Số TP tối đa → 2 | 121.07 | 49.7% | 0.771 | 8.59 | 14.09 | 0.722 | 0.83 | -9.48 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: EMA 21 → 0.875 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 17.81 | 36.4% | 0.27 | 10.71 | 1.66 | 0.259 | 0.281 | -11.35 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 200 → 1 + Trọng số phần Divergence (/100) → 12 | 112.43 | 50.9% | 0.707 | 8.59 | 13.09 | 0.574 | 0.872 | -3.9 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 103.94 | 36.2% | 0.362 | 22.41 | 4.64 | 0.244 | 0.486 | -13.47 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm tối thiểu của vùng đặt SL → 2 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 100.15 | 49.4% | 0.65 | 9.16 | 10.93 | 0.506 | 0.806 | -8.9 |  |

### Vòng 975 — ngẫu nhiên nhiều thông số · mốc: tổng 114.08R, win 52.8%, rủi ro tụt vốn 7.85R, lời÷rủi ro 14.53

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trọng số phần Momentum (/100) → 21 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 97.9 | 49.6% | 0.694 | 8.25 | 11.87 | 0.421 | 1.004 | -9.51 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + % chốt ở TP1 → 0.287 + Điểm vùng: BOS → 1 | 113.48 | 52.4% | 0.783 | 7.98 | 14.22 | 0.598 | 0.986 | -8.06 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 113.4 | 52.4% | 0.782 | 7.79 | 14.56 | 0.603 | 0.98 | -6.78 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Fib sóng 4 → 0.938 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức RSI 30/70 → 1.13 | 148.82 | 37.1% | 0.511 | 19.03 | 7.82 | 0.375 | 0.653 | -9.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Cộng thêm ngưỡng điểm khung 1W → 2 + Trọng số phần Momentum (/100) → 21 | 113.45 | 52.1% | 0.788 | 7.91 | 14.34 | 0.607 | 0.984 | -8.08 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Ngưỡng điểm vào kèo → 74 + Cộng thêm ngưỡng điểm khung 1D → 3 | 95.88 | 48.8% | 0.592 | 9.29 | 10.32 | 0.576 | 0.609 | -10.29 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 126.38 | 45.5% | 0.547 | 11.04 | 11.45 | 0.594 | 0.498 | -9.79 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: EMA 200 → 1 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: BOS → 1 | 110.3 | 50% | 0.689 | 8.89 | 12.41 | 0.549 | 0.86 | -3.09 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: EMA 200 → 3 + Trọng số phần SL (/100) → 9 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 105.14 | 50.7% | 0.73 | 8.1 | 12.98 | 0.51 | 0.95 | -7.97 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 117.83 | 44.7% | 0.517 | 11.88 | 9.92 | 0.588 | 0.442 | -9.06 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 109.18 | 52.1% | 0.748 | 7.91 | 13.8 | 0.611 | 0.896 | -7.11 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: EMA 200 → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 94.73 | 47.4% | 0.615 | 9.35 | 10.13 | 0.433 | 0.807 | -9.93 |  |

### Vòng 974 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.02R, lời÷rủi ro 14.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Fib sóng 4 → 1.56 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 27.62 | 58.5% | 0.162 | 6.5 | 4.25 | 0.193 | 0.129 | -7.86 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: POC anchored → 4 + SL tối đa (% Entry) → 0.425 + Điểm vùng: BOS → 1 | 112.44 | 51% | 0.745 | 8.27 | 13.6 | 0.552 | 0.939 | -2.96 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: EMA 21 → 0.875 + Trọng số phần Trend (/100) → 19 | 89.08 | 43.3% | 0.594 | 10.58 | 8.42 | 0.485 | 0.715 | -7.66 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 115.77 | 51% | 0.777 | 7.98 | 14.51 | 0.658 | 0.898 | -7.95 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: Mức RSI 30/70 → 0.875 | 117.43 | 50% | 0.734 | 8.79 | 13.36 | 0.628 | 0.842 | -7.95 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: HVN anchored → 0.313 | 111.16 | 51.4% | 0.761 | 8.14 | 13.66 | 0.55 | 1.004 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Cổng Dow → TẮT + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: POC anchored → 4 | 122.97 | 44.3% | 0.556 | 11.95 | 10.29 | 0.529 | 0.584 | -12.21 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Fib sóng 4 → 0.938 | 108.82 | 49.3% | 0.716 | 8.51 | 12.79 | 0.58 | 0.883 | -7.88 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 112.81 | 50.7% | 0.773 | 8.12 | 13.89 | 0.644 | 0.898 | -7.95 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: EMA 21 → 0.875 | 112.93 | 52.3% | 0.758 | 7.91 | 14.28 | 0.623 | 0.907 | -7.61 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 4H (ATR) → 0.3 | 126.09 | 35.7% | 0.409 | 21.41 | 5.89 | 0.282 | 0.518 | -9.33 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: EMA 21 → 1.13 | 102.37 | 49.3% | 0.692 | 8.21 | 12.47 | 0.595 | 0.793 | -9.24 |  |

### Vòng 973 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.98R, lời÷rủi ro 14.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 72.16 | 46.3% | 0.668 | 8.93 | 8.08 | 0.422 | 0.943 | -5.75 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng điểm phân kỳ dương ẩn → 3 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 116.43 | 42.5% | 0.438 | 12.03 | 9.68 | 0.508 | 0.369 | -10.88 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + R:R tối thiểu riêng khung 1D → 2 + Đệm SL riêng khung 1W (ATR) → 0.3 | 85.24 | 42.4% | 0.501 | 10.61 | 8.03 | 0.515 | 0.492 | -9.64 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + R:R tối thiểu riêng khung 4H → 2 | 107.02 | 41.1% | 0.36 | 12.23 | 8.75 | 0.308 | 0.403 | -3.5 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: EMA 200 → 1 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 100.58 | 48.1% | 0.629 | 9.53 | 10.55 | 0.513 | 0.774 | -3.91 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib sóng 4 → 1.56 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 104.19 | 39.4% | 0.395 | 15.97 | 6.52 | 0.366 | 0.422 | -7.05 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: BOS → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 + Khung lớn phải tăng (trend ≥) → 0.375 | 22.63 | 56.5% | 0.147 | 6.78 | 3.34 | 0.186 | 0.113 | -9.44 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Số TP tối đa → 2 + Trọng số phần SL (/100) → 9 | 113.19 | 51.7% | 0.792 | 8.07 | 14.03 | 0.612 | 0.99 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Mức MACD → 1.13 | 110.57 | 50.7% | 0.757 | 8.14 | 13.58 | 0.549 | 0.997 | -9.48 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Trọng số phần Entry (/100) → 33 + Cộng thêm ngưỡng điểm khung 1W → 2 | 96.32 | 46.9% | 0.595 | 9.95 | 9.68 | 0.501 | 0.695 | -8.64 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Trend (/100) → 12 | 111.46 | 51% | 0.769 | 8.1 | 13.76 | 0.597 | 0.958 | -7.58 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Mức RSI 30/70 → 1.13 + Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 4H (ATR) → 0.3 | 58.35 | 29.9% | 0.163 | 35.18 | 1.66 | 0.114 | 0.201 | -30.14 |  |

### Vòng 972 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.98R, lời÷rủi ro 14.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 113.31 | 48.1% | 0.726 | 9.07 | 12.49 | 0.602 | 0.848 | -8.98 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Entry (/100) → 33 | 97.26 | 50.7% | 0.675 | 8.47 | 11.48 | 0.631 | 0.724 | -8.7 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 109.74 | 51% | 0.757 | 7.94 | 13.82 | 0.552 | 0.988 | -8.72 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: HVN cố định → 0.438 | 92.54 | 46.5% | 0.582 | 9.01 | 10.27 | 0.443 | 0.716 | -10.21 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + % chốt ở TP1 → 0.307 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 130.39 | 44.5% | 0.624 | 11.35 | 11.49 | 0.547 | 0.701 | -18.38 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Cộng thêm ngưỡng điểm khung 1W → 2 + Số TP tối đa → 2 | 112.37 | 50.7% | 0.78 | 7.89 | 14.24 | 0.607 | 0.969 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Break mây Ichimoku → 1 + R:R tối thiểu riêng khung 1D → 2 | 102.59 | 45.7% | 0.593 | 9.31 | 11.02 | 0.583 | 0.602 | -7.94 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Trọng số phần Divergence (/100) → 12 + Cộng thêm ngưỡng điểm khung 4H → -1 | 102.1 | 50% | 0.672 | 9.26 | 11.03 | 0.498 | 0.875 | -6.32 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 113 | 49.4% | 0.734 | 8.64 | 13.08 | 0.553 | 0.935 | -9.93 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Mức RSI 30/70 → 0.875 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 129.91 | 49.1% | 0.797 | 9.15 | 14.2 | 0.731 | 0.887 | -9.02 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 107.54 | 50% | 0.737 | 8.32 | 12.93 | 0.551 | 0.943 | -7.41 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Trọng số phần SL (/100) → 9 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 108.24 | 48.2% | 0.779 | 8.48 | 12.76 | 0.591 | 0.998 | -6.83 |  |

### Vòng 971 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.98R, lời÷rủi ro 14.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Khung lớn phải tăng (trend ≥) → 0.425 | 94.95 | 50.4% | 0.785 | 8 | 11.87 | 0.456 | 1.131 | -8.8 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Cộng điểm phân kỳ dương ẩn → 2.25 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 88.97 | 45.1% | 0.543 | 10.03 | 8.87 | 0.472 | 0.611 | -13.47 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 93.43 | 46% | 0.58 | 9.19 | 10.17 | 0.424 | 0.731 | -9.19 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần Divergence (/100) → 12 | 105.23 | 48.2% | 0.746 | 8.31 | 12.66 | 0.541 | 0.932 | -10.75 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Biên mây Ichimoku → 1.35 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 109.42 | 50.7% | 0.739 | 8.57 | 12.77 | 0.549 | 0.952 | -6.56 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng thêm ngưỡng điểm khung 1W → -1 | 101.99 | 50.7% | 0.718 | 8.19 | 12.45 | 0.468 | 0.999 | -10.48 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 122.64 | 47.1% | 0.781 | 9.05 | 13.55 | 0.775 | 0.789 | -8.84 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: POC anchored → 2 | 100.08 | 49.7% | 0.663 | 8.88 | 11.27 | 0.503 | 0.833 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: HVN cố định → 0.438 | 106.7 | 50.7% | 0.731 | 8.46 | 12.61 | 0.491 | 0.998 | -8.9 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Fib sóng 4 → 1.56 | 27.9 | 56.9% | 0.174 | 6.32 | 4.41 | 0.203 | 0.148 | -9.28 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Mức MACD → 0.875 | 102.15 | 51% | 0.686 | 8.77 | 11.65 | 0.498 | 0.898 | -7.61 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Số TP tối đa → 2 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: BOS → 1 | 78.38 | 44.2% | 0.481 | 10.82 | 7.24 | 0.454 | 0.506 | -8.8 |  |

### Vòng 970 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.02R, lời÷rủi ro 14.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: HVN anchored → 0.313 | 109.46 | 50.3% | 0.755 | 8.14 | 13.45 | 0.552 | 0.984 | -8.9 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: EMA 200 → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 + % chốt ở TP1 → 0.287 | 105.49 | 49.7% | 0.738 | 8.1 | 13.02 | 0.549 | 0.94 | -13.13 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Đệm SL riêng khung 1D (ATR) → 0.3 | 55.33 | 40% | 0.369 | 14.97 | 3.7 | 0.305 | 0.422 | -7.93 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 101.98 | 52.3% | 0.667 | 8.15 | 12.51 | 0.571 | 0.774 | -9.2 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Momentum (/100) → 21 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: HVN anchored → 0.313 | 69.62 | 39.9% | 0.335 | 16.64 | 4.18 | 0.268 | 0.391 | -11.47 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng điểm phân kỳ dương ẩn → 2.25 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 67.37 | 50% | 0.636 | 7.47 | 9.02 | 0.24 | 0.939 | -12.43 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: HVN cố định → 0.438 + Trọng số phần Elliott (/100) → 10 | 94.85 | 45.4% | 0.582 | 9.51 | 9.97 | 0.482 | 0.681 | -10.21 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 4H (ATR) → 0.3 + Lệnh chờ hết hạn sau (nến) → 6 | 45.81 | 31.2% | 0.23 | 25.82 | 1.77 | 0.033 | 0.418 | -16.34 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: BOS → 1 | 108.51 | 50.7% | 0.754 | 8.09 | 13.41 | 0.524 | 1.017 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Break mây Ichimoku → 1 | 104.46 | 49% | 0.711 | 8.79 | 11.88 | 0.578 | 0.853 | -8.32 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Điểm vùng: BOS → 1 + Coin phải mạnh hơn BTC trong N ngày → 14 | 82.46 | 49.1% | 0.711 | 8.33 | 9.9 | 0.524 | 0.925 | -15.36 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 108.22 | 50.7% | 0.721 | 8.31 | 13.02 | 0.569 | 0.887 | -9.87 |  |
