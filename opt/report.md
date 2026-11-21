# Tối ưu tự động (chạy liên tục) — vòng 1006

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 11727 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 166 | 46.4% | 95.04R | 0.573 | 6.44R | 10.17R | 9.35 | 30 | 13.3% | -11.98R | -0.399 | 11.98R |
| **Tốt nhất** | 145 | 52.4% | 113.95R | 0.786 | 5.09R | 7.98R | 14.28 | 27 | 18.5% | -8.9R | -0.33 | 10.54R |

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

### Vòng 1006 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.98R, lời÷rủi ro 14.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: EMA 21 → 0.875 + Trọng số phần R:R (/100) → 28 | 114.89 | 50.7% | 0.787 | 8.16 | 14.08 | 0.658 | 0.923 | -7.61 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + Cộng điểm phân kỳ dương ẩn → 3 | 109.67 | 51.4% | 0.741 | 8.08 | 13.57 | 0.569 | 0.933 | -9.87 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 109.22 | 49.4% | 0.666 | 9.22 | 11.85 | 0.509 | 0.843 | -8.64 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng điểm phân kỳ dương ẩn → 3 | 102.1 | 50% | 0.672 | 9.19 | 11.11 | 0.498 | 0.875 | -6.32 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: HVN cố định → 0.563 | 38.28 | 41.5% | 0.407 | 10.41 | 3.68 | 0.362 | 0.46 | -7.59 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + R:R tối thiểu tới TP1 → 2.63 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 84.8 | 47.4% | 0.731 | 8.07 | 10.51 | 0.459 | 1.022 | -7.64 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 112.21 | 52.1% | 0.779 | 7.98 | 14.06 | 0.576 | 1.006 | -8.9 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: HVN cố định → 0.438 | 108.93 | 49.7% | 0.721 | 8.44 | 12.91 | 0.512 | 0.963 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Ngưỡng điểm vào kèo → 74 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 70.62 | 45.4% | 0.654 | 9.38 | 7.53 | 0.422 | 0.913 | -5.51 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Fib sóng 4 → 1.56 | 113.96 | 51% | 0.786 | 7.86 | 14.5 | 0.606 | 0.996 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 113.95 | 52.4% | 0.786 | 7.98 | 14.28 | 0.592 | 1.006 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Biên mây Ichimoku → 1.05 + Cộng thêm ngưỡng điểm khung 1D → 5 | 99.6 | 50% | 0.701 | 8.01 | 12.43 | 0.576 | 0.834 | -8.68 |  |

### Vòng 1005 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.02R, lời÷rủi ro 14.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + R:R tối thiểu riêng khung 1W → 2 | 104.01 | 50% | 0.703 | 8.4 | 12.38 | 0.599 | 0.806 | -8.91 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + % chốt ở TP1 → 0.307 + Điểm vùng: POC anchored → 4 + Điểm vùng: HVN cố định → 0.563 | 111.2 | 50% | 0.722 | 8.8 | 12.64 | 0.545 | 0.9 | -2.97 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + % chốt ở TP1 → 0.287 | 112.12 | 51.4% | 0.779 | 7.81 | 14.36 | 0.593 | 0.986 | -8.88 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Trọng số phần Divergence (/100) → 12 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 110.26 | 48.9% | 0.793 | 8.28 | 13.32 | 0.581 | 1.049 | -8.15 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 92.21 | 46.9% | 0.645 | 9.72 | 9.49 | 0.53 | 0.755 | -10.42 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Ngưỡng điểm vào kèo → 74 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 109.07 | 50.7% | 0.727 | 8.25 | 13.22 | 0.559 | 0.914 | -9.87 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Cộng điểm phân kỳ dương ẩn → 3 | 112.75 | 51.7% | 0.767 | 8.11 | 13.9 | 0.592 | 0.96 | -7.58 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 30.2 | 58.3% | 0.194 | 5.59 | 5.4 | 0.223 | 0.167 | -9.27 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: POC anchored → 2 + R:R tối thiểu riêng khung 4H → 2 | 111.57 | 41% | 0.358 | 12.47 | 8.95 | 0.319 | 0.39 | -7.67 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + R:R tối thiểu tới TP1 → 2.63 | 91.08 | 49.1% | 0.799 | 8.33 | 10.93 | 0.723 | 0.88 | -12.56 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Trọng số phần Divergence (/100) → 9 | 109.02 | 51.4% | 0.747 | 7.97 | 13.68 | 0.534 | 0.978 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Break mây Ichimoku → 1 | 110.12 | 47.1% | 0.701 | 9.19 | 11.98 | 0.68 | 0.726 | -8.26 |  |

