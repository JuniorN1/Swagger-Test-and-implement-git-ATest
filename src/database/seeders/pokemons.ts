import { Knex } from "knex";
import faker from 'faker';
export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("pokemons").del();

    const data ={      
        name: "pokemon",
        image:faker.image.imageUrl(),
        description: faker.lorem.sentence(), 
        season:faker.name.firstName()
    };
    
    // Inserts seed entries
    await knex("pokemons").insert(data);

};
