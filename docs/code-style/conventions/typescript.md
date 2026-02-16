# TypeScript Patterns

---

## Type Definitions

- MUST use `interface` for object types that define component contracts
- MUST use `type` for union types or complex type aliases
- MUST use `enum` for fixed, known values only
- MUST place types in `*.types.ts` files

---

## Interface vs Type

### Use `interface` for:

**Component props**:
```typescript
export interface TimelineProps {
  years: number[];
  onYearSelect?: (year: number) => void;
}

export interface UserInfoProps {
  name: string;
  avatar: string;
  links: SocialLink[];
}
```

**Object shapes**:
```typescript
export interface TimelineRefs {
  [year: number]: HTMLDivElement | null;
}

export interface YearData {
  year: number;
  items: ContentItem[];
}
```

---

### Use `type` for:

**Union types**:
```typescript
export type ViewMode = "card" | "timeline" | "list";
export type Status = "active" | "inactive" | "pending";
export type Alignment = "left" | "center" | "right";
```

**Complex type compositions**:
```typescript
export type TimelineItem = {
  id: string;
  year: number;
} & (
  | { type: "education"; school: string }
  | { type: "work"; company: string }
);
```

**Function types**:
```typescript
export type ScrollHandler = (event: WheelEvent) => void;
export type YearSelector = (year: number) => void;
```

---

## Enums

**Use for fixed, known values**:

```typescript
// ✓ Correct - fixed set of button types
export enum GoToButtonType {
  GITHUB = "github",
  LINKEDIN = "linkedin",
  WEBSITE = "website",
  INVALID = "invalid",
}

// ✓ Correct - fixed periods
export enum Period {
  CURRENT = "current",
  PAST = "past",
}
```

**Don't use for dynamic values**:

```typescript
// ✗ Wrong - userId is dynamic
export enum DynamicItems {
  ITEM_1 = userId,  // ← No! userId is runtime value
}

// ✓ Better - use union type or constants
export const VALID_USER_ROLES = ["admin", "user", "guest"] as const;
export type UserRole = typeof VALID_USER_ROLES[number];
```

---

## Type Annotations

**Always explicit for exports**:

```typescript
// ✓ Correct
export const DEFAULT_HEIGHT: number = 290;
export const API_ENDPOINTS: Record<string, string> = {
  users: "/api/users",
};

// ✗ Wrong - implicit types
export const DEFAULT_HEIGHT = 290;  // Type not explicit
export const API_ENDPOINTS = {  // Type not explicit
  users: "/api/users",
};
```

**Return types for functions**:

```typescript
// ✓ Correct
export function calculateHeight(base: number): number {
  return base * 2;
}

export function getConfig(): TimelineConfig {
  return { /* ... */ };
}

// ✗ Wrong - missing return type
export function calculateHeight(base: number) {
  return base * 2;
}
```

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

---

## Generic Types

**Component props with children**:

```typescript
export interface CardProps {
  title: string;
  children: React.ReactNode;  // ✓ Use React.ReactNode
}

// Not:
// children: JSX.Element  // ✗ Too restrictive
// children: any  // ✗ Too permissive
```

**Array types**:

```typescript
// ✓ Preferred
years: number[]
items: ContentItem[]

// ✗ Avoid verbose generic syntax
years: Array<number>
items: Array<ContentItem>
```

---

## Related Guides

- **Type files**: [`file-types/02-types.md`](../file-types/02-types.md)
- **Naming conventions**: [`naming.md`](naming.md)
- **Component props**: [`file-types/01-components.md`](../file-types/01-components.md)
