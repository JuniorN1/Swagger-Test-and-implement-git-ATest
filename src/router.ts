import {Router} from 'express';
import swaggerUi from 'swagger-ui-express';
import pokemonController from './controller/pokemon';

const router = Router();

const swaggerDocument = require('./swagger.json');

const PokemonController = new pokemonController();

router.use('/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.get('/v1/pokemons',PokemonController.index);
router.get('/v1/pokemon/:name',PokemonController.show);

export{router}
