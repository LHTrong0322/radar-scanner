# Tối ưu tự động (chạy liên tục) — vòng 726

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 8367 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.3% | 93.53R | 0.577 | 5.74R | 10.02R | 9.33 | 32 | 12.5% | -14.03R | -0.438 | 14.03R |
| **Tốt nhất** | 144 | 53.5% | 118.38R | 0.822 | 5.09R | 7.24R | 16.35 | 28 | 17.9% | -9.66R | -0.345 | 10.28R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 19.43R | 5 | 0% | -3.76R |
| 1W | 10 | 50% | 7.73R | 2 | 0% | -2.04R |
| 4H | 106 | 54.7% | 91.22R | 21 | 23.8% | -3.85R |

## ✅ Cấu hình tốt nhất ĐÃ QUA kiểm tra 2026 (đề xuất để Trọng duyệt)

Tìm thấy ở vòng 234 (Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Trọng số phần SL (/100) → 7 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 | Tỷ lệ thắng | Tổng R 2026 |
|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.3% | 93.53R | 10.02R | 9.33 | 32 | 12.5% | -14.03R |
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

### Vòng 726 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Divergence (/100) → 9 + Trọng số phần Elliott (/100) → 6 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 77.93 | 44.8% | 0.478 | 10.51 | 7.41 | 0.372 | 0.586 | -10.09 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Lệnh chờ hết hạn sau (nến) → 8 | 112.78 | 51% | 0.718 | 8.07 | 13.98 | 0.555 | 0.911 | -11.25 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: EMA 50 → 0.75 + R:R tối thiểu riêng khung 1D → 2 | 103.57 | 45.9% | 0.609 | 8.91 | 11.62 | 0.607 | 0.611 | -7.92 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Trend (/100) → 19 + R:R tối thiểu riêng khung 4H → 2 + Số TP tối đa → 2 | 118.51 | 41.6% | 0.374 | 12.29 | 9.64 | 0.326 | 0.413 | -10.46 |  |
| Ngẫu nhiên: Điểm vùng: EMA 50 → 1.13 + Số TP tối đa → 2 + Xác nhận khung nhỏ (A2) → W + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 100.13 | 39% | 0.394 | 15.97 | 6.27 | 0.346 | 0.439 | -2.14 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 | 101.04 | 52.1% | 0.692 | 7.68 | 13.16 | 0.629 | 0.752 | -12.82 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: HVN cố định → 0.438 | 126.85 | 37.2% | 0.437 | 20.53 | 6.18 | 0.234 | 0.643 | -14.31 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + R:R tối thiểu riêng khung 1W → 2 | 98.93 | 49.3% | 0.678 | 8.43 | 11.74 | 0.55 | 0.795 | -9.65 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Cổng Dow → TẮT + Cộng thêm ngưỡng điểm khung 1D → 3 | 138.17 | 44% | 0.634 | 11.13 | 12.41 | 0.566 | 0.704 | -18.06 |  |
| Ngẫu nhiên: Điểm vùng: Kháng cự cũ bị phá → 1.69 + Trọng số phần Trend (/100) → 12 + Điểm vùng: Mức MACD → 0.875 | 110.69 | 51.8% | 0.796 | 7.77 | 14.25 | 0.626 | 0.985 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Cổng Dow → TẮT + Cộng thêm ngưỡng điểm khung 1D → 3 | 133.05 | 43.4% | 0.608 | 12.32 | 10.8 | 0.531 | 0.686 | -19.76 |  |
| Ngẫu nhiên: Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: Break mây Ichimoku → 3 + Trọng số phần Momentum (/100) → 25 | 96.3 | 47.2% | 0.606 | 9.59 | 10.04 | 0.536 | 0.678 | -8.62 |  |

### Vòng 725 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.31

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Số TP tối đa → 2 + Ngưỡng điểm vào kèo → 74 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: HVN anchored → 0.188 | 117.49 | 50.3% | 0.789 | 7.94 | 14.8 | 0.653 | 0.937 | -9.66 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 30.39 | 58.4% | 0.189 | 5.77 | 5.27 | 0.224 | 0.155 | -11.38 |  |
| Ngẫu nhiên: Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Điểm vùng: BOS → 1 + Ngưỡng điểm vào kèo → 77 | 98 | 49.3% | 0.71 | 8.11 | 12.08 | 0.522 | 0.922 | -11.51 |  |
| Ngẫu nhiên: Điểm vùng: POC volume profile cố định → 0.688 + Khung lớn phải tăng (trend ≥) → 0.375 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 | 112.65 | 52.8% | 0.793 | 7.25 | 15.54 | 0.588 | 1.01 | -9.66 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 2 + Cổng Dow → CHẶT | 78.38 | 52.2% | 0.694 | 7.64 | 10.26 | 0.324 | 0.998 | -10.72 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Cộng điểm phân kỳ dương ẩn → 3 + Coin phải mạnh hơn BTC trong N ngày → 14 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 78.32 | 50% | 0.653 | 8.51 | 9.2 | 0.615 | 0.698 | -15.35 |  |
| Ngẫu nhiên: Điểm tối thiểu vùng đặt lệnh chờ → 3 + Điểm tối thiểu của vùng đặt SL → 2 + Cổng Dow → TẮT | 130.66 | 43.8% | 0.628 | 11.35 | 11.51 | 0.587 | 0.669 | -20.15 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 1D → 2 + Trọng số phần R:R (/100) → 28 | 107.28 | 45.7% | 0.62 | 8.86 | 12.11 | 0.61 | 0.63 | -7.92 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 30.44 | 39.4% | 0.293 | 12.31 | 2.47 | 0.259 | 0.331 | -9.24 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Trọng số phần Entry (/100) → 28 | 115.99 | 52.4% | 0.8 | 7.54 | 15.38 | 0.61 | 1.015 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Điểm vùng: BOS → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 103.07 | 39.4% | 0.262 | 15.09 | 6.83 | 0.273 | 0.254 | -19.56 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Mức RSI 30/70 → 1.13 + Khung lớn phải tăng (trend ≥) → 0.375 | 110.07 | 51.8% | 0.781 | 7.58 | 14.52 | 0.619 | 0.959 | -9.66 |  |

### Vòng 724 — ngẫu nhiên nhiều thông số · mốc: tổng 115.79R, win 53.5%, rủi ro tụt vốn 7.35R, lời÷rủi ro 15.75

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 5 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + R:R tối thiểu riêng khung 1W → 2 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 | 106.59 | 51.4% | 0.73 | 7.82 | 13.63 | 0.637 | 0.826 | -9.38 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 | 121.86 | 50.3% | 0.796 | 8.39 | 14.52 | 0.757 | 0.845 | -10.24 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Trọng số phần Divergence (/100) → 9 + Điểm vùng: HVN cố định → 0.563 | 98.36 | 51.7% | 0.82 | 7.6 | 12.94 | 0.542 | 1.126 | -10.63 |  |
| Ngẫu nhiên: Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Khung lớn phải tăng (trend ≥) → 0.425 | 102.38 | 50.3% | 0.706 | 8.75 | 11.7 | 0.527 | 0.927 | -7.11 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: EMA 50 → 1.13 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Vùng RSI 45–55 → 1.13 | 93.54 | 43.2% | 0.603 | 11.09 | 8.43 | 0.572 | 0.64 | -10.26 |  |
| Ngẫu nhiên: Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: Đỉnh/đáy swing lớn → 1 | 124.4 | 45.1% | 0.55 | 10.79 | 11.53 | 0.584 | 0.515 | -9.12 |  |
| Ngẫu nhiên: Trọng số phần Entry (/100) → 28 + Điểm vùng: Fib sóng 4 → 1.56 | 113.87 | 52.4% | 0.775 | 7.71 | 14.77 | 0.586 | 1.007 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: BOS → 3 + Điểm tối thiểu của vùng đặt SL → 2 + Cộng điểm phân kỳ dương ẩn → 2.25 | 110.1 | 53.1% | 0.759 | 7.85 | 14.03 | 0.635 | 0.9 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 | 39.57 | 42% | 0.45 | 9.44 | 4.19 | 0.377 | 0.54 | -12.38 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Điểm vùng: HVN anchored → 0.188 | 111.71 | 52.5% | 0.804 | 7.7 | 14.51 | 0.585 | 1.068 | -9.69 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: MACD cắt lên Signal → 0.563 | 114.13 | 41.6% | 0.368 | 12.65 | 9.02 | 0.334 | 0.397 | -9.21 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm vùng: Break mây Ichimoku → 3 | 33.87 | 38.9% | 0.376 | 10.25 | 3.3 | 0.242 | 0.553 | -6.8 |  |

### Vòng 723 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.31R, lời÷rủi ro 16.19

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Trọng số phần Divergence (/100) → 12 + Điểm vùng: EMA 200 → 1 | 117.17 | 50.3% | 0.737 | 8.24 | 14.22 | 0.611 | 0.874 | -9.83 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Cộng thêm ngưỡng điểm khung 4H → -1 | 119.14 | 53.5% | 0.827 | 7.31 | 16.3 | 0.64 | 1.043 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: MACD cắt lên Signal → 0.563 + Trọng số phần Elliott (/100) → 10 + Điểm vùng: Break mây Ichimoku → 3 | 108.36 | 49.4% | 0.677 | 9 | 12.04 | 0.554 | 0.813 | -9.4 |  |
| Ngẫu nhiên: % chốt ở TP1 → 0.307 + Điểm vùng: POC anchored → 2 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 102.55 | 50% | 0.675 | 8.73 | 11.75 | 0.528 | 0.834 | -9.93 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: EMA 21 → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 99.16 | 48.6% | 0.708 | 8.67 | 11.44 | 0.495 | 0.941 | -11.51 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Trọng số phần Trend (/100) → 19 + Số TP tối đa → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 | 40.33 | 41.9% | 0.469 | 9.32 | 4.33 | 0.38 | 0.582 | -8.58 |  |
| Ngẫu nhiên: Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: Mức RSI 30/70 → 1.13 | 124.45 | 50.3% | 0.803 | 8.23 | 15.12 | 0.757 | 0.858 | -10.24 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm vùng: EMA 200 → 1 | 112.63 | 50% | 0.704 | 8.77 | 12.84 | 0.574 | 0.863 | -5.69 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 9 + Điểm vùng: Biên mây Ichimoku → 1.35 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Trọng số phần Divergence (/100) → 9 | 97.82 | 48.9% | 0.704 | 8.42 | 11.62 | 0.455 | 0.972 | -10.49 |  |
| Ngẫu nhiên: Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: EMA 50 → 0.75 | 115.92 | 53.5% | 0.816 | 7.3 | 15.88 | 0.621 | 1.029 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Trọng số phần Trend (/100) → 19 | 114.55 | 51.4% | 0.785 | 7.92 | 14.46 | 0.591 | 1.006 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm vùng: Mức MACD → 1.13 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: HVN anchored → 0.313 | 103.48 | 49.3% | 0.709 | 8.52 | 12.15 | 0.477 | 0.96 | -9.62 |  |

### Vòng 722 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.27R, lời÷rủi ro 16.28

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: EMA 200 → 1 + Khung lớn phải tăng (trend ≥) → 0.425 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 | 98.84 | 50.3% | 0.655 | 8.74 | 11.31 | 0.546 | 0.773 | -3.92 |  |
| Ngẫu nhiên: Điểm vùng: Mức MACD → 1.13 + Điểm vùng: EMA 21 → 0.875 | 115.76 | 51% | 0.798 | 8.01 | 14.45 | 0.646 | 0.966 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Trọng số phần SL (/100) → 9 | 25.81 | 58.6% | 0.164 | 6.27 | 4.12 | 0.203 | 0.128 | -10.69 |  |
| Ngẫu nhiên: R:R tối thiểu riêng khung 4H → 2 + Điểm vùng: EMA 21 → 0.875 + Trọng số phần R:R (/100) → 28 + Cộng thêm ngưỡng điểm khung 1W → 2 | 111.47 | 40.6% | 0.356 | 13.26 | 8.41 | 0.342 | 0.368 | -11.29 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Trọng số phần SL (/100) → 7 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + SL tối đa (% Entry) → 0.425 | 110.54 | 51% | 0.742 | 7.87 | 14.05 | 0.617 | 0.879 | -8.69 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → -1 + % chốt ở TP1 → 0.307 | 118.45 | 53.5% | 0.823 | 7.27 | 16.29 | 0.637 | 1.036 | -9.67 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Đệm SL riêng khung 1W (ATR) → 0.3 + Số TP tối đa → 2 + Trần điểm khi chart yếu (Trend < x) → -0.225 | 97.01 | 48.2% | 0.688 | 8.95 | 10.84 | 0.599 | 0.774 | -10.38 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + Điểm vùng: Đỉnh/đáy swing lớn → 1 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 | 107.1 | 48.9% | 0.602 | 9.25 | 11.58 | 0.5 | 0.693 | -10.9 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Cổng Dow → CHẶT + % chốt ở TP1 → 0.287 | 59.72 | 52.5% | 0.747 | 6.69 | 8.93 | 0.28 | 1.191 | -6.89 |  |
| Ngẫu nhiên: Điểm vùng: Vùng RSI 45–55 → 0.875 + Đệm SL riêng khung 4H (ATR) → 0.3 | 153.32 | 38.3% | 0.529 | 18.09 | 8.48 | 0.38 | 0.673 | -14.03 |  |
| Ngẫu nhiên: Điểm tối thiểu của vùng đặt SL → 4 + Trọng số phần Elliott (/100) → 10 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Đệm SL riêng khung 1W (ATR) → 0.3 | 103.85 | 44.3% | 0.657 | 10.54 | 9.85 | 0.566 | 0.756 | -11.28 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Bỏ kèo khi biến động > N lần bình thường → 1.5 + Trọng số phần Elliott (/100) → 10 | 66.49 | 44.8% | 0.693 | 9.54 | 6.97 | 0.417 | 1.005 | -7.48 |  |

### Vòng 721 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.31

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Trọng số phần Elliott (/100) → 6 | 75.7 | 47.2% | 0.701 | 8.34 | 9.08 | 0.473 | 0.956 | -6.48 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 6 + Xác nhận khung nhỏ (A2) → W | 95.58 | 39.1% | 0.407 | 15.58 | 6.13 | 0.387 | 0.425 | -4.51 |  |
| Ngẫu nhiên: Điểm vùng: HVN anchored → 0.188 + Lọc BTC: giá trên EMA bao nhiêu ngày → 163 + Thoát lệnh ì sau N nến chưa tới TP1 → 3 | 30.6 | 58.5% | 0.192 | 5.63 | 5.44 | 0.219 | 0.168 | -10.11 |  |
| Ngẫu nhiên: Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 107.86 | 52.4% | 0.744 | 7.74 | 13.94 | 0.589 | 0.914 | -11.78 |  |
| Ngẫu nhiên: Điểm vùng: Mức sai Elliott (cho SL) → 3 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 114.18 | 52.1% | 0.793 | 7.66 | 14.91 | 0.594 | 1.021 | -9.48 |  |
| Ngẫu nhiên: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 5 + Cộng thêm ngưỡng điểm khung 1D → 3 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + Điểm vùng: POC anchored → 4 | 109.75 | 51.3% | 0.732 | 8.24 | 13.32 | 0.578 | 0.889 | -4.51 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 4 + Trọng số phần Entry (/100) → 28 | 115.54 | 52.1% | 0.802 | 7.65 | 15.1 | 0.618 | 1.014 | -9.66 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Đệm SL dưới vùng hỗ trợ (ATR) → 0.95 | 101.96 | 47.6% | 0.622 | 8.53 | 11.95 | 0.475 | 0.754 | -9.64 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Điểm vùng: MACD cắt lên Signal → 0.563 | 118.38 | 53.5% | 0.822 | 7.26 | 16.31 | 0.635 | 1.037 | -9.66 |  |
| Ngẫu nhiên: Trọng số phần Momentum (/100) → 21 + Đệm SL riêng khung 1W (ATR) → 0.3 + Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 80.49 | 46.8% | 0.725 | 8.59 | 9.37 | 0.434 | 1.033 | -7.53 |  |
| Ngẫu nhiên: Cổng Dow → CHẶT + SL tối đa (% Entry) → 0.425 | 83.05 | 52.3% | 0.748 | 7.04 | 11.8 | 0.324 | 1.109 | -10.72 |  |
| Ngẫu nhiên: Cổng Dow → TẮT + Ngưỡng điểm vào kèo → 74 + Điểm ADX > 25 và +DI trội (Momentum) → 3 + R:R tối thiểu riêng khung 4H → 2 | 115.68 | 37.3% | 0.282 | 17.38 | 6.66 | 0.356 | 0.214 | -26.96 |  |

### Vòng 720 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.26R, lời÷rủi ro 16.31

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Khoảng cách tối thiểu TP1 (ATR) → 0.813 + Điểm tối thiểu của vùng đặt SL → 2 + Điểm vùng: Biên mây Ichimoku → 1.05 | 103.29 | 50% | 0.671 | 8.88 | 11.63 | 0.598 | 0.743 | -12.81 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 0.938 + Điểm vùng: EMA 50 → 0.75 + Điểm vùng: MACD cắt lên Signal → 0.563 | 114.18 | 53.2% | 0.81 | 7.27 | 15.71 | 0.605 | 1.029 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Số TP tối đa → 2 + Cổng Dow → TẮT | 138.11 | 45.2% | 0.636 | 11.34 | 12.18 | 0.57 | 0.705 | -18.72 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Mức MACD → 0.875 | 107.55 | 52.1% | 0.747 | 7.65 | 14.06 | 0.609 | 0.897 | -10 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Trọng số phần SL (/100) → 7 + Điểm vùng: Break mây Ichimoku → 3 + Điểm vùng: EMA 21 → 0.875 | 119.91 | 51% | 0.764 | 8.16 | 14.69 | 0.664 | 0.873 | -9.05 |  |
| Ngẫu nhiên: Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Trọng số phần R:R (/100) → 33 + Điểm ADX > 25 và +DI trội (Momentum) → 3 | 101.73 | 51.7% | 0.692 | 8.08 | 12.59 | 0.637 | 0.754 | -9.46 |  |
| Ngẫu nhiên: Đệm SL riêng khung 4H (ATR) → 0.3 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 | 145.71 | 39% | 0.499 | 18.47 | 7.89 | 0.376 | 0.617 | -14.93 |  |
| Ngẫu nhiên: Lệnh chờ hết hạn sau (nến) → 8 + Điểm vùng: EMA 50 → 0.75 + Trọng số phần Trend (/100) → 19 | 115.26 | 51.9% | 0.739 | 8.11 | 14.21 | 0.59 | 0.904 | -11.25 |  |
| Ngẫu nhiên: Coin phải mạnh hơn BTC trong N ngày → 14 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: HVN anchored → 0.313 | 86.44 | 48.7% | 0.726 | 8.44 | 10.24 | 0.567 | 0.912 | -16.13 |  |
| Ngẫu nhiên: Điểm vùng: POC anchored → 4 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Điểm vùng: HVN cố định → 0.438 + Trọng số phần Divergence (/100) → 9 | 115.68 | 51.3% | 0.761 | 8.21 | 14.09 | 0.576 | 0.951 | -6.2 |  |
| Ngẫu nhiên: Trọng số phần Trend (/100) → 12 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 + Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: HVN cố định → 0.438 | 96.33 | 47.8% | 0.708 | 8.43 | 11.43 | 0.463 | 0.969 | -11.51 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.375 + Trọng số phần Entry (/100) → 28 + Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 | 110.27 | 52% | 0.735 | 7.7 | 14.32 | 0.556 | 0.94 | -9.66 |  |

### Vòng 719 — ngẫu nhiên nhiều thông số · mốc: tổng 111.96R, win 52.1%, rủi ro tụt vốn 7.73R, lời÷rủi ro 14.48

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.38 + Điểm vùng: BOS → 3 + Xác nhận khung nhỏ (A2) → W | 58.33 | 36.8% | 0.244 | 19.42 | 3 | 0.125 | 0.351 | -5.95 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Cộng thêm ngưỡng điểm khung 1D → 5 + Trọng số phần Entry (/100) → 33 | 28.85 | 58.2% | 0.189 | 5.94 | 4.86 | 0.217 | 0.16 | -11.14 |  |
| Ngẫu nhiên: Điểm vùng: Break mây Ichimoku → 1 + Khung lớn phải tăng (trend ≥) → 0.375 + % chốt ở TP1 → 0.287 | 97.95 | 48.9% | 0.695 | 8.63 | 11.35 | 0.519 | 0.883 | -11.03 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Điểm vùng: Vùng RSI 45–55 → 0.875 + Bỏ kèo khi biến động > N lần bình thường → 1.5 | 75.99 | 47.2% | 0.704 | 8.48 | 8.96 | 0.496 | 0.944 | -6.85 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Điểm vùng: Kháng cự cũ bị phá → 1.31 + Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 | 27.63 | 35.5% | 0.228 | 15.76 | 1.75 | 0.215 | 0.241 | -9.08 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Điểm vùng: HVN anchored → 0.313 + Trần điểm khi chart yếu (Trend < x) → -0.375 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 28 | 58.7% | 0.181 | 6.23 | 4.49 | 0.21 | 0.151 | -11.24 |  |
| Ngẫu nhiên: Trọng số phần SL (/100) → 7 + Xác nhận khung nhỏ (A2) → W + Điểm vùng: HVN anchored → 0.313 | 88.86 | 38.1% | 0.332 | 18.24 | 4.87 | 0.315 | 0.348 | -6.01 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + Số TP tối đa → 2 + Điểm vùng: MACD cắt lên Signal → 0.438 | 22.54 | 54.8% | 0.136 | 7.79 | 2.89 | 0.174 | 0.098 | -9.46 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Cổng Dow → CHẶT + Trọng số phần Divergence (/100) → 12 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 68.67 | 50% | 0.648 | 7.54 | 9.11 | 0.21 | 1.01 | -13.11 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Kháng cự cũ bị phá → 1.69 + R:R tối thiểu riêng khung 4H → 2 | 106.15 | 40.2% | 0.341 | 13.43 | 7.9 | 0.337 | 0.345 | -7.24 |  |
| Ngẫu nhiên: Ngưỡng điểm vào kèo → 74 + Điểm vùng: HVN anchored → 0.188 + Điểm vùng: EMA 50 → 0.75 | 106.57 | 50% | 0.74 | 8.26 | 12.9 | 0.536 | 0.974 | -11.62 |  |
| Ngẫu nhiên: Bỏ kèo khi biến động > N lần bình thường → 1.5 + Lệnh chờ hết hạn sau (nến) → 6 + Trọng số phần Entry (/100) → 33 | 58.94 | 43.9% | 0.601 | 9.47 | 6.22 | 0.419 | 0.816 | -6.56 |  |

### Vòng 718 — ngẫu nhiên nhiều thông số · mốc: tổng 118.38R, win 53.5%, rủi ro tụt vốn 7.24R, lời÷rủi ro 16.35

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.13 + Cộng thêm ngưỡng điểm khung 4H → -1 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 117.03 | 53.5% | 0.813 | 7.36 | 15.9 | 0.634 | 1.018 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib sóng 4 → 1.56 + Trọng số phần Divergence (/100) → 9 + Đệm SL riêng khung 1W (ATR) → 0.3 | 99.89 | 46.4% | 0.714 | 9.34 | 10.69 | 0.448 | 0.957 | -10.7 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 1 + R:R tối thiểu riêng khung 1D → 2 | 104.02 | 45.9% | 0.605 | 9.04 | 11.51 | 0.571 | 0.634 | -7.89 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 1.13 + Đệm SL riêng khung 4H (ATR) → 0.3 | 155.15 | 38.9% | 0.544 | 17.85 | 8.69 | 0.351 | 0.737 | -14.27 |  |
| Ngẫu nhiên: Khung lớn phải tăng (trend ≥) → 0.425 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 114.41 | 52.5% | 0.811 | 7.46 | 15.34 | 0.585 | 1.077 | -9.69 |  |
| Ngẫu nhiên: Trọng số phần Elliott (/100) → 10 + Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) → 7 + Điểm vùng: Hỗ trợ cũ bị phá (thành kháng cự) → 0.875 + Đệm SL dưới vùng hỗ trợ (ATR) → 1.05 | 91.21 | 50% | 0.651 | 8.42 | 10.83 | 0.529 | 0.785 | -10.71 |  |
| Ngẫu nhiên: Số TP tối đa → 2 + Cộng thêm ngưỡng điểm khung 1D → 5 + Điểm vùng: Break mây Ichimoku → 3 | 109.97 | 49.7% | 0.675 | 8.79 | 12.51 | 0.538 | 0.831 | -9.4 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: EMA 200 → 1 + SL tối đa (% Entry) → 0.425 + Số TP tối đa → 2 | 108.05 | 50.6% | 0.675 | 8.68 | 12.45 | 0.574 | 0.803 | -4.67 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.19 + Ngưỡng điểm vào kèo → 74 + Cổng Dow → CHẶT + Khung lớn phải tăng (trend ≥) → 0.375 | 82.82 | 52.3% | 0.76 | 6.59 | 12.57 | 0.321 | 1.118 | -10.72 |  |
| Ngẫu nhiên: R:R tối thiểu tới TP1 → 2.63 + Điểm vùng: BOS → 1 + Trọng số phần Momentum (/100) → 21 + R:R tối thiểu riêng khung 4H → 2 | 120.14 | 42% | 0.383 | 12.37 | 9.71 | 0.325 | 0.43 | -8.61 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.81 + Điểm tối thiểu của vùng đặt SL → 4 | 114.1 | 51.4% | 0.771 | 7.91 | 14.42 | 0.641 | 0.908 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh/đáy pivot Dow → 2.19 + Cộng thêm ngưỡng điểm khung 1W → -1 + Trọng số phần Entry (/100) → 33 | 103.72 | 49.7% | 0.696 | 9.09 | 11.41 | 0.536 | 0.882 | -7.08 |  |

