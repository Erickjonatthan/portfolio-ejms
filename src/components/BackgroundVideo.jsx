import React, { useState, useEffect } from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import backgroundVideo from "../assets/fundo-video.mp4";
import backgroundImage from "../assets/fundo-imagem.png"; 

export default function BackgroundVideo() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const videoElement = document.getElementById("background-video");
    videoElement.onloadeddata = () => {
      setIsVideoLoaded(true);
    };

    // Mostrar a imagem por alguns segundos antes de exibir o vídeo
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 3000); // 3000ms = 3 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {(showImage || !isVideoLoaded || isMenuOpen) && (
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}
      <video
        id="background-video"
        className={`absolute top-0 left-0 w-full h-full object-cover ${isVideoLoaded && !isMenuOpen && !showImage ? 'block' : 'hidden'}`}
        src={backgroundVideo}
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#01050C]"></div>
      <div className="relative z-10 w-full h-full flex flex-col">
        <Header setIsMenuOpen={setIsMenuOpen} />
        <Welcome />
      </div>
    </div>
  );
}