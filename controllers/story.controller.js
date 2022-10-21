const Story = require('../models/story.model')
const mongoose = require('mongoose')

// get all stories
const getStories = async (req, res) => {
    const stories = await Story.find({}).sort({createdAt: -1})

    res.status(200).json(stories)
}

// get story by id
const getStory = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such story'})
    }
    const story = await Story.findById(id)
    
    if(!story){
        return res.status(404).json({error: 'No such story'})
    }

    res.status(200).json(story)
}

// create new story
const createStory = async (req, res) => {
    const { story_name, creator, world_id, description } = req.body

    try{
        const story = await Story.create({story_name, creator, world_id, description})
        res.status(200).json(story)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// delete story
const deleteStory = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such story'})
    }

    const story = await Story.findOneAndDelete({_id: id})

    if(!story){
        return res.status(400).json({error: 'No such story'})
    }

    res.status(200).json(story)

}

//update story
const updateStory = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such story'})
    }

    const story = await Story.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!story){
        return res.status(400).json({error: 'No such story'})
    }

    res.status(200).json(story)
}

module.exports = {
    createStory,
    getStories,
    getStory,
    deleteStory,
    updateStory,
}