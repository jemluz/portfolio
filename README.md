# turma.dev

Cada dev tem uma história - conte a sua para a turma

## 🛠️ To work in

1. Set up the project: [docs/project-setup.md](docs/project-setup.md)
2. Understand the workflow: [docs/dev-workflow.md](docs/dev-workflow.md)

## 📚 Documentation

| Doc | Description |
|-----|-------------|
| [Vision](docs/vision.md) | Project purpose, values, and long-term goals |
| [Architecture](docs/architecture.md) | Conceptual layers and component relationships |
| [Dev Workflow](docs/dev-workflow.md) | Branching, commit, and PR patterns |
| [Folder Structure](docs/folder-structure.md) | Project directory map |
| [State Management](docs/state-management.md) | Context API and hooks architecture |
| [UI Guidelines](docs/ui-guidelines.md) | Experience principles and design patterns |
| [Project Setup](docs/project-setup.md) | Installation and available scripts |
| [Future](docs/future.md) | Possible future directions |

## 🚀 Key Features

### UserInfo ([src/components/custom/UserInfo/](src/components/custom/UserInfo/))

- Displays user avatar and name
- Provides external links (GitHub, LinkedIn, personal website)
- Responsive design (desktop and mobile variants)
- Integrates with BackgroundContext for navigation

### Timeline Component ([src/components/custom/Timeline/](src/components/custom/Timeline/))

- Year selection component with animated indicator
- Uses Radix UI ScrollArea
- Syncs indicator position with scroll (inverted translation)
- Visibility detection to show/hide indicator

### ContentArea ([src/components/custom/ContentArea/](src/components/custom/ContentArea/))

- Displays content for selected year
- Carousel-like navigation (wheel + touch)
- Calculates item visibility
- Synchronizes with BackgroundContext
