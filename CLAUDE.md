# CLAUDE.md: Crypto RSI Radar (radar-scanner)

## 0. Chạy tự động: ĐỌC TRƯỚC

Nếu bạn đang chạy không có người (`claude -p` trong GitHub Actions hoặc một lịch tự động): bỏ qua các mục bên dưới,
làm đúng và chỉ đúng prompt được giao, giữ nguyên định dạng đầu ra, không hỏi lại.

Các mục dưới đây chỉ áp dụng cho phiên code có Trọng.

## 1. Chủ dự án

- Trọng (@Trong0322), không có nền code. Giải thích bằng tiếng Việt dễ hiểu, hướng dẫn từng bước rất chi tiết.
- Tuyệt đối không dùng dấu gạch dài (em dash, en dash) ở bất cứ đâu: code, comment, commit message, tin Telegram.

## 2. Quy trình code: bộ agent-skills (addyosmani/agent-skills)

Bộ skill nằm sẵn trong `.claude/skills/` (phiên bản ghi ở `.claude/AGENT-SKILLS-VERSION`).

- Trước mọi task code, áp dụng skill `using-agent-skills` để chọn đúng quy trình.
- Feature mới: `/spec` → `/plan` → `/build` → `/test` → `/review` → `/ship`.
- Lỗi, workflow đỏ, kết quả lạ: dùng `debugging-and-error-recovery`.
- Mọi thứ đụng tới API key sàn, ví, lệnh giao dịch: áp dụng `security-and-hardening`. Không bao giờ in key ra log.

## 3. Quy tắc riêng: đây là bot giao dịch tiền thật (Hyperliquid)

- KHÔNG đổi thuật toán live (điểm số, entry, SL/TP, rủi ro mỗi lệnh, giới hạn tổng rủi ro) khi Trọng chưa đồng ý. Đề xuất trước, giải thích tác động, chờ Trọng chốt.
- Chiến lược mới chạy thử ở ví ảo (paper) song song, không đụng bot live, chỉ lên live khi có kết quả thật.
- Thay đổi phần đặt lệnh (`hyper.mjs`, `radar.yml`, phần quản lý vị thế) bắt buộc dùng `doubt-driven-development`: tự phản biện, nêu rủi ro và cách quay lại trước khi làm.
- Test: bắt buộc có test cho logic tính lệnh và quản lý rủi ro (kích thước lệnh, SL, đòn bẩy, giới hạn 30%). Phần giao diện web không bắt buộc TDD.
- Giữ phạm vi: chỉ sửa đúng phần được giao, thấy chỗ khác cần cải thiện thì ghi lại và hỏi.
