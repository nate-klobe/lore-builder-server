const { Schema, default: mongoose } = require('mongoose');

/**
 *  
 *  
 * 
 *  */ 
const storySchema = new Schema({
    story_name: String,
    world_id: mongoose.Types.ObjectId,
    snippet: String,
    description: String,


}, {
    timestamps: true,
});

const Story = mongoose.model('Story', storySchema);

module.exports = Story;