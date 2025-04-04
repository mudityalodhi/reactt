import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-50 min-h-screen p-6 mx-auto">
      <h1 className="text-3xl text-black font-bold mb-6 text-center">
        About Page
      </h1>

      <div className="flex gap-6">
        <button
          onClick={() => navigate("/")}
          className="rounded bg-blue-500 text-white px-4 py-2 shadow-md transition-all"
        >
          Go to Home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="rounded bg-gray-500 text-white px-4 py-2 shadow-md transition-all"
        >
          Go Back
        </button>
        
      </div>
    </div>
  );
};

export default About;
