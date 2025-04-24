import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaTrophy } from "react-icons/fa";
import { useInView } from "../hooks/useInView";
import { schemaEducation } from "../schemas/schemas";
import {
  educationData,
  certificates,
  awards
} from '../data/educationData';

export default function Education() {
  const [activeTab, setActiveTab] = useState("education");
  const [ref, isInView] = useInView();
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schemaEducation)}
      </script>
      <Motion.section
        ref={ref}
        id="education"
        className="w-full min-h-screen text-gray-800 flex flex-col items-center justify-center sm:px-8 sm:mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        role="region"
        aria-label="Formação Acadêmica e Certificações"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div className="w-full max-w-5xl px-4 mx-auto">
          <h2
            className="text-3xl text-white sm:text-4xl lg:text-5xl font-bold text-center mb-4"
            itemProp="name"
          >
            Educação
          </h2>
          <p
            className="text-gray-300 text-center text-base sm:text-xl mb-8"
            itemProp="description"
          >
            Minha trajetória acadêmica e conquistas educacionais.
          </p>
          <div className="flex flex-row justify-center mb-6 space-x-1 sm:space-x-4 px-1 sm:px-2">
            <button
              onClick={() => setActiveTab("education")}
              className={`px-2 py-1 sm:px-4 sm:py-2 rounded-md sm:rounded-lg font-medium capitalize text-sm sm:text-lg transition-all duration-300 flex items-center space-x-1 sm:space-x-2 ${
                activeTab === "education"
                  ? "bg-[#012286] text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-[#071532] hover:text-white"
              }`}
            >
              <FaGraduationCap className="text-base sm:text-xl" />
              <span>Educação</span>
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`px-2 py-1 sm:px-4 sm:py-2 rounded-md sm:rounded-lg font-medium capitalize text-sm sm:text-lg transition-all duration-300 flex items-center space-x-1 sm:space-x-2 ${
                activeTab === "certificates"
                  ? "bg-[#012286] text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-[#071532] hover:text-white"
              }`}
            >
              <FaCertificate className="text-base sm:text-xl" />
              <span>Certificados</span>
            </button>
            <button
              onClick={() => setActiveTab("awards")}
              className={`px-2 py-1 sm:px-4 sm:py-2 rounded-md sm:rounded-lg font-medium capitalize text-sm sm:text-lg transition-all duration-300 flex items-center space-x-1 sm:space-x-2 ${
                activeTab === "awards"
                  ? "bg-[#012286] text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-[#071532] hover:text-white"
              }`}
            >
              <FaTrophy className="text-base sm:text-xl" />
              <span>Prêmios</span>
            </button>
          </div>

          {activeTab === "education" && (
            <div className="flex flex-col space-y-8">
              {educationData.map((edu, index) => (
                <Motion.div
                  key={index}
                  className="flex flex-col sm:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 w-full border border-gray-200 hover:border-[#012286] p-2 sm:p-4"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                  role="article"
                  aria-labelledby={`edu-title-${index}`}
                >
                  <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                    <img
                      src={edu.logo}
                      alt={`Logo da instituição ${edu.institution}`}
                      className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                      itemProp="image"
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      id={`edu-title-${index}`}
                      className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2"
                      itemProp="name"
                    >
                      {edu.title}
                    </h3>
                    <p
                      className="text-gray-600 text-sm sm:text-base mb-4"
                      itemProp="description"
                    >
                      {edu.description}
                    </p>
                    {edu.progress ? (
                      <div className="relative w-full bg-gray-200 rounded-full h-4">
                        <Motion.div
                          className="bg-[#012286] h-4 rounded-full"
                          initial={{ width: 0 }}
                          animate={
                            isInView
                              ? { width: `${edu.progress}%` }
                              : { width: 0 }
                          }
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                        ></Motion.div>
                        <span className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-bold text-white">
                          {edu.progress}%
                        </span>
                      </div>
                    ) : edu.completed ? (
                      <div className="flex items-center space-x-2">
                        <FaGraduationCap className="text-[#012286] text-2xl" />
                        <span className="text-gray-800 font-medium text-sm sm:text-base">
                          Concluído com sucesso!
                        </span>
                      </div>
                    ) : null}
                  </div>
                </Motion.div>
              ))}
            </div>
          )}
          {activeTab === "certificates" && (
            <div className="overflow-y-auto max-h-[500px] space-y-4 px-6 pb-8">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between bg-white shadow-md rounded-lg p-2 sm:p-4 border border-gray-200"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                  role="article"
                  aria-labelledby={`cert-title-${index}`}
                >
                  <div>
                    <h4
                      id={`cert-title-${index}`}
                      className="text-base sm:text-lg font-semibold text-gray-800"
                      itemProp="name"
                    >
                      {cert.title}
                    </h4>
                    <p className="text-sm text-gray-600">{cert.platform}</p>
                  </div>
                  <div className="text-sm text-gray-500 mt-2 sm:mt-0">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#012286] hover:underline"
                      itemProp="url"
                    >
                      Ver Certificado
                    </a>
                    <span className="ml-4">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === "awards" && (
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-2 sm:p-4 border border-gray-200"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                  role="article"
                  aria-labelledby={`award-title-${index}`}
                >
                  <h4
                    id={`award-title-${index}`}
                    className="text-lg font-semibold text-gray-800"
                    itemProp="name"
                  >
                    {award.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {award.institution} - {award.year}
                  </p>
                </div>
              ))}
            </div>
          )}
          <Motion.div
            className="text-left mt-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-white text-xl">
              Gostou?{" "}
              <span
                className="text-[#5b84ff] cursor-pointer transition-all duration-300 animate-blink-color" // Aplicando a nova animação e removendo a antiga 'animate-blink'
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    const headerHeight =
                      document.querySelector("header")?.offsetHeight || 0;
                    const yOffset = -headerHeight - 80;
                    const y =
                      projectsSection.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                Venha conhecer meus projetos!
              </span>
            </p>
          </Motion.div>
        </div>
      </Motion.section>
    </>
  );
}
