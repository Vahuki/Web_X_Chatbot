import React from 'react';
// 1. Import Link để chuyển trang không load lại
import { Link } from 'react-router-dom'; 
import './DangNhap.css'; 

const DangNhap = () => {

  // Hàm xử lý đăng nhập (Sau này gọi API ở đây)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Đăng nhập...");
  };

  return (
    <div className="login-container">
        <div className="wrappe">
            <form onSubmit={handleSubmit}>
                <h1>Đăng nhập</h1>
                
                {/* Ô nhập Tài khoản */}
                <div className="input-box-login">
                    <input type="text" placeholder="Tên tài khoản" name="tentaikhoan" required />
                </div>

                {/* Ô nhập Mật khẩu */}
                <div className="input-box-login">
                    <input type="password" placeholder="Mật khẩu" name="matkhau" required />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" /> Nhớ mật khẩu</label>
                </div>

                <button type="submit" className="btn_login">Đăng nhập ngay</button>
                
                <div className="login-link">
                    {/* Đổi link .php thành Link Router */}
                    <p>Bạn chưa có tài khoản? <Link to="/dang-ky">Đăng ký ngay</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default DangNhap;