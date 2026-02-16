# Architecture Reference - turma.dev

> **Deep dive into the system architecture and design patterns**

## 🏛️ System Architecture

### High-Level Overview

```
┌─────────────────────────────────────────────────────────────┐
│                         User Browser                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Next.js Middleware                        │
│                  (Theme Persistence)                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      Next.js App Router                      │
│  ┌───────────────────────────────────────────────────────┐  │
│  │              Root Layout (layout.tsx)                 │  │
│  │  - ThemeProvider                                      │  │
│  │  - Font Configuration                                 │  │
│  │  - Global Styles                                      │  │
│  └───────────────────────────────────────────────────────┘  │
│                              │                               │
│  ┌───────────────────────────┴──────────────────────────┐   │
│  │                                                       │   │
│  ▼                                                       ▼   │
│  Home Page                                    Background Page│
│  (Landing)                                    (Timeline App) │
│                                                ┌──────────┐  │
│                                                │ Provider │  │
│                                                │ Wrapper  │  │
│                                                └──────────┘  │
│                                                     │        │
│                                   ┌─────────────────┼────────┴───────┐
│                                   │                 │                │
│                                   ▼                 ▼                ▼
│                              UserInfo          Timeline       ContentArea
└─────────────────────────────────────────────────────────────────────────┘
                                   │                 │                │
                                   └─────────────────┼────────────────┘
                                                     │
                                                     ▼
                                          ┌──────────────────┐
                                          │BackgroundContext │
                                          │  (Global State)  │
                                          └──────────────────┘
```

## 🔄 Data Flow Architecture

### State Management Flow

```
User Action (Click/Scroll)
         │
         ▼
Component Event Handler
         │
         ▼
Context Action (setSelectedYear, setSelectedContent)
         │
         ▼
BackgroundContext Updates State
         │
         ├──► Derived State Calculation (yearContents, canGoNext, etc.)
         │
         ▼
Context Subscribers Re-render
         │
         ├──► Timeline Components (BlackBorder position)
         ├──► ContentArea Components (Display items)
         └──► UserInfo Components (Navigation buttons)
```

### Hook Integration Flow

```
Component Mount
      │
      ▼
Custom Hook Initialization
      │
      ├──► useMediaQuery → Responsive breakpoint detection
      │
      ├──► useScrollActivation → Auto-select on scroll
      │         │
      │         └──► Calls context.setSelectedContent()
      │
      ├──► useTimelineBlackBorder → Calculate indicator position
      │         │
      │         └──► Reads context.selectedYear
      │
      ├──► useTimelineNavigation → Setup nav handlers
      │         │
      │         └──► Registers with context.registerTimelineNavigation()
      │
      └──► useScrollPadding → Calculate dynamic padding
                │
                └──► Uses ResizeObserver on content items
```

## 🗂️ Component Architecture

### Component Hierarchy

```
BackgroundPage
├── BackgroundProvider (Context)
│   └── BackgroundPageView
│       ├── UserInfoDesktop (>769px)
│       │   ├── AvatarAndName
│       │   ├── GoToSection
│       │   └── TimelineNavButtonsDesktop
│       │
│       ├── UserInfoMobile (≤769px)
│       │   ├── AvatarAndName
│       │   └── TimelineNavButtonsMobile
│       │
│       ├── Timeline
│       │   ├── ScrollArea (Radix)
│       │   │   └── YearButton[] (1997-2025)
│       │   │
│       │   └── BlackBorder (Indicator)
│       │
│       └── ContentArea
│           ├── ScrollArea (Radix)
│           │   └── ContentList
│           │       └── ContentItem[]
│           │           ├── DurationInfo
│           │           ├── LocationInfo
│           │           └── ProjectList
│           │
│           └── GoToSection (Mobile only)
```

### Component Responsibilities

| Component              | Responsibility                              | State Source                 |
| ---------------------- | ------------------------------------------- | ---------------------------- |
| **BackgroundProvider** | Manages global timeline state               | Internal (useState)          |
| **Timeline**           | Display year buttons, handle year selection | Context (selectedYear)       |
| **BlackBorder**        | Visual indicator for selected year          | Context + Hook calculation   |
| **ContentArea**        | Display content items for selected year     | Context (yearContents)       |
| **ContentItem**        | Render individual career/project entry      | Props from parent            |
| **UserInfo**           | Show profile and navigation controls        | Context + userInfo data      |
| **TimelineNavButtons** | Previous/Next navigation                    | Context (canGoNext/Previous) |

## 🎣 Hook Architecture

### Hook Dependency Graph

