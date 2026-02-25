# State Management

## Overview

**turma.dev** state management uses a hybrid architecture that combines **React Context API** for global state and **custom hooks** for reusable logic and local state. The approach prioritizes simplicity, performance, and separation of concerns.

## Architecture

```
┌───────────────────────────────────────────────────────────────────────┐
│                           App Layout                                  │
│  ┌─────────────────────────────────────────────────────────────────┐  │
│  │                      ThemeProvider                              │  │
│  │  ┌───────────────────────────────────────────────────────────┐  │  │
│  │  │              BackgroundProvider (Page)                    │  │  │
│  │  │  ┌──────────┐  ┌─────────────┐  ┌──────────────────┐      │  │  │
│  │  │  │ UserInfo │  │   Timeline  │  │   ContentArea    │      │  │  │
│  │  │  │          │  │             │  │                  │      │  │  │
│  │  │  │          │  │  + hooks    │  │  + hooks         │      │  │  │
│  │  │  │          │  │  + useState │  │  + useState      │      │  │  │
│  │  │  └──────────┘  └─────────────┘  └──────────────────┘      │  │  │
│  │  └───────────────────────────────────────────────────────────┘  │  │
│  └─────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────┘
```

## State Layers

### 1. Global State (Context API)

Manages shared state between multiple components using React Context API.

#### Active Contexts

| Context               | Scope         | Responsibility                                          | Documentation                                     |
| --------------------- | ------------- | ------------------------------------------------------- | ------------------------------------------------- |
| `ThemeProvider`       | App-wide      | Manages theme (dark/light mode) via next-themes         | [theme-provider.tsx][theme-provider]              |
| `BackgroundProvider`  | `/background` | Coordinates navigation, filtering and background colors | [background-context.md][background-context]       |

[theme-provider]: /workspaces/turma.dev/src/components/theme-provider.tsx
[background-context]: /workspaces/turma.dev/src/contexts/background-context.md

#### Context Characteristics

- **Immutability**: Callbacks memoized with `useCallback`
- **Performance**: Derived values with `useMemo` to avoid recalculations
- **Registrations**: Registrable callback pattern for component communication (e.g., `registerScrollReset`)
- **Type Safety**: Strict TypeScript across all contexts

### 2. Custom Hooks

Encapsulate reusable and complex logic. Divided into categories:

Custom hooks are divided into **general hooks** (such as media query detection) and **page-specific hooks** (such as those for the background page, which manage scroll, timeline navigation, and UI synchronization).

**Complete documentation**: [hooks-summary.md][hooks-summary]

[hooks-summary]: /workspaces/turma.dev/src/hooks/hooks-summary.md

### 3. Local State (useState)

Individual components use `useState` for internal state that doesn't need to be shared:
- UI toggles (dropdowns, tooltips)
- Form state
- Local animations and transitions

## Data Flow

### Example: Background Page

```
User Action (scroll/click)
    ↓
Timeline Component
    ├─→ useTimelineNavigation (detects change)
    ├─→ setSelectedYear (context action)
    ↓
BackgroundContext (state update)
    ├─→ yearContents (filtered data)
    ├─→ selectedContent (auto-select first)
    ├─→ registerScrollReset (callback)
    ↓
ContentArea Component
    ├─→ useScrollActivation (sync with scroll)
    ├─→ useContentItemRefs (track refs)
    └─→ Renders updated content
```

## Design Principles

1. **Single Source of Truth**: Shared state in contexts, memoized derivations
2. **Unidirectional Data Flow**: Data flows top-down via props/context
3. **Separation of Concerns**: Hooks isolate logic, components focus on UI
4. **Performance First**: Aggressive memoization and refs to avoid re-renders
5. **Type Safety**: TypeScript ensures clear contracts between layers

## Future Evolution

This document is living and will be updated as:
- New pages are implemented
- New global contexts are created
- More complex state patterns emerge (e.g., state machines, external stores)
- Integrations with external APIs are added

---

**Last updated**: February 2026
