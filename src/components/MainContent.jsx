import React from "react";
import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-start h-screen pt-20">
      <h1 className="text-3xl font-bold text-black mb-4">
        I'm Learning React.js
      </h1>
      <h2 className="text-2xl font-bold text-black mb-6">All Pages Here! 👇🏻</h2>

      {/* Buttons for Navigation */}
      <div className="space-x-4 grid grid-cols-5 gap-8">
        <Link
          to="/"
          className="bg-white text-black px-4 py-2 rounded-lg shadow-md border-b-4 border-red-600 hover:text-red-600"
        >
          Home
        </Link>
        <Link
          to="/person"
          className="bg-white text-black px-4 py-2 rounded-lg shadow-md border-b-4 border-red-600 hover:text-red-600"
        >
          Check Voting
        </Link>
        <Link
          to="/events"
          className="bg-white text-black px-4 py-2 rounded-lg shadow-md border-b-4 border-red-600 hover:text-red-600"
        >
          Events
        </Link>
        <Link
          to="/counter"
          className="bg-white text-black px-4 py-2 rounded-lg shadow-md border-b-4 border-red-600 hover:text-red-600"
        >
          Counter
        </Link>
        <Link
          to="/show-products"
          className="bg-white text-black px-4 py-2 rounded-lg shadow-md border-b-4 border-red-600 hover:text-red-600"
        >
          Show Products
        </Link>
        <Link
          to="/filter-products"
          className="bg-white text-black px-4 py-2 rounded-lg shadow-md border-b-4 border-red-600 hover:text-red-600"
        >
          Filter Products
        </Link>
        <Link
          to="/movie-zone"
          className="bg-white text-black px-4 py-2 rounded-lg shadow-md border-b-4 border-red-600 hover:text-red-600"
        >
          Movie Zone
        </Link>
        <Link
          to="/use-effect"
          className="bg-white text-black px-4 py-2 rounded-lg shadow-md border-b-4 border-red-600 hover:text-red-600"
        >
          useEffect
        </Link>
        <Link
          to="/something-1"
          className="bg-white text-black px-4 py-2 rounded-lg shadow-md border-b-4 border-red-600 hover:text-red-600"
        >
          Something NEW 1
        </Link>
        <Link
          to="/card-component"
          className="bg-white text-black px-4 py-2 rounded-lg shadow-md border-b-4 border-red-600 hover:text-red-600"
        >
          Card Component
        </Link>
        <Link
          to="/data-fetch-api"
          className="bg-white text-black px-4 py-2 rounded-lg shadow-md border-b-4 border-red-600 hover:text-red-600"
        >
          Data fetch from API
        </Link>
        <Link
          to="/form-handling"
          className="bg-white text-black px-4 py-2 rounded-lg shadow-md border-b-4 border-red-600 hover:text-red-600"
        >
          Form Handling
        </Link>
        <Link
          to="/food-recipe"
          className="bg-white text-black px-4 py-2 rounded-lg shadow-md border-b-4 border-red-600 hover:text-red-600"
        >
          Food Recipe
        </Link>
      </div>
    </div>
  );
};

export default MainContent;
