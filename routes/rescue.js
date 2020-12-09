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
          .populate('user')
          .sort({ createdAt: 'desc' })
          // .lean()
    
        res.send(stories)
      } catch (err) {
        console.error(err)
      //   res.render('error/500')
      }
})
router.get('/getposts/:id', async (req, res) => {
  try {
    let story = await Rescue.findById({user : req.params.id}).populate('user')

    if (!story) {
        res.send("no story found for this particular user")
    }

  //   if (story.user._id != req.user.id && story.status == 'private') {
  //     res.render('error/404')
  //   } else {
  //     res.render('stories/show', {
  //       story,
  //     })
  //   }
      res.send(story)
  } catch (err) {
    console.error(err)
  //   res.render('error/404')
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
