# Tối ưu tự động (chạy liên tục) — vòng 1073

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 12523 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 46.4% | 95.04R | 0.573 | 6.44R | 10.22R | 9.30 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 143 | 51.7% | 116.78R | 0.817 | 6.15R | 7.65R | 15.27 | 28 | 14.3% | -12.16R | -0.434 | 12.44R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 25 | 48% | 19.78R | 7 | 0% | -5.66R |
| 1W | 11 | 45.5% | 6.97R | 2 | 0% | -2.3R |
| 4H | 107 | 53.3% | 90.03R | 19 | 21.1% | -4.19R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 46.4% | 95.04R | 10.22R | 9.30 | 30 | 13.3% | -11.98R |
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
| 1055 | Điểm tối thiểu vùng đặt lệnh chờ | 2 → 3 | 114.12R | 51.4% | 7.82R | 14.59 |
| 1055 | Số TP tối đa | 3 → 2 | 114.12R | 51.4% | 7.82R | 14.59 |
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

### Vòng 1073 — ngẫu nhiên nhiều thông số · mốc: tổng 116.78R, win 51.7%, rủi ro tụt vốn 7.65R, lời÷rủi ro 15.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: EMA 50 → 0.75 | 102.93 | 45.9% | 0.695 | 9.9 | 10.4 | 0.484 | 0.919 | -14.01 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần Elliott (/100) → 6 + Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 123.77 | 44.4% | 0.533 | 11.24 | 11.01 | 0.558 | 0.51 | -15.8 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + % chốt ở TP1 → 0.307 + Đệm SL riêng khung 1D (ATR) → 0.3 | 118.03 | 44.3% | 0.678 | 10.96 | 10.77 | 0.791 | 0.58 | -10.07 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: Fib sóng 4 → 0.938 | 91.28 | 48.1% | 0.686 | 8.61 | 10.6 | 0.535 | 0.86 | -11.78 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + SL tối đa (% Entry) → 0.425 + R:R tối thiểu tới TP1 → 2.38 | 106.98 | 46.8% | 0.626 | 9.19 | 11.64 | 0.466 | 0.776 | -14.06 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 79.13 | 45.7% | 0.488 | 10.54 | 7.51 | 0.383 | 0.589 | -10.16 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: POC anchored → 4 | 56.42 | 44.6% | 0.559 | 10.71 | 5.27 | 0.415 | 0.689 | -1.86 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần Trend (/100) → 19 | 109.34 | 50% | 0.759 | 8.21 | 13.32 | 0.583 | 0.951 | -11.14 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 200 → 3 | 73.92 | 44.5% | 0.621 | 9.49 | 7.79 | 0.448 | 0.816 | -18.61 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 114.56 | 50.3% | 0.801 | 7.95 | 14.41 | 0.659 | 0.958 | -11.13 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Elliott (/100) → 6 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: MACD cắt lên Signal → 0.563 | 64.94 | 44.4% | 0.515 | 10.02 | 6.48 | 0.381 | 0.668 | -10.79 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 7.66 | 47.7% | 0.032 | 19.5 | 0.39 | -0.006 | 0.065 | -10.59 |  |

