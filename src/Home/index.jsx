import React, { useState, useEffect } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Technologies from "../components/Technologies";
import Welcome from "../components/Welcome"; 
import backgroundVideo from "../assets/fundo-video.mp4";
import backgroundImage from "../assets/fundo-imagem.png"; // Substitua pelo nome do seu arquivo de imagem

export default function Home() {
  useDocumentTitle("Home Page");

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById("background-video");
    videoElement.onloadeddata = () => {
      setIsVideoLoaded(true);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full h-screen">
        {!isVideoLoaded && (
          <img
            src={backgroundImage}
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        )}
        <video
          id="background-video"
          className={`absolute top-0 left-0 w-full h-full object-cover ${isVideoLoaded ? 'block' : 'hidden'}`}
          src={backgroundVideo}
          autoPlay
          loop
          muted
          preload="auto"
        />
        <div className="relative z-10 w-full h-full flex flex-col">
          <Header />
          <Welcome />
        </div>
      </div>
      <main className="flex-grow flex flex-col items-center justify-center">
        <AboutMe />
        <Projects />
        <Skills />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}