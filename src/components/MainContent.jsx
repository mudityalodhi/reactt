import React from "react";
import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="bg-blue-400 flex flex-col items-center justify-start h-screen pt-20">
      <h1 className="text-3xl font-bold text-white mb-4">I'm Learning React.js</h1>
      <h2 className="text-2xl font-bold text-white mb-6">All Pages Here! 👇🏻</h2>

      {/* Buttons for Navigation */}
      <div className="space-x-4">
        <Link to="/" className="bg-white text-blue-500 px-4 py-2 rounded-lg shadow-md">Home</Link>
        <Link to="/person" className="bg-white text-blue-500 px-4 py-2 rounded-lg shadow-md">Check Voting</Link>
        <Link to="/events" className="bg-white text-blue-500 px-4 py-2 rounded-lg shadow-md">Events</Link>
        <Link to="/counter" className="bg-white text-blue-500 px-4 py-2 rounded-lg shadow-md">Counter</Link>
        <Link to="/show-products" className="bg-white text-blue-500 px-4 py-2 rounded-lg shadow-md">Show Products</Link>
        <Link to="/filter-products" className="bg-white text-blue-500 px-4 py-2 rounded-lg shadow-md">Filter Products</Link>
      </div>
    </div>
  );
};

export default MainContent;
