exports.up = function(knex, Promise) {
  return knex.schema.createTable("contracts", table => {
    table.increments();
    table
      .integer("tenant")
      .notNullable()
      .references("id")
      .inTable("users");
    table
      .string("tenantEmail")
      .notNullable()
      .references("email")
      .inTable("users");
    table
      .integer("property")
      .notNullable()
      .references("houseId")
      .inTable("properties");
    table.string("startDate").notNullable();
    table.text("endDate").notNullable();
    table.text("rent").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("contracts");
};
