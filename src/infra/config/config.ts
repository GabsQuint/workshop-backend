import 'dotenv/config';
import { ConfigInterface } from './config.interface';

export const appConfig: ConfigInterface = {
  knexConfigurationForFast: {
    client: 'mysql',
    connection: {
      host: <string>process.env.FAST_HOST,
      port: <number>(process.env.FAST_PORT || 0),
      user: <string>process.env.FAST_USER,
      password: <string>process.env.FAST_PASS,
      database: <string>process.env.FAST_DATABASE,
    },
    pool: {
      min: 1,
      max: 35
    },
    debug: <boolean>(process.env.KNEX_DEBUG === 'true' || false),
    acquireConnectionTimeout: 5000
  },
}



