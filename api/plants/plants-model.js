const db = require('.././data/db-config')

function find() {
    return db('plants')
}

function findBy(filter) {
    return db('plants').where(filter)
}

function add(newUser) {
    return db('plants')
    .insert(newUser, ['username', 'user_id', 'password', 'phoneNumber'])
}

module.exports = {
    findBy,
    add,
    find,
}