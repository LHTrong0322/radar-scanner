# Tối ưu tự động — vòng 3

Đây là báo cáo để thảo luận. Bot thật KHÔNG bị thay đổi cho tới khi Trọng duyệt.

Mỗi vòng: backtest toàn bộ dữ liệu (từ 2018, mọi nến, có phí + funding), đổi từng thông số một so với cấu hình tốt nhất hiện tại. Chỉ nhận thay đổi khi R/lệnh tăng ≥ 0.005R, KHÔNG xấu đi ở cả nửa đầu lẫn nửa sau dữ liệu, sụt vốn không tệ hơn 15%, số lệnh không giảm quá nửa.

**Mốc ban đầu:** 1669 lệnh · win rate 30% · 0.055R/lệnh · tổng 92.39R · sụt vốn 65.43R
**Cấu hình tốt nhất hiện tại:** 609 lệnh · win rate 33.8% · 0.261R/lệnh · tổng 159.05R · sụt vốn 39.72R

## Thông số khác với bot thật

| Thông số | Bot thật | Đề xuất |
|---|---|---|
| R:R tối thiểu tới TP1 | 2 | **2.5** |
| Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) | 5 | **6** |
| % chốt ở TP1 | 0.5 | **0.33** |
| Lệnh chờ hết hạn sau (nến) | 12 | **8** |
| Điểm tối thiểu vùng đặt lệnh chờ | 2 | **3** |
| Trọng số phần Momentum (/100) | 15 | **8** |

## Lịch sử các vòng

### Vòng 1 — mốc: 0.055R/lệnh, win 30%, DD 65.43R, 1669 lệnh

| Thông số | Từ → Thử | Điểm 0–10 | R/lệnh | Win rate | Lệnh | Max DD | Nửa đầu | Nửa sau | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Ngưỡng điểm vào kèo | 70 → 65 | 5 | 0.054 | 30% | 1744 | 63.33 | 0.131 | 0.027 |  |
| Ngưỡng điểm vào kèo | 70 → 75 | 4.6 | 0.036 | 29.4% | 1558 | 58.25 | 0.14 | -0.002 |  |
| R:R tối thiểu tới TP1 | 2 → 1.5 | 4.3 | 0.019 | 30.3% | 2004 | 83.7 | 0.04 | 0.012 |  |
| R:R tối thiểu tới TP1 | 2 → 2.5 | 6 | 0.105 | 29.6% | 1164 | 53.48 | 0.327 | 0.024 | ✅ |
| Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) | 5 → 4 | 5 | 0.057 | 30.1% | 1675 | 63.77 | 0.135 | 0.03 |  |
| Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) | 5 → 6 | 5.2 | 0.066 | 30.1% | 1641 | 64.83 | 0.143 | 0.039 | ✅ |
| SL tối đa (% Entry) | 0.35 → 0.2 | 4.9 | 0.048 | 30% | 1652 | 71.47 | 0.119 | 0.024 |  |
| SL tối đa (% Entry) | 0.35 → 0.5 | 4.8 | 0.046 | 30.2% | 1660 | 61.59 | 0.088 | 0.031 |  |
| Đệm SL dưới vùng hỗ trợ (ATR) | 0.5 → 0.4 | 5.1 | 0.059 | 29.3% | 1741 | 77.73 | 0.144 | 0.029 |  |
| Đệm SL dưới vùng hỗ trợ (ATR) | 0.5 → 0.6 | 5.4 | 0.075 | 30.9% | 1544 | 56.56 | 0.242 | 0.015 |  |
| Điểm tối thiểu của vùng đặt SL | 2 → 1 | 5 | 0.056 | 30% | 1671 | 65.43 | 0.131 | 0.03 |  |
| Điểm tối thiểu của vùng đặt SL | 2 → 3 | 4.9 | 0.052 | 30% | 1666 | 64.41 | 0.128 | 0.026 |  |

Nhận: R:R tối thiểu tới TP1 2 → 2.5 · Ngưỡng điểm 'vào ngay' (tín hiệu mạnh) 5 → 6

### Vòng 2 — mốc: 0.203R/lệnh, win 32.7%, DD 38R, 737 lệnh