### Vòng 717 — ngẫu nhiên nhiều thông số · mốc: tổng 114.77R, win 53.1%, rủi ro tụt vốn 7.49R, lời÷rủi ro 15.32

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngẫu nhiên: Trọng số phần Entry (/100) → 33 + Trọng số phần Elliott (/100) → 6 + Cộng thêm ngưỡng điểm khung 1W → -1 | 113.89 | 52.4% | 0.785 | 7.52 | 15.14 | 0.583 | 1.015 | -9.66 |  |
| Ngẫu nhiên: Thoát lệnh ì sau N nến chưa tới TP1 → 3 + SL tối đa (% Entry) → 0.425 | 27.04 | 57.6% | 0.171 | 6.26 | 4.32 | 0.187 | 0.156 | -11.38 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm vùng: Đỉnh/đáy swing lớn → 3 + Điểm tối thiểu của vùng đặt SL → 2 + Ngưỡng điểm vào kèo → 74 | 38.74 | 42% | 0.44 | 9.91 | 3.91 | 0.372 | 0.523 | -9.28 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 1W → 2 + Điểm vùng: Fib sóng 4 → 1.56 + Điểm vùng: EMA 21 → 0.875 + Điểm vùng: Kháng cự cũ bị phá → 1.31 | 113.9 | 51.4% | 0.77 | 7.8 | 14.6 | 0.611 | 0.942 | -9.66 |  |
| Ngẫu nhiên: Điểm vùng: Fib 0.618 sóng 2 → 2.81 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 | 114.77 | 53.1% | 0.803 | 7.49 | 15.32 | 0.596 | 1.037 | -9.66 |  |
| Ngẫu nhiên: Đệm SL riêng khung 1D (ATR) → 0.3 + Sau TP1: SL bám giá cao nhất − N×R → 0.5 + Điểm vùng: POC anchored → 2 + R:R tối thiểu riêng khung 1D → 2 | 107.71 | 41.7% | 0.523 | 11.95 | 9.01 | 0.65 | 0.416 | -1.59 |  |
| Ngẫu nhiên: Điểm vùng: EMA 21 → 1.13 + Điểm vùng: Biên mây Ichimoku → 1.05 + Điểm vùng: EMA 50 → 1.13 | 97.69 | 49.7% | 0.656 | 8 | 12.21 | 0.564 | 0.749 | -12.12 |  |
| Ngẫu nhiên: Điểm vùng: EMA 200 → 3 + Lọc BTC: giá trên EMA bao nhiêu ngày → 138 + Trọng số phần SL (/100) → 7 + Cộng thêm ngưỡng điểm khung 4H → 2 | 97.13 | 48.3% | 0.679 | 8.49 | 11.44 | 0.503 | 0.858 | -8.31 |  |
| Ngẫu nhiên: Số nến mỗi bên để xác định đỉnh/đáy Dow → 3 + Điểm tối thiểu vùng đặt lệnh chờ → 3 + Trọng số phần Elliott (/100) → 10 | 83.78 | 45.9% | 0.527 | 9.79 | 8.56 | 0.465 | 0.588 | -10.12 |  |
| Ngẫu nhiên: Điểm vùng: Đỉnh sóng 1 (sàn sóng 4) → 3.75 + Điểm vùng: Fib 0.5 / 0.382 sóng 2 → 2 | 108.55 | 52.3% | 0.729 | 7.82 | 13.88 | 0.537 | 0.95 | -11.06 |  |
| Ngẫu nhiên: Cộng thêm ngưỡng điểm khung 4H → 2 + Điểm ADX < 13 cạn lực giảm (Momentum) → 2.44 + Điểm vùng: Fib 0.618 sóng 2 → 2.19 | 109.04 | 51.8% | 0.784 | 7.48 | 14.58 | 0.61 | 0.977 | -9.66 |  |
| Ngẫu nhiên: SL tối đa (% Entry) → 0.425 + Điểm vùng: POC anchored → 4 | 114.39 | 52% | 0.763 | 7.95 | 14.39 | 0.564 | 0.967 | -4.48 |  |
