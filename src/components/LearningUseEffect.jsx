import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Importing arrow icons

const LearningUseEffect = () => {
  const [count, setCount] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    document.title = count;
    console.log("Learning useEffect");
  }, [count]);

  return (
    <div className="flex items-center justify-center flex-col h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">Learning useEffect</h1>

      <div className="text-xl font-semibold my-4">Count: {count}</div>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition"
        >
          Decrement
        </button>
      </div>

      {/* Toggle Description Button */}
      
      <button
        onClick={() => setShowDescription(!showDescription)}
        className="mt-6 flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition"
      >
        {showDescription ? "Hide Description" : "Show Description"}
        {showDescription ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {showDescription && (
        <p className="text-lg mt-4 text-center w-3/4 bg-gray-800 p-4 rounded-lg">
          Jab component render hota hai, `useEffect` run hota hai aur jab bhi
          `count` update hota hai toh `useEffect` firse run hota hai aur
          document title change hota hai.
        </p>
      )}
    </div>
  );
};

export default LearningUseEffect;
