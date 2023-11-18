import knex from "knex";
import knexConfig from "../knexfile";

const connection = knex(
    process.env.NODE_ENV === "test"
        ? knexConfig.development
        : knexConfig.production
);

export default connection;
