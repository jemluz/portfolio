---
name: add-jsdoc
description: Add JSDoc comments to functions and hooks for better documentation and code clarity.
---

To add or update JSDoc comments in our codebase, follow the guidelines below to ensure consistency and completeness in our documentation.

# 📌 JSDoc is **required** for

- ✓ All functions in `src/hooks/`
- ✓ All exported functions in `src/components/**/utils.ts`
- ✓ All exported utility functions in `src/lib/`

## 🧩 JSDoc Template

````typescript
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
````

---

## 📋 Required Sections

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

## 🧪 Valid Examples

### Utility Function

````typescript
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
  endYear: number,
): TimelineItem[] {
  return items.filter((item) => item.year >= startYear && item.year <= endYear);
}
````

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

### Hook

````typescript
/**
 * Observes element visibility and activates sections based on scroll position.
 *
 * @param elementRef - React ref to the target element to observe
 * @param threshold - Visibility threshold (0-1, default 0.5). Element is considered visible when this percentage is in viewport.
 * @returns Object with `isActive` boolean and `progress` number (0-1) indicating scroll position
 *
 * @example
 * ```ts
 * const { isActive, progress } = useScrollActivation(sectionRef, 0.5);
 * // Returns { isActive: true, progress: 0.75 } when section is 75% visible
 * ```
 */
export function useScrollActivation(
  elementRef: React.RefObject<HTMLElement>,
  threshold: number = 0.5,
): { isActive: boolean; progress: number } {
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Implementation details
  }, [elementRef, threshold]);

  return { isActive, progress };
}
````

---

## ✅ Checklist Before Submitting

- [ ] **Description exists** - Brief 1-2 sentence explanation of what the function does
- [ ] **Description ends with period** - All descriptions end with `.`
- [ ] **All parameters documented** - Each `@param` has a description
- [ ] **Parameter details included** - Units (px, ms), ranges, or constraints mentioned when relevant
- [ ] **`@returns` present** - Return value is described
- [ ] **`@example` provided** - At least one realistic usage example
- [ ] **Example is executable** - Code in example can actually run
- [ ] **Example has comment** - Shows expected output or result as comment
- [ ] **Function is exported** - All documented functions are `export`
- [ ] **In correct location** - Function is in `src/hooks/`, `src/components/**/utils.ts`, or `src/lib/`
- [ ] **Code formatting matches** - Follows project's TypeScript style guide
