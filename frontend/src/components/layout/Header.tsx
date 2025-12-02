import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-nav sticky-top">
        <div className="container">
          {/* LOGO */}
          <Link className="navbar-brand" to="/">
            <img src="/img/logo.png" alt="Logo" />
          </Link>

          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* MENU GIỮA */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/trang-chu">
                  Trang chủ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/san-pham">
                  Sản phẩm
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gioi-thieu">
                  Về chúng tôi
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/lien-he">
                  Liên hệ
                </NavLink>
              </li>
            </ul>

            {/* PHẦN BÊN PHẢI: TÌM KIẾM + USER + GIỎ HÀNG */}
            <div className="d-flex align-items-center gap-3 right-section">
              {/* 1. Thanh tìm kiếm (Nằm bên trái icon User) */}
              <form className="d-flex search-form" role="search">
                <div className="input-group">
                  <input className="form-control search-input" type="search" placeholder="Tìm kiếm..." aria-label="Search"/>
                  <button className="btn search-btn" type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </form>

              {/* 2. Icon User (Click chuyển sang đăng nhập) */}
              <Link to="/dang-nhap" className="icon-nav" title="Tài khoản">
                <i className="bi bi-person-circle"></i>
              </Link>

              {/* 3. Icon Giỏ hàng */}
              <Link to="/gio-hang" className="icon-nav position-relative" title="Giỏ hàng">
                <i className="bi bi-cart3"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
