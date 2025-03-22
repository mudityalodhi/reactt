import React from "react";

const CardComponent = () => {
  const cardData = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkoV0_YybcxQB5r9re8Cu0Ez3-L6IIgbocdg&s",
      title: "Gojo",
      description: "This is a short description for the first card.",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi4WfgZj09BH6L8Barsiq2W6jAZMVI7YS8zA&s",
      title: "Sasuke",
      description: "This is a short description for the second card.",
      buttonColor: "bg-green-500 hover:bg-green-600",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCHjK-0cRBuHvjOysDKhUA5qBX4aAxE2yf0A&s",
      title: "Naruto",
      description: "This is a short description for the third card.",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100">
      

      {cardData.map((data) => (
        <div
          key={data.id}
          className="max-w-sm bg-white rounded-xl overflow-hidden"
        >
          <img
            src={data.image}
            alt={data.title}
            className="h-48 object-cover w-full"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 ">{data.title}</h2>
            <p className="text-gray-800 mb-4">{data.description}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
