import { Request, Response } from "express";
import digimonRepository from "../../repositories/digimonRepository";
import {PaginateProps} from '../../typings';

class digimonController{

    async index(request:Request,response:Response){
        const {
            offset,
            limit
        } = request.query as unknown as PaginateProps;
        
        const DigimonRepository = new digimonRepository();
  
        const pokemons = await DigimonRepository.getDigimons(offset, limit);

        return response.json(pokemons);
       

    }
    async show(request:Request,response:Response){
        const name = request.params.name as unknown as string;
        
        const DigimonRepository = new digimonRepository();
  
        const pokemons = await DigimonRepository.getAnDigimon(name);

        return response.json(pokemons);

    }

}
export default digimonController;

