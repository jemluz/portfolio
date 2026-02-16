# Troubleshooting Guide - turma.dev

> **Solutions to common issues and problems encountered during development**

## 📑 Table of Contents

- [Build & Installation Issues](#build--installation-issues)
- [Development Server Issues](#development-server-issues)
- [TypeScript Errors](#typescript-errors)
- [Styling & UI Issues](#styling--ui-issues)
- [State Management Issues](#state-management-issues)
- [Hook-Related Issues](#hook-related-issues)
- [Performance Issues](#performance-issues)
- [Deployment Issues](#deployment-issues)

---

## Build & Installation Issues

### Problem: `npm install` fails

**Symptoms:**
```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
```

**Solutions:**

1. **Clear npm cache:**
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

2. **Use correct Node version:**
```bash
nvm install
nvm use
npm install
```

3. **Check Node version compatibility:**
```bash
node --version  # Should match .nvmrc
```

---

### Problem: Build fails with Turbopack errors

**Symptoms:**
```
Error: Failed to build with Turbopack
```

**Solutions:**

1. **Clear Next.js cache:**
```bash
rm -rf .next
npm run build
```

2. **Disable Turbopack temporarily:**
```bash
# In package.json, change:
"dev": "next dev"          # Instead of "next dev --turbopack"
"build": "next build"      # Instead of "next build --turbopack"
```

3. **Update Next.js:**
```bash
npm update next
```

---

### Problem: Module not found errors

**Symptoms:**
```
Module not found: Can't resolve '@/components/...'
```

**Solutions:**

1. **Check path alias configuration in `tsconfig.json`:**
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]  // Ensure this exists
    }
  }
}
```

2. **Restart development server:**
```bash
# Stop server (Ctrl+C)
npm run dev
```

3. **Check file exists at correct path:**
```bash
ls -la src/components/custom/ComponentName/
```

---

## Development Server Issues

### Problem: Port 3000 already in use

**Symptoms:**
```
Error: Port 3000 is already in use
```

**Solutions:**

1. **Use different port:**
```bash
PORT=3001 npm run dev
```

2. **Kill process on port 3000:**
```bash
# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

---

### Problem: Hot reload not working

**Symptoms:**
- Changes not reflected in browser
- Need to manually refresh

**Solutions:**

1. **Check file is in correct directory:**
```bash
# Files must be in src/ to be watched
```

2. **Restart dev server:**
```bash
# Stop and restart
npm run dev
```

3. **Clear browser cache:**
```
Ctrl+Shift+R (Chrome/Firefox)
Cmd+Shift+R (Mac)
```

4. **Check for WSL2 issues (Windows):**
```bash
# Add to next.config.ts
module.exports = {
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
}
```

---

### Problem: ENOSPC errors (Linux)

**Symptoms:**
```
Error: ENOSPC: System limit for number of file watchers reached
```

**Solutions:**

```bash
# Increase file watcher limit
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

---

## TypeScript Errors

### Problem: Type errors in components

**Symptoms:**
```
Type 'X' is not assignable to type 'Y'
```

**Solutions:**

1. **Check prop types match:**
```tsx
// ✅ Correct
interface Props {
  count: number;
}
<Component count={5} />

// ❌ Wrong
<Component count="5" />
```

2. **Use proper type definitions:**
```tsx
// Import types explicitly
import type { Background } from "@/background-data";
```

3. **Check for null/undefined:**
```tsx
// Use optional chaining
const year = selectedYear ?? 2024;
const items = data?.items ?? [];
```

---

### Problem: Context type errors

**Symptoms:**
```
Property 'X' does not exist on type 'BackgroundContextValue'
```

**Solutions:**

1. **Ensure context is used within provider:**
```tsx
// ✅ Correct
<BackgroundProvider>
  <Component />  {/* Can use useBackgroundContext */}
</BackgroundProvider>

// ❌ Wrong
<Component />  {/* Outside provider - will error */}
```

2. **Check context type definition:**
```tsx
// Verify interface in BackgroundContext.tsx
interface BackgroundContextValue {
  // ... all properties should be listed
}
```

---

### Problem: Hook type inference issues

**Symptoms:**
```
Parameter 'X' implicitly has an 'any' type
```

**Solutions:**

```tsx
// ✅ Add explicit types
function useCustomHook<T extends { id: string }>(items: T[]): T[] {
  return items;
}

// Use with type parameter
const result = useCustomHook<Background>(backgroundList);
```

---

## Styling & UI Issues

### Problem: Tailwind classes not applying

**Symptoms:**
- Classes in className not working
- Styles not showing up

**Solutions:**

1. **Check Tailwind configuration:**
```js
// tailwind.config.js or postcss.config.mjs
// Ensure content paths include your files
```

2. **Restart dev server after Tailwind config changes:**
```bash
npm run dev
```

3. **Check for class name typos:**
```tsx
// ✅ Correct
className="bg-blue-500"

// ❌ Typo
className="bg-blue-5000"
```

4. **Verify class is not being overridden:**
```tsx
// Use browser DevTools to inspect element
// Check computed styles
```

---

### Problem: Dark mode not working

**Symptoms:**
- Theme toggle doesn't work
- Colors don't change

**Solutions:**

1. **Check ThemeProvider setup:**
```tsx
// layout.tsx
<ThemeProvider
  attribute="class"        // Must be "class"
  defaultTheme="system"
  enableSystem
>
  {children}
</ThemeProvider>
```

2. **Verify CSS variables defined:**
```css
/* globals.css */
:root {
  --background: ...;
}
.dark {
  --background: ...;
}
```

3. **Check middleware configuration:**
```ts
// middleware.ts
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
```

---

### Problem: Responsive breakpoints not working

**Symptoms:**
- Mobile/desktop views not switching
- useMediaQuery returns wrong value

**Solutions:**

1. **Check media query syntax:**
```tsx
// ✅ Correct
const isDesktop = useMediaQuery("(min-width: 769px)");

// ❌ Wrong
const isDesktop = useMediaQuery("min-width: 769px");  // Missing parentheses
```

2. **Test in browser DevTools:**
```
Open DevTools → Toggle device toolbar → Test different sizes
```

3. **Verify window is defined:**
```tsx
// useMediaQuery handles SSR, but check for client-side
if (typeof window !== 'undefined') {
  // Safe to use window
}
```

---

## State Management Issues

### Problem: Context updates not triggering re-renders

**Symptoms:**
- State changes but UI doesn't update
- Components don't reflect new values

**Solutions:**

1. **Check if component is subscribed:**
```tsx
// ✅ Component will re-render
const { selectedYear } = useBackgroundContext();

// ❌ Won't re-render on context changes
const context = useBackgroundContext();
// But not using any values
```

2. **Verify state is actually changing:**
```tsx
// Add console.log in context
setSelectedYear((prev) => {
  console.log('State changing from', prev, 'to', year);
  return year;
});
```

3. **Check for object reference issues:**
```tsx
// ❌ Mutating state directly
itemColors[id] = color;  // Won't trigger re-render

// ✅ Create new object
setItemColors(prev => ({ ...prev, [id]: color }));
```

---

### Problem: Infinite re-render loop

**Symptoms:**
```
Error: Too many re-renders
Maximum update depth exceeded
```

**Solutions:**

1. **Check useEffect dependencies:**
```tsx
// ❌ Missing dependencies
useEffect(() => {
  setCount(count + 1);  // Infinite loop!
}, []);  // Should include count or use callback

// ✅ Use callback form
useEffect(() => {
  setCount(c => c + 1);
}, []);
```

2. **Avoid state updates during render:**
```tsx
// ❌ Setting state during render
function Component() {
  setState(value);  // Causes infinite loop
  return <div />;
}

// ✅ Use useEffect
function Component() {
  useEffect(() => {
    setState(value);
  }, []);
  return <div />;
}
```

---

### Problem: Stale closure in callbacks

**Symptoms:**
- Callback uses old state values
- Updates don't reflect current state

**Solutions:**

```tsx
// ❌ Stale closure
const handleClick = () => {
  console.log(count);  // Always logs initial count
};

// ✅ Use useCallback with dependencies
const handleClick = useCallback(() => {
  console.log(count);  // Uses current count
}, [count]);

// ✅ Or use callback form of setState
const handleIncrement = useCallback(() => {
  setCount(c => c + 1);  // Uses latest count
}, []);
```

---

## Hook-Related Issues

### Problem: Hook rules violation

**Symptoms:**
```
Error: Hooks can only be called inside function components
Error: Rendered more hooks than during previous render
```

**Solutions:**

1. **Only call hooks at top level:**
```tsx
// ❌ Wrong - conditional hook call
if (condition) {
  const value = useCustomHook();
}

// ✅ Correct
const value = useCustomHook();
if (condition) {
  // Use value
}
```

2. **Only call hooks in function components or custom hooks:**
```tsx
// ❌ Wrong - hook in regular function
function regularFunction() {
  const [state, setState] = useState(0);
}

// ✅ Correct - hook in component
function Component() {
  const [state, setState] = useState(0);
}
```

3. **Ensure consistent hook order:**
```tsx
// All hooks must be called in same order every render
```

---

### Problem: useEffect cleanup not working

**Symptoms:**
- Memory leaks
- Event listeners still attached
- Multiple listeners firing

**Solutions:**

```tsx
// ✅ Always return cleanup function
useEffect(() => {
  const handler = () => {
    // Handler logic
  };
  
  window.addEventListener('scroll', handler);
  
  // Cleanup
  return () => {
    window.removeEventListener('scroll', handler);
  };
}, []);

// ✅ Clean up observers
useEffect(() => {
  const observer = new ResizeObserver(callback);
  observer.observe(element);
  
  return () => {
    observer.disconnect();
  };
}, []);
```

---

### Problem: useMediaQuery not updating

**Symptoms:**
- Media query result doesn't change on resize
- Stuck on initial value

**Solutions:**

1. **Check event listener is attached:**
```tsx
// Verify in useMediaQuery implementation
mediaQuery.addEventListener('change', handler);
```

2. **Check cleanup:**
```tsx
return () => {
  mediaQuery.removeEventListener('change', handler);
};
```

3. **Test manually:**
```tsx
// Add logging
const matches = useMediaQuery("(min-width: 769px)");
console.log('Media query matches:', matches);
```

---

## Performance Issues

### Problem: Slow scrolling/laggy UI

**Symptoms:**
- Choppy scroll animation
- Delayed interactions
- High CPU usage

**Solutions:**

1. **Optimize scroll handlers:**
```tsx
// Use passive listeners
useEffect(() => {
  const handler = () => { /* ... */ };
  window.addEventListener('scroll', handler, { passive: true });
  return () => window.removeEventListener('scroll', handler);
}, []);
```

2. **Debounce expensive operations:**
```tsx
import { useCallback } from 'react';

const debouncedHandler = useCallback(
  debounce(() => {
    // Expensive operation
  }, 100),
  []
);
```

3. **Use CSS transforms for animations:**
```css
/* ✅ GPU-accelerated */
.element {
  transform: translateY(10px);
  transition: transform 0.3s;
}

/* ❌ Triggers layout */
.element {
  top: 10px;
  transition: top 0.3s;
}
```

---

### Problem: Excessive re-renders

**Symptoms:**
- Component renders many times
- Performance degradation

**Solutions:**

1. **Use React DevTools Profiler:**
```
Install React DevTools → Profiler tab → Record → Analyze
```

2. **Memoize expensive calculations:**
```tsx
const expensiveValue = useMemo(() => {
  return calculateExpensive(data);
}, [data]);
```

3. **Memoize callbacks:**
```tsx
const handleClick = useCallback(() => {
  doSomething();
}, []);  // Empty deps if no external dependencies
```

4. **Use React.memo for components:**
```tsx
export const Component = React.memo(({ prop }) => {
  return <div>{prop}</div>;
});
```

---

## Deployment Issues

### Problem: Build succeeds locally but fails in production

**Symptoms:**
- `npm run build` works locally
- Build fails on deployment platform

**Solutions:**

1. **Check Node version matches:**
```bash
# Ensure production uses same Node version as .nvmrc
```

2. **Check environment variables:**
```bash
# Ensure all required env vars are set in production
```

3. **Test production build locally:**
```bash
npm run build
npm start
# Test thoroughly
```

---

### Problem: Runtime errors in production

**Symptoms:**
- Works in dev, breaks in production
- White screen or errors

**Solutions:**

1. **Check for client-only code in server components:**
```tsx
// ❌ Wrong - window in server component
export default function Page() {
  const width = window.innerWidth;  // Error!
}

// ✅ Correct - use client directive
"use client";
export default function Page() {
  const width = window.innerWidth;
}
```

2. **Verify all imports:**
```bash
# Check for broken imports
npm run build
# Fix any errors shown
```

3. **Check console for errors:**
```
Open browser DevTools in production
Check Console tab for errors
```

---

## 🆘 Getting Help

### Before Asking for Help

1. **Check this troubleshooting guide**
2. **Search existing GitHub issues**
3. **Check project documentation**
4. **Verify recent changes didn't cause issue**
5. **Try minimal reproduction**

### Creating a Good Bug Report

```markdown
## Description
Clear description of the problem

## Steps to Reproduce
1. Step one
2. Step two
3. Step three

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- OS: macOS/Windows/Linux
- Node version: X.X.X
- Browser: Chrome/Firefox/Safari
- Branch: feat/TURMA-XXXXX

## Additional Context
- Screenshots
- Error messages
- Console logs
- Relevant code snippets
```

---

## 🔗 Useful Resources

- [Next.js Debugging](https://nextjs.org/docs/advanced-features/debugging)
- [React Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- [TypeScript Error Messages](https://www.typescriptlang.org/docs/handbook/2/error-messages.html)
- [TailwindCSS Troubleshooting](https://tailwindcss.com/docs/troubleshooting)

---

**Last Updated:** 2026-02-16  
**For:** AI Agents working on turma.dev troubleshooting
