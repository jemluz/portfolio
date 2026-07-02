export const resumePdfPTUrl = "docs/resume-jun-2026-pt.pdf";
export const resumePdfENUrl = "docs/resume-jun-2026-en.pdf";

export const SUMMARY: Record<string, Record<string, string>> = {
  BackgroundPage: {
    "en-US":
      "Frontend Engineer with 7 years of experience, entirely in the B2B sector, building scalable web and mobile applications (primarily web). Proficient in TypeScript, specialized in React and Next.js, with a strong foundation in UI/UX. Also experienced with Angular, Vue, and Flutter.",
    "pt-BR":
      "Frontend Engineer com 7 anos de experiência, focada no setor B2B, desenvolvendo aplicações web e mobile escaláveis (com ênfase em web). Especialista em TypeScript, React e Next.js, com sólida base em UI/UX. Também com experiência em Angular, Vue e Flutter.",
    "es-ES":
      "Frontend Engineer con 7 años de experiencia, enfocada íntegramente en el sector B2B, desarrollando aplicaciones web y móviles escalables (principalmente web). Experta en TypeScript, especializada en React y Next.js, con una sólida base en UI/UX. También con experiencia en Angular, Vue y Flutter.",
    "fr-FR":
      "Frontend Engineer avec 7 ans d'expérience, entièrement dans le secteur B2B, concevant des applications web et mobiles évolutives (principalement web). Experte en TypeScript, spécialisée en React et Next.js, avec de solides bases en UI/UX. Également expérimentée en Angular, Vue et Flutter.",
  },
};

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
        description: {
          "en-US": [
            "Created a central documentation frontend hub based on AI generated Mermaid diagrams (domains, state management, and routing, squads projects and scopes) for accelerate squad onboarding. Providing a 'living' technical reference. AI-assisted prototype and build in 2 weeks, reducing ramp-up time for new team members.",
            "Clean codebase TypeScript errors from 600 to zero.",
            "Delivered frontend features for different seller's delivery admin and marketplace web apps, using React, Apollo Client and GraphQL, React Hookform, MSW, i18n and Storybook tools.",
            "Developed tests for each new feature, using Testing Library and Jest tools.",
            "Used feature flags for gradual rollouts with Split.",
          ],
          "pt-BR": [
            "Criação de um hub central de documentação frontend utilizando diagramas Mermaid (domínios, gerenciamento de estado, roteamento e escopos de squads) para o onboarding do time. Reduzindo o tempo de tração de novos membros. Prototipação e desenvolvimento com AI em 2 semanas.",
            "Limpeza na codebase de 600 TypeScript errors para 0.",
            "Desenvolvimento de funcionalidades para sistemas web de gestão para distribuidores, e marketplace para distribuidores, usando React, Apollo Client and GraphQL, React Hookform, MSW, i18n e Storybook.",
            "Desenvolvimento de testes para cada nova feature, usando Testing Library, Vitest e Jest.",
            "Uso de feature flags para lançamentos (rollouts) graduais de funcionalidades para a base de usuários com Split.",
          ],
          "es-ES": [
            "Creación de un hub central de documentación frontend utilizando diagramas Mermaid (dominios, gestión de estado, enrutamiento y alcances de squads) para la incorporación del equipo. Reducción del tiempo de incorporación de nuevos miembros. Prototipado y desarrollo con IA en 2 semanas.",
            "Limpieza en la codebase de 600 errores de TypeScript a 0.",
            "Desarrollo de funcionalidades para sistemas web de gestión para distribuidores y marketplace para distribuidores, utilizando React, Apollo Client y GraphQL, React Hookform, MSW, i18n y Storybook.",
            "Desarrollo de pruebas para cada nueva funcionalidad, utilizando Testing Library, Vitest y Jest.",
            "Uso de feature flags para lanzamientos (rollouts) graduales de funcionalidades para la base de usuarios con Split.",
          ],
          "fr-FR": [
            "Création d'un hub central de documentation frontend utilisant des diagrammes Mermaid (domaines, gestion d'état, routage et portées des squads) pour l'intégration de l'équipe. Réduction du temps d'intégration des nouveaux membres. Prototypage et développement avec IA en 2 semaines.",
            "Nettoyage dans la codebase de 600 erreurs TypeScript à 0.",
            "Développement de fonctionnalités pour des systèmes web de gestion pour les distributeurs et un marketplace pour les distributeurs, utilisant React, Apollo Client et GraphQL, React Hookform, MSW, i18n et Storybook.",
            "Développement de tests pour chaque nouvelle fonctionnalité, utilisant Testing Library, Vitest et Jest.",
            "Utilisation de feature flags pour des déploiements (rollouts) graduels de fonctionnalités pour la base d'utilisateurs avec Split.",
          ],
        },
      },
      {
        startDate: "2021-08",
        endDate: "2024-04",
        title: "Software Engineer",
        description: {
          "en-US": [
            "Delivered frontend features for company's beverage factories web applications using Angular.",
            "Created a dynamic Gant chart entirely with CSS grid to replace an old chart library and allow dev team to had more freedom for customize and build new product features with this new one.",
            "Created a 9h course on youtube to teach company's trainees the frontend fundamentals.",
            "Increased code coverage from ~20% to over 80% and fixed a few hundred code issues using Sonarqube, moving the codebase quality from a D (critical) score to an A score.",
          ],
          "pt-BR": [
            "Desenvolvimento de funcionalidades para sistemas web para fábricas de bebidas usando Angular.",
            "Criação de um gráfico de Gantt completo e dinâmico com CSS grid para substituir uma biblioteca e permitir o time ter mais liberdade para personalizar e criar novas features no sistema web.",
            "Elevação do índice de qualidade do código no SonarQube de nota D para nota A, aumentando a cobertura de testes de 20% para mais de 80% e eliminando algumas centenas de code smells.",
            "Criação de um curso online de 9h no youtube para ensinar os Trainees da empresa fundamentos do frontend.",
          ],
          "es-ES": [
            "Desarrollo de funcionalidades para sistemas web para fábricas de bebidas utilizando Angular.",
            "Creación de un gráfico de Gantt completo y dinámico con CSS grid para reemplazar una biblioteca y permitir al equipo tener más libertad para personalizar y crear nuevas funcionalidades en el sistema web.",
            "Aumento del índice de calidad del código en SonarQube de nota D a nota A, aumentando la cobertura de pruebas del 20% a más del 80% y eliminando algunas cientos de code smells.",
            "Creación de un curso online de 9h en youtube para enseñar a los Trainees de la empresa fundamentos del frontend.",
          ],
          "fr-FR": [
            "Développement de fonctionnalités pour des systèmes web pour des usines de boissons utilisant Angular.",
            "Création d'un graphique de Gantt complet et dynamique avec CSS grid pour remplacer une bibliothèque et permettre à l'équipe d'avoir plus de liberté pour personnaliser et créer de nouvelles fonctionnalités dans le système web.",
            "Augmentation de l'indice de qualité du code dans SonarQube de note D à note A, augmentant la couverture des tests de 20% à plus de 80% et éliminant quelques centaines de code smells.",
            "Création d'un cours en ligne de 9h sur youtube pour enseigner aux Trainees de l'entreprise les fondamentaux du frontend.",
          ],
        },
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
        description: {
          "en-US": [
            "Redesigned an entire user interface and experience (UI/UX) for therapy mobile app v2 using Figma, including navigation flows and user stories creation.",
          ],
          "pt-BR": [
            "Redesign completo da interface e experiência do usuário (UI/UX) para a nova versão de um app mobile de terapia, utilizando Figma para criação de fluxos e user stories.",
            "",
          ],
          "es-ES": [
            "Rediseño completo de la interfaz y experiencia del usuario (UI/UX) para la nueva versión de una aplicación móvil de terapia, utilizando Figma para la creación de flujos y user stories.",
          ],
          "fr-FR": [
            "Refonte complète de l'interface et de l'expérience utilisateur (UI/UX) pour la nouvelle version d'une application mobile de thérapie, utilisant Figma pour la création de flux et d'histoires utilisateur.",
          ],
        },
      },
      {
        startDate: "2021-04",
        endDate: "2021-09",
        title: "Software Engineer",
        description: {
          "en-US": [
            "Delivered new features for therapy mobile app using Flutter.",
          ],
          "pt-BR": [
            "Desenvolvimento e manutenção de funcionalidades para app mobile de saúde e terapia utilizando Flutter.",
          ],
          "es-ES": [
            "Desarrollo y mantenimiento de funcionalidades para una aplicación móvil de salud y terapia utilizando Flutter.",
          ],
          "fr-FR": [
            "Développement et maintenance de fonctionnalités pour une application mobile de santé et de thérapie utilisant Flutter.",
          ],
        },
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
        description: {
          "en-US": [
            "Developed new features for an e-commerce using Next.js.",
            "Designed screens from scratch for e-commerce web app using Figma.",
          ],
          "pt-BR": [
            "Desenvolvimento de funcionalidades para plataforma de e-commerce utilizando Next.js.",
            "Designed de telas do zero para um e-commerce web app usando Figma.",
          ],
          "es-ES": [
            "Desarrollo de funcionalidades para una plataforma de comercio electrónico utilizando Next.js.",
            "Diseño de pantallas desde cero para una aplicación web de comercio electrónico utilizando Figma.",
          ],
          "fr-FR": [
            "Développement de fonctionnalités pour une plateforme de commerce électronique utilisant Next.js.",
            "Conception d'écrans à partir de zéro pour une application web de commerce électronique utilisant Figma.",
          ],
        },
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
        description: {
          "en-US": [
            "Designed the entire user interface (UI) for payment web app.",
            "Developed from scratch the company's payment web app using Vue.",
          ],
          "pt-BR": [
            "Design de uma interface completa (UI/UX) para um web app de pagamentos.",
            "Desenvolvimento frontend do zero do sistema web de pagamentos usando Vue.",
          ],
          "es-ES": [
            "Diseño de una interfaz completa (UI/UX) para una aplicación web de pagos.",
            "Desarrollo frontend desde cero del sistema web de pagos utilizando Vue.",
          ],
          "fr-FR": [
            "Conception d'une interface complète (UI/UX) pour une application web de paiement.",
            "Développement frontend à partir de zéro du système web de paiement utilisant Vue.",
          ],
        },
      },
      {
        startDate: "2018-08",
        endDate: "2019-08",
        title: "Trainee",
        description: {
          "en-US": [
            "Designed the entire user interface and experience (UI/UX) for the mobile app, developed and maintained using Angular + Ionic, with over 100k downloads.",
            "Integrated frontend applications with APIs.",
          ],
          "pt-BR": [
            "Design de uma interface completa (UI/UX) para app mobile, desenvolvimento e manutenção usando Angular + Ionic, com mais de 100 mil downloads.",
            "Integração de frontend web apps com APIs.",
          ],
          "es-ES": [
            "Diseño de una interfaz completa (UI/UX) para la aplicación móvil, desarrollo y mantenimiento utilizando Angular + Ionic, con más de 100 mil descargas.",
            "Integración de aplicaciones frontend con APIs.",
          ],
          "fr-FR": [
            "Conception d'une interface complète (UI/UX) pour l'application mobile, développement et maintenance utilisant Angular + Ionic, avec plus de 100 000 téléchargements.",
            "Intégration d'applications frontend avec des APIs.",
          ],
        },
      },
    ],
  },
];

