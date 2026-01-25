# BackgroundContext

## Overview

The `BackgroundContext` is a React context that manages state and interactions related to background content (academic education and professional experiences) organized by year. It provides navigation functionalities, filtering by year, and item color management.

## Location

- **File**: [src/contexts/BackgroundContext.tsx](src/contexts/BackgroundContext.tsx)
- **Dependencies**:
  - `@/background-data` - Content data
  - `@/components/custom/ContentItem/utils` - Color utilities

## Structure

### Provider

```tsx
<BackgroundProvider initialYear={number | null}>{children}</BackgroundProvider>
```

#### Props

- `children`: ReactNode - Child components that will have access to the context
- `initialYear`: number | null (optional) - Initial year to be selected

### Access Hook

```tsx
const context = useBackground();
```

**Important**: This hook must be used only within a `BackgroundProvider`, otherwise it will throw an error.

## Context State

### Primitives

| Property          | Type           | Description                                                    |
| ----------------- | -------------- | -------------------------------------------------------------- |
| `canGoNext`       | boolean        | Indicates if it's possible to navigate to the next content     |
| `canGoPrevious`   | boolean        | Indicates if it's possible to navigate to the previous content |
| `selectedContent` | string \| null | ID of the currently selected content                           |
| `selectedYear`    | number \| null | Currently selected year                                        |

### Complex Objects

| Property         | Type                   | Description                                                 |
| ---------------- | ---------------------- | ----------------------------------------------------------- |
| `initialContent` | Background \| null     | First content of the selected year (sorted by month)        |
| `itemColors`     | Record<string, string> | Mapping of item ID to its color (with persistent cache)     |
| `yearContents`   | Background[]           | List of contents filtered by selected year, sorted by month |

## Actions/Callbacks

### setSelectedYear

```tsx
setSelectedYear: (year: number | null) => void
```

Sets the selected year. When the year changes:

1. Scroll is reset (if callback is registered)
2. The first content of the year is automatically selected

### setSelectedContent

```tsx
setSelectedContent: (contentId: string | null) => void
```

Sets the selected content by ID.

### goToNextContent

```tsx
goToNextContent: () => void
```

Navigates to the next content in the list (if `canGoNext` is `true`).

### goToPreviousContent

```tsx
goToPreviousContent: () => void
```

Navigates to the previous content in the list (if `canGoPrevious` is `true`).

### registerScrollReset

```tsx
registerScrollReset: (callback: () => void) => void
```

Registers a callback function that will be called when the year changes, allowing external components to reset their scroll position.

## Internal Logic

### Color Cache

The context maintains a persistent color cache (`colorCacheRef`) to ensure that each item maintains the same color even when the year is changed and then returned.

### Content Sorting

Contents are automatically sorted by month (from oldest to newest) when filtering by year.

### Side Effects

When `selectedYear` changes:

1. The `yearContents` list is recalculated
2. Scroll is reset (via registered callback)
3. `selectedContent` is set to the first item of the year

## Usage Example

```tsx
import {
  BackgroundProvider,
  useBackground,
} from "@/contexts/BackgroundContext";

// In root component or layout
function App() {
  return (
    <BackgroundProvider initialYear={2024}>
      <MyComponent />
    </BackgroundProvider>
  );
}

// In a child component
function MyComponent() {
  const {
    selectedYear,
    yearContents,
    selectedContent,
    canGoNext,
    canGoPrevious,
    goToNextContent,
    goToPreviousContent,
    setSelectedYear,
  } = useBackground();

  return (
    <div>
      <select
        value={selectedYear ?? ""}
        onChange={(e) => setSelectedYear(Number(e.target.value))}
      >
        {/* year options */}
      </select>

      {yearContents.map((content) => (
        <div
          key={content.id}
          className={selectedContent === content.id ? "active" : ""}
        >
          {content.title}
        </div>
      ))}

      <button disabled={!canGoPrevious} onClick={goToPreviousContent}>
        Previous
      </button>
      <button disabled={!canGoNext} onClick={goToNextContent}>
        Next
      </button>
    </div>
  );
}
```

## Data Flow

```
User selects year
    ↓
setSelectedYear(year)
    ↓
yearContents is recalculated (filtered and sorted)
    ↓
initialContent is set (first item)
    ↓
Scroll is reset (via callback)
    ↓
selectedContent is set to first item of the year
    ↓
itemColors is recalculated (with cache)
    ↓
canGoNext/canGoPrevious are updated
```

## Performance Considerations

- **useMemo**: Used for `yearContents`, `initialContent`, `itemColors`, `currentIndex`, `canGoNext`, and `canGoPrevious` to avoid unnecessary recalculations
- **useCallback**: Used for all action functions to maintain stable references
- **useRef**: Used for color cache and scroll callback to avoid unnecessary re-renders

## Technical Notes

- The context uses `"use client"` indicating it's a Client Component in Next.js
- Colors are generated using `getRandomColor()` but are cached for consistency
- The current index is calculated dynamically based on `selectedContent` and `yearContents`
- Protection against usage outside the provider through validation in the `useBackground` hook
