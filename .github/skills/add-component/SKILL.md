---
name: add-component
description: Add a new React component to the codebase following the project conventions.
---

To add a new component, follow the guidelines below to keep structure, naming, and documentation consistent.

# 📌 Rules

- MUST place component under `src/components/custom/ComponentName/`
- MUST export the main component as default export
- MUST add `"use client"` at line 1 when using hooks/events/browser APIs, or `next/navigation`
- MUST use `@/` alias for imports from `src/`
- MUST type props via `ComponentNameProps` from `./component-name.types.ts`
- MUST create `component-name.utils.ts` for reusable logic and constants
- MUST add JSDoc to exported utils (see `add-jsdoc` skill)
- MUST add `index.tsx` barrel export for the public API
- MUST NOT modify files in `src/components/ui/`

## 🧱 File Structure

```
src/components/custom/ComponentName/
├── ComponentName.tsx
├── component-name.types.ts
├── component-name.utils.ts
├── SubComponent.tsx (optional)
├── index.tsx
└── styles.css (optional)
```

## 🧪 Example

Component structure is a bit complex, the real examples were separated into a dedicated file.

See **component-example.md** for a complete real example (Timeline): [component-example.md](component-example.md).

---

## ✅ Validation Checklist

- [ ] Component is in `src/components/custom/ComponentName/`
- [ ] File name matches component name (`ComponentName.tsx`)
- [ ] Exactly one `export default`
- [ ] "use client" added when required
- [ ] Props are typed via `ComponentNameProps` in `.types.ts`
- [ ] Types import pattern: `import { ComponentNameProps } from "./component-name.types"`
- [ ] Imports follow strict order (client directive, React/Next, third-party, `@/`, relative, CSS)
- [ ] `@/` alias used for `src/` imports
- [ ] Import order: client directive → React → libs → absolute → relative → CSS
- [ ] `component-name.utils.ts` exists for reusable logic/constants
- [ ] Exported utils include JSDoc (see `add-jsdoc` skill)
- [ ] `index.tsx` barrel exports the public API
- [ ] Private subcomponents NOT exported in index.tsx
