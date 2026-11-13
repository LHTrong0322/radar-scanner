# Tối ưu tự động (chạy liên tục) — vòng 108

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = **Lời ÷ rủi ro** = tổng R chia cho **rủi ro tụt vốn (95%)**. Rủi ro tụt vốn (95%): xáo trộn thứ tự các lệnh 2000 lần, lấy mức tụt vốn mà 95% số lần không vượt quá — tức là “lúc xui nhất thường gặp, ví có thể tụt bao nhiêu”. Chỉ số càng cao càng tốt: lời nhiều trên mỗi đồng rủi ro.
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: Lời ÷ rủi ro tăng ít nhất 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, rủi ro tụt vốn (95%) không tăng quá 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **ngẫu nhiên nhiều thông số** · đã thử 1005 phương án.

## Bot thật so với cấu hình tốt nhất

Trọng chốt (12/11): ưu tiên 2023–2025. Cấu hình mới được đề xuất khi tốt hơn bot thật ở 2023–2025 và năm 2026 không tệ hơn quá 5R (mức nhiễu của backtest).

| | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn lớn nhất (thực tế) | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | Lệnh 2026 (kín) | Tỷ lệ thắng | Tổng R | R/lệnh | Tụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 162 | 46.9% | 101.67R | 0.628 | 5.74R | 9.62R | 10.57 | 34 | 11.8% | -16.07R | -0.473 | 16.07R |
| **Tốt nhất** | 142 | 51.4% | 119.62R | 0.842 | 5.14R | 7.7R | 15.54 | 32 | 12.5% | -15.46R | -0.483 | 15.46R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Tỷ lệ thắng | Tổng R | Lệnh 2026 (kiểm tra kín) | Tỷ lệ thắng | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 28 | 50% | 28.06R | 7 | 0% | -5.66R |
| 1W | 10 | 50% | 7.46R | 2 | 0% | -2.04R |
| 4H | 104 | 51.9% | 84.1R | 23 | 17.4% | -7.75R |

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

### Vòng 102 — tinh chỉnh giá trị giữa · mốc: tổng 119.52R, win 51%, rủi ro tụt vốn 7.65R, lời÷rủi ro 15.62

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm ADX < 13 cạn lực giảm (Momentum): 2.5 → 2.38 (tinh chỉnh) | 119.52 | 51% | 0.836 | 7.65 | 15.62 | 0.724 | 0.963 | -15.46 |  |
| Lọc BTC: giá trên EMA bao nhiêu ngày: 150 → 138 (tinh chỉnh) | 118.77 | 50.7% | 0.825 | 7.87 | 15.09 | 0.724 | 0.938 | -14.14 |  |
| Lọc BTC: giá trên EMA bao nhiêu ngày: 150 → 163 (tinh chỉnh) | 118.77 | 50.7% | 0.825 | 7.87 | 15.09 | 0.724 | 0.938 | -14.14 |  |
| Trọng số phần Trend (/100): 15 → 12 (tinh chỉnh) | 117.3 | 49.7% | 0.82 | 7.81 | 15.02 | 0.73 | 0.92 | -15.46 |  |
| Trọng số phần Trend (/100): 15 → 19 (tinh chỉnh) | 118.3 | 50.3% | 0.816 | 8 | 14.79 | 0.69 | 0.963 | -15.46 |  |
| Trọng số phần Momentum (/100): 23 → 21 (tinh chỉnh) | 119.32 | 50.7% | 0.829 | 7.71 | 15.48 | 0.712 | 0.963 | -15.46 |  |
| Trọng số phần Momentum (/100): 23 → 25 (tinh chỉnh) | 118.05 | 50.3% | 0.826 | 7.76 | 15.21 | 0.724 | 0.941 | -15.46 |  |
| Trọng số phần Elliott (/100): 8 → 6 (tinh chỉnh) | 119.32 | 50.7% | 0.829 | 7.71 | 15.48 | 0.712 | 0.963 | -15.46 |  |
| Trọng số phần Elliott (/100): 8 → 10 (tinh chỉnh) | 117.3 | 49.7% | 0.82 | 7.81 | 15.02 | 0.73 | 0.92 | -15.46 |  |
| Trọng số phần Entry (/100): 30 → 28 (tinh chỉnh) | 119.32 | 50.7% | 0.829 | 7.71 | 15.48 | 0.712 | 0.963 | -15.46 |  |
| Trọng số phần Entry (/100): 30 → 33 (tinh chỉnh) | 117.3 | 49.7% | 0.82 | 7.81 | 15.02 | 0.73 | 0.92 | -15.46 |  |
| Trọng số phần R:R (/100): 30 → 25 (tinh chỉnh) | 117.3 | 49.7% | 0.82 | 7.81 | 15.02 | 0.73 | 0.92 | -14.44 |  |
| Trọng số phần R:R (/100): 30 → 35 (tinh chỉnh) | 117.79 | 50% | 0.807 | 7.9 | 14.91 | 0.69 | 0.941 | -15.46 |  |

