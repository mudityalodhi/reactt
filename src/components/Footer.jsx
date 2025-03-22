import React from "react";

const Footer = () => {

  return (
    <footer className="bg-white text-gray-900 text-center shadow-md border-t-2 border-red-500 px-6 py-4">
      <h2 className="font-semibold">
        Made by{" "}
        <span className="font-bold hover:text-red-500 transition-all duration-300">
          Muditya Lodhi
        </span>
      </h2>
      <p className="text-gray-700 text-sm mt-1">
        © 2025 All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
