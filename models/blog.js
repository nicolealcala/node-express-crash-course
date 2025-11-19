const mongoose = require('mongoose');
const Schema = mongoose.Schema; // defines the Structure of the document/data.

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    snippet: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true
    },
    tags: [String],
}, { timestamps: true });


const Blog = mongoose.model('Blog', blogSchema); // Singular form of the collection name (blogs --> Blog) saved to a constant "Blog"

module.exports = Blog


