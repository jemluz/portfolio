# 📋 Component Example - Timeline Component

Real component from the codebase demonstrating all code style rules.

---

## 📁 Directory Structure

```
src/components/custom/Timeline/
├── index.tsx                        # Barrel exports (public API)
├── Timeline.tsx                     # Main component
├── YearButton.tsx                   # Internal subcomponent
├── YearBtnLeftBullet.tsx            # Internal subcomponent
├── BlackBorder.tsx                  # Internal subcomponent
├── TimelineNavButtonsDesktop.tsx    # Public subcomponent
├── TimelineNavButtonsMobile.tsx     # Public subcomponent
├── timeline.types.ts                # Type definitions
├── timeline.utils.ts                # Utility functions
└── styles.css                       # Component styles
```

See **src/components/custom/Timeline** for the complete directory structure.

```
src/components/custom/Timeline
```

---

## File 1: timeline.types.ts

See the type definitions in **src/components/custom/Timeline/timeline.types.ts**.

```
src/components/custom/Timeline/timeline.types.ts
```

**Key points**:
- ✓ Named exports only
- ✓ `TimelineProps` type for component props (`{ComponentName}Props` name format)
- ✓ Union types for complex data shapes
- ✓ Enum with SCREAMING_SNAKE_CASE keys

---

## File 2: timeline.utils.ts

See the utility functions in **src/components/custom/Timeline/timeline.utils.ts**.

```
src/components/custom/Timeline/timeline.utils.ts
```

**Key points**:
- ✓ Constants at top with SCREAMING_SNAKE_CASE (ver **03-utils.md#constants**)
- ✓ Complete JSDoc with @param, @returns, @example
- ✓ Pure functions (no side effects)
- ✓ Named exports

---

## File 3: Timeline.tsx (Main Component)

See the main component implementation in **src/components/custom/Timeline/Timeline.tsx**.

```
src/components/custom/Timeline/Timeline.tsx
```

**Key points**:
- ✓ "use client" at line 1 (uses hooks)
- ✓ Imports ordered correctly
- ✓ Component name matches file name
- ✓ Imports follow strict order (see Import Order checklist)
- ✓ Uses custom hooks for logic separation
- ✓ Default export
- ✓ No inline logic - delegated to hooks/utils

---

## File 4: YearButton.tsx (Subcomponent - Internal)

See the subcomponent implementation in **src/components/custom/Timeline/YearButton.tsx**.

```
src/components/custom/Timeline/YearButton.tsx
```

**Key points**:
- ✗ NO "use client" (presentational only)
- ✓ Props interface inline (small subcomponent)
- ✓ Uses `memo` for performance
- ✓ `forwardRef` to accept ref from parent
- ✓ Default export

---

## File 5: index.tsx (Barrel Export)

See the barrel export in **src/components/custom/Timeline/index.tsx**.

```
src/components/custom/Timeline/index.tsx
```

**Key points**:
- ✓ Exports only public API
- ✓ Main component + public subcomponents
- ✓ Internal components not exposed
- ✓ Comment explains what's private

---

## 📝 Import Order Checklist

1. [ ] `"use client"` directive (se necessário)
2. [ ] React/Next.js imports
3. [ ] Third-party library imports
4. [ ] Absolute imports com `@/` alias
5. [ ] Relative imports (mesma pasta)
6. [ ] CSS file imports


## ✅ Analysis

### ✓ Follows all rules:
1. **File organization**: Separate files for types, utils, components
2. **"use client"**: Only on Timeline.tsx (uses hooks)
3. **Imports**: Correct order, uses `@/` alias
4. **Constants**: In utils file with SCREAMING_SNAKE_CASE
5. **JSDoc**: Complete documentation for utils
6. **Types**: In separate .types.ts file
7. **Exports**: Barrel export for public API

### Component hierarchy:
See the component tree in **src/components/custom/Timeline**.

```
src/components/custom/Timeline
```

---

## 💡 Usage Example

See the usage in **src/app/background/page.view.tsx**.

```
src/app/background/page.view.tsx
```