### Vòng 1072 — ngẫu nhiên nhiều thông số · mốc: tổng 115.57R, win 51.4%, rủi ro tụt vốn 7.83R, lời÷rủi ro 14.76

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Đệm SL riêng khung 1D (ATR) → 0.3 | 115.34 | 46.5% | 0.671 | 10.94 | 10.54 | 0.653 | 0.687 | -10.74 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Ngưỡng điểm vào kèo → 77 + % chốt ở TP1 → 0.307 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 20.05 | 41.1% | 0.358 | 9.16 | 2.19 | 0.215 | 0.482 | -1.69 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Cộng thêm ngưỡng điểm khung 4H → -1 + Xác nhận khung nhỏ (A2) → W | 103.25 | 37.5% | 0.403 | 16.08 | 6.42 | 0.394 | 0.411 | -7.61 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: EMA 200 → 1 | 113.2 | 50.3% | 0.75 | 8.43 | 13.43 | 0.611 | 0.929 | -4.79 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + SL tối đa (% Entry) → 0.425 | 90.26 | 46.9% | 0.631 | 9.19 | 9.82 | 0.423 | 0.855 | -11.31 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Khung lớn phải tăng (trend ≥) → 0.425 + Trọng số phần R:R (/100) → 33 | 93.71 | 48.5% | 0.689 | 8.78 | 10.67 | 0.57 | 0.819 | -8.83 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 28.43 | 57.4% | 0.183 | 6.06 | 4.69 | 0.225 | 0.142 | -5.58 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Đệm SL riêng khung 1W (ATR) → 0.3 | 102.18 | 45.8% | 0.71 | 9.47 | 10.79 | 0.523 | 0.896 | -11.63 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + R:R tối thiểu riêng khung 1D → 2 | 106.02 | 46.2% | 0.613 | 9.42 | 11.25 | 0.591 | 0.634 | -6.81 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Coin phải mạnh hơn BTC trong N ngày → 14 | 80.46 | 47.9% | 0.688 | 8.78 | 9.16 | 0.536 | 0.871 | -14.96 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + SL tối đa (% Entry) → 0.425 + Trọng số phần R:R (/100) → 33 | 106.47 | 49.3% | 0.783 | 8.19 | 13 | 0.57 | 1.016 | -9.81 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Trọng số phần R:R (/100) → 33 | 109.15 | 50% | 0.769 | 8.19 | 13.33 | 0.583 | 0.977 | -9.78 |  |

### Vòng 1071 — ngẫu nhiên nhiều thông số · mốc: tổng 116.78R, win 51.7%, rủi ro tụt vốn 7.58R, lời÷rủi ro 15.41

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + R:R tối thiểu riêng khung 4H → 2 + Trọng số phần Entry (/100) → 28 | 120.81 | 41% | 0.39 | 12.48 | 9.68 | 0.364 | 0.411 | -11 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 35.26 | 39.6% | 0.388 | 11.13 | 3.17 | 0.322 | 0.467 | -6.21 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Mức RSI 30/70 → 0.875 | 98.26 | 47.2% | 0.61 | 9.95 | 9.88 | 0.516 | 0.724 | -12.12 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 114.29 | 50.7% | 0.794 | 7.84 | 14.58 | 0.659 | 0.94 | -10.74 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Entry (/100) → 28 + Điểm vùng: MACD cắt lên Signal → 0.563 | 99.05 | 40.8% | 0.337 | 12.47 | 7.94 | 0.32 | 0.351 | -8.76 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Biên mây Ichimoku → 1.35 | 108.52 | 49.7% | 0.759 | 8.32 | 13.04 | 0.583 | 0.953 | -11.14 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 159.36 | 38.8% | 0.542 | 18.21 | 8.75 | 0.411 | 0.679 | -8.84 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: HVN anchored → 0.313 | 110.81 | 50.7% | 0.78 | 8.04 | 13.78 | 0.583 | 1.002 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: MACD cắt lên Signal → 0.438 | 100.11 | 48.1% | 0.65 | 9.42 | 10.63 | 0.429 | 0.902 | -9.58 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Entry (/100) → 33 | 97.31 | 48.6% | 0.666 | 8.99 | 10.82 | 0.639 | 0.697 | -11.75 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Trọng số phần Entry (/100) → 28 + Lệnh chờ hết hạn sau (nến) → 8 | 104.9 | 43.6% | 0.58 | 11.88 | 8.83 | 0.59 | 0.571 | -11.94 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 95.52 | 49.3% | 0.654 | 8.9 | 10.73 | 0.634 | 0.677 | -11.75 |  |

