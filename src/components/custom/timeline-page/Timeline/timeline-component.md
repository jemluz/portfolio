# Timeline Component - Implementation Summary

## Overview

The Timeline component is an interactive year selection interface with a smooth animated indicator bar that tracks the selected year, even when scrolling through the list.

## Architecture & Key Features

### 1. **Core State Management**

- **`selectedYear`**: Tracks which year is currently selected (initialized to first year in array)
- **`blackBorderYTranslation`**: Controls the vertical position of the indicator bar (the black one)
- **`showBar`**: Controls visibility of the indicator bar (opacity toggle)
- **`itemRefs`**: Map of refs to track DOM elements for visibility detection

### 2. **Scroll Behavior - Inverted Translation**

**Problem Solved**: When scrolling the ScrollArea, the indicator bar needed to move in the _opposite_ direction to maintain visual alignment with the selected year.

**Solution**:

```
translation = base - scrollTop
```

- `base` = selected year index × 36px (year height)
- `scrollTop` = current scroll position
- By subtracting `scrollTop`, when user scrolls DOWN (+scrollTop), the bar moves UP (−translation)

This creates the effect of the bar "staying with" the selected item as the user scrolls.

### 3. **Visibility Detection & Animations**

**Problem Solved**: The indicator bar should only be visible when the selected year is within the viewport boundaries.

**Solution - `updateBarVisibility()` Function**:

- Uses `getBoundingClientRect()` to compare:
  - Viewport bounds: `viewportRef.getBoundingClientRect()`
  - Item bounds: `itemRefs.current[selectedYear].getBoundingClientRect()`
- Calculates visibility: `isVisible = item.bottom > viewport.top && item.top < viewport.bottom`
- Sets `showBar(isVisible)` to trigger opacity transitions

### 4. **Performance Optimizations**

- **Memoized Callbacks**: `changeSelectedYear()` uses `useCallback` to prevent unnecessary re-renders
- **Extracted Functions**:
  - `calculateBlackBorderTranslation()` - Pure function for position calculation
  - `updateBarVisibility()` - Reusable visibility check logic
  - `handleViewportScroll()` - Scroll handler aggregator
- **No Inline Calculations**: Complex logic moved to named functions for clarity and reusability

### 5. **Indicator Bar Animation**

The bar uses Tailwind CSS transitions for smooth movement:

```tsx
transition-transform duration-300 ease-out
transition-opacity duration-200
```

- Transform changes are animated smoothly over 300ms
- Opacity changes (visibility) fade over 200ms
- Uses `ease-out` for natural deceleration on position changes

### 6. **Components Structure**

#### **Timeline** (Main Component)

- Manages state and scroll coordination
- Renders `ScrollArea` with year items
- Renders the indicator bar

#### **YearButton** (Year Item)

- Individual year selector
- Shows/hides circle marker based on selection state
- Background color changes when selected (`bg-accent-50`)
- Transition animations for visual feedback

#### **LeftCircle** (Selection Indicator)

- Animated circle marker that appears next to selected year
- Scales from 0 to 100% with opacity transition
- Positioned absolutely with higher z-index

### 7. **Data Flow**

```
ScrollArea Events
    ↓
handleViewportScroll()
    ├→ Calculate translation (base - scrollTop)
    ├→ Update bar position
    └→ updateBarVisibility()
         └→ setShowBar(isVisible)

User Click on Year
    ↓
changeSelectedYear()
    ├→ setSelectedYear(year)
    ├→ useEffect triggers
         ├→ Recalculate translation
         └→ updateBarVisibility()
```

## Technical Decisions & Trade-offs

### Why Inverted Scroll (base - scrollTop)?

- **Maintains alignment**: Bar visually stays with the year item as viewport scrolls
- **Intuitive UX**: User sees the bar "follow" their selection
- **Alternative rejected**: Fixed position would break out of ScrollArea context

### Why Using Refs Instead of State Array?

- **Performance**: Avoids recreating arrays on every render
- **Direct DOM Access**: Enables getBoundingClientRect() for accurate positioning
- **Memory Efficient**: Refs are mutable without triggering re-renders

### Why Separate updateBarVisibility()?

- **DRY Principle**: Logic used in both useEffect and scroll handler
- **Testability**: Isolated function easier to unit test
- **Maintainability**: Single source of truth for visibility logic

## Key Animations

### 1. **Year Item Selection**

- Background transitions to `bg-accent-50` over 300ms
- Circle marker scales from 0 to 1 with fade-in

### 2. **Indicator Bar Movement**

- Smooth translateY animation following scroll and selection changes
- Opacity fade when item exits viewport

### 3. **Scroll Parallax Effect**

- Bar moves inverse to scroll direction
- Creates optical illusion of "sticking" to the selected year

## Files

1. **`src/components/custom/Timeline/index.tsx`** (Main Component)
   - Scroll coordination
   - State management
   - Visibility detection

2. **`src/components/ui/scroll-area.tsx`** (Enhanced ScrollArea)
   - Added `viewportRef` prop for ref attachment
   - Added `onViewportScroll` prop for scroll event handling

3. **`src/app/background/page.view.tsx`** (Integration Point)
   - Extracts unique years from contentData
   - Passes to Timeline component

## Future Enhancement Opportunities

1. **Sticky Mode**: Keep year fixed when scrolling out of viewport
2. **Keyboard Navigation**: Arrow keys to select years
3. **Smooth Scroll**: Auto-scroll to selected year on initial render
4. **Content Integration**: Display year details in adjacent panel
5. **Mobile Touch**: Swipe gestures for year selection

---

**Last Updated**: December 4, 2025  
**Version**: 1.0  
**Status**: Production Ready ✅
