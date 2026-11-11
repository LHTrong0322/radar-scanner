Phí: maker 0.015% · taker 0.045% · funding 10%/năm (đã trừ vào R) · 1 lệnh/mã như bot

## Phễu lọc kèo (thuật toán hiện tại) — mỗi nến được xét bị loại ở bước nào

| Bước | 4H | 1D | 1W |
|---|---|---|---|
| 1 nến xét | 411524 | 75808 | 9807 |
| 3 SL quá xa (> MAX_SL) | 3192 | 8736 | 6967 |
| 4 điểm thấp | 376149 | 61237 | 2461 |
|   ↳ trần 45: chart đang yếu | 187788 | 33310 | 823 |
|   ↳ trần 50: cấu trúc Dow chưa tăng | 298897 | 49702 | 1927 |
|   ↳ trần 55: R:R tới kháng cự gần nhất < 1 | 268485 | 41538 | 1675 |
| 5 khung lớn không tăng | 17183 | 3414 | 0 |
| 6 BTC dưới EMA200 | 2351 | 176 | 36 |
| 7 khung nhỏ chưa xác nhận | 7838 | 1295 | 214 |
| 8 điểm cuối < ngưỡng | 265 | 37 | 10 |
| 9 R:R TP1 < tối thiểu | 3408 | 598 | 79 |
| 10 ĐẠT CHUẨN | 1138 | 315 | 40 |
| 11 bỏ vì mã đang có lệnh | 630 | 228 | 23 |

## So sánh các phiên bản

| Phiên bản | Điểm hiệu quả (0–10) | Ổn định | Lệnh đóng | Win rate | Tổng R | R/lệnh | PF | Max DD | R năm 1 | R năm 2 | R 4H | R 1D | R 1W | Lệnh chờ khớp |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **main (hiện tại)** | 5 (mốc) | – | 123 | 33.3% | 8.16 | 0.066 | 1.14 | 12.16 | 7.37 (0.097/lệnh) | 0.79 (0.017/lệnh) | 3.95 | 7.36 | -3.15 | 18.4% |
| a-truoc-8-thay-doi | **4.3** | ❌ tệ hơn cả 2 năm | 138 | 31.9% | 3.95 | 0.029 | 1.06 | 14.04 | 5.81 (0.066/lệnh) | -1.86 (-0.037/lệnh) | 1.62 | 6.49 | -4.16 | 18.9% |
| b-truoc-13-thay-doi | **3.3** | ❌ tệ hơn cả 2 năm | 320 | 26.3% | -5.6 | -0.017 | 0.97 | 39.73 | 3.59 (0.017/lệnh) | -9.19 (-0.083/lệnh) | 9.52 | -7.96 | -7.15 | 27.5% |
- **a-truoc-8-thay-doi**: Thuật toán trước khi áp 8 thay đổi lúc 21:10 (khung lớn 0.3, trọng số Elliott 15/Entry 20/R:R 20, POC 2, EMA50 1.5, Fib sóng 2 = 2, Fib sóng 4 = 2.5)
- **b-truoc-13-thay-doi**: Thuật toán trước cả 5 thay đổi lúc 18:00 (TP1 50%, vào ngay 5, đệm SL 0.5 ATR, chờ 12 nến, vùng chờ ≥2) và 8 thay đổi lúc 21:10

## Hiệu quả từng phần (thuật toán hiện tại)

R trung bình mỗi lệnh: +0.066. Điểm hiệu quả 0–10: 5 = trung tính, trên 5 = giúp tăng lợi nhuận, dưới 5 = kéo lợi nhuận xuống (mỗi 0.05R chênh lệch = 1 điểm).

### Các phần của điểm /100 (so 1/3 lệnh có điểm phần đó cao nhất với 1/3 thấp nhất)

| Phần | Số lệnh | R/lệnh nhóm cao | R/lệnh nhóm thấp | Chênh lệch | Điểm hiệu quả |
|---|---|---|---|---|---|
| Trend | 123 | +0.068 | +0.063 | +0.005 | **5.1** |
| Momentum | 123 | +0.073 | +0.360 | -0.287 | **0** |
| Elliott | 122 | +0.018 | -0.019 | +0.037 | **5.7** |
| Entry | 123 | +0.138 | +0.055 | +0.083 | **6.7** |
| R:R | 123 | +0.293 | -0.053 | +0.346 | **10** |
| Divergence | 77 | -0.080 | +0.066 | -0.146 | **2.1** |
| SL | 123 | -0.143 | +0.097 | -0.239 | **0.2** |

### Các yếu tố vùng giá (lệnh CÓ yếu tố ở vị trí đó so với KHÔNG có)

