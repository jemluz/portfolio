---
name: add-constant
description: Add constants following the project conventions for utils files.
license: Complete terms in LICENSE.txt
---

To add a new constant, follow the guidelines below to keep naming and placement consistent.

# Rules

- MUST use SCREAMING_SNAKE_CASE naming
- MUST export with `export const`
- MUST add explicit type annotation
- MUST place constants at the top of the utils file
- MUST NOT create `.constants.ts` files (use `.utils.ts` instead)
- MUST add JSDoc when the constant is not self-explanatory (see `add-jsdoc` skill)

## Where to Place

- Component-specific: `src/components/custom/ComponentName/component-name.utils.ts`
- Shared across components: `src/lib/utils.ts`
- Type-related enums: `component-name.types.ts`

---

## Examples

### Good Example

```ts
// component-name.utils.ts

export const CARD_HEIGHT_PX: number = 290;
export const DESKTOP_PADDING_LEFT_PX: number = 24;
```

### Bad Example

```ts
// component-name.constants.ts

export const cardHeight = 290;
```

**Why this is wrong**:

- Uses `.constants.ts` file instead of `.utils.ts`.
- Uses camelCase instead of SCREAMING_SNAKE_CASE.
- Missing explicit type annotation.

---

## Validation Checklist

- [ ] Declared in `component-name.utils.ts` or `src/lib/utils.ts`
- [ ] Uses SCREAMING_SNAKE_CASE naming
- [ ] Exported with `export const`
- [ ] Has explicit type annotation
- [ ] Grouped at the top of the utils file
- [ ] MUST add JSDoc comment explaining purpose
- [ ] No magic numbers left inline
