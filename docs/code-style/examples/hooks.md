# Hook Examples

Real hooks from the codebase demonstrating all documentation and pattern requirements.

---

## Example 1: useMediaQuery (Simple Hook)

**File**: `src/hooks/useMediaQuery.ts`

```typescript
"use client";

import { useState, useEffect } from "react";

/**
 * Hook to detect if the current viewport matches a given media query.
 *
 * @param query - The media query string to test (e.g., "(min-width: 769px)")
 * @returns A boolean indicating whether the media query matches
 *
 * @example
 * ```tsx
 * const isDesktop = useMediaQuery("(min-width: 769px)");
 * const isMobile = useMediaQuery("(max-width: 768px)");
 * 
 * return (
 *   <div>
 *     {isDesktop ? <DesktopLayout /> : <MobileLayout />}
 *   </div>
 * );
 * ```
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    
    media.addEventListener("change", listener);
    
    // Cleanup
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
```

**Key points**:
- ✓ `"use client"` directive (uses browser API)
- ✓ Named export (not default)
- ✓ Complete JSDoc with example
- ✓ Cleanup in useEffect
- ✓ Explicit return type
- ✓ Single responsibility

**Why "use client"**: Uses `useState`, `useEffect`, and `window.matchMedia` (browser API)

---

## Example 2: useScrollPadding (Returns Number)

**File**: `src/hooks/useScrollPadding.ts`

```typescript
"use client";

import { useState, useEffect } from "react";

/**
 * Calculates and returns the scroll padding based on viewport height.
 * Updates when window is resized.
 *
 * @returns The calculated padding in pixels (half of viewport height)
 *
 * @example
 * ```tsx
 * function ScrollableList() {
 *   const padding = useScrollPadding();
 *   
 *   return (
 *     <div style={{ paddingTop: padding, paddingBottom: padding }}>
 *       <List items={items} />
 *     </div>
 *   );
 * }
 * ```
 */
export function useScrollPadding(): number {
  const [padding, setPadding] = useState<number>(0);

  useEffect(() => {
    const calculatePadding = () => {
      setPadding(window.innerHeight / 2);
    };

    // Initial calculation
    calculatePadding();

    // Recalculate on resize
    window.addEventListener("resize", calculatePadding);

    // Cleanup
    return () => window.removeEventListener("resize", calculatePadding);
  }, []);

  return padding;
}
```

**Key points**:
- ✓ Returns primitive value (number)
- ✓ Handles window resize event
- ✓ Cleanup removes event listener
- ✓ Initial state: 0 (safe default)

---

## Example 3: useContentItemRefs (Returns Object)

**File**: `src/hooks/useContentItemRefs.ts`

```typescript
"use client";

import { useRef, useCallback } from "react";

interface ContentItemRefs {
  [key: string]: HTMLDivElement | null;
}

/**
 * Manages refs for multiple content items, providing a callback to set refs
 * and the current refs object.
 *
 * @returns Object containing refs map and setter callback
 *
 * @example
 * ```tsx
 * function ContentList({ items }: { items: ContentItem[] }) {
 *   const { itemRefs, setItemRef } = useContentItemRefs();
 *   
 *   return (
 *     <>
 *       {items.map(item => (
 *         <div
 *           key={item.id}
 *           ref={(el) => setItemRef(item.id, el)}
 *         >
 *           {item.title}
 *         </div>
 *       ))}
 *     </>
 *   );
 * }
 * ```
 */
export function useContentItemRefs() {
  const itemRefs = useRef<ContentItemRefs>({});

  const setItemRef = useCallback((key: string, el: HTMLDivElement | null) => {
    itemRefs.current[key] = el;
  }, []);

  return {
    itemRefs: itemRefs.current,
    setItemRef,
  };
}
```

**Key points**:
- ✓ Returns object with multiple values
- ✓ Uses `useCallback` for stable function reference
- ✓ Inline interface for ref type (small, specific)
- ✓ Example shows practical usage

---

## Example 4: useTimelineNavigation (Complex Hook)

**File**: `src/hooks/useTimelineNavigation.ts`

```typescript
"use client";

import { useCallback } from "react";

interface UseTimelineNavigationParams {
  selectedYear: number;
  setSelectedYear: (year: number) => void;
  years: number[];
  scrollToYear: (year: number) => void;
}

/**
 * Provides navigation handlers for timeline year selection.
 * Handles boundary checks and automatic scrolling.
 *
 * @param selectedYear - Currently selected year
 * @param setSelectedYear - Function to update selected year
 * @param years - Array of all available years (sorted ascending)
 * @param scrollToYear - Function to scroll to a specific year
 * @returns Object with navigation handler functions
 *
 * @example
 * ```tsx
 * function Timeline() {
 *   const [selectedYear, setSelectedYear] = useState(2024);
 *   const years = [2020, 2021, 2022, 2023, 2024];
 *   
 *   const { handleNavigateUp, handleNavigateDown } = useTimelineNavigation({
 *     selectedYear,
 *     setSelectedYear,
 *     years,
 *     scrollToYear: (year) => scrollToElement(year),
 *   });
 *   
 *   return (
 *     <>
 *       <button onClick={handleNavigateUp}>Previous</button>
 *       <button onClick={handleNavigateDown}>Next</button>
 *     </>
 *   );
 * }
 * ```
 */
export function useTimelineNavigation({
  selectedYear,
  setSelectedYear,
  years,
  scrollToYear,
}: UseTimelineNavigationParams) {
  const handleNavigateUp = useCallback(() => {
    const currentIndex = years.indexOf(selectedYear);
    if (currentIndex > 0) {
      const newYear = years[currentIndex - 1];
      setSelectedYear(newYear);
      scrollToYear(newYear);
    }
  }, [selectedYear, years, setSelectedYear, scrollToYear]);

  const handleNavigateDown = useCallback(() => {
    const currentIndex = years.indexOf(selectedYear);
    if (currentIndex < years.length - 1) {
      const newYear = years[currentIndex + 1];
      setSelectedYear(newYear);
      scrollToYear(newYear);
    }
  }, [selectedYear, years, setSelectedYear, scrollToYear]);

  return {
    handleNavigateUp,
    handleNavigateDown,
  };
}
```

**Key points**:
- ✓ Interface for parameters (complex input)
- ✓ Destructured params for clarity
- ✓ `useCallback` for stable references
- ✓ Boundary checks (don't navigate beyond array)
- ✓ Returns object with multiple handlers

---

## Common Patterns

### Pattern 1: Browser API Access
```typescript
"use client";

export function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    handleResize(); // Initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
```

### Pattern 2: Ref Management
```typescript
"use client";

export function useElementRef<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  
  const setRef = useCallback((el: T | null) => {
    ref.current = el;
  }, []);

  return [ref.current, setRef] as const;
}
```

### Pattern 3: Event Handler Hook
```typescript
"use client";

export function useClickOutside(
  ref: RefObject<HTMLElement>,
  handler: () => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler]);
}
```

---

## Validation Checklist

- [ ] File name starts with `use` (e.g., `useMediaQuery.ts`)
- [ ] Function name starts with `use` prefix
- [ ] Has `"use client"` at line 1
- [ ] Named export (not default)
- [ ] Complete JSDoc with `@param`, `@returns`, `@example`
- [ ] Explicit return type annotation
- [ ] Cleanup in `useEffect` if needed
- [ ] Dependencies array correct
- [ ] Example shows realistic usage
