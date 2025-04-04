import React, { useRef, useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';

export default function AboutMe() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isNameHighlighted, setIsNameHighlighted] = useState(false);

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

  useEffect(() => {
    if (isInView) {
      setIsNameHighlighted(true);
      const timeout = setTimeout(() => {
        setIsNameHighlighted(false);
      }, 1000); // 1000ms = 1 segundo

      return () => clearTimeout(timeout);
    }
  }, [isInView]);

  return (
    <Motion.section
      ref={ref}
      id="about-me"
      className="w-full min-h-screen justify-center text-white flex flex-col items-center px-8" // Adicionado px-4
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex flex-col md:flex-row items-center text-center md:text-left max-w-4xl">
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Quem é <span className={`text-white ${isNameHighlighted ? 'text-blue-600' : 'hover:text-blue-600'} transition-colors duration-300`}>Erick</span>?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-justify">
          Estudante de Engenharia da Computação e formado em Técnico em Informática para Internet, com uma forte paixão por desenvolvimento FullStack. Possui um grande interesse em participar de competições e maratonas de programação, além de se engajar em projetos de iniciação científica. Está sempre buscando aprimorar as suas habilidades através de eventos e cursos de programação, que ajudam a mante-lo atualizado nesse mundo da tecnologia.
          </p>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-justify mt-4">
            Erick é um profissional apaixonado por tecnologia, sempre em busca de projetos Freelancer que não apenas contribuam para a sociedade, mas também proporcionem oportunidades de aprendizado prático e desafiador. Se você procura alguém dedicado, inovador e comprometido em entregar soluções sofisticadas, entre em contato e transforme suas ideias em realidade!
          </p>
        </div>
        <div className="flex-shrink-0 md:ml-28">
          <img
            src="/assets/profile.jpg"
            alt="Foto de [Seu Nome], desenvolvedor web"
            loading="lazy"
            className="w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-blue-500/50 object-cover"
          />
        </div>
      </div>
    </Motion.section>
  );
}