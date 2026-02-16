# Hooks Reference - turma.dev

> **Complete API documentation for all custom React hooks**

## 📚 Overview

All custom hooks in this project are:
- ✅ **Client-only** (`"use client"` directive)
- ✅ **Fully documented** with JSDoc
- ✅ **Type-safe** with TypeScript
- ✅ **Performance-optimized** with useCallback/useMemo
- ✅ **Clean** with proper cleanup in useEffect

## 🎣 Hook Index

| Hook | Purpose | File Location |
|------|---------|---------------|
| **useBackgroundContext** | Access timeline global state | `src/contexts/BackgroundContext.tsx` |
| **useMediaQuery** | Responsive breakpoint detection | `src/hooks/useMediaQuery.ts` |
| **useScrollActivation** | Auto-select content on scroll | `src/hooks/useScrollActivation.ts` |
| **useScrollPadding** | Dynamic scroll container padding | `src/hooks/useScrollPadding.ts` |
| **useTimelineBlackBorder** | Timeline indicator positioning | `src/hooks/useTimelineBlackBorder.ts` |
| **useTimelineNavigation** | Timeline navigation logic | `src/hooks/useTimelineNavigation.ts` |
| **useContentItemRefs** | Ref management for lists | `src/hooks/useContentItemRefs.ts` |

---

## 🌐 useBackgroundContext

**File:** `src/contexts/BackgroundContext.tsx`

### Description
Access the global timeline state managed by BackgroundContext. This hook provides access to selected year, selected content, navigation functions, and all timeline-related state.

### Signature
```typescript
function useBackgroundContext(): BackgroundContextValue
```

### Returns
```typescript
interface BackgroundContextValue {
  selectedContent: string | null;
  selectedYear: number | null;
  yearContents: Background[];
  itemColors: Record<string, string>;
  years: number[];
  canGoNext: boolean;
  canGoPrevious: boolean;
  setSelectedContent: (id: string | null) => void;
  setSelectedYear: (year: number) => void;
  goToNextContent: () => void;
  goToPreviousContent: () => void;
  registerScrollReset: (callback: () => void) => void;
  registerTimelineNavigation: (handlers: NavigationHandlers) => void;
}
```

### State Properties

| Property | Type | Description |
|----------|------|-------------|
| `selectedContent` | `string \| null` | ID of currently selected content item |
| `selectedYear` | `number \| null` | Currently selected year |
| `yearContents` | `Background[]` | Content items for selected year (sorted by month) |
| `itemColors` | `Record<string, string>` | Cached color assignments for items |
| `years` | `number[]` | All available years (sorted ascending) |
| `canGoNext` | `boolean` | Whether next content navigation is available |
| `canGoPrevious` | `boolean` | Whether previous content navigation is available |

### Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `setSelectedContent` | `(id: string \| null) => void` | Update selected content item |
| `setSelectedYear` | `(year: number) => void` | Change selected year (triggers scroll reset) |
| `goToNextContent` | `() => void` | Navigate to next content item |
| `goToPreviousContent` | `() => void` | Navigate to previous content item |
| `registerScrollReset` | `(callback: () => void) => void` | Register callback for year changes |
| `registerTimelineNavigation` | `(handlers: NavigationHandlers) => void` | Register timeline nav handlers |

### Usage Example
```tsx
"use client";

import { useBackgroundContext } from "@/contexts/BackgroundContext";

export function MyComponent() {
  const {
    selectedYear,
    yearContents,
    setSelectedYear,
    canGoNext,
    goToNextContent
  } = useBackgroundContext();

  return (
    <div>
      <h2>Year: {selectedYear}</h2>
      <p>Items: {yearContents.length}</p>
      <button onClick={() => setSelectedYear(2024)}>
        Go to 2024
      </button>
      {canGoNext && (
        <button onClick={goToNextContent}>
          Next Content
        </button>
      )}
    </div>
  );
}
```

