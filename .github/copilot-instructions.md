# Copilot Instructions – turma.dev

## Project Summary

**turma.dev** is a personal developer background page built with **Next.js 15** and **React 19**. Its purpose is to let developers tell their professional story in a timeline format — "cada dev tem uma história, conte a sua para a turma" ("every dev has a story, tell yours to the group").

The application currently shows a single user's background (academic education + professional experiences) organized by year, with an interactive timeline sidebar and a content area that displays items for the selected year.

---

## Tech Stack

| Layer            | Technology                                    |
| ---------------- | --------------------------------------------- |
| Framework        | Next.js 15 (App Router, Turbopack)            |
| UI Library       | React 19                                      |
| Language         | TypeScript 5                                  |
| Styling          | Tailwind CSS 4                                |
| Component Kit    | Radix UI primitives + shadcn/ui               |
| Icons            | Phosphor Icons, Lucide React                  |
| Theme            | next-themes (light/dark support)              |
| Linting/Format   | ESLint 9, Prettier 3                          |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with ThemeProvider and font setup
│   ├── page.view.tsx           # Home page (entry point → /background)
│   └── background/
│       ├── page.view.tsx       # Main background/profile page (client component)
│       └── styles.css          # Page-specific CSS (grid layout)
├── background-data.ts          # Static data: userData + contentData (experiences)
├── components/
│   ├── theme-provider.tsx      # Wraps next-themes ThemeProvider
│   ├── ui/                     # Radix UI / shadcn-generated components
│   └── custom/
│       ├── Common/             # Shared custom components
│       ├── Timeline/           # Year-selector sidebar with animated indicator bar
│       ├── ContentArea/        # Right panel listing experiences for the selected year
│       └── UserInfo/           # User avatar, name and social links (desktop + mobile)
├── contexts/
│   └── BackgroundContext.tsx   # React context: year selection, content navigation, colors
├── hooks/
│   ├── useMediaQuery.ts        # Detects viewport breakpoints
│   ├── useScrollActivation.ts  # Activates items on scroll
│   ├── useScrollPadding.ts     # Calculates padding for scroll areas
│   ├── useContentItemRefs.ts   # Manages refs for content items
│   ├── useTimelineBlackBorder.ts # Controls the Timeline indicator bar position
│   └── useTimelineNavigation.ts  # Keyboard/button year navigation
└── lib/
    ├── fonts.ts                # Font configuration (Suse Mono)
    └── utils.ts                # Tailwind class merge helper (cn)
```

---

## Key Concepts

### BackgroundContext

The central React context (`src/contexts/BackgroundContext.tsx`) manages:
- `selectedYear` / `setSelectedYear` — the year shown in the Timeline
- `selectedContent` / `setSelectedContent` — the highlighted experience card
- `yearContents` — experiences filtered and sorted by the selected year
- `canGoNext` / `canGoPrevious` + `goToNextContent` / `goToPreviousContent` — sequential navigation
- `itemColors` — random-but-cached accent colors per item

### Timeline Component

An interactive vertical list of years with:
- A smooth animated black indicator bar that follows the selected year
- Scroll-inverted translation so the bar visually "sticks" to the selected item
- Viewport-aware visibility (bar hides when item scrolls out of view)

### ContentArea Component

Renders the list of `Background` items for the active year. Each item (`ContentItem`) shows title, description, optional location, duration, month bullet, and linked projects.

### Data Shape

```ts
// src/background-data.ts
type Background = {
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
```

---

## Documentation Standards

**JSDoc is mandatory for all utility functions and hooks.**

Every function in `src/hooks/` and every function in `src/components/**/*/utils.ts` files must include:
- A concise description
- `@param` tags for all parameters (with type and description)
- `@returns` tag describing the return value
- `@example` tag with at least one usage example where applicable

```typescript
/**
 * Hook to detect if the current viewport matches a given media query.
 *
 * @param query - The media query string to test (e.g., "(min-width: 769px)")
 * @returns A boolean indicating whether the media query matches
 *
 * @example
 * ```tsx
 * const isDesktop = useMediaQuery("(min-width: 769px)");
 * ```
 */
export function useMediaQuery(query: string): boolean {
  // implementation
}
```

---

## Development Workflow

### Setup

```bash
nvm install          # uses version defined in .nvmrc
npm install
npm run dev          # starts Next.js with Turbopack
```

### Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start dev server (Turbopack)         |
| `npm run build`   | Production build (Turbopack)         |
| `npm run start`   | Start production server              |
| `npm run lint`    | Run ESLint                           |
| `npm run lint:check` | Check formatting with Prettier    |
| `npm run lint:fix`   | Auto-fix formatting with Prettier  |

### Branch & Issue Naming

1. Create a GitHub issue first.
2. Title format: `[TURMA-XXXXX] description` — where `XXXXX` is the zero-padded issue number (e.g., issue `#86` → `TURMA-00086`).
3. Branch format: `feat/TURMA-XXXXX`.

---

## Code Style

- Formatting is enforced by **Prettier** and **.editorconfig** — run `npm run lint:fix` before committing.
- Prefer `useCallback` and `useMemo` for stable references and expensive computations.
- Use `useRef` for values that must not trigger re-renders (e.g., DOM refs, caches, callbacks).
- Components are split into desktop/mobile variants when layouts differ significantly (e.g., `UserInfoDesktop` / `UserInfoMobile`).
- CSS Grid is used for the main page layout; Tailwind utilities handle the rest.
