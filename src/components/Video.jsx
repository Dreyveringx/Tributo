import React from "react";
import "@justinribeiro/lite-youtube";

const Video = () => {
  return (
    <>
      <div className="col-span-10 md:col-span-6">
        <lite-youtube
          class="shadow-2xl shadow-white/10"
          videoid="W-CMthGUhvY"
          videotitle="Mushishi"
        ></lite-youtube>
      </div>
    </>
  );
};

export default Video;
