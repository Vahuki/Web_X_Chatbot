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
                <th>Mã Đơn Hàng</th>
                <th></th>
                <th className="text-center">Ngày Đặt</th>
                <th className="text-end">Tổng Tiền</th>
                <th className="text-center">Trạng Thái</th>
                <th className="text-center">Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              {/* --- DÒNG 1: Đơn hàng đang chờ duyệt --- */}
              <tr>
                <td className="text-center">1</td>
                <td className="fw-bold text-primary">#DH001</td>
                <td>Nguyễn Văn A</td>
                <td className="text-center">01/12/2025</td>
                <td className="text-end fw-bold text-danger">1.500.000 ₫</td>
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
              {/* --- DÒNG 3: Đơn hàng hoàn thành --- */}
              <tr>
                <td className="text-center">3</td>
                <td className="fw-bold text-primary">#DH003</td>
                <td>Lê Văn C</td>
                <td className="text-center">28/11/2025</td>
                <td className="text-end fw-bold text-danger">2.100.000 ₫</td>
                <td className="text-center">
                  <span className="badge bg-success">Hoàn Thành</span>
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

              {/* --- DÒNG 4: Đơn hàng đã hủy --- */}
              <tr>
                <td className="text-center">4</td>
                <td className="fw-bold text-primary">#DH004</td>
                <td>Phạm Thị D</td>
                <td className="text-center">30/11/2025</td>
                <td className="text-end fw-bold text-danger">300.000 ₫</td>
                <td className="text-center">
                  <span className="badge bg-danger">Đã Hủy</span>
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
    </div >
  );
}

export default QuanLyDonHang;