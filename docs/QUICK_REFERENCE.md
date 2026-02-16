# Quick Reference - turma.dev

> **Fast lookup guide for common tasks and patterns**

## 🚀 Quick Commands

```bash
# Development
npm run dev                  # Start dev server
npm run build               # Build for production
npm start                   # Start production server

# Linting
npm run lint                # Run ESLint
npm run lint:check          # Check formatting
npm run lint:fix            # Auto-fix formatting
```

## 📂 Key File Locations

```
src/
├── app/background/                    # Main timeline page
├── components/custom/Timeline/        # Year navigation
├── components/custom/ContentArea/     # Content display
├── components/custom/UserInfo/        # User profile
├── contexts/BackgroundContext.tsx     # Global state
├── hooks/                             # Custom hooks
├── background-data.ts                 # User data
└── lib/utils.ts                       # cn() utility
```

## 🎣 Essential Hooks

```tsx
// Context
const {
  selectedYear,
  setSelectedYear,
  yearContents,
  canGoNext,
  goToNextContent,
} = useBackgroundContext();

// Responsive
const isDesktop = useMediaQuery("(min-width: 769px)");

// Refs management
const [setRef, refs] = useContentItemRefs(items);
```

## 🎨 Common Patterns

### Adding Content

```typescript
// src/background-data.ts
{
  id: "unique-id",
  year: 2024,
  month: 6,
  title: "Position",
  description: "Description",
  location: "City, Country",
  durationInMonths: 12,
  projects: [{ name: "Project", url: "https://..." }],
}
```

### Creating Component

```bash
mkdir -p src/components/custom/MyComponent
touch src/components/custom/MyComponent/MyComponent.tsx
touch src/components/custom/MyComponent/my-component.types.ts
touch src/components/custom/MyComponent/my-component.utils.ts
```

### Responsive Rendering

```tsx
// Pattern 1: Separate components
{
  isDesktop ? <Desktop /> : <Mobile />;
}

// Pattern 2: Conditional classes
<div className="flex-col md:flex-row" />;
```

### State Updates

```tsx
// Update selected year (triggers scroll reset)
setSelectedYear(2024);

// Update selected content
setSelectedContent(itemId);

// Navigate
goToNextContent();
goToPreviousContent();
```

## 🔧 Utility Functions

```tsx
// Merge classnames
import { cn } from "@/lib/utils";
const className = cn("base", isActive && "active");

// Random color (no repeats)
const color = getRandomColor(lastColor); // Returns: "blue", "red", etc.
```

## 📝 Documentation Template

````typescript
/**
 * Brief description of what this does.
 *
 * @param param1 - Description of first parameter
 * @param param2 - Description of second parameter
 * @returns Description of return value
 *
 * @example
 * ```tsx
 * const result = myFunction(value1, value2);
 * ```
 */
export function myFunction(param1: string, param2: number): boolean {
  // implementation
}
````

## 🎯 TypeScript Types

```typescript
// Main data types
interface Background {
  id: string;
  year: number;
  month?: number;
  title: string;
  description: string;
  location?: string;
  durationInMonths?: number;
  isCurrent?: boolean;
  projects?: Array<{ name: string; url: string }>;
  isInactive?: boolean;
}

interface UserInfo {
  name: string;
  lastName: string;
  profilePhotoUrl: string;
  urls: string[];
}
```

## 🐛 Common Issues

| Issue                     | Solution                                 |
| ------------------------- | ---------------------------------------- |
| Hot reload not working    | Restart dev server                       |
| TypeScript errors         | Check types, restart TS server           |
| Styles not applying       | Restart dev server, check Tailwind setup |
| Context error             | Ensure component is inside Provider      |
| Build fails               | Clear `.next` folder, rebuild            |
| Module not found          | Check path alias, verify file exists     |
| Infinite re-render        | Check useEffect dependencies             |
| Stale closure in callback | Use useCallback with correct deps        |

## 🔍 Debugging

```tsx
// Log context values
const context = useBackgroundContext();
console.log("Context:", context);

// Log props
console.log("Props:", { prop1, prop2 });

// Check render count
const renderCount = useRef(0);
renderCount.current++;
console.log("Render count:", renderCount.current);
```

## 📐 Architecture Quick View

```
User Interaction
    ↓
Event Handler
    ↓
Context Update (setSelectedYear, setSelectedContent)
    ↓
State Changes
    ↓
Components Re-render
    ↓
UI Updates
```

## 🎨 Color System

**17 Available Colors:**

```
red, orange, amber, yellow, lime, green, emerald,
teal, cyan, sky, blue, indigo, violet, purple,
fuchsia, pink, rose
```

**Usage:**

```tsx
<ContentItem color="blue" />
// Renders: border-l-blue-500, bg-blue-50, dark:bg-blue-950
```

## 🌐 Breakpoints

```tsx
// Desktop: ≥769px
const isDesktop = useMediaQuery("(min-width: 769px)");

// Mobile: <769px
const isMobile = !useMediaQuery("(min-width: 769px)");

// In Tailwind
<div className="text-sm md:text-base" />;
```

## 📊 Performance Tips

```tsx
// Memoize expensive calculations
const value = useMemo(() => calculate(), [deps]);

// Memoize callbacks
const handler = useCallback(() => {}, [deps]);

// Use CSS transforms (GPU-accelerated)
style={{ transform: `translateY(${y}px)` }}

// Clean up effects
useEffect(() => {
  // setup
  return () => {
    // cleanup
  };
}, []);
```

## 🔐 Best Practices

### ✅ DO

- Use TypeScript for all files
- Add JSDoc to utilities and hooks
- Clean up effects and listeners
- Test responsive behavior
- Follow naming conventions

### ❌ DON'T

- Skip TypeScript types
- Leave console.log in code
- Mutate state directly
- Skip cleanup in useEffect
- Ignore linting errors

## 📚 Documentation Links

- [AI Agent Guide](./AI_AGENT_GUIDE.md) - Comprehensive overview
- [Architecture](./ARCHITECTURE.md) - System design
- [Components](./COMPONENT_REFERENCE.md) - Component APIs
- [Hooks](./HOOKS_REFERENCE.md) - Hook documentation
- [Development](./DEVELOPMENT_GUIDE.md) - Workflows
- [Troubleshooting](./TROUBLESHOOTING.md) - Common issues

## 🆘 Need Help?

1. Check [Troubleshooting Guide](./TROUBLESHOOTING.md)
2. Search existing GitHub issues
3. Check official docs (Next.js, React, TypeScript)
4. Create detailed bug report

---

**Last Updated:** 2026-02-16  
**For:** Quick reference while working on turma.dev
