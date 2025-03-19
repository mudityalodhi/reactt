import React from "react";
import { data } from "react-router-dom";

const ShowProducts = () => {
  let products = [
    { id: 1, title: "iPhone 11", price: 40000 },
    { id: 2, title: "iPhone 12", price: 50000 },
    { id: 3, title: "iPhone 13", price: 60000 },
  ];
  return (
    <div className="bg-green-200 p-4 ">
      {products.map((data) => (
        <div key={data.id}>
          <h1 className="font-bold">Title : {data.title}</h1>
          <p className="">Price : {data.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowProducts;
