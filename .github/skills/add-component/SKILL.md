---
name: add-component
description: Add a new React component to the codebase following the project conventions.
---

To add a new component, follow the guidelines below to keep structure, naming, and documentation consistent.

# 📌 Rules

- MUST place component under `src/components/custom/ComponentName/`
- MUST type props via `ComponentNameProps` from `./component-name.types.ts`
- MUST NOT modify files in `src/components/ui/`
- MUST use SKILL [add-utils-file](../add-utils-file/SKILL.md) to implement reusable logic in `component-name.utils.ts`
- MUST use SKILL [add-types-file](../add-types-file/SKILL.md) to define types in `component-name.types.ts`
- MUST use [import and export instructions](../../instructions/import-export.instructions.md) for all imports/exports

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
