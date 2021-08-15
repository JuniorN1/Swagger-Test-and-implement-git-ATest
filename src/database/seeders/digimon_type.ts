import faker from "faker";
import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("digimon_type").del();
    const data ={   
        type:"anime",
      
    };
    // Inserts seed entries
    await knex("digimon_type").insert(data);
};
