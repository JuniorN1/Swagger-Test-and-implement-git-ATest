import { Request, Response } from "express";
import pokemonRepository from "../../repositories/pokemonRepository";

interface ParamsProps{
    params:[
        offset:number,
        limit:number,
    ]
}

class pokemonController{

    async index(request:Request,response:Response){
        const {
            offset,
            limit
        } = request.params;
        
        const PokemonRepository = new pokemonRepository();
  
        const pokemons = await PokemonRepository.getPokemons(0, 1);

        return response.json(pokemons);
       

    }
    async show(request:Request,response:Response){
        const {
            name
        }  = request.params;
        
        const PokemonRepository = new pokemonRepository();
  
        const pokemons = await PokemonRepository.getAnPokemon(name);

        return response.json(pokemons);

    }

}
export default pokemonController;

