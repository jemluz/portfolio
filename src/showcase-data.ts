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
  description: string;
  images: ImageInfo[];
  links: LinkInfo[];
  techStack?: string[];
  languageStack?: TagKey[];
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: "aurora",
    year: 2017,
    month: 1,
    title: "Aurora",
    category: "app + web",
    description:
      "Esse foi o projeto que me ensinou a pensar como uma programadora.\n\nUma aplicação mobile, feita em uma linguagem que foi projetada para desenhos...",
    languageStack: ["pde", "html", "css"],
    images: [{ src: "aurora/poo-code-infograph.png", isTransparent: false }],
    links: [],
  },
  {
    id: 2,
    slug: "monique",
    year: 2017,
    month: 12,
    title: "Monique Luz",
    category: "brand",
    description:
      "Design de manual de marca para Monique Luz (professora particular)",
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
    description:
      "Redesign de um aplicativo android, em um conceito alternativo às guidelines mobile.",
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
    description:
      "Design UI/UX de um app para streaming de música, com foco em playlists colaborativas.",
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
    description: "Design UI/UX de um app para produtividade pessoal.",
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
    description:
      "Design de minha marca pessoal, feita para ser atemporal e versátil.",
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
    description: "Design UI/UX de uma rede social.",
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
    description: "Design UI/UX de um app para troca de livros.",
    languageStack: ["vue"],
    images: [{ src: "", isTransparent: false }],
    links: [],
  },
  {
    id: 9,
    slug: "dashboard",
    year: 2020,
    month: 7,
    title: "Dashboard",
    category: "UI/UX + web",
    description: "Redesign UI/UX do dashboard FixPay.",
    languageStack: ["vue"],
    images: [{ src: "dashboard/web-vue-dashboard.png", isTransparent: true }],
    links: [],
  },
  {
    id: 10,
    slug: "letrun",
    year: 2020,
    month: 10,
    title: "Letrun",
    category: "UI/UX + web",
    description: "Redesign UI/UX do dashboard FixPay.",
    languageStack: ["vue"],
    images: [{ src: "letrun/web-vue-ecommerce.png", isTransparent: true }],
    links: [],
  },
  {
    id: 11,
    slug: "diplomata",
    year: 2022,
    month: 1,
    title: "Diplomata",
    category: "UI/UX + web",
    description:
      "Trabalho de conclusão de curso, feito em Vue.js. Um sistema full stack para distribuição de artigos científicos em linguagem acessível.",
    languageStack: ["vue"],
    images: [{ src: "", isTransparent: false }],
    links: [],
  },
  {
    id: 12,
    slug: "ignite-todo-list",
    year: 2023,
    month: 1,
    title: "Ignite Todo List",
    category: "web + curso",
    description: "",
    languageStack: ["ts"],
    images: [{ src: "", isTransparent: false }],
    links: [],
  },
  {
    id: 13,
    slug: "ignite-timer",
    year: 2023,
    month: 2,
    title: "Ignite Timer",
    category: "web",
    description: "",
    languageStack: ["ts"],
    images: [{ src: "", isTransparent: false }],
    links: [],
  },
  {
    id: 14,
    slug: "ignite-dt-money",
    year: 2023,
    month: 10,
    title: "Ignite DT Money",
    category: "web",
    description: "",
    languageStack: ["ts"],
    images: [{ src: "", isTransparent: false }],
    links: [],
  },
  {
    id: 15,
    slug: "ignite-shop",
    year: 2024,
    month: 2,
    title: "Ignite Shop",
    category: "web",
    description: "",
    languageStack: ["ts"],
    images: [{ src: "", isTransparent: false }],
    links: [],
  },
  {
    id: 16,
    slug: "ignite-pizza-shop",
    year: 2024,
    month: 11,
    title: "Ignite Pizza Shop",
    category: "web",
    description: "",
    languageStack: ["ts"],
    images: [{ src: "", isTransparent: false }],
    links: [],
  },
  {
    id: 17,
    slug: "ignite-call-ds",
    year: 2024,
    month: 12,
    title: "Ignite Call",
    category: "design system + web",
    description: "",
    languageStack: ["ts"],
    images: [{ src: "", isTransparent: false }],
    links: [],
  },
  {
    id: 18,
    slug: "jeu-bazar",
    year: 2026,
    month: 3,
    title: "Jeu Bazar",
    category: "web",
    description: "aaa",
    languageStack: ["ts"],
    images: [{ src: "", isTransparent: false }],
    links: [],
  },
  {
    id: 19,
    slug: "portfolio",
    year: 2026,
    month: 6,
    title: "Portfolio",
    category: "web",
    description: "aaa",
    languageStack: ["ts"],
    images: [{ src: "", isTransparent: false }],
    links: [],
  },
  {
    id: 20,
    slug: "evast",
    year: 2026,
    month: 12,
    title: "EVA Station",
    category: "web",
    description: "Web3",
    languageStack: ["ts"],
    images: [{ src: "", isTransparent: false }],
    links: [],
  },
];
