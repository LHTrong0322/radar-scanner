Phí: maker 0.015% · taker 0.045% · funding 10%/năm (đã trừ vào R) · 1 lệnh/mã như bot

## Phễu lọc kèo (thuật toán hiện tại) — mỗi nến được xét bị loại ở bước nào

| Bước | 4H | 1D | 1W |
|---|---|---|---|
| 1 nến xét | 575367 | 99456 | 12519 |
| 3 SL quá xa (> MAX_SL) | 5004 | 12984 | 9863 |
| 4 điểm thấp | 529354 | 79917 | 2268 |
|   ↳ trần 45: chart đang yếu | 267872 | 46001 | 634 |
|   ↳ trần 50: cấu trúc Dow chưa tăng | 419057 | 65148 | 1748 |
|   ↳ trần 55: R:R tới kháng cự gần nhất < 1 | 371694 | 53410 | 1512 |
| 5 khung lớn không tăng | 23891 | 4236 | 0 |
| 6 BTC chưa có cấu trúc tăng | 4967 | 432 | 39 |
| 6 BTC dưới EMA200 | 2897 | 194 | 50 |
| 7 khung nhỏ chưa xác nhận | 5650 | 903 | 183 |
| 8 điểm cuối < ngưỡng | 172 | 95 | 9 |
| 9 R:R TP1 < tối thiểu | 2536 | 454 | 64 |
| 10 ĐẠT CHUẨN | 896 | 241 | 43 |
| 11 bỏ vì mã đang có lệnh | 469 | 161 | 27 |

## Hiệu quả từng phần (thuật toán hiện tại)

R trung bình mỗi lệnh: +0.409. Điểm hiệu quả 0–10: 5 = trung tính, trên 5 = giúp tăng lợi nhuận, dưới 5 = kéo lợi nhuận xuống (mỗi 0.05R chênh lệch = 1 điểm).

### Các phần của điểm /100 (so 1/3 lệnh có điểm phần đó cao nhất với 1/3 thấp nhất)

| Phần | Số lệnh | R/lệnh nhóm cao | R/lệnh nhóm thấp | Chênh lệch | Điểm hiệu quả |
|---|---|---|---|---|---|
| Trend | 92 | +0.261 | +0.270 | -0.009 | **4.8** |
| Momentum | 92 | +0.989 | +0.502 | +0.487 | **10** |
| Elliott | 92 | +0.296 | +0.371 | -0.075 | **3.5** |
| Entry | 92 | +0.388 | +0.217 | +0.171 | **8.4** |
| R:R | 92 | +0.419 | +0.403 | +0.015 | **5.3** |
| Divergence | 59 | +0.680 | +0.448 | +0.232 | **9.6** |
| SL | 92 | +0.433 | +0.234 | +0.199 | **9** |

### Các yếu tố vùng giá (lệnh CÓ yếu tố ở vị trí đó so với KHÔNG có)

