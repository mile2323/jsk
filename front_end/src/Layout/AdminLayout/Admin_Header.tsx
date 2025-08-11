import React from "react";
import { Link } from "react-router-dom";

interface AdminHeaderProps {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}

const Admin_Header: React.FC<AdminHeaderProps> = ({ menuOpen, setMenuOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm h-16 flex items-center justify-between px-4 sm:px-6">
      <Link to="dashboard" className="flex items-center">
        <img
          src={`${window.config?.imageUrl}logo-sm.png`}
          alt="Company Logo"
          className="h-10 w-auto"
        />
        <span className="ml-2 text-lg font-semibold text-gray-800 hidden sm:block">
          E ENROLLMENT MANAGMENT SYSTEM
        </span>
      </Link>

      <button
        className="md:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
    </header>
  );
};

export default Admin_Header;