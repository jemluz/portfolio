# Development Guide - turma.dev

> **Comprehensive guide for development workflows, patterns, and best practices**

## 🚀 Getting Started

### Prerequisites
- Node.js (version specified in `.nvmrc`)
- npm or yarn
- Git

### Initial Setup

```bash
# 1. Clone the repository
git clone https://github.com/jemluz/turma.dev.git
cd turma.dev

# 2. Install Node.js version
nvm install
nvm use

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open browser to http://localhost:3000
```

### Environment Setup

**.nvmrc Configuration:**
```bash
# Set the Node version as default (optional)
nvm alias default lts/{version_name}
```

**.editorconfig Support:**
Ensure your IDE/editor respects the `.editorconfig` file for consistent formatting.

---

## 🔄 Development Workflow

### 1. Issue-Driven Development

#### Creating an Issue
1. Navigate to GitHub Issues
2. Create new issue with clear title and description
3. Add labels (bug, feature, documentation, etc.)
4. Get issue number (e.g., #86)

#### Issue Naming Convention
```
[TURMA-XXXXX] Title of the Issue

Where XXXXX is the zero-padded issue number:
- Issue #1 → [TURMA-00001]
- Issue #86 → [TURMA-00086]
- Issue #123 → [TURMA-00123]
```

#### Creating a Branch
```bash
# Pattern: feat/TURMA-XXXXX
git checkout -b feat/TURMA-00086

# Other branch prefixes:
# - feat/ - New features
# - fix/ - Bug fixes
# - docs/ - Documentation changes
# - refactor/ - Code refactoring
# - test/ - Adding tests
```

### 2. Development Cycle

```
1. Create Issue → 2. Create Branch → 3. Develop → 4. Test → 5. PR → 6. Review → 7. Merge
       ↓              ↓                ↓          ↓        ↓        ↓         ↓
   [TURMA-XXX]   feat/TURMA-XXX    Code+Commit  Lint+Test  Open  Feedback   Deploy
```

### 3. Code Development

#### File Creation Checklist
- [ ] Create component file (PascalCase.tsx)
- [ ] Create types file (component-name.types.ts)
- [ ] Create utils file with JSDoc (component-name.utils.ts)
- [ ] Create constants file if needed (component-name.constants.ts)
- [ ] Create styles file if needed (styles.css)
- [ ] Update parent component imports
- [ ] Test in both mobile and desktop

#### Component Development Pattern
```tsx
// 1. Start with types
// component-name.types.ts
export interface ComponentProps {
  prop1: string;
  prop2: number;
}

// 2. Create utils with JSDoc
// component-name.utils.ts
/**
 * Utility function description.
 * @param param1 - Description
 * @returns Description
 */
export function utilityFunction(param1: string): string {
  // implementation
}

// 3. Build component
// ComponentName.tsx
"use client";

import type { ComponentProps } from "./component-name.types";
import { utilityFunction } from "./component-name.utils";

export function ComponentName({ prop1, prop2 }: ComponentProps) {
  // hooks
  // derived state
  // handlers
  // effects
  // render
}
```

### 4. Testing Workflow

```bash
# Run linting checks
npm run lint          # ESLint
npm run lint:check    # Prettier check

# Fix linting issues
npm run lint:fix      # Auto-fix formatting

# Build for production (test for build errors)
npm run build

# Start production server
npm start
```

### 5. Commit Workflow

```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat(Timeline): add year navigation buttons

- Add previous/next navigation
- Implement disabled states
- Add tooltips for accessibility
- Refs TURMA-00086"

# Push to remote
git push origin feat/TURMA-00086
```

#### Commit Message Convention
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Build/tooling changes

**Example:**
```
feat(ContentArea): add project links to content items

- Add ProjectList component
- Style external link icons
- Update content item rendering

Refs TURMA-00042
```

### 6. Pull Request Workflow

#### Creating a PR
1. Push your branch to GitHub
2. Open Pull Request
3. Fill in PR template:
   - Description of changes
   - Related issue(s)
   - Screenshots (for UI changes)
   - Testing performed
   - Checklist completion

#### PR Title Convention
```
[TURMA-XXXXX] Brief description of changes
```

#### PR Description Template
```markdown
## Description
Brief description of what this PR does.

## Related Issue
Closes #XX

## Changes Made
- Change 1
- Change 2
- Change 3

## Screenshots
(If applicable)

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Linting passes
- [ ] Build succeeds
- [ ] No console errors

## Checklist
- [ ] Code follows project conventions
- [ ] JSDoc added for new utils/hooks
- [ ] Types defined for new components
- [ ] Responsive design tested
- [ ] Documentation updated (if needed)
```

---

## 📋 Development Patterns

### Pattern 1: Adding a New Page

```bash
# 1. Create page directory
mkdir -p src/app/new-page

# 2. Create page component
touch src/app/new-page/page.view.tsx

# 3. Add styles (if needed)
touch src/app/new-page/styles.css
```

```tsx
// page.view.tsx
import "./styles.css";

export default function NewPage() {
  return (
    <div>
      <h1>New Page</h1>
    </div>
  );
}
```

**Note:** Next.js App Router will automatically create route at `/new-page`

### Pattern 2: Adding a New Hook

```bash
# 1. Create hook file
touch src/hooks/useNewHook.ts
```

```tsx
"use client";

import { useState, useEffect } from "react";

/**
 * Description of what the hook does.
 * 
 * @param param1 - Description of parameter
 * @returns Description of return value
 * 
 * @example
 * ```tsx
 * const result = useNewHook(value);
 * ```
 */
export function useNewHook(param1: string): boolean {
  const [state, setState] = useState(false);
  
  useEffect(() => {
    // Implementation
    return () => {
      // Cleanup
    };
  }, [param1]);
  
  return state;
}
```

### Pattern 3: Adding a New Component

```bash
# 1. Create component directory
mkdir -p src/components/custom/NewComponent

# 2. Create files
touch src/components/custom/NewComponent/NewComponent.tsx
touch src/components/custom/NewComponent/new-component.types.ts
touch src/components/custom/NewComponent/new-component.utils.ts
```

```tsx
// new-component.types.ts
export interface NewComponentProps {
  title: string;
  items: Item[];
}

// new-component.utils.ts
/**
 * Utility function description.
 * @param input - Input description
 * @returns Output description
 */
export function processData(input: string): string {
  return input.toUpperCase();
}

// NewComponent.tsx
"use client";

import type { NewComponentProps } from "./new-component.types";
import { processData } from "./new-component.utils";

export function NewComponent({ title, items }: NewComponentProps) {
  const processedTitle = processData(title);
  
  return (
    <div>
      <h2>{processedTitle}</h2>
      {items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

### Pattern 4: Updating Global State (Context)

```tsx
// 1. Define new state in BackgroundContext
const [newState, setNewState] = useState<Type>(initialValue);

// 2. Add to context value
const value = {
  // ... existing values
  newState,
  setNewState,
};

// 3. Update context type
interface BackgroundContextValue {
  // ... existing
  newState: Type;
  setNewState: (value: Type) => void;
}

// 4. Use in components
const { newState, setNewState } = useBackgroundContext();
```

### Pattern 5: Adding Content Data

```typescript
// src/background-data.ts

export const backgroundList: Background[] = [
  // ... existing items
  {
    id: "unique-identifier", // Use descriptive ID
    year: 2024,
    month: 6,                // 1-12, optional
    title: "Position Title",
    description: "Detailed description of role/project",
    location: "City, Country",
    durationInMonths: 12,
    isCurrent: false,
    projects: [
      {
        name: "Project Name",
        url: "https://project-url.com"
      }
    ],
    isInactive: false,       // Optional: marks inactive periods
  },
];
```

---

## 🎨 Styling Guidelines

### Using Tailwind CSS

```tsx
// ✅ Preferred: Utility classes
<div className="flex items-center gap-4 p-4 bg-gray-100 dark:bg-gray-900">
  Content
</div>

// ✅ When needed: cn() for conditional classes
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  variant === "primary" && "primary-classes"
)}>
  Content
