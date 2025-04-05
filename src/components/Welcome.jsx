import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"; // Importando a seta do Material-UI

export default function Welcome() {
  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("about-me");
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col justify-center h-full pl-4">
      <h1 className="text-left text-3xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-snug font-bold text-white p-5 leading-snug sm:leading-normal md:leading-snug pt-28">
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
      <button
        onClick={scrollToAboutMe}
        className="mt-8 self-start bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-blue-300 flex items-center transition-transform transform hover:scale-105"
      >
        Sobre mim
        <ArrowDownwardIcon className="ml-2" />
      </button>
    </div>
  );
}