import React from "react";
import "../styles/background.css";
import video from "../assets/bg-universe.webm";
import fallbackImage from "../assets/fallback-image.png";

const Background = () => {
  return (
    <>
      <div className="shadow-overlay"></div>
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        id="bg"
        poster={fallbackImage}
      >
        <source src={video} type="video/webm" />
      </video>
    </>
  );
};

export default Background;
