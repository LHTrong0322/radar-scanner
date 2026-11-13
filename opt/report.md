# Tối ưu tự động (chạy liên tục) — vòng 112

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 1053 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.9% | 101.67R | 0.628 | 5.74R | 9.62R | 10.57 | 34 | 11.8% | -16.07R | -0.473 | 16.07R |
| **Tốt nhất** | 142 | 51.4% | 119.62R | 0.842 | 5.14R | 7.71R | 15.51 | 32 | 12.5% | -15.46R | -0.483 | 15.46R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 28.06R | 7 | 0% | -5.66R |
| 1W | 10 | 50% | 7.46R | 2 | 0% | -2.04R |
| 4H | 104 | 51.9% | 84.1R | 23 | 17.4% | -7.76R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 103 (Ghép: Khoảng cách tối thiểu TP1 (ATR) → 1 + Điểm vùng: Mức sai Elliott (cho SL) → 3).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.9% | 101.67R | 9.62R | 10.57 | 34 | 11.8% | -16.07R |
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
| Điểm vùng: HVN cố định | 0.25 | **0.5** |

## Các thay đổi đã nhận (mới nhất trước)

| Vòng | Thông số | Từ → Thành | Tổng R | Tỷ lệ thắng | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro |
|---|---|---|---|---|---|---|
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

### Vòng 110 — ngẫu nhiên nhiều thông số · mốc: tổng 119.62R, win 51.4%, rủi ro tụt vốn 7.75R, lời÷rủi ro 15.43

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 + Điểm vùng: Vùng RSI 45–55 → 0.5 + Điểm vùng: EMA 21 → 1.5 | 112.34 | 45.6% | 0.582 | 10.43 | 10.77 | 0.55 | 0.611 | -13.35 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.5 + Lệnh chờ hết hạn sau (nến) → 8 | 118.66 | 47.3% | 0.702 | 9.23 | 12.86 | 0.671 | 0.742 | -18.16 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 121.59 | 48.9% | 0.888 | 8.22 | 14.79 | 0.727 | 1.076 | -13.7 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: MACD cắt lên Signal → 0.75 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 103.03 | 43% | 0.435 | 12.47 | 8.26 | 0.486 | 0.388 | -18.71 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + R:R tối thiểu riêng khung 4H → 2 | 108.36 | 40% | 0.361 | 13.69 | 7.92 | 0.43 | 0.299 | -16.81 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 5 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần Trend (/100) → 12 | 96.19 | 43.2% | 0.659 | 10.2 | 9.43 | 0.591 | 0.739 | -13.02 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 25.26 | 53.2% | 0.148 | 7.76 | 3.26 | 0.213 | 0.083 | -11.1 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.5 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 84.5 | 45.9% | 0.693 | 10.13 | 8.34 | 0.635 | 0.768 | -10.39 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 3.75 + Điểm vùng: MACD cắt lên Signal → 0.25 + Trọng số phần SL (/100) → 5 | 112.19 | 49.3% | 0.738 | 9.27 | 12.1 | 0.616 | 0.881 | -11.86 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Vùng RSI 45–55 → 0.5 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 67.45 | 41.9% | 0.544 | 11.55 | 5.84 | 0.595 | 0.489 | -10.94 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 111.39 | 49.7% | 0.738 | 8.92 | 12.49 | 0.727 | 0.75 | -14.55 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Kháng cự cũ bị phá → 0.75 | 74.35 | 44.6% | 0.664 | 10.1 | 7.36 | 0.594 | 0.747 | -9.89 |  |

