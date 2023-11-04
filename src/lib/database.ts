import knex from 'knex'
import { config } from '../config/config'

export const buildDatabase = () =>
  knex({
    client: 'pg',
    connection: config.postgres.url,
    pool: config.postgres.pool,
  })
