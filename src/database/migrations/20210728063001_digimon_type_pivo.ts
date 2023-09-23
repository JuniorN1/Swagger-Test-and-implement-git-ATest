import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("digimon_type_pivo", function (table) {
        table.increments("id");
        table.integer("digimon_id").references("digimons");
        table.integer("type_id").references("digimon_type");
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("digimon_type_pivo");
}