### Vòng 109 — ngẫu nhiên nhiều thông số · mốc: tổng 119.62R, win 51.4%, rủi ro tụt vốn 7.71R, lời÷rủi ro 15.51

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Số TP tối đa → 2 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 77.57 | 41.2% | 0.368 | 13.69 | 5.67 | 0.414 | 0.328 | -17.25 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Vùng RSI 45–55 → 0.5 | 102.19 | 46.5% | 0.72 | 8.6 | 11.88 | 0.748 | 0.693 | -14.64 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 5 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.5 | 109.96 | 45.8% | 0.655 | 9.71 | 11.32 | 0.67 | 0.64 | -12.24 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Entry (/100) → 28 + Xác nhận khung nhỏ (A2) → W | 112.93 | 40.3% | 0.406 | 15.52 | 7.28 | 0.429 | 0.383 | -10.18 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.5 + Điểm vùng: POC volume profile cố định → 0.5 | 116.27 | 49.7% | 0.75 | 8.61 | 13.5 | 0.696 | 0.82 | -15.46 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Kháng cự cũ bị phá → 2.25 + R:R tối thiểu tới TP1 → 2.38 + Khung lớn phải tăng (trend ≥) → 0.425 | 90.97 | 43.7% | 0.545 | 10.09 | 9.02 | 0.568 | 0.521 | -16.03 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Cộng thêm ngưỡng điểm khung 1D → 4 | 119.17 | 51% | 0.833 | 7.92 | 15.05 | 0.724 | 0.958 | -15.46 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Biên mây Ichimoku → 0.6 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần Momentum (/100) → 21 | 90.35 | 42.4% | 0.548 | 12.13 | 7.45 | 0.552 | 0.544 | -14.02 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Fib sóng 4 → 0 + Điểm vùng: BOS → 3 | 112.23 | 49% | 0.763 | 8.25 | 13.6 | 0.694 | 0.836 | -16.5 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.25 + Điểm tối thiểu của vùng đặt SL → 4 | 110.22 | 48% | 0.725 | 9.14 | 12.06 | 0.62 | 0.845 | -12.76 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 2.5 + Điểm vùng: Break mây Ichimoku → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 83.65 | 44.6% | 0.533 | 10.54 | 7.94 | 0.287 | 0.824 | -10.1 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Số TP tối đa → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 1.25 + Điểm vùng: Break mây Ichimoku → 1 | 95.85 | 49.6% | 0.7 | 8.19 | 11.7 | 0.605 | 0.785 | -12.3 |  |

### Vòng 108 — ngẫu nhiên nhiều thông số · mốc: tổng 119.62R, win 51.4%, rủi ro tụt vốn 7.7R, lời÷rủi ro 15.54

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Mức MACD → 0.5 + Điểm vùng: Kháng cự cũ bị phá → 0.75 | 132.36 | 51% | 0.843 | 7.95 | 16.65 | 0.846 | 0.839 | -11.98 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 1.25 + Điểm vùng: Fib 0.618 sóng 2 → 1.25 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 113.38 | 50.7% | 0.798 | 7.53 | 15.06 | 0.752 | 0.846 | -16.04 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần Entry (/100) → 28 + Ngưỡng điểm vào kèo → 74 + Đệm SL riêng khung 1D (ATR) → 0.3 | 92.09 | 43.6% | 0.565 | 11.49 | 8.01 | 0.467 | 0.651 | -13.77 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Cộng thêm ngưỡng điểm khung 1W → -1 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 139.4 | 43.7% | 0.654 | 11.76 | 11.85 | 0.566 | 0.743 | -15.82 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.38 + Số TP tối đa → 2 + Trọng số phần SL (/100) → 10 + Điểm vùng: BOS → 3 | 114.81 | 49.7% | 0.803 | 8.12 | 14.14 | 0.677 | 0.946 | -15.46 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Divergence (/100) → 5 | 116.65 | 48.7% | 0.767 | 8.54 | 13.66 | 0.738 | 0.801 | -15.02 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + SL tối đa (% Entry) → 0.425 | 118.2 | 50.7% | 0.844 | 8.19 | 14.43 | 0.724 | 0.979 | -15.46 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm tối thiểu của vùng đặt SL → 4 | 114.81 | 49.7% | 0.803 | 8.25 | 13.92 | 0.73 | 0.883 | -14.02 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm tối thiểu vùng đặt lệnh chờ → 4 + Điểm vùng: Vùng RSI 45–55 → 1.5 | 120.22 | 48.1% | 0.742 | 8.59 | 14 | 0.695 | 0.799 | -14.93 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + SL tối đa (% Entry) → 0.35 + Điểm vùng: POC volume profile cố định → 1 | 71.75 | 39.9% | 0.403 | 14.03 | 5.11 | 0.324 | 0.475 | -11.42 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Momentum (/100) → 25 | 156.24 | 39.2% | 0.659 | 15.76 | 9.91 | 0.626 | 0.692 | -22.13 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Divergence (/100) → 5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 175.93 | 38.7% | 0.558 | 17.93 | 9.81 | 0.475 | 0.643 | -16.7 |  |

