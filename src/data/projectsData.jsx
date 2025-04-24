import { FaReact, FaNodeJs, FaPython, FaDatabase, FaJava} from 'react-icons/fa';

export const projectsData = {
  backend: [
    {
      title: "API REST - AlfaEduca",
      description: "API Spring Boot com autenticação JWT e Docker. Integra PostgreSQL, Swagger e Tesseract OCR para criação de atividades educacionais.",
      image: "/assets/alfaeducaserver.png",
      technologies: [<FaJava />, <FaDatabase />],
    },
    {
      title: "Lembrete de remédios",
      description: "API RESTful para gerenciamento de medicamentos com Spring Data e JPA. Arquitetura modular seguindo princípios SOLID e padrões de design.",
      image: "/assets/lembreteremedios.webp",
      technologies: [<FaJava />, <FaDatabase />],
    },
    {
      title: "Gerenciamento de Viagens",
      description: "API REST para controle de viagens com Docker e PostgreSQL. Implementação CRUD seguindo princípios SOLID e padrões de design.",
      image: "/assets/travel_icon.svg",
      technologies: [<FaJava />, <FaDatabase />],
    },
    {
      title: "Sistema de Certificação",
      description: "API Spring Boot escalável para gestão de certificados. Endpoints REST com PostgreSQL e padrões de arquitetura.",
      image: "/assets/certificado.jpg",
      technologies: [<FaJava />, <FaDatabase />],
    },
    {
      title: "Challenge ONE | Hotel Alura",
      description: "Sistema de reservas para hotel com CRUD completo. Desenvolvido como desafio do programa Oracle Next Education.",
      image: "/assets/hotelAlura.jpg",
      technologies: [<FaJava />, <FaDatabase />],
    },
  ],
  frontend: [
    {
      title: "SaaS para Óticas",
      description: "Sistema de gestão para óticas com integração WhatsApp. Foco em renovação de exames e organização de vendas.",
      image: "/assets/saasoticas.jpg",
      technologies: [<FaReact />, <FaNodeJs />],
    },
    {
      title: "Fort Pisos Laminados",
      description: "Página web com o objetivo de converter visitantes em leads ou clientes para uma empresa de Pisos Laminados.",
      image: "/assets/fortpisos.png",
      technologies: [<FaReact />, <FaNodeJs />],
    },
    {
      title: "Monitor&A",
      description: "Plataforma de interação acadêmica com fórum integrado. Centraliza discussões e compartilhamento de materiais entre estudantes e professores.",
      image: "/assets/monitor&a.jpg",
      technologies: [<FaReact />],
    },
    {
      title: "Decodificador de texto Alura",
      description: "Aplicação de criptografia textual para mensagens secretas. Desenvolvido como desafio do programa ONE.",
      image: "/assets/decodificador.png",
      technologies: [<FaReact />],
    },
  ],
  mobile: [
    {
      title: "AlfaEduca",
      description: "App gamificado contra analfabetismo funcional. Features: reconhecimento de texto, divisão silábica e caligrafia interativa.",
      image: "/assets/App.svg",
      technologies: [<FaReact />],
    },
    {
      title: "Gráficos de reservatórios",
      description: "App de visualização da qualidade da água municipal. Dados transparentes e acessíveis para a população sobre abastecimento.",
      image: "/assets/grafico.jpg",
      technologies: [<FaReact />],
    },
    {
      title: "Lembretes de Remédios",
      description: "Aplicativo para gerenciamento de lembretes de remédios.",
      image: "/assets/remedios.jpg",
      technologies: [<FaReact />, <FaNodeJs />],
    },
  ],
  dataAnalysis: [
    {
      title: "Pale Blue Dot",
      description: "Visualização de dados da desertificação no NE brasileiro. Projeto premiado na competição de Visualização da NASA.",
      image: "/assets/nasa.png",
      technologies: [<FaPython />, <FaDatabase />],
    },
  ],
};