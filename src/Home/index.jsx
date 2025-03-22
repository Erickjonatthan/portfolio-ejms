import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Technologies from "../components/Technologies";
import BackgroundVideo from "../components/BackgroundVideo";

export default function Home() {
  useDocumentTitle("Home Page");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <BackgroundVideo />
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