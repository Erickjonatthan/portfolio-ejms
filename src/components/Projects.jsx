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

  const projectsCount = projectsData[activeCategory]?.length || 0; // Número de projetos na categoria ativa
  const slidesToShow = 3; // Número de slides visíveis para desktops

  const settings = {
    dots: true,
    infinite: projectsCount > slidesToShow, // Desativa o loop infinito se o número de slides for igual ou menor que slidesToShow
    speed: 500,
    arrows: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow, // Deve ser igual a slidesToShow para desktops
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: slidesToShow,
          slidesToScroll: slidesToShow,
          infinite: projectsCount > slidesToShow, // Ajusta o comportamento para desktops
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: projectsCount > 2, // Ajusta para tablets
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: projectsCount > 1, // Ajusta para dispositivos móveis
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
    appendDots: (dots) => (
      <div>
        <ul className="custom-dots">{dots}</ul>
      </div>
    ),
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schemaProjects)}
      </script>
      <Motion.section
        ref={ref}
        id="projects"
        className="w-full min-h-screen text-gray-800 flex flex-col items-center justify-center sm:px-8"
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
                      className="w-full h-48 object-contain rounded-3xl"
                      itemProp="image"
                    />
                    <div
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                    >
                      <a
                        href={project.link} // O link permanece aqui
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-base font-medium"
                      >
                        Visualizar Detalhes
                      </a>
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
                      <p>{project.description}</p>
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
        </div>
      </Motion.section>
    </>
  );
}
