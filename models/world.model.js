const { Schema, default: mongoose } = require('mongoose');

/**
 *  
 *  
 * 
 *  */ 
const worldSchema = new Schema({
    world_name: String,
    creator: mongoose.Types.ObjectId,
    snippet: String,
    description: String,

    //Government
    //Society
    //Magic
    //Technology
    // History - Seperate?



}, {
    timestamps: true,
});

const World = mongoose.model('World', worldSchema);

module.exports = World;