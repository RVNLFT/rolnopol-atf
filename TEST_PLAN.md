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
- API documentation page

## Test Environment

- App URL: http://localhost:3000
- Docs URL: http://localhost:3000/docs.html
- Browser: Chrome / Playwright browser

## Core Test Cases

1. @smoke @navigation - Open home page and verify the page loads. **Automated: title check.**
2. @smoke @api-docs - Open documentation page and confirm sections are displayed. **Automated: Contents heading check.**
3. @smoke @auth @register - Register a new user successfully. **Planned.**
4. @smoke @auth @login @positive - Log in with valid credentials. **Planned.**
5. @auth @login @negative - Log in with invalid credentials and confirm error handling. **Planned.**
6. @smoke @profile - Update profile information. **Planned.**
7. @smoke @farm - Add a field, animal, and staff member. **Planned.**
8. @farm - Create a farm assignment. **Planned.**
9. @smoke @marketplace - Open the marketplace and view available offers. **Planned.**
10. @marketplace - Create a marketplace offer. **Planned.**
11. @smoke @marketplace @financial - Buy an available item with valid balance. **Planned.**
12. @financial - Check that the financial balance and transaction history update correctly. **Planned.**
13. @smoke @alerts - Open alerts page and verify alert data loads. **Planned.**
14. @alerts - Filter alerts by severity. **Planned.**
15. @smoke @api-docs - Open Swagger/API docs page and confirm it loads. **Automated: HTTP status and page content checks.**

## Automation Status

- Automated checks: 5 page-load smoke tests in `tests/main.smoke.spec.ts`.
- Planned checks: registration, authentication behavior, profile, farm, marketplace, financial, and alerts workflows.
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

- Automated smoke checks pass for the homepage, registration page, login page, Swagger page, and API documentation page.
- Before this plan is considered complete, the planned authentication, profile, farm, marketplace, financial, and alerts workflows pass without errors.
- Authentication and marketplace rules behave as expected.
- Alerts and API documentation pages are accessible.

## Notes

This is a basic test plan for smoke and functional validation, not a full regression suite.
