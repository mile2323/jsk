import React from "react";
import { Link } from "react-router-dom";

interface AdminHeaderProps {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}

const Admin_Header: React.FC<AdminHeaderProps> = ({ menuOpen, setMenuOpen }) => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-between sticky top-0 z-50 w-full">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="dashboard" className="flex items-center">
          <img
            src={`${window.config.imageUrl}logo-sm.png`}
            alt="Company Logo"
            className="h-10 w-auto"
          />
          <span className="ml-2 text-lg md:text-xl font-semibold text-gray-800">
            MILESTONE SOFT TECH PVT. LTD.
          </span>
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden flex items-center text-gray-700 hover:text-gray-900"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </header>
  );
};

export default Admin_Header;