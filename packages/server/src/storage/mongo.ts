export interface PublicDatabaseConfig {
  databaseName: string;
  connected: boolean;
}

export function getPublicDatabaseConfig(): PublicDatabaseConfig {
  return {
    databaseName: "roboscoutai-public",
    connected: false
  };
}

export async function connectDatabase(): Promise<never> {
  throw new Error("Database credentials are configured only in hosted environments.");
}
