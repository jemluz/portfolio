# TypeScript Patterns

---

## Type Definitions

- MUST use `interface` for object types that define component contracts
- MUST use `type` for union types or complex type aliases
- MUST use `enum` for fixed, known values only
- MUST place types in `*.types.ts` files

---


## Optional vs Required Properties

**Required properties first, optional last**:

```typescript
// ✓ Correct
export interface ComponentProps {
  // Required first
  id: string;
  name: string;
  type: string;
  
  // Optional last
  className?: string;
  onSelect?: (id: string) => void;
  disabled?: boolean;
}

// ✗ Wrong - mixed order
export interface ComponentProps {
  id: string;
  className?: string;  // Optional in middle
  name: string;
  onSelect?: (id: string) => void;
  type: string;
  disabled?: boolean;
}
```