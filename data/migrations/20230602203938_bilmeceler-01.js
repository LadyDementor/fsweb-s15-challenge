/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("bilmeceler", (t) => {
    t.string("id").notNullable().unique();
    t.string("bilmece").notNullable().unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("bilmeceler");
};
