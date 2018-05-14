exports.seed = function (knex, Promise) {
  return knex('messages').del()
    .then(function () {
      return knex('messages').insert([
        { id: 1, identity: 'Identity1', message1: 'message 1', message2: 'message 2', message3: 'message 3' },
        { id: 2, identity: 'Identity2', message1: 'message 1', message2: 'message 2', message3: 'message 3' },
        { id: 3, identity: 'Identity3', message1: 'message 1', message2: 'message 2', message3: 'message 3' },
      ])
    })
    .then(() => knex.raw("ALTER SEQUENCE messages_id_seq RESTART WITH 4"))
}
