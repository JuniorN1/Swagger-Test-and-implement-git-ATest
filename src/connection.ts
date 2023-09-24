import knex from "knex";
import knexConfig from "../knexfile";

const connection = knex(configs());
function configs() {
    let configs = {};
    switch (process.env.ENVIRONMENT) {
        case "test": {
            configs = knexConfig.development;
            break;
        }
        case "development": {
            configs = knexConfig.development;
            break;
        }
        case "staging": {
            configs = knexConfig.staging;
            break;
        }
        case "production": {
            configs = knexConfig.production;
            break;
        }
    }
    return configs;
}

export default connection;

