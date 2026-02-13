import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle =
    "px-3 py-2 rounded-lg text-sm font-medium transition hover:bg-blue-50";

  const activeStyle = "text-blue-600 font-semibold";

  return (
    <nav
      className="bg-white shadow-md sticky top-0 z-50"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-blue-600 tracking-tight"
        >
          MindSpark
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLink
            to="/student"
            className={({ isActive }) =>
              `${navLinkStyle} ${isActive ? activeStyle : "text-gray-700"}`
            }
          >
            Student
          </NavLink>

          <NavLink
            to="/teacher"
            className={({ isActive }) =>
              `${navLinkStyle} ${isActive ? activeStyle : "text-gray-700"}`
            }
          >
            Teacher
          </NavLink>

          {user ? (
            <>
              <span className="text-sm text-gray-500">
                {user.name}
              </span>
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <span className="text-sm text-gray-500">
              Guest Mode
            </span>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-white shadow">
          <NavLink to="/student" className="block text-gray-700">
            Student
          </NavLink>
          <NavLink to="/teacher" className="block text-gray-700">
            Teacher
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
