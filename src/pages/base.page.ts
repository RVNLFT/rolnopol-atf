import { type Page, type Response } from "@playwright/test";

export abstract class BasePage {
  constructor(
    protected readonly page: Page,
    private readonly url: string,
  ) {}

  async goto(
    waitUntil: "load" | "domcontentloaded" = "load",
  ): Promise<Response | null> {
    return this.page.goto(this.url, { waitUntil });
  }
}
