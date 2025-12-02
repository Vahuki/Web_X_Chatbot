import { Route, Routes } from "react-router-dom";

import * as ClientPages from "./pages/Client";
import * as AdminPages from "./pages/Admin";
import * as StaffPages from "./pages/Staff";
import * as AuthPages from "./pages/Auth";

import LayoutKhachHang from "./components/layout/LayoutKhachHang";

function App() {
  return (
    <Routes>
      <Route element={<LayoutKhachHang />}>
        {/* 2. ĐỊNH NGHĨA ROUTE CON (TRANG CHỦ) */}
        {/* path="/" là đường dẫn gốc. */}
        <Route path="/trang-chu" element={<ClientPages.TrangChu />} />

        {/* Thêm các trang Client khác ở đây */}
        <Route path="/gio-hang" element={<ClientPages.GioHang />} />
      </Route>
    </Routes>
  );
}

export default App;
