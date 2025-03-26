import React, { useState, useEffect } from "react";
import {
  motion as Motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (!isSafari) {
      setIsVisible(current <= 0);
    }
  });

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <AnimatePresence>
      {isVisible && (
        <Motion.header
          className="w-full text-white p-6 flex items-center justify-between bg-inherit fixed top-0 z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          style={{
            background: isSafari
              ? 'linear-gradient(135deg, #0A2D62 0%, #0A2D62 50%, rgba(10,45,98,0.8) 100%)'
              : 'transparent',
          }} // Adiciona gradiente azul escuro estiloso ao fundo
        >
          <div className="flex items-center">
            <div>
              <h1 className="text-5xl font-bold">
                <span className="text-neonBlue">&lt;</span>ejms
                <span className="text-neonBlue">/&gt;</span>
              </h1>
              <p className="text-lg mt-2">
                <TypeAnimation
                  sequence={[
                    'Desenvolvedor FullStack',
                    1000,
                    'Freelancer',
                    1000,
                    'Cientista de Dados',
                    1000,
                    'Pesquisador Científico',
                    1000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </p>
            </div>
          </div>
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              <li>
                <button
                  onClick={() => scrollToSection("about-me")}
                  className="relative text-2xl hover:text-neonBlue hover:after:shadow-neon after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-neonBlue after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left hover:text-shadow-neon text-left"
                >
                  Sobre Mim
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="relative text-2xl hover:text-neonBlue hover:after:shadow-neon after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-neonBlue after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left hover:text-shadow-neon text-left"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="relative text-2xl hover:text-neonBlue hover:after:shadow-neon after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-neonBlue after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left hover:text-shadow-neon text-left"
                >
                  Habilidades
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="relative text-2xl hover:text-neonBlue hover:after:shadow-neon after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-neonBlue after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left hover:text-shadow-neon text-left mr-4"
                >
                  Contato
                </button>
              </li>
            </ul>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
          <AnimatePresence>
            {isMenuOpen && (
              <Motion.div
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex flex-col items-center justify-center z-50 overflow-hidden"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }} // Diminui a duração da transição
                style={{ backgroundColor: 'transparent' }} // Adiciona transparência ao fundo
              >
                <button
                  className="absolute top-4 right-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
                <ul className="space-y-4 text-2xl">
                  <li>
                    <button
                      onClick={() => scrollToSection("about-me")}
                      className="relative text-2xl hover:text-neonBlue hover:after:shadow-neon after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-neonBlue after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left hover:text-shadow-neon text-left"
                    >
                      Sobre Mim
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("projects")}
                      className="relative text-2xl hover:text-neonBlue hover:after:shadow-neon after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-neonBlue after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left hover:text-shadow-neon text-left"
                    >
                      Projetos
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("skills")}
                      className="relative text-2xl hover:text-neonBlue hover:after:shadow-neon after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-neonBlue after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left hover:text-shadow-neon text-left"
                    >
                      Habilidades
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="relative text-2xl hover:text-neonBlue hover:after:shadow-neon after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-neonBlue after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left hover:text-shadow-neon text-left mr-4"
                    >
                      Contato
                    </button>
                  </li>
                </ul>
              </Motion.div>
            )}
          </AnimatePresence>
        </Motion.header>
      )}
    </AnimatePresence>
  );
}