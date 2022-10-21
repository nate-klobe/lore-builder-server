const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storySchema = new Schema({
    story_name: String,
    creator: mongoose.Types.ObjectId,
    world_id: mongoose.Types.ObjectId,
    description: String,

}, { timestamps: true });

module.exports = mongoose.model('Story', storySchema)