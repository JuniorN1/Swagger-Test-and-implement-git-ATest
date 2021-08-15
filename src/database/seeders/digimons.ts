import faker from "faker";
import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("digimons").del();
    const data ={      
        name: "digimon",
        image:faker.image.imageUrl(),
        description: faker.lorem.sentence(), 
        season:faker.name.firstName()
    };
    // Inserts seed entries
    await knex("digimons").insert(data);
};
