import React from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutMe from "../../components/AboutMe";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import Navbar from "../../components/NavBar";

export default function Home() {
  useDocumentTitle("Home Page");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Header />
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Home Page</h1>

        <AboutMe />

        <Projects />

        <Skills />

        <Contact />

        <Link to="/about">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
            Go to About
          </button>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
