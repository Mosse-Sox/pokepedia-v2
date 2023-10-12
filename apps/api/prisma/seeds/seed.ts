import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();


/**
 * This function seeds the database and is run whenever `npm run db:reset` is run
 */

async function seedDatabase() {
  for (let i = 1; i <= 5; i++) {
    const user = await prisma.user.create({
      data: {
        id: uuidv4(),
        email: `user${i}@example.com`,
        password: `password${i}`,
      },
    });

    for (let j = 1; j <= 20; j++) {
      await prisma.collection.create({
        data: {
          id: uuidv4(),
          userId: user.id,
          is_shiny: Math.random() < 0.5,
          is_normal: Math.random() < 0.5,
          pokemon_id: Math.floor(Math.random() * 1010) + 1,
        },
      });
    }
  }
}

seedDatabase()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
