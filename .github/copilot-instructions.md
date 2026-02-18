# GitHub Copilot Instructions - turma.dev

## Project Context

- Platform for developers to show their professional experiences

## 🏗️ Tech Stack

- **Framework**: Next.js 15.5.9 (App Router)
- **React**: 19.1.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4 + CVA (class-variance-authority)
- **UI Components**: Radix UI + shadcn/ui (custom theme)
- **Icons**: Phosphor Icons + Lucide React

## 📁 Project Structure

### Main Folders

- `src/app/` - Next.js App Router routes
- `src/components/ui/` - shadcn/ui components (DO NOT MODIFY DIRECTLY)
- `src/components/custom/` - Project-specific components
- `src/contexts/` - Context API providers
- `src/hooks/` - Custom React hooks
- `src/lib/` - General utilities

### Naming Convention

| Type                  | Convention                        | Examples                                          |
| --------------------- | --------------------------------- | ------------------------------------------------- |
| Component name        | PascalCase                        | `Timeline`, `UserInfo`, `ContentArea`             |
| Component Files       | PascalCase                        | `Timeline.tsx`, `UserInfo.tsx`, `ContentArea.tsx` |
| Component Type Files  | kebab-case                        | `timeline.types.ts`, `user-info.types.ts`         |
| Component Utils Files | kebab-case                        | `timeline.utils.ts`, `content-area.utils.ts`      |
| Hooks                 | camelCase with `use` prefix       | `useMediaQuery`, `useScrollPadding`               |
| Context Providers     | PascalCase with `Provider` suffix | `ThemeProvider`, `AuthProvider`                   |
| Context Files         | PascalCase with `Provider` suffix | `ThemeProvider.tsx`, `AuthProvider.tsx`           |
| Context Hooks         | camelCase with `use` prefix       | `useTheme`, `useAuth`                             |

## 💻 Code Standards

**Types/Functions/Constants Naming Convention**

| Type                | Convention                                            | Examples                                    |
| ------------------- | ----------------------------------------------------- | ------------------------------------------- |
| Functions/variables | camelCase                                             | `getActiveYear`, `handleClick`, `isDesktop` |
| Constants           | SCREAMING_SNAKE_CASE                                  | `YEAR_BUTTON_HEIGHT`, `MAX_ITEMS`           |
| Types/Interfaces    | PascalCase                                            | `TimelineProps`, `UserData`, `ViewMode`     |
| Enums               | PascalCase (name), SCREAMING_SNAKE_CASE (keys/values) | `enum Period { CURRENT = "CURRENT" }`       |

**Components**

- Separate into `ui/` (shadcn) and `custom/` (project-specific)
- Use barrel exports in `index.tsx` for public API

**State**

- Use Context API for global state
- Custom hooks for reusable logic

## 🥸 Important Decisions

- Use App Router (not Pages Router)
- Prefer Server Components when possible
- Documentation: JSDoc mandatory for all hooks and utils (`src/hooks/`, `src/components/**/utils.ts`)
- Use Tailwind CSS (not CSS Modules) + shadcn/ui for styling

## 💪 Skills

Skills are modular, context-specific knowledge modules that guide AI assistants on how to perform common tasks following project conventions.

Available skills:

| Skill         | Description                                                                                                     | Path                                  |
| ------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| add-component | Add a new React component to the codebase following the project conventions                                     | .github/skills/add-component/SKILL.md |
| add-constant  | Add constants following the project conventions for utils files                                                 | .github/skills/add-constant/SKILL.md  |
| add-context   | Add a new React Context provider and hook following the project conventions                                     | .github/skills/add-context/SKILL.md   |
| add-enum      | Add a new enum to the codebase following the project conventions for TypeScript enums                           | .github/skills/add-enum/SKILL.md      |
| add-hook      | Add a new custom React hook to the codebase, following our conventions for structure, naming, and documentation | .github/skills/add-hook/SKILL.md      |
| add-jsdoc     | Add JSDoc comments to functions and hooks for better documentation and code clarity                             | .github/skills/add-jsdoc/SKILL.md     |
| create-skill  | Create a new skill following the project's skill structure and documentation conventions                        | .github/skills/create-skill/SKILL.md  |
