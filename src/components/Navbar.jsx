import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white text-gray-900 shadow-md border-b-2 border-red-500 px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-gray-900 transition-all duration-300 hover:text-red-500">
        Learning React.js
      </Link>

      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden text-gray-900 text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Navbar Links */}
      <div className={`md:flex space-x-6 ${menuOpen ? "block" : "hidden"} md:block`}>
        {["Home", "Person", "Events", "Counter", ""].map((item) => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
          return (
            <Link
              key={item}
              to={path}
              className={`relative px-3 py-2 font-semibold transition-all duration-300 ease-in-out ${
                location.pathname === path ? "text-red-500" : "text-gray-900"
              } hover:text-red-500`}
            >
              {item}
              {/* Underline Animation */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
