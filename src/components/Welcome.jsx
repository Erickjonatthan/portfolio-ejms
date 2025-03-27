import React from "react";

export default function Welcome() {
  return (
    <div className="flex flex-col justify-center h-full pl-4">
      <h1 className="text-left text-3xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-snug font-bold text-white p-5 leading-snug sm:leading-normal md:leading-snug pt-28">
        Converto{" "}
        <span className="animated-gradient bg-clip-text text-transparent inline-flex items-center text-stroke">
          desafios
        </span>{" "}
        em oportunidades
        <br />
        por meio de{" "}
        <span className="animated-gradient bg-clip-text text-transparent inline-flex items-center text-stroke">
          soluções tecnológicas
        </span>{" "}
        eficientes,
        <br />
        impulsionando{" "}
        <span className="animated-gradient bg-clip-text text-transparent inline-flex items-center text-stroke">
          negócios
        </span>{" "}
        e aprimorando a<br />
        <span className="animated-gradient bg-clip-text text-transparent inline-flex items-center text-stroke">
          qualidade de vida
        </span>
        .
      </h1>
    </div>
  );
}