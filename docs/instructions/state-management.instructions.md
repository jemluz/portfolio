# State Management Rules

This guide defines how state must be organized in turma.dev using Context API, custom hooks, and local component state.

## Architecture Rules

- MUST use Context API for shared state consumed by multiple components
- MUST keep local-only UI state inside components with `useState`
- MUST encapsulate reusable logic in custom hooks
- MUST maintain unidirectional data flow (action -> state update -> derived values -> UI)
- MUST keep shared state contracts strictly typed with TypeScript

## Context Rules

- MUST create a context only when state is truly shared and persistent across sibling/related trees
- MUST memoize context callbacks with `useCallback`
- MUST memoize derived values with `useMemo` when recalculation cost or rerenders matter
- MUST keep context value shape minimal and explicit
- MUST avoid putting purely presentational toggles in global context

## Hook Rules

- MUST place reusable behavior in hooks under `src/hooks/`
- MUST keep hook responsibilities focused (single concern)
- MUST document hooks with JSDoc
- MUST prefer composing hooks over creating large monolithic hooks

## Local State Rules

- MUST use local state for component-scoped interactions (dropdowns, temporary UI transitions)
- MUST avoid promoting local state to context without clear cross-component need
- MUST keep local state names explicit and domain-oriented

## Performance and Predictability

- MUST prevent avoidable rerenders in shared state paths
- MUST derive computed state from source state instead of duplicating truth
- MUST avoid circular updates between components and context actions

## What to Avoid

- MUST NOT introduce external state libraries without explicit project decision
- MUST NOT duplicate the same state in context and local component state
- MUST NOT mix unrelated domains in a single context provider

## Validation Checklist

- [ ] Shared state is in Context API only when justified
- [ ] Reusable logic is extracted to focused custom hooks
- [ ] Local UI state remains local
- [ ] Memoization is applied where needed (`useCallback`/`useMemo`)
- [ ] Types and data flow are clear and unidirectional
