import axios from 'axios'
import { fastify } from 'fastify'
import { config } from '../config/config'
import { logger } from '../lib/logger'
import { fail, sleep } from '../lib/util'

async function main() {
  const server = fastify({ logger })

  server.addHook('onRequest', async () => {
    await sleep()
  })

  server.get('/', async () => {
    fail(config.frontend.errorProbability, 'frontend-random-error')

    await sleep()
    await axios.get(config.backend.url)

    return { message: 'Hello from Frontend!' }
  })

  server.listen({
    port: config.frontend.port,
    host: '0.0.0.0',
  })
}

main().catch((error) => {
  logger.error(error)
})