```
useBackgroundContext() [Root Context Hook]
        │
        ├──► useTimelineNavigation()
        │         └──► Uses: canGoNext, canGoPrevious, goToNext, goToPrevious
        │
        ├──► useScrollActivation()
        │         ├──► Monitors scroll position
        │         └──► Calls: setSelectedContent()
        │
        ├──► useTimelineBlackBorder()
        │         ├──► Reads: selectedYear, years
        │         └──► Returns: { translation, isVisible }
        │
        ├──► useScrollPadding()
        │         ├──► Uses ResizeObserver
        │         └──► Returns: paddingBottom
        │
        ├──► useContentItemRefs()
        │         ├──► Manages refs for content items
        │         └──► Returns: [setRef, refs]
        │
        └──► useMediaQuery()
                  ├──► Monitors window.matchMedia
                  └──► Returns: boolean (matches query)
```

### Hook Execution Lifecycle

```
1. Component Mount
   └──► Custom hooks initialize
        ├──► useMediaQuery: Attach matchMedia listener
        ├──► useScrollActivation: Attach scroll listener
        ├──► useScrollPadding: Create ResizeObserver
        └──► useTimelineBlackBorder: Calculate initial position

2. State Changes (User Interaction)
   └──► Context updates trigger
        ├──► Hook re-execution with new values
        ├──► Memoized values recalculate (useMemo)
        └──► Callback references update (useCallback)

3. Component Unmount
   └──► Cleanup functions execute
        ├──► Remove event listeners
        ├──► Disconnect ResizeObserver
        └──► Clear refs
```

## 🗃️ Data Architecture

### Data Models

```typescript
// Primary Content Model
interface Background {
  id: string; // Unique identifier
  year: number; // Year (1997-2025)
  month?: number; // Month (1-12, optional)
  title: string; // Job title / Position
  description: string; // Detailed description
  location?: string; // "City, Country"
  durationInMonths?: number; // Duration
  isCurrent?: boolean; // Currently active?
  projects?: Array<{
    // Related projects
    name: string;
    url: string;
  }>;
  isInactive?: boolean; // Inactive period flag
}

// User Profile Model
interface UserInfo {
  name: string; // First name
  lastName: string; // Last name
  profilePhotoUrl: string; // Avatar URL
  urls: string[]; // Social links
}

// Context State Model
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

### Data Flow Patterns

**1. Content Loading:**

```
background-data.ts → backgroundList
                     userInfo
         │
         ▼
BackgroundContext initialization
         │
         ├──► Extract unique years
         ├──► Set initial selectedYear (latest)
         ├──► Filter yearContents
         └──► Initialize itemColors {}
```

**2. Year Selection:**

```
User clicks year button
         │
         ▼
Timeline.YearButton onClick → setSelectedYear(year)
         │
         ▼
BackgroundContext updates
         ├──► selectedYear = year
         ├──► yearContents = filter & sort by month
         ├──► selectedContent = first item
         └──► Trigger scrollReset callback
         │
         ▼
ContentArea scrolls to top
Timeline BlackBorder repositions
```

**3. Scroll-Based Selection:**

```
User scrolls ContentArea
         │
         ▼
useScrollActivation detects position
         │
         ▼
Finds item closest to top threshold (5px)
         │
         ▼
Calls setSelectedContent(itemId)
         │
         ▼
Context updates selectedContent
         │
         ▼
UI reflects active item
```

## 🎨 Styling Architecture

### CSS Organization

```
Global Styles (globals.css)
├── CSS Variables (:root, .dark)
├── Base Resets
├── Tailwind Directives (@tailwind)
└── Global Animations

Component Styles (styles.css per component)
├── Timeline/styles.css
│   ├── .timeline-year-button
│   ├── .year-button-text
│   └── .timeline-scroll-area
│
├── ContentArea/styles.css
│   ├── .content-list
│   ├── .content-item
│   └── Scroll-based animations
│
└── Background/styles.css
    ├── Page-level layout
    └── Grid configurations
```

### Theme System Architecture

```
Middleware (middleware.ts)
         │
         └──► Reads 'theme' cookie
              Sets X-Theme header
         │
         ▼
Root Layout (layout.tsx)
         │
         └──► ThemeProvider component
              ├── Attribute: "class"
              ├── DefaultTheme: "system"
              └── EnableSystem: true
         │
         ▼
Browser applies .dark class
         │
         └──► CSS Variables switch
              :root {...}
              .dark {...}
         │
         ▼
Components use CSS variables
         color: var(--foreground)
         background: var(--background)
```

### Color Assignment System

```
Content Item Rendering
         │
         ▼
