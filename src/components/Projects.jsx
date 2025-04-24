import React, { useState, useRef } from "react";
import { motion as Motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { schemaProjects } from "../schemas/schemas";
import { projectsData } from "../data/projectsData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom hook for managing categories
function useCategory() {
  const [activeCategory, setActiveCategory] = useState("backend");
  return { activeCategory, setActiveCategory };
}

export default function Projects() {
  const { activeCategory, setActiveCategory } = useCategory();
  const [ref, isInView] = useInView();
  const sliderRef = useRef(null);

  React.useEffect(() => {
    if (sliderRef.current) {
      // Adicionando um pequeno timeout para suavizar a transição
      setTimeout(() => {
        sliderRef.current.slickGoTo(0, true);
      }, 50);
    }
  }, [activeCategory]);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: true,
    adaptiveHeight: true,
    autoplay: true, // Adicionado para autoplay
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
    beforeChange: (current, next) => {
      const slides = document.querySelectorAll(".project-slide");
      slides.forEach((slide, index) => {
        if (index === next) {
          slide.style.transform = "scale(1)";
        } else {
          slide.style.transform = "scale(0.95)";
        }
      });
    },
    customPaging: (i) => (
      <button
        className={`w-3 h-3 rounded-full transition-all duration-300 bg-gray-300 hover:bg-[#012286]`}
        aria-label={`Ir para projeto ${i + 1}`}
      />
    ),
    className: "project-carousel pb-10",
  };

  

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schemaProjects)}
      </script>
      <Motion.section
        ref={ref}
        id="projects"
        className="w-full min-h-screen text-gray-800 flex flex-col items-center justify-center sm:mt-10 sm:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        role="region"
        aria-label="Projetos de Erick Jonathan Macedo dos Santos"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div className="w-full max-w-7xl px-4 mx-auto">
          <h2
            className="text-3xl text-white sm:text-4xl lg:text-5xl font-bold text-center mb-4"
            itemProp="name"
          >
            Projetos
          </h2>
          <p
            className="text-gray-300 text-center text-base sm:text-xl mb-8"
            itemProp="description"
          >
            Esses são os projetos que demonstram minha proficiência em diversas
            camadas de desenvolvimento. Explore cada categoria para saber mais!
          </p>
          <div className="flex flex-row justify-center mb-6 space-x-2 sm:space-x-4 px-2">
            {Object.keys(projectsData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-2 py-1.5 sm:px-4 sm:py-2 rounded-md sm:rounded-lg font-medium capitalize text-sm sm:text-lg transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#012286] text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-[#071532] hover:text-white"
                }`}
                aria-label={`Ver projetos da categoria ${category}`}
              >
                {category}
              </button>
            ))}
          </div>

          <Slider ref={sliderRef} {...settings}>
            {projectsData[activeCategory].map((project, index) => (
              <div key={index}>
                <Motion.div
                  className="project-slide relative bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:border-[#012286] flex flex-col h-full"
                  style={{
                    transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  initial={{ scale: index === 0 ? 1 : 0.95 }}
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                  role="article"
                  aria-labelledby={`project-title-${activeCategory}-${index}`}
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={`Imagem ilustrativa do projeto ${project.title}`}
                      // arredondando as bordas da imagem
                      className="w-full h-48 object-contain rounded-3xl"
                      itemProp="image"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-base font-medium">
                        Visualizar Detalhes
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h4
                      id={`project-title-${activeCategory}-${index}`}
                      className="text-xl font-bold mb-2 text-gray-800 hover:text-[#012286] transition-colors duration-300 h-[3rem]"
                      itemProp="name"
                    >
                      {project.title}
                    </h4>
                    <div
                      className="text-gray-600 text-base transition-colors duration-300"
                      itemProp="description"
                    >
                      <p>
                        {project.description}
                      </p>
                      
                    </div>
                    <div className="flex flex-wrap mt-2 space-x-2 text-xl text-[#012286]">
                      {project.technologies?.map((icon, i) => (
                        <span key={i}>{icon}</span>
                      ))}
                    </div>
                  </div>
                </Motion.div>
              </div>
            ))}
          </Slider>

          <Motion.div
            className="text-center mt-12 bg-gradient-to-r from-[#071532] to-[#012286] p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Vamos transformar ideias em realidade?
              </h3>
              <p className="text-gray-200 text-lg mb-6">
                Estou sempre em busca de novos desafios e parcerias
                interessantes. Se você tem um projeto em mente, adoraria ouvir
                sobre ele!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="group relative px-8 py-3 bg-white text-[#012286] font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 overflow-hidden"
                  aria-label="Ir para seção de contato"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Iniciar Conversa
                  </span>
                  <div className="absolute inset-0 h-full w-0 bg-[#012286] rounded-lg transition-all duration-300 group-hover:w-full -z-0"></div>
                </button>
                <p className="text-gray-300 text-sm">ou</p>
                <a
                  href="mailto:erick.jonathan@ufrpe.br"
                  className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#012286] transition-all duration-300 transform hover:scale-105"
                  aria-label="Enviar e-mail direto para Erick Jonathan Macedo dos Santos"
                >
                  Enviar E-mail Direto
                </a>
              </div>
            </div>
          </Motion.div>
        </div>
      </Motion.section>
    </>
  );
}
