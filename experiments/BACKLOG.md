# Backlog thí nghiệm backtest (vòng tối ưu ban đêm 11/11/2026)

Quy tắc:
- Chỉ thêm/sửa file trong experiments/ và đọc backtests/. KHÔNG sửa thuật toán thật (index.html, scan.mjs, hyper.mjs) trên main.
- Mỗi thí nghiệm = 1 file JSON {name, desc, patch:[{find, replace}]} áp lên index.html hiện tại; mỗi vòng tối đa ~10 file đang chạy, file cũ chuyển vào experiments/archive/ (workflow chỉ đọc experiments/*.json, không đọc archive/).
- Một thay đổi chỉ được coi là tốt khi: R/lệnh tăng, Max DD không xấu hơn đáng kể, và tốt hơn ở CẢ năm 1 lẫn năm 2 (cột "Ổn định" ✅). Số lệnh không giảm quá 40%.
- Kết hợp dần các thay đổi tốt thành bản gộp (30-gop-*), mỗi vòng thử bản gộp mới.

Ý tưởng chờ thử (đánh dấu [x] khi đã chạy, ghi kết quả ngắn):
- [ ] Chỉ khung 1D + 1W (bỏ 4H) — patch PICK_TFS/không áp dụng được trong bt → thay bằng: điểm tối thiểu riêng cho 4H cao hơn
- [ ] Ngưỡng R:R TP1 tối thiểu 1.5 / 2.5 / 3 (đang 2) — sửa trong bt? (bt dùng B.plan.rr1 >= 2 cứng) → cân nhắc thêm hằng MIN_RR vào index.html
- [ ] MAX_SL 35% → 20% / 15%
- [ ] Ngưỡng "vào ngay" mkt >= 3 → 4 / 2
- [ ] Trọng số vùng: Dow 2.5 → 2; POC anchored 2 → 1 / 3; bỏ RSI/MACD quy ra giá (trọng số 0)
- [ ] Thoát phá cấu trúc: cần 2 nến đóng dưới mốc / dùng pivot 3 nến
- [ ] Sau TP1 dời SL về Entry vs giữ SL gốc vs dời về giữa Entry–SL
- [ ] Lệnh chờ hết hạn sau 6 / 24 nến (đang 12)
- [ ] TP1 tối thiểu 1.5R (đẩy TP1 lên vùng kế tiếp nếu quá gần)
- [ ] Đệm SL 0.4 / 0.6 ATR (tinh chỉnh quanh mức tốt nhất)