| Yếu tố | Vị trí | Số lệnh có | R/lệnh khi có | R/lệnh khi không | Chênh lệch | Điểm hiệu quả |
|---|---|---|---|---|---|---|
| EMA 50 | SL | 8 | +1.284 | +0.326 | +0.958 | **10** (ít dữ liệu) |
| HVN | Entry | 9 | +1.270 | +0.316 | +0.954 | **10** (ít dữ liệu) |
| Đỉnh swing cũ / kháng cự cũ bị phá | SL | 34 | +0.841 | +0.156 | +0.684 | **10** |
| MACD (mức giá) | Entry | 14 | +0.955 | +0.311 | +0.644 | **10** (ít dữ liệu) |
| ADX/DI mạnh | Entry | 12 | +0.846 | +0.344 | +0.502 | **10** (ít dữ liệu) |
| POC anchored | Entry | 12 | +0.845 | +0.344 | +0.501 | **10** (ít dữ liệu) |
| POC anchored | SL | 11 | +0.839 | +0.351 | +0.488 | **10** (ít dữ liệu) |
| MACD histogram tăng | Entry | 11 | +0.817 | +0.354 | +0.463 | **10** (ít dữ liệu) |
| EMA 21 | SL | 17 | +0.746 | +0.333 | +0.413 | **10** (ít dữ liệu) |
| Đỉnh swing cũ / kháng cự cũ bị phá | Entry | 44 | +0.583 | +0.250 | +0.333 | **10** |
| Mục tiêu Fibonacci Elliott | TP1 | 13 | +0.437 | +0.405 | +0.032 | **5.6** (ít dữ liệu) |
| RSI 45–55 | SL | 13 | +0.416 | +0.408 | +0.007 | **5.1** (ít dữ liệu) |
| EMA 50 | Entry | 9 | +0.341 | +0.417 | -0.075 | **3.5** (ít dữ liệu) |
| RSI 45–55 | Entry | 21 | +0.274 | +0.449 | -0.175 | **1.5** (ít dữ liệu) |
| EMA 21 | Entry | 28 | +0.262 | +0.474 | -0.211 | **0.8** (ít dữ liệu) |
| Mây Ichimoku | SL | 27 | +0.239 | +0.480 | -0.241 | **0.2** (ít dữ liệu) |
| Mây Ichimoku | Entry | 21 | +0.219 | +0.466 | -0.246 | **0.1** (ít dữ liệu) |
| Đỉnh/đáy swing lớn | SL | 32 | +0.213 | +0.514 | -0.301 | **0** |
| Đỉnh/đáy Dow | SL | 36 | +0.153 | +0.574 | -0.421 | **0** |
| Break mây Ichimoku | SL | 10 | -0.010 | +0.460 | -0.470 | **0** (ít dữ liệu) |
| Đỉnh/đáy Dow | Entry | 24 | +0.030 | +0.543 | -0.513 | **0** (ít dữ liệu) |
| Đỉnh/đáy swing lớn | TP1 | 32 | +0.050 | +0.601 | -0.551 | **0** |
| Break mây Ichimoku | Entry | 9 | -0.099 | +0.465 | -0.564 | **0** (ít dữ liệu) |
| RSI 70/30 | TP1 | 8 | -0.139 | +0.462 | -0.601 | **0** (ít dữ liệu) |
| Đỉnh/đáy swing lớn | Entry | 23 | -0.098 | +0.578 | -0.676 | **0** (ít dữ liệu) |
| Đỉnh/đáy Dow | TP1 | 32 | -0.048 | +0.653 | -0.701 | **0** |

Lưu ý: đây là tương quan trong các lệnh đã đạt chuẩn vào kèo, không phải quan hệ nhân quả; yếu tố hay đi cùng nhau có thể "mượn" hiệu quả của nhau. Dùng để chọn thí nghiệm, sau đó kiểm chứng bằng so sánh phiên bản.
# Backtest LONG · khong-1h-2-nam

Kỳ backtest: 730 ngày · chế độ LONG · 2026-11-11


### Tổng

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| Tất cả | 92 | 41.3% | 37.66 | 0.409 | 2.05 | 13.91 |

Kiểu thoát (A): tp2 13 · trail 0 · tp1_be 0 · struct 55 · sl 24 · expired 403 · open 0 · pending 0

Tỷ lệ lệnh chờ được khớp (A): 20.7%

### Theo khung

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| 1d | 17 | 35.3% | 4.56 | 0.268 | 1.61 | 6.54 |
| 1w | 5 | 20% | 0.34 | 0.069 | 1.1 | 3.54 |
| 4h | 70 | 44.3% | 32.75 | 0.468 | 2.32 | 6.18 |

### Theo điểm

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| 70-79 | 8 | 50% | 1.32 | 0.165 | 1.63 | 1.25 |
| 80-89 | 25 | 28% | 2.57 | 0.103 | 1.27 | 6.62 |
| 90+ | 59 | 45.8% | 33.77 | 0.572 | 2.39 | 6.43 |

