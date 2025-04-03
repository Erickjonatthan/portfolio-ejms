import React, { useRef, useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import profilePicture from "../assets/profile.jpg";

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
      className="w-full min-h-screen justify-center text-white flex flex-col items-center px-8" // Adicionado px-4
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex flex-col md:flex-row items-center text-center md:text-left max-w-4xl">
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Quem é <span className="text-white hover:text-blue-600 transition-colors duration-300">Erick</span>?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-justify">
            Olá, eu sou [Seu Nome], um desenvolvedor web com experiência em Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quisquam ducimus laborum sint reiciendis! Voluptatum, aut dolore. Commodi, fugit nam autem necessitatibus ad quis, inventore doloribus natus ipsum modi alias.
          </p>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-justify mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit earum vitae dicta veritatis possimus aliquid consequuntur sed nemo laudantium alias quo incidunt sit quisquam ipsum, odit beatae, quas eius qui.
          </p>
        </div>
        <div className="flex-shrink-0 md:ml-28">
          <img
            src={profilePicture}
            alt="Foto de [Seu Nome], desenvolvedor web"
            loading="lazy"
            className="w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-blue-500/50 object-cover"
          />
        </div>
      </div>
    </Motion.section>
  );
}