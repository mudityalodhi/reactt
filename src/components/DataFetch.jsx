import React, { useEffect, useState } from "react";

const DataFetch = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const API = await fetch("https://jsonplaceholder.typicode.com/comments");
        const data = await API.json();
        setApiData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromAPI();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {apiData.slice(0, 28).map((data) => (
        
        <div
          key={data.id}
          className="bg-white shadow-lg p-4 rounded-xl border-l-4 border-red-500 hover:bg-gray-50 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <h1 className="font-bold text-xl text-gray-900">{data.name}</h1>
          <h3 className="font-semibold text-red-500">Email: {data.email}</h3>
          <p className="text-gray-700 mt-2">{data.body}</p>
        </div>
      ))}
    </div>
  );
};

export default DataFetch;
