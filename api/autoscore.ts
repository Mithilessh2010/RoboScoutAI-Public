export default function handler() {
  return new Response(
    JSON.stringify({
      ok: true,
      message: "Public autoscore API contract example",
      productionLogic: "hosted separately"
    }),
    {
      headers: { "content-type": "application/json" }
    }
  );
}
