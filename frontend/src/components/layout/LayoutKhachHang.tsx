import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ChatBot from "../../pages/Client/TroLyAI";
const LayoutKhachHang = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
        <ChatBot />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutKhachHang;
