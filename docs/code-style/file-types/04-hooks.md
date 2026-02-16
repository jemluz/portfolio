# Hook Files (useHookName.ts)

**File Pattern**: `src/hooks/useHookName.ts`

---

## Rules

- MUST use named export (do NOT use default export)
- MUST start with `use` prefix (React convention)
- MUST have JSDoc on function
- MUST have `@example` with actual usage code
- MUST handle cleanup if necessary (use `useEffect` cleanup)

---

## JSDoc Requirements

**Obrigatório**:
- Descrição do que o hook faz
- `@param` para cada parâmetro  
- `@returns` descrevendo retorno
- `@example` com uso real do hook

**Template completo**: [`documentation/jsdoc.md`](../documentation/jsdoc.md)  
**Exemplos reais**: [`examples/hooks.md`](../examples/hooks.md)

---

## Validation Checklist

- [ ] Nome começa com `use`
- [ ] JSDoc completo (`@param`, `@returns`, `@example`)
- [ ] Named export (sem default)
- [ ] Cleanup handlers se tem side effects

**Checklist completa**: [`examples/validation.md#creating-new-hook`](../examples/validation.md#creating-new-hook)

---

## Related Guides

- **JSDoc requirements**: [`documentation/jsdoc.md`](../documentation/jsdoc.md)
- **"use client" directive**: [`conventions/use-client.md`](../conventions/use-client.md)
- **Hook examples**: [`examples/hooks.md`](../examples/hooks.md)

---

## Complete Example

**Ver exemplo completo**: [`examples/hooks.md#example-1-usemediaquery-simple-hook`](../examples/hooks.md#example-1-usemediaquery-simple-hook)

**Mini exemplo de estrutura**:
```typescript
"use client";

import { useState } from "react";

/**
 * [Descrição breve do hook]
 * @param param - [descrição]
 * @returns [descrição do retorno]
 * @example
 * ```tsx
 * const value = useHookName(param);
 * ```
 */
export function useHookName(param: string): boolean {
  const [state, setState] = useState(false);
  // implementation
  return state;
}
```
