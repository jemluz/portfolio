# Type Files (.types.ts)

**File Pattern**: `components/custom/*/component-name.types.ts`

---

## Rules

- MUST use named exports only (no default export)
- MUST define TypeScript `interface` or `type` for main component props
- Interface naming: `ComponentNameProps`
- MUST define `enum` for fixed string/number values
- MUST NOT contain logic or functions

---

## Enum Naming

- ALL_CAPS_WITH_UNDERSCORES for enum keys
- string values in camelCase

```typescript
export enum GoToButtonType {
  GITHUB = "github",
  LINKEDIN = "linkedin",
  WEBSITE = "website",
  INVALID = "invalid",
}
```

---

## Props Interface Pattern

```typescript
export interface ComponentNameProps {
  // Required properties first
  requiredProp: string;
  anotherRequired: number;
  
  // Optional properties last
  optionalProp?: string;
  optional2?: boolean;
}
```

---

## Type vs Interface

**Regras rápidas**:
- `interface` para component props e object shapes
- `type` para unions e composições complexas
- `enum` para valores fixos conhecidos

**Guia completo com exemplos**: [`conventions/typescript.md#interface-vs-type`](../conventions/typescript.md#interface-vs-type)

---

## Validation Checklist

- [ ] Interface principal nomeada `{ComponentName}Props`
- [ ] Enums usam SCREAMING_SNAKE_CASE nas keys
- [ ] Sem `export default`
- [ ] Sem funções no arquivo

**Checklist completa**: [`examples/validation.md#creating-new-typeinterface`](../examples/validation.md#creating-new-typeinterface)

---

## Related Guides

- **TypeScript patterns**: [`conventions/typescript.md`](../conventions/typescript.md)
- **Naming conventions**: [`conventions/naming.md`](../conventions/naming.md)
- **Component usage**: [`file-types/01-components.md`](01-components.md)

---

## Example

```typescript
// timeline.types.ts
export interface TimelineProps {
  // No props passed - uses context
}

export type YearData = {
  year: number;
  items: ContentItem[];
};

export interface TimelineRefs {
  [year: number]: HTMLDivElement | null;
}

export enum Period {
  CURRENT = "current",
  PAST = "past",
}
```
