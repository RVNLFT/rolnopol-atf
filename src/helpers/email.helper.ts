/** Creates a unique example.com address for isolated registration tests. */
export function generateTestEmail(): string {
    return `playwright-${Date.now()}@example.com`;
}