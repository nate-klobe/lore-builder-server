const User = require('../models/user.model')
const mongoose = require('mongoose')

// get all users
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json(users)
}

// get user by id
const getUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such user'})
    }
    const user = await User.findById(id)
    
    if(!user){
        return res.status(404).json({error: 'No such user'})
    }

    res.status(200).json(user)
}

// create new user
const createUser = async (req, res) => {
    const { user_name, first_name, last_name, email_address } = req.body

    try{
        const user = await User.create({user_name, first_name, last_name, email_address})
        res.status(200).json(user)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// delete user
const deleteUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such user'})
    }

    const user = await User.findOneAndDelete({_id: id})

    if(!user){
        return res.status(400).json({error: 'No such user'})
    }

    res.status(200).json(user)

}

//update user
const updateUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such user'})
    }

    const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!user){
        return res.status(400).json({error: 'No such user'})
    }

    res.status(200).json(user)
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
}