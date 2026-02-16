# Barrel Export Files (index.tsx)

**File Pattern**: `components/custom/ComponentFolder/index.tsx`

---

## Rules

- MUST re-export only public components
- MUST use named exports for subcomponents
- MUST use default export for main component
- MUST NOT contain component logic
- Private subcomponents MUST NOT appear in index

---

## Structure

```tsx
export { default as Timeline } from './Timeline';
export { default as TimelineNavButtonsMobile } from './TimelineNavButtonsMobile';
export { default as TimelineNavButtonsDesktop } from './TimelineNavButtonsDesktop';

// DO NOT export internal components like YearButton, YearBtnLeftBullet
```

---

## Public vs Private Components

**Public Components** (exported in index.tsx):
- Main component of the module
- Subcomponents intended for external use
- Reusable components needed by parent components

**Private Components** (NOT in index.tsx):
- Internal subcomponents used only within the module
- Implementation details
- Helper components

---

## Validation Checklist

- [ ] Main component exportado como default
- [ ] Componentes internos NÃO exportados
- [ ] Sem lógica de componente neste arquivo

**Checklist completa**: [`examples/validation.md#creating-barrel-export-indextsx`](../examples/validation.md#creating-barrel-export-indextsx)

---

## Related Guides

- **Component structure**: [`file-types/01-components.md`](01-components.md)
- **Import patterns**: [`conventions/imports.md`](../conventions/imports.md)

---

## Example

**Ver estrutura completa**: [`examples/timeline.md#directory-structure`](../examples/timeline.md#directory-structure)

**index.tsx**:
```tsx
// Public API - main component
export { default as Timeline } from './Timeline';

// Public API - subcomponents for external use
export { default as TimelineNavButtonsMobile } from './TimelineNavButtonsMobile';
export { default as TimelineNavButtonsDesktop } from './TimelineNavButtonsDesktop';

// YearButton, YearBtnLeftBullet are NOT exported (internal only)
```

**Usage by parent components**:
```tsx
// Other files can import
import { Timeline } from '@/components/custom/Timeline';

// But cannot import internal components
// import { YearButton } from '@/components/custom/Timeline'; // ✗ Not exported!
```
