# [TURMA-00034] Background page - Improve ContentView UX

## 🎯 Problem Statement

The content panel UX was confusing due to scrollbar navigation in limited space. Multiple content items per year were difficult to navigate, with no clear indication of quantity or position.

## ✅ Solution Implemented (Merged in PR #40)

Replaced scroll-based navigation with an intuitive **bullet-based navigation system** that displays one content item at a time with smooth transitions.

---

## 📦 Implementation Details

### 1. BackgroundProvider Enhancements

**New State Properties:**
- `selectedContent` - Currently displayed content ID
- `initialContent` - Oldest content (auto-selected on year change)
- `yearContents` - Filtered & sorted content list for selected year
- `itemColors` - Cached color assignments for visual consistency

**New Functions:**
- `goToNextContent()` / `goToPreviousContent()` - Sequential navigation
- `setSelectedContent(id)` - Direct content selection
- `registerScrollReset()` - Year change reset callback

**Behavior:**
- Auto-selects oldest content (by month) when year changes
- Resets scroll position on year change
- Maintains color consistency with caching

### 2. Component Architecture

#### ContentArea
- Container for ContentList and BulletList
- Sticky year header
- Fixed height (290px) for consistent UX

#### ContentList
- Displays all content items with visibility states
- Custom wheel handler for carousel-like scroll navigation
- Delta accumulation (10px threshold) prevents accidental navigation
- Animation locking (600ms) during transitions
- Auto-scrolls to selected content

#### BulletList
- One bullet per content item (2+ items required to show)
- Clickable for direct navigation
- Active: 100% opacity, larger size
- Inactive: 25% opacity, smaller size

#### ContentItem
**Visibility States:**
- **Current**: Full opacity, colored MonthBullet
- **Next**: 30% opacity, grayscale MonthBullet, visible below current
- **Previous**: 30% opacity, grayscale MonthBullet

**Features:**
- Smooth opacity transitions (300ms)
- Dynamic padding for last item (prevents layout shifts)
- ResizeObserver for responsive layout

### 3. Advanced Scroll Behavior

**Custom Wheel Handler:**
```tsx
// Prevents accidental navigation
- Delta accumulation with 10px threshold
- Time-based reset (300ms inactivity)
- Animation locking during 600ms scroll
- Bidirectional (up = previous, down = next)
```

**Smooth Scrolling:**
- 600ms smooth animation to selected item
- Precise offset calculation
- Works with both bullets and wheel events

---

## 🎨 Visual Design

### Bullet Component
```
Active:   ⦿ (4x4 outer, 2x2 inner, 100% opacity)
Inactive: ⦾ (3x3 outer, 1x1 inner, 25% opacity)
```

### Content Transitions
- All opacity changes: 300ms
- Scroll animations: 600ms
- Fixed heights prevent layout shifts

---

## 📊 Technical Highlights

### Performance
- Ref-based scroll state (no re-renders)
- Memoized computations (`yearContents`, `itemColors`, `currentIndex`)
- Stable callbacks with `useCallback`
- Cached color assignments

### Code Quality
- TypeScript throughout
- JSDoc for utility functions
- Separation of concerns (utils in separate files)
- Consistent naming conventions

### Navigation Methods
1. **Bullet clicks** - Direct selection
2. **Scroll wheel** - Sequential navigation (carousel-like)
3. **Timeline** - Year selection (existing feature)

---

## 📦 Files Changed (27 total, PR #40)

**Core Components:**
- `src/components/custom/ContentArea/index.tsx`
- `src/components/custom/ContentList/index.tsx` + utils.ts
- `src/components/custom/BulletList/index.tsx`
- `src/components/custom/ContentItem/index.tsx` + types.ts + utils.ts
- `src/contexts/BackgroundContext.tsx`

**Stats:** +615 additions / -344 deletions

---

## 🎯 Requirements Met

**Original Requirements:**
- [x] `selectedContent` property in BackgroundProvider
- [x] `initialContent` property (oldest by month)
- [x] `selectedYearContentList` (implemented as `yearContents`)
- [x] `.content-list` div displaying ContentItem components
- [x] `.bullet-list` with bullets matching content count
- [x] Animated content transitions
- [x] Scroll changes `selectedContent`
- [x] Previous content invisible (30% opacity)
- [x] Next content visible with 30% opacity
- [x] Grayscale MonthBullet for non-active content
- [x] Clickable bullets (like Timeline)
- [x] Only active bullet highlighted

**Beyond Requirements:**
- [x] Custom wheel handler with delta accumulation
- [x] Animation locking during transitions
- [x] ResizeObserver for layout consistency
- [x] Color caching across year changes
- [x] TypeScript types and interfaces
- [x] Comprehensive utility functions
- [x] Performance optimizations

---

## 🥸 Reference

![ContentView UX Reference](https://github.com/user-attachments/assets/68ea6141-9e56-46e8-b03c-d7fdd3772b49)

The implementation successfully matches this vision with additional polish (smooth animations, next content preview, smart scroll handling).

---

## 🔗 Related PRs & Commits

- **PR #40**: [TURMA-00034] - Background page - Improve ContentView UX (✅ Merged: 2026-01-21)
- **Commit `29a4331`**: refactor: contentArea component (2026-01-21)

---

## ✨ Status

**✅ FULLY IMPLEMENTED & MERGED**

The feature successfully transforms content navigation from a confusing scroll-based system to an intuitive, carousel-like experience with multiple navigation methods, smooth animations, and excellent performance.
