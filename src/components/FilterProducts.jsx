import React, { useState } from "react";

const FilterProducts = () => {
  const products = [
    { id: 1, title: "iPhone 14", category: "mobile", price: 79999 },
    { id: 2, title: "Samsung Galaxy S23", category: "mobile", price: 74999 },
    { id: 3, title: "OnePlus 11", category: "mobile", price: 59999 },
    { id: 4, title: "MacBook Air", category: "laptop", price: 99999 },
    { id: 5, title: "Dell XPS 13", category: "laptop", price: 119999 },
    { id: 6, title: "Asus ROG Strix", category: "laptop", price: 139999 },
    { id: 7, title: "Sony WH-1000XM5", category: "headphones", price: 29999 },
    { id: 8, title: "JBL Tune 750", category: "headphones", price: 9999 },
    { id: 9, title: "Boat Rockerz 450", category: "headphones", price: 3999 },
    { id: 10, title: "iPad Pro", category: "tablet", price: 85999 },
    {
      id: 11,
      title: "Samsung Galaxy Tab S8",
      category: "tablet",
      price: 74999,
    },
    { id: 12, title: "Lenovo Tab P11", category: "tablet", price: 29999 },
    { id: 13, title: "JBL Flip 6", category: "speaker", price: 11999 },
    { id: 14, title: "Sony SRS-XB23", category: "speaker", price: 8999 },
    { id: 15, title: "Amazon Echo Dot", category: "speaker", price: 4999 },
  ];

  const [filteredCategory, setFilteredCategory] = useState("all");

  const filteredProducts =
    filteredCategory === "all"
      ? products
      : products.filter((product) => product.category === filteredCategory);

  return (
    <div className="p-5 text-center">
      <h1 className="text-3xl font-bold mb-5">Filter Products bt Category</h1>

      {/* Filter Buttons */}
      <div className="mb-4 flex flex-wrap justify-center gap-3">
        {["all", "mobile", "laptop", "headphones", "tablet", "speaker"].map(
          (category) => (
            <button
              key={category}
              onClick={() => setFilteredCategory(category)}
              className={`px-4 py-2 rounded ${
                filteredCategory === category
                  ? "bg-blue-700 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
                {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          )
        )}
      </div>

      {/* Display filtered products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
            <div key={product.id} 
            className="p-4 border rounded shadow-md bg-white">
                <h2 className="text-xl font-semibold"> {product.title}</h2>
                <p className="text-gray-600">Category : {product.category}</p>
                <p className="text-green-600 font-bold">₹{product.price}</p>

            </div>
        ))}
      </div>
    </div>
  );
};

export default FilterProducts;