### Error Handling
Throws error if used outside of BackgroundProvider:
```typescript
if (!context) {
  throw new Error(
    "useBackgroundContext must be used within a BackgroundProvider"
  );
}
```

---

## 📱 useMediaQuery

**File:** `src/hooks/useMediaQuery.ts`

### Description
Hook to detect if the current viewport matches a given media query. Useful for responsive design and conditional rendering based on screen size.

### Signature
```typescript
function useMediaQuery(query: string): boolean
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | `string` | ✅ Yes | The media query string to test (e.g., "(min-width: 769px)") |

### Returns
`boolean` - True if the media query matches, false otherwise

### Usage Example
```tsx
"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";

export function ResponsiveComponent() {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1024px)");

  return (
    <div>
      {isDesktop && <DesktopLayout />}
      {isMobile && <MobileLayout />}
      {isTablet && <TabletLayout />}
    </div>
  );
}
```

### Implementation Details
- Uses `window.matchMedia()` API
- Adds change event listener for dynamic updates
- Handles server-side rendering (returns `false` if window undefined)
- Cleans up event listeners on unmount

### Common Queries
```typescript
// Desktop breakpoint (used throughout the app)
const isDesktop = useMediaQuery("(min-width: 769px)");

// Mobile
const isMobile = useMediaQuery("(max-width: 768px)");

// Tablet range
const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1024px)");

// Portrait orientation
const isPortrait = useMediaQuery("(orientation: portrait)");

// Prefers dark mode
const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
```

---

## 🖱️ useScrollActivation

**File:** `src/hooks/useScrollActivation.ts`

### Description
Hook to automatically select content items based on scroll position. Detects which item is closest to the top of the viewport and updates the selected content accordingly.

### Signature
```typescript
function useScrollActivation(
  itemRefs: Record<string, HTMLElement | null>,
  onItemActivated: (itemId: string) => void
): void
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `itemRefs` | `Record<string, HTMLElement \| null>` | ✅ Yes | Object mapping item IDs to their DOM elements |
| `onItemActivated` | `(itemId: string) => void` | ✅ Yes | Callback when an item becomes active |

### Returns
`void` - Side effect hook only

### Usage Example
```tsx
"use client";

import { useScrollActivation } from "@/hooks/useScrollActivation";
import { useContentItemRefs } from "@/hooks/useContentItemRefs";
import { useBackgroundContext } from "@/contexts/BackgroundContext";

export function ContentArea() {
  const { yearContents, setSelectedContent } = useBackgroundContext();
  const [setRef, refs] = useContentItemRefs(yearContents);

  useScrollActivation(refs, setSelectedContent);

  return (
    <div className="overflow-auto">
      {yearContents.map(item => (
        <div key={item.id} ref={setRef(item.id)}>
          {item.title}
        </div>
      ))}
    </div>
  );
}
```

### Implementation Details
- Uses **5px threshold** for activation detection
- Checks distance from element top to viewport top
- Activates item when within threshold
- Debounced via scroll event listener
- Cleans up listener on unmount

### Algorithm
```typescript
const isNearTop = Math.abs(rect.top - topThreshold) <= 5;
```

Where:
- `rect.top` - Element's distance from viewport top
- `topThreshold` - Target scroll position (typically top of viewport)
- `5` - Pixel threshold for matching

---

## 📏 useScrollPadding

**File:** `src/hooks/useScrollPadding.ts`

### Description
Hook to calculate dynamic bottom padding for scroll containers based on the total height of content items. Ensures smooth scrolling to the last item by adding appropriate padding.

### Signature
```typescript
function useScrollPadding(
  itemRefs: Record<string, HTMLElement | null>,
  containerRef: RefObject<HTMLElement>
): number
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `itemRefs` | `Record<string, HTMLElement \| null>` | ✅ Yes | Object mapping item IDs to DOM elements |
| `containerRef` | `RefObject<HTMLElement>` | ✅ Yes | Ref to the scroll container element |

### Returns
`number` - Bottom padding value in pixels

### Usage Example
```tsx
"use client";

