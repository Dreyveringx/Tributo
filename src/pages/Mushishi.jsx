import React from "react";
import Desktop3 from "../assets/img/desktop3.svg";
import Video from "../components/Video";
import Description1 from "../components/Description1";
import Titulo from "../assets/img/titulo.svg";
import Navbar1 from "../components/Navbar1";

const Mushishi = () => {
  return (
    <div id="mushishi" className="relative w-screen h-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={Desktop3}
        alt="Desktop1"
      />
      <img
        src={Titulo}
        alt="Mushishi"
        className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-10 gap-40 mx-auto p-4 md:p-20">
          <div className="col-span-1 md:col-span-6">
            <Video />
            <Navbar1 />
          </div>
          <div className="col-span-1 md:col-span-4">
            <Description1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mushishi;
