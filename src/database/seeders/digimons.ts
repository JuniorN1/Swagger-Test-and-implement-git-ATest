import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("digimons").del();
    const data = {
        name: "digimon",
        image: "https://user-images.githubusercontent.com/23733854/129489911-d647c6f5-11da-4c5a-9c9a-4045b46fa41c.png",
        description: "Digimon Dejimon, também chamado de Digital Monsters ",
        season: "season 1",
    };
    // Inserts seed entries
    await knex("digimons").insert(data);
}

