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

function update(plant) {
    return db('plants')
    .where('nickname', plant.nickname)
    .update('nickname', plant.newNickname)
    .update('species', plant.species)
    .update('h2oFrequency', plant.h2oFrequency)
}
function deletePlant(plant) {
    return db('plants')
    .where('nickname', plant.nickname)
    .del()
}
module.exports = {
    findBy,
    add,
    find,
    update,
    deletePlant,
}