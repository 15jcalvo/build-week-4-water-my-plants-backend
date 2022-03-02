exports.up = async (knex) => {
    await knex.schema
      .createTable('plants', (plants) => {
        plants.increments('id')
        plants.string('nickname').notNullable()
        plants.string('species').notNullable()
        plants.string('h2oFrequency').notNullable()
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('plants')
  }
