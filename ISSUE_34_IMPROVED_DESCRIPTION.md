# Issue #34: Background Page - Improve ContentView UX

## 🎯 Overview

This issue addressed UX problems with the content panel on the Background page, where the scrollbar and limited reading space created a confusing user experience. The solution replaced scroll-based navigation with an intuitive bullet-based navigation system.

## 📋 Original Problem

The content view had conflicting UX patterns:
- ❌ Scrollbar in a limited space created confusion
- ❌ Difficult to navigate between multiple content items per year
- ❌ No clear indication of how many items exist for a selected year
- ❌ No smooth transitions between content items

## ✅ Implementation Summary

### What Was Implemented (PR #40, merged on 2026-01-21)

The feature was successfully implemented with the following changes:

#### 1. **BackgroundContext Enhancements**
Added comprehensive state management for content selection and navigation:

**New Properties:**
- `selectedContent: string | null` - Currently displayed content ID
- `initialContent: Background | null` - Oldest content by month (auto-selected on year change)
- `yearContents: Background[]` - Filtered & sorted list of contents for selected year
- `itemColors: Record<string, string>` - Cached color assignments for each content item

**New Navigation Functions:**
- `goToNextContent()` - Navigate to next content item
- `goToPreviousContent()` - Navigate to previous content item
- `registerScrollReset()` - Register callback for scroll position reset
- `setSelectedContent()` - Directly set the selected content by ID

**Auto-initialization:**
- When year changes, automatically selects the oldest content (sorted by month)
- Resets scroll position when year changes
- Maintains color consistency across year changes using cached color map

#### 2. **Component Architecture**

**ContentArea** (`src/components/custom/ContentArea/index.tsx`)
- Simplified to be a container for ContentList and BulletList
- Displays selected year as sticky header
- Fixed height layout (290px) for consistent UX

**ContentList** (`src/components/custom/ContentList/index.tsx`)
- Displays all content items with proper visibility states
- Implements custom wheel handler for carousel-like navigation
- Manages scroll state with refs (isScrolling, lastScrollTime, accumulatedDelta)
- Auto-scrolls to selected content when changed via bullets

**BulletList** (`src/components/custom/BulletList/index.tsx`)
- Creates one bullet per content item in selected year
- Clickable bullets to directly select content
- Visual feedback: active bullets (100% opacity) vs inactive (25% opacity)
- Dual-circle design (small center dot + larger border circle)
- Only shown when year has 2+ content items

**ContentItem** (`src/components/custom/ContentItem/index.tsx`)
- Enhanced visibility states based on selection:
  - **Current content**: Full opacity (100%), colored MonthBullet
  - **Next content**: Reduced opacity (30%), grayscale MonthBullet, visible below current
  - **Previous content**: Reduced opacity (30%), grayscale MonthBullet
- Smooth CSS transitions on opacity changes (300ms)
- Dynamic padding for last item to prevent layout shifts
- ResizeObserver to maintain consistent layout

#### 3. **Advanced Scroll Behavior**

**Carousel-like Navigation** (`src/components/custom/ContentList/utils.ts`)

Custom wheel handler (`createWheelHandler`) with:
- **Delta accumulation**: Prevents accidental navigation from tiny scroll movements
- **Time-based reset**: Resets accumulator after 300ms of inactivity
- **Threshold detection**: Requires minimum 10px accumulated scroll to trigger navigation
- **Animation locking**: Prevents scroll events during 600ms smooth scroll animation
- **Bidirectional**: Scrolling down goes to next, scrolling up goes to previous

**Smooth Scrolling** (`scrollToItem` function):
- Smooth scroll animation to selected item (600ms)
- Locks during animation to prevent conflicts
- Calculates precise scroll offset based on container and target positions
- Works with both bullet clicks and wheel events

**Year Change Behavior** (`resetScroll` function):
- Instant scroll to top (no animation) when year changes
- Auto-selects first (oldest) content item
- Clears all scroll state refs

#### 4. **Visual Design Details**

**Bullet Component:**
```tsx
// Active state
- Outer circle: 4x4 (w-4 h-4) with 2px primary border
- Inner dot: 2x2 (w-2 h-2) neutral-400 background
- Opacity: 100%

// Inactive state
- Outer circle: 3x3 (w-3 h-3) with 2px primary border
- Inner dot: 1x1 (w-1 h-1) neutral-400 background
- Opacity: 25%
```

**MonthBullet Component:**
```tsx
// Active (current content)
- Colored based on itemColors (random assignment)
- Full color visibility

// Inactive (next/previous content)
- Grayscale (bg-neutral-400, border-neutral-400)
- Reduced opacity on parent ContentItem
```

**Content Transitions:**
- All opacity changes: 300ms transition
- Scroll animations: 600ms smooth behavior
- No layout shift thanks to fixed heights and dynamic padding

#### 5. **Technical Implementation Details**

**State Management Pattern:**
```tsx
// Context provides:
const {
  selectedContent,      // Current selected content ID
  yearContents,         // Filtered & sorted array
  itemColors,           // Color map for consistency
  goToNextContent,      // Navigation function
  setSelectedContent,   // Direct selection
} = useBackground();
```

**Visibility Logic:**
```tsx
const currentIndex = yearContents.findIndex(item => item.id === selectedContent);
const isNext = index > currentIndex;      // 30% opacity + grayscale
const isPrevious = index < currentIndex;  // 30% opacity + grayscale
const isCurrent = index === currentIndex; // Full opacity + colored
```

