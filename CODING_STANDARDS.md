# Coding Standards

## Page Object Pattern

Page Objects represent a page or a distinct part of one. Keep them focused on
page interaction; keep test intent and verification in the test files.

- Keep page locators and browser interactions in the relevant Page Object.
- Use clear, reusable methods for user actions, such as `fillForm()` and
  `submit()`. Keep methods focused and name them after the action they perform.
- Prefer accessible locators such as roles and labels, or stable test IDs.
- Pass Playwright's `Page` into the Page Object and expose useful `Locator`s or
  return interaction results when tests need to verify them.
- **Do not include assertions or `expect` calls inside Page Objects.**
- **Keep all verifications in test files only.** Tests should assert expected
  page content, navigation, and responses after performing actions.

## Playwright Tests

- Follow the test directory, projects, timeouts, reporter, and shared options
  configured in `playwright.config.ts`.
- Structure each test with `// Arrange`, `// Act`, and `// Assert` comments.
  Put setup and test data in Arrange, the primary action in Act, and
  expectations in Assert.
- Use Playwright's structured metadata for tags, for example
  `test("...", { tag: ["@feature", "@smoke"] }, async ({ page }) => {})`.
- Prefer tags already defined in `TEST_PLAN.md`. Include the relevant feature
  tag and, when applicable, an intent tag such as `@smoke`, `@positive`, or
  `@negative`. Keep tags in metadata, not in test titles.
- Keep `TEST_PLAN.md` synchronized with automated coverage and its tags. Update
  it before introducing a tag for a new flow or category.

## Comments and Documentation

- Remove comments that merely restate obvious code behavior; avoid narrating
  each step.
- Add concise JSDoc only when it clarifies intent, context, or architecture.
- Comment cleanup must not change code logic.
