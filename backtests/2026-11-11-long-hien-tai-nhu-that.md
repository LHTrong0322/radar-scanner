Phí: maker 0.015% · taker 0.045% · funding 10%/năm (đã trừ vào R) · 1 lệnh/mã như bot

## Phễu lọc kèo (thuật toán hiện tại) — mỗi nến được xét bị loại ở bước nào

| Bước | 4H | 1D | 1W |
|---|---|---|---|
| 1 nến xét | 66052 | 11489 | 1607 |
| 3 SL quá xa (> MAX_SL) | 327 | 1353 | 1250 |
| 4 điểm thấp | 60372 | 9345 | 326 |
|   ↳ trần 45: chart đang yếu | 29723 | 5357 | 134 |
|   ↳ trần 50: cấu trúc Dow chưa tăng | 47247 | 7557 | 267 |
|   ↳ trần 55: R:R tới kháng cự gần nhất < 1 | 42268 | 6233 | 212 |
| 5 khung lớn không tăng | 2962 | 549 | 0 |
| 6 BTC chưa có cấu trúc tăng | 814 | 37 | 2 |
| 6 BTC dưới EMA200 | 134 | 0 | 0 |
| 7 khung nhỏ chưa xác nhận | 885 | 129 | 20 |
| 8 điểm cuối < ngưỡng | 25 | 9 | 0 |
| 9 R:R TP1 < tối thiểu | 402 | 40 | 9 |
| 10 ĐẠT CHUẨN | 131 | 27 | 0 |
| 11 bỏ vì mã đang có lệnh | 63 | 13 | 0 |

## Hiệu quả từng phần (thuật toán hiện tại)

R trung bình mỗi lệnh: -0.179. Điểm hiệu quả 0–10: 5 = trung tính, trên 5 = giúp tăng lợi nhuận, dưới 5 = kéo lợi nhuận xuống (mỗi 0.05R chênh lệch = 1 điểm).

### Các phần của điểm /100 (so 1/3 lệnh có điểm phần đó cao nhất với 1/3 thấp nhất)

| Phần | Số lệnh | R/lệnh nhóm cao | R/lệnh nhóm thấp | Chênh lệch | Điểm hiệu quả |
|---|---|---|---|---|---|
| Trend | 16 | -0.357 | +0.421 | -0.778 | **0** (ít dữ liệu) |
| Momentum | 16 | -0.227 | -0.112 | -0.114 | **2.7** (ít dữ liệu) |
| Elliott | 16 | +0.135 | -0.194 | +0.330 | **10** (ít dữ liệu) |
| Entry | 16 | -0.884 | -0.020 | -0.864 | **0** (ít dữ liệu) |
| R:R | 16 | -0.764 | +0.779 | -1.543 | **0** (ít dữ liệu) |
| Divergence | 6 | – | – | – | **–** (ít dữ liệu) |
| SL | 16 | +0.183 | -0.613 | +0.796 | **10** (ít dữ liệu) |

### Các yếu tố vùng giá (lệnh CÓ yếu tố ở vị trí đó so với KHÔNG có)

| Yếu tố | Vị trí | Số lệnh có | R/lệnh khi có | R/lệnh khi không | Chênh lệch | Điểm hiệu quả |
|---|---|---|---|---|---|---|
| Đỉnh swing cũ / kháng cự cũ bị phá | Entry | 8 | +0.206 | -0.564 | +0.770 | **10** (ít dữ liệu) |

Lưu ý: đây là tương quan trong các lệnh đã đạt chuẩn vào kèo, không phải quan hệ nhân quả; yếu tố hay đi cùng nhau có thể "mượn" hiệu quả của nhau. Dùng để chọn thí nghiệm, sau đó kiểm chứng bằng so sánh phiên bản.
# Backtest LONG · hien-tai-nhu-that

Kỳ backtest: 1410 ngày · chế độ LONG · 2026-11-11


### Tổng

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| Tất cả | 16 | 31.3% | -2.87 | -0.179 | 0.62 | 4.15 |

Kiểu thoát (A): tp2 1 · trail 0 · tp1_be 0 · struct 10 · sl 5 · expired 66 · open 0 · pending 0

