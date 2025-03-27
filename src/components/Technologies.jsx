import React from 'react';

const TechnologyBadge = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-30 h-8 inline-block mx-1" />
);

export default function Technologies() {
  return (
    <section id="technologies" className="w-full p-4 shadow-md my-4">
      <h2 className="text-3xl font-bold mb-2">Tecnologias</h2>
      <div className="mb-4">
        <h3 className="text-2xl font-semibold">Desenvolvimento Web</h3>
        <p className='mb-4'>
          <strong>Front End:</strong> 
          <TechnologyBadge src="https://img.shields.io/badge/-HTML5-E34F26?&logo=html5&logoColor=white" alt="HTML5" />
          <TechnologyBadge src="https://img.shields.io/badge/-CSS3-1572B6?&logo=css3&logoColor=white" alt="CSS3" />
          <TechnologyBadge src="https://img.shields.io/badge/-JavaScript-F7DF1E?&logo=javascript&logoColor=black" alt="JavaScript" />
          <TechnologyBadge src="https://img.shields.io/badge/-React-61DAFB?&logo=react&logoColor=black" alt="React" />
          <TechnologyBadge src="https://img.shields.io/badge/-Bootstrap-563D7C?&logo=bootstrap&logoColor=white" alt="Bootstrap" />
          <TechnologyBadge src="https://img.shields.io/badge/-TailwindCSS-38B2AC?&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
        </p>
        <p>
          <strong>Back End:</strong> 
          <TechnologyBadge src="https://img.shields.io/badge/Java-%23ED8B00.svg?logo=openjdk&logoColor=white" alt="Java" />
          <TechnologyBadge src="https://img.shields.io/badge/-Python-3776AB?&logo=python&logoColor=white" alt="Python" />
          <TechnologyBadge src="https://img.shields.io/badge/-Spring-6DB33F?&logo=spring&logoColor=white" alt="Spring" />
          <TechnologyBadge src="https://img.shields.io/badge/-Flask-000000?&logo=flask&logoColor=white" alt="Flask" />
          <TechnologyBadge src="https://img.shields.io/badge/-FastAPI-009688?&logo=fastapi&logoColor=white" alt="FastAPI" />
          <TechnologyBadge src="https://img.shields.io/badge/-Firebase-FFCA28?&logo=firebase&logoColor=black" alt="Firebase" />
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-2xl font-semibold">Desenvolvimento Mobile</h3>
        <p>
          <TechnologyBadge src="https://img.shields.io/badge/-React%20Native-61DAFB?&logo=react&logoColor=black" alt="React Native" />
          <TechnologyBadge src="https://img.shields.io/badge/-Flutter-02569B?&logo=flutter&logoColor=white" alt="Flutter" />
          <TechnologyBadge src="https://img.shields.io/badge/-Godot-478CBF?&logo=godot-engine&logoColor=white" alt="Godot" />
          <TechnologyBadge src="https://img.shields.io/badge/-Android%20Studio-3DDC84?&logo=android-studio&logoColor=white" alt="Android Studio" />
          <TechnologyBadge src="https://img.shields.io/badge/-Kotlin-0095D5?&logo=kotlin&logoColor=white" alt="Kotlin" />
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-2xl font-semibold">Banco de Dados</h3>
        <p className='mb-4'>
          <strong>Relacionais:</strong> 
          <TechnologyBadge src="https://img.shields.io/badge/-MySQL-4479A1?&logo=mysql&logoColor=white" alt="MySQL" />
          <TechnologyBadge src="https://img.shields.io/badge/-PostgreSQL-336791?&logo=postgresql&logoColor=white" alt="PostgreSQL" />
        </p>
        <p>
          <strong>Não-relacionais:</strong> 
          <TechnologyBadge src="https://img.shields.io/badge/-MongoDB-47A248?&logo=mongodb&logoColor=white" alt="MongoDB" />
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-2xl font-semibold">Nuvem</h3>
        <p>
          <TechnologyBadge src="https://img.shields.io/badge/-Google%20Cloud-4285F4?&logo=google-cloud&logoColor=white" alt="Google Cloud" />
          <TechnologyBadge src="https://img.shields.io/badge/-Oracle%20Cloud%20Infrastructure-F80000?&logo=oracle&logoColor=white" alt="Oracle Cloud Infrastructure" />
          <TechnologyBadge src="https://img.shields.io/badge/-AWS-232F3E?&logo=amazon-aws&logoColor=white" alt="AWS" />
          <TechnologyBadge src="https://img.shields.io/badge/-Azure-0078D4?&logo=microsoft-azure&logoColor=white" alt="Azure" />
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-2xl font-semibold">Ciência de Dados</h3>
        <p>
          <TechnologyBadge src="https://img.shields.io/badge/-NumPy-013243?&logo=numpy&logoColor=white" alt="NumPy" />
          <TechnologyBadge src="https://img.shields.io/badge/-Pandas-150458?&logo=pandas&logoColor=white" alt="Pandas" />
          <TechnologyBadge src="https://img.shields.io/badge/-SciPy-8CAAE6?&logo=scipy&logoColor=white" alt="SciPy" />
          <TechnologyBadge src="https://img.shields.io/badge/-Matplotlib-11557C?&logo=matplotlib&logoColor=white" alt="Matplotlib" />
          <TechnologyBadge src="https://img.shields.io/badge/-Seaborn-3776AB?&logo=python&logoColor=white" alt="Seaborn" />
          <TechnologyBadge src="https://img.shields.io/badge/-Scikit--learn-F7931E?&logo=scikit-learn&logoColor=white" alt="Scikit-learn" />
          <TechnologyBadge src="https://img.shields.io/badge/-TensorFlow-FF6F00?&logo=tensorflow&logoColor=white" alt="TensorFlow" />
          <TechnologyBadge src="https://img.shields.io/badge/-PyTorch-EE4C2C?&logo=pytorch&logoColor=white" alt="PyTorch" />
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-2xl font-semibold">Linguagem de Montagem</h3>
        <p>
          <TechnologyBadge src="https://img.shields.io/badge/-Assembly-000?&logo=assemblyscript&logoColor=white" alt="Assembly" />
          <TechnologyBadge src="https://img.shields.io/badge/-VHDL-000?&logo=vhdl&logoColor=white" alt="VHDL" />
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-2xl font-semibold">Redes de Computadores</h3>
        <p>
          <TechnologyBadge src="https://img.shields.io/badge/-Cisco%20Network-1BA0D7?&logo=cisco&logoColor=white" alt="Cisco Network" />
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-2xl font-semibold">UI/UX</h3>
        <p>
          <TechnologyBadge src="https://img.shields.io/badge/-Figma-F24E1E?&logo=figma&logoColor=white" alt="Figma" />
          <TechnologyBadge src="https://img.shields.io/badge/-Miro-050038?&logo=miro&logoColor=white" alt="Miro" />
        </p>
      </div>
    </section>
  );
}