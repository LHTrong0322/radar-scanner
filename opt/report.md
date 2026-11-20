# Tối ưu tự động (chạy liên tục) — vòng 966

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 11247 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 46.4% | 95.04R | 0.573 | 6.44R | 10.21R | 9.31 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 145 | 52.4% | 113.95R | 0.786 | 5.09R | 8R | 14.24 | 27 | 18.5% | -8.9R | -0.33 | 10.54R |

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
| Bot thật | 166 | 46.4% | 95.04R | 10.21R | 9.31 | 30 | 13.3% | -11.98R |
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

### Vòng 966 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8R, lời÷rủi ro 14.24

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Đệm SL riêng khung 1W (ATR) → 0.3 | 97.81 | 44.8% | 0.684 | 10.23 | 9.56 | 0.477 | 0.861 | -9.04 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: MACD cắt lên Signal → 0.563 | 114.03 | 52.4% | 0.786 | 8 | 14.25 | 0.593 | 1.005 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Break mây Ichimoku → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 134.69 | 44.5% | 0.55 | 11.02 | 12.22 | 0.655 | 0.44 | -11.25 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Break mây Ichimoku → 3 | 74.71 | 46.3% | 0.558 | 10.3 | 7.25 | 0.4 | 0.719 | -13.79 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 113.44 | 51.3% | 0.718 | 8.55 | 13.27 | 0.574 | 0.899 | -3.91 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + % chốt ở TP1 → 0.287 | 106.84 | 51.7% | 0.727 | 8.02 | 13.32 | 0.616 | 0.836 | -9.92 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 110.93 | 52.1% | 0.792 | 7.61 | 14.58 | 0.651 | 0.947 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 102.1 | 50% | 0.672 | 9.2 | 11.1 | 0.498 | 0.875 | -6.32 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + % chốt ở TP1 → 0.287 | 112.12 | 51.4% | 0.779 | 7.81 | 14.36 | 0.593 | 0.986 | -8.88 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Cộng điểm phân kỳ dương ẩn → 2.25 + Đệm SL riêng khung 1D (ATR) → 0.3 | 104.38 | 46.6% | 0.715 | 10.52 | 9.92 | 0.652 | 0.771 | -9.71 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm tối thiểu của vùng đặt SL → 4 | 97.86 | 50% | 0.661 | 8.69 | 11.26 | 0.6 | 0.728 | -6.35 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần SL (/100) → 9 | 104.04 | 48.5% | 0.638 | 9.65 | 10.78 | 0.504 | 0.789 | -8.64 |  |

### Vòng 965 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.13R, lời÷rủi ro 14.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Ngưỡng điểm vào kèo → 77 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 4H → -1 | 112.61 | 51% | 0.787 | 7.74 | 14.55 | 0.624 | 0.963 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Trọng số phần Entry (/100) → 33 | 97.54 | 48.7% | 0.65 | 9.05 | 10.78 | 0.496 | 0.813 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Điểm vùng: EMA 200 → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 84.19 | 45.2% | 0.624 | 9.95 | 8.46 | 0.36 | 0.834 | -11.77 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cổng Dow → TẮT + Điểm vùng: Biên mây Ichimoku → 1.35 | 6.81 | 44.4% | 0.038 | 12.43 | 0.55 | 0.101 | -0.038 | -9.73 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 111.6 | 52.1% | 0.764 | 7.9 | 14.13 | 0.57 | 0.987 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần Elliott (/100) → 10 | 112.23 | 51.4% | 0.779 | 7.88 | 14.24 | 0.596 | 0.984 | -8.9 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: BOS → 1 | 127.41 | 49.7% | 0.801 | 8.55 | 14.9 | 0.752 | 0.858 | -9.31 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: EMA 200 → 3 | 98.29 | 48.9% | 0.697 | 8.66 | 11.35 | 0.5 | 0.909 | -9.89 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: EMA 200 → 3 | 91.36 | 40.1% | 0.306 | 13.03 | 7.01 | 0.257 | 0.348 | -9.39 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Break mây Ichimoku → 3 | 118.77 | 41.8% | 0.365 | 12.85 | 9.24 | 0.296 | 0.424 | -6.31 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cộng thêm ngưỡng điểm khung 4H → 2 + Xác nhận khung nhỏ (A2) → W | 81.59 | 37.8% | 0.343 | 17.06 | 4.78 | 0.305 | 0.374 | -3.21 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Số TP tối đa → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 114.72 | 52.4% | 0.791 | 8.13 | 14.11 | 0.597 | 1.012 | -8.9 |  |

