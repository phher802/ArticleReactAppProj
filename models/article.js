const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ['Python', 'JavaScript', 'C#', 'Ruby', 'Java'],
        require: [true, 'category is required']
    },
    title: {
        type: String,
        require: [true, 'Title is required']
    }, 
    content: {
        type: String,
        required: [true, "content can't be blank"]
    }
});

module.exports = mongoose.model('Article', articleSchema);
