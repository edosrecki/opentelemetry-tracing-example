import { cleanEnv, num, str } from 'envalid'

export const env = cleanEnv(process.env, {
  LOG_LEVEL: str({
    default: 'info',
  }),
  PORT: num({
    default: 3000,
  }),
  FRONTEND_URL: str({
    example: 'http://frontend:3000',
  }),
  BACKEND_URL: str({
    example: 'http://backend:3002',
  }),
  POSTGRES_URL: str({
    example: 'postgres://postgres:postgres@postgres:5432/postgres',
  }),
})
