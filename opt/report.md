# Tối ưu tự động (chạy liên tục) — vòng 21

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong từ 01/2023 tới nay, có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = tổng R ÷ sụt vốn Monte Carlo 95% (xáo trộn thứ tự lệnh 2000 lần, lấy mức sụt vốn mà 95% trường hợp không vượt quá).
Chỉ chọn thông số trên **01/2023 → 12/2025** (Trọng chốt). **năm 2026 là kiểm tra kín** (dữ liệu mới nhất): không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: chỉ số tăng ≥ 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, sụt vốn MC95 không tệ hơn 5%, không xấu đi ở cả 2 nửa 2023–2025 (01/2023–06/2024 và 07/2024–12/2025), số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả giai đoạn kiểm tra kín → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 24 phương án.

## Bot thật so với cấu hình tốt nhất

Cấu hình mới chỉ đáng tin khi THẮNG bot thật ở phần kiểm tra kín (năm 2026). Thua ở đó thì bỏ, dù phần huấn luyện đẹp đến đâu.

| | Lệnh 2023–2025 | Win rate | Tổng R | R/lệnh | Sụt vốn lớn nhất | Sụt vốn MC95 | Tổng R ÷ MC95 | Lệnh 2026 (kín) | Win rate | Tổng R | R/lệnh | Sụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 215 | 37.7% | 52.84R | 0.246 | 12.91R | 19.58R | 2.70 | 47 | 23.4% | -7.54R | -0.16 | 14.92R |
| **Tốt nhất** | 215 | 37.7% | 52.84R | 0.246 | 12.91R | 19.58R | 2.70 | 47 | 23.4% | -7.54R | -0.16 | 14.92R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh 2023–2025 | Win rate | Tổng R | Lệnh 2026 (kiểm tra kín) | Win rate | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 36 | 30.6% | 8.32R | 4 | 25% | -2.34R |
| 1W | 13 | 46.2% | 3.53R | 1 | 0% | -1.01R |
| 4H | 166 | 38.6% | 40.99R | 42 | 23.8% | -4.19R |

## Thông số khác với bot thật

| Thông số | Bot thật | Đề xuất |
|---|---|---|
| Điểm tối thiểu của vùng đặt SL | 2 | **3** |
| Số nến mỗi bên để xác định đỉnh/đáy Dow | 5 | **4** |

## Các thay đổi đã nhận (mới nhất trước)

| Vòng | Thông số | Từ → Thành | Tổng R | Win rate | MC95 | Chỉ số |
|---|---|---|---|---|---|---|
| 21 | Điểm tối thiểu của vùng đặt SL | 2 → 3 | 54.36R | 37.7% | 19.55R | 2.78 |
| 21 | Số nến mỗi bên để xác định đỉnh/đáy Dow | 5 → 4 | 73.82R | 39.5% | 15.56R | 4.74 |
| 19 (hoàn tác) | Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) | 6 → 5 | 104.08R | 43.9% | 13.85R | 7.51 |

## 10 vòng gần nhất

### Vòng 21 — từng thông số · mốc: tổng 52.84R, win 37.7%, MC95 19.58R, chỉ số 2.70

| Phương án | Tổng R | Win rate | R/lệnh | MC95 | Chỉ số | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Điểm tối thiểu của vùng đặt SL: 2 → 1 | 52.84 | 37.7% | 0.246 | 19.58 | 2.7 | 0.289 | 0.202 | -7.54 |  |
| Điểm tối thiểu của vùng đặt SL: 2 → 3 | 54.36 | 37.7% | 0.253 | 19.55 | 2.78 | 0.303 | 0.202 | -7.54 | ✅ |
| % chốt ở TP1: 0.3 → 0.25 | 53.36 | 37.7% | 0.248 | 19.7 | 2.71 | 0.293 | 0.202 | -7.64 |  |
| % chốt ở TP1: 0.3 → 0.33 | 52.53 | 37.7% | 0.244 | 19.53 | 2.69 | 0.286 | 0.201 | -7.48 |  |
| Khoảng cách tối thiểu TP1 (ATR): 0.75 → 0.5 | 26.2 | 34.4% | 0.164 | 20.28 | 1.29 | 0.204 | 0.118 | -0.58 |  |
| Khoảng cách tối thiểu TP1 (ATR): 0.75 → 1 | 64.94 | 37.8% | 0.248 | 19.53 | 3.33 | 0.39 | 0.101 | -7.35 |  |
| Lệnh chờ hết hạn sau (nến): 8 → 6 | 25.59 | 35.7% | 0.15 | 21.19 | 1.21 | 0.204 | 0.095 | -3.77 |  |
| Lệnh chờ hết hạn sau (nến): 8 → 10 | 50.88 | 36.1% | 0.214 | 21.22 | 2.4 | 0.287 | 0.145 | -9.46 |  |
| Điểm tối thiểu vùng đặt lệnh chờ: 3 → 2 | 52.39 | 39% | 0.246 | 18.71 | 2.8 | 0.26 | 0.231 | -7.86 |  |
| Điểm tối thiểu vùng đặt lệnh chờ: 3 → 4 | 46.22 | 36.3% | 0.215 | 20.9 | 2.21 | 0.291 | 0.137 | -9.25 |  |
| Số nến mỗi bên để xác định đỉnh/đáy Dow: 5 → 4 | 73.82 | 39.5% | 0.336 | 15.56 | 4.74 | 0.3 | 0.376 | -5.44 | ✅ |
| Số nến mỗi bên để xác định đỉnh/đáy Dow: 5 → 7 | 47.6 | 37.6% | 0.252 | 16.45 | 2.89 | 0.351 | 0.181 | -1.38 |  |

