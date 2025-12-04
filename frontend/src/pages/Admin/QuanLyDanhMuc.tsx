import React from 'react'

const QuanLyDanhMuc = () => {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-header bg-white d-flex justify-content-between">
        <h5 className="text-primary fw-bold mt-2">QUẢN LÝ DANH MỤC</h5>
        <button className="btn btn-primary btn-sm" style={{ width: '150px' }} data-bs-toggle="modal" data-bs-target="#addModal">
                        Thêm Danh Mục
                    </button>
      </div>

      <div className="card-body">
        {/* Bảng dữ liệu tĩnh */}
        <div className="table-responsive">
          <table className="table table-hover table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th className="text-center">#</th>
                <th className="text-center">Tên Danh Mục</th>
                <th className="text-center">Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              {/* --- DÒNG 1: Đơn hàng đang chờ duyệt --- */}
              <tr>
                <td className="text-center">1</td>
                <td className="text-center">Giày</td>
                <td className="text-center">
                  <button className="btn btn-success me-2" data-bs-toggle="modal"
                    data-bs-target="#updateModal">
                    Cập nhật
                  </button>
                  <button className="btn btn-danger" data-bs-toggle="modal"
                    data-bs-target="#deleteModal">
                    Xóa
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div >
      {/* --- MODAL THÊM MỚI --- */}
      {/* Sửa lỗi tabIndex (chữ I viết hoa) */}
      <div className="modal fade" id="addModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thêm Danh Mục Mới</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Tên Danh Mục</label>
                  <input type="text" className="form-control" />
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
              <h5 className="modal-title">Cập Nhật Thông Tin Danh Mục</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Tên Danh Mục</label>
                  <input type="text" className="form-control" />
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

      {/* MODAL XÓAAAAAAAAAAAAAAA */}
      <div className="modal fade" id="deleteModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Xóa Đơn Hàng</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="alert alert-danger" role="alert">
                Bạn có chắc chắn muốn xóa đơn hàng <strong></strong>?
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
    </div >
  )
}

export default QuanLyDanhMuc
