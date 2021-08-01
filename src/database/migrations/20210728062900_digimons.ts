import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('digimons', function (table) {
        table.increments("id");
        table.string('name').notNullable();
        table.string('image').notNullable(); 
        table.string('description').notNullable(); 
        table.string('season').nullable(); 
      
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("digimons");
}

