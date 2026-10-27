import { expect, test } from "@playwright/test";
import { generateTestEmail } from "../src/helpers/email.helper";
import { RegistrationPage } from "../src/pages/registration.page";

test(
  "rejects registration when required fields are empty",
  { tag: ["@auth", "@register", "@negative"] },
  async ({ page }) => {
    // Arrange
    const registrationPage = new RegistrationPage(page);
    await registrationPage.goto();

    // Act
    await registrationPage.clickSubmit();

    // Assert
    const emailValidation = await registrationPage.emailInput.evaluate(
      (input) => {
        const field = input as HTMLInputElement;
        return {
          valueMissing: field.validity.valueMissing,
          message: field.validationMessage,
        };
      },
    );
    const passwordValidation = await registrationPage.passwordInput.evaluate(
      (input) => {
        const field = input as HTMLInputElement;
        return {
          valueMissing: field.validity.valueMissing,
          message: field.validationMessage,
        };
      },
    );

    expect(emailValidation.valueMissing).toBe(true);
    expect(emailValidation.message).toBeTruthy();
    expect(passwordValidation.valueMissing).toBe(true);
    expect(passwordValidation.message).toBeTruthy();
    await expect(page).toHaveURL(/\/register\.html$/);
  },
);

test(
  "rejects registration with an invalid email address",
  { tag: ["@auth", "@register", "@negative"] },
  async ({ page }) => {
    // Arrange
    const registrationPage = new RegistrationPage(page);
    await registrationPage.goto();
    await registrationPage.fillForm("invalid-email", "TestPass123");

    // Act
    await registrationPage.clickSubmit();

    // Assert
    const emailValidation = await registrationPage.emailInput.evaluate(
      (input) => {
        const field = input as HTMLInputElement;
        return {
          typeMismatch: field.validity.typeMismatch,
          message: field.validationMessage,
        };
      },
    );

    expect(emailValidation.typeMismatch).toBe(true);
    expect(emailValidation.message).toBeTruthy();
    await expect(page).toHaveURL(/\/register\.html$/);
  },
);

test(
  "rejects registration with a password shorter than three characters",
  { tag: ["@auth", "@register", "@negative"] },
  async ({ page }) => {
    // Arrange
    const registrationPage = new RegistrationPage(page);
    await registrationPage.goto();
    await registrationPage.fillForm("short-password@example.com", "ab");

    // Act
    await registrationPage.clickSubmit();

    // Assert
    const passwordValidation = await registrationPage.passwordInput.evaluate(
      (input) => {
        const field = input as HTMLInputElement;
        return {
          tooShort: field.validity.tooShort,
          message: field.validationMessage,
        };
      },
    );

    expect(passwordValidation.tooShort).toBe(true);
    expect(passwordValidation.message).toBeTruthy();
    await expect(page).toHaveURL(/\/register\.html$/);
  },
);

test(
  "rejects registration with an email address that is already in use",
  { tag: ["@auth", "@register", "@negative"] },
  async ({ page }) => {
    // Arrange
    const registrationPage = new RegistrationPage(page);
    const email = generateTestEmail();
    await registrationPage.goto();
    await registrationPage.fillForm(email, "TestPass123");
    const initialResponse = await registrationPage.submit();
    await registrationPage.goto();
    await registrationPage.fillForm(email, "TestPass123");

    // Act
    const duplicateResponse = await registrationPage.submit();

    // Assert
    expect(initialResponse.status()).toBe(201);
    expect(duplicateResponse.status()).toBe(409);
    await expect(registrationPage.registrationMessage).toContainText(
      "User with this email already exists",
    );
    await expect(page).toHaveURL(/\/register\.html$/);
  },
);
