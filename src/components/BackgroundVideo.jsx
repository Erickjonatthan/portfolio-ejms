import React, { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import Header from "./Header";
import Welcome from "./Welcome";

const BackgroundVideo = React.memo(() => {
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
      <img
        src="/assets/fundo-imagem.png"
        alt="Background"
        className={`absolute top-0 left-0 w-full h-full object-cover ${isVideoLoaded ? 'hidden' : 'block'}`}
      />
      {!isMobile && (
        <video
          id="background-video"
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/fundo-video.mp4"
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
          aria-label="Background video"
          onLoadedData={() => setIsVideoLoaded(true)}
        />
      )}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#01050C]"></div>
      <div className="relative z-10 w-full h-full flex flex-col">
        <Header />
        <Welcome />
      </div>
    </div>
  );
});

export default BackgroundVideo;