const mongoose = require( 'mongoose' );

const Image = new mongoose.Schema({
    role: {
        type: String,
        required: true,
        enum: [ 'thumb', 'intro', 'article' ],
    },
    url: {
        type: String,
        required: true
    },
    alt: String,
    position: Number
} );

const Paragraph = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    position: Number
} );

const PostSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    images: [ Image ],
    paragraphs: [ Paragraph ],
    shortContent: String,
} );

module.exports = mongoose.model('Post', PostSchema);