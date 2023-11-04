import axios from 'axios'
import { config } from '../config/config'
import { logger } from '../lib/logger'
import { parseError, sleep } from '../lib/util'

async function main() {
  for (;;) {
    logger.info('client-iteration-start')

    try {
      await sleep()
      const response = await axios.get(config.frontend.url)

      logger.info({ status: response.status, data: response.data }, 'success')
    } catch (error) {
      logger.error(parseError(error), 'error')
    }
  }
}

main().catch((error) => {
  logger.error({ error })
})
