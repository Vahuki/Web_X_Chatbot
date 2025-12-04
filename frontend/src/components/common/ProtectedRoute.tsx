import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }: { allowedRoles: number[] }) => {
    // Lấy thông tin user từ LocalStorage
    const userStr = localStorage.getItem('user');
    
    // Nếu chưa đăng nhập -> Đá về trang login
    if (!userStr) {
        return <Navigate to="/dang-nhap" replace />;
    }

    const user = JSON.parse(userStr);

    // Nếu vai trò không nằm trong danh sách cho phép -> Đá về trang chủ (hoặc trang 403)
    if (!allowedRoles.includes(user.vai_tro)) {
        return <Navigate to="/" replace />;
    }

    // Nếu hợp lệ -> Cho vào (Outlet hiển thị nội dung bên trong)
    return <Outlet />;
};

export default ProtectedRoute;