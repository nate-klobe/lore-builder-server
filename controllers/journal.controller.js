const Journal = require('../models/journal.model')
const mongoose = require('mongoose')

// get all journals
const getJournals = async (req, res) => {
    const journals = await Journal.find({}).sort({createdAt: -1})

    res.status(200).json(journals)
}

// get journal by id
const getJournal = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such journal'})
    }
    const journal = await Journal.findById(id)
    
    if(!journal){
        return res.status(404).json({error: 'No such journal'})
    }

    res.status(200).json(journal)
}

// create new journal
const createJournal = async (req, res) => {
    const { story_id, world_id, creator } = req.body

    try{
        const journal = await Journal.create({story_id, world_id, creator})
        res.status(200).json(journal)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// delete journal
const deleteJournal = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such journal'})
    }

    const journal = await Journal.findOneAndDelete({_id: id})

    if(!journal){
        return res.status(400).json({error: 'No such journal'})
    }

    res.status(200).json(journal)

}

//update journal
const updateJournal = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such journal'})
    }

    const journal = await Journal.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!journal){
        return res.status(400).json({error: 'No such journal'})
    }

    res.status(200).json(journal)
}

module.exports = {
    createJournal,
    getJournals,
    getJournal,
    deleteJournal,
    updateJournal,
}