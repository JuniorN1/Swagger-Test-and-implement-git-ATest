import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('pokemons', function (table) {
    table.increments("id");
    table.string('name').notNullable();
    table.string('description').notNullable(); 
});
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
    .dropTable("pokemons");
    
}

