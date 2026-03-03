# UI Guidelines

## Purpose

These guidelines describe **experience principles**, not visual assets or libraries.

They define _how things should feel and behave_, independent of implementation.

---

## Core Principles

- **Clarity first**
  The interface should never compete with the content or purpose.

- **Simplicity by design**
  Fewer elements, fewer choices, fewer distractions.

- **Hierarchy over decoration**
  Structure and spacing communicate more than visual effects.

- **Consistency over novelty**
  Predictability builds trust and understanding.

---

## Content-Centered Design

- Interfaces should support reading, thinking, and understanding
- Avoid visual noise
- Avoid unnecessary animations or effects
- Every element should justify its presence

---

## Language & Tone

- Clear and direct
- Human, not institutional
- Accessible without being simplistic
- Avoid intimidation or excessive formalism

---

## Motion & Animation

Animations should support understanding, never distract from it:

- **Subtle and purposeful**: Animations enhance clarity, not decoration
- **Fast enough to feel responsive, slow enough to understand**: Prefer 200-400ms durations
- **Prefer transform and opacity**: These properties are efficient and feel smooth
- **Maintain reading flow**: Avoid animations that compete for attention
- **Consistency**: Repeated interactions should use identical motion patterns

Animations guide attention to:

- State changes (selected → deselected)
- Navigation transitions (year → year)
- Content visibility (fade in/out)

---

## Feedback & Interaction

Users need to understand:

- Which element is interactive (affordance)
- What will happen if they interact (predictability)
- What happened after interaction (feedback)

**Visual feedback strategies to consider**:

- **Opacity/Transparency**: Reduces visual weight while maintaining presence
- **Color shifts**: Subtle hue or saturation changes for state indication
- **Scale/Size**: Slight enlargement to indicate selection or importance
- **Border/Underline**: Structural emphasis without competing for attention
- **Multiple layers**: Combining weak signals (opacity + scale + color) for clarity without noise

**States to indicate across interactive elements**:

- Default: Normalized appearance
- Hover: Visual signal that element is interactive
- Active: Clear indication of current selection
- Disabled: Reduced visual weight, no interaction affordance
- Focus: Essential for keyboard navigation and accessibility

---

## Responsive Design

The interface must adapt to context without changing its purpose:

- **Mobile-first thinking**: Start with constraints, expand with capability
- **Single-column by default**: Simplicity first, then progressive enhancement
- **Touch-friendly targets**: Adequate size for accurate interaction on mobile
- **Preserve content hierarchy**: Information structure remains clear across breakpoints
- **Maintain reading experience**: Text and spacing scale appropriately

**Breakpoints should reflect content, not device**: Choose breakpoints based on when the layout breaks, not device names.

---

## Established Patterns

These decisions have been made and serve the principles above:

**Colors**:

- OKLCH color space for predictable perceptual lightness
- Light mode: Light backgrounds (#ededed) with dark text
- Dark mode: Dark backgrounds with light text
- Accent and interaction colors support but don't dominate

**Typography**:

- Display/heading fonts: Monomaniac One, Coustard (distinctive but legible)
- Body/UI fonts: Changa, SUSE (clear and distinctive)
- Font choice supports visual hierarchy

**Components**:

- Radix UI for unstyled, accessible primitives
- shadcn/ui for themed component implementations
- Custom components layer for domain-specific patterns

**Animation patterns**:

- Standard duration: 300ms
- Easing: Prefer ease-out for responsiveness
- Scope: Individual elements, not full-page transitions

**Interaction patterns**:

- Year selection: Visual indicator with smooth transitions
- Content navigation: Smooth fades and opacity changes
- State indication: Opacity and scale for active/inactive states

---

## Deferred Decisions

The following remain undefined and should be chosen when specific needs arise:

- Specific micro-interaction timing for edge cases
- Advanced accessibility features (haptic feedback, audio cues)
- Dark mode color refinements based on user feedback
- Animation easing for future motion-heavy features

Decisions should be made in service of the principles above.
