const express = require('express');
const db = require('./project-model')

const router = express.Router()

//GET Projects working
router.get('/', (req, res) => {
    db.getProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to get projects'})
    })
})

//GET Resources working
router.get('/resources', (req, res) => {
    db.getResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to get resources'})
    })
})

//GET Tasks working
router.get('/:id/tasks', (req, res) => {
    db.getTasks(req.params.id)
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to get tasks'})
    })
})

//GET Projects by id working
router.get('/:id', (req, res) => {
    db.getById(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to get project'})
    })
})

//POST Projects working
router.post('/', (req, res) => {
    db.addProject(req.body)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to create new project'});
        })
})

//POST Resources working
router.post('/resources', (req, res) => {
    db.addResources(req.body)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to create new resource'});
        })
})

//POST Tasks working
router.post('/:id/tasks', (req, res) => {
    db.getById(req.params.id)
    .then(task => {
            db.addTasks(req.body, req.params.id)
            .then(tasks => {
            res.status(201).json(tasks);
        })
     })
        .catch(error => {
            res.status(500).json({ message: 'Failed to create new task'});
        })
})



module.exports = router;