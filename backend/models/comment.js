const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    author: String,
    text: String,
    city: String
})

module.exports = mongoose.model('Comment', CommentsSchema);
