export interface UploadResult {
  uploadId: string;
  status: "queued" | "ready";
}

export async function createAutoscoreJob(): Promise<UploadResult> {
  return {
    uploadId: "public-demo-upload",
    status: "queued"
  };
}

export async function runDetection(): Promise<never> {
  throw new Error("Detection is available in the hosted RoboScoutAI frontend.");
}
