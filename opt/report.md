# Tối ưu tự động (chạy liên tục) — vòng 554

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 6303 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 47.6% | 96.22R | 0.587 | 6.53R | 9.51R | 10.12 | 31 | 12.9% | -13.15R | -0.424 | 13.15R |
| **Tốt nhất** | 144 | 51.4% | 108.2R | 0.751 | 6.16R | 8.03R | 13.47 | 29 | 17.2% | -10.95R | -0.378 | 11.57R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 27 | 48.1% | 18.83R | 5 | 0% | -3.76R |
| 1W | 11 | 45.5% | 6.82R | 3 | 0% | -3.33R |
| 4H | 106 | 52.8% | 82.56R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 164 | 47.6% | 96.22R | 9.51R | 10.12 | 31 | 12.9% | -13.15R |
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

### Vòng 554 — ngẫu nhiên nhiều thông số · mốc: tổng 108.2R, win 51.4%, rủi ro tụt vốn 8.03R, lời÷rủi ro 13.47

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm tối thiểu của vùng đặt SL → 4 | 94.09 | 47.6% | 0.649 | 9.21 | 10.22 | 0.47 | 0.83 | -9.62 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + R:R tối thiểu tới TP1 → 2.63 | 81.56 | 46.5% | 0.715 | 8.8 | 9.27 | 0.426 | 1.026 | -7.64 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + R:R tối thiểu riêng khung 1D → 2 | 74.71 | 43.8% | 0.519 | 9.46 | 7.9 | 0.556 | 0.483 | -14.5 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 113.19 | 51.7% | 0.792 | 7.36 | 15.38 | 0.674 | 0.907 | -11.85 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 157.68 | 37.6% | 0.535 | 18.23 | 8.65 | 0.438 | 0.627 | -13.59 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần SL (/100) → 9 + Cộng thêm ngưỡng điểm khung 1D → 5 | 89.52 | 48.9% | 0.673 | 7.9 | 11.33 | 0.459 | 0.884 | -13.83 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 20.3 | 54% | 0.146 | 6.29 | 3.23 | 0.239 | 0.062 | -6.54 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Ngưỡng điểm vào kèo → 74 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 81.96 | 44.8% | 0.477 | 10.88 | 7.53 | 0.396 | 0.557 | -10.22 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: EMA 21 → 0.875 + Đệm SL riêng khung 1D (ATR) → 0.3 | 115.2 | 46.9% | 0.72 | 10.32 | 11.16 | 0.72 | 0.72 | -6.35 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Đệm SL riêng khung 1W (ATR) → 0.3 | 96.48 | 44.9% | 0.656 | 9.7 | 9.95 | 0.516 | 0.794 | -11.71 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần SL (/100) → 9 | 106.73 | 50.7% | 0.741 | 8.11 | 13.16 | 0.582 | 0.919 | -10.95 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: EMA 200 → 1 + Lệnh chờ hết hạn sau (nến) → 6 | 96.01 | 45.8% | 0.572 | 9.94 | 9.66 | 0.641 | 0.497 | -1.2 |  |

