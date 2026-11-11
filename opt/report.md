# Tối ưu tự động (chạy liên tục) — vòng 19

Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt. Backtest mọi nến 4H/1D/1W trong 6 năm gần nhất (từ 11/2020), có phí + funding, không tính BTC (BTC dành cho chiến lược RSI).

**Mục tiêu:** tăng tổng R + win rate, rủi ro thấp nhất → chỉ số chính = tổng R ÷ sụt vốn Monte Carlo 95% (xáo trộn thứ tự lệnh 2000 lần, lấy mức sụt vốn mà 95% trường hợp không vượt quá).
Chỉ chọn thông số trên phần **huấn luyện** (11/2020 → 11/2024). **24 tháng gần nhất là kiểm tra kín**: không dùng để chọn, chỉ để chấm hiệu quả thật.
Nhận thay đổi khi: chỉ số tăng ≥ 3%, tổng R không giảm quá 3%, win rate không giảm quá 0.5 điểm, sụt vốn MC95 không tệ hơn 5%, không xấu đi ở cả 2 nửa phần huấn luyện, số lệnh không giảm quá 30%.
⚠️ Các thay đổi Trọng duyệt trước 11/11/2026 21:30 đã được chọn khi nhìn toàn bộ dữ liệu, kể cả 24 tháng gần nhất → với chúng, phần kiểm tra kín không còn kín hoàn toàn.

Chế độ dò hiện tại: **từng thông số** · đã thử 12 phương án.

## Bot thật so với cấu hình tốt nhất

Cấu hình mới chỉ đáng tin khi THẮNG bot thật ở phần kiểm tra kín (24 tháng gần nhất). Thua ở đó thì bỏ, dù phần huấn luyện đẹp đến đâu.

| | Lệnh (huấn luyện) | Win rate | Tổng R | R/lệnh | Sụt vốn lớn nhất | Sụt vốn MC95 | Tổng R ÷ MC95 | Lệnh (kiểm tra kín) | Win rate | Tổng R | R/lệnh | Sụt vốn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bot thật | 208 | 44.2% | 99.17R | 0.477 | 12.91R | 13.75R | 7.21 | 132 | 33.3% | 5.32R | 0.04 | 14.92R |
| **Tốt nhất** | 208 | 44.2% | 99.17R | 0.477 | 12.91R | 13.75R | 7.21 | 132 | 33.3% | 5.32R | 0.04 | 14.92R |

## Theo khung (cấu hình tốt nhất)

| Khung | Lệnh huấn luyện | Win rate | Tổng R | Lệnh kiểm tra kín | Win rate | Tổng R |
|---|---|---|---|---|---|---|
| 1D | 36 | 36.1% | 18.17R | 18 | 38.9% | 5.64R |
| 1W | 14 | 57.1% | 6.57R | 5 | 0% | -4.58R |
| 4H | 158 | 44.9% | 74.43R | 109 | 33.9% | 4.26R |

## Thông số khác với bot thật

| Thông số | Bot thật | Đề xuất |
|---|---|---|
| Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) | 6 | **5** |

## Các thay đổi đã nhận (mới nhất trước)

| Vòng | Thông số | Từ → Thành | Tổng R | Win rate | MC95 | Chỉ số |
|---|---|---|---|---|---|---|
| 19 | Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) | 6 → 5 | 104.08R | 43.9% | 13.85R | 7.51 |

## 10 vòng gần nhất

### Vòng 19 — từng thông số · mốc: tổng 99.17R, win 44.2%, MC95 13.75R, chỉ số 7.21

| Phương án | Tổng R | Win rate | R/lệnh | MC95 | Chỉ số | Nửa đầu | Nửa sau | Kiểm tra kín (R) | Nhận? |
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
