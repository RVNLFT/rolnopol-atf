import { expect, test } from "@playwright/test";
import { generateTestEmail } from "../src/helpers/email.helper";
import { DocsPage } from "../src/pages/docs.page";
import { HomePage } from "../src/pages/home.page";
import { LoginPage } from "../src/pages/login.page";
import { RegistrationPage } from "../src/pages/registration.page";
import { SwaggerPage } from "../src/pages/swagger.page";

test(
  "has title of the Rolnopol homepage",
  { tag: ["@smoke", "@navigation"] },
  async ({ page }) => {
    // Arrange
    const homePage = new HomePage(page);
    const expectedTitle = "Rolnopol";

    // Act
    await homePage.goto();

    // Assert
    await expect(page).toHaveTitle(expectedTitle);
  },
);

test(
  "registration page is visible and loaded",
  { tag: ["@smoke", "@auth", "@register"] },
  async ({ page }) => {
    // Arrange
    const registrationPage = new RegistrationPage(page);
    const expectedStatus = 200;
    const expectedTitle = "Register - Rolnopol";
    const expectedContent = "Create Your User Account";

    // Act
    const response = await registrationPage.goto("domcontentloaded");

    // Assert
    expect(response?.status()).toBe(expectedStatus);
    await expect(registrationPage.registrationContainer).toContainText(
      expectedContent,
    );
    await expect(page).toHaveTitle(expectedTitle);
  },
);

test(
  "registers a new user successfully",
  { tag: ["@smoke", "@auth", "@register"] },
  async ({ page }) => {
    // Arrange
    const registrationPage = new RegistrationPage(page);
    const email = generateTestEmail();

    await registrationPage.goto();
    await registrationPage.fillForm(email, "TestPass123");

    // Act
    const response = await registrationPage.submit();

    // Assert
    expect(response.status()).toBe(201);
    await expect(registrationPage.registrationMessage).toContainText(
      "Registration successful!",
    );
    await expect(page).toHaveURL(/\/login\.html$/);
  },
);

test(
  "login page is visible and loaded",
  { tag: ["@smoke", "@auth", "@login", "@navigation"] },
  async ({ page }) => {
    // Arrange
    const loginPage = new LoginPage(page);
    const expectedStatus = 200;
    const expectedTitle = "Login - Rolnopol";
    const expectedContent = "Login to Your User Account";

    // Act
    const response = await loginPage.goto("domcontentloaded");

    // Assert
    expect(response?.status()).toBe(expectedStatus);
    await expect(loginPage.loginContainer).toContainText(expectedContent);
    await expect(page).toHaveTitle(expectedTitle);
  },
);

test(
  "Swagger page is visible and loaded",
  { tag: ["@smoke", "@api-docs"] },
  async ({ page }) => {
    // Arrange
    const swaggerPage = new SwaggerPage(page);
    const expectedStatus = 200;
    const expectedContent =
      "API documentation for the Rolnopol service with versioning support";

    // Act
    const response = await swaggerPage.goto("domcontentloaded");

    // Assert
    expect(response?.status()).toBe(expectedStatus);
    await expect(swaggerPage.description).toHaveText(expectedContent);
  },
);

test(
  "API documentation page is visible and loaded",
  { tag: ["@smoke", "@api-docs"] },
  async ({ page }) => {
    // Arrange
    const apiDocumentationPage = new DocsPage(page);
    const expectedStatus = 200;
    const expectedContent = "Rolnopol System Guide & API Reference";

    // Act
    const response = await apiDocumentationPage.goto("domcontentloaded");

    // Assert
    expect(response?.status()).toBe(expectedStatus);
    await expect(apiDocumentationPage.mainContainer).toContainText(
      expectedContent,
    );
  },
);
