import React, { useRef, useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description"; // Ícone para o Currículo Lattes
import Button from "@mui/material/Button"; // Botão do Material-UI
import DownloadIcon from "@mui/icons-material/Download"; // Ícone de download

export default function AboutMe() {
  const ref = useRef(null);
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

  return (
    <Motion.section
      ref={ref}
      id="about-me"
      className="w-full min-h-screen justify-center text-white flex flex-col items-center px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex flex-col md:flex-row items-center text-center md:text-left max-w-4xl">
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Quem é{" "}
            <span
              className="text-white hover:text-blue-600 transition-colors duration-300"
            >
              Erick
            </span>
            ?
          </h2>
          <p className="text-lg mb-4 text-justify">
            Estudante de Engenharia da Computação e Técnico em Informática, com
            paixão por desenvolvimento FullStack. Interessado em competições de
            programação e projetos de iniciação científica. Aprimora
            constantemente suas habilidades com eventos e cursos de programação.
          </p>
          <p className="text-lg mb-4 text-justify">
            Profissional dedicado e inovador, busca projetos Freelancer que
            contribuam e desafiem. Então, o que você está esperando? transforme suas ideias em realidade com um
            especialista em soluções sofisticadas!
          </p>
          {/* E-mail */}
          <p className="text-lg mb-6">
            <span className="text-neonBlue font-bold">Email:</span> erick.jonathan@ufrpe.br
          </p>
          {/* Ícones de redes sociais */}
          <div className="flex space-x-6 mt-6">
            <a
              href="https://www.linkedin.com/in/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition-colors duration-300"
            >
              <LinkedInIcon fontSize="large" />
            </a>
            <a
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors duration-300"
            >
              <GitHubIcon fontSize="large" />
            </a>
            <a
              href="https://lattes.cnpq.br/seu-curriculo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-500 transition-colors duration-300"
            >
              <DescriptionIcon fontSize="large" />
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 md:ml-28 flex flex-col items-center">
          <img
            src="/assets/profile.jpg"
            alt="Foto de Erick, desenvolvedor web"
            loading="lazy"
            className="w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-blue-500/50 object-cover"
          />
          {/* Botão para baixar o currículo */}
          <Button
            variant="contained"
            color="primary"
            startIcon={<DownloadIcon />}
            href="/assets/curriculo.pdf" // Caminho para o arquivo do currículo
            download
            className="px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-blue-500/50"
            style={{
              marginTop: "40px", // Espaçamento maior entre a foto e o botão
              backgroundColor: "#1E88E5",
              color: "#fff",
              fontWeight: "bold",
              transition: "all 0.4s ease-in-out", // Transição mais suave
            }}
          >
            CV
          </Button>
        </div>
      </div>
    </Motion.section>
  );
}