import { type Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { PAGE_URLS } from "../constants/page-urls";

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page, PAGE_URLS.home);
  }
}
