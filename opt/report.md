# Tối ưu tự động (chạy liên tục) — vòng 952

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 11079 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 46.4% | 95.04R | 0.573 | 6.44R | 10.22R | 9.30 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 145 | 52.4% | 113.95R | 0.786 | 5.09R | 8.04R | 14.17 | 27 | 18.5% | -8.9R | -0.33 | 10.54R |

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

### Vòng 952 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.04R, lời÷rủi ro 14.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 112.05 | 52.3% | 0.742 | 7.73 | 14.5 | 0.563 | 0.944 | -9.24 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + % chốt ở TP1 → 0.307 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Đệm SL riêng khung 1D (ATR) → 0.3 | 101.73 | 46.2% | 0.595 | 11.52 | 8.83 | 0.628 | 0.565 | -3.47 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: EMA 200 → 1 + SL tối đa (% Entry) → 0.425 | 92.74 | 39.1% | 0.342 | 16.76 | 5.53 | 0.361 | 0.323 | -4.03 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: POC volume profile cố định → 0.688 | 110.9 | 51% | 0.765 | 8.16 | 13.59 | 0.494 | 1.054 | -8.77 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trọng số phần SL (/100) → 9 + Điểm vùng: Mức MACD → 1.13 | 94.73 | 49.7% | 0.644 | 8.84 | 10.72 | 0.552 | 0.752 | -8.7 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Số TP tối đa → 2 + Cộng thêm ngưỡng điểm khung 1W → -1 | 114.72 | 52.4% | 0.791 | 8.04 | 14.27 | 0.597 | 1.012 | -8.9 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Trọng số phần Entry (/100) → 33 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 104.45 | 50.7% | 0.715 | 8.15 | 12.82 | 0.614 | 0.814 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Biên mây Ichimoku → 1.35 | 106.55 | 51% | 0.706 | 8.35 | 12.76 | 0.607 | 0.798 | -8.55 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cộng thêm ngưỡng điểm khung 4H → 2 | 113.69 | 44.2% | 0.503 | 11.97 | 9.5 | 0.529 | 0.474 | -10.22 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 75.24 | 45.9% | 0.557 | 9.71 | 7.75 | 0.453 | 0.673 | -10.78 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Trọng số phần Trend (/100) → 19 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 97.42 | 44.1% | 0.544 | 12.91 | 7.55 | 0.531 | 0.557 | -2.4 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: HVN cố định → 0.563 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + % chốt ở TP1 → 0.287 | 113.13 | 51.7% | 0.791 | 7.55 | 14.98 | 0.614 | 0.986 | -8.88 |  |

### Vòng 951 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.9R, lời÷rủi ro 14.42

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + % chốt ở TP1 → 0.287 + SL tối đa (% Entry) → 0.425 | 29.12 | 58% | 0.186 | 5.89 | 4.94 | 0.222 | 0.153 | -9.27 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Cộng thêm ngưỡng điểm khung 1D → 5 + Trọng số phần Entry (/100) → 33 | 101.71 | 50.3% | 0.701 | 8.35 | 12.18 | 0.549 | 0.864 | -9.73 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Cộng điểm phân kỳ dương ẩn → 2.25 + Điểm vùng: EMA 50 → 1.13 + % chốt ở TP1 → 0.287 | 110.62 | 50.7% | 0.768 | 8.12 | 13.62 | 0.568 | 0.999 | -7.86 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: EMA 50 → 0.75 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 101.54 | 46.5% | 0.59 | 10.89 | 9.32 | 0.606 | 0.576 | -3.08 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + R:R tối thiểu tới TP1 → 2.63 | 98.1 | 51.2% | 0.798 | 8.13 | 12.07 | 0.516 | 1.093 | -9.6 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 + Xác nhận khung nhỏ (A2) → W + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 93.74 | 38.4% | 0.368 | 16.4 | 5.72 | 0.353 | 0.381 | -0.56 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Lệnh chờ hết hạn sau (nến) → 8 + Ngưỡng điểm vào kèo → 74 | 109.92 | 40.4% | 0.383 | 16.43 | 6.69 | 0.377 | 0.388 | -2.19 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Số TP tối đa → 2 + Điểm vùng: HVN anchored → 0.313 | 77.25 | 45.6% | 0.483 | 10.45 | 7.39 | 0.403 | 0.555 | -8.8 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Đệm SL riêng khung 1D (ATR) → 0.3 | 109.46 | 46.2% | 0.648 | 11.12 | 9.84 | 0.634 | 0.66 | -3.28 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Cổng Dow → CHẶT | 75.37 | 51.4% | 0.679 | 7.5 | 10.05 | 0.231 | 1.046 | -9.7 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 108.38 | 51.4% | 0.742 | 8.15 | 13.3 | 0.553 | 0.953 | -9.87 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + SL tối đa (% Entry) → 0.425 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Trọng số phần Divergence (/100) → 9 | 107.35 | 50.7% | 0.716 | 8.28 | 12.96 | 0.538 | 0.913 | -8.9 |  |

