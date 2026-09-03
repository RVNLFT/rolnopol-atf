import { expect, test } from "@playwright/test";

test(
  "has title of the Rolnopol homepage",
  { tag: ["@smoke", "@navigation"] },
  async ({ page }) => {
    const expectedTitle = "Rolnopol";

    await page.goto("");

    await expect(page).toHaveTitle(expectedTitle);
  },
);

test(
  "registration page is visible and loaded",
  { tag: ["@smoke", "@auth", "@register"] },
  async ({ page }) => {
    const expectedUrl = "/register.html";
    const expectedStatus = 200;
    const expectedTitle = "Register - Rolnopol";
    const expectedContent = "Create Your User Account";

    const response = await page.goto(expectedUrl, {
      waitUntil: "domcontentloaded",
    });

    expect(response?.status()).toBe(expectedStatus);
    await expect(page.getByTestId("register-container")).toContainText(
      expectedContent,
    );
    await expect(page).toHaveTitle(expectedTitle);
  },
);

test(
  "login page is visible and loaded",
  { tag: ["@smoke", "@auth", "@login", "@positive"] },
  async ({ page }) => {
    const expectedUrl = "/login.html";
    const expectedStatus = 200;
    const expectedTitle = "Login - Rolnopol";
    const expectedContent = "Login to Your User Account";

    const response = await page.goto(expectedUrl, {
      waitUntil: "domcontentloaded",
    });

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
    const expectedUrl = "/swagger.html";
    const expectedStatus = 200;
    const expectedContent =
      "API documentation for the Rolnopol service with versioning support";

    const response = await page.goto(expectedUrl, {
      waitUntil: "domcontentloaded",
    });

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
    const expectedUrl = "/docs.html";
    const expectedStatus = 200;
    const expectedContent = "Rolnopol System Guide & API Reference";

    const response = await page.goto(expectedUrl, {
      waitUntil: "domcontentloaded",
    });

    expect(response?.status()).toBe(expectedStatus);
    await expect(page.getByTestId("main-container")).toContainText(expectedContent);
  },
);
