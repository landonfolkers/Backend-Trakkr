exports.seed = function (knex, Promise) {
  return knex('numbers').del()
    .then(function () {
      return knex('numbers').insert([
        { id: 1, identity: 'Identity1', number1: '+14028815965', number2: '+14028815965', number3: '+14028815965', number4: '+14028815965', number5: '+14028815965' },
        { id: 2, identity: 'Identity2', number1: '+14028815965', number2: '+14028815965', number3: '+14028815965', number4: '+14028815965', number5: '+14028815965' },
        { id: 3, identity: 'Identity3', number1: '+14028815965', number2: '+14028815965', number3: '+14028815965', number4: '+14028815965', number5: '+14028815965' },
      ])
    })
    .then(() => knex.raw("ALTER SEQUENCE numbers_id_seq RESTART WITH 4"))
}
