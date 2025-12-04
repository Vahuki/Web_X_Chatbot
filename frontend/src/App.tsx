import { Route, Routes } from "react-router-dom";

import * as ClientPages from "./pages/Client";
import * as AdminPages from "./pages/Admin";
import * as StaffPages from "./pages/Staff";
import * as AuthPages from "./pages/Auth";
import LayoutKhachHang from "./components/layout/LayoutKhachHang";
import LayoutAdmin from "./components/layout/LayoutAdmin";

// 1. Import Component bảo vệ
import ProtectedRoute from './components/common/ProtectedRoute';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <>
      <Routes>
        {/* ----------------------------CLIENT (CÔNG KHAI)---------------------------- */}
        {/* Ai cũng vào được */}
        <Route element={<LayoutKhachHang />}>
          <Route path="/" element={<ClientPages.TrangChu />} />
          <Route path="/gioi-thieu" element={<ClientPages.GioiThieu />} />
          <Route path="/lien-he" element={<ClientPages.LienHe />} />
          <Route path="/gio-hang" element={<ClientPages.GioHang />} />
          <Route path="/san-pham/:id" element={<ClientPages.ChiTietSanPham />} />
        </Route>

        {/* ----------------------------ADMIN (BẢO MẬT)---------------------------- */}
        {/* Chỉ Admin (Role = 1) mới được vào khu vực này */}
        <Route element={<ProtectedRoute allowedRoles={[1]} />}>
            <Route element={<LayoutAdmin />}>
              <Route path="/quan-ly-tai-khoan" element={<AdminPages.QuanLyNguoiDung />} />
              <Route path="/quan-ly-san-pham" element={<AdminPages.QuanLySanPham />} />
              <Route path="/quan-ly-don-hang" element={<AdminPages.QuanLyDonHang />} />
              <Route path="/quan-ly-danh-muc" element={<AdminPages.QuanLyDanhMuc />} />
            </Route>
        </Route>

        {/* ----------------------------STAFF (BẢO MẬT)---------------------------- */}
        {/*Staff (0) được vào.*/}
        <Route element={<ProtectedRoute allowedRoles={[2]} />}>
            <Route path="/ho-tro" element={<StaffPages.HoTroKhachHang />} />
        </Route>

        {/* ----------------------------AUTH (CÔNG KHAI)---------------------------- */}
        <Route path="/dang-nhap" element={<AuthPages.DangNhap />} />
        <Route path="/dang-ky" element={<AuthPages.DangKy />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
=======
  );
}

export default App;