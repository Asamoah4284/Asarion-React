const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    subtitle: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
  
    subCategory: {
        type: String,
        trim: true
    },
    featuredImage: {
        type: String,
        default: null
    },
}, {
    timestamps: true
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;

