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

    const response = await page.goto(expectedUrl, {
      waitUntil: "domcontentloaded",
    });

    expect(response?.status()).toBe(expectedStatus);
    await expect(page.getByTestId("register-container")).toContainText(
      "Create Your User Account",
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

    const response = await page.goto(expectedUrl, {
      waitUntil: "domcontentloaded",
    });

    expect(response?.status()).toBe(expectedStatus);
    await expect(page.getByTestId("login-container")).toContainText(
      "Login to Your User Account",
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

    const response = await page.goto(expectedUrl, {
      waitUntil: "domcontentloaded",
    });

    expect(response?.status()).toBe(expectedStatus);
    await expect(page.frameLocator("#swagger-frame").locator("body")).toContainText(
      "Rolnopol",
    );
  },
);

test(
  "API documentation page is visible and loaded",
  { tag: ["@smoke", "@api-docs"] },
  async ({ page }) => {
    const expectedUrl = "/docs.html";
    const expectedStatus = 200;

    const response = await page.goto(expectedUrl, {
      waitUntil: "domcontentloaded",
    });

    expect(response?.status()).toBe(expectedStatus);
    await expect(page.getByTestId("docs-sidebar-title")).toHaveText("Contents");
  },
);
