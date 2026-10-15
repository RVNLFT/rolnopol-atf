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
- Structure each Playwright test with `// Arrange`, `// Act`, and `// Assert`
  comments. Put setup and test data in Arrange, the primary action in Act, and
  expectations in Assert.