| Yếu tố | Vị trí | Số lệnh có | R/lệnh khi có | R/lệnh khi không | Chênh lệch | Điểm hiệu quả |
|---|---|---|---|---|---|---|
| EMA 21 | SL | 23 | +0.621 | -0.061 | +0.682 | **10** (ít dữ liệu) |
| Đỉnh/đáy swing lớn | Entry | 28 | +0.413 | -0.036 | +0.449 | **10** (ít dữ liệu) |
| Đỉnh swing cũ / kháng cự cũ bị phá | SL | 49 | +0.316 | -0.099 | +0.414 | **10** |
| Đỉnh swing cũ / kháng cự cũ bị phá | Entry | 67 | +0.255 | -0.159 | +0.413 | **10** |
| Đỉnh/đáy Dow | TP1 | 41 | +0.303 | -0.052 | +0.355 | **10** |
| Đỉnh/đáy swing lớn | SL | 43 | +0.285 | -0.051 | +0.335 | **10** |
| EMA 21 | Entry | 37 | +0.180 | +0.017 | +0.163 | **8.3** |
| MACD (mức giá) | Entry | 10 | +0.214 | +0.053 | +0.161 | **8.2** (ít dữ liệu) |
| HVN | Entry | 18 | +0.174 | +0.048 | +0.126 | **7.5** (ít dữ liệu) |
| HVN | SL | 18 | +0.123 | +0.057 | +0.066 | **6.3** (ít dữ liệu) |
| EMA 200 | SL | 10 | +0.043 | +0.068 | -0.025 | **4.5** (ít dữ liệu) |
| EMA 50 | Entry | 16 | +0.039 | +0.070 | -0.032 | **4.4** (ít dữ liệu) |
| EMA 50 | SL | 19 | +0.031 | +0.073 | -0.042 | **4.2** (ít dữ liệu) |
| EMA 200 | Entry | 8 | +0.026 | +0.069 | -0.043 | **4.1** (ít dữ liệu) |
| Đỉnh sóng 1 (sàn sóng 4) | Entry | 11 | -0.002 | +0.073 | -0.075 | **3.5** (ít dữ liệu) |
| POC anchored | Entry | 16 | -0.012 | +0.078 | -0.090 | **3.2** (ít dữ liệu) |
| Đỉnh/đáy swing lớn | TP1 | 47 | +0.007 | +0.103 | -0.095 | **3.1** |
| POC anchored | SL | 17 | -0.043 | +0.084 | -0.127 | **2.5** (ít dữ liệu) |
| MACD (mức giá) | SL | 9 | -0.068 | +0.077 | -0.145 | **2.1** (ít dữ liệu) |
| Đỉnh/đáy Dow | SL | 52 | -0.027 | +0.135 | -0.162 | **1.8** |
| MACD histogram tăng | Entry | 9 | -0.093 | +0.079 | -0.171 | **1.6** (ít dữ liệu) |
| Mục tiêu Fibonacci Elliott | TP1 | 21 | -0.083 | +0.097 | -0.179 | **1.4** (ít dữ liệu) |
| Đỉnh/đáy Dow | Entry | 30 | -0.076 | +0.112 | -0.188 | **1.2** |
| Mây Ichimoku | SL | 32 | -0.174 | +0.151 | -0.324 | **0** |
| ADX/DI mạnh | Entry | 10 | -0.273 | +0.096 | -0.370 | **0** (ít dữ liệu) |
| RSI 45–55 | SL | 27 | -0.269 | +0.161 | -0.429 | **0** (ít dữ liệu) |
| Mây Ichimoku | Entry | 29 | -0.272 | +0.171 | -0.443 | **0** (ít dữ liệu) |
| RSI 45–55 | Entry | 28 | -0.306 | +0.176 | -0.483 | **0** (ít dữ liệu) |
| Break mây Ichimoku | SL | 10 | -0.477 | +0.114 | -0.591 | **0** (ít dữ liệu) |
| Break mây Ichimoku | Entry | 11 | -0.526 | +0.124 | -0.650 | **0** (ít dữ liệu) |

Lưu ý: đây là tương quan trong các lệnh đã đạt chuẩn vào kèo, không phải quan hệ nhân quả; yếu tố hay đi cùng nhau có thể "mượn" hiệu quả của nhau. Dùng để chọn thí nghiệm, sau đó kiểm chứng bằng so sánh phiên bản.
# Backtest LONG · 24-thang-so-sanh

Kỳ backtest: 730 ngày · chế độ LONG · 2026-11-11


### Tổng

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| Tất cả | 123 | 33.3% | 8.16 | 0.066 | 1.14 | 12.16 |

