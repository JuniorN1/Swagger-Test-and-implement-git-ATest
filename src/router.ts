import {Router,Response,Request} from 'express';
const router = Router();
import swaggerUi from 'swagger-ui-express';
const swaggerDocument = require('./swagger.json');

router.use('/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.get('/v1/pokemons',function(request:Request,response:Response){

    return response.json({
        name:"Pikachu",
        type:"Eletric"
        
    }).status(200)
})
export{router}
