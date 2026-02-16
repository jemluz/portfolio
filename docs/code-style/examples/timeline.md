# Timeline Component - Complete Example

Real component from the codebase demonstrating all code style rules.

---

## Directory Structure

```
src/components/custom/Timeline/
├── index.tsx                         # Barrel exports (public API)
├── Timeline.tsx                      # Main component
├── YearButton.tsx                    # Internal subcomponent
├── YearBtnLeftBullet.tsx            # Internal subcomponent
├── BlackBorder.tsx                   # Internal subcomponent
├── TimelineNavButtonsDesktop.tsx    # Public subcomponent
├── TimelineNavButtonsMobile.tsx     # Public subcomponent
├── timeline.types.ts                # Type definitions
├── timeline.utils.ts                # Utility functions
└── styles.css                       # Component styles
```

---

## File 1: timeline.types.ts

```typescript
export interface TimelineProps {
  // No props passed - component uses context
}

export type YearData = {
  year: number;
  items: ContentItem[];
};

export interface TimelineRefs {
  [year: number]: HTMLDivElement | null;
}

export enum ScrollDirection {
  UP = "up",
  DOWN = "down",
  NONE = "none",
}
```

**Key points**:
- ✓ Named exports only
- ✓ `TimelineProps` interface for component
- ✓ Union types for complex data shapes
- ✓ Enum with SCREAMING_SNAKE_CASE keys

---

## File 2: timeline.utils.ts

```typescript
// Constants at top
export const YEAR_BUTTON_HEIGHT = 48;
export const SCROLL_DEBOUNCE_MS = 100;
export const ANIMATION_DURATION_MS = 300;

/**
 * Calculates the active year based on scroll position
 *
 * @param scrollTop - Current scroll position in pixels
 * @param refs - Map of year to HTML element references
 * @param years - Array of available years (sorted ascending)
 * @returns The year that should be currently active
 *
 * @example
 * ```ts
 * const active = calculateActiveYear(150, yearRefs, [2020, 2021, 2022]);
 * // returns 2021 (assuming that year is at scroll position 150px)
 * ```
 */
export function calculateActiveYear(
  scrollTop: number,
  refs: Record<number, HTMLDivElement | null>,
  years: number[]
): number {
  // Find year closest to scroll position
  let closestYear = years[0];
  let minDistance = Infinity;

  years.forEach(year => {
    const element = refs[year];
    if (element) {
      const distance = Math.abs(element.offsetTop - scrollTop);
      if (distance < minDistance) {
        minDistance = distance;
        closestYear = year;
      }
    }
  });

  return closestYear;
}

/**
 * Calculates the Y translation for the black border indicator
 *
 * @param selectedYear - Currently selected year
 * @param years - Array of all years
 * @returns Y translation in pixels
 *
 * @example
 * ```ts
 * const translation = calculateBorderPosition(2021, [2020, 2021, 2022]);
 * // returns 48 (1 * YEAR_BUTTON_HEIGHT)
 * ```
 */
export function calculateBorderPosition(
  selectedYear: number,
  years: number[]
): number {
  const index = years.indexOf(selectedYear);
  return index * YEAR_BUTTON_HEIGHT;
}
```

