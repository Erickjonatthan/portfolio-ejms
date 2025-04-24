import { FaReact, FaNodeJs, FaPython, FaDatabase, FaJava} from 'react-icons/fa';

export const projectsData = {
  backend: [
    {
      title: "API REST - AlfaEduca",
      description: "API REST em Spring Boot com autenticação JWT, serviço de email, e documentação Swagger. Utiliza PostgreSQL e Flyway para migrações, além de ser dockerizada para fácil deploy. Inclui recursos como reconhecimento de texto com Tesseract OCR, silabação de palavras e criação de atividades educacionais.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaJava />, <FaDatabase />],
    },
    {
      title: "Lembrete de remédios",
      description: "Criação de uma API RESTful para gerenciamento de lembretes, aplicando princípios SOLID e Design Patterns. Utilização de Spring Data, JPA e PostgreSQL para operações CRUD, com autenticação JWT para segurança e uma arquitetura modular e escalável.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaJava />, <FaDatabase />],
    },
    {
      title: "Gerenciamento de Viagens",
      description: "Desenvolvimento de API REST para controle de viagens utilizando Docker para simplificar a configuração do ambiente. Implementação de operações CRUD com PostgreSQL, seguindo boas práticas de SOLID e padrões de design.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaJava />, <FaDatabase />],
    },
    {
      title: "Sistema de Certificação",
      description: "Configuração de ambiente Spring Boot, desenvolvimento de endpoints REST para CRUD em banco de dados, utilizando PostgreSQL. A API foi projetada para ser escalável, empregando Design Patterns e princípios SOLID.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaJava />, <FaDatabase />],
    },
    {
      title: "Challenge ONE | Hotel Alura",
      description: "Sistema de gerenciamento do hotel Alura, com CRUD Reservas.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaJava />, <FaDatabase />],
    },
  ],
  frontend: [
    {
      title: "SaaS para Óticas.",
      description: "O nosso principal diferencial é a comunicação constante com o clientes, cuidado com a renovação de exames e organização de vendas. Todo o sistema de comunicação com os clientes é via WhatsApp.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaReact />, <FaNodeJs />],
    },
    {
      title: "Fort Pisos Laminados",
      description: "Página web com o objetivo de converter visitantes em leads ou clientes para uma empresa de Pisos Laminados.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaReact />, <FaNodeJs />],
    },
    {
      title: "Monitor&A",
      description: "O projeto tem como objetivo a criação de um site destinado a centralizar a interação entre estudantes, monitores e professores. Para isso, será criado um fórum dedicado às discussões, apresentação e resolução de atividades, bem como ao compartilhamento geral de informações sobre a disciplina.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaReact />],
    },
    {
      title: "Decodificador de texto Alura",
      description: "Uma aplicação que criptografa textos, assim você poderá trocar mensagens secretas com outras pessoas que saibam o segredo da criptografia utilizada.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaReact />],
    },
  ],
  mobile: [
    {
      title: "AlfaEduca",
      description: "Plataforma gamificada para combater o analfabetismo funcional no Brasil, utilizando reconhecimento de texto, leitura em voz alta, divisão silábica e caligrafia interativa.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaReact />],
    },
    {
      title: "Gráficos de reservatórios",
      description: "Busca-se tornar esses valores acessíveis para a população a fim de que seja possível difundir/tornar transparente e de fácil acesso as informações ao respeito da qualidade da água disponível para o abastecimento no município",
      image: "https://via.placeholder.com/150",
      technologies: [<FaReact />],
    },
    {
      title: "Lembretes de Remédios",
      description: "Aplicativo para gerenciamento de lembretes de remédios.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaReact />, <FaNodeJs />],
    },
  ],
  dataAnalysis: [
    {
      title: "Pale Blue Dot",
      description: "Um sistema de visualização do processo de desertificação no nordeste Brasileiro, com gráficos e mapas interativos. Foi desenvolvido na competição de Visualização de Dados da NASA.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaPython />, <FaDatabase />],
    },
  ],
};