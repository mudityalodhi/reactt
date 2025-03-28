import React, { useEffect, useState } from "react";

const Meal = () => {
  const [mealData, setMealData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Indian"); // ✅ String hona chahiye

  useEffect(() => {
    const fetchDatafromAPI = async () => {
      try {
        const API = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedCategory}`
        );
        const data = await API.json();
        setMealData(data.meals || []); // ✅ Agar data null ho toh empty array set kare
      } catch (error) {
        console.error("Error fetching Data: ", error);
      }
    };

    fetchDatafromAPI();
  }, [selectedCategory]); // ✅ Dependency add kari

  return (
    <div className="p-6">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center items-center mb-6">
        {[
          "Indian",
          "Chinese",
          "Canadian",
          "American",
          "British",
          "Russian",
          "Thai",
          "Turkish",
        ].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)} // ✅ Button click pe category set ho rahi hai
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-110 ${
              selectedCategory === category
                ? "bg-red-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Meals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {mealData.length > 0 ? (
          mealData.map((data) => (
            <div
              key={data.idMeal}
              className="border rounded-lg p-4 shadow-lg bg-white hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="h-48 flex justify-center items-center overflow-hidden">
                <img
                  src={data.strMealThumb}
                  alt={data.strMeal}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Meal Name */}
              <h2 className="text-lg font-semibold text-center mt-2 text-gray-800">
                {data.strMeal}
              </h2>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No meals found!
          </p>
        )}
      </div>
    </div>
  );
};

export default Meal;
