import { Request, Response } from "express";
import DigimonRepository from "../../repositories/digimonRepository";
import {PaginateProps} from '../../typings';

class digimonController{

    async index(request:Request,response:Response){
        const {
            offset,
            limit
        } = request.query as unknown as PaginateProps;

        const digimonRepository = new DigimonRepository();
        
        const digimons = await digimonRepository.getDigimons(offset, limit);

        return response.json(digimons);
       

    }
    async show(request:Request,response:Response){
        const name = request.params.name as unknown as string;
        
        const digimonRepository = new DigimonRepository();
  
        const digimons = await digimonRepository.getAnDigimon(name);

        return response.json(digimons);

    }

}
export default digimonController;