### Vòng 950 — ngẫu nhiên nhiều thông số · mốc: tổng 114.69R, win 53.1%, rủi ro tụt vốn 7.63R, lời÷rủi ro 15.03

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: POC anchored → 4 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 | 105.16 | 51.4% | 0.762 | 8.03 | 13.1 | 0.65 | 0.888 | -2.34 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần Elliott (/100) → 10 | 93.76 | 38.1% | 0.38 | 16.16 | 5.8 | 0.343 | 0.412 | -3.78 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + % chốt ở TP1 → 0.307 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Momentum (/100) → 21 | 113.82 | 51.4% | 0.769 | 8.03 | 14.17 | 0.552 | 0.999 | -6.79 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 82.26 | 47.2% | 0.579 | 9.32 | 8.83 | 0.378 | 0.78 | -11.39 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Biên mây Ichimoku → 1.05 + Đệm SL riêng khung 1D (ATR) → 0.3 | 93.93 | 44.6% | 0.531 | 12.87 | 7.3 | 0.541 | 0.522 | -2.29 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Cộng thêm ngưỡng điểm khung 1D → 3 + Số TP tối đa → 2 + Điểm vùng: EMA 200 → 3 | 103.59 | 50% | 0.719 | 8.42 | 12.3 | 0.493 | 0.959 | -9.93 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 71.23 | 39.1% | 0.317 | 14.19 | 5.02 | 0.251 | 0.382 | -4.42 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Mức MACD → 0.875 | 127.09 | 45.6% | 0.562 | 11 | 11.55 | 0.605 | 0.517 | -12.81 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 114.24 | 41.9% | 0.371 | 11.84 | 9.65 | 0.313 | 0.42 | -7.43 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Fib sóng 4 → 0.938 | 110.55 | 42.9% | 0.373 | 13.1 | 8.44 | 0.326 | 0.415 | -7.91 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + R:R tối thiểu riêng khung 4H → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 | 71.76 | 39.5% | 0.275 | 15.38 | 4.67 | 0.237 | 0.309 | -8.46 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cộng thêm ngưỡng điểm khung 1W → 2 | 120.89 | 44.7% | 0.53 | 11.47 | 10.54 | 0.549 | 0.511 | -10.72 |  |

### Vòng 949 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.04R, lời÷rủi ro 14.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Đệm SL riêng khung 1D (ATR) → 0.3 + Cổng Dow → CHẶT + Điểm vùng: Biên mây Ichimoku → 1.05 | 73.07 | 48.1% | 0.566 | 9.66 | 7.56 | 0.315 | 0.726 | -4.73 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Số TP tối đa → 2 | 114.72 | 52.4% | 0.791 | 8.04 | 14.27 | 0.597 | 1.012 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: Mức MACD → 0.875 + R:R tối thiểu riêng khung 1W → 2 | 104.29 | 51.4% | 0.705 | 8.11 | 12.86 | 0.598 | 0.811 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Lệnh chờ hết hạn sau (nến) → 6 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 126.03 | 45.4% | 0.583 | 10.9 | 11.56 | 0.504 | 0.674 | -8.25 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: HVN cố định → 0.563 + Cổng Dow → CHẶT | 55.37 | 50.6% | 0.684 | 7.56 | 7.32 | 0.196 | 1.136 | -5.85 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Biên mây Ichimoku → 1.05 | 101.68 | 51% | 0.701 | 8.25 | 12.32 | 0.55 | 0.859 | -9.73 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: EMA 50 → 0.75 + R:R tối thiểu riêng khung 1W → 2 | 103.52 | 51.4% | 0.709 | 8.4 | 12.32 | 0.582 | 0.83 | -9.93 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trọng số phần Divergence (/100) → 9 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 73.14 | 47.3% | 0.567 | 9.08 | 8.06 | 0.422 | 0.728 | -13.11 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 113.5 | 52.1% | 0.777 | 8 | 14.19 | 0.592 | 0.985 | -8.9 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 94.08 | 51% | 0.623 | 9 | 10.45 | 0.528 | 0.724 | -9.73 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Cổng Dow → TẮT + Điểm vùng: POC anchored → 4 | 128.69 | 43.6% | 0.61 | 12.02 | 10.71 | 0.534 | 0.682 | -13.71 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Đệm SL riêng khung 1D (ATR) → 0.3 | 58.03 | 39.8% | 0.492 | 12.35 | 4.7 | 0.271 | 0.672 | -3.7 |  |

