import React, { useState, useEffect } from "react";
import Header from "./Header";
import Welcome from "./Welcome";

const BackgroundVideo = React.memo(() => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById("background-video");
    if (videoElement) {
      videoElement.onloadeddata = () => {
        setIsVideoLoaded(true);
      };
    }
  }, []);

  return (
    <div className="relative w-full h-screen">
      <img
        src="/assets/fundo-imagem.png"
        alt="Background"
        className={`absolute top-0 left-0 w-full h-full object-cover ${isVideoLoaded ? 'hidden' : 'block'}`}
      />
      <img
        id="background-video"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/fundo-video.gif"
        alt="Background animation"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#01050C]"></div>
      <div className="relative z-10 w-full h-full flex flex-col">
        <Header />
        <Welcome />
      </div>
    </div>
  );
});

export default BackgroundVideo;