### Vòng 1070 — ngẫu nhiên nhiều thông số · mốc: tổng 116.78R, win 51.7%, rủi ro tụt vốn 7.65R, lời÷rủi ro 15.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cổng Dow → CHẶT + Trọng số phần Trend (/100) → 19 + R:R tối thiểu tới TP1 → 2.63 | 66.8 | 50% | 0.711 | 7.67 | 8.71 | 0.147 | 1.147 | -14.12 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 54.06 | 44.6% | 0.588 | 9.81 | 5.51 | 0.44 | 0.764 | -12.26 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Trend (/100) → 12 | 107.06 | 48.6% | 0.765 | 8.04 | 13.32 | 0.59 | 0.95 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Cộng thêm ngưỡng điểm khung 4H → 2 | 111.88 | 51% | 0.782 | 7.96 | 14.06 | 0.654 | 0.928 | -12.16 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: EMA 21 → 0.875 | 116.95 | 41% | 0.377 | 13.19 | 8.87 | 0.357 | 0.394 | -8.53 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 38.54 | 40.7% | 0.424 | 9.99 | 3.86 | 0.364 | 0.496 | -8.48 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Trọng số phần SL (/100) → 7 + R:R tối thiểu riêng khung 1W → 2 | 98.86 | 48.6% | 0.696 | 8.43 | 11.73 | 0.535 | 0.857 | -13.19 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần Momentum (/100) → 25 | 106.45 | 48.9% | 0.755 | 8.22 | 12.95 | 0.563 | 0.961 | -12.16 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 | 16.69 | 34.8% | 0.253 | 11.38 | 1.47 | 0.259 | 0.248 | -11.35 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 91.68 | 48.3% | 0.641 | 9.14 | 10.03 | 0.566 | 0.721 | -11.75 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Khung lớn phải tăng (trend ≥) → 0.425 | 109.18 | 50.4% | 0.809 | 8.01 | 13.63 | 0.571 | 1.072 | -12.2 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 110.43 | 50% | 0.767 | 8.04 | 13.74 | 0.641 | 0.908 | -11.55 |  |

### Vòng 1069 — ngẫu nhiên nhiều thông số · mốc: tổng 116.78R, win 51.7%, rủi ro tụt vốn 7.58R, lời÷rủi ro 15.41

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 113.77 | 46.1% | 0.69 | 10.45 | 10.89 | 0.659 | 0.717 | -9.47 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Fib sóng 4 → 1.56 + Khung lớn phải tăng (trend ≥) → 0.375 | 105.87 | 49% | 0.74 | 8.83 | 11.99 | 0.521 | 0.983 | -12.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 114.96 | 51.4% | 0.798 | 7.59 | 15.15 | 0.653 | 0.961 | -12.57 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 62.96 | 43.5% | 0.508 | 10.5 | 6 | 0.376 | 0.657 | -11.19 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + R:R tối thiểu riêng khung 1W → 2 | 84.74 | 44.2% | 0.576 | 10.22 | 8.29 | 0.493 | 0.665 | -4.74 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Cộng điểm phân kỳ dương ẩn → 2.25 + Đệm SL riêng khung 1W (ATR) → 0.3 | 68.6 | 40.8% | 0.549 | 11.84 | 5.79 | 0.4 | 0.715 | -13.31 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: EMA 200 → 1 | 155.67 | 38.4% | 0.533 | 18.88 | 8.25 | 0.334 | 0.741 | -1.45 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 113.06 | 49.3% | 0.754 | 8.19 | 13.8 | 0.613 | 0.911 | -13.18 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Trọng số phần Momentum (/100) → 25 | 102.5 | 47.4% | 0.674 | 9.53 | 10.76 | 0.465 | 0.913 | -9.58 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: EMA 200 → 1 | 113.6 | 50% | 0.738 | 8.71 | 13.04 | 0.61 | 0.894 | -7.16 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Trọng số phần Trend (/100) → 19 | 123.73 | 43.9% | 0.555 | 10.82 | 11.44 | 0.576 | 0.534 | -12.82 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Cổng Dow → CHẶT + Trọng số phần Entry (/100) → 28 | 82.92 | 50.9% | 0.74 | 7.18 | 11.55 | 0.369 | 1.074 | -14.25 |  |

