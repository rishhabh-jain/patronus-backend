const express = require('express')
const Vet = require('../models/vet')

const router = express.Router();

router.get('/', (req,res)=>{
    res.send("vets backend")
})
// get all posts route
router.get('/getvets' , async (req,res)=>{
    try {
        const stories = await Vet.find({})
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
router.post('/createvets',async (req, res) => {
    try {
    //   
    //req.body.user = req.user.id
    await Vet.create(req.body)
      res.redirect('/rescue')
    } catch (err) {
      console.error(err)
    //   res.render('error/500')
    }
})

module.exports = router;
