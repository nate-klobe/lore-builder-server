const mongoose = require('mongoose')
const Schema = mongoose.Schema

const journalSchema = new Schema({
    story_id: mongoose.Types.ObjectId,
    world_id: mongoose.Types.ObjectId,
    creator: mongoose.Types.ObjectId,

}, { timestamps: true, })

module.exports = mongoose.model('Journal', journalSchema)