### Vòng 1068 — ghép cặp thay đổi suýt đạt · mốc: tổng 116.78R, win 51.7%, rủi ro tụt vốn 7.6R, lời÷rủi ro 15.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: HVN anchored → 0.125 + Điểm vùng: MACD cắt lên Signal → 0.563 | 116.78 | 51.7% | 0.817 | 7.6 | 15.37 | 0.654 | 1.002 | -12.74 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 139.44 | 51.1% | 0.801 | 8.24 | 16.92 | 0.639 | 0.979 | -12.37 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 | 118.06 | 52.4% | 0.826 | 7.56 | 15.62 | 0.67 | 1.002 | -12.74 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 116.78 | 51.7% | 0.817 | 7.6 | 15.37 | 0.654 | 1.002 | -12.74 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 116.78 | 51.7% | 0.817 | 7.6 | 15.37 | 0.654 | 1.002 | -12.74 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 | 116.78 | 51.7% | 0.817 | 7.6 | 15.37 | 0.654 | 1.002 | -12.16 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 140.08 | 51.1% | 0.796 | 8.16 | 17.17 | 0.632 | 0.979 | -12.37 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 116.78 | 51.7% | 0.817 | 7.6 | 15.37 | 0.654 | 1.002 | -12.16 |  |
| Ghép: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 116.78 | 51.7% | 0.817 | 7.6 | 15.37 | 0.654 | 1.002 | -12.16 |  |
| Ghép: Điểm vùng: MACD cắt lên Signal → 0.563 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 140.08 | 51.1% | 0.796 | 8.16 | 17.17 | 0.632 | 0.979 | -12.37 |  |
| Ghép: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 | 118.06 | 52.4% | 0.826 | 7.56 | 15.62 | 0.67 | 1.002 | -12.16 |  |
| Ghép: Điểm vùng: MACD cắt lên Signal → 0.563 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 116.78 | 51.7% | 0.817 | 7.6 | 15.37 | 0.654 | 1.002 | -12.16 |  |

### Vòng 1067 — ghép cặp thay đổi suýt đạt · mốc: tổng 116.78R, win 51.7%, rủi ro tụt vốn 7.58R, lời÷rủi ro 15.41

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 139.89 | 50.8% | 0.79 | 8.15 | 17.16 | 0.632 | 0.965 | -12.37 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 | 118.06 | 52.4% | 0.826 | 7.61 | 15.51 | 0.67 | 1.002 | -12.16 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 116.78 | 51.7% | 0.817 | 7.58 | 15.41 | 0.654 | 1.002 | -12.16 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 116.78 | 51.7% | 0.817 | 7.58 | 15.41 | 0.654 | 1.002 | -12.16 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: HVN anchored → 0.125 | 116.78 | 51.7% | 0.817 | 7.58 | 15.41 | 0.654 | 1.002 | -11.72 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 116.78 | 51.7% | 0.817 | 7.58 | 15.41 | 0.654 | 1.002 | -11.14 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: MACD cắt lên Signal → 0.563 | 116.78 | 51.7% | 0.817 | 7.58 | 15.41 | 0.654 | 1.002 | -11.14 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 140.08 | 51.1% | 0.796 | 8.02 | 17.47 | 0.632 | 0.979 | -11.35 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 | 118.06 | 52.4% | 0.826 | 7.61 | 15.51 | 0.67 | 1.002 | -11.14 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 116.78 | 51.7% | 0.817 | 7.58 | 15.41 | 0.654 | 1.002 | -11.14 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.813 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 116.78 | 51.7% | 0.817 | 7.58 | 15.41 | 0.654 | 1.002 | -11.14 |  |
| Ghép: Điểm vùng: HVN anchored → 0.125 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 116.78 | 51.7% | 0.817 | 7.58 | 15.41 | 0.654 | 1.002 | -12.74 |  |

### Vòng 1066 — ghép cặp thay đổi suýt đạt · mốc: tổng 116.78R, win 51.7%, rủi ro tụt vốn 7.65R, lời÷rủi ro 15.27

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: POC volume profile cố định → 0.688 | 116.78 | 51.7% | 0.817 | 7.65 | 15.27 | 0.654 | 1.002 | -12.16 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: POC volume profile cố định → 0.813 | 116.78 | 51.7% | 0.817 | 7.65 | 15.27 | 0.654 | 1.002 | -11.14 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: HVN anchored → 0.125 | 116.78 | 51.7% | 0.817 | 7.65 | 15.27 | 0.654 | 1.002 | -12.74 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 116.78 | 51.7% | 0.817 | 7.65 | 15.27 | 0.654 | 1.002 | -12.16 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: MACD cắt lên Signal → 0.563 | 116.78 | 51.7% | 0.817 | 7.65 | 15.27 | 0.654 | 1.002 | -12.16 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.875 | 140.08 | 51.1% | 0.796 | 8.11 | 17.27 | 0.632 | 0.979 | -12.37 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.75 | 118.06 | 52.4% | 0.826 | 7.6 | 15.53 | 0.67 | 1.002 | -12.16 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 116.78 | 51.7% | 0.817 | 7.65 | 15.27 | 0.654 | 1.002 | -12.16 |  |
| Ghép: Điểm vùng: Mức RSI 30/70 → 1.13 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 116.78 | 51.7% | 0.817 | 7.65 | 15.27 | 0.654 | 1.002 | -12.16 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: HVN anchored → 0.125 | 116.78 | 51.7% | 0.817 | 7.65 | 15.27 | 0.654 | 1.002 | -12.74 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 116.78 | 51.7% | 0.817 | 7.65 | 15.27 | 0.654 | 1.002 | -12.16 |  |
| Ghép: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: MACD cắt lên Signal → 0.563 | 116.78 | 51.7% | 0.817 | 7.65 | 15.27 | 0.654 | 1.002 | -12.16 |  |

