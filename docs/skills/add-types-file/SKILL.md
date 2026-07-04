---
name: add-types-file
description: Add a new types file following the project conventions for TypeScript type definitions.
---

To add type definitions to the codebase, follow the guidelines below to keep types consistent, reusable, and well-organized.

# 📌 Rules

- MUST use named exports only (no default export)
- MUST place component-specific types in `src/components/custom/ComponentName/component-name.types.ts`
- MUST place shared types in `src/lib/types.ts` (if applicable)
- MUST name component prop types as `{ComponentName}Props` (e.g., `TimelineProps`, `UserInfoProps`)
- MUST use `type` keyword for object types (prefer over `interface` for consistency)
- MUST NOT define logic or side effects in types
- MUST use SKILL [add-enum](../add-enum/SKILL.md) to define enums
- MUST follow [import and export instructions](../../instructions/import-export.instructions.md) for type imports

## 🧱 File Structure

```
src/components/custom/ComponentName/
├── ComponentName.tsx
├── component-name.types.ts          # Type definitions
├── component-name.utils.ts
└── index.tsx

src/lib/
└── types.ts                          # Shared types (if needed)
```

## 🧪 Examples

### Good Example

```ts
// component-name.types.ts

/**
 * Props for the main Timeline component.
 */
export type TimelineProps = {
  years: number[];
  onYearSelect?: (year: number) => void;
  defaultYear?: number;
};

/**
 * Props for internal YearButton subcomponent.
 */
export type YearButtonProps = {
  year: number;
  isSelected: boolean;
  onClick: (year: number) => void;
  showError?: boolean;
};

/**
 * Navigation directions.
 */
export enum NavigationDirection {
  UP = "UP",
  DOWN = "DOWN",
  UP_ALL = "UP_ALL",
  DOWN_ALL = "DOWN_ALL",
}

/**
 * Union type for menu variants.
 */
export type MenuVariant = "primary" | "secondary" | "ghost";

/**
 * Complex data shape with nested properties.
 */
export type ContentItemData = {
  id: string;
  title: string;
  period: {
    startYear: number;
    endYear: number;
  };
  tags?: string[];
};
```

**Why this is good**:

- ✓ Named exports only
- ✓ Prop types follow `{ComponentName}Props` pattern
- ✓ Enum uses SCREAMING_SNAKE_CASE
- ✓ Union types for specific variants
- ✓ Clear structure with nested objects
- ✓ Optional properties marked with `?`

### Bad Example

```ts
// ❌ component-name.types.ts

export default interface TimelineProps {
  years: number[];
}

export interface YearButtonProps {
  year: number;
  isSelected: boolean;
  onClick: (year: number) => void;
}

enum Direction {
  up = "up",
  down = "down",
}

export const MenuVariant = {
  primary: "primary",
  secondary: "secondary",
};
```

**Why this is wrong**:

- ✗ Uses default export instead of named exports
- ✗ Uses `interface` inconsistently (should prefer `type`)
- ✗ Enum uses camelCase instead of SCREAMING_SNAKE_CASE
- ✗ MenuVariant is const, not a type definition

---

## Usage in Components

### Component Import Pattern

```tsx
// ComponentName.tsx
"use client";

import { ComponentNameProps } from "./component-name.types";

export default function ComponentName({
  years,
  onYearSelect,
}: ComponentNameProps) {
  // Implementation
}
```

### Subcomponent Inline vs Types File

**Use inline type** for small, single-use prop types:

```tsx
// SmallSubcomponent.tsx
type Props = {
  label: string;
  onClick: () => void;
};
```

**Use types file** for:

- Main component props
- Types used across multiple files
- Complex types or enums
- Reusable types

```tsx
// ComponentName.tsx
import { TimelineProps } from "./component-name.types";
```

---

## ✅ Validation Checklist

- [ ] File name is `component-name.types.ts` or `src/lib/types.ts`
- [ ] Only named exports (no default export)
- [ ] Main component props named `{ComponentName}Props`
- [ ] All types use `type` keyword (not `interface`)
- [ ] Enum keys/values use SCREAMING_SNAKE_CASE
- [ ] Optional properties marked with `?`
- [ ] Union types use `|` for variants
- [ ] Nested objects properly typed
- [ ] No React imports needed (pure types)
- [ ] No circular dependencies with utils file
- [ ] Imported correctly in component: `import { TypeName } from "./component-name.types"`
- [ ] Types follow [import and export instructions](../../instructions/import-export.instructions.md)
