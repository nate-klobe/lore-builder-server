const mongoose = require('mongoose')
const Schema = mongoose.Schema

const worldSchema = new Schema({
    world_name: String,
    creator: mongoose.Types.ObjectId,
    description: String

}, { timestamps: true, })

module.exports = mongoose.model('World', worldSchema)