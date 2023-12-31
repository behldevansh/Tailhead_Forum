import { PrismaClient } from '@prisma/client'
import "server-only"

declare global {

  // eslint-disable-next-line no-var, no-unused-vars
  var cachedPrisma: PrismaClient

}

let prisma: PrismaClient
if (process.env.NODE_ENV === 'production') 
{
  prisma = new PrismaClient()
} else {
  // Ensure the prisma instance is re-used during hot-reloading
  if (!global.cachedPrisma) {

    global.cachedPrisma = new PrismaClient()
  }


  // if (!global.cachedPrisma) {

  //   global.cachedPrisma = new PrismaClient()
  // }

  
  prisma = global.cachedPrisma
}

export const db = prisma