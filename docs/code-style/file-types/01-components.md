# Component Files (.tsx)

**File Pattern**: `components/custom/*/ComponentName.tsx`

---

## Rules

- MUST export component as default export
- MUST have `"use client"` at line 1 if file contains hooks OR event listeners OR client-side interactivity
- MUST have `"use client"` at line 1 if file imports from `next/navigation`
- MUST NOT have `"use client"` if component only renders static content and imports

---

## Import Order (strict)

1. `"use client"` (se necessário)
2. React/Next.js imports
3. Third-party libraries
4. Absolute imports (`@/`)
5. Relative imports
6. CSS imports

**Ordem completa e exemplos**: [`conventions/imports.md#import-order`](../conventions/imports.md#import-order)

---

## Type Imports

- MUST import types from `./ComponentName.types.ts`
- MUST use named imports for types
- Example: `import { ComponentNameProps, VariantType } from "./component-name.types";`

---

## Structure Template

```tsx
"use client"; // (optional)

import { useState } from "react";
import SomeExternalLib from "external-lib";
import { myUtil } from "@/lib/utils";
import { ComponentNameProps } from "./component-name.types";
import "./styles.css"; // (optional)

export default function ComponentName(props: ComponentNameProps) {
  // implementation
  return <div>...</div>;
}
```

---

## Validation Checklist

- [ ] Exatamente um `export default`
- [ ] `"use client"` presente se usa hooks/events/browser APIs
- [ ] Imports usam `@/` alias para `src/`
- [ ] Props tipadas com `ComponentNameProps`

**Checklist completa**: [`examples/validation.md#component-file-tsx`](../examples/validation.md#component-file-tsx)

---

## Related Guides

- **When to use "use client"**: [`conventions/use-client.md`](../conventions/use-client.md)
- **Import rules**: [`conventions/imports.md`](../conventions/imports.md)
- **Type definitions**: [`file-types/02-types.md`](02-types.md)
- **Real examples**: [`examples/timeline.md`](../examples/timeline.md)

---

## Example

```tsx
"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import BulletList from "./BulletList";
import ContentList from "./ContentList";
import YearTitle from "./YearTitle";
import { cn } from "@/lib/utils";

export default function ContentArea() {
  const isDesktop = useMediaQuery("(min-width: 769px)");

  return (
    <div className={cn(
      "content-area flex flex-col self-start md:pl-6 max-h-[290px] h-[290px]",
      !isDesktop && "mt-6"
    )}>
      {isDesktop && <YearTitle />}
      <div className="content-view flex justify-between max-h-[230px] h-[230px]">
        <ContentList />
        <BulletList />
      </div>
    </div>
  );
}
```

**Why "use client"**: Uses `useMediaQuery` hook (custom hook with `useState`/`useEffect`)
