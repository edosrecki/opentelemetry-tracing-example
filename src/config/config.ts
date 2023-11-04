import pkg from '../../package.json'
import { env } from './env'

export const config = {
  package: {
    name: pkg.name,
    version: pkg.version,
  },
  logger: {
    enabled: !env.isTest,
    level: env.LOG_LEVEL,
    prettyPrint: env.isDev,
  },
  frontend: {
    port: env.PORT,
    url: env.FRONTEND_URL,
    errorProbability: 0.2,
  },
  backend: {
    port: env.PORT,
    url: env.BACKEND_URL,
    errorProbability: 0.2,
  },
  postgres: {
    url: env.POSTGRES_URL,
    pool: {
      min: 0,
      max: 5,
    },
  },
}
