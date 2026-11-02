# rolnopol-atf

Automated browser tests for the Rolnopol application, built with TypeScript and
[Playwright Test](https://playwright.dev/). The suite uses Page Objects and
currently covers core page smoke checks, successful registration, and negative
registration scenarios in Chromium.

## Prerequisites

- Node.js 20 or later and npm.
- The Rolnopol application running separately at `http://localhost:3000`.
  This repository contains the test framework, not the application server, and
  does not start the app automatically. The base URL is configured in
  [`playwright.config.ts`](./playwright.config.ts).

## Setup

```bash
git clone https://github.com/RVNLFT/rolnopol-atf.git
cd rolnopol-atf
npm ci
npx playwright install chromium
```

On Linux, install Chromium's system dependencies if needed:

```bash
npx playwright install --with-deps chromium
```

Before running tests, confirm the Rolnopol application is accessible at the base
URL. Registration tests create users with unique email addresses, so use an app
instance intended for testing.

## Run tests

Run the full suite in headless Chromium:

```bash
npm test
```

Run a subset by tag or file:

```bash
npm test -- --grep @smoke
npm test -- tests/registration.negative.spec.ts
```

Other useful commands:

| Command | Purpose |
| --- | --- |
| `npm test -- --list` | List available tests without running them. |
| `npm run test:list` | Run tests with the terminal list reporter. |
| `npm run test:ui` | Open Playwright's interactive UI mode. |
| `npm test -- --headed` | Run tests in a visible browser. |
| `npm run test:debug` | Run tests with the Playwright Inspector. |

## View the Playwright report

The default test run generates an HTML report in `playwright-report/`. Open it
after the run completes:

```bash
npm run test:report
```

The report shows test results and recorded traces. The `test:list` script
overrides the HTML reporter; use `npm test` to generate a fresh HTML report.

## Project structure

- `tests/` — Playwright test cases and assertions.
- `src/pages/` — Page Objects with locators and browser interactions.
- `src/helpers/` — Shared test helpers, including unique email generation.
- `src/constants/` — Shared page URLs.
- `playwright.config.ts` — Base URL, browser project, timeouts, and reporting.

See [`TEST_PLAN.md`](./TEST_PLAN.md) for automated coverage, planned flows, and
test tags. Follow [`CODING_STANDARDS.md`](./CODING_STANDARDS.md) when contributing
tests or Page Objects.
