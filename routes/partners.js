const express = require('express')
const Partners = require('../models/partners')

const router = express.Router();

router.get('/getpartners' , async (req,res)=>{
  try {
      const stories = await Partners.find({})
      //   .populate('user')
        .sort({ createdAt: 'desc' })
        // .lean()
  
      res.send(stories)
    } catch (err) {
      console.error(err)
    //   res.render('error/500')
    }
})
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
