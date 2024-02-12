import { KnexAdapter } from '../adapter/knex.adapter';
import { appConfig } from '../config/config';

export const knexForFast = new KnexAdapter(appConfig.knexConfigurationForFast);
