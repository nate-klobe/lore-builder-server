const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/create').post((req, res) => {

    const user_name = req.body.user_name;
    const world_id = req.body.world_id;
    const snippet = req.body.snippet;
    const description = req.body.description;

    const newUser = new User({user_name, world_id, snippet, description});

    newUser.save()
        .then(() => res.json(`New user: ${user_name} successfully created.`))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.user_name = req.body.user_name;
            user.snippet = req.body.snippet;
            user.description = req.body.description;

            user.save()
                .then(() => res.json('User successfully updated.'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User Deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;