### Vòng 964 — ngẫu nhiên nhiều thông số · mốc: tổng 114.08R, win 52.8%, rủi ro tụt vốn 7.86R, lời÷rủi ro 14.51

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: POC volume profile cố định → 0.813 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 99.61 | 51.4% | 0.682 | 8.85 | 11.26 | 0.601 | 0.771 | -5.78 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 96.78 | 48% | 0.637 | 9.86 | 9.82 | 0.377 | 0.925 | -6.39 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: MACD cắt lên Signal → 0.438 + Xác nhận khung nhỏ (A2) → W | 61.04 | 36.3% | 0.224 | 20.85 | 2.93 | 0.232 | 0.216 | -5.07 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 102.23 | 50.3% | 0.677 | 9.24 | 11.06 | 0.506 | 0.875 | -5.5 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 111.16 | 52.3% | 0.736 | 8.19 | 13.57 | 0.572 | 0.917 | -8.42 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cổng Dow → CHẶT | 79.94 | 52.3% | 0.72 | 7.55 | 10.59 | 0.265 | 1.107 | -10.17 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + R:R tối thiểu tới TP1 → 2.63 | 94.69 | 51.3% | 0.796 | 8.17 | 11.59 | 0.55 | 1.055 | -8.78 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + R:R tối thiểu tới TP1 → 2.38 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: HVN cố định → 0.438 | 55.65 | 41.2% | 0.425 | 11.88 | 4.68 | 0.41 | 0.441 | -8.34 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Biên mây Ichimoku → 1.05 | 107 | 51.2% | 0.66 | 8.98 | 11.92 | 0.553 | 0.782 | -8.91 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + R:R tối thiểu tới TP1 → 2.63 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Mức RSI 30/70 → 1.13 | 95.07 | 50.8% | 0.792 | 8 | 11.88 | 0.465 | 1.131 | -7.99 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Số TP tối đa → 2 + Trọng số phần Elliott (/100) → 10 | 81.79 | 49.1% | 0.705 | 8.56 | 9.55 | 0.516 | 0.922 | -14.55 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Mức MACD → 1.13 | 107.97 | 49.7% | 0.745 | 8.42 | 12.82 | 0.541 | 0.975 | -8.08 |  |

### Vòng 963 — ngẫu nhiên nhiều thông số · mốc: tổng 115.19R, win 53.6%, rủi ro tụt vốn 7.54R, lời÷rủi ro 15.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 83.79 | 47.7% | 0.635 | 8.86 | 9.46 | 0.526 | 0.762 | -6.55 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 112.19 | 52.4% | 0.785 | 7.54 | 14.88 | 0.593 | 1.008 | -6.81 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 30.61 | 59.5% | 0.207 | 5.44 | 5.63 | 0.242 | 0.174 | -7.78 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 110.1 | 49.7% | 0.72 | 8.66 | 12.71 | 0.609 | 0.832 | -7.45 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: HVN cố định → 0.438 + Điểm vùng: EMA 21 → 1.13 + R:R tối thiểu riêng khung 4H → 2 | 109.82 | 41% | 0.354 | 12.67 | 8.67 | 0.326 | 0.379 | -6.9 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Break mây Ichimoku → 3 | 102.23 | 49% | 0.695 | 8.83 | 11.58 | 0.504 | 0.907 | -5.3 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + R:R tối thiểu tới TP1 → 2.38 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 90.69 | 48% | 0.597 | 8.72 | 10.4 | 0.496 | 0.694 | -7.31 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: BOS → 3 | 66.62 | 47.3% | 0.509 | 9.27 | 7.19 | 0.524 | 0.494 | -14.39 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Fib sóng 4 → 0.938 + Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 106.2 | 51.4% | 0.77 | 7.97 | 13.32 | 0.611 | 0.947 | -6.81 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Mức MACD → 0.875 | 106.92 | 51.4% | 0.753 | 8.18 | 13.07 | 0.556 | 0.973 | -4.5 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN anchored → 0.188 | 123.36 | 42.5% | 0.403 | 12.17 | 10.14 | 0.346 | 0.451 | -4.56 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần Momentum (/100) → 21 + Đệm SL riêng khung 4H (ATR) → 0.3 + % chốt ở TP1 → 0.287 | 148.6 | 38.7% | 0.533 | 18.35 | 8.1 | 0.35 | 0.719 | -11.51 |  |

