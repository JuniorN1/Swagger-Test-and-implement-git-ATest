import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('pokemon_type', function (table) {
        table.increments("id");
        table.string('type').notNullable();
      
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("pokemon_type");
}