### Vòng 1004 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.04R, lời÷rủi ro 14.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần SL (/100) → 7 | 30.86 | 58.6% | 0.197 | 5.38 | 5.74 | 0.223 | 0.173 | -9.27 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 109.41 | 50.6% | 0.701 | 9.07 | 12.06 | 0.498 | 0.939 | -6.32 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: Mức RSI 30/70 → 1.13 | 111.03 | 51% | 0.745 | 8.18 | 13.57 | 0.592 | 0.909 | -8.9 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 72.4 | 47% | 0.63 | 9.14 | 7.92 | 0.395 | 0.895 | -14.05 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Số TP tối đa → 2 + Cộng thêm ngưỡng điểm khung 4H → 2 | 110.8 | 51.8% | 0.786 | 7.95 | 13.94 | 0.623 | 0.971 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 2 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần R:R (/100) → 33 + Xác nhận khung nhỏ (A2) → W | 80.48 | 37.6% | 0.288 | 18.96 | 4.24 | 0.311 | 0.266 | -9.57 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Mức RSI 30/70 → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: POC volume profile cố định → 0.688 | 99.24 | 49.6% | 0.704 | 8.21 | 12.09 | 0.459 | 0.99 | -11.76 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Cổng Dow → TẮT + Trọng số phần R:R (/100) → 33 + Điểm tối thiểu của vùng đặt SL → 2 | 125.72 | 44.1% | 0.596 | 11.97 | 10.5 | 0.511 | 0.682 | -22.68 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 101.07 | 46.1% | 0.562 | 9.85 | 10.26 | 0.552 | 0.57 | -7.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cộng điểm phân kỳ dương ẩn → 2.25 + Trọng số phần Momentum (/100) → 25 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 99.37 | 48.7% | 0.654 | 9.44 | 10.53 | 0.483 | 0.854 | -6.32 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Cộng điểm phân kỳ dương ẩn → 3 | 112.83 | 51.7% | 0.768 | 8.1 | 13.93 | 0.575 | 0.985 | -8.9 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + R:R tối thiểu tới TP1 → 2.63 + Coin phải mạnh hơn BTC trong N ngày → 14 | 73.58 | 48.5% | 0.743 | 8.51 | 8.65 | 0.464 | 1.028 | -13.28 |  |

### Vòng 1003 — ngẫu nhiên nhiều thông số · mốc: tổng 113.96R, win 52.4%, rủi ro tụt vốn 8.04R, lời÷rủi ro 14.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 100.2 | 47.4% | 0.659 | 9.26 | 10.82 | 0.408 | 0.946 | -11.52 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + % chốt ở TP1 → 0.307 | 113.58 | 52.1% | 0.778 | 8 | 14.2 | 0.593 | 0.984 | -8.91 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 94.34 | 49.3% | 0.646 | 9.15 | 10.31 | 0.544 | 0.757 | -8.23 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: MACD cắt lên Signal → 0.563 | 113.31 | 51.7% | 0.771 | 8.03 | 14.11 | 0.581 | 0.985 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Trọng số phần Elliott (/100) → 6 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 113.5 | 52.1% | 0.777 | 8 | 14.19 | 0.592 | 0.985 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 + Cộng điểm phân kỳ dương ẩn → 3 + R:R tối thiểu tới TP1 → 2.38 | 74.96 | 45% | 0.469 | 9.84 | 7.62 | 0.373 | 0.557 | -10.2 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Trọng số phần R:R (/100) → 33 + Điểm vùng: HVN cố định → 0.438 | 34.91 | 39.8% | 0.397 | 10.36 | 3.37 | 0.342 | 0.465 | -11.35 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 35.16 | 39.6% | 0.386 | 10.98 | 3.2 | 0.288 | 0.512 | -7.55 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: POC anchored → 2 | 95.07 | 49% | 0.63 | 8.75 | 10.87 | 0.481 | 0.78 | -8.76 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: EMA 50 → 0.75 | 109.47 | 51.7% | 0.755 | 8.05 | 13.6 | 0.534 | 0.998 | -8.9 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 | 136.65 | 37.3% | 0.463 | 20.16 | 6.78 | 0.31 | 0.62 | -13.44 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + % chốt ở TP1 → 0.287 | 99.03 | 51.6% | 0.812 | 7.91 | 12.52 | 0.513 | 1.131 | -9.58 |  |