### Vòng 553 — ngẫu nhiên nhiều thông số · mốc: tổng 112.69R, win 52.8%, rủi ro tụt vốn 7.59R, lời÷rủi ro 14.85

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: BOS → 1 | 70.47 | 46.7% | 0.659 | 8.71 | 8.09 | 0.473 | 0.87 | -6.48 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần Trend (/100) → 19 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 97.83 | 51% | 0.675 | 8.58 | 11.4 | 0.634 | 0.719 | -8.88 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + R:R tối thiểu riêng khung 4H → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 110.32 | 41.7% | 0.354 | 12.76 | 8.65 | 0.374 | 0.336 | -11.61 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: EMA 50 → 0.75 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 108.96 | 49.3% | 0.801 | 8.47 | 12.86 | 0.635 | 0.999 | -8.91 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: Fib sóng 4 → 1.56 | 104.58 | 50% | 0.726 | 8.54 | 12.25 | 0.491 | 0.982 | -9.52 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: EMA 50 → 1.13 | 108.03 | 50.3% | 0.735 | 8.45 | 12.78 | 0.597 | 0.89 | -8.64 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: EMA 200 → 1 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 116.4 | 48% | 0.665 | 9.74 | 11.95 | 0.66 | 0.672 | -3.78 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 | 113.04 | 46.6% | 0.693 | 10.58 | 10.68 | 0.723 | 0.666 | -12.54 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Cộng thêm ngưỡng điểm khung 4H → 2 | 105.51 | 52.4% | 0.738 | 7.62 | 13.85 | 0.653 | 0.834 | -9.66 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Số TP tối đa → 2 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 120.43 | 49.4% | 0.772 | 8.59 | 14.02 | 0.757 | 0.79 | -10.24 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 72.63 | 42.7% | 0.508 | 11.14 | 6.52 | 0.351 | 0.713 | -11.08 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 200 → 3 | 100.99 | 45.4% | 0.62 | 11.06 | 9.13 | 0.588 | 0.648 | -6.35 |  |

### Vòng 552 — ngẫu nhiên nhiều thông số · mốc: tổng 108.2R, win 51.4%, rủi ro tụt vốn 8.05R, lời÷rủi ro 13.44

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + R:R tối thiểu riêng khung 1D → 2 | 102.37 | 44% | 0.609 | 10.33 | 9.91 | 0.627 | 0.594 | -4.26 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + R:R tối thiểu tới TP1 → 2.63 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + R:R tối thiểu riêng khung 4H → 2 | 66.01 | 38.1% | 0.286 | 15.2 | 4.34 | 0.258 | 0.314 | -1.64 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Lệnh chờ hết hạn sau (nến) → 8 + % chốt ở TP1 → 0.307 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 101.41 | 50.6% | 0.658 | 8.78 | 11.55 | 0.634 | 0.684 | -12.8 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: BOS → 3 | 133.56 | 36.1% | 0.477 | 20.67 | 6.46 | 0.487 | 0.466 | -18.53 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + R:R tối thiểu riêng khung 4H → 2 | 97.56 | 39.4% | 0.315 | 14.13 | 6.9 | 0.324 | 0.307 | -8.54 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 87.94 | 46.4% | 0.575 | 10.01 | 8.79 | 0.413 | 0.766 | -8.37 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Cộng thêm ngưỡng điểm khung 4H → -1 | 108.21 | 51.4% | 0.751 | 8.11 | 13.34 | 0.583 | 0.94 | -10.96 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: HVN anchored → 0.188 | 98.6 | 49.6% | 0.709 | 7.99 | 12.34 | 0.595 | 0.818 | -11.99 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 | 72.89 | 47.1% | 0.521 | 9.66 | 7.55 | 0.43 | 0.622 | -12.34 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 107.83 | 51% | 0.754 | 8.09 | 13.33 | 0.605 | 0.919 | -11.98 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Trọng số phần R:R (/100) → 28 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 80.3 | 36.2% | 0.326 | 18 | 4.46 | 0.289 | 0.357 | -8.45 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 86.56 | 47.4% | 0.641 | 9.4 | 9.21 | 0.499 | 0.808 | -8.96 |  |

