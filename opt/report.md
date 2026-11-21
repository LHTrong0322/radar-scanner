# Tối ưu tự động (chạy liên tục) — vòng 1043

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 12171 phương án.

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

### Vòng 1043 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.04R, lời÷rủi ro 14.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.225 + % chốt ở TP1 → 0.307 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + SL tối đa (% Entry) → 0.425 | 120.08 | 49.4% | 0.76 | 8.74 | 13.74 | 0.721 | 0.805 | -9.48 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: POC anchored → 4 + Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 113.43 | 51.3% | 0.756 | 8.29 | 13.68 | 0.554 | 0.964 | -2.85 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 77 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Đệm SL riêng khung 4H (ATR) → 0.3 + Cổng Dow → CHẶT | 70.85 | 36.7% | 0.321 | 20.03 | 3.54 | 0.194 | 0.439 | -16.88 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + R:R tối thiểu riêng khung 1D → 2 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 104.55 | 45.7% | 0.597 | 9.34 | 11.19 | 0.566 | 0.627 | -10.22 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 106.77 | 51.4% | 0.731 | 8.08 | 13.21 | 0.553 | 0.925 | -7.58 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 94.66 | 49% | 0.635 | 8.9 | 10.64 | 0.539 | 0.733 | -9.93 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 | 91.58 | 45.9% | 0.627 | 9.75 | 9.39 | 0.463 | 0.815 | -7.11 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần R:R (/100) → 28 + Cộng điểm phân kỳ dương ẩn → 3 | 113.34 | 50% | 0.787 | 8 | 14.17 | 0.654 | 0.932 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm vùng: EMA 21 → 0.875 | 115.84 | 51.7% | 0.799 | 8.06 | 14.37 | 0.664 | 0.943 | -7.61 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + Ngưỡng điểm vào kèo → 77 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Mức MACD → 0.875 | 74.11 | 44.3% | 0.469 | 10.24 | 7.24 | 0.447 | 0.49 | -8.8 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Điểm vùng: EMA 200 → 1 | 110.83 | 51.9% | 0.701 | 8.42 | 13.16 | 0.652 | 0.76 | -3.3 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Cộng điểm phân kỳ dương ẩn → 2.25 | 91.58 | 45.9% | 0.627 | 9.75 | 9.39 | 0.463 | 0.815 | -7.11 |  |

### Vòng 1042 — ngẫu nhiên nhiều thông số · mốc: tổng 115.16R, win 54.2%, rủi ro tụt vốn 7.27R, lời÷rủi ro 15.84

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: POC anchored → 4 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 110.18 | 41.7% | 0.38 | 11.97 | 9.2 | 0.327 | 0.421 | -2.1 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: MACD cắt lên Signal → 0.563 | 57.21 | 44% | 0.381 | 11.07 | 5.17 | 0.324 | 0.436 | -8.79 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + R:R tối thiểu riêng khung 1D → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Cổng Dow → TẮT | 122.23 | 44.2% | 0.541 | 11.64 | 10.5 | 0.596 | 0.494 | -16.98 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 43.59 | 42.9% | 0.479 | 9.53 | 4.57 | 0.351 | 0.635 | -11.8 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → -1 + SL tối đa (% Entry) → 0.425 + Trọng số phần Trend (/100) → 19 | 114.7 | 53.8% | 0.802 | 7.49 | 15.31 | 0.599 | 1.026 | -9.9 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Cộng thêm ngưỡng điểm khung 4H → -1 + Trọng số phần SL (/100) → 9 + Trần điểm khi chart yếu (Trend < x) → -0.375 | 113.43 | 52.7% | 0.777 | 7.43 | 15.27 | 0.572 | 1.006 | -9.9 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: HVN anchored → 0.188 | 115.53 | 48.5% | 0.7 | 10.12 | 11.42 | 0.593 | 0.799 | -1.65 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm tối thiểu của vùng đặt SL → 4 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Trọng số phần Elliott (/100) → 10 | 111.79 | 52.4% | 0.782 | 7.3 | 15.31 | 0.61 | 0.961 | -6.29 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + R:R tối thiểu riêng khung 1D → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 33.62 | 43.2% | 0.354 | 9.71 | 3.46 | 0.567 | 0.118 | 0.47 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: EMA 50 → 1.13 + R:R tối thiểu riêng khung 1W → 2 | 100.28 | 44.4% | 0.464 | 11.96 | 8.38 | 0.465 | 0.463 | -12.75 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Mức RSI 30/70 → 0.875 | 84.17 | 50.4% | 0.707 | 8.42 | 10 | 0.477 | 1.003 | -7.1 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: BOS → 1 + Cổng Dow → TẮT | 132.15 | 46.6% | 0.641 | 10.5 | 12.59 | 0.586 | 0.696 | -20.59 |  |