### Vòng 962 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.98R, lời÷rủi ro 14.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: EMA 50 → 0.75 | 106.97 | 51.4% | 0.733 | 8.06 | 13.27 | 0.505 | 0.98 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + R:R tối thiểu tới TP1 → 2.63 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Trọng số phần Divergence (/100) → 9 | 97.65 | 50.8% | 0.787 | 8.11 | 12.04 | 0.516 | 1.068 | -9.6 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Mức RSI 30/70 → 0.875 + Coin phải mạnh hơn BTC trong N ngày → 14 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 81.12 | 48.5% | 0.615 | 9.6 | 8.45 | 0.422 | 0.846 | -14.05 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + R:R tối thiểu tới TP1 → 2.63 | 78.23 | 44.7% | 0.593 | 10.71 | 7.3 | 0.397 | 0.794 | -9.09 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Divergence (/100) → 9 | 71.71 | 45.9% | 0.658 | 8.73 | 8.21 | 0.422 | 0.916 | -4.43 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + R:R tối thiểu riêng khung 1D → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 57.49 | 38.3% | 0.432 | 12.43 | 4.63 | 0.293 | 0.554 | -4.77 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: POC anchored → 2 | 102.6 | 46.2% | 0.607 | 10.89 | 9.42 | 0.586 | 0.626 | -4.3 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 + Cổng Dow → CHẶT | 73.44 | 51.3% | 0.628 | 7.76 | 9.46 | 0.254 | 0.948 | -10.99 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm tối thiểu của vùng đặt SL → 2 | 108.27 | 52% | 0.732 | 8.51 | 12.72 | 0.592 | 0.883 | -8.9 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: BOS → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 95.5 | 49.7% | 0.668 | 8.17 | 11.69 | 0.484 | 0.849 | -11.52 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Cộng thêm ngưỡng điểm khung 1W → 2 | 112.31 | 51.4% | 0.769 | 8.07 | 13.92 | 0.598 | 0.956 | -8.9 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + R:R tối thiểu riêng khung 1D → 2 | 107.83 | 40.9% | 0.386 | 12.93 | 8.34 | 0.538 | 0.243 | -11.5 |  |

### Vòng 961 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.13R, lời÷rủi ro 14.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Đệm SL riêng khung 1D (ATR) → 0.3 | 109.71 | 47.2% | 0.673 | 10.22 | 10.73 | 0.634 | 0.707 | -4.8 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Coin phải mạnh hơn BTC trong N ngày → 14 + R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Divergence (/100) → 9 | 72.32 | 47.5% | 0.716 | 8.72 | 8.29 | 0.457 | 0.97 | -11.96 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: POC anchored → 4 + Điểm vùng: BOS → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 | 71.34 | 45.9% | 0.643 | 9.43 | 7.57 | 0.372 | 0.918 | 1.51 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: EMA 21 → 1.13 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 106.09 | 48.1% | 0.68 | 8.7 | 12.19 | 0.521 | 0.856 | -10.27 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Cổng Dow → CHẶT + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 68.32 | 51.4% | 0.616 | 8.11 | 8.42 | 0.299 | 0.895 | -10.21 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Trọng số phần Trend (/100) → 19 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm tối thiểu của vùng đặt SL → 4 | 113.1 | 50.3% | 0.769 | 7.88 | 14.35 | 0.623 | 0.935 | -10.74 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: EMA 21 → 1.13 + Trọng số phần R:R (/100) → 28 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 107.84 | 50.7% | 0.739 | 7.87 | 13.7 | 0.59 | 0.905 | -9.24 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 23.97 | 57.4% | 0.176 | 5.2 | 4.61 | 0.239 | 0.121 | -6.91 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 106.06 | 48.1% | 0.655 | 9.49 | 11.18 | 0.551 | 0.764 | -7.35 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Divergence (/100) → 9 + Số TP tối đa → 2 | 107.8 | 48.8% | 0.665 | 9.41 | 11.46 | 0.552 | 0.79 | -7.35 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: EMA 50 → 0.75 + Trọng số phần R:R (/100) → 28 | 101.96 | 49% | 0.703 | 8.18 | 12.46 | 0.493 | 0.922 | -9.89 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Ngưỡng điểm vào kèo → 77 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Đệm SL riêng khung 4H (ATR) → 0.3 | 23.6 | 49.4% | 0.098 | 14.44 | 1.63 | 0.061 | 0.128 | -15.82 |  |

