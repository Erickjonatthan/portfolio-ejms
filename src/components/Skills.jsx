import React, { useRef, useState, useEffect } from "react";
import { motion as Motion } from "framer-motion"; // Importando o framer-motion
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"; // Importando o ícone
import { useScrollToSection } from "../hooks/useScrollToSection"; // Importando o hook de rolagem
import { useSafariCheck } from "../hooks/useSafariCheck"; // Importando o hook de verificação do Safari

const TechnologyBadge = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-30 h-8 mx-2 my-2 transition-transform transform hover:scale-110 hover:shadow-lg"
  />
);

export default function Skills() {
  const ref = useRef(null);
  const isSafari = useSafariCheck(); // Verifica se o navegador é Safari
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsInView(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verifica no carregamento inicial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useScrollToSection(isSafari);

  return (
    <Motion.section
      id="skills"
      ref={ref}
      className="w-full min-h-screen flex flex-col justify-center items-center p-8 text-white"
      initial={{ opacity: 0, y: 50 }} // Estado inicial (de baixo para cima)
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Estado ao entrar na visualização
      transition={{ duration: 0.8, ease: "easeInOut" }} // Configuração da transição
      viewport={{ once: false, amount: 0.2 }} // Configuração do comportamento de visualização
    >
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-x-8">
        {/* Lado esquerdo: Título, descrição e animação Lottie */}
        <div className="md:w-1/3 text-center md:text-left mb-8 md:mb-0 flex flex-col items-center md:items-start">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Minhas Skills
          </h2>
          <p className="text-lg mb-4 text-justify">
            Estas são as principais tecnologias e ferramentas que utilizo para
            criar soluções inovadoras. Meu foco está em desenvolvimento web,
            mobile e design de interfaces, sempre buscando entregar qualidade e
            eficiência em cada projeto.
          </p>
          <DotLottieReact
            src="/assets/tec.lottie"
            loop
            autoplay
            className="w-full max-w-xl"
          />
        </div>

        {/* Lado direito: Skills */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Desenvolvimento Web */}
          <div className="p-4 border border-blue-300 rounded-md shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-2 flex items-center">
              <i className="fas fa-code mr-2"></i> Desenvolvimento Web
            </h3>
            <p className="text-lg">
              <strong>Front End:</strong>
            </p>
            <div className="flex flex-wrap">
              <TechnologyBadge
                src="https://img.shields.io/badge/-HTML5-E34F26?&logo=html5&logoColor=white"
                alt="HTML5"
              />
              <TechnologyBadge
                src="https://img.shields.io/badge/-CSS3-1572B6?&logo=css3&logoColor=white"
                alt="CSS3"
              />
              <TechnologyBadge
                src="https://img.shields.io/badge/-JavaScript-F7DF1E?&logo=javascript&logoColor=black"
                alt="JavaScript"
              />
              <TechnologyBadge
                src="https://img.shields.io/badge/-React-61DAFB?&logo=react&logoColor=black"
                alt="React"
              />
              <TechnologyBadge
                src="https://img.shields.io/badge/-Bootstrap-563D7C?&logo=bootstrap&logoColor=white"
                alt="Bootstrap"
              />
              <TechnologyBadge
                src="https://img.shields.io/badge/-TailwindCSS-38B2AC?&logo=tailwind-css&logoColor=white"
                alt="TailwindCSS"
              />
            </div>
            <p className="text-lg">
              <strong>Back End:</strong>
            </p>
            <div className="flex flex-wrap">
              <TechnologyBadge
                src="https://img.shields.io/badge/Java-%23ED8B00.svg?logo=openjdk&logoColor=white"
                alt="Java"
              />
              <TechnologyBadge
                src="https://img.shields.io/badge/-Python-3776AB?&logo=python&logoColor=white"
                alt="Python"
              />
              <TechnologyBadge
                src="https://img.shields.io/badge/-Spring-6DB33F?&logo=spring&logoColor=white"
                alt="Spring"
              />
              <TechnologyBadge
                src="https://img.shields.io/badge/-Flask-000000?&logo=flask&logoColor=white"
                alt="Flask"
              />
              <TechnologyBadge
                src="https://img.shields.io/badge/-FastAPI-009688?&logo=fastapi&logoColor=white"
                alt="FastAPI"
              />
              <TechnologyBadge
                src="https://img.shields.io/badge/-Firebase-FFCA28?&logo=firebase&logoColor=black"
                alt="Firebase"
              />
            </div>
          </div>

          {/* Desenvolvimento Mobile */}
          <div className="p-4 border border-blue-300 rounded-md shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <i className="fas fa-mobile-alt mr-2"></i> Desenvolvimento Mobile
            </h3>
            <div className="flex flex-wrap">
              <TechnologyBadge
                src="https://img.shields.io/badge/-React%20Native-61DAFB?&logo=react&logoColor=black"
                alt="React Native"
              />
              <TechnologyBadge
                src="https://img.shields.io/badge/-Flutter-02569B?&logo=flutter&logoColor=white"
                alt="Flutter"
              />
              <TechnologyBadge
                src="https://img.shields.io/badge/-Godot-478CBF?&logo=godot-engine&logoColor=white"
                alt="Godot"
              />
              <TechnologyBadge
                src="https://img.shields.io/badge/-Android%20Studio-3DDC84?&logo=android-studio&logoColor=white"
                alt="Android Studio"
              />
              <TechnologyBadge
                src="https://img.shields.io/badge/-Kotlin-0095D5?&logo=kotlin&logoColor=white"
                alt="Kotlin"
              />
            </div>
          </div>

          {/* Banco de Dados */}
          <div className="p-4 border border-blue-300 rounded-md shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <i className="fas fa-database mr-2"></i> Banco de Dados
            </h3>
            <div className="flex flex-wrap">
              <TechnologyBadge
                src="https://img.shields.io/badge/-MySQL-4479A1?&logo=mysql&logoColor=white"
                alt="MySQL"
              />
              <TechnologyBadge
                src="https://img.shields.io/badge/-PostgreSQL-336791?&logo=postgresql&logoColor=white"
                alt="PostgreSQL"
              />
              <TechnologyBadge
                src="https://img.shields.io/badge/-MongoDB-47A248?&logo=mongodb&logoColor=white"
                alt="MongoDB"
              />
            </div>
          </div>

          {/* UI/UX */}
          <div className="p-4 border border-blue-300 rounded-md shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <i className="fas fa-paint-brush mr-2"></i> UI/UX
            </h3>
            <div className="flex flex-wrap">
              <TechnologyBadge
                src="https://img.shields.io/badge/-Figma-F24E1E?&logo=figma&logoColor=white"
                alt="Figma"
              />
              <TechnologyBadge
                src="https://img.shields.io/badge/-Miro-050038?&logo=miro&logoColor=white"
                alt="Miro"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Botão de ação */}
      <div className="text-center mt-8">
        <button
          onClick={() => scrollToSection("projects")}
          className="px-6 py-3 shadow-lg transition-transform transform hover:scale-110 mx-auto flex items-center justify-center gap-2"
          style={{
            background: "linear-gradient(90deg, #1E88E5, #42A5F5)", // Gradiente azul
            color: "#fff", // Texto branco
            fontWeight: "bold", // Texto em negrito
            boxShadow: "0 4px 15px rgba(30, 136, 229, 0.4)", // Sombra suave
            transition: "all 0.4s ease-in-out", // Transição suave
            borderRadius: "50px", // Bordas arredondadas
            maxWidth: "200px", // Largura máxima do botão
            textAlign: "center", // Centraliza o texto
          }}
        >
          <WorkOutlineIcon /> {/* Ícone ao lado do texto */}
          Projetos
        </button>
      </div>
    </Motion.section>
  );
}