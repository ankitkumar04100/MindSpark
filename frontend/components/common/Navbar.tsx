import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <Link to="/" className="font-bold text-xl text-blue-600">
        MindSpark
      </Link>

      <div className="space-x-4">
        <Link to="/student">Student</Link>
        <Link to="/teacher">Teacher</Link>
      </div>
    </nav>
  );
};

export default Navbar;
