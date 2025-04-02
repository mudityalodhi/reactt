import React from "react";
import { Link } from "react-router-dom";
const Courses = () => {
  const arr = [
    {
      id: "MERN001",
      course_name: "MERN Stack",
      duration: "2 months",
    },
    {
      id: "JAVA001",
      course_name: "Java",
      duration: "3 months",
    },
    {
      id: "PYTHON002",
      course_name: "Python",
      duration: "3.5 months",
    },
    {
      id: "CPLUS003",
      course_name: "C++",
      duration: "2.5 months",
    },
    {
      id: "DSA004",
      course_name: "Data Structures & Algorithms",
      duration: "4 months",
    },
    {
      id: "UIUX005",
      course_name: "UI/UX Design",
      duration: "2 months",
    },
  ];

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Available Courses
      </h1>

      {/* Courses Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {arr.map((data) => (
          <div
            key={data.id}
            className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500 hover:scale-105 transition-all"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              <Link to={`/courses/${data.id}`}>{data.course_name}</Link>
            </h2>
            <p className="text-gray-700">Duration: {data.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