**Key points**:
- ✓ Constants at top with SCREAMING_SNAKE_CASE (ver [`03-utils.md#constants`](../file-types/03-utils.md#constants))
- ✓ Complete JSDoc with @param, @returns, @example
- ✓ Pure functions (no side effects)
- ✓ Named exports

---

## File 3: Timeline.tsx (Main Component)

```tsx
"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useCallback, useEffect, useRef } from "react";
import { useBackground } from "@/contexts/BackgroundContext";
import { useTimelineBlackBorder } from "@/hooks/useTimelineBlackBorder";
import { useTimelineNavigation } from "@/hooks/useTimelineNavigation";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import YearButton from "./YearButton";
import BlackBorder from "./BlackBorder";
import TimelineNavButtonsDesktop from "./TimelineNavButtonsDesktop";
import "./styles.css";

export default function Timeline() {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const { selectedYear, setSelectedYear, years } = useBackground();
  const scrollViewportRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const scrollToYear = useCallback((year: number) => {
    const element = itemRefs.current[year];
    if (element && scrollViewportRef.current) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  const { blackBorderYTranslation, showBar } = useTimelineBlackBorder({
    selectedYear,
    years,
    scrollViewportRef,
    itemRefs,
  });

  const { handleNavigateUp, handleNavigateDown } = useTimelineNavigation({
    selectedYear,
    setSelectedYear,
    years,
    scrollToYear,
  });

  return (
    <div className="timeline-wrapper">
      {isDesktop && (
        <TimelineNavButtonsDesktop
          onNavigateUp={handleNavigateUp}
          onNavigateDown={handleNavigateDown}
        />
      )}
      <ScrollArea>
        <div className="timeline-content" ref={scrollViewportRef}>
          {years.map((year) => (
            <YearButton
              key={year}
              year={year}
              isSelected={year === selectedYear}
              ref={(el) => (itemRefs.current[year] = el)}
            />
          ))}
        </div>
        {showBar && (
          <BlackBorder translateY={blackBorderYTranslation} />
        )}
      </ScrollArea>
    </div>
  );
}
```

**Key points**:
- ✓ `"use client"` at line 1 (uses hooks)
- ✓ Imports ordered correctly
- ✓ Uses custom hooks for logic separation
- ✓ Default export
- ✓ No inline logic - delegated to hooks/utils

---

## File 4: YearButton.tsx (Subcomponent - Internal)

```tsx
import { memo, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface YearButtonProps {
  year: number;
  isSelected: boolean;
}

const YearButton = memo(forwardRef<HTMLDivElement, YearButtonProps>(
  ({ year, isSelected }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "year-button",
          isSelected && "year-button--selected"
        )}
      >
        <span>{year}</span>
      </div>
    );
  }
));

YearButton.displayName = "YearButton";

export default YearButton;
```

**Key points**:
- ✗ NO "use client" (presentational only)
- ✓ Props interface inline (small subcomponent)
- ✓ Uses `memo` for performance
- ✓ `forwardRef` to accept ref from parent
- ✓ Default export

---

## File 5: index.tsx (Barrel Export)

```tsx
export { default as Timeline } from "./Timeline";
export { default as TimelineNavButtonsMobile } from "./TimelineNavButtonsMobile";
export { default as TimelineNavButtonsDesktop } from "./TimelineNavButtonsDesktop";

// Internal components NOT exported:
// - YearButton
// - YearBtnLeftBullet
// - BlackBorder
```

**Key points**:
- ✓ Exports only public API
- ✓ Main component + public subcomponents
- ✓ Internal components not exposed
- ✓ Comment explains what's private

---

## Analysis

### ✓ Follows all rules:
1. **File organization**: Separate files for types, utils, components
2. **"use client"**: Only on Timeline.tsx (uses hooks)
3. **Imports**: Correct order, uses `@/` alias
4. **Constants**: In utils file with SCREAMING_SNAKE_CASE
5. **JSDoc**: Complete documentation for utils
6. **Types**: In separate .types.ts file
7. **Exports**: Barrel export for public API

### Component hierarchy:
```
Timeline (client component - uses hooks)
├─ TimelineNavButtonsDesktop (exported, public)
├─ TimelineNavButtonsMobile (exported, public)
├─ YearButton (internal, not exported)
├─ BlackBorder (internal, not exported)
└─ YearBtnLeftBullet (internal, not exported)
```

---

## Usage Example

```tsx
// In parent component
import { Timeline } from "@/components/custom/Timeline";

export default function Page() {
  return (
    <div>
      <Timeline />
    </div>
  );
}
```
