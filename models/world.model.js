const mongoose = require('mongoose')
const Schema = mongoose.Schema

const worldSchema = new Schema({
    world_name: {
        type: String,
        required: true
    },
    creator: {
       type: mongoose.Types.ObjectId,
       required: true
    }, 
    description: {
        type: String,
        required: true
    },

}, { timestamps: true, })

module.exports = mongoose.model('World', worldSchema)