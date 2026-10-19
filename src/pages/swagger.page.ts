import { type Locator, type Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { PAGE_URLS } from "../constants/page-urls";

export class SwaggerPage extends BasePage {
  constructor(page: Page) {
    super(page, PAGE_URLS.swagger);
  }

  get description(): Locator {
    return this.page
      .frameLocator("#swagger-frame")
      .locator(".info .description .renderedMarkdown p");
  }
}
