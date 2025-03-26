import React, { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import Header from "./Header";
import Welcome from "./Welcome";
import backgroundVideo from "../assets/fundo-video.mp4";
import backgroundImage from "../assets/fundo-imagem.png"; 

export default function BackgroundVideo() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    const handleResize = () => {
      setIsVideoLoaded(false);
    };

    window.addEventListener('resize', handleResize);

    if (!isMobile) {
      const videoElement = document.getElementById("background-video");
      videoElement.onloadeddata = () => {
        setIsVideoLoaded(true);
      };
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <div className="relative w-full h-screen">
      {!isVideoLoaded && (
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}
      {!isMobile && (
        <video
          id="background-video"
          className={`absolute top-0 left-0 w-full h-full object-cover ${isVideoLoaded ? 'block' : 'hidden'}`}
          src={backgroundVideo}
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
        />
      )}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#01050C]"></div>
      <div className="relative z-10 w-full h-full flex flex-col">
        <Header />
        <Welcome />
      </div>
    </div>
  );
}