| Thông số | Từ → Thử | Điểm 0–10 | R/lệnh | Win rate | Lệnh | Max DD | Nửa đầu | Nửa sau | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| % chốt ở TP1 | 0.5 → 0.33 | 5.2 | 0.213 | 32.7% | 737 | 38.24 | 0.54 | 0.069 | ✅ |
| % chốt ở TP1 | 0.5 → 0.67 | 4.8 | 0.192 | 32.7% | 737 | 37.77 | 0.487 | 0.061 |  |
| Khoảng cách tối thiểu TP1 (ATR) | 0.75 → 0.5 | 3.6 | 0.135 | 30.5% | 620 | 39.99 | 0.468 | -0.015 |  |
| Khoảng cách tối thiểu TP1 (ATR) | 0.75 → 1 | 4.4 | 0.175 | 31.9% | 815 | 41.15 | 0.498 | 0.032 |  |
| Lệnh chờ hết hạn sau (nến) | 12 → 18 | 4.4 | 0.171 | 33% | 867 | 41.67 | 0.466 | 0.042 |  |
| Lệnh chờ hết hạn sau (nến) | 12 → 8 | 5.4 | 0.225 | 33.2% | 605 | 38.83 | 0.536 | 0.086 | ✅ |
| Điểm tối thiểu vùng đặt lệnh chờ | 2 → 1 | 5 | 0.204 | 32.7% | 739 | 38.12 | 0.514 | 0.068 |  |
| Điểm tối thiểu vùng đặt lệnh chờ | 2 → 3 | 5.5 | 0.229 | 33.2% | 744 | 40.48 | 0.564 | 0.077 | ✅ |
| Số nến mỗi bên để xác định đỉnh/đáy Dow | undefined → 2 | 4.6 | 0.182 | 31.5% | 796 | 33.31 | 0.389 | 0.081 |  |
| Trần điểm khi chart yếu (Trend < x) | -0.3 → -0.6 | 5 | 0.203 | 32.7% | 737 | 38 | 0.514 | 0.065 |  |
| Trần điểm khi chart yếu (Trend < x) | -0.3 → 0 | 4.9 | 0.2 | 32.6% | 736 | 38 | 0.506 | 0.065 |  |

Nhận: % chốt ở TP1 0.5 → 0.33 · Lệnh chờ hết hạn sau (nến) 12 → 8 · Điểm tối thiểu vùng đặt lệnh chờ 2 → 3

### Vòng 3 — mốc: 0.261R/lệnh, win 33.8%, DD 39.72R, 609 lệnh

| Thông số | Từ → Thử | Điểm 0–10 | R/lệnh | Win rate | Lệnh | Max DD | Nửa đầu | Nửa sau | Nhận? |
|---|---|---|---|---|---|---|---|---|---|
| Khung lớn phải tăng (trend ≥) | 0.3 → 0.2 | 4.7 | 0.245 | 33.5% | 651 | 42.32 | 0.576 | 0.1 |  |
| Khung lớn phải tăng (trend ≥) | 0.3 → 0.4 | 4.4 | 0.233 | 33.3% | 591 | 42.96 | 0.583 | 0.077 |  |
| Lọc BTC trên EMA200 (crypto) | true → false | 4.6 | 0.24 | 32.8% | 665 | 40.8 | 0.582 | 0.089 |  |
| Xác nhận khung nhỏ (A2) | ON → W | 1.6 | 0.093 | 30.8% | 1255 | 72.3 | 0.182 | 0.048 |  |
| Cổng Dow | CHẶT → LỎNG | 6.4 | 0.331 | 34.6% | 739 | 34.06 | 0.604 | 0.213 |  |
| Trọng số phần Trend (/100) | 30 → 15 | 4.8 | 0.25 | 33.3% | 601 | 37.43 | 0.599 | 0.092 |  |
| Trọng số phần Trend (/100) | 30 → 45 | 5.2 | 0.269 | 34.2% | 603 | 37.66 | 0.606 | 0.114 |  |
| Trọng số phần Momentum (/100) | 15 → 23 | 4.9 | 0.255 | 33.6% | 607 | 39.56 | 0.606 | 0.094 |  |
| Trọng số phần Momentum (/100) | 15 → 8 | 5.1 | 0.268 | 34% | 605 | 38.69 | 0.631 | 0.101 | ✅ |

Nhận: Trọng số phần Momentum (/100) 15 → 8
