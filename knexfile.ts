// Update with your config settings.
require('dotenv').config();
interface KnexConfig {
  [key: string]: object;
};

const knexConfig: KnexConfig = {

  development: {
    client: 'sqlite3',
    connection: process.env.DB_TEST,  
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeders',
    },
    useNullAsDefault:true,
  },
   
 
  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host : process.env.HOST_PROD,
      user : process.env.USER_PROD,
      password :process.env.PASS_PROD,
      database : process.env.DB_PROD
    },
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeders',
    },
  }

};

export default knexConfig;