### Vòng 1041 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.13R, lời÷rủi ro 14.02

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + R:R tối thiểu riêng khung 1D → 2 + Cổng Dow → TẮT | 110.25 | 41.5% | 0.467 | 13.51 | 8.16 | 0.525 | 0.416 | -16.37 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: HVN anchored → 0.313 + Điểm vùng: Mức sai Elliott (cho SL) → 1 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 106.91 | 50.3% | 0.717 | 8.54 | 12.52 | 0.526 | 0.933 | -9.87 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Điểm vùng: Break mây Ichimoku → 1 + Cộng thêm ngưỡng điểm khung 1W → 2 | 99.94 | 48.6% | 0.675 | 8.66 | 11.54 | 0.536 | 0.819 | -7.68 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Ngưỡng điểm vào kèo → 74 | 135.28 | 45.9% | 0.581 | 10.69 | 12.65 | 0.627 | 0.532 | -9.88 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Cộng điểm phân kỳ dương ẩn → 2.25 | 97.75 | 51% | 0.665 | 8.37 | 11.68 | 0.594 | 0.745 | -8.7 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 116.01 | 51.7% | 0.811 | 7.65 | 15.16 | 0.649 | 0.996 | -12.16 |  |
| Ngẫu nhiên: Điểm vùng: Mức RSI 30/70 → 1.13 + Trọng số phần Trend (/100) → 19 | 113.5 | 52.1% | 0.777 | 8.04 | 14.12 | 0.592 | 0.985 | -8.9 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần Elliott (/100) → 10 | 110.55 | 50.7% | 0.757 | 8.06 | 13.72 | 0.59 | 0.939 | -7.58 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: HVN anchored → 0.313 | 99.13 | 50.7% | 0.67 | 8.45 | 11.73 | 0.533 | 0.818 | -9.73 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 25 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 113.24 | 51.7% | 0.792 | 7.63 | 14.84 | 0.617 | 0.984 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: HVN cố định → 0.438 + Điểm vùng: POC volume profile cố định → 0.688 | 111.18 | 51.4% | 0.762 | 8.32 | 13.36 | 0.549 | 1.006 | -8.9 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Ngưỡng điểm vào kèo → 74 | 84.68 | 44.5% | 0.546 | 10.96 | 7.73 | 0.429 | 0.675 | -8.43 |  |

