const db = require('.././data/db-config')

function find() {
    return db('users')
}

function findBy(filter) {
    return db('users').where(filter)
}

function add(newUser) {
    return db('users')
    .insert(newUser, ['username', 'user_id', 'password', 'phoneNumber'])
}

module.exports = {
    findBy,
    add,
    find,
}