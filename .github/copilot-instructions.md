# GitHub Copilot Instructions - turma.dev

## Project Context

- Platform for developers to share their professional experiences

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

### Component File Convention

Complex components in `src/components/custom/` should follow:

(reference the code style file)

## Code Standards

### Components

- Separate into `ui/` (shadcn) and `custom/` (project-specific)
- Always create `.types.ts` for complex types
- Always create `.utils.ts` for reusable logic
- Always create `.constants.ts` for fixed values

### Documentation

- JSDoc mandatory for all hooks (`src/hooks/`)
- JSDoc mandatory for all utils (`src/components/**/utils.ts`)
- Include `@param`, `@returns`, `@example`

### State

- Use Context API for global state
- Custom hooks for reusable logic

### Issues/Branches

- Issues: `[TURMA-XXXXX] + title`
- Issue branches: `feat/TURMA-XXXXX`
- Commits at issues: `type(IXXXXX): commit message description whatever`

- Sub issues: `[TURMA-XXXXX] + [SUB-YY] + title`
- Sub issue branches: `feat/TURMA-XXXXX__SUB-YY`
- Commits at sub issues: `type(IXXXXX__SYY): commit message description whatever`

## Important Decisions

- Use App Router (not Pages Router)
- Prefer Server Components when possible
- Use CVA for component variants
- Use Tailwind CSS (not CSS Modules)
