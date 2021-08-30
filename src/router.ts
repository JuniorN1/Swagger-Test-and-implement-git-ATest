import {Router} from 'express';
import swaggerUi from 'swagger-ui-express';
import pokemonController from './controller/pokemon';
import digimonController from './controller/digimon';
import paginateRequest from './requestes/paginateRequest';
import searchRequest from './requestes/searchRequest';
const router = Router();

const swaggerDocument = require('./swagger.json');

const PokemonController = new pokemonController();
const DigimonController = new digimonController();
const PaginateRequest   = new paginateRequest();
const SearchRequest     = new searchRequest();

router.use('/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.get('/v1/pokemons',PaginateRequest.validateRequest,PokemonController.index);
router.get('/v1/pokemon/:name',SearchRequest.validateRequest,PokemonController.show);
router.get('/v1/digimons',PaginateRequest.validateRequest ,DigimonController.index);
router.get('/v1/digimon/:name',SearchRequest.validateRequest,DigimonController.show);

export{router}
