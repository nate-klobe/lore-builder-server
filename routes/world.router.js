const express = require('express')
const {
    createWorld,
    getWorlds,
    getWorld,
    deleteWorld,
    updateWorld
} = require('../controllers/world.controller')

const router = express.Router()

router.get('/', getWorlds)

router.get('/:id', getWorld)

router.post('/', createWorld)

router.delete('/:id', deleteWorld)

router.patch('/:id', updateWorld)

module.exports = router