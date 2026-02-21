# "use client" Determination

**Purpose**: Decision tree to determine if a component needs `"use client"` directive.

---

## What is "use client"?

In Next.js App Router, components are Server Components by default. Adding `"use client"` at the top of a file converts it to a Client Component, which can use browser features like React hooks, event listeners, and browser APIs. Use this directive sparingly — only when your component truly needs interactivity or browser-specific functionality.

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

| Component Type          | Needs "use client"? | Reason                                                                    |
| ----------------------- | ------------------- | ------------------------------------------------------------------------- |
| Server                  | NO                  | No hooks, no event listeners, no `next/navigation`                        |
| Uses hooks              | YES                 | Contains `useState`, `useContext`, `useEffect`, custom hooks              |
| Has event handlers      | YES                 | `onClick`, `onChange`, `onSubmit`, etc                                    |
| Uses Next.js navigation | YES                 | Uses `useRouter`, `usePathname`, `useSearchParams` from `next/navigation` |
| Uses browser APIs       | YES                 | References `window`, `document`, or other browser-only APIs               |

---

## Critical Rule

**If ANY child component needs `"use client"`, parent MUST also have `"use client"` to be able to use it.**

---

## Real Examples from Codebase

| Component             | Has "use client"? | Reason                                                         |
| --------------------- | ----------------- | -------------------------------------------------------------- |
| `Timeline.tsx`        | YES               | Uses hooks: `useRef`, `useCallback`, `useEffect`, custom hooks |
| `UserInfoDesktop.tsx` | YES               | Uses hook: `useMediaQuery`                                     |
| `ContentArea.tsx`     | YES               | Uses hook: `useMediaQuery`                                     |
| `page.view.tsx`       | NO                | Static root page, no hooks, no interactivity                   |
| `YearButton.tsx`      | NO                | Presentational subcomponent, receives props only               |
| `layout.tsx`          | NO                | Server component layout with no interactivity                  |
