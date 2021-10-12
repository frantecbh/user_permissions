module.exports = {
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": process.env.DATABASE_PWD,
  "database": "permissions",
 
  "migrations":["./src/database/migrations/**.ts"],
  "entities":["./src/model/**.ts"],
    "cli":{
      "migrationsDir": "./src/database/migrations"
  }
}