### Vòng 551 — ngẫu nhiên nhiều thông số · mốc: tổng 112.69R, win 52.8%, rủi ro tụt vốn 7.52R, lời÷rủi ro 14.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 103.04 | 50% | 0.696 | 8.08 | 12.75 | 0.578 | 0.831 | -10 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cộng thêm ngưỡng điểm khung 1W → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 | 102.94 | 50% | 0.746 | 7.88 | 13.06 | 0.606 | 0.903 | -9.69 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 50 → 1.13 + Coin phải mạnh hơn BTC trong N ngày → 14 | 10.87 | 36.8% | 0.087 | 18.28 | 0.59 | -0.136 | 0.28 | -12.11 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: HVN anchored → 0.313 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 89.01 | 49% | 0.614 | 8.65 | 10.29 | 0.626 | 0.601 | -9.42 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Mức RSI 30/70 → 0.875 | 74.28 | 45.9% | 0.609 | 9.86 | 7.53 | 0.499 | 0.742 | -6.48 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức RSI 30/70 → 0.875 | 35.46 | 57.2% | 0.205 | 5.85 | 6.06 | 0.252 | 0.157 | -11.38 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: POC volume profile cố định → 0.688 | 108.49 | 51.4% | 0.753 | 7.94 | 13.66 | 0.594 | 0.936 | -9.48 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: EMA 21 → 1.13 | 103.48 | 50.3% | 0.704 | 8.34 | 12.41 | 0.584 | 0.839 | -10.58 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: Mức MACD → 1.13 | 109.39 | 51% | 0.754 | 8.16 | 13.41 | 0.593 | 0.943 | -9.67 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: EMA 200 → 3 + Điểm vùng: EMA 50 → 0.75 + Đệm SL riêng khung 4H (ATR) → 0.3 | 141.45 | 39% | 0.53 | 17.19 | 8.23 | 0.265 | 0.77 | -13.62 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: HVN anchored → 0.313 + Điểm tối thiểu của vùng đặt SL → 4 | 105.56 | 49.7% | 0.708 | 8.33 | 12.67 | 0.564 | 0.872 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: HVN anchored → 0.188 + Coin phải mạnh hơn BTC trong N ngày → 14 | 77.09 | 43.3% | 0.514 | 10.06 | 7.66 | 0.576 | 0.453 | -14.39 |  |

### Vòng 550 — ngẫu nhiên nhiều thông số · mốc: tổng 112.69R, win 52.8%, rủi ro tụt vốn 7.56R, lời÷rủi ro 14.91

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + R:R tối thiểu tới TP1 → 2.38 | 85.7 | 47.1% | 0.546 | 9.04 | 9.48 | 0.519 | 0.571 | -11.23 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + R:R tối thiểu tới TP1 → 2.63 + Cổng Dow → TẮT + Trần điểm khi chart yếu (Trend < x) → -0.375 | 94.5 | 40.2% | 0.543 | 12.97 | 7.29 | 0.402 | 0.675 | -21.77 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Fib sóng 4 → 1.56 + R:R tối thiểu riêng khung 1W → 2 | 98.49 | 49.7% | 0.67 | 8.33 | 11.82 | 0.577 | 0.766 | -10.7 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Xác nhận khung nhỏ (A2) → W | 77.96 | 37.9% | 0.305 | 17.14 | 4.55 | 0.351 | 0.257 | -4.05 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Ngưỡng điểm vào kèo → 74 | 120.98 | 42.9% | 0.571 | 12.33 | 9.81 | 0.519 | 0.624 | -20.3 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 66.85 | 45.9% | 0.613 | 8.87 | 7.54 | 0.454 | 0.795 | -6.48 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Biên mây Ichimoku → 1.35 | 95.5 | 50.3% | 0.659 | 8.64 | 11.05 | 0.611 | 0.711 | -7.86 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần Trend (/100) → 19 | 80.83 | 41.9% | 0.484 | 13.23 | 6.11 | 0.496 | 0.473 | -5.34 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Số TP tối đa → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 38.91 | 41.6% | 0.437 | 9.83 | 3.96 | 0.344 | 0.557 | -8.58 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Xác nhận khung nhỏ (A2) → W + Trọng số phần Trend (/100) → 19 | 69.15 | 37.3% | 0.271 | 18.79 | 3.68 | 0.303 | 0.239 | -5.71 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Khung lớn phải tăng (trend ≥) → 0.425 + Trọng số phần Trend (/100) → 12 | 107.63 | 46.2% | 0.681 | 10.41 | 10.34 | 0.688 | 0.675 | -9.02 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Đệm SL riêng khung 1D (ATR) → 0.3 | 112.02 | 47.3% | 0.679 | 10.37 | 10.8 | 0.671 | 0.686 | -5.33 |  |

