import { ProjectTypeEnum } from "@/types/showcase.types";

export const FILES_LIST: Record<string, FileTag> = {
  pde: {
    style: "bg-pink-50 text-pink-700 hover:border-pink-300",
    link: "https://processing.org/reference",
    label: "PDE",
  },
  html: {
    style: "bg-orange-50 text-orange-500 hover:border-orange-300",
    link: "https://developer.mozilla.org/docs/Web/HTML",
    label: "HTML",
  },
  css: {
    style: "bg-green-50 text-green-600 hover:border-green-300",
    link: "https://developer.mozilla.org/docs/Web/CSS",
    label: "CSS",
  },
  js: {
    style: "bg-yellow-50 text-yellow-600 hover:border-yellow-300",
    link: "https://developer.mozilla.org/docs/Web/JavaScript",
    label: "JS",
  },
  ts: {
    style: "bg-blue-50 text-blue-800 hover:border-blue-300",
    link: "https://www.typescriptlang.org/docs",
    label: "TS",
  },
  ai: {
    style: "bg-red-50 text-red-700 hover:border-red-300",
    link: "https://platform.openai.com/docs",
    label: "AI",
  },
  ps: {
    style: "bg-cyan-50 text-cyan-700 hover:border-cyan-400",
    link: "https://helpx.adobe.com/photoshop/user-guide.html",
    label: "PS",
  },
  xd: {
    style: "bg-purple-50 text-purple-700 hover:border-purple-400",
    link: "https://helpx.adobe.com/xd/user-guide.html",
    label: "XD",
  },
  fig: {
    style: "bg-pink-50 text-pink-700 hover:border-pink-400",
    link: "https://www.figma.com/resources/learn-design/",
    label: "FIG",
  },
  vue: {
    style: "bg-green-50 text-green-700 hover:border-green-400",
    link: "https://vuejs.org/guide/introduction.html",
    label: "VUE",
  },
} as const;

export const TOOLS_LIST: Record<string, ToolTag> = {
  react: {
    style: "bg-teal-100 text-teal-700 hover:border-teal-700",
    link: "https://react.dev",
    label: "React",
  },
  tw: {
    style: "bg-sky-100 text-sky-700 hover:border-sky-700",
    link: "https://tailwindcss.com/docs",
    label: "Tailwind CSS",
  },
} as const;

export type TagKey = keyof typeof FILES_LIST;

export type FileTag = {
  style: string;
  link: string;
  label: string;
};

export type ToolTag = {
  style: string;
  link: string;
  label: string;
  icon?: string;
};

export type ImageInfo = {
  src: string;
  isTransparent: boolean;
};

type LinkInfo = {
  type: string;
  url: string;
};

