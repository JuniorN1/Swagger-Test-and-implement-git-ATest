import { Router } from "express";
import swaggerUi from "swagger-ui-express";

import AuthController from "./controller/authentication";
import DigimonController from "./controller/digimon";
import PokemonController from "./controller/pokemon";
import LoginRequest from "./requestes/login-request";
import PaginateRequest from "./requestes/paginate-request";
import SearchRequest from "./requestes/search-request";
import RegisterRequest from "./requestes/register-request";

const router = Router();

const swaggerDocument = require("./swagger.json");

const pokemonController = new PokemonController();
const digimonController = new DigimonController();
const paginateRequest = new PaginateRequest();
const searchRequest = new SearchRequest();
const authController = new AuthController();
const loginRequest = new LoginRequest();
const registerRequest = new RegisterRequest();
// Swagger documentation
router.use("/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Authentications routes
router.use("/v1/login", loginRequest.validateRequest, authController.login);
router.use("/v1/register", registerRequest.validateRequest, authController.register);

// Pokemons routes
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

//  Digimon routes
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

