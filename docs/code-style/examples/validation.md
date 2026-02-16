# Validation Checklists

Quick validation checklists for different file types.

---

## Creating New Component

- [ ] Create `ComponentName/` directory in `src/components/custom/`
- [ ] Create `ComponentName.tsx` with default export
- [ ] Create `index.tsx` with barrel exports
- [ ] Create `component-name.types.ts` with props interface
- [ ] Create `component-name.utils.ts` with JSDoc (if needed)
- [ ] Add `"use client"` if contains hooks/events/browser APIs
- [ ] Types import pattern: `import { ComponentNameProps } from "./component-name.types"`
- [ ] All imports use `@/` alias for `src/` paths
- [ ] Import order: client directive → React → libs → absolute → relative → CSS
- [ ] Private subcomponents NOT exported in index.tsx

---

## Creating New Hook

- [ ] File named `useHookName.ts` (starts with `use`)
- [ ] File location: `src/hooks/`
- [ ] Named export only (NOT default export)
- [ ] Function name starts with `use` prefix
- [ ] Has `"use client"` at line 1
- [ ] JSDoc with `@param`, `@returns`, `@example`
- [ ] Return type explicitly typed
- [ ] Example in JSDoc is executable/realistic
- [ ] Cleanup handlers if hook has effects
- [ ] Dependencies array correct in useEffect

---

## Creating New Utility Function

- [ ] File: `component-name.utils.ts` or `src/lib/utils.ts`
- [ ] Named export (NOT default)
- [ ] JSDoc with all parameters documented
- [ ] JSDoc includes `@returns` description
- [ ] JSDoc includes `@example` with real code
- [ ] Pure function (no side effects)
- [ ] Explicit return type annotation
- [ ] No React imports or JSX in file
- [ ] Types imported from `*.types.ts` if needed

---

## Creating New Type/Interface

- [ ] File: `component-name.types.ts`
- [ ] Named export only (no default export)
- [ ] Props interface named `ComponentNameProps`
- [ ] Required properties listed first
- [ ] Optional properties listed last
- [ ] Enums use SCREAMING_SNAKE_CASE for keys
- [ ] Enum values use camelCase (for strings)
- [ ] No functions or logic in file
- [ ] Use `interface` for object shapes
- [ ] Use `type` for unions or complex aliases
- [ ] Use `enum` only for fixed, known values

---

## Adding Constants

- [ ] Declared in `component-name.utils.ts` (NOT separate .constants.ts file)
- [ ] Uses SCREAMING_SNAKE_CASE naming
- [ ] Exported with `export const`
- [ ] Has explicit type annotation
- [ ] Grouped logically at top of utils file
- [ ] Optional: JSDoc comment explaining purpose
- [ ] No magic numbers in code (use constants instead)

---

## Creating Barrel Export (index.tsx)

- [ ] File named `index.tsx` in component directory
- [ ] Re-exports only public components
- [ ] Main component exported as default
- [ ] Subcomponents exported as named exports
- [ ] No component logic in file
- [ ] Private/internal components NOT exported
- [ ] All exported files exist in same directory
- [ ] Comment explains what's not exported (optional but helpful)

---

## Component File (.tsx)

- [ ] First line is `"use client"` (if hook/event/browser API used)
- [ ] Exactly one default export
- [ ] Component name matches file name
- [ ] Props typed with interface from `.types.ts`
- [ ] Imports follow strict order (see Import Order checklist)
- [ ] Uses `@/` alias for src/ imports
- [ ] Relative imports only for same folder
- [ ] CSS import at end if needed

---

## Import Order Checklist

1. [ ] `"use client"` directive (se necessário)
2. [ ] React/Next.js imports
3. [ ] Third-party library imports
4. [ ] Absolute imports com `@/` alias
5. [ ] Relative imports (mesma pasta)
6. [ ] CSS file imports

**Exemplo completo e regras**: [`conventions/imports.md#import-order`](../conventions/imports.md#import-order)

---

## JSDoc Validation

- [ ] Present on all exported functions in `*.utils.ts`
- [ ] Present on all functions in `src/hooks/`
- [ ] Present on all functions in `src/lib/`
- [ ] Starts with `/**` and ends with `*/`
- [ ] First line: brief description (1-2 sentences)
- [ ] `@param` for each parameter
- [ ] `@param` descriptions are specific (not just type restating)
- [ ] `@returns` describes return value
- [ ] `@example` section with code fence  
- [ ] Example is executable and realistic
- [ ] Example shows actual values, not placeholders

---

## "use client" Decision Checklist

Adicionar `"use client"` se arquivo:

- [ ] Usa React hooks (useState, useEffect, custom hooks)
- [ ] Importa de `next/navigation` (useRouter, etc)
- [ ] Tem event handlers (onClick, etc) ou usa browser APIs

**Decision tree completo**: [`conventions/use-client.md#decision-tree`](../conventions/use-client.md#decision-tree)

---

## TypeScript Type Validation

- [ ] All exports have explicit types
- [ ] All function parameters are typed
- [ ] All functions have return type annotation
- [ ] No `any` type (use proper types or `unknown`)
- [ ] Constants have explicit type annotation
- [ ] Interface vs type used correctly:
  - [ ] `interface` for component props
  - [ ] `interface` for object shapes
  - [ ] `type` for unions
  - [ ] `type` for complex compositions
  - [ ] `enum` for fixed values only

---

## Pre-commit Checklist

Before committing new code:

- [ ] All files follow naming conventions
- [ ] No `.constants.ts` files (use `.utils.ts` instead)
- [ ] All hooks have JSDoc
- [ ] All utils have JSDoc
- [ ] Constants use SCREAMING_SNAKE_CASE
- [ ] All `"use client"` directives are correct
- [ ] Import paths use `@/` alias
- [ ] No relative paths to parent directories
- [ ] Types are in `*.types.ts` files
- [ ] Utils are in `*.utils.ts` files
- [ ] Barrel exports (index.tsx) don't expose internals
- [ ] Run linter/type checker
- [ ] No console.log statements (unless intentional)

---

## File Organization Check

For complex component with multiple files:

```
ComponentName/
├─ [ ] index.tsx (barrel export)
├─ [ ] ComponentName.tsx (main component)
├─ [ ] component-name.types.ts (types)
├─ [ ] component-name.utils.ts (utils + constants)
├─ [ ] SubComponent.tsx (if public, in index.tsx)
├─ [ ] InternalComponent.tsx (if private, NOT in index.tsx)
└─ [ ] styles.css (optional)
```

Verification:
- [ ] Main component file name matches folder name
- [ ] Private components not in index.tsx
- [ ] No `.constants.ts` file (use utils instead)
- [ ] Types file uses kebab-case
- [ ] Utils file uses kebab-case
- [ ] Component files use PascalCase

---

## Related Guides

- **File types**: [`file-types/`](../file-types/)
- **Conventions**: [`conventions/`](../conventions/)  
- **Documentation**: [`documentation/jsdoc.md`](../documentation/jsdoc.md)
- **Examples**: [`timeline.md`](timeline.md), [`hooks.md`](hooks.md)
