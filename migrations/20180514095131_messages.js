exports.up = function (knex, Promise) {
    return knex.schema.createTable('messages', table => {
        table.increments('id').primary()
        table.text('identity') 
        table.text('message1')
        table.text('message2')
        table.text('message3')
    })
}
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('messages')
  }