**Scroll State Management:**
```tsx
// Using refs for performance (no re-renders)
const isScrolling = useRef({ current: false });
const lastScrollTime = useRef({ current: 0 });
const accumulatedDelta = useRef({ current: 0 });
```

## 📊 Files Changed (27 total)

### Core Components Created/Modified:
1. `src/components/custom/ContentArea/index.tsx` - Container component
2. `src/components/custom/ContentList/index.tsx` - Content display with scroll handling
3. `src/components/custom/ContentList/utils.ts` - Scroll utilities
4. `src/components/custom/BulletList/index.tsx` - Bullet navigation
5. `src/components/custom/ContentItem/index.tsx` - Individual content display
6. `src/components/custom/ContentItem/types.ts` - Type definitions
7. `src/components/custom/ContentItem/utils.ts` - Utility functions
8. `src/contexts/BackgroundContext.tsx` - Enhanced state management

### Additional Changes:
- Updated pull request template
- Added/modified utility functions
- Enhanced TypeScript types
- CSS/Tailwind styling updates

## 🎨 User Experience Improvements

### Before:
- ❌ Unclear how many contents exist for a year
- ❌ Scrollbar in limited space felt cramped
- ❌ No visual indication of current position
- ❌ All contents visible simultaneously (cluttered)

### After:
- ✅ Clear bullet indicator (2 dots = 2 contents)
- ✅ One content at a time with subtle next preview (30% opacity)
- ✅ Active bullet shows current position
- ✅ Smooth animations on all transitions
- ✅ Multiple navigation methods:
  - Click on bullets for direct selection
  - Scroll wheel for sequential navigation
  - Timeline component continues to work for year selection

## 🔧 Technical Highlights

### Performance Optimizations:
1. **Ref-based state**: Scroll state managed with refs to avoid unnecessary re-renders
2. **Memoization**: `useMemo` for expensive computations (yearContents, itemColors, currentIndex)
3. **Callbacks**: `useCallback` for stable function references
4. **Cached colors**: Color assignments persist across year changes
5. **ResizeObserver**: Efficient layout updates only when needed

### Accessibility:
- Clickable buttons with proper hover states
- Semantic HTML structure
- Smooth transitions for better perception
- Keyboard-friendly (works with Timeline navigation)

### Code Quality:
- TypeScript throughout for type safety
- Well-documented utility functions with JSDoc
- Separation of concerns (utils in separate files)
- Consistent naming conventions
- Clean component composition

## 📦 Related PRs & Commits

- **PR #40**: [TURMA-00034] - Background page - Improve ContentView UX
  - Merged: 2026-01-21
  - Status: ✅ Merged
  - Commits: 2
  - Files changed: 27
  - +615 additions / -344 deletions

- **Recent commit**: `29a4331` - refactor: contentArea component (2026-01-21)
  - Further refinements to ContentArea structure

## 🚀 Future Enhancements (Not in Scope)

Potential improvements for future iterations:
- Keyboard shortcuts (arrow keys) for navigation
- Touch/swipe gestures for mobile
- Animated slide transitions (currently opacity-based)
- Accessibility improvements (ARIA labels, screen reader support)
- Performance metrics tracking
- Unit tests for scroll utilities
- E2E tests for navigation flows

## 📸 Visual Reference

The original reference image showed the desired UX with bullet navigation. The implementation successfully matches this vision with additional polish (smooth animations, preview of next content, etc.).

---

## Implementation Checklist (Completed ✅)

### Phase 1: BackgroundProvider Enhancement
- [x] Add `selectedContent` property
- [x] Add `initialContent` property (oldest by month)
- [x] Add `selectedYearContentList` (now `yearContents`)
- [x] Auto-select initial content on year change
- [x] Add navigation functions (next/previous)
- [x] Add scroll reset callback registration

### Phase 2: Content View Restructure  
- [x] Create `.content-list` component
- [x] Create `.bullet-list` component
- [x] Implement smooth content transitions
- [x] Add scroll-based navigation
- [x] Bullet click handlers

### Phase 3: ContentItem Updates
- [x] Previous content styling (reduced opacity)
- [x] Next content styling (30% opacity + grayscale)
- [x] MonthBullet grayscale for non-active items
- [x] Dynamic padding for last item

### Phase 4: Bullet List Implementation
- [x] Clickable Bullet component
- [x] Active/inactive states
- [x] Visual feedback (opacity, size)
- [x] One bullet per content item
- [x] Hide when single item

### Phase 5: Advanced Features (Added Beyond Original Spec)
- [x] Custom wheel handler with delta accumulation
- [x] Animation locking during transitions
- [x] ResizeObserver for layout consistency
- [x] Color caching across year changes
- [x] TypeScript types and interfaces
- [x] Utility functions with JSDoc
- [x] Performance optimizations (refs, memoization)

## ✨ Conclusion

This implementation successfully transforms the Background page content navigation from a confusing scroll-based system to an intuitive, carousel-like experience with bullet navigation. The solution goes beyond the original requirements by adding smooth animations, smart scroll handling, and multiple navigation methods while maintaining excellent performance and code quality.

**Status**: ✅ **FULLY IMPLEMENTED & MERGED**
