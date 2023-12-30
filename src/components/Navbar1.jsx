import React from "react";
import { Link } from "react-router-dom";
import "../animations/styles/animations.css";

const Navbar1 = () => {
  return (
    <nav className="mt-8 transform translate-x-32 translate-y-1/2 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center space-x-20 font-font1 text-5xl">
            <Link
              to="/"
              className="text-white relative transition duration-300 custom-shadow-animation"
            >
              Inicio
            </Link>
            <Link
              to="/ginko"
              className="text-white relative transition duration-300 custom-shadow-animation"
            >
              Ginko
            </Link>
            <Link
              to="/mushi"
              className="text-white relative transition duration-300 custom-shadow-animation"
            >
              Mushi
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
