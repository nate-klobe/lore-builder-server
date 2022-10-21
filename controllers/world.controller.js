const World = require('../models/world.model')
const mongoose = require('mongoose')

// get all worlds
const getWorlds = async (req, res) => {
    const worlds = await World.find({}).sort({createdAt: -1})

    res.status(200).json(worlds)
}

// get world by id
const getWorld = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such world'})
    }
    const world = await World.findById(id)
    
    if(!world){
        return res.status(404).json({error: 'No such world'})
    }

    res.status(200).json(world)
}

// create new world
const createWorld = async (req, res) => {
    const { world_name, creator, description } = req.body

    try{
        const world = await World.create({world_name, creator, description})
        res.status(200).json(world)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// delete world
const deleteWorld = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such world'})
    }

    const world = await World.findOneAndDelete({_id: id})

    if(!world){
        return res.status(400).json({error: 'No such world'})
    }

    res.status(200).json(world)

}

//update world
const updateWorld = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such world'})
    }

    const world = await World.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!world){
        return res.status(400).json({error: 'No such world'})
    }

    res.status(200).json(world)
}

module.exports = {
    createWorld,
    getWorlds,
    getWorld,
    deleteWorld,
    updateWorld,
}