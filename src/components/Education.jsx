import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaTrophy } from "react-icons/fa";
import { useInView } from "../hooks/useInView";

const educationData = [
  {
    title: "Engenharia de Computação",
    institution: "UFRPE - UABJ",
    logo: "/assets/ufrpe.png",
    progress: 60,
    description:
      "Curso superior focado em desenvolvimento de software, hardware e sistemas embarcados.",
  },
  {
    title: "Técnico em Informática para Internet",
    institution: "IFPE - Campus Belo Jardim",
    logo: "/assets/ifpebj.png",
    completed: true,
    description:
      "Curso técnico com ênfase em desenvolvimento web e tecnologias para internet.",
  },
];

const certificates = [
  {
    title: "Programa Oracle Next Education F2 T5 Back-end",
    platform: "Alura",
    link: "https://cursos.alura.com.br/program/certificate/79ce5fa7-34da-4d5b-83e8-7b776616bb93",
    date: "Setembro de 2023",
  },
  {
    title:
      "Qualidade de Água de Reservatórios da Compesa usando IA e dispositivos mobile",
    platform: "Even3",
    link: "https://www.even3.com.br/documentos/imprimir?i=28728037.0562535.5.8.8428374369267668&cc=6F381AEB-3A06-4CD5-8F5E-4A65117BD0AF",
    date: "Janeiro de 2025",
  },
  {
    title: "Santander Tech+ | Back-End",
    platform: "Ada Tech",
    link: "https://ada.tech/certificado?code=38a3418d-12f7-854a-2511-47892915f500",
    date: "Dezembro de 2024",
  },
  {
    title: "Santander Tech+ | Fundamentos Tech",
    platform: "Ada Tech",
    link: "https://ada.tech/certificado?code=998779ab-7f9f-8c62-2e2d-4e031c62b34e",
    date: "Dezembro de 2024",
  },
  {
    title:
      "Estruturas de Dados e Algoritmos para o Desenvolvimento de Hardware ",
    platform: "VIRTUS",
    link: "https://moodle.virtus-cc.ufcg.edu.br/mod/simplecertificate/verify.php?code=671a9452-c754-40d7-97e2-20150a000104",
    date: "Outubro de 2024",
  },
  {
    title: "NLW Journey - Java",
    platform: "Rocketseat",
    link: "app.rocketseat.com.br/certificates/dd27ca32-3ea8-4058-a7ea-acb32be1a59b",
    date: "Julho de 2024",
  },
  {
    title: "NLW Expert trilha de Java",
    platform: "Rocketseat",
    link: "https://app.rocketseat.com.br/certificates/5c6b3dc8-853b-4eaa-ae77-63a78eeb15dd",
    date: "Fevereiro de 2024",
  },
  {
    title: "Formação SQL com MySQL Server da Oracle - ONE",
    platform: "Alura",
    link: "https://cursos.alura.com.br/degree/certificate/867d683b-c52f-418c-a974-62e6b0c8195a",
    date: "Janeiro de 2024",
  },
  {
    title: "Formação Oracle Cloud Infrastructure - ONE",
    platform: "Alura",
    link: "https://cursos.alura.com.br/degree/certificate/46b9b88e-4e10-4279-8c4d-18925aac8c12",
    date: "Janeiro de 2024",
  },
];

// Mapeamento dos meses em português para números (0-11)
const monthMap = {
  janeiro: 0, fevereiro: 1, março: 2, abril: 3, maio: 4, junho: 5,
  julho: 6, agosto: 7, setembro: 8, outubro: 9, novembro: 10, dezembro: 11
};

// Função para converter a data string para objeto Date
const parseDate = (dateString) => {
  const parts = dateString.toLowerCase().split(' de ');
  if (parts.length === 2) {
    const month = monthMap[parts[0]];
    const year = parseInt(parts[1], 10);
    if (month !== undefined && !isNaN(year)) {
      // Cria a data no final do mês para garantir a ordem correta dentro do mesmo mês/ano
      return new Date(year, month + 1, 0);
    }
  }
  // Retorna uma data inválida ou muito antiga se o formato for inesperado
  return new Date(0);
};

// Ordena os certificados pela data (mais recente primeiro)
certificates.sort((a, b) => parseDate(b.date) - parseDate(a.date));

const awards = [
  {
    title: "Honorable Mention Pale Blue Dot: Visualization Challenge",
    institution: "NASA - National Aeronautics and Space Administration",
    year: 2024,
  },
  {
    title: "1° Lugar na competição de Programação",
    institution: "UFRPE",
    year: 2023,
  },

];

export default function Education() {
  const [activeTab, setActiveTab] = useState("education");
  const [ref, isInView] = useInView();

  // Dados estruturados para SEO (JSON-LD)
  const schemaEducation = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Universidade Federal Rural de Pernambuco - UFRPE, IFPE",
    alumni: {
      "@type": "Person",
      name: "Erick Jonathan Macedo dos Santos",
      sameAs: "https://ericksantos.is-a.dev/",
    },
  };

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
                  className="flex flex-col sm:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 w-full border border-gray-200 hover:border-[#012286] p-4"
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
                      className="w-32 h-32 object-contain"
                      itemProp="image"
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      id={`edu-title-${index}`}
                      className="text-xl sm:text-2xl font-bold text-gray-800 mb-2"
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
                  className="flex flex-col sm:flex-row sm:items-center justify-between bg-white shadow-md rounded-lg p-4 border border-gray-200"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                  role="article"
                  aria-labelledby={`cert-title-${index}`}
                >
                  <div>
                    <h4
                      id={`cert-title-${index}`}
                      className="text-lg font-semibold text-gray-800"
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
                  className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
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
            className="text-left mt-8"
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
