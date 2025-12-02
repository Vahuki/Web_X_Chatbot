import React from 'react';
// 1. Import Link từ react-router-dom
import { Link } from 'react-router-dom'; 
import './Footer.css';

const Footer = () => {
  return (
    <div>
        <footer className='mt-3'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-12">
                    <h4><b>Về Chúng Tôi</b></h4>
                    <p className="mt-3">
                        Chúng tôi chuyên cung cấp các sản phẩm thời trang cao cấp với chất lượng tốt nhất.
                        Sứ mệnh của chúng tôi là mang lại vẻ đẹp và sự tự tin cho khách hàng.
                    </p>
                </div>
                <div className="col-lg-4 col-md-12">
                    <h4><b>Liên kết</b></h4>
                    <ul className="mt-3 list-unstyled">
                        {/* 2. Đã đổi thẻ <a> thành <Link> và href thành to */}
                        <li>
                            <Link to="/" className="text-decoration-none text-dark">Trang chủ</Link>
                        </li>
                        <li>
                            <Link to="/gioi-thieu" className="text-decoration-none text-dark">Về chúng tôi</Link>
                        </li>
                        <li>
                            <Link to="/lien-he" className="text-decoration-none text-dark">Liên hệ</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-12">
                    <h4><b>Liên hệ</b></h4>
                    <p className="mt-3">
                        <i className="bi bi-geo-alt-fill me-2"></i> 
                        Số 123, Đường ABC, Quận XYZ, TP.HCM
                    </p>
                    <p>
                        <i className="bi bi-telephone-fill me-2"></i> 
                        0901.234.567
                    </p>
                    <p>
                        <i className="bi bi-envelope-fill me-2"></i> 
                        support@domain.com
                    </p>
                    <p>
                        <i className="bi bi-clock-fill me-2"></i> 
                        8:00 - 22:00 (Hàng ngày)
                    </p>
                </div>
            </div>
            <hr />
            <div className="text-center">
                Copyright &copy; 2025 <b>FASHION STORE</b>. All Rights Reserved.
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer;