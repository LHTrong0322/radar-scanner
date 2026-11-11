Phí: maker 0.015% · taker 0.045% · funding 10%/năm (đã trừ vào R) · 1 lệnh/mã như bot

## Phễu lọc kèo (thuật toán hiện tại) — mỗi nến được xét bị loại ở bước nào

| Bước | 4H | 1D | 1W |
|---|---|---|---|
| 1 nến xét | 214707 | 39028 | 5005 |
| 3 SL quá xa (> MAX_SL) | 1786 | 5082 | 3780 |
| 4 điểm thấp | 196619 | 31072 | 1036 |
|   ↳ trần 45: chart đang yếu | 94649 | 16266 | 348 |
|   ↳ trần 50: cấu trúc Dow chưa tăng | 154857 | 24833 | 766 |
|   ↳ trần 55: R:R tới kháng cự gần nhất < 1 | 138781 | 20805 | 744 |
| 5 khung lớn không tăng | 8951 | 1688 | 0 |
| 6 BTC chưa có cấu trúc tăng | 2459 | 186 | 16 |
| 6 BTC dưới EMA200 | 943 | 55 | 5 |
| 7 khung nhỏ chưa xác nhận | 2445 | 574 | 100 |
| 8 điểm cuối < ngưỡng | 57 | 39 | 4 |
| 9 R:R TP1 < tối thiểu | 1052 | 235 | 38 |
| 10 ĐẠT CHUẨN | 395 | 97 | 26 |
| 11 bỏ vì mã đang có lệnh | 207 | 57 | 16 |

## Hiệu quả từng phần (thuật toán hiện tại)

R trung bình mỗi lệnh: +0.486. Điểm hiệu quả 0–10: 5 = trung tính, trên 5 = giúp tăng lợi nhuận, dưới 5 = kéo lợi nhuận xuống (mỗi 0.05R chênh lệch = 1 điểm).

### Các phần của điểm /100 (so 1/3 lệnh có điểm phần đó cao nhất với 1/3 thấp nhất)

| Phần | Số lệnh | R/lệnh nhóm cao | R/lệnh nhóm thấp | Chênh lệch | Điểm hiệu quả |
|---|---|---|---|---|---|
| Trend | 49 | -0.002 | +0.152 | -0.154 | **1.9** |
| Momentum | 49 | +0.590 | +1.005 | -0.415 | **0** |
| Elliott | 49 | +0.474 | +0.550 | -0.077 | **3.5** |
| Entry | 49 | +0.396 | -0.012 | +0.408 | **10** |
| R:R | 49 | +0.750 | +0.586 | +0.164 | **8.3** |
| Divergence | 32 | -0.044 | +0.068 | -0.112 | **2.8** |
| SL | 49 | +1.057 | +0.032 | +1.025 | **10** |

### Các yếu tố vùng giá (lệnh CÓ yếu tố ở vị trí đó so với KHÔNG có)

| Yếu tố | Vị trí | Số lệnh có | R/lệnh khi có | R/lệnh khi không | Chênh lệch | Điểm hiệu quả |
|---|---|---|---|---|---|---|
| Đỉnh/đáy swing lớn | TP1 | 15 | +1.399 | +0.084 | +1.315 | **10** (ít dữ liệu) |
| Đỉnh swing cũ / kháng cự cũ bị phá | SL | 20 | +1.024 | +0.115 | +0.909 | **10** (ít dữ liệu) |
| Mây Ichimoku | SL | 18 | +0.743 | +0.337 | +0.406 | **10** (ít dữ liệu) |
| Mây Ichimoku | Entry | 13 | +0.755 | +0.389 | +0.366 | **10** (ít dữ liệu) |
| Đỉnh/đáy swing lớn | Entry | 14 | +0.662 | +0.416 | +0.245 | **9.9** (ít dữ liệu) |
| Đỉnh/đáy Dow | TP1 | 14 | +0.624 | +0.431 | +0.193 | **8.9** (ít dữ liệu) |
| Đỉnh/đáy Dow | Entry | 15 | +0.584 | +0.443 | +0.141 | **7.8** (ít dữ liệu) |
| Đỉnh swing cũ / kháng cự cũ bị phá | Entry | 23 | +0.442 | +0.526 | -0.084 | **3.3** (ít dữ liệu) |
| Đỉnh/đáy swing lớn | SL | 18 | +0.413 | +0.529 | -0.116 | **2.7** (ít dữ liệu) |
| Đỉnh/đáy Dow | SL | 18 | +0.404 | +0.534 | -0.131 | **2.4** (ít dữ liệu) |
| RSI 45–55 | Entry | 11 | +0.158 | +0.582 | -0.424 | **0** (ít dữ liệu) |
| EMA 21 | Entry | 15 | +0.003 | +0.700 | -0.697 | **0** (ít dữ liệu) |

Lưu ý: đây là tương quan trong các lệnh đã đạt chuẩn vào kèo, không phải quan hệ nhân quả; yếu tố hay đi cùng nhau có thể "mượn" hiệu quả của nhau. Dùng để chọn thí nghiệm, sau đó kiểm chứng bằng so sánh phiên bản.
# Backtest LONG · tran-rui-ro-60

Kỳ backtest: 1410 ngày · chế độ LONG · 2026-11-11


### Tổng

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| Tất cả | 49 | 40.8% | 23.83 | 0.486 | 2.27 | 5.02 |

