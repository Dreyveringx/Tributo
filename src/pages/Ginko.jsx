import React from "react";
import Desktop4 from "../assets/img/Desktop4.svg";

const Ginko = () => {
  return (
    <div id="ginko" className="relative w-screen h-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={Desktop4}
        alt="Desktop1"
      />
    </div>
  );
};

export default Ginko;
