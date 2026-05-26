export function createPublicAutoscoreSummary() {
  return {
    status: "public-demo",
    description: "Public-facing autoscore summary shape.",
    red: { estimatedScore: 92, reviewed: true },
    blue: { estimatedScore: 69, reviewed: true }
  };
}