### Vòng 107 — ngẫu nhiên nhiều thông số · mốc: tổng 119.62R, win 51.4%, rủi ro tụt vốn 7.65R, lời÷rủi ro 15.64

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Lệnh chờ hết hạn sau (nến) → 8 + Đệm SL riêng khung 1W (ATR) → 0.3 | 54.44 | 40.4% | 0.478 | 11.57 | 4.71 | 0.29 | 0.614 | -18.07 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm tối thiểu của vùng đặt SL → 4 + Cộng thêm ngưỡng điểm khung 4H → -1 | 75.28 | 44.2% | 0.462 | 10.73 | 7.02 | 0.387 | 0.531 | -13.06 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: HVN cố định → 0.25 + Xác nhận khung nhỏ (A2) → W | 103.79 | 39% | 0.368 | 16.26 | 6.38 | 0.402 | 0.332 | -8.15 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.38 + Điểm vùng: Mức MACD → 0.5 | 128.28 | 51.3% | 0.855 | 8.04 | 15.96 | 0.811 | 0.91 | -15.51 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.38 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 111.32 | 48.7% | 0.714 | 8.88 | 12.54 | 0.693 | 0.738 | -14.12 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.5 + % chốt ở TP1 → 0.287 + R:R tối thiểu riêng khung 1W → 2 | 102.7 | 47.9% | 0.703 | 9 | 11.41 | 0.644 | 0.766 | -16.48 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: MACD cắt lên Signal → 0.25 + Số TP tối đa → 2 | 107.24 | 48.4% | 0.692 | 9.43 | 11.37 | 0.529 | 0.88 | -11.56 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Kháng cự cũ bị phá → 2.25 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.5 | 26.67 | 55.6% | 0.165 | 6.85 | 3.89 | 0.232 | 0.095 | -8.06 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: POC anchored → 2 + Trọng số phần Trend (/100) → 19 + Coin phải mạnh hơn BTC trong N ngày → 14 | 77.57 | 45.6% | 0.621 | 9.8 | 7.92 | 0.64 | 0.598 | -20.9 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.5 + Cộng thêm ngưỡng điểm khung 1D → 7 + SL tối đa (% Entry) → 0.425 | 118.23 | 51% | 0.827 | 7.84 | 15.08 | 0.734 | 0.929 | -13.94 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + SL tối đa (% Entry) → 0.425 + Cộng điểm phân kỳ dương ẩn → 2.63 + Số TP tối đa → 2 | 116.95 | 51.1% | 0.829 | 7.86 | 14.88 | 0.689 | 0.99 | -15.46 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: BOS → 3 | 13.7 | 37.2% | 0.176 | 12.47 | 1.1 | 0.118 | 0.255 | -5.39 |  |

