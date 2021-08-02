import {Router} from 'express';
import swaggerUi from 'swagger-ui-express';
import pokemonController from './controller/pokemon';
import digimonController from './controller/digimon';

const router = Router();

const swaggerDocument = require('./swagger.json');

const PokemonController = new pokemonController();
const DigimonController = new digimonController();

router.use('/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.get('/v1/pokemons',PokemonController.index);
router.get('/v1/pokemon/:name',PokemonController.show);
router.get('/v1/digimons',DigimonController.index);
router.get('/v1/digimon/:name',DigimonController.show);

export{router}
