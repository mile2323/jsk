import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
  };

  const toggleSubMenu = (title: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const menuItems: MenuItem[] = [
    {
      title: 'Dashboard',
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
      path: 'dashboard',
    },
    // Add other menu items here
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar Container */}
      <div
        className={`fixed md:fixed top-16 left-0 z-40 w-64 h-[calc(100vh-64px)] bg-white border-r border-gray-200 transform
        ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col`}
      >
        {/* Mobile Header */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center md:hidden">
          <p className="font-bold text-gray-700">Admin Menu</p>
          <button onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        {/* Profile Section */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center relative">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">John Doe</p>
              <p className="text-xs font-medium text-gray-500">Admin</p>
            </div>
            <button
              className={`ml-auto text-gray-500 hover:text-gray-700 focus:outline-none transition-transform ${
                showProfileDropdown ? 'rotate-180' : ''
              }`}
              onClick={() => setShowProfileDropdown((prev) => !prev)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showProfileDropdown && (
              <div className="absolute right-0 top-12 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                <ul className="text-sm text-gray-700">
                  <li>
                    <a href="/profile" className="block px-4 py-2 hover:bg-gray-100 rounded">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="/settings" className="block px-4 py-2 hover:bg-gray-100 rounded">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={handleLogout}
                      className="block px-4 py-2 hover:bg-gray-100 rounded text-red-500 cursor-pointer"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto">
          <nav className="px-2 py-4">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <div key={item.title}>
                  {item.path ? (
                    <Link
                      to={item.path}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                        location.pathname.includes(item.path)
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="mr-3 text-gray-500 group-hover:text-gray-500">{item.icon}</span>
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleSubMenu(item.title)}
                        className={`group w-full flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                          expandedItems[item.title] ||
                          item.subItems?.some((subItem) => location.pathname.includes(subItem.path || ''))
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <span className="mr-3 text-gray-500 group-hover:text-gray-500">{item.icon}</span>
                        {item.title}
                        <svg
                          className={`ml-auto h-5 w-5 transform transition-transform ${
                            expandedItems[item.title] ? 'rotate-90' : ''
                          }`}
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
                              to={subItem.path || '#'}
                              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                                location.pathname.includes(subItem.path || '')
                                  ? 'bg-blue-50 text-blue-600'
                                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
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
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Admin_Sidebar;