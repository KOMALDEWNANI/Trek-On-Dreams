const mongoose = require("mongoose")

const TrekSchema = new mongoose.Schema({
    
    imagesLink: {
        type: [String],
        default: [],
    },
    title: {
        type: String,
        default: "This is the title",
        required: true
    },
    subtitle: {
        type: String,
    },
    description : {
        type: String,
        default: "Description of trek here",
    },
    duration: {
        type: String,
        required: true
    },
    ageGroup: {
        type: String,
        default: "Any"
    },
    price: {
        type: Number,
        default: 0,
        required: true
    },
    food: {
        type: Boolean,
        required: true
    },
    accomodation: {
        type: Boolean,
        required: true
    },
    firstAid: {
        type: Boolean,
        required: true
    },

    scheduleImage: {
        type: String
    },
    
    registeredUsers: {
        type: [mongoose.Schema.ObjectId],
        default: []
    },
    maxLimit: {
        type: Number,
        required: true
    }

    

}, {timestamps: true})

module.exports = mongoose.model("Trek", TrekSchema)