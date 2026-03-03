# 📂 Folder Structure

## 📌 Overview

This document outlines the directory structure of the turma.dev project, a Next.js application for developers to showcase their professional experiences.

## 🪾 Root Level

```
turma.dev/
│
├── .github/                          🐈‍⬛ GITHUB CONFIG
│   ├── workflows/                        → CI/CD
│   ├── instructions/                     → Copilot instructions
│   └── skills/                           → Reusable skill modules
│
├── docs/                             📚 DOCUMENTATION
│
├── src/
│   ├── app/                          🗺️ ROUTES (Next.js)
│   │   └── background/                   → /background page
│   │
│   ├── components/
│   │   ├── ui/                       💅 READY-MADE COMPONENTS (shadcn)
│   │   │   └── button.tsx                → Do not modify
│   │   │
│   │   └── custom/                   🧩 CUSTOM COMPONENTS
│   │       ├── Timeline/                 → Your component
│   │       ├── ContentArea/              → Your component
│   │       └── UserInfo/                 → Your component
│   │
│   ├── contexts/                     🌐 GLOBAL STATE
│   │   └── BackgroundContext.tsx         → selectedYear, selectedContent
│   │
│   ├── hooks/                        😎 REUSABLE LOGIC
│   │   ├── useMediaQuery.ts              → Detects mobile/desktop
│   │   └── useScrollPadding.ts           → Calculates padding
│   │
│   ├── lib/                          🛠️ UTILITIES
│   │   ├── utils.ts                      → cn() helper
│   │   └── fonts.ts                      → Font configuration
│   │
│   └── background-data.ts            📊 MOCK DATA (temporary)
│
│
├── .gitignore                        → Git ignore rules
│
├── .next/                            → Next.js build output (ignored in git)
├──  node_modules/                    → Node dependencies (ignored in git)
│
├── middleware.ts                     → Next.js middleware
├── next.config.ts                    → Next.js configuration
├── next-env.d.ts                     → Next.js TypeScript definitions
│
├── .editorconfig                     → Editor configuration
├── .nvmrc                            → Node version specification
├── .prettierignore                   → Prettier ignore patterns
├──  eslint.config.mjs                → ESLint configuration
│
├── components.json                   → shadcn/ui configuration
├── postcss.config.mjs                → PostCSS configuration
├── tsconfig.json                     → TypeScript configuration
│
├── package.json                      → Dependencies and scripts
├── package-lock.json                 → Dependency lock file
│
├── README.md                         → Project readme
├── LICENSE                           → Project license
```

## 🐈‍⬛ `.github` Directory

Configuration files for GitHub:

```
.github/
├── ISSUE_TEMPLATE/              # Issue templates
├── instructions/                # Custom instructions for tools
├── skills/                      # Reusable skill modules
├── copilot-instructions.md      # GitHub Copilot guidelines
└── pull_request_template.md     # PR template
```

## 📚 `docs` Directory

Project documentation:

```
docs/
├── architecture.md              # Architecture overview
├── dev-workflow.md              # Development workflow guide
├── folder-structure.md          # This file
├── future.md                    # Future roadmap
├── project-setup.md             # Project setup guide
├── state-management.md          # State management documentation
├── ui-guidelines.md             # UI/UX guidelines
├── vision.md                    # Project vision
└── imgs/                        # Documentation images
```

## 🗂️ `src` Directory

Main source code:

```
src/
├── app/                         # Next.js App Router
│   ├── background/              # Background page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.view.tsx            # Home page
│
├── components/                  # React components
│   ├── custom/                  # Project-specific components
│   │   ├── Common/              # Common components
│   │   ├── ContentArea/         # Content display area
│   │   ├── Timeline/            # Timeline component
│   │   └── UserInfo/            # User information display
│   │
│   ├── ui/                      # shadcn/ui components (DONT MODIFY DIRECTLY)
│   │   ├── avatar.tsx
│   │   ├── button.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── scroll-area.tsx
│   │   └── tooltip.tsx
│   │
│   └── theme-provider.tsx       # Theme context provider
│
├── contexts/                    # React Context providers
│   ├── BackgroundContext.tsx    # Background theme context
│   └── background-context.md    # Context documentation
│
├── hooks/                       # Custom React hooks
│   ├── useContentItemRefs.ts
│   ├── useMediaQuery.ts
│   ├── useScrollActivation.ts
│   ├── useScrollPadding.ts
│   ├── useTimelineBlackBorder.ts
│   ├── useTimelineNavigation.ts
│   └── hooks-summary.md         # Hooks documentation
│
├── lib/                         # Utility libraries
│   ├── fonts.ts                 # Font configuration
│   ├── utils.ts                 # General utilities
│   └── utils.css                # Utility styles
│
└── background-data.ts           # Background data constants
```

