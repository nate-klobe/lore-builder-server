const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    first_name: String,
    last_name: String,
    email_address:String,

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema)