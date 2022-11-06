import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

async function main() {
   const user = await prisma.user.create({
      data: {
         name: 'John Doe',
         email: 'john.doe@gmail.com',
         avatarUrl: 'https://github.com/brunoliimas.png',
      }
   })   
   const pool = await prisma.pool.create({
      data: {
         title: 'Example Pool',
         code: 'BOL123',
         ownerId: user.id,

         participants: {
            create: {
               userId: user.id
            }
         }
      }
   })
   await prisma.game.create({
      data: {
         date: '2022-11-11T12:00:00.119Z',
         firstTeamCountryCode: 'DE',
         secondTeamCountryCode: 'BR',
      }
   })
   await prisma.game.create({
      data: {
         date: '2022-11-21T12:00:00.119Z',
         firstTeamCountryCode: 'BR',
         secondTeamCountryCode: 'AR',

         guesses: {
            create: {
               firstTeamPoint: 2,
               secondTeamPoint: 4,

               participant: {
                  connect: {
                     userId_poolId: {
                        userId: user.id,
                        poolId: pool.id
                     }
                  }
               }

            }
         }
      }
   })

}
main()