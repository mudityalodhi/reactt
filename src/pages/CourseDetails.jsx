import React from "react";
import { Link, useParams } from "react-router-dom";

const CourseDetails = () => {

  const { id } = useParams(); // URL se dynamic id get karega

  const courses = [
    {
      id: "MERN001",
      course_name: "MERN Stack",
      duration: "2 months",
      description: "Learn MongoDB, Express.js, React.js, and Node.js.",
    },
    {
      id: "JAVA001",
      course_name: "Java",
      duration: "3 months",
      description: "Master Java programming with hands-on projects.",
    },
    {
      id: "PYTHON002",
      course_name: "Python",
      duration: "3.5 months",
      description: "Complete Python course from basics to advanced.",
    },
    {
      id: "CPLUS003",
      course_name: "C++",
      duration: "2.5 months",
      description: "Object-Oriented Programming with C++.",
    },
    {
      id: "DSA004",
      course_name: "Data Structures & Algorithms",
      duration: "4 months",
      description: "Learn DSA with Java & problem-solving techniques.",
    },
    {
      id: "UIUX005",
      course_name: "UI/UX Design",
      duration: "2 months",
      description: "Design engaging user experiences with UI/UX principles.",
    },
  ];

  // Find course by ID
  const course = courses.find((course) => course.id === id);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Available Courses
      </h1>

      {course ? (
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-md">
          <h1 className="text-2xl font-bold text-black mb-4">
            {course.course_name}
          </h1>
          <p className="text-gray-700 mb-2">
            <strong>Duration:</strong> {course.duration}
          </p>
          <p className="text-gray-600">{course.description}</p>
        </div>
      ) : (
        <h1 className="text-2xl font-bold text-red-500">Course Not Found</h1>
      )}

      <Link to={`/courses`} className="px-4 py-2 mt-4 bg-blue-500 rounded shadow-md text-white font-bold hover:scale-105 transition-all">
        All Courses
      </Link>
    </div>
  );
};

export default CourseDetails;
