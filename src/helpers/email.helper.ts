import { randomUUID } from "node:crypto";

/** Creates a unique example.com address for isolated registration tests. */
export function generateTestEmail(): string {
  return `playwright-${randomUUID()}@example.com`;
}
