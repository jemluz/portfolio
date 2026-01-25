type UserInfo = {
  name: string;
  lastName: string;
  profilePhotoUrl: string;
  urls: string[];
};

export type Project = {
  url: string;
  name: string;
};

export type Background = {
  id: string;
  year: number;
  title: string;
  description: string;
  location?: string;
  durationInMonths?: number;
  isCurrent?: boolean;
  month?: number;
  projects?: Project[];
  isInactive?: boolean;
};

type UserBackground = Background[];

export const listOfYears = [
  1997, 2016, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
];

export const userData: UserInfo = {
  name: "Jemimma",
  lastName: "Luz",
  profilePhotoUrl: "https://github.com/jemluz.png",
  urls: [
    "https://github.com/jemluz",
    "https://www.linkedin.com/in/jemluz",
    "https://www.turma.dev",
  ],
};

export const contentData: UserBackground = [
  {
    id: "bg-1997-09",
    year: 1997,
    month: 9,
    title: "Era uma vez 🚩",
    description: "Brasileira, Soteropolitana",
    location: "Salvador/BA",
  },
  {
    id: "bg-2013-02",
    year: 2013,
    month: 2,
    title: "Ensino médio",
    description: "primeiro contato com programação \n - HTML e CSS",
  },
  {
    id: "bg-2016-03",
    year: 2016,
    month: 3,
    title: "Ingressou na Universidade Federal do Ceará ✈️",
    description: "Bacharelado em Sistemas e Mídias Digitais",
    location: "Fortaleza/CE",
  },
  {
    id: "bg-2016-06",
    year: 2016,
    month: 6,
    title: "Trainee CoDi Jr. ❤️💚💙",
    description: "entrou na empresa júnior do SMD",
  },
  {
    id: "bg-2018-04",
    year: 2018,
    month: 4,
    title: "Entrou para a diretoria 🥸",
    description: "eleita como Diretora de Projetos da CoDi Jr.",
    durationInMonths: 8,
  },
  {
    id: "bg-2018-08",
    year: 2018,
    month: 8,
    title: "Estágio frontend - JGV",
    description: "o primeiro bug em produção a gente nunca esquece ;)",
    durationInMonths: 12,
  },
  {
    id: "bg-2019-08",
    year: 2019,
    month: 8,
    title: "Jr. Developer - JGV 🤓",
    description:
      "o estágio rendeu muitos frutos como um app mobile com + 100K downloads!",
    location: "Salvador/BA",
    projects: [
      {
        url: "https://www.turma.dev",
        name: "Turma.dev",
      },
    ],
  },
  {
    id: "bg-2020-10",
    year: 2020,
    month: 10,
    title: "UX Developer - Ootz 🛍️",
    description: "atuei em um e-commerce com Next.js",
    location: "Curitiba/PR",
    durationInMonths: 6,
  },
  {
    id: "bg-2021-04",
    year: 2021,
    month: 4,
    title: "Dev Jr Flutter / Designer UI - bHave 📲",
    description:
      "redesign e implementação em um app Flutter de terapia para autismo.",
    location: "Recife/PE",
    durationInMonths: 11,
    projects: [
      {
        url: "",
        name: "bHave App",
      },
      {
        url: "https://www.turma.dev",
        name: "Minha geladeira",
      },
    ],
  },
  {
    id: "bg-2021-08",
    year: 2021,
    month: 8,
    title: "Software Engineer - Levva 💛🖤💛",
    description:
      "atuei com angular e react, em projetos nacionais e internacionais, para fábricas de cervejaria, e para deliverys, com milhões de usuários ativos. Em clientes como AmbevTech, BEES e Zé Delivery",
    location: "Campinas/SP",
    isCurrent: true,
    projects: [
      {
        url: "",
        name: "Frontend Artesanal",
      },
    ],
  },
  {
    id: "bg-2022-12a",
    year: 2022,
    month: 12,
    title: "O diploma veio aí! 🎓",
    description: "conclusão do bacharelado em Sístemas e Mídias Digitais!",
    location: "Fortaleza/CE",
    projects: [
      {
        url: "",
        name: "Diplomata",
      },
      {
        url: "",
        name: "TCC UFC - Diplomata",
      },
    ],
  },
  {
    id: "bg-2022-12b",
    year: 2022,
    month: 12,
    title: "Ingressou no Ignite 🚀",
    description: "início do programa de especialização em React da @Rocktseat",
    projects: [
      {
        url: "",
        name: "Ignite - Especialização em React",
      },
    ],
  },
  {
    id: "bg-2023-03",
    year: 2023,
    month: 3,
    title: "Primeira produção de conteúdo 🎥",
    description: "gravei uma série de 9h para introdução em frontend",
    projects: [
      {
        url: "",
        name: "Frontend Artesanal",
      },
      {
        url: "",
        name: "Material complementar",
      },
    ],
  },
  {
    id: "bg-2023-06",
    year: 2023,
    month: 6,
    title: "Ingressou no curso.dev 📝",
    description: "estudando full cycle com o Filipe Deschamps",
    projects: [
      {
        url: "",
        name: "Clone tabnews",
      },
    ],
  },
  {
    id: "bg-2024-12",
    year: 2024,
    month: 12,
    title: "Especialista em React e Next.js🏅",
    description: "concluiu a especialização em React e Next.js da @Rocktseat",
    projects: [
      {
        url: "",
        name: "Ignite - Especialização em React",
      },
      {
        url: "",
        name: "Ignite - Certificado",
      },
    ],
  },
  {
    id: "bg-2025-01",
    year: 2025,
    month: 1,
    title: "Iniciou os estudos em Web3 e Open Source 🌐",
    description:
      "comecei a estudar blockchain, DAOs, DApps, Smart Contracts, e abrir meus olhos para o mundo open source.",
  },
];