# Naming Conventions

---

## Rules by Type

| Type | Convention | Examples |
|------|-----------|----------|
| Components | PascalCase | `Timeline`, `UserInfo`, `ContentArea` |
| Functions/variables | camelCase | `getActiveYear`, `handleClick`, `isDesktop` |
| Constants | SCREAMING_SNAKE_CASE | `YEAR_BUTTON_HEIGHT`, `MAX_ITEMS` |
| Types/Interfaces | PascalCase | `TimelineProps`, `UserData`, `ViewMode` |
| Enums | PascalCase (name), SCREAMING_SNAKE_CASE (keys) | `enum Period { CURRENT = "current" }` |
| Files (components) | PascalCase | `Timeline.tsx`, `UserInfo.tsx` |
| Files (types) | kebab-case | `timeline.types.ts`, `user-info.types.ts` |
| Files (utils) | kebab-case | `timeline.utils.ts`, `content-area.utils.ts` |
| Hooks | camelCase with `use` prefix | `useMediaQuery`, `useScrollPadding` |

---

## Component Naming

**Main Component**:
- File: `ComponentName.tsx`
- Export: `export default function ComponentName() {}`
- Usage: `<ComponentName />`

**Subcomponents** (same file):
```tsx
// Main component
export default function Timeline() {
  return <div>...</div>;
}

// Internal helper components (not exported)
function YearButton() {
  return <button>...</button>;
}

function YearLabel() {
  return <span>...</span>;
}
```

---

## Props Interface Naming

**Pattern**: `{ComponentName}Props`

```typescript
// ✓ Correct
export interface TimelineProps {
  years: number[];
}

// ✗ Wrong: Missing "Props" suffix ou usa "I" prefix
export interface Timeline { }
export interface ITimelineProps { }
```

**Padrão completo**: [`file-types/02-types.md#props-interface-pattern`](../file-types/02-types.md#props-interface-pattern)

---

## Enum Naming

**Enum name**: PascalCase  
**Enum keys**: SCREAMING_SNAKE_CASE  
**Enum values**: camelCase (strings)

```typescript
// ✓ Correct
export enum GoToButtonType {
  GITHUB = "github",
  LINKEDIN = "linkedin",
}

// ✗ Wrong: nome ou keys em case incorreto
export enum goToButtonType { github = "github" }
```

**Guia completo**: [`file-types/02-types.md#enum-naming`](../file-types/02-types.md#enum-naming)

---

## Constant Naming

**SCREAMING_SNAKE_CASE** obrigatório para todas as constantes.

**Regras completas e localização**: [`file-types/03-utils.md#constants`](../file-types/03-utils.md#constants)

---

## Hook Naming

**Must start with `use`**:

```typescript
// ✓ Correct
export function useMediaQuery(query: string): boolean { }
export function useScrollPadding(): number { }
export function useTimelineNavigation() { }

// ✗ Wrong
export function mediaQuery(query: string) { }  // Missing "use" prefix
export function getMediaQuery(query: string) { }  // Not a hook pattern
```

---

## File Naming

### Components
- Pattern: `ComponentName.tsx` (PascalCase)
- Examples: `Timeline.tsx`, `UserInfo.tsx`, `ContentArea.tsx`

### Types
- Pattern: `component-name.types.ts` (kebab-case)
- Examples: `timeline.types.ts`, `user-info.types.ts`, `content-area.types.ts`

### Utils
- Pattern: `component-name.utils.ts` (kebab-case)
- Examples: `timeline.utils.ts`, `user-info.utils.ts`, `content-area.utils.ts`

### Hooks
- Pattern: `useHookName.ts` (camelCase with `use` prefix)
- Examples: `useMediaQuery.ts`, `useScrollPadding.ts`, `useTimelineNavigation.ts`

### Index/Barrel
- Pattern: `index.tsx` (always lowercase)

---

## Related Guides

- **Component structure**: [`file-types/01-components.md`](../file-types/01-components.md)
- **Type definitions**: [`file-types/02-types.md`](../file-types/02-types.md)
- **Constants**: [`file-types/03-utils.md#constants`](../file-types/03-utils.md)
- **Hooks**: [`file-types/04-hooks.md`](../file-types/04-hooks.md)