## 📁 `src/app/` - Next.js Routes (App Router)

**What it is:** A special Next.js 13+ folder that defines the application's routes.

**How it works:**

- Each folder becomes a route
- `page.tsx` = rendered page
- `layout.tsx` = shared layout

**Practical example in turma.dev:**

```
src/app/
└── [locale]/              # ⬅️ Dynamic route (for future i18n)
	└── background/        # ⬅️ /background route
		└── page.tsx       # ⬅️ Page component
```

**Result:**

- Access: `http://localhost:3000/background`
- Renders: `src/app/[locale]/background/page.tsx`

**Future (with internationalization):**

```
src/app/
└── [locale]/
	├── pt-BR/
	│   └── background/    → /pt-BR/background
	└── en/
		└── background/    → /en/background
```

## 🧱 Component Structure

### 💅 `src/components/ui/` - Shadcn/ui components

**What it is:** Ready-made components from the [shadcn/ui](https://ui.shadcn.com/) library.

**Examples:**

```
src/components/ui/
├── button.tsx           # Componente Button
├── avatar.tsx           # Componente Avatar
├── dropdown-menu.tsx    # Dropdown Menu
├── scroll-area.tsx      # Scroll Area
└── tooltip.tsx          # Tooltip
```

**Important rule: ⚠️ DO NOT MODIFY THESE FILES DIRECTLY**

**Why?**

- They are generated automatically by the shadcn CLI
- If you modify them, you cannot update later
- If you need to customize, create a wrapper in custom/

### 🧩 `src/components/custom/` - Custom Components

Each custom component follows this structure:

```
ComponentName/
├── ComponentName.tsx            # Main component
├── SomeSubComponent.tsx         # Sub-components
├── component-name.types.ts      # Type definitions
├── component-name.utils.ts      # Utility functions
├── styles.css                   # Component styles (if needed)
└── index.tsx                    # Barrel export
```

**Examples**

- **ContentArea**: Content listing and display
- **Timeline**: Timeline navigation and visualization
- **UserInfo**: User profile display

Difference between `ui/` and `custom/`:
| `ui/` | `custom/` |
|-------|-----------|
| Generic (Button, Avatar) | Project-specific (Timeline) |
| Comes from shadcn | You create it |
| Reusable in any project | Only makes sense in turma.dev |
| **DO NOT MODIFY** | **YOU CONTROL** |

## 🌐 `src/contexts/` - React Context (Global State)

**What it is:** Folder to manage global state with the Context API.

**Example:**

```
src/contexts/
└── BackgroundContext.tsx   # ⬅️ Manages selected year/content
```

## 😎 `src/hooks/` - Custom React Hooks

**What it is:** Folder for reusable hooks that encapsulate logic.

**Project examples:**

```
src/hooks/
├── useMediaQuery.ts        # ⬅️ Detects screen size
├── useScrollPadding.ts     # ⬅️ Calculates scroll padding
├── useScrollActivation.ts  # ⬅️ Controls scroll activation
└── useContentItemRefs.ts   # ⬅️ Manages item refs
```

## 🔧 **src/lib/** - Utilitários Gerais

**O que é:** Funções auxiliares que não são hooks nem componentes.

**Exemplos:**

```
src/lib/
├── utils.ts     # ⬅️ Funções genéricas (cn helper)
└── fonts.ts     # ⬅️ Configuração de fontes
```

## 📊 `src/background-data.ts` - Mock Data (Temporary)

**What it is:** File with mock data for development.

**Why "temporary"?**
In the future, this data will come from an API or database.

## 🏷️ File Naming Conventions

| Type        | Convention                  | Example                                      |
| ----------- | --------------------------- | -------------------------------------------- |
| Components  | PascalCase                  | `Timeline.tsx`, `UserInfo.tsx`               |
| Type files  | kebab-case                  | `timeline.types.ts`, `user-info.types.ts`    |
| Utils files | kebab-case                  | `timeline.utils.ts`, `content-area.utils.ts` |
| Hooks       | camelCase with `use` prefix | `useMediaQuery`, `useScrollPadding`          |
| Contexts    | PascalCase with `Provider`  | `ThemeProvider.tsx`, `BackgroundContext.tsx` |

## 🤔 When to use each folder

| If you are creating...                         | Put it in...                          |
| ---------------------------------------------- | ------------------------------------- |
| A new **page**                                 | `src/app/route-name/page.tsx`         |
| A **project-specific component** for turma.dev | `src/components/custom/`              |
| A **generic component** (Button, Card)         | `src/components/ui/` (via shadcn CLI) |
| **Global state**                               | `src/contexts/`                       |
| A **reusable hook**                            | `src/hooks/`                          |
| A **utility function**                         | `src/lib/`                            |
| **Test data**                                  | `src/background-data.ts`              |
