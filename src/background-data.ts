export const resumePdfPTUrl = "docs/resume-jun-2026-pt.pdf";
export const resumePdfENUrl = "docs/resume-jun-2026-en.pdf";

export const summary =
  "Frontend Engineer with 7 years of experience, entirely on B2B field, building scalable web and mobile applications (web mainly). Proficient in Typescript, specialized in React and Next.js, with a strong foundation in UI/UX. Also have worked with Angular and Vue, and Flutter.";

export const EXPERIENCES = [
  {
    company: "Levva",
    companyLogo: "companies/levva-logo.jpeg",
    location: "Campinas, São Paulo, Brasil",
    startDate: "2021-08",
    endDate: null,
    roles: [
      {
        startDate: "2024-05",
        endDate: null,
        title: "Senior Software Engineer",
        description: [
          "Created a central documentation frontend hub based on AI generated Mermaid diagrams (domains, state management, and routing, squads projects and scopes) for accelerate squad onboarding. Providing a 'living' technical reference. AI-assisted prototype and build in 2 weeks, reducing ramp-up time for new team members.",
          "Clean codebase TypeScript errors from 600 to zero.",
          "Delivered frontend features for different seller's delivery admin and marketplace web apps, using React, Apollo Client and GraphQL, React Hookform, MSW, i18n and Storybook tools.",
          "Developed tests for each new feature, using Testing Library and Jest tools.",
          "Used feature flags for gradual rollouts with Split.",
        ],
      },
      {
        startDate: "2021-08",
        endDate: "2024-04",
        title: "Software Engineer",
        description: [
          "Delivered frontend features for company's beverage factories web applications using Angular.",
          "Created a dynamic Gant chart entirely with CSS grid to replace an old chart library and allow dev team to had more freedom for customize and build new product features with this new one.",
          "Created a 9h course on youtube to teach company's trainees the frontend fundamentals.",
          "Increased code coverage from ~20% to over 80% and fixed a few hundred code issues using Sonarqube, moving the codebase quality from a D (critical) score to an A score.",
        ],
      },
    ],
  },
  {
    company: "bHave",
    companyLogo: "companies/bhave-logo.jpeg",
    location: "Recife, Pernambuco, Brasil",
    startDate: "2021-04",
    endDate: "2022-02",
    roles: [
      {
        startDate: "2021-10",
        endDate: "2022-02",
        title: "UI/UX Designer",
        description: [
          "Redesigned an entire user interface and experience (UI/UX) for therapy mobile app v2 using Figma, including navigation flows and user stories creation.",
        ],
      },
      {
        startDate: "2021-04",
        endDate: "2021-09",
        title: "Software Engineer",
        description: [
          "Delivered new features for therapy mobile app using Flutter.",
        ],
      },
    ],
  },
  {
    company: "Ootz",
    companyLogo: "companies/ootz-logo.png",
    location: "Curitiba, Paraná, Brasil",
    startDate: "2020-11",
    endDate: "2021-03",
    roles: [
      {
        startDate: "2020-11",
        endDate: "2021-03",
        title: "Software Engineer",
        description: [
          "Developed new features for an e-commerce using Next.js.",
          "Designed screens from scratch for e-commerce web app using Figma.",
        ],
      },
    ],
  },
  {
    company: "JGV - Meios de Pagamentos Eletrônicos",
    companyLogo: null,
    location: "Fortaleza, Ceará, Brasil",
    startDate: "2018-08",
    endDate: "2020-10",
    roles: [
      {
        startDate: "2019-09",
        endDate: "2020-10",
        title: "Software Engineer Jr",
        description: [
          "Designed the entire user interface (UI) for payment web app.",
          "Developed from scratch the company's payment web app using Vue.",
        ],
      },
      {
        startDate: "2018-08",
        endDate: "2019-08",
        title: "Trainee",
        description: [
          "Designed the entire user interface and experience (UI/UX) for the mobile app, developed and maintained using Angular + Ionic, with over 100k downloads.",
          "Integrated frontend applications with APIs.",
        ],
      },
    ],
  },
];

export const EDUCATION = [
  {
    year: "2016 - 2022",
    degree: "Bacharelado em Sistemas e Mídias Digitais",
    institution: "Universidade de Federal do Ceará",
    certificateUrl:
      "https://drive.google.com/file/d/1Xo9n8sQh0a2l3jvKZt7e5X9z8Y6w/view?usp=sharing",
    institutionUrl: "https://www.ufc.br/",
  },
];

export const SKILLS = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Storybook",
  "GraphQL",
  "Playwright",
  "Vite",
  "Shadcn UI",
  "Sonarqube",
  "I18n",
];

export const CERTIFICATIONS = [
  {
    name: "React & Next Specialization",
    issuer: "Rocketseat",
    year: "2023 - 2024",
    certificateUrl:
      "https://www.rocketseat.com.br/certificates/63e9b1c8-9c7a-4c3d-8f0c-2a1e5b8d6f4e",
    institutionUrl: "https://www.rocketseat.com.br/",
  },
];

export const LANGUAGES = [
  {
    name: "Portuguese",
    level: "C2" as const,
  },
  {
    name: "English",
    level: "B2" as const,
  },
];

export const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

export const CEFR_LABEL_BY_LEVEL = {
  A1: "Beginner",
  A2: "Elementary",
  B1: "Intermediate",
  B2: "Upper intermediate",
  C1: "Advanced",
  C2: "Native or Proficient",
} as const;
