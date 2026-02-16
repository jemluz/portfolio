# AI Agent Guide - turma.dev

> **Comprehensive documentation for AI agents working with the turma.dev codebase**

## 📖 Quick Start

This is a **Next.js 15** portfolio application showcasing a developer's professional timeline. The app features an interactive vertical timeline (1997-2025) with content areas displaying career history, projects, and professional details.

**Key Tagline**: _"Cada dev tem uma história - conte a sua para a turma"_ (Every dev has a story - tell yours to the class)

## 🎯 Project Purpose

**turma.dev** is a personal portfolio/timeline web application that:

- Displays a chronological timeline of a developer's career
- Allows interactive navigation through years
- Shows detailed content (work experience, projects, locations) for each period
- Provides responsive design for mobile and desktop
- Supports light/dark themes

## 🏗️ Architecture Overview

### Technology Stack

| Category             | Technologies                                  |
| -------------------- | --------------------------------------------- |
| **Framework**        | Next.js 15.5.9 (with Turbopack), React 19.1.0 |
| **Language**         | TypeScript 5                                  |
| **Styling**          | TailwindCSS v4, PostCSS, Custom CSS           |
| **UI Components**    | Radix UI, Phosphor Icons, Lucide React        |
| **State Management** | React Context API (BackgroundContext)         |
| **Theme**            | next-themes with middleware persistence       |
| **Build Tools**      | ESLint 9, Prettier 3.6.2, NVM                 |

### Core Architecture Principles

1. **Component-Based**: Each feature is isolated in its own component folder
2. **Hook-Driven Logic**: Complex logic extracted into reusable custom hooks
3. **Context for Global State**: BackgroundContext manages timeline state
4. **Utility Separation**: Helper functions in dedicated utils files
5. **Type Safety**: Full TypeScript coverage with dedicated type files
6. **Documentation**: JSDoc mandatory for all hooks and utility functions

## 📁 Folder Structure

