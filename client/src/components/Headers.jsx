import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-xl font-semibold text-gray-800"
          >
            🚗
            <span className="ml-2">Car Rental App</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>

            <Link
              to="/cars"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              All Cars
            </Link>

            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Contact
            </Link>

            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
            >
              Register
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600"
              >
                Home
              </Link>

              <Link
                to="/cars"
                className="text-gray-700 hover:text-blue-600"
              >
                All Cars
              </Link>

              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600"
              >
                Contact
              </Link>

              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-md bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;