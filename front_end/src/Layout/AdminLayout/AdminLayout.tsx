import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./Admin_Header";
import AdminSidebar from "./Admin_Sidebar";
import AdminFooter from "./Admin_Footer";

const Admin_Layout: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Fixed Header */}
      <AdminHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="flex flex-1 overflow-hidden pt-16">
        {/* Fixed Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 w-50 bg-white shadow-md transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300 ease-in-out z-20 pt-16`}
        >
          <AdminSidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 flex flex-col overflow-auto md:ml-50">
          <div className="p-4 md:p-6 flex-1">
            <main className="bg-white shadow-md rounded-lg p-4 md:p-6">
              <Outlet />
            </main>
          </div>

          {/* Footer */}
          <AdminFooter />
        </div>
      </div>
    </div>
  );
};

export default Admin_Layout;