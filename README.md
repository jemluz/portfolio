# turma.dev

Cada dev tem uma história - conte a sua para a turma

## 🛠️ To work in

Focus on: `docs/dev-workflow.md` to understand the dev workflow

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
