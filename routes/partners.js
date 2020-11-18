const express = require('express')
const Partners = require('../models/partners')

const router = express.Router();

router.get('/', (req,res)=>{
    res.send("get request for partners")
})
// get all posts route
// router.get('/getposts' , async (req,res)=>{
//     try {
//         const stories = await Rescue.find({})
//         //   .populate('user')
//           .sort({ createdAt: 'desc' })
//           // .lean()
    
//         res.send(stories)
//       } catch (err) {
//         console.error(err)
//       //   res.render('error/500')
//       }
// })
// posting the post route
router.post('/postpartners',async (req, res) => {
    try {
    //   
    //req.body.user = req.user.id
    await Partners.create(req.body)
      res.redirect('/partners')
    } catch (err) {
      console.error(err)
    //   res.render('error/500')
    }
})

module.exports = router;
