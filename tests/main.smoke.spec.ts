import { expect, test } from "@playwright/test";
import { generateTestEmail } from "../src/helpers/email.helper";
import { RegistrationPage } from "../src/pages/registration.page";

test(
  "has title of the Rolnopol homepage",
  { tag: ["@smoke", "@navigation"] },
  async ({ page }) => {
    // Arrange
    const expectedTitle = "Rolnopol";

    // Act
    await page.goto("");

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

    const registrationResponse = page.waitForResponse(
      (response) =>
        response.url().endsWith("/api/v1/register") &&
        response.request().method() === "POST",
    );
    const successBanner = expect(registrationPage.successBanner).toContainText(
      "Registration successful!",
    );

    // Act
    await registrationPage.submit();

    // Assert
    const response = await registrationResponse;
    await successBanner;

    expect(response.status()).toBe(201);
    await expect(page).toHaveURL(/\/login\.html$/);
  },
);

test(
  "login page is visible and loaded",
  { tag: ["@smoke", "@auth", "@login", "@positive"] },
  async ({ page }) => {
    // Arrange
    const expectedUrl = "/login.html";
    const expectedStatus = 200;
    const expectedTitle = "Login - Rolnopol";
    const expectedContent = "Login to Your User Account";

    // Act
    const response = await page.goto(expectedUrl, {
      waitUntil: "domcontentloaded",
    });

    // Assert
    expect(response?.status()).toBe(expectedStatus);
    await expect(page.getByTestId("login-container")).toContainText(
      expectedContent,
    );
    await expect(page).toHaveTitle(expectedTitle);
  },
);

test(
  "Swagger page is visible and loaded",
  { tag: ["@smoke", "@api-docs"] },
  async ({ page }) => {
    // Arrange
    const expectedUrl = "/swagger.html";
    const expectedStatus = 200;
    const expectedContent =
      "API documentation for the Rolnopol service with versioning support";

    // Act
    const response = await page.goto(expectedUrl, {
      waitUntil: "domcontentloaded",
    });

    // Assert
    expect(response?.status()).toBe(expectedStatus);
    await expect(
      page
        .frameLocator("#swagger-frame")
        .locator(".info .description .renderedMarkdown p"),
    ).toHaveText(expectedContent);
  },
);

test(
  "API documentation page is visible and loaded",
  { tag: ["@smoke", "@api-docs"] },
  async ({ page }) => {
    // Arrange
    const expectedUrl = "/docs.html";
    const expectedStatus = 200;
    const expectedContent = "Rolnopol System Guide & API Reference";

    // Act
    const response = await page.goto(expectedUrl, {
      waitUntil: "domcontentloaded",
    });

    // Assert
    expect(response?.status()).toBe(expectedStatus);
    await expect(page.getByTestId("main-container")).toContainText(expectedContent);
  },
);
