# Architecture

## Architectural Philosophy

This architecture is **conceptual, not technical**.

It describes how ideas relate to each other, not how they are implemented in code.
The goal is to remain valid across different stacks, platforms, and tools.

---

## Conceptual Layers

### 1. Intent & Vision

**Purpose**: turma.dev exists to enable developers to showcase their professional journey in a clear, temporal, and meaningful way.

**Core Values**:

- **Clarity over speed**: Understanding before implementation
- **Intentionality over convenience**: Every decision serves a purpose
- **Simplicity over accumulation**: What is excluded matters as much as what is included
- **Content-centered design**: Interface supports reading and understanding, not visual noise

**Constraints**:

- Must remain understandable without verbal explanation
- Must feel consistent over time
- Implementation choices should feel obvious when needed

**Non-goals**:

- Not a social network
- Not a framework showcase

This layer changes rarely and guides all others.

---

### 2. Domain & Concepts

**Core Entities**:

- **User**: A developer with a professional identity
  - Has personal information (name, photo, external links)
  - Has a chronological career history (education, experiences, projects)

- **CareerMilestone**: A unit of professional or academic experience
  - Belongs to a year
  - Has temporal information (month, duration, current status)
  - Contains description, location, and related projects
  - Can be active or inactive (visible/hidden)

- **Timeline**: A temporal navigation structure
  - Organizes years chronologically
  - Provides context for career milestones
  - Enables navigation through time

- **Content**: The detailed view of career milestones
  - Filtered by selected year
  - Navigable sequentially (previous/next)
  - Has visual identity (colors) per item

**Vocabulary**:

- **Year**: Primary temporal unit for organizing career milestones
- **Content Item**: Individual career milestone within a year
- **Active Year**: Currently selected year in timeline
- **Current**: Ongoing experience (no end date)

**Mental Model**:

Users navigate through a developer's professional timeline, moving between years and exploring detailed experiences within each period. The interface responds to this temporal navigation, maintaining context and providing smooth transitions between content.

This layer is independent of interfaces or technologies.

---

### 3. Structure & Flow

**Information Hierarchy**:

```
User Identity
    ↓
Timeline (Years)
    ↓
Career Milestones (Experiences/Education)
    ↓
Projects & Details
```

**Component Relationships**:

1. **UserInfo**: Establishes identity and provides external navigation
2. **Timeline**: Controls temporal context (year selection)
3. **ContentArea**: Displays filtered content based on timeline selection

**Navigation Flows**:

**Temporal Navigation**:

```
User selects year → Timeline updates → Content filters by year →
First item auto-selected → Display updates
```

**Content Navigation**:

```
User scrolls/swipes → Visibility detection → Active item updates →
Timeline syncs → Active milestone color changes leaving grayscale
```

**State Flow**:

```
User Action
    ↓
Component (local logic via hooks)
    ↓
Context (shared state)
    ↓
Derived Values (filtered, sorted)
    ↓
UI Update (all dependent components)
```

**Key Relationships**:

- Timeline and ContentArea are **synchronized**: Year selection drives content filtering
- ContentArea can **initiate navigation**: Scroll/swipe triggers year changes
- Milestone active color is **contextual**: Changes based on active content item
- State is **unidirectional**: Flows top-down, actions bubble up

This layer answers _how things connect_, not _how they are built_.

---

### 4. Interaction

**User Interaction Points**:

1. **Year Selection** (Timeline)
   - Click/tap on year button
   - Scroll within timeline
   - Keyboard navigation (future)

2. **Content Navigation** (ContentArea)
   - Mouse wheel scroll
   - Touch swipe (mobile)
   - Previous/next buttons
   - Click on content item

3. **External Navigation** (UserInfo)
   - Click on social links (GitHub, LinkedIn, website)

4. **Theme Toggle** (Global)
   - Switch between light/dark mode

**System Feedback**:

- **Visual**: Animated indicator follows scroll position
- **Color**: Active milestone color updates, inactive items show grayscale
- **State**: Navigation buttons enable/disable based on position
- **Visibility**: Elements appear/hide based on scroll and context

**Data Flow**:

**Inputs**:

- User interaction events (click, scroll, swipe)
- Static career data (imported JSON-like structure)
- Initial state (selected year)

**Processing**:

- Filtering by year
- Sorting by month
- Visibility calculation
- Color assignment (persistent)

**Outputs**:

- Rendered UI components
- Active state indicators
- Background color updates
- Navigation state (can go next/previous)

This layer may evolve or remain minimal.

---

## Invariants

The following should remain stable even if implementation changes:

**Core Concepts**:

- A developer has a temporal career history
- Career milestones are organized by years
- Years contain multiple content items
- Navigation is both temporal (years) and sequential (items/milestones)

**Vocabulary**:

- User, CareerMilestone, Timeline, Content, Year, Current
- Must remain consistent across documentation and code

**Structural Relationships**:

- UserInfo is independent
- Timeline controls temporal context
- ContentArea depends on Timeline selection
- State flows unidirectionally

**Design Principles**:

- Clarity first: Interface serves content
- Simplicity by design: Minimal, intentional elements
- Hierarchy over decoration: Structure communicates meaning
- Content-centered: Reading and understanding over effects

**Interaction Principles**:

- Temporal navigation is primary
- Content navigation is secondary
- Synchronization between Timeline and ContentArea
- Smooth transitions maintain context

---

## Decision-Making Rule

If a decision:

- Cannot be explained at the conceptual level
- Depends heavily on a specific tool
- Solves a problem that is not yet understood

It should be postponed.

**Examples of Good Decisions**:

- "Career milestones are organized by year" → Conceptual, clear
- "Timeline synchronizes with ContentArea" → Structural relationship
- "Clarity over decoration" → Guiding principle

**Examples of Premature Decisions**:

- "Use React Context for state" → Implementation detail
- "Animate with Framer Motion" → Tool-specific
- "Store data in MongoDB" → Solves undefined problem

---

## Implementation Mapping (Reference)

While this architecture remains conceptual, the current implementation maps as follows:

- **Intent & Vision**: [docs/vision.md](vision.md)
- **Domain & Concepts**: [src/background-data.ts](../src/background-data.ts), types files
- **Structure & Flow**: [docs/state-management.md](state-management.md), Context API
- **Interaction**: Custom hooks ([docs/hooks-summary.md](../src/hooks/hooks-summary.md)), UI components

This mapping may change, but the conceptual layers should remain valid.
