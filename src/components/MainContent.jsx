import React from "react";
import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="bg-gray-50 flex flex-col items-center justify-start min-h-screen pt-20 px-4">
      <h1 className="text-3xl font-bold text-black mb-4 text-center">
        I'm Learning React.js
      </h1>
      <h2 className="text-2xl font-bold text-black mb-6 text-center">
        All Pages Here! 👇🏻
      </h2>

      {/* Buttons for Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {[
          { path: "/", label: "Home" },
          { path: "/person", label: "Check Voting" },
          { path: "/events", label: "Events" },
          { path: "/counter", label: "Counter" },
          { path: "/show-products", label: "Show Products" },
          { path: "/filter-products", label: "Filter Products" },
          { path: "/movie-zone", label: "Movie Zone" },
          { path: "/use-effect", label: "useEffect" },
          { path: "/something-1", label: "Something NEW 1" },
          { path: "/card-component", label: "Card Component" },
          { path: "/data-fetch-api", label: "Data Fetch from API" },
          { path: "/form-handling", label: "Form Handling" },
          { path: "/food-recipe", label: "Food Recipe" },
          { path: "/courses", label: "Courses" },
          { path: "/about", label: "About" },
        ].map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className="bg-white text-black px-4 py-2 rounded-lg shadow-md border-b-4 border-red-600 text-center hover:text-red-600 hover:border-red-700 transition-all duration-300"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