### Vòng 1002 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.15R, lời÷rủi ro 13.70

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 106.53 | 50.3% | 0.725 | 8.36 | 12.74 | 0.545 | 0.933 | -9.24 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: BOS → 3 | 111.23 | 50.7% | 0.762 | 8.22 | 13.53 | 0.556 | 0.998 | -8.9 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Cộng thêm ngưỡng điểm khung 4H → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 95.85 | 36.7% | 0.341 | 21.05 | 4.55 | 0.425 | 0.266 | -26.73 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm vùng: Mức MACD → 0.875 | 103.23 | 45.1% | 0.59 | 9.97 | 10.35 | 0.554 | 0.625 | -6.55 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: BOS → 3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 111.2 | 43.5% | 0.483 | 11.33 | 9.81 | 0.509 | 0.457 | -9.91 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu riêng khung 1D → 2 | 122.44 | 41.2% | 0.371 | 12.4 | 9.87 | 0.389 | 0.356 | -7.2 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Điểm vùng: EMA 200 → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 101.42 | 48.6% | 0.714 | 8.48 | 11.96 | 0.5 | 0.941 | -8.88 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Trọng số phần SL (/100) → 9 + Cộng thêm ngưỡng điểm khung 4H → -1 + Số TP tối đa → 2 | 110.17 | 51.4% | 0.765 | 8.4 | 13.12 | 0.539 | 1.018 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 0.875 + Trọng số phần Divergence (/100) → 12 + Trọng số phần Elliott (/100) → 10 + Trọng số phần Trend (/100) → 12 | 116.58 | 50.3% | 0.733 | 8.68 | 13.43 | 0.553 | 0.946 | -7.61 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: EMA 21 → 0.875 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 112.42 | 49.3% | 0.749 | 8.53 | 13.18 | 0.585 | 0.937 | -8.63 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.563 + Lệnh chờ hết hạn sau (nến) → 6 | 95.07 | 49.6% | 0.715 | 8.54 | 11.13 | 0.549 | 0.911 | -8.53 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: HVN anchored → 0.188 + R:R tối thiểu tới TP1 → 2.38 + Trọng số phần Momentum (/100) → 25 | 89.86 | 42.4% | 0.522 | 10.37 | 8.67 | 0.464 | 0.582 | -11.24 |  |

### Vòng 1001 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.24R, lời÷rủi ro 13.55

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: BOS → 1 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 70.24 | 45% | 0.644 | 9.18 | 7.65 | 0.422 | 0.888 | -4.43 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: EMA 50 → 0.75 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 70.17 | 39.6% | 0.441 | 13.29 | 5.28 | 0.505 | 0.378 | -6.69 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Điểm vùng: Mức RSI 30/70 → 1.13 + Cổng Dow → CHẶT + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 80.71 | 51.4% | 0.727 | 7.31 | 11.04 | 0.275 | 1.125 | -9.67 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Cộng thêm ngưỡng điểm khung 1D → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 111.14 | 50.3% | 0.756 | 8.3 | 13.39 | 0.548 | 0.998 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Ngưỡng điểm vào kèo → 74 | 108.97 | 49% | 0.722 | 8.33 | 13.08 | 0.538 | 0.928 | -9.92 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 70.61 | 45.4% | 0.543 | 10.11 | 6.98 | 0.382 | 0.72 | -10.31 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + Đệm SL riêng khung 1W (ATR) → 0.3 | 92.04 | 45.7% | 0.667 | 9.88 | 9.32 | 0.359 | 0.957 | -9.7 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Mức RSI 30/70 → 1.13 + Cổng Dow → CHẶT + Điểm vùng: Vùng RSI 45–55 → 1.13 | 68.15 | 47.7% | 0.614 | 8.71 | 7.82 | 0.166 | 1.023 | -10.99 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 20.09 | 41.1% | 0.359 | 9.18 | 2.19 | 0.195 | 0.501 | -2.78 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + R:R tối thiểu riêng khung 1D → 2 | 102.63 | 44.6% | 0.586 | 9.74 | 10.54 | 0.554 | 0.618 | -7.16 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần Elliott (/100) → 6 + Số TP tối đa → 2 | 38.32 | 40.7% | 0.421 | 9.97 | 3.84 | 0.356 | 0.5 | -11.35 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Đệm SL riêng khung 4H (ATR) → 0.3 | 146.41 | 38.7% | 0.51 | 18.66 | 7.85 | 0.349 | 0.671 | -9.92 |  |

