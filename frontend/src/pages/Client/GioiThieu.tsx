import React from 'react'
import './GioiThieu.css'

const GioiThieu = () => {
  return (
    <div className="bg-gt my-4">
      {/* Banner đầu trang */}
      <div className="card text-center p-5 bg-primary text-light shadow-sm border-0">
            <h2><b>Về chúng tôi</b></h2>
            <p className="fs-5">Mang đến phong cách thời trang hiện đại và chất lượng cao cho mọi người</p>
        </div>

        {/* Câu chuyện của chúng tôi */}
        <div className="card mt-4 shadow-sm border-0">
            <div className="card-body p-4">
                <h3 className="text-primary mb-3"><b>Câu chuyện của chúng tôi</b></h3>
                <p>Fashion Store được thành lập vào năm 2015 với mục tiêu mang đến những sản phẩm thời trang chất lượng
                    cao, thiết kế hiện đại và giá cả hợp lý cho người tiêu dùng Việt Nam.</p>
                <p>Sau 8 năm phát triển, chúng tôi tự hào là một trong những thương hiệu thời trang được yêu thích nhất,
                    với hơn 50 cửa hàng trên toàn quốc và hơn 500,000 khách hàng trung thành.</p>
                <p>Chúng tôi cam kết không ngừng cải tiến và đổi mới để mang đến trải nghiệm mua sắm tuyệt vời nhất cho
                    khách hàng của mình.</p>
            </div>
        </div>

        {/* Giá trị cốt lõi */}
        <div className="card text-center mt-4 shadow-sm border-0">
            <div className="card-body p-4">
                <h3 className="mb-4 text-primary"><b>Giá trị cốt lõi</b></h3>
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-3">
                        {/* Đã đổi sang icon Bootstrap */}
                        <i className="bi bi-award-fill text-warning" style={{fontSize: '3rem'}}></i>
                        <h5 className="mt-3"><b>Chất lượng</b></h5>
                        <p className="text-muted">Cam kết sử dụng nguyên liệu tốt nhất và quy trình sản xuất nghiêm ngặt</p>
                    </div>
                    <div className="col-lg-4 col-md-12 mb-3">
                        <i className="bi bi-people-fill text-info" style={{fontSize: '3rem'}}></i>
                        <h5 className="mt-3"><b>Khách hàng là trung tâm</b></h5>
                        <p className="text-muted">Luôn lắng nghe và đáp ứng nhu cầu của khách hàng một cách tốt nhất</p>
                    </div>
                    <div className="col-lg-4 col-md-12 mb-3">
                        <i className="bi bi-heart-fill text-danger" style={{fontSize: '3rem'}}></i>
                        <h5 className="mt-3"><b>Đam mê</b></h5>
                        <p className="text-muted">Yêu thích thời trang và không ngừng sáng tạo để mang đến điều tốt nhất</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Sứ mệnh */}
        <div className="card mt-4 shadow-sm border-0">
            <div className="card-body p-4">
                <h3 className="text-primary mb-3"><b>Sứ mệnh</b></h3>
                <p>Mang đến những sản phẩm thời trang chất lượng cao với giá cả hợp lý, giúp mọi người tự tin thể hiện
                    phong cách cá nhân và nâng cao chất lượng cuộc sống.</p>
            </div>
        </div>

        {/* Tầm nhìn */}
        <div className="card mt-4 shadow-sm border-0">
            <div className="card-body p-4">
                <h3 className="text-primary mb-3"><b>Tầm nhìn</b></h3>
                <p>Trở thành thương hiệu thời trang hàng đầu tại Việt Nam và khu vực Đông Nam Á, được biết đến với chất
                    lượng sản phẩm vượt trội và dịch vụ khách hàng tuyệt vời.</p>
            </div>
        </div>
    </div>
  )
}

export default GioiThieu;