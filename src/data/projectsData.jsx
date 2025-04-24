import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';

export const projectsData = {
  backend: [
    {
      title: "API de Gerenciamento de Usuários",
      description: "Uma API RESTful para gerenciar usuários com autenticação JWT.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaNodeJs />, <FaDatabase />],
    },
    {
      title: "Sistema de Relatórios",
      description: "Backend para geração de relatórios dinâmicos em PDF.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaPython />, <FaDatabase />],
    },
  ],
  frontend: [
    {
      title: "Dashboard Interativo",
      description: "Uma interface moderna para visualização de dados em tempo real.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaReact />, <FaNodeJs />],
    },
    {
      title: "Landing Page Responsiva",
      description: "Página inicial otimizada para dispositivos móveis.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaReact />],
    },
  ],
  mobile: [
    {
      title: "App de Tarefas",
      description: "Aplicativo para organização de tarefas com notificações.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaReact />],
    },
    {
      title: "App de Saúde",
      description: "Aplicativo para monitoramento de atividades físicas.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaReact />, <FaNodeJs />],
    },
  ],
  dataAnalysis: [
    {
      title: "Dashboard de Análise de Vendas",
      description: "Ferramenta para análise de vendas com gráficos interativos.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaPython />, <FaDatabase />],
    },
    {
      title: "Modelo de Previsão de Demanda",
      description: "Modelo preditivo para estimar demandas futuras.",
      image: "https://via.placeholder.com/150",
      technologies: [<FaPython />],
    },
  ],
};