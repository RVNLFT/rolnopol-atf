import { expect, test } from "@playwright/test";

test(
  "has title of the Rolnopol homepage",
  { tag: ["@smoke", "@navigation"] },
  async ({ page }) => {
  await page.goto("");
  await expect(page).toHaveTitle("Rolnopol");
  },
);

test(
  "registration page is visible and loaded",
  { tag: ["@smoke", "@auth", "@register"] },
  async ({ page }) => {
  const response = await page.goto("/register.html", {
    waitUntil: "domcontentloaded",
  });
  expect(response?.status()).toBe(200);
  await expect(page.locator("body")).toBeVisible();
  await expect(page).toHaveTitle("Register - Rolnopol");
  },
);

test(
  "login page is visible and loaded",
  { tag: ["@smoke", "@auth", "@login", "@positive"] },
  async ({ page }) => {
  const response = await page.goto("/login.html", {
    waitUntil: "domcontentloaded",
  });
  expect(response?.status()).toBe(200);
  await expect(page.locator("body")).toBeVisible();
  await expect(page).toHaveTitle("Login - Rolnopol");
  },
);
