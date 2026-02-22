---
name: add-context
description: Add a new React Context provider and hook following the project conventions.
---

To add a new context to the codebase, follow the guidelines below to keep structure, naming, and documentation consistent.

# 📌 Rules

- MUST place the context file under `src/contexts/ContextName.tsx`
- MUST add a companion doc under `src/contexts/context-name.md`
- MUST add "use client" at line 1
- MUST define a `ContextNameContextType` (or equivalent) for the value shape
- MUST initialize `createContext` with `undefined` and guard in the hook
- MUST export `ContextNameProvider` and `useContextName` as named exports
- MUST export the context as default export
- MUST use `@/` alias for imports from `src/`
- MUST include clear error message in the hook when used outside provider

## 🧱 File Structure

```
src/contexts/
├── ContextName.tsx
└── context-name.md
```

---

## 🧪 Examples

### 👍 Good Example

```tsx
"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

export type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}

export default ThemeContext;
```

### ❌ Bad Example

```tsx
import React, { createContext, useContext } from "react";

const ThemeContext = createContext({ theme: "light" });

export default function useTheme() {
  return useContext(ThemeContext);
}
```

**Why this is wrong**:

- Missing "use client" directive.
- Context is initialized with a non-undefined value, hiding missing provider.
- Hook is a default export and has no guard.
- No provider export or typed context value.

---

## ✅ Validation Checklist

- [ ] File is in `src/contexts/ContextName.tsx`
- [ ] Doc file exists at `src/contexts/context-name.md`
- [ ] "use client" is the first line
- [ ] Context value type is explicit (`ContextNameContextType` or equivalent)
- [ ] `createContext` uses `undefined` initial value
- [ ] Hook throws a clear error when used outside provider
- [ ] Named exports for provider and hook
- [ ] Default export for the context itself
- [ ] Uses `@/` alias for imports from `src/`