### Vòng 106 — ngẫu nhiên nhiều thông số · mốc: tổng 119.62R, win 51.4%, rủi ro tụt vốn 7.7R, lời÷rủi ro 15.54

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 50 → 1.5 + Điểm vùng: Đỉnh/đáy pivot Dow → 3.75 | 47.52 | 44.3% | 0.448 | 9.08 | 5.23 | 0.638 | 0.236 | -16.36 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 1.25 + Điểm vùng: BOS → 1 + Điểm vùng: EMA 21 → 0.5 | 104 | 50% | 0.754 | 8.12 | 12.81 | 0.617 | 0.886 | -16.88 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần Elliott (/100) → 10 | 79.77 | 46% | 0.706 | 8.58 | 9.3 | 0.653 | 0.764 | -21.76 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 71.57 | 46.7% | 0.795 | 8.77 | 8.16 | 0.713 | 0.898 | -16.85 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu riêng khung 1W → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 4 | 25.03 | 53.8% | 0.148 | 6.57 | 3.81 | 0.253 | 0.049 | -8.58 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 2.25 + Điểm vùng: Break mây Ichimoku → 1 + Cộng thêm ngưỡng điểm khung 1D → 7 + Điểm tối thiểu của vùng đặt SL → 4 | 90.04 | 44.7% | 0.639 | 9.49 | 9.49 | 0.586 | 0.693 | -12.17 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + SL tối đa (% Entry) → 0.35 | 25.39 | 54.2% | 0.166 | 7.2 | 3.53 | 0.221 | 0.112 | -10.04 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Ngưỡng điểm vào kèo → 77 | 113.58 | 49.7% | 0.794 | 7.94 | 14.3 | 0.674 | 0.927 | -13.98 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Cộng điểm phân kỳ dương ẩn → 2.63 | 91.02 | 44.2% | 0.583 | 11.34 | 8.03 | 0.475 | 0.684 | -15.09 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.5 + Trọng số phần Divergence (/100) → 5 + Trọng số phần SL (/100) → 5 | 110.67 | 48.3% | 0.743 | 8.32 | 13.3 | 0.705 | 0.787 | -14.44 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3.5 + Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần Elliott (/100) → 6 | 118.46 | 50.3% | 0.817 | 7.76 | 15.27 | 0.712 | 0.936 | -15.46 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 79.83 | 46.7% | 0.746 | 9.12 | 8.75 | 0.625 | 0.895 | -9.02 |  |

### Vòng 105 — ghép cặp thay đổi suýt đạt · mốc: tổng 119.62R, win 51.4%, rủi ro tụt vốn 7.87R, lời÷rủi ro 15.20

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: % chốt ở TP1 → 0.275 + Trần điểm khi chart yếu (Trend < x) → -0.15 | 119.63 | 51.4% | 0.842 | 7.88 | 15.18 | 0.722 | 0.981 | -15.42 |  |

