const express = require('express')
const {
    createStory,
    getStories,
    getStory,
    deleteStory,
    updateStory
} = require('../controllers/story.controller')

const router = express.Router()

router.get('/', getStories)

router.get('/:id', getStory)

router.post('/', createStory)

router.delete('/:id', deleteStory)

router.patch('/:id', updateStory)

module.exports = router