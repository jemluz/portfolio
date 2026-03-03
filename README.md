# turma.dev

### 🇧🇷 Cada dev tem uma história — conte a sua para a turma

Every developer has a story — tell yours to the turma [EN]

turma.dev is a portfolio storytelling platform where developers can present their professional journey through a timeline of milestones, projects, and personal links in a content-centered experience.

### 🌐 Online preview [turma.dev/background](https://turma.dev/background)

### 🖼️ Spoilers

| 🖥️ Desktop                                                                                                                      | 📱 Mobile                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| <img src="docs/imgs/print%20desktop.png" alt="turma.dev desktop preview" height="420" style="width:auto;object-fit:contain;" /> | <img src="docs/imgs/print%20mobile.png" alt="turma.dev mobile preview" height="420" style="width:auto;object-fit:contain;" /> |

## ✨ Key Features

- Foundation with Next.js App Router and TypeScript.
- Content-centered timeline experience for developer storytelling.
- Responsive layouts for desktop and mobile with dedicated UX behavior.
- Synchronized timeline/content navigation using Context API.
- Consolidated project knowledge into a single documentation hub with architecture, workflow, and data model references.
- Auxiliar documentation for AI asisted development

## 📚 Tech Stack

| Layer          | Technology                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------------ |
| Framework      | [Next.js 15](https://nextjs.org/) (App Router, Turbopack)                                                    |
| UI Library     | [React 19](https://react.dev/)                                                                               |
| Language       | [TypeScript 5](https://www.typescriptlang.org/)                                                              |
| Styling        | [Tailwind CSS 4](https://tailwindcss.com/)                                                                   |
| Component Kit  | [Radix UI](https://www.radix-ui.com/primitives) primitives + [shadcn/ui](https://ui.shadcn.com/)             |
| Icons          | [Phosphor Icons](https://phosphoricons.com/), [Lucide React](https://lucide.dev/guide/packages/lucide-react) |
| Theme          | [next-themes](https://github.com/pacocoursey/next-themes) (light/dark support)                               |
| Linting/Format | [ESLint 9](https://eslint.org/), [Prettier 3](https://prettier.io/)                                          |

## 🚀 Start Here

1. Local setup: [docs/project-setup.md](docs/project-setup.md)
2. Product vision: [docs/vision.md](docs/vision.md)
3. Architecture: [docs/architecture.md](docs/architecture.md)
4. Folder structure: [docs/folder-structure.md](docs/folder-structure.md)
5. Development workflow: [docs/dev-workflow.md](docs/dev-workflow.md)

## 🗺️ Documentation Quick Map

### 🎯 Product and Direction

- Vision and purpose: [docs/vision.md](docs/vision.md)
- Evolution and scope boundaries: [docs/future.md](docs/future.md)

### 🏗️ Engineering and Architecture

- Architecture and invariants: [docs/architecture.md](docs/architecture.md)
- Current data model (ERD): [docs/data-model.md](docs/data-model.md)
- Code organization: [docs/folder-structure.md](docs/folder-structure.md)
- State management: [docs/state-management.md](docs/state-management.md)
- UI/UX guidelines: [docs/ui-guidelines.md](docs/ui-guidelines.md)

### 🔁 Development Process

- Workflow for issues, sub-issues, and PRs: [docs/dev-workflow.md](docs/dev-workflow.md)
- Project setup and scripts: [docs/project-setup.md](docs/project-setup.md)

## ⚙️ Operational Rules in `.github/`

- Source of truth for project standards and AI instructions: [.github/copilot-instructions.md](.github/copilot-instructions.md)
- Topic-specific rules: [.github/instructions/](.github/instructions/)
- Reusable skills for recurring tasks: [.github/skills/](.github/skills/)
