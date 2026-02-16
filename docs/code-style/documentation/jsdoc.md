# JSDoc Documentation

**Purpose**: Rules and templates for documenting functions with JSDoc.

---

## Mandatory JSDoc

JSDoc is **required** for:
- ✓ All functions in `src/hooks/`
- ✓ All exported functions in `src/components/**/utils.ts`
- ✓ All exported utility functions in `src/lib/`

JSDoc is **optional** for:
- Components (unless props need explanation beyond TypeScript)

---

## JSDoc Template

```typescript
/**
 * [Brief description of what function does - one sentence]
 *
 * @param paramName - [description of parameter, include units/ranges if relevant]
 * @param anotherParam - [description, include type details if not obvious]
 * @returns [description of return value, include possible values/types]
 *
 * @example
 * ```ts
 * functionName("value", 42) // returns "result"
 * ```
 */
export function functionName(paramName: string, anotherParam: number): string {
  // implementation
}
```

---

## Required Sections

### 1. Description
- First line after `/**`
- Brief (1-2 sentences max)
- Describe what and why, not how
- End with period

### 2. `@param` for each parameter
- Pattern: `@param paramName - description`
- Include units if relevant (px, ms, etc)
- Mention valid ranges or constraints
- One line per parameter

### 3. `@returns`
- Pattern: `@returns description`
- Describe return value
- Mention possible return types/values

### 4. `@example`
- Pattern: `@example` followed by code fence
- Use executable, realistic code
- Show actual usage, not pseudocode
- Can include result as comment

---

## Valid Examples

### Utility Function

```typescript
/**
 * Filters timeline items by year range and removes empty periods
 *
 * @param items - Array of timeline items to filter
 * @param startYear - Start year for filtering (inclusive)
 * @param endYear - End year for filtering (inclusive)
 * @returns Filtered array of timeline items within date range
 * 
 * @example
 * ```ts
 * const filtered = filterTimelineItems(allItems, 2020, 2024);
 * // Returns items from 2020-2024
 * ```
 */
export function filterTimelineItems(
  items: TimelineItem[],
  startYear: number,
  endYear: number
): TimelineItem[] {
  return items.filter(
    item => item.year >= startYear && item.year <= endYear
  );
}
```

---

### Hook Documentation

**Exemplo completo de hook**: [`examples/hooks.md#example-1-usemediaquery-simple-hook`](../examples/hooks.md#example-1-usemediaquery-simple-hook)

---

### Function with Units

```typescript
/**
 * Calculates the scroll padding based on viewport height
 *
 * @param viewportHeight - Current viewport height in pixels
 * @param offset - Additional offset to add in pixels (default: 0)
 * @returns Calculated padding value in pixels
 *
 * @example
 * ```ts
 * const padding = calculateScrollPadding(800, 20);
 * // returns 420 (half of 800 + 20)
 * ```
 */
export function calculateScrollPadding(
  viewportHeight: number,
  offset: number = 0
): number {
  return (viewportHeight / 2) + offset;
}
```

---

### Constant with JSDoc (optional but recommended)

```typescript
/**
 * Default height for content area in pixels
 * Used across ContentArea, ContentList, and BulletList components
 */
export const DEFAULT_CONTENT_HEIGHT = 290;

/**
 * Breakpoint for mobile/desktop switch in pixels
 * Matches Tailwind's 'md' breakpoint
 */
export const MOBILE_BREAKPOINT_PX = 768;
```

---

## Invalid Examples

### ✗ Too Vague

```typescript
/**
 * Process data
 * @param data - data
 * @returns result
 */
export function processData(data: any): any {
  // What does "process" mean? What kind of data?
}
```

**Problems**:
- Description too generic
- Parameters not explained
- No example provided
- Uses `any` type

---

### ✗ Missing Information

```typescript
/**
 * Filters items
 */
export function filterItems(items: Item[], year: number): Item[] {
  // Missing @param, @returns, @example
}
```

**Problems**:
- No `@param` tags
- No `@returns` tag
- No `@example`

---

### ✗ Wrong Example

```typescript
/**
 * Gets user by ID
 * @param id - user identifier
 * @returns user object
 * 
 * @example
 * ```ts
 * getUser(id) // returns user
 * ```
 */
export function getUser(id: string): User {
  // Example is too generic and not helpful
}
```

**Problem**: Example doesn't show real usage with actual values

---

## Best Practices

### 1. Be Specific

```typescript
// ✗ Vague
@param value - The value

// ✓ Specific
@param value - The scroll position in pixels (0 to document height)
```

---

### 2. Include Units

```typescript
// ✗ No units
@param delay - Time to wait

// ✓ With units
@param delay - Time to wait in milliseconds before triggering
```

---

### 3. Show Real Examples

```typescript
// ✗ Generic
@example
```ts
calculateValue(x)
```

// ✓ Real usage
@example
```ts
const height = calculateValue(290);
// returns 580 (290 * 2)
```
```

---

### 4. Document Edge Cases

```typescript
/**
 * Finds the active year based on scroll position
 *
 * @param scrollTop - Current scroll position in pixels
 * @param refs - Map of year to HTML element references
 * @param years - Array of available years (must be sorted ascending)
 * @returns The currently active year, or first year if scroll at top
 *
 * @example
 * ```ts
 * const active = findActiveYear(0, refs, [2020, 2021, 2022]);
 * // returns 2020 (scroll at top)
 * 
 * const active = findActiveYear(500, refs, [2020, 2021, 2022]);
 * // returns 2021 (based on element positions)
 * ```
 */
```

---

## Related Guides

- **Utility functions**: [`file-types/03-utils.md`](../file-types/03-utils.md)
- **Hooks**: [`file-types/04-hooks.md`](../file-types/04-hooks.md)
- **Examples**: [`examples/hooks.md`](../examples/hooks.md)
