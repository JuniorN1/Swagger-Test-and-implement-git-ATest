import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("pokemon_type_pivo", function (table) {
        table.increments("id");
        table.integer("pokemon_id").references("pokemons");
        table.integer("type_id").references("pokemon_type");
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("pokemon_type_pivo");
}

