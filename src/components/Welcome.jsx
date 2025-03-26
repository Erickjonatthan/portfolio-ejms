import React from 'react';

export default function Welcome() {
  return (
    <div className="flex flex-col justify-center h-full pl-4">
      <h1 className="text-left text-3xl sm:text-4xl md:text-5xl font-bold text-white p-5 leading-normal md:leading-snug">
        Converto <span className="animated-gradient bg-clip-text text-transparent inline-flex items-center">desafios</span> em oportunidades<br />
        por meio de <span className="animated-gradient bg-clip-text text-transparent inline-flex items-center">soluções tecnológicas</span> eficientes,<br />
        impulsionando <span className="animated-gradient bg-clip-text text-transparent inline-flex items-center">negócios</span> e aprimorando a<br />
        <span className="animated-gradient bg-clip-text text-transparent inline-flex items-center">qualidade de vida</span>.
      </h1>
    </div>
  );
}