---
name: add-utils-file
description: Add a new utils file following the project conventions for utilities and constants.
---

To add a new utils file, follow the guidelines below to keep utilities consistent and easy to reuse.

# Rules

- MUST use named exports only (no default export)
- MUST keep functions pure (no side effects)
- MUST NOT export React components
- MUST NOT use React or JSX imports
- MUST place component-specific utils in `src/components/custom/ComponentName/component-name.utils.ts`
- MUST place shared utils in `src/lib/utils.ts`
- MUST use SKILL [add-jsdoc skill](../add-jsdoc/SKILL.md) to implement every exported function
- MUST use SKILL [add-constant skill](../add-constant/SKILL.md) to implement constants in utils files

## File Structure

src/components/custom/ComponentName/
├── ComponentName.tsx
├── component-name.types.ts
└── component-name.utils.ts

src/lib/
└── utils.ts

---

## Examples

### Good Example

```ts
// component-name.utils.ts

export const DEFAULT_CONTENT_HEIGHT_PX: number = 290;
export const ANIMATION_DURATION_MS: number = 300;

/**
 * Formats a content item for display.
 *
 * @param title - Item title.
 * @param period - Period label.
 * @returns Formatted label for UI display.
 */
export function formatContentLabel(title: string, period: string): string {
  return `${title} • ${period}`;
}
```

### Bad Example

```ts
import { useMemo } from "react";

const defaultHeight = 290;

export default function getLabel(title, period) {
  return `${title} • ${period}`;
}
```

**Why this is wrong**:

- Uses default export instead of named exports.
- Imports React in a utils file.
- Constant uses camelCase and has no explicit type.
- Missing JSDoc on the exported function.

---

## Validation Checklist

- [ ] File name matches `component-name.utils.ts` or is `src/lib/utils.ts`
- [ ] Types imported from `*.types.ts` if needed
- [ ] Only named exports are used
- [ ] Every exported function has complete JSDoc
- [ ] No React imports or JSX
- [ ] Functions are pure and side-effect free
- [ ] Constants follow [add-constant skill](../add-constant/SKILL.md) conventions
