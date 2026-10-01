# Website — Nguyễn Khắc Đan Thanh

Trang thương hiệu cá nhân (tác giả · diễn giả · podcast). Toàn bộ là web tĩnh, không cần server.

## Cấu trúc
- `index.html` — toàn bộ trang (HTML + CSS + JS trong 1 file)
- `404.html` — trang báo lỗi khi vào link sai
- `netlify.toml` — cấu hình khi deploy bằng Netlify
- `README.md` — file này

## Xem thử trên máy
Mở trực tiếp `index.html` bằng trình duyệt (nháy đúp), hoặc chạy server local:

```bash
cd "WEB THANH"
python3 -m http.server 8000
# rồi mở http://localhost:8000
```

## Đưa web lên internet

### Cách 1 — Netlify Drop (dễ nhất, ~2 phút)
1. Vào https://app.netlify.com/drop
2. Kéo-thả **cả thư mục `WEB THANH`** vào trang đó
3. Netlify tạo ngay một link công khai dạng `https://ten-ngau-nhien.netlify.app`
4. Đăng nhập/đăng ký (miễn phí) để giữ link và đổi tên miền phụ

### Cách 2 — GitHub Pages
1. Tạo repo mới trên GitHub, đẩy các file này lên nhánh `main`
2. Settings → Pages → Source: `main` / thư mục `/root` → Save
3. Web sẽ chạy tại `https://<tên-github>.github.io/<tên-repo>/`

### Cách 3 — Vercel / Cloudflare Pages
Kết nối repo GitHub, chọn "framework: none / static", deploy.

## Việc cần làm để web hoạt động đầy đủ
- [ ] Nối form đăng ký bản tin với dịch vụ thật (Formspree / Netlify Forms / Mailchimp)
- [ ] Thay các link `#` (Podcast, mạng xã hội, đặt sách) bằng link thật
- [ ] Thay ô chữ "ĐT" / "ĐAN THANH" bằng ảnh thật
- [ ] Cập nhật số liệu, tên tập podcast, tiểu sử bằng thông tin thật
- [ ] (Tùy chọn) Mua tên miền riêng và trỏ về hosting
