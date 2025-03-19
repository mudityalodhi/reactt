import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-700 text-white p-4 flex justify-between items-center">
      
      <Link to="/" className="text-xl font-bold">
        Learning React.js
      </Link>

      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link to="/person" className="hover:text-gray-400">
          Person
        </Link>
        <Link to="/events" className="hover:text-gray-400">
          Events
        </Link>
        <Link to="/counter" className="hover:text-gray-400">
          Counter
        </Link>
        <Link to="/show-products" className="hover:text-gray-400">
          Products
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
