import React, { useState } from "react";

const Person = () => {
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const checkEligibility = () => {
    if (age === "") {
      setMessage("Please enter your age.");
    } else if (age >= 18) {
      setMessage("🎉 Hurray! You're Eligible for Voting.");
    } else {
      setMessage("❌ Oops! You're not Eligible for Voting.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center w-80">
        <h1 className="text-xl font-bold mb-4">Check Voting Eligibility</h1>
        
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border p-2 w-full rounded mb-4"
        />

        <button 
          onClick={checkEligibility} 
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Check
        </button>

        {message && (
          <h2 className={`mt-4 font-semibold ${age >= 18 ? "text-green-500" : "text-red-500"}`}>
            {message}
          </h2>
        )}
      </div>
    </div>
  );
};

export default Person;
