import { Redis } from '@upstash/redis'
//importing redis
//used as a database, cache,
export const redis = new Redis({
  url: process.env.REDIS_URL!,
  token: process.env.REDIS_SECRET!,
})
