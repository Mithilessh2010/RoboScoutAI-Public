export type StreamProvider = "youtube" | "twitch" | "unsupported";

export function detectProvider(url: string): StreamProvider {
  if (url.includes("youtube.com") || url.includes("youtu.be")) return "youtube";
  if (url.includes("twitch.tv")) return "twitch";
  return "unsupported";
}

export function formatStreamTitle(title: string): string {
  return title.trim() || "Event stream";
}