export const EDUCATION = [
  {
    year: "2016 - 2022",
    name: {
      "en-US": "Bachelor's in Systems and Digital Media",
      "pt-BR": "Bacharelado em Sistemas e Mídias Digitais",
      "es-ES": "Licenciatura en Sistemas y Medios Digitales",
      "fr-FR": "Licence en Systèmes et Médias Numériques",
    },
    institution: {
      "en-US": "Federal University of Ceará",
      "pt-BR": "Universidade Federal do Ceará",
      "es-ES": "Universidad Federal de Ceará",
      "fr-FR": "Université Fédérale de Ceará",
    },
    certificateUrl:
      "https://drive.google.com/file/d/1Xo9n8sQh0a2l3jvKZt7e5X9z8Y6w/view?usp=sharing",
    institutionUrl: "https://www.ufc.br/",
  },
];

export const SKILLS = [
  "React",
  "TypeScript",
  "Next.js",
  "AI Assisted Development",
  "Tailwind CSS",
  "Storybook",
  "GraphQL",
  "Playwright",
  "Vite",
  "Shadcn UI",
  "Sonarqube",
  "I18n",
  "AWS S3",
  "Copilot",
  "Codex",
];

export const CERTIFICATIONS = [
  {
    year: "2023 - 2024",
    name: {
      "en-US": "React & Next Specialization",
      "pt-BR": "Especialização em React & NextJS",
      "es-ES": "Especialización en React & NextJS",
      "fr-FR": "Spécialisation en React & NextJS",
    },
    institution: {
      "en-US": "Rocketseat",
      "pt-BR": "Rocketseat",
      "es-ES": "Rocketseat",
      "fr-FR": "Rocketseat",
    },
    certificateUrl:
      "https://www.rocketseat.com.br/certificates/63e9b1c8-9c7a-4c3d-8f0c-2a1e5b8d6f4e",
    institutionUrl: "https://www.rocketseat.com.br/",
  },
];

export const LANGUAGES = [
  {
    name: {
      "en-US": "Portuguese",
      "pt-BR": "Português",
      "es-ES": "Portugués",
      "fr-FR": "Portugais",
    },
    level: "C2" as const,
  },
  {
    name: {
      "en-US": "English",
      "pt-BR": "Inglês",
      "es-ES": "Inglés",
      "fr-FR": "Anglais",
    },
    level: "B2" as const,
  },
];

export const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;