Tỷ lệ lệnh chờ được khớp (A): 17.5%

### Theo khung

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| 1d | 4 | 25% | 1.52 | 0.381 | 2.08 | 1.4 |
| 4h | 12 | 33.3% | -4.39 | -0.366 | 0.29 | 4.39 |

### Theo điểm

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| 70-79 | 0 | –% | 0 | – | – | 0 |
| 80-89 | 3 | 33.3% | -0.89 | -0.297 | 0.14 | 1.04 |
| 90+ | 13 | 30.8% | -1.98 | -0.152 | 0.7 | 4.3 |

### Vào ngay / Chờ hồi

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| limit | 14 | 35.7% | -0.83 | -0.059 | 0.85 | 3.14 |
| market | 2 | 0% | -2.04 | -1.018 | 0 | 2.04 |

### Theo quý (tính theo quý lệnh đóng)

| Quý | Lệnh đóng | Win rate | Tổng R | R/lệnh | Max DD trong quý | R 4H | R 1D | R luỹ kế |
|---|---|---|---|---|---|---|---|---|
| 2023-Q1 | 2 | 0% | -2.02 | -1.012 | 2.02 | -2.02 | – | -2.0 |
| 2023-Q4 | 5 | 40% | -1.57 | -0.314 | 1.57 | -1.57 | – | -3.6 |
| 2024-Q4 | 1 | 0% | -0.56 | -0.558 | 0.56 | -0.56 | – | -4.2 |
| 2025-Q1 | 1 | 100% | +2.93 | 2.926 | 0 | – | 2.93 | -1.2 |
| 2025-Q3 | 2 | 50% | +0.04 | 0.02 | 0.17 | 0.21 | -0.17 | -1.2 |
| 2026-Q1 | 2 | 0% | -1.24 | -0.619 | 1.24 | – | -1.23 | -2.4 |
| 2026-Q3 | 2 | 50% | +0.58 | 0.289 | 0.25 | 0.58 | – | -1.8 |
| 2026-Q4 | 1 | 0% | -1.02 | -1.024 | 1.02 | -1.02 | – | -2.9 |

### Theo năm

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| 2023 | 7 | 28.6% | -3.59 | -0.513 | 0.17 | 3.59 |
| 2024 | 1 | 0% | -0.56 | -0.558 | 0 | 0.56 |
| 2025 | 3 | 66.7% | 2.97 | 0.989 | 18.76 | 0.17 |
| 2026 | 5 | 20% | -1.68 | -0.337 | 0.33 | 1.68 |

### Crypto / cổ phiếu

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| crypto | 12 | 33.3% | -4.39 | -0.366 | 0.29 | 4.39 |
| cổ phiếu | 4 | 25% | 1.52 | 0.381 | 2.08 | 1.4 |

### Theo số TP

| Nhóm | Lệnh đóng | Win rate | Tổng R | R/lệnh | Profit factor | Max DD (R) |
|------|-----------|----------|--------|--------|---------------|------------|
| 2 TP | 16 | 31.3% | -2.87 | -0.179 | 0.62 | 4.15 |

### 10 mã tốt nhất / tệ nhất (A)

- SILVER: 1.52R (4 lệnh)
- UNI: 0.79R (2 lệnh)
- SNX: 0.15R (1 lệnh)
- RSR: -0.28R (1 lệnh)
- DOT: -1.01R (1 lệnh)
- 0G: -1.02R (1 lệnh)
- FET: -1.44R (4 lệnh)
- CELO: -1.57R (2 lệnh)
…
- SILVER: 1.52R (4 lệnh)
- UNI: 0.79R (2 lệnh)
- SNX: 0.15R (1 lệnh)
- RSR: -0.28R (1 lệnh)
- DOT: -1.01R (1 lệnh)
- 0G: -1.02R (1 lệnh)
- FET: -1.44R (4 lệnh)
- CELO: -1.57R (2 lệnh)

Lưu ý: backtest dùng nến đã đóng, khi một nến chạm cả SL lẫn TP thì tính SL trước (thận trọng); chưa tính phí giao dịch, funding và trượt giá.