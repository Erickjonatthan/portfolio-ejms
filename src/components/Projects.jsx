import React, { useRef, useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa'; // Exemplos de ícones

const projectsData = {
  backend: [
    {
      title: "API de Gerenciamento de Usuários",
      description: "Uma API RESTful para gerenciar usuários com autenticação JWT.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaNodeJs />, <FaDatabase />], // Ícones fictícios
    },
    {
      title: "Sistema de Relatórios",
      description: "Backend para geração de relatórios dinâmicos em PDF.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaPython />, <FaDatabase />],
    },
  ],
  frontend: [
    {
      title: "Dashboard Interativo",
      description: "Uma interface moderna para visualização de dados em tempo real.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaReact />, <FaNodeJs />],
    },
    {
      title: "Landing Page Responsiva",
      description: "Página inicial otimizada para dispositivos móveis.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaReact />],
    },
  ],
  mobile: [
    {
      title: "App de Tarefas",
      description: "Aplicativo para organização de tarefas com notificações.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaReact />],
    },
    {
      title: "App de Saúde",
      description: "Aplicativo para monitoramento de atividades físicas.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaReact />, <FaNodeJs />],
    },
  ],
  dataAnalysis: [
    {
      title: "Dashboard de Análise de Vendas",
      description: "Ferramenta para análise de vendas com gráficos interativos.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaPython />, <FaDatabase />],
    },
    {
      title: "Modelo de Previsão de Demanda",
      description: "Modelo preditivo para estimar demandas futuras.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaPython />],
    },
  ],
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('backend');
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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Motion.section
      id="projects"
      ref={ref}
      className="w-full min-h-screen text-gray-800 flex flex-col items-center justify-center sm:mt-10 sm:px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-full max-w-5xl px-4 mx-auto">
        <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl font-bold text-center mb-4">Projetos</h2>
        <p className="text-gray-300 text-center text-base sm:text-xl mb-8">
          Esses são os projetos que demonstram minhas habilidades em desenvolvimento e análise. Explore cada categoria para saber mais!
        </p>
        {/* Menu de Categorias */}
        <div className="flex flex-row justify-center mb-6 space-x-2 sm:space-x-4 px-2">
          {Object.keys(projectsData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-2 py-1.5 sm:px-4 sm:py-2 rounded-md sm:rounded-lg font-medium capitalize text-sm sm:text-lg transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#012286] text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-[#071532] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projetos da Categoria Ativa */}
        <div className="flex flex-wrap justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projectsData[activeCategory].map((project, index) => (
              <Motion.div
                key={index}
                className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 w-full max-w-xs sm:max-w-sm border border-gray-200 hover:border-[#012286]"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm sm:text-base font-medium">Visualizar Detalhes</span>
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <h4 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 hover:text-[#012286] transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base transition-colors duration-300">
                    {project.description}
                  </p>
                  {/* Ícones de Tecnologias */}
                  <div className="flex flex-wrap mt-2 space-x-2 text-xl text-[#012286]">
                    {project.technologies?.map((icon, i) => (
                      <span key={i}>{icon}</span>
                    ))}
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>

        {/* Seção de chamada para contato renovada */}
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
              Estou sempre em busca de novos desafios e parcerias interessantes. 
              Se você tem um projeto em mente, adoraria ouvir sobre ele!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative px-8 py-3 bg-white text-[#012286] font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Iniciar Conversa</span>
                <div className="absolute inset-0 h-full w-0 bg-[#012286] rounded-lg transition-all duration-300 group-hover:w-full -z-0"></div>
              </button>
              <p className="text-gray-300 text-sm">ou</p>
              <a
                href="mailto:erick.jonathan@ufrpe.br"
                className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#012286] transition-all duration-300 transform hover:scale-105"
              >
                Enviar E-mail Direto
              </a>
            </div>
          </div>
        </Motion.div>
      </div>
    </Motion.section>
  );
}