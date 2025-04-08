import React, { useState, useEffect, useRef } from 'react';
import { motion as Motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaTrophy } from 'react-icons/fa'; // Importação dos ícones

const educationData = [
  {
    title: "Engenharia de Computação",
    institution: "Universidade XYZ",
    logo: "https://via.placeholder.com/50",
    progress: 60,
    description: "Curso superior focado em desenvolvimento de software, hardware e sistemas embarcados.",
  },
  {
    title: "Técnico em Informática para Internet",
    institution: "IFPE",
    logo: "https://via.placeholder.com/50",
    completed: true,
    description: "Curso técnico com ênfase em desenvolvimento web e tecnologias para internet.",
  },
];

const certificates = [
  {
    title: "React Avançado",
    platform: "Udemy",
    link: "https://www.udemy.com/certificate/12345",
    date: "Março de 2025",
  },
  {
    title: "Machine Learning",
    platform: "Coursera",
    link: "https://www.coursera.org/certificate/67890",
    date: "Janeiro de 2024",
  },
  {
    title: "JavaScript Moderno",
    platform: "Alura",
    link: "https://www.alura.com.br/certificate/12345",
    date: "Dezembro de 2023",
  },
  {
    title: "Design de Interfaces",
    platform: "Figma Academy",
    link: "https://www.figma.com/certificate/67890",
    date: "Novembro de 2023",
  },
    {
        title: "Desenvolvimento Mobile",
        platform: "Udacity",
        link: "https://www.udacity.com/certificate/12345",
        date: "Outubro de 2023",
    },
    {
        title: "Banco de Dados Avançado",
        platform: "DataCamp",
        link: "https://www.datacamp.com/certificate/67890",
        date: "Setembro de 2023",
    },

];

const awards = [
  {
    title: "Melhor Projeto de Graduação",
    institution: "Universidade XYZ",
    year: 2024,
  },
  {
    title: "Medalha de Ouro - Olimpíada de Programação",
    institution: "IFPE",
    year: 2023,
  },
];

export default function Education() {
  const [activeTab, setActiveTab] = useState('education');
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsInView(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Motion.section
      id="education"
      ref={ref}
      className="w-full min-h-screen text-gray-800 flex flex-col items-center justify-center sm:px-8 sm:mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-full max-w-5xl px-4 mx-auto">
        <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl font-bold text-center mb-4">Educação</h2>
        <p className="text-gray-300 text-center text-base sm:text-xl mb-8">
          Minha trajetória acadêmica e conquistas educacionais.
        </p>

        {/* Menu de Categorias */}
        <div className="flex flex-row justify-center mb-6 space-x-2 sm:space-x-4 px-2">
          <button
            onClick={() => setActiveTab('education')}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md sm:rounded-lg font-medium capitalize text-base sm:text-lg transition-all duration-300 flex items-center space-x-2 ${
              activeTab === 'education'
                ? 'bg-[#012286] text-white' // Cor do item selecionado
                : 'bg-gray-200 text-gray-800 hover:bg-[#071532] hover:text-white' // Efeito de hover
            }`}
          >
            <FaGraduationCap className="text-lg sm:text-xl" />
            <span>Educação</span>
          </button>
          <button
            onClick={() => setActiveTab('certificates')}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md sm:rounded-lg font-medium capitalize text-base sm:text-lg transition-all duration-300 flex items-center space-x-2 ${
              activeTab === 'certificates'
                ? 'bg-[#012286] text-white' // Cor do item selecionado
                : 'bg-gray-200 text-gray-800 hover:bg-[#071532] hover:text-white' // Efeito de hover
            }`}
          >
            <FaCertificate className="text-lg sm:text-xl" />
            <span>Certificados</span>
          </button>
          <button
            onClick={() => setActiveTab('awards')}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md sm:rounded-lg font-medium capitalize text-base sm:text-lg transition-all duration-300 flex items-center space-x-2 ${
              activeTab === 'awards'
                ? 'bg-[#012286] text-white' // Cor do item selecionado
                : 'bg-gray-200 text-gray-800 hover:bg-[#071532] hover:text-white' // Efeito de hover
            }`}
          >
            <FaTrophy className="text-lg sm:text-xl" />
            <span>Prêmios</span>
          </button>
        </div>

        {/* Conteúdo das Abas */}
        {activeTab === 'education' && (
          <div className="flex flex-col space-y-8">
            {educationData.map((edu, index) => (
              <Motion.div
                key={index}
                className="flex flex-col sm:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 w-full border border-gray-200 hover:border-[#012286] p-4"
              >
                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                  <img src={edu.logo} alt={edu.institution} className="w-16 h-16 object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{edu.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">{edu.description}</p>
                  {edu.progress ? (
                    <div className="relative w-full bg-gray-200 rounded-full h-4">
                      <Motion.div
                        className="bg-[#012286] h-4 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${edu.progress}%` } : { width: 0 }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                      ></Motion.div>
                      <span className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-bold text-white">
                        {edu.progress}%
                      </span>
                    </div>
                  ) : edu.completed ? (
                    <div className="flex items-center space-x-2">
                      <FaGraduationCap className="text-[#012286] text-2xl" />
                      <span className="text-gray-800 font-medium text-sm sm:text-base">Concluído com sucesso!</span>
                    </div>
                  ) : null}
                </div>
              </Motion.div>
            ))}
          </div>
        )}

        {activeTab === 'certificates' && (
          <div className="overflow-y-auto max-h-[500px] space-y-4 px-6 pb-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between bg-white shadow-md rounded-lg p-4 border border-gray-200"
              >
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{cert.title}</h4>
                  <p className="text-sm text-gray-600">{cert.platform}</p>
                </div>
                <div className="text-sm text-gray-500 mt-2 sm:mt-0">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-[#012286] hover:underline">
                    Ver Certificado
                  </a>
                  <span className="ml-4">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'awards' && (
          <div className="space-y-4">
            {awards.map((award, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800">{award.title}</h4>
                <p className="text-sm text-gray-600">{award.institution} - {award.year}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Motion.section>
  );
}