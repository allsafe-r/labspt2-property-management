
exports.up = function(knex, Promise) {
    return knex.schema.table('workOrders', function(table) {
        table.string('image').notNullable().defaultTo('none');
    });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.table('workOrders', function(table) {
        table.dropColumn('image');
    });
};
