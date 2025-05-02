import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useScrollToSection } from "../hooks/useScrollToSection";

export default function Welcome() {
  const scrollToSection = useScrollToSection();
  
  return (
    <div className="container mx-auto px-4 h-screen flex items-center">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-2/3 space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white lg:leading-normal py-1">
            Converto{" "}
            <span className="animated-gradient bg-clip-text text-transparent inline-flex items-center text-stroke">
              desafios
            </span>{" "}
            em oportunidades por meio de{" "}
            <span className="animated-gradient bg-clip-text text-transparent inline-flex items-center text-stroke">
              soluções tecnológicas
            </span>{" "}
            eficientes, impulsionando{" "}
            <span className="animated-gradient bg-clip-text text-transparent inline-flex items-center text-stroke">
              negócios
            </span>{" "}
            e aprimorando a{" "}
            <span className="animated-gradient bg-clip-text text-transparent inline-flex items-center text-stroke">
              qualidade de vida
            </span>
            .
          </h1>
          <button
            onClick={() => scrollToSection("about-me")}
            className="inline-flex items-center px-6 py-3 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
            style={{
              background: "linear-gradient(90deg, #1E88E5, #42A5F5)",
              color: "#fff",
              fontWeight: "bold",
              boxShadow: "0 4px 15px rgba(30, 136, 229, 0.4)",
              borderRadius: "50px",
            }}
          >
            Sobre mim
            <ArrowDownwardIcon className="ml-2" />
          </button>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:pl-4">
          <img 
            src="/assets/profile.jpg" 
            alt="Foto de Erick Jonathan Macedo dos Santos, desenvolvedor web" 
            loading="lazy" 
            className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-blue-500/50 object-cover" 
            itemProp="image" 
          />
        </div>
      </div>
    </div>
  );
}
