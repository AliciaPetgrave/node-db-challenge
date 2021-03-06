
exports.up = function(knex) {
    return knex.schema

  //projects
  .createTable('projects', tbl => {
    tbl.increments()

    tbl.string('name')
    .notNullable()

    tbl.string('description')

    tbl.boolean('completed')
    .notNullable()
    .defaultTo('false')

  })

  //resources
  .createTable('resources', tbl => {
    tbl.increments()

    tbl.string('name')
    .notNullable()
    .unique()

    tbl.string('description')
  })

  //tasks
  .createTable('tasks', tbl => {
    tbl.increments()

    tbl.string('description')
    .notNullable()

    tbl.string('notes')

    tbl.boolean('completed')
    .notNullable()
    .defaultTo('false')

    tbl.integer('project_id')
    .notNullable()
    .references('id')
    .inTable('projects')
  })

  
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")
};
