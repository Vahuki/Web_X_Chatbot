import React from 'react';
import { Link } from 'react-router-dom'; // Import Link để chuyển trang không load lại
import './DangKy.css';

const DangKy = () => {

  // Hàm xử lý khi bấm nút Đăng ký (Sau này sẽ gọi API Spring Boot ở đây)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Chặn hành động load lại trang mặc định của form
    console.log("Đã bấm đăng ký, chuẩn bị gọi API...");
    // TODO: Gọi API đăng ký tại đây
  };

  return (
    <div className="auth-container">
      <div className="wrapper">
        <h1>Đăng ký tài khoản</h1>

        {/* Xóa action và method, thay bằng onSubmit */}
        <form onSubmit={handleSubmit}>

          {/* Họ và tên */}
          <div className="input-box">
            <input type="text" id="fullname" name="hovaten" placeholder=" " required />
            <label htmlFor="fullname">Họ và tên</label> {/* React dùng htmlFor thay vì for */}
          </div>

          {/* Số điện thoại */}
          <div className="input-box">
            <input
              type="tel"
              id="phone"
              name="sodienthoai"
              placeholder=" "
              required
              pattern="^\d{10,11}$"
              title="Số điện thoại phải là 10 hoặc 11 chữ số"
            />
            <label htmlFor="phone">Số điện thoại</label>
          </div>

          {/* Tên đăng nhập */}
          <div className="input-box">
            <input type="text" id="username" name="tentaikhoan" placeholder=" " required />
            <label htmlFor="username">Tên đăng nhập</label>
          </div>

          {/* Email */}
          <div className="input-box">
            <input type="email" id="email" name="email" placeholder=" " required />
            <label htmlFor="email">Email</label>
          </div>

          {/* Mật khẩu */}
          <div className="input-box">
            <input type="password" id="password" name="matkhau" placeholder=" " required />
            <label htmlFor="password">Mật khẩu</label>
          </div>

          {/* Nhập lại mật khẩu */}
          <div className="input-box">
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder=" " required />
            <label htmlFor="confirmPassword">Nhập lại mật khẩu</label>
          </div>
          {/* Nhớ mật khẩu & Quên mật khẩu */}
          <div className="remember-forgot">
            <label><input type="checkbox" id="remember" /> Nhớ mật khẩu</label>
          </div>
          {/* Nút bấm */}
          <button type="submit" className="btn btn-primary w-100">Đăng ký ngay</button>
          {/* Chuyển nút Đăng nhập thành Link để không load lại trang */}
          <div className="text-center mt-2">
            <span>Đã có tài khoản? </span>
            <Link to="/dang-nhap" className="text-decoration-none">Đăng nhập</Link>
          </div>

        </form>
      </div>
    </div>
  )
}

export default DangKy;