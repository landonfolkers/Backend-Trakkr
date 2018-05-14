exports.up = function (knex, Promise) {
    return knex.schema.createTable('numbers', table => {
        table.increments('id').primary().
        table.text('identity').references('messages.identity')
        table.text('number1')
        table.text('number2')
        table.text('number3')
        table.text('number4')
        table.text('number5')
    })
}
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('numbers')
  }
