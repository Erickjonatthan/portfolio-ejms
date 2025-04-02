import React, { useRef } from 'react';
import { motion as Motion, useInView } from 'framer-motion';
import profilePicture from "../assets/profile.jpg";

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Motion.section
      ref={ref}
      id="about-me"
      className="w-full p-8 shadow-md my-4 text-white flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row items-center text-center md:text-left max-w-4xl">
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Sobre Mim</h2>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify">
            Olá, eu sou [Seu Nome], um desenvolvedor web com experiência em Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quisquam ducimus laborum sint reiciendis! Voluptatum, aut dolore. Commodi, fugit nam autem necessitatibus ad quis, inventore doloribus natus ipsum modi alias.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit earum vitae dicta veritatis possimus aliquid consequuntur sed nemo laudantium alias quo incidunt sit quisquam ipsum, odit beatae, quas eius qui.
          </p>
        </div>
        <div className="flex-shrink-0 md:ml-28">
          <img
            src={profilePicture}
            alt="Minha Foto"
            className="w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-blue-500/50"
          />
        </div>
      </div>
    </Motion.section>
  );
}