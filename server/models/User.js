const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },

    email: {
        type: String,
        require: true,
        max: 50,
        unique: true
    },

    password: {
        type: String,
        required: true,
        min: 8
    },

    role: {
        type: Number,
        default: 0
    },
    purchases: {
        type: Array,
        default: []
    }
}, {timestamps: true})

module.exports = mongoose.model("User", UserSchema)