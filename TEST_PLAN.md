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

1. Open home page and verify navigation is visible.
2. Open documentation page and confirm sections are displayed.
3. Register a new user successfully.
4. Log in with valid credentials.
5. Log in with invalid credentials and confirm error handling.
6. Update profile information.
7. Add a field, animal, and staff member.
8. Create a farm assignment.
9. Open the marketplace and view available offers.
10. Create a marketplace offer.
11. Buy an available item with valid balance.
12. Check that the financial balance and transaction history update correctly.
13. Open alerts page and verify alert data loads.
14. Filter alerts by severity.
15. Open Swagger/API docs page and confirm it loads.

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

- All core pages load successfully.
- Main flows work without errors.
- Authentication and marketplace rules behave as expected.
- Alerts and API documentation pages are accessible.

## Notes

This is a basic test plan for smoke and functional validation, not a full regression suite.