</div>

// ✅ Complex styles: Custom CSS file
// styles.css
.custom-component {
  @apply flex items-center gap-4;
  /* Additional custom properties */
}
```

### Theme-Aware Styling

```tsx
// Use CSS variables (defined in globals.css)
<div className="bg-background text-foreground">
  Content
</div>

// Dark mode variants
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Content
</div>

// Accessing theme in components
import { useTheme } from "next-themes";

const { theme, setTheme } = useTheme();
```

### Responsive Design

```tsx
// Mobile-first approach
<div className="
  flex-col    // Mobile: column layout
  md:flex-row // Desktop: row layout
  gap-4       // Mobile: 1rem gap
  md:gap-8    // Desktop: 2rem gap
">
  Content
</div>

// Using useMediaQuery hook
const isDesktop = useMediaQuery("(min-width: 769px)");

return isDesktop ? <DesktopLayout /> : <MobileLayout />;
```

---

## 🔧 Utility Functions

### cn() - ClassName Merger

```tsx
import { cn } from "@/lib/utils";

// Merge classes with proper priority
const classes = cn(
  "base-class",
  conditionalClass && "conditional",
  "override-class"
);

// Handles conflicts (last wins)
cn("p-4", "p-6") // → "p-6"
```

### Font Configuration

```tsx
// src/lib/fonts.ts
import { Font_Name } from "next/font/google";

