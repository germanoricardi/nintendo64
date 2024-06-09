import { PrismaClient } from "@prisma/client";

import articles from '../../src/data/articles.json'
import games from '../../src/data/games.json'
import { slugify } from '../../src/helpers/slugify'

const prisma = new PrismaClient()
const isDev = process.env.NODE_ENV === 'development'

/**
 * Main function to initialize the database seed process.
 * 
 * This function checks if the environment is development and processes command-line arguments
 * to determine whether to truncate and seed the 'articles' and 'games' tables.
 * 
 * Command-line arguments:
 * - `-truncate`: Truncate the specified tables before seeding.
 * - `articles`: Seed the articles table.
 * - `games`: Seed the games and genres tables.
 * 
 * Example usage in terminal:
 * ```
 * npx prisma db seed -- -truncate articles games
 * ```
 * 
 * @throws {Error} If the NODE_ENV is not set to development.
 * @returns {Promise<void>} Resolves when the truncation process is complete.
 */
async function main() {
  console.log('Init DB Seed...')

  if(!isDev)
    throw new Error('NODE_ENV is not a development environment.')

  const [,, ...args] = process.argv;

  const truncate = !!args.find(arg => arg == '-truncate')
  const articles = !!args.find(arg => arg == 'articles')
  const games = !!args.find(arg => arg == 'games')

  if(truncate){
    if(articles) await truncateArticles();
    if(games) await truncateGamesAndGenres();
  }

  if(articles) await seedArticles();
  if(games) await seedGamesAndGenres();
}

/**
 * Seeds the `Articles` table with predefined data.
 * @returns {Promise<void>} Resolves when the truncation process is complete.
 */
async function seedArticles() {
  console.log('Seeding Articles')

  for (let article of articles) {
    
    const record = await prisma.article.create({
      data: {
        title: article.title,
        slug: slugify(article.title),
        excerpt: article.excerpt,
        content: article.content,
        image: article.image,
        publishedAt: new Date(article.publish_date),
      }
    })

    console.log("*** created article", record.id, record.title);
  }
}

/**
 * Seeds the `Games` and `Genres` tables in the database with predefined data.
 * @returns {Promise<void>} Resolves when the truncation process is complete.
 */
async function seedGamesAndGenres() {
  console.log('Seeding Games and Genres');

  for (const game of games) {

    const genres = game.genre.map(title => {
      const slug = slugify(title);

      return {
        genre: {
          connectOrCreate: {
            where: { slug },
            create: { title, slug }
          }
        }
      }
    })

    const record = await prisma.games.create({
      data: {
        title: game.title,
        slug: game.slug,
        year: game.year,
        image: game.fileName,
        link: game.link || '#',
        plataform: 'Nintendo 64',
        genres: {create: genres}
      }
    })

    console.log("*** created game", record.id, record.title);
  }

}

/**
 * Truncates the `Articles` tables in the database.
 * @returns {Promise<void>} Resolves when the truncation process is complete.
 */
async function truncateArticles() {
  console.log('Truncating Articles'); 
  
  await prisma.article.deleteMany();
  await prisma.$executeRawUnsafe("DELETE FROM SQLITE_SEQUENCE WHERE name=$1", "Article");
}

/**
 * Truncates the `Games` and `Genres` tables in the database.
 * @returns {Promise<void>} Resolves when the truncation process is complete.
 */
async function truncateGamesAndGenres() {
  console.log('Truncating Games and Genres');

  await prisma.gameGenre.deleteMany();
  await prisma.games.deleteMany();
  await prisma.genres.deleteMany();
  await prisma.$executeRawUnsafe("DELETE FROM SQLITE_SEQUENCE WHERE name=$1", "GameGenre");
  await prisma.$executeRawUnsafe("DELETE FROM SQLITE_SEQUENCE WHERE name=$1", "Games");
  await prisma.$executeRawUnsafe("DELETE FROM SQLITE_SEQUENCE WHERE name=$1", "Genres");
}

main()
.then( async () => await prisma.$disconnect())
.catch( async (e) => {
  await prisma.$disconnect();
  process.exit(1);
} )