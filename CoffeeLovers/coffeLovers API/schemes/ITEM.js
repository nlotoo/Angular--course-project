const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const itemSchema = new mongoose.Schema({

    itemName: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true
    },
    likedAuthor: {
        type: Array,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    comm: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]





})


module.exports = mongoose.model('Item', itemSchema)