### Vòng 960 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.02R, lời÷rủi ro 14.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + % chốt ở TP1 → 0.307 + Trọng số phần R:R (/100) → 28 | 112.49 | 51.7% | 0.787 | 8.1 | 13.89 | 0.608 | 0.983 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trọng số phần Divergence (/100) → 9 | 109.62 | 50.7% | 0.731 | 8.45 | 12.97 | 0.532 | 0.958 | -7.88 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: HVN cố định → 0.563 | 112.23 | 51.4% | 0.779 | 7.81 | 14.37 | 0.596 | 0.984 | -8.9 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 34.16 | 58.4% | 0.212 | 5.77 | 5.92 | 0.264 | 0.165 | -8 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 1D (ATR) → 0.3 | 112.42 | 47% | 0.669 | 10.55 | 10.66 | 0.628 | 0.707 | -4.3 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Cộng thêm ngưỡng điểm khung 4H → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 150.78 | 38.7% | 0.525 | 18.06 | 8.35 | 0.406 | 0.648 | -17.98 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần Entry (/100) → 28 | 105.31 | 50.7% | 0.721 | 8.15 | 12.92 | 0.598 | 0.855 | -12.99 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: BOS → 1 + Trọng số phần SL (/100) → 9 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 110.74 | 48.4% | 0.714 | 8.84 | 12.53 | 0.544 | 0.906 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Entry (/100) → 33 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: MACD cắt lên Signal → 0.438 | 85.66 | 47.1% | 0.56 | 10.35 | 8.28 | 0.462 | 0.667 | -6.12 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Trend (/100) → 12 + Điểm tối thiểu của vùng đặt SL → 2 | 106.53 | 51% | 0.725 | 8.22 | 12.96 | 0.597 | 0.861 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Số TP tối đa → 2 + Khung lớn phải tăng (trend ≥) → 0.425 | 112.48 | 52.1% | 0.803 | 7.57 | 14.86 | 0.561 | 1.083 | -8.93 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Điểm vùng: EMA 200 → 3 | 102.28 | 48% | 0.691 | 8.77 | 11.66 | 0.517 | 0.861 | -9.96 |  |

### Vòng 959 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.93R, lời÷rủi ro 14.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: POC anchored → 2 + R:R tối thiểu tới TP1 → 2.63 | 41.6 | 43.3% | 0.31 | 12.94 | 3.21 | 0.241 | 0.367 | -17.23 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Xác nhận khung nhỏ (A2) → W + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 87.48 | 36.8% | 0.354 | 17.92 | 4.88 | 0.326 | 0.381 | -7.87 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Cổng Dow → CHẶT + Cộng điểm phân kỳ dương ẩn → 3 | 81.52 | 52.2% | 0.721 | 7.29 | 11.18 | 0.299 | 1.082 | -10.99 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 113.23 | 49.1% | 0.712 | 8.97 | 12.62 | 0.538 | 0.917 | -9.93 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + R:R tối thiểu riêng khung 1D → 2 | 102.94 | 44.8% | 0.592 | 9.59 | 10.73 | 0.57 | 0.612 | -7.16 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Biên mây Ichimoku → 1.05 | 91.75 | 49% | 0.616 | 9.09 | 10.09 | 0.504 | 0.736 | -8.32 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Điểm vùng: Vùng RSI 45–55 → 1.13 + % chốt ở TP1 → 0.287 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 105.87 | 50.3% | 0.701 | 8.49 | 12.47 | 0.549 | 0.855 | -3.97 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Lệnh chờ hết hạn sau (nến) → 8 + Cộng thêm ngưỡng điểm khung 1W → 2 | 95.19 | 47.8% | 0.606 | 9.29 | 10.25 | 0.576 | 0.64 | -13.76 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Fib sóng 4 → 1.56 | 116.54 | 49.1% | 0.715 | 9.03 | 12.91 | 0.586 | 0.863 | -7.61 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 30.21 | 58.3% | 0.194 | 5.54 | 5.45 | 0.223 | 0.167 | -9.28 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: MACD cắt lên Signal → 0.563 | 86.88 | 46.8% | 0.625 | 9 | 9.65 | 0.388 | 0.887 | -10.48 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Đệm SL riêng khung 4H (ATR) → 0.3 | 78.9 | 32.9% | 0.265 | 25.59 | 3.08 | 0.216 | 0.303 | -18.59 |  |

