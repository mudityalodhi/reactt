import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 h-screen">
      <h1 className="text-3xl font-bold mb-4">Conter App</h1>
      <p className="text-2xl mb-4">Count : {count}</p>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
