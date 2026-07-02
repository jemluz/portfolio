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

export type TimelineLocale = "en-US" | "pt-BR" | "es-ES" | "fr-FR";
export type LocalizedText = Record<TimelineLocale, string>;

export type CareerMilestone = {
  id: string;
  year: number;
  title: LocalizedText;
  description: LocalizedText;
  location?: string;
  durationInMonths?: number;
  isCurrent?: boolean;
  month?: number;
  projects?: Project[];
};

type UserBackground = CareerMilestone[];

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
    title: {
      "en-US": "Once upon a time 🚩",
      "pt-BR": "Era uma vez 🚩",
      "es-ES": "Érase una vez 🚩",
      "fr-FR": "Il était une fois 🚩",
    },
    description: {
      "en-US": "Brazilian, from Salvador",
      "pt-BR": "Brasileira, Soteropolitana",
      "es-ES": "Brasileña, de Salvador",
      "fr-FR": "Brésilienne, de Salvador",
    },
    location: "Salvador/BA",
  },
  {
    id: "bg-2013-02",
    year: 2013,
    month: 2,
    title: {
      "en-US": "High school",
      "pt-BR": "Ensino médio",
      "es-ES": "Escuela secundaria",
      "fr-FR": "Lycée",
    },
    description: {
      "en-US": "first contact with programming \n - HTML and CSS",
      "pt-BR": "primeiro contato com programação \n - HTML e CSS",
      "es-ES": "primer contacto con programación \n - HTML y CSS",
      "fr-FR": "premier contact avec la programmation \n - HTML et CSS",
    },
  },
  {
    id: "bg-2016-03",
    year: 2016,
    month: 3,
    title: {
      "en-US": "Joined Federal University of Ceara ✈️",
      "pt-BR": "Ingressou na Universidade Federal do Ceará ✈️",
      "es-ES": "Ingresó a la Universidad Federal de Ceará ✈️",
      "fr-FR": "Entrée à l'Université Fédérale du Ceará ✈️",
    },
    description: {
      "en-US": "Bachelor's in Digital Systems and Media",
      "pt-BR": "Bacharelado em Sistemas e Mídias Digitais",
      "es-ES": "Licenciatura en Sistemas y Medios Digitales",
      "fr-FR": "Licence en Systèmes et Médias Numériques",
    },
    location: "Fortaleza/CE",
  },
  {
    id: "bg-2016-06",
    year: 2016,
    month: 6,
    title: {
      "en-US": "Trainee at CoDi Jr. ❤️💚💙",
      "pt-BR": "Trainee CoDi Jr. ❤️💚💙",
      "es-ES": "Trainee en CoDi Jr. ❤️💚💙",
      "fr-FR": "Stagiaire chez CoDi Jr. ❤️💚💙",
    },
    description: {
      "en-US": "joined the SMD junior company",
      "pt-BR": "entrou na empresa júnior do SMD",
      "es-ES": "ingresó a la empresa júnior de SMD",
      "fr-FR": "a rejoint l'entreprise junior du SMD",
    },
  },
  {
    id: "bg-2018-04",
    year: 2018,
    month: 4,
    title: {
      "en-US": "Joined the board 🥸",
      "pt-BR": "Entrou para a diretoria 🥸",
      "es-ES": "Entró a la dirección 🥸",
      "fr-FR": "A rejoint la direction 🥸",
    },
    description: {
      "en-US": "elected as Project Director at CoDi Jr.",
      "pt-BR": "eleita como Diretora de Projetos da CoDi Jr.",
      "es-ES": "elegida como Directora de Proyectos en CoDi Jr.",
      "fr-FR": "élue Directrice de Projets chez CoDi Jr.",
    },
    durationInMonths: 8,
  },
  {
    id: "bg-2018-08",
    year: 2018,
    month: 8,
    title: {
      "en-US": "Frontend internship - JGV",
      "pt-BR": "Estágio frontend - JGV",
      "es-ES": "Pasantía frontend - JGV",
      "fr-FR": "Stage frontend - JGV",
    },
    description: {
      "en-US": "you never forget your first bug in production ;)",
      "pt-BR": "o primeiro bug em produção a gente nunca esquece ;)",
      "es-ES": "el primer bug en producción nunca se olvida ;)",
      "fr-FR": "on n'oublie jamais son premier bug en production ;)",
    },
    location: "Fortaleza/CE",
    durationInMonths: 12,
  },
  {
    id: "bg-2019-08",
    year: 2019,
    month: 8,
    title: {
      "en-US": "Jr. Developer - JGV 🤓",
      "pt-BR": "Jr. Developer - JGV 🤓",
      "es-ES": "Desarrolladora Jr. - JGV 🤓",
      "fr-FR": "Développeuse Jr. - JGV 🤓",
    },
    description: {
      "en-US":
        "the internship paid off with many results, including a mobile app with +100K downloads!",
      "pt-BR":
        "o estágio rendeu muitos frutos como um app mobile com + 100K downloads!",
      "es-ES":
        "la pasantía dio muchos frutos, como una app móvil con +100K descargas!",
      "fr-FR":
        "le stage a porté ses fruits, dont une app mobile avec +100K téléchargements !",
    },
    location: "Fortaleza/CE",
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
    title: {
      "en-US": "UX Developer - Ootz 🛍️",
      "pt-BR": "UX Developer - Ootz 🛍️",
      "es-ES": "UX Developer - Ootz 🛍️",
      "fr-FR": "UX Developer - Ootz 🛍️",
    },
    description: {
      "en-US": "worked on an e-commerce platform with Next.js",
      "pt-BR": "atuei em um e-commerce com Next.js",
      "es-ES": "trabajé en un e-commerce con Next.js",
      "fr-FR": "j'ai travaillé sur un e-commerce avec Next.js",
    },
    location: "Curitiba/PR",
    durationInMonths: 6,
  },
  {
    id: "bg-2021-04",
    year: 2021,
    month: 4,
    title: {
      "en-US": "Flutter Jr Dev / UI Designer - bHave 📲",
      "pt-BR": "Dev Jr Flutter / Designer UI - bHave 📲",
      "es-ES": "Dev Jr Flutter / Diseñadora UI - bHave 📲",
      "fr-FR": "Dev Jr Flutter / Designer UI - bHave 📲",
    },
    description: {
      "en-US":
        "redesign and implementation in a Flutter therapy app for autism.",
      "pt-BR":
        "redesign e implementação em um app Flutter de terapia para autismo.",
      "es-ES":
        "rediseño e implementación en una app Flutter de terapia para autismo.",
      "fr-FR":
        "refonte et implémentation dans une app Flutter de thérapie pour l'autisme.",
    },
    location: "Recife/PE",
    durationInMonths: 11,
    projects: [
      {
        url: "",
        name: "bHave App",
      },
    ],
  },
  {
    id: "bg-2021-08",
    year: 2021,
    month: 8,
    title: {
      "en-US": "Software Engineer - Levva 💛🖤💛",
      "pt-BR": "Software Engineer - Levva 💛🖤💛",
      "es-ES": "Software Engineer - Levva 💛🖤💛",
      "fr-FR": "Software Engineer - Levva 💛🖤💛",
    },
    description: {
      "en-US":
        "worked with Angular and React on national and international projects for brewery factories and delivery platforms, with millions of active users, for clients like AmbevTech, BEES and Ze Delivery",
      "pt-BR":
        "atuei com angular e react, em projetos nacionais e internacionais, para fábricas de cervejaria, e para deliverys, com milhões de usuários ativos. Em clientes como AmbevTech, BEES e Zé Delivery",
      "es-ES":
        "trabajé con Angular y React en proyectos nacionales e internacionales para fábricas de cervecería y plataformas de delivery, con millones de usuarios activos, para clientes como AmbevTech, BEES y Ze Delivery",
      "fr-FR":
        "j'ai travaillé avec Angular et React sur des projets nationaux et internationaux pour des usines de brasserie et des plateformes de livraison, avec des millions d'utilisateurs actifs, pour des clients comme AmbevTech, BEES et Ze Delivery",
    },
    location: "Campinas/SP",
    isCurrent: true,
  },
  {
    id: "bg-2022-12",
    year: 2022,
    month: 12,
    title: {
      "en-US": "The diploma finally arrived! 🎓",
      "pt-BR": "O diploma veio aí! 🎓",
      "es-ES": "¡Llegó el diploma! 🎓",
      "fr-FR": "Le diplôme est enfin arrivé ! 🎓",
    },
    description: {
      "en-US": "completed the Bachelor's degree in Digital Systems and Media!",
      "pt-BR": "conclusão do bacharelado em Sístemas e Mídias Digitais!",
      "es-ES":
        "finalización de la licenciatura en Sistemas y Medios Digitales!",
      "fr-FR": "fin de la licence en Systèmes et Médias Numériques !",
    },
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
    id: "bg-2023-03",
    year: 2023,
    month: 3,
    title: {
      "en-US": "Content creation 🎥",
      "pt-BR": "Produção de conteúdo 🎥",
      "es-ES": "Producción de contenido 🎥",
      "fr-FR": "Production de contenu 🎥",
    },
    description: {
      "en-US": "recorded a 9-hour series introducing frontend",
      "pt-BR": "gravei uma série de 9h para introdução em frontend",
      "es-ES": "grabé una serie de 9h de introducción a frontend",
      "fr-FR": "j'ai enregistré une série de 9h d'introduction au frontend",
    },
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
    title: {
      "en-US": "Curso.dev 📝",
      "pt-BR": "Curso.dev 📝",
      "es-ES": "Curso.dev 📝",
      "fr-FR": "Curso.dev 📝",
    },
    description: {
      "en-US": "full cycle studies with Filipe Deschamps",
      "pt-BR": "estudos de full cycle com o Filipe Deschamps",
      "es-ES": "estudios full cycle con Filipe Deschamps",
      "fr-FR": "études full cycle avec Filipe Deschamps",
    },
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
    title: {
      "en-US": "Specialization in React and Next.js 🏅",
      "pt-BR": "Especialização em React e Next.js🏅",
      "es-ES": "Especialización en React y Next.js 🏅",
      "fr-FR": "Spécialisation en React et Next.js 🏅",
    },
    description: {
      "en-US": "completed the React and Next.js specialization at @Rocktseat",
      "pt-BR": "concluiu a especialização em React e Next.js da @Rocktseat",
      "es-ES": "completó la especialización en React y Next.js de @Rocktseat",
      "fr-FR": "a conclu la spécialisation React et Next.js de @Rocktseat",
    },
    projects: [
      {
        url: "",
        name: "Ignite - Especialização em React",
      },
    ],
  },
  {
    id: "bg-2025-01",
    year: 2025,
    month: 1,
    title: {
      "en-US": "Studies in Web3 and Open Source 🌐",
      "pt-BR": "Estudos em Web3 e Open Source 🌐",
      "es-ES": "Estudios en Web3 y Open Source 🌐",
      "fr-FR": "Études en Web3 et Open Source 🌐",
    },
    description: {
      "en-US":
        "started studying blockchain, DAOs, DApps and smart contracts, and opening my eyes to the open source world.",
      "pt-BR":
        "comecei a estudar blockchain, DAOs, DApps, Smart Contracts, e abrir meus olhos para o mundo open source.",
      "es-ES":
        "empecé a estudiar blockchain, DAOs, DApps y smart contracts, y a abrir los ojos al mundo open source.",
      "fr-FR":
        "j'ai commencé à étudier la blockchain, les DAO, les DApps et les smart contracts, et à m'ouvrir au monde open source.",
    },
  },
];
