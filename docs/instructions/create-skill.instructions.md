# Create Skill Instructions

Use this guide to create new skills in a consistent, maintainable way.

## Rules

- MUST place the skill under `.github/skills/skill-name/`
- MUST create a `SKILL.md` file with proper frontmatter
- MUST use kebab-case for the skill folder name
- MUST use kebab-case for the skill name in frontmatter
- MUST include clear description, rules, examples, and validation checklist
- MUST add the new skill to the skills list in `.github/copilot-instructions.md`
- MUST reference related skills in the content when applicable
- MUST NOT create duplicate or overlapping skills

## When to Create a New Skill

Create a new skill when:

- A task is repeated frequently across the project
- There are specific conventions or rules to follow
- The task requires multiple steps or validation
- New team members need guidance on a specific process

Do NOT create a skill when:

- It is a one-time task
- It duplicates an existing skill
- It is too generic (for example, "write good code")
- It is already well-documented in standard framework docs

## Skill Naming Guidelines

### Folder and File Names

- Use kebab-case for folders: `add-component`, `create-skill`
- Main file MUST be `SKILL.md` (uppercase)
- Additional files use kebab-case: `component-example.md`

### Skill Name Pattern

- Use verb "add" + noun format: `add-component`, `add-hook`
- Keep it concise (2-3 words max)
- Be specific about the action

### Examples

- OK: `add-component` - Clear action + target
- OK: `add-jsdoc` - Clear action + target
- Avoid: `component` - No action verb
- Avoid: `add-new-react-component-to-project` - Too verbose

## File Structure

```
.github/skills/skill-name/
├── SKILL.md              # Main skill documentation (required)
└── skill-example.md      # Additional examples (optional)
```

## File Format (`SKILL.md`)

### Frontmatter (Required)

```markdown
---
name: skill-name
description: Brief description of what the skill does.
---
```

### Content Structure (Recommended Order)

1. Introduction - Brief explanation of the skill's purpose
2. Rules - Mandatory requirements (MUST/MUST NOT)
3. File Structure - Expected structure (if applicable)
4. Examples - Good and bad examples with explanations
5. Validation Checklist - Step-by-step verification

## Example

### Good Example

File: `.github/skills/add-test/SKILL.md`

````markdown
---
name: add-test
description: Add unit tests following the project conventions for testing.
---

To add tests to the codebase, follow the guidelines below.

---

# Rules

- MUST place tests in `__tests__/` folder next to component
- MUST name test files with `.test.tsx` extension
- MUST use descriptive test names
- MUST test all exported functions or components

---

## File Structure

src/components/custom/ComponentName/
├── ComponentName.tsx
├── component-name.types.ts
├── component-name.utils.ts
└── **tests**/
├── ComponentName.test.tsx
└── component-name.utils.test.ts

---

## Examples

### Good Example

```typescript
import { render, screen } from "@testing-library/react";
import ComponentName from "../ComponentName";

describe("ComponentName", () => {
  it("renders with correct props", () => {
    render(<ComponentName title="Test" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
```

### Bad Example

```typescript
test("works", () => {
  expect(true).toBe(true);
});
```

Why this is wrong:

- Test name is not descriptive
- Tests nothing meaningful
- No component rendering

---

## Validation Checklist

- [ ] Test file is in `__tests__/` folder
- [ ] File name ends with `.test.tsx` or `.test.ts`
- [ ] Test names are descriptive
- [ ] All exported functions are tested
- [ ] Tests are meaningful and specific
````

### Bad Example

File: `.github/skills/do-stuff/SKILL.md`

```markdown
# Do Stuff

Just do stuff correctly.

Use best practices.
```

Why this is wrong:

- Missing frontmatter
- No clear rules or structure
- No examples
- Too vague and not actionable
- Missing validation checklist

## Add Skill to Copilot Instructions

After creating the skill, add it to `.github/copilot-instructions.md`:

```markdown
<skill>
<name>skill-name</name>
<description>Brief description of what the skill does.</description>
<file>/workspaces/turma.dev/.github/skills/skill-name/SKILL.md</file>
</skill>
```

Location: inside the `<skills>` section, maintain alphabetical order.

---

## ✅ Validation Checklist

- [ ] Skill folder created in `.github/skills/skill-name/`
- [ ] Folder name uses kebab-case
- [ ] `SKILL.md` file exists with correct structure
- [ ] Frontmatter includes `name` and `description`
- [ ] Name matches folder name (kebab-case)
- [ ] Rules section uses MUST/MUST NOT format
- [ ] Examples include both good (👍) and bad (❌) cases
- [ ] Bad examples explain "Why this is wrong"
- [ ] Validation checklist is comprehensive
- [ ] Skill added to `.github/copilot-instructions.md` in alphabetical order
- [ ] Description is clear and concise
- [ ] Skill doesn't duplicate existing skills
