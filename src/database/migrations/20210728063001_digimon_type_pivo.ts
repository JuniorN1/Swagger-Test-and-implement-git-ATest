import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('digimon_type_pivo', function (table) {  
        table.increments("id");
        table.foreign('digimon_id').references('digimons');
        table.string('type_id').references('pokemon_type');
      
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("digimon_type_pivo");
}

