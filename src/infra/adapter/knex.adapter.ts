import Knex from 'knex';
import type { Knex as KnexApplication } from 'knex';
import { KnexConfigurationInterface } from '../config/config.interface';

export class KnexAdapter {
    private knexInstance: KnexApplication;

    constructor(databaseConnection: KnexConfigurationInterface) {
        this.knexInstance = Knex(databaseConnection);
        this.knexInstance.raw('select 1+1 as result')
            .then(() => console.info(`[KnexAdapter] Database connection with ${databaseConnection.connection.database}`))
            .catch((error: unknown) => {
                console.error(`[KnexAdapter] Database connection error with ${databaseConnection.connection.database}`, error);
                process.exit(1);
            });
        setInterval(async () => {
            try {
                await this.knexInstance?.select(1);
                console.info(`[KnexAdapter] Database ${databaseConnection.connection.database} connection is healthy`);
            } catch (error) {
                console.error(`[KnexAdapter] Database ${databaseConnection.connection.database} connection error during health check`, error);

                this.knexInstance = (await this.cleanupUnhealthyConnections(databaseConnection)).knexInstance;
            }
        }, 600000); // every 10 minutes
    }

    getKnexInstance(): KnexApplication {
        return this.knexInstance;
    }

    get connection(): KnexApplication {
        return this.knexInstance;
    }

    private async cleanupUnhealthyConnections(databaseConnection: KnexConfigurationInterface): Promise<KnexAdapter> {
        try {
            console.log(`[KnexAdapter] Cleaning up ${databaseConnection.connection.database} unhealthy connection`);
            await this.knexInstance?.destroy();
        }
        finally {
            this.knexInstance;
            return new KnexAdapter(databaseConnection);
        }
    }
}
