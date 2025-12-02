import React from 'react'

const QuanLySanPham = () => {
  return (
    <div>
      <div className="card shadow-sm border-0">
        <div className="card-header bg-white d-flex justify-content-between">
          <h5 className="text-primary fw-bold mt-2">QUẢN LÝ SẢN PHẨM</h5>
          <button className="btn btn-primary btn-sm" style={{ width: '150px' }} data-bs-toggle="modal" data-bs-target="#addModal">
            Thêm Sản Phẩm
          </button>
        </div>

        <div className="card-body">
          {/* Bảng dữ liệu tĩnh */}
          <div className="table-responsive">
            <table className="table table-hover table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th className="text-center">#</th>
                  <th className="text-center">Tên</th>
                  <th className="text-center">Giá</th>
                  <th className="text-center">Mô Tả</th>
                  <th className="text-center">Hình Ảnh</th>
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
      {/* --- MODAL THÊM MỚI --- */}
      {/* Sửa lỗi tabIndex (chữ I viết hoa) */}
      <div className="modal fade" id="addModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thêm Sản Phẩm Mới</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Tên</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Giá</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Mô tả</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Hình ảnh</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Size</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Màu</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Số Lượng</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Loại</label>
                  <select className="form-select" defaultValue="0">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Đóng
              </button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                Thêm mới
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* --- MODAL CẬP NHẬT */}
      <div className="modal fade" id="updateModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cập Nhật Thông Tin Sản Phẩm</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Tên</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Giá</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Mô tả</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Hình ảnh</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Size</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Màu</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Số Lượng</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Loại</label>
                  <select className="form-select" defaultValue="0">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Đóng
              </button>
              <button type="button" className="btn btn-success" data-bs-dismiss="modal">
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL XÓA */}
      <div className="modal fade" id="deleteModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Xóa Tài Khoản</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="alert alert-danger" role="alert">
                Bạn có chắc chắn muốn xóa sản phẩm <strong></strong>?
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Đóng
              </button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuanLySanPham
