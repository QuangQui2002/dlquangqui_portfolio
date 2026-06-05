# Project ZIP downloads

Đặt các file `.zip` dự án vào thư mục này để người dùng có thể tải trực tiếp từ portfolio.

Ví dụ:
- `downloads/projects/student-management.zip`
- `downloads/projects/teach-cooking.zip`

Sau khi thêm file zip, cập nhật `download.file` trong `index.js` theo đường dẫn tương ứng, ví dụ:

```js
download: {
  label: "Tải mã nguồn",
  file: "downloads/projects/student-management.zip",
},
```

Lưu ý: nếu deploy lên GitHub Pages/Vercel/static hosting, các file trong thư mục này sẽ được phục vụ như static assets.
