import { type Locator, type Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class SwaggerPage extends BasePage {
  static readonly URL = "/swagger.html";

  constructor(page: Page) {
    super(page, SwaggerPage.URL);
  }

  get description(): Locator {
    return this.page
      .frameLocator("#swagger-frame")
      .locator(".info .description .renderedMarkdown p");
  }
}
