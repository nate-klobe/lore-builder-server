const express = require('express')
const {
    createJournal,
    getJournals,
    getJournal,
    deleteJournal,
    updateJournal
} = require('../controllers/journal.controller')

const router = express.Router()

router.get('/', getJournals)

router.get('/:id', getJournal)

router.post('/', createJournal)

router.delete('/:id', deleteJournal)

router.patch('/:id', updateJournal)

module.exports = router