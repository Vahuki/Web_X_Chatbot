import React from 'react'
import './TrangChu.css';

const TrangChu = () => {
  return (
    <div>
      {/* Slide */}
      {/* Thêm data-bs-ride="carousel" để nó tự động chạy */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* Sửa lại thẻ img: thêm dấu đóng /> và chỉnh style */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM15oGt7qiXMLVxBc_a9hNGs5uFJwHoySpPA&s"
              className="d-block w-100" alt="Slide 1" style={{ height: '500px' }} />
          </div>
          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWC6l4det9ianrPm0bZH4gmCpiBbKKhzAvig&s"
              className="d-block w-100" alt="Slide 2" style={{ height: '500px' }} />
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpKmgbncgsdlZsUCyCZe6KO_ImHooyxbpGBg&s"
              className="d-block w-100" alt="Slide 3" style={{ height: '500px' }} />
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
      {/* Sản phẩm nổi bật */}
      <h2 className='text-center mt-5'>SẢN PHẨM NỔI BẬT</h2>
    </div>
  )
}

export default TrangChu;