Check context.itemColors[item.id]
         │
    ┌────┴────┐
    │         │
 EXISTS    NEW ITEM
    │         │
    │         ▼
    │    getRandomColor(lastColor)
    │         │
    │         ├──► Filter out lastColor
    │         ├──► Random from remaining 16
    │         └──► Cache in itemColors
    │         │
    └─────┬───┘
          │
          ▼
    Apply color classes
    ├── border-l-{color}-500
    ├── bg-{color}-50
    └── dark:bg-{color}-950
```

## 📡 Event System Architecture

### Event Flow Patterns

**1. Timeline Year Click:**

```
YearButton onClick
    └──► context.setSelectedYear(year)
         └──► Triggers scrollResetCallback
              └──► ContentArea.scrollTop = 0
```

**2. Scroll Event:**

```
ContentArea scroll event
    └──► useScrollActivation
         └──► Calculate active item
              └──► context.setSelectedContent(id)
```

**3. Navigation Buttons:**

```
TimelineNavButtons onClick
    └──► context.goToNextContent()
         └──► Find next item in yearContents
              ├──► If exists: setSelectedContent(next.id)
              │                + scroll into view
              └──► If none: (boundary - do nothing)
```

**4. Responsive Changes:**

```
Window resize
    └──► useMediaQuery
         └──► matchMedia.addEventListener('change')
              └──► Update isDesktop state
                   └──► Conditional component render
```

### Observer Patterns

**ResizeObserver (useScrollPadding):**

```
Component Mount
    └──► Create ResizeObserver
         └──► Observe all content item elements
              └──► On resize: Calculate total height
                   └──► Update paddingBottom state
                        └──► Apply to scroll container
Component Unmount
    └──► observer.disconnect()
```

**IntersectionObserver (Potential Future Use):**

```
Currently NOT used - scroll event handler used instead
Could optimize with IntersectionObserver for:
- Lazy loading content
- Viewport-based animations
- Scroll performance improvements
```

## 🔐 Type System Architecture

### Type Organization Strategy

```
Global Types (background-data.ts)
├── Background (content items)
└── UserInfo (profile data)

Component Types (*-types.ts per component)
├── timeline.types.ts
│   ├── TimelineProps
│   ├── YearButtonProps
│   └── BlackBorderProps
│
├── content-item.types.ts
│   ├── ContentItemProps
│   ├── ProjectListProps
│   └── LocationInfoProps
│
└── user-info.types.ts
    ├── UserInfoProps
    └── GoToSectionProps

Hook Types (inline or separate)
├── useMediaQuery → inline
├── useScrollActivation → inline
└── useTimelineNavigation → inline
```

## 🚀 Performance Architecture

### Optimization Strategies

**1. Memoization:**

```typescript
// Derived state memoization
const yearContents = useMemo(
  () =>
    backgroundList
      .filter((item) => item.year === selectedYear)
      .sort((a, b) => (a.month || 0) - (b.month || 0)),
  [selectedYear],
);

// Callback memoization
const handleYearClick = useCallback(
  (year: number) => {
    setSelectedYear(year);
  },
  [setSelectedYear],
);
```

**2. Ref Caching:**

```typescript
// Color assignment uses ref to avoid re-renders
const lastColorRef = useRef<string>();
const getColor = (id: string) => {
  if (itemColors[id]) return itemColors[id];
  const newColor = getRandomColor(lastColorRef.current);
  lastColorRef.current = newColor;
  setItemColors((prev) => ({ ...prev, [id]: newColor }));
  return newColor;
};
```

**3. Event Listener Optimization:**

```typescript
// Cleanup on unmount
useEffect(() => {
  const handler = () => {
    /* ... */
  };
  window.addEventListener("scroll", handler);
  return () => window.removeEventListener("scroll", handler);
}, [dependencies]);
```

### Bundle Optimization

- **Turbopack**: Fast bundling for dev and build
- **Code Splitting**: Automatic via Next.js App Router
- **Tree Shaking**: Unused code eliminated
- **Font Optimization**: Google Fonts preloaded
- **Icon Libraries**: Only imported icons included

## 🧪 Testing Considerations

### Architecture Testability

**Component Testing:**

- Components accept props for easy testing
- Context can be mocked with custom provider
- Hooks can be tested with `@testing-library/react-hooks`

**Hook Testing:**

- All hooks are pure functions
- Dependencies are explicit (useCallback/useMemo deps)
- Side effects are isolated in useEffect

**Integration Testing:**

- BackgroundContext provides single source of truth
- Navigation flows can be tested end-to-end
- Responsive behavior testable via matchMedia mocks

---

**Last Updated:** 2026-02-16  
**For:** AI Agents working on turma.dev architecture
