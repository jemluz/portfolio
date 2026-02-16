# "use client" Determination

**Purpose**: Decision tree to determine if a component needs `"use client"` directive.

---

## Decision Tree

```
START: Analyzing component file
│
├─ DOES FILE IMPORT FROM next/navigation? (useRouter, usePathname, etc)
│  └─ YES → MUST ADD "use client" ✓
│
├─ DOES FILE USE ANY REACT HOOKS? (useState, useContext, useEffect, custom hooks)
│  └─ YES → MUST ADD "use client" ✓
│
├─ DOES FILE USE EVENT LISTENERS? (onClick, onChange, onSubmit, etc)
│  └─ YES → MUST ADD "use client" ✓
│
├─ DOES FILE REFERENCE window, document, or browser APIs?
│  └─ YES → MUST ADD "use client" ✓
│
├─ DOES FILE IMPORT COMPONENTS THAT NEED "use client"?
│  └─ YES → MUST ADD "use client" (to use those components)✓
│
└─ DEFAULT → Server Component (no "use client" needed) ✓
```

---

## Quick Rules

| Component Type | Needs "use client"? | Reason |
|---------------|---------------------|--------|
| Server | NO | No hooks, no event listeners, no `next/navigation` |
| Uses hooks | YES | Contains `useState`, `useContext`, `useEffect`, custom hooks |
| Has event handlers | YES | `onClick`, `onChange`, `onSubmit`, etc |
| Uses Next.js navigation | YES | Uses `useRouter`, `usePathname`, `useSearchParams` from `next/navigation` |
| Uses browser APIs | YES | References `window`, `document`, or other browser-only APIs |

---

## Critical Rule

**If ANY child component needs `"use client"`, parent MUST also have `"use client"` to be able to use it.**

---

## Real Examples from Codebase

| Component | Has "use client"? | Reason |
|-----------|------------------|--------|
| `Timeline.tsx` | YES | Uses hooks: `useRef`, `useCallback`, `useEffect`, custom hooks |
| `UserInfoDesktop.tsx` | YES | Uses hook: `useMediaQuery` |
| `ContentArea.tsx` | YES | Uses hook: `useMediaQuery` |
| `page.view.tsx` | NO | Static root page, no hooks, no interactivity |
| `YearButton.tsx` | NO | Presentational subcomponent, receives props only |
| `layout.tsx` | NO | Server component layout with no interactivity |

---

## Examples

### ✓ Needs "use client"

```tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

**Why**: Uses `useState` hook and `onClick` event handler.

---

### ✓ Needs "use client"

```tsx
"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function ResponsiveComponent() {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  
  return <div>{isDesktop ? "Desktop" : "Mobile"}</div>;
}
```

**Why**: Uses custom hook `useMediaQuery` (which internally uses `useState`/`useEffect`).

---

### ✗ No "use client" needed

```tsx
import { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
```

**Why**: Pure presentational component, receives props, no hooks, no event handlers.

---

## Related Guides

- **Component structure**: [`file-types/01-components.md`](../file-types/01-components.md)
- **Hook patterns**: [`file-types/04-hooks.md`](../file-types/04-hooks.md)
- **Import rules**: [`imports.md`](imports.md)
