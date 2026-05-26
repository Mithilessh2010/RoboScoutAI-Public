export interface WatchRoom {
  id: string;
  name: string;
  streams: Array<{ title: string; url: string }>;
}

export function createWatchRoom(name: string): WatchRoom {
  return {
    id: "public-room",
    name,
    streams: []
  };
}