import { useRef } from "react";
import { useScrollPadding } from "@/hooks/useScrollPadding";
import { useContentItemRefs } from "@/hooks/useContentItemRefs";

export function ContentArea({ items }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [setRef, refs] = useContentItemRefs(items);
  const paddingBottom = useScrollPadding(refs, containerRef);

  return (
    <div ref={containerRef} className="overflow-auto">
      <div style={{ paddingBottom }}>
        {items.map(item => (
          <div key={item.id} ref={setRef(item.id)}>
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Implementation Details
- Uses **ResizeObserver** to monitor item size changes
- Calculates total height of all items
- Subtracts container height from total
- Returns difference as padding
- Disconnects observer on unmount

### Calculation Logic
```typescript
const totalItemsHeight = sum(itemHeights);
const containerHeight = container.clientHeight;
const padding = Math.max(0, totalItemsHeight - containerHeight);
```

---

## 🎯 useTimelineBlackBorder

**File:** `src/hooks/useTimelineBlackBorder.ts`

### Description
Hook to calculate the position and visibility of the timeline's black border indicator. The indicator shows which year is currently selected.

### Signature
```typescript
function useTimelineBlackBorder(
  selectedYear: number | null,
  years: number[]
): { translation: number; isVisible: boolean }
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `selectedYear` | `number \| null` | ✅ Yes | Currently selected year |
| `years` | `number[]` | ✅ Yes | Array of all available years (sorted) |

### Returns
```typescript
{
  translation: number;  // Y-axis translation in pixels
  isVisible: boolean;   // Whether indicator should be shown
}
```

### Usage Example
```tsx
"use client";

import { useTimelineBlackBorder } from "@/hooks/useTimelineBlackBorder";
import { useBackgroundContext } from "@/contexts/BackgroundContext";

export function BlackBorder() {
  const { selectedYear, years } = useBackgroundContext();
  const { translation, isVisible } = useTimelineBlackBorder(
    selectedYear,
    years
  );

  if (!isVisible) return null;

  return (
    <div
      className="absolute w-1 h-12 bg-black"
      style={{
        transform: `translateY(${translation}px)`,
        transition: "transform 0.3s ease",
      }}
    />
  );
}
```

### Implementation Details
- Calculates index of selected year in years array
- Uses button height (48px) and gap (8px) for positioning
- Formula: `index * (HEIGHT + GAP)`
- Returns `isVisible: false` if selectedYear is null

### Constants
```typescript
const YEAR_BUTTON_HEIGHT = 48; // pixels
const YEAR_BUTTON_GAP = 8;     // pixels
```

---

## 🧭 useTimelineNavigation

**File:** `src/hooks/useTimelineNavigation.ts`

### Description
Hook to manage timeline navigation button handlers (Previous, Next, All). Registers navigation handlers with the context and provides them to timeline navigation components.

### Signature
```typescript
function useTimelineNavigation(
  context: BackgroundContextValue
): void
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `context` | `BackgroundContextValue` | ✅ Yes | The background context value |

### Returns
`void` - Side effect hook only (registers handlers via context)

### Usage Example
```tsx
"use client";

import { useTimelineNavigation } from "@/hooks/useTimelineNavigation";
import { useBackgroundContext } from "@/contexts/BackgroundContext";

export function TimelineNavButtons() {
  const context = useBackgroundContext();
  
  // Registers navigation handlers
  useTimelineNavigation(context);

  // Handlers are now available via context.registerTimelineNavigation
  return (
    <div>
      <button onClick={() => context.goToPreviousContent()}>
        Previous
      </button>
      <button onClick={() => context.goToNextContent()}>
        Next
      </button>
    </div>
  );
}
```

### Implementation Details
- Uses `registerTimelineNavigation` from context
- Provides handlers for:
  - **goUp**: Navigate to previous content
  - **goDown**: Navigate to next content
  - **goToAll**: Return to full timeline view
- Handlers are memoized with useCallback
- Re-registers when context values change

---

## 📝 useContentItemRefs

**File:** `src/hooks/useContentItemRefs.ts`

### Description
Hook to manage refs for a list of content items. Creates stable ref callback functions that can be used to attach refs to dynamic list items.

### Signature
```typescript
function useContentItemRefs<T extends { id: string }>(
  items: T[]
): [
  (id: string) => (element: HTMLElement | null) => void,
  Record<string, HTMLElement | null>
]
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `items` | `T extends { id: string }[]` | ✅ Yes | Array of items with unique `id` property |

### Returns
Tuple of:
1. `setRef` - Function that creates ref callbacks: `(id: string) => (element) => void`
2. `refs` - Object containing all current refs: `Record<string, HTMLElement | null>`

### Usage Example
```tsx
"use client";

import { useContentItemRefs } from "@/hooks/useContentItemRefs";

export function ContentList({ items }) {
  const [setRef, refs] = useContentItemRefs(items);

  // Use refs in other hooks
  const paddingBottom = useScrollPadding(refs, containerRef);
  useScrollActivation(refs, handleActivate);

  return (
    <div>
      {items.map(item => (
        <div key={item.id} ref={setRef(item.id)}>
          {item.title}
        </div>
      ))}
    </div>
  );
}
```

### Implementation Details
- Maintains refs in a mutable ref object
- Cleans up refs for removed items
- Creates stable callback functions with useCallback
- Prevents unnecessary re-renders
- Thread-safe ref updates

### Advanced Usage
```tsx
// Access individual ref
const element = refs[itemId];
if (element) {
  element.scrollIntoView({ behavior: "smooth" });
}

// Get all refs
Object.values(refs).forEach(el => {
  if (el) console.log(el.offsetHeight);
});
```

---

## 🔧 Hook Combination Patterns

### Pattern 1: Content Area with Scroll Features
```tsx
function ContentArea() {
  const context = useBackgroundContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const [setRef, refs] = useContentItemRefs(context.yearContents);
  
  const paddingBottom = useScrollPadding(refs, containerRef);
  useScrollActivation(refs, context.setSelectedContent);

  return (
    <div ref={containerRef} style={{ paddingBottom }}>
      {context.yearContents.map(item => (
        <div key={item.id} ref={setRef(item.id)}>
          {/* content */}
        </div>
      ))}
    </div>
  );
}
```

### Pattern 2: Responsive Timeline Navigation
```tsx
function TimelineNav() {
  const context = useBackgroundContext();
  const isDesktop = useMediaQuery("(min-width: 769px)");
  
  useTimelineNavigation(context);

  return isDesktop ? (
    <TimelineNavButtonsDesktop />
  ) : (
    <TimelineNavButtonsMobile />
  );
}
```

### Pattern 3: Black Border Indicator
```tsx
function BlackBorder() {
  const { selectedYear, years } = useBackgroundContext();
  const { translation, isVisible } = useTimelineBlackBorder(
    selectedYear,
    years
  );

  return (
    <div
      style={{
        transform: `translateY(${translation}px)`,
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
}
```

---

## 🎯 Best Practices

### ✅ DO
- Always use hooks in client components (`"use client"`)
- Clean up event listeners and observers
- Use useCallback for event handlers
- Use useMemo for expensive calculations
- Add proper TypeScript types
- Write comprehensive JSDoc documentation
- Handle edge cases (null, undefined, empty arrays)

### ❌ DON'T
- Don't use hooks in server components
- Don't forget cleanup in useEffect
- Don't create new functions in render
- Don't mutate state directly
- Don't skip dependency arrays
- Don't use hooks conditionally

---

**Last Updated:** 2026-02-16  
**For:** AI Agents working on turma.dev hooks
