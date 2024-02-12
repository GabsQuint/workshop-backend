export interface ConfigInterface {
    knexConfigurationForFast: KnexConfigurationInterface;
}

export interface KnexConfigurationInterface {
    client: string;
    connection: Record<string, unknown>;
    pool: Record<string, unknown>;
    debug?: boolean;
    acquireConnectionTimeout?: number;
}
  
  