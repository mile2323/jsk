import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = () => {
  return (
   <div id="layout-wrapper" className="min-h-screen w-full bg-gray-100">
      <Header />

      <div className="flex flex-1 w-full">
        <div className="main-content flex-1 w-full">
          <main className="w-full bg-white shadow-md p-4">
            <Outlet />
          </main>
        </div>
      </div>

      <Footer />
  </div>

  );
};

export default Layout;
