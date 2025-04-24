import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Background from "../components/Background";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Education from "../components/Education";

export default function Home() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url("/assets/fundo.png")`,
          backgroundAttachment: 'fixed'
        }}
      ></div>
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `linear-gradient(to bottom, #000000 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.3) 100%)`
        }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen">
        <Background />
        <main className="flex-grow flex flex-col items-center justify-center w-full">
          <AboutMe />
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
      <ScrollToTopButton show={showScrollToTop} />
    </div>
  );
}