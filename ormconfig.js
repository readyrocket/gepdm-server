const devConfig = {
  type: `postgres`,
  url: process.env.DATABASE_URL,
  synchronize: true,
  uuidExtension: `pgcrypto`,
  autoSchemaCreate: true,
  logging: {
    logQueries: true,
    logFailedQueryError: true,
  },
  migrations: [`lib/database/migrations/*.ts`],
  entities: [`lib/models/**/*.ts`],
  cli: {
    migrationsDir: `lib/database/migrations`,
  },
};

const prodConfig = {
  type: `postgres`,
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  uuidExtension: `pgcrypto`,
  migrations: [`dist/database/migrations/*.js`],
  entities: [`dist/models/**/*.js`],
  cli: {
    migrationsDir: `lib/database/migrations`,
  },
};

// const config: ConnectionOptions = {
//   type: `sqlite`,
//   database: `./src/database/database.sqlite`,
//   synchronize: true,
//   logging: false,
//   entities: [
//     `src/models/**/*.ts`,
//   ],
//   cli: {
//     migrationsDir: `src/database/migrations`,
//   },
// };

module.exports = process.env.ORM_CONFIG === `production` ? prodConfig : devConfig;
