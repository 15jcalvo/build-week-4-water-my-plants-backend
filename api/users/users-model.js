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
function updatePassword(user, newPassword) {
    return db('users')
    .where('username', user.username)
    .update('password', newPassword)
}

function updateUsername(user, newUsername) {
    return db('users')
    .where('username', user.username)
    .update('username', newUsername)
}

module.exports = {
    findBy,
    add,
    find,
    updatePassword,
    updateUsername,
}