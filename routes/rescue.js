const express = require('express')
const Rescue = require('../models/rescue')

const router = express.Router();

router.get('/', (req,res)=>{
    res.send("rescue backend")
})
// get all posts route
router.get('/getposts' , async (req,res)=>{
  const sort = {}
  if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
        console.log(sort)
    }
    const limit = parseInt(req.query.limit)
    const skip = parseInt(req.query.skip)
    try {
        const stories = await Rescue.find({})
          .populate('user')
          .limit(limit).skip(skip)
          .sort(sort)
          // .lean()
    
        res.send(stories)
      } catch (err) {
        console.error(err)
      //   res.render('error/500')
      }
})
router.get('/getposts/:id', async (req, res) => {
  const sort = {}
  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(':')
    sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    console.log(sort)
}
const limit = parseInt(req.query.limit)
const skip = parseInt(req.query.skip)
  try {
    let story = await Rescue.find({user : req.params.id}).populate('user').limit(limit).skip(skip)
    .sort(sort)

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
router.delete('/deletepost/:id' , async ( req, res)=> {
  try{
    await Rescue.deleteOne({_id : req.params.id})
      res.send('great success')
  }
  catch(err){
    console.log(err)
  }
})
module.exports = router;
