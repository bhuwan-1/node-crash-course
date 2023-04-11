const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//defining schema - structure of the data
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true});

//creating model

const Blog = mongoose.model('Blog', blogSchema);

//exporting the model so we can access elsewhere.
module.exports = Blog;
