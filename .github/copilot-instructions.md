# Repository instructions

## Commit message convention

Use Conventional Commits for all change commits in this repository.

Format:

<type>(<scope>): <short summary>

Rules:

- Use one of the standard types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert.
- Keep the summary in the imperative mood and lowercase.
- Keep the summary short and descriptive, ideally 1 line, without a trailing period.
- Add a scope only when it helps clarify the affected area, for example: feat(ui): add login form.
- Use a blank line before the optional body if more detail is needed.
- Include a body and footer only when they add important context.

Examples:

- feat(auth): add login validation
- fix(api): handle empty response payloads
- docs(readme): update setup steps
- test(e2e): add smoke coverage for homepage
- chore(deps): update playwright version

When making a commit, ensure the message matches the change type and clearly describes the intent of the work.
