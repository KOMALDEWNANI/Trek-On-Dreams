const express = require("express")
const router = express.Router()
const [isAuthenticated, isAdmin] = require('../middlewares/middlewares')
const Trek = require("../models/Trek")

router.post('/addtrek', isAuthenticated, isAdmin, async(req, res) => {
    const imagesLink = req.body.imagesLink
    const title = req.body.title
    const subtitle = req.body.subtitle
    const description = req.body.description
    const duration = req.body.duration
    const ageGroup = req.body.ageGroup
    const price = req.body.price
    const food = req.body.food
    const accomodation = req.body.accomodation
    const firstAid = req.body.firstAid
    const scheduleImage = req.body.scheduleImage
    const maxLimit = req.body.maxLimit


    try {
        const trek = await new Trek({imagesLink, title, subtitle, description, duration,
                 ageGroup, price, food, accomodation, firstAid, scheduleImage, maxLimit})
        await trek.save()
        res.sendStatus(200).json(trek)
    } catch(err) {
        res.status(500).json({error : err});
    }

} )




module.exports = router;
