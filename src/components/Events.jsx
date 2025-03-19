import React from "react";

const Events = () => {
  const handleClick = () => {
    alert("You clicked the button.");
  };

  const add = (a) => {
    alert(a + 10);
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-2">

      <h1 className="text-red-500 font-bold text-3xl mb-6">Events in Reactjs</h1>
      <button className="px-4 py-2 border rounded-lg" onClick={handleClick}>
        Click me!
      </button>
      
      <button onClick={() => add(10)} className="bg-green-500 px-4 py-2 border rounded-lg">
        Addition
      </button>
    </div>
  );
};

export default Events;
