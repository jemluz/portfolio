# Git Workflow Rules

This guide standardizes issue/sub-issue naming, branch strategy, commits, and PR conventions for turma.dev.

## Rules

- MUST create an issue before starting implementation work
- MUST use issue title pattern: `[TURMA-XXXXX] + title`
- MUST use issue branch pattern: `feat/TURMA-XXXXX`
- MUST use sub-issue title pattern: `[TURMA-XXXXX][SUB-YY] + title`
- MUST use sub-issue branch pattern: `feat/TURMA-XXXXX__SUB-YY`
- MUST point issue PRs to `dev`
- MUST point sub-issue PRs to the parent issue branch
- MUST use squash merge for all PRs
- MUST reference the related issue/sub-issue in PR content
- MUST use semantic commit messages with issue/sub-issue identifiers

## Commit Patterns

Use the following commit message conventions:

- Issue branch: `type(IXXXXX): short description`
- Sub-issue branch: `type(IXXXXX_SYY): short description`

Examples:

- `feat(I65): add timeline keyboard navigation`
- `fix(I65_S80): adjust content scroll synchronization`

## PR Title Patterns

- Issue PR (to `dev`): `[TURMA-XXXXX] + title (PR #ZZ)`
- Sub-issue PR (to parent issue): `[TURMA-XXXXX][SUB-YY] + title (PR #ZZ)`

PR description SHOULD start with: `more details at #XX`

## Merge Strategy

- ONLY squash merge is allowed
- MUST avoid merge commit and rebase merge for PR completion

## Validation Checklist

- [ ] Branch name matches issue or sub-issue pattern
- [ ] PR base branch is correct (`dev` or parent issue)
- [ ] Commit messages follow semantic + issue identifier format
- [ ] PR title follows required pattern
- [ ] PR references the related issue/sub-issue
- [ ] Merge strategy is squash
