import { json } from "@sveltejs/kit";
import { listAutoscoreJobs } from "$lib/server/autoscoreClient";

export async function GET() {
  return json({
    jobs: await listAutoscoreJobs()
  });
}