### Vòng 958 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.04R, lời÷rủi ro 14.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1D → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 122.35 | 41.4% | 0.367 | 12.45 | 9.83 | 0.389 | 0.35 | -7.66 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: HVN anchored → 0.188 | 109.76 | 52.3% | 0.737 | 8.16 | 13.45 | 0.554 | 0.949 | -8.9 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 72.75 | 46.5% | 0.564 | 9.36 | 7.77 | 0.418 | 0.721 | -10.31 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Trọng số phần Elliott (/100) → 6 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: EMA 50 → 0.75 | 102.97 | 49.7% | 0.691 | 8.45 | 12.19 | 0.519 | 0.881 | -10.26 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 1 + Lệnh chờ hết hạn sau (nến) → 6 | 95.85 | 44.7% | 0.603 | 11.43 | 8.39 | 0.663 | 0.546 | -2.63 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: POC anchored → 4 + Trọng số phần Divergence (/100) → 12 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 90.6 | 52% | 0.725 | 7.57 | 11.97 | 0.476 | 0.927 | -7.66 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 101 | 51.4% | 0.692 | 8.51 | 11.87 | 0.596 | 0.798 | -8.12 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + SL tối đa (% Entry) → 0.425 + Cộng điểm phân kỳ dương ẩn → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 97.28 | 39.9% | 0.363 | 15.97 | 6.09 | 0.493 | 0.225 | -9.55 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần Entry (/100) → 33 + R:R tối thiểu riêng khung 1D → 2 | 95.05 | 45.6% | 0.556 | 9.75 | 9.75 | 0.617 | 0.501 | -6.94 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cổng Dow → TẮT | 24.17 | 51.8% | 0.125 | 8.78 | 2.75 | 0.202 | 0.046 | -14.24 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 27.47 | 58% | 0.175 | 6 | 4.58 | 0.186 | 0.165 | -9.27 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Số TP tối đa → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 124.28 | 44.8% | 0.562 | 11.06 | 11.24 | 0.589 | 0.534 | -8.92 |  |

### Vòng 957 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.35R, lời÷rủi ro 13.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 101.54 | 49% | 0.7 | 8.75 | 11.6 | 0.522 | 0.908 | -9.48 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + % chốt ở TP1 → 0.287 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 71.56 | 46.3% | 0.663 | 9.29 | 7.7 | 0.411 | 0.944 | -5.74 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Đệm SL riêng khung 1W (ATR) → 0.3 | 104 | 43.8% | 0.642 | 10.57 | 9.84 | 0.518 | 0.757 | -12.88 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Số TP tối đa → 2 | 111.48 | 48.7% | 0.743 | 8.8 | 12.67 | 0.602 | 0.889 | -7.95 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu tới TP1 → 2.38 + Lệnh chờ hết hạn sau (nến) → 6 | 70.77 | 43.8% | 0.491 | 9.83 | 7.2 | 0.386 | 0.597 | -9.44 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm tối thiểu của vùng đặt SL → 4 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.3 | 55.3% | 0.156 | 6.61 | 4.43 | 0.17 | 0.143 | -7.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 102.13 | 45.2% | 0.659 | 10.91 | 9.36 | 0.619 | 0.692 | -7.52 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + SL tối đa (% Entry) → 0.425 + Coin phải mạnh hơn BTC trong N ngày → 14 | 84.07 | 48% | 0.662 | 8.94 | 9.4 | 0.518 | 0.839 | -16.96 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: POC anchored → 2 + R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Entry (/100) → 28 | 86.31 | 44.8% | 0.529 | 9.92 | 8.7 | 0.431 | 0.62 | -9.18 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần R:R (/100) → 28 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 69.62 | 48.3% | 0.58 | 9.64 | 7.22 | 0.513 | 0.646 | -11.79 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 85.17 | 47.1% | 0.704 | 8.67 | 9.82 | 0.523 | 0.928 | -15.36 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 87.24 | 49.6% | 0.746 | 8.18 | 10.67 | 0.56 | 0.969 | -15.36 |  |
