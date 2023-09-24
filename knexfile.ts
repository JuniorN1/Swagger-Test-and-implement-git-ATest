// Update with your config settings.
require("dotenv").config();
interface KnexConfig {
    [key: string]: object;
}
// TODO: Check driver marianDB
const knexConfig: KnexConfig = {
    test: {
        client: "mysql",
        connection: {
            host: process.env.DATABASE_HOST_TEST,
            user: process.env.DATABASE_USERNAME_TEST,
            password: process.env.DATABASE_PASSWORD_TEST,
            database: process.env.DATABASE_NAME_TEST,
            port: process.env.DATABASE_PORT_TEST
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: "./src/database/migrations",
        },
        seeds: {
            directory: "./src/database/seeders",
        },
    },
    development: {
        client: "mysql",
        connection: {
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            port: process.env.DATABASE_PORT
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: "./src/database/migrations",
        },
        seeds: {
            directory: "./src/database/seeders",
        },
    },
    staging: {
        client: "mysql",
        connection: {
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            port: process.env.DATABASE_PORT
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: "./src/database/migrations",
        },
        seeds: {
            directory: "./src/database/seeders",
        },
    },

    production: {
        client: "mysql",
        connection: {
            host: process.env.HOST_PROD,
            user: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            port: process.env.DATABASE_PORT
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: "./src/database/migrations",
        },
        seeds: {
            directory: "./src/database/seeders",
        },
    },
};

export default knexConfig;

