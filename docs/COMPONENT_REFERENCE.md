# Component Reference - turma.dev

> **Complete API documentation for all components**

## 📦 Component Overview

This document provides detailed API documentation for all custom components in the turma.dev application.

## 📑 Table of Contents

- [Timeline Components](#timeline-components)
- [ContentArea Components](#contentarea-components)
- [UserInfo Components](#userinfo-components)
- [UI Components](#ui-components)
- [Common Components](#common-components)

---

## Timeline Components

### Timeline

**Location:** `src/components/custom/Timeline/Timeline.tsx`

Main timeline component displaying year buttons in a vertical scrollable container.

#### Props

```typescript
interface TimelineProps {
  // No props - uses BackgroundContext
}
```

#### Usage

```tsx
import { Timeline } from "@/components/custom/Timeline/Timeline";

<Timeline />;
```

#### Features

- Vertical scroll area with year buttons (1997-2025)
- Black border indicator for selected year
- Auto-scrolls to selected year on mount
- Responsive height calculations

---

### YearButton

**Location:** `src/components/custom/Timeline/YearButton.tsx`

Individual year button in the timeline.

#### Props

```typescript
interface YearButtonProps {
  year: number; // Year to display
  isSelected: boolean; // Whether this year is selected
  onClick: () => void; // Click handler
}
```

#### Usage

```tsx
<YearButton
  year={2024}
  isSelected={selectedYear === 2024}
  onClick={() => setSelectedYear(2024)}
/>
```

#### Styling

- Selected: Bold text, specific styling
- Unselected: Regular text, dimmed appearance
- Hover: Brightness change
- Dimensions: 48px height, 8px gap

---

### BlackBorder

**Location:** `src/components/custom/Timeline/BlackBorder.tsx`

Visual indicator showing the selected year position.

#### Props

```typescript
interface BlackBorderProps {
  // No props - uses useTimelineBlackBorder hook
}
```

#### Usage

```tsx
<BlackBorder />
```

#### Features

- Smooth translateY animation
- Fade in/out based on visibility
- Position calculated from selected year index
- CSS transitions for smooth movement

---

### TimelineNavButtonsDesktop

**Location:** `src/components/custom/Timeline/TimelineNavButtonsDesktop.tsx`

Navigation buttons for desktop view (Previous/Next/All).

#### Props

```typescript
interface TimelineNavButtonsDesktopProps {
  // No props - uses BackgroundContext
}
```

#### Usage

```tsx
import { useMediaQuery } from "@/hooks/useMediaQuery";

const isDesktop = useMediaQuery("(min-width: 769px)");
{
  isDesktop && <TimelineNavButtonsDesktop />;
}
```

#### Features

- Three buttons: Previous, All, Next
- Disabled states based on context.canGoNext/canGoPrevious
- Tooltip support
- Icon buttons with Phosphor icons

---

### TimelineNavButtonsMobile

**Location:** `src/components/custom/Timeline/TimelineNavButtonsMobile.tsx`

Navigation buttons for mobile view (Previous/Next).

#### Props

```typescript
interface TimelineNavButtonsMobileProps {
  // No props - uses BackgroundContext
}
```

#### Usage

```tsx
const isMobile = !useMediaQuery("(min-width: 769px)");
{
  isMobile && <TimelineNavButtonsMobile />;
}
```

#### Features

- Two buttons: Previous, Next
- Circular buttons with icons
- Disabled states
- Touch-optimized size

---

## ContentArea Components

### ContentArea

**Location:** `src/components/custom/ContentArea/ContentArea.tsx`

Main content display area showing career/project information.

#### Props

```typescript
interface ContentAreaProps {
  // No props - uses BackgroundContext
}
```

#### Usage

```tsx
<ContentArea />
```

#### Features

- Scrollable container with dynamic padding
- Auto-selects content on scroll
- Displays ContentList component
- Mobile: Shows GoToSection at bottom

---

### ContentList

**Location:** `src/components/custom/ContentArea/ContentList.tsx`

List container for content items.

#### Props

```typescript
interface ContentListProps {
  items: Background[]; // Content items to display
  setRef: (id: string) => (el: HTMLElement | null) => void; // Ref setter function
}
```

#### Usage

```tsx
const [setRef, refs] = useContentItemRefs(items);

<ContentList items={yearContents} setRef={setRef} />;
```

#### Features

- Maps items to ContentItem components
- Manages refs for scroll tracking
- Responsive layout

---

### ContentItem

**Location:** `src/components/custom/ContentArea/ContentItem.tsx`

Individual content card displaying career/project details.

#### Props

```typescript
interface ContentItemProps {
  item: Background; // Content data
  isSelected: boolean; // Whether this item is selected
  color: string; // Tailwind color name
}
```

#### Usage

```tsx
<ContentItem
  item={backgroundItem}
  isSelected={selectedContent === backgroundItem.id}
  color="blue"
/>
```

#### Features

- Colored left border (border-l-{color}-500)
- Title, description, month indicator
- Conditional rendering of DurationInfo, LocationInfo, ProjectList
- Inactive state styling
- Responsive typography

---

### DurationInfo

**Location:** `src/components/custom/ContentArea/DurationInfo.tsx`

Displays duration information for a content item.

#### Props

```typescript
interface DurationInfoProps {
  durationInMonths: number; // Duration in months
}
```

#### Usage

```tsx
<DurationInfo durationInMonths={24} />
```

#### Output Examples

- `durationInMonths: 1` → "1 mês"
- `durationInMonths: 6` → "6 meses"
- `durationInMonths: 12` → "1 ano"
- `durationInMonths: 18` → "1 ano e 6 meses"
- `durationInMonths: 24` → "2 anos"

---

### LocationInfo

**Location:** `src/components/custom/ContentArea/LocationInfo.tsx`

Displays location with icon.

#### Props

```typescript
interface LocationInfoProps {
  location: string; // Location string (e.g., "São Paulo, Brazil")
}
```

#### Usage

```tsx
<LocationInfo location="São Paulo, Brazil" />
```

#### Features

- MapPin icon from Phosphor
- Responsive text size
- Dimmed text color

---

### ProjectList

**Location:** `src/components/custom/ContentArea/ProjectList.tsx`

Displays list of related projects with links.

#### Props

```typescript
interface ProjectListProps {
  projects: Array<{
    name: string;
    url: string;
  }>;
}
```

#### Usage

```tsx
<ProjectList
  projects={[
    { name: "Project A", url: "https://example.com/a" },
    { name: "Project B", url: "https://example.com/b" },
  ]}
/>
```

#### Features

- Bullet points for each project
- External links with LinkSimple icon
- Hover effects
- Responsive text size

---

## UserInfo Components

### UserInfoDesktop

**Location:** `src/components/custom/UserInfo/UserInfoDesktop.tsx`

User profile section for desktop view.

#### Props

```typescript
interface UserInfoDesktopProps {
  userInfo: UserInfo; // User data
}
```

#### Usage

```tsx
const isDesktop = useMediaQuery("(min-width: 769px)");

{
  isDesktop && <UserInfoDesktop userInfo={userInfo} />;
}
```

#### Features

- AvatarAndName component
- GoToSection component
- TimelineNavButtonsDesktop
- Vertical layout
- Fixed positioning

---

### UserInfoMobile

**Location:** `src/components/custom/UserInfo/UserInfoMobile.tsx`

User profile section for mobile view.

#### Props

```typescript
interface UserInfoMobileProps {
  userInfo: UserInfo; // User data
}
```

#### Usage

```tsx
const isMobile = !useMediaQuery("(min-width: 769px)");

{
  isMobile && <UserInfoMobile userInfo={userInfo} />;
}
```

#### Features

- AvatarAndName component
- TimelineNavButtonsMobile
- Horizontal layout
- Sticky positioning at top

---

### AvatarAndName

**Location:** `src/components/custom/UserInfo/AvatarAndName.tsx`

Displays user avatar and name.

#### Props

```typescript
interface AvatarAndNameProps {
  userInfo: UserInfo; // User data
}
```

#### Usage

```tsx
<AvatarAndName userInfo={userInfo} />
```

#### Features

- Radix UI Avatar component
- Fallback initials if image fails
- Full name display
- Responsive sizing

---

### GoToSection

**Location:** `src/components/custom/UserInfo/GoToSection.tsx`

Section with links to user's social profiles.

#### Props

```typescript
interface GoToSectionProps {
  urls: string[]; // Array of URLs (GitHub, LinkedIn, etc.)
}
```

#### Usage

```tsx
<GoToSection
  urls={[
    "https://github.com/username",
    "https://linkedin.com/in/username",
    "https://example.com",
  ]}
/>
```

#### Features

- Icon detection from URL
  - GitHub: GithubLogo icon
  - LinkedIn: LinkedinLogo icon
  - Default: Globe icon
- External links with target="\_blank"
- Hover effects
- Responsive layout

---

## UI Components

### Button

**Location:** `src/components/ui/button.tsx`

Radix UI Button wrapper with variants.

#### Props

```typescript
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}
```

#### Usage

```tsx
<Button variant="outline" size="lg">
  Click Me
</Button>

<Button variant="ghost" size="icon">
  <Icon />
</Button>
```

---

### Avatar

**Location:** `src/components/ui/avatar.tsx`

Radix UI Avatar wrapper.

#### Props

```typescript
// AvatarImage
interface AvatarImageProps {
  src: string;
  alt: string;
}

// AvatarFallback
interface AvatarFallbackProps {
  children: ReactNode;
}
```

#### Usage

```tsx
<Avatar>
  <AvatarImage src="/avatar.jpg" alt="User" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>
```

---

### ScrollArea

**Location:** `src/components/ui/scroll-area.tsx`

Radix UI ScrollArea wrapper for custom scrollbars.

#### Props

```typescript
interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}
```

#### Usage

```tsx
<ScrollArea className="h-96">
  <div>{/* Scrollable content */}</div>
</ScrollArea>
```

---

### Tooltip

**Location:** `src/components/ui/tooltip.tsx`

Radix UI Tooltip wrapper.

#### Components

- `TooltipProvider`
- `Tooltip`
- `TooltipTrigger`
- `TooltipContent`

#### Usage

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>
      <p>Tooltip text</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

---

### DropdownMenu

**Location:** `src/components/ui/dropdown-menu.tsx`

Radix UI DropdownMenu wrapper.

#### Components

- `DropdownMenu`
- `DropdownMenuTrigger`
- `DropdownMenuContent`
- `DropdownMenuItem`
- `DropdownMenuSeparator`
- And more...

#### Usage

```tsx
<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

---

## Common Components

### ThemeProvider

**Location:** `src/components/theme-provider.tsx`

next-themes provider wrapper for theme management.

#### Props

```typescript
interface ThemeProviderProps {
  children: ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  storageKey?: string;
}
```

#### Usage

```tsx
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</ThemeProvider>
```

---

## 🎨 Styling Conventions

### Color Props

Components use Tailwind color names without the shade:

```tsx
// ✅ Correct
<ContentItem color="blue" />
// Renders: border-l-blue-500, bg-blue-50, dark:bg-blue-950

// ❌ Incorrect
<ContentItem color="blue-500" />
```

### Available Colors

```typescript
const COLORS = [
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];
```

### Responsive Patterns

```tsx
// Pattern 1: Separate components
{isDesktop ? <DesktopComponent /> : <MobileComponent />}

// Pattern 2: Conditional rendering
<div className="hidden md:block">Desktop only</div>
<div className="block md:hidden">Mobile only</div>
```

---

## 🔧 Utility Functions

### Timeline Utils

**File:** `src/components/custom/Timeline/timeline.utils.ts`

#### calculateBlackBorderTranslation

```typescript
/**
 * Calculates the Y translation for the black border indicator.
 */
function calculateBlackBorderTranslation(
  selectedYear: number | null,
  years: number[],
): number;
```

---

### Content Utils

**File:** `src/components/custom/ContentArea/colors.utils.ts`

#### getRandomColor

```typescript
/**
 * Gets a random color from available Tailwind colors.
 * Avoids repeating the last color used.
 */
function getRandomColor(lastColor?: string): string;
```

**File:** `src/components/custom/ContentArea/month-bullet.utils.ts`

#### getMonthBulletColor

```typescript
/**
 * Returns Tailwind color classes for month bullet.
 */
function getMonthBulletColor(month: number): string;
```

---

## 📋 Component Checklist

When creating new components:

- [ ] Add `"use client"` if using hooks/interactivity
- [ ] Create types file (`component-name.types.ts`)
- [ ] Create utils file with JSDoc (`component-name.utils.ts`)
- [ ] Add proper TypeScript types for all props
- [ ] Use BackgroundContext for global state
- [ ] Handle responsive design (separate components or conditionals)
- [ ] Add proper cleanup in useEffect
- [ ] Use className merging with `cn()` utility
- [ ] Follow existing naming conventions
- [ ] Add to this documentation

---

## 🎯 Best Practices

### Component Structure

```tsx
"use client"; // If needed

import {} from /* imports */ "...";
import type {} from /* types */ "./component.types";

export function Component({ prop1, prop2 }: ComponentProps) {
  // 1. Hooks
  const context = useBackgroundContext();
  const isDesktop = useMediaQuery("(min-width: 769px)");

  // 2. Derived state
  const someValue = useMemo(() => {
    // calculation
  }, [dependencies]);

  // 3. Event handlers
  const handleClick = useCallback(() => {
    // handler
  }, [dependencies]);

  // 4. Effects
  useEffect(() => {
    // effect
    return () => {
      // cleanup
    };
  }, [dependencies]);

  // 5. Render
  return <div>{/* JSX */}</div>;
}
```

### Props Validation

```typescript
// ✅ Good: Explicit types
interface Props {
  id: string;
  count: number;
  items: Item[];
}

// ❌ Bad: Any or implicit types
interface Props {
  data: any;
}
```

### Context Usage

```typescript
// ✅ Good: Destructure only what you need
const { selectedYear, setSelectedYear } = useBackgroundContext();

// ❌ Bad: Use entire context when not needed
const context = useBackgroundContext();
// Then use context.selectedYear everywhere
```

---

**Last Updated:** 2026-02-16  
**For:** AI Agents working on turma.dev components