### Vòng 1000 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.26R, lời÷rủi ro 13.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 112.87 | 49.7% | 0.778 | 8.17 | 13.82 | 0.598 | 0.988 | -12.16 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + Cổng Dow → CHẶT + Đệm SL riêng khung 1D (ATR) → 0.3 | 74.12 | 48.8% | 0.584 | 9.15 | 8.1 | 0.36 | 0.739 | -4.69 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Lệnh chờ hết hạn sau (nến) → 6 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 92.89 | 48.5% | 0.693 | 8.58 | 10.83 | 0.55 | 0.86 | -7.22 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Trọng số phần SL (/100) → 7 + Trọng số phần Divergence (/100) → 9 | 112.74 | 50.3% | 0.747 | 8.43 | 13.37 | 0.543 | 0.959 | -2.96 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: EMA 21 → 1.13 + Xác nhận khung nhỏ (A2) → W | 88.11 | 36.7% | 0.34 | 17.41 | 5.06 | 0.325 | 0.355 | -5.92 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 111.54 | 51.7% | 0.769 | 7.79 | 14.32 | 0.57 | 1.001 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + R:R tối thiểu tới TP1 → 2.38 + Trọng số phần R:R (/100) → 33 | 90.58 | 46.5% | 0.57 | 9.26 | 9.78 | 0.437 | 0.688 | -10.01 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Kháng cự cũ bị phá → 1.69 | 108.64 | 50.7% | 0.765 | 8.23 | 13.2 | 0.534 | 1.031 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: POC anchored → 4 + Trọng số phần Elliott (/100) → 6 | 112.93 | 50.7% | 0.753 | 8.41 | 13.43 | 0.552 | 0.959 | -2.96 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Số TP tối đa → 2 | 111.8 | 50.3% | 0.761 | 8.33 | 13.42 | 0.551 | 1.004 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Lệnh chờ hết hạn sau (nến) → 6 | 88.76 | 49.3% | 0.662 | 8.92 | 9.95 | 0.549 | 0.794 | -7.76 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Trọng số phần SL (/100) → 7 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 106.97 | 49.3% | 0.713 | 8.93 | 11.98 | 0.51 | 0.951 | -9.87 |  |

### Vòng 999 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.6R, lời÷rủi ro 12.99

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Điểm vùng: POC volume profile cố định → 0.688 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: EMA 200 → 1 | 82.23 | 36.9% | 0.313 | 18.65 | 4.41 | 0.291 | 0.333 | -5.08 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm vùng: EMA 200 → 1 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 | 114.61 | 49.7% | 0.712 | 8.79 | 13.04 | 0.6 | 0.85 | -2.59 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: POC volume profile cố định → 0.688 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 | 82.64 | 45.7% | 0.651 | 9.6 | 8.61 | 0.434 | 0.916 | -16.4 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 108.16 | 50% | 0.741 | 8.25 | 13.11 | 0.464 | 1.05 | -8.77 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: MACD cắt lên Signal → 0.438 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 97.25 | 47.1% | 0.572 | 10.95 | 8.88 | 0.434 | 0.752 | -1.32 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 16.74 | 38.3% | 0.279 | 10.82 | 1.55 | 0.1 | 0.436 | -2.82 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: EMA 21 → 1.13 | 86.7 | 45.8% | 0.559 | 9.28 | 9.34 | 0.461 | 0.654 | -10.55 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: MACD cắt lên Signal → 0.438 + R:R tối thiểu tới TP1 → 2.63 + R:R tối thiểu riêng khung 4H → 2 | 88.66 | 39.1% | 0.284 | 14.78 | 6 | 0.192 | 0.369 | -5.07 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 92.45 | 38.8% | 0.246 | 15.39 | 6.01 | 0.234 | 0.255 | -14.99 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Entry (/100) → 33 | 104.38 | 48.4% | 0.648 | 9.6 | 10.87 | 0.497 | 0.818 | -8.64 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 | 98.08 | 45.5% | 0.676 | 9.92 | 9.89 | 0.424 | 0.925 | -9.7 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + R:R tối thiểu tới TP1 → 2.38 | 76.51 | 42.5% | 0.524 | 10.51 | 7.28 | 0.443 | 0.587 | -10.61 |  |

