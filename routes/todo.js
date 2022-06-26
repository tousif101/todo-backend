const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()

const Todo = require('../models/Todo')

router.get('/', (req, res) => {
    Todo.find()
        .then(todos => res.json(todos))
        .catch(err => res.status(404).json({ err:err }));
});

router.post('/',jsonParser, (req, res) => {
    console.log(req.body);
    Todo.create(req.body)
        .then(todo => res.json({ msg: 'Todo added successfully', todo:todo }))
        .catch(err => res.status(400).json({ error: err, "request": req.body }));
});

router.put('/:id', (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then(todo => res.json({ msg: 'Updated successfully', todo:todo }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

router.delete('/:id', (req, res) => {
    Todo.findByIdAndRemove(req.params.id, req.body)
        .then(todo => res.json({ mgs: 'todo entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such todo item' }));
});

module.exports = router;