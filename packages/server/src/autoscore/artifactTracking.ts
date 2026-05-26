export interface PublicDetection {
  timestamp: number;
  label: string;
  confidence: number;
}

export function groupDetectionsByFrame(detections: PublicDetection[]) {
  return detections.reduce<Record<string, PublicDetection[]>>((frames, detection) => {
    const key = detection.timestamp.toFixed(1);
    frames[key] = [...(frames[key] ?? []), detection];
    return frames;
  }, {});
}

export function buildScoringTimeline() {
  throw new Error("Scoring timeline generation is provided by the hosted RoboScoutAI autoscore service.");
}
