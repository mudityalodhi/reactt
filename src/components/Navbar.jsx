import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  // Check if user is logged in on component mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(loggedIn === "true");
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // Remove login state
    setIsAuthenticated(false);
  };

  return (
    <nav className="bg-white text-gray-900 shadow-md border-b-2 border-red-500 px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-gray-900 transition-all duration-300 hover:text-red-500">
        Learning React.js
      </Link>

      {/* Hamburger Icon for Mobile */}
      <button className="md:hidden text-gray-900 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Navbar Links */}
      <div
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none py-4 md:py-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        } md:flex`}
      >
        {["Home", "About", "Courses", "Events", "Contact"].map((item) => {
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
            </Link>
          );
        })}

        {/* Dashboard (Only if Logged In) */}
        {isAuthenticated && (
          <Link
            to="/dashboard"
            className="px-3 py-2 font-semibold text-gray-900 hover:text-red-500"
          >
            Dashboard
          </Link>
        )}

        {/* Login/Logout Button */}
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
