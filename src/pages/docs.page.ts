import { type Locator, type Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { PAGE_URLS } from "../constants/page-urls";

export class DocsPage extends BasePage {
  constructor(page: Page) {
    super(page, PAGE_URLS.docs);
  }

  get mainContainer(): Locator {
    return this.page.getByTestId("main-container");
  }
}
