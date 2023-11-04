import { pino } from 'pino'
import { default as pretty } from 'pino-pretty'
import { config } from '../config/config'

const options = {
  enabled: config.logger.enabled,
  level: config.logger.level,
}

const prettyOptions = {
  colorize: true,
}

export const logger = config.logger.prettyPrint ? pino(options, pretty(prettyOptions)) : pino(options)
