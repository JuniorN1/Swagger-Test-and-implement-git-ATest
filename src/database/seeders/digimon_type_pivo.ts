import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("digimon_type_pivo").del();
    const data = {
        id: 1,
        digimon_id: 1,
        type_id: 1,
    };
    // Inserts seed entries
    await knex("digimon_type_pivo").insert(data);
}