### Vòng 1065 — từng thông số · mốc: tổng 116.78R, win 51.7%, rủi ro tụt vốn 7.72R, lời÷rủi ro 15.13

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| R:R tối thiểu riêng khung 1W: null → 2 | 104.17 | 49.7% | 0.728 | 8.07 | 12.91 | 0.603 | 0.853 | -13.19 |  |

### Vòng 1064 — từng thông số · mốc: tổng 116.78R, win 51.7%, rủi ro tụt vốn 7.68R, lời÷rủi ro 15.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngưỡng điểm 'vào ngay' (tín hiệu mạnh): 6 → 5 | 94.61 | 45.5% | 0.652 | 9.56 | 9.9 | 0.53 | 0.792 | -8.13 |  |
| Ngưỡng điểm 'vào ngay' (tín hiệu mạnh): 6 → 7 | 103.01 | 50.7% | 0.715 | 8.71 | 11.83 | 0.654 | 0.784 | -11.17 |  |
| SL tối đa (% Entry): 0.5 → 0.425 | 115.77 | 51.4% | 0.804 | 7.96 | 14.54 | 0.654 | 0.972 | -12.16 |  |
| Đệm SL dưới vùng hỗ trợ (ATR): 1 → 0.95 | 114.05 | 49.7% | 0.765 | 8.59 | 13.28 | 0.52 | 1.043 | -12.06 |  |
| Đệm SL dưới vùng hỗ trợ (ATR): 1 → 1.05 | 97.32 | 47.8% | 0.705 | 8.56 | 11.37 | 0.463 | 0.97 | -13.71 |  |
| R:R tối thiểu riêng khung 4H: null → 2 | 121.85 | 41.2% | 0.392 | 12.4 | 9.83 | 0.357 | 0.421 | -8.71 |  |
| Đệm SL riêng khung 4H (ATR): null → 0.3 | 159.36 | 38.8% | 0.542 | 18.15 | 8.78 | 0.411 | 0.679 | -9.93 |  |
| Cộng thêm ngưỡng điểm khung 4H: 0 → -1 | 116.78 | 51.7% | 0.817 | 7.68 | 15.21 | 0.654 | 1.002 | -12.16 |  |
| Cộng thêm ngưỡng điểm khung 4H: 0 → 2 | 111.88 | 51% | 0.782 | 7.9 | 14.16 | 0.654 | 0.928 | -12.16 |  |
| R:R tối thiểu riêng khung 1D: null → 2 | 107.51 | 45.9% | 0.625 | 9.36 | 11.49 | 0.579 | 0.669 | -8.93 |  |
| Đệm SL riêng khung 1D (ATR): null → 0.3 | 113.88 | 46.3% | 0.694 | 10.52 | 10.83 | 0.669 | 0.717 | -9.47 |  |
| Cộng thêm ngưỡng điểm khung 1D: 4 → 3 | 115.23 | 50.7% | 0.789 | 7.81 | 14.75 | 0.623 | 0.98 | -12.16 |  |
| Cộng thêm ngưỡng điểm khung 1D: 4 → 5 | 116.78 | 51.7% | 0.817 | 7.68 | 15.21 | 0.654 | 1.002 | -12.16 |  |
