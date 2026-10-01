import { expect, test } from "@playwright/test";

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
    const expectedUrl = "/register.html";
    const expectedStatus = 200;
    const expectedTitle = "Register - Rolnopol";
    const expectedContent = "Create Your User Account";

    // Act
    const response = await page.goto(expectedUrl, {
      waitUntil: "domcontentloaded",
    });

    // Assert
    expect(response?.status()).toBe(expectedStatus);
    await expect(page.getByTestId("register-container")).toContainText(
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
    const email = `playwright-${Date.now()}@example.com`;

    await page.goto("/register.html");
    await page.getByTestId("email-input").fill(email);
    await page.getByTestId("password-input").fill("TestPass123");

    const registrationResponse = page.waitForResponse(
      (response) =>
        response.url().endsWith("/api/v1/register") &&
        response.request().method() === "POST",
    );
    const successBanner = expect(page.getByRole("alert")).toContainText(
      "Registration successful!",
    );

    // Act
    await page.getByTestId("register-submit-btn").click();

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
