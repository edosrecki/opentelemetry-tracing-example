import { AxiosError } from 'axios'
import { setTimeout } from 'timers/promises'

const MAX_SLEEP_MS = 30_000

export const sleep = async () => {
  await setTimeout(Math.random() * MAX_SLEEP_MS)
}

export const fail = (probability: number, error: string) => {
  if (Math.random() < probability) {
    throw new Error(error)
  }
}

export const parseError = (error: unknown) => {
  if (error instanceof AxiosError) {
    return { status: error.response?.status, data: error.response?.data }
  }

  if (error instanceof Error) {
    return { error: error.message }
  }
}