### Vòng 101 — tinh chỉnh giá trị giữa · mốc: tổng 119.62R, win 51.4%, rủi ro tụt vốn 7.7R, lời÷rủi ro 15.54

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm ADX < 13 cạn lực giảm (Momentum): 2.5 → 2.25 (tinh chỉnh) | 119.62 | 51.4% | 0.842 | 7.7 | 15.54 | 0.724 | 0.979 | -15.46 |  |
| Cộng điểm phân kỳ dương ẩn: 3 → 2.63 (tinh chỉnh) | 119.62 | 51.4% | 0.842 | 7.7 | 15.54 | 0.724 | 0.979 | -15.46 |  |
| Cộng điểm phân kỳ dương ẩn: 3 → 3.5 (tinh chỉnh) | 119.43 | 51% | 0.835 | 7.96 | 15 | 0.712 | 0.979 | -15.46 |  |
| Lọc BTC: giá trên EMA bao nhiêu ngày: 150 → 125 (tinh chỉnh) | 118.87 | 51% | 0.831 | 8.05 | 14.77 | 0.724 | 0.953 | -14.14 |  |
| Lọc BTC: giá trên EMA bao nhiêu ngày: 150 → 175 (tinh chỉnh) | 118.87 | 51% | 0.831 | 8.05 | 14.77 | 0.724 | 0.953 | -14.14 |  |
| Trọng số phần Trend (/100): 15 → 8 (tinh chỉnh) | 117.4 | 50% | 0.827 | 7.8 | 15.05 | 0.73 | 0.935 | -14.44 |  |
| Trọng số phần Trend (/100): 15 → 23 (tinh chỉnh) | 117.44 | 50% | 0.804 | 7.99 | 14.7 | 0.69 | 0.936 | -15.46 |  |
| Trọng số phần Momentum (/100): 23 → 19 (tinh chỉnh) | 119.98 | 51% | 0.827 | 7.94 | 15.11 | 0.69 | 0.988 | -15.46 |  |
| Trọng số phần Momentum (/100): 23 → 27 (tinh chỉnh) | 118.15 | 50.7% | 0.832 | 7.75 | 15.25 | 0.724 | 0.957 | -15.46 |  |
| Trọng số phần Elliott (/100): 8 → 4 (tinh chỉnh) | 118.97 | 50.7% | 0.826 | 7.91 | 15.04 | 0.712 | 0.958 | -15.46 |  |
| Trọng số phần Elliott (/100): 8 → 12 (tinh chỉnh) | 118.98 | 50.3% | 0.832 | 7.86 | 15.14 | 0.73 | 0.944 | -14.44 |  |
| Trọng số phần Entry (/100): 30 → 25 (tinh chỉnh) | 117.89 | 50.3% | 0.813 | 8.01 | 14.72 | 0.69 | 0.957 | -15.46 |  |
| Trọng số phần Entry (/100): 30 → 35 (tinh chỉnh) | 117.4 | 50% | 0.827 | 7.86 | 14.94 | 0.73 | 0.935 | -15.46 |  |

