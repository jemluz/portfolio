# UI Guidelines Rules

This guide translates turma.dev UX principles into implementation rules for components and pages.

## Core Principles

- MUST prioritize clarity over visual decoration
- MUST keep interfaces content-centered and easy to scan
- MUST prefer consistency over novelty in interaction behavior
- MUST ensure hierarchy through spacing, typography, and structure
- MUST avoid adding UI elements without clear purpose

## Visual and Interaction Rules

- MUST keep interactions predictable across similar components
- MUST provide explicit visual states: default, hover, active, disabled, and focus
- MUST preserve readability in light and dark mode
- MUST avoid visual noise (excessive badges, effects, decorative elements)
- MUST keep touch targets usable on mobile contexts

## Motion and Animation

- MUST use subtle, purposeful animations only when they improve understanding
- MUST keep animation duration in the `200ms-400ms` range
- SHOULD default to `300ms` when no specific value is required
- MUST prefer `transform` and `opacity` for motion effects
- MUST avoid animations that compete with reading flow
- MUST keep repeated interactions using consistent motion patterns

## Responsive Behavior

- MUST use mobile-first thinking
- MUST preserve information hierarchy across breakpoints
- MUST keep single-column simplicity by default unless content requires expansion
- MUST choose breakpoints by content behavior, not device labels

## What to Avoid

- MUST NOT add animations just for decoration
- MUST NOT introduce interaction patterns that conflict with existing ones
- MUST NOT reduce contrast in ways that harm readability
- MUST NOT overload screens with redundant controls

## Validation Checklist

- [ ] Interface supports reading and understanding first
- [ ] Interactive states are visible and consistent
- [ ] Motion is subtle, short, and purposeful
- [ ] Responsive layout preserves hierarchy and usability
- [ ] No unnecessary visual effects were introduced