### Vòng 549 — ngẫu nhiên nhiều thông số · mốc: tổng 112.69R, win 52.8%, rủi ro tụt vốn 7.59R, lời÷rủi ro 14.85

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Coin phải mạnh hơn BTC trong N ngày → 14 | 81.16 | 49.6% | 0.694 | 8.3 | 9.78 | 0.552 | 0.859 | -16.13 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Trend (/100) → 19 | 120.48 | 49.4% | 0.772 | 8.73 | 13.8 | 0.757 | 0.79 | -10.24 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: HVN cố định → 0.563 + Đệm SL riêng khung 4H (ATR) → 0.3 | 151.44 | 37.3% | 0.528 | 18.77 | 8.07 | 0.403 | 0.655 | -17.64 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + R:R tối thiểu tới TP1 → 2.63 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 25.38 | 57.2% | 0.184 | 6.22 | 4.08 | 0.222 | 0.151 | -8.41 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Ngưỡng điểm vào kèo → 77 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 105.7 | 50.7% | 0.734 | 7.87 | 13.43 | 0.646 | 0.827 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Cộng thêm ngưỡng điểm khung 1W → -1 | 112.69 | 52.8% | 0.783 | 7.59 | 14.85 | 0.635 | 0.952 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Cộng điểm phân kỳ dương ẩn → 2.25 + Lệnh chờ hết hạn sau (nến) → 8 | 106.07 | 50.3% | 0.693 | 8.6 | 12.33 | 0.614 | 0.77 | -12.29 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Xác nhận khung nhỏ (A2) → W + Đệm SL riêng khung 1W (ATR) → 0.3 | 37.47 | 33.8% | 0.189 | 22.07 | 1.7 | 0.13 | 0.245 | -4.63 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + SL tối đa (% Entry) → 0.425 | 107.1 | 50.4% | 0.76 | 7.95 | 13.47 | 0.621 | 0.912 | -12.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: EMA 50 → 0.75 | 115.12 | 52.6% | 0.738 | 8.08 | 14.25 | 0.592 | 0.908 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 109.74 | 49.3% | 0.742 | 8.39 | 13.08 | 0.661 | 0.822 | -10 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Đệm SL riêng khung 1D (ATR) → 0.3 | 100.49 | 45.1% | 0.62 | 11.2 | 8.97 | 0.699 | 0.549 | -6.35 |  |

### Vòng 548 — ngẫu nhiên nhiều thông số · mốc: tổng 112.69R, win 52.8%, rủi ro tụt vốn 7.58R, lời÷rủi ro 14.87

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: BOS → 1 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 88.36 | 40.5% | 0.341 | 16.57 | 5.33 | 0.364 | 0.319 | -3.51 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: HVN anchored → 0.313 | 110.99 | 49.3% | 0.73 | 8.4 | 13.21 | 0.581 | 0.901 | -10.69 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 21 → 0.875 + Trọng số phần R:R (/100) → 33 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 113.03 | 51.4% | 0.764 | 7.93 | 14.25 | 0.688 | 0.846 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Fib sóng 4 → 1.56 | 115.16 | 44.8% | 0.516 | 11.03 | 10.44 | 0.543 | 0.489 | -10.74 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 + Ngưỡng điểm vào kèo → 77 | 104.7 | 51.4% | 0.748 | 7.38 | 14.19 | 0.665 | 0.833 | -9.88 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + % chốt ở TP1 → 0.307 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Mức MACD → 0.875 | 103.51 | 51.7% | 0.724 | 8.24 | 12.56 | 0.622 | 0.833 | -9.67 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: BOS → 3 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 83.8 | 38% | 0.342 | 17.15 | 4.89 | 0.287 | 0.392 | -3.74 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 38.47 | 52.3% | 0.134 | 12.45 | 3.09 | 0.049 | 0.196 | -6.08 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Cộng thêm ngưỡng điểm khung 4H → -1 | 104.25 | 51% | 0.719 | 8.09 | 12.89 | 0.608 | 0.835 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần R:R (/100) → 33 + Điểm vùng: POC anchored → 4 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 36.97 | 41.9% | 0.43 | 9.57 | 3.86 | 0.356 | 0.528 | -8.69 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 96.31 | 48.9% | 0.683 | 8.59 | 11.21 | 0.465 | 0.938 | -11.51 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: EMA 200 → 3 | 100.98 | 47.1% | 0.732 | 8.96 | 11.27 | 0.503 | 0.989 | -8.87 |  |

