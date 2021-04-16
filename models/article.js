const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    language: {
        type: String,
        require: [true, 'Specify a programming language']

    },
    category: {
        type: String,
        require: [true, 'Category is required']
    },
    title: {
        type: String,
        require: [true, 'Title is required']
    }, 
    content: {
        type: String,
        required: [true, "Content can't be blank"]
    }
});

module.exports = mongoose.model('Article', articleSchema);
