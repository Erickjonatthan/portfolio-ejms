export const educationData = [
  {
    title: "Engenharia de Computação",
    institution: "UFRPE - UABJ",
    logo: "/assets/ufrpe.png",
    progress: 60,
    description:
      "Curso superior focado em desenvolvimento de software, hardware e sistemas embarcados.",
  },
  {
    title: "Técnico em Informática para Internet",
    institution: "IFPE - Campus Belo Jardim",
    logo: "/assets/ifpebj.svg",
    completed: true,
    description:
      "Curso técnico com ênfase em desenvolvimento web e tecnologias para internet.",
  },
];

export const certificates = [
  {
    title: "Programa Oracle Next Education F2 T5 Back-end",
    platform: "Alura",
    link: "https://cursos.alura.com.br/program/certificate/79ce5fa7-34da-4d5b-83e8-7b776616bb93",
    date: "Setembro de 2023",
  },
  {
    title: "Qualidade de Água de Reservatórios da Compesa usando IA e dispositivos mobile",
    platform: "Even3",
    link: "https://www.even3.com.br/documentos/imprimir?i=28728037.0562535.5.8.8428374369267668&cc=6F381AEB-3A06-4CD5-8F5E-4A65117BD0AF",
    date: "Janeiro de 2025",
  },
  {
    title: "Santander Tech+ | Back-End",
    platform: "Ada Tech",
    link: "https://ada.tech/certificado?code=38a3418d-12f7-854a-2511-47892915f500",
    date: "Dezembro de 2024",
  },
  {
    title: "Santander Tech+ | Fundamentos Tech",
    platform: "Ada Tech",
    link: "https://ada.tech/certificado?code=998779ab-7f9f-8c62-2e2d-4e031c62b34e",
    date: "Dezembro de 2024",
  },
  {
    title: "Estruturas de Dados e Algoritmos para o Desenvolvimento de Hardware ",
    platform: "VIRTUS",
    link: "https://moodle.virtus-cc.ufcg.edu.br/mod/simplecertificate/verify.php?code=671a9452-c754-40d7-97e2-20150a000104",
    date: "Outubro de 2024",
  },
  {
    title: "NLW Journey - Java",
    platform: "Rocketseat",
    link: "app.rocketseat.com.br/certificates/dd27ca32-3ea8-4058-a7ea-acb32be1a59b",
    date: "Julho de 2024",
  },
  {
    title: "NLW Expert trilha de Java",
    platform: "Rocketseat",
    link: "https://app.rocketseat.com.br/certificates/5c6b3dc8-853b-4eaa-ae77-63a78eeb15dd",
    date: "Fevereiro de 2024",
  },
  {
    title: "Formação SQL com MySQL Server da Oracle - ONE",
    platform: "Alura",
    link: "https://cursos.alura.com.br/degree/certificate/867d683b-c52f-418c-a974-62e6b0c8195a",
    date: "Janeiro de 2024",
  },
  {
    title: "Formação Oracle Cloud Infrastructure - ONE",
    platform: "Alura",
    link: "https://cursos.alura.com.br/degree/certificate/46b9b88e-4e10-4279-8c4d-18925aac8c12",
    date: "Janeiro de 2024",
  },
];


export const monthMap = {
  janeiro: 0,
  fevereiro: 1,
  março: 2,
  abril: 3,
  maio: 4,
  junho: 5,
  julho: 6,
  agosto: 7,
  setembro: 8,
  outubro: 9,
  novembro: 10,
  dezembro: 11,
};

export const parseDate = (dateString) => {
  const parts = dateString.toLowerCase().split(" de ");
  if (parts.length === 2) {
    const month = monthMap[parts[0]];
    const year = parseInt(parts[1], 10);
    if (month !== undefined && !isNaN(year)) {
      return new Date(year, month + 1, 0);
    }
  }
  return new Date(0);
};

certificates.sort((a, b) => parseDate(b.date) - parseDate(a.date));

export const awards = [
  {
    title: "Honorable Mention Pale Blue Dot: Visualization Challenge",
    institution: "NASA - National Aeronautics and Space Administration",
    year: 2024,
  },
  {
    title: "1° Lugar na competição de Programação",
    institution: "UFRPE",
    year: 2023,
  },
];
