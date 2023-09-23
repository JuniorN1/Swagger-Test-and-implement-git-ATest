import faker from "faker";
import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();
    const data = {
        name: faker.name.firstName(),
        email: faker.internet.email(),
        password: "password",
        created_at: new Date(),
        updated_at: null,
        role_id: 1,
        deleted_at: null,
    };
    // Inserts seed entries
    await knex("users").insert(data);
}

