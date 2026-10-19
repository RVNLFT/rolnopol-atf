# Simple Test Plan for Rolnopol

## Goal

Check that the main user flows described in the official documentation work correctly on the local app.

## Scope

- Registration and login
- Profile and dashboard
- Farm management
- Marketplace
- Financial balance and transactions
- Alerts
- Swagger UI and API documentation page

## Test Environment

- App URL: http://localhost:3000
- Docs URL: http://localhost:3000/docs.html
- Browser: Chrome / Playwright browser

## Core Test Cases

1. @smoke @navigation - Open home page and verify the page loads. **Automated: title check.**
2. @smoke @api-docs - Open documentation page and confirm the page loads. **Automated: HTTP status and “Rolnopol System Guide & API Reference” heading checks.**
3. @smoke @auth @register - Open the registration page and verify its status, content, and title. **Automated.**
4. @smoke @auth @register - Register a new user successfully. **Automated: HTTP 201 response, success banner, and redirect to login checks.**
5. @smoke @auth @login @navigation - Open the login page and verify its status, content, and title. **Automated.**
6. @smoke @auth @login @positive - Log in with valid credentials. **Planned.**
7. @auth @login @negative - Log in with invalid credentials and confirm error handling. **Planned.**
8. @smoke @profile - Update profile information. **Planned.**
9. @smoke @farm - Add a field, animal, and staff member. **Planned.**
10. @farm - Create a farm assignment. **Planned.**
11. @smoke @marketplace - Open the marketplace and view available offers. **Planned.**
12. @marketplace - Create a marketplace offer. **Planned.**
13. @smoke @marketplace @financial - Buy an available item with valid balance. **Planned.**
14. @financial - Check that the financial balance and transaction history update correctly. **Planned.**
15. @smoke @alerts - Open alerts page and verify alert data loads. **Planned.**
16. @alerts - Filter alerts by severity. **Planned.**
17. @smoke @api-docs - Open the Swagger page and verify its status and description. **Automated.**

## Automation Status

- Automated checks: 6 tests in [`tests/main.smoke.spec.ts`](./tests/main.smoke.spec.ts): the homepage, registration page, login page, Swagger page, API documentation page, and successful registration.
- Planned checks: valid and invalid login behavior, profile, farm, marketplace, financial, and alerts workflows.
- The automated homepage check currently verifies the title; navigation visibility is not yet asserted.

## Main User Flows

### Registration/Login

- Register new user
- Log in
- Access profile/dashboard
- Log out

### Farm Management

- Add field
- Add animal/staff
- Create assignment
- Confirm data is saved

### Marketplace

- View offers
- Create offer
- Buy resource
- Confirm balance and ownership update

## Exit Criteria

- Automated smoke checks pass for the homepage, registration page, login page, Swagger page, and API documentation page, and successful registration completes with the expected banner and login redirect.
- Before this plan is considered complete, the planned authentication, profile, farm, marketplace, financial, and alerts workflows pass without errors.
- Authentication and marketplace rules behave as expected.
- Alerts and API documentation pages are accessible.

## Notes

This is a basic test plan for smoke and functional validation, not a full regression suite.