```
/home/runner/work/turma.dev/turma.dev/
├── src/
│   ├── app/                      # Next.js app directory
│   │   ├── background/           # Main timeline page
│   │   │   ├── page.view.tsx     # Page component
│   │   │   └── styles.css        # Page-specific styles
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.view.tsx         # Home/landing page
│   │   └── globals.css           # Global styles
│   │
│   ├── components/
│   │   ├── custom/               # Feature components
│   │   │   ├── Timeline/         # Timeline navigation
│   │   │   ├── ContentArea/      # Content display
│   │   │   └── UserInfo/         # User profile section
│   │   ├── ui/                   # Radix UI wrappers
│   │   └── theme-provider.tsx    # Theme context
│   │
│   ├── contexts/
│   │   └── BackgroundContext.tsx # Global timeline state
│   │
│   ├── hooks/                    # Custom React hooks (all JSDoc documented)
│   │   ├── useMediaQuery.ts
│   │   ├── useScrollActivation.ts
│   │   ├── useScrollPadding.ts
│   │   ├── useTimelineBlackBorder.ts
│   │   ├── useTimelineNavigation.ts
│   │   └── useContentItemRefs.ts
│   │
│   ├── lib/
│   │   ├── utils.ts              # cn() - className merger
│   │   └── fonts.ts              # Google Font configs
│   │
│   └── background-data.ts        # User data & content
│
├── docs/                         # AI Agent Documentation
│   ├── AI_AGENT_GUIDE.md         # This file
│   ├── ARCHITECTURE.md           # Detailed architecture
│   ├── COMPONENT_REFERENCE.md    # Component API docs
│   ├── HOOKS_REFERENCE.md        # Hook API docs
│   ├── DEVELOPMENT_GUIDE.md      # Dev patterns & workflows
│   └── TROUBLESHOOTING.md        # Common issues
│
├── middleware.ts                 # Theme persistence
├── next.config.ts               # Next.js config
├── tsconfig.json                # TypeScript config (path alias: @/*)
└── package.json                 # Dependencies & scripts
```

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Development server (with Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Linting
npm run lint          # ESLint
npm run lint:check    # Prettier check
npm run lint:fix      # Prettier auto-fix
```

## 🎨 Key Concepts

### 1. BackgroundContext (State Management)

The **BackgroundContext** is the central nervous system of the application:

**State Variables:**

- `selectedContent: string | null` - Currently selected content item ID
- `selectedYear: number | null` - Currently selected year
- `yearContents: Background[]` - Content items for selected year (sorted by month)
- `itemColors: Record<string, string>` - Cached color assignments per item
- `years: number[]` - All available years (sorted)
- `canGoNext/Previous: boolean` - Navigation boundary flags

**Key Functions:**

- `setSelectedContent(id: string | null)` - Update selected content
- `setSelectedYear(year: number)` - Switch year (triggers scroll reset)
- `goToNextContent()` / `goToPreviousContent()` - Navigate between items
- `registerScrollReset(callback)` - Register callback for year changes
- `registerTimelineNavigation(handlers)` - Register timeline nav handlers

**Usage Pattern:**

```tsx
const { selectedYear, setSelectedYear, yearContents } = useBackgroundContext();
```

### 2. Custom Hooks

All hooks are **client-only** (`"use client"` directive) and **fully documented with JSDoc**.

**Core Hooks:**

- `useMediaQuery(query)` - Responsive breakpoint detection
- `useScrollActivation(refs, callback)` - Auto-select on scroll
- `useScrollPadding(refs, containerRef)` - Dynamic bottom padding
- `useTimelineBlackBorder(selectedYear, years)` - Black indicator position
- `useTimelineNavigation(context)` - Timeline button navigation
- `useContentItemRefs(items)` - Ref management for lists

See [HOOKS_REFERENCE.md](./HOOKS_REFERENCE.md) for detailed API docs.

### 3. Component Organization

Components follow this structure:

```
ComponentName/
├── ComponentName.tsx           # Main component
├── SubComponent1.tsx          # Sub-components
├── SubComponent2.tsx
├── component-name.types.ts    # TypeScript types
├── component-name.utils.ts    # Utility functions (JSDoc required)
├── component-name.constants.ts # Constants
└── styles.css                 # Component-specific styles
```

### 4. Color System

**17 Tailwind Colors** with random assignment:

- red, orange, amber, yellow, lime, green, emerald, teal, cyan
- sky, blue, indigo, violet, purple, fuchsia, pink, rose

**Color Caching:** Colors are assigned once per item and cached in context to maintain consistency.

### 5. Responsive Design

**Breakpoint:** 769px (desktop)

```tsx
const isDesktop = useMediaQuery("(min-width: 769px)");
```

**Pattern:** Separate components for mobile/desktop views

- `UserInfoDesktop` / `UserInfoMobile`
- `TimelineNavButtonsDesktop` / `TimelineNavButtonsMobile`

### 6. Theme System

- **Provider:** `next-themes` with cookie persistence
- **Middleware:** Syncs theme before React hydration
- **CSS Variables:** Light/dark mode colors defined in globals.css
- **Toggle:** Available in common components

## 📋 Development Patterns

### JSDoc Documentation (MANDATORY)

**All hooks and utility functions MUST have JSDoc:**

````typescript
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
````

### Issue & Branch Naming

1. Create issue first
2. Use pattern: `[TURMA-XXXXX] + issue_title`
3. Fill XXXXX with padded issue number (e.g., #86 → TURMA-00086)
4. Branch: `feat/TURMA-XXXXX`

### Code Formatting

- `.editorconfig` defines standards
- Use `npm run lint:fix` before commits
- ESLint for code quality

### Performance Optimization

- Use `useCallback` for event handlers
- Use `useMemo` for derived state
- Clean up event listeners in `useEffect`
- Use `ResizeObserver` cleanup on unmount
- Cache colors with refs to avoid re-renders

## 🚀 Common Tasks

### Adding a New Hook

1. Create file in `src/hooks/use-your-hook.ts`
2. Add `"use client"` directive at top
3. Write full JSDoc documentation
4. Export the hook
5. Add types inline or in separate file
6. Test with both mobile and desktop viewports

### Adding a New Component

1. Create folder: `src/components/custom/ComponentName/`
2. Create main file: `ComponentName.tsx`
3. Create types: `component-name.types.ts`
4. Create utils: `component-name.utils.ts` (with JSDoc)
5. Add to BackgroundContext if state is needed
6. Create mobile/desktop variants if responsive

### Modifying Timeline Behavior

1. Check `BackgroundContext` for state changes
2. Update relevant hooks (`useTimelineNavigation`, `useScrollActivation`)
3. Modify component files in `Timeline/` or `ContentArea/`
4. Test scroll behavior thoroughly
5. Verify black border position updates

### Adding New Content

Edit `src/background-data.ts`:

```typescript
export const backgroundList: Background[] = [
  {
    id: "unique-id",
    year: 2024,
    month: 6,
    title: "New Position",
    description: "Description here",
    location: "City, Country",
    durationInMonths: 12,
    isCurrent: false,
    projects: [{ name: "Project", url: "https://..." }],
  },
  // ...
];
```

## 🔍 Important Implementation Details

### Scroll Activation Logic

`useScrollActivation` uses a **5px threshold** to determine when an item is "active":

```typescript
const isNearTop = Math.abs(rect.top - topThreshold) <= 5;
```

### Black Border Positioning

The black indicator bar uses:

- `translateY` based on selected year index
- Height + gap calculations from timeline buttons
- Hidden when scrolled out of view

### Ref Management

`useContentItemRefs` creates stable ref callbacks:

```typescript
const [setRef] = useContentItemRefs(items);
return <div ref={setRef(item.id)} />;
```

### Color Assignment

Colors are randomly selected but never repeat consecutively:

```typescript
const getRandomColor = (lastColor?: string): string => {
  // Filters out lastColor from available colors
};
```

## 📚 Related Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md) - Deep dive into system design
- [COMPONENT_REFERENCE.md](./COMPONENT_REFERENCE.md) - Complete component API
- [HOOKS_REFERENCE.md](./HOOKS_REFERENCE.md) - Detailed hook documentation
- [DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md) - Workflows and patterns
- [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) - Common issues and solutions

## ⚠️ Critical Notes for AI Agents

1. **Never remove JSDoc** from hooks or utility functions
2. **BackgroundContext** must wrap components that use timeline state
3. **`"use client"`** directive required for all hooks
4. **Refs** must be managed carefully - use `useContentItemRefs` for lists
5. **Theme middleware** runs before React - don't break cookie logic
6. **Year sorting** always orders by month (oldest first)
7. **Color caching** prevents visual inconsistency - maintain in context
8. **Mobile/Desktop** components should stay separate, not conditional renders
9. **Path alias** `@/*` maps to `./src/*` (configured in tsconfig.json)
10. **Page naming**: Use `.view.tsx` for page components (next.config.ts)

## 🎓 Learning Resources

- [Next.js 15 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [TailwindCSS v4 Docs](https://tailwindcss.com/docs)
- [Radix UI Docs](https://www.radix-ui.com/primitives)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Last Updated:** 2026-02-16  
**Maintained by:** AI Agents working on turma.dev
