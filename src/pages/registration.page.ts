import { type Locator, type Page, type Response } from "@playwright/test";
import { BasePage } from "./base.page";
import { PAGE_URLS } from "../constants/page-urls";

export class RegistrationPage extends BasePage {
  constructor(page: Page) {
    super(page, PAGE_URLS.registration);
  }

  get successBanner(): Locator {
    return this.page.getByRole("alert");
  }

  get registrationContainer(): Locator {
    return this.page.getByTestId("register-container");
  }

  async fillForm(email: string, password: string): Promise<void> {
    await this.page.getByTestId("email-input").fill(email);
    await this.page.getByTestId("password-input").fill(password);
  }

  async submit(): Promise<Response> {
    const response = this.page.waitForResponse(
      (candidate) =>
        candidate.url().endsWith("/api/v1/register") &&
        candidate.request().method() === "POST",
    );
    await this.page.getByTestId("register-submit-btn").click();
    return response;
  }
}