Nhận: Số nến mỗi bên để xác định đỉnh/đáy Dow 5 → 4 · Điểm tối thiểu của vùng đặt SL 2 → 3

### Vòng 20 — từng thông số
Trọng chốt: tối ưu trên 01/2023 → 12/2025, kiểm tra kín năm 2026 → bắt đầu lại từ cấu hình bot thật

### Vòng 20 — từng thông số · mốc: tổng 7.61R, win 40%, MC95 10.4R, chỉ số 0.73
Gộp các thay đổi vòng 19 làm chỉ số giảm (7.21 → 0.73) → hoàn tác

### Vòng 19 — từng thông số · mốc: tổng 99.17R, win 44.2%, MC95 13.75R, chỉ số 7.21

| Phương án | Tổng R | Win rate | R/lệnh | MC95 | Chỉ số | R/lệnh 01/23–06/24 | R/lệnh 07/24–12/25 | Kiểm tra kín (R) | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngưỡng điểm vào kèo: 70 → 65 | 99.22 | 44.8% | 0.468 | 13.54 | 7.33 | 0.713 | 0.322 | 6.03 |  |
| Ngưỡng điểm vào kèo: 70 → 75 | 94.15 | 44.1% | 0.466 | 14.18 | 6.64 | 0.737 | 0.303 | 6.26 |  |
| R:R tối thiểu tới TP1: 2.5 → 2 | 139.06 | 40.8% | 0.373 | 15.87 | 8.76 | 0.467 | 0.322 | -15.87 |  |
| R:R tối thiểu tới TP1: 2.5 → 3 | 37.95 | 32% | 0.311 | 18.95 | 2 | 0.405 | 0.258 | 8.18 |  |
| Ngưỡng điểm 'vào ngay' (tín hiệu mạnh): 6 → 5 | 104.08 | 43.9% | 0.508 | 13.85 | 7.51 | 0.744 | 0.368 | -0.92 | ✅ |
| Ngưỡng điểm 'vào ngay' (tín hiệu mạnh): 6 → 7 | 97.62 | 44.2% | 0.474 | 13.69 | 7.13 | 0.787 | 0.275 | 5.31 |  |
| SL tối đa (% Entry): 0.35 → 0.2 | 82.78 | 41.6% | 0.42 | 15.64 | 5.29 | 0.687 | 0.27 | 8.94 |  |
| SL tối đa (% Entry): 0.35 → 0.5 | 93.53 | 44.5% | 0.443 | 13.99 | 6.69 | 0.722 | 0.27 | 2.82 |  |
| Đệm SL dưới vùng hỗ trợ (ATR): 1 → 0.8 | 129.4 | 41.7% | 0.5 | 15.5 | 8.35 | 0.632 | 0.417 | 0.25 |  |
| Đệm SL dưới vùng hỗ trợ (ATR): 1 → 1.2 | 63.13 | 40.1% | 0.357 | 14.93 | 4.23 | 0.503 | 0.27 | 12.35 |  |
| R:R tối thiểu riêng khung 4H: null → 2 | 120.83 | 39.4% | 0.34 | 16.55 | 7.3 | 0.506 | 0.249 | -1.84 |  |
| Đệm SL riêng khung 4H (ATR): null → 0.3 | 122.1 | 31.5% | 0.299 | 30.93 | 3.95 | 0.344 | 0.272 | -0.69 |  |

Nhận: Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) 6 → 5
