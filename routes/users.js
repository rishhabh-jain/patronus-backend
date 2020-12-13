const express = require('express')
const User = require('../models/User')
const router = express.Router();
router.get('/getusers' , async (req,res)=>{
    const match ={}
    if (req.query.isAdmin) {
        match.isAdmin = req.query.isAdmin === 'true'
        console.log(match)
    }
    try {
        const users = await User.find(match)
        //   .populate('user')
          .sort({})
          // .lean()
    
        res.send(users)
      } catch (err) {
        console.error(err)
      //   res.render('error/500')
      }
  })
module.exports = router;