export interface Project {
  id: number;
  slug: string;
  year: number;
  month: number;
  title: string;
  category: string;
  description: Record<string, string>;
  images: ImageInfo[];
  links: LinkInfo[];
  projectTypeTags: ProjectTypeEnum[];
  techStack?: string[];
  languageStack?: TagKey[];
  accentColor?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: "aurora",
    year: 2017,
    month: 1,
    title: "Aurora",
    category: "app + web2",
    projectTypeTags: [ProjectTypeEnum.MOBILE, ProjectTypeEnum.WEB2],
    description: {
      "en-US":
        "An impossible college project made in Processing, simulating a mobile app for a mental health NGO.",
      "pt-BR":
        "Um projeto impossível da época da faculdade, feito em Processing, que simula um app mobile para uma ong de saúde mental.",
      "es-ES":
        "Un proyecto imposible de la época universitaria, hecho en Processing, que simula una app móvil para una ONG de salud mental.",
      "fr-FR":
        "Un projet impossible de l'époque universitaire, réalisé en Processing, simulant une application mobile pour une ONG de santé mentale.",
    },
    languageStack: ["pde", "html", "css"],
    images: [{ src: "aurora/poo-code-infograph.png", isTransparent: false }],
    links: [
      {
        type: "github",
        url: "https://github.com/anotherjemluz/Aurora-Prototipo-1",
      },
    ],
  },
  {
    id: 2,
    slug: "monique",
    year: 2017,
    month: 12,
    title: "Monique Luz",
    category: "brand",
    projectTypeTags: [ProjectTypeEnum.DESIGN],
    description: {
      "en-US": "Brand manual design for Monique Luz (private tutor).",
      "pt-BR":
        "Design de manual de marca para Monique Luz (professora particular).",
      "es-ES":
        "Diseño del manual de marca para Monique Luz (profesora particular).",
      "fr-FR":
        "Conception du manuel de marque pour Monique Luz (professeure particulière).",
    },
    languageStack: ["ai", "ps"],
    images: [{ src: "design/brand-moni.png", isTransparent: false }],
    links: [],
  },
  {
    id: 3,
    slug: "exchange",
    year: 2018,
    month: 3,
    title: "Exchange",
    category: "UI/UX",
    projectTypeTags: [ProjectTypeEnum.DESIGN, ProjectTypeEnum.MOBILE],
    description: {
      "en-US":
        "Android app redesign with an alternative concept to the mobile guidelines of the time.",
      "pt-BR":
        "Redesign de um aplicativo android, em um conceito alternativo às guidelines mobile da época.",
      "es-ES":
        "Rediseño de una app Android con un concepto alternativo a las guías móviles de la época.",
      "fr-FR":
        "Refonte d'une application Android avec un concept alternatif aux directives mobiles de l'époque.",
    },
    languageStack: ["xd"],
    images: [{ src: "design/app-exchange.png", isTransparent: false }],
    links: [],
  },
  {
    id: 4,
    slug: "bubbox",
    year: 2018,
    month: 4,
    title: "Bubbox",
    category: "UI/UX + app",
    projectTypeTags: [ProjectTypeEnum.DESIGN, ProjectTypeEnum.MOBILE],
    description: {
      "en-US":
        "UI/UX design of a music streaming app focused on collaborative playlists.",
      "pt-BR":
        "Design UI/UX de um app para streaming de música, com foco em playlists colaborativas.",
      "es-ES":
        "Diseño UI/UX de una app de streaming de música, con enfoque en playlists colaborativas.",
      "fr-FR":
        "Conception UI/UX d'une application de streaming musical axée sur les playlists collaboratives.",
    },
    languageStack: ["js", "html", "css"],
    images: [{ src: "bubbox/react-native-app-2.png", isTransparent: true }],
    links: [],
  },
  {
    id: 5,
    slug: "better-measure",
    year: 2018,
    month: 8,
    title: "You Better Measure",
    category: "UI/UX",
    projectTypeTags: [ProjectTypeEnum.DESIGN, ProjectTypeEnum.MOBILE],
    description: {
      "en-US": "UI/UX design of a personal productivity app.",
      "pt-BR": "Design UI/UX de um app para produtividade pessoal.",
      "es-ES": "Diseño UI/UX de una app de productividad personal.",
      "fr-FR":
        "Conception UI/UX d'une application de productivité personnelle.",
    },
    languageStack: ["fig"],
    images: [{ src: "design/app-productivity-2.png", isTransparent: true }],
    links: [],
  },
  {
    id: 6,
    slug: "je",
    year: 2018,
    month: 12,
    title: "Je",
    category: "brand",
    projectTypeTags: [ProjectTypeEnum.DESIGN],
    description: {
      "en-US": "My personal brand design, made to be timeless and versatile.",
      "pt-BR":
        "Design de minha marca pessoal, feita para ser atemporal e versátil.",
      "es-ES":
        "Diseño de mi marca personal, hecha para ser atemporal y versátil.",
      "fr-FR":
        "Conception de ma marque personnelle, conçue pour être intemporelle et polyvalente.",
    },
    languageStack: ["fig"],
    images: [{ src: "design/brand-je.png", isTransparent: true }],
    links: [],
  },
  {
    id: 7,
    slug: "green-text",
    year: 2020,
    month: 2,
    title: "Green Text",
    category: "UI/UX",
    projectTypeTags: [ProjectTypeEnum.DESIGN, ProjectTypeEnum.WEB2],
    description: {
      "en-US": "UI/UX design of a social network.",
      "pt-BR": "Design UI/UX de uma rede social.",
      "es-ES": "Diseño UI/UX de una red social.",
      "fr-FR": "Conception UI/UX d'un réseau social.",
    },
    languageStack: ["fig"],
    images: [{ src: "design/web-green-text.png", isTransparent: true }],
    links: [],
  },
  {
    id: 8,
    slug: "vinler",
    year: 2020,
    month: 5,
    title: "Vinler",
    category: "UI/UX",
    projectTypeTags: [ProjectTypeEnum.DESIGN, ProjectTypeEnum.MOBILE],
    description: {
      "en-US": "UI/UX design of a book exchange app.",
      "pt-BR": "Design UI/UX de um app para troca de livros.",
      "es-ES": "Diseño UI/UX de una app para intercambio de libros.",
      "fr-FR": "Conception UI/UX d'une application d'échange de livres.",
    },
    languageStack: ["vue"],
    images: [{ src: "design/app-vinler.png", isTransparent: true }],
    links: [{ type: "github", url: "https://github.com/anotherjemluz/vinler" }],
  },
  {
    id: 9,
    slug: "dashboard",
    year: 2020,
    month: 7,
    title: "Dashboard",
    category: "UI/UX + web2",
    projectTypeTags: [ProjectTypeEnum.DESIGN, ProjectTypeEnum.WEB2],
    description: {
      "en-US": "UI/UX redesign of the FixPay dashboard.",
      "pt-BR": "Redesign UI/UX do dashboard FixPay.",
      "es-ES": "Rediseño UI/UX del dashboard de FixPay.",
      "fr-FR": "Refonte UI/UX du tableau de bord FixPay.",
    },
    languageStack: ["vue"],
    images: [{ src: "dashboard/web-vue-dashboard.png", isTransparent: true }],
    links: [
      { type: "web", url: "https://clone-fxp.vercel.app/" },
      { type: "github", url: "https://github.com/anotherjemluz/clone-fxp" },
    ],
  },
  {
    id: 10,
    slug: "letrun",
    year: 2020,
    month: 10,
    title: "Letrun",
    category: "UI/UX + web2",
    projectTypeTags: [ProjectTypeEnum.DESIGN, ProjectTypeEnum.WEB2],
    description: {
      "en-US": "UI/UX redesign of the FixPay dashboard.",
      "pt-BR": "Redesign UI/UX do dashboard FixPay.",
      "es-ES": "Rediseño UI/UX del dashboard de FixPay.",
      "fr-FR": "Refonte UI/UX du tableau de bord FixPay.",
    },
    languageStack: ["vue"],
    images: [{ src: "letrun/web-vue-ecommerce.png", isTransparent: true }],
    links: [
      { type: "web", url: "https://letrun-jemluz.vercel.app/" },
      { type: "github", url: "https://github.com/anotherjemluz/letrun" },
    ],
  },
  {
    id: 11,
    slug: "meindexe-v1",
    year: 2021,
    month: 3,
    title: "Meindexe",
    category: "UI/UX + web2",
    projectTypeTags: [ProjectTypeEnum.DESIGN, ProjectTypeEnum.WEB2],
    description: {
      "en-US": "My portfolio in Vue.js, focused on web and Flutter projects.",
      "pt-BR": "Meu portfólio em Vue.js, focado em projetos web e Flutter.",
      "es-ES": "Mi portafolio en Vue.js, enfocado en proyectos web y Flutter.",
      "fr-FR": "Mon portfolio en Vue.js, axé sur les projets web et Flutter.",
    },
    languageStack: ["vue"],
    images: [{ src: "meindexe/meindexe-showcase.png", isTransparent: true }],
    links: [
      { type: "github", url: "https://github.com/anotherjemluz/meindexe" },
      { type: "web", url: "https://meindexe-jemluz.vercel.app/" },
    ],
  },
  {
    id: 12,
    slug: "diplomata",
    year: 2022,
    month: 12,
    title: "Diplomata",
    category: "UI/UX + web2",
    projectTypeTags: [
      ProjectTypeEnum.DESIGN,
      ProjectTypeEnum.WEB2,
      ProjectTypeEnum.FULL_STACK,
    ],
    description: {
      "en-US":
        "Final graduation project built with Vue.js + Node.js. A system for distributing scientific articles in accessible language.",
      "pt-BR":
        "Trabalho de conclusão de curso da graduação, feito em Vue.js + Node.js. Um sistema para distribuição de artigos científicos em linguagem acessível.",
      "es-ES":
        "Trabajo de fin de grado desarrollado con Vue.js + Node.js. Un sistema para distribuir artículos científicos en lenguaje accesible.",
      "fr-FR":
        "Projet de fin de diplôme réalisé avec Vue.js + Node.js. Un système de diffusion d'articles scientifiques en langage accessible.",
    },
    languageStack: ["vue"],
    images: [{ src: "diplomata/web-desktop-mobile.png", isTransparent: true }],
    links: [
      { type: "github", url: "https://github.com/anotherjemluz/diplomata" },
      { type: "web", url: "https://diplomata.vercel.app/" },
    ],
  },
  {
    id: 13,
    slug: "ignite-specialization",
    year: 2023,
    month: 1,
    title: "Ignite Specialization",
    category: "web2 + course",
    projectTypeTags: [ProjectTypeEnum.WEB2, ProjectTypeEnum.FULL_STACK],
    description: {
      "en-US":
        "50h across 7 practical projects covering State, Hooks, API integration, SSR, SSG, Design Systems and Full Stack with Next.js.",
      "pt-BR":
        "50h em 7 projetos práticos abordando State, Hooks, integração com API, SSR, SSG, Design Systems e Full Stack com Next.js.",
      "es-ES":
        "50h en 7 proyectos prácticos cubriendo State, Hooks, integración con API, SSR, SSG, Design Systems y Full Stack con Next.js.",
      "fr-FR":
        "50h sur 7 projets pratiques couvrant State, Hooks, intégration d'API, SSR, SSG, Design Systems et Full Stack avec Next.js.",
    },
    languageStack: ["ts"],
    images: [{ src: "specialization/ignite-call.png", isTransparent: true }],
    links: [
      { type: "github", url: "https://github.com/jemluz/react-specialization" },
    ],
  },
  {
    id: 14,
    slug: "jeu-bazar",
    year: 2026,
    month: 3,
    title: "Jeu Bazar",
    category: "web",
    projectTypeTags: [ProjectTypeEnum.WEB2, ProjectTypeEnum.AI],
    description: {
      "en-US": "A quick project exploring AI in development for a bazaar.",
      "pt-BR":
        "Um projeto super rápido explorando AI no desenvolvimento para um bazar.",
      "es-ES":
        "Un proyecto rápido explorando IA en el desarrollo para un bazar.",
      "fr-FR":
        "Un projet rapide explorant l'IA dans le développement pour un bazar.",
    },
    languageStack: ["ts"],
    images: [{ src: "jeu-bazar/vitrine-showcase.png", isTransparent: true }],
    links: [
      { type: "github", url: "https://github.com/anotherjemluz/jeu-bazar" },
      { type: "web", url: "https://jeubazar.vercel.app/vitrine" },
    ],
  },
  {
    id: 15,
    slug: "portfolio",
    year: 2026,
    month: 6,
    title: "Portfolio",
    category: "web2",
    projectTypeTags: [ProjectTypeEnum.WEB2, ProjectTypeEnum.AI],
    description: {
      "en-US":
        "My personal portfolio, built with modern technologies and exploring AI.",
      "pt-BR":
        "Meu portfólio pessoal, desenvolvido com tecnologias modernas e explorando AI.",
      "es-ES":
        "Mi portafolio personal, desarrollado con tecnologías modernas y explorando IA.",
      "fr-FR":
        "Mon portfolio personnel, développé avec des technologies modernes et explorant l'IA.",
    },
    languageStack: ["ts"],
    images: [{ src: "portfolio/web-showcase.png", isTransparent: true }],
    links: [
      { type: "github", url: "https://github.com/jemluz/portfolio" },
      { type: "web", url: "https://jemluz.vercel.app/timeline" },
    ],
  },
  {
    id: 16,
    slug: "eva-station",
    year: 2026,
    month: 12,
    title: "EVA Station",
    category: "web3",
    projectTypeTags: [
      ProjectTypeEnum.WEB3,
      ProjectTypeEnum.WEB2,
      ProjectTypeEnum.FULL_STACK,
      ProjectTypeEnum.AI,
    ],
    description: {
      "en-US":
        "Between web3 and web2, a quick panel for holders to check EVA token (evervalue coin) prices before buying or selling.",
      "pt-BR":
        "Entre web3 e web2, um painel rápido para holders acompanharem o preço do token EVA (evervalue coin) antes de comprar ou vender.",
      "es-ES":
        "Entre web3 y web2, un panel rápido para que los holders consulten los precios del token EVA (evervalue coin) antes de comprar o vender.",
      "fr-FR":
        "Entre web3 et web2, un tableau de bord rapide pour que les holders consultent les prix du token EVA (evervalue coin) avant d'acheter ou de vendre.",
    },
    languageStack: ["ts"],
    images: [{ src: "web3/evastation.png", isTransparent: false }],
    links: [
      { type: "github", url: "https://github.com/jemluz/evervalue-station" },
      { type: "web", url: "https://evastation.vercel.app/" },
    ],
    accentColor: "orange-400",
  },
];
