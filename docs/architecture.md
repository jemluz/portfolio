# Architecture

## Architectural Philosophy

This architecture is **conceptual, not technical**.

It describes how ideas relate to each other, not how they are implemented in code.
The goal is to remain valid across different stacks, platforms, and tools.

---

## Conceptual Layers

### 1. Intent & Vision

Defines:

- Purpose
- Constraints
- Non-goals
- Values

This layer changes rarely and guides all others.

---

### 2. Domain & Concepts

Defines:

- Core concepts
- Vocabulary
- Rules and mental models
- What the system is _about_

This layer is independent of interfaces or technologies.

---

### 3. Structure & Flow

Defines:

- How information or features are organized
- Relationships between concepts
- User or system journeys

This layer answers _how things connect_, not _how they are built_.

---

### 4. Interaction (Optional)

Defines:

- Points of interaction (human or system)
- Feedback loops
- Inputs and outputs

This layer may evolve or remain minimal.

---

## Invariants

The following should remain stable even if implementation changes:

- Meaning of core concepts
- Vocabulary
- Structural relationships
- Design principles

---

## Decision-Making Rule

If a decision:

- Cannot be explained at the conceptual level
- Depends heavily on a specific tool
- Solves a problem that is not yet understood

It should be postponed.