Kiểu thoát (A): tp2 4 · trail 0 · tp1_be 2 · struct 30 · sl 13 · expired 189 · open 0 · pending 0

Tỷ lệ lệnh chờ được khớp (A): 19.2%

### Theo khung

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| 1d | 8 | 37.5% | 9.22 | 1.152 | 4.01 | 2.05 |
| 1w | 5 | 20% | -2.24 | -0.448 | 0.1 | 2.24 |
| 4h | 36 | 44.4% | 16.85 | 0.468 | 2.28 | 5.97 |

### Theo điểm

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| 70-79 | 7 | 42.9% | 7.11 | 1.016 | 5.28 | 1.19 |
| 80-89 | 11 | 45.5% | 10.21 | 0.928 | 4.36 | 2.85 |
| 90+ | 31 | 38.7% | 6.51 | 0.21 | 1.46 | 4.19 |

### Vào ngay / Chờ hồi

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| limit | 45 | 40% | 18.91 | 0.42 | 2.11 | 6.99 |
| market | 4 | 50% | 4.92 | 1.23 | 3.79 | 1.04 |

### Theo quý (tính theo quý lệnh đóng)

| Quý | Lệnh đóng | Win rate | Tổng R | R/lệnh | Max DD trong quý | R 4H | R 1D | R 1W | R luỹ kế |
|---|---|---|---|---|---|---|---|---|---|
| 2023-Q1 | 1 | 100% | +0.79 | 0.792 | 0 | 0.79 | – | – | 0.8 |
| 2023-Q2 | 1 | 0% | -1.01 | -1.011 | 1.01 | – | -1.01 | – | -0.2 |
| 2023-Q4 | 14 | 50% | +1.61 | 0.115 | 3.28 | 2.69 | – | -1.1 | 1.4 |
| 2024-Q1 | 7 | 71.4% | +16.98 | 2.426 | 0.2 | 8.63 | 8.34 | – | 18.4 |
| 2024-Q2 | 2 | 0% | -0.5 | -0.248 | 0.5 | – | -0.49 | – | 17.9 |
| 2024-Q3 | 3 | 0% | -1.68 | -0.56 | 1.68 | – | -1.56 | -0.13 | 16.2 |
| 2024-Q4 | 8 | 50% | +9.67 | 1.209 | 2.13 | 9.68 | – | – | 25.9 |
| 2025-Q2 | 3 | 66.7% | -0.69 | -0.229 | 1.01 | -0.95 | – | 0.26 | 25.2 |
| 2025-Q3 | 2 | 50% | +3.66 | 1.83 | 0.28 | -0.28 | 3.94 | – | 28.8 |
| 2025-Q4 | 2 | 0% | -1.31 | -0.655 | 1.31 | -1.31 | – | – | 27.5 |
| 2026-Q1 | 1 | 0% | -0.25 | -0.248 | 0.25 | – | – | -0.25 | 27.3 |
| 2026-Q2 | 1 | 0% | -1.01 | -1.014 | 1.01 | -1.01 | – | – | 26.3 |
| 2026-Q3 | 3 | 0% | -2.37 | -0.789 | 2.37 | -1.33 | – | -1.03 | 23.9 |
| 2026-Q4 | 1 | 0% | -0.08 | -0.078 | 0.08 | -0.08 | – | – | 23.8 |

### Theo năm

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| 2023 | 16 | 50% | 1.4 | 0.087 | 1.2 | 4.29 |
| 2024 | 21 | 47.6% | 24.74 | 1.178 | 5.44 | 2.18 |
| 2025 | 7 | 28.6% | 1.16 | 0.165 | 1.41 | 1.56 |
| 2026 | 5 | 0% | -3.46 | -0.692 | 0 | 3.46 |

### Crypto / cổ phiếu

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| crypto | 38 | 42.1% | 16.18 | 0.426 | 2.18 | 4.96 |
| cổ phiếu | 11 | 36.4% | 7.65 | 0.696 | 2.51 | 2.43 |

### Theo số TP

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| 2 TP | 49 | 40.8% | 23.83 | 0.486 | 2.27 | 5.02 |

### 10 mã tốt nhất / tệ nhất (A)

- HOOD: 11.45R (4 lệnh)
- POLYX: 8.07R (1 lệnh)
- AERO: 4.34R (1 lệnh)
- IO: 3.08R (1 lệnh)
- NEAR: 2.74R (1 lệnh)
- MERL: 2.59R (2 lệnh)
- SHIB: 1.52R (2 lệnh)
- LDO: 1.14R (3 lệnh)
- OP: 0.89R (1 lệnh)
- ZEC: 0.58R (4 lệnh)
…
- HYPE: -0.28R (1 lệnh)
- PYTH: -0.4R (1 lệnh)
- VIRTUAL: -0.75R (1 lệnh)
- ALGO: -0.83R (4 lệnh)
- KAS: -1.01R (1 lệnh)
- ONDO: -1.01R (1 lệnh)
- IMX: -1.35R (2 lệnh)
- PLTR: -1.8R (3 lệnh)
- ORCL: -2.13R (2 lệnh)
- CFX: -3.05R (3 lệnh)

Lưu ý: backtest dùng nến đã đóng, khi một nến chạm cả SL lẫn TP thì tính SL trước (thận trọng); chưa tính phí giao dịch, funding và trượt giá.