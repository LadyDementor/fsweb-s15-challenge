const bilmecelerData = require("../../api/bilmeceler/bilmeceler-data");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("bilmeceler").truncate();
  await knex("bilmeceler").insert(bilmecelerData);
};
