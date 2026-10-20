import { type Locator, type Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { PAGE_URLS } from "../constants/page-urls";

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page, PAGE_URLS.login);
  }

  get loginContainer(): Locator {
    return this.page.getByTestId("login-container");
  }
}
