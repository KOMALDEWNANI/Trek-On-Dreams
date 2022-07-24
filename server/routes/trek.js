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

router.get('/fetchAllTreks', async(req, res) => {
    try{
       const treks = await Trek.find({})
       res.status(200).json(treks)
    }
    catch {
      res.status(500).send("Internal Server error")
    }
  })

  router.get('/fetchUserTreks', isAuthenticated, async(req, res) => {
    try{
          const treks = await Trek.find({})
          console.log(treks)
          const ans = []
          for (let index = 0; index < treks.length; index++) { 
            for(let j = 0; j < treks[index]['registeredUsers'].length; j++) {
                if(treks[index]['registeredUsers'][j] == req.profile)
                   ans.push(treks[index])
                     
            }
        }
          res.status(200).json(ans)
    }
    catch {
      res.status(500).send("Internal Server error")
    }
  })

  router.put('/updateTrek/:id', isAuthenticated, isAdmin,  async(req, res) => {
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
  
   const postToUpdate = await Trek.findById(req.params.id)
   if(!postToUpdate) {
      return res.status(400).send("No such trek found")
   }
   
const trekObject = {imagesLink, title, subtitle, description, duration, ageGroup, price,
food, accomodation, firstAid, scheduleImage, maxLimit};
  
  const trek =  await Trek.updateOne({_id: mongoose.Types.ObjectId(req.params.id)}, {$set : trekObject})
  if(!trek) {
        return res.status(400).send("Cannot update the post")
  }
  
  
  res.status(200).json({trek: trek})
  }
  catch {
    res.status(500).send("Internal Server error")
  }
  
  })

  
router.delete('/deletePost/:id', isAuthenticated, isAdmin, async(req, res) => {

  try {
  const trekToDelete = await Trek.findById(req.params.id)
  if(!trekToDelete) {
     return res.status(400).send("No such post found")
  }
  
  await Post.findByIdAndDelete(req.params.id);
  res.status(200).send("Successfully deleted")

}
catch {
   res.status(500).send("Internal Server Error")
}
})




module.exports = router;
