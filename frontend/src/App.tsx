import { Route, Routes } from "react-router-dom";

import * as ClientPages from "./pages/Client";
import * as AdminPages from "./pages/Admin";
import * as StaffPages from "./pages/Staff";
import * as AuthPages from "./pages/Auth";

import LayoutKhachHang from "./components/layout/LayoutKhachHang";
import LayoutAdmin from "./components/layout/LayoutAdmin";

function App() {
  return (
    <Routes>
      {/* ----------------------------CLIENT---------------------------- */}
      <Route element={<LayoutKhachHang />}>
        {/* 2. ROUTE CLIENT */}
        <Route path="/trang-chu" element={<ClientPages.TrangChu />} />
        <Route path="/san-pham" element={<ClientPages.SanPham/>} />
        <Route path="/gioi-thieu" element={<ClientPages.GioiThieu/>} />
        <Route path="/lien-he" element={<ClientPages.LienHe/>} />
        <Route path="/gio-hang" element={<ClientPages.GioHang />} />
      </Route>
      {/* ----------------------------ADMIN---------------------------- */}
      <Route element={<LayoutAdmin />}>
        {/* 2. ROUTE Admin */}
        <Route path="/quan-ly-tai-khoan" element={<AdminPages.QuanLyNguoiDung />} />
        <Route path="/quan-ly-san-pham" element={<AdminPages.QuanLySanPham/>} />
        <Route path="/quan-ly-don-hang" element={<AdminPages.QuanLyDonHang/>} />
      </Route>
      {/* ----------------------------STAFF---------------------------- */}
      <Route path="ho-tro" element={<StaffPages.HoTroKhachHang />} />
      {/* ------------------------------------------------------------------------ */}
      <Route path="/dang-nhap" element={<AuthPages.DangNhap />} />
      <Route path="/dang-ky" element={<AuthPages.DangKy />} />
      
    </Routes>
  );
}

export default App;
