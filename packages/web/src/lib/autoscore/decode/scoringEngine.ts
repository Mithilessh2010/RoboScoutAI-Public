export interface ScoreInput {
  redClassified: number;
  blueClassified: number;
}

export function estimatePublicScore(input: ScoreInput) {
  return {
    red: input.redClassified,
    blue: input.blueClassified
  };
}

export function runProductionScoring(): never {
  throw new Error("Production scoring rules are not executed from this public package.");
}