### Vòng 948 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.02R, lời÷rủi ro 14.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 103.92 | 49.7% | 0.688 | 8.91 | 11.66 | 0.497 | 0.909 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + SL tối đa (% Entry) → 0.425 | 108.46 | 51.4% | 0.743 | 8.28 | 13.1 | 0.534 | 0.97 | -8.9 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Xác nhận khung nhỏ (A2) → W + R:R tối thiểu tới TP1 → 2.38 | 61.97 | 37.6% | 0.271 | 18.81 | 3.29 | 0.157 | 0.376 | -7.59 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + R:R tối thiểu riêng khung 4H → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 85.18 | 37.7% | 0.268 | 16.09 | 5.29 | 0.301 | 0.238 | -14.73 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 77 | 33.1% | 0.226 | 25.93 | 2.97 | 0.206 | 0.24 | -22.77 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Divergence (/100) → 9 + R:R tối thiểu riêng khung 1D → 2 | 102.94 | 44.8% | 0.592 | 9.5 | 10.84 | 0.57 | 0.612 | -7.16 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 120.66 | 49.7% | 0.799 | 8.5 | 14.2 | 0.723 | 0.89 | -9.52 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: Mức sai Elliott (cho SL) → 1 + R:R tối thiểu tới TP1 → 2.38 | 67.29 | 37.7% | 0.272 | 18.84 | 3.57 | 0.193 | 0.346 | -7.83 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Cộng thêm ngưỡng điểm khung 1W → -1 | 29.2 | 58% | 0.186 | 5.97 | 4.89 | 0.206 | 0.167 | -9.28 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 112.09 | 52.1% | 0.801 | 7.58 | 14.79 | 0.561 | 1.077 | -8.41 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: POC volume profile cố định → 0.688 | 114.72 | 52.4% | 0.791 | 8.02 | 14.3 | 0.597 | 1.012 | -8.9 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Trọng số phần Elliott (/100) → 6 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 101.65 | 49.7% | 0.664 | 9.36 | 10.86 | 0.498 | 0.856 | -6.32 |  |

### Vòng 947 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8R, lời÷rủi ro 14.24

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + % chốt ở TP1 → 0.307 + Điểm vùng: Break mây Ichimoku → 1 | 91.87 | 48% | 0.621 | 9.21 | 9.98 | 0.564 | 0.682 | -7.36 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Trọng số phần SL (/100) → 7 | 101.54 | 49% | 0.691 | 8.69 | 11.68 | 0.468 | 0.93 | -9.89 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 123.37 | 45.8% | 0.548 | 10.64 | 11.59 | 0.583 | 0.512 | -9.38 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 79.94 | 47.5% | 0.506 | 10.45 | 7.65 | 0.47 | 0.543 | -7.51 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: HVN anchored → 0.313 + Cộng thêm ngưỡng điểm khung 1W → 2 | 114.67 | 41.2% | 0.372 | 12.58 | 9.12 | 0.308 | 0.428 | -8.46 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 36.25 | 40% | 0.403 | 10.65 | 3.4 | 0.342 | 0.475 | -7.55 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 101.47 | 50.3% | 0.681 | 8.09 | 12.54 | 0.578 | 0.777 | -9.93 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Break mây Ichimoku → 1 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Entry (/100) → 33 | 100.45 | 48.3% | 0.683 | 9.02 | 11.14 | 0.508 | 0.871 | -10.01 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Điểm vùng: BOS → 1 | 112.93 | 52.1% | 0.774 | 8.06 | 14.01 | 0.591 | 0.977 | -9.01 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần Divergence (/100) → 12 + Trọng số phần Trend (/100) → 12 | 100.49 | 48.3% | 0.684 | 8.66 | 11.6 | 0.514 | 0.865 | -8.97 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 104.66 | 45.7% | 0.598 | 9.29 | 11.27 | 0.566 | 0.628 | -7.16 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Entry (/100) → 33 + Đệm SL riêng khung 1W (ATR) → 0.3 | 104.37 | 47.5% | 0.74 | 8.87 | 11.77 | 0.54 | 0.927 | -9.67 |  |

