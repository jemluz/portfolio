# turma.dev

## First of all! Check `config-files/` folder

The `config-files` folder only will work if you move them to root folder. They are grouped into a folder just to facilitate your initial orientation on this template (to avoid the risk of mixing files with same name when running a CLI command for example)

The template-files folder must die when you finished your environment preparation.

# To understand the project

Read `docs/` files.

## docs folder

The `docs/` folder explains the project's vision, architecture, conventions, and processes. Prefer concise pages that explain _why_ as well as _how_, and update documentation alongside code changes to keep it accurate and useful.

- Project purpose and scope (vision, goals, and audience).
- Architecture and domain concepts (high-level, stack-agnostic descriptions).
- Contributor and development guides (workflow, branching, PR requirements, code style).
- Decision records and RFCs (design trade-offs and rationale).
- UX/UI principles, API contracts, example usage, and how-to guides.

# To work in

Focus on: `docs/dev-workflow.md` to understand the dev workflow

## .github folder

The `.github` folder stores GitHub-specific configuration and workflow files that help standardize repository collaboration and automation. Common contents include:

- `ISSUE_TEMPLATE/` and `pull_request_template.md` to guide contributors when opening issues or PRs.
- `copilot-instructions.md` to give context to copilot agent.

Cada dev tem uma história - conte a sua para a turma

## Instalation

- run `nvm install` to get the npm version defined by `.nvmrc`
- run `nvm alias default lts/{version_name}` if you want to set that npm version as default

# Patterns to follow

At this section we have some patterns defined.

### Code Formatting

- There is an .editorconfig file to set what is expected as code formatting standards
- Prettier was installed here so you can use the scripts `npm run lint:check` and `npm run lint:fix` to solve formatting issues
- You can also use `npm run eslint` also

### Documentation Standards

**JSDoc is mandatory for all utility functions and hooks**

- Every function in `src/hooks/` must have JSDoc documentation
- Every function in `src/components/**/*/utils.ts` files must have JSDoc documentation
- JSDoc should include:
  - Function description
  - `@param` tags for all parameters with types and descriptions
  - `@returns` tag describing the return value
  - `@example` tag with at least one usage example when applicable

**Example:**
```typescript
/**
 * Hook to detect if the current viewport matches a given media query.
 * 
 * @param query - The media query string to test (e.g., "(min-width: 769px)")
 * @returns A boolean indicating whether the media query matches
 * 
 * @example
 * ```tsx
 * const isDesktop = useMediaQuery("(min-width: 769px)");
 * ```
 */
export function useMediaQuery(query: string): boolean {
  // implementation
}
```

### Working with issues + branchs

1. First create a issue
2. Set the issue title rightly, use the pattern `[TURMA-XXXXX] + issue_title`
3. Use the generated issue number (#X...) to fill the `XXXXX` part

   3.1 As example: if the issue is `#86` the code will be `TURMA-00086`

   3.2 As another: if is `#3` will be `TURMA-00003`

4. Follow the pattern `feat/TURMA-XXXXX` to create branchs based on the issue that was opened

### Issue + Branch Example

This [issue #1](https://github.com/jemluz/turma.dev/issues/1) is linked with [feat/TURMA-00001](https://github.com/jemluz/turma.dev/tree/feat%2FTURMA-00001) branch
<img width="1254" height="807" alt="image" src="https://github.com/user-attachments/assets/eb301820-9742-416d-8656-16cfc5f580fd" />
