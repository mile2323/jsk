import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [ourLinksOpen, setOurLinksOpen] = useState(false);
  const location = useLocation(); // ✅ To track current route

  const closeMenu = () => {
    setMenuOpen(false);
    // setOurLinksOpen(false);
  };

  const linkBaseClasses =
    "block px-4 py-2 md:px-3 md:py-1 font-semibold rounded-md transition duration-300";
  const hoverClasses =
    "hover:bg-gray-100 hover:text-blue-600 hover:shadow-md";
  const activeClasses =
    "text-blue-700 border-b-2 border-blue-600 shadow-sm";

  const isActive = (path: string) =>
    location.pathname === path ? activeClasses : "text-gray-700";

  return (
    <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-between sticky top-0 z-50">
      {/* Left side - Logo */}
      <div className="flex items-center pl-1">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          {/* <img
            src={`${window.config.imageUrl}logo-sm.png`}
            alt="Company Logo"
            className="h-10 w-auto"
          /> */}
          <span className="ml-2 text-lg md:text-xl font-semibold text-gray-800">
            E ENROLLMENT SYSTEM
          </span>
        </Link>
      </div>

      {/* Hamburger Button */}
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

      {/* Navigation */}
     <nav
  className={`${
    menuOpen ? "block" : "hidden"
  } absolute top-full left-0 w-full shadow-md md:shadow-none md:static md:flex md:items-center md:space-x-4 md:w-auto`}
  style={{
    background:
      "linear-gradient(90deg, rgba(225, 106, 106, 1) 0%, rgba(212, 111, 229, 1) 42%, rgba(222, 237, 196, 1) 100%)",
    
   
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    // height: "20px",
   
  }}
>
        <Link
          to="/home"
          onClick={closeMenu}
          className={`${linkBaseClasses} ${hoverClasses} ${isActive("/home")}`}
        >
          Home
        </Link>
        <Link
          to="/login"
          onClick={closeMenu}
          className={`${linkBaseClasses} ${hoverClasses} ${isActive("/login")}`}  
        >
          Login 
        </Link>
        <Link
          to="/register"
          onClick={closeMenu}
          className={`${linkBaseClasses} ${hoverClasses} ${isActive("/register")}`} 
        >
          Register
        </Link>

      </nav>
    </header>
  );
};

export default Header;
