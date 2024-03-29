// importing
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')

const authRoute = require('./routes/auth')
const trekRoute = require('./routes/trek')
const cors = require('cors')

dotenv.config()

// app config
const app = express()
const port = process.env.PORT || 8800

// db config
mongoose.connect(process.env.MONGO_URL, () => {
    console.log("Connected to Mongo")
});

//middlewares
app.use(cors({
    origin : "*",
    allowedHeaders: "*"
}));
app.use(express.json()) // body parser
app.use(helmet())
app.use(morgan("common"))

app.use('/api/auth', authRoute)
app.use('/api/trek', trekRoute)




// listen
app.listen(port, () => {
    console.log("Server is up and running")
})