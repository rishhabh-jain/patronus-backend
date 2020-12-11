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
          .populate('user')
          .sort({ createdAt: 'desc' })
          // .lean()
    
        res.send(stories)
      } catch (err) {
        console.error(err)
      //   res.render('error/500')
      }
})
// getting the post by the particular id
router.get('/getposts/:id', async (req, res) => {
  try {
    let story = await Adopt.find({user : req.params.id}).populate('user')

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
    await Adopt.create(req.body)
      res.redirect('/adopt')
    } catch (err) {
      console.error(err)
    //   res.render('error/500')
    }
})
router.delete('/deletepost/:id' , async ( req, res)=> {
  try{
    await Adopt.deleteOne({_id : req.params.id})
      res.send('great success')
  }
  catch(err){
    console.log(err)
  }
})
module.exports = router;