### Vòng 104 — ghép cặp thay đổi suýt đạt · mốc: tổng 119.62R, win 51.4%, rủi ro tụt vốn 7.71R, lời÷rủi ro 15.51

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng điểm phân kỳ dương ẩn → 1.5 | 121.91 | 51% | 0.829 | 7.49 | 16.28 | 0.726 | 0.952 | -13.94 |  |
| Ghép: Điểm vùng: Mức sai Elliott (cho SL) → 3 + % chốt ở TP1 → 0.315 | 120.61 | 50.7% | 0.826 | 7.65 | 15.77 | 0.72 | 0.951 | -14.98 |  |
| Ghép: Điểm vùng: Mức sai Elliott (cho SL) → 3 + % chốt ở TP1 → 0.275 | 121.69 | 51% | 0.828 | 7.56 | 16.1 | 0.722 | 0.954 | -14.92 |  |
| Ghép: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trần điểm khi chart yếu (Trend < x) → -0.45 | 121.72 | 51% | 0.828 | 7.53 | 16.16 | 0.724 | 0.952 | -14.96 |  |
| Ghép: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Trần điểm khi chart yếu (Trend < x) → -0.15 | 121.72 | 51% | 0.828 | 7.53 | 16.16 | 0.724 | 0.952 | -14.96 |  |
| Ghép: Cộng điểm phân kỳ dương ẩn → 1.5 + % chốt ở TP1 → 0.315 | 119.8 | 51.4% | 0.844 | 7.66 | 15.64 | 0.727 | 0.978 | -14.46 |  |
| Ghép: Cộng điểm phân kỳ dương ẩn → 1.5 + % chốt ở TP1 → 0.275 | 119.82 | 51.4% | 0.844 | 7.7 | 15.56 | 0.725 | 0.981 | -14.4 |  |
| Ghép: Cộng điểm phân kỳ dương ẩn → 1.5 + Trần điểm khi chart yếu (Trend < x) → -0.45 | 119.81 | 51.4% | 0.844 | 7.68 | 15.6 | 0.726 | 0.979 | -14.44 |  |
| Ghép: Cộng điểm phân kỳ dương ẩn → 1.5 + Trần điểm khi chart yếu (Trend < x) → -0.15 | 119.81 | 51.4% | 0.844 | 7.68 | 15.6 | 0.726 | 0.979 | -14.44 |  |
| Ghép: % chốt ở TP1 → 0.315 + Trần điểm khi chart yếu (Trend < x) → -0.45 | 119.62 | 51.4% | 0.842 | 7.67 | 15.6 | 0.725 | 0.978 | -15.48 |  |
| Ghép: % chốt ở TP1 → 0.315 + Trần điểm khi chart yếu (Trend < x) → -0.15 | 119.62 | 51.4% | 0.842 | 7.67 | 15.6 | 0.725 | 0.978 | -15.48 |  |
| Ghép: % chốt ở TP1 → 0.275 + Trần điểm khi chart yếu (Trend < x) → -0.45 | 119.63 | 51.4% | 0.842 | 7.72 | 15.5 | 0.722 | 0.981 | -15.42 |  |

### Vòng 103 — ghép cặp thay đổi suýt đạt · mốc: tổng 119.62R, win 51.4%, rủi ro tụt vốn 7.7R, lời÷rủi ro 15.54

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 0.875 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 133.22 | 51.2% | 0.784 | 7.82 | 17.04 | 0.638 | 0.94 | -15.17 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 0.875 + Cộng điểm phân kỳ dương ẩn → 1.5 | 135.2 | 52.1% | 0.81 | 7.51 | 18 | 0.666 | 0.962 | -14.65 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 0.875 + % chốt ở TP1 → 0.315 | 135.05 | 52.1% | 0.809 | 7.5 | 18.01 | 0.665 | 0.961 | -15.69 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 0.875 + % chốt ở TP1 → 0.275 | 134.96 | 52.1% | 0.808 | 7.53 | 17.92 | 0.662 | 0.963 | -15.63 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.45 | 135.01 | 52.1% | 0.808 | 7.51 | 17.98 | 0.664 | 0.962 | -15.67 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.15 | 135.01 | 52.1% | 0.808 | 7.51 | 17.98 | 0.664 | 0.962 | -15.67 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 1 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 153.67 | 50% | 0.835 | 7.84 | 19.6 | 0.75 | 0.932 | -16.2 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 1 + Cộng điểm phân kỳ dương ẩn → 1.5 | 151.72 | 50% | 0.834 | 8.3 | 18.28 | 0.73 | 0.952 | -15.68 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 1 + % chốt ở TP1 → 0.315 | 151.4 | 50% | 0.832 | 8.3 | 18.24 | 0.727 | 0.952 | -16.73 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 1 + % chốt ở TP1 → 0.275 | 151.78 | 50% | 0.834 | 8.34 | 18.2 | 0.729 | 0.953 | -16.67 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 1 + Trần điểm khi chart yếu (Trend < x) → -0.45 | 151.54 | 50% | 0.833 | 8.31 | 18.24 | 0.728 | 0.952 | -16.7 |  |
| Ghép: Khoảng cách tối thiểu TP1 (ATR) → 1 + Trần điểm khi chart yếu (Trend < x) → -0.15 | 151.54 | 50% | 0.833 | 8.31 | 18.24 | 0.728 | 0.952 | -16.7 |  |
