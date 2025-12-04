import React from 'react'
import './ChiTietSanPham.css'
const ChiTietSanPham = () => {
  return (
    <div>
      <div className="card mt-3">
        <div className="card-body">
          <div className="d-flex">
            <img src="https://maylanstore.com/wp-content/uploads/2024/03/ao-so-mi-flannel-ke-soc-11.jpg" height="600px" alt="" />
            <div className="ms-4">
              <h3><b>Áo sơ mi trắng</b></h3>
              <p className="mota">Mô tả: Chất liệu Cotton cao cấp 100% mang lại cảm giác thoáng mát tối đa
                suốt cả ngày dài.Khả năng thấm hút mồ hôi vượt trội, giữ cho bạn luôn khô ráo và dễ chịu.
                Thiết kế cơ bản, bền bỉ, là lựa chọn hoàn hảo cho phong cách thường ngày.</p>
              <p className="price text-danger"><span>350.000</span> đ</p>
              <button className="btn btn-primary w-100">Thêm vào giỏ hàng</button>
              <div className="features">
                <div className="feature-item">
                  <div className="feature-icon"><i className="fa-solid fa-truck"></i></div>
                  <span>Miễn phí vận chuyển toàn quốc</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><i className="fa-solid fa-arrows-rotate"></i></div>
                  <span>Đổi trả trong 30 ngày</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><i className="fa-solid fa-check"></i></div>
                  <span>Bảo hành chính hãng 12 tháng</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><i className="fa-solid fa-credit-card"></i></div>
                  <span>Thanh toán an toàn & bảo mật</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ChiTietSanPham