### Vòng 1040 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.02R, lời÷rủi ro 14.21

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Mức RSI 30/70 → 1.13 | 110.52 | 50.7% | 0.757 | 8.11 | 13.63 | 0.607 | 0.916 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần Trend (/100) → 19 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 76.48 | 43.8% | 0.478 | 10.77 | 7.1 | 0.366 | 0.587 | -9.05 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.31 + Trọng số phần SL (/100) → 7 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng thêm ngưỡng điểm khung 1W → 2 | 111.66 | 50.7% | 0.754 | 8.2 | 13.62 | 0.567 | 0.964 | -8.9 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: EMA 50 → 0.75 | 110.24 | 51.7% | 0.76 | 8.06 | 13.68 | 0.539 | 1.004 | -8.9 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: HVN cố định → 0.438 + Cộng thêm ngưỡng điểm khung 1W → -1 + Cộng thêm ngưỡng điểm khung 1D → 3 | 94.11 | 49.3% | 0.627 | 8.96 | 10.5 | 0.539 | 0.728 | -8.7 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 19 + Điểm vùng: POC anchored → 4 + Trọng số phần R:R (/100) → 28 | 112.99 | 51% | 0.748 | 8.21 | 13.76 | 0.552 | 0.947 | -2.95 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần Momentum (/100) → 25 | 90.46 | 48.1% | 0.68 | 8.72 | 10.37 | 0.548 | 0.819 | -8.88 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: EMA 50 → 0.75 + R:R tối thiểu tới TP1 → 2.63 | 24.2 | 58.2% | 0.181 | 6.09 | 3.97 | 0.17 | 0.189 | -8.55 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 85.31 | 34.4% | 0.376 | 21.56 | 3.96 | 0.223 | 0.538 | -11.5 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 2.25 + SL tối đa (% Entry) → 0.425 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 112.19 | 51.7% | 0.763 | 8.23 | 13.63 | 0.592 | 0.952 | -7.58 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 15.95 | 50% | 0.065 | 17.45 | 0.91 | 0.042 | 0.085 | -12.54 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trọng số phần R:R (/100) → 33 | 109.7 | 50% | 0.741 | 8.35 | 13.14 | 0.536 | 0.976 | -8.9 |  |

### Vòng 1039 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.04R, lời÷rủi ro 14.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + R:R tối thiểu tới TP1 → 2.38 + % chốt ở TP1 → 0.307 | 93.16 | 46.8% | 0.59 | 9.02 | 10.33 | 0.457 | 0.716 | -10.22 |  |
| Ngẫu nhiên: Cộng điểm phân kỳ dương ẩn → 3 + Điểm vùng: Break mây Ichimoku → 3 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 117.01 | 47.7% | 0.665 | 10.74 | 10.89 | 0.645 | 0.684 | -5.01 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần SL (/100) → 7 + Điểm vùng: Mức sai Elliott (cho SL) → 3 | 27.81 | 58.3% | 0.178 | 5.49 | 5.07 | 0.201 | 0.158 | -8.45 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Cộng điểm phân kỳ dương ẩn → 2.25 | 112.63 | 51.4% | 0.761 | 7.89 | 14.28 | 0.566 | 0.985 | -8.9 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cộng điểm phân kỳ dương ẩn → 2.25 | 113.95 | 52.4% | 0.786 | 8.04 | 14.17 | 0.592 | 1.006 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Coin phải mạnh hơn BTC trong N ngày → 14 + Khoảng cách tối thiểu TP1 (ATR) → 0.688 | 81.88 | 46.9% | 0.725 | 8.5 | 9.63 | 0.527 | 0.974 | -14.86 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Lệnh chờ hết hạn sau (nến) → 6 + R:R tối thiểu riêng khung 4H → 2 | 96.62 | 39.7% | 0.333 | 12.91 | 7.48 | 0.275 | 0.382 | -8.09 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Cộng thêm ngưỡng điểm khung 1D → 5 + Đệm SL riêng khung 1D (ATR) → 0.3 | 107.44 | 46.3% | 0.663 | 10.67 | 10.07 | 0.613 | 0.71 | -5.59 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Cộng thêm ngưỡng điểm khung 4H → -1 | 113.95 | 52.4% | 0.786 | 8.04 | 14.17 | 0.592 | 1.006 | -8.9 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Cổng Dow → TẮT + Trọng số phần Entry (/100) → 33 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 126.22 | 43.8% | 0.622 | 11.17 | 11.3 | 0.531 | 0.711 | -19.58 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Xác nhận khung nhỏ (A2) → W + Ngưỡng điểm vào kèo → 77 | 88.14 | 38% | 0.372 | 16.25 | 5.42 | 0.33 | 0.405 | -3.73 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Cộng điểm phân kỳ dương ẩn → 3 | 111.64 | 51.8% | 0.792 | 7.8 | 14.31 | 0.561 | 1.054 | -8.93 |  |

