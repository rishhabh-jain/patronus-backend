const express = require('express')
const Adopt = require('../models/adopt')

const router = express.Router();

router.get('/', (req,res)=>{
    res.send("adopt backend")
})
// get all posts route
router.get('/getposts' , async (req,res)=>{
    try {
        const stories = await Adopt.find({})
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
    await Adopt.create(req.body)
      res.redirect('/adopt')
    } catch (err) {
      console.error(err)
    //   res.render('error/500')
    }
})

module.exports = router;
