import { summarizeScore } from "../src/autoscore/scoringEngine";

const summary = {
  alliance: "red" as const,
  estimatedScore: 92,
  autoScore: 18,
  teleopScore: 74,
  reviewed: true
};

if (summarizeScore(summary) !== "red: 92 points") {
  throw new Error("score summary format changed");
}