export const fontName = Font_Name({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-name",
});

// Usage in layout
<html className={fontName.variable}>
```

---

## 🧪 Testing Strategies

### Manual Testing Checklist

**For Every Change:**
- [ ] Desktop view (≥769px)
- [ ] Mobile view (<769px)
- [ ] Tablet view (768-1024px)
- [ ] Light theme
- [ ] Dark theme
- [ ] Different browsers (Chrome, Firefox, Safari)
- [ ] Scroll behavior
- [ ] Navigation flows
- [ ] Console errors (should be none)

### Component Testing

```tsx
// Test component in isolation
// Create temporary test page: src/app/test/page.view.tsx

import { ComponentToTest } from "@/components/custom/ComponentToTest";

export default function TestPage() {
  return (
    <div className="p-8">
      <h1>Component Test Page</h1>
      <ComponentToTest prop1="value" prop2={123} />
    </div>
  );
}

// Navigate to http://localhost:3000/test
// Test various prop combinations
// Delete test page when done
```

### Hook Testing

```tsx
// Create test component to use hook
function TestHookComponent() {
  const result = useYourHook(params);
  
  return (
    <div>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}

// Add to test page and observe behavior
```

---

## 🐛 Debugging Tips

### React DevTools
```bash
# Install React DevTools browser extension
# Inspect component tree
# View props and state
# Track re-renders
```

### Console Logging

```tsx
// Temporary debug logging
useEffect(() => {
  console.log('Debug:', { selectedYear, yearContents });
}, [selectedYear, yearContents]);

// ⚠️ Remove before committing!
```

### Performance Profiling

```tsx
// Use React Profiler
import { Profiler } from 'react';

<Profiler
  id="ComponentName"
  onRender={(id, phase, actualDuration) => {
    console.log(`${id} (${phase}) took ${actualDuration}ms`);
  }}
>
  <Component />
</Profiler>
```

---

## 📦 Building and Deployment

### Build Process

```bash
# Development build
npm run dev

# Production build
npm run build

# Preview production build
npm run build && npm start
```

### Build Output
```
.next/
├── cache/              # Build cache
├── server/             # Server bundles
├── static/             # Static assets
└── BUILD_ID            # Build identifier
```

### Environment Variables

Create `.env.local` (not committed):
```env
# Example variables
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_ANALYTICS_ID=abc123
```

Usage:
```tsx
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

---

## 📚 Code Review Checklist

### Before Submitting PR

- [ ] Code follows project structure
- [ ] JSDoc added for new functions/hooks
- [ ] Types defined for new components
- [ ] No console.log() statements
- [ ] No commented-out code
- [ ] Responsive design tested
- [ ] Light/dark theme tested
- [ ] Linting passes (`npm run lint:fix`)
- [ ] Build succeeds (`npm run build`)
- [ ] No TypeScript errors
- [ ] Commit messages follow convention
- [ ] PR description is complete

### During Code Review

**Look for:**
- Proper TypeScript typing
- Hook dependency arrays
- Memory leaks (missing cleanup)
- Accessibility concerns
- Performance issues
- Security vulnerabilities
- Code duplication
- Naming consistency

---

## 🎯 Best Practices Summary

### DO ✅
- Use TypeScript for all files
- Add JSDoc to utilities and hooks
- Use existing hooks and utilities
- Clean up effects and listeners
- Test responsive behavior
- Follow naming conventions
- Use meaningful variable names
- Keep components focused (single responsibility)
- Use context for global state
- Optimize with useCallback/useMemo

### DON'T ❌
- Mix server and client components incorrectly
- Forget `"use client"` for interactive components
- Skip TypeScript types
- Leave console.log in production code
- Create circular dependencies
- Mutate state directly
- Skip cleanup in useEffect
- Ignore linting errors
- Commit sensitive data
- Break existing functionality

---

## 🔗 Quick Reference Links

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/primitives)
- [Project README](../README.md)

---

**Last Updated:** 2026-02-16  
**For:** AI Agents working on turma.dev development
