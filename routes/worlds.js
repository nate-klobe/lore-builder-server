const router = require('express').Router();
let World = require('../models/world.model');

router.route('/').get((req, res) => {
    World.find()
        .then(worlds => res.json(worlds))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    World.findById(req.params.id)
        .then(world => res.json(world))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/create').post((req, res) => {

    const world_name = req.body.world_name;
    const snippet = req.body.snippet;
    const description = req.body.description;

    const newWorld = new World({world_name, snippet, description});

    newWorld.save()
        .then(() => res.json(`New world: ${world_name} successfully created.`))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    World.findById(req.params.id)
        .then(world => {
            world.world_name = req.body.world_name;
            world.snippet = req.body.snippet;
            world.description = req.body.description;

            world.save()
                .then(() => res.json('World successfully updated.'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    World.findByIdAndDelete(req.params.id)
        .then(() => res.json('World Deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;