### Vào ngay / Chờ hồi

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| limit | 77 | 42.9% | 29.05 | 0.377 | 1.98 | 10.84 |
| market | 15 | 33.3% | 8.61 | 0.574 | 2.35 | 5.66 |

### Theo quý (tính theo quý lệnh đóng)

| Quý | Lệnh đóng | Win rate | Tổng R | R/lệnh | Max DD trong quý | R 4H | R 1D | R 1W | R luỹ kế |
|---|---|---|---|---|---|---|---|---|---|
| 2024-Q4 | 23 | 52.2% | +22.46 | 0.976 | 4.05 | 21.65 | 0.8 | – | 22.5 |
| 2025-Q1 | 6 | 100% | +8.67 | 1.446 | 0 | 5.37 | 3.3 | – | 31.1 |
| 2025-Q2 | 7 | 28.6% | +1.56 | 0.223 | 1.9 | 1.91 | -0.34 | – | 32.7 |
| 2025-Q3 | 14 | 64.3% | +14.73 | 1.052 | 1.19 | 8.16 | 6.56 | – | 47.4 |
| 2025-Q4 | 6 | 50% | +0.27 | 0.045 | 1.05 | 0.53 | -0.26 | – | 47.7 |
| 2026-Q1 | 5 | 20% | +1.39 | 0.277 | 2.5 | -1.01 | -1.23 | 3.63 | 49.1 |
| 2026-Q2 | 8 | 12.5% | -6.14 | -0.768 | 6.81 | -2.43 | -2.45 | -1.25 | 42.9 |
| 2026-Q3 | 17 | 23.5% | -0.31 | -0.018 | 6.23 | 1.74 | -1.02 | -1.03 | 42.6 |
| 2026-Q4 | 6 | 0% | -4.96 | -0.826 | 4.96 | -3.16 | -0.78 | -1.01 | 37.7 |

### Theo năm

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| 2024 | 23 | 52.2% | 22.46 | 0.976 | 4.76 | 4.05 |
| 2025 | 35 | 60% | 28.87 | 0.825 | 5.14 | 1.9 |
| 2026 | 34 | 14.7% | -13.66 | -0.402 | 0.41 | 13.66 |

### Crypto / cổ phiếu

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| crypto | 57 | 43.9% | 31.71 | 0.556 | 2.76 | 5.21 |
| cổ phiếu | 35 | 37.1% | 5.95 | 0.17 | 1.33 | 13.68 |

### Theo số TP

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| 2 TP | 92 | 41.3% | 37.66 | 0.409 | 2.05 | 13.91 |

### 10 mã tốt nhất / tệ nhất (A)

- DASH: 6.43R (1 lệnh)
- LTC: 4.87R (1 lệnh)
- BNB: 4.8R (2 lệnh)
- LINK: 4.19R (2 lệnh)
- HOOD: 3.94R (1 lệnh)
- ENA: 3.45R (1 lệnh)
- SPX: 3.26R (2 lệnh)
- SUSHI: 3.21R (1 lệnh)
- CAKE: 3.15R (1 lệnh)
- AVGO: 2.7R (2 lệnh)
…
- 0G: -1.02R (1 lệnh)
- NIL: -1.02R (1 lệnh)
- NOT: -1.02R (1 lệnh)
- RENDER: -1.02R (1 lệnh)
- SUI: -1.02R (1 lệnh)
- TRB: -1.02R (1 lệnh)
- ORCL: -1.03R (1 lệnh)
- PLTR: -1.26R (2 lệnh)
- NVDA: -1.47R (2 lệnh)
- AAPL: -1.92R (2 lệnh)

Lưu ý: backtest dùng nến đã đóng, khi một nến chạm cả SL lẫn TP thì tính SL trước (thận trọng); chưa tính phí giao dịch, funding và trượt giá.