Kiểu thoát (A): tp2 9 · trail 0 · tp1_be 1 · struct 75 · sl 38 · expired 488 · open 1 · pending 0

Tỷ lệ lệnh chờ được khớp (A): 18.4%

### Theo khung

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| 1d | 19 | 42.1% | 7.36 | 0.387 | 1.76 | 2.54 |
| 1w | 3 | 0% | -3.15 | -1.05 | 0 | 3.15 |
| 4h | 101 | 32.7% | 3.95 | 0.039 | 1.09 | 11.2 |

### Theo điểm

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| 70-79 | 8 | 75% | 3.7 | 0.462 | 4.12 | 1.18 |
| 80-89 | 26 | 23.1% | -2.25 | -0.087 | 0.78 | 5.65 |
| 90+ | 89 | 32.6% | 6.71 | 0.075 | 1.15 | 10.41 |

### Vào ngay / Chờ hồi

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| limit | 109 | 35.8% | 13.05 | 0.12 | 1.27 | 12.16 |
| market | 14 | 14.3% | -4.89 | -0.349 | 0.43 | 5.46 |

### Theo quý (tính theo quý lệnh đóng)

| Quý | Lệnh đóng | Win rate | Tổng R | R/lệnh | Max DD trong quý | R 4H | R 1D | R 1W | R luỹ kế |
|---|---|---|---|---|---|---|---|---|---|
| 2024-Q4 | 13 | 53.8% | +8.29 | 0.638 | 1.83 | 8.29 | – | – | 8.3 |
| 2025-Q1 | 8 | 0% | -6.68 | -0.834 | 6.68 | -3.91 | -1.72 | -1.04 | 1.6 |
| 2025-Q2 | 6 | 16.7% | -1 | -0.167 | 3.78 | 0.1 | – | -1.09 | 0.6 |
| 2025-Q3 | 32 | 40.6% | +5.63 | 0.176 | 7.92 | -0.38 | 5.99 | – | 6.2 |
| 2025-Q4 | 17 | 35.3% | +1.13 | 0.066 | 4.17 | -1.93 | 3.07 | – | 7.4 |
| 2026-Q1 | 1 | 100% | +2.37 | 2.369 | 0 | – | 2.37 | – | 9.7 |
| 2026-Q3 | 31 | 38.7% | +9.63 | 0.311 | 3.05 | 9.42 | 0.2 | – | 19.4 |
| 2026-Q4 | 15 | 6.7% | -11.21 | -0.747 | 11.21 | -7.66 | -2.53 | -1.01 | 8.2 |

### Theo năm

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| 2024 | 15 | 46.7% | 6.53 | 0.435 | 2.23 | 3.46 |
| 2025 | 62 | 33.9% | 3.21 | 0.052 | 1.1 | 8.7 |
| 2026 | 46 | 28.3% | -1.58 | -0.034 | 0.92 | 11.5 |

### Crypto / cổ phiếu

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| crypto | 99 | 31.3% | 2.48 | 0.025 | 1.06 | 10.96 |
| cổ phiếu | 24 | 41.7% | 5.67 | 0.236 | 1.44 | 4.48 |

### Theo số TP

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| 2 TP | 123 | 33.3% | 8.16 | 0.066 | 1.14 | 12.16 |

### 10 mã tốt nhất / tệ nhất (A)

- DASH: 6.57R (2 lệnh)
- QQQ: 5.62R (1 lệnh)
- ICP: 4.03R (3 lệnh)
- PENDLE: 3.65R (2 lệnh)
- SKY: 3.29R (1 lệnh)
- AVGO: 3.25R (1 lệnh)
- RENDER: 3.03R (2 lệnh)
- SPX: 2.24R (3 lệnh)
- CAKE: 2.13R (2 lệnh)
- VIRTUAL: 2.02R (1 lệnh)
…
- SEI: -1.35R (4 lệnh)
- ATOM: -1.4R (2 lệnh)
- MORPHO: -1.43R (2 lệnh)
- ETC: -1.5R (3 lệnh)
- AVAX: -1.53R (2 lệnh)
- KCS: -1.6R (2 lệnh)
- SPY500: -1.99R (2 lệnh)
- TAO: -2.02R (2 lệnh)
- ALGO: -2.03R (2 lệnh)
- AAVE: -2.64R (3 lệnh)

Lưu ý: backtest dùng nến đã đóng, khi một nến chạm cả SL lẫn TP thì tính SL trước (thận trọng); chưa tính phí giao dịch, funding và trượt giá.

Không lấy được dữ liệu: OHM, SAFO, SOFID, QFI