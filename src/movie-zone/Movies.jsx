import React, { useState } from "react";
import { movies } from "./data.js";

const Movies = () => {
  const [movieList, setMovieList] = useState(movies);

  // Function to filter movies by category
  const filterMovies = (category) => {
    if (category === "All") {
      setMovieList(movies);
    } else {
      const filtered = movies.filter((movie) => movie.category === category);
      setMovieList(filtered);
    }
  };

  return (
    <div className="p-4 bg-black min-h-screen text-white">
      {/* Buttons for filtering */}
      <div className="flex flex-wrap gap-4 justify-center items-center mb-6">
        {[
          "All",
          "Action",
          "Thriller",
          "Animation",
          "Horror",
          "Drama",
          "Sci-Fi",
        ].map((category) => (
          <button
            key={category}
            onClick={() => filterMovies(category)}
            className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-110 hover:bg-opacity-80"
            style={{ backgroundColor: getColor(category) }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center mt-10">
        {movieList.map((data) => (
          <div key={data.id} className="text-center">
            <img
              src={data.poster_path}
              alt={data.title}
              className="w-52 h-auto rounded-lg transition-transform duration-300 hover:scale-110 shadow-lg"
            />
            <h3 className="mt-2 text-lg font-bold text-gray-200">
              {data.title}
            </h3>
            <p className="text-gray-400">{data.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to return colors for different categories
const getColor = (category) => {
  const colors = {
    All: "#3498db",
    Action: "#e74c3c",
    Thriller: "#f1c40f",
    Animation: "#2ecc71",
    Horror: "#9b59b6",
    Drama: "#e84393",
    "Sci-Fi": "#8e44ad",
  };
  return colors[category] || "#95a5a6";
};

export default Movies;
