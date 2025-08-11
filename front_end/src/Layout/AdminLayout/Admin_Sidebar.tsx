import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: MenuItem[];
}

interface AdminSidebarProps {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}

const Admin_Sidebar: React.FC<AdminSidebarProps> = ({ menuOpen, setMenuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [showProfileDropdown, setShowProfileDropdown] = useState<boolean>(false);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/login", { replace: true });
  };

  const toggleSubMenu = (title: string) => {
    setExpandedItems((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const menuItems: MenuItem[] = [
    {
      title: "Dashboard",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
      path: "dashboard",
    },
    // Add more menu items as needed
  ];

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-10 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <aside className="flex flex-col h-full bg-white border-r border-gray-200 w-50">
        <div className="p-4 border-b border-gray-200">
          <div className="relative flex items-center">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">John Doe</p>
              <p className="text-xs font-medium text-gray-500">Admin</p>
            </div>
            <button
              className="ml-auto p-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              onClick={() => setShowProfileDropdown((prev) => !prev)}
              aria-expanded={showProfileDropdown}
              aria-label="Toggle profile dropdown"
            >
              <svg className={`w-5 h-5 transition-transform ${showProfileDropdown ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showProfileDropdown && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                <ul className="text-sm text-gray-700">
                  <li>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setMenuOpen(false)}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setMenuOpen(false)}
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
          {menuItems.map((item) => (
            <div key={item.title}>
              {item.path ? (
                <Link
                  to={item.path}
                  className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    location.pathname.includes(item.path)
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="mr-3 text-gray-500">{item.icon}</span>
                  {item.title}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => toggleSubMenu(item.title)}
                    className={`w-full flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      expandedItems[item.title] || item.subItems?.some((subItem) => location.pathname.includes(subItem.path || ""))
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <span className="mr-3 text-gray-500">{item.icon}</span>
                    {item.title}
                    <svg
                      className={`ml-auto h-5 w-5 transition-transform ${expandedItems[item.title] ? "rotate-90" : ""}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {expandedItems[item.title] && (
                    <div className="ml-8 mt-1 space-y-1">
                      {item.subItems?.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.path || "#"}
                          className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                            location.pathname.includes(subItem.path || "")
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          }`}
                          onClick={() => setMenuOpen(false)}
                        >
                          <span className="mr-3">{subItem.icon}</span>
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Admin_Sidebar;