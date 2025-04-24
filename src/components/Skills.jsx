import { motion as Motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import SchoolIcon from "@mui/icons-material/School";
import { useInView } from '../hooks/useInView';
import { TechnologyBadge } from '../models/TechnologyBadge';
import { schemaSkills } from "../schemas/schemas";
export default function Skills() {
  const [ref, isInView] = useInView();
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -40;
      const yPosition =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(schemaSkills)}</script>
      <Motion.section
        ref={ref}
        id="skills"
        role="region"
        aria-label="Minhas Habilidades Técnicas"
        className="w-full min-h-screen flex flex-col justify-center items-center p-8 text-white mt-12"
        itemScope
        itemType="https://schema.org/ItemList"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-x-8">
          <div className="md:w-1/3 text-center md:text-left mb-8 md:mb-0 flex flex-col items-center md:items-start">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" itemProp="name">
              Minhas Habilidades Técnicas
            </h2>
            <p className="text-lg mb-4 text-justify" itemProp="description">
              Estas são as principais tecnologias e ferramentas que utilizo para
              criar soluções inovadoras. Especializado em desenvolvimento web,
              mobile e design de interfaces, com foco em qualidade e
              eficiência em cada projeto. Minhas habilidades abrangem desde front-end
              até back-end, incluindo bancos de dados e UI/UX.
            </p>
            <DotLottieReact
              src="/assets/tec.lottie"
              loop
              autoplay
              className="w-full max-w-xl"
            />
          </div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="p-4 border border-blue-300 rounded-md shadow-md hover:shadow-lg transition-shadow"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              role="article"
              aria-labelledby="web-dev-title"
            >
              <h3 id="web-dev-title" className="text-2xl font-semibold mb-2 flex items-center" itemProp="name">
                <i className="fas fa-code mr-2" aria-hidden="true"></i> Desenvolvimento Web
              </h3>
              <p className="text-lg">
                <strong>Front End:</strong>
              </p>
              <div className="flex flex-wrap">
                <TechnologyBadge
                  src="https://img.shields.io/badge/-HTML5-E34F26?&logo=html5&logoColor=white"
                  alt="HTML5"
                />
                <TechnologyBadge
                  src="https://img.shields.io/badge/-CSS3-1572B6?&logo=css3&logoColor=white"
                  alt="CSS3"
                />
                <TechnologyBadge
                  src="https://img.shields.io/badge/-JavaScript-F7DF1E?&logo=javascript&logoColor=black"
                  alt="JavaScript"
                />
                <TechnologyBadge
                  src="https://img.shields.io/badge/-React-61DAFB?&logo=react&logoColor=black"
                  alt="React"
                />
                <TechnologyBadge
                  src="https://img.shields.io/badge/-Bootstrap-563D7C?&logo=bootstrap&logoColor=white"
                  alt="Bootstrap"
                />
                <TechnologyBadge
                  src="https://img.shields.io/badge/-TailwindCSS-38B2AC?&logo=tailwind-css&logoColor=white"
                  alt="TailwindCSS"
                />
              </div>
              <p className="text-lg">
                <strong>Back End:</strong>
              </p>
              <div className="flex flex-wrap">
                <TechnologyBadge
                  src="https://img.shields.io/badge/Java-%23ED8B00.svg?logo=openjdk&logoColor=white"
                  alt="Java"
                />
                <TechnologyBadge
                  src="https://img.shields.io/badge/-Python-3776AB?&logo=python&logoColor=white"
                  alt="Python"
                />
                <TechnologyBadge
                  src="https://img.shields.io/badge/-Spring-6DB33F?&logo=spring&logoColor=white"
                  alt="Spring"
                />
                <TechnologyBadge
                  src="https://img.shields.io/badge/-Flask-000000?&logo=flask&logoColor=white"
                  alt="Flask"
                />
                <TechnologyBadge
                  src="https://img.shields.io/badge/-FastAPI-009688?&logo=fastapi&logoColor=white"
                  alt="FastAPI"
                />
                <TechnologyBadge
                  src="https://img.shields.io/badge/-Firebase-FFCA28?&logo=firebase&logoColor=black"
                  alt="Firebase"
                />
              </div>
            </div>

            <div 
              className="p-4 border border-blue-300 rounded-md shadow-md hover:shadow-lg transition-shadow"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              role="article"
              aria-labelledby="mobile-dev-title"
            >
              <h3 id="mobile-dev-title" className="text-2xl font-semibold mb-4 flex items-center" itemProp="name">
                <i className="fas fa-mobile-alt mr-2" aria-hidden="true"></i> Desenvolvimento Mobile
              </h3>
              <div className="flex flex-wrap">
                <TechnologyBadge
                  src="https://img.shields.io/badge/-React%20Native-61DAFB?&logo=react&logoColor=black"
                  alt="React Native"
                />
                <TechnologyBadge
                  src="https://img.shields.io/badge/-Flutter-02569B?&logo=flutter&logoColor=white"
                  alt="Flutter"
                />
                <TechnologyBadge
                  src="https://img.shields.io/badge/-Godot-478CBF?&logo=godot-engine&logoColor=white"
                  alt="Godot"
                />
                <TechnologyBadge
                  src="https://img.shields.io/badge/-Android%20Studio-3DDC84?&logo=android-studio&logoColor=white"
                  alt="Android Studio"
                />
                <TechnologyBadge
                  src="https://img.shields.io/badge/-Kotlin-0095D5?&logo=kotlin&logoColor=white"
                  alt="Kotlin"
                />
              </div>
            </div>

            <div 
              className="p-4 border border-blue-300 rounded-md shadow-md hover:shadow-lg transition-shadow"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              role="article"
              aria-labelledby="database-title"
            >
              <h3 id="database-title" className="text-2xl font-semibold mb-4 flex items-center" itemProp="name">
                <i className="fas fa-database mr-2" aria-hidden="true"></i> Banco de Dados
              </h3>
              <div className="flex flex-wrap">
                <TechnologyBadge
                  src="https://img.shields.io/badge/-MySQL-4479A1?&logo=mysql&logoColor=white"
                  alt="MySQL"
                />
                <TechnologyBadge
                  src="https://img.shields.io/badge/-PostgreSQL-336791?&logo=postgresql&logoColor=white"
                  alt="PostgreSQL"
                />
                <TechnologyBadge
                  src="https://img.shields.io/badge/-MongoDB-47A248?&logo=mongodb&logoColor=white"
                  alt="MongoDB"
                />
              </div>
            </div>


            <div 
              className="p-4 border border-blue-300 rounded-md shadow-md hover:shadow-lg transition-shadow"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              role="article"
              aria-labelledby="uiux-title"
            >
              <h3 id="uiux-title" className="text-2xl font-semibold mb-4 flex items-center" itemProp="name">
                <i className="fas fa-paint-brush mr-2" aria-hidden="true"></i> UI/UX
              </h3>
              <div className="flex flex-wrap">
                <TechnologyBadge
                  src="https://img.shields.io/badge/-Figma-F24E1E?&logo=figma&logoColor=white"
                  alt="Figma"
                />
                <TechnologyBadge
                  src="https://img.shields.io/badge/-Miro-050038?&logo=miro&logoColor=white"
                  alt="Miro"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => scrollToSection("education")}
            className="px-6 py-3 shadow-lg transition-transform transform hover:scale-110 mx-auto flex items-center justify-center gap-2"
            style={{
              background: "linear-gradient(90deg, #1E88E5, #42A5F5)",
              color: "#fff",
              fontWeight: "bold",
              boxShadow: "0 4px 15px rgba(30, 136, 229, 0.4)",
              transition: "all 0.4s ease-in-out",
              borderRadius: "50px",
              maxWidth: "200px",
              textAlign: "center",
            }}
            aria-label="Ir para seção Educação"
          >
            <SchoolIcon/>
            Educação
          </button>
        </div>
      </Motion.section>
    </>
  );
}