### Vòng 946 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.97R, lời÷rủi ro 14.30

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cổng Dow → TẮT + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: BOS → 3 | 88.67 | 38.5% | 0.551 | 12.97 | 6.84 | 0.401 | 0.702 | -17.27 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Đệm SL riêng khung 1D (ATR) → 0.3 + % chốt ở TP1 → 0.307 + Trọng số phần Momentum (/100) → 25 | 107.27 | 46% | 0.658 | 10.66 | 10.06 | 0.665 | 0.652 | -4.6 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Break mây Ichimoku → 1 | 96.52 | 48% | 0.635 | 9.25 | 10.43 | 0.457 | 0.838 | -8.97 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Lệnh chờ hết hạn sau (nến) → 8 + Cổng Dow → CHẶT + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 82.43 | 51.2% | 0.659 | 7.68 | 10.73 | 0.331 | 0.953 | -11.27 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần Elliott (/100) → 6 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 95.56 | 50.3% | 0.65 | 8.85 | 10.8 | 0.579 | 0.728 | -8.7 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Số TP tối đa → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 + Cộng thêm ngưỡng điểm khung 1W → -1 | 118.22 | 51.9% | 0.739 | 8.42 | 14.04 | 0.568 | 0.942 | -8.91 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: HVN cố định → 0.438 + Đệm SL riêng khung 1D (ATR) → 0.3 | 110.51 | 45.8% | 0.658 | 10.47 | 10.55 | 0.612 | 0.7 | -3.97 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 58.17 | 45.7% | 0.421 | 10 | 5.82 | 0.323 | 0.495 | -13.93 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Break mây Ichimoku → 1 + Cộng thêm ngưỡng điểm khung 4H → 2 | 107.84 | 45.2% | 0.642 | 10.76 | 10.02 | 0.648 | 0.636 | -3.11 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Mức MACD → 1.13 | 86.64 | 48.7% | 0.728 | 8.32 | 10.41 | 0.567 | 0.916 | -15.36 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Đệm SL riêng khung 4H (ATR) → 0.3 + Xác nhận khung nhỏ (A2) → W + Điểm tối thiểu của vùng đặt SL → 2 | 92.5 | 30.7% | 0.212 | 32.47 | 2.85 | 0.201 | 0.222 | -37.4 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Break mây Ichimoku → 1 | 102.21 | 49.3% | 0.691 | 8.95 | 11.42 | 0.511 | 0.886 | -8.97 |  |

### Vòng 945 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.04R, lời÷rủi ro 14.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Đệm SL riêng khung 4H (ATR) → 0.3 | 153.57 | 38.2% | 0.505 | 19.89 | 7.72 | 0.385 | 0.618 | -10.14 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần R:R (/100) → 33 + Điểm vùng: POC volume profile cố định → 0.813 | 112.75 | 51.7% | 0.767 | 8.11 | 13.9 | 0.592 | 0.96 | -6.56 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: BOS → 3 | 112.23 | 51.4% | 0.779 | 7.82 | 14.35 | 0.596 | 0.984 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 + R:R tối thiểu riêng khung 4H → 2 | 27.87 | 48.6% | 0.086 | 8.72 | 3.2 | 0.1 | 0.075 | -12.44 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 147.82 | 38.8% | 0.517 | 18.56 | 7.96 | 0.349 | 0.685 | -11.64 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Cộng thêm ngưỡng điểm khung 1W → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Mức RSI 30/70 → 1.13 | 103.19 | 41.6% | 0.402 | 12.49 | 8.26 | 0.532 | 0.27 | -12.6 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.287 + Điểm vùng: EMA 50 → 0.75 | 109.33 | 51.7% | 0.754 | 8.06 | 13.56 | 0.531 | 1 | -8.88 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Điểm vùng: Mức RSI 30/70 → 0.875 | 114.51 | 50.3% | 0.72 | 8.85 | 12.94 | 0.549 | 0.927 | -7.88 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Trọng số phần R:R (/100) → 28 + Điểm vùng: Biên mây Ichimoku → 1.35 | 109.72 | 50.7% | 0.741 | 8.48 | 12.94 | 0.549 | 0.956 | -7.88 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Fib sóng 4 → 1.56 | 74.61 | 46.7% | 0.553 | 10.08 | 7.4 | 0.405 | 0.722 | -10.72 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: POC anchored → 4 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: EMA 200 → 1 | 106.83 | 48% | 0.625 | 10.04 | 10.64 | 0.478 | 0.8 | -7.58 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 117.77 | 48.4% | 0.75 | 8.99 | 13.1 | 0.654 | 0.858 | -9.31 |  |