### Vòng 547 — ngẫu nhiên nhiều thông số · mốc: tổng 112.69R, win 52.8%, rủi ro tụt vốn 7.52R, lời÷rủi ro 14.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Xác nhận khung nhỏ (A2) → W + Trần điểm khi chart yếu (Trend < x) → -0.225 | 81.35 | 37.8% | 0.327 | 17.48 | 4.65 | 0.314 | 0.338 | -3.73 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: HVN anchored → 0.313 | 112.23 | 50.6% | 0.71 | 9 | 12.47 | 0.602 | 0.853 | -4.67 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Trọng số phần Divergence (/100) → 9 | 110.85 | 51.4% | 0.749 | 8 | 13.86 | 0.608 | 0.911 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Trọng số phần Elliott (/100) → 10 + Điểm tối thiểu của vùng đặt SL → 4 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 71.44 | 46.4% | 0.571 | 9.33 | 7.66 | 0.456 | 0.692 | -8.96 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 79.36 | 40.1% | 0.475 | 11.22 | 7.07 | 0.425 | 0.532 | -8.36 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + SL tối đa (% Entry) → 0.425 | 110.33 | 52.4% | 0.761 | 7.73 | 14.27 | 0.634 | 0.905 | -9.66 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + R:R tối thiểu riêng khung 4H → 2 | 102.64 | 40.9% | 0.333 | 12.93 | 7.94 | 0.339 | 0.328 | -10.84 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần Trend (/100) → 12 + R:R tối thiểu tới TP1 → 2.63 | 91.93 | 49.6% | 0.773 | 8.23 | 11.17 | 0.548 | 1.016 | -10.63 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Trọng số phần Momentum (/100) → 21 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 38.91 | 41.6% | 0.437 | 9.76 | 3.99 | 0.344 | 0.557 | -8.58 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Đệm SL riêng khung 1D (ATR) → 0.3 | 99.11 | 43.9% | 0.639 | 11.57 | 8.57 | 0.561 | 0.709 | -9.05 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + SL tối đa (% Entry) → 0.425 | 97.8 | 49.7% | 0.648 | 8.8 | 11.11 | 0.546 | 0.756 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Entry (/100) → 28 + Đệm SL riêng khung 1D (ATR) → 0.3 + Trọng số phần SL (/100) → 9 | 113.61 | 47.9% | 0.697 | 9.96 | 11.41 | 0.675 | 0.717 | -6.35 |  |

