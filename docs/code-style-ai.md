# Code Style for AI Agents - Decision Tree

**Purpose**: Quick reference guide to load only the code style rules you need for your current task.

> 💡 **For AI Agents**: This is your entry point. Read this file first, then load specific guides based on what you're doing.

---

## 🎯 What are you doing?

### Creating New Files

| Task | Primary Guide | Supporting Guides |
|------|--------------|-------------------|
| **New Component** | [`file-types/01-components.md`](code-style/file-types/01-components.md) | [`conventions/use-client.md`](code-style/conventions/use-client.md), [`conventions/imports.md`](code-style/conventions/imports.md) |
| **New Hook** | [`file-types/04-hooks.md`](code-style/file-types/04-hooks.md) | [`documentation/jsdoc.md`](code-style/documentation/jsdoc.md), [`examples/hooks.md`](code-style/examples/hooks.md) |
| **New Types** | [`file-types/02-types.md`](code-style/file-types/02-types.md) | [`conventions/typescript.md`](code-style/conventions/typescript.md), [`conventions/naming.md`](code-style/conventions/naming.md) |
| **New Utils** | [`file-types/03-utils.md`](code-style/file-types/03-utils.md) | [`documentation/jsdoc.md`](code-style/documentation/jsdoc.md) |
| **New Constants** | [`file-types/03-utils.md#constants`](code-style/file-types/03-utils.md) | [`conventions/naming.md`](code-style/conventions/naming.md) |
| **Barrel Export (index.tsx)** | [`file-types/05-barrel-exports.md`](code-style/file-types/05-barrel-exports.md) | - |

---

### Modifying Existing Files

| Task | Guide to Read |
|------|--------------|
| **Adding imports** | [`conventions/imports.md`](code-style/conventions/imports.md) |
| **Deciding "use client"** | [`conventions/use-client.md`](code-style/conventions/use-client.md) |
| **Adding constants** | [`file-types/03-utils.md#constants`](code-style/file-types/03-utils.md) |
| **Writing JSDoc** | [`documentation/jsdoc.md`](code-style/documentation/jsdoc.md) |
| **Renaming files** | [`conventions/naming.md`](code-style/conventions/naming.md) |
| **Fixing types** | [`file-types/02-types.md`](code-style/file-types/02-types.md), [`conventions/typescript.md`](code-style/conventions/typescript.md) |

---

### Understanding Patterns

| Need | Guide |
|------|-------|
| **See real-world example** | [`examples/timeline.md`](code-style/examples/timeline.md) |
| **Hook examples** | [`examples/hooks.md`](code-style/examples/hooks.md) |
| **Validation checklist** | [`examples/validation.md`](code-style/examples/validation.md) |
| **Understand "use client"** | [`conventions/use-client.md`](code-style/conventions/use-client.md) |
| **Import dependencies** | [`conventions/imports.md#dependency-matrix`](code-style/conventions/imports.md) |

---

## 🔄 Decision Trees

### Should I use "use client"?

```
START
│
├─ Uses hooks? (useState, useEffect, custom hooks) → YES: Add "use client"
├─ Uses next/navigation? (useRouter, etc) → YES: Add "use client"  
├─ Has event handlers? (onClick, etc) → YES: Add "use client"
├─ Uses browser APIs? (window, document) → YES: Add "use client"
└─ None of above → NO: Server component (no "use client")
```

**Full decision tree**: [`conventions/use-client.md`](code-style/conventions/use-client.md)

---

### Where should constants go?

```
START: Adding a constant
│
├─ Component-specific? → component-name.utils.ts
├─ Shared across components? → src/lib/utils.ts
└─ Type-related enum? → component-name.types.ts
```

**Full guide**: [`file-types/03-utils.md#constants`](code-style/file-types/03-utils.md)

---

## 📚 All Guides

### File Types
- [`01-components.md`](code-style/file-types/01-components.md) - Component files (.tsx)
- [`02-types.md`](code-style/file-types/02-types.md) - Type files (.types.ts)
- [`03-utils.md`](code-style/file-types/03-utils.md) - Utility files (.utils.ts) + Constants
- [`04-hooks.md`](code-style/file-types/04-hooks.md) - Hook files (useHookName.ts)
- [`05-barrel-exports.md`](code-style/file-types/05-barrel-exports.md) - Index files (index.tsx)

### Conventions
- [`use-client.md`](code-style/conventions/use-client.md) - "use client" directive rules
- [`imports.md`](code-style/conventions/imports.md) - Import rules + dependency matrix
- [`naming.md`](code-style/conventions/naming.md) - Naming conventions for all types
- [`typescript.md`](code-style/conventions/typescript.md) - TypeScript patterns

### Documentation
- [`jsdoc.md`](code-style/documentation/jsdoc.md) - JSDoc templates and requirements

### Examples
- [`timeline.md`](code-style/examples/timeline.md) - Complete Timeline component example
- [`hooks.md`](code-style/examples/hooks.md) - Real hook examples
- [`validation.md`](code-style/examples/validation.md) - Validation checklists

---

## 💡 Tips for AI Agents

1. **Load on demand**: Don't load all guides at once. Start with the decision tree, identify your task, then load specific guides.

2. **Use validation checklists**: After implementing, use [`examples/validation.md`](code-style/examples/validation.md) to verify.

3. **Check examples first**: If unsure, load [`examples/timeline.md`](code-style/examples/timeline.md) or [`examples/hooks.md`](code-style/examples/hooks.md) to see real patterns.

4. **Common pitfalls**:
   - ❌ Creating `.constants.ts` files → ✅ Use `.utils.ts` instead
   - ❌ Missing "use client" → ✅ Check decision tree
   - ❌ Missing JSDoc → ✅ Required for hooks and utils
   - ❌ Using relative imports for src/ → ✅ Use `@/` alias

5. **Dependency awareness**: When modifying files, check [`conventions/imports.md#dependency-matrix`](code-style/conventions/imports.md) for cascade effects.

6. **Critical Rule**: Never modify files in `src/components/ui/` (shadcn/ui managed components)

---

**Last Updated**: 2026-02-16
**Version**: 2.0 (Modular)
