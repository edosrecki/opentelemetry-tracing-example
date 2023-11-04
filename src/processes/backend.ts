import fastify from 'fastify'
import { config } from '../config/config'
import { buildDatabase } from '../lib/database'
import { logger } from '../lib/logger'
import { fail, sleep } from '../lib/util'

async function main() {
  const database = buildDatabase()
  const server = fastify({ logger })

  server.addHook('onRequest', async () => {
    await sleep()
  })

  server.get('/', async () => {
    fail(config.backend.errorProbability, 'backend-random-error')

    await database.raw(`SELECT pg_sleep(${Math.random() * 10})`)

    return { message: 'Hello from Backend!' }
  })

  server.listen({
    port: config.backend.port,
    host: '0.0.0.0',
  })
}

main().catch((error) => {
  logger.error(error)
})
