import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("pokemons").del();

    const data = {
        id: 1,
        name: "pokemon",
        image: "https://img.icons8.com/color/512/000000/pokeball-2.png",
        description: "The original Pokémon",
        season: "season 1",
    };

    // Inserts seed entries
    await knex("pokemons").insert(data);
}

