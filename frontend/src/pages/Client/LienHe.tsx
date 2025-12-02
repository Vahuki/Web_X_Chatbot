import React from 'react';
import './LienHe.css'; // Import file CSS ở trên

const LienHe = () => {
  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh', paddingBottom: '50px' }}>

      {/* --- HEADER BANNER --- */}
      <div className="bg-gradient-custom py-5 text-center mb-5 mt-3">
        <div className="container">
          <h1 className="fw-bold">Liên Hệ Với Chúng Tôi</h1>
          <p className="mb-0 opacity-75">Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn</p>
        </div>
      </div>
      {/* --- INFO CARDS (Điện thoại, Email, Địa chỉ) --- */}
      <div className="row">
        {/* Card 1: Điện thoại */}
        <div className="col-md-12 mb-3">
          <div className="card-custom p-4 d-flex flex-row align-items-center">
            <div className="icon-box me-4">
              <i className="bi bi-telephone-fill"></i>
            </div>
            <div>
              <h5 className="fw-bold mb-1">Điện Thoại</h5>
              <p className="mb-0 text-muted">0123 456 789</p>
              <p className="mb-0 text-muted">0987 654 321</p>
            </div>
          </div>
        </div>

        {/* Card 2: Email */}
        <div className="col-md-12 mb-3">
          <div className="card-custom p-4 d-flex flex-row align-items-center">
            <div className="icon-box me-4">
              <i className="bi bi-envelope-fill"></i>
            </div>
            <div>
              <h5 className="fw-bold mb-1">Email</h5>
              <p className="mb-0 text-muted">support@fashionstore.vn</p>
              <p className="mb-0 text-muted">sale@fashionstore.vn</p>
            </div>
          </div>
        </div>

        {/* Card 3: Địa chỉ */}
        <div className="col-md-12 mb-3">
          <div className="card-custom p-4 d-flex flex-row align-items-center">
            <div className="icon-box me-4">
              <i className="bi bi-geo-alt-fill"></i>
            </div>
            <div>
              <h5 className="fw-bold mb-1">Địa Chỉ</h5>
              <p className="mb-0 text-muted">123 Đường Lê Lợi</p>
              <p className="mb-0 text-muted">Quận 1, TP. Đà Nẵng</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* --- LEFT COLUMN: CONTACT FORM --- */}
        <div className="col-lg-8 mb-4">
          <div className="card-custom p-4 p-md-5">
            <h3 className="section-title">Gửi Tin Nhắn</h3>
            <form>
              <div className="mb-3">
                <label className="form-label fw-bold">Họ và Tên</label>
                <input type="text" className="form-control" placeholder="Nhập họ và tên của bạn" />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Email</label>
                  <input type="email" className="form-control" placeholder="email@example.com" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Số Điện Thoại</label>
                  <input type="tel" className="form-control" placeholder="0123456789" />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Tiêu Đề</label>
                <input type="text" className="form-control" placeholder="Vấn đề cần tư vấn" />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Nội Dung</label>
                <textarea className="form-control" placeholder="Nhập nội dung tin nhắn của bạn..."></textarea>
              </div>
            </form>
            <button className="btn btn-custom mt-2">
              <i className="fa-solid fa-paper-plane me-2"></i> Gửi Tin Nhắn
            </button>
          </div>
        </div>

        {/* --- RIGHT COLUMN: SIDEBAR INFO --- */}
        <div className="col-lg-4">

          {/* Giờ làm việc */}
          <div className="card-custom p-4 mb-4">
            <h5 className="fw-bold mb-3"><i className="fa-regular fa-clock me-2 text-danger"></i> Giờ Làm Việc</h5>
            <div className="d-flex justify-content-between mb-2 border-bottom pb-2">
              <span>Thứ 2 - Thứ 6:</span>
              <span className="fw-bold">8:00 - 20:00</span>
            </div>
            <div className="d-flex justify-content-between mb-2 border-bottom pb-2">
              <span>Thứ 7:</span>
              <span className="fw-bold">8:00 - 21:00</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Chủ Nhật:</span>
              <span className="fw-bold">9:00 - 18:00</span>
            </div>
          </div>

          {/* Địa điểm (Map placeholder) */}
          <div className="card-custom p-4">
            <h5 className="fw-bold mb-3">Địa Điểm</h5>
            <div style={{ background: '#f3e5f5', height: '100px', borderRadius: '8px' }} className="d-flex align-items-center justify-content-center text-center">
              <div>
                <i className="fa-solid fa-location-dot fa-2x text-danger mb-2"></i>
                <p className="small mb-0 fw-bold">123 Đường Lê Lợi<br />Quận 1, TP. Đà Nẵng</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LienHe;