import { expect, test } from "@playwright/test";

test("has title of the Rolnopol homepage", async ({ page }) => {
  await page.goto("");
  await expect(page).toHaveTitle("Rolnopol");
});