### Vòng 1038 — ngẫu nhiên nhiều thông số · mốc: tổng 114.01R, win 52.8%, rủi ro tụt vốn 7.81R, lời÷rủi ro 14.60

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: BOS → 3 | 82.73 | 50% | 0.689 | 8.28 | 9.99 | 0.536 | 0.848 | -16.39 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 | 92.81 | 46.4% | 0.663 | 9.62 | 9.65 | 0.379 | 0.923 | -11.78 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 1 + Cổng Dow → TẮT + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 121.99 | 41.1% | 0.57 | 12.52 | 9.74 | 0.533 | 0.608 | -20.08 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: Break mây Ichimoku → 1 | 98.59 | 47.7% | 0.653 | 9.17 | 10.75 | 0.479 | 0.839 | -10 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: POC volume profile cố định → 0.688 + Cộng thêm ngưỡng điểm khung 1W → -1 | 112.75 | 52.4% | 0.767 | 8.13 | 13.87 | 0.567 | 0.993 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 29.63 | 40% | 0.349 | 10.04 | 2.95 | 0.233 | 0.498 | -7.55 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 0.875 + Trọng số phần Entry (/100) → 33 + Cộng thêm ngưỡng điểm khung 1D → 3 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 | 68.58 | 45.3% | 0.536 | 9.38 | 7.31 | 0.366 | 0.706 | -9.02 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Trọng số phần Entry (/100) → 33 + Điểm vùng: Biên mây Ichimoku → 1.05 | 100.58 | 50% | 0.689 | 8.47 | 11.87 | 0.581 | 0.797 | -9.44 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần R:R (/100) → 33 | 112.29 | 52% | 0.759 | 8.13 | 13.81 | 0.567 | 0.973 | -9.93 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: Break mây Ichimoku → 3 | 105.17 | 49.1% | 0.653 | 9.35 | 11.25 | 0.516 | 0.799 | -9.67 |  |
| Ngẫu nhiên: Trọng số phần R:R (/100) → 33 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 29.11 | 58.5% | 0.183 | 6.07 | 4.8 | 0.221 | 0.15 | -9.87 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Lệnh chờ hết hạn sau (nến) → 6 | 100.13 | 47.6% | 0.691 | 9.03 | 11.09 | 0.698 | 0.681 | -8.96 |  |

### Vòng 1037 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 8.04R, lời÷rủi ro 14.17

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Điểm vùng: Biên mây Ichimoku → 1.35 | 110.17 | 51% | 0.749 | 8.33 | 13.23 | 0.549 | 0.977 | -7.88 |  |
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 12 + Cộng điểm phân kỳ dương ẩn → 3 | 113.76 | 52.1% | 0.779 | 7.95 | 14.31 | 0.581 | 1.006 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 0.875 + Cổng Dow → TẮT | 121.64 | 43.6% | 0.602 | 11.72 | 10.38 | 0.567 | 0.636 | -20.68 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Đệm SL riêng khung 1D (ATR) → 0.3 + Điểm vùng: Mức RSI 30/70 → 0.875 | 124.15 | 48.9% | 0.705 | 9.98 | 12.44 | 0.687 | 0.723 | -3.28 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Ngưỡng điểm vào kèo → 77 + Điểm vùng: Mức MACD → 1.13 + Cộng điểm phân kỳ dương ẩn → 3 | 109.22 | 49.3% | 0.759 | 8.32 | 13.13 | 0.579 | 0.954 | -8.9 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 37.25 | 40.4% | 0.419 | 10.22 | 3.64 | 0.342 | 0.512 | -7.55 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + SL tối đa (% Entry) → 0.425 | 100.29 | 38.8% | 0.386 | 17.34 | 5.78 | 0.348 | 0.42 | -1.64 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Ngưỡng điểm vào kèo → 77 | 25.57 | 56.3% | 0.169 | 6.35 | 4.03 | 0.22 | 0.123 | -7.37 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Cổng Dow → TẮT | 128.85 | 44.2% | 0.619 | 11.36 | 11.34 | 0.529 | 0.711 | -19.58 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 72.83 | 46.5% | 0.565 | 9.34 | 7.8 | 0.421 | 0.72 | -10.31 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 96.25 | 49.7% | 0.646 | 8.85 | 10.88 | 0.587 | 0.711 | -8.7 |  |
| Ngẫu nhiên: Xác nhận khung nhỏ (A2) → W + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cổng Dow → CHẶT | 60.42 | 38.5% | 0.347 | 16.66 | 3.63 | 0.315 | 0.381 | -3.18 |  |

