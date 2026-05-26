export interface ModelDescriptor {
  name: string;
  task: "artifact-detection" | "robot-detection" | "scoring-structure";
  available: boolean;
}

export const publicModelRegistry: ModelDescriptor[] = [
  { name: "decode-artifact-detector", task: "artifact-detection", available: false },
  { name: "decode-robot-detector", task: "robot-detection", available: false },
  { name: "decode-scoring-structure", task: "scoring-structure", available: false }
];

export function requireModel(name: string): never {
  throw new Error(`Model '${name}' is loaded from private deployment storage and is not bundled in this repository.`);
}
