const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config();
const User = require('../models/User')

const isAuthenticated = (req, res, next) => {
    const token = req.headers["authtoken"]
    console.log(token)
    try {
    const payload = jwt.verify(token, process.env.SECRET_KEY)
    
    req.profile = payload.id
    
    next();
    } catch(err) {
        res.status(404).send("Authenticate yourselves first")
    } 
}

const isAdmin = async(req, res, next) => {
    try
 {   
    const user = await User.findById(req.profile).exec()
    // console.log(user)
    if(user.role == 2) 
       next()
    else
       res.status(404).send("You don't have an access to this page")}
       catch(e) {
        res.status(500).send("Internal server error")
       }
}

module.exports = [isAuthenticated, isAdmin]


