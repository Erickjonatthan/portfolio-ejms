import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useScrollToSection } from "../hooks/useScrollToSection";

export default function Welcome() {
  const scrollToSection = useScrollToSection();
  
  return (
    <div className="flex flex-col justify-center h-full pl-4 mt-24 sm:mt-32 lg:mt-36">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <h1 className="text-left text-3xl md:text-3xl lg:text-5xl lg:leading-snug font-bold text-white p-5 leading-snug md:leading-snug">
          Converto{" "}
          <span className="animated-gradient bg-clip-text text-transparent inline-flex items-center text-stroke">
            desafios
          </span>{" "}
          em oportunidades
          <br />
          por meio de{" "}
          <span className="animated-gradient bg-clip-text text-transparent inline-flex items-center text-stroke">
            soluções tecnológicas
          </span>{" "}
          eficientes,
          <br />
          impulsionando{" "}
          <span className="animated-gradient bg-clip-text text-transparent inline-flex items-center text-stroke">
            negócios
          </span>{" "}
          e aprimorando a<br />
          <span className="animated-gradient bg-clip-text text-transparent inline-flex items-center text-stroke">
            qualidade de vida
          </span>
          .
        </h1>
        <img 
          src="/assets/profile.jpg" 
          alt="Foto de Erick Jonathan Macedo dos Santos, desenvolvedor web" 
          loading="lazy" 
          className="w-52 h-52 md:w-56 md:h-56 lg:w-80 lg:h-80 rounded-full shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-blue-500/50 object-cover" 
          itemProp="image" 
        />
      </div>
      <button
        onClick={() => scrollToSection("about-me")}
        className="px-6 py-3 shadow-lg transition-transform transform hover:scale-110 hover:shadow-blue-500/50 mx-auto"
        style={{
          marginTop: "20px",
          marginLeft: "20px",
          marginBottom: "80px",
          background: "linear-gradient(90deg, #1E88E5, #42A5F5)",
          color: "#fff",
          fontWeight: "bold",
          boxShadow: "0 4px 15px rgba(30, 136, 229, 0.4)",
          transition: "all 0.4s ease-in-out",
          borderRadius: "50px",
          maxWidth: "200px",
          textAlign: "center",
        }}
      >
        Sobre mim
        <ArrowDownwardIcon className="ml-2" />
      </button>
    </div>
  );
}
