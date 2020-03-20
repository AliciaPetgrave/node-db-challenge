const db = require ('../data/dbConfig')

module.exports = {
    getProjects,
    getResources,
    getTasks,
    getById,
    addProject,
    addResources,
    addTasks,
}

function getProjects(){
    return db('projects')
}

function getResources(){
    return db('resources')
}

function getTasks(id){
    return db('projects')
    .select('*')
    .join('tasks', 'tasks.project_id', 'projects.id')
    .where({project_id: id})
}

function getById(id){
    return db('projects')
    .where({id})
    .first()
}

function addProject(project){
    return db('projects')
    .insert(project)
}

function addResources(resources){
    return db('resources')
    .insert(resources)
}

function addTasks(tasks){
    return db('tasks')
    .insert(tasks)
}