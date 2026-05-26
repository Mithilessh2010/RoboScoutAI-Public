export type WatchRoomEvent =
  | { type: "room:init"; roomId: string }
  | { type: "stream:add"; title: string; url: string }
  | { type: "playback:sync"; currentTime: number };

export function createWatchRoomSocket(): never {
  throw new Error("Realtime watch-room sync runs on the hosted RoboScoutAI service.");
}
