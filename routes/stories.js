const router = require('express').Router();
let Story = require('../models/story.model');

router.route('/').get((req, res) => {
    Story.find()
        .then(storys => res.json(storys))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Story.findById(req.params.id)
        .then(story => res.json(story))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/create').post((req, res) => {

    const story_name = req.body.story_name;
    const world_id = req.body.world_id;
    const snippet = req.body.snippet;
    const description = req.body.description;

    const newStory = new Story({story_name, world_id, snippet, description});

    newStory.save()
        .then(() => res.json(`New story: ${story_name} successfully created.`))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Story.findById(req.params.id)
        .then(story => {
            story.story_name = req.body.story_name;
            story.snippet = req.body.snippet;
            story.description = req.body.description;

            story.save()
                .then(() => res.json('Story successfully updated.'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Story.findByIdAndDelete(req.params.id)
        .then(() => res.json('Story Deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;