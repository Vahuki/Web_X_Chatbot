import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authApi from '../../api/authApi';
import './DangNhap.css';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
const DangNhap = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem('user');
    // localStorage.clear(); // Hoặc dùng dòng này để xóa sạch sành sanh mọi thứ
  }, []);
  // State lưu dữ liệu nhập
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // 1. Gọi API Đăng nhập
      const res = await authApi.login(formData);
      
      // 2. Thông báo thành công
      toast.success("Đăng nhập thành công!");

      // 3. Lưu thông tin user vào LocalStorage (Để dùng ở các trang khác)
      // JSON.stringify để chuyển object thành chuỗi mới lưu được
      localStorage.setItem('user', JSON.stringify(res.user)); 

      // 4. PHÂN QUYỀN CHUYỂN TRANG (Logic quan trọng)
      const role = res.user.vai_tro; // Lấy vai trò từ backend trả về

      if (role === 1) { 
          // Nếu là Admin (1) 
          navigate('/quan-ly-tai-khoan');
      } else if(role === 2) {
          // Staff (0) -> Vào trang CSKH
          navigate('/ho-tro')
      }else{
          // -> Về trang chủ
          navigate('/');
      }

    } catch (err: any) {
      console.log("Lỗi đăng nhập:", err);
      // Xử lý hiển thị lỗi
      if (err.response && err.response.data) {
          toast.error(err.response.data.message || "Đăng nhập thất bại.");
      } else {
          toast.error("Không thể kết nối đến Server.");
      }
    }
  };

  return (
    <div className="login-container">
        <div className="wrapper"> 
            <form onSubmit={handleSubmit}>
                <h1>Đăng nhập</h1>
                
                {/* Email */}
                <div className="input-box-login">
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                {/* Password */}
                <div className="input-box-login">
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Mật khẩu" 
                        required 
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" /> Nhớ mật khẩu</label>
                    <a href="#">Quên mật khẩu?</a>
                </div>

                {/* Nút Đăng nhập */}
                <button type="submit" className="btn_login">Đăng nhập ngay</button>

                <div className="back-home text-center mt-3">
                    <Link to="/" className="home-btn">
                        <i className="bi bi-house-door-fill me-2"></i>
                        Về trang chủ
                    </Link>
                </div>

                <div className="login-link text-center mt-2">
                    <p>Bạn chưa có tài khoản? <Link to="/dang-ky">Đăng ký ngay</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default DangNhap;