export interface AutoscoreJob {
  id: string;
  matchName: string;
  status: "created" | "uploaded" | "detecting" | "review-ready";
  progress: number;
}

export async function listAutoscoreJobs(): Promise<AutoscoreJob[]> {
  return [
    {
      id: "public-demo",
      matchName: "Public Demo Match",
      status: "review-ready",
      progress: 100
    }
  ];
}
