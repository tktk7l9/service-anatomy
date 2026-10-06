import { describe, expect, it } from "vitest";
import { generateMetadata } from "./page";

describe("root page", () => {
  it("serves the default-locale home with /ja as the canonical URL", async () => {
    const metadata = await generateMetadata();
    expect(metadata.alternates?.canonical).toBe("/ja");
  });
});
