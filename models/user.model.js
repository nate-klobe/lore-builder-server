const { Schema, default: mongoose } = require('mongoose');

/**
 *  
 *  
 * 
 *  */ 
const userSchema = new Schema({
    username: String,
    first_name: String,
    last_name: String,
    email_address:String,


}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;