### Vòng 1036 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.93R, lời÷rủi ro 14.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Xác nhận khung nhỏ (A2) → W | 98.81 | 39.3% | 0.384 | 15.92 | 6.21 | 0.362 | 0.405 | -4.4 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + R:R tối thiểu riêng khung 4H → 2 | 25.28 | 48.6% | 0.078 | 8.48 | 2.98 | 0.095 | 0.066 | -11.63 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Trọng số phần Elliott (/100) → 10 + R:R tối thiểu riêng khung 1D → 2 | 90.43 | 43.8% | 0.471 | 10.29 | 8.79 | 0.568 | 0.386 | -7.56 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Điểm vùng: Biên mây Ichimoku → 1.35 | 93.73 | 48.3% | 0.629 | 9.34 | 10.04 | 0.411 | 0.875 | -5.3 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm vùng: POC anchored → 4 + Cộng điểm phân kỳ dương ẩn → 2.25 + Cộng thêm ngưỡng điểm khung 4H → 2 | 109.43 | 50.7% | 0.75 | 8.39 | 13.04 | 0.588 | 0.911 | -2.96 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 6 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 1D → 3 | 30.91 | 58.9% | 0.196 | 5.57 | 5.55 | 0.22 | 0.173 | -9.28 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.313 + Đệm SL riêng khung 4H (ATR) → 0.3 + Trọng số phần Divergence (/100) → 9 | 151.64 | 38.8% | 0.525 | 17.61 | 8.61 | 0.37 | 0.68 | -11.49 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm tối thiểu của vùng đặt SL → 2 | 107.26 | 51.7% | 0.72 | 8.59 | 12.49 | 0.592 | 0.857 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Khung lớn phải tăng (trend ≥) → 0.425 + % chốt ở TP1 → 0.287 | 103.17 | 50.3% | 0.702 | 8.48 | 12.17 | 0.482 | 0.964 | -3.91 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: HVN cố định → 0.563 | 126.73 | 34.6% | 0.311 | 25.97 | 4.88 | 0.26 | 0.362 | -37.71 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 1 + Điểm vùng: Mức MACD → 1.13 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 107.83 | 48.3% | 0.714 | 8.8 | 12.25 | 0.463 | 0.969 | -9.13 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Điểm vùng: Fib sóng 4 → 1.56 + Đệm SL riêng khung 4H (ATR) → 0.3 | 117.01 | 38.4% | 0.522 | 17.61 | 6.64 | 0.399 | 0.637 | -17.47 |  |

