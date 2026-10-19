import { type Locator, type Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
  static readonly URL = "/login.html";

  constructor(page: Page) {
    super(page, LoginPage.URL);
  }

  get loginContainer(): Locator {
    return this.page.getByTestId("login-container");
  }
}
