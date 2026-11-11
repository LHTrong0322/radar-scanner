# Backtest luật vào lệnh rút từ nghiên cứu pump (như trade thật)

Tạo lúc 2026-11-11T19:51 UTC · 166 mã · khung D1 · tín hiệu ở nến đã đóng, vào lệnh giá mở cửa hôm sau.
Đã tính phí, trượt giá, funding. Ví 100 USD, 1R = 3 USD, tổng rủi ro mở ≤ 30% vốn, ngắt −3R/ngày, −6R/tuần. TP = 3 lần SL (R:R 3), giữ tối đa 14 ngày.
Lọc thị trường như bot thật: coin chỉ vào khi BTC trên EMA200 ngày (cổ phiếu/hàng hoá luôn được).

Để so: bot hiện tại 2023–2025 = **+109.3R**, thắng 47.5%, rủi ro tụt vốn (95%) 9.3R · 2026 = **−15.0R**.

| Luật | SL | Lệnh 23–25 | Thắng | Tổng R 23–25 | Tụt vốn tối đa | Lệnh 2026 | Thắng | Tổng R 2026 | Ví cuối (100$) |
|---|---|---|---|---|---|---|---|---|---|
| Breakout: vượt đỉnh 60 ngày + volume gấp đôi | 8% | 967 | 33% | **56.9R** | 76.2R | 215 | 32% | **13.7R** | 312$ |
| Breakout: vượt đỉnh 60 ngày + volume gấp đôi | 10% | 993 | 37% | **170.5R** | 85.7R | 261 | 36% | **32.6R** | 709$ |
| Breakout: vượt đỉnh 60 ngày + volume gấp đôi | 15% | 883 | 46% | **201.6R** | 71.6R | 232 | 41% | **21.7R** | 770$ |
| Tiền vào ×2–4 + trên EMA200 20–50% + cách đỉnh năm 15–40% | 8% | 299 | 32% | **51.0R** | 38.5R | 27 | 37% | **5.1R** | 268$ |
| Tiền vào ×2–4 + trên EMA200 20–50% + cách đỉnh năm 15–40% | 10% | 270 | 38% | **88.6R** | 29.6R | 21 | 43% | **2.9R** | 375$ |
| Tiền vào ×2–4 + trên EMA200 20–50% + cách đỉnh năm 15–40% | 15% | 229 | 47% | **88.0R** | 20.9R | 18 | 50% | **2.5R** | 371$ |
| Tiền vào ×2 trở lên + mạnh hơn BTC >40% | 8% | 808 | 25% | **-30.4R** | 83.5R | 0 | – | **0.0R** | 9$ |
| Tiền vào ×2 trở lên + mạnh hơn BTC >40% | 10% | 815 | 29% | **36.7R** | 110.3R | 137 | 23% | **-28.5R** | 125$ |
| Tiền vào ×2 trở lên + mạnh hơn BTC >40% | 15% | 596 | 33% | **43.2R** | 72.6R | 120 | 29% | **-10.1R** | 199$ |
| Nến volume gấp đôi + đóng cửa vượt đỉnh 20 nến | 8% | 675 | 31% | **-22.4R** | 40.2R | 78 | 32% | **6.0R** | 51$ |
| Nến volume gấp đôi + đóng cửa vượt đỉnh 20 nến | 10% | 776 | 34% | **13.8R** | 45.9R | 149 | 36% | **11.8R** | 177$ |
| Nến volume gấp đôi + đóng cửa vượt đỉnh 20 nến | 15% | 956 | 43% | **152.5R** | 55.3R | 235 | 43% | **28.4R** | 643$ |
| Nến volume gấp đôi + vượt đỉnh 20 nến + trên EMA200 | 8% | 816 | 33% | **42.9R** | 43.3R | 174 | 29% | **-6.0R** | 211$ |
| Nến volume gấp đôi + vượt đỉnh 20 nến + trên EMA200 | 10% | 793 | 36% | **77.5R** | 62.1R | 193 | 33% | **7.0R** | 353$ |
| Nến volume gấp đôi + vượt đỉnh 20 nến + trên EMA200 | 15% | 805 | 43% | **137.8R** | 75.1R | 184 | 35% | **-2.9R** | 505$ |

## Lưu ý trung thực
- Danh sách mã là mã còn sống / đang có trên Hyperliquid → quá khứ hơi đẹp hơn thực tế.
- Luật được chọn TỪ chính dữ liệu 2023–2025 → kết quả 2026 mới là thước đo thật.
- Đây là chiến lược RIÊNG, chưa ghép với bot hiện tại. Nếu tốt, bước sau là thử dùng nó làm điểm cộng cho bot chính.