### Vòng 998 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.15R, lời÷rủi ro 13.70

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Trọng số phần SL (/100) → 9 | 108.8 | 45.2% | 0.615 | 9.66 | 11.26 | 0.513 | 0.708 | -6.94 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần Elliott (/100) → 6 | 111.54 | 50.3% | 0.78 | 8 | 13.94 | 0.602 | 0.976 | -8.9 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + SL tối đa (% Entry) → 0.425 + Điểm vùng: MACD cắt lên Signal → 0.563 | 109.88 | 51.1% | 0.779 | 8 | 13.73 | 0.545 | 1.045 | -8.93 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 20.5 | 57% | 0.136 | 6.86 | 2.99 | 0.125 | 0.145 | -9.26 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Xác nhận khung nhỏ (A2) → W | 93.05 | 38.1% | 0.369 | 16.84 | 5.53 | 0.329 | 0.406 | -2.36 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Cổng Dow → CHẶT + SL tối đa (% Entry) → 0.425 | 79.7 | 50.9% | 0.712 | 7.39 | 10.78 | 0.275 | 1.09 | -10.99 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Break mây Ichimoku → 1 | 101.09 | 49.7% | 0.669 | 8.87 | 11.4 | 0.527 | 0.807 | -7.97 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Trọng số phần Divergence (/100) → 9 | 111.03 | 50.3% | 0.755 | 8.35 | 13.3 | 0.546 | 0.998 | -8.9 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Cộng điểm phân kỳ dương ẩn → 2.25 | 110.3 | 49% | 0.75 | 8.73 | 12.63 | 0.588 | 0.915 | -7.95 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 1.13 + R:R tối thiểu riêng khung 1D → 2 | 96.71 | 43.7% | 0.556 | 9.99 | 9.68 | 0.533 | 0.578 | -10.22 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Đệm SL riêng khung 1D (ATR) → 0.3 | 105.54 | 46.2% | 0.61 | 11.02 | 9.58 | 0.582 | 0.636 | -3.51 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: EMA 50 → 0.75 | 109.32 | 46.3% | 0.667 | 10.71 | 10.21 | 0.598 | 0.727 | -3.28 |  |

### Vòng 997 — ngẫu nhiên nhiều thông số · mốc: tổng 111.68R, win 51%, rủi ro tụt vốn 8.52R, lời÷rủi ro 13.11

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: EMA 21 → 1.13 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần Elliott (/100) → 6 | 23.33 | 57.5% | 0.146 | 6.38 | 3.66 | 0.154 | 0.139 | -9.38 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Điểm vùng: BOS → 1 | 107.94 | 50% | 0.739 | 8.54 | 12.64 | 0.531 | 0.978 | -7.41 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm vùng: BOS → 3 + SL tối đa (% Entry) → 0.425 | 108.36 | 46.8% | 0.695 | 9.28 | 11.68 | 0.508 | 0.901 | -9.93 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu riêng khung 4H → 2 + R:R tối thiểu tới TP1 → 2.63 | 117.32 | 41.4% | 0.382 | 12.35 | 9.5 | 0.303 | 0.45 | -6.58 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: Biên mây Ichimoku → 1.35 | 105.53 | 48.6% | 0.713 | 8.8 | 11.99 | 0.518 | 0.93 | -6.59 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + SL tối đa (% Entry) → 0.425 + Cộng thêm ngưỡng điểm khung 1W → 2 + Xác nhận khung nhỏ (A2) → W | 101.83 | 38.1% | 0.384 | 17.36 | 5.87 | 0.346 | 0.418 | -4.87 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: HVN cố định → 0.438 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Cộng điểm phân kỳ dương ẩn → 2.25 | 106.67 | 48.6% | 0.731 | 8.51 | 12.53 | 0.439 | 1.047 | -8.77 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 28 + Điểm vùng: MACD cắt lên Signal → 0.563 + Đệm SL riêng khung 4H (ATR) → 0.3 | 147.23 | 38.2% | 0.517 | 18.37 | 8.01 | 0.335 | 0.705 | -11.01 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Mức sai Elliott (cho SL) → 1 | 106.85 | 50% | 0.722 | 8.84 | 12.09 | 0.514 | 0.966 | -8.85 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: EMA 21 → 0.875 | 113.78 | 50.3% | 0.785 | 8.22 | 13.84 | 0.628 | 0.958 | -6.59 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 1 + R:R tối thiểu tới TP1 → 2.63 + Trần điểm khi chart yếu (Trend < x) → -0.225 + Trọng số phần Divergence (/100) → 9 | 95.69 | 49.2% | 0.736 | 8.56 | 11.18 | 0.437 | 1.064 | -10.57 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 97.8 | 49.7% | 0.665 | 8.61 | 11.36 | 0.6 | 0.737 | -7.37 |  |
