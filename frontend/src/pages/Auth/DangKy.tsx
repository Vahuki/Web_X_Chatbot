import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authApi from '../../api/authApi';
import './DangKy.css';

// 1. Import toast
import { toast } from 'react-toastify';

const DangKy = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    ho_va_ten: '',
    email: '',
    password: '',
    confirmPassword: '',
    so_dien_thoai: '',
    dia_chi: ''
  });

  // Không cần state error nữa vì đã có toast
  // const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      // 2. Thông báo lỗi (Màu đỏ)
      toast.error('Mật khẩu nhập lại không khớp!');
      return;
    }

    try {
      const { confirmPassword, ...dataToSend } = formData;
      await authApi.register(dataToSend);
      
      // 3. Thông báo thành công (Màu xanh)
      toast.success("Đăng ký thành công! Vui lòng đăng nhập.");
      
      // Chuyển trang sau 2 giây để người dùng kịp đọc thông báo
      setTimeout(() => {
          navigate('/dang-nhap');
      }, 2000);

    } catch (err: any) {
      console.log("Lỗi đăng ký:", err);

      if (err.response && err.response.data) {
          const svData = err.response.data;
          if (svData.message) {
              toast.error(svData.message); // Hiển thị lỗi từ server
          } else if (svData.errors) {
              const firstField = Object.keys(svData.errors)[0];
              const firstMsg = svData.errors[firstField][0];
              toast.error(firstMsg);
          } else {
              toast.error("Đăng ký thất bại. Vui lòng kiểm tra lại thông tin.");
          }
      } else if (err.request) {
          toast.error("Không thể kết nối đến Server.");
      } else {
          toast.error("Lỗi không xác định.");
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="wrapper">
        <h1>Đăng ký tài khoản</h1>

        {/* Bỏ div hiển thị lỗi cũ đi vì đã có Toast */}
        
        <form onSubmit={handleSubmit}>
            {/* ... Giữ nguyên các input ... */}
            
            {/* Ví dụ 1 input để bạn copy lại */}
            <div className="input-box">
                <input 
                    type="text" 
                    name="ho_va_ten" 
                    placeholder=" " 
                    required 
                    value={formData.ho_va_ten} 
                    onChange={handleChange} 
                />
                <label>Họ và tên</label>
            </div>
            
            <div className="input-box">
                <input type="email" name="email" placeholder=" " required value={formData.email} onChange={handleChange} />
                <label>Email</label>
            </div>
            <div className="input-box">
                <input type="tel" name="so_dien_thoai" placeholder=" " required value={formData.so_dien_thoai} onChange={handleChange} />
                <label>Số điện thoại</label>
            </div>
            <div className="input-box">
                <input type="text" name="dia_chi" placeholder=" " required value={formData.dia_chi} onChange={handleChange} />
                <label>Địa chỉ</label>
            </div>
            <div className="input-box">
                <input type="password" name="password" placeholder=" " required value={formData.password} onChange={handleChange} />
                <label>Mật khẩu</label>
            </div>
            <div className="input-box">
                <input type="password" name="confirmPassword" placeholder=" " required value={formData.confirmPassword} onChange={handleChange} />
                <label>Nhập lại mật khẩu</label>
            </div>

            <button type="submit" className="btn btn-primary w-100">Đăng ký ngay</button>
            
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