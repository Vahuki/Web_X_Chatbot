import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './HeaderAdmin.css';

const HeaderAdmin = () => {
    return (
        <header className="header-admin">
            <div className="container">
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center">

                    {/* Logo hoặc Tên Admin Panel */}
                    <Link to="/quan-ly-tai-khoan" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <span className="fs-4 fw-bold">Admin Panel 🛠️</span>
                    </Link>

                    {/* Menu điều hướng */}
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <NavLink to="/quan-ly-tai-khoan" className="nav-link admin-link">
                                <i className="bi bi-people-fill me-2"></i>Quản Lý Tài Khoản
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="quan-ly-danh-muc" className="nav-link admin-link">
                                <i className="bi bi-grid-fill me-2"></i>Quản Lý Danh Mục
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/quan-ly-san-pham" className="nav-link admin-link">
                                <i className="bi bi-box-seam-fill me-2"></i>Quản Lý Sản Phẩm
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/quan-ly-don-hang" className="nav-link admin-link">
                                <i className="bi bi-receipt me-2"></i>Quản Lý Đơn Hàng
                            </NavLink>
                        </li>
                    </ul>

                    {/* Nút Đăng xuất */}
                    <div className="text-end">
                        <button className="btn btn-outline-light w-100">
                            <i className="bi bi-box-arrow-right me-1"></i> Đăng xuất
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderAdmin;