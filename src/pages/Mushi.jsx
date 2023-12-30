import React from "react";
import Desktop7 from "../assets/img/Desktop7.svg";

const Mushi = () => {
  return (
    <div id="ginko" className="relative w-screen h-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={Desktop7}
        alt="Desktop1"
      />
    </div>
  );
};

export default Mushi;
