import React, { useEffect, useState } from "react";

const SomethingNew1 = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchDatafromAPI = async () => {
      try {
        const api = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await api.json();
        console.log(data);
        setApiData(data);
      } catch (error) {
        console.error("Error coming:", error);
      }
    };
    fetchDatafromAPI();
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        API Data Cards
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {apiData.slice(0, 20).map((data) => (
          <div
            key={data.id}
            className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500 hover:scale-105 transition-all"
          >
            <div className="w-full overflow-hidden">
              <img
                src={data.thumbnailUrl}
                alt={data.title}
                className="w-full h-40 object-cover rounded-md"
              />
            </div>
            <h2 className="text-lg text-black font-semibold mt-2">{data.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SomethingNew1;
