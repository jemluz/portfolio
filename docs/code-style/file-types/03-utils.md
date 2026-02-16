# Utility Files (.utils.ts)

**File Pattern**: `components/custom/*/component-name.utils.ts` or `src/lib/utils.ts`

---

## Rules

- MUST use named exports only
- MUST have JSDoc on every exported function
- MUST NOT export React components
- MUST be pure functions (no side effects)
- Constants MUST be declared at top of file

---

## Constants

**Rules**:
- MUST use SCREAMING_SNAKE_CASE naming convention
- MUST be declared in the component's `.utils.ts` file (NOT in separate `.constants.ts`)
- MUST have explicit type annotation
- MUST be exported using named export
- SHOULD be grouped logically at the top of utils file

### Where to Place Constants

| Scope | Location | Example |
|-------|----------|---------|
| Component-specific | `component-name.utils.ts` | `export const YEAR_BUTTON_HEIGHT = 48;` |
| Shared across components | `src/lib/utils.ts` | `export const DEFAULT_ANIMATION_DURATION = 300;` |
| Type-related enums | `*.types.ts` | `enum Status { ACTIVE = "active" }` |

### Valid Patterns

```typescript
// component-name.utils.ts

// ✓ Exported constants at top of file
export const DEFAULT_CONTENT_HEIGHT = 290;
export const DESKTOP_PADDING_LEFT = 24;
export const MAX_ITEMS_PER_PAGE = 10;
export const ANIMATION_DURATION_MS = 300;

/**
 * Formats content item for display
 * @param item - The content item to format
 * @returns Formatted string
 */
export function formatContentItem(item: ContentItem): string {
  const height = DEFAULT_CONTENT_HEIGHT;
  return `...`;
}
```

### Invalid Patterns

```typescript
// ✗ Wrong: Magic numbers inline
function calculateHeight() {
  return 290; // What is 290?
}

// ✗ Wrong: camelCase naming
export const maxItemsPerPage = 10;

// ✗ Wrong: No type annotation
export const DEFAULT_HEIGHT = 290 as const; // Use explicit type instead

// ✗ Wrong: Constants in separate .constants.ts file (old pattern)
// component-name.constants.ts ← DO NOT CREATE
```

---

## Function Documentation

**Requisitos JSDoc**:
- Descrição breve (1-2 sentenças)
- `@param` para cada parâmetro  
- `@returns` descrevendo o valor retornado
- `@example` com código executável

**Template completo e exemplos**: [`documentation/jsdoc.md`](../documentation/jsdoc.md)

**Invalid JSDoc** (too vague):
```typescript
/**
 * Process data
 * @param data - data
 * @returns result
 */
// ← TOO VAGUE
```

**Valid JSDoc**:
```typescript
/**
 * Filters timeline items by year range and removes empty periods
 * @param items - Array of timeline items to filter
 * @param startYear - Start year for filtering (inclusive)
 * @param endYear - End year for filtering (inclusive)
 * @returns Filtered array of timeline items
 * 
 * @example
 * ```ts
 * const filtered = filterTimelineItems(allItems, 2020, 2024);
 * ```
 */
export function filterTimelineItems(
  items: TimelineItem[],
  startYear: number,
  endYear: number
): TimelineItem[] {
  // implementation
}
```

---

## Validation Checklist

- [ ] JSDoc completo em todas funções exportadas (`@param`, `@returns`, `@example`)
- [ ] Constants usam SCREAMING_SNAKE_CASE
- [ ] Funções puras (sem side effects)
- [ ] Sem React imports ou JSX

**Checklist completa**: [`examples/validation.md#creating-new-utility-function`](../examples/validation.md#creating-new-utility-function)

---

## Related Guides

- **JSDoc templates**: [`documentation/jsdoc.md`](../documentation/jsdoc.md)
- **Naming conventions**: [`conventions/naming.md`](../conventions/naming.md)
- **Type definitions**: [`file-types/02-types.md`](02-types.md)

---

## Example

```typescript
// content-area.utils.ts

// Constants at top
export const CONTENT_AREA_HEIGHT = 290;
export const CONTENT_VIEW_HEIGHT = 230;
export const DESKTOP_PADDING_LEFT = 24;

/**
 * Calculates the content area dimensions based on viewport
 * @param isDesktop - Whether current viewport is desktop
 * @returns Object with height and padding values
 */
export function getContentDimensions(isDesktop: boolean) {
  return {
    height: CONTENT_AREA_HEIGHT,
    paddingLeft: isDesktop ? DESKTOP_PADDING_LEFT : 0,
  };
}
```
