import { describe, expect, it } from "vitest";
import { sampleMatches } from "../src/lib/data/sampleMatches";

describe("sample matches", () => {
  it("includes reviewed examples", () => {
    expect(sampleMatches.length).toBeGreaterThan(0);
    expect(sampleMatches[0].status).toBe("reviewed");
  });
});
