import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'bartektricks@gmail.com' },
    update: {},
    create: {
      email: 'bartektricks@gmail.com',
      login: 'bartektricks',
      posts: {
        create: {
          title: 'Add a dark theme option',
          body: 'It would help people with light sensitivities and who prefer dark mode.',
          score: 2137,
          slug: 'add-a-dark-theme-option',
          category: {
            create: {
              name: 'Feature',
              slug: 'feature',
            },
          },
          status: {
            create: {
              name: 'In-Progress',
              slug: 'in-progress',
            },
          },
        },
      },
    },
  });

  console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
