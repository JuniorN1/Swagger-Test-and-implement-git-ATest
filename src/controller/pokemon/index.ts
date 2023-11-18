import { Request, Response } from "express";

import PokemonRepository from "../../repositories/pokemonRepository";
import { PaginateProps } from "../../typings";

class PokemonController {
    async index(request: Request, response: Response) {
        const { offset, limit } = request.query as unknown as PaginateProps;

        const pokemonRepository = new PokemonRepository();
        const pokemons = await pokemonRepository.getPokemons(offset, limit);
        return response.json(pokemons);
    }

    async show(request: Request, response: Response) {
        const name = request.params.name as unknown as string;

        const pokemonRepository = new PokemonRepository();
        const pokemons = await pokemonRepository.getAnPokemon(name);
        return response.json(pokemons);
    }
}

export default PokemonController;

