import React from 'react'
import './TrangChu.css';

const TrangChu = () => {

  // Dữ liệu giả lập cho sản phẩm (Sau này lấy từ API)
  const products = [
    { id: 1, name: "Áo sơ mi trắng", price: "350.000", img: "/img/so-mi-da-nang-02.jpg" },
    { id: 2, name: "Áo sơ mi xanh", price: "380.000", img: "/img/so-mi-da-nang-02.jpg" },
    { id: 3, name: "Áo thun đen", price: "250.000", img: "/img/so-mi-da-nang-02.jpg" },
    { id: 4, name: "Quần tây âu", price: "500.000", img: "/img/so-mi-da-nang-02.jpg" },
    { id: 5, name: "Áo khoác gió", price: "450.000", img: "/img/so-mi-da-nang-02.jpg" },
    { id: 6, name: "Quần Jean rách", price: "600.000", img: "/img/so-mi-da-nang-02.jpg" },
  ];

  return (
    <div>
      {/* --- SLIDE CAROUSEL --- */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {/* Sửa lỗi classNameName */}
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/img/slide_1.png"
              className="d-block w-100" alt="Slide 1" style={{ height: '500px'}} />
          </div>
          <div className="carousel-item">
            <img
              src="/img/slide_2.png"
              className="d-block w-100" alt="Slide 2" style={{ height: '500px'}} />
          </div>
          <div className="carousel-item">
            <img src="/img/slide_3.jpg"
              className="d-block w-100" alt="Slide 3" style={{ height: '500px'}} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* --- NỘI DUNG CHÍNH --- */}
      <div className="container mt-4 mb-5">
        <div className="row">

          {/* CỘT DANH MỤC (SIDEBAR) */}
          <div className="col-lg-3 col-md-12 mb-4">
            <div className="bg-white p-3 rounded-3 shadow-sm" style={{ top: '80px' }}>
              <h4 className="text-primary fw-bold border-bottom pb-2">Danh mục</h4>
              <ul className="category-list list-unstyled mt-3">
                <li className="category-item active p-2 rounded bg-light mb-1 fw-bold text-primary">
                  <span><i className="bi bi-grid-fill me-2"></i>Tất cả sản phẩm</span>
                </li>
                <li className="category-item p-2 mb-1">
                  <span><i className="bi bi-chevron-right me-2 font-12"></i>Áo thun</span>
                </li>
                
              </ul>
            </div>
          </div>

          {/* CỘT SẢN PHẨM */}
          <div className="col-lg-9 col-md-12">

            {/* Thanh sắp xếp */}
            <div className="d-flex justify-content-between align-items-center bg-white p-3 rounded-3 shadow-sm mb-4">
              <span className="fw-bold">Hiển thị {products.length} sản phẩm</span>
              <div className="d-flex align-items-center">
                <span className="me-2 text-nowrap">Sắp xếp:</span>
                <select className="form-select form-select-sm" defaultValue="price-desc">
                  <option value="featured">Nổi bật</option>
                  <option value="newest">Mới nhất</option>
                  <option value="price-desc">Giá cao - thấp</option>
                  <option value="price-asc">Giá thấp - cao</option>
                </select>
              </div>
            </div>

            {/* Danh sách sản phẩm (Dùng vòng lặp map) */}
            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="col-lg-4 col-md-6 col-6 mb-4">
                  <div className="card h-100 shadow-sm border-0 card-product">
                    {/* Ảnh sản phẩm */}
                    <div className="overflow-hidden position-relative">
                      <img src={product.img} className="card-img-top product-img" alt={product.name}
                        style={{ height: '250px', objectFit: 'cover', transition: '0.3s' }}
                      />
                    </div>

                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fs-6 fw-bold text-dark">{product.name}</h5>
                      <div className="mt-auto">
                        <p className="price text-danger fw-bold mb-2">
                          {product.price} <span className="text-decoration-underline">đ</span>
                        </p>
                        <button className="btn btn-primary w-100 btn-sm rounded-pill">
                          <i className="bi bi-cart-plus me-1"></i> Thêm vào giỏ
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default TrangChu;