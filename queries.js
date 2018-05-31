const database = require("./database-connection")

module.exports = {
    list() {
        return database.select("*").from('messages')
    },
    listPeople() {
        return database.select("*").from('numbers')
    },
    read(identity, table) {
        return database.select("*").from(table).where("identity", identity)
    },
    create(table, item) {
        return database(table).insert(item, "*")
            .then(record => record[0])
    },
    update(identity, table, item) {
        return database(table).where("identity", identity).update(item, "*")
            .then(record => record[0])
    },
    delete(id, table) {
        return database(table).where("id", id).del()
    },
}