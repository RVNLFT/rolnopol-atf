import { type Locator, type Page, type Response } from "@playwright/test";

export class RegistrationPage {
    constructor(private readonly page: Page) { }

    get successBanner(): Locator {
        return this.page.getByRole("alert");
    }

    get registrationContainer(): Locator {
        return this.page.getByTestId("register-container");
    }

    async goto(waitUntil: "load" | "domcontentloaded" = "load"): Promise<Response | null> {
        return this.page.goto("/register.html", { waitUntil });
    }

    async fillForm(email: string, password: string): Promise<void> {
        await this.page.getByTestId("email-input").fill(email);
        await this.page.getByTestId("password-input").fill(password);
    }

    async submit(): Promise<void> {
        await this.page.getByTestId("register-submit-btn").click();
    }
}