const mongoose = require("mongoose")

const TrekSchema = new mongoose.Schema({
   
    

}, {timestamps: true})

module.exports = mongoose.model("Post", PostSchema)