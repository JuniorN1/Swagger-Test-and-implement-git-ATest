import { Router } from "express";
import swaggerUi from "swagger-ui-express";

import DigimonController from "./controller/digimon";
import AuthController from "./controller/login";
import PokemonController from "./controller/pokemon";
import paginateRequest from "./requestes/paginateRequest";
import searchRequest from "./requestes/searchRequest";

const router = Router();

const swaggerDocument = require("./swagger.json");

const pokemonController = new PokemonController();
const digimonController = new DigimonController();
const PaginateRequest = new paginateRequest();
const SearchRequest = new searchRequest();
const authController = new AuthController();

router.use("/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use("/v1/login", authController.login);
router.get(
    "/v1/pokemons",
    PaginateRequest.validateRequest,
    pokemonController.index
);
router.get(
    "/v1/pokemon/:name",
    SearchRequest.validateRequest,
    pokemonController.show
);
router.get(
    "/v1/digimons",
    PaginateRequest.validateRequest,
    digimonController.index
);
router.get(
    "/v1/digimon/:name",
    SearchRequest.validateRequest,
    digimonController.show
);

export { router };

