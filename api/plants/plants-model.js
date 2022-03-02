const db = require('.././data/db-config')

function find() {
    return db('plants')
}

function findBy(filter) {
    return db('plants').where(filter)
}

function add(newPlant) {
    return db('plants')
    .insert(newPlant, ['nickname', 'id', 'species', 'h2oFrequency'])
}

module.exports = {
    findBy,
    add,
    find,
}