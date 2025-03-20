import React from 'react';

export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="w-full bg-gray-200 p-4">
      <ul className="flex justify-around">
        <li>
          <button onClick={() => scrollToSection('about-me')} className="text-blue-600 hover:underline">
            Sobre Mim
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('projects')} className="text-blue-600 hover:underline">
            Projetos
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('skills')} className="text-blue-600 hover:underline">
            Habilidades
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('contact')} className="text-blue-600 hover:underline">
            Contato
          </button>
        </li>
      </ul>
    </nav>
  );
}