### Vòng 944 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.05R, lời÷rủi ro 14.16

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Cổng Dow → CHẶT + Trọng số phần Momentum (/100) → 21 | 78.3 | 51.3% | 0.693 | 7.26 | 10.79 | 0.244 | 1.089 | -10.81 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Coin phải mạnh hơn BTC trong N ngày → 14 | 64.59 | 42.4% | 0.547 | 10.45 | 6.18 | 0.365 | 0.757 | -13.57 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Trọng số phần Elliott (/100) → 10 + Trọng số phần Momentum (/100) → 25 | 118.11 | 49% | 0.762 | 8.52 | 13.86 | 0.727 | 0.803 | -9.48 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần Momentum (/100) → 21 | 124.59 | 45% | 0.544 | 11.24 | 11.08 | 0.575 | 0.511 | -10.68 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Elliott (/100) → 6 + Cộng thêm ngưỡng điểm khung 4H → 2 | 30.38 | 58.3% | 0.195 | 5.53 | 5.49 | 0.22 | 0.172 | -9.27 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 94.5 | 43.4% | 0.594 | 11.77 | 8.03 | 0.477 | 0.689 | -4.33 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + R:R tối thiểu tới TP1 → 2.63 | 51.93 | 41.1% | 0.464 | 12.96 | 4.01 | 0.242 | 0.693 | -5.29 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: HVN anchored → 0.313 | 27.5 | 39.1% | 0.316 | 11.27 | 2.44 | 0.323 | 0.306 | -7.19 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Cộng thêm ngưỡng điểm khung 4H → 2 + Khung lớn phải tăng (trend ≥) → 0.425 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 92.57 | 48.5% | 0.681 | 8.68 | 10.66 | 0.426 | 0.967 | -10.52 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 58.29 | 40.7% | 0.494 | 12.65 | 4.61 | 0.246 | 0.711 | -2.79 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Ngưỡng điểm vào kèo → 77 + Trọng số phần Entry (/100) → 33 | 112.61 | 51% | 0.787 | 7.74 | 14.55 | 0.624 | 0.963 | -8.9 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Momentum (/100) → 25 | 16.64 | 56.7% | 0.131 | 6.78 | 2.45 | 0.154 | 0.11 | -9.54 |  |

### Vòng 943 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.02R, lời÷rủi ro 14.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Điểm vùng: Mức RSI 30/70 → 0.875 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 101.58 | 48.5% | 0.608 | 9.81 | 10.35 | 0.474 | 0.758 | -8.9 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Cộng điểm phân kỳ dương ẩn → 3 | 119.92 | 49.1% | 0.754 | 8.62 | 13.91 | 0.722 | 0.792 | -8.17 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Divergence (/100) → 9 + Đệm SL riêng khung 1D (ATR) → 0.3 | 58.21 | 40.3% | 0.489 | 12.51 | 4.65 | 0.269 | 0.672 | -3.7 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 4H → -1 + Đệm SL riêng khung 4H (ATR) → 0.3 | 146.55 | 38.7% | 0.511 | 18.1 | 8.1 | 0.338 | 0.685 | -11.48 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Số TP tối đa → 2 | 116.6 | 51.7% | 0.804 | 7.9 | 14.76 | 0.669 | 0.949 | -7.61 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 27.11 | 57.7% | 0.174 | 5.89 | 4.6 | 0.223 | 0.13 | -9.09 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm tối thiểu của vùng đặt SL → 4 + Cộng điểm phân kỳ dương ẩn → 2.25 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.61 | 57.4% | 0.191 | 5.59 | 5.3 | 0.223 | 0.163 | -8.83 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: BOS → 3 + Cổng Dow → TẮT | 24.21 | 51.8% | 0.125 | 8.76 | 2.76 | 0.202 | 0.046 | -14.62 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu riêng khung 4H → 2 | 112.41 | 40.2% | 0.343 | 13.53 | 8.31 | 0.267 | 0.409 | -8.43 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 112.25 | 49% | 0.724 | 8.72 | 12.87 | 0.553 | 0.912 | -8.62 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Mức RSI 30/70 → 0.875 | 170.89 | 38.1% | 0.513 | 19.37 | 8.82 | 0.492 | 0.531 | -9.59 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 108.68 | 49.7% | 0.749 | 8.44 | 12.88 | 0.507 | 1.003 | -7.46 |  |
