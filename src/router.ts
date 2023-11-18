import { Router } from "express";
import swaggerUi from "swagger-ui-express";

import DigimonController from "./controller/digimon";
import AuthController from "./controller/login";
import PokemonController from "./controller/pokemon";
import LoginRequest from "./requestes/login-request";
import PaginateRequest from "./requestes/paginate-request";
import SearchRequest from "./requestes/search-request";

// import AuthMiddleware from './middleware/auth-middleware';
const router = Router();

const swaggerDocument = require("./swagger.json");

const pokemonController = new PokemonController();
const digimonController = new DigimonController();
const paginateRequest = new PaginateRequest();
const searchRequest = new SearchRequest();
const authController = new AuthController();
// const authMiddleware = new AuthMiddleware();
const loginRequest = new LoginRequest();

router.use("/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use("/v1/login", loginRequest.validateRequest, authController.login);
router.get(
    "/v1/pokemons",

    paginateRequest.validateRequest,
    pokemonController.index
);
router.get(
    "/v1/pokemon/:name",
    searchRequest.validateRequest,
    pokemonController.show
);
router.get(
    "/v1/digimons",
    paginateRequest.validateRequest,
    digimonController.index
);
router.get(
    "/v1/digimon/:name",
    searchRequest.validateRequest,
    digimonController.show
);

export { router };

