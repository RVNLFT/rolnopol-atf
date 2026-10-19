import { type Locator, type Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class DocsPage extends BasePage {
  static readonly URL = "/docs.html";

  constructor(page: Page) {
    super(page, DocsPage.URL);
  }

  get mainContainer(): Locator {
    return this.page.getByTestId("main-container");
  }
}
