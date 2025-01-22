import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <header className="shadow-lg sticky top-0 bg-white z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            alt="Logo"
            className="h-8"
          />
          <span className="ml-2 text-lg font-bold text-orange-700">MyApp</span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/123" // Updated to dynamic route with a placeholder ID
              className={({ isActive }) =>
                isActive ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
              }
            >
              User
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/github"
              className={({ isActive }) =>
                isActive ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
              }
            >
              Github
            </NavLink>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="#"
            className="text-gray-800 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition"
          >
            Log In
          </Link>
          <Link
            to="#"
            className="bg-orange-600 text-white rounded-lg px-4 py-2 hover:bg-orange-700 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </nav>
    </header>
  );
}

export default Header;
