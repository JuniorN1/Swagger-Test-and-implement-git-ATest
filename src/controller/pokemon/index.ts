import { Request, Response } from "express";
import pokemonRepository from "../../repositories/pokemonRepository";
import { PaginateProps } from "../../typings";


class pokemonController{

    async index(request:Request,response:Response){
        const {
            offset,
            limit
        } = request.params as unknown as PaginateProps;
        
        const PokemonRepository = new pokemonRepository();
  
        const pokemons = await PokemonRepository.getPokemons(0, 1);

        return response.json(pokemons);
       

    }
    async show(request:Request,response:Response){
        const name = request.params.name as unknown as string;
        
        const PokemonRepository = new pokemonRepository();
  
        const pokemons = await PokemonRepository.getAnPokemon(name);

        return response.json(pokemons);

    }

}
export default pokemonController;

