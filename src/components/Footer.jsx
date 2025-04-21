import React from 'react';
import { FaHeart, FaLinkedin, FaGithub, FaGraduationCap } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#071532] to-[#012286] text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Coluna da Esquerda - Versículo */}
          <div className="text-center md:text-left">
            <blockquote className="italic text-gray-300">
              "Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens."
            </blockquote>
            <p className="text-sm text-gray-400 mt-2">- Colossenses 3:23</p>
          </div>
          
          {/* Coluna da Direita - Links Sociais */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4">Conecte-se</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://www.linkedin.com/in/ericksantos"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/erickjonatthan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="http://lattes.cnpq.br/1597336402095190"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                <FaGraduationCap size={24} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Linha Divisória */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-sm">
              &copy; {new Date().getFullYear()} ErickSantos. Todos os direitos reservados.
            </p>
            <p className="text-center md:text-right text-sm mt-2 md:mt-0 flex items-center justify-center">
              Feito com <FaHeart className="text-red-500 mx-1" /> em São Bento do Una, PE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}