### Vòng 546 — ngẫu nhiên nhiều thông số · mốc: tổng 112.81R, win 53.1%, rủi ro tụt vốn 7.55R, lời÷rủi ro 14.94

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần Momentum (/100) → 21 + % chốt ở TP1 → 0.287 | 103.97 | 50.7% | 0.693 | 8.51 | 12.22 | 0.548 | 0.859 | -8.82 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: HVN anchored → 0.313 | 105.85 | 47.2% | 0.649 | 10.47 | 10.11 | 0.626 | 0.671 | -4.52 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 27.07 | 56.8% | 0.175 | 6.07 | 4.46 | 0.215 | 0.136 | -11.19 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Divergence (/100) → 12 | 27.07 | 56.8% | 0.175 | 6.07 | 4.46 | 0.215 | 0.136 | -11.19 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Ngưỡng điểm vào kèo → 77 | 91.28 | 50% | 0.634 | 8.6 | 10.61 | 0.656 | 0.61 | -7.53 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu riêng khung 1D → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Số TP tối đa → 2 | 113.65 | 45.1% | 0.624 | 9.6 | 11.84 | 0.727 | 0.528 | -7.37 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Biên mây Ichimoku → 1.35 + Trọng số phần Entry (/100) → 33 | 93.63 | 50.8% | 0.78 | 8.11 | 11.55 | 0.598 | 0.962 | -7.48 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 97.88 | 47.8% | 0.709 | 9.06 | 10.8 | 0.523 | 0.875 | -8.57 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + R:R tối thiểu riêng khung 1W → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 98.74 | 50.3% | 0.681 | 8.37 | 11.8 | 0.602 | 0.759 | -9.7 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 4H (ATR) → 0.3 | 92.6 | 34.5% | 0.41 | 20.72 | 4.47 | 0.314 | 0.513 | -15.76 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 70.3 | 44.7% | 0.617 | 10.14 | 6.93 | 0.433 | 0.835 | -6.26 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Fib sóng 4 → 0.938 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 119.76 | 50% | 0.788 | 8.39 | 14.27 | 0.77 | 0.808 | -9.42 |  |

### Vòng 545 — ngẫu nhiên nhiều thông số · mốc: tổng 113.77R, win 53.1%, rủi ro tụt vốn 7.29R, lời÷rủi ro 15.61

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: BOS → 1 + % chốt ở TP1 → 0.287 + Điểm vùng: Fib sóng 4 → 0.938 + Cộng thêm ngưỡng điểm khung 1D → 5 | 111.66 | 52.4% | 0.781 | 7.66 | 14.58 | 0.607 | 0.984 | -9.64 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Số TP tối đa → 2 + Điểm vùng: POC volume profile cố định → 0.813 | 113.13 | 52.1% | 0.797 | 7.48 | 15.12 | 0.645 | 0.971 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Cổng Dow → TẮT | 118.3 | 42.7% | 0.574 | 12.1 | 9.78 | 0.496 | 0.655 | -19.77 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 119 | 45.1% | 0.527 | 10.73 | 11.09 | 0.565 | 0.486 | -10.74 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 101.13 | 39.6% | 0.405 | 13.8 | 7.33 | 0.467 | 0.342 | -10.01 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng thêm ngưỡng điểm khung 1W → 2 | 96.76 | 48.6% | 0.691 | 8.48 | 11.41 | 0.469 | 0.947 | -10.49 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Điểm vùng: EMA 50 → 1.13 | 106.64 | 49.7% | 0.735 | 8.48 | 12.58 | 0.555 | 0.952 | -8.64 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + % chốt ở TP1 → 0.307 + Điểm vùng: POC anchored → 4 | 108.09 | 51.8% | 0.767 | 7.56 | 14.3 | 0.559 | 0.978 | -4.53 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: HVN cố định → 0.563 | 113.77 | 53.1% | 0.796 | 7.29 | 15.61 | 0.635 | 0.983 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + R:R tối thiểu riêng khung 4H → 2 | 104.73 | 41.2% | 0.342 | 12.72 | 8.23 | 0.339 | 0.345 | -10.23 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Đệm SL riêng khung 1W (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 19.99 | 52.4% | 0.136 | 8.02 | 2.49 | 0.184 | 0.102 | -10.55 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 | 36.97 | 57% | 0.215 | 6.85 | 5.4 | 0.31 | 0.14 | -7.96 |  |