### Vòng 100 — tinh chỉnh giá trị giữa · mốc: tổng 119.52R, win 51%, rủi ro tụt vốn 7.78R, lời÷rủi ro 15.36

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Cộng thêm ngưỡng điểm khung 1W: 0 → -1 (tinh chỉnh) | 119.52 | 51% | 0.836 | 7.78 | 15.36 | 0.724 | 0.963 | -15.46 |  |
| Cộng thêm ngưỡng điểm khung 1W: 0 → 2 (tinh chỉnh) | 118.77 | 50.3% | 0.831 | 7.82 | 15.19 | 0.73 | 0.941 | -15.88 |  |
| % chốt ở TP1: 0.3 → 0.287 (tinh chỉnh) | 119.52 | 51% | 0.836 | 7.81 | 15.3 | 0.723 | 0.964 | -15.44 |  |
| % chốt ở TP1: 0.3 → 0.307 (tinh chỉnh) | 119.51 | 51% | 0.836 | 7.78 | 15.36 | 0.724 | 0.962 | -15.47 |  |
| Khoảng cách tối thiểu TP1 (ATR): 0.75 → 0.688 (tinh chỉnh) | 121.49 | 48.6% | 0.88 | 8.37 | 14.51 | 0.727 | 1.058 | -13.7 |  |
| Khoảng cách tối thiểu TP1 (ATR): 0.75 → 0.813 (tinh chỉnh) | 120.82 | 49.7% | 0.8 | 8.42 | 14.35 | 0.734 | 0.873 | -15.85 |  |
| Trần điểm khi chart yếu (Trend < x): -0.3 → -0.375 (tinh chỉnh) | 119.52 | 51% | 0.836 | 7.78 | 15.36 | 0.724 | 0.963 | -15.46 |  |
| Trần điểm khi chart yếu (Trend < x): -0.3 → -0.225 (tinh chỉnh) | 119.52 | 51% | 0.836 | 7.78 | 15.36 | 0.724 | 0.963 | -15.46 |  |
| Khung lớn phải tăng (trend ≥): 0.4 → 0.375 (tinh chỉnh) | 116.26 | 50.3% | 0.813 | 7.92 | 14.68 | 0.694 | 0.944 | -15.46 |  |
| Khung lớn phải tăng (trend ≥): 0.4 → 0.425 (tinh chỉnh) | 115.75 | 50.4% | 0.833 | 7.98 | 14.51 | 0.686 | 1 | -15.5 |  |
| Điểm ADX < 13 cạn lực giảm (Momentum): 2.5 → 2 (tinh chỉnh) | 119.52 | 51% | 0.836 | 7.78 | 15.36 | 0.724 | 0.963 | -15.46 |  |
| Cộng điểm phân kỳ dương ẩn: 3 → 2.25 (tinh chỉnh) | 119.52 | 51% | 0.836 | 7.78 | 15.36 | 0.724 | 0.963 | -15.46 |  |
| Cộng điểm phân kỳ dương ẩn: 3 → 4 (tinh chỉnh) | 118.35 | 50% | 0.811 | 7.98 | 14.83 | 0.712 | 0.921 | -15.46 |  |

### Vòng 99 — từng thông số · mốc: tổng 119.52R, win 51%, rủi ro tụt vốn 7.74R, lời÷rủi ro 15.44

| Phương án | Tổng R | Tỷ lệ thắng | R/lệnh | Rủi ro tụt vốn (95%) | Lời ÷ rủi ro | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Đệm SL dưới vùng hỗ trợ (ATR): 1 → 0.95 | 126.87 | 50% | 0.835 | 8.41 | 15.09 | 0.69 | 1.004 | -15.37 |  |
| Đệm SL dưới vùng hỗ trợ (ATR): 1 → 1.05 | 101.36 | 48.5% | 0.756 | 8.49 | 11.94 | 0.589 | 0.939 | -17.26 |  |
| R:R tối thiểu riêng khung 4H: null → 2 | 126.33 | 42% | 0.396 | 12.2 | 10.35 | 0.411 | 0.384 | -12.71 |  |
| Đệm SL riêng khung 4H (ATR): null → 0.3 | 177.32 | 38.9% | 0.579 | 17.16 | 10.33 | 0.461 | 0.703 | -16.15 |  |
