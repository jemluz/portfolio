---
name: add-hook
description: Add a new custom React hook to the codebase, following our conventions for structure, naming, and documentation.
---

To add a new custom React hook to our codebase, follow the guidelines below to ensure consistency in structure, naming, and documentation.

# 📌 Rules

- MUST use named export (do NOT use default export)
- MUST start with `use` prefix (React convention)
- MUST have JSDoc on function, check [`add-jsdoc` skill](../add-jsdoc/SKILL.md) for requirements
- MUST have `@example` with actual usage code
- MUST handle cleanup if necessary (use `useEffect` cleanup)
- MUST have `"use client"` directive at the top of the file, check (link here soon)
- MUST be placed in `src/hooks/` directory
- If the hook has a type that is NOT used by other files, do NOT export it (keep it private to the hook file)

---

## 🧪 Examples

### 👍 Good Example

````typescript
"use client";

import { useEffect, useState } from "react";

/**
 * Tracks whether the viewport width is below a breakpoint.
 *
 * @param breakpointPx - Width threshold in pixels (e.g., 768).
 * @returns True when the viewport is narrower than the breakpoint.
 *
 * @example
 * ```ts
 * const isMobile = useMediaQuery(768);
 * // isMobile === true when viewport is narrower than 768px
 * ```
 */
export function useMediaQuery(breakpointPx: number): boolean {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpointPx}px)`);
    const updateMatch = () => setIsMatch(mediaQuery.matches);

    updateMatch();
    mediaQuery.addEventListener("change", updateMatch);

    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, [breakpointPx]);

  return isMatch;
}
````

### 👍 Good Example (with private type)

````typescript
"use client";

import { useCallback, useEffect, useState } from "react";

// ✓ Correct: Type is NOT exported because it's only used internally
type ScrollState = {
  x: number;
  y: number;
};

/**
 * Tracks the current scroll position of the window.
 *
 * @returns Object containing x and y scroll positions in pixels.
 *
 * @example
 * ```ts
 * const { x, y } = useScrollPosition();
 * // x and y contain current scroll position
 * ```
 */
export function useScrollPosition(): ScrollState {
  const [scrollPos, setScrollPos] = useState<ScrollState>({ x: 0, y: 0 });

  const handleScroll = useCallback(() => {
    setScrollPos({ x: window.scrollX, y: window.scrollY });
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return scrollPos;
}
````

### ❌ Bad Example

```typescript
import { useEffect, useState } from "react";

export default function mediaQuery(breakpointPx) {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpointPx}px)`);
    mediaQuery.addEventListener("change", () => setIsMatch(mediaQuery.matches));
  }, []);

  return isMatch;
}
```

**Why this is wrong**:

- Missing "use client" directive at the top of the file.
- Uses default export instead of named export.
- Function name does not start with `use`.
- Missing JSDoc with `@param`, `@returns`, and `@example`.
- No explicit types for `breakpointPx` or return value.
- Effect has missing cleanup for the event listener.
- Dependencies array is empty but uses `breakpointPx`.

### ❌ Bad Example (exporting private type)

```typescript
"use client";

import { useState } from "react";

// ✗ Wrong: Type is exported but only used internally
export type CounterState = {
  count: number;
};

export function useCounter() {
  const [state, setState] = useState<CounterState>({ count: 0 });
  
  return state;
}
```

**Why this is wrong**:

- Type `CounterState` is exported (`export type`) but is only used internally by the hook.
- This clutters the public API unnecessarily.

---

## ✅ Validation Checklist

- [ ] File name starts with `use` (e.g., `useMediaQuery.ts`)
- [ ] File name MUST match hook name (e.g., `useMediaQuery.ts` for `useMediaQuery` hook)
- [ ] Function name starts with `use` prefix
- [ ] Has `"use client"` at line 1
- [ ] Named export (not default)
- [ ] Complete JSDoc with `@param`, `@returns`, `@example`
- [ ] Example in JSDoc is executable/realistic
- [ ] Explicit return type annotation
- [ ] Cleanup in `useEffect` if needed
- [ ] Dependencies array correct
- [ ] Types used only internally are NOT exported
