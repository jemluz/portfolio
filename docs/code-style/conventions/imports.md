# Import Rules

---

## Mandatory Patterns

| Scenario | Pattern | Example |
|----------|---------|---------|
| From `src/` directory | Use `@/` alias | `import { cn } from "@/lib/utils"` |
| From same folder | Relative is OK | `import { util } from "./component.utils"` |
| From sibling folder | Absolute preferred | `import { Button } from "@/components/ui/button"` |
| From parent folders | Absolute preferred | `import { useMediaQuery } from "@/hooks/useMediaQuery"` |

---

## Invalid Patterns

```tsx
// ❌ Wrong: relative path when absolute available
import { Button } from "../../../ui/button";

// ❌ Wrong: missing @ alias
import { util } from "src/lib/utils";

// ❌ Wrong: incorrect path
import { Button } from "@components/ui/button"; // should be @/
```

---

## Import Order

All component files MUST follow this strict order:

```tsx
1. "use client" (if needed)
2. React/Next.js imports
3. Third-party libraries
4. Absolute imports (@/)
5. Relative imports
6. CSS imports
```

**Example**:
```tsx
"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ComponentNameProps } from "./component-name.types";
import { SOME_CONSTANT } from "./component-name.utils";
import "./styles.css";
```

---

## Dependency Matrix

When you modify a file type, these files MUST be updated:

| File Modified | Files That Must Update | When | Action |
|---------------|------------------------|------|--------|
| `component-name.types.ts` | `ComponentName.tsx` | Any new/changed type exported | Check/update component imports |
| `component-name.types.ts` | `component-name.utils.ts` | Types referenced in utils | Check type usage in functions |
| `component-name.utils.ts` | `ComponentName.tsx` | New util functions added | Check parent component imports |
| `ComponentName.tsx` (main) | `index.tsx` (barrel) | New component created | Add export to index.tsx |
| `SubComponent.tsx` | Main component file | If exported publicly | Remove from index.tsx if making private |
| `*.tsx` (uses hooks) | Check `"use client"` | Any hook added | Add `"use client"` at top |

---

## Cascade Effects

### Editing Types File

```
EDITING component-name.types.ts
↓
May require:
- Update import in ComponentName.tsx
- Update JSDoc examples in utils.ts if type renamed
- Check index.tsx if type is re-exported
```

### Adding Hook to Component

```
EDITING ComponentName.tsx to add hook
↓
May require:
- Add "use client" at line 1 if missing
- Add useHook to imports from @/hooks
- Update parent component (may need "use client" now)
```

### Exporting New Utility Function

```
EDITING component-name.utils.ts to export new function
↓
May require:
- Update JSDoc fully
- Update ComponentName.tsx if using it
- Check if other files should use it too
```

---

## Real Example: ContentArea Impact

```
If you modify: src/components/custom/ContentArea/content-area.types.ts
├─ MUST CHECK: ContentArea.tsx uses correct interface
├─ MUST CHECK: YearTitle.tsx, ContentList.tsx, BulletList.tsx prop types
├─ MUST CHECK: index.tsx exports (if type became private)
└─ MIGHT BREAK: Any parent using ContentArea props
```

---

## Related Guides

- **Component structure**: [`file-types/01-components.md`](../file-types/01-components.md)
- **Type definitions**: [`file-types/02-types.md`](../file-types/02-types.md)
- **"use client" rules**: [`use-client.md`](use-client.md)
