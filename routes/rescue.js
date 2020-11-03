const express = require('express')
const Rescue = require('../models/rescue')

const router = express.Router();

router.get('/', (req,res)=>{
    res.send("rescue backend")
})
// get all posts route
router.get('/getposts' , async (req,res)=>{
    try {
        const stories = await Rescue.find({})
        //   .populate('user')
          .sort({ createdAt: 'desc' })
          // .lean()
    
        res.send(stories)
      } catch (err) {
        console.error(err)
      //   res.render('error/500')
      }
})
// posting the post route
router.post('/createposts',async (req, res) => {
    try {
    //   
    //req.body.user = req.user.id
    await Rescue.create(req.body)
      res.redirect('/rescue')
    } catch (err) {
      console.error(err)
    //   res.render('error/500')
    }
})

module.exports = router;
