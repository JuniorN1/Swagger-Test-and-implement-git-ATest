import { Request, Response } from "express";
import digimonRepository from "../../repositories/digimonRepository";

interface ParamsProps{
    params:[
        offset:number,
        limit:number,
    ]
}

class digimonController{

    async index(request:Request,response:Response){
        const {
            offset,
            limit
        } = request.params;
        
        const DigimonRepository = new digimonRepository();
  
        const pokemons = await DigimonRepository.getDigimons(0, 1);

        return response.json(pokemons);
       

    }
    async show(request:Request,response:Response){
        const {
            name
        }  = request.params;
        
        const DigimonRepository = new digimonRepository();
  
        const pokemons = await DigimonRepository.getAnDigimon(name);

        return response.json(pokemons);

    }

}
export default digimonController;

