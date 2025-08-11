import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./Admin_Header";
import AdminSidebar from "./Admin_Sidebar";
import AdminFooter from "./Admin_Footer";

const AdminLayout: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Fixed Header */}
      <AdminHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Content Area with Sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Below header on desktop, overlay on mobile */}
        <AdminSidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Scrollable Main Content */}
        <div className="flex-1 flex flex-col md:ml-64 overflow-auto">
          <div className="p-4 md:p-6 flex-1">
            <main className="bg-white shadow-md rounded-lg p-4 md:p-6">
              <Outlet />
            </main>
          </div>
        </div>
      </div>

      {/* Full-width Footer */}
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;