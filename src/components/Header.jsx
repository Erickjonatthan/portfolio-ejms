import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Fechar o menu após clicar em uma opção
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <header className="w-full text-white p-4 flex items-center justify-between bg-inherit">
      <div className="flex items-center">
        <div>
          <h1 className="text-4xl font-bold">&lt;ErickJonathan/&gt;</h1>
          <p className="text-lg">Desenvolvedor FullStack</p>
        </div>
      </div>
      <nav className="hidden md:flex">
        <ul className="flex space-x-4">
          <li><button onClick={() => scrollToSection('about-me')} className="hover:underline">Sobre Mim</button></li>
          <li><button onClick={() => scrollToSection('projects')} className="hover:underline">Projetos</button></li>
          <li><button onClick={() => scrollToSection('skills')} className="hover:underline">Habilidades</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="hover:underline">Contato</button></li>
        </ul>
      </nav>
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        )}
      </button>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex flex-col items-center justify-center z-50 overflow-hidden">
          <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <ul className="space-y-4 text-2xl">
            <li><button onClick={() => scrollToSection('about-me')} className="hover:underline">Sobre Mim</button></li>
            <li><button onClick={() => scrollToSection('projects')} className="hover:underline">Projetos</button></li>
            <li><button onClick={() => scrollToSection('skills')} className="hover:underline">Habilidades</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="hover:underline">Contato</button></li>
          </ul>
        </div>
      )}
    </header>
  );
}