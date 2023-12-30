import React, { useState } from "react";
import { Link } from "react-router-dom";
import Desktop1 from "../assets/img/Desktop1.svg";
import Desktop2 from "../assets/img/Desktop2.svg";
import "../animations/styles/animations.css";

const Home = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative w-screen h-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={Desktop1}
        alt="Desktop1"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          className="w-1280 h-720 object-cover"
          src={Desktop2}
          alt="Desktop2"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Link to="/mushishi">
          <button
            className="w-32 h-32 rounded-full flex items-center justify-center relative overflow-hidden custom-button"
            onMouseEnter={(e) => {
              setHovered(true);
              e.currentTarget.classList.add("shadow-animation");
            }}
            onMouseLeave={(e) => {
              setHovered(false);
              e.currentTarget.classList.remove("shadow-animation");
            }}
          >
            <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center">
              <h1
                className={`font-font1 text-4xl ${
                  hovered ? "text-hov" : "text-white"
                }`}
              >
                Entrar
              </h1>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
