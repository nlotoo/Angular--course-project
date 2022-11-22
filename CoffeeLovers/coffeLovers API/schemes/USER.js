const mongoose = require("mongoose");
const { Schema } = require('mongoose')

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        requred: true,
        minLength: 4
    },
    password: {
        type: String,
        requred: true
    },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    likedItems: [{ type: Schema.Types.ObjectId, ref: 'Item' }],

})

module.exports = mongoose.model("User", userSchema);