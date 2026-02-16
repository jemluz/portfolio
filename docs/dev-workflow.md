## Setup

- run `nvm install` to get the npm version defined by `.nvmrc`
- run `nvm alias default lts/{version_name}` if you want to set that npm version as default

### Code Formatting

- There is an `.editorconfig` file to set what is expected as code formatting standards
- Prettier was installed here so you can use the scripts `npm run lint:check` and `npm run lint:fix` to solve formatting issues

## 🌳 Git Conventions

### Issues
```
[TURMA-XXXXX] Title describing the issue

Sub-issues:
[TURMA-XXXXX] [SUB-YY] Sub-issue title
```

### Branches
```bash
# Main issues
feat/TURMA-XXXXX
fix/TURMA-XXXXX
refactor/TURMA-XXXXX

# Sub-issues
feat/TURMA-XXXXX__SUB-YY
fix/TURMA-XXXXX__SUB-YY
```

### Commits
```bash
# Main issue commits
type(IXXXXX): commit message description

# Sub-issue commits
type(IXXXXX__SYY): commit message description

# Examples
feat(I00065): add timeline navigation
fix(I00065__S67): correct scroll behavior
refactor(I00065__S67): reorganize component structure
```

### Commit Types
- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code refactoring
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `chore`: Maintenance tasks