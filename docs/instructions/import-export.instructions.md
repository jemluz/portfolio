# Import and Export Rules

Import and export patterns are critical for maintaining a clean and scalable codebase. This guide outlines the conventions for how to structure imports and exports across different file types in the project.

## Imports MUST follow these rules:

### Rules

- MUST use absolute imports with `@/` alias for all internal modules
- MUST use relative imports only for files in the same folder
- MUST NOT use relative imports for sibling or parent folders
- MUST follow the specified import order
- MUST use [use-client instructions](./use-client.instructions.md) to determine when to add `"use client"` directive

### Scenarios & Patterns

| Scenario              | Pattern            | Example                                                 |
| --------------------- | ------------------ | ------------------------------------------------------- |
| From `src/` directory | Use `@/` alias     | `import { cn } from "@/lib/utils"`                      |
| From same folder      | Relative is OK     | `import { util } from "./component.utils"`              |
| From sibling folder   | Absolute preferred | `import { Button } from "@/components/ui/button"`       |
| From parent folders   | Absolute preferred | `import { useMediaQuery } from "@/hooks/useMediaQuery"` |

---

### Invalid Import Patterns

```tsx
// ❌ Wrong: relative path when absolute available
import { Button } from "../../../ui/button";

// ❌ Wrong: missing @ alias
import { util } from "src/lib/utils";

// ❌ Wrong: incorrect path
import { Button } from "@components/ui/button"; // should be @/
```

---

### Import Order

All component files MUST follow this strict order, separating groups with a blank line:

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

## Exports MUST follow these rules:

### Rules

- MUST re-export only public components
- MUST use default export for main component
- MUST use named exports for subcomponents intended for external use
- MUST NOT export types, utils, or private components from index.tsx

### Scenarios & Patterns

| Scenario            | Pattern        | Example                                                                             |
| ------------------- | -------------- | ----------------------------------------------------------------------------------- |
| Main component      | Default export | `export { default as Timeline } from './Timeline';`                                 |
| Subcomponents       | Named exports  | `export { default as TimelineNavButtonsMobile } from './TimelineNavButtonsMobile';` |
| Internal components | No export      | `YearButton.tsx` (NOT exported in index.tsx)                                        |
| Types and utils     | No export      | `export interface TimelineProps` (NOT in index.tsx)                                 |

### Invalid Export Patterns

```tsx
// ❌ Wrong: exporting internal component
export { default as YearButton } from "./YearButton";

// ❌ Wrong: exporting types from index
export type { TimelineProps } from "./Timeline.types";

// ❌ Wrong: exporting utils from index
export { formatContentLabel } from "./component-name.utils";
```

### Export Order

```tsx
1. Main component (default export)
2. Subcomponents (named exports)
3. No exports for internal components, types, or utils
```

**Example**:

```tsx
export { default as Timeline } from "./Timeline";
export { default as TimelineNavButtonsMobile } from "./TimelineNavButtonsMobile";
// YearButton is NOT exported here, it's internal to Timeline
```

## Dependency Matrix

When you modify a file type, these files MUST be updated:

| File Modified             | Files That Must Update    | When                                        | Required Action                          |
| ------------------------- | ------------------------- | ------------------------------------------- | ---------------------------------------- |
| `component-name.types.ts` | `ComponentName.tsx`       | Any new/changed type exported               | Update imports if type signature changed |
| `component-name.types.ts` | `component-name.utils.ts` | Types referenced in utils                   | Verify type usage in functions           |
| `component-name.utils.ts` | `ComponentName.tsx`       | New util functions added                    | Add import if component uses them        |
| `ComponentName.tsx`       | `index.tsx` (barrel)      | New component created                       | Add default export                       |
| `ComponentName.tsx`       | Parent imports            | If using new hooks                          | Add `"use client"` directive at line 1   |
| `SubComponent.tsx`        | `index.tsx` (barrel)      | New subcomponent created (for external use) | Add named export                         |
| `SubComponent.tsx`        | `index.tsx` (barrel)      | Making subcomponent private/internal        | Remove export from index.tsx             |
| `index.tsx` (barrel)      | Parent component imports  | Exports changed                             | Update parent imports accordingly        |

---

## Real Example: ContentArea Impact

```
If you modify: src/components/custom/ContentArea/content-area.types.ts
├─ MUST CHECK: ContentArea.tsx uses correct interface
├─ MUST CHECK: YearTitle.tsx, ContentList.tsx, BulletList.tsx prop types
├─ MUST CHECK: index.tsx exports (if type became private)
└─ MIGHT BREAK: Any parent using ContentArea props
```
