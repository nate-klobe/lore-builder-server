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

    const username = req.body.username;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email_address = req.body.email_address;

    const newUser = new User({username, first_name, last_name, email_address});

    newUser.save()
        .then(() => res.json(`New user: ${username} successfully created.`))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.username = req.body.username;
            user.first_name = req.body.first_name;
            user.last_name = req.body.last_name;
            user.email_address = req.body.email_address;

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