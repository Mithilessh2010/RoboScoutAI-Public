import type { PublicScoreSummary } from "./types";

export function summarizeScore(summary: PublicScoreSummary): string {
  return `${summary.alliance}: ${summary.estimatedScore} points`;
}
