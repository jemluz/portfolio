---
name: add-enum
description: Add a new enum to the codebase following the project conventions for TypeScript enums.
---

To add a new enum to the codebase, follow the guidelines below to ensure consistency in structure, naming, and placement.

# 📌 Rules

- MUST use named export (do NOT use default export)
- MUST be declared in a `.types.ts` file (NOT in `.utils.ts`)
- Must use PascalCase with `Enum` suffix for the enum name (e.g., `ButtonTypeEnum`) for clarity and consistency
- MUST use SCREAMING_SNAKE_CASE (ALL_CAPS_WITH_UNDERSCORES) for enum keys (e.g., `GITHUB`, `LINKEDIN`)
- MUST use SCREAMING_SNAKE_CASE for string values that represent fixed options (e.g., `CURRENT`, `PAST`)
- MUST be used only for fixed, known values (not for dynamic or runtime values)
- MUST NOT contain logic or functions

## 📍 Where to Place

| Scope              | Location                  | Example                                        |
| ------------------ | ------------------------- | ---------------------------------------------- |
| Component-specific | `component-name.types.ts` | `export enum ButtonTypeEnum { ... }`           |
| Type-related       | `*.types.ts`              | `export enum StatusEnum { ACTIVE = "ACTIVE" }` |

---

## 🧪 Examples

### 👍 Good Examples

```typescript
// ✓ Correct - Fixed set of button types
export enum ButtonTypeEnum {
  GITHUB = "GITHUB",
  LINKEDIN = "LINKEDIN",
  WEBSITE = "WEBSITE",
  INVALID = "INVALID",
}

// ✓ Correct - Fixed periods
export enum PeriodEnum {
  CURRENT = "CURRENT",
  PAST = "PAST",
}

// ✓ Correct - Status values
export enum StatusEnum {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  PENDING = "PENDING",
}
```

### ❌ Bad Examples

```typescript
// ✗ Wrong: enum name not in SCREAMING_SNAKE_CASE
export enum goToButtonType {
  GITHUB = "github",
  LINKEDIN = "linkedin",
}

// ✗ Wrong: keys not in SCREAMING_SNAKE_CASE
export enum GoToButtonType {
  github = "github",
  linkedin = "linkedin",
}

// ✗ Wrong: using dynamic/runtime values
export enum DynamicItems {
  ITEM_1 = userId,  // ← No! userId is a runtime value
  ITEM_2 = userName,
}

// ✗ Wrong: using default export
export default enum ButtonType {
  PRIMARY = "primary",
}

// ✗ Wrong: declared in .utils.ts instead of .types.ts
// File: component-name.utils.ts
export enum ButtonSize {
  SMALL = "small",
  LARGE = "large",
}
```

**Why these are wrong**:

- Enum name must be SCREAMING_SNAKE_CASE
- Keys must be SCREAMING_SNAKE_CASE
- Values must be SCREAMING_SNAKE_CASE for fixed options
- Enums are for fixed, compile-time values only
- Always use named exports (no default)
- Enums belong in `.types.ts` files, not `.utils.ts`

---

## 💡 When to Use Enums

### ✅ Use enums for:

- Fixed set of options (button types, status codes, themes)
- Values known at development time
- Related constants that belong together
- Type-safe string/number values

### ❌ Don't use enums for:

- Dynamic values from API or database
- Runtime-calculated values
- Values that may change frequently
- User-generated content

---

## ✅ Validation Checklist

- [ ] Enum is declared in a `.types.ts` file
- [ ] Enum name uses PascalCase with `Enum` suffix (e.g., `ButtonTypeEnum`)
- [ ] All keys use SCREAMING_SNAKE_CASE (e.g., `GITHUB`, `LINKEDIN`)
- [ ] String values use SCREAMING_SNAKE_CASE for fixed options (e.g., `"GITHUB"`, `"LINKEDIN"`)
- [ ] Uses named export (`export enum ...`)
- [ ] No default export
- [ ] Enum contains only fixed, known values
- [ ] No dynamic or runtime values
- [ ] No logic or functions in the enum
- [ ] Enum is logically grouped with related types
