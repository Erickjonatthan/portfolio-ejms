import React from "react";
import { motion as Motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import { useInView } from "../hooks/useInView";

export default function AboutMe() {
  const [ref, isInView] = useInView();

  // Dados estruturados para SEO (JSON-LD)
  const schemaPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Erick Jonathan Macedo dos Santos",
    "jobTitle": "Desenvolvedor FullStack, Cientista de Dados, Freelancer",
    "url": "https://ericksantos.is-a.dev/",
    "email": "erick.jonathan@ufrpe.br",
    "image": "https://ericksantos.is-a.dev/assets/profile.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/ericksantos",
      "https://github.com/erickjonatthan",
      "http://lattes.cnpq.br/1597336402095190"
    ]
  };

  const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        const yOffset = -40;
        const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yPosition, behavior: "smooth" });
      }
  };

  return (
    <>
      {/* Dados estruturados para SEO */}
      <script type="application/ld+json">{JSON.stringify(schemaPerson)}</script>
      <Motion.section
        ref={ref}
        id="about-me"
        className="w-full min-h-screen justify-center text-white flex flex-col items-center px-8 sm:mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        role="region"
        aria-label="Sobre Erick Jonathan Macedo dos Santos"
        itemScope
        itemType="https://schema.org/Person"
      >
        <div className="flex flex-col md:flex-row items-center text-center md:text-left max-w-4xl">
          <div className="flex-1 mb-6 md:mb-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" itemProp="name">
              Quem é{" "}
              <span
                className="text-white hover:text-blue-600 transition-colors duration-300"
              >
                Erick
              </span>
              ?
            </h1>
            <p className="text-lg mb-4 text-justify" itemProp="description">
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
            <p className="text-lg text-left mb-6">
              <span className="text-neonBlue font-bold">Email:</span> <a href="mailto:erick.jonathan@ufrpe.br" itemProp="email">erick.jonathan@ufrpe.br</a>
            </p>
            <div className="flex items-center space-x-2 mt-6 mb-6" aria-label="Redes sociais">
              <a
                href="https://www.linkedin.com/in/ericksantos"
                target="_blank"
                rel="noopener noreferrer me"
                className="text-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center"
                style={{
                  width: "56px",
                  height: "56px",
                }}
                aria-label="LinkedIn de Erick"
                itemProp="sameAs"
              >
                <LinkedInIcon fontSize="large" />
              </a>
              <a
                href="https://github.com/erickjonatthan"
                target="_blank"
                rel="noopener noreferrer me"
                className="text-white hover:text-gray-400 transition-colors duration-300 flex items-center justify-center"
                style={{
                  width: "56px",
                  height: "56px",
                }}
                aria-label="GitHub de Erick"
                itemProp="sameAs"
              >
                <GitHubIcon fontSize="large" />
              </a>
              <a
                href="http://lattes.cnpq.br/1597336402095190"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 flex items-center justify-center"
                style={{
                  width: "56px",
                  height: "56px",
                }}
                aria-label="Currículo Lattes de Erick"
                itemProp="sameAs"
              >
                <img
                  src="/assets/lattes.svg"
                  alt="Currículo Lattes de Erick Jonathan Macedo dos Santos"
                  className="w-10 h-10 object-contain hover:filter hover:brightness-0 hover:invert"
                  style={{
                    margin: 0,
                    padding: 0,
                  }}
                />
              </a>
            </div>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => scrollToSection("skills")}
              className="mt-6 px-6 py-3 shadow-lg transition-transform transform hover:scale-110 hover:shadow-blue-500/50"
              style={{
                background: "transparent",
                color: "#42A5F5",
                fontWeight: "bold",
                border: "2px solid #42A5F5",
                borderRadius: "50px",
                transition: "all 0.4s ease-in-out",
              }}
              aria-label="Ver minhas skills"
            >
              <span style={{ fontSize: "1.1rem", fontWeight: "600" }}>Ver Minhas Skills</span>
            </Button>
          </div>
          <div className="flex-shrink-0 md:ml-28 flex flex-col items-center">
            <img
              src="/assets/programming-animate.svg"
              alt="Imagem de programação"
              loading="lazy"
              className="w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72  shadow-lg object-cover"
              itemProp="image"
            />
            <Button
              variant="contained"
              color="primary"
              startIcon={<DownloadIcon />}
              href="/assets/curriculo.pdf"
              download
              className="px-6 py-3 shadow-lg transition-transform transform hover:scale-110 hover:shadow-blue-500/50"
              style={{
                marginTop: "30px",
                background: "linear-gradient(90deg, #1E88E5, #42A5F5)",
                color: "#fff",
                fontWeight: "bold",
                boxShadow: "0 4px 15px rgba(30, 136, 229, 0.4)",
                transition: "all 0.4s ease-in-out",
                borderRadius: "50px",
              }}
              aria-label="Baixar currículo de Erick Jonathan Macedo dos Santos"
            >
              <span style={{ fontSize: "1.2rem", fontWeight: "600" }}>Baixar CV</span>
            </Button>
          </div>
        </div>
      </Motion.section>
    </>
  );
}