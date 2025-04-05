import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"; // Importando a seta do Material-UI
import { useSafariCheck } from "../hooks/useSafariCheck";
import { useScrollToSection } from "../hooks/useScrollToSection";

export default function Welcome() {
  const isSafari = useSafariCheck();
  const scrollToSection = useScrollToSection(isSafari);

  return (
    <div className="flex flex-col justify-center h-full pl-4">
      <h1 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-snug font-bold text-white p-5 leading-snug sm:leading-normal md:leading-snug pt-28">
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
        onClick={() => scrollToSection("about-me")}
        className="px-6 py-3 shadow-lg transition-transform transform hover:scale-110 hover:shadow-blue-500/50 mx-auto"
        style={{
          marginTop: "30px", // Espaçamento maior entre a foto e o botão
          marginLeft: "20px", // Alinha o botão à esquerda, na mesma distância do texto
          background: "linear-gradient(90deg, #1E88E5, #42A5F5)",
          color: "#fff",
          fontWeight: "bold",
          boxShadow: "0 4px 15px rgba(30, 136, 229, 0.4)",
          transition: "all 0.4s ease-in-out",
          borderRadius: "50px", // Bordas arredondadas dos dois lados
          maxWidth: "200px", // Limita a largura do botão
          textAlign: "center", // Centraliza o texto dentro do botão
        }}
      >
        Sobre mim
        <ArrowDownwardIcon className="ml-2" />
      </button>
    </div>
  );
}
