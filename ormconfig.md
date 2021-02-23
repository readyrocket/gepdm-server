{
   "type": "postgres",
   "host": "localhost",
   "port": 5432,
   "username": "serverdvp",
   "password": "Del5029pg@84",
   "database": "test",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/models/**/*.ts"
   ],
   "migrations": [
      "src/database/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/models",
      "migrationsDir": "src/database/migrations",
      "subscribersDir": "src/subscriber"
   }
}
