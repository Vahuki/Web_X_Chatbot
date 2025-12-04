import React from 'react'

const QuanLySanPham = () => {
  return (
    <div>
      <div className="card shadow-sm border-0">
        <div className="card-header bg-white d-flex justify-content-between">
          <h5 className="text-primary fw-bold mt-2">QUẢN LÝ SẢN PHẨM</h5>
          <button className="btn btn-primary btn-sm" style={{ width: '150px' }} data-bs-toggle="modal" data-bs-target="#addModal">
            Thêm Đơn Hàng
          </button>
        </div>

        <div className="card-body">
          {/* Bảng dữ liệu tĩnh */}
          <div className="table-responsive">
            <table className="table table-hover table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th className="text-center">#</th>
                  <th>Mã Sản Phẩm</th>
                  <th>Tên</th>
                  <th className="text-center">Giá</th>
                  <th className="text-start">Mô Tả</th>
                  <th className="text-start">Hình Ảnh</th>
                  <th className="text-center">Size</th>
                  <th className="text-center">Màu</th>
                  <th className="text-center">Số Lượng</th>
                  <th className="text-center">Loại</th>
                  <th className="text-center">Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                {/* --- DÒNG 1: Đơn hàng đang chờ duyệt --- */}
                <tr>
                  <td className="text-center">1</td>
                  <td>#SP001</td>
                  <td>Áo Thun Basic</td>
                  <td className="text-center">150.000 đ</td>
                  <td>Chất liệu Cotton 100%, thoáng mát, thấm hút mồ hôi.</td>
                  <td className="text-center">
                    {/* Ảnh minh họa */}
                    <img
                      src="https://placehold.co/50x50?text=Ao"
                      alt="SP"
                      className="rounded border"
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                  </td>
                  <td className="text-center">L</td>
                  <td className="text-center">Trắng</td>
                  <td className="text-center">100</td>
                  <td className="text-center">Áo Nam</td>
                  <td className="text-center text-nowrap">
                    <button className="btn btn-success btn-sm me-2" data-bs-toggle="modal" data-bs-target="#updateModal">
                      <i className="bi bi-pencil-square"></i> Sửa
                    </button>
                    <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal">
                      <i className="bi bi-trash"></i> Xóa
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div >
      </div >
    </div>
  )
}

export default QuanLySanPham