### Vòng 1035 — ngẫu nhiên nhiều thông số · mốc: tổng 114.01R, win 52.8%, rủi ro tụt vốn 7.85R, lời÷rủi ro 14.52

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số TP tối đa → 2 + Cộng điểm phân kỳ dương ẩn → 3 + Trọng số phần Trend (/100) → 19 + Trọng số phần Divergence (/100) → 12 | 114.12 | 52.1% | 0.782 | 7.85 | 14.54 | 0.601 | 0.978 | -8.9 |  |
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.688 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Ngưỡng điểm vào kèo → 77 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 28.99 | 56.3% | 0.192 | 6.05 | 4.79 | 0.227 | 0.159 | -5.96 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Lệnh chờ hết hạn sau (nến) → 8 + Đệm SL riêng khung 4H (ATR) → 0.3 | 155.66 | 38% | 0.497 | 18.2 | 8.55 | 0.432 | 0.56 | -13.86 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: EMA 50 → 1.13 | 93.17 | 47.8% | 0.675 | 8.97 | 10.39 | 0.39 | 0.977 | -9.46 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Trọng số phần R:R (/100) → 33 + Trọng số phần SL (/100) → 9 + Điểm vùng: HVN anchored → 0.313 | 99.79 | 47.9% | 0.713 | 9.35 | 10.67 | 0.49 | 0.901 | -10.75 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + R:R tối thiểu riêng khung 4H → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 26.48 | 45.4% | 0.068 | 11.74 | 2.26 | 0.138 | 0.003 | -20.77 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Điểm vùng: Vùng RSI 45–55 → 1.13 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Đệm SL riêng khung 1W (ATR) → 0.3 | 84.54 | 34.6% | 0.464 | 16.27 | 5.2 | 0.485 | 0.444 | -23.04 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Đệm SL riêng khung 1W (ATR) → 0.3 | 94.3 | 46% | 0.678 | 10.1 | 9.34 | 0.407 | 0.924 | -10.75 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Trần điểm khi chart yếu (Trend < x) → -0.375 | 129.64 | 42.8% | 0.603 | 12.38 | 10.47 | 0.581 | 0.624 | -20.65 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: Mức RSI 30/70 → 0.875 | 112.74 | 45.4% | 0.545 | 10.72 | 10.52 | 0.566 | 0.524 | -7.84 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Điểm vùng: BOS → 1 + Điểm vùng: MACD cắt lên Signal → 0.438 | 104.22 | 50.3% | 0.672 | 9.36 | 11.13 | 0.454 | 0.911 | -6.32 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Lệnh chờ hết hạn sau (nến) → 6 + R:R tối thiểu riêng khung 4H → 2 | 96.57 | 39.1% | 0.323 | 13.54 | 7.13 | 0.274 | 0.363 | -5.81 |  |

### Vòng 1034 — ngẫu nhiên nhiều thông số · mốc: tổng 113.95R, win 52.4%, rủi ro tụt vốn 7.93R, lời÷rủi ro 14.37

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + % chốt ở TP1 → 0.307 | 95.44 | 50.4% | 0.718 | 8.13 | 11.74 | 0.562 | 0.896 | -8.54 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 89.15 | 48.1% | 0.66 | 9.1 | 9.8 | 0.495 | 0.85 | -8.47 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Cộng thêm ngưỡng điểm khung 1W → -1 | 109.76 | 52.3% | 0.737 | 8.22 | 13.35 | 0.554 | 0.949 | -8.9 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.35 + Điểm tối thiểu vùng đặt lệnh chờ → 1 | 110.17 | 51% | 0.749 | 8.2 | 13.44 | 0.549 | 0.977 | -7.88 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 0.75 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 109.47 | 51.7% | 0.755 | 8.14 | 13.45 | 0.534 | 0.998 | -8.9 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + R:R tối thiểu riêng khung 1D → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 96.7 | 45.6% | 0.572 | 9.57 | 10.1 | 0.549 | 0.593 | -6.35 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 70.69 | 45.4% | 0.655 | 9.04 | 7.82 | 0.422 | 0.914 | -4.43 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Cộng điểm phân kỳ dương ẩn → 2.25 + Cổng Dow → TẮT | 129.74 | 44.3% | 0.618 | 11.35 | 11.43 | 0.529 | 0.708 | -18.56 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + R:R tối thiểu riêng khung 4H → 2 | 109.02 | 39.4% | 0.355 | 13.23 | 8.24 | 0.33 | 0.378 | -14.18 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: EMA 50 → 0.75 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm tối thiểu vùng đặt lệnh chờ → 3 | 112.06 | 51.4% | 0.778 | 7.73 | 14.5 | 0.608 | 0.963 | -10.84 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.813 + Điểm vùng: Vùng RSI 45–55 → 1.13 + Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: POC anchored → 4 | 75.27 | 48.4% | 0.617 | 9.09 | 8.28 | 0.438 | 0.802 | -13.61 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + SL tối đa (% Entry) → 0.425 | 112.94 | 52.1% | 0.774 | 8.07 | 14 | 0.592 | 0.977 | -8.9 |  |
