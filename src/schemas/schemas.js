import { projectsData } from "../data/projectsData";
export const schemaPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Erick Jonathan Macedo dos Santos",
    "jobTitle": "Desenvolvedor FullStack, Cientista de Dados, Freelancer",
    "url": "https://ericksantos.is-a.dev/",
    "email": "erick.jonathan@ufrpe.br",
    "image": "https://ericksantos.is-a.dev/assets/profile.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/ericksantos",
      "https://github.com/erickjonatthan",
      "http://lattes.cnpq.br/1597336402095190"
    ]
  };
export const schemaEducation = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Universidade Federal Rural de Pernambuco - UFRPE, IFPE",
    alumni: {
      "@type": "Person",
      name: "Erick Jonathan Macedo dos Santos",
      sameAs: "https://ericksantos.is-a.dev/",
    },
  };

export const schemaProjects = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Projetos de Erick Jonathan Macedo dos Santos",
    "itemListElement": Object.keys(projectsData).flatMap((category, catIdx) =>
      projectsData[category].map((project, idx) => ({
        "@type": "ListItem",
        "position": catIdx * 10 + idx + 1,
        "name": project.title,
        "description": project.description,
        "image": project.image,
        "url": "https://ericksantos.is-a.dev/#projects"
      }))
    )
  };

export const schemaSkills = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Habilidades Técnicas de Erick Jonathan Macedo dos Santos",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Desenvolvimento Web"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Desenvolvimento Mobile"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Banco de Dados"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "UI/UX"
    }
  ]
};