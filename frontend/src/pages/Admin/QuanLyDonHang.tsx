import React from 'react';

const QuanLyDonHang = () => {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-header bg-white d-flex justify-content-between">
        <h5 className="text-primary fw-bold mt-2">QUẢN LÝ ĐƠN HÀNG</h5>
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
                <th className="text-center">Mã Khách Hàng</th>
                <th className="text-center">Ngày Đặt</th>
                <th className="text-center">Tổng Tiền</th>
                <th className="text-center">Trạng Thái</th>
                <th className="text-center">Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              {/* --- DÒNG 1: Đơn hàng đang chờ duyệt --- */}
              <tr>
                <td className="text-center">1</td>
                <td className="text-center">2</td>
                <td className="text-center">01/12/2025</td>
                <td className="text-center">1.500.000 ₫</td>
                <td className="text-center">
                  <span className="badge bg-warning text-dark">Chờ Duyệt</span>
                </td>
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
              <h5 className="modal-title">Thêm Đơn Hàng Mới</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Mã Khách Hàng</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Ngày Đặt</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Tổng Tiền</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Trạng Thái</label>
                  <select className="form-select" defaultValue="0">
                    <option value="0">Duyệt</option>
                    <option value="1">Chờ Duyệt</option>
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
              <h5 className="modal-title">Cập Nhật Thông Tin Đơn Hàng</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Mã Khách Hàng</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Ngày Đặt</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Tổng Tiền</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Trạng Thái</label>
                  <select className="form-select" defaultValue="0">
                    <option value="0">Duyệt</option>
                    <option value="1">Chờ Duyệt</option>
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
    
  );
}

export default QuanLyDonHang;