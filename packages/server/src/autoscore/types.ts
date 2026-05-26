export type Alliance = "red" | "blue";

export interface PublicScoreSummary {
  alliance: Alliance;
  estimatedScore: number;
  autoScore: number;
  teleopScore: number;
  reviewed: boolean;
}
